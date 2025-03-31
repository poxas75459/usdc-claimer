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
    "5wjMK3yJ7mxCQ2X9eAXvozNuGhHd1KqZdqqED9qbQXPvqVkDKaPoe7tFwTE1sK8VWxRg1ZPA3po1QAySMqjdtJZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42iiM7wvVCuEnbUDTLahaaSBFVUZse5RaLrdLXjtz2bBYatuJPzWswwrZDQPNg5Mekmyouq7YA5C9vXgbNybUHem",
  "key1": "4YF2fMY8c5HNhkB3HFEaMyi9zNPwo9tuQm7d2pFX4PhMyuufJhVehu22UUoftgiHCHTvBaVDigR8AyTM1RfisA99",
  "key2": "tiv7yKDgGqNUBwZnyTMS2qRgMdcNLfR4CDm7VD7qGujAf5ZuYpcjA5eufg2ZLNKdgLXuPgb7SaVAAprGvGQqg5R",
  "key3": "47P3xrXPq4V8vpZeh7SxfTKqTzyxEQK6ehxBqN8bPJib8z1Pjg1nM1T8STvZkoD7yNZwYpw83QdX57tREA95roz3",
  "key4": "56bCCZgCx8diXMzYQ9BtHM9wPFJz2qFtXQWGg4GpACEfxn1TGYavRybMLYT66gKHtYmk1bKZX3EKaxdC5naT7ZvJ",
  "key5": "42D5JxRLWqQPYfCoeLtXZDVnqKDbpRrDfbkKztbxxwz8itt6gZkXPhykBtPaoBwwfQphju3RZRFAcV9kp6sa43YS",
  "key6": "42BhYJSrDE6K5WzTiBij7WXMhsem6dqPcWSVX47diyNZCTGdQsd3YiJASymfxVzrdtQcKi3uyctxsFVAwVXsb5Ji",
  "key7": "3gRHkoaryD9HfHVrU3c5RcaARapB9mPoce9WfvLg2CwKJq8mDo2jr5kmbXXQopzER7Kb7zuBV5CyhQJUVJdiWx6e",
  "key8": "37Nk8v6dU2HPMYPDVKBxTLwuGJ2a1EEgDUVimzqLZQNQtGaSNcgJncNG31NTkiJWLyNHJr2Ho7nqJPBT91jfy8PW",
  "key9": "5EALowQuvbNPJS7BjjQEnqQAxKAn4iVxGTwETkHtdsp3hzFQpQUcT3TFf6ZSrua8EXSuvykrWc6sVXgWH7ihMKKw",
  "key10": "4x4668xyJsuzQRBaXptTLx2vLKZfmh4d9Jod1A3mS3zY3U1jUwYdb8sedKGHDYNSdGn8Cwawuw9asLrB5xej5Kqe",
  "key11": "3iBmmHw1ieuvWDeaijtbzXkipzkSZjavHNn5dPe9dqM3PWt2quS15x47hffWRiRnihNLSSwQiageh6itXfRKaRUa",
  "key12": "5EeqgyvysgXhKu7jhg3o2xSik9M9oPNTW1vyF6J6emh9WPPELvHxCqfSciu9Y19bSpwh6PZrPi8Hua6rtbGkSYv1",
  "key13": "4MbxV4PWJEK1kB7yNgw8GaMkBsbz577JeZy1B3P1AWJEXwYWTDwMY3Cy8DZBGNUdRVqEuUDL2eTW7y6EYQbCh3pN",
  "key14": "3acFv3sVSMpUzxAN8R3L37vYvab8SWVVoPCg1BYprhRSzKVuXopmx39jBM3qTtvcm3E41XyXFt6fWc2r7dSWkq8m",
  "key15": "Mt6cKPQX9W56m8vBCxuvsVotDpjk1T3Cc3QxCezdLrMHn7c5SSwRF3MxNLMSJact2548EQ6UTcMKdxQbfVaox4U",
  "key16": "5QZ38FxzQmJ3CDk7qWbYNuyZWYVqh5tDrgxquc7uLeZuSS8b9WmS1R3xGiioBe71EZbHec5Uuj7yU9yykrip6U72",
  "key17": "557BnK4iS9SjuzPs8FASB6uC5X7zpLEJMBHUw2d3zNwFXg8GGtPi1dXzUEaJNVkYBJfc3kF76XJ2DatWwJkcNbHH",
  "key18": "3f98EA73UY173VT2rv3tJr48SKJXY5UFSPk8RjGQEm3o84TZ2wCULgqJo1J2VELg1EYL21oUc2z9PVbF88aWRdkJ",
  "key19": "4meUAqiv6RqfCFoNmXviBSCbkopAJHCiB5ssEJDCiAYSYAUiU8VCVffgDAY33ujrDBwdvCBRvKkSiQxzYHdKNoyf",
  "key20": "JkAsnya9Euu2saaZ5gpCxExD8knQXrbKWc9D58YdaE9RcMSQjbqiWR3ryxSCt4YRub7dfk8K6RQCMQvsoAXqjgD",
  "key21": "2CFCjXjbLrk4dgtBFf2Mt622gfLemgXT5dJTWxJPWxnQHLh9cxYj4kmhQahtAQDGPQJ751Lpu82ENyxNMhXGE3AT",
  "key22": "49yHZvocTdopMzDjTNXn3GHU6Gs3YBSXs3X9WZ3dT6gFMpobfevwnhddfWonHUBDrF3YXKZoUhQ1SzWXi5Lr6aQx",
  "key23": "4aoUYXWsjfQcufMRFzHX3WMpifzTVBT5AdZGo3kw25zPNZ9sZcZbFKFwxbcGFFbeBdt9ySjPsxHYqAyrzqYfR298",
  "key24": "4iqbnYUfZqWSWyomF2vtY8S8eqAne3exP1nWPq7XX5h9p2cWQnnEF2tbQUxbfm2yPHu5d4JA4BfgNeRHbuWkiVo3",
  "key25": "5Cj6Y3FqNgfrKfBj5vS5cbX1nR4ZUm8ErpfyUzBFHvgAy548m1HzvJhMzaNrcZgjzPoxUQT7y6Cwp5ReUr8KyhHe",
  "key26": "2moywuCe2a2DntRpchKgzejN5wSEubVaYt5NDHjos8Lj5BT8mCkT231fMrqoXtHuZQyJTeKQYKZXbS4e2Pxw8X5H",
  "key27": "2tQvjtPwXhFZDskABeXwap572gZY6LQjpj2kieBXBbkApCHDuSH49qgEvASmZtGUAS9v8uccZkUK7RDprGJbAuVL",
  "key28": "3n7BwkZHS5dexjTXCXxS81xCtCb9tg1bH2rYxizepyTUC3PZtHbmsiWoCYE9hzK55uZwRTTzKAeNfgsdCBoVeWbM",
  "key29": "4PkcLFZrXsJPcYL6KAYybLHd8akikUbQzAftXyZ89tMubvtGuzJcC5aef4bwWSpv56qAeAoeSRgpg64m2w2xTqkK",
  "key30": "MQ26bVXJzLH5iEHhanNRdQ57ZBiQ3nRhg3RK3MyDdHdgcN4cG2kckR4EgLxLmAhoLp7vcgfh9ZL7a1Uo9S1EDzV",
  "key31": "4Uzd5EN661teL1jBwrW4N2NjKw1eivZgt1Em8PdZUK7fcCYbKgGB21x9gxFiomxKSoGUecxKPSS5p6haPwxjbhbn",
  "key32": "5b8QLMQigW4saAnbRE9gFWpgbmoG4AqorRvt2H7aY6D6HhRiiszeuFTFx29NqAytRZBjeH58Kvcv5mrGmLA13XWg",
  "key33": "3CWrWAEptazqcvCjFG5Wj8mwbBCvJEkCGVBsSqE1XFfpGUQCBJaUTMPkqws6gmusrJWBfHKAWWS3eBXptQqq5b83",
  "key34": "4A5Q2aJsMuZ5Dit3LZXqhi71553zHsm3FNHeNW8MMrdp8rxByEyE5aTrP8haCyBruiXyWDssSFc6QgDTbMpSM4qt",
  "key35": "5PHQQMarAo7tGbLwjChRATET76vGAap4doTFkN9kjaMpTEtko8LjREf8iZCYf1LUUmqVwjH2EPsJLWW8qR65KWFj",
  "key36": "T7dw1HTfcyKc4DiaSTH6SXwin5bMG8gMbwYSYiweC4ieFbFcZzwGXp9hGhWSoEBR8gsas8eZFoYZdRSy15nfKwG",
  "key37": "4fymDr1dxLUtXQHEwC8AL1NV56TJpV5jSM84Cd3nfk88Kt2WzMeZYmxdzyRUW2GKEkscnVtkXDHB5twhoYmGAJgD",
  "key38": "6381DPHrGhWqXEcKz7JtKSvLrKLShXiyg61D4kpJNxHwR2d6gwAdgsWYmCLoewcar31XxkvKQ2chjAzDQbuquWns",
  "key39": "4ShixghiZ9KtarhFAPnLjyABmBHtrYiBfVteEJ8Hfuems3XKFYwMZWqUSV3obTn9mTiM3ekYgEiYzaRrb4PRL2oW",
  "key40": "23aiADLLs7JNd6odWptm3gtRX5LPVKsei8fhmcUjsRwQkXGKU6gRLeNCofxbtEijQTQjTUDDf8NnsT9NQ6wZcT58",
  "key41": "2HRGvxarRuxdC6xFUhqYe7NGcXtBM85PiSn1Cg668j7gpifKmb14hobdhhH5j3ocVoR53pFABaCQxUQyFczWoR1A",
  "key42": "3oL6ZpV2rgh5zBDUYuZTk8z4hySpFBENtqWrYZxMPbvbzmpkhZ3EUVJZ153kLSj7WAv9LHYtuCTmSLzhYpnBMKA",
  "key43": "2dM7xqAqbP2zaLV9Yoam9oPZeDDZJ89izuaXG9DeDQ5osvhv2gwzyHi2PjvtC64npKKjpNwhmQV4SnxTxQvAttNu",
  "key44": "4SceVQLy1zambGuJizMDnseqtvJHPT66qbmbkGrtQK7m7oTuiVYh7LSoSLB3R1q36UNZYHYndkDxC9CcnY3D7v8u",
  "key45": "JTAGZezjStVwrK2S3zBsZsAeNqURy4qFgMhJ2SEYCMi3w9gjynm85BP6CfVcnpy7q6NdTEJeTYQVuaDeVTD5hHR",
  "key46": "2wsAC2WFNtQzZ9Rf1HfRL1k2TubT5xjkGx1yFDryomKsE6B8xjdowk4shGUEbbXi8PKdiW7poUHsNR8gS1Dvx5Gw",
  "key47": "5SimnJqzfUaJKoUT1sFigVuGeX8BjFAKoGzRgDojKbPAYUMJnUpYFEKmY7mCkDqvMKp5faRPx8CarqtNTefszdar",
  "key48": "66dvhJPWgHVeGNwsTaoTLhRraa3QNNTWAWGxGCfrBNYPWr1xYJ2Z6Rm3RAStwGDJ1zwXLYxi6G2iHGtKxDWDTMnH",
  "key49": "28Qy7FTKFQHKDu9wDLModTvN4U6c5Kj9cd9RiaeidykqaH9WyQuhXm5UHCgmAbAYzrdAdtXPji5tXmRxS6T4gi6a"
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
