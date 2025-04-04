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
    "G1c2AvKAAAVSt7WYWju9kuoHKNJwVcesUwFGcXViNMkEPY6F4RCvfTuahLotQZoFCQ1X9r5QCBx7p1KX3t5SdFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Pi6yg7Z4qqMWVj36mwXGsYK4LmuQGgtig3GyJ1W3QQ4gBAkncwYjqFcLMqVHWRUwZUC3PowHtQHDwiTRYtbEcm",
  "key1": "2DhhRPg8e19owrc2cajePnjt1NTYWzCSuhgr3FepahbFAZkD6h82n3jd7sF4nguWumthFtsueeCDyyKLPVn9cuso",
  "key2": "23jyMdNni2jL3MCFUqhx9iSvFaBYKaFwasxTpTj4gV3BfgvK8XC4dYAs5JpBRqHq7mWCVsnRdjdnqXTNU8XrfVmc",
  "key3": "4MdGkFumLpeEcnodHNB5T7sK4XX5ZifWgeAZdSGyXWFrUXpDzYDpNGUQXPzDajc3DM9wgU845qNLDfPn6FjXJ7Zk",
  "key4": "3DGJ4T2PptXQ5KxYVf8v7m8GRm3b349r7u7aJDtAavoRXdhTXCAmo41wyxNjnfXV9DaiBpcx4czJhvauQ1GHoDBE",
  "key5": "2iL8eepv28ZsGyxJpXeEreE2BX5KH5hdpcFnPHKiygxVMENDDNPKbudgRgwfxUZ77XEpwk2wA1b77VgvQXc2aBE9",
  "key6": "23ShosKMDr2yy6nPq97fmox5ZZE6iWs9LehFZWFjc5fRLYufrEW2cHpUsWP3xPj5gxcjiFK1wmik3zukkpVbpLwj",
  "key7": "2gUJbH3uPxFMmtYn9CbVwgtGBYvwFZ2JxbsfZFPYQFSnscogL8wB14GAL7PgF6gCqzm5m42RoGkH5WaumPbgoJ16",
  "key8": "61De3AbeRhMRoD4BhE8EMTPdB22MTHihNJ41bLZHNtB5pvhv45D76NpfWgJBddEPQxVWJugrW6Mn2YXcDWWqwrer",
  "key9": "DdNNBqiw6YLPJVVyZNCNzX9wCCg8Fa4ETpPLWUYmbaMZEvWDgK9Jrmubsix9kV3W7KEtkJ6pnH52RNLp1fLscYe",
  "key10": "3rafm2zAyLKvQ2xhyh2GTdmMMMWHDSReSuafGxpqN3eYhTspgiELJNV2GpCrzseaJWNgaU4WCDGwdh81QEfWtPwM",
  "key11": "5qRoCZkTtCx5Sa7fVFAYDw2M1iD3dRmHorpYwMsNrkxzQdvxwBXRcZYAYfhTCwuXRgK9MEVrwbD4pbQ4VsDiA16S",
  "key12": "4JUMDu683A7fRKw6HzeB1o89rtu55pNbHuyFooN8YycfusBKpqGEespc8CMtbxTdCYTX4H4WA6fbqhSjYA3YVbMH",
  "key13": "58kjnsJPQkyRRMzccYWT1KjqUvrXrAHqhxxtwbAydW95oUP1ggvB7QKbn5dMQU1EDwofibXNcWtHkCXZgLbTnmnf",
  "key14": "5JuxntmZdshPcpnd4vRXkFGsRpBjmdLyh2EJdjPi5C9AuesoYVRM2rcqSKgEEBoojEGKCqqAKDBBeTcHVyeXGsw7",
  "key15": "2U8wni1JyrFRd9c698Mjq4j4B3a2XDfC4Cgu3o4ggzAQHvFKRGMefmP4chQG8JTjHcmJmasDPRdQsd6gmFcRQnaU",
  "key16": "3YfLh8cozqfnwVAxTE8MBQRAi8yQ5RGEtKeDnEZGzQ4vJdQ5prAkCUAdBSnf55DN3KNrvnQiX1BN5BQKTFgt6HTG",
  "key17": "4YsBfGQCxHWujEUVcksFmrqehxmj9gTvyKXn4WS2fHCSwdEoUotqL1SKu316MNema69AwHD8YDdFryVRmG56BqVb",
  "key18": "k8GEnypRwTTLx7DnbKQ6H3fpxvSz5EiY2wSoTXsU75zp71XNSS83zfSuHsu28dZgVr5z8otLJxa2mpvCU5tXtXS",
  "key19": "3dCbTy75uBWoQFTpKFHUnA2esLm8ukyJRmrZN3iuNwah6k4qrjkUuVBZYq35h9cDCY67ew1Wf48SA6oCHwbJnJpJ",
  "key20": "4jxayPRGmRoa6YudewYM4m3aFSL26ejN5z5nU6YgSWjQrednruwna83yLnBHKQujekdGmCRYmJ6aKhGKpMXsbGib",
  "key21": "2ekgahJiWsB2wiXLtZLdwMAWd7XbXLiRPgW4Xd1MkYYxxhsqS7LwGSXqS3YSvkByX8he9qXP5Ev3v1SsZUeoUVPL",
  "key22": "mh9pGVBRRGqCAkqYd4enciEVYVufEJ6HaBzPdbfaPH1Uy8TnPxTPVoe5XQqDL9DEVTCqGKPvuDVnJpjeKbxSQiL",
  "key23": "2pctWdBh8Ltbj4RumtNqHKyEPTHs7SH5Ut5XthtkabqAGL4K1pAht1tFtJHnX8f1j3uyFxA9s5o5mLhLg6gZtVpy",
  "key24": "1f4axHCkBFKgWiMKUFWHJFWw6JPJuEsRRc2eM3m4v5hkaAf1dbQgLX4bRmJTrrZyJ9gtZFJrdeFtRrzkc1JDGKC",
  "key25": "3U9Z2bVLMYzvJdNXg4RSjFBVCusvUeokHvgsMims4aCGKSojrWonCRCtswazXAaQ2VEChhsX9btUoDuncTvHfcYu",
  "key26": "3Atry23ZuKuHiX5CJFLTqgaffNwsAkHYrunQjXD52YUP7FsP2861MhYDV36gTzwHPFHtNrh4mnaLBLJGgukQPiD9",
  "key27": "3i1DDYGhHRFM9mMYnRrfdNzTrvCFruvCpGycyd2DYFGw3AUMiaMsr9E7LBiFTpdN3nFjMeH4KBgmezhSkUxxPeZg",
  "key28": "5N4z85BgeXvPcgBmanztQPwMqZQPy1v1yKgLduH1ZHxKXnXp3LqDodo72xRD1V1wYkG8Cttaa5meWNDBr8HWKu8j",
  "key29": "3scfQ5g9FXxfSskjnHtaF44qQA4ZqdtSfEqwETE5hxmE2zA5JrhhudpzrgMCiqrFpKnThXgNwarSS5ecEGAeDNpP",
  "key30": "5q9SEYgMdWB5CoN7a5YQCXpYXz9oQGNrN3ff2JSLvKY91UjHkyfLiNv7WcRCsaB9GjMG2WcosiRkZcdrq55xYwnH",
  "key31": "58QdbAhpgomHq9ejMUNsxAQqXdrqnEv45CuVZPopr1s8fSeWT2kKC9JMxL6QzVtK1J8aqTAARRWr2SibgcvbV52d"
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
