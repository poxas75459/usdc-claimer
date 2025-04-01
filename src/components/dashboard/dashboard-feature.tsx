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
    "4J6hDjBSfujFdG4jcw94rQRq9Fr7a2jv56cCHxrojTnbNnexPHrY7mn696Dt6Zga3vuh4iHuL5nHjvLkzq3koUTp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HGBBsR9Nh2n93GKWDZdYYCAfDc4Hc3FgfQU5pnnhq7sqm6KSe1XaqeiXkmSKEPsBvHPnUEukNoUgcccF4wZgGCf",
  "key1": "9sr4u5SY7YdxTtPFuanXXjD5YT4GyAd1XbtjuKwaf51y7fmMHfXWYvdffCevPPqBHb5LaW7s8VT5prQZAeWf6kU",
  "key2": "5Xud51fwbJbJBVqMAssoEr3JKorpPQFwPnZHePiyx4NTCAZEngv3fPykR3bK8oCeyb7mLkMhEyuVakhPMKG6Ncex",
  "key3": "2bedQBzJUdf6nUPJq3X4L7LBJJF6t2GxwUzKBBEbiEawQLnebmLasZBag8AVpGHQKN4EY1nQ1fHpZXCY78Qxa3mK",
  "key4": "4tyJSn6m1kxL2pCN4XjuXTGMRKNpgtwFfFbr3jexPnxmkqXkxabgafcz3R6qmN3gc6j7AnzxKADQAHSjB8Fg9bMy",
  "key5": "67pM1KsmJBWJDfouyFNq51u869Xo7jxGYzx4NE5kAPPsqTWJvG5jW1Ux3UkiSZe6BZ6u4CFoz2fCbCjYZyUhQVvk",
  "key6": "2pEtnRZiDMBWp6xmHy1rb7E7b2iif1KPFbJ4zsjWGFkYCBKE5uCmNaXA6XVdcoHx7hDyv9XsS6rUHrPJ7qeQ1dLY",
  "key7": "2avMZLNX7XaQe9PUAeC9oQ1siL9w2TREiLPEHfoXsErBg4CueCzRRxuhnZnLvviPyGqqLZoKETnnhozQL5yMWsA5",
  "key8": "21vE96vxZjjdEZzV75ZUBAeQS2RRa5Hq6P2kSY44rqYMZkQSFhxhyCwPd9eDYo8uRbmhDFyMm7QjHG1Kxs8z6yci",
  "key9": "46jTSoLdcL2gMGieGApSppubucN83vpSDzHRY65b94BDNK2cSsiYXd1ZQduRUvXyGQQkBVNRnK3rHuwo9K3UTsbJ",
  "key10": "3SdLX5ZwQgNWmD1TGiUsdCzms3WG6uyfwPGmTr1SnYGzrt8cQvx8Lw27Y1169hTqNiizFasxPn3Rcb9ydmkBGpib",
  "key11": "3A947uaiR92nyZtMBeaXNuaxeUwyzcPjrDrEvBcpJejEwDWc3G7FYS7M6kTfS1L2fhzJ82bmP3ynrrG48BmWDhUj",
  "key12": "2UqYNp7izqHs9b81TeirjVDLygNBBaKWyqhpjGgcwSt5UjWaGysWjTVtC2oz24gGshs8xHi7mH71SPDmo8p1V9rN",
  "key13": "2YaKWrcV5H4QqrWZ3VnxE971MGcCYexwPzBvPRNNSfeTmcJ54u2d31PvTFFWXUkWqGQ8fRKB55HJsZDKmcHASxT1",
  "key14": "4VsyoVk7PpffN72TYsvFo6ysrocLKu49PpNv8LFYtpZTxYrmErSqFczCxPGX7S2FBNnbi7vu13vPTyn5kTLrmHPs",
  "key15": "4kSgkS7H3chTP9B3QoSWhQdsmd8PCxTb6qb8stEQ8Q3MrqiprUAhnk5ne2qmeT7KavQs4nZp3ZkYNLXL4m2Kva6z",
  "key16": "227ToAWesiWNBKei3vqndFwWKZ9dGgQK3Cifxo6MSJ3fdxQu68K9aWSQqG56MVZoHGQCZpurB4qpqn7kDPA6RQ5j",
  "key17": "3cbeoaGygJjsPwsq7xsPCTaq8zBfSZtUYHd4U5DmyfPu2UVfD8YWCGUr82nJkRuhHHGXME267krPFckyvLYCcMyv",
  "key18": "339ZtpUtFueqwkxJUyANUBAjZG3gNpgUcx2w6r6axA1UpX46EQRR1Fxhgtq5TdSGRR52i3Fon8T75iVfAWfuQRLp",
  "key19": "5sVUBwF2HrpAL5hfMtctTrZHzyHb7bxafeoSmXMZRvhq6VMSS4JzYS1raefzNSfKJw4ehRviNoA9u5qMpefaa7Sb",
  "key20": "VYr7zmNKtTMx1bsJdovsES3Yv5VcMZah7QKU9T7GZhqtuqSSfRwGEohYWzZc2pFajGgKwcDcEc4UFNHEnsZaHpa",
  "key21": "5XgX1jyETt9soYNpeSbpwiimGsXFjymHnpMN85jXFiAXw5QQm4Fy7F5MYgPC4nFtoe1syowgCcEX9rsrubEni1tQ",
  "key22": "49f4meeCtPaSuzoWkNphxY6vWhWXzcHEeuwr1b3iJN8hP5965bHCkMjf1oVYVVWjC6nLpWxveJt1stHdxiLNtDJC",
  "key23": "aUk19sysPXD9FfRvC1itK1oW9BueDZQ5d1xd56rQBNQoMKu6618rPHUVHWvP1qgTiTySFgUBMK1AEMLdTcTpCmb",
  "key24": "2tM56dgwGRgi9KHb8Sh7Rte9VsWJ9iLdVGSmsAPFDQLD2cgAmWo86XiE1voFim6n9iF9Abec97eXkqAsFzBKK8Y1",
  "key25": "5FgUdtj2eqUTptSUqHJHnP5nn9r9JSnBKxtki98vBDUk5zh1aEtCRxYwViMnyRtYEfVaauvopkVWiKv7JWm6BpcD",
  "key26": "41wv9tR14HPcpatN6RqpQdHJ2JkDpReGnu9bsNd6zPpHPs9599VAsgpCtY9McL8VUg9K3zsw4pTp6RorFiZMuquT",
  "key27": "5TMFMpkZsPU9Pg2q5hM9QA9JgtN251SzLTd3xeUAfNLfnBMEsjxYKL8GvjLZhLgJHR6qkyDeq1M9Btb2E28AYsay",
  "key28": "Q1bkjv42uWAf1DuWaVUsqhpAqYB8c6b3rWDPMscsGFBYApi1Mci64noFdfjSyYGfL1RL815nfztA97ByG7VEB75",
  "key29": "UxP3qQxU6aMqxPZCyvzL5zB9D9E3ayUXygTP62aSRQnxq1fm4dB54Fp1b2oSJdUze5ZNKd8fWYjnQDGM6uVZKu8",
  "key30": "34gMgzAUDVHmopJimjhmSM4JXQLYEK1PRyu2bnjt3wM53uQtPdo8mno3YmkvZNhzd2eDpB4jbQuk2QxXuUBkL54Z",
  "key31": "rpCxB2Q7WhPqcqsJCi5m5oJWvQT5yrXfSeiAeEmVRTBZvqR6KLXKJrHKi7ypjMLtQBgNHBzoq2fJM5MbR2Lzaq3",
  "key32": "5sVNsrMN7MszEKtSex9GNVckhAnmJkc2xPCEoMCJt1wvonztH8oiz9rjm62aRHqPMgeGmRqqw324bXy9S9bpQt6o",
  "key33": "kBiNvSsToJF8YUW1MuQSScy7tRCwJpAEVgojUExtu8PLwjYKCGYz51EsHWZgqeQrxK1qC5yS3aNp8J17dZUNen7",
  "key34": "2U7Pm1Bv5U9uy1usPZfw9h67v1n2S1KViB3rS7LgRMx91FnsoXEmf4qfSjkcuXHD4sQmWnDy3rDyXaBrurvMFdwN",
  "key35": "4i4QTXTSpiLP6XymSqZAc7yrGt6pX7QnkqxNDSTuumZk6bzqETnGBXb8NsTj4aESYCduXueekiRiEv8D9uXhjyXd",
  "key36": "25GyXkA1k3NDNjvibZpWCE26JXhciLJ7XdWh3KPdDSMAdeCjsDx27WAFq9Q9ByfptaNdR8aqhWjwftFqQGbee4yQ",
  "key37": "2i9CyvAJ3i7Sk63BQo2wY2vDbDdcC7mC1Akkje4KFMVtnJCFfupxGVQ6ESgJ3md2YAamdoytFcmJhjnmYMcz5qQN",
  "key38": "3efjrnwZUwcnJ9Nsff9qb7mH3VJWRk7JVwncSAjAHnGFTf4t2sb5jgcCiTh8AaT8GDcWxdqwcHUgDNy77pPZTKVM",
  "key39": "4PNNUJpbxf3Qipdajkc99i6dNzkVkRNbZeL2kzxB4UJsjWYgEioLNptQzoEc9LyVsDoiEoJjL2Y3Q4vyawKFFJG7",
  "key40": "3BimYzodRmbmc9x5nrUa3W3togGqaMGVxnuS2M1B5RyuHM1HaRju7rLPKFeWmM2nq5X7FXFz6scT1zKgNf8RS9iZ"
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
