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
    "4KBk8S39id6uiTdK73k2A96ZoAGMNYFjhKt5ZNctqaASg6GRxYEYKev2dD5Ho8vWEvA4Ttp8FyvLCJzGeGyKPZjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HGLy7uBwh3VZFMKd4ebMSVYYwZ56bNB7cRCYdCYZ3peEERXekxCAmJNyMLYryYQrWti8qZTbAw4qyGAiznDq7Bt",
  "key1": "48aA83EkHa8ujsYi9V9tqj24n2Ag9y7ZYtVKdAdFM2cBTaSkQPruBrfuvjpfyjvxQ7E3djq952aMJ18ZP9WamVQa",
  "key2": "4AUXZmWmqq8geXQ5MxJYU4BduHk5rwinyzxFspzBkTn39KfjQidZdQLfBpvQJpz1gwXanB9sdrWxU7XfKLc3qAUv",
  "key3": "49jYPke7ez6ubj3qENuR1WMzhrdN11SztP2jJ46FWCmQLdmWokwfHUT8mdeD4ZinUJwfzSPKvQDtL9xUpz2xPEXc",
  "key4": "3hPAzCT3tEgzME83nHEoXW6A1MZxZ3Pc8jXZvMzbDcHqyqxkptGZpkSZv1i9QdmjYkCgYgqEbaJuq5qaZvwgdKfq",
  "key5": "5mzhs3uqxyMBXZMq3qyzLZTLbyxQT8DzHMsLRvue9f299QMNiKFwPiGgdpuzXKjSukx1pBQuP7fHqd1MeqvP1S29",
  "key6": "3Y9HmbmFjhtC3mYpELcqr9QQV1hDhZh2Ms21FpReKhyLQ9p2LusbWiMxneREL2yP3bterjR5hCM7d5WhVWnbAZQy",
  "key7": "dSMNHdGCLnPgaZtSq4DjjmibHVK4dwY5qgRKBHcdSMTWDBE2KhoaDhnW3xkeZXiYqAgB6g31BVZzocjnraQYb8a",
  "key8": "5bcSP95fHzX1nJYuqSQEowuAQqm5o5j34959vs57xoVnzdEJ3WFbnzVRBXruugpWurAb9vho9ugXSoJ7kdrPjfc5",
  "key9": "5St2QoeW3BuLHkUyMSmERYyiRYcmFABUDXACFmyWg6NjEPKatrSXKiyoVUXVgdDMfEop9kq3BYznC8d2Fr1YXxQx",
  "key10": "8oR8wMBbmDCxtY7PjgDjHRHeNiruvKpHmJnakJKwKNPYuNbzbFRFCpa5cTqBq98r4Vu2Rj3QFdE2EosAxJ2kUcS",
  "key11": "61vY2fmh65uHVJhyjeeTbsTCa1ySn1MkjskV22uVuKMRd2mGXKatrQWwLxB7P9douUpgwabqAwMq5tF4QQhiRT1n",
  "key12": "4NNqg8pHdRv9XMSg7Rq2i2jDPL7koXHPNG3BCPf16HghD7QuNj1AnUnhuvdDnYzLjNMvdMAfjkqo3hey6w2FC3VM",
  "key13": "2M4R27minkgTdvTEKPWQ8gnNhaUJZAEV4cjmd6pqdxPrteVcHfq4apvaiiYDrLKcrVugrmWaJBUYHpfVf2i8qmLV",
  "key14": "4j3pA6pt2geQDnwooqcG2BAUeyDgR1paNnWkpgTDuc9KoFEKAJ5qwh8tUQqdWY9nuF6L9YVDwsZ9zgXkpy8f7CTo",
  "key15": "62hb7SeL83KaNaHDbCtr9miwh1JexTYJccp4jmupMVQRKyZcCyRjuSypzc5wMBSb9oicyBX6nqdHKeyM73Lr9cmj",
  "key16": "4UTms2PNr9sqpEgftYJeW3ZtTtfCtxy8arwT6tz71vZ28JZc2Gi2BWXgBSkJZgXh6VhCE82f6e389Ky647QSUgdc",
  "key17": "5gd796FTSZ7KaMNqHJF6P3K8huxav9tqZyno4VT8psEk3m9Mm4CW3ofhS6d84GdHjr5hEiZHugsRbTAMVVvTXntR",
  "key18": "62nUhkepGgLEtijsGZ8bAgRJnb86pFQXGEPoghE5G53XDsZ61HcZSHJiRv7pf8B4qfZsYhokyvNufRanvGQk5QCz",
  "key19": "5ktuSeABSnDibYARSnpxpdxUvuRvFyjNt5iPX3ZD77VNPctTLstfFQ4TjZjNejbzh1W6ujccp1gLHuf4KgtAnqdM",
  "key20": "3kvp6weGKi3JRmLjj2BWeSCgxSpVuCxH1te6bopSiSwr7eu9hd5Mke2DJkmwZjEuUyTgXdVXr4pzwMKUdEjZU3zt",
  "key21": "2ZZVzpwuQ7k3U5NvUWvMxqaEBk6CEh7Uoaxxh8XvN62bUi2N95Uw5Qxk6v46iB2GEjPWMGe61bJd4izyeHLZ6tU6",
  "key22": "gmK6ou2bQTF3D7inNZqFv3oiy8VrYUHsG5DCqkPymKwfuFF2bhrLZHL5WfkxUkg7MAR6hjefTNNrzGush3zwNNH",
  "key23": "u8Mt3gmCjtqVhzLPRYJV1MVJQ3GffWAV8vG4oxeofMk5yLbNRqm4ZjFwJMFRg5S7T59y8Rf28FXQbQwPNtD1zwU",
  "key24": "3yvM6BdbQqN62rGMWaBZwMdP85nBsurYZor2DFdNbZCthUkonLvkB9ABYJTMjernBKqS4JjhrWdEbBT5uabR6GcY"
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
