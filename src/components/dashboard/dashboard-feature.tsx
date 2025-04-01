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
    "4KqNGmXisv8KtC5GpezWcM4MueRfdjPaYFPHEVzTvwKTxVEV47jXCUQxScyfLRHs8rzfGaQN3Yzk9MD1cidJxF4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "982xGfUoqsFGxEFJUVFATDmWWbUtd5KD39rDRjktpN3hccVsGvEN4SCguHgbF5PTb6Fn6nZoSGRtZCeqnDfURLi",
  "key1": "4yDZFtN8xoawx4s9sjeg3kghFDFPE9gMAK5gVdRXJs9mJ782uc34h9jL3V7DYpp5WStsAyNkB6YNw2ftHSY3UvsK",
  "key2": "2WRDL9JdXh3E6JZCswfgA9LNpP62eVxbYMmcNiFN7uhWCcKZpjSohRfx8g6QRtTDjDkgPJCzfCYHwJztgt3DH5dP",
  "key3": "3Grpoz1ZN8qD7GhMYq69wPwNzANRbTtwW1Hq3YHH3rQaqVZJG3Mt4415cVi6a19CoW9iwwxwk82vst2Nu9fcN95G",
  "key4": "LwzVSMJcEA23q9HfjcNxZMMnEDDLrv3XE48iEwioAASvoiyXDPHNZW9FoDkBnDC4mDHgHqNGEruGpApeAGEqHNh",
  "key5": "5FEtbHw8yJaGUMKKS6sophJPQm1SNYLHZs8SRm8rZFEJpUw1J9yqtybLfM8Ph4YaC3yD72KR7pWzS94o3Gbs85Vj",
  "key6": "62RDg5MPsgHtaLDUEcNdr3VMRu7XhMSGoRZ9rm9xokPBegVvM6w39FyrDVaCt1f5qqwruzWz8ZbjoV68apfTEXrk",
  "key7": "5LD7UduebzWk4sKjsKFKaxGw8u7iwHEpusgHnyY8TebbXg3PXEzV7gRKM9nCwCTuUrp8cm7Xm4WvFjgxQbzzX4zc",
  "key8": "38F94EkzCGS2LPX8eCXuoEGGrkkRKx7oLpn3vWQrTLVsTsU4RervaZBSEbQidbZ2Yp5nXHkKeLW9hAfvAqRECZoi",
  "key9": "3KuA8ALR7aVGTzXdXsxG6idJiRQjxqsaFydZN9i63eyZDb9PAhjwus8rateEc7wC2hua7Vq5ax1NrK6HL5dJ56Ez",
  "key10": "3u9ip6pf13h7QhTwpBDQEiL6Bg2K5F2kJtvRYvtMw18rXqs3iWWKEiEWwxkUrtCBy4AHZYJXCzSBxaWgZSj18nmU",
  "key11": "2yYbXS2nnojhBEMCNMhVZQ99AczBBATCqPWwFqVrUP8Mgej8HF7TF7dpRR7boWBTgcVhYrmnTvwphxbqJGf2Vpob",
  "key12": "5L4NLusE3cyANgnmsmfSyFiM5zwHmZy9oXWiZAnbXcGpjkWWnir6JMQo8Xr5F7zhW81yhwykP23wJx4qyEKuRvEq",
  "key13": "3qcAgS57dSdrELNFz6bhJAUeaRKcQfA4FEPEmmUHMrpFAY6DPw4emKeG6h88zHi2XkZCFdC5dfnRtshqdsf5FMvU",
  "key14": "4BENzzpCoE7LL2gpsrAHpajCFBVBgQb5Y75WMbmdaopPXZc2coHSAhjs4K67PqN2nZrmfwcrhUqvWrHA77yYAV5u",
  "key15": "3Gju1KzVj5kT8uJmZAHE32QYtsaMXS5mnYSwLywGX1SZmrCiRaGuTkNGf8kBULD3tmXrkibBcQTxgwNBW87RmcNB",
  "key16": "5MoW327FhZzBRaJkSQWZL8berqUqF6ZGbbt9B4c9S7kaW6fzHxYMn5EvT2CfKP21bxFqQS7XkPoh23YGbyzApL9Y",
  "key17": "5H8YFHxnQ5zufG6PcTBD55EzfD4nHLy53sni8ciJKbRgK2cz8ms6xfhdUqnh6K1Yjs2JFHfs3RpfkFgeUVb7fuMQ",
  "key18": "34Bt5MjVETJvNpcdpKRHxU73fft3V2gj9bCTBitKGhNPShgmkV9muX9VYLYMCSqJ7SqBC3mZi6GKTynuRHoDc77M",
  "key19": "5hPtTcxZurqqwWzQaum7GwSXTvUG3twWUdxQFV11mM2s1kNJqXCLUCVuWYivsJVWVgXQQ844Ead5e6vR5v4dTSjz",
  "key20": "5eArW6512KGx569MTJzyvv43pfjMQMQjFpWc74t691YRqMWVvnRvRTTfVjMi8MqLSqxf4NXGFr7BLzLoVpAydVPT",
  "key21": "3XLtyL5hv3pohN2MxgPAuWTeAswS3U9WFRBNdpg4hVn22jWvPCmFvNfkG6cStgUTikMYWEwyjoN3YXFuvJMyJM3w",
  "key22": "2P8d7JiF8N1dwy6KBMie8veU2rzGvR3Kqge6mxzvqHsE8cLGw14bs4N9bTiXsDEGXBoKr2pn7YEo1GiiGeKT1KNG",
  "key23": "4zmJVL49pCzKLJFiLePExQY5NthU4osSJZVWeysJwDFmBWtierh8PHYPkXiVuSB5WDekcuiRo43u6Fmt8PJR7vmF",
  "key24": "5px8ioUBpKdmR5UvwKo5X12drSPKcgcrinLx5kYN4KuAVYfv3FAhUTGmEjqo3pGD9M6eeGCVZBHSLofWQmR4WAJR",
  "key25": "47fNXYKaobM2DGMze97VMqYwgn3HdmgFMRkf1k1F1PDyNxwyaXZ6RNDYEEVa8fzkYBLWtYfeiw5h8r1hvgVKS8ee",
  "key26": "4uevVkfU42HR8VzJBdZB5Qi5qbWrVjqrTkjcnZsCp1bnCdUcbWb9V6436zjxdAfoyRyAX3wdZH5jEjtbdkqBd4Bw",
  "key27": "4sBjcwdEx3bqGe3SNR2eXMN8immQP4jLgyJjLbt16kZic6Tk33iB76m745TZd9Jqe6wT6shbifchFe3KugizK72f",
  "key28": "1K8wHZHhcty45u1Dy7yR9uAtzyp2eepUQc1NHvCVwM3Hg7GZQAtDrE79ZofQNz9ZLFB66RmRwJrgAMPrJnLFSac",
  "key29": "4NfnxGqE1JPxgky2iDJSjmon7ffydCcrERm1qvBw5G1qynxZAS51nHKohSPXvGoEe3iANhuGi5Pwzk3XXHYJLusX",
  "key30": "556YTNfFhArbJ48evEHpYo1w8J89tgoc9h87FvZqdoLvXbXGAEPMSogGa5sBZob5Li5ia4YoAgiJX2r8jXKyS8jb",
  "key31": "5eMfYf9395w2v5fHW8EhS1ZesgaEpyYmpD3CyxATNec4GuoSVbEfQ96ygmcF5zwWKvBfojPSW6Wjg7cA2vj45CEv",
  "key32": "5Z5Eq1Gr3NQ7bxb8zv9WS4p5Ms79yjjsLNzAkDcFHPY4dko6NQF66LVbRgx4cevKLnYi2pdcdxjSUfGtChAd4N2B",
  "key33": "36LxivqxqmuM25P2gHmqiUU7MEoJzRWRLUkp6MN6WRGDEVUJLUYE7HdbWk45kqhisNrUAg1KwyE12sMKDRrcjE7d",
  "key34": "32gGw4s4tPH7wwF3EKJzcuqrx5FE4DmfPfreLBd26VzWGmqQzQ7eABaetDrh4NrWtxP5EVVE4CwqSPaqpXAq58A9",
  "key35": "4AZ22Jm9s3Tmsw35gjm35vT8UTqywEPx7dwXDUckFHCB6mjP5Bn2hU2KMkawnBmMusHxABPoGVaiAKH4tJq3fKCf",
  "key36": "5HrGapjWu5WrF7NqgsMve7cdMKSTZDWynNQ7ZKhs6DqJD7WGf2iN4kQbBHfpeXBx25qQEXvzPvQWCmhGYdQAkzD1",
  "key37": "3PUkx8bKxytY7t9wBFw6piB1WibRkgtf1WEjBDPxJ9C5NJqJEgeNSv2dhoaGGeSg1Z4tBVfagzYSBYutmAAHCfk9"
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
