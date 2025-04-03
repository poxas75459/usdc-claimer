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
    "3RkSB2vkDqykM5xoyK8m85Nh81MQJNgZZyrFGtuHeavRnp47X87UHYQyw9MWsXUXeoZkci9xmD6azJwszcPSDKbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i2t4227qDtcLU71Ry9kU9guBmP4z33rgdVzf7qsk3m9PGS6LhZ79F4MEqN4Nh7fC2qcPEatfnZ7UqrJaxAE622q",
  "key1": "5gyze9ahVG6YXfhwRzTu1Ersu5wDWBVps34xnLA9W5pSsewTtuR6RQiu2qCUToyv2PHGGGkKTEybcPy3wbWFdnkU",
  "key2": "4fxn7m7Ge58pqAvQZLfKumTfXhooTc8kcAR7oY7sXdZ1dfesMVuXeL4a59cqu8TjQPD8NX4J6SjMd3EjwFkuGdH6",
  "key3": "2HAeDiBGCr8JJXYun3UFgxbydJ4ZwV4oTaBMcQezCEebx7oV2DvjNhiH8TUZyH8DnFXj6J9VQJkswqSLDEYCbByL",
  "key4": "t2xrGxo8eUEhxEeR4chj9KhKoek6fzfxWLWQ9fPmnT1Nj5112osCaCtkCvp6cYupjACxS6rPEFdvXQbTk9AoNFs",
  "key5": "38pxEXgH159EMWiSRCdWdVq8yrpmhBFzmRa1kc6axntMsYbDVV2V8b6ZjeMrhffM9cQWfEGUogSjHmFFiF3oidHA",
  "key6": "2Yj5huQFkoVQmVfXGbs7fwh9JP8puZ9hAATXwFQ2KUAc3HYY64bLyCYRLwUFaosV8mZVn4CxJ1vNJGgtMFEC1FN9",
  "key7": "5WgMLZVXdoxxxsi8wafFbCjRhMtKsBczRyRwHHht25z8APFdxqsZFKvMXZsZR7peKeGjfJRV22pkDfdDprBcrazf",
  "key8": "2r5wq6xpCo4TspZDMvSutiger2p52yY4rSGec2zxY76anKGKR3KE3HKhKqMBqZGs4niz7ARAJWAEjuGidbMkUfTW",
  "key9": "As1EDuMjgAjkdzpTohFRcnKcMVAGH4sPANw35f1CDzuGAAiPStZYn39HwPad3F6xiEUqDzrVX4HcVKrxuYBAnmo",
  "key10": "gwWczvr5yoDm3CGQTneytu7mxsFHjZgMKzsZYk5iqEKDan7k1cyNXYWNTUEpdJo8LtScDg47ZQKmjHNwuFmwgFN",
  "key11": "HdXxR5EmjJpdLJU8hDs1cgMVs6JJnmRU8gLr5JGiUfiZvwX4z3oLXfWsGhT977fAog1wx9U4ydUZ9Kyv1knuGHZ",
  "key12": "5MnMUdW8rYP3CtwZzrqzC3pJcUaXw9LXbTjbGhbke8r9DRvHcNGjPLLNXpHPX8biTv4vMsxKuKPqVDJFeAvC79D6",
  "key13": "3decyC4GZ1ZTpJCcxzu2YGUBdKr34xH8rZqaVsQs7Z8QvoM7izgtzwLMdJD9Ds3iXk9t8DhQ1WY1YCcKaFNme1RG",
  "key14": "iJWeEzJbEJQLkAnoAXf3Hx4UPM19C3MaAabCWHyLhfrJc5tpy7pSeTMf8etk9dTp4S7BBV9hKaRqKy4TS3cU8Zt",
  "key15": "4xEuUwC9Qd9hZjrKjediACe5VpjzeyEHZeojL2jVHcdSc8Dmhg9sjc5W2DvBL5L4ZwHXEvs6LKPugFAcNddNkNVM",
  "key16": "3JetfDGF18f9sdFL3LBnwC4LNWXfUEuoM3DJCjjHzCWNEcxu53CkTNxSyuUwnk6NcMRgQq4PWzjTr1LU3VmM4eyD",
  "key17": "5JWB9ZTHbY6KV4D5s1phAsyLJWBvzBp9jghEFa1CvGGKEZLCLVwSAp8DHs94apTxeuG4meEqL8g7GuNVX7atUaJA",
  "key18": "4BppQwXHzmFjzprBdnJNEUymGu5mqx9NYRXjoKXnQrVjnVNbATye31ABrvULEXJbqFzpeM2FtV5WQLAbEWVZpYJz",
  "key19": "5HfaX4naovihkZA9SDPv79ryGDW6YufFvRHLt5NjYcJvFGBFB3ERV5mrk9VXR5T895g3vP1ASw3P8XKoP2cjwBrw",
  "key20": "47DyGZYnfDBkz5Wco9ejgZxMYzBdFzhyoAjhTKaokmoqfD192XnzbPfnwRU9YebNRAqmm65iTGpAPxYka5aJsBfc",
  "key21": "3qKqFCmRR9Ks646yrXSwSbFYnxu8pHVasPhRGHivSv3mtxZNVqippcCnNQ3tRkt1gHrFS8zJ5gNaeCWmaYLiTM6n",
  "key22": "3pSmkMAbcgw7RTnsBGNHABMEL2JDBR4CmvUM2qtsZg63oC2ZcoVKXgCjTjyLZJtVG9PFnV6mWAndk6CvBrixt9MD",
  "key23": "39o7rSCy9RBL8AnDQ1BuXhRNdWX89m8TCkAEzCJjAU5Qjew7DJKiDqeVCz3jLEGX7fBWSoUdAjgCzny98jLbP5md",
  "key24": "bJmfL5m2Pyskkr91QarSWjLZ18Hw7jHxXJF69xJdeBEfaYYM96Bq8rHYBZtMrtTeT1XBaHWTTKCNg1G1CnuUR5Y",
  "key25": "37G7qSVXqi86XWzASHqY3qKotmjF9yWvJt3FBmHzVhDt9mLaUuE2Zy2HtfuXgmijP4rTLFDTecxWPvZsiEBKDVx",
  "key26": "bXFsZYtcDvcWHoAwmbyVNTaDYrejMgaE99PDtrL6Keo4sABuGa1UbVLCfyXshBRL6WMPfNtqMnRZPZLRtud3PdF",
  "key27": "43mtNZ4N8WsdREYT2J6gXMRv95gix5jHxRyd6prkHYyDyc3mQjSV8w7FHTBoQ5ZWRgys6ykFGp5axeRFwkfWEi6",
  "key28": "DwgTpPcVtrtq617uzeKqpTo2JMhPJjMwsAznyqEaqpR6RMF4vNfHmeWFbXxWNs56XU2mFr21CszdAZdYgoh8Pds",
  "key29": "Q1iPqMysKmE17tCRV6v5L2Gv1pdFuSowQHatcxseBYD2LfJ3FgDztT7QiQbbWDdgysKSyFSeNgtLHRHrgwTJNGe",
  "key30": "28CVf8Vct7zbNJ9QLP8kKRi3sB6JA6cYuFf12m3aKBtqpBq7TJzyKRy3rerB5CeE7QPsQQNcudDEUaskZ38UBFPt",
  "key31": "9iTBJkGnHuN3991P7yXfZSU9souvaSjP8jzunsfmaJxPb7dZnM8bbwwwoj5LdVp7XqLnBcZTycW47ijowBSmpcz",
  "key32": "5Xg4f8RN6c3xCffasfXLrZ6xwsjev6PbSRjCtNXmmzYKGWQsJJ686h4XF7V5DNhpNdRbxbk547oJgfW4hDizwjov",
  "key33": "nBBcSgBUJwq3ff37XQ3fxQZcUyUSJdD514ZLq1hS9nDNhWqofRvfTX8YHqJadVeF9yUPVo13YfZGpMyDKLNWH9r",
  "key34": "2ppC8ba8PKKdny4FRsEqBfxqCpw1f7C7eKiuwsCBaoCma7ib2CKJxCD71atUfK9Ytb8B8hbsmCoRpn7TNt4F4Jtd",
  "key35": "RWrWgPVZ2KfGUaqX48n4Ebt5vVLhdHvpU444f22dr9p4ReFofcZGG7GkN5zrxxSWNVyPYocqN9PTwNPENNnY4vA",
  "key36": "3cDEqdErX8hd23abCLEzA5V5FRjg8TcRwAmx5kvq7Z5hEqzoNpCEva6hZeBp2433KUE4HQkeTdfDbDb9HVevjXS",
  "key37": "5k3mzYmMYfBbdY6c2QmrA8W1PkAYqSiUc5Lh88Jft3PEKufTV6bFvE84pJEHXoJeYyT5WUSwQ6SuwDu3x5arJEAu",
  "key38": "5Y8nxaCSknfhKofGy5CELD9GmDAKXbMjkdEeGSDSkYHSJFNJ7bq1fs6JLV8SGG39r9Ya5FtfRUccZVmEputxbhf1",
  "key39": "5CQh368nP84N1VaJDktggXyPw64NryELQZ1sAdBrZSXUHXRZNhFspcQAtgY6UebVm4pTSeUFmNQEpkdSYtA8Uum7",
  "key40": "2csuXy2KaPi1BReQGmdqKKf7XnZXGjPMSbRRx4Bs5Y2aK5zvJcnohkigpSGP5aFAD4mpmVDNupdoJ24zJdCzUFPJ"
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
