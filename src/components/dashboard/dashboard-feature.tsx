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
    "2TvSLR5Mg6EFbZjhNka7ohLiPS9jJDrR8rVpRNUYDfoKvNseas3DHzeieXYrDDjUG2YYgYvUXonWndZZ2xS7wRP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKaiGigStoWGaent5U5FkQrz17RDfNe3CUozUSZ1QHkB3ru36NDaAmcwmKDm9FRgMQ1szjujZV15sCvn16gikt6",
  "key1": "wTe5xcW4cHL3fh8Tr7mBZQLBXKKzzcLVUB7N9hnVq86a73F7pc9kwDTR6o6jT2PKAeLmsRPjdrt44dWaj1qzLZL",
  "key2": "3Ahvg1WzQXi9fnaVikwpYAn7QxnPFqtPWQrdkcSe4Rr6TKVYr6mwa7jN54gxTkweamLTLGTdvfCQa7QEJtY1P8by",
  "key3": "6441i3HeYDr1tGYV4chvioYK8rZ9Vc3hzYLTpZZokhtnqMJRu3eLxmHtLFX4sLpHGCnKVvf35o8yL2e7vE2RJYQn",
  "key4": "DRxYLjfgvZwS1dTBchVX3xjfeFAzcPXXtetp9BtsMXuyi3D5EyWG18zMPo9JYPoLs4mNvqE4Eyg4nLVEcmzM3Gc",
  "key5": "41tzL34mekUANYqtmUB91AiUsbqKyeFF1cyXenfaHGG6GMzqHXzpNMzdZWsyBjPSRx6gmqJUo1HNS5pNwy5cwxEh",
  "key6": "5mNkK6HW2MYrargRPcGcrBEAEguSY5Bh7tUB3q8zdaMNVR4LJK7XE6n42vrBjX4UzBPkb2beRq4dXMPsNaawtemD",
  "key7": "5khuw9UYqWAoBtpZgYYDnnT8QE7qtT8m8qhCsttbpnXutDGqAtGZFSJNNS5kE8YfcTnJ3V6q3kzhDr9erb6Pr3Db",
  "key8": "Gd5WzwYDSgeGvPhKvnth5phPKroAJrLexxXLZh16JQ8dL9vy2Jaqv5VLbNEqB9sgssFNvjPSRTZApG4SVQ7i9CX",
  "key9": "2LHFDkaZBmWA77kEb7DBiuKw6jkz1E1QmS7H7fcj4UQRTatBF2aYruJe8TAkRV9H15X5YX3tmUwsAYTX2aNE4pvJ",
  "key10": "3vRme7cJ296T9MKqKaKbpCPZD4cuy3oHJxK6V3YRUPwUiusktVC2um6JBsfTuPpqUxMm5YrSDJYawuVcCffi6s4R",
  "key11": "2ANM6UveEca4VatM9LbT3fTCi86ZHYWdiQDnK9hdAu87PvePzvnU2FHbbJmYAgdAvBHpAqif4iP7G38jSNxMzhmP",
  "key12": "36zg9F5mKcizcBhUCskMh33iuQPYyacckfSeJBzfZGKKwDnaJEnNKcLW1UB6buK8nbhFknhXxzUZfJsYxU1tRerM",
  "key13": "31yThHgENh6uf2tLu4ehXRDiZQX8NyUWwPCsfoB9DUPrmonHVTj38waPZxjvFGH5absy3Xooyan7KhrMfALBQgf5",
  "key14": "vrxm7oDQTxMK9YG9acgRgSreWMcsHMioJLHq3xYD2m3QYbcgMjYSAstDxPHqgPJUNLZgPNkioXYbzYx9BoPmUpH",
  "key15": "25D5iGUbpXqvBti9rkAmfbPEsg5ys7YUWLcoPxzj9F7Qw68AbgWRyYjCZ8jXFLuTUazp8ExLbQTCF9y8juWpVnKM",
  "key16": "5NZDhhX5utVGvcy8R4WjtDXwwyckEk1zBU32XJPngjX4WXfqz2fRE96K3nxdisAm9GQAHKrc9cVi55aQA2B42a7",
  "key17": "64B7ymQSPFMQEasgcKqzRDHK4mgPShBguobWpQbKVZyVRddbMRWjLZQMDNoTQ9SfJyuS6JJwWWmBBWtiQx68kuTk",
  "key18": "5fFzP3cWT9GsFBsKPNy6VSkEgSDFxeuieuAWjSYPAFYMoNnmuS996gniq5EdsPZqq5wuMgBDzUw5R5fP19mmTixU",
  "key19": "2mNrNtNfKm6GRw4vJZauGK7onWVfTykgVch3XBu7b8K3PYiXNvgxExUzbMQpUDoSxt2mH7CmnuXc4TrA8MWqL9JP",
  "key20": "uJcpAR4LzgerW5ahkhhxbC6T1QYLYEBTQLMtVwEPgvUHWR3jiLuzWp5YFSgGXfCECykEy7vouX2LNdJU7sCiNjR",
  "key21": "7RdPhrmYYFYF76oUs86NzdUXLF5uwn44gE7o6x8znCjeAVG2BkTwTTddzwcLAUV3TFCCf2vd1KNVVVmMnaL9GLK",
  "key22": "2sdRgeT91sXvLedesQJDJRVeKA5LhD9inSaxt7TYrBDbjYCARv6sK73Qk26n8nGFYrBmmLYguBUi2R5vt1bVFFQQ",
  "key23": "4RHSCPnjev2qmzx43oEabxeQDBRdVBHhEkoPS3X1YjWoekneSLH2HZF3UR4TzPue8hXvgiqS8YNkMw6qWtvyknRB",
  "key24": "5RkPprLzafwsDhJ4ce4PNL7p9m261AxkR8rbu6nXcSYNjrK8vHW54jaaWJfenarnixANq3NKKgWNNHZjfXHxv2Wg",
  "key25": "2p4mo58WwcfKin46FvjbNzdrHMUDM2MECp4Xo1oJfG3z4x91oZFC3p7gV2tF6qZeVT8X1JH3tCgnhgxwRjwyJTKM",
  "key26": "zUaYtxMiKvGB8Et7zZ8HKA7YHe884XxNQ2r91kTDHMFzhun16aoujPiFpKpSrKGSd2DZa1rtdztFAsuyDXKEmvJ",
  "key27": "CADbHSmW28bSVkco9sRMyArKh8iE2EGQjh9Xt6gnYzh4rvYG8SwxquX3LRSPn94JxwY5hXJGRRVcKnHKSpPgx9k",
  "key28": "4ZPEso7fqEAZV71ZLYXjebm651yu1PtdvehJHyKv1n18asgtwtMhpDHCof5Zk4dnWXNkJAHyo3fukGMB5J5B3MZg"
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
