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
    "4EjbU2LQ9mTSc49WFF5D6LbnGBb7WeT1LrRepgjLL93KR969aSFvhuasoxbgTJWF5xdB5mdf13GTrReN4Rw9eqwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56DzALDjR55YnjM4adwG2LrMy7cXCxCKjhAn1pwozZtGpJx4R1stdtXZUViHGVtfLNGBiSoPQXjQ1xBYFiqsuAnr",
  "key1": "4g1tBox329SvtGb5BuKBMsz5SGYhYE7JeevRkJj8VDvN7ecEV8y1MQxSvGPmNNfjFjMSntuWPLke9mVDPpkd1fcU",
  "key2": "2AUkmaNQCPG8rrfenNzGNPaNgJJt9xiC5hAZbiypQ3o7jqrQNtHBwCa64AYfYZPr8CAG9Hj8hTeXixZXm3hvCuyy",
  "key3": "27WfQQB1eVzHcZveaoQNBSCQ6jAJgv2hBRVCnrMJ288ihT7ojZ64SS4CGcjpptuBd1EBqhWBcWWeqQnSjNkegaRB",
  "key4": "2p88ADbRVLQd7EyJLfKRUzXXqAF7jprc1Cpssd1bDrwNtzjUKYa3v6pVhWBc4FeXK7YD1TA2bGGYaDACoquMiyoS",
  "key5": "2Z7n4jr43ZGNX7tN5ZthKQDrPpQJ3miPx1u2yeJ2Lyn8EtHxwAQ9m8ZNyWFtaQMfZjJGZWppEevU12aLzkqsS2jo",
  "key6": "2HyUxoK8ME8vWkKbwHgx1tennFHq1JMZb7JQt3Me6ESLUfjLxUCcDXxquaD4Kh1EhXx8ddNRsedRFGkVVMegjAnS",
  "key7": "5ayF6FMwCKpnVxJx9jGiwL3PGodcdq3AgHgGtYNUJEEq9s4scW1vrZwneV2pTtRRUU7kuGJ2HzMp8YvhpRATWawH",
  "key8": "2SK18MZJyeGrqBGeceh3oUGGkvYCYqfpWMsjWVfopra4BjTaVA2fNrX4v778KrU7MX1JeJDXPVFPUtmZrM9172Xk",
  "key9": "3FFJAb5CKDPfRXa91KEBT6jPVNsk5fLmFkqvY28KTJ14UWR9dTzioNAZEkKBKsFjiHy83AdYRhM5eU47G5R2WjD",
  "key10": "2Cxg1TYxcmkppMVRHzRvMMC4zbMCVwhBpkBeKaegUrrzkWeu8MY35t6ZQ3ntX7iUaaWtH6mKWDGyCZftkEF6yb5L",
  "key11": "2X8x4rtjc86PChcFwnVevwgmwkvoLfoJ3t816nqUuetMPptBNBovRHL1cEQ8EaTvxa5xP8Vw5M3aNxXkd8t6bHrK",
  "key12": "2DPvARPTVgAvVrBTSZXBML6uSM7KXPKS7NHtBS5fB5j2m5RCzSjWBobHA69D8EsSapMegC86uAZ5hhqhMKBuRXBF",
  "key13": "3GNhrVDjuPfkyEWrS3BZu1w4ESnh5Zr5jm5pbL7BmjauzF9DrgzsCbdLYCtVwWNqVCuiH7E7x8cuytjMZgdM4N3t",
  "key14": "o3298mmvRAtUGf7h3u3vjSbYiFu8gZsvQF3JKno9KimtNMMiSUMXrDkCrA5PYopDHr8oktbaCbET225saYEwciS",
  "key15": "3iJDG4Uw9KAzd9mcHJtJfuTHgrwo4xxSCyDdEXAR4mvhUihcmYwYTS8wWmXoM99yb9VVhJg884dpKDnBYZZBsYvx",
  "key16": "4eB1ehzikYT58ymWbeLoaNHHZ7PqJ8Hkayc8pzAzPqFd25S77YnJJhTVR8eu9c96PNmsovu6BdUyoaxAQPnUa2Cq",
  "key17": "5XzL4tE9yvzemH9rKei7hX4o85xPueCFfABa7a11oqCht66vZ4zEnNFE92M4tiqBZCkTmRrCYBtmQWL3s6ES4Xsp",
  "key18": "5yXRBo2HnruWYMVXauhJZgMhu48qVyyn4PGEYtAUeHKygopmkMPyB6MZ9KAHTz3jfccvin1EPAZ1CwkUWe8bHpd",
  "key19": "3wBtnfAWfmDUMhbR2JNq91Dm6qqyXfXm2pGbqH4ebhj8GxMiu1hM74uHh7JtnQY7vjspM9XJE4pZtz1hbVpuUqkU",
  "key20": "2rBjjTyXgRoab4KDpLtTXiR4LWqWHHchraMMdZ5NVppCLT7bsFkVnsC7ks2CsvssHBraFJTNc3CeZCVabYt7Bi3Z",
  "key21": "2fNHGeXXJH1CZ73NFTK26rvju9NjmtM1T1Vtz1iK3i4oWKy5xYGSuCTVNxJy41KnLpp37rZqbeKToET28Xn3SzsL",
  "key22": "5zbu69ygqiywRBjHtd4NZUSXioBahVgCXQjpresgYkycYvNAkVnts5Ya6ifJPmPKsaiGs1jc66okjAxgHoNqkgQr",
  "key23": "2G7vu7G4dsFiVCJrid6khimHh6No84pxh2gneucBdcpP8KM4DamonEYGMWd283z6UcFTJ8rj48Uwc1wmVXmSA1G8",
  "key24": "48YTyC8BzgqCnnAkGSeyCmXA9ebpHGJnjGqyJ2PEUijeiAY8WQJPsZYrULBMkWGa5aiAx3rKcUfhHzvpzoc4gb9z",
  "key25": "58FHmgTnQkJBJxALiHgNyon6bYzwucRuhF8meh3iUWc4orhUNfhyxMdHGaWrpA6teXe21iDr3yhj3csWQVhMzoy4",
  "key26": "4pYMn73hYreQzgEvQL9UE3q61AgFhLfrPRvF9o2uP3JgYqMzT9TedhLTzvJKuvK2S6SApEQkjfB327brMnrxtY4j",
  "key27": "4e1vTfJQQiHbjWDQmwPmnx3rCPwEQoj8S9MLd7HqUmsQgoz3FptwDhCShXhd9LJKUQdrE7sNa1tLijYnUbcomVyn"
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
