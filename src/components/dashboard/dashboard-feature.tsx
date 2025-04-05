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
    "4s23jWzrZWGEuEPtrGCEBqo5a19z5yUUZBBa7Xs6Bacx2DdxGUCQMNkjN6oJiQ8dibRHzVD13fEhtFwiEG3by7gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Gzz8rsnmoztF6AXnBzRRECwWGcZNRSLxmbh3HbCGTL8QMuFZSeX8KiCvTAssZNhRCxwPR9dBbP3fqoZLQ4k1T6",
  "key1": "2kSojgVxHPTSv8TvfbivB3gsN8Gb8AMXVmDTghmWKkiWYvFDSjvqsGcwRXNC5DNyHCCgnLvi13EV2J1afzCDvB9i",
  "key2": "3X4CUYo41Gg321q3hU8KRKa7Gt4Zt6nGno3beA3q7beDuYab7UX63qYWHgmcRoy93xgqvtJVUoi7jJw6ogSrgTH1",
  "key3": "ztBhHiiLbCEjyDjnsqRipbF4DDVKZXwdKDgcWdhh3iZfVm2WxWS3AWuRmc9fmCQrDnVh4ApSwrPQdg5StXB5fg4",
  "key4": "5j4i27oXTcbDbUdUc98yY7Vuc5R79F5696KDNFW5nMshrLfQ4jjrSberdeYfHfbtjiGZzgmq5BGxjCrR2pigPWhb",
  "key5": "2h8YgMkBmmuSgSox9ewiVXYtqAa5vFTW62CPKEe49kcCxFkP4WEH7JuQM1BpMDt4evqrVD7zCrpg2bih2Ljy7itj",
  "key6": "2Lg5PQc7zt8APzSfWcATjujz16J9MXSqtDEq1wKUJZ3QJzUCcnHRGZRDpkJzNpq86ZeFQJUqaZvPXrjc6LwLMSTp",
  "key7": "336sDq5igqEppwGXCkwt78NrJWPQPkZiU4sXqMBrvRJkMSBA9r8zw99GQf7DpR5bQnDE6W78N6bEtKe3UkAZNDnK",
  "key8": "2H9ujxoGPnVhNCGpFAskxoLh9wQbP2a287Z6rAWEEFWyR1o61oDvRnWw522BVfftfTbbxNkx1Ffo2VzytZxHiRtp",
  "key9": "Ag5jWb5kmbgPns5daUoGxmfMRb1EedSfsZtMaNZMtEbKTdvL4J62HzwyxdQW74SbzgpCjRmARGAC7Heuig3GARR",
  "key10": "41e7xcT28Tqi7qqXGiYNBH61bETSEz5bVQmjgeszyuCStQs4XKZ2zuBic36TqtnNwt93cDH8NCHh3h5C3BpAVFKQ",
  "key11": "4w3RuepuYVWBX5NqLYRQ3VRRiDBYNVtmtAWAHgcoC2mwmu8FXKZQvBw3eELm3mevBa9121CYRaXoeSBVXSpakVA9",
  "key12": "36CksNc7dnaeRTfCiQBgCNh6K4MMAxouEw3AYfHv71wvPrXigoXtnZjfSUvvbbgqMPFMVSth2b8jDTmk9tf1oShL",
  "key13": "5SAvy9jJESaanCZjqb4xJRha7iZVFixt9QX99HTyyKdPE85Jjzei5qPZzbDAB73xomLF2XMenfDXfvBkPzFwef9k",
  "key14": "3ozxmD5GgBsmBkmLaKnp4KsBL2LHueUro9dk6uwBMmnDrnfcHbPToAazL8BkuWZrjdU34iEEe1zdPifKCbGiQVyn",
  "key15": "216FXEKcYtJNvRLJ7DgNADpxCa7SpbjYgG2dmbWELgBaLcQhbVdy1ZpnJoseCGXAoLC4NvpW6vrD3h7U5nCKC4vm",
  "key16": "4qJJaeS7pwMJvvpJZ7c555Vc8UF9wmgKccyVmFnQVQ57npB9fRmmT35FfjVc7g3dpoV2L4wBH4QMT18MWDybRMLv",
  "key17": "62KtpwC6TssFCD3es12cn2E2E1Va5izefdYx2ZsomM7J9cbkWCn5HmqaQKuRPqtuuhTeY3Dt2KqD9MvC4tb2Nwp4",
  "key18": "564ELoKn5TLYJgWF1Guu2Uegyt6y1faJjXSH3Dk8igK8xcKjEW1Gwagiiv7MqMUhSRMkqPjGH1nBaHkoqeKto2hk",
  "key19": "3XPS8udBNjchZyJtBQun2mBVvdKRFweCVvgEBVUET88r6BNcopifkbrLAzmhum4JJ8Fi1ZoEqkZt3MeLPaBksR8d",
  "key20": "MAeY4kT3mjh4BRq5ohTFD7dCt4PiHNUX63QNPmDGAbxxiwTBMCwt8BPsezR59ESi8J7RKPAPgX4VCSWTorjPVEx",
  "key21": "67ag2oPGps8HMGswameUVzaMbev3dpGphuoF4dreMWKtonZdcPa3vW5XaoWcwGbjVLuJDJZqFW8deAo4FiDauXik",
  "key22": "AfpdLqMn5Htcij1iKK8n46bPbyeNyoatTx85cm4aNQdmaYsMiXfYCnkDxuMA27qauJyng2h3tqoyQuzFQCFJHEB",
  "key23": "2qU1kJBANmba2g6qPWnncMN2ANYtA5DvwiuJ8r4FXEXiuCBfhr5sNfuSUBymreYodinx4sfNsW29SeGLybF2maxb",
  "key24": "2yvuaV6qEUhY6S27A52gFiZFmUPUabN7yNYXemMyBhYmT8E9sRQDaoifXJGPfSS3YTYXxroc21JTZH8vHoUqrcwa",
  "key25": "x3eukBDbsNzAAAYMRp9THvE7nBVzeWDn8GTWJngPTAbhbi2ynVZuGPvwSTCRVw6zWUSFYnTqtdPkDPacQWs16DJ",
  "key26": "3socK9sTr2SEkzof32vBQi82wPBdab7PyKGzsxqgCuHmA6pyyBahLeE3jaZZv2c1sJF2efnZro7ciE3kJh6Nb1rN",
  "key27": "2pU6ToFGpgKkB4eMJ6Ro62wBaYXYnhoT6W9gipRvthn1qFJABVRkvRZajZjjvr2e8WfQ5Je35zjRRLTY4WK89uX9",
  "key28": "394U8q921HDVEqYo6RC7ZBgLRtgRWVxNCP6b1Ctyj6uJUqQTch6ePu336kNokqPeWisGhC5iSMrGBBkV63R371rw",
  "key29": "4hZZ3BYFGHtJAxhPjbbMTMUBMYcmkC8s4S1sJcF5B71onD1hPA334XF6QMEBHSbUtBSF8r1iBtS23rx1pazSnJJS",
  "key30": "5x9JER6v3Rv6qzZG1ajhK5aDEoh5PNrsUh6RCuhDZLhAL4ARUHMUXswjG6FBU1w3Ji4TvNaBz6V1K2ce6ydEFsG9",
  "key31": "3jFhHEsPF7vGXcDuN8RVwunDq3EZfn9GGHnC6eEVN92BoSoRpMGKCuRDBUPSQfHinp2LVkjvKteF3eq6m7xDispq",
  "key32": "6Jzk2vCGBppgYBS5rkXmMiNXaaqhUtZeH15A8Ybd6iTAoKBLRp5tJKyZsL6ybehuwgHVX5W35AHJP9LSo1fpp6w",
  "key33": "wMvaR1MZzFmD3GvKLqfeRpdL15jw2L8be9cvTJagbVd5pSV9m8TebRnarjnjZpdWL152fF8bcUJJSgDNZZJp5wi",
  "key34": "2HNyKXGLZgNBLNmkwxmgFQizVzDyFkURToDsm62u9PVdSu3uiVvj9QFWohYzEJKM685EpPn4nuB4jDw6kPuc6VGB",
  "key35": "4mHn1NMJdmyk18JVPy6vBDUdKg8fdnjrVMueYtG8Ck44Vi4uAkq1wVF4BPZX1brNypFWvgZT11cRtLu7MnBVnMuv",
  "key36": "2i3VpmvExydijGsUUWnFJDd38gCoVLngqbnC2QEh2ecHKYWUXvQ47ubq89wWiegpFkXTCuXwsfmQ8KpVPvXjBSJo",
  "key37": "3NnXbGm8eNidXBxxEEiE4wYofb3fJtVW47qNdiN5s2JTAasHwDNsLpCkpYikLKTDytqTnfTkva9o49VS8kbiYcx6",
  "key38": "55yMWXEgAbVTCrwy2nSYUKaP6xDZY2Guo6kd8W6rsefsf7GKFQ6ikMKr8YA89m99Eh24Gs2Ek2MCHzP7YRXWDLCp",
  "key39": "4agCta45GYa2mxsdU9D71RHCdkpGamKYnMkHaePJdLwT547abAvBrwqpQqqKo2ZVFD6Vgwzvm8aZg69erbMi84Vt",
  "key40": "3qnpEKhHErhxpUcbKQBRb9T7FAe1yKkyX2XGWNCS8RcxAHYZY7sJ8misTFBxWa62aXJoFHFYGB46vuE6zFBhQU7z",
  "key41": "BUAezmYBQHRrw4JDSjgmSHzHoxZvKk3h7pQMfHQPnG1fNzJV9udAMS1bWtrNTnzqAPBkwJWNDJcKTjVZvWorLwQ",
  "key42": "3tLadZ8ST3HYLVpnxKMFWJjwkXZNJUMVabWVYHjSW1wtLvEXzoavsuYVfNx2X22SESBmsMHzeaAygJysq43rnW4U",
  "key43": "2irmErAg4cftVrjx8xQbvRf97Be7HLKjNscgzXRpC59u8ena8LENQaP6ej7fSocA9qeFgY97vFnWBr9VVz4q8ZWS",
  "key44": "2MfvzhandpTDXyHmcmzTjFB8PZ8Bg4XzLJ6j63caeip6Jh8SdisTvh4mUqUjUyTTbp7PiL93mfYJ1gm7pJgHALqm",
  "key45": "4MQgZvHUTrzCMiaRfwtaf4oKUbpRifVVhYMnRU8xF5aoDEpeVD4LTGAona62PgPNZDLzXAWKCX4y5yiga6xNXVxD",
  "key46": "4gbtgWdr99mgmAknGhvAVdfrw4eP8xhqVuGnxbSTU44h74t7sGQsFv4b4YNDJ2PupvVJ23FAwhi567WpZUydzFbN"
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
