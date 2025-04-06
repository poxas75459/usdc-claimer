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
    "WZEDQHc2XyMG93vjqvCfbvSj2a2vFt3ANWrVzz2tBpNaWsriMEFSu97crvYqk8sA64FEDDnjoLuBeXnRUrSsnhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41yRayJ2GPLMNVqu7EYPWPEvhySHvemY7P8CaAx3BdjuKY2fLVhtgkWmMDpswaCho1YnFL3aHv6285i46MrbgTF5",
  "key1": "5T9qunisumtoS8gx3rSt7sH7xbr3XTxBpmXtqGXtvKdBhMSHUBmWyKJ3wYXVQm3iLR9yWZN9HzkqcTJojBF1ezvV",
  "key2": "4pjkKPHVagDeuoKQPFbiG9hCUpNuJhSM8CTbBUsKUdVU23PJ6sFuEriY13YxQZutfix1Q2EJJ7UrsTLHff2TnhDM",
  "key3": "3xGfeiRcdsqKnTg1io3ja9Y3hxfgEKns4YApgbuS6bq8aHpUTJSqf5dRaKMKsw84qA8FAL5gkBBKhnMSgysfdTAA",
  "key4": "4AMarZVZwjB5NR6JQALYC339s38xpsffs4cjuMT1sj474PwngjvTboALnNshC1PgLVF4id1btKMjbKWVWgy4sRY",
  "key5": "fwx4TVRCTCbdTF2o6D4AP2RVt3Z3Bp87ZPWVBxBRuGw1AD1JeHCmLxGFd1wvdbPDcGcrpLkfq3UWA2BEaSHhhpS",
  "key6": "5xekY8ZVULwTpa8TJSxBGNJq1oMPZtx9pFiFUdmPqasdM4XwgRsayYE9ULiL4VL2Vg3oR7eY8uJityzeVDDukwW6",
  "key7": "4bpKjbUhvMemv1tXDmfAfDpNtFc1gAXbGomevQRoYVQBvCmfozFsJbnwyqiJk639Q2TihJs7apzM3Xq4AWXRn3RR",
  "key8": "4DWJ93nEQSt8t6gDYAz8FEEqL2dt93apCPdLrmd13uvBgbS85xePmJab5XEDnDs5LfoZVhbBjXGda5hCVHQ5Lp7n",
  "key9": "37UQLQL9hrj7ggk9tSXWckWfWuaoY3WTJ6xuCTnToQMU46g1JdE5yh4jHiae2t1e4UTik4sG838N8qfLoqeg9sQQ",
  "key10": "5aqAVPk2c8dAyB4jJB8oSvhx2jvvYyMoxYRLeqMSU4CKnMiQbcJixfcW53i6JhFptEDjbYndgor26zhawaQLTnsu",
  "key11": "3gYbURnzMtCEyKsApsY9KcA1BCqWRvfvB5XnNSDqSrhJMUGSpB33GZACeCSAwDp8mhasmx4F7U9MWUbMtiBRCR1D",
  "key12": "zH7WYNxxsFuvCtzAZUPszeTzy3DkmXJqH1xZcRCNJd5oMM1YQnsqsc2HtAKevrgw9s4wtK9W6bMmr57NogG3tU6",
  "key13": "425oaugWPvq22LjLXGW9MUHoVn7Er7LpnWaEDDQGTR6r89YcaEQdES5MxepYvdEfHxxC3uxMwqjPG466iCqWQTqp",
  "key14": "3wPBHnQi3n4NNppcE8NEjKztiyhRfs42GZMkzF7fjD92BqHPthK3iSXYXJ5EmFtAGB5tidh5KSahLhEixENVsbp7",
  "key15": "5y9Uz8KtPsAuRB5YSoakBkEQWJV3JuPX4uw9kNYryxggaiMu7jbpwkysnDfPjd4tHnMsJfRZdAf92jfYrktA3HGG",
  "key16": "4Lu8Qiv1aNFtNK78u9Wk5yyJpvWiuXs8zKbwUsmaCvq6A5FeB5Dpd1RZ5yy7mPrccvdhVe8Z1vSZQF2EJK7QdFY1",
  "key17": "3dDEMbbuUoMydwjF4gGMdJLPLc7U1GWTfBDpwmiEkKbrvCPasX2VGUz9LngvtHycc4VaD4U8QUu6n6uguDFXLbik",
  "key18": "2WSm81sFcBCHm27dE6EYdc7i4j1jWRJJBSDsjpdoaHjZ4sM9nQv7zaGaAx5oka1fZsx7vQQZ5XtiMK1RX2MdSiSK",
  "key19": "BhQDTuTHctiUm3xZA5c2g7AADXY91DWcq4mRUgK8n5VJQMPWJE3AY2qW7qrEUfJaBnYH66yFjtd7wkyfNpKeaL1",
  "key20": "4WkCTL4Jw5dFxneZyHsUjqQyDXdWrg1gmFmRsWmG5aTJdF27pphpQ5oNu4ZWux6KEPYN2MJhoqFzFj3uVXnEhbks",
  "key21": "4nMjjMa6jkR2xYd7BFiJYMSpTn6HZix3xwk4vBt6z2jA8jTrQEsZWGLBVGqDtcBWRmDn7mJcr99Kc6AFw3bFXgEb",
  "key22": "65uYkbYGdDssdqYUae4inJfiJ4Ato3Wms6BxBdrV4Wut9k6TUaEN4Hf2d22EWMZyXSjNcnPByaJq6QKaR1GoDi7Q",
  "key23": "4EdUoya4Q2K6RrV8Ncye7XZsk4DArPHFQzv4VDmJwWjYtn35gNPMV5XY5nbvXtN4dDL1Qz3J1yB186oxgGX4LwnC",
  "key24": "2caMRySJvC37vasEujhnKca9yTuXjA47xF3VSqvaSY7fJL6fH1TYDdPfDaWH5LRYZFnvyuMne53cBBoNgFXxTo4R",
  "key25": "5XNsvJok73HuhQV1NwnCBbUewzeHCcP7zF2wFrJgEFXT4jA3CvH6afb8rTahGsX6cbg8aMEeQihZWMVY2dHy1YVr",
  "key26": "2KKb9uXrshZbdn2hCdNmQgJnDauLHTNZVdBEdLfaWtZSRdRxSP5Kx8N16bmqYC15aaUiVjPpCcanoPRCpr6wGyxp",
  "key27": "5giTZeEikfTUytMkXU2N4Cfi2juVnpgY1Jr1L3etdrHSa1fqm1WZo1eLHUePkxzpwjkpdk7D3FDrVSc5XuiYtHVk",
  "key28": "5RLuLLA9G1YTC2gsP1mTkkU6sQxirHrfL3NwUPwXD6bfc7paKZpPja9A7kRVxeCUkh77tjZfYWWsRtmjKy8AZAPr",
  "key29": "2e7DdB9Bis2QfUxbf8LwHSCf2Z1istBPXBhL6H3STN3UmUnDNyRPtRY1Q8qWTKNBXcwttfW9WKdpCoRUvtWTNks",
  "key30": "4dXHhfMcF77XYyxd67gbUNhhX4FSDFdTK2X5CxLwpKioHvEYpHF4p2TnsT9P7h9n7wcPYJwH4bR39gPFKZNVE3EN",
  "key31": "2BXFMbq2f2TodXrivUZxVbTHhrTGFjrmszvyGgbsGvxY3HroN56YmzbFRHde6nis6bV2NasDKWbP2me8KE6SdH5w",
  "key32": "43tzpVNSmxUVEg3qyQgPnkv3p3o4ZjNgurWGgrLHUms3HdDY3kp2ji8cZdxxfyE4e5ZN3ud4ZTrAE9ZuJKbVQhrQ",
  "key33": "3HmPMwva5jdEQXbzCzqEr9Dx8fEQH59tWhuNSp5JcjZFCkxA4jC84SHPKejH4FMrvANBQPCSyNmDB6fvkHBxZKiP",
  "key34": "5AdfeVBDCJhDQh1tXQPaZfMjyAUEBHtspZDrcRU8P3Wf5iwhfNYAMtqNvCnsTQBtrJ6Q6FnWSxarEVARfkEbx7NA",
  "key35": "VBZvvcFvSr6YL3HJ4BqxLbtPQ2UQ6h5EvyQmfNpq9en39Va51DH2nGyhQkHFCtBSo9n88p4YxzNfGxLZgG2n5jj",
  "key36": "5seTf4zqTcEC1RsPXYkzof7y7f2wViAAfPBhdReSN1jSJj3feeTfefP8HahtDsyBy1ferkndyeCbi8PsoaCSk9Ct",
  "key37": "5jCSt8nyA3Pz98uqEv3e1CguV7VqMM6chQMcHFErkKSewn7DEADjY6mHGpKQBG4xjK735BLSF8et7Tndzw1359Rx",
  "key38": "2W8wDggUXFneMc6YFK9uUFxD89UP9kvzKeJdsj9n9az2DA2WeCvXB54vZPjYLcc81ecJQ2PSksoWDpq7G7QTVugh",
  "key39": "3GdE8yU6qtEZqd9yRThCvrLdPgucNcLYMNnnzqBwNFkjTWRHSUyaKweFjXsNTTCn9ph4jKdjV1f423V7PB9DihV9"
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
