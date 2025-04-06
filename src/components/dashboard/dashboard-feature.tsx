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
    "qAu3r9RdDVDhBRr2Uzoa8zFF1TcsT4Rv44rcM16H6Bi1NND8VY8B8gaaK8rHpQ9j12zp6nbhbutzhr2brE3aTdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDgER4m5tuKwdztz7Zc2sEGpWwrWUBzJ5itcASiCc6BYBFKPX98ARySgy735EfZj9fc9uMc9GUzLwyafYhcoCbi",
  "key1": "rxzc5fYgGyKts1trkYXSfG5B63q75FGqokDCogHofcP1q3izVmHKR9Zk6ThBbChJr4c5hb2YWML5G9TTAxk5Hvj",
  "key2": "KUjJsc1KxUzwuc4BfxV8SVVNqNhYyDb4p5Czn7tfpPR6uMGdaUL5qWNKk2Q91S9MjJYE3naqXC3tiPjgUiEz54T",
  "key3": "3USJpYpWh128AtjYnev7FuuV1HgScSzb28wxjTvMNrjkA3ys7TMdkb2QYEKLDpgknANTHxvEFYUYiBovQ2NN6vHD",
  "key4": "4VejJ57sJuThaLj4Kqg9Kx3cMgLcBeSKbvLbQtrw9oGvvvi2P6BDj4YkSRZJ39An6wJTW8SuCvUQ73ddnPZ2gCYD",
  "key5": "5QynYNDff8TeuUcSPiojbhk4U3nfWZp95ARK2eyAH21EwxNCXU9MZpvGrCZLoK8NH2st1C9KfN6AjGQjtmhfgNcy",
  "key6": "4pVGagvS51tnN3WobDHdVTd2yhMndT4vs95ZcrWUtV4GyFVVsJoCPdxDBSWL2LyXhkSTBMhv5pKVVenQLasuErqU",
  "key7": "4NNmvmm8wGTvSJTJFJF5UANS4uKx4MgQjNF1kW96qZCVWmLy2viErDU83h6pZ6GkWUNjJxrMgtjDzJUe2Z9yP9Sz",
  "key8": "xYHxaHmy7GSJ3DFSWDDYBsToQAvvfXPLU9hn7fgVj7iMnhy3XotFdjMGd7gtXaQ2JF1pCtpvXUyYhZgr5Caoe5Y",
  "key9": "3GZAk4s96gaYdd5wTk8M5e48dEdnhVN7uyCw6RPxhZUo4hx524Wc6pEHgAxpDYi6T8tcu5dQ1dDiLhKb3eMf2ZFi",
  "key10": "3wJvrQfXTv63zkjeKazJtrYijVTVqyb3QErDvJn9xizARNjR3euE9nwbib9npUQv8na8pRhvsprbZgeeFkL9LGwN",
  "key11": "5in65zSamSCJH39beLgitmpqDwuWS1KLFafssZYxw8HKXWhKBD3QheF5UTtm99ySuFpMQeeuQ2AUczEr9Q2cec31",
  "key12": "43BX9U8hKMx8Kvm3JVA3NtKLf6ugG88kRj7XWEA1fnL5rqY4LjdHBniBBjDMBfWXRi7MCg3K8MWbfEpEZhe7qSbH",
  "key13": "2cNdq3hz2GPhCALehkNXGFxawgZzqLCesJfiQbPnMomCmgCsCPNFY5o1xHLYLzF1n3EMMqJt5RYDT1aZAf3UN2J1",
  "key14": "2Dd5VfAnXkjfpH7fdCfroTK9qj5kS8oZdkXxx3x9E9mPi6SNTJPBCTU9YJtQWUkeFEEv7Wj4VfFr4jFQz8S6zpiN",
  "key15": "221P8Gzh9oLYP4oUkycxALZsWDsfZD8PxRccBmVRDS5EZE3uBzurgfs5LbQ6bPosHn3e5hPoo5Z7ha6QiQe1AjdU",
  "key16": "49XJrx7s12HuksGEnJJLwx45nEVrGWSXCixUCek24tVzrTXuPnfJhPDDWJJ92vnV3cfYWX3bFSWYMQTKSpXrKnS7",
  "key17": "5T34f3z5gvM5Gd7xqrUUXYRqr6eFq5FCUFFzSziWNe4Wa2jr7dqS6nf6Vpg5FCPrio3QdDFtSAL7vnUyNstkNWcX",
  "key18": "3JYfgK9f7SwF9ib7st1KA9Kb3hgzAos7eDAy39pvFZ4DPeM1cYCq9BzsXe8JYdm6JaDWqsSpLqUHF7Fbyz2MtMHE",
  "key19": "RTyoUBHc2NwD87cktUMcBhbSiFq8HjftP3gdDswN9QmE156WjH6P49oxR6bnuezaykupZw3tmyBfU77MSNBeVi2",
  "key20": "3EMgUxpttGqgxsTvCCvWzMktzsZigovDPGTh7VksMDDmTSagDTT63BLSSVo7kazTrPJb7aWiooCxUcsBtZKfxS6v",
  "key21": "4GE7tWBMKZMWNS4A3YK3FYqprYaeXKeovCRYZJoNDpWqfGsoPVgjto3ayELAA8Cmu7Uq9dZ9ZaHfkmcKSeBkWq1m",
  "key22": "2jxezCo7xgJcpr57Yb6SYiKwRXNRj496tjxWDAHXXThzjokzVU3C1o69TaviQ24RbBG4qmD5ajtzMDoM7bbSc92Y",
  "key23": "4FtCZ8Rhhg5diiJkjhSAFjimw1vEJwwQwrHjBZQo19jfGnceFUWHRaEzMhe664rwACJxegWFrzLkWrSz7Cfayg9J",
  "key24": "4LkdLpUNmTWXv7wrczyHyvyj4SE517bDG87Bkx4r3FwZpDiPAdAHHZDjF6qPRT5LosexWvihjtqk7AuC6DLKfyUu",
  "key25": "33iA8tV5aEfuDxQh83x4fbgBK4PcV9gWuFEsfFfJFQLujVaUNkidBvabnA9HLnRmRRFb46PiPy1Rq5voUwniz5r5",
  "key26": "4Yxvj9QfiPgcKngqWYdekxdsEK6sKUYstBAzTvrDuTqhiYJZGeeFr4RXNkLY38V9297yrYo7NfiV6hRg4qCPrELT",
  "key27": "2AYaA9Lbzux1rTjbHzezT8d3YBwEiMJcqzVYMsv2TW5E47aYTQLvorR244hrxoJBZYtpiDsczcxFhhDts2ko486C"
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
