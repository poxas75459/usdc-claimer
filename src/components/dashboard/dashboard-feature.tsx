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
    "4qrVwfBpwoS7h74o3ppb4uaVwtMPVQNt1i4YVsZVMJtdMzfcimi8CHpDbJULzaGcE6D3SgQed3Tsxrj2zTvnznVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hZQtbnr58WN2SxRoTLdqkJeepNY98D785K12u72q7QcH8fE2AATTyz49JUa4SraQdFyhSDhj4CTKzGmEd12ZmFm",
  "key1": "2SgJEAH74tNnjhPkp3gRxRPjckmCznfNTtfZppMjBBRYWG9J9A3cuGMKXwVfKV9TtfLaWyLPsGPSYyjwwx7UZgE1",
  "key2": "3EVZddqp5bDYHjoSH2UCCGmq1Vvzom5qKLBSRBdMd1iWuZdo7TkexXoMP5WHU1mk7R6eSRSqDTCuPipdTpezAtoV",
  "key3": "Jg2h3PW3ikg8Z1NHkr5TS2b9EGt6RY1EW4MjxccnzSGmRKar3Bvoqm8fQ4CZJ5LWudg7C6biLLwb9o4ycs7EhLp",
  "key4": "36qcGpCv6u4yQbYzVLZk3ZPM2vm85juD2nJovmbc8RpFK9w583SrVQRZcXBs6SQpH9aAf8KVBP4vNmui1NdD1KP",
  "key5": "3b16MaXkQaGmndYNcPTbuaqdvCtbmSu8Kq6B35HpxGxNuR54pmSGR6kNPmqXmEraxCV4DpfqxNXfz6KHXtLRBEJJ",
  "key6": "235dLkDeKBhebv6P7isAUXKT1ZgYeAwcKhwv1zsF9g1bG3bdWEkZ4h3yeKHp42XeTgw8zBf3n2mMHUD4diLioLL5",
  "key7": "3DAKKhzqyENpyDnqbKM2LvGgVgTX4KU7cbfw8s6pPxLozccjwyT24bxgzSQgr4HkYU8bwYoXWyFyWhzkKmqoCiVx",
  "key8": "31fN25GxEVn1P59jyHgFubP46oZUqvUCSEkbchyarza46ZQqYsexaSW2sz4XHmVwvGBKm792m4aR5HnGDcrjqHM8",
  "key9": "hX2t2CthTW7SHU4wWwTVbLBf2axMt1t4TJp3GmRB2LS4MG3wjhpJ3xB1RkEiVFCGUcwsg2EhPSPe1RJUJ9JtWf9",
  "key10": "5TJ7cDg3muh58ALgbi4E2MboGj5mvkYa2Pna39vXLAEVvHZrepBf5UZGiguKFaCAn8uBJWHvW5C6BHYqvfw8oB7N",
  "key11": "8Wahdm18wH1doKsyQ3WuVDc4gNaAmrZ8Gy1EMnvXKpWg1WYYB2sq1pkPoM5JtG1N3AHzza1DFjY4qTpCEFTxvnz",
  "key12": "47NLhZXbgX5TzaxgKDL6hCX2v4sWLn8M2rTzvKKCfK22JrkGPHTxxuGvDDp8TrmTSE7x2AUpVHLXSPEw5DkFJTsE",
  "key13": "5pKVqM2tF87LhzNZvd3Rn9yimhqHog5aAKhRfM8Vft3qje27ryNxLB3uZsSuMeKbhidDvgn8YDzn4YqKL6wFqp2G",
  "key14": "MEp88xY2KovPKQwXhVaD2SZjnzC7Kp1SvUF79Y21BJUB9yF2LupXdYyjRcstXD77tYF5TzpwCSF3RiYGsGfN8Rx",
  "key15": "3riHdrzP3U5iPGReC8wCaHkV3G9hiDAW8Wo2uort3Ex1RaUajCAMceomG5rjbzhJHTNFhTk8yByJoWTaQ5uLmF1T",
  "key16": "5vaAVhaMyfmnroH2mU9Zt7HDWPZUBhYV4Z7Htz2QCsPcZxVsaUJeb9hRBcA5bgpy7zFHgMYEJR53CFjSs4YbLEPG",
  "key17": "2SFkFGKFgHhShKHhKSCPWZ734GWqQ6jkmrNmJVFdJcaHdtyA9vYgnB1ZRReAfBDenDmSbfzbxM3FeopFshwMKtYf",
  "key18": "5xifMmV8f1H5zEfFjRtL96fy6rZoXWikS1fJndEHBUZLkiFwakQCd7oqJvDFaem8Kk2yKch55CRnnTE8HmSvj9GD",
  "key19": "2NrH1YEHynAHBBiMLqEmuRhVMhzkC8zRJsHW2VxC6kpFmKWuCDAjb7XYzNZNy5riSgd9N7gpYfPrkCeVHVmAygYS",
  "key20": "wJMn4GkzgMaZ7Yo2GdwqV7xU2iZadqnuAX3pZKatmDb3YgRVNgbCLzuAqj6guSgdoBLM3c4tEsbuh4ozfRaTUjv",
  "key21": "3rp1d6dSx2CRT3ti6k2od23Kcps58mFug2rs5q6CKU353xLAGHLg7JXLGMZWid1Po2mh6w1oqMrDA8CcpKy3KVfV",
  "key22": "YmbgKQoFRiUX3mT4txdVjwVnG6eaJcUZtbjZungXfsVFX6HCdmV1tqVaGKtkjDsqYYC11jndeYxHdyHowepaFcq",
  "key23": "38bby6USKLg1B4nhPN71pc3SRfh1pwxzDUqWrNxV9m7BynF3uMqs57jLrNm2fLNUwuw9mKvNiSfXZBwbGW2Zto5S",
  "key24": "3z3c5fh7aKHTFXS5uB1MPH57nKSFUSJ1i7QWmyBWr2afd1ts2rjroX7NvJ7seMW5XkU2j4QqVxHQG6AQCPQkR576",
  "key25": "5oJMHNfmz4Thtd986rq2mf2qPs5tDuo7vxhKEB1EvmgKkUVpEYnuAi7js48kQxDfbf3WD86kgoV63R2XgczmgW5B",
  "key26": "6VGodttUwPeWFPwqPkmVqLdLE6xjU1eivH1icYPsm1Xc4Ej7WHx4JUL2mqyUNT8155hMYmEwQjGBhoJGPfPZzpy",
  "key27": "UPELV52ScRcd54DKg6n7juRSjfa2vs4pyE45hBgL5QQwccpvtd85hfrYbb2rRykSKkHV3jeHiBZ4xRLF3gG2NgW",
  "key28": "64ZhLkrrXQeipNpiTAi9s13HNaAxMkABGc7ED23QHru8j74xX4SPdRrwh8mjGhnydH5qCAAbdWBycdybK15WQJ6C",
  "key29": "2tKdLmEEj5QNLbRHyj6cVvfuJiLP5tK9yiMHMucPNL9DsbzXGDrr8N1NYGB568YsuyePV3KkLEmDBBWTCn7xj234",
  "key30": "rUQnu5M4LvPN7wVy7a2JSdUujDG8gxdFSKHTbGN8wrdM1Ecn4PAwVf5WYd8CadK7AENQcAXARNDJykC5Uo4mZLs",
  "key31": "46fEMos5Fqvsbx2DRqtynUP68xihjH34snFUd6ASkLtvSLT7WH4bFHjT6DrpkH1pqWBxUe6z46qWFVj9XftiRmeo"
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
