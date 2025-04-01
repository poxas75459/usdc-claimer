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
    "NBTor3bYaN56v9YiwHBvRV2czgEvg7pjJ9kq78eZTkhXzxn4V4zYSXQxTV8x5dFH7xqJLGi3rd2XuKTvtJ3wNyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybEKCPXw6wrfucX1Wcs8rXfR2j188R9shrZFw8gjD42HqJWMD31MyRFGfmqpAoWrEEPqKaMTS5HbngCoG23wN7B",
  "key1": "CUkeKZTg5KjiGyBT5fTt1qLvzm2S46ZQE1ASK2y86kk4tDJkjtxwWdYrhEWEydvjw8ffZmCvYLs6HAr4X5ZHE3h",
  "key2": "5aj37mv6RgnjAbVgEdcarxthvziwcA5jHj6DoNgR7aETkCuUHy9AP5Y8zb7poqrJh6PWTKecQ2WDR2h5jRkzM4fP",
  "key3": "ob5VaNAsLGALuymj7q7irTTTvDJppjzoqqDpg7rU4FUrndb7VSGfiGFuD5eBDbR1DrZ4kb6A79F68TTryHDfggp",
  "key4": "2nuycNBSCwhfq5xhcKUsicqMVQ4ZR11nXz5W8AP2ZgoXyfvhxTQVm5D6FaEPKrhMYd6qawyV4vLnXgrUC6Q7QS8v",
  "key5": "28wAw8JSnGNjfywfSJ5jiyDkmPGemsFFU2Q6CurL13yto7svnFvU1KDkhq81Q6FfyCQWxa41u5Vogra3LL4ooQax",
  "key6": "4SGJcFK9EhbUdfJZyhRLLM2ysiGXLeN7fxrpx7yCr1WDkAfLkLTbUL2uyk4GFyEpfhJuWbQJ8z6mA8QzxjDb8uw8",
  "key7": "ysViKzykd2QgNUQhjvF5cqLJhwbRymMuL4GtNvwzh8c7kfn6zCfTzFwE6ZqSsL1bFc9uFnfWCJxBADTa8XVF3Pk",
  "key8": "2RdyaKBNzFKYMFPL9Absyw9nb2EYVdgpescGzrfz54wbsaBWjAk22ruygRtQmKLwe2Cs9XJJNhnt3uRhxhTqmhQr",
  "key9": "4c61TViqVRUuhgUBZ1kPyfJVAAmVAuSxKE2d38atWaZj2jYFTcmMf1wTvfbGBr3RL6fsRBoDV8vAKhWvRbRwPWK2",
  "key10": "3ghjpWgURm3GtvZrZ3hREcxhaaovAMdvJ4QdVTTALH1jKEcP6Lkj31urepevVzXq3VgbRcyc4qX1JA9dtEaNoSrp",
  "key11": "9g9Rq1mVZhgu8U848sFJDAQLvAKHEq8MbqKB9Yn1c74Hahru8iBkyP5gzgh9q8xJ6QDPCCP8rJLMWwjbxVxxBXW",
  "key12": "34ctHk3TfvJL7aVJ9GgRA6xN1TGEs2k5tu6qc5oq14KYiCrH4xqLMf6VJcCC8TqtqdTrKoXhysD1HmjfdudYAMTi",
  "key13": "49yUdfvBUDp6ZEpC9Bb1jJeaE6JLmx8vtoP2wkmDFBu5qucVigWz1DsywvogDEz8QvtyyvmBTsA85PG2ycLbQHrL",
  "key14": "5JKFyRPeQmd7Bv71B6FSpNjvhar5s5zs6G5y85LqTH3LLsfMYnsZjQw6VSQpxS8o4ybzCqNLVRvhjzts7zDRpyzY",
  "key15": "EbuEAwDgwgoaApiCfwQgnDQjL5jpBwFvi6BVx6nJkZhKUqXWtZdX6YaewUwe3MXMQfWvEA8bh5yWL5aJgdqgBYg",
  "key16": "2MetncTzByRYpLWCJjbdwR2TEoo7H3aFQDrg16EAQqHucRuCZPbaLMrXc34kQyT6xYpvv3RaP6koktp2Brm9vf9E",
  "key17": "2j7BL85CGgyEoFqR31Nd61TFytk5SfqpwG8cL5K7xwgVmzEkWKXTZE6KuUTXD5RpVXhF2dR92P7L3JYcmow73vg8",
  "key18": "4QnPwRLwUuFsJVT2KZjZsHnquiKidn7ocpoxBrHtstBQU6tLrgA5mrHNZF1vuVKux8Au41cVDwYoSZw9C7s6pm63",
  "key19": "2Uwuh4eFk8udjhvLte71oTdp75CvTCAr8dJkZy6pFdnWoUALPRitDHdrfDwryQ1TgWLmf4aZiGKafhBsXhht23tM",
  "key20": "49wu7A3UP91bf8Jbz9DH6JcnuAYcKymGpbWn2oWszR3dUxuVzMfGe5Git93QBVo6Nq2vmqS5Ca3uDB9mRooDQRHe",
  "key21": "b7yZf8aWp7EYFczb2c3dRe8ARP6xRj5UTyg3z3NXSvCAuBqWSQKKyp1RURigzJWFfDGsr2wP3Tn1MY9SYUEhhYP",
  "key22": "2exMjNtxNozVPXNjTWsyFtqXorMKitvpAvk7E2CrEkjx6V1j2AU86vRVd8GZsQCZCTbS82izXdujzBh3EZZaGdB4",
  "key23": "3rwNpbnnh2q7dMt4XvryHKGsTJKUwUT2uPCvZbh3gh8mgkQuNr3WeyDN3WkvAHyCk86GfgcPmuPuZkrbXJM587om",
  "key24": "4qh2Jo7PJEbjNVuZWRykMHDiqA8LU3ARYkQJeENnuzaABo9U8852GZdtAzcs8BwQnETLQQPvrJ7Xhd69RMPiL6ym",
  "key25": "58HhQYjydxWBptqDNf3M2j3ntR4EmSxw7bfdb2UrUa75LDUbcWDVCqSMj5BkkMM41VZgZzit3iNobsUtb67bvYoz"
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
