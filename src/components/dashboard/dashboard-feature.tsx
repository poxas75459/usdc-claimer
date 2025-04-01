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
    "5Lr6pyNdS7jLwdRNBGmQj2zdcKbAsSPyPS6vpsDUQMQf2ZRGxHQqhTKb2DdJZ5YF6TByDSr3Ff9G77xuKqLqiFpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWt5UsAwwaVM1ymdv6JM91QGvVd7ghgx2HvN8EywLiELpsErbUgK1j8rZ7aKLc8LozDkjUeaw76HU8Ydxq3YCAC",
  "key1": "4UD6tVV8dKm5JZF4gJ9dBtuJTTWcWepVJQcvV1X8pZosagSCo97BxPXuPEQHoWUaS4VhUMcamJHcucApc5EVyoLe",
  "key2": "5ADUpPj7NTG9mGfrzg7QYgaRc5XYy59x5CL7D1R4rknQifbmPejnx1ZSmBS1EBMtYM2Fzj4aToyLvvxNM97zpSxu",
  "key3": "4gs1ZhFYYuFXMKeESydTQLsKoYpQ6V4i4xizcresCeVWMA1DmxDuRqcGiMfJ3j9kPGeqs6SeKZ7YpqSYmXMhjig1",
  "key4": "AtZJjCc91XM633XvqLtP7TjC4Dp6w28WvRVFh2Ae3U1m8MAfUAmHKuV2REMmAMGaYa9d4outcV41Ks8CPz4Ty8e",
  "key5": "UhCF8ohaaVAm923N515TtGAgnUDWzJRvn4JsmNdveazQbs4QZh8WGPj2LrZBwvjxZtri1BTCThKXLy6JH9PraZa",
  "key6": "sPoUujceW7SNUDu4EygqfY2Aa5gFXtjJSnj9UhT4possFWX2hHdyg99tUXdpxgkbvbC6PcdP7htwegMXiFUJxKT",
  "key7": "5zWT9BucUhpQp9kdW5NPP7vmHPg6GPLruZirTqQDuTGgX6DWoXsZKi4iy7a2E2tansSDmFAz3eYHAc4oFWTuXxF4",
  "key8": "QBw5bDg63DK8tKqEUfVkrhvG63gegtG5xp2bUPSrMPkqP7aXXWwdNVd9qhuYCnLBvrsYgb2WYeVuBFTqnFddm53",
  "key9": "3kdRQCmKcGY6tc9E8J9WYA1rhhDecW8MPR93TrFc61bL1SMzbLmDYeAiBYfyMX4b64fP7UWAho4a32ezfsonjpAq",
  "key10": "2HU6z4YPH9FscCV4uGVxUu3KR2GUvWVvJHZEu6Zs4N6xB4aePnieoi5xNkfGQkhnGY4FdHWjLE29EY3fHmBbX15m",
  "key11": "2qNUPHX8BrdTTrnU26wrxgM5jP64YrXjBTPizWRUVZp6qrAZXrJKoK2PhtCxGXAWB6C5FfiAXWbYWSJ4GgfFT5tf",
  "key12": "wPK5Vv8ymGiTTUtw3xWPJAkNVvfqGgpeDyB6Rsyz45547WfPiSJCHVw2A2h1xLpq9aS8vhpQR8ELHxtPjAB4Ygf",
  "key13": "4ECm4Fm2uCRJVkFY1irLZKKVZ5LyyB4Eo2KqYXUUc19hs9qU5M2Db7eE1TKbG7GRXETTbwqmJZFqes8NhPp2n3WV",
  "key14": "2nZ14GsP6QhiNTLjfPdoMVr5m6driGPctcBZTnqurQCR73eydTPUzmSRstVoWkE5Bn3As8hvyPXcbH7ZQs7yZXc8",
  "key15": "4QmkuXQWpQpMANW98vc1AXLAkwdXcHHgAx2oS2ZnpNNsgAUjz8G6wta8FYTf5CfJUuYVgPnc5vkGgUyw3u6FRieV",
  "key16": "55F9fvqDTjuZip7Z9UySRW3JvsBfWjnzz6jRvoLFpa5sQbT1dXJwcixJvBDKaBxa7Kvm9utGTCDeQ5aSjHP5w2vr",
  "key17": "2F5wcFiWTgYJaM3gvPG8PYFgk1EMiedQA1MsgN5YDpnubYqc9txD4Ruo57JudQLrv17vRGehr1kNRLAyJviZZMhN",
  "key18": "LjCXU24buEMyZWtFxD8Go5pe5iZdgg1nCGHJtC4r3WwRoQTNZoDmageQhXGu5JbspRjSHna5LnF3fD2escJbPtR",
  "key19": "5WfSz8UkP4Gh1ztdtUpBKtBfb85pp1CMC1FXg2GtBNgug6ubzhqNb6MtPFjYBBK8jcdM1EmptoCZ1NDTY5Uaumnr",
  "key20": "2dA5dDj22dEaCisE5Fz7Zmzw7PnK9RPp6TRGZWG5NGS8uy8BU53kfFhxygkQwudrwkVPHgEPSJjX7nbjGHgHSYwc",
  "key21": "Js6kds3modaLLTQ1HobuMtc7r3oh7cFCWrEpvPdDQCP7mSywDbEaDuaztHZY38pRfZJw5e3SVhULVkwXPsCfkYs",
  "key22": "5RByp8BPJVgcFkotVKZ5aXnTteAHLpXoqaMbpJqrUo2b9Cn7x2SSqGtnb3jdfxzY39a33YrJsxVn8yBrwS55CQWP",
  "key23": "E6HLqWNi88h5eEtR161VuCYqA2rrEDhaZ5zreUDdMihXWbx5eaQDRhd4rxTdipg4jtkKYRQ2av9hMkp6hg5PMs3",
  "key24": "5LjfMQmTzqN82WwhJQYpkZmgpxXkUXw9rus55ZUwZMTDezDZekVNXQCoDnRKXqyp41FLrkt18VgSfoSFPwJXNKT2",
  "key25": "ejcdERbHGXUxPZGpxEDEzNUqtCdgdMM5znRLqWDYsppq5ftqMD9Ht4tHZYeKvC6mSgXgyiva6SLAVH2ZJqrKKaJ",
  "key26": "2k4a4ge8edgcP3i3trXpbYtr8zmb2Qrp1YowxxUKmMAwMTyNx8uXNt68F2HtfkoqSb1KALzizbRmFRBBjHPYTadf",
  "key27": "3qaK9M29Lt8v8EgTi7wkPGzHK1YezCN2QnKnLeQ92RQ3YUCQxJTdvUvLDGktFiQZ1QamiBtazEq2Nu9V8u5bCVBh",
  "key28": "3YCFgWEKocWxQF3mnrV7ZbdFhoDVz45uvjDUcA95WixhA4AUDXFYzx2o7pJrkwpii5jbPcVUUDAp2piKRTgJQ4iL",
  "key29": "2EbKQyyfWUVr2pW3zYdsCYam1rCTQkNrCB6w2BivExbkaciADmDgAD3mFDwK7UATr6EUVqCejM1g1y9VPqyYgfG6",
  "key30": "3fg6az9Enw6sFx3ujuitCGRoc15W1uSor8C2bZBatvXwiQS9mpmiNAPmTUstczQv5VQivT8rTsX8XRyGy5PwLUri",
  "key31": "2eGpJrdDZyxqWQZEK9dhhogrGRcztKwLrj59aDQGpfcaAQzrZ8qLDUnNg4tM6a3xvwiSeBFWJ2ZRUzKn82UBsnpT",
  "key32": "9HkZciPBBrnoLbRJCyoT1bywVdzn6uCAjkDYsj15rPgBybgJCFrdqksgVBFqfyYv45H7AG9kjv64nPygyQAV5JR",
  "key33": "4NwefYWMbXVGwysPHZDzaXdqzHyDZQqMQdv81fHypSZEFrbDVsg4KrPCtnYaq5npSXUvrAuedppK4Ycza3zrsECC",
  "key34": "3FLahyXJnSGWJF83ZhbGQT4QJ9nCdEzdRnLSKD2i8DbydxNv53F715ZmwFSy2KKBq6y3e9XvtCpGZM1RHtBhiWGN",
  "key35": "TSgbvf4NKEnhr5rsshHdCA3TXtszkDrcjSFpTq9MECSxEfaEntyhzsvqJcw7zuoyAMFpvFk84Njwst1NfAf9uUu",
  "key36": "ucpmqEVgv6yF8SaSaGJgMVJHmLRT7a5HFVV7XsubrRMcMcSnXN8pam4kYERkjtUxz53DooPMaoZkCgYofuaitWv",
  "key37": "gbHtNLKS1DCmTjn6H3V2irNesu1TEZWX59fooNREQiQWRZr47Gd2Y9Amu3VXsG2zyEuoLSGFeU6xb712PR9MDiB",
  "key38": "4unA7buS1dAKWU1nzqXCUBBGU7rVraMXZCaSrPovNy9N92K6fbjxaddWda7fuLaxkASjQM87a2bUQQq9qE7NK5cc",
  "key39": "PqkH8T31mFkHsZPbnTzWLvNcKgHhgWsHU4Gx7ba94Ay1ScA9NFrwdLekvGuhmT8kLXkW9nxCLdmhsvAXg2PwJhQ",
  "key40": "3iwykZwsn4DFALnpssttmaGDd7N9kuHnH758hCwKEWYTruUTc6a1sg2cqYtEWe9EUdCgPWmWqULYpRQYZLoBQP1A",
  "key41": "2ULtsz6DBxhMj42HcdVhS18n6M39mQL9NaJeMLBSHNyDMfRJDpWftKcje991HymeejMoZnLvApKEhCiLR8Y1svF8",
  "key42": "3rXEMhr5j4wde2bvco5jGoZZjd2xR1TwWUnEy29WwCcwPzPB5bE43GmqF6ATu3k226vGYiuRzW5hbqB45fEVXcEb",
  "key43": "4XYWnWgwU8dZ7imHYPCXeiuNhWUbbksQnbPfW9z2iuKSQFpccRvdPNvM32Q24MoMDjDY4jmRdWcF5ndQnjodtkcx",
  "key44": "2akUawD8H8WBnXucySWrzWH8vE2PWqdUNtdkmsNQKYJYvfU83W7ghHaN5Pz14QBSyD9AWaUfwdK5YRiyiLbEbMt6",
  "key45": "47VHtgvi5Tag5SbXCUkP2HLFKhJBxWJqRVoo9bg9M2hEPFQWyA97U4sYxwGVzarLDWRg4vY4R194XeDysQefFUtt",
  "key46": "5S1GGYoJrFge1fKCqDQprDgQ3pTantF3ABYk84WwMed1B1yKE3G5pBoTMNeA2nqSCyhJhMZg3YS6e2nv1oAv1J8p",
  "key47": "qT4Dba5MToSnhTmdQbaysH7gpgpCUXczGrTJQzXK9pyeXTWHpopNbBdAfosugFpLefYamyn2ucDFL37h9St38SG"
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
