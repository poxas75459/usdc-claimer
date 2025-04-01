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
    "Gg1XwqUnG7PoBxAgeHs7WHyGbqTM2jiTeoyAJtJps3Vs3np1WieNMEw2rijMevBhhGHoBjydEJ68hpJ4bzSGoqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bjsic576wuYcsTpv27Uyfafd3q3guPyckZq4ydEUW4jur4VTXfMmTebUZYJC7E81VLh9HgQcrYEB4ZMY5Cs4Kwe",
  "key1": "5rbj9z4bDzvouU6BEuBGya4X9kjmYDh37x9tQKRLameFCJ1s4fe4s9EPX1YgepCV7AY8EQWXiwX4FqukzjTTDwXx",
  "key2": "5eswM4pF2Y1nzhnRcgxAYoqxzS9CdqWE7TkTRZKof9X1hZoeJDdJBhCWFo2YTG5oqzJ91ZTTNmD5i7D5NF3MJ13G",
  "key3": "52nCW3XRj8fJKeEvxLgKeXAu6obAWAhSULe1bVaVZfxakMpbxAPHsxaSPwGQ8dZUyDY5HwkLdCLdqi3mAfP24RWA",
  "key4": "SXnZEZ7ZXpXiuvGHkdArXkVeARmx55REW9fpArCCsY822TnPQhkZPXpNMp7TG7CAzQFt1GGiGGny19M5zP3FMPe",
  "key5": "28nFgQcXz7qBmoCeHhmErpR9CZhhRCo5DLyEHZiRoUZb5QbW3D1tojKwywaWYDQDqAyrR7rAdogFqCscUgasENER",
  "key6": "322r9bkuq7wLDDCeEfFPpPSHu7z9pm4o1zQfwN25BfQkKbbWxEyae1TcPweEZYC2JtDcxbCSvk27DK63e6fb89PX",
  "key7": "33Rbz3nSCGeuWbN4fKcAjapRnDBTYDKZ7HbCgSzWhQDd4WNwddVvSZguCQMTZK5GvsqnFHWqAb4hY55qYVjVxWJ8",
  "key8": "5fmUgwT2Dfq6s6v6c74nSpoxWohheQi3tKakeJWC5gc561EBQLoKUTQErGpyHztrgEGpRoqPMSamRsbXsFpzGAHm",
  "key9": "sh6rcdj3mNyYxMumEno3gS8ozSGxF1H5ti2jJgvz4n9ZcvT3fKwLf5UxYzjJUmdToM4x3TN1W3csHBx5BTWpWnG",
  "key10": "4PQ4VyrfcLQGzexAnQq7SoZ2yfLBNazwYddKvDZ96u2k52KgN9JFpBEhicVtAU9VMq2m8W4EW2TXS3cp1GSYJRmo",
  "key11": "5EnPJw5fzXtaYBFMvLKd98hS3y5r8UQ5HpAP2dsaTiGNsLUXbayt6Fx2HcnQAgdJK944QvfXpAsPN7hrRzcYe6Vg",
  "key12": "4uyYoizTXCDerLw9Fse4NW88tjAH3h7BmAEvyjUmXXpzyvxK9J7YVPp8hEU6yof33Yrz2xRqbXGwdh648qr43raN",
  "key13": "32ugE9qz4v3ATHCPPZYEDuTqtmPgsuefdyGsTadP7UKhLK5y2CzBq8VvrtxCDAMbbiXgZ11uDuk8Vh2M3sVWm3YH",
  "key14": "3cnqzuw851jH5gxCEsC1BqFmTw3YAmyuJk4d1CR6RTRdf6QWGMD8N7cX6vXX84oHCFh81XDkwkpMGo5xgVDuMjDZ",
  "key15": "8FGqpT3ah4mRGekq9mBMWG9sL4nWbxXADUK3JqX7RQNCak3rqmZgcLafBL7wEgikFcoFyikjkcZAMmDQLFSECMj",
  "key16": "5Fuxj3L9MwP6bWdGHe4ZYxnadQHGQ4yNxpidBWZ5oif4bNsPjjehedJs8DGeRdSNETDu7zK1KMoP989KPoFdT6BT",
  "key17": "5uZjUsErNuWSkTZ9eDLTYWQgPdhDM4hHjkJstvt6U4BtSeb32js6EqFaZN8bEWPXjzRZnjJEJB85rrZPPqsNnQhB",
  "key18": "5SFdK7KQ3mmgvT8Mmh1B9fCHF4aBZLmxggXzpMP8xg5o39sNdYBk87EaVFNManieQQ3nL5CNFu9nYPpDgvxa6BLq",
  "key19": "25FsRG2fzDcYmGdQE8KtjxFhzkYnyZkb97wFPM3nazSFYJh7E9B7DYf6k9XRX783jXnepyFPdYJfaRGhhGZMwre2",
  "key20": "L5AGG2ibGRyUgEZ12ANHibSkWrXLcJgL7KbB3yX9FfFuKKAr6gSeYoiAq6WbizmKE1nMUdA8VmpvUhn8hZ8nm1K",
  "key21": "28snvdyigwr4G541Z9MurtmzwYK2anxJFwcz41UZQqyfawQyFZZoQZs3CUSof53duan67tps5w9nK9qU1G5nUHxE",
  "key22": "5raCat1vL5NbcSWoyKpw4KQpsvaKDkDM3ZrzvuXx7uztW7bGJmiUwiTfVtw3T6H9a6VvCq3mNpR22LrQcDXKYXyD",
  "key23": "5LRWeHQ88YPyTnbTD6okZ8S5fw2up6d1EAcBM2cu7AVTdgdjePr5TNxy3cBQqxLqFd7bhT48xpHjcb7p7niVeefd",
  "key24": "3VtWfV3d81Qcub131oQkNn7VreCWkfDx6PNS3iryLzfDBqEsHFpbjAqsm5fXV5Z9nCSuD2nLc5gCiQLU4s1YRa1g",
  "key25": "24fgiHZFm4FbqDWu6FJ3cv7e1nfi8ca5D3y2mEvPJ8HoH4w5y8X1y1dGU7Kx4wJsoQoJ9NgAdA1AdfmJAvSALo4D",
  "key26": "58sWKm8xTM7qizG1sfkMzk4VvWC6EHJ587nGAkbUEnyvhRLeqUYcs1ejsPKmn3bESoow92Tes5huyiDRXqLem1hS",
  "key27": "vbNNfmKjq5awbqqZ4SETL6pB25miJe3Q9BbYx5zFf29mxUVxDLRa6esS1d7kXfNHDExVeUg8Qop5xoBaGtKsED1"
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
