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
    "62STdCK3C7DfP1i42MtPFteADWYcygamrxg3SmGSnsaJ4sLg5Nuz5iNVxMLYgXHhfQ8wn6kh86mBMqjsPeppVkme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEQH1HnchAbqHaHL9cQXqgQFFiNs9kaMVZKvcjJo2s758EzxWiRkm4mkWmon9zwUv524FPWrZ5yVfZR32gP9NZk",
  "key1": "2vDyjedJtM8C8HNx8ukzy2soSyfwtLBxaYigJ3U948DZdRpbehmhTcesKxFc2BHg6HWggDtqyzvge71KDTWhggwJ",
  "key2": "4egqirY3YhwR4NeDejVeExrccJU4vppkGAGnAdkWrFBLEYfAHt1rSawq2pp8E8ewYHFqyKTApFkcg4ANCS2wP9qc",
  "key3": "4coy4kdKiAMZqmYftweB3iM4HabAqZjyE8ug1CQgvJSvKAdbsjtbHToBSLU9VhVR6xB2jZUYDvn5GQYHwMHDcNRQ",
  "key4": "4EwR42dkdZ66W54a3k2SZxbuuBxirW2NBejwcJ8LSUCpK94PZEWr687DVrLadA1kCtwRZNwweTAAFyN9nBz4MviS",
  "key5": "3V58zRXz1Dnwjgi5vKW5qCDL1QSz9fgE5BWxi2GW7XpxgpJGe2PzkBVWPKq9whL4bVLeqVVcrSZsqg9w6ZoZk3yQ",
  "key6": "53wT7LMm5cJmg3UT9qdmaEqturtSi3WKT1CsQpJxVAFJvN2VrnnKNywBbD7CxwVvs3sjGKPaomtg5m9DtgYoRcvv",
  "key7": "58HM6LFB637zjYp8o4macGnCSXS7Heba6qumVAyD5pm6CvcjCGz53DQX1rLmUPf4oiapvgiAUMUG5u815NnfSbdi",
  "key8": "362UrywszpGfV6dnz8o9KqRBQeyC5iwL34J1fFU88VnQzdsF3zauziSKEUv3jY5baPAbYfokpETxooZGsJApKHJZ",
  "key9": "pD5nVBZ179uWb9RBrNeTymW669jnkPdYji5jojHSUKzY7v8N1r1qddiey2ZMpZj5R5AXioyo59VnRzHPqqYrRGW",
  "key10": "3Ax9ZPU9Tmfavfheqbk2BRe43XxSDMLvCo3TZTX9idXuHW6HbddMQ9UmcKDFhJAMEHC1FmCCAg459CWLG3KeCoWL",
  "key11": "37oAEBPoykpTPQeracS2djEKopSiMLyUbzDNEgMvkfnzJvig6eSSx4fKcGhuJKTjV5ZzaMTyDxoNBkcXfjMgR9X4",
  "key12": "5DQ7fQQTvf7Ai4zAWbLuPmTYmgoFRKhEPQMaD48gAVDujtWi4ajLLNcCaC56wgzGZbyGr4BANNSuTBg3sJkr7dAk",
  "key13": "5fiRvoFHBJqKjUbhsfB5voeiwgVeaUHaKT4gRPHjN3B5inEjqzFgGxQnwu2hkVfDYNBFFQFhJjfnAfjbCHGpoBHw",
  "key14": "3Jo4ebqRtRft1xMhvdBD1sNRiJN9Xk7h9rPuPSFHykTg64wSTLKdz7fS3ufkWbS6GmPA9Vqc1pNEvBz6dGVH3H4A",
  "key15": "62LBuEE2JMjq12bRAnshTSTvG8z1kKJqaHTtnSw5TwiBG6DaaJLMXTyhCpMdRWwVmDiupwFWDRAydD6Wo9kfZzm5",
  "key16": "5or7JBTrpWsSvwgW9dNSN1kJE5wvq9mAt9N5VeaLvFRa2ii9yVNxdzfevHRiWLMVretfUtkLuuSxNXv3ZfeDE8Ko",
  "key17": "2dDFEZm4mZw9zuDkzAdiC5KkNRYSeSjSdrbm6Ut6bpR9GwGjho6tTdnuqiWaD4oPXvs6Wuv3xExwVT87LxN4WXUd",
  "key18": "3N4U4yFXnZeSaFWvGqpYPL52UkRwqVgQjaKQfAhnQhUfHddsPzmgsSG5Ag8cX9EqvkL46WRJNqNNhcNNtmhJiNk1",
  "key19": "5YGgArVNBDp8R5GJzv2amab3CDgop4UUEX17WGLj9JMmCF7tTLNMVXRZcXZqMPgr3BLNzPNejRWZPMPU6TcvC9Xc",
  "key20": "2WB4x1SdWPNxRXNSb4Aa3aDEWQ3EFc86X9zTWadxzwUWPBPLYGeXXggV458R2rJNggkndFQpcjC8hsmDFHZaxvg4",
  "key21": "4xYmrJu9aw86j9G4N2A3eXqWHq4PUkLQWUSj7UnDpdTwqE9CWmDgNGQ6VX7CZ4VQJN8KmRqYayoxsJNbsno1A4ME",
  "key22": "3x5RmxERhvyiaCv6YTqbMkxAQubbxTt388BBhbNGiDhBB9hs2ka6RV4z4kPuBtgLa75Y97b51PqG96CU4tbhH4y1",
  "key23": "3fyqNaJLtas5447XD5s2rYuFEbKEUbzAHQGSgTuggH3wChdy8jsg8iqdzzBNcmaiaJH6oBsrrKdZzdpz6Br2rdZk",
  "key24": "5v9RB632M39r6htVHp3ou8Z36QdqrqekLJjVtf6KVpM8csMnEo53znWpd7uAAmqBxbV7uSPX7YFmhatVUUmtqy2L",
  "key25": "3z941qwnwkA3jwUG6pwTG7gDWb1rEesM1FziJTKor5FoLw1uZiSPn6hdjqZVxDX3Ene9kLpv8BiLxtKVJR1TeWq",
  "key26": "4qsXjgYWjruNkdkJ5k7yhytfEiTnb5Jqf2R7V2ySbfZQ43qxQ2VUMgcxtcvqdBkS1ckVJRK2dxMDQM4eHmghRB8S",
  "key27": "2mC46shX7jmoxZBP9QiY6VRG367xY4c1fk8QiXXFRfXavSxSmgXpWBQabdGrtmHx1NVxCpffHjE2ZJwq1AiSLExA",
  "key28": "5tyYWJ35dukrh6ExrNErhaKza4XfPJPv7czfntrXi27k6o99KFS1fd7MX2Jn4RzbAR2ufdkHJT7UFQKWKH5ZhgRu",
  "key29": "GcegLGbU3wfpFVB7Kejpw1eeE3yxc3zVJnpu7xSQvWaTWtTXUSE3FRtR2q79Soa49TmrgACFKUJay327nJ8WoCZ",
  "key30": "3HB12qWaXxSG6QMV12Mp7mSbFRtkDzuFSuf3LqwgAUbFvMwhnuAHpQa7W3CbnRoSQhRuCqXqsdFdLfYY5Cg3HHi1",
  "key31": "2PY3abDxZK2S5M8RCZVqQfGUdDVuFsoGyVSNKDyFxoh34GK8bM7NgVZwgdF9NQRNkQvY1sYCN8Sx35s5pvx19dwH",
  "key32": "42zcA2tY9BDgEeuP3amcEiNiPJ3HvYo9qgtwK54f8i4be9U2btLotWs4FaxfKaETMU4ctzujpHb4dJyai5xTnPY7",
  "key33": "2SEPC7AhjrBeyQbR6hkgNHg3DFKsyuQfjkBpwrJ2CQMJeNTqfEJNhf7wWHAonu47i11qNSGWf8Xkkj6G199csSmr",
  "key34": "4M3e8FaA6jQB1Zn1qY1Z3Hr35ssVducogHxEDUkEtevnGW83oWgqaz83QTKwBTm8ZTTvNXNJDVGeEPbemHC7iqSn",
  "key35": "3fZa3DBFfAwz7JnpAeSVQgaf1fXpUNy4S65XG2ADhZEo9fsGd3QrpzwYNZ5C6hhQBeJN2mc2W48RMWwwKr5bXP84",
  "key36": "2gyCZNwr5WxA2gsg5VxAHtu8uynombGLFBGFZNLYsvWawNyXkJfZUStMNpu67aPgkGXrw5mZ7RuM8uCkYQfreHfm",
  "key37": "4PeiMhvrzoRfptjXwNinxnqeoZRYfq96yDEHUAspzo6jXpDbiXx35nz5BnpMn6sSoFXQNM8vAcdHuqmvHyfVy2Wp",
  "key38": "pEwAXw8VoEcriVAw2TN6XeCdh1ZaWDtypTBdMjYUWwf1LSwAEDUUCNwRkEX1q2Cedyq4GTw5M1DbbU8iY166KmU"
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
