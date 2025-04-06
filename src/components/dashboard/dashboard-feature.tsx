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
    "66RtvqdL41ChRQevj4pgQ81r33oLvJ5tpNsF3ry2NJh8RAzt5LJXq1bh1h9FMcvp5P2JqFtzVipHnF5ejaBtxT5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3xBrvmYCGW4X7cVbGrJJ7ZB25SgWw9w6bi1KEcB64V7dYXb1t8vs1GBo743uF4YT28Kv6LU57bJVnLgfXFuLZo",
  "key1": "3TBeTtb9MsW8wW3S3qYr1294mCKvznFXp1xgaJtTSKDubCfDBrHbx2UYipVVCdNoWQXc4u1g3isKn2nLBW6RgFya",
  "key2": "5yjYWPUfuPvn5tZxJkRwdXe1Npff8ynx8WWDfz2pDeoK8Fmg6hj6KA1ECkQTJC6QxskgAd7y5UN98RuUSrvRZYoj",
  "key3": "2JGvmCU4PjJT5FS13e9h7gZSKVJjGFZPosff5LpzYXZd87PtcyeWPphqhPB23gMJpT8aLKtP2jyqYd1iH3B4C4eC",
  "key4": "cupdjqYew7WdA2UST5gkWdnHZUJCkBLnwnTabXvyUHL9nCoNWnoyPqK5TGLuu2ssi3ZE4Zes9qp2N4yGvr1tQdC",
  "key5": "hZaznrYpXhvpL76Dn3oYPbA5LGGWZrkK1734Xw1Ditkt2evLypAmLTVmLJ9Ppj6MF2CkVYNLbtqDJmke3sVU437",
  "key6": "2VBzVKzuh2Q2MFbf81qvhDtEFop4EGhgPZVXSEFUYsMhkZvdmMamaciUnbLgEwJCXzhkrSgTeB6KxJgrEamR5Y7z",
  "key7": "5jUQtYXV1LCv5ywg7XYog6roVwQmYHhCx4h9FPaX5s9uj5UDrtaSMR5mZdApqdoGCTryUjPSmHxHxCXMGRydpmkc",
  "key8": "5zN5pnPtJZ1BS3PEoKKRhWT7Xwwv5KvYaggXEYCFNQQCWtbomRw9ffu92dRhHyg39PZJE2RY9pJr8vPGevgyTW6Q",
  "key9": "2DtLQgCJKtbB3HNXK8EpSgc6KozEUBVUnSeHxnxhWsQ5QJ9AK77r1x3MMVPbN7FS4SgESwRAm9LW61GDbdpK9PDX",
  "key10": "5i6bKLMiB9iLSRDnfS4boTgXHjreDDz1oUjnHmyC5h5ppMYCLJ4sP2WKmTeRT1xDZoovBiFEvtXAc2Sp8NZJmHoi",
  "key11": "5vTK4JXMJJnzj5XKKFL3bAEg7Q7SAwLdq6TZUU15X7q2xuVrz5Bee1bXojmHKdFEy3HC75995pgVafvbJ2YNAWU3",
  "key12": "Rxs3Af6bURXjxMi5z3XBjoeS7MKApUHEKnbyKsvQLWHLV8U6wjA8kAhuHYVbK5M4RSAXZ2YDWNWtd749u6812J7",
  "key13": "XpvhiZndFfmcxoetvM8oEd5XD2wZrakS4jGUPGkLygRQEar1gnbBnPuK5DLVdAgmYrmcTxZ6YimW8an9rf2wp53",
  "key14": "4CuPzpiC5zrBPjuD31EfynW3FEQigrz6YWiQD3V6TtzL1sqYUnzUJMYx9WVXC7TKs6FioTkdWPTGCgb2ivdVkGF2",
  "key15": "4qsYhP7Bp69XvJ2nSZ9eoTosSwEJT4y47Gax9xDzjMivqVcLpsGJxZyb6uiKh8PUCvkC7Yne3bWJTrLaHo29zyew",
  "key16": "5CMKhdHeh9dJ2MyUPkih5NxG5WCCJ5iMY4YkD7KxpjAX2gmtQ1bXg4HmKC9pK98bFZBy1g9BYcyRkMH5AMZ9pnss",
  "key17": "3jyEwPrs29LV9Ga9wB5GXGrVc2EQ7MHVoL34rhg8DDvrMgaSsKy5r9kS4dW5bAZdfE2bv5Du171zEUNXnK4B5DXn",
  "key18": "49ByLFfxGoSDoPUHwqkdx2wa4pNxqLMFeBzErX4hWobaKSEqBmW4dyb6pDFesTAufdDpU7emUzQZNYKaziFd5DXW",
  "key19": "49L25QeptYRjctvJsXccsvopEUCL3EWcfUd9bCVXo85Yq59rWhK1dmxB9Wu3xWnhgpQx8ANqS5rPNBh5ot9hGBqW",
  "key20": "4n8v6UcYqDTkRKrB82TynV424oM8KohNJ7J3kosbta92QC8RihvEBuawycfQZqMsLnoDWbndJ6vTXS63tNfoWCBd",
  "key21": "3QaoX9tVgwQonhnS5SLhgRdCNmr1XneXiHKeVMG79VcfLRKYqVNEV8L6gBfq1VWqfCXhfFF5Td3VibCACaPAX4Bk",
  "key22": "4x7KrgkpeGuAuAhb3L6mSN9S7sQJGcrFfcc1PZMoY35B9qbWb3jsMkZs4DeCWnb85hdHKTWKeHN2oPgBRZrGbARn",
  "key23": "XmWT8uvFnSXiXBs4qEztrNUxHDywqKjKsS49BbU4r826qqDDjFgswdKDVk2vqCoJAw7W3QfKs13pWYBNxzYiUwY",
  "key24": "57yqVoBwidfHP3W5o8eE3Jg9ctVM4WHgTFncnfCUhvBcgxAXYfwAnpT4bXwW57U5as5heNzCP68TeMBh8oQMGq4o",
  "key25": "4uhNyokfJBni5yPcVKQBFTdRWLxeGyCy4DA8zHDiUj6ZJJgQewbyWU615F1cCo2S4LYA1mad9ULDdZJ3xU3Q74SN",
  "key26": "5zFnwXi84a6JhjzZnmdxHTHTKCsKThXz43X2mBWLTbBApQvmbzzBaxpJ8KcNUt64iRCdhJq15rJYSd9Gk5LrehcL",
  "key27": "3gkmWjNYi8zAKcJJuHk5DS4cAm5CswxzfAShFAecG1KLN4MJgSQX4akuq9n7JYR6x9c9E7VFKdP8K7uqs6WzJCwf",
  "key28": "56Rj3xC2FvqSiGUVgkJu3xfJxS55YmXaiSvHfxDTJm9Hrk9qvjHhu3o9vQjm7VLdTaJFhZB462y1wJThwnwiZVFq",
  "key29": "6NPWQJTVSnGgZbgGd2DsJs5xPH1gEP4F4dv2n8gQeqiXoBSbXRezcoeQqRQbiAqMakotBR42CXp1Q5ddcnZDfp5",
  "key30": "5n9uL85EqdtpjKNR9toGB9tpJyQsz7VA5Fekw68GNwEkjSaLvcvQo8aqabbHQM6JTYXXZmr3e3kbRpFP6zCm9RMc",
  "key31": "2ADJJBrvQ1PFW6W14qrcKcWFdYWZLrwK5L3GBNb2DeguafiUjQACGXSgg6KTEcjAYwwAR6jobJigUf68yrwff5nk",
  "key32": "3EgnwbKSfcXzKeh1AX86LAFKzXFdJgFr3gFnz21uqUi5erteowz9H3kHV7H2Ko15mCibdguo6UwcFdwnwud7Fwte",
  "key33": "39ampWJqVABPtRhWMkmaJYBfLRznyBNohjfGVTn5cedApZ3PZEassCj9C65kC7FtYDdmcTqT5augfMsyPbvELg9S",
  "key34": "3gCajWrVp14bMKq2qVzdARCADZQ9L5nf6qCAZjQwQruDp36PyxAkxq9Wyr1KDGpiLEwUf2sWKXDYxqi5cghncyVb",
  "key35": "2Nv26wfLGPCsDVpXs5vNGmnEpgwckL6BxqEpRDkHLuVo2J6KxCQiPGP5dcbN3MQujpwZUccoef49LEVQwbrKcjs6",
  "key36": "CAv93biHUVsamXCAqZiZWYgB6E1LFDhSA3FvFjghjg31QsMKhz6PiRVy7T3DBtQHs16zoTAvopNNpyeX7LQmA58",
  "key37": "2aMwaEsUDiVP1d1WtsVGV8QuB8M9vM3i5dmAZ9EQGAcAsc68kKJL62c1F3G5LDLv8eHnXcqrfkpYZCq4yQCmZzoh",
  "key38": "2VbCKtVhTofAo5vHbXQDWxvMLcK4kCmCExtbaLCvaBJfJK3PHFq7EViv9knpGNbSw11K6CJacQfCAde8dTF3QiJE"
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
