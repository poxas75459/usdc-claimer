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
    "5atCSu5iZz1jbznLBBqu5ALuBBRnhE22Yi1u8eCU1y6cAeXjx3aiGvwLPu3bc5iUohDQFMUtr3Qhy8EoZUxabQD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rxbHV4krJtgoGr8dWpa5HipjtZjNZehY2NuGR8JRb7V2UfZVCQ9QNTjS9qDakZmkmJPPfE7NqL4F7qYJ4v1xCxr",
  "key1": "373L5ksgkPeD9S3NujWGR2JsUKYuJe2jHirwebcyb1tKQZG9Ghdd7pWYW6XNA4T46qhLxwkuBCqH6ky45DYCiPkQ",
  "key2": "4DMxXA3mFUVB7VFwFvwmRcg7ow1RzshS2X4qTGqaDbjHr5dwTMd9faJLzzPirfnQnJBWqXaUJmwvBFbuD5ehemvZ",
  "key3": "4xD5zmNk8gxtsp924UFgdJiXmtRgHCW3dgJZr2k25PoxBTFgJ7FPn6Npvv9vNHnagTot3vj4PZPGi7Qbpmh7C4Cg",
  "key4": "jsrAPqpY7grxRNWJbrGvUcLnxCt4ycQPqh4jRHwMug3hmSU3RpVjRgNqjFFF64bwUHi1NQi8ATZ3sRQcz9onqJ6",
  "key5": "5g5S7jMmAeup6vzgiRXcFbK6TvUDXpeKGm5o5c7mVif2XJfcbESjN6Jr6qfW1NSTDruTETQ3PbQMA7jpDq9hJnnZ",
  "key6": "H1bmT2anQfby1phmTm1U61aj2MuCb9UGvJXexCSQCBvEBUMcqU6J3PuNPuQrV7NyuBbsU9Kh4oJD3iaConqgVsX",
  "key7": "2PfxXgdA3caxtgVyvexxJ9jUYt6kwRnuZ2fAgfWWdK2P9X2PMCPMnwG9ajYPUYWv7U7qcSN9pNDRuBGm6gxFNJBv",
  "key8": "2otcRS719KnJ5gnchmYz2UJBzXnWhF7V3DV9fqQoWE24g5SirpsmhQTcvsyvNNVVrc95BCXUDA2P2mSnKMYT4RoM",
  "key9": "QXY73jsDhxfXnDXeDfTkzD5g2obWpxNjtLYHSdLYsSaWY6FfSZzX8WMNHgiVMybZ4tyg9xycRYL2cB2EuxcYdAZ",
  "key10": "2orUZ49RRZTQic5tG2JxDgLc2w98xTa2CdAbbbdXjyhoFkhfeFE5DK7cuvs5fKiBQp9BwsSYj5tagwSUtQWQsi6J",
  "key11": "5mDkGQM1gY8GU8ck98HXQcM5iE8jioNAaR7Q3BFmiwCKy6B2GLsTD5pnCtGTRCw5nDWZbgYhsjcLfmadTBb1MEgG",
  "key12": "3i36cshp5GKsv83TxKU1vjK4EKTphKuuQYFhBn7hxckx1r4Z2Lwwaz3zQy6oKrLL6ahnsDSS5fhBgWPz2PPdy6ZE",
  "key13": "2PvMTxghm89QsuBAvRripfNJBvbQJBsST4XqGt4EfgAEtE1FYVPQfJir7EWB2tgS2tppUfSXixrP2fny6YNG1dBt",
  "key14": "5U5vdUfJuLT79Une7oVg2XAXtpT3LXWeVPwdQ9mv8U6JiyHMZtZu6BXHa6X1A93tSf6MKtQxmuQMcgMRADbibKpf",
  "key15": "4AcnC25bBGgKohNVihMDzNLUkYSLRZ6jTbrS7XZBS3moVbzAVmriM34yEwe5bVRLLhdisjGtccEbgJd4JpxR9Hhc",
  "key16": "4NR4bBZswWdqz5a2KaXtvPi8kMT19ejYM9BnbxkN24b9cQUcnf8Ey5fNBmhBva3yFscmCaghimKAE9A2TdxYZnW9",
  "key17": "3kifbxJ3MUaA26hoqMhPdKMisEGc1SCgsDntAcNMKLb8S173yRnQtzgDTwey91CzENN69XSPSLitosCaRFzqadSm",
  "key18": "F7o6rpTicGMWJuGrbbVYGKE42mnzGmUVkvj3cnAVGSiD41KewskUnEE13PU68Ae8RR1NpJzmXboJUduLMotzdTN",
  "key19": "4Kz7Wk4M9o8TvS2xK2TZTBf8a6GuhoZaHzMYLFn6dCdsh3kPw4WFSutE6N4QQLu4Tn6uRekp5YGyxPmj4U8N2x2c",
  "key20": "5SAaT8Gz1mVwMytyvdoxqMhnUebybvufzb5iZVNUG9sCJ6uLmHWKZvKcw94GsVTBp8Ev1NR8z5sBYugWfCJXUqM1",
  "key21": "449sJiMVhpDuVe1hGkGa3zeRu3EGvRgCVrZ54HEuNajog4ojSQePvxGZZLaq7JbgE3qn7jUoXJ3Maf5ZLMbbS9Qm",
  "key22": "57TfjLZgYKnR4T89rMaCAT5wokN5wYB39Tfeg7kdaSNswG84xp2XMnXA5QRXeQVX2pfZwekfoUSxke1QoAHdaZ9o",
  "key23": "SWSwfgtCASVzhHL1ZULEE8m3Uc4QXh5ZmHfqD9FYGn2KqkQj1tEi2nTnC2tLVXUQizwrpj4XX7KJuZ6LS43515v",
  "key24": "2Ko5m7bFTuoLwQ8JwUqGJbgy23H9e9bbCJghqCyLouBTTe4KRepVnMg5ZzeV2JBJNwXdFeN7R3Ue1ACnCNJSombk",
  "key25": "2EPjgyqbAVKykQQEFKMBSkherJUJTbgfWQ7HGq5X4RaBvDzXxmx89JRr59vbCquqTF3zVUTEwqLdaKccE6rfjWs4",
  "key26": "2UVBPnDvyQDL9XW17t1fvXuKLgTL9JUb7ZWbSvViUPoKtLzJMNXHg2Khs6F7Mpk8FTQxGbozYXH4qmFvuA5nQGTJ",
  "key27": "5PNUNWBnUyxbCBBMdAgXdoyku5YDHPM9vWTS6HAyYSvQWkiVAtftCMdpYQACmaGbkQuZVVV86GeYrgWVyoX9zJqr",
  "key28": "2jFTNzEreZKfiHi7fbnNFKGiyzr38gWD6dAWfCipJ6ZatjAZbSubP2VgCMKzevPHQzL9Xr84Z1115BwH7QSGgPTH",
  "key29": "4fyZgs2CMqSnPq4bdehptapiCbNcLTbAv6oKqo8oZE4cTvFTtZb4XCYar3DEDwFNYus3kmcsF9Rp4xmtbZ95o8Jt",
  "key30": "5uYJFZZnewgxFhHUEpHU3w1254GKLjcYEqs3Bos3T7xdoFE9ers1rdG1MozhcC1YU9He3bX2d1vufZ6xD3tH9KeF",
  "key31": "V56XZ9XWCxTqzYCWSwUiHMt57RiHAfJc4bfekuqvovkxA32CUpScYUDuo32R3NSSzqavHb1zask8UhgFFrrBMen",
  "key32": "54xAuWMBJo5dyNZfkLPGRTWQF1qQA1K4EoZd93j1CGuoycBsBzDuUVt3FQUoeT6k7EPugBdEzSVwWLnwj6ah3oet",
  "key33": "4Mm1w3SncHbReh7ex1yHLvBUdSg9rTtpxsDDnm2tJNHmC7gmnJnPFttaptywLzhdFBFzRM8g8FY2jLuRKTKYtsrt",
  "key34": "38xfmVAg3QjqTNP6xUk5qqtLsYDCwhENcqJRSajDiBpW1LCChAtfU6MqPzXiDeW3kSSE4EGWAr7295Yb5L9FFSWA",
  "key35": "286RD8WM8KtmD3zW6N8zBFYRQUKkkCvSy8tjkQwUvjgFQ1ojiL9Bfu6JaWi9KngihDhvEnBBMYAfaQwGFnV6SaJp",
  "key36": "2fqDMrRgWbcioi7hm5kTcaQxcyeS8Je5VQ3StkC2jB6hJHXHm9GEvrqdAG27Q31BUwqmLb2NGmZpwaMWc1GcitZb",
  "key37": "362cTEyP1WsbMAK3xiDtZBJYqaJYb8Y82PiQ9okae21dX6LotK1nrMHck4L33yQi771wT4KqrXDt4kMpS5LzGn7N",
  "key38": "2QFfkuKEg5WpesppsbrEWpfaiL7dREKoxuF3PuUyTKL7Cd7e7hvSP2kmamGveDLgCwXg6vAZX2pbCpkbN92Qotvt",
  "key39": "52TKQkDL8rfhi1kem8ZVRzXRi4fCXr72ZanuEh3Rr2HBBm7o9DSxqBgZSCdBEFXKLkxFZkRNiQbUbiqPcGDjSr4V",
  "key40": "2tkudvwwxEN3iVUTiQgYWYa2EQcn7yQaXe72DCawVe72P48NwuMFUXkrFJ9EWJ3XN9H49bjxoB37hrePjwAfb8ti",
  "key41": "5QDRmAuK42yD359mzi5e43kspkVhdvZDAmH6dCkMyz6xZYFwn5jWaA55qcbsYeBkwQPZ2Eo6MAux93hrnSrGFTpb",
  "key42": "37wNQvq2PGSSbei7vKVswnsvYNMkVAEp5FmMiF176zseMyy8ipXR5Ua8buxat737ntJVU5hpTihxAqvoBgyABECC",
  "key43": "5RGKJk4ttUENMBzE3tvg8qswzKBg3DQwA4SeVUothiADFwTLMCnMsV9Su2bc9Us8o4ApLhm5LHUTt9qLULKHemRL",
  "key44": "PiQMM2E2X8m4ucBcQpB2LuuDxLgnhNJJHn8NUYLDZJ3aU5PMjKKBH2KyuWj6TWMFeDmDEDJPkqgKT9JnZ49jXx7",
  "key45": "55iHczAfJxe6WR1h6FGxRnQJF2DZ3fR2E3g3JdcePUAa1CDfPxECMMoYMyMG7x6RufHpe8w8i3a3k58JzxbHn9A4",
  "key46": "4qUuKPcfafPNSdYYErr3BWJFtkiJhdhnuCTCArduLSkVukbrDhY158sqGDDq2175YZttVhduH115dzqdm52S7GhB",
  "key47": "5tD76VJJnLDG4yHYATQWg9tzFQm6ZUnDFj3wKguGTeYcemDZPuHZ9qCK6Y7NkL3Tx6FMDV1fcaj7GJ78NjJySa1t"
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
