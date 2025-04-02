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
    "hS6XtkjxiQaMkqxXegdSDZZDM2Y9wGyUy4ggdjDEGLoWbKZeGiuG9T2uf3JEcLBkAEo5b9b49SrhCRXrLonQjKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25xuBd2Mjw2CcgaF4jxY236GVsjDTA3wurLCAqUNDWHbFXHH7os2Hnzpimb8wcoJJvdkY1GhYENUoQWGtJ9x8MWF",
  "key1": "3mKXKZfF8E3qWxa1UsAQUqDHDvL7MnYfV2GhM8Mwt7MXnXMTV1NKKoVqzVpc2Eefzs49QDvPNrgtvDkX8HpDoAYT",
  "key2": "2kZrhcHppcPrA7AnW1JKpRzZXLVfaC59MsupgYNo42iU4gJverX5cGLAbywFEtbBKCc7UoF7CTgntP4iyjEKX5oK",
  "key3": "5SZF5bjAQeVWfPtSCwuVnjexnvmq9QWhnuobqpc1ZaEGZkJL1vLTwGimWnSj57rXATyhdnBAw1jjLeekKf9bABDZ",
  "key4": "5mZEDoqQ9W8z9XDoNX3HcUbMZ8mBzcoEoC8qbyuaJT2AJcs5ZKriUitG36E3RgAKs42xbVhsdPmrwZj23CWHhQ7v",
  "key5": "u5ZGgcUDAQPyu2iR4HQtauuwjf18HqAtVDRseF6pSEzU517rAtxTiGErxaHz97e4v5DR4UbCT8y7x8GRp8xyqwX",
  "key6": "4Uq2CLHEXqrsT9AQLMh9UMsvx8owC3qrXW7fGRpKbsz6GLNMGLCW4LHj9sdQgDoezbnofnx4pf6TNuqiy1TameMd",
  "key7": "6V7qJxJzvnEoijCb7dWtXT8j7JUSw7URmLfLd4tmsTzDGDNqjrWhPnLyy6KVkZS5CM4z7X1KLosAMZpuRH2VmxY",
  "key8": "55mkb8B8QcGkAQwh5H7ECnh5MjSCBFH8SgQFBfXB8qnZYCbyhpGJqMswRT8G3LCarCsMs9uCWWJ9JsxaYVqdAtnu",
  "key9": "5skE7GXU8kpjUk2cLXH4SoNoY1x3zhDhm7rnEQbuA44pD7uWMwCGyV7Ab3ExADJW7jx2ZwSZGEMrFWiMCr7TrbkR",
  "key10": "5vW9PVktGUiGqabLtXo8CLWsTPMQVTu7g3AoVGXvxrLRHhCkYKN3C1j9KMJTk1yzeHe7HKSSvn9gSsgZPA9DtZNs",
  "key11": "4S7Y2s9QCCnRZKDFyRkRZdB2g3sxfYpGPiMpy6dfkrWYqPhH24rDBBoaeGxbR3yJoCUkxf1fJZB3ARyv2ePrxiLZ",
  "key12": "4HZjJUkhC6g8Ccy2jfyEyfjSnbu9AFMhDWV71h912FcDR7WFBQ3eMFShJGiMacgv3PXNCR3MwMjyqsLbLNVFAVFa",
  "key13": "2vtUWLtxhQo78FwSaLqjAtagU3FaFPscXCYJF5B6UerkcWCRtMEQQoPxcE7q3VRpGf7KQHaY9Nc1YKoDdhMVMQF9",
  "key14": "487ey9TjKgS127c13HVTccb1Lr4RegQKH84LnKB8FDxmRt65N9eGBcf8Z5BoZ6kapEPv1fTrYLXb385sXdX3ucKQ",
  "key15": "46adRZkNud9RNnxjFEgLmcDyeVJNuVFqBQzjF9eJL5HDYYUNkNyAgKV2AGESTfepxmAAycUWzetWgwCooZ2oGmjN",
  "key16": "xJFVsxzfmBSmXJoaVkEyXQPvN4SfSZN1AKCLwkMYT4ZrvVi97FoSZg4KXUEdoTe6Su4CshPSKhTaZ4WG7zprAob",
  "key17": "66VrhR79f7YUi5kpwvQCWokoEsvzeuyr5VQk4K4p2BVbQuSePTdjeoADiNXLizfndE6uqwcAYTGDPUu36nZsJVmK",
  "key18": "54ouUkBSncNpy6Wjcz59ZKrhvkGrBqzYFrBwT14xawZC2hHuAKUwyxeSVHCUiQPDbFmLSMc6vLwzAbduefqevY4J",
  "key19": "5LRv8gURLR6mE67o1GtWMaQd89nrAzdcubqDR78nxvca7tYGnTx7HQSXEBCtJDdRFizzH8VYUr1QtUyoansWRCpV",
  "key20": "2dgz8qcdUCy9JdBn8ysguMftkdFmwvoFEubMich7mr2yas8Uxv1AocSYtMyfJft2YjXRcFBzzjZ4PXkGUhRCazdD",
  "key21": "42Jp42eqv4gNMoYwtQbWpsoELmpMK32HBnVZW8u2439ejG1Eiifz9kKsaPGPC1XSPTep9Z9mPCYAdKoPP3hwWL99",
  "key22": "5Mr5G9UVLcHgszhnr2YT5Acix4h5xB6pbJFtZV3eZfuq428vtoNSTP7kkTmJzw9qQAZoxCbRcR5Mxxt1j42adPvr",
  "key23": "Z6JTZu6JLZMkX7ffnibMCVtsmF44LT47o6MfkrDGxNYUu3fsrkgyUceRUqyiehbfHwVbryrsBqnv1n5PdbE8uu2",
  "key24": "4JQTze2U79sFoMs8FBYGSGqZGx3C3poJqAWNpGqTDnLJwncc8t4g6iPJ8U68RVeqtkdFFkM1nQP8jTGNx97PuD2c",
  "key25": "2sQyZH1c9foHd5ehfrMRnDv6GkFC8xgUa1ju6xa1kdhmaVetfnvW9LGantZqRZ1S7DRPqJXjWsGfoCXyn3BwTUwF",
  "key26": "59Y1ujnrwNPff5YcbJNBbUdUvgayo1EXFpwTqsGQ156pEJPm9E679o83Mj9wSeWGLSPN2wuzjyNtWdwke4nCgZES",
  "key27": "3AycTmCZNhETRtt6hyUdmEtMPZReMior1QgsFnWgwUWYGwrVkW2TavwYq1Cwqb1yefWfJWFd9AoNpSYmDQ2fKcwc",
  "key28": "2SCrNYDm6MD4nv75pX7mjrz2Ez2x75Gk13XJjaH37hronjYaSqBKDSC8zyAiCv8K5qLkVoeNWMZxxoYt2p57DBdX",
  "key29": "4JUs1MU11VUK2PrBeBNhVKj1sSthM9ojTE1Qvhe3TnncXT9CrbTkCybhUK8FNz2GQ1cP3wX5f2ajsG3myTSmgAoG",
  "key30": "26KgfBi3xCGiYcVEm1DkXAiYmgt1dd7wawZHgASeYtDTrQutW7m5aMtHXaL7TrKRidEhgwzuUWJc71Kw75cZwkjf",
  "key31": "2w9TGeRCUdzsX1tGr4HfU5ChAgCrJGLwhhzeMT2eacUWvjrcEj245F46u6dreXcpb3kNH33sjsFVJdmEFCWp3xjY",
  "key32": "5EkxM8zhz6g827z4N6AN83F58vrJfN6LUjduwq7GAhNYe4DmRUhaLrdR2HsQFJCwmwXdaDDXbKfyuV1WBm7xKwww",
  "key33": "4zYSyqaPC3prm25v1cnC2j3GTa1buTS1ZrkDFPPf3NbtF4x2iDxgeYHW3rMZcU4Nudia61uU4kv1uogzY4X5y1TB",
  "key34": "4iytv7jBRw1eqAh4kcQbMfNzDvbGZXFDcS5uPkG2ZcpNhsKkTwh3PAM1prq6Ykig2Qm6VowXhGkjjugJgt2NpCqZ",
  "key35": "F92sa6G67NqZUAepE4ShHjBwSZsY2Cuv25XiR2DWuZuSEzF3mcoB7KQTbw71WooW2dLVgzzLugE9ZpN1BBZ4Tas",
  "key36": "5BkwkZcaZMyu6BmkqwKybCErQ7JkB9GrUUjwgg8zA5UZNpXEXFVGiPuhSvhdTkbofKBUWYnw7CXsxtgxsFNLNR26",
  "key37": "4oeF7wkTN4bsBv5vmHqu5LTX4vjwmYwM5ahHwN7dmCK2gVHMy4E1QE23UQdheKJ91pmsprAE1RxrJSbLo5kb71J6",
  "key38": "6bQiSoerU6uyyxQ1RmMvQyKFowoGP86rh2ZYrSyMQEFnVDqCrzY9Z5K4Rq2vB56WPKy1wgp7QaBU6A8BpDpaK8f",
  "key39": "4wY4M3FbqzBcb14aEMMM1DKEutK4k4AmEhYEiAyZm1fjsmsAofDqwgSsYnzNCA65ZazVFjJi9MKEUd8mye8gxrgu",
  "key40": "5A5N3TkGc6MRoimWNzxC4BxFeZrqfFwiWEoS57P1Pkzm4WNsBatanSa4AScuNspxT31tySVEmTQkox6pWDstUytS",
  "key41": "3NNPdwfpQKZW1Qbo6okFVwd48C2PVAE7v7bkZSWzkThpHy8KqLejsULFNarYtnieharXqwPtAuFsy3EH8rCXK2Zs",
  "key42": "2JjsBqCJ7nematHUz4tsbfnkTE8J7ScZ4vTrJymzg71XZj2r9Mtjqvd438kKWyVX6pm6MScPdFzVVL1SrZewK3gZ",
  "key43": "3pTuitzxkJiNxVV2Di6G1PixMQg9g9hvfov7KcMiUn8y66MyZ2nECaNXh9aUqZbuYEr8CmVifX5jmkxPboLYbc94",
  "key44": "Y8e3ZcuwaYZf8JGEuWCF39iUNFB5UwVerCDgadWQpJKpqy2gpvevEqNrdq6s7c5LmSL34QU8kb3quFQ3koSR18Y",
  "key45": "1F3UndJN5cUd3SV9Hvhs2S7XZj7mSGGgRrRGxMh8LAKCb8nt9qoQdvYPdqi9WqJEsSTCPndSm443BndoYnbyk8f",
  "key46": "2r3B2i9DngkHAETMtQxmCKanuYMu59Ut3Z8SEzRTWRRVVk8qMHoPV77DHotdZa3Z6M2EMhBG4L2Fp395k5Jy9w3T"
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
