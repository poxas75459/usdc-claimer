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
    "423wZUhd3Qju9MNDBYohnUdkvMP1u8DjypgG7w7ohiEUoDj5kJtNqBWZzHSavddSL8fRKVtTyg1n4CbqNbzd8Ubt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6366FFd67y3fRUSUNQVV6BK7apHFXLf2ohkmMnvN9xjcc3TT63AyT2wJgejz7wzRVGWcRnVvrDpirbZivq3FT9W5",
  "key1": "49z7JQrKgbGgoBrTbkZnoyUkwmzczC3QVvVqANY2VGvXRJxtdNheRxe4Z97v8bqXqrPjuEYCoCXdSbXY3RrQEDBu",
  "key2": "tXqn21mgDgVwRjNxyqd1XN84tAfPs2DpvBuy8ddPxBvqikmTHpc8ddqAAoVcqKA7nWLmqD9rNFGisVztxjcD2VF",
  "key3": "2UjyAzKQy1EVSaiZeRtLi1RWWxfAexNTK656VnjYvQAY2BfWpdz6KGTAEXWRMeMYDh2WjsDJmyJqGzL7SR8xrbxF",
  "key4": "3C2ZDxkSQPqhCqPLewFGfqgNABjcC37QUEJ6uRWnhwJrXHzLbavbyfE3mjXWR1ZKbJRyQk4ri5tzHUtxZcn9hmPk",
  "key5": "5tQNLi7Di4NkPrtcySCFHeVYkHB2pqMXkYVqw426MjGkAwrB3UFgtrcaUpFst5EbiSsXh6JNmcSREn4XVgYTbG2j",
  "key6": "4wDEfrZEmZm4hzUrAbSbVrpX1s3skEi4W9951wTb4tSGg2PziXVniC9xDCFVn29TiGNN2iwoUaMrKEe7iKzp5kjA",
  "key7": "3eNtDS6ux5j9gQGEUTDoknas2AnYwq54fPBfX3SbdfdvYqvQsGhVmhB4NfqLEQBWpgVqok6zseFpnhxnV9XXXAF3",
  "key8": "p4hVprucE8WQj5V76cQQEg4cN6bCkRk7UNjfvGKi34D9muYDzQzEJSmFsWK7BWXJ3K7T2LCud8mRCGvws97zuYF",
  "key9": "4Lt1L5Hs8Jj9bKadEwB8Y6qT8GRJkcBJxTrpxTvdsY1DtK2UCrQW1RGApJ59R5yrEzuyLX7mCMkL9F7rfW73h9A1",
  "key10": "56RRBziJFQ3Nzx1Ys2inoXrVSG8w84fMV31Jy3EWs7wCsTe2Hy7RFutG2tjzQ5SAiZBAsra3eifXqgm1e2XWcGfk",
  "key11": "4jRyfyKUreWf7FqqaBnNrBw1UWaq9UPkBgW2JaKFHtonCuhFCjVt271RVWSvM2zegdDALaJDLPdd4L3WSkDXKC3d",
  "key12": "3rCVeWPLpiPsuRAL34MReBj2TnyHiJ7GEFud8JrFDDdRnGoAnZiaGoye7Ns7b35FQT5uMqNs9eV8bhHAFzTKwpss",
  "key13": "5HgNttTve924mVBJsNZ1KV3qa22TarYJcYHjFxS4cvmEmFusAp6Wx1pUD8V75uWYHQiMHfA4R5XEAkQkL1TBua7Y",
  "key14": "5vadE1gaqKe39ekBr8kPg5sK28jLnfJQ6VwWmLp22Zd7gQCm6UtdrsK7EEXU5unfQ1Y5KH4YGjVHCUVD6cvfwssv",
  "key15": "5jy7uonozo9yRaP53CKKvyc93kyW8z1kZiua6kwgvQmwecFuK2RTXGYV8D2sCNhyJZuNwcm8NLHkmerLhb9kdzhQ",
  "key16": "4shHUaVozR4juNZZ4rQ5ho52Rm9newfZd6LMEQm5jinv63SgNLhG6HMLpHXhpCkxoNcbcRhbErCUzJuZnQFYMxF9",
  "key17": "3D9PLYYcWn8iR7Hag1hHJPVpa4dw8TdxR2yW1YkyMDfaD1HXPm6KP2miMXEW71cppvKvcvz1ddK9K4Ci9BxNA5Jg",
  "key18": "5AgJkYhSpoatQKxSNvy6g4mEmwxRdAg3w4uqAixdQLx8K7b6vSwLhVfNK8BamcjsFMJcKfZ2iyZLXQTyfePCXA9",
  "key19": "2MCsSY3bvfkDLKTVEtNo55vXekyskHTHCeKQaW5AXCBZ3T8a8aY37rzQzxbuefnSahKE8ZcZwLUTpuawMYe7TB6o",
  "key20": "DCyWCuWzSXS2x8KFVYLAsgyuXe3Zo3eS1LtEvtuoJtE3HuusCA3pwUvFXkrdyUUszy9V3fFiqZugsEL9wujZJkG",
  "key21": "xTnHJoqVgXc8aYHJ21iBh1E5CBKxWHmRkka6goYszSKrWSAGoGJfiK51WX8DdfxVoFSsHEH5ePKpJELfEZexCAK",
  "key22": "336AAHm4aLogPSq5nYqsRBQCfCpEKsEN4A3DrZwqi5uKd3UP8WCoT49faL6toPkDiR4PUpNqzTusnHF9cWg9GPDm",
  "key23": "5kWa1HQXEhe63nfQnh7HsCkmP9Qvkvjr6tgzi8Ds3nz7G33Zxo3e6Kk718RJip4FSJmHurm5dy7VS5WLwByYmVgu",
  "key24": "3qHjMavpkE3dVnqVahdtDfcZ6zKQx5speao82jMnydq7v7KUuDVhHC1KhcTEQoytvTQ9qC2a5zRA1z5Zv1h7MgvB",
  "key25": "3PwuDsPwUp2zF9NeqU8vq2JxCLZR7C9wxaLENK8Brakz6jVMpWEHTSAmySUZg1PVGYZSMKzxuxQBuGYPutDK8DrM",
  "key26": "4MSYH9r3M8CE9gNtMjiqWPx9epZHyrB9v93VDXozmrYusHS9K1atn9R6U1yhErn2ekkfALHNkjWMvyrgnxuMdAXz",
  "key27": "3wpEV6VkSyWJhDx8UgGkBjkHKk2D6EicxZPSLbthwNyX3sbywqrqo3fy3a4QFZ5u4vY5HB4TrFwnzKTx6joNAXTA",
  "key28": "2zJ4ubvD9gp1yBXFtu6Gb3UP9LLHeectCnP3jL4QnX4pMqBK187xxWhYBqx5u8zzLNBq7KTfmpQzjCu7cKrdZ3am",
  "key29": "3RxQnLfczqCycqDCMVMuzdJcxYMNwxTKJELQxcvr426TJc4Yp1QCsuN7Miq2eLgwPvY6HwgwcGckZrhcRipdiezy",
  "key30": "41qQ3EnW3WxyebZYAXnFTMnHgnGjSo9p8Cdf8WmwrfdwwYTjGt3LF98BfSPGfifiudmcfUHbcYikvNxQMDTbog6y",
  "key31": "3n8TusXK5ojcCcML7SKaFAi1rBBvBhDdLGxn1KUxmmJgQUaxH7gHBBcGao6Hs33py9Uu1EYgcaDdJbgKYfzSKKpL",
  "key32": "659iQ3879mv4LenQDdCN575373TsSkmn2tgxkLS8H6JyiYKKaR7VXiKLGHpZ5h82ZPguBMHT7Jrv7ExZk5swNYT2",
  "key33": "57iWQxPTZv3mxJSxvtsuVhUpzHW5wkzpCcirEjW7BZLNinJaB1yyApS6BZFqPwptejkWFLq3NajF7Gd4vt9QJ5MA",
  "key34": "3dX79a5txz48ESJqsWid6h5DGyBKa4akh1wCFBr1hXLcHUsyDJU9TLZxu7ZpGBRyu5qDiAAa3NVd1hA2jKKjNb3x",
  "key35": "62h5aFBAhe9J9pNyUozGxBAB5eKiHPTSJiWaV6UsAc7HoFW3Q3B16AnH5uv71cWgTKkQhSTYiU6eMJwKENfDN5Dk",
  "key36": "2s76dz63LwAMrhZY733KHu3qxoVjiETYmK9vXiG6vE2sxYN5DYS1Q73fM9YqmRop5Twof8RwngtqAZSSdhQoGr4y",
  "key37": "62tsnZgthjza3WgjqSUuhrrLZNjX6ertxpxbhzYDJZ1NuHm4NMGmLLQWeRGcLpktQk4dvKAC5RfXbAJVjUSnQAuB",
  "key38": "5nzVRdPDoJHSzXotZaMbiqVkgVEFJYxuY9YgF5J7da5sqVSTvBETysXYCHhmL7vu4PuSKXE6yS9Xvda4YVf67Upf",
  "key39": "4gMwmRzRb1y7qXDj16h1fqjabc6z3JHjNidFax4aVvzWwwfYFLPG8TAbBWgqd34t3X2GaiyWRR6xG4fY9LfQxRXb",
  "key40": "5i1JJuzkXn2zsCoKv32Lgn8TfiYmQBvekqBmgZMPBT4GZSXFq4aDC6sd3DxoX9Ji5LqqcxtBmj82juWnHmmqSFZq",
  "key41": "3bDBpBQUH9PBuziETJP3G1Zz5KBAjkYAkBTVZCf5cwqNYLVwPLK7UmE8ogHXhHChZdK3oktsz2viRgEGdZTXEL5b",
  "key42": "4FxGY6wEjYvEEnUGFfPizMCfkFmGDAHHHR7NhssNSzNd2SuqGqMfiJLEVsS7kbBr1iwG2ooMNALprxfCR8Lgvz52",
  "key43": "2MpZRuXdNtJj6Bd6UYPnAs6i8tiBEujXB47CroGZsqfGDue1M5UGfkK5NcLK5YFe3F8vVRB7q6AqgnHW5yfC1R9M",
  "key44": "3eEwnZCZcQAukYZrkKSbJ71e4dWgfBE4v1DzTDS2CzNKfVWZEkLXGDRNG5jmEZs21XqNRJp6u7pVkcVE4FrZKHXc",
  "key45": "riJaENRpXNuB1kw7AhVq61S3zwH7tNoDH3BjioXuXmoxNDs7cNC4R447fLKgLG1cBu2nLGJYBccjP5rUFBS5XTZ"
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
