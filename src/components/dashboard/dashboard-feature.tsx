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
    "xaathhzbprsKfHztdh8u5TWtf3LiWHNZ62UPdQacsXQZ4rA68sqFkj8pcx6x72y6FVtkDsjqUJ9uaKoj96v4cMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XSJqDtn9PGtoaKo3GJWCeDdqa49BWVAR3TvFUBZdGu5ZheFng3u6UuhLBCe65m8WzF6DB5iVHp1AR1KDAzvkVk9",
  "key1": "5KjRrf5TqunirtwScZCBBp5s4ztWQm29UfmuGWrku7GTit2pEwCanYaUnbGesSVUpySpTJhw6Nx336mceAbeysq5",
  "key2": "3SFC9UdeJ5obJyd7KTSEYqRouYtydiX3buZNHdVmVKJLY9MU9RujA7cprDwD1vhy95J9hWacJ2siwPhMD5zYA8d3",
  "key3": "3BP6nMz1ysa9UoZ3nHxyG8aHf9QtgbboNVMG2mKJtbmv1WhR1BbA6mp5841xegLwF8toGpGVcjA9kkPuVx2cigF1",
  "key4": "2Qh9Au9wFXneUB8i2W7CdwgqVh9sxpetzZhHpNPXBhgsd4rsPtMUj3sMbk1jf91ZdTENtAADpukiiwCkCmCngfq1",
  "key5": "3YCUk1saHc9r4n9nM6yA6wp29tKyB64VmrEG5rmtYoZ9N8UNy6xudTqHZQZzp4Pt7bGC36im18TyzSAAkEuJ1Shr",
  "key6": "5PRpo6PiBETG2nU9PPAkbGzu8uW56jq3QDR4vJMoGxUDhxBpboFb4Gp3YnWqfQUt67a5qiAa9M8KPNEbB4RaJ4xy",
  "key7": "2UXWBtDYrsNtRF4gLgWd4RGPGM5FcdVXKXtVM59uyQznx7Y3gmxrDEXk34SGensZaLEXYjd3mXUFaMgKy7pcXfgc",
  "key8": "hXrDDF1Hbt8aoYhQeM9pK1YXR3E3SH6ztoNzjV7EJMGoEhNHH2uLFA31FDDMjDpqoeYtMMEbgA9eF53sR5kB1WJ",
  "key9": "2u43PadnjmLXkZfGR3oSfMzuPFA1BgwZUaQgCyUWrGNdgQW6Dyx5oWLhiZWyZP8U8Efuc43hjX44BNC5y4SJejm5",
  "key10": "3mZy1qrHnwU2szaUsLRYBrTTaPFus2CCV8ZZgXKEDy561GmGAGJ2bwwSdDQS4ELSeySK13iqAMKCQFRQexCEDPwG",
  "key11": "2J7rg7LwEuU3aUumkN5KiaDjp8BwfcQbGdHiDTkJUqT6XDoaiTPoLUp5wPQZsRpegYZqtHrFvGm1wXjfLm3g8z2Y",
  "key12": "2EFT4LR1RDUk6q3Qup5ugduhf9rzbfRzAeZfy2utnirt2hCXZnbnWanX7taof9yZNVAYJ8eDcDYsEaUK4vEwrh5T",
  "key13": "46bpKU6ttN99dXupgAL85WWj13kUyw5NSjWYgrMQnxJwii5UQFVFHeJFUPkYfHXBfbQNmS7YxSDuFmJ5b4NGdy4T",
  "key14": "3BGv2TLsRpZTLFBiGTuMxMEyJKBX9JETAmgXCZUYjc7kz1vN2kE1DbsEV2BNNgWgmQFy82mPuxV1DhnkGLYM5Vt4",
  "key15": "2iXxjWaeoYFxDX1bfpDhHQZKhfTNkPFMY6oMEG4cZSxUnQUiUAdYfenufiUndSS8yPVDxqEV7FsJCqMNUtamgxTC",
  "key16": "4XjJEWEk5UWdbsAYfJPPnJRK9wqzZMfrTwQvmVUGifcyqJU8sJjoHh4Zfo1qzf92LwmDrKm26sh2khQtRnHxPNP3",
  "key17": "u5zrPfuCthATSsfo3HoHFK5aHAjoDDdfuEihzPS6pyBpcZrN7QsKWE1aWhdDEMdKkMGBdorfTfmBd9NWtUQPAYn",
  "key18": "3fcUStSChn176YUoMrJ49BEbdkoPHuRR5LvXhU9zB1ACAMK5CmMVHDHPTbzMQ6Ce1Gsj3TirDv6EzuTBkYpXZRZr",
  "key19": "4kygRUa6rVZJmrTtkGERWNxp95eTTYthASzNbDNXRPx4TgvQSRk9zFPzZkGpPQDhvtYE59o3yqRqKAVxqx4r8hBR",
  "key20": "4kQEfLL7bmqivAo8YpjmaNxDzpj8cBgqdwaiaKZW32iJkxNy8nzAuyKfDYnpUAePw7gnMkANDpTtubSwNiXCQ6dn",
  "key21": "5hiACBrkc6URMmi1DuCoMRGdHKaENmX6E1RUW5Wtd2YySMgrtf29tFCESzzpuC52xKtERhMkhwfB8ifeGhDrwLee",
  "key22": "3Wt3c1Bw2G5DBbHSDEDLF1zpwjH4XpEZz2wuomxHPDpwK3dJMfAEBTqCsZJoKcbnLTRYi3Wq5tSBm8oonB4oMGD4",
  "key23": "XtqB1sGzNfS41x683mg1qpqNRFxK7urB7kRbsoKHK2ARzRXHY61x33e1kxiRmAaJtpLCMdPL5JkK1EW3wVtk7mN",
  "key24": "5kjj51JhgrL5HpskzToQ1Yv1MpqvQvVZrxQSntYdiaHA1SjK5JtzuVprGswaLvjYneteEGk9zAVExP8uQ9Zei385",
  "key25": "39yv5WPyEqDJv5JfrqSKu98h5kuxoibGiiqGv94ogRSzbmWV7MFvFcWM7d5S4VC9DahUmPuPLjRXWEZU1UBQrZ6q",
  "key26": "3kr2NDBbTuKQsg757tvQjByyM5QvF18SXYxUcnAhvHukJHiDJ2aR6cv8TMbnfae3tmPuA6bVAbqPvuUmjR9hPpNE"
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
