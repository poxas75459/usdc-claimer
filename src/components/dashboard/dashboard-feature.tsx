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
    "4qEVFeuphHRhyBSxrNLfryVp4tfJzKEcLt8af1tkweRJDDWrXXL9xepw9jEAZUJ2xmtADVAsPZNChmkj6JAzUaGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UAhEkfS9vqA4wAtyW1e1TmQjqpAq7gZ2v3JkyoCyeM9jUNfn9z3PMBpKTbcv2F8nnanMy6LkEkJaDruvJLpB2Hq",
  "key1": "42SweUD25afpEAwSEsZiZP7a86nCZxLnwGc2SVHHVcR8ZVV6RH3cx55um4tJ15ib7jkDaDNpkZqf36sw4ZsBW8JA",
  "key2": "43ae7HQfjswURpu2w7eV4YzZqu8kN7bHT8EfLXyT2uycZGfFP9aw8Dt6ZPdGkJh6TwHczw3aTdY3FLE3Swv6gG4y",
  "key3": "3Mm1WhisxkAw66mHr2Q1Mut9SXrVpT3BYDh54RMEFuHW3PzvuzVZpiHVJZAAkHuSvscxpwyBCwWRuQ7zYncw5MrZ",
  "key4": "4kdSJbU8kUPU3XvJoJzBc6HLo9WqohDLyUaVauySa764jdUnQg8Qez9Kwh8mU9UdEJtgwhPuBFub4z6mUHkpLLPb",
  "key5": "3MjvwZjBo9RnxAfwHNrL4Xnuw5qfPQQsWqyqYpjGqbBQtmdf6t6grUD8DJKvLYL9Y6ys8w6KqajPyC294aZ2a9CA",
  "key6": "TQbBgbVLtHumjjiaywaxZ5RFAqC3DR4nCsqauHwK3aVRBYY6MJtgVwivY57JVi611umCuZnQDVhmrjkzxYcBafZ",
  "key7": "ifc7GkZ71XKiKJxvBXiPnWpSDpdiR9n265srmYDo6SopHyNfHiP9eZqghRMFURq7g3Y62LjsVrJn9QeF8PUL6QQ",
  "key8": "49UD3AWqFYe7uV9n99v87y9Buq2GFjF1rxgd1ionUx6RMDSA8iRjM6CtHtEdzTDgm5qmPvEpX537TUeFtjJSWv7h",
  "key9": "3fZGf491Rc9WRhsHP6FBL8f2hCiDgqiK3iLpxiora9uS26gBPpLqcnURWAUosHZSdFpPrrEsNxHp6RKkN57Lbkb5",
  "key10": "3vHCRxMCTtJw2EnXazj7MMFR6Dxx5EvAVnDAYqswK4EbQQxocbq9RWfhY4tFjngrygfZXxNFxXa18LfJZGg2Ekcx",
  "key11": "35YEwJtd775dmYYCeWVcFFwW5bXgTXWKbuki9oURW782SBs6h1JVFV65LFqEKyN973zeNMWuwd4pKja14FKeyhas",
  "key12": "5N7DjUaSmHfLkQRvG24cjLDZs7aTApENebJTyf2MxvbF8WX5iAiJJBGKVdgPUX3ExNUs8DeN924ETAX3b7fGhL1D",
  "key13": "2h3dQm4T7vMnj9m7DNy4oMEUS7y6AhvvzTuTP15YGSDmptPFgBjqgbWnitgHwKgvrFm4JYfHDn7abMBVZwcGs3Vo",
  "key14": "5Jhso65GrvdvXvYA3AaC8iaEHHWxu21CVPkJDdZyYrk5j4Y3jhuq5hz4SNrNA1VG96KUzMGMxc9j7E86riA4edL9",
  "key15": "3kbdgMbePejnde2x7pYbAVQWXUCFFiDRgNgHRXktMBo57XtnQ4hc4gcmaJf9FjAEQVEstJYRqKwC9CytLmzc3y2f",
  "key16": "3MwhEtdroLN4kbQLATnfNN3BKZsLaoXekuS63quPoAgR4oUEuDa4Pgf1XLUzcmMceYrzuKjEvcMFMbk366jZ3PDL",
  "key17": "3qLKj4Z3ok6eEHHGWSbC91YwbxarHjpqBmiHH8UXK47nnMARYa5ydE1yoTi1iFFS2h58u8ZM3qVvJm1UCD75U8jU",
  "key18": "K8LRw7VnK1EWr34ujAqvs4ofTVdpwjNJ7UJbYJCxRnaudh1Uo1MGHL4XzmFH1WAxsn7QTaG3SW4LgLMS132LVvH",
  "key19": "3HPs9B9kuHt1DyFLrfkDDCjKjznU13q7QXno6nuxMUX1RJ8W13Aia3yrni4scFwpdbaqRAMhh4jAJB9RzL2om5qt",
  "key20": "4zcYb9UDShzxRk2wbwVCwttCHRAinGGFRbTSiJCgT92yaGis9CjGSmtmUxPjPRBkueA7SLFBtfTgi4QnW36uCbQm",
  "key21": "471kmCus77jGLb5pxSRWcKxX4HyEdwuGKvpmbgWKNqfr9jLmsTFCjZaPFzw1ujpmnhcec7TTUobLQB8tc2yQP4PB",
  "key22": "4eNN4AsBgRBbjSV3WDiJQocoFXp2eE4djtoa6nm5GjJzyU6NA8awi2rjmvraoB7zTfzjQpxBSYLYtA2SULiD8jv4",
  "key23": "2UNYZU3Hoy3hRKstg27x77Wojc7RS3LQA9rthebkjdrNPfLZRaQ74LaAViyFaFgmFAFAWfuvXJZrMWydSr7Yj2ny",
  "key24": "3hZgVMh2cu85CGoNokhj1eUmvp9Z16xHGXZjmDdmz2BGe6kfk6zv67esEzg8JLpzAMBzXpywUwz7ggCiKJu9jBuB",
  "key25": "zbwA2FBSSWkjB5EdVcfwV9WqPaMtCYkaTFkQwEgo8wDB7NmtB5UipM5ibmGqeQ81SWeyrhXkfJvXpk9kDM9aGyJ",
  "key26": "3pSmPYFsyk6WnBh51Z57q4eKa2dHv8bsQQLT922MPWPmU4eQKinJb7XN2XA49FkSXi1EG6eXBptyAQDdRxAmdPP5",
  "key27": "5qAE4Tnv5VfoDkB6Euuqe2RF2pPJpAiAm3iw2PFtGbU1eNPNg8pmZwUqgnQfsTnvaXpx28w6aoRkyszv8mruXGZL",
  "key28": "2rgiCT9ZKAxiZV5HvPPEq49FB5PLwAZvTiLBxhgevDybEbHiKz8gmuTeWtGLuBQeV5wHGenTgGqotcsm1HdzpYfA",
  "key29": "4npiLdUiFSvLetEjxHkYxzrRhKfusJkWRdT3smvYrfjXSnT9HCki1L13p4mwrz3w5i1Dq4CL2Keb6FLG5FeFEsGW",
  "key30": "4yVL1DV7sr28y2VAxb6tozDGimdFGi33JjgJvZ5wwyypo83yiksbVL6F64CcSpxUxFfYNNdsVJB8PDSUUywYtGZF",
  "key31": "5yAaTkMPMgXgax1JpGT7CGL1H8EPCJDzexnJ5mbn2vTiM34ZqoA9Qy1L9TgW6iMPC1QpiZhDBWG6JbF6nZidpJDJ"
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
