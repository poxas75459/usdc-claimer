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
    "5LKaRMzs4axj515XuHayNn1Bo6vQfZ2vHN41caCJvvCHMSsg4LdjdWp8eoUkbgFDSb5Cg2MXXhxgYuHdNMPTtEra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Goum2dgWUG1WCBMjoWn4KFtVTfKGwBN6sNVXo1BCSeEhvxSUC8dk2jiuRQMad7hqEmr2sPnXEq2pfrkh2whYrDy",
  "key1": "2h4ozrVc1YCKH4VoqMzvyc8Ecd61PtiefmL7hgpsvKabYwZop7vzkoB1JzKjzieSpDpmwjY8ZACwqvjN3JE1Faqv",
  "key2": "2Na7HEjRUdRKkXJSDQwaqFh8M59aLUrY8fab3Nnqn5EyZGGFFekoeKrhZL4hxs3Ay93krUMjznKScuzWDXEVnRZs",
  "key3": "2VzF67ErfVfA8HaqB1njcS2rcQBe5ffyKB2DB1X5P66WH16ig8GMHz4yYXmD3uBGpuiE5xDRL5jtjipHB8nCirec",
  "key4": "YEP3tWBYYVUcEycxTisijARAQpcS5fZuz5S9MnMXfQp4Mj9xksgecep88iwP2vVzba2t2UUnSKxJhjDobjhCxNE",
  "key5": "EfXm72mLpFjnAMqjMP5WMg2iAUU5bGSt7QeJu6RTCKp63xtxCZZrmfJXQpEM1Dj9tByuAT48z7QjyjKGLBCUQsQ",
  "key6": "2ut8qixCSF9gbfQPP6jb6F2AhQzpe2Z2SZQMc64uMWjQb5sntGRLoHXfpcfuepxj9cYjBjSHM3jj1yagmmCGrNGV",
  "key7": "3KNyqYfWKszgwTWw4ckT5APftspLZ8qdVxK8Gbo6NXijPWcV7jD1qJpTBHXwywRxE2nB5t4kU3xuabcV2T4BFGrQ",
  "key8": "62N5jgZyeHzto7tFKe1EEYszNfJnaczyGLJps6TLSYjrhbyH8UJQTg2M8UYZGXUeHhawC4McLV2QcrEZy6881P3N",
  "key9": "2yUSi6JJYoLiDsoBcFcXMg1Ye6AuVEcbTd81pnz41ko3bD7P3DbAq1Zg2Rw4hrHffoCWLuPvSWra6bVPJaBRFMib",
  "key10": "4G8FKXaRe4qhjkJMLmgFJLULaGXxJ74VEK8NTP9hNbeU7zgji816DDikjSrtN1HfkTVULyXSdfMyZ6A3uUNJKYSN",
  "key11": "5LQwRRmUXD67kU2kWGGh27qGn6VLmqHc2VMfZ52Dt9azwRg3RMbqVHfDn4Xii3zziqPwfT4djF68oL6ddEjRVize",
  "key12": "XtXVELemknD2WMAFgVgyAA3Uq1X49LQeWHUgCrHuk2TrEZpVYG2UgnZDkVWWLjCeqNhZVmA71z5RpFogMhoVeKy",
  "key13": "4aaKfnvWz8HKKvmvhUYUiHBr9WwGF4Xn8NxNRKWbV45svohC5ZLnwVeDafe45fRsunsQ5gRmeZEXN76RvbqWWFJp",
  "key14": "4NcHToxzjfSN8meFcqqX11v4KEpMGATZzYYutpPkE4A7SDUPwTWGu6kRHjgmMw8XFCx9LdWsiXBqh9TBNNcoAY2B",
  "key15": "2nkMmyHmBGDxgvLKTuv7assLeWXUz617odwpVRNEaT8ndyfPcT2GsxwGaS9zUt1F6CpE5QcDPAdMro2MZp5CkbUn",
  "key16": "2uAJ7HuEDCDZyZnwjxde8w9CBDSWMsjpvDZ544x5gt2NuKkBNAjow97Y17KFSK9Gh9LQkYAh46vu1YXHrc9NSqdo",
  "key17": "4LjrBjvrXRWw7idBb97ecHB9pCFGPCwBjdfWYUvoMYNnpmJfvNVvK74zLBUcVhoZjQUQ1RWPK9P5BVGisPZyP1XR",
  "key18": "LYTT7SfzxvNaCbKryArWH4B6Q2sPnqfT9E4QsANwX5SnUxPWxDCNpxdt3uVCKJfmZ5MEdCGun6TFuNcDURwEh8i",
  "key19": "5EqevbQVyFte6ys6XpVMcwD892kps7VSsx22TeSBihgmbSjSkF77xzfsXsesT3TcjNJUZRS7PmAdZoWhfXZe9BvP",
  "key20": "2wv3MbqbfC41poVqTHydTyZTtxMoemsrAzKvAwiWQ98R5E2zdgxofxfLMPvT5HqzizUoR34XS9F2ky9bzYNCFapN",
  "key21": "4iVKBJFKNC1FZajx5567YYcguSdwrKkwz28QfiVx2M6xpqJSfzdtjPkjQVyQLQupN2pK98zPVVgrzk5D9wpa8E7X",
  "key22": "4ggFDPDgeyxkH4cAJ7UVKsyCKPaTsmTQs8iupQ9JHo9upiDv7BoRi11iVRdaNYvrDkwEByjvzWt68azR6FTmEitv",
  "key23": "2CeQhFB9eudsewHUwU7xnA96fJuiSApJCr3ZcrmCzhdtdTsfd6Kkk5VGG2Jt6268QvkHWSXccKzSHchePMu53LQr",
  "key24": "176Y9vS24zDZ5sKupUnxJCvJJHjYNccCd8yPARTV3aTZGMyAmcWgEZvJCrSvhscGjegoKgf41tHX19Fma2DWaRW",
  "key25": "4jzqeuXwswVouwCbmkFaa487RCLNgacSbgrnzjzffbH6E1DysPC2z1AXHnmUeKFobaojDDBLe2QVhP6K7XdFw8S5",
  "key26": "5921zzYP6T3ACXaw64aH4boVyfnemde87ixJdBqjLw2aSZVpp4YZkgYqnKoQmET6ULyyW8E2RGE1JCcvLzAqK5Z7",
  "key27": "4j5Fy1222cJihAkos6j1T6xLDsERWnwy1bSy8qRuHoaYkWrRpAvPTURd2K57KMdYFwTwGrW2DooecURhrriwSJ2D",
  "key28": "4wguiu1UcYAMmYBAMmaPEiBEhzoezNcbkc51j8Sm5fS9BA97qbtE3XpXsQxTKh2pcAYRm6uZaCKGcfChpopE7V24",
  "key29": "5bG2P6hzk1q6mxEMsUr8XtwPcT22y1rzpDdBf4UmCoCCUkZBz3Pzujtxvv9k7yynbDW5zpz76am8obcdY2nwoC6q",
  "key30": "56hwbo4ZAndteB9xTWMSRyqNFswSqYiSsEjSy8x9hxvfN3hzNbYY6vTMNEp8mhfXCdbdHPCHrd5gBXwiLUDRwAwK",
  "key31": "45UBeDXX28Bd6vd7BVRr17UghRbts3w9UPi3wMsRnXbx1zAQtDGCm6xoKjUcSVRgP1598521srGi3tFZauodSJQ2",
  "key32": "McCA1RJX2bAke2qUpVzNGxoP2ee8Tt2tF13x45UUPXoPSwrV4GkurcPaL4emQy9tZSuMpeW8karSz6TDA4wkGe7",
  "key33": "669S7bBWGmSqZ2zENmp9V8PRU4ApZP7LCWyPHfuZWrcbJGUmm8R4Xarvm1pZKZTzVLNoZF3QdKwZuXCtpJSqS1Rg",
  "key34": "3VDp7SdSnMXRfxkeCkvZdYG6MqT16GyNtPj1wc3721toSJ8moCfcwLoLj3KoQo8nikp79FJCGSv8hCDGv14g4Jt3",
  "key35": "Lf7vmhh2iR5Fr6BAsdo3mxiA2RrXoM5YsidZ72T7LvwDK4Mw1G18jdeYkmC7YoLyeSBFwozrqj3YHVgxnMFrJ8P",
  "key36": "w65FeJmnh1bNTzCtFXENVFRQXvNFwociMA6suubycjWwJkwDUmBoA6QSUZJtYpWWi6N4GaPNW8vYTwLGhBhV3U3",
  "key37": "5CtYNDi2v68THMnA57hVx7X6FuG2JUx1WzLQaAcQ5LbxHvn5gkELnpRcqivorHY5FRiLPLtpZEcKH8UYojMxJcxe",
  "key38": "FgCkCJFHazT1mXtZJUfTnXpsuNToXWUNvPenDcQQ7eNtqYHC5SzhEKLrtx1NkoSEtANJKbvAA2w1Sz1CquQJqhn"
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
