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
    "mre7ggqyY1MUy98CsHW2EJNmBR1gFZvCk5KTwcvAC2pxtDik39sfTRUc8fQAPa3TwNWuoGHNPt83Q9DXL7dtEVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1KUWDdFkttTNgW73uHdqraYGwYXHw8zYcu33DLnTNVQ9Q2Ey9bpskPPhGMH9RieERRLFcUTtyC4osKBwM6T9qG9",
  "key1": "byQBYrdFNSUkdCcPdS6josmExMVFcuEwrPXcJ5f2u3XqKfbRfrv4X3iSwq62SK1WFq1MPoqYV8jfoGNx95DHjJe",
  "key2": "XkEtaLJcC5WjBZiJz2Rh2RPjYFiwkb7sxS1y8YZQWkfNLcyj8538x3Kj7JdPszfWPuv12TNVVWFoZKbCuvVAyuQ",
  "key3": "fNiYrMSWtMQkySfmJGycYVRrH6AdGvuSAtM48wgF2hx8TRgeTLNhd4nMW419nQXEEx3amcwdZr6doNVJvM72oZY",
  "key4": "44YKJAqgs5Miivn5TJat3ompQD2G7CgZmtU7nQCqYLSFfSWyxtuL1v7bRBGFT8y57qo41tnrT95hrPfpnMagtSbM",
  "key5": "4UBnTKPUmcwMZZztjiP5mYmdyD2z1j4Hirj3w7imSTyjSKEqnhzMGpuPe9JzoBhNJVjbJZP7xyR6BJXB8rLSaU23",
  "key6": "4Vu5nwAaPvgEikzdw7HEkssWNwgM1rM5BxdwmLG1feJ4v8NeGAQWm5C5e5DLVsMuyhSQQdQjEio6cAVEcba75Kay",
  "key7": "NtKFSHBvtMQJDS1JAXdFToRNHScFMPgJ3GHcF8RKdTYnjqed45KgrUWzxSNgkWFSFip9LyqBJca51CeFRhXJPYm",
  "key8": "3uLj1BfoNeTvBUG9sWf8epULrtroMvy3bJ6URuRg5xpKouPPh3oEtajkkPQsPhzdsL4xqZBzkpmdzycyYAkhd4da",
  "key9": "4CREMdKcSJVWeP9MQab7BMvYDTq1ZAkgscULwxuQBx5gJtEd2QsegdjYeE3Qcvx1G2U2TDWfJXq2KCLNoedN1KwU",
  "key10": "pHEweHS6DeFYoWkkhCNDfBbDT7xZQBxKruftYkd2GqBfCyS6sZVMzwRXczCbZFdawMSmvYXSvMSCTPMpwojNqE4",
  "key11": "2urKSKNm52GVp1gbj3i5qNgq8vEdwwntxDM22tdBwxtPyV6waG1Uq1wEQKBXwvvLmQxHPQyaBi5yEWZR82rDsEjj",
  "key12": "3WD3BkL5DjeGTYWFBV5h5dHUDmXEA27vmK898dLddfWZYrqLnMpSTMbNA8F3VWimMLEMBnjHXobMrjG8LFmSnuff",
  "key13": "5YLg3yt3ZFtPf5xR9eot5deq4fJZhVF8JA1CZfEibAUP1D5j1cEAgoLTRNSvjDEibjTndRfxMvDtyKhFutJg1arS",
  "key14": "661EHHcUtsrh4KkJM62FHhiUKgkrGx99rB66i8AjJVaxEhZLWTegx78m13DMPW8XKhdDVVkRHBXoQwPmd4RbEmiL",
  "key15": "41ArGz9Yu15sBB1QCHujxXout9m8MG4eNZ1hoFpkBePfn6f4v4QX2ewpKVYVgJox7KfDmBTD8Ru5gnXqFgqGtttc",
  "key16": "uo7r7VCzwTjiv28tXbtnHMciptNXx8qQibQYMDbXoswFmvAWFUe6VNnityMUM2unXgEJWPqBfhiP28mDt79of7H",
  "key17": "k3341YWJjJmwatBMzhiUwsXi6GtsdTHsRc3L1Uha7qKZcyHAxTgPJyRs9SfnCYF2wi1ypsSNnwCVJqCtgucvV82",
  "key18": "4TRBgD71KAwiNR6nbtvm6oXTipSX2Quh3xCUDYdYbyZ771uyjcjDitgi9qvP4beD7ZX3KEcby9gVJfZjPxr7wh2t",
  "key19": "5jHNJDGDSFvBHQgKbTqWyWHsqZ1y6ZJrsnGsWjGMdWck3JvzTsaxAeNP3n2HKsCQo1s5HH4M64c25o6naaD2TRQS",
  "key20": "5jwfcbpjcjosamhrNBmazwQvLfzuKBsnw5WaSeAaSJsbGZrViQ6o4jxC6xSsevWbDvzvy9K61EzKjKATBGAh4sC5",
  "key21": "4yCA2MW2LZAcS4R6Qtrv4Z39Bsmu3UD58bMpiP4trwVSbRBZJNn9SmPfKqKq3bqFmK24xaA71PvwRhqsqsHYMNsi",
  "key22": "3GrmEnygoQR4yVmDt56nkGai89P4QGbS28NmMC9f15kqhixEnCmWULdcxgx8gVHDWc8FeQmUzK9BKLoGNsPpxCSg",
  "key23": "44wSfpWRAMcHaUPjzpJBpcWwW8JVZXQRcVjJingZf7DhQEQAJpsn9LKcDsAWwCMGWapfSWbmJKZMiV5D3qhqsh8C",
  "key24": "3B9RFZtuz3b9xc1q96sNRQzRwMmQQH33tNd9m6qWcrC2ThmhJLuten9R6mbBpNtbEtkBebpwNtp4R2392BxCJUKo",
  "key25": "gfkvPfZXhacQbVW2HoLzrsErqv7rS6pdpqj9oZLzWYUbpZnH4rrGP1Zxv216RkKheTJBGa4tELppWCfQdFfpik8",
  "key26": "2dWkn7oX7Vou3zPyA2D6MARsxYFPSQVfoExuEzqPB5gj7jRSTDChiNp7zZksAkVWnDXR1J2QzfZWphNjzoxfAH15",
  "key27": "LdX5igNSD1iQDoLqRAw5ucvL9FcyARucawkNojLihvTYRpVjihuFiCqyHiKS2Gkem1svbCpFbo11828QN8VRcS9",
  "key28": "2DqskizZt1d5zki7wn7DqNvrHe1D9gJWKacYw4LH54PA6MNTBSV4gCc4zB1mM11AuhjfzA7Pam7f9Jdd3Ehwnrbm",
  "key29": "FUVjY95ouFxnievzgr9nexhV8Mod3je7aQhwL5hko16VL5GVkqxrnGvJSoenpaXsaDBe3D5zaaAc9AfpqyAeF66",
  "key30": "5wU4bQX7fsp7B5ojhUQFcsUkJjnGMN33XKUiqzauGvxatL6UNRRzQu45eMfe7JTQBuPmYyPGo6uJ24fMPv5GkYQA",
  "key31": "4HnWUDGrzNKJWvoywCm7iY14d9nt8WukNqZWLGDNn2g97aWP8vH7GyB7jJqyy5egM6ZQsVXSy5V4RG3qBXQBZ1Xg",
  "key32": "5sTPRwmJfi3KMwx1LCcRwmc3kn15QonGSTzS49Aez37xitE5HqPQpyHJtcgWzRzeKqXUqjsokWYbELwPH6hVwSEw",
  "key33": "3aJg5MtBcU5iadTuVKbjCht3zwvnf45HtsNwic6NGhu4dg376aivn5KAq8sdYarSi19YSKgraoyM2yQUQ9AqRubc",
  "key34": "3dpx9BQm7sdq9AK11vjn2bu6WtkRFQ9CVGQ78tabAixu36JEsUBiJfVwQ71M7J6LTmfwKKqCRQBuNvNQyeRhyVR1",
  "key35": "5nMsY1pbHKemQnNmaqZYyk13kQjWrm9BpD2s4Dk7JF5qkFQRB61LdZfzD9b8A9PBdqV7VCVpqL4HaoW4P2c8HA4M",
  "key36": "L31H3aWFtQhrq5NsaiFtF6cjknmkQ1RJXCjfa9NfWsm6n5jxLrswNKKet8QkTQN2Rn29FsSVdD6VyxnD9WBRdfV",
  "key37": "55JxYaSs5PsuuaV2RUkhS1eD2VotZRYjKVcfgEMLEKWQjoJ6ZBi3L8EBzms1JSA9c7Y4Phcywv3LSeAwk5cTKzjJ",
  "key38": "2k6aC8wEKM1LvyAwQ3qSTaGMnxeUkiLi6DNgws9Nni7XzHz117QnzumpBXYbktnvFx2GWxEtNyq8Lf8dEGazWvqb",
  "key39": "5dFXeY7mHQZpKinGdwhgxPyv5Ngc3wotKP5YY3XUJ3FfDSWHLFi9SYsYTcePmM5WyNm6P5dmq3fBbY5f6616DU8s",
  "key40": "4toyyxHTs4axReuNum1iqaj9WHtpDygGSC2Vr5H3RvHWyPm4CeVx7hFDsUPFXErFxZPyd4qvJ1NMKDtofqcbbXPG",
  "key41": "59GFrbKfNq8KQrGbhmpQq6erQ5iYV5ZN4Bjqvy4LoxR5Qr4yBLTjtAH2H8gmY7v97f5aKV5kfjuSxfhPkViHXb5t"
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
