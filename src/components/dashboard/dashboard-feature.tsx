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
    "2KZtGRiUVCg4YALt5WLadG4wZcqPbnr64LX2UDDNdcftbTMc1aj3mHQE2TaqAUWMWBqfLbDAkcdg1HJGctzUd89i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61a2DKgURHjRJfZojKBGKraRgieKNquufwjUAbpgzs5FRGTP8QEsvzi8UCsnTbaXdnndFctjySGzpbp6ZedmcrYQ",
  "key1": "36YFy1D7y1o3QaE5brY6tP3VHdsG56ZnUGyyY4SQNMtCFgAqJopmT2vB4xGtQJsLaHoEsWk9wULfivVv6kgBGnsu",
  "key2": "5cWUs2iuZ2rjYrvF63J5VZkQAWXo9G5nzV96UYmNW8bBdk1ZuYF6aGRJrETdXb6iqxsyZMcUZcuMhkNhb5tR7XNq",
  "key3": "3ftqENrZucpDNVhJ3dQx4Bidd5uv8isdzFZtqp4yUpH2ZEfTJM935FWMNXbgW3Rs7QQbvuLSo6p41vmcp3zhCnbo",
  "key4": "4c8qtGEZvRptdCJBGfvWPbi2LxMwDdjWGSDdGs6HPWiyzqe1pZW775c7iQigLqcnLsEt8oQSruPFmYn9MrUrW1aR",
  "key5": "WdS2et32kArBw8JkcLrabBKCsh5CisTffp55Y31TsBnPPmNFa4SZ5Xd5EFHfvxm2rMenAL4KPxexMKhcHKVddH3",
  "key6": "4h4VKgJTjRo7VfkkQ5GegCdCmdTPDj6ZJ45ec9nHZx2UY9YGJ7jF1FoDnDRJtU1m1SoYDcsqGKHJpYGLqLsP4Zaw",
  "key7": "5RdrJYxEy7NyReev7iCU8i5mrWuGWNX2zabSiWSfLH4KtAuwBCL5twQXReheEBsW9asM16qhThfYVPUUfSTg1L7k",
  "key8": "3Vsu7z2v64RLW7CQckVcz9KQJY9SfrsMov3UenaSvkW6TKn6nGAK1uyuh2Yyqkck5azo2XSRx2RUGHDNSFQoNe1o",
  "key9": "2AarWV2XY5YACzNX1bMddoYcLSF7aB4oXLcjX168PTwS5nRp2vrQiAHjX2KPCSX6qPRDLrMVhptnZJDth8RNHRv6",
  "key10": "5nMQLhykrkyHAhypcViJ65wgDhCsQaZ26JvJdZQ7nXhixBGESymSXLWcg6koTCGAahNqvT2WShaRw7PgHJWPjVjK",
  "key11": "jpscqFT5mWF7ZcYfgoyusrBiaivmCCdfPLC6ztXz7QrbEjS9S8KpbP8x7bRmEuekHyhA1WEwL5B5HvpePbfJRMN",
  "key12": "dm1M2BTbXG4kXRC4SXZuz5J7VPhULaUjzakUtSr8nEHsHBSkhUiV2MrXcayy5838t74ggqdoed6RGJ1r1zNk7oi",
  "key13": "5fY9u8Zd3r6ZKt56uwkBUbtmc6hh3wtAuQSUJd9k5aYqt1Y2mvV1Lpt3AWDZqGTqSazrATfAi8urMxAXXszUyycS",
  "key14": "3Q76XAqmq1dwhMWnxMcNW86FHGKGQkCP3PzCLVdbP6KaPwP4iWQEBzr3nQ7WmRCuKWQn49ebKm4ihhN5rnaL4Ca4",
  "key15": "23HLaoketnVEhi1XBL25R6Y2EtKQPpuwijzurDojZfYTeW8ky4mn1Dsc6NnqXaQqapA4BJQa2GzPnjE8Tpj7H8GG",
  "key16": "4H2TwqSMztNQV8aPJcRdCfVJ5NEiTZW7nrmnrTypmKishYnNjaXtgWTujg8emKpTJfYcwTApF1pMD9fJsYWX3bcK",
  "key17": "4KScAomiV3HxXyKeDpSDzRAtSrW7H3iBnDEUJLdHS8gP5DHZwkgLsXAiZfPZrMb76QvE14gse6d1G3mzkv4mXHXe",
  "key18": "4ZrRz6sv53fkuqnaSGZgn8niNTo3KS1nKsH2T3XdBtxtKSaZH6Le4D1trspPNiFESZrgccwNJns483UovD4vjRUD",
  "key19": "2ErMVqnCMsZ2MAkLiLzu1fdn3a1UzC6kgZREuypeY3PUpsW8R1mCUVmjm9CNm6ZnjusokTXvefeELMQ8K3J8oibX",
  "key20": "4xKzNDFGzYtWK1V89JsK6TUS1ouvCutmj7ZoJQ9oyBJtzuZKjYgak4MnkuC2jDow7XspSnnpdKcihivUztFrXUZT",
  "key21": "5tj2h6Rf7WfnKhcUh4h2DhMzG9ws8UWAYU16c3MmEyi1DJsjJ9ARud8fdFtYFNsogm9D9gcPqCzFnAuUNfxTk448",
  "key22": "45LwYKgKMb2zvySuxUXaTWXn3LXYNXKa6zTDatdDzdziaW9gpAK1x3dG9XxNK9cKEFQoSe6hJDMJvQYWHmK6j69p",
  "key23": "57etTtCH7pRnEveBtzzxMSwTzUktK855Psofepckpv1NZMY4CEZJ67iXwcpH6R2vmCLkVfxeyoMyoyv4hLigW94G",
  "key24": "d24xRAzf7SPpwbteCLJpGz6LVariHPeKSAxVrxmqsMrFdUNhQWFHTMGM52HteS5GxrobX9RNk1Xdn2Ai1uogLHQ",
  "key25": "CJfBkLpPbFoSZEsA9LRf8NwrEBKPghNSbUV7wq9EUzhoWh1pe6n935XVQuxqEeAvN7vFh36y39egcqAyHgaca6b",
  "key26": "2rbrErRsLppjEKJ6ia8Yiq3CUuBYhnYBhiNiGU7tFji3CZGymQf3thtdH6PiYcfU6zJ1a1Bftz519re3bRq11P7g",
  "key27": "2hCd1vEn1XN1bJrEW62pypMMLYc7KA6yucX5faAsFjs4VU4RuvHEzvYuv6hS5esJfy3mbavHdW7Z6hqbgCRvKLoT",
  "key28": "y3S3ycBjspUha8wEBQoTQ57xK6YkfKKaprCCtrAg5hd3aTfSu2sv7Wo7Epd7bwCc6piPZeWjFiFr3wA4ckvQZQT",
  "key29": "iwqzk5ZpxXgTQU9MEkoFs5F2a8hfTV7qHBqyaX95Uie4vHbL9fxE1zSE11ouihASwz4ZjByA8enfKYXmyGiRcvx",
  "key30": "325y37yjDRYwD4f3Ym74hFYNgxJxPbtjB8SVUQLzHqcBJLWPjFa7o8bsszLsWcv5iBc7Pyz1Gg4858b7aB5Kke4u",
  "key31": "vQpMifb89agrSWKx4mobajkhVp7gBCyrvKPz9tGaiDU9TJDMXpH3EHQekJ53JxHNifnPy7zrBadKuBRH4jtrgJx",
  "key32": "2JY84RwfiTzz9bWPZ7cngRfro8EBrgW27aHZ5fpzcqJjpDg8oZzZj3atWZXmZFCHYp4zuwVJHri5BZfHDcuApo6T",
  "key33": "2zxGR5nAN3Zuj77sFyRyad8PCM3hLstzHZVuq1EnXkLM1tCdb75bCKLFEGkPJUZ3hKLsyWbWJiwSxWP8PVowNG6G",
  "key34": "63Ta1CkaWJgKAiueYnZgsa98YnKV1cP9yAnCUSxAqqqDv84WpWDR2Co4bGfsmMgzaJTFSjRqjge3Fhijhd4pk1B8",
  "key35": "2M4QEtAvz6ztZ8YY24AKgMmhwggZharfisu2WJ8y2K5Vhr5aoetQoativhtf4EbVYhpa6QemzzwKWXXb6VwjK34F",
  "key36": "3JTdkBB6bByHrFKMG8vhTNBRkUd3qm7wiusnn13kRNzukpNoEoCA67eNec16rCMbkJEUiYyELzBYRVVC4tiNGbKK",
  "key37": "2jT3qdP6QPfpr6USs4Ncz1JMxLkfbxpBfPFPTQ3k5LTh3zdBEKW1QLQD1ibp2No5gvYfMFWaoTZzrKLQ1CAt66t7",
  "key38": "5jgyAUR2i9Pm4UeYo6HnSCZrvrM6Umga5JXJq3RSNUuiGjVZGn5eSdcLcjE5qorXSWnBnBwr32sNR8XF5BsdrPFn",
  "key39": "2rq8xLHZxn3TzfeeUkEWykgh672ntUHuymnMBVBSdnw3KuFCWQFTcFkteCnsNsRDByGUwEirknodF6qa5Kj575J6"
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
