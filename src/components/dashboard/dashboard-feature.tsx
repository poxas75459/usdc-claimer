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
    "3PYVh9dMgDgwvPzQ5QG3rDsbBiw6TP13asvUDDmra8tvH7bGhfAMSKUXWfBB5DtviqcQh8qrbAH7MDNFfZG48FD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nxmJihK5EyoKKKkw4nKXiG7tEG6DivTdeN7Zmcq21KH7wd1oPxtt32yxM38EqZVANK7aG1aPa4AtAdNKDJASrHM",
  "key1": "4t8Ud79PazAL9GVCAfMuta4nyhH5xdcj4R68xymeBrPXUEQHYkAmxT2ZqjpmLzNjMiMw37HqDRHDKghKvpUHJjNd",
  "key2": "3Z32XQU9ZHZc5GopscS5w4JU5QjZKoCxRBKJvCkewXmtN4oYQYwBPxXfQCtL64KUBEyWKzvXxzc1XJYCtf8Wipr4",
  "key3": "4kN1xEuvJ9hKjKugVd9s7rGn6Jjq9k83W7wc1py6bakJJTRXijxcoqBZB4RrbmBG8SqEu9f4bKUwPeC1gCgUaRqo",
  "key4": "2vsz4mwk5B4nT7XPkYRehTYVcMHv17eitFA4hFDg9XouNWMY3fhacoJVLGcFvq9RYWBhUUym4M9KuvR3L613ygJB",
  "key5": "3L8N1hH5bWfSYTVmVGkHDMnXFy3Sdb2Xd1GXDyNUmTu38nYi2PRwUejhEDtc98V7AHMaC9MBJ36TsQaZ6dXiBV5o",
  "key6": "3wCPbnrjc1xVPLjAKSpvHFr61UsBW81vLrrjuMg5XbnSwX3fXmTwk6XdJ6tpwgjxHm3e8VJzv9FGT3LQEuxCTWRN",
  "key7": "4FTWAtxLoUNW1p2Fit1DeXQXQPFYtnaXJQa1yahQ8xszLmzRQCq8PNBMavGDmKdAQtH3qpCvWcgBtVLjBNsrgo1i",
  "key8": "2WGjMT4vq2CvkSXjSbiCaid2Dh8QGZrEdxmRLdzpgMkUoUVHoyucoUy48Xx9KPSF8fN58TTET5rD4mXPg9udSdnL",
  "key9": "4REdibBwSoZNhrsJ4KZQzjA8NwVGSEpjgtrKpc5nHbbCTgfXTumjJ4AYVNrwu499D3wmSTK61cZrpQcVoiLRCNhs",
  "key10": "ErQF1TmGbtBL61zTM9Eh8t98ujVPYBsmSVbDNbsGyRnDPeTo5Abzdmg7BHKjSuY2h4baf3hk85LAHocfn7ujbmn",
  "key11": "5WwQAXTVGEsVa3phCjn76Vx7uMCmj3tLLuCifvScybxZakAc8ZmjjSSkWigye6b1Y5WtvHjRRDXfCavkpbC6sTKT",
  "key12": "5BX3sMzNgSagLHzi1wuE6VzP2VmQtfQf882fNCfyMp4HnW2GDgYwNQc8qK77NP7XtmVhg7u8TMv8CphoTpHreyFa",
  "key13": "2gYnmbf7NDhou4V6dMo8xgrMRynzhDNUyfb7zB4dFMoUhYa3UDEW7e1otx299hwYGjtMjFwAzRiCjopHNPwe9tBq",
  "key14": "3Edu6sKzKEdtbiRtN867bt47iwc5QK71ZATUYtTuU86V8813wBDwToJJFCumBTsHsFCS8b371Kn9PvWi9BAdU5pJ",
  "key15": "39w7MPqyrWJTTnpsjvk4EcvHpQkqMrtsXnu75o255J5oXZr4CLTCFo7VAXhJfqD8m3gj6ke4jsPWQoxHCmD76Db4",
  "key16": "5s5yXhayT4sH2CFuBb3LZ8yaLPkfCCVGin3LWQpmJuF8UmMveQ6odrCjhauJiW4ood5pVX9FWYQ2mqEyrFBk52ZH",
  "key17": "67myHAYGoKFRzdFLYjqw18wWrYm9n5H4CP344MSodVX8ei8AtyhB3uZkzHLEyFkUBVXeyicNXVFQ1UuyNXx6Fi8S",
  "key18": "4e1YLJJbcwdicHhuCi2zpVjJevMpXecxWpLe3zpwCDZRXdWCa47vyF6i9UFgfedQMmWorT1qRwTps6ZZH54CZxMa",
  "key19": "2aV8GSAWnj9CvHoHsm9DiymmaFK8FTCh2ghXSRa3VQcSSB3kezShj9twrh7UoPpb5korPbMTM8jEBewWyXV5gj8P",
  "key20": "61AnLLow2Q7x5Le93RbCpKE6JtT7Z1jHVjQE32EjGjPiFbnRXqhFWUPLA7hxFqS7nyNpf75tTAfokTYSqG3sUw4f",
  "key21": "52JmroLvt1t4YPXwMdTieN2i5C8tZQj7k1niZhMWAzNzdFnHc28ntL34nhvqaUqTN4wHuH4sVuiN42ecYhYUFpKU",
  "key22": "5gLEhMpcR7738aVWbYoCoPbGrqsVhBXsEXgpLWv3qTvmA98FopdRonrUskN1uXzb99xdv8VQzaiXxPPy8aeXHmqC",
  "key23": "XWVXSkNS5zxotHSuhn4Enn7T9hJWNXiLnEvMQwv17PQVYLT4fR7EYFp3z3kg2ia5K95sPiCvDBF22S3ga5HgBXh",
  "key24": "2oZ3vZfo78CwiHLQUvqqSbPYrQxVduWmiFUzxrJFUxSvhrMAGdHWmpBzTnhETqe4oknW4z5aChdChh8RM7CKtqrj",
  "key25": "2Kxd3YwUt5pLo8UoHrFtrhAJcWEqb75ZYaMwCr2DmgUT536sEVtBqGmBxH3deUbJCVE8QeAXZ85zpntepbZMemkR",
  "key26": "i944K5NGaggX2tS7X2FYouL3yrcycCTy6BbttYwjCNAVhD9jQuG4kDFwvsm6H2e4PVv3bkQ8JgP7gEBiGEzBmEj",
  "key27": "RPbLKrsHK22DgmLPu2fGi5eiE78tDx7hJzbpkP1LpjvzWvWBNbJLbfSgVc6yLQg72PH7NWArRf2S1smg77QazJC",
  "key28": "3gs9Q6LnrdJz3TmGVDUZ9bt25Nsni8muUZkUo3DdYyfUembpCx4VAQZ3T3XJtM1ChkMxpyYU1Szi2GjHZPAfhN2q",
  "key29": "3gk9rfS1VCtD8JyAuz9RPuFinsf4VW7L5aYE1T4y3EthRZsgd1AG6XSESZcbSndzYQuW1aaqyFuQ5NrEkSLBihfu",
  "key30": "4MjG22wjWBrXtF5kPvCgAjY8zVgX1NGKmvxbqkZUEbyoYjffeDhWEBdZydMZWkZYA54UFX54xN74CMvqwKe8aCro",
  "key31": "5axLUQcBUwfzdbYPMGnC6Sk45xrwrzUF2tUBLMwBbLQ1NLxpWBftXWvcHKPH4G2gyNSNKTTB66YBGcJvo2c9ZUSz",
  "key32": "5JeYNpdibTA3gpH8mEJoMTeUnKssBghhsn8YaHnWFLcwM3gjzkt9RbE4JvCw6aHY3T8PkjJgpJkHzMPibgRDpEkm",
  "key33": "4JyK6aCCK1dV5J3axRznsjrmMRUhubAL8ykkdgn7r1di7Lxm51RLxesCTtQptKys9hDQcd7Etcp3ge4uULfjbyBM",
  "key34": "3NKvoonTEQSzotqPnfQwsh3uLUaxMuyJudRpek7y3mwzdZnSXh5H5pRaU9WJYCUZJmcEPFMpCPnnWYPLmHfQ5czd",
  "key35": "WKxfS9tzqtnFu1TgKhWXBDNKXmso8V6YaXUwF5b3ZwS23WwBJq5WkqzUjiPfUmqYemPUiqHYFjCSm3tnNL2fHvE",
  "key36": "5HVdw7fcicrksPfzhzA9VfJBSRzS1tCFowai71Q9TZ8KkYrdaW2xZ53Vreokucv5DuLiaxpsmXG9YduZun19cSPL",
  "key37": "EZi2XgnWy1gFtGTrMr9cZ3FpYTHhSUNBA7cBPM97FiwVavf2Afe4B8p2m5tFvE1FuAav5X2koXeVcw8V2vBCDkj",
  "key38": "27yMX5MdgpcUxhb7x6JUYhUkBjpE86pGFgz9Ku31yGSwX6sPJepLTFj9EebcqpbtfEXUz5nE7Pa2BE82PdsfcRck",
  "key39": "3otJQdV2YqEz7tbo3MGxdHKSnmoHsgNNuYYqH3FNJR2ws5bSaHLcp8EsUNv25g7NJJWkeNVVZ9y8r5c4bDZPy7gX",
  "key40": "3yXEZPZVqvgt5VtX89a9GW7xdj5WFuKzhVap23fv2xEmdAQC94zXQuzCA4qDV2QHuRAvxRn95VUEYNdpMeHLfR9Z",
  "key41": "bytDmWzZ858iwpfJ25KYAsivcKzy8hbveLTzpCt7DBgfEbFjym27Vnc38SHRzaGsupayrHFri54jw7hBMaT6o2v",
  "key42": "5To3689Mn2rciJtDqetqQYx9bDj7oJE16qn5rT5ggcdqGP8iszt9deBgGwwJf2gjWLD3aTE41kEXWu93adwNjfGS",
  "key43": "4MpDWN3F9o7yiC8SWEzjs7hcV4G7AdNCFbZzJidtVU8BkpntPws1mJiHwf3ra4dNvYoFWFJ9ohb2yu8rjffgd6V8",
  "key44": "4YaQ1tgjUT4Mp4R3QwnahgNC4K7RdPVgeJdYV9QNwuNgpv849avzLB3tHUnkL1MH6T9X3SK62pcmmg9NhNBosZHw",
  "key45": "38SPtw3ktNWStTeAtchRTQC6QpmzGGTeYJZicf3xqoiomMJ8tYy2keRhL1HEVsdaDDrtkXVxTtTHSVn457aBekYh"
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
