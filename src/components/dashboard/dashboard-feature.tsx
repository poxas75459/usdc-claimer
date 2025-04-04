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
    "2KK4iFBa2vxpVP2ed5JfmDt4Gyfz9smrnwX9sCtAnPAR9JSkzh1azkm3rFnymAAUZd6gNH6YJVX9rxrsuXriDCYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mjQrHugHZd9FS3zw1GJX42RoEbop8aZWgBNqsDDfFVcS28TEcZCxKLiGzQiVvXEUJ3UBdVAidQirC6YkA7tPW91",
  "key1": "2Q5PFyp56pMRJTAcF44qrTe7whXcrJoBsbQ2JXUbwaAdLS1wwY172BdNQLAuL3ZVhMUTVtYBdP2K2jMrPmv3orsx",
  "key2": "4XTNZQNyBcRdbBWMV3RkSa6yh77gwnB4vnFdPZuEk1u2m3w6j8MqgC6HKWKiAdrLYRqGpKkChJLP2Gguv7yhuRkV",
  "key3": "hZEqUb2CKdUerGzswXQ7Xnn6vKwgANCAimYjucJE2UPqNzW9UF1NNnjSeQrRWxAk3EoXVR83zSHjDkrb2Lna4jB",
  "key4": "5jNSmd43u3jb1mpFSNsL1ETd8sK4Eo8kkkqiJUCg7mMKAr7cWW9BJwsxgjMUFf1Ve9t25YvxGa6myFyEsiNr2Gsh",
  "key5": "349FBTH9Ssx9UVc4GrxwhVp9C9yhtBRhGwdMurPoFwDYdfMoKhTaQTJ9EAdLWLogpb6rGviiJxze6NooTXsyJZGh",
  "key6": "rnEhTASZnrq8oG6tGFYxuDZhSp4deFvELHDQAKAoeqvRD1Q6W6DEgwDkhuWNJSyqneaxaymcGZiyz5CsLWTdPvH",
  "key7": "2fCMkk9JqnZcszUxNkfScJeSNNPxvhbeivJqGojpMUXfZTBVug6zawZwSvySmvYSp2eW6yqCrnDBYQjRaJju94kw",
  "key8": "3HLRphXaVYzmBKQ7m3Sf9ogRxRbP18K4k8kSXsX6pcEB75xuNScB1hsBThJkuJng3CBSjHRMFr4DRyiWqXCdoktK",
  "key9": "3CkahozrGZEvRpUpwvQmSey4p789wTHeXpxCDqWojaD66f1UgxxScNyr66bkL6WeDHUEZZWDWYpUXaxm5druDL9g",
  "key10": "5j8kCGahE6pgcpCfbpiihveGHsyQBkjfsbr1tignWe84Cpj2DKgyaBsKaJXC89yVyWezaSxuVD4oPNykRvctuLjF",
  "key11": "4uDV6QFi8CxviT6FLFCLzZYxtuwhz1fRcYroKQN7GLaWQdqY4MQ3GRwGTBAutymVK8wUBPHv7yqAiCj8YUsckrTp",
  "key12": "2gPmBmPoW6yzvRnSK2deVTZ7bboxGqEJUFV7kaUkpYiW3tyGN6f9kQBAdxohyNMeuxSNZKYc83N2Qz36BbYLfAoH",
  "key13": "Mx8qseE1jMJsAzsTzjvTH2gy8HoyqTupZ2w5e59o4kXbWHzsibGg4bpqTmaZKCt9kAgMSM1iHWoAuHvmuhjw1db",
  "key14": "5VP1DjVz24mMuvALi95VHsPqXkhcNyJygWEa9pX9QUnTyXoL49PA69KjnqePGbdvpeCcYU8fGLQJTcxyGipuzbBE",
  "key15": "5QJCTgjjxyRxBeFNvFsW3CL4oEyNtqtgzdLGr5fSae2vDCpTxTVt4xHY54YJitcEL2GSBnxx6Yrsswz48sNsZ2jN",
  "key16": "9xTpwk46p3oKSv3usorTgWbCz34fqJtM8zLMkEWWed97YtfwNji5YQkZbm1Af8kSPxnMaghRpnToLWMWkeubUUg",
  "key17": "iLv3gsDbipvFFXBmbybMNz6pRWfUuqMvG2DSwNJG4eW5Yc2zqSZpVmBGGffTWPygrKzbZsw2UKPvLoubpHgpGyG",
  "key18": "5vGtvMMYbipxe2NayYkDRU2sfiuj6brN5WYxkrJBDKEyR32KdhaYquDeCTJ5tAFFXT8LaAxLr5kX54xirYKQaoPs",
  "key19": "3zL686sVFFcXJxYmJtmAWQNMbb5KHPR9SfFcRbhvLq4GLeEyhYdKmBcJConMHvaRfVz7RbLjsSjW6CM2kbu1XwH9",
  "key20": "4x3MVgASktZxU6A3mfVE77DjoXsRw63SQEGNxRjquTzfjhuysNJqW9yeHkE82WaGG9bLXNvh2L2MPYgq8s3vQK1r",
  "key21": "pKbfLzRUHPqrhVfD1mn1khkZDbEPVTZfSG63KAsqk1Fr46ZBtL3p2Ycy7x8BnWSEJhrhACnTFg7chAuAQRdFeDF",
  "key22": "42BEKzqLSfPT6gQbsFfL3pwy3FXozTN8DkQPU4pSMKavAAWV6Hp1GV95piG1w6LZPGkixSJSYg8ExAZmvjKzci1G",
  "key23": "VMRMUzqgSH2p6S2jXCFqpxbr9DurR2swxUxC3ZKbbXEi9UzcQAKqfghqgHDF7mtJpDvesNhaGTN2f3xeqybTSjn",
  "key24": "2qEKPSUy9SYS7GLxgKmt2jMKVECGFVv1NnhqJUpZWzvN8Pw3iPD57RRc4fvTh9ZDoZKwYpfiaTMmNWXQ6YRfgzr8",
  "key25": "3otDo7yAM9Tw2sUyx3Ja97DmwxkHSSx7iRQxSrAgkpF97ewkzjmZ2RgLYvi9t13GcZ9PEFPS5vebkPDNSqQTkybN",
  "key26": "5otStN5BVV4E4Xi7D1GLBjHTYDzQZSjFYEK5GPyNpsnX1PCTsKJDkpybQvk8GX1MBem6DWmjHUQSuaQrJBZN4rWV",
  "key27": "4koHFFuL2nsdkWzVkxqgFQ1xbBeVeorLpDpTwy6g9CNgq1zVtjPDM4XXaofkXfaX1xVAZB6dNfWvxVmFeh9xrrDG",
  "key28": "4kBziWCfo73LN4ac7s6ou2h5nHbFcyVMZp4bPhxD9EDBZJdhXG9ZVjM892iuB3K4LTndSba8YNquRwro1D9hVfc7",
  "key29": "4579nqhKHevdmobMsPeRztGUvHWq3GKDx3ZakPY348KTXDUrFJ9doFKGZrKc8VMS5T1Y63Uszvmh5x91wZDZ3PKK",
  "key30": "4DdeX7cjzw3fn2cknkMSGvVcwx3rUvYyvDWBAadUdsgcDr1yux8JBzgUkhxbo3XGLzagf1MBTZ7DB13ZiyTgnMAu",
  "key31": "5rLKWnj61YVUf6xbdckzJi5ZdVjDjdzWTXY4zvQYjVx586TfZA88PjbNFidWLaXS8wEfoji35nXnGFa7bY2JnqyU",
  "key32": "3zCopGSD8SXqtNrivrDtA9tLJctmtLvj2YMtEF2MwuDjeYtqoNAF9365DYp85TJjfyXpBbgJTfEtRNwSRvnL9c8T",
  "key33": "3TAYRegqFXjSuGiVSbTjiWNzbbb6conweb2Zi5xm1brtspgSWVprXVdfGZ9MH43iDUH51CAj3fJEUuUL9B5zq9di",
  "key34": "zBiakzi6CeTPigk8iu14k6zve44EEMy7ELoDrt5rL2kZkuu6V6b5EjQDB5AmsGBA1XMKQywGYcFGdJpA1AVkf2e",
  "key35": "3FYyMSR3EPJHkGug8zqzhVxM8nzMtfhsF1UXqToevrfzcjihRBPEv5nzeHiVPntd8eyz2VzttXYC46CjnhaZGBDw",
  "key36": "5F18rkyGDdpwT5A4pwtmU3K2Udn4SZEpN9ov2n7bg7CmpEYSeieHmMaLipgXfmqr8re9UzWJ9osA5Nuu2JPMErjN",
  "key37": "42hpogGTx9kcPedcPpyc6ZYH4HKzbSt9EcUDULNc7fjJ46idTz21HYFkH65FgqP14zgsd4B9KJvfgW5AXRgsew5b",
  "key38": "2vzw3XmxqpTRAYRNVyzmuYHapyQZFGgxujaPa15cuwNo3CEY7fdVgLsMmk4jxc4aAYibYH9grRBV7G3xVYTa3pHj",
  "key39": "4rH9HUN8Py2pKmfsiNs6QtpF4jdbdSMAuwgJVwLPX5N4R6rrA2uNJMedqJnj4x9eiJbRRRkLKFdRSSiFrUPKi3Ur",
  "key40": "cNVrhkjwVL4MT6zYrMrjGH7mEQUwfLk4kZdNvFcjAUfzWkh5ZsPf97KiyAS5ndk4iCXAQ26Ms4qYKVWb6r79kKQ",
  "key41": "5jsUW3qDK4b7E9c7hEn4ojv56tYodstcyr3nTnXFpB4S7gpXyUxBoJzRHSQGi6L9imasebhSjEZu9J81StwVQncw"
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
