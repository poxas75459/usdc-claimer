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
    "3sWPu1V4miPqy3i8pV982Fe7YR3VTbZtTRJhxPTyjPoXQVrti4uaBUhSRNNuSPV4o4SEJiNH5AzFsvxgcVUHb5KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33FR73oA36QajVcpFeLFrcFuHAkrsA9h5r5CqV4w86hyzvJCBzj7Xw6Y9oYsqf6kB3yKxiwkoMe97uzogoUmn7E5",
  "key1": "5arfyKJFzEdAxWoJsDe8rhJkDBZGfTb8JJfCWLUdHYUdPoLD3xEBFUNFvHYyXD5JqcNYANs1ZZCuMtz3EZTGWvVP",
  "key2": "2wdvdqrHPJpuRN7xQkQu7FMBUtdf8gN8BJMvHNKwh6ktBh1NMZVsRa1q9xK8ZZwkcPZogbCrE84T3Y1ewUHXz5XN",
  "key3": "4Cgf9rC13s3W8M6wvkSHQdPFz1qabCUupdLqr4kGmkXsC5jXMsJFUs4M32VStaBDWpWY6dqgmrckt2raWQscrCKB",
  "key4": "uNwTEZAUCNuz7T4SqHNR5K6saMi6ZfHWgdkcfE5f6EsskzkxaRmquZwSDzb6oxmPZkkWxASPxpSQ4YzfWPraw58",
  "key5": "ZErzvs5kfit5ggoz2WSqnHUsVvKV2CRrgeX1gWpgqnp5gxvkUh8rYN9SrJr4D6cXzbpsBzVCeyHa4xdZScUAsmN",
  "key6": "386C3UJ4bzPrmAoVfJq3nEacQVKq5Jw1k2tqU5LHEGm4H7pZSVxY2REWaPe6BWC8v5xAJTvQTmjj2ppvDavSo6YQ",
  "key7": "3fK3oTJAYCoq18hPquWLxwLwsSaFETQG1Hwx2WxupYX8aNMhww2ZwbkgcbSjg5psLWD7quvpQqbsaMGHzFzYJ2vj",
  "key8": "4j3QVg36BUeXktYgvYFtcPpL6c5pum1spDcfCxV5T3oxthWKhkAFzg8cYFhcEbZzbrzokVdK2Rvef9ZUN7fB1T6j",
  "key9": "3fb5cDxoim8p8MnLaKjDbU8Ze2GKdL7FmYpvisp9xfiJ11p2bAa8RrezVwrq2LGx1AGF8cqgYTdd9UCXcZ4uVMUJ",
  "key10": "2pYND1xRNuN6nMUiAunziSunZzW8dwZbjePREVYwCcksijmhehuvRsz6D6UaPFK6QsKFW9xCRmhecLDJr4LUdwR5",
  "key11": "3YwnEVN39dgwWzzawJMsrkiNUsxA4yVN3KcnvfqUrKWUBhg3aH6jNwxvZDKJWpnWsfGAyAmrZruFp7YKh46aC9b1",
  "key12": "fUtL7AWDcC3aKHzNG2m4mNRstkvQqYV8cdG6HsbZpm24XVUaZnkB9mmNqVxUPPWkV5NA9m7twWEbqW5MTiDLANa",
  "key13": "5iRVQte5pHCvXKRF6vDHg2EQZXHHrDWciFLR7cxNTsWyeVDqa3ujE9qPZ2Kde39rD8Pi5duEkBv67atVcAaQF3vT",
  "key14": "2pKbPbJ89zFV69X7A3qNqfX4pEd4QU3BCzQad3BqhC3kjcmUjQsJyMou59mCnpyJ5dyApg6WnADi7Tu7BpEQXnEd",
  "key15": "iGQUGZfSv41Aus8Bzu1fTNtEX9WbLQfnFFqX8TJ77BjmuDw9AJWaPtSnCyzda75isrKLRrxFciqdBN3BRwNiQuG",
  "key16": "4NcLQX6f3tsBv1kXJV1ZmUWit3TAvSnF9kaWdhcpMMh7Maw4UNCaZ1B8YuKtvVnTtFx8a55cLigaUtbyZiaGncLc",
  "key17": "3cHwjz8XGGTuCmrF74ggNwJQcok86QWM6GzeHRRpzePutVY4ouLnLkCUhySrAzjzYmipLprUwBtzsJUjwqPhLHfu",
  "key18": "43PRCAyCyWr6bEp4fZDPzouTTtL3Yz4ZSiGThkfVynf3VQvyXGYe2bfPWvHcVZFHSeKAgJqmQKsauBywngi466SD",
  "key19": "92GEGphmheQ52RteTZh3SBQRiUPVV4CLa5MqYDx6n26gAgtUs6nhm6DmtVvykaziwSs4xUjJjnaAB2XPSrDnhLF",
  "key20": "5FXuCRodAmATjr54ik83oJMKLALQ8hb1hsw7nm7ZptgU8vZDTPRtRdPFfbHNCptHYUKwpeg2YsG7aKjEJvY32KxP",
  "key21": "54utdfnd41LYb5TJbvXeGnvB5i4se7YSsYFmeyX5BpDgYu1Zo53hAwBm2Y7TpyBUmwtN4Hw8STA99kqava6FuoQP",
  "key22": "4HciHFVqaDzNmGfzcqp7VPJzwLfMEK4zgKtvHChz6yBSLpKA85zWb2pT8BVvLwNT2jBXXwxSsGZ7T3n2fsfNbkV5",
  "key23": "2KxUJDdi9xjH5VTp8PPnhtbHzgBeRhqJjTu9eDVw8Bedd8HQKw7omHh6a493cVVNHiTVrXbmiXKSjof48hkWYjBe",
  "key24": "3Yr4PBxYWGD7X7vtr2HHsd4jEHALA4xvHqPFqNJaqJS4KWvmTjTBtKzpAASgmpJUpqHYUWX9CaSb9oHzwZp5fZid",
  "key25": "5xcHBrSMf3pcgGjuBFkLUg5xkhpRfEUaP2fLS8LGwfQf5PERmNxwet3PTtWkWrR1rFTzyxauQbHBe6SCwfcYDUaL",
  "key26": "3KZFb4npymGPmqfPtdoyEWhBbzERxvpfiGsYiui3J2S4MtWyY1tdfowFrawzsAQK42QVBKEdVqjfsQs9s73JV2vG",
  "key27": "2eCuZATFVqAYgsuWgtBDM7hgCKA6TSt1QCgLVem8Csco5SnqZsBLRVbCZAeMrMFAjbxMex3pqown6FcTMQ6t9kA4",
  "key28": "2zggkZR9XHKtir5Sxcjcu5nnc3aRVdDuKQTce2mfBMmw8cdNEcUBe3WbYTPFCwyZpzSN4XTz6Aufg2yRkN1CChQw",
  "key29": "jncpkSrGLpRvqiTQinB1n6K1cNzPM7BeKHqGCRPvPBx3vJDFDT9YEFssCFSzKXBpKKmMvx739dT8b8C8UNffFQN",
  "key30": "73TWPmJgkFRcoj2s2QAVWbHay6LM7ij1UyHA97vucC95jmtJ4h4kMfgUyaJso4UanF4kPRJZwmeK4PVojAyuzF5",
  "key31": "3mkJ9wVUJhFhXP9iYFgEzqVHM4Xkgb9PcpThaWv9ZUffkkFbZLsfujMjHu33aeXqVJt3JALDiy4ye73Vn69gbGvx",
  "key32": "4CbxxLveQtFYHUYeVv8aC4iVrJQabPAjDYgzi6cisvxX1xPMmv8KbxpyAWgcy6WyZUaMu66ziJbiZGsCbyUBBLBv",
  "key33": "4KCKNHRziLDeprRofLVQjtZA9FL6ujEQiZXLENZhNxNT4nHVrdjfe3V2MnEi52rAs7oz67uvHKCEE91NjzBBdGBm",
  "key34": "4geBPgV8KHRU79hNDZyq3wkT8TyGWrAkkxoPF4wXFGRbXt5Rvj3cLqmWcGUJVieL8rgkwPaz6FZEP5wXnYUhQDAg",
  "key35": "yMHumSBjE7rL9DL1zPttoTvaNnKsPq1Jt4JDYeCXgqfffrgv5WyV8f6RLuUFkvwmbrWpFthmjXddapUtMBiX8BC",
  "key36": "5hzzbJxrcSPxDbH42VW7wdyAn8HDV8sNP1WLP1xjB1EykDMUVtmD1RNgNY38k3VNbrYiE7sW2MkG4QptUZwKWV6m",
  "key37": "38XNBUGBSCnVLLsjCdNC5Pf2izCUuqQ4N1P4A8rdkZmhRmr2GFkdpS6SPmrNUDazcoZChUC5ibFJkkS89MAAPfZh",
  "key38": "STnou7cWKcWfoByDgQEuhuT4qbHcHNBuBcbj3TouHt1AUu2kxNRb27hUBFpJBXMEWtoe63xLCpYjqsqp5D699uB",
  "key39": "5H21HeJc2P9U8vVdwiS9wAUmz9cCPAhF8avmLQJBkCVUiriVVMDWoi7YSwyfUpyqzRYSZReRo9k5qUkzZAxrCfwq",
  "key40": "2Moiqu5BArWzHe3XQ43vcwpXLrSJThyAjrXWYSEwL51gLQNU6DnGwsabS9srFoLnfY9vHgZHeACXPTFnXjTBV61e",
  "key41": "2oJsEuGcDk7rQ5Mvpt8Znn9mj4qREDS5tEskj4pfKjjRerYKzoaG7nPU4A9HPGcaYs8KuQxvdZib7Tm2PqJLLJe1",
  "key42": "3ZX4GafrzfbjprGPaBd4x9QRjkgRyyyF9A9wDVC6csAhTedmVqAFbH7evjUqaaok5MDb5k4w64fpEbJfZ3GGMiDa",
  "key43": "5HqhNDawdKsXSuXFmiTEWQhmszYwLCqtQHz5yNTB8qcrc2Rd3DP7NgU6eu21kDwFB8cVoRMmsoyxQztwMcorBCDY",
  "key44": "42kmEhk5yErLGpFJKCgL9uKqTtw5JzbLSRUG1iQCzyxQZXLfqw8V8Tund1zPFkFaYzEU36VQC36dra2brhbnUbUf",
  "key45": "HM9pSsL2vepFKHudMP6T4YV8ER6AEkRNsYLiNoQhFNjoNPLPbPWoZmsJcEyDXf7Y8yrhK1Bb9XMbFCUL3JDuopM"
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
