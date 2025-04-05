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
    "U8vXLMZMEf6ek3XZNbMGKZcBoeQzPVKxeWgimxdTRA6TaVscNtfbJKeB9gbErpGhZnuDYAJevQsqanKNXDnkn9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BdeUJPzNRjHxU9U5xDbcbJvav7EyxcHCgmYmnNmUyMS1VckAozLQdzP58k2H4gFv9jDVwGRrEcoPxCkbxz5u4UU",
  "key1": "28F6hXL9T4iGjXBw616ybg4sLvzShhHNE6nEp8WccXQsZB2PfcF7TY1k98ezHmGk5fC2pJsXyxhmZdj66MpfjwzL",
  "key2": "3HSrZDBaoUxMkNijgWo7rVtJuhPPSoHaCuwU8UeXmcStPVVFKTf4DeEJcpfHs25zo2xbMPB2TfzYj6PeBmLFoh9E",
  "key3": "3HHp75aRh4B4UaEjZ4QgWKKMKQ3FuYxTHLoaMbh9ZGa3br1Myyy2x5E3cwwT8EbCpmN3vogP3Rgk4YPbqnVHzc3h",
  "key4": "2bGduZzRvxYke52LJtYi7W5m3YQdCZq4AWLZzCobapPZnF8qXktzxZd4h1WtvLRwvYqytWU5tvUbEDR8Anmcu4zA",
  "key5": "4iCwvwf959CE5tT4H4M3sBkKVAcQbzoJ8hLXj84qE2UAh39DpXJvPcx8VqYd8SAjorYTdp915YJr3VfyRe9yYqxY",
  "key6": "4f99ZR6hXVP1VVgqCDsyLiWXivsU3R4zZfCwxnkMwakGrb4CtEj2XDNpGejDuUfLGTdFzyzQEVad4pJ9CYx9pnar",
  "key7": "4Z2u3jp4bkjk96AGY5LXnNaR6H8PwceXGBLoLfvf42oKAyKbGBwkmrEPMt6dUqJWzSEoej7vQ8YEcCiss2SKbVbd",
  "key8": "22ayvj3rBL6XAwdp4J7vsa1GerifNWCddvSrEHPQMrRYWCdZGYPUYyecWNM3iYVXa5L8vJj6FXb3NEafciTGT7c6",
  "key9": "kivfj7FsP5c9QG79mz27kmpGhaMDDsi215zLvYdUHamakPs7Ta96pGuPTaaf8jbKpMqDthP1q1XLxYXucKSLutP",
  "key10": "23qH51jb1jkn5B3PLij1ypja3GthWzJjPvpJwqpMiRmbNhjiQd4AsM897hxtjjxjJyAajeoLqQ8mBxQugFcL58nW",
  "key11": "1pKaSfDo5baeFwEcjeN8oFEUWEzyyu7KsNfip9TcKmyTphCqwQYVaqimuNdgFB97bNM7dcdPywUdWpnHEkjLFcT",
  "key12": "3dPFrFAD4WAVhxmrwksW3LdpkrHb2nprWFHeEJk3tSpjQp6dgSybpEY7ffuwTZPcVjvz8GfHCiH1VhuBbM4JWsNX",
  "key13": "2sZrE2nMXbMeZWaXdA32mkseZN1vJAHHD1enkMcNGdhtz7bwiQ4mnq1nbRBWPzQTKWDVKCBzxpQsBXBWSxc9Pxdc",
  "key14": "3S5NE7gsiZ4YovFkw3TuAuL3AdQoxQ78huXkzgih8rE9ahzPYTnCjW5Apej3YaViA24ihRgydQLugLvirEpNF59K",
  "key15": "NMmv5QMMYpzboLJAZMGURDdMvGnFBrdPxGpT4XY1MiTF8t4cLnGpLt2QewgKepLzdXV9Bq4ZryHPKD5iyojzVfS",
  "key16": "4895u41eT9jcwfDcxnigH8D2Gvi2w5HGVHYoJ54Xz1vrBBr4tK4RDbd8DbMH1fgpJsTsBd6DbN2E9njRMbbxekMP",
  "key17": "44vAxJv4sBwhSdEv1NivmnzKKVtiTjYJTgEF6PF1a61zB7N8nUhTHgbkFYTuh6xfQv1ApoEx1L6Np3Ff9VWNXCnh",
  "key18": "2eKFBVzoGs9gxGqVNwffKrraHKdj6Qw9V4QgHEgmFzvVz1SVU9sPodK71n6CPcYfx3bn1bLreRTYSD94KcZdFKXZ",
  "key19": "2jusWoKmCVAbXw7MjKxqVMagGQ92Ev4R4ECaUBR39vSKr4fxZxbTEi4QMv5CPoSuxsM3KavvfiSpgY6pT9x5ewwB",
  "key20": "3xZ7X3nVmjZL8x75oAd7zptHRAZVECBGWgrsS7PBGYQ9j3ijWywrxcZ4jWJzBqQ4BSfrzhQdZv8HSEevq7SExjWn",
  "key21": "3KfrSxNroZWgNn6UEn5rYFCEJHcgXvJuuFL6LoMhgAJvGnr1UFd5tEVdhhYaCaFGLF2xbq6fUqHzYiN52LVmR7YM",
  "key22": "4sV43UMjmxfJk7vw6tL5CL6NXQNar1yVw5Q6wAD9h1teNB6JkJMeZb1JfAoukdSppr1A1gB2MmRmGJWmauxtGgwd",
  "key23": "NSRhmqvbUr9RkSVbXpZS3cpJFuS3wEzLG3T14FBRZKSnELuVby2cTsUN8Z7qLu2XJnhW2EgqEavZpjqa9F9bshM",
  "key24": "5jidQDH1QEwEbAMjb3vU6KKvHUwcDgQVkcLEnx5uS4aLYuy7PcMhj7WyLXyuJaqpy1rK2b8cdPfUBGmzkw28ZZ7G",
  "key25": "4f6MtCdEVHAoVtYo8MpjK3pg1bLhkbebgqxDJYgGCbK3AadzJjGHh6KsJF8STNSW4p1SgY834zYWHaFPpef52QQ9",
  "key26": "5cHMg4KjQeZKy32EURPkYTVHEzm9mQnXJtGn1bhm8VmAr1Ki5wf6ucUx9AjC98SMPue3MMQshVbZQtzuiF88bKtu",
  "key27": "5PKnbRiAKYFbtzwwG54LpF6Rwh1hGWXjyKnUjjo5ohp7JFVfy5ZwcjKz34YXBpGUjPsSay67ogS45yVrHWhUUFnu",
  "key28": "4as6AAMAfrLbCviQsJRi7XPrnEXkq57XD1AHgRPtr1hnrsxPBM71oBzJd5mU4EqsRvovNn58jmrs9Zism6jbBXvk",
  "key29": "39h2k4SyHYZeuacHhT6AKZkZ3QL7nhng5cDHRLD7tor2xDjVjNuiYqQ33n21ab678ktDCka24ZPiZx8SpaUsWHCC",
  "key30": "3ZANpnin53NapRSkuUStHtbXojtXfRAFaod3ookPxNwd9JrW1LCo27d2WMHV4goGLBHrKH4mcsWebCTj717HkiFv",
  "key31": "3Mzcn6gQPc5ABqbqWnpSb8nsTsK3zYgBnjpPdzEqyK4rLD6RHqkCgQfCLrtAszmfdZXDMwjrREgLEERjoQLN4fh9",
  "key32": "2miPs17ahkpe7sncYqdFVn16pgTF42svMdAUWJZaH4neAexDsTds4LZr8QNtoHYwksCX8djTJnHu7hc239GoKgs7",
  "key33": "1CxGJrUjr83GTtQMmosczpGJ28NzAjQEbGWXgmd8zgRpv9WEnLvF7xr2jaZ5jP1fUVwaA9jGUTT3K1kLUVmz8dx",
  "key34": "49pyPpd58XVfeDRseQMdfnGKK6y5gyYhoa36S3axWr7tGmqnAoiqekU1qve73rvGUGkvd7EByQHtynFcXEtdjgjT",
  "key35": "3cMXimxzNyn5MgkuymsTvdRfKRm55KWRYpGNNRM9QantmAru5VqLJYLMQoB7Y9zciH6LWjzMmzN6LmKwNvSxAf3V",
  "key36": "4KkhQffY9bARVUBEE9ud49stkgiQXyJCpdmWTjtESVENfAt9KwWffKKGGeMLWMaKi69xAH6SrrrRtUUqD2h1HQFr",
  "key37": "3RAoWztc2J5GG7FYFGuQo9MZCfbb4aUeePf9YGERswh9hAWDjgbDm92H8u53Br2bvhK8D3npY1w5zEx7cTRKTDEm",
  "key38": "235e1SA9gTCJKocmd6YBNCtZ8xgjTXL3Bp2Q4ymUyqgMTWrNFyaL9fLH3YrL2KQtaPTRTS7EUKw8RtEoANJq2DyW",
  "key39": "3XWSHcmNcjSpB75FAnnTgDCrxduTeR9GvwhqspD72xg36rPUtJ6bPC9pTkYwZmFxpiFbdt1fkgnbBLbib7Ns1xhc"
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
