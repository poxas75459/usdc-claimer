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
    "K8TgrRrC5UBVjmaxPna4y2Qdt8m6Kiw9aBXUpR9bqDThWiLcEwMGToWEF9ehDmHmEhNEC1BZoPQ5DuxWw4X9Kz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b4dU85DeDjxUKgUjByaD5g63BobMGaM1iLBc2fjwUFT5LYWbE4kAuKwLGhGzBnWzdib8zLde5L84XrL27MoiVuo",
  "key1": "2oAoPMkWmEhNFs2ZYdRb4j9KUC5u7exbomMT7xbHk2J7Sb6p7sx5uR5hfCALHiVRoaSuyBbFhjoM3inTJPrQ49xB",
  "key2": "4E8vDz72dyX5WbKQknJKhhGtZcHvW3ayuqAQTUEVP56RNoCFWc6UaK7buYTburLjthsDLGyS6mthUg8vd69Huwjp",
  "key3": "3kxfx7XBvmvD6DmvrhEz3uzuUsstNWbxtAQ7GX2uuz29ejF7hJQTp66KQdUhgRxnZZPcS8xUokk7rZrAmiBhcRFb",
  "key4": "obyd862sTh3UvA3qPHbhpPAEUsccUYa7h1m8uhfm374m6LpxR26dNvNqRBdxHThcwUKU2X9SS1CGtRc8co25Mtu",
  "key5": "2oY2veNkC6wsdZehRdpMNEy1AVdzLesTF5tTQWMj7wGh7Ft15FGAyc27c9zmywKFv6EUySpQNsBMUK1KSrKSnPuP",
  "key6": "mdM4zKL2Mz7mf7dyYWNe6XYUUbjiV3cKsTtFGfYdDKdNMmqct1Lwz4wdQPcdCRddv5552HAXybT9fdjh6c56ueb",
  "key7": "4fKHZPtFU96TE6mNVeibxxA2Zn7ii6U3h19E4ScEyMKv2qTLwsaYm6BxS7r3AE6pUir7mD2JRFCPWLSf613thenu",
  "key8": "bC5DJGWiL6uKiZoU84Va8x34WE1D41s1cSNw1bD7VgmKYJgkXr1QdXrHruMUMMvZJx6hcLLJvAWSVHGP9YQEC2V",
  "key9": "67Z2pGQyZNVPRzagwopNEK69bPBAQQCeNGCC7PnhS7nPxGNATmeX8uFPDLwFKZjYCzEgXqxBrriZVqQn7oeys38B",
  "key10": "5QnmfjDWw2MhAZRmXT31v4EdDBsVJj97iNTJt1YWJy6JD5ZwhbYVJfaDnnsaHbWmBFc9qyHw49WYTocbG8UPv4T8",
  "key11": "3pQhKwQ1tSjjtSTJzhaKvQMLxo7gxinwpGCkTqS4DjeiHnt1gHqMoZDTcJnBstfM9QNKaqSg166YuBqMEkDafBWZ",
  "key12": "48ukGKt3xboYLmBPoD6xSYpxgQqXX8cF4FSwRZRXvBZCsgDHYQGBwREbXHGnSACZZGMTZubKdw2utpjcESi5Ry4h",
  "key13": "5d9USdutzK8sziRFwEMPyfuue2aWKscSS11VAr3ptGhjwp5HCcHems4YzZyuJ7gDAPAJv1bQCPUqFPyp1Vwn4SLC",
  "key14": "65oHob9zcS3CssZvtXTCampvPLEsLcuv9hU3M4aTZEzrfQrvT6i9cVWPFLnpugLKcYQiwwUfuYzvjJnuCy7uoZR2",
  "key15": "HwLrycZHPjahnKoSYQu2MtKpwoTAtMTJ9hxzJrarivcMYVkaAygeUCz135RaAMCkeJBxbB7RQQ3uZ8rWh2bS9zf",
  "key16": "5VYwTpWggZS8GquUoCHggZk7szvhbS4b6iKUBbWdtNznPt2kpogEEGRRpFypaeohssjh9AnjnwjuZTQe6DXKL7Up",
  "key17": "31H185q3Uj1xXgYf19PcMqVcn4DpRDkqmT6e4jo3NvXRgf3vnUnn5zErPLNhziRiLZ4hk57A3dcjaAbAnajAMjJX",
  "key18": "66XiFK5AZ8qzQLkLddnEXF5inVUpjAe3qSFEi5ukhJ2LieAgCSkeZxqAWXhpB4qFaSFx7PfFFQ8KfADHYNXKv8cF",
  "key19": "48C9FuWjs9JbN8wMYZW3X8izUyGPTZQVxqhAVzrcmTyTuk9c4LuPBXbyRJDK7QtcPV9jPubFsWT5yiiUhxQYhi74",
  "key20": "3A5kmYZGxPNgWMhcBQuCjLPFrMjomZ7KCkhUYNxuauNPbssRrCszmmn28RdEhGwY3CYPSy9tcJa2WRiUvc8MXXVi",
  "key21": "62UDyzE6JiMkEYiuAeoGDCjgpBb5LY59ouvYn7HTU5N3HDYxtuKTNYpv3x2CJo4YuwQ192WfowsqU4J8uZXy7YFX",
  "key22": "EsXpekN3B6TCMGeJ8C8BnP5YLyPQ4GVAG9gPTDys7ybKHtRptm4VmFxb8hbVB1aaSnFngx3dp8mZVJnp1dkQFGZ",
  "key23": "5D7eRR4ivkxbnrBDULEt42jcV2uumJU9XuyicHwzF4t2LcEx8kaGpr3wiC5YPwJm93HAmRXX4fMhEpANzMgJbmf",
  "key24": "2bqshpf1nM4EqBm1bHkSp9a2GnsnYYKHFANhm7TPvPPeWxG2mDQk5ToAnxmGT9r8Nk9aaRdh8XewgUnGFvCvKaLL",
  "key25": "rzvJjtP4d3BXgRPX41Lcqer1V4WcFPPr7xmxfQJ7vFMN8h8nTyZcrkyDtRgotGLNJgx8j9NfG7xdPZoPBpz1NLF",
  "key26": "3qrmsYYfEg1HyuDuuETDtpdwwaEtyNkBsmUoNdfjbrgiztuiTcg2Ab7UHifJEauwc68u6g2wUhqLFiP9y3hZFAin"
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
