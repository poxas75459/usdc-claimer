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
    "4SxA6924MugPGbREzFdALMBCLq95BBVrFA2Ka6rHoZMrZjQXtKuycDUg4RDFZHj7EHr4KLJJCAmBE4CBpxe1oRza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bTb698RopsESjDRmpaSWPzaWmxYfTgodAHVo6E9XGZMkzFqu56jqH4iENeT7A7uFyU9neitHZ4qdmQLPayTHcpb",
  "key1": "2xvyD7wjnFustyzgdAbVfGF7stLpLenZrsaXGsKNrYbCQWk5ATCpr7C3BqAk6SsXsJY8xcmW5BULdPcATGsxa2A5",
  "key2": "5zQ9enjooUMtZEfFNcsNJTasEGomSk5sTncUEYVuXE9jHa2tCZ8qHVD8KeKwsGf1JsYCmQ1z31SMALDXud2uP7Db",
  "key3": "vBCKJczzc2BuJQrbDdKgFaH2zSN4wszCSEPXfaKBTV8f8rvBejQkfjNV7RikRW3r1AubZRL1g21L2E9MEmbRnPA",
  "key4": "3H9kKgGxmSHB7kaq8Lz6x934vtkEC7Q6nbBPv4bBbBkf1nM6RrD3jgSQPhXXP9TRK6mQUBVCgFaqG6oL1rTpiPdQ",
  "key5": "5um6hjniaci4BVniw6pBwmE8Rz3YzT2Fix9awvmebyi3SrcRqbA3chuYVktzvh5oYEfJDv67y7nPrc5Gu9pFcUnR",
  "key6": "36Tg151NgaK1i8dCkZ9krzAnjSBZz4qZkhnxcqeiJD6oPSSRJuPiAnxD6oUz1Bsik58rtBd4pchREQc9jPDo9f7K",
  "key7": "Rqv2gmMqbCPp6unv9ctap9T1DWsAVBCkLymeVUfPrwmHmkY3tWNL7D22pa3c5pRKPaiQFf1j8kgazai36rY4SAn",
  "key8": "xFdQDFkWHcqarDD5gaVRZKvCvbYzQgN4WWZjeUkgdbrZRcmCY9EtiU5MYavMCkRxR2i4NmitMqd3iPDG7RrBbYB",
  "key9": "5XzTj35vGhou6WwUi5jP1R4bhSZ83CEwrAAXNTFhNvzYDnSX7R7RrUziP4bj1Lm4RpmLDT3ZsFndk6bcKHchdCsY",
  "key10": "57WeNBf5busnr9kfABWxk2rH4R6ZAR8FTsG8VhgKezxNNikmA3jMXLvSUxCoxi73hvuiw7u55D5rfcx461nu6QbE",
  "key11": "5xTc6BDQcqopmc13Ag76b449UkQJho41PG5xGxghZ7nNySfTTgpu1C1BeBvbPz6i2ej5C1egF7iUiT8XY24GaaLB",
  "key12": "3kpgrJPAat9oCBXCe14HJgMaD7sF9jKUwWRME6aPz9cxLHTNuhiJ1peBdAAULJGvSSmRBPqN8vweEVmmPSbQAk7W",
  "key13": "3r4g3rgdDiR4PEcyGDpAea549odwT6NzsBMwpo2DkvfS7zTU63T3UBKxThkmEfU4H7vRkGEwmFmdgw7HtWx6Rf3U",
  "key14": "5pQbEdbFW7Kzv77rNE9wgoTQ5zz8Mq6gy6SjnRuTPUpBpx7DwDBZfdAK3LVpetVeFF37TA3Ucwfkaor4GFAeWDFf",
  "key15": "2zMzK2f2XZaC9WGCUnEoXmfqGgPLLqDrhKqcKxyrq5E46Ww93tdhdBrV8C2zsfRMFq56j2qiKmnYz5ZREnpYnNHV",
  "key16": "3kBNY7W2ShrKDunBJ3Bm2PZt6W1TNg3sLKVnrk7vKLCJXBU1LCgD2U7MXkm8FFmQAdvCF4BHnPEqDJbe9xoV1KLA",
  "key17": "TP6XASE9u6gzAWxTPNfCa8h9DiQ5Fn8QNHNYj8gYNMTns5Q9joPddo63sBKihBsXMRZfQ4nWNauoFxCL8bNMPKn",
  "key18": "4Bm26FoxdJpMiyCr2F3r7zeo1aUZLuzho3ZSomBrYo4QZVD39utDvFe8pjgaqKiATLjwb1HZ1PFseQozMUYAKjor",
  "key19": "2M9Ywp3ap2RiHRyFFajSuEDAy6nLToynh1ecp1pRcNPTzFxAyRc3NFLypruQRP6PsvGNd7ruZ2VkP61GwH6xXbMW",
  "key20": "UCqMH4gFnU4Digqs9Bjg43BUR8myTbEF9YC2piU2Cax4NyZf6ypm34Ssf5pRkahvWiunKSiuDXMqjF2XNs3dP9L",
  "key21": "4Do4gZnJZb1XrdRtujekue4NbFqMbztnSJ2q8QfcS86E31yrEXhUKshEmbxPHrue7YvPDx6ENR1qPznsKWgiWVW1",
  "key22": "54bWfJbsqjMqo731UTjRdCMcXjEdTLdcwhvn136kdqzEby1DaTAo3qSHMgWuYYUTJovg7Pj9rJn33NgNEYxnYM9x",
  "key23": "3xfynoQJn2pojp2UbAdAURdYjich2V5NFshHVSAmy92bkJRSUtg2o9s9vcdVHHMtf3pdiBVAbEjyYUYXYvqDRZAs",
  "key24": "2ujHU5qMnx24GLqo8K8xAmeVTNa9EmSaDZqGBvmmuJiiMyqwBAYpaQU3wZAVLdCveTp3MBxcWURKJrQhdLqKBvrR",
  "key25": "3GpDqZc8YcnpShLWiRzJYeLdjdQcB2tMuohy7azHYX9m3BgD5miSkPZhFEuAnjViohMvqqKuoF2NN1e5nKohHitk",
  "key26": "4oqsbEKn8rTug7cDotoK9C1mMh7XLRP3dTqCGLScvmYWeGV9A7REkpoXoWzLRNiZcUzNCGpKLQJJpc47fUiXeEqq",
  "key27": "644p83ZBZrDLYgratDdspwRNuP8MP4Un32xMWFzEPbTunetQj3nazuST2XDUVBoFwg2hxCSrbMtVTT7eaQUwEb9N",
  "key28": "3Bo2UEaKYRMQDNmeu7daXWozeSJmHSjqDUKgmgPN429c3q5yZs25jERrFecTmzxYwgmRcahW9hpJJw5a21Jfwqpr",
  "key29": "gfu4B6T74BSdBtm82eJ9nmFvzbPThkjc1T8wTq1ucEjDnGwhXaa7V27d1A3HHr6RvAJdKPNkPVJR1futnFsAkG9",
  "key30": "cvXQfaanAzV12fhnSWpMqzrE4h3wuNFjZ8xMaNwaQNq2dU61WJKR15rtVv1dDoVGXuTJZs8cBPBcG5cTXZmYVPB",
  "key31": "3no5PLm8Mz4peYdhJ9PFxeWCiJprcwcZ1ao7SjqBCkoomB9WkCzt5rBkd6PJrh4jNc4CQapxD67dhLc2CnufftmU",
  "key32": "31kA1pabYQwtFtcppRQ3cU9tdYtGGP6rFeCtsFiS7iRofguJYBD2Sr4KfVicV8nRdTVjekRWwesKv1Jk9zFpxHHC",
  "key33": "1692CMHvFnJodoyqXFQrh9FC2u29SeHN7VVQAnAkyxqW1v76nGxKuMKCSFvd9ppgmAXLk5jBqgxJyG715iNSgwj",
  "key34": "5kj58dr5niVh5qyxYF2DWY3VNMnn611aT6f947F1o86GZrdtbmFswefBSuGVQW6u7JfpEbvs6fxebwYoJXH27g38",
  "key35": "5PFBEn6xiVumMGaiFkjES3pMKD7BeEhUDLTNdmrTj3ffP4mSuc2SDkn3SrnChg5Wdv4AvDQKYWoP8N7r3gKuZvHR",
  "key36": "2rUJELnFKmKENQQhENfRbumPmqTCbRgGNTVjExowu8e9i6eKq6io2piECEEng8v2HyZoaXKCh5JZt9uBw6rvm8WD",
  "key37": "DmLXAaB4SGWCCxLqKE5eu5pnAgqYq12AJjKpxKukh8TuzLT5UzVJgbvprYAcX7raivmZpqsxVpiUFBr5xeADftj",
  "key38": "5g4LEFZoqBbC9289vyLwVLac8s5zwZkw2ZjDAoTJnSd6udkrTuK4unniyuKHF2FTTXZjusdSCJ25Quy4n8ZijU1N",
  "key39": "5WgN2os4Ljx9y39uVmLq9s8KgwN5vpmDjHUrcoamSJXN6q7ymdg3uZjHhfHrBYBaS8QtpYgq8rPSzcuFzkJJmoFU"
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
