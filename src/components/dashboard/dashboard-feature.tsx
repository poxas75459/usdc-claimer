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
    "3msZtrk1YsE6P7ybXSpuiv4zzU3PQTCLmo3Qu9aZUVc3crvbXWZCU9pfwsxCVh1ZCyNBRY8K5dbT8N2DKya31exy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EWCvmtGNxpRo9HKPuxknoUJxRHGHBAhHtPryPWM6fgXzcGC9r2W3q9S92uvJcXZy8ymsymvSsCFqLBiNbsDTcFD",
  "key1": "kUNduFmwtyjZBb2wBRi1Sv9BLmPemDq3iVe8gsBYbHwPv4KHbDbxoddeDZk18cNPBLzFiUdaEhoFHdYAY6ViRqc",
  "key2": "28YDNo4Fpjb55AVZA59zWozK6msrqx49ZpeiYmKRawsqVS6uZPoLwiGJ8jSYfihRwyGEQaM4CJBncnm7X85wTfmm",
  "key3": "33rPvV4nUE81rXRWtiNfKaBqMWrZwJYjjQxx9CfLyCyCqxEyzhUzgzgYRG3NJSdezJXmuWG6FgHN6jcaB7c1cBSx",
  "key4": "JvWs9nMz5bQEHwc3kE7MeKZKFWwci1tzaLzFQMSLGt75NaemQpqZmqYuQsg4smSeW6dfMUSnjFQMzSjCjTUD177",
  "key5": "5kwrHs56eXwMVhj8tc2Njtk1FoRKnrUdsYg888VKrYWXNEGXiUAoaHo4RmyH3B8tWBZPQq3KTEiqFBNFHrYSFq7R",
  "key6": "sUDpkN7aGReZEwAvj1NkK3FWn5vL75xwLuEZyazoh2xTm93XsmZm1wwHudR7H4yJxHX5wrYTYNPsFjWcPNaxzsn",
  "key7": "5n4kTy1iw4M78gvGR4eeRJQ3yF3fM2iVrUXESRypNsHsFykNqd9GNgE9cPAGtzi1uiYvRe6mKcq6Xsp1hch94Qvy",
  "key8": "2LYttZkiwLAvgG6V5WRi1de3fKX65VxTdacefRTnAB8kpEowBdrTJ1XAbYH2pLy4ycDdGisrAo5uLzmT9YVf7qFe",
  "key9": "5V7a94tKAnnSM3gFMP6ywS8XM4xGjXUdsK7he4qQq87gKWRWkomiqtN7Mg4up5dFZT1RgVqv54EmxHXMbA2dPJ5a",
  "key10": "2E3HvXoTNKRMGL4hR9PGrgbTpPCJkQuiTxVvhXa44gN3eg6D32gBpcEfHqScq6LmXazg1qsJxzKpxEdcmjPWzCXf",
  "key11": "5F2uZb1A4WyzDSXAwG6w2TVLS7w2aCiCQgAtqovL4i2m7MVzoeDt3CCewhRj1jFwTZEr9o2WrKRGSregAYSWob4s",
  "key12": "5mi1uadDoYtf4ZXgKUbBmTKszjLgksTLhNwcCz9jsyLgzd8PpxxoZHMMSUyP9B6YSGNXYShA8F6hqHRJQ5CPADX3",
  "key13": "cxV4aw7FC5KDosePJtxdVXJUER2h3JSdM8U6xcLHqjLmPataJgsjSwzWLntVLgc6kopT8Sd6Bw5inJce9kcnAsW",
  "key14": "2E1UtHkBFq65gQgQjyeRcMp3ptuqHeQFrrMRsKd1wd48E9BDiesNvdiXiJ4NiYihg4ccGDMjqEwiW2fRboLpNwfG",
  "key15": "2bY2u1qZz4cxgZCPTdzJUAUSWJ7ESoBt8ZcrYVG7RNmaRKambKRKhNJu7zTHMwNeievWxdGXJ9Eo55m5auPgCPHw",
  "key16": "45GFNMDitEo2fdVpJTZrueunTkST53G2DibVSHaDp1YKZrZWxVWg1DaWNNG3kJJ7gxPHgmcN2r4cp9GwgWmX82PT",
  "key17": "29KtnqjpiT8vmwq1uWcQRMBeEh4kxdz5eCnm3D7bDsJdH2R5UGCsTAvKcA5BDPeaZ2ALxbCfWF7qk3CJGc3kdTjU",
  "key18": "4GRoAKoQ4SszfmJyyKh4zDxsEgpgKvyngBfZ6QLwXGUi1GP1HtRdLXTwaxN3mnPnkvfpNsiUFFyX6NTJgW1ogzEe",
  "key19": "5TFjsc2TKRYzZUcfpkrp5AnuwHBuLcLW95P5it9b7Tcy4wqMPApB359Y9o6xBtLEhk1Daca27cfM3nm9SToPYSmN",
  "key20": "52FAUyzUJRBpqG4MgR6hAZ8rBGVQx4qUNrTx4Kt344ui1wY5HEVxdxTyVMqypSiAJ9E37wFHATBUbwEmZJkRYNU",
  "key21": "2whaDscfXQjBFGtGCuCX7G53MXY6FeNszR6jBHG1n5zTfyzAF21J4TW2NcAZS4gPsvXqGGPxEfTreT742okUub8L",
  "key22": "2mWR94ZPWFoaB5NBcuZ9tvf2cu4QsJAy31J891ca9tAVMi9b7RnU7BPCWuqviLji72wcrzgL5gcvFdvNaCe8yLi1",
  "key23": "51MSpBo6B7Q8nFRBF9PeAHB46CsNuY79UyVhpAZf29strKtJmokjheXoJetyhDyhYE3C8YFX4vdcdHmwaHDGSZeH",
  "key24": "5Ee9rPGxWss5pS5AwTN9vhq7sAKExBGkxiVv7Q2pRhrMHAEWdCrzB5oLL4f73yvLpeVqwZsjJcws5x9xipHmfBq6",
  "key25": "2QiHN9FMi6cBEM95inCSRZ2Xo7EPCe2zzK27toAEhAb6VVX65QPvPRE9SLNcFANUN8JqWHSorvWVLFYe2jCSMxs7",
  "key26": "5AfDYBPY8tAfijRtv5tyJCnv99kA9ie8D8bV7aLvS48MF8RkxYURjrvUeSPHk6u5DacGY2eKXAedJ1ciTSyzihy4",
  "key27": "2XfkvTtmrwRZPYmrWMfarRWS6osvQ53p4KjpecMH4Wut6AXuho4S5kj9y8t6mtJxhLyypZoWtZLeJdHneSUFSxrQ",
  "key28": "32WywNnPPPqW1vrfuNxC2B9g7B1kUk4wyyUgg9wNt1jq1f3ukxmh3abhfUPhKNMb3nqAE7PHSsdZbRb8WNaGWHo1",
  "key29": "gNVDh5PuNbkWTYcfCqzwNiGd6u3QiHAaPfHzVQ2i5aMKb2qaMprMCNP8mCfnXsv8zrv8c7BuxQnBfGYFaqz8NoK",
  "key30": "3xUuGk1JtSikdbRQcbGsGdLodVpeoVXAMcY48dnGkqhBgH856FPCA7DCmUzT31eahuNZDE3bZnmAT1YX59jcnDjU",
  "key31": "3xaHakqivDHFTqMUYbDAtxvR8b7vaediwcx3eQUm5tgT8LhHuDETdg9oBWUhRBnzLcEeXXWSDoNrAxATbppn4GMt",
  "key32": "4pWWh53G92hrkShCv8rEQTtV9tQ3fXX2hNnmx5tr6D6MtAFKq3Spnf3KWonfTS1ZcsAaJQHGniH9k6SYYdkRhVN1",
  "key33": "5rrxoNkRc1A7oVPvddZYXNPLGU3fuq7x5DC6w3amhSTydFeupdAkwC8UPrDD4jCR3DrUr7oF1jj6VpPYKMmuCD8b",
  "key34": "4TWPFurRKLDxjEf6KB7XC1dRQm81JTyY1MYJrmYccDvkumvHMoZcHrJQYB6iGEzBBBYzBvAHdhgJkdm84wbGhoto",
  "key35": "3ipKDKnhWtAaGippikH7Th9j7mZqPeEW2tbMRKuGPPVFYWSrRvmevzfrdN5dVCxj3Hj1azfrzgBmaEoveDNenqcE",
  "key36": "5bgAULR3cm4eYVUaEm7eppgNMdwqCVhu2b9gMjWcWYLHejBpKMuGAMGY5KoLj3yoy57fetthJFMXS536UmQHYFo3"
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
