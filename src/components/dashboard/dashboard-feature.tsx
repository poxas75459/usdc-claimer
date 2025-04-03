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
    "63gjCYu5ux6AnsqiqVijYTCXJ4vxPEw9iK4WqREskkgRwRqUGZQ3k8jf9fXxmBpo2TRqWi6MwHXXvpzsxxnti1BK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ckCABPGpDN9DoLqHEo12TFwDi85UUEKimUTByk32FxxJBVjkuopvEfG4ptJbx3FYmiQit56cdJA7kWfiM3QFPcy",
  "key1": "3QqNRjEuu7WfoaVuo5k2WqH5PH8qN1KC2KkndJ8B6sjKecumiqsh7yWWqbTJcj52y7MdMetsVRncCERdTrB2yZtC",
  "key2": "5jo642gT2NCzt2MX696ZiCZDybWgRQYLLQyzF28NqaQEaFcX63Msa9PcS54n84BszWMdzKre8hRN1EvXcoCvoDtj",
  "key3": "4VxxymHTad5DQ3k9auovDxDctXvC86zaqaGmQ7QVGUjocbvrWPprJHFJo26nCydTuoQmumtFQ2CjNMWKgdzcySjy",
  "key4": "37vSh5GwwsaJnDm4ogdZYAawr2XuEZ5zhmJyXhMtsAkTmx8s1xTXnqtCayCrXndGPSmhbr5bXKWUquqk2jWpVJCc",
  "key5": "3UDMv4qgeRxmM5RU8tXottWWcrYEgtijnE5dz9jJW568ZVdnnnUP5PLqLK8YC8m4r8wvMN9UCN2vMohDM8nLebTq",
  "key6": "2dGpxznC3SNsFTrET4nCyMF2j5JrEncvbsb5P4qZtgfRa8kRpwB86LMABuYijyj8pjN5SQEqhDNgSnYEC8ZBVLsZ",
  "key7": "iWRSLCuoReBWpChaY3ZLsNVdJQT4FPxALeMMGKgKsd9HGFwH31aKRFhqJyW2zXZnB76f1JGcHgj59qWEtPJNUZi",
  "key8": "261UHEYuXqXEKUnuQd4sfaWGUX4Nig7EJY1WFKBMfhMArR3hAUmnuoTqHtyQxDcrgRPq4gRqyTgmMnvetATu2bAj",
  "key9": "2HHYuCrX9tfUvdCgtdFTqovQ185emcupaNDfsp8MDpry7xUDBuWvWi9E17WvEniiSbMiLc7UY5mTdoSbS4KcUddC",
  "key10": "3vSfjTPatBMj3HGSVKndGAE5H7zpYKCuV3p8xVTBd6meqyoMNzVJt6kEHkGJgtU8sWZVMFHdPnLBWtEa9tRGddEa",
  "key11": "2Uv2nAeTw9DCfYmfLPvUVfHD2ZHd5bwxsN3j2eVad6Hr9n8hSPWGZVUkrGEvnnkT6rFvqKrDxLTD6Bs96owq34VD",
  "key12": "2gRxVwae2pexqFRTkMuhf1spJzqUdBACreVGFkC1BqWSYr8Js5wAfj7jChkEQvWoVc19V69Y4cRKFi4tnCVRnYiV",
  "key13": "4yFpax2a74vUiuHcWetZ8AACLuQTzJ9iKuq3ye73DWa4jveso3HNFZof6EacZuUf2cpRLfEjDjUp9SbLozCCnsgZ",
  "key14": "5ocVuEfggfGi6D2C4jtP6eDLmAE8JA2qBZyUEyPPfmd2EgMAojwz9A4J2ttxWsc2ik7MinFLDx7c1JhmXcmWKmE5",
  "key15": "5uHskgbzKhTzgL8mi977fkKCZT9rBdXf1NGrJAKage8PGGvBWLrnziNW3Pm6aQu8CzZtKDvuRKYvWzisVonaUCvh",
  "key16": "4tsUD28q6dQKhN3RWKUn9f3mysMtxTNFMxgycuSrrVSKLJUUXZf1iPKMJoZKeukWstn4mzvudcWzGCGfJAouoyEf",
  "key17": "2QKLWcFP6FUsXDBPdi8tpxikKBXE5R6UchEaKCGyFCPe3fBEdXwY9zNFCd2oKWvXkGFe456LD9aC82KaAdAd5AKD",
  "key18": "64HSxW3mHNbPJdnVnq2aeMFGdxVeP7injYrfrvBddgyWWEzqbZaFt7SMwtSLRYaUV8aYgN7fNqF9LUAaAB7kYdFA",
  "key19": "28yyJ4UYQxqxJev5FWdKpM4qHyHtAeuZo91jtnpA1R8AhwcThasgC5Y3CNJ7xoM8XDQEg8hzqmK5kgu3R2qMcWZi",
  "key20": "2TXNDEXnf8pcUBDjFm9PD3fit3w2aktK7PyMcou62CbZfJde9Cf4bVzQDkx2eR7z6umw7Bt6m9pu4B9i25iLWBcX",
  "key21": "2XXc7AfMVSaJBV9xpUXkAmHE6NNteNMXS4D8dLpthHpDDjz9PtWaaBza56zAdCJe7N3XTKgK41dEBemfJfGujKgV",
  "key22": "2R3j8723u6E8YMWSWfqTRESqoUhRzknigTFV42VAY4sLmTNsaSAhfFukxSGHnwnrdNLFP5sdd7zA96rPyYKY26fo",
  "key23": "3cSRD8T5D1Syt7doZ4pzq2dFyv8Zyu4nntTXyGWx9zuiXUVZdmX3iJF8QSU6VSiGVb1VGP5aEXHud1uBsgieJun9",
  "key24": "5JuWMS2poFycaafUdxcFPiFfx8gJLfVdadaRKCNBD1YpPa146iUfFCGSmghdj857HS5BnYraog181nTrVtZDYJtJ",
  "key25": "35aUXPm33J4vdfGSsJ1gEpAoX19iTotxuz2ciwbzYFSkc28oWacSLQojVp4f7F7SWTxXnyKqQCGRrnwQYbxtw8zi",
  "key26": "51ZTLpW4Xg6LavZZm2r3GAXmfdbkS2Rxb7m61STz5Cj3yJfJnBRLdkzmEtRFrBDBh3ozR5k9H6TJ9FthL3TyoY6x",
  "key27": "3qhs9sqZbGWiWVip5iH9Ycvwhx4Z1UTcAuV41weo24a9r8d6BdZd47mCHGxRXYdEtV984SR4nuUXTRsdPdEc5imu",
  "key28": "3tWcgnh135eCFyvg65UhFbiLa93yayykapgzANCmJjZF7tnk9LoP3zv2TEJvaZYuEFoMo6mcdxjBWFGGyRuqm3Ci",
  "key29": "3Xn9HAfDQ4CyFXKGSCU82Tkj74pPVvGYmxNWz1s6pXq2VuP2xiDLwUwbR5FRtQZYoQfUuxMNegJVyVvHDQihZh2s",
  "key30": "5FtNVpkD8DBShVNiaafqxWGEiNHAxtbHMNiPmSo9YuasBDaaUvs1ib7eTsPdwV5bs3WHA1xxcdb95uWciDeSNxDK",
  "key31": "33A8QbSnKJg4Z4X69N96sQqXMeBKz7CfuRKzaMSHFnEh74uuio4EAAjW9DBT7ohKiRJoPxk4Dxet3pfjP4L4dUf6",
  "key32": "3AwYXt3BYaaYrzaeB1GRuhPunVfAXu84gnaQGipc8QSd915dLJDnfKNWEEk84ADoCBopqtJwuEZkjGDAUDVxNGc8",
  "key33": "2Nm5T8KTvtTzdC41RNLrwmpSA9bPnsvnf6Yo4T49jTqXndo7yfnr57He57x5zzsjoYBpySjbHfRrFJypFkiLE4TG",
  "key34": "ArMLUDZmSrqnipTsrmJmrhE6paDRdxpVP8P7AEvVqf8ipUwQPDdoqQ969ALGbGZ7NLGaznskbBDn3fkveqZt6HE",
  "key35": "4JKm48CUjftP6i9QepgUwX7FAtvoxyVDwLaWbnUrW7H351ZG7KmMJcsoN3V63cesKjkgiiQtEqycaRYKfQQiZu9M"
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
