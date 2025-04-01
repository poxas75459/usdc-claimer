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
    "5ASrGitLPAmpVqsQAGKEWksP5FNPaPfpN1VNM9sLWLsQ72eTZzkejGthpsp6AARTdBNHdWiENgwpTYnU9vw6z93b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21dkEHXg92F6L2cp1fXShmNpmNtKSC9FKg3FFj7c2u7dRhrCCoaNtFNqBNmEZf68aBv8NXW2MGxiNCCY1JhtafaU",
  "key1": "29huEDcWUHwmJL17rYssdL2vbNvKdQaB1znBiKFuZzwpVKCBLehUvvbip3aN1Rhbt9LJ8UJY2j5vT1XBv191Bcay",
  "key2": "4JfiCa2B1ztLBfrVmTYCRf4n27wG6qjRLkC8AUerbBkwrEty6LYEYuw42rYHbQD5trNo5drWGrG63Z8VVKtXHP9q",
  "key3": "2jyoMKCPRsjeXgBPEzt35WhxgASv1ryvUPkZHG5eeeetZbvNGdeNDqKmi5JyWxQxctouVfPmfs9Syf7PsfJitMRW",
  "key4": "5d34YN5uu4Q1aZK6eDREePSevPsArJxvMGmhZbQjydM8LmBPdyHDtKys9yeFu9byzBGNLLg8aVbK5J3K2yBUzpiy",
  "key5": "439F1enQN2ZDa4nyMM8BT5yUJcGuwur7MxdXU5zp98ZyCXeDHrRC4vs1AVa5vJV4dVRcg2DcMMnJ7aPQMMiJGroK",
  "key6": "3J85ZkSa21xoHNpjjQ7qZY6NcrW5NWSVFnAZP8KJvqeHAgkRSegCvMTs6y44uwDCE9kBBJnA4AygDYeaPXXrEz7o",
  "key7": "5ZbFttB1ZKjTTgstbPMQLu8Xpz6uE7ydVadDKUL3EiY5zFNp92vJ64yxZBhXTGGwyx4gkT5nZk35HXp432kinu65",
  "key8": "3DhEXwiWKJbjacK8disfRMqfhFnF8N1U466fgMMrwR6wNzCf3hYmYmztLVZaBXYJrvh51xjH6PGKEfzK2cGKMGmG",
  "key9": "5sXLqEQfbCysc5jHYAuDw9n677ssnTbC7LkyEsefTLAwvKEoXQRX58USVbeio1TFQjPm9ZU8avW3f85fN9PzWRmY",
  "key10": "3ZjRzF8yWrmcW8SWioWWW5t77cJRPZEu3Gew7sEyhaF98jadQhffAXYfMPivjc91hk4ctMUEmJdgghVD9x5oL1zs",
  "key11": "42N5d5CPT7HMK9QBCMWWYSoLX3UGfhX48rRuLg5cAivzZ6gHgZENgtZKn5yzDiuyd5sTKHVs21EnJ5QD8kM3GrTa",
  "key12": "4NBxmgPNoYBz6rgqxU9z4iJXgpfQvji9uZsz42igMMxe5BC5rsuvPnQA95wgQZSS5n4JQyt3B6mk2qQrRCA4q4uk",
  "key13": "3HxK7EAekAkBbyeVpUW27vSvE1Um7NCa3CFqTE11Ud2NthGb4Wk2GQ414yAEBpimro1n6d9rFuhZytUCz7XMXZZy",
  "key14": "32QgaYziXvzJoS3wucEcAVpMdT1KTpSxZau23nrPJ1aj9fmAazmdmzHt9qCRBe1ojVfHude81YKnT7B8REebvR33",
  "key15": "2K41jSZGwNT9qBPnts34HQ2vFneQ6EZ13io16L5H81nJn9Mz1sRceQxgKhLh5UTtiyD9SMPZqQg2fqHsARWnENpu",
  "key16": "3kevoU1jipYM3qrB4678AneT6qNU3oHiWeY9f6jWiWKNwGuf85jTeeTyWNM9nBgBAPGn3vNmHGteauEo2ecYToAf",
  "key17": "5bTAAj6c8tX9qLDnrHQH75pFArqB4BKLQh1oKJJcK8ETJnRMQfQvr1Qt7Uxwxegc6vJHnr8MN1BuymzF25c8UMUb",
  "key18": "Nqhg5YU2wr8fGwjLr2wtP8i5sp5aUx63MZh9UU65e7nd3NjifGNsdnuoVN7gFhYhzsqi8M7bFj8BrE3jLWjf8z2",
  "key19": "5BHn2cbZBJBV5HYF2VVZv2MAJ6d5AZTCRNDWzDUdKxDqTbZQc2oFuvtLhAD1MT2KmLo8WDU5uWpLTx1iPVojWbW9",
  "key20": "3h7qiFn6q987pcUgofxVQcjoJ618guWJbANwe6mg5e81iKHn3Mao75n6mz7kZp4nuedL8yC6LLjYGqkpyifnyy54",
  "key21": "2VH3FzmBwLrh63TtXEGDJY82HwNsWizFxE7n84gKPMMhUEHb8cRSJF6nKUtFjdFh43VqvpHMCoGHHDjSRNgQYpCR",
  "key22": "4Dcnpimp1Nvge7Eejvef6we8xmSEooRcWmYhVhkeqPwMwsSMrAu4rKmE7KSeuFeswyvHWLT7fWGVkPWeb4MYgMYJ",
  "key23": "5q82U6mgR87o2pNUh3SApuALB9DaZnS9A3tv7CeLBos7NxSrXh1FMGX2PFRNVcBDVHxfwGkMEdZ9zEcTteT4NWRw",
  "key24": "GmEkZwazKdaDM7A6Mkj3jqadK4zwzv3sZQaEWa5LEsvLPbWYWrtyidovacXfTxU9LT7dFyVKn74Yphg8ykrK8s8",
  "key25": "66jsNw9MLUHVwXcH1AaegfoWbUwpVrqsy1WUnqEDZKbwbsShARKV6mRri41oatGakdwYPG27bWBeob2kgyC4qKcU",
  "key26": "5626meQ8hjZhRWkUAzoA31SAFwZF5cCqwyHCzYosTF1CvkcUKpdacCyEBtJhtuTaWF72WFxLhYh9HYdDqoq2Hs3N",
  "key27": "4mg24yW4EgStv6tCsQSKzi7yANv698wmcnwitPWxwriRsuj6FHNoNbjCo6QuPgmAa8DAY9KysDcE7TwiHLtJVew7",
  "key28": "4VNwqUAeEDgM6AhQu5dtZc9AtLL3a2XMkMAazkzCbRnjEh5Kt1GQFNYYJVxAj83T9ysd3pDUyqViSUwxbK3rer8d",
  "key29": "343vW9oMFkY57U8WF7eiKrVMaMfyax5eMKZ1veRc2QAN7ZdPAjH8uhKX73LuqNmqc5azphPPeaMn3rBR78hKDZiD",
  "key30": "37Xb8W6nEjaNbNkQgTfPsstmAxzgbG4FiUEf5uek5kuwgCyW6RBjud2BJC9E72CtPS27pCgP8Fra3FHBW33vFJGP",
  "key31": "4uGHaBpHVYPQxBgSDWrHBfYSMN7SmLWkWXQHcZP1pz21NpwNmyzYRheBvbY6iS93kZf9CRxFMtwRBy3PfdQCMvrN",
  "key32": "5xtNeVKMLSkD36jazQYHDYVjGEWo7PFV6TtHqzdqfjNzXAGWbtWZauTBMr5YjZHLaehYJgLDon3VAYf8dXUsxbur",
  "key33": "4Kb3gTUiDUMh8uv6VJ3hGAVkh2Jbur9NLpEU4PXd7ZMnSHdu75XC1LaaUTm4Qihop62k263GQxz2NtKwJA9rAFQU",
  "key34": "pgN9DskNz6A1SDHDYQg2AQJkJfLwzAnEVQw5trUqD1xQJnx81hjQrBEz5GzGEgdfxkwsPVpxh5x9DBwmrz541XS",
  "key35": "5KUxfMh3BFnQ7G2qYH38wrDgZPhV6Vz9vnuvjCAqoqCHPeeT7dtypDpXdLucDUUreEpBig5ZAWsoEzC7F7F5pv5N",
  "key36": "4RN4JdJbHRfh6zB67642sNbGN1EvNwdU91hKpsEp2Vc5fAygiFFtJTSuTzYcr4JhuizVXv5de2p8i2kKRrWMqtZZ",
  "key37": "5uNNziZ53CsVhs7aV7cUjFvwcmbXDBY6NhtMoZXgoNDiNY9Sb4AFiFexThhYnzph1fMBjHoUPui5ymth9tkFGJo2",
  "key38": "5rPmUfgBRAPd9DU6QwBo7jx8c43hJGh4niBjiXXgbn52fA5wUW4VDmTdmg4NkMUEhbTcNpQ6Fortx6uzvsYybag1",
  "key39": "2yKvpFnj6WEfzwzX8nreXVMFQ3aC6vXcd2PdefrzrYdHoGHsusFASoXJvG17J6Nctcmsw1nQ7hwsUCffu2kEWBfj",
  "key40": "44MkFk1WBLbdYNunapxgHbJ1EbmaZKakNWcDEYpmJCjZ94eqzZyo3cPgf1eLXHCMqxismKBTBdxdcmMuaiUnvegB",
  "key41": "35ZWGouDDK9oGAKyNy4CCv3kNfJMduEeVAFgrfrzcmSNp6pudQbhemvcszKZJChaYxwpc924TiHRBB4tMGzXBXGv",
  "key42": "5HgzpKxusnj6sos6bf18tNAGTfXyB4fgz1mx1jwdHeY2n2YxhZVmVw8HGR9BeVQt3gBckQFp3ZkArdzSHVrt797V",
  "key43": "2wjJrn5fBuVQTcr2sABBHcG1T9beQgoYV9x3sLaYgQr2K33cy8QZVeDQnzFvU2fibLTNUCeqbkkiFHTiWf3Lzku1",
  "key44": "qeX2xrmJ8hbeVJPiPTCsnkHTkSxKWFNpnV74yQevdwXoP4Qc4ZvJzqU1RnM6buWuTNREB6VmaXeRXRiRkEaWtkX",
  "key45": "3sBm986oTdEtxmGehuKbKamMBaKV2WNan2TUYh96mBE2ZAMYZQirNNoJq3WAWSLBRNjHYUf42QiEBHwh7x5EWKgv"
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
