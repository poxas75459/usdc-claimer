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
    "4rABozhiLb8Ecuq5347o35AWvGn321SnnEcWYnVwhQCN2gG689baZvm35MwwS49p21fsPHbZZ6zoRAQydk9MCc6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWgKMtudyEaknNn4FWhLdNC61EkqFG75UCwPtCerD1gSyg7TnrWDsvKSsi2hium8xpDWNrY8myD3uYA8pb8bcjq",
  "key1": "5VAgEgLkWnceUDSHVqgVfCn1GrAeWcx43WFK7fmGHQAhTHFZCzCTZCbQ12gLumdeDuvbDNhZYSfJU1QbqCNWPSub",
  "key2": "4nD4KMnh7U7qksNqYfSHtXwsVVuajW6mqyaK2axLdXPGBmMDkcWaRwYwzjcKXwt9iem9pM5Ksm9kqnf8ofWP4NWM",
  "key3": "2PsGGk23jPH8VnHojyU5YiqWEaeHew4ynGnHceMHKEwGBq4WeRrUAnYUk86h34r8HEbcwpBXiTqLwq5YmXDFT1yd",
  "key4": "36oCQoYybwK6X3c8TcrswcMCDJQZcGkebF4LwWzx6uj99MJK1hJAGJHw69dLjRexAW4nWKuxqyFe5WYwRdMUh1Ey",
  "key5": "2bDg6t1Fnsy5gmQcUQcahZqyP3cwxVhRDyWMuQS7Ga5XFVZ28tvA785WZvPP3weHsRaEAk8ez3xawdqSEsTBdE9V",
  "key6": "4oKTgdj7jPLeT9XxUWH8gLduQWBwdrZNe7LJLAUgxvpM5dMY2mDcCodXwv1NPbByeCRjNkZHCfep44Z4fU4fpFPS",
  "key7": "314wyG6sQ66Pkk8ACmh8DkkvHe41H6LHrPUV4Shxqbd1eFr2oWy4xWfjuvLScLGKNSHiRF24417ghGJG6j5Mhmxv",
  "key8": "3PRah9K2VRLLoCrSwAAbZb1KFrtmn1qR8oh4q3SUXudc1uN8p2i8pnfL6YUxsV1t4zkcXR676AXMUotAyqMJauuS",
  "key9": "td7TxLsLMVzs3aENskWSdG2js7wvbAEsLRHgug7JAcqs5vTunBNewVb2qJmy8QPKXirr39qt6EDaWpQcv4Y2jrn",
  "key10": "4gshAcrLwfpEpPpPgMV5buGJTWdsmk2AZhc2fcQtYnZXoLuGHS3C7LgG5aP9PzPp4LcBVecaaEc9YRBBP67pKoH5",
  "key11": "3LmYAEiiFUarqmihDdTAReaMjdN8iFCGgcHSJSdqmT5VfczAvfjrexRy9BthmxsTWrCDpmYC9DPpiucEhXJvbX8b",
  "key12": "5xpfZbwLvRjx1f7Midy3iCuzFdpUguH2pudVuxRW4Kuf6qB1HqhYv9VfSmBhWeYJurGKdrJm6x9YPexpi69QgCjy",
  "key13": "3dsJQB1VFecqVG8FAK4tN3qY6uXgwi899x8y92BrcLGpU6ByGtH3iCKavwQp7V1HRuVSCtfU2nFcjeGayAYfUzVR",
  "key14": "5xwRChUNiGCDKgPZPgUWPZ9Ku28jQ2fJyXysQfkvCgSNGph3rbxGaCPLyLNvvVojxtSCamxeRtr1sBGUYuyjHzzg",
  "key15": "mRfo9BX76SNAfmaygstBswwqLxHjovBBjiKAgDLyyNcYzroY4PqHSTB5gXvPzi45Goc2QAkopLFX2MS7DPaaEks",
  "key16": "5tpgK38fGFRdEBk3qxNL3y8hLj3VcW8uR4uv7cMfvPP4DdYabqkxEPaQuiMGDRee24Y39g2L5puQXC6zijRkee9Q",
  "key17": "3DP1yWnWMRk4kVy22LBDQnH6fJsNKiyJv2RncH9nnrJcYzX1mMysdJ7omWxUztKeEnWHodyCiAMK784nRFPv6eej",
  "key18": "DuS8oZ9ZjV9jDiJCCE2AKpfa9y1PMN6W2FT7ZuC749hNL1Kgvq46vyMXqk3pUjtyfJ3zyeFPxPhkQYWAbLLTZaN",
  "key19": "3YDVbnSiSLrYqSAwPg4kvMtXQReWAntaifB6Uhugr47DkJvvJynjqmGuQeHg1Jdb3Z5myarjEXK6QGiKf5wBoKdq",
  "key20": "5Tvj6mwCs45WpMRgdHwnt7Vnn3QAgnXbTtLAymcxhPxU6Bg6hMtwqdsWLrSm8wRyXGo2K36Uucv7G9XD5binemXB",
  "key21": "3T7dJreV7bDfNUiebodP2PKTYVN5vvfWtMJLfQqTQ7rRQNfv9J2ZR2NqRQPSQFRmmqUv97pGYtL73QrutZq2bKvN",
  "key22": "3iZYh5A1ksSMeVTK2LW7HScwQzRKFdXvWJmtWjECsGggFnP4eBKQCqn8M86Ci4KU429avaFDzjCbbP45hm7RGn1k",
  "key23": "44KFvbNLCdtfBSamtqKcVbdbnWkw5jRJUk1Qc3NQaoGcpHF48PMPkWdoJhxDshkNdRnfPdDA9SCcjtqE6BLfwKEq",
  "key24": "3sXJXr2ucaYNQxWiPLpmtSxeDFjcyfEahaL1vU7KStLojhV31gneyeqJEwsyjPXddgSc3WfVqzhWM8ANpdeePRWB",
  "key25": "3sV2CcmzxDWkZud4riMo9pyKT2mJRrsCsaqKJyh6ggoV6xKm7bzVSdHZsC2iyDGmLkZ57uoAY9jj8tZwTTaJQtip",
  "key26": "64QC4SoFdGE32tHgVJU6Koio7jZ7vdKidF8AzNBPEhRQbGF7FRYdFjyJRke5ZDpgrakEhUNfic7c6PGC57d7xZJv",
  "key27": "jfig8qYAFRhsXVKctjNrgxQYbPXQj5hGYe71D1CuNsUXYuj2hDLdU5nNCV8DPXQuddU9DWv8MT7QyWxYwx77Qaw",
  "key28": "2SrADL4WnSKfKtMd9eQpvijiRVe7f3ya5iJwmQT8UawUooXWawkYsscK2HNSBHUHRX9yyDvVWZzCraTmrpPfRnZB",
  "key29": "vmbh3yQqwWV2bCVswWpsj6VxiGyevDSCseccs19QhfqvkceG9KFaHnyEZ7YtiKfqZ23qB7K2aynZn57MazwqNL3",
  "key30": "2AkCbvTBfDDcsahRM1bvLsgVrA8vh67VYo7GnGMRuzqaUVuv8GrBXwa2i1ourXJyVaPrhpHafsHupJnkKY386Ads",
  "key31": "4mrEZEscLJdivT3vbss9TEgkekccGPhsCQ4nvy8sQuVDVKafaPDBN9qhFf6mgthx7ok56MtsuBsS2rgphFhu6WHT",
  "key32": "zXmos55Yo7UTXLW9EM8RGh6w8Ls9boTEhUzCs54P4ZSshWc9PCaNjKYnuXcmN5onc5vk3QadSQ1FMybGJK4kLDy",
  "key33": "2C9q1A5Sz9kfzmVPkkyUaqLwZ2b9TQFF6ycMVpa8p13j8j9GHNuGfSYkEUEWRuSzse5toeHr6EvrVtpEQ49uFbo5",
  "key34": "xqVfDKT1H2k2UBuovqinrwqcaHgW7k4WqNN1sQpbteoQhLykMy1zXBttzKdd9zXGe6qp611Cbn1WohadMyNeaPL",
  "key35": "5rzz2Y3nvwis97XLeYRcfdGuy5W3cPewasWXrG3PEoKMHGW2hfTHV3oegUaVKiS7UCyC5wL4sfcG6KQiPC1kKEDk",
  "key36": "2xovMwhr1euQ2LqnzHYJfh4aPeNxWjKLtBrJWhsofN2AeWD6ucHorsC6GGHMCg8xUdzL6GDC7c3zxp8b3LghEGTP",
  "key37": "34xKfsni9EBhCVNztrMZsXFNXKz9cJPj8e3cJUFcjWsVPTZGXzEG1ckeNSjAHuUWJ9KST2Xu9QRnnBxHpNM5AyTq"
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
