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
    "YVSmwU3RQ6fap8dGqshLU2asDzN9TU8L7Qj1o6JZYaSKwzAhJsQ6izT7mp4SejeM8xLCK2qWC7FRWjpqjEouivw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48EwgS4UDseaSC1enf14mZZ6hMALowb8d3iyoeJrhMcExUrvAowUqgh68Kd81hDcHvdgPLynD194Qn6i4cWj746J",
  "key1": "5rbuurU6ZAszhVifrTLZtzoYQCiUQwc4rLCnjZN8cCNrdeVjz4yaduhZwNvdhA3Zdg63JeMYZUWoYo6bKLsxrgjz",
  "key2": "4fq6fJvgLQnMFpcZeCGuFDmAFwTJjHjjoXcbG5NtqXsa8vesmjJ6qJeufnHuPn9coTDHiWcpPrMPFXva3nsEwzip",
  "key3": "4mPYBHpyhGSUxgpv6YMQbAYUAYVbA47ARVewtkWB62hR46KnN1Jhv3f4pKv1bFvjYMN16Z6PrYBppK8HQfk31XTf",
  "key4": "SmrZHBFbzCuFyvbdX2ynrQDYAMuSHiMYEx9GGhm8HWcTiQkSYwwBfq1S3fChUTz13k3tE1YM6wH14M4BLDBQdzn",
  "key5": "JPKrTcAJqBY8Ffsn44UhLr7X4X19CBVE1T7tUoeeFbQAj9bzcaX5TJDUkyV7cvZdcUu4H42SB8dTMFArrS1MtYT",
  "key6": "3sKr1utDKSoVTnDgCP7yfqLJ7MihsCzDMmC32pH7sjQzLX137XYBfhNaAj73j7p6TkWig4R1Z8BDZ9f9rKQdz1Wb",
  "key7": "5TC4265hR1uJjsnpk4Zo3amAPG9VVPAoPX1qsx2sAsXgdfR3JoHPekmzgq9rYJrEt2SAsR4n964nrYPVfroHiQw1",
  "key8": "4D6TFKUKQXVBwKY1wajPur1fSiSwmTZzSyZ6pKereBUeWtPHeyxYe6vrdXv2uWukFagz43EoXsZXf4Mk6osF6j6H",
  "key9": "2waWvsSiyYxcB7sehkqWrrXq6LjAsBiryMTNdKrbZaqTTvZm1v1K7iEj3xrDLgsMgYLGymK6VehQDF2dcdCJUyK5",
  "key10": "5wQ5msevWy3vYKzM2KujHtcZHqZcxERGDSTVgADPML7MTJExA3gAMHqZRvBkx3WZvnaYUrd94YVUq86PBjM4yF9R",
  "key11": "4s7FMP6iwqZkTsyjSCZP1T5ig9iXn8qN2p81emfja7taqne1NUKMme7hFNvyvhePiBWqzRRfkKuCqo4dVbJRaUzM",
  "key12": "3LRzBze7YJXAk7mPY1KP8ep2VetHFzZUHqCbyeM3PQkLXgBF7b3Dm371uHA6zTwvmazGvXrzjFCWbKyGoms7JKRd",
  "key13": "3bh5r4m6ArBv6zm6dvRHjG93eP9KPWj4Ag7tnR3n7nNuE82nPHWWGsZo9uB33qSc9hmUtDY5LK9DcB8Y6gHdCJjd",
  "key14": "29X9vFq8tnNTzBUUrHTzss7XzsEBfhYcm81WAmY8Gk5A4hV4hFNwVTCBBg2iPFtphXsoFmhDkH4sXai2QCh3bAbC",
  "key15": "5vBb7Edf1WhVAM9BxnyYMaGxyey49aUmeT85EwdoMa4Hw4RrHZ6XM4CGVKCjEJJpnWyziFxAz5p7ZPz1dCWrAzpt",
  "key16": "55pU9pcW2a6Mo9QCg8w2r3EZq4fSx1aFKBBmH4tG8tjtmzzAd1ghEr82RJZ1oDg5RFrXQRpFuxbXpdooxycKudpj",
  "key17": "2LSN6xKFko9Y5oddGwV7GmEJafCXaFXGezokvmcM8bxwyNHoebv1BcQWzcyZQy3JMMGHKcYgxaVaHuDzY9X6aByK",
  "key18": "2y9mg3PsY9nBWZRfkMF2KEdsh1223iGqSArpgii3pfMKQv5qV82141BCsVWQiNcz9zxRnQLxYjd5RNNb6t4PbWFL",
  "key19": "3SP4To75ua5hgp2dcPWw6m66z3ammj1tL1rKkXcJw5qPXBr57wg2RFohYqNoxB7jFZYBhgamXopTXkqDntu9SDsi",
  "key20": "3p3KQuoCRW3ib431NyiNsugaswn97z9XGr8CMGRuFKzJ3yEeVa3zKgeEWDroaAAsxtXw3EDsnntMJqvuMX2GvmXZ",
  "key21": "2S5pmo166EQBbtYwH7E6c8RRwHw4bcYT3LqT4SHhbvpWciW48XbcfMsdZqrSVaNfjnicXMjRoRWszAtsPhfjc3Uj",
  "key22": "3M5YHcZeCG5SLh5anWoBVKTa1Njvvg2MWtRZhBKkZNH1UYqofTXjCUeC92A86fHJPAnEfiRN7c2HPpvxv25d3fBe",
  "key23": "638dgtaUD8Th7ddeBnoAUqcgWpd8Rzf5ciWwSXHXLcVkbKB8YA1KCe7JBhEUNaQgc2Ki1bjREMxodMsny17HAUKJ",
  "key24": "YNpwh5oVoWjYDfEWLKjJ2yqvJ23FAfwMUM13PWz2vxJC5uUbAcCNVHGGgMpJqsW71nb5ixHqB8FXmnyhd6u8GJu",
  "key25": "3QPw2nNwpoZWWK4JzwmHrdhnGRSXrQCTuvzN14B1caKnYtWrdbu4jAiaXgMeVxaEcKqatAL9jnVDgtFTeqi9zvVo",
  "key26": "41SJ3i3GLNAtgxnmESneYtp1xrA8SLtAh4JoTAey8PT5HynERDUAnebqekaRUF3kF5UBvSyiVLzwKFSgyr4aQYCn",
  "key27": "5BKAfDoFEya8Qp8q7CuLmLtBTxKK4eEDKHEXmVdZkFWohBVKH9EKMj8UAS2Z9nM7tLk7HkUrFgy51bXyjj4aXYb5",
  "key28": "om57vDzwPjh55h8MEUL5CJecZjKTVFuUz5fGvFYTqe8YXT6HxeQM75dTVsjgVLmejRQH9fvMFm21JTaeFyuLZ1X",
  "key29": "zrAFtNfQRcyxgAvDMMtsvkFJG2cwK3D2KNwWjDawdtrRC6GybZrCJtzscBytkVrxJJznDcghBGgncH1CasKiyEu",
  "key30": "5ttda7m4rzvbg6TfTdU8Keg96FBEMSr8xvWiqzsG8RLRchJWkofNKrpSJL2sQZwgr3iqogCcV6s2ZdSva1o1VQKZ",
  "key31": "3oqKFdwNnsPWTyJynMdC6g3YHsCyFrVRLoCYVKSytzdrqxux1RfSN3Erp4re3YZUFNDsgxSmAVBeoUshVUXAznL9",
  "key32": "4oy1MaqZR9Lb6zcg47NjduQPbHBygaBepRDnEcZxN6rwpPykdYEc8GspuHttkv4Kh8zAjBKif4cth9s6U4Bdi6fX",
  "key33": "eopbXuW7QVwiQScgWaJmBXhxXgWJiBoWeGnTWAxBaaUW6tbTZfy7Rwm1u1gCViXpaKzpcQgSGPK6WFVLjFDntfN",
  "key34": "47kMdtvtHWuMAxyZqzDqrcVTNGdvNvWnNQho6q7TzPcmaASyU9Za3KnaswfUArc8jxzMxfDmWq2LEqRxGiSE9UZa",
  "key35": "4i6bhdxZuDx9WEePuavqadAkWCtkfKF4FfNNqofLbp4TWyD9v2vUFMEEdFWeebUrvf8KsLDMxozZcAhB32b9KC7S",
  "key36": "2u8avQ78zcAiccRZw9WJTqqFcSRRpVsPcA83x3it8xNqvUsiZsTFr4r74RzBMxsnVKyweMQihWHo6URjtQ52QCne",
  "key37": "46NenuNPcyubv1VE3UmsvqsUJXLh3ZFE7caJgNVL6w4TK4RKPUjVhPQT2SobF1HyxwMdmKGGUnaEw6YYbvtez6Lr",
  "key38": "2ATPnM96esbapDqXsxjQUymfKekv6JeWfvX17uTfPTVxL1TWtcfg9SfdriTs6oeeFxwr3k4eaAn6owdDdTPcGJrn",
  "key39": "3AXjuRMoP7cFajSRvavJnoLU1t3YZsVfgx1pGhhYAUvdZkEFWjv8954cydbc8395RKLWHkkTdXLkDDSrrWSeFWL7",
  "key40": "5jLa6aiqbKWW5ZoWvSC3576Htt2eJesKbTaiAsYyhQt5vMs7N3j8uoqqvkzn28aJXtNeRrqkZh6GK9XdkdJhHGJF",
  "key41": "2nK9oqTshbp99HHqvgDn7irDCgRKRXGKVZyLEc9tBNmBvWTmxp4kFDfDBP3Ykqi4D2WdjE1Cn2bcTcK2ff3YaLft",
  "key42": "246t2BzSmSG8kC4qnRCMKSNLdGEJEiTJyrU2Nm5bst3sXdqgr2Dvkrwev3Z3UKW6yFqvgCAhZ3bPRQVZRekNqoJD",
  "key43": "5xWp3osDcyzMAhtfkVcW1ufZc9gPuzgT7bxLHHZmhqpnJXqGV8348UVHuD9hmvxfTJTwfxmcH8ZK6h25ikvtDo4f",
  "key44": "57PPdJjiAGQPHWRmiWuz1mgMXskyKMkFCBTbwUkQ5vzpwSNy3NT3gBN827DFxfNQYRYmWPNLUXo2ioneoqmaDpxr",
  "key45": "3jHWRghvC6Hpq4EJcEh6fuYDX9NBqtbPZrwXkgkvFnNN9KNB2wxsni4WeoCT1AjPzdy6VEr1tQRnJwRhemYuGvQh"
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
