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
    "58YhZCzbcqDZPKPZ5y1nAP7mT8hpjzbR34Dbwb3KSbSXaERimWSgPS6QCk1YdTHtKbuwEM7i3tKZYaL7Agg27jzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCwLsiwNWJVgwB2D91hJdN7VvfE5tY9Qkvvnfd8ft1eJRPz6FLbbY8kjfU4ad6nTWoYKQNRZj3Zb9DJPNL2zc6k",
  "key1": "5WGfwPi7nE9xEChZKGpJ9KRrbf2pYN6f5qadWxS9shwYYuEjCXVf1rSAbyfKAd3ZVytHddxhg8PVtZ7yabop6a6y",
  "key2": "4eDZ8EmJUDn2frLqYGTKJatpkpy5nv76UNGhKR16KsSZbw1CqDJjwRrsYh9uq8JVxWkuCXHmcum8fVfXEABDEQoN",
  "key3": "4d6ULFf5tuNq1xHTWxPUvA4sDnFfmZuSXiuvQoD6QRkBkRB9ggFbkskCuvTZ7oE4ZcJFkarqV1dEdVyqBG8V89Bk",
  "key4": "4KnDZw16DgmuhRbgV8NCbmXjt1Th9R1beBeZ5iFF4w5GUnGU5MapMFLPyz2dQcUbScuEwo1zhGsHwb8LRpJ5JC9X",
  "key5": "5hYbsZ7yfM95XTUijHnuWzc6pTEdWbm9qzHShyedwXVThoxN9nPPdGpE5dC3np9y3nJPCWReSeQpJ2EJ28Bgoawi",
  "key6": "4yNLrYxZJtiXi1rA4eUTJVNXmprnvDLjPs9BDSyZbGptRrdm2HjJbt8X1gsuNcsL7QfZd1t8qvsMVbeCXiqS8Xct",
  "key7": "2vtr2dq3EoUKpLzXXNHhuTNe8zTCmETzENhV8Z3HoZRtEfpBU8z4g4662yDEtPyWTpb9xivszsUvQGAijF8bwyJk",
  "key8": "3d8dW7pUYnfPFeZuo7vo8kBTtnp7dbBP8qtCqHKNeziR1rrc7PJEqj5QVPeW2hquLbW4vs4ixt8XMnZNs6AZSPj3",
  "key9": "52GMzw7ZrAYzRQ8XL2j8k9mwSmg7EHwmHDiBHUUg1Qya8mapj6kPoeshx4mzefXFM2kkUwzGa6ivLNFZHnQzK4bU",
  "key10": "4ktweY3P6tMJzVG8ERh72RKtudmzLYDx8tUazoXkYej3kE1ZT4HyAbb4an25skzRdBY58teYcuaEoQtpX8T68DcK",
  "key11": "5Hg2PgQG8vXoqz6iXSttWgv2rfRwAkShBHAEDSn8wRiA3yqpmKHsdn8BxUi2NvqMLeZY3bvjxGcT2tX79zocutAa",
  "key12": "2q2Mppu77G4twme45T6rHLh4C4FUvdwM5Jy9xpEGQszVeKjzUTeojtr4MWwm7DVKWSG83zPXqAre34Y2aEGxBVdL",
  "key13": "qDstkELP7qquxVLgawbPpBL9gJh6FbHQR7bfkW7ajNa6W3WV9Rw54bEZUq5mA2crpeMCcAKWQR7t6v3gJgnoKbF",
  "key14": "Xwrb9AZBu421MCQX8Tq2678aoiRKVaSdqHxmS2UkRmyG3hNz2zNwC5Tp6RDeWL6Rwj3oPbvDfhvf741TNXVpbKC",
  "key15": "4ysaUXRKHWcCrPuRYTFfuYzwX6xLcnZ8Qoeek7PaFzWxguo9qzzFReuMhwLNgHS6XnUauqFRMXkpTGzY5iAxayoh",
  "key16": "kGvBgVtYwPhEuvWtGPXFTRBzE3D8ZfNDpE6183wukVLo7gfidibEXc2aJV46EV61NjuSMv3hcGm4k8ESaT45FLV",
  "key17": "41xg1ZR5U3YcsDnQLUoqsKnpECpEngqGqXhfBrZJA5a5v3aNkB4NWSA8LQmNefGwH6WMMTNy69xh3uhQqtoewdcr",
  "key18": "3RgQQvzuNaEytPk6imFUFhYmSi3xPJuygSEUDwYfjLzmEVSraTxXuw5bqDqadQkubj89HAT937kenLGMNus1Cziz",
  "key19": "9fC9tiVsechg23MoZKdMAkbQBJunJHjNhxMvX32mjjxTVXYE7XM1pmCWxH7rr81Ei5V8Npnps43Rjmfyk7W15dN",
  "key20": "4xgscpG8PYBAqq1wwxM56eb6SL6Ga1KdNLx7WC13bKWo3LLK74vX8Ny6FJqbMCPyULFquamKPL8ZtoYjEyg7AvMs",
  "key21": "2pty69Dg5kea4PUygRfPBzgKEEcky7wUyjt2niMUBBYz7HZt3bQSBBq5X9qb9HH1zKTg7yUXF7QXGznkJDTndcr1",
  "key22": "27rkCFczUxMj3RpcTJVWcQDJ3noMnG96iw3eJ2p6eGC5nM72A5UbguCR9wxD8MGpcGK7jXdP4veqgBBFbnxsnxxL",
  "key23": "5BebSnavAkdbyuPabBSC8eqXyGVotJY7PmfzVXFCujw5kGqxYqHehmpnyJYcLkoV4vRnYT2PuNo51AKbq1SDVCHX",
  "key24": "3hm53YyyEESM89KBhHgtr5PCZeNf8bGcfZRaFvWb1wXZTqrbbZW2YVqUTG9Xtntb5RyfSfjgdmd7y91ec6CURtxK",
  "key25": "3baKH9dyXoX3sA3MpeT5BA2QyMefcwi6N4nNbPhqGDHfRRD5averZYLBb1Yv1fNY2zdj88ssVyk61RNyAr17i1e7",
  "key26": "5H4nKxb4EV7rLRLBXkaakFDHZxSvy864mpBE2rvD5uESPpDA5KJYq6KbLCPd74kEDuHTPefdw1Apro3KubFQoSBT",
  "key27": "35mJukCwyuoyTw7FUKbUYXXcwuFKZV9j8C9ENAqdsKmxts32U1D8raCBmLakPRh2sdkDHTCRPmwgT5n2XRMavwab",
  "key28": "2RgBWNRy3o9rmBi35E1LrYEYGjrMSiZDxM1usuxn2sVNLhd9S17SRyEA8NbGrHpvE25YwhoMvGUPWMiZhTgL8iLR",
  "key29": "BykovRUkHYoZFoEMkt4WQDezsc4EYMybueh7FqfcpLR5Mx58DAn4pva6qc1K66WrxeyGy8Wj2RuzVAbp82BzcCo",
  "key30": "4FLwN1NqT3SMZzuneWrBYzBH5wnuBHU3WcxnGEbGVszvSejUSh9aZLXLXAfPG7cb6APNpUyZu4osNn1ST84So4YP",
  "key31": "rrjR9P5m5xTgMaUJkq94ufyuQGTXX4Ty3yAuH1UdUDgVKAJ3rr3oQsFMsvFaw2aTR6n54oQnxG6MzMhfqbw5kQx",
  "key32": "51BxCFxWBSxywu2cWqV8qA9pp1msBDXv55gUoB7yzPUGbcwCUkvbehfuSKrnvw2ZR1vEAEo54kyDUeXhqjrpfDLY",
  "key33": "AzZUescxMWpSJHVSwEg8UM8g9tLjHXJ1uqfvmp4LGcHBKzJyNuWN8pVtyx3F7Qb2mu6cPVGB47mxKsQrR3Wfv3Q",
  "key34": "4J925hQrMXY3ER8HfRgtBrnQ3JCeP2pLzMM85QZuPFgJxJ1jcaVhdb2C17DTVFmN58fBsyR2mijvtAGAs9WuyrLy",
  "key35": "4wsaqrXcXhFocCMt83YoWMqLU2hJUmvjEQJS2LyHvSrHdF5Ssx6b1d6enUhJDtigoFveUACLkNsVVjkTfGngw8wp",
  "key36": "yQaS83g5Bbf9SdSo597ERYssfGtDQFWsZkJg2gjDXm5kx3wP8vBAD2QMsMiv14rfiCVSJ6Vp7TxxGpZ73Rr5kHL",
  "key37": "2i47dadmJmpPwDqPQu8TPkjHBXDWeS63NinUonbLtxsr8JysBUD1qurVLZ53dpu3XZwqKQ5pFCfRVPo9XHKd1MEK",
  "key38": "3fZXMqYAVPak52JTEDRkdrZmPXyjUYS5iS8NgejwtzdaAgrgV7EURGx3faDPokEDx3WG2A5i32qqBKbgdePQhhFv",
  "key39": "4pkCTTNja9qxh3PUwk3nctWjbPLLKRF9hQA1PPuv1vsHYErVJ3WeDkFUr1gyad5MPMDgbVB6PKjpbj8mge19pzX6",
  "key40": "21QFjVAuprGBaE1xYjspVuDehW15vWzqTMK4u6N7CeqXywSnhEh7cVeXXh8R5woUT9m4an4aSs3tSPcLjtE6PZwB",
  "key41": "56QRVHPL6obtA8BaBSyG758KPka6bmfwU9gzJzwRUAkmXn4vzPsq2n3B82ksMgyABXJfmftK7VSd3B2dnBJUHtur",
  "key42": "32gQuLA2Aesf4aUtERgb6tfeR5BWJ2H94sjUrDpcDuDxSDHjjot16Ei8FeZVP8E7vXKrsPc6VhYcbu9eKEfTkENd"
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
