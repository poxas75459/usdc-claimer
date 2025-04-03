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
    "2j5GqbDbRDC9VTs69HerVd6rBPFfLdbMwj3dSJF84VXLRUpSMA4wBPqMzqMdJyGczZyUmYxqMj3u4ZJd9uAZumVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KWv7EhwCpqpUmmKaDpschvyk1t6MRA1R2UBXDvHt6zWKd8rGHvvBeLMzBnrCGE6eHQwCEg6Z3wnSxRYDu2X14Rn",
  "key1": "3PkzGEBtCeZUASEu2hwz3E1JxABimsCY8iWckbVDhkGBBvNPwLxv1H6yivEdiFcYJCZXaJ4AnEneDvC8EGnjwMuX",
  "key2": "S7Mx4QEjZeq8mSveugm4YeRjcRTWr1nsQ6RDsietrut51Ay4jNa936mDUTqEiuE39V4CqAzLfSr33EAdRZ1g6yh",
  "key3": "3aDiyKPQuf2jSJxf35XdjpTU7PnFKxen52Wqx783NFscoxD4PeYiuw5egJuB1XpfPYjuvvixiFxjggRxLAsiiA9w",
  "key4": "4YRuvptysjYfSgepm4PHKZj1cstDF2wJLurR6yKQ27115ZmC4Gwa38tNtfBero6PVnwLYQb4iEuCCLggpPem3oh5",
  "key5": "Got7duZbAf6p8VhVCg2gSUiKMpyyLjHSEarBp6wkY72UHemjvNGWa9jLQcGESiuVX8TdmxQXzUuouh6wMjrg3zk",
  "key6": "4PD16a9wcfo4aWr3nfj21VaYLL7dy2BFyF4eDrVWEWJ9GUdmHemKQ9fXz7sBLgJbJr2QfrZ9zZjnrJ5sPBinT8Ey",
  "key7": "3xtPs2adC7ckew6Uf8p5AHUPW1LzJuh5C3fEob38BpPBiAS8xPnyRUKzAW7CwBoKeKutqhngKtXLRyC1ssuYCMfa",
  "key8": "59t16LPyqFncq2whjMxoxtg6GvmqPaaawaNA24KqZS7NH9zSxT1RgyFAUBAZzKxxktF3vxZ9mjrZmpHGKWhNaotg",
  "key9": "4W9Pc12gr56GrPwQDhbFyKMDGaLzLNtfn25y9EPSPH4tnV1VvC56HC7bBN3sfsPWkDXwbqSyaiD8smhUg8p3vFUc",
  "key10": "5M8z7ssT1xKBeTSNvYGes9ybbfhuojxjqqEKkT5xd5iwkYKebNSJjjJZToMMZJEib2pVEfg4Vkng6XFYoKNHwCyd",
  "key11": "5ahq5dmE95h11Y4dLBGyNTpPUNsEst81FDFU3TvznCeKLo6wQ7yQfJpeBtq6KV3nF9BPeq96jfYZCaozVfaMLXhm",
  "key12": "5nD6nEH4cFJw5mhNFtmQgxm46s3KdAvRnWdjdo8fdaPuGqo3rB82w68VpRehhx9eySBp1Yn5LyPcFasFpn1dpTXG",
  "key13": "3nUJd71QRrzt35CraewbbwgGAnKEPfnpjPY8nN6CyLrGknJcj7S1X51Td5j411n6tzx51mhH8HAstjS7PRaLNAAa",
  "key14": "fhBtecbf998YrVibUzL5XjHeGKzeQ8EaS5AsKE2oiJf3X5XJjwiPSrTgfcU2W361B3ZP8r9MJTZFPJ8xSyj1adX",
  "key15": "4tEJudsDPT7T6rnonxDFP5KT66M8JsiUoD7d9q3VYWazVupcDWpLr3S4XGAXeRmdpq8xu9YDdEzjoEsDBbijwxtK",
  "key16": "4P1QMSRtmA4BRpi62Un49iz9dD1gD4T8m5EJF9J1XkX81JSaWHphmQ85C8XwX5ePLEpe59zGrkidYoMto2RQr1W4",
  "key17": "5vkssUSvtDNK4kG6JMoUoXEco21Fa8g7hVL2aRi6EzsxFeKGKr4aHeS5jbCXLPZ2YYwEXS83LiU3fXC6yWQ66pR8",
  "key18": "5Rtkv5ghwPLmXEVesQxgPdezcB2kHW8xuHvt6sFCCv5EftncM4c4cQ1KPLohVrkA6HXvtfaZWq1ArhNEVoqPdu5m",
  "key19": "2x5eZmh5q6LN1mtapYmtYSVK5szsHWxcVsaP7xhr1gJWYvpiooCshP5yCjmdd4Lzow1Aijj3KBXEsFsbFoEFMSoQ",
  "key20": "3ie6SST2otmwAoWaBgLciQvqDYX5SPGFJ5egPnmhvT29GsstmQceGsjYoJ1uqXsw6vMpbSCMcHcKskqRHD2Mv3Du",
  "key21": "4SJ3Qn4i4cFe9ipadnzRyn89JxAbYKjLEECpf7RwiJ9jP5qL82Qd8FakFVqXChs1qUui3CLMDXu62XDszYvayfEh",
  "key22": "37WrnR2baLSncNzFMsoPgXtdde1Se5dW73i28aZ3PXv1KkjSgVxgnRuQa1HFWKNs3ms7BFGerxFECwFXZycRnYDq",
  "key23": "4fJgm8sfTDDLTPG84p9SnhjKRCAJdN3p1smdsZNG8QB1HZFVrWGgvF6m22ExqjuMfhEcqeWDyeQRWfmmr6Hf4Jta",
  "key24": "4XJFFTtJfQF3391PzXQvgC11tvDAkPTA9EWS4mh29oTVzFEZ6aAy1GNQ3d1LxX6QgbVuTYjCvUebEc9W3hstGv1e",
  "key25": "2RhWckBD3gxjtzqvp8izDeVqKgyXWRzMrBPX4fXYiwCJ5HifDHPUUSqG5rhid4nr8kWeV6KkD7swhVuByfdrAsHd",
  "key26": "5xsaNSoJWUvu9smpA3zMfFriGrHw5Q6y4Fm3dEfbbSKm6TBej4hW2BFuK9MKGCW5SFqk3N6ZXSkoXCjj8ugF3oY3",
  "key27": "4kdZsrRFxjSw1Q5g1eqgUB5u4JLiXDkcv6PrZr8J4A9KNbokgdxAy3gLnNM5nh3dLXXicwK2EDMTV7yg3xw9GvZ2",
  "key28": "3RmYizKzTYmJbqDSD1tQv597Ve6b1Z8Gkpi4QAw5S9oEq7KyCe2wWegwXskkewUwSvDkE6r5NNKQZufXYccaD8Qw",
  "key29": "5ZWDXZ6uyE1gHjK5bHXnSiniv9fTaqkvXNvpMggxXc1Hymox7VqWMc5Y9BvGfK54jAqokeAsNftYpdML8DBtFMaG",
  "key30": "2ntAsum3hNNFnaddhkmfaRfp8CnDoB3Kft4kP8beM3jPYKyFTrGduqPexshy9FsjyeqppVkSa5CjxWaiV29GaM9n",
  "key31": "58gV8NkbGkPoQrftq24RrrzAERbDjK6o1PCmCw9ZJgVZHqw8pwYM2T6qj4m4eQhPW5rKHEux64x3y2FT9HjQHdkT",
  "key32": "3oL2BVhjb97xk7tm1374DzznNSQVKrr4PUCdKZ2UZTvXnU8dHAKULogHQx5VGGMX1LvPJ2UhvKmaaxq52gDkKkNX",
  "key33": "5YtbAwcCBmNKzYicwebfcZKRMDARLbno4WRDUEBZfBTWeCavrddLVMG5jrH73DPBmRMWcaGSdFSKST79fYzuNjES",
  "key34": "4id2fcHi8caJUjB1wQjKyDiFuxi4Skcety2rByNWYp1weAZYuW65ovNhB6sQf4h4uZwmHeoTA8N4UoWBKEqTbcGB",
  "key35": "3SKwUcLRxXQ7VnyrakJTgtWbQhNWfG4wG4do38QUUwEeQt99Q4CYrPYDdLr4FnFGaXt59uTCPPt6vsZmXGd8spjk",
  "key36": "55oseHdGyUoDTPqhV2JjvmsFxYQ69uTfpBgN7psrxbFMcEqWZN3Lna5k5WW7WCWsfwTn6Noyaw47Q4DfsVgS499Q",
  "key37": "XzSTQRpj1s5dcWNKbbmVBPucaFpqeiZbKB64WVi32rWaDDDhHRu8saJNJw21q2hzfJ5jjtsPM9foLKkLqJLchK2",
  "key38": "3PnjnxHnEUBDQi6KoK1iuhPY2BTqxyc9axZJ4hT8eWBgDXVabZzuSAbmuuMtPjBPALHxgaC5niz4KhYDgGRQYPc4"
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
