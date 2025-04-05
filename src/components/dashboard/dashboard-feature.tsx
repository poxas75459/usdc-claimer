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
    "4DmYGZDCbkijrjEBveCDRGkD4JZsVpZiCFEp6NGKz2crgtqC2LDyvYPTXLscH4Kp1uN3eLmkLy1NmLL2wpWab3Rn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CigJcvsvL8G7pV5Wvn3MGCF4aFmQptMbCMk13ycwerwjCr4i2aGNCDgvFiTXmquM65t5zUB9ToKKfJKDBBp7Zy6",
  "key1": "5ueepQRqrtEQ1VrLym96NBRDkEr2bbAxx2HJc3hcyP6uYg31ZoNzuXRz46LZEzkoGfALAy5vZD5iburM4DWBRsi",
  "key2": "2JyRGNu2mYevkdrkiZsUtCWYaamhQ5SajM4S2b4PkAEnQPjeHbdmZP6UEi2bnkhnTVeCHtidCW37UAMtJx114rrz",
  "key3": "33HBAx7pYBJRjwsKDVdqGCHb6hbgn75c9oVTNhJoaafQwmtPZQaRMLo591TRZZf4VXkEJHXGmLDyfWUqfh9hgQLC",
  "key4": "gUBphyYifLDCgvNkckp8U4iUhJduBnEKNFwNUGbRU9KVc4CvcUprzjSb67xzB2zYrU3hyHVP8b2FQZYgdvpAAB5",
  "key5": "5zXoknZG37XGTj7ancPWefJwGszemLBKVNHyAy2V9UswrEUQMPMfuozqxtoPgxhmMp14xi8qiM1ekkN9B4gd3Kxf",
  "key6": "2my6TbZ1bRBCwjmWvRK7TGTg5gQCxzhf6WJYRBLpBipoJZmMRG28R3R3s2wQL2RUnC4skbHLQsGtTYzzScRepno9",
  "key7": "2UmwQJD69RVcqKqrwW9898gYnB8vKTKhoE6DSvnt2HZBvdoA4ZQFyKjhU2zLmmqLisonjGLDUZoJK5G94T5sj2VB",
  "key8": "sZj5rNtBnizucdnyuDeo2CRwdk5dM1yPWuozXUnbfKGz5x6twSB4FooHxWFfn1rrqwA417x45EpPnoADenDT4Aw",
  "key9": "2EkRXq5vEmBzHxQXPDMKxqzmykuMByDgjxgjq6ST4FbfR9xhjFKZMrCNvAX7edSrMqQtkxovU2dDp6CE8An2eRFi",
  "key10": "5WyqvxffVoNG3VPRjS1KoiYqYbFRBymdKjzcdUJVMuxn5kmpk5oyaPydDRSPb1KMVMnTg7twepRrpfsijkuJF9Bg",
  "key11": "2qrU6JBHkkKjHePEDojQCUvzPWVv27XoJsyrzom6ThKyc2uxGFcs8K44EcgQZ464Vc8pb4CY7iVPCvrcukEjhy1",
  "key12": "5JfrE1pn5f4fW6TQP9h8tnm9Zcf9HCmLSZBXKKFH4DzjWv5w4eKKPqEYu8RtESXtoVbP1yqAwTNBhmB7vE9wuf3T",
  "key13": "MHttrFpYeUJ7Bc9KpuUKfia59fMTZbN2ACRNnuT4j3cAh3fwCqhZuf27sg4LgpxKPKBJKaQCoBJ8jba3YNjBBCD",
  "key14": "2aRjV2sdykPcT1927DSV6xqzfspJsH37DqEmqybZMN3dBTN1QXXtmNxAiYYrmkug2PJo3rBPbw4SHNH1Y1kstu5D",
  "key15": "5dMGZwAbCDQFm7Zd3qVL1ZfgrBjLE2qzWj9aaPhJJHC818DiUhwFvtdXbhMUTiQguZwDwwhXw49tHPsKUMSCSMnx",
  "key16": "5QL8ZGr2ER1jZmdFadsRs1MXi9kNwuB8yYikAZUxZuHpWS7P2PEg56dQGd9UPLgz7erRa752BdATNAuJDkT213L2",
  "key17": "PT3YLTda6SoUpcAn5x6729cShcrLiyVu53wP1BNv2DXfa3PoFmq3NmGAobPvbMcmagd8W1629j2gXb7ceJLh6ig",
  "key18": "5oVgsbFkvXRi4mSivp2yfFhuZNEw9CM72wiviigR2CaW3qAyrFVvtizeQKpB5wyRe1bEaSgM6fhEkH5cKXBjnmd6",
  "key19": "3fUVcvj88d99zLZodLsNk67mP9HhHUSG2i2pzz3NMBqcNYG12o7evNsQGCee4tTqi4PxKcv4TpFyydVKYLxXnyFf",
  "key20": "2ys9tEe7bSYmpLM96rjJ51e3EcqQAiEBupByuJ9xYe11JdVvb5h9rMWPfbAS7srWWi3EPAPqSxrGUFfQhLNLBWf4",
  "key21": "4ME8c6PWdGHgDon2Nx6CtRMTCCE1DgwvHzMLM35uvNVJxseBaf84XEQGxL2SaFwNoNgGv6Phi3tUCvjSqXjE1orM",
  "key22": "Khz8tQ78R9b9MD3CpGjPvqFR1ok4FaDD3uWFbhyWVbDBM8hoYLQ6kfKPXYmyxmZoyWCVCqmgGggp2bGuddejPNA",
  "key23": "4SQEoLKgjuKdXE6HH7uDNRxscTQHq8qinZRyaLkExJTS9jgF5pBbHb9N1EJDR4it6gQxfGAwv2pZdUesRBtdTbUu",
  "key24": "4hwZUtfXXnSVQ9BXxeDXwbhkw6RwA49PbjvF3z2g9dVY8M54tPtHqc6AgoGZt9Spb8rFBXnAombyQhdFX34vdFiH",
  "key25": "2mSgqbuWxpSszCr2pTMxDiqNomrxPMFK8rbLfr8cmWbsMPMoXhudRbJxPQgvkGn4RK5bnXxBLvSgEbK7BGd8zTsp",
  "key26": "5JVgKpwETviY639TcckqTUdwC61UuFiE4A4EdwXxqgZTvFM3hR9FSWancYsTZAJsecbL9L9neTsCNrKLNrrdR6e9",
  "key27": "2XabxK4TgzhzFXvogiKpzichATtNwJZrLpVKzAN2NWn442gWqxDTEnDurLTLRdE3LDejUYfm9eiyK7coyJUw5mjy",
  "key28": "d8qys57AaA7vwsi3v2cMmLLYbZWdhVv5vJcY7FQ8bS398uS4Pd8eM4ywaYab2Bzn2SNXRSXjM45RVtt46AbgEJ9",
  "key29": "331TuppiCw19Niss28Q8gMKFfeuoVnk2SFipdU5ZRUYnY1tFAepbfKibxGPwfLTCgQF8P3MxbZ7CrLCtZoM3G54w",
  "key30": "5Wtbx9KtpaZj5zsnq4jLuqQBJF4YkdxMSmDrMfzTunpufhC6q7fy9xe49428CrcFToXRbur945Zs6LxLYUa6noP2",
  "key31": "agH13eGZ3Z23pDFLrTC69qvbXrRW9gmHPvoMJSA6Nq9tMkY4twXSc6pUekPyASf424qK7hMdYgsPDCymsKohbkf",
  "key32": "4gTeKQktAvoVyhDo8pYTkHRVkTKXH5sy9Khb85S5L8QaEt6Q3JYzesMRdLw7j8KYBMMffCbnVUyswcvoZpnvLr2Q",
  "key33": "2E2ii9ZbnpYjFXJtEDBMYVr3mbPfY3gu4dXjgHEkCaQ1ji6z7tzgEYeMJSDHUXEYj1UdH4uR4fdNsxWRbL7SbHq4",
  "key34": "5QuRGH8NepyzgRcTEiYueLhCaAVZLCwmYozBLFLrNyFX2HCv46cGoVJWVwhMh6PrGYSVPJWEYBhXhVLXgiGRhPp7",
  "key35": "3kYk4Mh3L7Hga51TmxCtVBiJp8XH71o71itevYbKEFSeJw5T3SjEneABBgit25FCbjSGkg4MgvvAFbEGiUqALtCy",
  "key36": "3jutmkFRQwxjoRqGoct9zPFsYnqzit7bUJAKxXy4XtKN32AmMQMbwCbwQG2VWN3a9PpxTY8azjwqaZP8MUE9vwAe",
  "key37": "4ngdCXpChKZkhoCQSrFD2tPkSLTXzSqEvU1M26iMH5jk2wfLC3uY6QmVqqSmuygiCxJ7D7g5RWUbFRJDSK7oZSD6",
  "key38": "47AFgqXuGthdyCH7FJxeos1EDMGtYvqPrZ1ZVJ9vg6tDdFRPpUicyJUxzafBKcNDfq2MWkwNgNfjmLPM8DwLsU6Z",
  "key39": "mYAvwfFJ5MoozyPv8sje8JDCeVPLzpgzvCnvFeyx9guFwxWGXiUGs9gVubRDuEXV6tWmtVwrWaDvu9REwB3mXDn",
  "key40": "3zLN11heThje968aGG1PcwzHGzYhzaVFFEevVg8eE2x2bj6Rj1QjAvyPE1LXuxXQZZBA6HqMgePRc9JY87egvgyk",
  "key41": "2LP71t3WbxFifHsuUCurD8rMMYp3BnnKeKyStAGNnjftAU2nifnJfdLt1YrCSg1Djz1uWmqBdwN2KzvwXoK3GKd8",
  "key42": "4Axq1ZDdazUtY74CyuTLEGYGTLoqgY1HD4d34LazRxqSFK64eQoWDSPaC5rzTwxKbCKxSwVonYUxyAY7kdbuQdAu",
  "key43": "3BSgEN365aXUb8GpdZ1LJV84KBFdqgbE88JkhYJf1e8dZbqTmm2cfaXmPa49yFMfvoJCmsC2sDzpc7t5iVVG76HV",
  "key44": "52ZQLFCgEMB1h6a1yRC5WZK8Cb2EixXZLZr1dk3DpAxuqD6rK3o7bXFdCpL7MqECfUjNQvXN8isWwiPa5KRNDuC5"
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
