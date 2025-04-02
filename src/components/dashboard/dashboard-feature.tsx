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
    "bqFu3tgCh7fFKJjVZtbox19w5UVd4cL2gHaS1xzoEqXhvdDBfJ94rFwLWJSGhV88MjE8TvJd2DSccgNNxMSYDwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vJMoJyMukRTAYikGULx47wbNEypBVoGX1k3AiE93C3PMRzZsXFYT9vZfDhhSVeSddV76BpZ1mgapDCKSvNycsTP",
  "key1": "2Aq6GrNwng6BHXq9F82weYS7g9WcrUtPbC2bE8zVE7bC9eJxCCULuWJzKYy6A6DLjjtzN9Z4cMpp8HPjcaEA1MYG",
  "key2": "65SxNo111QLsTPFEE8QgKmpzxn4x5pcTXQC9V35s6dAZnUXy2Pisq3XFB9eyqDeq9TRQT4mAujra5WD5YLH4YBKt",
  "key3": "2WVq5VFscsKcSRigq7Z57yi1A12V2oZzdQ67f24qdhBq2uvzCC5x56HA7758gYPiuKGXSZ14uDV7uNgiLAXfgpF6",
  "key4": "46V31xGDZihSc6naZpbSzmEo1PYqNdBubvyrfKFYqTym3zAigWwtuJjdHhXRhz1xpCqMdpdZbHMGWpn7QUojvPL",
  "key5": "WbAMZBXcTdM4zzTyzCnGDyVVd1d3bFWrc1Qq8YJqegjHVMuY4181dDyj11HxK8QXtsXCiYU7Svyjn7KqC66ZgJw",
  "key6": "2yATrgbpFNvHEijvRGBmzv2wsGw2fHw9Qobgmg6iZ6fbbi46TUwzDwunNapZYGKcjz4LShTegMeDq34WckQuSDVR",
  "key7": "3oKbyC5kTbHUAAkpkYEikqDqPfdriEmRwL38DHaR2AuxenqVFRuKAR7ig8KYgnHQSdNVg6Png1JWhQR4D4PegEXJ",
  "key8": "3kWk3Ssh1XFfqa3ET3Y26jLYN5iS8WfX94p7FnRVoMv9M38pBoGbo1TCDj4R1aagrf17MdMkYtUcQbYBqqyidsYV",
  "key9": "3xdMskGXmxRRdCBMfaPUeFoRbr32VMZdUuhj88QJiZ4M9F2NfNRyPfN8gmCHgMoWVTtcH9gZeu3NXhwYYuRyi65e",
  "key10": "3yLwvZ6msvZm1T1yTasKFd81SVC36UwCScowymjvbtR5XVeg7eUQk8kLMXbDkEWbQrUfwQ1L8zwC3BSRFqHRC8qd",
  "key11": "YGuiDVNCFE3YoUBYJLWLwuW8xMXn31GHWad2iPVQ41g6ydq1QNw5HahCSoR86pJ291QgX4QzfTNGqtRJcbx8xz5",
  "key12": "3UvFTcLGuG8RTk3EZUv63pSAbaggk69aSnTkK6dPEKVNZc5b5RnFTJsezfgggGnRptMqSqXJqyCGgGQ2fWhGxBVe",
  "key13": "2AfYcgbPwEXtLM7ZjDYHJ8w8wKq9aJE2HjvyXA4TRW5TqE9KbVzvVU6TrfUn8Lfa7CKX19M1nrSkiaT4EA7BNqgw",
  "key14": "4JGFLwa4EHo2F8kJWdQsxuTJW6DvrEEKXm7fhz1TsYePdtsBtMnkyNhbG2SVbSaMFwi56CymU7WgRkSJCXhpJakb",
  "key15": "597pfyo9f7sjPbmxw7yKwPSzmksnbbHNprKFHj39E7yNTf9fdW3z2QnQB5bj4HKtfK9MqFEKevV2SQedcKhov2me",
  "key16": "33HF7dxzxzeYHuyjxAr7EHCXEKrAVHTZPwB9fJkc5KN7dvBt1LBZWWCxr4qutK4rx5qJD1tsaZKZnMzg4kZf8qXY",
  "key17": "Um5brJ9NPHWonbbNyQ3f5W3RKw3ynbmfXqCWVvzwMs5JsbHd3GdMvegNBNQpkm7Fzse8v8zpxe13669CQy8CQ9B",
  "key18": "53aLDaDUr9zo36EynXYiDH9c6JUMFH6K2w33tRkPbVT5aDfwpoXzoiqyHjgYZxGN2yVaXMjBKQiBe4WwmmKkqtdt",
  "key19": "29QELjmEiWqL3H3thUt1VnnKanuaF3nz7erLmpuDbwd5ebzMHLDGwFFdKeoG1PZzvNfuLVdVGCMdiMSSDzPdMxQY",
  "key20": "28bVRafVWFVtx2DUEZY2yzA7JDY3pgjH4FN91nW5osLrPaYuKgqEzRxbFaB72FqYMTuhU6sJE7JKVQeWWP2oFa1d",
  "key21": "4L2bXzovqgbqSAubKPDJPhiUrWtoUwaY3hAvCCCsDDjvLUfCTDDBMTDBZx1FEi4S86i2KMDHmUAYn8JdvHDfFN1N",
  "key22": "4mc8hXMeDUn2BQyVLo9pzJZC9WnwZfxmCmkLADGEKpjaCxBJTUtY1sVofZipmgSLAYs2cTr9s9nbybYLd6ENb51C",
  "key23": "3VmZkBHz1MaEQqptnHGioHPDraUW1MT2FsXBBrFNumoC2AT89RH4yPocarSoc2TL7MdminvVw6HeXC8ndoeEcuk9",
  "key24": "xsPhyCBXqELnBef7ARvmfaxtPESSChqtnhS8hfMm9kXrj3dUWwYi9tu8TAqeVnfbN9ysbUAmYsXFeRYNd88hwoV",
  "key25": "587jZRqQE3XxwQvcLZ5YBQx8UP7hecqsL9ZkSvjDVDanWpfnevEF83mvGk34XSSzVx8THybX7o6sFmmrCGPNuo8V",
  "key26": "F1osNbAsKEuowCjxYTzau16zn5R55jFwHW4849Zqs4Lkq2YGyrEkVAmkwKxrYs1mM6uWJT5rjUYtbhV6AUUXVwa",
  "key27": "9ZyVbJuLowK9LpXLGzeYCijgA85oSQkxMH6E76dLTBaJH4HxE2ZgxjgPpnKoVuNjcKXJ7jAzYin21toQTeo39oe",
  "key28": "58wEjVfPNQofXiuPR1zLQNGZo4tN1drmL9dkfvkwTGp2CfAYSkKn3kRZBgHu7FGNuhpeBqauddStv9LJys2xnmta",
  "key29": "4FUqA28rXrAF6rWqVhPRiN8fV8we9ww59HfWZfkNhQaTRLv4ninVVxp5t7z4hrLUFrfuStqoGkqCzdFwLadMWnG4",
  "key30": "BSKC7wR9uujUWCZQgqT1pzNJTYddnwdXW8AKYkbfiAmfeRJ5WnbTCh6DV6rntaftxVbC2NppMdojqSJemudLAsj",
  "key31": "5YAVgceNt81Wo2EEgLgrnJh488kpwnQ2i92oRzPUFcZkMrEVLprK6rj9FfsMowCVsPS8tDS7dQovCFvUrzDk7Lic",
  "key32": "2PHmpZA9gYF1QTei3PiS744srFJA8DjjdXt6zdBMT5tFzpkXshYn5y6gudMZQkrnzmLLQ2J41chmwRW8bbW76c88",
  "key33": "3kPt2cP9H3PAAMwZ6qkW7HyGzVsX1TvgXQqmGztPwimH6hKwCxnxEebFL1dQbURksaD58Zcfh5x9g2EEHJF85R4r",
  "key34": "3PKkthGsN6vazUbSXxuFD2HEq8QrCyuztmVhYk3TMngJMDNLK45ENnJhBpbx6YABpAMxKdn82HkPGiC8WvoFDN4d",
  "key35": "36oRZFma6aBJuDAGwEN2SpzWka3dHbGhFwqNhPBG8Hnhy5wUzsQEettXRPAZueo9accRDKoJV1UKfTRL48oBBkd4",
  "key36": "3YubHqT3r4EYHaQ5xVfRrXytgvG79eZW4UcnSkqbg4uM8YV2bYWKKsyRHLcYMjCbxdWSNqYeQWMmvL8AJqn8MfJs",
  "key37": "4ecni7ZPEwmTHSMgLfc8yaRPLcACyuYNQKoNy2p8UxFL4zjERjV9RT6M9NX9QAH5MEMkwT9VXg7vTPLKUGEthBmJ",
  "key38": "rSasn2YmWBs7JF66YBYg1a9KCSQZ5EYfQt6bxabxSmqLUiFqmcPKYsECYxuK1n5UNfejRCtTcoNS4PBTFSifhW5",
  "key39": "5vMF57NwpVfn2BkVTn7Y9twvGbGevDHo7VbpsEZ79KXaR7ijKa4zqPK88dWtkWpxUCQrEHjGnNGyewUnRb7h6ezr"
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
