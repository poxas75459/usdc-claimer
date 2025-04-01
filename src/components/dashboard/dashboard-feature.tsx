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
    "318vSgziGA5Y4qNkMcvir7H2kes2GhC5nkHZ89eFCK8q89E8Pg5EgjKvHds5sFcrZp8GY23Zmft5DD6VEkyNz7bT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTtjpD7PDM4ttmyriRgfcJ2DG8pKZEtTZWRTPVxc2paWUQHq6JeoNWbL6ybjJh5yH6SL59Q5LVomHwUh7XizgEC",
  "key1": "bki7VfzWDLETa8fSuVLRLiAwEUwvV8e2ffYNpmPDspP4u4fFJUx2XAtBWKmucnhNWrS1SMQx8FZLuVXsHzrxyyr",
  "key2": "33aGB1W9Yv2TjQBUNKtHefZD9DszLrG7z1bDgKjVzWwgJkhArNX5kNsV9ahd4VHgJ9kF56rUzPRVH81fpjAiqXqY",
  "key3": "4AzM8UbFG5rhPUvh9L66AKocaTUG2ZqQX9hypesgm6wYm6g842KbSqu35zXhFP12r55b19oG1Q9wY2K3H6JyAhjP",
  "key4": "5MPe1TYqTqizTXfQSfzseXpTJNLFQSjnRTpzFKLnpsn3dHMy8XXA7gKH6sTqAFAX3KDzs7RQE4XBSpqaJKdKKFAG",
  "key5": "2S9podJkzYNY1M5qbykCwBsiVgNqgvz6msWeXRh7Y7BMqKNsxyZoKf15RbY9CvYhXNLtAWmyvro1fCwcdr4yE49b",
  "key6": "3bpGmRGGXAgWpqp4ZozHNxVoC8tGmypk3cyhtM71pncTiF1fKkY8ZkTDMSA3XcCkXXD3hyQSvoyZ6RUYgPkXqeFA",
  "key7": "5zheHTQNiexqiYjVcDPeF82VRfQbwyt9cpuoFSR8pNm4caMw1arxakmL79pqxKv1rNuowwRz9CKCUGFdN8WGwRJv",
  "key8": "DWry2UwPKnXWAhjd53s7MYg6Ea2d3corCkFUdCxXD26W8nH9tktFLtq3wFCKGhjJGbUDU5UHAV3Kk54rPY5NzN2",
  "key9": "hiYmFe5i2tUuyJ2JtidpKDARTXaEFecJWyZk7UBtkCEM4FughxvPDt4bdDr1p1hEJgz6rN6bZyVb9pWfX8yjUCv",
  "key10": "2swKBfrRMqit9kiYEFevj3AWZMYC4xVuEoE1bj7a14eojTSsNjUthXNiPNTnqXvqpYHquqckjVk2jqeHzFukmTVo",
  "key11": "563mB4XzDkHpkqet69pm3Q2S7iitdzP9Ryqbt2r4rjb4G1ipZNTzvXhuoBhQboUgxiwHA6ubCswBmb7xs1cPGbBR",
  "key12": "2g138H9tLpz4STStQ7Wpr9wdSykRZ7LuhEyRkF8LjeMSywNNSbbjyTTLoUKc4uqpGvUS6E59FMQX4RvTMx2pMmxB",
  "key13": "4W3jxBRbVbU39wTAMYJZpAqDjaaGUTDta87qmunoXMiRm8fihmCV8d252AHzUjU66wfCsf15tFEVgor1gFacqK9t",
  "key14": "2M3vUmz8f8o6K4HFMiUMi31go2wB8BiP8v8x8iQedvckGQtJaWS3EY62tnaDHVmEPpURm4N1JZi1mLfrX1M6aaDg",
  "key15": "5tkiBbSmNGhdWao6oXG8X38J8jajMY7cubtW6SMah3PojTnMnm9rb2ij9Ewj2KA3b9Zn3c2cZp8Zeszjx9W9FFj3",
  "key16": "2u84i6zazrMyKvhBGsZDTf3cpxgLXRFMhKwLCRX9X1PNx9eGrWkbsxNbnvVtGDXzRJyF446x8eWitLNU8hWjn5oZ",
  "key17": "2RBDCuR6fMFrZpHymUWviqWnijZoEKbaNouC2YRZFyfPVEE6np1NCcNAvwimtWhiuWAmvrg1oDZQauA9TYc7co1y",
  "key18": "28L2UTyPh7mMURjAW45nPhcU2Lt4FDrmKeyoCeA6cPtSm1xuZVPN7CmeJXwJrWprfwYjP9ZLvhw7fAfv6Tnbcywp",
  "key19": "41LXdJvChA8u1PYfiyDZtaKgLm11dJXWq4pRzFNexNaUb3TG53AteNHXbNJZTgFPxM4L4JuNzoqC2V6izDV5kZQS",
  "key20": "5MGsTB6XWveb2NRAqpV8DGkY2qE2ed1FnGxoRsJbzuyEMkCZNiFq9KdKF4du2Fvatyw4pgKa9urkXreHj5Wx3KpM",
  "key21": "3PYfnfPaFeNDBi2cT4p8iGGGARXHPQxxm3aWmzVV5KGjJLv3nenJ9wzGoNCQLrLnsYNRE5rPsLQ39M5XFoB8E18J",
  "key22": "5zcf5qVpFRKZP3HGqppoMW89pjLcgGZ9WfL5oHwqztDkqsXSLqCMwKHspYg4azdBPHvH7z7K1rwRiDJkDmm6gi4Y",
  "key23": "Bq9X3RA4UEWDnqzKoH9ZoTP17MyQKYhQLJaBo9h8q8x9wiEmCG1or3gGM3dT5QTH4fmZtec9irPPBWjCvk1aJpB",
  "key24": "MYyHTwpR1xumNwLWVvFRS6xyZZcGvG71uRwne7orBqRNp3QFfyE2YjMCft68ZQcJtR6AdvCq5PtiszyYVcbFKum",
  "key25": "4FumETKNEpsBjJnVoL9rzDcKCJBagieukJi69WkdYgHkoduThuJZAPgkKQYowYMFbAQmBvHWaaRXZtkNF7rL6cqf",
  "key26": "3vhcttCUjz9YjsjPCpiF4MWxauhgRHeDeade5RV7t8VpVieNjUTa4s4BKGDRKtyJZQm3LU6xm2gydvCnKAB4nupd"
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
