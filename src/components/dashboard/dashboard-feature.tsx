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
    "VCn559R2vikZSdkGDxAK77T5PavGsB7fKqrbd91M1mQiz1sbq9mn71sGbS7y7WAGf1ZcnedipQPD1Nt4AM69HZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ewsDRRZxHNzQbAS6PeWeKyG1GTS86NnQSSxWjpHKf6a61mvH3QkV2sNP3BroDKU2UoNdW4xNm8FasxViX1XB2qb",
  "key1": "2LEurkZyVHXuHLKABriCd8myUGvfL4s2QdCcXoK3yviBnHCThLNnz9Y91AygZUimVGt4YiZMpXiNh8aipvKZc6vF",
  "key2": "4W2pRGGeMx69G78a4ATuUMhfGjtXLyHpZPaEdvMbJBBTGoue8H3Lz2zABGKWrqhxUygqhvGVr3Ef2mSgMEshCJB3",
  "key3": "5YxYz72tjegXvigeSAP3u4KgUuj7pM8PKQUJaiXRX4m7opdjBupRh7MyPwgjYBAejuKUTaBXJyyHwmLXtfSioJSD",
  "key4": "s6wXwWNcxnAWWkVoPkKjddkKZWHgY9aDvNJYL2Pjuv38CUPZifHykZESTh71v8Q1acnqxeuBZ7nJVF8bmESfKEe",
  "key5": "riQhthhCQv4Phw2vHK7SBCjqBdvqfKitJ5BdaHBaSbzt2VKpuCY4w6F1E7gdjqDFfmmy5Cg5WsLKjVanTbZ7Yvr",
  "key6": "YyPp2vghzGk7euTmdQeewJd7VtmAhCo64bEGfvZRtxNd1a9SZcpqvKcCpQ3ZX4QhZFo5t1dqxv8gXwCkECqUFuz",
  "key7": "5mHSSG273DjLHU3YmF61BFxt6At69symEHkxitPf12TMRR1gRgCNY9maM8eLrbAJgkJYvxeEnHFoMNJnL8xhqCMm",
  "key8": "5gMqxL9uktYT7rVduKeYBKsBLzgFj5RViAXeC1fXvuRvKZz99U13S5qLw1Zep5dzabiR2yvgjYMoqF7qxmFp3J37",
  "key9": "2FS2g6xp9n7bdNZkYg7qQux9GBrz91KTvwWDNz1Xjzt9RZiZSqGwEuM5SqsdzbzibQQeYjr83y1vzRBbrg42U2z3",
  "key10": "2hvS1So73Z6vGEDKEvUwQfxUu1GSdnhLREadeYGB44s1ttKVzN4H6pQQGCs9pMuYHnVvTbRamiLjbu3ohb1yBvzE",
  "key11": "2hV84JCk4cRTSpuwCBbkBLQ3zei24p6UY5L1bFjd4iSWdWPk9zW5EgQq1PpR26BJyssgfJ6Gt8s7WF6x6GWnE979",
  "key12": "5Eqd3vWgKBCR4cZGab4yk717wzGwK8moe6mRXxi65CZbisBm6Dqd9MzTj9nyxV2EAyo41FHRKDfgAPz7kmAaUCUW",
  "key13": "5Pt2edXotNPtCD62h7Aaree7Lpdxwy1Kck1f3UMgE6XoN3Xfzxt2Ep1ALjZGQTV4Ji7RFyACPiuG1RvFmouo4nkA",
  "key14": "2nbcDvLD1HXgirMEYj8bUs3B9zp9dfmTyp9He582xLB3bHuNT3GLr339PcgZ1tNij7NhnGgZZBseBwS7oMtmh41q",
  "key15": "7G8UV3WfsJY4T21beXY2qnXdbPrg3wEqqZYkhx54ow7JVX99bqJTyRw9BqzEQd6rwzzRF4NQm2FM5Ca3DNtQLCT",
  "key16": "2pz8iPb3ZwbvkPXAfDaBUAjsEb6AxvFofQxPtTwtfFAxqAYm7oW6RwjbkQ9LEUuna7VdD2LHoSRUugWboonM6pDw",
  "key17": "3zboWCDa95GfXTGUoUU5ZuU6LzZUYYKLmwoXCQFzbuDQgk7GtaA6fA8djhu8rj5xTCXJYj8X9haSVNojgmqDceNE",
  "key18": "9dNNf9spCqER3bs232ATmp5uApxy2X1rWgtHySuhEoSDcxc69qjdECPmBS4yC6ZhNg2Bd9daSRXP8kXaVwzEdju",
  "key19": "4QVYzpPAxnZ59JRbyvuuDJNVeGx6H8xPszdw8xRCHXHqHzSCUjySXquSngNgmKxBVSxHgF9hJezjcPUWrLEPtcA7",
  "key20": "5MSAu9aWwdimh8w7mSwHuGrjRfpMxbGpFuVz5LDcTRsxu6sDkByJa86CFEJXDYbzNH8WbcX7mzvWZYficfm3eabe",
  "key21": "46SPoSZB9fZXZX1YT9itVQxkryewvVyVr9FXhGBwyw7HjTuXiMYkBsqysJUenGnX2NXMeWMUdjVwf6VY896vZ9DB",
  "key22": "4LhSSReNfdFKTMPJ8VZvrqAQRyDVRP8nKQ1Qtyn8Sz5J4YvsAMKQ27Ngx8wyieHFvf1fopZfYKoBpExYUa7o36xh",
  "key23": "32qTqsGG2obwPhSVYDDYim2kRwwbxobpA124iLSJ8yZ9GpAGYwrUdVLikXWX1CKo9WueUwPtDH7bh1adnCdwfGLn",
  "key24": "5haGLgKPiKmm3JVk2txC7GvFA4Dx2gx9Ge7mRBSVpUyyRk98U14UMDDv8bo1c7ENzh2R1m77mf8R6kAvN1g64o68",
  "key25": "4vUh6Cqr7NyBkav4cp9T1anTsdxAb6sRuiUV7EsxvzozSsGhbA8MYozqrBb8otmdkTF6HZ7WT8cFaZ86oNm4K3MC",
  "key26": "3QF9KzVyWbkA8TEYa3j7HY1YXFp46gXyk3LHuQudChpLLiaeP8xm65GxF6wXatSXzoSsbu6w9tJMmWZFr58ioVSR",
  "key27": "UkgyBzTpnNhKztjP4mvNzPH9ty7yHG7GMc5D184CZgPy3trNJPc4XHQx9k2725x5MnvJkQJt3EC1XHwPm61sVju",
  "key28": "9gX7wxuNkwF7fNPJc5PeHuoudUCstvyR19gW4Qv4ZCCsGcBQfoydbUj3Psg1j2qZcnNTFrGGMQXbhh3EQ1FKxsS",
  "key29": "27waQPC92vBRDmGYMLVcghN2Dgtiq1Nzob2trbS5kgzf5HJdpZMAKtDudyEP5h1j62gxDeEnzLZWZjmkBkrKyRrm"
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
