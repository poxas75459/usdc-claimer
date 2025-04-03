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
    "3raJ4WapCtqFhZuADS9BBgSj9E1i15Bp6oe1eUQjMUzCe3cYeM7pXDCcKCNLffqa6yWuUN1d6jhFQiD4NhKWgBgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dRS4HvNBTDBkKRPu2dU4o5LkGUcV8fyKFsMEqYATYyNRDa4LoXUG4S6a27vUEineDaZ2sKeecfh7zTyov8KcyXQ",
  "key1": "4G1Wcn167WRxENGisJgpA63zk6LWQxNW4U26WzLRyh671fc5osubG8SFjFyisd6zihQHHGMpg11EdzbYFoW2gKbd",
  "key2": "3SfKhiLd5W4SctW4uUXYu21eFHPnPwN1x5vAtimFoju5Eh7zwxZCEEMJ8AzmuMZJgUxikHimGJvSE1UCnQeeNndG",
  "key3": "4qBbUtVRAW3Ap1jaADw1KMPyXH6vGa38zWnvFEKUN5gaPdtvKR3K1kMSkmrNwA2F6VooiPZ8mRkU9ZnVrXANA4pQ",
  "key4": "2wvgQm6oDz6fX9bRHkQoYACgYehgyfJoxy42usy6ZuAbccSvod245VxQmEoxLL1FHPwUVH2XKEnWU4ffk3wf3g97",
  "key5": "7oQZb4tV7mLTuW2RnBA3gCrT52Rvs5LpKgKreEnQBgvR58L1budcVC8M4rjYPDoxrdwMyV9qcgj6Ep4yFFQnYQ3",
  "key6": "32M9MJAiuxj71vzkFpvXSL51q82BGuShsQKnXPCq3g9RzQQt3pSFYcp1eh9wLf2Z6CRhfp592sQ88CPVoZvGxvbt",
  "key7": "5SbT6vED4WsbP6W4JzjX5R2adCHZaY5U5VzhRSRMFTPrxABRSbWB9nHGR67n1Gar2mTZgX3wFVbUmnDAQF8tytpX",
  "key8": "48fRVeeYMBdi4y4unpDPqtdQd9hyJHoNxJnbnYhYCUR5beVDFhDRfCrCzsqFVP8PnAajJrxDGyLyq8dQbMCiTNys",
  "key9": "K2WfwNKQ4vjwJEdAzRS9Cr1YoBWvu6LpEZ3xDAzPwX16Dz3kprJQiDb6ALuMY7e74wxeaqSJasu6oPfjQN8kj14",
  "key10": "2RiA3T89616MdCiSj6VtjGvqSySccrquA9HtM6CSkTKz8GE4SkhsmVPq2uLxnHQibFpuwh1k6HvAmS5ZzEirVHgC",
  "key11": "26aMSkm66LZDDHQASDdbUimEJvfZzT6XLXTcbtGsrv4ksxYG6axkRhRt3TQPZACuicd7Mb5cG5QCRpbGTcbhzu4U",
  "key12": "4PyxjWYd7g4dozg8kzpYbBTZBYkcMAfRfRGW5fe8QE9cGRDykfewPLjARWDDskJAP97tDJqVrRKM3GCaJgPEeRfw",
  "key13": "2HB2jzEcyorR9juRLvygeMqX9s7yLRYb3zSMmGEn22kQLk3ofgJwZaAmpuAvcD1Rgw98GguL6S2G8T4ADgcGmMYL",
  "key14": "2M8Ms5c67b9GbKDL7NEFi3cKuwm431LnwvHZAzPgh5XmqhmSQDNEVrRFzEbmPM5HmFrzVKzmxd7eetZnT5yuESTF",
  "key15": "4NPNAKSwBoDhiCnN3nTqvkkJyYt2Y4qSEyu6pgd3K7YgMZuAGbunvPv5YDszY3ymJKchQRs1WH3vCdNEfytZZ9W9",
  "key16": "6yrFYUm7q7YdWPCatbnm5AapcKRkUuy2Y6d5sQd8YN6HLuuJPVTnVi3RxJ1ZaoGforkNsUVysYC1xz61ghcaGNe",
  "key17": "4n5rs7wXJXVudhZiGYuCpPHFDcf39jiwfzmyADeTBh6ByQFg7G64N7jdSwJkdyu4q8yVWdasy9a4PDkuMXWUEUoA",
  "key18": "643Hs1dGmAxzkhfZyHFgdnWKVyYZ1179KAv4KoqczG8wXrpNckEVHv2ZTVqWZmPGBzBDA83MPykFwm1H1HN3bh2e",
  "key19": "4iJUCSh2KFRu6SeZjGPo9NRvXEXgABqK4NUdFk1eKLUueciSsMNU5qggsfcWj2Zcg1Haf1LsWjSMFyNyGRNpRHgZ",
  "key20": "3v8m8wqDomn8tb9V2FuK6dXg5aRsHRR39bj3e9KuAYmhHyL5jcukWd1vTW7VyC2sy3WVfpAPR5TsX9s16qWqTdjK",
  "key21": "LY9Xx1he13ffBJJAwTYvrFQ8uCznU2fAYfr1vKN9vPVktpyz3i6aQ9sbZFMn3pLHrKtHGtg1avMGSh56wFsaVqf",
  "key22": "99nkCMfgBdKJwP4aUNtekVfyAXm5ecAimRieGUJarxy8ChkYSayuKh64gBGHMWYuRaVv8VDVtjLhJRp9s2UncA6",
  "key23": "4HfQeyHGFiXMRn6gMfhb5mPg1JvsDDcPSFk8mR5x9y54bjZr1UwXZVL39L3rYCeTfDNy4Te9FaJTSUk8i87J5s7R",
  "key24": "2Gy2PK68ndiwqHHTYVyZkT5DLfFvhDEt5bgDXfU97CsoYVricgY4wxADdhx3jvrv3PFC8sXkDkXk6WrGq5UJty1J",
  "key25": "RmUbsVgaZyv9yi2XCTViHffAnFw72Ryd39tJMmzpYrCy8x2hiVqARaukCpmkU7mmXM6XX9H1KXjq8boFJdayFfh",
  "key26": "215Rwipk3obEp6JdwXT3L3jFpSmYpoowkiLc5SzcAG2mwohTWJ45YHyEkpanz2whrqyECAdxkVHfZZbEfffY6QEn",
  "key27": "2FjPn8SbhZHM3WZJZE4cnMKkQDpuoyunuL5vAUuFuSbtpwYQqbUdHgTyu2FKvzNEG4mVQct1wM8E9Dt3xZsu3WPs",
  "key28": "4kQWobcQAQZRKYUi2QVqQh2o7qUKTu8q6kagn55f3QEsX1A5uw6ddZzW4zutWqSbAeJNRbzmq6xdF7CbZQhLHdQN",
  "key29": "2cKuPJqKNQpfkVrESbMxeqYUrvSEUnGVqyJ9aBmWvL3iHLYahz7WJAnZUHa8fucb3MwZcxow4Rvwx3sXT8T3Yc1y",
  "key30": "2JhrVhC1p9TjosMXJH5Bvv4E8gpoeSErVeCfszBXw7GBtv2T8R5NZCU146khWwbB6HUUMd9vwB5DRJM1UuhR9jz8",
  "key31": "E1NGTiuFkWskLFtx7jThCz9VBDim53d1oE4DJve68P51ZpX4bh2DqUVAjv1WNiuL8VysGJg3PZiekdGxJBbKHzY",
  "key32": "5GTaFdScVPtTCUoNiS6vP1wJs28HzfqtZ95u6fvu9v13XhcudXYtRCEbCnbtRP1FzJWcJP5PTi1o5RTxSp1zJbMd",
  "key33": "5QWsnDGXuCxfzEK2H4EKFR7bcoDcFya3q6DepsJZAUuFXf4hfUoNv6peqB1L8ikD5eY7mGHyS12i56vmPFSKX5TY",
  "key34": "5169NJCeR1i9aHnTKcYRv3SsxxF2zZvZnWxULF32SxGKcHWA6aL3mdH25CXnnKC5eHi5Tny4VdU5L2RpvBLjbCxz",
  "key35": "41z92NCejvnr8nCUyvNMEcTUjtmCEvH9epgYY4rihRdD6VZC3d4kRCtqaaPMXhMQt4bBGU94Rjw6pKJKCKvZcsi3",
  "key36": "3m4SZq2YprUqEpzsEeQW1hYVbWa5GMV3u2vjefP3xazgmkhbQHiDDrA8zYXbT1onS22TsQnTPNXxxkSSiRvMg27g",
  "key37": "3dwwJ8HZVuZFDq6B1JgehdgdcrErqejqbKfDAQokricRRYmy59JaZuU24ugA9KahPkShQYmvth4vEe7mCyfjop13",
  "key38": "4eMrTzxYH3hjVnZx9DMCdzn1Dzjrv6c7VWrWZgXdf2wRW74qmq7AjVrG9JeNp5kAcWQ1DfSUHb3XCgXwpr5Qd1w4",
  "key39": "621PKJpAzr4XAzE49UoFJhmHUyL58dD4XuPAcPADd5KYdebmCKjL9Vkd3STXhSt8TYEHyAQip7996ztBr9oGfHNy"
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
