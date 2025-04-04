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
    "25pBu3hzjSQ8js9B44og9hdwxMpkhHhaJPJyC3kzm4Ht3EH25cmVF32xH9MzJkDCbeCYUWK3B4VeQ3cE1dBGFoYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pmD4ZEJoLRMvPMQhtG7MukBekiCCqBWVZSYVY1srVHjggKqfKFoicnHKhok8QkcEsXFrmR7eSMnQzjqPcMrNp2T",
  "key1": "tFkWNrUvfd5soZmo1WBGzrTUYM9RWZiwz5mivzSmRt3jSXYdK17i9RvetWNcHWmFM1XUid8Qecnb6NWhxM7S2gZ",
  "key2": "3bFrAruiMj6WBisdaFH7KQjKjdKkJSdqw1td3X4rb47iDfPYhAsBQmFJR5JS8a4psrU2VqEsgUW19vtWc5MbTEZt",
  "key3": "4g4i5Wm6uNtEbr5M9H3oUUBaY6YUMVwm8o2zgasoMjYTvUcJHYPczAB3iVzmpfeiDHkYbr5dFHxVbdX7tDb4LB3S",
  "key4": "3ZqqgJ77tAh6qodjZ6GxcXmiJmgCeDaQdUoofmF9J6Hu1gHVrGc3NS3PKrCuXMAsrtAKQRxPEzQ5s2xwsgAoFdPV",
  "key5": "2V5nqaPY9hH28m4m6GgKnVqs2g5iPGRHEuv5Xu89qmeyt2esnYGs2JTe4rHe5fYwjKmrRuKxSpZm81kAYVWLussq",
  "key6": "37VSDGJZfLipcFVVTdRT1j7zKEHcf6Z1bXkKJs86kSWLRKaLfc8nTPk9NRV7gtSNbMpaoaParn2jN2ExjSpe3HJw",
  "key7": "35Ayz91GPfxwkcWJQHmg7AXCdVwGEWtXekU6cB4B3XGwnn1QpRGaB2N4tcP48eVXGV2btzsuaBnLJK4NmgeVRM7J",
  "key8": "iDVBTM4uKULaUCAwrF8wS4uGPEgxcMdR8A9eRGTUX1zqnzqdYzhJNzyoEgRgrD4JDRsGiSFPrCBwtYeaDAWT8Zw",
  "key9": "3u7K83tT8XaT9Ru3kZfVuCoNBJhRr2bGmuK92daQzYCRHUeWEGB8MDi5eQvPNdmpsTWEACVKjNpYrPht1yb9Q53d",
  "key10": "2n7txSxwFuKyhfznfyLwV3dEB56HCT6DsAsZQE7pKu6EgtgATeWpqe4qTrSFwe3yBReN14k466a9YFFgB117oGZH",
  "key11": "2KEi35gSje4vSp5zqoeGiyi1TWdocjxdazsvF8efz7cWmEeUXr1yTERDacq5mtQqZLnxrbcezSNA3wH65NEH2iD3",
  "key12": "41t8vxC3KEDxAd4NPjyMDkL1Es3xp1kZcEC7y3VRDbzTFTAc8AxY9f1DTGvCJueZtX22LKpWWAuu6j2CRSNxQjzG",
  "key13": "4BtuiAurDduC2UcswsAskQQvUZj1QuKme6bxaXdsv6YUeATUcEDrpLa4uyjj74ja6KsDdd7Lyu8xycsFbnKMfXi",
  "key14": "5otMMzLxaaCtMBveCw3PjptxD1GsCPP5EtWCA9BxMcRLvNekcCjCM4VEWdici4oeUsoNGmwDM8ndqwtistiZGKvg",
  "key15": "3wDhu5B7CENxWB8bopjSai34LUNzgtEvuVXtZLwnyuCjvtjFrjGhmZcaJyVQ3WohFJJMDLb8r3HK6UXTVRrtYyvb",
  "key16": "4WrMn3xXEBdcz6MqpCijPUoReSmzMVn45zNyZEbEouciXpm5FxdD2q6FxdWb3oWP7yht2dYpq9YHcmNvN6Tj7wdy",
  "key17": "tfoy62wTQGch9AGg38DVvs3veXJbG4H26AxoqBFHyvAg6ZV8wWP7EFtSzboKhhwcXqALNLJ4XyykDYaJF3puZsZ",
  "key18": "2RfdEL6Mw92gxet7ubdHa9ZPhSZvWueSvPn3cMgnDEm287951cffpTVqjjDKbjKp9GLPGymvHpQxe7TqADmt4QEA",
  "key19": "3oY7fKXXhBCXzv29aaJhufZbGsoVzbPfc6q1eivCRYs1zXA6hyBWVKgABE4jN1P9Uy141nyxazRBRproDnvhC1GG",
  "key20": "5N178dvHTjqLz88pnEzW4yn1HSwF8RDDB2C7MGttVcFYZxU3WkH9UPGpuT34q9FU8LPht4cyVEK7tsugzJ4RmP1o",
  "key21": "51R1BFcah1h1Tiorfr6mxuDtRqAYwYpfcTNxuyKstw1F8deQQUSmikf7rCkGdrZTJZFbQ1FiEquErmGDcykzHqV",
  "key22": "3DpJbPKdvjHjvZJTdRTp3VYH8Q6kC13BLtxUStdBVGXDfzqUC1ykGKncqrxPzLzjzN98ctkboaZ8kuVhRvLFYnnj",
  "key23": "3guRfJmUKvggacN4kAeEmCwaZo1T4DM9Wk93z4VaLc3nohFgswswdG9AW2W6QwsDAA3X7n6qAyhmcUmcyjoNKrKk",
  "key24": "4LeCstAFaktqZdq5xdD9TjG4KqB6f6HuHWGgnZ8wrF9VLJgFrm3jYAV6kTrewgNa8XWovqceFC2qzcydjCeme1Za",
  "key25": "aN4oD6DdrWm7w28c9JbYcqRZGsGbnokY8SHjhcNLJLGbFw9DPMh2buUZkDfTbxWVYwQSvp7z4DpysnWh2q4ppvJ",
  "key26": "3A4bXdC36HzMk82B1hgPyapdHDM21ffBpecFTKLXSR4Fs3MgnCz3gMRyLBpwaxnvsjGgeT8PLiPa1sykm7wTE7i9",
  "key27": "3hKgw5xnaz4wq2JGzgUU2rVTghx4wNtNEtVVKwmvnGGWHVszci9e6kNCRBypDiUYqu6Wg3pRYNcq7KN5R6BsHkDC"
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
