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
    "2UhBDWZPguBt5U5eA2oLP6TrZCANBuyL7DiCuUyZQkGYGBEiYxv3j1px4hDy1WZnQXrRNc76rZKViRCSH36qjo4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FFST2SpEADgVdSj2ekW1RHvxGFQ7fNg1NpMgpoLjx6Qxap774eE6wvZp6WpV5RL8LaFNs28ujv7j8rytaqJRkBk",
  "key1": "QdiPzkMY9ZRQu7JZQLUu99v7cTDc8qcbYstRirFpFwe2w2yGbPcjp58Ptx3Eka4ZMi7zEQyU71cr7mAmjTt8yyR",
  "key2": "26KSqCthjJXh5YxVMwqcFsFFwKS3nYFjf6gP4A81g5ZeU3aa4WDnytWVnhMAjsZwxNiWCq3LNHLvCwhUyHuqhmSm",
  "key3": "4Qv8FWZbacY21jhiP3ppkqvAw2gTdvh5ebuN9ZSP7zzhdyBoDEDR1uYuyQzpGU4jEp7E2MAeVzMhN2gEBaDPLCYz",
  "key4": "2QwjyQdMSTJDGCTPjmY6SNVpvaBZXTzDdJ7saGYZyvz2esT8HafzYuqjKGAp87yWdkzFNLqe7cbM1tuGsrJ31usW",
  "key5": "2mFx3tARmfzggGPLPdaMGsP4eNBbZ6kFxjoinaVMcjsjLUrYugkSFrFDN8wi7BoAAf9piUrHhxi3mMCwTAVN7fqy",
  "key6": "5e3Kx3dBdNscFP8CrYgNDQG1qt2kXyu6RFweHB3uiDCBexvaqGGSQkQpxUnodQHfM5MALmmoFoNEJT9pvtd2FAv8",
  "key7": "57fTjb5i2P8bvVUcSmagXZ84z81EwAKgxm66eB2UFiPKraegrdNKX4CEcMqUsLCLKhiZWudzPPVYBiMDzMyHQnMc",
  "key8": "RgTEaFpvpQ6i1LcafRe3kjTNqLLZGkzV8qHDQvmAoFqyDnZZutEkeHE1XkfJZVXaJaGvGzkV3QXG25mN22cyfhp",
  "key9": "5GN5yMvVkESnDBVd468f9YWf3dapeAPBrDHWAsowgQR8fuCfB5PYeHooGpW9TJXLrUBj6fHrwNn9qwuQJ6L1avLW",
  "key10": "24eiCRuynvL7ro8DY9Pza8m5BhoAPmjKivBTzjy9XXYvbiGcBnaMQzqRbchVW3PwB2G9FnvSrirxhG2Yo7aEG6iS",
  "key11": "4WgybmrBGpgeWFD5xtx1TzA9wxMVu56hqoTnfiHgRtyr9T7FWKXiWAYyuNMQ1MiUVeZKwUA3t4co8f4pgzFLzsc2",
  "key12": "5G63nBNj7vkRTA9HtXv7N9nBAiD5gZuHepeorv35GmzYXk6KuViXtmVQ8dkynVbFKM6soo755XKB1zLNdyTZkwbR",
  "key13": "2tWSnbMYJBj4BwcSWjoiNNbjVNnLi1UVGnRTHYGmsNBUxowbSN2CK32DFoCBJw7k83UEuk2cWFWdbHKf1Crs1z4t",
  "key14": "2MXf3JeEQ53HadVEJyBXJMqbsVpge1yVE8vsgN9DDaFUb7qg3741CGjKb3gTeJ7i7xVf4ArGBG1JXDK3ZMcSvvyk",
  "key15": "5bhQ1kqUuUXZT1JhxCBPGa246giKrq2pz4gc4338NP2jCYbCvY9reADfCceN5ieZ5Fkv4K8Vz5nKpv7Cubn5Towv",
  "key16": "3A7yNhfRXe9JniQvPGQkgdcyhh6jVKX9bHKaqnaLx85ZS6v3fa3d12hAP9U6A6KmcHtnExsSozzbSG7VAS6Wo91j",
  "key17": "2fJprzKrNKzwHLwKzBCFzpAwPVEBr3dQpX1sDSH7Pihan3WUyMomT9QvBMiKq8gGfSSR3VXZc9x8QqFzDRG8FBC5",
  "key18": "63mLqbZn3a3jp3Q8t9fY4YoFVTFPzZKF2H2VWJhot2LmCHtXJ5WExmhfVAhjfXvS4NqfmV7yY5KMiiM2EsVBq9A4",
  "key19": "KZ2GmuogPuXdMBNs1G8EepiBSMALZiSoQ783v3j3KqXKVyeABizCK5zxACBW2a8KLsu1VDD6MY3LgYzMdxF78zH",
  "key20": "4zM7WYUzhyQm5VWgdQuAjZwakypLahysSbvfh86cE3Z6tLsNbd1y2Vyz2PHDbdoTnqLDjXhaXEScskRYkgBQt2zj",
  "key21": "2DCgbu4YpoXug7FbkWVJtDiJ9Z8rA4MWjT8baQt1UbmAwbb74SJEBAiDL6sWQ3nxeZYgGBXCEbJ7JauJyeW2vyLT",
  "key22": "SsQqkv73vtvHRoTZeX5waayT2kbv8uYT78c6sbZSXwPAVouWSFWdxhu3URZ9fgSJGbs4MMa4mohc5Kc88Tua6B9",
  "key23": "4vqW27ipk4Z4W4jBugQEBMWERwUPpLj5rro2kwyYdBtYu3mYHiTSDs9vuXd4nEmMk8TtAY2YZ1RVRXC2jg5ZMiCy",
  "key24": "2HECLphx2gXC3a7ejErBLCBnbvurdJvw3che8t9aA7abZx7gm8rCuPFvBbMAn5MxUhe94KqXTrRkNFd1qGPR1ogU",
  "key25": "55YgPv7bWkSmXMhXeu4iCDxDbUBb2mnTp2NxBJm5QWJ3qzNARwxZAP47GSGrPH2BnzXGCqeYyZmqrP4FPvZfY3Gr",
  "key26": "2b9QZ7vYbadF91z3RCtzJBvNgyJ8qixYG5MtfCSPCQV3ZWNjAKeWTSoKBszxGb9hNHAdkXeX8wp3HJ3jXTZCx55P",
  "key27": "4VJfAQNvq6JwwFxhWd8MurCWYTUkEojptDDCVmkzj3uW4CHDGuB9ACSJzSKj4TGHcyKjUiSaKaF6fSH8pd5wjQAR",
  "key28": "5b1PrFRHDB5EviWSBjxr67k9aXDxpV6sS5B1kCF4QNEkyYzcjHf2gnzeAVzqugj9eHhDJN2u23SnfMjAgDAwNwdX",
  "key29": "3ckrSGbQJqMMPM94y3S8ev4MZdLjkpm7zKmPPRShY7B1U1NxE71DJZj4deB3NTAAkuZN8wfcFx4CJZaRjLyfatrW",
  "key30": "qGvKGXzGxzwTWH5Yz5rt2zo5jEHwg1MMa9SdZomdEzvKGtMsHL4S4e77nJkmwXPDPqWapFCqv5xPCHA2e3P1iF6",
  "key31": "4e5qMN4pMCUKigfj1RKfsmoe1M76qtT6jpMYWQ2LC4T8tPSSr5Ta2E4CTPFdHFuJR6ZZ2GW28WXLX1XPUmN2FboF",
  "key32": "5Xn4aiFNFA8x1eTq1yUAi8WhmPYnCc3Y7Xp4ChsRyvNBfKRRCszcD1zkBwucEgkT78rbkMEFEfSQ2n26YnGempgE",
  "key33": "5nEEJ1QRbPNpnLqCSYwGPx6U9rBa16i4qBuwTnh4heMe22FrPAaWHvS6BWufYJpjgEpKvnZ912j99Fks3ipu32Pv",
  "key34": "58Ahi2y3Ff6AS2xuwMBM4jiZEnektBqsvmaFCXwmGEZUKNyW2gkGjkYGGRwKJiHjS6Z7EgT28NAeburqS5CCiwqx",
  "key35": "4CgSDeFbkTnx2omEwgoBmJRtRfWxJsEm9tPX4Hj6FALnYqR3dyfRS215FVxaocSFc5iLZMimHN4gpeCmxgXb4EFJ",
  "key36": "5NziEiwXrHfrs2kWuWNU4FbJ694zqtjqNRRUBcPicXQeZan67kASqrCYQiRwJGXxufQFZfh1HxM31FDN3dpXjMEQ",
  "key37": "vLQ88ZW1dqJwa1yobiEeiFfsjjxyZp627cNeRLYCV9t9rzM724oZ3rUBoTBK6tJMJM8X6XYnEvFvFZiS7Mo3Jku",
  "key38": "Hbxv48F2niTJU6EmjNXKqJdC5tzis3HwTtpBLtXH8HcUGNfaCvUxpgLW9JiuhjBvqx4W7M8SkekvFisx9ByV1PE"
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
