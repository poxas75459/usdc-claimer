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
    "2Rd2rXd87Wy4N7LARfL26T4kBdxAmYUmPqt33W6pd5cJSGbQgnNcgYaT3M66isBFd89TopxkX4euPL7PpBotMRpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wnLQmapV12mQpYLLcMsoAkuFidUakxW8sUtS8KnsMDVMbCLgVgQ5m2WyUtUNnofUyiJx82rp5Lb7Fnekeaakstt",
  "key1": "KfY3TVJCjpcdUzAvkjpgVHvTTunCuFHMRTSnF27zA6vJp8B1MxDM4EqXpMhVbbgoWGnJcB9nAiyyaghcstswAT2",
  "key2": "geTXQFyU5VJ75iFyfx4DAtMHzUEQRVNwmrKrcfb4gSMchCwDQSPqUGga9NPSDdTrX2ECcWSHL262WG2MhbxuJd6",
  "key3": "4V6gK1g6C4hCwedMqtbqsVYBzVfnP9LXB8KeEjqPnH7mgWoME9NQGzbWUDeeXyQQMLYNPNNPegPNo3AyenFRVT4r",
  "key4": "2TSypqcqAuYDYpkvbVgt5M4A6pV5TWq8uti7LH9dcAm83qpVEJrZrc1GmveiHpNMK9UcgfKaCZXKdUnx11o24sAj",
  "key5": "41fDx4JHS5M2vEwHk6AAGSqGvZ4ZbotZj7nCY8Ztr3ATPqHotoAmN6xuSPE9ajWWatcLug3vtZ2CgrQT7Ywuxv3",
  "key6": "5zJutSt1SN2aRRYiRgc1j3189h3TcHJek1wqAn8evHdEqVxDzdMi36GNwwRytEYbjW5q6za1Z2dz1gYqPNVWAzR4",
  "key7": "4tzDEy2YG9RKFnQXDkmSnSTqkTNfot7ksrrKJRLbmwH5jDyZqfNiaLWhYjTXVtMMoEoFJD1iAiMcmqZ2kPd2e4sC",
  "key8": "3rnRdeRmNmYMiNeXvrvJq6g8nyrFngLogJdAZ4XvNAtuEWb7PK6sq6hc3JBFmXCMkx2SDRUCi1vHKz77asxWG4Yq",
  "key9": "2NypgWCt1A94kZ8HDShiXyA5Z6HLEh3chWRm7cseuha5p28KohHz7uvKjzf13HHiRTBJSf4BHGtTkGMuyBnieBVD",
  "key10": "44PQoNyFzRvGnTrSke7t1iDi738WKrWWXpoBsio1mXAehQuAxAqTaRAjHgoNuaMFRhskPPZNdvV3UMyARUUAf4st",
  "key11": "22ZAu2B6AwaDx4Vvj6BJL1eVaezXLJEVbnHGn6kegeGToiAUxeQK7fwQkyFLfFYypQrXzJX2RsxJt5iJPas6qa49",
  "key12": "57vSY7Uc2RF3Yq2YtbBH4kwzMU8vh9EZv5R6c4FHDMcrWi8NzSf4FqXbr9vqTxrCqMkMJNjW91GNC6NvfPeHDd8u",
  "key13": "3QKDGny4ZBWscrWTCRjbHXTrNHQpnEkaFjQhtHRtFuSYGcX2SKzGVzAHBmnxJfxQu7BomNoNV6tn8eTxJx6pqC5e",
  "key14": "4GLqJXPmfEWK9cdWtgRbZnifr5spUAP35MnHaLY6DjaL1ZKXbHcA3rnHoGNRuo4GZPDhhLo5Dc9NV7dsKdvZHeMy",
  "key15": "5veuiTdR5rWEyDkuQKTs6kJh8MTmvVn8WEUpPHkaMaUt2ap48P3hhw5NgKPxdbJ4EjL3diWDnH3Tpt6uxB8StEUP",
  "key16": "3YULb1Ba18JzbEw9znM21bXMn29VeEcqTXygYp9efCwnY9y4iPU8zFiRLycfEaPwZctKD74stpENXCufenKPJa4K",
  "key17": "3E64trFBYvhgN9MhgktLhMQ5ru4NrN79XXRnyKBtpHcEGnrRH1D8aAibrfLLdwZ41xSgirm8SMAmGPC5Gss2LHZr",
  "key18": "5CMa3bE82TxcceZPoAxfdXgWBt5mqGPiv7axMMRp6at1fYf5Px2br3ADGqAfmEsk5pQdG8CUV8wjNHo5ASckmqBj",
  "key19": "3ByTv4C1afarEg92xe2hpFNjVR8JBZ2dXgcjR39hrb4CHQKBavWwE2Wink3fYAcVR3CrR3nQVzAgR69DEVxgYqQA",
  "key20": "21BpVboBFC89psfp2fUr6AWUpBHg3pk2114Cbb4hHNQ3gTvRiUHcPqBYbRzfacDZNkuFKhjB9zqiKVsJxAY8BC6P",
  "key21": "5ww8EYbJe97AhYfHksbi6ELiUpXh1cZf9LW1xNfvU12X53ZVhKk23DHYcsXWs766moNB29sCqC6NFG5gzkfQbet1",
  "key22": "2VAPanUGExPHwo2GCq3Dm5BRxT879LxSWALevNBxA9Q2RA2mepkPtK2duYZ3sRe6HC92direC9sk1my7VSXS2Xgz",
  "key23": "3wq9LJtxx4aLRThuXehksfuyhEHp6TpyLuDdWDXZtZ55TTGps3SgnPkAgagAxQ9CX9vzdGdbGKUrLMgz6ZL31ds6",
  "key24": "59jdn7iGhJizWoDDT6shzyiHQHKNNZ9FHBcSAUkUgv9ZbPvjZnZ17iQWCQKo2uSfeJRvJChUNxJ1KAuugsRn1CVX",
  "key25": "4SC6Mf5JUeigaQehkq8E2mGzdg5uurhh5yDdzvo7NuCwkffHrWJQtoBKyxND9DK612yELe4XZTxZFXiu2vJvcdEP",
  "key26": "ScxKN6SWd6tyi2VHNv4bxFNNujvJPD63jzrAn1YhbQDEXPDWupA1g2KhPH4mUHucv3Gz3S4jmppxfoFtQWpmnY6",
  "key27": "2S7M3weCKszsd8vAM3Ra23gYjmMknhceyk7cxzZtahXH32kRZrySaxQC38s8UQwgTFppAmmGZC1KUf5A4v96Lgmk",
  "key28": "3bmFFXTsf8R8z8GtGg6AkQV3QQFgCFqhbPvArpChKgEg8LJNrMALo5ZwnJ5FWhkfL1NmZir9rtpJdGKBKLe4qkD6",
  "key29": "kcwbXU7smZGkntsjQ78DqWevyWXoU5w6hs43EaCznZUjm1GTkvwgUEjxmtjPLiAY91bwXst6WKz2UWgeE1e3vjR",
  "key30": "5cYYo9LjCHUABAaZA9CeasF7KLiNFnKgbByrvBJBRkYYUiDatZG7SrkV8zbV8daSq7TMS1f9wEEfi68aXFKTbeP"
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
