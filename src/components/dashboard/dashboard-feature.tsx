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
    "2drF3JTPtznYGRMw9hYdGsbmy3A2BQSMc2LocfRCoGMQoRD7vgyvKGso1kwxNhatxnCde6EvgPdzziysemrpDSUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rtEj94guB2HM4PMUFCHvS2LNypCgeUsPGWwU4tQzK18t5xcJwk8A553edswTWRaPV7uvZPsbnqJ31Xuy7teo352",
  "key1": "5V7r2q41XTb9eXGkQ6cKtmF3HWMZqVJGgpwpgvf3dcJUEtyhU4fYceRgNrRFRYXBrBsZ2yNGd6342aTirj85iYnQ",
  "key2": "64GdsCozVyPDL4zXC2YmfrwfEeoSM4a8dBmpWq8HhwD7R6rV3EgnLCzVjcX7QQvtNSHYiMBocxQbyt9NRUzvU1UR",
  "key3": "XjjXo54suJRFv1QjnP3d1zY7QJknuQ2wPfqzGzv9jLSg6yuVh1PXWqFPxYGGx7ENPpri6aojeAndzvWWHYePru2",
  "key4": "53E3DYzwEZYLkdb9qYKLy177GrLv4Td6x1DDPF5dNGqtzseHazrtyWkvw8Ko5sNVoGpoFmBhCRBDAsg9xBr12KKe",
  "key5": "e3XnqQS9tWdKfeqSZ2KcjTi6WeXSzydSu8HZNvcSxifcPGJ43F2W7E3rBg1fK41j3N47H1tetqBKY8RjHu9jrK9",
  "key6": "2HWyfRyTtnFmUzhdkCKnbv3yJVJEQDbbnT9U7QKwA856JxxyTnDi5ncpPfGioonUPHWkihk9sqJqukcnu3R9uH4i",
  "key7": "594h6bjpQ5MaeH8QCw4ogrpxqsb1vKfdiMFUMhJBcyiSEiEmYo1LQSQZnpvD7FCH56JTEPVXh7jmVwSoRLnPtQxe",
  "key8": "2QQNpFmkvjpDjZYQEUmW55BHNTPfoKXoXJhdLbmE34ZCibZcjxYsyszRNTo3HaVCjZTAk3VnxJ7FnK8Cr5ojmfwN",
  "key9": "3dnzrSXeMw3PemNXYG2T7SXpGUVPbTdTCXZGxXYqiNf2Qo16EHUvvtxZqfkzd92XavzLqSH6r9i3kUmExtucADJf",
  "key10": "2MY63DNxUimbnVQFw1TNXXKL45atZQS9CdfuAn7sWJfBuG63rJMVKY14z4rZjy4PENWP82HRAJkVe8UgEUdnq2my",
  "key11": "2FMJNANd7Nh4moD72RuWMAQabMwbizT7Wi5pRgyRCXZ16UPcPcoExBqK6sbdLuNjUnSvweGMEw6w1JMjxXPT4LUB",
  "key12": "AZBupqj4qJ8CwaxCpkVRfQ97nEdBhMKBsc1pSBPX9HXHRT47ZoFjezQisiFTJ1RFRaW5MAKa1un7RqZmKbvt24V",
  "key13": "5Hq2iqHbRBpRv59STkWErBGqGoN1kCfMKU5qe8z3kDxwuYsbiJ6NG8qarctoL6vbES52Z14vGDy1fZyvFKLzENju",
  "key14": "2qsEJFozraCCWmuTBaTkgrZVnnZQkCof7AtdeBnJyVKHX9zfYXzTnaqFBcwJQSec37zu6gPW4AKhrYm1tcSvbiu1",
  "key15": "4uLRXHYdi519v5jzQvAkZvrbGAq91NefkyqPRr86znirH6kHbCQhAnad7jmfAfoQ2ZoMyCZ83uefAF6pmj1ekTLK",
  "key16": "2CETDoV7M7Zj2ChUUJHnEvkEkttv3frKSg1F5iH7ppcGCRBjSEVZ8GEh57BSE8BrXrsKsHhQqFLAnKEkTXbQuQkZ",
  "key17": "2rFSAmbXW4YndLucTs44mKJM3JVJAddA61DD5NPzxNnAoSk59V7RuSiXpeexg4FuK1ADuLbPqTgXo8TkDUrwX6JY",
  "key18": "3ZnCfYwfc1XirQ5Z15nyzpLHAczyMJEHco5gdSxMy4V4LLiYepu6q8tegE5PwqS4n9PSyDVUkAg4hxjccPLURKLk",
  "key19": "2T9RzFSGtKcah4o6ufB4ekvwKHa6vC6aWjApSHPpD9xWkz16594J2uh2sRSAD7J5dCRvwQP4MtkQnKoesjpoHW6u",
  "key20": "4uXuPpu5sTD3Dd7f3YV1Vdbyxdz2HeLarH9RUCmqYpgXE88Up34HWhvt67WywBxNRA3oj5bgCaU4RHQemDi6j2yc",
  "key21": "2uZUFgkU6fQxw1RTq3JvJsG1VVBnQUVRWgq17q6rwU8Zdw4KNVgbciaeD6GcY2UAUBjXS77P7jcwiuSMwbwmuc9B",
  "key22": "4KH8gXMwsqZsmUfjTCvS2R8c2AqDHwbzupBp1851Nf8G6LHzgMWbEL9rzoJDh15hEytCV6EHpAb53yNrVowqVLT2",
  "key23": "4WonLix83ZiWd48fSMp8S3BVyiiAz7Qf9uDJGegVgFF5k7HC7QEcCGEQbEZeyEozEQivRNPoRVyuM69L4pndELZj",
  "key24": "HSgbMYZ9UgJ476Hwow5Z2w9CRttuHunJWN7VWdtRiD874GA5HpYTs8JvocoHXXEuqKggkvvrqFPMhgomdC9vSW2",
  "key25": "3nGh37j8wTVhAFHFrHtHQVyrxGi4GEMj58tPbpvmSMA7JuGnbZzgmAvKSWP7nkt66RWruuUpk8uRt9igibQWd2Hz",
  "key26": "9e7MyUzZvd8VSvMcZgb73sCSYuBgdBGryzLPrvYZcVodojhiXYGeGDjuSwpY7PQ5iUVb7QeqvFJze4gZFfdW83D",
  "key27": "5DCGbNUZQwKR21Mck34hSH1zzzG1eE3GjKuAeKAkSxQzBmCySK9TQ6nxJLPBbdTYUegcGkq4uSm1H4PqcKCkywgG",
  "key28": "32ia14Fjm3YBhTRNtHutEtaQQknftc9EUGLyfF96bJeb7Qmn8mz5m8BD7H8UguJjCh8vSptideFFJHVkqsJrLiYt",
  "key29": "3Da6ZsrTNunHufypssWzDCdSkMaautLsg8hZBkZtwS4hYbcAq3kWe7wUZtR8G6xLXFfPy5A3WR4zjbpWBdyTCKdk",
  "key30": "42enGRBGTNW8NX5sAY9sMzM248yscKPst5X3h771D5So1aNGLXHoKgP48NNoY2z2Zu9XzHqumJ1c6QHGgkjMf1mL",
  "key31": "57DDFPJMZm8r2w5nhU4M75av3H6XLCNXBstbBdRpokktAaxaNQd3mxVAYCbbmgLhcdXjxrDphCmBr8dZgcdsTJAk",
  "key32": "tV7E76RaxpVimTgjqs7YtYy8CKkREZZVNcC4RzB1KsVL4yHUnXNwjPQB7MBgsBSUD8ZV8NCUhseD4Py91wmh1af",
  "key33": "5LYhV9tpEVk985wGe7AAJbnQ1WFmGzVgAfKvEeHb1MZi6715wAHDK2CoTkSMe4wcis3fQNJYqhRHFYWeFgFqapcq",
  "key34": "2DrKHVUXnF3rdrnTBXMstfK7gXJLJFapasDcTr69wwMdrEs8Kc1ut9ZAPrnas8iCdCVXHNUoBM4ZmhTDvTRu4U2A",
  "key35": "E5syz7ZGaacJwnZQDwRQvKZiV19reoebdGeoo1AfKEWRJKmtmT2oQ9kRR1PY7krnhyykHywTs3SnTrjZLsW9fiy",
  "key36": "5QsR4ko2G64eEAUfiAizQ47ZgDD7TAY2WSKAvgFDyPojip1V67UWJojhfkasLnitNBBWpy8P3opCv1BLBeyoXiNZ",
  "key37": "ZV73GU4NherFkdxAxrBX67DSNrdX5oNnkp36HoCQztUqYA7K38oGbSkMHDZERkpD5GC31Y98N9caaJtnT2dqah4"
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
