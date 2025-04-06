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
    "3JHGs4TJBJNY6kV44Uo6K5bZ9WMDvWhKxBV4NmgPBu9g4ZwZn4Cw5Yohuqv1vo64cnLeQR8G3t1byFVRRPKTqwfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iJaPSsXmKRhwHu6LqrvC9r6G4rzQagQkovG6JBvkb6KUK9GckMHmmp4pYLsaqLFpCvtRF2JPuRwQLGKZ2NzgXHx",
  "key1": "3bdXVYjQSnpaufyK2oFoMXVpaNqZ7GJMLE8vt6Cwx1bNw83dTHn7etfwPn3S9nnFpwn7ZU6d85hGArasnwsYgLjb",
  "key2": "3WikwXLQCYMfgeCkbviwLmmoGbNp1vC8FUdiXSyi4U8AScsSaWyA7f7yS1kmxoGXL1bvAwtMxmSTUFRiWiHWnppQ",
  "key3": "3MPHFc5UEiNRZDh2AnbtK3SUyRb3psz5iQoXxUc16f585Z7HePatQr146iyxXZz4fCpFb4cqvnTDWA5sRhyTBKFM",
  "key4": "56bGabfCa6mdGKvDbtsZSrZeK9vW4wwAkWETWsWz6ozf6MpsxuiGu6ye1cHmSeqGuscHdPSF8XK4iSMk3nMyZeQX",
  "key5": "4STSGVpo68PW23qvStEGWLuiyJaegVahzxbsqmwyqCC4hspzwK8y8LYyRieXhCqaJ1TFqPRXdpZsLwKFwkWVAiZD",
  "key6": "2yFeLHSxp28rXQ7n41xoupRcLuvpjjvexDg91nfZ1NvbtAxvCuPQWhVXthFx15UbBQf6fdi6yVJHUe18jVQKvYBC",
  "key7": "3F9sMd6BHNJvjeUeifiUjTAS6VNP81NUA51KN1v3up7BjHbGUzJrF98mcn3Z2RpyaYhazTpxAoLPtNQVbc8889cr",
  "key8": "3n63q9Qmqj6G44MbjjCMCC4M39ktRfNe8GXFwXaPHUV4EArm77KhRbJtjwbWhu5GY1j7anJkU9XjSxPAE3uqQAU1",
  "key9": "2HsbdxKoaPWWh8ihdoDzH3TC8DzfojdZ22d3qcX5EAac9MF1USeD3Kk8HyeDhVZjhVx8zoRoucdbUMycAUKuNGNo",
  "key10": "48By2Q3UHB7nB4PijT2k9e51ZketgT7CWm4Fkj8CpRruoJegGXQNUKKWA2WCCttHUM6g2bbAuuWZvbT5Cn4HQhoR",
  "key11": "2rG1Vw42KYhApRYToNZadtEDddc2MHuTftCcLCXMtATFQA2cx6s5CPkktFMNYbCuYtwJSyC1DDvYPD3jj8Hx6HEQ",
  "key12": "47zhEjn5R4AXGERHyffLEjNYrDWPM9D1bL4JSnZZvPfCZsrbHsfoPPyBJEQETBGm76u1CMsoRhXY1tJdmtVnFUiz",
  "key13": "3ey1u7Vjo9Xh1h8dSzQgpq9FTWnGLBsjS99eNn8A9Wsbp5WtqqQaPByySUarYPDg4qR3jJnADZtbjqd7zHpGWwc2",
  "key14": "3FatDtCQzZ8joGF9j6buAvzY9oLMRVZw96jEjgZrBt7ZhnjjYsjaKRpDC4N1CKM1GPP6YV9aATHFJUkNfQs96j3c",
  "key15": "2uXVHvCdwtf1VHk9y4t2rUbtP1benkrqRrAxxFVpShoYLnrVSZnZo1siumC86q5mhkueBrwdz7n1vuGJv7aMuqtU",
  "key16": "5Aao5ecFoaN2kQFkfn91MDgNdyKEBiMPipCTBSz2f1dyZ9XHAJWKU5WfvVAMRWCP8kGfhWmPbsNNWgL1kosDGXRs",
  "key17": "5hTZE8ZeZwBeaqwzkZjzWQtNsZGb7ASwAXQa6XmcVonjE2zX8qZMjASgDPHBUL4yxrB5xyZUJbSuy7t8bnn5Kb3C",
  "key18": "5ujN9eKgpizrNWSxx4KiSceGET9wPccRt46bEXcHK1p5WYE6VZo8PtCRB2bgo7S6SjTKaB8Mch7o3EpWdoumEZ1Y",
  "key19": "5vaqKtRCbuWGSKMtRWTx6GUeu8RiPgT8SkcDYrcQdu1mQbcxGgDjMViz7RHTZ6u8g8NXHo4zpENFps8sSXFETskN",
  "key20": "3e7J2EFASCS6CrYUq5mmmxBEkp4R7RVA11rbHv4TSDhEfBXUxsBEz2xo9ULCaX2C4Uqx8Zjen2P9qm7KNuRxgHJq",
  "key21": "4STNAXgB23c8zJvCNcZkixkzdbEVm6Xn7q22MeDpRqWxuq7SzuZBSksKxwaU3Aw3eFdTpqMBHA1pncyMvnmXg3Fj",
  "key22": "4rtQqx5gYXSPYWkEJ6zJMDXRJzdyJU3nsSNnCuj2P7QFefz3w2wri6GFTyyi7ffbCX3zQr67cvd2GKgTUykQ5oWV",
  "key23": "2s2ZSB1ycPs7g49y6KkpYbPy7TDuVVfqYtKB9RqLxoo3M88QNx6bSqx2mqn7wNXsdpjFgntueScknUu7hPWDYEfm",
  "key24": "58wzBrjxhzfxCEMSAP2P3ZVnA2XJgFywtShDxSBajd2o3EN69zwLp1XsaeCJ2cGg6cv8zvbvTiBzZ7C8PXsjboEh",
  "key25": "3or3WsdTVBuGz6SuC3VwMQhmPFfHxHnGGYvenADL6CqytFRJeQnwbPSvUap5KGuCbwujH7AXAh2ebTNA2wATLRuU",
  "key26": "2ZC9BqdNsMNubC7N9o7jQtJ9mxF1C2gSehsfHVnTLSRWmkpRMrcvBLbD4VFsuRy2hXBLPntwB9YRMfGs9iJBQJJw",
  "key27": "2HkG5TS7E4StVTnV55DrLEEfMtaABUSSZtqEzjU3UwzzVBbGqtGfCP3gEA18d3LHbGr1gimzpMaBR6wP1aYtpCqu",
  "key28": "3iYgY8v4dhuHAuFmBuLfMJDNEa1KFbXsgWBtnUgMTRC1pn5k2siWKAK2ZSmCDqrx3uiDTaCK5Jaka1XagnmH72VW",
  "key29": "2rtbCFMXBvo9t4q6XxVXnhSMDCEKTEd15QNb9tCayRptauaDLGhMtwqMcddoUFJYxWPcojiGNZEgGmriTdrAdMLn",
  "key30": "3rAqT5wGVzA7MYzjuWPN2KY3v8ewxgDPmqE8gNH7wQ5FMgjc9JMJ4YAUCtVtV3USaqLZaWeuKTAraogXNKTdgMKw",
  "key31": "5TgTUpepNjSff3AiYSwRoyqQnFgeeHPc2DUDCcpPjb3HFvm8ozkZdBGrJaaRapG8wnfiFDYYtxFtnKWEY7yhc5HY"
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
