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
    "Pb2gToWoJPQK8ZrKubnKDg1jX43GvEHEzjxHLprAw5uYftn9fxQ67ZgWMmSYv8p3XoxT968EAHdsGGZNVjAoQSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZDvkjasvs161JiE74DKrois9gdx3dExzuBGjHbUcJNVDXmDe1uxjig3jYiM4GfB4azTvwFrxYUnQtCVdShDwPj",
  "key1": "5ko9tBGwWpQuUjd3x6C3QEAVCsFgMYWoooAeMgvStcsEmnLCab883N4poda58SQMjgK29ZmJER7LcJN1bA9J8JPp",
  "key2": "5hiFEKZyoNZW7Py4aGbCFg4EqkvFoDMPNcLWN6JUD4kTWGLzuTFhdMpomU3Upb4dDaMeEjTjRHqSCg6361FmS46p",
  "key3": "5PymXwdqRt16ya8XV1ggHLWYHzX36icTA2onqcYG7kLWb2j1RqX7BWXEZB6LvM9Af8AuacMsmTWamZencFWPZVen",
  "key4": "4Bc8v8Q1bSgpGyfzEZFzPUb6qkRdVwTB4Rg1S7jEa7kVsV4aLLxYoz1mABBiGjnwMQjnGNgC1U4K4uchvXxdKAaR",
  "key5": "5yPCiSXqwmGrVRBA9juLGd6TG7DDfSGNvViqMyWmhEJzirgtvrZvSkp9D8kww36hCBtadmJcWagYv7i9Q1wRwftq",
  "key6": "37bU2RxQRAZwca28RRfRuoVSpoJaUVGbL1hmw4ZBc8khPQZorZDrme4AmfqsGXzV4S11hYhbqjU2AeexpBKERq9b",
  "key7": "3MGvZ4tHPh8f2tVbDJ32v9hmzqpeLRHDHNpcW7JyPyD1gDWjoQL4dUeEnEMGoSvE1RpwrkzsRgi16U9h1Vu5AmML",
  "key8": "oFaQwn59q79pn94AYX49zucMi9qy42GBhwabpnWqUXniZTbpn5BzBEGT2W9sTy7PFtbmHWGFTdMYyFHuvecvrf2",
  "key9": "4ogEFmh1Yvgmmx9XNGY7UxfSC2pdNhUuFvkknpcRWhf6FE3qfNqLyJc3v34HkjKoLTFpmMjJbHmWpwLFPGb9NGKi",
  "key10": "5q6EBzg47diKgRfE1mN5BMMs9oyDzA1LUwJhd8jGhdWAsMFzv2q2A3GR79PfkfrZX9S3uiZBifcMcshyAgr8tyDW",
  "key11": "4eBz2nf3rnL6aCbiHgQXgYKR9JfXGKA3VYyggo3j9FQSumuLZojht8t7DN7EywQvz3yk2fEmNfCdnSbpkzWLqYzp",
  "key12": "1xkXx72JyXVtmg55zufNG7XboDtENmC9aBPojQdoqmJuPuK8zVPXPNoDGKXXYmUZiWpSFahvqiC6SnFvQQiA8WB",
  "key13": "2CpB95ReXAWBz1RteK2YcEyxnvrkMP8JybgvJD67QFqz1JuhgrswuNttmgxHjFXbCC6FL7ik6BMV7UuMKfSi89ur",
  "key14": "553nCQvsMQ6L1efs9hB1DezVZkRFAjBBfj2hdXiTBZ1bJomNKpfWvNLjdPxHwpBvVK46KB3vCZg2yzFsRhECTg2o",
  "key15": "293qRH7rp1vMqouisSPovQCgMz9hFH5Ma836Xy8N2bemuyhGUkZvMABdRijj74WSB4iG2oAn6C8qM7QPEncrVaJd",
  "key16": "4jhwEWPysuhTggoyzPRrQEiJTSRMo3csnkY7aMgGYLC4x7wf4G1yzMA92QmxJEUY76k35M59FaiBD58py4kJzSHF",
  "key17": "3Z7gVqv1pF1XZQyqzQmwyo41ESnuRdwKxgaMJMb4Q86FSxseKRMS1rAPLZdpjGYF2JsAYkcBm4XnG2VtHS8GQokL",
  "key18": "5NvkFxPgLg2yDwfR4MB8y9CEjngmo31UU2aD1VHR1hqww8Hfj5Ea2BAkVnX16pMgWXv6haJAvBV2dyZP3Lg8yP59",
  "key19": "3YVSDtXC4C7RjMMLVzxcx4ggz9r45DfoAFSgB7SYySrRSMNxvtMFNxDs1MTqTq5ZPkf9Cas2ZsLphhSdGa3jNWgE",
  "key20": "2SVC8LYXGbBY12Mrh2QnwjJmpovCfHwDctW8ovUX6aEKDStC5HG51MBBXP48Qu5LYYaxs6AmwRav3TB3xCdjqgGE",
  "key21": "2Nsa7eKb3Q6GoYYVheH9exC4wUihkeEKo9pVvJ3hCFwMUdsQR3gnPWeLzvGHJkourtNyWtHrRz8SWT31WhkEvsBc",
  "key22": "58j2bgXscYJLYTxL7ahEgpvwqmCrp9RDtdS2cnQBqGb6rum6Qv6y4V7r8Pt75aEnAA2XaYz8dwj1JMaqBYuMNqbT",
  "key23": "4PBrZGjHuLxdo48GoLheEk3QzpGhZkV7m5uYJtbJ8B7zAaRPamuZwZbMtN6arRiRps4ScYPRy9V8sdf78cZK2Cey",
  "key24": "4eZvUz2SMovxQ1iPbFFibbdYzdELQ8WVhZ6mZnLUHMH6GSDbZxGFdsDum8YNNqfr139mPapoYAdehJZ4KdxCmP7g",
  "key25": "3XoUZy1houVX91ApNM7ayr5h2RnZAdvpR5HANEXXBUt86uuLD6TK2H6pM2XBFajjhaxsBz9JrgJakqY8TynSqRLR",
  "key26": "mKenBtLSLNVdUFyyWE2KkjpeWehokRqBL7oFWoWvEnbwWQ9oteozU4rRqBzm5nDDHSDEdvsUDLmSoFVcaY969EZ"
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
