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
    "2vs5rvkJeeotpsCfGBHWXsax1aT8qgFQRju6WBwMTd7C26br4hBQFJqXagNGTXvoweeC1DCSXPAGhk7AhykwEJ1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VTJzmvWq3tQfpn3ytXhctMeJhjdT1dtBUFWQLaa47WNgAWVaa2reGh3GP7ebXzxQvF4fPbhfVWZStgrdWgh8vrx",
  "key1": "HnoLqjBLY9rHmKZSF529ffFwvyTR81orHw6uhsVp2nY3ppebV6UivLAgZ83xgnjmBi7skSxygscL19JXAf79Upo",
  "key2": "5kqjwCh83x9UjjLmfrnPjf4kB1eP6vSgFKGnKVNbBUrKLmbNaG9wpCgD6Zmum5CaNpcV3aWXvFXuPE2hbcADJb7e",
  "key3": "5gaJoYa2zVkHrAdjdsLNjbZaR471YxP9baJK6HTeRm2YUbxfR9pDi4juJEcP5eZN9cRDsNTLTEGWgEaLpJBiFokp",
  "key4": "4JC1pMA9RPt6xwbk6nxNUuJgn5uiP8apttC5xXTeKAPgnSzkcLFGHt4iBMLovZvBKcx1mRzJMQHWwSFhzUdSvuze",
  "key5": "5RJUchc3Z7LZwyEBdCW5EtT5y3ya92ykp17UPMxKTXqEzsLHP244SczWezJ5VxNdJUxonqqSHcRNvpQDuH3X8KGN",
  "key6": "64MDjgpYLgtzbj5M2UWPjTtTTfwgs75RRYFwhc4q1e9ARTNkAF4k4bZeAKnQuD7isefUh532AUsDVkgrPNJSiNHw",
  "key7": "5XrwXWy86qcWJtQfxRurrti9Qjg74N1JfrHgMVUeNPNKdYrNRjNQVNL4mweteMRpwxbF937cyDukmWTWJAEsqUwM",
  "key8": "bF6Ddu9U6vHmWKYP2gUBdqTVXW7UJe3b2QszauWVaL1Q6TXZwUEJoLwchrWvZyycHdApgtU4pLTmXhLkpMb4NtV",
  "key9": "3FbrSUEEhJJLdbu9rsTVSzR6hwxyCAYd1edrGMgHmNhh1KDuijrdQTKcZsRz1PJx2YsPSf512bLmeeHK7E9zbP5i",
  "key10": "ij1cKv1wjRPGH7XPXDHgyFTt6UKYaeMeukVL2yxDJuhvddzZTvLP5DwRnTWedkDDQdweaYpvSe8zzP4K68TuLEi",
  "key11": "51fzyZtfULEAtTCQ5FBoUFYjgqomf9ToyJtKTTnsL1VuVEceE5tSxf3bU8QWDsLJt1VNBJwTNZrYnGKdeXKdSuho",
  "key12": "32FbGQLE75EADDfNkGdQiDQN5i4Dp2naiEZovde3NRf9kVzSq2Vhs6KW5GUBvmb3sTFzy9cdj5uxj2Cy74PRCqwf",
  "key13": "3U2swj2BHjJjFBfyriyhwEiwykG2koCvwHkhKGASJgA55qmqPnKmQeiGKm9UK7LCjybdsvxTfyFcqcVPAg6MFSpA",
  "key14": "5VYtQACPCwietsWcAGjR82xHUNaA7ykom9EwoCMyMUKzZybb5sV8pMQX5Kf1qdgurAbAiLWXiStqZnAFX5PKekv5",
  "key15": "2Sxo2yVqBWaQK1wrgxU89nMiwQ59yp8VWsrj3ny1KTtfH7ohgoMYnfmvpgrq6XuvHQ7yDRCWcNvL6abT7Fu1659T",
  "key16": "4TpZcXoQ5NFi3ypcfckZTUe67anzMqNHrksyNoT5vJLnx2GTcEF7t5sRJyu8QT58HcGJpGtfxQ1Hzroi67eNuqAq",
  "key17": "h7YMsnxndjzJjdnVZH7gzrDDrq3M7WQM3uJbgeMUA6gPUNbNzGt55mGAUoZZ9SatWygzEjGVrykghKx1VMNhFok",
  "key18": "2E7RH23vXwwXDJzqYoGjPkm96vYRpF3mQ3TYSDEfmPLBsdYbQqvvom67niB4u85KeC7ErBbfaiqcGG1GrKqko9fK",
  "key19": "3XKqTNN1otHrYneRKEwn6NtqbdKoU6N6ZUb2HzvrVnNwwQvWj48rYKEaExUZb45KzPqPMTTQyu8aiyWXoSqSvhdE",
  "key20": "3qSEgCahUBBxraFgVuaeApS8b6BZUM8yXyjZoDj6LPcjeBo9YM1zHuqTt5m9n8uuQojwrh3dhmL2J75w7Rz2wryA",
  "key21": "wC2dGnZDJNrEp8XW83dDsa4g6hz1sH4ueAEpcMPSTc5s9AR2HWN9hTsEL6bd3o4y3VkWPyUkcFNrsCKMf4Sx1t1",
  "key22": "Pr6qyp4JzDVLdEZ6UQtXy3ytJ2fGgzJQwGQ5yZEAme3Z59JRRM1vcq34ndHsKtyhyaLG7bQcQr7W7E8F3Td6EUq",
  "key23": "2JkbpLG38QFgBCq1vUN29m8CbauXKcjvX2LKaT336XvTCgFomfAYMSMiYheHXsKYGgD5jgdu83ptuNSZniXy1tqJ",
  "key24": "2XUk7AyRXxjvDc9dAu4RBbeWg71TNpy1JGJTgbCBA9u2jgPhDfweLCP1vjRJBiay5yZ1uABexn9F3sZs6fJ6yhEC",
  "key25": "23BP9z2SL6BwNaHfaQoC3Zb1WW2q7vBvAU3NpPtGvq9r9nKWCb9UXSZQHMdjG4vuQhwrDmnx3HYxDS92bzCQ7oRz",
  "key26": "4GAkypR4SVEkVdymSav8VfnNjP4nU1njR1eFFCxqWL1Mhb9KwazJpu2RakJXM5bEPbBR3EiULuqgQfuYGcVCfY5d"
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
