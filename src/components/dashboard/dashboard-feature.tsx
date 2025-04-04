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
    "5fNTTEFgcyHSS1GoY7JDk42PrZsaG9T5tb9sBhEZ5ru37y6crB7kREj3St1cU1HANCYiEV1o4ig8NqfFELLbxi3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62rchhCz6eW2mh53LmKc5tqPGmJXncfwAV2YEhQ4tS1gdz8BNqY9MQRHUkk3ZDrsaixYZ43NXut6ZwFDwEvm63B3",
  "key1": "4KxdFAXnrmYpES25R7dmoVH67x93AmvBWSJLkf3JtRfTXfDNcMdqLq9dUhDAevT9p7TrhpUZRxxmw9xF4JynwYcs",
  "key2": "66U9f9TwWn8txuzj1GWcx2ZWqKHULa6nmqrQBrUj6Hsr7qy8qnHPZDy5VeshsBw2Qi3YzM2RDqhhSngpv38Us6Ve",
  "key3": "49TQaWYqcc3JR5G4fevYVUgg6QxVBpG8qjrrBhrWjQS7Ez3DMXV3wEZsaaV9xcJATvCxXaHGXvxCBGXjNsGnKoJ9",
  "key4": "3Etum2i7WgZzoUh7DXp3nNwcGMvJpHVJTTtNpJH1akMy8m5RjQZmcZerauSJDqBxbkzmVHBz6saTdFymccoR6kYB",
  "key5": "2i3aVbFtJQmuRGedNdkMCQJ1DRk7DXzwBKSwhXo8BESx7HVdHkK7BnzA1QyW2SaBAXiTZTTz7mCuDzWAzk23XvdE",
  "key6": "31XMRxwNyqNW3rzjLUCQKT9RBoRsppNorPABBXj1tk3AMZJiSHFtG3B54oHfSfFKt57CsqL5AXbo9RGBnmxSpBTH",
  "key7": "2xtooSKGuwaA79Q5QTaGG1mrwRtMw54aboDWWX28aLEyYiXYcCo7vqFRoRKVyw7RKfvWTJzbfX3cDowCGL8zrQCe",
  "key8": "29eYooZV9xCNcHWA7j3WcWB59kupfiume3Cfbbf4zNNDSf5DDDBg4Eo8cq2V8SkwvD2G4SbC3g8o55kz4M53LcQF",
  "key9": "4YPF66Aig2xvhkgQ9Fp218APiE3DThVcKTQtYdCGwKvQoQykJoXC2xoUhdegHTLrDV2m1efwfNNcB8Dfr7TwcCSa",
  "key10": "2sAu8iPgdZaqRgMPuLDfQL1KJJ8nwHGZYVqo1ooGGz6H2UTK5XLwSD7fEt7F7kjTBf812L27B4QUZCzBiUyXSfSG",
  "key11": "SExGiaf8fdWqPh1L6oMjuYf1Uq99hvcgDSXaxR4D3rWgUwuAHXKvhmMLEon6UdfGk9rzYjMhQQUELvvt7vsL3xc",
  "key12": "4dLnf1X5yhhj56nMKSDL8urCRkmhLK8SUjKHTPnhDHo2YCUz3RypfyQ1Hd3PBwnsY1xM2SGfz85Z1PVkU9DUDpLK",
  "key13": "5Wn5k31xTyGMKdsftmicEWLyRULtcMCsA8MavsYSXo9rEyXGSDbT2Mi1wh9vQXQPuXaHDFoyUkknL7aKDoabzq7b",
  "key14": "4G7NwbWt6KunHxXAZDWn1gbQ1kvhvggdmFWBvTBDnxrLM8xXd3miMjSUJ3umYWVZyxWXp6ieP5XVQswNNGxB4cxt",
  "key15": "44bkbQwzGBcxFSKDKwHNkicePh7o9tn6kzGaHkTomrKbCbRQVRdwRWg4W1hWwYgWeY2is4hhqGTftjUJRBmjSvhj",
  "key16": "5ndTg1vNFUe4UGx1pS1sZ1MjVaoZL4qfMM22YYoEtjjJaHDr5U55SRJL6tsyHzEgj3bMHSsVQTHT9J9L7wtSmojG",
  "key17": "44RNCBLH53Gm35fVbFZS3gPkNfxY81QrQvXneF6amg6mdwE9Y3kusX7x39NG2qiDMFEu9vYYKZA9oaKxXAQNFhFi",
  "key18": "4GeXbGWrWQkYJpjt59rLRrzQJhcgJVSqHFzzDp4Z6x33CoPgnAjoxz8AFfMGrNoDEoyMqudMBjCMcmx3Pek7YMu4",
  "key19": "5vUYZEr2Pwi6w4J7mq6guuYubWP7xv9vehhSdAnyAEik2YEcBXukLBY3fJccjFhHvqFAcALKaNHpNUz9gGvKC6Pd",
  "key20": "5JhJzGCKLSXigKW248D7vKV7bz9LyMLn79uKrCYgoDA3pphhLEiduyMmmBCMNTCt6ikKbSoGYRMVxG6BNqvc54oR",
  "key21": "5MSgpwzdk6REZ36uhePKXyeVdqagAGBKY1iwn1Up76RPApaHwFzeDUVvNWvKVNdQXXccmydJDc4FLQjavtkWEDgr",
  "key22": "5jKUpGUTqUy1S23rtdXVHQ7cnKmZErYGJfcv89D7QXHwBGx7haL7x6VaauXdre1LMXSdB9nAtZ83ZRMontfZ4Xg1",
  "key23": "YTUV6TH8FADCb8R4u9s9BV4zvqJCAqJV2XDB1ZYNfRc2HTGYrDoRnyjBV7ebDJoAj37n6fdtMbb7DQKTN3RwTQD",
  "key24": "4N5poPFTKJc8Kvee2mygrrhk3VGFCAr5YbeqAdCR2A4wzViQ8s14fHc49kZkY6udSQ2wvB4GMncWZwfz8uwCfu2y",
  "key25": "3cVAzpcc3kECpuHPNCFhpdjFDDFtF2xnpHUyz4dhFJRrasRc4MBFiBmmUQx1aq4rTtAm2KvkQjAWJrEsg2LyQdHK",
  "key26": "jN64U13LCdCjv5DURBfVbwBsS6on9SWVbGfWgRyyQ7AtBXBaeyeCQgZkYjwKeKet8Hikbfb8u7mACMbqh2bSE3F",
  "key27": "4phzNxEHHrSDvfCZaoeejDDTqUj1TVuQv2gqfB9qHgLi8RHPtwz5nyKAeesao69iNBBYPhjFcbuSbS6e9xdBggG1",
  "key28": "4FAnhoBa3eggqYXMmg57kDucVMQhSynjrUypDHjy63dtzEQAVTCLiJbHxFmDN3yCCLj35fBfzABF1UXnGtKJVx5Y",
  "key29": "3TBkJPmvVWPEipduPXDjjsm2SduV73rsPYsN8vigC92EWTPrViTPhXotEaDzud8mUt1fPzdG2BsnSgxBtt9tL17o",
  "key30": "2Pk9X3RPRGqzoNgdoPc5xPMQ7ndteMHqsLToJCXnizuUC6wGzfWf2hur7y3FNVXRuvMeqzTDn2myVdoFPaYbx5LS",
  "key31": "3eKTHAqwuaL6ZG9JVRsPrW97FFgTmEpw8LbdkebVeog1nRvzfdpQnUruR6HURY3ojP9osaVtULM7QqB9UPRJNq6W",
  "key32": "3mJkV422SXzNQEombKabRK2J9jYz7pzYwQuus6xSAoLvUK3JvUeJbMXhw9GdpMGyEikmjB3BsTbsA27oT5EQxbvm",
  "key33": "3w1FMN7yZSHUc44ZBXZg2yaRoDXCBF3T4kZ1GnjyaFmnkHcxSxkZhtzHqJkMSwYBdMpXVPYVqKELQnMBXHYGUiMU",
  "key34": "3u1kin8EdTNXX1YRYjJvZXHUAD7EzLp83KTqQZyTYKzBPbyTVCACfNb9ELicQdujZrYMbASjcaYvrAhYLN7zSwpd",
  "key35": "2gpNQ4AMpV2ntqpnJneer97TLNQG8WNLj41twHNmeqjstC14LfJxfUZSracvhRAxHSWx8dRTvXXjLc4RCokxAvbB",
  "key36": "rjGTfVZzSrPvdig5cXCGwrrcv2eNPJHfpHkDU3btYpYszZasJRJ3fqm5yxd4aftENScBoSDiMRrv6DzxXPPHMY1",
  "key37": "7DHbdJ643FdtHo3pKSrP2fEZWhgGxmECVBYWMVmbuMk9e6yFzWLpx7ticG4NCh3tQPnm35KdXRTeTgwx5Gda9oU",
  "key38": "5ENuZYactkiiC8BoYTKRFfU1GBWjKJGxBjr9bsNdFCkqsZb2qVST549g5KpmjXrtDza9NuGezRyDGuiax5UhqK1X",
  "key39": "3VEtuGAVYMw63DxHGiPVfysewLxUpZhieMBohDDjLa3w9jResdg5D2iqfYwyFbPpSBBPG9FCoxXuvyUmUDJZ8mwD",
  "key40": "3j5fWWCvBUZEzV8HQ7XVBxaBxaTCiriWy6Sxv4XJjFxmS2Mpw6mrkeTs85K4BUNkYVJVjVNHARvnpQoZvLW5fT4N",
  "key41": "4LE3P3zX2vWmEGLuJfxeZWt9pe7CBhQSygioaYxtjbWmcZcUoqvpT2qRVA2DQiWmpDFsjPqhZuVtbajvb5XcJH56",
  "key42": "bkXSsi4B38mV3ZDH9qEPK1bAVgLZ3csbujhaXJPCM6rGuB8dJRXJRB6SB1iMU2LzB3NoPWcKG9SfpY5eGpnk7fa"
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
