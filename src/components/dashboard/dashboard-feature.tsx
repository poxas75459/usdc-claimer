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
    "TvEv3Mdx5csb6U9e3r9ZLFgMFaZyG6DVv6SrvZCEk88roq7pYb3yPiszXCgq8MhuXpgUwbMA54eU7JWC3mYK5UM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215BCw8gZ8QPET22L4SKwfPHRuKLAhvcqVnwojYqrqZbUUiUMfLpTPnmUsCkpngmQdUosuw2w5QQvexj7DPuQQLk",
  "key1": "357RJ32XJCustaWgWZi1XrTgR8mNDKUMSWC4WhdRkY4ymvkq6JvGT511ELrnQzEw1Xf13ZX2UjeSyuMnzHjoujDR",
  "key2": "8KRDHCFDrysbeMR8LUmZt8NaNAUaTnpRWUQTuiBh2fneT7sEQQPEqLLG5qKsVkJDt2z9UYGUbC26DtyEKzeevrf",
  "key3": "2Aq9iHLXP23cpQdZTm1Jjkp9M5QqeNohnCBxupEP1wkjKZK5LNpewXavPipRqKcYnfbmZtvX6HgJ6L6uqgaNM3cB",
  "key4": "vRUgyHDEgiPc35xE1pyNPFFyAwFDkbNCCxFFWXFnQeHDSACeJd5U3njEtDg96asTkBXg9Xd82s3UjgWtUxuXCTF",
  "key5": "21RD6zNHV2HT7WaJDqfxc11N4govUZMMHQK4pNjFfsJPvDHHT7k99aKGf2kdo2NcJSdGHSvy9ufNYmeQPS6obdWE",
  "key6": "2DtmSAi21okLHdopckf7qKbBWdkWn5NigaWg3uVAEKcGjUcr952mCccbYgPs7ED3c9QKejbeCs8WnmiWBoiFwNRr",
  "key7": "FVDggBNaF7ckQ1Ar8gcPTHuDVFij57wyFALMNUFR6Sjk6pzQNRhx5k7koXZrbMDUNTrS2n1NyBBhAKWaGVa1Xgg",
  "key8": "4KpFbrTN85rxJhJycWQ2bM5fVpQgY2zKBMYrpPYFLFVo1tVBKqeqtC5KheZmpQ8whTB1tkCd4F6gGVcHYr7rH4fg",
  "key9": "5vgnigBbQDWQxdaoHKFEdPj4hqb1t9hWjCYfjfTmwWSD75T9LsnBya4ene81kquEtuzKCXLTw7mEmHg5UVNZAvdW",
  "key10": "32GGM7fwi9cME9phYEV5yQ8o22VnQmoV3RCQZkgxQYdVbFqeBNBMVzDR2VkoM9Vaomx4gNSPmUUaRtujRfRTPR3h",
  "key11": "UsTUGeZZDfkm5KxSKz6PNDtMmBSAFxxEdjM3X3PDMdJC4NRJsap8x7DesL85Pwvzcwy2VnnsResCXzCKRZfgKM1",
  "key12": "wzGEQcqsABne13fvCh4MyjYKf2djVm7USHX9Cg8vfdSakzEYx34mmWG3UM2t8L97tKo42zQfHKxSNkje3DBwdef",
  "key13": "4z8pM5gE8evJqrN2R36UaeuSEKMdZnMueYxTc5mhNYCAzzpuXtZLZxUMnmsUH6BTrnnoQTrboEYa17p3a2kxdUUr",
  "key14": "3xxY2ejZYYuqMDLFs1FbTnrQGyfSVDak1wWJwWqP1xLHdkArxTJXTZZZ2UFSZsvsBnDTWp2gnkfvLFPyTmyZjrwr",
  "key15": "5VvTFknnN8hLT8twQfNrtEqBa2f4kvASRCeJ997WYeQy4eXvrQ62JH4syrjw8yT3cWkRNpYQGeZs9JEf6FuR5RSQ",
  "key16": "5G7fgx1F8T8WLgoMKz78mZq46f6MmTEv8o4jix6bH8MyjfxN6MH7kikPHHnb8gtdxbbLhi3o2o3JqGLZcfXH8SRE",
  "key17": "8rxMexLe3eYD9sWwYHjbiEKahcck2rueBJorfqHFeNWm5tPtEZGoWripzoXWDhLpsG3m45BHPmWgVaLomJFH7kU",
  "key18": "3zBthDA6pmiDTNJnvKdZhv9rA1o5NpMEkH4KRFFSJ48RQHZNTD8qsDr3BpV8PVwUwBgvDxG7FxKdCcrwuMdPDYQp",
  "key19": "3Zd9UfXPWHgeUBGUVTHUZcUC8T2EW3UmpEEjkFn1msEekygJQ1PZEsC6ph6K8814XDRvhAsqCVGGiTb5UKnPVnVX",
  "key20": "619Awa2mLCEBAdPpCJSnn2A1gdMZanuoY4fn3pPRNCfergQsxSqeYLvqjy6V2a1Dven24KRUhfVKapsms87TSaKS",
  "key21": "5VRbwZ4BHpN5ZWfEtbopCW8RgbiEc8uPW57JAxt5EYFN6V3e5MMun7NEnDfTCTvfjqunxXbwCUrz7s6AaZKSU6Rg",
  "key22": "5yTDXWhxH7KEqXRGRaWUKnJLo8mvL7jR6TDLKvRqFdhfxwHCLcxnpnUpejPyNdXL3BBtY7LoG3ry9Ef2ccxU8So7",
  "key23": "jmYHo8mNjff8Sckhn8jcxEVmmxLcMfiM9nHNZfQZ5AG1ExqTrDosLa8PPeYT9W5nj7jPArCMaeYXc3dgDKGYZCC",
  "key24": "5jNQipKgyLiZjLQhCzVSZB62BMJoCKtUyCkM5LQc5Vyxxf6FtWBwDgd3o3Z8T2PYsbw551HhdopuPeFCBbBQu7bR",
  "key25": "3PTpYgEgPt1MAAQXZSjJXQG8xVMt4uwZC7tWymUyQWBEFXfYQ3pMr8y4ctJUuVTWaKRxcosg1HXDivMgtVvVcBRD",
  "key26": "4AqaEEgHKA5GeAtwdjWr5jdmfsSqUUUcYY55tsAVJMKEjMoRZevzn4NBQsHEyM73y7ERiN1QXRMHQtPUxkNtpok",
  "key27": "2ime68n4AbSayrHPPa4CE7BXEFbjcUtqX41SeAknQrv86ykXcYakpvwUu1aZjduqm3NZeN3LJvaD53riYosdErFW",
  "key28": "8uKjeuuSVJto9sDDFAjYVp5YTh3ZbEwivSsiEfYMKQMUadnh5Dsaf1ro1Lz53hSFZaXRP3FPLUtjjMKgmVC6a2k",
  "key29": "5PFndUZysqeKdxfjfWjjn9CKFUzU9cSnNKbGM5wqzmqEW9NqR5AoMq7JMa73WkwoGQxkfXCXvMBzymfa92phJGng",
  "key30": "5bWshzNxCkeJoUfWWYqj5ENEQf87wQSzQ3gUBaUoQNYYmwYiKKwfzSHU8zCqQYCrQ3EzrKziaoaBvW1iwB5ALZGJ",
  "key31": "4hrBzRJ4ujHrSAawaRM5cGLoTzbVnotnh6eJxCr7VFVrTkLFtUqRas5BFu34nhSasPzouQXwEKnL5pNu9p6o2CdM",
  "key32": "3j5wzt7KbK2ez53Q1A1JYzMS8cxshwMH3ZsrfTYoqgd39Q95sW6xBZ9xakUULCKJu9Q1y7aAX7V6BaFiJMAjDhJ2",
  "key33": "3QAGohwEuyWkuBh4p82qhbQhW2cxAWA7Rqt7E87zDqhSCLGRGneVbaetveXajR9dwrf5riNnfLzL4y4MSUE19Ns1",
  "key34": "4zpQwit1KjB31bVY9cE8ZnC5oTyh6o2GaHWn85NK8CSyahRwjK7rePUQYrYcx4pFuqdmmJgx9Md1rdb7P9GpREZZ",
  "key35": "3G12S9pCy8TP1DrQ1dMMEkQiAN1zVwiRR7WngyfwoHTqfaNoosYEyxvwrPVsRS4HFUWxLx1Eaj9QdNS9bwrm4X2k",
  "key36": "2fPD5a4gLfkxhv1tdMzSVfLqCJrvATcudmm5jPDEQd1ee4YZE6J3zyXZWFPPpkMc2gqvEbmfUJdwXiyS36wrUADm",
  "key37": "3mduy8DXR6fMLEtBgpHpNtWTygpHFpLd2LXvdi72S6CHKhGvLCBAwiGA7UTwFSteDQFfmSKFkviPnFqGtkaWrctN",
  "key38": "22wpnS9UbofMWVse5d7V2nFQTYRDqpXama92g2fmTgtFFDnDtFedcr7M7jm6S8UkutEzebFFDMFkjVeEbTgUsErg",
  "key39": "3AiuGqU5aSMAJGQJhVpeZ8s71Jdx9ZnM82BKEG3YRrMcyS5uU4a3aRQX6BknihQuuik1kM69xJ4PoD5Ybd7vtfkz",
  "key40": "GEmRTrhwvoRKSvJfRVP5Av1KbAdMTGwM55FWaHXL5UwkezbPDMqQZcv29EGrFM5HZiEdBymnr65Fzgi1K5VGJVJ",
  "key41": "3kSohaFa9HwetyMwsBHAQNRyjQSJFHqn55o1zkeqXzzfASknzEeago7EJ5F1vfEKCmhB8hHua9oQarJJzg37oHvb",
  "key42": "36y4TY5My4uj76ttbFSikBsd3my3u99KrgmwJJ79F2LuZpayxXHcKB8HiaAKFpjCLMLExa4uMD434r7niXTivXcu",
  "key43": "2X2pYQaVU71F6F9ci65htVPC9cGGbMatuEEiPnapWvZ3Kj1gdWwBqNzEtfFDDc9AeFoSCTpT3sjqq42apP51qDaP"
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
