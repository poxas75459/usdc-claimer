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
    "4rXDjBYNxFXNLtwUFHdvU4xFLjDjzvAqJt5V5nQzbeJXtePMN4LLq1QBzfnudE2Qar2rKiZXDEGqRcXBkrjGSgVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k9Sv1DbvbrdvyA1AmkefAiu9pNY9SX2LzDxUz1GKJ43SqF8ys9kB5g5sZFHNEsxZTwuKTFontBH9xSU2dmpAoUE",
  "key1": "4FWmgn9qpLjD3bcQ5e4hoCt35Umxnxdir23xrxEvNf4a3fc78vAPxS2Lx9eFgybwgMnujsv5YXJBK4r4Gjb3pXMa",
  "key2": "2Bi8yaz78jJHpW8WkM6McXC7s3ypTCqjbmaEnhuXxyRmguEkZkL92Yhp6smDwDDnQnCvFRoACKPK7iTCMvhCQ8Jh",
  "key3": "41rQtv8bBZjuQZG5na3CjDZDBrxpsW9eF6h1x9j24KUkH2iGmztnf1Qdz6kxoHhJ6EKqqZ4DeBaPLXtxu7GFCcHV",
  "key4": "7hJPZqJMY6NnvEm8mLoFD6okgzNJaKpvdtqdHSgq5r7Ey7F8mpcKZLWfs913TxfqAHuHgXVBzBFyapxm6msRva9",
  "key5": "3ZyFh9EcQiFUoSCnjjs9QBsn3fDLRrnvco9tchxU3yKdVWbHrudv7JySqx9W7hb4ETxhgLNXxizy4gmhoScmbrL3",
  "key6": "7tdDgyUW52cPMGN6MVh81ne3Yidh3PAxRiFSDJVCT8Aoiv2XQQDMTB2eFWvDrK9tsxdpsRuh7jopA5iwJeHNpNe",
  "key7": "2gzbR9YNEEEXxGtBjrsNk9EALA8zEEvmCwZGM6p8J5qYKR87fNUJDGU8yfVTWsWGLgg2TRQFHseZrhs4DTv9xeze",
  "key8": "4RFQpoD1JuqCj3V2sxhAzYGXGfYs8ehQB8jco5KfHw6s7SvxrgK3JYrrBhgX4eeFbFjc4dtmNRbdE6tNzfKHejs2",
  "key9": "62iT9BYYopov6HfP8MiMYxZhKNLFYnL7rGvUPYq2gWbCmpwHz63YWBSLBAcfVo4gXKgsJL98Fyw5Jy7T6EkYqw8o",
  "key10": "LSwgvZ8TJxDQTko8H5bmN9dgFwyii2R7WkrojknrtNA9Y6FD2PTrHuKS3tv5WMEWTkeHefLqWx7FxnkYpNJRmXT",
  "key11": "z5UT5bAiE2Wx1xX4naU4fJgEELq6G99ZZsRJVAxYaxADYzFMKjeLNK7DUMajVbJHV1R7DzyqqLtuS3N9ZxfE9na",
  "key12": "7AdAu1mBLBpCinxpBeLjMNNGQxES2oxycwwCMu4aCLsnb84FhmdYsEWrfZ4EyCcgkQ3ZgKkdt222awgUnCpUos1",
  "key13": "w42t6n5ozYqcdK1R127hQ4T9RG9NkRGnS7LH8YZinaZ5iBNrb841WwcSD8DB7EBns3VcGLuSnxRpvtk5W24YxtV",
  "key14": "5r8v3kJUGd1jBUC51kSnbHjgVxbDC7eX1TeaWoduFfckV8hBDmWz74pVkxNV76N96Ea4LgZwqu8uqA8nMVkDWjiS",
  "key15": "LcuYB27BxNo9Nkw4e8fzDmYQxStYMM1mQTyKEXqMQzFj53qct82rarD33ibkxpNcN3NT4X3ZzJEdYZyExSxCHSQ",
  "key16": "62A4bqtGxeKPYKkGSiEckXrgMJFQZnJkhMG1kbH1im5KiDd2d6r2oCA6hdafVfFxQxPn2tFeWyPZCncLiqEMV8d6",
  "key17": "5kgJSmHJ28rxWAySJ5qHdm1DFTQGZjunoVdGjjZnWhUy7oZbtP8HMAMHssPRtR6WGN8U6mXkxiX3pMcmcYvtvQo5",
  "key18": "2P8J5dFDCuWSc6mwCDA2SVM2YuF9Yac8ZmEMQqpF1h59CKshMeFz6cQju4BZZ4MUyE8FAabEcvwEbxpiVTFYAf5x",
  "key19": "2hphfgF3gQELHahLyAnkDhKbXX4xYssCRrUcZaPTjdtRWnvmKjzkzcZ6gaXwCjcSBGdtZ1N2jaguPnTeoHpeWFBJ",
  "key20": "pSBC1LuHmmhVCsihuAt9eApjXCJX6ifmnNmgQFhZsfxoT6JDXJPBZBAUfam8f49XkRicMovFCKneP66rZ5WYEAr",
  "key21": "41MEjsGxJjgg2KL3mYNuZXAyMZZfR2sGWDzUB6pzCbQhfK9RJP3v6BXdn213omka6ypyqtuYJaUPJzzkyXSH8KzY",
  "key22": "mzKnAbE9MzgByrB622V9jEbLUq1k4u51JeoXk35pshYCN4WV9BvBEB6CPUEe8KtbhM9QHPb2ueSLTMeKyCkxD8m",
  "key23": "5FFz5WiHkirQqrq6jcdau8VnMtyPHpJH9HWhU5VYo4MafMQD2F3xDB1bAb2C8W6Ya1xaL3BQe6nRhqrhqxEv5xaA",
  "key24": "4SQumW5dxV2TeHGcxgFb2a2NtA9r7J3G9FyTHSbhe6ZGxvuMux9SwQux3p8H6HUcbB2kskugKgrMbUdiTc2wGAah",
  "key25": "3DFevPxfqAoRqzG1MoTmMr2siHXCJZxq2QZxpNCFEK1bBAM8qmGHvLn3FcRyNG82kduqt58CiQYTH54h9rDBfzDM",
  "key26": "5DAsugFTfHQyeuSSdLEh8k3WxYXohMB5LddvJ4mP1sgGhb2SeU6fkMw4pNyGfSMLibCuzYpXDsY6GnPwVLaCPZUp",
  "key27": "4hf858QbYELjdLBoymSd4x5EyfimsCQNUPzbzx2AwJJyFrmeznAfX3Yj9q52oWVXKxHutzqbiM4UMFpAtaPZbBtX",
  "key28": "5vSNoMCKJ6P3oBN7jYGB9NpeBgHmDV7YFg6R9HxMB3mVGYgse47957oVXcHDezbyGWxYhd5xAiNUbX18aKwUTvUp",
  "key29": "39rsLvckhE5UXP7wYARQYxxX9cPRU6UcEnaoYR7EJDVnY7wd5Sr5zWT14Ek4jpE7nHsZCd6dxkGM2emQUagRFhbZ",
  "key30": "2hZpr6gXE3pSVqXwi9SRDD4cfbmaD9uWnSxVpUumwN8kGWTvbDDSNdaYr77KMLWnhF2Qp1waWaFaQ8ctjSkH1vsT",
  "key31": "4FZbn4MFBgoo5YNFNmEuTP8tFeMtCzu4hCNLoRiBBhPzUfywg8Dcjx4vmswtwDkYTzvQk2qvNJ4ngNzEDUG2oJiU",
  "key32": "xDYJ4humWCg4ER6w6UTgu1K5hCMpwhF8mCEzuNxSzmy4unWYxny2VWmW5dVqLWYxrwRk65iji3w96v7Ho94dcvy",
  "key33": "1hvYcNBTUtmgek85KJBzbEfZFDRvZg57J4yo5wuAFYYi7fusLHzHUEu2Km4r39mNB4xVDg4MYStpfy3B8d3tKVX",
  "key34": "5kCdmCsX11ityh7g3ih296KUy4b8gVCr1nUaMK6menhXpWFrBUTedWV3FtjmMMoZDvsPKEBvfsPvtY2t6BQSMEWB",
  "key35": "4v33Ep1BzE5cN7iYsHo8VUzWLdXAX1Qf2iGMdXRKEGLZsVy2wBZFK6DyhybB847LLkXuH58tiQ4ZNmAW37q19pRb",
  "key36": "5om4Z9CWbRFsB9P6toCqwDKjtD7P7mh821Db8NvfBTY769bo8YhU5UabmxS9vbBY6zt4jSpDsnYqHAo8hJXuSRpd",
  "key37": "5irpj5QwHwvAcLeH6FkiitU8A7FHfRVkr6XMeqywapZ5VFN7UUJh7U3fY5TZfpveQw44xuj4WgWPq3Au1pkLLPJD",
  "key38": "5yCf6HW5GmrcPDCojDpS4DZoz34qa2ngCg5KPzBwaFqhkAy9LVUzvWaGnkVVrJnWrRFcRGnH4rgGrsmzarHKweiz",
  "key39": "5D3gkdQgAUX7eQLGrjPhqPZmetpBr1PQgUVPA7GJEjDsLwMY6tKUdVBS5LuejJsMx8r2kBTPfmG2oSG6EDoyYi7g",
  "key40": "45zzxTcLEU5DeUKzrcBSmPXRvA2WUitykZ5X6uHpo6ZxhygGWU26cpy2j97cHQYWpyYQYFGKWa2j7Srodh6kSuUb",
  "key41": "43agKwFPMsGF3HMJ3ZWMzpRYyr26zheDachAQAGgaoxg4LQ5C4LVhi1yhVcAzajKBVZxeo4uY58VUgJqbF2pNJuX"
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
