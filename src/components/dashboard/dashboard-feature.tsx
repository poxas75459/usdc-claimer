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
    "48me3cGbGgZR4QesaqoFaj4v4PsfxK16cJPati2pubSSUpfFup7LU5p5gKsnYsg8CtQVWT1VTAV9as9EzuojwsCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9vygrx8EfMLvGifJuZLqhk8s37jVH5M5JrBJ8qQjN92McGpKkwrxA488N3ySZKc8BgqKXxY65AbiC2Gj6scuYe",
  "key1": "i8f7PDuXgE6aWPfTJKUeDAXN7d4yJHN6K36k86jzV6tFdQCcRCbTdV7f3roCwf3WPta1qiE13U8bhNUgWGwrCc2",
  "key2": "3LHpyhARkNwUp8LvmNVfuirFcBg8nsxQkDpeVwKfZUMsW1LF5mawcdyge5mRUeRpiB4noqVqUeGGaAJkw6urJY5W",
  "key3": "55yu4HEy5RZN2ea3ZyHCraM3gfp3AiVDaWsj2JnARhmdTaAGF1xxYmqYLCwMgf9ne3n8dcbt8HvF3SesTcFLoUGg",
  "key4": "4vhaXt9rPqUoD5mjqqjXDjSC2mow4MxScEMkprWAyVw9VwtbNHjLJF2zg54NY8Zt8bRxyXpAW8RNyecL3PzNZpXf",
  "key5": "3evVF5Wo4t83a6iiNMHskVTLWzqiqw1CbCCd1H5EUJAZNKkjHomo5FGFakmH2nsKxP6ApAgHyd4TdjvXJMheStdx",
  "key6": "5DdphmpMjpopuUpt2q84GHFVXahe9Bu6D8qMAPPpwEc4Aj5xxwNHwJnLZ4oMLgndjT1Ghvn7psZr3C8xX6dd1yXt",
  "key7": "vwNHdLhXZAn8LJa94vopuAJmPUHMWLvqhZLqW4gtf481yMfqTinr4oke3PkCf5wuWd5GeW7VTEgkBeddgKBNof9",
  "key8": "5ruHN26CTr7gwDsCjuDAqy9h2zyYgfKCZzQL9Uoq4nDvCV6Hfg6ZawYQ6LhMHj7rPZHU9hcDvfrbrjm9BUvNkvvX",
  "key9": "3oSLNh4qjUMNZ4Fb7fPDwYWBGJkZJhuyBomdsEtWDKgz7NowNcnVCsxj3M4Ujug3Jgz8neU3UxaaiHwesQUFcHXi",
  "key10": "3ESVyeTULqe6fHU3EQRzKPjMghSJy5sWS3XLgmHWPy4zGY2tuvmANhAYur6udLRUUnDZZ45imNjhPiNACuDwGZJt",
  "key11": "4yCxzwijZuNbfv7BcgnhC9N5bYU6w2vLvvTgSpaak7LiYGPmjHTqLyvEuFvS4oWTVByRXav5ZgfGH3jtgZ9f7okR",
  "key12": "5AfYGuhn5kU9pv4a8ZC7pwjQwbCQThqKSe4YSi8V3p35EZYY4EJhKzeeR5pmxbQrAEZjrpDEu6ofcbh4HsQt7zdf",
  "key13": "2xh1ZgA3dC4rUi2abxmpYkdh3cX1YSCLh3GQPjyCneRW9omCJgowLt55D8KdDqv7nn6NNLvCTEd4j2iBJu64tMAD",
  "key14": "x18ApVRnMpzvtx7ZcSVVojwyqdNnPiMeU45syp2XZZN7hZKpAXFmq4r1SKPoLA2tSuV8aKNB52tg5N952yTcQL3",
  "key15": "h5wgfyzBSSe6tsS2p3Pw8b25QU1rDHXdXEfthSAdVQ8XGFbadm95AkXpS1Ae8J1Nq1uUYb4xxB86zZ5k5LfHqjF",
  "key16": "5ermuxKCaf3U4MzVJjQ2aMFH7BePnPGS6Wd7y2sT1EVCi8sMvq5D4QcBnhDbRhmqasqbPpXE8WiQaZUrkF8xxkPV",
  "key17": "4kgPxpby8h5c1JY7cC6rP1W24syq8zL4b6R88ZW7kv7iExtcHPRfxXCJ5CAouk1b7dU7eBzP8esiyv9HAyoqfsfU",
  "key18": "2CNJWk5wbCtxvtJJ77Y8yoGggfiuvgYw5yic2oWGDREfUiwDcUXCHjwXNjcSUikMk4VZy5JqpjtMTb1Tfm5sq7MY",
  "key19": "Lpjg97RrzmYP5VAdzknBs8WB7dCdR2tNL4NLSf1qhxCJ5Rd4QmxMmXg3Mq6s1xMG3hGu5FLCtWopv1atoRPwivW",
  "key20": "2YVTKn7RacBqhkEsHuEN6ZkT5ReywvfsfkDNQcx228pc1i7bWGNGJN7GVYXwLLxFctA2Nief4yQGkxrRTaU4sAU7",
  "key21": "4rkR5sWXGNBt4LszSztKpDTRk9jfo5Qb2juD2a5T31V37gd4avTPBVQVH1dh1fUEBncDqZcsSzV5zoCEoBLH9rUF",
  "key22": "5VGtD6bN1UTLAHrPtUyQahRtuyDUV4wbwKXtBYyC5TjmMPL1JxYkZ3Za1fsmJr7fovHmiP8QTyfiimVaBS6ppDTj",
  "key23": "2kVzT4d75hh8HrgYys3dCDi2jTXFE7GXrQrZy4wH8gy3wmYJGAxKGTQP9jsJRSZkVt7JxL7uFHsm41vBpEFRAXJ5",
  "key24": "gG9HzRzisZmBZ98E37JAN39QFkxTbbZ7xfMVSnubY4EjqoHK3xRzzNhCWU2Ve77usvZhjuyGnkDAhnu5tngTsC7",
  "key25": "4YcddzwsAG6dGeSPC4rF5AuE4NZwuV4yjGqpkom2DLeAJUXA9avRnxCFZjcm71o1fnPYsQEbTaKh4rnFGptrxdiW",
  "key26": "1CnabnXERLKZmFbrmwv6V2mCBCSDZe3oVoKDAj4mTzyZHakXVn7CmbgFocB8oGGWJ4P7oCiAubFwBpuQsTUWEfg",
  "key27": "4eUuU5TJFGHvfrbncAg2kvyMYC6i1AWjoa7Ni3fmt2EdHW19Ey2d2E2Qa8GgmmqeNsNjbJHyXsymLL5fctYkgJBW",
  "key28": "4Cf5V5UMtoWdxe9SvwxpDqMjtDgdq5qi5KmJBLTyxJnf8KQp68CoYdmByP2LkS228mRMAABNBGdxcPg8txecEepr",
  "key29": "4crfLp6p5VJJJkLGQzYxDfcgahWEDKdy8aAVcheU5njjzrmnUffaBSPZaKJYf2E4LqUno9cj5FnTHD6e7mzvuxdx",
  "key30": "54UtNJdZQ8rdoJnMbyehjh2w6AGWDTL8dKdyvoumWHWR8uoTwg5CV7ST21AzXPeEae7adYi6FctCKcY3hhQbtyqy",
  "key31": "2uM4whLpG1UFndMGb9JXmUZxh8DTWJXAbUx4QrbRSUuboA74mBuW9cuJs3EkFtXY2EFSKfiCHTwK3X12wAn4Q8zD",
  "key32": "3q1wzQ5TKPmQq8636VQxNXevLLY4b7wf1DvoSJhPsKJMbxxFJoq31cc12iBkG3t6apgmR54smsPYJtaF1aaD9V58",
  "key33": "2UMm6AGb2jB4NnkxRmJkWHvuS9ApWPKd19SEyBcPxtmA74BfYP18wKKtoMiQJ3qJD5J47nb22QrwsmS8Hv4KaN8U",
  "key34": "3DcqDXtW9CDPfkr5czZYHY6kvpaRYk36x6DZFhC7Pxm3B2w5qJQ4staCDAaa3KMmbcVVBTAZNwHbotWFSbaVoujy",
  "key35": "5cEAqwVjeLsBRPkWhXegZBK3M9LEubd87spf5gKdJRu6CryVhjoSTuMf9LBtJ7oXwAeWtkYer2jZPkrdwaMiPnj5"
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
