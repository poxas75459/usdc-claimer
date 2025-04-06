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
    "sG6JfCCquCsoejAN64x9RPUBn5osPLmZoMZhirkwy95rgYaZ6m47vKiEvLUnsFDMBVd85xoqp58gRgVVEwvRSoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VuN4v77tfsP3MWNTM8T5o2LsiQasXkCGbvjyM2xS8LxQYwLtuvgTg6mukfE26854BNjzJ2ThSu6ubJWMtYNh9fa",
  "key1": "4yYcTapEnNtJ967iWGKeH5AvREJ9yxqrBFHNrJXHSoFsHV1iJtStfi49w9RKPjVzgJw3jpPRj12A9FnnrfJAmsrX",
  "key2": "5eqx6FNpsgxf88pGpfwFeFMj14hRvDBLvGtLmUoKr2izRAN4zLm3vdRPpLCWmJ9MyToiZepLBHvEhbeVhDafA7fD",
  "key3": "2Kksshq5Zc59brTG5fvufC2vdYRmcGEN3L5RJvE4jokSWLVMDusoKgFRgKagZbHVc1dFHf9m55BjMMkwz2qfZVNb",
  "key4": "5X8RbsJJYPgpKUwR9BstmnAXBCnats1mKVp8udX7Zc3s7QJ6aFfFG7vs3zffrZR4nVa2G8scRX3rxT6ycms5MeZv",
  "key5": "5C185nvWgzujD88VmvhCmD2bPKPqPcGdAqF776dp8Ajhkiv5n7rtT29G4yTSYPp1vhR3eU8KLxDERtt71Tb78dxN",
  "key6": "43Rv13CMRtKkeRWpzusu9hUdcXhSrxDp56YQLGKdoQSFRegvLRfxjXdz8QjGAXppQpCnZF1X2KdmuGoU1Yv5d8Hd",
  "key7": "HjMGoSoxQwqWUKCHT634GYoYHrQEo4ybbwcehEuEogMLrHkgUf6gSWPRMWSub6A2x5cQJZ326W5gX6BzLwzAPGU",
  "key8": "2JCj1NMcUvhUDiMk5aq9UeXxpc6PzCz9KU2Lxoz3xq1QGZV4knLcB392DViH6VcJJEP7NGuDAmvdiyEe6VNFYaBX",
  "key9": "5zFCZsPU27aKpiZHWio8ozSrqgeB9MZTkN3fcWa1ppYiv9B2XoN8cHDsDQAVmK9vGVMDuDRGw1EaNr1tGHnTRyhj",
  "key10": "27UTqeWJQrPG6Sh36fx2B3awRFwf7rmhihw5Tqp6TcEduuSkwJsHj6VqPvMrH7xjgRyhmHtcBhGzaDWmLS7y2gqy",
  "key11": "27K34gqtu4u81GPw1pg58t6uQjCHUMA8xzukmZxb7EDrSX1itxyJ2R1vVxVDdYDLkVwJoujqHBXWhqALKDx6fEMA",
  "key12": "QJ6htaR9ZzDRuK9ZLYAaZBMqmdG1Qpo2So17J55xwvdYN6DumNPeaMRXcg8sKQvEW7Yq7Dp489iVKeENb8bMjpF",
  "key13": "4BgmXp8S1Xtv1ffmPFoMPuNbD7xBh2P8cytEXg6GQaWbwRcCfVHLQLEuBTJvSUkGMfR8CyJHPQvsbbAnadooQDme",
  "key14": "655y1ZJUFaC7oRse7nJSszG8HiXnapz4cY7q2xxAp2ku57Cd4hYA4RfXnCn8VUAYGFH1Yd9ofR6fvR3nze8PHxXW",
  "key15": "26ZqJdykvpdbQB7nzvn3JUE2KTsbrrSz5cjq9giZc1mLwwgeX8b1xmKy9tjLHWievmhgvvqc2TVjqNFmspi1TAYC",
  "key16": "5Tnf8C71UQkLmymuH2toFD2ozfgJh8PEjpkKS9r6W3nWTg6816CVfitoJKeEVCsq1LZvv1kRzwfqfqPq5RrVKCrj",
  "key17": "3yWwG9dThm9kpxdiZHsj8j5Ez4e6a9c4J8CUXPqBzRRqwvKMbn15sXHN3CA1MzmFnUGgG7VuqPbCsQ5j3tUQY9NZ",
  "key18": "27Sde63FR21DXsiV71rciuhYp16TtLH4tV6zig93HtimE2gVXfUcywxDeTXDBZD7ykdSQghQGxA5tmEv9pWUUP4M",
  "key19": "2DndHNDeoJFiTDyNPPs54pRuAmAX9x12UYPdPXkR2GVG5Zyvs839t3sLVPLFqrfwK13AVEjDAAs5Nc6XcdR3tMFu",
  "key20": "29aCt3QZSByAxZctr7gduG9bm1bjeQYvhrjmbjfuN3LDWu8dpEUJX3Jzq6fAS4ujjNsPxdy9GkD7CmnHWMsrHwJK",
  "key21": "4vXjXB3CEbuG6V8QAnMNq1WTZ9si7dFGYZ11WS6TBGTgfViSzL4X7PHianbQizEGyfdzgyEF8qhAjnNP4GBSUvNn",
  "key22": "2TZq9GKN7L3AarLtZucCWnDPb5DiWvq3yJJJ7SVzZQC2EfAnrr3g29sZXviBgTTvq4CsmWDN5FzqwkENLWDJnjb3",
  "key23": "4srAAo9pxehtNQxch39CNpp378DXzWwmKXufJTJePjL8MHk4b68qYoZAvgtWmdHoB1Kbcmw4RbySUKd4PBAGx3b7",
  "key24": "3dKLNkqyRbF6XhVPKKDQwX7p48rfbCctGoxuJ9PB4rDpr7Z8b1nANZr2Aia5nBGaiLNvWJeQZK4p1Gyn6DS1FUVn"
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
