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
    "64wmQvKdgMb6gspkorq5A4d5ZVLRVV6WYXkPbe15Kk1cWEDz2yQdmCmRXFknrSSaWazCkLHmGnvmPmsKfr18KJxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rWsNoGoNJBc3XAtfZ1PaciX95r2Fm943ugbh34JFhAv1oXHzhHVSWZGJjGvhNVYuA2qqAFjXg6HMqLctotL4ioJ",
  "key1": "4s9CWKX25WFERh7xmEFUjJ2ze4RAT5kTxY1QJrVGrKMu4Kxd2N9RzyHxDkhvyRLi9WCJWwqr8SqY2mP4jMTci3qs",
  "key2": "5FZCuZ8Nq9UaeX917gmdFkNFdJnAjpaXAzsDscCSzGQuZf6KUHHLw2v8uEbnBobQgKpqT55ZXLmeMNhhe2d8Md7p",
  "key3": "4BwnbBEsquDUq4NTHbERogCftPVGFLZhAf2NW7fxfukTugHU6KLgoYgvJtJeRrj4i34nkoypPKUrMFKwLu9VwtbQ",
  "key4": "4S5x7LJYQv767u19Jfoodzhy3VbEZkr276mZRBVv6VLbssp194SXqpH9GZhoWEm6h4uu7d2iRRyobYw2USQtokUt",
  "key5": "41pZcjamMMWDXW4m4MQivkAY4ZeqUhu1su1zdeigy6BFeGR3YMwTHtUGS61BRufe5hog1LdufV36kPgFr4QStLjH",
  "key6": "5ksoGQPxvH9VQAe5EURwDLcMDzumoLVKh1bVwSyZwU3pqyYz2eqCm7h9JUYDyeKabjpMJ4KK56MS4mARWtYeMyxL",
  "key7": "oBPfCHF7DrYV1eGXQArziPXQw3z9FpuYprQyL9Ay4ZCnyPtZu74hWjvfbN3pob1WpUAM81jcZTNyePJoU9uu5fA",
  "key8": "5vU2MxG7Ldsrwq4Tp3zLympFgfjVXzbWoQoYnRgCPU791hAEf6FHSi5HDhTkD3ovHbXqR2miMrhkJRNv4WceaWqz",
  "key9": "2ueDA1b9KSfCLyQUEGFE1AV6Zh1D6tMdKoZnVVKFqgJNDDb2DFj3CFECHZVBZCXMhak9ghyp6tppsAXg81z9J8pX",
  "key10": "3dw4fgsUkh1d34UbGoj7mwxjFqs7G46hsoCqnHdjwFkHLoRd9CtkTZRfQSaLdqyGeHdFdFcZUYoUkBKyGChi8h4w",
  "key11": "NULuKZ9UDkRkyfT66BTbSMHGFuMkjYXedjmAZ2JVUEdUJCKzEmAhUSG6q76SSu7JMYKYbcurP5U4XjNy3ZzAT4X",
  "key12": "8s5RHrrHZCh4sQJC1j2WA7jkYvBBrPAoD7EQ8LM3c46WEva9PPziGWeqNfcQefd7QGR6s4S5BRGUjbC3LuiRXoD",
  "key13": "5EXVi6rS9Zk2nT9LD2KKArzH7S6LYLv4XMXWpUJReWd2AtrZ3Q4wT6nKGi3L3m8phUieMQkDs9798gP3EdkVxEpZ",
  "key14": "QKx65xW84EGuGS19kLeJCYjDpn9qZsDaPqztSmFRkCzYUwfZi6XiE12Q14vFhMcvDsTpbGtRx9SHX4bNeZoRGVR",
  "key15": "4ec8qpsqAMoEDd4YZvwZWExZgC6XGUA82yVDTbTM4hvtoaaS68x6aEQGfSoTc1RXjBe9SMBt6h44Ldy6qid2CC1G",
  "key16": "2cCXWL9Z73Gi2bm4mMfL5BHQjxXfmUEn8dJjcZSRhwXnRMpoPFvnfjoGNnJw4KpwnT85Y1cfSLqzigoz2A4p8P7B",
  "key17": "4DhJWaPvQ64ew1xUPFBhDxowEc1mjCdqXzMFrcDLxgigRqx4nf24qdhXrRdHR9kayoZRaicoHcXiDoMF3k36dyPY",
  "key18": "5V2ydtm5wi51se9aMqyRDm8vTCu1Y3h8XpDdjXZpN8r7ibTdMchVtcgVdvFbLmijizRvVwHBt5tKuZi9EHtyJaiv",
  "key19": "2Dw8sDKbR4VFzGmweC495fCoTmjCDBeSZcfHNpWe6jQiFN7PnZW8BXBjffvJFBCeoyDZV8kTc3gKGZXQNgtJAQiN",
  "key20": "5W7ndc6XhgME1kiy2SF8YPdAta14j2JK7dB63DAgJ35Q2jHruwdbeXPCWyFRTFgtPjSRLv7yrUNJtybJ57xoK3Be",
  "key21": "4iNrR9fjxUiEpEWR2X7s1DPBRYaid4PWbc5Pa8bT6zNm2PpgR4cTkEZXuHatwm48QaPctQkiuMrK4BbCGGtzFz8j",
  "key22": "3R3ERuXMN1rZ1qdvXjLbyFFAqqsyjUEU14y73dAgWhxHqcNPj1uVn5UjNWmS161PXri1XnA2faYjB4VCRz52Xx78",
  "key23": "3EAwHRPt73US5kGrmcykpv3UxciKyzrNj7QhXEoGWDDknejrArCzsv394tVtgUuDHiTgKDiGkRjnGtLWRT5AxFQT",
  "key24": "5WAHbU6Unr3hknjLHsb2G8xedVAfkVVjcZ7Qms2UenV44ASXjK8gVNaZUkenQZwczFy9mebwe8ZACvXrKPV9832H",
  "key25": "4KAWMbmy97Cx9udgb9rjgV46dhhAoDBvBqX7jUfJmnQRy4pWETVc5zeLVJqKRJeNZUQbPcP1CDBzkgzag1khqxLo",
  "key26": "RaFemMWexw3DEKEykJ3yrD3aVGirmHeMopMhY2mao9Jz8mx1TdAWzoHrwieS9g3kXyZNLE4H94Hm1e25h9Joa7X",
  "key27": "3SpVLwE56roY1jLxk9BJFsQQKWjLFXkCViZ8egDattm5ScuYKCWtUktxM8XJDAJxQoKqpKWdMrEyng7BL2rcvuyY",
  "key28": "2VnFmsU8h6q99dXkuDZC2TvSyiTMKqVXnPJ3YHAXzL5HuRAZiQKJkdjDRUarPeczoLvPHTDX8Zmv913veqgVak9c",
  "key29": "5Tn8XWzAbEqq5KD8ftQTPqu93gAEi5DU1BQc27mde9bamB17B4NqdL5Z1a8XEi5QcCyYqMDwZ8Pu8XRjn2pLFwk7"
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
