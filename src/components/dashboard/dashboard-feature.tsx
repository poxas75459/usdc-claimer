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
    "3XX9HeXjFcaRQzixtPuzgt9pnh14DNqtXxB3sNsZEy3tE89P4L4KLkpLvXtU45E9CoEkTJ5UqUGXNPSvkj6Xnt74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kk7ARQmpoj8LxqWB9xShq1DFt6tPafArQuCxCuVqaebYWuVtvnzzSuz3BJLgYN3PzGM7v92sepU2bEKPd6zNY9e",
  "key1": "516bYa8TnbBSAYrzcKSoYmMdGKbEqGtsWX7MqWAggTqv7tf7uQBfe1PkYHcguz4wKs2MSy9uN82jp2fTfZ8ugJeF",
  "key2": "35JkBNjjh9cMnDfjqhuPkD4JVc2NRD32KA6Nyk6pmjipoHdZZEVYYtwxwmY3EGyfSPSVy9JT4VYFH13yQyvfCFXC",
  "key3": "4Te1TVEb97eU2tPEkSwA8czyRtUUzwE4criba5P9wTc29vrGgq4hoPgHwCtmn5aoMBVarHsZ7wP1FFy2TjeyZYk5",
  "key4": "3vuLhKJ9vJQPD8eR4y7ZjxGap8Sf7pc24LT9xixMF8rNjBQaVZSr3jBKH3h2EN4ymS6YnptiiGuvmRaXF6vcnxvx",
  "key5": "bE366DJ1nrJaiXXVDwqyPtxavoZoZ8jWJH6ukzWKAZCTwgPQMxGTTQcyxoTsytw5sbC3K7V2MWGnh8BzJd3JYtY",
  "key6": "2L4fzXY2sVzbc4T1TLUqB5nBbp5twt8AfEDP3MFhh9uEh1f7SGaj9AJJfzojLuqyPd4kgMNAAmqnGQpW23wtyXKk",
  "key7": "ZWQWcxk5sK91yqtKoxoM3gEGtiGdTikGPgWYmCQynXmsbkeoYjTuGBxATyynphMsDpfPYqHCgPX4Ex37WZufFu7",
  "key8": "LHvozLhcPTUh82vepHAcVVBVuCZ76MVuAePx9zrmnGPkxPEmJn5hcy7gM8crzwDiGhKQGNd8zHtnc5ybYGX1Cf4",
  "key9": "G2qG5wVtZfnEY6t4XzWzicAgq63LViP6e83oTzomKYG3RttcEgZhaGYrZEhk7YHGTNaT8Y3kVGpzg3e1eZwEvvp",
  "key10": "fZ2L7TxsRtxBUR6X8ct3ECftL51cihbbou56hvQq5oZwKE88iHEk6vKnWFGodDEr6RL8Qpgy2hsbGeDZZhgEeSU",
  "key11": "65K8AcCHRtWyukhQNL41W2bhPkek4N6J2NXWZStYy7BEgjr3YSgc6TXGoaHmxV42WbHyQQhxqfpmsuBM5AKNgrSu",
  "key12": "4TPFYGQ2gy1ntmDuNDbWTPAPWGGhEVR3D6SJaqPzKzc7RmXixuPDG2kjB7crvD3TTJZnTa23LiVdpkD3YvaypEaG",
  "key13": "5mVAmhodvmTNzVynAXZ34GM8KsHtyuxxHzK3yoGSRNLMYd41i3etUdYChacH49tTcKuZKEbQYecDgGAzLudgvCt3",
  "key14": "5hadgjrvjqk8twWu7TYqHTH5XYBUEPYZhEK1j1maeqV7xXHPZUZ3JXcc1uT78jbNywmNjf9H7Fs7gMapuyaTeQmT",
  "key15": "2qTrNCSUG8iNCNFyTpJAjiUxWFnoR4vJYXrS61ymZwd4cMpcckUSfEwnGdWpEYXhKxyRGkZxXo6wuxYXC9diKXCX",
  "key16": "4FK4eDfomfDqVofv6WCTZhzQGZEkfhqYRTrGKt7vbZEfV78A7ghen2Dc3ZLzEaYgmDMtM55sgM3DBudmEVxRYN2v",
  "key17": "2X4JwinSQxx1Tucn8iDBMToPD7PnWZnWgRiyuQ6p7DPorXXUUppwVQKvsdUqY2rTYn3DmHBK7eaYhVGTN5WQytQE",
  "key18": "ugwaUqQ3BBq7M8XRwZSP4q9E48dsfsZffWJXvsESWktAZpNSFMr1XCMsdEWi1urqwme6h6Ew5PGTJeAGM4gzim2",
  "key19": "RfbJVYrhrfXdvCdzLsVPRHvDHgyec8ZqBExkWpio5XA9oTUnJrxuwJqNupD1B3sSKkeFNvynmcu5wtNUxoEwRte",
  "key20": "2FCKFCNwkt5Rg1FMGdpwW3r9mqcdzgkfKEH2NUDKkkyK5NwYzfRJw3cqKxvurLM3NPYi5biBwdTvS9rHngiQv7ys",
  "key21": "3P5Hf7CdWynTNAFvVpuYrNMtzSVycyo62yE74zEseczuKN3NMT8ufUCDjnW8gNNHDq1rHVkS8pa8hEeTPNzGTqpP",
  "key22": "boG7fu5Qk6jgaCFKeHsrqjrkAYKj1g8RxXPXqH9ZeiWGy9rFeBoxPpGKeL8CV9upz1syeu7nWSXxfH7Du9aTKRg",
  "key23": "2Ff9iaSR1YbiMEtx16sQVnMWLKJYu565GLNhbEM3XUiioKNsTvie5emAQ2cS6uFq4TPvdxW4vY635UvgmTMMN2Z2",
  "key24": "vcfCPuukC95UrR4S54PSCSsZZf6Drwt8w8ZXr2jxktBvbKnYB2M55dDqBbUCdon2Tz91j2bHbPn5mP8YsogYAVu",
  "key25": "WYpir4bLbJ1T8d2mDxGCWEEVtqwzSb6hngqLjSLu6PWyFSbNg8deaKuPvLXxoXmqQ6o4ZuyMZXebhSuXSjMU3Cq",
  "key26": "Lv7AAVBG6YSBVQR5PPK4EDY9gPywHWZsFQZ3WeMTcvhpkME4pWdxfp5VxXJ3ZNqvUtVsD8RD3CYr6o68eSmxnTB",
  "key27": "5a1k7o6YJyfsJDH5ZmTBJZmkzyK9Zy25XDCakYeBXN7gMTAEArUBqGo51txLAoRhtuSwiTWisFQJKhewDF6S3oMs",
  "key28": "4KDfmdkynDhNnjhvYza63SjQ2dh9mobaCVnRuGvme6UNKfBwe9FMZK7RRy2RK5VZRPZb5Qo3FFVEy1hWp34sKe67",
  "key29": "4W8FJ5LuoQ8ZCwbzqsvWpTHUv9M8E9k8BWEgptYJiRZQStVFxBmRT4jNAMRCrgBj8T4NTLYVRwS5YgzfKYnuPs8w",
  "key30": "PR3yV4hVzL8XfinKwhNgVMQM3RwsdsZUyjXRL4z49u5ECvxNg5VazuyH8C5gxjE1Dag2vdYwNaKYkgqFqjUPqWr",
  "key31": "4v59db4atWEN3gzUfkf1gNwjwEAGyNrhaXYpiCF8xZRRDVkqvF55KQt41fot6zShwudqSqUEMdRdanyVsXymgXkZ",
  "key32": "nehxSGvG85aXNxTuNskDUJ1Be7je1EZ3awYTSCqbvPomNz2DubSF6ET8dU9fGV3Q6HjEnAfQquZpcFntjZpvtzq",
  "key33": "3JfRCTcYmjT431FXZzthUD68zQYk5qTBJBCFkaE8kVTVxRUG3VkeWeRgKNE3JuaQCXJFmhmPdxunBecgXHHtYkaV",
  "key34": "uhfWoBA59HkfnBr84XAGrpAGtsi2j7KDvK46Ef5jxidv32uXjBpJCgkrwqd9cr7STCBTXgVahFF6e6ekyG1QP2U",
  "key35": "2jtNxJpgjNzKHq1EP4eS8RNqmRXvAeuEGY1zBWB3MmZezJxc2Q4nBV5BEYnU1AwruddMi5nd9ZKgGVWuLsDkZtyU",
  "key36": "41kz2z4V8hyqkZVxxs1LQbxX1EARFu2k98hX6xKeanHjBr1Wnmm7VQ5DqUhuzBUV7iWMvoYA749ZjYe2i2Vfvqtq",
  "key37": "3c53fdfAheAmyCzxEWsn5ArGFB7kmC4QERSrpbcibM69WTA9BRjUASS7AGrZ5CgYnz4hD4mu1zLx1bjtU4mw5d6T",
  "key38": "B8w5ovuCFrDfrQebEhpnUbeQgkLurZ4dZEsxnB5RzDEEProVNm6k1Bzsuwdski54dq13FhrSuHqtTT5a3syUFhh",
  "key39": "4hjhGiX5Snie4HmavMmN97Quo6UbeBnjG1wMSc4NJ3yBtiT1Mr74wHmk2hZ9Jj5Zp8o5zd2SKeQysyjLB6YJEXvH",
  "key40": "5GAC2Qo3jSbPU7Y4e5MPXktN8knX6cpFSTGLzzXreAHcbUTTEeydgeyxakQe3vkq9JB7sFUQ2Ej89Tf5ZjQspCcS",
  "key41": "2jGpnuNPN7nvCSE1MCBuLRBxuUGF7oCJiE14kmRDpBFpQd82wqTSepy2cw3sZpC2zfsBuM1ijdfJ8EejgzoqMRur",
  "key42": "28BDUTwmGfCrBJizDrezTQEhiNMtfBRH8Mq2z4XiMKCh7R3zHh3ZT57iSHFxa1dJBRtYZqVfr7df92dDAyDoFVTi",
  "key43": "3QEXfLD4nvio2XEbhoCdLqu3KESraojwCQeekEwfkc3JRbbVgYpXwGAPhSyYdnpNEnh663joqSL8RaF6c7iPsBck",
  "key44": "5vc2fY3v2LzFgxtGrQaFpNLMCy5ajHgnkuxdXY2iUgLeWTLwafx86eNgcbcnYrXaqQPY5aZtVc8qewubb34FN8c9",
  "key45": "5qgSkVaDkWq1rsDvv2fVGLCwUfsWfK2K99ky6F9qrpR5gPtd3XwRLkETA7jpTxra31TgDt1MJv8wdNT7jmxMcuE7"
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
