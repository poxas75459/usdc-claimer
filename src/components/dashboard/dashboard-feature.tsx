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
    "55pKBQXBhkB4YxtAxiJfxjfxx7xppMXfcyx9aMNieEbMryktyysrqh1JDtftZVF5NnSJ6DoPExXT1JGH1PFHTAF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VqceQqA68sc99jeHP5izsejm3aWGtDbQKGG13VvDiiCJZLzTuLVT4aXowRfPsfdHA1KHg2WZUyxx6okzuZTBSWC",
  "key1": "2NsZBpCG9kEZxGjQNSitp9aEvMD1CrTE21BPN8DQYeM7S6Z26cjoawk2Tkp5YeGbNvQfDQVwAfCCnzxygiWdRnM5",
  "key2": "4Xhv7yZ7VG1uR5EER3ZBZh5YUTJmhu5QvhmszCP3YF8ckGF5J5A5xcPp5XLPfXYSiVrwB76mW2ihdRpswtfpKSfS",
  "key3": "5vfGMXqJLWL9agZ5xhj14sJKniZ7D5PBdHcfMgsUJEt7618FYcXnz6cUwUhiTJJcKbonPeJ8116TPkbqSdKXux8o",
  "key4": "2jXSSaoous5mrse3ZDAPeL49YKCHYdfx14quYht8Phsh9ZEDYPirmXC8PG4qXjPYCDmmWfa9xw6kByZcxLzr4MXj",
  "key5": "4qAfEVwNQrzBA9HFzduFi9Ri9eHP85tmsfucDeDfmaG2JShWXB5Kb2moGwEXCrq4TU7Pi86gzXPbT17BKxmapdPX",
  "key6": "SxjnGK6JxctNnedb1d5ZtY8qLy8JcAMLGkU72Rc37x9ebp91zcmkpE8RJQXwaFuL1c9ngi3xHhxC1sD265jZ55K",
  "key7": "32wsdzW7uSkXKtMkanC9Y8SJHV65em8Cjp6r2dtBGwYNizkvzcDXHCSz3dCEbHdq5SUZ1eb7Mg19eksmrGfeojfT",
  "key8": "3VdogdJa3Ka3s4CHmpb4xCQkePnvEMXXdRb6RfQTemqtxM1BKoBgKEda46hPdMN4gpCXUigyCQ7wgxxXfSgvFtX",
  "key9": "3sqfbwSdm1reZdnUBYo2Fhdsr7LZFPLYKkLepf6vP9Dxkm9Rv78ttpGLS8YY7FCRJSdKEUZd6p78ahzrPRcgdd4k",
  "key10": "dCgj6ba2j4VyCKyaQ2tNJA8dxUUKE8kTbrhZF24hnhyXFdqv41MopyDqYw6dLf7MrdZF689NhJVyMxfV2qFhoad",
  "key11": "4ZnQNsAjn3aYhtokZzGZjbzCkwNs4SRegartxet4doeuH5iP5W44ZpqZBjh8xUrK2aiFJ9LsXvcRUDNsLBUeaDAz",
  "key12": "36WFjn1CXc29tDtiAGrfUktyxeQK9wNHEfvLGyN86AUK6K9GjguASPp2FsshMmtqRzMGieDPopXSwum4CerfX33d",
  "key13": "rNzKwpRDYuGhFPBjjjL9Vj4kCZMg26hXceFLTME3SmTexpyoW8UmEJVpYCHiwMg6G8tJXK1H7wVe6Cgi31T4fZg",
  "key14": "5nnmqXiSjCGbnRHG4P1B7LZFS1T1w3sw1HRQx2kuwtJ88fJF2BF8ETjqUjsT6cHBRB7WbmhUpHBXXRAaCJXtfqPU",
  "key15": "3aMVRAhzTwHV3DxR7FvGZyj5mJcivRym86qkjfyx4XmmaZMhXoqikXzYJPnsLnBUnTp7wSTUX6VHhproM1tbBTRD",
  "key16": "54hctJmArjK6yp8FupbTXNmsio33KREKaTqGPEHBs5xgPGrQgBDqGTpPzuJLjV2pVutQVuiMYDcHZWdFqV76kqfu",
  "key17": "3kSzGZFXqYR6Fquo5a48BLMoPPJQLmkncqbYcLD8dzogLSk1orBKxNVejvwinh134eLVtoWYAGgdWP4K2VwzwKoL",
  "key18": "3gyiUi7WabzF7RcwiUPd4v5SHM6tUqk3DAhY3hGYAd6oVaucYthj5PBU2ymN8w8XWSMgzTbbxGbFr7PNHYd39mJ2",
  "key19": "2Dg1TKoEzDK3QEWQNC1QpEvi7AskArMfRfnLxNmnPG3BW2X7eYpXNwuF6FQ8ZpbgApnRkfGaootpN7e7uZU4vkSB",
  "key20": "5Pv5ADvCF2adGLdUMm61q1RZWy1BpnVdv2ZzPniDfRmhyxoBZVYxUraaHLpn3PJmmJxnPnMibRVT9n8DfzYymvtr",
  "key21": "5tz34km2n5qN3aYkb6mJ2vgrA3tPH7p1cW4ik1XCct7ccnRbresgFXopXUJyVtvKK5DjG3KyE5Qzzm5G8jQLmQbn",
  "key22": "49KYgThcm3z6u6qZUsnhJhT17CeD8CcYGT5CVRWYCvyGEX1BT99XGiSwLmMhhBSFcEmEqKUvyHEcDyth2xzHEFDG",
  "key23": "4F2Rk27H56WvxqxSku8hvcohpFQ91D5ygwF66Q77hnWKvAU8Mid6WgHS2tPDWxWpaTKk4ToMh8PqkxRmrjGPQtNv",
  "key24": "VcsYP5ZDJMu7C6UBxdLcg66YYAw5jGy1JC77ygquNihXWi1fiZe4EJcRMbRiX8pjDXopxpkyjKu8MEzryWHLgyU",
  "key25": "4PZnnZTTGxxGCqAreGcKYKvPXYxTEkYSj1ZNj3JxB29Ka4APw5K97BZdfGTtsRjuY668RHabEoFvgWRBcvBuJBs2",
  "key26": "4pUB3fACWHXLkxunsUiLQuMaQBBTYtNPWFEiQiSwodR75WaEf4Xyb9AtoaD9zpFQyJoezhohHBjLJj3ucsoTcaaU",
  "key27": "3eHZNt6Lh4WK71zdRrifVde6JNLvnRSpprLBdGRVQ5RALeguZCRFCoAWZSExtwR9safiB2LkCPZNUCX2Q3YGMNy8",
  "key28": "4QHiKTy7w2oCUAsQK3yCcfnvEdPgbQxdRUmAPVHig8kogn3kQFZfLCFgPSEY74tZmkNbF2iWPErTzGVcGQrbTZkK",
  "key29": "43DNfTrbyh9awMybCaC5UweQxbz3iabYzVZuPt3xTuu4QpzPwdvZY4LgLTpUggK8WaFh668wADYff5Y4mgpksmyp",
  "key30": "43n7MmVYQphC7iNB5XR5i2AwjExfGHoLzH6qTH4WGC7R6FhsjjqK97Y7XSbvLMEimHnXKpJbBL95sKf5cpKP3PQQ",
  "key31": "dYkW1ZX5QQ2c3DePE3jqUUh3j4DaeDE28HP6re4UFrE2eqMWKTrdotk4cqRbfRQVHZjJ9JJa36gZ6XUpQeECZQC",
  "key32": "3CzwkmEduud1gUW87XZL1HXXRT5sGtncFAXdpRQMygupCzkKc8Vc1eHApYXyBuCRgfiU2vaGPgmpvoETRgjVx4y2",
  "key33": "2FhNgsqJhttHQACHjzD7ApRt9hKcVVgJkiMR2fMcnYTSqq1oGUgt6dqEVEwaapvQoUwoU9yCkPCiSrHzmxiKZkW",
  "key34": "2tuYH9pjdU6WKJnob1mi9KyjvVekXVTksTAUG3fUnQd2Nw2CpssazoFmu2f4VdKHQqPUvW43VHTjboub1fsVqkG3",
  "key35": "32bNGJYKkk9XnWWwiLcRKAEUPvXBQe5cEBjHCYcmTz1gxvX15hk2H7qjoMZYVHFgWLmDbafTcdikxHoeBDGcJSho",
  "key36": "5raajCMrVtgq3DdESczT3aPsQEnQuuFtkazrvfkbnuZM9V1U6KVUtYJV4bib319keRJjXiRkcP6smERNAJVqAAJB",
  "key37": "fCPrRMVRTsycPyogEdWyHhxXTjtMSyGN1w25oaa1nHowYFjDgrnDyF9CSrpKVbVECeSY4pYQv2pMZhzs6uy2X8C",
  "key38": "2AUSRKJK6RiXnD2ypgUHfi72zxqXuBoHsmQK4BuyNzwXBXeie27dEj4enXKKBbtcdT9RLFYWuWW7jGtT54owKBQm",
  "key39": "3D9Q3y5Jqf5TK2QU4TM2zZZERvheqvkFYnWL7truANm4pEPmSfyMroMa8x4S2AL36LYjQR6p4YXWocyjURy2sk6c",
  "key40": "4G2LZ1ejFS5z7YMCxfWrVK1YVv61rxMxspKKoU6ytEj671unzw1DFCiWHeivbUW93bPYZ4ZfMZgPEMsawbgW8MZm",
  "key41": "2AMQvhg91Zo6pdYrpC7x1pfkQxPXdysqy95ZQ4ByuLDvyBqSYuZPGMdtdZvnRNSTH9jC76ULW9vEmEcc1WpnJJUz",
  "key42": "4C2rpJjgSWE6n3H2brGf6iVM7Kq7KEe1LFZjtikfrXoj63Uu463g1bLHpHYfYHtF5pd9bM5UvmRfhfKoe9ay1tF9",
  "key43": "2ur5oajnNAdArSQFhhxBcrbP2vHKbDH85ZrQtWKQPV4b4Ej4sXM4RaBnq75sprJLePnoSJy4zXYJgQnPahYEvyxP",
  "key44": "3F5o1yGMuJKmppvrCxXGmrtYSgZD3J8aNCDvPtUiAk9WBs2c3fY9d5bSRJPku63zs95W4w4eqd2nrMNYivFMjjZg",
  "key45": "5p8gZyaNjyXHin1xodrfwBaHjYQQgdo9t6yuHwUkRFqCQBmHtxeG49xmJwxn9t89oZGfyhtJ9AFfaP3pdtSEVSYt",
  "key46": "2MykXnhK2sd5icKKpNbRcTckBoiNH9ps82mNS7WqD4QRLhfrMMJShdYFgCor3bdVCM2TeF4j5MSUefQyTt7WHFwm",
  "key47": "4PB9UkrKj4QQcsb4FjE6E6CBTT7KDLbCRaSrtoN3kV81AaYVKuAyALNgiMHPhEQMENiV8CXFF5xmgoPXVV1cdygV",
  "key48": "4BRCcZrm3vK7SRUBzwQQWAsQJpAfZ7g7GonAcqd4nctBeNUQFwfvqx6DJttFgYvyJmzBJGyhNpmkDD7wQvWKXqj1"
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
