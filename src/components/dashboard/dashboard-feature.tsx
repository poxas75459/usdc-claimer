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
    "3yygU2vf9cBX6Ef6g7A4Ce4rBF6okvTWNAntm89hz2snkkp3bjmXGW9hMJMo5QwXNLQ8Y2PpgqRpjEfmGEbaJL5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jEJqV3TzqnGm5YgEV7KpA6v7UJnBQ5vRQHY5V58HpjijehN9oNRmazUN2C8VviGsajUkAXopE1mAdaFaPDEkkjt",
  "key1": "5XtASdVS7zdxdVdbw2KNYaXGAAVjkiT3FFLBrqVF5ddcjoKWDuezLxdWUbmgRkwC6dBKoid4d4wiyzZDRCJbfs1g",
  "key2": "5skU2Mb6qVS2fCPvJrTPDCV5jUBe7EVrhtwf1zg11RSf9Dd5aDo1fGH1ZHFvwqwcx37a4ZKN6NPdsXw66gs9Fbey",
  "key3": "3J42oEBP1xqcZneciZkghgYRNkFUxtTPGTF5US5Svjjx6S83KhCpQeyrHi8zDuVmrx5zAmcbBzbGZ98auXyDgHif",
  "key4": "2avnYBsELyFDiG3obxkbw63mqJg4RbcnPAK2FFyy6g6ubAHoasYedyTepL8bbmQXSgpNdzeqtaz2dpEiG3RygyLk",
  "key5": "2NhHATpjbwineVCaxH6twSVAfGWn1HiampqEqRhybgmdYi3pSGwSXHW2PdFRpfMbvRnRtdVRBeqQb7guZPAAXw98",
  "key6": "h7QcZtZNjiyMfkSUotKof1r8Ne86tvE4xx1wkvCN9HvusQ9Kz5Qij3w1xEMvDj2zrGGzWAKcPtnhZEt5Y46JQc8",
  "key7": "2jTSVMSbrgpXJdxWtJaBze3HXiU151nUzUo6JLHmrVZiB28aPxAJCLfH6i5tRV9h7HT8G4DKg3NyvB3oqjuWoKNa",
  "key8": "5CeFoZQKLXq6Phft5uo5MuTGxhS3rBLVW9QW4hsza9zMSxmmMigcGfmfCakw3CP7nQxm35k7etfkmhfpADW4qBZZ",
  "key9": "5wMG3r7nuxFQka876RJXpPhh5QdLgTcGaFXeRpiuvtgJwNfbzfxfRby46cD3oKth2eVeFJ7VRdos7XMGXdqaxWUE",
  "key10": "41WKBNupGEgPJWTm6AYpZLEpVteGgXaTYGdtn25qQwWRNzVFQFQUaGfU3em7c7T1KFpAqLfoLcZh47m5ENKcz2ZU",
  "key11": "35uuC62eQem7qNd6QHEDqFVkiBzwTNkpn7oKytmh5gGz3FxHna5ToL3cUdtEuyNHpuhjYDBMWypyKMCo4m1iuzRM",
  "key12": "5Dg9JPDUePjff24M5PXPUx745NgVUAaDAej87rMHsHPkJBMhHNsB293anxxgh4UVxAUUsKLtcttwn83deUeRYCet",
  "key13": "5nvkgiebQdf1qg4secuPviufmps39upHBW3f4zw7dNFUqd3GSJn7ErQSrgQzVMsRqpDUkfZuqSZSKR38chGEo9iV",
  "key14": "4s5YuojcvqEXQR2NW57Et4GWNHguz6KQUv5xdLvjCkYSCD9QxSsbKKnrtpfyhNMppJbP6nK6sfGGrrp88dYGJE8i",
  "key15": "bk6awCPyZNwjx7x4hfT89bhevkuY77xvhkMDq5uwP93UN4GYczrB3NRAZxLwE2iQ5SJkN7zNg6yHMFVXMLiYnn3",
  "key16": "3vQ8mbxXc1NQbtwSMQrSkFVms1kSCurFwKXxSMGwYifJT8nhGRCXLeqKKi9mnyJoo9T7JahDaN8aMAZiAEyWYx7s",
  "key17": "3BSX2NtMk3qdDGD7qAKoo3o4imF1hQaVrk1swzJpRSLT8AdGJYr6TTGBnpxuXTYiVDEub5LNVh3Xcv57wLWCfd7o",
  "key18": "LK4K8tJufVGCMoBgoZY4NLaRMy3Ld4WA1CvUmQonq1JhExi7aTd9ewNXgGKTvyP99mn8TTWEq88MKzNGhrfD7Zf",
  "key19": "2yUfNeXQjnEEKCDk7jCpe8W4UZh8fvdNHbJbJXtEo7UgKxE9RNbdYs2SoJ1MoVVagMZPhVrGXM4K8aPcc8rgHMuc",
  "key20": "2GUdpdXmJ3X5fEgJ9iNjYWVyhxotpyQKa2CSZEsvuwtyfzPyhbRUQtguXCfeREMYRx6wJ8UWsKRXhd1kBdobwmJV",
  "key21": "2isYWxEdbiEAFHGGtaZuHA3gtNknzK1DTvkszzi5sATdYGXU9bArXdDLTAYXWhLN3E24z7t75Xg6hnwCdaaxB5Ao",
  "key22": "FPGGYQ5qLC17m6BWsUWysMhKCKGEpNXFxamBdKaSwXKd1xXUBEnYK5JGWt3jr9hgPQ2rYDae8nyEpCV9mctvYrh",
  "key23": "3aaRhUbJxTy7LukJHyUpLHcT11oPX55oqv1kjJ7khoMfYSKn544usaSMQEuhH8yMgw6SnegpFCPjwY3JG1693Uid",
  "key24": "2wohZhB9CTnKqxhMe9B4aubcF3JdCzymCeLc1syv5AAQC6t1C1tNsx2ZE5yFd7xYG3We3GyGciLcSxjKujB74PkY",
  "key25": "5X9v8BnFP5XNcYAeHgMi9j6AKRGMr9nin4h8p477NXExuEB4fkxss2tkw9JWDSoiBx9gFXrwDQS5Sg18jf6Zejqw",
  "key26": "3LMjf9y8KBdnLkcLAtvzwGghZtpJq8ch37UNrWEjrHLjmvXKoYP4LGGo3ZjtvxvNyR6twjmcq1uWvh1unVc8M7nA",
  "key27": "4yMm6kQx5vbo1Z7jH1dTvJGxPN7mwPfcKioUzPZ68LNf1eCoy829YqBLXGUms4QTrbyqniGmqaMFHWi7EAvAtCjh",
  "key28": "3iaBwCtUGwsrzvQddkLFFt9UEbzKymLifBHhVytGQyJarHQFp9s8ceSRcMB7we5dVdGaYDZKjZENBwdHhPNVqvpM",
  "key29": "e8XWdjsqcHdnpjejgUfy7bk1UfaUNxfgHS5GFhqDgNDpY62Te48tS7vddVA3jmgznTx9aZ5xuNujADfrb6NPddQ",
  "key30": "5x2CxCJdsRyeyJeqHYLRyLWgwTJETXin9YLjJYMsWDWEiTHnikCUgQ3cBw9C12W8VbwxsKkLD1snCX9HBCgQgTBG",
  "key31": "srqW1SJo4pJKHVd88x1hKfGsWEq7Y5z8dRotvmSXe2KcykRVu133A5xGokSHu3nskQapbQZK5sqjUarrKFXncFu",
  "key32": "oq7STqk2beELeBdD5x5fWXYv84v9h5uY7TtBCxVRmR7QPWcGcXcaQHzoaknAUPPPnvuWoueFuP7TCDdWgKMepim",
  "key33": "5p1m5k7yb4XET83yZVvakKhhFTx3o5ubJcS58GP1RwteUgHfVBXGzhRMHWixzPsBafGfuF1hDaNGNAXKRnjNKZnK",
  "key34": "5AeRqDuBPgjkBuAEQJB5VYnV1bieJu11m4eBWCwo3cAXqtWXaHkJhX3jNgp2wiDAMu39zkFsRd7PLkjhqJVVkRaR",
  "key35": "2FW3RZgzwRmZuhsNYVaJHyc67Dtbke982kGUPrPXT2hvaH2s6nyfDZt3SfiZJoENrAtCpN4M4VYoQg8BUbwGzfbL",
  "key36": "AUQ7wjkwMtsfvaoL7m8FE4qy5z3Pq3c3gcqnaYchhZ6uWLZXN8TspiUxHTCNGPLQHWqELsmhRiMJRw71iuDgDfh",
  "key37": "2VD5r5nSfUpMhddkUKRvuh7Ln86xNQgQjoo5nGpSDGtYcvQJgFZVAX4Q3MPeydDZp6UmobfW8BVisSJAGcHDnMug"
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
