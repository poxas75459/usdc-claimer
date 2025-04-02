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
    "5tWKVZmZwphLeweSuPZpFhUEKDGudYib6Lra7JeTAGBZgK6JmR44ZqqjATmg4ZxRaXtjPxvyXEnr3jqW2A2CQRtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r2gkLMrqrWaEkHqA38CCfkLo8FADHXeSRNTPjbDwX37NM5FvjA8b786NrNjf4Qm1aDCR38NA63mgB1hhAa8WzZZ",
  "key1": "hhG1v35yQqsnzeqDGn7c6ZfcNpdbrKASYsecGbV9GRjhN7NMxLXEppqM25PJBEh666HJwMHQb12QdG8XaTPxFcD",
  "key2": "4x8S7tH7uz4sCPA4qMsdQpLrL6joBh8EVTSXNysG5eizAJ1zS3mdcvvLFEafgRkW4PgfUeJuJ72TB2ZeSFUzdSsR",
  "key3": "4Tuu33xwuEc39cqfVL5LsfrSrQMuxsAgjghyc9chcxGZ6vTGMwvF7tmgdxPDBzT6o6HLFAq2vrR3A2RhqTiNASPC",
  "key4": "2po6nFVkeeEE7SaMYutJ7B979cHZWfEB3soafZocc7dTwCF4SRXj54dUQQ7f1RVXUEMobLDpL92vUUiMiP6eJKCv",
  "key5": "4txwU4DHTet5WmUf1kZVrurxg7uZPejzXJshiKiCaVGRTp48viNABELstzVNmpQeb3zg2qSY4qkvisfPyEHWSPH8",
  "key6": "43ceAdpxrqsPQ9czaBG4kQez48hoHBVx49hFWzBqDVPQfTR68or9vWTAeMEN6ykAWiXUd2nbhRCLe8M9neXkMv74",
  "key7": "43voSeBczWjxHM47ZBCWskk4ck6f4G9X91CQtV1R9773waWgx2x9vngRkAamvx6ymvJyHoJEBNKhAx7PsJeRqHqc",
  "key8": "3WeSV2NQz86xBeMn2Nkaxa836yxQqifvyP8aKuuGoaqmtRxvneP6T5fE6P8PRsg3cGJmaqwP985sGMZb12Gyq6h9",
  "key9": "TXtFG1C7x1EiuCf4284YGBLPMFzqjPW1vYneLrbyiRCFw53ojQgbCWC6z5V2Y3P8wRrGsZGH4FWUPMVAVrrQF4a",
  "key10": "2RDuFt14h9vVx417yWxf4ti7RxXEbwzrx7cKfFCaMs2svwVh8qnSAUeaUFwk5ZAKRAC66U2q4bPKBTS253CsTwx1",
  "key11": "3pYmw8DaLC7kRgHeT7toeqto46G5ELLVc8wtsN7byX9Qbzdp9KdiNSnKJqTKartNEYzbf2DAn8bvFMa5wfLm4RC8",
  "key12": "L9hjWKayrb4ESMXuSMnkXJZyqKva2z6xsysw5ydmbUwphgbYqvsHnfFG6Qm3X7BnbZrMkHL5ADzbGxDHzMM7ZJY",
  "key13": "Lv1T9NaJA4rvjfkMXBy5pLJTU2vaYNgm7Njv9CrJ6coXa8GWJ3gjzbkXrNiHyub6ieXQoMCB945fktq3Cy1JGvQ",
  "key14": "tkoVqdVaw13QnwME4u66EV84rhrYrDTKzMPewKxvFXxvdqX2LMwRhi2FvDnGUQEthuAgDmLJuz114zgM1pxXTRC",
  "key15": "6xkRL5zG46mvY8U3s9pm5jBKYaqgjFzARu17B5fnhWMTi71gsmo71SRzJ6MkqRHpK3BHr56QHurEvBndUi8aRjQ",
  "key16": "4kuuvGK7QyFh3yrkUsPU1RMfhAbnx1JFtENqAGqZyzQ7rqLXWrCuMmG3RMXoEjU6p8amVAoCT55u9SqEy87siJ8C",
  "key17": "2tpDPULsfgmCGjec4of4frAZ4zH6hsgAijg197ihjxnj6vMr7zWrjTfd3t2rs7EUP8rrvU82DMp4iwo3zFvK7ksx",
  "key18": "Gz43aBrEyVH2tcacTsUmT9yxwKR2W48u12kvJLSJLKHAkYPPd5rgmcpTz65f2pyAEU1jUkEGLEH54e7Dv9713Nb",
  "key19": "3fefSChbSEu1HL5UQPgTL2TriBm83K1pspgMnzKWLadMuQF8ZtsPS6p1qmUbXdcjDJNYmeswwpsbcR2ywLa3GNbu",
  "key20": "2Mz5G64zJqtvxQpSU6LF25wtY9hLgnZp7J9NHDY3gztMqBv8ukYCbqDb8xKFTvRSqZMfyZp4kiapkghtqu7g4zgB",
  "key21": "3dEWNctvKxU3Q3M9pu1wrKHgJjBE6GTG7wY6cTz5Bnzw13gJKhtau4arRhKNkX8vf8S5HKQQ55PpLdSuG8Ar8LCd",
  "key22": "UCVkymiUNHwYMgoQJAPymaDrEaYBETCsFYPypBNFsYUGbbvzT37nHJTSAdAjeVkPi2HXZmVHD8xS4wN5spnr6XZ",
  "key23": "2kS7QHPGpoGaheSRFEBK8JR3EmHcgKKHeim9eHDbo2qN3vC9pYLHBQ7pVDeEza6bCip4NcJUWYnQEqVtPMBdR8AZ",
  "key24": "4cjhgMdymhHkecHVze2fmN5SWBHzy3X6kn3fKk6cMtpUtaWv2mYnqw1G9v1yfrzHUFSCuTvgjGvFze2czb8Rkv8j",
  "key25": "45JLxNfR4mPYTutu6FPrzkBT6ynmGiXbYwwXPMXcTE31XHZX8xacMFpCubUrGBh7hRFUQqBXSE2zGMsmadGprmRu",
  "key26": "3DQrxFo4iFab1PutuuhYzaC88TbS5pRtkbpSt77dsQXLdtVTAuMwZG18V7soHABkTGiuDLs4y3LTLnJ3xeoviBpN",
  "key27": "32aLKikmknXwgq8JzhBBrJNnf78MVActQrZwh8kqavZZESBoRCbGxChc2dt4983xXmLqNbXWH99Av3awEBSMZjP5",
  "key28": "5ihqAikVyE2MQKNKbZcCYe83RVH9jNy8CXBteKrybyCYBoZSfcHRNFAW4oUyTvL2xSFiTgPPAcXrLAiajuaTpy2E",
  "key29": "xy8TrTVkbxqYcXKAfFKH91NA7Cyv55f48j2w8WRCuye23qkxtKf8hmHWfvVN3VLbDiJM5PfcrshfSt1AisJqM7k",
  "key30": "5EVzbPebgom3TGFJSgnfuVjmYVD6KN6zQ9MHgVGbM2o1UrHh4MfGQjFfGXfN9HpbxtEb9aAV3pFeSQB68cqWrMKs"
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
