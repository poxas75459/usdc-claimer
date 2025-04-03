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
    "3g3EYc4NSo8cFiku7RrJftuuhTmjj45Gj4UxJPKb6qWcTxU3jxcU42ejRV7o3tZrwMn6iyMZwkUfeygh5UCNP7FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AuPyW8JWpkV58NjhAaYDT9oZW8d489Jp1xuk2J3JSC4PNNn92H2R2DC8NEYKvagmY6CwDryhcDHvpWXu7wsANKJ",
  "key1": "644DA9UH7qmNPLW4JDC9oonAU6K758mw6Lyfbb97ZaH8mYhZF4g89qTTTyTMyQ2SBhXTZozfcGxRwpEx1gzNbr27",
  "key2": "5wJgridTXcxoxwfa2ajbZR5EjJkdVztSDWLKyRBEK4ZHrLf18uvhnj8pDYw5dBWRnwWuwyXhj5juEAbPvFoRm7LD",
  "key3": "48cFbSFtK79koaHbipCeJZpNU8wPaJGcH1tvvwgyjhxLgZJQeqZwpVLik89om5PX1ZaBZZr7Lxv5gT1FestVE1YW",
  "key4": "2PpUboa3w3jYTbF8wzSusV2fmWc5Hridq2Q7ymYuF1kBCnQpw3m1xQe3hXTrvd5ugG3TkhCBNNEVqvBmmnJogqPu",
  "key5": "3zETXR9rnGrtEDyvaTPBqJiqMnNguCQ2TV9uCAcTBiBUQuKYBNfp4FNvbRoNkpWRaqrnmFeVjNpqzYLgL6XXFU61",
  "key6": "3o7JEP2gnFBdiXYZTzyMj7y1deVWu2s4zJCbxpMQxrSGzCtKHrqyqhm52Md3PXVbFAukhMmqX4T7GKiQ7ophL7cT",
  "key7": "3reHBMZUuSd7D9RAT7jzs2ZHgQnYWkYJiodNgKj4Q5SmKWCcg8MQSaU8U78yhUnwbjyDEqFfeRQ2Bp9vgMKAc8LK",
  "key8": "3CyaDjrfhKyo8dvwt6xFocG9uZmZELH7sU1ra3XRhBSyXJau327WMcZLA4decmSMHHeHZQaR5Wm4i6Mz5tqWQH35",
  "key9": "2iZVUPnJaBgrm9j9kWFR75xytjqoKtZAyyH8oN97Ez8Sj4JDwmFY9WKXPDUhCbPrd1fDEZrHrCAC5W6paHJQ2JY",
  "key10": "3seL7hwtDkXCKww9kVSaihtzUc8URBhKJgfeqjxRwpSNYrAUXpjPWzKJzJa5wQfZhDiS67cA2z8gEtCGNxqUrYX2",
  "key11": "52CBo3GoHUoiHbsBJNo5qscqD8NvDZwJhZuAm9wo5sp4As9tfXfsdH57vZbF8sHFGaCfDajzGe2LFWJgoBJhqETq",
  "key12": "3ZSsUKSTKLNTSt3HwtjzH2GpVPstwes2KBYCjcgJErvPuoG1QgSB33cfpoqoLKNHF9k7kQQm44UKiuP7A6NgdPmp",
  "key13": "4fZhjuC8KsZkuvME2KgQ9jETrMYU5zNTWGpoEt5zn6L7huHmNVty13eF6qReh6zYskb5vqP432ssoeyt9E1DxcXY",
  "key14": "3TVVwBKHcALFU4py9673inqtFsVSGP61jAi9panxBEgvJJDYccJUx9CMdjyC7nV3dz8EMC2GWMKMbfPxJJrPe5LF",
  "key15": "4buzQ2ZXBu1JJMMbA9iNRuyHv6w7cmGSeStfChdNHFZzDDYTNfmMHrPzSMDhaERC3xGLxnYcw3s1HcPejfwJfhah",
  "key16": "2JyF1UJ8QqDM2MosJ1gu2uH7ceE5TW7SUskESGjpbtokhs2AYhDFXtWAecT77JupARXRKV8s2Svit2EJ6e4qAEue",
  "key17": "WyNPh8KUjFxZU391TgvpaaPYQ4ycHh8dEeMK7dDTaZdf7zdEQpckrFywj45t3YiG38th9ZmF34pQtkdTc1Ubb9F",
  "key18": "4miSoaYpGTGhcCXpwkzeumVkfp6vRX5uosTBstig8auFxganKs9wgLzWrynbTMZLDpwuZMMbHk62A2nMQeEt5dSu",
  "key19": "DdSNNV1yhtYiUyXaw6SBFnMSGVPQdmicNY3cf67GsCHQVUiUNsY7onW8H3VLMUbQ9UCbnEv4ReQzDyNY4b4SjL3",
  "key20": "5v9XTER5WsqWSxWnDSjQovTwiv7K6Mzm1T1tLGKsUFG4pHk5qNNVrj5R2S1Ch9GaSYkhMWN1bFBB3pheddHZX9fq",
  "key21": "4bQi5mYSLBpKp3s7r73qsH2B2HGu6n8HSXmnhuom8YszWJacMx9QrGxSqHx3xmiLXCmwyM3366VKWnMqfmGQ7UMP",
  "key22": "SkeQSdpHJ3yCBm9GdPMTio3JgBmo62QqkgnethjgzZsfUwjnEeipf6VWaTc99ZRjp2a3CNK3dmH83qb21oTczW9",
  "key23": "3YmU876UJo9A126Vh6YWztrozng7ZfMk6FvuZGuVCC3TmALHPRD4fPje7SvpUxGhPC5TVA1UDgMM9217AujtNFX1",
  "key24": "2rfE4coK71KRt9uLdCKdcKc7ENE1a8EDU1Gkq2EZegxsB7Nxw4KHEmMGLntWRsSxQiM8WGoBhc4HjEstDWs2Gcua",
  "key25": "57i96skWCSmgAZGoRy69KwejrxL4cn7tMU1hWEDnZ8rhVhcDjzagTQEsyHrCehtndHXdRpY6i2S8UrV5EfoN3Y58",
  "key26": "4MuBjKi1YFEApF8zWkHC2hFABMLnifLJhTjjGeJJkC6QBRbscJBJje2NyKJ52DMeRAwgybkHPLET71ZURU1G999d",
  "key27": "3d6RDnMG7FKr3p8hjKHjnkt6iJEjD5em2N9MtFtW6tkqKmwmBvd3jicax2GMstbQrNTsuoe4aivkzwJgDAuFLCvb",
  "key28": "3T9Y8qRDZeui4QYdCSMno1i9v67opH3gpMiYSfVViRTuB6zB16xBn9hd7psxmPJZhxgsr9hVyLh96GtcjrMZjCA4",
  "key29": "41CgQZiSVKCzsDrPmV8GpSkRiFnb9Fw9r7cMgVF4WHThfp8qVb2NKtiR4FbwddRHvtErJ6qoVuX99Nd1n4DDYtps",
  "key30": "4VNg8Y5Lbf5Bpwwo9sLRujVCbgJQZH4QCNAyADmWVZGnwt5kQT3QPf5QUfri9oDJE9w779xvzVwm8tLzRJsyeaUo",
  "key31": "47d8yycNfz6yRJY5u49q1khG6ov72QDg3UJPJ2kNNFUvDxAhNXBC5PhEbjuwTt2nxNsvgPGyAXfcRexxQFfELT1m",
  "key32": "5DXKAW9XJRKuXN6nuL6cPKb2jsaWcEokLrVeUoJ1Z5xMRniuta3tTr7PvkCEe7qdbmBne3GVW5JivswiyF54e9pn"
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
