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
    "Mnjkmyj5cVcYGaJUspE3ks4mREmn3U2cJJdyQKKVMWfPy1oQryUeafjWW1uURtaQQuYfZzZhShxU6v1bDXBTQta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YZM7UdENrD3GU56doFyaf5bimGfDtRrNq4No1rDPEd5UXaAeWjKnVk25SMw1bEzKL68nkmSnpPrkrkEqhykZY6P",
  "key1": "2YEMeF6GPFMzFyMf9W3ghRArZQ7ReXzK35HxUqeJxXMHA513YqCwSvk2AHvGXU5sdmbkUrHYLzURrM9BvBsREKom",
  "key2": "3xRsM989SbD8yXozfJJSvM7qRH86ZLQJJCaqShEk6tFRXhPJ4rGBQjhPMtkpaZeTskZfABFz8r7er6Ubv3ZL5NxK",
  "key3": "2Ua4am3WNZc2ZNqrFCijKp1dxGdTGXdctUFtCMpwWMpsj2Js1CQU4EuTz3CX3LP8twRc9TUQSmap3zLQKVfSL8NL",
  "key4": "XjneJFdWZKK8xP4nV3jn3zLH8dyyATmo9GGK21DhVeLg2ZVKL8qSU3dXJWDR1bc32rwRPZpzUt8ezgRBKbhPAdF",
  "key5": "DRKqMUP3S1yRsk12Yz3PwH87Ban25oovcqVutwnhV3sKK1a3Yu2rs5ZbWr83GMVYk8X3cTcQDGQa9ahByYkiZHM",
  "key6": "66aEMSoXZbFZTK1LCS4u89GrLCBJeqVx53gPhnw67SgGvNkVB9JAvqL1JAhUDsfcwAh68N69U2jqFtpxwmbDEDFs",
  "key7": "32AxartdWNeewjCDEDzNYeuXWr7KmZ1PsYWYMUoU8NVHSRcraddbs8w5gtjf9PiSbxyD3FD3tKmECVMbcnf9CU52",
  "key8": "3idrqoWaBXjBcQt2sfHfny5QrgjzXrCSvApJhjtMe7mC2xoDJxfcQEexn8LkXxAGzmZv72WtdGMRrPkeZwrxa1WQ",
  "key9": "4JscWASZZTCXXGHsAz3pTYwge4CRy5UTerz6fufJxXHJpaQPFkiyxvv1k7rhsrMw4qLg4FMzRWxco8Ywxgq8x3F7",
  "key10": "5BHiamGthrW7YuURKcAd6gYWyQPUqgFfXY2qA6Sut2Jihuoi8jhEYoRvjgpyeYPMAbNwqiuGLda43nb6ECYYKSQ6",
  "key11": "25Mjk67UffH3X1oBvTpygLNQ5qqB3TTKqW1JccbXuoVJ21zpuVUJcn2ncE78dxi7cuWfMmMuFDwKQ5xQ7A1mYfoH",
  "key12": "jwosBaqAGCavk8FB9HhGqLZpqoNAnLYjCUbsxWPoKXWTVo55buJTGpLWSBvgYYPNyWW4TNZyKmkkMrRmth7R1wS",
  "key13": "4pGnxV8y2CuYQvEp83CLzL9k1PFVKaUo5EqiaSUHW1EYSGTFwJcbkbvMBAoDEhcFoQExKAvvNwFXbww2TXH1jeM2",
  "key14": "333GTjF8AVxmeKkbZB6sD3kffn8ai1N9a182zTvyZoUyWQosG87ppgVLuWwEqidjVDVDFWzT99AZDBW2yB23P69K",
  "key15": "5XRYzL3KLbvBMtGx9xLK4uiTrJCcdV1petYb4jPdnZ6rCqwEqj67cFv4CYfatUS1o6vPEK29UJYLVME9DKNjzPm2",
  "key16": "mhc5P218tcHa5VM1FN5ZdZGuJPbYKibMeheAag8uMxWmePrMjXefgr4ofTzbyWXjQr2tXrB4LQQT6mDsuxiAi2m",
  "key17": "zSToi7koZnp2547Sk5KTNS2RSKDErUEJoVC9VRj831MVVqXXpQRdrmDC2rYemVqYkoM9htUg6ocg4rWPaK1FEm6",
  "key18": "4XqojJ2j7hoz8vmmZ9Hqj9vuSkPerTQSx3ggWpwMFoXUpfcTMX4RvGGyGz8NapAf2sbct2EeBeADzw7kunyoQvLm",
  "key19": "3ekTFBGoynsHmcCPDpj8tTc9Pn8nEa2n2oLwey4qz73FEyAGudKvsPh4dXkJVwd2RbK8CFsAouh27yMxwZcuNAEn",
  "key20": "4FkLidg4sMXJzDEhNYLW3Wx2cL5JpbEfQq2e4QA7pERxYsiaeWMcA31VG8uJB5AwpV1nhrtzLxjXwnUybgMNsjqM",
  "key21": "aJJe6zjBABaS4CZgBAoKpfjP6ncQpr9BRQrEUNHQqS2NK5LjMUNdQmYoLRX1QBMVtHg8PBBkD1qfchVtPZXzR81",
  "key22": "5ZgRsMjKw2q1YZMQuBV6mqrD9ogh6YRdgcqsJgfsU4ayvF2FGo5bEde1XAPBXnzfV5qGbU8fgjDYqaFEBJuBkBeo",
  "key23": "54f7EhAMcx5f8jn2A88XxrUTsVNaSKTgUMV9VTMmCxQyvX2VqojUadBJDNoMtnYkkZpKHEHvk37iGLqLRosSsv9N",
  "key24": "62sfhk6ZGYefFhGwQtohU4DHPzroNdEh3Hn5ETCVyki72yZugcYyVgYm2GmirKHmv1bhimbaF2cSLtnC7TtLzYyG",
  "key25": "52nnEw6bYU7FsW9v7StsBpuTXDKxPs3QBC6EmdWrkZFACSTKAJzKwJAJHjEcYQgUpRdCg8ftzbAXKKURnVPHnEDb",
  "key26": "4GsMHavQw6NSWxRx6gXPpH34jPgzgyPReGCVn6GCnaB9ZN5hRdBd9onAfzPRy5EjmyxAr6CcnRVs3vxrxHxU4qJ6",
  "key27": "uTr9cUVpthYFDzdpLLxhJoQtdHEehHpptEpYR3ouBoEeTTvrFxdE13YKkGA1GNjgG1igbSwhgfygjEwkkiyhJvW",
  "key28": "BRcX7hqU9KzEdSryofB9Vmy3R3BoVc8k8BPAKYqx6pjkhYMsHcTg8uoTFtUoUgEBDbwhMGCkJ1W7Bmtcqpc6TeY",
  "key29": "KzCdKHnQtx5JWgiXwhiJZxWG7yfBhU1TL1UUV64yTo7cfSgPCegMuHJiTt9cYLH3C1KjqbPNtTbQqfRYJBNN1V2",
  "key30": "25Egxd2LEQR9LFY7vfHiEZDv2EF2tfcSWuoqgCeUgBDq6HryP3hGznHDVRioDPpmwPAbfUxLXffJwiBfkSTF5wpA",
  "key31": "2y7dKoke1xG6jdpy1DvLDfMQHdyV2Gnv2jHmNmmawaf7mdbKh4erZAL5e99FH8znfVHfwWkiougBFQKUEmATxYLc",
  "key32": "2x9Q9i3fFpV77PBrgCuMGoD3cMobkLoaqmdpusvaJ7KgjtSVDwGQX9Ka3wdrG5rx5pf14t2Xq2vgRBKnovrnkvb3",
  "key33": "4W7L4nBKtN4Q2jwKmHMPKkSveXFRbmVEdtiL3k2uYRjRZmoAwn9vg3Ctupsq5M7gFqDjaqFAuxCpCAYSsWNroP31",
  "key34": "4JDTwwnAxzaPAQCzFdj23M557PjtSM8bjLWjnp9X6tT3fUVWL58LWMFxgkcfgWFcEt233w8CJxxTwCVrZ7Bjm84q",
  "key35": "4ykPC2VJu3PAJwY3LTXwLxeiQHZgqENqoYbGus2tb686BNKiamMA93NGH5V967rwPrMUGmrNMc13dpq32trCj5sh"
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
