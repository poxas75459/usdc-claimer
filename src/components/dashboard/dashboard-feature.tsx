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
    "2R2srBFFHBebGbcTb18nQehaE8LDpYKaG5beQf5rFACAmF2vPxmpYvkBU7DZvz8ufJ7HXmgBznFnBqPMvuCX8mdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLfswTdKRMpY7kseCsrYdFYBruBobp4G58i113REJ5B3fo3ptgmyT96xEAST6kGCGt5ZrieMQJdC21CLmJUz6gR",
  "key1": "5P1JKDowPmkteBMCFxCsssX1SYjQ2Mv3jGCwg7FxjxxAW6BhZW3TtL6XbB7Tp6UXs7Jotv6pMoUG9oGTJQGE4i5R",
  "key2": "6rLogEcBCK5n5Ky7UwjhLpddNLotuGDZpcYCbmsvADViqypwS3TfFCXH3CUhhvkMHEbdFbQbgJVR5We8E6MSgUj",
  "key3": "4v7Wyuy9T8VwG4rtzgVHzDTynh1Q14nr7d5eSWVuYk2aDRpnkYWh4yRGBqZEbNkYwkMC5fujWwYmhJec7RvAQnh9",
  "key4": "5o6wPDioWeqcHx3KDzEirSpY2cMKj99FQbuhxmvZkEYpvqdB8Zo6fuXx9DaoU9J2nNsvFyurKZGkE7xZZKyKUbjb",
  "key5": "53VfabDoWRrEUd4mes4HrTdAfHbka4j6teJEsDLTU1nQ7AeXN8h2AicuEExj77dQLDKrc3Axb1q4GBoCwQkTVEiQ",
  "key6": "2yzZS3wuDzWXY5Nw6co1TudPyqvEKgMpDmsEkcH4zqGMcnR9iBHfy14jE8URbwkJRUDUGLF2qVnpE913dcPb8hN9",
  "key7": "2NNCsDMARKMcgaM3Qm4gfdMMiP4MrupTpB6RLu4KHMMoJeG2vNwyJjkszZftrGrh1CMEb4Abp9C9nKV3ZnkJnW1f",
  "key8": "MDmFSU15ajTuNvx7rN5Dp2CSk1eo9mibEEyqKuinjc2uE3G3MtnUCYjxoi886zFprQjH56ZL7R6BTQu7htiUB6o",
  "key9": "4hYbvUSAxZvPnkyRJCUwzyxPubdgmqgAPiuJVBJhvTj7uzBDSc8VV15bMNUf2HMiKH2XDegcEb9zA6TsLtoYvWZG",
  "key10": "58DFNWZCTySpPjD4DbZMz3tnT1zEM9Qps9rqF8SKzPLJsPWYExbwuEafmRR3JfVQ22iqJv9nqzdyBwxKPrtbrqHE",
  "key11": "2ZzLgLtLx93w5tih7p3oQGJyiK96fQQyRkGjQQZJDXRxnhJAeiCVsbAwGTrsoTJQNeXWxe6gZvYBR8F8HaDw6tyC",
  "key12": "5VjWEkKYSfLeVxQN1KanFbTPmn7HYNpxCc3Vdi4tvMvdNCUo3STCfnzCkjZYo6DREW1u9GKYkaRjda1QJas9kyHZ",
  "key13": "3V9fmnD3ZaUYHD4V5itGy3hYpC9kENHmtQ7mbqbptMSL4WTqd98m1G9jsSmtw5nEH4LnKAnCvEX17Ts3FE7Ryx13",
  "key14": "424pxEMEcrHmkKWL2N95auoiufH1ZixrJAAVfMNxgA7pMkpMNAbnH8T4gAYVpTcf3cfrpDDUsTGuHVHkP4Tbdev4",
  "key15": "4y34KizacKoyTxiBhr6rDHngGeHgneqwn1KuDzZ8HABV3rDQujNctM7FNpfSc3UdWHF25YKzNqnP8Aojb6BVBUog",
  "key16": "5oFCX3cmTfqZ7Jd36o5kAy972Ai4o6xH4crq1JeL9M1CBYJ2aDxeJyJxK8D8XiW3sL5qcAohS4Nbt81a4siJ73p",
  "key17": "5g4RnjoCMqDto6V9om9PBZnALZVKQGC64WF7iUb7rxUXhcZsC2k1UUz5V4VZhKqhF8Tbm9QN8jKZEv5L6ASvEgnZ",
  "key18": "3ZN1Pk2xE2QUXtqAjUxPH8CtodUFacH8wDB1rZ4mWkA8NvGBxa6hEXJuDTJZrdhVNZdsvuaUTvCGFpGdnABAPzP6",
  "key19": "2ZxSV7kJe71i9QHtYYH37Wz5x5B1sBexXfgNSKTBL9BCJM2Rig3kvQK8R3XjKGFEGwZDGRMaGkkQqY6hBLZski21",
  "key20": "6758EJUHWFyo4wYYmS6yt8DLXWpJRjTvnFA7ZuAweTqGG6TTcb99uhLGMfLewitJj3SAi6Vrz27ziyrfHn3BRVRy",
  "key21": "2dKk7MtM36agNuj7ZdCK7eFhhkqu5Xrk7DVP5CXmVXeYc8WaxFMjTXWDUmH1ZW7FjRgDECbdVjyGAo1fZmuMrFqw",
  "key22": "5Bbw5gruX3jK7sbN3ELnpryWAfgpvc27pgjefavv114XArwANyitozY9qPbFgxvTUHfjBdihDoB4f2jsaWP3gt6W",
  "key23": "5ji9MP5w2Wy3MSpxjPKTRU1unySJ7xRLBVJ7VqTX8Jp1bjnGnnWZWQyaPEzUqdiVL9v3efiCSicsCgUoLTKFBwXX",
  "key24": "4J6eFBVGiB61HSJi9MsV6gmDwYUHQYcfoiJrQE2dNyWpqEEZ9oPMQ6NQKd96hcjGUtP3B5VH9B7ZHLaG7u78hN7t",
  "key25": "4xeRhpx98fvusR3evGnN5Tf2Zvb7umfoauE9ZZpZ43fLG2jbEQJKhmD9dHjbbDafNPdRacPcF1BETe7T8F6YCkf1",
  "key26": "3MfPKJYmhfyikV9U1EwuPT3F2uFXwpshsxe2h5TNYFj6FUjEuRxR28YK2gDbNv6fHNDK8JHw6w5hmKdN6V8kgdgg",
  "key27": "3YznDQQKST61STx3qTELsmehEyzUX61HbqW3QnqVMDvxAT9HfQuXqEpBVnmuB8fWDAH3KsikyWbJcMj9Vs5tmWc8",
  "key28": "5mKPmWoSF34qLAEKrZiQzXt9UrCHyHhatfW547cZwHX9Ho4JfdG1cS4avXo76LpBAqHEJULg1UH1rwg1YkcQUz4p",
  "key29": "5KyWAyCTvMUkMydimS7fJEUAoSUK3gjm6m2RKHLGvJSKorpePeZEXoW9fxjQTgv9NCUo28wprxFQULnJV8HaN4uR",
  "key30": "uKTr7j2r11EKP1rTXYEaPyoMJSUbmju7ynN5ZAGPbBfNcgVkhqy27LwNRo524Z336maNWGeN4cVeCDZoStBNyaq",
  "key31": "5tJSB3DUKdphewP3MZR2bz3TWBZAoQHpFmUfnFNEnywLsgRsekeJA8YTpwYYAvcNsb4VQaRbVJ5yjiti75ERzRFA",
  "key32": "3XPpn5NwTAF7N5qctiLzKCX9MWkRGqVPXmnSRrT6Jz3g7zfQmakhFiCFviJ15zHHgY5Gy3p4nGbseMngtKbSzKZA",
  "key33": "3XRsPViqXydEyS1VDg3Ve5fXy3qsMQk9HHtxxi7175poR5GxhKpLsxCmSmwUVEFjZtQDgHoGU7nD64VtUj4QCURj",
  "key34": "72FudaUrAJsBDoygjKtQTHvCMY4rtQ7dw1YHSrjKKmNh46cHxUTUGGi8KfWxRrDfU1eMGv3RH6RLNFQpYHU54xX",
  "key35": "5GWWmVfNng62tLLLwBh3haWydND7B8A2koYwUxJhdnjwdpEVgpK4PQvDx31FBNP6G88ZWVXWMTaenGadmt4z5xpm",
  "key36": "3Vu2dxJMBPZA2pYLZGYZVJBE4fSepiXaoiNHE5ASjW9yZmkpZqXXWx8vVWdyAhUhUbuKCRxBjDQpVbjVDhT644h7",
  "key37": "5L9Maw9yoQNSSx8G938CFhvi6a8h7kNzgr4cAbPRx2avnKWiFVw3MHyGvBCvZ13Q5Mnm4KXEo1biNJvs9rAPuh15",
  "key38": "53TfLhd3dzC15FPf9vatmRoqh8Pvg8rLraatp2e51GZv4vPTHzzsSbUdmvoPFZGdSuHa6bCXTS8rGmSf3j16jxeq",
  "key39": "59jrmTBLGqBzDv9Ks8iMNhqiGVgg5D4pxZbubnsCU2zadFpQYLDUqUSQphzD5m63v6M48bwSmDAGdbfhapL8WkC3",
  "key40": "4thHZjKGmj5t3Bw7tDqL3EuaikCPXu81ioYZT2QN2d5QEbTYu4AZdULubKNeKCmVHdPJ2cAk8kmtS14e5er8VhAz",
  "key41": "2abK5LUSbJjuCMaiwUQE6ugJg8uZcPVN9wHwEQvuPuZ6Yn6zEgbvB3ZNqxmmUKqDUX6xAemGx3MPy3vr3bsEj9Zd",
  "key42": "3ij31W8G6uk6SdNyui477wqfHcXiBU44RRSpdYrHDjwMPBQ177bZ3gKTCnwqvbQuqyzyFfynaTeCngp8VKQqPREu",
  "key43": "61dhi6LTGPwwKHpE8rWtiEoifZYPCQWuwuzigk56m9gcsHQgwwvtyhucvwJS8XJpnQpqgMAZjJcvkgFPSCJjFFNH",
  "key44": "5s8rksyzy7r411ff1fuym4VPAy7fAzhjCue2rFyghgxMysWth1SfXw95eYx3138hwZpX3AuQqf5bQY4QJAStsrSj",
  "key45": "3139SawhqZL7nYGUf4us6P2johL1iAgPvLPHmhMpReUZA2YXdSFKfGrLjtdc5c72uktfuCcqjW6ybdZuYujDv264",
  "key46": "45ctSFV2X4nbV1phtNCszBv3GedFj2wQFji3TVtdPyhp5AGBzeB2ooSBjsdvcHQ9Q1b99Dh5HjjNTzXajWSa1j4b",
  "key47": "2Wa5GaBcWiFJXgEMfy4af1nTvMYqLoVwDLxsU1dTM9vTCexVMJihywWcNqutnXTXHtin8fJKo7srrNdTU95pNZNU",
  "key48": "4ybcJ4QvcwwJxtYmpSHLcBzqNmXX4aMmVC8N7mdRzQoVTZcX1p17bGdQRFLef9gzm4UyPkfzQH6J2Ekf7iapFkqJ",
  "key49": "2JbFDV4N7y6yWTS3VnXduNSkZJQ1q6VcuYcZhbPBu8rssgSVZxxDXWWwwmFJ3s6DRJf2BVEKh9z5dewqWfrtuKzi"
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
