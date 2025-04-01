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
    "2qjqtqntNTjSbB8FRbyc2jpFM4VHkVqncaeWy5PmL9v6XLjqv7kCHPLsfbRjiAPn7YTMunEWBfKxgPXqREsbNE1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTcvD9wkcpuekiHGBVtWg7SDHbGHQbe64t1ZB1n5PMo83uzzpAsGysPdnavDLPEsPJeNyvU5sCfqv1iQUnZZYGm",
  "key1": "5kBrqXkTYpbPw2istviCMWG3LQHxuwjJtYUjoxx4BRo17t5kYr7GMzt7gpLxvMrj33ZfKrGshiBLReXuUSAywfTJ",
  "key2": "3TiXiRtxYnQ73r1Akdki2GYwh97eTgmDubpqaE2wyZRRxnyGmX1LQ45eB9qwshAJ11N7nSQZBT2sQJtPXi2z49gt",
  "key3": "3yoMY22k35vmKx7pEZxmhKpdwMrEBne3k6ucBxbyeABrwaEVBDPFa65bZJWgG3AvDGbQxHapdBzXMPTkiU5RSgaZ",
  "key4": "4Pwt6SvX7ucZNhcJs5pehQdjgLJHSMJFJF1jAJLvsoT78CAugHYoZgJsJmomkVAhPiqCChcfzzStffXDTbPv6K9v",
  "key5": "2SCLP5VS3ipsD1qu1hynaaP6ceh7QeWbyh4AhMQboHj3SM1XqRi8sw4Kd8LNkKaBK6sYNyQ9KoPxoXmXYE7Wkjx",
  "key6": "4wQWjmhDVEhWk3A91ywdSQjooMcSXat6HSrCBa24oDgB5Rv7TBxEFkvQYnj1wY3LX8uHrFvAm3MpVY8XiVmyDfG8",
  "key7": "4C9xugv4kAVQjCkESMzQ9FomdPGesAMCAdHQjGsJLEYNKSEeTfBAGKt4uAxXPjBpPXFJKGQiAVwKs9V8QPb3249H",
  "key8": "2DRwgFY1vpuMqKB33zeQKZb11N7H1EgBSY4bxWYxrkR3KuCVD823U1YWnVgWj8xjuczwrEddWEDTGmF2sKto7cQp",
  "key9": "4LgZq8n8hn8EJ6DudpkyaBjeQX6LTZ3q69kRhp3eyhEpH1tMs34RqUaaTBPetvih4GfpfHmJr597FWQsLYvKG2Kj",
  "key10": "5ehv3RivRGd6NjeEjihSSuwKxC6Vb1CLD5vRndiXjRzNW17wQFuzwa6NKA51981D9oSydb1onQRX8tNNQCJxcoEh",
  "key11": "5J9o7pm3b6Hi6DE3hY4tX1pjGVCDqsBCmm42oYCxnUUTW9QTNZatTqeMEBzW3dBCPUXjAYnZnXXTGNsUNH3hZiNZ",
  "key12": "3UvfpqkLJwSwtHwLVmyi1JxjV2kQpChSpL3tfsKAahaqwS6EBFXwFFVxT6d4xwBuHSYGRpWpZa8wHY5bRBR1TFfG",
  "key13": "4Fz292nZfuTLHjU1LTtRS1piHmDCsQQLGiaB7NaczFB86srQL8yxS6Kohb1kevCMFhPMZEk2ZM794PvXDuxBXdkj",
  "key14": "4qC4ydTH7eadk7Bv2yYi5dTfDZSF2MsEFCbMFyy5W9wRTWJ8p4Y58ji8zpBpTTh4RuQq9pP5iHHvWBrtbF1LeQib",
  "key15": "5K5imojMBRVeeWnPbQAPqsSoc27VXQPRLaK1E8GqSEP3CF9ERfaFuNhLqEB2Jr5j9dJh3LJ2shhhP4zhYz1qf3ZA",
  "key16": "5Jmt1hhFFCdx5GsQUw7ASATGwMDH3Wy1ivRdNigmbikbU8pAUgedWnNmJzFp5DwS7w1uhzWQuoyiAEURQesiXHds",
  "key17": "4xSKHz4hpUT8A6bbya2sefUVszvPg2tW2B2uv6ZM7UaHbigte531PN2sWdVfXPGfiqU2eBp4zgP8mrUuH4spA4Vc",
  "key18": "8qsdjTmtkuJrEJ4fgMfUxf4H4nmwdEXkpUmM2MgyniQwTKnzG6ndjaK8ig6LnEJWbddhbgeEPGJiCh1XoSfztLK",
  "key19": "5D2E7QrDUNNQ88wpSndoAjBEoZkkViKmDx79y85wfKbSZoZsvBKGLkwdAKM15QQCSvoAPnHsJ8jNu3NVbFGzRCxR",
  "key20": "Gt6poCkbV5974WMbvFAbHZhtE77xu3iEJaGaqEkxv2s5DjE9Wy9vZ6zWi2j4fxLgi9wYtaphUUV8BDk5tGmy1tb",
  "key21": "4jfJmwjyN3sB2GXYiLZxagmnx4vfj2ciBWEb34cXgmPAh4uSDuER3NjqUqfafKws843VYSqCeNKZ1aFa4FNX59rz",
  "key22": "4q7fTpfrz9zbRoCKVrMMDtxsmzQ3v9SHHx9fE6t4LEWgEMjSSxy4oMeFxZCZeBkJJTpKeAS5w3wNzFnE6k8UqHUn",
  "key23": "42sysBXkVFzjiqkV2EqexJbJ1KWcg8d4wi319BDAEJvNKVDjUdv97QEr1jETxMFyH4TJYRdm1C8ChPzZZrPmRKKX",
  "key24": "3fWqV8hpqyrpQgoSUmBs9zw643BHNUtWtmW2ru6DuzRTeLhWhzu8VKxBGRDK6Mm4db8tPcCcb2eh9KUwaB6rri7y",
  "key25": "2J1YpdyzCRzXDsBYE9b6NZNAmKGCF39ncAu76iN12EXcPXNTwVJzQTymjTUD4qUgjWWMAn2y35Nuagw7kJxVgw6u",
  "key26": "27tSYHn5ZcP24ZPxx2gedourhsL5c1wEyFnzBtTP39yEkLPc187oJUiFfsa71uqUe4csGNk5wN6B5nz1n7MiXfjk",
  "key27": "c2FdcvqYuEsjWSsiDL5WWwBFHzYhwwjnrCBs4hN1Fe4Xv35BCXAfhE7XAURc1xE1puWKTdVN1ZaoXMkcL4fws6N",
  "key28": "5rGGbXxmXApQgMroivorxYSLLhm3jtkvXqjUkwupQ7y9SKph5ckqZPwFtnmj8hfF7uvUHGrwC4ZDNgwT1wF3USxN",
  "key29": "28wmxijqQnHDUE6gjYMCb7V1rHSLT2EnMWpBKJKwTYyQcXtvWuCLSTHRCeUF64HEdrzDiC1SYZF8msy55FXYPgTJ",
  "key30": "3pZ6T42Po2sbc3KdM11eu5hrGRJrPVs41JJRQU53q8nyPHJ1xJgshYmaonexg5cjPYT8FJUauWReVEhTgJppJ3Ko",
  "key31": "2KcWatdigVxkJqv2T86E3FQrixTYW7eot4ueZhfL72dnhQpN9jwepfwGBgMTqvacB6Z9sdDdqizYSvgiM1Y69KfS",
  "key32": "4GJWwWmHHiPyhNNRiupeMcGvbCzXkqBbkmyQdcYjqbCmw829XQFd1ZdT6CH9fca2afGABtbtnov56ZEZkm2BDLYr",
  "key33": "CciJ5zDS9nU6WD4uZXBGNrAybUoNva4JqJn6BTqDnJqwUkmNFPzkUYkVCRDXPQ5MYgCi3hbbdtN7oW9QqiBdSgj",
  "key34": "RzR2aHLBesfPfX6eu1qXoyN9WuFJjStU6kNTEJef7r4mHboZYJ4JV4JEvk4wAUUcG5xQZArXUUN73foWC3Dmbpr",
  "key35": "2tzHkrWezYYzNZ8ox3h2GGqbKiiRqAVZJLKZES8zNFDBqJxL95BMAi2i1UuHMhgxN7zEWuixWR91KzegqxQeVxj1",
  "key36": "3A2Pb66sF7h5q8F5bihPUc1iyzMej4u1rRad1Q7fSAfZo1TVHabQbdrx2aW2bCcT1QxioiG7DUKoPQgdaix7AjXV",
  "key37": "24Z9uAKZKiyvXCKXVUscr621wiZQKsgUz1u4N1kanNP4K2kVii9maYyP5oWjqjBk37p69XR6J72SFMLqEkN4RnKM",
  "key38": "2akAY4LGgb3mtdLT9G19cdECsjc3yxqSrC4USqcfbfRYyByRXDJmefT8wGMpmwwwpmHE6ZoD3zSGmhN93WRMtRxH",
  "key39": "3MCg5CT73BChBAKKyMY5DWVut1i69pR3cAgQP5uQjjbwpVLESeZutZ5ZaZtCa7dHnsDD4jEoMVbDJyi2ahQQCtRr",
  "key40": "5knUjHgM5BU5WwJjSw1LQvVr1ZkmsnE6CbPmRmAuTS5ZrmCGxWkaEuG7q4AkGbvs6fKqusapmnyU1ZDd16CWsGxs"
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
