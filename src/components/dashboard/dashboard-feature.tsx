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
    "3hZCxZ7F8Qb9V3fFZkSd4K87GTqpzwksJY7Dag9qantozBMKcsrhCJTrEqBd3LttvuqPH9bHx1HVrzwnR4FRiC4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21mX6PVCbENdErdSAPzX1ewCLd7gRYwZi6eWHUgUq2JZQ9S8pfb3W8rnQnAbdPNtSG2bY4btyfFjsKRNPe8qmmJA",
  "key1": "62axrxVSXKzF9sZdCM3YD6PDqdJPsihQVAoKLBQJEQVX2ZfVEhaXkfkxkXu1aPi1zSwXEuSjZVgPHnUjgNrtBGw8",
  "key2": "3NhNp259LdivxfLUbAoZi9HJLqY836h2c5BLMMToBiTUcpLr5cS1SVEcfuMcZE9kui1jKagYgx1AhmQioujU7kCU",
  "key3": "61yzSs754rnJq5iTMQLRz9FrWpwJVWvabFAwvDmgW6MeuyhNzXvvKEqXrtBMAKqYy5dw9aPgrRmbZk2N246JqYDy",
  "key4": "2QP5poccJ41pSKHQ27N6Pcq5NajCwhNz8RigwA4QfoSu3Au2phSDEd28vzyzwmugyak8u2ocqt5k2kJz751h6dW6",
  "key5": "2QoWHnwCQkSP9BD5DNZf79tKenymiV8KhCXyBtG22MkhQXTAcGpK8PceU5Mb3fWben3vaSsNUh5aW6Dx8u95oAGT",
  "key6": "3cmyuBnomQDgbPtnyq1r9BjS6iertwMBcUHYFo93RK3JbWsWoRAbMiYc86WKtqfLKvHgvognDsuNczXgSy9SLAs3",
  "key7": "4kNxFQgv7AKTjU9A54vsoD5VvKLqkThs3XFg6SaVoFv4VsbhkvyWLYeoeLvEBdBPdmT6LR8rUGNk8GZF39q2u7mo",
  "key8": "nBKP8jdtiuePLxLeZjApnRtiS2yJKr5JSDnoszURgUAnukgm2z921unQ9wP4rV3GaHyXhm2aLUWnzZB2KQkV6Sw",
  "key9": "QZpz1saNfXBTecx5HNNH8kY3i9Xff2Who9wMb1eJHAdVKC4jzAdGEFxFQ1LfVX6xHLvS6Bi258v97nEgGhMiiU7",
  "key10": "3RPPGde6UiZxF46K8GUoB9m6isnVrenxZRxozkeb794nyKUTjSGQzvRcjRoDRkFTHsS4eTKNMy9JG4d6t3UB569b",
  "key11": "5uqJR1TmUxQ3dpEy83tYbAGM8d6qXzuTkfdog7miM4yZrxhJGHeySA4vaUznxzMjj38wgz6vGptmu6wKCSWJbHfr",
  "key12": "2SWHyDYitYkfMEi5MBTUXVZRkRohHSgMb8YCQv52zGXFPUwHYDfS5t6BszAh2dL5dgDTxphupVqxfypUwV64Z3pA",
  "key13": "2U9JGr3kxJMgJS8eLmLAZcCtZgSsQaY4HBFf3nXk6cCm3MGeXMCpu1NXAUpCw7UR2SbAzitxXZp2bgkjya5bcczA",
  "key14": "4v1eXiF5rjFmwcmZTSNezbt4VCpzsrYvi9tqJnvyMDhdD3wp9mBqxXis6w8PkDAKwm3Bcwt1UQc5mjwrjS4onWmy",
  "key15": "znSCoZpsXGsqPacgb9ejtu4hCsCQmJ3Kaf56gJ3Vhfx7RS4zjugzNFgvDCVNHpr8c1RzitFybEPcxHAEpUd9VGn",
  "key16": "5PTajF2LU59uUZxj3teBZ9jagTry2hRN9PPxmYggLrXf8LXTvXQTxEyVyhDvXztcUjq1gZA73ZGMwkscPeNbdadR",
  "key17": "2uRsPQzaKRDrzib6NonnWn3pgYfLQSxb9tiBfJnPen1anKUig19jt4drDE567uViFSKxACsnZytbSdZRJdZSymZd",
  "key18": "JBze97yTm9Njs1vhyrnyfDmfTPVLz1RANG8aCGkQQBeUZ72AgoSsUTrvW2TXW2wq4uVkdexqYGj5j1hR2aeVVKb",
  "key19": "q8DFm6GD9G5KK3ETBgVR4iUMvCbLUt4Q2XSVmFQ7jCfhQbSFzVg9bPdwUG2VQVTCf1PiDRv9EP5Lv6XhTSzp3kg",
  "key20": "3GX94zwsQBKjMGsjdLKWYFkoEdeZEzU3XFXXgC5rsmfNDGDTqqwL9nBjYiCzgMU97S2UhevSHneKgjhau8aEKFG4",
  "key21": "vC8e3CePNjszJuCGvRBp8FZjtoPYeFwaT6VLFUxTpJ9cyVAPmMYqqy2Fzf1m185nuKHSU1fHtcDKmTDW2d2hTnL",
  "key22": "5ZBfSGfFoo4GzT2tFoADQ84njT6hzASxzoEUeUWGznVWaHumHW3A6sZEdC4usbkPPpEcciL1opm3zchRctATmA17",
  "key23": "4hFtxqcJp6fr4AuAjP2UPzju2psgdSfhC2hbBzNK5fJ7XhECFbaAvackdp4KKoGMpCfkTZJ4Shh9eD8JmTeQWLRj",
  "key24": "5E1zdJfQPsT2mo49n14jN3zxgpUFdcPRHc5f6akjpYdugkbMMms1SAQugXiafcm67mrevdwJh6YcrksmVozmbi5E"
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
