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
    "4U29LVwtxyiaNiaYCs9K82SkhhEJqxWz6xxjHcQDh8JPqaqtFXt6vLWNvnT6CgMRABt2gfJJ78NPxaM2PpQcR8gv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDPBaMpjYHE1A6zwjSJ8RtgnM8rcVyK7EvdKzNBhVUpfZMFEsk7AZEw4ECcwQFujRfgkQAwCYJHUsmSv8WGYq2m",
  "key1": "598AuNH5DpnmYpV8jRrHExhzLotCGU9VuAUUuc7UmniRgsy5BJWqARz3iccBtrVe3cSsi1qAjjsSvesWoBwfM75v",
  "key2": "56zEaczoHz1EToGkiMxYaVdpoLn74hSmM8HWEQF2L6K6vjaZHf7RwxQS5ULtNsWwAnwgkr2sgfU5xAh4SEKfY7jP",
  "key3": "4HsUKDvazoxSUybJqngbRM2mVV8PvYCrq4JRbEzaQrThX9eMqsuZg2DJw6WCZ2UM2JL9f7LtNFsdRLSr1bHLf5Dc",
  "key4": "4jbbEE5iLqnKtY1ws8kasDm8x2qSFLPnidJMWBvCaW7tZY1VVk1euQRp5tWi6C7X9wjMaDjzJ7rZ5eKnadFcwjiw",
  "key5": "5GAbjZWEpozWzaKvUubfDxjhzcdadjDcTmSkp2dq1hYbAcLzJBFR18Cyv8xiqmy2KuMpw4KPkNbe1iJRVsWPxios",
  "key6": "2zneqwTbnwhdMi8ML6qKR7kzp6xPhhdXDFLjWKVZdAsNHC4WeMdkYTYjkD16dRDhXWaPFVQ6baC5GsJGGznp9CUF",
  "key7": "5k92PQEnJZwXbgxfj5qzbC6mfXwsJznBL3SpfsRJ39BU5MdoueoLj7U5mjWE2L4N2gqqAWCL2ivtyDV9D8qQSuWr",
  "key8": "2Y3NMXrQTzSqUedggD9hxCUBHhbXfacJYbd5QL3riDWgjeqjXAWThzFtDY2q57cUGMYtYkipjZZPi7FZL9VR7yXy",
  "key9": "aYC3TLJXKXh2wARiAoW4b9jLjQatJpr8z8QAiZyd6uYgZWrwujTKdARGSj2HiVRV1aJPvDVc7v4uM6NBnYtKqSb",
  "key10": "5evHPx72EvCLZTPTJcQ43Sh47VQttfgibXhnmABpYbJBX1tTxAqRmxt9VMrUq2WtDRTx44biLQ5YFdQgo5fj2p85",
  "key11": "2dM2YmU2ieCc8nRKSK7bjc1cpWMCVqnZpxAEbVTRuG7eKenF5e2sk9G5AZJQT5cpPxkY7wGtPjEYjYe7at5HfnCm",
  "key12": "M2gaLLKxYq2wahPoprThqAMkWMi4fsQEkoW2AkCkYTc5U9Tq6B4ayQ7f8uzxKu8ri3PYb2EQivw6RaGxZH4fbQ1",
  "key13": "k9ivxPZFrPDkJRfXU2TR4JtnVqmesrzQRUx9tiwF5Uh4eYq5a4V6NBpPEgqzgnFUYPJMqYmZEZ6pQFP1Nvkm712",
  "key14": "2UjKVcjK6fcyDaN2tcK2LQNyYMdH57KCDYqTSmn3HCdMZJFXmHdZ1urEcYcgdFHGk2BDAxAiiPN1XsQ91skAdehk",
  "key15": "4X8QniRPdE9mMFRKGfCLrQbvKinz3SsupaEBSsAUpQ95JV3VvFWjqHXDgyYhfr7kaNcvr5TngmWyhRRLgsw9NT27",
  "key16": "29RGipHLoUUoRXazHTiuJUGvdJ2278yp9cFcP1Vj2QkiLtpivXYx9oNF8R9ShuHUoqD6EXBi1Mfffg1gPvaCdHjX",
  "key17": "r9wWB78joJniEdpYvnWek5VinvChiyD2aCzazm21mKWDMaTXDgHSfrkRoW9BQD6Bx6vAvz1rvpL5N6NRdwcvBpK",
  "key18": "3v564Q9qsX6mwxS37tPDyBtXR4R6skYWDnnU6fmRDSF6Lefv5mWZC4NkCkbCBGeDpEmR1uuTLGPaW2w1AzgGWrjE",
  "key19": "S4LjS4KhXGj5efZ1azn3ZJFq8W5vWKSGJ71NExnVq8XvN1m9T2YV5uZjKhAwJgXhhbKsKQonZSeYmhcvShx7BaW",
  "key20": "3uXU26SB8GSBaL7kkFc8pgkkNMPffHPpj7xv5NggPndkfWkrPZf1T9Tuiof2odN3JUXajLwDpv3qnDkk4xjP9Lwh",
  "key21": "N6SeMRWwnXshdr9RQVfhy3KYt8UsBnbJD68CLi9PLBdXAPHricebv1U1FodWsdJYytARp9fETcSuYqtKsNBUrXs",
  "key22": "4qeHxhUMp2gU99M62pHxdUKmBB9nxU16GQLhcqkBp3chLj7jWb91YX6cvp17Lpy55bbWYjpuk6eWUotXBVFZTiL4",
  "key23": "37kJwx11u7u7NZA32NRSwqZzkXkE3MQLX6ncZd7BoSxBf69Movo55QoQwJvE26CHfh5tQampXxWx8sfjufcisk98",
  "key24": "2aXashFWwE46EeWgn5XsLP5B89LBNc9Jw8k1VBSPUPWBpNn5DrdNZDb734yEEgmHZudpPyq48FDvM1eAYUSC7HhJ",
  "key25": "2WGjZANgJsgdPWZ9GxvTyEeQrozfNqJovt3CToXPwrCPn4oeGJYBgpMSCydpZ1qZLYXQ5cqi1Wb5CuXqw2BNrXzL",
  "key26": "8haRBc2DafYYu6TGTB6H8vccxxaxvRxWwCEzePkaugkfbExRm5A7Bohi6gcNJYQkWWSMx6Y7esR3uf1r1qpArhf",
  "key27": "29y9diFUHGmSZy5CerV7sLzUsnx5kRc5ryoEuP1b4iTR2DxKZsqZts1M47fcdnrXS255hevxYMeT1VTZUztmq1uP",
  "key28": "34zP8XZ4PWrjAgz27bz9EqzHs4itexeDsitLKNCs4WfS4CERpbsaXp8nmsfe4b4HKfCYSAuD3poRzghR5PLcsHXU",
  "key29": "65LSLZsvF5bU98JuPvozscL63N3BmgRaMCuz3rgMnVEKnmxt9eGDrLAGnVzHWmyTdw1sSVn2vajq7PXj8mYUuHZU",
  "key30": "WGUJsEtTNWMHsUByqqLYcqpd7UdVQzA5hGHygFvraNLw6GfWzEouTara18mCMagv3R2JQGkmyMxFSRgUKbWoWZK",
  "key31": "2ybUpSdnNgXEC3by1ib2vz7w2qdqbxxY9sNenY1ETCRdQma6knybK4Zwdp5qAS5S6d5fhtrvgSGSiuzCMboMK7FF",
  "key32": "54snaEo3Bn2KfHy8DhRET3mCdGEPPydcnTosTpJJAmeF7FhJifnomFhHTNqbbAzvQSjtJNxs52qgXzLuHxyGdbXv",
  "key33": "4gLqdYjsiscpLnrhgwdtk1rR9w2DPmsyz65K13kLucmj2HvY9aj1RmiDicuhKghgkNiv4qXNyaS8orH9FpZnmvYy",
  "key34": "2corbyrDUC1aqMhfWys94u3oSqchghAuDvkcQHddDYseES7Yo1WqhpPQR91VEtk45wtdzuc7hK3WEBapeQWdi7Aw",
  "key35": "66NqesgFoFXiyZ82SqDZUz6g8XRTw6aRH5cqpAF93oXxXPbveDPbLZ7YuKYwSPwpC2XZykCRE8o4w5u8UXGPQcmp",
  "key36": "5rfwy2dvNzrStn4tsmgLAw5EK6Q727dP5qMQ8m59M2XAms4zuM2riTAHvE6nBtU5Vj6BrWt4SQ54nDVEAptzduz3",
  "key37": "4B3XgsNRFrx6FpxPuUFQ4KcxaVtdDGLVNYkM7Sozkv1nH8HVFu4eeuxXr2brLRkr4NyRhBkxMsQ396YAMVFcXgwB",
  "key38": "3GZ3eDNaWRsF7kDtqbKoV21DAsTDZtFmwcM93wcVRA5Kypqmvt5yZMzFLmTpPFeck9e3gL6tRcz5hKw9UvVmZkod",
  "key39": "3vYQFVd64cr5QH5qzXekRMXB55rfnfRLENXov8dLHiAfUu8yveLXgiduBkn9E5tSkrvCaH7UeokPaMMk31J55cUr",
  "key40": "prVDarkkovYZYWBN3s8WtiMZA9crXGt4ohLg2PnGr3ZVGYdHqesexBic6xkM9Q5aNLwJN61fB9uAbir6JrHtb2P",
  "key41": "3xiFyrw4JVsVMThfsqUoHL8MtHN5ooZBdxgy6tf3m8p7hHxwhvvhLwVRwL2DvkFaNbCLLkqmZ9v6knHHKEBCPRV8",
  "key42": "5aKD2AYWVAYuyRKGicQ39w7z7zVzFfYrpmYf9w3jsY7oq6RAQyvd7H5EfN7QuzbRwawhTBHpuHE2V8c9ArXbj79C",
  "key43": "5vBV85ZN2j6qBoASMpvYNEmPu58rBhCYLo5RX7Ex15gQrMd4YvGS59iprUvtNvymi2voMbeqiK5gcaRjQH7h5UE3",
  "key44": "32LacdtFNZ38Zake2augP4f7ts1wX9thvVJoCpQ5bvoeEsTZXfqbBJ8AZscyMwoGNjzuA6dnKqisAaWSEYM7hzUx"
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
