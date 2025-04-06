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
    "3PFxtatQwEALRvdcBv22pqWvcTc1R4AUrxy3S3qqzN9JW3zeb7kXf8s7w7wG4j6FEeKeC4DKELya4BNmp5Q5XiVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29vecjWUm6YUtxRdNXoF4vZsmxJvMhMkPPN6GRHKJkFDNxy546heWZGS6uTEMQMfKaXpVxgdiCEBrDugt18yfPcq",
  "key1": "RkBRFs1tCiYMaT7MaRFXKejrc3hMUNtcDAFBrUJth9QYGSSTHXJZ4WiwQ5vWMABT92epHdKBZpf5VYadHVpZ2Pb",
  "key2": "28Z6oy4dADXNQURuJvTMJkF7udqtanAYki8mtz3HDWEBoyFVRGB4LLX5Z2XmtudgaenqGBHiyEcCviNHvap9bQ1u",
  "key3": "5nee8mU6ktC3ihBR16Bjs3qneLXmzTp63Jh7q3ukZWsWdGtPZxMFium2KxD7iHDtGLhCYEPWD1cFuMP8TsgnVG9J",
  "key4": "2DfrKG8KVMk6YFQVoUpcP7WfFtsjyDeyHAW9kQjpwefctKgcfvfTRNhQ7E8qB1LR4RZQ7CjQuRUT686hx7ckH6jg",
  "key5": "4eKVTKsv34oE879LymfVZ9Gofr2nJN5FqGfqULRiKtPgadmubHvJzscbotkLSgfVartRhEUBGb2myjxrGstd63oB",
  "key6": "xEonfagiN6bufabX2hx9m96VMFxZnPB4HQDGGpu2kJd1kiLsi2VUeCbShAhwngpBSxx4cdRyrUb6GLiizcAaXCg",
  "key7": "7DU7iQrT8SDiiSk9Edwsu5VLhyvQPdL49oPemQ1MvyCZth8M5L5AM92VLm9Acip1wtYPb9h1hfYh48aazcXoCF7",
  "key8": "4EMXywJ5AEFvczd18GwTtHLupHRT83hPrZEwcyoq3qUq1TbiUcGBvkQBS5zhfcNcqJ6q6N8PjDSvwz3PPuQKgvT",
  "key9": "DZX6HkUTUqT6VeEB5N9EGekWsAPwgbDq7wDxg9PM7yM5Vgvqsi5Bmw7AnjEnVQuqzC7CFzg6F1aWDQ3ngULFPxR",
  "key10": "5SjNod3zNfVfnrYk5Z83LfbhHfcTgJ4nPzgYPrp6d6q2eEDKkvjr7zgWQP7AQ1mLQyQYJJxHEUe3zXcVm9ZzGxt7",
  "key11": "2v45tSvb8gSFegwYGU2Ycun1HL6gJvWfboEwRFbhznhtMd8f9rWKjWGR51MiDeF4R5xBQTYcewETJTKNB3np73wg",
  "key12": "516SjNFyrUhggm5icEWkPJyVMvQQdyvFzVeEbGLdASSydtM8rn7uACvVnu8vVTCdhB4zDzPrXV6RV9amyU2qWf6v",
  "key13": "5WUFiwrQMiViKXUsS68AjTVUytCGodpX5pGe119s6VMs1JMYnLhmDY9bqNXBxpCfG8ZGv4GmzNPW48NvgXLN7XjX",
  "key14": "51KN9Vap358B9q4jnqthgeRsCSrxgbomo6dPJNc5GiYaX4oLWA9Sc5Z5jMcp2j5Ti7H586GZTbVcDn4WAJjaVF1b",
  "key15": "2wzXYwNPqLNjmFabDKTAuLyCbZaQbsBoBYadq6ay2WnpheEcp29U15iakeMcK3idDWNbpjwxocME7xB3bHCoKkuA",
  "key16": "4v7umX3McK92HNtLVJpvG9jE9o2ztG8rGYUWEBTNWozDug6ztL2TcG7y9VMkrYuHH5yWhJjs91S43ckJBwfManea",
  "key17": "5P92SRPTazdUJVn6G6mS7NFmYGZ2Rqzmc74Ju7eKfsUZePDEoP1pjM7aR7qmC7FH2cP77y1xbBqyVB99nb5meFbZ",
  "key18": "QLNkaNxyfA1NeX6G9DXZWmWd8LurHTMrpiYY9uSvosCgZuDWGgYStHuWUr9rGN3XUryNTJDjkPxHhLFwaZtHkJo",
  "key19": "2dqz3WR6M1kaiV25EUADD1TQsKbkhxkEE3jBTc7oazyMkvDTk3JyPkRoH3B9fWKu44gPhd5o6EDEaGiUjzgaNtiP",
  "key20": "wTAugPu2BrzAfcfDFZK5jffcUNug4foWgDmgrP9WovvFWuv97NqJDn1T4sW5NxkM3A1q5CVsm52B2fqifGBoBg2",
  "key21": "shuc6azc3KkKhi7Kba2JYNXMFBv3fbffakvg2QzqgQ77dMT5GUG4Zbj1jhNHJFzJsrJnp17YFYbGJ2LjNfHCJdn",
  "key22": "5ubCKYro4dByVy1mR4WjyLqRVHPb76bd7G9vyZupiKogS8c7EpjSavBqTFWjXKtdABekFigR3AiXDJ9KTYYjEa5V",
  "key23": "38M6GEBRbt5cnH8FuZvGPrrYcXzup65kZygqaQTfEakXLJNvDHsPkqQBjVfWwSMDmzBE48XaotR2KVvoapq8T4fx",
  "key24": "qwNnTFjfHjPafFZeUpvuDJ65BWpWw1VQS5f8k3WsYJ3LPB2M1ZVVFrGQLf3ZRGmUajtUaJtPGprk2iN5HAAerQH",
  "key25": "5mfvYfGafY7gUk9HTfKWCa28k1Mg9FWgVujrw6LmqrvojJ3Kmx5wBXepMFbErtoL61PSpc6ucNUjqnnoR8RLNrKb",
  "key26": "4DhNSkCd2q2gRBMGLcrQkTuqgvQ48giMZpUo5dLTo9EyZobqnHnW2DwfmBjDxsmRow6Btd3gZjzdqzAH356MunPF",
  "key27": "5uiaWB17JQ8Y9sQmqabjk8hEmUMeveXMpmLpZ7pqofn1ooVmfZXpGN9rFimqctAPhsyp4JT6hbkp9Kt7nMzrZyn3",
  "key28": "5WrTmsA6JoKvp28FRr62CABuG9WDCDphXxAmeyjjKa4LfpdjMHu9K9LwF3oZPDEhZSFd1nLcf7RdiKEdBwXqLXYi"
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
