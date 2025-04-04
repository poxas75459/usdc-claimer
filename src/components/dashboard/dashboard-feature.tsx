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
    "4nNnie7djn7cZvgjr8HoHpHniNHPTeCQdYHT2jz4nzoxSCScfYs2zmg9jPpEVPAjHrwsMEBsWw5FKMhuXWuZ3pEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vmKTzvj9ndcDch2tzS1ZQEog8DLLF69QgwardXjhuv8hVeszcu35kt7wfKCVSDpnNJyW7SRysL5YVeYBBttLHsv",
  "key1": "4LcaLLnSrTmjXtynyTmGPPbzAQggi8Ya5Qk8dFAYQ2cSVD37AQp26kLBixSdQN4tNVUrhzK1BxTZe6Mgk4KF5htY",
  "key2": "3XHkLeHFGf2LkU6buF5XRBtmGPrUibXWh4iDcV2CRKSLf4dBFP1uddnvMcFW4LjHdWfeFvNzQ1avdTSXfThJe1Pw",
  "key3": "3ivSp91VDE3qEadSsjM4vvjSfVgiiTzMtdFXpjCtNYkcR2dVF5Z8wBLzFdsCPyi7Tmr859TnvPdPgxVpKKn8h3zD",
  "key4": "4WXnnYH3nvcgZVURMsbWcwGVM7Fz8wTiHqojhLg4A6BL8fgcPBigYPjTFM8GvCLefyprY3jEB6tQAMN6mqnQQgAd",
  "key5": "5wGZa3hKdcZTQRVmk4ttsm1biLYp2WiVmYkcPHeuNpFWZzLPak9dvCVnLhScaJ7sveVwzixjypce8u6aKu4txi2h",
  "key6": "3tod5sVo9wL8YAsqTuu16euFd36W4X5kezW6mXsoJuZzxo7kHgUW7kigajnTmKuim2YjuMk1sRNqbHqv7z8RWaf4",
  "key7": "2nfDeqP7LewmmyyZjVD5FGoz8KBTswXKztaKqawQ72UE7TiTh5WmQoBF89z2vaL8LX3qGTNw4odiAt9DWa9kUmrW",
  "key8": "4CiPbRL1hHPrKZqKvfsdF4WyMx2AgTi5yBJBAePBiZibbAuNBaJ9kcw6mfrPafQUhpYP3NewgusTtawaBo6xHVSw",
  "key9": "3rLwu4YgdAKf1xhP34msAe64N3UX2tex5B4VQ4vS8P5CPTGECPNVCwQY35Pg2bioaWiBWNhEV1kM9LcVxytcdCjE",
  "key10": "2ZP9ojSa3pP39cb2phZtxQvViit8RoJnZh4JXt83iQWpPJnknpnFNGQCzN4GznPcWMMPuqB7TFBWzuEwquPokbJ8",
  "key11": "4ttifdsQGgKYd8pvKVQD95fQ3YuBoT3AysB2KZ1uA9kYZBRKKvjcReY89cpLBriiSo28VMsDzAg9zTWcxyqxtcLG",
  "key12": "3cBd5wjPiBTnpeXB8JxB9AsqyWxzXXAgRyk6LLT47NtZmMwBDgQrAXRt3H72nMCu5ZPKiKFMdXAXWPkWuZiFvVCD",
  "key13": "XUUkpUFqZB8odkU3sW7TFWvTnWF1MmpVVYePb48AA4CkxkbpGjX6S7bDDctukQ7UBfbQiGYSvSUqkNEgTZXW9nz",
  "key14": "3Z922WNK1xiKwtRvmTtMVpshEJwpJTKdf7mvJWKoa1BFF9619r1KvSJbdsKfLRQQF6J7KYJVJ19cLfdwSD1f4Cd",
  "key15": "285jrmGKeySU2NbNLzWducX4XJzeQSgxJivXVsRsFofUL86LLfi8x6Xt3ZJ5zAfo8T1hBJiyecN1Sz72FJMvUDQz",
  "key16": "2BmLUft6XsNY8kkVvvLgi9QvisYtsTJ1RmtrpBmB9nPp6aeqjdvvsXqgT7LETvjC95qTEDH2jEpHCpnQjFVgfi6t",
  "key17": "MAjR7T1J4U1iTqvRG9KxVrb9cqyQirFc1eKuqaCQucD4CVm7Fqh9BBJxbTyMha6GMfXq13tHN5fKcZRG31pQFTS",
  "key18": "FFpYbheeYd5taGeqFKHiPsfRUfRdhtjubniz5ebuvpPntgMsH22kQSdJhHFPsH6E8ePqfuCt5KPUu4eRodaYM3T",
  "key19": "31ZLE37LdpUnJzYKZ1cwpsk6VAM5sqNxHMGGVyzHADPKTftGiwAhbe4qc9Ep4SZ7V7pTUyCHHBsN1QhF9SFEHK3j",
  "key20": "4kz9wzwojxkebFCNpD7zxe4kA3GKGjrMbtXbFvaULPNFFFe23RCRBYg8VdDaayAU8tA1WQysY9e8hBK2tjr846mj",
  "key21": "3UP2R41Mw2pwLJmc4kNFYR511wrJ3FhJXv8JrQJJaXwUV7HdM689LQW5aya4grw12JQ6kRfwVQPWyJreTdRBZPSU",
  "key22": "5YLkrQm4MgF4sg4uDyAVK8Q3mdCDM8nPymg6anU6oxBUhszWdQtdPTn4tLxRw4VMdCykNaaJUpry5LwZyeHFYNa7",
  "key23": "3z6oZu8oCmUQYY6cGagRiiHKww4ziftis4A8DoqFYNdieygaR7WK4sE9NXRLTxStbaCchcyXRKmJ6gk1fBpbKwuc",
  "key24": "4HqRnazo6qHuws6MJ1TKZA2VnKmiwnc9aD3Y5eCSdDJe7Bry3p61oyJE118pzguRtcx9jLjd3KNbebS9QWfDZ5Vu",
  "key25": "3Gn6cTgmeCzFQPxARUsQ5HHJkvwJvND4i9Smm1w2sH1gK7TTdpR7V2b1SF7ggsmzifjkZbPd3bK7ez9KcvKZ3MD4",
  "key26": "4FgzDzTUTpEtn74T2UvKzJrNtmYSKjxJNj36MbraHuBz6zJDshKrxzKnozXfXPiQvGtJ7iiJnk1etjas6P7vAH37",
  "key27": "3GdsSrDnqo3rQGeAja8CnJGL8F1YWdWdvKzb6Gyt3dT1SfrkRLsbSVA2RinMqnctpr1YEarfXwziG6RUZcr5v4aN",
  "key28": "5mtDyZiisfMK7iVDe6Dkex4AH1D4zteQKywipeYtqaKx2ZM9B4QLvj6pREio6GBpL7Tqv3Hbqtxt6pyTNwbhPUg8",
  "key29": "5PzRDJ5gtn1Ho4CkyZynSxVw5h9i8WqGWpnkZUDAnV9rQeDmNpmsosQfqqVCcopBrX13BoAq6WoyzkFuz46pwXfo",
  "key30": "6Kf2vsTN9iWmBJSCkYEgtHfLQ1GwCQnAGNeFhtzjhGUUFW7dpUksLBstt113hjJRGY5qBMVTVXMdjuuf9oy5PmB",
  "key31": "5Nb118xKXze6BbpGgfcB1AHrN81FghCaPvcUh9ni8mmr1vP658gB8wigzwvp7x6GyBL1nKVyVE4fvFmV5siMhgzf",
  "key32": "eEroaHBrPH61WBD4MBPMgwmQ7b543PMchkHNw8Kz8YDTxz2ze1QhikyqrKtxJGtQDfXaj7S6oQcCwT4xLLKrua6",
  "key33": "3BAr8a9aHUn9Z1hNoSeuiwEjd9CLGQBWyDEZA4KNLQXM6zid7imCEoCN9eZrDXksYZaT1tmy2BEZuLfWXhCHJMf9",
  "key34": "26sqaiv9n1LRoir2BSEZX73A1m1iK8xV2FkNndR9irN7WmYWxDY9rmtHJxzwgvPLHQ7jCAM6atv1rCKR9gJVAMCv",
  "key35": "3s225Hzap89VXP8nEayXMuzAzs9QzBPaWygTpXrFjWmPmAQutCt5YzQvJPGRVVNf5oygq7YFsyNpo3jf95Pt6CYX",
  "key36": "5bhgw11JEoaPZGwgzfcSPtBhrJZZtrsNq2piEcFuzzvpZaj9xQ6y4mziyXW68rJsE51fSr5AiVPQApK6EU3AX26m",
  "key37": "3Dmeqw2P5aAqHCYZjSsUKUzSM3zXGcw57iQTZC4TW1Rh9ieKyB7x6uvmDTLfPNid9kX4fiGFN42LUPtHfrtgY12L",
  "key38": "3hexK6uPSNmZYPWfpeS3DvngMYrAycLfFmmsL3S5m56HnPfTtKZeWjKKC6UWkXziwoHw3bMoMzP3TRDUHXXDUcso",
  "key39": "2JEopkHZa2Q4BasEfwZTZQJwNZAHYY2pf4L7NGQpxY5QZsjWAG8gMSFFvG38GFicxi4sr3uGyvKRCuEJA37Jb6eo",
  "key40": "4hwPyEBn82t45FfUrCdfrjzHcErGRCh2FXcwHJubLTAYGsEryBWiUg1fmBwRiH1Qnw2bV2m1xApPNFfvw2bUKLjq",
  "key41": "2gBQncVrFH2MwYZ75UPXeNCgzbCeFUrbQN2JBU83GzbY57c7gZzqWM6NCZeZTk453oj6CjFiJqZvv6RNpiPnjkCG",
  "key42": "4X9NT69itdm9eDA6hzCsSUH9eQ2qE86EjDcuc1nrGggAUXg4uCpXDyu9U7YKwaegQQhF1ZZgyWxejRoDC2EGvTpR",
  "key43": "2PwpB2gnkc6NBb1PJZ9hMe5NmM3KJpxoaNd9zwxMTeaZaWJaV3DKyxoAkwT8sMtnkmCcVzGmpiuVLkT2bwFMaCFn",
  "key44": "5W3SEsfZWgxuZ9YVEwAKniGKmUMabUkp44yqTx2dkeftK3c5aXVrUJdiCpcUxY6gjTrzTpBSjpCkbnUszXwrVHQx",
  "key45": "y162AVXiKpECBDcqUrkJxypzmCk2FD4uuu5PzbD6bKq8BsbKY3DWvD2Kq4jfiN5P4mYW6gMw86gvUsgMJhLMz75"
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
