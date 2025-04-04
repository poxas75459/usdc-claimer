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
    "e6mTWDFs3jiamQBrYtkwuBZd2JGmqTtqNrL5eL7siHsdGFf2RwDCLF3BfrZB3wCWhgo8pvB1swJfUDGHFGiFrMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AGzde3K3d8o8KY2ndhg3ZUf6eJox9Zbz2xcrHD7Z5Nvx9VTwu8wZja8nxYaNUFtBwg3xpAh6k6syd3vCfRyUcxR",
  "key1": "42kM3kEVsKNSfwULNKr2nESKk31HPXyP4mgkYgYY4B1wuvBGmHWg9We4PScUdA3fx4djkvaWLwBewzXCKdtaGc1L",
  "key2": "3NosUjjhrExYon1DFyZvUgbcJ1aeimgBdgLTqcP7e3fvebd6wG8mr5Tnt5NUvEV8B537bf4TisLnr5yfR28spvHC",
  "key3": "kW5z3Q6XKGfYrcEqWUMGJYH3CyULwhDuuiErVTRQQfqfNou5DvyvTQvcuHTpM8MCEEKdpW4Nzh6FBD59M9Sz4wK",
  "key4": "2Emth1ZLYehr1Pp8VR3ox9VPkGURcR3nUBWVRhYKwdbFai3qojXKWqx6E9Qp56mdcCg12E3vKaPbsfY4ybxZv9KK",
  "key5": "5NggWaeGwUp9B7CmeRRCiQz6xowNeztWEd6VZEneoaJfuyFJJRn6Dgt2Yx3v7ABfVpRLqhKNXbJpbyzL7MQgr9Dh",
  "key6": "35eXZFQcY26uZdtNncseyUfKi3dnNvJPGnY5KyMWpVB1pLtijjmgBEx9Df4VYwpnWsSbWG8zZX364ZkXNHzVy5q9",
  "key7": "5SUVVBhH6edAuuBpouBg6dUMX61HXM2TCvECJ22RNKUgpW3zCGw3hq8mgmA1Lwd4f7CdPMcourXgXLEdM2me3yTy",
  "key8": "4MCXei4cZc2h5TD4ap9jteVJM6haZjeAj8v9CRUE2BqpL7Z7rGAySExALMCXYyoQsHWQUebHJ3Bxi9vureXekGCc",
  "key9": "2i6j6zP5tnKwhAyUs2h8SK6BESRANkfU4UQHYk7hXivRaxtRn9cAMqJ7qoDpBkQGuc1DJ1NNUhWn7abf13B9w8TA",
  "key10": "54RFuYjaFA2WhZoZByC9dwxaLp2XZ58oPjfzcVzCJBWwJfBzYzPzbjjT11Uc42KGXGEvrKQgB6umxGHkWo3EZPnW",
  "key11": "5DhDUxXsversxHvKP7bXk3DX2AkAc4acUmvhLxdFm4X23DhG4sWcsytr7anNwN2VowuqE1Jv8sa2WNucSiTtR5Vt",
  "key12": "512H67JHn4QDcvVC3AZvKbrCkXD9JB1uQRireW4acJ3qczR6NdHijxbofU5uuFYNJv4dLwquKQW8fxMq7Qc7Qowu",
  "key13": "5K2izUqDzponzKTYtHs9kAKfjQQq7W1REbV5vZzSu1nEjYAtsGxV73RgcsE8WNLgj86T3RRCLACkQxbPfiJVc65h",
  "key14": "275TGFPczkXKSUU9GhPRQXj7Vo3vKaxQa4v3qtJHuN3AquQn1WoSisa9T9yG6C563j4W8Je6YMA3eooaqYSi3GRK",
  "key15": "3HLYB8aA58EgES5yXozHE7CKKgiG1EsJ94fFbgwVWvA6Yyakg733RBVuJr6dHFY4aKz6nfc4g3CWSHZTp1CPzpRk",
  "key16": "3GXyjWhpQywBogfGPFvdwYhcxyLsMLRq5oGyBRb9oYGAaNupCrJ6TMg5joBUrez1iEdaH1pyrGhhiwm2dSXNwsvV",
  "key17": "3BpPohE3uxgaQamLBTp1VuXDRQJn9Ppk8Pz3MmdU4bQZV7259gxnxfTB6pJhuKFXfLNaaJZPgaANB76prF2x8epH",
  "key18": "56Ej4mkrn4aC38pEDfyGbe4gnFPEg9Yphb9ANUyZA1nQHDe1eSfmZuiXiWDoYRJPcDot9A8wrJL6wvE4ahiH2ba4",
  "key19": "4PP7zuCJMgL1jSmk6ehbaSKJvtmeHUumEhYHFE3mu3LXBRRvMuA3ww4JmGU5fTqasXDMv6k4eHJ6jtu93vqTinTK",
  "key20": "zacoEGPghDH2Wtk47QMhZpCkmDyTLL9CkGwLw8wFiovw1YTR7AgE1UbzsfJNTYeEWGx4AakxAQqQsStN3dMBoim",
  "key21": "pKwrwPQBXedpChoLyU1NwnSiK9hSKaxx2G2pd8zN2Dpdou75moiTXSuhWtRegPQCC1dXsbL4aXeNGJK34X2ZfAs",
  "key22": "2WGFhguFFuYXBd2zGieRkHcf4qK96BRVB9KoLQ1sU1BD1kMEgcbMFRPPpBx7orJToXYW7E3ZEGN6mykfadraKQeu",
  "key23": "4kz3sGr4TEtvViYbBw5wy3Pda7akMJEUopAJL74B3KHSqbDDnVEi4MUxjfdxN4YKjeXSgyj3Kjrh3gLTAB5LzCMz",
  "key24": "2mD7AEKbf5nLRbbbvwHY3Ab3Ubi2sxkyYXRRs8W5gcbyU6icN7GpMQwPbGBXhC547pnUczaNSyLP9zoUBcBRk9Qa",
  "key25": "4u6K5cobmiNkCQERGyERSFMDECHUWTgURnRycUXKjiqfUo1YXtE41qBdSowsuajQyFnPjfiLekiCnhCjvhJARgqr",
  "key26": "AAwcXQRMFUp7oEv32ftmTvr5NC54cbJQCS1aUwVKjf8TyXzBj9dQnug38X8cW64nf6157a5kP78J3HtRVpMMr2W",
  "key27": "WvfdsgU1MTZL96z7oRsqhRXB25rZxrBQTTJaZGFr8FBDLUwwe22wNZrfbiVGFTiytXFMKz3N8dfUTZw8TH72Naa",
  "key28": "2JEdLjzV33wWk7wjRifNSsHj1v1E8uMEDrxRBhJHUGW5KTvA3o11A5bpMNu3hhZYpQA5mQNAy4JMvHmJQa1vxMPK",
  "key29": "2ZYS78Mh3gMaicaPcTAPLj1k4Vu3gorpQEQsxAZ4AuSbVa77XAJafZWf6YhTcBD7vczvR7wgX6yoVMRTU3hWfCLN",
  "key30": "5KxJ8ygDXN93Sa3RvToiSKjxvYvv79ns17gYG7R2zmTxpdCBR4qP5opcYYcH9WtxsHfV59acHKJYVeEuVJD2a3rV",
  "key31": "428nZWyyCNjF3f1P14UTNUobcrofBWhcFXavW6yxKqTtkA6ofBa6dH4BAGdMRyAC6CLrJkPBUArxPsWyybQfJaDX",
  "key32": "45i9XNL5xz5SA6EQn46ysgVebbQJruQDFo2U5NduiJMqw78Y39wdvUTquqLtX1xs9J12WPzdVf348SPKUkNuaFFC",
  "key33": "3oSBRe9inJyKJS4bRR2hJ1eoiQXHdbfmYefyrna47Ev3JPee2TuLYWw9A8S6H84dZiF23PzZdHFjR1PFj7mNskFV",
  "key34": "AdhWGDG5bKMZZfp8o2xBvAW6hFHzkoKQRsA2FZq5PRtfTjEhc88vAxqgytjQkBRs67YJB1PTNKyd75C5ABTboRu",
  "key35": "4SeNGXZ6urwynPS6GMU9zpTLt1vwfLe4zxDuKAuXLQMCsKc62LarqpePW9DLZi2WhzJiHvFHGFEL9pizK8GxXPDC",
  "key36": "8yb4n1H9vuiBu4kogQCvrBRYn17TruBpPNn9bJjRkGsiAziNQZwSgPgj9rpbMWyVcQbhKjCS6XYBkMhyvmnb7mf",
  "key37": "5wB2RGgPiFdiHuAu9tqW4UWu5GJYRjUf1FqfjRRrBvwS4tKREnpvrBrYy4aJ2GGeHyFYBkeEkHjzyNh1mZwtrToW",
  "key38": "3XMNyeEk776L1BMeuoTK2QYBtPXpxT6gDnBiq36uBRhZrEdS9ihLRJf79pyG3Hm19yhoNHee8uwqCYhB6jRVpqxZ",
  "key39": "5RfqWrHgDevRpSaEPWNAyNvapeyZt4iWHKsyVD3fBRHwUvcri6dXsoWhG2KXAbCdkbNThebpLibojEzFSNn3pYVi",
  "key40": "4CEUY2ZXn754VR1ByV1u455BhbhTyoZ6GfuQQdp8FRTKZvnBi1FyJYgL582L66WBP3Mb7FxMDgq8qYzmn9y4R3U5",
  "key41": "4BCp6ajTTP9Axt35mRAofxrpzwvp8u2nA4BateuZXfeNEiAT2T3oy9atqRmTaL4isN77zbgrUxAdtcJPq4yNWK3i",
  "key42": "4RfyAv2fXHArqdaxnj8gqaaPGjrzyDLUkF6aa6e5QWt2ZBC3HeAWXo1T5fJ4wCiY91oQHbXSjriy6B1DhARN5zT7",
  "key43": "5LM5En6J5vLbawqwT9YHMf2RfhoEUQJVJDGTyTafmahPUUZYraBNYp9WMJMXTJbnVPC3XH2i5Hidydum1ExLHrES"
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
