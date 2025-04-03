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
    "2js59c1ZPX1SmGxanF6topFCwFVGTWeZjQscDNuiTBGoG83HdG8ecCqgqfZ4iKFZBTSMifxwoYkeGvHdeN5Y765Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e4rtsMq6epyJsuf63Br2NYXvxc5pfTGgzfaDitkNhJvHcvtCrZvfsARq4xyyuZw1A3ZXgPcC4NsJRwry6uPrq6p",
  "key1": "BWghy3gi8cvAUJuRXT3zn7FFYh8TPGQ6FbB1D3JvucLWaUME455YWckHbzbvUZGPvreBni4PPFs4cYVWUwurgL7",
  "key2": "4TZDsXqSYWuxPWQwzdDf91NMSTq4rcpT5QsFYvftWrsN6xnBV8FbtS36jEEPquBdity5RkByaXuroSZvAYc7UYqE",
  "key3": "5XKgztueZ4y6P1kKpwMnemeRpUFt5Cr8i7x27Fx8CV5689vSBix6gDoNV8vGaks5esBFLWJ6JQZxR2vf65NVreQ5",
  "key4": "26WQPiWYszXcXYeGvrSdWmrBa148L1GAyyBLY4rQGikzZApp9ZXbVv67dHbVbbDJc9L1ukA9YH3GmWC39aZEd9Bn",
  "key5": "5nfhpFCKeykbdRJwyamVRywiW41LxnbRWvg7YrD4uFnrjsEYNTx9sAUpW6F5tcv35mqwnTYPF5rsFRTJwGEQc9ru",
  "key6": "4Bg8299twJT9WV6iyXWMiRJ2s7G6nBqkdNVLzKAWcub32RpcrSBZPw6vFCYWo6WHYzVXZo3FTASn2EnE6Xa7yeuK",
  "key7": "4XXmNuE759A5PoYygArjjVyfuG5Ewah7T4CGgsUFqrYvtGtiF1iFsFF8PBK6jxoZDpgqmsq7DYtaZtY9FuGM5ZDY",
  "key8": "2Ns3GvL8H47ZY6GDif5CWhbUv9xTkDG92jVEYbdkF9fa1iJiz6g32LyU8n58sFwm3WguWno9PQ1gsumnGtvo7jb9",
  "key9": "5B6o66EmwfLo9gC6iz9tr8xKcnsELMsHL4Bu5ZCmfLhHZJNvvHGUqFSLwR6Fx1yXPunspzdwgW8vjr3StbsRR3KW",
  "key10": "5H4KvsGfDNyoyvxdfK4yygU8MtSgmVGaC9karPfzESmGidFstp2QX89H1afbCKUrzgxFMKENJCsQL2btDcu4RwLb",
  "key11": "NoLGxvnxdubQwKehEE33cbaqqYKY1BYsw4wg4BMJ2EQRyNqYtMwJbQwBch62JT8c1cQpPEDy3zuXVVA1kY2jkFr",
  "key12": "3NVyTZ61TjNVR5Ahm6C7jtiBHh4c9XdQcqPqFh6xBBGv8xy9JgbiPms3BnbKYoUxRmT9J9Mnbrab6Cww5aJftsc5",
  "key13": "4nbWmMWnbSoudmhSbCc7iFbg3DBL5geDxZyHa13W7XfBbjQAkj5rDn1VJxzm8f76yHW4dwvKpuXUz7DWE8P5wmNM",
  "key14": "4nJxFxMfX3GbRGvtyQ2J97VzgCD1JHuLYcpWAF3SZ5HqUWsbRZ8Pqy3kD1oVJ8Pr2STtD612wxxoyGQ2yxaxevN5",
  "key15": "28sNB6fqtCwie9yzDusx8BqEtf4UfmEAjPPkM6ztkQ92WGbdUCAea6vMLMRDcWTm1j8fRkTTPXQ4XGgjtubqPPf7",
  "key16": "2VEDW9LBKhptAtjEH8xUR9SYvMAR3W7NtVYvKRx4M4n4YCnhEAwF8ymvvoLTgBAMHm5EK9yjBMKp2ZSwSuxpz5WP",
  "key17": "3DKvJegyy2A4TzPD2ST5j4npg6cSMqtedqdPtmSRyqBJNjtV6UXPpQxkDP8tex45z87Na8XgcMUjLpi1FnvXCsvU",
  "key18": "5t96VgRD4XT76AErWB2y1MJou6Z69XmwHuJMjyAKgLkQ7dhsQAnVpAY7dhWzYeuFyyMp7VCkccENDjAWmSjeE6N8",
  "key19": "4SJDpvt68yEkswGhwWzWFGbSWjMFpga8DkFvCGmaffQjFXjKJQFLPGxes8fSpLU5D69Mxw7VKr6S6SJMpwjc92no",
  "key20": "3TY7HVQt72TSH35beoBbw8ATr9swULieTyFvmzB4Ujr6y1RAs7JGQLDLRHVvdU8eQge6yPq8r1GcjjKvCLDuwMja",
  "key21": "YoMmdfYV5C1DSdFdPLc1PA7goFoT1yJF4QGxokVxkPEjCNvUjx1Zgjc5xGRKAAEjBzv2JoeW8SGM8eigeVZnukh",
  "key22": "4Q1e7o8MSVnG1W7KqU4nj1PxHh4dRRSCVKQVTWrZQouhWQe56oZWs25CCHXDe36PXjpyA4piYEcHV2niBT25C9Me",
  "key23": "4aPgZSQiufjtEt7DEJtBPGNpqEEoHAK5ZbCNc3qQcExVANS6woVoxZqJqS514jcH7NHhGy7SKcpuowTp8gMowbtt",
  "key24": "58jUunSqHatpTsEYFsJZ51kFkfMnr1dp9V7pPXzWaEGZ6Hx725QgnRqFwazej7Xek3Jbqk5SBzNx6NN6EiP2S6Aj",
  "key25": "5dfXSMpHCgs96dgQ1qVuu46ysAzgV3V67YqB3FHsjr9su9DN5o86q17gmitnyS1jJiHME8SkCf57A2BreQHVBb3M",
  "key26": "4nm3YWejs8X5EbZ36vV9uDnhnNNx38oZxsM8t7MyEjwC9UkxXrXDc7i9wABSRF3Y8Z1vG4JCfaNaK565p4NSTZBY",
  "key27": "bfc6aatAi9jog4vBPM95LH9Y4nsgbFYQseHm99PJquqbRi1NNNWoaYppy2y3V5KJJBKni3pWt7P39wX7fySzJxq",
  "key28": "5VDdxokWmxkBtcUgQtK86o1KYea2oBDrrJkBvjzTZmwWXWs9fhUrJvfUxema5NXgGZxGXvMafw6Xz5GdWvpyuvQ9",
  "key29": "5afPhqb1vbEv33HvFpWj2K28H4UFNg4HZ6jhqP7LRFyit8QuL8zuNMpJn76bqhMc8b9UUTwkWYTuYiAcJfoMgfYW",
  "key30": "9JzkAa6huLrCdZmu3oVRjGWstoWAyWwYuPcZZbvE3EECZWYG3boDbhU1MYbF665A4rfqPQNXmZ85Gtarc2y419s",
  "key31": "2JxvhB4oCZjrDd4NozWEeRFsF86bcJ5Y8zgLSGioudkuH97SnMuz48jt32E3PgvDyGd9uovF9ZHRHmJDTwnmdPRE",
  "key32": "2cNvGmjCUD6pvuYVBbTWXtpkyFJFeCtrhgUWvieSLMPyuR8FKYHzBB8cw6VfyLdXLv4vnNJN24XE8GnrrarLwKUu",
  "key33": "2AgiFmTfr9cpGN2F98CUFcHaa3jF3EwmwcybUdbVuxrPMnY4gxYRjBPqfpA7Q1ajJnLiXjLqdfvjJ6vP7TnzgVGv",
  "key34": "5rLD2F6QqH4HL82uXqDmKpqnjFJ6t9Y5wm2nXi7yNALN7rbc1SMJvMoE5tXDUYtqCSXgmw63n42LE8qr9yAnFEQf",
  "key35": "5wzg2EdU7ZaDjsNUmCJDENvExCQkhgkNbW6nd2M3icpoX6VyATtQDRjnRbmSoEMdtEUbbyNMZcpExcy8T16ERLkr",
  "key36": "m2CC9paGDuX31wCaJeSnVTdccm7qY5ZC4wAXtdvERFbsrc1rnbRKeiYiuVqUyGRcHdpAKdzp2GZ3kn19YkjVgKR",
  "key37": "21XY2RNFki7JEqFJsWMdb7EkSaWqgC1QvWuci5Bk3ZGLBST9YjwE7v1ivQToX4r4Nn5c6P4aspvtGPunY97uBxNb",
  "key38": "2PUgBbzvnMtcqy8KrNqVmZnQaohmd3gtft15LLdfqZeoyftNjcvpUKYFoLAPBikxuAMMNCTG8knEmR52GjjprSi7",
  "key39": "3ENZ6tsKXN3GgL9xiCTJoqyDFmVn1kVxqxXCkymdL63sEEHwtKmpE6GPU2QAnHWa24qZ4wzYpw1cm3bMAx987P8R",
  "key40": "2PAQdDs4kvwMDqj1FejK2miNPr3sLd7ebKp7JM5UEDZGDbZ4ViL4CeuZjKGhYGk2szjS5GMxbR2h2tHDnESo3ggP",
  "key41": "61bxQbsq3ywPoAW4S79qSXYTmvQGQPcQv76CCGBmx1tqyhenaD4N29jpV8t3t5hTEdVHx19PBGRggkhSiP2A8rY5",
  "key42": "4ELWxNp8c9jDBSji5XXyHGRWrnkVY6ggJ5nQKe6yWxJmcqPxTgDKgmHrpMsNQ8KrZj8TL2nRVwfe5LSPFKuF2GaG",
  "key43": "ZScf5MTzuccrusL13rNNy8b3xonKB5JnQNReGdR6xayD6qau3uy4DXG3o6z5enSrGwazNrraDQ1u1Mm6VZwWXnB",
  "key44": "4s8MDWcwETtbnkGq9yRScsva4xLFZvptgv6K8sQiBi6mx9RsSX6ytELhFK2JxaLZw9BVyK2aYH3qiuyu2vK3eAy1",
  "key45": "neMp8kCS9Ni59Vop41DywtWHaXvbYnSDabKMw38ypUguypmCiKp4hbWeKyCc47QXEZPW5GwETFydCYqxMruye38",
  "key46": "4G2ctmAnNjadDVCfpN2zKcz3pUHoN8QbbgjNmQDKfWQHrS89AKXA8YXy2i2GH6SyYDw3SyJ1aLPym5152KUMvvCV"
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
