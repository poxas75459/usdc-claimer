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
    "2S7XqJnwrHeoQYcCLgFE9sWV7qNpScfi5Tr6HmCitJtynh9su5ygZfYa7DJVwpPiHFVx4fc4j6qthh4smeyEiMqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dRgxixReqcRPAzkKTSDWBQXKuSTpKDVFRSPUTmeoSd57oThQgY18GLwi5foPoF5kHuAW9RAXFMtdjbmajVsS1yJ",
  "key1": "4rwsZC8mmAtW36iFKnWCKBvd8bjGmXf4xwNMnXkKnAmfsFPQGUs6v61S8pxeu3nXHNHM4wkG6kuK2dAZSAmJUpKo",
  "key2": "5hWVmDD3PME2CyG94UKYsD9SUEBhk5zhVsixYtNauRnCLwSXhodekLe2bTwVpU4Fsb1v2pU9dyy1YgpG8wKdZuSy",
  "key3": "5NGPSVvvjSjLpRToJFshnfAtrms4ZD3Tx1w9mUvixo5Caa7X62s8EzLxoKzNrwG5CQ85WEnMzcc2nZ1T4zmwhNgR",
  "key4": "5aerVPGpmynWiqsNRKW7jL5Pcc8jTNeSnvR5tfaWCZLhgcUbuLqopjYXZ4TvpDwwmynFBXEWCgFRKbiegBYe6AHT",
  "key5": "5w913KdhemqBZ5rDBKL8DEq9GCWLRyj5tpdc1XTL66ccexcBSoKDpHgnjcm1ianmDAnXjvkHZQF3DbyjHjReRo5L",
  "key6": "2FTMrV3JttYqcc895sE9WzLkq5fgTsLURLmgYnWDD9EMc99NLeMYE5VkdeyY7RrgtCtAa9oT9wCZWKAgoWAAHeDy",
  "key7": "2VkyoAQUUTVPWhysEMmxf4t6CXvkDrVabXJvMi7MwbtLcKHTcbGj2iX7js6KxodS1QYa8J5cfWhZa71DPbNQXvcD",
  "key8": "2sJPdMQUzz7QZFHXZd4xjV8gPUjPdvkntSzNCrfyT2mxbkok8EmXPQiaymyiLvwqJ38mMkLMDe7FF6LufmZx3YYq",
  "key9": "3ZoUy17PuDC4LGTJopvRdJVBJf6BntbNHja4zsmhDYCJmPpr63SUgZRb35cL2fHaZjKLDzc9Xx73h2dJ1h5QRNgX",
  "key10": "YyAayVgmwsoqVZqimaE6DbPAsGzzttkHRALpVWAQM9HAeynmSKixsdcNywFYPFYKkSoPjjp9B32x6GNSRoTwR6M",
  "key11": "5AzQ3Bjv6E8NXW8HG9dPWeQSHi5UYELoa8YQCCSUDSvx9LYZ4s3fLRn8KFpQijjrACWL6aCHE82YnXtn9Bf4RtxE",
  "key12": "4wkXW4Fjbe8RwqNPXnL4pyGXhtXRtQqgvpy2LoN1BRAw35q3BL1NHZGSwK21QTxguL9ZpZ9AoaVSXkP5baef2PhH",
  "key13": "4hx1e6AZpZ9Aak2zBSQFrWT8sTANhaghAzbmxxMjpXwRs54fqHSD67MHLBoaKYC5nTT4NDR24zwRcuodMkTPCrR4",
  "key14": "56npmjuEECwW2YN9uUiDiEDkMYkY7hqy7ct6cEXQUdZPxWBdJV1KucM4qW1qJ3s4ND4YZYFrXdbZMaq2LdajkYRJ",
  "key15": "4YozyVtyZP7jr61GELVjwq4PGTuefrs2AppviFzHzTTmp3LjxMd6Bg52LGyP6GsdFyhD5NamjEzdC4NeTJ4mhNA4",
  "key16": "2CULmfPgY6inJv7PR9u1pqxtJ3mBCP9CmzKAE5y9byxqaxSQ5uTFWUA7BB4KuPX7unTKsq9JVWx3u87ZeTAs8RL",
  "key17": "4hXxjJqgEkNWEtdwNr3eBceX3q1RHsLPJApV8F3RgEBD42AVYeaurKRba6Q9P6zRcMDZQ2kr8fXCi6LsfqnZrkUk",
  "key18": "5GMHEsAv8ToPGx3oScvT1pwQMiWWpU3qEmuimvxPStiYuUbWAAYLaCThsAGY3X1ZpGw5WD8HmmZUMfWrbSzYSGoy",
  "key19": "4w6fALWUWDMo5too62CiMJ1zykjeYZNtEbnyi1a62DVwgnGvYXQSLgAxKha3mK9va72txjP9FX7yVJb2zWNxADrb",
  "key20": "5kjKNCd6CGvpWzLjT6aTEjmBbUT7htDm2qira4qaCMtimg1TSsH3U3ReQcRcc7gmkDUYYTJLoeHZE7ufPqWxmanp",
  "key21": "2YyN6FiUAkrJifxQKUaKYXSGqcBdWe4QoUuKdnx2bZVJkT9VdH2a4KHJW5PLWSScAzHDPMTZxBzPsBmYoiFgtwds",
  "key22": "3Ni6o95n7phgPqLpAQHdosMq4tJroqgL1iemwbJa77KMMMqSvbcbkNqR8Bk3AsoM6RpcMZ3mxRt9aT47M1aMyrs4",
  "key23": "K8isgeYqjiZa4onwiKb51v2RKHL9xKSis59N8eTJgDexGXf9UWP8LZQyUB64rLoCySwUzdfeZKXSxp9R2orz7Hz",
  "key24": "5wW85FikD5R7BRBo8xekhSeLc2AD5Sv1nXdRNwvaQz7iNizwaCdwYkBdfcZmdYf6PDdc8Edvgxci96Te9Q6vppvd",
  "key25": "3DjcM2vHDwX7JGmTPbeL3ae4EDhrB26ss8MCjcWEDX5eC2CaEwK6P6vMaPBUNkJ6XkX7iUzH7kep5imbCzoo58Zn",
  "key26": "57gGCKwELXsJzaLbCxFJcp6qcdQCQwNhT4LsNU7WsdsiCCWb1XTTA1qU9sJcu8QE7qa66yFtwok9b6Z18yZ846V6",
  "key27": "2NK9yacR8NaiNXxQ4Sta4FvmahDFcPBmKpbVrT4kWwhY1xLRZazYGy2FXDUYouAbTWvtnH3cJXwzs5nnHKN8FzvC",
  "key28": "51UNBag7ufr7Lx5Fa8v28SuFxDtSBBzECL7RedXHrM8cTTgpxDA7NjKMbqZNoCG8BQ1FDkntKxUdvJTLHJsNNsmS",
  "key29": "4gHq81RZNxKV6eGQqKZkgzRGFxPAuQc3pPtvksWF2GergVdsMhhJqpTpL6dFATe3wCWVnVNzjER5toJNFha2q8Fs",
  "key30": "aP1hdHi4aED6Bq4FuPaZnUgdjpgmbXMbDEpvaaRUHNANPfcdaeiVe9GiFcTK1dmAHUaNovFR9M9KNmTWj726E3r",
  "key31": "5hJAvBs43FUxfVQsRe9VCmDeVtywcLuoUujpbCH2D2MNqrwvXLhrvXpnqaJWkdXhAvxS7CrPWgRZMFNMaSZcCnLK",
  "key32": "3bs3fRSeskepUCDWw4Lc5oCQm3SGStdyZoY53mUTmAMLGYjVqAe5D6mwuED4QtxMon1CwsPeAv2qZWuwwcfbbE41",
  "key33": "3mj3hHkkQd6XLcbRBDmxbYXGpxqBoaVQsVEcHKdc6xNf1aZS1DZSjkVRiQ96jyLMR4ughpp34kSgTM7Utn6UiKBb",
  "key34": "2nmTkGTYaMLuKdTkW9P8gLraL9ejRnp7wuS3bTohHfpQLin1W7tNsn843MpU8MXHabTZzVs5XGnQ5cXsGq85Tk1",
  "key35": "2UaeFdibs1DWKsvNizz22qBgNziuu3Q66gnTkMjTokjerMJFmyvvP2XV24KghHfaGcz1UU1qd1U491Vi2W9oht9v",
  "key36": "5KFDa2exAByL7KjUbe4FYERxg5yaNVtJGeyP9ssnaj8aoBcsspkN3MGmASG4pPwvN74yVSsTeeGAZqnigEJcv2vY",
  "key37": "3CMvoR2p9hkvxxoyatgAN7FicPUvtvJnD7FRGJuNpG47jbADdiH9QNRteAEsWdioXe5Y5w8YobEz4nUH8Hh5CnB2",
  "key38": "viT1eDxycwi3ZfCMf5n8VoWajXJTzQDLMHhegzD69YTXBFwSSqnuRGhMP1ZBqxBraiyZxnfJwK6Y5JMoz5GYuiq",
  "key39": "4ywAcfpasXR6pW6oX6CPyZPyMnX4dnEdEfMmPuBJx3dGbUMvow61E3eWEZFW7NfUNLzhbkERqbFkXm3tND8YHyCS",
  "key40": "36RLtnmpHaTboHtMe9FDU4c9oiuJXW3FDwSf3mZE9GD2F1E3dVMZJm2Qk8mABs7gg7SLSAT5UFy6dYNxvLD6Rnba",
  "key41": "2hf94byLZyLC77VYtfomXwCFSmY1nmYp7GhqWkHTfTorL34eatj7C3YBVxh1Xdz6yFLiztTLSgACLoXwDyT73CaR",
  "key42": "svpHMXV7LbaDUdQHcXzbYcmoJSYp5F1kR9GT9SDvMatyKMMiLqYg6inyLBewuBM2amGJwA37Re3wUFWPBG6qRAn",
  "key43": "5bxxnseEHDa4XB7m5u4SiVrByyLNSarcb4iCJLpXBfGbMq4WcEvmxaZTjA8CDvPCxmMkuCk3aEpJqKtRUW9CTstJ",
  "key44": "fjvnYGKXFZR6VxrL3TWnrd3uDHBMevUevLsaZnto5BxsyWz6AwXasu8W5xzSTG2aqkH6Zo6a8uoGE6AwPRUDNmL",
  "key45": "5F6Wkok4M3tZuMeKhx7Z3vjK2pvF6Dwm7ZPib4VV5fiUMwhW8tbvb5vdgp9GVdUVBBq3vfBLnQBESJayp1a8zF2X",
  "key46": "2UjdAhopoTCvvkg4p3CzNGSoshnPY5YbjWekeVFxLu5SEDvtaPPCukGxx8fyWwhuKWMgKLPVWKTTQDi9LNB6VoXE",
  "key47": "vb2LSVkoUWdCvnmUWCDV7Et4TFoMyja3qvG91EVHfS4oxoWjdCzFkaH1yLZiKohf5f4bjHx3hRwpTk9LGV4X8zq",
  "key48": "3GKzKgHvXWd7YjSLCf3uVfRWTSmbLrgw2pthKp6G8aAHr6pHnt1BQg9vYuSC4hz9maUXkCHXhJd3NvdZijEDc8DA"
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
