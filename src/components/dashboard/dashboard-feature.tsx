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
    "586EtYh6z9gUWDbyxtt34PUavZqcvw26SU218y8eE1FW6spzTzGuZEgonwQQRnEfppP9YLD8VrMBsoG24xWURAMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZWs8nMdfQxd5f9e85x3fpNexRVbeHgxogc22q2ea6QioNKHW1Mb7XvAcTRJqSXFSSi68N3PYtDchMJVzNBTP3DY",
  "key1": "EDKkpUEzcDdXNYzoaCMbrjZ1Ckitha9V89ERmxmgbcyyZwKFsRSVQ8B6Dvoaa575WghxubPt1cYpWMvFsYAEp7A",
  "key2": "NMK7nBCwSvTMmC4ryHwN1xHzdT8uv1jn94cmEQH5qv4mJEGXusvesmVynfS3WHHYSCL3buS1cGpwVKfYLAHvRpD",
  "key3": "3TiiyzdHAhFGHcApgnSyWNpqQ3UaWaf7ZQ2GaPdvVPHehJc6hyfQbhDL6J7ZyvjkQnvTEKVMk1irSZ6Jd7vBRStj",
  "key4": "tB8pw9Yv4rt9h4wzWWck93ZBqwMZdxjqXC4wbbbs1UW5cVyCtx4bCNktsQArrVYhTFZR9ZjGuqVD18VqVFhwrkk",
  "key5": "46YWySx2oXRWnTy9TVdaVHVZdWJmWnEPJTa585pWnL72d2pV4zwvXyumSQ8qkwTJSsKQZy3rDrkhDPDt9bVDH1yx",
  "key6": "5vfXU7RdKLsUN2cEWViDwRYSQ7QoHMWFsnhvy3Fg26AcHrsV5PyTNYRJfwhjk5QzKREpVBZzCPuTw3U3NDsvvsBy",
  "key7": "TDzAs6yJhw7Excz7tYQsRDvN8uQVm7pusDgvgUHXoZbgTScsSLmkjq2F3suj66eFi6K1YRb95dHonHN45dWDSip",
  "key8": "FhjSyAo2hvrnKKoQH1FyjxcQ3MrZasXjXh7mUVskdcwvAt8yP5XPqZGeHMbwzoaVMGZVnfiZqAaNsJwEhQKjJ5j",
  "key9": "2cpZXanDuLwaaihiQF48wmgPSEuQtkgSfyFbLGhH6JaF8R1MAB62ni8jtg44fLkz15wtafNkj9wTneTmNxurLVJR",
  "key10": "4rsEBeRYQ2UVLeVDCABehYkHoM6pv4YaPxJyQKc7sJuZRNg5hNhxTho63DR8cMW6uz5gViMT8LBVpXkMEn1XcxPP",
  "key11": "XtHgqKqgywug7fyM26gHcLbwNxYaMnF43dFnfY3NgbHM72TfVtz6XDdYMii3NszHQQiR81eihWAvXD7bNhT9Kyy",
  "key12": "2jEFTX1XCn7hJYGAyx7SGVgcFizyffSFknau51sa8JSMmtcUfanjA6dqXB1XN1DhjYfSqUVVyTAwYQNNXYVGSLb9",
  "key13": "3SXRS5J2BpnZigvykQL2s9Y66gRkfmbJnaW9T8BmUDrmh51hNxk1wG5dksBzUDQcV5uZHJ1Uce9QTyoMD8FftbDF",
  "key14": "rZMWVMvQJEDqciWC7ZcioFhKKVgDoiGvWmtK39fW7w8RmaFfMV8g1yb4DrGKe2rstmB3AP6yoMjfBpqX9vtE4fd",
  "key15": "3wWNg8kQ3cuhE3a4tVUy9LcwZC7nxAvQ7LncS2AJGmuUsdi3UNaXi8U7qfNSDGfiKF81g4yhb7LPTFYuyLTEueQu",
  "key16": "3t8JYSH7CvAfapyr5zZgv8TRX6GbUP95LRxBCPC2ZcUXGSBEEH1kujuCGcSiuEuFVBPPxeEGWoBqEcupXbJEjBUE",
  "key17": "2Cc8iieNMSW8NBP9A5yPmPvcenKQ94ca5GEpH3AeDh85Nd9eXS7uWcbrzXGG4GXt68o9bFWHpgQSVh9G4iSxQS4Z",
  "key18": "49ab3B2T2b4p8DfduHXP5eWuxdqpax1XKqxChcY7UsUybgSdvMwK57qZwWVkKzbRKKmqphrDZZYAc9hfM6EDR437",
  "key19": "5Np84gRCxQHMcJVu37TP2ZsazyWwaMm3wt3XJEhMCnT3WtkMNuHEB6xXVQT2JFtXE3LEM9BrrFFkXyiN8uR4owgR",
  "key20": "2UGHgPez2DBmGzcv3qBbbjPvp9AimCPzRf7eSLi8Uv6JLYBnLdhVUwToe138bmfFoSG4Dh7V3mwr3u2kMxvEJcgw",
  "key21": "4yiQy19jWUkmmwEPYbUsVLg3qYaTbWwr3HTGND6RGzbUUhU8UMphgsrUvisVxnBoLXReTpHbLMR36nttW9r1Tgpo",
  "key22": "58hAXFdjgJoJUvWKGaTqTbdqhUSmMsdLVjwR9bJc5asEx8JZEtZQ3X7uww7fv5VAQKF53zuLhXBjwC3MpQnBjHjQ",
  "key23": "5EM54qzj3eJNagAcmMrBHLtWdwhZKBkAYL9PwkVTZZDkS8bRcQmrDDDXdwjJzZKJv8PiKGeMuxiQTPeHn89askjt",
  "key24": "5R7XqtnCSwhtZH8vg3fcMw6V1t3ie5KcyP54EK26TEnHZyFM9KKbrAw1o4gwHVUfP5RGu9dw5QQZB8w3sqRM5tZ8",
  "key25": "jxyJojagwkjPS3mTr4bwtXFn4p4bAxFbcT6etpGjpZURfh8p4dt7U7mN7e2GWwbe4KNwzAYMbSxr7ppe1smxw5M",
  "key26": "5yNNVLRNb338bdvkoWDLoG4QP4wYvnLEsQ8iVrJUtgWY52RL1pDz85VdpvTrHGKT6xXohSVkyDex1G16eZ1fs8vS",
  "key27": "5sxF6UFihpFbBreNeU9sYUMYGYwPX4TMBCRSTPDAdEQ1JjQQPF8GUNkGQvHVbb9eorrV4csH73NHhZT2dNfvieEz",
  "key28": "5Tb5D56cDKHgmUJWsu351jKPrcYxGFLtgB1gruySC4QLAejKb58cZPjiA2EwepVV9fMAnfy7pZyndhKXpBuw8tyM"
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
