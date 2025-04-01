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
    "31LUAQbfRSe5c93YTMVDgDUrqR7Q4p4bzdm4EDjXZriEKt1d1ComzU6sNgfMiP6TxwQ3TTCMi7bS6JQT1YGgFsyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzVnU4adP9BRrPS6gs5r5nXBw7AubmHMFfVRPnMvsQKW7ofJXFUkAWi8YHq5B3EQK47Z8mHFcA12fi4bh9LCKEn",
  "key1": "61xUZBh7HHxyfCapJgwYrKc8uw52P1frz4nF2RxxvwxSGaRzMirvhueAT3MLpwonbkx8mnMHeCrG1wfff7prFPyM",
  "key2": "5p4XiA4tvGMZVitLRDtnT2K5Atf7vTs9qx9XpiWJ7TG4atwL1oYBo7rveFwKLWsZ5oeZgzZnzYdFTEHhYydCRWDS",
  "key3": "3syDUdac46sfCJnykHNpGAU1VVdN53EHfgnCKDMeZZwPtvGmuQRa5eXwiRNT74GP84MpuCviFRsTHTgeGG2jxQFw",
  "key4": "5FgLvVDDUKs9GYsbzwHt2wcN3hD3TNuJuQ3J7Cx6j1GnLNdxCLxDKZDxDfmorMockmsrQjF4vJSvck28HR6m14RQ",
  "key5": "4YdEEveks3SmtHRTtx5YJi8z9A5NSJ9aUDLr22kPskcjyESPjtnTV5j54jeyCcRoZMDTAqy9TH13LCqHbkNUsrwA",
  "key6": "28yHMTbFiQ2ZR8YweFL8g8dPPqZPETSSp6oqoctkVGsFmviw6BQmoXnTZvSDbHUUc2oJmfXGC16Cqp12ZD9DcLoV",
  "key7": "2KRQ6XHyUd6nmSpNtjitRCGLZR2b9MLLdPndC6PVqT1gBKJSMy55xGjaCVuquzM8y7ksiuHYhQPEu9CqiJxU7ivF",
  "key8": "4RkkadtEBEGReotV3W4hYajwe9WJBnUMadNtpuYreZRh9tPGL24JHCLrN7dixLKR6AoViZC9pNkKcY11uXGFFDo",
  "key9": "5ZYGNrHDhdZiHDnCLuSPse6d5f2qsB4JiHMFFg52HotJ9xibJAe6aQWgApfk4PTb9HsuuPNsrVeQ42hBLQhvr3hh",
  "key10": "2PW36qWnKWaKLik8wPo2u4dqKhBLZnJLAZhqXirwH5TCQVSr93CcXUrWjDKvssJ82NdiZPFeqUXu6ddfEF8rMKSC",
  "key11": "4nDiyX86YC2iyR76krKvaFA8XCjyXU2RmgHLbcWqvjcH8Pmx5KRqFgxo4bzCLjc8aRmjsnZ9TZPxtPwtHkK6ZPBQ",
  "key12": "5vvnmwiCu9Cn3fca6zD6TockE26qGCjEaN6FhoCy6ycbHDnq6Uv6w2Sx1reb6tPFTXMZmBRowvC4zYebSy3MfpLr",
  "key13": "3ZF6zttVotUHPLBxqFbHELtsu57NqVX2XiHymh233iKc626UHGAn3ew3fas9C3abgq24BX8WmaKdEzqMnsmi32dP",
  "key14": "4yacipMyakxd7zQq3apnMgU91s2Zaw5GSs1RzyqbP39qe4KrZfi9Cg1mhDwbKeMhLq5YWwjpP2wZzHdjKToDAW6q",
  "key15": "3qLZsg9DgNvf1cFY5f9UayzoqLMQiVFRweZQ9UtyRcpw5w4BJiuzhXM8z1XxgdRh7nV9rxwf43KRJHB5KP7GLxMH",
  "key16": "2zrH6uhjK9kevapvK4Wx1QW6vSYrvGXMc1RjZy5BGo2Vua8MzhTqx6SjxQ62JXq6LwD4PvUzfNjMoQ5SQ7hdsqpd",
  "key17": "5L3rBkkVuVEz4nd9HwEYZKhGxLwY9h7SAENdKZSw4VqsgESmNypEVJhLY9FbSzdtwiDiM2sRwxPPaLUAkZjmWNG4",
  "key18": "2itdRMEt7WB5nnftJfZgE6Z3G4P8E4wZ1oZw4bGdaQeQstycWPKBLhUaKVuzFwoi9dnQzx3nDKihwX2wqNgGUKC7",
  "key19": "5qJw7afVGJ7h5EN2h6LWL3nTQhmbHfGMqHMLr7th5CNfXLdybZXaRuctmkAAuHhebdUgbvL9gnktXVnMcwuQTPYa",
  "key20": "4jA1J59nXpKtkpXWygNXk9MhgqmgkXNo2SfavkCNBBY8zBmAtMe3ZUE29jSKvPujsmccuxsr4X8kBGX9PYsEUcYR",
  "key21": "5BFLKcMn6gmK9C4PqmrC6hBB6bMbXAJ4L63jmukxwEp249PFCzynZCWkAjmxjSVBgzmduKBtNWrXF8RRvJcUvGNz",
  "key22": "3tgQnqgyiRGVT6eFqcUMQBNoAZJozNiXcXYErLY3z64nQyD66jAJppWCDyMV5T9m3r25qBfbb7YPaegFCHJTFsjT",
  "key23": "5F7REdAuhVzZjUpai8HwXYvps4eWRxAKcBEMwvWfh5tmkkLG2JrHGKDdPivmWcgxKTFXNNMaXt6wNwq9Z6bD16dp",
  "key24": "627rE8jr93HomgZS5SeQfBBuTFEoEpb8eH571DFBm6c8SoGNtQcPgyTpNohGrbKYV4zxhvLwvcmMTgiDMfMy5ket",
  "key25": "48un3CMapD5fhef3Qoj1XwVXxR76AA9isHBPrZthKhdgxSQq1qxoh1G5GNKycntCQ8gX6m6KfuQzKbW8MjS7otfR",
  "key26": "5JMaK42BkY8xTNKPjYKmfTGvt7v21va5rwUa99ZcpVJ5auFmpsCso8bzhbQNSKz9uTyxQUYbJnwEQFdjNLHvgQCY",
  "key27": "2L6WFxFcysqs1YS85oEQqdFH9AwFxgC8tFaxzzrMMCJmVNAJNSEsUVY4JVG8YbFLtGLaDMryH3RU5n8kvcNpjMyE",
  "key28": "2eaWPceqbsMpkUe2fB27sQNg6aGtdEJsssAV2tgFcxLe34ZZCpzvFpqAKtwctnUVncpxPKHebHpqfsd9dRnvDAMK",
  "key29": "2Bh33e9K3EaeNKsCFPpgBYgMTGWTHQ5J3NqfUPTrj8QUdX3xpQrWfSHjFahUy27YbDii4XUNT9bvCLpoqkbq4rUS",
  "key30": "qaroCfwWoZgFzpk2cvrQfFzroPVCnPepGDdd9e3Xo1737X9SAqs2MfaJdXx5DgnSrFxuyLwPntARmg3tfsv3uk7",
  "key31": "5YZckDCfhtdRHdhKza1WsehDi8a8D1WhuPQB2Cxa7Z8HXfmrps8Ai7fxLSWt2xCms3orEpzDtcNxJDe2MyTdggeK"
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
