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
    "5kBBFgecH6VZJv2hSeBxGf514Kc7xpuit7axDZpmW8TcTnKF87Hy6TjTTeX6Uqsjg4ym3qxseySjCtVxEwTZLrju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQs9y7gKKkqbWHN43S8Hwt5qtPB2kSbcPy7Um8qb1hu7NLqqwyzjasdiPRwQWnTvHiS8MT6P6oJaSADBVZ6bg4L",
  "key1": "73koixPCqo2MT5zCQWgoNKrahXbsNfAevowBJ1LoYAKGvfS8FoCf5vFJofsdpTWB2Z2YW3FGoFzrYbTdLvv4xPf",
  "key2": "43iXrDyM8ryVdHkWFMxq1pag3FabQYdFBXpXkBqfv772UmvpbThom4XMFAci28NkAXmwGdpbZuvL8cELWgh4fCVk",
  "key3": "2rc55wQe9rcRz3V4v9DkkU7e75DFz53Hnn4sGxbNJrGRZG38VH9q4ruh5iq1o7ioGYUBm6e7aAAwA7LST5DQZFdg",
  "key4": "2SSZoQFoCZobhXs4jD4tE41jv1LrcwRCZDjvvbFfKGZwQYYkrcNre4a2KzthEXMVWmFWdEEvKYGi9KNzYhzG5jVQ",
  "key5": "4PoZagCy7DpLFsUkGQA1DnXo46YoF4pAAXiRWe9XEWPDRkFca5a7W6UkrYtjvw1w1B4GXbxBcPEbrJwDLJWqiWmt",
  "key6": "4wCUhUNbwqxhCUzcrFesMewgEG7ETdrR2cbUZHBzwBRaVaY794L7AXU6GvdU7pSAEM5YR82sLhJT8nrW652YJqBR",
  "key7": "3bXyFp8rC8XMdWEffG86KKK1TTA1hhZ2r88RVA3LXPrYgzuTp49WbD9n7PC76jeCsk5VLsfwGZeXFBkpKukUXMgG",
  "key8": "61aYFMRD93CBmW4aDJ3LARyMxCfCr83QnNmqhUK87F65uwXH3NG32FkVZLdtMiWL3epk9Z8ximq9K6Mwu9rjSRjo",
  "key9": "2zeqnBFJ4VtNEhtjJQdNtWzRc1Kpp37mE5FWuC6NCn69XNtpFYvKM3oypB8AnNtjvWYvkVuBXhVEDkAqh7XpB7HR",
  "key10": "UmQwn3eHBmBCgQH1UpVXJzV4j3dy9hqqm4o612jyjKxQ2j2G4HEkibdcH6NCbJunj5zGxJp8LryEQJataswSeVm",
  "key11": "497LqyfVEKSe7j9WfqMp4FZLZqhNFDPLVFLo53yLm5rtpuehfmnF8BR7VNQftPU1QpkMh7ekoF3EKt2qzSQGy5vS",
  "key12": "adGUg38bosgYxU7S5AapbFutkd47yUD3124vScu5QoLV4uccbLRAH5RBoFoJwsfoggVHuoann1tF5h4pCJqaf2t",
  "key13": "4tJ7scxuJiu1cLDpv3JGDG52NF3yGhK6T7SFaDcHYpyHBCJDy56vaQFQ4X5rYrScT6iLv97YPQSbPsEPEuQNNA4F",
  "key14": "Dx39EgTwDSmhJrGeNxyXwk5sTKkiZZhDM1HQwjqykwRXaHWVqEgRbANH5fjJSWnBaadyRzYhTAqUYppBUvAT7XE",
  "key15": "5hUgNa11a5s54jbeXWHk2uHNxJHrTXM1sbztyMoLpyofSQjjkW8nvy9NoPRiSdivPBJS5EKNPhRLnwurD6LJ6Kzx",
  "key16": "4uM1P9TuakNz1T92hq5f7zSjz62zQgu2PWGRX1XNmKaDhTmgMsJXu955yen3MLHuW4J2YFY2zuZ7AkPKX22ynsWp",
  "key17": "3DBmxYVHXBwMyxX2oaLTdSwToGjrzpgW3DfY2qgdZFgFZUBYca7U3svQxdfRdu4S5x6xnkZYZRRbKdf71tUaLbXd",
  "key18": "64sZaVPxfidXXR2Z9jrPmHPwcc3BogHix1jWAuWZDr5ENXxct9Laj5dDjGT9pggMXX17Zir6cHtB16LkntvFXxHZ",
  "key19": "2WgGCSxifmemEJBVFRGFsSE4r4ksdMmpZJ5FtPtJ42AbtsXKcwE3rYEpiQjd9mMqbDccfLfnjN3wT9jLnSHcpWn6",
  "key20": "5YgJKV4yCUDWZe1eTV82pkCvkYPXP8nj5gpYgkyqNjmN1oE1EtQ3k1QMRCmey84MBZiUQQpnM4yUVkv4iEpDB1vF",
  "key21": "3xxoP4NqHn8x9F71CcLSf8sXkW9huZnPA5MSBWh64wzkbBwRE5UJgsH3i9iAJKL3z1h8rT5VmzGv9RQKNz6ATuZo",
  "key22": "4rvzeNi9774AVPtAt48AgTmKQsebxThJL1jgMSpzKeUUqXmp9xu2znzKq1obDSrAqXgYAcHpbwnMRmrYPkZcUuFk",
  "key23": "2k9GywBZ7CVb9dyFUGzWAjrdDdoky1Rk6ReTvobVA7bCh8YbsP5tro5i5tu4PBJaXcxuJTfbo3UnCK2ppasoUkFD",
  "key24": "28y7HH4fsAcpuwDdhwudWNUEVBqw5tEKQV54kPgaMfvXaA3mKPTHiXWREDdmagmdYGkMP17WgXMBatT746erY6pz",
  "key25": "58YRr7a3xhxCJZeAZhCATjJAoSHLVjDX1ePRDhL212zi8Qovmq7AqVqJrcw8BeF954L5qGgYHYgS4iAmvJG1fZpr",
  "key26": "2ghd7NpnYqqqtLRuZgg5pqNsiPNePy7qZriuxTgKPtYz4sbVNLfdCYvr3CM45S3RhUQbR83Zt63jC2Vx43PcSyuB",
  "key27": "4Bbsc8Xq1sqrhwcjtUvoYb9LPz4CQf93b9M4e9kuTtwKehmbAdN3jvjvGgS3rfWBTJ6v8y7vtG3j8QAFLnhPNewc",
  "key28": "46EnanyCkwUJWrDHS5S2FZtfdVyFJrfx5yHXu2JgUuRAdk1XYBkzHNcLUzMeZDFHaB4M6Hnp6EjCqCzizX4JgNAs",
  "key29": "35QLvHMaJgRBmsrrVtJV8vERteRc2wWFpSfckyupv81QC4JVPNws7F8XnEMnJraBdNJhwRukfkSmdQRpgGVyhAsb"
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
