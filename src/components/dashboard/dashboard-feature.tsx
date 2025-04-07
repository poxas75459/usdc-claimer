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
    "62M62TMoRoAfB6kJojqWnieVxGpWq9uk8mjRrm91f1wfAh4HgyBWuBE3NSbHmpQrprQfa5Y3C8DZQCrs5DVrhyZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37372CNgcssEw2F8sMK5WWDHHosbWxiccxxC5gqv3Z6nwhrLLiqDjFAJmPk3yTjFHkHu2iAn3e2AntwRXcKquSBV",
  "key1": "3mkH1RXnqB1m6Y6oeekxpZiKSxeXNohMzXTnF2sszxXyi7E9NWNYKTPgogPPwRPJNajfXZi2atvTTJR4qiSKtAXB",
  "key2": "21GoVybLsSeU5EfNGkQBwE99YNpdVQ4hPgfkmCHn88wcTXERuqVvbsgaBLvNZPM3fXw3wmeYoBCYoh5vg9H8E9zq",
  "key3": "4dNAJ8LjFMsuckXrEmxtiqDnKcon4AhuNrnxgWdW94Z9RGbGevjW1j2rCagHXfGWf7GLaZPfeVNWJBUfLqNgpkt6",
  "key4": "58bm4Y7wvqQmAAZ8x5K13EVWvxL28JyMoWahbhWg5Yc8FcbxqJygBWYi5TaARQbrNWNoktUJVN9iTKpVHMb1NC1a",
  "key5": "HgRxviHE8Bwxi75qCTTnqUVKSenVC1tmmBZWNNw5jd7w8G6JyhSrvGAo3s994hVR8U5XdrT7qREtVhiRT5dfYt3",
  "key6": "5dkzykHcxKBhEiiq4kMa4mKs9TSaUrCs6Pbkcp3p1oB2ok3vcw1ym4NLgv473qiC5UtpUeya3NbE4ri7BzcpMsEG",
  "key7": "2M3TbDYu1k7ohhn65rEYaTYWat4TuDqfa2evK7vULE7xkL2LBx2hGnqex9htBHBsQ2HBcAm3uF9KVT8Db32sjioE",
  "key8": "4Wsedo3Lc5D2sd7VYcTPAGQGSFZ54buSerQZCZqDB8PxPZwSo26Amdg2siWvzrfXtCzSqfxWTTBNTACCXYnNiuiV",
  "key9": "SNcESQe54Yqbc9Ci1iFwhkwXySokZXMiaMzfV9eSW3b2c9PFy5GRQS288VkbDtoWyxpQLetvyeXBADnXccGU7Ms",
  "key10": "2dWkKtAKFW3ZuWHXgqMUYmXNNVVNsR7nVStd8YPLWfVyBTqJcRpyTJPpzwfmZ6kEZQKJzeSWWNCDjAdGRS8A4y2s",
  "key11": "3B8UgzqgDvM7sPperdg8JF44cegiNG3EBLamPjbSGECynKRbpWpDFoMKJn5WmuEh39dxJrYp4Y69j4QwZCiznjhJ",
  "key12": "51y35ootUYZHrXS8MRAjnHd3NpguSJaiYudcw27eLvZqwjLSz8CkhQM498vkgYWHQSyiKoNSFxiKDUc6N5Mux6HS",
  "key13": "2gYGoJYag8FTTRSpPDqgBdR71ZZNdu1PLkT1ExRqLJt1L6wLyBHam2utcJ8xEt7tohHBBCQ3BvbVyPW9uhnabsJS",
  "key14": "3wLhFj3ppW3wr8PVDARmmpcTZWk1f3Mhz3T3JA6GapyrBDXGvMBZUwFJtrAH8M4ayNn9RdVrTbw1syNjK2R2iLvo",
  "key15": "31RKCKMy6WhR2UFK8U5QVmSwH9V4TahdV7ucZEu3ETsoextAcd2bhWKasgjWKYrcxXhwRfUHUDVzbLSFz24HvPZq",
  "key16": "3JB4yPJUfXniWpNxDK5o1BE2rffiXXcsbvYKQrXca2zNFJMbYv35KprHVQcJizYxy52WbUmoG64Xrk4B5G16k5gk",
  "key17": "3ShGEPHN1y3WApCodQsjDHD1an8iwduFXE9Qd3WU4p35jWDhkCQmTMYPv4ZFUy1vbekPm5BU9AKpSysDSom1Kynv",
  "key18": "3FuvdDVq6a5fb3R6c9W7CR55jssE2rii4hE7cb3WPJJHwkJPPiEYCvGKB9LmS5pUUeaSGTumicASJ4YUhAzgHcrH",
  "key19": "2q47w672zHkcgceypMGM7YQZSnwU1BtDsFQseoFrcdQAEff6iDBA6ZKst6nqPkCX3qBsKXkBTfWA3wKm8mtEBZGg",
  "key20": "2t2WnqtzVRu54Tfuxpt6S4dH5d26MdnnGhdvvyfrKFaBRq3mNW25aqtKtFFaP5QvzU74GGve3qGsxgq2L8knUY3X",
  "key21": "2pP7NSG9wujBEVKRXME7KJhV4Az7qgmW3zhoWt38uT7BZ1KKJdHgyoy9ByRizQLMiY4rFWZpSKLdprnXLMNPASxA",
  "key22": "2U8PdYKjMz9ePadkYYp53Vf16xHLGTE1Ub32oXKYxw2nmk27pymN463SwM5h89XBMFztVcuKFYoxd2KuFLA5JT4o",
  "key23": "2Ts64XHi8JABWqVHPs9ckrYtDt7HyzMiqYW6UN6udyAdhrjfeF9DoT3SUgsUjUesyagdcVmMb7gpdfMsYVczReKw",
  "key24": "4EJWYj258eT7x9M5hA7oNB5GnLiJiG6EuE68Kp3bGtMMV5pXVi6D75ixAU7UhMDBu7zBTcLBpDqN6GYN2yTz5Q6R",
  "key25": "kR5792w2ezHkwDCYVsRLJFAD6vjggJL4EHGY8LLreTxC11gZsAxqWesMucpKAwTEcW6btweZVwMN7gEse6SRcbK",
  "key26": "23p34LY3Ar2Ydb8FHedDzQQ73LUyV3YiXSTPBgd3W5DDRYWYi1EaG47pzdDqhuMDbFv1BYX5j8FTPBSzJTQ8V418",
  "key27": "2dSpMrVtCLVqPcFjYgkhsQTqrFmau77NoNQbr9Wt9k9eP9xiXzAujjdpGbMxzJWgPBwbro98HiM3XgG4jix6b2dt",
  "key28": "4XCtLdu9nSqYg8myBSFBS2smVUBQjY97pdFT3kU68EXhGaa1GnAw7bDmTny2DYdHEZ1YaXTG4GoHuhevpGykfKYm",
  "key29": "5CH47yoC6veXqnBuqJJ6wDpQktDd2pFtFA2T2GWZuTuEWdEzGP3jS3ky69GDnXaytuMTqhnb5emLFHdwNBGiaL5r",
  "key30": "2E9XyFsEVgZNj2QMdsNRTftA2hdYnZqm4dG3LzMubHqV2u7xq2cFcKK1PMsRxzEJDcktmLo8KDUTm9oTAsSh3B5j",
  "key31": "HNizfsp3GP1s2SvH3aUVta9uAUkwRE2AA5jv6nWQ5t3ivoSFwPQtZWr7PGRxhLwuhWoinXn8UJ71WwE8CryUWYS",
  "key32": "59LMhsqoCiTLGTUzrSdZGcGVzjQzPR4gRzSt2TXAeKRYjaEgRUYD18u3goRxs5otN51E4jVXwXjA42nzh3cYepqL",
  "key33": "4yDDoeUCLN5vqKD2BjKuijfsMH6ArqaxYu5iy1x8ofhLY78uf1EDLBnrB9hMu62XmyUdQpsVxWALWXm26BhK7wG4",
  "key34": "36YbH3wjabkg58ws7YXWmB444fBQVmF2ieXtxaUGyx3D3LfDbcQ8u2qvf53BptbMq9nVWGNu4VtiqHXirNjRuXwJ",
  "key35": "4mw48MrgeJjfeFuEwCQdjPXiUSqtwSXCwMGexbxnhk4xKJgsNiCVdVYxiTmmj49ByrDduBon7mPbvwWKAmMfqfUB",
  "key36": "3q7JxJST4ysWoeie8QTQpAVUkGST9nfUPkaZhQPJTBkB7Wy6e939giDYtoFjbsKCayHNavbakyT4J6ZFaXTgrK48",
  "key37": "4NbVqhJCCCwbfpHxzGsNCx9UvrKnbySEkwJfxsvDnF9Tx9RZYJR55AoqgBwJowdfaRozvUFeEF9AXFVX8mjv4VEf",
  "key38": "4ef1RraQdjFq4yLk3G3x7q2kJEjYMcvej65eyhACd3AfnYYd9SU7MQnxuyGXmZpDpMVw6xda5gFUMq8Lf3WfZjZ6",
  "key39": "4nh5uapGHYkb1K27SUjDGYoMzcKptyxzZALuZRBcPw9PhGutUHQY3nqZAsbM5TDRSPGz2pDSNXBxrh9mAwfRY3o6",
  "key40": "TXfcvqPrNpWQBuTBKjZCX63NXdnvniEE4eURvNZjasoqRCaxuBAhe9TSQqm4uBFREekLAwCJu9w1sZFWcZwcfWn",
  "key41": "47mSBsHDVyrNAcyDcYYtE3H3d35yTc4DmQzYeDe16771A6iHxpt5nwYD1oAc2ittJriBgHC4avCLmrEdd8oBtpA2"
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
