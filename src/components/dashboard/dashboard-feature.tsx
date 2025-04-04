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
    "3YoWmeWKe2vdpZsFRnH9N9Ns1MT3LLkBQCGSaqrPJdxJCfrxfBpPKeAgpRCYPmvryRDmJ4VTyudjnZV2L22NmvdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QbNUtEuCsGEpnPjwUuP8mrtKN5pG4KrFWf6GzF4SxKC7S9gVRnKQcKj5F6Xr8WJsqcFR8nrcFgEQc9C2K8qRAXS",
  "key1": "5AQNrzkcSvSBtUE3AT5B45sWicbW9R7srRratDe1nhRWEnPEuwDqLGBxffoKP7DCzhhPHjMRzDwEjHALg1E235H7",
  "key2": "2L9uSqeLZc1iwcGwExCpj2XjrR7u7YgZn6UrUJjfyMhfSYyCnEzZ4auuL9sm7PP5n9zyU3XrV26UmLNua1GjqkDJ",
  "key3": "Ee5YpMF27nvfWzK9AFqHYg5m1jDvqKRssUdJZNbZa1dzGHb1FVUh4ncaBDnQQCLzPmJC3GQGvEmhEFKaQLdAeQ7",
  "key4": "3iXBGNMgJfFNbrkPWRgrtqq54qLfTU3AEGGePeC4jctXavZFnN4jdaVWPqpCfTnVWDifaRRH5j2ardvyGkWzdLpC",
  "key5": "2M3Wrnp2XVyGvaBaJKcpnq8w6k2oJ1cTWT8cBUeJForkCecgESdqAMgoiVUnBn8SR5it9AGM6xrRYkkUfs34bRHk",
  "key6": "5eJyfKnzvZmM73d6FXnKBSrhwJyN5qbvEK4manapQ3MyexM9oTB7aMZwYjP1aKgjxbbiDdXLHZgzLnYeEkVYJvgr",
  "key7": "44RULWf1Gf7YpeSeAdV4yV1Fgs2KHCZXa7PaEEX5ZzWLRQNfHy3ri3coJv7cR5f59A3qyiraG9qfzb4HpAR1ncho",
  "key8": "2VPE8oSTpCsiLSTtXVG251awq7PzgrD44M3tnbNMGFS8Vcj7gh7p5hJLQeFR2vrWvEYXW5Fd7eXGBuaq4vri4DxA",
  "key9": "3frLBqHE4GPqfEsX5daQ5RNhb2HJeL3uFihXLCZiNY4UqN86q8CECFUvg8MSUqeZcLRwskFM47zvvU1ojBfuvWc7",
  "key10": "25DSS21LmXqASy6DfXzfHSUvAVXTxCinxCcnjp4APJFNktHwR63rN7cdzPU5KekqvJ4Yj8hL8GLdh5Q7M9tKmc59",
  "key11": "537JbJN9Wxq2igoNKbLtSHDe56Ur8wk9tR7nTh6RhsqPDqdgKw9QQLpGsy48GKJaD9kb4GYGfrvWK7eKykQZMisX",
  "key12": "35ENonuZQVv9FkBind9mPsduNjDxVwid8ZunG8CLC2A2nwP29AKp5onvyLS1qaYJcjgpV7b5SceZcBomYmWYeaRL",
  "key13": "3zkR9w2ezcJELSFTSS5vvNV2rCPpvYygH7Xz8DVNes4mFxuQ2NXbU5GTdKz7F28xRainnMiTVPaAVCH95FgHfBC8",
  "key14": "3tV5qgMJ8f4nG6jRe32YRC3USiiAhkrkr2RmpG6pciP6MewAkY5XFhiCxVTcgzD5Kb2B99UUBG2VwHHLCi5ryega",
  "key15": "55NeMrUXXBAKmnapAk2Buysw3XC2p9STg2nKiAKUTLmFKQTfdvMVy8gYWqU4Xn9SkYrSQZvJT4Sm46GGF4djyZ7",
  "key16": "5p2ddtKqXVMcaNzqZaJWqLJK7bg5nKLmJwChotbJJVSzYiMbWvzq634XM47jRbqeaYEw7i7kwJVUjU5U189AMMHg",
  "key17": "iMw824FAKqzKGrN5WSdfP7PRx4qGQWn28B7Qr8VaBJ5GfSmFN6itYNZW2QGWzMdRZVQ29qYdv6zdfTL6fAPXJxy",
  "key18": "52siLNABQghxcFY2L88kQDTbN9Khj9HqNXD3LP2o45GMP1EkmtPDme3F5Pbrk66X8j5q9Ng2WBE1CemRNyNMC5sq",
  "key19": "4Xn8g989tRTy18W5qwsrpfUda4AxWCE3zi7osz5a2rh7VYRFe2hR8RUrDF6ajCHMupzod3Y2KaUaseugfDeqvvA8",
  "key20": "Fu8VWHkes1WwFkmUivD9yrNCh231PWFRmwgQEC4XfRiGXFjqJsK9s3Lcc1nVbZY47F3V23Uk6qFALEWXrrructa",
  "key21": "42atidhgE6BMGNz2iLKdtSjgA3vaeBrRuoGsLdMqcgmRijQUCzHe6sTarAncqNgD5XC16dB5cR6ds9WHjC5xaDPQ",
  "key22": "25fbYULxA523GobBQaW9sSGb7HLBCbyj4gZAtXZAXnFwhJRWduN1bpLiZVKP3aebgR1Q78GFZDUPX9QBDfsFmtio",
  "key23": "4e2ozHaandRcn5KMZnNtBT2SwocWBny5Wnpai4ocb8NjTBtsmir2CeyPvskq68VQ4WziWgj8LoD6jqy54CCkSPSQ",
  "key24": "5QYZfZ1M6rWM8FMCXTGsfd1UCV5bdFnhqtxfviQyr12CibfqjZbF5NcoZe5Uvqs6WHN9CdzSJNqs6LUDfERUnFPN",
  "key25": "5VBbprL1atcDgmyiQ9mRwavMj1LFNVDU7svcs11a9tFjtAbuGxABteFAikfsqTWE58TZbVYBiD8pANuE6Xvziesk",
  "key26": "48owhoLuKUvzqbptPZ1vCYFJC1qUM6S6T9m96jEkKL2DJ4tYor3kEnJT25dDzEvi47SupZCALKB42Wo64MWzTipK",
  "key27": "64BarkHpBsjfCNdaRN8jv33Zg9NZUxkz2KH6UNDgVhrx5ZMG6radaeDvDfHrATXsEwTjRwhrhyGyJD2YsRwGbWp5"
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
