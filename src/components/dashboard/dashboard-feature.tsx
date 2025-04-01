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
    "4SsLDHxjgJnZGDPgt3HYBknVr51HHA4f5Qtnu5fsWSAhD3WtyMYUyjiaeLgCrFPZwoXXdLgat5Prg8QCh2ZG4NtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DfJ2vXjoHHQFywDhxRDfoNMWmMkW9ryP1UvSgUuKDRh2UE267dnRjDYFAwsSsKeWJwJ5PZDXBrhpFkRwnbr3P8",
  "key1": "5Ra8RGf3oqLL1CfqXft5Wia9eKUSjSgZny97hAejspYq4xAavTrueYiYUTZMnfJD1qJ8wopyAvpR4AFi3ZL7qAkm",
  "key2": "2vnb7z9xnWwnT3oMvysv29ispfjAVuMUbapJyh37AzP7jgSUkY32MoaoJ9AFY1zpnfyByJreLX3CuTe3rJJ63kXJ",
  "key3": "4aWExutcMpYR1QkpWxSoAn33Ccpf6A9wpVjGyTukqaXNhieWV3ZJtCJN9vzu9uveXQ9xdzdjM9Eho1cogbeE1jjH",
  "key4": "534WexZRUb5pcELab86uzFGo2mSLA88rpr5SDYcjP2wj6gEHE3fKUfLEeNUKHVmJgAxDEtVrF1EmLsgsaQerP49G",
  "key5": "3StRMifk7j7hXKHwR5KEmYiZKfK1Z9BcoKpg6p9BSL5gz5U39az4dXdzFE93CckhgJRg2c3hHaYF464A4FR6X77Z",
  "key6": "25Fdhpvvf3Bv48fGHgF5RNFp8dTnrvGGKvzfFkJc84UJZ2yAxaWo6H1pTZtWY6sYYTn7jXSsrwJsMD81e6rCv74d",
  "key7": "45Fb1W9nWY6JunLHST5JGaWagUHB3EtuqapqRLJkNvQvU4uTgdTBtXsF1YrHsbYUk9ifJHgHnT5q9PxbsHnhYTsT",
  "key8": "5fxRFWZgq2Seoxoub6qSR92XcjsGQTNL4UMezQSFFo9M2Z26rsDHB4C8Z7UL4KUXuXvyZWSZehdqx8FyY4gqw8Pg",
  "key9": "2PkK25chf2fiCcmppaCZTZYoyq2EN3rnjzEjWg4ncK83MFQYrPdRhepotrG3NWSGfux6TKSVmZcPU2Ss3YnsKxzR",
  "key10": "2zXgkVeb8Q5Cvz3kjpoB78G1eMwEhJX6NqP1bFkRRPxP5QgDW5ayUEFVc9jQiWPjnGbdCdQxtEF6PyEcVoDXYY8W",
  "key11": "4Wu3BHmUXsALiKpYishXEPiucZCXQh9i9teyzoTrds1XiByuV8nDcXWC3GdE1gSXry4KXBBzncrBmpNdcn79rp2n",
  "key12": "67oFPK4TBCyXUxUd5VqyE3ynv4JdsygzAKHmmXGRPa5gtw3T6KaiaigyP2f8UmYvpoKwfMSmWsLUmsvsy3nCFBMr",
  "key13": "4FtgoXxkB7GcBTezY7Gj8qg56KyCSd2ebpppF3AQykXia2epFKNE1sFd2nz8SDeAgRJvfuqYcM7rnHR4DzWPJEr9",
  "key14": "4AxRZs7tLtZfnDDz6PFvoDoKe8e37wK98srZPkCqgHWgJ65SWT2EfgqrJdGnTcVdQrkgJgZM7TScSEQiXAfuQ6Zj",
  "key15": "28EVa5Xvw9pMTWBAYVaUfPag6VrvvtZvY2uqJJw2x91w3Dh1w23PhxXP22kwixXnH72DhhZ5u8qMwxiKLj1MejAx",
  "key16": "5g4JWHjBLT5jpbTEvXJSnwcJdRnrZuyTNQ2eLzBVCCg2SzCzTZ4qSXGnBjWho37rKSrABkvHMM9fHjikbTAQdPvZ",
  "key17": "5tnvLzuf1q4aba8WW4ShmyhT7sKhujLLKhbddtgYEDcbER4MX3fsZVamBrfbszFSvkFn9ZVYYqNMJD3EdryH8WfC",
  "key18": "2ZbY2AMSRj5SajxpKfnbQCkCPbXDjnapidYn4sQ9aDeD8YNAdhaBhMjdsuLsKyJecsrzgGXQBDH4eMnvL8vY2dfL",
  "key19": "gXk2oLigzwpcFcj2qF4B7Vo3gNdwm2ysDH9YxCudRth2Np8SKhVYzkUnLC7QTkBxWz28yBpSqYhUvLbUdnhaEgH",
  "key20": "46azNHyQh85Wj4YbEeaGzp98ifVpMuhBRiWYKmtSK17zpFG9wmyXdT7uUd22eWv42nKJD4vc22DPscVUSTkubnaE",
  "key21": "4S8Nh7v2ygQf34smPePkDr7EKqpBqF5VhSkwZAJbtcJ96byhXmf2ZSrxGEmfs7x4GQti6czLwNY9ZqSGJvWHC712",
  "key22": "2aJZNtWxjXfDdg6kHNRLJyjSubP5sFzVQmRfrrX1ZEvFdfC3WxqGKw9rCJ7BKDvtMhxmtYn2bv5dTb1f8MoiZwyz",
  "key23": "242WRuY9oXdVDEgrKQDCD2oF4DeKLRLmq4n3e22vcV5hDU2DTod2VahXfLi344mXSzVxevrXUqraCxN67iRZbTv2",
  "key24": "2ZpRbZmY7A36VzoprLeBDjr41wV3UzvKoFK2UwnhA8GGFmzyuQfsL9iBWqX8MLy3GPxj3Le36rCWbAZptSX2wnw9",
  "key25": "2aVA3EJAie1SGY6qTvXPTWXfyeBZzEpFBLTvNJEk8N5kaTkprJXATfh5jVop3h9iFrHCVhpMTegNAJpESSe74Hge",
  "key26": "2AGPEbd6zHgE38ubvzx7kXbWs3Y3XkF9MiD3MpLdxNgeWJQgt6USSuYwUen5CPtrUSUMAVvzDjeC3buhQDFvVQx5"
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
