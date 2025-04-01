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
    "3qjgA9jdWzP4gxmKdfSq1hKk55NkJj87X2kB5fYmAtL8U1Z7Y8WiV4qo5meEXui6meJ2xZyHnHywhgnDw1aKJUyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gqyFh7gpAFFLRCXLhxLGBKeWGhMRNNMVZfFGBbQFch8Nh4HUTWznWLNferva2kWWRJ1raqtXdkSudMd43fbbKQm",
  "key1": "y5qGfe5VQwitdQ1wDwCWYr2yN7hF9cDrput8Wg8UR9ZCHAxkyeU5KaF11fVa2U2xEsvSxNvygALCz4uX9SPDbmE",
  "key2": "3s2JFCHrtVTRX7r6uVy2r2wTrgS91jsMgLajYzD44azJAU6YJmFmZ2FPyT2QWYNCUH4BkdTSmnASRnKnhFM71qYL",
  "key3": "3NkcewXQmibAsD7SSYs3GJQB9UN1bGucFKsupAofRA3phTS9kWrqw2FjAzp44MvJqe5ZpYtAmgikJNfZeVxCA6ke",
  "key4": "ZR2XCidMuK1qKktMZ9r4MQNuTwv6XMqa99ZYzX1Dx4ZwKMvenNSAbFB8z5sbt4bKWCGZyq8Sa1HuCMQjKTvcugi",
  "key5": "4eiE7jTEzUPESRhw4xtZPC2hwkXUW7eoky2MCfJzpmbj7xdKdFPsdW8J3ro78vRvjsdAsK9mYXSjSKCwQJ8nDMx",
  "key6": "2zPTSriQKagjF1p4xbfrrijqy3kzRLy6UonkGbJfA7UDvFo8MD1BHXZiziaFmk1jbLVp88CGXZHDbmCiXuETJHiz",
  "key7": "3esGm8d4AfgE8KsMtjxm1AzdAmQabJRsMwvXHJRLzyCaVyGrJ4btEkwCuD2JqZ5Yeu4Y5ZBmHmKVY4hxhKVTKkTZ",
  "key8": "52NY5AsvKWEhpHjQMoZehioz59hvjtf1RM1pf9rqEGXd9BfyZa9um6yANH4ntjjLT54rNsxgDMArWTtVXmNUYs6S",
  "key9": "EM5Gx1gxU54fW9qmqeQ2S2qkgsooet3Mxadk48bpu4sguoGmiU5j8odrq6eRTn2PJjBZLzhmCGTAyd1aRzk6svn",
  "key10": "5rwKGtLWuUmDqD3HZdvznYpL7ktoTeHgKcNaEx1p4HuxonktBvKbgF7uMkdsWXFVdjdoKGhenRd4GRDJi87a8haR",
  "key11": "5sMdyppR5rM29KnQNesSiLndYs11jKqbxCmF4s7oGDribnNkXXtddS69cmZ4MXPX6EDwFcntJj8RK7MDKLeUknkv",
  "key12": "T6LFqY2mUdmFHiDZMMXq8mfakPe92No1AqesyCpAhBmBhrFpG7yS7HGFzcLe7VkQf1RNd565FoLaShMbJPR4soN",
  "key13": "65jzacH463Raah33NvmgZzGhoUa6QB2NNZ7YdspV7XpVu6dfrVeFfZBbw3cV7a8NgHN2pazzEMtBt6yikUNUUo4R",
  "key14": "3kzVyF4FoNqVhRmVEjp7xjvYg994Ybk18k1zoPyESuLviT4mEfRA1q1WSKuTzUfW4ELC51uhpcLWDuVxzARnR2Qe",
  "key15": "2ZyAP1HWcwuxJP5Uw7hDWtNzBUopbZiFTMrGT4xo2TuhFdhKXAYrtQ89sCP4ijDWNpfaTJLvVR9bjL4yGXnZ6H1A",
  "key16": "3zkuPAKC4ohpmkAX4ivZKrXh7b8D7tfCNH1L3DDjiE6zeSXs36HCkinvC2HzVh4DBeXZz2zSLnyVMRqkNJGFCe47",
  "key17": "5Vgg6r9JcvkffjPtVzXFz65DobEP2L9h3j6eo2detomzh9Anou2BtkJNfSLHLQDkkWygUFMKqYboCkvpYrjmYxVR",
  "key18": "3ZYt1XhMYxZzTAMQx92EbUosjn5hvvfaigFE2eS92spY66pbaV1EZvzttYdG2E9ETU6qH9xzP3pdSdREXdJNN9BB",
  "key19": "4tRS2TbkwNmNFHMyr2MYw6FHygAKLqMwbZQ11qZXxiBsq9sgWEW5Nx5H8wnwsWP7Ck6zDYN6s8ZpLDcBMiX3cLWo",
  "key20": "4SgTPBL2HwZTBKScCaX8MBtdfP9ZLrQWYooJS5eGWgwcxK7SASaMyQjX32T1RdXCFAgFfnhu7Joy1JTPeSRpR6ou",
  "key21": "4YoQ7UYDj9wzkZhAYXMqPi6ytLknARndDLKfRsBrrRBbaqrKxzr2FvaDAibGsP4nvk83rVgZMT7doq63bwxykL35",
  "key22": "3Fxyhp1obbfr5kyVAmm5vNUJ4zdtNEUSeT3VTNzLsxdSn2uqHkp9WiWQMsvzNoSF64FgbHKzZHeWNKGKLLXR1EEU",
  "key23": "2U3zUuspANeSke8jHCLLim5fK6H48MbM9jppNjH1Qz9F6YSk1vhFn8oLyxfTJkvj9FKBUz5cgPJL4XBDhjy1eECH",
  "key24": "3Z1NYU39yFmLPncVLtZHm7n2Lhc3VJGcT218UqsaRoFQZLCjJzsHjYt6PGzthkWHmMAohMSewWrLt6A62mZPc8Pr",
  "key25": "2MWe6Xcpt6zM6dEkZHouBDdQR1PRMcXBQYVxVRLUKzoMQX3gfF2iRUx3ef3sfB5djZk742b4XWqjoj6Y2e8JDsX1",
  "key26": "2ZcZvYHUoSSyuF7JCUGydhWWZJ7rkfVemthEePjx72ktNKUhk94kC7fGyqt79cXBwNfeEWcKeUqaBTcjvFn9qFkW",
  "key27": "34aTJNqpxg1S4G6USsu2Gd3xvazNhZrGEGtYh3AdeGj49jzdvXVFpYDLjhkZ9zZ9DxikpVABjjWfTmQJkWaBBHcU",
  "key28": "4FLaj3nq84tFheas2Jfqihf9MnpmM9gTxBkLUb7kDffc4eZNJbUKzc7b4ATnjGgaCKkiij5S2bexhRP5DpVzuKFN",
  "key29": "5cHRaPwtEw6kBG2kqGCUpcDwMQrzdPG4ssQVFs5wCtM3bcfAF74VJmAWj7YmzmW5EFbtQ5TKHL9U3iN3uWoZ5hZs",
  "key30": "44S5fmasuCadKTBUULUNM2sToKGhFYF29GiHuL3z3WrHgitAELdcs87PfVBhe7aR59w8ea7Zj7eVK8mJxw3nPVQj",
  "key31": "X4RbckYRAcEK7Pmb4k2Y7fo1uEyM2NU6vXbjkfqVYcgB1FWb1psghAHPYTb3N4nxekw165p2xXaup6VqFuGZB9g",
  "key32": "5piVTpWQa4m22HgxDpx4qYTKbSdHcjPrpjRhrYAysX7xUPMRcHXgS8hY3K4ZishcfJPVyBmMgVuMo5YWRKZuraRM",
  "key33": "3kjWAtSySh9CeyECVXy6GYsJCRUNiTmjkC29YjqgbhGq5hJkm6sfqvX2qwHkxwMomgPjgdJeAMPWuf9dQoNsnBrC",
  "key34": "45jMDeymyUmurv4EWGBxHUgWmwyDB97i5q4L1NFHZZUG8nHghUBaz1i4FvHXjM3zUvdCPDhBzn3nJawHGw1bTTRR",
  "key35": "52CqtmrdLW2dmfeycXngZ9QV76HC2Q9NTYE34tydeqtKvnyFgF9VBBy3RDUCRu6gUwVcMnyHkUi1vhwBU7vo2FNA",
  "key36": "3T9CAtkEwiAr1opCKZr4Sv6fqJ7PprHTddA3LqbumbdbnPVVHBgm5tELvc3aHByYxmjgTaGWR2KXXeBwf3maWb81",
  "key37": "3katPWd2RCwb54BsPKLjQM4EmXUepHNx4r9G4gShCZ6HwXQQTW3dQZrsh34dXujGq12nsofaDnioig584vshsRCP",
  "key38": "4jh5TzujUk5DxUeooPZsMjUWXe4cMvRoaZqgsmZ1utR6PdEHkQJvH7aAawwcAaMf1kzxXMRoQXMw46djypD1EBdE",
  "key39": "Zirn7SkxQ3j1EeMZBgGpM8z8XqsBqH7uY5Gxpk7uao4x51BgvT9mwps3btny2RKkuPfjQfp7mX1AxK1F9yiRBJ1",
  "key40": "RidR1HwGUKXvWe9tB6vj3qaHTPsBv774uQD4WGqvpdemKe7w1f5qxKCVt2bWXfqss9iHd4Rm1qdNSRgDqemH89D",
  "key41": "5NXtQAQYRNjyahzSPxfHmbB83m2asrKS6mMvMjtxxMxvXUeWhw71gRfpXknz7upAPKix33PkVFhJqbyHbJGraS15",
  "key42": "56HkTtExpqTc6HosFwUWbmucMaqiwSxMzHNMyLkEMCTzygto8yLQVxuJrhY3csg3E7xakyeyrfcK8mivTYF5hacr",
  "key43": "36qgqWLkRg2EkYg7rD17FcRhANFtdevRV5su8x2bW8cmNmgohdWevWoWSzETdzmcSUvWwJUjChCKqWRsNhNMHxih",
  "key44": "2vbsxxVVq8QzCMwjD1CHsp5Rp9NkdLpTwBcPW2PTAVNTC4hNqB9N5uAnawejfrxpXiVbQ3HLFSzhg9HSZvKETYaK",
  "key45": "2tkBnrLU2uH6BXjdLYRRKQ1FHQ66BwiMVJuH9zufyvkobcjm5F5Lk2Cr2uUGPbW8qhh4vnReN7fFxdVDtuoYUTkf"
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
