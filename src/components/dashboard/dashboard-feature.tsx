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
    "3joGtCU4eUY4YbSM2RvNSAJWYnbNeNb3NhtkuWZshQRFiPHy1ptwaF5Hu2x5PEpjEwdgj55FMGregeYJpt5rRDTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZF1SQD8k75aqCSMvwgj3HVmwZeebh5RUzZRZ3EyAcCG5vaEZmpXhqR53HYtnxneVDAEdk3uSz3wgvbJmPZ3RjZh",
  "key1": "4i3cVb2WvVjreSzrfrStiiHU8Jx81jSi1g5kLdiAuajWku8WHfhNhEgXCoNFXZ1vxdJc4yut6nRQRgaLJqR4dmUs",
  "key2": "4knRo5SAVu9ynYt7tAkUxpmMkHbLHCFbHiDftEpkjYX9pCYKSLFT7EgZW5ieX9vu41QBqRQYGHxfjUxpncoS8muU",
  "key3": "QshXQX72vcSa6M5NvoeQ8dHTLP2P3S1XNTdi3XorGzNfopWnm8nPggUfpeVfhpyvGoTR4K5CU9zEbV3D2LkmMqz",
  "key4": "hZj8dpGmCAs3vPWK8QYmkw2XYn1gnZtSwKurTT6gVDytJk378ngGcVrbQt6hQGgrs3XcWHcZdrgS1RHTms5jYiQ",
  "key5": "2YgYiuNwnFvkvmdtedfCjQJyZp32F8i7Jmr9WvmjhRJSUqtmeba7vYRwsrdnUatFjk4cAB369xzvZBbv5porJuNg",
  "key6": "3u1HrMkkvD2HjZexxstiVgsFRVA96g5SXGPJKG1QavoJrJSgUMSuSrkEWPVqUW9DCnFkxN7KVAU3vftjqCWxZfrd",
  "key7": "5gnC6sE56QeHNYpFEUcNkw2FF6NWzLLDNbVEpuiNHfn4xefS5B3MpjsSKtf9YzdFZGTobro9ndFfP9FiLXPK4cFX",
  "key8": "9pjGCcY84sQpzCiyZPjTuTiSuJuNjMMb2qzP2F5zi7ruSdtNEXnXdg91TJq7JNmdDV6dXLGmHBovy5BCmqKq4LY",
  "key9": "2q4BshpCfMAnwsMkWX6Bo685bgNh4AQyqYMrf33oPhAQwpWRYf1JyoeckzMntHiwm1p9nyAae8xWxa63PW89U8EP",
  "key10": "5iVkp4ej9VCArw8Qt1CWdHh73yNMbcJpoXgCiS4XXtK31KrvXLdSexBqeh5kFbTbEzwqPPwU1JW7BjWtVYL6Emik",
  "key11": "3YaQzaKvxexViHugMirBBVb59uEJFKjiLFetTLwiLvnaaAbz2uRzmzGnfNna5PoZULwiis9tREvhkxtcdZkiLwbN",
  "key12": "7EidvYKb4S73z7fuRCn3nSrBtd2jx88vtuRQwrqsjaaY5qtcBPoBhqmnFC2re5NT4zuLE9Bqan7GYNx8nxZZiBQ",
  "key13": "2Kt7iMCBf6PwbigKANkBMRx2ycp3KfELFVP5uB1D15tqibMAkmjcwm4rSrgMck8oWkeiAezRLtrs2Wph36oKgSEx",
  "key14": "zAXy5cUHec9XC8iJipRSYZWVi2P3DscyXs6Sdp8ps3cVJTVsdNGom4XaN6WcjvbRGPXNKqF28AjSX4ncKebzGhh",
  "key15": "koirTXoUwhuuxDrB27fYpDY3wtrAxcqMKZtpTo4qYMAnF7E7FQxPAsogsVbdNhHtAwdfivSxQ517rAwJVDonoeo",
  "key16": "VFpxWZX4ZRo7ZXAHQdoARDUNVpcB9PmBqtSjcJ8vu4HPb6SxUZe5zody6GtMUpugYCW6yNN4S7ynpn3sS61S375",
  "key17": "5Mbri4xfwheiMF8hDmFrUFUT7NnBbGxYLEC1swzAZn1Afz9pXbJHRprNDiDmeWth5WiAzKvRDVRUVs45JQQpqQ2R",
  "key18": "4ABaHyRjEgxqZ87hFo9ATrcGXTt6YNaRxiK79YZZ87gnPAAtgNtHNBuzrMQYXD4WgQcX86b9hXT3YYx98SaSka2M",
  "key19": "43ofUXeaBFeh7R2RU9jXtXwD4woExHzaeQXxv3Svoz8AJPXhwzigERhPZ9BWohb52KryuKSWKuuKTWbCYxjUHB3k",
  "key20": "4AYf98YDnoKB6edCj2ZiRYbNTocimxkaDr7dVn2aiiPZqpMiabvgxfT1nm86E9CsHtF43pVLt1JL5UbphZJk3tk5",
  "key21": "2MeneKCLkKWR7XZs9wH5c3AJeqSWfbrXHKoyfHnz9rw1PMwjqTbHSbhiqFRZcxLc2sKFsmyNkSJvZPaU4168c7kf",
  "key22": "pQF8wU7kdQa3BMpFww9kU1etLMDhjTb6rv9WbMdsfMgW4nsRHSPmNpBYQcVeMpZgbEe929yTGqzVrRQ53tmFG3m",
  "key23": "4Rni637NaHCqrQ3AmLJodGn9TXQwSajEMYEMV7SA6cKFB4D3nsxD1Kp38ttsqSpbyo44ujjxSN3rdndmvAfjcLEn",
  "key24": "4QgxqauWX8XbHR2xoKy5Q9L6fwfbGxVs6wHK6ws1Q7opYDCyXz17hXNuTt3hCMMhghNFHRJ9QLyFMVoCAqTM5SEq",
  "key25": "4oAhyDY24MSQavknvBcaCSgDJq9RfUSncPkZKPWLDxPciTJjzq5W9xt44ZjWoAbbBXfp69yB7NKn2HdmKeh2MKsG",
  "key26": "5x3TC197UpJpSK166nD4virWnydou7AvFanUvedLkhxVCzRPA39aq9zXEsDXweWwi5WQXDiujEEj4Q3jjnCFZitQ",
  "key27": "2nmjJRmJFtNrQBSAPudoeXq6HSh9P7UJwxh2JdgHY74QMhpkpYKRMoxeocK2zaW7ykQQ2NfuaVdibeovY3Qa6NY8",
  "key28": "SY4UgDyuoUSBYc6EdLTqr1EHeM6G8AiLdQZpk8irm4Jgi2msbnFV1qo5a2MutaXuigtaLHuQiqetz1Sfw4jDMsq",
  "key29": "2Eif2DMyTVH93o7C5PZChbkipEujs6Um1CuB4KS6GopoMvgPN6tDbDMaDsspKQWzx5GaJcwm8X1cyUUuhUeL5Sg3"
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
