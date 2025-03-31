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
    "59DHCk6p73o5o4kGjtMoWndiDiqXZtutJAPpMnJD8GQK9gRK5N6Yx5Db6YnY2W7mDBtiQQF3AcwBQsaRQMtGbhkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLS9PHWYkpY5jVS2RZmmQYhcnQSULsTZqYCNS2262XsbPKNuiHGF64C7EF6wNGBVqupCeV5bGcdKWc6KS62Htor",
  "key1": "sJ8z3EbUwUeAyxGXo9eYYgJ5az4tiNQB2pJ5sMmHYkHvu8RoH3eaGMQQuC9NELWnKsLN2BnPfH8p1siwf6QLRdc",
  "key2": "3NchmtxnZ6rKH9WnQFXMBBLF4Jxo4ngv2J8gDPv9jkLdQJjaKmZaJFXVUPRzBxVRDAC23cEZxRfQ9oTKKpwXNjAy",
  "key3": "3QxW8vagXECzSPjF4VMzpbDS2AZxQG9YZQG8sZT4m3T2em2Q7ENHrHDEsztVCZaf3ZRWRBxyh9ZrTkFSt84zowQK",
  "key4": "5HPerD9Bc8sc4H5uBgqtSHvf1oPyZxkeYYkUsWnv7e9nAnsS7wURai83e4ceaiTf446rxUhCvHammjvkxiZZBhm9",
  "key5": "5CoGxJUgSP9tKvthK1mEs4eL2wPMMcGdQGpVjLMPUJxLQqoUXJP7swXb8JGyYbnV9YFW99hJq9W4ujqC98kuNN8Q",
  "key6": "3twLaV3uoiZi2HvEYwF7NFcmZEZfcPfHMtHrpnvN1WbioTNC19Y7tmF8HXJAWFuBC7F2Xi4LrLxQk6eYDq4w9moz",
  "key7": "z36N3Dp9nfh6ooeLEBupuMcqRmUD5cowMwofCATXQgCNagF5t3yReSnGJu3NvMjrDHHev9B8Xaz8Hm3niNExQxJ",
  "key8": "27mr7XZZ5caHqm1XFkDFhsBsHChHXpXvNkr8x2o9k3FSswZoJD8RQ2g6Bmpxk42dbEiDzn9Gqdt4yytP4sEZgVDc",
  "key9": "3tMmTN519PyZQVYnQg6LhT1sBsm93asUR2arqJoRSw5WLJfg6FRG4PaS1NxFwCF3cMiaFuaWUeULGABMXc6VSAWb",
  "key10": "3WcHTmEQWJzFjnZQGw3Jp8xtRi8i6mNsF2PEjyLhYBwV1AiQCvw2HVXVyLUfetUJmHEkS2c8cvPXAgHUtkhFiHhu",
  "key11": "4pgiqAtRwR5xP9btdo1A6HLxFTUPdsY3Yiu9bpV8BUMqwtBvg8z8PnGjPzeo6HcV84x2sjKyxC8GFvFJTYC1WSTN",
  "key12": "5W6hby4dnugW7scaKU45Wetdgw69qFwPgH5vG6wVMh48eexGvdQtpUVyhxkzU1Pbr3kyWcTSoqL5zKydG49r3fBs",
  "key13": "4V9gdd8x1aM8xMgzhQ4v3ghpCvYc2AjZTqQmZPEWGMtHSWotJm5CbycR54sfsV61TZhjDZ3qS91xNSAujmhtNuGv",
  "key14": "4h5EgeHgCfSTxnXU8yn5LsfmhuKJFwbzWMRtFFu4mnqQ2ZErBF2vykPDse1US1BLzy7NayqNvWm5g5FRzfueWWPP",
  "key15": "2t6f9AFiL8S9ZMv5SG1XF5bawz8ripLtCLW1zZMbnpF1KUiWnKsBW5U1xkdv16WwnR3KAPb5imPCCGaBCuKWkwZa",
  "key16": "MACrri81xcvgWCF3oNbWc3G17Mq3U1XQv4FmEVMeMaK84DV79XL7HXUeCyHZmEDx7UAyN9bi1Y9VEfYkhQCu3Ze",
  "key17": "67LvDknGQBxYfq4nWxGed3P7q6EZJx4hZVxi8ipS9k7zCKiXoGmGDm2pBLrtkUT5MT1sg3yu2MaPnbFxbXeWDg5f",
  "key18": "2dSbsKC1vpR2CvsjA36rXg4zzaxaQsG6emZhR9haEZvA7La394We7TRfvK7boBMADWbMPnk3wVDH2FSCJaVcoCjW",
  "key19": "2oMdNpATisrjnYKPsFdDcxHgQfuReHUTS8Nn9tVFJrrkwHruR7jAn1G9McchKSwrLEEHceSthJTgMjzKxQVZnBRV",
  "key20": "2geYycZCPLwdfSDFzyYrtvHGnYrHqFv7ayrVC6o66GB3CoX6KxyYByrTnPQV8XcQXAUJK3qhcMggkdUbW1Z5Zvkw",
  "key21": "4go5MUMbaYEWbYjys4my113M56VaeHHZqKK3CVue9dNqMaifo8VY1Xt4zQq1ALbv8QmQXXrFojGpZQcEWk8GT9Sp",
  "key22": "2Vwwmtrx6j8EqLs9Mnj1rT5RiPBhkFm2u2ULEuNf3oJuC8xeVcY7YrR9btjxQZMKrWBd8ZbDGmYxPSNZzZVnQzh5",
  "key23": "4SWi8ewEJKemJkidxZUWoWvwBE9KaY9x7jP9Lv62CbmkP4L12438EMCdAj2uKwDJEFFAHxhBMyXgvz2kzRanmRsY",
  "key24": "26Rksft1LfD8Z4iaCiUysF11BwDHMhauXWfGXvBwagfMV1hUbwvZP33K1az1DY73MmtTgV2tBiYjBBsKNyVuEKQ2",
  "key25": "28CxDR6FmYfiaq2fPL3GzieJfJspWhkAz6RQmUfamcHwQJsE6okEQDnBADm5B1HqPZLf8KGgC4KyYW6S7AD6wowC",
  "key26": "27PA8Ezs3Fb5DG7tkVDoDDVbqAK92xv2nXRg48eYp8UBdVjcaNhK5zp14Uj2tC9hx561HXJ5zxW6H1w3dXLSsuRr",
  "key27": "4TzBAR6PBrMrbznQRXh1b1jZavuvQVzqcY7fZJysNJkJLA2LBuJA77mLCYT5gSAE1zCzKLH7iabR1HZMDtiiwb8b",
  "key28": "59qby1KM2EY5EENYm3MxtX9trcDvngUBG2A6a5efc5NfzLL2j1f77UPFsR7rAbrHeyFWp6fqw5jYWsV7v2Gaoz1m",
  "key29": "3iRKJNPGMajpFmYNzNcHLVkXi4x6rQQxkgHbZWXbzcF1NtA5P7SC4QENep8RE4BizmPQin5AR8Rwf9VFbEcC5xi1",
  "key30": "5yRknoAHCKy9Bf5d5wNfZpdpUqfEADe5SSKvK3hTcq69Ws38uTzG5iDwg5tREYFUY4gZfJvkLPMczQGa6Y5Vy1NR",
  "key31": "4aR7YqjdHzXqWnnk9RpMsQ49wRp2nPgbfCaYYfnFo2oyZcqqfjqxk255HqwMPAskCCm9mYHm4ThfexnUByEm1mDk",
  "key32": "5qRZDGWMbQ14aHtz9vQL74df8h649GZZwE5VoqUP5zHCQ7DEP9hBWw9ojKAx6TmVNwjiLHnupXP47on2NDxuifz6",
  "key33": "27N7yFNTUEjxNVL3QvRc95gUn828E1CuwP4K54gZDugBsCez9KrHVrqV6V3kZZ6j8R6GMScgp8P7nUqVwS1h4AjQ",
  "key34": "63UUsxrGXTgBc3kDfBH1GZjNcuiQ4zMpnU7pT2bHfbMnSeZycL32Bpq1ayFGTnBUXshdy34aGx6Wzb1iQVQm23sJ",
  "key35": "5EpTfXAk5fds4zQ75VdqLNmwDcicCsWGYitFVw4yPF5MbyTg8zmTyef8WoySUVcKuQ1iAC4BZLBg8SyHa2XCW6Hy",
  "key36": "62ZhSVTddetDax9KWWb1qXvFsREMvDnF7CisXQxTBLY9jppEhF3MsTJbutY7v5PhHkUrfjb3AT5AWPtKYVGSqJkd",
  "key37": "7c9yzqGdsEVWPu7KtERRM196APACrDd1vN5tqqr9p1vhDU1br3xV3rYTdTtNadW7XbCuYUcMacPoAdRyBgtwYnu",
  "key38": "2hyLgBnggUPewjkHUzyKmHhWpBBWhL1C3YhsRUcgXyry7cSKGqYYG4znYKYGotvaEWsS8c6AjSM1UaSTvph7zviR",
  "key39": "5dgbYfN5JoXdTy9oeFw4K2ipu7B9fF9AV7wE8U4gu9k1CgwAs5RAwKEWL5kPXs4QxaTrfZaNbbNicJZUaV4Fprxg",
  "key40": "5794RvAWqE4Lt882bnCEFTQqPb5EBBYUZRTaNWorw377JoHbBRpyv7doHBT7TJP9aLkYNjnbisBbL1NEKCEShcyT",
  "key41": "4Frk49mHo2AzSaQcmDKoBRqyh7J7bVM2F6v38HsKUg3Zk34aPUCtM61RkvceMBM6e7SN5HkyNZTZDmLWuPhjLwcg",
  "key42": "3hEXYzhruM9dgZDx35edMc1Wrsxg7YzXmnGCqeqMFjfBCCrC9Mx6cnEbsiHgug3YpixJbuTmsbnvw3zEd9PaG6hL",
  "key43": "4JHRspqxJuaLpo3zExvsb73TmekKgekNV8RpwcxDLTSFszdVduVkS3TQFR6NPTKjCX8ChtYYiyUv4aZ9Hx2pFywx",
  "key44": "5qA57XVntM1Bfi9wJGwsi9QjmhwzpVVGZerDSVTCp7TibqFm3qXccuCfuzEqo9S1Jd4sBXHy6Ud6x2YFtQ4dzwQc"
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
