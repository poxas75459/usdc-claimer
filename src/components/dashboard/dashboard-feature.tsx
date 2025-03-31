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
    "129yhAKkRaTQsU2iHYVWk4yNx3LoHXvpe2br1qJBWfCg1BUJmGrgmEyUUjRj3WkzmVHaQ7gZY35mAEhuQCwEYUL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LRmYhJ8SrrPWGoG7sX1ePD11o9VzLCWHSvSPYBVj3R8Vt7c3No9YFAMMRKmgh85BkA9CBfLhpSZchhLW8AeX2iv",
  "key1": "2q5vedbzKrp5pMkEDR6pRxwPi4C7coSb4bhCuZnKNim6X4TxmxdYamjy1F3WH5u7S1cUxxcKZ1vDqBpTjKYgc3p7",
  "key2": "3RHM4FbXXXcXYrKgWyVoTpMYeWhtU7vSNshoX8opRBkJWGYW259PwX9MNiqWxvN8V1Qh2RJPi6wozCg5EJocstTa",
  "key3": "52hLHCTuCqAyGu9Qhhznrtd1eYYLJtNTyF8acaHaJR5ZEVnfRYB9wy7syu8CxgErRhbU8V4EaqmbeBCb8pdVdE2W",
  "key4": "2gcF5qgThunkFq1HrCwbcwwtXRnkGf2G98HDEFVjd1ejQMQGoPBxqAYDZ3zvFrUC3WVu7wPKAvLRQ2rdgMRcdQrk",
  "key5": "4qerxYdN3NJSQzuKnEd9V4U661vhUChvJUvKVRCq1SrWaNbZeXeQy9HpfSooHvFX2RNqoMoft9sHrUCDEQFmjsX8",
  "key6": "qHUTWHXJRKBHDCqm5uXv9Mj6LkSU8eoFvjtRj5xbVqVFB4kcoJmj4BKWCzNSWmJyoWLUYytvyuLHqFTcXnsdAGm",
  "key7": "3Z46HWM9DWZFXrCFnp88DN49s3vFZb2vbEw67eVoamUmUKXoczxAgZr6xqETjbso16kvdzbEbmbyGYWLETzYfBg4",
  "key8": "2LCT6XEHyYNWBRj5YgNuut8t4Hac6pWsg4UvRGfDCRFsR3Qaiao7imZ3drNf5UWgXNx8MhaX3nDBQ8jwLTdQxsj2",
  "key9": "4PFFQVfTnoT67xP8GJd8vUkjvRny6uxGv4Y5fSmBi7R8E9VNLhuHX61zukTAL1nzWLimFcqf8s3iR5DKL8zFX6yE",
  "key10": "h3bydAddQzvQx7zVwKn1XFpbCd6YvuYr8CvU6GWopyiM5cDGyc9emS7WkfRYKsGaUiMp1Faj4B2WB4HpfDUzeN8",
  "key11": "4Kw4xfu5SeSvf4agFGAjeiJqnbjk3yZJs1MPfgvkUpfNBjLpEdoSBBsptFFibX4ujUMwjrvH3h1d4Jde38jvjf4p",
  "key12": "55DUfcrVK55yosPYTJDfWXXrdmrz4QqeGPdUb35m4xgUHTmrKHzgBtcRPNDZ8hFek3jd1SomSr6KsnGemy4qVHGB",
  "key13": "31KVEnwQWHcr4MBLJ9bE1y9UGNETMwzWfwzNmEicdQAMPnw27RSfydVcVKJ7w3qkqWm6cNebHAaUUGW7HkJrbukM",
  "key14": "5fSwAbyRm3rXAXWRaDWd3cNkm1rKqsR1PaRe7rrw732xGrha3PvA6X7eJfpvLYsuWAxyNVybvk743XnM84jL3Bpj",
  "key15": "2UhBGrzzfhMWVH3YiPQd8EM6EWwFfXjQbtazU7SNabrRJWcV9ghw6YfZvdc7Ej93yc2DL6rXxnjmTSDasgRLKVMM",
  "key16": "4mikpVhAwYdXfRkM1UYYtMQWn6im3Yocv54zWpPpwmogX5xs1yhMHHTh4LP8NCso3d8p9gRjq3NLKoqSa75RFUDB",
  "key17": "5DntCLGkLv6nWTPguRRLdiYPf9AS77T3u8mCoawKR2p8HUkhrG1WU5pCHJeBBc3ioskTfdfm2xiYuJQQD1jw4kfk",
  "key18": "4xLLp4rAMmkryUoPANH8wMTg37SARHeXh9U7ZJDPwhLUkDuEeaR1aVHDLB9Ybrg291Wn2ms2G1zZhKJ3ieQL2gYC",
  "key19": "5Vjo3Gdtxeb9PaiW4EHLjVkjhtGf61GvhFC1zdmUbBcJKWuMDpY1fpR5nsAFMpHmcfGbcnpEvGZPrLefhXmzQq6g",
  "key20": "5Sdjr3k4rv7jmUm4Fm2Xm1GZpZYeaK3V7o8Uho9wZC73nCv6Q4VGR4T1LQge2QWL4mAreL2LE8a3rnnd4JLZzNYk",
  "key21": "3p9k89qpdfXYdJnK3Ni22MjUmha8mFexf9J5k8yz3ESNPRk77Fpw41NEFr97pT79hWPqhSQ9Lxu5KYmKB5RBiADd",
  "key22": "63AdpKbauKaWh2eoaDkWudnDbmkpGkVZBmvRBdeeCaE35RXZzcZShpaTNybiy4ezxGvjAe9Yh8FfcmFj8z39NxWH",
  "key23": "5hkn9xKU1AFBndq8VLZWNqaaA1ZWP2dVYruF8GSPTJJNeanAvVwVcu51EH4tcmPar2F6ZZMCzwxbrUfLTU9t22ef",
  "key24": "3eG16FRogSKRNtokguz7hz2ryukvAgZZ4rnaH9wdv2Y6HLmXXwXXLSwiXFsQX9ozCx1x5ZywBuvKnLot3G52Xyei",
  "key25": "W3JcQrxfxcish3W6cR6uugbvNkmEwfrze9W1C83sdcJaL9tDuNDg5b8UUpwPutXEgyx2bWuhfMHVYX7TbVoaGQ9",
  "key26": "33f6DrsPnsYrN3MyRbCTqVgpHMRVWeRo6aYs6DDL8BJtKK4Erjpro67Uk2uFTR9oj5B8WTf63Zvt1yLJB35ueUK3",
  "key27": "XCKwFqqLqNFWSEK21AX1Bbf1r34YDdG4svDZ9Reqf2VWWCK5PGQ2zbY9i8JtC1aMBRCwDP7R38L5GBvjRXEC8br",
  "key28": "3fqw1bwP35P6Ssup8Luadwjf7R2QC9ftZBwSAGbyyoCZWjU5juVB3S4DkJHnAwdhLSd9DH4YHwnVsKXWCXAKcTiU",
  "key29": "52sjZb8evmBZoPDVrhrssvWnAjjo6K51F7aXLd8MKbC3W37unMwx9hDheiEXLKKLFCuQy4Pjyo8iCBUo3HkH17fp",
  "key30": "3BHWdmiPccvZYs8unJPapXBwVhftbFoD2yUouByuSkQFGUq6kQc2KdPbarEvYPCDVcbUVxuMnLNYqztaeZnWcgQk",
  "key31": "4EpTDQBGb4uzdCHGiR7Gzhc1kXfAoMKNXDvnUEy7gexzWApRRwQZ8c3akkCm459d7nTDQASybUHbXxesgVXLjcJt",
  "key32": "2H2YaaFVwr28zynoySJ2E4UNtzrr8WtQ1QNEezceSWEiNhhA6b8WW9KmAAeFMLshpkJwYWbpJQ2ivj8ckQGRgaaJ",
  "key33": "2pWMccBKb9y1p8EbbcyLDTJEC9LhdTABHvocXiwrJSAxXTWkYDdrs4Hq7k1M2rwf4kywrMybJYBrQDijcaPyJvaj",
  "key34": "5TFtub8MGprQ4LjRPAx1W8vFdu3RGUN8z6JiPJ3LSYtnrmZMp1a1TW3hytRnqa8BCQbKwVfqNwu2xY5xVUw2fu9P",
  "key35": "5pqZScp4HD3V8XZ5eE9ypthk8wsAXME7v6wUWfKeBVrKA4MLK43Fnvpa23nXiH1JE5tHZuKzuLsaAjYCYbZ4wnDw",
  "key36": "22UWSScqYq5gDzD85JzpQL8BEpA9h2ku7QsiJihmu5cBzEbfWdt3H8S8pJPgyqPgNuFRb9SRr37rQqUrTsvCTkSt",
  "key37": "43vwmeru8xY6jC87y6SfYQvAAgEHA2y1vF8rx6DZDfsRLEzEAHPuGJFbA62Bio9JRGUZ7rUXLreQkyn3ity5WyUQ",
  "key38": "2ZwC5uW9LEab873uCPBrE8afGPWdNHRb5oDSMAYhSDTGbd5T9rbKWpNKxZ8YMvJvoXAnJir5ekzdhyzAmtrCErWP",
  "key39": "35u1uhTtAVtuWbQfG1Y4xSGiWv7dtiQovAo8SW5NjJ1g9ZUfVar453GJSA3g48B49DX3yfVGavwyQXJBLinYRXP",
  "key40": "fR91JyqQGbtWyjheRKYbz5JJhJuwAunYDQ7SAxJBKTPVmbP5ERhoZ1WHcPptHzRi7MgWg7cJ52ArHmjvmLZQcfy",
  "key41": "3iVNW8i78wV3kns1jn8nE2h8miodED6rxG3AaPfaUgJCq1neXhxM7XwTEHaMbT1aeNyhYW5BdEzS5MdB81N2a6xz"
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
