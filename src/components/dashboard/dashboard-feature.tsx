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
    "2gtWFR1kzo4Ho6RBKT2fLfxN9qrMn7ucGK7QavmttSRTsZhYUnGtZQETnAWtd97RwMEPzyiKSLqvqR7mpDa9xPrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cCWSrRQofQ6a7iG3d9vxDAmMgWcwnyFShhFBnvmeMLZFEcR2V8Zs1eLySbQJkq8XvbKbxPPDets4b3Rgr9a3Ryb",
  "key1": "2X7MSFwBqHV4QAmvN19T2zhCoe5dQHv4fzv7bt4RijsntPrzPvT1xRRMfQsGhABEwrjiwqob7BwWq3i5LiKAgJE3",
  "key2": "2THhpJppE287UjkZzhZTTVqihxy6w55c4ea9Gu6MVSpj1eAdt6wZhAjPJNWVFjE555n1tCruwpqWtcK4RDpnUJW6",
  "key3": "4mohsaBsdbrdPn4fcQ6wUBTfPvba5P9WtcrHiNG6W7JTW4BBLzbDq1LK7GUg8vcH5c3NJhimeU9JQBR8CHJhNSnk",
  "key4": "3Xa9f4ccCcJ3krt4N5qHnLtYpUFA89jxMGGouvSZt9dXfac4ARBbayj3BZQnkhomp9KfkQ9shvoQLAp72QsWwBGU",
  "key5": "5K8aYaEwQcWvzYLL333fnKBSVNCd5QQ85b5H6MsCgp5KSMpjX8PCQW9A5mvkKo8Hj4TKCbZ8J2R59dN1KjBeoRQ2",
  "key6": "3TynUuatcBESpoRjrwagDHt32jYcp35Q5TzgRRcunrtxdwnr2FQtFo7ccHtt5tuw7VW52oPgStqtECpVVBdGYHSd",
  "key7": "3BVe5ApPWpKCht8fB5EzXmucgTM51vCTP7W5DWiREUSgiPuoAtGdpQ21NouAwLSr5iMgAEU6uYFHMn5NDu96VNFj",
  "key8": "4rYySTw2GWA7kwKiJnvHYGNumfuC4eB2yEX1xxFjHgBVPPDhVpVVgAQZzqcxcMpP1KyttH7xDWZTbRWNrpMzmNc2",
  "key9": "2WitdL3ttnERmsqekMmSMbexDWezfuao9Wog3uMzsiLp3YAxeJgdcwZaemfwne8DGuGM6Qgqi4cDCaFqXjjyYjjB",
  "key10": "56dqnYvjR7D2tWqc8f2ycsEKSRaERg1mroqbmnHo7w1zP6v13AKEJ1ERtv8ZQ3xMGGmJf6neTtaDUpf99WmYe7eB",
  "key11": "61pmKPzswuHrrGJiL1rRpy5Dkn3kFdmLzUseAbNtqvqxhVJLBHHvcoveeMD89TVSCybnBDUYLPdpSRHwT8VwbwCi",
  "key12": "3KsvM2L8AvxBJGZbpcXiWJRXHb6rU1PnzRNuec7fFGhdCUBubjDLwndvNMqyk8jidubXrasz5KWLX3Ra9XxiV3WZ",
  "key13": "5HxbPUTuz8ZiLSVQ19mvydmMDUQV1EDNiRvBd27hAyuTM3xS814oQRGbUt4bFBkHcJeRJWr8tzdyEPn5UaA5GyPD",
  "key14": "3CqieBWud2P1wyRPwPynKPGMrEzZwZCJ9S1f5pKsYucCxfbgtACZrvotXbuZwzbVTJSCxfCgGvcQHDse7Ph8wd1V",
  "key15": "2UxFd76q4w1AMvHXyu8YQwzxHGKVHEaiwYUNTyLyRP2aCp1HUFY3DWkz84pBKcyhJ3QhucxbA9cLQUUda3rDurJU",
  "key16": "5YPhKSVxdpWCMEMwsfo6NyxL5p2comFtTTYRjUkHnmhMuXeNNnTcw8RH3pCufVTaENmuTSs7KcrqsWF3oKXVPaDo",
  "key17": "5bmPqeKzQDdjZmM6Yr8xxpMxkJf3G2Ghg7k4xUM7govoYLa8e4xPVkw9i4C2TDnMqQ1zCMtCmZQKLzEJX1KXgayo",
  "key18": "3FPXW8u3moSVZAp6nagh9JiFhAtBTqtTYSKjjPjCFJDxLgDUKod6DcMU1Hr7Sg3PErcfkiAtyxjeAM7qLYhyk6ht",
  "key19": "vU7tGmkiv8DiXDGfQ1mofLgmvc1aN834wep4VoaEjqccDy6MJEKaZzNx2N9vMar8CNsi7Nmjr1SN85L2yd1XURs",
  "key20": "4mebiz3yoZiZgkd2iP2dtSKifrmPEZQq8jqAPyR5qQYEUxVVrqDd5LPcsrTRG1qtRBTqS6YDMZGbxKYz5NBMf3aa",
  "key21": "zCMvuALj82pQAQptr8CNGqoLWg1mXx48UCtuYka7zpoeL69s5SuPe2mUFVrhUPePhCJb6PTJZ4ZXt42Xe8mExx8",
  "key22": "2sh5YddNEqEcEo1gw9EHy6YACBpxoDq4JraxWnjMfWYcjiQZjpSMs2cfwiXqwxviapThrKaK4XZgKVZ1QdH5uqYS",
  "key23": "4eStk1sNGVDXEEw6f3dsYk8m66J86vDMB22nEdjE5faeVfbCRbETWMLn93qn7DKzp2bFTmMpmZDpY2NKPxNCUFoK",
  "key24": "3K9RWPhCwuYoGmB4QPrpCDuQ3PH9cbjaocMrSe8toVKYEJpA1v6RJ6o8o4kRYXEXJAnQpFBLW3o2FjceoXVGkFav",
  "key25": "4eFJNVCQNcwF6NPvyWtmSkQQ6EHvykFzVChNhHz6wLTGG4kLMwWUAe58KSqUfpW5WBCecgE7AecVAxFVDNT7DMFa",
  "key26": "2JARKMCrYhvD3eUrAwDoYwMhGXWb3W3oV3YwhP7ezrt9g1Wun5SAkV37FSTdjYDamjqMaQoh2xnQvq7UDtbY3mH4",
  "key27": "3EyjrcZjzYG7JCXDLJgcTJFhps5j1tPFURoXpahAKFAhDUHLNUevRpRG2jG67cRunUpobadZGwwhjsUxZyRCHTV9",
  "key28": "4F7AJoDvB5v3MBfcYaM6Dk8u9TQXqaV1h7XxbzzWNG7e8FixYF837HBYpzxiFEeWeMye51L1fKMVgDYz4nxLJnPu",
  "key29": "5h4Ts8ycZtqqsNnXacT5wF2NsrqagC3DQfYzx1F7RjRR3RTjojZTfCbmDSUVLCpoYmVsuLbrqbL8CRkJrcBbtGM8",
  "key30": "3AXWTFBgeqqfv7wjvZU7tdEG2SAEyVURvn3zn9LM4ABX1s6PZNgcqvUVh7E1neSXe4PTReWWk8jC6Nt5W4hWFvSc",
  "key31": "3ncRjpBh5GgunjtJQSuffTunXYR9E8cx5tDYioa3kX4j9RGBeUZXegozc7av78HxdUXxkxQ8wKEAhBQpPjpYtdxg",
  "key32": "377p58huiehcos5xWsKHfij43J5ACZPjVqtnM5Fnvo5BS4N5zJ6JVYuHyu5gtDWKCbGQFZqfTXnPXsUpTvWmKc98",
  "key33": "63EdXLbKiLf2PTHrJHRCh78F2rGwBeqzxhYGK7sR5EdiCDBSDRC9U7uZaBwEJxeyECUNLFqkuYXffMfTiDG2oYuK"
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
