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
    "3kWP4HTvDjHmHtbSVtSjd27NBKzHzccBzFG7Z6RZgiicgowoDbjJwrNY54re2nkwkBco6zzexeFyn7P2dD8A86gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45i5VVSzxbxD3mMGDAPLkXmSamDTYQUrttN3qr5geWZBMQCNq2T1gvjRybbBJzKuhnM8zfQ9vr8G7AqbC9PQp8if",
  "key1": "4GTcTKikh7HjWJfCMo8ZvaB6fzN5gpRGD8RfYhbWdSaDZUbK39fDEeaSTum5MuE2RwiwXVhMCcsa2Aq1VpJM36rU",
  "key2": "3Y2c3fESRxbqYtqzTu3KJQ3cQkNXLD4EnmbPYoMrZohj62HieAohGt11tyLUDF4dKHnqweAVWf4DxrQwH78hmtuN",
  "key3": "4JPVK4LeABFXimQ35RBQy9Q981Fpd4W4C2VMFNPcp4zRwUJMpSFpHpQ8HxAxGJ6jt1GLJqmqqHqC2Snq97UkaTaV",
  "key4": "2vzmYry6PsHMw47kvKnLQ2BfjZNpQ4vktiTP3N2dmQLYNP4yjHkbGEPpenZHgEmcpRPbLheqdkSERKNyeJ3buG2L",
  "key5": "3Z3j1LjjMCCSjpsGTpZD2U8QZZuVxEuc8R61LWx69iZKKvqtkL2tqXVZffAbNrYLJCsLyyungsu7A3B5jd3JaH6z",
  "key6": "4dop2Z4TVhRKDgFcnx1RTGZUhQ52q7GCTfjeZLwZRX1NmRxcT4sMWPLVrZvKfEK5wi5c72F5gzxqWYrzs7ZTXpVv",
  "key7": "4CryvhnKek8HbtpYpVZbA8DPqeUY8xNkJCMDtGdMv1j1k5SUwAW791EETN29vRUduEhEtzdTDAH7LnQBw1UjMFkH",
  "key8": "5w43b5MGPTQhYnw5AUqdrmQPHihk98iwcCspwHMnsZLT15Cm8A6nq23n6x62QUzuHuLFtYNHFqT8f5aZr3xmrSzv",
  "key9": "4rPQarC2ryhCdWbh7zLtYwyy1WvsJsSTiXXUJtGKEuaduENPdMrXuUZ3w3J2u8bphyB4pqfS2PyhUxKJfAWeCR6B",
  "key10": "PEVAoSPVJ2dsAYYXsriBQAHpTJjhAeqKxDhcZozATAFzgp9ejf6B3BngvYXf8Ph5jfa8EYNQhWhVbfdJgN6YNzg",
  "key11": "61UQX3QwTU1wbpNN4zG3Xn2bqaS47TyYv7UAXV6USHw53fmqK4YfEpBxonit8zDuQf8UDxbQNYFhgbZtV62yCrXj",
  "key12": "26p37Yy39gYELkcmLDcJH3gXE5Vok2CoFULibgAWY8mLnoVEea1exawkjaSgo1E5ewg9TejAXDAPGsk1Acv4giaJ",
  "key13": "2t8FroiLhE9pci76mM8V7FHkVvdd5QutTc3jYrq6KcBxN49vGkQTMtwDiMPJCEi7bjyd3FDCsUqpGNxqgP67ZmcE",
  "key14": "2cCEMX2FasQcxHskaqa1gX2CznueFq8vRLnDTaJ8o97Re3y2Vn7bsmBBSqWmmbBnLejXsE9QAKMYgji3vJcAxzkB",
  "key15": "2k6GqEYmKWo12TjGFtc4x7Gw15Ni33iRFxv5vgiPENsGj48U36bRPUfD3MbBsEoJraAhmsRjF38PVaBVRADS8DwY",
  "key16": "3UoBerdW9o4w1GRAYeXaxW7yQFMEV7KyB1CN2HzpFtjVWEmDiVyCo7QBTz4jimEugGXg2SqPBrAKF6EwLkoV2V9M",
  "key17": "24HMoYS2s11aLXixbxJJEE86fsqnmuKPinhHPpeupcz2KVWL2xC5dp84DSQc64wSrq7AboN5yBwffVPLDhxVNfms",
  "key18": "3qJypWtL3Tj1aPqQHKeKgEqPSD2zVqNAGdDJx4Ye4Kdv7sRbpnz7csT2eeuzgHsXzBMSmijXi8eRtNyW8e5EcXS6",
  "key19": "rM2PRDoZozyywWPxvDrafmyv3ACX3SmknKMqDVvLFFuoCFxHWQAbpNpikP8vQUuqdP8rdbjjsCBNajEKAdh4bCL",
  "key20": "2hh4auHxfSh12NjioWLqdmXT3wBA3buRaqgArfuZtNhVDHQEGfw4S3McnRcQccxCA9neAgboTpTZhpxNTcUQjvtN",
  "key21": "5DkHRw6vYne5snXe8tGAZX84mpgpnNNLjM4BJ6h6pQrdvcEfsoWhbXjVe7LPGnbTE7o52HNsCTZf1Sc4hShfgtMH",
  "key22": "4kQECGgGy5AyfdkhcXQvMuKbRhxT7hbjEQtMrNQTnWoEPgxpP6UsuZD9VdL43m9jJG7T5ew56HgkEPb1kLnLZYz",
  "key23": "P3fDnEJrUQSUtxAjfNuCcNm4o2dS4PixjL9Ju1zN4PqEsRV7G1Rd9XaFHDjztJSWbU6Ayy2ceDewZeYg1oaL1GV",
  "key24": "6bNhCSYetTGPYuACyHJJigvbw6PNxszUxwBnuaxprNWrwe2Fq84s5JCVvJN6XiFo7fy13rRE1rgGxFMYZKraJtz",
  "key25": "62n9T4qzLhvhgYsnvPDtqXhBoB1Q8HW7mQ3H3bxKw58pqmFuhkm1dpG6kLTafrYPXwaMUEkdW37smd8QkhnV86fm",
  "key26": "3cvXJhbUHd9tef1UgSJdruAP8qcdycGb1opyWdDpbeNsC8nuLAXyL4f3iRAe25rCrXQXvBNG67nt673H7DfeK6Wj",
  "key27": "BPPmSuvu8vKKcCmM5e9vL7sMjWLEiRBeZCxxefat5XvDZVeGDcTKPJ1ecJVePr7Ct9NJctw7DJAb5hNp5T1e7hF",
  "key28": "38uQhVe8DC5oHonLigtWjWoxAUWaocBJMrhq9sq9gMJcxopjiPekj6gBq1xhU1NLtSubNpd4KKD86SqFdigZsD5t",
  "key29": "3hujXLhsFS56Ku8ngixo7ErhqUtXqyWmAeinZCkJmGeKdS2biMLnmyFA8wLdCS73kh2H5tffkwu8Vb5oitRqdUmB",
  "key30": "3hwSjkrrnNsuzTULREtx5WD4E4tMVoCQX51YFWKmTd417wjkNhJ2jJvxr4RsknzCqsQ1X1yr4dvaNe2pHSMk76Gy",
  "key31": "61m2f9DBanMeXdRqDZ93U1Nof1ecKMy6mqNPWNtwwLbnwZRZxkpGoaHBRmY92CJnauuRvSAED5zqB94WaHo9emQz",
  "key32": "3kQytTcnCarDdAeBiF1iyK23ktVQdadhVM7e2YC8WSrpvrLb8BY6k1rDuiCRkXbUDCZ5CfoEmctQhQ1Z7QGrGGMc",
  "key33": "5DtsiD3CbhaZFpxBJRyfx5Rn6a46WfAJmqBemf2VcCUqut3hLwPjohCad38fgmQHbk6yYUhMRiym9dxnBJS4AZqe",
  "key34": "4wbxDzBCBz4n69Hr8wPY9gSXkpdY12T9N3UDcUPvMYno1c37QnpCwyew45qA4ASxSsh3mb2piXpkvQfVQMzr74Gm",
  "key35": "2nm8GsjQMqe5JpgVVDXUoKp41JNwisWbuLyV2c3WuHbhStaJYpweJqmTqpQGi3E8wAL6LAazRvhVuTZeATz9jSpc",
  "key36": "317Efd7ihDW7Wg1Qme78rvLdLzGQ8SRZs7jCgneCtiUZVRC4MQRWPAL7Uwd6rcmjYBqzyqFU7YuT3muYXaZYc7Af",
  "key37": "5BhJnP49Exjd1Yo4VRxgfdvhHuN9LuspSaV4kZP6brX7DLtceG6BdiY9KKpGH1RUYo1WPeSd5f8vSfpxr5ZFtSa7",
  "key38": "3rLFkYRciEVFjugjRESpuRujF1uFvDF7f6CexSCHtaXxG1GNvSvH9n3L8oxWexgrzwfvcXWzQqkxnxpQMF1rvkhr",
  "key39": "wWdvkCRrzifYytdTsVUB5gKrUXZzr1dwBEqBG1Qz49R62RKAm4ZDXHLN9esZq7hF7BiW9JVEaahZDYGYuP1XU5X",
  "key40": "5iGcfaTenj1495BtkfTQRN2WVWtaGfKqSXD8oKkdtPkVZgzessZV2gRf198LN6UQuUPpCZAYaxm92JxsJj5sk4Ee",
  "key41": "2kjZHhE6bbuhmeBkThNLMYHTyWimzE8CKymHFcaF7zvAvQMYvyMyU98JmCG1BrwmzB9a1PJCSNBkYmmwYJjST2aY"
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
