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
    "2QNb1Q7pkuTPSE5j3PWuK8iVShHrSreP2ZwzX3HGzwEsFRTn6cD2Zp3vHSyvngoHL8oShV4SNVwDTt9Ba4r9FqMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n6qUzmNRmq8anVS8aqnCGEED1gpZf4STany7ACZa4ciFxYXkbn2qNc2Q1jLsb9KSbSGvsH2z9rYWKfzwvrUatot",
  "key1": "2DTpgfaKNAPtMHcWC7phjzTnfHBagC4vWr2EnNrZ7ngeW4jgrpGD8m7xmEK51r1HcSGiUoWsc7k35YPfBrbDTug4",
  "key2": "35n9vKT9aetboLgbeozRYpuf1f355LAkrsjhvokyNH8qMzFSsttSXBscXduTzLFQudLZW95tMxVhN5CbhvFkbi72",
  "key3": "4eJKeGYgMQtSyn1tF7zD7Hh3bpxZ4AnLAzQ5ZqzcEo4ZVgzTLFzhi5fditgxysb5NPnLgDtsaPYQXVbwrMdMmvDq",
  "key4": "2BX5WAe1wfrVqBnfhifZFbDieLN9p8sye5d4WcuPfq7hP9XPbdCdr7UVt4cWBR9E79hxpqoQ1QRhN118zx5Mnyif",
  "key5": "62HETuN4Dqxs7jcwbUP8CPKnxeuKjVXR3LFaDiMQUfcbQD8zcMn5cWEscddvDThA7wNgCAsMgH6DTrZcPBf7fJZA",
  "key6": "dJwQsvaN9gS2QBu8cuvfiNSYTocGgEeX6d8rDWHuvytvpA31fdvJ6ZCKeDKszE4uCSjC6QWMEpvp5BM26ZGGJiR",
  "key7": "29PEgNUuzAr6AyVMMZ9gSYeJQKi79BYvLv8kD6EbApdUY8Ft4Qwh1e6sjnCNPDGFHLUPwnUNVrKbUnKoaCVjgFrf",
  "key8": "3AdNXoQE5gUAB5TNqxPaQmsjrH7bg2PXANcgZ1ckjPwe7kHAZhXi67s4DwhuSs8AT9iL4EwK2LrXDUhpsReK7tEW",
  "key9": "5AQW8Abv81bYEuJM9YpzMnZn71M6zypzyHo8YzDHZvBgnEnuAVJegx2kZoPTzLWBPm2kyXQfk7YvuDA4EgoUH4Ec",
  "key10": "4RqQDGbTyDLV5KEaxmWNXFF39f3enesdTpZ2BcThChdzJJg6gwe57PMf4FkEKD9WF1LSwZYi8gh7Zh9Mo595gLEK",
  "key11": "bFWLaH4FCTZRy6pzQFPGC7VY4zB7BoLSbHaoqpk6aX1NxKD3cVktg5o1pa7XwKqpJzDNAKxVvpwJBgHdKQu9MJv",
  "key12": "3MSrFjLckzjx73efzcQHY1rVQY2Tv73HdAQAtUnPVBA4rZfxA7P7qeKGXbHckMq8ZDdtTC4VVPdyJMzvKQkBuNNb",
  "key13": "4RPcTQ9JdfLX1mronqM4uvqq8C55hjGLBUTLYViQC8DKMBb1RYYDA2jbVpcDqNEerBqnVETSwQB1PzZ4eWcVx7ne",
  "key14": "vzPp9doUQuuyyVhKQbQZASkNSND5uiT7s17tPmXC1d4D1nb2LzGApQNowA8bKyywo2AqnGDVZcJrrmPz5KDsWfc",
  "key15": "63tfKSJ5Lh4WifawaG9tFBKbEebE49ycupPpvsdrk3vjYfT8sJQ6qYAN9vuvUFh3DncEHkxAaBcTtPuXpyn7hPsn",
  "key16": "2Woiqy4ZYDHz3ZcwxKmvBnZJW19gEfBbzUEYQZvSvjC9tm81YJ9G32oEw1Jf5JjRCCXLhu9aZ9C1HnbrpXhhoJqr",
  "key17": "38nayEo3P7jLJFyfRcb5kGRsnHXjX83WuQm7f58DDj5CaKZEVAXrvjtg98vaEXjBw6G6AdkyybQVmkL7BGTdyqWu",
  "key18": "4yF4PWVtpEgsnfZFvY9L8upqrUw1MhUtHEw2PTm5EWyyUXow2D66hnWFQratHDWXCuYDhyt5HchzfdH2UPX6Cjp",
  "key19": "2hwVej16Ygdw8LxewYTYPBcdUU2mHrYoKxQXbEJsnGpmk6dYiYSjNf3eqk8pCjRHFNQbv65bFRLvvSrnnUTvepRq",
  "key20": "3vqdHqXs7Qgj12yBbbQVBTrwzkEvwbFbV1SBZtUswpWyC4ogGSYrVyYJcyLiR5eAEh4gwQDGg8sZbasT94iE3pw1",
  "key21": "4Mn9kcoPcrCWn2pvJccL6X6PaexQgKJxntayhXeo1RBgrEAJEXJA61JdV6Td13157L7XUCmfqyxviuMDgSAjp4U8",
  "key22": "2xzaimuucDo9gE764mc2Gr6YiebFmiTGMHxE9xd7UQdEB1eSZmBNNLwDLoU8Pe6dDwZwpYDpSaCaJs52Y48Y1LJU",
  "key23": "ShKpQyMZBpeak9rJ2ojuMPw5wKudQho6vRpMhWLZXCLaSSRR7riq3WjcqobyNm5oooni7EaEswqfUFmBW3zVWvn",
  "key24": "35XvY5BQzMtrvbSXVZPgfhs6mjNHiwCXdzipxRH5Cv38Jxp4jS4tdaEGFud9U7VEdES4UQq5FMjC5Km6eTMJYkJT",
  "key25": "4FY4U83H7pEkt8pKARkMoxiNJrj96mzAszKTTkWeGqxw3ZHupoyTwhsMRgJrBnKtfiLHy7WWD5wz5i12PsKvX92s",
  "key26": "47Gq7i44PAyrzgCL35ERaULJaX6ZRxWT9BTLpucdL97e6XaM2wBfXAfw5Z4MGBBYoukZdo3k8P7xFgqUxbKaFhRg",
  "key27": "dyRTvduPu6MnASPL9c8Setpks2dMmHzanxJxwR4k7ux3AyYqydNu7y2RNDUi931GJGM1ptfmizAYkpDpKyuKZEs",
  "key28": "5sPj9KxQ2tPxvZ64Lvgy6giGUCds5zeJJmNQec6Fwgpqs4dV3qSNcgF8UBE8uwopFrxxHxCHfn5MgW1xSfU38ZHN",
  "key29": "45oiJVrZPHmb4PuUP27j4vi7TtLptiUWumUJzMmepmQXuAF4ALpkHBR3sMyEPweohT5a9truH1endcN9ALwPafmw",
  "key30": "5JPZQhZpGsES2LgVT7eyVQQsCyiCZ2sRLniqqKE6uFPkLSDwJMnkNJqAAKM8aBkpum462zxjG8c8EFeFzZBv8rpu",
  "key31": "3J3qnh6g95cnqych99YhUZvCjDNgDBvCQcqgGqgPHyZ4V4sjSDRyb2B3gLQkecQAA9KM6UhipqmibAyQmJhvpmmU",
  "key32": "5viKiPo1LCDxSHoXb8CRZwBFPPKnxNVbx8GYqpDBjRCYr5M2oDL3Fc67ikHe7P5zpgjMSS2whYvweSQe6fEvR6PV",
  "key33": "5HqvWkXX5ZHXy6LqjZ3qdC2pcBYBDWGo5eXP6rkPZ8pTGr1vtr1mRgMy1LamVpCryVUkRWErZJdxtvtyuBfdTX6x",
  "key34": "4VasBgHoo4NVyMKNKpyccVpqJfa3Usz5oAyHG5MEp59Fk8dBWrRxDzSB43YaukdceikuHrKB42TREojjgkEynWHW",
  "key35": "2u9nCYnNxUNykYGi2BcfDHn7hKBWSYFa6RK1DQN7iPVm8NfChpj25sqpVWrYwjtd42CVg8iZrF5CybvrQX1eA871",
  "key36": "2H72buZi7ovLBkrfkLdJ1MYm9NyfWWKjxwXcb2Mz3d7zLEMqMVQvF3DCNxGRvkuQCd4fWQynTqVuEb1wtysxX8wN",
  "key37": "3eGRjUV5EQojveAKPZjiX1x4rvyLVXCtcvykoN23fiKpiZ5tFmEj7XK16XBVegtKkVfKKrCwiPaiGC5TWXkw2BXr",
  "key38": "2sS3ks7AcNzrUgNxrgQ32tPeH34n2FMaBJGFvf7crkB9LVVFp1YgTJRGTvAop4J5c86tdkSty8mdQYGCn25fruDE",
  "key39": "32v7r1rJ1QkUPeXEXvfcAS67X8yD5kqNsXd678GGzzwNtZGZRiBr6CphV4BYVytoa8pZCC7c3tTfFhfLoR9RERQp",
  "key40": "34Hmh8BphUuGn8YJHZcDbz8AbeQpEcS4htNPWUb1TF89TNHjmYe97j2riP5eq9A1CpHmawA6NBJkjW4a5UYqJT5R",
  "key41": "33cz1mKBqfk43JJXtFWzCfa1KocWN2AZx9ZRmJ9742YGQhYhZn8MTu9UhECdFDL7XjMEzHPrVEWWx84EFBhevjW8",
  "key42": "2d22mCGbTNyLxCnMtEFwBCVdZKEcPg8jCs9sfG6JSmVgoNU9vQsXeDdr1mfVffBf7tkx3PKLpKYyKjiazXoouFCn",
  "key43": "57ruRJUHYUSJ9GZCJwAjKb6M99xwitESc63cRf2qgYkZNf3k6viSo5aL8Sb1thHrByq5su5WzRteV4bhZcbEnWaC",
  "key44": "ZkCuC5ZjQfHJp8uHS1um4wsZQcZeChpi7K8J3XFK8mJKakc4smFg3i7PShZugFBFCyGojzmX6eGJZ4FttoM2HCt",
  "key45": "5bTMyzXpjUuJHVnNkEKcuPyy65wcnecb7smMJgbUGzhdquaMLK7Tx9yigEmFbpdkasv1o1LAwq5zLKyBjRs1ojRo",
  "key46": "3eHQYfZgr6JBJsGDy736uMcvaLMa2ztJdtqMKXFQDQzeXtcDQm1rPnvTsbBSRHWMUNBrTK8RUFyEDgrUTxqYwWcg",
  "key47": "4SiV2h93Noo7uZkUtNiwEh5jUBUjoH2oX5qgFLbXPhoL6ChUYk8642HUt89aTsMNXXN6ccAN1FwFZg5iUfXLyZDu",
  "key48": "FzG5eqX7phsqjawRy3KiHoN1SMtooVjjTKnUVNqbCwjgzikVB218Qdgg62qGEcZK1xo2fQXaMgaVwwGts7tTkqP",
  "key49": "41ZwJ6GfQs4A4i1CE6QCjLuhB92mzm4ZNoC7EQeodpPqAhyotp8eQLL25Qjzsn1oxLwd8X7g4JCwgikEfeo3j1KW"
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
