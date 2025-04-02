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
    "4sqhTTNcVPaSPnuSesJDbGeWq9rGKZgZ5kLHtKprsbCagvE5TDVyn617mETNChdREX3Y4zrY2kZqDWwFJTApFibT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JaryqSkcqgSszLv3xthHmBm3uudvfH2Cvgu4riFVzw3Xt8nr1dFwcnJy7h6ea6vvxg7F5HxgimNF4Mf6vPo9TCo",
  "key1": "2AFBj8ozV6nsuJVxaLKWrWQHSeNBKmHcGTxBbWsRvthSovAj7Y6AJhKF164Qxwo2YHsM5HM4tmvj2P1uZMizPsfS",
  "key2": "4ToYVr2cjrU8uz8Sw1GVStsLFj8VfK8CtWQGXroKW2SJG28mcc5VDhLcT7wUURKxJJS2JoJ17T1NeQTg1oEkTx6k",
  "key3": "gHjtHuX9efryN4ZNjDxsgHbVAtob13jVmGZtw1Uudvv2o6jmrtaVpFrszhS97PnP5WGJ6dk4feMraSHUXrn9WfL",
  "key4": "5WQh2ikpsgnkRrE1ANvZMhUtvjvuBdbPXw6k7YurhXeiTCWGtkm5Dpzrs3Jsa65ongYshyZftx93Q7bZPA7VkJVY",
  "key5": "2gpKA2spNGbRHKUZmWCQH7SmgspoEYAuZJbW72cDt6SiTEiJHDqn1nzDwW9ZuKey3RGv3e79ASrVGxmn8s6SHJBg",
  "key6": "3NEpP5rggi4vEkvkQNk5g4CpRRZ9oUXurZ2svphKyjE7xUngFCkJ7ZjoixDqvRpfNcmkRV5rJincM1EjkKJZtkAy",
  "key7": "5U8pYC1cVpdY21dq3Z28R9VEJvNBC8bfZGUAccVCHWmXWXEQoVzzHUUiQesBfGgqUopc6GBeGvKUq21zGLJh44FC",
  "key8": "5MhSNB5kP9dcfdQzoZMSr73hxJZdBevuS37pFDHyjcfYnuvtn8xYXstZaTtDmjun1X82taWHuUgHRDKyKNpk77z6",
  "key9": "4oM5DBt6GB4huj7vuc8jAt4S7czwMMUQG6DfdxsWVxNiDquVBjMUJ5Q1oE8feLLxeuCBuobQU2MEjjF1W6uPLCXR",
  "key10": "coQDSaZoYm8216nC9QNnnzwKzuLzfQZzCmk246RSiB8PcwYqGdspud6NfCuuW1AH6rdhYnhii143GDouHFuZks5",
  "key11": "4v5xQCkR5PbvMDqAtF8d2MNyGjaYigS85z4AzZL8Pk8JXtvMFFDfNe5Ffb8jvWgUKNTeyxhexnXTGEWpPo5bxQAe",
  "key12": "2zFqD6sUALBqug2xVXmSPGVX1eEdgNARoJiqSJ7byu7h8vRZjxnv5ZoaMQDJb9KFR187LBRyevMkn4c2HtdAQk1Z",
  "key13": "4iNE8VYi45zbc9jCTfCHZEovtqyMr3SnWR9nTkrnDL7Wg8Xtobkm9gGu1aNSMnmyhoznMXQhhAHMLsgGPPNA3rNT",
  "key14": "66bw17z9sBCcQhm7BqkyU4vVSFC4zkdFaZ9SkfsYmhCj9Ro6xa6s9DzgCZ24oCjzJ2evxsm9FTq1yGXM87xzzn6T",
  "key15": "2wLU3Vzva2cFh5f3nU1nJhxTPiDpJceP96pJ2tpnFNU6c8Lk6LRwF32PyMRrM1AG3ShfH3tstKrnrn2q7FRou3Jd",
  "key16": "2y7rCsZp9LpngnMhR1Fk4uUanrC6LP7n2MA5aSsLK5Y4BK5mAREN3TQbJ9wgkxPzAQSkharVt63Wr2UeWvc1bfwc",
  "key17": "2yn6kDWYizyi2T91uLbxRAwiiSLQNoprfBYvDTyhykHbzCCUPid4fkXTbTx1pZB5YwPWFmiXfthU8A5HRMqL37Pq",
  "key18": "3KVdN62oGmkQeaxphsqDY2h6C4g5Tkp4sE2vmaVLjgYx5y9e48a5nG9EphNbqc2TiKpANGcMDctqBeYETJTdjCpz",
  "key19": "aKz1epCx4E27sjgiixcncFhnFyXBWDgbTN8Qm5CA29QgzAeds3DpBm4s7vAtTPuBzYWBvLxHSGMBaGcYiPQeJoT",
  "key20": "2GHADBbV7mEraEN2R6WmrENgTgBM2mZjvz42S7HH828aC7fFLtXKNtS4J4Hkoyrfhd1hN42bRt5hGxUSBwUQHaAH",
  "key21": "5CnY49aHcnRwAvMJf1RYCbEuZ4CbwFNXK4pZJrptbw9zyWBRwfrLg2DXibAZHjra4z389tqYTATUarTJMFsdKp9k",
  "key22": "48dQHp296rtx2qd2Q7pRe6Vuy2cZY8vFCHvAT16PeKpax94zLQnGxix8koZn3BJo8UMrYo31PKvo8UTVCRLBGNXd",
  "key23": "vRN5Yq65LURwreDfKxgGE9ZDdgDcSPeHATzrkEJwC8S7AHXJtya2U55zopqgejfEH5pFbEidbb8doQJs2THpxCi",
  "key24": "3FFzhcocmKiakW1Fe3dQPS9ETeVWmtozTYkgwFp8N9ZeQHSvJdELqzaoBjthJ9pLZGMMZawsKpxgDHmZcnVo23ta",
  "key25": "5Tq1ttTEB9oKDVgYwRmpH34kCJWRquHfNBVrHRiE4NWktRBnnUnKNoarh8kP2rV1hLcAENZTEQhhKCpGzUHaHWRF",
  "key26": "4BvJGn4E3M8DFZTbDBJZdySrTrJcyCt186yoig6gNeGh3jwKVrNgYvrhPWKFtLfSs7D87hNcAv7x2D5C2xUzsv6Z"
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
