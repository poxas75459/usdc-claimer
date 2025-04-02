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
    "vMuAsLzrKVYiHBBJkB2KKDmhiM41vz6ekXnvC5btEyTATuG82NHxejW8VQTYDGZgvKjTKXWFwGHTih9xyniiYrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45SoCpmV2GhBFLn4LZQ6YASDzSw4JFjgVbHkZaSYAmWZxGrGokzg9bQPUFLXPHJ8MgZk2VWtwdob5Jq8jzmnTAnh",
  "key1": "4D4tTwvWCLgHhndCmbGjYKroNEtdhiekySVbqc1UHogVFscRSYYf7CB8jWFRZyvUubXZtJiAnRRmP1EBdVUNwLUb",
  "key2": "2WzmGA31dYwnMMjQp8S3PeFrFqUZA9BF7GpjA35XaXdfv2moz7JGv4kmzakgQwSqYRYSYpqgRbhicjGvHevrRiLA",
  "key3": "2dv42WQ55Mf7Wgcc5je9L9ASFBNT9iBAHHVuQYFiTkfUTow1vKZ3jbfZiy6cLVeRYuaSx6qog34ptATFCdSdim7D",
  "key4": "2nHfyBeQaGCqo72kJqogeSAbhJL9WVNScsExQkmFjCByJxEN1r18kwffJJxSGeh1feJWiZ2ugF2k5tyS3cipoN9K",
  "key5": "65GMq4qPgaJjfvnfHvCmqiVC5X7JqKVx5Rku5hDfBVJgCVcpkD3rNmcLE8ZEQGYAFtE9Y9xLTwTK7Byw3774BWZG",
  "key6": "3dLB1GM1fWPw92n3THUHLhvhjpubLTZQXTgZAShq81sRB1YSdKwvf9AnuxySaNNp7wsF8kpBPBFeUtqswCPWkiMx",
  "key7": "4sJUzbnc76xaHooNFmq7CNYPCvFvwnxd23j8wNdp9hDx4cgdYYrKh4RQQUbV6sKuMkp6MiZ12CsXAkjeezKFB1dT",
  "key8": "61RaWQVjohR8Tqsut8khwHvmUuVtZaMz2Udca7pQbGgM98HABkG3d9mLpCRbNcDdnWqQJZXZN3YdR8j1yteHMdEu",
  "key9": "5AQFAfREenSnRURP5iLDHUszVHKeSPifBQo2uHEMmvCpSAeVGRjYqimvMpyLJAmNbMoTQkVVnuqbFvojr7RAKR69",
  "key10": "619EGFxnTTqgtydALEJzqqD92ZHj4hW33Bzvz1QE9A9533i7hx5A2znZ1T4A2ZtCLKAk1cP9jt3ASCW8RRtpwo1s",
  "key11": "41bRxYrm9CJ92VcvzA5tRCsmaMtiahd6VVxubTygofr98mHqUXBSKpuHaPcY5SjHujAh4HWNL4KJEZi1MtdfSF4p",
  "key12": "2StDmhELYZ19XYwVKYvWXuuwTW3kp4HveHweLWmV2jaatDwiw329quERkxtZTytvLZ93jGfxJJtw1nenjvNLa6DG",
  "key13": "61zpye7GVBiGqpb27QTyrRGQDJ8JzvwUecWtC9PfZutsvWx696qhzi6moL1nwxmmnq9N2wh9Ckqf5EgxNX4PKWo",
  "key14": "32FA2ieDD3YTTLzZDej4hzizeuP1akS6hD5npgVamkzADBazyvBwsW2bRu1LNKEt5Fg4Wzp8MmL69Y7YThLicXLB",
  "key15": "3VVKMiiu9vjiqn5WxWvnpog6gREqJ2j2JSB1XsCDw7u4CZjCxc7sMKhXCApqa1D3q86noxqbf88Eoi3K2dvRxJqh",
  "key16": "4DuNxQ4i2LKeyyFSp3uV1qQJm4WFG1D4AarKMaAscRSXw9ga1FV7kGLtwti2PzRP2K1SKDz1tudHF9c3jnsP1UEp",
  "key17": "2eadNsxiEVFFNFdpd5dyrK1EFrUk7fb82V5e7yWGJ8xTfYtcAEsWJ75Em6nE3fnvFDo9ZKRPNoxxyyeW5UNiGp1R",
  "key18": "BF75ussuEYgcM1sS5kt7Eznd6AYPiRgfvM2xVjcAgtLnEvcpVA91dk61kurCS1S9SqVoKWrUnf4gDoi546ie8my",
  "key19": "2kUoG3qNf8hErmrhQDumixYdq1Y38VWJLgEv3PrgqD1j8QV4yneyS9kmk67FWeqjRpWUK1FHgWWiJ3y4qYcYHLxg",
  "key20": "5H5DmwFpgmjQZsX5gjP7VH6pZvkZR4UzpevDztqifp6wRAG4T4YyhfriSQa6f9CfsbR7br48fqq92Lr1dFSZRKPZ",
  "key21": "2E4qHEK3ayxzQXwZXPy31rCT312njrTTVDTTTGYhVbUHtax6gXGtTVLXPYT7xTRETqngASoHNN6qwo5fYw1sLo9S",
  "key22": "3wwDdzg3e8PnTRERapsDHExfKFFaPQi2DwD2pDVqPxEFptZdKguJPywxahkLYPvhz9j5dxACgS17YasvHhgH1mrp",
  "key23": "4ZrMQ1maM5fiCWJNHUeprJ4y1LRtctiKQHFrrzzzJ6A75AEAYiHueLzw5DJyRbboibP7XNu1mC61FTtdCedVzg7p",
  "key24": "4YLe8dZbf4odgiwvsUzwCXku2PLKuHQd6kCcZKEfHGQ2DSoh68bMW7hTg6ENZKuNeoSXEbfrg3dw9wjkdcTDxRjp",
  "key25": "coKHRXs5w1mguV9GZ9R9H6ZmmgijhohwpSGQNwFPosD15L42Wg7ZhvCmUioQwzR9L9cMeCsojoLNAuMWEp2eBmA",
  "key26": "4FYCATWZGR5hvJsBqnkwLG3smJD8LS7QCDxDqpkFA91KRPfRTekph36PyrqZVeTctKvGahSCV64JXyutWFJZT2ZY",
  "key27": "3B1xx64xJ81MGdihetsUVpsbKLMrrnjQJobyqwfENApCm11wXQduVfNcRkuNNfn2Xer7jvSdFZWghKQVMf8D4WGK",
  "key28": "47irg3erGRY8qVQMGjQE74ivM9MEviLAPSoRVpe4o8DyfNmbGVUMpN82jzequG52RyUCnrDp1Ai6ANfqeVY9QQrs",
  "key29": "2afGGoN4sqjiZBErXNzZHFLCYM7Fq9EF3tvnBUgrjE1o7UBvVALufBKxcDWmP8F7uD8aHsRw7Raq4SyjVNitjyVG",
  "key30": "HByRWwhQ5ziTfYYiP6ErAH96c6bhz6pmcdfWTn9aCyWz7Xw4soaY1LL7jNTM79ZtSHpRF38CqN7GpWuDgWNFHZf",
  "key31": "5B9atWMyjdaY97Gc54VSmLauL678QtNwVSVxWbCqsTjQmCZR8GdaWKyWFSMc1edyL4jUEMfkAvg8VtjrFFXDt5pL",
  "key32": "nvwomnborkaMsVjCsWD3dne17ghminBwRN382pQyD6DupKCg7Nxhs8MkcpZzbEdyLMFKyXnZeDh5NKCpLU4jpJo",
  "key33": "Vgoygr3bctdyhaj9jiH9BNyj5GcvJcg4AaMjTaDWNLp6GfBZsW9gRBDY5JurtieXSq1KaWqphNPNRVHHGxGitjz",
  "key34": "3N2NLrF5tk5NnBPDUXfPmsXmaKFWi2itpYTAoq3z6xrV1LCzvJAmSTSoP3aLgFiYKzBAmanV7vq9VNEf8ACsETqt",
  "key35": "66LSwPuSrBRwMSSWvUBBSYWztmqkm3ZFGyu6c45xHUbauTb7Kat1oSbkP3MHcWmQfXjGZWnsdZC1pabuZLDU28nF",
  "key36": "3Wfg43FuVt3Ea6XBoHZUFe8EBwUFq3hviqG6aepWbQAdk8jGiouDgMn63Wq7UJ2fAfXbQpDkAFf6btniNaMRpDY9",
  "key37": "4RTXnX4Uc16zMq37youqEshpKwKjyF7nj2ppYLGBCTnZ2sKfHC458MzTESq9X4N4DAdKWVca3gX6eVmktkQufU2K",
  "key38": "49mQWQWNVphQLizcEyh67EnEpVcMbhxyHPnptqH6q6LL7pdRTJmbpiqQXFuhnx4Xnwqt6f4v7LrcWsCLDdBv3mbX"
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
