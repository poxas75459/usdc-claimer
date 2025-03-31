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
    "tbd8AQfbHV9QdMtKzFa2BDkecg8dfTnEYTyRMoCtmbfRrpGejKFgmH1YdLHnUx9K2N8Bqq5mkzZ8JJufJKjxdXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euTxuyZ7JZ3JofrZpReb7A55yLBVGZbqaUiNXgjGRiBGt3XthJUfS7wUQXyokbckYh1GE6DsBS5A2VhUPppXR5H",
  "key1": "61SkMywwCYwS6B2Jz9d2KtvPCij6Empd3JTcUQP7SGjZRosWZgLvtLxfbTR93tcwJfHDJoArvvJnwpkgbfnBnKEd",
  "key2": "3uS7SX6ykHkikN5djLJSGgdAtqy4AdCTke6WEdv7nQjSqRU7bP199iCDpQUYvrs22t9KM6oTvuBqQE8dWaQdqj5J",
  "key3": "5qdFRivom6bb2zrBUqLDwgifqQGsCjtViXebdRxPJtbBCrddFGJsjxibnFzPTGzkSCK9xwfrssXMxTBsSZDSHRA",
  "key4": "4qsfzPgsnMqgjH7iJve9QYgHrirKHQean92kTensm5nhWdsW9f5YXm47mSZpvUayo4i1rHJb19xyxNMXFFBJUYDZ",
  "key5": "55Mb9rEobsK5KKSroDurvvFJPAANWCERFKGKVQYaLCbfEdJdbgvasQuBL3cXBWAWLbRyvoisSLnfHoQAELu4dFCt",
  "key6": "2eosUkAeX5LxRJmiR2EdHpxUkq4czToSjDJ3tV3HdbF9avDmZS1xW3htiotdsdbhCRHWaFfiZfmS5pYmMfpMSyg",
  "key7": "3nJGB6MqD1TW4EH7popCktr8Ey76xrgCykKooZQaSpRciuGn6p6CgaQsB29FiMYJy2dkFFfzTL2DfMMk2RRktjzi",
  "key8": "56zxA6zMDUfKc3zcRLcckN79qgmfR8NYPR2SntTAeZhTSGEeEMq3uaWkdFTy5tKHCSXcrkr1mrFRkrgHjCCB5XRG",
  "key9": "5MLarpgaqvdWXyAsD7FFUy639cfXRHCPTheou7KkFMEdSfukqdu28YJQnwNeP5CQx3ttm4aoLwUxDYZ5DRAampcB",
  "key10": "iabHtyELnjRa9doCJ7NuHziSFk1oRnyvdeNWAaKBYRXaYYEYTbozqD491Yf91ZEH9aN3Zk4n1ZMybvp9un3AGzb",
  "key11": "4CkuG56BQXuxyPHFJsWmmibUYrvMSFbQyXwd1pCPtewVLEDULwTWTr4WMxS4scwVKHtgtaKAqFPECZKFZm7gqnGV",
  "key12": "3vCRzFjsrjViuLZTF5m4j5CtANUNQhgRTGkRUGTTKb4zLqhmpgUKervgT5zo9FQ5HL45QyEoHYhcfv5BegbYVGKk",
  "key13": "2uMQbFFTV681DFzdZizRqd71gHuFVHmSUzSB8c62zQnpx5gpdzCPHEHcSimcgtFKSjcp1E6y1ky9y2Js8JHtXcQJ",
  "key14": "2bEcSYdkgySQHGWe8x2QDJ6GcRN1Bi3buHpod2ff8o9mn8KRj6txAYLKtPAp6DFireEtt4dCpQusrd6hofMUDics",
  "key15": "4cphyP7kDKq6dbFGnLQwaPhEdQZ42MK2y6NGtxrhvn6CxZKYJMkPtH8uNC4Z6GuuR5wSz2GjM7NcCei6UcQ7v3oh",
  "key16": "2Q6Bd5L3SgVKj8rZcpPShH5xfzu6zovtn2fJ3nrBtF39VvYnCvjLefKkbzHHFCXnWB4WXPMuknjJuxH6P37Kf9Wy",
  "key17": "36F1WjogonK4XvsLuMrxJ3jKprLpadeBgCB17CWhL926PStGRNLsJsJgGeDKQGVcfNwVQ9RvWYYaoqcm7ZXniwpM",
  "key18": "572GCrFYrUnZWuHAJCK6VdhtKauWfLiqYMbvH9bDjp8M4i6tGwbyZ9K4XhU71L5a6D5ntkjAW9w6KGmMKqf2CTZ",
  "key19": "hkUsdsJhQeYeffzTdGoigMYnfcFHPo9eWEYS5BtK6n3rWcv1rjFMz6bdSv4sbXWcynRDTfWM1AKQKsZmQEqu2Qt",
  "key20": "2L7FqbmXCd3bGm7KRYpcR6gNn4LkTbHM9iA6UhE4P9XgNXMifogR4ytfu2GJutEs7q4Beb1FfQRf13cXjg3TgGVg",
  "key21": "5nNpbKXNDwdKmzmPckbpZqqdi97yAMi8FqkCoBV43T19bSNRa5vSeAXMrwV3SVznnfSX6jgaD6remNwwghu8Wt2A",
  "key22": "2sQtpRLNbw8FdMyicpaBy9ZVvDDLehpZuPQ5CdF28gNWnLAadWdYAyCCtQDqJdGny5TB5KWncmHHs5TFVKjhbNJH",
  "key23": "5R4PW91mFzaQnKXCRRYQZNv65WvhVWEtHNupWQ5ATEyt2BUrNf9fQAXX4qtHUoMch7nZJGKFdFRDYpxmQ1edKdzF",
  "key24": "62AJ7gvhbZ7KpWtH22UcVtVx4bDDhQixfqaaW3WmAZvVu16VHtf31KRePPsJusa6eHbfhR61L1ggR8uarqGGvG3V",
  "key25": "3LZ9Vg2obg7DUZsPgZtqspnQv46TYnAPTkhm9i9g5JAHCvCbwbhn53ZgpSj1iEQYX5NsA4xvnujntAFiB4EgGrAf",
  "key26": "5GheWudaSikdMpRR5M9nYjVThDWBzVi9noLJqruSyFz1KopWCttYDvgd7odYdiun7BvyfZQQqGFgJi75kFJYXiBh",
  "key27": "574JyFij7CLrRt2bxQk6dbhBpLFZF3gk3kteorXgz1CirG1r96KNQugSYfKKDALBRrj3yuanUwWPVwosMyyRh8q1",
  "key28": "6jXpBkLbN2HeswPeHZHyn1K1r2BMZuN7fibmkumTBcxZvSq5enzkfBBoxwud8EVAie4b7Cidy79HAwsAPayepDq",
  "key29": "gvKwMoRMnfutr854Zctti1bvafAAmvpK4r8qSKnuG8Q4bcnM5JgdSnyXWGxkXA1EdYXMvwss9tya5ULsZM5jMDT",
  "key30": "2u2GitJeAjmESQTNvJGEcyddEgBepbtBs8q4JLjtMqqwangR7qqQmBa98SamDof75n1HAipAPNB3qi6oZNru5Lan",
  "key31": "3uQoiFnuG52VeQX287cBNW2Rn212D86Wm1T2dxUVPMx23LAEa7nQo1gokYxFyQ8aC6tQmtmNBTm1FRaCAktWsBVa",
  "key32": "3JxcWv5GTZ2hnLw9HKJd4hYtmkjnw1ViGQ8mW5uW7aEgv8mXPFBnafc4NZuahUjpvpjNr8rjqik9hxCuxjW3NUif",
  "key33": "4e6oeNAnsCN8NWxEiMeSx8cV6Ak5TH5q99NRyGvntq69kq9ZY2hdUcAzfc6em2LMgm7oqRsYMw6FTnsybGMNNxvW",
  "key34": "3gUH7jZApyk88jR6AyxH9MKAx3pCPrWk3mnW5jGAT5hNNvQYyfpcuGq6QCBRxZ63qKMqRLCA8aKBRBQpmbXDCHNe",
  "key35": "5tcWWBbx2pucpLviQTS2PBnUxfauhPdskD3CpywydU8Jnv3Km6g7sNpyDKBQLYukkugrZLQHbVmNk6ozoHshSLys",
  "key36": "D1nGt7kPbEVb146TitbubmNoPcpXznmu5AmpUh12WGxxe2ayXWtMvzTTCmADwHBx7Uwk1RZmCCApM1KqE5iGwD9",
  "key37": "5fkxmQoKX4daUomgdzhwBtj6oyn6coMSzd1S1aZGMV5V4EaS4AcYATexqpN3YmJg6dD6zJ86gCVTyiYiPUnqBh5k",
  "key38": "59jAbnjo4wYeJHqPNteyYFcL2XmLNqPfoDgux8difMaYHSrHZfwfbYKoN1zJU9cAg9zey5zgo42SVgmWEyhnajrq",
  "key39": "438wDWQJ2KQNT82J5EGCYgL8dodnGT7XgB1DDvmo8K92FfSNCZqYR1mQKirAapn9ufmwwwtjy7Avbwv5ArzGTzDB",
  "key40": "4mwVLfCZ9WjRwe7W9rTWPZhuEYcdo8gF4YDphCZgZxVRXEr5JtEPjku1wpkXuHceSRimyAiStTwUKNmV2F2Sy3KL",
  "key41": "3SmKRpnAz4yaC5CknmfJsEjNwtuEcaXvCv9BVni8CffisBgXFN1NE5TeAZWRwSSbBBRtx5K6A1KFR2fcgTBrNACh",
  "key42": "n9U3qARzCGnXss1WWT9iZaBotAD3fBqQ9BAq1uwwftGmitbxNXNgrh5wFnLbBdxF21Nd2F9V529LwpTthCGx4nF",
  "key43": "bykdXwninJxLLrTxmQEziTjQNJDWZ1Xq29afMeYnQZqeZsfKpVyZaYcKXb7WDR4u9XqpLDwTLVt1RmJG3kCQQmT",
  "key44": "2wVyNTRqqwCrz4pPuJvB8KoewkTus8RDS7oBR37ypxaaPKYgrM1uA8wPRtEGgX9CKqpexawHDL6xtXfXUG1X4hph",
  "key45": "21rXDw18vdM2ty45i4DXyQX6GEJD9iyV6fe42Qt4AG7Wr86secJgp2yZ39f8k7nmQ8vbpYfD8bqTzG9BqnaEbWxK",
  "key46": "4qoXRnkqoef7Y21bssqcLj6Vg2AHsDtngqaeDALvt7efq1NwQsgusFoe5o2PYL9dSc9YnqrkDpUbE8f3Tc1PpJV",
  "key47": "3F31k6ohxNwHnhrZNVkTNMRMfhPtKPx4jSrnBL1Nr5zs5urvxiYehJC1SxobjeC4SJLPUUGrVDDGtxiDHVVJzjms",
  "key48": "4xad3FQ222GjwpsFkTNL6Wiqa3RnE3qc5x7VEMLQuFRa8QPcw3iNWGTWzmSjozzFcgcqybPPzio79rhW21r6eMPo"
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
