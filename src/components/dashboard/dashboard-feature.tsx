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
    "4Uz3kG6eFyCPSedYCXqoqYtekeCQJHDni29uK93HSTERcCmzjCLr9SRVXd3bY1LZLRKm5nB2DD4jmWdUCYMZLyxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67nv4gys4C3hmSjBdBCdwfRVYt6kDhky4UpPSYaiNi2ni3sA3h5CaPuwE3dEoNTJduCAoEAzQL8Zo5HQVVBfHbY2",
  "key1": "4mrjgQU7mArZbMDb242wRiaXThJ9Fam2mWDg4sWRD7EB3wZ3oqM3CWTgn6Qm3ho59BYFVStS6w5TmKLqiaM4BjDU",
  "key2": "GLm7r9kfMg6M6pKa6gKVDydywUVyFhpimd4QdDgYgQ8z8EvJEdnu6rrZvQXhaSSfLFYcg1d6iA7Sdm1WBVTFEbH",
  "key3": "5cWKXzD8r23wzedJwd73rMAL7Q5444uSGU2Epm3TZuGp1tmMKEQLpSyndepwM4BN1RXajT1qUjhxZBxcZpBjP7mr",
  "key4": "42h7DKCySo3qgq2i4QWc6qwa3mFTw33vUiLxu9CCwQewWs4sfPj87cFrk7BkCSxZbKufg1rEKFnA28F5xhmowum8",
  "key5": "5dLj86zSSKd9ba6keDBaoa7y1vNGZWjwhkwWikpVx47JFGAxbvtezsHCkRp2t3skkDVCr7ofqucaH96jPgjx6DeX",
  "key6": "55GMgBeAaer3jocsMzvTx9q4Eb3GGSiT8Lbm4nyFgM9m2EKoHHoaRZD8kLkBmb4vMujYFtcvSUNHcbTS6KwPnnKV",
  "key7": "39QEyLiwgbANaZYp8Jzo3fQxCJ5nUp4zxjrtH9amjwDL5T8w9ebXnHzAocgpoXxpAoPzA59Y3LSjxnznSdUcvDPk",
  "key8": "1o3wRiDSA6K2R1mcYAB9VDUCvqC6vo71X8BzzrsLb6sZHzYmEoM3c7aKZ2VDDV26G32DhxLxQFjtuhoQ1toQ934",
  "key9": "3btB3r9j4xgCnWaFMiBr6qkorGWWL26tE1gD4MmVgukUQNQmTCZtijcU2db4Y8yWyUpwkcfXGe9hcvpQn2Jmhrjg",
  "key10": "3QX7rz1VspKzhU3MqMFRfpfVBgLFDd4gQgWzp2AmxPinqcZzJMUaA9pVcVnozxC9t7PwnYgnTkMLtEc7b1VJBUGr",
  "key11": "3aM5NQDpqD7ahdBiJGv3V4CkoyxENDj4FrxoEnVFpZaqiaQH9oqZSxDjZziwfrPUWPXd6X9zL2R8AbtzbQK8ZQEx",
  "key12": "jw69RKhdQtD9TJCdJ25W6hQwnDEXJyGrDGGAmG4fa5PJKSkMt9zPYVScrtkyrjYQPzpaUA1B9ZJ6wAHUmZqpYoA",
  "key13": "3K51DNzAbYaFmYdmd9WfKbTwFXjihMsJviDqKtQ4vfLUD7MMGMfGX5daHgXP8zXPyi1zhZz8dfAfVAweWBhXWHve",
  "key14": "2zNH24FndqYs6dxfAxdDE7BgL2URPYKHVvz8Lykh5Vc4eHhduWZjSUXACgMaBXuUzBfWRqhqzk9P5n7dhRqapfiL",
  "key15": "57wybGFCSuChWUTPHj6Nq6nWhM9wNV5XyJNY8hFihBEWECUEnWwJzPjavG7u1mCXRf8bF15DgXetespbA3ea7Ldx",
  "key16": "e2BLDj5gTwTuhyHgwCuj7BdJyMTzKL6RQDFn7UTZ7ADV7oo4gHvc2YM5odV59gaPsiQBNV3Yat3848xgnNra1Dw",
  "key17": "4NL5ZN7qMzPZS4ua6HM25S3jgHU65pm1J7FRzdxW8TVYgUbcbRBpSurz5Q7gKWc5wQR37HCrJxLzS9EcYk2PuVp6",
  "key18": "5pr4ai7m3z6V9WEsgE6Z1YcV7fxC158fH13MiCUaGyZhkprmDYpdeFTgacSHkeSsTi2ur6DAdqLDbHLHKD72yMBm",
  "key19": "3Z8kjtfUrAHdqvZjPnQw1oQ4oX5qSHqcANmWzfGyz6tU4VNEZmEqnVdAGJCj2cV1ovHovub9sD4P7kgKa9PKykz8",
  "key20": "4udy7CKv2bMjAEvFDLVQD85iCnkgDEswYwNYwsjBywY1Fw3MgFzumPnqHWRwb8GUoGCobWcb7PDJ2dz1sLY5xUtv",
  "key21": "2zXACrBqA4WVJXEcixhZHtahBE3dVe3zeamC3EiJ4L4wom1GiXMWifFuqfuwr11KVNzSK8YXnc6VNN9KdBgEncqe",
  "key22": "4XsAtDtdXMJWGFB68ZNhJvK4N2ohYYmQRxsQ7AWWCqt1wG2HMwcjLze2H7JXuvh7mW1uMPZn2W6konrPFPvBhZp6",
  "key23": "2UX5ZjguM5qKMJbvebr9W38Xkf1HqcqY27C49f7bAgptpngcbtHfrN1vcUNUvjStA1VpuscyQZtfDywqjbW8S7Go",
  "key24": "33AkP95gtQbYafb8MGmosiYFeieWYNPKHquCLDtmJKuvheKWr2NCnoT2eutnnzSFRkNq1nkS1aJNZ4WiWawLcg5Q",
  "key25": "27NsiLPHueRZ67jkFYTRnnoad22tsZBEWba5FEkNku4SqZvixNB1vXjDsSFngG62RamZA5Gwa1SML5wMDFvG94K3",
  "key26": "JgSMPqKLXjRzaMGyLqYdqPX8juhbmoN4xgBjD2mNvhtCzUz36CUnC5RZg5GduxZLaS23vg9yYtHF2qHaLYn7f9h",
  "key27": "dCGgtSkk5mPDPXpYGEmmcKeuvXYMb7tQ4AaRmZMQTxbP5L3WRFbAbPWtwX7FZoSW1wbWvaT8DbpJ73xCKq9rzex",
  "key28": "5saqnJwYGDkKuzVsFkN87HyDqP7aM1idHEov4cW7F9gxufcodieDcWcxzxRhChXsCiRykSwPF4UEYr6QGDqjgLGc",
  "key29": "4NGqKNygyhXek8vLG85czkmrXPMWxXUKFMdoSThfGDvtLjFkgk3fWVc8EDhAPYxNov884Nfxx9W8gPmFufdQpVCM",
  "key30": "2RquBz9Pk4mafoqX9z56s8bGmm45fUoAYYfkBvZuk4UgDv44uSQJPQnm9u8Ra8CErNW5gyuUzdN1JdcTSM1unU2n",
  "key31": "3TtEBd6wxnttoN8aht3Xp9fT2WGqHNG6hCdp2USreo9MZjyAjqxxBesgm81xU9K9KNGutYvfJxxThzGDCAukKTGv",
  "key32": "4kbP5AjMPDz1YcBXEHhwVBmn8cLQwM6cf6e2mLUjguQUWGeVWgBK8dJLXoRqLnhxvGmgfTuZPtVaHppotxAsAD7w",
  "key33": "NspzZATz8SCYfmd9SqjH4C6BZ1eFUZTDVGFRzjCwYt3vNbQC1XMx3anLfqhnJJwSS6ntgxKXCRQWUuaMSeh9WN4",
  "key34": "5rnj9iWmrdErgrEYe1Jovxt8pA2z3kmeZ94gRCVQrxPr8PtRVZhTCyzymGTWgtLzxbJDoXc2JF4U6saAnwsH7gXe",
  "key35": "27E9BmQDQX6dJbjfaDR3jcRKYcyokgvrsZroDL9aYncNvHs5MjHGGZzUxd8CUdoSkppvZJBFrh3DbxndYJa5nyeG",
  "key36": "529g8Uy7EjY2siYgfQBETFefdcsZdT5znEaTakxtCSUL3jY6yPeDReaiFyxRPF3yqpTdybUt1YpDPgHc9LLaW4n4",
  "key37": "4Zc4Tjvo9StPu3ZEjY8jFEzvvnUTRRJfJ223AHSbWcXw2DxcYcjW99gS5j9qxD8A13odGKge8kGLf9HyN46VQEns",
  "key38": "2CyQM3ApQhKudbx119dP6iAJyrcA2VJeKk66FY6Deyfr3snXeDCFt46WJ1ERSSFHfwP9Yyae8TMyjATiDYUGakPF",
  "key39": "4ZHoxD5NavqGPtybd48HWvxWDXWLbPv6SCZs847opQ3C3p4tPiXWk4uAWupCVAghEVQbfxxLdeFMwF1fgoZX2DFY",
  "key40": "3tC6VbYyiFnJ83hkpDcnfevrHfrRPAUkoxL6yuw3sopx8MhuBjashApQQX6VezQbv5GBsVShEQCftQt1oXvSpfPy",
  "key41": "4bXth2FYJWGgmAKFWWd1EC54scFy9Vhj7qoxNqc8nxBRb58yrj3ANZbj25pqP7nv4puady8sxeCgA8G4Ygh5CV5x",
  "key42": "4wncsDqcV62jo2utfKCu9fDLe2geDS93HgQVx4tfDqNteFeHyRvzpjykpxa9Ljn997M59BHnnkAiAVfxvkVkG2N4",
  "key43": "4KU2qi55LaiyhMQ6ELmnLu1MGeK6m74mPdKxHxcF8oR53iyXm4zSjojtL4DwzzGteaxRNVR2zmda66dVTWTLR2oM",
  "key44": "36zBnF2QqexmUP8d3vJFppv22S8aHuiNmMnUyQKh3Uvug5Rma9GMf18JqW7UXK4nXSgYV3zbyy3Gbq1kD3jpi3QK",
  "key45": "5PTzDf5yhgAgtX5xJRbj6RbZz4mw13pvwfHzYADEUvoDEe6JYehbjALAgyLLtnMRhkbGHWnuhYnXiyQeasDVWkhX",
  "key46": "25SUgMgGimJRSp6u33JCfvYdrvitrXj9E7oPEtmoopQL9HwhCHrY1b5vTyKv3YkviFQ7gYVzdVXJtw4emLCmQDpb"
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
