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
    "3JskgXesV2bao2be6v6eYytBuiDcTs5cSZoyqmg7CizBQCCr7SXQtyvqsw6CzirGdFSxHFhaAhfJZdh7ZHS1mfGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6WxbXLxgU9hsRnFpKXNoyWMy2xNNH2YxNXHy1BGC3J42hWJh3L8xcUbDiFYYa4fyCErKVuHQccnRXWY4deJpQYa",
  "key1": "Pz3P7GUhfYqt8FtdHjrL4ZNz21otsuipyCzqmbpcQB8VAyooqny9A2fSZv1CuigJiExaV1C1Epw6PB1qVbV4ztq",
  "key2": "5Rc17z3Bcz7FBznB3CNUFoCCGiiSDTrHjQwFmPGHEnpcWdq3KLgyTtYtC3ocKyB3Pt4Q6FQqaVsnPV4MTBSjXYsc",
  "key3": "31h1mRo4qLfBzM7JGbkybEp3RyASM38RgBWGPUYM5GFtcxLqfTeGyS8e94WV8P3q6LJy2pWN67M1nPMvs9mXA3x6",
  "key4": "4FHJQq2M8BkPhwTqZN1uD8hBjsHjr571eU6tDMNLUNwqsXapPPCtarrsxRCwgYBTD4n793XyXCKeffMyLTJ1ZK67",
  "key5": "42Bhe2avJUssmDNafX19pqnTW85RjhDcE7sTbcitsWwiH1VfuG3vUhJu1bQJm6SjbB8KdE1ZfUQBm2kovT8Ao3gj",
  "key6": "4NKNS7cYL6ko9ZFe4vKdXvpBcjFCtGQ2B2WTLHK1XN7Z2qCesFXMtnZhnGS49WmruM5wZZwiYcxQxcfMrrUhWjsC",
  "key7": "53F4WzHGtxhbX15tk3y6tkxGombe8uGuKKfpz39HcKexKkTSysWvAiGH8sJNEohAasahe7jL3AXnrK6eKF2JDgL9",
  "key8": "65rGDGdM3eQ5CVprNdgCD2r5j3XfZPDbVFH9oZpLhmaEBhhChnjNbGGo7FAMz7w2Khp6DGoW2aYmfZPPZ77S8H6Y",
  "key9": "3EnY36DyTk5MRihsVnMTxuGnjnAsupUQbyCmBLBmEs6yhFRbVE8mJ9f1KQPWU8piwYMzVYfCu853LZX7DUGipE3y",
  "key10": "2gapo6kSbFbxVgzpqFwiMG92xSogQbisQAFnsg1AEmAPYrGSAizt4tdGsvgmTjnSG5WLy87ZvqabnoPLwQVLcJVu",
  "key11": "5afQdqL1d4jSWP9Wtrc5c7bkpNgvctknoMqGUkUB3rsqurPjb1qsxyZQNSDpPxe3kFqjDm6G9VETNs1YEBURB7p1",
  "key12": "3pfqyC361F3ggyuYesWnmtPKygKpyp9RNJoiJRyYCke3ZTGoN4VVgnRwojZU5SBFypT2SiwAiYHRrWLW6y8oJocE",
  "key13": "4HH78DTAU78WL9zsuXihDqmLAEy8kRxBzs5NossG2KRhwV6WxqyjjGAReJDqLhBpzGEPSt43Z25QDUYy29AWfCvE",
  "key14": "3cWDDMZrUu2QkknVEznvKNME8duWnuudBtgLX4YfJtAXR9qasRB8YKDN73WrjJhGR5iV4DjV2urjSM9sdUuX8TqF",
  "key15": "4g8pC3BLTQRXF1DdjtZxZPiE5vfCNCAxQwp7ppoiZ8vnxWLHS4YJoLnptog1JmX8sWKPhEUBP9e26s5F85KVpUv3",
  "key16": "42ufkff1rCKbDaNHM6m4C3RMSMydrsbEYVWBaNz6dQrMPmBuviZbx6K9dGFBSUhfEQXaX22d7eRCDSzkq4xV7DgF",
  "key17": "5U1VtMFZrdmusyebk1WquNsjqtGyt5e2tYqyemkQYSCTJsnbkTiTYA5HRizEV6bvMWDX2EbYyGW98C637fbegUNj",
  "key18": "4onoek2g2GHCmrEybkGa3UjZkUpPREj3kifqCSbKdA4AZzuXWpVwB3SHRG6bkZ3wYWQohspaK9EFxu5GyS9VjNh4",
  "key19": "2frM5xSB8mgVPH4RyGLCMNzTaipCJmfEJ4iLtRdrQ7zhEfTVjpJwDadSE541oYvSr4PZdxoftTM1CriGPh7Gq8ju",
  "key20": "3am9vuJPLWb6VhghdRHMjzcH3DEjg8iWA55VVNSQ2f6YSe8qqHhRkcg2NVne294aHJNMJYH27V4fP1t8Wk9rYvE4",
  "key21": "gxn6Nzk16dALAabnvstroyM916RxQcg6CxWvbkJotPGeSeWooXM25JQPBSJnd66aFpawAN6biDAJX3z9NzLVbTS",
  "key22": "2bkNCwhUqR1mcGbM9LRZmoSwXu4tjxDH5wzaWQdzKuSQpubaAKcxUC5xTuZmnv3qTjZ1vvJJVTfkXz9k2CgRfACb",
  "key23": "58PS2RnNi9FJub4PTLg5EGrFiF5z42G5u7phk8ufCHzup95C9vrk89RGvmpCe6DmxfUYuSWqtfiD4TPQjs3Pk9uL",
  "key24": "4APH2hB2XNCC8TGgLBMmMhN8ohgBTAUiCnqKDnhQhiDhTQyRafgZQSUAtZrZF32ARTzPoGwbhhvgxjXEJRRogKDL",
  "key25": "2o2rjY85QMNQuHgT4WZLsPSHgMr6oc6RPB2VRybTGsEie6vQbhVfxpBkqanhLAjRAhVp7y6QqWZ3dpNM4npfrzPF",
  "key26": "3ChVoFH6fKkPwu5x5MsaxCSRaidPDpStiGEEcy9dmiaiuGZ8cdALp4oDLxikqjNebdijmbWhnzMX5mMa3J92CF9M"
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
