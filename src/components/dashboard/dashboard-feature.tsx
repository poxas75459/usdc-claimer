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
    "2TddCvW1vxHYHXS8RBvE66KFThP58eGUuEGdKwt3R81gmhdEhqoXQ9LQcmYsXVkAJRc9N1DSiiiR2KUgW9kR9Sfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mRx3Gn4YD6318F16q4Vdtc6wUrutwk4vGiSHQ4YHKVYf8YPN1j5jS8QNzRxXzLaWH19LYKMqhfXYm4gikgdsCQT",
  "key1": "23v7yvvmi9xT7Jo5vzKEM2Avt5b9vQncxew3koV5nG6SiwmebmLn4EqYxmoKTXNzZWEEmy3sLMa6VT2fygSRNPBY",
  "key2": "5WwkFGJtT3uSWzP9Di9aSeucmcKr1jdFyUpEbBAWvDd2bSWCwiyMU3fNwUbkiC3m32wWeeWQqpBhEoD1AjVd3b2V",
  "key3": "5yxwsRhXf72KtaMjd6UL6SU9goseQ8ZQTvJohBKzmuyDmAQS21cY9eXSkmtwakNUWzJpo6JgXsi1fE3SPZMr7Et5",
  "key4": "5kBphKVbEsprufqBYBTz5TXsGHcphebvmnv3Nm5qPXiryVW8YhmEQULJgPB5monSHVxRVcm3MTTKkq5XcSHMNiDY",
  "key5": "391PGKSjgsLY28sU72VbyRSVsyWYHKu3abhiBjvgvicDT99brXSwkJ9s3j8T8QHJKTU8UJrps7yFyAYR7aGed72X",
  "key6": "4rXX6KLuym1vC78noK3QymAt3QzB8BNWQXcaB47atGDaLeTJ26fCcBqZvegwDSVTWNYV9za9Sib4QJj8HfUE9XET",
  "key7": "66422XNPULEPSKrntaDGBXNmK3BPeZWaveFdn31weN67WxxJP6VDR5av5b1Hrx6m2xvZYzcRTZS47YHeQpfWWoBK",
  "key8": "2X3X9B2gLCwNyqTXS3tKCWgY7VE2LrZuBFXKYpv1robTJ4MQJHnPu11VCUyw3oBYbDvC8bm6YVKYrobaJ9an4KNv",
  "key9": "4LXPD5Rt9AoSthwM8Vg73Sg62dPtnsSoyUcQde62cfCqh5ENJadWyAL5C6PNhLr4NZuUDTHqLrXcnqsS1APpqcdW",
  "key10": "3191EkRD3Ci3huZF5dYn1s4mp38dzwUTnPg5R4yoeadr8RELCuw8FNaygUiuxxzgqct9BS5zTPcHVJVkHzYWp387",
  "key11": "64KaeWk2smf8aStWXRyFTSAEZMXAoZ8uCrWnBkFX8MLZmgTuF1mG2kQZjBf65oWeW3B1rEscTzAE4mN3uAv6xEQs",
  "key12": "4tDn7K7tRrHxgcgdmZfVQU5YwZ8PkKuVh8zrXvv5TkApeMmuFf8nfDxhE8cak6K4L7ivPmATS4m2nWsGctRyBRFF",
  "key13": "3ScXkbwn6sxVZxHqpZUYVmK7SJYwXei7w83M7qBWUbEwK3eNftu1N61bf8BpR5zKTaUsCxKETZ2shWN6wKtsWcEF",
  "key14": "4ZZSxsrGbUCCWR9VHSxPR951bvxNZvy3T5Qmze3r53JPTSauK7SLa4UC2YVFZE1HsRwzW269HvRHWXq3Vksr2id1",
  "key15": "5dZe9PAYheDF5gXWfj7KgXWt6PJJtxK3tWMU31ekAN17BDK7Bm1AudLqyjHM3QF7U3YVtxdp9JtjtknVMgqzHvqw",
  "key16": "3cpip2Cq4a9y2Qfsc6EZMc3hLxTx3fAKWgs1n7DZ5feRqxfGxrwuvxssr5qpKQkMKHYSfXPE2aZ1JAfYbnzkGmn8",
  "key17": "uw8QEWfMmGTmwGs4WpRcJR29Hk8LS9d5rVjAXe3WUEbBSRPKDj9128L8PFpu37GayPB1EF8JVZjFW3NtfjLLKUF",
  "key18": "4V57ZZV5eU1Bpr5om2JUNvenYXjzKDGYRLnLJVbCF9fjP6bmmNhU6HQ447Q8VrVEMQgaXQ7T7916BN9EadT9CWZ4",
  "key19": "N8XJBcxtjjeuW45tWfYr1XKYJatSC5sFoPptnCiRdmyvekpeo2Qpf4w1Z3ZgMVKSrtiVa7wm1FA2M7C6iS6YVGw",
  "key20": "aW3pmD47eQFB3LVSiEaqFPx52EZuELhEhBZpgGuWdcKKprcECzUMyfYJqyvRjU9wfGaEgV5MXvtowkHwCXxMtjh",
  "key21": "46JqHxi9u99hQEZiCVmun88VAXGg2ego1pHs82AYPxULG4KaxNvPB99emEtBHJju7gVGaCbePpybebEuL1oUbHhx",
  "key22": "2ZL3h5y9NvSN4vJVNruptevkvu7s99Gie8zn5UAHqAZa3E3KfuqrD3hNeRADZ1HWpVbYp2XJagiwB17WQivT6McL",
  "key23": "65Br1dGcdhmafpm8GRFyExCivPpSqFhYaiKTWTNXBxCqu13SJbFn8zMxFYqXAhG9i3L4KPHs46Q4gfCgVVXrJUJA",
  "key24": "2gVhprbdZ1y856MY6wKMRgjtghdM3dvQNuacXQp8fUvLFt5qLxHCYMNAn2LuLoP63CfnauUZbm6BHJ583WgP8ut7",
  "key25": "3fq5rHpsTA6YUBtDYTyWxE6KhC7g7oU9T7uA3Kb956dShLAtepsdx4FfGdc51G3Sv1Zu2GJ8G6yur27BJH7DRt25",
  "key26": "3RkF1LhzYj7T8cQj631gEEhc3zXvdgxiqQAQzZcoNkZuTXuDTxJmEWUeMzGvnwhH7m4d4PXBwFzAyCwWhekrv1Ep",
  "key27": "5EeGh6MxvfCsPMxSJZu8vGdRQgugVikNQhzMRLEmY5sSPhc9SL2PYbL8yxftHJWmwTjcrc4ByYgjs6weEWPiqtGu",
  "key28": "4fr9JE35grBrBi3xYtqBxG1xdBXJrquZaJk6YT5VMJYtj6UFAXF2S7VemXAVhmiBvXorXLzd9w83kzrdg8HBLCQr",
  "key29": "4LRZTyZV8HbBMmobwC8UZmHSh9EjGEyvVv2QbDU69GKL3Ff57VxCTWYUWoYArSGBMyZsrbSoxKiv39RvaJtGs6qp",
  "key30": "mKh5jKhsRV8Dr4vVhdSu2JggUosQiTekxvzmkWpUh4p1LsPgzgzNusj8YFSMyRU43aGsDoCsPXaxCQy4KoZbnnE",
  "key31": "3cMpuDHWZajUG12AYHgd1Dt4ZUpLstvT1nkzKXrneehmtN6vz7o4jRUA9u1s8NXVqLJcWVPs7wW75cZeEq2YBcv9",
  "key32": "2jCc38rne6V3u4kjm1iCyUfGeYHmqAJHwacoY2qt6815H6wHQ2Hw2xjFCvAWQbbfR3UbBN7i3ZT9U8uUurToxu13",
  "key33": "2ZKvqHjJztwWaRHiwbfrZ3QL4jpvAFhdkyngcNKLfVKj339uFeoiGGZTeoQpQxhSaT121j1Rim3QCtopeizCnCyN",
  "key34": "46FvxjhwDHaHvXw572ybgydAXyTGgiVKWg5HoEweoUTVBGkXZe5Ts89VJ7FJYEcpBqs1bGMeCSE99ciSDThRRdMb",
  "key35": "3wu8b7XUvQXXQRHjcEZ5ugKUj7kCd8VMyUyv7jxYjR1HqpQnCyfWioa7k86rbKypk9v6pd3hkNTC9B11SpAvH69M",
  "key36": "3vAGUNAJYYFSCFUbLirjYEi6LsXda7GAbABe8QWLm6umUhRZxHKh6wkbUXi69Yxj4yPa5HXUU3wT76aFXMxZs7Nd"
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
