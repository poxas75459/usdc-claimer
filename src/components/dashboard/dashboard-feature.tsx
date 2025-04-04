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
    "4ztpbMZSaNPbov9hTfay7p6fM5Y6hRgR23VYDpZ6aXqbqgQE1Cj4k5hPAkPWTHwE1LB1RYwVAQwoC9hEoTRuqdxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2burnPH6xDJkGgeadWVvi4o18k3YXVN5BsdE3N6gUVmZnxv4LKiRcnhK6idaZbtZ18XgPYmUkf2aDbeJmXwwMw9E",
  "key1": "5oSQ7ZevX5Ms1DPEKxfvhnmftKuqUHEBFAwKDnpmF5Anm46rgomr2v7ov7N8S2mNpydtEy3zAxhPtJfbMsUbiymT",
  "key2": "wQXf5h5sHVehV6kU7yJCxrYnT91rzjgDzKadzMEx9eRQJumJypesn5uBKN32w6XaWKXZoU6raRnDrKYjo9rwWCM",
  "key3": "3Ncmhoz1rWixfRZNcCQ9SP8vNcEy4zXY8zDMHNwtmreSzff5dJodijKbG3YZde4ZRNiRUf16KUqGPzjnL7N8nfwC",
  "key4": "2PucYgUZXk36X2N6V3YJg3bcjBY1BmvDhZeXXNGRdKrZhjAxmv7XvjPkqJTAp8qsCYeSPrkqaCPr9NQ7D25WXnEd",
  "key5": "WXWTw9JvZ6y9bZZSrKCHjGkwr5s8J2myKqi57GcjryRZDhMGz56c4cJio6vnhMPH3jp6iWR3dF5kuKexSsPSHY5",
  "key6": "52U73dcvFK3wJRY7fcJQtWbWLZS2UXX4qrWWwjwWQwixVwVsBEcemWY8LJaRw9auLk5ZMbb5EfNCgqDWWsLabPvT",
  "key7": "41tLL96TZQQwX6BzJSsefQJ11YinAAfEN1RgxqeWQ98dxB8jZQeEQR4G1KhjhvX17RtxGfLxuYWQWkxJCKyHxStm",
  "key8": "5BBvbRDwFtEniuZpVARRKgdxJWgMHheCz5g7sAzVcRgcYGPTYSA4D6ZhDUChMSagXMdxTgXBaRtVQmT8115W3Uur",
  "key9": "2vqvxmgXxTFD9vXjM4wVgdFn2M7H2Gec3PSzwumcNHKd9CNqjfhpTvMDskeTi9Tyh54BgdqQSUwfc7NpXVaebPvx",
  "key10": "4wqELdYtpMpCpPsHNMc9QRHPVJYbrBt1jJ1317dXjduM5ZbXhQYvNTK8B1FRK1fC9xgzbXQRTH6Y6ZGcmYbE4fHx",
  "key11": "3aUo31Mx2NeaEMn95TK8N3TjPvvMA4E3HvAxgEjbfGgDo4wqnSZLAPx6LoSicKcxAGqBYVnUaSdf42PGyzP7bH4A",
  "key12": "4N6qkBVD7NJ8vfdzGqPTgJNWHmGktqdQZHejDRFUGQcYbcsqeuS8nt7NJqRxQMriKAQwCjL2cYtN6aGKhM9D2ZmJ",
  "key13": "447MyqoZvmte2RFgHwaNWZjGNYsGunp8yAq2UxAjWeyEP9r6zE6DFTD1RV77arfWKNs8MURXkUyq6uuhYgtGSgbP",
  "key14": "5QBdEPVppkAFFZjk8wC2mkk1XVYu2zbFUY3ZgFgGBSds1mexRawG5HeS19dkhh8K6ftdMsvXC1DszXzBqRGncc14",
  "key15": "2aEugmQWZKhQ2ahGWc4TxfCDGCT9DDf1kBMaUG9S4Ut7pcqDBweyDgi1a65qBwJftTT9B2d4kNwUEJrud8nNiEqz",
  "key16": "2HKKUsbNhDvNgicWZEQpqxp9p6iKaAVLrWP2nLBg16J62q3B3dN3vK6D7gTUKcUqYFgX3hZf7mzuCq1gsrMWheCV",
  "key17": "5XtDuwLVe4vjKyyVv9u2i5ZRHtLVnunuzc8UZoqJ7XxZ1irx3YSWR2ZiMSr9eXvWuors78CoKwHoMzrbUqqwhw42",
  "key18": "CFLrjUoN63ggs4UxMWJa1RBdWvRp5kexP9Cmh7zLGVXCHgtzSwHE2emySx4Myrskuutf8G5Mu8Py8BFpbFcqG4X",
  "key19": "436BLCPrpMPVJUWojPcKuyDxaHdHnNC5SeCS2vDBc6vLXrxKPPpj9RYLEfFDcXxzQgusufs6Nxm8VkoG4K6PdZpB",
  "key20": "w2MGVbC2hMMTLiQv2Votqb3NEsVFv2ecfxHMTPtcg6CPTzuxCQNVhfbWAi9xiz77qqGZig6bAeTDKMQcpD94YGz",
  "key21": "5HU6anPzQoVxeYcGKuyT94z8ugMFPfShh4s8eCQy8kdaz7yuVnfLugR9wfKfrcRNndfabheVfiWDLMbAAy2EyCj",
  "key22": "3tYFgRVJnkBoFiEnqtnk9dkuPchCFjUVRcuhfsYcm2szTT1FLDnLw3zZaNQUNxCTY7BgnFesVemMF6VupSmS6Smc",
  "key23": "4rB3ZnqS9f32zmSW6fTpxkywygsubu7Q5v4bGBzZrk49LnH5GJxt8SNp94NvsRhkUU9hjma59PMa6ocHTF6DgGF",
  "key24": "2VaaHFeDuCLcfiTc5E8RxGbUkooPb4S4Qay3VSEpH2wpon8oWA2nfyxcRfC3iuFG2wxVnKbSJaiGgGPfnK3zttw1",
  "key25": "3HW6MuyTWuSEkuxGFEQT8PMDE2EwoCRfsgW1wzNMSWzboh636kNdHtcF1y7BFYDYuWjxwwvVRCsJmWuTnnPogNxW",
  "key26": "3iJFcwQYSKT8ULdwntaJacEu6dEAjmugCfZrkzMWWgdvbrYq9ae7UbgS8PbCuEYfXtkZLyyUA7pSGujPzZSu1XKZ",
  "key27": "4h2nmMm6UCukSUSYmKUtsJSWgE61zP1rU3yDUmgSrcgkmHzpsz4MNvwwb2ZEQEeH5JcRVCQxrjfmKjDUWSB6bbT6",
  "key28": "3hPZora1UQryxa4gsRxnQk7ejdEC53iMgKFfVyQU4LWzycGxv4pZPvxZvWHwkJBFfPXpWApWUGpF6kM1oDYg2hYn",
  "key29": "36x2bRviGtgNiVKGH4KL4CKZyeu7f9nEfEeTyB1eeGQJPyMNUwUVLwWXTv9X89K9esofvSwc6Pfvfhugnc27LJVC"
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
