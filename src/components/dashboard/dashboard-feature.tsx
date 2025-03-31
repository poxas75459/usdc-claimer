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
    "2Pdk2bVCTXb99vpYh381cdHE3CzJgrPaHCkLuZKuNH2BhcbNtjUmpxLP42w6HJRHGY4fGZWDpqS4xpnLMhWzB1sG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WfbNizbDkv8F1UGLHWTEqeD41iQQaikjkHxsmrcRUsRcW9Ynoh7CFYkKgQtwGZ3nvypfXsoCJvQX2BUPiJ9sr8d",
  "key1": "5atGesxLe4fLHeB5K8HqUuT3QkPZohyingvaZBg8oXGKUvTjEYbch8yuA4SNEGosV5Rn28wt4wGVFrYVMZfi6yvM",
  "key2": "2q3cHrQEHRwp86KQPrtByXiuWg1XQJgq4NZwyKZkgwhNtLcdW81xMi169QHmKMkGPR73BNWJdkPKhpxhqpcaKSTs",
  "key3": "534F1x9baRNtvEmHbWAH4jNhzQLHXCg4TmcRtdwvwVgPRx6iNDmoPmiynHJ3jYMwkFKi4axrm8rftAo9cR3LCtYq",
  "key4": "22zoVWK948vrbNZZK3xPa4UNf1aovsEkWzZsnxsVSi1gDGZPH5SMvCFWbBvAVpzLNsJY4WqtFSh4Ztz7Lxuzv8PM",
  "key5": "35dkMNFq6fy8dgm2f1mkx47XxKk92neihgcGjd6GaHmXWoV9ydXQE8LLj2haKzNDeSGRKtRKvoF3msHVUmWTfaXL",
  "key6": "27FdCbjM3rSYKoc5tVwRnBxr5ivERJixBXpgQcwDPX3svGAcZomP5VBV6ftWPgaxnuMGqMm79yhVxGsJwVF8JXE1",
  "key7": "JWY7jLbrY7LLPLLJuuksjrHCGMHs7UQZaQFEStYdEk5tkQXqbAr92jtBrVDWxBf4VVq3uHP9M9KzixoQiHPCGjL",
  "key8": "2N52rXoF6Puu7VuHnvM9hZBHPew5495dWjH1V1dJA28FYoB2bEeXGdeLzt72nzVz2bgfv9Y2rmeT5SsJsLg5maXr",
  "key9": "5iNyL8wRm1NjK9DYcHnamT7xNjBNNHWBV7CJnf3f1VGRJwy8ueEShoX1EurHrKbSAhDjQARbeQUn4af1w4X5AyVe",
  "key10": "5nXJRisjKn6PFrDKaxd7kAGxYDD6HBjFW9sxBqSHvEf9xZ5cc5Frnc8xCtGSwgqLJ4s52ZCzmRxPEDd2iG4RWWs7",
  "key11": "jG7uYmEtut5MCd7FUqHRYcBBAPKeCUhchPfwj25vgiwodAbKZN143dsng3pWrmSZyb1uwy8km4jkHHBV7CVe466",
  "key12": "2Ae8mnDmhTrftdrUuJBKcE3a1n5mEYHqYZ6dTDqVf4pcc3KNtgWVqwyYdCFXFK4GFZ5sZ9nJQAjSnJzq124NPC5a",
  "key13": "3d7fequGk77rx9Vag64TyH8q3K9FYgABtmNKtHZHR5HhnRRYTkKZW74gzGbhL9EwiwAziNnzFYjVvfTTZ3ZP4bXY",
  "key14": "3rS6iZZY5WfRxXZsB3YQzuCn6G1NRsuw3743JyemTqW5csf9gMsWowkpEHDqncYgBnsoJTuN9Hg3ARVPBoNqZ1dc",
  "key15": "545EZaGnyxCEHBwrFuj4iuTzejckux3cDgEGdhuBbdsq4o3R94dNCBPakXXg53jQhZ7Jyk22UU3unWS369xmGoju",
  "key16": "5QmhZfPBmZnYiDN4RmGxFVLkNhzcQcVeeS4izTQLBEsYX9eLLwzHF328pU2HxrqS8tn5zK9hk75dtv3Yzbm2WWMw",
  "key17": "2Z5E2BBKSuVvgKmTgLeXxhLZ5a7Xge4rxi59zCjjNyuC3SJDF1Nx4SU7oNvDs3PF6tVoSxZazz921Py7BK8Ja5jt",
  "key18": "3NRLVt4jxaMsM3RA7epKqc53zwnxQwMusxHL32jBqVjhf1CjzQGvgfc14TuEZ7VigtSZEbzr39qmbcLdmnPttwVi",
  "key19": "5rrnmduGi63UXraTgu3yMe7rMhiDGehE28SxBcyvCqtuFij2fxZqu8p49PU7Fqes5v9tSAkXnB5gntXg7XvmfHHM",
  "key20": "WMpXsD2tp1hN7TS3RC9NnJ5yiewbimi8wAaS6DohyNbBeyXi4bbMcfa7fT1uD9WgWFxCjrt8CTKjhg6Wra3j58B",
  "key21": "5SV1G3tP6vigF6F4qQAk8gP76rASqxyDHKEVUdiNpUS1SwEF8VWf852tna4FqRPGnDZwEpwrggVwmUkScHUKNwcm",
  "key22": "4GLJFxjoRHayCdCMDSDapsavb6cURkvoDar7NYNLWhq2t7Q4dNecAQKPtPZpjicGzd48HRG34Z9TPneJj6CV5V8W",
  "key23": "2N5ZpcLxsBfLYK3KMpWCqHV9U2ZddsJqEXJDhUV2XKoqTeFphmh5YVBa7ffJWjFYVuw5mvUJznjPybiaKaGp6eDs",
  "key24": "fKZkE3UqF3QZNP2Qoj1iteq569nfBgXAjJGEGnTKz372VJgtjZu8HLMgG8nqBmEqXHYAPrLJWXiLysa7pd8awQT",
  "key25": "5BXgAswWxo14kPXFAFz3NU7a7yxJVcUEUh1kuJgcAqJtHzdqc7MRMh4gGKDPVXRAm9LKmkyRwnVZC8w8C4XAixoA",
  "key26": "2ewk2SBxvBaCckT1954xZjbG14XWV4RDN2sfJSMtJg5voRyUWwBBsXYcVXBycuF3qdR3oiQHJoDJ9wEEz4kCzQpn",
  "key27": "5oaYxn8CUMxLqMnx2TUobs3HefVkvmkAKvCFkFHpN6k5uDwczpqzFs9DQ91MHdjUECu67BdLmznwXCjninEtwYye",
  "key28": "Ptak7fCZs4zueMoCEocvBU7sscvtXgtDmKHny7c3PbwzWcCnFDP2ZL2b5EVty78FaQ4GGSEy82x3qLWyKrzXAKP",
  "key29": "64MbtWo8wJX8SmapFwoSGrMz9WhrAG19y5a1cAPqUd6mwCwnGN6HCZxZPgFPnL7y1UUNjwbKBGvhoXyqG74wjkbH",
  "key30": "5spqDrNoFKBv1YajpcJpMnmzoHPXtfJdFWXRaqRiUpxp865pc6j5cFLRdKUqNzdbBzf7jNKi4MwfHcc743Dm2QfN"
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
