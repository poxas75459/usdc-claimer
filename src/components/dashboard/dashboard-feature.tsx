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
    "3YpTFLYKQetYXrhdLLhJK7RLv9D95WZCWEa47qqbWsY8KYkwTPJbdKHrZFUEJ6A8pFtKDVtDjbrb3WSE7xB2Ejvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355PURH8HoxJ4K5Fj78QcHzmTRPh295MASr47BzesyRKHWyL5XC3xJ3CD6A7d3CL1CfAdqQtKa9gvubVguDA98J7",
  "key1": "2RuJH12JhESazAuSYSYNcPDRGyZuqGKRQN9dn8Q1HxQF1HJhUv78QVMYFbnwFYNNqSkX4UEVqpt1cy7zQ8FFn9wy",
  "key2": "hXdSSsaZqKZPrgDB6tU7fKCLBVFcvFJf8RG4sXE4MthGMCfz9SWR77dBVaAw1EV5SkAfjHQDpsYijEnHAfTSaVj",
  "key3": "5f3ev76wrSEtzfRQqf1arJcL7GE8BrgBcqSRTtCaKVkmdguoeg8Q9EHobzyu9iV4kjakEAMBkadvsqb2mSzuF332",
  "key4": "4dbroYL6KxojR6EUANZHciPMDUDLikHJteUDaFjkStCYjD6BPYZsqvu2xy7UEUaXxvH6WM368CTmyHenU86CZ4L6",
  "key5": "3TDLQXBD7KW8xo6YWkKc5tHs8F3sGY4hxKebpSfmaUXBiAahAFFhSK2nBmvwaxDw4QNqpqgMdc8eWRJFUJCrLXWr",
  "key6": "57SkxBYWdCHbqXvNTpUvk8fDZzecyJDDdRL745n74u7mM529kNouNXw22vJfDgm5TPz8JoycFXhQKqZgsBUD6RrU",
  "key7": "3igps7smBtn2vMBnJbgFTzwLCvVdyxczCMntEhTEeoPicrJF8UkjSPLarsAv3x9agbR7pmsDCjWwwmB5YXJxvLgz",
  "key8": "5QcvFxq83RN7jAQ3jasSvAWST3F8ZZ31HKj7aiQbX3JAFKNbmPPN1X1AcfLfj2ev8fYnGUPMEKorVh4tL2Beg1BX",
  "key9": "5DxfEPaNG6foJYU1hfxsxQarsaZM38exy9yAd92di1mnHqe4b7HPbgbrpvQd5wUo5wnuJk6PmAauEztb9tEYgrXw",
  "key10": "KtzmSA2gQWxQXFqSBKhQ6aiHhoeuxxuCzc1gxLWrPuTqtTKEarUyaUhPcq2juv3mnZ78SPcyYiefjK721L9eNTu",
  "key11": "56coMwxKMBr9Ww4jXXXFuVmNYTsbMxajRPikgndAr1qrCtsiD5Hhi6MPvoRhHADnKVEP8Uwzw1DKUKJaeJtFwSQw",
  "key12": "4kDCnnCKihCXE5Jo3QEUnNaBLYaoY94svY76GinLs3C6z6DLkSjXscL465N9KuH8TocNcBipba7ghLzFV4r4nAzE",
  "key13": "2cgmkHzkc9YRbixdRb7RWicr9tGffXyh2jk3wz1NiHZ75iGtLCCx1oMtJRetLffdT9tfmF9rJAzuDNG2HnCC1TKN",
  "key14": "4GmZqY1iSMsGQVWzYHWxPa9jst5N7rB2v75Pa4c21q9yTUyypwkotVXQ8qoqBqPGqDWxjvWXkc1euzBvcmqPrVyA",
  "key15": "3LrGtqHjLF39uXoWAdVUFEFWY6dqh9RsfBZ9A4kyEjNSyfAQY9pzEWnYxGEhDPhqUgmJg2v3Yp9eHjdmQ1ULfacL",
  "key16": "66DvZmK42Yi34NjKT9Rmu3L2THEzwnktSeJSizN6fsMWh9Bo6ThFgyxpSHMp7VUCzpv4PrWwCzD5csSH5eCtkBX4",
  "key17": "67MvDv3MEDW42xBC2n9nX6q3qit8Ci2eRu4ATSR5NPjZ2NXCuaqf4517s29THcNzmn8wU6ov6xGUmc4hKvkqPQjY",
  "key18": "23HtMu3hwLqC4shsF1YMMk3fKRKdLdtCnx3UtR5bB4zNupVA2djuQpyEs7bseoqbwPL71b64JsEDoyWCh4bBSzn3",
  "key19": "3X5iC8ZK1Zs1GgvNtVsbGxCy74Pxzi1Nkd58fPK9GLBkiwZXdBhBaB5i4oht7TsZvvhnaVMsssEjEUQ6vGFgj1Lp",
  "key20": "2y2erD5xGf3sX1fcTm62M6aibULstKf8os46ZRMcGbVMNv9wCtwhyzfuurv6Wn8qDzF2cv7LETUCDsVs5aCHVQD2",
  "key21": "5oKZdrCxxWpERpV5yVdHZqHH7bkKVU4PDa2GYcGDao1W9St2RjCTzNQy8eFWT5X1mH1K4n9Bi6ttNscSZN786GXt",
  "key22": "4Q83kbT8tG3nynodowoqqY9bNA6awzKfCZvRuRyKs2ghgXjmLV1txCR1FH2yqxRsxbBSJ7ibuuF1bMFdoQG6Betm",
  "key23": "53CDHKS3k2sqdZWHi6jphFuhGbPD7s4QaNdrDdSJuH3irDNgy5NJtuuMEDaU9FtbU7rEc6d6Gr32Se3vYD4nzKvr",
  "key24": "HnaqJoaGLjUDtBiX8k1KxThkx2nNR9xnuCdRYbJQCPqMStFs9PRhyCyBCMuqKB9Jmg1Mk8okU44jQYSVE6hkw79",
  "key25": "4Q3SuQgV4z9WaMQCpnAUZVwA5hsou8sDnZoGnJKeAJsPCni7VbHXWXDE3CpeFvLnne54foxuuJ64wkwJQVii5CKW",
  "key26": "UBHZtgMmzR3A7cW8JdAd6Ush4jZNVfraWR8PFrCwegRjvedjDD1mmnkyTgg8NRv7MRmV7YqanNi8UNHGSsHjyHg",
  "key27": "4Fc4yLjvnnAcsrHrfMPrEkRqdUwh2n6aLAF9jmQPZSR2TbSEisJ5zdmrkxP51FU7WDWjF7kaEESbqoc2pV49KgiZ",
  "key28": "5nCBADQ65cA8e7GdDsouDsoFaVPRv9PQXGDXhceXwk5GeEkdTgKEKNBaauV6KkeJzTtCJstG6gyA6RxkUATMxdCT",
  "key29": "2HoiLHeYcoT4hqn2Syt9kYxnp98vYK7EWAirDEQK7UqX9Yvkt72JtXYA3rVVWRrEPCsEf2DV1FQVfrKzZAWRjHXq",
  "key30": "5So33E63HsMCMPugS89FCzcmn78bCweLwuocxNgErApb9SMLvBQTG338ph5ejUhWR2josWgw9CET6Av1EviGdbLD",
  "key31": "3BAhMhUCT5ynP3zQaJyAHTq4BGqY2xy9JQdqTfqKhxLr2mMD8PZrYtiM9fL6tocBfm4MW553Po3adMfb9XLmDruG",
  "key32": "2TxGzqeAWHSGXsD8XqHQ61twasKarcLK2bo8W4btoPFanfVxrWYXJxWhcKaXXpaXUUzguLU3j7GpJ2RersKU2v1s",
  "key33": "2BNFfbK2rbsRizDVkuLVEqxvnX6mLrytejzTWVxJ2vMWhH6WDHyUbvDTXNoAnRnXUMW4E5X3MrFVjXTA4eYehPmU",
  "key34": "4F3eyv2AM4w57w8jb5PaPQB8qqEDAbRJCzYhUvr5x2uoeDFQ61EYnuVVkTu3jRSWM4zEJY2tgp3Yi45kvH9xE7Lw",
  "key35": "2C4SJHmaQawJqczLtXnpYoVrK3Jd73cgnvcsXuVCijcPz6fF9svdKpXw4Hwnij6GVDC1HwgRTMF25bBE7UXUGCSs",
  "key36": "5rXWomtZkwvunqHUFV9KeqXCqFMrSodx1VCx1XrWP2CyHRa6YcaT3y3aPAGhgruRKqbGAHbmGsPGCu5UpMsgzfsr",
  "key37": "2nmxxcCDxY365EoVzoFVGLtycRhVJCPH3yDHFUSAQxZn7njcZnEYubdL2ujj9dPYAZAj6iJyYDcWFMfqRoBUb1EG",
  "key38": "3Xn4Kv9MiH5CZ97QgcBeKud3NVcuzTG3z5QKG1M8pXTWpBsFXjdLvpdVGihZVxzcHp7GgaPZvUTeWJtKwgakQvUy",
  "key39": "55jFafrDYvdYEiCcwAfqhoE4YEF67JZqYSmDMqbfUcy8bQR9U7e5BUuHJZswuPijDLNtLiXvQ5Jw4o7ZunSjGwf",
  "key40": "mRoqBH1b4m1M714cmdo5djhN9uqa3GPAxn8hxHqBjuYghMD8SNUEEjFE5nwQ7fkdZQvBY2thrXotjpyeP4Z4HC6",
  "key41": "3DMinFi2aUrAhAE2AQmMP8EZ4148wiGSPxwCnH7n9ELHDesLyeKrq6UB8MkYm1fZfBevNzUJLEiBEWZnUHnamj6X",
  "key42": "4FVLNvxp1ifSC2tGF9jyjeJz3qFRLvdTi6iAzQpZ8wjBvVduhUA8mVDPXi2yuH4BtpmFV4LLJpGL6rDCor3ypUkS",
  "key43": "22fF4DHpw7a5zRcP8MSSfVfvejEKLbVmJSoeXgYeimKefdasZLBtAJgSnQwntTBdpe2UgvmadrBGTrRk7XQSjdLA",
  "key44": "2bAkNQW7i2xeVWL9NbACH6wpWz1MVnQRWgPUhnnNCNjRhqQh7sfriGggnaUA3ev58tcyHiebBLsDbhbR8vukByWj",
  "key45": "4SJfiv8CMqHA4f3U2ZEsx8PUiZ8fNBHS7mrjaUuPSBtrKebFhw3qrC9dV2wvJc5ZzkHFsuwo5sgVnUvUcACKdaiq",
  "key46": "5RiUoW2ePh3MubtDZJKG15o78wPADpWrPMdUqrxSsa7LyzMAAYZTf4LAvfdYDiBaCqUwuuBjYe8Qgqqec1yp57eU"
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
