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
    "4gnkgn2B2Lfpgf2nyVQxLocr6cbainDnLLnHHiLZJR9UbAgdhHzehHVum8DUF7qRGDrazR8uP8kiWCa9VVm6z1E2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ZanRDVhjsXDM4pSLz4GeKUFJmbQjGK5ZNzFQ99FcMuFVg3HgzoJFcAXdkBQbafiJXPkss9yrZnzyN5BzWcfKFS",
  "key1": "3eQmknRuWabEAPToFcVeHgkUU88Bwx6a2XuvPRgytSS3vMVirRkyH2Zut47bFz9XwwZUPst6nPuVRCTrViwJpL7Z",
  "key2": "JsvfKZ5tSS1TXAPYyJD17A1xyX9uZ6EEugSdXqLc7Ttfb3ux13jcuBvvLhKGWNHkxtogStj1LkbnGSmA7whRB31",
  "key3": "45mozG6XpWRnmp5nzLn4TjKFbQ3wm5mtF26JdX9XLNk9LoTQeAEEvt8AqHxWAzCXdukvoRj7R9hK2sfHWquQuE3K",
  "key4": "fvcvbW6pjz4rYZF4qouJtLL9jjSQuXGrsTEjAwVZ815ssMF9YDQJVnnzMoNcvW6JYP7wcugGnWd9UZ5Y4puVmLE",
  "key5": "o4woWS1kCUrEwsyNad3huo4jwa18bjg7nrA3tjDRCKb4gwDpyDcz4q3FwFLpwrmf5xUVBA7cuA7n55Xz3BWQyWd",
  "key6": "22K2cx1vp5UQQuDuKFJpGct2a5PwUkNZdKtYJa7jhzhzKLRVk5pv3VDoyg418F3vxosDxPtngbcgYxKEm64JFyeu",
  "key7": "4tCfNkcnwULmcFoZQgfykq22MErR61GTcUzmgXrbnMnXbo4hxnirq3DShwoPJajgbdkYR2iA1mJPAt9qhRJTQFZh",
  "key8": "5a6YNtWnmYA4BQfcL8Kb3JZXCTghRuFQ5bVyPR1fRfRFXfXb7Sac4FwveJUetuguJtGYTvsCo6tRVfjRNe8gGqaS",
  "key9": "iXc22T39PWt3T4PPZdjEZPcz4vWd3kugqr5YyA7igbjveMtb4DQjLLKvUaogMq8YFRPxJs7YfsCsJEFLHDS4L5e",
  "key10": "4eEKx7w53k8TSwvh7GskUYWKBX2FervtnsgyjBUYtXAwNFcQiCHw1kqm8fJncZXMUyEwo64UJ66JrefwxdogoxN8",
  "key11": "5oEouPLQXcobvGomaoWAtpC6jHakDT3nCynUXPhqW4msejgwEnfbQRKj9bzFJFkp1AgsSk23QyeQNBnff3zzLW4k",
  "key12": "268B4Qh1vwFMaDk6ouC9YLz51kqEW7kJKZyJEcmSrpNZCbpVEyUcXvr7R5G4MWLZeU8Zt9AvbRvwwB6jhqaCShwX",
  "key13": "5rAX4mZAupugfL1xtaM8Ds6wXpy8Cri7NTzG1ZxzYLpKrCGt3smX52RuDL72LpzpANfyqqAvaGJqpJ58V45evWmr",
  "key14": "5NGQbj16QWppTGudah1KaMQ8t68FKWCBsywRvxnmnjEzdyBCg2ocGZUqGWUgGhWxFnyyxrxXAPeFhgKeRwixcMyQ",
  "key15": "3N4pkbvRKKKDUTDqjdxw2N4qrj4ytoERb3F7ZuPbD9Bbo2CFibDZb7cSM7WctK4CwKr67iEB9aXPTViGJY7GZHaW",
  "key16": "2C6XGr9W3rrxDCuu2cXPz9EzmuGyRiZMppkDVhFdeHzYsJAjqXYCoUXNcUGfj8C2K8T1V4PBGMFdPozGSvqXqJJr",
  "key17": "5Jn2vW8Kc8HjEojyFZovvDBdyQcNAE27xxVQAx8M45dpe9GPFyAkncXf7x6aKQrWMCS5SLBQ4U64NXDZLTxRiYH",
  "key18": "2Uf1kE1Jw72pKtqDVPgup2fz7YQZkVheVgrAqZxEBhcnkMTn3Mh5dcieX7gcnZUWQkbebXJsZ4ztnLGra6Ud7RdV",
  "key19": "13cX3X34Jf616hEprbqigG9ditmhFQby5W4X5i834c5KXpNm2wfTKV6c7axtk6H45fPqYAhX6pWLHjLtwhjNZbB",
  "key20": "4daSjReZHCQJXKaXigcWannq8RKnfhtbvkLZX33nnLanTs1FkhRRiqDQLVmPMJYUS1tWP5By36WbzTpG3Ma72yTh",
  "key21": "4tthUVbrUXA5mxKKk76mhkd7PxxAT4MxAmr9BrJcKKh79Y37mBcLoRgoRw18A6GGkuPi9g82bv6bmpDKQzV3E1uq",
  "key22": "D3FRkpfjjRYPHqg3zuEaDKSKYM7jrSVprJtTN9paXbaUzWkSRCBaLxQizbUq7aNF9vi6FbmsYquup9CM9QQgG5e",
  "key23": "7YiqTaiXJbxcf9CUMftCGJLenN56JLpVLB4LkD9iDfEtYejwRZqxEEqebT6gwoMBCj3kniidSZ1QmjWxZVACR1j",
  "key24": "QMyTt5gG4zfhjdHTefu3gttNCLs6VkMNm2zocpQk7ahCxNB463Y1ng7D3B4qi9t4fho5stFGi4yTfFQhNt4ne8B",
  "key25": "2pduYec4h7ivoFnU9pimGDKrnwaNQYaLfRnxTcScYGVxVMKgxCTZmHWArCF6LK2mmpvYZNzk9ppF6DQCmL2nTDfN",
  "key26": "4YFSLvZ1t2m4jRsPCKwp1KNHNWmiJWCAtEgzDCxCD1VN61NBAmhijsJEoQUd8R7ETKRfaCMvrjK1mJmVFit4TGwe",
  "key27": "4cC73UrFb7EaCg7gLkXXbRQXaAuokvxiTD7B67CD7w8xo2ARSkPbNasw7DFVx24pYkoyBp12qDxeGs4HtBSK43kT",
  "key28": "2LRpn3ex8NC4ux1nJ4DHnPLhbBsr9jJBcHYrfydHYhWgpU85QPQJwRWemLJkmmFdWY9ZzrmQTqgDjDQxUueGLfKt"
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
