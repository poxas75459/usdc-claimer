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
    "5hjasMz8sRr2CLJtz3SgEVPaRfTdTCgLiSBGy7nB7XqjcxKwWcBCxdt2YbLsEScjrZxUCGwsVZJ4KudDbKpUTC4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZQJaELjja7o3KEJnyjXkqgG9QdsqrXVhpnHyBAa8LRsWNLDisWuMpA1QcCzL1AqJG39i44z4pUeXBUeWad9zZe",
  "key1": "4tFZAuKqodA8WX6SmU1TndULJGGX71ye6KbtNCe31vhLXrBj4QCkHMfBx9rjaiLLfU6pQXsY9hD5LFBLtinuLoqq",
  "key2": "3WPmBUM71CLL2zR1eNZb2XjScjYGNVsXqkMmSiNozjTccTWpnmxqebJBB83NMu279Xv22ToeeRFgsNUooYyBB1PZ",
  "key3": "4G9Fy8Z7WTjtHfP6tbvWmn89uZsF4HN2AirhGJZTVJKfHjwNYMJN29eJQBo1BmMu2TzqSRScZmwFHH43Bqzmqid6",
  "key4": "xVZovYQD5ns5EwzKd8geGadMCQvYFth2Jr5EEvz4h6HTVobGAhUFXqh6qFvA7dC3wHuQ5QcHsH9cVXb1YakBi6d",
  "key5": "5aU5AS12BtDT22t29d1azeV7S2AJJnx3BGdUvRtpyXF1YHkDkN3LDxuCK5YvoEmBFDkHg1D4WqXj4eRX5KiiDWp4",
  "key6": "oBeCADCA51V3UFVS26KE2Jj577dpBzN21tfJezyCk2xz9ssbyFWJor8VHKcqbEASdrE41Q8X4vdUuEP9vggZKHj",
  "key7": "wPLDYQWbKWNZ74Rgkye9rz6zWZu5UekJcg2FQzNNgwHBHkkAj4MMHNwTGxQQUEMWYTKy12XE2SpMmTio16aPTee",
  "key8": "5Y5sHzuyVuePmHYNpv7VzveNXNFwjCk3oS7bGpjXUKRQZMnAzVFpyGGn41nNf6a4FjZG8wkLjSMSEPFUpkGhYBkB",
  "key9": "4nSJs6Jia2KkVeKjTJXBgHhHyCwMUjCpG9YZxpwkEBV6m1WGha8bBF2e9UJEdVvL7ZvV6myvt1rEtB8eQudVQVkN",
  "key10": "1EXbnqSaswrZsPGsGYNzYJpBvZ85MwqZghdFYC9Dv1Ece3TkiJ5ab4yJbVnk35HargpBomUHMzzoFhdEVMVnCCS",
  "key11": "2FBVpPFEiHxSwpQwcpGMhmmBE7cnfH7cVXWKc7kQzaQh5HxzvpaAq3t8ZZQEgC39yygmzQF6DV5Ecr5Uo2Hddbu1",
  "key12": "4EQx6sHL3J2n29qPwsMcigeX74eEzeyv369jegFf9V2BcDGtwpgVFBTXav88LTVN6HMRH7avyMrGWNrhaZ6y8Svu",
  "key13": "H95EBDSYPVU3knAroYHPGEf83DGD7dmVv1fLradfwfkwEBYTW2UNe4UbZihxeKjyj2LLiCABi78KphyhxzQ1hQS",
  "key14": "Y12eJv3VZ5wHZ1em6sdAAZyRPmijyj9iaR1wpVVKX7oxvippDzaLR7rM2rJJukhokqQu4hNmKsT9GwbyGgNMchP",
  "key15": "4iViq5YFXQBJ2PAURWstkdy5HFckWDR3ZaKtND9swRRfhE8GvW9dUaJk8pMNEsm22EWCz5eTwVsYJVKdwFMJctjj",
  "key16": "2RJXRpsengybxkTdjgBFRSvFLfe5Aiz8PK4s36uB6sf3cq5ynpdpGgQzk64VeAc8zKeDyNmpqPiXrYV71kWMZx5x",
  "key17": "4u5u9rKv1f3K4ET4R2BcNDPvB8ssuWetdKsdcmBbe9veWJmbiKGe5bnZgtBQwmvYhzPBfBip6aoa69gXjpqWHZWE",
  "key18": "2STNQTxNLkuz3syTuhTd64oRiq1b8HQABoK6TzFCNaLwyCNWeDKFCew2nY1dE8aGt4q6wFQpMW96qeKRTG2nTtzi",
  "key19": "3Q6gKwLeWFK89cgSEsa6FtDJU74F6TFuC2RtYR6mdzzxCWfbFTEanT7Em63wCAwS9LMAwd6VU1aFeg9H7VKDQYmG",
  "key20": "5b4EWNx6vu63tPHQh7YvXQ6YZib8gPJs1f88gujt3zSUTL5sUM7yiwzEj9NjUHkLzi6UHZCdaTVweHA5GQPPajeC",
  "key21": "3WGk8ji44akfSSq3KztPqtNt3faXfHssQhnzHcQeGQZD1Ui4tnXiYLR9hvc99j1aN1JTeEt79HsoGBJNAPChqCxX",
  "key22": "4LJNVV9hToy1SNyAkfwYaQandoxmXhTrWNxNaMFrBwbyntkP2BNNBnZbGReV1Q9YsLEY7Wx4X4LAcJNiERJXrXKR",
  "key23": "3ZxEq6mzck4EWMechfU5ySFh8KZEQDiyExsUGcpoUUUrYyn49QrvRJe37kqMMGEngxMaE1aYdA2Qf3FJnCUSJZQv",
  "key24": "3RuWyfsnovVjzeBXkRWHt8bMyioSKP9oBMh3Cumr4C4PMPiUR4A4WG7hYijmxMgjunmyFhefYDKQgwrsjgZ6BTUy",
  "key25": "2nSLrdgs6cDHcg4gdpKP5XCVa8hLSfkyjrC8K9YD1cegzaRnkHp4PuwdBJiKB68ft4qJtyuhuj8kfEnXqCLuhyRz",
  "key26": "2UcseEqm557nsEKrCB1c2Z7WUWSBsuxyNq1vcxVM8PRTjNYXna9KXMiJehKYoWXnF8CYbXAfkzJQu8Z5iC9NuMZC",
  "key27": "5xGHe4xnRMXsJmg6kJzAxGn7bnga3tzwRHFu7CySxumpXbhxonwP3v4aJnoA7C3zVuGevChfE4q294kBth35A7zL",
  "key28": "51cZEjbZXefgPeWbzMeA17atVhqPJmx2sgGPujdBe2Ui9wLhETiQnoE5tTaR424U7m23jH5g7wySj6bQkDF7vAGk",
  "key29": "2jzdmDvKRcXzEPDyFpXJzuLvvs68fRQhMqE3DtV1DNYem4JK4bJJ9jFPMPxLQANYJFu3BELsvefqfoczAVpgvcA",
  "key30": "4YXVKT3QM4TK9Kphbzjm7Xn6nn1qRAi9UkjPAxBET196ZEmMYPxdnx1hJRySj7ZYboNZDjPVV41Xb8UgbCCBSxZ4",
  "key31": "5RSfM7avof8maUzT71upYYECfWfH1PcsVmG7LWALZfa1JbKriW7JuSHonhmbiqg8aqMgYS9yHu2nL8KkKv61M3F4",
  "key32": "3Nm4M3A3iDPa5V2EUiXGnNfxSD6SjuukwWnTY2Cmch1ucCHf5hnQvR1jL76pJ8GokS1nPfMnXnEVEnSrL2G6fY6A",
  "key33": "2iDAaGn4bAqubPQwfQj2fnTwU5gxDD4BvCZQyA1tBCQ9fX5yrib1uJeiG5TjRih2HtTNZwcxaAjgPdBPN9nqQMd2",
  "key34": "5PtUo9HasUXN3ybvwd2HCmMEsvyqCZEWy9AGDFpHdn28CvywdNZnQWrBKgLS9ULCvBCjBYmsXg3ZySbXiNEWmaq9"
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
