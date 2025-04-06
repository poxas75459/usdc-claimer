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
    "47ziUE1ED7NDGw1EpQ2dTSKY5ASYq6ZoLpiVtRSfxSddDXrv7t7NVFM4rsd9p9iDaGPtgUSAdBKHzy1tNVeRj1Zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tiZW3gg3AMhuFYL2cXBgmvwxnWU2CQu6iL5LWS3SzNNdCCgvjYGf1jSG1di6ewzjXt7SLuJBMu5ERaBj533Rdk2",
  "key1": "5njLCf1qb413MV2L42U9sf3zMti5q8ByqAB88EtiiD5CgH5UiTox4UHMo1PtUCqSL9pyP6GghhPgLaeUQAtgpZTw",
  "key2": "2JtqjR7f85Y1jxTuEAPCyestFLijxNS1aE5ER7cnjuPS7AynRiwEF7bcUME7oew8NmCWbfNuignYo51io8akTAtr",
  "key3": "2zcpeG4gcxxjH2M9eehGuSHQ7asqRABDScdAxoG9VhibwusbULQ6GzuLuhx3txArhAnqSPwBeNzYNUn5MThZc2Nt",
  "key4": "4AwSSrxtqtjXkC4gnrUWneUkhh4qrkMKtQQCGqvWQNiw28G4SwMT5iUpBNGni1Tt7ZuGDw3DYBCmdYbm9UxgEFHb",
  "key5": "bHTVjJgS6T24yg48i5bwXQxGW975JWAxdviZdebEVReLqDGkHgRz9r4ukaW6oqBA1M1gySzHQTFgK2xxYTmxCDX",
  "key6": "2Xn9AeBwjYQP8FzJhoaHVrYuL5imLE49UqK6KUe4N6Y4V63HhtfaV5iXDNwFN8sofFcxetKwiezERG8Uuve27bLV",
  "key7": "3uhWr299m6fmSxV3yXpgeGJgh8pLye1DyzgVjA2d2LH3272BzqPRc2d5xNy2rGyWKfyGkUQnpaYyYhmqmr5NtgPE",
  "key8": "5j5bVvSQjUUeQx3ovkSbJnfsupeccSxKXGVBSqGMh2C1ikHUR8hjuBQe8x5LB3texkaY32pcMX8i3RiDJWLcrVFo",
  "key9": "28EdPy3ATbXJyzdW8EXx9HhLS16oWQSQKy2vgi9PLTr5fa1yWEG95RBxDTHd9hfJNnyW9RyXRUfcFu4EQFMpwUdc",
  "key10": "3PE33mQr2DASB2QURPQJXi4rAhvyv6hRhH8SkaUPwt9RdG44ziE1FEgi1pu1jG4FCrHw6ZbyarQkMitnp4znkVNA",
  "key11": "AvnsPRDWNfAHcX9qtyPRw2ekdPhbbeJWeUU1KzCNBTNtvrgSMQAscCMeRvpWSHK6v9VH37VA2Xs373juJvjz5Cq",
  "key12": "3Yez5zMqXEyBfDYdnqaj5EA3YNgFUfjitUqCYhFMeLzQ4Y18KoWTd7jZAwU4F9h4A8hTZiNMXVKTLxGTHx6Y7UUq",
  "key13": "3HPAcvbHR3iZToTknoEqD2Z7RaYiAoXExqqYJBg3MVKJeBYtQorq6TNc11nzBXKfNDsaK8k73aT98hKF1YoF4fGf",
  "key14": "5mjtfA76DsxysvT9BLwx1DrCqBtTpDY6xzBEnNfYr2Pc33Jkw6iAoqdWzcLKv3pSNfNqUVMi6tcvxWzA1t5yZ36S",
  "key15": "2STd1kat5uuyAoVSdwsTsjWP4XGFQcxNrSNRJmsViyczCwfoyZeoHNBYcx8dxVjRMMSouD7iFWtHoi8heEbtszKy",
  "key16": "4MaiBsizfHDUUU4z77b2zsEGC3p4PND3kKmNuTXoN7B7MRA4iGWFro9gLQ9V8zderDQxQZcd135A8efRzbaVa9gE",
  "key17": "4uJCECLFz7yubNgh1bRghFcNJKfjWYE7Hh986ovCuJ7DtgC44ZbYkyChMXjBpFAwoLJrtx7CP1vLnhHwcWvsKQwe",
  "key18": "2tvAY8TPsX3qwBMBGADT7MznP6sEdUycHGHkz5k7AbXkirETP245K7MjFMXB1FMjgCqwGLrDLmGxnu3t5kfcwQY8",
  "key19": "5kJT9VETiEbwiy91z2zaNL78s5Ls914ypVtXuwKjDccC2r78Bv5Yw6EppeUGW92xQs7o4VyFD9TfcFFXZAW6Yu4K",
  "key20": "542Qzig2FTP6y6md6xQNoXhArt11eVZr2xpifAWMKy7vuhzQCkrL5CPhfKEDDtcN34FgL5mk57UN1TJmwTWVTACC",
  "key21": "5cvzGcQpQPsbUxUBn46H6armkkXJHVDe5gLX4vXiro69kcQUomx3JL3oJZGG59cs4uEP9GqiZ9Vcbnoht2QDbE4K",
  "key22": "2kyU9AQPAWJDUrPw6eG1MGoGAJ54cLhioEacGZH7e6r9Me8csEEAaqBbxyCiye9LT6iDSzgTTjk8QLuDmDcjrKWB",
  "key23": "21qerp9yiiZbAvJSQbQgjroJVb8drmoR31LMWR5CteQSMcVzV5YYAVZm8ui2UWwaX8oT1DfXHy9YWaGZyJWRDi5B",
  "key24": "3zZ44A7Fq3tk9zg3ULDkpFm4pWnBquysThRCdXECsKrbsZ9dB7z2ew1C8DHux4BVjvtrrwgybFQvxqPfk5uA92jV",
  "key25": "2VBQBw8fxXPr1mQmURUBL9E7iJX5bmZNq98xYJn83LtcDrTZkLMZzvvh56yHcYaYHrHzeUspqcrYinCt2hA466Zt",
  "key26": "5jLkpAGovGdik7NqVuQaGx8ZMgHvd333oYfoVYgw3RD1D3GumTFZsfQT6VUGUfcwnKjvcapiU75ZbiPrWAQdTsTr",
  "key27": "5DMiAe6FRqoFovgMojbQVjiQo6dMJs5YvyVtwegyFj1a5SiiEmb4QTnwu4ordeodsaznPakXfYNc49nW6EKm3xKc",
  "key28": "4JMPpQB8Qa5P6SHm9duimCHjjXZXccAWvkCS2o3RvtR4GAq54zVT98H9gvZs3QGvcjbVFAUZjZRtiWrZvKTE3A36",
  "key29": "2JjBwEya4vamtF2ZLiiAtapaz7TSJAh1cviENaq9UkDWUCutqbUanzu4amCzWRs379Cu3SK7zgukw9hTbW8LNEBU",
  "key30": "5iCyug1D3qELGVd2SNsncZPwBCt5hUswuLfd9A3MQxrLmm9xJanUdvKadeubpTnmNF2zDvxB9CRmE85x1tqTPnPU",
  "key31": "2qjtwB3UGUWc2opLTqWErJaotHNZur3nmeZN79jfgf941YnKVCk3843v6pNju4CL6mb3TaTThLMWgjek8982d65Q",
  "key32": "2CMkYMwv1XsRhL2famfHG6upwFHGNfM7SAYRHGK8mqiHforDUeTv91PZRDByCW4VFXySJBLoJ8jCtUo3PZrGD9yE",
  "key33": "3tv2KRszWKjYGBushtKAENDiiTHtDiRytDNwqhQiWL1Upd5U3VdtHThPVDNXw8EozsqKBD2AU1vwvmNfTmR9HJ3z",
  "key34": "3dz2yajjJo2nzygekYjMUuAqebtUFwqbQcUVwqykb9tBwa5wDapQCy1XG5ehWJ5MWhjHdkhwFTY8zcpvz11AU4B",
  "key35": "4m5DaD7eXXFoPb3e5xAUhPYA5D6NEUeFJ2ZeyiZVKE2aqoMm5cGCH2zBQKdPzpTfM6YzzgUbhH2YUsMiPeyXoHV2",
  "key36": "2pLtUzCiHUzyW516EWYUKdPgPhjPsPoaZ1tmyPPWC8rKsyi8unZCiknZoFqeG3WqbrMiAeHeTnc8uqZrgsVf8tSM",
  "key37": "2nvMNdMSdJ5wRTcWfHx3zSzcPxr3Hc1r8hQmscmPA6SrGchKw26wt3BYKbg1pEY4JbnrsfrErmiJPgTh6iKRZER9",
  "key38": "4LLKgoEX2RRV61z73ce9PgDDDQGRzPu1KrEihdaLuxF4DhwJJE1xamRctTcfGMMTzbga5amkcmNgtRkm8GiWT6oM",
  "key39": "4Rxg6uz5ceSo6Cm3de1wVR7DwqN124bCPYCPxe8EJzxWQFHqnDWUPyPxjVDkp1DboKCKtnJVHgLfRuCGJ6wjifYo",
  "key40": "2J3ApQDXtLKqxBzK2zi2HAUy7tohD9jKguY5JTDzuVfxJp6oEDoAgQqKaS7EYgLoHmMWE7RvYUn6TUYxkmSP2Mux",
  "key41": "28xxLtcAJu2n8PcF51KYXc7D7KHf7EjKqn9gDpLcf6ZeefmShpWExSNhJcCyFfH7vm6z2VG2nUKaoYtamhPYugy7",
  "key42": "pBfoJD188wpkYs8iQVy44aWwoxq33NRYpSfoQ2wYv6gkbt7oaWY74HXXwsgwoBkmF7MKCW4F92kVyJDL26gWkrh"
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
