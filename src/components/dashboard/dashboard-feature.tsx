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
    "5rT7DQAfN5XCmP3ZKSmGTmhqrqz4VEXkDPrE9yh2DopVNApwUUfdwFb2hAgf79S1n6B99bqxSBk93o33S2FAVF2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gAFYpFe5vQQFh2sMvSjVyrTxZz8dF5NQJupNmmAYmxHXWimU6K8gcj5AnxMut35zALvuNWkBf4h3jkjv9nLjmey",
  "key1": "2Ez7kmz7S631AGFochJdHc3wFermpsSumAntbVUFfCz3ispGAxzjJbykw3s7t18WMqjADNnHGYy2Gcpzs3QVohaP",
  "key2": "cEnhoSAroUTBK1crkGpxdg42RKkmqXSqWKUxFtUWZSPqE4d4RnKF285cyNhmPR6euDmfeBX9pFsmbKFjxcW5roH",
  "key3": "2o9rKo9LerKaDgjMc2nvvv3fs3iguBJxTFwZkxF9z9Ko8YATicB3a1vsUW6yv9PRu8ZprmxifFQVJpB5Hk34aHwV",
  "key4": "5usq68DN5jeiU87fhtf6fCHUgUDRBVi7oDjBtbLSjo547jgb4UZU55DDaomrQcUKDEsRFMi8yJvj1zk3pg8aqo95",
  "key5": "5vNyLnsDp4BsZ8QZShwDx93HBYUiC2T4GuK6hzSvSCVtqiXNpo1PMEov61YeYkbHRDhjaNMeqJ2nCMDsSPRoXNuz",
  "key6": "3dyfEMKaxNx6sPWEaNMKRkgPtFdidQdkc18XCJesgYYiq3aJGKdq941bTcKdY5r5G5viRLZCKvMUmmV6x8jhP39f",
  "key7": "3FY2M9aBrfsWJQCr3k4xT361BAu9WKH5mmtVF27Juq7H5dcWuDZhXRvgZebkRahSH82L9Cv58tfBwuAwvku8ZnN7",
  "key8": "3Zr1Ju1mgM5RRtgbz9MME2TxmHJxfy6om2dvmsyy13uZKptaVujoXr5Z2NUZ3tzQZANqEMDLqwhxWQPyhHR8o5jt",
  "key9": "4cnRwsjXDsr8UF7n83BFVpdWeZfG771PQ1UujNHnkXJDtw9akjixM8rijbjVUivAsou9mPHKsDXoE79Cp2FKxz3q",
  "key10": "5oGXpVkENokpQdvBhotDfpHFrssDyDNYxQRSFDdJvfiPoDzaqTY2ZPSxVcHbQRvNo6zGa8BT8YBRS1ZqTjCYTeW4",
  "key11": "5C8wDS9DRVBFHDq27LFLKu4uXkNSNWNnEfvESMrjYjWg8w9hDNUWSB7e3d9ymUGZPdPdbLzvLgEZNBzhaGTNvEVt",
  "key12": "3MQmCN8vBsPz5Qk4CB3Bt4t9B7DpADti4r3Q1kn4DBfWApnHhvskTuSKtfNa359pfq4nProwAhse4CkbUHBzxsDS",
  "key13": "2CsTcv1FawVY4ttASBjeCJ6G2LrPyVkfiU1WKtSSrNs9xE64krWvMvqxSA1gvNhivFY7FcqSUGkfFstUBCEUGEhT",
  "key14": "25z9zXfhfNMDST2CnTdiAMH6V1L7V8SvKgWKg4uUfvTT6WCYRnkLSmTkma1Q4kmQD92jiSucV7K5eAoTuynPbPNh",
  "key15": "2RF8yordhzTqfN15KCK4WYVrQXNEYTThTmrjZEJuWewkFCfXfXJG2YUwGBvHsyZsF8tF1iM38TQvh89xdzxVocja",
  "key16": "HhU9dnkMyfwwQzzSZ7g6SYVE2Xu5U1Nt66An1ciRXSZ2c7nU8kTmKgiYEs9gGbEKrRtEatrmwunactjLktBYxWE",
  "key17": "3mxP7KrmMoMStwhBRW58GV3eE9AGJK3YDB1s3TE15LUssuMDy7GedsMa8MP1fvo1mQ5SJvjynprqq4FunJWCPfJR",
  "key18": "4jqqdvTDEzV8nti34ejM6qFx181SNZGr3yFC7n9jqzsLenEYycovpb6WUXsj23iWVRkDZiaD1VmYtQFF88SrDwgA",
  "key19": "3xe3fRiTUANsB5iAWQMcpStN5G3zcwnc4ofNG89tXE1zezS88DUME6Jkor4BPxmVazUQvGh7H3Cp8EQRMiYNpcJd",
  "key20": "3VX7dmVfMhbsPfaFCc92cBKDyd4sMbNbHYX1tqJFPBBeeciPhn1bJn6GMEUTjgJH3NA84QJgtVHH94NS1jMePtWW",
  "key21": "2LMjSkNQsfSEJ4rbYfaE45ey7ZU4ZGastFT2Cy7EAiRBnmzVC3vKfx9f6ossGncyygWikEwf6ac1CTQjRACUgmRw",
  "key22": "XcHSR6GyPCRFug7ZDLJrcw9BARdvgyXRwARhZysffLZsVU8WVr63KCzEFBpDDzZzqFcExbtGLpXTpCMPtsvNmXY",
  "key23": "3bbiNRHDjmbas7BemHxkZj6mjosCpjDLSNuQdgGLNBD3Y9dvFSuB1g23Gb82ExybcWga5dLkmb744wZEQEDDPk2H",
  "key24": "2sxiTAJSXbtYQZhQpc6ncAnNUGFGa15jT4RtZuSHGVRkyhEcyt7Pnn2hVjUUZWApNdHMc29NRxeqfSsTNiptaqWK",
  "key25": "2AuRmrpoWNXBZGaRt4fY8hehRMRd5nDuQLYMYD6ZWX6fdALJREm6knDQEfCDeT44hxrV7R8qi6Y9WUmU7nuYFJRM",
  "key26": "66ibDWs3UBcyzr9kVBYkPLVcPKWCseEAWK8aRfgsFy6B4xSnCR4Mpm7kaMrQX41poSVk4DcRwUfXhUZ5DBCtb24U",
  "key27": "4uu6UdrYPLq77f96diruZQY7GUkoSsZQZGpCgwL3Q7nuvoYM2T8ByQEkzPsAuXzEtGYhF8zJqqguXmQzpu53BGYj",
  "key28": "5nC7wNY41KshogDp1BurCTbado1BX4g6mNqzHoQbCp5XZ4pSt2mmQZNJKEv2tuKSoRCigsnNHWdHWdxTw57Y1HY7",
  "key29": "ea4YhyN5qJuvXQQo3pt3jhpRqVsTC6rcbzV3kY32CrjrzJECxLJLA2bZpf6YiZhh1zcBSGDgVPp93fGDNGr3L8p",
  "key30": "33mHXni1BrsbttvVpgPcAoyE714TPjByFmSxH6L9wXsgvRus5WwEoY7irNUfz8mPKRTXQ6UHyxqzfiEdT1xNhN7r",
  "key31": "52Y29WkLe85bmTENTdHGQEtu2RNc9f7m79ngFJWqjiRsWaX74PbogPTmdUtSkH6m5Q54tk7kjkTN6NyLkKWgqAEV",
  "key32": "5EohGEQnb1fR8jH4UvP4yHbheC1sQRZPX5RMji3TVqz5JFjRkQwBTFUW4iqDsjnxRfHpNbkYaBQHbodFr6EepdNU"
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
