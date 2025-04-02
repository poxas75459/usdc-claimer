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
    "2W9cwu8vWsLTgcHB5RDcpw9MejNs2DTDF6GgZQ7bKM6EK6DDhk16L6naPYdGXUVVmRjtXaBbE14TduxrDySjmzJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kxqt88UicLobH5HcQSrS3HFKgUFYbQRKHnkP56gYvWhA7iwq7m7WA4LvxLJYYve2uck4Z1aQbj3Yzd4YAGBPoBi",
  "key1": "E3r7fSQQKiUXAXNLH8yZkGTsySNFcJqwvUfBfGyFNAVxajfrhuErY6ogNTBxQDB2xynPpxoz9xiw1FwQ72jVqPP",
  "key2": "2F9UGHoG8KLyVCguHv6jZYu8xatUaJFw7xK5R5gWxtcDUH4GP9b53CwmoF7ZhjC3oJiEw7apcLFze7uSVzMzaL58",
  "key3": "fg8unX95gYwuwUwWjoxH4fhpYk9FpqZUjSPHH5D8NbppAbern1UQC7EtvbYrLPbfCZLyhek2PmF7z7XN5Pxgyao",
  "key4": "QEX8nffVPi9PJZULLuMrGbEFB5Qd4Z3xoUDtrUz8o81zCsvqT6VmRDxYaRvfq6tXdRaHCSxqikCnH6n8hbnrQ1u",
  "key5": "4hBYtbE1UriXNuDLp7gCX3SjV1VUwEv4tZcihKdk3mY3L7Seg6WSLubqbsMPFYJwarbRrP5fjh6467bSST6NUr1D",
  "key6": "Y7eNqpW3eQbxN34t9Su7TNTXJqRbA8zTtnVc5XvRf1TTv1wfQt9hDUEQPxHxLq9vVsH2cNA29aKtQqZiRSPJFhC",
  "key7": "2AyxJoTiPmyWuPQrhsRThh7mn2CeDVEmfNii8C8cuVjsQJTreGhiSkUgj2tRLkm2jcB2ZFoBiXax6rsVtN8ygC2f",
  "key8": "4vzinVw5NettxCpbonWektAE3qgoGWasntrkLXVvPsFqeDto2ZDmpe6q7F6u6dCiUWUNMFPAS1ySCG6NCbGDRPng",
  "key9": "2xhPTKoEzaro2hcvQFThaXM63nuk6p2PAm9TEYz2EKBk1osD93dXuCvj4SjWgAdexsYQ5P6kuxvLvqggQqL2KTKh",
  "key10": "3QH5wMcH5gFGExeLVunQxhLmY7eteWU7XfXDQGtvJcokMT5LKpv3Vh74PGUq2hKMpEPn5aM8pQJGaWtBYbVpTHaj",
  "key11": "6GF5wtEA3pkPU5MfPDS1PGtw5FeU7TE5dxduotkRQDBLfUMoPP2LKbxzHMt2jrnRh4RFq76WZ8QteP8MDhUeaaK",
  "key12": "AUURg1yYjM56mDW5JTUBXjSM7TzyVjoUh4KYZ5HSmEMjkNwnqCQAhXwao4hEjEvw1rAAwSddF3PtGSBMgDvNcLe",
  "key13": "3oTDDnBTNU44yft82kvKAT36yR2Hrr7nHvgNiPnS9izd2WHp2CksR24mKa98DXgQVSHS251CTU7h6PGiqrxHJQ4s",
  "key14": "34QcoTx4sa8ySN8uvVsv88MEqbkvSi9fZcMVsBWZwN6fcPexyeH5LkN9gWFZ394yuQnhDsmUebk4jrwY5mo37i4v",
  "key15": "4eBWZhQ2XCTyiFWsbrzoxfqQziB67drzvaACGaABMACAEriAbxhMSGJtELrQ5ComdKAxBhitH7mGpf6TUz6Ms2qw",
  "key16": "eYRNn5w4jDfojHTpSQVsDfSVkZ5u43ozgGY7AinZ2D7A24XmTFPjgs7UNA4X7pYzSWWcXHEpSLELspa2qcaB6pX",
  "key17": "5pAV393eFrSi9eLUT5H6VuJsuMndjp74YUUahWAEtt8p3KPjHURwzqvC4U3uyKgtGYJTmxDq2rVWLYAAr82CQPxg",
  "key18": "4cng6x24GhRbioCd3Me25e7AEDo3zUwHb3nLLTuMevfbVQZkH2RL3gmApa1iAa9fYYL2U8kyRaaG3ZucyozjjaUE",
  "key19": "9eVZ8FMeYJshrZFtsqZH8GqYdBQq3aoT3VRJ5BqNLvZMf1pdbx1UCP6bhhEppMcmv1oNvcdf476y1zEyJw2ckic",
  "key20": "5Pjo799if1uFFfxrqgSubJf9vRA9nNJiwUPA7itLWHJETQxWE1xFVnXb2W3DHX8a8wEGR4wrxB7dRjprTJnXa88a",
  "key21": "5Mb78iAJERD9b6S41NnoP6rBJ5oVGqHkYSMt5zku8h3QsbMo7RNWMaYD9tgXB3bvJrbLA6emkHFrM55Vhabs2cVx",
  "key22": "51cxGmBkbuoFUpDEzVMennWGBhUiHfeJpXLqwbdwzSwdwVLQ2mrNJgMpFyFvWioCACrKp9EKiBLtJtPhX1WsLcYc",
  "key23": "qwCsLS4Ui2otqPei9jZNkqH1injWfoTGPYSMnh3We2kFHV9PfG4gpXqigk7az2ojZH9hxQV6BnhpxKBbwD2daTE",
  "key24": "5gXSWJzHd6825Z4wS3KCPXaTcjgU7RSLo1YF1QPBqHGXjeP5c4fZQa6eP39UHXCMssdErmYqEny1GJoanNdDKeUh",
  "key25": "61UQDMGLqqrobn3wZCh4UvYnaR9m8HL5Nj6T4zAnRrft2XBdBLWgbf3UNW24iWPM71yQqfueAsBv6w8vn4iSEsfu",
  "key26": "KqjasSNtWGetzPZ4s1j8KA67sEZPpDsKscopS6jLEUMUYSC9WAQQcijKrtLC2pMptizjJNfuhvsmiPxP1Qxny1f",
  "key27": "3obSGEfRNSiwqiXBfUNv26szEAqagZXNeMwttnttCKuGkEnH87n184H8hpgXwuAk8hBaod3z2SaN8WaEvuFNEyeD",
  "key28": "2QRCRJ4yzj5ouJqkbXsmoVbM5nn1peiFesnDEYpwNxBoAxzj4dqPchUNq7pjhk9APvG6AvyCDKEQN18cddYHSdk3",
  "key29": "2dPSkgprWhTQCGy2KX5zc2bdxYXCPbbB9EFUJTXUUkmij9WhLRafCyQZRUCbyfPSWAkSJrN7B12vM4nMLC7vrPCz",
  "key30": "54ybRscjrACGwQ2qs8aEWJyybwD6HZoEBMKSNMS4cYhWWtpXMpLZH6Pe2SAnj4V7T2HDzHU9DDMpFsggA3ujpnQN",
  "key31": "2sN2Y4hVCd5qaAQ6rxw1EzrAduDgX8wa4GXPKRxAFaEEMtXLt1ZX76QUiS7abZwqpwnUP1csDN9GTx6xiJpi31hZ",
  "key32": "48mQPX7SC4TAPTBgv5ziJs3Le928gDaBWafvQhzji3sRWawbJjTCNk5VUUdAejRxwJcr2BWV9FGC6yasMsoYzCvM",
  "key33": "xecbjfJgLvRvCuhkH9NT1xz55eq9Yjawm8JZtuoAwxqddHjbwhp2ED2gEcBQ84NRxXN3zsPFaPmQn4jyXEj68yQ",
  "key34": "3cVBRxXyLVtAmJajCKhgHRZRe81LvmvFpg2R4ktfzohysNxJnVWwN5oUDQ9sMQ68gnGG9PokuwmkHj45cPmLBUAh",
  "key35": "3JnTCrh6A1UihEsvHqkKWSXAzDAi9xktVR54XGYKdq8W1etUzprPJxRKKCCQicLBbi19p2sWm37n3sWL9QrDPjw1",
  "key36": "ynJ3ELTGWXmCzyG6z2jyErLAu6saK9vFHLpw45XY61NhGM9KRJRLsJbvczaw9MMF6Ykpmn2gJGXJYiyez4ypiTk",
  "key37": "1Mz7P8sXpCzN22yjGXyXKzhRPA5LSL7nk9v3LS1LQBicVQvJMvty4hYTMrRFERGBehiJqxopUdCpWUKSjp32625",
  "key38": "8B52koCykR4e6X6E3vavi5TK85tDpfX8PZ3aRA4891P8eLVJqDzTNPC8Rr6ZVmbyQL2kchSZVYBNKf1FCg4aKAj",
  "key39": "4Yaspmr5rEBcpHsuiWYa8KBHbwUYnN5wk7qG2PK7KWVZBW75Z5u6oboUf3WpV9S8SWkJYS3d6QzamH2qi6mKAHgZ",
  "key40": "is2Hv8Tq4gKFDUDFtsJQyWMwgBnAfUBjQQiZnSBPQ8BbRdK4HA19DE7dF8JiF72ggmgK57mNZdu95vB5b1ySuNk",
  "key41": "4UYMtPZwZ97dTBA2iaGXHDkt41azGqoWKpp838watSop2jmLNFNTgfL5r3aeHrcGDh5D2gU4reFwC3MUvpofDNNW",
  "key42": "2YehoosrEoGDoa2bszoWXQDRTD1ahyqpph6BmjspicD5sJqdfmSrhczDvuw2qhZiFMhE527BGoJXnGuPGhs3rFwF",
  "key43": "ZonQKfTGMFxgucpXc89MBECTDUnZPBppbrrksjZigjZkjdnxrArKfdPJV1yyrYsRYwv8V22Bp1NCzWGszu5Sj4R"
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
