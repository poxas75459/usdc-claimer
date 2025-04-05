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
    "GHmM5P8NNhDF9SG6xpLDaqMqW3JyvhJpKerJF7Efd84jHzwUvgyiEEjHFxcd9x1qXRSdiQuVkzSv363ehFRhY1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qL9nKxtPW88Sm6FbSM7Rt2dZQ7e6H2rw7Wrjzs58yo2CeSDp3UbQtVGuS9J57xCp3XjGu45jJhJ1xHLhQDsZpvP",
  "key1": "2izPcLN1HvPpqpf6T3rvw4S8bKcTobaZ7vT1Poch2gUTWdLeoFCJWf5CHCuARhyC1n6uq9eSFDPnc3GJJpWZeRtn",
  "key2": "mHgXb2bpfZv2jXWQN6fpR4795fkAy2d3j67bC4D6byhinjPwipKz2xDqvCW7sS4P9CY1hMLTBxwmBPgvDj94bmb",
  "key3": "5gyqQj3XpmkkQ42bVYpKh5n1FejiABAxdrUypQBSPnUpwQSuvVDPmJ4kF5ibkBmm9TCjSit7GwFutcLzHyzzQA3Y",
  "key4": "3fAxv1bRkCf9h3vdf8YfbPbtrqeeqrQ6xmu58jq6gE26GmjeWc98u4nssrMYpHgQykKcErKLh2zuZgkYsZsYzcKA",
  "key5": "65vUnQogd3yLpWz8Nbp2KmcsjmauSRFLvwhvgTo8rssoqifyBoisU4Ad2ug9Awkv4aVr12i9bEaWRK7r3JfDhv7V",
  "key6": "moywQTD32JAM919eSKmrYW4Btn7WQ7ucUG8TSHsJmZVPt5zx3JSRBwnb8Bg2KNt4qtKYZkNCeBAooPUGLdYgAhY",
  "key7": "5Zz9UvLNWkTbLTM5jiKDpeEeyyn5hgUo9UfVwCuxJz6YX2uSzzeYhUAFhv96o5YFiar4iof7N9PvzPSG5ktrQSYT",
  "key8": "QXa18CeVV8ZRSQJFrLwBBzRiiLpy4zSPJ5ExBNaKkB4Zc3JvhR74knL1nUXjeyMj11rTETwYLGSPHBBD5S6xEQo",
  "key9": "YVn28BRE8Z2zsuwn2VCXECLUNmT2JEFPV2wc9kmUUfYMVYZaUsDz8oGMuUHbiNebWwC8E7C2MUtcJ5HWe8LRmZC",
  "key10": "3W6h8Rah9cnbRWJhirEWREtfLdYVmJWfupFeSwBKS3a5mn1S7P831X6tBTJQ1DgzVtHoomQHi5Nx5xc1oGPQR4BM",
  "key11": "3oN3o3CmahU9kSNTZkNaQjvz2p2zkJhbDJLxBNG9y3JaXcERqfMTziPLsGwNxRoYF2yA8otSKTBTTDzWRvgzNQY4",
  "key12": "3Pc475i32FJXLKbrbWg1hDXfv9fDnYMSkMtPBKSe1yBZnpUnagfuKjdkFQWDN66PHpVhtTjbmenW5NCVSxhfSz8P",
  "key13": "4dpvPqnFk3pLM3UANEzJVMuzwhHJzmQYAb2dANhCvVkfQ7zKBwpxd3SYQaDJ76WcSgzeHdAAZ9MpHwNTB1zEeh5d",
  "key14": "5RdVWmDJRKCHFzkzVqXFAybbYcizpLvy4iiQFsx71gPyRZqFvcgG6txH7NNmEFK8w6ghjMUHAUbxcjHdHuXMMMWH",
  "key15": "2WLKtJ8X7bn7VUpRBmTEZDWz4oETwkpybhBhJcLoiDy7EMLxzd2A16LLKtC1mnYWDBBtXDLxXS65TQKv67dv2Xmq",
  "key16": "2pu4KURRAopmHQojn9kg3PfND4FPGLwYPx8NNsqxPn2ABsszy14FoeCNKpMHrFYgrb8zPFJB1Ayv3BSxYMSTgfme",
  "key17": "54Y3H1Y3QbRraSnfLranTjGWNbKpA8eLtpAqTXFd46SHM3bZKgjRn6CoAkjeq5XQXSxjE9Pr5hJfuqXGdRaKrdhg",
  "key18": "iUEwy987W4V9BAhxkYNCTQWndLDhwp7Gp32RkPjLqU8KWp4eQSNWXXQTUvoVHQwNveUVDj7Q8epTz9QvEzhiWmb",
  "key19": "5CvTdfzHTG82bzPg4z7MyHUdHNnys5KtfDr71FB2mn5WvwP9hg3taU2M5gbWbf8xyxNaAzW6zyjstcPbJT7wgJu9",
  "key20": "3N7WZXQDYbGPDviHqjENNaJNgvrj56HqfozwiRGRc2bkqLvzZGnQqsijofauvf57yViEh5eEHG8Wu6JGXQwLZXah",
  "key21": "5QTSa1dfcTN1tu6oKAMhCnsPoQKzAYSDZJzutmif5y4GG5hrhbAGaLSTaAoNAuwnEAQHCYfoGYbC3dN9L56yoDwy",
  "key22": "2GAPK1GaeHMFiNQ7k4hWnN2J6dkLaWX2odDCx1PHQdR4Uo4oyCpTJWdYj8fZA1q7RUsyTgzTBAFDb51s8KZK1NME",
  "key23": "2RpHqwxHS4wT3dzgB4BHDGAj8fdoMdBEf4tzdwJewY8Ce6aiqQEuJA8dPLB3BXSNuuyuXh9viabmHzRQxhpiU4r8",
  "key24": "45iqBba1zqUrLY6Qgh7CVJbnAxrvm25DMpyJ9b6mdWBaxEMebQZqLY1Yk7MckScEZ2JAR1W6TG1VYUfEyZsbpfSY",
  "key25": "3zeMversa1NH12137CA3gAePGuanyFWnt2TXa1GmAsA1bdAXHXQGcLHmg9Arv3WPNVoJo7UY34SSGuRjxRsdqFUt",
  "key26": "3kDfm66Y2i78gGMLiKvMT4F9yCP9ys248isVsu5BqC543BLQF3zdjnVYFnJJGqSQpqDgtVs6XCoYd5rK7JJmaHAt",
  "key27": "2DQUWJoGUCk6TF3KzeszSEhB8H9jYqWyXvSPxLa8ukmFZQwdKHksx4f9c25ae2rhR9rY1y5n43wVjUEpaZ3YTU5A",
  "key28": "B1hZNUbH7w4AvL928hpJwkLxAdKpWrVkrzx2PsQuieEeaofEoAacws1Fm3rSuBFBe2GU1uYRXGKzSYuf4pHr78q",
  "key29": "2DRchGDyP6tQtwsDBDtbekAoHtq1TEfQdQ9zrVrZcsFTVCPjFCcV4ouXygoHFMHUMn41Aii7Wp1ua18EuQmUkpZv",
  "key30": "2M69XcKJfoKXHihhqXSzCoSGWC64VyvbRdhTgYDWBFMrtvcqQ4q9b6pWik2Ey1Rzw4iG5zSo1XVWmc4v4MS9PuHR",
  "key31": "abEraQuKfqsiVAyBYM7aUgLUWfytqFgbDhvbZU3NS2YmmN18SiKgo2GWqejgwBAPk6MRYXKDFJ548HyPW1Zp4cn",
  "key32": "5W2ZJHBUWoog1eCPqMAT52GkWvoSvCSXQwsjLPv7kN6hhYo7cNGuzbfka4QrmDDiL1wzPdVaHz439zrMwo9vfBqG",
  "key33": "3wPBPdvaHVyBAs5VNF9vtbFL3FFykb1djK2kKUSeLkKE4oEcG2aKKCkiXuGmvuYUk14kpZaBUgiZB8YJqJsEmTBc"
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
