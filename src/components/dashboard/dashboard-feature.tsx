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
    "3o2G4vWPWF7XBE6aeg3FWZMTzR7bT3VD7bitHs7RUbTni1HjYFLPMSFcAPACPJHEjbzo8gHVkPt9T7VMe473BXve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MaGFByMPMZ8EhcaR4UrjB3UjrEuuH6LJrxSvE3Huk6oEEL6AXy9AB44eu2y8frQiYNRThm22CDoQfMPYmY9Whwq",
  "key1": "5iW2qFb7pM8PqtRfFn8ivYBYpN3M5q2of19QMKf7V21QmaiepmSJ6ywn5VPrGxZvdgX1PEELQmmktc4G8z7zny6r",
  "key2": "5JGXTkcAMCDog2iCscjezS8FvDSzY2cHoGuuoVAG6yY7FkvBu3SUPt6xXxaTHvLvaaYZDR3t1wZtV6yteWXWH8r7",
  "key3": "3pyLPUzHiTzwx4MVEyiAqbSQwF1vMqpHRZHRPCy6t5CdRrmjuEv6M3z4QdBtgayJY75gcTjZ6VPNufHUYYFrqkkF",
  "key4": "2PDz21ckhGyL3HneJvZVzpMFNBCRa3Z5hdN4pFEKoU4wSn2Ay96qzRe2Zv7rJEUCSvYRZuUKNDm6dMW7gQdY2vub",
  "key5": "661vFB3ZTLKD1PtAXrLVaZNkqboL6qtYzj4A85cj1wvgDSGYehEWzAmgVCpjZJh76rM45tx5VwDdYqX8ZQMQmtWN",
  "key6": "xBX2pARmGuPvmsdRiLayfK8SFbg7mL4BhJr4xFCYEDUdVLAjuoNvh369G1goTAnd9jTocpWUtekSAzmDU8rUyL6",
  "key7": "4sh1XTYbrduu5KBoHeWSzJVhXYnsD39Dccn7hZfyvDQBjPmjw1xUwE5m69drQWBUSnzUdAWQBmZpjRph6ystzyna",
  "key8": "fBRWQY9n4NQxU9nNXZ4ZyVqtfkAxVbw25LdABMXqnw6nG9B6SMfoNUGSUUQqGAYnnQRvJttops2AgjZx1idULDi",
  "key9": "4xR19J5NHY7thXWzciC6v3XehFpDUkLVYNQBAbohN2Get8wyr3kdbA8xCbnWw6rPTSMSdKUAcrSexxMTdfwu8wKA",
  "key10": "3jrdmdiFXQMTCYJDGzJ6HkraNZXUauPv4MrZ6xrQBWNpEQoLSRGeoatiA8z98NacD5FdMWtL1xYw754cujXjDEh",
  "key11": "22vavMsP8Hs4Ba8nvU2gYxtPDZafiGJVc4C5zt3TQxC7tfNG9LyWEvgMvD8yMQAip8NGcYX8bMW3EuRFQZ8bejEK",
  "key12": "ifua42885ho2j1gaohREDJhQfRW4p6N7mZnpD6bnRFUuqt8rNx3VRQNrQzuTKa7fL1qcDU7ujx5M8XBdevpiChC",
  "key13": "T71zCzfvLURfkhmqadWyTYoov9t96AvcohisZ7VKZWiXAiwMgoaS2NS8mwSbGLXsrFzZWzLFTW1PHnEuUWe3QdK",
  "key14": "2mU2zNUh9vn7Q5yShs3sge6GXiy2DmHARCMbdj6nuGaLmKxJWtgjcQpouskUtkYGfEpT44yMk4WLuFax9fiaW9G4",
  "key15": "5Yn73R292sd21vMcsHqTAJ75FAWfbUNevgsQTBc4Z83wnbwGHFyxSD3JsXzSbLbHAdvVAVQk61z4uxumK2yx7jT3",
  "key16": "4i9WEtwHxnyxNDEHh8yaB6dwVrLMx25RLjZin78EScBwFX2krnAGKboqZHrM1TRhAPDbCQmBJKvG9P9HcpFVLxpw",
  "key17": "D1gnYodMLEoCiCqgjjyYPK3dGAtebQuLQWxHrxxAwwvAGwhMikwkahoo8rtpD4xNYVNWbm8gubH83Q95d8wT7x6",
  "key18": "4c3ogQhkayQN9NmdDNXR2Eth59ZwK6Hsw7jZQYWUEGuQtVzareqxhgv59FjLb7qNvT5XrecNv1BMKumH2vh2FViK",
  "key19": "5Vrq3jazch3eoHJhZNXk3GbkhHL5CiWuVPY6F1SJ3PKX44QSitMXyobuQEzbXXG9MuWoWmrsujo5DjtCXmMuNH4W",
  "key20": "4gm5AT8MXt8SNVC23YdTuZMfe9X13PGiDgapXboTw4XfPZPnui7W1XxMdKQzGYzSWRLDQE5UAaiLeMrQYoqsCtgi",
  "key21": "3cvcuoXFmkmpGoDAAZD8m1f5Mi1Hhx2PoseCc7qtiFqQH5zofSnriwQacLrgR2TJuw3s9gYwZ52tVk8rD6Kb3pXb",
  "key22": "33h3DigbU3cRZqCe8BQARvN4SiPmnTDEYmUAxdhMmNGdyQGcr1cNz9wm4HwyJitrgjXi7Y7MDFnhCxagyUbkBEgX",
  "key23": "4eQ3ApMCccwMM37HCzfxxBzdXnkuxCMz1N1kXtJayQuH8XxFMh3iqMUwrUYw9WguEQPXb7uXGgNwQVpSzT4dfaRn",
  "key24": "4s9Re4bXEde4cPfyxP4Ejop6jqBwJ5noD9MADPGJKctg2NCzjTs4EBJWXx5utt7xdwhcrTTGdXrNJaMQUnh3cy5W",
  "key25": "3ok1z2D9j9xiMJaMiY6RMqHg5Rbg8YuwRci7svkhrh1DsGA4CGAKsaSLLDY348yJ5Bn6pp3H6PKgf4G7NnEqT3hB",
  "key26": "gtuQW2VGnS7v5t8kEgHFNtiTZtRSNEXxjeGaCGu2XmupzbmCYdC9nPC7oY9RNMWXggpZBdN5wRHERsaoE6EJWuH"
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
