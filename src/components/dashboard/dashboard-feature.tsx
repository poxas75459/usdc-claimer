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
    "2LGtMSFhg9MnQY8cn3H7pvQc2brx2AF15d8U8urcWTZ4SDLr4PAS2Z6GnzH6GV6vTxtiPL9oL99rUbP4nbkbYU7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXG446kWsZt1w1VFCzUkrSCFfX1hLGRbV26r2PHeHrd2asMqwquGsUFYuWMrjAdxApnyd11KacXPssTmjzy6ENc",
  "key1": "2PqxMef8tLabwojBt8dPq6VbpVky6K559zL55iu8CueL6EcnkkGDeGS1vRKVAYEc1aspMpYBcWZ3R4Xa6mhThZDW",
  "key2": "4Yvb3c3dJQPjbKWgoAxLPz6bLZ7b3AXmvuMyg2LQsCNaHzY9jyrxQ9uLcpnB1vFoqS679eVyCPwS5NW4rFSiNtc8",
  "key3": "4L12y8JbSLvPLTCkLBdpLQ7jYvJKiofqFEDQDBmKstqcDixUAnawcdM2wMZrXMmqK8e3eFrERDKwH1fp2ZUviR16",
  "key4": "9rJ8FAMAGtJNqUuGDFVgqKkuvP1WfQreR11y5gdatJQWgqXPoseXehvsKB7Dq7j5mBJtK9inNAcP2pCtisyZBrr",
  "key5": "4qjjK2XUTMr3edxxfhdFmfyKbVv14tq7nLP1hT8zCmvjwCNvN2EssFLVRF1MgMDc8V8oqB4He2oNpLfyGcGy7Z7t",
  "key6": "2tWX1nj3mnZgXobDBUp1xESdWw3UX6czjsmet4ESseaRdK2jsfYhBq4kcnQrs8hTCVarCriqwrH7bDZrs8BSFLXV",
  "key7": "2mRmr7yEUXB376kcndNzXCYfiwYEYqauMRNsyXaKMt9xjk8SXRQWAaJJGi23V2yjLZwQAAYGiYhsr32tVKdEZuii",
  "key8": "46VoVaWh8iowuD6RVVVpmewmUxwNkywCFMgkT8Q21wzVU8HY1Yn1pY8sRYYLjVu2jTzp7qDeKnPzaDcQ3CZTYtPP",
  "key9": "2zoU2jiUxtGLPzMwP1md7NV2JNzo8h2MyysxJP4hcK4yBjnXMJngb8hte5aQZm28fRd8hQuGWp52pdyTzREqSQbb",
  "key10": "52bySHMux7xJPdu5ZUSrC8co3m53WHtDdhsy3N2tqJDyHrrhK2P35HfajkBfuBAofbeS7D2cS5cM8N8spHK3TF4L",
  "key11": "3roKjxVqd1RsUQmLru717pTU77xobTrJBUpRby274ng4WRWLmVUg3gHNjLuwQPS5KdU4ySCYDRUBw1TnCxbMJttU",
  "key12": "4gsL9iKTBafsSeJB4CcwyrQzmGK7EtWp5Wsjr2VRjdpJm4TLyGCt3MFiRJ3gyF5xnB26ZJQRDorVHjUEc4yeWRmc",
  "key13": "2z8kW73MGMsubQJ3xNVqxy1m9HJ2DPs4S2xdjKVC3zB19yeEFDJSKJsRNQUzFTGDcAJSferiBPuZoxwuEHawUGaK",
  "key14": "4t9DRWVXMZTzHYN9wFXodiXd3TWhJtrhNonFWhPv61nD8oo1HPqX4v8cijY4FgNYFQEVyNv7bGyyLyTN9tPXS7aW",
  "key15": "3tN41C5DeS9nwGpY4Einm1MsTfMJMEG71ZmnCPp8f4zifkM3PWjU5LEyqWwbecTuhrkxJRZzG7qx6Hy5sRtjz4pq",
  "key16": "4kQTzS35zubi4TUDX3koLsfcVJkkFtZZ6hBUnJopqffNLAZX8QwZKtTMTrsMRK1YTm3nmiEJvZAvfNJSqP1Y6Jxe",
  "key17": "2bS8kC1TWKTHvmy8zrSFQtJojGzbLsougUGrJiKasRbtu2V7zb4waK4oWE3vfqQ5rixJdeU52n1RW1WR77QeHULq",
  "key18": "5GRZUXKck1XJ7APjJP4yTRQLkJpV6GuVTbuPhKEArmdPsShsR28ksuuBcgSojXcHq5LSFZ6WDWKX35mVs6YoeFNL",
  "key19": "3QtYag6xwg1KnrRK6rntiAypKxH4Kdb6tpKPmS6qT3rLHfYLg1hKYn2zKuSVdPZwP9Lt4zDczGxgnmMTZDUiB3ED",
  "key20": "39cU8fqmqYmKM8zUWYWx9Zp1NfwFBpnrF2q1VNQyr2ukLT7sTJZcifv2CXqcTJ6bkizSsNAwhUaHVi82b5AtncgE",
  "key21": "124ESdDRbpxzee9y575wvd6KJrk38QhSHFbbE8hZ2xYHasjNP6jbTSuB1KZ2MS3p8Daz8ZqyTYdvJJe9wLdoa6yS",
  "key22": "49SLiduMif8JhSmupihR6ZReqPCDZgxuQq3PwMnEqRDE43SUy49cVqdEzffSHfCgUMyTwURtZgdMEw6rXimAgoa9",
  "key23": "51F8sDqNtJfSx1Q1WPtbzPCh313zTNo7U3Uib2on2qB7zEeU6pM5iA2W9tZgWxCRwQJp37GUuLt4s1dhy2bZiKZ5",
  "key24": "4FwUysiTNj3m8tEbdRnELWSKVF6fBgdqZQ5GMJcmuKMWdPxuJVhKX6P61xeBUoaBNx2NTgMWfWW3AkBp733soeT3"
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
