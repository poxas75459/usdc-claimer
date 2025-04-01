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
    "hcMRfQDVaJfYPhup8uky2yphcpAhVHafyu7hwbJhbLBpywnwgCXZiMVPHJZT9NJqzpGQkbQ2ZpLxw5ZwBEdrg6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SfiDH6GbudB8SxRpvCY6qUnzavuGGT3qGiHDsnyw52za7g6DYucWoxTFbDvbNSieEgf5yQpityT4C87HQe18LYV",
  "key1": "5nYnoWcaVUjtUJyuHcc6XahrTbYDGC5DNqMna6Yht8NaV7WZKHw5sCEQqcLS2TG1spGdv77yD1ZFp9VSGS1URU5H",
  "key2": "3rv3R2a8FZ9KrvFBPuwE3Ki8vwCcPTMSqgfNCi7j8QYnmEtU54p8TF35x8io8eTPeDbk4wjeyc6Fz8ZkbgR2dCw1",
  "key3": "236sentvgzDWC6CUpvL1YRdRATG4qTbrR8odny5JPPF2RREpfgrsDz3dQpjWPpYVT3BrW4hJbjB38UoT77WRifof",
  "key4": "7CHVU6s89ZfgW4M8AyM6ksBbhtgBLbgh8fA72Q91NrTAt2j8HvvgWYH1arz54yvDqXnerz6hUshH997PybFhuK3",
  "key5": "3Wvza4KXYkSS4LLnUFGvRcdrbdrkLVxiW69CDdmqBsuuKTk8imqoGCUw7FsoL1pYnsPQ8qZ3VaZCEgNdFs3KXzw9",
  "key6": "3BFVhS35ZbP8QAncR5eMuNemp9G8kbgNx9vLhD4kH9rvNyQrE87wdQ6ybwx9RE67pfBRZH7UTFz6LuEJiEfzdMVS",
  "key7": "33w6c4odSDE9PDRbVAgNkuHQ6dMc44ACdhafdBofHn2bsckRxCKwWYW1vPYAob4AhvcZA3viapxF1nyAZR53C6ZJ",
  "key8": "5q1y9Hzhe25uud4mkgvExqALq3keDEFYq3pWGHuUeqxSCHGJUy5vzH8UT65VwAVgYnE218VdZPD5rWtEgnQNLtUA",
  "key9": "46MofRv2LpAiFHnvnG6eQ5RZTXg1y736EHCEF2ya3956KFsgrmtmBdverViYz65EJi3yCtYSgbBZ5NxXuLYLFpGY",
  "key10": "gCxWJFe8qBNd81DjQmryafrfYMzs1f94YfykTVAUihcRFRsCTncuCyxXUPGdDQYb95NZHv7c9tHY2kqHsPB54nB",
  "key11": "3QCzG4xKm1wgAG8HNu2hEbcbLfWdVB1LEPfoKyptCgQ3umN1sEmtwQsFsRssoN7BfMQMZVBLroyhr7eo6xB8pMLQ",
  "key12": "5bBKkkWKSJs1FtMx2JMvoCztLE7UkagaJ7Hw6sTTiSr2NyMg6sLmDoke2kmtb93swxycbKMyotJCjhma1dpCvhTJ",
  "key13": "4mbtyqc4U2mTDXFvs28htjp7YeZGVdepb8P2DVyKYnQitoSuUSUH2Fs3LDZZ2LweLphBU4W4ApJmzcb2dn2ZGZ1H",
  "key14": "4P6Kbq9RfrKv9SFX7VxW15FsLNx3YQHJHcmHAJSQoUuZzfBUTCifeHnYmZ3EEJRpgBZZM4GeenYQqJDr4wgSF4GJ",
  "key15": "vXc5MsmNNKi6VLVDynwopi1iJU7CFGpkkiLw8LMWvxvPifiaNA21eR89SDSo9TaEz2HVrBncEZb9i8UNA2UaAf3",
  "key16": "3fVm4vSFSaRUhaGvByHcjC47iA8fs88RoeznMcZ8DKD8uxXBdsYaM1293RHvz9LHZF5AT61PwFnCrxJwPGmWtWQv",
  "key17": "2LkYfdztiBAYYS3RbHdvKZRPtHDQepAHY577NjvvEbdVfm9XToAwrtLJxb3dHtRMXe6SSGkM3kqnWA7Jfoai7ABV",
  "key18": "2UCGpkH8mM8msbFTi5G9JTNBp2n9Ez2MwfNCBE6ag73kRoqWqZ3NhGSAkFFsDiL5vQCpnapKzxjjrAoFf9RhaHS1",
  "key19": "2G4MWM3zUsDkVms2HikgW96o9hWMsE4AkbTRZHr2Sjitz74kPVyYLJZJkd4TeMwoKpjPPQBDuU9KYzLj1gpwQw2f",
  "key20": "5tmhT7At6ZqcSKChU5h4RQj8yeDhMkW2znhQuM7iNofqdSEcbDTdntWpGngxZAogFfMi2B4d32g2tRHrqwDneZuB",
  "key21": "5UwHHd1XYExp33oMAG166XQ1kw3DB2k2tQKGpw1yQaCy85TFuub7VHJV86zh829JAmJ8EVjJt9ShZEmzohNJXAys",
  "key22": "3h81u9rrpHjKC3kpSHs5U1wSL5YNoPgcPK94W12RDHzpSkBBkUHrRfQy6GoV9yGJKgYLDoodixaX56QeiyHQz9oy",
  "key23": "2BzCUQsJMQRnGAJ5mQHNHYvSPL8Nuv6VcKK5zoNoTtbpFWgDUaFJ7rBpVmvq8KwPD7sLE67iV1d3gaADS4acLxha",
  "key24": "2TAp5BZbqjALigcsaV6NDt8Q4utdxUztwWY71E8cSBHBNCkGxSUfKtUzt9RVeu1WpZNJkxaVNs4VNhuWyi3ouax",
  "key25": "4grwki85x5C3k9Aj9RCv7GVjmVbVp4qQXWLaPMfRibrMkVmFYzneSaBWegCsZjc4rZfMYubeBtLvWxwS17eyWXLw",
  "key26": "4ty98nBvDkCBM1shS9PHjPpCLicd2kqr8GriP8NoWGdQGRNwk5LqhUrrLH6ikCwM4yccxm47Kur5ssG5oieMfn8n",
  "key27": "5ugDyw7o2EdRwvrvfrAX7dproUF4s6u9mLg8g94oqMLmA4kTKtUVhvuqxuJ8fVaiGszWLV8tAQwwD6aRdFzEPSkD",
  "key28": "2KBVV55Xdy7zW3y9txSnERjaj8V6ZC2iCvyG1BDfTP7NXwsn56QX5ViDG7JuMoD7qCV5w2q6ajeLMbBQsqo6Xxbd",
  "key29": "29AW7Vqf896XHXujv5XmhRmsjavqqz8QeWQfbqjziJhwfZoyKLZi2QxaaQGByy6MRqvDFfJ8zbNWybpCDyqcDJpk",
  "key30": "kvB5tMDE8BwgEAcLiuaVfxhZgAJ3VaoMQBhx6TGdC7tnupRC1rtWY26EnyXcgFQJmP83yqTkjPapsEqDBX5eHZH",
  "key31": "2EPv415kCXUxEqd7DZw6KnG5kxutD9FeVwnRawB7aV7MhinNFUZYHgWz8v4xRn3PTM3NNr7P7QPz5KVg6iArQTM4",
  "key32": "55zhNdp9WCqM2qHzG6wVsQq2cLsHKz52z2jGo673q2U4Bb33XGSEHveJHK8EXXN4bBuc1SzrW7C6w7SExnCvCmLt",
  "key33": "4eFq1eaBZoddvSwL1ZzDvXpd8aoBPKTGnH95xC6KjrDGVBFxx5cjtM8CWNDx7A884jCqnQYZGD5hYE8MR2DyaA1n",
  "key34": "4CHxHEkRdeWL2HBrgMnTZZEPWPEPCrHnCrmbUrhBt7zBrGenEgG6x7rA875MH3wt8eAZp6wn2nXF9XH9xyPZ2sdH",
  "key35": "4JBqPgFRRqrzTPHY2kjeBEwQXzFXrnJWvhP5cofjysroE4zBVtzNRSnvDQjjfduosAe5H7r4GbxCaCJo17dZ56FK",
  "key36": "3PCCX7JH5MLmyaYt8VAYQLtJcx6thW3tyQPb4nr8vUK1mQiSaV2542ymUYXxrUrqoeVXzT99R6s2T2XAHfyxH8Vn",
  "key37": "tte5AUyc7sgq54ayx1VPtaYGdkqzbUcjynPqyBtJwompeiSvmuWQ6R1KBWANZJHkiLoaw7z1UeBmV9hNXCDDwav",
  "key38": "2bbAYhrFVUFDwyPg9CZfwjggd7JNPptM3bNPuRMWyxRzUhRPx12iDCZquhFVSPDAEvCF2j4NSwEHdPvZKhimyb9U",
  "key39": "5614JC5KinqE513xfAygXsJCUVADcHHQMo5UK7y1b3gXAw79ub2tL1iHxE5A8hevJGeXcnaAXXiXwQnUpCBxwVGE",
  "key40": "34uXYFLmVcvF2bokr7JTaTxTcYf33K5PjDSt5LKoM5NFMY7bGZbWKoTxu9qmpx58LAtWsPts8auBtm4YLdcjoG6J",
  "key41": "7Vg7npjtmzQR6C6DBv2kXmohmrYLHzcNeAeUA6UeSq6dd2w7BbfBdcBzCzYyGLpWLk2YhGK2G5AJNqDehUP3EGX",
  "key42": "3jr8n6SUiHkFmUSeQMkvk1MwGjsSLmGLaFRsJ11Y4kDYCxuFwTXrpWMmf3frix7SrUjqCkFzDS6c4Roy6d1FB3Xs",
  "key43": "63daYXdo8intdDHWVaNbgWfUyCGnj9WtsZhqYLUkZHHuHAibTzvqq13ZPReJJSwY5muTGvfCaojvCAie5M18u9HW",
  "key44": "3iB5REgYu4YDhkzkP1WteHJvqDbthunZLMXN9FKwsCrpu47Jk3BPzcFFBGdBddKCHDcvXwQunzAjhAoTgpSgSi8F",
  "key45": "5AzbvuitG9j5caZE9YdHZXKM1EhkqhgFR8HfxGDRUXMbRkVemT2fkL7Tffz92xoDdEPPUZmeJR4aNAt6kUiH6E49",
  "key46": "2dYRpQ5yvBjhhoRQy7izqtZxMbDMcx3VHUpb4zNR1YEe5xxN6L4b6W1i8WqEzCBohYAHc1nZLPZoHwWxobzU8YtH",
  "key47": "oEgEsC37xnrghJGofHx7PbodQdwX7eTePzpT2NDgwWKQrkwYmsGcsvuk8v1D158E6fdoXP5nteQAJDq76RCCs26",
  "key48": "4HohK2fqixdTwcCCbLkAVUHNERxeAFKzcNHJavsTiiAQBMExD3FcapBtP89JdBCCwbgeLuTWPPDpuJWToFrdnU3W"
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
