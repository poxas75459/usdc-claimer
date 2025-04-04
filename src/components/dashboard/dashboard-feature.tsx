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
    "q2VZVosDDYgrhVx5KgMpDDdSh9e567EC2hVUDwPmiHDzrbth68VdrEbDievvSjLCZvKRW4YEufuV887tq3VSyZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ktKUcWQqiDPuRDQjowFVnjwZjJmRyzDVxvnoUKU1xMAPY6eYrHqdURfBWCjtVGm6gHcm4tvhpyNHW7CjYYqSe9n",
  "key1": "3uXxGHfK4xqvdeLzAoFQuMwQRRg9JDr2diUToy1f7AmKQwPXonHSBbALXESNeDp7sbgEnkfE61sJ93YKjaH7Hsez",
  "key2": "4BTua5vbDafLvXPKCQh6aEydiSNdLDAgsHdUUtvMEsM27yFzvN1NYrqGNpZWm2nBsCVWoZw18GmpeuDqM9Ucuhyz",
  "key3": "zSiaxsvBX9Aiz9S98yejUxjhSoqtCqCHk3EnrjKhXboxoNKrWjWqDuWoFGUmWTvGAMmB7n58edLnz58sn2LyY2J",
  "key4": "3NUHhA2oSrN8BX3iYTyFDSByp6YKLJT8LmDc4MDDBFEiGFUaKUZ6TsazQBWoDdPRw7CLk79YgqZxLVRVhikZDh8y",
  "key5": "2jSaQwK5NJVhT8rWxJRAQ9Hoa3fKtBZzfRvwytUW8t7WpxZRRcQ21w6zfMj6EWdPEH98qPCUiYEgrkMpnw7UXAxD",
  "key6": "5WtD2JB38ZrZiUbjxMaUsRcWKQVEEbsoPHuUyQcdZHBjnCDWW7f6tabGhH9ikghavxcZ8CdkaqsVbMy3muhhF1PZ",
  "key7": "wMk2E8jnrC6WZDdompwDjE1D8JSkEUkuv1x9HjikunMtJ1qKaqQCo9xwcsDSZKTF9GeXRzyKND6Jr8wYf6kxedk",
  "key8": "2fPtMqpfZFgiircd4kJP5moQ6svFocAPoZMJrMdeCxeF2kW2hHjjFTPFRDsLsvrBCTYDkSzrvYtwkct1RgP1DxDP",
  "key9": "5rUwVQ9AKhEeJyowMPVeQmVr4a2FC5csJrEaznwtiwTSNkgANjz6TpaVyAPveEnpS9x6yBpYMufTbUQiAFSLdwkC",
  "key10": "5ZT8pqQToJNZAbUGpcZNBZzqs41aTtuj8VEHVBc3RumabMGDbRKvrY5TpwmYrTcf1iWVJBSpepMknFwK8gZEKpfe",
  "key11": "5G7aKB3snXZwacySounk5PzaBhAs7D6BHLJUjuCnpw3mSwfVFXVSNfdQwSd1cuxcbRmguG8FjsK2nBd31aQnvqY4",
  "key12": "2cXQ8QUQyjhFiJTMfWJRJh186DF6eSLeGQrmP1Pg5jqHPCN89nWMpAE1RANgNL2EqwD5xhSv4Qd7jjiAvRgyGHwg",
  "key13": "3eYFcQJvhWgNZzX1qPjy7LPFUzrrThUUWoPdzAFRizJLa9YNGkFtqJWpVpH8u1f7XfPEKXv9K7vQ8Wwee9GZqkBf",
  "key14": "2kVt3b1gwT3YhMqHjoXNw8hGng1nR1WwdgRxEGEtVngd1PZ4DuqARsDHHdnx3FGeEPNC5PppujfiwE1obCg7UqE6",
  "key15": "2C2qsvqnVLTPnASkhQcbhxZS8KxGa9pxPQgNV1VNwTcdVzWwGhYUyjwu1vfb2zuzx79TSp1gnwxbcH2AhpwWs3Yh",
  "key16": "p83ov6t1CwSSsZxaBmqQrmpYaUKkUWDhBX36nKhEzfaDMpLyCBf4Ups6B3oYRLhiARkPxtwfLCjhMqf7Xm3XawY",
  "key17": "4D3wGM4nbL4P4LLQaV911ZMzeg96QBcmg9y6zpGWUxPR6QKS8xh8sw34WASLEqZvNFmJ5k36pg9dpSEK8tF4zhqQ",
  "key18": "582tEgnkfSUPtQsZ3875nkDxykiBqzUQtRsNF1qPV6YhEnfN7c2XxNgFMgAzSGGnUV2BaL529tV9De2THjecbr3L",
  "key19": "5HLW99P3M4rUfxFLvSbP1q2CdeE2gB8WSTYFpfFFCKuJ5NpNDQL3w6hkTy7gs85FTMautHD1zpzqcC1jpMQ5RHGf",
  "key20": "5uBJ6nQgPxgg4Xw96UmSvhUr5gsTsbCSStRBaJBspCq6tJFgdPzxKhr9pFRTubyPcCTaPPoXvGQb3V6Rxya7hMgx",
  "key21": "5XmtQQppCL6rwUGwfi2nuSEDTj5p2i1Zg898Q2EKnwFi65ee2D2CW4D9bfNdkKiaeAWWoN5U1kFLeNDMbnfwNYzw",
  "key22": "3e7xJLPWABzyXCR473rFiqffdYK92Yn82jeJu4zV2Jsov1HN5TnwV17YugfLzf8W6PFeHT2USse7dgy8eW8KHS8d",
  "key23": "5cmupnWvJcN5K2cLAEShskaCpe3rmpgqWaEYXYazhze9FmoS2dfBXghtLGnMxeUPrLDq3QZ7WWnLdx2hNdXnySdA",
  "key24": "5KScBoJciZnoezWQ5yW4AR34gB95pQHZD5zHkA36H4JjAQT3XBVHA4N9Krwyn1rpE6Es6z4MioiQbHjCcYdnGMjP",
  "key25": "5QtFePwrqBjwjWviRY8wm4WgeNoGTS9LQn5SYgtMoSQKsnBZoNJ4f8uEfuwFYrSzpE8UUjgTU7LFpSQHkZmnuWaD",
  "key26": "3SHTUxh56MkByPL8mTgt2cQ98kA1wxiFKuRmtnZy9uz5s9LgQ7QZUdJsHnRwqDyfrHh9mVXYJ9qrLEpT2Tdxena1",
  "key27": "3EiYd7kcrDCUNjUXZ1FVsZ7Doo1bwHcyZ9mdEBLomNa8Mo9CKoy4p2cMvnM7S8Xx98G1bpx59A7bQnowTXX1cSCT",
  "key28": "ip4VqnzwvyTVyticZVGL6eedHpkgjtVkboTPwueLFCJcdd9PE6CoegfM1qHW8vqf5k153CXp2yARFGcVhpbHNm8",
  "key29": "5RvU39ns66mhDNutMDGkCtKUaWnyHRHN6RjvNZknWLdyT8ArHbDWYisZ1akN67n8Lq7PdVgxC1RJTAEVFBXeVUUu",
  "key30": "2KweF4meWoTsSYxpahtCunQfLnhqgSikrQWz5Vz4tWhKZZQewxxq4utqZ1DHQ5pah3XdBmkTFuLq1xgQrpfun1X4",
  "key31": "3xjYsNhcJcKnykr2mXWeAdymzQwXS3SStbW1AAQgUUuHe4cxcFqEKrR3tre41xnBZMYtSFAi7Qu1E1DKibGDWTat",
  "key32": "5mCaxgbvRZFfUiDyRPsd1YURnj21PfzjUDULRLH7SNUuUbtkgjgmfSpEd7htK5C9tiXowtRUTcsWdgCh8ccLAcHd",
  "key33": "3nePwQRT4kWbCCRcGW3SZ48BmHjsSD8Goc65KBcyRyQBVgumECwdmmfbcq94J18xKAxTbnWRCdav8hfhW86yDrDk",
  "key34": "ZEtC2PKDD96cQQhkdJCWG6y5zFK2sCwMxveoN4PLd482f4Nj3F4VPCi8yqfJ29tbSd6AJbiQL2fH2XM2NCtPv9d",
  "key35": "Guv3pUnpj7SeEGeakCnRnZXkYxkg88QtR5rDn7WQhrsEN1djxhtN4QhspHVb7inYF8MRMXcnCjYuuzwMbnL5971",
  "key36": "3gXUPjQwGxrXq7qKJLRAktfUq57MERxz4gHEmxKWMdo9KqLpAtqHh256rEe51zLJvtRcCQdRjdUzcLhuS2q6bJUZ",
  "key37": "PSczN7dmxsa7qHMfM4QhB6EDo8Vr5NkYLCYBB2QixzoLvFmkLXQ9HLeeJCjG1MCJXnom5J8GtCf6CYdhCc43M4L",
  "key38": "4iNVXFrMw1UZk32e71uau3axLqhDfALJihtP7tueUuhnVh76NpXtpxRUVNnQgewHdM2x35ucLQrzo6o3Uhq6Be3M",
  "key39": "3Rkjt52YEKkZqwPvrZvKTSzMqksc1BPPHCKz3QFi3mhLucgUpYtdqJoeWs8PnsV3nWTLsfwDRXQzr7b4xKreCg6T",
  "key40": "4zKABWAD4kDwKsUuWS1ozgqEDRtT7ZpBMPqKW3jvmiLY4gjjvQymAXo5U6mT6APEmSM8jhGtgnVGLLQ4Ej6pGt9D"
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
