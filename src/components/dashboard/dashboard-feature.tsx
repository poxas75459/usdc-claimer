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
    "39sbXL8F9J5BBrk5opaNwWaspTvXfwcH48eiuzK7Z3wtChuBwzogG41Y3Xbfm1BHEeWQqQeDi8MKU7BMBP57AU1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JiYBBptBJsK3fYLM7JyprGh6qAT7gajhoaHNe7rSDL58zBZa4jUFeVJjAnP3Gdguq6qj1C7mYb4U1BqhSnH1eSM",
  "key1": "41GuPMMxYvMrEriPV41KhzqxWgh9wpL4PkYruJWpmDHjpsoQTme844yAhq5ZY1GCuL3Up7KKLxp6Cqja6wXjeCts",
  "key2": "4D1UFtfki55EgXz9XaN1VuNSxvtKCjp5tVq9mcTpFN4HRPiH6CScBCeC7HVyZsYdT5iDwNpaVHyiE3hQKj5DEAoM",
  "key3": "48EPbxvprh7DeSxPu5uhW4Cbd43CGbZcnaWygLnAP8GjdiABgNCjYiNtbJcR9CB7pCMGkREsRcLJzRKCq25bgQmL",
  "key4": "269qAKsuhazj9S3UugyRnjuvbUJF7PLba5hUhyVSWKTP9tDSYwcbBawi9qco1SD2gwkwPvQiaHncUhnV4HS5qXjt",
  "key5": "3zbMFvfYkvkCBAYJtvd6EaU3TRwWeUptDg8nftwqLn7NjFVzMJ1hTNNrHjYwqrXWWdY3jwkpHRTq4umvUAsGQxMo",
  "key6": "5xoxTTqKcq5eUi7YUiEoJ3LS1J7CtLNEufC1FekWzTGdUgb9tHQ5cgKebm9MSvu6X5TfWXqowAC7rXtjkFsNRezm",
  "key7": "51XXp5inevtNZBTVERLtEkzR8eTpraoLWKk6T4aDoP7iroSdMTZryM9HuDC7F4Qmyjp4P9dWq84uQP3npT3csPN3",
  "key8": "4d8SaYnfZZgL2Sx979GNkYmX7yQrnUv3xU4EzHcXntMi33ziLrPFSE8dYAHkZH14UJmecgCSZCdikNyrwPB9vHmK",
  "key9": "2LUigSQ7nY2XSA9JpRCiS1oaKPb2FnJviGjezePUWswhLZQhioTTk7wdgfcrpXbNxTcbNFVLnhDF5FAtCJ2pNr9V",
  "key10": "3y1yRHHtpy3pkZUFMite7fM7AZkMQr7L5VAKZfqSvAr9zHnh7Gt2WbHtn5JcN5SntM3D1b27qEN8Y5PXrCXJwDHv",
  "key11": "Jj2be2k4BXHGW7Z75rCJCAvAzkXmvfvK1PCeA8QyabeHw8fAcjKR1zoqFezKMxKVwibfacwzyVG76McFd7dtLuT",
  "key12": "4BsCt6VfGUeQedJf1cy1hV2GDxPVocHAc23PL37FV5Jm3NefR7LCzToWceKwbmN9yERLzQmFja2UwBe3meUZa1yc",
  "key13": "2Qq8rydiWiMjjASVs1P4GipsYKKQSAU9CEcGSQ2Lbr1dKrfrqVCNh8MovYwFDHWMkqXsiuEm9L6iv1cYXgESAPjA",
  "key14": "3YrD6h6hNiAHKx4jczfYGYVxntCoYKcCcut5ZQW1mJMWkN3FNefBBLfzZ9YV4XqWrGkAXWn8saPzoHJnZ9q92XiZ",
  "key15": "3s5AY5bh5FchCVDfaRcJbAMwdQLZzZ52K6ZpTAGv9dBLJEHj3uah4FvDt8VJdfNnCTX9pmyzJWEi9ZvR7bNLbwYL",
  "key16": "2MZNw19MyYECsVaY1vcUe76Nxx4VA4vy3JZh41yQi8tru8NQdPWUhShWDGApFLYuvLNcnp2yBMzfyp9j9WPwhxvJ",
  "key17": "5gwGJYsniDFhx5HBq4anf57XenzPwGVjrrJ7P6tB9URk1XM1qZjfRUs2ztNjRbcrjYjs7pQGzyTKPGCRPq6aU6G8",
  "key18": "5cBipLsUoxbXUCLYGnHUtnX4ZAcD9sw81E233zkEV22LtReV4Xhtkxrw9DxTmAqZie8SzEqtAHh5vDhTPFBQQaqd",
  "key19": "5WxXN7LBy2SsmR8XQzqHa3XWvMt7a3tTqPZGzUVQvtSg5yAFcwE3kf8L7cYQVf4ikLvxpy8a53zeWYhbsDyy4dNa",
  "key20": "39AnQnhGyxDwGrpvTe71ZnnqoN65shfeWro7w6gUKfSvJqWiAv4vgmCwGF6kXk15uaVKarvDmkDuoi9jbrDkFDDK",
  "key21": "3dEscGvZcDL7q2ZSmZ9MffoV3Ahbr1R7jNnf3cAZPcj9ZwHTk1mHppaXs9zQST9NNVgTgUxi2ci2bLHqeg1ag3eM",
  "key22": "2PSeKKt1vqSwB3Qat2BwFDz4oguwdAKEDSGgMdKP2gGWZH8cVTxWL5fXJPDbzoyPXvD4bwyKrKcGG9qGMHL98Qv3",
  "key23": "2W59mQVU3CLnnQ371cwihPedEPfk8Rs3JEuUrVqmKEhaUYPMm8eVLFwkptPvY3H6Q87RGmDxLANg5ASLZMYoBHZW",
  "key24": "9VAwBH1hmxdRyrEvPY5dfQAMvS3nQZ5sj926xX98APRRzaBL1x6kdNMmQcCDbXo5K7dnbFEVmA1M5UULsAErydh",
  "key25": "oTxzWTHT9DtXXkK217r8nN5WXez4Jn441BZnQ6sXsNG7znTw2axGcdMR8TdB4Txy9bm5VhD1FeecSPpx7bPsWT4",
  "key26": "3DUhfLhG5jWobFbPoJrdS5G75NnGBCByTXnWrPyne3hdgRi4wweE8Zpvo6HpfkSFaHKecBjkFyRaqZNdyi5LvonR",
  "key27": "NiGsAJXVBzGzFPs46UtxDQMBNirV5XbvaF9ma5W3c6AnEnUUym9UhJrXvrhmEgmneVmc5iQsSGrCRi5XqF8S47j",
  "key28": "xB7LSk2iR5YsDCf9LBh4NqPV9HSqJQDVqAgX4219qXjsUYP9Mi97hGdFoUzHGeRBxQsNFFbpPuxtmv8BFAY3rVj",
  "key29": "2szFzBxF55GAGnAgv5yAc5q9pjpgPsFGxRZjhvSqUyNf98jHkXYPhdCbqhRujix8N4w1L1rEt9WmdLP4cjDHW3Zd",
  "key30": "GQjNc79u4eXFJ1LyCySQQURThWjkeDkaB7yfwEeVJrc4E4kbjYzweDEpt5oGxidRKcbSMgGwsTAA46aDsUFE217",
  "key31": "2HU1zmF5dDwMNVpUfo8hC9AuiVNN4pq1LY9zGbmK3xUwY7F27B7CV3hnJsRtB5Zi4JVA2RLCKau2pJbpYSyaWDE2",
  "key32": "5Wi816KXzwLM5kbXSinJGvjRLQ6N4ap8cXuSALDWhwCFLEsWDoAWe12CkdGNLAxmCgjhrar1F34k4R3EcUvdik9M",
  "key33": "2ZCnBUryvjFXBaPivSUffS2q7wG8URaMe56ExSBkE2VzPrJb5Q9XCNqc1w2faMbLzh42NVF7tUU7QvFaR5a3dchL",
  "key34": "25WL4PQushsxe4XntHY7msPJX5KJmhqtDgLnyx7BRT258NrQFmUGLrYdQGWFffJjvT9heaQU6CnpqdeXeRCsvi71",
  "key35": "5UQDTmA3picyAEuax3k4G69KgVVbdzEiVf7aT49pfCEMm4LJUojRskiChgVUeq6CUBVzBAbNkhUWns4oZnBhJ2hn",
  "key36": "5BGX3aXjQowrviAEo7VbM8uZMBtz8q81UsThULgso7zMjSoKsYKfntphZ6j7QeGNJ5oMLA96PirJ3yyv2osVWA6H",
  "key37": "5o8DbTUKyX33MLocqWwZMks8x4tht8b9WQQNsB4VY6bQim9M1QmvZ96vN1Uh3TZSZA51zruYk2EwabZC4s8jZ3op",
  "key38": "5s5obPhHPSSrdYgtWBrLH35JPJr36wsky9v749j2RHx5QV83RcyEhwXBpUmPdK4iQ3xgUitjtLA1E9roVLfBHEmi",
  "key39": "63tSGzX1n96ZZ8km8ZY8qXCkDRo5BuLvCNzzN2DMWym22XPRuQZsWkMh4mP1v3VHyfG67QirxJ5we5hpeBJGtopb",
  "key40": "3pfvEGEiTLxqc5Ccy99KFn3uqt3f6DDgUbhXFykdw5XuSbzMVSpp1PuN6G9cXoUf6y3Q9oqqb9nErExb4AAz7jnq",
  "key41": "4iD57aG5JR4xewYXU4txFg35bjTFfJjQroDuSfgqTyniBrmTAeHkP2zGcLhvDFXU2Hvrq1DGQxQSJubmye3CzSvE",
  "key42": "2o1UxULstvZGF7tsQgHLh5SywGgxfTB2ofGaRsKC51qRXLcjTFhHCba6w5jW956qJiz6qoJy3nPcv4kXFLb4sdYX"
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
