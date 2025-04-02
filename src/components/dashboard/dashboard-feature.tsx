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
    "5JLtQ66XK3ppABSVfPeK7oVqUyPoAcHWM215ksSREwbcCQj7ByegSPfSV1xiAEGmJCWj3CD8s5i1e5bDER1RqQ4W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j5VMUHQQmFJRz7U1vwsnANJYBrXEsCdq5ho8YyPZAow8VAgkPnNnzmbmvH5TzxbBgnBvpM2ig5RA5Ce8yEyP3Xa",
  "key1": "ws63G6QJ9acFzR38tVhDyjKxTZH1D66UQnKeqdxQpEbxxfe1eLkeP1CBiJ5BcePD9zM1vBzjRfkXcnUq9trQkJL",
  "key2": "5JeSFkjkdNtgvHuJ2XLPBw9G1ziogrVGWc8mYKw691T2yRDfG3gUJvPUzHVBVaPD3c7vdKawTMzc1apTM7dB3SgB",
  "key3": "56LxTwbfkS8FFd7rSwunaw6jtCTe4Xt6cawKdQAgFZf1ApFPm5RfyChFfERZUaoUdTtTLxpV5MLX7F3Ki6odLmvt",
  "key4": "kL8g2WCiX5QGps7WdpbWFFfm9RCwR53mq1gRVvqkGWjSX2ayJ7P9rGKddVtvravEW3PJiFjTYy22osh9rTkX79L",
  "key5": "44xxPRUoHVzMLtDQRMahLxPJNNnJH8AKz6tNTTMx8fDHpDPK5i1MdqknfVfAce6MWMKL45tn5c9z1AdjxAUmBq5j",
  "key6": "3oBuphvprxe9GPKYzVg2AAZ8gmUjUSTpy2zazybhmN4WiSqGBkJzckyXZdQmA9DVt12N15gNwatV2Mv98zCjV6J9",
  "key7": "2rRiZkGEAfWNagf1B76bko2G8NoHaz5wYR9d3VyzZozHzMfHHqj323Axtyy1LbTngpN211MqHXPzH44N5jzVHw84",
  "key8": "5i64DDsrfwNPbQ12tNQWDNeKiezCpZ6xEsMvh4n3x4oi1ofY1fyCLxdx9hZzyEkkZYT8BQiv9SXV1zP2wbSgXLCr",
  "key9": "2yf5kFXkcGxiwFQuL3dL4qrtnkfjuDkn4vXBsRJpEvbxa7UZc7LE7EQN43jtCFU13rQdfdA3HAbPSoaotNfrXDDw",
  "key10": "26CcJf8PK2dcoggZReSdFDV29qXT7VYXxvxcEC4JisMoqEPMSGirbBpVqy69hL7bmevB6287p8gfmxHebSSAcuPi",
  "key11": "3nPZgpVbUJXuN22TtYcFv9NpdCTTWaXjcQGbQ929oWrn7VCR4B1ouhVC6n9ByhzvLAaHr1v412ZyVAQLioErVJPZ",
  "key12": "4dWXgSUF3zeo2sjNuQ2u31h6cRkJJatUusAnCNoQzJVyqTRycF4Rno2QuyoXpnNwRrrDW6tbdzp66qpK3AgYpJBL",
  "key13": "4pWkT2znHpWhZsWmcer9U3F3YeD25aa2BjRvqig5xQJgxNeyXgQTqMhMfo1qFqeDJ3C6Lhpaxr8hfPn8uvEjH6JN",
  "key14": "9BDQq4mXtYU68NXEht59dh9tq733GAsPH8sGDXmoUAMSMwCkn8UCurXtGBj6j2dGVRkfE438zCkVGzvWSWBAaJU",
  "key15": "2WobeEdh4Rvtd4Bp2E7xdVcnJRVha2t71WvFg6GUApU2UsGNXm9cCAXw49FcYhW6fN3yH7R1NLnA1cKJBBT8EfBA",
  "key16": "46VhESnVzmGEmA8qvaj2wfwHjroCLWLegzw9J9e1RSpMShJYQ2pX2U6GPyNUpgpSy5RfwGyF6iccrL42espvJEmT",
  "key17": "4YRE6BMQrdmPF8Lkyx8Zb6vCNu1rrLN9hkUjoCNsNGYDHvF5oB8pfZnQ5uHi2NAsAobb8yhxpVbVpqC4B3sy8Gv9",
  "key18": "3gQqxhNC59g6VErcfnAcfLQpMB4CnchjLnZP63oaEGiucTgJsuVqkLgVtNfRRRs2rz7Y7UKvsuk6ghKLPjG7drpj",
  "key19": "4zPdt67mQ2VdERcedwRBgW9bsw4kvoB4mbuXEKqZcnBBspBprd8d3cyAc8vjpsKpBxGTgmP1UmqfRfukjo3AZnVN",
  "key20": "5PY4J71eSYcJEgVYjEP2X16pshx9UEcCdmqriEt3pM9vCcXWmxVXwuuA4FLt9GMeyCYAAbMSsXrn7noXQq5WADh6",
  "key21": "3p2FKfodz9NfJrMvNa2bxvWp3Try18o1myyoMtQNLeuKBfuTGwRAwNXZkJyNgAUcYrqm87AwvsqztMDxW64RKL34",
  "key22": "5SjbDZP94Dm3Ui3aB4cfo7s8dMDmUZp1twNatGHvEPXuRT3HU3K9bruLCRSAoQhzfBUSRtq2r7wkB9G4ZGEV6vvi",
  "key23": "3xnP3Csi2GGMAFDXBTA84vAdUvCt1U5XwUXYA8Gnc19t6ThAWF98p3HqBWSN7gmeTNKMF7P2J7bgtBMqZBZQcFYm",
  "key24": "2oHcBL9aLkwSYawi4ugudw1i3k62tk9ZBE5p9tMhT882cBbqzW3P9BMA8tQQ5iDHoNPgeBu3StsWLLqyU3jB85F3",
  "key25": "3YuqbqSRJEioYfyQuuJGyEuem47diA5PoWqnqTnTtFd6eLmx1XwWBYzaUYBvnpH4FWVww3kjhT4gGtMYVvqe6Zn5",
  "key26": "2ZnEDdufuoKqFpoqs7RsHNJgdAJcRjPv5N2W9FLbBCSSYCs4xdHjSAwTeYAsFEVDMmzDb5JKo23MLRvC7azkeJm6",
  "key27": "2Cok5HDLourLXsFVdkisBs3ga7UMFAAffcGWizAvz4JVaN7NF78wiut7DE7D9BxSC3F3vu5dHBP33uEteDLL1y6M"
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
