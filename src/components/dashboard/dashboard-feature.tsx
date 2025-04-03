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
    "2BvRudxVXXcD1EzVnHdrT8qmHBT7AGE8HThUuGTxVJbXHaoKHMoDmTs4hHWpJpmZh25zjU87iazjVbucFyTz5Aaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pg4jyLttiUEtajwbo8KMpCoZRxnmNTu9S1gyXud2gk2kmBJcSkqd34YyEyEmi4EjKm2NS4crea3gAuJnJQqdeM1",
  "key1": "4Jc5tDht9jn8bDgzEqyRgQ4ZDewrTcX5yqcXaVdbhCKxKqhr8NX1kq4qywbTLUpsJ7TvNPKM3EqSDF9FStoTWimx",
  "key2": "5gDpHwJ6M3qCcAUP3FZLPQSHyUxezYS1A2QcmaZjbvzHAxNU73SuueBQ8TAsucrzBkmZ2BjVinDirBo18D5Xyj11",
  "key3": "4mt1xA7ajNVf2YsMyeBHnjPt4qZ6ATT6ZusYzBUajRRSQPpdscXdtrsKyaSxHnEhQ9ktQ89skzJVvz3PvjHLJDP8",
  "key4": "2diLsFdLBv8EiurwnhVbu21bxYWqmeL1tDADsDJ6bEnkFYhdYRn4sfGEKDoCxJARQmmnk946Cm5MwthBib2KA8m8",
  "key5": "3YaVEWVoJorYYkNhFnUHKCi9k9fyvVVNA3HBkntMGQbeAUdXJaFHv1q8SyiwwnQMa7esYfipuJUoDH2ag5ehfuHW",
  "key6": "5GtbCo5jrRWChYxUbK8M9dbykGUxAuReLxFUVLSF35ByAFQcJojvorCDg5VehVZM1smmtZhR3WhiJuWhphcshfs3",
  "key7": "2YD7cQefYgZoW6FcYfrLZmUjCh7x1wPMikMRg1rFW4j3shjJSEJP2FYPpmtCZb439gW7WqGFUFDHGDccgHXkoE2r",
  "key8": "2f5CNncA211XRRPELBzurM6TNGs8bSLa8fKBYDenB2Aje3ms7wFBM5tivQiCP59G5ffjv2iMAxFGZwJSpkFFtEyW",
  "key9": "5mjK2Rxc8KNxbkyqcFUa3u23LdLnHnMxb6A3fqD4iU3sp91JjP5JZW31vrV27Zjy7jwq3suWiidS7dEErBbtMVcz",
  "key10": "5VYxgsjgrCkYBUkcvHBMzZQ46wkaZR29g2jru7HpRwSo3hzGH6CxdTcYJN2CtE58aKS8NUTno3zdu1kYKfLJgcDu",
  "key11": "2u3QZScoyfzXvKXS99uVJ83wTUUhRGijSzTfzyzjAiv11wUjW9JWwRTjTfjdTMd9rATXk8zJh8Bcv4PcLQA1qLqG",
  "key12": "5jkvqATJnra5RH5cB9MejmXMBEvPoNFVFPjhQmRAb56fgzZVnyQMeHs2J9PP4pSutQsnuap8XsDsUn6m51h6wUQF",
  "key13": "2GJJFAxaLrdP3yBgU27Nb376oD3xNagcr4Bz8nWUY3yARPMJ3yPosUiLvRHufG6keXaHXiek3M3vqsiXp443oZDm",
  "key14": "3ii6bCqUWf3BMrbbxJCfHou3cj69a427aFmPh6Dbzitn6zBHRZGgwaSVL13ZNVpzYPRwLy1qfQNF9tbJTDy55YPL",
  "key15": "3GAYXGyD4pjZPCCvZPCFR38UgCcugUBqH9tATKLj688oWKWyP2QSFYDCJKD55vUdXCRM9ukxpWwkC5SupkyRfxBT",
  "key16": "5gLhsAnhctB2C5nAnYXH81ChWX116jchtCdupLnNbbyX1SWrhSSwV3d1ckeiVv49s5L8RFU2E8HrbM2mP6CQJy6f",
  "key17": "uJaU5MEBFuDeXeCWySLdSqgWFEnJ4YJm3dTTZKis5opYdEK9ybjtjn1b8qefmwQ6EDRaNATb8RFwhhzExfhVf9k",
  "key18": "4hGGmAYtSGWgKba7WqQK6jfWpUbWNMkWCQp64fTaXc92jZnDtR5ARQdHAL7VbBMjUcDgAYH6fCwayBKNn44x7wLH",
  "key19": "2nMEP6v4WLmH6XodPAgymbnpWem2viWAgr2s2b7CYwcSahvdM8Y6wG4dWi3s9F5Vh6fwriuoauLXjwaCDVYeFJcE",
  "key20": "2xcJXQgnKzdr1duvXZNptZ4CQoxaFiVQi8JHSejhCLqZh63ZPHuruGxhDSkw8JRsJagRypQgM9WLM48TjTWC56z",
  "key21": "33ef88pKdoEQbxMZgQeQ1tT4sisgnhLbCaQUQxP1XqKg8onAT9EJYWZVMcr3zYVAFnq6cAzmtsis4YxxUBvDBqYa",
  "key22": "5fXhtZoyeboYAHuUF6mzT9qs38s2RPuXxAbeG8JZE5YRBnFQqwxGoxA8LBaxw9kZttW4a9DbSxKXfATAaEJ7V256",
  "key23": "4Yk3FNYEoUJRXB9A1V4o5wtdyfgRVkz8uU1sdma3mHc7K6qKMXeQdN2d9S8SUXZYVgQQYQsGoYhXh7JLnqxhZVvi",
  "key24": "zCS2da55DkunSNuqDKn9Qwsd8cbBsQJ3LzYKW5hgWJrUfAnZJPFVvfAezovvhekMfwKfCZ7f2kzmYCCLtUfenDS",
  "key25": "2gVFe6bj7k3dx2TtvxcVvaCRBe5cocsak5qS862YuQkbaqYjfCaFYMH7Nh8BCadSz8REtVtWQgJ2mEpMfwC6bzvM",
  "key26": "5ruHsG52MPRw2nepdXPH3chv3wfQYjuYqmBEjwPz7Bjq8LAkDWuotyo8WCjNDiD3pu68Ni3wFH6hStfiKsNKf7sj",
  "key27": "57nafbqZjVk2mCgcqMjVK24wyt2hXsSApsommh2NGZjEtFz82CrdXFrj5bEfwroxKebmDhv5ooijNX9KUnxqGrtq",
  "key28": "HPbWTyzfjEjiSMqUnRYe82BYkGtDWzWdVCGDadobixjzc3dz8y28pCXAtLExgdaq9wArZpeZwujNhNdUBdgvCV2",
  "key29": "QWYps4sSVHc7XU9efQP9QqDeaXmY6GVj77NNXMFBowKCvATFTw6djMrdDWmceXoMQHZMnRnSYByaNg2VAUQF5Ts",
  "key30": "5h84qJiyG2dQt7AywnVQeLmzymMtVW4h6ebYxCcS7omHVBDPmktHP3h1VeHKapVs5oyAWwLSqYLb3tk7mfeA4VN9",
  "key31": "RJNzkHYtRMW7Np5mGqAMoRNM1FZpPzdPrqmhHcsku5djExjiDnuWyYB2ci53raXEG1hcPkLzWMg5QUWTxk2fAfu",
  "key32": "25itotkiBjcNpBMMHyHfC9cT7YDdRiM2oM7PGQrquwijMU9qNJ9dvDQWE1NmT2zsNCG2ZNMeB2AMU8zct3ihkmQf",
  "key33": "3yUcwKp2oSxwkfRaS7hL7HnB89QRd6H8Uu3CPaKq2iVn8jCQi6eWdwoyUwEzg9TiLz37jqWdNEaJpw4bSiUMxxEf"
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
