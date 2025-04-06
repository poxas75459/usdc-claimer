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
    "5KpZXD2sbUcPBuSFYzVyT3zotpPZSaN2t6Li8X7Nc8uy934zxYnXXuHkqixMCt5ScJG7a5wWUiSjM82jVckZmhE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iS5R25WF5dreXfTKsvDJfoUyjZ6MjMVSNxGQjfi7SjDzt6dJWxh2PhNvqU9sQSRNvwx4Bs83bE6q2Y7vFLvpiEh",
  "key1": "5Mih8dnGZik8tTu5gpvCt23JFRcqD5CyyxF8wWbwcb1TfQ58V8GHEdjNiUfHLvYQUgvUA3ktuQPVchM4vHuAQpsv",
  "key2": "2tAC3gGvPPxmGEFQoBzHEcJ42bQfGMcVubrbZ2RS7VvNrnvoem56imYcUj1tPH61Nbn4fjGXpV6uvmov8Qyy2bXe",
  "key3": "3y4v2LNxuSvxW4Zd5rCGuo2mS4EBr4dZMJJpBg8rTDDhKdjEA6WdqPEUxpzibeoFiYhXQzZQT8m4UqVA2GJ6x2Ls",
  "key4": "3EuVNRXB4JKqfEQxvE2GYKo9MbNoe4KMt7gnbn1ECDuwXKx19xjnKm11Ffq4S6BLbcdsVprqXr1FMac385DyfFS6",
  "key5": "UdrHaGYgdoTNh6Aezqq9HaQxsy7aQwud4dyNB9xVzK2t9FupxQLEGENdrWKAnVMM32Z9JBLQXCvyLqMRoodLFzx",
  "key6": "51T6BVgBBbsctnCNAtQyBKvdrpocpHeyojY8XojUY6jz3L4ZbaVgVZWnDSFa3Q6ACdthgFSUtRS81Nm1JMUCzZi5",
  "key7": "2dSRwc9XsSxdF3FBrEURthUDei8Fe9HnvGguNsm2TAcgRVaVTQqcAkGyyg5dvi1LWneDytQh6QtYrihyJnaJmjLn",
  "key8": "t2UJeFadjdmUwxxJvEJKnK6P9Cs7jdxBgSD5kfSnfTvsP4puqkG71HWCMNzzF1GhPtUrZ7Cz2sisd2nzo3unTaP",
  "key9": "41eVDgdQ6Axh1Apa9TmkLFo3ELRaPpmrat2QuivFHUHbwT8Zepy5A2NsJGrHQ25JdztWHHtey14fvqcq9aAW84uw",
  "key10": "5T2Tmfy45s7UbpGUfctUndqm4DxuYkt5Yb6txzhbqPViPMMFbFyYPVpCu72rfMZyzMu95wZb31MR1ti6NFp2h5WB",
  "key11": "4XWA8ZtPGwFHouVUjXG8xahEszr9FwBS8AUJWZPfQKoaD19erPJKBGwrA6fQHY5ni3xV1rsxL6RxceftZEhLmoRu",
  "key12": "6PAZzWCPnXgKgLiEnM7NXeGs4dWtUk6ZsBF2YkpHgquWyoyzvLwgZJRWqQtDSFNU9J2nRsKvg5TEdDma6WfksoZ",
  "key13": "3sdAGcw975xrRYhbieE2XkzMJ519DKN9gCA53gHAhcpLvM27wTdxBaf6j1fRGDtgQv4YngfDE7cqM5j8Q4wYKH3W",
  "key14": "122wPqyGrFhtwKDQSu8gLE8FS3CBSRhKPYZfjMrxJMTLGoHZwXoAoT6oievS7pxhz3BEn9UcyW696mEfYz189rwS",
  "key15": "5wHAcdr6yKosGrNXwk12n2BCP5VoM8uWzYDSVgN6a3HcKo1Cr9NcqToMdfPNWATivbQFn9EqJtqQAELVW3Qjbt5K",
  "key16": "2hhd4SCPQbS5ypPgkzxgxWafC6F2839AhEkUj5PW6GrK6MfeXdVYco4dKTMYGBAkQ8Bsm9AqncGeADhPGxzZjw2R",
  "key17": "3KNhSWHkmn4pXSsWv4TpMKKuLBW9hkcy54BoTfiR6nszYbK9N6fLAWrpno2RjUhmq78fhLMdpZ7odeVJbSdxrXEA",
  "key18": "4hv3i81qEij1eYbiGtBXr8ejjKyrtL6gPhuBEUTpEecpumgZDmSqLn6afmr3YYbnXkaqMBTQEd4wypeRGvmzdDUX",
  "key19": "466YYbU7N5wJXJYEJqQSKxiunMnYZ1rmUBFng31jvhSeWdFbj7ebbUzLcd64UKkF3o1gx8ZMtHNXzdXKQrnG1R3n",
  "key20": "J469UpbMkJjgkRhqVCaqEPhodFXL2Ve4GKwe7e33aeMGbCUiQY5rVD6cL3nP8sMR59Mj18ugmrTibvG5ao9ZsC2",
  "key21": "mKUTSk7b7xRnb9T9PyNqP9KDq1vVSqQkdEsZGjeZ7xfXcqz7t1VFa84pQ7powRCDLEXghmg1aJ4jUz7VAwjRBCT",
  "key22": "4k2MbkbASs5sUuaGdxG92Ld3SQCbSnq2Rzg2AgVWhdtuMFiUsLMye6znMRQWEjiD1TWpnZvb9ybh4VUGyZQCdRVS",
  "key23": "K81m6uzwqGF7HH4TB9eLxgo14Ax1Vut6kKKm11VVCg1JN8WUUyhukymYwgeJWMjFbxCEZp7WSe6K3EEanoXKhoq",
  "key24": "3gpas7qezCVKz8aUiRrvQsbRurz6Bo2pCs4dBmCx985wzH2BJDyDXkWgiHWALPrBKcdTfXT6UuuZJtzi1isBzGvP",
  "key25": "4NLMQf6nNXeLi3hZskKGhevVrAe2ERRK4SJSMXxiqXPWtEE7G8QVi4Mxd9xh8EW1ULpxhszNkY5LV2nM8APuFtGz",
  "key26": "4gZkExpHkYn8RTP4csbqnNrVpJFW4dYZAQG6u2z1pd3jmGLKBCzjbaJB9c3B3zijxN7FfAbNh2kfT1TvKZJ9iB94",
  "key27": "3ESCLEbWmogkBC4zzRrbKu5ADSmhm8PYqzRxvgDw7gbqJ6BRaH3qPMqXQYg4wcMbryubWCuf3jXQWCADVPNVHsMN",
  "key28": "5YnSTXEBfULWHASoX5pGZJSDDEzXojxyGm4y6ZdkCzgudhkfwt5CXkTikq3HQ9BQRyzJHQs3qa74nv1Cb4hvEiyD",
  "key29": "5njyETyPyt28nEWFxgDG23UxsNkEVd4JVzhhSXxXobELmXZnnZfJ1DbuB7ofdCAnL3NcT2VeqqTwAeoNKidN35L4",
  "key30": "2htR7psP9qghZBJXFn1JJHGwnZtzHoST9DDTSGBz3y8otrpAU6Wd6eJEerDrKw3GtdPYhrD1YMYXuTvUiPZqCtDv",
  "key31": "5D2QZ4R7duMbF88B3WjLedUbdso6YdZvFUgkszCri1jfdKrUsZ4ajZ6krBiAk8wjtKaCJtNwxei9TepmUS7bAVfW",
  "key32": "5JRrRdsYDWanFM2eiwLfQhWeQ7nhmT1fkm3164XxQymaKziv3WEkj33NGMd2VE5k8UvMJ44PR8BByRU52kV3b8tq",
  "key33": "2J2aY2K8ttSwed3tAkyZp4GeLvuUKCZDsb25KHzE5XnqmB2jGPVMPmAJaAUKtUPJ2aCwdykB8YUhHKCsLuYY5LN4",
  "key34": "2omb5QArsuPqvBwxwiwXhfvafhBNnZLt5TaHcQdLxZ6EmriXNdAajwdUeURPLZSecmBYpPqDF7GvwEc4UmjPRkUR",
  "key35": "qpoUZ3BYfn4w7JTdYDk4woyrtNcUiJeDG5k1jZVUm9PSXMqHmptavz9KrXHt4K5QdvSXC3r4Jy13ozdSi2Khxfo",
  "key36": "u8HM8FXeFA2jjY478xLjvFYqM8fZReGz9rvh63tVUZzTZSVpPHd4DyA36QAsp1kjektcDS2XGnoZeNyXSXNr28z",
  "key37": "62CL712CGifRkbezUK4dPgbprSNXiHn6mDXKGmS3zuVA5yXrJEMPDoNVCnMUAiC8TL3zGPBr9yrPxrU8QcUBQAae",
  "key38": "26noTzDAT26HrqBo4kHHmx7eSmDmcfUQXZMZUMQ4xmNPTZ1MLWb7MoYR3YStvqH6uVncWb5hXWvHVvrEps87wD43",
  "key39": "2QuZwT7Yrcc3toiRe9rVXuB5MX8BcgTr1MMNqk2ykpHeN2obVGhL5foMfHKtx5BFL5rKvk4fPgJpSm2qqpRqfyjt",
  "key40": "2B4NRDon6SmMraX1DUHADK5JpbM4YDKpXcHWzuZy3Ca9yNM2KeEmLjFAFfYKqBpb1wp2Q7Gw3dQ5NXy3uAfCTcCn",
  "key41": "5ERmMP4uZoN3gRqSnjT7S5dMW15XxaAgHra5SbL4Pkh6qusfZPyVDweRvGVkaBjBCJk7oWfGEgtU8cAC4gra63BX",
  "key42": "3q8inadwGwcJQKCVKYRnNzuvLYFULgzPNKhYBxGSpMdUgy5a4rpMg7T8EG3GieNViy478SZNeHkw66BTQR9iT4BV",
  "key43": "3qVX7JwxYRTnHccWRrWiXGtAPSCV6vsumbxsgoHyAfpwiwoFeZvasETf7cxLTE3CKUpQWEuaTnZhnhrCK15bCbG2",
  "key44": "U3dYGqKnAxEU2Ew4GCeVCsJEyWEDtK4QxsUytzoEFCER5oXVGwzu5mJuZameDjcGBMXN7DjjLEbHnt3trh1WGQ3",
  "key45": "5tDuUbWMohG3KD69vNPDHRRd428UJSXFSPUAaXydqKiQbAea2TkKsUzvQMRkVYb6eRZH2R7Qd6bueiivs8n8MmhR",
  "key46": "oyBfDCHLHXaDPnqF66Pi1ihkgMyEep42aYbbh8o7KMtNXsmuHCnJPCPqTt3GaftRsvUriG4XT5vHp3aySv2HZUA",
  "key47": "5jRThVxcpvc22PXjePoKdavemsekMYCKZVSmLndXttEHqJFVPQUa4QTvUVfXBFVrhy56mgYjtxjHYbpXvUcLVTV",
  "key48": "3FfsuMGU2hJ8oM2sVeFX9DRLv9beDWbjS2MovKu8GCUiC5Zesg5XiYm1NZ4Qx2kqb1ZMHbF6BwyXSJMwjxxjyaZB",
  "key49": "5vnNrDMiceQSbafuxZXTJ9xpYDHbWR9Vp7xzDbKAk5hBQvTc8m4sL15iqCv4WkYzor6e29rLCRrzhNPacpZ54AGy"
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
