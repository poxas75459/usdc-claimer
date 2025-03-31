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
    "4Dirphe6G9czhGEq7VNpqjWwNVJGARgyam8FXmFsQPaYjN87qW9AaAoorwhiT9BMPJEhbN32RHV8XN6DmkAcjqtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yQfkYWAqVZGZuBQT16A2nsHvk2Q9tL9UnigTvKVRZc7DhbREP7dpwZQFy1xbnChNrjL687ywPXeKCvm6nokciPo",
  "key1": "LHcTEURoUZXJDMJJxgajzHKKCAfdKnXyJV8jvwnnNjFvMcRhSm378MbjJvjiS7cysL1jc9JM9zRiDu76XtU69Ua",
  "key2": "4zSPZpWzSDL2HXAGE5b9H5wEC1cGSdks73jQS3BLyke1FHUS7HKx9ghu5uisxMoQeNtMJu9HME3YD4KhsVPxX2u2",
  "key3": "3HrVanLbn8bGho2oJXfZeDDx54biZsnzvnVpX359N1hE8wpvg1yp2NDQCJskyj2ngFYXcYByxCQUxaAe2sezFrY7",
  "key4": "656gbqkowE9ZSgeDqfhi2B4L8Xn3hRT1xcYK43ekjNxhdqrtoKeZ7vTqinkhpjmrZbNKGsf7skNWFZdWpQaQFiUG",
  "key5": "2PwFUoU6FnL1ajnhRjg3gLaHZT7N7WhQneiRiqfLtY3F4X1bKvpVXszet7XzwMrasECy5RbEgy7XcFa8CLapyRgm",
  "key6": "3ZviubKCnG1Kov4MwEixh1KUDEFnfq1gzRFvh4cAQkKhtsuRXX93htJc1SWeMAhZEyoWwomDVjehoU5g58kEYrZj",
  "key7": "3THkSgy2UTrb4ufC1tHdEwR3xNJ5PjqnSAcPwC2aRdygwA6spi2wQ2FpHiYdb6aHpDmACMjJdaUfQ7Mrt5U3Njhx",
  "key8": "2FWbKtCP8txUepw3FjRVynogS2Jbkc4QYdBGbvDZb2vKa1YyPvjGRnd8QeUP8XjqXX4UR6fiLRcYVcoUZXm1EahP",
  "key9": "5wVQda5BLMwCqwYy43KqC4sNR1WRH74BqD6wuwMbLJJqXDkqryE3BX3MNuuzhpjo9bxyYMfw3Rr63FKVk6TFyj8K",
  "key10": "31Q4sRgTV7dbf9ipbd7QNDpzQqY8FKQUy7FEmcS2EurVPahgqA5nP8K49hwKYYDGWSZsop1ZoWRA2UwiiUPHCSsS",
  "key11": "29dFbxHC5cwaRydeYyLUn2R81dXZW9sQ6oDhyvHtGkdqHEdtc9dvNCVsrdxHMAHafg22pryw3DhbLJtALAKYPwjZ",
  "key12": "545axPiNmdfWuasVU44U7ixVxL1EE7xhWgo3dUinrvdm8JdrYevVmHkK8fPrBFsv2Nu2Qay1Yns9VtR21s5weUqN",
  "key13": "zrdvKCdQWttPiogMYHPyd4MWzxqinQLKE2ZxxpqnEWtJuxD5GgycFyHb6CQBtrwYGyhSN9f9xgK5YziwFMDBTAH",
  "key14": "gbPuRFpfAwjPFSarHw6bbuqDtK4sXrmkQUx2xRoj1cgcrCntmkVQwFZV9kbwMr8TtKHy28FYYHk1RrjZobjkjoS",
  "key15": "rFV27kA2UTFpYCj1cXpx8AmNJbNa17Ag4Fyd5tZWznrgAd5Rofmjo9bNb8gs3z1QLfRPi4mNFJHvcpG5Z4YuNJA",
  "key16": "2iR8wyrCNnCiRZNoC3EVJqG158dhNvNYe4hQVb2A4XHPDCbjxXckZeTasrTjt5LeqhkxpxoQvnPDnmA9WFCGRLSZ",
  "key17": "2xx8kQjmdkTGk9GDV5udaWQyhqpArXQ8RMsPTMraMhkBk5sjL12hCHh7N6cyEPWfYAT7hT62574eMGzh5gKxh2zK",
  "key18": "4aZc5Poyy1tYhzV5Frr3FeLM84xCdvF3Hw6TZaqGUbYBKA5rHzkpH3sMQ41AHqLxQ7HBVsVt9zYGmrFpg84AdbU1",
  "key19": "oe3Jqip29RSLRPp5TVbmgfnNbdjcLDbtAs1WKCoeBRBdX2sJET9NeWpH8eHqwbNwN6bwib42DgNqceqztFL2unZ",
  "key20": "3zQybS9tGYMHmBn9Spbqd5WX7HE4XWr8a2hDVVrorWrvFkxU7NmGdvLQrqwBP1463eLwQZjAd7ZKJcu6ieFNibve",
  "key21": "3U5Yf8LSSia5TpcDAi53Z8gXnhKnARqGdycUqFrLU6NaiSM55cGQAZ4QgSYt1WSGe4anvtjqJg3pUBDVX5YiJxBN",
  "key22": "3aLBFvzyjr5uKPFvPZARevVGYz4QUKaJWCwK72vW2BsCCVXisBhy1mKBua1Kx9jmEe4cz6wkRruG5qGAr8Nw771V",
  "key23": "3wznhomsgVLTt7CtUT2FcQwFxs9jR8xe3UokFqB3kcY2Dp4DMijE9RDChvEMoMuA4Dro9xrwx1aJMLG4JH3Nh3gz",
  "key24": "4Aa81QrLUFpXx2Ywn4W1yKmwiKn4SvAUn5rLiKFJ4NPi2JpK2RwAJ9M32yJFH4CCL6FrZNhda8GA87sjVNhXfiAi",
  "key25": "PrXrYf52k2RTxDDRip5vcVSuUuBGa9ZiFfP9yQZtcAP8SakcFgia11xzsRDKV3QnisHXP8BjhnBwghu7ej86mGd",
  "key26": "3rqDSHCVJZ21Z8ACWNefnwniD1zC71zg3ECT162PtqRMrcZK7G5NUELnPiYEKeRiSogjEM6QHvmHu3X2Ju9P7ju5",
  "key27": "4eFzGXM47VPVrD548gbZw6QikVSQMJP289BPpDQJVciAGRgB9oRHYthrreR4ZdtHwuqixLJYKNgQ3WFKd9XVo1nf",
  "key28": "4Z378QQ1hvtT2MGnAQcDJAdwYg1ARUmMy2M6yLek2gBHd4tqwHDVMckGUHPViBgDJ92cA3VUWQrxKxssfPqJCYGL",
  "key29": "46WWnqEYbhKp3gBZ9G48mQvzTXaQKxGmeubqoECb7eoaEn7JWbBhHxB3CJgvevFpjF6F8SCQ4vTMNna57jm3HqR8",
  "key30": "36QTubenEYjUm8s7k4WA5S1w2fgYyDFP8DnGU1ZACgU6v5oH9an5nsLcJ4QKxZbvcnjTLgKNcprGrfoELyE5aABi",
  "key31": "2PneqSJ2viG8ARKkg4jq8AEpg8DfMzJQv6yKztAHakntdkGxmitg57RHkLgoxWB1FynStLfnhd2BAQQZaRWwKiDR",
  "key32": "3daZLJGh1THC6av6bobBDmVuZvbpVdPrs51SyhvoSkv7jXhma1G1SQLcoAVnV6BsQ3rmEuEcpb7LV3JSMUC7yY7u",
  "key33": "4QBntVTsZkHi7XuF3dFhg2XqWydDxbMdtwhkKrhfbdEQUXTMPo5csWkc1Hd6ciCjYEfCD7xfbQPr62dch6YPhYPM",
  "key34": "5HPAQ7yaJ2Ca92Ja8uvCgi8edt3Vf7EJE9VFnqx4sQZpk9ZQZxkFMikxcbFDgqwMniiDn5hhQ2YqywV1Z124zeRY",
  "key35": "8heidwmEGaB1zdTjhigfjnnr82NBdC81e2JgkYk6LPdBB1iJKPPGfWnVKU7wVbemNeRxzpLCYhocu3KUi8V2M1G",
  "key36": "3TRsvpo3qiBWe5hbHoKFaatYXWxNSM2pL2cJyXPcwYnpieoyzSD69DuiZtMdNkhpD1yVxAnL5a7ssz5GpmEUdRkV",
  "key37": "2QyKr3feivzrBofGi9Twop7wmgunRGZ1rWRLw3WyJivAiT5h4TrvGv9XFma3j78zekCZMrHvnwc6Lvzf4mVvJsbi",
  "key38": "2gQ9Yjj46xhod3CjBhxJz5oFN1TqbYTHTGFFofpkz3WpDXhr7uTux73gJvypzuhR5Y4HZVjSurpoKrfdbrVuCmsi",
  "key39": "wSCRdp2tEgvi1ct8ALq5P4uGJ7aKdC4JGey71jeKHDG99q891wDgWfFsL9pds82cG5w7dQ28vdHembLvn5T8H6q",
  "key40": "3u8FTym2CWFqYuNk7ar3X9yu94vaxmusFv5P8oEAViJgYbq7wddtgfomwnUj8UWXnjAsvjFvFKDXw9xFSuTss26T",
  "key41": "3ETbHwHZ8RynGeeHAx6nH7Dk8FfZcMzpdPVoT9osaLimikc445jkN6KKcJSMBafdQ3tiPaTLiF8wLyu9VgPL7oYQ",
  "key42": "3bpM9hwyWbubFnfhfLKVPY92d8kB3fUHBndC87YvSBHM78FSXng9eGwNEv7j5d7HnXg8fC8AAEx7yh7zMPuLM6Zi",
  "key43": "2ZwrsQ9KTkoAuo8Y6uRiqp88oEPGYYn3KRY6tS9yiBd5ehaLXzZABn4BJ26LFr9n28MnwnvcJE1iKWgVTCxhrMc",
  "key44": "21XcxCjXxCdnefBYKBb5i9aX5kuLDMrq6Ud8vPLYHrJW1ZLZ1MkkQGwGfWemVy4KRCP3DmHDaJERTeay5RpYrBHL",
  "key45": "5Zd7mNkP98yFMdoxTzFLuseUZPiYHPghQxeQi4iScduabKBeiv4KyjqHg4WTF6ujBQnXzSD7jncwM5T1A6mtC4XY",
  "key46": "5dt4LkUFE3j7WrwGkAgWRFa8xAHkcvxovDrJhZ4SaxcWbnPrzomA7d5X5Pbn6JWJWsbGqToC72GVRuuphEZRr28u",
  "key47": "3FRH8H2BGCP2x1dCYYjHXjomGsHe7N3nL86KMVa8RjSWV58k1147AUvpUrXKMu2HgedBURiTFmCPeV49MYf8oCDS",
  "key48": "TipXeTQphYWtKGyxShJFEpZ1nBbetnAb2diUBcrh21UG4b1jswXr9TgzZjtKPtDuJhu2KTB84vowsTL6WKrUSut"
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
