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
    "8j56DBZz2ofasyFEcZKrwxYNA7KJ9JRzM2FJJgWHtijzph4hTNCmRnnuiSds9YofaDPpUAUsQCfV5Dw8sQwpRLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zjgLjKKTQdao8vVBcHVNEvMb4DC8kjRYkcgw9ffU17XX45jzfW4zvw5zgYkThxxZiyAsRHs5P6cX8vTHTP2zK2N",
  "key1": "2P5LzwxYyCX4x88TVnd6dxwgs2yGF6DeNBXJkBsJJ6pYVJ2CR4Hu43szTSe8gLU7nK5RNXKTLds5iinHAEsiXnjH",
  "key2": "EAts9TRTXuytwCnVNcB6V6zVSqCp9yCh71FRW9SNV8BR75Z7eH6JWHZkAn5Xi91zSJZQmDoptJQhqNBUZD8Audd",
  "key3": "49xinujwnskUfAiwAvzpEqvuBG8KPZQcRwJqqVsrPHRkoEv6vF3n9wAcEPfnNKnWz3AXw4RsRkATTbfEaZTxHHoi",
  "key4": "5TpXeDTypP8sAk5oRevxY6hA3W6sSdW7J2A5yejx8PkAreoaKHp8XgeH58ihc8h962uaoJr8z9kddDgVoxW6RhnF",
  "key5": "21rzthdfNqp8kXpTGEQsayhgMNdjoC2dc1QHxLQXzFJTSthp22KYr8PjQjb3yu9TdmY2CB4wRqLjtEZ6ZSRXwwVo",
  "key6": "4cGtwmSRMaEPcypQNpvWnvZLPH4Bh8FfhbXdkLu55gCUDWGh3ysVqQXFdn7BUXYoyygMkHPPHGfoKnsJTG4NH7MJ",
  "key7": "51oPom4gw4yyvoh8txahNqNCz6FiEM6WDv8vrJTA6E1FiL72QfD1bfKEtcgexgEtaKf5vrypDkAHpzW1LmjFYeGM",
  "key8": "3fLchotahunhPpVN2uYhDRBTnbkYYUKsB7qhLyC1kG7vsqa5B7F8Wn1y1ZzcEXvE3BTuPegkRh2aJ96a5xeDu49t",
  "key9": "4xemLJq8Skba2BeNPCBaWKeN5THt2Hm92A2284REMcJ4otz8ndLBRusZpJUBiqEqSueUY4qp56cvr8YgKdAjVCu5",
  "key10": "2Hi7vUPyU9nZRBmBk6oGMty4SvzAgVtkQoc8adnYZxFWa66q39x6PiNEVh6Fhkdt6pPiwGtezVvV4ZqcmWUecUeV",
  "key11": "4Kas4QWLPEtGFdtuuZt5Augqi2NM2EodvDinKWGcj8ybid71sZmfswcoN59Rm2iFfLEhdMaPeAqWYUHKphZXWSxw",
  "key12": "48xiZLjGgVeyMUMoTscfyxK9LgJNj4GeLwW2XKgvk1EYhpX7wMn4fardy6ze3Sg4oMwqepSW5EqLXZWusa98VnoH",
  "key13": "5WdnqPYxjVZQWxiSjNaWXRbfSacyKfodXqFfDjkt5zgSAQKo72Tp4NfysUUQerjk4KT2xBCGpvUiipDrRZYt5Dc6",
  "key14": "S14bxFWEmeBtQrbHjLo7nHq9TsgrkNmNHVf64iFTqWZ4eKCPvq8mEtc3vkHYUq9YyBPBF5hH5cXkMLhupiZEzz9",
  "key15": "4FC8wpycKgv2XVKVfb42218GGj8FhmXSYC8A9oUdTR1ZPFhznuM3DfyHELrXnMxcdFMPntJehjwUNPKfBzKUTRPG",
  "key16": "5qcCPjZqqdAB25Y1Mm27dr1SZP87bheT8zgGJkaMikw2JpBPZSjH7sv3As52Uk7bobvFkmNJBshK3zESrfbJyfDw",
  "key17": "2NRtphQLSU9qNCcUbsrEbYR8uWpx6gkiNWDp3esiUFtA7kDTkfPmwkiNvGXWyoGYYvGwHoE1eZziHFvxtMJxy8wc",
  "key18": "5fjj9EVmraSAfToPkcTypady9tE12JaQ682siNf9bZCwHqXcqJtUYV95t35y5JH3A4G6yEZFjGg7CAUT2C3K2ZL4",
  "key19": "3oFdzohruf5onDWbx7qtLSGUvQBJRSgTGEshC9jxc9UuT8SewCQW67QfoiENxNmxK2mNGqn5NH3qX1R8Cy6381UR",
  "key20": "5JmKjTVSgv7NmLTdfiFRNUN7py8G2C8krC9yp6ArH6p7YFM41ptdVA1zxAw3LjdqtR9orq1ZRU9Qzb914qeXJkSa",
  "key21": "25WaHoWxm9LXZLqauiyGVFmMFbzCdNFXGNu4o2VCTGMSuuucWSibzdfLbvKSh19ibYwBwhp6G4m6PH7uMuLhiv49",
  "key22": "QF1EY79fcZJN3mCjh7xXBYkQuFMAYGHWn8fJGpmvdeibUiAh4RKkSeRBq3rKbGCZxMVWEoh68JYqMv93hkZHGEv",
  "key23": "2ockqcWYQE47F9iv8NbngqetZJyYPNvkhxa65eEnnZ4JzeotWnMRa4Zi8H9NxhKYkL9cyGN51auKNPSijFiN1hzx",
  "key24": "3RriXMzycbMFMPSQprFYrEAb937NE9XeuoZeYkQTB2e475mH1AsYmPtkrmwVhBwSAPCrETN6Ju2zGyVbi3Bvnx5B",
  "key25": "3fWqpoA7JiKYfzvpoQfRLV5CyRrxNDbw9gic6rHxuVXj2HKhQiVvuWHDxXEfWvGxgBWA2ZPdVc4ZJczzMC4cESyj",
  "key26": "4rz4M4PGHLfgomyFjeBg7gbLcXWfa5GXXbFMrGbh1eT8SaMDpPgfk6SffoHh2iHtRgUnNacA2w5AeuMKoLnvFQxV",
  "key27": "4HHYXhM2AsYhzsgCCw9rLeMgmog49FPPZNBwkZ2drmZ3dAxF5YhfXLm2SF2yisT1yGUEzvqGeYA7hvWp6R2dpk2H",
  "key28": "5SqoSUGjsASGejvjbxbrvsVtSMHLWYrwurutmZwHsUS7CwGjohJvTfCGTWLXKEMhv9JTou5Ch1GSwSNVEvjuRybt",
  "key29": "4aPsZxkdy7ehPdnnRaNPdzxLS567WEGMJZ3HctSxwPAgC6wJFqzy2vZX7Vd1PHLvozofUf3KN5t5yEKA49CjZniu",
  "key30": "2cNCZ3XStLs42KXzBfnygYMvbgPssj79d6PCUdWv5StqrR2W3dB955gEtSLMC8KS8Xh4Ua6MigeRRJejNgov66Zp",
  "key31": "2gmQYAj1YKiZ49PrW2a8yWy1wayHQnVbp1o4mMN1pbTFvzWNxsmAGnKG9MazEikUnRejkrAt99kbRro1APpb8Fqt",
  "key32": "2nhRb1zHhuB3c1WtxXxeo5q7sPxT5iujrgcG9Q58mRPZaRYVQRuc7gyZua8bMnygRSiN3NX84LjbkUss69hWZH3c",
  "key33": "3jFs9JfrFpNbzW5JWxgTEgL4HhkqHd5zpoREtfeDdyJGWPMHf1MJjkiEvQfhk3LS71pN81tVuAe1MRa1zWkqbnZL",
  "key34": "43jR2b8GpGVqSak5CGyiaxwuizu48uMxmmrPnTTebQw9BCGn29eSWUR2GjHKz9ysDoovsJGL7zQnrjtdgAiVPko4",
  "key35": "43KBZTpxeziAQXGx81R58evPAV8NUQphFHvSW1eEhs8bmd7nrQKg33iTwbpcns7M3sPfYzzigDNZsUbR2iQLMtMf",
  "key36": "31iG2ViozvUZB9gt4zjspQ4CCBA8b9XQdHZyATjEnWgxyAaeJqJDqSFPEDL8PdJkztb6bokPofTZ1ZKLCdtgeJvH",
  "key37": "7UP3YArPFUFrxpUJ8hVdQLnCF134eeEarYyU9o2magTmTTCSffdNTz4kxjCGJ5DAznpuLtPRVaghY6cbsHjBpVu",
  "key38": "u97sR5HtGaFgvuFhF4NZkQgTeqU1uAjGtFWdR4nwrAhjedfGj6txUZFDn7z8caUdk8GuqnzAR5b6b9PUWVfxSat",
  "key39": "4e31q5RrRNzxiu6tWhc3QS3FD6FrrX5vd3Mya1GHL8VAPhqfosqsrLsXLzrTAss3mx5CMy9JLQixG5d7FZWK7oXw",
  "key40": "2ibEVgS6EodM1pwwWpt4JM8hrZ1UAg7fGxB5NPtVnt9DqFHAqdurM419TdsHto7SQyWNLa4oQ29e4QvEyADZN3uN",
  "key41": "N9vm53eoN9AGFj5aMeuPbx1MUgP9oiaZ2HUDtArXE14woSYdfqnzRCcBapvqfLMgQFpDX8KnWpYJ2E44P5tHtwR",
  "key42": "3g8VXMsdr47qKBK73C4XPeaKDvks6GwnNEvogajzbavkrMAvTbu3mfqD8jNhJCpLS9PREedSDrYZfQ8ubpfC8hWG",
  "key43": "GPYM6eRU4FcpTCoodER5ThEnmZe6DbPbZWnz9dXgDmT8ckr7YGeqEaXmgm8S8LQSwusyrdv1nkNizdyiN9SVb69",
  "key44": "4M1p2VC2LCcuM9xk2caoD7SkG18s8VBHW9j6TxCGi61CCqJBaBnYbMNq3c6EA9PZ9sAiDT6SF8EAukNM7ocqULh",
  "key45": "22oYz53NT5xRpPh5gjS2GrnABuNeqwcJG4zQWtCwJXobsXykk2t6N7iwz1CFurXgiDantSjyGGDsdJfQpNcshFQD",
  "key46": "2PAW6pxUQHm6duwES5obxrRs2xgiabxhvyDG5NcAJgpe34kwjSSHqnAM5huyrwmargYvkeJqYHp3Njm1Yh2aiCdR"
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
