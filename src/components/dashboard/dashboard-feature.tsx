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
    "4Bf7WrKV1QUAzZ7Sc1MncvoCyLCFqZWihDbdN518G1o64KfCKMGy9wrTa1q7CJRHp9mzw1ZQgoS6t3wWRjhdRHfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D9U33pxrqZQxP9kinM54HYDrmhi2QNLaJyaPHGvoGTRMo3wNiFcRxLXdYMaah7RDvM9ouhyfZ14epsGsGwhiepZ",
  "key1": "5h7YPBJB8QppDo1CWDMsUCkRu8UMMjQUhbFFiPr7e91WiNNNe8r91zMzy4kapAhhXXTC5neFTSKfhoSUnjMy3Smn",
  "key2": "4uAKSg8hLQFJouCeKsq9m3z5QVtUbjyKJTryrmCSacwvh2eZ5PuYhfj3K79gLB4bzvQqwwGaxwg9uN5j4rbtCEAu",
  "key3": "x6Ni7XcXKZsdJfVFcZ17myRntsXxphgBWKnzjKSWaDdc5ABzrZdM4QHgBCqkYatau9pyC3vBmzy3ejKait4PoTy",
  "key4": "66RX5rnVENb9aXvK4scfMq1EAiL4g3WCKQaza44BKQc97pgjCBkbhTR8SQAEBadhRcjPDGD6Vn1Zpbh3UpgcULW9",
  "key5": "2QSWAxvyWRjmZnX81RseY7s6Lfm1k1RCPbJKMgRicXA3V7v7H5vB6b2k5fVoK9NvmPv8iMaNhnk9dhRTAMKn6VSQ",
  "key6": "2m2or8bZeCkDTZSJKMjftYfsE9bzYdPPQ1iMS9KfoKuKLRrChRETsQ5xDJBwJRJawN8zRNuKoYwkKF32Y9849yFU",
  "key7": "25deeukyXsimGLppuBqvCzNFsuZ7YLU31GCDZcuEyGTB2nxtAt7CFQziSNq8hXQvtNt119K21FGvsDQyjvuuxxvp",
  "key8": "3sSvv3yuK2qumWhkTJrrzqsXzaaeHmj7rrzXMJCqLrFqCZNB99Jc3XEVg9Qyk4Sc4KH8dkLBUxTq8Fzq9rLEA2ZL",
  "key9": "2vcF2S7UUj8At88q5aEhknzhxTA1X6KmtLnGfBb5hXC1KWu9bsqHZ61NYbiSLP5Lo6CGKKCc7UZsQfvgRYoJavwa",
  "key10": "4WT1Vig6GbLFct2andWXE1WwEaG9RsnvySBbzQb3zLrUaYavMkdAt1kxrgK3i5p11NKZBr1mgL3CPckEzN5wSi2g",
  "key11": "5juiRSvFY1tSzVHmHmkHML7mXXbn3ytgVeecesEWHp684p1cwr5xZZCbyt5qo6azcYcYqC65mej3rRPc8JLxCtXv",
  "key12": "2LAwHK5ZXdawTzHoM7uw9EGTgoLU5CF5XRDGdNqteHijJYuxVTza4sbwCMseLCdhoFWq6GsZxQKZEEj3DNP2uAVZ",
  "key13": "2hhWbieUt1PiriVFT7Jfcv869FCwRcJL9FLWZJWqrogd5L4UyaL8Pzeci6pyNkpJ7s9Tmbia2Qn99fxummZnLqS8",
  "key14": "sbcbphxjkJmSfU4N9kS4zo87jquV6f7v42jd7NxkNQmDB7F8DkLnY9GThxkDBhkjbSpn9b8ESpSae84mLi7G2nL",
  "key15": "3dWXXhd6E5n4Si4nq8HYD5sv3ajvirftiQihF2LPvVSSJQehEpEQJW8DGigv3q5c7Ak6VwdEkkrAzDQtN9vEip2M",
  "key16": "3CPMQfDve5Bijvgma3A6scY2aKr4KsmLew4DY6oCzSZjULngYRmnLUvFLxU4oTZkUBVs6AFkhhxHG1aiJnHQ1wmo",
  "key17": "2K3cb5WsrdbBgQn52yXDX7ZLXU5DsQXk9ehnWR6vAGuCdghYxCtThRLhEvDnzhU5aLgqEPnoxi6hopeQQBeJyr52",
  "key18": "4iuWM4DxfPXNNEv4kFBHcRCnnVCqGWZrU81f1mSyrzY9P5R5oGEs3Ly43Ci5LkpazAaoCE4YJLE6HtadhuRE2aHy",
  "key19": "5b9LpdvYEYq8vbBfWkazoPnyPRbjyMPrSrCmAon5UoKdXb8GkD8aPb6z2QRLn2n9rRTVzcePZDuGXGwjbDrvRJPR",
  "key20": "3DvHqWdvtSFJitCDmMR3LQupp5NvXCcTgtoGT6jg36nD6pqNPo9wGA9ZrQcPcf3QsDfPQeUvhmgjvAbnuzeaEQbJ",
  "key21": "4kJaBMzd2ipafVNQU9KqFoFnGyp4c9guAczsNWbDbf5cdeMCJaVjxF47tbS68D55qMuUU7smLNGzuh5pVoFTBciN",
  "key22": "3NoWSpJYN8AyyDwjFThWvpFaA4HJLyRSQmvH5ZTFB6iTn1QEPFNUJgQ8tvUHnenJKgBE81hQUAWE82xek9XVpKdo",
  "key23": "2ZV92HHj9vPcoBFYWKTEUHK4cokcPTwWRYShwQzyKTDgVip1y3QHfncZBmYPcHGggGJW7yhsHTmqzUgYZPMyRFtm",
  "key24": "3vs7iM3RbSTbznL775oJZXdtXS5KShiZQXZrJj1hjqz1e1ciumvTCorH7q1G1orJNPq7ncmhH5dtFNYzGwuYeqzn",
  "key25": "2ZZhtVnNaC6NBr51iRiTvKKnCnto6sHgQLvBDTZ8Mi7itr8hJnVcuVoobj121aTm5pXZ95fc8mVV7GiAgF7NNC8n",
  "key26": "2ZdLwCcqK9h3Qf3ej2qfGsD2YKiDhSS6obGCJpNzJEj6CoaWzDnT2qaFNrt6EABK6qhSJz6F4efoUxDY8ewZgE71",
  "key27": "3HweT11HbKcqECpWwVPEZycB7pxQ83QXNkLnqGEEXq4Cdhmma7XtnMqNHSubsXUdBEUzxBV1FHuhC149HnGFcYtD"
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
