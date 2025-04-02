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
    "4kA5J3KjdVLCznYURXcoD1JXFFP2axAJifkDF8zHDJ3K9CutvkCrYcGcP8Xe9fFspJPjxfqVYT1EEjw41icP3pLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RFkCGfgybJLmC6gxknajmt79p3cDH15fMjtbuZKGYGnWV5QWFH7wLS3DXYmaZTLZDJhxuBCjrWgWY6LF65RrGhX",
  "key1": "3u6vNsnYoLu4MptWWgPxshzE5HfU5wBuP1vRgbESEEMUUzz2xUnBtmGenxurhMkQ5TBgBU1kfN2GfbMkVGEBtaCL",
  "key2": "52o5qCD8fP1iXhVNSdXZytC9hXkPtjpjHjj6N4GjPqVv5qpaWRSEQ5DKSwHBdQMUHUJkEoi44cvdcEsb7iG6kqKu",
  "key3": "4xGpx6qhoSsW3Wcbav3J3UYwU5im1iNvH7WabDxi8gij8cFrcfTzagzgqV9AuGHBeWpM9RZiLLAE3JhuXvn1zmvS",
  "key4": "4Q3VdKurBVpTCDRf5avg4f7SZe915Bta1Ajq22kN2tS61MZRaWBH65JiwcEAWXZ3VRmKMzQZmA233so6b7Pfz6pZ",
  "key5": "51g5aARoY99iveQXd3Uvd35ScaBJLJDCdvqYc6St5fpbxbJEifr6sq35Cd6g9GYw3pjgn7744GAZXocHhJBoi87n",
  "key6": "2FCN3Rvr3HaHycjwtVzp4h8ujSZoPKetiGEBc7jGPD4Bnrwh99SYRAS4Hq97dDhQ3FgJjnV2WyHJcj42v9WNGQCW",
  "key7": "QxeVYUS5VC3tFMg7NGmCVtL2p55C4qn3vsyzVDsodhhj3E95gC4WQFVQD8d1hhCqbinyJKhsZDMKHXXDgsjABZX",
  "key8": "D9yyCupCAbNuFoUBWq3pLHLbsn3wJ1hYYFXsWAZXXRwbsYmnuHHVEcPD2vpmK5zBjqNpvKaG1w3ypAG5anmPiVQ",
  "key9": "c1XHdmsDCZ8tiYesbtgQdJ6zLTaTppV2gS8jt6vLwe3myWyuh8S9TwLTctMZSMoGxTMQxrZpydfHcAbVRgZMHvN",
  "key10": "49tjVdtSLREp6TK6J7dVSeajUz6hzvuuyPqXjQK3MbBGDYSoVaHt1vv3m86CxaQ3azTaoemjwWEzXHi7j5B2wdKU",
  "key11": "26ftwqdmcvWHe8FsZkHdSphJtqKXj5fzW7TDDYXidRCqW1A377ZYeHC8Cmb5b8FfoLFPZA5NfbtkVjwz1eHtztZR",
  "key12": "5xU5Z3yHtVjUhSCUzGwzqMUC5sCTEvS2Yaz6mAiqZPAo2yvL82bDVJnJvbtTEp3kb84B62HHkPcEWGKceByqcH14",
  "key13": "4sDy4pzX2eaXsQB18rRyHMExmH5FTrXuKNtp6eXEcPiZnm91cMQBhcKN28zBKL26YNABMNU2Ws4wUqfxrqx3Rjo3",
  "key14": "45uRPJuHm4dXJCHznHdr9WYEAZsHmd7teUwarC7AuSrz1Vk4B1AhBeBfY9gDxzoMcif2q2vBDHuXh3ETh86EpWjF",
  "key15": "2nVTu1mq7KxkuAKisFay9Y2Wy3h3gpckyCLBRiPKD6pBa9gpts73E7EKXXECooZHZ6sGWsHvYiLcBJFQseyHM7KT",
  "key16": "TBntJmCXWJyTDcfRTDcAvyMU7cSUW2jGLo6eVy27ZThEUm7NqvvAUSfbMYc84ZQfcRGYQDiNAt7CPStfMh8wNLa",
  "key17": "2NQZrjcCxcrDabdqAR4csWx5NUk8KPhg4566U3vP7FXE8XKLXpCYdsD6LNqH4DpW7nkTGFZ5ZcoZLWZrtBr1Tc6J",
  "key18": "5P59qvFtRnY6vWiR7mJvasx7kXUwD3qvYt5N9gvK9SaUASdbU4ePNdzso2UAepys4VdVDaGeNpcG1A2z3Dtx476s",
  "key19": "JMoSAXUh5vFbP9LDyvfX4sq6kLgHVQZMMqt9UTf4uN8KSq6Co57niPgMev2u3wPKV8bakUmM1WYAXZBaxqcbagi",
  "key20": "5VcXUnr5ktyraEpxs6kg5P6CtWNH28pDD5n5dYhjG3eBkCfKtK5jW4sh4Pyccg8kxRjxwy6kEaCoArGN7Sar7Hrb",
  "key21": "uwW4UX6ub1hVKmYyakAtmr5K9GeTGBjRusg2v2XP9CjpjpbTjWq3StY2QXPCkA6S6GG3CVqYjBtgRtstEo5KFT3",
  "key22": "2N9s5oe4VFfuiz8gQfQNgU7UvGo9Afg4c6pLradmJAmQwY3qejXkWbDox4kzU28HZodwgdaVvhQ72MsY5vckhWoh",
  "key23": "2YpViV48LQ1xu663ue96YM5XjW9ohkJDrg3X2Rfd2AgjJvYQ6hBGgo7cHBSxdaJyVbm3arLWtLrQpB639fFgr7S2",
  "key24": "aJTYpgK1yLjUYJQwbB4bh7ueDk3d3tZ38Q6zcfhVQYJG8BD79f9AuN8EPdMtckgRnnftkzBEceZFeSCy9feAqyS",
  "key25": "5WTdCQyh4bQDrpw74qpY94qtLpbDxGvgCVhhDPp3pvhgyd6QP19izGe6tf7bdG2B6EmsSvTekeSjrofvtX4f19on",
  "key26": "36WLSaTQ9VCses8MGEGLsV9Y66HQEsM61Y7hJtiGXw8RvxtCaQVxm3aCNgAe6XMToUBUZcGqhvyLoSMn9MuD57eE"
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
