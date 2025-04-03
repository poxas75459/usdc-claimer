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
    "5Kj12k6M1j5ZZRyof3G5jco4pz1PhiHt5rAy6BQbuK1TR3UUL85Q97Khks1UwZgFY2i46qunGaHbodMeKb5SzXtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WwJa7eoHxvsyu4JtRbWEY2hjjg1vv21NU5SLcyAownNjHTUzUUSYYVPrHAdqUhMYrmwob3pwdrsZhtBSrThtQfr",
  "key1": "5jiZaqPz953WfM6wFyBL28Qv5obrMsi59SZUcwtL5gxkuTcPkUsRSwvbWhJPpjcG2LHYn2MqjvmLrhWFN4PYxdVz",
  "key2": "27Vs8xXMy4QE71ijC7mjtC8xnoNzKexSQTXiP6WKtnRQwrNefCbuKNriWakzj5Sg83LEpmqzThVyPBAMHVbCx3tE",
  "key3": "2xVnAcVf23ovjHf5t5Y12xQKNa37MHT4TpnkwJEkZfAx5d1WurVwLaMD2RqaKNbeE6h5G5cuBJoCPsg6gQsWL7hK",
  "key4": "3dqpzTbVeSqfVNPWprtVbjxThYsg1pGRHfGUUrJxhJacx7yZaK855xT8Eybx85kYgTQ6rqWsBywxK3YZiWJhcn6Z",
  "key5": "2qLemTZqLWqd4mLjZtfYynYXVVKGZ2UnyhDFwsWAQQWU3WUHnnVSsJNd9hKvoPk64bD8bKfaU2Kc2SrV5Yym9Zke",
  "key6": "5UeXm5hs6mxexvhWS5hUpkyxdterxptefsmRRHjK7QGETZns74muJcPPnQULNNJnw67y4hvCWf8nZBfsr7vXg4TQ",
  "key7": "3kM4PDuLEaoYna8DH1NdoaA1U4du1894f98xaLT66na2uaSEKg4TcgZuSzs6CqpzPuu3g3txaq1RgM8zT8XwRKQj",
  "key8": "2oh1mkA58ZjZxLRsUFJNtj4WoXwMVWQUEr6XGknjLihpKvfAA6if6w9216Ur4Lgp8ce6aPRiUXJd8p2omasZ7Gg",
  "key9": "3jyEiUPoeZ5aJBpGGiRwFqHV7w4sx4V3z8LGvjt2TtdX9Ay2hmR9CNFcKzZtSBDLDiXDyUZHJKe5Ps7MBFpsS21H",
  "key10": "4ZjhjewTR6XVuK62HdZmFY5ueviD6A1qh3U5K8CDDvkjmmyewtS96ip7jFA6TLnbCz83LEqsFvdjkdMKoM4Jryjy",
  "key11": "5zyigkrhZry8Uit6g1WkSBJAC9va1kMqrRrT27B97gf3q2vETkWmwN3ewVGzxpMmzVo2Nk8UnKsvNR3mbiRRCyHL",
  "key12": "3dTdHqdThtfhE9UDM18ttWdaEFCjnLkZ9jjr2wDnBRbBfLPrTonQ5L7iiMgVpsXW1yLCfAcaAAtZqjnvqvcqL515",
  "key13": "4yB8yAWABy8KdHzxa48S1jpgYruux31QabmNyNgjgpkAKoShkyVpjsDvJcLiQcZpvQV9v9eTKKLfvdQTnGpVz7nb",
  "key14": "5idboe2D7wgatB7tmkYBhBZwz2LUMAogU2kuKEjx9UjAKJcfHgDTbvpRGGLj3GoaHWFwr1siJ2BLmkvwHmEPFMaT",
  "key15": "4zjcLArqKCxKq3QaNtaAn2ycovWxZrVGCZ2JZ444hozQKais1nsewG2cWcBgFaghBQRfpQpkqtemAfY6MEXwvsW5",
  "key16": "5qTeDGJHhH7NZH1mRpya5qnyWpDWAREYMy9HJXqHHNQ46crBC9KkpP53crGaitjF2vzayNujezEKxpgowzfXWCpx",
  "key17": "4DTADbtkSsXBiS1szjXtZj27X9c5h4cPKk2zxD6B6rk28TZ6p38xzUVC8mVnL2igbUW53hqmpGWcvG2kPERTe8U8",
  "key18": "Rmq4C5E2jkjF9uXWHswufLc6HEHPnmwLwAJU5CRjVJfpNHiRb9pVFEHw8A6uAPd2p1fHc9ifamWb4bK3p8tDFRF",
  "key19": "3FpGP6XDv2FoUPFWq4o4yyNXkLcX5uUNQ6vFpopwvyg3XishLvFnNPNykJx3CzWDYZwGTbdokE7TchMbKUWuREaK",
  "key20": "3znxAsjTv7NhnT4aXUSKiHxisoZJMLvfoggFELMMRNnMKixgv2YXfUQW9zCC4cMYcLtRLWAt1JijT3Bnbp3L11P8",
  "key21": "Cxqih6qD2Du6nQ9AmfEZfWtL6uK1Wbx29K7Wuf8wLNfVZZPokg65Mi2bvxbNbpR97dKxna1e6pSPGxvUK6Przu1",
  "key22": "2iyfvy4bnUDBZK1r1E7tNk1sHVoKCAzQKHNxk2P5S5MPgD5jMpGzK7RFcHFs9xdcMAwFBUBFdrnG2Pm6Pq9wzZQG",
  "key23": "4kUvNkbhx3KzWaXrfHW1TWAbFE5EAsN6jhd2WyXrfVRsC14efJRQdJCvDif4tSJeC4AXyAvRZxLRFDhgcwsKDfCg",
  "key24": "tKvAr7mHdvbwQbxmRKjX2PH9JURsyZRtiGYDAbDdCVR6GyRsaDWDu27wmwgcMB8X9NkpwjJyKV3trd6xtLgAkPs",
  "key25": "5etMPFN88VkdB9tuZ5i4mzYUUNCSz6eZv1UrV1zHozbjdRscMtjfPP4cWsDwZNYv1GV3JkaKQA5NzoczixbKpH7u",
  "key26": "4rkeahKgeKU7Qq9GBHgBAFw8iC2exyh3pkRyLk1pEHsA2PsKSDtY6bbMYs5R6B3apb38CFZLgQCRuCLHgNMsr125",
  "key27": "mRqptJphqPzcMWKbtPFvxdTdykNujKQBH81LNqzjaZxTxbbb2kqU9EBsgQdXsFRbqKttE5Qshvc55KdKwTLUvJi",
  "key28": "5j3vmHKMW3sjkbsA98nXeittbTACaF2tHcPWKDSPermE34tN4qjbTK42YfZaMYa59PmPZmCoRfrfXZLoUFEKbuYS",
  "key29": "2QHqNdtyNogskX8JVYZgYgtrFvR185FNFm6rafuyejEa7TyzperTmWhuG2DhmoQTPArv4qNjqf9H6VG46puoyKZP",
  "key30": "2tVto3CFdnbsho6MUndf4owFCseT4skcFQursoHf7FyS5dQPwY684KmDcnJYJyEHDG1S4yL2kcYAqpFiEdUNi5zW"
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
