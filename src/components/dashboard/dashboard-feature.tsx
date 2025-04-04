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
    "BzpiSwPspW7hfxwMW9QKoUCH2nnSt7txb17mfxJ5daDxBr4FiidnohcGLKL6CXJxfJfV2AG9ur7hJS2kTUJ5Y7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qBg1RoxPMJK2wuJ3ft4YQ1UfSU1hXb5cSm3GCX1Yfdb83XkV48zMJCqnjTthzY1MQnVzAN2cemA3qpmHaPhPn75",
  "key1": "6dtLtXqZDmsMMju9D9V7bWqLHcGdaYAMztBrLgjGjjava8WW1AGzzUdVwnGnDMg6S6ucV5XanPRW2t2GwVCptHe",
  "key2": "3oh7DKatuet3eDvJzUwTpoK2Fz69XLJ7ghtJ7Ea39TwXDAkQAEmfLt1PqE4jFpj6VFrQncYMEN4aA5mryPfEKmvm",
  "key3": "63ihSbfS9rAKLZQnSh1RxBhEwRckB5a97So4q1YnsoMbQRPEac1BBVbJ3kRQUL4thcL7QrtbMJbiqZxc4dgQdPin",
  "key4": "4S6JRRsEH2MYRcHBCPu6T4XFBxdsft6qmcAj8ynFDAekEvCkXPbe4mnkVQeAfXbFdq792wv4PcpHSUoLW96EeFRj",
  "key5": "2vvYU7mGKjteebnUzEteeX2ZvAT3rbKiZL1Sseo5kHxJjv98xG1QjtaZZdhzfLWWMfPXGZYmG5ypDCz2JtvPREfS",
  "key6": "5o4FNg15vy951S2iopCUEJp8241SC2izfp1mcV17deR6RMQ5rRqDfSRuVeVnkQKkJcQRr4okUAC6NPGRbatL4JNo",
  "key7": "74oAo73UrUYknV2mLevJevwf2vfJ9LdDRJh6UD7LccoebWk5ExAnwvECPgs5CRnVAnp1oY19Lnj3CgFgdddeb5s",
  "key8": "2Pa6a6yDDkjLgRSx1Hv8XGRddg1tc2xp4ddx5ZT5i1Mq5mstkSPKm9mjcy7GgyxkLPiRQUw7rUUhozfvR5wCzEKS",
  "key9": "1an6dWntVQuRn5YuUTdZaxxpkFzVfFqbrrGxuBbo9wYRzaC51gM6vWbZjfJvUvF5c4tZZ9MeaqpjKLM6F1ojXHV",
  "key10": "5Mg1StqZRxuMDt4RR2hF67Rc8x66hbf46cY7amaz8PMgPUuLhw2vxoiQp89SY9CKXXeeopx5TAsbtcTm2ZrMJFgS",
  "key11": "2SvAN7K4mi5ZRTkTKGtLaNJsG7vSiWthFCdnyqERa4xqHcDHw3D9rWPZBgNBSZaUikv2qe9uYtUJWps3WYM6M2he",
  "key12": "23wjoVUcqBwH1Rks42NoPYBBXhtSnZ6iMoZyWsjwhdKv34VV7X1AP9RTSdpqc9vpRxnUQDGa3WEL65NmKqzVWrKJ",
  "key13": "3zWgoZ96FkoCmtsJ4YJhQgCjDJjVkGg1CxVuy3wCUn29VCAS9ErghVoPBBYjmvsz7jUMmCgzEL4cwZ29hnCCuX5g",
  "key14": "2xSiwsFn5qSgohRUq6tJqSt1eD4VPCZA6Wzs3vcAffbMRxVw4EYKt9rEBmNhRGZLdPFt6bJK5twvD5Y6gdigncMd",
  "key15": "4EmrgNgWH1bfdYrkpHurLihbNdYHgFZstpdkz6aBB8qukRS2frRqeJzpz9LQtamcmBBnHtgaDG6SqonxjFi9RNB7",
  "key16": "2cEs1QtdDGVcfh5yEYFVpPUgjqyDYB96N2ArM3WCp9KZdwc7q1f89pNxqtHpDuGZU3e8W9ttFa6HWgxQ6SJfAHBs",
  "key17": "49FrZ74JDDKfgodJjGc8hzoPusdRNDNfLBL8dYPg5U39XzpJnWTfGDD1n3Th3Xk8TxW38ALEDq4JgFTFNMP9HhJ8",
  "key18": "26DentkfGQM8ktPwzoGA6MyJ2j8yi66CEVzGmBEhCnTXSHmNrLTp3sUNM49TzfLZ58HsCP9Hj8792vKR5Qto8XPA",
  "key19": "5HfHqf5hikUegAAySqU6GkdHakaQCDF9vwV3sDief7jQqRee8KsgaUCBTGSUCEVGVw55ejeMVyvHVHgUzhag4EQH",
  "key20": "5XhCAxXWcek6DKakDSNd3wxCn1bqKdpuuAbRbpZHJm8QJXoz25sTGsUjDnDWow3zQHL93bB2KT5HfZbYbSmxNxP4",
  "key21": "gxPHwyWBHN2xFGH1EE4p52gwqqJGTqCM6y9HFZQyTpqRodUDTZazNjEhgPcLUuP9cprPmSEGWRHgvJtEt2thpkr",
  "key22": "5QuoN32hsfmFKsGASGcJxreCEbvqfMrLDz4Xatq8LKzYDQuQyP9eaZCudmAFrer3XrFtCz9DT9sGeu1g1J2jzeLk",
  "key23": "2SEC3yENodFjbdJbjyFNbrdWWsECiHpuuusug8swgAtU8zA3mCYtduVEhh45cN2wtAkcu9EL6bdp9TfSPsxexYBq",
  "key24": "2m3pRtCUtUaADV4CT7m4UkA2GgXPH1WzjTMgUgzh2jakpCZrZyPUYULr7oMuN631cBRQxgyJEChgrM6SJtY6n65p",
  "key25": "RrxT3MrUhEYEXZacpQAJX64PLTE8ScGKdgKcJY8NAPQnxRV8jdgYgp2L2dBRXJ7yb5yYD2NpzxxPiPjAfaB22EQ",
  "key26": "5T9927DUfFPYdKhsnJuEDAN7cVk5sa22ci3NAMV3yHFYUvsxeYkzmwodhHvUSCssXjDJzKCftvS5HNQ2qH5Cb7px",
  "key27": "UD2ACSWyiGRbzBKJXsV4Yfz9zjvsT8H8cR4sDtPvgaUzVXdQtFv4pgsgNnBPCKPr9pPDq8LJrkRNBGzWcudUMxi",
  "key28": "3fN8mGVQb4i3rze1rszLxAPPMLhLnydQNuTJaucTUWimbReYokLjF8cTubByWgR98NWaxMknHFxa944pp7dMKRod",
  "key29": "42qe8vHAoUxxe6gcZWNnTfXXtdDgPAaUU9v3BzuGMApuGLJsGxs8r9G6pdtZsVsino4zAQJVzMwoG4s41GHCkHiF",
  "key30": "4VW27FRa7QC1sz8SWMhsuFVyNAkTHfgVXkZN4r6sjpeZiRQoX6bjwBqsgv6J4aB74bm26TXrsaJcMeh3Yfzf6tZt",
  "key31": "3ZSgmu6bsydMC7LQqxUHPvBZB4Doqr56ZNvQRmodUF5vzAVHDGbqtyJw35xH2uKTGncqm7J9prf4TD6D3bSYxHsw",
  "key32": "48WN8Mh5XhXiX5YSBf7cJW1BbCJHepVPgm1RVpwGScdhxPDx5wnjwKSG33F5RJKxRkNy82VxGSurPfC73F8LR59T",
  "key33": "3tB56eb997b1bioYkLSRKC7PL6YrZJ4BG5NLK23PytSzp3VCVVa8Z8vsVMzK9zEcbvWbm9chMhpsdegATipqKPZ8",
  "key34": "4gycfT11SvKtxJqxGRpe2gc86WNYHawv53TpDZSKoKuHkXw3jFnuS53mpLnMYZAVzrGP5VtH7bq9McSwrKjNsv96",
  "key35": "3TgK47QTcnxt4Fd6xnmmvMX9WSvX89LCt6WNFFgVYnTVYiMcd1CAobkQp6A9AgJbEa4inCUSS4gy6Z5o4fyVbHiP",
  "key36": "5LPN79B9sej5wyBti47kRZzcxofFxD9owSjKa3h7FsnxFwLuwX4BzPwfWcuEEwoktutKsznfuehaBQLmk8AbmvtG",
  "key37": "2N96s4v6spAGYm6kuJYnYqV78gU81XSLUxVDM81PPD2viaYfeLq3TCugQQokFUVAir2L37xpzV5jaHyQRHKBcUGU",
  "key38": "4Xwh2QGAkBcKHKUhgX4w2GpYAurQAb1MPwtE361bwNvC4ybakdsKA1i48GbJFstp5dh7rwhZ2cWGUqjGpSdsfWVi",
  "key39": "RAgPJHZcUTmhJWCRjzcYdPm8p1ZBWmbPqrQcLv2CTTLLX4PWCMvPA2Bspbz3BYw3Lh1TcTGqzt2pBjPntBazThm",
  "key40": "4PjKE3FX2qrhBvtYPbBtUAzwZfbPaMhCAP5HPh2gA3pk5ehyU5P7ZHtUNNzbcg4R8eKPZ36RnwMVtbexJNjUKkjc",
  "key41": "65dvro7wAS2va1HST8FMYmHVfXBPaaCL1Nok9mrEXV8kq7FngaXnPfGCeFudaQ3KAeQVSJBjhxwp4K19Tkra9E1Y",
  "key42": "4TfJVwaTxKnqFSrU7p5ssjFpuq6LyEeDPGwjbvniSgNaXvXGRGwLg1WKxVzL83YZsQqMfJwcdBwfB8pxw2A3QBGU",
  "key43": "RVzA3Dg5K76VP2h27ZBQNRcS4kxB13YiDiFcTjBs2enaNkkGbvBu9HnJDos26G7e6Vzd1n3fso4Kwt9XVugoyw8",
  "key44": "4iDPyhHDYZTyCxPhQpvxgSUy9LMKwLNqq9Pvy19DvgzofMptXhqPBoCMesRFFR1ZXR1KwLLeXH4xJeHBpicw8fji",
  "key45": "49CuQV5DZDkaeSzBbeeYnRE3dk5p85bZJvwkczE2LpM8B1GGiBteTnDr98V2KUKMCuhNi9uKLq16oPvuJ1RxHYnh",
  "key46": "43eabNXPyydgWNex9kUwXXUVaoECYXrHxMhdBmQ4MYRqsUM1jYGooNDFZhhhiQ1eiJxTudgNMh8nXLi7nQvk5GwK",
  "key47": "4Nt4JSDMwZFUhz58cvcSz55XqAg1Jz4gcQ9qM1v2QHMkTcGjwmKe4tmWqrVqieGbe33ByjWyTaVVC4GfgPoctduF",
  "key48": "2Qbof9wnz23oKpX3PEW5AdKXruSjP89QzVBHifTfmEHQTGbGvVRYwpjVWAx5LLkmZFn2JdtZfBKRPuXMUErjfgF4",
  "key49": "47sJt9uyvQLwXr34Ti5Hgw1ekTvZaZUY8xByPiCBeNvs6YMuiCjG8B2MzhD5ZERoKAaJ8UU2zBRnvcemQ3YqF2C1"
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
