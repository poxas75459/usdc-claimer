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
    "45j64EKjTWNua4pGdQSt9LAHo2aKyNovn8VbaqmTcjka7BVoozqJstF8J1H1CEbX2n2NQvgBFX6d8VinMgi3mkHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ijAKYwLJSg7XqUwpXGMtD4NddC95DSbuGqidKr5ZYtWYteYP7zVafta3bixwZysykm8Dk4cBfk8YSEbzg6qBUN",
  "key1": "3VJGweiSZoLxiogAvCsSRVEmtY4vjbkc5HNAgYoVs2P8zAAjyHmNW4LngpDwmXTivNEKCDLyS9ZnsdnBAWgn1eqG",
  "key2": "4rVfAC3kuaicp9khpuLcQecT4ySTTaQmDz9nrvEbgYNwHuAYZ3WETMSRUxJZ8f5d7iHWn1jXxega4hxHjjpHrHbn",
  "key3": "4opb6uApqxMtZzTngKR374UWMGF6t9JJbfD9HKujmpRZ9TeBruMoDBz7NuXG1HH4ixCjdFGofYz63ztLH6G6i7WR",
  "key4": "5BoxXMiB1VzppkYzsJCziqtoNi1JqXtSx3namrRshqXhKQhmmySE3k3pnGKFnVBKJ8D9ACp7MFjWAHsqAirufzb5",
  "key5": "P4tAqpoQgGWPbtxH6ZeKKCCecWbYbbUgt4F3VD8JJnvbbmgrmWF4zb6tfwhVgrk7CNyzoXSvbuzd1Q5Bk1H6qkU",
  "key6": "bApAy8EepEXCmdWEmi1HfY9ozmJ7UGWosfj4J35S73hJZ4DMrnPUKhB3uWviKqEnMzD4wQu2AvYqc6zGWJB57FQ",
  "key7": "5y9J1oMwTj7rps5jq2wdh269kh6v5y23UP6qV3GuqX77P6rDSQ17PpSL8UrndFrHMTyHPttubmuKpBrmTLt7epE5",
  "key8": "v7JEYar8Z1MN6BD6nmjvG1gobPuXhdNSgVd2xPf3345dW7CqVkMYCYkXtYAdcBbxAhZfzn2fceMXULw8UrUD69o",
  "key9": "Z2uTdjW1rTR9UWCaPBXooa3M1dZ9UdRxPYjWkMLNXfMFkfXLhmFdbk4iSkUVeCHk9rcbRf14U3oFKkRRvcU5KF4",
  "key10": "25dt5WzVrY55s27T9bEPa9CbJCtxWaN3SVKcc3VotMsDdv7pNR6NCdENL1iKkGRHPVv3BVjMgCx6NNqFP8MxveH4",
  "key11": "56aVNUyNyc719g5LUqefiDR6yxZHZPDJJqdgGQWPoLjkQoSFDbqHYmMcZG4mb8rQar5aNR8afDz5p6brQSU3d8cL",
  "key12": "21ciTuh4HVJzgahRjxPFhZ51WhEPMWjE1rkYuvGkMubgq2uDCZmPcBuToTiqu7cwEAV2YumDBjG6XrDwWVEWmi5r",
  "key13": "49gaL3nsRKHTbR3zUpeubhCPeKQh3fwdcW9V5eNJehoRAs2jSQ9B42HvaLx49LFkku3R6FaAJ8N7SEgW2aCw4nJ6",
  "key14": "5Kgc6TwnSzycBvTstiouwwjBhoStdczENheVBUPT27yB4jQ19zTyTPtQoLCYaLuKKfGPQUjCUvNef4hor89Tpm4K",
  "key15": "uVo9vJUWZHEpmrrm8aDfswo4m5Ut1NryCnCckFakXbJf9ugvBb1hz5aUHa9HHoUYUYAf9HC5FS4mhkD7WVdU6cL",
  "key16": "b8LUToFWsWHgyv3aGcesPKPBsohtGVKoPVr3SfJrVpoKFaiMwLsvKt45wYuZMkSYUktqbGt5DdboByH2eGkaCgk",
  "key17": "2HgGpSLKkkaUvwmuYJZ2tqST8KaPG8j93mrG6PW3Cj2cMznfYgxNU3Ut7sqkGHudu2MktWmwGzaN5ZFV6Zkx1eug",
  "key18": "E7vNV7Y8qFWVSo2UdUXZMUWGs1Tmp6LED2y7zsrn5ZiHRwJDTYm4gcwZDUsEGUFLLWHjZznczZY14hexi8Rsv47",
  "key19": "4DQ4yRKCV449bkbyj7rosfuCBMAiAd39DUfy4LCRiuarhrdAKDAxmZUmWgs5CBa956jjk9iTWdJFCEh2ZZD4f2Sa",
  "key20": "4Pvogi5rE3P437xdSsTTRDL3xJaRiwiGUhvphux5A4zjqa1NyptDow2H6q7CivUvWApb1dLfLJ1F6XdKe9TaXLov",
  "key21": "5kdBNAJng8iCFSp8pvDRnBq5JEJLpzhJPLWrbq6ZrrqztnyP2hHYuVvALFWoNzNvDgffpXj3U64q6UdY3L3fV1SA",
  "key22": "4x32Bgva4D1DZQSKaxjoQWZDpKEGnArhq8mhMKCqC2LokLTyShvau91SeygMUnaUyoqJiDfv6F3aawcRy4SuPzTG",
  "key23": "2wAAy8MBxasshfTK63WQKFJPFPzrREsUNeCj3Y4fSuaiaAEiEPhYEnFSKXvTq5yFUthYAbcbJH4VjuepQ9MWmYbN",
  "key24": "35feMLkEByPBtXCbMxH2beouEBoZ561o3gnAPpsy9GZAeH8ASKztdJBUwPxUoUkjH2V45wLBpPaBemForvC3fpXc",
  "key25": "2icEsx19ks7sWM124nriimYVAjo5bBmHHbQxcU8yh2y2aspHcsboMZzbNVuRKFybYzbGJZ5eytzyYzxXQbTXQMBK"
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
