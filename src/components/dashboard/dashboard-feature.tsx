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
    "5nKQMhVWHZfknrVFozKmEVnbRYLdbHdbrT3E8UUk7BxKzbGoAezb1r6RsE39obDCcNC8zSW7gDawzfpjeYBd25zC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bwpVPXQV9ytz4xD8A3o6gW3wRoLYaY6Soy2CHmS3qZytpXk36zKnAk43bXbh7jraowFMktxRcvdHQifGSJLAm7W",
  "key1": "2cBfGXAKDusWLxYsEBrakw9wMZ1UzZJuRdPsXvf5cEpBVfCJ3wxfNTZrB7Cfa7vbgcpgiDGGJ2zSeAZtBLrPQ8Fx",
  "key2": "3jL7PS4D5R7RsfjEvKHPFw9w3WsrLNw1Lkq5t7L8sr7gmmP1Ljr7E6v2k42HVeqATgfMP56Yb3oVzp8nk5pFvbju",
  "key3": "tGAmLhwQnGuTQB6N1owuGT46PPvgiMRJ13wdS75UNarnjXhARHqoLuwJtJsDU7u9hzxjguECaZxVp4xBVyujsuk",
  "key4": "3Y898URwaZCUdZd3qMhWmCfGbCmFwFLQrZwbgjHPYdXwxPZ9rhEPueA1r5gUZtKe3ADaqEJRhC28uG8Qjq2461no",
  "key5": "t1QvBZJei3EoNdt3LXSmCb4J7hqWmzmj4ueZj2bLwn47m5Pmkk8rnX9aGXmo5QpdhrZZs2jTf4QSG17wVm7QsGd",
  "key6": "MLyXhEfMbJabT8TDDdfAgBEoVFNZpu1e6oDsH3JkyXz1E59H8T1aiQUbda1fTGXj5wckXaDqxJty26xLEHzmuch",
  "key7": "fx6x4TqmsRbetoEGumSME1WfHDfbsHEgjj7Bei984Z17giBsixgpH81Zhk58vauLaB6Pjsy9Y35N6i3Qm9aSKGu",
  "key8": "QXC1Vofc5mbEoVXDhTBxuJ7FihnrHAqqskKRWHiQ5GYJagLo3vqk1dFMM81qg2j9ppMwkYkzDuUFJFJfNpzzwvv",
  "key9": "4E6q8BdACuXbBYLXVDbwzk9SKEXBf7XyAKWvAwWbXvrb1m9n3pVmGc62Vkn9HKx1k8PxRkxKaFCZ1qZzn6fimmtf",
  "key10": "4NMK8SeohDcGw2Z52QH1dFBv85E6sFLqbGpdQPAzCeSLKyb6mdDaNTtpLne9bGUjdEXrGMHEQ3J4H9zKjpkXJFJc",
  "key11": "5VEYwmg8L6DfyqqfTCA5M8JPbPYVv3iUVKsoZS8SBpaEyyNKokAEH5oJsaiTyBE4EYEgUyAqWTLxE4GGhuydw7T9",
  "key12": "BQySUaTa3PEMTqFB7C7YdHXTRfH3y48JTMnemAR3F458wLh1m1whEiGU5gaBVSXvV42oDGi2pUVjmpN2EDLQsjd",
  "key13": "H5RABxUFifgzrSbPzJCkkWHuaHJ2eNsXG5uoeyt276R6wU9bbBQPWZwVuhwP8vLi773sJKGnbdnpfVvUunMb1oB",
  "key14": "JNVTy49HMTfzohXoePvqzxpBs9rjQEobQonMzz1UaEf3FoZjJbesnnrLqpbtJujAD1X22VhykRidzukMgyKe8fN",
  "key15": "5KGQD6aQV4ZyFeQncdWGbVuo9QXzFiJx5C9JRreCEgaQ9qxiiofjQXs4iQmRts1KtVbrGmzfqt5hiqJucdorDCpZ",
  "key16": "5LhGAmyeuNMSC62BK1q9qoeUpdMaQ2s33T9gEgMtCEBH7DLS2KuceMk17J76C1YtTG31TrFXtnzkoi8Pm5XHYDV",
  "key17": "3mdZzSG2mwJEx1AnMd25WyU27BSKvq4BB2LVf43jN3DxvaoX6rBuGHc8ScgkjChkLpzVGuW9nxLgEpKaFU95trMi",
  "key18": "5HkSa2RpnFprgT6RsvC1sqhMar38dXG3QVeju9mTeVZULzep4TQPiS5AE5699ptWm9BFGCwAYmVcnNYanLWYVv66",
  "key19": "4jBTumQM8jNb7A4bY81E5Voa3PMzhC34YRrjAH6YTdchQLNWRLNcXmh47SiuiSBT6WuMyrRBPHbwghTNVfmZvURk",
  "key20": "3zeszvRBnT19me6hbTpxub3U8BzyKVLJKoL8VkPgdJ1QUQzUGcWXcALZ83TXsvrLVKdXXpEkeNR5rxMZs6Laq1fX",
  "key21": "QxtdqS32Njfrfpmwe8yYyaX9gGmoE2t9HpimaYwy683YuuXKvkVzMGJAaMxcLk26jwHzQQJNhpwvSq5t3tEivuu",
  "key22": "428gk7ihrk5qn4k3qyneKQLFBBKMzgeGPnP2QDWuD7TvMTwubYZXck9YZCaVNQMPLBgMgku1aPC41sXMnMR9bfnz",
  "key23": "2Fa64sJpWKBBXYqqD922JZacNWGqZgR4Qr61PVMDcpH6LhpCmSXpESt96EtoghGHCsCewcJ46h9NeHBpCDLhcqZ2",
  "key24": "4HPhi1SHgkHWCQXJBtna8MgroFCCL6Ez4YmKuNDsgU8WmRbawRxbA5B2sVo3Ldke4zbe12JHH5J5zfbZFE11fyU4",
  "key25": "3e45f2ZVfbBnJphJvcXfm3Pw2gxVA2FWczHyKWvEfFFWRK5Nd3EkZQXqPzAEQV1pgF6JZdoWn2FidLoD6RJevwft",
  "key26": "hSvREXBTZ2TMsAs36FVgxvw1jVFjjxWBua9HT7FPZbtqmqpEakaKuXeUcuPWZBy2Y4ZBqoHuqUVjjENz4p3KcjE",
  "key27": "5DCU5N2AXQLZEJVqR9cTk7mGRgvb6vGWbfU3C46pRMvskdJwBj674F9ZMEeX6G6ituzjV9eE1Z2GJBbVPd48Jqor",
  "key28": "3FJAWCik92nH6gWAyMVahjLqdr2tnmK5SqfB25TmjZA6PenD11KJWZJF9tCcKDW4oZCWEyvRhNVKZBp1zpCxdEWu"
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
