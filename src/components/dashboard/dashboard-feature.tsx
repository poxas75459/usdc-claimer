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
    "4ECS65FntJF6XHNPr29qWsRUE1ZAcZCZayRyJ9Tos3TSJLVHhXoi5w6KzKFkYkaXSwvYoMV1kNQ52pvzLF3NXoFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PJxmgUYHVE29GKaWxzA8HzzFqBEE2wWDibczFzL3DcWHXMgcduoa6ppo9pX94pQKUv3sgXkBZ8oV6UKGFgWf4dP",
  "key1": "2HLFUSNZtKieSDEmc9uVBJfMGbQrTxsa5UCgre73n4fCx5B31TUosdb88d12CJLGUQWyyZJUMf4uxrSCRXmMb8xr",
  "key2": "2kSFpo2YC3ikeBrEHnEXXWJjuD9RPaEf2QgPTW8sfzWqkYyoH8Ak754T6uf975rrGQtiLYybgfY9YNh2Twpa9owN",
  "key3": "5CJQsCC1TzWWxA3cfPKvARuP6VrYNtVjoMJbpz7faKRXCuyaJ6yxyxXWNM86qDiiow5t289STsEJcLCu8VKoFZgR",
  "key4": "5JkDeuJbYbcuD4xS4Ctef28LZ6K3Qxe7P9sMXc1pRidGqfEM2awhvU1Qrg4be5fMz7jZrYV2DStH5nmzSM19t4xq",
  "key5": "4LXD2mqUMYvFEmVp6LFSXsDMYxyuRschgC7RPngJBG5PiEWcuvoPwzTYAQx5ajLceNyS2Z3YZ5wYZJ9xBrDjBjgp",
  "key6": "4gjtgQG5xoURM8ZHq2ioNBBJgkhmm36GuUbkspdfzdUKxtPSsa1SZ7V1FAERT6bvHoyj2oBgqjkAj6xnYmqEZWE8",
  "key7": "3DHaGbhGzVruacaeGpDHrGyasgjP3CshJgP9ojDgpH7XEaUE7g4K7wn2Wvskx947ThKQ8LsEcbVXnVTAzpMvQdRU",
  "key8": "4CxfFF5jENS7VBH7mEvbkSuGsvLmTfoM4xbuqj4jcVeJvduZtLAREC7ZfNTbFqKkyZPg4jqzUvg4qTLsP6NBc4GR",
  "key9": "3AfqeeEsjfJJ8CNKpbJVMoPfzhsffkk66CpV3ZNuWRkfxDzaaGWiBNazfKdjWRS6jb8xPtww2jCkj1A6szpkTuWZ",
  "key10": "4aPqcfcYSnQVtyvRrDKpHtPApTDBHTML626T94vYgbfvcwa3HmFWunzfHeyyvTG51AcFGCpi4TwMDFtFaESeYXmp",
  "key11": "mJMhHFrCpfZfGan5HuxZsNjfvLGh91p9dHycoTKfxQgCrBpy2UMJYUned3ZDN7eCKJCVjGXL1QRtHPEhr6bjb9j",
  "key12": "AG7Gzt8dekcRKHh5wUfKiPAFpjtzgL48UovdHDZxFAbxxijZqQp7Wuu1c8i5teTHsUisGxGr7iciq32UvsLVxLf",
  "key13": "3XtB4CfVLFwzpukL7fDt5UuLENgMCELoqZxZnmrioCKwHd6jTdXk7pPAZGVMHfq2Yh7UFgxH38bNQdDZjUyQceP4",
  "key14": "2HLWcqcDKvPnibkkncAVgXKyZsEH1buAHqqynvR1EFgqEMMqAnP4r2gYySeyaCwPKg1v6Dp7YvJpdkU6JGTGHx1y",
  "key15": "3CywbTRdVB3U6A9S7KZ8fFqDnHhcZGbYBVuCnbftVtwWH2sUUQ4vUnF5Z5jMsWDJ3WXQx6p5sheUKu4kiBeB4wSc",
  "key16": "28HghbzV1EhonBTFXoYEwUPULkcYk7cNAKdVbv79RrN4k5S3i6AXGDwr4UB2tRHnEK9bQXcj495DD9rxr5SDG8wB",
  "key17": "4eZLmsGorD6JyiXVea65zA2tEKd1zhSwk2Ph8bhcs8yBNCQmBcUVg27je3He2hPHVBSLiRnRdcEnJ6tmhLeTGhJk",
  "key18": "5GJmMBEecm3dyNN188spX3e4SRmM2FAEGgqtu3t2LZEKLhiT1duk79hxbioLpmChXBGC4f9ePGMhEjPcgQz86Hh7",
  "key19": "5F1kw673DwVnGXhsEYLHdqtzXZeXK8tafe6CjjpqvhYmLmyyAVe4jxwbqTwR3y5C2KTYA8JksZiqD4eaK8ZWsTgH",
  "key20": "4upgxJQGVrRNEPwXtkHRb2zEGcLzcuqFykeGUJDnrPuqv8mM112dDiXuP2XPJE94j1Ec35tSVghBiFqyvq3gkr5t",
  "key21": "2oESu2uTktXZw2qvUsbaAtv3ZccPn8RUC81JTmXLa9KdXb5cqZZGvQCUxkCd2LkjmvTt8XcY6U9YwhAwGowRswKy",
  "key22": "3ChE3Su4XQrX1SvFLK51DkNXv3yWNoYxCtjJgL6qorBy2ZMivANEUR6pcPxC3r8WQrSa5YtzmETicFWbVLT8mVyG",
  "key23": "2ZMpHtcBUawxkbKvQ9c2vB8CcZTfVckhWAs471su6LsAQ8AMGJLbZxXpGRK8hEyrc184bAJaaztGyRY173DhGrct",
  "key24": "3PYj5vQu6V81SQ12z2q1pfZEk4vkET5VZwe4HxkSKTvAKCn5tyc66nqCyspVeYCbLiSQsfcVYx2eDeHMK7PTuRUX",
  "key25": "3YFXBXU4TCabyX19nkvhkxzQ7xJtKZiuhAY9LnZUgLxdMXHnLUBf21ubHdLDbBaP5QE2hgLmayeySQfY9Ny5toYU",
  "key26": "4ZTsh3naegNMpWx6iyRWFrEcXMmnyt5VzZutKa3w8PpiDDGkHwunWXhkemC6qvuA31iposbsFqkdPouiiynbTAPD",
  "key27": "2xxPj74KvfS2KxJewHj7v7xT4HPti29Vsrsmga7D59Xa8dRM4YKo7gLNPktwH5Ua4kHHFGPXYAavPxuiiq62ysC5",
  "key28": "2EnUTDP3sMsCNMVg1UPHi7uoBcysZ9y5YrtngwcW8L8eVuLeCBrQZ6bL3qaHwTard4SrkwYkL9kWKBDgBU1z8ZZZ",
  "key29": "2tsVzzzwvsbnEaxVzib2jt1ywxQiSJfnSBhtvJjXiD6XhgMmLAkGZ3nKaQmCxWjLy9zQWfjab6jPNCGxHDcdpS69",
  "key30": "5N9MF1nZFm7wogHrAjkSTTHBmSvEZ3cvHh7YuN4Tz2QkFNhBuDgY5zycBfRHemmi12JadPBP7xpWPnrVARB7LE7Q",
  "key31": "dzVoN6uUAjFwnws5qFJhSdkmNUXbaopsPRnERa5VGNQ4qER6cyh5cqRLr5XVxUALeWiqX4jEqNdfXrtcHofVyeZ",
  "key32": "3TrbErkSwYNSXDwWmGEMHag3oASUzzBi7SUcG5iVWA9NGuX2RUadAyqQqtcwBpgcAqEbrNhuTNRwXyz6xhFpGLew",
  "key33": "rdLmQzvSgVai7Jyqd4ikvdSVfkrcvbrgLYUegcpLwbzyNkbPNHR37do9Nxv2mcM5nzQzTftfAKrxGitTBQVvbKg",
  "key34": "3zcHmZFg7gedpSwCxqdj2npcYgeDx5d5adXGPQYgzVp7sjxoJBUEqE3RkGVmvRuG3pNgUSLDPMuoGH8z68jjaKjb",
  "key35": "5jPKmSdunb8cNuY45qr16HEzPn2Axg9nWMb4tvC2dCEaZMExDNshxxaYbsJdPuWyXdtioQmkH4EH7aiqmbQ6PrTk",
  "key36": "3tPFoUSqjz2hcqJNNt53oXPBEZY9RE4s7HWwtnhARCqs7dMneFPdFvNsonU6Rjsq19LvYw75DFh2JZ3SGB5KP54R",
  "key37": "Ds31jcePtfpjd5h5gufKJdd6m3KRvzReauyfqdzxx8vrLBAFGgorq7xjv5KQF1jGVkLhGapaCes1bDAUAtkxo7q",
  "key38": "2D6WJ1Yz97aqfVyEYxJj98pdnrwBXipe6breLoLtxBDgK9FoTMfViu6UhykKHG4QJDEBtTfRGvDk7VHPd7xJiPL6",
  "key39": "3Gek3cL62HLPTC75pqHjqXQvNb7ssGcRVbSW42pF6MxHzFn6idDVXXBUyrJ1EUb5TCu2dWZmZx43eEWGYo1Qb6kA",
  "key40": "5vvAwDQxSxxWdgMk8GuwS6c1ZoJutzVstGcCXYtHsTZC3mYVVJopFDgcCrTBPc1L1Xea63UeRsp6meY8zN6TtiVe",
  "key41": "34wMdepA6m7y6EWghBExgFfesEAbyTivp4eUTfFo4aBpJPbQrDm87EDTP8eknBTQ569R4rTFfNk6huYNXpcHVozQ",
  "key42": "cnitSy9t4R6GNkSxpqwqfBXcnvhd5s24vkGcx1FmPxHq2CzmG72dbvCiQJGUWHsLSbqpwR6GHK2DN88zdzRAhkT"
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
