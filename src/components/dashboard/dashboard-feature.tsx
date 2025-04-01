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
    "4f4XopqkTsjE6J5EE74McThvGoSoX8NzG6xVkRRwainEN8G1WmWEYSZH6C89tzMPrFpUQZjn5tWUS8RUmuwaE9ER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aHuyGGwTE2PhGKD3AHqnJuQAq7fbkCQCoiEJaTDQyxAVBfvSwSduAbCLkyTRYi3gGqckHFSiJss57XmirGunKeY",
  "key1": "2SYK6Hj6K4XPaMfZ8NPXtrxaPGURXHbGZsHdTgQf6m1NWdYGwt64c6nhytzDzrCEoJoZMbjjQxVmL1HUrobzc8nP",
  "key2": "UKAPeEknPdsYn4jZUL7vs8GqEKV4CDJoY7B98LaAiT2FJBQxLP2eiabp2k7ZaDML32NMWBXPwEw3nDKFADePx8W",
  "key3": "2TcjKhWFScaN1xVYsFCkDsyvqWnmCXMMHDD3EJb4pjRMS4rHx2NxLFrHMY4pDL6W9WqGJ7J47AAYqnZuoKchd5Sj",
  "key4": "3JkTS8pZPwj47PhBhNuYHW2BpWsHjoTRT1mgsN3ong6V8s2dSPNVsc9Btxbt6PH351gkmA27Wha4hAYc5zwmrNRZ",
  "key5": "4pjXUR8HxtjyzJrw5BSN89nFbv3iNx8F7ks8555QPoDgukMx9jxJhT5jMwfPQfSbLRby9mcyKaN8Fsmzk3DcnKba",
  "key6": "APgKfT7R7QDFDv1rcMEukiVMVQaw71qNXMSnq8fWZ2swdnPmc5g2kQDtx7emuUBDuYvnmtvFCMWMQSfM7P434aw",
  "key7": "5RQMo46ZRe2zYjoSYZroSuc3GHCUYwt5PVbHRVjpcS6VE43rTLEvoV9yd4ivHNvbWfBCrMPMi3LYj1hTPSnLiJje",
  "key8": "3MyQw51V7b7bS5ED9j5En8qRnaMqq7CVx6jPhXAi24eST2mNpx9UjZPEDPz6TEoBR2duXbTmZ327jzDJXrtDo892",
  "key9": "2ZahyhAyKWTXujBcvWMm6vX22rKK5DAxcceJNh8wFKcqmbmtDYHDSsvCvNzU3kkr2f2qbxY8rfKuuQRy1r4r7uTd",
  "key10": "3BXZCRxuB9TKFhTqdjN8QsGNyNJqoAk8pUnUGnW6gCWrsY3NMKZuoBck3bgaM2rwhs8Lu3jLu9GjZePHgoZn1q38",
  "key11": "4X8N915tEwoJ3bJsq8EZ2SmJ8Je4CT5wLeuPVqUkWs1ji2dNdHqojfU6VKkJJERTufzbZhgaDXce86KwFHhL2cuQ",
  "key12": "5V3k5QHAKBx4b5eeC3UovL1WkaCGQTqwJATnigtz8xxcQS48BTyhoFRfCxR4BQJHbp3itzjd5JvsEVp7XatTQ8bc",
  "key13": "2hJaT2eiEbJmNw1JyDbRp7k1mRxcvhnxaGL9F2bu6wWaexCng1ZasUPJYcPC9tfDLqXP67jE8Uu5qkWmoff6KG1n",
  "key14": "BdDVNXszwLMyor4F1peppBJDTEfV6eksP2vMH1YuxuP1BMXoYoHqjARZV5WXWJr67jhWfyQeWjqVWT2L7rDVczc",
  "key15": "2h9geHxBK6wV8ihWPKPRFGMCzjdWJdpSVEVVPD6z9chiW37N3x4ZbH8hmjzpdxLD84hAXoKyFuDyRJgDtBndx7Ru",
  "key16": "4W52BuZB7KcKqan2uV5Wvko6kUH3rP76VLdg4tUpothCcdQdjFCgkJi527xJuriRT1ttmiuvtq8UVprcYxF9NGhw",
  "key17": "4Eqgn3NX6zW1QN61x9ymvLm1xUk783XmAc92ySe8bpFwHD9TUPw6PPEbA7Kjk73nZW2bfRTSEgGuhdKKywufHLeC",
  "key18": "5kGXTkAqRGvMA8KAGY8PkwgeiPjVFghQb9gFGsDQdUCo1oPEfmWzV3nqXaqZZgH5pEtgpE1saLPxT6ut5i5HR7wH",
  "key19": "ztyVS9uTaCeNz7wKbJfC1ntYji3MyVVTVGMshs17F6m9RxZV8pfkG5VDnZPmZDhM6kNbH9DbSyatZFjYgvAFhMY",
  "key20": "3EpMdoy2hpvQ2Cy31bkXGawpFWrLGHCtRGb115zN4xstQKFgSoY7SXhLtYCPVXmr3Dho8PvwfUtRG88CPujZXunz",
  "key21": "59UNjWVjCA1iymnzEJvmf34XkxbcKJMtR8bsZJamqzCC5z6yWXKPmDBBg8b9DzFwx3eGsMJVTuw2c1jyKHzhYcYw",
  "key22": "5kTsdnCy18WPnS2WARERdKTznXYJwSRqestJY93biV4R3Nn2uPB5hQPiaaGPAPyFeFpJJwJxSUJSEoPSQ1czns5L",
  "key23": "4xt9q2UTGoVm45KMd73fswBqbKhuaps8AfWJy5gR4iMqcryDdPhXdbn6QXBP4uxNaL5E93Jw1TryGJhK76Zi83vs",
  "key24": "3566njh9Uqo6ZyaULW1p7TXrk1aCd2iN6drbSpdCAVZdAEbnFfefbSRjX6CwcBpEMm7UZoXpkPZuSESrmi98ewmC",
  "key25": "uAnRNF77BLNhxasS79dbEEhLFduvXwz2T6vgGh8byRuQjPAQtv9nv3xwfabAJTP7V74hW65Wz7NEUu95G4WoVoH"
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
