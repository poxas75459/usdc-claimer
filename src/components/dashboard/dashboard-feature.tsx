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
    "3qFZGoABp4utShZdctF4c5Wc5r7CrUcEvLLQ3RCrSubMFKuCCJCAWHgVTieRFDktqGBL25pC3Qhcz4Lu6F8jfmGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tt89nLw7aGA2TqDpezmSub4X21q9JVPGYJqwViHo5c8KWtKCHxemYw2g37eU6scRMVmJw3kLdLpv4s91o1UqMwq",
  "key1": "jenLAEHZkBvMMutdvEKFARawGxWjnssoWU45uxpJ8YPQ7eh4KE7dDznxjjCCG6JZrwcWYJ4mzH1yhe9VbaYmLiu",
  "key2": "4ArbWAJL52igZnoAFPLhyJdQYUQUswfVkEqwZQrpDyWzNFVTUgEqQCduxHVJPNwP2GodHTkmhUAaETuL9x2z8DNC",
  "key3": "RNwzC2TdkjeBCQtdg1o3Sp3Rve1zL1hNZrfEPz85ovqioXSfLCkW7WPS2kNqC8wvBG9L5W8y2hXCqNB6iwJ16V3",
  "key4": "jx7s8tJSdMteNFREpxbjzSbQqRsxyWhj46bPD1TnbEVDNBsB7V1bFUT31zyKPo2m8VmcSEua282WZEzHNUW4xjG",
  "key5": "3fnznb5aAgjwrgUmip4amt35LLkLKdg42k9kcPE7AofrMrwtJbN4i2xhaRvixATVA6ZEhjHvLsgzw4nXwNX1UAUQ",
  "key6": "3e8fUSqBTHnTFsCenhqBbhm8JPpLD3JS22MAMFbfoWGVLvG4yVHPwfA2Doykt85sd18ErXiCwogGHezKDQA4RWoB",
  "key7": "2K8HJhC583b8No9vsY7GuzDdzVTjjcRcu1Hq4vvw8TzWgoKXTHxDS4xYVocjM1ERBhT29Ucs6Pgok4pHPdGmbmUF",
  "key8": "4d8sp53hbnFesxoTieNMUPXTWfYf4Kb4sS1s7zsZi2es33fx61oiKCpSQ5bW7JR9GUeKWsbNMWFd8LviGLEAbQsi",
  "key9": "4JdKusy8UZGAhDV1Sdcj4hq6ZJGbR74z3zjNYHxJX8sKpqZ1Ja6TCm9qqyCbPRcUB7HTbUynqPggGGRBNMohSZQs",
  "key10": "2hLRupEUQLGDJF6JVpx4PeQUq9Pyg2CjEFJFFsoBjZSA6b98syGB9s8bcFQk8mSkxVz5NRw6tqhcvk67Acz5xLUr",
  "key11": "s1iRrtn1iRsuqUEAuzXVDDEusBRq1xuNeEkBbJMLzEnf3nTvPoVXkyDwM7QgizMnVRyobEmoxCtDvPwawBAh5Da",
  "key12": "3wdcuHUguKjXUta16xSDc757FGNnfWU81LDNpfULNe3o897QkMpxat3zscYxUHNNP4DSPAS1MUMe359aEf1A1ahd",
  "key13": "5KVeLZfxDy5VG9geg8SGg7AJXDvPNcZRSftNCUg54HkJYtjqHLqnnNTgoERvspBUmz4ki7dAyV8Q3frpktTsiwSp",
  "key14": "2t4jZrgfFCAq1Zk7ejkGGEYZfGuMwGz85wYt73shMKUzadwgLBMJAYGNMNUk31gdFDct2VYjYgmtJHeBGoQavnL4",
  "key15": "32dzB3MVJ8geuG9ZMHQft3vs3EtWebeshGBjTQ4MZkPpE8GM1f2oBvQg4cKifvB8nUYEZWpvA5FddXViTnmedScQ",
  "key16": "5kxCmf3cuCvXjGiqwLkQBUC66qSyrFQA5JGjBqTmfsJb2LczK34F9LZvG6K7drjHzXaiVjC34h7ojoJruLqJ4HET",
  "key17": "4jLwEFCcLbToMK8k3Hs8SedZGPskp51rR8NSHkWQnqEjsGtJvzd5kzkS8XochbtgHocMgNXbNerwUKY4HftXKUq1",
  "key18": "5NM6jFgkPgDXW6Nu1a24LCCKC5nrzDJTzY78aBHqiuG3XUttgULFCxtBqTqtHEkHoTGjvACTHMwKN2cNgs1Rt3go",
  "key19": "5kwk8rbnQ5FGXwSZEjGaFfJcqaJd998y4RkWgnwd5teovXXMykzq21XnRu3MKVvXeiGg5r4EheBchggQ3McR5123",
  "key20": "Rs9xSR6Titnrvm6MqoMQhEuUVWvwMq8KKynxJGqkvQAmfKFsDFgU4i4A4oGKhkFrdENxkEWmU14DYQDY236frPQ",
  "key21": "4K7mPz7baAtfejdB1cur1qyG4Ka5TeTheYBDfavowZbDbgsvbtnJGgUQ5C6gVL658nARUEbA9D5p5NKCaghASZF",
  "key22": "4VuVejPMVzepD5zyu3XzLmvbVcuX9ibHL18BzaNytx5gCvAHjxEkDrmvg757JdAHy8Wyo9BdcypgwddKsNcFyGTs",
  "key23": "37Sm1bm7hVQLwE9oHmSVqW1DcGYbKa3C6BDAu2KJS4fuPyWW2uAV3wYDVua9TSkhJuDpcFEy9JZDCsQNPaEw6RZJ",
  "key24": "44vqnznAQjqedw4X8V6Sc1NztCAgaV7vWzyLpHK6MiHq3DNUFdKTnrz6e5NQYH3DwGbxCsnuEE78P8jsBpPZWChA",
  "key25": "Qh93k37EuuuNyBGzNmQeGPU5oBLUCNkuut6Ek7AC2BB39LHKQoPoeq9onjg3ajjdtM5pYAwPceG1F47PydqMQrz",
  "key26": "3kLbXcmcy9dt5bXq947YUrjdCjT34zr1JbsCHTrLMmj9vBhhURvw9w8uc8cF2yUo2x983kNLKom17Va4wWqngYuZ",
  "key27": "fsPoiodeSDhzdPWYJqmnKB3TkuUgfzmvHoekiAFp73uSEJw2LP8jttqFjwww7ex5w6DFPs7pVaCEpoNwsC3dxu4",
  "key28": "2tDMvSFPpsZLk34S6gb5CiQotChAGq4WbMWXgygn6LaFZNmkfkrPwuCjiyakeHKjbtH2ymkvdeF3qCnv24UckanG",
  "key29": "4qUP6sVBviDbnVoRcTF5p1fjz4c4E5nNw8ZmCYct85K6Z7D92XayMWbNw38sh4BaCCpgjCZweaaYYXJjyo18xdE7",
  "key30": "dHbcbNpeFJFQhG2azccmRHDMa8AWjWSS4a9kLdaXSbBPewZxfko8s8ghU5HUPNXiqJw8AcYovpRuNu3tQERBiQj",
  "key31": "2vdghnh1tS2mTumvBiXht3KL4CyMfqDiQvvLgHBde9LDwWs9UDVa1a5fMt4WEBYR76wr6KM8VrDhyzQi6WYqVFpB"
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
