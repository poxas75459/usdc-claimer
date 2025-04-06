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
    "3tgLZmYg6LwsnaKSXTx8QV76qZi2tpSgpdnnTGoB36UN4gDVrZXyGt66qbfKb1C6LAmb3iZ2dS9edGLN5e52TiYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VvDGgCoC3JNpCZyZqZxUpntAPn1pFkZFEmvrU5B5rmSYHd9XD82y1io9wR66HPE6CgVifFydYULFoc2hZoBpiGY",
  "key1": "7F6c7w8cFUBvGdukLLoEkKw6FAMo9TCkKepKPHKpZQLsHZNzRor3qAwQgrjvYr8FYBoPGbZvJWG7hkfg85gmwPV",
  "key2": "4JvF4Zr8cZyJWBTR3BwMoT1jsEL1nyzUQUmHVBhRLzfXkBDFcLd2rAYcuqLFHbrHguy2dWk95Wsu1yGFPgoh1pbp",
  "key3": "3u3hCrYkA3KrPMwzTu2is6YTtveGbm4c5FEpc2mhDHRuTLJ8c4FoSFQ7EBYuLAYXQAqet5DegG2tfguSzo8pK6v8",
  "key4": "2zzfpCSN6bRVW13jEWccvpsf3dQ3brVak5Ai8HmuqQVfsPYZncsvMangs5TibExrDB3pWwikn9qdu5w7wbVc12jE",
  "key5": "34xpKnY9qH7KnVxomyNiQn2arsshtede2tYbH2ZMrqVBWW4tc5KUz3MMQfPJdhKC6UxZzNfVMyZ2AtwenowicbJx",
  "key6": "2S1x6R4ZKTmMeBubZiUU1wcZQrMfHfTCUTwJLWSHGVWG5Z1qFkntWfA86ksNw77pFVHPfabsHR4pkEFXCveFZ67p",
  "key7": "4X2Pe9JJdT12AoLriEs8HXwhES7GwmhTrVKTwfC1oGqCJW4nirdDWmcFpVcBfdk7Lhs2jYMHpwFnZKq5XFyZTbzV",
  "key8": "4JLKQsrpQr9Vksk3em1cQEmELdgZ7zqzg38X8R5nQYezkzvrAYR8sTFicWKNPx7E2AyKiPZ3bL6Zy1cTJuPUK95r",
  "key9": "3ciSMfeTd7a2urivCSd1fLHvqibGRFYPySA3TpQZbK8mtipoV9HFQ8UDfME6htLs1gduqY41dtcXkke135Eg1SFY",
  "key10": "5hUfMoQ2XfqAhXzhWZeNNmAzqGXRxV3PRpH4RNacvkvFQ3BWb2ppecdgtkrbH3yvquiRxV4DDY5LtH9p4v8XTxNq",
  "key11": "5EdCQr75jBSZgZ42FmG44XxrkMfJYjmgVfTht1re6BVb7tVyvW3qZubkupSeAYtdnNtZDxNjBNBg3ajsQSr3MquF",
  "key12": "VBq3X9g4VjM37UGgue7ZdxCF7a54kUM4PK38CSFEMfowySnfALJwHLbgdafFmDj8uT1SbCSUQ3KZqVPRSWvsmcF",
  "key13": "5Y7FVYVzcxkz9zkdVya5AATM7MXRCDgZNZz961KMeXTRgtcr92VBjMfPSZqyV7LF41qk2e7jLAWWxKng58y3rAyE",
  "key14": "5p9xt22xCmrrMy8pvJR9TdVP5RsEoME4RU6S4GRaZFm1RXN8XG6GSR7gEpwWeeFbAp58Jffd3i8ePaH8uT3QkRjk",
  "key15": "4n6dxmZc5gsd5iWuHou33tSpQzoMEK452JsEMTTzXhYqER9Z215Pw1xubov6Hf2DR8FkVP6RT9gHu8RXP32S5pcg",
  "key16": "67msiPqWdYooorfdoryTYTxy4ckdKsad7JwuGDwikY9DofYfbAH8dS2KX13ncNWA8wjUnWRFjjJcB8aX1doEveQA",
  "key17": "4C4mYyMaueNqa9SvLjqZjeuQdAHAybzXmw1pFEgbdtjsz9NQi93AJ7GBbDi32XSFwsHBAoqmGqWPGUT5bg5xJ3sP",
  "key18": "2PveAGB7Xt8WP2FSUzTUPM39rZojfLvJGs8BsK9GjWuW371ADJT2LoXFcx7EtBXQRo1VMBkK14aMsu7bzaHqRMMN",
  "key19": "4w92hyZq7qSPntdetHBYSSsquKrksofNfXk4bqT9HwoKwYxBeNvDbF6bgnSX1oYWJAetT7M91evv335bzhyraA6j",
  "key20": "38CE3xFCp9PLePGjxHJiKUEhQ2kv4zMaRXFNN89jTCX7wTQULAZeE8o6MK7q5hwys594j5GUmYa8S6Gq8gime1VE",
  "key21": "3HAgB6y2Li94aMZRtuBmC51g2j4P141fbdUVw3649pxxuATxNBYAruJTFWSkxr4hTfjvC81m7sAG7smttnVMhE5f",
  "key22": "txkvqSgDXmhU4x74Z7Q51M4v63bcPf7qqsSkY53AvQL8MgKU3d83R9bTUFgC4LLo8ddAoKuvD7aNYeD4s7m8DyV",
  "key23": "22WWsdDsz2uvNFMH7GLEGoxA7CHiRSXCKzNrVbtJybdbkPs5ampijcwPg4C4wLaMxTACnh7DjL8zXT9i3oNjdNAo",
  "key24": "2mxZ93mZ8XdrmwMr5xHmP7udiMqpU5HP82dBn28Wk9SDYNYz7roS9vfHF15uXsdYUChWPyp89QBHgrhMMgppRejZ",
  "key25": "iFmkg3VYfYsX82vefwRKo5xm9bXw3zsVRQ29jg7u7npJWzuW8Z68x47rvu6huq2A6xqu7YwC4bteQB8DdDYH6b7",
  "key26": "t21VhZC4SKykzSgagFZg6rPd2jQQE6zd3GvJvwFuN3Lnu832k3xwh2WbuknCJdmfC8tQ8JmzvwHjZ2nAWLur8zg",
  "key27": "2cW1BxDgv5EihgtXeDA9wYUqDuG1TLdV44xuMwJajtdbX5EzxRgBecNrLaQAHEtmDGdy3yJwdTtQLr5rP8Rb1qYc",
  "key28": "5xdVC7oRxY2Y5qXjznW74QutjvHqMRu7m19JDS1kipYbtZsZqYwpB2A5CfzwAmY8NdLAzif8VHKxzK4JdHoR9H2t",
  "key29": "4cvoLanEfHHe9JirdxoUZYHu7NEwAESmsiv7y72qBQ4nrdHzs6A8ZU2vS52fduktK7xiMwFbrMGJ5fqyPMhTtVX8",
  "key30": "3jHSgzKxVfJMRnxfA7AUCyABEepfSpJqpGwNxgZxorotRfjK7q5CSSKBdak5TUCGkDMZQ3fJskaJVTL3bhuiKt43",
  "key31": "443yv3jMHwWScbsVTcH71TgLFUwjfcMTyx1BaX7TwpirAUuidtjNKMsq7ZPoEThoqjF8hRpXZmFfbnQrhdWKzgNW",
  "key32": "5deNeHc3sAPwCFrByMGHEwsTxp5qqJmnc8FuJyUzBRZvpVwnzAPkU4FuxwAa7UXZcgg1xkBLG6Pm2381m2gfBAdf",
  "key33": "2aE1DEYNgAFFgmD7S7WuygFoYtc2hyZ5kPP6whVjudhGNauffpnh6Xad8W7LhsErmtiputP3otM5ks7J8qQSfM34",
  "key34": "3xDjywwMz8HtgonWo8Pu7YcPqNZg6JZNKhD7R6Tc8weMQc3Vf2G9VV5VUw36QEUrzXo1VnNi75QKwF4MCfiYahSC",
  "key35": "2WmzHkUkMWiyLTaW496cWXokeqfP1EGLA1GnMmMcRKQYUAScjbwCcN2P6NGskYJTKtHKcVN9CCU7ioaKJ8kjSD3t"
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
