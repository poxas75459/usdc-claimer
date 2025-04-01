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
    "628NKzDNk4pFcv5QsRNZmXZPRGJw8v6axVqLd7DjhJzg91hvu6q6BLK8dGSzmLifMdrQRV9XRvytnXPrWaCb3t7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1eT9Dbe5S2R53maDnSG5U6ckPT9YHuxNKDFFFLpgHU2TMuoxiDmpRoHmzN3BzBQss2YaE4XnzSGHRH54CRNJXZ",
  "key1": "33YpQtptN88zp22mHxcA9PWe6h7uen4athgugCZEej5gbqeQfYcWGhoppiDfmvG3NhBhPyrarwRgKobfaQoBD6Dy",
  "key2": "2CpZwxSG68xPyZL74PUXRDVrn88zNT17N4osS6DvjJCUrYR5wy9Ld8YwHTZoe76gEiKUJtC87Pcnnnsix6LKya8o",
  "key3": "39QG9cumNviHNocbZhVuCNnLNiC321RoytZT3NLfLUrgaeaANpt3hxmBK43WKrn1ZRzWGJeyRwwYaiZ6Ymo3z7U8",
  "key4": "4NTaFzbo4Zcd8zQE3Hk9snRrZoKCHZBwKXUXS1KJf9un55Pyrjitesmw2kjJX3EWT8QJqALK9ZMUActpFrKna5Pv",
  "key5": "4AvG4SpvGpqnQUazvjpm1fE4enRnBNnf8xBmEHPfpf4D7VgWUcJuSa2PE8APiLFLHPRgC8gaqFCjJ5YrJAnRQXuG",
  "key6": "mv5Ax98ur5JDab4uZxz9NpTbJ9sBe5QN5341EDetHaagFXESTsmGtHXgKdN9hqKkeUPJmruh4kA3gF2jTDKji7v",
  "key7": "38CdCyLFi2knzCqYqYE2KB8zEo9FtQfL9jG8zB8R99roMj54AW1GZxjNu9NB1uuT7HiULCqTyvCvaLEtDNBwcELG",
  "key8": "27MdMDG6NxYtpAitdXnqwieieGYj1Knq3Br15ZxBKFx9FqzSW3giCGUUoZpJco3tAF2bvggK8YKvZyU9me4Gr9nD",
  "key9": "22iWoiGATbgNG4AGVxayQhvcCjRsQCn4rpkZx36QR49oLU3b9KQ422xLU8SPJ82dibjSnXyrAFXoaBiF4USjeHFB",
  "key10": "3CpyWkfUq5LFqonmFArisFPy2itktrdpmNmHJgB922To7LSUWEyeJsRDGX9NMvbs7mWN9r8f67Yo4i26iTXYAqTk",
  "key11": "2FKytMHLMtuKsJfEMNixdupeLfnnCCdLgYTw5fgYjFkqY7rr1i8nakNPHpGf1nFfk48JsMu9V5JPYsMyczNgNCgi",
  "key12": "3jWjKPAfjTHifDsfXeKtxegr6SFHAbYY424n5E7CF5YUD9TA4Z7BB55DaLTD9NvwU2c9FSP682ez5WiUgwd1eui8",
  "key13": "2k7x3ZpQxUfW3YCC3gVwPS2s6g5uXU1tDY1q4oY5m1ppkc4NSV8gJuzrkW6WakZf4551tR3JmGrU7qgvpTzbA3Fz",
  "key14": "Qbq1eHR3s68bEChFK473MwjFKsrdM1z29HjrLmCU14bdB2wqVX5MURJbWE6Wk5hEPMxhgXqGqFaeekJysBicHiv",
  "key15": "4ZXnEVcfsco1mmGdc4yxD3mZy7rzq1CnZtNfjgubZB9Cns5GrtygySq4JyZyerdC9dErAsXUkGvjBxJo9BnjPkzq",
  "key16": "4wttAHXF9HbHRGvG7rH3fk2GK6vzWHht3HvdcJTnhw6WZtzEzPBvV7Argow2mAyMrZt62ujsKWwCh8XznKaQXkXQ",
  "key17": "5ZkoGF21KZutnEzemWdaXp1HAdK9BVigxYdv5n5K3tJ6rvKg5HeD8dsFsUc4LwYwVQQUUSNSBMzu7kNiKiXNRdv6",
  "key18": "BGQHXKxmRsAFguQfW2cTRazQ1Fp2JdyysPJUQnc9CqPfTWiwZA2fHQnw1a7qacC4xBmkXJkJ1FCBQHyDDeeSQvK",
  "key19": "4L6YSkBFrjNJcH2xtdTCzk1yaR55N5Ym8eVnL1A18KNGrwEiekV5sXyBFmif6q2AzKkpbLjZg1ZLgDJjmwPbxYd4",
  "key20": "cMrqV1Re1sKXvqd5iLRiHQqfeXsWK9oPph8T8ZSf4MiHNheUMhT1z6uk3BVYKy7VnLnSdfkj93inxYdkAFz2G35",
  "key21": "2EqYTUwTMe67LFw51LAvN8mfyQ3SJtuuLASn8CRosjKN8ZNyqJE3xFPtt5g5boDx7qt75DUKqiNkThfJoL46RCcM",
  "key22": "3NnN87bnJMxfKUNRQhf94PajxC9FfUF8cejMFYr8eKiMgPAf278W84ADQK38xGPhyjmywvxxTud93kP2LvMYgrHR",
  "key23": "4y8JJxzPYadCNVMUrLKDs9DQuCiEuKMZLDF9ypbDBwvRHcKJFyNpqQwJ3YCvCFut8PZmWRxEG2AEf6KVraiL5aBt",
  "key24": "3fFjDmu11dPa2yPGF4J7XbBy78SE2czhQcCMXHYuSYX9DmvVhNn1PpngkAJrtA47ubAm2LQpgGuLRng89Gnft25B",
  "key25": "3q519twYNQ1zd7HMrbws9gBdGWbfC67RR8BonFwysosZC5zjCE9P3MixfX49GovDWexqkWgqYU4yK7btKJJFAcTL",
  "key26": "2TK4CxHFnwpKjGbC3iExhXmYHZEFT5zvCUzJ7MLPBzePQenFmPAqEX8Rwo6oTcNRrfd1XFmwxdYktxKF5YegbPHg",
  "key27": "4DFYy78XS7cnFmcL5wGAk1Mrz9QUxF3jdXsVNTf5ReVChTNWCTKWwbrJy2XbC6yGZYobytsHjzLuWA2DkKLd5Kc7",
  "key28": "45j7cUYBTwzqRjh2t2eyXuZrN7qmpaCCPEgPRWkuska4WCr8KmZNBVsmLdwRD8jZKLGzPjerjV7gK1FLpR1P9j9R",
  "key29": "5KkPoA66uCDxSMJC6AiL7t2FD38FpPSqYXKYhDkDkKaRyadAmzPG7Qg82DM1yft2xE2kAag5BNJaKzN3wtZNHFfT",
  "key30": "5sa2ggL9heKzJQBLoXqVBVyjUkfv9XjGQjag4UiaouCJRvR53qXaSrXqrTVriJwoAqBKoGW3yWzngJo38R7GgX8H",
  "key31": "2KUge5ih5ujdDgU8wCc7KU9TpR7Z9wNgS1Y7vf12aPe3AjxUBxUW6WbpGoopYTJ1d82owGTtq7qXjzjaDsamXqMz",
  "key32": "3hpctCfQJ92MfUse5s14nziSSZAxrF2hyPKXoiDpNtuo2yM6crx5TgBvSeDD9vcnhqDxxbmjUJa6itoARBkQNBzG"
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
