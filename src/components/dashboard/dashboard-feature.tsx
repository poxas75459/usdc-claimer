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
    "4F15AhyUVpAmA4VYX4oAr4oT7jFAE8ajmomH22wphKZqgMcnKsGx1k5st28pL4JmAd1FfWR1dzfvDfsxyzygFGYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y3ZxftWdEATp7ffkYye2oLaADEHjoByrf4cb77TZPaUcuf5VdzgaW5xtZvYwTBmPQuRKhJRRJaM66WnMsJHgdAx",
  "key1": "324iCjQ1VvshZSx3kKQvTySp85mTRrBkFVgFJYra1PHSDECmx4bF7YfmAoL1xb6jNSz7kGKimkr3kLXEyD6rcK6Y",
  "key2": "2XqcRc7pg1gtcAujg9V6pXrNpt8WYGGVcWLfyCkhHcDmqaf71YNTCFcPCeheaiK4RAe7HATpg7Q59MUQoaAUaeJ4",
  "key3": "5ca9uV6SXEd8t2j2n7e5LjLA8LryyLeLL65gNi7JUsJL7VTUyKQnTDW9gH6A62QoGmDnzirJ63gtebbpFdkqB7t8",
  "key4": "52hP2pRz8mFVKtS1asRAJU6vdvVpMyfc3gSG4MwE4zU3oXD4igKRfMwwSovzpMwM7WLDtznu2ZnS7t9rQqUXUrwB",
  "key5": "2PrZMQGBzNnyr2s53XvV8ANYYgpsj3WxdyLHVMPRfzV2YQRK1MN3tBesv1jXMaZE2N9XTE7nqYoeQ7HcqEm1ENqx",
  "key6": "ZfhtdFQTvEugGjtmv8GRY2h3Y2iHyx2ZgqsazcPcWr7oZ8DGuX2gvWsHDRHE5MUUmr6bhLw1va6ycA15XgUAtrp",
  "key7": "3SDweP8exveZj3DEkukDXeq1a1me6i1Ksyj6TDt2fBHhjtE6eBC6S36dczvGwCB7ujnBn55grquxTkFEyWUzyUsx",
  "key8": "57DLcLDxygJTYX1NAEci2DE969CoUXb1KhYT1yWqQfVuNKwTJ3uyvmAVT2J7MzV6PRfNTESSMowDhioDXi2L4f43",
  "key9": "55QRqEgiMacRURL9kTTCkoZHEKgxJSAP3bfqjF4Zs8h866SStreqvGKEwQAFcmGDYwSk5GMsCWK4X6TQABZqEPj7",
  "key10": "3NP1z7vZFoQ31Zy1Zk79pVHSNTYXCD6vL8uZxxEPbgDzxe6sQrwPPWrHjX2FA4PZLjb2AX2ZCDPzLTMzM3WBCi3r",
  "key11": "5Y1nc2Rfj2fLBsjXwBcj94k73BkdRoa4BRGCLhKfopxxDrVqAAzCushJjRd3d1npcEX5bTeea4Ecy6syEygUarVG",
  "key12": "5L2BUXgdhdmcEQDQXWfKgnD7a37D9FsLPxMxmuuztFH9EAbmXmZ7a7Z3uh8QU98nSLKvHFTCi3cABoF4Bw3UQqw7",
  "key13": "2AureeHFmgvDWhhND16jo8hRjX9HBUknZ2MeimjHBgF4DeqrnhdNFnMMUr6yM7ELVVuMb8fLHbuaxfQrmc19vsiY",
  "key14": "3BXuFim41Xst5Lqf8tzyTdp812ogzXeJ2X7w1iL6SZgXrwbiwLRtYYuW1z4iNhMwjBmWsSzxAmJDjmz3y8aLqLxu",
  "key15": "4ghsXpe12kSAUoWKKsoqGFmpE5nFrsAHki2HmpSWojAnTQSEHNcBYKjFVMzdtMka3UiHV8W8wfMF8JZRe7dU12EV",
  "key16": "2vXMiHqnUL5qaB6fCyctLvrraBTt1q93NJ2yjjFmb4hkchoA5knM6sa43fGkvdWtEvCNDHNcDZjxgydjXaB54TSF",
  "key17": "5FnR8S2wWbJtgeAbvjoBPeMabkndMnKCdPk6fRRMmo92sVaXgwx7KJrkzcxsrPZ8drb8Kmc28WPh4fgAVPJW3qz9",
  "key18": "57nsTDRc1dL5NL6HfehuakYJHQHmSUpxECxu1fPMsmxrFNLkchmhQMkkRVazfpYAz22pBZp9tT1VzRHoubK8TDTE",
  "key19": "39v71g3sow8obUAG1R6QVNjtP4WjP4mb2Jw99vprPmDidNQjSE4h9XC7uvJbHsYt89rTSKwKK9LvrW6r7M82vKvU",
  "key20": "5G4i92YLypxC5fTZ6yY9f11FZEnt53WiMDGtXcx84gKiTfyp82jshjNv2VL44wFDwtKsqWJUXFVcqS8w66X7xqSB",
  "key21": "32FBfNcPkvprPG6DkqQ1bkYs1shWdwiWmphotZVaZjs1EcdtsRSGqP4qyCqXjCDn6SwjtPEWvKKvLh53fYbgpudr",
  "key22": "4pVJTcQh5GqgVwLv75v5F6e2U6F1R3x3rPvLhPRvcvmRmvBuf7s1MpFHwHWYpV65qyzNDdMvJ7ms9Ewe4pLuQWqC",
  "key23": "3gm9YAUCLN6TpwYeEX3NyzP2PWMXo2aG5anE3sf8bTGs4Zu8FYuU7uEL4LUDGPM76EEAUMqTswutV9ufbzPzpg9Y",
  "key24": "5v28jbrLo8qpFiqihV43SRMyCdWX2Zj34QfBgLc9LAW9qU77rsQeDHexpGybxUsc7sPbz4UY5jcaQayuWKGxEBFW"
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
