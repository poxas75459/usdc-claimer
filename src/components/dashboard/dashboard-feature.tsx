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
    "2qJH4K91ZVCBsySEM8aVMUvEQzZAuQA2xb8TAGdwGJLCAcY32VvLvSL2MPKYa48EskyKtFaUoBXx714PnqTWshw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P8QU2qdmiBXfi7FRwGh4kaJchJSgJAP6BWjYm7m5dRrRobEY9miaU4mxGkSj8HJv5hvHsSQuG3FKSvzvztLdPPX",
  "key1": "64Tv1KGXsAzwZxTLweAkgx21ikBdQzTQL6VjMUiQrajMvRmVdJcFq6hNB2qATCFEmCEBSKn57pgRPU3vWcbSSzTH",
  "key2": "ZDojfDSQNgUXWYRkUDAyhbm2uLBsB9rnLHSg8CHtfb56n85wMfTbmvim5Db4RYPWy7ABrGRLhqxbDmbAwFNgNfF",
  "key3": "2qX3nYFBkCMfxVyLEWCjK47p2xf7oR1Y4oAS7FD2PQYT1NQpCyokUqCaWiMpqaUCUreiGFHfBz5en914VtFnF74X",
  "key4": "3CYCnKDDs5YJKSdMynLbkfYr9c7sueohUNBEjTPFt2g31GNLvQPrsBR863booWXQX6oj4gFkHdhbxKDqPAFLUtSy",
  "key5": "28QroyVY6trCkBz1ujas6bBwR6Ln7NU5YyNY6KmsSXLoxFmLuvsjSLhBj1SAb9h2ChQbHMV6zKiXJuWYfzhK3U5V",
  "key6": "nmG89SWxYAkTT4jFSgkJRXgdhaK8vXu7hwGQmgJ8radnzbBf9K5raQVrB91xePftFJMUQumr7ef3DwZwhq7XD8H",
  "key7": "H5FPiStSNP2fLvMkddm7GBmDU4owC7FiGkThnswMAVe4JrMcAUPrHhX35B3xmhgPVH2hc8XZ7666eNPopVDXPei",
  "key8": "39qRZSDN9t3BKfR9iV7EfXam1Q9d6Hh1A5LYE24CzJKyMmckw7fiXEJkULpEKXGcWmF4yY2P19dXRaq9wNzsHwoG",
  "key9": "3EiTz3i82DS9j5gtbf8sS4yBcLfPSLwKHJpkrqbtMX1XKbhQU6Z3q3irVuNBT9yQFFr7pfWv816YHs3vbTpy1iaL",
  "key10": "3oNedFJ3ufUXuxSiG3j6pmd5gBkvrxDDFzCD5aJ1Crud4hebAsorqfRdZogymX2xzc5dTgK4G7N8VqGDpVUmnuMe",
  "key11": "2Wtj7QxFnpAPWAqsSVZueTHWPmu6ubuYDnrRgpEWfAHeD1WSrfYpHEXxkKeZXKgFcdxLP76bsRTeiHUNxL8bBjAL",
  "key12": "667uEdKWfyJonCnUZ7MNHVdCf6R16wh4GmsnBrCvgaFrotoCXZK1QJLp2K51VMLosKsF4Q9NiSfszhvEAWgd1pPu",
  "key13": "5krRnnVdWinn8LKA3VXtP3oY6wUQTmGC5jgK4ygAWF7kgq7UzPH8aLEW6ovNwPGNNi2Pa1JoPPVVuBmP9AH7F28K",
  "key14": "3tgC8zf6xgmAqUKXH9zDgZtfwnYNSdEVV8Zg6T4uihv91LskwrpZq6eXLtwcTh7NgwGKZsbonL49hhyobpHZeCp1",
  "key15": "2Dj8h2BZGb8DJZ86RJDbuH5YzXP5jpaM2kmsuLRaVBaPCnXXCYcsmXKxtf3E2Cv1Qo9uDsqCZ3tPXCxg2RUJt31G",
  "key16": "3sciAhiu99dJST91ahZgz7Zv79jNqLacrfCEucL3sSyeHuX5V6rPfiGw6M4Y9uSKATxiYWTkauYLFziX6YGtvLA1",
  "key17": "4FrM7KbK3BLpfsqSWBnH2RpcyikwqeZjr3cTf8JUNH6eJmXp68m6kumj8gMvBqGefLdhCgEzXY4nfVuDENMWinPn",
  "key18": "49F7aSoP9mqCFnrKsKPrqWStmW3XRzGzNwNe9EfY6vfE1LSHhWKivdWaLo7rzrhUJ4pkzfHdd75g3nVGw1oDRhFu",
  "key19": "uNWB7GF3kCb161wvG5ohfQtQkcdud5yiPdaH1GhgnaKmEXEm2QwGoannTKrhHLaSBw8TwFY4QD9goJ7oSxHCzjX",
  "key20": "2Rceti9VJDXRKM9sdPEfZgwHv98sugx23pGyHHrHjyiYx7t4EWXQjYAZCfo7Wf51jH6B3mbNnMoUPoo3fPqyHNds",
  "key21": "5ZwdFY5hsmdMgcKajPhajN63SaJK5wCjFs4VbvaGF298EWVgPq6wD5NJDY3MsVrzhZENzvd4sAhtL4UM9EK6xwk",
  "key22": "5xFSAU5DpPLK3Z5gDkazFD7gCan785Ty8hdgwhEKqVxfvcY3x41aA3LvsxgX7HHj5MeERGsyGQzTU1gQG1967auS",
  "key23": "3CVCF6ehTe2LB6Sm8jtc36EV3RFnRwz8gdA2eq46KvyFTaaGGe33mS6rYy9VKcySKWuHiYrehJiYL4j9xwVoNJ7h",
  "key24": "4ZhtwZ3cYqpuj9prmvWSW5fmyPXQM12Q8EoTmQu2QGeq44jWCzsDfQRbR1UyDZXinaw7XJojmAkCMCmfX6fnVD44",
  "key25": "5zXmn4qcf6qQ6TCZVmRJQzyRY81Uu5CorCuruJZtwavpzJ5Zh2chTUPXLWZEXCQsqFW6cUZxd9MJD9u5139dmBwc",
  "key26": "2frnxL1vfqrMBA7Y4GHBYGk6sgYzmwmerBSza3t9HMzzZDrExXURKT2ePJZnnAbQbvQSM64AKC4nk6fSdzMTuNk9",
  "key27": "2hxgzWhcGdoMNxRfyCahaPvCJze3BoANrUxXyfTLBPA7xyh8Bwo6vEZNBqfe3wq3jynbWfD4W69KJqgs39FYLvbb",
  "key28": "N5DxV5sj6hczb3xEKb7SEQmrybjMhqPUqrDAAGzDz1uLctbAF49QBFGLcJ78UFkAK45x25a5GUrMfV9H1gpSkqT",
  "key29": "QQk6UMfL4A6HuYq7gX3uiH1Mdj3MFxjapPAoPg2wp8yqABaqfRVK3bsyCGc6iwmDS2M6JtLVruWPvcqhk2S48gC",
  "key30": "jx92dAkaLN2Vt7SvGNXay4oQQhmuwBGvZwsP7o1CkrgmYNTWyScfYJW542BW6WS4HHnffgfidAAQR9PuJrU5qEa",
  "key31": "Fwxpd5Qc5T8xYcYc4A9idg9T4iN91hpTjenwhXqZ8QMGms1hhCS8pM2uYcFzARBPQUNL6yKJhqhfAiX58RQ7ndq"
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
