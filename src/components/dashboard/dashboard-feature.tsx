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
    "2jA8KaMn1eFGsWYDJrt8o3ewDasMo6aX44rL6LHFXrH3qjRgWC2yYYp41kvYFrArYRueqyq1syzaK4hpxMbd3uUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52eJBaL1YjBMhf8xLar3zyWcHL5NqYShdsq6QWnLBuUf7bfThzhNWqfU1xMSy2dxeNZARmAaKu9Vxrjczf1xDynn",
  "key1": "3X1YVny17eBFm618p3axj4H7E82PtNddJYVajw2X1UH98jSbHBc37Eg9Lx7ets1kYkfquyZ8dnJHFTDjjixcK1nV",
  "key2": "5nLyoqv6fL8h22PtzCpNoDfwnYH4ZfCiXfZVgGBrjzuXEuoDqpAedxWPeRiKkrBMDLYVDhowDEsS8MnnBENrjDJy",
  "key3": "4AFdxHrKPUbGdbTncaKmyPA932cS7o6nyX28S5AXLykmdneiphU8b1kNCMp3aB3ueCdTsnuM3EypxPzoQcFTov8F",
  "key4": "2s1P9KfpkttHvnCVuM6HQkTduKqsGoMXk6x9SwqJ6T1KhJWjj4MUBSwktywnc9Ay7Bow6AVk4j242JahLgaksvE4",
  "key5": "3PJFJ6jgKHN9gWkG4pzRUqsbcQYN2uKnDAGQovDk76KBuWPVL34kdsjDG4ZHnygpEWqFPSQ75SLSZZRF9cLEVzZp",
  "key6": "3Qsho8dCaLnh8VrPJGBE5eZzmBxS4d9BcwQkQVMHHYSkMKpSD2fQn6fcNE2xcGGuPewaFgPdL86KFxVgZJaUM5Bc",
  "key7": "vxUHwa9ceYzMveSzvREMfZn11pNqusMTNUaEka6Xofu6RHL7cMQ6UrwSAbVjo5JFMZwtFX8akaJSWvnwSMdmofb",
  "key8": "6yfEv7Ba2y9epd6eF8o1P2BQEPCip9GEyMpkKV4dE1kyxdBapw6A53e4eMCWQhyyNoLdBcEndE359rsCtBmxh1y",
  "key9": "4dSNC8LZT7Y9nwgxd69rtgomJNBDQkJDjeczy6RmUDtuCqHtT5RMZUFnLshnDwSGGsqTYg3NY2q2dCkVyTd2VLwR",
  "key10": "2jazSj7d6hjEbh7LDo1zxoYpYFk6ervARvphdwUiLr4GBDAZnPryupGjBEzCDDDVPQdLtGu9Q39T8MVLPhorU9CR",
  "key11": "2TBE6TnvGMXvtAPJbmJjjY8NjQeQ6vMMbFih3cd6BTg4kHCGLvQ6wk31ym22FCburxwQGffdhuxtb6mvFSgrswM1",
  "key12": "5yLdoqc9q4DWBVJxnsJXvxDbe87e61yJk8GYTcF44rvHKYDAePhcbJwxx9jFmiAMKBm8D8f9tqdM44yTMHpqcpqR",
  "key13": "5FH26womZ4w8Z59kQg83BMgegZx8khjyFawXDXSQws8wHm5XTqUdKAh5AfwZjJizeahHXjdsmBTsUP6ou1USTUwQ",
  "key14": "2sEiYYJxVWKy9po6qZGep7enNTqKAYeSb1DWQKsRkDijjoDhLGqKLfNrpq9epn9GxBpLhsTqanFth9JpbrFSfVS9",
  "key15": "2vNWeUgcB3NjbnfpjUB57VqD7niLGXkaqft5L2GCvFfYimm2werR1hCJ1dRSTr64jEZABTMuvkioQFVWP3Ksz4N2",
  "key16": "smLPNADfbWfkHr2PyDWBAE7NTVQPKZHsap7LaooYiihgnrxFC16BdZp3dxxM7vjE5fmHFP6qSNtanjU7oip29fv",
  "key17": "5zGYDi2i3pKHgbZTWEZ8C3TZLe1gS5JyQVADUkiumuM3tF5HQbSaqKCzCQdyuHshzKAXFtJZHPMC5J7aTbhYEEDY",
  "key18": "127RN6dYtaPwYFZZmh59MeZ4BeQrf9RdXnY9sS3Usgzu1SQXzRSoieqjksq31gtZfmym7A7vWfYMr2Pb4S87Uarf",
  "key19": "4frZNdGuQSXvBCMptattjqdGo43BfWxzTZCP7ixZsCqzHZsRBVTAUFHSAkFuAzJZNf99bVVKmgKFAmhD9uCmgVJC",
  "key20": "2GpSPUJdnYV8K2asy3nHgVv3xmQemFywewQyGrqXEMLMpJ5EZSEnxH6MCFfgjM4nTWWc1Jkor4uvcJcFk1fLTid7",
  "key21": "4cqM8sHh9vMpiNS6MbMMPsUbeQPKoJsKFY2eZ2WBQvrc5JjWUwn9es8qa6B9N6ccsTRxGXxto7SQFvTKSZP4pNyv",
  "key22": "3hU31LXa17tkAAwaBK6VSRW9bG7ir7sgYFQds1Uq9WHcJoVtqpVT5MYiUqbVPFwwMF8MKpuJWSAqENbWXZ1kNYML",
  "key23": "2sMitWgBBF2LBscRALPwjegtZWjGHqKJvUR4eYinsUPvrm14ueQVeQamjtHckCvTqHNbJMAzzdrNxoCx3dawNDQW",
  "key24": "4dXYi8q5NM1g7TrhQyZeAUTpH2HgK2dPGcfFCNPWVkNGYYYWfHru8aLyyAupNxsyFXep5MuHqBcAq94fZssdRDo7",
  "key25": "4XUAFgN38KssXsnkNuNDfXvgaP9rkeD31twhy3Vf5UGL11jLxvfeCw8VffbjwgnhdJb5igKW1Ss9vETCf6H9k97Y",
  "key26": "4fZ5QiMSA613drqsVRQ6z3TkWws8p18z93jpRvnYkh3tRokrGbZ4XmrRmFF9SqgRkfkAfgDQTjTCrSevEsrVHAuy",
  "key27": "2KGJC1krQ3W7EQmDH7Qap3AiJg3zJ9FuPB4HpGzdYicnhbTTMKShcnECQAFvxngc1tqNmGoczaCv8nosnyYuvNfg",
  "key28": "3VQYoC5pfLMBuTKfK5ZPVXfiPzF3t4fygWf8nNquVuY6Yg8Pn2wdV7MWBzCKuL9a3pf7dch5vjtHCbmX8aQGSxiC",
  "key29": "3Lc2nXwrCs1QaRtZJvbzLGkzYdSGEduTrLkjgnTyfnKEsSjjq76caQSU6AfeC672ZyqarxxzPA8zi8vJKkJR1tNU",
  "key30": "5bh6kx6wTN3kYNy3xBa5Ao6gQh7LBrQxWBKbyU7xrLb7rSeR18YFtDF736u8Ceinvu84mK9UzMyhSDP6pL2eHk8r",
  "key31": "32qJVBESCCYgjoLUszonJtKquKikJD8yG4Ydsgwwn74yrF3ecBJRfnFUsT273zpoREwTYF2tvCuwAsALWqHnZncJ",
  "key32": "4D45K9Bmkb1rwZkbH6jv3xHFuspa8w6Ye9EsMrphSnAE5BTZR7LJupqoSsHYYfjbxh28cQhvP9VT6Jgp9XuY6gzQ"
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
