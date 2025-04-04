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
    "4cLjxFFYVJYVeU8fN725BUeDJZzwii6rf7W9PAZDfjCmGJVUwzCCvCJxEMv2q32Pt47pF3k3Uojzc99zFcT4FGaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DFxTtR19k6AZewGi32H4eDfxmXeVa72TKKktZ7akJcWXponX9XMkfLvBqarE7NmxpFdCrvrLzoaYxZTFxkE2Voj",
  "key1": "5zkCWSMYGTGph1X6Z7RyRq449ktYH9oFNjQpWVAAfYxc4dji4zCnLL9yXVKmsDh7MiuiPzykY8SHFt31DxZ1fjaR",
  "key2": "2GKG5aurmSPojf62kEXGzSDdD2Go6gdd5pwfyYvrCq7MH73wJ5pwgTZcUbQfVPympXDKo3oN9zfbcDnEZHM7DcMC",
  "key3": "2eA3ftVJ9195KNj9NVWXHTv6TB5gytSuFGiRodbafLnf5dFUoVnz4jYh249LB6DzzrFuaNPLRnjTYgKJjGxCJwyh",
  "key4": "2p9hHR5XnT8oJTL1TdjAekrJBHekFQjUjoBXPskh7AqFcy5L1LiK8K7enDj5QLSvyWhLxy8iomcmmy8ue5aF8i41",
  "key5": "5KVW5bpc52QhV1eLyiCG8Aw6M7jvgJ82djLwFFAexvuvQ5yssMwKutGwGYWtP5CBmaQpp2aNQg8Zc3UJnFHfoMNk",
  "key6": "47mi3GWpNNu5UB9NUieoYSoKi5hYY5ihFYPjRWLz7nGKyp4sKsdWc5aSQsyY7QVcYLdnBctJF1qGgDZaEbzvCniT",
  "key7": "UWTQ4nJ3rg8wLdhSbc7QcBexf8NZWVx2Vx38t99d1RFHD6tjdzv518RXuikuzELFei5fCaPojYN2VnaBzcZ3rwv",
  "key8": "bPqfxS3CLDjCbAzdxK1Y7PYq8L8u24Ugzc7n6GpVTe9x4JH1pUu3CoURZHK7j4XuRhjxEpSp7foPM6VLCiW8JLg",
  "key9": "5CeBAf4CtYU4qw6Y2oY4zhXDjd8pnJFge7NZFtmhaGthEj6JdGnGeLEUePYmjifpukrscMZLzTwQMCDmj3TrgVwL",
  "key10": "SJkHhnhYReWU2dYMq77GRAdH73WMyUWyYpquD4MCfKs5sXdCxd3czJBUNqBCm1ZP2McmAeERKcozjUxiVRAgcQ9",
  "key11": "3DRcy2UKgB1SkZJAj7vxu4QGfpABA7JthMxNWzfLnKDbxWHAT8WQFUTS9Z8on1TvHc73kA3nE7qMS1nPCCWS7Uuw",
  "key12": "5RnynA8h8msVoXR5BUcLwpwi2VEnPJw2ExnVNmiFAd5uP6fYftwKCNZfMyPtqxfJUSz13cxPNUDWhxZSFhCXmZVn",
  "key13": "4AhsGgPG2TTwGQV6yPD35ShjgyhXj5jBJMqarGg2RUV5fpbHr7e8QiLnAWJQpDo3A9cQhyV7R5kq8nQwyLcheTCP",
  "key14": "3bGbTuDmopHA7RL8KrVSFhndfAhvobNcb3vMJs24qfwfuQwSQ3hZ92KTTTPAt2C1BUdgpaB7h1FE2tcBJypk9ABo",
  "key15": "FoqRLhxSkBaYAVNd5LtRakm6Yib3cLHpdzYCrSbVScqPqdRGcvMFkCdMCTAnUdjGQu4FUWdWMHoTDUvyQV9nrwX",
  "key16": "YhXdjQcUpWDiVK8FZkyysYbriuhWNiWp6qyPhwq4jfNKzmLtJ47xryWzGQvwXS86gvobde7UzDKEt7KFyNCfBxJ",
  "key17": "5fHKTwmwYy3xsrDoxs43zrNrxKVdTKGTjMW1cFwsHFajo5xhG2qRLWKV9EgAapqFxKgd2nugmfz8VjLsYTF6Czkz",
  "key18": "5optfWjcwVW1xCvturBdLjRZAPXmDTqvRUJNXUYDZ7uGTfscGLM6EVZuPguvMUZ952yiquVGeQN8MmUwy8CMecS4",
  "key19": "5AS5Adq2cB6Z9vejb2BPCGmD55Kzxq7t9xMY8gydVHq39ZTc14Ht94g4Y23rPXVk43zDPB1WvKhVKGG21dEfY51D",
  "key20": "4jsoLLL8tKeWejQc8jRRKHzy9BqKV5y22iDokpyTFEigqtx49GRzXEiWQsR6zC7MBnL5W5pTi8iiaCtcFNavp5px",
  "key21": "28oKreKHBrsSjDykR72osaFXHJ3sw21MayFrZ3U557FJMQ3Jjtcf7xatCpoA4XQLt6H7NJhK2pLrfAJfrZCH7GdP",
  "key22": "27awAugKPj1zdTU7DKfg2pgRuk2a3ggXuNFAjxqoDaBsWCUTo7dP8NtdaYWnZupmQCCrTMYFEquMvyT1Qs4yuk2y",
  "key23": "4Zng1qj9HEh3yJtoxt5FiwvHTEABRf5ZkEtPPya7XWn9H2GRGEk9zdWfLkgdQnn7Gemn7ua9DBZJ1qWVUNuts1wC",
  "key24": "5PDkHH48LJKavi2meReZt4yDxwTUV1gwjbDrdVevz1BCTUidN5iYkLtjSqQ8PBP859xW1toJtMYiJzWqWfAMoRPm",
  "key25": "24u7gkC4dEN8e95Va53hQz2RnHk5PS9QN33TNg3SMbeEUgpy1gEB26P2PcCTtqzdZmrxCEkL3ppiX5XUrwbAEFaE",
  "key26": "2xY1xwintsfV2GTafAYXtRgRyK4xXTSSNJy7xaboRoyFy3r9FrXp95Ch6BXbQZzYiwQNheCfoCL3aVfHcdHMHefc",
  "key27": "676hAiqKNsKaLo7NuitMn2rcHNHgUcdmjqBJLBfwYuxCLLXY1NuJTYLv2Q4KAxCwBxhNYMkcwv1fGcXYW5npxxdt",
  "key28": "4ehsKtn2eeN1tF5Myg9wetiYYPp1ipVf1bqpNdqobKN7W2S4cTSPGpXfi5t6FCN34BoHXtQZeazGfhQdfgccMN6t",
  "key29": "51YHZne1jX78NaTw4jwKQvxwNd4HQDU1wRBAe44p8UpQ9Xdnw9Zq6CRQY2drB2z9JTXzzdJJ2aRuq7BEFLF5Ddcf",
  "key30": "2hU3C8a6qQJj9Lzyd5Z2yazkRiwYAxaEQ5KxV9CBm1PGRMCYhoH4kVua6XV6ba3wsXYjgKEShxHZj4NdhVbEtURi",
  "key31": "4NWwECLoy2Bzh8pkmRuGtD2HNLPJVk8vsE4omHoN7tzor6T2qhTU7uaSYHQgTpNTg5x1e8Wxee9jQPQXWsngB6Fw",
  "key32": "2EJJgnycCcQHaJ4vr93ZpbpjMgfk3zCcV5YVYAZhTtykpLavsmek1QF2jz6cdvLoMkPJZkjXVo7gYpmE4Zmebguj",
  "key33": "3gazoEdT2RvNHkentmmWbzwdR6Dm2WUdYmExBNQVTyvyfaBdrSPk6c5G2oWXdQ7Pyns4mdtyphJ7LK6BThAjqvdK",
  "key34": "5G8STnTRAH37vnVY2V7d4Nar52RXX1cSiyixaG4n1RUiwAL3Ejkx8iNyYknt3kxrJrfa488PNppVePPq9meuyZYb",
  "key35": "7kNjtTBiBdZsCM6jDrRV2WVNUC1A6tcNo1Dww155eXq68bs2enX1eMYwc3gseRWv4ARN8Pe2u5oLKdmiDDeY98z",
  "key36": "Pk6UpjzzjebgKbfLTHTDJcswWcJrjXT3KeGxxy8ox39yTUHzCQpUptLZnV6ipfPqeAgFS2RrKtKZXsBNMcrPdMq",
  "key37": "xUxouHjcHR3pGZpLLN82cUURWBrqREHQogDTKSftvWcKauU2X1Sx4RDkeQCqDGxmynC55FvMysGBhWJoHtLAo5j",
  "key38": "3EC5uBq8U6bZn2vBccdUtow5xdbDHWUhLgqRa6j5Lk3Pb6AzwsRuXYgi1uHna7TuEsaaisGmXasy8zXTyGEzS1X5",
  "key39": "2rj74HDLKAgphDH2hzAov6eGJ7R9tYkbUsswBJA5MmEcq9aYNBdU3dziFyX5P3Fd9SwdwivMefSEACwrjGidT2gv",
  "key40": "2jLHnszbCfGWDQqBjdNM6rYrPvN7RQgCcD7TqYZGmTRtDHgzUVB5EsQbmtTxPCEApspFyZVbMm1Brxp7UHrXekkd"
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
