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
    "3bQDgqpoKxqRdcn9xmxAJrNuPpHuC1EsfNPfEZFGazvzFHBTGhrX7gWp4LNSwxVDzm3yBXzV65R9N8BHeyTDmkUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BuL8xS9kr6FDF7GcJEfWopCjceh2CGJJwVa9R9fkRYTLPehPeH7s9dZfmfQGbh59EfJXxhweDtRHV6rh3rMmEym",
  "key1": "3NPe7Zrpr8UK89N185GSQHtZAErXufRYT46hLwje6gCHBrYwhV3Rxs8xMck6nFh45ScWnxPNCDQ34MhQrQ7p24Nx",
  "key2": "FVvqZBGq1auPGKges97TmNNKhH8A1bkwCrUoTJ3J84K5eGRbnU4a7mud8bPMJZTAYQ1e7Bp9gJBkSSuDVw1Txps",
  "key3": "3dMQ5WtEDyjedPCcQM6mjQVZiC1JUd4HowBUL6Nd2BFEPXuTC8gSD8EKBYqGmdMJwFtQhMWXRgCRDKrNXp5MBqFs",
  "key4": "3z2zAwvmh2TjVAK3Hqc7bbtqYQ4ze3ZgT7c97dQRXdxJ4aze1RGRCBTdNtcw7vL5BU9xQE1XmuyRdTGSaEAQibjj",
  "key5": "3rsR3UyTxbGbpfWycY9GkXA9gvQfYBWYYKWLfKS8YQvi4LuP4ZJ4Q2ygVNxd5xkgdD8pwkjo8JLGXCjSS74CP1i2",
  "key6": "66mRqWkgyPYPervfrd1K784rNcSQkUYALAas1Q7GxRio4a5MusKyxGhfs7ivngbFPniihnQDu4ZBjrjQdQptgUrT",
  "key7": "4NSDWd3pa5VHDD44fmaULX7n4aZ8G5p4nryPJ4a9jc1YpJx5DS2panF3zLDT8PsUFsrUowZ7UWdzEk1tsnZ5tN88",
  "key8": "2vehLBGYXRkDpHtsdBVmuQYnFkXP3VPzqJkwFuqMWESDY8NCzdX5JrDVjgDxvh4NaDACg6xUjksJUVqWxzNU4UKt",
  "key9": "41moQguDd4qepwXS8hJF6wQ7MtyiKrf8zkpruVKhBx8woJ43AEx1cmmeAuYdGZV9VDtMHcHnb6eiqD6AE1qRXRNK",
  "key10": "3KSJPF5PUoogtGBiT8iZR73XE759TTMsEAPK3mSssCJxuCT5HmCS1eMVRzuqeWn1Cu6XKr14YtjeK5pGCNHsRGpe",
  "key11": "2uGhGKeajFaP3kkpEc5EDj8ud32Co7R6Ghhs39M3eBkdACe7ogMWcH61gzMDYw7fCJ4x8AYmLq5Fbupo72jU3p2v",
  "key12": "3MjSDME7YvdBzhAfQZpExynqSto2LhrNjhT5BgJwTkbVXZMWsS5CqHido4Ukjws6cn5i4Pr1aA3JdVWPV2baZcse",
  "key13": "5nPZpEzyb5Ngm6qDuGwzVZD2W8fw8mCBTQDrn7bL7iYZYgmaBc4t7q95p1HHdd3aqqQXvQh2XCAW39p5Bvys6UmE",
  "key14": "3nhmzimKiLA2ZZo2BZJd2eeFEntVcduyv6uWR1yAYM8uLKP6ChqPfNRkp9ywHopHkQ99HvqgFJQZyyTGT5vXAScm",
  "key15": "3qQkAtTs5j55nNMubMSDnFiQjaaMdzFaVoyJfNN1FF4qPLpKZyFT5BANb9MQNDUX7oNfivisiotH8vmWRBSWoQsG",
  "key16": "4ZtVdzJMY7JWsq3URkDuQKNwkW6v45K68oiVGnn3WCDyeWfcvd6H9vrq8RVa9yneaf5cD6rp3AhxCVLKLgLSNtFM",
  "key17": "3bRFM1N5qEwNxANHWYtaR5bam1dXkHxd2uB8Cqpcm2ZBaFgjR36zkEkvUqt5BdxDRt1kbJgUweoNBDEmdC8pnpVa",
  "key18": "5ArEzr3BEcvLs2gc6MuTcpfvmnC9sBZnYPP4qUq9C8QqBJLLhj8AhNZX7Tabp2TRocJX3VR7jaJqMLoE1NCydEwU",
  "key19": "183kHiW5RN6qqZkeq24Th8KBFpB49aJeRrPS3BdbYG2VxiH8FkZWXpaB8LnM4J3vBTxJB8QCo1KLHjydjR4vAGp",
  "key20": "5RoKJGZMkTtkEwCQ8zuCeaX38J56hKkJjKts3LLKN6q3QmciEihJTeDcdvtqkGFMG1MPz9QEUHDneMTGEThPrLHc",
  "key21": "2CFa5vAzoEwxsyZUR6LiVV3kuMqBu72EYeS6oVyUFxa9HNQYWaVFBLGUGcbRLVSBM9K82ukUHNAuFpC1zYXGhZRw",
  "key22": "po8gLtVRaziiaN2vE9QWUQem622RsHRAYqwrdzLBe5VU3GWtw5cjoP6irUEkMg4VAjWEWm3tnGNMC6sKtuBWHFG",
  "key23": "3WbQdNDpT3MgAqVcXDsuU4EQJ7UUuPSYCHwGWQ3VBSGsHkamqWUkYs4oerXZBWAGFZShkBbKRnaU2m5mCRc6pZ4H",
  "key24": "5rUpNCotRZpStG1K5YfDgVuFXNrVL4jYy3sHq4MYpWhCE2fzVry9ChEB1D1d19Ap67uQmSn2LLUcEvQcmisF9dAa"
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
