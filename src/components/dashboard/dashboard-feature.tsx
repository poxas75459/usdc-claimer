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
    "3LygYhSg6sd1CbDsYN9oBnRXQsRqgDQcqfbSGV4uFVnsCwaQjMB9LSVRQSR27YxBCFYXYPduMRhwGNbMnMNNBjAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vtLzDq77Ue8mbJi87GgxUVmV4EDy2tLEwsTbxbhPH826XusfjiETqk3NSQnekVVvpYftendvdFsPniXkqxVzgQs",
  "key1": "gv8NVxUnS2Jha8Uw4ZaX1UEuCan48ALyFXnZb6nXax4szEMgzRUMn7fD52easfZJ9q7vYkRFM6NEEaa9ob6UBvd",
  "key2": "2PAs4iDabTLfsvpHahrXwFpQLpqTvt5bbihH9MKAfqQEGmxcxN8MvKNkuCpY2XHGhjSvrJNRHGFzGuQVzSyorKx1",
  "key3": "3WgVE5bqRsqUgDUGiCCY5qUuGAyhqZnMRhDWkmaPt1WKLT6yQMtJyrAze84qi3t8Gv8wPgdVjkwJbZGVxVzkeNdm",
  "key4": "3Y1MY5gYKuyiXo5bfMwq5AxN41qhYpFPjw5FUcw9Rv1Xz1x6jzY211ogWnGNcCXfWqP3S6uRQm7Ss8Qt5iMKzNv4",
  "key5": "3DnBW7nhTGwMKdpehXKV7jmEaqKe2GMQ1kHuSpoCyQYPJSSf5ynDCXvd2yKp2oNPo2yqAkCEvkCiyht9bvW7f6sj",
  "key6": "3qaUMBozrnHszwEWc2aJJHyyYcEJqdDNdV5fxtqzNrfj8wSp4wfM7ddRtRMYn39grRbNB5z3aiDSaGGwLzvfgPcq",
  "key7": "2zXqDxqy3u55VqZw98GR8gscToa4AvXzhvsMp8BfmwzuZeuhedAov3SyaxjuNRgWTgoyyadzbCopbAzeyMJdigwZ",
  "key8": "2HkGzgebuB65U3znkSJxiVgJUm1mibuLC6dZS2rSDdCj2s1gQdSnhbAsCxGE5894eyaSyZdNuvzkLKsBjy1kwF7E",
  "key9": "4QvYxY5SAw36TwF1zpZ2sKpYn9qcuLcQAk4i5EaN2pcZvuxmoNdDKHEaWKkyXuVW7PF2tustN27qFdg99BhDs9wu",
  "key10": "34PuK6jY2Bk4aPj3Yw6aHdjQeKqgJgwjZt6tboUY4w3vLYhefDqBuT61ZWKpZMKw9Xq9EYfTSKFLPkVSC1ZzYYMt",
  "key11": "gjwEwzowZDbLTbG12SAagGSgKZi9tfJXs7K7yg9BWrV6EG9SNiyJYwgbVHT1rMKZ747hEZiLpzR8ekTF59yR6Vm",
  "key12": "2VAFVFngyWMg9H9u3cAtvDDSsEwcebcq3dNnxZx4Wcenm8Sso7xkvVKuCsJzm4WK8vgQ92ckZYqtkCbuYCN41CHX",
  "key13": "5Cgaf6Lf1qDJ4ZtgcN2w1NyAFaVAKQp1xEVEVyvDGA2AVkLT1hE77jeELq83XS7oLDfa1oqp1BqEtGRHWEtcej9K",
  "key14": "4PGVqWMyruTfkt1oF7FG3xosP7qZBgd3xQv6unQiQsf4xsFszTeZ8FNEypXxAT8nX465gK9f2h2aEN8nuoeD54jp",
  "key15": "56BbFg7a6KDjC9gWVHg56HCVpoZMBkc9VLW6aWUxAgm5DwnKmw3ajQAXU6YKRf8LjUj4fRgxhzdkUCx6bz4E2NVh",
  "key16": "2K8Qw5SaZfZiR76GzaYkpm9zv64p8uFqk6UZjCfsmkf5PWFB3ER1RkbghMCdiUwLmKB7gU4MebE3bMF4aUjwu8zB",
  "key17": "3BzSHEUvxE493MjnzjuMctYB1Y63x2Es1axyMKfs3hxnFmzmnuGbYDfUQLGG814wNf7Ugpd89zjMNk9Z8yhfR2g7",
  "key18": "XtcK11kk2GfqssFgqbNWDd8j53H3ig7mcNqVhEvy3ARkdLsvBLSidCwm1CYXdLXhLknMRSo29ApSx7iBDYMAb84",
  "key19": "QPiVhn3qEhD4Dh7xz8Xy8twqDsRQhFownzEjmP8G4j63DNNC4uw2zd4TAzAuJpcd7X2awhYFbFxGJ9BxMJAj7PK",
  "key20": "31mVisLUBoCvA2i8rZejydJbQaiizC4WaFVrnNPae2jRPGiZHRpMtfgqdqtxhqVL7LYAbmCRZgtdYUcvG6ae1o5v",
  "key21": "4SHU4uyMQJYKd4tSqzFaPAtTYPggHRzErkMsTJYCSN5j6RF3XT6ivEerfPYQiwJjowRxhe8ZJuxkjneVcQeAPqAa",
  "key22": "nzd7TRgRubw5KQHcqGHu7QH7bYLk7f5u7aYMjmLAZkXb1tX9vtZanNthtkCyFkrHapWbiabVPzG7BqpHFb2HhSy",
  "key23": "4jZNrUpwz6EgJ8hfLDfGpLgDiPAj2ofv5cSwpdNFKRHDMCysZV9ZGHgwmwP6818KZjyzK3L6vjBMpkn2JyBRkmen",
  "key24": "2g68dSZdLQJtGorP5RvVkcGmwxQk4CczNvJpux1mG4i4dtgygGHHqmiMZdK4iLM4uygBKdJ8FzW67rY7F33PGZwx",
  "key25": "5eQZ5H6H3oJd9LHaxQqVWq4ZDRMzhbdoyvBj1kzMBnnnWiSBax2e7ji1vuAbrJ6sw9ymQiG9YuW6ReH75f45N82j",
  "key26": "5o26QHj57jMpiGbpaiZCtnytq3iZWWyLrPFd6wiMmxCUii7V8mFNi5Voiu5EnVgrnNtyWmVzx6CtYqYtKeKJSGZn",
  "key27": "2CRjW2oGujpcZiUJf6Lvd3nyptGpHVhBqcDatWPwgEGGyd3e8N6y49Z2kVyzcuS5Lw5JPue96fND6QT1N54567Cq",
  "key28": "5mrubcGtoN8shtnaBog1wgFcYd4ZMJ8arsudorDqx3TVcPu7VYH8agCdR99gy1YyGwQatG5Zg5rEgo6StBMFnFiS",
  "key29": "Amq3UtKu7dK5biLErx27kt47EmibRx78yecF59u8tNbtQvD1wtkTXrWa3KUYjnd6JYdMrVWz7CGXe3nqdLG1Qjb",
  "key30": "5cPR7Tgf7TKcHSjp1APUsuCzWaeZKeHfveLnnsYRXXis5JVW6dLKqXFkQvPnCREFEo7BgCbTYkMTgANSym6Cdi4z",
  "key31": "4mswWiFYJGSZrvdyD6m155iBD4kL3sgSWip9Csjqze5U8iAuzU1auvQJ1GFsAAy8BBEyVAssxDRMQapJTKbu4oy",
  "key32": "2v5HKMy93aZ6QE5oU9NMdxpYkZyvGDDBu5vFSxpWJrKBfrPZV6XMaHYLDZcoedc9yiN7hMnVk2Y36GGnkzG3zsiF",
  "key33": "52PyBpJL8ecA6cNiHCPqQvy3MFhALYTDMWTAAGsFyGM8nzuYRJkUMfNkywWnAEvBn9wz9VSQTG98zwmA3D2c3jsd",
  "key34": "2mZN58bCrLVQBeUcnQbBdUvQb4dF8R34teCtYS3uBEbRNN4KRArbPRoNYHtaY64QY4aSuc98fr8pAdLAJuDXT5n6",
  "key35": "3vpx3kzzMMoXueMXKu4fsKQyu9MXAL6KPFvQA6EKZWANWMounkG4YLKdS8TYq3gzpyEW7835Mm9k3d2e6rphjDzD",
  "key36": "3C6BTSdit2XGndDhXFQQRZcCFzMn4Kk23WEzFkqp2vQE19ohy5mWGpVYMPH5bpE9Sj8EBe1i11D2yEeKC5xfjRcq",
  "key37": "2XYGVBToCsxRNZ2F3hVxJrCGUVsaiZ5ogQ6jMJRYraQRxM7gexRBHGWU5emUyZ5xrfC2YAe36ANiqjLnNpLyMcVW"
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
