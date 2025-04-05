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
    "4VhGWGQSR3mV8SbUYqKv6bDAPMG8AGxN8ffzFgcqWQxZjuH8A8bWsgqiysaYjS39rG5HYBa829age9z5wXDm7Pja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fuzya6c57ektL57CwUypLBmeMgPGQMqqWtBWZXHzPUwCVmJuwmjzzURnNwHXmK6oRMg1nFZzghf2bWSuoBRPS9T",
  "key1": "4nBBTe3BDdi7mxtuspWxYzLWcJ9Y1bUWSLkaoDhDy9xC5AvVkyT9xEHxBZobvtTBk9cRoML5QwB6724EAAacXTL2",
  "key2": "5RK1ss3vjGrvPbnfW61kzZCGjRHZfVVKNyDcUGMiPqVBLo9VMH9iTk2MCV925Ce31eutvwoPgHci3iuWZVKjj7HH",
  "key3": "jkCPakPyS32puhYKu173qiFA1qVBsuiNp746vkA8SbJ8h1xKZZqmS24XvKduh8dPKCPKEJduSyqcAKCNh7HZumb",
  "key4": "zEYSxkQu5oRRYReTqu6C3TrhT22nat9uoLRRosPyyVfgwi53Xi37Q8eCirWzFFEd3c6w4CPjhYKt5ovDwsevARP",
  "key5": "3a8BZyppYYUoR7JLnEChsS4ahnUrff1n2DB7Bw8iq16cmQbQPxPikZFzppodxhAM59XvxVEpmFaJYZycsroM3E6M",
  "key6": "2q4PgY8uzwdhuX56hVMGY8aZG3FTmkgSc5D93Re5MuFUw5FqJuJrf3anopDBDnnpj8NcWuk4xzMA19XPVokqMZud",
  "key7": "4kXQ21FQB12Mdtpb3L1K3bWMdXeYswdJxKjKJqbJFNTQTb326dyuyiD3kNNhg9ABz8bYSEA2GvgP5Ry9Htx6NE8D",
  "key8": "4obWjvPkCida7mXSGB4JpPs9WQAwZFrv6hsFedqVLoibQAaMiWDRXQpoDDKY5MdyDtxcPSqSKLNM2pWcMH8G7oHj",
  "key9": "4nMUDxmbTB3xteVWLUpQbSAxDT8TaWeymod9Jmt8fnfEVNKRZSaXCPST49uXmdoBXxLDKGaoBDYmC1Ap85Qoq6o1",
  "key10": "3My8pLniwZJ1tWp9DuvYGBWz4vYMg4dNGm2rV3m5d1YJQq7HR8sQ3k3tnjfRhAkuDyMHBSJpHRpnZSKBctLrKJKm",
  "key11": "5VBjMpYG5r5KEvCAnkPMe74hzk9yVx4f3nsQbSpiKuXxaBZU6GjzmxU8Sfn4zEaoJuYX7ZPwppfn9LbWW9zpuJyd",
  "key12": "sRPoWJ4iC876eT3aC1k7NyGcys5iihBabstpogN8pxZJFrZ8rAYKuq2WjR3YXEZPu1pS9p1TXtboAzd29ZcPhVX",
  "key13": "phRnfDaWs14Qu8nNguT56aMd7B8RCeRn6zg77rCJaDzDGtqjkXMbsC27WywNZmiYDP8sG73RHusGnB9SvRLbeqT",
  "key14": "2MwF95HrHcJFYV7d6kGQqBwFZYBCmoSST1M1cAN3DH2YvjN4buPi7SrEE1FbJ1U8o2txQnAHNSnpPyTqpLmBUk1S",
  "key15": "2bNHXu28nrDNRDwpiTQx51CU2AYm3FSSwmh2p26rHnxnNrU8J4Z5X1tWNfqfjEmB52G6jSnHRQGjULri7iZqrz1q",
  "key16": "An2yxJE9w81n5sF9FrKo7ZtZAbzkL4FTkkyqJdpaQW3G1bvhDfzBK6RPJqndiTKbvAV146FXhMSKc45J8Z4dNbW",
  "key17": "YuKvB2sUrh9L7ie735SekL5o8rgFCuB3YDgxkPSDexDtdvea1afaTomGV56hNp41F7Xag6YvvkxshapGytTzWDr",
  "key18": "5Gxb84iaVcAeq5L1u1upVmzDv326rPRsZ7gd1yvywJ9jLGCreY2JqY2Laqp4QoZxwSyARJDhDzoQ9c7CDfRVk1AP",
  "key19": "4nMKodSuqaLgGcD3chX3nLCw5bQ2DFmjgPnkoPNTkG85srHpXpPvQwr8njbma8ky2nrccAiEHcDiYeswShNycxG8",
  "key20": "4HkiWnFZyFX4wjufEHgi3uxycAsjUB6onrmh45jUTpuAQLGB7y5Fykc5p64HYBNWwsDHzk7UQ6Lefddgv43mpaZQ",
  "key21": "4tFQfjf1Pht6jdf9oE6j3EDbTcgSaeWEVHmdSkFLfbeMa1iKJcG8wYgrJUPZoKJRuEHWuAC6v9HiCxDR3VSEXx3S",
  "key22": "4Jm4QbjBxuE948ZAHeynVUYY2FRZLrG7QnsGYYaKs4oNeeSLpFMLtBUFb4zpgGvrsvLBmzDt1U2Z8NovvkNd4AzB",
  "key23": "47V9gbSCZQJidUfX91CbJhE4RjFDd2LDnbZqweE383UuYFUq8TzNhxWLH5mrRFuz2xwvoXK9eGzcUFTrTaTEqVhp",
  "key24": "5V2FGG9Bsc26zKbaohGimfead4x1iuA2N56WSXPPvzYbziUgCAzwh6KMzh7FgAbimYCwHtrZda25jwcrzxch5Ayi",
  "key25": "63jKvsAH5SF8DMYvivqAd7cvYSEmCtmZc1RNtzR24iYgFbMXa57xmFUGXWXFvfAcJK7YnRg7qoMC1FE7HB2zkZfs",
  "key26": "5pFPwaz88R4pGpHCrgPf8th7w8ARXhG9TXi7JvvFxtX5zrsxUrsdFSzT9RkEK7zrPsR9vuYo4eXELg3M2Ygpbxbu",
  "key27": "23KrKTvbaekE9T959wDBdztwzN859qVzTQFWHAjZRmj8hnBkKZx8yf4QEyTiULizY4tKvx1ENxJn6eVq7tqrrFCL",
  "key28": "459HsCyw7J2bRUpoUc7g5gvbJ6ytjXwdraExEwESxdargFGQBvAX1Kv1Reesx65wKmHn8BLa4vx5BzaYYPUMhqNw",
  "key29": "4UxiF7heMvRZcWURi95eVpGLrUoAQ5qgDS3Wbpz3xttoqThtQUTkLXwSa2E9NG8XiwPJJLvkebJwuXus6JLRPJZ8",
  "key30": "4HjjWpEQwbyim4tmMmUmd1S83ev6fYNeSf6QuNjq5pYRDw77MQf3wpkbaKJQQ6WUpdhDh2Mtp9MoZTbZRRXaNYuo",
  "key31": "2zGqAD1ejMouSQJFiFWeBfpy8PWRtwdHFVbrtLYKYEqoMDKwoKyDwMyrB1EacRTvbN1aigC5fEZ8A8NQnocyamUN",
  "key32": "Ud4YMWtLMesJvzPWuMLvhteGrVaVi6N1rtG3tR5D5oHHfxeR3AoGxVgYCruukFnSP1aK7BUU4VfFKyagcyuzSmq",
  "key33": "51jVcAyVZ2TwtnXG3LoEDMhgbngarfffRrg7izG38RMz76FPwQSa7eW5gavMvD9pWKtCFYbjKTHSMS3h4dHa28iM"
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
