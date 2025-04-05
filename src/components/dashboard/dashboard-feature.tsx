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
    "25424fBMWTZKP7sBkAecSPtR3EhnsrDsoXqVempfWMw6EohxcGYy44VSanyjSUJhh67yRJyE21A2qdJdGaAdpKFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9srZXc9rHTYetvwW38JFbgbXbC1GHpLv7Lk5DU81h3fMguBaY1utcfK7izXW6KWABiv9da3uRR9sZDSu8JiTZL",
  "key1": "31p5it9oiAdcUsaiH6zSCtzDQXPD7kVAEmtVfJbqhGv2N9fqbc2hwnEEixNUNETRJGtU9x76YiL3dQi1VA1xtXRQ",
  "key2": "3ysi4iEtegrarQwrBwaDupUPiMbTWBHJ79ZseLCmqan3kfFY7ZXCQstnSGbFP1MabeU6pyNYQov3irUkSti6UxUz",
  "key3": "4H1KnmW4Gbj7FVg6qaDtZcyzcnE7VFe7Q76PbXFv3yL9RnBoVEuRsNLJXDWsGnAjQmbnZ1T5JXW8jJDR17DGS4zs",
  "key4": "5vHMeg5uHoTmJbBqFXNVEetp5prxZSFjYF4hBW479nYignXhatRYZT5gWtTcEFi7XGvSCkEy2bthQVFmmb7UPWGr",
  "key5": "3bwASbBDjUy82RNLRgMv8V7CNhvHCjSZLUByE39RWiZansfp7Gq3oXpNtLcFE3QUNYFmz1HcrR44F6C7JjrBcjmw",
  "key6": "3nvEzQSYrDpf71SXFRpj3nDd4wm8iKDEAgtciTBg6mcqTFzfZvKdy2XbSdsXK2WVLRW2LBu8Nxrqv99i8V7K8Wxn",
  "key7": "inUKaYLe1ZJTgurgRxZkYhdZkuPKh6UAbqiwJCWSK3wFVZXSGVAt1w3row2pGNLfdJqekSarWCMnWtjj3foV5Ft",
  "key8": "3B1azVQ8yasHETzc5NBVThvj7yDb5vE2EcXyLDrYCVQ3h9vvuRvZh8wVxPebcHNf4baKy3LqVFxq8iXvJtmErYgB",
  "key9": "4KKFrMx25ewtA5GnGysE7A5jZvUpJCyTnZc6rv583SS72PgcbV4cdePAsUP8zkcYMesBgpsRvJ2uJeNDTE26VcgW",
  "key10": "2vKKMGeq1UJ9aDaB4JndHfhEYErv6TKR2JCyqo3Kzpq7a9eTJnGFsHE5aDTqBnXe5MtXE2wpqvBS9BaaCX3dTCwY",
  "key11": "5smSbBPQqugTvxrM1Wxqthn32Ft9WiLbUYuN79TUnozYMYu6npoNCG14TpemJdphutNnLL63t7zv1PWnnyVQWcks",
  "key12": "4tMwLAJwft56iz59TNdEP5G13xNLzNH23FzNBrpdcPLbsr3yQJejdxFkwucuqbqjj1SKBdFaFgsvLvXDhdX9F2D8",
  "key13": "2RZLiyE3VhxBAEGSFvaeKVspfQQvpBg6tmYqfzqcupeTqZoPKMTzHV1qYEbdSu2zdGGAZp8cmkypciPNno2nsQg3",
  "key14": "5jihLFmwkWnXfUP2zHFgQLiTeZnkZX6kbXaxGSp2JbARDaW2XFto8mUmZMahnSoQ7uGVC1oNbzTpp5ZtUVWtr3PM",
  "key15": "5keVCZRS16Asge8WAiq5XkfoG7cbxS6SVuApvmhrjnjewLhLoKwDKnWe8KDBXYssjMhJ1hww3gjiXr8iaZmhDTb1",
  "key16": "35BBvhY5v27LJUrhWZJit4C25JfafwbgqN2isQ54DJxCQFu6gQi2bLRmk11VRVf7bfcR4srTSHXYg7Mu71cbEDED",
  "key17": "5tBcwhvU3mNzfPrz3xGkQEbzXZryT1sdeHX9r27qbzWvrcBHntK9RGGLBcr6fzVURStaisTN1hjz8GJJbCMfpsVC",
  "key18": "5NE8detmGUbYF3q8Q2YbMfCmadcf6pwHWhAUxEeXhUTVmvS73NdPicoFw6WE9QyrSySdUHbunQ7fQ6v551DwwWMk",
  "key19": "58cg4gscjMVAeRYdqcpydVyQeUm2evjPYD81hSNrKtc5YQsUHvNmhkbgL3d3jMDLg8DE6oEefGDTrSKe5y6pBVVE",
  "key20": "QmjSupPTGQfm65EYuH1evaHn7HvGUPmiLxwB7AkaaLHuyjSGFVWqcT3op7XsjAHDbH7cdoTty4diUXBj8PqVavg",
  "key21": "YfmvtkSXmJxB2WpsFijmzVJ5Hefpf39Sd73vFsoNU9VrA5dsGGg2t2U2LGyJujcMkcRyXpUK3GJuUgNd8cu5uF1",
  "key22": "59sKoFBwYQyPTodKyCHm1vJg6wNzwVW8WorwY6oHAEhThttb7yg8552g1Krs6tGhqrzNESvAi6M1MakH7cyYpYa3",
  "key23": "3f4yTusvrYtk3Ct6EHt1SvN3k6Y1zLfvXYbpm8aWcv3fGkZAZUuqAbjYUhh3LjqXQjhMyp8TNDWGReXNjbcLbfYa",
  "key24": "4KCEXHVur3zdP6QhKpsiagjLHXJd3tYQTkaWLNPExmJswZyw3EJGpkVrG52aidoNmKatTPrhYm8QwTvYrLZ5ggwB"
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
