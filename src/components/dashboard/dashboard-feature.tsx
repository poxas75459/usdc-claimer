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
    "4cM95QQGfJQRcG8tWZ7u6TatyX1whFaMMkjB95oyi8zaooy8mmTPe5W8dXgT4MLeduPZo3AnNZUEMwgBL4ojUab5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55zvXCGXP5xkpJFQrWnvCqVUqHpM1ZhBCzrifS1SzfYeg7PNwvxXQFoGNBnYGqKsZzZ2JoFBX8DV6qh94peZmr6K",
  "key1": "4sASDD58pum1S5zb4n6rEeQMqGHAkTMiMAvi3uyC3TDNhp4FqPcps4rnBHA7WfRU9SWiU41doGk5yVgBLvpaTmfd",
  "key2": "8TjtiC565E1ZKxBygP2AiVAFgNhicVsQkQM5mKPZq4qu9Xebgh7N3ZuFMFuggRNJYUC1e3LauCLXPjFZ4ntYCoG",
  "key3": "4A9wk63tdoMAvKWrvCiRvWRY4E54rsFJmU4uguTCt7J9vb1srWFZYFb9FfXbLAJu4mgAfieUjhg7iMM6d9hsbJco",
  "key4": "5NK1jR46cWYp1M8HJxKSNiqP82q5uS5xU4SvnHtHRL6Wcr74ubWXX3LD6RSNjiLMfvcJ3YV2YJ29FnDGRAh9PJhe",
  "key5": "4YnCz2cCpXNQgQispf5WDqJQn1SCj7gwLrxREs1Mqh7yf2J7ExCNKRXqSja3qMUZpteYVVmrHDdKtRVqc7cVnhhs",
  "key6": "3GSotGdUkAkEoJsgb46T8L9mM7FSLAWkphUXp7NGhmh1ySg7JX4ZPtr7dsNNdr5mSrowpo6bKVvS6am2dFHioj2h",
  "key7": "WhoQYEGjQDfbZikkfacCQrzLDVaSXmoFEPrwaAecQhLVmWFqbDkA23kSnJYeZsZ459jVjpYLrEYbVV6CyBrpCp3",
  "key8": "2ogXgfX78QofobMvEfnvcrCiegu1nZtq3dv8NzhFJWuFZmrdWLfrm5vGTcR6UYCfj6r6ZMD7oUZoBJaUrzroVEKB",
  "key9": "3sghxU6duBU9irTUEmLKTSKByhfoKXeZX58NNgnBQdUcJiSo34zdFwXorYBvDwb9MEoEYcs8Aio54ySwLt64NmMa",
  "key10": "5ByR5fmSJeEJK2nXdf6oEhTcXYJEd2k8S1hVJCHWgtBNUsGycYeTCsRX2g7AfsuNevUiyRBmhWft4sYQo5pfKXkp",
  "key11": "3Rc2K1XzMrELonAaE9VyuoqeADXYko678UunSK5FVs7NQxVnjgXUz2jyQpWwpRvKTgypRjKsNNh2JeP3BBtngpex",
  "key12": "3X5dQdddUfJKn2mX5oMxixwSAn7EPXL2tn9arkXAkqhyVi4qca8dHUqPyM1DufchX8EBUjgSHNcws6PX1sULw8Jx",
  "key13": "2TTDayHqgzWVsBAHHvBgpqFhQhuzL5vTdeqXV4vofZdKF5RLmWCdudiWdjT8hKeMRTpAfFvd4fVEUAVdVeML5snD",
  "key14": "2qZf7tTCDnFG4tbbE3WhN3YDkaiik9jJamYKehLPQzXLRYbbRMLty2a6sLER9GChfYxTVNaeo4QFmXaJkLSoVaqU",
  "key15": "rtMxzS3bp8JvHH3dsZLo8zWUSbRbzNkead4e2fmr2dMuZGHTKzqsYEKKvLtGUybc3Zykr4mqLPshjv2azwEVNVL",
  "key16": "4aybxyqEKwC92ysXxqSWnmoPkyMye8qPD45ub8TsUQ9ontyKcqeUyCMJcFKbUYSWm1TLBkxhDUWDXcEQSJvYLU4M",
  "key17": "4xhQsnHVi1DQmwuA2pL99DK2nqmNGYk4BWU9XAwWL3RvD7kRpYiQMPnAmqetFUXgjkJ5NswAoAFW8DVL5cDn7T7P",
  "key18": "2U1H5jHdqiEHR6hm2EjZ3N8LbzwGPzb4MEEQWy1t9Ym6LAapYzqFWzxBKZRkG4TFXcdddqWR5iqsy76hMEdybGLJ",
  "key19": "2YpyysdqU11xAu1GiSoTCeRjYcZLDFAex4iJpgQDBgjcaGTKY5BY8V4ATg3gUHduMimKowbemwuKkjwhzdY1LB4v",
  "key20": "2EupaPBJUv8LZ4jiGKpkBJmRPZ4tJ7iXryYEB4jqd8UiVjPiEfsz6URV243jamQPGGUuHohwuMwQXeBh95kuRWbw",
  "key21": "2et49RxD8RFh3UH1zgpWtUyTHKow7gCXMoR2zJhUoahTH8hYe9svhnUW9eLP8HAyzSm4EoXRHLot2s8FsPKm2xhb",
  "key22": "2UBHzaqHRdFZshMgMfpSv8ybBitSyhyYffJpJRtai44B6LVZ7pPJwXiFVyVV5PQiKfT1CxPRkNzSMk4aP2uJdeMx",
  "key23": "2xzMc97Rj2tufgTE8PCxHoEQ91KD9VcCQwSJeEd95HhbGbL2VTZjkJeLRybp486KUXVUpp9k8BxpDrkWEPxXemrU",
  "key24": "4S8jtw98M3PSaEE5wwzzncuaWoa1qPq6J8kbdYJGAswBYzHVzVNi5YEMPKKxMmW1ukajYSPPySm5xKU4PNJVzpXD",
  "key25": "tjdAncHa7HkHL5RMPFyRP7u8YLHumFrHD9Z9AiyLBvpjSd7as561KTUKok6ibWFppmcHrkVtc74EUPi3RmjW97G",
  "key26": "5Fq5BriXAsFgie9SR6dyVbsfZfQZBBVSGU59uQJyfw7iP1GYyPQn1kZQBtEHLzRtBX38k3B8aQSuzYNp6p3vxDrf",
  "key27": "4743Zf1FWhFwRrEH3jc3SJmKiCV25mrT4JgyHHLWcDmCWHg94XSbJxMDtDLp2VFngTu2DFDA53Mqfpogrdjm51yH",
  "key28": "2yBWq92eK4sK4r7Q6uf29eMhnbWuQSJ2oc4HtdNBPuWcNenMtZ1aDnq4VzNsv6kpZzC2xNgHBE5TeLmGHyo3Lbeu",
  "key29": "42ZvU1iuf6ewMLG4KZ7JLba1JyfnvYjBFtrZMc9MQuqMegXJucsRV6JpUqUusPHjVyZKvPhJgg1SP4FL1Ryc1hSs",
  "key30": "5qcGZxvs1aPtaXZ9B2DBw5YukfV4LTVE434ow8573Y762BG27mAhoV51F23JNMiWqatZBja8AFeqGgXxX4ZwFc6D",
  "key31": "3xBa8dFZ2SsYfYhsBxg4mQWJLj9ftrj2goPq4C9gUXmpHY5KuZQ1NvNtWDLAsCxbmGZdHzaP6aEjaX1w48bDNbpf",
  "key32": "5z8CobmgqnnJaG8Dd2vRdgRwW36mnrii6432AdC4QZ3hNqGVmfmYJvZUPmpKCuwJsdLjCpi4LsQiaVwZ79UcXwRp",
  "key33": "TqQUvRW3Y6ozHMvmnxXceRDZrdWzEZbzhiNsW5JPvZ9J9MH2kXYJG4VdNaiuCQhkwdq95acqUvF97ctvrHhoWwE",
  "key34": "vHXKmnoGnj5YZvfPz6bkUnBgv5UV8pDgLUfjrWMv1bHdbK4cf6VYFFCNLVFwtuo55XkhxTXPWMin68j6u9NLB7p",
  "key35": "oc4Wpyvkj8NB5oc6fqWH7rwQkhG5zKo3eBaUb9Yk9x99TXv3FeZZgK7upPx6WgiczVMzwYV26w7DcSdrTTE4Yu1",
  "key36": "4fwrBTx3ePYUiFnikgNi8pdZzQiX9f4466jWmCkshJuSW43t9LmGtA3W1ACgnCEC4vrcbo41qRH3wsSxD88GrmAG",
  "key37": "3PMcKmfJGFsT21C6zWTEvu3wVx3yTybAoWcBWYnBMsMnK59vdmwrn1r3aF12DNtHokB81WbkpY6bLoyR5oRHZfyJ",
  "key38": "4k6c68aMLEhoF63eMrZ8pr48o3HRn2SEcR2cHiuXwWsLkf2SHzXg9ZcUfRePT7cdygp2kvKREfpYMz1kUhbdHjsy"
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
