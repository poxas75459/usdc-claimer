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
    "FSzid8gikkaCfHUdyNeU9KRyrx5MnA2ftUvXWg3d8QhZDCRCHynvuEDVLh6aDqB7M4jddpUxjjGFRzsmJGNwTES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5954soREhJqrrMpT8DrEvriwMfo3XqTfcT87HbrVJUhvFx37hEn5xZ7397oVyiuEekaaRTiEccFawx9rX3pqvfzD",
  "key1": "5mvEZP7FvpVtRaMQ8BgPJKre7XNF2gRMRWT1uAwAM9DizuRcTQ9kN9CeJx9XfayY8vkZmfsDqEmrnahnrgahAF5U",
  "key2": "3bJLWwN7f3uqFTQrDD1gKDz1ZKxNXZuyKaKbryNTE4Ssva83xPqLhNj6fdAuKwkNfRMWivDAK5woVfJZ7VEfcNVP",
  "key3": "qB6FWyjxCHo3rhCFLHoVrE5Rqp9egTCpF7rJoidarvL7oeSJD9PxcVhdhAcCfmkzM6DVRy9N5aD3hm6w1LaYeuC",
  "key4": "4XXuhgmAutPhiAiKtrUMsR3666B9JKt4YiT28iCNYDEGuy4kTxxY8BEGQH9G7eKu6MTJk1svuzcSjZ1pgJL4gUfU",
  "key5": "4y5KFE9ewny7SRzaRtCz5QUnUpCL8oVdbCMEzrd7p6353oLJA9zv7MAA5B7aF1ToTMUCfgus5wouzQEjDFgkVnCn",
  "key6": "5jP8dtkFHUzTLaSc1bipGHhJbWcbszby8LSD8vv3tDoeJTDRkrzXsTURiQfbd3hpnFRyn4NRzYmJLq14DRbePWJ5",
  "key7": "1fmcJsbdC1me64q5QJDd9PQThBqtNDQCe3UbvF52w8xi5Crn3GnX1yAkQP4Qit51FJKw5NZDBu5xv5j3iXVyWep",
  "key8": "3PwMir8DSLGeoT3FTc9JsATVViAi1oaFEfSpbJvvBxH9iWwhrPM6AB6EQuhZN2g7xbpEsPfwzVEE2BYYsf6uni9Z",
  "key9": "ujMp9PWrfNFdT3WFiUR6fBTZWgYgZkgtTo6mWn4Gng2hadwxvvbQanhFHhLBFVwoPnCeL7j4K5hNY7sKyC33eUS",
  "key10": "HMKVZyYsZbdA191VZpADy64Hi1EwQhCJhgqhj2V96qETd2dxqh6z8LwtzYtj3sD38myTuGC9woVNQwqHS4nH3qU",
  "key11": "3JYyszEcatjRQdy1RW3GFLVF8prcm62UN3MG3H7yTTvG1UiDYEwBwcFcANFvfKMffCdvFMnEXfMQWBG6cMTxt36R",
  "key12": "5FGfVqkUT8uENHy8Z4XAvx5p73babFm7Gxu3pYkr9pZEpCNkycxKxR1Ui8p9QEDvuSSQtFHdYnGZDJuSDbkhd8GF",
  "key13": "4KDShPetwQPdp3LHA5DhGHmviihJAMWgHJYJhdqFuh3ftAuZfwoSYKuJSfgZu52ibF7D37svaf35GhoKf8nhYEq7",
  "key14": "4b94rCN7xCKoHwKSJ7srtxiX4YcySuGdEssg36Vh9d6GiNyjcSb2NVhgCiZCAPfp8xEzxQdDqMMVNaWpr7wK1JjV",
  "key15": "24NeQPixM5Z9ppmLFr6wCuHHWFfm2z443zx5Zjg7t9kb9aLn1H8DFmAmy397j4aNviGSP6TzfHjpLPCKRmg92NXq",
  "key16": "5JKbHPSNbztfSVpSAPT8grCQ9Z3BxNTan4EmYWqiTqykB2hTaKG9thfR1tbpC4Bk4aLnWyn3p23fcVC5AhsWMUqR",
  "key17": "4fbDPJEyWsf428PKY6D78x5GGm5BXohH6zuysvjyF9F9yS2TsMDyA9pNxdKXbhhyUCKqAyTh9VFfdcGHJNXZsrRf",
  "key18": "59Hh4RgyzHibZm2pgN9sXxa2bnH6tADVvjK3pHs4TBDUXF1e2WBAm9ChMe7w9JsJUPvBxpUnf9rJX8RdVhiMxcfV",
  "key19": "4ZKQ8hQ5MXHpdydg6WscuyiF9uJwVDazagP622h6wWzGABFzPYePgbmyvSYdpFFdSAjMtM8JcLBMRVNSSKZKWiSk",
  "key20": "2b4RcLzPNSnNJUuiBtG8oEyx6KfRVHhFAN7uXF37JpLC8hWu7A4N1jjbZsFG3VTwWBo1xeeASJJEMU45fBRmj8un",
  "key21": "27GmF5GYpJg2MZssonZdLs4Ar3LFEdLQUrgxWfDrpqmgDR7C28K9PGrxR4hYVVn4XF62hptt9s5q3reg6mJNmyoF",
  "key22": "3F6FjPdLVPGtrXyQs61HysL4XKa9cVrftRqmJvmnuQS12jUVqywnohX4z5rDY1a9Emfo1yqKo6gLL1MBXDELXJbJ",
  "key23": "f4c91nm7KrrW7kMGyEQjGJFLhdAsBnPSx1XRWNnvFAWxdN4MUC1pfYC9K3FbN3uvAdaoxyyqCdPW3JHmLGCuUox",
  "key24": "fGAr1tMiMzLTM8MGLmBpgKhmoZbwMdTUBm4TqHRUqVxmDeha95QcpJgpCLP64FpYJrDtxpxg2PoAhp65aiLcWSf",
  "key25": "3NJM8nwJRUn9crTAMHq6z6WpFmzhHGPhMmzDCo182nHFRZ3WkzuchK2ByUzBW97fsxTSQ4FXUD5YdURpK223gGbt",
  "key26": "2Y9FXUq5vYXwxobihAMh4qduLucH6YrvhUgQxVZ8ECY45o22Ayxv75QdS6YpEbxU3KZkYtGe8qRen94WDsdEdC11",
  "key27": "3Y4D8xeTVxd3WBgdTQgkVxx5nSLPDs1tUK1S8Vs9bdvyQEfYrMB8AYxFypN4jiLDLPT19fWp79TRm7p4jqjjqHMm",
  "key28": "vH7n2ZnHaZHjUTaESU1oFXkcBo1L89NqBCoTZHDqkGfQNhM94S4qRwWffYcVCWzRyWD28qnxrRp27pzMjFQ3hzp",
  "key29": "2WhbvL7dg7FFoGCL7hECQ3J6e2kHXHheFhztxFoNdMdTmE2yk4efY3b67yy8di3W6fzjKvZv6QYrU7YcGBhSqwsW",
  "key30": "46QbsLpLrNzpZ5F1mCa81jY12sv4dRvapsbC2sC5qXooxHkTDV25QVj1K7EdTWbhv3a6JZCGW5GeK5ZT5GP5ePE4",
  "key31": "26oVKF7KTRorbDTy6jaMmqvdvdqWMAUe7sQn75KcKDw3kwFjsHK26tNFmX8xTL5zvN8N5ScS79K3dzewqokuvAPo",
  "key32": "4FaKM9L5jCSTSB7J1jYqXsxY85EXZtSEPsR4J2PnkgGwmuDGLarBVzFBV6xw3hf9zHEGwS2udJaA3wSGewRFQbgN",
  "key33": "2rLY11krE6kA1syaeGioresWLtUrtGQaBmd4e1szUejsr51xQuk62deDpjSrN14Z4aSaz5nLCAwi257rnuFrqXvf",
  "key34": "2ePJKjQbaJy3DfmPQvJjmrc21TxnF25fiPRYVjXB4QB4PHiLxPmNoCKFx2vaP6cpKSZDXhuMizcbGjxcLRdU3PJb",
  "key35": "2bN35irVyMse2FpS7QXUhHtQ8sUchSJZ9VN1dSWLGP2nP7FGBAsphAdrQAKEF8LkLqM6uvVePfG7GScK68rEKr1c",
  "key36": "4DVKBZw9k3Dfa91ewAuwtn8VoedvqExbrWpFEChoDCa8hCc1fp5pHPHZmKRD85qdexs6kafheQmdh9HqKPRr2km7",
  "key37": "5gs1FPRN15SFaJjRADw93b2QTRFiiA9FGonbcZc8TisedSk6TYBEXuMv9G31piqoarABBqVQERYLZ3DjwfVNH9D5",
  "key38": "5v5HL5hYxHDXN3YtxDeErNbC4pL8A7XGRFaUihd8GxEpPUb2gFj8zuJQeaMPS6N2DdcbYVEXHw7Gxj9vGATzLiYM",
  "key39": "5m8wMsNmD2uiGScCBcsAA6yRjw94P15HykY4m5jS3imrrVgjtRQWwCqAFZNuoPR87rfUSoBeCZL6pA9EYafG6vL9"
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
