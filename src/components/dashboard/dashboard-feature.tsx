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
    "4PZn96vf9LA8gJ9ZyW4Df9Nh5LU86H8wxiGRwFBnx4qjUgtTo3gpkm2bVUZKUyaCQoiXooZYnjMNt9daXGpQVwm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qC6bByiuqMrbbdHwQkcJSC8UhRyKGG3HTVmtrEKtnAXJfFm1Brx31fdXtFGqmAkYwysw54kMg4ce7NzJ6Jq6Qh7",
  "key1": "MxMjhpoaSvBu1hgmtwbdjdBj8oYKZ3ony6cVxWWKxofwYbJEMDMHA1b3fxLRXjZiTk3rp4BK3Rf8ESXQNoTPzzB",
  "key2": "3ckmauBGgyUDh73haVxHdSzt5dhPxdpLcZNRV6dqrqFmGp8HdMTLHK6vQGmv5yNHBy2MxnHwpZYshQJ8cYD9cNDv",
  "key3": "2xaQt6aFrm7HZCqpaTYX7pMybA7CnMX5YGJz1nx91iDTjr4AnozSgEYWKscMXUQpCxWeLrR6hoCE1RAE7t5Drmki",
  "key4": "CQdJLNN1GrxfhP4XJMRtvmWJaMQSCM5fgTk6S8FdLg5ddiWw6xqFMJqfcJJE7Qw2qanFkWiANh5wymfSvJRCCW8",
  "key5": "LmJKNgdLP1uyB3LXfwMSDXhxcJCm9DSQpZktfgs1tGtw2iDuoGnNfNLtbJM7Y55uH7xvB2VCvPxadTxPP7jtS44",
  "key6": "2ma9PWA1wLoxwU467VSD8DQP4TygnfPnj8HmErQt866v2mbawKiHZXfCABcJZtgJzzSF127gCrqv5JpmSA1FtjwK",
  "key7": "XjjFBWM9TiMK17xVVAXtcdwayzPEqKNZVa4cmyBVHxwM4xoKbFBrgo4NUCfuMbUNZ9yW1cp4HTr7jwrJbgFK9P9",
  "key8": "2Lc69r53jMBcgB2AxAk2PwCg4zdPyGRv2Azy4VX1PguqaJijo94mFY9NLweSTesx9oN5w3GRC1uBNAWrFVHNo6zo",
  "key9": "PKLTw37ehNUGzEBzTGQ5QXd8wvknn1g9VpaEkML8RS5Ym9awmWrWZSMwxn1pTaAzNLRYwWj3LkzVnYktHGGWqu5",
  "key10": "3ZykVFXUYweLmXZGL8h5DMBE5uDw6yqdofKZeUfz8FfrxNEinUkUDWxonk4TszMeVEUUDAdPZFihQrJq7xKRbh6e",
  "key11": "4BtCPDhZp3drVkhgNQDRsUBRUZ6AaQPAGFq931iQrqqagj4AoQMTK2VMwAmiYdu3RXPK1yXT4CqW1FyUAZMQYEXo",
  "key12": "2Z9zHovqiLuhoBPddy4fYkHqpeV55wn7joG6i2zBokGNS1zA1zDJsSVFjx4vyFQqZ4HDQcAx36MQgeC5mLSdwksS",
  "key13": "4aw9kAjfjfK5J9Wds2Z3HR6K19N9Ah2DSdDsiPYTMZSVam3rpaQcB21sDKRgQHD6WxGvndeTLPxk2ELFeeXh5hrr",
  "key14": "4DCHe6At1uaQmYT2M3sBEHAGuJMQ1hkCS5qtxEkXS5r18YcukmuKLStWhkiD7pPmEWKC8qLUHtWCSLZjCngNvZB1",
  "key15": "2KFFExD87CgRVAxBoL36reh7v54ZUZE2PB8dqX7qGiU3MJJepFj3gVgRnM54YAPKfqPB8ig58HjeyLVDeCykeKpR",
  "key16": "EKgXdQaiS8sBjAMeJHqWErYXQEbpgrakrWLP5HNsfu7wHKT6UPg7bo9zvopfhGmavvNdyVpu6GjqfZTeZ7iG51G",
  "key17": "5CpVPbXiZditbT3XHibbcNcTCmsFj5k7aXxaM5T5jZeJD8ZN2Gc61EYntdEruLzQjg1MuEmBNMmA3HdCxoFjsfQk",
  "key18": "2PRJyLqAJpBBx6jbFridJZDSV6DYpscCubzJPB9nQhHgRe6Wrr4cpXpApy4PeVT7xaMnDy5aJXYq99uGacXVaa41",
  "key19": "3P23jGCAeTZWaXhY1jm5cD2Gf6iMH7XN4SCNDqTT7Q5v8YVJC2Lq6hvpLPnMDtK9ZaxPX1b1NDnc8ykEypjakNn",
  "key20": "3DgpCr1Mt78QGwMEwYR2Aefm8HVFBNgqqCXVzfJmt9m7kY6sL2hHzjjphm6xZ5EbE74Z5GmJXXT1tChjHZoZx48A",
  "key21": "3b8jFVzCuuFcxgZToBxqt9mYWj1pkAPW95SQiAM9rTA3R66GWo36YM6ZBNAmrHuZPi9WX3Z6kHQofDt5ZoNXTiHg",
  "key22": "4PHtN2PB8UH6AMQikvqezzhHskR7EKdcC2VTztPy52gah7UEEpmpzfocKB7u5L2AiFTtkEugRUyAW8gs6vG4QW2J",
  "key23": "3PtjxopGd8Rj7Lahvg2dU6L6EBxsXSELDo1VMPS54mbfDFVTdnscZwgi4QMfDhrJ5jqU3jW6fcBWW9BW4AECN6ZV",
  "key24": "KWBXwGvzc51Fx4DzGeGYbkDvnHmtaSEZ3XKwE7CvWgMWgVuMUdmmWHAfpqhNyTR4W5sASnSUTxLay3EeqGENJMi",
  "key25": "3sqw6AcF7xwSBKmQPnazWEMNC35auCNXVMia9f2BYBtCPYNRHkTaCu65yLTayjJVCdBndYEMbho2vbB3MTMD2Skr",
  "key26": "5TaAoxojt7Duujxo3qSA3M43sszqu4uhMpVqkvDqiLAWS9BKyWVWjUdH1QnQqNZQCgVcCKmkZx4doD9QRfVZhpon",
  "key27": "rhZfh8br1MBZ62E4bs6BbAEVcLkUxPyYdUpwD1BGREFj3Mk2Ka9Q4zJCHG19Fz2QEi3g5H68MJ5yJfesrnAdFg8",
  "key28": "3yRqVD8UiPWgmAsSVRJCS6QGHid5Q6H4b5rA7W4M3NNhm67zfgcj4vTjtiqj2XeBZCztwtFeYXaVJ21fWG1BzagT",
  "key29": "2kYSuAwtXbsPwS8LQxj6JN8HkH1CdYRo4JtgQzgA7WmfLtYt3EsEynzvt58AX5x4N4QCT6BTwu6dEgWZnv6c2yEk",
  "key30": "5CbqqUdegGRXookdBbPs5cgZ8dBgj8bfURRdi3iRRuWX4dBrFB4BiQcLFNsJ1KpND2yDAbrm1tgZNUWV13K4W5Kd"
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
