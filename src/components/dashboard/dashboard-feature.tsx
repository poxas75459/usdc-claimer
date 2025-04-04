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
    "ZyGcPzAJc6iSpnnWkZkXbySvGqUpeXTfREy9iD8DYztvS6X9z3TQJ6gGY7iKmojYu613qL2pw5jF2AZaBNLmVwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "289dgGTGEdU8mqVomyvpxtFCR4rsXzUyv5hLw4mh7VhzByu3JhUfXY7aRiDtD5cKRr6SKWcEhPbxCiwYNv6qaDxA",
  "key1": "4yoPBUdT6MjxNBTUMVae1oEUSUZTumyHoZesBzpgWZJSDF6dtCnssXtX46Sem4FALofzkD9RUAj7LpnxDp51UKMC",
  "key2": "4aYSwwFcPqPtPGiBkaoUSJp1R32c2qPL8yXgwaDmCA8VcnALd9WdhUGnefXPhaXfHLs3d2SRZR1gMR3iMh7HbmfF",
  "key3": "3B4jomQ2byCT3tF6XEnoJAcE7hA2JVezF5YQQRw1YUPcqCare4uTwBdHKTv1LKsxTcUa3qebztPhcF7ppuzXFgAa",
  "key4": "5zMLVViqYoCwmgaFeSArYtKs9T9eZc1sE5QTiFpSgCD469eXsyPPpUWquDD2S7nZbYGjZ2XYGPsNCNsEciLBY47E",
  "key5": "3DGjikg2Gm3MUy4BBBucYfvqgGh21iZKhfrLJV79zRypGDKDaVnSsZKs2URvsu8E9MTU11GfTmJbYagc2YX1VK2y",
  "key6": "3N6mkTn44LTVpLEJw2iRPjktD5RgAjfMeqmP9V5AJUjuxfAad5jJ9ePx29EXoUz1ytLEpcK4dwwNLSVBBQemQr7Y",
  "key7": "YmSpGvP32T5UHox2Df4QFTYSFJNEg8zrjN4cu69uEoFSyZanSW8EQfR1t8timSzwvuAiKreAhfQiCAeFJBQN4db",
  "key8": "2LmXW7WSpqsYFrWoZFyVQoTXx7gjXLf2Pt9XXJyZhtSxhMxfpCfFUZ4nDKTH1avuHtV8BvLKG6Ar4WLtb2zxiYG7",
  "key9": "33YAeBAmsbKuKYqZYJSgxMiwN22nW1vyxC1ijabocJyWK6bJZw1i6zNxEftd9DzgQGHn44JGHtK5nWwnx1GM1hyN",
  "key10": "3b1TMNQg61mKaHpcZMuHeERVu6a71WpX2AVgWgJz7k3KH91y8Ba2QLyP4c4SEpMwpkiRdfzbv4tUfzMfrebs5CX7",
  "key11": "dBHWUbybjcEKhGQJqQteQRhynPNYNgWak8Fy1PMaqhGeb5B9fye5envixK1M6doEk7PuKcUYrxM5a2MQznt8SXc",
  "key12": "T4j75Zm7YVU5LiKp2F8FgtEmmsWC8uyA5mJbjA54bSWsqXCfRUc7gAa4z1jx5UZn1y9j4T4z5ZZNsQ725xodEr4",
  "key13": "4ckLyf69arhDsMTS5rKdHpbfj17XRfHncKrzp3WWD17UkNNS5PtZg6ZDDtToacuVduLS2VEq8k5AWuRqEjtU9sbq",
  "key14": "5u7TVY91fPQRFfaNgNg9grPdgREVUjMUs3fLi5KpRLH8eCUDW5nTabCs8meJbC3cSY1kwxTrmUtdS1zmFKvAUV75",
  "key15": "hDKxvUofpY8syoYPMGsfKrvxP9yQGz53Bav54fTboWhMnKxfYA9fHDTm7Hab18FZLEuZWhbyvofoJEHimZaYZ9K",
  "key16": "55Rws7eFvaTshEazWh3KbwCQx7qBgUnW2AcC73cArPQEpVc9qBa8SrowhVgk3GxiXwRmTxuaWNXNqC1pz2ir2TKF",
  "key17": "5KThUC4PFeEQHAYm5Sn3XC3qLK7QQRVZWtyw9K9mYfZaqVAEZ8hdk4PU5u51gfXZre2Y7VHefRPTHNhzn1cwj8UD",
  "key18": "Buh3GWFFx5txRjnRs1jX3DLY3NYTqAvyaHN1NkLHkBQYnaY8DjjmA9t2NW21eYGWAyHP8ayF2d7k3aEt2Fwtip7",
  "key19": "5jbStLzBBeL1wfe9vM2GqkEdPofjpoCubWev6eiAz5jmcDe4kzxD4XUNMEvw1pQ2ZVAp2Q2GNzLMwYjtQMqC1oYg",
  "key20": "67jYqMLWzmAhDE9EDGHrMAWA7nQmkBxcyfvZ7EUuMYUzyqvnZYKZ6Hd8j9zPR6ZhxGVvh3RNyWFAZLdfLBVxCuPg",
  "key21": "8LBUT2CB74urXYDX1QKUnqkmbTLeH5CifipgnRoQra54tFph8PZ68Yr488zWfiBaayHcc6eAYbr1ds7UjoVK6oy",
  "key22": "2gzf5JNr1hREcS4jybNAcddhEaMLAXsRsqxa44TcfabmxX4CPHas2iXnvsQUqkwUzU2mSpjZHZ1FiGgVraHVmLWB",
  "key23": "3wMjiBUhuinYvSTyk7vZdywYcwv6uvAARTb6xk9xoetpFJzGBM2PfKUCDwNQLF9KiaR3kFAzJNbWBYzhCQBdSLhg",
  "key24": "21DCTqnqkWRcDS3QgDhZHhMfsa9hXMjbSufvSo5cdpRe5hPzNzphcUrF1cCTfXv3iPGEynyR6SbdnSTQqpRe3aff",
  "key25": "5LohR69umBEDEt5oHBGb96ggMZ4TJye4Fwv5YSWmcsoMTSvJWr8MZopMkHnvJKSCQjSehFLFy4gV5a7W1tar9Pcq"
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
