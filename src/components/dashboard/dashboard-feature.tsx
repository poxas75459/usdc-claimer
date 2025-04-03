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
    "4ecoGBfh846zPFs8PvruHYRfcQxjXA92pzMtexxrYqJrfr1az4gEQc7PCsbdkkCmZMdzJqKn1tQSLncG562tFpnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47LJEC8HDrxCryoddkMCEHrpH8VQDvguGwu3Tx6L8cHkuQXxcWc7RGrP67EM7Ndkqphbe8kC69p19SkXT6j4Uriq",
  "key1": "213M8x9dVv2ZJWrnYLmPvX3pKPGjwQkNHtMt4CbGzgXtu8FZ2rjRH5jy7DfhqW2AxXmEc5R2Yef8kk8Qi8k4uAt7",
  "key2": "28N8FWY8jjpAo3UZRgXrJyk3rbyQu6mW6mzWqbXZ8RByENYvgpbDajbwzsfntSditUXmpjeSSpoQQ36PGULT8RFp",
  "key3": "81UwirCNuJPQBa6rQC2Mu7qEhHKA9CFpqHo8scQnCmcQVv2cbLcvhtJGqW77N2YpQDxKVEN6ey9JYM1Aqo2Lyvg",
  "key4": "2WazuZwi7RwH2DN4Xq9JVz4PEsn4SVMQm3rvaQbDGnWxk1QDBWnLjhfPvdZ8jb3fZ6vgaJHTkMfomDiYVEux1Zj1",
  "key5": "6G5snd11UCxRdyjhyLXXXCx7zrGqumg7HJ8xnNzJ9CPQSfMUzbApDDpyD352mViXuUu5ihSmwghqM6iBXXC9rXd",
  "key6": "51wXNMJmNLQ2fRPc2YEmbMsvk6TqY5a6yqE9MaBiYhmJSJuEAkM1mPBr9ysTXqvYQ9oxt8ovEcCet5MQYDRAwvk1",
  "key7": "2JtV9q2eevv8yzpqjwLW4gnCeiRrzTC9kPUEMhuuBiky8RNb9Xya25fKoRqYVk6RcJfuwUWHVhf19mLqGCpeGVsB",
  "key8": "5dNyFwRiizDqLH9zpdNVJ8VSaSJ14XgrCx2LU1naXJCLnkGr9MfE5VKoP3pxYYNukBLqsRfxG4MoPQB5vLQxoJdi",
  "key9": "HE3wQ9vHwCGnRhXDHQZghfojnkJoB6cP9KyqMyDMqLPDo6uUvQnEmXCgAwpZDmgYqpRiuwrodfvjbFnuV9zhhBe",
  "key10": "3o8QjceAwu16c2xx4YeecNivkLBLUPHALse9PK8J43aVBn35cb8AEb7wJkcpR7kvgP6vjNu9mLFwzG8nXonNBiuL",
  "key11": "22ng1nUgmekxg7YuhVXvyonTGFRjdwenwq1bEGjFy97sT2M1wkqhJEEMYz7pbiSSoRXrhbxm8XVmRpQDNDfTthVd",
  "key12": "3zpdcqNKer33jxuxVLT7sS2RSQrn1noHRP9cg2cNFVFamhmGVWve7bLuTLFGyvve7sJ3uTAWKXENpteszG6Agw3J",
  "key13": "8DMBKdhq3fjZ57WfKVbJTF2vxPvcxyjVxmkVuStLbkM8NqQZATrJCrrK5mKSmGA1hfiv4mQxsBmotyMYRFdPm8T",
  "key14": "2bActYKUZ1ncbH6qQ7imZwHi6F5LFcLNVGiTe2mXYUuYRBcQwwerg1vn7vqKFs3dgVHr4iLeXgrUg8N5BvK5m8UQ",
  "key15": "3YkeF7sYi8xfBM9eNKxfK1sxCZ8NBVjZbLqgpcRuu9pdehdqMidtEVnkZdqTgRxhy4CEBJNkidsYPThkCwf6ZPbE",
  "key16": "48dKsoLVni1n6jNXFDRrdpg1kqTVECBUAM6H45nhW8HX8iugm49uZWWXTLjDPuDzVHQFgjGpsBXZQguadiodSSV",
  "key17": "3bh74Z7NwjFax89WwXcjMSr7kpz4SQQq1icFyHX7fok9pVqt3oQtHk5omLWBrFa21uYxa2TVzsGMhvVaUaC6EkMk",
  "key18": "5ija396DbDN4oZodsYHraBJx1HU1UE58B4wfEUNhMP5A6ZqqT5aMTAm6o1cWghdXq3M4xCahA67bp83RGGRKRCJ9",
  "key19": "48Gzsx1ASEZR4gLDSPj645icT18vQVjtmiweLCzZXYLpkmWbQVzfuqt35YZ9BsQpBDuqG2SpzAfVzm36eZQJ1LWj",
  "key20": "29ntkEJMFTbf73ALU6sR3BC9TGuJweTXMy35WtZkoXznnMrHphtqbrse3hUHAQnTzeLLmAQbVTCDF2AZhVDMpgQT",
  "key21": "3tuLZpgdSGWFxS7DzQWVwtVy8QAXTR85RckQHtXhvDx2k7LJXseiLkpDzZrfb9afZPemDR2FJ3AjYi6fkhfECg2f",
  "key22": "3FZoZ1u6mZdUMHzbbK8W4W5AcY4kbdDfGb2rdq2CdhfYucyS6dxBGGguvWrxZ4jozcTUNKUsiL3V25S6DvBxtojP",
  "key23": "47oM7pT6YFKeK7h4hH5zht1bg3rd1jahJCu8T6g5qVX6KUkL9DJ86JjW28Mk4vV9YMt6CWZLob3rK1tx4yM6W2Lu",
  "key24": "31DqKyN6PXccGwrFeGPuJGK9xGFFBqmzcj6MdbbKGhVc9wXqxSQBcdjZqLcdagF8tQXym3wCuMGqfeSMvrD1sHCP",
  "key25": "4DfukbTmUYwbcXXjCn2RN16wyXFjQQceAN7zpjQsAyyp9jEuGSXw4JqiysetpdbxVau5V8XAtwigtKQRjxN8NDhj",
  "key26": "2RAYrKA7QEMHfNmaoeManrStzR7DDqqnWTtZY9SffUA3gfRsNk2fGUzxtMJjSHoP3vtJ6s7Vh1vdhozHytHBF3gR",
  "key27": "2Go91UaLJfkYKgZgHSuVkNbrg79tqnHRibP75kmDXr4QesNjkEHddJYAL7iZaF6CLCJDu2mEsRRmxoGLeAC4yEEp",
  "key28": "X6yJrhLRjBeDvpQYQqpKrKXsjJe6d4oX5KNCEAA8jzKJRrTGHhJH5qTotcx3zbkczJCri95pkuUxpVxo8zVZE1M",
  "key29": "5HeXnkLJoaBwDp2ivmzmx552E8k9magvjqRHyMJChCi4mdqiTFUWhfHtV4d1egZ17CxqidEJWe6oUMzQ37wS3VRL",
  "key30": "ysnJLXDE2egvZRjBAHMnUzN7F42812GQ45rm9ywk97vaSWEKUVNeysXpK53ARS9JtojNkLwAmAjVQaKxJ7DWmZX",
  "key31": "WLog77JSGhJHw7wqKFzsSRbCa2g98UUPjzy7goa8TPirVEH6b47TeVBqjDetcRLzTbzzoZiikv1s57LuNQrkuQ7"
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
