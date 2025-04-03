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
    "sw6QMv4GMRCSB6N9J2vGL6eMuQ2rnZNMhZceBLzhRSqtkyJL5VT6t9CPJeNXY8BW5Y54PAsva5TiYerMGFu5sBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37e8BT8FoQk6MgRhiaFnJrKftaUo32m6CgfLXwAeEd7X1AopoZJZaVmC7Mq3doZiec1YHvQG2Mf2wNL9c9YuioK1",
  "key1": "2Ga1VNMTeTofD1ksyqUvh13oHacpUyzUjahQFeEcPxp3G9gsYhQ8ie8PpQBtcjModAqox9aaR8v3fozeYTU5E1B9",
  "key2": "4MTJUtQbipwJLD96rjLeUotMQTqhiXvLjGR5tJPcBWtXnTbT4xs7K5kvSY7M6U9voXQGFShvJksh1hV9c2FyYz6S",
  "key3": "5jujWqDYP8FeyFpDtdRtwom1hpLk7gJq3xvKcx83yW6FUXbiUXGjEfNShTHyuQDJicEcMmqbPv1cXDt92ijdRMU8",
  "key4": "636Lc3Y1agAkJMrj5efbb5snariVLsfxtE2x9PYaFhF7invU2NxjSvJugLPPQTMHGbDrVtSZ22FYwEDAUafJzpJE",
  "key5": "Yf4uV9F4qHoqdzmdDLdYpRKRtFEToQyWsXQ9MHHCGED8ZkM3qgHCNPT6qEk7wnNVBtyRqNHdN6jsHvx9D7n5MzW",
  "key6": "jcjmqz1vx34nUm76BsdWMJTH337ma7A5x4DGT4ofE1AkQWT74rgDKcT637FzqmBsjJHR6U2jDfgKZ9yHqn5ww9V",
  "key7": "3iPTsWMyd3NUqwCLPw8CaxSn5FdawUtY1sgDB9RcvY5CMet7nDfJ7M4FVfbtroNC4UiR4Aa4xad8goq1mUkZGPJs",
  "key8": "5QCWr1BZ4voAUFJXsj3pBjTDJx5YunqeVi6TjdHWRgNKeBAG5nyLhLHMZeP3HCU217mvbsC2w5oksjD2cwbL4eCK",
  "key9": "3KoCBiX77WN8Yp4DDNwuXxBXCgntnd15KyVxrLut8TjPewiBfvFVHSo9Se4VtqdgHH39t1UPH7PF9S4mXNt1e2eE",
  "key10": "2hA4zGdieoKQUmEiiVHsWsqSyF9mQ5FMbbM2n35J7zUSnZg54zmBXWsRKyYsxm75nfJkzzevvnwR1F5bFJfqwsET",
  "key11": "2QzwhBx3RU8jRtwpDmGpoHTaexojuSvZQf2F7jPjCcgJDh2upaWYFjLKGNejacXpARiiyKFPs1ejcw6qy3tUhgCf",
  "key12": "34AEcnUx4TMAy9ucRaadhqKADQuKsjnWpRScQXoNgah1VHkX4kKhZ5aMekgomum65Q9eMfVWjDYZJ116FjBfTvFn",
  "key13": "2YUcc4WCYEhi7WAPXR4CqwDjWFGcmxPsxmspQh1hMPPjtWueXgYSbW4okYxRnGoRHi8m8vDzPuXfsPadxHbKFUCG",
  "key14": "4vGDSCmHeGELHeSbxUQ7Tqfe6JPHkF3a4dVikCN5tjJ1tEnVoJ7wLFi193ZYtJRJ3atoecvsfSn9LJFs1Kk4U4fV",
  "key15": "61on6aMTiDjpFV3Yu5RuV86U3pG2mjA5PvhXGgBkqGEjseNRKbUcCgpfwucsQEH5yXZhMS3NQyFqx6W2B9gpfFJe",
  "key16": "21LtUSK6gnaaHPgd8NE27ofBWWeDSDxozWTsQ8VbH9TYd93F9pURV2JneVT6BQaZDLiM3wECodHqQY42qQtrN246",
  "key17": "2c57j7CiH6EfL861zcUoX23LtMzCQpxHMHassMRJ7izgS1hmAbMPa7jwKFuF9vcniJJ8RnYpC8LwZu3HLBxFDy7m",
  "key18": "4y3PkK9V1Wom2RrwrZJbnq3jfW8qZnz1rLpRPf2BpPLuqdVqjZVAbYPkqwJfTkx19GkY6JnBEm7cX9JBr9y5gUtS",
  "key19": "24znwbDEznNG7xkqkpNAb77Z4rPhxg418Fc4RbCPzYCgBnaT87Rke2FtPRufgaN21UcBK5yZh2BvjJyfcFSBtvU6",
  "key20": "5haBS5HN55nvzveiCZCGvdfZjXzeqvkPrnSXGSnZCQ2pNb9REcmQoGJ4xXVqwctM8NhncJ7iJNAmjDvSTkkY2Dwe",
  "key21": "5781NDN7qK5qPqdxdr9Yt1tttLbQu9xnKp12x86jtmFBMP784zeB6z9tL4Vp2rUkGpbES8ZFz3FH3fLrHqpauWnX",
  "key22": "3s4HSwSUw6NvKySwucHcNZMWpKL2JN1TrNsgXbZHicNbbvtj9qrgnxrRYtXFwGEo2snneUrBiNw8HTgdGeAxXiJR",
  "key23": "PdqPTikjDSADvdHNqfkyezF12yJLea5TsVpSs91cTg2z6y8qJAotv8HrShqXGL4YHfVtxrv3Kn8uQ25ksdXCW2Q",
  "key24": "53BLaNYY7ihtYJNNDLaqHCGu9pQSkQd8YXVVvPNQPJGoHpsWxZt9WqsxyD8rawcQGm37YX4YgvCFhjoaSbuXcsQ1",
  "key25": "5BMULQDEnSkoMeFSMtUZSVuiKuoPRCKmRfuzfTxnB7B6yybtgdbNgJhJLNaouLsNB8irnnq4ZCTM23EPE524D63Z",
  "key26": "5PhR5RppybdqXbFHZqLzyCRTVM8VsxfMbM8d8Gnmuu2BKqebLWzKfniwxL1GgFuEx2ZuUwB7deKY4q8sjmQhCbvZ",
  "key27": "53DUQMFUCsNBJbAgjuHUzAE93eBeLMjn4ZFdYba4H8zhHqWvRwXEBxejVzR6FGneTxzfVC9kpgLDR8CVSCyezpfp",
  "key28": "4sLE7EQVddhZo1gW6sMC2D49RCbuw2u4tVsme8T6KuyV57iJ1qz7PcqMw9ppSpYooEYV4TDKVN9BDrpvzL5ouRxf",
  "key29": "5M6pixKf9Af9ZU89DG6gC7aZ5bNb8ZZpbbN8ry7GQJVzkvsamvANqn2h7HkxyoDhJv6TbyWB9dYiv4HfgFDUcMhE",
  "key30": "2FbcahwDE65yV2kkC6e5coFtnjjFDwjDYdq1QAzQkSJMPdMjKXb4jpxa1LqsoP3TjT7teVovyw5MTCnmyCwRkLoR",
  "key31": "3gohhmpSHJ9dsftLQ2V6X6oijzLss8Pt3p7VaGRT7knGbuV6kPfuxwVCKz3CJ4h3ohpyA2Gm3tJDWGTcsTvZQ1d7",
  "key32": "2mQHeo7U5DN2jCD4kzFGRGBeVG6oAmTt72LYtRNxBN2ZYSARdfo6sdD5pJzo5jQVt8EtwYGVnkSQ6pWohRQHLjhD",
  "key33": "iqXHkWYRfgGYYipn6mCKwYGVixEsWBiSYiXB4WCLRH65XAuA9peUNMNNLgEf79Tqva8tT8Kt8pf2Hw7eQHSQ9T8",
  "key34": "LTuYPPtV4va6G8k4KfFDhqsGAbFdcP1Qe9eDXAq1W1dPJ5G9ghp4Ho9A4XJTuGPVZfZ2wZfWVoMwQqi5zFaHAjK",
  "key35": "2MqBPXGPQVucWW5ToeYZPM4fz3NZQ76NTtYCc28c4Ekadstwx4w4avLPJdRzjdrjnMSwNugNtTG2ioRuzYxrL14U",
  "key36": "3xHmqWSQ9Ruzhq5hTVCP9wCQ4f4ZsfRDxDiKRtcc3EVjgyCKAoqQapCTbhCXxGSMj74zWwPKUCFdb9B6HCTyVvBz",
  "key37": "3u7z8frhjEXAr7siQkJwDNTSwfnqqLC9QyQo8M4WAtC83BDHEygHM5hmufUTXXfQJYh5VAxYYReaB7GMtwxcC9Ru",
  "key38": "GCWPpfaAxXEQaHNB2dpDsS155if8EPt9xfPfZ2NzytTSjpjpqxY4KUngnb8oH722NCiNrCP2cxZwGQFxYTABayg"
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
