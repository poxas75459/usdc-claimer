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
    "tKAcfav17HNge9bHy4pCMyoeLci6x2MnPevskATs8vfagYjUipthJgTRAMk79Cn6hgTNberAvo8eSeo2SpCVqQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31sKYy2s65xJs8jMQvZq9gS5iqFZy7sEXfBZgfU4YSnqhxzedr3Yzd9frViDMNuYbmS3qy9AUtP1MaS4jF7mdu72",
  "key1": "2CQ3L6JzkbXk4e97CeuNwbiTH9vWop3PH2hW3GY76xq6HoxCpzj3NABGoABqzPA7FDim7WiVUza4kort3sC9vpe3",
  "key2": "5yLQ1boGoRaQZ43b2MM1h2YfYZ9hGifBv7FKBZfMqhXsGC3nfyxxPESFonSGaZ4dUGuqf1gZwQCg68euCAR4VTC5",
  "key3": "2esYtn4J8SRnXo8MS9ZsnCGSvcbEqsYVPfHHdnWC9PvnFtVkEa8S86C1yUM4U1DoE87Kun3RxvPDNasawrV6QUTt",
  "key4": "2XykVmtrvQG73SXZuQNhGjtNnhwEbUeKWwqZekoUKmkYq2FusPg9Cc6E81n5LCTrfnkA31CJhTzSRUtg66GVgjWB",
  "key5": "5ugevX5AepLWroBC1LNmoUXkCLPhSvLyhP8BGQA9UCC6pCvFBywLFX2ja1bUbJdGecez3hN7ABPCzkVjzjpM6S99",
  "key6": "3g9Ndyq1DVVGf1VkQGaeW7Yu4gq8EuaNqcUtqvir6Sqes7tRfQ82h7jGQYG95chS6VHrNxnAoeW8Ydi4Gd4xWXLh",
  "key7": "4CXHKGwn6tWCaKC6Pv9pYZgeTeaqaocAytBdXHzALWsteVAeN5AK9iA2M3gpQbXJj6eL1YYkndin6zvSo5pjzkuA",
  "key8": "4PxmVGu1byWU5uF9yDuSaK6xZuGmapY8Uq9PZeBaH4Jajf1NtvcrmfRg1dgV4LYfaGX7ZEQrHeDFXKWhZFRN49ck",
  "key9": "2gNTo5ARBWTZzhVwSzC5XMnJKtNsvnKV7GKtoYEHQ8TUCVyLWqyufayLT8meuVw2MUANXrTYNbk4oj3Xf1mgK2G2",
  "key10": "4J93JzDdSw3mKkcwrsqM8Thug8g1iv5MuByD6cAQEpTuCPZgwdbvVu6vXCodMWwCpQmr3fzjUekiQVQLodWEWq3M",
  "key11": "5ZY8rGV93fAyhRMWrLa93kL2vnsC7xfAqxUrf5wCxSxMMiZgFLaCGDnAEHKniTcCy88jqKveV1ghyNhii2YgoQmN",
  "key12": "63GxeW4MTPYjtHMwPWK8eT98CgMABvwukF2HK2mGwfJDvDt2z6CXuj85M7i5TgFToEWQDw8eQPkvpuwrYyEMuQXZ",
  "key13": "4PYPcTmRDL7Z9rs2f4Jn9PDpcoNDA8neESndg7B1ZeyNcEQFdafoHzGPmkyfSBDf7vp6nYnVrokBsN8TLTNukA4j",
  "key14": "ehK1UzRctuok6Gz4xEWQCKpmWCmoiEBydw54zqSPSjgCW3UwHtFcYEHbj9n9m4vC4xR7Y3BoQe7gfZYxTyif5tW",
  "key15": "5QFNZRTYkUzowPPKc9iySifVyLDQknsezgmbQKYkQppvL4D8LMX1FCx3JcWXynXibHawmP2Js4Udpz6LNNUgzBXx",
  "key16": "5Rza5UWvvJ2rM3LtRT71ENCv1BfDpF1DnKRUTxb3Gx59uezmWkjtPS5eMYP7GKPikWVaCs54zWGHMW9fwXpTYcde",
  "key17": "5mXRKi9moJbS5KursXSiWfD4Mnrz8UcJmh3sL4fS4HDaJW1SQeJGpSrv2dmCZDGtLKPaCxmCCXnsyheMvZG1g7Xj",
  "key18": "maZL2ngpwmMNihQ7yPyry2eCGktA6KWr5wLXLD6e2Mx3YxKxSwb5Ln8i7siEtRb1cz46DMUzcK5TDqm6nRKGYMg",
  "key19": "4raq8qN6hURXnUkHpjrTEvg5iboM8YUxoVtTERRu4eVGc4oW6jBC7uZjhELY6Ba62YLLv5oVBqDJgr4Go1mgm48h",
  "key20": "2firJBeNqo14XBJVoDys3GkAEDeQXzkW6nsGbJ7XpLvbfeMoCfWtfA3GiyofrhFFj2GBfZFUNQssEefuv36cn7FE",
  "key21": "3mKZNsr598SRhtyrcM5NT78XmarDHUjZBSGpUGArGxjL3vCUc6txTUaqy5QXuHmLC5EBGdmtAn36nRNbyQjdVfc7",
  "key22": "45PQAA6yabdUkcLL27zXKmsY3L4Gdp5Hu5AbQheHxPzBT2iKrVbUznyiqontkFxxHhHxGJsvApsynSx3Wkn8ZLPL",
  "key23": "35bDGLkNFZfQb9t1EWL9Tp1v1uAkEoC8DbwM1RnH4hC9xtLMvXDxLN9GYnLJGaGobKF9wt94fWDypx4xehK2M6gR",
  "key24": "3GumZwStmNhx2ng4MxixdTnXkVq5hqb8Rft6zf9ry4UtnW7qs4HHQLgN1TnoZv9d91H3syg2HU4D4YXpYWfeBMtq",
  "key25": "5unPxrgBsuWxbUJzXJCkpQS2LtjTowGgB5mgs6ZBjsUWf7euD2CwNwXK4tjgNYUAhkiWGeZcQa54Z83EREvhoeP1",
  "key26": "67okB6PqyiB5jiFSDcADUeoNtqzdSD4iDR9VWo6nqqEbkvz6zjhuC7mUTCE84A917mKjRtLpnxMg1REsHemk1v6q",
  "key27": "2CSWWdLzCBRDsEGZtW7GaA4yP9D4kA3sJmYVPXrRTtZApEYfaHr5bxoKi85eEfiHFuq1crxJGNmeQk83k7RNrhEZ",
  "key28": "f3aUyQK7tQB2LaBA6r71DrNVCdTFXK8WibPF5wCXYPpiF1Y11XdFSqXZAt1jX5zWtgeqX6vMruD65NyCWXWAWv1",
  "key29": "31XVnkaceY4sZhTecFAGH3qkBNHSZhpzbRHBFW2YZcB43EGzEdmFkYCL5dC3Go9Sx2CjLXFUktZTYsyvwZqmQeib",
  "key30": "2XN1LRhEzC12r1SiueHbHeu8EGrsSFusdMPhtrvgVyuHmDWQaE9EMMrxkVkp7jpsczUtockenb9iRnWWJc8fgSyc",
  "key31": "3JgZwcDp45CJjivzRiv54hQsk1hoVv8FoBbNzMcwGYUoeqPLmmeLHA6qgiz2ZaoQs8oqs5rBWUb3E8XixK5wy1cC"
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
