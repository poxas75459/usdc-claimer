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
    "2hhLDWqXsXr3LhH6V6CKrqP8uKvvREo47zs9h3b8XgBBS7aWc92e8Mtd3gQSvEx6dJFQvJiaXx1tzG4poZxx6fXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a3MeEgtL2mqjGwHXSZArqgFo4vw98ZBg6Qfr1MuxBaYJT9Ky8KFPXnMLMUCUQuNv8xkA2zKrPwiynfynJZvkQnu",
  "key1": "DAmq9C4ci2dnsJpEGd86a43PQC3vQdNC1EwEdfJFuXhfDeeLFtPfx5qRNiHi2JWdH2AUWp7oh7dJUUZtyxvsxn4",
  "key2": "5tVFvhJUtQseHRCfXuUGZvtwDzL1C5Wk3ez22Ae1rWhFVxK3WawMPcvYhP3BnGWnhuGPc8dWj4J7dhXktBtPmCwC",
  "key3": "YDaJqsce8NGVsb8VGU2JzE7oUNxHXN1gUPvzDAJChketzP3VJdHDmGnRGEcsXGaBAJjatM9YuProCnDz3h3Af85",
  "key4": "2r6zP1QDiCBoAH9Dhec86s7ZqLbmRriZxGb23jajrwGXLXx7Zr7cvFsizcqNHqrE3H7wPzUcyaVr3SvVEKMfMNjy",
  "key5": "2MUqZTgArS8ydW8fJTD61r9YxMrTZEzjW8AESvTexCFsrBKTvsxCsuqy3DNUTzZ2CmwkrzjWiavVRNdTm5GUiGVP",
  "key6": "5AXAaSC4ZVb4Kw742yDZ7borwN1wNbPDeTMXFWY3bXF7wLRNrkKQo1bfHoXV9jpM9YP3cpsDhqTbnzYVgUAb2MPa",
  "key7": "4oXxc6pgfKyRt9PtjSC4cXcg77yEf7SNkiKVjrryNMsbaw3qWEYNDsCYT6RfU12Mb1uECiH1CjtijTEfbBQ8DVgs",
  "key8": "qjdrDQMq6UZrT1d9KyMbWNMJ87uCmLNYxNCAXzjz54B4sbTJ8CCdTSmzXK6Rvn72UdcM2nwJoYRupZw5s5qnSTu",
  "key9": "5nLDxpWkJA2WLeo8UeZbz3qndhRUJxczs1rnzTK1u9JPkzFcpvu1SssusWpALftef1ZUiUtw16PTbqF8MiLXSBpC",
  "key10": "4D8QTQesiZMg5oZzqaVKm9jR2eY2FEhXPwxhaVE6iK2iPvtJCeVjw85CXCY2Xvx66qEZ7KLZ2BmHr5avz3V2yjzL",
  "key11": "4frQeWwcVHbzruZekVqWCMzRm3WJ5Hd74x1kxnRF4VX1FfeCMYkPeMuyyfLnXojEAXTBJ83WvdgPyXUn2fgVTN7m",
  "key12": "2nepi9EDWTRYFJAFQXEDXQHewDLZHkmDd5CpSpHGoqwg3kTfRjrMbFzehriSWsR7GWXDkX4Uf6n7cWLvQAVXVfzr",
  "key13": "3MzgRSvFk7w1YcpDkDMEwMeujW4YzGjBPiz5zs82UDNmZ9vxK9krCEFDemiPbUeDFRGPmVSaAFE2JASyJBFxrDFY",
  "key14": "2KTQSwastU12VxA9wLnaz7FKufJiQZXfpjvZdDSwELenSaYRSr5WJQG5JhdXn5wGsWzrtWSpnNHShChCuA3RMLJe",
  "key15": "4hUVU4wi3GUrfwNhYU8DGsWvuZm55PjRuKduh36EJCSuAj8Up1iU2JG45bLjbt3bfe9fyYW4TF87eo1N4FxYbfNE",
  "key16": "5FjoHi5xHcjDX1Uoh4NEhWTk3CSRK9sK5Euo8vCF7Rg8sQhSABgt4KMHUuCnkyPPtVE2HgexiK6Rxa2VAAWZpyAy",
  "key17": "4Gt19eBQ9yybuwbdrj1omQXMCCXn6rHUDLLc3JS52U6V7aXBFpK4RV88WfcwAPAWkqbYDzSK8o8TFhCRhmwnCHEE",
  "key18": "2u9PYExja1UPszEmEgvQ2BjEQJCoZepGtvQjrGutqdHZyXNTWmuibmNdTwkef9TBRwU1x1J6pT4hfRHSFX2JLSbU",
  "key19": "3X7kpqkdKAAZ1TfWtM9ZBgUT99Z1SGK2vU3GLdpNwuP9TQtmwiyeRdLbagb9JxGfU8Kv9nordHEdtLanP6BWEbau",
  "key20": "62Nz64LBYQmfx1C5WdJKd2kf51AJUJeSdR68NUJWziiCtJabUHrxtykYHJvf3wrNMAkQv9rRvLY7Fh2L5ux4d3k3",
  "key21": "4T5193WdUeAmGTp86uPquQRG1zCCjRiJog7wqCo6113WB8GF4KkZz1wdsdHBRWsrSDLTmDR6MWeMHArQdy3rUTeq",
  "key22": "5XGQNbcjQqeZBzwvxgcCXPUDCRTMr8o8s2irAweeA8frevRUHhL8tEc1R52GjRLNrpFKVPwDX6jeJ3ie9cBhTr5u",
  "key23": "59BJDG1ZWcFJ2k4kS7gAUvnt8gzkJ4kLNRvHTbiGvtgACWF2C2BDqvDhQRQtppZ89fptL8qsK2R8pRAJpGhfBD3t",
  "key24": "5xZ7D7hG8Jx9mA4i1EJQhXYWMbaoD7WfENDM3ULkT8dJ7tmHxW7FXBBGQm82Yqc6n5wsry8hYJBkAADLXGYmewMP",
  "key25": "5KF9954EmwGxbSd8UhjgqFGbnhDUZE9AF3jRGXoJ36LxVViWAwdjXtq9Kps9xB2cExxog9ne7oNXXUTwwxFYfjzw",
  "key26": "5TcNy7cCc8YxnRREVqzhpyBETf8i4V3qw1PVYNuovfCszmt8B3JRbn2jkkwKXHTLkfSqxx8FFUPZou8Z756RnLUA",
  "key27": "SfLvEn6khNGEMzeZAFguXQinRUDfipqFSG3AQbF9Y5psujWrzWHMtAKwfDuYGcMWUAzcL67EfyevhLTJzMmnPX6",
  "key28": "qRewEQmTX5VPrAEpqJbcMbKkoQjZnutucpTX2UvuJzRhaihGmZEZ6J1udrhT3spmzivDHohbWpPJuEEVxZV3dZt",
  "key29": "5rqd2Th7bALaeJviyAhEQuioDQumsVNP7YVvyCeZL3jBc7KKMb4NZnTd9j5myGSuc2Q23LECBsFYPjjCRhXuH3nK",
  "key30": "5JTGE1fMxyJDHew91A2E6X3uDQ7v3d1iDSPjvDFU28G19RMRS4KumfFkFUUaCiqiRAbpieY8W2U6qVp5jyM3PZaG",
  "key31": "48TUL8NWr17bWfTDyHW5YZkToYPgp6PX9Xp3GcMrZ1naoyz9m4q9Rb6fpZELa5oReYk8BnAmbfpnVcQian2uM9LU",
  "key32": "5m7unA4XHhZGZLeiRxHEsQQJLeAddPidQq35T9m2NxJwzatCxR93y73dqk3B3k3mMabybQijMZZihy3Wn6mPKAHT",
  "key33": "4vzr9VhKHy8qAMqZJ4VSdgQSPsAzRUBPwHD1nRwuTSrJMMe61LaKW6fmWRTPxr6TQ6pnJc41D4Q3tZFZCgrDkixH",
  "key34": "3smgFP8tyTcyrqz5R3abo5gzP5aM2QkqhZrQritFVoKVeeu1kr8agVKr6Wc5zeqR52qqLxLsezo8MwMRsz7RbADb",
  "key35": "3z1U6pk2ChGzf4A6eCv9apt4mqNVGeRKWtfZCJU4T8YGPLbfZnYcetAsAnpT1htftacix6DVzyvDZWngxQdcrYdq",
  "key36": "2oHTs49optuVvRrAuNVFPWCYVm7ibQeyy86CS9oFrm8ChscdMLty4uaRXu5TbJKuWToweETaCpYbEeGgLxK9KWfB",
  "key37": "4Sud82hWAd6GB27ETEKLqkLyFBpbizC2m7hMbaUwcYiaoUoV1o4F4MXYCmxPecyEUWKi26oc1tKWzgMK7Hc6VBf6",
  "key38": "4sBXkvGxMwCqpp4WXVAXrPf9QJSBUu2W9zcs9kWRVf614E4GuGCGrJyimT9xVfEJoDrrgzjQw9K86YkANLUNX5t7",
  "key39": "4VGmijsPou9Ya1kLb2gPJyxPiFD3jiy8JE4jYYMJTuhwW8ckbvJsSEt2bx7yeBY3LeG1okroVcHWfZfzX66gHnh3",
  "key40": "29WqRoxxT53uwMLSw78faTVCWXAsPefSF4XzCfxyvaZP79Tf2L22gjzR5FxD6eSMLNaoJXEVdQrdbgjjsaFYh365",
  "key41": "2gqP58UPGV1ZkVjxwRhnYnxbQVEzSczNXUWGpSwGx4EEB6uWU5uYbm7JrMb3kyAs7jJQ46pHB9akMXwwrKwgt78y",
  "key42": "4VtX5yBjJd3ULNkH3bunvR5Ttr2DN2WMDDk7874sVxj29cTRcnASBRnkMQGeE8o8uxks96BghKaRBPhTfdFo3pHn"
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
