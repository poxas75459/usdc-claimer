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
    "3FUyEDgPmjuecFHBHyvWSuUzec9gxWQMm3rJ4Gj72ktpZj9ybZw81aD8PXHugLabqkMWf4xVriUZoMxdKHGRnzjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJaPD3TQQyY41VG8PAHRRnsRKt2F86M4daSaxBDjf43tLamv6BVu2Rp21XLDFwUkx8b69p4K1zAfv2M8WS5xQLt",
  "key1": "3H6jrdZVMbBQ1X4VF2iJzAw8i769b3qFAcRFduoTkWpuAhCRnUQNBDheWqxZiGQjXTWnR4NLGsnghZ29312PbDz",
  "key2": "3rYxzdtpWzQgP9YWN58iYnBD4dSthqCPdKqz1kQQrUs876T3U6VWVf9veyaEhNPkjrzgWC1mAiwrPV5CUB8bCAZD",
  "key3": "43DL5ZVdqKEuAK43t6Nmu7FqKpjEaTK9gAc7wTeVicUih6f2i1kH6nog2sZxicqYKYdx3J5Fprjht93gzFDsi3Rc",
  "key4": "5ZmevQ2wY3sxdKPzwH5pz73phxrWPhdJUTnvZLo9ZiprdzxFmueCLoXyb8yck33Bf4TSu15TWE2BJrZD3zvRomTB",
  "key5": "4HNhqp3QczwnebNvNUqtGay9pUr2oZMMkaqbipQ7g4ZPfvVGDTVv9niWaqqqFE3MT1NypwVUeGmNrBJgDFwbj58y",
  "key6": "CpADShNK6UUH69UBu5LuAgn9d9SX5VogFdjRxQckgaMvKoJMdadtTi5uqXLHeF5v4YCZXd54ZybdBPB4z3QKMtv",
  "key7": "4CZxYGkb2NUC5XAwyjFQ28Swj6r8E9Mzx9vM9uKowbo9maArMBrtvTq81XRZL1nnH5qo1GDT8unjG7CouKTD7bs",
  "key8": "2Sp7SZGxb6b6kMYVe1pTsiWzCG21fWYwach4vV1Wf5PWqZcozuwCqtf3J7fdJ6ua2U7r5yGCenBJUctxUhrwh6Wg",
  "key9": "mwPEWCxD1Pc7fY5SnzGJdTEAwFX77jQk1GoiQhJogscYqnZkp7EYekyR9xf9BAvSBeMiR4usiuKLvNkr3Y5Vy56",
  "key10": "2UNzqjUz9tReSDvoXbS1EwWshow1GY2YmtuQvoapjxQCxrmHDfppVqaHfikj77DEWrdv9qLBCwuxcTyPGVLTMfwh",
  "key11": "5Q8fzBKx4VPdtzU38GmpZ3usvpgQqWXufzTnoCf16YvWcvmoQ8wtSmDAfxS8hzHHKjcQpkRduUG18jwhXfLv4vSi",
  "key12": "2PDneMeEMBacCfQusiDcUBgJGr2KSrTEvPmctqA2Td3KgCFLjBxNLVXSD3utaZ1GqZUyYorNDFyS3a8eudqZByyo",
  "key13": "5nShZSv3uvV7qGcML1ijQbnVAzqSk8ridDizDWuzX21BgCGBBJq1KKa2wXpxHwgYzBUDcP9wjfXbMvwLs9Ma3Xg9",
  "key14": "5Wj42dbcG7A7119t7Uigv3npo6iocP6NfPUt3jc1jkwJuDnkUwXkHysCbW7Hf43n8hPNCnKxkNkZdRhuV1o9ReVW",
  "key15": "5baqsmMEfT6MUoHDK1AzghF1Yeg2WkQo7GFj9iSrMmFPFxhRSEM81j3jLBmm6fVXDKYwJqgQdiTcRSt2Qn8GoqHo",
  "key16": "4JoCYJxfnu7Ykucrjv2a5w9b5B4eJAzxXZS4G6Bf7h8VwfX1dgqyaF6pDJktmYYHDUBZY1oGef2ZJKmYkDg8SuVo",
  "key17": "5XfwjUco3UAwtpWB19xYW5an2hgxS7f1xCLN3jqcSgy9dD8U8QJ1PwKNZ9C84ce9SWquobrXLzxFKpPWDoKydTFM",
  "key18": "5WpS7v5SUVGSsm3YnBcU1WbjthCyQk3jj7uTjzWeDqw2CgRbvZCmyz3HWdF9yYrGsUYyTAQD9QETYMmfKmTQVHYY",
  "key19": "3MQtGkPy8jmDDZSbjMCpZRBYapU1HiSLpdjdHwoar4QB14m8Q31Vxxau6gUiDsfPP9mqehPtfZEsUL3ttxpgmgEP",
  "key20": "3p3FEjzjojpwUToBKgmqACQdfjHz561RqJ5n68ZeRVvpkCzPpCzytQCS1PPDkCe4mWVQjoG3gRoy5X1BH5bmJ5sx",
  "key21": "5UnocwKN9ZCXdAZLyxPKinRDmSHdaV8TRPc8Q8u97BHJtvRW9MMx6BUcBZqfy3fv1Ynzt8cLjVusse1rBcXJhWuQ",
  "key22": "5uCyZSixUrCc5S1FNkrCXwirQ742CRgo69b1p4JZeRAE5nxQmJT1VbahTrxrLAC1SHiTnrWaihygg3LNGFGxk3du",
  "key23": "2gFApc6VwvxH6V2wSz2ftM3khjxuptmhfj9LC7bQYzJDJePQGPwb7yiKYXSyxBB4PC17Pi9X4QJSVGHxWRkh61LY",
  "key24": "56dLhiNskr5M1kLZFzRDrzB6jbtjdnHFSdAARL25UWhyojxyfynKCqeYUPN1iRZyntncxdp5Fz1ZtLucz56JKJmL",
  "key25": "2Ag2q11LC8JirqLKyGt1u8U9Vp8NpTbcitgacwS4tg8CVGxPhyuQnLKnBQGV6atkxGLBH8aMbCF96dBBJHkCFCt",
  "key26": "21g9HFAdQrs1WybXV34mJVxCedsrJh5QPgJWxj8QUrHEjnVpN5inXqnLD6Uip4C241CzbGq8o3qKwALT26t8KFeZ",
  "key27": "2bLYGKR2GQJeCQF31rsnDJX2VVkLYpuNG6r6J3KwTjJ6nebbBFoA3atPmRPdKQGVExruGiF4XbVZhL3ypAGtb4h3",
  "key28": "5LB8siLEwxjb9RVJjAKTfu6CMiifZp3st2s1MGto64bsCtepGmy5jfKbWewYAVtCHYnTgruaTiiU8u8pZkeaeYWV",
  "key29": "Eh9WcY3QWNjKUcdmXmpNUFdBAqS6SDPXztc7arkXBxXRiNm8w3LjNHTnThuiskN8aKvuCGa6kfQg4cB6ZafhSCd",
  "key30": "JPcYsxW6nLuGf3ZYCZtoL3nyqUvbYXRVgExvZyoMRDcJGY5UKKAeLH11JPA2UEn97WPbQKd6uLvrYAsWX5GYrGE",
  "key31": "3GjB1BxhjpjF8HaZifKqhXPmiXDyirtQZv1t93qe3wqgH9ZZk7QSP8cc28R79VcX59piSG7LX1EdpapbEyuAX7Pc",
  "key32": "2CDThxRGZaMWSsTiZBBKtuGdeKddn5Q7AHdvXYKTiXP95hjsSU3E8qLe5rZJh598jvoFHvMFAkx5Z8nog8xDZNTM",
  "key33": "2TLANoCvDqpN8SKz7KvkhSMoY7rQLNHanr8NxsoBBomskJ7ExM52ij1YkU7tYzQaBaQ6hqHJt7NCSTU7JqbqiE6v",
  "key34": "4x8ns17jyDfgov7fZKfFFeHXCkz4FJWsH6pkr2VtcWW98aCtLDHg86EJte8GX5XXo5reTxR5A57w5sFuTgRXQmsi",
  "key35": "urT9sjdByH3EytE3GyiY3pd1W8wYS9XF2GWfRnCKRKNqUTthJW4LR8eKwEWq6RAKZbio8jAg81kV3Ac5J8PUnZq",
  "key36": "4TbiEadGcg4cfskU8Fav4XvzeXjwcCaUZHXco9mXYHnjTosQcctjfoTs5DFWYJmCWnVre56NuXAg2JuAxyYDpDnp",
  "key37": "5JHXcuk6cULktgMVRFgkJSxpfxmK7L2ZQJnBXGfqAV9EYzUPbdWpLVLCQhaP8zYq2eKkF4FucvHwp9KsVi9rm4GD",
  "key38": "2mFnBHdEWFgNrEBieDJVkEou2GP6k2QoKheRJuj3VPzkMuiybDFFyM3hazzo7zEm3DJzsQQNeSiau91DDFss6j2Q",
  "key39": "4auxz6iA8ZDkpUicuvnDktTb5NnKXZDfpAQb96zo7htVrakfJFfdyX2ErD7X5M4TY2QtXs9X62zqD4JA8ejqrxFT",
  "key40": "5VjiQCNNuqdSkmJBtBWtDP9Zpt5yCS5PGzj5JTcDB9EThnLHvjkt8uxkmwWaKyWg24S7S8XAPaMeguZBp92es7QK",
  "key41": "5b2iB4J9eTWt39S9oNDq4zQHRyc2X5WHmb2JJajdCgEHx97b9NVFwaPkh8yiErHBiemNf8VwRgpmtPgEL2V1ttKa"
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
