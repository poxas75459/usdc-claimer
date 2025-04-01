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
    "odiPCpKjPdKn8Gttnd97fWUy7Gu2HLZJ6dzeAX8aDZZgc2B4E6GJvxh4kdNNVbUrqN5E1FqRCrQyDi9kytzHema"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vn1LyTrop7V8vXfem32Ls8N5Yxo7g5DKMrUaYFxSAx7Mdq2SdQq2obWN4jxz6dReoDUF3nXbTpLHKvcGJcvY5cf",
  "key1": "49qksTKR42FBLrADgUDKT8CfByNg4VGyPXMzRFgZcMANFx3rPF5sLqWsDG4eBeMAESRHPQnSoS9K1wB9uhxSatAT",
  "key2": "5QckiZK1eVoGxETsuCtQbX9xtWUkE2LJn2Wqk6Ea9nnTDA8PDw1ffuLrEALME9Gy6vmJySi5khKjgeyyUhMTQJtt",
  "key3": "3SHh2jXVUxpNQ3xRVBsRW7gzgy1pNkZLku4puVic6NadtrfxyxTdyqzRWZ5k51g8N9Q5bsT8fWLxJkeLjDboBc2n",
  "key4": "4kY5jZr6p4PpBftEvWGcx6RhZchPyA64kJ5jnA4MfgFFSGzEnJbRHwW5n5MsBtRLRwtCCAkJPSkh5SZsqWmLdXbg",
  "key5": "54vHtCSTayRTJUMLEpSTnRe62pYoKWwRT1iwQHe98opDQ7CaqtsHpA1afo29H7xt7JrwAntMTVCYNqoBvtyAVVzE",
  "key6": "2DBv5sPeW39Q8XMt4VtYnR1HgMEcgTtaHhX5W6obcZrygtcb1K8pLBCqKhvTkjmsMwpZX7qXschJjKMo32cSkgui",
  "key7": "511CqyqeA7LfR7ntBbhCJtAamqFcNYyGCvEN5qK6ph1gYDDSUv1kUtcpyJ4myzqMy3hZSYgoJ3NVMshx7KtY7RcQ",
  "key8": "4DNyKmE7yheU7W3H28HKSBwZ5ugn5WZN5YEAuiD12qqqPtoF1q6CVG7UY32yBvq9CmVoe5Vvy8j62N2mLfacAhdU",
  "key9": "JFQT5qt4jMfFze2iniRsB1rw2GE99WqEwz2oBxtMj3pnZTPFyZ9zyATqZCpRBbWcjsFFLisEgJgsnqs1hiicAM3",
  "key10": "54WVvhBEbVWFEBC9kgeVeFR4zYEfSmc15XS5XyfAqY9tQjVdfpUCXvqkS6Ff8puAdPTs7kpecLv13EKsKmC6Tf4c",
  "key11": "V6ZF3oERqogMLXyAzCeFvpyhx2xnCUSjdHrzZQBqwhLLgpEUM3JC944Zi4QB6p4pbJjSp82bHhFMHEV7Nps8L9t",
  "key12": "65stZr3YewQjZtHBxsYpzLSyurGXBtPfE7uT7SM4bjoHkUFSKZwXZy5XFf6QX8kRGVPsaXPsRvVC9BjtHNG8GopC",
  "key13": "5mqERGdUGtPeXPZa9GK6uvkxvB1ZsLRnRyTcyVqhqsQXKdC4eX7dGhaAzFhwT6ut6mo3eFaQyGdJ8Vmi7Zs7LcYk",
  "key14": "4FVmQ15Ui1pYz1rN6HV6BHL7m8y4iUyJ5QfUTLm2XQ4JNJQBzcrCyWHbcRfR4v7PiYwvAee4mrBKTJ3fe3ruLuzR",
  "key15": "5iHqDErLrh77pWUqcegbpM3LzUuLZgz7DsKjYmBk6xboCphGGzkp11KNM5zcCqZ1D3eTVqcckeMa5dnyBcyPtd4v",
  "key16": "DS4Do9faKYwXvkuq447Tug4EC2fox9nU3qX9XYc71Bv8zdaAKjwmF7DFtGVqENKTPEcgLDLW8ncBmEMxM6UEyf2",
  "key17": "5zqbPhHMXYpuvpTKoHkdiu6ao2qhCZZBCwACTiYKHe7gvyoiHZbS3Wa8HpB4HBWtxfuxDYCmSWw1UdJA1yurfHF9",
  "key18": "5tpDurbpPuJYM7wWEgJBKfToxU15CiCejmDbUdXZVA4gMqzAkFu1yEhC3v14svzgEvRG9xTtusb2ZFhsBos3iWJ3",
  "key19": "2g1fBMmH9prda4xfxYxCs4GR6xExpZX3iNhds4hWcAu46jVYfo9my9CBeErPdD8UcatDmEs8E1X26g5crdGYvxeJ",
  "key20": "634e2pCE1yjoffcFyruWnSJF5mAC94huwXgDB5UFmZ5yZ8ezWNgxHKG6AvCTthMgN5CP13mYEAZwuswkoXb3mwGd",
  "key21": "4oggVMAsM6V1kM3A1uCFc8Upe9J9X8BgZqpp2p4S8hTrYQ9kzmU44Sgo89JHjjSGhVpT8dqHTPZJKwAyuDoVUYmR",
  "key22": "5y4RRVGFRm1L5R46xmoAXrGJx3k3SqfioP3qCBT3Ku69dycTrhXSk3ULLSbirJtCh5DDKouEtm1QmYwwze79j2Pv",
  "key23": "4H9Fb5iAhQrazrLAGrgyztR34c3Z1pDB4ZfdVeKiJf3N84Zs3zJXaiLSteLzW9zuztpXCxf7gWMivEN6fxroziuL",
  "key24": "44spesoxmWKHKPecJMR74zNYpG4GQrRZaYsFF5jF8GwbpomDzuVQS4y2VQTNur9Zke8S7xg6LFVqagfGoENUjhhW",
  "key25": "5HgiCVDVwyJ53MBoenCwJZMRmybEP3Bq2DwRK3YuHMQGtaQmD757QSVTGKHZNNhfTKr8MiNT9QyZ3Yp9wXxAvDpz",
  "key26": "4vcimXPBwwpahP1QqYC11K8KK5cRrv6s4JMPaQwsPVWzftuyc3SXSXWWPFzQQ5m7fsSSQwhgSQuPyUCW4cSqA2TF",
  "key27": "48QCoc1XZ831Qx48jNAaAgLpRSJNJG2vjynUVrRaRgh8cJrLb1tDWUch5amwUfSJyDYKmx24Ji3hub263QgzM1ai",
  "key28": "5SLo9EUVRnGuhS5iYcDL5y6XWJxrBAM21eRXSQHpM5fzyVP5h6FAeLkuhg8ztRwMZASg1sDDwxtU5qggkpL55zzz",
  "key29": "5MkvPFMPFygYP9VXYa1Qsca5YCPVYooTj5K7kkdPuTrEMQLoHB19kjHzDGJpGbDfrx8U7aVc2XL5b8wpqHeM7KcE",
  "key30": "vASe4fnoXpWKbHAxeGHqhFUrqPur4PT92StzpHVMupwBbJohmQityVC1WavXQQmMi2u8tmyVzC8UhcucTVu6Mvs",
  "key31": "W2ahK4buE15Gr9TzY4EAW9pjRrbTttMgJWghD3q9vH9mkmg8gWgGP98QpfLGpXXbrrzsg4pyPb86wSifoxeJHKb"
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
