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
    "3wqGkSTP2BNBtf2C2Bj34Ly5Eoqeb56PKLsqoLMfkNxMQA31buybvwGvUrQ6kCdbjFnFNdM7WEjNjR8oG7HHNmTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "15Xaoj7bCiUfw9i33GesUKowWVCPt6rFEVWdvxRMg3LKNEU8fjXcyyNguTxEfKK8n8LLSvb39Zh8dvdBmbujDgc",
  "key1": "dqRqdHrzSiJrYXSnUpNTg2knu588kfxR77cYrewgnvV9bN5QvSNkkCtefpi44nogJ2nDuuu4QAewnQUVVGKLYF8",
  "key2": "4TQUmAP4VEUHgpvxv48C9nUAp3zFk1ywLWaE3UMYeDATKrVBHjXXSxaUgD1hjbymMhSaabpVUBm8CH2o3Nb4jA4u",
  "key3": "514PLTdAfMVfxF5a4JvGaBRBSuC2J2SnhKNonvxR5sMv4vanNGDZXDnS3zTWkvDqSQjzhtfShMwpsNNcnBg3Xm6x",
  "key4": "3Es9cwaAd1tQgsEUSkP6xyqPNueSww5CMgnux9j1WR5C4Btkzjo2k4ZbukvLmmrpfe9HnEjzZAhA1s3jJea3y3Lo",
  "key5": "29tXXCT4WqgEN6JVmZoAn2doSeuirmAvYuRUcCqiBUe8Mv4DyPNbJnCjrZpKhGXAVaksiqzyVt8QkhnnkSU5RpNn",
  "key6": "3NkF5gSLhLcyEe6YiVnVqFen3fHdDdeoEisKDfZxxDhdqEUdZj5Eo4BKWmEAiHcWgb6d5n7rRS5kiVmsBG59E3q",
  "key7": "66R736mebqCeCrgqhKyuR8ExfQxu23JzLVC8XiWqCSBBKcjYXx5q8YpL7UR7XSNQ3QCzX5whdLzXWsFWPHVXgspx",
  "key8": "3299TcyMq8v1mAgRKvFfeU3UKVjrCkR3eq7QYKYLjeesp9mV7rD6UHkDx55zgsVWK6uSmHhE5snZbqsVfJ7csRnY",
  "key9": "5crHwD4KvS3i6r23vaPJaQm5z4bEd6ujfFiTN93qMypRrGxqR6QqnZsPEy89kegPzCGCGLLvB8Mpdc35SkvRyDLJ",
  "key10": "5GQXcNWANW4WUVvzmuQ2ek69XSFJeKsevYWGzaqc8y96HHyjXFeFZVnWUZ9g71Fe2hSLHFS6Tu1UZMCytoKQm367",
  "key11": "44TqESoHFqKjvX1NNp4bGh2ugvHP4EARYHZw42RVjbprbWzyX3sXz9AM1MppmYxLyWewx6c4LNi2jaZHNnZhmZVN",
  "key12": "2jZtkhjg8ivVBesdguypAPnNwT35FWrcR4sV4Zr64CgaNazKRy1D9U3AAJbnCSYdYaNxE94ZYhkjE5CL4GBWRDs4",
  "key13": "66tCuwgTKEDUowwpB9asYfgBPTZdXVojymvW83Zi59ywLfCyPKoZiUzLUitxtA3bNDSXYk3kmYSLyoDm5NWdYaVj",
  "key14": "tCFJ8PBb67D2XA5nGQY1HFwpUd9s4etQN33mxbTjWvFq9G23VGJJRCNbiw6Y1U1jHFoCLLkFNjG1sVtcDBtm7YK",
  "key15": "RdWnHYLZG6Zu6oSL1idxy6WGx4tqgZx5NFXfvf3rPRUsNmpQFKTEwH756CNzrAiueCn44Rswx21QyjKfNMPCyxY",
  "key16": "4z8okFvGAuz9x9QJgWsrSF1qyADuFH15kvBsGodPFq2ciF9U52gxo5knuw43dyFvg8cEkPGi4ShXbzuFBwX8unHZ",
  "key17": "4RCGzuFVB1aEny8xagS6i1DPnjDtgsBZJtSNUCTWdsErpJYbWjVPyyQZ8YUHVerPk9c6yFQdnzEneu479AUY9Q1D",
  "key18": "65A2pP3gf5jviYZ2Kv1SYT8jztzdfcGZc3V27keA7g8hcxHoEC1z2VoU1n5qHmJE3D3KrBEGtZSfMu4Ma1YxNYRc",
  "key19": "4euZEoCBMhD8vKnKzguJGGZXiY7xrHq7q5HpGdR1TLVbWkRu8FrRpwLT5NRiiasnQnivSGTHwMXSPLmD2UJ48oWA",
  "key20": "3fYFkJ2RcA8GEhkW67XdRrfVS3yv7weWZ4a32HQbFKkjZGymugNYoMyoBpFttoiPyYj7V23Bt1Be76iKzEECm4Ea",
  "key21": "33XXSUk9CKxkFXKysYtKGp3vbpkUmqqkWH2BkwKoLaXYv2rnjVL1KfRtPJQEHWFmDSvVm535oB3f8FS9JBGsuNTY",
  "key22": "52FYJghGBPKWStLWsNw7JpxeYHCS7qg54KBB6NZYhikEe2Uq3uBDEhUumL49Fz4MrbNgi3aSZ81G6qDaijiuUprq",
  "key23": "48BF27qbyzmBvFGT4Lhn4UB7d69fgwTct65XoJv6TTe4ExBDFjsas3Z4HYWbNXEppCcyhSQyt8npvmv2YLsr6VtL",
  "key24": "34a3PcJXQXw3w86Gu4z5KLEDpDoC3xFizTJYSveYUSXKMyH5gVDZn9AHpGoA2n4pRpK6gQdeAQwsphgfxpGti5yd",
  "key25": "3R3pn29WWEK1HGgFF9JSvDTGQSfztP5uKhsfaf3KZjE8j19Z953h8oACY69ypV99StcHDcRe4QpwgwJgCG4HdaKA",
  "key26": "4B9KoZvt9hRoF9PFrcrog2MBaJ4Zg1XNM4QmhSd6LsSCzr5fYHcyTZCMAS2q3RURGYyq4g9mqC9V2Ge6Uyc8aEwS"
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
