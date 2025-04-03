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
    "3wXij1h85eRFMmJTQvD34pVnM6RmcS8w6muXwM4v7k8TxpHhNMp8zCUJ6aK2qBccuzR1jfNCT4F41zoLkYHdTXT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSBwiy1fxpeu3sHqJkoHhBAtbtwRDdYEYWKVfQYyDanqqhdnL8dsSnCLhpyXyPQC185N8bDPASYwa59p2VZz64U",
  "key1": "5DFuirQWoAr9FoL3WKWtatUmu27ASPvjufgRBxq7EM2zgxKZevoSbz5zsgvS3Y8BaWJmNrHj2uagViPNpJ3e5ijp",
  "key2": "b1z94rYum7UgJwA6mh6wXDuRBVwmiWjfT5UaXwxqmi2xDF75FzmDuFAUaxUHXBYEf58m6sttewsPzXcbXkMWX5u",
  "key3": "5NgXTEkVr5e7KpLpVVnKftfo9Th3FhDW4HJNiReHbN3kQugNV72iAcHeUh3UxwrtDHiDuGG6H8YbvTQcR8K9wQZm",
  "key4": "3o8TmPRCX2JtjYHdjm5TVTdktdtnTjWpLLdVnKHrN8mN122FkNJhEU45EimwbKBEEGh5FaDHHTLsM1GmcuiPPamr",
  "key5": "2BT7n4v7rLXYyoaVuPT64jAAMBSF7mxHrcdAC6DTaoGzzPU8ggxdgrma4KjBVTWU2QBnWdDfG76UdTvvYgramsRG",
  "key6": "2b9jc4s1HwxS2vusSpmUZPxGPyrdYMPSQjMnwNU8XgA3MbuffQ1Nt7PHuBbXHBcymG5CBrQsxoBZGPPWdhyQ3grJ",
  "key7": "4Nn4BdBMy3KKHJoKk6EkNmfCQ64XprxuqREnMZgmsKmWLbZyNiGGFLfcqf3fqsWZJ1S7F5E61quN8C3jst1JsxxC",
  "key8": "59drpSjVoKAPc58DQgSNzKmNXc9JMWqE8Y1Y9afzCjnkTk6SGTUShDcBjKfyyJEowectJcvCoEmNLSV3xMZ4uXb8",
  "key9": "44RhRSHFHuFBjhMeukjgzcwCbrXkonjc98oPrzjsnDwepKJvMJerXXg4VYabvBP2DHfsHvqJmk3jgQqZ32W1M3Li",
  "key10": "3iMa57KJ5nhBnr3JiVQmVsGj7PpjidoXBjspnN1nJjPWeTJ7XfFwQ5SCHTddTxSWywajUX7SwqfAW3TCvaC2XeA1",
  "key11": "sdajh3yXJpMzrxRcMsK1Y7ZCipj1TcTHz16YYHHUJDAP8wAiVKABDEsmfU6d87xztqTupPEqbtmjbFMURdLuAcS",
  "key12": "2YvgCKw7SHkjH8sQEZGAZe1Mg4TGxuAH4sryJ82A81Dzf4hZTz4Ap7cFHcy81g9i6Qq1THrnZWsAfXKfcgpcAxoP",
  "key13": "pYMkJMFDuz3UVed71M77hoCMwskjDVzrW9UMzmDTwPmFSRuWySbNuPjLPa5gGCtmVMvZU1DNdiqNuYSadmZcUeq",
  "key14": "4dKfSbynXBksWvBtW3nDq5geVFzL1WEueM5K7y1oeS3iBy33WR5uVgWtdh9Xh8SGmC61GNvJtY6xrrA8riXmrMZZ",
  "key15": "4KjGQ29JMnKTKY6rND44Rue88L9BeDZJzGpieuJDQXMTQfWsi4Uq9P8PuJ9j6cX5NYPeqbVK7kbkqy6Ex2AXBLUn",
  "key16": "5LJjdanGjLAxP3zHWsRJbWqFNR5zqjz26xeRcey6pCGgTjLZXVcbsv2Muo5tt7HUReBrTtq5yzUpw8WvZcTiV3jb",
  "key17": "5JVYGSPC3F5UzDfRnpfyTzvcKTo65rhh2e5rfaw3E4q4cqyQpgqS76iC8QMemKWLVP8Ug6ohWrAB3WyvkX8Lbfuu",
  "key18": "3pjoKj4gyptKiG8vJsdJVvmEtaJTQ4od7XfUezgD1wN7nt4jWJmYjw3qcmNBykEFyfGYPXb123S1VxjxhSERpzi3",
  "key19": "3HqtRGGdKNCRHFjwxggjEmo9ajzwre7yDXGHMuXr7ndNSF7nUDNKuZoerA8HsPVEDVNCHdYTkyNko4ZvByNCnQqX",
  "key20": "3uuD1jhSH2YUYrA8wnUCofsB123cVBqNLKGjG1KxXRepN5PPR8AZSfnZ2r7Xpfx5nPAuvnnDEHNE7L7j8cHJHac7",
  "key21": "3ws8tbTNNojp6atwQghi48YduJv4QVAC6AuqL2nfkgkf2d2mSG781LaVyiEodafWjdF77Ef91Tq7Y5rTX2qfF9L",
  "key22": "5kCGyxUmWswMu53tBaxwpqc8hzXEUrn1A3eHmohpCSmPBGrCu88xxUSTE5yuSgiZGhbwUKBW6PzC6XYDSmBe4Rqk",
  "key23": "bZPGsGuEhQsgNAq6qwHoH4Hm1tJ7KTtBPQGh4QfU46mXDLN8pWBCAskaujkzW74TJjUD9M1JwdaxFdDJeerPare",
  "key24": "5v1nN3mntiso7PBKDDCJvB1qPfkJ1k7AbNDwnGHrFFUh1WEW62nN918vtjX5YZJaQWdyQwofzJwprTm4EYATkzex",
  "key25": "36jrxzPM2ocoeS4X1bjfSg7ZCxHkj45Cj8vQqqfDA1AxwiBnnNqAyFt5Pt14LjW8EyjUjbYSU3FUVPKdtrxMyd7y"
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
