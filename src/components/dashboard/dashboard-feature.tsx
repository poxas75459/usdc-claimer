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
    "4SFVHWzXLXQk1k1kMChoPayKdyWL2HrfZuZxXoyvnWXuYHTTJziHHwenhcxg1wL5E17EzjkiKGyGiDFatg6hahcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67csHJsoeWffbSz6ty4GjQg5B3s3pyNYDVxUS3UGvSGg5PcRoXFHNgfmuec8jfMp2ZtK31EpXCsv6RjqLThMXiro",
  "key1": "3SARKKaknBRGwkijQ8WNtAcxCkBBtxfoX4FgacbNen6Ab5QrXPvv2A32tFSbF86DTAsEVs7WNWp5a97AbhJPBGdg",
  "key2": "446JcfcR6tegoZq9hHYucXiSKkJmmDaVtnLmhudwpTtBMem3ANeRtw34RFvQKoCnkWTdSBwzxhUBieyWnQuYsTWt",
  "key3": "4PQMAccqG3wBnEBJjduvkmdofZsGZ2yJvjD37RHZL8cvqdnDqsHR7WPEn7kPH1TtUFqyaQhnr1oKeT9fk6nkrXz2",
  "key4": "2fC2kz7Q9EWCbLP9E88MFhNxxAG9RZM4faUFo9jPRMKyXjzt4whGBuf5GALwrg6XjdH4cLLP4tD8Psua6jg339Q",
  "key5": "2oE6exHgxzKUxTtb9qZqYTSeFQGkLeyMRUC5jz2E7nVoEEAYkZMXV5kncdrQDhVtPjNXoHbjiMx2t1NymEQYavCY",
  "key6": "5QR269j2nkRNe2t16wgzCbAaJFMEzJ1QCuBeKA61q6xtCPc6VjxD8578DsjGHto7o9JqP9DGmmNSs5VvwP8cdPPr",
  "key7": "3JA5uyprM7id7pNxMLMVNp3ZkQmpCQsDy5SKHZJs8uMkYBYVmSogjwJS5mHwfLhC6CjMoq6TTST9g1J9nFzoUfAt",
  "key8": "4q7nhJYPucfGseVCVXNCdAWHpyV47spYefsad8gUGVF8wWz7saBizksLJB2HMNAzRPxZBX4jWkTpkdNbM1Rg4Aax",
  "key9": "3gLyHG5iw3TcwRSAGmfC76ey9ZJpYya6A4tdC7kRPv4XrvsYt12SjF3wGd27JrKGiubvg7DXmCBcUj9np4PNpAT",
  "key10": "5esFLPpnzXbxDted2Ftwt5ZJqcBeHaYGdznebTVTsijnuN574HzEYT7k8pMAW2hjALSEm5eAvakga1MVW6mYSuGj",
  "key11": "5k5yFmasVBZtJpnDeJfFQS6EfLhM7iFRgCyWLTU1RHyMeTtGKZTotb6U6czvaiqCebESKm1XaJU5YuHCGBuqosAm",
  "key12": "4icEr3LoehKSXFYVPNb4ekbEvxwHPordoZtJEyiSU44LtLwJy5K97zHFKM1TXgibg6p21W4LmkJ259Kob7aY95D",
  "key13": "3iqWoM55XMHZBkEQxVnFSbC4qMdeaEK93d7Sb6pQv6MyMLfQj5A7hpRudBSc75NeQZyK5hxut7NabbMfPETYu6cq",
  "key14": "5b4yJCGKBmdAZDEK1z2H8mCqegpvcPzNN3KxQ2mv6ChcrrcyfXit8EnUnds5n4z7Xo78viSX7gQS6nprpAtLJxDs",
  "key15": "55CZYa9AEUFa19BNiQqfsbpy5YjtLCGmp5iR8dJPKdNUVpzsg7Ywns4dpp2dxG54JNyjtNu2miV5G6daFBgmxSwn",
  "key16": "4vAKJUpCHzUMYtUjypRaWNKUVkFMuME2ooCWYRSKj9kCbCc8xkTmm61D3maxi5QaqmARzoM1jcx5D5qKDw9vWmtH",
  "key17": "4MfrdoChJHdxDb4M6kfcdguirCjNdPJBLzjuYmiHX7Ka1ayzvLLxevnJ622a72nSwiizCZDvRfeXnRkwYyjZ5q3o",
  "key18": "26EfMRYzE8TsEhoq7vTbtM2BbheLUbNFBQX8gAs13j83AhcNt1Dc3mkPfn84jisZrne6XUKA7fZTD5x6uu3SB3CG",
  "key19": "wLS86EF1wpj5TFjSjxLXhUmmMeGsQW82pZuQuo3mUrgEeMuL856njGCMYhXXHs9ykYU3vhy3kwFN3wUvL5YKThY",
  "key20": "4Tu2X63kJkz44zydExLfpuUq31k1rjWoQeQtp2A1vYabq8zJ5JHipUuMqoo9a9FHhfmZccrzhS2QMLCPcHfUNxvm",
  "key21": "2zqsrtRJBxV2SmRy4ikAXQJWA161weekAYX4KXecdLtu3grfjPQ2KE9QzcWoPfX47mL7MHRC7KjBTnLyXBY2xEax",
  "key22": "5EUeZ6ftzNN5jaJotGi9Kr5NJrKUv2S5bc1xgvpfPExwfWsMxt4Vpmf5pY8gD21UgvhaV8wyVoFMX4ty4NobEtxH",
  "key23": "QZgFGNGGzhycXfY4TTQtFhgcfJyUMxMP4FtMJzst7NUZUihPnr6GZ6a6rKVQGfakMQbdES2RuUdnwTPUnN2YrD5",
  "key24": "Ar2LgCzvXoChCX7u4bWXqMRh5j3kRexZZNocQu7LLFdgzSQapQUXFJZmcUghojTMJtTvmRZUhhGrAaWVkC2g6uL",
  "key25": "51xYJGKKvdWodVbdjse59ZmYH9amn9rmRxtmHgxdG5GpoKiqVJrc9fPVpPq7r2qK3f8BJpHewqZGDntpSDWaJrAW",
  "key26": "2YHTcUBYNgdw5sRsCH7ZcsrrBJqkDbQcYAs2UFGAivssh4niszydCfy8rDTN7kHTq8gPjJjgLFMTfMYawL4551tm",
  "key27": "2j9ei9K54bUDpQH1NgrKC8SunCcyViMzDLi2PkYP3WeX1vMrqBCD4Gy5e1j8hKyvx3WSqMKJR9vomq71E9HNZGRm",
  "key28": "4CXPVpYcxdgTdmjm1pWxv18UD66puXVpGEMuNEibKknsPhSGTCzUZjpWuNptd2TzUkRiwfo8bwJdB3wDCyi7n4De",
  "key29": "357Sr7d9FwQsgd5FVfPL4sLXtHGxRHheruWhD6H5QiZxtJAiKX2Vy2sTeoNMRGWiA4cKEcDsUnRSHDuYs335ggRu",
  "key30": "2qrbTr5TtboTRwcDJtS9aNw9mwSdUdBhgSABmy5dYdu96qNmznpmFYq4UeVsRTDN1mqiTCmJPtmfbGBCFrnju9t6",
  "key31": "2tPzJa2c6w9JZRfxVVh73MbMSnchviR985rbFqQoHYx42yHNENJ7G7B8Bg4CriqTZAAB9qVkhr2X6SdTKsLLVTth",
  "key32": "2QfsR9V6g6YcunPsoTUwHq5xAc9wZGfNVEuwCLgLvJth5rJPe5PnhgKum7C6FpmRn3ZmY4xocPZtQyDHAHPUbrAP",
  "key33": "5Uf9z7ZjofJ2nFnaN36d7HmmCbvf6rqNFf7TmXu49row57bz9CUmCkg4HKEQKoMuhCP3e9fuosRuuBbT9uQSg6jR",
  "key34": "HsXoZo5sQxP5RMCBHDmg2S9Q9oSUSpU6yq6evt19LtFBduJuZsxSkjbn8EEK3gVFcGCPzpix4Bs49JGvaegLu4d",
  "key35": "4HCsNaKXtbQ5cMpTFLRvHgQS73tx5PQaE52p2qwJ8V2oHM6ocK3kFB6ECw9sXLCgxwusZqYrVTts3jeHM4jpyXiz",
  "key36": "55xRd5nCqh7Vjs2DvQ5sTw5QMMJSyibM7CqWbyz7QUfjFRiL2k6bRHubvZwTwKhmBauUU3G2PapAkKvEyTzGgU1R",
  "key37": "6ySFMZcVZzSNVeneKAqymFr87S2qfZjci2Fvc6gqxLwGNxBDmgYj3j8EtS1T1byHuek4HVgvHRNK8TYrzEWuWFg",
  "key38": "4irqmHeV81Q9Gf2QSCDBtvQHiHQRN1xxN6UVRvkye5rjDZd9VkE5McXKCknXSDX3t4pSL5KEm4VCBDcRurzGT4nY",
  "key39": "2hBjetZQmVPsrUnSSzsaciw5juMzdDvpk8Vj6GCs9MMZCBhtgrjyvGuboqVC934SGJJKbnsKR3yv6PvtEeaN5Ji3"
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
