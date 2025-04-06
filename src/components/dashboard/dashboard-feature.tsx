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
    "5Yu3XBQbnabw786SEXq4rvHyqgQ1CVNb6xrrqXx9WZxg7sTV5prKxwDmRDkiv7k7dHD71gfCwGe3FKB64KydQasG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Af61dw6jbtQ1hEiExzf5MdMWHfGg8KWsMiEAV4pemhATPqXhPpkpmtbsSRrW85JQy5sasBnuF8fQZK4kUeZVEyD",
  "key1": "2YK6s7xE1RoX3Ty5aYpvWDq5XVFnpdHCsgW4pQ6xt9Lnas315sm7AA4AEvRj8Dio47wjQWsoujtiDrjX4vo5PL4t",
  "key2": "3CDkkyyy8S2b6BbGUw5MHVmZDaG1i6yhBUJA5JAHgJwfpVajzQiEv5qsyZ6dnmyYRBK7N1rXJ1gJRFEbob2kQJXY",
  "key3": "2DVmf9TQA6A4ecbRx2QHfxnxbjoxpDmRBvLpBqpg1qQBWpM3iC8Un2F6fZpH1UN8WXiC2zjfpP4NKuRDP8Kxr43z",
  "key4": "4QPpTcYD7cn2yU8CA9WB76acUzxmBe5nHZ6tbvKk8GRTmrQAp92orduBnzocQyYEwE7XMVMbh9YeePvCmWW9Yi2F",
  "key5": "2RaHauzTEU1GXGPE3YjDRhtkPVmUs61TtQoX5oCjwdyH4EDJNuwvopVSd5TXUWuyEFhXDH1ScNE88EDwRZhQteZ6",
  "key6": "5SCxhFywRhoMYevFaCZX92hZKXn8tGAfYK6JjtGVk2TpjttxEqdRLBgBpaMgLJBvjvq9GMnhG5AJiBRZz97g39Sb",
  "key7": "2ZtNk6ZAA5Xr1ffSBkWRWxakWXTY53He3tJDk8ytYm6J4e7kvvN3vkXvxzYoMqHGGQDabVngVAFPtr3JbTamomA4",
  "key8": "32Hi4RLU9CR5v9nziJURwKeDziNDybhNKvVrMaALCPi29a4xHPUHBogMiVzrqdfNq2Bee2rwd1zh2V2bMUgZWRAG",
  "key9": "4rXDhynYz2VSaJTrspihBsNBm6MD5XiF4HdNpbJpx2p8H7C5fWEkyFr83qUyauivXDjJWFuXV1rjyFNfNFWsXUPq",
  "key10": "4gxGfnetonesc4frzf4tnKGhmvi7dW4Mkg1FGajH69aezEBj2u6aeqjRAxdXpxH32FkJJw3DYkTcYNtTVbEZygBz",
  "key11": "3QzRqYiTfmPY4JDZ6tLPXtM4GF6mofWUcoes6b7oRGgFzpAFmsnE1RMzjqzkzij4ezfksDRocFeqW5QusWgzXLCr",
  "key12": "2sYRmQT5tkDAZqwmqK46Pwdqta28zTpapsaBBsim42vaoE9yT22Ta6nQEpfhxGimiXG1WEvhG7Vqfrzu7y8Nr1X4",
  "key13": "ef5wN7BGFRYd5p6d5cUGxnKSyfb66p31PA2cUKykAvLnmrihC1rqoSHTqWueZAiVh1NmL9j448YRqXXqTE1m1rk",
  "key14": "2FpEbjHujDLMp3RrEXxMxSwLeS18TnBYDZgkQVnQKebWvPqpFfkDyNgpAGVnwEyxwQc4dUYCeCEuzz4pjzZgi7aC",
  "key15": "4zcTRG5Nm8Fk9aNAy82RT19Dy12tWeKn5g17qFKTpkSxamRCi2DokNHDoGbU4jimYtjuCs1CVEaeJixaD9hu2S7",
  "key16": "5hkhnWLfzjCpQkMD9GptGpS5ugSy7YByoAtLauFLAPQiuB9ifwmzhHD7gdHYBtE6Yt8q9CBqRZnV9SGeo3rWe6iZ",
  "key17": "3JdeF71LEaH89JfSpponQ228SWfytMkfGLRkeer73cbDLHx69HW5mca9RG1MTKQL4qMzCYmwkacCVKsbUCi7nM8X",
  "key18": "4hFLFEDCegD3sQJb1qJ19wMdZszWaU2dSBMLi1c2ihbmMwUTa1tytr5Qtw4x2co1a4THZt8dNvBYVPs7ZQmGz3dc",
  "key19": "4TDLk3J27NhCzhs1pEx2pQbp1trUUAs2HWsV1ox6cunbjJxmaPiJbvLbvAPybiK6xRFQxpjTtQ1SPF92YKs87Zq2",
  "key20": "32JKfhwNAmPMyjNUUirpzaM2FN3guLTq6NnvZvxo8EmmCy12rT36cT2hSxcfPDW3cxra8FtMDmd727zLN7hkzB2W",
  "key21": "4YLpQs6ZTNJrmfvRJZr96PZELxfN7cEmDVmRBiHRDLpyKo8zyULNpg8HUmufJAPEjXsj1WAQTPmwmzp3ziSjTuAE",
  "key22": "2vKiRwMmd9ySGfgSPXCnScgNhjg1qb3jWhjDTmmRAKaFSHdFKsCyh3S462nu2AEhKbWmUtdFdaoRTZQ6sdzSruVg",
  "key23": "2hCvnWx2urwpmFNC5SrjQs5CgiFkiqPtbp3bQD9rMXUZ7t2Sv9J9efNyisBdEKnKyK2jFAGKKnfR3dzwgXz8PLF5",
  "key24": "5s7XmX73nowg83rWABq6AiShKA3TAtD8kK7eDc7KfGSTFvmSFXoSWdpGy7ypgkJC4XnhctT7x6jpWotsurwqhpvq",
  "key25": "3SCZEcR8b3nofp949kuPc11VECN3BiQd9kW1pum2nzWha3HG2keF9Jj2Gfh6vXXw3tzdPNVJDxLhuh9prTJB3cBn",
  "key26": "5GWqRa9SNb4ZMXRuX1NkyFboSpCG4nv24nD8WwMLgGDbRPk3RZDBx1Ziqt1f79ddBNKLauRbKCNbqgFUQWw9Vm6a",
  "key27": "57zz6pDCmsJBJbAGJkLqGVFzDmZNn2kw1XQprALfohHqov2fEVyyV2hMozpvZscB4v9jHkn4Tr9od8jhZrTyLt6z",
  "key28": "5EhByE2EjYAxcs9S7xSwRBru2RwgVfjcXVLvZTQEFmeSwSUNQcmEi2akigN7HuPPduSAmGYt2vJSmR4dsPwydBtZ",
  "key29": "5gRCjRE8QV3HhKJrVcCY4bNWgYqJSEgg2VVxuKYy3eu3hZxpjmJKk6uszoS5YW6Uk7i1BQnvYqLWsvExCh7BNvje",
  "key30": "5gKpmYpVMNs8ndHmgLegf8Jj26YNZ8DikRkejNRoq3apqNomG8XHk1FnVaJBFGNw6dKuszUpeJDNEaZAA3XjmsGu",
  "key31": "L6caRYaAddCSTbJSyk7dizrEJYEBkcGfrip4h2SfByrmc6YuFWXuYugBZdoFi9ix1mRr4JBvRuZmNu2KfvaxCPJ",
  "key32": "3m6bBusrZsRnuEVKh6DpHkd5ANJ5WRejbeRt5BmsfnqzMafGsghjUR7Lzj9krts9tw8uUtNsQgo3DdRz4TUYpgfP",
  "key33": "hGBKfh5LJTYZDNUZbCYc2yTfJ4TKBhwUtPGK3obtZwhqXmcwPHrR64jedjHQ8vSL5e9u1SXoPE5T3MrmrxvK2en",
  "key34": "4kyswcpNAxDDPR1uQBp7MusxCdojzmjYnzePQ1yUqCwEkcsn3gBHAQBT7wHPxuGrCbhNsCW7X9QcFWf7NpYvWZfZ",
  "key35": "25G3WA3Dtxi8MZ8bsCbDuzma5SSc1nVg52nuoL8udsQ33UopHGEuV4v1XaX28a77EnebJhTsiFkzBCTh8SHgWtXw",
  "key36": "3xPN6BGWkEUQ6n1uo2zPiRc5Q9527eDk8n2KKxcWCjhb3WnWYXXKJhoJpnvdwk18ZsVLiy3DF46xwPZADd1RKuiY",
  "key37": "4GEBtoJ6P76Lbbm7C24WGKd6G9Z3oZt49iEKZcXdKxh5sXtCyTTG6KJ79VdKsDMSa1do37FbuaFqYQH1JJFCRMfd",
  "key38": "3YEMY4cGYA7mhqqGHZ8fDGnN1QNmKBnzxDr5F6YTH3mLXM2XxVUSPNVWaV3AxvDhVFP8oNr7cSKNEbisoKA33tBF",
  "key39": "3sf9BD52hPKH2muZDNVkqqkTEZdeXiA5s8ZbEBxRmLfbPyLWcrRmdBiYW1QZjwv6CbvkhCzH4WCoCTKDHUo9td5k",
  "key40": "4dt2VXtwFMxrZ1QR3TXrwWNSp9U8sryCxrsVoXPEmybta3bR8yq9oc2t2AwXEvN72p2Q7hfqUTvSZgfqLs3iva9u",
  "key41": "4sSXAz4baFjJ9brdEUWWN1h97MH1uyhSo1cJ2KjKubBiEXmT8qPVYhkw5x2pGdusosgxcjwPekEwJjHN1h7ivbV8",
  "key42": "3ytkkGGth3st2riE2HmR4wBJoQeG9KgWinkz7uBPkWFWGxghzJkWYaAVA7aj5Vi8oMddGTJHphD5reu76pzLegEB",
  "key43": "4qRGFWKeC7e6kb4aQn1EQpYkLcSRSG85JeTVEbZkJeaKZ5XGcHJs64fKpoNzLK5uXaiJ4vA7TAm47WYvUTeXKQwY"
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
