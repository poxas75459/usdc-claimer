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
    "5jxC3dnjEXmH2u5tnxbfqu9oQokPyQryr4dA1v3Pu5wmu76FgnCkS4bhd8Ua9kmfj8cLMvfe2Hn72QtnhysZQBXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5axc4HAk4mYGriiJoDWnUEW6jTi2gWSZyFnWY8xKgEv6zPDywaWhsooN25JzoZVus5mzwZshcfKt1AMCi4Hj6Ui8",
  "key1": "YBQPrkYPDsVQVt43VfSBhBAD4qDqYJ8qeBxGgC3PXkkUjnHC7kKr7ZU3AZZCfEfjqGeZTCHp8sPjGkcy7Yax3wp",
  "key2": "2PUSEmhMhjhkybFS4XeUPsYNckot5vJb8z78vRCR3w6NE1VGF4jn8nbUbAnhmPDfjD5E6a6gHJ6EbtQ2rUAgdC6H",
  "key3": "4JNKKJTNibsTiZCp9CcFA2gy9xwaCNo2hV9bRJgLu4sefWFo6EdDNXB6qEzoeKpGXSwpeMytPANUCa8A8QdyVrDy",
  "key4": "3R2Kk4ka1nz4bjhLCeNoVc1nZ486o8M7pqsPPa7SkPYKpFsgiZind3to1hm44L6ELY6Q4mXcWd6AF868ALRyD5ku",
  "key5": "3NJZdezJBqKHberS42i1j8qbBZmfaHUJ6gbCRPDZfTimarzJvpW8Y57sezfSK2HaJa7uZbHMFZt6CvGvA8FPfZNA",
  "key6": "5oZVRbZzpem8zoRLHWaFJ5Zfu7JFQFmpXqdbrwoUqxv7xEmhDBWD5CDfid2YbexZ8eoCFp6YMNAEnZVo3DyvDZye",
  "key7": "3Pfn3WcDBWnK66YozGdQb8yHqqyqSn6ZNKU1r87fjtLXjLKW5AmG5zZLmRw9hzFp8XumCNbN59Z9968rjP5Uzg9Y",
  "key8": "5fA9PSJk58vyTwRCkWMRDd6YtK6Q9DfJqYCF1ajD63WUsGkCK3yohjbEJSS4TkiCLcfkkKHR6KJ3FBr9yRznKujz",
  "key9": "2yGofbH1D2Jspvi4hgie4cCLrZpW7SrkSgSJPS9kQitrMJUptej8H7bfNyQKpnj3hiEc8zcwvv5ERN6vkHLKjPHv",
  "key10": "3T2ttKSUTbbj5UyEH3NLUvw5ySAjXLxNNdVMT1xV3QcXwTYWFxsiWq7XEcn3aG1BvbYqVrXeYaWTfQAADXqenYmn",
  "key11": "41AZBeu5RwSqtZGqFxnug8EWTTHjw4L5fNp6uxKt2sRjnmq1Yr39bAmvuCzcvozVp8brC4hvqNsbLanHEZEsy9cR",
  "key12": "4wab2itPSPv6eyaSjDeFSibEVRwwJzAGZWMpe7yMouHFnqkQ9HNPD7DURsKTy1XE8cdKf98G6oMZzQ89M8pnynXS",
  "key13": "2p9PKycxazr7kMvbjeJKFzXSjKPzJQ9dnpvu4oFpAqQDXd6mjEgiq29NEMiVfuJ1kUvXW2DXLZvE11weTsiigwKP",
  "key14": "44VmiLjQxM4xC69HCjZMooBJVBgTAouZkbTCWngWd8P6maU6NDvXDUTyiBLCygWkM4vkVvk26H5SZMP51VEp27LU",
  "key15": "5Upym1fNiZpJawLcesxSW3bjf7pLWnNg5KZdZXr6CEtkD5gNzFrmYCQzzv1GF9M3J1mGBdPPjGnknEiM16VgCQ18",
  "key16": "2wM4kMfc5Z86cZjnnAPUCeBLzNgGPgrFmii896VpzQx35MqjpabpKxf5zSy1yPmKFZhkk1b7Beem61MutV3hbGiU",
  "key17": "57TcYBVwXXEWoVR9RCeFi7gX5QWHiQkUz3ifwRhKf1zKmQKGM2uZ98MmwFQT7Y2dhfrTXj1N15LsnrXET8EcbnVT",
  "key18": "2RxxkZNetHKD3VtBoWwnfk3FDemoDnC3WHdsWMUB3ky5ZMjCrWHmPE6r4wnttvHaL5twTWLKet2iWGmNwA3NobCN",
  "key19": "2zLKdaXNg3e74kEkxmcFB6FauptqVw5g7Hs6Nep8npmURKB6PMCd9PqZ7ZctrkcXpXrx4kXhDTTifp681JF8thVk",
  "key20": "5jGpV4PE6pam81QRFQkzjzt8kajLRyCjaBt2Vzkg89EFmykm3TppcfxG9XbEyLQDmWJpoHwW1P1GzyS2fFyAu4Ym",
  "key21": "4DXtcCuTaQiJwsDc2ze1M2JsWSzXZGHivv2hbafy4Xu5hJBcgvhEnS3cTNjJTqbTxWzcWRhMGbvTmfPnp4GBb7gd",
  "key22": "24XqStFxA4fRiLLpUbvotxTJA6s9omC8CnzbAtpuDBy5CfapTMXY5BptM2TswHhaGtM6XXkEpcMwRY2cbYc1sCmY",
  "key23": "2dUmQkt3cvqsX4iiUsX7eaFBZTPShuRimSm3z29erhpE4aDxw54r1RtEpzEt8h2NPEGFRf5FmxFv4xvF4J1MmW5Q",
  "key24": "3n7SHmFUzKACv4bfsFWr2zY88guUcN66pnJE9VfmMabfbw8g76WfTNEc8e8QKEePFadjTYvKjBSPv3h8hZANB4Cj",
  "key25": "2LrjLuTqENVvda8frVv4QoEwuzAca6fmZKgq41eTWgbjMYfN8xsJjFodm7rtwDLy1cG9WuzR7KaQzN296jSuYPkY",
  "key26": "3TD31S8WWUHZC3jD73DRinijkq5V3uy2nhfdtuTCKiM81bUCh7N1ZWC21maGfu5AbedG5YypsLyFBwQvq2pi7rJu",
  "key27": "3u9J75rnncpK6JcoXL7pekSmr23KBJtXM51P98CLvEGLMQwvc7dR9rPvCEQMNu6U14LJsejjXhUMTHzd4xi2qPfd",
  "key28": "pU6bQU9sCkfvri9owPiUSmFjraLR8tvMAAeUvcoNUHmsBk1S3NfTtVSvV932KcrvkFL5aJjq8vwpNHoNUpMXTdT",
  "key29": "2L9gEWqePgKaTzws72VsxpCC8PMRKSrqX6SXKqN5S5FvKvwPN9svmAHwNYjW8z4qnBkcETYUNKkYWt9kW1TAecNc",
  "key30": "jYUhJsdZkWmpftgPpGJibnEXXZNpkiXSZLHVprsY2hky3c7jUwqC4svGTG5BdsmrUs7vC5MtzSWbozbbKvdeh9t",
  "key31": "5yvZNim5hXMGp28ykbxVAbYZVkcLrj1fnv3mBGzV2nLPXXArps7JGqygxwz8CTevKogJLXH42ssyU411Dwj4RiLX",
  "key32": "3kFcQrB8EJHNQiNGQJ9vSma5TAKbw5hcpCT95MtWL2eLt8ejxqqdBE5LpUYiYvVv2Wtpx19JGUjd5TNafBdevxAw",
  "key33": "peM4CSgqnrzJpaC52x7ynLxGSxwiXo9jmpLM9BDhfgf91HhecrnEv2kMDCGu3WxJzseAYBZCKqLETSY1UbF97Qy",
  "key34": "2Y6FBrGwFVCD7TMAkYL9MYntsM7VZ8XXKB3d9Tra6m6fajxYvMQJqrikE67sSg7a6o9vLADN4txwx2K6mXaxvLQm",
  "key35": "2sbvvMFgNyp1qWUdvr3CUYdoS2orsp8tXkbhRVNEUJY9KUjf7CWjoXmPxetataWEFUX881yN4tdy5PKGaVEpeNfZ",
  "key36": "gUVMhWfTzYvA8fRBu3DbQEtDVkRjNGjSePQeea24wpGPfwpeHPAsWovGFKsftyrgTSabG1fgohZbhW4zkCisK9u",
  "key37": "9GLuHNq4s5CHqoUTYnbjTazRQBnyVWUcAfK7DHaoDxUSvRCMXEujFsbWhEiQ22rw3DppgpboqSku6MzAm1wWXg1",
  "key38": "5R4i7ER2mUBqzRy3PiyDuMhWDnrRkhDuNdnLftMtKa6nvtnwmX6wea91cvXzzHYE94eWChKH7LDYwiUZ3sCmBiEg",
  "key39": "2kvRjJD8FXj5upt43StPs7g9DRF6LVNyzJM8VAYA944mFKZc7reCbFHRMHX3YUCbQeowoieYbpM2b8xUwTt1W3jQ",
  "key40": "4agMb8cvJyw4i2bX5Ayai5PQjSGEsqHKXUEBwfZem75wpqh868wTmfpjZka732XHgbvPhTZSqPonj3iyrGQSPuBx",
  "key41": "4MBD2HuHHaWSu6PHDf1fCg43qZANnCSpkjJ95iQRxacimUmsUBjr2i45bam3ytLc8uNLamg5ogtiPbLoZiMjJu5v"
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
