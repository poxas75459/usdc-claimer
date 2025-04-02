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
    "3LBCCCGZt4DDjaqpVH4xvfXZ2eUD5zgYcFqSWBSL7S1LtkTVZjhnCArATm75H2S6PmwMoh9WuUwtqx17LXdAx9jN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SCxCHPeJVyvHDRqmFEg8vYeo2LZayerNsWV4Y2Q16cxCYiReLjygYGEKJtPgjbesDoCox2seT9k6VtQmyGyAMdx",
  "key1": "22hNWrHzKvftiSf3wex1oH7oMYyXgRFMEMhW1uK6noirS6jQDD5wiAvDigkbHRHfMdcMGoqpawJ5qRwQZerSPqoA",
  "key2": "5yeM6JfjtJd8NyzJLwD3TFuqeK7ttNhRM5RFyqtpHTAomTUq5EzBbFLtkfhLVfUndK2B4WLuDnpJriMFTAkYLdAT",
  "key3": "5gcVZry9jyuntma1PE4FTQte3NYyHxF1mW56jnNNUs5cvXeFPr3x5gFbg1DspLdSr5we2NYCVZ77o1EQvhs5dqzw",
  "key4": "2AY8AUcHBm1jnSkD7RabHsMsnoQqVHWSpBPGmLnZJvBB3FYChbVKQpZeeQdD9DVnV524zcGJiiBttCyM8Hk1A32F",
  "key5": "5tPHyVNHvuQ8uMqRVDh3qVSidhn5YZZcrxQvhyUjwdt3AX3z1zpcqbJTR11TftTe94yKy6TFnVmaR2xoKHxrfaEH",
  "key6": "3YaEKP5jyvVbq9hvXwFJj3qEXcGKXJc4rNjjhyHdM6YL5fJ1ZBjNtGJSMfXiDa8GxXArcGg96EZ9HnSJ7Tdog7Aw",
  "key7": "3co818cAcuCpQ3vTuDCe9FKvNsyvq3ww5NY2WtB9Br1mvzPoKkGSZWUW3ytqSyAAvAqeLwfw33TpzR1srLgLYDby",
  "key8": "2N9RqDemvMkwF4BkrpJ1FU6fuFPWBZccQjmUktgChaDYjT2jZCtErm1U4FGDA6wJWRUD5aG9C4K4Xbao6qHL4HQZ",
  "key9": "5vkBDgAMfhSh16ApQVk1GEGdxPX5yRjpSU52V9gUUGRkYMfNoM4fJVJPp4Syin4jNuDLbdLxQHmkprzFbKevgvDW",
  "key10": "5ZtyGM34nS9E2tkAqiwtcxrYdLdbuF9uBfiqy8f8b4rr7zX2gYGM66k1KxDsfzkFTrXRMbMjxRhs56g25UtKk2ja",
  "key11": "57QeDYS314t9vNm8iZoaKPfYZiBV7TXAi5kykR1prbKfjKtcfYUrWUyYpbbw89VM4sBvYYKAYRmhiHJ5CUs2pFQj",
  "key12": "3SQgeLBa5ATHJCMzrBE14daxyeY612xQhaAj1tibXMH17rjAukxevLy3XnYykLd6ypSCJ6FALQYuYoFVKLGS3UZJ",
  "key13": "2cKfZyGPQT8UoPeoZnNNA2YTqA5W694tsFzemVCCyk6xcYussyQ41hpKtnbR2Cf5NXGzMY9ZmFK8HJpMHsAQLyFL",
  "key14": "2TSxtaAPR4tsNS6iPzWkCe7Jfd2x6y3VXcKjuWswvuStdfGavpEpP82TBRksYcrUDLdS39xQht2xayr2bVDQLg9L",
  "key15": "3MFFRQfnN7TbfTaqxVMK7SkZizJ32LZK5VCQd17rmdJzxVpp9PkusjiniukcNjMPpLtVkm5uYpusmS8kuPYKEeib",
  "key16": "aVCSQoXae5cQKDC2CjuCDqUU2jkTFqkbA91x2siiYLKp7ZtVk6EUCzAyRBzEVdb1g7ZxbKdWUB8mAPWNxnSPPos",
  "key17": "2gLUfuLficAjsZYSiykCcXAWuE67uyaeyVEChmWxcxoWsxv8wygqzN5YSkP994T8MYrAudhme891A2rbCRzrkB7w",
  "key18": "3nxdJsMmUwHzENw428swV9VPxRuqaTDR2tyL6y4izRPU1SiE73NhTeNssFWEXthYCoqG6jxcPPavU3dVaexrZ4rD",
  "key19": "2Ccq4jfji9PNuaChGLAcaqfqJQRRBAAReLhLXBBuvDcKdbw2sNg8zn4GmqRqXCMZZLJyy9kcRqmU5zb57eTQv7qY",
  "key20": "5JcKK8zDCbXGyoqf8zHoFytEhBwmyQir2UepBA9yEHRKYZKAFyXe76CiKc7dbDCzgxaYsLy7tgDRSyLYUPnm8ikg",
  "key21": "38aBoyMCsG6m841W5BmC9w9GdHuQax4P94atK3Hn8BfCzatJBCTGxLojUAg4n676cg2VUreheh6EtHZkSoSknfXR",
  "key22": "4XABR3CkTALwAzDbMBfF8Afunadvtx6fZCPVV7eqTxXAhoiTKkDFV4wUoaiZ4VxUHbnPnHr4MRuQQR5tyMgqpS5M",
  "key23": "4fjCHBDCiSUph1Zv3Mmn9wRkmYRyNkuE4ALefoXNNSei6ZmWq4tVVahiiWm1u1bs8Q9JqWeQspncMZr1uJ4eGy8g",
  "key24": "2DGwGt4HD3usZGmodJcuBANE66f5ECcwCc9XeCnKGc1op7wsSbDtHUQ3WuHiiU6GiV65vznhMGKYx9Hv94Te5Bjt",
  "key25": "Z3tRiZyhq4dKf4q4DMuhjPvANtyDgYtMtxjsJZGAEXxViowncv5UtNg9SkjF1pNi2wAVUJZeDSnxy7FkMtuoNgQ",
  "key26": "5y6Jn2TxxPEZx2Rnx5EPcRfkRgj11gFMq9Hah6WrifBvcU7xtxwgzGpcPdhyzT7Btiu3B6GbTMefausB18h6uqhY",
  "key27": "2A1y6QHqjf7SDSuVAChe5osEyK8oS1ipNj8uPUAAyuJJvrV7izVHvaGdBxp4LibEqBWwjWZBvHVzkVykGtJMf4Uj",
  "key28": "5n29buWMBgw27HTSXzHhSWQJZxCp4amFyo7hYWfH7NZuhxAwL4PByWdKVz61MK6RAshaFy2W3FK3Nbv5bknHHEk9",
  "key29": "5XKSBn4Ev5oNfRJLLV3Hvd5kEhzt9TEYCbdrjTymogYi3Sju3F3mDtiNLz2e1fvYzr7cgkXYk6xVCpSzCbty4JAA",
  "key30": "5YdVnay8NTE9FeH8zC6rPCYbG7XVxJji4SQPhNE7TosmKi13Yrc7uZfzVMdtPCeMXcGisr6XVZSnUjpirMqJkBRq",
  "key31": "3CmF7p6jnTQR7vJ1pngKPYgD3zXoP7T2sQounCEqR3baGGEjsaGBxSijW67QDpgqC2v14AzvV1J2o65n2szctDte",
  "key32": "4SpJ6FRZyRSdDSGEfmw7EzuHE4ADAshpxRUkxJRJpLpM3ecieiGWCr5fT3HkhMWAh3Dmt1z5e76c3oZuAG6cxekw",
  "key33": "3iP7g4oWFoj8p4TpJKpn6RMyDn5D5wdeHfCfsBCh7d5cYqu6zAJRN8GdEQgLHDvGTLaPsDR1Tkjjnj2VWAAnCrY4",
  "key34": "3yzJYskvy32m8wRPP3GnesU3QTwszTgSPz2x3MqsfoTjRFeRE6TPVypPZMZ9cLmrAzBiaTfW9s86Jyyi8ehxPMjA",
  "key35": "5BnAKdDzGBfKRmNerkP1cSeNj5Y5c9vWQT2zKgh59ys7y3HTk2QWybQFjwoCBhAWZtTV93hM54Q5sEtQnDnGvurc",
  "key36": "4ChM3gbaJW7UDxaBsLpJ6ozVtc8MEWoMAuLAThm7LBMoHBz7g9p7SbCGmsjG7MHQECRxD6dbPpad3KHb5ykxNcJF",
  "key37": "4EyuNzb1uN4zVQ3QqmppNAfUNvWtR6JTQW6eMAfefK9tc1zYyY8GcBggRbaPNete2zE8QhD115wNyAEJV2RVwWja"
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
