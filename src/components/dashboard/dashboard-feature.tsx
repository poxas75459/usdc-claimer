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
    "3tnMXovftz4YZcKDaJkuHixECpGweWcvptRGL4hWfE6BRyx8jN2p8hos35gFnJvqj2MpJuE2m6cXbA9JaS6Zesxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vuiwH7SJwKRvXoqrCUyepxnq7WGaVGtnfkFGx8y2RW8AKjvc82N5pzazCE7Kf3GT74fTHdG6qEn67SEf3K7hMek",
  "key1": "5tjzZ4NNPQrgnqRDJa2mp55ZNDfEztiaSEWQ5dHxWupkQyAL6GQMNy7wvGg5DxmqkqzHj481crfW5X9DUBmSNmWq",
  "key2": "2wqs7NeiZxvinD5qFr3FcHc9qkYUPyadyokSteDNKvzxF5nvTPc9fcrDRkDd67rtREu1Ew7vgrhUg8AbCDgeZUu6",
  "key3": "5YYM6adf9MW1KpX28t9pmo7t6FpN14HsiJANdVZf8fZ7cpva64DpzhQLKaZc1A3AxAACjzd3wEsJknnpLWE59mPL",
  "key4": "2phvHMbNYMkaDCdGvLrXqn8ksTtgSMcGtw1xEVBwEzz7asVZehxEcs3eUzycwJfbMj1FHUYVuCqLgG3Gzn8YTYCo",
  "key5": "2ixgvyKmKazgHdAmP4KF9FGYoozGUbBK4UdwR5841fHjMxT298ZZGY1Bz9CjeW16VXtztqgEm3U4hKmPK1qtsSW6",
  "key6": "2uEvbQxfSSpihLY3yGwrgFLvQHnFnJD9HjEqAoj93FoFHKF5qFCs9NiPctqJ6VibZNT5H5MMet6N6GvhKD77UTgy",
  "key7": "Vu9CPpsG4xX7VKQyNWPD57nW2fNM8K4Nmk7PsFjdv1Tj8XwUnVyQJ8W3rA7mphotXVPFhaUeyJUcbNpPkRRXRdA",
  "key8": "2gyoyjQk6VL9vZjoTssT7ibEDWtnqTdSVfr1A4bSccYb9PCP2YECKos3nXUqXtMBzkZ5wGTxG7FyrQZXX1KcSEJC",
  "key9": "3ztJ1ci4T83bDBBWoNSGumuvAUKikvpKUhaKrhuP8LuM9CLD5nQVsBxTakm5qiHd5SvLRQTeg5BWzUiz2bxaNtQ4",
  "key10": "wUZqNn71GX7iHcgV9T24b7oSP535e1ZosGnNWpSWNfGJUZkiQUaSogBnZiyUrPwo3Q6Ubuwf6bCw2UzHYJv9BkX",
  "key11": "5cXbhL6fjqw2L2MyTLbq6ZtR5tiit8ck8hXNCu9oNMCxic1bWHq2AjhosMRikrWYu2NLi4zjuTNQQaWSLby5hAYo",
  "key12": "2pBjh4w8RByMweoCVS7FnWTs8psPo7Zr648HWpv3MC3Xf5HFH4AkRMeGsZ5DhBhYBKMq2dC8U84Pv9BeDRKbdYtP",
  "key13": "41RKZUcXjox27QqQBs6fG1CZFWUsFqmornoEYfFukboNpULJNqDzJ1nhiQ3bX791dmXwpCUdWNfBi5dn5ShosbSZ",
  "key14": "5kEJ8HKFy3ygmNSTUvTucbPnLw2kCpx1WThwKSvuPMs9WEDriwv75E1rfD9AXtKLvSK9KK4XceKQMRunFsApz6za",
  "key15": "4bS65tSDxd2KNDExgPQ5Nao91GYUeGb9SAgYa7Kq7FFzfqLucg6beq8ZDkq8zyhp6V5BfFx85Scn2pKTwYHkytRG",
  "key16": "5BtMyzG38H5h8uHVmntsW1Y1xM6VWpvs6ct1D8WYTUmbiZhmJCjqzCUPpp7SWA65ckoFDjYqrTzcxeAHzaKjCALj",
  "key17": "66Vhqe61J4ic9sKubh6uy2jgVMTcyxEgpePQUeUb92n5qGuPt7mkpqe1idyZmevYQ3k5RVmu2KPvKug23vVvA4GH",
  "key18": "GNH36vobrhYeS8VnP96Dib3ZpL4UUzx1f1tqNPS1fCDa5ZZLDd9awuGe9bu7F1o1Ch7q4G57UagE2D6oS1S9rTt",
  "key19": "45pmtUrpAwn41DeM3L8cJxwhLWbiZWkxodYm56gwn9qezYB1w3Z2BSaJGyoBqAkFPVBQzqPbupmBqfyjzvpUryzq",
  "key20": "5SNEUHTFRQx37wCadmxtVpdj1eCNbvsZUzHVzPcLoZHuT83mnVkfDBmQWx82vkZwFcVG247EiCR43hfMW5MBvhvw",
  "key21": "2zqFjSayG7miP9U7QMQrQZGck6bV9X3wJ2KNHGZq62A7svNFmHW4ymuy8YK3mJqBPBdLv77SyP3goQYeHSzh1kTj",
  "key22": "37YTZoSgV1g3XeSESotFduVA952KH4jfS4GvrywE9F9wD1L7JYP5AtSejs9jkt4hUqHN4MhZ7K8MnmorTEdF7aLf",
  "key23": "3vvxTXJD8S3s9kC8CUm1JCQPp9hNcirRnMpSCqQiRCRD8sxJygGD45QpCv8CyqTdfQhZfNazEhNVSmMbd4rYpUKB",
  "key24": "5wiFJzZwt5b1xJfVjJw8DxjFcVFQHAMPqyPoJpbRvitEiZbTgNKxHw8ZumKh3AZeJDKpVbB1kEZh1o9CrHAFS32T",
  "key25": "2xBxc771YDuENzXnztBEsGJgRWgqnsYqXtkBj2RXYkdxFZPMCSZvHFgjgEVubKjpcL1z5SH2gtG3ovXXJnmsAhfk",
  "key26": "4GvzgTBEktZ3JKjWKYQfqHwbosWbFVyH1VxyrsGmnS7yhVQpJeyv1horLfHx2XVisW7hEgCUsTkCjkJxY9wfYTaf",
  "key27": "4XCfzyjcoMWEQ1UBHFG8DTmRjBzh32H9wmmfpzwScnfYbTM9WoNW62pZMPn7gwQgN8cDHePVzggkdp5n2esT3b2K",
  "key28": "5fL1p2fczXw1wkPwoUevd8VByWNJA8pDD72tPQxCFoBWgTVcEy7d5bHfWDSuD869enbXmMkuSvn25yUTmjtNvLGN",
  "key29": "2NgXRStMuCcwQ6Z6vEa9BpSxUGYQ6NhrC2X3hWovASDafcmtvEWRYsmpR4JZ47jFMpryn2ZceuTPN39rjbku73GT",
  "key30": "57MJ52YNQPoxbdpwsEuVSiRVqiuhidWhNFYYXfe5fCd1dvMVvwGvJiVzbSgj3my7b3nvbEj3Qmgo92FqUiPy89Zz",
  "key31": "4WEmMRne1Wv6toU3B5rB33YDsUVcoFs1zczwJkxy3yEhyZiUsRvPgT1T82pYNKLFA9E2ofAU55tfdfxMCMERxF4Q",
  "key32": "3mtJZJNS2DJXEbDJ4Z9EFiiSBXVTmEQxPq1gUWnEoNu3u1A5mxn1PEJBtE42z6GRrT6x2tFaJ3s1YWUi3UmotRvx",
  "key33": "45VU6z6iT8S9tWwpLEZyigbzd2uPk7drRvzPDppLC8n49ZtnF7yM6XuLZYRmMBUdvSQczAsAsLMa8FLAujmQXMUt",
  "key34": "2mb7WmCGwaUZBNNk77dVTuMhqQE69prTpQMyon9zbGVUPZmRZrboy2a2iFZWfhFx4LFRZtVuHatbmpDpBqGm1sMp",
  "key35": "3NhWhV6d7DQimS1a4fCo4YBJJ9NCkn8mbrLo7gn8nHYgXfGLggLbEVHQ8YHDyd25Jz14Jj9Rt9eL2B92FyH4wV6F",
  "key36": "4M9D2owxyuPpSxNsCj9nCdnbr1V5NtxFFx2DmzqDwecWSZbioUf7xtgXcQfVCbu6pmbsCTnAPg4Mjg5NN8kQqVr5",
  "key37": "2xRJRo72EjvZ8k2f73MqXpDTiFwrTpASg8PSwUk2VFi8XUec9kvVXkr6asqy5B5qhSpUpSXmXMpvqu9cRC9tvM2e",
  "key38": "2KFqbHcFPuZjnErjQ9Ux8DKtTA7ZMLwcFaHXPhDHeovidYnVCnED6EB4R5qCCFtEWrsNGyX2xv8DcAoYDx32HXqV",
  "key39": "2t664rTjxFtJ2CePFCuKbjhPvFwpA2iCHzJrbtzeRrfK3Kpofwddj1enG9LDGxtD3JQS67YqfP7vGH7QJsCBz4Jp",
  "key40": "2NGXd8xbWnyG7tPqHtbyfVBygB4gfQ7phgHWY32TXU9126po5tgcwkUDEpxgHaKp78oFP6BUfLfRJjZXvM9d9Gr4",
  "key41": "3P9MkTXfnYkZn4by6sFBvzYFTgDD49ZT4QYcfuSfzFcifvHiv8y8B68XfVrbtg8GPJ8qNJLRJfd6xPReEWY9DViu",
  "key42": "4CJ3KxPvzeDcxXrLYntPuutNfukr5ZqWGGFJARfWWoeCQw6EWFwTLr7jDExhEMzXRw1rVS51Kr9LDfopMPU3Ju8h",
  "key43": "2iLkZeAHrxBcaEiy2YhbYqGyWH6mHd12ANaZNhH99uUXASicJEtSSF7g9bvz2xiyLoQVxdVKQqtg1gpkaPYMx7LG",
  "key44": "51TK9qMQeRqk7WMdQ6oJeLEh2ujsAuj9eKepN1EmLow52e48g5pdbMePvTFktfanLxADuurXWYvN9rqKx1KcniU8",
  "key45": "5LxUSrk62Kyd6ByYX2MfWaYNmPRPzErRnrgyapFxLfkLXvnriYpWQKWEKKqNc4HUJkDkE9BAWC7R3TL3kjmT3uW",
  "key46": "5NTvfCkXx7eiUpoBDnWXC4wW8Z1FKs9U9m6AxqzxzaqrngR3h77F1DGiNXuRRvwGtjG6WJi13ykqpgoWHvXkMbe7",
  "key47": "2Xg4cAExKiRe1G8AuSEB1Knuv9ZtVsKi9nXqYecdau9rEshENguNjq4XxWnkZPxQyTr9ngVNwpEMmswhhvuJcEMq"
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
