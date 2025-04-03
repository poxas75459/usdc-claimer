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
    "2XQq5LoB1qFLLCf4jHezV7zvDaotMNEQd8CQyQPFHMfd1Vecnda7xvPEjQegrYix7aq9VutC6nZWQ353XJG8frb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YC2nUfhHvznuqMuTs6CM9oTV5M9cFXDYsmWkWwKQNttwJgyfA4aFN6yQ1XoVF5NSqyskmy21FB66F3awZnpNKZg",
  "key1": "gjNGRjQiqwwyBPqP6gx1ubEL7KXWT8BfRjp8PvGtyyJdjvfSuqCrzrXbqGVgTavM8o1hDRXBQcAdGDHBvMG1vjK",
  "key2": "241JfVMoa9dZ79vqUXUKQehe3i6pVviNxnfrKKAbh9iW9QV8i8smJKTyLvBkZXAqYGH3EbCLtMaEEYo8eXBEP1Fc",
  "key3": "zX33HJZaq9DcrPw9R3BStdnsDjPiXj82yPY9VT4x5d7CNWtfvUyGpJbKwhtwJ4PitDG4MrCRXNatcDq8zgBKsrr",
  "key4": "2KSzHkNqy49P6yMefLdZ6TYFH3wDP9FmUp7AFGMt6K6w9VHE1N9j8TDm8mbp3w6qtHZXUgW7DnxikkvAiLs9vW8R",
  "key5": "5htbToGdNxKLWhEzn7ZHLFdnkLA7wUdqjTyq8Wu9LSqfmVyohznmGatXsxCt3R6NZmGrWw3MpuwbAV2DhJcdYkqj",
  "key6": "2Xx6a9LXwxWEw9EExggWemuhKvfEkBU6KT7zukqej8oNC6YhbUou4bECntyakPBaQbsNsMLNgp7NnbW5ujAUf2gZ",
  "key7": "zvnNscNA46FBDAiZJRujYL7SCxudry4MLwGGZ8aBWpMSuS7JkhP4FS5PTkDScnH7vX4Jz4oLzUmA1UW4fRJB6fc",
  "key8": "2gER9oSPhpRHZstR6yy15JXN7yqm5ftqEqQuRz8KAQCwyXP6s9SSWH9RUwiGGtc3iLcYfrj71JAJFMJXTa19oBYC",
  "key9": "4EuUyFeqaNhd8n3rG3N6jEDhtzLG4nXWHS4oPTYBt9wY7SSYhA5GPHSFXcuDRGHYBn3nwfBE8wFx8f1fzjN3dbX4",
  "key10": "q9cFxjzGFjM4Lg1vEsV4Sj1ekD8xVtGsV2HJeTH5oGFL1BiFkf7thb2Z7ighCRrp7NXvaqufygscGecEhBU4VpG",
  "key11": "3uZKpU89GxzYfZT8v49SYpwpDYSGNKdeGr3ywfQ4GFBdKumSEPDgNwVpeEgLdPdhYkCEuZhfNn25t33YwX1aaH5q",
  "key12": "omXP5hBLNFmJYjSwH38qHGqym8ARbWjbYsHGV1Lsgun6vdhaKdPdAwRdtfrR2dFew886GB4fR36tYG3AEtZ5KJE",
  "key13": "2REnznycJS45wx33SVeJszKf31aPsNJNoCEdGvdABHCJFKy5o1GYLfcGV5hgnVLA3R2WxZ7D3CmPe4zXHhPCbEh9",
  "key14": "2YbCsovrjRGsgLRxee2hQcoHvhuCT7jzVt96gmsKLywCyKenZPYNtQyFNrahiLfbaC8gtcAJEhtubsJE4MHRrRpq",
  "key15": "3yWHcVqD5tS4azre6rSLN3nLmjqChUtnUihytTVd6vywQH7ApURfudTMnF8LwtmYBeECYVbLvwuLqbrBrutPUnP2",
  "key16": "2X7Si9KM5TKeBtbvY2SyfDMTEcw8vyETNgKzixxz5u7AompZzGdAER6tTgTJCzQFmfH9BfzpfHqrimbeicPBCp3y",
  "key17": "3S1apX8QaTgFkcAUh364LBu2BerJ3aUv62UNCDJJLHxc4575pT1sSR8C7owajyXWg6xTG47iRYn6RsDbdQRs9g9d",
  "key18": "4donZEZsX1698YF1u21S9vSF1LKxoTuyVZDdnWYfByAHFx6BeYH6VbdSJu58yEWxCwkjRhJUXaHx5gAMP938wyaN",
  "key19": "2YzWxbXosPxuck7VaLHhoxgt2swrnmYFH6aFApQyL2WktANkrXJcn6P7i6UbHG25z8MZdSoX4vng9GEjGb55YAGa",
  "key20": "4j48FFm9h38ve5ktQJC9Ncs81fwKkxESiLFUzHvTKRo3wa6kgs3ux7Fpn5z69C97nZpqibtx2F9AMRnHvsD2Fk2m",
  "key21": "2vYwVsoq8ahLRKfHkeaf94YaBV3ECJZ85go8mkD5SY3v4qWjMsAXWDh9MwJq9gratL2c8TCFVqTubRZLgn6gJQkq",
  "key22": "3qfhLSktoEfzDMohfjbaVW8RgvcLxGem9zfmQTXyZCZtQHyUiKzn1UzycLarjQmbQqsw1tTX3xQUhFhs6KDVPQDB",
  "key23": "4ggkGvmSktjHxJr2zE8VAsMn2zt4HPvz6sCgi5UgvJp8ZXZcgfWbPtp6BmHqgDUimPQ17bCDsWwiD3uPbgsaXx9H",
  "key24": "2GXyCqn2pf7QAJcLiQQzFyDx5v9ezwfCYAdAUMNYy9cX54Spt24oQhcwY1FnADHuKLYkS3JPyx8ELB6e8uQKEw6b",
  "key25": "57ydEf7fUT2f51N3EuFJDeKN3MqD7v23u5XiUSksChaQ86sQgw3upJfz3UCecQng2ENsjPyb7wYRKVEjPi7rNsoD",
  "key26": "5EBJ7LWW25zKKvU8zPdjAxkKKwibMYNDrtYxRyXhpgZPNzUAMkRneMns3HJqcyJq9Qc3JzuZGkMEhC6QEAHXRCgy",
  "key27": "4h9E4pwhQUkuKeC72tERnwYMuxrBrBgXJpPdkVdmHLE5L33QHe6PScJMezwFpLPWTYfBSWNKxuYhrQYpv6DsQDjz",
  "key28": "4WDxAU8qxNKGKzmHyRhmutXHudiMgmgu9w64QQUXjtdh28tjxwqFEhXVT4T1eqac3nRtSCoXBPXaY2K3ZtJTsgbF",
  "key29": "xuvsGNTJMDk1BqpTUZC9wXcaUV8vpJSkZaknyBGx8oMC1dQ6hnLp4za4wgntJHb94TyeqWatdb1HjXw2hAqpWoK",
  "key30": "3CSq3tKjAMf11najfkjnZHv41VKmELCCWeCMBYAMiCqWjptnZgwoxkBgknHjkq4EoiU8crGpAKMRjztVFEu3ZkEP",
  "key31": "q3twimxFDkReqJbbL66BR7CMNJXrDX8MhCzLca1LbnbT1Mf85LrEekeQZAtvh1TBT385WCZKW1fKLBLQsWAwqic",
  "key32": "428cG4Ko8Ezpa6L3pcTr8csmTkdEzRWcxsHVnbh6aSxiskn1JEbNWv5tD56gC4FwrwZTpzWdp743WA1ZrhG2TYnD",
  "key33": "fCaqADYqtDo5rETDRajWuXHGBVSxdyYRFSn4zEjzkVvg5vQM1MX7AE2LQJtTneXHCtiSPHC13HZZwCsNCjsYwSh",
  "key34": "23hNtgZkASmFkythQvUu9THB1AiryUiegWvtMMT9v5Qe95jwWDdDS7F2sonBezusG7Nw8tAT3gNxiWzx3MUe19yR",
  "key35": "2VM9JoskDZjHYLArpjTBXL3EKsQBgEcBud5zUNZnwNYxgDUrezjehhJUSTwyrUmTbDb1DPqGura1n7F8xqnpYbKC",
  "key36": "4rwoP6p9JhAVdNp3DHKDGqtCFZBRdBQdRLF1GLbcTBcfNzLfz2R9s1EgopTmaBCnZqHPMcVD3woicMnzrbkgJs9a",
  "key37": "4D4J9K8EtgdfLaBrcTq3W3UGZWMjmVmjKkcfopRGVWkDusmtj4p54Uq6B1r21qyTMkziSJyVrC5AoD3dA7q2BPEk",
  "key38": "29AcuV2UKV7icDFTDdjDG5kf2K6Tu1zddgAGWDRw4M3TbNsLywpTZBHJ6qLmUnRapjjSX5BwkRxCoK5xsXRrAUbg",
  "key39": "q66aQUHrJDjxvpWKGzS3CQeXYrMH15HyJvkZEn6zDWuavTQZGWAgRobYNznRJP4GtA7U6sUC36Xc9HdD7Yv8t6k",
  "key40": "WihFrtdexMp2Lne7SfECnzCrdTSW5K3bZoVeRqn15kfwB4c74BrChh7dmsBCVfgyErKghBkSk4ULXpzgpT3WHDr",
  "key41": "3r4yKBtZdELyM1hGdMfTrDbdY2uMrg1nbqJsEH91FVk7TUqXopu1gJnMCV4vuYV78FhGkudzoKVnjgdzveJ2LDPn",
  "key42": "638dhKRNYxfNEUMMupnb7U214Mr63hrVH6fbbnZ6u5uLBVuZ9wARMCWwxnQ4RHBd2Bq2TV4bfYPvRY4tU9bVbKuQ",
  "key43": "3PzgH5F9PTvxovVAE623FupiZhiMhXhhCxZK8jCt83aPGVLAcGMFkxhvu32a97FKDMRR4kXSNBbjwyTrYhfWmizz",
  "key44": "akqLC2e2Wcz91WEv7V31D8QGazKP6VMVTLtLbU8hv7eSijHxxYWtwTsm13tLSfpbzxQgiTDCvhJ8PErAm2VDCVw",
  "key45": "5U8MMEYfgAVQydJhBHg6i4e1PNPLHjBRcjq2RnY5TZqipMk6MwVM5CKzPQgsSK9xjhyDX8cDbQiJr38sFACDRgth",
  "key46": "bfTL4YdVtLL1u2Qv3mD1NeCC4dvBbVDK7gfmgXfvPNc4BECrqmmvMVhP1dD16g8Hzme1BvnEzWQ1HUFFS4N5wqy",
  "key47": "b7P3vdaUV7AAmJhe86kXbqvXAJBMfhavFmJmTMMFMNr5YcUyfVWYr4qcwyDAxocrG4Xuy3hCrhMDE8w1oLkp8V5",
  "key48": "41JusN4MdFx392xZ8cYQV7pyM8pFm5kvw8RSYv31m7AAFyb7wgNzDHHK8oopb11hXnNSFtGUMc3zQh1FqAFEj3D1",
  "key49": "3GtfW6jgonP4AUG8icz18MiTyVzF1AdZM1Wr1XE1cjWEXxNfY8DHxgE863Y84LvmPpJbCBVRi4Seesgmrvqzchmg"
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
