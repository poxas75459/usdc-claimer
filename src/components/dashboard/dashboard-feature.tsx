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
    "653GiB9revECbXBZqvznrtk7btGtX86DE2y1BCEtrud7DDace8at27oEDb1Ew4TBnZ54v224PuaD3ndkbQESG7CX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uAvwXgy72wdZCp4UoUFQU4U1bnLcceXuaZJ1cxJk2KNDmyYJ1gJdgzo3qqvi6zZamHiU5PuAyfNsNCgzZYbURH7",
  "key1": "CPJXUGDHr5nhEQr9W1ExFReqCeBmyHr5angbwBmimZ3H4R3fjgHhU85UtYUK8Sa1GDbUhVvLa7C718waWMME6BQ",
  "key2": "3gHFedPwDDSKHDTRz74eTfEDuSDyxxFvdPrbfh7X19AZBVVfQKSEb8vWi6E4bsjcFrk36Ty6SSsNhLeWkGPcLCk9",
  "key3": "5TXbgujXjj4A4kytLDv5uiTbYHN6rXQrH9n1bSaLZFhU5at4BkFSGELKz5ToAxHeqWn8kUjRDtr8Hzu6XRjFnL1U",
  "key4": "4iasAZHuPJTbhFbZ9vmaaQts6LnFjhNBzCuoNgUncsBvSPxhL8SLTSg8nbSS8Yx2cwpiL9tPiJuJkmtTvkNmQJee",
  "key5": "2QB3MbLGFCD9Y2U65DNJK13LarAgdsE7CyvrQtsrjVoCFbzAdzgfj9S85BymfqqyJMgLUtZ6c9w4Frh2BiEEu7mR",
  "key6": "3hhWD2eP3uMJPhQLvVzwJScuEnC3biXwNSKgxu1dKHNmYaXzCr3E3Cq4obBH5DMkfKqn3cHhAqGtg99eBd7g6fM2",
  "key7": "4JdqmYaCBjHe74m8KiRveb6ihboQPHadcrBwZdnMX7oVxy5nnHdFWRRtyZgACTza9uedSL7jT7cFD1kDz2zJfKma",
  "key8": "2GcjJqN9NteScBTEKCvy6fVE15vnouRHC21nC8RiENPXfeaz5UEGfjvXZyjnkf7cswE9WWcHHynkbBLeFCqwGRHC",
  "key9": "2Ag1ahCzk36c2GtBPBPuK522Tf7Q6Cexm3RVgyeVNWvKURBQgYF4NevKi4RJauCu3mXHub7mxxy7h8hNsEVFpNCz",
  "key10": "CBnfmiKtRXNDJdDfYUjDDaMoTmvf8HoFxXNYK6c6ZgyhuRgFGxEqXERSxqNrUGTcwWWd8hRD72tUijHfjPM9eXY",
  "key11": "5eQjVmoMaM2f2MyGzyqkP652WskEUADg3AipJeBd2kGukbuBXwQGHYfK8adS9M44qyYAvooxuzQEbCsn7BmrbQRD",
  "key12": "2hfsc1zSdwtYfCyjP3RSEDfipJdCKTykjNAGqYHwRfG9BMnwpFkdGfDKhCit1sB1jARCBcwxuPn2RUk7wvdPfKNk",
  "key13": "5Xwau7eL4EvEKdjFc4kscDVmAFY4vDyJdsbR2C4cdFWycPYXnxS9PbH9B2fW1nZiUcZhzMWBxEaeCkX47A6SXbaq",
  "key14": "2nUp3Z4gBRiY1jB8ekBxLaAT7k1ZH5ufm4CC4ACPYesZHUEJJauzhfypv1s6tibF3GBsLt46c66d8r7zKf5jHkvG",
  "key15": "2C8PEGFR6Lk7p4fvZeb7duLP5FPA7YmniMS9PmuCp4qowxswKEyDQ41DHh7CfTWTMirn6jxKny8RXcWBoqZcN6KD",
  "key16": "2Sj7b9Dj5LhhymMNjJJ3EDa8gFV2uBTnDqGa269Hf4aeMzxvwerMLsTks16p8kXe9QZFAvX64heVS5YFPFJmnbZV",
  "key17": "44YcpzFa4yZqH8bwA6N8Nm3JX9QG1v7QYdaugRpLU2on2xhU1AitqMw3nxwZqS6jvZZQuNkQRnTPhkz31pvs26BA",
  "key18": "58Z7X2KncZpjYrV4PDJphZK7PxwwMpzgya1roriMAmpC41nHzWh1K8z2B22fR2pUjfpyd1xD8e6XAZ2fm4D629EW",
  "key19": "2kS3fyUPsJZBEbyBKuUSXyB8p8HWaV2ZNG1GFReaZ4ZjyA4rZzzhgqUcaKUfkiTzx87YiVuQvXeVdKLwKaMigkaS",
  "key20": "TZsDKMW6ugJa97Uv4sbkoe4BPBzBP61sAH3knx2Dq5NABn4VTdKTH8GpXHxABf9gMx3RWKQcGBhLTdtDC1igPs6",
  "key21": "2iXsjHMrhAhsdYQJak1V6tzieCdHgqtqKahyNt9PmmmhvTQUzQ1aBqj6ionMQQQFaEPe4zeCnKuQQabVcr3NNNWX",
  "key22": "3G66hy9x5MiR2uXDupip38pgGpLfaeG4o9zV33hwC2sMLvNTVCnmodpmEnfSuBA5bdU6vFVnMQTgLwhUan7qQgZY",
  "key23": "3gjW6Y2eFSMSAdgH1Zf5sEpQu1P3oxfoWviDKtpuhHPSQezTVPt5epnTpThtqvQjkCBpCqaSzEtkKt1khURAWQmX",
  "key24": "4UwgyL8SS3sK7dPEkLmq8XZ8yGLk3E4iAgqbcm3hNd1MpRYF38ghzqP7SiLuZkZUzMP8UWFkKkcDng5rFGSCr3Q3",
  "key25": "65zjpBYv5H4hCHrUaGQykRjBYzEhYRBEzfxqrYGY74iZNBrfFceUWAmdEk6f67ePLnjMZ8TQri1mNi2v33V7RYLR",
  "key26": "3PaoczNFDKmsPD6rSQ1Kfi8CSDxWiQBygR1jMZmmoYh46uQK959p1YbfuLrqvu9FL2DBeJmcaCYdSeppZEHMU79e",
  "key27": "1XrhF2FHxjJhuAmEbwVgAsiQwWQSk4w2dCaCjryTv9jEaApaPNDdQcoAuP9doMh9r8bm2Lc16eSRZMngG1Rx2sT",
  "key28": "3hRipxwEkUYEQoW5F79CsXoVZYx3X6Y5VASb5NmQRQdPxvEtbFrmKAAzmqEquFJQQMxCkaXgThRBYdzo2P966Ct9",
  "key29": "4trRVWqN1HAwxYpD5VHQYR4hBnf2fvEaQbQKAnNsGewHzNs3c9x6VE2BbCSYcpAuxy7dXrkUzRUoHwvU1yCCsCem",
  "key30": "5fVRc3hsnSsQRKz4nDxnTgR5mTvcMdBSMCpG7WpvtE6TEEKL8zudHEXuKyh2Fy4C3YN6h5dCKyKBQMPbBUNbPmDj",
  "key31": "3F1SrDBVpjjLX5sEJAtZLm7Lp1acdVnQXSA1yG82mXfjY4fq6DTs9ScKAWEyFKKB7eNKkRCDCr5aVcQQdcyskKbd",
  "key32": "4KB6nbTNpbuNaDk5mvnz9GeVTdkubQDZFPGKTjuE8TsF5d3ha9rzfnyVcBJsWi33z78zktGcsj4Gg4DdvkjSVCnM",
  "key33": "2E3UD4BUYPiEz7XEnW7sAmt8picbeXRsLFxVFra1nttfChK5rCVkgndwZBa8cBwBd7QN5JHaDGBThXe1MNzTCrg",
  "key34": "2C8Ud3yKq6eZgDqQHLHNfbxj1JH3tiUqpcDH3BnnZaCC13L7DPeiKFsLTpNqtYXHtZP4Mo8Nt9c61XYLEkdnpMqe",
  "key35": "3rGUk81TZhjnDjGKD5uc1EG6tztzt4WtVMNxepwCvu4XtyE1hB46o5Sw77D3fPJ1bnJoe9CaHqj32Hp472bxVLXq",
  "key36": "3KCwFVmRqqGa1m89mtqmL4GBmRXLJPgPz49Fo6MhD7et38P68QgJwKHayaMrJin2RV2VGQABPfhRZSBdqweS2gRu",
  "key37": "Ej2PqCVmhk5cbSjdUDB1JQNWGRcgCCXwu5TdXKrkyJAYEu68Tjysu3w781Rym2xxnBN6y7VSaqnQKseQBVTS96h",
  "key38": "5M3qqRhTG23UrWJWZEwiX4TGzCs8uu4jJqiAcKiNHpr6CDUUSoPJFyRqgERuPvPNNTJbz9k4U7Cun9HrCwRKWFQJ"
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
