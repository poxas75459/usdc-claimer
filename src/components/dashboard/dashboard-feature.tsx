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
    "52KcBmDSneUEG4LYnrHrmtmAE7NW35MkMjC2WwZTnTPCJ7gkBoVP6ASwRYcqraMo5fqZe4LJoCpP4yDNXjmHxugy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34uEQFf4NkGs4c8yYKniivWMWTWPwwQHFAssg1WELXyN7ZovQEW2FUXE2aH8CAhLe5d3VRGHmYmTTL9DQ3L8eyvZ",
  "key1": "NAAQdghj5vK97DnnNQEQ9GP37oLTaPkwXbDPbrt6fwxcXoq1VQGmYsN8dsmPXERJBr5sHbmFyL3dn6VY2F1aqZ4",
  "key2": "2ZY7A4acEEK1titbnJeDxPs7fpvpMtpofDALuSoGDwTtv33CPaYvAbc7LCTafZs7Vv54hYmoWKuTc5fipDxxeYUJ",
  "key3": "3GyG7RamQg8dRxJ2cB3uRA7piewL8rAwaGgQPn3dTdp6TMNycFCBcSsVpzxstmmfWXiwxnfv8SSKk5jWPkuupKXW",
  "key4": "627gtbAADkGHh9DsBFQddWbrU9dcxtetrrerRGVZ3vhWGyuqrECv54mzEeFF5GCyWybd8CVusaokkgi8AhT7hZn2",
  "key5": "mSfR5nmaQDanZayT89aZ71W7AfShaZNxmdsCmvrq5EStb6A4mGxFGJ8PzLmNQi9xnWxtqjV6wUuatLwEWFaQ9PG",
  "key6": "4V3t2cLqqDH7QJXoWkmuWLNEq3Hk8GzVBPiuzqdoWSQ6BmHvWCSGXq3qsTJdKENT7RkqAXnURtdL8srGpk7QtmY6",
  "key7": "3qeMK1jmmvpW7M7ZxcKUB3xY9Qh1drMnXJZnwZWcYv4QqxSeUNKHHKHw27tkKvDxcenXFoFeTyrtRxixnMck1DoF",
  "key8": "2kGnbK9JMKyFTMN2pniqVu5ymXNJDi2fvsTSEdQD5JqYtdUNHTKEBLCfDrXKdobag3wgMCZdJbdz4oc5XfHL1xpf",
  "key9": "21M8jcdchgrCUEuUDiTEGn8nUTuQeBbztVBiCiePvxDNMiQEYJpA6ZcgPUoSVj6ocqUSLgHe3aM9nQtMeTnyhVXi",
  "key10": "4xX8DbSyL66SeYJtdXNmUfa39wJLnwXXzrrhC885eVJ3Knd1DAqMg82QM1Le981gBy5DX9Lh1PW8GsDD3EkSSTQe",
  "key11": "2j8MP3RR5dqKqBuwTTbAx1usZMpCUDuPzuqzcHq5GwwHs63mmZegMg77jnwRS7SDAgEGMTBWHsy5ZUrECkXpZskZ",
  "key12": "4cDthK96cp3aP1TWHUprWQuAbrhJuRuQKTGHPnT3YNc5EsdxdZqGpMURX3u6VnsTY9nJ4gJ7jAQjcvn8stiHo788",
  "key13": "3G3CZpyEoe8CuhQvFqZMV27eaAu1j8XH3FVNX9MZ3i4ZE6cT9yGfUkyawneDF7oR3N2HX7b8iXLyojvvvtpUJYSd",
  "key14": "2tpBm9VK9kfGw5TzQpWW8vofXDqEnMfRdCJoigMqCkS7W8WqFy8biEzoc8fgNE74qrYJHzioYEWhy7rCVoGpuTPX",
  "key15": "wDAdGcEjTDkFsw3z4qPwT2XmnpmMcyvZ2HxFCfG6jXB43huu8KLnzfnyj1ABK3xDGQ44FaPBzaGJPWbEzeSPWbT",
  "key16": "3LMqnYegJZeYhNRLqBd3LUqzms5o7p7nikCC7tkRiopP6Xcs7ceFHAJDvJq5vS32wGE6t9yiLr8eK9TnnWf9DCi8",
  "key17": "2qbrphruWvggw3ychEpYWXupJi9mFfA9wzg9S8bBnM4rpBmuwNHfZ4mVivv9MCNTE4zqTnhQxRZjoTuPgczp4uHw",
  "key18": "5oAD7jxvHZngYzcAT4cWpJSfVygfWd2t9peLtmFZeAnXgsKDJXELu2mbVNRKjzDDXmP6MiaG4dV2AFstzgwsx3EA",
  "key19": "5iex8jDbwKq3NCBxQdoi9gCox1eak86nQnBCV8GBjYweRjqmKufWJMSYJk5LLsVEKAu2LDLH9cqQKQmRpUaDWjDz",
  "key20": "3LE7Qps9vLju4CGhzK1wERMyPJzGvEewZUCCBHvKVipBqmm89pSyXUcAejj5bYEPyEnhWd3DTwuDiUdAm5ZyUAt5",
  "key21": "5ohBYaNfYB6btqBM3YgNmo9FQmWqkiFX7FdKCPRd2E62AJ73MfmD95bT3wrTK3q283Nh8Dxtk9bMMnFVNb8xoWUk",
  "key22": "5qNfxgQ7dTJqBaJcEWGosHTxYuQw3yBwANU4Bt2aAohZWxDpvT9HG5tDQ92zZWarmVFZZeSmSkU9Pr4vsSKVxHr2",
  "key23": "5oHqFqGRcUfS61gJzgZXGKuYhcSKyXdzLYPH844m3ivqN15pMoUzVQ4fVFFurT1Y6571iPFcX9YKY3tXdkgdGd6E",
  "key24": "4zu43X55YkiJRfgGqX8Fu3Vg5W6AYJB17GDwhuVW57oYawogR9Knr6JWfKPW6pcfHs9STvPLpMnQ5wVLVEKJKR16",
  "key25": "ksK6Z5hus94EduUwMeeFWMBCpMwLbxV4ehxv3ApdJK66aq9DXB9ygg1gdcZdfsHjQf5SCFQU62Qq2AVPz5JJ3Fy"
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
