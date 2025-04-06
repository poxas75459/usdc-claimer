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
    "47zSukzdY2o5RyF3VuThuM6iJzemGt3vaENT2jwK1NQC2KchNGxnQf5K7EMQ4Fz8aCTrKKmBCf9UfyEkaM3oyjPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4brMiG4cFFyC8EFBEV9MV5Fn93jUQRbGenhF8rSCHLB6TU8jPTW2aNKaDvDf1nXfiodYwcN9fVPrUAF758tcobPU",
  "key1": "vr951LGJtor8FkkYSu8H6QpNeC72ScrGUvAEaG4v1NBHtFfi6wrmLhjnpS1yXWqV8JcaQvsraEGz5SueVQLFAth",
  "key2": "5eU3W2rXQ3Fpgi6dMMwiiQZKY1iaMtNcLdr2MYgEwE21t1MfEgjE1xGo4bUBHGS7vPGhUGwT3f9QpfigEVAQdmfa",
  "key3": "3jxmwwNHVS75PB1xqisK6f9uHyByQomqjyuKb8Evb44x3D7mTxaW6xrZp35U8cYRGGPvjcZ91ppbc5KxzQciJpU1",
  "key4": "3MiMKx6PNzoxTsEXyS2iUnZTh4HqMEqfkKH8bN9mvWi3qYRth6rLzFBK1zRuScxzPd9vT6XxqRSH3KyNFs4Rbx5H",
  "key5": "353gpzY39eHjidYKF24Y5PyFoN65shAUHBAToifNph3P3vChMFmfhnuMH2vz84xPaZUUdwS5q64jzSXJrYH38FKN",
  "key6": "Y7gaL144133PJHgno3VFbAGAy9UqhKWEjyVQJrKcakuyxyEGrcBZyYt1a8gTLvTPGJYK3RMDNeEoo64pX9RdED9",
  "key7": "2EYV2N8aKo87vjMMMRwTXRsmwK5au1EZefnEyJQPZfoZJRP7NTpxCHchEmfsbrkmYEtg5Tk3RVFdDT1iiHWdmgGK",
  "key8": "4wVaA4JkA2FAUCYRqDKf7oGXnDfivTq2QSs1res12CLmCXxHo14mLm4M8KZSeLcjVz8uf2VCZ9nFUyrZUJTz4HPt",
  "key9": "4Td6nmoNxvNcT49oYYvVBdntRcptRsVv3paNx6CK8aBpjiAWL7uPJzXZbDMJhbdkRqmtfBy9SfKeSxZYChjWpnBF",
  "key10": "34RtAeREmK6sEVpzDadvXxvGe2VSmqPvxJgNFGvs4rLjp4xJngPCnNY36J2mYVU6dNQ6odPVcVhF9p6HPXKPTxwL",
  "key11": "2BffjBw8YAGA9w2XDRH8TMpKoXHiWRtem5NnFfzjADDrCSBKuAmfPprdNtzgdQXMjGz4bJnVtervnyq8YqCaCzWq",
  "key12": "4jMgd2uiJkRo1SBcmoPJoLYw5KpDvvq7DaryLAQeqEmTPcN2srdSPJ831WnK8T4KTQSszaehuUiUTBf8CXBbT6iD",
  "key13": "3arnU7gnV35uiJSyNAMBABBwR2p4CLoBEobqJzaQW73Mxi2xvXYYBZhCyUdba2KgApwBQsuTqcjsgWkkcst2R9UJ",
  "key14": "53oaeRBdK7nT2gVj8cfdg6H3DqT6WYXv4pVUHLBRx9faac5xd5UFY7Za6uLmaf1A7MA3eGAixvzJMgDWjLSqZ16J",
  "key15": "3JxLiNqWTbHgfdrTQxr4ECTBPpVEeDnzBJBSFpDJAUqRLLxYU3Z8MhdtMsWtsCzR3vcNc7LQRvCduZk2zbQaTrfQ",
  "key16": "3uaK361S73zrhEU4HNvXFP9Qtw3cQQckfhCHyVWAjUC8Q1jtSf4uExe6NcDg5VUjngCCmCV2LdVDEveCL6TBSuGo",
  "key17": "rXnMpTeSJAbYmGUkPnb53c99ePH6FfFYXmfL7LAKjg716HFfnbHQPWiahPMELsQzGG73J9woh3vWpeU231vVqjs",
  "key18": "23h7AhRH6dctNWnqzvKih9X3qMGWy16MXSoUmdFEry7ZL1GvA8t6ydhHiANYzShY2STL5xNPjvofCAZ63QMPLVS1",
  "key19": "3U2hQiAGo7h895mpoAguJNHfyMJUDhcTLrhJJs9pbuV8pUYTLcEh67qAG8gY6t6ZCGuRyeKTeWEPwyA2qKYo3L5B",
  "key20": "4HZSfLTKik9Vf2cCFcqrQm7M43nyYGVyp2TUsR6HHCrPfVRkXW43NLirjUmZiHrQiDNYTB5rUTysUEb1kdbpGogG",
  "key21": "65rjT5RRK2TvLtvPAvxG9sLqqJwFJrJGzvqXFDNVFGuxEmsw8yosCzwNZA1Nc4dpZcksHwURNR7Cwc6aQbA3VxRM",
  "key22": "3gy8vFPZWvYsPDSQRmUbJCiSufY85NypXxQBoULxzfaPsGaS8DhfoxUucBihVg9SZUz1fpA5YLzu5ySypnkUAPxj",
  "key23": "5pYSLH3B1QWuvTiMZ2eHEYy3M2iqmG44AQWxcdTsHquWmCi6yWiHYjsuteQ7jiwuZ3qM58r6As9FFJADFPghqTpX",
  "key24": "gmaz6zzLbBTV4YTPkVbMFTknZdJGqNmBMaTCVYfbkRqQf5rEBDfcef79EYRprYRehTsor8nuNjcVQeaAZjBkoyt",
  "key25": "5bs9isgYiBqrnK8BNhMQHe8Tds7XsWMTkh89VafnnVCK96Sw5NCDebJ7SUryh3Bgqu2WprhhEQ71CuiLNo7YDsok",
  "key26": "2Wjf4NYDF2DxgFap5K3aEun9eUk1NScS8ntnjHsiW4Wrt6qR6y97RSrKwMsqEmcnxp12uLS6V8AnEDn16CvpmRUu",
  "key27": "4AQiuRFHmF6rvdTEUXh4hMYCjujEPxZsVEgdtcszmKPjQg4EHoqfEdSkWYwErdUzN2JEMzQhkTi57ghv28qFy8cT",
  "key28": "2GUTQMY215T1NcoJRjoXWhjqH6uMPGfsoRf3tqWuSW32TszKasizjC6ZqT1Yf3U1z7oJWcnqVdkDtkZNWxELTTPK",
  "key29": "61LQ4AQLWwnPHY3uZ4E8TXavcjNQRwMr7AvmvRfdyHLG72D6VZLmCFXTZ42o45ToV3p24pXUXAvR8tpWSyrCpT9M",
  "key30": "5L6WtbnTnG86N7JxHTd8rRMe9pDmBFeYN3oApUXi3scWtnMjxyuwKfQwRuW38KmhPSaFUvD3yCnskFH722LnBcCg",
  "key31": "54tZsMjituaHtqCoYFdguUKWNZou5RB2DTfoiFDkUkUrpenaLXMH3qnCQw59xoUcHNxxkYo4C6zYuy5jDSrSsa39",
  "key32": "2paJFCw2CfoL7rxJgwjX8MDR6g1apwc9jrK9FNUxSKoB5NbCsZBSTzJq6KfqzKxrFEUPjMNjq4pg2VsrtJct2WFu",
  "key33": "29CWU1McvqeudtC1KCPkqAvK3dimvhSHCprRGdXT75aokVHwiRbwXBdJeyWna9ftv7D4wmAbUJEm8t1GSLeBff4P",
  "key34": "5rWU7udCFKLT4wwz1sAsRi29jne1UnFnT12a9iRzhQkjeX8tH9vMYXtEajZ1u1Hz1bXnG2DHDEiX6PfbLB8MACLf",
  "key35": "2GFd9Q9EQ6KfUDwUr93ycSLRkE8kwKQCc5w6qcXyAoseEPQkNpuyJeXcqjw7LyrX2GzhBoxZSCeCa8Su4qWRp37W",
  "key36": "4wxqEVckEB1gbQ4K2KpdxmWX9yFJBCMofTEHUx3zyGGxbgHavq2ynweR3ngdZJ2RiuFL7hfmDor5gmDxPmCwoJdM",
  "key37": "26BBz6Ao6tbnyZRbaJUi27pXQnyocaohG7z9kiQxKYmpcXivWhF3iayingcbCiMyBviJkBVcjMbWsCPtGdQoAjri",
  "key38": "4T7vZzgqh6Tp1FrNKRE27ZN7EsRVmbN54hwqQ5ki9xJf7vXT81FXKRruhkEptiTofwbuwgxzb1JWTVR2aozU32Aq",
  "key39": "3HxzUVtAiKYpqEYw8zTTTGD7kJeDsgKhe2vvHjsK7dG3fQoviL5ZUbWEhuSPV9mgBJyPvbrDEmBics8xtwambrHe",
  "key40": "5Jow4TCTNDcNgBHXsRdZCNCUQT26XLpDthvAVoye6uQdXFnGifsvpGvZ54DEDYhCx9ETB2RKignRLHDgM3kGyexD",
  "key41": "2CLz2Cbyb67hQm47gcsMHfBjoeWRHKSBEPethWvmn6k6D22qKpMpKHTXmEkhFfxYXa5m9KSK7brMnksRVvBYsMeb",
  "key42": "3brBMVWgSmrJ4BDBGKmpAUUjYUxET3H3pwB2u7p8N8h4LQ5jFN3JsGLjaqGsGQpYaoAoLnqPwdNG2XSjR2mY9U77",
  "key43": "5Zs5vwfgRcSe2HCCcPonZ58LBmAtJDzNojoWtXq1QWwy7nGNYvU3SpwyqEgkA9wFz9YePHvUHTw6wJCrvV8r5Dk8"
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
