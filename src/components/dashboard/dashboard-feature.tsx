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
    "4iVUfHzeHoj5GJBdPsYn84dEgZc1V3U3PJSbdi89dEL162MnRRfBgUkQS1vsHGySrc9PLiAA5M3VjisNNnfAX2UH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivqXeD9okPYbA1XzjrQbXmajUZqcix4fTB4uZkWXYuMDYCF1aXooKfU8V6odTcTp3Atk5VRw4LA5ph5HgppobnT",
  "key1": "4q4kS9z5TAGAZUcv6PJL1BdAhowWqZ7EKhnxt7TYTG1ek2FTcb4SndZSUS6E8jcgz4pUXT6QriQRQdEhGaW1Y5wZ",
  "key2": "2PcMSMzpX4kHUNEV1MZmfrhXQqD8if5PYn1YMrmzQhyLbsreL1VwFWZQsSKpBYBttH3cHNKuNSu8kJzuh5LHoUJS",
  "key3": "tZF319NCEx5uCtRG2UczSJZXA7zCRvyqy9GmyPkkYtmaFqWbp6bRcjgPnnpc2vutSwTJKrqJenyvKpMQLfaMjmE",
  "key4": "29Gwb1qKMtEoXeYQYPSwZN4JS3SA8n2fzVKwsw2oXAYrtev84VGmkrLEtC8RSwYhqn1M2mz9Dhe5KCYdWTptQn4T",
  "key5": "4ftBe7tjdRiH1CXiozVbJ3Axcu8if9XNUmzqc5uQesvd9ssMDmvAACBauu9htze8s3Kjy8LUrP2Y77cu5A8DZrAh",
  "key6": "2QZoaVTCMbVpgayRLjxpfNbdSNpAvzjbJ8bMrhxHYdv1BeKERsLsvnUukph1rd4FJAEBkuRvGL3d42TSiXi3beME",
  "key7": "3JTV5nF5uFmDQSjtM7YUNB5zhhhLFCzMrsPUtGGx9TRqPVWYLiZFH5jYBVKrWDRM4Cc4Fdoq3x3fFc2XJaJVrze2",
  "key8": "3pA5avwbC7JhCAq5AyhuD5PS5snEkzq7iKPwkeQeWy6jR1A8A8gUu6tH6jAQKyEEiQJ1H9EVdcXghHeZuCc2s9GH",
  "key9": "3wwfVrPmvNrQWudM7zoRB4PDmyUTMKQmKBXktZFN6ubrKCd3WQcmHjLeVsmmMRNG7xVJZ6iDw2HhZGXH7aFhcoY6",
  "key10": "4WtWtd9sXTcJaPeVbT8q3CzwQUzTyFPj9iVkEq9trerR5LyzsRWmF9r43QXrE6q9qmZgHmjw3u2QECjiyt6x9QyZ",
  "key11": "26P6XG4mGcWqHsQkQiPqNR6CLhFKJHkJehKWyqfmayiamRGRxezz6Ki2CTqRvjmW1pJ4coyUZKV7SmrHDobE5sWw",
  "key12": "5MxHzEMZ4ATm1GDSetbWoSvcL62tDHHR8bKuzJSoA4fkbpN6fatGAzwBWi3XuMhCFi7Rbn85fFCx8N4Jq2MXaJUp",
  "key13": "2DZRABgj5YZ1jn6fSXaDc57LvkwFGwkmde1nsmNQ6gLw2BdJCBWxiacShNcJwS5te7r1uA7XC4cT5WKHR2mw5fS7",
  "key14": "5g6xUYzinWzHAfEztpMfKvUV3QLXqRXCYHNups3JvAYLnYoTu8WF658qRjtWpHevHfVx2dPTy4wEqXMpNZbvtDLQ",
  "key15": "3jcVAYaeHZgURMNWPKstGWxWd5kBFtjEjCV6BkU7aYteeaNeMvBb63TyUVJwcKW9jakAspVZBcSMS1PabAKCzWS2",
  "key16": "54i5VqP7f7TUZNqmrKw58Z53KFLgwyix2rrvr7x9dxP2LdGB8nyss2cuGRcbS7JXFout5rtQaULTPuWgQx5HyWjz",
  "key17": "4qhHDWTGCZ55dp68am9pTg9uZb6JMbs2ckeVcEGak8Z5Cm2KCJiUyfDgRPJ1JMaEaL5BcaoEVbGGZkG6v5gatpXZ",
  "key18": "3sj5jFCa7GbLJ9sQbxoFTJSnvKhpNS2CQ3eJryr36ACnNLiXUrhT3T2ZraDjxp3Pu6TPKfKsDqFjpn1fQpwXtoqy",
  "key19": "5Mf7mZ6TYsLgPApYjfh5Kvqzp17bicv56iYeLNtiqo7HpieV1jXSYrf9SChyvPHHfiHUX3rmQeN29P3oz9FBS3W7",
  "key20": "4V3UDBTxEsf8QMwBPLLKsKCfRZmCW4sUydda5ypzpZ3nThaT6Qb2TXocJ9zife6bgA6qwyBHUWqvrX2J6d8Cq1BH",
  "key21": "2biajF3MZ2ooMykRk3daVYvhrm9UW9nR18M44NQrb2iMEDTuc9fM6FTbumwoY5Uph5B9prqsa9HXX48tVS9kgDcQ",
  "key22": "5saEMtUfdQBx5zWva5mqzbBfh8kaFnfJ9vmED9RrZNM6NeEVthur22SrSG7HiVjfjyvL5nMBLo8TkXmVBuCGjnVX",
  "key23": "2GHqgqdwdhWAU2JHM9ciGXXCmVrbDsFgArzna5qZiXJ3nyujsiQ54ShM8NhyHHg4zosxvGn8upWBbJuUJ6et3cMG",
  "key24": "DjP4fby9pY3mBoisR4H7jiwafkg46w6Mg8xAxqBvuWbqjT3T2Cmh39D4z6GYjHhkq7kcp4BTvGWYBrJ9BW53qdr",
  "key25": "2FvoKK2Vi9FSLL12wb7XhcTC8iajxaBwJChFcR8N8t9BAySqyfN2LeYANjUEP48896pA8dDgACshwvWSPPvj8dHo",
  "key26": "3LjDFYiE32exTLtdPwgRz7PFfDnTDPrB43UA1uz7TqG5cPoAmCqhkwXBNxUimQUBXmARVPHVPfQAY2pVKBHUTkAh",
  "key27": "2zbJYSts2qCMLu6VK7T9bmhmqgM2upkiL1VTjZSBtord8WoW176iQXoPKtT2KV3m5VMBkFF5k7iFvjLeDBJPvrEo"
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
