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
    "DTfJdKQsjdSKYPc5jjxqLqzodwJSetUygEvmxXz9hcB6Rtdo4UC7qNTeNtuR9qka5U5vy2athRJ71CDxyYCN2GL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGeBm6HmupsnQyM7EX57r8csaaCb7sh17C9sDYmpWssarrQmDppuVXJPVJrXUVgqk9edBYc4pbhvfXzNdhMrwLj",
  "key1": "4BTRAm4zpVT1fNDxDNeYfoNwG9vgMq6DYfuKATm1MSfk1CV2vATTYUpDuFCKrTT4WyiTynQsPjU7uwVRxMSChURP",
  "key2": "4bU2UJPFHMahES3goR7p21fkWBhFaHF8St8h2QkqA1UB4wtEqUp8oPhdLmXGGDBZitH1KrdCPUzjkgn3aFJPxKB5",
  "key3": "48gh5Ao1GCWFdkcXadpU6jNSmefSKwNEr5gZDPiQnb9C5fLApZYpi6u6LooP29Q22kY9MTZnjXo2FeSx3F8QgTp8",
  "key4": "58m85AucBjXqphNEKTfiLY4qk91Ugrkn9No7Zcsxfpod9jB9LytACV2k54R5iRnBQtr7casyKiGgwLzDRKTfE27d",
  "key5": "5gvh6N8ZPTU9pkW5MktQM4s39LeeZjhC9JZNinYfKNBkmyGeFJZyMmyomSYTo3XjSiXfYbQ91NRWr9Z5aLVs7abs",
  "key6": "4ovPz52FC393xTvvudPwhzaswp3wRNFNHPTrZDKEYR846fsAvAnXuS4FXRNgpf392zfanjjfUavwkJAcNmxYairF",
  "key7": "55GXx6VUqhzSFhEazMJKdUqeTSuzt3q5nqYiXem9uSKr7RDKENnHYGWDBdb6bF44Lmcw2Jiz2KibqwAncMMokWVK",
  "key8": "5gz6BoYrrPbbyAhk5TfgAg5J4EkuXmJsi4iEVbGGYgZuLcsQK8aiPugKZcRnDGUX7A6varWBcbft4C1fHjyDsL53",
  "key9": "41U1vV8CRPJBEZDh1cxXTFQ53rfG35WqmtDLdCASoWxp4StL1d2cy9LwHmWV4b2LiYC967iem9qQeQDWWHCsFNH",
  "key10": "3qPSqNjVzydExWz6n6tzknZVZEQZk4BnCaKjAYZp4vUski8YbRUABqFzb5tVQNP9765TgtpPbHCh75LxrrhUxUaY",
  "key11": "yQFMii28PS4Zmp5igGgEwrrWYSDq8oAxpyaWoLY4qhVGfpZM5vC2om85HtDjC9os9nwc7TipHrGWRjZkZc5SVdS",
  "key12": "4V9qtd9CSaSoNL56ey1KLXsWevRi81v72QXrdqzfdw62tS7SYdbi4dFsRbP6t9p1genm5CALzFxWpCgKMUXp53z8",
  "key13": "3xXd3fQymamAD6JVwsZjKCz4ssqm4nZhg9smZga5ZQtRzNCTSFkqSFfpEJQmCBDSLHPe52Msxz5wJvDgU1bDo88C",
  "key14": "3iiBWJpALC5Ree1c7mLHNnuc1PbGLb97w3UGeRg51U8em7J7c6ccDCTvVvUkrCeMKTYgAamQuBUe5iw7DAqGvwoZ",
  "key15": "5dMRcTrBuQvHFHxwRRgVACVUdmbjpUJtzDumsnp5sNZFotdafDFE4NXDAYGtTZVM841bkfVQYHRu7Lv6E2zM59Ux",
  "key16": "5QvX4uvYtfGfHyw5n6bvQD8KSJdRci9zHAtLsJWSxT8EsTkTQ8b7UQGsdy9p16eTWiYUFFbcQ3RMALdCcbkQ6mVi",
  "key17": "5SCJ5THxec3ZiTvUzWJRbM4Kjq7j5QTxSCddjeRcgfCWJoZQ8Vw2JsH6juRnnMD41BTVy1ST7qgfj6t1H1BGhZ8q",
  "key18": "XDfBC7CiJE9vMUBLXkD4dFaR64wJ8MiFHVwm4aJCAF9VvE3u1XaCyPiR7hZ1a7cHwkd38mmRKwy3StiCwrNZE61",
  "key19": "1nCEBGdu6j9ftrvrrNf77Ws4QnZJaeMLbAetSYd2vXYWEmfRGoNia2tCVitDuiKC7NseepJXDLBALRvHZ5kGse8",
  "key20": "5diM1FkKpcbnfKuSpnHT43Agcktt2mQRcdPMV6d1k5hNTbQWeUpifjJ2ArKczU3fDtm7pJxeHXx1sJdtxeUmX3Ay",
  "key21": "2mfFL8ip9waCbQ48NrGrf9ptdKoyGNjoLfvHbwewAaBrwGhLuujhDNCkNgiG6Se2kMnLewrUQ3KjMX8sruGqmJAu",
  "key22": "2LgpEkB9o3JY7cFcLBz9SWfWdkQccG6h4wZiD7JnaY6Hg1T5fafinYEUaxHaGqzp5WaKBrDFq7qyexcJ9Uk6u7tB",
  "key23": "nXB6isewLq1F8PZzJxGokmKdPKqcjg2N4oWnk7pEfXyuNcESmPrjyvWjkUC1gcg53fPyU99WXC6G1X1L1iyoioC",
  "key24": "4eva5U1M5J1Di3KvtSk3EaoRaKdiP48PinP6Tu8Dza1oaWJoxjQarGRjnbu7FkR5zYEYB4tC2P1EPwmzTTHV3KY9",
  "key25": "54DmSD4na9PnoMQ32LwLUuwbbQbLCu9FP1xzp3ZkCUSRtqwXJDKgcnTM7fk3c3YWGnhoRLrTWYGuiiKuvyB9BxP8",
  "key26": "4L2BfTgVQtPsLH5RHKvca3tdbKPZHUsGxhhgHeKVrCNhgQBrkneTWEofjuypQwJiZzJmGyKRPPx5WayTFxepBVrm",
  "key27": "4eBjjLq4c8eviyJoaeb9uKsd1kixLQ5E9h66avCEHBG7oEgkFknW6cgyPEJpJRmM63XFJzrf6p52xz6uDGSwAgDP",
  "key28": "3u3WqFKuEHL2nXe6474Q6zazSQZXhaPE4YHe6GiW44YCETvDB7YS3xCpK233eitBZSiW7LNKB5Kh5EBXki5tBbdD",
  "key29": "2QqGYAYRQfPykzPtJU3NemmhJ7CQR2KNv531nPAdoWsW14SSSjDBEuz8jQ4zpuao1SfLLdHmQw8py1hB5ZTmKr2A",
  "key30": "5D2cwwXpUj7BxY6D3dq5HX8Cu6HgUmUKc7AHE7seb3nH4ydKtHurczkG3EZgHrecRq2Qp4EKcm8QPHBv7SBJCviR",
  "key31": "kGCJMLhJYTMsZxTnnZxnm1WFM7AUwk1B15YSZLpWSgKehk457Ytnfx1337cgSk51mkqacBKeJdRVGjdmLX3ymKN"
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
