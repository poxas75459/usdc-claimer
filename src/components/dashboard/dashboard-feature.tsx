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
    "37i9x9JgccHNYxj83uGh8eHwGDSmgtymzE3yZk84bh9nAwh343bJFQhoSEHbjNEKDckjbxx4LtJAafzFGUAgpJQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbutkJUjSaxLW4QYBu4x2M4cQsRCCHC7covnLB11SaQQXrPTyAGW5oVYBfwiiUHFH1w98pMewnLLGvyxWnVRFQe",
  "key1": "7EMvbqgjSVFzmAkQUiaTU8iz2QNwik7kHQHxfrajotq42oMHmL3LcFttyZ2F1wyAjtFEXPucg1ef4tjfwGHwCy4",
  "key2": "2bKnu2VUYwZjwwe9JCDy9rSBqfrKRnEPpo9mkWmCtGMKN2vN9woM5eKdJeHkrXmugZnRjQXW7GZCDEQBJyU1TEjK",
  "key3": "45eBJxZnM8a3S7HwL2QsfxoKqdUzXh8gpsdNCqvHphSjSj6eLSWCq6xZTqaGWcbvuyzYFDLkB1H1rXCPr1cLyBL8",
  "key4": "49xD5zVgHfAeMJjcYmu4gYD5UocETMjb1s2XiS2ZN4KzZYjCeEwJwosxdVivhZVghVjbRngkMLJk9BzAVJXoPXsm",
  "key5": "5TAMEtsxjy2DoEaewxUvBNsZC64SazCRmVsFbGKqrWnum9xf62AoByomuBtoAeYxAem6BoEhc1J5yNfdoHeRooQn",
  "key6": "FvLfKXSJgYHVTgHhYYCtfJTWWanL1uA4np1PBAoksB1WxUKgdinMXreeUiGtWBECW2xFxpXYKaUHquwqTur6Z6y",
  "key7": "3Q5To8ZgDfwk6RpEFiEDurdWaDVeCVCouGno5osN8Cbp5EnQPvLSMLtmYyEksdqyyFXBnjBPuNd3wPjnhu2NvrBG",
  "key8": "giAE3pWsYoHYTxtpsi7wxKm513jPLoSk4fuuVueKyMEfTpsaqRdMJyPGKdezLEiitTCxeuqx3Afsk56iJTgSQmQ",
  "key9": "4eDPk9FnpdVdr7vjd7X3j66gHjEJ7Yvq45Nq6573Vdp4GWNaPeiXRSUdxy7rDuWMqfpZZ3jed2sufagHxNkAR4RY",
  "key10": "YXcNMQzqQrd6H4APazN3B2Ri9EDCexVxdb6q5xk763Mfy7XQHqJjgF8EMKpfPcjiTWZ2oVyeXUQ5ger5X6UrKtx",
  "key11": "2abfJgEQFhY9VvYf4b2YCxriH1CjxYsTykbFJkLBMamigFUAZbNyFbHqi1PSeNzThc8psaSP5A11kdAMNCer194H",
  "key12": "4e67Hbuk3UKR4gQKpiU67nj5yTj4FoNB7eGRQyyciXfY1uYxDrnTXybwNvmiofnEpq8crzzvji3icddZGqTBuRC8",
  "key13": "sAXSMZJs2WzGbRjNvwJsTuQwpbCgAsPxKGP9121Fqxn4WdzftvYAgiaFiY47nJgCGwGs8LK3YnWcBPkBLmsDm6j",
  "key14": "5ic7FkErvgmvrK2shNnxpipY8J676eArUak78uwLLJgJQ2F9p7Ft8hdny6nRjyNN624ohW1f8yjDDRdyyqvtrLNo",
  "key15": "2gB9iNwTw83LQ3R2FkvuEAsQTpG7MVpJ63i1CbnuYBhXX7svQXnWzDaLv9Bg8SNyaj18pD2UC4LFMTQXNRXZFYpa",
  "key16": "5tjdbwFxotg4jBYXngu4iTWmVF5xb5vAzQqQuycrrWAm8yeXitpWFUPbHSL9imQq38wJuwGGSs3Z7c12Rb821Xp7",
  "key17": "3BcUpGfNRyXKeXGLDuUm6vSFygubDuZYybcCrVUyU4ctyaLRgefs9GxJYhGquejDs4pErhPrTCGw4EjyJt5K7ty7",
  "key18": "46qbAXSpMfQPz8iaUuLHXDhjeZtswyUFxx5MFWMuSZ3igAy9Vd6MGPpxbqvB9xTquRBAPEpLr3sJuuxGiUMpHsbT",
  "key19": "5JikUmQrX6LLxmuew9ZgUXxL7k6S36WDvxjfkp3cc4yyj8fJTaTbSAH1PguMMGYpbQTyg2ecjgeviDMXuhHxWATT",
  "key20": "39icsUp3S1xVe5XPHKiMdtjQq4g5NGzU2bx6NBGzvTgHzbsNLrtnVv3cHKr35gpdQVsZRbozouwZGfJrbb4M1Edb",
  "key21": "4x64RpdqFTcuNxGdgwgTAVxEojicQUrBBQqWNYDXSk64SEED2Vh6P9nPDXHf5TjzR2qBbNCykMqXMfN8p4sJ4wS5",
  "key22": "GbHPi1Hc2ugSDNR7WkWKLQKXmUM4ZLm3YDscfmsfiEN8JYNRJtjoDmeZHUDtpCXacFD7uGtsz2Buh3mZDn1p8dV",
  "key23": "3uqsyUAevb3uosz87Cw72nweMyksM2sWacUph3TBSDmAtgF6aryMuNNGT3uxbdwGKXw68GAX1r36N78aJGeaG1uz",
  "key24": "2uqyQ9gWp1snqREQUBEGsHR5faaqmfrtfE7PnatHkb9ufDc9m8qaSrSnG6DKQYtbRF72GwbZEH5swDyFx38AWVxg",
  "key25": "5UZZ3afKuQqisJuhTfcXDHtG6wBWFiroiy5hdToTvcnvYQkiKA3g1h1zvBmX7xaQTH8QYqqMas1DTBqMYDEtFQQy"
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
