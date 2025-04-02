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
    "4sx67QH8Cw2XPXTdgBDvQdHRsZGDgs5qbJQ4An7mRkyHP5aSS6AF9f9bWin9Gs2zpkWSVihGBMLRgY1eX6kJMjxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64tAqGoQ2YswNCJkPsHsdtaWxdd2sjM8zsZY8vnZ4T85hMGMQKN1xwmqSLgRzRTWfxW7EGgAYKCrAsDr3N3EnWWg",
  "key1": "MSv25Hzg8rvT9u4SrFpBtHKtQGAUK2B7vCXroZpca9WCynqNFTrwpLcqRdjMTkZtQ3GfhqSGmk1PxZi57FK75uS",
  "key2": "3argvjMRuA66ixE5z2eXkeRyYnLQDDzzhXZEKCt7mc8zAZPEadwEbw6uacHdXNk9mSeYs6pqRndtK9NC8Ezs5NNr",
  "key3": "tmrN2nqCqf32U789giagadYgtCs6paSXWaXaRj6gYkNPmu9NQmrYqu3cLYaeiBp97LwgjbgBdShQc3aBN5Zrjzs",
  "key4": "5fHyuLoLf2E8aZbcK2GaSkr7G6ZJDxadcAbbv9gaoTziDhsMiiKH7i4vCKcvAkZaYrsz3k31fe6eeegf8cjj16CX",
  "key5": "4kjx6Ju3ADmNuHQYK65Ti1wAMVYVyRyF2secSU3ei5cwgzW6ufShG54qAAMrHDje1GjAk6gYdjw6amQenJAB8PQZ",
  "key6": "4wQuDnqobDCGL1i8Kr6mG4gephqtoC1bULx8Wrkyiz7GB75MBmjt25rYkX3JdLh9kDwFQ45YenRBfCVPAjbmibLs",
  "key7": "3G5GAerron62MTTrYj1ve6zgHF5qeXH5nYksXBg6wzLcFdLvRPYMNNhKjS3cqWHkDvnHRxmkyA8MDZJHHmPX6oR3",
  "key8": "5TqyEkf6dqffkN81oVvhicqFirSV2t7g9vGp98eoUguk5BbzQwjRLJZTJbh2JGqvp9DjNM7nm9G2kD7KNuDXsDDs",
  "key9": "4kw217JSdjGU7Q7F9nHsQRxnCeevJLmcsTFer4dQEQpktLYKFoRSw4aqyCc1SihrXfa69nUagd9P2PWtYDcTXZiu",
  "key10": "3imkYU4DPotdfCQdX9e11eqdf3FUaNXtvyqVGey4V3jiNDPvHqV3ts7CLJ5NdowENbBNfab8KNDdkHi5kaAafPnX",
  "key11": "25eXQtGnCSY1UVEmDpC1etPztc8DRTw14R81HQeTr2CzKH2Y244UnR9Kb6EymEayPok2MW1nxtLzFm4UvvRj354q",
  "key12": "2g2xsj22x9PrAGzJiVTtdmAY2sRXJxQbawhVnGxpe5rVykq3EemadGtz4tz44V1mgDfnkGpguwYukT69LCSzF6sb",
  "key13": "5dXwtAEsGdog7HkjRutoTR3esijLLoQvtj6pGsvprAGcLTEC4iiTa9gQ9RYnvmUBzKbufzUXAN7iqp4JXwUxA4BD",
  "key14": "2rrLoLiff3nA2Dya9NvJr5DuTyDR5CPy5N2gvWh2sh2oqkm27RaFKA8153EtFT61MJqWEiPrbNdSLfQu4ZLAWWdk",
  "key15": "3rPF4bhfERir5rYshRyk9Gi2cM8Fg7qjcXekkSKh9mEq3eSQkNtCpr2TxKGErRJTh1B491M8JwoicAUibARJ5PRe",
  "key16": "4JaYYPnKwxTYPcVtLZCvpXhwdMRoSnkuCMQBDUKGSE7e1SybqC8L5RSCEcLRosvVWbsZ2UmaWDsHpvEcvr8SN5Mw",
  "key17": "2F62TrauvAxdcJ7L29vEJXLfWeZfoWB9BcbReBsBuLeUX7X6cwNmd59bEt4hxbKox6gkTiNCegMoJ4esKs6JMxWg",
  "key18": "3FYrdYU4aucVKS4giYSeV6aWCAcnpD7jKFbJaKdTq6BN6EXy3kgy8Zz4VHjn8YMyiFsaqR8xVG1ndPHZ4QVFPSUA",
  "key19": "5T3gngf4mDYpgsz1EXQRb1id9PCs5ZbmgVSykji2Hnn7Z4MSMfHyRmH7W8QtfSnMqKDag5ciWUvM5Vm3uU7AJpFr",
  "key20": "3ebFaVwS6C9PRyozTVRmY4Q29QCREEJ8jr45dtcG9evzTGjiPqPE9BLqPPHTgSgG4o7b55LKUtC9mBn28aPccJSn",
  "key21": "5ySQE5TH6HqNRFdBpWmMPid83wBETc5imsczGEh7w1kRph3yZTuhidDCPE7ZpsW35SyLXNUThN7TwHyQi6YSRPxR",
  "key22": "638pCH7zqYyH6vY7SyzexU1rVbuHxad4bKr811GifYkJTEdpo6PPirQKmebcbGqxfsx58XGjqxzxPwNLuYdmNseZ",
  "key23": "4wb9jQnKQry3iMP7YTkofkmR1GqDRgyzR8Miix5w5DG4o7cd4UrRtTZjwqfh4mtxeQ249LtiVZwEsDr5xxa7hcfE",
  "key24": "65R8i65a9hX2S838kFksKYCgQaCoQSGvuS7WKTGgHvSBoGGL4B5cCaLRtTs3rrVTKLkos1xmr6wBh95KVSNmfyYw",
  "key25": "22WNEMAfdmEr4RBDxt41T5u38oZnrCx7FBEomrxsaDyqHs4phUSco8pCJsZmwF4U3PB411xV9fAJHtTZ49bxd7ta",
  "key26": "2fskisp3NCNjj4nLAykf7d3fXoJ2nUrVciBdJNjiiuMCW3KLbmRs8i1H2WUBuNk6tdqDKgEEPBt6nGq7CQ3qVxDf",
  "key27": "2PWgj53Q6iaBpx2jaWcYHhJgS2RtqKkXqdVjrEnJdHD17Vrj3KaHFtBZrfgdHrjXwjTNXoi75atYxKcv44cqM9c9",
  "key28": "3EkFFxQ2TsyGsYyAykJAGMap6ZWEQtsKNNtSwZuDqWLL2GWoYYcaPkC6bS31QVrLCH8nXBLaUvmeiJFtB986z694",
  "key29": "5NaCxaZm3ZGpiy6rrGXWQRzhGUUrf1xkXH3EpSqWpWyUES7xBhEP2mfnb8MippZx3M2en42M5McQAWXqC3NdFdCh",
  "key30": "39piCwz54zYuspMSacybq1VmTrjhamdibJv2X4Ci5KZhKn22Q5wfVUjFCtcQkxNis128sbjJhHgTSauemGL3c8Ey",
  "key31": "5KZ4rnqxZfrXzy1dfhmTGMgs88o2EFcxP8uvYkpEKLsfwaSKi6Ep5JHmumFYyr6KW1Y9XxaPQF6JMfyuXQNQ9rKJ",
  "key32": "2JU89UUKHgdmWeDfpHNkHWKYLCYcMK7ZmiVfsfsv4CzsJPhrWu5T6i1x8Jic653qbhtuAKMxEhjnbn87oEWuVxhR",
  "key33": "4xeTgj2TVVjLoAt1kcjGCKtmKnRHBU377SGNrNxAbeNjPvXrLCpBy8j3fSb3f8nFRBNxZG3syw7pWRpeChq2hro2",
  "key34": "5UDHidEantbY7xKKuREgqXDuor71sTp1oah4Qm1VmgX53fwM3rngFMCec6GQQExCdjTUAJHkjUBDCSUtCYPkL3QH",
  "key35": "2nYcpzpoUpTJsRsf13HNj3EJBh9ZKzwHNVkrQkAxjNQ79bE9rrT9Y86nEmb8Nu8vMMn6MfoSnu1ww2XamdsWB3XD",
  "key36": "7p97yZQRG6BVaZ9JegydV6RvpSHfsVmFjWis3cyi61t3eBwgXdgvUA2vVwtr6AWz5jvJyUjdXuF6PibWWBNwVBS",
  "key37": "W6KQpJJJApdTP36nMcDeKWph95pv73SoYsocGJjbqCdUPWi5yaBxL2r8ChCQUqsnf2qupYf4aCYL96XUkEta5WD",
  "key38": "4uuvfd9kEjVFtgmg9dVYNJ5YLLpPxMg76AdkCrkY5foY3na4uWnkgkygcbLmwSCWdXFm5Da9fsk5NRNGRCXoxuXg",
  "key39": "23VrqaScBe2t1ZghJzpPmGKij9PfTF2qnae9w5fSG5nbBwGnkUaEgSfpgCkogdREMyNgxECXup46hJ31vdLf1jht",
  "key40": "5D4MtFzAzhJSsqGumGQdnYkxSGUZcwMWuzDkrS2uuRvE6QsxvmegwhYmExbhDvT4gku1WaTgvHoGoT3NBne2WsAW",
  "key41": "33QSR15sNdok69MJUiyM8dGviqhFqomu5SXj6eSRzz7tFBWhWtoZjx52jE7iT4FQsPFBGpGjgRtQMTLGmg5fSvmb",
  "key42": "3esW75YXY6zMH9Arq91yNCtnbx4tERhSHyRSoMDppE9WjhcRuJRCEAxSJsCeWV2Rfz21iawYZoTqAECPxLR1EaQx",
  "key43": "9HenvnEwGqkZMjxVh7E93cqoaT1fty5hiQVPvowgmCcPw4MMeNPxeRse6azmkZT4t5WbVG5CpDtj6UQdP59yKWp",
  "key44": "2vsovoxmm9uiQmdhRb2c7nJMJbdCKotEV9qBKXi5bVvafXxiZzJ8g6bW7BhREfDo9dwGp7Qw9qZKqrXVxRPZeZE"
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
