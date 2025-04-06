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
    "2YYiV97J7Y3z6GLVhQ4MmSyJX7rpwWfxWUWhw1BppghWwPPBn36Kvp6CWE1gunBjFFef9W3g1mGdTAAfh3vD4pBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V1j9wPZ8bHSaAGUkjbozp2JCNBR1EbCsXXkaD2Wt15pnoA9NZe1XbLALCbPM8jcV7QMMZqAKqwnqEurLr2PhGMQ",
  "key1": "QsD43VHEQVgS6EJMy2TjPSxYZX7nwc8P4hSsddL32x2LoMsGVDP5DCQ7tKdxBFFiUhonzyCBUPkGVscTJEJPSEH",
  "key2": "64snTv6arVfk2zYbFEeEjoU6ztvvkxEdP6sEjryTDBGBLc4Lw1BquWzpKjGvtAwAWtT8fWT7nKmj4ZNxrxUEjiw4",
  "key3": "XqDM9Le89BKHL1rkM79dbi5uEh9dLuXD43LLD17mxsfPn5HFpvk7rdGbuPRE2Js7FJzCuXCn69aZe5AwH1XQpKs",
  "key4": "3WpGN8Bk3RW61bxHQB56EpWuQovF8fRc8CjT829BLtqNpwtjuqeysTy1J93K3SGJcwZUx5ezDn3ogkqHAdk7jRmJ",
  "key5": "tVnwGF4Wn97BbyEbNJyBBn9h8ojJcmNRM4V2TVFcEUGVjGjP4cY2PKiXdCuae7XuUAoKA5rH6kBvPRzK2tCBiwS",
  "key6": "5EopcTfLr38EStJkZ7oLk3VqV4GG48AU1Xk26TRwNMM9PU3UCfppSySNbPooKPdJfRqCjZ98gbou38erNsyVWPR6",
  "key7": "43wyLhFphWdTWQwVmeD5dd42LF8Le1HMtXb5Hq7VZ6LgUqyttTYh34Lky4qfuCMUUF9Bz3fUk9Db5fqHFFXzSDWT",
  "key8": "o1JBq8n4ZpLRHXTUPMHxT98n8NodC8DWoz3khxrttMwrfshJUetKDvMjLFTjjTAextxwysPm9vDvW87aLQG8SFN",
  "key9": "ZjeAvD153MPneMPvxhu4gKTPAJuMMtH9qhAgvjJUwrxjawYfmnX4ngr48kBZZTiiu6GwUAKtUzRqHrqF9Z3gCUV",
  "key10": "3sVm8TXMJqHHLqTzxXdihcxPXLTisBAa6XjxWP3Y3Gcz2wF4sgK3qjjkHr1Dv6jvHE5ZT1Fju173pmq1qZhtWtG6",
  "key11": "4tUQD7GzCzRxBnyuAxEN3wPBFeXY6B9pyezFYQD4NmJ8AizGWqMt3pCSwfvTrGq6ERWzTQod16tf3HCpgDxS27FQ",
  "key12": "3ut8gZtzfyHBjaiYCszw2C17WFURNqbQ6pLXM846VmixXK4XvtNRi1ACgGh7tp8Wy269xiHbjyQQFrfj4ZsKU1uY",
  "key13": "4bzAexQhQuRHF6LHcPeojdgHkdTSx2yoSDQHj8GHXKnpH8nx1hkQjgToHS47hvNiZiaHh6jnuLEtSsjnFmV8tN5w",
  "key14": "mL13QUW8u3EisVs5zpbBrS4idnFZBT9nwrQrtAduo1peLdfNyqVNme24E8bFMJsm8FXv7V8hbmUmJLfaSSRU97h",
  "key15": "5LYV21Rn5NA7Nnrp2sXHQSSR2QFWgJF26LoaE6dNawoJiqadjuwy1LgRdmsVSBaqEMnAwE4ocRub1icprxAwrStb",
  "key16": "8HCbyuFVBWpwqCELadPoAhBxEY16nea4uGnWZBDA1aovq1aEnZeNJwmXiHj31wAhn38ps3qbnU1M68g4wZbTLZt",
  "key17": "2eYD1Xe8wT8wntgyqHvfLNro88V2birboMPcvPkz9hVDFDcfHrmVx5FqV44gkfM3oZMXzeynV6GuVgZMawvQ2VGd",
  "key18": "2fgmMPwkX19aMmuc5LHFztKMuy5Qcb42iqjYfZBjFnZ6Rhc3naKa5g1beuSCCLKVjZFiKC7VSgVTVc5kuQxb4Lp8",
  "key19": "5CnjuZsXuFDrQ21P3nYhGQxRwaca4sdYJtLYSZTBEs2vqVKjiCdi6MXGgTbdSNTghZ6eo58EP2EKbBDAuSD96q2Q",
  "key20": "4JxsgD7GKHCZ5TiCwddfi42EXfWCt1kF7nPm2EUMh59vLzZmA5PfMAwVBMSSyiYQYRffGfZXHQhdE8tzwMQunXs3",
  "key21": "UFhxK1d8opiiQjXKZqtpv8qTH2mbet7qtffN2qscXhC8EMHcZBL2NnAhzkt1cM2Yue81PzMc15box7wYpb5K4vy",
  "key22": "3su4RCKnzoq2gqjrZ1cEeMFQPBmhRcBBizM8KRdfiDLK45xoLxABdoCykHRJJW3uFrBK4qtBGxhBHCRqPWNgMvUX",
  "key23": "63B7fTh3wSW3ufdjJzMZ2W8E8WsKhoMDooQrHWzHtB2q9coopLm92CNQnj5cUmtp65h3HRmq6kbBVQ3y6oTctXpN",
  "key24": "5kuhDTWFRkyJjjpW8vCTWS98gF771DPUdkML2auit4seiN1boKJdUAVy6kYRd4XhVqvR8NJZ7xusbe5B7v7Pgj6E",
  "key25": "5Nyxq4tAwjisgP4AG2euXabzUuoSkJJ41MpMQ6XARx9kuzPMYwSyc14YXMWDT298eaRA7AMSRA2HVysDCccxLsQm"
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
