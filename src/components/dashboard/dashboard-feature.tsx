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
    "4xvEgzMn2ovjqPQ2Q2HCuQhXu2uT5uSh6guxcdnjJKmJJeBXZG4tSA9AFD3HcyCpE9pZiv6wHTUvL2SJ6NNrKcsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35adS9Ji1rgqpPQ9fxbCK5HkZk3gkfF6KP7qhyH4X5gUJwgVQTW6DTSxVKmQNheRb48C7mFmeUk1hx4mfomxjevP",
  "key1": "5V1G59yw93StSugAdqfD3ctCJWgCqgpQTEjgZGKudx3KK9NxxRyw2XJNyAEQYFkDWW6S3fSys7NvUHCpREVEyPS",
  "key2": "4SgvceE4KX1gR8Ls8ixHx3Z7NhHpWxS7LNp3CDdP1pHUQXS56kB33ksDR9gbzAestP2er1DDoXCLJgKV2U4y2YN2",
  "key3": "TLDngtDrPcGyftWuZRQJsDMDbKBm1SwNfZavGDSzkgJk5vPQ99iTd5XTeDPTKcqXsJsVaNxR5F3D498yb5LnhbN",
  "key4": "3rdFcDGkkn47b9QEJoJrT2XNddsfnkHZ2vJemosKiag3BwSjirkT2cAKFgaw8CSWvuvYGU1K1quxFNxvNp4jzFqg",
  "key5": "3kyTgAq2dyhFbcL2c3D9FFRMQzU8mMPs7paEmEMCPcWaBSkRTNodD4KzDZMZPdXDo5v34LFiuDwHjNJNcXk3LN86",
  "key6": "2BZSwLBhgUPLtrNGj93HLBrDoBDJM1PphVKmREBXT756VYkWsYUmZvCdfLEvgVb8RzfsaiJch67D7DuSTb1HzS1u",
  "key7": "2ahokDP1QfPvFYSwpWaBrKior4VhfuEfgHUuBD6A19Tb7EUVAyD2qDtBoSuyS3GwZFo5JYBPM4bLJ4i6d6inr6dB",
  "key8": "475HzYdeJAik5nx7CttgjvG8QRx6VXfUBD2qgXY8vkWsKFTZogrAKSNuaGTSh17suzkhCTaoiQNKxP3Bq8EmhBXg",
  "key9": "39neNBQHAbaPytjKhZyJhq79wagsyxgZ4rnW2XEnAka82np9SbN1LQJoFwg5NyvBGGfRRL6Q7Pya5tddoVEwDnfm",
  "key10": "4PHzP4RnWbmM93d7Y7yPvesQnYrRnfsngE6zuyEndH685zVuQH9WiquiXB7n67mAQiLwtGjFskA7xBdtnqNYhoYN",
  "key11": "Csftd8E2CmFHBq9RkxyVnKCfwYSsDDa7nKRqQ2SvuzvhZF69zLmuuMCm5xCfdmUB5ypCKLbt7Tof72gZXM1vVYK",
  "key12": "3a3Q2KgFWi54J3bQoh8GhcKLSLoDvwwQVFzQCeQQXXDN7SQaVvkR5Epni8EokeRt42jMxdiKLSkeC57nLJuA4tb2",
  "key13": "3VSPiGA6MCBd1cKaNZkUaxsxWAatTpC3Jww1EznK897asAYWvxejvBTRUpBfnLkANgWx8nWe3zxMk2o3fvYnsJZ7",
  "key14": "3vrb7CcHDm8V66oNmjdrvQXpgPUyp5jJ2QEexnvt9BbmpQBvJbjmQue3XVvzywLFrZBybMH1Bgwqq1mtSVuzzFgy",
  "key15": "F3WGNSfCxDHvoxSqyWHXSQCbVoJZPLwQ7zFAXau9Y9bz4Fk3o2JJTUUp3f41oUKz2W77ZACgoxKLTvrGrpc9pBv",
  "key16": "2ndEi3KsTHvMKLd6AHYG1NBQ4xxfUZHczL4ffbRJnsis8RdiLzadV8GBtshjiBMEKC91p8MsJQBKjrFyWYVvdHuK",
  "key17": "2LCSf3mF4ZATRtEQKAdMa6V5Zsw8EVSY1sxxM8o8pQiMc2htapNmFd7ZRV2a9f18iHWHzycCa5v7r5dWkEMGwaoQ",
  "key18": "4sahNjCMaqbGuqHwfvnwVFJaXedyXGmNdZrYC26nTHZkJWkogFgJsJDWZnTpK1XEbTqrs5WVLnq7jFswzFLqCen7",
  "key19": "3hELxhyjr9DHgCiKk9RfVZ5oc2HixiUvoMNmpyYX7jEjhVjuvxuMDTJoWVWsMPJiDfh2PPkyW1JnSVwPdThvJG5P",
  "key20": "5EW5XBuEbzsSyr6D6vmhCiNy5L3iyNKwG3fdjmeWx78C84zY94RAPrdquwpVqXeJAmhEfR7DQtEmH7La7KYnQrTG",
  "key21": "4HayX2ND6QycqWTs8aV39bysvtCsEusXygut5dcMP32dRyHvezyRr6VJ3sSKuVerPuzJuyF6hK17Yt5qPikxHL63",
  "key22": "2ceSLdjf9PEa2VjCte1q1b1v889UsjGwMBsHMeR2hqnsNdevSrkJgLPABqBD7zYVGQN1sLRYTqdJ4ZPeKik3LZSu",
  "key23": "64ng3cbzgCw4xom7FhVow6vxeH8FEJPWqe6nZ2GG8ajjWwQomqDRtktiTTbVF3h8whjGfow1w4GTQYjY9rmu7MFK",
  "key24": "4K7pMC92xP6VEx6wGZQGKgJrRpJk8d4BQrwiY6o48bdMqpxDJc3wMZxngVqKKMpMq2tmjnNNzAxDzNdwTgrVwNWy",
  "key25": "5Lx9XpgJMN1adLPvugN1kFWHGJuLknnhhaPuEFUdAEx2L8Tdd4E8PrDoAjaUwdXNY5ACjvzwZxXudHiLXPCzsnwL",
  "key26": "5J3ttJ8KgFUFkmLVQ4LuBD1LtRSnT5xrZRBREkUipBwHMMgtaZ7vwdCuokjdFp6SccaggwJzai7ehj3md2xH3wf9",
  "key27": "5Tdw9qcRphxvgSjStuGeBVmHZGkqZ2snTNyJHkjC3k36xhzKf5o6gKV7WnUF7tim8h7y8HRf6h1PJKFhSwBBoHzK",
  "key28": "3446PcW55AazmyX6Nx6cquSbVFNMCQBLVQhdc3ervPbKBqs7aiXgacKP4R2CGmPvjjZho3HWMHn6Xcx2WANRWeP1",
  "key29": "4p13A11mRSN3kjzwahHAafGtJCt559ZBkLe563KSUdCPvwobri7QFHankhKY9NiUDLDBQt1XSPsiQZujHa7Fkw2T"
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
