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
    "2TU3KtnJHmK42WWeXXtz4fYjoKtAwPBk5gfyaBGx5uzXmP7VH6dg3cq6z3uNwft9gtiqMdtFai4xMPcEVJpQ4nyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "641vAbZeBaeqKxb3KAg7AD7sX77f3WShf37GtpKkAvdQCUC2nAe5ZQzCndsE5YYEZFCCefdvWXvmv3StMWK9e3En",
  "key1": "5YoRiA96ddDgpM28B7XUrBbJ4o9cvii7wzBKSxYQxvnYrxuzN92C4RW9ngi6HCzFpmir8krtBhTbPCG6Wqhox3Ue",
  "key2": "4RwfnKTdqGC8jEF7ju1gdZ9CrQH16A7isYuU8JDRuGqTaaW1tbZCjydkjwvuEBkiVYKs3euthRUsvJACtpriThSD",
  "key3": "4i6t3HVfvPBQCMduXC5TMGXRjYdttDF5eEBske3gWzx31ezKxv5eesdNaz98k1Mc7okUCv5UcVGbPMj3gPPtM2sR",
  "key4": "3Yaz4hcnNHDAtoTMw78Us59eh63RTWxyyMytLKfSTRDPEWFqAt1FoJxXwf2zEPSdsKv3hzrhERS71cypZofLLdKc",
  "key5": "2V4r7Dpq6sM2BHNtfrn9g2yXC9aT9bozq2jmLH1FiTuPFbcySc4RazYX6uKQS1irHM3FfHXC1cu6sAo1nGaw4oVN",
  "key6": "3Ez9D2QWxamfb71Cy1kcQCjg19DYzwFL6pt4ns7uuti3LQ9u3MqYEucLuAXHRy4PTCe5WSk4nqHyVL9Zg3mzyg66",
  "key7": "3vu8a5xxdVqpr1g7V32amskmtHLDNkWXTHcfSEhBGjZvRd4sxwNjSTPhXGNUM9zDUB7o5x9fBcTPiBuHBcsi5LHq",
  "key8": "5F6kQa8HpmKYuB9WAKeziwCABiHZ73mVQMpaJGLMieBXP15JJrNWJsgbXULg2yH1QtYCL2ToBE2rvZdPyhWnyPZg",
  "key9": "35WJoG3ra1gaKKFTtaEU1TRrSpKBidsiooi5Jqijg73okMzZh5RzFZbBi8gxN78hEWVo7tkLzL2F3j8t7J7J9DVg",
  "key10": "5U4NzEcySBRUTEeq6w9me3JH8bvT8xA5HuCNUH7Bzf51H9QPGBrtti3wXYMB9exzzzPq5A8oPxwcCYvre5kNxhAF",
  "key11": "4PJnMiNFuErPSi8wWKqzEE8tHwXT7Nn4gyCNYNDRSpAQmiQVkNAoYiBBFXub6cjfrUJDRGkgAWN8V5rzo1sTQPa9",
  "key12": "45yJ3J1pRtTV52tvSdaNa62Q8t79LqNRNkJNYf3mP8CNH5idWQTuweU4Vk6Hpfy3V7e91F5a1bPR9QLevE3pUefC",
  "key13": "2QX69FqD7ekDxVLtEt1fpxEScUzdPVX6ihSTz7fgZ3N1ZodnMAZnUVNSbokv27vLauP8syibNL9pvoLYpjJXDeZV",
  "key14": "Y1DBv9x6osvB51ZEd8TmGss5ZwKkni1G1KYYfB9BTpu3LoSUsVMSj3sabtmYso71mVZeLLpmQutMhznijKPLiJr",
  "key15": "34gydVoUkM7bA1iiCCHjW12ng3JRechhsML86JYVayqMTu8KfZSAwoBJzbFCBbxcHF2m5B9heHt8UH8qrmKKox3f",
  "key16": "4CCXi8NdAynhRyWjUALhhAHyr7QGjymcxdDgsMniY7CNN4A7ooxVB1kFZg2rUtWHfwf6B7qhHtHojCGz24dxnS84",
  "key17": "4TmQJsrPWNT79BMsXhtmqDsRqLKdbMEjpv4TxDPm3y5wp9DfttzJoiD7N8poNXdNXZodCzEvkHvDdPgZcceRBtUr",
  "key18": "2ftehALgBhyA4AFWz8SHVDb3TpHGDvWbALxaevJcVY3hqm5fMXsnMhFd6t8xbCVut78fdj3WcLRdWKc1hgL81qhx",
  "key19": "2rKbSwnuVNo24PtMD4eeyWRsYBSu13y3htk14pHwobMVm1t1Zi2WGZVkVCsiZzoQaw5YCMnbY8M7Xfs7rDeJjMLH",
  "key20": "3QZKVbK4VFeZCZ61MMDGuCnJZW5N9VD8zaoigUtsQu2ohh9rd3ANQyjAhXpscGUv7vQU73i6E27HNB14uuTqoJNN",
  "key21": "n4Akcnv2URZAYZPPh41TmTnxChvyzYZd3mMbDfZpkyqN4roeWwZWN3WRfgUgUqzQ5FX6NQ4hxYP8gNuCPJdmiND",
  "key22": "2QEAi5DRC8pTWyyENHHgsnavUsprTKRJbkw4M17vS7jyBbqxNMzeCs1V3wDzvQmeipCBfb2Psb5jDj2h9b1Mcpsb",
  "key23": "b7mEZtc3xSKbMzdwWzkBJWrAMwR9TaD2MAUbpVayWxeReJ5jx8nVCMgMMSnYbn5uz4rQLzoNgEhLqNEXBt5cJj8",
  "key24": "5W6Zt8bembgfJcYVBD9FeeHYGGjGSgxi896BSgudRyR1tubz4MBvAoA6fR7dCbwawovcrugqNHQLCBbSmvu2rEnM",
  "key25": "3GecbQPZc4CeneGNLbSPh4e2c9L14HmZrbmkbZVNpaTY5HmhrtGimQdsmM6hu7NVA2MHgkS7x7FH5EGgY2gnyDpg",
  "key26": "3fCePZKE2JWrAGzokPWaaefbet69ucKhGJGkMjGxBRQX4DHFD2cvTcUd1y6BCbBpT5UDYfvFjitWPHdJXnU7ztCb",
  "key27": "4DefyPaEqEFTWVz6h3P6srq9EFZq73LWv2fMUx3B8vQoaXpnrFVSntU3XNSyzfp7kRcspRnTWcp3JVHs367ww4c4",
  "key28": "5ekeeKAQTbfGtB8NWm52VVjCgGE1AugvkRJupXYiunefcTBNJyPr1e7acrhMQv9DZAmcaYgYvCZabgTFQmfgMuvJ",
  "key29": "324RM5H8gqvj2kcodhYnKuWYqRuFi1wbGfy9ndQJ38eyjkYrtQqfx33hWhNxv4U8pou4KNtzBdGVvnrrJkXifqPj",
  "key30": "gs4wZQQgDMvmzD2PiyvC91QNmSmuPZV8vVQLbSius3pzccVeZmFa6rKcm3RsYNj3RRNE212C4267DytoWCX87Q3",
  "key31": "4eRrGVXPfaUG6CNzLKeDTXsDTeyT7Go3NCusLCV15S2pFQ4B5W7KSZuFbfGaKkkwNnaij62bjUesWXDKD2Gz7tJY",
  "key32": "2dFzFNNijGNqDHbefKkn6wCPNCoqA43r1UgRsLmZeFHVwhTtbRdR68W28M7Mz7SzkykoApBqkBWWJgHwUfTnmVrp",
  "key33": "4M5y1HqTdVDT5Pj2eeEnGsqr9ZvMNbEws8ZNFqer7Qm8qdBLhoTi8vQo5Rey13ajVLUWfWP1N8bFNRn1LuFCp8Hu",
  "key34": "3frqKsimzwfJHX4J9LrSf2SvHpjGpzJDLk179RQa1VtMn3Z6q8BWTFZdxeEzK5BuruLKBHBy2EDi5zJpGo6jwxrF",
  "key35": "29JxSS9FYdaTyp1oshqRNRsi4mR9Q7p1PM3kyxD38S5aXFhfTgT12oLGXEZCjmP1PkZBcjQTrNvUGBYBCtJpP2Rb",
  "key36": "HTtaSvXS6tPnTLeTc4JtNqemvHAm3WBfXQbm3NuVEZkD86rGmBV2niQdXJVKwVgwv6Gf17iXaw2rGQ9uNpskBig",
  "key37": "3xjMMnRXkT8syTuBD77kqj7ZEqWYo7w8WWCemfRaax6rTaGEgaM3AMC7eNm4aVKNwt1A3zweMbiHf7XoHyzdctWA",
  "key38": "3tv9vYPNEuJ3EGYAZZAFbJQ81VHbLj9A3DTMsjqBNRuMxioxziyAHKbXBrmgvB8WfiHzjiqUAY2K4HqisfKJYsKu",
  "key39": "22UrdVeLAfc7Hto6PzTHCPBReWDQrZosQTjgGz3YxeNysJTj23WyU2qzdRvQbcR9x5JFrg6mApzs7DqvHBvWHmct",
  "key40": "5DE3DFi47oHoEgpFYWFXbQ33mKG6cqKKhXqE1qHMCKPaJ5oo7HAXKucPvDfj6USoNw8AckBHevAGJ5wHQU6Y6xLt",
  "key41": "4YtC4bfwgKvmq5HcyBTgVTXAqtrZ25ahJnSNWFmJpUCVRWupB3vHg1Pqjcqs7SqwgLj6L2hBQRgNMfEUptyY86hP",
  "key42": "WCHSbpreYKf7vJVG6YCp46Qf8QHgbEeqL1PWpX5igonkjQYzW3HQqPjx9JeeSfWEUcrvYqSojMAmxrgvt8Ux8B9"
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
