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
    "2JUj2xm8r2iNykYVrthJRQ2hNnD4nvpRAypsxqDPXrLot3EoGPpJN4r2X91tWdQNvKXhcdmSvpjmsrnxWsC5smmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qeSt9rt3uvuPNNsW8Xw5Zpq59MrCnV9wuHRmSQjh1pxpztpxXtEG3bzrSMx8Rfa9WbZaa5AdEfuHKsbQ1zXtTGj",
  "key1": "3WgkbAUxe3fnkw9ht5KV4M4ZgQv5cWT8SarWe62tDvsH4M413aEo3azJRFJ4pd4jv7j2Jnrk8faUnHsx9EsXrGfS",
  "key2": "5jDCN9orcALH9b6V4CEkxjopRhXwCzdr9HexV6jkC7BNbxUsjgtYfjg4gRh9Tv68VuUG9ErkLcQPpbNXbYr6MtRf",
  "key3": "5yWH4xTVdu4CmczPy4jxDyqH3yYWUckWSc8F4FCpdwwXj6bxDtTbV2BVUPNsCEMvk1X6eaoJsdCNhGnWx8mRDZY",
  "key4": "7X9JiXWZJ3Z5F9nCVuJDiPn7HNUo4WU8coBgodYHM6hirhibHbKUXd6av3vu5M2kB7gvygfNW88KsSFYgen4c6p",
  "key5": "5KtotCStiLDPKfHC2uzLWHTiZmQ3HwMb1Q9hTgSspevWGzDzzzfcQFgKUC5jFMHPVAouM9mv9sxgycJ7UVrp57u6",
  "key6": "5t9saRL1LfL82AGwsLY2ztNGBS61XpWD6h2vjvUdfeWafniz5oTCdMxTk1G5AYgYbPdAtxc4U4jRZh91qiETRCTT",
  "key7": "2XrGRLYRCPudRVPJv6LzLT5cwy7VMUZN5WBKQW92Go9Y7qwet2ZmK75cHRvYRurpMNNmaA1Dd7mC2c5APHnR4do1",
  "key8": "2QdxD7F5UpZ2sFxrokHgyYoD6jtpH5XRugcV3J1cLN5K7Zcf6zo9S1GSLMVTsUkBoxRWwbcyPaVi4FgdLAisgbJZ",
  "key9": "4RVe2UnWUpBbiy2211kS4MEWrSN454jZ75nNknvyqHkSQDqxik9u3akv8XVjucdC2DqfhH6o8pU9ydUCYoSbuFVm",
  "key10": "32zti6gxLByHwJ5RvSuctPwoyLJLJsf6wq5NrgaZVjpDuoohSn58M1osBSiwkQ3xxJrdrHXdxvRDi7kjTzwEZeaW",
  "key11": "3iTou3GP4We4cTa94r86vtcUsh6xGYWHJ857F4MiHKgRNMg42jpmGoZ2maPSqNX5yW6qibMdPfU9cvEMTLor4eb5",
  "key12": "2ixqZQT6HW4XWpi78U2uZ1onRbEVVf5RS1zvbJ3Tm2pi1jkg1uZowxmnfMnS5bnKvJqTE3bj1vRfVCg631c2bjna",
  "key13": "28qHrjzdrVKQ2qmcbFnPR8LxGRzJNd9qa7YGWDjwudFNPEwWWc3ju7fCErSimhT4DDSMadcLuYNje9bs8NARkYKV",
  "key14": "2bVxjiHwS3tim5Fs6VWHevCDTi5tiWxo1K5dgLoZ8ndvNA7TZYRBbBjpPmWVvgUypy6fFDvzyRaBD1vVwepesbgJ",
  "key15": "258bQLGfgTBQbuVJRzp547467DjzHTJzkZgdTNxS3ChsGft8pVXWUpvXACwmSvhwLdD1SgBCyNy9dzoUp31Nf7dc",
  "key16": "3i2don4DSnjB5y92cgFuKTK9cyUF6ip7PrJTNeCbuGq7wknwQ1GEHh3859wYKxqDGFcsrJuEpvi8BMmVTTB11tzG",
  "key17": "3XU3Dvjd6QY9YGx6CzwCZo7xtRHm751dpQGydKrusg4sBeAoYVpJu78itTwCwxUtzmhYAd4Z5a62zE63LaaQHPUm",
  "key18": "2Pgh6L5L4iugJTJB6TPjCnxhAo1vcSWwnb1mCzXePTpKwAryrUVVBBETYETvNm8UpPbxz2pyjok3e3g5yaYVxPoT",
  "key19": "5YZ8sLegiEBa1kZ6aRiLTzfG9JUVujPCHKgbbqKfqzmzaMdsrsGeVjUK7HHDVfum7cqbZEfR7X5WhKfmdEo5G5Nf",
  "key20": "62NFSBjbxZbDJkNtsLaErEC6modDFWtz6XCAe6cVGgkirwzCh4eWweUucw2mrY6RwfUkx1JrFNke2qkWCVr5uvi8",
  "key21": "4irGh5hkGEKzmN18xB4kuCdXGcGcHVueuByVDaKFQjPLCvRvN7kfhsG1UWtCYxXsAJYV3d4XW5ocN3jbyv6QZiAC",
  "key22": "5jhNhSNh2yS5sc6ojSdWQTD5p79bgvKYtCxwB69Dp2g5WzZtodJnBYrBEyFeNCJWMLUtgvFj4MT1ewhT3A6dwRoG",
  "key23": "2PnrWVXCvAEmk8hG6oZvxULLMCxq5HfPvY4UjAR7sWSeisrxXmjgjcpDFnvCbeEVN2zXZTd5yfLZNMKN4Na6smpk",
  "key24": "2dW2DgnhX64uhhAgnRePW2TcXfzRKpwvDC4C3kXrf1PegvAe7RrWh9xm4AhYK4GuP8o8gpXQZ94nKhCi7mQ4tuf2",
  "key25": "4ro5iWwUMS25UEvzBGE9ensxs1CtQjzwkGenubYKbWs1V679CAjndd9ixVz2LEY3w2dEtcSmtX54dgt63nxjc3Sj",
  "key26": "5vdECrH1zi73CPpGyqzL7eZpsAnNTcLm2Qm27Tmb961LoddZWyK8TyZ3CEfFUACfKBQcctDRS3EHEvxQNQwEZZtJ",
  "key27": "4wvBue2KCNfkey2njyhtFFDv8mSxRjQm8v5xjRuTLMvcL771jFubBRzirs86bKns5u2QLaBNkJ6oaHwcHFmWqaTU",
  "key28": "LwPbVh648ovgKxtqbh8Z7ULcroU29qDN75LfY4D4xmurw46PEjZJuyXPuqNRbCaeQDLZajh97ot24p4tRYhYztB",
  "key29": "4UcBF5dtiEGwLV3TFyf22AbXHWb8rAPczDKegrLuq9sVCSQKtnMWru96ZgQN56NmrEXbW1rtTZmUrKNrYhzfeGxu",
  "key30": "4XTSws8ndeM6FZDM4xgqJbHGYL8WMMXaNmjMcgBnPz1gtuUjy2RLqhXWFMfJCL1rPEHjUZ9WGtkghmjsMGqJ4nsj"
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
