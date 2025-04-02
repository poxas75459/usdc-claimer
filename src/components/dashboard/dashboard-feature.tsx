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
    "2s8ffn8zBdmXqNBPU17P4GkbpJJPqUyswxFvgPZJdynVNtGWzzZSw5LsPMYyxxnnpY9VaV1Ecb2dnERCcAJ5NZdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jEorKbh8xJkjkpeC3xie1Ysvq6yqPAyVckJJkdTw4DGm5wn7wsXNU9gPKJ8KLzyV4sZf514FFFU2d3ywwRsVeCv",
  "key1": "2kwZAEdJPXEdLM5YMcredAkmSx3fQ2uf3dLZsb1X36prPhy8j9BRG2xdMkfKb5oEnYHD3zSqvhpTfXh9Nh9xmWAM",
  "key2": "36Kg8SJCGszAojMDszSgF3CNSQrw9dsXGpSeULH4qAQAD5khaEfio1KtnwD7pMz8CXTbbb5tPN1xtMZMsFD8RsU3",
  "key3": "5iBpvLg16BSaQgSTvxTMY434XAmDmZmbbNPZb9WdXUBm6a44K5DLgt1sfyGmk6b1FAPkGjfkF3KHWKSfxCMQ8sjF",
  "key4": "4wAG9gLJEHkEkugDzmi6AHgSGjiebo79sRonEoBvAGDmdH6Y1CiCapP1tYWHqmB7udUXTSLgZNhLaZw7nuW1PVyq",
  "key5": "57VjbRjBbGa4NMQSvttvHVsbN6m3Fb8zxJG3DV3ZX8GqGU16dafZLGVT1o8F7Nwe2vdqAjLPxevWrAQKZaRk99c9",
  "key6": "4cos5gpLqB6Vu2PG2QQLR9Bk4V64kLKx4a4Jc8mfApeQotVMKY41ucRMavnMDAbJ8CWuioAMASRvu2FA4CfrNgTU",
  "key7": "4EFjVKwL5MTFHV48H5HcJL7WVKgk2LcRAMX7pJvwvR6BYm7pHf3jbniSub2Jn11mBBNqsMHdyjR3sCx98NSuaDUw",
  "key8": "5XgtFqt2iqeFvkdzsj7cFN2K1jkgQ4iDzmBzUQb5GfjjhF3zgTohrRWmsZqzHuyYEBBHemib6oAcM6ocVVxwxqaw",
  "key9": "4mHbWpgeweAPzBoXTvZphhdZw5c9TJj9BA4Hxa67w3vhRpaLZ644xod2T9n5wbRrZq4p7vD2da1VwDwXBjFL8sEs",
  "key10": "3wMSkeJCig34H5Qgi2UQJZJ5v6PWyHXu1heW2Bmm6DD87GrgmbHVNS2N5XJU8Q4ZSbrkTcL4QdhDmyzGTgWKEzkx",
  "key11": "64ZF8wNDyAPtZsLfwSzoMEABwFW4QjfC7xrvcT5WQCMftgnsoxZY6RMP5LptWtczgER4MbdemfvZ43ELNWFBmmo8",
  "key12": "4FLzqAMt7nZ8JoY8jP1U5gxPr9MtJPUU76qK4mSG8PcWWRthjLKhKJG1df23D1vN9Wv3RPcJRXEASxnkmXiL7Wpp",
  "key13": "vm3EHZP7ZYRbrbNh8KLFk1qpX8pRBdqBtjJmyHxak4q7UrHfMWPujfu3YhtmqvRTX3f8LPwVeBk37P2yJnaWSE8",
  "key14": "2NWM1SXKsfQ4NHXZpEMLpir3NRe3mWyjRjRcqnVkAycjccayH3oNowpiUkcmnL8k1Eaby867HcuvjYJp6ZjYneqy",
  "key15": "4Bt8jPJigagZRobag89NhUZD3QxWQvTrQofuZ2gaV37jNDYj9tof7tG15oNHa5ahLJehkpCgwgqsfreN6cv5KcuC",
  "key16": "7AgP4GV6cfAU5eQF4G1GZzf8DYU8aRMhGiTsqp5itejWnrEFRYjS5fv1BCiWQKdPRkd3h93o1cXbsFFtgvqiRGj",
  "key17": "2ubJaE1kTv5SDEUSe16QPqVdEUjRkaVacj2twGMEfvnFabWjQVdjowdLPE1KLqAJ9gHeZhQ4kMJqsho1FWQeL39o",
  "key18": "4haDmtcT4ASuFcqXxMmGJo9vFzvLfUg83kJEgaXVnk6MCPuhSdgDpXhTMA8Q7QQoXyHBe5KsKKnrkAB7jvfseWqR",
  "key19": "3vbcf4KhPh2teq2ovRTRdtRLouo98qCRgLxJp3CgNPB6AEucqufMuVRLQbhNraQb2jmC32SJXtSXC5brhGvtgS3U",
  "key20": "taZpieTPanffVGD5kYVcP3KkHyXvyoum9Yn2NhFgGUNuD6o2XFkKQVTSyaBByqbbgDEHvYjXp7iJZrR3FFWhfyA",
  "key21": "5FybT7jpE6LjetwBuPMRSs9n5gc2pGhpuW1NF4vPhVUVGEqhkvJxhLBZn4Wf3Z5mTwE2K8EDY6agJYffZytCUuDo",
  "key22": "3K3x4NYD75MEzR2JpXgBmB3GDcpgS3xZanLTMDYVGVUYS7qidCA2CD4V1AUrKkEsDUPADXBwkmupSYNmsEUKPtZu",
  "key23": "4QFXLQGKG1QaABoZCQyLvotSkcM3Aq9yyLK55YPnKtQeUoXseqUp2yekKErxpe6FvLgWrNrUe53gtWABLifpCep3",
  "key24": "3YLFTWrG79EEpFpDPECn7FcUMNUzvjdbLpW3bZXKkqdh3WeUBSbw5RBCbN4jaGsFi4audnmybq2C1a1TPsX16bSg",
  "key25": "5vvSC7LLiaQsi4Lnvi1s8kAv4y32EnygybDN3d1p5F6kQ7mWAirjrcRzAj1NQq664W59GzQfJgd5k8JnCS4MVFjg",
  "key26": "3LhesemQXpGpBBd8hSkSnXSGnvU9oQqgrKe7SVTpDpX5dQqhbWD2V9unGC1y7aL33idJrhtzk4rWEa9TJc4gEqn2",
  "key27": "4M7guCz6P5VxBdrEg5iaJczQ2ZYn35trodXvQokr12jZPe7Sk84GfDpqRDVs4NnyHCoPopDujkwSbiPkdghLG1MZ",
  "key28": "2j2VKaVReVdeFtuDcRrvaLVxUSVcmPc4X1DhR9t4MNTwKVoknPDmniP5u3jxGw8yPUxPDPquR9JLp89vEJA9tujb",
  "key29": "B3w8o6muL6tQx5avTQ2yjtNtoDQ71nXznuJ6vNk4wSAknmXmHH6GEBpy38mcMirEj3jwvrhu79pT9F6acHa6sir",
  "key30": "BKUiWbtwt1y5iL57RiUCCYnSVphEycadUy1NneLcLQ46QFbMWutKKqykpSW7dJpyGQpgDMRWEa24m55C24DX3QJ",
  "key31": "5XL5z7yptiCdqQLMTt3Fc4PNa3pynG8JJq86W5G857fK9Lwdu6GJkjkUNjZFvhmGWRLCt6wad6qcpT84nJvFfgHQ",
  "key32": "2e9rdKuAYhUyTuQWMG5ZWihTu5o6BFGPV36yDRUDyywUTvtqwMW7XBhz5PSJHCK4bkTKY5Q4SXFRL58SXzt8pbct",
  "key33": "4V7kJTJtEpXvTe9rPhzbmVPZRmBHBcioU79V1JpnDxC6zTVYCzbBqPRbdGeJTxpsKH3VvrYgfxShUaCgkcpHfZcs",
  "key34": "43K2vGLn1uLdwbnU72zhy31EsCWPANQmAS6mM73bYmaoXTPzeZBk6Z9yEE1gRPCpMuTQKoGtoowQCkqeHxjDTbuN",
  "key35": "AM4hbN736bFWsbKEuTLZjfbLDCDygJsRW6EY3J6EwcP5XGDyqeSTiHd6HLbJAsXZMbjSLUUdFYAo1Vbkm7v7YYK",
  "key36": "4BrbWSvg77FwwTNGmY8zwUmaUzTeE34vjArTLtbgkg26X9qV5nkVxZdEN1T5N7MmiSF99PTkLYdECDuAUJ7gTfWL",
  "key37": "23iy89ezBzi4RKQ1m8BRoiEGyNX7kuESx5kunqGuYDxvHDrSBspguVZ7Zmws5df7iStQsy8uJGZbsE6uU1XDNCru",
  "key38": "4PSFsFc5bCcz1SrN1PFmsEQ7JLD92KoyZK7mjGSzRgCnU5j4SjpyGwrqnzrJyfJXVme47FJiSvdRH1mxrBgMsZDd",
  "key39": "ZgCYtjdwdMmaFTNCrkESJbFtrf6S5L1MqfgFSogkYrYavADQSRi1rMNRk7sR48QS9cRKQhxj2eVPz9iYc8vLLwX",
  "key40": "4UPYj8WKq9ZJNYA1hCg6L7CdTAakBrAUh5fFwtt6mY5xJbnHfovCj97az3fZ15veWNU6RdZQ9VFGMkvguuvwGkf8",
  "key41": "4jxCYJtxdhErNTYWXNnYT1Ho1E5c2zYK4bneLw7yojhEQGGeH92SqotAqq7wvCZu6VXekhV4byqB5A2DmbWUYski",
  "key42": "2WCHoAmZmmpz61SXdwjReEpL9cnpW156K4wd19obDzjiQzsWwGgQ9Ff26FGBrUuDfHK43v4cTS8tmmimKx2iTJTW",
  "key43": "2puGBESqHXSCfU44es8n9CbBkXrcJa17t3Kf354fASJphjcdRMHSEHdo6sEnLctJTTJ6UD7RvLCSES4pqN2fGnZQ"
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
