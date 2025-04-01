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
    "1xmP6a6WyPxv7vrPBciyQu3UQg8jDadTC1JEsC24UBAND8wZaX3ejKrRnKuipD67Uk5UBjEuQY4vJkehsVR9uXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nmxB2UTRdVhQN9nouuV9Xh3ScPrwZqwzRBAYgcBneos8KPDS51XCofma6HnuZkus7GbayAfy6HY4GRkScNezZ4z",
  "key1": "64bT9kb7TcKeM6ozrC8s7ABi2Heoj1yP6QY5rShjgMWm8mxgBw7G6oXd1zDLXkypGxmXjH69ktxQLNHSKTgymbWM",
  "key2": "jiejzEtxNY7zdFK7noky4tMR3WekEdeHwckGb7hbxmBDBtbx5nyBj2qwfSkrwszAAc6tA3i8Xg6fNVZ11YT4yUN",
  "key3": "4QMTdwuPwL7WeFyJJmqU6NKSSWWJsVn1zg46jaswvLD8MFoe2BRPCvPeh7uVZypVR834UQsV4jDAuvmuhtP1XTm9",
  "key4": "57Vvb4CBXuKExrKcux2DBLafywn6m4TFYeVQ7PtsUya6tX9CP5JTkPoNjL9SgwKsv75mrCcydP5M64Tm1R7eo4Cd",
  "key5": "5waivFiYC4XNErvrKrDaMPnmaigrqV7UGVxnJYPUo3jYDeEpiHcPPK6qpFfy2HrXg7YMoXkurhFP1ewiiHkRw8Ga",
  "key6": "3CC6skdMpCnfWqzvXLpFhnvHZFkvbhTtSnNmLttm1XJywhmhMYG47dZtpmuh1kT6erhjTQsvHAicgReSr1Ni52ab",
  "key7": "5rDWHWK2D6mJ2sRu1dDNX1XKcxWmpbXk8X7XrkrA9SvHRsEGGUJSbka7ZJwKgphX174ebJUx26xHpHr5TTw7MrEx",
  "key8": "BZJ1XV7umcuDwHjLsUxuhfzzrq5WCAYY8X9ojcwCAV9VU4pkCC5VqZzJZ3AgLhmsTccqzuWdurmkZFHTkxWastE",
  "key9": "3Bh2Cm7qU9DSktes2GVPtT9QeMteMnyrs8kDDhwTfP3soPdBkNVpbHuAqPSQUy7pnmgaDSUEDEmhFZHn8BGuARS",
  "key10": "3mCL8eA4rActBsabqSQxjdqQ3Gu6S95wq4JMCEQUYDLd5636vRnTTou4KyGdc5TXdHsZDJXu4a7kzb4DfMeP2SaW",
  "key11": "2eJ1avDpHWisXTMMCtSQzhAgD3AuHVADM1MRGJQ1TuxvwJQjsrdBzyNJbeCz7V9Et9xG7GVbLnrHNxhn8UoeVUqs",
  "key12": "5D4fba85zZJp6doeB41kpzpK1jMRgNTLmHXsewncKv7xPdC2kARXZtKE2Zw24yerkUkEXNg39u5FNyW2pJYaz29b",
  "key13": "5Y5voNtaAbZMxGvp3XLFpemE8ruVHjKzDCGcqCMisryM6uTpgFUNzKeUCGMVi26puisbPMWk3a78hCKn4gyW9zaz",
  "key14": "PSMtSbyanCZaPZrBdR2wwLs2PvfFKySPhd3WJsGAgx7dPLK7Vw5g2seudNEhZXnuP7q3KbSD6vnzgQmhY56Rb2J",
  "key15": "3yuZzgUbWudgx3RLLt7dLRx9qAn7fmGZ3h3jpiXCbAjc9fRs1k4Zsw7SmiFavPPHLHQcgtbVB4FWQ5hUfqZEM5rF",
  "key16": "3jjN1bjZzktnDamMytzEsdaPx4SvnbQgCELNbfrmf2MFmzuLdNeQpJ6K8imMH5duFEng3vmZFHvtirEY15rcBUwd",
  "key17": "34ngsZS5YteM4pWn8S4pb7XgWrYn86ayZDH3QSWQrsMvkxd7suCgGnFxE5N8h3pabgtPwfA5i5iQGY5PgeK9BtiR",
  "key18": "2LfT1KpMiYXHidPHcDjZBVfcDgfVdpwnnAexP5ygPamZtCGZfE7EjpsdreZKLpzau5T7xqdd1wgtzv7extudp5dM",
  "key19": "4yofsUJU6vSTEEi84QVgexfJNZ37KfxU3EeTDtZ5YV6N41RDc1TYj1wTcRQ9TNSaVkTvJEYbsCiVJB3mvkF8jur1",
  "key20": "3tLkDNGC41JXv2oKaeSdTJDzYZLSEPPNQhSZcEkiegJiaerUThfTFyC2eF9rAJ7E62qawBthzT3vZBr4bfVhRyuo",
  "key21": "3SQCFnMgBA6qAfEGENsZbJ5jBKeyjYoraEXCpfUPUApqoe3C4HVG5PEo9VYgYULttrGbJFJnwCumKDmWPq9KhbAr",
  "key22": "3uhvm63Sr72aXyCPWdELqkJ2nLfLPPMBKkSZVg2cPGoba9gzxPcx6KsL6GdHGBh7PdNuYzuLaxeBYUWzU3mW63se",
  "key23": "4NCY6mUJ8y2bMTivsiv3xFPffxewPvDTaA5N5KoaYEKho3fNFjmGKbSuPRkLQSqNerWDcUBH8MbE6q68gskKocFF",
  "key24": "zare9vN6UXXa3ci4V1Gt6p7k8CfYU72iL4RUCppSUSHtoc9HULafLYyh5UXHtSJVgWwUaLLGkNJQQyw2UuwtZYA",
  "key25": "3LhSTW8hEpkV8Y3k5A8BnWD2QmmA2qtanuJJyhQ9hm9o7aNU47Qwj48KSNMxyENEkNfjqmpi1aM7WWXq3Vwdsirf",
  "key26": "4nmuUR2Ss6gt9JnHBF3K79Xy8LZyFXF2GRLHRH7K35wVqmxcpMo9trzWCXpJP4HKt8H7ydHTRXn4N98HJBP8hHwA",
  "key27": "44h3EHGYfx8UKbxnAWovaN8tVyAtgUGaSVu78nw28vco2UHfekWtRpD4ViXKGmZ9hYKSdpjTgAynKuP3WbR9auC6",
  "key28": "444Td5q4Ne2wqyVm728SR4zgvcTXAYuZvyx9vdP61VCnXCRyXXyjiCgjk66aNHhx4rboZRvTmgqn9ba1nhiaxDrp",
  "key29": "3WzdcJo5d4fCqst95EV39Rc4j6Btu9LmczEnwzQW6646y8Q5fjHh6rCu4wtbWj1YvrdiHqEYN8gw3AJdyyghmapJ",
  "key30": "5PbviAC1bSHEzv5Mbr2G9KViEHTrD7ZCp3vq7rVX9EBTaXu9uj6oEYodTMZmCvi7R4tgycZZTTtiwAv493PLcA2a",
  "key31": "3i6PdXLoVGR3MSJpHakwGT1eoi4r5tuxuz5M41yqoiy1a1QUqQPaQJemfWtsqFjLvkvqZUfSgPNkUmJvsYAryK6A",
  "key32": "3T4gEqiKtSwN4uJjw1iLfQ4P5ehcYs1MhWChxm4NzjRsKMLkWA5sXeQo5r4WhX87f4UNoWuD8uJx4v3JRxdaiUcm",
  "key33": "wwTwMNiRayskwfotdM9amzrVf6TJtXgFhK1RdJf9TLPmrFjzZK6CBSYNtWBnfKzyj3gAeytqCLmLNdurHcjLfWK",
  "key34": "53hGrGpAhgnJMiU679UJ63BiJ4hP4sDnrUaceTaQHZuoFGcxnJRrivx4UQaANrPFmZNXqfjYCy3pESaSaA98sKup",
  "key35": "r7QSbA86Es5votYhxQ3RASPXhqHSUorwAbYRPFQjME83sYxD2JT3LGw5ShJT8mz2NiPV8kBVdgXeyhEwgBYFWfk",
  "key36": "54aoFLdxvkbWC1Fb28ZphirY4rA42BZaTAY1F461eACKSChv1nDtmPWUWEEkaYzfLpbyqHtgNFyri11uQi6g4xQ8",
  "key37": "N9vBcYSAwGa4xYJS84TvYPmpyvrdfPgz5xFWkpDbmLGWLAv7hABKU1f4X2CARqEoEHefStMLcRsGsKVkqhfDdM3",
  "key38": "4JLbkBkUHMrSoyM8HiBZ72jPzpxNBZjquVvMSrumuFe2By7CPHZZKXNWyqLjBKtMwwaq9Yit4rWNBceuDR9d5Hwr",
  "key39": "3JohnuHguDrEXkxzSjCeoYpiLTzUSJazRChcXMUQseD1U5QTHMRsk74eho63BkhjzLDkzHXboGUUgcaxsEDJxXy7",
  "key40": "3yK7eVQEqjgMPh7r3Ej5kkibrMgGaaqKTBPnjZXux3M17XyZiNt3d5d1TKzscJSXvzxevP2SsEyKjVn8S8x2GUyv",
  "key41": "5soQy6epdrtu1iAifZjXs4opo4ezDxCPnd7BDrPYmR6H6Bb4GYkUaXQSuRUJ8zhnMgXWeezJYQptVxi3PmNm7HSF",
  "key42": "3jps4F6Uq4W4pnKYa6RHTjCY4STyMQ2hgTkT3vZhqn13JCYKXibxEKBh4GyZc1KxmwWgMRiEkTacY7Kqij2VVqvK",
  "key43": "3y9nMmHiA6rJJQq88iS58miAHHeRsTffSU3vh4hvZQ917SmW3ZeDGFcPiabiR4qa68PPU65vpCQY9USVAs3PazTN",
  "key44": "2CyK99eDkuzLGdptrnn1tdwBhRQXZufqNBKXTYTTscvqHRngfcBmMyF5niYejETiXc4tXtBatvCbvirGV4SFkQo5",
  "key45": "425SxcSsWkGMf7b3qfyvbYhbdigXwJZQ67QPQ63MMvDLRUJ81tr8ADkTWyjryjAJWgu8jcLDD6Mg5YHhxggMqA37",
  "key46": "5eo7kXC34U2VCn2khGyAck6MF9NZV7c6z2c5mty6cP5ZRtaKVoQUELzWq2pb4ugk5ZwXz5y65JSiqoVRtHL572tr",
  "key47": "4DT8bYj6N1aHVF93oGSymAFcr2uWqS4BgXSfGNghMxLZnrYnat3pTx91j8HHxLB8aENjxRcBu1NfXGXvFAKNf3RU",
  "key48": "tEdR634JGTW2eLwNAU4LTJfUAE4rXc4YTP6u56yAsxMfY4aoCR2XPhtVGwV4uHcjcCP3S4xrwJa8bgWMczsbD6o"
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
