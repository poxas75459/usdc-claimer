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
    "4ghz5HKqJLegTG5vusJojzRddtXQVAbYqBUBxJ31HRHquRbzD8GtzRvZjBVQYyNXh1Q8vuAA8qyVCxm33ijHgKSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wauCDdMkRHc7WyDotJTPBuyEpdZp2WQ7RnVZfxpb1Qg3qMaYEQ3ya7zYYnFC8mxUbdX3BBEhJAqFduVEGaoXEa8",
  "key1": "4G4ny2Sxj7sX1d7nMfEte5VB5JfHSd6ekehfu5m66cvXGJnRBiyT6LXuyX69qQiRiF7p3SdrkFGNKK5SvX9R9aJ",
  "key2": "2FzHZdgg7UnosjjDY63zWxRGrLW1jwCvYGVfojRQQMf544Qe51EHDK7ajBTiPDUNLCUK9TZxy1F5LVcqvyJAEf9D",
  "key3": "4H37rKiMxgNWsAW9f5DECbXcjSMoiqiCCzcgB219sbUMxdicHPsSFPLP79cu7XfbVQU9k56tkdQbK49QwK3YCCzF",
  "key4": "5VXNkKF5BTfMejByJ86CMkZqHdiM1YcK3KjcViKdh8nvo6XkvWY56QaMbR9r2nvBBeHKy2ZEJUBrmWVETWt4DGP7",
  "key5": "2ipEYYPu9aNS2NyNqcG6xC6yQRwAypVwXyKncUajULvcNHYjyVPeDmyYWKWEzNKksMVDTjW9rn6WtpFe41safFuW",
  "key6": "2M26TK6zNvCZf4yjWjXokQQYoXgjzHuPEjnZzCp5k151qCZGUpx3CUfiZ6MfUARqXYHjeMCpEyZjaBpJp4FWpuW7",
  "key7": "B4cGgHQiUfh9hTaweGj15fGFXtHy4JdspA9UTRk17hUqUjMhkgbZkThhVSVEGuyDTWJG6VkQv35yzNzfdeN79QY",
  "key8": "2YJeFFiGvfMiV8GpBBL2uZs7ZwfVpWe47jiihKwWASuUhjpMognyqUj5of8tUueF7i8pCQgLMcERPeVFPBL4wdhC",
  "key9": "hMzRjoMi82bCdbVAwKw7qR6ZPmdPbcQPcCrLFd4FQ1qq5Y9yrV6wTuKaWhnipJTrGqy2tKh6As9NkUd6tvu6bKY",
  "key10": "4R2HoQymHs1qTLK115XaoKSQgC4ZZxjBbPbibCzpAqW9RUEbxNqvokk2YncKkkqyiorFAS8Z4TxmVB3sy9CCYTK6",
  "key11": "23ubijxzRjWCKmwTP7Ppg6ts5YJHCkTxjt3b9eJb3d3pwadFJ3nAsVcbVHojZxdNZjV7mpAsPVdTsmssLH7YwWmK",
  "key12": "5ndUHGMyVH8wbnWFFENhAFGwZJqrufBBrg9sH1ZuXLcx57D87H4BazTU1ZnyRmTj2AbynYnU7TZ2kZij9EqK5BVi",
  "key13": "5WNynxb7pbKdnu8psUbg1RaJv74XcayLEehfsXaiPw3SSYdzUafpr4C69i94vP2JAQDyG4mQ5DXnzf8mobfHmobY",
  "key14": "5RJBibFoRFitzuXjmBm5D5Qq7Sfh5MKvXxzqpCSqmSQB2v4mAeGSFfrLxxFQpAAuiYmiiDhxNJQNUCmUjnGxcPdX",
  "key15": "2AUFNdSsSd6h3RgEdkin1RJ7h4ERDrRtB6jamuzb8DTqB7UCwdCH4qNSqBYhHVecQ6FsinxGUibEbUKqztbUSwqC",
  "key16": "4Yg6YfPSu5AWTDCuyEniVAm1TZBAaKVB23xWb4gPE2UDXb7ffej7EvUC9iuDfD3w1NrFF8v3Mxf5vbZQYXvJRrhM",
  "key17": "288AqHyr4pUWogKL3jxEWtvYMcXaonbDepMxGUi7kRwnuTLk88oQbwqtGnVX9rRk2tqoGsZzC91BoqB6252pFmC5",
  "key18": "BqTfNgz5VMYqFjccvjxUCey24bPfs7pH72RAhDCtWLeNUyp3QDUrNbP5yLFdgoCESzrb8faWAQ4BmveM7wBaWdG",
  "key19": "5WRFTHffKNNW1CzK9CV9HRmTqGWT8r7F4cJZYyDkSsu9gvoBuARMmyiSX7NTjL7HELDY36KnBYg3cdbVYFkk9Pz9",
  "key20": "2Vc4VDk6su1fReaSi3sgeihZ9j4po2xVWkC3yVuwwJUeokNZGVhkZbtA86FDnPRocgxLWVCnr4b5WJgiKMZEzhNX",
  "key21": "41ZwpWcUCrpqidbuccPnaaiuU2uUP2MpQmhc9kRKamSWot32oV5NH8Ux4owpfuSpJpVv6B4v66khU8mWadPzYsCu",
  "key22": "5NqSgUmAVXhJ5HwuZmcspVY7pTkErZcRXA6b6WxPHmq4TDsQ9X8JyeJaWgfg7JyqqsEqqUE2gknbw9HFxWsduXkF",
  "key23": "RRDE6C4nXoRyFsb4GR8mYvAt6g5kqxEsaexGZZCydMPuGoBhN7WKHB1fDm2EHQRe4MjWyx1m9e96A8AEHNt88MQ",
  "key24": "2QVZcPMAHxiE7aXMbgLfaBZ3sY96PPt85XQGtoMEV8aqT1xixsRPYvWTrsLkejQ6xaHp4dk2fv7snr8nNEdn3fs3",
  "key25": "2jbm2gZYH99BSviXXEbqagVPEaDaMk8j7BHWVNhqQb54BPJgibbh4EnGnSRVnx4g5QFAkzgKG1JvDyrnQLvk2sUe",
  "key26": "5R2wifRK9ujtZjbC2XU3aJbG2UqVQR5dfANjguxDcsRqjRYm9GhJukDs9GUrgwiaKH279V4sSwYW6xFrGVYmoFnT",
  "key27": "24iGptqApAnfwF1KnU1tEb9ibPcVzkAbgR2qjnXQT2E9SQpSaVoswsx9saAf2XwEk4NQsFHhMo6R84hCZMyyiaKN",
  "key28": "2Tno8RavddBCGxktpgnkgNKvjCDe5c3zJgRQBn7MKQdmvg5sPpqxC5g6i44SbczXED6n4przN72kayuR8KNkaE1",
  "key29": "4Ay5UdBEiWbv3qRrFDSN8ztv7RHJ3XKFsGXChr7PiVWJT5i7gvWvCbA3Jo1ji68MVW2NHjuyJaDk1auyj9RFi4d2",
  "key30": "DS1yoAMRXHveZK6BMHQB13HibaNXM1sP6KgT1wsNo97kDWZzK9p2dHatLxtZQkAjk7GqwxZDPBnMtRSKJJD4gfH",
  "key31": "5hW47McHJzwAmF3jCmGxwVt2uwkr6Cm9GjxRn7U1V7Bw3uKDWcYMojzcgC3RBDyv4yGFNnqdkvxJWqAnuocpVW9Y",
  "key32": "4qeHM9WzqpJyfbpKbqNgD9wQGa7fR5YL5BSrTRGAJBZjeHb73hX46h6xH4ygUKXWps8grXfrkmhSifP5kky5wQN4",
  "key33": "41zC5ztTH3KwkQvY8ji1KaEbGnnLbodjr8EdSZxAyzqquNuweoUS9NJpc4Yi5PRM6G1Tv6q7LbUMKJwCVd7K17QN",
  "key34": "bN2mCcWm5KAq1fZR2Ui7CuL3kpQr9F15k8KWvueoLxNyXfTnTnbdypxH6CzxJwojomWtXjMPDTytwgfkn9N2EDW",
  "key35": "5XC9pke19GLMFHsYsMU61XpWnKy4mniaDM23LCPb1jbVj2fQYVbvEGntLacXfSyTzr7MyToCiRFKh4NQqcs98rw8",
  "key36": "3frM4MHPo45bUE4w3D4aqsaEznfe1GiEmmdsFqzzPyooBtS8vxsjJM4cBcfrmvoUTBsB6DXUpBDDXtPjkqtWepoA",
  "key37": "mBiDVpCfVwGBQiLu6DmnRS1YWKZtucSLexFRxM4iGUpttn2AmvQHE8PAiL5thRP2A4dJmRNkaQ7t3dGhpzT8oGG",
  "key38": "26borrBmJAD9YqEXv65NQwVCUuKd9dvkV4C8wdcG5GVWQJxJCye4ZMVMjwWYXUnQVWDYYFLfH7Tq56bzB9CzN13E"
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
