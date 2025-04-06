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
    "vCTRvWqVttpz8TtbxRkoPFC4zBJP8QuFc3Wf7nXgh8s2Nf6tQS3evhwYVVvbbEJ8JSr77vL9UVH1uTLe6z9XjCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QyUDFoJcEdYSBntk1QDF4JMoVymiLUEbLxKLKWq5MYn3tdAt5Fx7FSwjxKbScXdty8ww1Nb3pGgs8UnHQBYsibD",
  "key1": "ek8NiXhatGwQYdMx2qBv8Huawv3CCnodyg8HgsVpKnUdXQmipT8zpuBbsQgvwYRGDBHdA9DaH6kGvg3s2q8x29X",
  "key2": "4mqztjLX7Vxg5nQuDrRk9bZ1ZrscQRTtaeqAe8kcPJ7e97BxCDFyd3rsgcdKJKQMHjoTKjqzhu4F2n9thuYT14ox",
  "key3": "b9RBZxisZiYD8Nc9gtrUbEGWZbQczfW4S3mdCpmPritVvVQvtK9Lgxc6uh9RqXvw3ya3V8z4BnSiASGfS8LPEvx",
  "key4": "ULxdZebtKU3U6gFdSkUEuj5bsdAwHLGurKrGevELCVU56vUgbX5hRbyv8jUX3Gy7Sk4fAeYqnMzi31eQzutsKkT",
  "key5": "HiMewzTmPmf9U5z6XAHZ4D2Cu5sKnBPGWqh7nG5urvrFS7isXBKDY8Sq2EyEfWKzURqJH4g54FBkcuQ7STPnPAS",
  "key6": "3212uap2URgxGLZZdvkTzJsm4k78SRUqVC9BnxySNv6dRcmPxVn6XNVVALsBu9Bg2Zu4aPsk95KT75MegRuz5SA8",
  "key7": "3htPKFBLhxFh3qNZstD3x6BFe7zhdGcPU7TsBgAvnc1chMuJPp4cBF5KKhuYhFGKAa2jeJZPjh1qQtCZr8BjbAoR",
  "key8": "2z38Wzm16bky5oWjUTMvJzt3Bs6RzQ5V1XGbaGYBzD6WJ9NivJCBm8vRwSwiZd6eTsM9uS6x4VLcpyrd8o8ugm3e",
  "key9": "rwLWihXenWSqZKYudavzpmcgdHRxGJ84dcHxiEQNiWk4eVRstJw4S7bAspwQWyiDuhHycHoFMc3cjivzYLK7VQr",
  "key10": "2KRdnp7F9GqNJAvLzorZtxLKrrYVx17D4LuvgUpsNPJXn3Mt5t68w7eZhdxQGxFz18yRXTesog7HzcVAHSx6SXww",
  "key11": "3Q37XWAYosMLMDSQ5m5vRmuS5JhGRu5tU7PDH53YaXGjKbCPfZefsbsVDiFoY8kknBZP8yqPXmUvNVyBaiDNygZa",
  "key12": "38PxLCjbdxakMJRPG5qCj7Xpk3sEpmUPrBQbTRkxWo2uuErjfknspgEYbYmMwkNjpyTuDsACNJ2R9TG9HsEdg9Mq",
  "key13": "5cMKXwGXpUQ31ByBDac3kderLnf8TRZdx7h7BEWjLwHz6YSErpcuqsRLeG6fZoBsD6c6DfBbKJE8HcxXvX2b7wFj",
  "key14": "5A5hA8PxiTU8U3UVLcKRp1NJg7zRNc64p2j3mVSipGSqvonqshgQbTeyAKvsiEphrygAs4hagntKqvdAez39HeVa",
  "key15": "2pqTxz9FLEDugiazjB9xwj1ZjC6ALzhKyfCKV9vucqyp1oznxSu52C4Z2GcHwF3jBaHYYV4AoFJBKUPzcb46mmdr",
  "key16": "3gpxpSF7TtaSQLaxDEbWP3fGS6Lbkqr3c1jFjidqM2zzNUZAWLbYa4uFktF9yzo5YwxLg2RSAMy8Te62k9PMGprs",
  "key17": "4qSuenX9Y3XeAQPKZmyCxrTqsT8favfbnRgWM69eBkgL78JgQxkHBta9W4A2agRdzifJ3TC1yPGoak32U4ETeLng",
  "key18": "2mbbmrEjdaRMxR3819vtdN8eeAoV91j6Z1UPUVTavqPyqAUwqAjQh13mKPjRvn3w8ztaJsrLF3of1wmwxo3qVCAS",
  "key19": "4PwLyW3CQe36yfw7zUNVXyG1MfYVrPcEaECJH3aJcVg184PCzus7SmJUHpQVNeELNJHa6JM9ywWrAzHy5HTQkPKt",
  "key20": "464AfxW7Zdjox34wQ5SPSMmGEz3YvbQdDunBw6FrYhmqDzZ7FnEBW84aj1RcDBEW1qsKEic1ucetY6Envxxm3Zed",
  "key21": "bVGxX3HdvfV2o4eYLCNQbNVxAAXin7DnfCrs4P2eHuZmYZcNAheSP6BsUAyfgfPC6gypbB62o1a5Abo21Sm4u8p",
  "key22": "4zer6PJprtL5XkyUpJE3m5VDqoEXJtNwpterP7tVyNLHUnYT2JCGvATnHBKsSH4zDu9sPbXy9AvhSbS6zPPgWhJH",
  "key23": "3SD6MYhphNHTNabgYpZp553cZjqn6j9wDRtW7gVTzxWkGC56nrrYdyyJADR6jbjnor5FH2acpixN1shzagS9e19R",
  "key24": "nTShsxY1H7rSQuVLRA5J95PYt5dA5SqNwKFAq5de2SM9bzA3EVajXL3d6mYYPtNPAfXxpWR3Tjj1aD4drcfnm1a",
  "key25": "p7S2ZSBoFV1ktKc6JKh4ANtRfC7Yyq5Udo7fcEmGaaA7KHY2c2EBDAf1gVnPmiMzaNGYkL9W6dsnPKyZfotN6KG",
  "key26": "3bV6NeHK52PG61VpyJobDP6sezcCPtrDvMzS8S1swYcNvRLsja8ghaT6fVLFWovFsPRuJtCu6msbL36uSBgDPNti",
  "key27": "qW1VL33JmEQRPoag5VFd2TReT2z3r6nY1G5gvi8vR5NBRzMqKHvp4Zp3yEgUy3JJPXjhnGKRggLEKiRwb31yUDi",
  "key28": "3THRoTi6hKM1KhfiLNPX1HEGAyiszZ6C9Gkj4fGrJ4udUirrbeHHDzcZ43p9ZDUAQBpqxsC95WuJU8RTaVynN6v1",
  "key29": "4RWm6dKhC5u1tqMQ4iosJSQA916pAByWJbFxJ5iMTeXujA6voAoZXAmWZviAu5WJn5ajKTXjfE2HtCUgZPzTshoN",
  "key30": "5rf2inuxgdnvmY5tgUqC8DKkvjn7b8JzmAxEYEya3iTjg6m6rAh42M7srEg7bwoBAC2fGLYXStmg1SQBBZg2VrCE",
  "key31": "ocBuvEgfym6NRezngBjXviVkyNXkFF1nVTzWGjHK2euzDz1VfQ4R9vVU1tutmqLEHmiUZsvZxvX4JDLAvt3LbQR",
  "key32": "3wfW3mi2WeFXoa5uq6YmQPuadRR3Be9tQczoSqYa2Ab6STNig9fCL8ZNhU3Z7NM72cMHao2pDh1duvEFWAjLXpGc",
  "key33": "4TU4hNNfG6EEbntZ6mFKfmYrW5yW2mG8zXRp5aAxt8GnMPSwAeFJo7p9FfRwtFGVpszBCLKPn7uQN8XGtCj1pp8b",
  "key34": "5cph46aS6fPC4XPp82MmLARQ5no8mojDx8R2nYtyDM8pD4drsxfLJKv1FvChgiy4VBoaSNhaFKmFYt6AVPSwTkGm",
  "key35": "4RboUXAvjAnajcHSDSyiB79QsywBmLfv3Pb4SnPBn1QeKqZtw1AHzyVLfWtUx9dJaXfPLgtWDMwQ7nevCSzeRKLe",
  "key36": "5KgvjA3xrd5ybmejBLQKmgVJqcbgVHQDkKA1Af6mWNJ9ntGPjMBKLS3WtQx2BbrCaZcvm85oUsxvHdqACV4FHfDA",
  "key37": "CpQXyWcLTV1CYwyP9FeGJ2Wwjq7C1JRMUAVzYZL8h7FAPUerFfauBKp1aCAzdWop2yfw593r4ZvxxKYwv9u5tp3",
  "key38": "65i5eaQWN2y8vvGkWQ6Dz64ekwsT4dnFjn4ecrzb9g8PqYxFEL6cpWYAjqyN3hxPhJZ7UhWYEzvYYWeBefj3Ym1w",
  "key39": "5rQspbqGfHgeRqzUaYFUZrE4WrC3Fs9H5w5G9fQ3JXXnDzb32sedF3hdbEGEomk5DSRPm98VpQ59THCexZtm8V9F"
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
