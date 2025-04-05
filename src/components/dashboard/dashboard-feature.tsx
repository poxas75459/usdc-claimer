/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3RWWXAGHyURmrorZDD4NqUYMWtMajbrfSqGn88FKpKPD4riJqMNywyyLSZQc3VwDX5t3rzStDbD3mpkqdie95MtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9U9xNVXY2bNCsJTfMjNwgmh4CtBKhHBPy7REeSqFvvbarQLwHspGyrgtKLdTzaWaUPzD16RL88mgeXGBewvAgjd",
  "key1": "2YaqeoVFUeqMZfx5hpWedpRVbJeKyfux9a4TY28RnSfv6wUhKemki5huubK7nyouSTVToFHsbRrosfKZy6qddY2P",
  "key2": "5ApMjYnmFZjzKHxnzdEAsPRKt8LiMGWyvBi14M7i7LRg7pRZCKczrhgMwAJ6gcEdbRdSSWYwcSXPYh7pQPofEid7",
  "key3": "4XMMx7WEqkTsyASAAH2wPvoW95Y2mACdfW33TdrWqZQveXvjfQUW1sthq1LvdDFV6gXmWexeUwhi4vWp4qZ4aeeq",
  "key4": "3RtTq8HjdRj2NnSGUgDGnYVcLYoqnzjCxJxTRq7qTwyZa1RpXWb3oRK4Yk2uTZEnUjhYNDMrn59xwKxdaeteu1Jv",
  "key5": "21ZJVsGXDvgskhKQQe3u9CuovDEsp72KTCD2vEvh5tQw1ZDPPnPddCEF9oNrj9fFguxyA7FnEvWELgkWcq3g1mKQ",
  "key6": "5CMSGbRmwPDqMHQvnHw4HoM25FoPWhqbBrKDeDgYXqyjrFWpV9sLkq4uZauTF9eF2yaZ9aKavNzpb94Dk3he3TTy",
  "key7": "KCnQoepZz5tzYTVbYxXZ8Ne2YLVxFZLsWbdzWksL2jLjNP4FENJ7TMz5QeNftGUGZ39WLMANPyHVfTHPxurm5VC",
  "key8": "FMgeMmDyWQ2z1KTFD4c6fvPK2zYxvgfLzssc1GCHK433HL7e5Wxnd5PiZbs8VdZ8SYQMMJ9dWdq2gpkmC5iGyEX",
  "key9": "48y3ZpJunnMoYrG6gdz1mCVB3f1ErEQhZbitCtLHQLiJTBurGUNHoBGhJ3emj3d5ZgyLTxig8uvSTmDhnbRBAPEY",
  "key10": "5obKWEMrsSS1FjF82HErymhS966axnfU6zCNo8sF8rJ4MLGUcM2nHebySB5cqtwYJwPULTi5NHSWEgbvs6iWQWGF",
  "key11": "RLJEYnoCzbd97bSbcnm1Tcf9thFzt73TV9XtcAHbCeutiabWXva42ccGEQS3JED8pKrQbeBLsYBnpopQApfdmeV",
  "key12": "2SHTdQu4sn6hHbpaSL4RioFX6ukgg71ABL7V2wVdRKjPaYXPgDBEg1wgvntpyoNUTYq6As7YaLtwjN8dEusSRvxg",
  "key13": "5Zvyeat9BQPtYoTK8CqvVxcDL1zZ9bAkkCRPymPjPGnuDY78LPhNjg46bRu7FyFsNtcGsEDdwYzPuHhLqD1dQNqR",
  "key14": "4uu6y2eZcLSKcPTLfeTZdW3cLNoPy1Ti4jJRbpJTeZ26XbG2v6YqBdJiHgLLSFAqDPAqhdqwm9joURT9tLM8ivBN",
  "key15": "4wKCepWrit7zwwRAAZjFpFM9YnwgVKbeHGtnAR9yfFs2bqqoXyiFCqAdNzj1FKvNpV3kZKd4feUZpq8ExGesgSvH",
  "key16": "5r79awKEB25bTiqJ8AdkV5HbPqeTk8n4CFeiLb2Pxmqs5TQkH2NXpsLj8ErKp9TKwCzist2hQHQz2vadvDQdMeX4",
  "key17": "2q95vmdReocQw2oJrZCoyYFqcawbuqrVFgxWZSVPEEGYYhMdGv85hE7n1zPyzqYGEPURVowPnh5XRKaJ9PepufiK",
  "key18": "PPH2H9sJDLJkLL31Pqrik56goQ28md8ZALcCffUpVEPMjEx5ryMBUqtCPswTudWW5GyqoiqSjL7dxDVc84uJhDo",
  "key19": "3xkwNCm76B3XNAXvMUts2wNG3grUH7sRYJMxjm51EhXWQnyXuGiKBb4vPzkZLH8xC65wVbUSm7jeUaqtefAeH6Ls",
  "key20": "2A3tFkET8ht2gBfPiDguE5Z4t1AnGAWjVSXu9dyxVuChn5nt828X6NXbCKTxG5h4RLPKXha1TKTnoKkjnDqPpyLw",
  "key21": "5D7rtXns6QubvRiL3egGfFhVxpNWd4TH6y7dPgZKLdntGLTuEL7dVTU5MuCaXBY9SQJq7gTsKp5J77bw48PdBs31",
  "key22": "4Qqmz67Gja5uTZo2wryn4GFvYAijm1n4h4EVhiSponPU7rzwrnpUx94YAHwfeTwFy25oQoxSriZ9HUdEhrXd9Qq5",
  "key23": "2t7X5BtgtiBdcmnYf7Ei6W2u4Gb8Bp6Y2FPgPEFBjyLov4i1LarmiBtoaQTK5Fn3gh2A5KiyTE3S3ybkQxG5CpMG",
  "key24": "2i9BDeBhxMEBDyNYfEMppAPkq2U1kmifrm6afodAc9UVRCvYQdnRNRFemX8UBVv656r1KXiuypxK5k8K9Us5Rzmu",
  "key25": "26uC8CZ76DpccHkyPFb4Wb1SJJ8QfVHVjcaYzW8STppXMmn6wyRANeMXs29TXVDrmbqQiM3fCSq6RzEzmNFT5byY",
  "key26": "54ctaWLZvEJwagg4cAvieRsjq3b91EJtsz2NfDNGd53ytMcKL58iW6UcVvxQ6hrsLoMNGgoKC2f6YVr8V7XQcu8R",
  "key27": "NZ2dTBmg8tPutzCNLwXTwbSrazC8RKAi3FfGVZfoftKwvuUcUeDE4Fk1JumY38NLQehTSxuQx7HXe7vvLA4ac86",
  "key28": "5PrYM7GVCcF4H8Y4GTfbWB1J1ANTNhCNsg3XHzqEya7EBGrXmBcSgjiz5DMRGLiPNd3UbYt7wCST6noqeHsb8h1q",
  "key29": "37S7MS1UX73fLCqJisf11ZLjUKMtJtuziQg53w2cgZYH4RrJJNaqX4SpgXy4cBVEWM6Zd9rsqQ5eqGQqa9uwtXqa",
  "key30": "37EHhPPh5pshJFo4UW3NQCQ2DqVxrcGoy8ki3Rg5eQhfeqb6VBdFgTmKwCYDpohnWp9msbuoMXPjEHvnkG3g61Z4",
  "key31": "5FvbWxdPL3Yhk1a8a7KcXoAaxTQKaRHdbeke6fJrfjo1hmzte8mJnGfiMsp67hZgQGXEERNLCKPm9qfNHh3zmEHH",
  "key32": "yMe8354pnQ5GQ1G1o1x8yXxykkhKxxbkzCBKtcq85b5DSDfcLcX2saYuVAYbWWdkUThJEQiUB8mNG4Mu1U7PcbT",
  "key33": "4skvKZuBruAky1iN2FmTYapkpdHmCQFmzSwtfgRL5mjuXFGPRywVG4RGjNPZRUgXpJwHyTz1uQKkeP2z1UG6MRkh",
  "key34": "TVdi6bDSYFzj5But5rvkeg1aPi6aVEHYoqUZ58HbLNkrobxb68p12kaJuFkVsaZEy198dLRRauRmMLSMnM68YTF",
  "key35": "5f7ydcsxDiAdYt5MkZSfZv9VS4aVnXbQASW1rNcz3kc5a2Lo9L4ACYXcN9PJBxcLDgHLJXvspLtwjiHdrZsASWx5"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
