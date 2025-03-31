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
    "3Wx5HKB3aCzDVkeq2o2GEoMVuHL6tVomm9tznGH9WwnvqE8aEUN3tZx1LkK5U3mrmn8Chmdyc3SpmKYutGeHis47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57MkqKk28o7eu9SsFVEAFj1PnhVMtSjSps14HK3f3mc1A3NBG1mroi9wxAREoLhs5YWy6S1NX8xwvxBspThvEi9V",
  "key1": "hkEfaRJBUgbpr7YFFnT9soHr7s6TkScRkh3sRdRY5bVx2wGXV76rG2FR7Jzo6hyRVWZtVD2BcF412qbskeYU9uk",
  "key2": "5EUBWepA3EQpvojKzZP3tXGc5zApFdQ5NSPqVxpmhg8v86Xs5CAvU5rAUbGb9xN45T3MmcxPaNbpyiQjMQFmGLHj",
  "key3": "4BWPFuvfoXmzYhK6E5Ak7R9SkBHEmtqWCsST1aoxcWrSK484A8ouffraENKe8Scm1VPr1htD3HehhFAwmAdd1DfZ",
  "key4": "2QwaFbanteuhMnRpwLg8zExcqiFh7awVbFJZRDJXT4GT2yMmoS24xVgZ5iz1LmivzZXcKBMW7Vmkmzz4ucHRptro",
  "key5": "36kxcf39oZCMbts7w6TkvjLzvDHeMtBgenoPiHQFQnpv14hcn5ApeWqjywUxoDPexZMnEMPp2vuMgW2mcsLZWcMJ",
  "key6": "5GiCtjMFBMMSZsGtRxaYXfv2PaWSuChYAJeqpvMt5g6XeSdDGFPvoGrWbsykHpFeYXHNqU1raFh8veA6t4DMGLzU",
  "key7": "45CcN2MsQKyTwfBP34fM5iQfGfAmK93beW7ztjEymBtvV7goSpsTbNrzw5BbZmDZebgYVFC6RaPkdDfCiVPTnqXQ",
  "key8": "rpytFPjd7rf9TWU4UE5YL8AE6YFuig7jYGWhdfT94VKvnuiwzLZxxcyz71rcjQGRdGynQD66VqNuB5MfHUocQ6V",
  "key9": "5Wb654cDtpUKm6ULBc7EwiNZpAJ9f3WiB58T3M1U5VNNN69r1NYCvyDHAJcLoka8CFVVq3m46DeBh27JDfqj5YqT",
  "key10": "2RgndrPLGCTxWQqXzN36AiRUXH8VWniRhSuJKwRzM75A2nGSUyvpCoWWw9SeKWdvxa1Nbsz8Wt4RQGvN75f43YSo",
  "key11": "4Tz4miWRQXgqEugM7AEWmZb3uiwBQNHsbXLEnHSse9uTd1uc5ijZXZktfzrQqx6Z1HQH3SLJabMcQKPmEXPLZUM2",
  "key12": "42PikJKyJ9DCUzdwWWMfYf2uTFqkbxKFBa2dqmiN9pNgTgeg3SuCkmQEsXG7fNoYRczQyhuX9kErorbiyDJBkHGR",
  "key13": "5rxb1wMRvYPaHM2aeoFfGohnbi1GT71CpFmq324wRspiPiEvL3C7DRWcpRtFF1r85ejPLAF8quxTYBq9s7F9g2FF",
  "key14": "52nt5S9RXZH1WXbz4uzRR678QTBj6XGbRhZavbLp6rtjq3NKfRPcJKaAtRcya2Duh3txEzAFYbVX4ZeGjs2fw8ra",
  "key15": "2wbx4T9gTB7M5dGqnvfJw3LK448NsUWhUT1egY65VvkssPL68z9VzV1rjZAZZoUaALkquyYmZp5LgJwfMaXhvqDz",
  "key16": "5CLfDT2n8SDt4VgqjsYxxqC2rPoRWVPJFKcm12SWJW2F9KbLmNutqJmAFqeQAcwbiF1ECGzqYanyc927Bzs47WcB",
  "key17": "3BJSz6Un7LtwvTA5sKXJKqBiz2TwA47tyxAauZD8Mr7cYkhSxkMMi6nrgejR4DoBtBJaNGwec5ddoTeG4iQ4cHWq",
  "key18": "cX7kp3VoFhfFGRRw7Kgxmp4cJoG5dFcv4iWxwXhTRf1ygdxVAgZUvDx2MgHEXMunS19EykUPotmFc89bjZJfV2m",
  "key19": "4zha3Cf6S55UAWR9ZMzsxNuZQS5QnfFU4fZhP2a55eFhQD4WLjnht3Ltossqczw1m85Tewivo36iDKkEFtfgKyCo",
  "key20": "3smzDSJs2aSgA9bcW8gHuAS4FpwYpZUQwvGKYQ5tbE4dWvBfcnmd5NMptMHkF5Zu1ACjmnebm67QV91sLSR14K4A",
  "key21": "3VMPkyhy2GEx8LnTxWBybkLJigttsFwMBneSYxZDfwQW1mpxaPabApK47Y2YXqEY9yuGxkYNqazQN13QQDPkT4f9",
  "key22": "5ZqqhbH7999XHJWLfqnJ1yFygehuBzLUi4FfC4iEGFxAptMSheTBUT65sDG1PSAW9MZpbNNbqEzXtQgVmb6dTZ27",
  "key23": "4AJhmFmGo3zc8ARhqbjzVDiCiMCFsyfqZe4RReNPRGNiV2YKn1cHjBYUJraeQvPXkrjTFwJ7K8MVXBdTBCqMFWc8",
  "key24": "3g1dnBiscgki3pa7ZmKBpgRcvvK4osf7v6XpSEhgkw91bsSvBqn8QfoaseUhfCznhmGCCvYWLTbBBJEgSQVBWA2h",
  "key25": "21i5E9Brzmfen6E9bzd53Z2JYGjAPWpUvYxSqQjH33eu9jihZ2dXXDpAunXi76bvBHspWdMpVL2Coud7XHYJPvzP",
  "key26": "5TNMNZiuq4HY5hrzJRYoKo8RE4U69FJCGgwkDWL1u6eZv2xDUi8XwTXsfMJWLaTjM7RkNdESswWQ7datw59UsNmY",
  "key27": "5gu1dQ85js6wLWrxLqd55zBUGttysx2i7dmv5zJzict7FdN9xagynqaLEsfbG1jr9R3492Ch5PWbrGByAhEesVgB",
  "key28": "2fB9aAzW5gurmaxGS3mWinpNR3dNYodGYnoPtnYKuAv1oZELK6xurEzQPKh5kZv7uVBcH4xoANGcHWXcQZV9cZzS",
  "key29": "3j6bTxU2qip6yj9X8vRsZFDqengFvHdo9VpsGoHexNYWMejeWwHTYKRZzAEzGUiL5NR1QuXXjSTFhwCgYiu8EnRV",
  "key30": "4kJQ4eP8Tp75bR5ABBYqwNgxKMtyJCuWSX4YdJ2q18EvboM64k2HnYbBKD2MmB4juhEJecfVvDMirQqb2dHVc8CV",
  "key31": "VTZPGc6wWeHcKvqMXTaJT6Uz6R2WGXHwkxyhAhmL8Vwp37wqSTR3xFyKaQGG9TKU1Xo1j3sPG2WauJKgS6J4NiV"
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
