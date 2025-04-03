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
    "268Ab1Erq9gxvxELx4fZJXJYzq4d8XEGg6qzJTro3bnc7prUeNbjSMPXqrDeeVJ12gV3FAi5eBxtWH4DNDzQHh1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VCN7k2WuVE1fNMqb2mdQFoLCpjiyppf6W6rH1tjfdVfiXxB6wgxNLNPggeK2HJTRYM55wzE5uxVrJGCDT7NWB5C",
  "key1": "46xqXCG3zt3KL84j3A6hxwPq8KYfCAobu5Eiga6fFmHJiJcxkgqZ7pE1jMG4w6qf6VqYtnjekNYhtLu51mdstuY3",
  "key2": "5MsoN6XQn4SzZ2FhHmPFE7z6ugK16cksAs2AMjXeocethPhk5DbtJjYYBafftHUbfsLs8VQiURLSBLW69KYR1x8z",
  "key3": "5SUjxCt51atQiBoYz8ojy9pB2fnhbZjAAehic1k335cB7jV6qyWLhwrZe71RMMVRJQAxvnMwQucZzGtS5LN8fDrX",
  "key4": "91zZXWBR1SCk7kAp5cUnGbTcWHt9kgVs7JuZYrPP5tPHgXP74Y7Vpx9x99pN1CZLEnmXq9Xh66m5L9TaZt9zGtG",
  "key5": "2DJ5B8NqFpCEUAmKgueX5FB4iReTUykmeCxqQvtsWffiWd7Li114R25CuGrpgbco1ZWaNupmGRPQgo1kpG4Pecby",
  "key6": "25Ao4eWuLj61PE141iiCkAQtqS3tFgBqX4neQdVtDFdnoVkYQaeXjUdW7SQnpTNU1AeGoPtvPmWNjXBtpVMsQqy4",
  "key7": "3LYHxVz6FYvmAGzQhCyHyMwLnaEnbyVxiPmF1ELyqgt3aAfWudmFKAQaTAFkg1aFZChEGpSrY8vxst5dshi8sGJL",
  "key8": "gC9GJBqR4ingtbrxUj2oFR1pwZmVgvLXsJamZeWhxgN56SC4smGqbR4T21B1NGAJpYef31vvQ96LnRAcyjfpYK5",
  "key9": "2ZiLsL7hTy655m7qQoXHwd9PLDY6z9hWCAwoQQArTg6xfhdDdSuVogTnxQt8PSwYaFDfKZE4PRhiKPxX4kz5TPq2",
  "key10": "4gVLHUcJ5R2GBhT4hnUxPJ4gf1HRfuXMc7rpEodxbVXFXmtVxW9TzcnF15q2epaerbLAADjue3KgSrZroiiEzgVg",
  "key11": "5MC7DAJc63fpvN3GRPB9yHKx5F6JGtJQE9p4rYkR46qQY182sKNE7yoxuREfN1rsub59PV65shFuQWrdFAz8zCE8",
  "key12": "5qRu2RNJ5fnJZ5bPoHdN5etoVmWark7Pxg37V9EBo79HD7pTc3HL1YV7DcxdXfgneKvJVgfEyAynoUkTDZwAboBX",
  "key13": "5VLnTwdYQ3EzGTALQZTZX8YwkCsGVxTU7W5EYRGmqcWvA5aD9usnEzmMZ9z8PgYN4X5JHhSUSWiU8KijHnZLr57V",
  "key14": "uNqz7E67BstVehnT4RxunVP9Q35R8aCNTWBg3czBewSfrWmiBhZL8FiAYtXRvT4pDZ2P13vvRkTTk6F6PLtd8Jr",
  "key15": "etUJrkFoa14yJT3F9edNbsDJUtudu8HbYGWjJsUwSDaC9nEgUgVQkawkCtGcNAN3z4nYJYq6H7tkwYWd4K11Qqr",
  "key16": "1XhVD7NaEZBqhqdWSvhAGHzgWdkgQvKNUTZZoFF9egB3G6tXqLqPPsANi6b3SsiPB8CNhPP1E8bRKTPJA1ytuEj",
  "key17": "232d8qanq54rrYrmciMz8kHSTszUEHJLbAuoJdf9rot4Suv9PGXvAjxKqirwfPPcTktLdxW55SJ8tFhLfVenxBcp",
  "key18": "r5f4V8yJ3bUwkcHnRA3QxZFRmSLJKgHTLrSPw4vGZ7bvFW8AVcwoGFjvrYE3YzZTHyz1YmFCzLiZKva8fBBCiq6",
  "key19": "2wu4DrpQ5AhEzGaux38uqeSebg4SJ5NcWmxtoa3wNRC2pEAzL87ynZAXBgb4Y8xMyF6c3qsrVYu1nMVMvszRqVeG",
  "key20": "4Fy2dCG2dG5c7gpE2yUiEzGF3hm7f4pGCs7km6So4wUgwq351qGejPg2VxfD7DkNbGc3bpwDsDx1HMj97s5iRF9t",
  "key21": "4b7UqgNzqEjHFN91tbwv6vwdNaENWtwF8VnuGuvPE7wMm7Bk1d761yN33kyR2Estgwz6W4YycG9zrac3DNAPkbtk",
  "key22": "497QWJtMZUodvRdXCnps5DfM1PJxbxPmXc1Usc21KAivKjsEQMsvoDXSFxK5fCaaUoX7sahKLWc1rnckEGmpAJ5Y",
  "key23": "4QVxcBKxTidrE1Y38CHAdToqvAyFvQS9AjUkd39MdTW6uajs4hBYrAtW77MQmcWHfg1sAUcCtx2YUyYRznnGu88B",
  "key24": "3LeYLBgex8tUSJcsWp3wiF7bquQgMd26XNAdxRnhhbRdjWKM386J1LxECjXhk7wr2pKotiH3SzuXJ47jfDenjhzu",
  "key25": "qA9bfdzi4jVpWCvhWttytappg9oE5tU3YjfdqgfpvPHG787f9zmTdUB1ZWZCgUQgqZubnxJnKjrkQYYoa2pvULg",
  "key26": "6jydP7jaabxZVrX7msUBSJkPzY9rwJTdPhf6rKoRqx32QmTp9NdwZfnvH9qAShspBFAETa47dd65yY3fTGJULd8",
  "key27": "5hSy1W1jNj2o2AnS5xcuQnM7kcXChi38K6aFQBBKgrSr1X3dmD2CMcUGwz5t6UsDaJCD2kBH5vtty5pzZKqfa8gW",
  "key28": "3wR2fntLDRnzkxo8xM97iCZTM6v92JYDZNopb7bP4tX3rk6AvMAsTMxZXpPg2sZNS1iJx1Ck5RRvReRNFXSKU8p6",
  "key29": "5KZrmVZM1gH74Cv7N3ecBALYEMJhGuXKScuStd5wP4F151aLtbFJSzFnindbbhG8hQzyAqHH7vuVmfDNAKrbpDcW",
  "key30": "5i735rCPov44Xhzy1aH9kT8LNSRW27PQBvU2k1F4pfrTvJaMVdkUedr6wMRwzRBV3Si76MuRDpKUG6WQBfdyxTrT",
  "key31": "Akg47kZdrWJYe2Yp9mYjXNWKytoZ3U8wCfrRKM5pwivTo1SpKZkminP5wdgzLEFkEjteM1jWpCwc1WwJ9uc9bCk",
  "key32": "2kKssV4oEcZPUMBZWYnQecJTiexQF3W2obyBEuH72nHJW5NrGot5N1q9ckTZWKF8578Gb5SthYv2WyFouYU4yAmt",
  "key33": "3rPkx1sDy6DrfxWGAFQHxeQmcnM5FYmWMrZzf5JHxVqhJyjcD9ff17ZkuhAAEV1GF1xNvZpwK59bQq8PSeQ4jFVC",
  "key34": "5cv5cHKsZ21pjBE5iZSzqwhmFXTPHY7skxvDyEUs5aVsX2nxydK4t3oaHbXx27uhDaTPBQm7kSh2uwFjTr36VKzp",
  "key35": "3rjRCSd8HCLgXfLqNhJn3KftHtqeeq7R4qFJhU1Kky7pJnXSkpvmVHGmeFeZdBsiCeLu8zb6Kec7pdwGRiJNCsdr",
  "key36": "N39QppZzhp13x6XXt3s56o5icMoKwkmV686Ke9tAesD9ezKDTLHff5LMyyvR26Ck95rybdDeeNgD82QfMvmPVue",
  "key37": "2dPJHLEMNBuZyyPivjtySA1VSk9V52Mw19mv9Tou1Uj7QKZMrzsfovkF8e9pzx36wNUUEqvKyMk3wW8bCWhffmhS",
  "key38": "3bDxTYrw8XCR8BwP6WQStsMXsB2Tm7Qyg5vMmZM5t5bHoyM1nCukm5cBeSggLGY1p7ChWzudTqfas8LVKvKvTW6r",
  "key39": "Gijez27T5agsUy2BnmCtAkfXgUtKBgd73NEyDLWPosA6RCZ6EiyirzU6DutT7ksQhL5DJgYjF8bCtaDYxYnJaPe",
  "key40": "38pom3jHBoT5mHXJdSpzcAxtXagM4Xpf4JNX2Fz2YV82Gss9nJYNHkMJUeSuX18Jiwu9EYdZwjVatGEkStN7HAJ",
  "key41": "3BV21sxh22uK12aEhQ5Fq119jvCFRTpEW5pjrPD1TyRpzVbdizUB7FreyVePi1wg2hFoE1QxcV5VdYG4ASNT4Poz",
  "key42": "66gZHniQuAztCYckeyGR93Sr5MAuVyaiZgmAvcet2ijVBcpLp6HZreAADp6AUF5bbHadUHCx3r9qRjiv5sVRKoro",
  "key43": "2KdBUeJBcx31Hjm9i1rZfJ5MeVTSyXwZnekXvXtvqfYA3YGg6oqMYxGgfstzRmu16WjGKypz1DU2iiARTYHwrawk"
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
