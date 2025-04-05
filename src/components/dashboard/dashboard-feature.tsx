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
    "4kkzhgM7SHnuWHqNEWLJPVzgSnQ2Sdm51Vi2ZxEf54qWuPVwVB3Q5iSS4PH4WdBhAMYX9kP1dd7EXijsZ8RTAD7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WkWHUx2WubWTEo8Y65b9T2PaKsNQR81Sex8VkxCn6bfArAYzfqNZDzBfLTFUYHWoQuWLm99wdri3KZdx3sX7nSq",
  "key1": "44eTcqYcBiFjuuSxmv6dWxYP3BQz2rXtXxSuFunCNeGfx7dySKpJAkwocAeyj9Q5GALYjJxaMVKJtv3As16e7gZE",
  "key2": "5Yo75xrk9w6dBDubqKss2yMoxnYFuq6HFmy5VcFJPPaezK6XyKqRSWSGrAnspFx458844QpNscY5atPtM5mfWL9E",
  "key3": "3QvJBRZ2y6RFwQzQyfuo6aJZBf9PFsYSx1pD5bnYTuRFrGvAYHtm5NMLJmz1PUFSZcfSW1Y1A1QTgLfi8cF3Ztfx",
  "key4": "5iSxcUBE1jF6FgJLDsgg2JnMxzgLcHuPt8Dwd9WASJBHXswU5PVtwRCc5opWzb8713NYgn8W3sYPqmnm5hGdcToo",
  "key5": "QNBpatoSbMttrMAFwcYqaiQxeNPnHuPEiQTWGXe1Eiiy6MEfCozx5gLnNhMexyKk3ZSwE7dabxcc7y1fsX3isgS",
  "key6": "4eMsjZdBi6VC9AoNsymkSGnVQih4UGGZeNhp3nxXmQnGy8jvmUTjgjLREsyT1HhN7siVMYgBs9AxZi9H9bKacMMw",
  "key7": "21VXLLYzJonj2DsQThpVpSHxFgkQwovQqraJBH2xTYXfo3zL4hR4Z9wRXtiGCsJZ8VZxQ5i76wzPQYrRUrafoBtf",
  "key8": "2HpK3E3R1cjS4vxpvAqMjELToEt2GBFAYT2rXxrH45zBBPPbkhSxj96Fm24PzqrZduF7ZKFt3QQE4t1jYVY6G5SQ",
  "key9": "2vwzv8YJfPEFwPtB1C2cNBamsV77jdvopeMxSgMJfcPUQZBXmkUfyWaRWeKkxyEjARa1E8B6izLJycz5HPhjwQHo",
  "key10": "3trKjTh2UqJLcnykrFdj7rMUwaW1LkQFQSBnanCBKeWWCv3bu8E9sE2DXbtmqncMj3VvuUUescioXDQmL9BMxpDv",
  "key11": "4MGHRKTSwbxJ2UNX2rn6qcArDHaz9JT5AeveGkbTcbvSgW6rRrSGnZt9BgyLqrYtcbNtioDntZdyTpDXddbSaii9",
  "key12": "2MTHcsFbC55t3uGFxEjAgkA7q7RzbzDJZ7tJbEvZo6FvySuEwXaVuLRV1jEm13GVcWExakuL2Tb1wTfBzevNTRy1",
  "key13": "3juMDwRhavt5dWsz2cS1edi44T9hUvt9gyEYu5VyP727rFFWRyVz6aHhKKgc6ohszKGS7RRoxiCivkme2zMKLmsA",
  "key14": "3N85koRPHV8t6FmSaRjwHcFNV1nVMtVoLvgbKSTRsR1i9i1Jf5AMDdzpurbuSQQRcXVtPy8nVZn2RACJUHZcfaJz",
  "key15": "5DmtYzc2jvNBTkfL2DRNGBEcJ3HvkjnoEMDFRyGXbPgNPxUPrnKj1Bd5RVR9VgH7hbRXVdWvfmRCeqc3ctbaT7xN",
  "key16": "3vmFezNHJ2LVBVL9BjLWdk9nnaeZ42WV1nQLNqLPe9FbkZm24jmP8NyzEk5XnS5oMZYhqH6EXsDVBe7NST6DFabL",
  "key17": "JE11RsgV8BXCfJavKCzajm9BtXe3ampSEUjSQLfXwNVwbHyJSD9VFzvzvmUwXzBFpvttMo7CcYedxJhZAiJDcXK",
  "key18": "3SWvkTje6gMpgxZWjM3edXeoHDgnhj5u9bvA8VvCA2dJHzE6yngnfzgPchcvEBK1a4Esi6qF2Vx7PotNte3BRo93",
  "key19": "e2GeAabGhi1Pk3gmvAPkyrjdHtjiHD5mhj4YsLjYWHyKgTYeen8PzbEBKKHSPmE675EX5GCDnN38KDCVxy3EKKs",
  "key20": "3QpZ29eC62GUjky53AjxocKAbHWjZn1rR9ne4QmGkZUvwJyKT4Rw6YSxjHxHxvxT6vcD7PhgpkaiyeCg6rKTK7ZD",
  "key21": "4tg44P9bpSQbXvwPSPgieFuXKhHbCMmarV9MUSMoNeoNJeB5GfVR5CtdMZsVHF9bUaEv3P2gTn97MVJ7HJamtksv",
  "key22": "22pwZTJtEFDN7DaEe2C3Qp2yfucsmWPD1Ee7Sqvv8A4xamieJWQ3BYFaEQoeqdzVC1izbzSjwkvZ3m9rNRX49o2s",
  "key23": "axETrsGv3d8jCzRej3DHcHqFkEbvFfMh37RBWMwBhpuN7xJsCjmiU5Bs7eAvxS3ppVAsyHxS7fMvbPbyH9nWhHh",
  "key24": "4nETzyS4Ymzef4e4ckV3BywaDmsM3dRUC9cBsdS6FX14sw7NZvRwfsVMhh5E1gYaSguekTdaDxBTNwdZxwbqYGPu",
  "key25": "4H7XZqho4gVPid63ozdsTGacfM461v2DXV5bRDJ6hvMRNiCcMfHSAawWdpytsoe7qN5V9pRjDniRus4xYbzXnidM",
  "key26": "3qExecyY3x8y5AxWb3GT6fryCF2XjJsTNa52Edn3B2pyHPHMGQSwskQRskbJnht59rm5FASbmHptdJrvreQLDBgc",
  "key27": "65MUnFQWwCaEaBdFzGx3iSSQGCmWMaq6LyZzsVu6cqkrio1ShUTgALC3f8LnPB8BGHqk3YHwxDZAbWvgZj4zXbKE",
  "key28": "4ARU3YLJX7tW8mASiuRmZoEapJ1vy2XaDV7Djcq3cu4gopQwPuNpXK8xnFyWMYN8oBZhwmYpBKwThSpmMNCcgAa",
  "key29": "4oowX4oZn38vVrFbU5DLq5Jr8C8harQ73HyYLve6TiLPYQkS8fmgKSacwgFm8nqmvyA9Vq45jLEbhVSZw4uf81zZ",
  "key30": "468UJ81HjCpj4mYfKedEEv8ESicqHrMc8JY1xPGDZsijirRumUfPp7jMHy8Dcb9c2dGWauvyRJiDBBKrvckeZ699",
  "key31": "29bKLFMhTbAXG6oSYjK9UBw9Y54jG27BaGM2sXKbHFfEWjDkakpUhzATBu9Ww24dZg9PM6VQGzA7pf2MkG1FXMT1",
  "key32": "2s5oEFJG7FjpMs4gYr239DjuoJ5aSLR4jSjTp2RHsdKqqy733TdRTNyVmehiivYUuhVTEzj9h6Yn3gnEnnGmrsfJ",
  "key33": "fp5FWaLxVbmpwZbNCddXLmAww8DrJWXwyHpf6JikLY2cEoZSrUZ9PtewbqqKgxcC3J7ptF1E5rb4eaTYuzeCp5Q",
  "key34": "ykM7j4VE7DPAJD8wFYbDkXwFzTfRdLBkNMCziHSupo6Mo3x17YdPaRJ83gZWom6mbwJJZqn3CyiWRwZoS8JCnxz",
  "key35": "4MJvhFwBn8Dz9J6zShG8srCdroMso12f9a3MvnrRZMR5YMhrURC6jyfmjCTEwAdnVfyWBdqx5MEnxngC5F9jneoR",
  "key36": "tK9iLWAGW5EhVyrpufP6VNALhHE4zS24ezaiwChoyWuGcQdTZHx52CbPQym8UCQaKjF1a3LSbcsmMDPvZwa2bzw",
  "key37": "28Y4u79cBfEYKHvLUFGT88MRbKeoaNwFN38DQ5vaN3k1y8zWi8ABdh5JRTcQYcihK4mgRGrNoLYK28Jj71MFjgiB"
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
