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
    "2GuMB6yaQk4jWH4PRuzmijWK9hwtVXqLPAuXrDQwVNwxV7VYv256p37ioVDT1ozVp25S7Cqhi5NHNkCy8V3vz7rW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AEHZYDBUyezmmoiJg1kCGk4oY9Cg1YZnKyrioou5uLfNfqY4GtQYhHTzg1H74TUNY17LKJT3JGSs5p7ZKC76stC",
  "key1": "54Fux3N23hDA2ehDn4uK3UiLDCSWGBGVNuhDq9JnD8EFkwWMm9YQ15Pi2Av5qjiYJbM77wn5p5BKHX2eMaqNCX4B",
  "key2": "23SVPgqKG72Ua82quGgSvXEfPRbrvsvPLfVFRSdBDRgYot37KqVL2LrQdBeWMaJ9DSk5W3ue3FC6NmTtciBs2n1r",
  "key3": "3NYUk6JiWrZvNbH7TnapkUAGf1da2c3nZbkQh3giYj6wnhxCSL8mJyKttfUBXWnich8dTd4yESa2pL8ohkYqRhbw",
  "key4": "124Uob6jEWy4sdSTT2yKXiPq97ZSDvGMnzxWB9zKVM8cRhQXC1APxnrhg3DQpHredBXZqJMWJmVp7412FHnipcyC",
  "key5": "5tM1Gebr14e3U9i7rmUmci598g6CvBzGDNmAs4N8k8dPtR7KG3MThvVQRAuYHHHBQ48y48bT43c1Zi5k83cTFaAw",
  "key6": "4bKFhBNiT9dhTb9W8Y9PCFcXV2zYuMg7VgWdkj1vku1vCNrSFndf2Z9wRifkLUwbaHazeieGms33qqqpGNRPMhnq",
  "key7": "4ozLF8Zc1jZoJCGajDEzP9HpwkMaSeQ9REryHZCizDbGaMMZCVn1A5jNTWRXmSPnNfdB74EpADJwDLmbL3EqPAXP",
  "key8": "2syKvtjZw6ttcnNxvSJ1zpcqRMbpmQREdoPjCXW97fkh1rom4XD7w3u2JPT8NFbLHEx3vd9gTVa48HPAqgT2dCTB",
  "key9": "5WwrKwDCfk674qCTRWPbfT1Yya5xE2GzkFRhS2moRP3GxYkkmomNQopGb78sthw2a64iQrfpGhjmbpaQTzt5Qoo8",
  "key10": "RPauc4tdkVJg2bbnhFGyvxs5LDgd15uQXrhy6H6e5uu2BizMwUjbhFiHzEihYqDV8FNj9XtnzTFVAmjNvwpiw3A",
  "key11": "5DGxiUXWWB79n1FN4ByCQNLz8WACeGBi5jB7L6PCahYTQBjcc1YaMGveCEu7KuTdUyb1tdZAfeQqZgXEs3rK72Vr",
  "key12": "24rPYghE9qq6UiBdg15aagqTcDbYH2DPjQutUpDwntATfDEHbcC6tBkaiesk5KVs6CNjmnjtNLQ6r5mD5vfkwfhd",
  "key13": "HX5Dxoqg8GTnwEhoiTDQN4TX5tQyqGTg1UFhbcXC5ssPsB7McvjXpWkoNfuqiBjCyEhdz15GBv7uN4FDo7W66JC",
  "key14": "4unAKd6hFE1t1aaQ3cii1hudWMC7J5Nt2SYYde3hQjEo8qoPxUTPduZRwnr5YniJDCm5Uz7RA1PixzV6ESgkMP7K",
  "key15": "78DR2HN3xetMY853XLsvb17ncixEiupCWKXApZZtjZG8avgdtFGm3c2LspaYc8NGtzsDxMgpDJ1m2zXEwHkfS2L",
  "key16": "59PriqNLoPK8H7oJLESWqmFmJbTXpmVucH7wcweg1Nov1sgSXDn6BCLvMBDDMmCenXGN8xEf2c3XxhDHcWuFvHSo",
  "key17": "ir5svzEPY1rUDgQGBEkfsmCRoo38MoJ41fYLa5KUxmJExB9PcPmD8pMUDi7WqUZuZmMnYTYHsqajuFX1mwd7T9b",
  "key18": "FEBLYHaWvzDSkhgvHe8NfhtJbTWaBwKtUxQufyjirDFDgE9UeX4vxms5rWG2Jy7vHhDanhTncYzBz53vM92PPND",
  "key19": "G6EnScspmRNdtv6uqrPnAYdoJW59h3A3VCZpCGLXqp8KHsSaikMjKQxHQaitTM97BqWcoWYYtNYEPHje1zBgtwn",
  "key20": "4Mm6vtbH1GXhjpK8UujQ3bVvG5yUAhymW83cWWCPt8vukqPuWzYnnm1gU6gwn8m5Ph1DjhyoR6UzB7PwBgQUXAS7",
  "key21": "3ZSfdkDQijivUBi4GopvbeZLgPEyxfJg5ZhFRNHzS6PJPwJVdcFf1HQ25Q9Q6itug2C463N1AGjRAhE1HWWDN9y1",
  "key22": "45rxRiBcszK68NLiVoAEPaghNJdYR1KEAqdmkvuGnKpf13PrDfDmjfaXi5oqU1phmpP52TY5bJNAcGSg1qnEQ83o",
  "key23": "33JzTVbFoy4CVndDGh5qxFCbsEWVLKwi6KgaXkqndFGePm5CRUP66qQSuF6EwWHFJwc1kFwsNCsjCZ5ShFzHRwdG",
  "key24": "5fcyekuMixpretRYx7bWFfNFxw2iuhrZHbsCh7R8bErwh3Gb1J8P6d7TnAyRTYDAvWpGJmwUpKWwnq9ijZAYfgZ2",
  "key25": "48LwSpT8CNdYTVeFzhFbzECd53GZQG1vdH9Z4cBA29dJM4Fqc8i29LiegmjiBcBxAQnWBVVccpVx7YDTjsAbP96g",
  "key26": "41Df2BJFUdzkuiopsw5daZMT9NKMTjseMx5FrnvJBGwXcdXAbQAEsPxoh6dzqhBUNA68ke4guqEA1cdLZ1kT3kKL",
  "key27": "31ShufBpLK27zn7Fs4k9ztwmxXvDm26hGQeDQFNjYzyX5tHEfem3S2ZcRXQrWh9Wj5t17G4qjiQqCpyrcby78xip"
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
