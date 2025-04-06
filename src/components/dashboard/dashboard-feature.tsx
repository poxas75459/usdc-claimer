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
    "4TybR686hFZ98jys7AumtWFeCNp3qVJVoHysQkUFhWmtqsgc63dq89DhW8DQEwfuwoqavNkCtqxmWE3bKXeTaJgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YsePJEuLtKhczu5pC5MQYG3ypJQZkuZChwVsb2TCQqijZNxhxt2PVsrWGZHGJxK6mWs4EkuTAd57bh1gyZUDaYi",
  "key1": "4r6aZLRue96ntGBDzmNJUp3gRkw8gp2zBidHCN9ej8VAwLLo1A7Gq5zhrx89CAaL7ezWP4FLiz93PhZc4iLiqBgN",
  "key2": "4mYALKMyQNZLhgKLEoNkRbFbue9kdBBQDPbpUnZdN8Uy91KTzY4NoMsYjRqMYs6XgQe3RcCe4ortfRQVEP2qeUpZ",
  "key3": "2C4htviC7ymWNRHQ9W7p2GhnQ8xefV9tq1EHpfiq84SzqGvZSyrWHDU9upkAosJa4xmRuUfGB1Hh1ZPdnaSpFp1i",
  "key4": "3HbovjdtpPfL4y4Bx4DZ2K8uHrSsPF5sv2VzgiJ66CqwF6wDKKo6Zai6NwBW2fZwEfVrxj5i9p8XoJVrkLU6YfQu",
  "key5": "48rGm6mJ4KtyfYwinLKmpnakXW4LVZJEJeYhJ7y7kw8rxQxG2nugQd1VUAofSAjjY67mPZSKYkfvE6gYHd4oumvY",
  "key6": "mBpjpZvKsV9TnMGuQmE6CTB6u9RXmR8TaXCPoyTtKHER8k1CqXQ5eDCgxvrK8qBtBarxTcydUr6Gu9hd517zQn5",
  "key7": "k5uYpGHcMLT6uPxqUuudrsFyw4SQpdXNeFxhkz4Q9Hb1Ffa3B92vfphTiSEgaKaeuaku3mzkSp8JKQ7sxyKFg4v",
  "key8": "2cG2rtzxWU8jwiihHjEuM3A4WAV6GXCGXKMgq1EacgoKPtuAy65WdxsUqzBUcBEQ67u7C9yw7M6obksyJPCuaVSQ",
  "key9": "2o5GzCPHzGSmpq691QGoj3jGRVcBFiTqy1oSwM2G7mHkzGTYzQUAVXhwNLkByndnxSLhYAZydhtTNLu2e1x7VuLs",
  "key10": "3LyCvcHJPkKn5Mj9kkENBg232oegYZ8xKdE6aiURuuADTGuumhSiz9xMVug3a9sUUdVm1ent2PrCU1SF3Z3XJDfx",
  "key11": "4PTLJS3EYgr6DcCVfiZaz42tqJnUvF6VQZzkyncUBbB9H7cyg2uBbpVQpDJ1UzDo5oGD6TVVUWd8TrwkvavCS8ri",
  "key12": "SXkrHCKiANS2D6ygE2WJ4UNQLbzJuqnCv6TAUz6MdfWHT5P2AZvF48cbVHpsNgDtCUzpwBnYp8B58tQG5CuhwD2",
  "key13": "4SwphUkM1DhDU5q1bApcGjgzoL8XiFc42Tqg8BCJDP1b3xtSKRkpM6n7jyK2W9Pk2w14Z4uhR1W8xuQuokohxH1S",
  "key14": "qdEcNpBkSNPs7MnA3wzt7F9MY5f5CFAiGTfjryfErWuMUudzANBRt67KerFbB1TCA3gRCsHufQHxMEF5j2btgt1",
  "key15": "2LAA4AJB2JJi1NDRsiG7CupbHRTbk98u3gzKVwS1gsFguWZ8KiyJbqVnnViVyy2LDJGserQwTeZw7UTzJDyuhFgE",
  "key16": "3A2fY4hRRVZTuM3TVc94oX6gSt42rAkaYXQseHJm9Tp9BmuXV1MeDbnsAHyHgKS4wk9zHdTvatcNCpgk64MQDUQs",
  "key17": "4RvSn1LE7sQ3g684YUQ8pLAj8RcMWNgL9s4WW1rahoSLHPAUeerbvJxBwU9U7n2FLvVaYLSP7yLXasMYphczDixH",
  "key18": "3vQCpKs3C8k5JJiZKDJ4TkKFqxSP2ErugMeZvgmECVodbcXVnjSRHsK3gdRfSo7zN89Uh1bsTN3TVhsZLbegEScx",
  "key19": "35meEN5TPLXtR9gcBZqkpBYKoPtXKtJqzj4DG1EpFHNXodkeeFE6ZJCPshW5QSWdJYzAkErr3uPGtQUgYrMcngFv",
  "key20": "YNUZQrJduASNHkKFXssDdR6XhL2vmiqiXC7TMDTuWx16oyZp6qzxRGGrq9mGLiJ3vk3UZNbGM1tuD8rfyVGbPy4",
  "key21": "tAqJhjiTTtJ9xGN1YbFrpPcXBbmML5QXKixLWeHZE125E8g3papKi8zV19rDzEX93yy4XX4BuvsttxFWoryD3fD",
  "key22": "3kJBQhYuugaQRnq952eNNaMMD8wji4HZMn5fqcBjMWsDaodTED9oWZPbZuMRCZPPNL8hrSw3466ZKJdnzwWQ473W",
  "key23": "65k3dSd1cTFc2FseMApLcLYiYjCHiN2Cets6FmQVPsqq9UuqzRo8mSdArLbx9ixRtMxk7RoGe1buieH9PjxQYm9M",
  "key24": "4iAN3Jb7eyWgNKDsXimUrceQ3bBrbKUttXXPaDBNEaxHdXnsP75TxbdmkzKvFqb9dzaXh68aCDxnWjGb9G4Sj59z",
  "key25": "aSLW3srVro5SqmeCq7WyZPLCsRHf5yP5F6LDoDzEcgC84RsCb6kX69tWshwRzcC8j45TbYNEb4Pa5NoSwEidjJk"
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
