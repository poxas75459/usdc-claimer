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
    "4kPoWRvrECeaJSwssnjnbuSHQ7CecqJ9JVeAjMxJDyrbGi15SAGiP22yAwXDoZHpofru71WUcZJHJqb78MXSZeyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ViwxiSFC9RRkNJr1PPxKAW9CaQK9gqq2mqjqXw1XXzqq3S3vtCyJzT4Q4ymWWHbimXr37GxCLZp2WKtyyftzEAz",
  "key1": "4yYe2g6dvCM2x1Dfbeqm4zdKuT58mX9gYFBvWDg99H5UzT86qGkGaQhwLikSdoe22hMxWjuktxUz3MBwd5tdkHaL",
  "key2": "4DqcTt9TRweRbVqkG2bJBk42qxxEpN8qF7Xt6W3Vz514dncpmYdbkdTZUPZ4zHus5hKZZxKLfFyRiMye2opx21ta",
  "key3": "32szpbUCBYTi4qMSKVcVjjFTjGNcBpEGfDcPHc585tqm3P1KhSqSaKLcHDLXH51F1uaxT7MhuaWDVq3iszA47Xau",
  "key4": "3LoxJh1kPJeUjoi7NhjXf4uNFScay8BbBt6mao47C2ycqoxYU5t4KP24nA84uzfMyqE8cm51wx112zbMUUEGNwg",
  "key5": "3iUKnbPQRuDTEBXXrzbMLfctKuPZV9dr8XWRPxZN6G2WAAGrG9hqtwZfz4qLQSjbUDSmGYPM3hsQBy9XEuiaPn5x",
  "key6": "5mpSvQoZoxkbaVXMAEnFuLXGAYusBtA4M7rmnYiLJzewF7xce1xPRG3J4jzupxYDks2r61bvXkHGy5tqiGFamdPZ",
  "key7": "4pZX5fS5b9QHDhm44XJ4BmBZMXGcgD2BFi2fPYLLKoFfwvPHLduwzSrXK88fFc23JdNJY1pgknQcURcd92ncegaK",
  "key8": "4ZDtuvsYsbfLePYNqZsQraShKQXB3qcWFpWBybAoFH63EGEKtf7mec2fuq75Q2nCqcYqtrPtTYMcvqVxW4sbVvut",
  "key9": "4cw56s19MFxqaVoHwt6AwPQZAv1m2pG2AxJvPT7tmzaFAUxevtnjRaeDQV2jpD4eaEPtvW5tMTiGspCMosiFdTyT",
  "key10": "FFbDzfxesR58yLT88wqwB4NFTngpLU5XaXs47aSeNMnLeZmo8xFAXMmmpLD2iZomCZWE3Lht7cqQQ8Lqx9xdoNk",
  "key11": "62Fogbr6oBfzHQWzG5jyzGCnWFWhZhsDeAgEp1piYBQw6WVKUJrkJZKPC3kKW7WKCvDNCDpRmcnu7CZFZLRJin7N",
  "key12": "58w9bhd3TPJkKBG1Jzn4MSq4rg3Bqtc4rkjwbQueDUvXJp58To5RCsCSqa4pXYxq33ZtZhGgh7QnA3G1EtgjF4V5",
  "key13": "4FreXTkXaA61QHse5xXoUKsf1ZvhErAQSTorFNeoVbW1n8E1BRyW16PxuN6DJRAGxfzudwDHc9omNXkswK7wRXHM",
  "key14": "5r4PGmZRHYQftXKw4Lz7fop9EprHem3SRjqMWwZyN1ofwYXa3xBnpEYmBM1b1C1HRqt1Wy7mXZmxumUFYyrbfyco",
  "key15": "4HkGgr7tHNt32ojbZJwkzGwRxAWahcqADz7i7YWeJXFVwajeBg3bvH53WDsbfqhNWRGKvifidQoeiznvU5SnfiKo",
  "key16": "2k6TCfetbknciqMU5eohFPhG73xmB2EGzGUSgixhBGBWMrvrFKBjQuttVVdGwrumwN3fjB36Zfckr8S2nxNTrXh8",
  "key17": "2wuxmGzQ6GCjLEQc8ENLfE7GYZN4XgFij7Hf9sjyKgzeetqXzRWnJzFsxHxryfgxqy3n64iJBco9mmDhzei8VQ4c",
  "key18": "4V4FGz4aEjGjzjAgVGGsqjSCYszVEuNJg3ncdrKhuh5t9qBxyLpg8T9327rpss8hsGX28Ai69kPh7G3eJfNNpXvr",
  "key19": "QaShYCgp6Wb7WEbiLDtc25JY2tyz1fsvrce6E4YMc9FXjX6GKsMds32rgdfDVVHCf9Wxq5oo33Qgi8cizuyUUMC",
  "key20": "3F7vPWVkdGsDKp8VaKP3vziXVMMMoUeZjPv68ef92iAmL3Gyo3wqRU8i7AoFmFQaqT3zL8unneckRmdXxHoiMoh4",
  "key21": "4UpbZEhfFBwVW66Gye4CND69brM2g83J5JBcgDRs4PcShnbYboAEEL8oZeH7FnEqgLRHA4eg9gVAJoxMrE2G8SCV",
  "key22": "3QeJzbaAPDx6YNSh4kLEZuujnse9o3R7iqDmZ1eKwFfpYVRt2h9d6XTTKPcPZFodXUQbFBacZitNzVj2ACmk9NNZ",
  "key23": "3faQ9wnRJ2zB7mw2qWetHx2QRDFUoLH2MJeNDvcpfmhKdaMuC2xU1PYZ33Ym5PpUb1KST6Aeef2PjqeYhRJGf4x2",
  "key24": "QqtUkiVMaVWUkFEfDa614StDaRFjMK7z6n3mNnrkBWtmNd1i4H9shQAGtQ3y91jK4Ytmxj95L3E9e78DnHMuo1C",
  "key25": "7y6FYPJRfpZC9Gu7sPc8QVRPoBvCXCL6VYnuacpVb9fAP4ptQhMVmVUG1EDYxDYkK8eA3gu2ukPSmXi5BR5FpdL",
  "key26": "kuKpoWVYU1BF4jvvHuFHyBHtpp5epNCvJWBSvpbJFDaA7XdNU1d6xFbsKnFsv6WGCHmaRZmZamHEX9HXJa5uxUk",
  "key27": "3SQ6Pf4RVrvMb9ikftwQXUix8QJeDy2LTq6YxNdoZe5cqcuPH4VjyJiYjTkKMwKrSVQ6aKjz75hxzi9h85xne8ai",
  "key28": "2hYUQJrEvRhfFFuenife9KoD4BjuHsFwcbujq7BUEzoLaaM16ZetasJ3NkLMynppN2gryTPpoAVTqrHZ4NP3QeH1",
  "key29": "5NMpYDDssSCGExqbpeHtZXPnbFuiu4e9LoegBtWpVqeCKq17YxQymSxJ72uoq8o7HazTowyGZbaoGTWWNiyHgY29",
  "key30": "2KKEvvRRqEiAE6Dpr9wois2yDCatHoqviWkv3fUraNBqFikShFbCv4bCShe6UPRiyhuhi2FuSFc2v4huNerCg976",
  "key31": "41gHt39vdB9Qdgfz8kiH2AUjYqsBMRdGTNKJE1GgWaHxoMMdDRNJXeyqf3tPGs5btPcchHU66YzdqV49FAu8xCFA",
  "key32": "3xaixMr88eeefjJseewzHrPxfZdafqMGZ1kNnjzyuEPXi7XWvemEWuCZCTUxwbAT5LWfTSQpzxyXB18Ff4SQLVCF",
  "key33": "5iMXa48SVEjrSZwqySYmGaC4ew9DbsVGMkmuU5Z2U24mzVs8vUm6jFgpiNhPkpJCbTbtAyb8rGaYoA6kZAgu6nKU",
  "key34": "4Rx4wYuVY4bEqNod2upiDtyA93SRJRD6vsAFSkraGdRGpGn8UgZYz9pLeeq8KjSNdXqytcFPotN5teCQqBSNYvXp",
  "key35": "2XPAMVqMJMKgJiUWVxYetC4mq6jXJ7mXMxadbgAZty12gbYE1pY68rVwKkfc1RF4GdtQ2JYHYS1tsxdQSxPXutk8",
  "key36": "4ucU3HC2zLU8NsSGFk4nFm7coD5PUswYpc47p3dg5YJ7DZrqhDzH9fu8YyBQ87RegshDgdyd1DL2pTHtRAmSSPia",
  "key37": "3cXgdp2A1eo2so7Vj15wAkdkGSZB9UBHmqMzMYRMy2Q7tXxNAZeecgxLCgp3BvYFRoVkvyR6gX1huH3K9vDTXZiX",
  "key38": "245SUNB2SMr1UB5CMbkZroRuLuEQNzvP39cyxTL9rs12Z2hbiYhQCiXG6wCBMShZb4a7Mrg1YvzD19LLmw3AVEJT",
  "key39": "3DJFRoSbkYYhKSmWL7p3Ce7FJDjVoSbGbV71Y1nNmU6V3ijbSXVHkGgGgW9ZHxMk6uFUNrSPgQ5PpKVQGwmHNztR",
  "key40": "s7mznf2hqSFS4R5S6z3AfUX41jtnj9iz8nhLEMwQQfdLh2cbpvg6KeXNE68s5ZJ5iXUS6ZPBS5BSb5VVhUZxpDv",
  "key41": "65znSGCWRMiU898kcWkQzNKtrWp8ad5iA25NYKecLG3w69mwYbJxEZEybAtp9gSQqUi548JcVqDUooHUKecaUZmQ",
  "key42": "34LCocRoNShQWs2rJceTUCQxRXdHkRAKZt4JABtww2T7RzBa2ctedsiLtLE3GncDRFwd92kCoRHkUysbEu3neoke"
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
