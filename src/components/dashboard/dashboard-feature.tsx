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
    "2NjbUqzVo28bH65TtDnfthTiGnFqWzNKhgwHeqrrcQH5miQTUNKCCZfCdByedYbd7RV1pX2oTkc7QUY9ybjUDurH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PLSiGzqWPDfbWptiiC6MzAriAhSFAmtvE7UgfpWVXxXt9ww6W1MpdUjK7GzYuoxRwfNmBm5cZiDSM9sweftsbYR",
  "key1": "FHrwbN4FC6mjLESy9d7mBUtzSpfGv8ahV6XfrJoqX8FCrrL15BYtPB7iCqfrkSrN2BYXDzuFbe9rc7FULZYu9W4",
  "key2": "5TGxkrTmKfu6rLV7wJZ2b1i8nHXEtYnRo1nPUcnWtPPLPN3eAuRyKNZ8L1uXyeu1dKZdFKEbC2xQ55RPbyKeDQAE",
  "key3": "5aL8mrZnjbHMPowyo5wRUnTKD2xPxcRh4VkRK6HpTxMJZWv9WH5pGJtMdQqwhYPJEFSnGc3yLuesYZ47wc8jGWQa",
  "key4": "2sSZWceWfNyheMiUuVw2rdbJmWxc828av8bmZJNFY47tAzW4qUuQ2dbmvC9t3eHYZtvsFBKQp6gxXY4XdF6Lmmrb",
  "key5": "yPe7kzDiPiawbBMM6dz7vjG1E33DrqEH5Sn6wWa5Np7MfPWc13SsS99hMsma8Rtxq93vBYg1Tcu1UvwJhriCf6C",
  "key6": "xpnAM9ZtWzgQW79G13d55DmEsziCdn8o5fuej4gYTxZM7b8C29ui2La965BJTLj4GHNQW17Aw2BaRCWBpDbsAxc",
  "key7": "3a2nnQpL2HVmVC9tD2AppsDp1xntDGmZj9gUJQmwGqmTjaDz9ogHKRGYnSbFqL7oaEpgEhh9krPrLpGrZQX99JjK",
  "key8": "3LDQiuZPS27Pb9zMjgpfdfCfJV9g4JEjyYTMipPjDqSfhjddgabBiEtD5G2SeWnDLhzJUeThBd7LwbKHSQnyRYKg",
  "key9": "34y5Xgv7aSEoQx4L8k88n8mvVMU1Fhb3JDijZJpVGVHbyhitWqdZDPRHkyt8AeozXxT55Xm7nUzjCyYwrixhNhcR",
  "key10": "4BqwyQp4udwYn9HPHHERRYj8u3zSuaCTWYpw4SFt5aYHHeEZQAxc42g7syva7R9omtM3q9zUQnrxg9seMYqEjBBW",
  "key11": "2LXys7xMk4rwDGvNaL1fE8owpyKp3ugruwGUVYGuweFvgD9t1yGRuR1LG3wa5uPhYxtcBfi3uSt9GaLcbXwyXUut",
  "key12": "F3FjSBcNLFWuhZq6rQSKfqkJBjSHWUAjsYShZMDzDNYcDLQAcRqjWuwu9fvRJPzcMC5y55VUYw9GMmx8oQ3ravo",
  "key13": "62bTyfwLRTjo6J8n1aB1Vb9ViVjEMwAvYMCj6hERk4SX1aJPkJu51VSs2c7KHNndEFepFNEBALVBR9vkmYDY4QgC",
  "key14": "4rCRogQ4NRtFFRax4XzsZS895Ff2jpVkybAbzCw7NkYKP8MZUYn3wZY9vtn2yTCHwGLjnAHcNEMWGJtkPD8aLn9X",
  "key15": "5UkxBjXokSpTgpRwDp8tDEV1UDLntgj5mfSSQyqXbzFePmJaUCPsGMNgKAEuw4WyTaqvCU1Fe9j7XAMbGnsSkqRR",
  "key16": "5PxiZkFPAGgZMPjMUbLV54sREZFcixhMdEpGvFsRPx2pYHSTLGj8nrJ11ecwTumR2YBYm8qmToxx2rRqRTG8UAZp",
  "key17": "RZxpn2ZPTWRWVDWuZZQnt1fYd7EkmbonzEev3igvWx7MFe8hpr7iVtfkST8Uga5m4YNxxmwo2wysgmTvfNRQLge",
  "key18": "4X8mRbg1oZ7JjCrs9iRyAB8cMPykgPF8kxJsB7p4cVFAMunrTxze9PCdAFAgokbUMucBvVGVREgXwemDfBqeXh65",
  "key19": "PUxugMnj6oys4pET3yhsHnCKBXD4BKMz5LNPYy39b8p4XGF8mgHPtkM9NUqwyWJ4H2B8C5y2SNtuJ6eVFMXYRKE",
  "key20": "5bguknK2CayUbHDXtgPsreyUgbwqChdGEkcqqs44XsKLnm2Fzp5iK6JEH3HJKCteVMFCb3hN2XrGgekAasmVQ2yv",
  "key21": "5TUvufatS3tjiUPDiKqaNGT89FimfQo5zqv2pV714788MYM6z41M2w1zKHLLswwev91BxNGaSyk9X4nzV24ABpN6",
  "key22": "3mfQnGer3hwDDxLpd5apWBKAK2GVUiLc6wPhbXeHX8GEXpk8YYsuyCtmYn9LAEtgiiF6FYTYwz2Cg2b5dZdUD6Ke",
  "key23": "4ScgwhqDhod1kAZDqtxq4ZUTvG1eJoeKFBLaYre1gADoBbdCVDYX2SjekHUoBnGiouPGtwvUF7Hz28LizyjeYu2C",
  "key24": "25ZByYEJGhdo6HiUT6H7qvzUTvW4ZcLXzfRTqSZLkhWbmgFLcoLAqFqX2zK3fX8JT7QfZhRTFHHgnizjb19dE4eu",
  "key25": "2kCeD3iABfEZAyJpCBhca1WKqwVQ915HsrNVcLE9uBXbkAH65CjCmrAoCGcgsQbaEAJU6akHVAWcptSkNX5E6pMs",
  "key26": "6qdjw3mJBh5aDf37ExSn42HU2tHDzhAwv1UFFwW8of96LA4QFyWkqZjCWzFrGimmRQqGMiyWCAEQpcFEk7qhUWY",
  "key27": "64a7iu2aha4spXVgmapxgmfJym6nxKwo6UbEY8UbaNRPAscNJ1tSYzhMfz5ZVLQTLEcY68wPzsFqfDmaHBjpqJGs",
  "key28": "3zaNK5xKq6fCDQdDzC5twiyf2e7sf67uqDbAwm9ikm1eVR4DqFKJUcmZfacLEYnepXdEW9J3foHSVrkt9Uzu1pNK",
  "key29": "2KK6eFxV5LD7HjtK6e28LrNLTbuXEDB9FgdSHZhVbKrPA72AXdfmpMGPrvVwWeJg4rvSumr3qUPVmahwsjN4DUrm",
  "key30": "3fkUcqBmY9nYge1iL9iXG9Nna19S1mySE4ekVFAuJLiAXDVQHnBDEbr5b1oRTHZ4ECrwfbUj9iqZJ1hCAx6tpH4J",
  "key31": "5uLBTKmWsEk2vhhQnf7C6w7e87ARot7opWqJ7JsSASXdWZmWjXRYY58HmLkLRYeespSaDFMxhBHEBVivwM6tNcLQ",
  "key32": "5RRvfeCRh1nRAapwhy3J6i1DtZbJ34CuVSnAmKCsToJAPKbxCixAMr5L1KshdsbYSDnwDtXhbZAWt2qRSYu8WqSd",
  "key33": "4whKdKSLtR6vxytru8mLZd3FDHEhGfGfGkXyfBuL6ukKYvKyrRtBF48zSmWdC5Ws4n3Re5vY8jBLSyyRMkgqBWGi",
  "key34": "wjro6m8v5om5EMg6tfaokUtdkuVPXyYiqVDn85ta5PGti7SqHu2ZZJHDLgMzE52vFYjkxUaUvZiBzJay1is4uTx",
  "key35": "ygQfAJxKaMgehLTFUzeiNWfHNLSgDyJcBL2XX9B5AK6mLyN1a3PpgsnrHBdrp73tZENzvz6hmnBz9TF4jwRHegw",
  "key36": "5zQTrNaR1VqfYNMPpFgf2z7PK6BD17QGRbAyQooTS4NgnNx1w8bdq3aSb8Ath8pUG361svCT1R4cvwruE6EnByWz",
  "key37": "2nviKRBJ9EZ14k3Z3UMddLvhbUaKGevoCsfZyeUehTuXYb5h7kBztaRsP5fvvmiZ9VuDFL6UjrziHwNJ77j4Lr9W",
  "key38": "4L5hPrcgkbBmDLtMkpYX8Em121N6TsSgQ6graS7TDYwQhHa75usxZDMCWR9NqHKL2veyBD4JE4swKa7LJs6MFi7k",
  "key39": "39DZ8niQWez2gcjF6P8oWm9rGxEVAffxz2EmXUmcWA7ivkMwBNYAuxSumdwGW2tQRG7A3ULSFbzERGEQvz3NN8iK",
  "key40": "66rDw21dAdGo2ssAvyc5A7tiWE1SZbEJiryh3WrCm3sV2EM4hyb1UR8XXWaRLRZRYtHj5sY42JSBKnG3jqPmvz83",
  "key41": "5H7iYRdQE2UEyiFNT62GkXuWr9awQqvSfR2cHcEedmip37gR4JusVoBksn2wzcBF591bKd7Ls9C515rREQxQpWin",
  "key42": "MYgWVkj4MVUiaQy5zWKwiwnsPuqByTH5cchsKVoaGY2TPuDzsaagL1piq4q42VcwbPuY6vuGCytGgNgvXrjF2eJ",
  "key43": "3NLFNuDZwCZbQaKdp1SsP6Lxneu4CXEEDs3EWF1PvMbEWEnhLYrAyoekcSGhDkgYEpnxoFV1HuZYkRRkD7ntbirv",
  "key44": "2p8YqjZR9XzifWmyN71EbHsGHvUJmR5RVBLwhCKCqoMnPyxCA98dJmKkDSWPLiA9DyiN2XCyaZZueYZMnZfwzFL1",
  "key45": "cD5dncDUiBE3FD756e2A9fas57vz9EZkipgm9b3ES8vjPQ3g33cQLizdCKoxGHWuLT5EdcP5YTzrs1hfQsubUjM"
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
