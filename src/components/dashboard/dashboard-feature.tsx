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
    "3ZsVoFeLsmLEsmiQUuRwF8qGDrg1SQLUAXn4axYtecez8AcP9Eu1s7maPgbVn18KZz28bJNzaEKUoFTT7kbQDvtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CtEQ1MzFx5az2YmqWiLDNJ6UStYaKFgo5WWmmMTk5VUjvNk8VkTxH5ZDs9Po2vCHahehXJCj4BhQf94S3oadThS",
  "key1": "fD6L3KoXdh6uyefC5EetQsQPjG8tqDXxjFnv4ixs7FiKrYkpJAyKS7VmdQoBe4TUVi5TEmxZsEawoyiFieabUGm",
  "key2": "1rPLPaUGDYQzSqQ8vLz1MDNe1THh6pZ1g5sZYb7buL3S486H8WaXgiJpYBs9dyPb9tcFMJ8tdmmZ1SrYVHaLMym",
  "key3": "552hzzskfMaVQuNjbNjBkBveVDGAu7XVguuo3EnSfmbzrv6ngnEeSCJKudcV5uhtTetjDBdcVHNXGxWkqu5VQuGo",
  "key4": "3dQXUQk3uTMhPtgcGLVW8CQ2DdvHQ1LjXhdNUp1QzeYKRrbt9GrTi72iFN62pqqJP1zf4479H7PtV7hM5hTY6P9T",
  "key5": "2u5Gtkjxxv6Tv3f9LxY2QFdL37GSCYBm74o2WyLL2FRoTBCSu36HJcEzdqsc5K6sPxsY7xvMciqzV7oo362Un4cX",
  "key6": "2BUDH72d2dTBRFCX3rs9owchMUpoTcS153dictS1JWHr2N9XZi3nSkKxCJS3uDnjwUkg9y5EitmvenAKWFBMADh4",
  "key7": "2CSc79VdCaHynhu1jZJfp4LBUNb9kMyXAE2tG8hjFDFq3Yw7MsNYK5F47bGLZuQkXwga5qbyyBZGxbrV8uH66x1L",
  "key8": "4NXsQ139HbzZTBo9Ktp1zV8M6azMjoUkDSi4ZmniHt2qFzuzwQjEcqXGGBVCDPikLkK6Cq1VsiEZtHKJYRBkaCML",
  "key9": "38Rk8CC1YAmM5HXDmCUpZnFqDAuC2FDcNi86YohsvSQDYP4xz1dfq7Lvcnqjr886Wy3sSqQYjYeykF6JRv3wjeNY",
  "key10": "4xs4nSEmpSUDT8A3nP85Zpi8gfmfuMnff9GRQ4UzoJN1ueCAiWJM5jeWqtL8bKy2sGFMohC2pPLAN3yC1mnw5pTZ",
  "key11": "3rW3KjpweoNHCHySuizSuFNap6mSaWMJfwz9wdfPpNeMyhL7nFUXQcMjsZpcj7VdrfPm7Pvw7ECkFH3JmzRWyC7E",
  "key12": "4yHKFhUiV7NSZiPW9KKL5tbJhx597wdnAtiVrByChDAvn4UEpoFgNBUzhbYnCDipGGgWFTcJ14EKgJH2ta9WjETD",
  "key13": "4TF9WNVRB4jaj2vgdEwNurLqDNoYoWS1sfc71xnDvG7YafyCenEVnQ2poiGpRpowCeQTmASBG1wW61oewfUgAzjd",
  "key14": "388xdiJxuDZYJpnAvmw53LKUHneVYmEs8fVQrDPog1Y1RxhwBjoRKPTZTZmFGJFxUu4qFVpLAUy8AbW9swGynfHh",
  "key15": "3ht9YaUnf5sja5xA8mMJQ1Jh7PQwbU86cjko8DDCtMdrk5RX7nZvBKjqzqkuUzj5kFza5x3vhHTKEwEJPbGB2JxT",
  "key16": "DhQ1Pd8qMVmG4wsgNpfw5ahLnVK8WAqtoFYupAq9soq2KXoSinsXUNPdjkSLK5wwzFUbxwC7Fc8jpKtST1vXpQL",
  "key17": "5KAVWLm8sJDCdp3eqrYRTUzZed5XSTuAomLGD7gyACvg6uSocuNuk53D9h8mWkMnn73g4LBJ2Ci7CV8LNLHnEzbv",
  "key18": "FQ2munm5q9LxR89dWDKohKRjcou7ciKtcYhTNr6wpss9d1SA2jrsDgx39KKns4U2ZrzwrRCEfP6UDzyZKMVKH27",
  "key19": "2MKnkb2kWTm2BCYaSx3SPsLDJdJrnafo7G1tLrfdoTquUJidJVxRL9CE6MEj7Lnzz9v7R4r6HBu611p8EcGYq7AS",
  "key20": "4GsTqjEjb5CGvJSMUcggXXPt4keZQ65zj6p7Mhy2zuLKCPuadQsr6UzzMT3PKaHNtPj7kqrXtia4FyNe1TsoShUJ",
  "key21": "2E9ihr5wnu1EextLap9BMRSWDRGhKC7CYNQEUpSkRkVF4YTiYyLbSoSxEKrJ9VPC9X9UN4vpgWDsAQyYJmz4TcNp",
  "key22": "5AmTYiHjKHEwQCyRutt1JSWB7zoqRi7LvYeMfRiKxnhZRDQ977XeZiUbjBpz9fc5mswbFRE8B1SzQ9QxSbZAxXjb",
  "key23": "G4DRc6svXMX7B6mYaSJKYqFJrcZDXZrBMCckHwDUbsdudW65dr98yHiQure6cM9c6s7QYiRMWj7xFj1hnrNZWTF",
  "key24": "5Y3CmfcPPjo92mJJnx9cdqADGf5bA4DrvAhxnpP3ka9fED3XANYH5fCDj3gfGGGKuXTXhcWmKBaGz3FmijyYDfbK",
  "key25": "2suPd5BvDfkNDXCSDJkDY3Btr9XtDBugQXpFcDEMHDFkhRz7Ji1BPVR4CEXesUqAgiVdf5mw4BekoZ1gGFgBjohM",
  "key26": "2feWSjBDGhVbEvAZfqsiMAm5vB2a7XwHuGTtfswV5J1mwEv4RdD4j7iA4iooN9it5Y35DFYn5jKL4Zzf4RXYJuUp",
  "key27": "2UcU7XHYYUJZTEmrTTmeqNLD7M8yXRapKLyy3yGy2x1Q7u7kmKQRfbSYCMF1MojESkHYc65sTZiQDeDetrnNEyV2",
  "key28": "4C2vgpUHXoJU6QBbhi88jYAzfXpEoguiFAMAEM9ztCTu6EhaVKFuLQH5U3BSmhWAGVmYKQWfHLxminfYdtB5vbuF",
  "key29": "41YxapSb75PfYTb7ZyWuqy7zZYuWpJU8PGSrNJjzA8UCudcDtZJ1oLG31rnLzvWte3chDXVZwrrjC488Ra3pJSg6",
  "key30": "4to6eT7dj1ekizeTGyQ6cELkoCG1zD3TnyMDTQLhSwVW1u7T6hfFkNu8MqzVukkDfivd7N8bFbVB29CLcYbVQVFM",
  "key31": "4YkDszoUGCq1FxwwBQMU5RFowypg5R8rRF52x39RiwgcYe4i4p8NN73JD9QpkpEWwSCo8UcdBxWhjThgGjvDGMgu",
  "key32": "5346UYZeAzf9u7xSwLwMZBFAoR9Mii7fRUohvCM77ZPSZKvaB71QgBxQxVS1ZxGFpH27WEKuJ6W2x6dYeziCRH7p",
  "key33": "3VkKzgeyFwinzAoZn9dTChy3h4kPMqMndMpqEa6sNf4V6yjUuCDFNxQUyEWYH64vAiwUCtRFwPrW8yohgse6a7DK",
  "key34": "5yX5mfq8khjQTNtmkhbW4qDB3dxMG6xbfxH2b1seCamvbKmzKtiU3oSb18ye7xktvo3sEwQfgh2DGhFjtiSGScV4",
  "key35": "2Ux4Q8GwBj3BT8W2VoKYssmvGvzLqLXPfbSGLasxTBuUuwVgykuzfQ88yeXxfCmAdhMEJqDUtAxeuY5rDqrSNVKb",
  "key36": "3xuXUE6wzU49Jf1S8aGR2vvekzE59CZnn6WFy4afJsRDkw9wnP4tQfV5L4tsDhEQnpMwKS8ACSYnQy1LYTKyg2CF",
  "key37": "4RNC1EGyh5Ah8XtWYaNm2AQxfe7PR3khALB6v4q4A3yhDGozcYCfk6CiPhcac1rPLkh9zmhu8QLEnH3KqhJWPvvM",
  "key38": "3RTCb3R3d1rW1docfF5o344Dk3vSPGu7XRC2qyKadNVwQzHksEiDhCpq8761SNwk3T2a8SnaovAK8tWarBwPPQn2",
  "key39": "65tnAXuvXymjP5yaJBo3m1JYV3B7SUVbT5y3Z7AvmUJYa5A3hYtnMGskLv5uS1EJkLRp6GNTth78dGvWgA16FU4Y",
  "key40": "2UAF5DtCoXRabsmo9LqDvCpD6vSsGJZ3mNNJKGdShTJRAcPVBk35UHRbz5dpEANvW3GqiEXRx3Sjcwpiuqt9zkM7",
  "key41": "3kE7sN9ZPWZggykhZKpL5R6razn6pfpQp863NUBghpjFuajZtp3pGUe2bgMzEmhbqtyjWWJYayGMikunTBjKryUV"
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
