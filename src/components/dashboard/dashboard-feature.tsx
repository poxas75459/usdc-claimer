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
    "3UyMQuCtsMCrpAhBpZjyziBqFU9SZ4j5xMNEbTaXxVLK5Bbioc76oPWUdqtEPTDxRL3USeaZWQKz5K9i1VUFmeXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jJyMUdgWUAHuuzJyMEUhQAJb5HemFJPYznUzPwP6hH6E6nSUhfPQTBzVbMMx8DyA6yZTK1kyevfMUZp36QhVZMx",
  "key1": "5oHU3XoAN5n4ryyK8Nh35p9kkFbbuAXSvbXR9dEHcsd6dJdZceriEBYxtszrPakRb6LqsFyRo74NC3KecXjCCp7F",
  "key2": "RYD2ZRgKks4FTNGtZEJRXtsWjuBZnUvCby9nkPzhtyUt9q97fEZjVnmoe32cnXQ9BHnZugHubEcmmzaCsd3o4er",
  "key3": "UHTV55kyozmTwX15VR6u6K9XwJ4dKEqmPLWtHF2pDyU5qCXKZFCnDithGKUmtUVd9evzPoMoQftFkpx5MVA2dLw",
  "key4": "56MYNeAXFj64zNKkAipvhmYSKKKEnKJvfw7UiV2Tc78T3b6qyfUfE4HdtCZb5PR1RRZGTvnSSYMYyUYn6xhdPL9o",
  "key5": "465BQELtjzfT8amVAGgmAXj76BdggYjYDcA3MY4Lo3y9ZzgRxMKNXwfM4QEmh6v1FPbUPBM83MZxQPBwjtkXNKuh",
  "key6": "3iac7wq77tGvkbsLJKiETwDP2yMzudRBfdUyPfEXRxzpxXtkVVPUeaPgtUiog397oiykZ7XAcZpB8KKqofKSNU8d",
  "key7": "3geLs3HL8529weeWBHwAfvybA6qwnYEyuU3gHWNZowaBv4BDf8ys19NgKS1vLKPCw9hSaMQGBDf7ToRATrv1Xnew",
  "key8": "4s15sZLZpceWMn1CJPD9CpGM98jWLXupyz4Thn48KyhNWpXE2KoASbN1LuVtJSXxhrVNMq6VYoq8XJb2UTd6xXtK",
  "key9": "ztVNC7P9dcDPsGmCGUAMdtsqUuEnRg3kivNzQAMcZxNSHSwhnyNThAQij5PDXhEMotUWYWwK6NjXgyhCjY4KqXz",
  "key10": "gPsnWRStqK1R4ppYcGDhKrJxHF9eRXAsFDDPu97duqpJu59mjQufuDnPdMfifS9qRgypYFAwSKuUWLNRLYE69WU",
  "key11": "ZAyEYxUWhDLMupQEPNNCosgA7nfeUKxpNTWPbJWyK7G58YevNh9jwNRXpES886GegAER8eygpMoPuC2Lf6NKQ5s",
  "key12": "4gmGVUTNuY6KHfddVfACDHaXDLQNa5nFHWtKBikQEt99uqME8dQwChYE2XwshGHcBNYo4qAAS6rH1vTdSKgy71PW",
  "key13": "3ezVUFuxCjdVugGh7doCqEugqmz9FbvsVVaHX3DrP5XHr6BZtB2CDmJUT4xTusy5U1EpKmBVa1GowDzVoi6DK23f",
  "key14": "4NUD8jvvq2vuYXowD5ZNC292HnR6d4PV6WqCXXS54xvKvuLYyAQYS88C1A1Y5FZdDgXB4TUK3BigVY7CEghtayFp",
  "key15": "4gLCB28WAVjfgk8fncG6u3a7db3qZx3zWUpX8mUPWuJdTJMZhCoPSXT3cbnnh7hy46vLMKVaBxTv332giw13FNMh",
  "key16": "3g75qsWg3dpfmFDtSvWHiNkZqvNU8w1r2RDKCp9kNWU3veg7b6qTkSD4MMkjhGyfBaRp1pN1E99YNfoXqQqm2Wmd",
  "key17": "4LSqM36ikJkmM5mMY8qwNAfn7wwR5C37h8Hr6GTAMXQwycPQdWANkHSojUW8oU8C89yD2buEp3bLbd7PBRgWXFLR",
  "key18": "1wtU42TZj6gp186PJA7kdwbd7UT5qqupJ7bnGVdzMr61dFu73UgUP4Gn3ktUQAqtTFraerrqEJTbwaZhEEPQhox",
  "key19": "3DZC3YgxqpPf7JkxLitkgWa8vqm4qgBrAYKC7VE9areQZgrg1t8nwHMZgL1AVXY72jVkzybvZZPozCDFHeAaqJrX",
  "key20": "64ayATDArN7F6ex9cydPZmC62TUiDRJPNCQoEDZqFnQVir2BZCJyWUFXgkzEK4DvoUWxbdjAeUDB1LRusCcUy172",
  "key21": "H22uXmpmf55fKu2jJcND5fp6PkJ1NqmHRrR8gt8Q8oKbKoz6nSUGopyCiuAq4k3tkRiLXX4b9yALmmMCu6DKFw1",
  "key22": "392ATDS425rXT8xkXkLdKWAuAZnRBu5faEkVa4gE4Akv4B1vEpdT7otcMbfGaSqYVQYMA1ZL2M1xMZzXZaEuuCCm",
  "key23": "4EAkhxWXyWxnw6R3ahsnkLL8ryptsWEEXJ74PVwiimg9UEKxp6yNGFneHswoC7qcN9CJfWA4ETPQ5o8cTzNzZf4y",
  "key24": "2fZAWfs6u9ZzhvaCxvwEA1pkferyjYRob8cWJSdM3oPEpKTk5zwVd2vUajYG4VGmyBPvTZXxkgRbvkffVipKsTpp"
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
