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
    "5HRX6zx8WFhtiwoG4LqcSak6sBNZmf3CrtHXBkyUhX93mHJWBhPmxwifJNz1R6GnvMoiWyove9qSco3pcmS2qqvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DdzYozScMdwJRinDx4y6ozCZgFoDBXNXrW32UfpK4iQtsHgbCFMHwMfwTUeXGxsFKymfxTtAJmK3BppkDDMBzkv",
  "key1": "2GrsNrHnrMigYVDsiaTKAKpMdyVX1NBkDtwSQrQXWzaVZWG1QZUiFb5rE5xdwbm6YH9Fp5729n71E65fQSuQkkSY",
  "key2": "3MTEfDNbAhX8VwhA1QWW8sQvhdNMR8a5PZtntazG64yW2qn5JN4EXE94bysyCd146AvxbzVAq1daXioLGGXnLe7e",
  "key3": "3JumRUdkkvM8VizuTStatU4XPDzL5L1seW3L68hcz1txo1W18R3t6UciZoVNrDbZfo28QUx48nfMhXL9UrCenrnU",
  "key4": "54t82c9J8iSJkVVkz5eHBTKxFxkbusUJVvACGiqQanQv5YmzN5nFMYi8VEZatBGRXd4LgDCskSFxGWxnbfuERxXy",
  "key5": "4U42iJPDpL5FfDN19estdk2ZPQtmRMGoZT32bC5aZ9Ad1XkAavwMAQxjN98sx9B7DxCpozfhrdEAPkJGFp2DdSU",
  "key6": "2EoQWM2vNG1QheFquCHHA2rfFStyHEY6xCMVeE7t5wW79TFFiddMjAxp3KLzbepYabWHYKJvkkwW3VfHBdS2S9Za",
  "key7": "3SqyVj1wuNiKUNLH8g1z3XPszwkt8hUvvSTN52VjeC2RUaLz2iGTjngcxrJUuEtg99Fc1iCzVSqHbjbiQQo4rT34",
  "key8": "2X8j23Ee1mEkgm6KSFCSQv1nTLK97M9UBG5qx3nGm42KHLxmKaW3tYxKxpXNND9sHSRD1KZ3spvKVPW88f3Ht1KV",
  "key9": "2m7G6q3GJQC85HJSkrECxWmfobnebqPnbsjxYj5W7bSJQEpYJT6n6MYUu2Qu77PGHXfiYFEAyKVyg41oaCBAGSbj",
  "key10": "5gt9f5ATR3hKbKX5juedmqDhAEPsfs2yL2oE2oyx7FZBpWT838BGm1rb9ge66NuXVWMKiLLooZ5ZLntpH787xc3g",
  "key11": "e5P2euJefTs28x2EBp1QxEnNDfamfsCeQDyjW9ECZSFEKavLbPWWZKs1occsQoh77u8Xuddc4RzU5NZYhU5UUvp",
  "key12": "5UAS1mQVnCrSrp4TUpWwtXnHxmKdRsWMczPgKxuP3UFAXDyk6bNB2oL58kfiBUXKt7Cu7tMMTgjwCMzG5NtuaTMr",
  "key13": "5Z7Y85FjWnALijKtpbSyTRzYvvwN9T2nogR7NeBDgGpaVL2Myxhsb3AKEDGtrFmcPY1Zp7aBP1YqEmWQ31Lq4hRy",
  "key14": "PHqzagoCx9N6HuMWLi7Q7PNDZyPJTqjVc1PsEpGpeaZcRHJ8LfJsEsojAxfWuqcZ5W38y4dcjRgqb6eRbrYjzmr",
  "key15": "29qrQEfE4MUoAfBrPh4CCHbiSJk27eN9e28uTfsoVdKYS9MeepPyiWCigB3snPSBw8CuLHrHnrp8L8vHFLueZeHV",
  "key16": "2G7GRV9V7dPayRLHsADyoXy1trvDAHG1xsCQv5GMp2JPDgcG8gvoJrCn5gG5JiEWXXCo4MCCu1NLFCzPSn5s4Hv9",
  "key17": "gSsPR32q1jJPVknkuLordoqEBCpun28rV1YzbRPQem9NqGF3zhsFYqMa5BdtbYWby1WSxcXLnp8sn4DHAaUgTsR",
  "key18": "4K4pLjhnVhwgbhBbTmfUMU3tHcnm8F2Au9QadgBtFRUiHmbLBwy5QZrquXufjACiaGXkCuVE9oPU7ZEebL7CWByN",
  "key19": "2WpXXBeyJ6vDRe6GNxfXNJNF1gEnauf8TFx9e2VUowwGkWs6uxMt3DySGYnjnATfA9zwuBw6nxvo5QkKWyyu9465",
  "key20": "3JU7XXpgqgu4r7zHGHMbCZQJZBMnNzr5QNPRzduMwRS7iWiuyu1voj6TTRU7LHxbmL2c4zWg5TAoSpvr3FMMR4M5",
  "key21": "5VUm5a3wDrkwABwnV7oSXGtaD72VdW7S8FzSmc4B4RrV96nYZc4mAmnQyEuR7DDBqh4dFMF5N9DPmsXSx2rLzHnk",
  "key22": "3BK9knZKYyogG2RTmhA6zdL6eU6YuP7WAoSamLeM1Txi3TNzboTUWQgS9onk2B1KbmXFhNeXNJfQzZ8qyCCsNFZR",
  "key23": "3u8ivEhybmSTtQMcBkFnokEMC2ixPfkFwcYDeHPL448bCE1NMZoQMUNGme6WDtrhzjewYsUeocjybN1q3qGf8yce",
  "key24": "2WrJrQEE6Cg3WqY7FwajVncjA1rXXFyAFygeZXgiqrXhUEqfkwRb2chPpsZayruJ1U5vj3UAGMZEXYEeVKcjj6PV",
  "key25": "2PhuVin3j9pVPtEL9UKDDRYWkDVSNBsTNdJ4vQ9Jeqn9srRLbEtuzuSbgzgFgBe3peDtCn2SUaYYpVx8Y4tjjEsa",
  "key26": "2KTLfd9QBiVfpCdUt6uswyXjVqvqGMUXg9Vj89Qf4F7Dhi8ojanQhkZGxvht5omtHgE7xAS487NsbHKJ5nV9tk52",
  "key27": "94LDgV86hNCsSw83HCM5qoFcgUeXoxb24G7f3bxpc5SNzYdNQyX7iGAKspZuVVK7wuUc8sJF8xh86UVfYWtxb1b"
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
