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
    "5KKJWw5reqCxQq76jY4otFDTXeJjku1zFX9Qe8Vu73oZpC2p6bAmWfBF1a9sKfioAGUKCAbASm1rRePgZFMS3qdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5wHMdx2HW5trU4sifGGYy8GTHkpyZPo7GTi6vjrkWFrvcfxDogJgDySko8L74WhEBGUMQwxMdRaVRQ7qc8FDBg",
  "key1": "5Mx6fc8FoS4YZJZWf2D8BNzg1m3BHFXUkJXCFXCzh78ogp3GAs8zN55kJfxGn2RxqqEvHcYXz43VCeV2557VxQMf",
  "key2": "mPD4QBvasTQp5KRAdfxTznn36u8PBEFJtduUPxzD3ZbqnPqLgNJPSmqtTBAjfiLxknWNBvdgjV7AErZP7Z2YA7a",
  "key3": "3ssKU6k2qnKbgWde1auYA9mxPKTAAk4QUt3aV5pDZVjXV2Hy1F5zXzbVBibyf9HZwkaUdvP2rPS7Yo9p4Vg8SV1w",
  "key4": "3a479eevQ4USCzMG7M7zagreXjYyAoX4oWc3hLgnFs3npJ74Q3GhxGBFqiuRsWSnfM2johmPo4tG5c3rnJgVv3e4",
  "key5": "47MyRw88ETon79swQ3vSEQzNMkbEFPvPVTbhNGg5pgBmuN8pRTcnQcxzqKFXLTDL7Hveo8X7hmqZUBZFWjyvbL7R",
  "key6": "4ictqGSzgJShbsrbKiPdjD6LZZw1n7DbW9TbxhY5V1NyN5vEXe2M4VQX5ffwMFieWiHYEGRejvgFpEW1XQvWhazs",
  "key7": "5L4wRw9zpnZBNyvwudnKu9o8CRgkgYSzqYmP6SAupEUBszPHC3usWtuxB1UDbCnNxSVsCP4E2hHEQqtjTAMhXBEN",
  "key8": "64zUUkn7QvYhFTF8h4saR8AHgTDaShkx74pehHUaDTWzqrBsvxom7pDFKizeFQ3UqreqoYdMSH8Pxy49Lc2JXmJg",
  "key9": "7HdhSZ6BnqaEC3ATqAAk5BwQ5uifoEfU8h8kuJwY7hRhhfBEwGZLR36ncQSiXvhvSkKxGx6b52vhGKR9PnLZswg",
  "key10": "2J6LtsspuoKdww9ESsGcsY3L9cSN9ZEcRtGWReb7SHATuAnoEDuKRemTjrDTCwTf4iU3mpuhiZ7i9wVT6YwaEU1Z",
  "key11": "4Xa45ukW2Jt3tUJWBdvrajHogEnP8sUxrFdzYrnobVRPARmC3RDkFxHLnf7hyEunJwXAoUjdTxaou4MiNQCkD29u",
  "key12": "7GjknxYWbecPZHjDAdntSXv9mUzQ3Wk6p6a5e423Y8XZgiSDauaW98WcMJn21VWDp57AjEDfBGi3vQ1RARCjn5T",
  "key13": "4qrRaQ6vMuWeZw1jh5uesWhKJiGGqgEJKfCy4UR4WQ3feiddZCopZfrzg1gnGphvZ9puJrACPCMJ1t9BVUK8oh9z",
  "key14": "24ESgETDSfbd1vxQUbeBhE4GCaspReLJXoRKiU3GsCQtc2kHJhxsrVwJSzNdgguUkctFi4cqP7vqL76Jhms5Wo7y",
  "key15": "3r69N2Ew8AoeC3u4ixC36W9J9DMBBBHV9AykFfn1RCQgtBCiNMHe4ULGmii3MnwYLGWrAewhYotZFRH1hcqqrqRh",
  "key16": "3T8H7WgKagvuzvpFTStevUiSfg2syGVDNPHbMJ5M9Qxod4RyrYD68Aor96YhjznK2nHUSZeTkJPTsPJBMpFkyTeF",
  "key17": "dzbJCydKw9nCLxc6k57J36eJNuAC6LD52AkTduRDCJ4ZByFQonCjGgCCjHYxwbVp6LAcv9drHBtwqvVgYTMbBfu",
  "key18": "x5aiAFZH9B1YqsVBn6yuoWPjK98WTkhesoHzrLUdh9GdduRNttRLCto3PUF6jNFhd8XR9rSX59EhMjiWpdpXawK",
  "key19": "276wiPom6ZhQxY13ChvJdBrvfp8rxx1PJbDdWvmJpNjF1FVTAqko2ca33U7Ma2doRekqjxH3WJ6sWyudd4uxwxAQ",
  "key20": "2fvdowS2hprHHVnatxxXkLoZd9CwvR2XwiTM85uViavXRSPRu1dJ8jzBcYUqVhk8T3ophezezhcaRQB5vw3BqJcC",
  "key21": "4Am1HYFNmvLZwFVuLLN3hajmNB93UCPbqLgnF1c6UGEc1jAbnQjGompi2pUGRr9RLQrXYBaDuvpEp73M3AD4vtQz",
  "key22": "3Dyvt6eeYV3PbzPXSFjFyK2SGQMkt133f35V4hNREMeXXUJuhxMxGzzvdRUXDGAhY3A27L9nTCkGKoqtt3YkqKqw",
  "key23": "5XHj7Dz2X5pfmcDJpRP3su8v761rRSW2Sw7dnTMtXMAcUmtdsqCssZ1pdFJ9GhK5RrC5tmvGwjChayHfedbfbqrh",
  "key24": "3PzRxa4SUfR4ybChJaUH8btBnCJaws8WEB58z8RZtVeqp9X6TZcYFuaUsMDLfdPUAknx21phtJc3na8vuTzmiJsZ",
  "key25": "5qPFfA6nkNGbgQU7wEjGLH9FRTEgEZwvgAxcAqpKcBiLUzmxtcPaVpVM6PBHTfqeB4CRauKmMJYXrfz51nLaw4SA",
  "key26": "3mS1K4rLAsggojMPEeA2q74qFNMjGx2RaJNn6nS7FyAGChhytngtkF6wtNsL9RBEXrrVikqGBDjb5LLg27W6jaTe",
  "key27": "2omAbi94hSUQLkpJSk9ERJLREo4Ud98pNePChvoF2ygujKzEeDCmQkMHQgyhtL8ogzyS68KSieWPED7dccAVC3Yc",
  "key28": "5Nx95gzBhB2Meo7k3rs2rzs67mewyoCtiMgcae7wSR2aTYatfKMq38UHhEbEqLeBPaoirr4QmUJo6G7Xnu3cJpej"
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
