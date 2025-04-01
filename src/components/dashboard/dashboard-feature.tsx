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
    "3XLMA6Ag3mp9RqJag8ocpGxSQS5sb3zbRYfkDzR2WLAonFV5ptupJ6mzA951fvDmUSinNtWztzgy5z66oY1deZAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sy3nehgxmUKKZeSJ68yShkh18VpgC7aNbaje4RwfqXW14LFo7Cr3mjJAm6vznnNNMHda5DdAu3ymh1Dhq5cWggR",
  "key1": "3tS6U4Vy81mYzq6SUMy4Pvub6xMNgbBMJAChDXpw7E9yMxNML7NHEBpgVHWoQyuaBQLcEVHUgdPGPnTUcPqXiDzv",
  "key2": "AMd8pVmL788k7N6oGANgoSBY72qJn5YAPjh62WBTDgpdHVUKF5PoQcvV1aPGfJVTsqYgNUY5rxJzzPCYFrrGMj1",
  "key3": "2r8bZvSNqizhGefn4KATqJSEc65P884EJrEAMTeEwQJCqrE5SpiDiNoFzmJu78u9k3fLTwDSDz2NH2dbFpkzNtnb",
  "key4": "3ZbzYopEpMioNFF94eX2gy5P8YgnXNYBg1y8pLRsHhXF7WwVzYZ6qhVzmyhH1YxBBYinG3MzQku22oWDzBrZykLe",
  "key5": "54WLsAqr6BdsQeimVXwX1qzaqrwb1NnnQeKpAiBiE1xWAvr5AUXKkEgQEpasZ8ueZjckXJfiZTAPKBqgnzBJR7h5",
  "key6": "3EBLbCcGTeKfms81WV2cNwExEf5mGKAFDa1B25o9H3DwSamGiW2JrvzyR8t3jyB3AP599JtJFcBUwiaShcRkioyJ",
  "key7": "2g4kBrxfzGd5PmYNpUPPMQdeZaWrEby4dDbCcs8nAruoyqoWKQvJvFp4rR2h9GDpoFfduLLTMdYPZhwdsdiu42m4",
  "key8": "3eCxrhRcM7krd73WAQyYLDYEjd6myFVUZr4tUywgH69bRthgTW4xyqpApf7udvoqqRxWr6E27KceaAs7CjvgzDFh",
  "key9": "JHXzvuqC6ESMX2ACKDts43akA8hCSt6kvmmBGmopecYzSb8HJ4QA3KK2k49yimjHcMbEFLrzXRhFjH7Hy3FAH37",
  "key10": "4ZpTc7ZunbU7Jox4MsZg9ZWYYGqi4U281RCjPaPe9yegWXGkzfXX6P1qsfUkKVv2Yk1Zg1MpGK31X9rHp1GrvFLW",
  "key11": "5jyYP4eGNyXMQgoN3QdV1r8RntFicMQMKgck59dW7XKme1otU86rtGqyVq1VCEf83pfLJhcoJd7q9LT27GhcMTPJ",
  "key12": "2vECSJaK6aYUUmsPbBBxpKhcMrfHPKymY3HPyi2pLQVKc7K7PBCndZeyKkTjEJbUQ1v4mMV5HEdpHusHCq9aJK86",
  "key13": "koHBysn72LMYCnMJaSmxW9Le5ycbCYPQTqPdhZyYgJe1nV6rPAoHTuomQ1nQoK6knb7CpPk4kMWNtddWEveLpiP",
  "key14": "3ot6h8p33CdDZCL5eQpnfjrDiFxMNyZjaquF1A3RNugU39g2HXrXSzqNBNTq9Q7R6g21pHuTUsqZPwWo6c5B5zhS",
  "key15": "crCMx1n39DCrPJwfSSFZnSEjMRnb4iMj4zy6nFb2gxBa2QwvkdYGZ5op9V4dKwSBmFA5gMR5Tz3d6r7YAC2kNHA",
  "key16": "2UDxjYwRwWYLmYBJ8iTQTgXHTjCsTU1RPLCXrNa8bCsuSFGgxWP5x5ZoismbBdLScijkuRuqMRozsM7mhFCG8yus",
  "key17": "4eoBnMFhGi5n8xgMsWWeeRYZJFAh3oFyHvarnUK9P7annz9Gp4h5E4HWYi31HbxTu99WejfxKUq8dJt5DKGi7ao4",
  "key18": "4RKjgyhfuL5ZcnJAFxJXXC2LEkQ31NSgxUdz8svwXZq616yKgeC9KYFqUeKy2oNhe8e9vzzi6cwyhLKp2WW8sB5A",
  "key19": "5Ybdq3EHT2hX7owJHtoyjL15PEWf661rSCX6TzMukGKrq1kCTi3yCQbzHVXD9iuCPKQaYa8GvJ9cg8gns463ZRJa",
  "key20": "gVhoCqae2VgaRBGMxjtkgqzqD6gTpX2EYU83acfkDXVAXn4peoSspCpGn8dSCxCXePJYsQMAJkimRAxDiqcawhg",
  "key21": "28VMVwPe6XW9jUD27LHG1xHbvP3WBBNoHoJZc5RQ77TJwtULNKBQux3g2WYspRXLe2h2HF6gZAdkT1aUuGSd955n",
  "key22": "4uKWTJUNsGB61c99GQnciXfK29ogKAx12XC5bgoNDQmSEULRAuk2y3YfCCWvXUsunMjuX9AKDkv2gY5PxVFy9YDL",
  "key23": "5iZT8PNijKdbApa3PRs8bFxkakDgDdAZtirLikQ9XcWZWDo2dAYtGzWFta2fw5R4t6dEyKDi43iKAgphLivjvkS6",
  "key24": "eGjTJyDsRojhNjXVr5xCu6P2edwC6s4WGYnWXsz3WGzBfGn9iKyfaNRhdcMavA3UgH3ikmmGnoGXDoKaZBcJYdt",
  "key25": "3yFbpRPSif2TvE8KBEQgLh12qPRRnqEfQxRsxjw8kKYeurdQtdBNJzFhFWjN7VdF7v6EZzgzYrFyaQzL8fptsyfF",
  "key26": "5Q6Bn7DC7zJ4NpPNEYokE2jP8aC2M3VLMwNgqVCqysvtKBxnMnweg6WoC1d9HiLo39BEzw5aKyPxjBNB3vz36efm",
  "key27": "uYBHbHv77J9BAezxCpbLqKATtnfMGUXvHiDSY8V1BNasVGpDHZnfyADTPYxpGBCy7VgVkaK8L8zttBncHn1wvHd",
  "key28": "5EY7A7KGXzupdisnDguL6Tw3jjPv23d3Hercy2vr9q2j4s4zr3qd35twVPzhQEKVpnuRkuFo6NvDJ6zhgZx6EYDq",
  "key29": "2H3aUCeSrzsNVWrF9mwx3o2ymbnwRf4GevTKLNSay4Rsfg8SrLCC3u4QPN1U119yASWkdCxpLsPosbjcs4S8A4pB",
  "key30": "2Bp2X3wzaMYtymXkay9LCtcqheAg8LBR2WW64gUo5sCWXVkuzqYfdqETg3DWRfALgTQtKDDzA4eFedodwbju2MUv",
  "key31": "4XUT4rtftgWra69xb6Vz4ig1VdJC5r814Sa78rFso768puvJZUDjqWgVMjvWEg7pC4H8uE1FZ7pYmC5bxAC7ACRv",
  "key32": "5FwopYjxNBeAqxcMZTLeeBwWWhfA7uyLiPb4SGB3dYDnBRBYeVzzB2L5CoYwDTMheLBhEeXo9vj7APA9jyc1EJF",
  "key33": "YusHAfA83hHAxFwfM4A2RYqe3GHFtTiVABj52yimADib3cw1AfpmJPTSn5aQi6zJNJwrQsLPmfrWgV5n5PyLWDF",
  "key34": "5dQAr1kD9tdsCt5uvRKtijNaid9mE85wnvM98fxRMnByEqZXcaAQcyinLgqPXLZ159miTj2LyhLf5fjNeoAJaCG3",
  "key35": "5zpeewerS3A3RJujFxXd582dQDqvhM7A2VQ6g6RkUEHWFwUheH5uvHYLCwjD3C6BQDszpJyHfw3v8YipjUnzXVe7",
  "key36": "4pm6Vrc87qZq4oKAoYAVMmsPxa654dhgsjKLLjYPJExUMwb7s9d4Mm3hmXHmdREpsscHW4QLR5x2Fc8i4CXfroGZ",
  "key37": "QfKuLoKRVDGkAV6kHqcQFZvB7aocWzTSSSpsG5Pnb8CXfLEbj8SCx9vAsbyZGXNga4NiJpwB4Uy3zrMz3nNBgzx",
  "key38": "JZdh1DCwynU5s2RMmttWyNx6gMmFVV7d7Mew8Yc4U55xWRwP4biesssRm6prmcFdhhr5sGR6Raa8eZSkPgXtmpC",
  "key39": "5sX7Fwkr74YfzqvcD4KpYrToJ7eWbmrXq6n6Vuxw1usihD5f2YjYTcfaVyv3XB7Uns9Ji6iZ2EisfE8YB98HcEtf",
  "key40": "4KhcjCHJaLKth73dnCAgrAUEnFSBy7Y6ve8N7ZLc6jaicrM8rDujeqUjWdRYgriZ8hNT3mRx2cmwkidG9M5FRLWf",
  "key41": "5mTgAqFeVW1pX7TZvpiLWftaesomoHMPrSGWeLSfkjdi9u6QgpmbsNoC8HnQmuunWxetZvzVgQjEDq3awsuMqMBK",
  "key42": "MsVXM8jYtJg2hfnxpZuDZ9QutNjYTSpy7eSZMLLcKzvPg9qhWFhjPzN5gML1JSuh5ijuX7oV26z49o5an2TVzx7",
  "key43": "2Y1hfYgiMBJTczUZHLtohH54eDtATyZcBPeQQpEmdCTmhTH6NvdZEhetCHSth9xSBzyzuboBrdYj72WQAjvgifGZ",
  "key44": "hkGWuydry2ymuvxcyD6UWxez3bjaJhb4KBtMCu788xMbjoWNoVJCEVLiGqrSRJDiPQpsWnPEccRNuPkt1K1v6gu"
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
