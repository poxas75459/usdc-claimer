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
    "5NrFYYL8ibgCLxh7ZgeWGPeUy53JQsLorHKJHmcDxVCQ5MLBBhpDFVyTJSsn4pAwyQNs5qL98y1med9h6dn1Jimm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "657NkYmWQjUnMvujaqvRtp8Sp2CpntXrVpmyjTZiD7p2aSQS7Xb644E8ibLQmVCSgUrpJcagn7cjwsxL4Gvfboon",
  "key1": "6365RnRUTcgHmtGyQBANpKL5PDuMvXFi52wgoHgAFwuoksAwp5AeGD6UVL2Wy3wGs6X64m1R2gsPdi3VrHtgGzbM",
  "key2": "46g3BjjgZxvur2tqU8kA6PzMHq3dq7YD85ebAZ3FXRyoWZ6TrSFzKJF4daPZgYyDQ7L2E7WyodffiPNTDBx89PEw",
  "key3": "Wqw2eCFnhzh49FUzfS4xB5LoVDamYj4VKcfgtisu27zEuoMYt4UQwmn7pZQjvvUgH9jPuJC5sWqpQbCcw1SDWr2",
  "key4": "4TN44i4JCfJ6No7Npg7t5qWrQwNyzLrigeobAPsyP6yWo5Rco3Jfhc7hie4KpR1JuJvqWmnnf2juUpeRZ2oL3nbM",
  "key5": "3VFggLi5kcg7aMdkUQPw7taRLysSZgQi1WcwUJNuDZooW6bGPyTeEt5wVeJQXPxDVrYeSaejatj4Q4wVzv8oM8dY",
  "key6": "2dU4pLTcaYx4KzYccdJA1mws4RpFU1VH3n6xBbfcKPKBmUMpLk1SvC9QWjmFx66qJYGz7ssVShEMrFYK5sssvvU2",
  "key7": "56EP3VVRp3GJs1jZPvQXazd2twTVRNiruqz7fgTbtPvbueGwCd6c932GySk3mKo9uR6XYMXXLMHRLCYXBzjML4NY",
  "key8": "5yqieg2jnHo1hNH3A9xidKuXKQVCd7B2qarfY6ScJk3z6mBt847HMnV6qjELQUoNzr9gJHCRZuGmUYB5xmLyyWXm",
  "key9": "Jg6AN5ZQ9h7MkSvD9PZzWp71UhcMCDmi7rdWkK6Sj9oj39JazpLiSJzqkVf9z5rEYZfKoFYFaXwsQ2TA6ABBwkH",
  "key10": "jHofeVzxZCwLGtU4pEW39xBUWLGMzyxd39De1hYwR6EeQFW3EauNnxShLtmcFLm3aStujivYKzsf8Avc6NPWz4Q",
  "key11": "5QdW6Ez8jcGnit4KfeGW1E5s6a193CiSCkQ21LxzBCnbYMguZuA8GBeQBiRznHTqdFn41U9W5b9EKydbXX77Qukq",
  "key12": "TketMRF99SqypFiBkz12JzoGG8VEiENcF4ZjTSEmT1yXbdekSoWC5amzUHY4BHtB668MkVSh1R9q8C9tfsz3qFa",
  "key13": "5qy5TkbuCKxopsEG4zZueUxDrwUvX7xV2d6pwFMxePZXiX3xfKUmqhDniCY64MgtnHPk8p4g4VF6vdvTAHjEnWpN",
  "key14": "5e9zBwU2nYNBWU5NyiLX7RXr9TXurgVokPH4WFfgXMrhq3jYBdWkjNYwygGF7BTF132xVUubWXbXUAe8gS7XJFaz",
  "key15": "53JLC5XQ3gWiGTrNjBfroYxjfDrJGjsvnKLdAfVb42KtagzRzGYfjVJYkEBcSFw3b8RumKHaoehCds2dpLGhFLJQ",
  "key16": "3ZFvWULSwxEdLWcAsQJ5o6wfSwj1AHkBAW92UyMZFS59zfEfXz9FW6faVgQHwRfJJAyEXoMsRPzoXGYm1CGYTNKm",
  "key17": "2WE9gshHMgq4gwpwGEq4qyZjUnwmCjEApHkjuW2cpUGU6usEqtQ95n1yWwzzZ6ugaMAfTnGhGYVLg8dDsEkqDRNn",
  "key18": "62BhHinHoW6NnS8Ne8srbhqFn6sotPrcrHntDXjpTR5Z6bp7RKDN8qWdo5f9CrMMyQC6htime8d1YQVyW5YrWwcx",
  "key19": "3ar9GYBTiS4xJenpbAWod62dyhyRfWwt225hpiSKZyefFHTKWGThJAP5cnXjWAAtLGGdELSi84v5ZWDL3VuJeL4h",
  "key20": "4RDqATLK9sC6LWLsGvv1AT5oQLYDnMjtnopVRRmjcC4xRs4yP4BTSaMEiZW6Fz9bGK97wavs6jcg9sYirTj6sRDk",
  "key21": "3A2GkBhDeSFEr3XLjvFnUQFcVRDcryEzFdwHcsEFmvo5npsZo8SsWk1tGSst2SaaYxDbxFpsskDCJXiG8WxsN7Qe",
  "key22": "3NGUxCjdkaLofv5tV8WH5wU9fLhNJZUF47VchQ6yihpDh17mAj7pimJVD56vSyuNvCkw2LJt8bEBHqqDFbGbZqDn",
  "key23": "55ks3cEwQy6JDn4ccZmYHyTfo5n4jMw6GKmPRft3kfBfDfmxZazmqyDdApWaDnXyJh5iNTVGzry8un6mB8Bpjsch",
  "key24": "GLQGjvwXq4SgHdPA2wpFrDbBpDENMYpuCNUcFCG71cTTqmkPQf14KG3YSef3XaipKJKYPN5iejuaXMLiqRiWSJr",
  "key25": "4fSWoAeps91WLaZHFauszpD45Vzhj4cwDtphkFETz7XtCFUgwHGhR4LtmHTrD5PzFFccvX7xqPMDiXPf2LtFavQc",
  "key26": "ruFiuE8FoBKZtBeh1oRHxwfGTcjjrmMbktzz4Dw4BmMTjjgrNfx7QqMaxYaC1UJZguqDoMkg9VfB5sNdVWugXrp"
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
