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
    "2xSnPfzPRypHMgh5qkNAp4nRdox4oygdUH1jsYHLxbUFmwTkaiY8xfZxLBkpvVTWk2hqSeKhigqTzNh45ei88JyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Af7NwCvQovgrFScCgtDEWzEbPJLGpRgVvfnrdwqPKL6BMpXUsE1yWd6wejzpZ9o9GvaxiNbjrMx1Rioa2BVN8mA",
  "key1": "4zDRvfs9Qt6RRfNfdrJi4h6kjvtsXcZSQkgp6LFeJEKjYh8LZWsiVQR6iMPWN8HdPzN6pq6AyMwFA9ceS3gMt3CZ",
  "key2": "5mUHpK9N7hzyc2VH6qdcBtCR6AQegM3nQTwxKefW7s9Xwa9X5FszX8DSe2Vk1gkFbmQrP2BZRENikxQyAAYQBD6h",
  "key3": "3BFi5RmGdPHr7f7vim4cngrfAiHbJKCMUkyFtSR6udW2G2MrigFwDbbV5XhcCqjdaH4f2yd1zAJBtt74AZeKKNT6",
  "key4": "2P4t6zWDuNmMoWqpsdjytauXng6nziinMVp9wwqz171GM5d5T67yKKeNWsgaHyfHqnU5Evf87CQWjrDCQ6RWHfYf",
  "key5": "4MeC7TqikUm4s1QV8SNxLGBkdjgXtqZ4bFCE1iN9Nyq3yEJUcwsDCQ6Q2cT8CwvsE66AfzNP77tJ33AD1j3k9gw6",
  "key6": "vr98LdudJkcUoa3Rrde2eabRKP8ofejgW1CR9628tH34WWcy21p5B7gMutkiqkEB4DEtMyf2Wm6gh2YjJDvEFCX",
  "key7": "53xmsucmgr4WbnEnb4kstmfb1eT2GVvU4QNBBdEfVztxVe6vXtjZK9NvcqJcyZ44deW1gMPv5DuRFxh9AGGruk8i",
  "key8": "rQ2qjoMiEJZhrjwiqyX8h7kkrNTkNLzRNMVAvpWvHMJzcA2VSyN6g81pXD1QqQd2bMKG4N8dtkcEAQ1zGdeWHPQ",
  "key9": "NF7usUVcuNzjThwrGnBG3pJmyKKoPKy5tscwhTEKLUG9rqrWDMbB8VijTfwgDeS4S8Mi2chav7bUwqn6UzdTZFG",
  "key10": "JHSrTsZMdaaKzGwKDhq3vXdhyC9sa6Zk8B75G5ovJWNW42QvWoxYLiW6MVSTmeUS1qbjsi6jGJiWVfs5yWnZ2Zg",
  "key11": "5G3JoXsA3EP5h6n13DdqWpMCqxG9njtUXAMGYFGzxSGqoWi7deBsrsYU8o39NkeC9jRHw4vt1zQaDzME2YS1mgeM",
  "key12": "5hZitx6RNNxF1yPM1HmUPbHTwEwMZDgr7LDCUgHCHm9U8c5p5h4TFpY69pekP39z1YGs65D3wMxdToRxWmyGmaxq",
  "key13": "BUff8qPrdEg7aYv3bqTfittvDMTrFhmWxufE5BZ8SMfCJXzU4xM1zD4J1n26nDG3DfzkBDNJVtnLfEvzqNVzzSb",
  "key14": "7Sq7VB9kcn7FiQa7tZuDUhtyCabquzifU9sLjGuTT99VQKGTZQcdXzvsFCv4saqB9ZP7hytEEwbT2ekU6Jy8RRA",
  "key15": "jadszwQEPLSDR7Nn73wUg9y7VzChQqpqmzFpbsGBz8VxK5kdjZVnoKdZuaWAmZX4V5CcjDecdFYvcCYmxcx1Q3c",
  "key16": "62UyRyPVtpsQhDDeC562sNTiZ1cXw5FL3Fj8QFggF2JYTfBw4VCdw6ibx6xnTgMBuKa8EfcaKKTQWjWM3CA34Krg",
  "key17": "3o3wuyJX11SpcvnkY7jYBSBiGHtV8JWR4T8joa5UcHsU6RxcpYGhziMAabH2Fj7qtSAAEp1R5Uy5LjYfRwPwNCTs",
  "key18": "3zSGGXS4xbkQmoKaD3MXKwyFqaebamrYbgkufN88NvPm9vroX3tnVNWxi67wbn4zKjmhhdfAUbskjCrwPMGJmyaf",
  "key19": "5QwBgngKrh2heULj7oJgvcFsLY4d5gutas5m4ExVaJEjWv4YLDv62m7eeLFUkg6o2Ri3PxFWwXGsfqwNJemv3nes",
  "key20": "vw3rEvNPa6LKQo8RWSSUhgY3dKJdYXaC5Cxqbh9GAaSr7AmEJcwNnhe2sWVopXJ5wejg4wcodF5ncHFkAfA7mPp",
  "key21": "563eUvDntgXG11yi8t2Kk9mWhggjddhfYbqSAm5YFCE9JoWkpafbWWARnNbgPurV5SyR7zuaCWQxK36epDypRmre",
  "key22": "4AvqnJ8AYiLnW2QJbEH3pb3p5H1xMD9axAcGKmELUzwgtN2fMVkGF2Lawpbdrwh7G2hXSpSVnvuhrZG5pJNFzD2y",
  "key23": "2C6fHkeDuoNQjx7Ei4NfxBKP6mBynrE5kT398dTocGb4J5zdNz1cC5MnRjsRwV9N6pbpgMA6hHEWR5KFEbuBdhgV",
  "key24": "5dkotmooudKqMb6MzGdusSg8n5AePhrGFUibR4VXVuYzf6mB4Tp989qsXLvShzmP978Cujok4hmapg5n1eSXRBHc",
  "key25": "4pEDGicm8cyp3gQZAKtVxdUsCboLG7cbozGJrTGHHxr23jWJzXUKUYtiftGuzqbSwBtxYkxy87MVbUV6hhxAmYhP",
  "key26": "2D8y6tCvVWpCo8q42SZWTTNosf97nPwWJYsMR7PzaQuF3XcE66CEuwkakcfesXEdEprgyDao4dTwSF7iQWHnuDc9",
  "key27": "2cELpfjmRfGP8fKjafsgrW4W6mZi9JetzSSzJdHyJP1qHN9ugatdgdjQ4AfDHdYbPp4DpZcj4zijh7M3pH96LLgi",
  "key28": "5tGub5WnWr2s9XAKGsYdidoUaRbw1t882geRkGCd6Vtp9pDjUkZuyySbq9sqgtS1XHrvUHsqCRZ4PT1LnUHpSs2",
  "key29": "V9jxUVhjwQYK4vqSUYQZoaQC4bsJzjMeEf6RZmEvxzJ4QcE9EUJU6sKg4N9j77D4PY5nZjj5EASt8784qX6RKKV",
  "key30": "2B9Q3iSABociFmPRa4iLiqeAyJu964VEMr5YgW69xop3wYRsxPCL6DHtHXRLoPmGpdf5mJtLcNpDakA6LjaD35FQ"
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
