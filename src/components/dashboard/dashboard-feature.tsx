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
    "57krJGXZ1VZ6HBFduxuxxryeENLYnU6BXmSKjNYND9JEhTCE7imMii5hCL5VvLELvbUWu4JdbMb8GGxqfRZfUFu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AAiMWBiP2gEF41mKJxYx6XnEjMfF8EitACy5t5ZoXZBiAvET1aQRrAeYLwf9aiVpWPqXQfwGh14Sy7JMuQGWtSu",
  "key1": "Vk8FLa2mGT6JneJRh4ij39YCkshUTG9tCxJeKs6beBk79ZDmuUZUZj9YpJh2rmKkYriVk3hEyBxhyLLMYrUqdve",
  "key2": "25QpNChS3uJempUpfYCaaJ2jeVXxwsarUpJST93kgo1h3tcZyLf9t45uhndVGemvxEdMM7ZB5svxypriBFwqn2rc",
  "key3": "ihKBdDU4CejyDN8NnKM2w5TDAtS3VBTwKj5ucVRrkABkiMKnxpsgHqee9GautjKHRz2uAwo47CvJHZ7c6wvTUd3",
  "key4": "xiuGcqn8imkDyDQcRf4ypbQcCT7u7rrzpKaHHAmPqDK6CLpu9aeSr7oB9dWDoSzS9W94sTUdmUCLyQW4MuriPMd",
  "key5": "5oRoSabgq2ewYP4xGUtAmVey9hH6aRFdqVKjCVKcnYxMp1vQPRDaj4drjrv1SEHK5ejmHdip4rfAfG3VPUZ34aDn",
  "key6": "2jTv2c43DbscbLtHAFthrVnk2bBPhgQV64WQ5Frhwi2CuMQimuPuskbpMapFfCZ1rGjWZDgo2XfGAQNPo9NY8dTj",
  "key7": "4NHYkwQ6xeJ1hT1KFGZ4xaX9ZeF9ARCjj7Mp6hpzXi6XyNmybkrggyMnMRFYSocHjAAnmY5yiSviLx36hwmZm2ae",
  "key8": "54h8A5MNcKWArADJprPN7FhwVzdqHfvQTnFXTvzLwouqzyET514hXEUBGVtVGiuCYfrdyHLttwJ3PwVr8bwkNXth",
  "key9": "5EopYVqdLEwgX4vpcusj3uHGpC5EnWqj2y5tZrSfnSvTw7P3ifXyqFQ28LJqPkyrzi2kg1a3X7mt43ARRc3BDBX5",
  "key10": "53Es5fibcYrtuGNu52X8MPN32VxdiFCMDMFZ6TvCkqBi6EBy44vdgiXRaMEj967foAwGD1Cy7Q6sSvnRxbZ2SLt8",
  "key11": "5HdF8zqAMRkwYUDZ8Az2cZX2bdGWFo5DXZdHJ4o18vrKimGaAtBNSyvQfPejSxFEafYvsm9j4JrZUpo5shZtGGAD",
  "key12": "2gHR9ET7nUXvqyL4jBkvTmt4XVapyGE7eou8BwEuXT8C51LYPNb4JCKcmP3VMfoU1cxNdq2uPvgAt3YHjSXwo29d",
  "key13": "274QHd7Ngrxn2prC8DZG7kdkHgbKEYuRLy6Psk77HfhLLvywrBztAs1QNCBiyBdftibTas7gzfrFkWJGhKFqdE6D",
  "key14": "2GsJwUssAKJgWRB3AyTHq2V3SznvLVWDhk6YQGnnioAGhtcdN1fMoHco2mhh1RhjBZtameCbmfAXFKK2TeZ5EMtb",
  "key15": "4bpndZDEfBiN2qshXKCG6uPKCHmKWLAZdYB7JNi6CYiJke4KSd6dgyW38CS6NtnysN8YG8NVYsyvRDbiQv6heHFv",
  "key16": "2MZVCXrbFSb3rqd3GAXwACj9hC3WhHbiHHD3jFVWheE3UYoEbLqAp49PTwe1JyYEimuWsXM9YpLXxyQWzGZEiw76",
  "key17": "GvP9JnvrA8zT5o7ow9R3YnYYAFrem1nbgLRbntzAZuTFWwiTfv5oD3VfaKEgXoYYFPEf9K6a36e47QmbSFZ7ZZR",
  "key18": "KLRhqVv8GadkeQCpoKZerki74ZrDAZ39yMHyLMejYLhMVPfEBsDP5XhFNZvz31vj2mJzWcYQ6PPU668QDosJDCb",
  "key19": "5bXdhcMxhJNcq8o4HkVjavw9ioGU5kPCCxRW8hGXjJ2ALYFYyAsCVX3wLcdLC3tNECYeKcSGEnLaJZJP9Hf274nr",
  "key20": "5zAAPo2Xch4Qr81rfsxnd4qmGhJGX4CzahtcRBd2MRGdPaKMg1iG4dmAMZUdmy5fJiUSEMKhzz3fNi4uENwRbeuZ",
  "key21": "5hobYfd87zjm5197yYAZ21qTG8XZ4nRBGQsL47Lk3jTr3S28RzeoaF1eTR2TH6eiCLwbFUJjsevtv5ZcBSWq79Bo",
  "key22": "4dVNtv9SE8izKGzeiHmzuVtbEj15mqatnTboiocUFbnXiokBWCy9PJunPGT5oj6t6FQHwir9YQcJaM19bZZ2Efqh",
  "key23": "5L1jBq4RgLiXzEPs9WU9rw7GCB2V2nJgvSCKQo7RWmx736eKCg225BgWzchocjYQ8kVAsN1C3nF7kRBy2XoAD7Gx",
  "key24": "2FcjG9RLXEU2e6XwAwqcgJf9GkXQphmHsQzMnjm3bXVk4HNtr88nYxuVwUPugWgYCL4JFLTauLdP2t2XLPkJqMpw",
  "key25": "39uaM9MfRJPQexU25Nh49PfJYnXuXEeJJFma2fngyKSrEzdeDRzqW9pYNGdcuZo8EoC4XCThZcPSqC3XZBMaN6KH",
  "key26": "EjfCEh2JA7ccPtctrmUDNwM1SiwFQBC7JaihfVbhAwAtRDD4xKW7UufA52Rx5vgX48CPcsPuc7LCvYFEnYNXRsj",
  "key27": "2cJRPm8gDb6FFCEJKoriT5qwQY5qPX427YFm62S8pkSbFACrHd7d3jEJsqQz2r1kpDAj9AfQUUZuHx9YdKhatkoo",
  "key28": "5NpnvfBzXJFMomRA6QB72XWikxnDDXQ3VJ52Fe1SXrZeL25uZQtgUqjTBTJfxZ1RbPWu81SjM8FcSXv9qXFUdzo4",
  "key29": "5DLmKypmgaCSeZdVCDb2meP41dXDHrGAeTd43RP58e6CqvsCRjWsurqT33NQqvrXCLGDBbZzjbZMkveb2HYfLyEw",
  "key30": "5YTPXnbSLKnrJMAZVwSZh66oP8nhUg4xVN9zKNir8iwki4AgDFrUjqMKqihtnJu2BsjMdMWhULNuTaU2724RJYTb",
  "key31": "C74qonhJwESgzy54yvh7ASHRaiRZLzZjjYZpk5stRLtR7yzHmXH2kksN4Kwu78bXGhjb1ehYAG8WLWprdCz6CC5",
  "key32": "e5uiukw6oTQeibCikdxSkwDxqqSCqDZTKGgDAYmUvvSfyMJRJC8pF2McrxZaLhFPncMkVeNThwB4ZqFnsZRGP5Y",
  "key33": "3B4YkekWKkx8HMrMs8DgPNyPTUhhNQQCVu525BPCMKd7vrLUoPHcPh6HWgu1ZkcjE5rDxbejyXTF3R6LgUVC8C8L",
  "key34": "57ibjW1dMw9VMMBnWQRz3NBC9izDaApnShGhc1VMM5LzgujiyzcPxvMJ9zSvSA3qMTcVz2zkaosZtZXjnnrWLdN5",
  "key35": "3NkAS815QmMy5QVquTZfdy2WncZ2DTXrY5RmoAuE2hCpBKz8vXDBntNjR18ZHpxq8LxED8uWJsqs3fRRs2uxuG9u",
  "key36": "np87Lz2jwaLP1GRCVmkVKm451SvyA1mQBzmARcGF7uLTJQdv5P4QSPMhbfSGBeb2inKn6X9TE17FEmjXF92ETNN",
  "key37": "5zfn8TdeTGQxJNgHBfP5JYWnEA2ePy7PoMqNfR6MCr9RTQRJ88cmqosTg4GyB8dLtQhmCxZzSbEnU1Ha4c7kXq9",
  "key38": "pQhwp1qFEKJDuUkcxCzzAmZCA8oasaYsKhizSZvMzYJSVF8CCpNNfKc6tR7816y8gcJzscbGNq1dUEKPKjBdhjU",
  "key39": "3c3CGZ74ntxNYfCUeLcM22eDVeqWDNXdexKDLE6gJwiSfnPjuq6zhM5Futx7YMzGjA3L24o8oK2pQfHdJ8iB6rc9",
  "key40": "5HpmNCFFeSW6hzJnCZqimLTtB36aVMEeXdxYqdo7XrebWzAhesBUncFJnxhaufi1iY4KCrTyysTTsF3MkxVuQwuH",
  "key41": "54L9mCQ2S8tTrKhsk8dyybt2W8vmJzTciyvGqG3XsRzdzrHrqk7ewzzyk5cV4yS3XZ4YgbMvSVKCH3j2MXEC5wqk",
  "key42": "4JPLDypmxb72QWfGKc5MHbGojNS4imy8zfweivswf6e6wzcibB7MDSU9XQgW2wSSGfFMVyTV92TbHZgHnwu2JJDk",
  "key43": "56yCGotPPt2SJhZVxxuHdtW3Q5p6ULtdfdSd3jmYAGwFLQWZQNJZwkAHkKNAYbR3sDPxQhyeT2ti2rytwykQ7C3m",
  "key44": "QnV23CVWjS1KE73VY8ckcUzMgK2DMsjGbgqFCjTNuhgV4EAx2jvEyuPMTQvwcGFLHFL97sjeva4fXJL28QXNxtY",
  "key45": "2v3Ez3mX12xgrRAdB33hDdn8fKx9vvh6XkiGSYEJLsRBU3Mjr4qAuwvMifqqnUomLb6oxj6H2ZHDmbJK7umQAhF",
  "key46": "5EX6rSNMrx7ErzZuHrCbqM16bFTRjXWuBhpTApsbNSFHaKbTpLxLHLhzfRaKek7GcJCpGmE6Dmz7rgvgNsrp1ZRf",
  "key47": "2Ccz2XwHvZ2FYg8EBMBEGSPvDjyhhxRyuJRUfwbHy1rtw49iwZ9n2CY3yWdxtUPMxNcU9uCnzAfQHqbqd96Uifr8",
  "key48": "UzeXYedgyw47BVm1qNcyexMy29WoXe9bwgTqrfd52DB9LNKaPZgx4HPfiDyuzevFMjRRmpanpoFBDQ7b9ZbBnkU",
  "key49": "2j1n89TtuQ6DPDxUpyXhs37q2NBeoSUjsUU97voyuLBcWmyVBmKucRkxxw3xjGhj3xrsYGJUmfoo4Hbz1A9XSqGH"
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
