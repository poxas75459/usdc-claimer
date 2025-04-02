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
    "4VVnrsTUXCjTdcaRL6DWNsxPsjanQmrHuAZusUEf2iHPs4QrDhCTBwzmajSavsG6HbYAcStj3ZDhQZuZYRTUU1xS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLEAQNsCt2zUdLmwJpReBMRm6gFSSpQBcEqiMYZgbuw8DcrBfsfezZQL3LA2r93eUFeLNN8qBKAgxgpbx2E7wAX",
  "key1": "37Kcd3BQ3dDsD8bi9saiJGVGQcjXyKnUPkiX9kEW7tLFV11AscSY233LsFTLr6z7prRVUWPZiVsf8f5uCR65dMdC",
  "key2": "5wvnyYBZD9nWK3c7nwAF2yPLQhu6mHEeiyaMZq4GaYrgTFoUtzWVRsnVi51gmtaFCW86cTwD35weSaiAdswooovh",
  "key3": "21MTw6mDZtGFsr8KTiyv1h4aErNefQuTbmRhDxXzgiYNBTwZ1ue15WWh67bYWfmqNWd2vkrxjtDbGaFzfiEw2G33",
  "key4": "5dYTwYZ5c9FhYBA6p5hKkwrMnoNVgJqHp7KKm5ALsHAzCoyTWrVKj2VEJqbgNt1byPrNEkc9EHdCK42tKvgeNCCo",
  "key5": "3WFTh5an2aUR4qu9pnuHUKB6FLVEbdRu7CfhG1iFHAuRsaS4gqKBGi5kpQvXWsC61XdnASs3tQBFGjqXbiCgHDXX",
  "key6": "R6SwSgZnzTKNqgPHWLaUHpzq5N2P9sj63GtMFrUQc6eLLZqdRFCgBtXnoi1kgVRaZEz4TNaLfZwaWU8yW7FdUUz",
  "key7": "35fWCxHdzR2UKSuP8TZqfx9CpiGD3Rw6m5RLbmyVRRWGx8Bn6WLktW4gJ3KhdyAaVf6xQ8iq3gTyUUJEtRb4jLsh",
  "key8": "oLjGdPLPWP6FEKszXM3bbVRiyZcWE4nGjmrWfvUbfxxG55uxDQK5t5wQc7YRBEhVFxwAjdnAFnFsBSr3YzhgEKw",
  "key9": "459Z1P5yAWcGDWX6AfZtZkVFo2ux65fKQ46CumGboRYWcrkpGpqV7gEXFs24EkpSwCYEEs5T6GTVFft3NY6Xhxv",
  "key10": "3VLQeFXSj23HQRUvsBZUeZUePL39gLtheFAszcKoqWtS9xBhySJewKjRD17tHg8hWYf9f8wRJrvNEfdvLWHXLUNx",
  "key11": "2FXSKXMjgeWR1nk5Ynv1tTxzcnw9CzVSUNrwAN65MkApTfUs2Zs3rq3UJ9hbBDZhbSrLuRU5DgYfTYb3sXg3BmFC",
  "key12": "3AejYXrBwjtG9DnKbCFrTfcQLgcowr8b3mwbqrpvebgvqR6T9Ve8YJZwm4EiZNxR6zfkqAsZ6G77totHEqHXaHxB",
  "key13": "4z7T8JUFdghCK3WwZFxpAYD65GG1623x4VDqp1jmscv3vZrZmu2jFYB1PjKxZD6hSHQeFLe1HYnNrkYsftSxtq3i",
  "key14": "531bqpor47y9k4CQguCPt6e9V4Z3z5CZiPKzCD2XJRt1Q1HQ8cgKFXgM9fMgSbYxnmBgBYVQwPGajsiuxzbeqd8Y",
  "key15": "36gB1aoDbmHLWV2iGnip9o2ntcByHAqUakszimaeNYUXC1sfi6ow6V4NfCRq3x9eyrW61AYydDNa3PEW7sgAasnF",
  "key16": "43iMKDLML8LY6pxwxiPGoCvWuuRSGEr6U44ENRCinGsKLcTzQWMupjeXKLpy34H57Y3D69zEWEP44zgDsLv76VFi",
  "key17": "4c54f14XqrYzimHb5k4Luu3wfLmjYKayVm6T5UNtKhDepz9nXXMLWNHnVN7M1u61MVE5xV576jZ6xgoHDti9b7Gu",
  "key18": "3tLpMWMbTmCTVAw13TJn4jBARR4Tr7LtRp5i6ov3caFiQXLtMKekpAC2RFotnatQZCsSveruo5cvuxgsPokXMDFE",
  "key19": "3JgYq8EmAF7w2tmfYnwN58Q6Hntqj2B8rFDqYtV2VKcahJoaDXWhXa6AFaQoApH4XXT4S37Wf6UMDyWLmPS3hS6R",
  "key20": "4yqxZNus2zDGQwFXrf8Bnjpe8PRKWCoWc5j9TyZo9j3BCS4dFmrR2Lfj9KkYhB724RbhE8TmjABAkyMF8dEazCug",
  "key21": "3C2TYVye9EEfZP8D6GwX3S4CBNvsybERVYd8Cr8pxYhJTdPRKA8mJrhTV6C4VZpUYmCbbuQY3X8EQtTEQUC1rAtJ",
  "key22": "4UAKETvMra6WmLsDKzoqMQjMneWzD93tkf8YxyineFxumdAjF9LJgFDUwrmDGbo6QPAQLowidaCKkc6qHQtq44ce",
  "key23": "3a9e9faAkhrPjnbGZDFRuCB7qhAWhc9itteVL7kMuUe5F7ZVLbCLyB8L98AugHAtWkwwM9xodxxdMFxv6d8bG2an",
  "key24": "2DAtdVbixXJdASCSVbdp2ARTZmtnwytDJmN3mWgah2E7w2iBsxd1DJynXPGpP4aFDU6xazmQcwDiCCyVQQthTUHF",
  "key25": "4y1t2Jt4rdMmYG8AjLvy1U8cfLYLc7hLD8zdKjNNYyFvNNtwvP3cKCeSKK1VdZE5MP4e7rwRkMTmAKxGBBW34pUF",
  "key26": "58DLgtGW8rS9bubjFRacbRNAXNwhnqwWfEXDhLMrFBRcRaCfdMoSGDroJEwSbc6goX1QewGpyirWRExTbJufBqJv",
  "key27": "5fqnNpX6PaiZzqfSSR9wXNHUYRQEW1CXLWQAYH9DWwHhED9oYeMqJjTBNipjPQFcKTdz5ugFZrZBpBo8S2RzZVbg",
  "key28": "53L2whN9opEgPwdpQBy8bZuhfGmfuDsA8kvyCEFEtqf7V8v7cwUpzFcKfobcYtBHyu7WCJvZWEqAP9Mm6r6tj2NB",
  "key29": "41YiPPk2AzH6qNS4h9EZ3qw6mneTqd7odKriA7Tsk1JAe7SWZsEvZYzS6usgHPuF4R4Ed1seZeEdNvrk8yt4i7jR",
  "key30": "5aUkmEtNZE4yCBRMxmnjXRe37Ub4FmysCDWcLNSgGRgH4mbYM2w2PpAaF2xAHeBjQ3masmjawgqDNKptdf6LiWz6"
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
