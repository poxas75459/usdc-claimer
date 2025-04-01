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
    "2LWQbqcDSjC6snBaGRcTw3M1S7NanBiqJ8bu5q9WrHTR97WVjac5U8ayVVHvorrv9LrjrXYH5XDdYSt7ntZFVaTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Cz7P7ea6hWDKSUpyQiGEHhZp5fMsfaMx3V455wAXEBU2S3h4iyCQpcGqTgcw6YCHWHsrCp2GtTXZ7xCF4DC6d9",
  "key1": "43ciaDv4GcsHAsnnLu71TeSmeQXA2CSfpPNP5ZAdoZSgjk7doGhsSetgjznF86fAouy8TbhNPMo5KH4Q5bMYtvcz",
  "key2": "48pgKkVksxKcYMS1rRpc2uJ7ExsqVoLyLrxYpceUGmG7WDi16VwdKvVDo9sS8UAWRrrPxF2xyu4ScxNxNfnc58qo",
  "key3": "58pbHVhhHk19tnWTa3MJfdA6hxbHCrEvmaBcWuzKiTx8hQhXenYZtgS1Mc3rr3eCj7cjqp4DX9wb7jPfKGvR6AYn",
  "key4": "4xZxzmPXRfuWEEgqCjgbexAX44gbtTujV2HeVRX6xd74WzdCQW5Sg58FdHRYD4U2VsfHmjgggqPuFuC19UHy3UW2",
  "key5": "TrTz6zzKuT16bTbfDVdB9dDGWQMwabSWWL4xQDDMsjSeavYM9S1kuxiU9shq3QekoYv7x1G7vfS5aczrpJnXD9Q",
  "key6": "5GjywXYTkGTESVbQ6WwX4Tr44xgJpPHAAtSTsABEUGEk2v68e5xSBRXscgUe6pSDYZnGi782NwCD2sNKTKRRhpwX",
  "key7": "2m1gzwzpAUjikJDgJAUGHaCsfpR3s5vf6cZyki5f1gJvicWyZbH1T2PFLG4zN5wYns5arGaBYGoWEC84aNzF5Fnv",
  "key8": "3zVGPaQd5C2vemqfrzjCQENze7okESbhbNw6QGUkCKYfTNoDiYDVgZTiJ95eo8L1zEeCFjNrVT61qMSHhiCggXbK",
  "key9": "3KMGmqxJzLpEQr47Vte4XyXFZSnrhd2m9ZzvQH3aWp7hrhY7i5NtbJFHrG1QoxgjywyMzk5QDYGK4VZuifmHQYGT",
  "key10": "2HUxGeedCUWAj5UNfZNixz1yh7GQa9BXzDVY9CmVS83tJRX4GuxtCVCbwxE6QJcxanmc7rk8bAfS3UxCL1Btm7C4",
  "key11": "egpicaTd1HhdZ2XkCPVPDEVw6xMd8M53GPWg8cS66jqH4hnqE8xeKttkzjDDgqjNofx5sr9MVe8WJEsatcVu6rH",
  "key12": "YbejasuX2b1Rp7T5nhfFWY9UxWfCrzX7togKUTyr3aGiTSoM12exnTEDEcrdygMuhQUMsPJukoDrckpfH5unHaf",
  "key13": "7Yy4Kphh4jJRBvixfWuY84UcbgsGVfGKxwckc8LUkNTB4CrLVRoyNjMvXqSxqD12HPKLas5MKYEU3vjxFAFGJhG",
  "key14": "5BGATU7UmoMBazYVG7G7eqwqHJ8CArkXhEYbc5FwbXHx1fopHB8igV49w3bL6uHV98bbEn38d3pHhf3YoVX3kF2C",
  "key15": "5eRakt97pTDnRaNapwnAwgF3qKwZhPHsrKrWo2Bsn4oEN3hdjSm4LP5NMBoJYxK1BaeLYVuWJdT2fUuZMjqwDPEw",
  "key16": "4AMq9Wo7LjkWhzqFW4LbSuRrBhh1nN1kuonN3bnf8Q5jxQ5MoeW88rPGB71BB7WH66RVxbBfcBTKQ6nvY99S5KLD",
  "key17": "2wAwWb3U1iaNjY2WMdBGBRAJCXvcCpfMrB629Te6GxQkaXFcJwJ7a2EExhyAFHCTqPbHNZpGSJRMUSJ1JCrWvi9K",
  "key18": "YTMPKrkxU8sjKgucxhSBkg6zoH4vWG8H6p3aMmaL9puJqkBdoBLa5VJL4qUxZQGjnQeJXyHdFxwCmy6eQbJNFRP",
  "key19": "2TKpmsnUUgUnpQr7NMsKZf3tezsVviwFTyFeeK51Y59BtFCA9YGTGGMEWs7CRjKwTudMXNPFt1CZpdKvmQGT4aD1",
  "key20": "ZEonozpLaL2b4jVkhyEw4wRx5SN9UNPTwZiB7CrRUZhtcuo9925tcbpdBNVY82EJ9zJVGMkmndByBAWvCzuZ8tP",
  "key21": "5BfAUKfwRbbqNGbRsYgJh5Rgr3rw7n14QWdQr5DAyp9CiQ1jbqby8SPa2cdRYgpmasVMuwp7BXYkRM3bvkMB1sKx",
  "key22": "4tEYwVA4D4CxEYqtaZUi6YfzMWf3A1yKU8nSVietBJN6JkHRq5NXjncJJuofSpj5pWLjteUuH8n4pnDyQyeSeeqX",
  "key23": "2jNxtjKD1yxwx3jQMWVSEcRNgF2Jhpp6KHLDhoGVb1b3fuTxhf6andK3AHs2gM9rmCv3Ag4niRs1KsRKEqeBRUCS",
  "key24": "3wqNMMNFj7H4zPQZu3zj3NWBM3oQZxDrGAtgPQmrQBL9hiDZ9aBhJepxzS5NdZ611i4HatEam18mepgzEy9Hc3fj",
  "key25": "3GxAncuiYQcdUtQV9K4n1xyvjQ8Cg3bwwgUZb6ps6HGVCcDYSXmckXUdEyuCxT928VmsDAyk3AGUKN5J9jxqAh5p",
  "key26": "3dxTDdFfRVQHjd3wHZjxy1zb1DsuRM282VTv2nB5tJvvePKxp7YcT2rJcb7sVmVPWTyYppPn87oFsKyLWnp2Xggg",
  "key27": "ThoT5KhZM3wpgy9eUF8wWyLEZFRcAxnQhmTtkatWwMJT3gorx5ESDPuHuuEmMXJUm6xYKc1uQSqemRkh2kUyacc",
  "key28": "665uULHmgLZptUdRNR9Tix9HK9zDNVX3WeNMXnRnTdeBecSh66iWQGx2HFZkW5Y9vcHDTMfaEAua6Lu7LxD5ifBF",
  "key29": "4TqPepdsXrk6cPMG5MNJnD9pbGMCyAQDxQT47hGeX2TUouTTScxD9hKpVN6Bgu3x6a5LDpaTU69X1UsdznZjK72B",
  "key30": "5WNK7E4CrdJzv656ehDtqGWPwPRvxYvBppdwbwMkLdywC79AedVHvofUb2MRjpuK9oNjBzBwYkXXjUKPkMkM23Wc",
  "key31": "2W68mAyA2MkyH8DCXRKFhytMFCsxTY7J622rdodyqinXce1Cp7HxJdvxHp8Qc6oZisyUto9zxHWUVXrqgcvb2etB"
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
