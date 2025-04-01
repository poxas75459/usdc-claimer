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
    "PDm6SAUiWyZEB6FT8cA1i8bMPGMDkavVPp47qDYpRXAf1Fqf63xSrB2gCdmZrESx6oD3tj49zGoR2uEZXi33NTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fmCQbcRiAdmkqcbYRAyt5WSwBD16usiKFdiyV7epfP8ssNzspxMh53wsRPMYnktFBnQXjHXNbK2mTqGbK3D1Zmo",
  "key1": "4tPm8VcSrQEFtSj2qJ1yzwvfXCWyxnARKVhRSGAiaujSNAw3B6wo9vocVztfcAzEaQVuFiuSzyFoC6qDvHLPPfjE",
  "key2": "5iKijsPm9v1JBoKwmxL8yGRw1xJwWHmZHxg6A3fZhV5GvztsJ6dDu9GDvHbv6AfHAEXPQzbefYqgpPX4eWtgrNyj",
  "key3": "2yB6XscKbGVk9aFYdPR3pVxZw1UU6ztNM527Thfi66QJnh6acBhDYfriSwriqiyBb1U9MP2yXBuPu1MCiwuKHbry",
  "key4": "4P9xj1MvPV3u7jCWWq2Aevc2xTJVUkopwKKro4mXgHUzzEHUXbxFPcTvNqyW3f6iKmpv3mc82eBX9LdhfS6zAfQy",
  "key5": "4BTYje7E3fFpN5VPM3nipXHFPZzswHu6h6MWWnWE9hbCrjbLpu1L2xzYPgBmFRxYsptsxFHjqrHb1vumwyGJaGtW",
  "key6": "2nUkkwGmDdnRPC7mbK9mi8JUzpkYG4JC22SJ2piiXcVUwHSzKTiZ3iBgZQNxWwgJYCArc8jP2QwgYMGEaBhsEknQ",
  "key7": "4856SJeygEewpvWKpjq69gJGctSsHzFbu3sQmGGxq3WJUPcCcG5Swuv1k8DwyGr29SmbUdByGSJUJ7APQjiMPA5G",
  "key8": "4FFvqaVrHrkzRc4TAKk8QfeHKZVhg4oVXHeknoEw5KzChXAMWAZpuzZZgkfwRwYDFWCmVgEKwmwHPZTzS2xXHBYD",
  "key9": "4m3pBA8fU8bmdmNYsErDhumh2TZrMik8gciZiMQAHGpWzXvmyfmfGGHV1s4MpsSuDskWoGjgRQYjcQs1L4p5Aeii",
  "key10": "2LfnkNFrFo7rgb9yxouy1oiNk1mwp4bVvSx133aeBqfqztZKmJ3Cafb833UgqUCg5fZHxfkSb7u8EaL7JWXi5L3E",
  "key11": "3h4BAuZQ1FsktZFotEDLq5pc6wxyXNgGfc264QMVVqbSg9bpvrDhgvQfoG3bgw7gBnaQeWBNv5i8LfqQyK5mYbxg",
  "key12": "3TciWfX2vqbHMQce1LeQaUVpqBHChXK7tW6m2y5PgzZZNU5HkRJNdNuY7Ygj1DaqxVYNTG8gLeCUgfaJ27ZZQn3P",
  "key13": "1kEaBy8nsFofhrafcBHUZSUyZEW9oBEzshLdoBgeC3vT1FiQ1Y2E6MhSqqME4hfJh2nN25za1spMLhJJYy54b73",
  "key14": "3bkpWNbct5iHZU7JcqbuaXdx7FgAePKa4Qfjk3A6Z9RSRr99Wm9p21cwshevb6iV7yEHZiyCgg9X3GM9zxZAZykh",
  "key15": "wgXswezCQbFDbXtTqyBxDqXirBHHsgvVfnEMxn93GBWqJZ4RAEfdWkjx1PBp4UYdHH51ZQzZ9cVZjC2ciyYuEFz",
  "key16": "5hh5zVfuxLPzcybRYYufu2BGpyjAK9dkm53yQ3xbLMtP5tKaVRoPVtwX6ZVR3SEfjPzjrsmoRdGVaJqF2Bnu11mp",
  "key17": "5PCp49wLD4pctbXoQ5ndMgdryboQnh9Egf5LUgbSC44yT6jw6GFuiGwihVtNpSogbSDmNULsrX6gRMjCb1XzVW3",
  "key18": "5mMnrhViAbLdNPLAFs9AxhVj6AiLTLx6RALiY5rwagMdBTtcEMPSfmeghfHNFPizHhceAgUUHTUpdQLksn4WNuxo",
  "key19": "5oj9zkuzUtQM1sraFWNHLpAuTU6rH6UYrXjTzARacf5nPtfP7zMp3yAqtLPzfzy7rHvCMYBahgpEBHcMcaYFshd9",
  "key20": "5PdiyqGX7aKdqLjtFUbNSXt1x65AnsQgjiDm5DGsF9Ga7iZDsA8rWeB5JbPb15wYjbzUxzz6XgusA4R3UQ9qzCBF",
  "key21": "2EuCU3QVPhQ23CQke1Fyuu71vLYdCP4ZApJvyYKpFnRBvazhH76B7TieWiHWjzTqEVXTZr3Cg8RN64wg3Qoa1C3R",
  "key22": "3j7ec6p4jGAw9RGzgTakJjYGqNgV74giMYWjrcCf9xMTJpo5VYXaqrSdJuwLND8bK5ybj5SS2isjFCwMbCVFXoN3",
  "key23": "2md2wbusfNAW2nqEKSWksAnZYCFkz86Nt9htvzNxTy2UGJJjWDgJYnsnWB9MkCP6cpPvFH3PbsK6p5V9R3XaXnb9",
  "key24": "3MKFSKQcRuC3SpWk2XBsY3ggNMnMYDNR5FiJEw3EPZiGdkBvWw8PUtt7BVTN6f7mjT49N9cgbZCS8XzeQR97rzqz",
  "key25": "2XLJaVPCUh8ESpESuunKeFxcgHKv2BtPEZvTNkJRXCZcqmXsXfDgGXpeYJUN9W34BJXsBohGWqCPeNpfzcpADgqP",
  "key26": "5cChMhmA6hD7HReBMxgK3ML9b26Ww5xrg1cEf7Fzd2ynFpBEEqo8W7qjr1iFy6dang6wGQDXWTi1XxnGjiAWxdKC",
  "key27": "HFcqvRyFJsEy1dRL3fPgZct2igeqEBk5hLxnYpUd6k55w1CdVY7neeoQwQyxvgdsfRGdcZb6oqmsMjvS1JkFSBG",
  "key28": "5SfFadZUExsHiTWNoHVU7VGvKoAW64geZPuuCTEe355qT4t3DTPQFd4JHpdfZfXiP4kAeH7qXM4wqgVi6P4qVv6s",
  "key29": "3kBinFVyFWyvQt7o1YsJbSCVuX6uPWtmSSPhYXjBeLQbLWPkCwQKc8UkYG1wSHimem7oUDFmwsqm8uy2EynWrcB2",
  "key30": "CcRgsoS3hapPzbFS5KysPZC6HM1TCBxgwU8YzYqszQefReTghsKoaCaSunfRfnUkrtK47SPv4DpmjJZf6pVmFwv",
  "key31": "3dtDSPYcZkd9DrTwytYjCDMFmy9bzWrNaE9jqfWefQkJ4JXshjtTdbDDYiRwRDV98edbAyxqR4JvBQvGMRQpi7ay",
  "key32": "5C4jM3zzRiWYmeNeyMKHL6Q5fKquVcNhQki2hJmdzQjWFiEwH3SoAtg14mJoK6KAPac1ceiRFRbACh3EXEZqp3X5",
  "key33": "4NcGAeLCnXq3FGJEHS13jy2mA2gYycwTe5uGckQhivm5exDpRYDj5835S4dMXore489xEZPQvgqvr1SpFNwNF4tN",
  "key34": "5rArYEnEpcDmNWXPQgSXeDdxnwHBkwNXsmakAjnfwppk6yCJY9wycgScawVa6eKu4Qsi9iHNpcmK3QgFztxmRdb2",
  "key35": "4K64eW17m1kS13Axtkdsq99nJT5Fw2fPH5VesTTMCgpKq8tspsoB2EgVfwoM7nYFKFjoTVi2EMHXbs8tUbmCGBBM",
  "key36": "2MUQZLCoQ1DD5DhHmea7f89hVVPeprpW3kaXUBmGCRykZ8SJQ7KKbmA32gNi5VQxKfVArvdeHYi9NJd5tPD5oWQi",
  "key37": "2BNSvApjCj5T9xiw5YwNRsk6VnvoWdvA5msPdzMSbxWy17ha638mwGscVx2JjiRXBfUdWNYXXFrRJtAEg3AgLK6V",
  "key38": "5BfXSRBYd7H1DC9xa6QVsJBL24Zrb3pKotkJ4sJb6bRkGSF3nEqSb4ycGXa1FUTvDYZucABRiY2HdTueFwHJiSje",
  "key39": "2w3yKknqhbVMzZYpxnEPRGHHKVoYNJexfXwijEfoq2VZ8x72qNcoQ6QY8qGjxV23YoByJnYCoEBRJHXUa93d86UD",
  "key40": "3vo2KcHaQApyvzhtTwyXKNcbpDA99QnATbooR1KZ6AKpNDCpF5WenXZDRYMqdE4bx6xsT9Hh3RQkG4dRtSej8ZEr",
  "key41": "5cXXX2toizRxQ5E5z5GunJPHF9Y3pWjSi3NViwhcCEazmMTSBzhduhVSgxcQLEEYdVbmGqjPeuSQ35rQR83vLTHX",
  "key42": "2XfvXu8JmpubZaSuDFyksYfdo3y2ZmMTpKBWwYu4rLFxLexds1ZFpUhwFcZ1D67xKrgi5gVKiezsWk7hrSvxcG43",
  "key43": "4FtLnHkVgnSWaCaw2bKgAUGiJASaraE9CarQhzBvu3QfgNBm4iKPccULRUmj4VA8P26pSWkyQoNV8vH7xPVn9Ano",
  "key44": "2CpZzG4MK4XGtFeXbQ4TsvwcZbExUBeBcJN4iD12YfTTYTjxMGVcUheNbW7GrD1naNxCP4ANALj5nqKXtYv2aNyS",
  "key45": "2rz6NnsBUNAGqNBwzDp3hnTNPmgR6jNiPEbEmo1uUNWmWrRDyvxXb3MarL5vPcNFD5jMHkdPfWVdnLmp8tTnwGfw"
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
