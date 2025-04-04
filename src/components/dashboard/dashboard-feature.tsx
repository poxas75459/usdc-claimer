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
    "QkXmKMUwpSc5QEByRCZijRH8GWAQL4sBvC3zC24Rr6uNMcHpTdSC8CVrTxhdx729N4KJhxHH7tmnp8yiw6Qu5gV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oSSAWPXDtn6xBDevKjoLBMT3AfR3djDP31WFLQHWuKrP9Y1b4269vje6u1B3KSGpkyorJYinQ2HvMumT1fT7uTu",
  "key1": "3wqfVmZ7CawyMsiLVUEDbNhZYdJcdDfuPTwM2X16siMUd33o3pDFbMJbxHbP6gGijPNtKsHb8hHkochDXu1EzTzN",
  "key2": "378UoPD6DSok45rguQWjsy3ZiCkhG7CS3sGqkf9sHy6aebnCRMt9gSUPHqUHd9jXXM3XpUbQ6VpGFLwrFcj7pCNd",
  "key3": "4UUhPuVmMNdv7AnULhnhytAy1Ld4oSjXjki1eMVq2eM4ZiyaEejf3Syqp8aLFsEjMcvBFyJWYhcRMafLDtCB7Lo5",
  "key4": "4Lj1vBBvQDpW3gP1AHv1cLxtYCrHbWXCWa4wsGwykQRTzedaF61Nw1kusqnRuJ6dp1itaDXGwKLBC6F3NSgdmuNR",
  "key5": "28J3FW3QBExgNSk7wbJgfbXHJcH4mRzGXP7aFBMRX2n5jbDodrWyZSf4FDa3RVc6KL66UnSM68s6yhkFhUF2Bzgm",
  "key6": "K4DJ9krL1XHY1RT6q3zvZX9enkj43hkGi77hJhEdmbaKCgGjQomdSWJXV6o2QTzK9RzbWTRfzJ7UxMWD9nMxtvH",
  "key7": "3a1Rzn2KhDghkQ4QCYZxVrXj4fzLF2GRohMV8EpeuyaLdTPmME8kRDLdg4ZG3v3b1LUrY6xpcw8vuDoUSys26zvG",
  "key8": "KaAZPPUKbQetk3WTXyGSjL84QVYZ24QmTftNZsfgB1b1k31WrKuqrBPQR1KaH16vRauGtGDWdcKZbLzwHtw2iPd",
  "key9": "JaYHqQLd8ZykvR59mHwh9QtULA29NGLkWGRAJTVU9imR46MguqvoyGZoRUhTfK1YFbf26kkHUWUMfRVrPnfowuv",
  "key10": "5d6QxhVSe88fu2pk2HmodG6o7sKYzbGAnrUcE5xARuXXQ12cvGz4u1udJj29Wps58NG7ZaQ3HkhiEUy4mSwdkwm7",
  "key11": "2fHH8rhhGv75dt5ei2X86UzgkCXF351aiyqzuwP4KeryfWw9W6A9RpditKazBditxRpVgDzSbcAw6y9tLiR2xBuq",
  "key12": "44rdPkiZmdG6QHCChvU1SbqL1kpcXrhC4AjmYXpL4ZBq7iYeUZvDzSa2rBnq3RXK3j7gQhJCQ1vJovQuLKcuB91t",
  "key13": "5hMT3L6GKo7pzPqvBXk1tZSwodu3mJxqJqWwCLrTNh2fhjoc5kxo3KHYWLYPrDb8iRrv6ZZT7dbydomEFhsKUijj",
  "key14": "3nFBdcUyfgQCwsRzkAK6nTaMxG9zp5VEdfVRsZi8P9N8rGYB3yNPQthnBzXuEsDTbP3N6i7dopk3rCjmUsYhApfB",
  "key15": "5LcVK1Jf3ajsUwEihkfvSggZTzpexEmvSjjJSRtXtnphE6fJxPFPVdLXpTi6HnaoAfbgaeXLmoVzpLAqCePRBCCK",
  "key16": "2faEc554Nk9h8zN9FdPdyPuaDMTNLChunsVtRa1ojCSCwnax2S9NuUHvs7GAFt17MRCb4wXwGjS68SmWSQ6DM56g",
  "key17": "5xXcbWUWvwHXnDLpZAPZDQjoanfiqLEnngh3D8sYGTWYfvWAiQ3BPYoEyYDLdP5PZqRcZGZJUkZ2c2ss8D4QkL5R",
  "key18": "2uoDacHB5bZiyx4sQ1HsWPBiCHt5hm34B3BttdESbzLCof58sigqgiwkgEGw9HntSBy82E3JLFHxThPRcrZNbGjj",
  "key19": "RYmmhBwwk4wUm7sXhz8HxTQqSzm2f9iQdJVNsnKAUEK6rzQjY1pg2C6SZTmRoxgGUcLi3eob9ptX5v472dre7ge",
  "key20": "2vsJoA3QreoJTRfujD1K51L3ARTshUmi7Xc5c4STQNCfiW1zqchHyDkuL6EtaPJ7heefrXFP1MRLFF8pm49Dm362",
  "key21": "4i758GzWYxkuq61P41pJxZvDZfT21fCku41tCzCda6NLZde4arHUWibW9si4XZ6KfaqBs7vhMUJp1pb4pn4Uv1xp",
  "key22": "2vtKzVTTT7h2hLXa4Vt9oZqPpfVfNktMXdxhJ4T1xaJpHasCfBgqUy827zpbDfxmPvGYC7Gz3povtbFukmMrKsKh",
  "key23": "3nU5awRs7kJ82vcHoiC8prejbRDFByNZgMiuKPASFaSTzhaeeNsdRpEMRw6FouGxYXudg9qcAeyXnuN8zLyBJzWN",
  "key24": "dse96rnjta9EVcfnNDvMdo9bFDdKY6fRQYDTVXDVVCYhSkYFXWB2HMw62E7zmwLYRq6mLi7op6RUFpcadjkKXvB",
  "key25": "4sADTLWVaN5JbTB9a3zVk3iciAgXfgSVdh4WcgzHDTjEMDusHSxXUEPuByXZKkoQmPyn8pN8XX1xuFEYU5QYHGR5"
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
