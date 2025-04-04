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
    "7GP4giyFfsig88FRmGbviPjWYofKN4qdrTEdKUeg4xuaBGcCMnqDnxs13sURAJHUzY4yqbGY6NjzH32ApBey3zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RrJBJM7FSZWZx1AHvUi3gJwCBUFbCHPEGnC2r8u1eFyMZZWwyVx7WcmksmSgbJQRiP3x4SQZ5rcycnrNptiessy",
  "key1": "4HjNgYdHC75b6RgaapgYPJzBVsTJoBvNCMZp4EBn2udyoLvR63Watque5zBJVYVAoeR2AuGu4E7hiuF2idUYSLTA",
  "key2": "675THLBa7vGUc5SMusPFLFdCDt4s1Z4Sgu2nK1JamrwzSx87urWNvZmjFPL5UoUKk34yoriAY91ifzd938ks48Dq",
  "key3": "2V17YR15iVPSe1heNqxaCZxvzaQ2XdWGAg1hd7FzWePqZ3vJvGMU6GEeg5dP2Zezh8Hv4qK76kuawmLGxW7pqNV8",
  "key4": "5KqnzZkP3GLKf54sCuDv2bLpLXjng5u1JPGG5XpegpDmJGGhkwbn4oJGoEKVgKhk2BJRZyYLR1goUMLN6SFEX97r",
  "key5": "4wEtktbcspgsG5mc2GCvC3Bg8xMnFJgW4aNnzfYuUmGifFxgXRjL3tnipeVNUvhRUCpCF63tz2Mf2YTas7Cz86Ad",
  "key6": "41n5NMSNYE2eerL9CjYxirEzU5cjkFupUfxjwTDHP6214zT47kTLpuaYW2eHHRHBWUFUFNhJkWZA4YTGbAWuqBxY",
  "key7": "499N92KChyR7N5PXxPt6CjEPafT5ZKmnrWdXzpTo38En7Q1MRyzQCz1r7fJkHwtnC5S1hc7Dwkki8J84Wm7M4GCj",
  "key8": "56v8qfZ84peMWEcKxLgAt7DRmQxUTSZtRSJsR7Ad8Tgt44qTmPEDCgHNHzHPLznwyV6EEk1jGrGroT4ppizPJJGT",
  "key9": "4iyt6xb2eE6VxVBa3hSw5CaAMmebzThRJNcQ4Ac3MJRJDJogAL8fFbeVgjXGHt4rp4yR98cCttKVnFYPxVHTAeCf",
  "key10": "y6KRLKo3nEEwRZ5BZipL6urrRkgCprd5p5KoaSCmZhRFMvUBh1EowiJuu92YBwfy8kXNZhzWrXjTXJg7vVrC2jk",
  "key11": "nvaN8sE598hygNWUacLZn2SaaZ2jSMXNj3kSf75usSc6zxUYtuqKC2dT2QJS87ga2U2jLHvU7X6DQkmfuKardvd",
  "key12": "5eLJtgHAMNPk7cFG8VUQNFAm5sACnrE9MWmVT1dNVBovJjDC6DokzXMNFuKywQi717RAVPQ85mALexCXhuX2cLPs",
  "key13": "kxuuX8nv7C6s9cLMbmnY81RXH1Tbe1pJFT5Q1vNDw99PLrsNxoQ2xmjP9SMi9gAgZJn7TU6uMr8WDeqxRLApHWY",
  "key14": "5GaxEgzMiKsAjTS9r56hWtJiq59hjt2Yom1rQFay1gAB5MhauuBb3efwXenFdujoXd6nnEEiLD2NxScD3Hdon2pp",
  "key15": "5K5fRYvgZNHVSv2KJbtVTwnoAQkqDew3jA7VuY9ydjwwvsYNUxg2VfFGxZUqtTGPv5Qn7qfMFQM7gfcjTySkhXUd",
  "key16": "3hzgYz4iPPDGCqv2mbxxNHthex9idnGjNdWxZuovhZK7QBz63CByXtUSEN93XTdZrUUjCPLUavHUKMkcUPufCzYo",
  "key17": "Xs3t2WeMc6Q4XNdRwNqG7xv8nFwVt7nJWFSffv9yED5wciHMu4tgUxbsJRYvJP8A3YzrH5dH1jpYqydmBwtiLm9",
  "key18": "yy5dFgJu98ZVD7FCcfsL9qNMfxviq9xVmUckP8md1cGgghddECNLFs8Uccu2mKWEWwkRuXfThHdDNZD4vLC2i5h",
  "key19": "384NgL71KSCGTZC3qoASVu498pZFXp14qQivMDZa8FZzBvdiLcXj5gTdLBFdoPCuE3U4bqmTuUMesTqF9bc9fgYX",
  "key20": "mcBv2Yqh9dps2WYvNPwfozEAJDaq88PMwSt7y9sH2Xt8hSdamTGULU8LonapMAm7B8AVETre3zRve9AQcK6KWH9",
  "key21": "4aH3RrS4s8uDC5y2UeRj4CYP1EBRnrNZfQ3fUXgQmgPehpimDmo7qGDaq9oq9jLYFpCgzuL1EH6rP4VDevP9tsiV",
  "key22": "583AzLMP4RjSxUz2uo6vcsosmoJdQ6ajVzRbmkFjQYVwvzHVDn4gsHDRkVKcmzrbKdQ45m8cGwyUuXdWbHa3XjoG",
  "key23": "4HXDGPwQZRkE9PHTSMjPKJ5DCvqJWpR1avchApCLMwLxWz7m4J98FEoFZ1eaDeNiFRorstpnFjoKXjcQ3U5pTey",
  "key24": "42uUW5sA2XrNp7w4UVDgpRTvAGy9PkbJYmhFQfYoqBEnAzezecrs8Vzj6KGKksJztUX1ZJYRru41SCAJEzUWLNkr",
  "key25": "5sS1nDGtYDEs2mdQdjuSDUCjhqoiLFA6xa3PL84s7PMwoKKnofDoTRdZDF1Raev32iXaXaro4KHdnvikTjnQf75h",
  "key26": "5SfNA7PoDmThLcCra4bbcqL312Hjw6WirpMoXKEMA4VtTmrkS3RMGJyXBe8KXpX2DUJfKo6xsMWnwq9QpMGnn3PT",
  "key27": "ak362frX39ChhqghewLn3hxhkUMLrkseoJfXoau9o61oFDSPU667wg3eoqwaX5EtaJCyuRutE6GyFB3YD581pxa",
  "key28": "3uqq49cE9Ucn6d5v9HK9um5gbNWfS2SHw8buyQWTJUy58BduHk8kMyLtV8xSk8DHCgjbyFWFAtp1U7bAjPUrZfG8",
  "key29": "5CHLmjG4GuvxrhxdY1PiSLkCn8tNMmVFxSi9zVcsHk1x8rFy1VhyFXrUy8Hg86KFu2az9UVXzsAaR2jrGRm43fPd",
  "key30": "2v1kPLrHoanUhx41PqPJwm9xE4vAKm6WSiDGCfDpE3jzP1ZEPiXrkMWCbDG1WoLdYoah3aCpnnRG15AHisGd1HGJ",
  "key31": "33UVZHLyQVpHdERgjBh7fwBsnu1YZjy7wiZW2hfZvoLXs1yMJ7U5qNWcWfaDrzYyHBtfxxBa5vYWRHtLX9DsqUEY"
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
