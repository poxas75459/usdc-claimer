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
    "48UpyY6hmKVN2mdvJQS29YAaxCXj8VnjeUe58jC22PU5TbqLwSYV81ohijxeVz3nPFBsZZtmWYzis1XgU3x9ww2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vy8PA9kpvJrdaZxsEeyvbr6kcp9WfSixzUVTW1AP2okyC6NxZviRsa6i6HSnb7xz8THhtD4mqgboLWpWbUkpMpG",
  "key1": "qnw5mQHd93qweGqNn8HzS1yuznbDj2cFA2tJoyXLGCHhwT6PsTP5udTMx5LbzSCvJriMe9BPKBGJssfJqEuyDiE",
  "key2": "2LEBufGJ91W34e7tSVcD3oVfPJWGtUPQ2V9SQbhgKHiu4ro9raqiRq3Wu11TQiR7JGQGxY3bwGHf3zZ9RcrM5tLy",
  "key3": "4zmQ4E69iTbS9Fiqp6jgVqQqkp1is8vVNYig4CvScStvNvjp22B3zQM1ywYnZ4QJsiSYey84jDN6aVkAs1jt1PmX",
  "key4": "5JjFkKzEhHBBDQJEmycBP47amTKL7oQW83tiM91TxKUXddJdQZGwtftmMvSjubd2XNHRcQNxigg1LUqTcQbhLExU",
  "key5": "4r5dQcwGw8LEhwFziR81kx6H6mfMqxmAiV1t3Rk4F4njXZZEuNat7PW7xVnXHSaKRtvDG5zPsxAMG823p6KTbNKt",
  "key6": "4UeaqLGrimWN9CCF4vfUraVkfKYGWYVHBJma5uyBTYMY2vCyGDvjsE1oPT345TGoNgDKWqwACvUai4wd6ynoXSeh",
  "key7": "2TZNXXAHHB5VAsWYNdLYVH4F1eeUwHXvbEfbBTUmoAyVsAabe99uNPPnqK13ud8Cu3eD3A2gzwEXfR1duRx4exRL",
  "key8": "LgaAj96HGvYvHF6cb6vG3857n1NwFYqnXdP761Vdan1FDbU9v7pWVyG3aDhv54cSx7UZnUr5TPWHvsjZPuz97Aa",
  "key9": "5SjtKqpkF5VZE5mVwTTVYoRqqo8fywPLyF4uqZv9YmviMV4oAyAWN9u9k7SdqHWb25yXVK5ZmcdECGKMUNd4yp8h",
  "key10": "3pT3WtNwYrKdSzDVzCkXeuXbASRHqfuahdNnbQZ1R9ze5Rs5qfKdh1jtwCoXFRxancHEtDMrS5wtNNeB66Z6jiYv",
  "key11": "Mu7gRFgYhFu3E37Rzh2mU74pk5iBQLP7C7UJCvFZtgnxRFKaTHBPoSzj48uDAnJaS3QWzwGY9Cz3MuGXV468PJH",
  "key12": "LkTbYKS1Uh8UECN1gmfc7bmKoMhJfLoUAtk8ZimvvSVFtAtRLiqGNFXN3xHPPaQhTKH1CEPGkFpKuHVVc2SMGBp",
  "key13": "5Sn4nXViUDuL4wnfVbiELjvdD8RVEW1AiAMqfSM7wnWjpARP3SULd82Tdu8XpBNvePkhctLbvc3LwFa92PQLzLLH",
  "key14": "gFx8N1Bhnhp6q6n3hSQRNTo7862ZKHmfEQgWrwucuRRYRWZabokbgSWL3eSw9cgmnst7sZEvyaCi6bBhyzw8e6P",
  "key15": "3uEshiR4hD5uptAj5LpKqHJT8rcMBpBoNGt4ZftVHWubKQbHQfGSKGr3rg5Phn6haoiyXt3WPkBMsMavkq2kCLh1",
  "key16": "3UcB4awfi97csgE4tSYeTqjm3USLy8KnkUq8nwt9SkVvzhkL5TnzS7oynCmhXJttfuAGHsERNuKnFzXucaTCtfK6",
  "key17": "i1VoHnb6whUQZPAYPVpMRk3xFfmFYAboJdXsWeKgH877RDjCxCkcN4Kxot4qki6WC86xLg1vusLTLMBsSJ7Lbmt",
  "key18": "4c4d7i3DaWiUzKa7JzeAUHJE4Jdm9ph8FCVUQS5Ypq9ZDAgQqdGa6uYTQhFQVCxF3RNomjTw79V7vBEqn1hPnJFk",
  "key19": "61XqAqZzMTJxjF7CAzKpeRvtsrzGRDQmmdYxyF1uKKv7SyxBivVC1vNaLLkVyPPFnEuY9WHkHsQ2QRbFf9ZkgK8Z",
  "key20": "5xtzmnD7TrYu9whHx3wiEt1LdgpLypS1Npo6BJvEberyPJtJmwmwkj7kJdKTyiH3iw8o59EzijQxKGVhGCfEWs5B",
  "key21": "2mJsJmiYPY2no3b9bvyQGBoUYr8vmAwYdzrkiKTfkrqPRVteQbKD2Ze95zX4p1H8SdWwQUDrQ7wtWf8Ci9q2Vc6B",
  "key22": "4dVpNmV5nWAc65Daqs8e9GQ3dbMuBoLCR4VFZyLWQgrkSYA76rTMuD5ziM4N1Z2iLd2eGyoaWc1nx9dxhi6TZ5Td",
  "key23": "34u2LDyxG8USekX3h1Qkw9Q5XEootzd7fJr3TZSeKviFoHeG1YwkfCbABEcuPqQoPfhx4K1bVagh9N2A77F7ndNc",
  "key24": "3LZLHqgmFL7Vuhv7AeDJ7xpzzB1vQw41KtfCRN2LJdMPtbhUhZ4NTtA6Ptm1rDJcstiWqm1UFMReFq4tPfeAfXMC",
  "key25": "233cN5SSJpvQV4kW8TfpNiARjAFixockGXNGhepePj8N81cWtK3j7AXEgqo31veYM6WjnHpw1PrD885y2qB6qbW6",
  "key26": "3boNm3SRPUubdW9HymL6EbZTgBUdzXsQCp9vVD3bGPf3Z2zoYpy2LsL8h5RBCry8gGr11LNURT5oZZnWrm5nT65f",
  "key27": "wUvewKHpaghKtna7dZ5vJGFAbgw1D7ZLA85VGTX7XeM4z6pkJAYJBCy8AtqYQ63UZToguSof9jjTj8KfB3SuCqk",
  "key28": "26SgJ85JPDfuDAYD1CnTsdfowfwpiBBw7XJn1hadmXQ4UbYyRkcNQ8Rvcz6Lbe7igVzzfEVuuNoazVNW8qNPpWmV",
  "key29": "dhMk8xCbqosL4Xg24ZGgXbBYW6M2AJRbdmqpkST7TtAa2vH5n4UVhjK2XLpZsosig499GtZ8uqvxe4F8Vta3Vmo",
  "key30": "2rhKJSQ1FK6ofduaLLCesqHBwDUz7A5SWjEQ1YrNuRdHBSCX817guQZxEFbckJpHdF49edwjjekn5e5wvrxNyY6o",
  "key31": "4zyXTmRxFPTXmDFei5jcB9NGpcVMTYLiBEww5btUQRkAHG2JgUR3NP6ue1vwZYQu22Z9KgWzh7vrdaTZGt3eQBZj",
  "key32": "5JsagVv7gnjThopFtbmLJ2cDk9fJKSxxb3A1nY1FnYFXy8Xssb5xrMAhEnKCHpu1kQfRfFTbyjLR4WnnQze6Fntb",
  "key33": "fYD8eDzdwfyU8kUHLKYvaaNjwJfihSdaYMEaXgYR4ApnPnNUNsnp9Khhuq1m7YMvQXwyfm9YRFez6ZRW1s5gcsF",
  "key34": "41hY51dfFHHZ7Y9E4ZbqjhVoTQfduAnjxmeAVqDUgfWQazEk9JrNzgLjoe19XjSmFCgM5yKKEoHVpCo9WhyUduqb"
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
