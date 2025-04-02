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
    "2g8Ay7dDY3UMpxjt67jjqBb8X7JPYummdspX1sGWpnmQdn8j9H7M1WXA3tKNtVjCjhLN5FYPRTCvS8wnCCasLad7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LRShuhbJujmsuDmbnVSbqeU5c2zSt8MT1KRDPBUUMKHXvJv4v5yV5Duh1W8wk3bH9TfoY3nnowiGemEdc6dnjq3",
  "key1": "5TzmMbtvCMsKEtNEfhX7wL1q23BsrRCG8pMX3FTz7TnYoKmTwbPpTptVZdcB3ZYwiS1LkV8AZTy6deWHaS8u3ZdA",
  "key2": "3GAcbgq892fM4X2NKyvzcMWwdsmEb3gPyfE8c9VvYFqPhiZxfFG7biDFJH5CEFD4xd3RJWQbajdvGSqvZeVNtcpS",
  "key3": "oTvC4y4qWM8SHy5LUn8NTWWY2rwZHyzR1G5vypCYrhurm5mAYKgd7GT2z3a9QaNNmvKxQWbhu3TqcFf1YarAsjM",
  "key4": "4z3fmS843g2nU9WnvQhqDDDPwxY886WfLnhXz5XSSavF96w2zj9ZsYRLKirtpjFrxvzPvSGUdT7koV3biuuXzB8a",
  "key5": "3FwibAapWjT62ddVgvpoFS94L6vRfq9CpZ6AmiTKvCQiC9663jkyKyyTEZX7ewSjqbKkEJfi3UqiewXjxgVXNeRt",
  "key6": "22FfLy3i3BxqcnmYKLdB8xX9dRXVCrvDVuSgMwjG9YdrkRWPbcBpufvLFS7XfwRykpwNi3pCA1rmdbB41UdxqnWn",
  "key7": "Bk1ozuVf6cfbVj8JNdGoxdrX4NExTXBvTSG8FfvP7riJRTmUWgLcxupxn72CuKyvyvyNbkEXAPRjwXP4SWqCU8u",
  "key8": "KodiQ82NPY5dHfgYy4WttmXYFt3eHWA81GkD9unjuv7PL8twCNcGrpKbAKBYwaPV3Ut5izK7GsKK51SZJthcR7h",
  "key9": "4EUeH2rJiEQghXbFVGhZvvpQU21uopN7VMM3Uonk3ng9ghiWFVkTMi8rkCGuocZEYbpobFPJBRbzEZ8fctGnU5Ns",
  "key10": "2TZGyfutbzeXmqNmdwSqbUrQZqYtLUv41WpAhvVbUcYj7EoAr4pG5ZJhW9rjHBvqw5qB4ZLW5acvmxNBp97qcmQf",
  "key11": "5rqs1pczVtzNHhbKqhq5U3GZtDBMd1xVELZ7yUXptjG7dqJH4DwqTDnEz2NR5hgm3ZExnFq3dXshjaA1UNLL3bCv",
  "key12": "2jWXjhH2fXmNWxnRBfBCUDtRxVzCK9iPje7yUxFXf6yzUWVya1sJET3LbYkrzEedxnSnfyhFoU7Bpc9FZui2RKyi",
  "key13": "43PMGXdR8dHqYh8Fd7V4FT836ngRVqnb3hgjda5t29CNGCJAa1VTHGnRPQMFdoqzGUYsx8EgigxN8Ns5t51hk61n",
  "key14": "5B1SjoevE9AY2GHXLvP1BQGDLWP9GMbWBoCxQp8XHg5J4DkEJagthhizashQDeyiPfDLh8dsZJMi3mphkzvk6qzV",
  "key15": "4rabnCvf5F9FnNEtVnYa9821vmYcJa6GrdQb4mAV9RoNGsUpSL2J31TZU79p8qdZY4rT4NgLYQorU9E1upVkYcQY",
  "key16": "58XB8vPQ4AnbsYBahaZ77Bt3jRvp2NHPrqgKjUiAWcuywWwEmCb4gvj6VrjQbG9iJQLrMJEqgLqAyEAhws95YaWV",
  "key17": "2CS3VmTwH2AjZrKaeawJoTnakoQFJLRzy5GSxzDoqsZDZNCuQgmKX6ggPjjZce3NK5XF9PeYcgxYhzyhwGzUBQut",
  "key18": "4Jiw7TGu9qp4Z79j6UbWGAUzBnNcddzpLBVnzWEUzJwJXr9xkYo2Ge4xV2Mxf18iYvHcBTVB7ZT3F2siooQBkawp",
  "key19": "39H7kEZfNjvhDMDGxCnN62qomKmrPCdJJ4xLwbjX5hPkzZAjZembs2TXkau7qHGH1oZZ9rnUoJcahnYExZLrjTPp",
  "key20": "2WzEq4VGLWjLsZR8pmTEYdcZMMGwKzXR9cguFggQBQ1Ak5eTMY8gTDAb1QDex1MpKh7GAX1aKuHq1zRkxNzBUwEQ",
  "key21": "5Cg65crhD9GYjjYcLP9zfAUHjoqzt4jXM4XqgvFcw7mxDiqWrQWyzZpw9bxuR6wcbgLuKfSe9g8mSBmwaehZUQch",
  "key22": "gGo9Y2bitr7vcpmRrBXtKknjR9CCd5YVVQ8CXYZcK7ME9z2L5N5tE9p43D7RnY3WMcPnQU4ywYDtHbb3btq8oUp",
  "key23": "5PKF6MYM3Lrd5z63rdtFsFWHUVTCxBVN6kyZefdVqxZ12nCCFed4Mg1t98CyuDutnADwZ1CvoxjpQEXRd8JjFEkf",
  "key24": "BRK2ixx2ZZBxeCF1JZknCXqCYqNDakv1UFP2dwACWJaCFpuz7W2jr9gsCHsP4YLofuH5WmFbtQdiYk1d1qPLCnD",
  "key25": "5oDbqXsbxKWpVHVaDeD67HUFiHNFHNFHJv1uNwHnBwQhLq3XcYxhitvJSqpMq6CW4CK9d1R9yEVfxGe2pXYgawuW",
  "key26": "3n3KeX14vbeia23zgnsHtJM1ZCP7SY5wffHM6dfvrgY4gwKq9oBcTM791KDkSreFkTQPeaPw4HBFBLiLD4tceC7S",
  "key27": "2H5rMyN4GTecjB8HTvhMXTUqYv9u54CjiSmb58rCNGnfyTLEBnSpkJiPQLahYGMxEPaeo6DAHoYV3Cb3BbbxW2vZ",
  "key28": "7YxxArueYdKrfTGFohuTvEPPftXnFUxWN9rp2JHW3C4kwbA51zQBDS81qhtePraREygaNmoDoQnAJ5BU9F7UQs3",
  "key29": "2E3QRoB1oAkc2DxxvtEb3bNWXA3d7buJUsSUwKKMrWh469Ck4KhCdSHRLPkQxTx3Ur9gJh1rEbucGD1AXaDs2YYF",
  "key30": "67YRx3Lwr25ZYW5BAKGMJnfbjGFkFAone6Rt3qh8RfXFE3aiPH4yPzm8R2TL5611ifaD1AXt42rLJ4BP7X5sLhTf",
  "key31": "58S8Q1ZCLX9yc4MKWVLS26KuXo43x5iGJ4iqmYBMTfbk14m1g13R8LQBcgeQaNf6VU353zbFesNuCGWMenNwHVVd",
  "key32": "2L3VUkDEQmJ1xdvJxsQMk9u2hJkbMUQp9SYS3SsAiZm2nfPxw9bMXhGDuj9dagoQmogKgakkp2BXBpjJFYEogYuY",
  "key33": "UuGnMWD8iTj9YeuUcaiNXed9FHWwGanTfYSL5cFkPzXyVntkFquRMB1VfhRZ1XVNFTptaGooKt7LaZ7cjb8C7ia"
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
