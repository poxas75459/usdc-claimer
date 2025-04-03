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
    "aCkFcDGjfVKqn3PwF3pAgXL1Y2S4j64RvwkA3UjoUunbdY6YeU6xsqCqR4t8f759QDPRv21PJsHjfye4rBUVQye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nVSf1fJNPuBi9ckw4WGoQL2htbYEon84zBqNga2x5dRCESNxgfiuRzPaN4AXfMM14UZ14Sgwimy2vVVNQsG4ko1",
  "key1": "3ojj8RqjMGLgCxKSbKxDwdEqXEk49rSC249MraBFUg73wj6PaLcCDGaA5dENqo5LUpdr4LzpDcuHGEE4TDVGBRy9",
  "key2": "4kDCrYgu9pYhZ1Dq9VfLa7VSa2CypsosgCMwtiiipYtHE1tNCuK6RoqcdBA3o9mhASW2ak4ZdR2oLxWweY4uBtv8",
  "key3": "54iwEw9GNfH58JvCo6TeuqJdRGinxYsEYtzQwypgXFRY8Tfm9E9TmCzxmKzZp7V3RAxiiBjUqQxwtBN6tYMLU3TN",
  "key4": "4mcDbKjGPTV1Y1cHjmgLCiDKmSaDd7Rkw4xri9vPqsRN15yLnigJ6y8hLaSwi9JoB3ruFuo8NBYkDNP14gC8ZpvX",
  "key5": "3iwgCWUJY9xysCZjCCVu7T7g4YkEUxabQ3YhnS9Qpg8Y727xunWuVu89bpFz1AjKdJeiLRHzHZgN5Z57rveMaBfD",
  "key6": "3PjbUoqMb4YrHBeDCxNQQLCFHUkHfBcthXiFYerZQVWYUsPvF3cyJ1XguVcUu9mJ4ptkAHscbGk6YJ81NcVLqXBL",
  "key7": "4t75kat4u8D4Wv6s1rM4bfsWXc9LfJBYmftkboAKp5dWrY6sD7iZh3y5Wdj2V5KGA3eirnbic7hMDv1n4XgL9wQe",
  "key8": "4153q87jdAd6Tngv6ExtvnLMvwuidFKkGTfaJtJ3UFx6YZQEoRJqbrctuv3kXDcYfiYJNcHgw28U2SbSXEy6VAQG",
  "key9": "2NMN8ycko1CHFFZY1TjXYvBxLTWottypbySXfSZvrLb8WbDNkkPkbgeZrnuj5XmkxgyZ5X1GW5kdwCMNbSvwgM3p",
  "key10": "3YZhheu5G2QvEDByi2riyDQBKokMRnZ2DVoHpQVqvuG2DBc9oQcpx8TX6KVZuhKoQDENgpGKzaUBE6PwsCn5f2ba",
  "key11": "49jk77XJ22QnupP59jVaKHMyP6BFAEc4cCCiu4JQUGYkYhwvfCnH3tE1sPGzuZyZ4BXHNmtfE22NFygDGR4ig8t3",
  "key12": "2ptJYMboTvhm9Fat5f9EMaRDUnVN3dDVAhNdCJbDgYfD2MjbuqaZRxS1nzkbLmHbrbmJo7rtWFP73GhpGzS9MrZ2",
  "key13": "2aj1GrvD9QFPnoWG4hqa8jyK8kCwP3sQUb2hY5envS5eZqzq9ozBvMVFf7DksocnawCuExC6JQH3ywmN98ChunAy",
  "key14": "39ociKk9Z2grwt85b1GWet6GmcBYBRbDTo6iXKu7sViDvmjRm2r2fktJDTnUWATJzws4WK1guNawNqxN91rqjbMG",
  "key15": "2qxiE55mJqTxhTXNVxeB55823bX7Eu8V1sjeG79NZTxQBut3WQRb2ZychmevBW6U4a12jExwCzAfAZ8DAicmBroC",
  "key16": "5p2d8rXizTnvqEgnsAPzymJhJCCFLJmSZhhNXGigHZxuFuJfvPHmDj1FSGcUx55aVimWvQYRtfr51jMCnx9Hhaq2",
  "key17": "2BAFMmzeGrzRtnoVPYZ4bMbcLkoXHv7psVuiwScqSNNMstMrqZwEKMZerTV6DxegDYFPCrnpWba9bKrRKXfAYUFT",
  "key18": "4QseAW5i1svkov1oEDY6257MfYgudTkpxKb95xhEmrepPeb5Cvt3CzJej1HkpxEi5wbg5Jv28SoffNLYKbgyeNTT",
  "key19": "5Yg2ao7z3rvnX6VFYRM3AgqEHSs4VmCDka1Lzn3dFC9ymN2PbvirxidN8kwHvfnBFCQNrMKqm3sfPdx5m1mfvYaF",
  "key20": "kEEZp8ZBxw9iuNhnvnR8FPyQ8avLkhbEbdBUecmSKiJLw3812WPntTp2dNTrLkzk4dXZMxfrE2U98ERbbKd4Zgx",
  "key21": "34eLgiw7eYsLma8FdH7Ur8dZvo9hicMDU6g6Ltb74Exrh799s2zapgt64frd5nD2PP1VPDmbjZUTA1ViWtkTRg7c",
  "key22": "26qnZMXB5DUddFZ8CKQXVcrdhwQDppdhHKHaFuxRzWSsz4YkQMsxgChbNyHs55wVvYGLqKKp9wJnfd7YNwE4GrCe",
  "key23": "3fUPEiQ18398VPFUTAfovmXJjbJb6GDvS3UNsuWUgZMt5NJWuRmcKuRMfBTzCV6EzMPnSgCG7jyJg2PbqY9Pz3k8",
  "key24": "zNUpvBXp5JCJjADKSfc1mUiKNyKEUyzvnK1Yqot8AGi6FNFJmrtcrCTaK1CR2mkPBXhc6HiJv5LPG8tU9mvCPqg",
  "key25": "2pw4cyzLgWHzBKr6RW4djExgw9V52JJMyCMJwn9a2YGTgYKXk7PcAPdnQ7o6Y1LGyA5xs8RcPBJDdEXfNrpqLwkz",
  "key26": "5gVgiQY67nQZ7XTZe7Aa2WJHYsmwDALP6ftpwXmeC7pNtK4MDQvHZPye3ZqYCxWFUY3Y1FUHS4fbnbMAnMbadFXV",
  "key27": "4vjRaH5UYM6aB2RfMvSN7vFpw3mAbMThmALZg6rqCWnfKK1bgmU8b6ZDcJFqWt1cjYwnbEnsDrQbqqqjZwZiqyMK",
  "key28": "gr4eF1XZJQCHT3wmSYFRC7L1oJursen57tzJdMPaJPwFoGGkLHcM43qUPRnvhaZvDJFvx9Vp6vupjHP1G4migBs",
  "key29": "3uiozn98UQrpm1bSKdfSQfsVBSy3ZoPKGNyRXQVMgfkVBwFgg1dyTcMPgWwkkfL6UXSywmF16SUgsGx3R9nY6hwt",
  "key30": "3tkdu8p1q8MBTwEop1147xUY9e7FTKwCuWpBsgj47Vemryw8XQgERbNv1VMwXoJbr2MQAGpZkEuMC1mtZp8bTpxE",
  "key31": "CZoPbYKT2obo9gYZfCystUNUyTLp75RbmxzcooKia8pcm9Rp1HtRKS5xW8sZtdomX2adDKLWnDSG9yG1XJ2mWYy",
  "key32": "eoxiSjZMGivu9EZLuLmKhd9QJdu9NczS9rymGtrFgtW4xbKJmgRya2EMTRQY3mND17SdjuLb5oQhXPu2kPkDH7m",
  "key33": "5vd2gdSbH41Ny247KR9oebf6YqTJnPnhse48B2Gjj5tghSMBZYmCeGh7b6y57PrEnVzcSe6rzKEBi8NHkzcxefJA",
  "key34": "7ue3ZzKMupnAJCgt89Sps7FHpSSWn9Udsr8rtztK9b3SHLV9s5nsCn6zfLCMeQkTBqx7ovhKoohnzmZtqu6ABwp",
  "key35": "3G7w3sxtaEbHhYJDMwHzUp5wn4KfyVyNrGqeaPawRNVEoCaP4ngb8N9vk6TWfTwd9HrMJnD2j7x8zQ54ZF2QDDND",
  "key36": "4soJSVjE8SupxLjnjNQcEinCjgpQ5n6NoCJxrHbnuZ5XSTw2PcT243QXP49w49W5znrXco4EYZhEPKhqduKLWdjo",
  "key37": "AXQEvzq8VGo5NXKv9g2wp1fCF9E64pSfPRhxJW2N5XX6LGwNhem77RcUDXzdqB8dRRQHmUAbyLQXnrb7G2wiQsc",
  "key38": "5nGoUbwSctepX3dvFYqZWFnoURprx4tNhqonQrLBShhJ384wgP946WnogaamsSgTSgAyP24gRnV7LBqACPMDZ8fY",
  "key39": "2rAGT5i4Q6S8UZf6xPfBYA1G2MkNbv8qpPaCQ3vxsmUKm7E7bvJdYndY91DCrDFdUQx4bQoc7h5B3SSK9MMP6j3U",
  "key40": "vJbYK2HxrXpaBAugpUQGtMLEGakHMCvFUs5bJePn1rh2oX7mcfeofoj7LaTfYL3oD1x3crc4DMuZxAtdaYAgBnp",
  "key41": "3RfNpfC8EMv2jfihQybH7AFt5iqdJpckqPhKRYAEdNBhjQZdRpShULkxxocFiTfVXsSwiFBr11ELWbBo7JCMZmt5",
  "key42": "2uaT6ztWnwnchqJJWiVd5bW3JAns3apQrr2PBuvxzwnCQa7jx7odG37VPcpTF7EAf8b7ZLdCFcScyQUoLL8Abm2t"
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
