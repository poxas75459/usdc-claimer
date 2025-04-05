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
    "39L3gddDMFZ6VHivXYxMCfYnxAupfcaai4Loq9Ha6S5WfNTNW87fGDc7NhFtEkGtxybwwTXJTf8Zc9smQPGqk1f2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LWr8m1eum94yRuEqHnNNu8RerL3MiRoYXhq114ySMFca8JPJPkBm6Sv2xgdcYjzAU9wubA1H1SjYFXftHpHZ5Ae",
  "key1": "4n4fRFe4ygWnEeuGcuaw9RvvgRYybnD6jaWJg5buJFwLJHsAgL6fwN2nkjfcvgvoxtLiqpCqBnZ9nJ5y3PpNmZxt",
  "key2": "3xgSLFk3VDcSqveaWuCPLv3M5CD1WYw3XWTtB2yKEmokimaYkyVxmDu24yjww3RRCKNPSPg7orBJnkroYLwW8S8e",
  "key3": "3wFonETqawyHF92n93hstp6SiUAmmZFDxLffjoo3wqJ5NtZhAreGaJ8mfHdi2VCxwFpxyJymGUNXfod8PiQkQLTr",
  "key4": "2jYLt3RRMFjVCVY6bZSYCTpbWSzfJmP5WRt1tXJYjpmFJE8nLB76ochZoqvPfZkGGSsHm5h3NsrQ2wUDtHBCd3x3",
  "key5": "esFzX3MPmwZ3FuCbfbnQGuMufFUBXWLvRN2MYoqu8HPEV1ZXrhzjeeuGnEaBPXptEQ6ZsPJarxZeDV67EcV9XtY",
  "key6": "5HrWBHprmT9wh1tHsfLsRqoRUFBZdAGMqqyW637hNmRiqQsZsFvD83sny9iiRfopfQPW9L9QgYqt6QjoQKxcs6RQ",
  "key7": "4TqrAffuVmxYaUpTKYe5jjjFh2nACTFMRUnvYDDFtBX3W4SpWrvrkj4bubMwnvX89S5gWuiaw9nAcGPWYAxZdem4",
  "key8": "3QPioqfaww6zeTNjpzVHhFuYG9ZnuVqBL7VeDg4ELCmXXQ2fLhhCARWirpXvWoUbzzNuGt9Wx9hbhNrRfc47npuM",
  "key9": "63evHWrvs2VZsVv4SDTMteYWCGV1QYj5Dy6d1xWF6KhxgZJ5xAufA9sGSa7uagk2B3pvWkCfZYdJRsygQjhmcFHp",
  "key10": "5u7fGVAetaxg2cVU1xBYEGDBTJ7nngsP4Ai5RDsUvYJoPU3DD85WjHedSAggFrGbx6S2CkRbCDXzUyBnQpQr5yoA",
  "key11": "2qVbSDYGQU5g8xKyryEEoZArsFUo2T8ca7tCQynMBtkUbXmV2XemW4JGs6kzrvMsesPv4jSS3q29xZ5q1CRM8aLN",
  "key12": "2fCeVD5HBWMjHRGbrWi4n9dXyB9han4GWU19Kd7h5k6S8aiLCoCWFRUWmJ1rRFevAWbUko15aYz7HABH1BgGBdyv",
  "key13": "3FXhNQt6zdPa8Qd3ZRzNaUTw1wgXCUK8ENd8Kda8J3LN5xhj1gBEMMUEMiMpos5EZnqgjsELZf9VKoJozSmcR24x",
  "key14": "2L3twCsAG5HtVWqzwVLQKmgZsNXo8HobGTHJhnAPsc3nNT9qBqbE6oXwEgQUULGiEZG98iAkXCDSch1KNWPbU2FE",
  "key15": "5AGjBCpLtVQ4Ba9GSs3vWwfiq3tJ9s6qQN2te1EhpXhWhjq4ELSkgBco46rsYsiKwLB3KPx3roDccw9LSqEa735H",
  "key16": "3em6s71PmDr4acT1DnZcVDRVPNdHRKt4tpTPbDZf7T28z9XY7hiA6VmC1HbhYXS7w5ikS7FHsqCvQC6N9GBNEXZi",
  "key17": "4auJjQ5zNuT8JddFcsYcp7UB3jJSeLepLsxyyqzN2u3xDSJfd4Pnoi8n4wgr81eAiR3UYD7vBH5v66DgnpjQsPFR",
  "key18": "266a8WQLRE72Ez6KBdXbrrw5zsNBJMpmCtzT1RXRPsnyf2JhwGkuyJnJCTZZBAG2KfJhXGfkzTmmTKymrgDtvrS4",
  "key19": "5zauJT18ouSH3cPPTsxcHEnaY9AiiCkV2xbrAN4JjnJ6UAiVdJ7o9kKBej8a9ZfbUGcxdUJLQTyyBDPZnvJVZ6GT",
  "key20": "j5N9ZFF3x3YWFyCKFBozzjEQFkTrcn95uwEDYuT4W9MTvkfPqSet1TxrXmc7u9L8MdGmCDPqMg1qsU79GR6q4i4",
  "key21": "443wQymsZtETGCScrjPBchENtsDTx8D36vbTWjNgabWfgrJP5BYyTfnsZX4oZ2UCujzcpDfcVToTEfHYG22Yoqtk",
  "key22": "2LdTiVWmje15MoqiQeuhi7cJwU9VYq8tGjDUVuDyimD6YBGmbE8wmwLhBgdpEhu9QhjNBgJFoBdNFSwBF1BX9HVN",
  "key23": "2k93YwcuhD1f3gxJc3cVrPFB3a3hch4bnZrEZfFj6coEPvfSKLBoQFhTs7Txxy3komAwRLxm42ihqnunkH8J58HV",
  "key24": "nwu4L2L9n3AzMKyie5nB191ihayM79KxdhSLWJBJd6LNZzeqLWK8XYFHEcP56m3Zte25vrq85a3JuLSRiTC7z9w",
  "key25": "32ynaZKbgE2trJnqCSqVFnujWjNVwGtvTHR1Nd69McgmtaBXo1n7ACgEE3uWjyHTbyL8qvss5WdenDti5VBNfK5s",
  "key26": "2FZn2mvKEveGyS68ErxpZNmEBF8BSiWa3satKLGAp3ABCPcVEWSR3qeFSq7kLKbNGjK3teaVoeDFUD57QVZ7ANyr",
  "key27": "2cgNcq8uT4BbfvocL9h87dQ7hYE4dK8eARrxgLmjgjZNuExhD7xH2zGo24mxZ9xX3upXGDVTGnYFH6px9CRmZjpD",
  "key28": "ABkkrfJrkf2WC635EEqyrb9frd6n4VP1rtVSEgto9bPMB2NZfjm6BHFepWxgQRPsQ2X2ZaxGM7QvC5LDgarXr4E",
  "key29": "5QNwyG4wYMD6o8onu6khgLfeG2fg1pm8n5mQxDAG17yo146eXELnVjAFA6BiHEWGYEUrnmL57ixeT7FU5YAPvanc",
  "key30": "4oV4iUg2JY5t8rEHsKwsqVmMdAGKA9p9dNM7sX1kBK6SmohbHTRnXdVfdoPoQCfA1QyksXH3XmfLDZ7ZgyHgCnJn",
  "key31": "36HwXkgfTJ3r2ZGHsife7V2wZLFL8ah7mLLG7o7pXnHsUr39F3YWknbERSB54D9RbgR5DMmmYhvA6r3DG6ModNFD",
  "key32": "cxjLtA3TYKQHGBsiGH5R6RVNbxuWs57FR3Av5DcvUecnFAnr8u9ycN5vfYkNeSqg1AqJLxDxqAwze59p8FRHheu",
  "key33": "3AcZQmvpBKvig4MTb73TXCMRkCX7Po6jzCcBKSpvyTSVoXcUboTwiFCNT1nL8M8Jf6wxtyYKashhMDQ8xrn5JZTm",
  "key34": "4mEAUgvegY2eQU9Sid75PWZ1oGMyhgp4SemViVheG5pgkff6wiAq7NN1TvnjpGjs56uf2sKb1kST6HYUn9EEik4M",
  "key35": "3da8BKaE2vXEhjcFQMdzypSpQtrQyJais7jycWDYtTjvXJrVk54fFfVKsURya7AWSAqpviPaFXyzMK8PZXrmmywS",
  "key36": "cd1zKJmvmtbrniGQdYp2biQNwSMdJJW8xYKAa5NEZC7Fg6Y6PfTfroM3xATxEAGx7aSRMpaMuPd3GdJ1VJe2Lem",
  "key37": "3aCK61jPPPnFQtYMMiuZ5yXwqu1YBE5DDHT9kDaxMqjGrLpJ2cYan4LBNe8vXzCDKewRRv4Wbrur3fiSkXpXGjcX",
  "key38": "3kB4XC4KJrpMB167xLqeFxUVHV9w4GC3nRwkEFSDAvVQxq8UiRzfQcGXxwJydAgUJXwSXF4pEpFSFN6sVkkBHMYm",
  "key39": "ePLVGdmCFW2J3WiZrNgs4v3zvLKq5Mc5iHas1gypB5zx3ZVzJAaGZsYCipUfwk1uNbJsDGQntsqH9Zvn15nWK4L",
  "key40": "4tRsupLp9Pf7EVpfLnc4jVoq6X8U7W4sDWm3Q4KENGAkWoRMC7MRUkVCxsA57fUVi45z8Hkv9jcVGVmSmsRdwAYD",
  "key41": "2t1MscJLwoaw9xXfbfn2y9whQjxdCNfoqTE3tBDgTjrtUrM46VffwjA8Rt8nLb4dc9XKzqtDhYYw8QfNbEMc3Pd7",
  "key42": "3PJLcNf7wV3DxzdkdTEYeDkNx2Yht2heHbL145bM1KDtnPstJ781DRsysDyJm6EwMd5KhbifaLFecB5ovC74SVSF",
  "key43": "2tTiL2neT2TqEhMFzsopiFnm3onhqjGg3CEGnoMhHcNhSU34cn1XL68MB2k5yJrc3FVnA976YcPBmbViEh6q6GiV"
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
