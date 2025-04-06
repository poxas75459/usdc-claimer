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
    "2qW5oUgAv4fxHVmu2cc4nr3YAMjPkiT7Yx7NbyGkThZJHfhYLfCn5z1NXivFbgq45hJou5XcrL4ma6JSDHxruKLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ddAYp3AGVdw8MAwL9Wkbjs6Je8gsUT7rq2sqSkGEpvQNk192SBk6R1fZmt4Sp5N5anmZYJy1SbHKVMmSjs8CZxi",
  "key1": "488RfjSjVYZSwp2SjhcachwjDhvkV1BwMCPBKYe29FxGiJhEbSMpDetX3F6W89Bg9bqFc9T81QPuT5xGJ1ns9mtR",
  "key2": "2q4at8SmzVAKdqr6N7XzHuaFtR3BhGew7QzSMYBJjdYD7ehA7s7XucUbhzUUTQMoZP6yCap7KajuYQbWDDcPVxN4",
  "key3": "36FaMA8A1qQqFTmMNMwdXKNHQJepU3TZA5ADkdf5gZgeya9xpLcDc5vNUdUCkJDL81UhA3KpUYX5YATBVHsF2yPC",
  "key4": "64r9aYN3GUdkPLMzEr8EfNctjY3SiG4VRFAyEbzeVP6ZAddB2AxG518n7tL8jjkTxsMaP6d8viGLoLLtwniCBo4j",
  "key5": "DV5AFtiFxArDP7NwjBFSWH9FVcrmEqM7ca2CaMCowLQAkgD66Cpxu3tJXdK5xYfvTKUk6vZYgEL7hAvEXVuAYsM",
  "key6": "2SNGk5BuYJ5wRKxfkJPRueKY9fwjCptMiDj7fTeqQKSmZ3JvG9NUAZVqM71hK1xfN4Nn2HZQGEhi7H4592fBaecE",
  "key7": "61VdNcUxoaSs3RMSLXgGeCSbb4D6ZmM3xo9JV3UN6wSS2Xn9GUKbCMdpH1Mde4GnJT5Qtj7htiBJNNLYSL8a44hF",
  "key8": "aCsMt3m9DPtiqPBbHvVZw9oCaeTvxyPdNKkyD8RBSHizT6DRNX7X86KYVjtSE7jw8twZWQHhTVgki1DRZdgFY6m",
  "key9": "4ZkwhS5GNiAn2Ytm9LVN5wGruib7axkDnKs5zUi7TX4Y1gMbtYy38XzqXu4jVxyx5tJYJN3j347kdjxYXaJpjrSB",
  "key10": "5rBKa1UmxCevUf9umi2FJgPUDDMdsedYMiXEHR1jzUAfPMGc4dECn7gYdgFatrdTZ78HphHXvkRG2LjB6CHrdrMF",
  "key11": "3Q7yzWMyapqASDhmYa8ihzS21dLRfPo8SQZLQw8dJr3qpPyYhwHiYHd3hmPMJiqts3ncMF79yWre7sutmiYxAjpZ",
  "key12": "5pWNLxpF56hAF4jubJeDhzbgDaTxLCwphvnEcviytuHKZuApwvdqx3TUMR6RPfQPcLuvm8sggrYKSpScWTsuKxv1",
  "key13": "pmhC6W9kw2PtLDdxdaeubCgzXntwyZXtfgpBRa3Q63pYF48jEFPxhm7ZNfYdc3j2MGCn2LPpLR2yG2a19kMYXbR",
  "key14": "2dgRWzDBzZMTNfggfPg7tnxgMJWyUVDmDRzYjA33QApGQFhgXQC9js5dtj2Z59der4JUpY6XL2Vzbfsw1X2WGVbQ",
  "key15": "5szqpArmF3qSndirqRnkmMtHYGA5TwvgxNocrCgdAm7aTyiGq7Z6KXKo4QrUH8bxcYQBZGzVUYs5MP7LPHcd8xqW",
  "key16": "2EGSrjm6oFpB6dAKxqxxefPXAPdU3GjoUAkJ8dVqqufhZaKgsnajxfqti2dEPfDJ4v5tSSMwh8MJZx37QR2a1NMb",
  "key17": "26AMAxb81P1uQm9QfhmzFthGuriEAtSHZXdF83BWmZ2cxAw4pVmdMQA6yK7FvP8mEdmKDRum9YhKp5x3xnUx2pj9",
  "key18": "4q2eafHUBWf5tgCPsk8HQirrfCXXXaM81BPp9UM1nFk7AZ7STDDyBW334cFUzV1AxMAVCnfutXMvbpnCjCnjGQBc",
  "key19": "5ULPupFQHGRrABmTQYL2uqh22XqKWZzG8qvrMJoYPkHSSChJpwEuATmWAXTdAvQP93fZvSzm6Vw5254ruKtXXKmH",
  "key20": "4tbEHuVxP5fQ5GH3SjHjx4XD6HMMFLP9wT3RM6qQbSj112MYaDgEek9zuxV5PGPyYPGxcPzoKrEUn9pi7MtMQWSc",
  "key21": "41KcJBAupvQXTRVkXtrzuzTzLhZF5EHuBiuttTVeN6Vwjg486oanfdoUH7mizaVDGLqfnxfcbLZ7vWZ4QhE8ZnjH",
  "key22": "4sGPyuNYCJ9LKTusZyGQ6JDipHdH4KbRSiQjsriNkE31SQHv6m13aaGGHhxzjE3iTm8Jm2mjYKLJrnAqLgwoBdHL",
  "key23": "4jekASQruRi2jP1RUmbf9FRYU3zCLN5YFbK7PNVy626baJ278ViF7FQ2FFidcCey3jeSitEFEWTmeXXvoZrmGuSh",
  "key24": "2Y8PqWfatGYYHjDRiYSG4ZsGKcoWUum4JCYerwFeJEbKuRSoVWknqbt2aQCxF9FvRFxLoCnYKFq3VcU9eufXUaBf",
  "key25": "3uUMQGCJm6fdtaYP66RFzedynNmVPPihMzD9ZPJxqFBA1eAiVH9ufFdNrYizpTy5m6QTzukk7cNyqUEiWSMaWL9A",
  "key26": "3xhYz3mw6867rsCdH58KfJdNCpsVUfdT67z8fXoSfeQeymPTgffXyiuL4YTb7eCPXWfq4K8u7zTpjs2iaVcP2enS",
  "key27": "2UH4b4jsFkCg6vVmuZZ3KggqnZuodMcNDFqFkivCpRicYc2LN3J5sTACAwPw8jEb4SLFGMgNTcaQefbGgMD3N5Sr",
  "key28": "RLs8kopPjJFDAHoyEpsF4pdfQdebTXq888xpcommRNEhWDWSoQDi8wzuqBRAUshw92jkdu1Vcbzfqv3DR3NLBQj",
  "key29": "2XJr779P9cruPZ9eGBUReftZ6jpiP4wTjsWFx9XNXoaS5eNBeYEETazWXwqBtdgSJWGGiUwnn3N6mBSo8JgpVJib",
  "key30": "2evH2qPdkQvjxQSskBU3stxaTW7Phuc1T5oc5q4MYacD6RjH1izAK6EDnZEx8bPfBjRFSs15NtNjFfDJJPCQCSka",
  "key31": "4udnArpNt9iZqB58iDHfkSjp66Swv2CHnUK2i86uJ4q2EMvpwNFhDD6FiWuLbqYsEgaLXRWvjGhwSzKHibYyFaxY",
  "key32": "4X1r5yXEkGPWkrsUd1fWYWMMGeRzxbc8HeXQiZTKKXyrN9XqtNYAUQViaWQSNJXSGFXFLPpzkkeUHU2EnbpUowX7",
  "key33": "2ASy6wmatubgmEUbrWpoRArMXyouSUzWLhj3cq9FnVeWTEGkTwbjDVj135VJVeJBjy9b5X4UiC8NMm8cpbP68kPf",
  "key34": "5pHqSfRTzwBnwxVBPAuoTgxKyCvKMrfgfP7wCchH9mNm2hGx1wS9GA8GciimH5VXWW2StSkvHJoRX25V1FxT7Quy",
  "key35": "2PzxpDmWAzyku2wt6HBHxGeoG1USWNZE5LnRaZrgfJcdQkSgptQ6hA1fcABa3WNmWepw4x1niZ4sX6UnHDkHobqQ",
  "key36": "3HNSjVSJJNfNV4PB8sD1EciHA4fiUT1TRTfrdZU7VTjsMHKQa5sHrqzpwEv5BAzaRpGFBW4Jc1RNK8MiGEHaG7pq",
  "key37": "oqASJ6DDv2dXnrRnUBzGX9LukhqzeoQNX7kMj9rETyZZMDiUF7dBL38AyCgr34Jtgy8hrNz4KXxjBHKMAVHnqYc",
  "key38": "sQLfDfScDqY7ffem8gkT7QCt7Mp2xh81hDyyFerdARPGFS61PeDNrSTKsCmdsS6frQp8nGuuDaC738rZ31yEdqs",
  "key39": "2RwPWJeuLjEh4KBAdywNQhPD3mZnnpKWse8dTKnruZohbeFmNm41AGqe8tnknJFjSuubSSog8MdjKopANcd53uTu"
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
