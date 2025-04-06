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
    "5npwBrANhaUqAUWbMMz4fMjNUtNwD8ZCZiCDUkNBUEs7k6tibQRDtn3EX1ZNm313tZezkH68hA2kbDJM56y4GiUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hHTcD4PXugRv12KhCrrGbRtdck3CxZrvg8K7iEeNpKbYay5LpEopRQaZ6ej9Ru1NF9HwBJG9UPrjjsqmnvWjvKV",
  "key1": "5s3CjKR4jc83T4z6LLWdyK9aRkgpyyTFqiZnK6fxQVXScLGKSjNnAoEY6L4mi6ChVLWaQFHtJEnYKYvVsJY8KaCQ",
  "key2": "5KpDyL3ixTfGqJyfDmHgzimdwA9ZjVBM4HtCP4dc7Jc711KZs8W4f2K7cwPME1S6Myk7BBvAsfK7xQFswF2aZyjY",
  "key3": "4LxBDAuJtxfNtFNg2BGFaZhpHtDHjTfi2sLWLfeyhBXP6amLvwPxcjeVF6eveFG5x2NBSvga9LH9N6q7qCK3WFzY",
  "key4": "4ABM1f3U71eZvE6UXmygijBofkDE2ebqfiY319C9H5GTgsmXomZLp42UVeVx2p5CQ3kbT9uKMdVtkbFBS2qYWDuh",
  "key5": "Tmkmc6muDaLNK2e4zUQ53nTTHTUbtaJQSQo22PujG6gv9hdefuheJT2oDLUoiXi2uU12CNTvxWfbf2wTp4ivb8n",
  "key6": "62sfkygBH49e28b2avBdSseh17KwWQRcyv8UosWYvPs2yFX6gDx3qFcmxURJdSpqeMVfHCLBrrmh1y58f1qscHV9",
  "key7": "41L6mJYiMPJHPbZa9mbYtV8AJHrztBGQEH52HkujZRHQ4dnNN7wDZeghyooQa7hHqyXAp6xKk91feWcsMDyDGcUP",
  "key8": "644dTzdLJyViXm1dnBPgYdVMnXrEbocCcALtHaYRdK8pcznbrrJYM5sKGHPdU4YGJqSdTavkSv7pHejELuaCX77h",
  "key9": "5QEHM23X8wJzcrHszkRc866XvgGxKzLFxBnbq7htDd9ap5xsrgQLkPexyQXGLRLr1XpNco3VEY94NAFacRomdrUH",
  "key10": "2BUBcHVm5TXfLV2K1kFKc6o3wrtdDJMZMZH1LpkgXdS943KaqPdndrjb15C8uA5pkQUX76aqjHvNT6KteyJ12KU5",
  "key11": "5FA3rUGi8m1YUuJQC6W8RvRzMUYMYTM9h5yHrdk9iGpfc5TmnQSMZ4YUfJTXRC1xqGGk5JgnDTUxU6aQek7shbFR",
  "key12": "3zZAxki3VFJEo6VwGC9UpiLHnJXWoEtTscriT27wTHBH4tHkhyX37xEzptrdAe2bFKhAbrBoQgRq1YYqgTurAt22",
  "key13": "5GKNnRsTbEk51hVtwwwYcS4EV2RP1xQvhK3q49NmMaM28vrrwt13jGFQQ8rKdt27BMPmNdZPPiqpMsDSca9b8SVQ",
  "key14": "2QPY3D7gmvzVXnUgsCxBgne8Z4x1HDQKRZcTBVbqcJwzMBCWcfeHK2nG1GfZcnkqGz42qa2YLgndTiYxwgBuoA9N",
  "key15": "4at8VWSxMDpwBWgPkTu4cncp1bsakFf6pKQHSic57irxNAVR3FEsWzUk6BwSUwqehmSmAFxoZt9rxf4CqWy8eR1p",
  "key16": "249hVBJqJzZfMRdMX4BBwPVwAdb2NE7QAsN1aJp1yuhidDbQ4tfyE9k7ivBGhCa7VVu3HnF26dm4oGAQXGm2kkDi",
  "key17": "5kkp1GEQ5dQCvb5PJRWMg4rxyYB1MYrXCZdUeeUnHKgPaip1X3cHWysnb32TtMQEV8Fapfh1SA4XF6yjh4FKptjV",
  "key18": "3kzwV5FhSo8W9UwXoP19wdJbEaQRd7cwizbKt3iZvtRfNFwBRLWtZ5LZU6JZVBz6n4acfiPmM3cpU1dvqo8MqTby",
  "key19": "po85jvBg14treRFnCRyASKDAnyJX58gBvQQwVZvEEBoZL2UGCYuVRYgabTjSmbG3SHfC7rBuNvAV7DzYQgqgRAG",
  "key20": "4iMCGS7nXrVnLmJbctgtNFdRdcBNyP2GzD3ck1nufjpU1uPMi4yauuw1n92p69znYTa4rKGMjVogDJtD4JWn5kVe",
  "key21": "2rhx5ZdvstShfnYKimy12zuXU2JguomU5YCo5Ti71VeJsJFFo4Vhi2A3P6RdCa7No7W3kqzjJ7ZnosBKZnVTaBvX",
  "key22": "NGHVE5VERWR1qwWePZtTUYWWWSUc9Av1Mdnn8d9xuHyu6vMkau6D6B4tsXdXz4otXaTGphv1fYYAq4HWnWxbnsy",
  "key23": "4WmhfUEMt8Zez2SzC4RgXo1shDRpWahtr2gG1DkLrkwgpiMXau2cL1UKzVNFKGE8KMS1fdXaqxMUBYw1peKyQduC",
  "key24": "ukHSuRpRsmDUji3rWjz6edXVTvTxKLFvG5temeBKe54zqv9BRWyjgGa8hjfMxVS4vp7BBEG22qbjqawTFTuA7Wt",
  "key25": "4gDznP9PeQs5caSVFqbBnuy5rSEATQhu59ZHMGgDw1YPyyan1rgzVqcdADALGYAjZ5uTGvVS7PBecwf2iAxKZQ31",
  "key26": "2NUdveVgRkDreLYWvzTmCbX47ArLRuon2a7HVs9z9nnpiAaZb9nE4napmpC3dNY2thCtjidgRzrd4UC1EgtYjcZJ",
  "key27": "4nXTJogqhETrJQmq2GdRNW1z2VnurYvaR6oYb1Tfzv7CeAvcaxXpf52TefwCPqaPxYnLgweXE7nL3eB23amoJGj5",
  "key28": "zP5SZSPdoc2VZZriuut7g53VCzWQp63YATN9Z8L1PopCJ5gDRje82uitgXNsoSjYgNtfXhrTwBUi8bYtgcmA2A4",
  "key29": "41oauQcfuHxynURf9VKG9wxQ83QC3Zpmz1PwgF4xqbiWws9ghPyTPHZvzqJkhhhUatgGnGEee1Ag1PhE7XJZdAGp",
  "key30": "2B4PziEFqKDsJHoz6KGzTN7LauLXPTY4RoTbhhQwWS2EyF1cWmR5jTK6MMBBGPfEBtfUZuf28CVpEVUzNCeXFUkp",
  "key31": "3EoXerXwAVocqKYtAaevoiYBSf9CDLio5Lo5TJxSr3G3XWeqEnnsnErDyrjcvuv8ZXXubZCjjW93QJpjVKuPo58W",
  "key32": "8s2M8oZagxQNpEz4nFLWT1JodUqz6m3SDgHfNWb7aE64appB2DSQUKcm3BqoF7fHdmS5h3TvyKX81fLLxyQjpq5",
  "key33": "3m3Tg8N4uoB8PatTjxE6gkrqoPnbD9PvRX2ZXTjiJPvr4jdaAehXwiSNP381zuXcSKeQ7G7jBtnVN3rdCUGbJkRC",
  "key34": "iQ7dus6DMDHPHXAbFJiC5srQj6CHLeykQpCJXvL4ZquuiuxQbcXN3JYtGsXovkqdVJAdtGibqiXVcAaZuY7qDHu",
  "key35": "23EgniR4QWubgK8WVrFxvw2JAkNA8LdbnnXj9BHgtFBJHNysjghcvgSXpFRNSFKQ1ZbNa3DS7fQjtzjjGDKWo69c",
  "key36": "Pbno7xHxqmHzmBbVtxdmxUepKUeFbcXwnRG6LPYbxhqaqrY1t4p3AfaW7KnjWFWSSfjLHZBuqpf1nYSSY1une9G",
  "key37": "5sRjuD3YQqAfaMZFnkExyHzKXH4M49BbxtEowfGkLgVJ87fPmjmh8SbRJP94aRWcx6TAMDmJJvRYDgai4oLenxFp",
  "key38": "2TKP3cXUNx9cCRzzjopYfQsVotzucKjs3cVN6Kro38bJfBWyz8ehYcaGkaEChsEg7YgnK78D9evgpR7tp5d2vtZj",
  "key39": "4S9JNfJQh1pkjZmeKRSPp3z1rpCyQ1gk1Ci6BZ7Y5XoX1ynUckA1ridYRgfi8m73hkR1824N6fYtokRvSPx7vYZB",
  "key40": "8TWM9phjjZMGPxaEqTVwwmE8ts4yzMBUDhNK5LePpTMKd48kyh4uZriVHUxNztoHLh9h66sBCwCdQ9CVPoVkWVT",
  "key41": "2hMabMMgh2F8yewHgbE38sbCxjuRgSBwwExBV7f3j5SWxqFhTgS9aZrXusRhn84WSpax5axyrR53yc433QiJr8a3"
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
