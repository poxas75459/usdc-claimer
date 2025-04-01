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
    "3TYaAHdJQ6tt37XKyFSXtNMFXD9Xz3Mxu8AyiRgjGLLCFeXhjJN8U7MwccZw5ndavmoJLsAYdmK1nynERubRuXeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e62G8gD2DVMsSr3wbq357dUVPwHfCCtMRCJKNAt1mvY87fujJ8QCQUuyenJz3WGBaYYMW7D2KPT8a7c61aT2fSp",
  "key1": "2q1fpP5jxEbiVP5GLdsGV4GVu8qWabkiq8gy7mhKh3wPTJ28qMG7Jez5wvT9bcfSg12Hn9j2QLroRPAj9DnCPPjX",
  "key2": "3D1HtY7ywqkQ1K3RTDUSd5UsjNR4ZA9AC9Kst6Hc4r66pgtQ4HzkHp2adE5B9EuXZFWowwV4dX8cdDKQxPEWPfJz",
  "key3": "5FxUPUa8vZiMH6BhvZXn14aMpjdPa6sePxz8zuSEAaLTyC1z31yAiQMt3K69s33k2GhoRfg1NkX1gA9AwCWK8Jmg",
  "key4": "2rjqQAD26ZnR5z21pQ4wkDinZKSrupeKMd8jhnSzvhFxvwrwFAVigbcuGReUfnvBShh1RRfDUg1ZmUS6FNGyAWGu",
  "key5": "2Cn4pPf5VDir7q3VKXELTYhyVw5D1qP2dSMkE5b3pQZ4wfrdugjGno4jyXdmqpJBKdrki8MFii3wBVgUp2quwJYL",
  "key6": "3bT7pDGzSf13LnUrcA8rCD52hYntkMnSZinc77Q7BhHsDJzDCTV9YrxGzWJn4BVNo61UFXmv7qD2KCAAZq3bVMQD",
  "key7": "4qLoMYnu2U8rUqgA4yDEyhzY6mSC9K9AbkT647TvcbYp1NvaRj4UwBxYnbKaEyVtvSWYrXQX16zN6g5P9ZyN56zA",
  "key8": "Y5o66pEjXWQAKE7f1UFjVu32VKNGZPjweNHkKkwbvpqsZoWb2tYdgXXJyViKkSsemo2enE7i3Mzw4MyGF2pHC2x",
  "key9": "5fftX11pVqtvStEDg1Xcop46abhhWgHZA8QQ3TWHbox2sDHPviKpEEFDyqpzC6wkM1KS17DnXUkdav1NsbVhfJzq",
  "key10": "Uq9Lj3pDHCukRB6m367Z7ZbbL4582deXJ1yF8hcsRautenMRJYWuU4nRAL5ZfHsmvoDaKBhkdU6CfaqL5CroLSd",
  "key11": "47SCnEddemi5n1hdMjHWAnmd8sodo8Hb6RpBaETNxibaoK5uzGKLhGmqR8pP3pyjNymovBJmNQAcrZSt1xX4XHWf",
  "key12": "2SjSo8NSpX9KC3jcNhwuEbDJh4DnBN1CbevGYeNRSsiM6dKps5o7Le6XCJbByySpYpjKChwHdXyTQ7ETtjDho4W4",
  "key13": "4n6wwBCjgu85kQKyUG32hU4QWj2nGewbceo4kvUNEqt9bDmp7mm5yrhApNSDLfGDfHoeHn8DoroSNBP6fFGVPRs9",
  "key14": "4iPsi1h9hGUdDAGVu1upNvVDcGSH33W8dr6fc3aWbDzN4v9m6woV2e2gdLZMY6cAy5aZa8TfrAR5dyr89PCzGD7N",
  "key15": "4rPeEsFEE3yL1sA1krqoiPkMh8dvWCzsiTo3KSbR9VJjUTAXmva6oM9yvxyqgDgt7YUpkmfsWSN2X2k7j5UXyDoV",
  "key16": "41zBbZx3W6HLW9xZcUc3jc8ccbDrvT2EN5ztuvKB4Hh6AE2yjU7w8GaGtWo29vTcVn9bddiCjDB7XEPYLG9Dzfgm",
  "key17": "32c3ZNkqdYT8SYAiQBNvjUKVpVpaBJkzBMXQRcdbjHEfT7F89B4vVxPZ99rt8PpQmCtCkXjezv8ZMNhPGof4ULvj",
  "key18": "2qsubdeqRTJhxEAJ5LG1EMEGBed536bMGikhSJ4MxbrYVDuQeLYzpyu3SwMiPSWbcZonXA8g8CZuV3z2aYxnCVd",
  "key19": "5M6o4SijD7fjtb5PFA39pNxgohYS4en6d2u7dSmzTjkjgiT5wsc6bQnU4ibnZswVVUcEiphjNkV3V9oWjWYrL15X",
  "key20": "5zZin9FxLWLvhhvytPgW4A3Ca445fujDGNgxNXexa8mQYdu5qK9wqDYEEcaKvN3AHaZsjmsA9HsvdafYzUwmPyKh",
  "key21": "3pvczgDbFXy2aRqvJsc7NSMGr9q7wcj7eczEMsuK8At5ivfmhdbzCdtHrk86zEMKp6taE3Dshsf4GAbaicvsrxj5",
  "key22": "4GEN9TBDGj8h7891TvAsFzX8p3Es7wHGwr2anomrLmaDiQp3raN2wa3n7MTHsKcy6NkoTBzDJFHxSmeEWeh7jgzy",
  "key23": "5xNDSLt9CgZvx4GyF84qNRVLhsvvCCEjRBkE7zGUVkgKUtBSDP3rfdFHsox9qMwvXRRCP5cjeJbgVHnus6m51KD3",
  "key24": "32SoFyB7sbbMbUaZiTZVUvy6brjuRacP9jDwUmgWWUFM88J7CY39eE7BSy6ojidCpMGRvXHmtLGYh6y5u9Uzu8hb",
  "key25": "wf22tpH2EsjeWUncVSAP5g1Wq48GX55SVQYFEXqKGmLXJ1z6S7i9GE1XhHpmyE2rVHwwkcn81VtUGYVZednLk2b",
  "key26": "2oUmJ5HncTrpLbKssc13eW7HmnWKsFRvajMrZipCzFpbcJTo7dCMuAx3t1RBT1wEJR85Zr7LKcuM3vEy1gAy1cRy"
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
