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
    "2piE3SYtKHhcC6JP6syd1WqNtZdneGsaGzfDibhVaZ1g5p78KMqSRLBiur1DHvsruJu69VzLy7X7jkdv8Q76WFFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5zAoZtA8utHKX8dHvBJSsJB1zsQuSWgKEVjfXABFG7mpRaQg8r1Ksdm7Q388x4pZ8BCFKCUGsFdFq9wzdWrB9A",
  "key1": "2J1PTdC8KS7gjXCeU5Auv59exj6gV3tDxHsTUpKL1uLSxRyt4VrGj9244YmCFgcaBmqZYvQbYCNaCWqFCxKVC3Qp",
  "key2": "4tcEwmvngufKpxj6kudh1eUqujxtLwBaPameaHXBXUbG9EQEeeDmJwEc6CH8YA95yApsR5xkkJJmtUmuPcUhqAzy",
  "key3": "3ATMb18EY4VPwxMyfYiAd54xrtN2Veus5ZStZbTfycnvM6f6vBo7AEvUJj7ozimiVWxZMcgdpCLFEKDeU1GSpk5c",
  "key4": "5amxzTnEoS3V8bgZX2xngheQpf1qTDKPuvWYMtZwwW46Ts6CDgNKj2Fdh6FKNshDcxpHGkQD6FXfG3fpLkPDzLLX",
  "key5": "42CcFhzWvSvr7AHo6uJPwysVDMZZ559hJume5a3F4QZ2CBBaD9JTPXdmZfcpzLmXtu4eTNMasoY4Ap8PdGxt4D2i",
  "key6": "3Gh55mUh6gxysUqnxmbpvkrritPvunZvjoEsqNrP4gkDymEix99YDNxdkTsL51MXtZxULyqYrneRTEtw4CdUbZZq",
  "key7": "5CQd4o88bseRD1x3LfVk961jXLdDKPXk1d3r2GAZN5GC66inWpi5XCXAUBu3M56xwqfgxq3hcuj6DWhQcMtoYHeL",
  "key8": "HLrUCrXzpwtVLpYh9q3SGjCQygiDuu7Zeak5sC7RtPSpuDF4F74qVUhHk41bv5iFe1ZwPHkxmwPrVL1zi8cDP9B",
  "key9": "3bjxZ2muca42MXNP5LVrnd5RFTonovA5WBaV2JmXU3PNZiwxhRz3vDuQ88Zwn9u9v4zx9NKJ7cT2PNC4chyhdXE6",
  "key10": "5Z2HaBDcD2kPe3UQMcKCFNPQivPJBMsM7R1DzsJz4Q58qA9o86FcANxmJA4mXuwEJichfzodSqoMAfFZzCHQrmir",
  "key11": "36eqkqvmjxw8eokszHXnirsfxKNMpkCMhCGeudnSMSrp9usf26vgH1XqmRhhFNqbV4WcgzhZESLticott8YTZm9p",
  "key12": "2rgeRZbKjvQGEjAiayjPHy3YAYf3atK9WgghtZXyyUkPeg6PTVS54inR1LbFVTghZhWcnx8Vd5rb8c7XXeSeAb4d",
  "key13": "2aGSMfsCuCekcHrvjrXXELPTXh4sDMpEzskTP6Si48A13wGutQv4BRNhstg3uSxyauwHk7LUjJSSsCZaqUkKQpKg",
  "key14": "35Vf3qFU45bcZrrww4W2XZUJkHVV9odr8kH7yzB6YTdQaC34awtibnX1McQsoaj5SJ4ffjrCnuN97t2jPDAthQ3z",
  "key15": "4GupFUPfUEt7X3cyRfU8THomemiafJt55Je7NEJhP8cbZbFfaLS2nMhA4r2xf3xBPCDYzZjamv3s82HP2KtbTwgj",
  "key16": "56BcCRgR4zqvYTpTC3H48F2AGPsFaTaXxA36kpwGkrdJUmGCtPWyFQM5HZC29GxRPZHcdrU3MwDe38cX3PB7iPNY",
  "key17": "45qy7PEKdWmeBrGEa9v51ofxE4r48RfGg3o8T7oidV88joVpNrE1d2esZJW9PQAiHdiTk6RPdWrERVK7VDw3KVZi",
  "key18": "3uptC5bgubgKAL9GocU1bfeN6BSdLpUAvU3zofLkWfj5iXyaEb7r1kbyNjgbgDV6DS7vReifX1dTiNsLnbb4VmKd",
  "key19": "vWQZ152vY5wcDYhipur3qSVXKEPZ2DzK4EQ52YTNpkhqos1x3vwHzxHU2fKH5ALSc958jbSYuP652VQMAWo5Z3m",
  "key20": "43Kwf7vBhaoPACAZajmfNasujGHBgCjSSo5jbRdqMh37Y7jF8dCi7xTHDr8nPAVEYS8R2oZne3Am7mpzQ8icYwmo",
  "key21": "57tc54uhzoB5dFsMdNjYcJXPQBBHvy7m3HAPQFQfDRVVtfGgXNxYZa4byj4cMd16iLLUBtbhtnmqXzXHN6f8UqH6",
  "key22": "5ChjhvtP1ocfvV8MFGWKs7QbZpRqLNuyc63k8A4X1gLDCWwJU2UFwSE8crfFGLG8gigHQVWP2ow8o5r5TXHEcdEo",
  "key23": "naNVXfBo1pDHyY3WWorYCF3mUEpVGVV7tL8hcAxptvPc97SD7p3WtgfUXV1zay8QTSJMG2MT76ueJ9f2wbXTPh9",
  "key24": "zgJCRJwn2RAScTkjqdUXnp4JWcN8oqSAVf6GWQHbRbDUcHMZGSG15KXJmmrLE98qgK12FRH7Tb98YNcZCW9khrc",
  "key25": "5XF5z8Xqa2YrxXaehzX3xMkNaiybDeY6gN7QqAGZ6nnu98hah32nycipLJy4nbBVSiVeWYUEMyW3pDbQBcW9LS4A",
  "key26": "5JmzUMpRzkExAUQ5yoV3mRuQUWqaJsyoiU1Bf7px9WEB3hJUxRsJArr9zGNJEW3SCyGqhb28fanJpXWARWd8pXDD",
  "key27": "2Sq8HQFKdvd9GQiRqfbvnfChQ4YLVpLbFDnJfwp1ZVdh8pYTwGs8D6TPYArr1M6QveCs7CMMAbRKocAuZcjpvUK3",
  "key28": "44NfNJ9wmrv7fWatcsquCqiDbsjv7Gq22NxiwpbyigTSfscTaabL8onGrVDCvWJcfDwmGJdkNv74SDkmkiv3Bpy7",
  "key29": "4fWWDMV5zBiFXFoMQsDUvn28hEU4Gxai6EGgdamez3L2FBT35wBRzCEAv11eGTUtqRFPuidLVgMQWaUsmnaxbB4A",
  "key30": "4EBBY77mcVXgamsLHwYKv7D7PoJU1ZBhzAP5kiCUGn7ZoDg6gTZdAG1U5QwG5FYamFjxTvLP8nCYM8nHwMPU2ScG",
  "key31": "5hi9ydTskj9vqQB64c7Jbsqp9hYDjQbbMN2PedYuuisfsVvccdV998qX7Y3ZLWAFojUG296doxZcp5yjB8sAKsWo",
  "key32": "37PXwFkhDnohLzEpsNgAwp1RfNmE4DWR9M5SrFbUDmfVrCwrYKkza1me6QBdLskKh3CHdJNLdJu9pcGtbXRsCVjd",
  "key33": "55qL1UQqFC4xaJjs3pqJDSbNJP6FCUHLwqHyFzWaLBgA6jFzTiyynFBLS4cH3KxkNWfqqxLSeF6JeZv2pffwzwE7",
  "key34": "2xsvq8CrjzWb1ppmXKa8VesoqD7CedvyvCmuPBWw9DFijiJiyXB5ExNMPMYkzBjGfvRwDpVMoDoKHkXbuUpAQKo",
  "key35": "5dvP3bQ7YDAGvBbXY8Qudma7LC4AaU2jMfotZ1ZkpFQsiWXKH533ujAWjJUiH73tEAu2jPf5LaTiKv69YnRqHbND",
  "key36": "XNrzvi1SLjTCBbZWyVHkqghaFoiHNZWfMBGErrDih3Rb48rK5KyvN2u6r61YWpHSPp8CFDLwini32VAoT64iz1C",
  "key37": "3bvoVeqEVoYusyHDKWZ3KdVQYki5swMocX5eQFJabK1g6cWbFaYSPdRJL2izg6f5ehesZWm9EcUTg1u9RRBy6b8A",
  "key38": "PUZzaFHrUDuYRN2EXCTwPerYaZ88xUBNr9qQgaMpUdaWVBS1xT7TzdvGwWoFvp1w5Qea8ZKFtApGN9AsiaRyhD3",
  "key39": "Dy3NMVKJd77fxoRJUD5ngVf9CgVEQ3spTEtG74DYXCkgaFpDb6qqHYsjJtkVnisZAhvVNn1iDuNLBoww2tpDWG1",
  "key40": "35EeacCg8LH8DubtBG52w6MZnjMgNVCtjT39G4928Y9n5rkSsUcXyu61m8yTPXWxSmVsSs7HwPrZLPFsoGCePz8W",
  "key41": "3LccpxLBDL8BoThdR7TbzY5z9Msc1z4tb9pyT31oxnkporLraQPcHqz9X6nMyAFhZwPKkVM4haurSL8o6h9at7gU",
  "key42": "3aeHmhJgfm7ubhbwV6owAsstFgc4CtMfVLcttV2VHXoahZoRd9unSuVZBZjX39yN4qyC2t8JLNfotcYAACMCNifq",
  "key43": "4A4NYtR3SS8KGSePKyQgJwGPRH7cbLzJNnp9JLwBxMcFjkaYwUarZ8KstqVeYn3j2UYeSnE1pMpwggnj7Hr4TK9j",
  "key44": "2a3c8rmqTZvVXiXwd7QsLMgTjrYsansYrJDBqoSun7RkGD14apurNgBrAWhE2pvtdMz5reWwYNLEMmrK5sfXrhXS",
  "key45": "Wk1BYDyvLejzmknvoC6xyyDBQm7EyRdKtX8dVTmTZX2KBgamC65s3WHaRhjebukBiM9obWcQY1pVPe7RL7EtrvZ",
  "key46": "3WjGYkxn3z2wxtxsRuN4x4T7zxjr5UxijbvWfeBgshyc2zFvZfJ7zcmwzGVkymTbkaMPPpc2o4MXcBYa5AA3VFvr",
  "key47": "2dB56yW8F6eXiSiQsPiGgWvHcbii9xcUG1Rb2D3HWineJCLhE9tsYU7h9nquusNEuRbYPTuWB6Z4WqFdo2qgRLmT",
  "key48": "3LMEq9tZDU91Zuk1eHhtaQ3ngUBYbSREFfvXL5mcT8daHBmYx1wmB1F67fZRxeU3yZi1zoHpWNzbvVna3XPhQ6ha",
  "key49": "5MtfFfAEQtEoUduUtKHQ4MU1jTgk1k6yB8BHHR3JtTVUYgWWk7mSgY9iNGJPuwbsuexDUBJmYacRruhfcuLgXevn"
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
