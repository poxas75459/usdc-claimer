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
    "29m9sjWwPneufYdLoU7ygwSRPQvdf5uHftYYeuKNw6DE3AUUtRUtxrAdHdgUm6PS8puJdbtUtqDacG8UE6b4GFWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f7ZSsafLTqtaaRKwz7xM3ECnE1dJe3qMsXbZdmbNM65J6BdyCuCsBnZFC2ornNtx9WJK6mLuxGk8y7XCXtRYPAR",
  "key1": "2tmfWkmJSuENdwLTmcbBSZ7uFBEVsVKjNppeDSvzif8RHq8de6jArztspxzsCZpmpSMPiFYHDNoYvMQes9rJXLFf",
  "key2": "sxYHdqViXeL3gw4Kw39JTgRHpaF38EbzeB8XA6ZxUSu8jaKraQQRmvHmxmLY32Ma4DrzxqKYyqTEYGVzWZHe7Lc",
  "key3": "4HcNewsYhJBJwzG6aikgCcQV8RN8Tf9fdQNVFctB478hrNB2kSEeVywMo25PKPLZnvZkZQE7ghqhNZtiVANCg1hU",
  "key4": "3cqE6CwjoahSFmUpSLeAMKYDjdRhpFVi4tWSVyxKA5vBcSLZ6jCT51sKDJRyS6Kt6HxAapvU7aKNpeAKvSsP8Nkn",
  "key5": "66w23PZARNAP2FFQVio4zTkqeRN4chqec37jSo2VZD3uXUDVSwp2VpgM6r8svPEZdo5ewdFr5oGtrZJo9ZNe8QAs",
  "key6": "4BKtdSzJABdrp7qD9Gw5dRX5Qu4jF4hbi2WS4We7AbYfNAMh9CAX8C5hez5NpCQEqZgwg1ioayRDFoHnRNgvpsf3",
  "key7": "2aWxqNWwueYj3XwhhPpS3xF1eshdgg33FxeynKRjNDzYt59cqhdqgezTK1XkfY76VFumk8BcU1Q7pqpYu4n4LE6a",
  "key8": "2pT2Sk4ohpHMnxVDhDkHSu8Ds7n726UXmEYbPf7hYJYpTwqtk1UtkCCw24gbbvApLBJcWwrhikihPBL5659MicE1",
  "key9": "2tF59WKGEx79td4F5ha6mLkx3d6DWfq7zFuaJcBpixk1Qidr8yGEesDrXQrb5yCyurQZ6bc7Za1j6qmCyokd5gEi",
  "key10": "41MmQd2hM6paYsQU7TcHbEQqxqMtN6kRDJsYR6L5J79jjkjcaC8DfcjosRdL7iHqzqHmeVZsNSHdjwqgbjs48VBf",
  "key11": "5Pj768b1ikee32YyxuiMt2YE95171whhd9DP1oPMwW7tcLjJwRaNaqJBLZLsHVDvr7Qt3yP5FG5hcX6WhecnfPLn",
  "key12": "67AqpRi1der8ytxKYJUk14zE4AQp2YN2RkeTmoduBqRBHniyAb9mpDUUqamWhkt7S9kYeQfNc11fr8bWdxaH8mWS",
  "key13": "ncX8QTC29yR6kPwph3P8XnVWsW6kKHZS3jHAmuRgJzDpCuzaRdBQNGvBTg1kZdZEYPGNSKm7UAcRk3ZEEP3Knmg",
  "key14": "2cXT7rJTKN8FiAuCGUyPmJugPXe1PiebuYQ2WN2tZVEja5Lw7x1QuzpeafiUZPznH32rdbnWV4dRh4uxyNyTrrn3",
  "key15": "4XxKvfVqQUAHdK7dYTWPSWdqZpDCGAPu8LbNJCu9fp2iiHBTaBMZMrX2CnLemaAVmcRyqbxkWEnFCqreHk9t28t8",
  "key16": "4xnz9gkuC8CBChXo6ChqsGbhP6Tw1xsYP4V7WyJHPQPpm1Ws3N9sgfW6jcEyi1PF4X9jPWvxj8kYYGUuueNCR71N",
  "key17": "4vQGeiWW1MAsfoEhLG8o7PpipZkp2sospVhekvt8K82cnij1gJgSTcPVS4u3pu7nrYxv7W2VcpRz6JEvpKxAZC47",
  "key18": "4pxCXs6qR6Yj57etoXi96vjX4KRvsBJ2tc8k6AuFAMVRug9qLxAsJM4ebPcBtVanzcUYfmXHGSXPo18wmXyeRNmX",
  "key19": "5SMQJD1WqxibQuA9aRmdyVvZa2iegVj4zm3NW2z4ghdGtu3VNYkSCL1qMoEwFJVvoGEMYSByUsDctBG7TbWywxkK",
  "key20": "3ysxF8UYD8txG1VeWbzrfKXMZgozSrbqqr85Bq3f7PTsuCooQx28KJvF1xvefGNgaU86P3779gSCeh5k6p3PvBrx",
  "key21": "5u52CbWNd92L4rFvagFxpERBdDvmN9AJpsg6RW5tjzcWyZ8Xd1nm1zRiRaSXw1MJArDh9LN8nfohH5776PJY4Fws",
  "key22": "LcUGfro72PjLJ3zqht9WMJc9fYg3P6qAdYXFuh4Z44dRoqY5Uvq9PZ1YNjegUPgWzigstL5ap6HNxMbUQru1jhu",
  "key23": "5LaTtgLJvJ3Tdn2KxMMPuwPgieZgQvqSrxDBXvLcWAsD6KWq8v63CAnGJgpzLf56cp2g4tYvjDX4ZK4LbQnyLnKo",
  "key24": "2KV2mdhajcRY6GQyfj9sn9gYqDv21tJUy9Cwz5nvtoTCCWafCgPAtmTEtGLd5W36DhRBr3BGNdCPy8soUUJbAmFh",
  "key25": "5zAgBJ8E2pMmMUm5FjxJFREhNpb3ydRXHPaN1Jax4o3HvaQdZrrruZpUe1VdhbdshWCc7J7RFVf7NCDpYELV3n9L",
  "key26": "4gibEmmRWvotNndhyVFBtdQAHrcaPzJ3o1UA7H1BymjqJ3kUqHtdLboHhwvcMzFGi4AUusTQUgSJHGHVoppWeVkq",
  "key27": "5Eu7e5zLFrmDAwrtmBYKf1P3BUE5d3CrcayU96HQHZdJNk4wY8eVqN8vxYv2jj4KUV3HuxkskeDcJFtEtb8Z3rK3",
  "key28": "43o6TVQwvrsqC6YmidVDD1vC2h2YvaVFEFpVnnKL7PrgVYi6bsTESuiVnicTpmDem1Ua7PB2iGzQVr54dAbRLN2f",
  "key29": "f4na36bBc2VbDRW8VFW2eSVptxTTwqttZjQHCzDduEawxV3Eoeiq8EffyTZWP6ycRUbBWB6BKzrFNEwEHzkPEun",
  "key30": "3QVAb2B1o6kv7UUzpfkSawhpokKQeZfnoie8fQbABdmXtMiYbPDcoENJRi2ADFTJhgtueBK9ronYDUj53Zt5VYLY",
  "key31": "bsKUd66V3h4K3GaKVCoj1eLdKQwnZT3e3tk7ytyu6ZYjudJCwEpL8dMncZcvQb7fMb3nZ6rJdP5FuGYrmwXYoj3",
  "key32": "3yKzrHDuc3WRsQmEEDCUpQWBvnfXrH2qPCsQeAnkDdoVh4iMUSFJeT6S1nMu3bQmdNyGtyydQ6FampuYcvGWGzo5",
  "key33": "3oejgH7GrHyiW2UzcswagXvJ6e8h2bLNQURSicd3gFgoWHb2owzcqhMAbRRta8XxPUX3W2j1eAjLSgeyA5FD22HE",
  "key34": "doarxPKVQP4QfW7kV6v8eVRx2P7hBPpky8Bx9WoBgfrjqC5WxwiVY1Fd1PvXQX65ang8jxGL2g581ScVkgPyKft",
  "key35": "5MLEuNFg2G4XoakCKxrDKLr74wr6suiSxSvJ9BX3aRMujp3RXJTAqGdYFytmm8RKiSZ6Y74xeGBHNneFhrkwSYNd",
  "key36": "4xamZpZEqoJupmPKvXiovfACkLg1BvdaNu9ARcwNkizkn6Awd2GVeYpCokAw9s2TSBU3m48oyrduEvn8X4iH5KnW",
  "key37": "2ZHQABXGjh7jcUPrQmTvetRseJTJ2LaTDYy3x4h2qCxBZdsJRBzYKHvoYkPVv5pQ34nWdX1LagSaFiM1G6xbhxxh",
  "key38": "53BZa2qRP2ZyXCwBhbY9RJ7ujU6dVuUrKCFufhDCFvvanWsbnT4fUapsyFSGd9mMmFVogRyPcxq3j1LNXKXtvpqh"
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
