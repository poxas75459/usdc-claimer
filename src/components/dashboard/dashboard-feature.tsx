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
    "2BwVRHzHFKRtxgQw1wzsw4B5uKWaMMCb2p5LCW92d6gk3mRbJk8dByyuWawLtqoUfVDQT8D7rrNiicuocMTXsxSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "urYhYVwQEJh7P3ttjW1tMKrcjxmu3GTbabPUCbZuPM5NornhqR5Yzcm2idw5GPD8VsGV84Mq84m2SqoAr2ddCDN",
  "key1": "3M3Gfd1RStagAdB31rkhN1Y5JjMGRsmBtFQVVCEmFq5ZjidJgdPwZDyxtUx9XwQk99m5r4LssCs3T4P5UZQYixAU",
  "key2": "gTbjJ2ktnmDaG44CbkREbQP8WMVkk9cUpHttCCEyex79sicrnxZP5rdbBZs1Aq8vio1krUYws8U5aWtNYwxWkMA",
  "key3": "394hBZxaBNm7ciX6h2Xz6tmUsTsMwZDyAGbBwYug47Y9qwSmtqWGJpEEaYPG1YsW8XPqzPC4YsUs2Pu6KFA21jwD",
  "key4": "4vBPvCLxJeQA1YnZiyTbTirkTHgdkv9PsmKKTFGMewwqXF1DiG2FekTpXjMYfuYDigZ7XuHEYTf38bJsFdz28uNp",
  "key5": "38rN2iB8grpNnV1WWQCTa697wVHLSagGNyBoBBisDUJ1Cpba9v1UY28JhpH4ukN4AV5zB7cDFRXLMzR39cMxWJab",
  "key6": "3U8dikeHcKtEYQAYbUHsTHWeNX4RRviRiyvYJRtwtm3LmSE1y2GaJ96GcHY8WP8f8aSji58STYs1vtBzi9HMFzEo",
  "key7": "Gd14Am4fF75BpvqEXHnBPDtZHnd9Z2KxTMGj91Dc4nhT6wr2XBm598hqwBkAs7tHhiHwrXEm6FReNj7SGoaU6a9",
  "key8": "3ZSrZojSa62T4EUeMnbKuC5W7u8E62sF9tocHdLNeYTfwRZjJziSKHkPgfopTp92np4L1JGbx9zrBDgzPUfZrPwE",
  "key9": "3Y2QQFVt4ZEvh52cxwWyys2njVcqVQNovT6WtC1chhToiNkSyxxAfzR2fCSdxCB183YAYu1hAkeotC39b8jt41g7",
  "key10": "2t66CFfzTLtk6g5w3TSMKVEquAqYd3czw1j1TVq2epqrnSzK7NBZt2Zd9XywU822QrL7VthSKmW8F8zLyibCa2HM",
  "key11": "63ULzSASczE363sedLRYKG3LwtP5Vy7vXpsNRV8hFsN9g6Sdm6NNT9r524sXw7XohBGoRuQZZFrffFMhiYpMAoXj",
  "key12": "51ccH8W4Vg2DPgDcmm38MC4UegwPuD4FFQJN5cfSr9vaVjEjQ3CenX89hNnyw7DNWZ8w9ud7rhSLTK2Y4yiy8eDp",
  "key13": "5GrWUbtrmbVRFJ784APzohp29uNHAtWHhj8hAzn6zCkkG3RdnJbh8EPentKyhtVmwRuSSn3RufRUC7vm4r4QD2Me",
  "key14": "3ToCrvLpLfUBqK49WjRsFyXDwHxwiT5KbwCoqCnWHhJJMcZPekWoWgiLa4aXgdy9pNBrbh1m15SL227usJdVByy1",
  "key15": "2CRVHGq1ejYQxxCJEwjt3YRJmSXCT8HaWFoyAhUrUbGgAdxUsWZfDJkmUo3R7qAhJKkocwt1wKvFEopAtsPNTgLc",
  "key16": "3ozFDMhMSqSB1uoupNrC3NDhbMExELcmBTiBUyQWhGUc79utqZ2bVewD9oLNykcusEC33kJ6yWssFArsMXuU4bKF",
  "key17": "5sdD6BSovVdDbbc2LWraSA8FSNkCnjrUooKo284f8FfpVYQ8Nw2TEtxGvfuwoqvCzd5rw2RRBGaoJ12cxQqzRc5x",
  "key18": "5nSjwbabmE9QorfajUy4SuYkA8cREULv8nyBmGrr2fDWbZiUZ4Fcm4Phkg3n8teuWC38M1qUeyj98jqQDyRm63pP",
  "key19": "4CasNZAWG7RurDaEiMt3PMPrLPBHMMd1LLm1yaW4MjciJGfoJoynZLnBBwjMYmxMkFrAvjjKfNuq8cLJPzLz9vjd",
  "key20": "3Arq15sErrPSahWFwXeu9Miz9v9xjiRDHfVs8G2VMmV7qpkLN8PDcqJGz36qfm1ooD3vVuUw4oHZUo4t6RAVFqMn",
  "key21": "ahfPDbDTs5Ypz3hy3R7qrU4BdzmWk6WZkwwDaD5b8oDQ1kJt1WTPi6HoKQdS9NCMgtnsjzgU4wtnmdN5f9erD7M",
  "key22": "5tmQjnwpnqb7dEWVKUipyXAwGwXzkpzMu61uwxrMjxLcUkkvqTP942Aa1ih891byjua5PdarrwGZkuZcSvWX5MtK",
  "key23": "4c8PP4GEB8E3ymvqirBqYzUWhqGSt3MdfZx73Pj62MzFSW592X8q4CUUmvftA12zPsWRMzrgXDvskdj3kTYXkC7V",
  "key24": "zR5MV4LiSnhy3Cktidm5fYptpQm7EWrgbqgVfjFXKxuJkFr4WG5epALcUYEm32zr1BYhtovzxzaNwNE8kSCARhP",
  "key25": "53f8Y7MoXA8ssPiKwzGXwbcEzaXd4vxqqpvMj11M4EUcsJkAAs1QqPLDLN5RCXLbM4h7JM4JVxWQkGKbMSTsomdC",
  "key26": "41BxSoBz3m1rcHW6a7T1VE1Km2nPQCFdaLYdFqQcCDzZM3Hcmyaw2rXLeYijKE32ZuvBMFj2ho7YugaCigB5TuZE",
  "key27": "36NjELUpTRax7qXm6H99oShNqGozGF6bA6WvYjQtUeGbvYV7BgzwMN5pohU48hMXEe7fQdAJHzgVbJXp7NcFGLPY",
  "key28": "3SYDCwF7MiZv9kcGkfSTx73B6mEDvFFk6EfQjWMuYN1wbywoFRaiGoUEnyuMdQvkDxqRFSs7cwL19TmXyjixFQUY",
  "key29": "4RDLxPnHUWLZCpXHqYtLnuVDpnLehAxz7T11AjvtZeJhGcT6ELirMWBLztxuUYV8vdQK15iAkYVRMcHngB4EEyVD",
  "key30": "4PveZiz42ZfF7H1HTDjsJLSxGd88VvPEUnkvu4NwhH6MxQtSRrMzPEU6kV8uArYwcE4TYndArQ2rizsW2GiZg9v7",
  "key31": "36tx48cQ1PQbKuTcfaatmyPks9XVpov1x2EKrhWNwwNzRC8ZKjzB9s4cvANzu4PTSbMDtbGMuz4X8E14thz8DQpT",
  "key32": "5HaxETyAtx2f1JNUfJgK95VdGb7SmAEdz3zD28uNAV8q76s7Aed6UhdAZQQuzRy8nZmfceztJnABYAVAwKAxWPHZ",
  "key33": "2kMm4oMp4npHuDfSAFjDvsf6KZMpTzminL6kYpejP2vQ8wUQYFBF2L3KPJwyysDmYt8dTvURqE7wz9GCnPKFGvfa",
  "key34": "r1vDvTBQ26HcrWXuF5NnC8aRVNQ1bvU7UwAoFzLEeQqMYKA3zNpReM8qzMEePpPD3ZPpStyzALhxVdjTXPozHsT",
  "key35": "2iQSogKkPb3V8ZRUQ9ja7CQ1wRTJc8hpCgYBeLN6E7iFigmD3S2Kac29WrKtCa5GakQvZD7brfnZid5gTqZ79nvN",
  "key36": "3MYr71U5makbu5UbSmbHAZ6LV5Qhanh4SWmUWox9pry9mX3nQ2j6Eo4rPiJGne1WyCWUQV12x8ttX3bkUqSjgdoC",
  "key37": "57mKgYxSEK1bwv6U7kocJuP8FcM7oY1NxX14L7oUHjaz9XNV6aJjzbj5ckp5NozbDbyeRG9shBmHAKpJWoDhvacq",
  "key38": "4N8KZntYTka44y3fw6LGpSaHYzEbrvDKNZUtXG8SLTKpwf3yZU7m18Mz7DiP7tc56N8NpN25S3HLK87SfEXpPFsq",
  "key39": "5QZWLdbKAyZTkV7qSjoCuf2vgV8ya2NhGk3LVQ9RuWQ2ABZZZWRDRasQwaNR7Zex95vR6yhbL8Upz2aHmFMGoDxM",
  "key40": "7XmK3MVePJyRd3nVxRjqypqejKpfLXeVbJHTHe5M82ZA78a7k1PZyTkKPXMSSiHD2aHdrXuzw3CpWA8apsVQoTG",
  "key41": "4yqeEeJxtxZYwYE82eZcNuggtfP9NQurqwXaCUpXRgi72WSA4dn7LsLFEDJZ5PYK5RPTyBeHFd1DTazUAsgXWB8t",
  "key42": "2VkWs2FikoN1pq1jk1dZKoGVfMo9vRsG6C2XRHYgwrpLTnTKg7HocrE4ZT2EEnc9X7svNUez6RwTic9YS9PTwyaC"
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
