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
    "2dkeMf7yc5h3dkZQDN8e7J7FkVN5eb1zUh17c2J4BrA3G9NGBYZ3brnKYbeVR9C8tp8vLcfPemThZnuvqzj8P94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xjtarMEs1UCKzYefZCqFFfiwLjAkEhurxCxN9VvQRamRgcLkBRHtWyudTzPZnUe8gGy4JUQMKDA6H9sw2JwSPuv",
  "key1": "2PN5tnByNVHyZ7Bj3xwo2W2QTRKg4SxNn5zNpBQTh7urYsGztywx43ZKtotS19PXwCsfCUj8e7qo7RwUMgcDfK8E",
  "key2": "4vr5bPEW55m9YdJuHW2npfWWamSHphgs34ZNkHihbFkSVpp1Ubb3hC1Qdh8rUxqBdvVu3PDkZ5efH8FVNGY7j56d",
  "key3": "2WwWLTpjBRrbKJmQ4Edj86uxaQpqaWXGzhQrnb6D9XceMWKR6jjmbRdR8uqknZnRehjyYPFTpt5Qmqbg4eNfSwCy",
  "key4": "2HFViTjBRGtvb6oMm5vNRmPPx9DtZXQFJY1uUVoeiR2Dqq1RZX43719bJrpD9QsWPkykYiQ2Y48PSPdqTE8i6bfy",
  "key5": "3F8pqj8TpvXt5oUUj9EPgtqUMSAznfw9tkcCxB52m881nLQjFbNH42kd7XtPcnTZdHDKGL9mquAQ7dxTsL1C3Zij",
  "key6": "3qwc2PzLjADuRJafgZUsRhbiMckvtCziNmJniqQfZf86yKKBjAMj3S21NaLMePm5zJby4Wa6aJvEdugVrEcEe5RH",
  "key7": "231N4uN2HpLppS4WUhAZS2r8QS8rZFUZHSfueK6Bbf1sU736F7qCqwSN6QgWp2PH2wXjJB4Umh6XQugSRN56dYsx",
  "key8": "2Aj4CTGgkaEddFip2ccs3sJpKXFcQvBr3RJBTZzHg63ELooVW1ZJJ9veDMDLZ1364W84VpYmteEWS7pReyse58n7",
  "key9": "4QXqZfhjfssdAz5SQZnxreaT3v4GfqfQAXacbgjeoywc3uzRa2AgEZTBb3zwENSeg57J3r7Xtk7M1c23UC83RJjK",
  "key10": "4Ju5aEzaTSyimwzhvDM7TTmqyY5eePPRXzPzamF8dszKbjBvgAnq8YWa1ANptNuYZTSNTLVZCKa7yF3j9jts9iJe",
  "key11": "rLFkVxmKT8saLX5QBDaDE9drEpfu8hhJjswoXf7vrDRFjU6dNGwWevzpResY8GEakhkBMEh8zE4bKhj39yMoAyQ",
  "key12": "3TnUeUXSzqfSsFEm7uhtnwrKdAUQuQa5vzPnA2UEQVCvxiQm8hzBY2vdKvq25yyQWrqEvShtzV8ojSnZftYDwxMT",
  "key13": "5oubqaTGs4R3FPF8jBs95whmT9MbPUR559bAeAySooFqj5CT1oeDBvYnhH5pwxc3ZRbFANbnwvDWYbnxqwnWDPaf",
  "key14": "HuVVrg3QzdBfs4vcNFKkfa3TqSmVpdf31AKwkTSv5dx2L8Rcp4CPqEyx89XwCt3mPC7D7xBtQWbUtcpB6HXV4Wq",
  "key15": "2RVBwDqHBog1NqTBfa82PrdbJ876j6kVsraABD2puChgPJEPoZGZQ9EEwaXNeUy92NmyF69YuZMpdXJCvGPkxyEZ",
  "key16": "4mHNCA1zqbX46NpCVMRm7WPs6p9T8VGDYgQWfmork3FxSLJLsv3Kq1phZ38j7cgkeJXAJWvZig3HdJhSXH3Bd3QC",
  "key17": "3PPK3rUVacQZJgx6yb1HjtUpk2pG81HK8VoYvDPFWmxyH9xnHqeEtUngECsA78s5RFtJrGB1jtgAbKtPKw2JRntp",
  "key18": "3uQsiy5kYswjKd7SCcvbScaBqKoYnKtRiCkNfFyx5cpngVMov6BjQJBurNfhXYHaRvScCuibEBUPdqmKU5j11Mxh",
  "key19": "4XSWciJpGSAhiC8qhKv2icL3KAkx3BKkmX93CaLNmfVbkBirNKc4UQGSm6WRwSKnGrC6oUpdDwMZj75L1G5WqSwt",
  "key20": "57hJhoKdhKKGo2tJNYWe4p2UEpEr1KkjzTJAmVQG62smBWxXXEqfuJYtTbFJBbiuGUUp6wfvAgS4fHFV4pGhbWh7",
  "key21": "3R8XYbRy6a6MDdWGJK6Eu5GBHp5wRgosRCyJHzHz2YXCitW6RRS2xdNiYf3rRui596Kv4wUmmnhJDygcGCeXDyTF",
  "key22": "35HhgQUfuqPBbtBUTQGc1H2Wmj8rkca3V6DLAEk8mN3zjfbnEUuZ1rcEt8Tps16xQzJfSoFt2CyhsMXczdTE5ZLB",
  "key23": "XGJytwDvKF7Q3sUC8AquvMAQouAhiEfXH3qrWB2pvous7rkNGMSaz7Bzy1tHXibuLUWU4FykRRvW6qeLLxB19bK",
  "key24": "5ekkxuDjPNTEZfDPVFRLV9f69ETK3BAmFtzVnjsa9vmH5zzL2r8Z6g2jJ5YLVptQEZh2Zqb5whnq5n8REW18iPK2",
  "key25": "3Y8i4djc1mZxPo1qyrhsBiFjcfhP9VH9AgVGKtbfZNkDpHTPJfQdSBe8i64sk4AEmf2AFR75VmDyG1Y2zPaxd1tz",
  "key26": "55sxMDWxMcbp6f7rDcdJMjXXK16pWub1pUC9ZWjf6LNfdDmmAvs9nHpuBVtS9tc6H2Rp8fMwvoNKxPLYYTgbRfMi",
  "key27": "4C9dBKZ1kPfMkDckUw9vixdYS9LTMcv6GEWrfJDkk5DxofrExzVVX1Yag82jnMrNWUTteR5KfZVdKnyLe9TrHdv9",
  "key28": "5mDLf613AumydLKp7XVkrN2GKo2gJu3RDdVgSqe9WU1r9hmHkdJcifyopAqLF9zt4yGCiDUgMVLtz5JBb76ULSMR",
  "key29": "3r1zUXJtzNPx4pbQV4ppwmmRUKCTdP96LW7aj6XQJcdBEhHwLNJpdPzzxSqoTZH6Cig9kUoQD3i7t5EpxZP3CHzz",
  "key30": "5cDp8n7Uq3fvYW5tfiiBaG7z3A1dB7KnK1wVwjzAwoJ6h2bLKv7RvAudgL4gBAFDoUt5yuh8vcAvo5rpYTNZthQx"
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
