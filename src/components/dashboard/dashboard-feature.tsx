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
    "2ydENSCVX7KRPxhr3qttvAiMDv38yVRisW6GyUEqH8eQzPqLjEqcteqimFuv7VkRiywunXd4KLFjCJWehtPHbVCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36hW385t8KusHdGndrpLWYcPGedV5EgZLLxxH5dJjv2Jeo8CnmmvDdkeueebyhMNpXLds5HwFUAE3Cdp92paKMq2",
  "key1": "3x76XjaCJu2aEbkPeggYtm6VCRSTdaBgNkoKcZTWJ2kaFDjL9ZkXr31i2eMhwirZtEnfQz1R1HUrpgAZXH1x2mvh",
  "key2": "2qX4ZYhpdPjiefkrCcB7zD8WZWS9Gv5Uvmjkk3afAFYCx2DAgVzP8p7P1nNvs3qRkLKWXatRzqyWKqxhzAeNUvd8",
  "key3": "2bbsTU1CJxCnThu5TZ8VuiuubEGdpFHR8U2nhrHXf2JEC3xeViGo5E1bPU8xG8kT147e68y2x7zXFSYToxU2TrQ2",
  "key4": "4UGQkRBndBeMYaZ76ogWpCqs4MRaDiAWko2AMwyzbu3vgT2b8QXr7xgr6gC3KTdxFFizDae6w4f1kzH3zuYjC8LG",
  "key5": "4YkGKv59c3ShhaJMGhBsKJfL2aM6GzoypsRgHp59XBSRNQaVx3Wb5dno2fcDYQ2j7bFj42dqerrwgRZeed5PTSvd",
  "key6": "4hJGtcfbMXdMnHD6NLgUnUgvReKEuyjodqQmMkVNSzxieVnjdS2LyCA2d83dpEy47dtdHyvrSywVKRN1gPnZRP2F",
  "key7": "4exCLD3YP99c7iiC4ZFTn8VzFWyaCtmJsF2vGpsjaPcEnCSjtzVNG3qjJnT2LstHuCL31zNETG5NSmBDYd998yt7",
  "key8": "3WZveQLkGX2ALD6hUYxpqtZRRnuvyfQJm2yBGCB8T98YzAeL7h4uiXHX1Gkn5ZWWBV9y4w9NRSGPNkeDZjuzyEd4",
  "key9": "5EtY51SkkMwakf8vqC8CvAW4xfxGjWDrUYUXhLNNrAGSUTSnaXa8zQ5Vzz51HoHRGfHThmGmcgf9PSQqGUVRWYMq",
  "key10": "4tNCMpCAmEwnRdMVX29gjrTkQcrxjGkHYBxNGqR8PQ8USFTvCSkHkBA3yGn5tyHqrH5tDG4mzBxH1xyBAYa7a9Le",
  "key11": "REr9YTDnKz7cQspFnusL3bNs3xqYnnbHkJd5K5FUR5z5ucFxaQFV2evPKBSncPUGuaqGXG6hg7peoKaKCHXu8kV",
  "key12": "4fT582hkgrV3VwFPEyqNivTBtehPRkEdcKn46HqHuVLqkEozUeYRogM7SqJY1pkERTqYLuaT2A1Nnu7tjkQCcvvP",
  "key13": "59kTmSSDRUF3AMrEtVTSYAkVwMwL7H9L7HPCZVchHrPSRPomDLd6ZdKHxJwj4m3fYD1qAxvcrveTaUUVRGuTfStB",
  "key14": "2r3NuEjpqd4yymrbq7onD2xk8W6477QXzj6R4eueDHJfBeYxuXbEXF97CfZWZLfqzp35MBDWNYyVk35rxx8QTyZ6",
  "key15": "2bjFDdPEUFibq4fBLoJmyD3YhhKhCCNKmobccUoTi6fJrePPMJJQYkNhe3ynaiyiTfdCsJFytkU7qDA6nYmTmH1c",
  "key16": "3CxGu4f6Fh5RfkBMsqGwCxuFAJUQf25a422qepGrwtWPyhPUT3KGYDWs6JgtuyDQtV3ASET4Ko9vmCWPqkJdhLKN",
  "key17": "269fQvJkg1uSrBxzYis59cd9czM7m6uodg8fR1RCfz9Rs9ZBw17ySwqYhNM5DttHRf5vQcwmMJYMf1VBhwtriQg8",
  "key18": "3jNqo1znpCL8wf4BB48wSpvWuth94ZxYMcVJaeyXJdYwYpEZN6E9BYKEpUaN1i5TacZnAZFE32PwiVAkL4zEC9QF",
  "key19": "548mWMGtyq2fenpAf9BqHYKBNUWKHLWkxcZ5f5uKtZAuQgHLyF1huWjMq3ozFCxVgASjwZyCUszoRX88WxKLCwSQ",
  "key20": "2ZNjASs5Ek2oiS6cJAPbWzJfhxR8ZYmYJwpcW9giQjdxALHoBdUyHACVvNoPHnyzBeEZsa2hdJkMxV1Mv8sipEoS",
  "key21": "31JcnUwEkZfKqoHdeRyxq3VVGvjy7YzoD4sgACBsiLxqjfdQYeaL7oqRSKmmjWrB12ohw3ThYTyGi8caDkwJC63b",
  "key22": "2h4aNqqMS7uRosUs6jQMhYQp2EopFpy1pCVoyLBVDdyLZnukHz7r7oGK5gEWY8GRM4KiAvSH1PzAts79dqedakva",
  "key23": "5DEsjyRt4gLN4fDr33zWBxt7VRSibkHaWj8jT15cA3pzsPkZpq9zDFam4atKCsJBPKH9ZZJPUYC7GnLzxWNnDJ4W",
  "key24": "AsnB7ECUwa44qAhLgBqFTpuCFsMnGdJtFB6UCQ7srCukvUKNWz4XYtuYjzGF6LiNzo6A6BMr9xcJkcLGba9rRtb",
  "key25": "XZa15UDpRtMRDSnbxhosBFEux6s7zCGRtSYWQZTHhcN1abr8A5W9cvNwUhZrakTwkDukPxRXe1csCwAiD26UV7S",
  "key26": "49iJYQDz7btwdBDZXgKJESp7DBzmvPXx1GiWRCcSgF7GUx6NbcEMaC1hVUWdbqAPqsU9g34xkkXxpXdWiXMKr7xg",
  "key27": "rqDPyKDep2bwFacDXAWuvDPGGDV6etc7BSqQfZYkjK1HiTetbyJvShuuV9eRDo6mU5n2tfnxeP8EcGvHXgYJDSd",
  "key28": "3vL7uP9mCRjqy4TZfdUHxZfvfNtL5gZka7mmdSKSiMvjfoXgRK4MSid81eHNoDVMQ9R3Fgu7tJLDBQjHuadC7ASp",
  "key29": "29x3ddfeLJZN9HR9VsYYsUwNTVmXT9sv1KrUX1mVwYArrBdR5agEqHbqZzdxhAhotf9uzp4dQHcJBscHuvw33cZJ"
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
