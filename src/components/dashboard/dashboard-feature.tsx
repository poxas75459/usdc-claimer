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
    "49xJif33vmM4K54uksPrbXGzteQDDgmxQdxJ8XLMDQvypVrKhK5kaYA74925vZwwbEdxXNgmM1BQ3i79rSM9KyuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rArypQMZU2XMxmKyeFKNZPErJVxST4Q3mHL4TLzDAYDqERtQ8Mi81MMczBQgeSzeXoprKcC4yBHbxUgb3ZVLC8q",
  "key1": "33JnqBmtKc9YJEC6oA2wep7e3QhNFR4hBYmb2hbYoMxuuwfDNQEx1vAswTpC64AoPMKhsoZARAn9s1T8F25v5UuT",
  "key2": "a1LC82MxEuxGR33xTrhWKe7iKxykcvVgg2MDk6ZoBehSBg9xDefjvoEeUSbkFBW3VaSts92R6UgkEz2f8wYRMYY",
  "key3": "5vM8Dbrzh2bCAz47i7rowVgfRowiBHfGyMDNxNvj5asRq8oMbBNV4VUMU2mGf9GtApUCZzh7rK9ZvrDhTEGGBVNB",
  "key4": "3YHWheKbN34EyuxC7HS7rcUcgCvfXvZsS9XpSPPNcwbUfoUgj5Kaw5REWqvRrupmts5Tbser4do6KkPNGovDWwwE",
  "key5": "2j5Qj8SM2HVxDt6kN6CtZsaNHhbG3Nbqcaq9yfY6rtMBGVGbWgRQ5fTpKy3vj25GMSySTsiPVSE2HvB8Zc5LQPma",
  "key6": "62DJZKqfpBotpccVXhFfhZiAKwVgqiqGTxvJfv8XxXxGkXLdNNuep9ShtnsoCV6H4W4B1fXV5s7tUtrPe8VuMkpr",
  "key7": "2qAFYKXuhKEoAwyj54ybribxW9yNHSzgX1Pvm5WTiXvpDn2NUsyjeVVC9i7WenAsKcWDuvngSdT31ucRGxawTTvA",
  "key8": "2FcMTNQA3dvnWxzAjhZtctxrW3dx5hFidRo6ttKr1AW4gvSRYp1LXYp3BZEAwcztGxQCTo7Fiir5KAKMx1tkcALn",
  "key9": "4sea8yCtvboxT9sctkh9XkcBY2MY9kJqmm1tWPFFhoFJ7w7UGGPKhTNb8255W8pktDf4zP1cP2zUgtiPgzwnue8K",
  "key10": "3zDguCr4F9fksSJiaY9h4Axn1XXBLM6P1uKLERSV3EgAS2p7J3NgUuSzQXCsyGcmEDVLr3LDx87kqcJiVYyQ3Vsk",
  "key11": "sbCjp8j6b2j1siExy2C39921GCR9cxUv3BM9AiueSewP7Ekg67P8FvfQ9bkA3JrmTwgCPo3pnQDCvazKGX1kwYk",
  "key12": "3mVmw9ptZ65Wfumfs4n5zvv8WE5aZfZjtLRv4pVYa6cC2PVsxXeNVLTJUcMYXpcVYi9s3Fb34eQM7ZXXTFkwJdmo",
  "key13": "4HxqcsaomkQHwsFTeD57znYSzNBxbr2S7m7Ug7n4CdTfQ5hdfNxVqDtfDEXaE5pJLbajiMFTUtSiJtPBQMBeRqTc",
  "key14": "65FjvQ7Lmr2WcZnFPqQJt43TaYpRQ8HwFs6j4v2aSAcgUjjMNsWb2QC2v2rxSZUZwvex2YUa3isKSyF3PPzQp5LG",
  "key15": "38Uz9XQ5Cmd4pqqjZPzL1desopTsBjMxrM1VvG777tELZ8tFvuyeyeyw6Ft31GmWhtZafovWXjSeRnGqnFuAtX4u",
  "key16": "7MfznVF1s7yk3AMYiyCRrBPM4s1xaRQcQu7fKQKXeUWRFoVVfPRRo9F4Zx3qMvZVRzKfCk51kGTDjZk3du2sxk3",
  "key17": "3BdcoFFvMFcFqWTFkpUukuqM5h3dU8FiBQ3cDZwbAvSawPhTJVjK8Skfj3K8NmEAqvaXnZYw9xTwpWMpKLMiUeiW",
  "key18": "58zbyaDcjn9on9uEs5d9tYx1ePSmcqdrKmK1bAJri6nzaK4HrJi2FiKt5CWig8NbUcUMC7WsZvfdZMbAmNnrwGm3",
  "key19": "5JjvN3tjf89Kbsjef4XohZficQKYRhXLtaEaKXSX8s6WZgwbeLgqSWjXefopf5sTXd5JjQHwm8NyYLZVWPXDXrmf",
  "key20": "xyDqWeYH5W5J9mJ5WU7e1QzgTpMrtebNAG9DgRDH5prGXFiXRPTxGX1HeB8Bc1SULBssa3X7qm1mzzL9AhK3VKe",
  "key21": "5NWpwCvNYD2TRcmsvn9kDZ15MZvaL8Jzw4YhdAUAxHwkMt8bkpT5HcWcPYDimQJURWGAX9nLnvu6PVnJsufKZAJZ",
  "key22": "2y9DX6yLs21NkCnEPpaxrBhNuNZgWMX14sfpXP852WYVT8cSRkZCCH4eeCfZ1xguDwmme5rT3n5RwJCDwZ5wGH96",
  "key23": "2CTVNpzDZRBwEGETTMPUKe3kYhoJSDXqvwiLyF8tzHSw6AYt5ufPbB4GgihLGmke4MLEBWQfJmkw1DWFvS4JGyd9",
  "key24": "3A1gnEkPdLCq4JVfZh6M6zGXAcPsw4VcL2mvaK9Fx96ELjwuDYQe6AAhKRmxLJdCjHgP9Mr2Q2CFesAPx8qLuJRt",
  "key25": "64xXw2xNFeJoQvihyBkaQyoSBLWrDN4SdVCxFJg3tJoBMWB2XahWmHsU5Fh7oCAep3HVitgbrNeCbZJtFLiEoer6",
  "key26": "zYQKMFGpR7PMThoDssSyzcBa6uRGq63fAc3ewDrsR1H5UuLmXTe2abYcAtYqdXmZXm5AwWtdnucE8QZeUajKBeb",
  "key27": "55HGevwgLCFmvAptdwjNR4AJyh7gGAXUrGS6ycwjSZqs9ddrqYNbmc3SyB9GBruVzXBYeyXqvDnhKD3arQqNArF2",
  "key28": "89hGLyxWMeprLiXv4jWsXkhYWLDrphaviescQSZvYBt5dUtivfZ8SzBVZk2Cn1YeGPymsvXRyrUJ97v8PtQyxpY",
  "key29": "2x7iCdy5k9xqcwUur4kjuR1sYC4eDQ2HG9UszRRRwhiwL7pWZq1Hn49yBeFMrva5pjguvxDWT2uJWWubGUj7zJvK",
  "key30": "NnNRBb1ApD4AygRR3p5Nfhy6TnWgEqdthYGCNTv9UEikfBC8U9tdMZjYZih5KN9z7gryhQdxooqdyCPJpGzEUNb",
  "key31": "35EqYcoZp4KrmMUijUWSRn5w5nxy2YdF7zy6KZkiv78XdvXCixQ6EXtr6hD3R4JtvtsZcrnGw5Frx2qrBZ872Z6x",
  "key32": "23Fnj84uYVECJYCJU72Fei5b7qw8dWF1S9Jw97Hkp6wwzC7WQgzFSpHAjsGwxfZHkLJMTmGCULxBkjFMSfgBjwbz",
  "key33": "3svrze3X8AXKXYkni3VH8U8dpWNLcuKZbHpTVQnpU4qQLTEBPiyBtBZyVyJz3JShCSPXgdErVfjn5neRy1KuYZVm",
  "key34": "4MihmHpmhvd6oHza6cnJpk55wMQj9LtZLcbDCbHB3Q6Eshfg2UzUfJoWQxWxTYGeJ5k9xEBtFLyJKyNB9Ka93JUm",
  "key35": "3xELpRbvx5mhb177Qme7Jk9rBGoZ6JSchXVegYcwFPmKmH3UN5K9t4rd1faYqgAAxrgbzStBfBL95ue6yemd26Pf",
  "key36": "3vmvXsgryQinyDbXC2y22qX6yBRDrdv1SYxFAJdgn8AdQSDTjnYCnppCzHWW42YHU1eFZfQNDb7txNXAkT11rDFi",
  "key37": "3TymayCoYBJpv5bC2GKJUnzSV1fBfB9iJcRgybHXsAbaSLKnLrXGsWtx6z9baTSutQ9YxqCpesouSsicPRULzhyc",
  "key38": "5RD2VB2m48r7ZABUepwEJ7413YQ1mxyw1fAJVpLsuSXaXgUVBEbp3TDyoE8LnYM2d5zVqMjnTM2bXyyZqjAhyyRi",
  "key39": "4Anw7VxXYHN89bURjMKUDdYMexq8Meaj2tZfye1yWtEKSSCH4Qrtssb163qhqwaq6YJfLcgVk9WXF6pvQ4D7Wo3A",
  "key40": "67MVfEMRsGioPUW4anujKjejrQRBqteQV3nie3oJDLZJAqp2zW9r6MqXBGK7v7RgHr4n4LFUjfmaC1nmLMhf97xd",
  "key41": "4kexFrdtiMqpKqSEC9pM1qkaHzkudcoU6XunibP2KPXK2BhfMLdsCiMstSv2AYGYDiHvEiUjQShsdVGAgNPdBvG3"
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
