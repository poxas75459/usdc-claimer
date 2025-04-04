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
    "5pEdkdw66krVdfFMf9dKbqLbrtQ7Efe2Lx3yYqKnXigN7BG2Fy9zJJVtBSmLisJJgRbyeJQZBJB1B7Vz5CF7sg2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tKtagPEBCKiMAKeAvUvrhEywRGZYqGNgfv8nRhtAkpoV52QQWN5ChF4GdvqmMAdk1xkJRMVicXrLw3iwj8kBSDM",
  "key1": "2yPFS5uj6ZNz61vM1hZ6kgEw6c5sUzgjxeK9QBxpxDeT81ADiZFPstwyx7mRMKuZKxMqWXQSshNpCurYpKyKGU3z",
  "key2": "5KPJ6a41osujL592d1MKXADiMMzzxfYxFt2Rd813pEo6KHSXbxQR2BtNTtzrESBgAdzfKriV5tnCoKzN4qqn7uzp",
  "key3": "3rQkSQRWRNNWLQMq6zCcQnfqtxcnHa2PweFEvvhCwwTYKowQnjZraVfp96hFNppf5xd1XrKwMeEfyicaBjfcUFtp",
  "key4": "2CVFZKStPbWpCg5tnH5qWn5KySqgdTpEwHqN5qsHHZH8ZWLkWSJN2hNrGsZzgEPFCqGiuEnXF4ZoFwNiwburbZnd",
  "key5": "UGRNnexnPEPY3nMPB6XtAs23ruZVAdoTSRzAD8HxTcqzR2n85XPxVxdMNBHRXvFhWbGosGnBKLB9synoBUXMBD3",
  "key6": "46mhDLFKcwSsEVfDJYpRH2UeRVpCi4SrcCCS6Thb3DKjLBuE1cTmseDr8fxUXMc1EiHUnqrZEw5ccUsRBjvW2dXN",
  "key7": "2dT96FTEymFqQQ7PzpkuEe8K3YVKf8QaJ2p4Zf6X7hhMxBTuN6EtoAeyBCFmTAX6AHdQ3GAbXux7CbNgJjmAmxWy",
  "key8": "2gEuhSXN6fPdCZgJDhsJciH4GFk3ci11bickKX5EbrweLvhqKUkWuGYBQ3SDtMHqsKKSQ3hLdqNLVbKgGKvDxh7b",
  "key9": "58SwGFfYCfLZeBPnQM2e87BwPZiM2HLieVXyguQtf79CN2k2perhsTy6NbQLbxW3PSEgv1sutxAfJMGSxf1Cyi72",
  "key10": "2SjhPTNFApBvkvfmVbxgHKx6g8jhyup5mwnUCLJyTwWhZNEogUcPmLJBiejezKCeQVouqct5CbhqNCmgf19JiVGD",
  "key11": "2nPVXzPz4BoiQhgRRKdhZCVGgiW4mun2MLjKYcAJtuYmrnci1QwFqTET4uZZU8AQoYvJZ4TE7PGiP3WiWmsGY3H3",
  "key12": "cDYoszAhN259yrjHzY9faMtozGScWgFvqTPxsVV5WwheJks2dK6SvDi7wnxgWcVTqraCYhDQkGgESCmtto2z5b5",
  "key13": "47Li9e4pPEnHZCCTSXFRLDLCf24EjRsYE7bcWSufu21atLaHRyh96EhdU1EqLh6wuXZozK6CY7kH4P4DR9PManzz",
  "key14": "4vtVyF9MuftnDU3UE3P1Uwg3V4wnNfSsrdP7WiZB5FggTzWf4wWGjjxW7v5Qdw4n7r9XsFookD4Y9fWvYG4Z1nB9",
  "key15": "3MMooLTrYQfHEE49PYTKHAo27KeniMqjHReYD2Knf35wZJkfYSafAjMyx6ZM91UJNx3FRQkQ7ypEsyeMPvUkBvnX",
  "key16": "RASfYvrTVqk2nm1d4ZTBM7WQwUPw5baysNxmDbmpkPAUeAQitFAqh1aNEDDs62KkvTuCnGZuf9Hr1sFni2oAcox",
  "key17": "4CS8D2QbR1KnxTPvvMJt2mBFyWrBbExuubJZt2LeMrv6n4viJ7gQtjQKFd7tA7amawyUpXHXsUFUadELAQoPAZhM",
  "key18": "rCGfADYZK8aj2PfQWuBmF9fj5VawkrjUm7k55D8VY5ags2nkyFKfb4qfgnkKYgLEGmKXgJRpfezoxi6sJ6kNPYR",
  "key19": "45TyQw7W11SVQ3g4LHm2BBm5vsxYt13tnkVVe33NZaJd7TypRPFNyFMTNKPqYSZoC3fuv4P1UgJNDZZYsvRrhkJ1",
  "key20": "bJPaVhouBz7a5Lje6PQrrA16qo2wz4FKDJ2h4nbpAi21c25SkBjwVHMon7xzBYqwgitBxHWBJdvc1nX8g8Lc3Mc",
  "key21": "6SGDHfR1QJB3ooER233GiRfZCkUX3FB78PhYW7MRtjhTvJpmRXYSBX6ZtAwMAgqzZgfdM1RMPbGr9DvHSJtQUNg",
  "key22": "57z98irBJ8DZe9HCXEfxE7NBRqZn9J4atoCsMmmKBVtkaNjkk3KGx1xgR6WprMfoTcuW3H5yEv4AARrggfAuCa9d",
  "key23": "4NJmyMJyQvQzyjkuvruhR9FumaG1bqkSwLvE8bHApHZMvFhkzudjQpmybU2nvEoEWQu1AJrmKcDpFKHH8cwfa462",
  "key24": "3C2RrS4dSFYzMGzPHTcbzCdygdmAzyrBPP5KCEidjt19NYpRmy52szCvvRGZdmUSaRXxGLG4g6gvGkSUgR9L98Nt",
  "key25": "42z2VzCRSufnArBHUegB1GUkufKj1WjaQxnaizYydpWmb4bB5zJ5ErBcNNzn6Eih76pgRcZ1QZmKLUc6Gi5Lqp4u",
  "key26": "35qorHQRFwsmyDgZH9mmjpjZknfnQ7rkrFadvfX8pZAJzxWApQrKan4ATPRC3kavcYL6V92U16GLggd7kJJMdmjs",
  "key27": "2xqQv44aASrpKpiaEfywRnARYnocg52UwRHcEHAXcqAcWRdDxAMmjyL7X9LuCHuhRjop1JAdnGRtbqLhdqxA1twC",
  "key28": "Cqez3sZxvTXPbTm2Jco4eWgd9oRcs1uPqk9GJR3EDqx4oz1CiNcttkeK9kZ4C1qknspftdLd4LLbMSp2dLPL2Ye"
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
