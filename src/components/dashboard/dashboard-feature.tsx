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
    "4HUxfs6piqfyZwBkPrBEqeWgQcFjgfYcb3y7T1vFGCtW3kASSpjLzmJyfUWeugLqCFT9deLHmiGqm1jL8CG17yZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64A1mTc3H8bkYritPZNoCTs8czmXkzSmMhsxT1XyjLJrfbEMJF9zyeWAXEDkYxpc8NGsAeTf7AtBLwrMoWufEa8e",
  "key1": "2sTYg5t9p3NgchagfYQf3GFTK8HcyApefMhWHJVqTup4ue23oktDuK1JUXk6AcRXqthVjQUWw64WfKAt6e8mdmNz",
  "key2": "5RdJA8fEAiFYtzLrz88vmdqNRxEnJw2YQqWk9jotiUKc1sAjKmDr1viTzYtgV6TC2nTLfyMbSQPrpnK2q9DxxwgS",
  "key3": "3JqTA8tvB9EXsfnEZX7n1rWsRQnv53ECsxd48VtNG2WCKHzPTQnKrvjrDSbRgGQdcaqT8ofp16u1niaqpzFAadQb",
  "key4": "4n8LTsjYH5qACsXgd62VznN7DYj2Jx5QGmpncUXqrrukHj1ookKJi6tMhPjr9vjHq4m3BdUBgY2vtoPxCj1ZwcwR",
  "key5": "5ChASs6nYAFzACs9ZVMwgBFJcKMXWb9hXtrWFrp2kZqTDUAHyAheS6EvynZfLFrFWVPB6YiRqx1HmmBcLNBkE7zz",
  "key6": "2xaQXVtGMURzJoAWQLXWn6s613hbbYW5Hc6gwQAXo5NEdKH1jHWPsq4qz8EofVbX6UfnoqtePQ5PdgzZtb8pbRFA",
  "key7": "3uzMwz7uQw1hbPPCEgWEfWYJFURpYh1MFY5NfnQSnKNUdc2nT4Sm3paLZ2aKWGBinDg8AAMQraYjhPSxFnZqh4fF",
  "key8": "3HBR3CrkmQZihCMqYjquzMUa9gktPPV5P1HiXeDA3QRcQGWnDJ281oiPDR2sqiyyGeQREUP5uacLHrMeWVswCxFi",
  "key9": "4fuNyE1RKVNnzWk9huBXirqeg1KpEK2CbQvUBznuKov8iP1q5nx6E27fMWQc6qfgzztGXzoyHTwmshctFbRziCxp",
  "key10": "N7K5F9kHVx7KMyZ5QQnAkG6G3BjCGtjKHM6NYWkEsputZTJvNeeEoj2qm96aLmSL2nKXNfFbXNfmYiNZwrhJCjN",
  "key11": "2HEFnTDZFb49cdp7FoneeWhR96hiqjir5shvPMuFgYZjtKFADP6YndCxTMNsx15J2CFQvw6k8dni7d6UTMyAmo7k",
  "key12": "3zgyrsWzKcYGfqkgtpuJxK5e9VUv2hqFD3dhuY82zcZfVfPy4ecaupEq2dyqS2fhiLxKvw8i7QuLPVW88uK9Tn51",
  "key13": "3XXo82BW3yAvomT62HHJpSpicTj6cPv5LRmvABMkDFjZy7Db5cTMs4AdZw2rp9fbr5R4LDDiMpnbczJ1upsh4pYy",
  "key14": "5LSy4Ah8a6JyoMMmnPvvs9Kmy1eEFA3D7sZ8Ba26iNgvwTkcRqu5YDQfKrTkaBQ4aE9DXCUNZWW8J7CxXavroeGo",
  "key15": "4QFeMybhe91acQTZWWfeEDbs6Gp5xgh2nzqcWaNKbiqp2PFFLdJuAbAzpZhf6vUGL4AgaurLcbfsPQfK1p2bHLTD",
  "key16": "96BwLfEfMpnrHKdLMJyUb58Q5YyC8dwmZ1LocMy8J25hGFtkSufeWceG84eMw14S4ujj6nAswXCgL4EHUMwLA9R",
  "key17": "3ncuNGJ8C1yLaJaLFymvAVUtUepyeaP42c9DG34c3hnPTw5oXBvxnV5qH2dj6c39Zx3SB626bgosDV9Mg8gJxxqw",
  "key18": "5rABjRWK1EnKbAnKCyEm5UpopboE4nwqw96P95K6gZh2wYK1paL7QcTtDbEcX8HWxA4kc4n11TipmmWpgovxK6B2",
  "key19": "3CxyWNWs7W2U8b41Z6bpC3VkS3WGEc31BGXft1xeTmop8GuCiGXELPxq4D9zCSBKmvSKVtodhFM7kb5fjc8Q7vba",
  "key20": "4xagzFdnmuDuwT4bJrEQPE6dtRAbTqGFpAYzn5jL7BNLeyPnVayTWmiMPEL3ZKzF47yxZZjgttJ7K3nXHW9nDFLY",
  "key21": "5T7pvGj956nBwwhe5Lzu8VmW9XeaJkP29PDbcnMLcyU4HJJXQb5KWnL5n2UxsSSrTYYXJtYzwh2kwSqwShD9hS3X",
  "key22": "SFFscJFJ78cwfTmLaaFnsYASPFiW9hxphKDcF5Rxbw6PBGpiuPDdmr1qtpqtF85XR374vm99pSXJP9uvK6gerg3",
  "key23": "2EAXNCxd7Jf8KL3TPqumSkvDd9efwmbT51qAENJwh99dUNAjs1faTd4ZQxToZfZN5aZHKFhcX9atBAHcXxjGLjAh",
  "key24": "tABdPt57nRjDw5GUSZzSrcHHRrL8x5hDGnXqJKdiiUdkpJyRr9GkC8L7nV8TRpoiATe1nz8dsituPfDKRVRCkvW",
  "key25": "nUuMrt2Ly3KEp6dAKdNLw4jRWZxcWT35uGw5o9muJrShgphPkecVqF4TR84BG37bgqNM1RB8SBmwcX6sFwbd2eM",
  "key26": "4UugP7sXFpCUXgGkZHnSbEZ3L1PBDtJ1fY2Bs6L21R2euDJQnDKVXynH1mCxvhoSX9ot4wb7b3A3dwsGgogHL4Dc",
  "key27": "4rHUJSPcbE7LULMkMbc9XdY2pJDbeTwrxDmbZRryHgw1QdNRxcNi8HwDNXVNA945z4KUysPWRwNHrBEWJbG5PXgw",
  "key28": "2FAbuVtfs14MJxnFPtGJioQtuPqVi5bjHe5DXGVdidmq3bchkzwxyAMxx4LGQ2heCsg9UwiGnMivjJhfpNAVi76B",
  "key29": "2crAc8rUEQXcSDyzTERFrhBfC8xM5BawR8Tym9g5o23cmemPBWGnAAY1vTcWQ51R9GcGgDXZe81ts1wZkj4dyMf7",
  "key30": "eCWjZ1kSzFkSVFCtTMdi79Wghc3wZ5jmhjr8EgwQCLJuVTpjbxyyzBxWiTPpHvXXoak7g919uiQymBRa9uMqPYA",
  "key31": "5smFMnRWWRUAYSaepnJvGmJmzVJrVqBeerCLMJHwmW6JWJbDZpc6YKrhxG1FmWwbjcSCuAtnADbBGKJRJJ6AUvXi",
  "key32": "2xTmZF3pWMRxFh7ictfpZNrjXwbYijjSYzNHh9GqZMDaPJtNP4YCri29ioVhc6hbQFDJ4rgzG53e9psYMqWC5tZz",
  "key33": "2NQUpt769TE7dCbf9vz8xZYH5hSHJqhUWwmCiembWHwmFcrWcMdCEgboCh3ByzJeJajqorvnTLAiwTT39qbZn1im",
  "key34": "5pF7jv3QQVBX4eRzwBXfHaWudbTF1BHDchYsPPAJZtff7eRJLsdBT5vdP4H2NCPwjTng2Ee7UfZSBDPEkCeUAfvJ",
  "key35": "3XCdmqtr7cZVXcxYEkB2PCG6ndg1ZwXtB8ZS5q9tSU7MpTu8LNVFJuC9RMVjk341hhtABy3N27QRYtNAjE4MGJZs"
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
