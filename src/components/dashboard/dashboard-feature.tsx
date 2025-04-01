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
    "59Dm1PGq69RB5EBcjCuU5UBfoEDaQ3peJds8FXn92RygZuj6ASqciLTjL1AitJPwKmRY9XtF9SFkaX3a1WFKYw1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UY8PKhpuZ4SmsbNfWtcZSrhcSZbbo5GpCD9wFoM2QJy5WzMZNfPLEA5v7z6nsu4jK4YTUWFSW2HJwjUeEQQjVzf",
  "key1": "Wi9JpQgUWtCSGSJce5dGdP1KvLoxGXGYNpqbrZZQzQ6j28272P6nKg6Gwc3W8GbvsnVdNxRNC3RCfVSE4dqSCZE",
  "key2": "62aeVj7hMrbmDEND9CtaBxYvhoLw8dnJLNUnMgq5nJkZ4pi4WDP3bZGBZZkJe8g7kcQmKxrj9todz8k8r3TSSx6o",
  "key3": "3MYaTH1Brf8tvfqxaAtkucCZiGVACs4b2A1TwqE4Tey7hFuEuySNQ8ZQaUUuSXjP5sbQsdV64xute2TRG7BFidHG",
  "key4": "3BwzHuqEYQwDh4ne7ZHhkuxmY26w8sVjzPsz3VDqkv5QXrQZGbU7VE6k5LtPV4u7ku82HSo91pYcswjS8F7RAxYC",
  "key5": "2FDv2nkGV7EutP36Q2grCJJaJPT4Q3sP9TkC2hfm1GLVLK1J5BE9mDWyDxukpwvvGU8Wn5v8chedMYuHzbcycN2Z",
  "key6": "39p1WejQJoYTuWSGw98EvCnNqQEx3sagBtJhjFsvc768RCXqWGJpMpaxGaK1YZAnh9LyL77ERqiAnfDiAdR5zS8p",
  "key7": "5pkNYAaa2nCt5Vs9523vigtuQ4oeWbT3PP51t3yk41zRUtYizaen5mxzTicKw9Sz2gzkkNZdRsbzPwwJqt71WSrm",
  "key8": "3XkBL97SSfN3wLXL5Y3oHsntRvfjNwjxJfB1o74ywPRenLSDm6ogf9X12Ft1SCdPRSHaALFjzGMqQXCSbttYvSzb",
  "key9": "5VFJxFcoaozgWskhVBXhavubU2GnTn8CmpV6tAhjouoCrWvQ46vFufSFWVMjSTDd96SG8wCdDL8VUeHcwvWTxdkp",
  "key10": "6UvqtSYXCqeEiRywDCM3oQTsdJgfAWQgJkw8tQdDs5Ma3R6XimeC6kUZHxP8Z3SiZq1TSuF7CC6STa6cKwSTArj",
  "key11": "5pp2r14uo9NNG2BwUd4SHhtU8gE3PK2om98wU215ibioQa8YewkuNywy1jiiqcQKx13fKzU3ff2GS5VNEDgCL2iA",
  "key12": "2kJjNo4ESaGDzpMsVYNyQGrg3jiGmFAv7F1fnrJn5gVhEKUywDw7b9ncrFzxXQaaKJoSv7oNphPGwGUQeFwDP2h",
  "key13": "5M5LeGmzGH6pveR3kNKwm46nxnc8KpFrLewjXewBrMiCmx7Nt7XHNb6cR2i4zXRRB6QeVsVZABQ53TXXdF8RZzGG",
  "key14": "4nshYGk4apKcBk2JNcxJuFgwcTkPdqTDZ3qifzxmWsXDSbPJ53FZd3s9E5KyWCdTWNMKAfh35f6m978oJQ9cvgwR",
  "key15": "3qc3vzEcjfsZYL8rfRVx3KRf64LVCvm6jmQEr4h3U7vj491JrFyFtEc5TKorcbc54nEm1VgkMGfQm2LM5R6DSziA",
  "key16": "2DTbaUEX87YvTFQ3L95kE42K2oMJ8U46m6e2NMTXeTBNkzMwxWAgjxXNdYMg7mf1PYYjKVrjo277Bs18BEQpia9t",
  "key17": "UQYHjgquHcJDEYif6xyrqucbtRsTKbmj8XjtQCG6bbeBYwTozbVNereC86ni8CFtd91FWDGkn7LACzRyyGAqWCF",
  "key18": "4vvEAWtV41CzgrdrPMJbf2LpjBsChyKLqxcxS2n4fEHqLmNUMoMgoxF8PGAFzFi4i4N9L7yuTM2mEBiq2BWVhN32",
  "key19": "4FsDcoX9jyqkKkPwJVbBRrrbSUYTrWCxRusHZkckX59YHsXC7QJYS5n8jNNch4aH61uLnZRx95SBpZyWQzidPNkE",
  "key20": "3mqEsvXdWFh9FPpNJhmX83ZP5CapWs4pb5SLPwYoPnHS5KpPhWXc4CQurTyNyp8msY6XcMJj2CaskBDZ18587MZv",
  "key21": "5jDjYTBLsA4WAxf2gq26cSqChe6qgcjaEQcy9cg6whFHAgpaJ6XjFSGo8X2ucFqFsdkBpc3EMS97i68VwPqiTKCH",
  "key22": "DgAQCD15ZLnYgdXbf21s5mTpdcNszudZhx9VXJ6pF2VUKDSPbVtcMPCKhks4r6VWqVoftzMHVSBb9Z6NDgGWqfw",
  "key23": "3YHBWxrSmvYvBefmvc7zNwZrkrgi3oxYyHTMPz46YWSAHJd39aQVQ4yMr3KbzGkA7nTMEb7EnsBM3uMkGicVtFjm",
  "key24": "3gCPPr7MN32L6oQnjFurSNymUL2TctcUmjz5Y4kf99z5XjE8zh4WTP5pPWKg9JmQHd9SwSKfAbNWxZp5fo3w7tbg",
  "key25": "fvJ8huV9vRWoUFeHMhGjiUWu6DhkrAvYscATtJxow6PiPPRSKDpEZjReGTmzxsPte8kmn2HYHej7dMJPtHSprFX",
  "key26": "4KYoo7cWAuyhxrVNqzrG2esQc954dTmDnRbSV5ANBByXU1V1LNVzYGfafLhf1mszWatjaLEFBuAkSmCaVFz7yTW6",
  "key27": "Ej4mEH9juFzUS7kjuFQpFapWsgF2G3cqK4QTVuK9kaUtNPRhUFrMBhmSREPHZiwQnYJQZtSBM5RvqyqjALSuGJt",
  "key28": "4SiduvHFP9MJzpRYmUx23Mo3uC4uc1uRUB1LqXggM4eMQFaAoUp7bj9QxnuRERtbJuqXzrVSkoFJvKdibEKeGKN7",
  "key29": "2YSL6mSzKKLxKdbJjqYb7qrAQbycad93HHz2LczKqtYkfAjAEBoRwZpzjK67Nb4XLkPWwdtnwX8UDJYk6eDbf4Zn",
  "key30": "2uwwW7uz9hR5wpMLnkqQhwwaCW5BWQYoPLqSmogoDRN5BAfThzsgwmtSgT1EsEQU21XWydoebRjovYBtBdgyA2Xy",
  "key31": "3nLv5EiKazgJNtBbbGVr5ApXajSYQab33ttLukgS7Waq2FsiVUmesUdBrpaWWP4ZgwfJEmg1MVo8ScWzDiLRszQZ",
  "key32": "5YwHx2Vh5E5uJwq8hp1XRxBM4ZDwgFVBppTCUEA2umLyP91rY17nGCM4EXPBqzmM52phZZ77RMcoAT7rGJcLJ8xb",
  "key33": "CZ8u5hzMWPq3uokVBVFK4irMvqCUSykZC6f9DMC4D8gj6ZbDrGDMPh3sLELCxEUjt4gmzpG3wmJuq4q5yCcioMu",
  "key34": "saDyy86NVBUavpMQvrf6jSC95BUy4C9eNMEiscKTVgNQZDY7haXQoctannMCvdNbBXCucMVvzVxZsN52k5NA58q",
  "key35": "3WhUoLmEQSWMm7JzN4cCMU5VEkkGWJLprH2MkdK28J54q2T5BkVsUKmHwXufC1zoQv8H5LcHzEGPGUToCR9sep11"
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
