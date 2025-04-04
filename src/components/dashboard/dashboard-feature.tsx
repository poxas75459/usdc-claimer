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
    "3qjNaP1ykNE9C5MmjWTyzRCG7VteH14q7Ucgbf3rA22gBLFpZqSvUBfSC9EJKPFA6HqbCo1GS61X33a7nwWwTCVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oZEfbjNAK2hncmNx2Ra81nUUfoA5jedcsoZegMYNZ7SFtMLWRVCr9UU5NgKhgPknxjgwYzWv3cz1UpRDYSWexda",
  "key1": "3aUgJtamWkX4JiDdETePqezbN5yYyQfSuYG1Rn132ecN3RZT3gyxAiMHRCSkiZg2aKkFJZFmAhgogs1knVJbR1Fv",
  "key2": "4xxvcwTQFH6qNPJ4CJMiJEFHiRyWooBGHJPfbtbBPSUAqDSZBKgLdkDNbwWstGRyyoajE3X8TykSaTtKJybTdiAq",
  "key3": "2osYtmMLmgMytEwjxwFAW7eVTBjzh428TMu4aKwLvxGDZF6VEzCNUE75gx899Pdz1PdLasFHpxPRqbh2kw1Sj8MC",
  "key4": "itgG1CdcbXh9EMWxNgCLLSEPmVVekkzDgW58RTGqvKWJ3MaJ55duhXtbZfXmt7SrcM8ofMFyYMD2vXZhkyUngHP",
  "key5": "44QjsjyFpsCvV4GgbDQrDxhWrJoQ4y3cHYMqQA8hv2Q5NPxJz7mYufakR6oUJRk5Qted7NEmKT7yeohotGv4rxZT",
  "key6": "4nhum3cZQTeg1PcT4z5paqpd9GeCM4EDyydQCgqiy4D7E9dWSHRh2VdBEYpd3RuBnByf2pNMPSG3s5jwTou9kL3c",
  "key7": "yPJTvZaZYpG9Nyjs7V65CEWeDx42xi5XhhoVs53s6S9R54CJn7NB2BeyZnfuCEvDuMVQAk8T9VaKhYYNWHeq5WR",
  "key8": "N9n1m3QbUoBgehsGQaSqLVSSf6nCrFvZj3aXSq7d92tKrQ92n5rSpao6AtY78xppuLGqPBP3vWHNZ5YJcwGDoTB",
  "key9": "2uTfg8EkGkUBJiMAqXK3SSyJXY8ydXYUzh2wLnRADUruwi5mntCRMwu8nFCPG62DwsYH7XsxphPE3Ye6NNrRKv34",
  "key10": "5zt1ddHG5RbiJzDB8W2TAvwWigZT3NpBgnvmb7ox1tWZAigCUAPYUswevLRvPxSBZrgsbaokfNh6RvR9GvBRx2zE",
  "key11": "25FemXHW6yhHBbVKX7ut8W8cvHmmq3mDTPqSF1yBzJqUnoGAvpNpRidCEJN4BjKnkHZdXiJP5wWjX9AiKVKQJcME",
  "key12": "4ws6MbBvbZeY2bYXLzvQcvEdCqAPDTxaZNGuNTdBmh89p8Mi2HSBowhe87wrULMvFYBFs3CAyuzYWVgk2wnM5qUV",
  "key13": "5teHT8WHsQs2gZQR1LQviQxsk2JyFt1v4stpeiq8cKvuF5omsrZ3G2t14BQrZy55dfh6PZm8KRGdaitxu1zfs2eN",
  "key14": "4ZRVq1v4PZNnb9YewgDWeRS6LmPCtuRH9PD8SB5PCdEXxvQguPR74arc2cxtVPMbEVpa3u9pwvE9YugSrRFw7mUg",
  "key15": "5AzkRpyyNUpML3idWDCEdH394fQPEcJCAom5AxS6c9Au195YMVwBU7XS8omT4p8dS9XV8H5KUYpzm6spDsX6BNL6",
  "key16": "4BGHeE7RZF4GiD1RHUYR94LtsUVEpbpoXRLzj4cqLYmMwsxESghx7AbH8m8sMRqsWM6eq7jp79YdC48C4CMf6RTa",
  "key17": "rGCixWZSJGKupTxxxKZpE3BXu7FiMeaC8XMNKbtbwsDXoAAWAfANZ2j9K3NineRQ1HnZbtLK2hMnMRWKZk8Jc59",
  "key18": "9iecBL9d7NXnmHMDbL47F9jsz976wZWp2L4WxUruZMJfE2wArjJgQbMhcZiuvyoikgQqZVEp4udZskko7BkEK9k",
  "key19": "41R3u6dze8Aq93pygrjTBDKwk52cjzLXbxmR8RT4rMWpdQJ1ax4StWcieufXZpuBzN8dJWv1xDojrSkua2XrCdbJ",
  "key20": "5WxSdVPq3RJECP5YruW59LeRGkyLwJ25Lw7HSutdaeQt7THz9iUKqrJYYyGaVJLuPYq4HeBtECPCBS5VAkicHj9H",
  "key21": "4NhewoeV8TbauuBm2fdw2cjwdiZx22rM7TFuACXtsbgzV8KHBNyTLnY5a5m9KN88m94g2mbEv8sabp9F4T32vxjN",
  "key22": "5M7Zp6nNAYShZ8gZGP8r6BejB7AHXrDKVZFHHSR16LRDRC3xrR1carn9dYMc9i8fhDqnNT89JYS3jzsF7KfykabU",
  "key23": "tJhf6n5kUtLQRbdXPv3Mi96PMr3nvERCwFarTmKcqis3bu6rZHmeGjLMBtSAxFytjbBU9KjdNiJQKaQnjRsDmgJ",
  "key24": "33cYCAvBpwZj4Bue1gjBSxGTQqUs32sKeLjfysik3uPEvuB7C7QNqo5PV3rLBVXAzYrt6gY6RbREsBB9psn5scnY",
  "key25": "5cBWAzkMHEGsaHB8mxPCcywvLNserbcgoQqwr754zY9GqrfxEDm2u34brhw2AuELt6eMQfvAb6JDgtay6N1oaPZX",
  "key26": "4SmjRvwb9jrQXdP5uV1EgxQSHe7khRQorga1u98PP6z1qYVTruHRRGPRqYVVG4fF6J9XzAirw6uY9MdZ9ouoCubC",
  "key27": "4Y1nqyzfcPkKWdRgct33XekLhxd4pyXUKfJAjjt9YRExQMv7QeJ1uaLAkrk5LaLVkPKtWLsSmRr7TAnZunX1x3rc",
  "key28": "64cgQyJFdyrSeWEkdD2HtxQs3P9be2SKm8JpmubQRwAyqZeWrDuKc9kWTxoHmRVEwBKtJfMLJREUQbFtd8T4M7vT",
  "key29": "u5FuB5eLztWoVqjpCVnSDQni435dm3weEqVtCXFZRYK8UrdtRVP3iPAZwgcM9t5abQFmvLa3RR1fhZbEVSNj4nP",
  "key30": "2nu5riLqUNARnxzvRqaQQwbQXm1VwksbHSvtAAEKaJQFXmy6vnV53dsxVBmqyNanxJpEKLqsLq5DcvVPkUTFQksn",
  "key31": "6544Xba5aAfcEccf2FEzQPzka6wsGsCPEXj7rMzoZce3zDgbtFY8a9hgSQMgzLTac7w2L8BMNXkjHVn6UpvJ9fLc",
  "key32": "bqC9nrJvC1HKDjpM5QjnK1z8GuMvysUqaoB3Dy6UT7NcxBAMeytF3TtTiFpALn6h5gCti1uzbcvFGTZCAoQ2dD7",
  "key33": "2NvmrTRXoytw28bTdj3pFREtfghJWHv13AHhTACX39x3BqvgdQSU1b7Lpwn5dpzzQx798hSv9p3CcEtAn69wHE1y",
  "key34": "3fXkLy9WxkhVeMzq81hJ5jDBXPqf1eoRx8xWbhiDdbzC3ZbnBh7WRtqWhLT3KCX2Q2MvZj43zjwzieS2vMQZER7B",
  "key35": "3XG9amSBzXHyrsZHBLajdSjudAcmHHPExSK4Xv3jAET359jr4ABTLLreRJ4T5XZSxZHAdrNE2EqbxxEpPtSANxXh",
  "key36": "35xDfPRKYkiyGh7TFQQDJ8QDeSQz3vzGWJaKnwHXtWw968h7F7kiDupoHtf3nmjSqjFzgr2r7vTJpqRRakUEZtWm",
  "key37": "5QVePWKUdQfSMAa2WimXS2SotZ6U9CGhb19FeWJFvoUfnvnNwv684uFk5U7vgJDQAhwAwXDc9iJHLVTpsRmLsuqX",
  "key38": "45QmJ92MZ291KFmuBXdxbWaMQN3tQj4Z9kEuN8kWvcaQWto6UCYHDbE8eEb8zbVn4ihkATyK4Ac6CmY11BaCAyH6",
  "key39": "4m6W9VxvGNoR8i2kUGXbUThWYm3po9G2sVrXfTArsaFgypBfn4nk7AGv3R13kKLepfejsJH6F7aUGgkjoXjqhs8Q"
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
