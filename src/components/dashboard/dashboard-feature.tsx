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
    "3R2o3xxPAaoFsSBPJDUNVL58NKbp2JmS2cuMa8pLfFGE67mths5srPvU6XcudVi5X4Aj8bWM156MUipsVHrFfa9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ecuR2pX8pBHfuHzdmbCocJi7uM5aQD9k3gURfTnzcRfsZqyzsv4KBxaNVvB1pECZFeS1VJFGMNzfDFs6RzgMedp",
  "key1": "4m8EBB6S8sfFDmQmmuyR6nvS8KgTL7Z9vt9X5hHrYJKyA1HWDCK1N4UTGnpsBVFSXVWWXwiWkcoe1CfPeJVyysLf",
  "key2": "5YPrRYhSpLD7w1coutifnx1atvha6VTHqosFpWGiVzwSqFLiw9DdnKRZKcdHh4jATTfRQZ5LaEat5vFQL34qZiqm",
  "key3": "5u7yzGzFrCCpozYgQ9JLYdraGo8D4hjzvZ3M1EzcBcbVo2b8oEsNkv2roH6yX3LDV5Ey72mQMoxkkYjSKoPfPH2M",
  "key4": "5XSqXED2qPwyV8g8ac5VfFn3zdRJgRpZNsyp6Hbjb8fRYX9YKrvCpV8AsmqxomjgXEknMqUAajWkGZqWQnK8VxUU",
  "key5": "5JS8DPGFajWu8yM2gHMKUMhbNExNZEwYcKno6x6eCHJjivTz1eS7ikyxqQkDKPSftkyrhVXN3GiF5TMmh4gtBu9w",
  "key6": "64Zf6VnwYo9JPVahP246TGRXg6xKZVgny5cjQaBGCRUuoipcu9VdvDSt4wBb86khzcenwT5TEnqPtFB94GxJBU9P",
  "key7": "2pJddVbJVESRezWmvVZricRYPz5mrcfZKLCaPd68qSPpNpTX8rQHPn8uriZmW56r8F4doRNQwoSxgmdqY6YXpgq6",
  "key8": "LaJ4hHdvYeTZQ5XS6bcQ8HXfwVK32JjCi928ZFEh86SgD7UNCvRLz46yF86iiLNd8DwtsQ4jXHajFHB1kyLpee8",
  "key9": "3s5dxCce8isdpuq4ZpnxZSGD7griroCVXKjUpww3he9EZfZHPUWjLRXVghFs1Uh7uhbDAGL8dxnDtrYR6tZhMt2P",
  "key10": "2yREEfRoSjr3VUCMPhsq1sToxzszAFGMPWECKWPHMF5o8cWoKuGSX3VLPQ5AmnTmV5fJ5mXApsn3B9vb3v161RaR",
  "key11": "66NukZ9qRwjjNLeM4dvUHQ7A49cztYbUqD7YntuE6c6ACjaE9hCfmoeJ3pdvQLCRPjMkaPW9mp5TLBd9MRUTGCdR",
  "key12": "4PhzfEGpNqfH2ZoQkgxaarf6YUEDrj5GEb1u4e4A42WbujUzZYreke1tuTdnscBZ2SAEZKtvkjTY6g6zvvGUUhVw",
  "key13": "4S9s8XCvdtJ36xfXveCsuFQoSMiuZ1aY5DpyJo9nxTHewz5Stvmtqm8wJrE2keEUKFVqM1ZjFBkNJJFkMhm61NS3",
  "key14": "smeKeczhqAMv2A8hohaJqEKZ4Uh3YYcnEHiXWjcz1r7ixmrxPYh2STj6yozrGBtzkLBytpYiFLjnnBdwrr1YLJp",
  "key15": "45SQosMSYC8AXreZ7ZWHCAd3NnTiqfBpRHxkEnNg23TkN8mF7AAaSvkV5GsJKpaZzt7T6KoaEyNG1puruEg6xvtY",
  "key16": "497h78dAAtKMWk7ubgM1AgmPZh4CnczVmEBXMMwtsaELnzZ4CAPayUxjG7xkmMRwCmpwWMvvZSmN1MkE4exgnmme",
  "key17": "5ruGE4YahxtasVqGDDCshKKZcF7FKueaNZvJ3BHnP5SoBrqHKegZiUQQ2Mqy4RyWU3ersPmDPGfjMuaa1pEtFJeD",
  "key18": "ATe5JBRJiBesPdD3t6UCNavma6fVMgWP3QFN7QXy2dnLDS7AZEN4H6zATZbejAr4qk3wzLRJd2iGX6dqtnank2v",
  "key19": "3ZGLBoS6aiLFqNhP3fkjuBbmHMyq9qGKeuEfbvD4xt4GyaoyrrpxjdWWKLGRxbTfgcp3fZ8d6AfkE75hxnGYk18S",
  "key20": "C2tASBCMDmo6M2NkKJdjrYHke5DohDX68aF1PVEFx6U8w6591qg4Zn5ikvMLPG5NGgGtDt8TPCqofKVaLTytckF",
  "key21": "5axuD2MFUHsMG2CL373UgDja5nobf9S3T2QK2S8bR11B9eW6XgDTCsskhHuMDLqDHfBDkhTpQi8UfNULLe84bG9M",
  "key22": "5iTi63cWNDjzcLgsU83EHF6Nes7SJu52p3XhqWUVD2jAmaS8ojhUiUAJKvhRCnSpCx7SecKCq3MbcJe5j63ELicq",
  "key23": "2wuQCHt6rpxm51onUA3gizPSLixdRVLLddhsXoGFAXqTi5higMpnBiexZ7h8mf9eG6c3ZZ4t6vCTrN3PKGSVtv6c",
  "key24": "bctqmarwMkZC6nGcYTVvnRLTw3hfKGodKTpJZ9GBjgzQijnTuAP3YtgsybdJpZ7ReH5sa48mwC35d2UhqCMMV1x",
  "key25": "2jsFiVbxBYDjpEpeC5Fey6TgGBvKqvzaQ8Pe7wi1HXHonfMrBozXDopPBSQRuhHKjWFMZod6ZyjYkqSEshpDyJHF",
  "key26": "64wFrcHN3H1vdkgCvEeTjZdTorPD3hEBhfKW66yoAbzGY6cL4JjYTHXJxvnCS3yAqkWQRqTcivi7wkSZCaykA1ZK",
  "key27": "4g3QbHuVRzR2nvXja2NoQYNYKtq7N45RM3KHERvANrrTSfjraAtgkLDvzcWWVtdaaxE8kQZMWJ8RxttDfRGS6Ppf",
  "key28": "2JqwXHk1qzYZS7U4AGrNtaDGBg6C9ViYWnxGEjoyv3o6MzNvWVJqrNqzaGggQCgPcRNmeebT9mpVWNP8eNNt65PX",
  "key29": "5vz74X86wNGbGK6kzBjK5m69YLKW2oYFshorMRr1phaD5NxUHhY7Zr24L5AuRRUqEzb3pjXpoEMZEUim8zyPTbMt",
  "key30": "3oiK2njVHATeBGT4x2tYvsRj2mpANSV1hT15LgF8mDBFtRcBGPxVANLp9usBATR6v9S5ccqg8zkgwjyVYq5KYDcn",
  "key31": "6jXwwsfNC2Rp9ng9gAQn5qdm7rLJf5C5PuiL1mJasAe6wbQAuVbqDVuVCwcr6x65XWHGkAy56YCtaqB4ECBLofu",
  "key32": "5LXNqpY22CkmJbwJTzCTK6xFFKNEDFkZqicU2YVp8EfrFAjriNvPsvoX685oviTRc4KnuAMQj4fbDnFjiYc4oCz2",
  "key33": "ttbKdtyfEYMNBgWnJYScWGLF7rH9vsuXrpwezaTKdUupZPdMsfmRqADCmrdYjTL2xmwkeWoxLQfVk7KKt6RrKut",
  "key34": "5VVEJ1fnUfi5A6zX4FyU6vFYzeCrbJEbBv5Y98LURM5z7ZQrMytqxoHDmx14daJVknaL3swcuAr7kpdeLgrojZcV",
  "key35": "45Ep5JvXn8TnZG5K2C3TNiaJ3zwBXJ9FVpKQ93kapofPFRtwQ3YMWqpeaUsCqat8DHKJFWzChaUu2sN6UzGWY5Un",
  "key36": "7rvDZ2RVM756WAETdEzxRDp5eigWkohQSQETrwjv383GrYBqra6Z7L1LVsj97jzYgxvCWkshbdL71zxPDGsdqfH",
  "key37": "4ubtq1ibS5jHpqJUv8awbHpsbkpHfyHk1WKvSZkVTPeQSXQQ5KrUPGnnSax9bBrGat8EZ4FPCaK1NopqnziZhyxC",
  "key38": "3wWh1FhEoXUpkh3xdH1pHEPQzKjJwjCmHh3tRT9JWg2fgRQbeMbvndYziV3k16LsAraDZZeJY7MHLQnZc7wdguhS",
  "key39": "42rEJBTyKurETe5BgyakXgqTXhALJscThNWisDa33eqHZj7s1AGAqqMFBg8HZsCqQ8q7C1XvukWWP4ezi586oJUD",
  "key40": "5GdBYwBt6iqHys8Kucjg69u24kUkzZKJMioF99JcyLQhqkRBJy8XGVJ3ZrH2fbLXkv5AumqMVQPjsUQzAERtYRST",
  "key41": "4iDWJYPuQ1aWanR9EgPyNK6wZNqNeAWzCEsA1aFUcoNYUP4mzEPQG8KJQp1mmhrdwAJ596KNSrG8ir21o3JGnQF",
  "key42": "3gxL7Mbbvrn3AqqYPBnbPN93KTpjoJfdHhzw4WWJrukAcre9Y3bijrzNLrgZGQ8Geft7tifDsYgdddGPwSSYNPWR",
  "key43": "3GwGZmKocNYtFcGs68jnowqnuFKWpxzgfEzzYEyxgwvhvJ7HgDtB2yXiVCxqRRJT2Pc38hLU5zMGXygGpsscon3x"
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
