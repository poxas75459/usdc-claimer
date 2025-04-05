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
    "VXpaXxhZHrVGVd3Uo5C43jZf7PVgcYeYZj5SCajPLFmCSqszkwsyXCJzr89GixoPuDK1hYGG6PrPabnC15fqbLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RGxpa6aZDaYd89LTdE8NwtuWeapLDRKMcgZVgrFXNWzw47KYM4hFtZvHnTqVKdvhWKoGgnefbJMhUoGiyo9sUNS",
  "key1": "38nsfdr4B83wNiZhmWhTFHE8aPcG8oQg9n7WU8Q2BvKCn3P3XQ9YndWKKw8vNAYJ1e6VtxfVK2y5o7eB11ubUi8w",
  "key2": "4btNZG84JXe9axxgYQNNmuSuScDUgPbqtrvTCpoCdHmF4c8RuUfaZdk4iBy3FiwfuY1EDuQcygduCTNgyT9cm1mA",
  "key3": "27ELZEEG9WVPRjySX5W1qXcjvpR5zZn9cU6M8foAY16QSUoDQ4KMcrLM457J6fQa3HZ3XXZpLApdREF7DDAu8HVF",
  "key4": "35icdcbLg4jTGWGM5UXSz5D8BWrvgZMrghfCJP4fuCXmQ3FFixEXFufBSPhRB8j2QSjscrxq5MaG7cqkfoYKxmGM",
  "key5": "4m3ft4B2o3PiHZ1wYSSFiSuA7FtViBJJNtk1ssiJV7Q7s2RC4VC2kiKSuZWcG9YFmc3HJ171Dhdd8yHwvCALM62b",
  "key6": "2V2eW3yAte98m3inaVd9WLzWYZkt2AynonBGGTyqDiFx1RKwy5NbnTtZeQ28uQNZuie4GSNAYBaPoNw13D85KgYE",
  "key7": "5xDf4ipJdCpYpydqST6GvxumeCLVcdcbCnQX7AnSZQGTG5DJpoy72Zy9X7DdT98F1tZe9S3GHUg74SqbUkUTjXui",
  "key8": "67EAqnkiPL8D44GBGbNrcceZUAyHMX86fFvkwovsZYuQxA6R6rApSVDUjJTFM2Uc7TfjCA5MvUdDSuqg9dAmbTGT",
  "key9": "2a7F3xN4NPHw9ofJcHV9DasWonCsGjY1TrfKbgBfGiJhgYLXnGAwVLdzqVxtgRT7WuLmRiYvVnJkTQEuxMv3UzSE",
  "key10": "uMXkZC7YAmfXVkt5fvhXaFSLjQ6U4QMA2F1WTfEYWJ9REno4B7sT3WrYrH8F46e5S9Bxq7g2YwRJz5UrEAdbUD9",
  "key11": "4PMicyvqD3V9fGuUaHDQcnVamWMsZjcGoh2uzi5RiYpSvLAdpcBnYvMKQWZhpZeYmrjWw4zS6Cs8ecRhkyG1Kq3Y",
  "key12": "yxZhH6maHUx8ZXwufJE6aUhQJkzRnnsH2JQvTkjvnRnJWYCtxrtkQo9cEooJoAFQqmc4trsx2dMgbmSwaBtyAQF",
  "key13": "4cfvVoXcSZUEFcQtgfvcAKxm2jGMFRJiaLq4ZamLkFJvSShL8Zhub8c84k3HotpK3BqvECwda4NKjaQXk5LLg6jU",
  "key14": "4h4FRcKYMLDcaZAwPyXB98we2FG32uiUoyH9gfwmne7zs4oNAKsobiEbBP22kBvh9KqSdmLpg6xpyNBuZvLR6rXW",
  "key15": "2DJmc9x9H3GmX5FW6BbNGU8q81XNB1oStenPhCuehDSZA7giJYJi4cppC9eLGenPxBAEnUMZNwkCYQ8PEhT32jqn",
  "key16": "35yzgzaChTcKGFoWMQ666Zh1VAPJwmyQcWHdG72LnCrVKeThSMefujxLhRF2nxpYnToRG6wMBHnMvQebA484mi4B",
  "key17": "24rC4Xe1K2JPyP4wDecZA2uNFWrZ9AXBaxUJGMqXhcWAHM9UDid45SJ3LHkYjfiAFMc7236DGGxNHqVDjkjUEuDt",
  "key18": "aSXEF3zfbfy6MJ9AjqC81aXKtqssoSUW7m7HFEpajHusaokssm2x3o37cLjcqZX1vA17nrMsBMQyySFKqfsE7Aw",
  "key19": "34kWS4A6sYJc1Sia7chyL2odtNCf1RYv6LqpiAaErWCyegGqPDXPoteYrMMJupUTmCXMX7VryNbh6rjJHCah7cNU",
  "key20": "5G5KXU1Bi5ZkiaXPewKmHLQsVPMwX7et8rAzgmkDCCyp4ez4i2mEftvPg3HGUjw7Vk544oK3KNLPRxpHYJrpi2fp",
  "key21": "st1g4HzwCZ7Ce2tNVDLoYM9D725KCPTDfDZK9nzND4z1GM3xX3PyWwZd3fSUiiZ9gCEgpzq38vGtRYSCC22upJi",
  "key22": "35aZ1C6efdrikfj12tShZndn3xoLZWvuURg2uRMeqhs1GRDNjygPXZoGqRRztj38kZbV9qDJh7oHS59mr4jJaHUZ",
  "key23": "3t8UMnnCRqJFvLEQzzrejT9q71muU2hcBe8Ch92ty4osc6rmMdheRhBzSzWHCDLths55M645xySoHSWcwHsUVAUz",
  "key24": "4FvmazKXfxP3d59Tm6t3YRSiAksBkYo4ye4M9MWKvD7QPSumnLYuqiT3PYcynecYytJtvLVCNFPitoMCyotsu4Mo",
  "key25": "2317QRbwzxDxb6kxhL9cjUN17MVLvWe8Xxzwbtagst4sGdNDnUrBnYgM9fT2d62TUQLMUrGyYTEu2AEVgT13v5pN",
  "key26": "2XXuMRh2Q6wCTfwGTF1YXU8Ju2xTVXSRMsnTzLE2nXHSpyKwpFdaJtHdg3GhGyGex4pL8XGCs5p4e9498RDPt5o9",
  "key27": "4oxKqThAciTm7YF5HvAAky3GuaoojndgQABD5oNWUaCLeGKng5KohaRhC5e2VjKvU6V5tX9BgkFbFYpP3YV5gaZ2",
  "key28": "3KmofNSWZ6WpCJJqnsDRBKRtUZZpPamz6DVyZuMDqFViNpYrNz7w2ZDJZqEp9HF1gU9qVwcZFu1ZGZdmx4Db5xes",
  "key29": "5eVs7nSGJ9vsagz6Wd2ZBH9ygNmShWeYULEa9JZURfq3Yo83g19aKaKBxCSdhE6cH1DSPyv2FtABULokNssX1RRR",
  "key30": "4VXCACN2gycR7CydHU2bW3LW3ytdZobXvfa2zpJAobSyUxDXXhJzT9ZZf4i9VrHeHQUHPkQ3dbv2KJZYG79QTVWX",
  "key31": "58uSKGMMdJPb7xUkTebNavRzi4qYjPiGAVZwrCBWCohzBVue7zynQc7NS74TiNLBvuEGx9vi4zSMjSLnX3qGP71S",
  "key32": "2xsdZNg7Nx4F24pNGxmF4C1aUvNWPFpze72sQ7CZdYbnCHS4Pd62XGa8Vbh7HEoV9ckNKk98ohe8CkjenxDyjn6S",
  "key33": "2eNPvGKnmDshqNmcgKKHQU8A92W1pvfvNu32Rw1VRjFPgjaXvVrKAt7Zmx8ba2stWKds24uJMowrtcNUygdwMxjS",
  "key34": "3HckVeiMHfawzrATXecB4zduGvFE9kJyfEi7MeJNVcV3HjUYMwAm9C6zHm9dRooZtFBBPFAfn5NhXpY6amEu6Ff3",
  "key35": "4JmRjTJvxgQGgxAkAvDija92q9TdmTE449iN3m5MEDProwXZWhPt76bKzYP7XGjP555DU1UTheSdxgutsh8u1ka1",
  "key36": "H571URFjmCVVDFRg8F5mCXTmdKH4vGexWsQsagdq6cPGQyZSZKQsbzT9FKkiW62L6k6VFiGZXH6ce2LWe8Ch5RP",
  "key37": "23wvZWLEevcv7ZshNZuiUM3Pk9f29JQUrqa3wC6zxDsp151DcY82QZr96dfh2Nz1rzfivrpyBrp4afQpDbjHtKnQ",
  "key38": "7AHA5JueaZFXVYXyZkmm9TW5ZPyPLM26LF8B72yqmG98DTSmW7EaXVWs5kiG85eVAHvtra9zS99vnZi4asBmG9f",
  "key39": "dAtQoM1FR4SJcAczfUi1bFiFt4LV1xDoH7dJxjoT5R42LhjPq1CAV8bRQc9UYsTUpx23vJrsVUKkSerHJ32A7xW",
  "key40": "5HfZi38zaR2QVQWF6GYvnLKqBhGQgaBkVRg3MSwqsQVT3oAZCJ2PJvEfdLn8gzB4gJkGjo5HCvmhjtqsXvXvhNwR",
  "key41": "2w6trVyJvPjKY2qv2sDxerjPeoG6fg7qD8gypVNYDz7eGt64xFKNGxDXi8M5YkM4ehJvtcypvbrEAaU954MZfoRF",
  "key42": "3bwnKtz1XktsigTozUwNuhxrSdCdN6xBjXpuYAWeVWox3XGsFRMBzuzwvwPE9XbM1J6MhXvf2NkGSJoehcDfc79g",
  "key43": "2XCBnNkvGhWHu1BAHm24SA1EKTmF99M2yStqW3Lh2gcWLcRBDj3vCKWfwGQHtPz8fDKWDYGkr9TFaURQHfWpZYp5",
  "key44": "3oiv1eFrkvR7TTXFDHuhUjygBFzBo1kaQq79RrGU6BgWTkQh6mnLrfNVvkAkGyrGXg2fACYZMBRVRzgya8rpd72f",
  "key45": "3Du8ttUKwkVSLzNMqJgeJTKozt3imf3N4YUqDCXSXBh5t47btruPFiLPxmyKwfd9bnRFTQ4Gc275MkHWUQrq1T5m",
  "key46": "4m3fLRCcwUiTNyiG7AbTo4BnhssVqm84C4Y4cvjZPnMRNbjAvyyU3SrMgtEH3miY9y5byQJrS7hUFEpwPo3RTDEq"
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
