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
    "376gznScNgVhxNaQR4ZhSc5edw7L6cFhA3ugGRy8q76Gt5TUwRWVH3J8MmNBfZaqaUSM9nFyJgXraQbYzMZWuxFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aGNiUB9aQWcPuAUdGbd1Bk4jgPWpMBgttehdEZLFossuQc1TMwWZjj4nFibxpWTUBPLGNx2J2EYmtggKH4VHfqV",
  "key1": "7851xya6LdGPhztMK5fksLJv12FeZAnF4nPbe4m2GFhvQAecCPYH2owcM3J1xeXr5QFuC4bPLPeDW4gBn4FjXA7",
  "key2": "3KeNtwJmRftvXrhNmGKwEEA7TCoYHGMQihqPA7ff4dTveF5W21jdqcqTCRdrcxxjgcL56gPLGLtMmgNRFPVoDxVg",
  "key3": "2zevcWuEHPSwoMi6ytkEp9N3Ugwn3gtCHCXU6m7mpcL8dDpBCJbkFH2cLyGzL21wLf4HgQiqdLNX7rhxv8Aupy5o",
  "key4": "3oUos7HoFijgqR5xk6Li1NqBus7n3jU7pTgBRjBHfgNDt6pDzp51KLgjdGRmwGCnAGY144jwhFPdf8BLx2qhZWZN",
  "key5": "2U1Z5cGk65y8GhhT4fC2uy3ogUjW1WxV2TXDi8npLt1WfctFJwSUSamxQUiDbH7KH8NJEk1pTkY1ZNEXdCUH5fmb",
  "key6": "2ss17c1W5rHwQja3U3VEbiBCd62F8w2edmK3HtxVcgZAoscA9LnwheeWog2gw8QhDtBJy1BCqgF2NuzaN8XzWVFL",
  "key7": "MZfhQfwJJN7UgkCdVPcHFqfX6KZez56XRtP5LkCXah3jPkhpZBi7TWy4p4pKcaKWWhVD6pLcDBxLbu51h7RRecK",
  "key8": "2XF4jpYRsBoiyXubYycpD2XvgMxdP6XTfi4M8JaDpeRahJRWpB4k6NPMTiNYmDu3TE4nE7dfELYnUzUuwYZp9gEe",
  "key9": "4AMNVZukqpTFStnbjx2Lm2xi7xGaEs5MFXpTJdQPFw5Cw5gAYMKoG7inM6TC5tygCYD4k7RLzAX7nXreiQYYLz6M",
  "key10": "3KT4pCMMAb29XU2WGd7JTW6aCJdS7TZGyJU9uA8oz5TNYsvdkrdavDckoEshGPEq9PAcyNGwxzxMSpJV1YmxbraW",
  "key11": "3QZ8pKYhH8dmm8HPZDqB5rphhN3xCPycwb9kU24s5doqaqTwRA1QLV9XymMVvqxopTYKXcwyi73YjnTHEb55Zp6k",
  "key12": "uVPmDqesBE59faEk2uUiD4pGRSTib2uDLx5fvn5JrocMdm42t4uieR8t1hsW3qFPebQHN1koM4vxQjaHMPZFEgd",
  "key13": "5L4MCyCupCHAypyf2VP6gKBV4TyRDezYJE5uahzJEyASNYQyzbhoWxdLyWd3h6x59XFePhNiDDv5HZXqcK8H1xw3",
  "key14": "33ug4zrwTeayGrZmQu77bre5mzoa3SgHKPUhkFi3pn8xhTbNDbLt5WBBmHG4DY3ztLq8rm5Tu6VixhjAzawTLZpT",
  "key15": "3bMtxCF3ExBHboKCDEL1MgbawFbHkqG2ePEZ3LYMvrzNGMQxhSs4a5rKYioWAKvosU6f5BxNr59Wypbvk8NimYRs",
  "key16": "3mJEm7E1YvnL1f1yxB4HeEALarqJ3BoNuq12m4Jm3fKE9ALBnswCdSdztVRPiVzBR5nCJX32pfG5QH6PasQrBkLA",
  "key17": "ynh91cTKD5vXes2yUdmQZMcv6CLYcAYQQmjMogQ2Tmdpx9dCV69HqchnNb26bANKeFLE9dLQ5RiSvtoUzrAvnCL",
  "key18": "2UY4npX15ZNkvfxjhtSkfjDf8ZjcXtheNuDmwgCjBjs5cmjGwuKEVLqaCvfkHPLvaA1wgKCeNhEf8wHcKS2kfrt6",
  "key19": "2vZc17Jbo1tLxXn49jmmgL7vj4auqECxaKQsQFB81wg91ZLYn8cVgPuXKDsH7FE45UFsC4kkceReL271RZkwf3zm",
  "key20": "341ZWT9YNVQUuWNenf5ZJhfSLVPm7fgVmwcNBcThXM5JiNgABx92hyjmD32zkdLAn8q6RzsaW3hvGYGipiWs5LNG",
  "key21": "4B3LF1J331ejuiCzQd6CF69esxZyoWVZt85o3pfsVmM7wZz2LQvucHc8S8dqmGaMZu68sTDMUoTWEEDfmpDsqi5P",
  "key22": "3ZMC4FXsYKpYezQPwxgQoYWb1ZstLKB6gN3duDZHUTQYFv5wppmVnAdNuss48W9KyxmY4niGt2EKM5riSafJScNW",
  "key23": "52QYRBXQFvSpYLEjMDzhip3QmBKm5gF5XPyvLBRySFK3ecthJWJGZxn2YvyVrxbZcVUG3RsbbSgHHuuu85ogbLeL",
  "key24": "2ehhSH6yQrjknKo6CFjxDrNLtRRWkTPDV6ck7qmFF6rQaaAKmRNwn7ZRuHnFCCMznx3HZ9oAg5WGbieBuSesAogj"
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
