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
    "HDhbrC2rZsfsb9KF15bvCdu2eTQnFJ9ukVEpZGjfNLXVQSXxq88i8ue6J8EDQLmLKnCV7BNqK416DiEz11deicG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J6Nh3PpD21ira9eydhcuokW274hPfYRcePXYmdJtkRcVww3eWNi4rnNBKJ1pBjiBjQrDfwi2kszQuEzAjAVtNYj",
  "key1": "xXEYuNZdJk5rGDdH9n9qjzMwDyb9nwNBHSDQnpcJo7U4e6pGM3ogQVtw7uaY7L5BZr96k5gh8Qa5TutdsWtxq2z",
  "key2": "4TPCt7mMj45DhcNG4URcpX2jRN1UKKz9FMpiTF86P2Vq1oTRTSYB4tU3TejbWybPZ6doQuHXk6bCeLsEtHYL497G",
  "key3": "61XXLtePTk75tm2PXrmxfgMW1KeDFGRX9ZZGZXvFPPBN3BkcftDWwugiHTLomtGEH4wmjoSdpPBMz4uKvmfmhVM3",
  "key4": "57SNJYpL1qedW57XJy1fMgqzVnk9jXCUBGYMvMWHnFgPkyxbKKdS1MRKQNXXvv14X2tfJVDPXSX1rfqX2h5nAY7z",
  "key5": "3A1byMmrgpRb9w2CQiGfRHHFQ7KgdbUGHvwNcnKJHyn7PZJPRwBBpHffNi4NLKfpoPezyKxEueg6mHUzj8wjsg3i",
  "key6": "3BzFS6HGhBhrfY7bcVzc5EnAow6oMU62sihcD5EdySRiAbtabjgWfbGND2GVxSjnevwunEhX7dqQPdDo2Qh7KbAN",
  "key7": "2pF6MjAeRadNXPGapyvcPcaYA51zZR5Y16dzUibNcoKHQ274ZJRjg3ThKW83asEavDqEXMdDXDBAvP5VX2oUSd2X",
  "key8": "ukbtwYTpvrV8G9ajs9oqgy93S87zZVqBDdS3VAzAK3zaMPdTdXV3L7L9TpaXRdEMcBf2J5XTZxUyEpoEDaS7ZZ7",
  "key9": "65TYVL9ooAJk3PPShaNyxWYdStt2gssz7SM3dYfmhziBCJ8pG8mokcHs9tGiQZPwMFuybm9bhJcYDspYF3FbXVNd",
  "key10": "2HnGdrLVAxs1t59Dk5PJzKF4EFatGXLfZXHAamUyYu6VUaGZQh44643f8zUrrLUvGgstLFGFCvzDir8DnhimrPCG",
  "key11": "xKP7nDRhPZvCnsskmnarEq1nQ5PdZVQP6ma1Ds6DVyad7bCqp4MMd5faaYsxrahBckj4LmrhA8b4TcqoQuXYSF8",
  "key12": "2H588UFqV9wB9Kyn8uqb61yUqaPD1EcVvRx8xYncnbagEPs6jsXrVeDYcp5LzTocxFqzxb7oJLxs75xL1L442JsY",
  "key13": "3ceXhbhCK41cETBwakZPPfdHKAuWg684k6LSFx5YZP8XJ3kvxCGuZRqiLs7WvRZVyKFu2qPmVN3Bqjt77WWL5QE9",
  "key14": "4KzeYBEC3n78eH88w2TEuUgahRw77o4LMEh65XZnZNXtVM3xai6zkGAVVWdDqasC5V2Hs1M1JhXWfMhQQAa7Hbux",
  "key15": "5Kfsjr3MaFQm5PHRK29teLfghdisJHjDzbti4vC9w3r1kADwo5GJjjM4EYabPPDFXBxedg5M1xd6otS9Cg3vV6R9",
  "key16": "8Z6tj7ruSKiF6Lyz6acaZaGiV5D1aXQZshwkxhuCU1SXRpnJvFHZfBe8n98CLZPLLw5qyPXRyu4hGbkp3PCPTgo",
  "key17": "3BZfgoLiN1pD31t5dXsC9U2mpuebTfrWQgxmNABsCV5Lnhcg8BqNd2TTdjM81ibaWyXQowTyebd5YoRFAN77haFR",
  "key18": "4wHv3WhoxLtqYTFeMwKCaSoHs5AjZhmUsQCdmmaakaRTU926NawHQcxMtyt2x3F7fNQaQA7EyxCMaY8xyitFC5Pq",
  "key19": "i4rUf51gzJjpKpS1svkruN7TN3wMMk2m7AcGvS4Kfk6oUVCuL3xbJUijZfBiiqyRUaxssbyWdgkXQdDRzahB9k9",
  "key20": "yWFqc4RJVJgeBjYa66JRiYZDmAMhYDJwGFkdgExuytsrbeeuPeUR3SDKEnvYNwmE28dLRS8n9Az3rsJrf5vrpLE",
  "key21": "3K9DR6e1inmCxgL33gNnx8vrhZdwDyqxwtS8ihT3Bj6gXJ41Rq5Z4CRzmaXJDENwSEPd37TQxWQccUotbdmqcBrC",
  "key22": "4JBweRFNCmWYVS66ByHiQUtnAdUxAZnAoEtn6htEhiqHYuVFZd2yoSDVZFWaR3HxEJVzrcALVMF2KhA6B9KmsnEg",
  "key23": "EaE7ENkEE4Xx19Zge7ZHsPkLYtaZwV1vWRH4evumzi5iN6TEH3YQ9nQspKUNfJstS3U4Tfy6dpV5puWxtkbU4x8",
  "key24": "hcbwhJJu1jSQm3uKe1VVvGPTekPvHgeg9SGUpMxr4GFYVfQHXJyTgTnC96FW7UN3FA7fzWxoVMqmqv562TJysVU",
  "key25": "2EADen9fiLs5zpRwrm1YH88CsEch8qoSDw5oXbMj88FNAuMuZ4E24Yf1DSEj56KiVvZfcynMSzKg33P6W3knPQGK",
  "key26": "5TSjcr7W33WtuWVNkuA61miAAWY7HVLBRHRuWat97khCCvv2z6kgcBzNfJUj8ro6RmMtLXeoEtRnDCfSwzGPKzXy",
  "key27": "5x6TEnzdZgb7gUdY8WahhHcVLqB7U3rHWEEzFmfnyfk8unQ71VSLpX9eWhDNmTxsrFJ3cNLS71yR7ZJzUmDR3ZTe",
  "key28": "3A3zn4xVrJbkJXaTasAbJeLN82HqtgFjQiLSH14PYzsXSNZ9dpvKaWC3kgny3c3GoBKSgNKNFdR8fK3SpYGRCPJG",
  "key29": "5uqBZGQdhDsonevdR83nRXUXgMm9smqKMSBss1fkuegva9AB3cQVxLGcUWRzENs4LmUjfVDSWWy4Jbx3ECWY92Xo",
  "key30": "ecWpVVbvAayiFrzhThfHtr9fBAXZePjXMrzebvzvrB4tJWbnfAtN7xr2p93Fhxkgh7qMyJAtwLZrgEVtFmiB1Ed",
  "key31": "53itFyFMvqJ1Y6jLwuZ5mVfd9WV2k9E3xL7DAjSiPRFGd2niNBA6UD4WRyBGimCp8rvdVzzb66ECBsmxgMhFh8j",
  "key32": "3XwNcfU1KXBevwNuTZqj45WQv8bQKwFDFtCdzG2yUvLWosjFhnJeWmaZDZ4PQRnWTwC1L8ZvmnmFy6p6AfswTD3u",
  "key33": "Yeu844xkDSMN8TZa1xJeU58RvrgubQEzmoBUbySSoiJ58m5KkRWyN8ugcVCCaMtkgdToBKYm8GD65FQ5A8rVDXP",
  "key34": "5bE7kftEnDpcEifTaRYwk28HCCQikcygkRqTwg3a5QjD8omeLmYc7SdrJzjYkK1EhL3JMzjCPAMcD2r6yrFzQcMG",
  "key35": "35DjCZGzDXT2z9j9vZUp8xQbHSkWXnB3mpff3xA42GH974FqxZPC5Zc9vCkWrQKB4UGoMvNRgWqginGXQBYQ7GcW",
  "key36": "2dZG4wu6ueEAQtAcraAAm83FQKBXha1cHe29Fz6kGy5d83oFP857eVwP44XyciWymsMwaZYF8c8uBD34ojUCGG6G",
  "key37": "5ehqXXsLziFEDoEMopraztzRpDGVzjsSwjiUmg7UL4oGzWrXumCLv9ijPN5zNXbm6pNjrt93ZWnB7bocMDuD6fyi",
  "key38": "4QCLcKXSi9K25hi5qiPxQjp3TZGvmrhbm15juvXXgL32Z6p9iBCUeJgoeEepp3ge4MTRAKTjLmHEMLzJSb2ckhrR",
  "key39": "A5euafFCL3mStui7NYyMLcpej2j1bEziD6trGWk35yPZDQduTfoEaGjnhdB6ZNQnuHKuRpSdZkRWKvBcHAj6SFY",
  "key40": "JA4ewhEfsDoBmhAGJzbcKcpD8m1gsVq8n4gSQuZSJkzBpjwW1Am2S9hMBo2x3qbzikQj2m35X696FGJ6LphaxjW",
  "key41": "345QTH661poazMEi4HjbLwfAGWPYRAotsSZhrruJQP7ArWQRmKQTHSHrgeYwDgFBwAEnrEwwSy3HaLifWQEjLcAm",
  "key42": "5VNkSX4vzMFr9esUCBQ4cKHxQk2hYd4kfuEj4XmQ1yMs6oVs1m2FSc3ATsRBmiaK9zT8TWN95EvcniFRP58iea4d"
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
