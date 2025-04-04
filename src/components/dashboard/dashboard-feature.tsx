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
    "2FqnVteX2M2m9niKXEP2SkEiG9vMaXHADecXRzakLnDo3itUxjEMJ2SV3NcWrE279AJDvwJiEWwyknWbNQCKZs4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDTMUejzrucobwNGxqbsuZYDbuYoqB6zMdvLh1V8b9XYzsiDeCX98DDnaTxeJBginzqTtuvbEf4bq3n8o9tVUAr",
  "key1": "2JHgz4siivhJKBhXTGXEH1cCk3Yj4nBpDwPuaeEghmwfvCLcZEswu7y9Xwm99HJKjdwya7kuHKuTEm5CtifFcDWF",
  "key2": "49R2HjrMaxZmN2HVnAxyTbYv1k14GaEEq88cULgxvkwM71NiMpNyEX3GeBe5P72stQXUeFfjscgkxuMsGdAnPvJR",
  "key3": "2NqGxZau3VpG2174cR9Lb2AdMSTPoXJZvv1Zy9CbU8MNX8i5GpRDCjJChvRLS9SAsk8CRWhr4NhfpEC5DshiVAMB",
  "key4": "5CowovWFbPNHMtkasPjYHk9zehukMUvrt44zpKjUihuTKCajk6VwU8d7rmaanJJk3Le4Sq7PQa5sj6aJRr7cr3p",
  "key5": "67gR1G85bgCDgAuTfs9gGPWkT4yYSfQyDwJGQ5G3KZTurPEG9rrfFXkHqDXirN2WXN9yCK4dkrLokYb6oEfK71dU",
  "key6": "58hCyid8sZVQEh95d7TtAmm2dTnmFW4oCBLhcoM66YPjBpJejkLZnDcQaegV8mUt5CVZmpyWqNhpWg26bcfR79tP",
  "key7": "3CH81Ggx1XDPQDqNHrZifG11MSAerMk1V9LXSrXYY5tLCQ9HbxWkAhArYhCX8ybYC7cap3XxKzNbYUeAKH7LwWSE",
  "key8": "4FwRqq8dsDGJi1i76MHHcSRKrXJSRQrikpj4eMSrCcnXA1Y2PEoZcZAHCgnyqPFZPXLeRZNAzxWptwth19Ck4rdC",
  "key9": "wSWaVumhDsC3vmurBngFiVYjgrooAN9KtE3RQa4BeDZrnUpkAJ8mEMZgNarMhmunxiq8EikNZEEmVAP7gvNSLaX",
  "key10": "3mCLNr437tYcvzgn21yEUUVYoqWhDJhskLJLFkrvWx4xczdTJJrMKcNh2YvDmiodZcFeoFk9CCFVQEexdXU4QzPs",
  "key11": "295fgZMFZuExeVKPmQ64MNzdymaMbEKQoU84utZucVqckmmRoB4nC8QUWu3jK45rF9L4kgCJXZGaAzCtFFi6aMhg",
  "key12": "3jJiDnqbvjiaasXGdvxtJpkxDHjUpp9wEBFi22vrXovcMmpNd3abAG7JLo9jCGYkNUok7DFKqDbVfr2qt1nLs1is",
  "key13": "dL6QZtCM15LjNxiV197jGSyP6ZT7485yV2pnpTum94DxcrD9HDzevYaEzSKZiSb3B8fSwxh5MdzWpeQAcsXoabK",
  "key14": "29pNh9kQxg36sjyEXo1WRMiSi5Z8xVeFEgsSvTb1qjAtqPHwW9XPpHuzpNsw91qp68BBDD3CmeYqtiXJq8nGfaAZ",
  "key15": "2t7Au5cinFKmrqFu7Bwuy19uZFCnxQbuXj9T9od9jZWeKcTy1exXSRLspmRRu2iEm2qVkMgg1JqYCczVt8ManAbY",
  "key16": "2p9Ne6RqW74sD3FFRjCfrK36D9NbApjsWBGFB4gjTG72HzadbqCXYipkeZopBWP7EdwgusWz5HphFrUA7jSWZJKo",
  "key17": "33CFQAtLmLm8hg9dwiHWztpYS1tGEGU61aGTyWFMnLobz9vNHrqRxGNDaQsaZ2F7FTs2Bnh46yA26JtMxz3zwsfC",
  "key18": "3cVECoF98eFD2uXi6uUEbE7gERy8skLRZV68D8pWvBMM1MHNsSZ3tYv8PMuubA1pmJ8umWwBvWcriJZ1XDg4notm",
  "key19": "4X8fQNpK7vJxt8cUMBAhuSKmgTgnCRDpoMwVA77ymsoVYuuB2mfeGTsqZYM3YJbLbk7DxVMTXHwK1dSMLUi8PzNV",
  "key20": "5teFzARe8gbGnoyKd43Sqw8XUT6FYpW6qFLfV6itHVoqtXT2dVGzwaCckAhd1PB57wwEtjHj8go1C6wWpXffzut2",
  "key21": "4whUSLg2cCoPmpQMzh9tzbEf4D8pbWuKU5E5S6rReApjHfZR1BRhoNa8WRXJXUR9BsxEyUxGLaW5QsVm2MB9RVZj",
  "key22": "2RE2wrn4sdpCFD7KvcdSodpS2UHq1s2rD1ugUXqf7wt1Fw3t4itRDnJ3DrKVrhFf9tWTYKHTf23JUZksp7CZBYUz",
  "key23": "4tMqXvzN8fkwJFdnb85CsLKsiZdum784KDhw2hEhZvXWrBvP3kcLVezFJzYpqH4BhdvbMA329A7Zp5XubFihBqe4",
  "key24": "3JzrJJcNT9UnfPdGeyEn4z4kazQPttyePpiCTy3vxHEPUbZXks2cSWejCUiCPFjhimp9dngvMRJY4BwhNwrUevbx",
  "key25": "5GYcom2162muk7cjeTs9CiYEpwDyxD3DHfQqFYHijQFZPMkgWhGwcuqwrM1vBgUBNZdUCiFCHpETdfHBznfaDCJ4",
  "key26": "YYBS5CSHzy6rGkrm1buje21zPUkBCFFihKPjjYUcSkYGhKXLJys2ZcK4VrWkHXhGk7CZ1L18mJ9UjKNC16knKge",
  "key27": "cKC1avP7cLnNi8378rQAkW3avcFJCXez8nmRhLFHX19L38hvrzQNJSkb5RyvUiZfdHzYbENAhy8GdyUACUTa9cb",
  "key28": "3xNSN5UGFDzgRNWiZ2W3pNicMY4UkEf34HgV5niaSQ6KVoNWr89cWm8Y5n2bQqFs94Jd4Tn8BixyW37aZXgzk5G4",
  "key29": "NX3pYw99RRKfBmLXV1ZkRRgHJr2VyLxCDhdJrua1qRCFM2ccMeiPoCs82qssfScYLho8TWKDRh7LhrMfdKvxz9X",
  "key30": "ELk6eJwEfFndJnPPmv4JfVFx1cenqqWxmKcfJheYRSthP1ffuHyC9EtT4MQ8YMFKHmEVDbw44wdWUDg1s15J6k2",
  "key31": "3xD7ZK9HUP2yZPkngvSCLGoHAf6LMXoZSgUcZnqXhuTqAp6JMgnkP4xJjcPnS1ivWuotVQsBgBeV69MdiDjfScCv",
  "key32": "yiTaJVvYgf2CPExD6VXnBQerEB9W1S1AFYqLJXCK6zm66rTA8VkYYXPMy7khAp6UG3aAwHxJ6CajK8ZwvdfNCiZ",
  "key33": "4MS2PZiGWAR4aZD32fUpgQtXwiFwhVyKAQayXWtPqyRdTsnuMbDHKa38z47dRFRpRYwfptG7k8HnRVJHpoXi5KTV",
  "key34": "5EfGm5r2VKYAjmKRSkFJKhfhUbShGQSkRLH3gizziTSzPzf7Xhofa55v7EiNhnPpXB3FJkiDeB9Ce6PKKGiojzXw",
  "key35": "4RqMHXamQjDb6br1sUqx9W6zGFyASSgNamjiB3zLqgQ3rGXTE4ZANDoiKvFHU12L8Xgy2UjE29esFAxjuYVFKNb8",
  "key36": "Px7x9Svpe3x4S7wnnqkcFiLmZW6z46GSF3yewKgmCtPKTQnhE4f8qjYeNAdH5utYGy7no4QagshSxXjZHEwdrbS",
  "key37": "56CFuaTL8AtnWEXkSe9DqZarxbw7KePXyj2sjFz26CmEe93qVrHVUjodcXtJhKZPBL3B5gevPQtsw9Een3yUbP9D",
  "key38": "5oa7FagPBrdXRyU9i4m98CVEmBqBV9xDNGi3thVSjU4k3DxJ1b8FDF4mESYtH3VmsCDsXv6oZNtFo9AiEgJbfEsJ",
  "key39": "4DEJ7jH46fpwPUJsJ424SK2PudBaxYpQimGE49ncqZywE5pba6vxJhMkExp5fdkmnjEnbLbAYeW4tzaR1ytKZfvc"
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
