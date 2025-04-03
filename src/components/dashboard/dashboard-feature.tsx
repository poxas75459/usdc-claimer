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
    "3WXK5BCLBsVYnX554dkmjryjfT4gQTYBFSW1EYDX8r2zXJggY16xE2ixZ3gy7VyL5w8B8bwPGWjRBVQWbArPVATp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q3pZD52kfta6JKkukpBA9KjHDsaKMZ8B5ZdNDrZeTuiXHEYiaAtCjNXyBFfWg4QvsVRdur7rGc3VjF6KaYhrqPz",
  "key1": "33Ctworu8Pmm5NZpv4B8ocWP3heEGdW2KKq5tjH56n4bpohHLNAdwgfdG5wkXMX2v3zLSFD9j15WCkFeh7XVLAY9",
  "key2": "hx6BZi3e6fyDUd4cyyF5by4Xnd6HwfpzoooxJ5mkJJwP9eUEtxteJhD3x6GZGyjjg7qr79XgQhN5rsvCzdxAfzY",
  "key3": "5zqY6n1ZdvXV62VvZwAT3DrRFaBHu7wMo1bQYQxLAv3J1VD5EAFGSeKT3BwwvpPFKVRykAYZujdHPVFeVkPpMeDo",
  "key4": "4ENufqEb9K6rCF3eJCmPn7WveVQJVD7fSjKYqsEhGCrUuTkvaPWZ5QwUFwg6pU1vBSHQd82nxBCScDMB4tJrB1wW",
  "key5": "5mikD6vu4VxSXELqGit4bPKWUgeDPJiBpP9kMbHnBAi8AN68ukYxt3994xgdGtq4gVc2Hvum8yUXFdfv5UGgk8uq",
  "key6": "nAd1JQq13QSJxKGCYVHrK8K5364ttqH7aVjw4L1eqGNLYgjUH1dVMNVqF7Mp2iwDSVJwZft5FhWcdRyhTWySPKr",
  "key7": "47stsrUDhf4ZD1EiJmVJus8WLpR5unTnJXcVi62UEoQCLV2XvVqqHCz8EsNT1bUsfWDbZSHZXevSu24onJNPKPpe",
  "key8": "3Sh98dmFNhCqYfwtsRmw2y6MviNWSnsq7mL5P6U2u1vTiX9HZHZwg6vCnM3XLwDYCddBBLcZWtULuHaXiLTq33ep",
  "key9": "49LL3wqS8SUT6gmi1dD9APZDX1ioHhLxF5ec18MxJwBHSfKH4git2AQeQsbVFnNutFQYJhogMo1pNEKGgVStNHAJ",
  "key10": "jTJ9LyQTWdP9TtvVoxQzuVbrAtK9YLTLDdkg8KbRj9fQBd4CvRQp9yYAqqDMxcLcFx4JYdP26dPgBZEYNXn4vu5",
  "key11": "4EXhLRVwwvCDUe3JwDsyMoSSdhn7YN2YEfFBbKErLpGV6EPd3eQfHCsL7pY4WxM2M1KspP2dzxkP1VhrYs9ZBmcn",
  "key12": "2TFf2zxKKcUmgALew9oq31tuvAtRLgbH2TdQjQoF9xnAPZSoEp4grMU5dZty7bfukCebMUBvWFCmHbQhroe2Caf9",
  "key13": "41VxraJNSF3TmDi8hpnR3yS9CUL7sgVZNBfBGSuhYfg8EGVDYkWe5HCwVB71aUduwpDzBxL3QZRCaSny2ncszrAT",
  "key14": "4UbYq6F74fB9v6vMjdnPU8LXWxtL3tFCTWCizUCJaWrGpnT2ify9S1aYZ23vDy1q9LDrKrR3krt6wwSFTf5HzSRs",
  "key15": "y9HCBDsv4RSaztxNwN8aFGy9hw16VJwzbFMuBcq3UwPQ6j5uxLGgDTZpvqWazy36fUy3gzSbwzRHf5DbmznVATp",
  "key16": "TyzJ6DgiSwMj3obXHcbTSzZHpsjua9FnBPcw1ZwCxCwSeS4K2WHqW1XkSGDZZ28ZmVrjjBTGgZLFDyVGeWUjiGV",
  "key17": "5SCxgmWZowntgnsrvYT8sSwuknKW6RLYddSS1REHwZGvZGh8nZXKprEEtThHyTABTEEy8b7UHGLD1Vot79PGB3BV",
  "key18": "4ETuydXDUHfEytKMVEcqZEcfrDCB9jy7dgvoa7MYxhjVGDCsMEijtGmjkSwwysiXbNgsTBeM7ugTahxh9xaDkAqH",
  "key19": "4BfimvrNcj941nJWwMdr5oV5wuN8LHdde5UALFfbkKizgcbtPQwQZtCq7TUmZMmTpM124eXQGaEhtni8xHGGTYLh",
  "key20": "4NQo8gaz2hzVBKc6iUVL9G7vv5iTTLM7nxXHbjmpG7QHPviUMr29KdkWmyc7NeQHucs6WmQhU4WxtGAGa71VeMG3",
  "key21": "tUtzh3S5DRiCyBLEFBfkFQ1vRbAgLW59YRa5jyXJSxr12eAMKuie2WMhp52MwHozsZLLhMsYi5ZyncZ5xb3q9zs",
  "key22": "3VzKnrtewKQxZwp4fEdhfLbWQd8Jb4L458hx8Fwv8rJWcpFYKBziv92uDTNAw2q72Htzr5HmBeHoGhSB6pepD79S",
  "key23": "3vvXXxegseK4xh8cpmvupJfgkirA52yj4cWB6Ct4g4A9XHmnLKeazALDWx6eWao34E3Ay25ie1AVcmayn87429A1",
  "key24": "3HwsWFAVnbocNYSKYLHJjTMZRhKuQCfrJQybTGoqJdbygoJdZq83umBBCxXkmgptqxcNia8qp2WzQDa7LPtEMcV9",
  "key25": "ZjMgvyqCdWM3MidkKELSXZx2kzM6fssJr3ULhtihgzXia9cJ1KCeEyxRQBvS4hgWzPUViWsK2z2PkEcdavoaeFS",
  "key26": "U61BCMPYifbpb2CJ2w1dB3iJMnTcA9Xh9r9G3NR8zcwFa4RGd7SLYzuD5osNqtg1szPneWAHX2jLYNx7ALPj1QW",
  "key27": "4JYXk7seE7YMxMUiTi2M89XUUXqX7i3ujBFSsf5nGU3nQFiid524thrD9fydKrA8bnSrHSVZ9qxW5MRpLjXfQko6",
  "key28": "PZZj6FeuZJnN4e2YAf3mywvyVjAmZtp1sG3gQ2opb3D9weYpU7hsESAL7PHd5ecSDf5S7NtXUoqvfykX8spf33c",
  "key29": "5qFxHUGHyK94wdy6YTh7nzq8qndMUFsk6kYNQtAd75rahXb8DcjvfGG8JhNfk5JMbiRTGAYZVDeuT9r6Nx5PGAzq",
  "key30": "5fj1Cjp5iQNkFMBr4ebD5RAV1WcrxYESohGE9YAnftgsdLb5tsZ8vMMcMwNPUsvdqHe3NyPoukbaGvrUMrDPrcnM",
  "key31": "4ME4JEgsqXjypU5LPgKTShgi1N95dP9MKkdmtbxD3bRrKopDqKNZkzYSM2TQ7277rNMzLjQuQFXDX4Aum8GGFVNU",
  "key32": "TA5LNwp2idhvjfZxn1EsKKDG6hXLBU2ggyuXAJDzydaSvCxV1xbvisD3uxhE6hJt6pDpez8zztB29hHLPdS64YB",
  "key33": "3TdSkSJYo1QaYasu1hqqd4TBVicmVCSMhG31XWjTZf3Y1sQ4teLQB2RgRTJPzuXCGaNBG6wtp7XPdjoV4LxRnAVA",
  "key34": "2GnK8TkCHc87nW5bNPMJkiq6228C3FWQHvpUYR9r8M7ibz1VAYTn14KmE2AfWTRvnBDH6fb9QcTVmsMLJmv75boz",
  "key35": "2zwusdY3NyLzSLxigGJMDxo7CSukTd9tAzgqEVDtJ93LYuEJYUFyi7qDeXMU6Kbnm2dwbRBd7Ltwe6eBCZWgQg8F",
  "key36": "JrqxGbEdQd9qbf9bf2qMGcvf3oTPi8rAGnr44g6NLFSiE2Yst8vTxPK423tGWThdLDEz66DeEARAbyeE1FYpwwb",
  "key37": "496TboKVqJSKF2iBKTt7CNtC375gV1HBmUpk87ByX5ySgHPEGtLbLS3CJBUu2mqht4YPujuMNMUWYEsntwkPh2y2"
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
