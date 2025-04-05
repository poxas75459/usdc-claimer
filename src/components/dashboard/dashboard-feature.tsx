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
    "4NxTTdDPS6uqDoWASFnzB9HpnShcB4cyBNKQ2voQfaS9QNdKb4kM614eQLS3GM1R3PZPqDEWehXHAjwUfGXG87UT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5jtWX3GnMAqQwuKNUqEcfm7itBFGas9MchPw3dNY5J9Qx83GyBDWzRQdHbRydBafTuKErEdnMiTuDU3jKbnW7M",
  "key1": "1RXgCqjvfApmcudrfvoG9p9eGBMtY9kPiZQxxfDVc9Z14yskT3wQibsi152Lgd8wCY2TVW5CuufudRkknvkhV5N",
  "key2": "5L8qRmmb7e2dafkvQiDszEoQQx2xtDiMPoNocCaT7cVdBUWHu5y3z6FAkc3F7KF5KwZ9WWMjxgk7WQZ17wQwNK9G",
  "key3": "2aV9E7imGjzrwLuCDM27jUE9mmwEVV1QgjVgHEddDuQLZwDpXHkAQovNNA6cKM6qGhueNiCjnkcLLbNb2xvtyoqY",
  "key4": "B35JEKa2pnGveFzvhfcZ5iPo8WmAhQHBq2gDxxSwTSapy5Sdqs2EB5uACA4oFAgSGtY4ixBKESxqNjcRVAL1kVc",
  "key5": "49NzoWaJcnwqHXarwjKHdi8ashj2zTaDmSkowEpKcPghDUV8g4z6gqY19t4M4B44Eu7caZvUvPqLxKefdUJqFYcN",
  "key6": "5DFtoF7WZR2H8DxwypFB6cmR4hZM9mrEd5kdfdRsrfr8rr3d8Xa57vqtW8ps3TEP1hgtqag5DUeFFVf7sHbxGxaH",
  "key7": "5PptaznGUTXNFs6cjSN7TuPHsZgeRyCr79avXS3axwHjKC1wzm4jyZU96jmGPcLEHtETffSf5pRUUpsARmKWtSRo",
  "key8": "215RrX7YCh51zLURym75jFVUeahzYYBdz45fjs5sDNjdwhdAVJJ7EcvpQ1CRM5cj1eW6GshspN1hWv9MDDeT78u1",
  "key9": "5c5qr2mA9EG58heQgDqefRXwuE9n9NLaPofWtSqeXYRk37SPVQaGFq4gyPBVePAvG7H4LfBZANCfRbDCZGjV2SH9",
  "key10": "24f9yec3AV6DjiVH1E8vqtiP1NiLkiYJa8JmFKmvpKKi2kV4oYf566cPhJcmpiej1PUxAsoBUXhXtwgjopYtK6V9",
  "key11": "3BFFUk6DNrc2GuXVAi22o7uitJ612sfrmsZvZqUEKnrXPNjskonn29RtMRzPfTqkaq8NqV3A1vWHzTm6TrRDMbZL",
  "key12": "2JoBUxXqTadKfA5F2MiVxGLTondU87X96MQQhm8N6PVr1F9WcNXP72cmoZj5tXRDxVWm6NCSBQ5YFDEp1qPLtQXR",
  "key13": "5zd82y2bmHV3EfyaPkeYrubU8kCwZMt1nBWyDwidqf1FqP8H42yoc6S1BEmBjHze5caodpTCwmeQ9hgLsvoAcJTV",
  "key14": "pC8ZXLHUegqqiz1tjgG6emCkKvgwDorg654Yoo64iM8gvtL4ntGLCzjjoyDrWYEjaX72Tq1NwrCFgVmt5KPE7Vj",
  "key15": "5vkbn53qrGZCbRPy7CdXEijKYSj7VYZLaFFsmXUheqmmnsMhhWPUMfxytmSXEMCJHd1jALx4ubgGZcaaEkS2UFkB",
  "key16": "4BH4BGT5hBqCTrAAs4JR9LhN46G5NFiTRnLzytc2H5LmyVdZiXiAZ3nPFFaVKtzgGui7NpZtZZTaEaZamKgjvWHU",
  "key17": "5JPvGSKnDXTaPUwkLbCpwi3538S6PBPUJngPPzm9T2abKZhktWDuTihRgjow8DLJiZNNwj9VXCC6DUJmJahYWBcs",
  "key18": "DXKu5wPLuKmvKDZpkPwQUrxJmCY5Maz3PeyRmzAe9tYqaDohnuneVNszixGEB3gZ9sV4DdV1MusCkux1z9kvoxJ",
  "key19": "4f5SN95UyszKsSs3rZDtbRxMpYKGsUoYsCtGBMYKFD2SHyPTYPSHnVE9QSqSmJ9GyUsULseQYsGHeUVENwqieG3C",
  "key20": "cPfgFgpEdWqnFPVwmsPg1ZpNL9unpEgLHsdKrbCkzbRxNGFkF5fEAscghg6UKCA2zPi87RE8tsWmEZUShV2Vqvk",
  "key21": "4WfKYAFkLkcCkKHVACUTGBHQ5DKqpqVQHAXSpUgGrKxJz7bh9j6WtGrVPkhnfp36eDTkCgTjBgxDCDEEcfBxCUkh",
  "key22": "2QVFRqNV36Q5GT61qhynzqaqWn8m5235Rgd33FHHcaFvGMKNEfb6238xqzAn8U1uuJrF21SjwRNi85hnadv4SzE9",
  "key23": "4Q2okWtVNJo366ob8waYHsAntKUt1y6byD1wur44qNuUVwEnkEpLL1FEGT7ETM29hgqw58iyNP8CH6JWK9Ch16Hd",
  "key24": "23sLQJPeHsVaDvpQ29u4fjvcdZ71pqDYusfhQ1CRevzXp9XWDtAQc4BV4KAzizCAhvJruRja8ATFbKtGanBpT9zz",
  "key25": "59QMyBDNUSJm5mbeZGz6Dp8wWY7skpaqJuew8mZc9mPqWfwYPNUXftTHr5XsWfEBW39oDAuZ5vhyP3CjGzq21Q2X"
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
