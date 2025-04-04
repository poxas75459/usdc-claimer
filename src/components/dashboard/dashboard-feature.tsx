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
    "4UTf1KxF8eec3PmmXidoMV5MZyp6KdTakcB2pT1pRERaRTPrsuhYs5AYuPUQ2hbhAS3hBe3UMYEvJrugwwuiJHp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HYUU9GbUzM6WEeWxoEUVmkjxuC2v1LtjFF1XeR6KtztFfpjMPFapXCDiiehRK7mcwJd8Mu1RsPPYiSDhN2qqxjA",
  "key1": "4rZgVEu1kMvffx9rApLdELtAV1BfULWtQHnykQpZ5PcbCbEtPW7P6BK999KdFdhE5D5CvvzTzAkT2DUW27GNK51u",
  "key2": "5dkzzkdqCCcEAG41Xoim62UUj3kSyaXGsLaDoKYYT2VFnaC27WizPmFvSeFZPorZFfB1CgNZYBXu6KPh41oxuK5J",
  "key3": "q3bd4gVnGgV2a36jdacgtMQNLnfQSiBbYvLTuCWgr315ZSPx6qr1RNYdCw8p7QxuHht5rdHxuWyqdHPkRDcPxPr",
  "key4": "2qAMzhC19xz8EPrpikT8qPU2aMoNbAmj6wsncKkdQ6ae1sMpoLJvf5hWrfE5yD3u43DedvCNLuKLUeB3PcMfsxDN",
  "key5": "4xVfdXehguwYyMiJcnyBFyf4RfAicicxr677pVLP7Be5JCgiUsphDLQx1f5RXQz774DRwtakCdSQvw8n2ik19eq2",
  "key6": "2ozzaRE3r4F7R6jAS7gkazBvzjPVC6HLAY4ba7p26DE4UmwtGJpx9GvRoBwQ9vEWJ1Hfq1TV1aW3ZtsZxYmS6sXG",
  "key7": "RoSkPjrihBwkLT8M6sfjm8Tnwcz6WCgzwrTJyeeBS9fPe347ud8caSmDQHjSnWzztsYu1v1NkMTWtm5ucAzc1zi",
  "key8": "2PUry43fykSKyHa4PKEpPETkMn5otdxhWvWt3YcZFf92cC5nDpz2nXe5vukBpA5DcDbiht3ooFVd9ooWsL9aFAJW",
  "key9": "4z7AKbMhsxwB7oXRHYkh1EoSjc217qUhrAUz8vRWByJswX3esyxoEDzwbxszLSTtHt5RZemc17WvAaKVghNzNHuZ",
  "key10": "27xFg9iveDC26QYwiBS1C6dhN1CwzSdYRjNxdhXGtm8ReKJ8n7avzgtd4xJnMZm2WLgTcqYZwjqjMEfhRCX3meeG",
  "key11": "3GwUcj9E4cbzR5RnRLPPw5obENF6NECCJuXQWWUuRZaRVtfVCXsdfEK4gjczYqiFtG85UMgPMBfohsYkpAGyu8sL",
  "key12": "pTjeiepiMm8PZJEfELYFvUA7Vy2sQGV9SuBWeoq7Wt299jjkmpAr46Wab6L8NTzzT93D6HnhXHPCHGYfJ5niZiz",
  "key13": "3CFqw8S8g375B9iZNiVqoLbzwawoYKuk381ewV8Farxb3YNLoK8jSKyC5vGzKobM8797MdTFn4juELmRsFwTymu6",
  "key14": "3hypfgFX5XrdYDcqQKXe2DaXSTfo8Cfvpjt784L72qBGaDfNiBYqbEmzqoRooZ9NTe988LaTD3skVpDZJRTXqgjC",
  "key15": "5maRHbkWKQcRUe5CZwefUDLk6twMmG7xh9cR8FcRMwVJkNdjSc6a4x8K77LDp7nmSMDVR3SYN5BVZdxTN3ZtuTwK",
  "key16": "puFiWAxFuB1tyuFm65iobty8fAHS7JaR1CDfJV7Lv1TobGUAPRjtJN2pC69ZtcNCAvZm29iDbxQHBLDkVGKqTR3",
  "key17": "3uJHny66DB6scEa2uqNVsSXfwKi9qeuU6WDiWrjeEafipLsTD7uTq2r72kWcSVU7eZKB2JrsyrNfS8mVtF81SyxH",
  "key18": "3CymxQVANfgtpTYuSLG4bAQq5KEgF1bLj4C3ZYDedH7v2vj6XwYTGQGTEComSippr8dvLTcw3TM45qtnecfsZz52",
  "key19": "3bZ1PtmSoS7cuM9CmGrsUasMkYTPkeQ6tagNhTatea3QqFyLxf4KgMDwXHSUPCigm2QqvGN6H5nAGPKMDACzxaEQ",
  "key20": "3seBMoK5ozau65D2WGP5YWQtGwVazzhHhUh9CoCvJ3oyGUPDEjSvBxYJQs2aWQnUUp5D3LWWBTgzrVwRPU1nauQ6",
  "key21": "2S2H4QNWS566RaGef3KgHQRRYxSVRDfEXRoWkMwd2L9PJ8eFnCkt1EG8nJJWfgQGMa5dqXs2RapEAXV3h2HbZ1Dv",
  "key22": "5NQ3gYhHJo91kATE7DaMy36USYnERr259GpKzUwXcX9E5odcbdKDWZuA5mgNiGZMCAEGcmSxvHJ5KQBj1p64LZf4",
  "key23": "3ErHVhGn7AJahf4SCfaae8VzfqpCz4Psxo22u8Shu4b6Z2o2fJ1TAfzkNDSUTvFF1gAUgbRQ3M6bgoqHJamYrZ6V",
  "key24": "4ApQBtrdkieVm7xN2AyoTDqtsPcK8dz2rD3TvpAcZmCmacbZtLZTP3QYr2ouDcBBUGv6ZBgM9KmsAUuYStQjmY9G",
  "key25": "59wSAGVi4Tj69b5CReBFKWKkuSJkv3sBkd8dzku3aA4S5ykYukJsFnkHSoAj6YN65QkENPRgEnZMDuiy2wRUGkUL",
  "key26": "3SkrWqdhQXwQZ8QSj8nPtMLxZWzPcpbJXiZUWYgbTyBTQn8KvDvG3WNQipq5efXDJ2htL5Em3wzzTtTJx91G8MYr",
  "key27": "63efyDXQHCXWZu3FLz6jRPySydhAh7MujmW6nnjm8aYnM4TLVHix6YsE9XpDtpUWMpvbjm4A4Uyuo4LeGAhkk1aj",
  "key28": "3Gm4b8NSZTHhNThq68RCjkjAumBDEB8jk4or8AxRdC7DCEtZdnd5281tn82yY97wh7JFuqn4QXfyEdkthaMEN3zZ",
  "key29": "4NMGp2HSjXB7iXZFY158JiMKZWvRtVE46ifdP2eajAZymaLxS4m9EisNiSfjzQQPPBo4bTcTaGBJSrn2MrWa56eQ",
  "key30": "2AqKM8Hd3LCjEb6JxZUtweJiyhZG6kQCU4amvF6HV4C1UmkL75wi1K5ehWUhHSUuzyoQQvTqb8ndRg6vBPeLgZKv",
  "key31": "2HjABip9Xaj67eC7FFdqhYAz5ZszukWCuhWhiJR4rtDEjLfeEPqwzLiKn4q1xiDMRPQa8Tcvv9FqGWWT2poJS2h4"
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
