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
    "kbiPiHYd4C7P6FUCoVh3Sb3xVJcmsTZAhZDPREbRKHTQr7tyXhD2c9wxnM86Exq6rwqGwApnB6VA13dQQ1QQ8T9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbXJniGDdBLLpGDGuWDLCwi21KwvSNkM8XVXTWoJQibCqGqxBhdbTu5hgKfDsrZvNvJLFu36AjJLncnUYN7GnEV",
  "key1": "2ec7S34MAiBHKQEZYSeqP41UqFfoe64wnrLjp29C4kVujvAkqUyWKNX85uocjAAni5VjY9BmRw3HsGfEPRd3sPT9",
  "key2": "5jm1AK3srx4kxQ2Do5hVcQ9q5n8Bbjxutc18BuRLtcfVYsNcNkzz3b1bL8AaFF23aaCjXRZ1mYq9281zT5JgHXWx",
  "key3": "5gg3HkKW8sfjXdCrEFzjjCZJTrY526nfpgKDoyXNsgyr8vaXwxoEur6CT9UePXUMW1tWRksa6BATExFo7mDTvnXo",
  "key4": "DSq2Xx5wTrQCHVbjx2qLjBnbx3yi4yyfse6Lt7vWG66w71hNWauweFLQMK8ucFZBmJkYJmdgtJKjVoxhBBn3Gir",
  "key5": "PDgMaV8JQKo7rtxEEUbvVcr3uQDkhDngA3SWhjQN6hzkc8egrDZuYK3hQTs4x1fXYBypkrEvPdn86kkr1QA31yu",
  "key6": "5xTtJj1J4LpmFfHBCt4wU52Mx2bFEb4YqErAc74vF6S8pzup2UBZrB6ixTXXt2UitsGhybKUS39rN11rPGoPvyyj",
  "key7": "3qX4kUZDzuJM9fRP8wxNr4Udy1GTB1a8Ru3Gf35y1M5kqdSCGZ8c1D3TFyHu4D3JL2v6bmincfoD6zy7YrhtFgMw",
  "key8": "4w8USXbpJZNfdw3WjaK2xo2chvLpahQBicFHHdYorbVuahfgPs679Xacwj2mHG2xKKap1v4qxTRpbkoRDNYkf1oH",
  "key9": "VZcT4BBzM5M8GDjbUHMmuHCMhCrShSYBDw6eK7XKo6KTcHT1Gn3y4MMQ76FNSM8uLRwMGXQ6JwPrre9yFA69DRJ",
  "key10": "5nojLfr3uskB5wbJWFAWy1XqUoNbLdt7hDCzxfPS2ZMYWRxVUFZerePjHAN1UXD17joVHJexADGZT63cucUfz8Bc",
  "key11": "5DWGbWwgLctheTuNiDtrffVqjHsy8fPrVFCqu164nevmbkJ3ygcfEbWUSrwFnJTrQuLZswWUkB4x6SHpQ3Jjbgpq",
  "key12": "2AyRvD6LZbotMP39Fr1hAG97tSq6BsjCJsjJKA1KTB9qVhSKVBybaXw9rWUTRReVqpU3zLddpXJL4aXvbvjBQS6K",
  "key13": "3BVNzyre49hk8mkMoXLCBdG84aKhfSLLTx1STngciE8GsFvUdaYk5Zq2qn2MSWxDxVP4QeJXSQcTX6AK8rxMRvj4",
  "key14": "2FVmxWLnvvrXvLgda8bTeHTKWZw3vUjk2hNELph3troRw7GXz6uAcGcKXUUWkpj5Vm5qWkf1nY8huM8Z8ApcKrYW",
  "key15": "2kfMWttF4BSjs42ZSmRKLQ6925w6AqQJNTVZqbCws8pksF2FFSRjTqPShPkXHRLNPbSUpoq4NqzNsS5kZPjN4wYp",
  "key16": "2c5WGR5ip8t9YwVYtTp9Rbr2PvALNF45UrUCc7BWP7GUHfje15XuqmEmBWUeRjGJ2zSYBbHcv5eXA1mXnNYYW4Tt",
  "key17": "5rxu8bU93gKk4UZSs9sj63pFGp2vpQBHShmaBev7sgKrq9xnnr2KAnGc9xcuiBpQ11CEZwuf43q5BpRmqdqgejwY",
  "key18": "4jJfaV7anqgLVWaCKAs5Wh6s4StJW7hMSs7X2MBC96gg3dGiMSA2ToQQrb95r3TBRw3J47hpAjYwcwPYGiwZsDrg",
  "key19": "5Yvh21g8gKQCSnUMzftbWwk6TkgfJEfixRMxzVGhmhjwwvFV6cEpX33KZs1xuFGfVsb6usDJsBWzZMXn5LpBPyjM",
  "key20": "4fiCsmdSXWK7SCNrSCw7PEL7h6Qzzy1H6Z4T29vuEM31pZ17ScVTKwv4Mu7fRkNdW3gBWkprHrYMmzffBHnxztnd",
  "key21": "65hJzxQ1zgw115yf8FeZkdS9wrpvt59y8DuUTVeXVws6BuVeXA8buYjtFJNX7aHyxXLV5WcoUNPMVmCTX38SjNii",
  "key22": "3fxGw6G5XLZetYgiGJPsz8DxGWFxUerkfzWvz8zHN2ZNbxu9LiLacmTzSXKYBw2rCSRLT6ivYKnxreYvNzE3WAmF",
  "key23": "2xGHXzWCPmdpWM1N1UDwuGz7TekwjpfQjU1wZPpcTRkHXJifV7NXDUwUF2Paqtqa59PiCbB6LeayvtoAyjFsWrFU",
  "key24": "zjbXcNQGrMUDqzdaEpPhrJ5zYXN8GAsZj3tLRabu7XxoZwSNz4p8YTnFjuFqrCFuwHc7ftaH9Wo1z6Muv7MXg8V",
  "key25": "3M4EGxAsT6eYZeGSbN1DFJVDfEUmaUGi7dfVdVphLsLk3S7P5zMwRKJCi6Crev2NoX4AdaHh43oQeE2GWzAdLjah",
  "key26": "2gZPVzHSVTh3WHdfz2C67UzLf2VMkPN59ex5GU4L7LUanWZG7AZ3fJUXDM5H3TDT5LDDWAfKNmQUfBwwYusYQXVh",
  "key27": "4DberSXAHAZzrRdrqUZ7un6TxW86Bwwe147ftPRqaS9V9jQAFQrYP46jk49yBKzTds5g5yBq1cwC9WvwpYZWS6BA",
  "key28": "4AZ7F7Czv4WjTB53BtuMHDztgefKNoi9GZJ28M39LbuPh1MkzffcMTs2nXko5qfK9ni52H7a4hMdiGZTWEyPdx64",
  "key29": "54gpMFCkYEUAh63KqqokPfgxB5WWBCQXtam7GqSAwq29Dg1bRavKbQrs2dvwu9ZrQ5CsR6o8Q5kajsdcYfNPWsCv",
  "key30": "43vg95AUmmzCH5Er3oea6XyT679MGHoDS9zxpeQGV9v6bfXfTAVvq6QyCSze5JtPjikiVEYgUbJDB6JDzXnZgcqA",
  "key31": "463VCVAa3kKWq3Z85cisJ3m12WgBZHNgCYdQoh8394bf3v2135PBofchEaGSSwkLpv89MrGxwfgZS4uwRz8aPiw1",
  "key32": "EYkE7TsCz3Xa1b9KNxzRPwt77FRbvNyRWq4j43GGgwPRsmPLrgWngpBhtJhAgQYQst9AaGGnvzXTjsFEvmzduA8",
  "key33": "2yUKkvt9YUiUYg7JfjLfPpmdtG9t4YDvVW6HbNHhN44vVo2wJGphrZKSCygjLxVbRTFxEXc2MJZSG9VmJ34GSND1",
  "key34": "3YJ94GaRW2GnL6Gd7EhgKqi2pZJkc2dMat6FEDWkmUQrEBFnuhqtuYsQvc5pGgLUERS1MDyeSXpRixWNJonxLTeS"
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
