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
    "4KQbD1PTd2hXAtNTjvYjv7AeJqSSTsCkVcPbRFBhZkS8Jkgwz6aMMfNckq3eLPZTcGEo3Y9B7ZkncCwvgNScuT4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dwcGHyJcc2KiduVjwSgywXeVax6X4c1RRJvJnQ2QV3RKdqdchArmRMahDrXuX3YBVj2nf77V7rK4tmCREC295a",
  "key1": "4sdHpku22ftxnM8amUuYHXuNkRTo1W2oDN66AZ9SNGJbLLWjKEYyWBu8ttNDWSPSvDvRACyJ3eJkBnR5Lfaha6qE",
  "key2": "2gk5BAzetHF9q4sYYbDNNAM7ptoyCBFjnCoZQi42EkaPN6d9UDrnKtLHPidXsiDEsAntmvuSHYEcmJqo8ty9Ppkt",
  "key3": "273zk6BbEZvhVPgv8WELLKpSjLCDsxxHBdgYABQbnANma1aXrbBQjWgcWQUPKDchK2HnVeDDmXWgXu1kaTP7Ym3D",
  "key4": "Qr4bJknVTcVQr2ekoSS6mMjmvX4pbnYfacFZYuYT8ciKsUiJxf5EdVtLF5UtNHTMhW6n4BgVUbj471H2PbeaSx6",
  "key5": "4eZzLkRe7QUZYz71CQtVoPk9TRQj7SU9XKKxccGqeGZyLvX6eoPeS3bby8pDFjGgeSY128zmwPsKHpW3RoTTgrk2",
  "key6": "4K94wm7B1SDGmnimw7aBP2mAbGGKGjWpEd9FUjCii2Hx9Mo4FTSnpAY7MSiXVUgvJSdxwXEda5GjgvR6hN6Lp9c1",
  "key7": "3CoiCssJSWmmYo4nHZzfHMHVrYtcyogBHUDSq1YVqWJTticnGp4b83pFBfAvHQ9Z18n73RkMHf5oGfhDNe28XD9K",
  "key8": "2K9yJExdFyBZXKLGPdZzQWCPqKdFeQH7e1yFJVtTDzbcYJ5GeZ5QJ8j6XvePwznqvnBrmnub1f5QDo8KLn4CoGHU",
  "key9": "5baHUVgFJmQk3zrrsDHBCcaf39isURKAzsoADdvVHKDtDaFQz2hkT8pwJbGXZDP1e1oLyeYnmjAd5JDYXp6KqzMk",
  "key10": "4xkyDet9g1Fqb2EBfLZaT1UJ9Uw5STjfdBqGJhQu6REBwJztB3YavcnJsTY9Nq8BnC8g3iTXnZHhjw71oC6Y7Pdt",
  "key11": "5SqyYtrVcuz5TnqWTBN3btEmk9gXXrFxy5Poq6KBiYr2rCBWE8qJUfJ16g4ykJKWv3KLezG9Zk8jemTVgQfBs6jn",
  "key12": "3nTsqRM4QYqummqMW4TgdotYxuBGNWUCccdkcUGL5WvZxYX7pytETNnFg1rJFPcYTfAhTzLe1Md8mXdayPPnbHZy",
  "key13": "3eE4QN7d91h4JKHZwZ3M7HUVEJ6cYLnLjtyoVJBupatNzh3zaTzqzwpihwfP2ojMD5tUfASo7S337b1DTotAkgw7",
  "key14": "CoBCVsgdtGoVp3GtiYW9r5UY7AYmhPKUhG8Bzsm2J51fPrDtqgWfaGPGbHdQpSgAYwqkCSGpXCgfKzCPBjV1Hfo",
  "key15": "4BukEz36tJKRyK4empt7hmUQMjXpYrmvomA7jLoCew1pvLA9oUFisWxZMa5TiGZqtS7ijiuY5rkWLD8B7Gzx9DPU",
  "key16": "2gUV4EXf6BBie6MBR58ZfZPRsPmF2BVfP1QF6q623yvaPbahFK1Kx9rJDy6uH9g57sWRYwEi6uESxmmScUYhLqsk",
  "key17": "4iMmEz6331FEF6669gDtEK9SevzP36rQ28LbPAwpcXxZsUhKj4czQB9kahsA9dXA78LaH2BoSeGpr5f5tXwuBRK7",
  "key18": "5Fzh9DHScou4XRCio2pG4zTiaL8PN2scDU19EMiVsm5U4m9JD9g9qxS5k3zVuaGBVrcm9srqZicDJkug6WiwrodD",
  "key19": "vp3mKMFFmnyCghoJBpfLz88fGfwRg2RmQdnrmud7fgMd9biSd46WoULq6DvNLqThWEEqQ91kn2uTQGLcCjQ9Jqh",
  "key20": "UEkk5Vx9WTg54VuCPEukVz3Kf3zoRm5gGV8GGdyUt3oNbhbSDmaDmLD8Ckg89tGGpbVLdPVNqRjNeEXKL9tPWXm",
  "key21": "4YpSbnDaHgVhKbvT4DPkMU45Knj9WF9V6Fdsz3QVh7oG9HNNMZMoyYZGpyd7kwhmWGLXk9PGnHuEE3WTFfgoi7Xs",
  "key22": "4oLJ8QyJzSXXVjo8LBYZrCzup9vp4EmjhMuE3BQfSsH8jFWwAb23fquor3SYyEjnhGA1tuStU1hgWxq5LxEj5HfD",
  "key23": "4fSstiQTwCiv7fZgS9qVsGxt9WFNaBpxzt2kEa1pr2CbvDxX3zbJFvsgr24q5PWJQ9KjWNWwG6xodHoA5UHfZHKp",
  "key24": "2yuR5HhEv5vKSqZqeZWL7HoELH9rGP3vWb122fgebwqqHj8eg38BPcqq5eetVRH3M4QSyzdpe8FtKtKYivhmbr19"
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
