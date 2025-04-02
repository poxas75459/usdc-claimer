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
    "4mJHNh6KX62sTELuhhr6kTBMYq6Ws2oR91wsPotnbCadPUyRy2MFgCHPQK277QzVmKKDYu5bpWPaPor9eHn9ZrCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wSUP7XNbD8xTLTmSMrY1CUXv3zJPDFd9pt7pM3UNPT6cQh8w84uCTtsxjdLBesDJLXhY8CB18NbWx1Zs9DRz49t",
  "key1": "2aDADid9ABE52dERAGNPhe6YwSC9CLnnVrqaEcfojsqnpJduDLis2kufnByKm18oohMiHGjTTmMQ3hCya7VQH8Jf",
  "key2": "2pfVnttCN4RYQFNtuWCHvycNiZSsVDm2UQoU9cxxpfWEubTbbh1X3yifas9CaAjyuZjf8PsmPSQxNHTp4nztZwZV",
  "key3": "5vJUEFmdbqtzQG7swanX5WXJNy1rpkdYEnJcSptUWidgeUqMaEPjU7FwAA1REc71fuDouGA2MqxqhGGZaD9G78p9",
  "key4": "3eVAKxkYYP7bjeF3ginprpVcxcPvqSzTmGzdtftD1kaM1jzgsLg6R7pxXx3nVd7UzqaFX15Kr56phqvTvMdFa1rL",
  "key5": "2y1zDGJewtVZAaZapeH4zX9nJRhr8AAxg7yL1Y6LjoQoDCoZPVi5QgwTbgtYNA3g4jX6WqRhTxqz2Wd3U3cdLteP",
  "key6": "55pUrgipax1rCaBSTJ3w1NprfQsgc6U6FU4bRpxjNXxMnknKvDakUpkSymBjH2t1ae8nYDFsTKyQ44r6eJ5HiVos",
  "key7": "4f6UFiKquNN9KWeU7NaL8wW3WXoPT8yykvrDCit2vmntj9kbmLE5GCWCPg6MQH9cFktTLaTXaHUdMqLbehk5HRvy",
  "key8": "2xYCDK69fZhZ7UZxgutPjKENpDAEAV9KEJTwvHsd4H5nkTM7L5CVBFPefhs9qHF6SeuL5wNp6ZiHgvu8aKUsHSgG",
  "key9": "4XaR2cELdWebH7toPuk3HdDvvhdHah1AEcSZNnih1na2Wp4Kuo4YRqu6w7vXEcjtRx2M3RJF2Jxq4EVxWEayLPR",
  "key10": "5K2rD8554XQfSbsEhCzCS9uN7t9ubVstLYGBmeAyjYmgUCgB8fe4CoDPKWrpxhTq2WHyzAfUMWwgStiaTA44fcum",
  "key11": "5scm3pVyn8fcEeXQ2uk1oMNtj9sEi5kDL1zPgsDSpRcYsmgR72JWHZ1u42LZDqStmQcTLW4NdJuW7oUL29EndsF9",
  "key12": "3JEBUB2EvLcqiBvFwWdTyQpcMgAiDCMwuacb8xF9VAFDx6VH844bw5UFwjVUDGdSQ9Z4wsjcts3QXWxJ3U1gZQtf",
  "key13": "5PL5tdBwwxcATQ3Hfejdj9omdwcaE5PRedvSKTVRKTuKjgyoftJNhMvGMUgfyVHfDyQzMcqvUsPwwdUBYZg7Vxba",
  "key14": "nJtH5qpzaHVUp19nwTp58mQ1ZzajEUwq3V2yBZRiBcXdGWwpZf8TMZwacNiZEzJcV4LhD9xicFpEsma2kA64g6v",
  "key15": "5KnhwWgzVXyNmBMhRoirWznFhyoNqzPV8hR2fYvm1V1mQRpzVpwJH44ppuGK1KjX4a98vJHpKudf6QxmBveNttxr",
  "key16": "2E4C2maVp4gQpYfYukv2W99gDnHpfwDaeY57JkdTWDkkW97kRcBgRnfrGp4joncT92z8hVoUFLoHkuZihfbuVH1c",
  "key17": "4iMJKFvQVZwTYov9KNnKRfdkUHxDP8rJLmgtjag5hm5YMvmbe7j5JeA3xEunBi8YaPbDn2SJFRTGzqDfWq3j1G4a",
  "key18": "4thREeCsap2nai3CWtmHpvb7zWQSeHVrC7VyetwfvV5DBNnfKx9HEkkKcpzxWqJpuuJsphdQPUsfkwvVutFwv48S",
  "key19": "33uNR1uGwNGLguUYNBCd5YGTpzsSp4nLXCzNbD4CzoSSndgF1asmPS3c6FnjX1nUd4MV1DhBvoDXf1GmQhKc9XXM",
  "key20": "2VvQhokJdPDr4CWeqitEhKtfMLCA68QJWELMwsj7WsMNr2fC4jEccRy2k36omRDpbm3qZ7DFb1gWFbhvyVp3PRji",
  "key21": "5Q1FURAY4wompzgaJHonLqRyCSPGf9rsm8WskRDew9ZpPp6RF9FBjs4bmDk6YBHTASF6dVJv4eoeUXEfeVyDxEA6",
  "key22": "3Gg4BCXZUMBufMy1y5y49CEhswPVD9P56oG5tAN98hFqoW67VkoXjvcrxTtuYtrUqZJmNSaW5DJp7UhY78fNkzSa",
  "key23": "63A9TPzYpdefjJraQbgDNYfis8Jq6KWW6DDE1iutxd1AG3w3d9EaaCHJqAYjbxUXTgzHgKC3wyDeiqNZViof2QgW",
  "key24": "3R4bCT6HdQNbqT4WTbkYNsMxwD13VZ7u3juvdahcfw7YB5X2rGKVL2N1cxeku65mM2GYGMmXNGtCw8unszUKtNbW",
  "key25": "2WBGx9hC2N1gAnDu1su8gPUJM9yEX6RwFu8fbfWUKrSnANYsXdfk6SZaAsFc5HuZG5VwRpaTB7SHiTLoBZJxaz9z",
  "key26": "6348g3C2gaTq7PtJzT15AEPrBL8cCq3izV9t5Uyc3jvLAzy2r8bL5gtsPqeEANgPb3PbHZ1V5g1gnxFC1vpz2Qt8",
  "key27": "3HkVr1ysXGPr1CsmvhzDRjhqyiLHzpEsKMazzt8fn3BapUxMcCMmHyQy4T48k9DJVg83NuHLymSjCubmSJCVyruc",
  "key28": "2oyia8dH8hKEN4ymDvpD6Gwc982wuN4HcGrcFXA3tdNtLmYK7aDYoNGEPM3wUsmj91bV644SR5a273BEDPKYNJvC",
  "key29": "4xmnyH2Lk3w9G5qKwiV42C13hxcKKZYdJkdqNfnDquCovnGJJW52xQoE8iunumSUnaBekSvzeXLm8BUDU7maSLL4",
  "key30": "4Jnj4SdyXpXquzgJBikB6dpCjuVTiBLJRLSuoajPijQY7dnGmBZZraBdJUYG84N27WAxW61CCJ5cGZerCH9446UG",
  "key31": "34GHi2dbskKiYUGe368V4YCsJUpNKF36kAU3feHUdhQqoRNUSPVQHoqGHcnJMGwrdFgPQJfqU9KtdwBGNqjy6pEK",
  "key32": "43gF2EEja57WGXgq9XbYWT8y7F91L5geJhdgNkFM3fmiAC4NJFhT3y9S8cFsEh6YE8ALc2LUYvwk5Wnv4JfF68YZ",
  "key33": "5Ctf6KACGpNf8hDvVmeJLcqdimWLu2AH3BtP6mfRWfjiQfiX1JPgEgqfJhgD2ac5vzAxnsz1UdhSAo9BGQsXMYzG"
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
