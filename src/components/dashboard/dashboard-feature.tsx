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
    "3b5k8gJogeshNPrndGLeJdkDUPGXcRomsQuuShSWSPo8wKyfepUFuRXqbdYGsJ2QqT8ev3TtZdJQRJPbZHSo5FsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54THLLrMNdmnyry7kSWVtEXUXnZNVKUZtmhLbhTM3hJeyE5hqY2Grtn4tFXezmurGuDhpJBvm8R87je87gDrZPvo",
  "key1": "BYLffAYXrJMWg7HtXoZepTHDv47WKxmtEbZFBsEsc6EEtn8wXntkVFt4ycaKdxUhRpswaATDUepBiYkJ6Pm9eTu",
  "key2": "aUtsz5pr96wMwYLJuPH8mCQ2F6LLubxkDNpHLX6CYLeVbJRYsWyJ7QiTUDDshMz5g78HgrhuSwkUa4NFvccjuPR",
  "key3": "4e8EMHrZraZ2dnqWJ7Z5kRMNfDiabmaFtXksqjsriG9nL4MF6zwCy86yffQFH2ngB48A1wt5afGrav4fddZxpqtZ",
  "key4": "HAE57e7sWbyLPxz3yHJaLREtWYhYA1FRDoSH5dqhkzQ4rKJRQqLYcjBzbfAYiXX3nzwSqg5GZqEzwDDFf9wGogP",
  "key5": "4vBE7Kdm5E1MYNkiAQiR4NZcmcAX3MA2iKtqu1u434KvhX5d9M9cQ1wDMRcRfLsLyjuYzWQLEFgbrv9yND2an7ix",
  "key6": "4C33jeZRgn9RCBvy8YLQ38dUEsLeScAjm3CbWgZ4fQnQM45RCdEQuQte5hETcgiq6qGp4UhrSw3rSG2kuBGVLzFU",
  "key7": "3i8n6r252JQV9HJuhkGBf2PYsDAwQre3eZZ4Mede75KUoZvbq8TPPRsmgFaQ6UsyMYCHkpYGRPMmjsuvGnDfjrgm",
  "key8": "zy1H14DAZpoeqsi4XRrV4VVBk9qrKSMSZbtFboi1SuxVfW9RaLQyD19R649G7YrzH6jAS5287Erq6gB1VBwEAcF",
  "key9": "6o8LHaNh1q1csrQU3EgLDZXjpfhxf1hadXtkAeCUSRBT27FMvrMDMJSxjWGFc9xtXjzN2pjjeSQBgHXCKbKXkN1",
  "key10": "iexGqbP4XEht8VhHVviNHHuT2y9MyzA8n7ggywEFqVPWycdPrV8mmc6tEGJy9vLvT7yHjFPyZVdeacRqhGFxbn5",
  "key11": "vtqBgLDv8nuaH7oVxrZD51k8iv571SUDV1Kidki1XQUDgxmRnrhXY44Dh6fTN4fw8MVxPyN7s2fjBegbtMbz4YN",
  "key12": "4k6P1Qu4TSjsFEn2MLtTVxvFHrLwVwsnJV2Ehqr9FQS5EbpBveXmb2s1Cy6hKGdUjQxiVrS5rHftAf8KK6pkDmwH",
  "key13": "ffaWuR2pcTiZz1hpM6NbgpE3bkEzGhPp7SYoJ66R2w8cTAe8nAGbp5eeoGmLZiSBHxicJPmXuUnQygrsTticACY",
  "key14": "4z93E8TXeXye4CupnCTDhNBY6sX4nR8ptpi9Dha8en3vXz4JYXt7AMjPWFvbmpbybSPqRGWVt6xkEM7zzxZmpdGo",
  "key15": "3UiwCmtpuLiueNLfdFxwqYtksJTbWycgmXjRnYndoUVBAamt9WBeWcnKtCTX1zDuvuKU977GgpjYUtzSVUD1FN6C",
  "key16": "3MGTBtX8oJBBCDpx98XmBozpYeFVoFH4pgeQuVNSuDCgyvb78poMpW2TYYDQLXbYABBxksE6oDDCCJcoMMkx1ULY",
  "key17": "5UN8oV7VNzNucaBFRdaKkWD1mirpCxv6JqEww6HQFLTCfXvEvNXktEVvRnQqDVMaffoc5JTQxCkABm1NEChgGpMT",
  "key18": "3fn7aaRBMrxxeHSHa8QptamVfUxz9rEqNohYA5fDwb9SSQvjj1rFoK7EA2cmN1ZFYaYq2zAZT8ZrYaHpvV4ifAGU",
  "key19": "2ApJSvR91izTfQEKJemVdkas2MpcRC515kfMUALrWBVaQrrjp1f8kkMWNfBmGMfHo2KGWk7DHRg1BwabrofHpEuk",
  "key20": "3p9q1CdWtYNaNPPVBFBMkzH6X5wgLTxmoxdaHp8rDFZLuk7jRvNYGz8R1qtsQeDkm56gYNw46LzfaY6GtsU2mUCL",
  "key21": "2PeBmSQSVNrJvXhsyqYcFxTQcSZHbLL5JPrALHMh1144o1hyGPjJgmCi4m3JGhczpvYRZSbi2pmt56Ak5ui7Tssh",
  "key22": "5Pdn7r2vDYKJxau1vofhArEktCunWXkv3Edbf2Frr3L9cKpGBZMeRULrJFhYsUDTC2JpQB6dnngooz25wkk367zQ",
  "key23": "49Fftq92zJzeRUUXkArknZLJGhEgQ3ZUh6KgtH7ZoGBX8ZqR9VHS2QhmpM6UitD3YjWX24ZvzLWvtevRcTR3EhEa",
  "key24": "49kojEsTStigx1QhTyxKdrYH4frk69zH1bZbTFpAzBCifngUxB3yuYqY67o1ryZysCv5iNGX7qK6PwyRV983VQ6g",
  "key25": "2YBF1qr9wkA7oAvXotKUorKX6j7vaFB7DVKf5uZgnPbaxTvQAP1RpUvhWToWAxyoNoS6TxCCsNgPbcNiv2pQPR3g",
  "key26": "3j7VAKp1QCqmaj3vk5PrdDRnjqNfzP41vJqAPStENnNfgpX5hFLgom721otcU31KqUcgGM6WNeaHMLWTYeXgrsPF",
  "key27": "33UxEr7VU4StpoUxCbETwYBnQ2eR8DjBJG275KHNmeZ5d9UuxgpGwHXhx8BGG6PeEXsNqAx1aY53QAvYAV8UvH2d",
  "key28": "r6rxd4pzVp56F6LaTQy2CSschvHEozoYGa6kb2P9mqB78A6kiCoL7xySGWfMGqfJyms9SY38pByZb9LAZ9PAfB9",
  "key29": "59RzMkUdWikkzak444P9ZVXNXKMdBW8cNQQrU8J5oyzzn8qKcRHBM9td9mL2uScwkndAQtpPPzmXNHnooYCuWz9m",
  "key30": "4wHtMyB1guswFeivsSWKKhiPvWcqNCU8pDpqz9Guuqc4PddLcgLEajkQrd9L5vBF2JLjZpvuFkqSnAfyqRLRSaTy"
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
