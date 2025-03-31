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
    "44AdQSKK7KW95GHSbBry6wmRApJyinrEjnkq6uVXCzSfVczeY8BzVuJBpgdogL3HQkZcszHM3LmgGiKc74HoNxyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mntTuxSXGV6dVUNQup4DXExnRCNjFvzMzXB4CgQrdtk7kbKdsGZipyErJ5ZCJvNLYKTG9pthdc7i9oZYdpgVnGn",
  "key1": "5mxb3h4mkUFgw7VgwyRm3uak8unK6L5BYnudZVdZCmnjsWUy7jpq17kBV6Q57BDH4njZHKKSU112118hLE5MoB1b",
  "key2": "5aftbwM4xs2coAfReSSrVHmzyeBCateHHJaT9hr3pZuHYabgDseFXcdCzKLAdVCLuXYBoqdSe369RndPFb8peBzD",
  "key3": "6Kj8rifJPcbqQATRRdLWaaFtbnmYgzgEEdjaPgfvqaAf5LiwLaatSg6Tr15kJewMb7Fx3ighpXTbpQ8Fp9VnJwk",
  "key4": "5cqrWeVnmAxib4xuqwhGVAU8af687mpT67d5GnMKZ7WgEGtjzCsEsqmDgJyxRR43DbSA5RHTwfA3z99fgBpxYz6r",
  "key5": "3rhrUufo6dknzScwRQo3UGjttoy5FJCaBr8E6XX5FCEYASmbyi3ConDqUfHG5DrXiMmbFAKTN7z8pPKgH1aA6djV",
  "key6": "2HxJ1fzqiTphnLjGJb9c5n5Md8fB7VtAbkTnuZjCpTTamb5AK5G36GjxhJTkPWdSegFKEUe12TLvLp3Y9UBE8yCw",
  "key7": "3gxtBLvbex19XRyhek2NeHrYhXbbpiwFx1so8KbVe5UNpHcwUTYJccThQbcxjmLHt2gZRmZGyNntjxdEkFBD2s3F",
  "key8": "3voxadbDhGQN4dXuEUU2zWha8ycDveftTp4pNXXuoFATHr8JcqJLR4JyiW8oz4edMdYSCpkgVMGi83eSBYvpXGoG",
  "key9": "4sVEpb875URxLxi3uUAzQcVa5dcpsqpccNuLhwTE5mUWKRaFMvtz65fYohxhop9gHYXWWdEjYTv5rEwKDkn6WmYh",
  "key10": "4mGc4oCc4YANCsQXq3zGhkFB8QfEYzXqD2mgmAGRzRKwJ1GT2FHnJHHzDcPkZezCGs9T2cmevLrbUxq8EuzT3i47",
  "key11": "FxQvofZpSjmwBFCXJUvgdAj2fy2xtXvJhgBkeU35bz9yJgbWXGUxFVrppVaq1yCqPRGZHsDwBouU4UMGrGGgYQX",
  "key12": "3SLNnVdzCjaUsmd8DcMJ4Sc8xxGfoaaf74VDmXzZmkTHHBCckmFrESK8niJ2rCGb8tvV4nqgZWzKVRdVEgAPhFYP",
  "key13": "4r9GbaPtwBmguvfE3zvVs6stF2x1hcTJP7YCjZRAmLNdykJShMaP8CqYaRWfruAciTkyh7PpxsYkiKyQcBGuQVAm",
  "key14": "5Hy5rinEu877o46PnuMYoEigCWzn8BYekc8VvN5ATzK5wBfo7RqczQwPcdGLi5p1VhC1sVcZ5wVmU8HHYWyeEbu",
  "key15": "2mvfFJkZ5VCyyQWNky9vZfNf1eTUiP9MUdodxW4sNpEgaL7uahn4t1hM3iXj3hXnW7LbVnxYN9MxH3wXPUYT41BY",
  "key16": "4qKpqHxaK6gE3aKSCAsWrwUsJo3H82ssXmE614V1y79UNbnBi8bsNrWmKjC7skgCMQjGc2yWSieK7oAm4TzDsTxt",
  "key17": "5SXHBEQkqnwNgVcSH5CajS7w1jJGR1CniW4feAHe73TG5RcFsFwNyxfG3hSmAf1hoRki8ZLiyTkBrbABPYGbsEWZ",
  "key18": "36ydLH82sm6wqW8GKThkBxzWTA1tUyP3wM5goGgAbomnVZ38iSGZn7KPErsKWRwkShyKThyFv68cXfQ2daLvQxti",
  "key19": "3T8kkP7Wh1Uyb339JhgSFxtaxynXaZxui2cAjf4JqJdfYwNdcX9WMEjFBUdPRLfHCeuVe5dp4CfTzGVfgSJM6Tf8",
  "key20": "2AAi3syJYEMaThhAUaMqpQAAtZQaTuzRdPQV5aT8zcmqS4t3gXDfCNsh6igavmr3kt4gMi5aZ9cnqeEBFrLvJQY4",
  "key21": "pWzdspPs5DzZykmJkNGcFtvuLgLXVftZY9pdjCx7e4thLeMYQqXhfCYzLcXBGhwEzcBU6p9e7mqNqv3hJPm7Dwu",
  "key22": "27ys6gQDDn457DEUdbxD3LQALCeF14KWFXfabpyhWUkcmwGLMUpjNBrBTDs1TxpST1amAbRfJRjw4VxZLcYQzReM",
  "key23": "BmVBFNvNNpyC1i5xfwLgWWXKyfPM4iQmqWs5bLVQC4vndPtLZCkrU9XZpVD7b5XEHSjSJHLwihz11X8jB3FfbfG",
  "key24": "5qJzEoreg6oAKbKgJnieM1veeZw4ccCv47hU8Qw7saWcDLhfVfrDTV8wDwsHb5DYfWCpPTMi8Vu9uMrDoF5ar5JQ",
  "key25": "tbJvR25dx26qdYHavrqQi2fuEf9ECHaxjnJSHK6YbmFMqgFASSeHYiAXcY6MzYhJCJXAxQx9hVz51ayjGhUMbLg",
  "key26": "5VDJsoMwVsqS84mGH2fPbLDfrRdj9jm4KTnVH3CLn9L5NJnHTZuda9meQ7dCFGED9PnKFrAzY826L5EZtq8hasFh",
  "key27": "3ucpLr2fycFqvFwnKvq56sxoD6EGMwFXXUsmavfPw4CCPEf3ersYdBpC758vsgUj3doUjJtVZt2N2hAQj3Hozz6r",
  "key28": "2DWBEKoNJ5eAQgnLcJLjRv75FTyNoS5H5FjfHDMZio46nG5beAJS8k3feE1y2gkaStM8RF9K6ZypeF6vNSxsRGSf",
  "key29": "3HTgHx3JMxDgqZc5Ckp4DbTcnwWc1Go1vt5xB9uRZWt1fmKxd9rypb7QyTw6yswaeZAbWjfw8zdyi8BcESdUHQwV",
  "key30": "4AKsC6RQcBvvt2rbAEyh7Z3jEnide5xUVmzgStibLYG1FAB2F4wJUhQfkJxppMDX2JYHPLgx7AdK8HFZjRDxsVvq"
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
