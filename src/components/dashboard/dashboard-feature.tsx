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
    "3AovsskzA4GyxzDySQU35SnTCZqM4tCoqSc4rN7cQXKC1kKhMJtc8XkMRptzjYMZgxhp3Dntr5X4nPHLuuvWCcke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hFFJXQBugCmwqMgRBwVE3pnwLEFVfdTbAKSX58QxDVVhuSYQMFq2edzXT5Jp4fFJHHqMn1U2ed4pytziz1DuaRa",
  "key1": "3rFempdQyc15pAyGdrEQQbNfTU6hWfVsAGxjx2pPsJicEUfx9FWkd89ERxyhp6j3XMvEKxZAxEf12ZnoJvEQZLxG",
  "key2": "2vjFbPL5VtwUYVGCp7hY9puS6BSCt3bFHqngQonrtVyjqogBgJAKo8KnHxcGsqNijCqvZ5Ur5voC5K4SSz1SW3HT",
  "key3": "3Ug8uzfBArCJpjnUrzfezMcg8Da9RHTYm2duJMZwCP59TJM3dq4arWyw1h1C2n4BvCVov1eV4WPXZotQvBmNk2ZB",
  "key4": "3ThX4NfaiFVnW4Y7tCNUx2rWNtGwmK85vKxKRdoMy3XW5fedG7LuQRLY2f49Q59T4naiDgvnXhTHTAQEg3LbnTL6",
  "key5": "PSckx86K2wBxf9bBsUqx6D5rm6QBvm8e9rrDTj4fLTKVwo6KHkE8A5HHiLxeT2yd5vjbr7nE4ooMQhh6ULvUZMS",
  "key6": "2CgF13q4Gd944xpvvWJkqh4K49wWHUhxSnfEj1Gb4AFKEhAAS4dRMYws1y9RZSMJWAnKuFGWnMQ32qBVx91n92Fg",
  "key7": "5Ht893zV8WzHPV4qCqPPKEMmudVDb8czQSa3AGt4KzKSyUcvaop9ao8M2srS5AkJYzj4SDCWQFPi323vQFhZh87L",
  "key8": "2k8UKBYxRQ3cawShikpKR6Xno2Jedgik9GHMVhL2uvezrbmxhP5ECfbrNhTuSu7ZRSdSS1eE2ptZwiQs6fMW3MtY",
  "key9": "31YmJum3rj9r3gg6hDjiWjdG6bAuwi1StmMmSCP8xfMtteT9eJM3FNF4XPzhtoYfR1HAab59nhxgsazMgB6opWN3",
  "key10": "33B2XbH6CiyjQxv4ixqVfT86yNQFPsw4RSs5bztREwr2QDqNpPE8WvbXcDvDuAVxCTMePsiUykGWeHz7a3BTZhKt",
  "key11": "5YbYkkH5dg3KkPGjsf7iA5qDJE9g6FQ7pu24udAGmg4pACfHFBYmYxzhzfy7eVxQDrs3RKt4u9971a57G2uGTm2",
  "key12": "2cRawag7k4K5yAkZwyVSJaywiWtgmnU5NJiZ3UHabrRzvLTxfz9RTsa5sCdPxTjSVBt2aChThp7kWVg3dUwqQ1fZ",
  "key13": "oNM5nKDcGhDce4SVaCtJLKKgiVnXUXLhhFJvXHP61hmVqTXCPirgGkhTm519D2g232fHWErqb6gWrEEjM4DD5Ri",
  "key14": "2oeDRR293uU13ZK353NaCXq7KTQs1kdi5mZhZQZGTXbAmuarQPY2T4K7WzhjuARbpRNgK8GCsUA27EoF8cDA6wPH",
  "key15": "2GbgXoa2nqWBMQuQQweiUarHaX9cmNWdBXxqcWJ5tppfJtQYddeyX799XPS5gqYNNAFN4jHNdMNW1gC3mUK8wsSX",
  "key16": "47FdMAm3N31uyFGbX8GQknN5fFvQKe7xSAENcJYiFKKJ87KN1aGBtCaPU9qwSpBYpm5eqQy3LMDXnA6T87BDB1YK",
  "key17": "2U5ij3wGtMvswXvr4Q49EqCuMt5MB1idwd5tVAq4VQX7zUKaKM97NZUU82aenyedbB34P7Z6YPQhffCEsmmHZVL7",
  "key18": "eS765C946MYjb8uo48qEf7p5YKKdkfZZGxD3BEcouynpsBWwVsRWVTWCGHANzTx46LpEFGYYYc9ESCvGEL3MgoB",
  "key19": "5QaQSPi9Xasgi5JDUiccjdXpK1YPxXbE6zMSjvNJPzbFHkmNAPLZuMcCH5KrRmpsjVnMQ7xGZ8gt9eE3pQ8gp8Rm",
  "key20": "3RS8ASGuXJcGknvUB7gjoWQVUsDcqJeg9rWEHASRY9t2JMEheEGJTswmM51u6nJVGtqcQMaETQ8n5pm64xEbWaxm",
  "key21": "LpZNx7cLEcpc65u95e4CLPkrjng78khSDhRhA1CqJ4cpvobiZ6znH4Fd2y6N6uubFMBVhHjxtG9rEMdBAfW446x",
  "key22": "4Q8bJSEteMRJxrQyKMWWem3ow2UEAPhTp3cVAuVFy2whTsVnDzWtqSJ76kyg9rR13uvXJT45RjGNGbYXe3j8foVb",
  "key23": "HdrSqiMnaYcLpEfbqqsk816VxjoUFwUr2yVBqKi6hRqRrCWa8J1sfkKJ8Q4JVeJYG8JSNmSayDs41d9JMMx3eG1",
  "key24": "2asT28LKdo9Z8UcxQQ1NuFZsEG5yXhrhJw3Rr1xWnWnge86u3P9aaWp4wPYSksnjDNG8Nr5pAMgz8kXpqJ2AAUrY",
  "key25": "67jURVSm2bMTtYUyb94GUGtDSEnEZeHwEZeVEy6w4mQDwkLHU2td9yDmhuJysDreNiC6CvkniC1y3hbXWYFM83UY",
  "key26": "4Ux2TY9YvFU9EVCN6rJS6AfkHvQjGRJRdSYxrokV5BaEVNLk3VceDnNesEYFMojsDDiPfBQ2cjZ9hJBSvqaYW3s2",
  "key27": "5Jx6CabTtNvSE7LgvAg9kBrC4adzLLXFxUqhYsUCGwLT6iJcQ9AvrCVNJdPWewRGkXWaYPVpczpTFiBuJLWLhv6K",
  "key28": "3s87fFDHs5NuMLobAnE8tn6iFHbKtCfeYBcsotZDwer1RKw2kfxFjFhwvP3tiBFkwzBeZEznYgeM2XHcd6BMJTYR",
  "key29": "5nZwaa9K6D5wwqCpkkVHEKQxD8Mua2g5tXedvfzfshTprugkVVuCNxrEZFDYxhQZ6tFJ2u5hqwC14jy8QrvNc79",
  "key30": "5MUufYaaB3MEyJUusaDqcoks1mBE6sm1DFyVVscqiwehgctSGFZMsrZRngy3TjZJUCpUWtdCwtAUEyr3cAqK7fjm",
  "key31": "ACUhKbzN6Wq1HoUECzPgjxpwL39D5TVnX8jWhy87abwDWXgrsDo7TVDWYviYHsJFNUyfDShX9gwXwi9dyN1QNFz",
  "key32": "3tGTFZ2KjyLWe8VqKadHzVBqU9zEg3Z8j11kd61ix6q3SSmdqYWKTb8XCW3S37AnZZhpdNRnMi2hWYeatqtGiWeA",
  "key33": "2qzYYdkzWZHQCtTPw7aJabYGhRVAXspqgZGHYVHUUYyVFvWGygCDJyFVDKTt6fjiyQJgqaQcBfe74QCimXaoAUE",
  "key34": "J8G7FSnMSLZProXZtctXjKp2rZhziYqYZDFTAmUQScMyQ8GXHvTTd5JngMpYhxghmPMCxhfoLPa3TMkHVP5BiPY",
  "key35": "57iiWxXTcXUKzN5JZLXPeL5t3CYtVWXtNkMesUgpBDnzNjf6W67MPhRN265VwrH34nGKc6HEPBX8twC64iSrZZr5",
  "key36": "4yjXUmMTaL6zGZGjeBKPUXZMcM11DRWdY1YwLchRGreF3AynpP7KeoVGgAsnfxDBGENXnFcVVVjp68snwUi2pXn3",
  "key37": "gmH2tbPyzYVXYeqG95SVbAoSKUj9ir5CrXaFTBxNQELv6R4C6DxyDakvoDQpQLYwBJ1M2wcQYghucLvQZ6Q5rGQ",
  "key38": "mKTjE5KW26fZTCp4v6NHpV1yikkd5dCoSywgzUVHemPRAfziDVz1GzhAvbWyzhERhs58FhbbAbYKVQyCHDTeMHv",
  "key39": "4iFzLPxyy5BLDwEGF56kCKi32h2BeptnWk6EeXviQ7nKi6KrNkkwd2SVAvJkLxjXtYK98xPMvS2dtrYkH2LgZtpw"
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
