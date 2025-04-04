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
    "5hb8HZ1TsF2UDh8PNKFEm5j5KjaPqrBCqMpaA8BmHnMmnvfBF2KaEggbcyG3Z6Kh1nBdxd3dhFmXu9t5sKmeyUCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ATdpv65cF99WCCyP8757KRzmVA6DcBdmw85Yqsu3cyFPe6XURVUyeZf12YFQrtnEXzFYTVXuoVX19kovq7GWwh",
  "key1": "54wca8Cm7cM4LHLruvUgUUSaBYNsTwgzJGrCX3n7mqybnywV4XMeLvGXpqZgPZ2BQBSMvCGEd13ei7q6TntsENJx",
  "key2": "3g4ZPvbNYDSDiNnqDaXb7EV3GRz5SbaN7bEE1tZBreppVWfVce2FVvdXdgig1FvNguHHR3Uv2AvLoQSKiQiCb3Lp",
  "key3": "3vMHWmEfwmSCucUjxcBuR8fCkArSPB7QhKQEmmPDSyNikDcBu3D2uNwCbYDhwsEQS5MCYFHfZvFStaEzNAvwpwQy",
  "key4": "3oRi5hdbsZJRZPfXsv2iqepQWrrDHSVcN8KYrVSb1Uy8UBMQbE7unCZEvLSQxdnWmXKATpYrETzcCuojYkDsNSFS",
  "key5": "31thZBPNBbXYpnsB2ne95ECux8y2b58CQSCBiEixcsjWyDM6zYRphkJfJ6bU1AykJEWW4g8gDm6xQwi35sjkyE3j",
  "key6": "4kY77ErmmStER59XBxXSBJ2j4FRRrMnTgKcJJXWqQTVUa1deWdmmqf1wzZgcYCHE1awwqnKbWvrvBMutLYzBq2VY",
  "key7": "5zWoDMYQZop9X797beTAK4Z2EHJSy6SpaSXSvmiLU4YED3C1jAo4xQUp8oWdmg1iHABDYVHfNiXoo77iQ4X5jF7K",
  "key8": "TEZAM73j2FRvwfbyTic3iiqQDZpCtWDvpZ36K4URfA4a5QbLfwCvTZ3DBKLySW7pnt3tbSR5jQW4KNUrtRqvxgy",
  "key9": "5xMmNBKH6UWvuYJrKJVY4rP4KuZvEQ7zCCdMkja4fePxETXtKRfokLFKfWRGf1mEaXDcwKdR5aoURiFe49QHZr8d",
  "key10": "47kLm4CqhpYBn8vEahbPpSMMRGP621PU38y7CRq5f3n5Zoiza84pAK7fEUYX6AZCy7hs59b4bGUiBitmWuoUr1ng",
  "key11": "xNVANEmHmoz7bQGePUCaENgQF6bB2QMozNX4kqCK4SYEJvGJEpshDLffLXC4efrxns6H4Jz4fi5Xj9krSS5MjYF",
  "key12": "2LCRfGSS1wUiPV2YaMYJzgcFPK4EpyNhxv46X6g7UGtss6kSdLyA7BCNhsdXgn63DRhHPSyUtVZJcQm3ew82xEtd",
  "key13": "PQGJfnWNcJVGvB9V54foxZ6V3mSU4ZUHnLaa4KugXTA5CKFijtJMSzAVU4cXy5KNcgQFUyrSKAeY2kMaEZ7StxM",
  "key14": "G35QexmGUrqQAfmNqapTkMXTP2wh7yjysiQ99DdVvVTB99ftFUYyu1XrZsMJLZ5veGL4JoAgGzzGKC2krckhvL3",
  "key15": "5A9Mj7WRvEiQYLueU2d2voaKiZexzNJUFzHKMuTh1W62KhzbUdt1RyMsNfbGXEHZHg9iKH7LLHmBYRvoz3TtcY9E",
  "key16": "2Uty3gXXtBfL2VcMZJ8KjcLG5621V8YHm8AyyYpw9MHa5SAi2DRRnUamtSgovo3AkRM6tkvSZ8w4UDS9nUfPRJVx",
  "key17": "4CLXXS5MusX2sxEETUkh5WEAXpyfpQiG7XijNmgf6kyhEgz8QpgDFG8iTsocuar4ENGjxvj5q5CNHGeUarX1e5yw",
  "key18": "4KCNJeFVHhwa8aEEVMgH7MLfzqsQrSfZpiMDDMWL6GY4Pu7MPdPhYXHxBM8YcXb5ip29XBm3SthC5zEBtNhyEw6N",
  "key19": "5osN9jW8BrjbtWAd5ZYa5QFvB7eXhJ8aMh3iCEKF4tUtarDLXjPScMoztorq4pSkWn3icScBBQkU8QBa7wt7wHE6",
  "key20": "yinYBVR8qwTW529iSwihJLKUiNgiRpRfMF6BkM3dutVeeZz9Ksm68Zfz3D4keYeq1dYTbb4cKtRRAmE4s6V3dwq",
  "key21": "2qZftTVeMWudVjDAUg9o7rvjWg9n9YL94Pc8ajjs1UzWNJE8WJ2kRgqdFzG4L3t4yFcdoFV846k2MzoJwMevemee",
  "key22": "2NSH6EN9td6YUkLoLXr4xWLRcc9oyz4apPVEN7Pu2osyJpjxEaJJ7Q9GqbWFJ9TT38ghwf3raybXkfhLgyXTasqy",
  "key23": "FyJSWD3D5y82TwEp1eCuZzjV4dZY8PyvWdnSTUo5aRuv3jXZtRiXHtHjVuwjzHYbA1P8q6URJPPhnQAif7h8fJx",
  "key24": "2p9nfwii5bv6HTxNLQ4prahcbMofM29tuPDovJ4yUATbYsqV81ZmVQ3nWyX2WET2c1DonPFsHbs3aHyCE5S5s6yk",
  "key25": "2w196NeUxk6X8oSsDYwbobBLq88koP9Js519zFWvcQb9mMWrf8qwZfnzhrmfA1uuhtJy7MQzuA35r4rhHMzUQdfC",
  "key26": "2Mtk1wkGi77CkCaTQPZ9NZ3brCH3r2RDKjeFYHFjLF23NE9TBWxJ3cxAqg5buHnbHw3M5gXVoLLbNQd5LvPXBo4G",
  "key27": "ZLESmgvWc8RjxcQCPh3TkXJHor6NwRa9BdeLoyhzzFrEebTF6rs9AiGYc1uPYQuNXb51X5hv2VKQRFVVGK4N163",
  "key28": "2Qd58By9an3t7HrnbSxssNQdr8jrypauWcQ8b44RAjJxCCLEKC7NATgxdafZzoT3iEsiq35wkyQGpFavMQ5jGLbS",
  "key29": "5Eo6TQpTrsWh21eTgHbLoDXCnxWZCtr3isEQAHeX1FnP3kf7MHMzXZRtK8YrxeGrW2PCrU6pHnHs29nxS1R5Y9rk",
  "key30": "4xUA3GagkyigBCSQ2RGVjSX6NoYvZJ3tao1X22qCVxP9qEqfdP854DHYHtKEX11ukTXDW7cQhzMiCJhSQHTmsNda",
  "key31": "3DT8FEHh6hzmBJPhhc55Giko3k2rsajGMmJozE2D1aLJBJ43oWzRQi5QKVGJeq1N7zNeQfd2sxcz1RBaUTJTLyAY"
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
