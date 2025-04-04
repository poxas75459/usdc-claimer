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
    "53BsBVKVVi6SJVedqx4p6ZiB9beAtTJfYT8vNC3L7iNYNW73uJrLWMp3Tr3hTAfgxMc1rdifNF1D3bvgqALv9CQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jBujDxjHSLVHAmMASPmx63RzyPGj94c3kE2HGecPRVYy2yk8ea88iYg6SnNjx5gzwrwp7z12mm5dKHxfSLtKJbQ",
  "key1": "5tif9CRqfq6GSjr4yWcEAz7LcvA3zVexJPz1VLZDJijMk2kMExy2CQH2Xq1jvVjnqFRTet7ZCJsebujWivZosvnz",
  "key2": "4b2eKnJDQ5CF3tfzYQEVh1X19jF7zwdEEuBGuGUe8ct11TeZ8oexn12aHxa3AqDbdvq217Vq4Cu1asnDs6zGjDzv",
  "key3": "4C5JtEyQ8GAxTw99NvzCufCifsLZ6ioSbXAMrE5YdfYf9mU5LcWPvfWew87n5t3CqJtYPcCFFFaCS2CSDtFWkgHF",
  "key4": "2q1Dp1fSukf3RBCEdvj9mMfk15ATyRd6pSr3qcmSH1ZjUifZ6PzE9kkQykadGQY5o3Dpqe6ywQGV2kxGspsCdzGZ",
  "key5": "3JwTZGN9AEfLnixko28vBc2CtFxBZNjYPZkg8aCFJD7zwTKkMhtDijqvBVk2cMzkrWz2XiM59wTLZSFbTvqpJyU9",
  "key6": "5w7Xgu7LSLYUAMt4eKvfuc11rfiyyPbr4JVcVdUrbcsc82rzBBBsVeLcDxgAsfKFnaM4KUF9ACaDjkVmprv9E8gT",
  "key7": "31iBQEYus4gJaScJv9fnjZm3pFERrPdPRAMgSbMLaNhEJKGZjqoATvMSB3nnpiyctQ8EPLAvimVtrPuCmxCn7VTC",
  "key8": "5eHLLEV2eL8Y2oaUAmuoK6aJSjzsQovM26XDTfAjLUgnTzkjkVHKV6NtgnrXvPWF3qLXFzbRZvkmWpEyNr1Dfpjd",
  "key9": "5gx1hakr861NzdtsQEh4s3SYeg3eWTzDfeq2DiXSYWnCrDUw4cLDEjSQfFonJq18nNnvAbKJ4qzmq61T4YG6mUYR",
  "key10": "ew9ppKh7hhChdv374PqwckTgcr8osnARzii19NhYGsb4wa4qGawnNAGpTpMG1U7TvFTeGeBM5j7i3TvgbtcvNaW",
  "key11": "5bpH8i1aJV76MByNR7V3p12HF3sHE24J6KZ3scuaJYZ6U8YmQZa5w99oqrLAu91G7ehcuHXGzweZz5zFH5gCSZh2",
  "key12": "2TGbKMCJGvGnvP85UjPuSMzuL6tgWErJwcgvxaknar78MYWMk9751cLm5j2sxf5heHjdehA5ZqP19hdZSvyUa4eq",
  "key13": "27j3f3i7qBbtrUoTpvw7q7br3cvGfyueUQoaNG4NwMm6Ga9LWG59CSmFEsk94JmiyT3EYZLXSERnbdCaVM9GyH6E",
  "key14": "3GcuypayqPmyCJpyv224DpNM4kVfhN5XYtvmLp3jU6faVrd7dwW6soc61CSUZTk1hTSyqjTf2km2DawRNq8Urjxc",
  "key15": "3dtKcN64r5z2rrrytTp37en1etqEJ99Wr9Je5PSqJprVTwBZS9GJ7P1eSTr2sQWThoHxRvbWbDjG39zsFojRaFLY",
  "key16": "5nsLfsQQYJpFgwN1SLBzxyuhbJDfccKQkh288LKKGeNt5abSDV41QhnfYsJLeC1uG21HRJ6dLHJpUKjoxcHmfQvp",
  "key17": "25LduxiZsnSD3kxfzJgAvGf5EkrfSJ9bTrPp7eUCbcgnCX4SGVTo72627okd5szdBhN86iLPe9oi3S8MuzTmPA7m",
  "key18": "4uvXkH67tKN5bZ7EEadDTF3k7YYqFQrAStyhJr22C2vZqgGqjTMs9ifBu4PuLJqk1zZ8AGuKhovPqat3MAwvGER3",
  "key19": "4cSKjc9HstDuZjAZsqWTjNYzoYU25gKKXEKaVBqH5Y9WeZPjBCoRUfzj5QtRT4nfWqsnZ4kQRMhodzhNDzFnMGX2",
  "key20": "5LS1cHixSv7sViUE9WxvFnJgYEE42djerxdSh7CJEyRLvq7QocCUHxBs7XWM2CJDtzui918jojWkb4dYFUcCszWH",
  "key21": "4UnfkSY5Br2dmtbkByLy4oAyrwWPAHYrQZnS88NF13TV5HkojKwExbyERSJeDHs1XZ1bVPJsNqcR7oxVf6NQgVjY",
  "key22": "3kJ6yuALjeSb8tB6LXFqXyjvcqixFMgDj7GD5MAcdzbeDAw5ssKwTA5ZqqBB8sAyjKmfa6ZchrBvSks1bJe6jRhe",
  "key23": "Vo8Cd8x8chz6BHbEaeuQWfwmH3BPKdqWy51ZJ9JyF12PoprYcERofUYdLPGa2VvwKEaZmbDk27S1oYtRtCSxQim",
  "key24": "65aPwfeTg6uxQ3oX9FawYW8itm2kf4fxzMm92Fw5iMghogvRfB3CPPQmMTNRb3JL5YV5VJ6mviqrJsQ7F2YuQxtE",
  "key25": "3i1X632KyKAb9HbM669XYbU9FZGHZJHEEKvMFGTGT2EYH7o5TLduNqth7xh8zBAjcJBisgxkpsf4aDb91cZR28Lh",
  "key26": "5djbGpkGcVqDHHVeB1a8A6FeLTRdohCFycfPtEza6n7Uxj3EsNXg1neyLyJPRiKik85hZWMUd1ZnPTWUJmK8Wu3v",
  "key27": "3gDwQJv4ps5qV8sAs1XsQkofZFaY7pZmqjbWPJDM1bXwSSFCpeVCvQDz8AHhkEehYzD2h5Li1wJfBRJZR9Wfkhx3",
  "key28": "3AP8Czer3zJkr5ixC3dUw7pSZM2pMP97zWwYizAT8mFuKczbSiuTzKrktW7UUDp6UNCqW1eaw3p1FwpakGVU8QxP",
  "key29": "4Mr7SEbGJFabCCKAnr8MshruthZYLc96FWkXiA1ECTcSZNz9Yy7UHuD29ik9r6xhwT7e6tX6cAMYSZGNo1KNMQrM",
  "key30": "kyvwpDAD1WNPs1UzZaBXFKEP6vxvUMb9hWEWNr1Uj1FZC9PK9NSps6n3tNuJCJfYS5pwydwjDVDFQTB8Q8Rbmog",
  "key31": "3seWiqD7aBa1vrG3sS9U4ATqMQiexRf8sSAsKSjGr8ceiTphWxcsY3i1V4pt17dL42dTsAf3FiNfmqoMvd2wG8LB",
  "key32": "FWtbNTgFNCG4jMAoSM18QCw4YwiDPKqYA1sAkReMzFe9quFHEatgNzsjL2qRFtGrS7XCSE5e98CJmnc6WDRefYm",
  "key33": "5uFkEnUKBLCd3REnVPaSWuUAcqv1APYsAEJdnokxPBH27Ja1NJtPZhqm447MRWuzkUgEhri25yX7XPB2HjuLc7AD",
  "key34": "2mzLu1Na6FXGDrmaCkcP1gmsP5S68X939Vq5u8X1uXWEJHu3wvJG4rg58C6QbSvM3xgzXoRJXK82DFspQqs1auUe"
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
