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
    "4JA2jTYcPTizz5CTarDcDDYxxjFF97hQjjgWJ9JjcB92qvNp4ZRJn7Kv38rvHhfHTC2fA6ezuqKEzdnr8FofNRff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ckKC8J8P2W8GZVkn33qNg74A6XWepLsReqPCJg6cSVcCaQ8bv6iJz1mPAtHgZNzonVp29JFvphbesvkvx5cCdvW",
  "key1": "4N51U9DB7gxzSP7CnT9oSGFsn1JeDuzpeAnE7EoCMDMgUgmmyT9rmQ2WDZtXvikU4ieZTTUAJXkdqXcEuBFhoehH",
  "key2": "p8VbFybMeYxE1G1UiXKVWZXrpaQFpy6fc5KZ6sL9rzQqi4jp6sPnJzWeBBhyGVtFEzUzchRymMxcoaesT4KYAuu",
  "key3": "5nprBGN9iAMn77fjG9TwN7dTnQffrEACwmZAU5Ej82PMFP86bNMLJgZg7uHC3Fp33HkRUtULSGAcYhwKnqRQxTkP",
  "key4": "2QK5aGhoycwsDQXfKPWkk7ShydZ5sTozdZgj9fkjWbuc6dK9yAponX26qvvgetu5Mt9T16Cv5k8ETWGeHcQd15Nh",
  "key5": "3aKzAgHkimbQhv5qWdwbkBDghu6cMVzNBgxzpieZAiatDNpkEHJAef76k835MBpFYkeLZ75j3BZNj1UzQ16hVAJc",
  "key6": "2URyvWoNL5fgt66GD6erf6FiiqxVRh7oVSDAMv47ZiDaE8AuA96GhokYZkrbs5iVed3pedgTB4zSZVApeDbutF39",
  "key7": "3ggsm3VmNM6VcDFSeshpLTMWso3eccECXcrRj2pqYFU7SnP5HauRxdJCMnoKYsZM1hJVmL1xkJn8mKirae6qKJQP",
  "key8": "2wJx6oT2y9Rn4gsKQq6VcK5bByzxrp32fqpQ6ydMVHBoERWqarN8Qd9146Zmz4waVRbWHpFpbCAK8y9CfTon7CxL",
  "key9": "5MURdVPS3imxWBWUT1v1kXSLzCifq53J5TpXSDG2kSqkgM8b7JCdVUjpsmv5rQGhY5xe4dUzWPkKk2r1o4ffrn1k",
  "key10": "uAXPg6Sk2ab6ETgZt17YaA1DkZ9UGT7eKDtdKb8qe3pZQwjudH5EEifoZrEE9hCDgWGKUG7HS4913KxxT532hfy",
  "key11": "49Spr52WnjvKxKW2xr7EHEMhGLg7t6zeToAjzyM7cGT9QuB9sAhWVrNJZiF6z9JNpAAg4NhvWtzfj9ELsNC8z5Ey",
  "key12": "2RwZqisAfnJw3dhY3CwhFGb2azhy5JuXppt6WTPFXRvMH1A1m1d8roDBGFAZ3srW9iZzSZx8akYBEHZifyaFtYP6",
  "key13": "4KqsFo2VbGrGsZC7ZaPCQJMpUa8DuzN2DoLy6AgLNDwTyaWes4ozfi9tGfGGzsnNx8nPg1NntnfSYtstbTQ8YHY6",
  "key14": "5wP36Nzmz3xdrqAhhHApeS2bXH8WRmnqeUNaMC4Ddke87nBdvXsLBQi9PSq3MB1kB6YJZW3zf6v1EJzDFB8R4HFZ",
  "key15": "21d9D9LqzhPbXLUxyzPS4BphrDxiJRzU5QApDdvA1CPeN5eK2zpoqqqUW9LPzDNxCJcm7gcSWdHHHBQEysoYvL8Y",
  "key16": "31fMeKs8Fu2FAmV67G4wm4xfqp4FYMrk5FwJtn1LMkxtUzVshiEwULhEWqWuk6URGg3ZiuHxPc3Eh8t4gaCj1AUw",
  "key17": "5afMx4qTdp5hGXYwokRD2bX57tsrSetnYoxZgTB8NjTJcWLc7Qon3WgGMwDHssXvEdVgt3oScdJVVHyNda1NMggR",
  "key18": "2fmiVGP5KWhv98opnY3jxTmJG1NBt2bx36r6G7hG7v4enUp1HSs3B6eZBADD4qi4xirUGsFBWhSzpTeAPP2bczVZ",
  "key19": "63Uvpc2rPYKbP3LCKtfZGKJMu6hrWBK6jxVhp7Sc1R4xdh3RubLLwH4c2mB2S3kKwb24LokwQnVjst9vwQG39Uoj",
  "key20": "66Ux8aDiiE7WajrrHsFteqYbsdXXPQTQe8FV86z6rjifjA6SbZ4k4hFUbgEpaG4bMQmDZ8PfyKZD6FbRVZqG9ctC",
  "key21": "5NHG3sdW9bMv3vKrSx5139rZ7bRNfGBHoDa9d7XGz9Gv6YhZAq2F3dzEuBiW6kWGLtNp5RxZKmNzrnJpZWqgMNrJ",
  "key22": "23ZMGieouJ2d1w3St332TrwsjWRTbeZsVdBfJkPtA8hU3xTY2MDfAoSpMLcPTMJHbizAgL6hed6iCfjCSbRgECAa",
  "key23": "259CZwuYick1NQ78uG4uBEvLJzs1bVCr4dCGQDAzfQWEb99cvKVDTC58jKXSaBdHUefbom5E5kDtb6JaJejSdCFW",
  "key24": "5BFSopjZWRVeUaifLnYqoPFMCoUmZfuSBhxN1KgZf9udAy5fsCxaT4AVr8i6HmiAMUEn53sezdGpMv9kdrMBywGb",
  "key25": "s58TDQd146Kad9vNE7htHWh6GxuAGGDchn5F6HxJ2qvMotdPZsakCQ5A1FWyKvaoUqxNdq4jcaMCro4ht6uxXeX",
  "key26": "45HazJUcYr4grhvPTVnYzN6xsF5r4o2dRvaW6rnkncCMUpmGhFyHkyZ3zDHSbtS9ENqYXMFwsRwxtPYHC4Rmmh29",
  "key27": "24V6XtwdJ7GGdRJazcXqHLczhuBD8xFzoCx1NU9CUYDL454f7hMD4WpNJuMC9Bg6DXBuMmYeMMV87KApZpMey6A2",
  "key28": "2hYwa449MPDarrffejfX8X2azanPTX7cffdok8fKFVHLGviWeiZp5ojDwCDqTEHSP8XpeRcyK37nih5xxqCBH1Uv",
  "key29": "2UP2cqU5GJaVtd9abgS1hLGCVJdmzaSTQpEMHnxxFmrKZoT4JHGi4hQmtud2t3wVjXb32PhELz3GZ5vwBaHZUx5z",
  "key30": "5Jog6J7Sb9L4rxDkMZsmDrcG8eZnUpdpDmHHVFD84ZuKpRGbLAaoCxv9MMKZYHWFys35DYBBReUVLnbYHRV4t8SD",
  "key31": "M7EQVpZdU476rgA3Hes7EEhtSZagyJWauMzodjmvbUW6VpetAF6HkR6q95pUhar9EAr4RoVyoCBuiJYXARKDbsu",
  "key32": "3irXoD3HEpZckKstkyNct3ubFmFTK8yoGfFEbu8dPvmVfP4WHUeAw6TJEKaX3mDhZdjExKhZHoV5kWGtFArWkLNr",
  "key33": "3gGHjcXTRNY6aNYgTL3oarKMPX44akmgFEsSjT2XiDf1PUwJZkm1YmLbhQ5ARWF3BUo2TnX4FySMBni71wbg4m9L",
  "key34": "671415197uZVXaMNCAyNTuc4N1cRUa3qhi7StwDHe96iDWFNES8gJDMWJLSJQVamqD2tL4duC8oospBVrcKF3iBb",
  "key35": "5hHnrY64EzXsTym6irzhzzSQoYkDpM6qU2TiGqFw5FYqNRUQywBExTS1xmGDMX4xCVD8DwWHqSHsx6DgHogHKskD",
  "key36": "uHfDErUVoD7P7UF1cYqDF2ASXciZarazwXHaXFE4puvxgKfQu6nGuXoou1AfZQqnRNwHwZEQyrU9obkvqdkTJSp",
  "key37": "5uVKgomA12QVmcCdCPsFdjekYpdZrGukEiqmK5tqr4Mu7zHVaQBWSE8kHSNw6eDUAWafHbzwyUAgNonVYDzK3NCj",
  "key38": "2UURfkrkg9YK9aBrS7axR6MvbK44T1Md71sczAq8a64ZLgrR7QxR4Gx6FbthCzibYzvQ3VEYfGPxmvwADwh6bh8M",
  "key39": "44f5PnTtHW343TNkfy8qLaqbgMXHnViVY7UdmVSPCHe4pxPoL1bahZkCegemoa7SPxpmYyL8rf9F6f58pq1UrqY2",
  "key40": "5AFmziDTAnfwpFoJDz3hrUdNWS9moohE2dVu6LjdhcqYTwwHZmpNpASnN5vU2376Sj57bjXkJTrWYeBk3kN4Wxfz",
  "key41": "59v51bAoVRFAeUwGST3bpmn2jUbSMX5ccYrN9J8z5AupxHz8gJnS9yfm185KKXS2gdZEsftKTZdaMHV3LzPmomMK"
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
