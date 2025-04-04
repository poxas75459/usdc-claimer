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
    "4JgZCF2FhAqfFuTo4mwr3oGNKCpvzg9xvhWpy5aiGFGrZ1DGVpQtU3us1tj38PHBP48KQs7vpk1E3AWWKghzqoDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "577VxhMgmd6CPixFbgkr47RWLJuYe5ANnStL6x2ci87u38qLyDJ8ofZ9ZfDCsXLUJjCPDym67LT7QXXazS1n4yts",
  "key1": "4tZEKJk2Dca4Cn4R9PZBEapAj1Tbtauy3R3a7bMYDypQmiCAf3sp2Ls6bPyKrANXHpv1kTfB4kb9CoPA5g1dhg94",
  "key2": "63kQdTL6WF4YDR1Gs6LgwGhYHFsy5ZAFci7GxfpGuwSa77QjCpBHYbYM2RHD5Re8568i8Hr6DARtXveh1ofRHxUu",
  "key3": "ZzWtrKBdW7bUEFPHXZ6hP6BEqVRGj8tUznsMf5tZE6L9xMTAFfYknAoxKjhbs2QbaXeZHrXmJNk7LNMvNRSCuJ2",
  "key4": "62qDrNh6ckcQTmQmaHPaTdXHmTQ5BbctZFkcvZnfPT8UA313QVA83b1m2wybYmaNR4W4BdZc9G1ZHg7RAoKyjdLT",
  "key5": "2ATLApobqYdrSgYdT3UA1eXoQzm6VoxCXRGkqsBJU4KcqYTYVuRgbjnJHDbpVDKCVa4ki7EUK788MvHEsd4SyRq7",
  "key6": "fiWDyRRhLZQgDNZYikAVsjRYncWpX2kjksTdqcnryDAH5uGcdBqUF2SuNqPTksBA1LEqdyS5ub6YDBVpDQnrVkW",
  "key7": "32deH681M29VWrtGHEzSy3k28RREhFnuqC4LKg17fHw96rBzEVUXTdJmSou2MoWT7hXTQLqKSBTSwQPz3tj2qx6Y",
  "key8": "5WLxRaECq1T2NzA31QDMHSMtFcXV8W2eyTfFsNqhMizK4CNFxJAAbaF4BvY8aPsdogniK7c9rYPKVSPiZLHj88Fe",
  "key9": "3He5r1WFqy3bVKspbH75G1dZxEA62h8wbqzxjExxgKeGbcM5u3Bh3VbTovfB6Rf7rj7x73Cax5a39uR42NK7b9PC",
  "key10": "5cL1vEx5mWrcLRSxoZfr8XskhT7NbQtFHeCVxEoYBizy8XPpqDF4kGg6yq8XnPkcEYSYc7TNcTL65Wi7potDUboY",
  "key11": "5dy96GEU9U8YL48pV1KxYrdUXUAXrDu4UnkmSV5HDoNTv6iQpFUn39Qa4HqK94j2Gvnr2hmqWAn65vzrWPEvZPdX",
  "key12": "5MwPDfdUxbeDYwaRRYGE3BBst792aoamSSCcp6krECStxj9fkLAwe5wFks5bpKmFughym5FhAaNCVSxTQJjhBPbj",
  "key13": "5Li5wW6zCZqHSAKPZKqMKxaApGnrtu2PhDST2SUtRZ2hf4M5qhBqPPXFuxLz2aPJqHyyZVk1zYvBSdJADcYdkEZm",
  "key14": "25p7TQDm5nuiGtmUc34k21hy91T5jPgXpgbDYut5dN26bQS2Gdtdj1rR9KgQ27ZM9M6CvXg3GCzqPkBNAPPUkF9h",
  "key15": "5gSYsfXiK1GZXGcekJE1QQ8F3KmGeHSFJ4qxPzz8GJdUGqR8Kkp9vvow4zuxgeQfp9nFJDjc5ojXfySghgbn9GRB",
  "key16": "3azNw64TYa1LbxyGw89gBRkqqutW8gf9DPrq9ispGFz4fMjSSYxhaZdc4X35jcBNDC5cfKXf6hLbFcWvQHNBzxi7",
  "key17": "4YBv1f8b19UrShSJoyZHbLuVf7Mba41eRpT2hyyMoCrWJ7hh33Nm3Sbq4ZvVEEDwex8FnQbYHDZ4NxeqX97q2P5j",
  "key18": "5x45vHV7JH8n6wAMeK4VS1PHavBozPQ2EmmGxH8aDWVdGrwZuY87FCRAh7pL3i3g7cQx6WaRPC7q3AQdPUUs3vc4",
  "key19": "2rDfKr75zPjRCRg3tzVKbc4K39iDzTad31hwvKr5cDYSGL5DoqRirwzCZSaUzguaJehabkEbUEJ7R1HDFEFYEDbm",
  "key20": "2zWaEFoc9fzjNQvaNKjHCgezEaroAKfgCxSFMVxjfX4XmfbA7rtBYJFG6dp5oz9viAHuSwx7FxyXXjK1C6mdp3Fr",
  "key21": "M59KuWoWNkANJQM1PXsfZxkbSfirJxh4N8d9E46cwoatbp4ogBg9rXbSqv2w8Ahtsu5MuSNUvzGYrmH4CnzabQm",
  "key22": "2QcXi4XR3itYYXAgZrbkGjEfRAMUg8DHXWmhbFZdVN5tBPkEVZp7sp7ZL28wLBXiJ8ZhEXXvyM7sPnsCyi4yDqf4",
  "key23": "dakoYEQnTkFdxWB1d1ZmUCSq4DeCcqWVH91dmxoJz33rrP9NQVamMjDCt6CKc1oVK4P8yxuHV8ExWpzcumLGba9",
  "key24": "DP7v4LmfbpH2HsjR7J4pnVPFSWS6zRKBEPXsfCCkoPhMeAv8XYuvfReBmQszSRqKjr6UrjsTAAGHTik7fLdqbqe",
  "key25": "5wQAFneRTrLiVZ1jGPCUb4Ex3MTL1vCQay5Avm1P4ix8DS3sCS9BGQw569Gb6GyZELwe3gL3TFxkCfovWTmCa6F2",
  "key26": "CBHceDHmuLmHkZpgtLVXCfMxmpWjB45Awu5aFYNzSVSwNNeq11ggyCJi2pcT6TTHjv42yA9MFfC6eD31zYtuK3A",
  "key27": "3R2HJzpLFoQpiqMrrvWKJwiJNMjMEB9rsAXkJteoKSVgLktVQdf8tT4Hxn6v8WnRAxrAct1KcKGr2DTMAjSmSymu",
  "key28": "3Mzh7Tfib2SpU4ca2JrkvuDXHye7kZGnVRebiex4oXb4pHZvWqhnmoY5AFhoK63qAW8uEpq35yxQ93za8b7qkrtj"
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
