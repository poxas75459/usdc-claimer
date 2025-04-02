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
    "62oibceQLP33LJRVodo5UAp9nNy9Gr2Ve4sJe8wjZtq6F8n97X9TtABALpGUCamQEibXypGXfVsmYiNUc2ST9zut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bA7WwamDUHM2mDLLJkNsfgYMFkgvnLj5NgBnRdck8mytDThZagfR4dBrz7H5UmEHkZDkq3gRJGuL3rKJ56vqxWx",
  "key1": "4wFNX5thPVzHNQ8eWrqVdP7dvnbDcVTSvhH1zUWmT1chwvvt9yGjGZgjxgSskK44Xs7axnWqS8Y8YvHHSmVtWBSH",
  "key2": "5PSbT3yembnxPknzW3h4nEoyL4LcE9kvb9r7y7TDvGboMuRorsWsgzkqmamC8PQ9Hk7qoE9THEF2LEGDtxfgErGf",
  "key3": "66onj89MVtXt5tKNxYmhLxvyD47NZ6MWs4tZY5MXpHTWKJowaQS4iFGbovJiPgnVSQF5puHp2zUoNMypdoteAYR4",
  "key4": "2qXTKr2KSaBzgmijGEyEcMhhRb3XrjwrHJYBgpa2NnmUYDfmDzdDTqv3gpkN3w1fKR3SojGfP8mz7bmbWtSrGnfB",
  "key5": "4LcCk8z9HoxvXxyWvnFCGa53rY4zUbzDqJAmxHtrQvt8nwhWwH29fXrZncRMJL4eVuGNjC9m9eWhDHAsgYZvErwJ",
  "key6": "4AUNkUq234PV5gaGKtFCDqwBYENMdNo68UsGgjLFxrDfMZSgZe3yPsCEzNDsFjv9MtDHEWj3r6AhidaA3TxFjNMV",
  "key7": "3RRUVJZ3gBNXdx9gNgQGfF1viUeVxbCDM4S6kE33Hmbj6vsypzQ7RDnQX4pibRmN1NLWt9ajL8jUYp9uxoyEcsNa",
  "key8": "2bqieJduCxdW64vxT2BKfb9BpKwEesgjiMQNmd3UoWRdk3C6CN2wE8wXvPybop5XSKHEZu4Wr7ZKCZ5p7MwmDs2r",
  "key9": "57cPxLSgeMzpJCKBvWtKU4HwNV916mzr1BewtwQr3gzWtm5DxQNonvyLd7cKjvfug9fuqbZUiRc7jVniQjwmfTvS",
  "key10": "67Mdzp8rR8u9H8FqBtUfCb2rrR3z5mdRSCsahEaTJ59HvkYtiU16rDUnTEvXGirUgRxZ1zcxGHegqc9UZgUphZde",
  "key11": "3RRQ11AzsQEimd2midPehC2JF19ZekGdVPZm9kehvDqhrJ9w2hvFpZdx571amGdD8itw2329t6PFZ3QWXg6tV1TE",
  "key12": "5stZa6AAqFJctGD6BM7nbehKUh3DWjuyHMDv9x8yGDzjvTRvkgatGP4p9VJnv6ttp5rBn9xpTu51JGoAYx1RVUFs",
  "key13": "5R5zxNGcHxULgsEEN3LNFAePsc2C258WytnCmvbMKLLHFRsYp1QHnaYP2tmBBQStyZMajDhgthYkonrzt7huWP4s",
  "key14": "4rL2K1D7kmktcQZYHUFhDATFTC3xALjRtSX8EU3VL4q5k7CeGy8Gg65WKjnbhSRABPbh58AqABwZ9R7M5c1E1qi5",
  "key15": "2zF7R9f9x2AawJ6U9SwJeyx9yD4tS2j6vT9xoe3DKZy9bM284digN47erExFe1qYS7cVmjW2DpobiMwaw9qMjCNw",
  "key16": "2XYN49N9QNd1dPCF3AfPACYHq3E4b5t5r3bXVwX2TWWqUhJKFXNs6Fb9jEcsnWMVnagDChFg1BNZMx4xCmVyHKsV",
  "key17": "W9rLF2xUQTaLWYn6n2gY9JbzxjwewKLQMbxgQLLX4eTmtAqYjp7wxV6YnWakpB9Xdi1xhDnpw1rCtBK9kBHjGGm",
  "key18": "2Hvgj3iLKzTnkr1y4SWdtZYnpkrGMUUrCsRt9ovfENrm3z1ehjTFEnWZniazT42WkS5ad6pej2P9JE96AYRgFPS8",
  "key19": "36knzfsoUvXao1YnpT5kEwKdPxyVu6ysv5Tgqah9NE1XM9syaWjHjpsoNCTVT45ZL7ojLxnZFWZNtTat7bqiSJyC",
  "key20": "naGb8WL9ZyFNb9TRd64tGMrFHiHpGDHMmn71ubwfq4yPZLcsqpBYxMdw68pmcAS7tRsnWZr9RnieoG9UFZDpW3z",
  "key21": "5YDH8SScBjsYJuorKKFX91CxnqLqNFqvkwaN5eqVwNoiHpo6ymdUJuaKFiEMjHHPLgxg556UEXcZDRCzsRhjsBRr",
  "key22": "2oTEwmdh4P6biLp1YTtQrZJiozQQqbEWvfVxTj2DXA8ikH9ofxfv7Wc8oZZAezitns5BBXejNgpTKuU2wpjAbZee",
  "key23": "4s8p5xHMB6orR7n25bzZaR3fCBf1mVoZ47GvmUsPrTF4YM7n2Sp4ysicM5vCHp1jEoFqLF22bBaimCzkCSbAcAiQ",
  "key24": "28rT3mS8fFVjzcWREjdkrpzTN1hMHMZ2CZop2QEaFzFobBUoLQqZUKa1zSAdr8dGniCxB4sPqqDQg8veYGUUaCti",
  "key25": "2g3Q2Wc3FanxhifrtaxwKph7pDp1m71fmPukzHqWC3sY9aoA6Dvn8SFagPhDMdd4oprP8uMwrh61fAhrYtReyo5E",
  "key26": "4Y8WBD7cq7jayaDDH8pAnuxefxk4Zmhuwg5nUXEjVPZwQgyRp4Xoo3ViZAqwsTQS3YbfgVxLyHFTaap2qGd4MvD1",
  "key27": "4fdxNUq7hUGhLD7pL6hBd6AwabJUQ3Lb6s5VCtsmYCky9ixxXaravnqipcrLqEWf1SivCkaATKs1wWzav3hXTx3A",
  "key28": "5y1PsCeHPAmssCFCNAJ1BnYBP18caX4bpUvVCdU3R9rgqdNnvgxa4EqT8T3PQecC9ZSWCt8vw6tpTWkQrJiMu26c",
  "key29": "2yYsYShEyRgbfbuPRheVrPKaeC1c77s9awDrYvofdobZzPWQkydLfpux7gA2NToJ2Q7hogjHghkETBTmbL8NCcH9",
  "key30": "LNihyj6uJmU9kjWP3KFYvYsgqs8pUTdiT4uDfWzhDTuypxdHZAHW4Ecezk7CsT45xCiAR2HcAojkbn6zo37Zsom",
  "key31": "5wdPwuGfEbHCvYe1DoicRS1bkKtbEsKoLf4F25VRHXhdig63yeExufMPMqBdZFxkMpBok3sjizzgw3S5yU6NZDoc",
  "key32": "4x3NgSRN4TS1CFNpkcm4bqnsMBavEXBrZpePkeaRPixnU8VmJSccx9HEtxdGXbtjkEEcuht3onmGYjiw9CxAYWYE",
  "key33": "5bNsmyjeuPiZThv24bJrMkKdKv7Q2MqyaokDtVCNkRvGEAmD7j5NECBpYBeNi3WGVJhDZCLLEy2iPLza9o3guVWN",
  "key34": "5wUShgwbmhFdAP3971bFdiYQWSZgBCXxtgduUuDM1HuZqrBb9JrnvpZ7Xaxh7EzR9fYa6LCizYafTjsx6vYeQhPE",
  "key35": "dKUgKo86Rt5eGEpsctKbYAzh3HKnRQZ3CgFFSs6jH5d5E6EGxLeuU9iqtas28MQEtmA33uR7i8JLiw8Eg7fG9rZ"
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
