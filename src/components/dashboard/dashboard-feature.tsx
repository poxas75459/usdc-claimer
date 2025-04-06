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
    "2jUENJTta7WbFadid7x8bhvJCFyxJXkgfnFb39TbfjprNuikJnrxXTKByTSga6xBW1uh4To5yGBGfL8qF1HL8gFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5srShGYkgHmVZVHUkwWraMVmp76T7df2wn84wGanDFYCCVgkVzKXAdBdpkZZQGKpk828KP51qLCgMhqfGfCjRDf5",
  "key1": "3qGjKLwKtt8wPDtWEz7jr1NiJoegPP6oQnfDhH4QrBEXkwSPShndLi7SkkqCGR1MqcTDcBnH8a2Jk9gXxTS9ugKG",
  "key2": "5By5qimsczy7FpcKkEFX9Hk6V3X3rfDV1uPH9fjrwxMuzkQcpCiibKdMBnyj2YP34rx64Mc296sc6eeeNqJrHfM3",
  "key3": "1iBmvx6D2wVTWAcdMy3kjAK18LUen32L2K3JFyUvJJg1RCkB1pyhrd758JyhFno9MvM1KN1dHeUaE3KVn1BZtnx",
  "key4": "2yHnncEnWKfqN62jfQmAFqe1YU6RamcaNMLzKR3fG8cwjv2VGHkuCvAMNhrwGhLUh1h1VdNtoX8pVPaAf1MRWYHh",
  "key5": "2YpqtJ8t5ghPa1hFjGgbD8ZZVzpqHdv3K2Q471S9pTWWx5MjGxxP852uAcLL4eCdKAKJ4xrJ8vaztXwX7cF3RUZ8",
  "key6": "2Rxg1RxAMp8DkX9nhYoaRzajbtTqxkkkGnp2tENFTapHN5c9vtUWHqMB5aiqyV7jyWFURZwGXnZn94r5TAGgCSV3",
  "key7": "45EDvmem458ZJWuR4wtUmzC4mgRqknpZsE4LS7QNyX4HbDkdjvXjUuhsnoqKdzjaYyYV2d7VjXdQUEzLVSKHZbtH",
  "key8": "3R2hHzKMYUPNfR2ojboyQUiQKFu8mHEBxsiRbXvntmt8dHF3RJGphunc5tEU3Gn1hDz5dYM14HPEUeSutkyLUQAt",
  "key9": "55QrgCfywBRtGpPqQKkg5DLArRGR3RuqWy6XuCTuT8nvC6EoLdG5gsJq2HVhsdDtDtCSEu85urkc2rrG2BNMNdtW",
  "key10": "24977AaAqmBLiNV3fjEWXrPWrrtwh5qucFdr4N5jFzXPE5p9mkNRcjdaVAvbZEJ48mkBnN6AcrhT31vkhfX7uXxH",
  "key11": "2BA2WEkJvSxVGZ7HtJYHasjf471M6qyngSUXgxGstLV8WUvTotPMj7aD6Tk9gxUbtPQfd7eb9Nk2wFcrKUnhM8qm",
  "key12": "3RsoT7M6iD6cDBh8Ss89w7q2wN7HdGPBgUdNQrDe9VweQ7XFqFqmUUbmbV5NGghMEurVuBRAbkwWUj3tNJSGgzNz",
  "key13": "3G3dU2Q6n3NS4X7gVtGT8FFyFG1a9AAZsZR8K9ZfFHjckm1B4YCs5CC16qFiKwFpnrRtcRFgBH6UxxaJbkfwvkxa",
  "key14": "3WLeMYWJaMs3MqjywE6N6GGRidd3N53aPF1kXaVxCnJ5vgJjKLqZeK88ekGcNg9KttybGxanAnAz3GTt8SWrJdX7",
  "key15": "EUArHkxHLjoPAPF19JwtxW2Rb3dNhZJEuFnYfYTcFvtQNS2UYiz3URmWAriipeoidYzJ8VGc8CeBoU71VeDgZZH",
  "key16": "4TRG1y32FVct8zb5dykxkCtdi64RNqt7gnREeN6yffudtBX2H6tdDFWvy9Yrv6u46shxsUw7CYGbqGqMSQDMbwiV",
  "key17": "48HRGJicvpxv96txtLL8S99eJGvqAobNWXh6anX4vdizSAWq4WuB5ktBWrFbsJiy4zNzNdD4Si5AF4y7TiiDrkLQ",
  "key18": "3L2bfpBVSNzyAcFzgJNaVq3gE2dscqDJjTF597RXxJvbwSE4anPeGvJZ31VRe53xQgmyHizxbGbycJC5UfmS55tG",
  "key19": "2CKPJscseaS2rvBps4FCwQEcRhPn1HWDiLA9eLeWnKmb8gHBhgJyUsYUmw8Z5DuWiNkiDaFrNWffEMZrUkKEWAGs",
  "key20": "4FR5GBvaafURnr2gfydPFpZB9gZgAs44w6mHfSmuJ2F8VTXiZvLk3KJqSm6xU7xNTg63YchPz5RTiN1qFrrF99es",
  "key21": "fsmiVu7xHoT2egTJMASVU15EB2TY8ESdTYPPNB3K5VDLM7kxFNYiEy8WyvYAQuxyb4ZsR2GGUbPVrdi3s5SAHhU",
  "key22": "5BdjwcKPDkQnZvvqcZ2kQERHFuFyQZP7Gsv1HDYchE3dr5mT7Eefm86xy3zZqHhojedwAXnPgsmQF4xuDUJyS7bL",
  "key23": "3wAxkUHCAY9KjvSCGDvpa9tiynjhkUwLkp4pk7rG7YFk3rAtjZPdU6skHYitpbXhaiQ4mDHsC7qK8i4jPZEXoKn4",
  "key24": "VAnDkZUpjunUgz8k1BJ8JfgihLqEW2jnLTN8H7N8VEppoedi4r9zN3E3ZaPQM74b5WfvsntHEytTu55PS8TVHM9",
  "key25": "4pRepxQL3piDtrVHWMh1Hp8z8QorPEKUdbrzUmXTdhCU2Q38Lf2Adc9aFsXwhbXTz2YQNx39HyKJ2eURVDf4hQFe",
  "key26": "33PYYD3kptziKhd6Pn8Q4bmdVDfZyd3mAvSVZLbZzsTuYFhsiXx5626wvWPRoAkcnu3PTovvUFZ3NoQtn5puQFbE",
  "key27": "4m5hWR5UGw3acHAwjACLFCLtCaydQ8CRFywzgkZoGa6VbZohqidNsK8hMz7gE5zf3Hpn1FnRj9FZ1rqSPjmuPJM6",
  "key28": "3yfmMUjod557fXaWiTKMxB3hEvXj1oqx7dkrGujSMv7BTUXhfAjafBihe5aBWcZABuehGZFQ5Ucm2q6E5BtPF5Rz",
  "key29": "3B9Zr4joG2ucgmEDdecyRGqjFETS1B5REWybE1e6kHR6fSPHyAoZbGFCiKih1smchLa4HeR7pNSbBXNH6yrRDCyJ",
  "key30": "shmvk6nbSfot3CFH9yKDr3jNH8Gq4z24pCgEVMCwpvbqhyaRydn4jmVd9muRbEDQcRSuHveib1SxYev3TZK3HEM",
  "key31": "4JuVVvx2iPPCd6JxYg5xXJRVfG3rV3JS8K4bkAhbmWFRodm5mKVKsaztJiE5TvUtBMNt7NPdEefzys5y28Zwp84J",
  "key32": "rLS9bSbRkYpdSPs6utTiMx8tiZGyTCBgrvy7uR6NdT6Yjou1LH4YSPa9CvUy2qXxRW523NPwAcHkR9wJBAbG1Nf",
  "key33": "29yrMT24BUMxB7q8MF2roFmLxPjFs2nuxWujySm4eZKyAtrieJM5f7kotArsS6Y6y799CrivbguMzdFu3gmXwkTC",
  "key34": "21zFt1doawgohyPohfAdWbEBw38hnYyMg1Rp8eaeHpoEXb9EFbTZvk5xWab55YWbXaH22MJvTTGGVJfpxDwnurm7",
  "key35": "5QK76tjSwYVcRVkttTPmB3nn38QoDaR78bBpQoUvW8jzVqudaQ6smsgvDw6SUnNJTk8KQMwgeq55WPRqbtYUH2vx",
  "key36": "QtUtoLKyQ2BSaaxDzHCbcAjutWKDusQBJGMq8cNqVaPHJ4siMn1GYHa9UmainNiUJ9FENBhxLQk3UgPVYurAnZF",
  "key37": "5sTBrNK7aYM4X2RFA7Cd7HzHsPLNoiwzytT9xCRMzoxSD6uVi7kUwUPTE9WhyzVEe14tFEGwQjmVwbcqkJfcRTwk",
  "key38": "4YuFuVuXXXe5BuYNomm28nt9svRXRJAiFyGrs2ss9LMPT1c3585TWHMiRU44DKvEGMAj7hfPRVJCQoib38CH9nef",
  "key39": "5ndgZEYXTuZT1ufs9wgcu6HsrE1TMmPM7kwSastJ6cmTqXTiX7pehXwfMZ1HPLBbekvC9ovwi5hLzPguUmfHiyT3",
  "key40": "5x9bJaVFMPqG5JMAtmp8xMMwqMs8rr8XHZEYBzeHZuUiS8T5kDtrSi5T96uVcfi5C8Nv9sEnGfDCdTbNDXHeXYf2",
  "key41": "4yBtYqgF79KKiLu1hRmK9gmswdHZPoT7iZpJZj7MFaE9o4AsY1nZYdCfttHos3wR8WSRJaLaVWabR2efkoVda6V8",
  "key42": "51fnb4iZopeAmZneix1H5SfmpvZpXtwgomXmYJpcCmAx4DT2cTGdX5Zg5cXkd1ZafLvcuaF5Zxg2UewGWYqpeTz5",
  "key43": "53eP8Ai1gdfRsf66Qn1V2vs5GngpUeyqeSWfZkckB9b5WcbGGJagqqgFVQMQQdQPrasFD2wpRFN4bnD3i1DfkR3o",
  "key44": "rWGE7SsZYiNwTb8Y9ochNtZ5qyN849krExgF8YZhDpUK1YFQpKWsgFN18xfLUh1KtMBKx5VcjXs45SSfvVGM1JC",
  "key45": "oXz5pbgSkTcxczkdEHbL6U1K2VTTzitwfCoTXAgeLpUMHHWhfkN2Fb9JY63i4GNSyJvszxuw9ouPZnp9UVQ6UgY",
  "key46": "3cncBgS8qHzAJNSfh9BfqwC3kTQsU9AyKh7exuwp4pvzKkmU2XvNjBFMyTZMytEY7XGBRfZppLbWaHvsVTkYCP7e",
  "key47": "2MqX9w9LnaYmmRpqwXzBiGzrQh3SN16jHREMjwrxjZKc4rJgiTcwaEKXxarhhmTP2pas9b7vGFvX1aY5RXdTUZ2F",
  "key48": "mpNfn8W9XjxZYU3DSAgC5hRH2vG635xNewAWiX2NMnePb6ZdhwmCvV4xWYgXt3VnMAsv4xBBV3orNkGFhDzsYj8",
  "key49": "2n3pCoYAA2tWrByxxKGmDoKXoJax3GFPkUcHTQ3KPPWyTjMzq68Zr66Ydm23qKhRxkjYF9J5iJLZsMbWM195PYVz"
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
