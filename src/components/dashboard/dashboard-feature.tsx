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
    "3qNe48CWm1i9MdM8cqH2hd3cspPJ6neghASR8MREftNXMjhFoU6bNx4VvJp2ZzmvpmQ8EiDM6R8T6b3WaM98yk77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PhUTKkxk9HTq8km6ijZ23VEtYcqfbe9S6cuj68Exiez6H9jJPuAALZhweoZ1puJUYj8Nv4LwFweFiJTRq7XCgTZ",
  "key1": "5mZmpKt2wuTM3kB1v4BaN3CcMFeGcXoxoDCz36zwP2CJzB2F1rZRDniNHyjFpEnurnsNidcST7g6o623xP46VcXY",
  "key2": "3b8RsbNgcNbaqSpeZhNKLY34er9iraMEDgP9eZKScKokiTvcEFWnUsAfi8mk8PG8o8XxQ4LhPQYnmr856z7qDRJg",
  "key3": "4VfdzwRuEVaZvQUiWi1uUGanBRQ4dSrXQsRTyM3ssrcZy8DFtYcHB1GqMYXFDM99Nyrv5pwdJpEK7rpfY5DPGSv7",
  "key4": "5idx3Lx6QEBaUtZU2j5iGF29WPKViPpUG3CXRUrEJqVJseGoRuzd6ntAYni8rtE6V5DesfcHsVRXEec3od9oemrw",
  "key5": "kLhKQX3THdzNhjmjCssXkxWWSkMgzaYUwwZ3pKDfe784aA2KTuVq89PfNdXLiLRWjWaHDjHfgz4NocDHpiwypL6",
  "key6": "4H6sPraVaGzuBbfJ5RuT1ckXM4HADrgWkXAocv8iCSc6qT9AHTwqwGfVKCcyR4BeurjTBLyMPsjxtedzgEGn4B5S",
  "key7": "3drZoSjfj5BY9Kyu5YTGajs7K3stvXdTqa4x2skcuabMdbLyYePxKaCi3w7pzkGQ3gTj1qAYXELEMeWkr7SRDBRh",
  "key8": "5pofWCoyM6ggaNggtQCUrjcgxoxhVEd7BCeUXwPPfbMP6xp34o5VKwEtnmEAM3NSTrjR2MrLrMdbJXvAY17LV24H",
  "key9": "3SUc3KTLMjNiuXibVn7KAnifaxY9wCPS8sDMXAfaYppRGHYXMFPxHRitGUg1aCDXhbgyvQoUi4qcPSx16Z8vUwBo",
  "key10": "5RPXu9xhZFrARAz6YnbDbMWLQfSio5yTwoDL6vjudtJkcktPXMMwQms7HQktW1ZWZHQ1Y7NHGUYL1A1NpJKfT9bX",
  "key11": "4PqYAp3DmuGVJ2otXp4Pc81diNEiUcRTRFkTyiqxUHY7U6upbaCk1My1YrYtHTCmHYskqpzhvQ77etwS3CmDMQQD",
  "key12": "5S9FWCKLpnp4VL7q9f4YAyTzJYCwYiarAi8NEdUmFFDZzwt87X5aSTojAjcwnmhMSq3SDZyCCAtuKRjS9W2w3hKj",
  "key13": "NaF9ms9t6KEq8pchnTDR76TBPfC68xrrD6pnV96gKCUg6Fc1Mf8JhjP5aAxbRbA4iRoVGCbABNC3z4d56FTvwBy",
  "key14": "4raxKtm6K5NkCuwSPd2YaUSTFnTL6dVrjymTRMYYigbnytjNNhtRJieW7D1hQ3jbzw4iSeTwP5xJAiaTg5VjmnMZ",
  "key15": "2PwxtF9iheDG6pzt4bhWmnDAWj9wXYYaWKuEv1AXgtBptXBFGzdXn4G6HSksicifTWMmcGxRHXaZpdwcW4EB4Ruc",
  "key16": "3UYedjwUYpxgadSzWSmpfq9Q758BZiJKroycUGsV1H2KuXFwTSiYnNL91GJPq9k9YkqDXPjA1vtmLwoYGE4CSCmC",
  "key17": "3FtbSY6myxHVBK5J2FJzKiC2ZSFdcsgf7Cbhk8GtMr58D3Z9pgKVW4kTqwNKy5artDpSsxmrohJi1wsuKEbKUnJX",
  "key18": "5x1NhCVshYMzB5FymaMcJUvnZoXnoyvdLwp8Qw13pH4AYcJyBk9XDBN572Zpa4Adkm8kFbBxoscE4gQHeVBnSoHo",
  "key19": "493Bfxv72QQsrSZ5cHWY7sNwjnT6ZRCZtCjgwJ4EhWSyiQ4aVs9vVdxRPNs5PB5nwX5GuEfG5MRPBFgkLeKWqdGv",
  "key20": "E9PQ1bzvnuYNzdJHx8xP4oQJ5uTRLgbwUGNjvJGaTY9duzVY8VELbqTemYxK9RTPZVyByvRQUubrfNzohEScsuw",
  "key21": "2UDM7bzgSsmJ9QW636vHUaB3naZjSnS65f5Eh5FBK1iHrkjA2HevtXuA9RiLcj47gGN429VRQ4gwyNm6zfVADzCa",
  "key22": "2ybFhYweztXntnncQD7sEC2xZcb5bY2mPduHLGtDGthvdy33wxy4bx2Ta6x81eQJgWKgk82irxzpRvNJsHw9nweR",
  "key23": "5ybcCq7oiJ15jdxtEhZN5YWGLNXePfFYdwu2o43x1mhCsiEM6vp7KBD9e4tjyLbxJijxnFeHGdZzbtNuh9CXjsQw",
  "key24": "2xyt7iFyLStTQDkCSqMF3YLoHXEd8p3v4Gp7oYWSkeN4UghV6BnmUuNQuXd3xaPP9xj8gnra4QNk9AhLcfSZahSv",
  "key25": "4kQmYymFQXHqTkWj6P8zBmSNCbNXxweuSMU9LDtewCMdNb3FZzK2QkWcag371Ap6VLjDxJqoeQ4v7y1BkyapTVYY",
  "key26": "4V2sGNxVBAwMhST4HKQJVxbeW2nAYVZhBBqVHxVSkX4krvTHDtVfv4xRqcnPQZnJixbk5uNHqPk18KpcXeqw6Hd8",
  "key27": "3kiXEFo1HCZMLF9m7cJo7XAXGH5DZJsGv89JjjztC7vf48gSRuQPD6FDZMJchKsFSyEPZPhgGvVoJUoQQm9nJpkr",
  "key28": "5sx9zp5JzQ6CV7Mejh74BhY4XCFQx16RbXWwbohyWTSuCKMZHkUxKBRgfAqRYjNczaM9JCm8sNuLuw4H9616tfcp",
  "key29": "253FGA2AaaUPzken4MDEBWSzmZVfSbMTmaKNaY7D3FwKVsomjBr1eALuDmpMZHKf3cRyXEHK6vf4PUL6FihWJgfg",
  "key30": "4NdNfrZRegyrwoDU9k4sXEUeYMki1qb5xtkH1Q9gbB5fD2N37pwH78VFin6wjFQ1egzunyRmShH9i9qZbhN7PFPY",
  "key31": "2BSNQuG1pGTsg5cN1zPrfBbpqQD9Bv93bw3d9Zw6YEgqEzsupaBXNBputGbTumuVPBCqwBMbbWGf1vQECUooZRb",
  "key32": "YTYRFPJgyKYr6BU5stghC9384QXY5hHSK7QpxhoTiMqAyNH45y6PMWod6huZg5Ec2oyikr3EowZBTffcJnBGQLj"
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
