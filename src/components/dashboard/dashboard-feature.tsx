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
    "2HeW8Q2KvoSkwZsyFXQ2jxpqtGV8UZ4L72iQMWiKuqVVPbuUFkqr9K6a6p91J2aQuEuhofRQfFZDBkQyHnm6M3Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4syi2R6sF6LiqZZ7uzx8eoKrQNbHhApy9Md7dFSheQviideW7paYPQ8zrutFdrAttoVsManH5Ak4QmMVtnCxUguS",
  "key1": "4RRmKwDJzRstwcUFKdia525Rs21LvzcFQ6dY5jkw3vAWZ8fsraaeJwVr8rrW8sWobCne7vDXbxqmrJ6tDQ4UAuTF",
  "key2": "21MXNE3KTGLZbKZfetxu4RZLbkCys9cAAFJCirsRbpM1NnLpAcPRYwfhC7yrE2wGTNdwxXiWiimfNwWTXYzckKex",
  "key3": "35wF4LNQCohRPhXbB1kftDMmsewVXoN5vfZ9AHAGnwo3fhRFDZkvqxMeDKNcLHZ12m2iBiKdtigb32HJy1Bj5QYL",
  "key4": "5FXUzuYNbyKpCcwTbj5WSpi8hSadX1qThRcGzNmfozuhrrvi5WDJmQQqCgR63LFYhyFGmQRAvjeW36vynhLmUxJs",
  "key5": "5bsYEc9faw95kjxh6BMBmh62CMoBstRUgjzNoUtLYthfgkieyG2Aah9UnatiPkTVrnGxuKS9TDQcigXhaq7Nup9a",
  "key6": "33dyfAAuXqmpGjGKVSTKiDemMbqqw48PjviZsGEpcS538P89jXbsqGpEsfo9zign94SsjYiwa1oPkmbULTgtMWsv",
  "key7": "x3mEd3JU9UyvgaE5vMxtLgRXsx7otDZHkVff4HW5VbbhUrf5RYk1zMehxBhesMXL4o419QoHaJoWsBj3q74CNXv",
  "key8": "4TmNUGuLZXv5VopANUqw9Aza8R4cAR6VxSQHMiPjDPCftKJ68BpWYnHXcikL2toR4pvUWTEmGS4DbWVAQNiF9w3z",
  "key9": "2qSfDq7PY6Q2HzvKEZ4kXKANn26trVpFKEEAvkZB5R7seZatvLZxogVyiprYNTM3vG4wMpnjBV1GcDgCeQeN6CYr",
  "key10": "zvhkiST9huhC3EhqF97Qkmcd6UQR99YRW5WHs4pLMHbewZiudBT1N493nm35YW5z5H8RzAcwJWJuXQJQCxp6LPk",
  "key11": "5gdadHBqZz6RoqEwr6ktTxJqEeCtebW7BoRNBmAa5cZzQAk9KevxAWrmMbC91aURbWbSsCNDq7mezrudQ6dhDqF2",
  "key12": "3o11etospMB6e6BMhvsXDeeZnJQnxEYGC3KYQed4YouCeLvnBA14E7pH6HpwBjzRH817iACbaUzxYz3YzgWkfyDY",
  "key13": "4doSjcRbmgyQdbaDmNrHhhgYieK7HJQdjXxZvJrCYrEw16MTrrwbSUKwvwaqsSar67EsMpQk67HAposThvxmxiou",
  "key14": "3Q76Yef8jPb6hwRoEhfd1ydv8Ge3KkhcKx9KNNacWjMnX3U9pxr8drr9N4XEFPgDg99jYHejWcNDDDf4HnsiERct",
  "key15": "65icEo3dfq3FEwXKk61KjCZ7qq5wjymJkgSVdTi8kg5t1SLS6EijaTTUeBmUyWDtG8tFR5BF3zva8Q9x5e2sdG1r",
  "key16": "5LHM5gmYytivtZVYLWB17Lr5nvrS4zDzaGaVAZLwMJ9GUNv9w2wjSsJ6s2GV7amFagu7uGbejZbA8qbCqmEaYBEy",
  "key17": "4nB8L7MHJHCPxzy4hgMoKQkjeehhkv3U5WsmbYBfnCpapFXFhMgg9VDViGqFnHfJDkTrHRC5ppxFGq3F9YKdR5u5",
  "key18": "2p4vQhJL8wDfuPZjgibEgmhQTyYQkBAV3FYPmHQH7BgroLJip7hnKTTiA3tdYFb1YtFaS6vNJkhboXB6FXevxe6e",
  "key19": "5pgezNSK8FCoNfpUv6m8TY6oWA1w51KNtnR5Yjdx8nj8nJoHwKyjrP6aVeEJU8y4iptqQoi7PcDyJvMCCVTzhLdb",
  "key20": "3uJpobQ7MboYf7sRsMGXzJnwThyRoDrgXwy8qMQxg9oCySXyxJRBkvWuorPdAJndFuo87nKvJmAzvcvQTsbbFJbv",
  "key21": "57Q2aMS9DWWhRb38X4ezTj7Fev6RYP1rg8KnWmU8187cirJNFVZ5bAAVw8Ryo1DKmFvytgXKMJnd7rLFtm2R7bZT",
  "key22": "2zeaJMRxPvptvkoK9Zaq1Knw3RMfYM9T6tvYgw9N143vEP8eQX9NnETWJ4KvJacfkZMJHm5nbVADi4oFRrKUAinJ",
  "key23": "37AF46PUoRCk2PqisB46bs7ibxz8pXufippkuftHPmvrytESauYwFKmW4SGqpteXNDgu1pDGt8y5tZFjcJ4PB5ju",
  "key24": "39WgmkHfF6CrqWh9yrQBPt5BNar9GNtkV7ikZuQbFhpuKrtSN4oK1mNRbFnzBJNGG4y2iPi2VEsiNoDwSUe2aRW6",
  "key25": "5WxKMtWvxdAz7NqjaJAmVt3N6TR79FNmun1ikhiysPrKadjogRdQ8vWzA7YqoFodQpGPtxUx4naopoYJXKnPJNZV",
  "key26": "5VgtJLs6aCH6pD5U6ZQ9sGtdaP77MZfi1MHK2ywLvRT7FHT6X6E1Pvs7xccw52jZYnvKsebhwhab4pjbRFzS7FQi",
  "key27": "3raifRoznjwdbAVveJiDN6Y16GhZWzCqvqd1EcYgAVu2sCyV1pUBUsj4FJRfyLoCSYeuS15XVrh9axD8FnttEPT6",
  "key28": "2Hwjarxo3oxjd5arYcrT2SBDQHEte2rJJrpwV3tPVzsd6BgvFd17UTkMQoEPhWYi7G9ydTugxgyw89pMhGBBb97i",
  "key29": "2CfvG4cdyhzAH4QphYxwMQeEABG9T4aEaxSKeza7HnT9vGXQNSLf3trAsFB8N5L7PS2MmLVn1miG6ofLQNMLVUFR",
  "key30": "ih9kZizJSzfoDw9CoeLZ3ExUkLsGk4Zbh2268kxQjzhBnx4rGAkEF37PWqQgFFBAT1PBRYaYaouESicLVi6wB9p",
  "key31": "dTU3ukwPxCx7JeriDJ92NDXrgGZXyXz7rKav1AvnAuBjUNGdMfgJoDfeHGz7Zf7KVT75EwxuPfhGnaYFeACcCu8",
  "key32": "3f9qVsCV5GytV2oWAHtdBNAURzqhG5U5w487ttEdcH5f4xdo7R2mwrLErgw4P4HydqdMEUXwqTYTi8M628PbuBVB",
  "key33": "56BDZiGik8RLs7eCPxXzXgb6FiF6r6jtNYQngbB5XxyZ58WSALzSuCbfHYefeDygkft9srkUDvu4CSF7aemkf7cU",
  "key34": "HJGs2F6WAYYy7DT2DsevvEwGfmCHAd8bm5rfwVeGvqf7oH4Ncci7rxBDrpkHCykmUGbycjuhw5HYo1U1KsPkucS",
  "key35": "2YBnA7D2Vw9wgdgWeBU36pK2Cg9fuDZWyHy9d5CvrqiLpehWdSRSX65tEyxWyMwNj4zb8KipG1hBHgsV4JsGoRwL",
  "key36": "463dosfps92snMH4B359pgENqX9gvxbBMDhXbETSrW3ASvyDaXhbgbEXqmeDgRHt7NevnanNoAak5ZDVoFzrziQh",
  "key37": "2LAcicPrc7iRYNQoC4WPKHeAZcANLCHu82V7iJuBfZPG6cZgB577VXcPCBqqwfd4VfncR1cskym1SPGZ6mYs8wqK",
  "key38": "4Vo1oBLqi4NUEDDkdGE2DAnFQaBmHFhagVjjmsjdB2rbrrb3FmbmxzGSATixWJ1JrPVYteT8Zk7WY5EbHeYWvUZj",
  "key39": "2uAaahJELsaBi9q2GJMgTGmLQ7sMbh7Zo4TwSGiaacSXQL3U517zCz6s7na2AZKTezRqh8TDczy2CUcLe6GiEAzo",
  "key40": "5asDF2F4BTbzEyxLqBwzjZ3c2zNgdSLgWB111jQp8uZvGorrA9Ss47BgBLfi8TmeJAc3Kko5oDe3ZSguxTTLY2UM",
  "key41": "64jwvCZgcpg1Q8JnZsk6vA4x7oseEXZGPWbsNf3iymB41RG3Yd8vkN6WVLDNHeXWv3dfa2nzyh5daonekfW5YoGm",
  "key42": "DJYz9Xiaj94tRo33bnZtVQXeqM3ySxXv3LPv8DWNns1pH7SHVha6QAu93bBL3CaK4VBBF4mVev6HSopzYxEtZaN",
  "key43": "5mFFxJvnT1TZpJdJisrGWEguLceYVKPD2ZDT7afqzhp2h2XvhXifiB8DBJqq3FV6abZXhoZHkXRx5b5fw6UHL8XK",
  "key44": "gLd72bsLMwaN5pNkJPiNxot3sXp9RR1nZdQ66omV19WKiougkBMUCgZeZQZ2HhZCxvJPNoMJC7wEcKHf7EGmuUH"
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
