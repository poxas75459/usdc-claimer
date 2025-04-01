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
    "2EsMDNU9xZDTAzmRKBBfKAyqiYEURmh1n36m3VT89JXwfjBCGFJUiCKkFY8wjHoEmtun2SsF2bTAo4FEsbw9iQRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WWSWGaEn6Hpgins3eujowC5BvZ7H3Ao4AHTqC27WXNAE46qTPWfe7wxJVA95Zh3zv19jkrmZ47gurrbg4pqMnVY",
  "key1": "5RqwtvYbyHq1D4fbt46kCTYpRpfmJMDQnL3pThkJhpfwZruZ9sFzkDS765nU4u7MU5g3bVVGxqZyNKdEEQkdbreq",
  "key2": "2gNvYFSCrhv2bezDi7fCv9snkxdPG22wVogN2oxSh7wsVe6VYyxrE7oN3vVRiUPhU9ZBWXro4s9S2pHtphEXvwTt",
  "key3": "5hd6zd1dR8Dss7xKUABBv37UnjN5qW5wvKCHgFpUuP8mVPU1Wq7cRoXwvmxz9vaCoYRGUTPoEsZKN18RyHyC9ZEX",
  "key4": "29vqfZnXpnDYy5wW4HED7T1iXhzyvpmyLh9b1e2q6fsZpkEQu9eV179PpoSTzyjJZWtnj4GVi5GJYXQznWnhP4mS",
  "key5": "2GesXh4n1SLbuDWNLB2FS8du4NsbVJqYmowBpen1ivEtCCkiWw233JMURduT6rPkoahyPnhrtMg9XMTiUMrqxGrj",
  "key6": "ynrYCrVJZmZ7GjqquTXZzBr6ddyhvZoaK49xgrSTmURqDdzt7budGyEdnvuYGph1882cpU8X3hPP9webkM87Myh",
  "key7": "2x6aqhft4sdkyxm6m8kXS1LV3rgRk4ixfbMXdenxwK92Bzt1fdXQammqXXzioqECDWqjdpwRk1tFzSuxfboQqdPS",
  "key8": "o1eemJypCDeEA8nrAUUoqU9QYHRpuWmtSEMCD2c4GRCbMdRJseYA5LBAL17YgbedHHuyH1SxDa8eGGbtMcjLLmh",
  "key9": "4rhqdfwqGbfHrNvfz6nVUsSf19eZSCFYmuVhQQKdKsrNxTm8PYVS1DwJt3tc9JAGgit5WM1kA5ihyuYLK5zGcVkK",
  "key10": "VeDuMnCPraM7MWaorohKv8gSNtRyV6gydvppfJ1kPDRnSqrj8fKrqivRp9ruby4DSegfVi9BWZJc3oGtuf7fEws",
  "key11": "4RSGoz29U2f6hX7csbaguXySMLsRw4h8jeFWNjaH38rGBBXsHh7qbf218QUq9VdtxpiNpRJXGAQvBY5rMxcaFKZu",
  "key12": "4pp9H65XRhAJkARLZU4KBopDiPFcDwg7edYCWxnMFvQXWUv2LFpLqkUXSuXoqhKX2fumR3azndyWG8A2DouwysXu",
  "key13": "63y8JKkweuMtW6ZfYTGhtEYFLb2UivzotPZs1mNZXfxfCyjafpzBR6jp1ooVG5NYvjbkeujvvnSro2Uc1XGJTF2b",
  "key14": "2RGRrByp9WHbDyruVBb2EL6DjAETihwB9Rjxh14sJKZqo82SQyUiYJh2pJTLE6AH6cmFck3Cz6BifVizuQhogdo4",
  "key15": "4YLJLsimgLZ6E16E3sHGwj6WGGqY9eT37cyQDzzMcq2UVjgmM8DP9YBqtsnuaNzLcBvi5VG1fHaCBJ47p9cdz7SQ",
  "key16": "4r8vtj26eQNHFSbgpbUW8BBoMdbULoFBcUrbNS16Tvo6DtHZx8aotQZrsYzpQqLvwd7ruvtHmeyW7wzbVBtZGCtX",
  "key17": "3J6LHbbsrerzMYkWrHfzLkYwL3oBMXAMJ7zKWT1GLq9ztqjzGADfyek35u5Nf7AxDSfD27Ryrar9BEbGYsKEu6Je",
  "key18": "5JfCwoW6K3PJfEYgUyyK74X8ZD7ekGrmMoJ3Ye8hJ13w8fJaPGsqvxnRFieJV4BsGbFCBuKVCy8Bf5BQ4CdUxSYW",
  "key19": "65BUWW1xFuuCRQRhLmhhhBqksEqnwYM82BjzPooPDpbfbT9Bqnoz353s9t866v7NdLnmBKd8TxQ4BH3hbnopRzkk",
  "key20": "7G5R7GJnREf6BC5idKpPVazNyhHJgMsBtk2wNsRu1BpcotQPDtHwjGzD8a4tcqbbC9mh65h4CqfedtAoeZSW3jN",
  "key21": "2Lo1nkxHCgy3zMWRitn4TpMyEDpZVwfxwgE53V4E8uZJQVckUD5WLY6MrJFgLUnpaWEhVcJGNcYUgzCosECKELCY",
  "key22": "4RAUyQZDxtfyUEs5nc1WoZkpJVRXTQmn4M5gtbwjERdDVKvr8R8sCEtakTHvRWnE9hzwxPEwgPpnU6cJydgFysDj",
  "key23": "58V4GT1ZdbPHYFPTGU74pTKhjNxtQ4MGVDD7rqurMemRA33mNvLZWZ9oQSLizMQZQNpcXM3nUE9uV9fAEWaWZgsc",
  "key24": "xvHs1JkDYRroJyafAJrTstkoMsBJo3JmmJstvmMuwkuxMDGNnRn4cPnwFFTYMreUeUemGLKbmN9tFPKJdjwNDGC",
  "key25": "oZrDVddPytSmrEgXndpecvYPUKsKdC2dsfrHqhPd8gJSg79mdHNUSUAbCdBhQdfbiHG9XWNvrBDjT9Ran8GmDkB",
  "key26": "29RU3kSj4XV5SLXLfEUsWo2Mu3HNm5rqQQk7WD6Vq3SXJrjAmtGVsK5bdHhyGz3fzmGVZnRb9B6ackhWrFGVArFa"
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
