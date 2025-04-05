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
    "3YuiLeV8kAgWQMgj2GUTWLRCMUiauVSwmDm4qXvnvtLAtNq5FmaGf1t8ooJnWEv6AC5dReyWz4rYEshzqLL2d4cT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hu4zPMzwA7e5mwSXfu6XPy3ZcGuMQpAQY9mNmZc7ADD7Yk4GHFzPaZtW7488vcfeNyfok2Hsb9eGqCoLpP6rHLk",
  "key1": "5GGw8XRbRKLyEJBH6L6aejzXtJutbRN1edUVm1hZCE7iR9cf8bmD3EfuZy7tgNdbDcSCEy4kLJAL98ccWTyJD2Fz",
  "key2": "66mWFCxBRvKuQmew1XHFFS2aZPseu8TtwME1aZaRhHmS1aPD7FVtfNeH9hLVqHPbkzq2QoNp2cYAenNoPpBEMyap",
  "key3": "43KmcP5atY6EJPegSVktzUxa8P1R8Ed2s4hRpRoAgcWZQpAkxuRDa5bCyhBkXsvHkYQB9BWtEnGNYfnttpe6tYXU",
  "key4": "Xe5UdFwMhgDHFURiGAPJBmCoY7LZvEbqYp7Mq3NRmvEit3aVat6zcTZjF8wJpo55uRTNeKzc6HBW2ymvR2eei6Z",
  "key5": "4K4D14tCr1zhGNdnH55xoAKTt9pBBxr98rKhfTGg84ztxp1bPbuQ9vGex4qxGrSoMRwDToCPF5Y1CGA7obLBa7M7",
  "key6": "Sevbpq4osq6rqguec3RdpgRMbVXAt2B4zd3XKKabcuMwxcqx6VY1tcfWAtVLaz2bfHYYfNkxeP3C969Bw9Wuzh8",
  "key7": "X8vZPaip8gPJzvUMz8pmtZHVf76BSb2bZSWFFXomC3AYQBPXqUQaozHeyZGceV3jdzQVPRiJuMTMCWWHRsnEW9s",
  "key8": "3ug3EFvjLxWMhF8MRwyW2ZgpHbgJ4qyWER4WbnXJTwacna5ZXr63j7a4ximqtTghxKKaKAh6af8eCRtYWUZWrfjg",
  "key9": "4a32WLpdNCddrqEjCUNQ5SNKD2HNgvio3N3JM4ocpSqSB1jG1PcoqtpNT8Ed8Lj7RkkN5KqewJuEt3xTW2bVaJbj",
  "key10": "23fJKwhncEtpTL9p9RsKQ6zL6r3w8N6eGKTa4p3hTFEhyp8sPYnx4KghwqvNUmALP5zaVCUpjH7mhBg8JMNfDM3E",
  "key11": "4o13naJEdGTgbFBq73s4C3S2jXDN2g8xq2psLpNV85Qj31FczJJ25pMnxUGL9mpqQ37ZMfVgV623qFbr9PbHcCvC",
  "key12": "2KVmMRg1jZQfgWJYuMesRbBB2YU8GdLEtXrHvyf4VWz834d5bULhf8BzyD7mBLXakSqX7AxBkyP2FqZ8x2zSEGgv",
  "key13": "31Q7tKPsJZ3MQac78pti3QC74Yr2bKUoBoiK2wKkkT4WEZHRsPLjKZ1uivBXdy4UZJQt3K39xCPx9vLsW8CvyuYJ",
  "key14": "3GrTusEFTeHLm4nvyaw7axNrj1xecCMTds6Tn9vK5Dj6ZnQaPwZBtqWEkx9pCx5LaCbNd4nm6kJFuHvsRgM6j8FU",
  "key15": "4WFW74VhfWMeAwyNLH5ABbAPpdVvyGjWTxMsAME8vvUwenG5o47dgiYT8ftRpHy7MykwALGSmyu4ojhHQXFiZc2d",
  "key16": "2F6ed2yVKU3JY5QFfAC3YXTe1DcqmWfUBhS3EcsSQd14zTrSPiupTsC2KdgCSuo7sMgeDYiSJ8twqVuXomfGRR4a",
  "key17": "VRy3RvpXpVJ6S8gQmPyhAnSi3LQtiz9pFP5hDhNwG6DfJXCQi4HYhwi2vSV9oGKU6YLeuxWoHu7FSuK4672jJpV",
  "key18": "xbqidPcLCwFVGBSsVzpmAjKZfBZ6cq89NUQfKKnNVQ1UASsvVrtSewNmVjH7BmDkv6PjR2ojadhQytctx1vwxZu",
  "key19": "9dL4RWBmvqUKCoJrEHXhzbeg2RLMPMkr2Gn2WFB7Ypzs3oirNDLth27m2t5Sc5oqRCkumpqjE2uvoHLG7DhZVXA",
  "key20": "62dhwdF22YwccBEmeJM8P41iDrLHK1SS2jAUhoijUX9vgP5tdLNJz5rKcWXWn9USFxjPyvbM59uFTQ8GaGLd3eA5",
  "key21": "63eUHhqUUsLW5ry3JzvJkFvtZ4UU9d5GcgFyJjem53ZjcHyhYwNYfCxy7UNzKP2nC5mxsA9AcjUkRyTtJzpVee1E",
  "key22": "2wmmdpQ2GPuCQrf7kEJC7mMsHMM1azuLLh22r2uhrC6Wz3irg78LtfjbJSWtR33QXrhTuAf1vNw6W3WWowfWdjY3",
  "key23": "65q9C9BL6mLQ5gQMQT9k3AKifNqAuuZCXmEb5rmvMGzeNzrGHXZyTFCS5t9Y3gZxtHai4aWfLACakyfVruYtuQAF",
  "key24": "3e8MJuEPpmQoTNkFbbQGgXySmddLm7WT6ZspNqY6nqfCrwpRV6ViJA3xV19EXjG7n6UBcRZxeEbdYRun7ixGjYux",
  "key25": "dvjssDBwFRbb8mpPsXiEZMSCkj5sv69dMsWDsXxwFwQWbx4RKSDXSB7zQB9Nf2Qkn8D6DiTWpLwgn2BSDfvGxej",
  "key26": "3HXD4LLDw8txW9MtA82j3JyvDyTLwqq3nq1KmCugWMz3eFZqxTAA34pi893VbqusLBUS262imRfugpqLp7LeKKw"
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
