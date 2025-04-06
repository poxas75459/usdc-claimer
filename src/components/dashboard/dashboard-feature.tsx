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
    "4g9pgLMaU2a5rCEKnDTiMkYbJWWXgpCGcSt2eVq3qwao8vPRLRcFWXbFn6df7xNrgCcN6y5D1vBCLJ28SSqRvEKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yP43CUboNmkAuCKd63dMMU2A3PnBGEgTb67TAEXRwL9paizMGrEN6xMNFeosHc4o2mXSZimCVFzu6CGumYJF5Fb",
  "key1": "2nmpEYMG8Wn64DtszCQze8wxs9RNdr8jwq1khgYHCUm73KkR3bpzUGmvU7DmvJKsgWzVt3KNTFFRomXupvFr2fav",
  "key2": "33kzEEFwy6hVV1ta6hWgVYLfzGwj64gfucwCgZfsJpv6RS2KGRg5qvqMSEwjhjjSDhaUXxu8NDws3wvPv6cJf2sv",
  "key3": "4Luk3eJtJWXsb6oYFTYheGimHKQub3hiin6gJZrZkMkgroNiLZuzpoffonJurUNDhAcYyXZTrTvRdMS8E9KBW7oV",
  "key4": "DJSya6Hk3UeV3qFiJhyt2UrGcPhyX73fLHHGcrDMQky2uv91dYeCuGa2ZKZJWmvQLWSLevBNJvpM2srJQyupmRs",
  "key5": "2Jpxkbrhd8szJvB25uKAQTHaESGPRLZ7NfXzQwPg4V7g4AHnCihZ5rhTwogAJavjnRPGRd5kNiqdgBW3KwMVQCdf",
  "key6": "3Qi7dBZ4P3j5nyk9ZRkFN7FGdeKTHzUXG8FwU5ANJ7J6AHFkmeF4r5tAc6ZrrnbSuvTLRkuoXSjqK7KjCuRMZPeM",
  "key7": "2v1yETeKCuKqqNfFoYMGw3b89xtQgBifQ3o1xGALQacE2pR2Aku6TMLdreHPpKjwBrtJ4HCPHz9q7uXYMNxp2g6f",
  "key8": "5jTrZ57jopUBosahYkUqCTqWBEfQCL41KuBtsjRKGXLpPicYKZY6xC2kDWL3VrwZvFxfaMX1GgPyG5UbBXBZr15d",
  "key9": "54cEnB71WYYdXszz7QFrj6B2m4zp8JD5EYXSPqfx5742Dj71jNywA4Y3qmH5cS4Z7vjSdeFwnNyff6fAoJqwwuyi",
  "key10": "2DbPRVGG55bH2fBYTZBCfDdQZMdP4MXeVa425K67NYYRmUhCkR1tuG3RZ3VRVRRiAptSEh24B5X6WrJBXX6wkEeQ",
  "key11": "2a97rPJzFhsZCiGyi9sMjbUkFfTXwMiscAcLKWZmXxBFkRHsbbEf5pMRi8hXypo2XyPQS1BGYJFjDhXkrYF4Pgsq",
  "key12": "5ghH1kEhdm3siasqyy1G6HZnXs8fh4SSFiSSEBToySjYCrdp9uAarETKZQFszw37nzYyD9bJFmYcfYb2egPUg16U",
  "key13": "36bSp8kdrk6ZNv661h7DtiG3ghh2ujfmwYX8ChaknFFUwpS5YwxCBjUc1W4ooaWuBarYnd36YdbeHyQizHhpxh84",
  "key14": "21gUsvbWNBFQT1CSUaavGkQAj48RC4DXoPF8k7iSMetgUV5t89BoQGGxVgg5WXGaW4fExaSPhjPXnCp3NVe1TSGF",
  "key15": "2ECBKpbWBYkZqm8PEdEfdcJBTp7CXa72AV6mqDH1S3nQz4wCQTvdKRZkeSFGCG9SXw3EwDHnvkXit2NzG3cEHCnY",
  "key16": "5uSKAkBrzkuC6ePrmXBGuCn3ujPWeaq5qLMpP3GkbSpbLM4YJxAigiXVQaP4Ng5dB8ea46o4MjPBMwJXXyHn7asW",
  "key17": "2H8tMLFAgT41nsfkWridQf94KXViFVGVBrpbSHZ1V27GP8EaWQ2E4JXWd2h1LKkbMjByh88x3xhBWqpQ3dFBCJDn",
  "key18": "4oh21njfTrvDF3GWeHSyHUjnDcmPrMwb54Rw6u9pTqUKyNLCsXh9RyRjDhx23Cav9vVuV2614zzqz5UCYgmdBokG",
  "key19": "2vg1NSnopcGE7uriPjbZ4mzrxj5ypQHsaHFksXRnLCxs6fiSvwGBoaY5x8sP4Rg2NsKA26BJ5d9jhKqLAzv4fCGv",
  "key20": "2FuEYvujjUf8ZBcBmZ6qWM4vSchksj6bc1hgECsru3mhVNBSQZoSqUGe9ee2vAUFn2wYHH4F2qicm4e621hC7wzG",
  "key21": "2RhxiJGPA2E4SwXtWibNzD1K6NU6czRztvcDkJS8woG6nozFd2fDJVrndR5KbKWGcF1LeruLtj4upW1jgxKkYEZv",
  "key22": "5YsT2FCECSDHhbi2RgAQjP1NrTSV7x6seWQBqrFwwZXzz9NpjerKcxC2ZZooPE7aC1kRUsECnkx393Px23x68LwT",
  "key23": "qtAc2m35X3mvzbqePjb42NTmXeYJ27BLs3eYR5j6f2BbdvKXDAJZ2W8vBRJfKwqe7fT6Py4brrokLgcziREpk4n",
  "key24": "3Wv6oB1xnQtjA8ERB64Rgj8hgfhNa6mEJCQvWoUPnWwtrFt8uLRNu7nJVExhsKEJv9Q12vzYVBEqKxSHv7xbDmuG",
  "key25": "2QSCu97drgeXUQUtdXwZXL1JH2aVJDLjDbX3AvemoPiRx5huiHLuSGCiEGZzWCpQL2wAruXtpczNPmmjGi7LGpvf",
  "key26": "2oojWPbDB8qjtjva1ukEkabTwCHPJLdKpbJ57NJLQTJut4r6jWUefMLa8dThwzuM3hMcKoEK6BBNDY2K1y6ZnBtj",
  "key27": "5eoAoMquJQJ53xChc6WSTLNKnCVNDdaVXfFDeV2GoEDbkZNgyeKDLwMwiPzM74qtMouD6VtkX71WvT1RBha2fH28",
  "key28": "2Rn3s2qyJrKQ2AbooQFhqyKo39tR87kkAzyzGXdADXPkK6Cj2cmEa9qQoyJp9SMrbd2ZMBh6Ybtz2ZzHLhwCgGMW",
  "key29": "4sgzBSmRogErXZ9mLbM1Mq9pXbME75EMdAnMxUwitZ7SxoypkY92R1daw483MnF6D3LMggHry2VVMCCRicLFc7Fu",
  "key30": "3kMvNdpErsrvoTVwEseP3dupUvE7uGSnCanq5sfW2ccAymjw8vs9dk9ayRyggKyGWgHmt89bK1gNG33Fz2DHgiwc",
  "key31": "5bgJpoVH9LKZpgEvuiUFq2u17TmuiZNrEryoSRRr7iuK6bFZX6NskbSNg4xNUrhYZYag6wmif7v57cPsMJfn8Lck",
  "key32": "4mkeCauVERQiiLgoFyUtBxPkR8cByAArzwNsPMxLZGVghvsKw7eSyVH44XViwFBm9YQRL2twv3ePDpB6pKazM3h1",
  "key33": "25gGoyLnCWXn99GHxsEM7NoaU5aPUav7tLRe3G2EZkimBWvbfGAEebP4bwkor2K52qf6wGAjzMkEsmEoeLFFLrsC",
  "key34": "3Jsq5jQpZm4DEw2uETZZ5DmVgCt3boAvGmzjtA2SHVoRiCjPXyGWzg29Sn6RbsGTQxXHeuuBgq3xTgxRH7i5PKxo",
  "key35": "5dG5qH9bQJyj3VPUeHDFwhMugJXRQHyUjGiXNEHkawMmV528Ru6srR9FsfquRAKpYd86aHUXRLojMywjtizg7ryP",
  "key36": "53fbh2NMh4YqEiqDoQZeX8av4zA3cKQvzYznYgDjDZNc1oXZKgyopRjEeaGiamm19PLq5f2irAM8n5pn259Xms1F",
  "key37": "3KGGHk4Mmst4Jb7GU3nWkbkT9FoVka81xtfoQSSguT1mDp5nXndpyKvBcJqD9TQM88AGckehBKfLiqyFjjYDiW7S",
  "key38": "3x24EKGoW2eTmQgBNzVdRt2CjuoE4fnC5KD2F376bBcWih8TFKi1hfwTDHHMZ3TcKVpYcJx4kYQphNx9GQk6qbbQ",
  "key39": "5Djfsk5ZTqkbYHZScgJeLad7UCpG1MtBsmmRfBYGLK8AVbxJwg7vBfjs1LhbTzLBkWEpdDeuQaBRnWrvwDmCbdsN",
  "key40": "5grAauThXVZddMuJHVyGBcnAiVsfvgCeoXzmk5MVSRvvJurqHTJPmDcpzCcnjB1YnpH86bVnRdFshwkcf1r46Hhv"
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
