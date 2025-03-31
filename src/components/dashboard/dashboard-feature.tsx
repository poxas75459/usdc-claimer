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
    "nT9UGLSEJPgdtGkq1nH5BqCbNVmKFpZxjwd4RgXHDFY2R57DJL5VqXzVVpRYprmLNoLxYfrinhqfepvfrwVryYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bAUn6WH2cwXGBPZPjnD5XgqVsg1M9oJxikNCmDQ9Pt7sA1Qey1gGJde7tJqdmC7mJseHbGx5XwpXGw2M28epPVv",
  "key1": "2dcwkgFgMSMc3AJGsfHtu39ipoVHFXAgtJKLXU6qZJjThynM4RqqKayNDtAvtRTXBoYdmMozDrHWzLQHCJJEKaCw",
  "key2": "412tURdw56rPaGBz3PJMJKRBaiXHgnetjSY7MpRLFSmb4WLnQoHsWfGQ2A3QPFis3XeS89irpuR2DzvujK3RnFh2",
  "key3": "qbGUt6PpTsdGnYASEepUom5rCYmW9xjbm8FnurVn4LogBYqkFWz5cCjqTNkZBPpjqwZ7fkbJifiD2kxWtk8zD2w",
  "key4": "5Vxt9M8q9Dj7YoAg1n1nYtoTatm612JD41HQacXKVcXGbbTdsEDZVfF6GZitZ1LHnT245wLhgpWoNQa3yrxcg9PR",
  "key5": "4YfwB5uT1vN1evFAoJcqNGhkryJ6BzPJiAxJpAArKv7C7VQJP6tKR2TsYxJU9hwj5VzFkdmgpP91fewWwX7GYvRe",
  "key6": "4zznepe2k6uWsNdPtSksj7g8BKi2ya3CZj4pBqsqwJPnQPks8m1tq8f7zhvaBuKNbEijSJNMfwqsCTrG4DnK5EeN",
  "key7": "5ATTsC4PkHrephkiJfdZzgaX3UdsaXvNmCnSDXLmnJpYsAdXTMnBb1UAf2ZQuNkf9UWBfYzXrknjHrdTm5BrZtRi",
  "key8": "ruFMAjTPmDmCc3JGKMDMwtM4G4kenqzRUkUsfMtqhDFs3Nocf7GhxDc76MRs9tNpcwoDvVqUmbqPJoJF3DXmYyf",
  "key9": "5bbMhUbsmeQ1GCNM7bcp1zzLnLMuK1QsrWfKRfkm3asyLf8hfLhLzXGdW26V1vBZZQZMG7YZUJW6bCLaX7BQGeXY",
  "key10": "5rejDp1wwab3XMyJCMBJaHjcMSa1o8AMJtp2N1zbChGoPiETHF4XzmP3VK5RhJpPjgk87UhAqDejjoLobKjtnAZQ",
  "key11": "4GGpaYNJXPbTQqf9PgBrituK15ATe41wWEyxesyeabGM1pjvbDr5R1ADqoJbfkqv5jpjCLm6b255CFa3T1LsM7QV",
  "key12": "4q8KgNdjCzeLBe1HjgUJBzD4MpnbowQNF7utyq8aWKQLUvaZP27xbNf4pSGXqgvakp2uPDJ57fyg6s7L8yxaSfmN",
  "key13": "5KxEiV48NRAnxH14YTFvKAQ3sVymwiBUVSkk8tk8zPcyxbsVe5Vis3DpYC9zLhKdUCrxfA3w2k8QKGPh8ZzAYEPe",
  "key14": "3aK4kBJuiPbbmAc3Qh7RboaRPdZmiFoVKqCna9aWcaQLKE4J7kMaEHGSsVi75oLS4RM2mYvswevN3FRepu8NwxGo",
  "key15": "3iG2mwWBDXUrqtsyEMq8E5tMZNr5HkMTWd5NjqyUMhyCg8KeDT4EYSWJ8AyRFxZN25s83N5HFCwhzxSNPgpGubkc",
  "key16": "5dEzAvdCQQxQmGXmLmWD4BBidk6fbJiehow1gB52qwuiKo5fRswZrWmDSEMjiqM9HUoAGMXt7YsNj5JXqM8y1wSY",
  "key17": "4oWfqkMhFNz2L1BRZ4v4s2ySBQxsWg7Wp6z5s2sioquEgK3YCBEaPKiG9s5XvTHmvUGZjzGEkoQivr4e5QdheCwd",
  "key18": "4xqzbbSxZLm2TW6pVtP9BEDsBKCk6XpmWBMC92D4XDCJYLjatC8FtCFHXbLcwGQnQtbvR86GBrKPdmwdX93TwUn4",
  "key19": "FQQssfvMUEtmqzTNcAZTZgM6Jt99xUfMpHDZ4pxzcY3A73AA44EpMFDbvx8ifoRtvjsYsZXbkZ2QGvQ588zsRqJ",
  "key20": "VYmiswSWDAJLsDm9PaLRTJB8JcrfKCvFCN4LMv68mWcus3L8sXJT7ePb89hhyRVczVQvpZ6aAEEquCrzbfuBytc",
  "key21": "4dFVJYWxfdSu6X8jbFhS9WrxDtZTc1zCVqVTAcYcy249v32qMqY2Dh8p4w4DTjsLzPxLHVR2b2HJ59bTeerKkhy1",
  "key22": "5vARqZmdSvmoqYdsVmxmo8aNb9qk7meqob83P4fopFhtt7hYbTC28GRm7fmFktjRaxbTwCCEPTW1VdeCvqqNDrHG",
  "key23": "2b7tyFBwYvpf7XuEtcVU71GC7WEY2Djkj1R78EGL1D2WKxUAaESjEi4D6FZY86vj2tASXNbA7eVnMHzaEdNmYF4H",
  "key24": "5DHMoX9WHJEVR2sgwaBXsYMoe36ffCucBU7xhCPHk3PXUxzKYr3VbW3ksaGwAYtUGbvLRtMhHHnjUVWPae4jL7xH",
  "key25": "3aFyanQFZSRLLNVwdJt65DN6xqDH2pN2NuSArw687dqT5HkaBtSxtYCnCTvg5zk7S7N1su84AYiZAsaA1segVQfo",
  "key26": "pLj7YVmChQEsfo9eePh6Nz5bK5AkzDS61fCMCyjZRXMTmjSh2oLEi89sy64uArXi63dqbSqFCp8mGLd5LjbwtZp",
  "key27": "5m4XiRZZzu3p7hhVGbGUvhoSdJ3HpiqBMdTcDGUxRFQNahUEwkomzPhSG1kYbSYnywb1URbbcvBw34dRwz3gx1qr",
  "key28": "295t2BhBKw5raK7nBu4b6W5RSUnmd1U5nGFZJ7TEmA7UgofP1WRmo9M5PwrZ25Q17rNFVKHZmojdqznpYgP5UgAt",
  "key29": "2w8F8kWmrjV3QVihSRY4L6pPNKnwGY16D7hsetfvsKFjY6cyLPJyeaVaYziCkXdsmSAAbd6Pp6JPTRw8xGArr6he",
  "key30": "ztTohLViG1EWFDjunnLexpNFk6ELEhzJG7GP727fQ5SDemwcTrVcV4Wg5aQwkP3Ho1PQFphTo8kEJ6bSCsmGtmR",
  "key31": "gnmVrqXQEXUptB7xHNq2zXzysy6bahXhpck8sJt5p1K9EFcMFc6NtZQ7932qZM2k4gtkpzKfYixTAsasB4KGcPs",
  "key32": "3VWMmB2FH3dPui6Q7dfbtUokrmVoXDL7G1QszFwmzzFTeM9921na5KPGsVb7bsELc1oxNW6o1HXgPF9ge1RJWisW",
  "key33": "32N17PhULDXo5AsE5VGYDMNT9aLz9cUqXPkdWUiSweqpjtqsR95QPfDVzhdMSoMsgarY7wkmJQWSXVap6QvQ1mwY",
  "key34": "xwZtxtsUXL587apccMoGnxvQH8SXxjuJwaga3gGZCPLqh2CexbxratRYNxQySFPajcVbTutoFHzzJqF8riH5xuq",
  "key35": "1t9EVMGjFVx3m4DGCwpUXcJUa8MnqJSp9wVBUYwR6rSSnmR8BGsXhmSetGcXbpR1m6GXQzriP3QPaMiRWUDNJ4v",
  "key36": "5kd8zc1BDV2S3xfGoKYrNpbvijsiRTu9FYanP6VuZRc4iKca6uwKRUE59xWAzvGrttmBFpW16jB9BU16aLUmDDV9",
  "key37": "4PwdcBpyVoKg4UWw2HZ1mh5xrgu7YXquCaPs3pmV9qRcQSM8LK4vs6jmjEN2pnEjwGbnh4YyApkc9Caj59qfP9y4",
  "key38": "4Ri952x2nseRVPuZkPfqbYAh8VcpHXUGKECrobs9LVQFyKXLE4Mk3W5jiJmt5SKA7zqhCeEYAUqREhF3WchUmitC",
  "key39": "2nCoqqcPgLJ9aBPwdHRSmB6FzzwQQjwUfhLmaPD1xuFSNRfyFoz7sAw9KY9Bru42qVbvzuXGJVRAVymYDXv1BexU",
  "key40": "3Rk2c85Bp7J7Nv4hFvFTbbb6P25VmKXsZt2MT21hRDaBiqAbKzDtcwAWXH1NgtsPoXL9NfR4FMLrsCKRL7L2Lccy",
  "key41": "35JAh3i5uFW9hkwNGUhcDcNQb3z6T9ZkVx86jUwVDekXRAUbTRQQU78sJFtTEXXNGwg4E9NMN3DKyfHtbgQMWaJu",
  "key42": "2WBynMTvQfzySPmgxAyaLG9CGsDotdCU5dVX5UynCaeVPpHm6CTF4dV2aCAMuv79v9W7ZkgjQxSUTaoAcBR1LMVs",
  "key43": "5wD1x7Mnu8hj9C3a7ZMTFr6Mt3chVybsT9fgPRZJBucUreDAqoeZKnnVmdrtaYKQpw3fLTsuLYHgJLiv9ZtmWqjX",
  "key44": "2zSckNACr4NSKyd8tSmi3r3zMh8qmhLhwLr2nXpEMENeLKqjDq4w1Z8LG1nDnWEeUpmi3YvnfzThFcefxsf4mwcz"
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
