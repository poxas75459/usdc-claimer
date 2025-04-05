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
    "MyRLG9Tp8Rcq6EG6YLDt9Uoqixah9ZciMS2mRKJwnjf3xSArKSv8SYpDML38wAyaG4jtFZmoxCu6cuesFuWJFjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w3GzgVRZCxApefZxKtZsSwrCk1oRduFxTvC8BZ2nwf1QDqfwJyqAHSfs2RxvnPAEjvej3FsSrfKwfeqRutpGEyz",
  "key1": "4Q5xQUmUuX3XRJdVUKJcME8oqthJ1jiYWkpNUV5YV888n6dD96XwrN2Vzwi9Nze2sjdGB86pSNATagZ9FqbcNYso",
  "key2": "4nDTe15asTB2CJHC5ndZ2PXuBQDQJ8nvbhRz7m4MDdhuxrzAdiZXX3HgZ7fuZb4LpbZEJxfU8nn4EZHNMwYXEo2D",
  "key3": "4jukrrwPuUrGmBqmhUBetfQ3XtzKBCaRBjpAX2cQz3DygmaeaQHk74g3MSsmeYkegaBip25xoNFvCe5eepAN8HxG",
  "key4": "2N5VhTMVmzEkJvQsiz6v5THgJWn5QycPAnKjz7WhuizuGYANKrSu7JwsZhAUvBD1ZBKDyiSWpujG5dKkms8svo8k",
  "key5": "MQteAifG26jLkRimJUSrHvSMDBAsGLKeDRedgY3SyK4R6tdLphg9aSFhxmdXRfFfqkWXbQfvRL3RqoXBZcqypbu",
  "key6": "5aHArzMm716tfpeHyRGpDo33kMrHBXvzsmPkVyBSC557LstjCgDpXrc9tQSoBcVyKjTo8Zw3rE1ZDnqdTSv8qnJ5",
  "key7": "3pfJj5cKkY4x7SbYW3z8sW55GWZYgUgmpXQWiQnU4oPHJiS1VK2jLyjmY7buwyoZwSP1R2wkeMxJTbRrjtM9bPv9",
  "key8": "2vpSkY5JyhQkMXD8onYzQVh9JvWJbYdDy6k9kcdkyngiEa3ySrmqgCPMqPpDohRUQnbgPRzq35B5tc3bRg14Zyoj",
  "key9": "K6k1DHabHfP5fdzUrxpNAQGGjPXDVLwNG9S7eZX5wZeEyLgzNcusHxjUtRyX6gpBXn8TSu2B9qq16BRQUVUKMFy",
  "key10": "3tBYLHsYuTxbWkV298mqAjywBWcBQGLGNvKW3Xr2M26iNjVM7qG2m6mkPUHcthCvNtNaRfhF2sXqMdpXisCLMUtV",
  "key11": "4trnNSSjSKhqmuUH32jJhDdrpLrW9974CfyMVHPWbrKGGaxgb2nHrMqHMKXwV7zH1V7ed1w232Qiqv3j3GW3KeYp",
  "key12": "4WVQ5fgmDALB58cLKrTGCHxAZPPaGUn3sqXpFMiwsosREoGwAqTP2wg1J2NNLAeko6swSypVfq68RydW5mXCeJZh",
  "key13": "5zMG9SedSFVGyZRXs9xQVsvqgzUSUqWCyEi7RXCTTnUMg2xhEBAGgm5mWZpURCpN8nZiMXAv3FqSivyGruxXVkSZ",
  "key14": "6521ouwvur8key3nZmNGCHmscHwukRLrQiLBV4KKG9rMuBkSwsfRopxghsbbj9onu8TS3vnpKNThGR3B4XUHzG5m",
  "key15": "2QAE5TVQn3gpe6k3bX8eMvAEuJKMJeyy2DD7by9GY1oyRYtVDEwhqeAbiVoZVNxJWE7jinAVB4oQ4d4kpz48mpDN",
  "key16": "3LCm8eNM2FaBQJ2ufCpjVSFtaxqr5u1VxTmwPCT2sokLZL362jPVsP5hoDYZZ86DPzWnims5mPDvCPVMZqAWVJdt",
  "key17": "5zRQFidg8HVpqdgPM7LuMbqfiu5gBAT1pNsQjkyqEexqNruv9BJswJHL8U5try8ASHeLQzQ8cRcK3Ma2tVWskahQ",
  "key18": "2KAshArRDxYPcFe6yVT24kNDWgra8NLKVHUhRBCniurQ55Yv243HpixEQUzZfG75UpdQ9mjfSp5qQuBPszWMCuhL",
  "key19": "4TUpSAvQJWdMuAsDVrvycWstBieEry4uva8hY2R7ELZ77npUMGoNg2gozfyJDby5282ZQzgRdj65V4ssojheeVW9",
  "key20": "2jNwRU5tSLAT3cParfo2bqRdv2XHhXfitjUHhg8Xn3RAhiHrjHKx4rSDjBmJyjpphr7o27unBV8WpbSkzKzRiQ2T",
  "key21": "2sGaQMAh67XVtvbvGVuSAvcLAvAPhNZLY7fvh7Ka5dahmdpWdNFLHvRthwhVVg2qeXrh29czTVdMRBqsDe8EfNx2",
  "key22": "2n8t18SrBG3gDtTSQJA25mFqvwh9AE5huu5VPtE1QARAYwqVvBKiPLbWSSuZcNpBXNTgJReKVbRJgt4r91Lr72N7",
  "key23": "3pZrpjt3kVzMNQrqLHVvGcH9r625Vcc49izQTe9D7S7jv3tFPkfh9kUTqtaPcfWQCbuU854PaVrTsEjDHcGE85na",
  "key24": "4VydoYM1CMpxQhKC9G7CTpXqdwnBpMV1AkKuSrAzCNPYpqP6ZahqitVZBtzBUvLct2ruThR2EJFniFW7XMgPYj5b",
  "key25": "4n37PEQzxLMPns6u9knG9xUpW1KfMHZbr2gjE4haJZpNm4rkd4Zzx3X2143MiBXotzoSoYwZfBSnWNQmKZ8z3nH9",
  "key26": "2SNbcpJhN13Tk2QpV5KfQ5KAWiK8xfz112NEdSm3RXGHGFE2ZNq5CkszFF4FtpvZu8pwNjEYheTVyygx6yAUjRUc",
  "key27": "fJsFU1wsuHkjTiVD5cvqtcXTUuDg69M9DHDsHLzTtzfHsVcxgxbTcg1nx8MvGdQsdVrY8kvxnbbYcJbmUrfxR7q",
  "key28": "4JKLCYmQ4sYWcNpieZjkd9ddUBjjNNWAvmfiTNtAV8oTLnoWZizERBKYZwTyYWE5x5Sff1Y5J4u4Z2huDAby13wN",
  "key29": "5GPJxXM9n4nxvMRedLYPDENtiE3TUXmXpCSQQTceEWXf2KAQu758XD6xwNEanGSwrbiXhVp56nrryksT3M1j9r5t",
  "key30": "5HEjd61QiSFitBR5HtWQpXDVYcZRQTB6uJEwiQMjoDFDGSHMdoKQJ7oTEaXFSrvqgGALvmtmLykfH5vxXXLCk6W6",
  "key31": "4qDeAxuajK6E2DnNuhHjMseGnxTFjGQEQsARrGTusHET3fmWQ1Na2ZbbbaLpRphRw86CiQGeCmNi2xCfBNG3XcHV",
  "key32": "5p3jBvFvx2ZtmTq4mpp6n6MFeueb8yr8Wgw16bXuKirsZ5ABshPpEkyYSe8aRbRu6xZEUzfYZ5K8KGnQT6oJmME5",
  "key33": "357QX5NkpAkoW58Gn4J5UKJ9ozszGkc9zNumsQKEv56fqhc5YeZo6wAkRLCwoAURHB2uW9t7afmL3aTHDCeJb7tF",
  "key34": "46GYsPHTbaASj4aAuQY4Gs3kbamitDoGrEgcYmowDmTio4VNKTvrBJv8z1wYLmHAe4MVTmboiprP7NB5ENnnmePt",
  "key35": "5KbjpYJ4eVYp1fJvHRvnwrAvDkWrPei3WgHoawxsMduHgfn9uSZCrLDVLFQcg8zdqhqADbm7NtcJheEmiJoDj872",
  "key36": "3GLv7YwUrG7B3D2CvowaZiuvbe21A3VyqhUzDdX5YckZxWzEqNpW7nU47Bh2Mxo3tjtsP3SFQkZRJN7vYi19dL5A",
  "key37": "4rHrMhdP21ByAE1kyXzLajEnHH6WVekbAvzXUD8onn4FqZtsESc62cAR8snt3DpXjqGMWjP5dSf5nriSJpZ6atRj",
  "key38": "5EAxsjKmYWvD7vXUgAjdCDavd6HiUhhrYV2pn98HbNLwBuq3wpsZPMLQiyjXk3HL4YqjR2fD3LijyWpqbi2yvqi8",
  "key39": "3ZBbk1YJr4X6VKuNgoBELGmWA4npv6ECgxgohU6o8YuJLQGvx3Hw5G79T4wd29QjKMxGutcmtaypt1hWohhiHoaj",
  "key40": "5XAJySiY7BaDZJzdFN6XwJtGYQENJauqx61DvmGJ2UXy9D4A77MS5VcgvbAm5kAzEdy862pPnfYuNXEAreheB5XQ",
  "key41": "2FUQJ9V1w8PWxhDKc3fXbrRkN6zC2hCbwTwhGKeLXowJXnHh8DPV7Nt86JC5zRZkoGURDnxqmTB5jHwHzc96Ti1r",
  "key42": "5aiCQ7Tc8zaEYa5Q6Js9uLnExWstQDwshe3ESVnJ1jyK4xsgAiFnEWdgxdbZgMvfrLpkyFJLKy4mzp3f5fmA7wL5",
  "key43": "3h9eqj5AW5VVRsGFQVeV1L67bQVgLLY2FCKzYWvjQaMryv4Y8UzYXUPeMrkQbsx31HsuffCu9rkoAmh6oYjTTovc",
  "key44": "4URRZqUHeRmo6zrej41sFWRGwRQuPTp1pRw3cqfhkE1aD52MH4xVQ3PaZ2z7wXuaDtYinC12qFhfWf7Ycft78Ft",
  "key45": "4G9AQCN6K2rQZx6XR7WzPqZfR8QsH6BpnEyeri9pACjyoTTwVyju4P9vMBeMyXdiXkWo26xPub61Y1e2SuiYF5a7",
  "key46": "4PdjY5G9VLVrpgGhuQiQ1nd7atu5WS9Wf5wqu9Zww2TpRebsGiy5mnByr6n4zAFBVkHA8yUU5VqSR2DfbAH3HgMU",
  "key47": "vm47vEaKHhM2oN9QPu5V4GwabsyRcwQK5X2nNzu3GoXGiHEZXdh5oo6JL2o7PG4XYcCkTRCK2VVq29FUCRVZMue"
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
