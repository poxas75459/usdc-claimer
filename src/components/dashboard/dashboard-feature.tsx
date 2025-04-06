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
    "4yzcme8LdGhjsvF3bdRn6fRGXT1uVgLmRhEtShkNJj6WUY85UW7ScAajqsVvAnsic2q4kHnDNfwyF7uPzPTAxtVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dxCPsrudcr71UbdbupnMJ6uvxPpcgcK4bgPKhX8JiCfwaBQtEPZDxe1hUfo2qoX337gR2xyhSXT6xHE6tE3n8Sa",
  "key1": "uxrbp6VHyjihSswCC8x7dEJ9rb4GS12LHR8XhVnLrjUCMCkLMzbf4ZccUmBmFrE8bQkLGTgJEV4QFTy77GScsXj",
  "key2": "2bxXk2bz1C12E4QVhYBC8Sz3u9YwymL8G6u9U93nHzsdv6i3zQ6buiaF9DZa7N6zFuv6FgCZQkBFkwaHVe4pyVjV",
  "key3": "28NF9tCQs17TqHuYd7yng89MZFVv6Xif2rGuSbe9vcK9TuggF44TKYzEvjTF9YEe1xFhwzuaFYJaaWtMU5ZmA6MY",
  "key4": "2hdN99TU7BNw3dvC8q7hGMzkfVN3e2shjwgrYC92fBhrAQryyaLYcjjoso1QnpS5wudKDgrY9ePeouXCPoAo2suB",
  "key5": "581deiYgLpi4q3WCzXENYNAhimR4GHMJa2hsD47pPxGwYEfwsKo6twgFSzxuwgxvJX9huVJWiQuyPgPYdHsRGpde",
  "key6": "3yCXps9ZScVaGSHp7RyZnckum15FvCpjTwk9nD7fGe6XMBzcgeC9MwtCjWNYo2R3oB5GUTawb9z8X2dNXfc5Zr12",
  "key7": "2518cDo1FFRB5A2UdLvxT6vmL285hZKJMJe6RsierDx5k61BM6no9vezFymaqVp9xa4nGWvEEbS9ZVkAtXjJcm9u",
  "key8": "62ZhDruwf6ZfAcCj9FQgNUXkQyfyNsejzScNSUxHdJuyDy2NmTNJA7hnWq4Tk1tn8GbTCJfVHFdfGJ63jahgQtdW",
  "key9": "3SmVUjkTS3vahsHYP1WAbudDDSzRUNaNDoZypiNnsox5tbhGtZxjjMiDyxwjQb2XD2pZp7gFZ5fVLBr2BvjLyAL5",
  "key10": "5pcTzd94mJGvjGaphE6QTcpudD7tzdqYZD1JEYFqfJ2YHbAYcJPPW2RRKW66mniqZduUuEFuXuS9bigSzvs3wysh",
  "key11": "hctpeUqcRTeRVsV6hCCJWZp2z5wBpchzDUui4JmY2GW8CoEHMxXbE5yLpDVdg66oZaAeURmwN9gVWLvDQ2iyRKU",
  "key12": "2bnbTJFGsXbCs5UvV3jZxyvYfNu8R1kUKMpfq9yKb3WfqL583cnrLE2XoamJFgY5nC3kQag5qKRnfSMHgnBAb6C6",
  "key13": "5J94PLtv2VnxeoRdtQQwG1v6pJMRinRbLY4BU8q7VeGAPvKsYVTEevzf2XvwZiKxSTZGtaSDVkeyaGL5zyoss21c",
  "key14": "64N3sZayQ1BJNnFsvjHQVtFP5am8HSFfC8Uo1z9tJNye1hnKwiF9jJ1aB2hNScVCNRqk6fiKNh3dqjFFQf3NGMix",
  "key15": "mw3hWE77naFMedjd8C3q9k45TayYeaABU1jxucno7qNwQDLAmSQWn6rnA85zDAoyVzxew7p1VXovy3jNpwfNeTb",
  "key16": "3g1i3SjCmvAGjjzrbGP6xmbPTSEwN1igwLcDLprV2VavuK9N5qvRZWPDWRauSC4YfoNuCEYU6rw8o5uztGLJDh2t",
  "key17": "uUtWLUrJpje2ytZnCgtz3LLS22gRtBmZ2AsGDJeduvbwADsWNWdaNyEjn5Afr42wWyLW2cGCBj2sia1KZSeBZhj",
  "key18": "4um9Vwy4H2fyCfzCEx2LL34Z683jV2bwpEjARfGZQLQzpUtoN1bpkFYZ7H8UAmwygi4FLpiLUDuQBwQu7f3RhKdb",
  "key19": "5TQGeCuVQdMGuU4do4q2Cm2AhVikywY9uxBPC2SjDSfTiXDgge5A7Z8LmDT3LZZ5cPcdkjrN7txtbxZdmqmYGe43",
  "key20": "22YRyjmJk1QKzGPHC8pYMrUaaPBBvxQP51dMTBVosFVkKHiVBJFh81VHMF3rb8xVvhABztnGZUqUj1PcpK29Qv1D",
  "key21": "5Mx4Lm5gDWRMWjWhGxXKUAdTVfr6RCKVyp3dbk2ARMrLfZAB1v3Uksi31MYyX8fExTo5ycgoKnYUd1LZwiTPk5Da",
  "key22": "57CaoB4rmaKeN9yKtWk8h78GuULAtETusEoyYPniJpXYC6WnWiUk7RxfjTX4zSmFrdk35MVw5uCqW38eF93SSQCw",
  "key23": "43FhbeEEYAGoD2DoP6CbaK2Sa3ERBinRnvVUy1MixZRYRcGS6MZdMBrRPvwixKNhaeGTqRLABQZrSCxSi5suMNAY",
  "key24": "2ZBsnC9hUa5pJxNWoAqQ7P3J1d5YXz9wU2iEmS6wLURtAxLwKU9ydmksZZ8WDkACGdo9qNepgkB2ZiCswBrTDT59",
  "key25": "4iw4xxCxkH3ocySwetYVXA8dfpVxxWvjHPKNeJnf9baSmW8brqm9FYsKKcHRuTE4ojCtVHRM2cXszacw3WoB1kxp",
  "key26": "KwmaU6s7ED7Xd4suKJyACPyZLJp25tdBPRdBdWQ8Wh4ofVrj9Gy9uUG1aUgsPRCAPZyu8TUMXEdZP8t7kSrBSWi",
  "key27": "4bEop1PUBPt6pJH5kXspqhFZRCnr5eW8GNsRjvyxDHfxzypZ9k7iVx6EQbmKk5j8p811WZxA1TRLxDAFxxyFxZt9"
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
