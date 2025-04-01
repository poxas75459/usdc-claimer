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
    "5CFLvQom6Uo6fvKC3cCH3epFc578S496JwtukYtjMuwe1H1c4za5jVVzc8D5jWhCPqgNuyFi5DA1XM7pBGZpACjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "262z7gjiMfuswUf2bxsA2yGJym8TR8Q8yVitBVgisTJW94kxHabaVM8dWE5CpeeHpvC9UsiLtboSreNf2tNP9baV",
  "key1": "3Ue35hKWSQjheGuApU4LqkPgQxSJBS7pAGAHDTb3qFhAeVDUq9dCiERXWP6GsvZeEGYdPaaoDc7A9u3qD4VrvgPc",
  "key2": "2wiUxEPZDtqhrAi7gNaQF7NmPcMfiNsfJ2SL3Kwp6pu3eftP9CkL8oD3BFy9uffyyBNX9gq6fRZVE57mVQeexzNA",
  "key3": "3r6u9eKcnRVXTdbCG3qmVf2TH2enaWbBstioFGWuQM1cbUVjpnB9EDNLzSdvmnTw1vEyNCWqAJE3vJH14cFEaUSd",
  "key4": "4dF7oakNKayzKk5MEKiHuSvd8zTH4YR4oBVcXPCk6Fs8LxXTT79ZvxQZoj6N26eGrugMT27k26ZjB8V7pMc5gkZb",
  "key5": "4KyooxLDS3Do7U2rGGrx5HgWa2UgNhhR2ioF5YbtpC4R8ZKbdwv8jTDSV7pZKTGwkCmgJzkQuNVGer3mfPqqiWky",
  "key6": "3YPSwdTCAnrruNbZa2NhuwUF4vF4cMDH3wmVWPFiaqQShE677UWdwcQDRVDXq5kkt1aS3r2DgAmcokzXPZtu2A2C",
  "key7": "5Mgx1wAXanA42ozZQw8SUJ5oUwknqmzU2tyj8iqLLSWkAxVUVWEzKe457ijQeZ8G19R8c7s4ZjXHKXRoT6QrmXL1",
  "key8": "5AcpeQ2U1HnhAqau8yaZhKktqsm7PqeC8BdvMTEWcJvM66mipgGb2HULGSbFQLPmvAwV8HnKimFa1LaQhHFVgSd3",
  "key9": "rUUeSCs5puzRixYkSGgww9M88iC55LJzQrrSYi1SfVkHUAtE4b13JyZLypzrbvFhzhZbGvHi5PN2mMmMRiBvSGg",
  "key10": "59RXy869rf5uwYHoDZQVLhznn9BKcS3PZyehk2eUz5dpPwQQZJsXV1DYgXDoTKuvzE3Jg7UHv35dPWUgdRMDWxkL",
  "key11": "oDv1w6FtgttNdXZFpSUUH1nBpkuaVM5tHZmJdv4jVKyegBA2eLP7wFvMc6gXTJCNC3SWouV88RBB8TdnBTzGf3t",
  "key12": "nhkDY2t9hnHp1svXQcBfh1MnZ2JiEmRUWdjN6exu5HHcog3P73L2kr7oN7q8knBrdpJ1HgFMtUX6vuxEShcMXVa",
  "key13": "5YiiqHNgh4RShsL6ozf9KXPStMU44BjszL3V6seAWjxcMuQGcdNwvNH68BMEMGybcmxqXowMr17tSwY9syn5ARXx",
  "key14": "5uRteqDU9byZwpohc2cgGkdfkrbMqLRXX7Akb8GW2bH9Vym85jUhPQahca6uormRDfJuMDSybq7kKRtJb3A43pEW",
  "key15": "5Ra1FPYREFwNq7XLSnxESwa8q9v86SyARQwvv66Ts2ShTcnniLparpPUT4YtyX9y6JfQxQLuVqjNsyZepQeMQyMm",
  "key16": "5jLptuYG5SNTQ5wiMEmFMm9V3X5EHoRu8a8EBojS4uv1i8zQWWc2ASz7XuVVv62tj9HxoYFf2dyVw5h4omDo4uaj",
  "key17": "5EeFJnHqxCqcrtziVZWUzixasmfWhW7NGXqaRRz641s2YoBErQcyut4hWSJmaqac9TWzdi1sKLHPgfPJhYmZSTZc",
  "key18": "EeegT2HusGL73Nk5TdCJMvJAFdmSwGt56944NVgq7xvvavZkauHzcaVcxg8LrSqUs3QjDaX53x3MAbuSSmXwYKS",
  "key19": "2WJLAPNA2gS8Zxz3U9SDMGpnx3Z7Wv5DHFFTzdkNgDquGF9fPScTnELtQjnrFqHFiWoyAnZhXBA4RCB2fhFVBTg",
  "key20": "61zcPopfwWBfiQU6v7T43vEk4YYAs6Ea7a3X4kcm3vcCioQcM6viTcgmHRxPYoGAcJSsQ4iNP1ZLk4apYT8kFp6W",
  "key21": "3wSD2PqGQ82SuAxX5A3KUKdt9EKgq8H9uRz5DXcpKx9Fbn66cprXPzcyPb1SEib3xCarsC12YPCPvRLxMyF4d697",
  "key22": "dM7seBWQJ8qirdxfGLLUScrk8SVSckjs9BGmJMFaZcRymA5n3iqAtzLQigtiXUUbAbN8RNFSfYwtJqeG6vTzUV2",
  "key23": "9Lc5zXQxfLFehhopzbF8GAs3w6Lbfu7g8vKkNSYCKsZkaBiLmJBL6iPj16K5zbNYFHuTphE88v24qvZ7gKnkL3W",
  "key24": "2CmdGhDBTVqKXr4F71z6dFSKRMaS7ZtMxfvwyjuaeGrFcEywWsRK6V4UH5d6PbBAbn4EUXVDZfM7MBpenuYC2MRY",
  "key25": "4sejuBoE4waeZScHM4pwN7TX5Tesob6i4wpRxiGXzh7mgvx2UW2bTt8xFfrmdK4q3Nz3CMbTkvgj4VRDHyX4TSQw",
  "key26": "28AcdZfpNfWRSXst81SgZgKkCy1v97GR1tpx7CSFpFNxZHGzg3q1cRzcq9FZNLrJi1zUu7k5ASWiW4mcwDsnWGJR",
  "key27": "4x5cqseskWBssYcmKurX7GbAU5z9SJz5k33cv6v3tXwzpGPqj6TRJNwTz3hpiLj5nTS5xZmjP9uNmXKdBAbfKn2j",
  "key28": "5u4T3fbhJ53tfWzMJ9AwKPRBjqAnQr7Yc6fuZDERvCVHQyguiwmmyJGQEiJvWhAwaXaoqF4VvMmsjY9u2hhXDfM6",
  "key29": "37DcoPbrbTwypQkZKh8endb35oBvrbxddsmHST4AmXrMs4FXYgY3MqyG2p7DvCgaA2ab6YQ4Ku7kVxaR7JqyCw2k",
  "key30": "27BMxawYARbhmNMefzSmQCLn4PVXpMXkQZbkjMzRhBH9TtrVvt4KP2t69df1fGVuqifcvAbxhiDYKehX2DwV3v6o",
  "key31": "3Mk9eiDK7tT77EA5u2WsYWnKcYZLQVdHcR5yDEAHabMut3ozmj6Wq83SCbxowCUp6ge8yPtqmfhFFCsotpYU4x8r",
  "key32": "5qoPu3kTUX9vxHwBDajuLxjQEreBrLtGeUT7mwmWTP6q3i7Eurvzs4LNPXDVvgXkMisUJ2XkHm16ovx3yBCLYPLS",
  "key33": "3U75WFpm2WysEF8nmNufBpxxFNVnSovaxvx7P9UdYiU6SWb3AvN3uPNJCHsU1Lqxtg117WmmjCxa9aCBfjAHgRdp",
  "key34": "6t18KTvdfBpitQ6mCEWGxbvC3nxm7S9kCLdmnWb5vcWGG3CbCEHh6h61g26TEkJ1ovRWX7DSiZLe1Q329ryYyny",
  "key35": "2s5H2wWEtC8rp3FWsXaMgvSLfJ27siw3KcDtVedFV7VYjjJEC7g5BG5S3N26A6Bi2ijZG8XCubEn6iTWRSUp82Ui",
  "key36": "3mNrc25PZmxvVJCi1DpBLfbd2MxstCLSPJNGPWsUqyumuFLbqaFrnbdiKQtP2Auckd9bKZ6akDM5x1Dkuxv7dZtS",
  "key37": "5qFnbw46MgspMhcMMXcyEd3ZcXtxM3mPrTGAs1nDP7WQ5M4b5mNKGvHFko9NCCtzzEq1EabAC7Qk4sxgRxUbPpvK",
  "key38": "4i9FETjNEcQXfDmP8Kay8nvxKn5QPM6vDpsGeou6adbBy8Mw9e7gQm1VJQhZ1nyv6JRNMwSo6EgK2Bxh56BtL6Pt",
  "key39": "4Lo2Cu1P9MzfV4Yq69oHVLXbC4Zn33MBE6zNo8f3PTAB7tEFvU9TA1QTrSQLXsHY4L5Lm6Y7QL8T1q6KCWebtTq1",
  "key40": "5nm8K3pvdJta8Udk97psbYVkZycTcZpBsA38sJk91ECevcofEuZC5F819XKpPkQhhN2DasUCyVcADJnx4tqyLeyy",
  "key41": "4x3EC5P8Z29zrgqE7tuBJeKE85Bz2U3n4frM33WwAbhPA696mGTBTmUSd4dqi1KdJ8XNb4n5uFFWfh145xBQNiav",
  "key42": "o5UeSvWwmZKWm61cp7SbtgxeYjcTLR26ejdf4qGAE2hh5ndc26p2H1JkUhEH8G5fqAKLreFXw73AAp5PEzwqFvc",
  "key43": "3H3YYDN7Wt3c9g1YyzdB1c96TEtcW3qDrVnMg66BCQTXUVycrEaNBk8PK7WNDjQuyvcWya4J6NbBSYPrvt4acC1Q",
  "key44": "29cdGqesNdYPkVQjHFMRnNuZxbBcMNh3bZ3NEr9ck9CUxRuujQQairERjbcPSG4bJNR3atZmaFNFKA2sHbyjCovp",
  "key45": "2TtqkmK9mZjPNmBZ52Bn16pgnTd8WAziEfAgZrMYe1QSPY9hKWALnyocY5LtEasrwmmVxrs7h2tSJaJjsN12UFSf",
  "key46": "5hR3gAJZKHDrpRS5pi33kXi3nMYhaBjy7uV1AcjYzLZJhjrWdADWmxmUwEDX3rF84X6dzGbRGtZjCDV8uZWdrjEj",
  "key47": "2kpBSUZP5dbE63DaLwzBk3YjE93w495bDUDcwHTMUXcMiRLkKdwsUdXZtk9his14xWVKe6a7dpuQZYE5gKdrBTPv",
  "key48": "4iktvvv7pmJGRqjDMGoigBx7YarXUZMBYPWnEVc2AaxU59pSF1Gu5DxSRJBVxynQ8Z9wj8Mk15i45eoJgiwvPFiR"
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
