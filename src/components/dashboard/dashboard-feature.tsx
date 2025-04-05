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
    "332WSz83NBM5HRNBFwVtBrEuMrgThc8SgJyEYNBVe98ZGkF82k3DW3Cie8HtWujKpxDHJLXBqUjb8ap5E1UN8Wcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b5EKCBcewDJ6zTJs3GQrtrvNqmGhGwduFbJt3PbyJPBrpf5UaVKYMVdBUAtjgGYARc58s3RWLwfYg7iksF2x5P6",
  "key1": "3CSYiCZ3wPzJjzQa8tU5eCex7zXNPUAL9dSk5BTfV2cipfnmahEfPccispXPrufexEaKHqpXSBe9E3vhQXrpH2he",
  "key2": "4ciYkn55nXY8oSqyjVqB8VAvQDpbbjnsFAXnSVUVSmzLKRTksiAafiHoXRz55R17QwyQ9ewY5o5V4oJsHETpZeeR",
  "key3": "5YgmXQeo6CQBR6w7LwgYmVgtQ4XHqDc7gostnYaRGWCKQ2XXxRcYWPrN9L4wbCa6jSYY9YBbmELmgyco1wMTiNau",
  "key4": "5C2fDNFwVxryZ83S8ZrTm9M88XjpSZgm8GfMZQN6Fr1xizauc9QsgbsoDMAa9NS36fYSgv1aDN12bG8MKDRAWWAs",
  "key5": "3xDXZcVTMNZxzjxS37wszWzTQVTAEgZnPo84qaGCSRAuqL773r3v3mvc5Bnx4HWjNBoHrgMurJczEUEiRBiysLVU",
  "key6": "4v9pvrvyisg4377qmSPN2ym7EN9yQtr8AV4tdiZipJEBRaePtugT1TXdK5phff3XguArcYgYJELh1BUYePHBjpgS",
  "key7": "2S5N7xqPoFuPEZogu8GKKvWrRUZ4rK2AS3jKVdyEpoUrjgxPsgvNHkmBy1rLMkP888Rj1AvSbwndav8fqU8yqAm8",
  "key8": "3xw7wW3tS56UK1ZjEzJ2VEuuWSwz2Bx4VXdR6WAY9j7khwadd4AyJD9TQBerxRBtwrxgMCp3VECowRQGoXqeQR94",
  "key9": "3aRmu7oEHrsXTXfH2pMHFZDJUheWQKz5N73YwxasY3b7qsrzaXuwe4G1MgpfY1HNWPa63Yf5xSpwqcv1YnWv6MAR",
  "key10": "2NxqWMXS1Jbrv27kKDeMVbRtvZmkkvUNqCoQucvnzM6RN779CaB3SM3zSkwJeLaMRStK2Ywo8w4VbdheJEejBn3U",
  "key11": "44Tt3kKoDJa6JqG885Q39Q7MT6fjzyBLdy5XqNvkYr5h9iL9CSY79iJZuqskb5ePKZKssTwnbfHY1dDuzetQkRHQ",
  "key12": "5abdRD8ZgnpaA86pr8jtXANcMZTbK8Umc2iaQ2faSAQdwCtTwjCTVuVqeUz68ChgypqHpXqc47RREsVKfQmHNdpg",
  "key13": "rartyMedWFNf6XE77bAnWDnAexz39xYyCzPCM9DtDbeCUAFdbF7jFMbvs9kQfosRCY3Ws9if3qar8scR4Y2UmZ7",
  "key14": "3WtryNdLN4szz6quHbmYYmsmSkqZdovy6Vq9F6qoutjiGRto7pQ2tpaiJngCkUcotmc7oudnUuvBDwP5v1ZF9kh5",
  "key15": "3hWaRDcVHaFx87j3XcinUp5u6aV4KjfA39ViqLLcCShnUCWyTCkzp7fo91HBWdYFuUTbz9dBKKY7whkhKk56csce",
  "key16": "2dBV1N2NvWGyFuzZA13Genpzq4Eftqh53vuwj9StHwAog8uLTFAGCHR5iVzJ79rEkHetZt6vXuQCbatLaun1RYFd",
  "key17": "LMht1ch8stDRCQCbwUpa854xwip3u8KXaMsJ6npkLFNicWCcVvGvD7DSJ8q2U8C1gs9K82jyWYqUHb1eeBbWmhZ",
  "key18": "PodDxKaQyrvDEwwX8rZ1JG8KbUPntQc4rP33JGPPVrFQEPLq9GPt8ggiaGFP5YWozZMhBk1k8h3Pz9TTHzVCrMh",
  "key19": "5P8SkUKWUdZcgb5NinZQLxWYCiLJiXyFxAmYu6oDHPfbGedQimNthRq5GgceogNpDs5cxxY1YgAs1aywJTLrtqX7",
  "key20": "5j8HYiPivaxCcNZScuCB8YD8TkRSsSceDQxnokfwHpFufScPC4zGVdaurQbo2umqCNb3xK79GZEuEj7vU62HFJyA",
  "key21": "5TgWhFuWQKYaf94v1F2VvaMPqZDaLLoPeq2fLWtFC4EMu92cwY2RtL5LPu7FhoPNWQnC1t5MZmaUERgz4U7CVNnr",
  "key22": "2ZFvdu54CAByCe954UPhdHar18hmhBrs3uwxVttjKFinWuLgio56esF1eWNy1nwuJZez6TAso6UsxaQvJqcg4yCJ",
  "key23": "4GzJxWYcZeqEeT3rT83AsNnxgrNrfJ9GAU6Vw9CZ8sCfP9bRUMBFxWPGN7yfLbPoegF5xoaijNXAfDNs8avx2TQH",
  "key24": "rsa4vs31nVecUZ4SvRa5XjfCpPySdJfvmANudfVdkisJMMBvgRbrr7Sk18NXcsD8SiovdJuD2Gwdc3F1P9ZWJof",
  "key25": "48BLMAMMFJi9RG6gzbykLA5Jtk8MtxdnLzuu9Q6J6GeSpjvLWEoJveYUNbAhR9Ac7maE3MTFvRKbq4apSNRtuRm6",
  "key26": "zFuxWjrd2ZVfsoddUNzWJTij6LTe5XjFJbYwpS4a1JH2xe3sXLjJmwRMtavxHvBCHe3DxJQnHhEox8nsS84Tgyp",
  "key27": "2v2yhLfpM52smM2wgJQw1WrteRDBDy9baTCkmXC9pxpsDXvvZtTLuegQtyvoGqxcVfpCb5Je8nBdhCHdngXC3ioj",
  "key28": "61N1UxcMnAjWAoswepsDi9MSBsKDs1k3ynvSqbkdyPcRPVdLyzLPFf45pweEX4jrRcjLfd9RBVYrr4oCMd9A5vbS",
  "key29": "2bHzXpiKZq36K4cMPyRW2azSeVirsWwHfXb9fq9TZxRuiXHAC8gJDYYapmdTiNFmMHCtYXTZ56npLcHCjj52XjLP",
  "key30": "3xsPbs55X5uqKTZbwNk2uNMuCkz2v1tazmj48esGENEh8Zf9CPnDgQDsR58nucNgLAMj15SAzGm4N8uNG4VhLs1c",
  "key31": "2ayrSrTWRdEh8ki3eTs1VWTqoBWhHQJiEJnJEUsE4UzbBfUF5bxy2Wi4kh18AHFdontyhAieiwMr7iwHzNuuKA4H",
  "key32": "2S2uQdhHT5iRwhrWtgQLoCyrLj2UX7vHhG6o2F7GMLKB6wprh1EMKadtd6C9k8sSVeqiSSjhMyf7LPhtqvAZ3irA",
  "key33": "2G9L6VKqjUttwRJQ3jziTTHBaN5VBBGLiQzUTDaVmiYZHZQTyy8Ptd8zDE14zv3FifpXVyJgQPj6owHyb6jMEDKs",
  "key34": "4pgpGVJFsJ2AiEkb8taMiuszZezZVCQQWBVX4rzdS5BQferhm6fdRy3ZQqecWiLBFB8gKj7fLVazNm9TQQXbu1De",
  "key35": "3uBGNyqrDMZzTnK81NsgUCHyJ2uNnG9TYCdKZFPbKswKX4zskSjBc7MpyXcCCbdithcuhtsmjba6gVsBiuumQZZK",
  "key36": "4uQA4JD4tbsq6s27VL9UWbt4a4GcJsYbD13bV9BBDz7isWNYj4wPLcBmq387AW7PRP6UTSGX1KRFMi8t23oovY29",
  "key37": "5d9LSdWMMYNwFvGmCYp86nmmX7jUmLpCRAW8aNHQRc4PZHw3fbv4BmrysKqM4iw6Wh8bS2qptXkGdoJFvAan8sF",
  "key38": "1G9ijmLkUwRWvs94JAFw5bKjwfhkGQ2McuyZNPfnsEeGxuoqawYwomuu3faC4hyeXnr9fQWiooJT4MSsYq8h4WB",
  "key39": "2gzGEcWP1jVymEFFGyJJE9FXzCpR7K78SukK6zEvpPPecgV6A5GqcxBARNeaZekAegVMPLfQyGcdZCYT3v5HFSDV"
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
