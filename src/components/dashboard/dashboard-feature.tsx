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
    "62LxGLzQnDD1oJSZ5KApDyUvGV3cr6dz6NGwiFafZGkvVm2Kr1fzwnNqZrwpFggqBbyhNsn8ViX5i3LWPsJw4Kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ctRaUjbQQEukSHbifNMtD7hRC9xfYzEkEz6TMtLs2hmysQoRwXTYsLUrZQS9YPo2UQqv5tbr7wDuqpTWTEp9Z8x",
  "key1": "49FzhEexPTnqiggWHwX2PDxU65mXd8HzvWjXQBkQ5SytQYYuLdGivxm8zgJRXqgm9ycr6HkgNHzGAZGd8YmTpaMm",
  "key2": "5FuvUTYzH8rKH8G2MJ1sjPsNAP8WkXtqkDZ8Lr92xn6xoVjtchX1tEQGAEpvTicLs4fPuSHwa1hbAQPuXji8STUw",
  "key3": "3Z6917DS9znE6fsDLqCd4mDukphr29C82XVfMHRoBV7XRb1GAMK41q4dXG9oSAh7Cw8wEMWCdJBx6REEy4hnQY13",
  "key4": "5LuQnjrqLTz1Qz5TCRpbB1zdzRxkRdwVqYKwfnTmq4e9ukRAj2omURXdc5ZGWq5CZ8UYEL7PRLr5bpyQHEzqUWqZ",
  "key5": "5GDA1GkCjhVq19g8zV2D66ATcjiSZ6PKmmgHgZA8tvZDrSGnqAdPSX3GPMrqW1QvRvqc9BuJsvXWypNMtAW7JfgS",
  "key6": "4bsKEYS4kNYdZMBU94P7uH5aqH5FwLPh8huNirt7uaFfD8K27fz828HWEAFR1KssHHpcppTjq8sT7AKGxNBV22sh",
  "key7": "ZeV2G6cQJJgXvG7tKZN9oEcvfxv3E2foDNpd7kSP4UtJuQAUFe5b8g1M2HaLtcJZ42k5HaGWWDg7L69EfKszgN9",
  "key8": "3dJMEeu8ExNVpQ7NRXjQCPHJ8V9VrqpeyszY5jpozikJj9tWnALa5wnd6ojhDy5tf5hLSuxcP3JLQzRL34vQESXo",
  "key9": "4XckmN4RRxGAWDH4rGy2ydpXany8URjRoPPuAzPBAu2weDTe1Sb4nAgxVRxvoiQGVoDaYDBHzdYThh92nHJGrq1S",
  "key10": "3jSLbXk1pfp1Jksi3aJjHvdH7h7oo77zukuCXRoEmPJ5ddonvxg5WxVG1qVP4r3HxerS11McpPUz8Ter3ocVtzU",
  "key11": "35Bkq8JdFUyCtgA4og2VajJ7HzyFTVjyYpQ5WrqDmB9jMLkc3MUeyyoxqTVobKvj6pvNTRcGZDCnzniDyQyUXdaE",
  "key12": "5TJtk8PvwG9Q8g6VDhhjawdu2jQsXK4K82SH8tDrCghvPzW62kTJ4mmgMUPrw3qnHsWupaRdVQHz9QRF4jLF15t1",
  "key13": "24FTt4NuUNmF7bwpWEnjPB49mmpPdiz4dbqcMuPLgGycYqUky4JRkpz2ZCy9WndyZ7aeYS4qZLG1XSLepGxgmpig",
  "key14": "2syjUjh24ASQou6maRSEfxECcHwin8chtNbrLM2R1KAoAf3zz7YJQPBx47LJJnjST1UB2juXWzVVrUUbkdSw886V",
  "key15": "66D8Fyo72kuauJwDX8BMMsqtmKF6rTqrwcthgEePUPFDvZjNRbRszUmtBQtqxWDsV2wwmRAcCRHmyiJdLXUvk28H",
  "key16": "2Two7oUGjEYemwD1Zsc8A4Gk4p6Rju9DmDWFy4n7gGdBza7QG5LfXjp4MY6PXRLS8q6XJACE95VUh5pPx96KfS9j",
  "key17": "2j8pmLrACQrFN1CxGtEvkVCLyv9xA2sywgRqqBMLpbMER5UAGpeaQYHQcn9sLi3NUAbftceq8UWW975cfFiVcCBU",
  "key18": "4LfQqVCPSakkuovYPjPdKb9edpE7hCmcgwSht3PXTxpRkRk3xny5Uu8x7RcRYkrjrF2kxwcRMtnPSetuMaS8hkbB",
  "key19": "5ML5ZbES2NwH2uukXrMyB4Fx3qrJxwY2asxdtmJqbRgYNXm2dBSFCHcpnkCRUjejeZaA4bPJ98wpAmdD7drUKJL1",
  "key20": "2eMAuamyJhbV3sxEQmnWjcRUv1SnC9GP7V7jdEAG4WCUWvZYe7mH9yxe2y49SvCutxTf6DxWN8LeuUk3HMh5pT3h",
  "key21": "4k1A1jJYS9qSHMn9t5WU8AxnJQiveo1m5w1vhWxKszVCsg3eyTwBhPdcdpygXcXFp4LA2PqntBxuyiiuN5sAKK7k",
  "key22": "4yNdmUXkUG6iipK9EG7GDR4xRGh92Q9Uwsq6oswgNodUqK4a7zXUW8QGqB8CRNHcsaRd1Mu6QdLnHNVfUVhKAh49",
  "key23": "5w5e5NxQ9tpkhBijCKhnEtmwhHw7c9X6zN22z4pG5z74ktHbJtG3spQHR2o2uECrJ2PRJXz5JMbPJpWJ914CTyHB",
  "key24": "3twccWnDWCabxt79GbgsNPJkwU4d7D1gCpXJhG4qnio72ztDPLvKMwidoix4haC6HhphF5Fm9B1mo1yhNDuMg5q2",
  "key25": "4RkK4Qw83CD1xzxuPbUfuXAsKSX4eigjQzfPBpQFobeMDd6qxBBbDEjKLRzy438wugqEp5XD1vqjxF6bwXSLMvWG",
  "key26": "5gzmQtrVkDhgSAcnAjNmhK5Rbt4bAedFYE4Mq7qJr2nsYkeEasH5CnWwkDjFfo8YyqsErCQr7Rh2gSiCqEeN5Te9",
  "key27": "5erswFhTvS5HCDeksUmUR3YcNMfbgfvdgDD5kc9iALtbAUbh22Y4b7myPpMUUqTKZGM4hgadz26VsTKDAbR9pLgg",
  "key28": "63pcMXQm3UFYkG7weWBA4fPJK9fNRZc6qrUyUfzUpGyH35SfJfX7b4NLr47bsCq8jCCNjrQsH24xtmFXVgSG5nTw",
  "key29": "5FQHzejMEao2mvCbJuQPjDh1Lg5617PLSR9FactnXmAwYBgu2EuB8PEGCz2a8Jzqe8PDANMJ9zUUBGcpnH8YCK5m",
  "key30": "5SSX5k72bFW74nCjNjGSfymaQNG1ApzeW7BPMbYbxz57U9ooBZmPqHRb7DpUJTfrhY4qZjbhE3FG38ae3dBT3noF",
  "key31": "rBb8dsC2ZawQAPXyDz5Ydgmv3d6YBg3BdF6zSQCN4gWBGpKcxVbxYrfMWnGW5C46CxLesgpvNvF4RMeKDn7zfYM"
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
