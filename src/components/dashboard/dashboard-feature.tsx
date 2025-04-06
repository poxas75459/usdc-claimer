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
    "2UDu6RZxUu7pbr8RVZe2Tb3WnvftGF45d4usEmLRQHxiTHLLsa2XC5HHFniSxjYtDtUBz8bgG8UUmfF7zAjwM4Cw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFHBb6aYALP5YeCp3j3mg1pyTNvwBLT2PHh3PU11z8ABChyCrdVVA1dLwcuGHT4bFc8EQg1qRJjC1e8pxRkSqhq",
  "key1": "3JmYBBnstejDwKepr1gASa5WymTXbgLuhAwhGx5ZQ8JtgrtTcrfGxJ2H8ZavRJCNdphSi6ptVKurPepEqFnkXFqW",
  "key2": "452KWNvaYeN8MBLaUjgKR4iSaL5s9Pgq1rXyZxwnNyvV8CRWw7BZQV39mTEAyr1Af3EUmNz5QycKzkr7h2zYKra8",
  "key3": "5V1Rm45uH2Ybrnaw65GrRLHLErCWf8iDaajtdQ4Lh4CSSmWEFjjS9LhR4gMVUXdBLN8fztKiwbMvuKqkpqYEHNSb",
  "key4": "2DiGiojnsLazvepRP9cToKY8WL6SXiKj4GAgQddjUi4KjkjZ7jgvs4KCy4QXQCi5SRvjanFLuZ6EkGVizYrWtHXt",
  "key5": "2exnbrk1DMfAEX3MbtjQhuuybf22UU2oAavobttoEzRs2NfLNwvXdwVBGRLPDXtLwXDeZTU9RD762wmFFArw2rhH",
  "key6": "3HJY3yBdvS4n81ffkmnTEsx1r1Mq4HqkSyUSdVawiFcog3oJvuaq9hkRD6SMC4YJ19rR64e1FhnNqTn3FmppK7Dv",
  "key7": "63cnyxR3ZNweNiSEzDySr1j7LV6StGGbYuxj3VK8KLqeY8oT3GDACNvVZqpHRHVuD6xxZ7Z4M8nNr4RRdHTwbNxB",
  "key8": "65tNGhpokKULM7EApxSuyk5fWrTaFEZXvYJT2eJ5xtpqzmoTBqysGCYbEG1YJfucAEkUPfL7xUFwrqTe2t5sq8bT",
  "key9": "5iXu48iCjS9VRGBN2XvSq771zxYX9KQn7ALGAd9Cyzqxt2SYycsCsZJcC8Han3yu6gWCerdy2eU3YvsJHR9AjhgR",
  "key10": "5qqBVJYWEdTNpSfGMrCKNZAW2nnvj46adrPsh2SJe198SEHm8hytbxcu1V1d5c9D6vEBkMoaFnsJdyMTrgKjir1L",
  "key11": "S4U4o95ZfqAWgrRRVjU4bdER3pjAhTiGpNcpPekHkz3fA3KtKQZWH68sYh9ygzVwM9Swe59GmYcnsBo3orgBFVE",
  "key12": "XyvXWh852st9KnrEhbo8uVCf1fnciWiGDFi3MrKEzQRmyWiCJppi1FRk7pB2tvZyrrD6DUV96RbAd1EMQT5R2Wg",
  "key13": "53EVYd12rWaZ2DDDBVLeEXwNEGvqEm4QBdM44weNGu9F5GVri1sEw6VXpWAjsQKWL3vHYXy3YN9DgHwRUQYh9v3K",
  "key14": "3SN53kQT9N9sNo21pvoXwXULzDs1TFEiQ31id7nKNiVS8NCjcddZzGUfGjt3oXaEULdrm5zMKfHAyFX2M6iV5fU6",
  "key15": "41fFHF3kUyWtMW8bsjRHq2JcqMwUJvH2WFGn7yEKs4s6bjJeM7fMGbkHB5b7jeQ5R8ATWrawkRq2BDCBBLTg37kP",
  "key16": "2dhC9EykiWCdnCW3E9xNPW5jvvmBaLpfKQB5xJLaU3L1Dbw9fca7iTvwoMnfgBscyKu4MjFtxZeocaNRSFeHX4Yv",
  "key17": "vouicfF7n2K2tStczsMCRRvdPHNErwqhy7GxYk1G2Es9qKjcpMoUzX5gyA9kB4netAZLV9Fy1QS4nvVEMvNxeDE",
  "key18": "sfBCofWELPBnenJw7jxh6jtgmoTMT8BvzeKUw5sYB8bZ11G5XtCwXXG82hDCrEbGdL7fz2smwbKrurGt5bqHHhp",
  "key19": "4i1V7iyhk2MuYsVG8uwbvPVfAyhQGUTZoJF7Yd6bryaeEPS8sF9uk5X1cMQp4YLCwUetG2j88X9AdU8QcdT3eZBA",
  "key20": "5JssJCY2apaQ6xBDCs4yBUuq1PEdsxy2vvEU3BRx9TMR6yjP3FtfCwe8x8emDxXTmnkHQKxcdCmxjjW3wU69C8P1",
  "key21": "k5JRmVkGdibcWjYMiH2jHUF63GaYExoB6sdyaqkmx4N2TtujdwCazS6Rj1Pf2JUAst6GhjFnHTtx9gBRLf76NQQ",
  "key22": "24bZ9XnWtv128dCzWqiW9RpsZT7vFUrdcNhRwsHzauiTHgXtuUcAvxrwtY1WZRypokntvfTNowMc7YwjtJ7fwcuM",
  "key23": "66xgH3arFTQ1ex6N8aEhr3ee6scPU9BNMKoANask5W1cQeWrvXj8qgcc1p54SgeVVZRRg6KYSXFTA8DHFHaxd5dM",
  "key24": "AjXEmfJQgNrVPeuqY3a8kP3kMoq2UAJrZ3ygLG8beSEm5aXBWC1orpZxeGC4WebkfqVMZZkXr6vKhZfcaArFiLn",
  "key25": "DEg1mB9sywWRa7Gzs8AFRLZbkGbBtWAqPaAaPytcZXZaUNmzJbgfQarwU9PmoLEGAEFAL23oSjm3kY5BXpjbqUz",
  "key26": "59Y4BSkUpXneCK1DwFpBVq1Vjztmjxu6xuhcbU3DenSAfmuQePUVjyAJyfDiNqeXyuEzGW64XtamzzEnxhGPp245",
  "key27": "4tFELm857zx8di5S5159xmASXBSPEwqj6ivbkPGpg6qHWTJ6gaVbQCdTnxgHsReXLaBZ8KoG7bmtMmDohavWeYq2"
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
