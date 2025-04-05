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
    "2XYVKeva7DQZ9XFSFWGEmrV5hjXVxVsdrxASaMMkRum2zDQBqm26ErbY5uEnA2EGt4mwp1Ce3DPrzzY3ZQVEn2VD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXMesY4rXozzeuKmgEGT4GzaMS7YqWpqPz25fMz9PoFMdzDrDW1EkP4upRLyagbKFwGXzQJjcTjPpYmnKN8TVN2",
  "key1": "3i7MDuQEnpNpBksJj9pC1EwzRmcptMSH4B2XtMayzEfEt5hYZ3KCZog3LjTw7jbXBZET4adheaH2HVNPo99zgL9L",
  "key2": "iNn8gai4fogZH8R6xx6rLxop48bMtmigr5ekYXMkmJGvbfWeQ9HQTu2cezVsuy7cQPEPSWnz8VUh5pBY6iJcdR4",
  "key3": "4K25dh2gGCjQJboK3kDBxtRd8sPTbbyxhJgdYHn2uwiLbgQzovi8dighD5KYKa6cZzcZWesUHLNenHsvX2cVcy4k",
  "key4": "5XqNMy7zugiMRv5qWmqRxcKvezPDoTKpXKVPA8CJdANed7vjuMrebkmYQbpEsGc38CLmuoVrng84h1Nmt25P97bU",
  "key5": "5izofjunEfLgaFSLzH78Quwcdacspk5skZb7cLTt72khoKYKHKufsycPx67HZBEvo7uVYdi9r57jv9U7ygjPYqao",
  "key6": "6GUTf3RCz7JWjbXCoVWKiB3z1oXo15emeEfdcvWm7NRdGsMsEpfSbHAFJB3PqfGNLBG39wz51g1rgDToeeGdToL",
  "key7": "4V7utzdDhe4MdCjWtEQrawetxcv8gQE4woKpBr9Y4RUoTgdGLcqRgurvQkFUJdH39XpA7wDDvMdp6uLk61dQyMgC",
  "key8": "5PiR9cC4wQxhBJPkZ73N8MU87GDaTAYQsdELW7BihLYrYhfy3XcwFmBft5pDrmKwXNfNpk8ye8Pa2FS2B7VXqbzo",
  "key9": "54KkAVgqcn2BVVwVjkKkVokMhjuWqRaRqDv9Rhbmm12kxhwzsUSULVrTe7H4Ask4TKKvVeXcHT3UNaibieUoget",
  "key10": "4LQEeP1mTLzyEnuMuX2H64TKK5XL8Nz8tyF6F7zafrmveJr4JUpBgQmysRty5J7VEqxzJwbQMmGoWkkHihU3yCc4",
  "key11": "4v1DnAGfeWKD1EpJVd7hZMmqR28FG36nvQt9RpFgj6BdfVPSiiXmeSVS4hngBG3CQfBZLbGtiLh41n5M4aHMS13m",
  "key12": "3MuVhk2jp1mN5qTpszf3Atxnt27oH7Hypoqk2yhXtVegZ2pwkmpy3DiExAsv3JDuGgvkwdG92DRgqZcuMZ8Z6nrD",
  "key13": "46SrsXcWqKAJZEbDczmgWBtXX8RD1b3FTKMwSszGJ86aaawnfGATajU7Bw88ToMMNTHg9tc2A3ts4Uj2kYfZ1Emv",
  "key14": "tsUYvTHZkiapK48KEcrudjU9W3qKUA3f3RdrqSeVbb6FdSoTRp3hjaFyD8G6qqWzpodZkzfBVSx57LQwFff8Unm",
  "key15": "nBcJRKQQRAVeS38X3S6fvBeXdYjJg53PoMkUSyB21Na9neJvR2jtGekNn954NyDmHjavhTcnPGLpdVs9TZnz7Dh",
  "key16": "4GK9WSgY78qtvNuCNnCVz7gotRHNwfVQQBKmNLgPVwv3MJoc8vcF7Kg8sUj2rngspy8D5Meu1Q4qEhuHVJkKaB3n",
  "key17": "3vr9veQm9hwKGcWWNLXSiPT1WzzFXb8BP51T5idYee4uJ96kBQgH65WFaU9oczRBikDPmTEM2Epy3xsQ2LCErFPF",
  "key18": "4o65cVLH4vAkrajbpMyEwgaRtUundCAcDxctc1MgUCkYW85FGhGMckJHQXV1sThRJ9c5XR9Xd4uqXzWAFGyxi9r5",
  "key19": "2hh3ggruswAE7AQUVjiVURjKthpCSr8zrUTzyGFwuTFbMJeiAGzoDqzioSHn5AUqMZhz8KBKomDiZ9U1whC1ukkc",
  "key20": "4puoqjt4cVRUSwgKpb7AUA5bBLkdpTKpJimKN2xWvZ92VsaCWggZ8vmds3gZxnizrV3QGumdKt2zjn1M7Nin4P2t",
  "key21": "nmXfbiRCuS6BAdGtykrsBKYuc1FN3wMzNeXLVpPP9wbEFvDZK734gRfhFSXNDhxncgfhBvqUxnX3Vxqoe9R53Ax",
  "key22": "4R2aPYaH1Aauo5TJfP78opQhyp1gWveA8smXmVbUnS7KqK61j51iEF4oEEJ34pEnB3BJYE9zEL7dN5FqCQvqdsWX",
  "key23": "3iAqYaF79U9i1gbNMnw7RdjmoARuq2HFxYkEv1KZ77YG9bxFdDMpBAEHLaQ1ig6t53Eg1VWvLSg7nF2mxWxKzVMq",
  "key24": "39WVcutDaEwTKR421ZnB5NKosbf9QLJXQT5FHmVFztSWaQVr7SK4J6Q45y9VxvvWyJZNDQvQJu7foA3dTPUWrGUw",
  "key25": "FM5RNfShEEXGJ4uE4xNLDMxQZj1Dasb5vMZXeTAxNyXGpJTXHJY4pKSw3kaQEzJUZiPuRkE3WFXFLYBvuRBGxs9",
  "key26": "4YU1EKS8bCdfcginiuCFTJ14pqRu7eGmtCwz5K2bvkAiSqm3VeTPdSejjviz1C56f6ggj4dLtkPhGbHRPRUuXLLR",
  "key27": "5JtqTpu2hTgJHvTzUuNyrhWnXM46QM5UFVMUbJFoSLH2asvAXS6YUDFC51HJse6pCGMYxQ1NkJNV7tqbQG3VdTu3",
  "key28": "2xMV3ap8qwm9GeLbt1d7dFiRAfUmEUD7VgdyspVXg8fDLsE21fANTk3WMpLMdf5SVYic199yFcvzoKVBbBp7Xqdh",
  "key29": "28b3GhkmZsKJL3Mh5YgHkJUZA6Mg2A1J26PbRNSkw4BqnzVA1NnEga9jK2iNpN5emvVqFExHUhef8BwmVVsSkFoB",
  "key30": "tRQhYY2JHdPwNqmAGddfWNss6j6UuXJic8EYeBdDAc4N8jSZnZ2nci545p7gTVmNKesvjif94xCg3YCXP4mVv6C",
  "key31": "4AnoGsZ5aKhuPB2W7vvuc5YtXn5YWWjByBkhNUcq4BfY3AHoc1pUA3DPPJcJ34uxejPL9u8nGyb3b3XbtPaf9p7S",
  "key32": "53S4JRevgMY48r7CVCoVtsz3SUx55148EeQBhUMpewUSYaqr49wL5HdziRKNKJHBFx7yy9V2W1fP8YeWtQH6huk6",
  "key33": "2iaHxTTHtWtXk3bbF5r4bT7DsBZw8bb9ZrxjYe7243b3NeD2GxsoU6TEdEJz4QbqgKhbbA5mJewuNVhrQwvXy6RB",
  "key34": "5RGQjEmdF8SNC8dJAXP6MG1qde5wsnQraUqNFYdKVc4FcsymBg7JacDCSLRXLxGzqMvs9g6Rdj3eYF9hX1w2GDHX"
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
