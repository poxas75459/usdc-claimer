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
    "2hTGzHr3mMMYdYYAT5jxZZ3AqhNu8xadATKvKZCpGU6tLx22Bi3Wd1tcTunBateXk6RShXPEsEqxcNBLfMbexESX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2CbzxnvB1ePVtEdoJ4KpWT3ukCe2d9JbkSpByLk31VmA3QEjsQEpfpyajHpqj2R6jKJqH5Np4e8UVuA7WVNjny",
  "key1": "4ycUuShnyPzEumws9pDFTf3SBjh5z7JdCCYQUKeUdhp7YsAeybyfMobwnsYrNJN7FtEEByUFF99iQQmBFwuRbrRY",
  "key2": "2NFuyanmdVRv53DGfDZfMiLSsX7VvdZMGSMGVbJDYZNLThSqpt1eJ2uSpLP3LNb7P2RQhEs1ivYLJKzCjBnd8Bbs",
  "key3": "2ULyCSorBBwX5iCUQ9pU3fLHRkZkVRMLYCy2GAZPLrK7yjSBBMyyRkgiQJC8dNTXGvTwQBQtjDstFKi6EEogutqp",
  "key4": "4Xxt7jPn8JLKv3hDbiWuPJxvRJvHvtWxFbXPko49PRhKzRUYxf1Ek3wF6eFr2mdiNpNgwtZiHujU9kUUiUDrD2Qa",
  "key5": "4WGrxwwuv1niY6xqakdwMQbita1oiFs5qvc22eM1UnfJmWVNPUHWYNprrbG25Vn6Xbei5PWCTNhfkxzLfarPzbiW",
  "key6": "4Nh2BQfyDwyTVDWiVjtvYUUQHJ86f4fojG3Rdxh9mK1dAUMCZ8e8V2V3GbFrXSwsdX4RcpN31tnHATc5fGc4HEnT",
  "key7": "UxUcvktCU82zSb6eZUNMwngZ18h4mPgf3ACzApppeXcg2aEgMmw6oxMEJ3CzEEF9E1BEpsGCFjZgTCvvBz6gzvS",
  "key8": "5P9Wseb4LwsZX77dfVL8qjuZAQxLnJpoVTxxa4K1SkYnNtMQmZ2c53VDfd6VYhAihchho3Q5dLG6QTCfPXmD1xzq",
  "key9": "5zD91yYpXpiUs8Dd7i57uYKBdPVPpJnNWGpaqPgvRR78WHXhTPQL3EGaT39PNPWe81LArkCUdLhE2jAWFJrYYTbk",
  "key10": "3tR2WLXjotReTC7fFSusrConC82231XHxjtXGR9TTGdBnW8rFBjwAzcbm2Nd7wcP9DVF4BNbRzVcRu5ESEwgjrfM",
  "key11": "3t1neTf2qKLa95LuJs2eqnTpTQxFi68mrWWCfc4iwLSaDowVzXJxuWGSyciVkEfRPpbG2qckjQy8vE4e2fpn54w8",
  "key12": "4AtuCCzUm7vmueVz16xeSrXRQjz1pPcyftXLopp6J4BwP3Ph8bUARfgFsuQ8Cy6fbaPc5vEpwmAhwpi4msZtPE4K",
  "key13": "4sbqTwWVsfdVaiuGjj2ED5FPP6S3iR96AzCvWzQ1rU1W38k2afrs7ExqhGvyupgXn6TCbbX1pM33fbqPXHxkdG4d",
  "key14": "3XQChF22UPGwyhgCzDn7mrUryAvm85U3yyXnxgUxofLVMiXR6bsYTvpfX9WLGRBBT4aLm3xu5YugpaqNiTqoBSd4",
  "key15": "4h4gvRPdAysAZZRApjkNyUi2wVCRykALF32XaJvDG9MEsHndtL9H4kmcTBY7cMcBdcY54tf3HhLk3e1FFkKFKPXX",
  "key16": "47T3nChRUQbeXvrXCn6JzkTm3NEF6FQk2yuEUiUCRHZLms3HUNZX16D2z1zQ7nELe4r9ijLVAPuDiSY75b57T7VH",
  "key17": "3CcmHYSgpo3MAM6p3mXRsRmNCKNuUpFDLjJ6eP35TWndDB8jtiGtYoRZFqRG99WdnSEMY4a2ok7u6T9Ubp6mpdUf",
  "key18": "5NBEXGiKBN3ES65BenJwJ5qqUVxAuoeU6MWwUgudSfSoQfb7ZiKgHPrj44EmigU4wwi28RLypGCRPBT9riLngk6n",
  "key19": "41cqYN9Bka4FgegwGVTzPveR1vNMouD71xAuvmWNf9pA3gt1WpsM1jjxgY2766AHd2czZgtngitTLWmAJvGx2qQj",
  "key20": "2fZDejvYhmVHNjhNHv593rcE89tfkkiS5C2bw3B29R31o4dNHsFifCrZ4gMCUzUb7A19QHfCxwgJ6AR8xNFAJGgr",
  "key21": "4eL9zP35U47GrgQoNqM3USc5RU3dw4JW6yUK9Ava6a7VHJJVn9zSqf5GmGnZ58T8kkfaERZej9Zh12y2cYwD11i3",
  "key22": "44z7sR6HFzGni9gE6ML9RewsPPNGgJrKwcAiXox6kqKKDEVSkfWSwY8QGw7e7m4XLGD7Q72FxdejBcQRFXQGrPcq",
  "key23": "4u85kACyaJ43KVJVDRYeD5XQTR4Hmy7Gh85EyE6ZPLhCbXH4Kn6TbhY9RXq77egRvCfsKcoTSEYsaJnukY7ZfX9G",
  "key24": "26wgTfbyk5g5P2267nL6Lp4GdWnAmSWvJsCsuX8vQAQrnvGTzpsNmM15pqUAzoFtdvMxPXqhVDw67CCYZN7dCD56",
  "key25": "2gK9ja8nXQTpj1NfqgT7LjYwfVaexBUCbmuHikDdiay9xMGLam7MVz5sW5DETdsxKddgFQkVoyZ4PMjJWx5i5i7T",
  "key26": "2mnZnXpHdBZ4t1571qBP7YEBD4VoLfJuHinsV9QJghn5y47HSWrkk3qGyDnBkNiaL8ztMokNcnFk7wW1Woz4QyWp",
  "key27": "2Qq8p4snRGiEgWBkeYRbFeEJtCwJbFP9674ceLLNexyoYEUHDnYvJhg75bvRYZ4z59AcTZXBADV9wRB5wxKnKazk",
  "key28": "NYF3njVmsDu5NYhEy12aU3zTZv95Bqt7DcLBQcewJW942rFBV3DGeSQ8mwymbJhdPDBnGYo6pKzx3MNi8ZQMSDd",
  "key29": "436EXNvq6L7vHk82JzVWGaKpLwpRJ2Xvqv2e6gE2MQKa9KCzR6v8p63YYDvj57ot12BSGWtwr2qsuDyh6jvgvDRp",
  "key30": "dp4SYkm5vEY2au16MarWbhhHwHcM4bH5YfVP7mvDU2Rm8rm8mpMQeRniuptABS4S4KF3x9LBk7sArHAHk3Htats",
  "key31": "2W1qWnD7ixRs7r9kQmkcCxYmr2jN49tPufaR34fKPQQHKD2CTKsKgmzhkiC2MWAQx9afnqncvHNNgN8rq6duk7bf",
  "key32": "4QCCo1WnsDLDCiLicp4F3DcdqGtHT96tL4R1yNtibPvwofCW33BPvtivGVApLfK1fvsKCjE1oELBJwzsrf4CoUVU",
  "key33": "4dtwowXLzhheosYHrR4Hhm2wfmxRYEq8gGtCAbxHEi2DJMDADDXMJYKGmMU3ZpynuRxpw5v2PpHyrbXoGdDTDRd1",
  "key34": "iynNeTbBSRBJucdyJVUzWjFoXqQQ4YZv9D8rUQa8GPq957Tz59LMRqekhAX35pTBTtT37E7XY6D3uDqVBQi8tsD",
  "key35": "285774jZscphmzJAUqXVVcCg4199mnZSDzj2iVbh2k6aq1WnnTBqkHTr32mLqtzzvtaepQBf5viF9d4EPS1PHrKa",
  "key36": "43AS8UJjjqPDbovMYDSwYAhuD9pw4tZyHS5Gp7HeLm7uyXHqJjczkBd2SA4caBmY6BwTu4aD1nUZjCvANS2eE6NE",
  "key37": "RJ3d1NUotW4upjEibGbYVUxEKUXBncXM3PVpcSevUddY9Mj8eEZpjpykCRbEW3xPLPeXKgm55ejb1cKJqjG53wi"
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
