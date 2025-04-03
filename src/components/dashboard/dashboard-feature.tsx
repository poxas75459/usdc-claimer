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
    "4Xd6ByZHcQtdSRiQsJY1YdDK7fLT2Gn5hnjecjptr7puXjrLZSARGfzZwq4ainrdYkgaoyDrd6Y1oo4Wczo8cVRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LmKyXimgGRjuMD4Bogv26hb42EfsP2CcMrn3G5pLERNAXmyDHteqCF2PkBfbAi9N6abr6jHZw5F1G3NmG222rqv",
  "key1": "2GgetPJ8JCi8smZyyftTKeuyaHAKc3sPs8MdqJCseMjU6EqCTraKBY4GLMWxvCEfzKY7AutQWzYbzMXKgPRz6mNS",
  "key2": "2V4BZEF1HEM2bCYy4wuDjGYZWk9WMyyac8pQyk6QrvBT89LY36nDCy9ATnEwrbNN693aKNAoyS5iBJsGeFACyzaq",
  "key3": "2pizd8YnDawbKVfD5MSSTxTWynXobDDQh2nA1Ehi6Uq3Q67RyBsDtg9TFrhLrStDXhmjo3jrVMfQB2kPpGA1Pd7n",
  "key4": "2xNBPkg3tPN8nApKc4ZisFgwdDu5XAjeeZe157HZ5pEcTX1niUmKp5C2xue9oVQKXx9qFVGb7MzanxsFWdiA6ZKe",
  "key5": "5B3vFsXJ5EyRvVaFoiVrpNL3aByUkVKAfHimG38k763j3hnNthCEHXGUJ2Hh5G3ZJ5cU4d1JMKKaDV1wuyCYKUK2",
  "key6": "3kuYFFi9bPMxddsf76FnATrNzRmouwspbsA5jCo9nBMZzeHwN9be5F5xNbArxH7kGNLEhCzhFbykkTWiYnmbjtB7",
  "key7": "2CuvuHcx63K3F9xyc2NyMZpi1XAqTBKVhRLM5a8Y7MgLqYRPHznK8VmbSnHyCVoRak7j6hWSW1oa9cKMWyH2Cwkk",
  "key8": "3tuZz9RXKyVHRbKFhoUbNmuhw1XWsf5uZcnYEts9YfGH3taej7ncCZkfkYBrTdftu7KjsXUuwSMfWWZDbAnzWhtv",
  "key9": "2iPYTyNByVhL1qAxAPYVTs16a7uz2vURA2EzY4RZDqUvcvT99qYjhceZdKbWTTnkrCDLWeTdRpMrQj3BYd2CkvRB",
  "key10": "2VvuPKckhUrPFprrRBeb8iuBwDvM9iUBbVnj1rrVRTT8xZCtinZvnv6QGDrWG8fn8YrTyYFaS2FyHgk5s92CvbK8",
  "key11": "DtwEM7oSmXxs8T4vaobphh6qmCWrCSiozxwmSbTBEKHje7D7HSsij1qNnynEGbzzGssFyntD1gSJjmkL8VPmPM6",
  "key12": "5Utxwp9ae6DwEm9eeMhV6MdXdRsnjhrJcURiR6JVzDGwTWU7n5DVWYGemTFTdKPtborqbUvrMRtD2fRHw3Jz2BWs",
  "key13": "5Tm59QtAG8oMpGUDwUP7ftrbrCzQWMWWv1B2GKSmXToS3bZuTStUa5c4YEgPQnHb9VRm4Z6GJixqKWLdwEnjv3iu",
  "key14": "3P6LdZMKWsWL34p6fCgpDYGLns6e4RKzhvAhWXUFVYw4WzXmBi2rkz1hzYr1Y2zKq3kXAt9SmxL5XMechQpvuhTC",
  "key15": "5zPDVNqhQXntDypBFdZDC2WVjVXJkEEVeBAry3y2pCD6ecXTYjked3ABWsAcxJV9dB3yE1mihwGsXkjC6mRf9mnG",
  "key16": "5cZQ4obXemznZdRTHFQPk3cEDCyFFBwzbYmAJfSJjnrQwjTtZEsgswvQYV8dSuok8qo9uacFwrz5gpFoUChBhKDc",
  "key17": "35nV9jHvmRrnL2PSvRTjQRWMvqimdoisxXgZofjKxfp5unpr1TVX9zzFDgB2zj3D5sPca1Eq9a8kotstZCJqkQwk",
  "key18": "3ZRFSqBWaWRuqiLuT1rPnNESwt7d3c2GSXKvZ4W3iVpXdjNeH7sWRamrujWxRbzSWmEkhx7eGLqd6FSbbyLMhat6",
  "key19": "34eYwt4AtbpYANh3ngURxqLn8vUWomEsvdbDNonsDwWnRfgCjThY1J5CriskVEby1SwVJaqoRDjDi4HEpx2nyWPR",
  "key20": "2YFvhqPzbPQuhXN7xgqiPeZNxfu4PyoYbAZGS5rEaipEkHbu3rVz7ao5iiVpBtF84PPQpghzmM9aqbhHtdsouRva",
  "key21": "uCc7KaDivRkp7gQN8aMgvrd7ZCgbNFScHgNCZWWNNuKcYwuDuYLCkF9pdBU5jEsVxu67eMkbnUJMsYAMe7j2XCf",
  "key22": "2FXvodezGEbAeNeBNkL7QiZPCeTfKumY6AAccheyom3jQgEmDEVqA9KQ9UamJdgLMtPyEDhfvZtRdaBrRTaGJNBa",
  "key23": "5Be7JdMqtenTvHUDmA51zCqFJMnLQq5EZFbhHXf6V4gSjrioCrRXvX4cGf3wL8AhRf9XqXUiVjutV6Sc9LcXPuLm",
  "key24": "2BemR933jX4xsPkSAHxEqhfWG1hJWnGQdn8bhnAbXA5H6HuH6DfcebTZsaC65icXz2KLovHWWv5BAoWPbSSYxZm7",
  "key25": "4GJ6G62RGniQyWLD53ERvgZtzEbYe7apGpiYAqe4VvwNqrZ5MesaKfZaEroRZp4dz3coyNyBn2bVmfzysPMAqG5m",
  "key26": "LkD2wCF7vqWwsLW4h2AZRK7p62LpBL6FbNJsJPVLkyA4FzCLpxMn2ontAyUfx36c93iHvmrdxuJpMfDPu6uXVhX",
  "key27": "67BNg5fZh7VFfDJrzo5AGmKhmUoUjcLLS6PtGFyZGytrAPMEbTqMWKCne5LTa9z3AxgxEUiH2LdWT3Mr2oYi77rU",
  "key28": "nMWt6MGMq8BfbHjhARU8TjsDoChgCCJHL7gV8aKYzqBwjV5GXxSyroniiqHaGAA6FJK7jBfcNP6ssk7cb73FnUb",
  "key29": "3U5p7gHLrtCCDzwqW6VaZ9xkb9CxtyrAzf4EkKPcDy2GkCrHDEeYVWvM2u5TDgjUQwQxZLmiaRhunKePbwqHnpeq",
  "key30": "3QG6HiJSvLQ463vVEfS2Xh3L68r8D82fMswPxWUMVYPYS9ro5dYfh6xCjAp4xZ4dr5nnBEfHcRnB16PfJXW3apDL",
  "key31": "QfZKDDxfeUsSCbtHPUqb2dUbtqMSEb4hPp1755jdkdzumSy2MNQte7apgxbzPJVtg8WUWM1kTkDyjZs2vKTkfTz",
  "key32": "3yCRKWEEiLn39Kq1MgG18pPoNCcUu2cVx4PAdLv2AdxY9zErmtEk1JR8KEHTS9qkCNeszbwAoio11v8zVC8ZdDEB",
  "key33": "tEnuGScpCZukfE6Cpkd1s9rFWQDx1mdWos7VSd4VYbc3sCCLj4SPBPdNnZ9abFzxouZ5BkjCyXveVfU789AgUDC",
  "key34": "4SdDYsD6NHGbZAU9fMaQzWVve3iZ7B3vKzypRfwBSbwGh34BnfnCwXwRmpJMBGPMaVoT3gBn6GjK2wcLW3PFkLft",
  "key35": "3mSPXVxRTGLHMVUaEzeSLKL28gjuQztWtR8YJUc2X6N2QWDSnmQziEsjWD4PP32fXMCjyaH5NVzW6VZdFbg1Rbx2"
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
