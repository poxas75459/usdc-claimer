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
    "3pjp56Dts7tmewav8KDDYkor3dS9Nuw7sn8UtLRKdAb6fW2xrwhGKNNr2TcAyjc9sxVAV9EUv6GVT2LwVj4tL5Dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WT6Vyq2xtkjkqyAUZPuAUe91ETnUg4N2nbpdAR7mUxdfC1jaHQb9KNHCrjVV1RKskEZ7AA4q5NB4AUEeyun25eT",
  "key1": "3rjtiSqCYkzx3WUbowJBQ6n2NCPSJHgEQxtxyx5PqWQcgjGJFag6KijnMUbXXZf4jCfPh28eipKk9eDPD2o46iCB",
  "key2": "RuV7VFJ26jyodQV7vuRe18jfdkjMMtb9eE53YYe8sd5XHYDZ1nFpiAFrkhbncomrRs8J3YtnFeeADiVo3puJoha",
  "key3": "3ETMTA7WcpPnrZrYtLd9wytsLpdGobgDasgcHVMgNd3X4atyNuQDds2GyH26fnS8JwQ7t1pwwmsSHRqVkH25PYpE",
  "key4": "5qUBM65ar8i9vReMsLa98SBGPqzqMp89fuDvGTdArr5LZkAfa1zqS6RehnKgvfNysJP6NTCAucAtzeWYZ8sm6A2y",
  "key5": "3ZA8NoTDiVLF443XJNe253K3HkCwvKVtPu8d3V2AfW7y47eo5D7C2LjNc9dymN75txPTEfJZyo2jEoeDs8wUW6HN",
  "key6": "69qGeZAzD982ArAGYYKQA5e6gHWWAe5CPXTbkLh53GBLS3GdFvkqBJCwi8Y75Dwkdt3BBiGXpc25zva7sYBeABs",
  "key7": "tGRQhd2AaqgARhygqgLfL82sb3VsnpUJRfued8F9DxTkEsWFG1dYunddBpEbSVS4L9ARE44NWSWhBqWr8V53BR5",
  "key8": "4QTfcPmA89nomXHPeCD5Hk3zcQ2pmQXYRTx1DANbHFfKHWNvRYNaAZqpcaB17mzhvaCVWXbfAog5RHixYFrwdXDe",
  "key9": "2Vrn6rNzyx4jhX5DHKhbv3MYwYDbX3bvS6YnrNPFbY9jiTEpw74Bu8qG179TdopPkhGNG4KsujMJAz2DY1M5wToC",
  "key10": "251ur5W42MRhvPbidDEDytUUwBM7fjSD92dJ2jqtSJRtnUrKNWWGqqwin7aX2JKbeJSJp4QYiPgoa94ft8s6bMgz",
  "key11": "2953bH1rUKdLNaZaJHFx5BJpcQTxjJUGvpZLpLTEDy7q38J3D4C4SXe5km79CpHfWXVc5T3jLGoyfwE27BpzZk3E",
  "key12": "33HcNmY3qVWvFSQadNWwXH9Tc3xA5qAxF2EVfdyCrHMR4L9o9xEe6d25F3raJ1xZ2dCiSGjvquXMRTjGrrtTfQyL",
  "key13": "4fqaWRKPvGiCQfc71LzcW4jETdCJbsnLMyL2VFr639K2uwJMJEBWCLDDQewdzquc2yb26XzC5YTbnrdANpH1pVNg",
  "key14": "3Wrd4ezJrPvxFgFvFMG6XtNwvHmTCcUGTurSnbT265ExjkAuHmv5ZdUnU83gSmNQxDwW52fyD9XPXCidpZsS1seF",
  "key15": "4juaJKuH6ehicGDmn6ore4fFUwCLrw5Rvf4Bu8ZGKj3uXfKrAuomWYpkGzMtAH8XBKghEd7BqPCAXKs2oBagLaeS",
  "key16": "W9eigKfDP3b6Vq1zRcqXn447hUgTg7HRLbcdJSoiLSTHi3hwfhHhy2KKQ9CM3essDnB1KPVUisRHaovHqrkG8VC",
  "key17": "frKb2rMFKfd6uxrzjv1xFttWB3DT6Q7Zrtgu7dVs1FMooJ7DJc2pDbov5weEbKMnm7joRzWbpNPK5DPv53b6D94",
  "key18": "5cr9tPC1dv9pgAxScDdDcHAHi283E8gUfyVMNnXPekY2ovqS3ssYxjoUcPScWZ6GhvBntH28RCRTMqXUrLWnBpU6",
  "key19": "2mJKrPQdxGjFK96vT8LW9k1MQjqyWHAd3kbfYvV1ZLcViyRj2tF2ZgnRyjUZv2WMUt5nK8Hqf2DFzs5U1XSn3Bqy",
  "key20": "kYfqLwJSLFzGpshXse6LbRa5Xu9xNH1GbH4roqM62mpJsZ7KRa5c5gwC6rTmNh9tcSdToNARk874T4M9BgCTgXV",
  "key21": "28VGjK8KvprbRXGKPvKWPUD9tixvGn9yX1Z7xRZqdHotHpvxK1wAQGudm9LiZP732v7cXLNWQ65Bozxi7UT7hy3b",
  "key22": "33JMv8vPxPNY9vU9A1DvXkwMZuiuEJRuSePcbVr1RhroRsgR6JHenGKNfLGbxPdjYW7pYnBSzozxteze33keorBf",
  "key23": "57RSbPLUuwrFFd8oMVUztbiYDwpKpaWsyJxom8voQBcCoPobYSyB4ycCTVMS9iedisZstws3fBBxTxAd9uSx8CBp",
  "key24": "54ZKor6QsqPh1RUEndQRfVpCkLpqyxMxKwWpuP6GVegGawk51fmUxdYMBgKKSsrzMFzLev9o5FSMFDKNwRojzuwx",
  "key25": "28qiPsKY2YcjjNbC3SKvLgxhU2QH8KkisLLwhv9P435pwkVychnH3SovBpYqUNVKcXVsJSjG6BKDz49rfAEfry82",
  "key26": "65QpAjKaxu2zvhdHdLJarDdzpty2ggA27TMKHLVdgmLv1QrrhZhEKWHASDfgEaG8J33Ee3KHE17qiMkPRfg8WpPv"
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
