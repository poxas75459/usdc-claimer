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
    "3dWoM9xfiWxE4ce2xQELE9krtxpphbgKFqm6mMpfXKRpvpTN8fTFygghuGgig788HXbxwgfnPsKyatv4g7Xh33BL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GR4Y9WYGMY4BkvqJFVjSrog99DUtRtv4c1dXQ181ghbA4V8YB2hRrMTTsTCbsRMnATwxZLuy1jpXMV7AsZURVPr",
  "key1": "53Nzsz5oLkJocLJA4qVJFnzp2NQR6PZsondSsDb6PRsP8xg23Rn2nQiguecE9EbTtrL3dD3uttR9MBFZrwsK6mJA",
  "key2": "3zXp1fSMcJt7fdc3UrQX6AGVdHZn1G7F6RXuDUUhtCbJEbVrHqYjz9igni6pQEoiKAcozijBCsfGFnzhsvd2zZHk",
  "key3": "2RBP52Gam8RCkNqTJc3koNYT6BdmXFzw1KS1bjdgxjjvBwKqu4thAzShmZJ97Uwq2cxf6rf4qgd1h9Kjazd7FAzj",
  "key4": "5Kzof3KQvaYrKJh4EucwTCmzBsLfTvG21fK3uPc7Y4v1jFSuZrrKTe7ssXqKMUP1fZjfwEZTGmXDN9UWDYE52nWD",
  "key5": "4hUQH2Qbc1FTLBd7Yi9MagHxtCqmEmSwu6XJcRHDpHjn7Q7wNXr1FGys1Bfqrr7GC1jRdPhn7s5DWYNDiYLJnmx5",
  "key6": "5Byy6ENNr89eJuYm2G22wAubov7TH1QCYNxDZK1fv9oerZpPL6X6TYo6bS3iWLu3ViwLknfx1oAvQ5jfd1pbobak",
  "key7": "27sUbRZtAEdfZCnmAtZFJ2gAVFiUnhc3WoyE1PubApDp4NSAVqexURfa4iEzVg4LKt5VWEX65zPVcLXtPizivZYr",
  "key8": "48BnJzbsBrp3JvyRLNnZRm1tJji2T2zQ3hVJYH2ock25xUeaxibWNQN8DdjjoKE3SHE4ha25xZtLSnWN9Az9QMQD",
  "key9": "3KdBkcAzzt4V5FeJuWJi7qLqj67JTcNhFt73o82WwJ6SPrf1bFd9CEW16ZdHYTz5sG7unRvsddzTrZ8v6mp9bWHP",
  "key10": "3rs3TxhhuPd5zJDHsJJdj2SDJnH3UPu43gReTqELzbhpBWSe99bnfb1gPa3ULmgvAmHdtVAReCuhvxkWFZU393xA",
  "key11": "4BE797XcYvPY7Qh7Uy9iXnNyX3e4qYskmSmRAxo6XYAC2A8wBDvF6BzgEGMXcQKPnqQ11u3jAqnE39q5ApUQNBvR",
  "key12": "2rNR1Dr1Zp7mUWabdS6RYNhwZt7kvpjdcfvEiorrm9DASmbCExPvjjhfZCJVTces7HZuFe8zkXERk7GYqLNYUmDh",
  "key13": "2BJSqZfv1omDyCTnGbNoTcRLTK12iN1jrZrfyPtZHTdHDLiWuiwZKxwaZH5TVT8u7mvbYCVxbmyVFk7raDgm82Zy",
  "key14": "2CGPLAj5LnJivbyKRqfH9tUGQVfaCWFop9jcsb3HnF8JM7q6Cob9gYnC2sHTiQ8Ti1VEqJDkWFLXK9sbZecKp763",
  "key15": "5G9o2vexYWUy5L2PQ4n8mdexEyqArutbCYSDzoHQ3yRfMRcVPiBkTqciJhPceVwqys5hBHCfmhS8Uz49cseS18Vz",
  "key16": "4gMzh1RfYVeK9Ntyv98giDHP55mmdxaybg7s1QGThRubYJcWcLf61uTnJ7997ziBegEZEiSKnd9cwvdkFZM6SshU",
  "key17": "35kDXxaPTwsiT3EALh6JJ228Cgv9fLgmz7cCsXMRihXyRR3Q5QYfd1CtGof5ySXMeVc3HDwzJDHJeZBHgU5hAtKK",
  "key18": "5txACPjwgGeBkxRNqQy2JUKUMuT3XNLwXTjNQZsg3nGG5TC6N8ScoQqZk2GvxHByGvzyTyGscPNhKjBwJrAkDSCq",
  "key19": "5p5KA2EU66gT2feBJyxtLJs8XFQ8X3LMm2KQNR3x8y8gEKvKDeg68uBvtfDvy9eYd98wfiGH6Y9NHMri36dJg8fW",
  "key20": "5HEuxGkTDaYcy1p9p2W9kSMqeP4zjE22YvKXB2vGsAx3wxFugn9o6xmY2XRYZiatrgeEeY7XkwRoMNvFVpvsjZ4C",
  "key21": "2gNDnDnYDNLqeuMVvwKJ1r7xS3fDhBRxPVhD6Q8WGS3H4NmEvCcZtEBA3TCrJHZFfZxofCWLzBd5rVJiMzKej6aL",
  "key22": "UoFmEpSt7tsYGUEow5au4fx1NMVp2jLTUgRsUtdUwzJiKgYxV7kY4t3d9QtdcUz9aNTPgBAhsWGvANsMCmiw9xT",
  "key23": "4qSiXaSQJUypjq1PCMZ3VDMiGJMwh6MHToumyXgt3uQmFvKMg8p84YSkP8Hkp5HKuNG6fQFjuHZuACCQ65VpdL9N",
  "key24": "iqioNr7xy51JeM3xo5j69EPQ5ZChJMTuQZpsYqc1TuPbChbbSMLdex7KVj3it8dhGSqPVN8ZoALGy4hMHmYSmRm",
  "key25": "yC6dHpbxdYkjG5dmPBM6C9LZEEmoXQzxdCvBY7fUa8PxnqkiUtu6ttBxvUttyDZv6cWMGKpVWNCxMB98k7V278R",
  "key26": "RQ6ds4yTkSe5rLnM9boDsgsLyfe8PtinJM7G1rm4vH5zVJC7ZCbPkLbYt5xT9RUJe63VWbi8SaHFNvubFgTV26q",
  "key27": "3wVsr7vzbWT3BxiEv2FgCM6xKy4yUGx5LztQN1frG429vHZ7EQkyrYkU6xL1hLtJWEkijuetiN6EaCV6KaTn8bVp",
  "key28": "3uqqPxj4BJpzWqD2X4KexmhPwLFdCMBedVboo4RRd6PmkTdLdYwYyFEWQg5YKDiu9Qr4aWCQtiyQZeLPxtNCtjB3",
  "key29": "637Ey7sxArf8ZSDxEqtTFJAYdNX7B1hZFpwKnU3fwEsTMQuRLLNRZLtUJzsnoaJ8zob7GJ6QjQMqigWkKxpEg51v",
  "key30": "4QkRRsJKLJXhGZXBmYYg695dR74CZk6n2S2AyQLd3yqhS4eaJ1s76Cufy8zRkPqz3mUu81C6zmWV7Np5yNihLMR2",
  "key31": "2tcoMR6gwhF6V9Mj2U8517igzWBDmXFYXhYtCDeN9VfjT3poL4E2KmLJWiDJzFX7ze5bekDwx4Cezm4wEz8Jsea",
  "key32": "5SdnmPKQR1QiyvDRC12D28T79YTF854YdjpqGhCCbeychVnbFxM89sD4PjAUxvtTfDZdWNrYMzbsk5mMxpDH1oMn",
  "key33": "Y4NXFjHTapZmTH63Z9b61yiK1bfKRPQxKU2UKzVkBLwNbCJUMVU4eW8zBDowsf5bhL9uKdzignfh57nhGMiz5Au",
  "key34": "4QmU1LLtFTntm4MCM6aqdwUQwoKYorKzPbejDX1oTU1tm3KRVGmiutVctBPQkxrxPUShgB1Z5kQXQDBkdRoB9bhF",
  "key35": "5h6XeALSwx9zxDkHJkj92mSK728s1qzaPHvxmRrhuij8ecAu8VdaNNB84oxW31ryAwFV2HZrTTPLmXea467K4UbX",
  "key36": "5NtZ5xUFCfP1jGo5mQcGrXex1e2KQi3iGuTzASnJWvx6c8jFuTx23WmMBupBGsUbL2xBTFKXCb5eo6PFtDdNSA3i",
  "key37": "2ReyYRJiX1CtwcpAbKv47vfFocWuo83sncmVLym2rVQxC8vyxJuBSQqB6XiigmepN1BdJNi3N49DFRrFtzRG58gq",
  "key38": "2qvnpKivHP1QDnmDg4U2Niskv7AncLZDidcNwkqmT47oNaVutcVD5AYZhZxQ6X4PpiiEwUUoemrRtQrsHFYiqBmK",
  "key39": "424Xy8KqBRpYjmyA3rXYm5KMWXmvCiLJe9o2DbLTKvXnHS4i3G3EiNHdXrmosNgwK91WGQC2DzQUgQbKzWM78Pcb",
  "key40": "2ehyVzDF47GhvAnfQY21Qkfz1BWHGfHGRUFJAn9ftL3jhf7vvHHKTbX5wC8jNdjNUYsThzrGih22tQacQ7VGuE8J",
  "key41": "3tbfhVd6GqT6txsMeKjW2b5qHN8Ey3TkmP8wR71CioHbLDwe9V8Y65dhRzw2E2oPvEXbtmAYxNQzSdJEHddRyrnj",
  "key42": "3nNSD2ppQxEDum7sNcVrfgKyLUs163Yi68jRWqmRzFLafq6hdwQNPUKt1Hk6PWR3tf68Rgp6cj9333RFgNLq4t63",
  "key43": "34d25LfZhjjsjpsayLRt5GGHUTduJWYantcHUg26RfzrcQtYcz3jPjAkA4Hb4ZBbVTMaMqD71CnrmANqLgf9wqsZ",
  "key44": "2mZGbyVWS6UMzskg7utuSmHXN86DD3oAgNSs4GkfGzbfCM5PSskb1wip7yJgzMv7oSdeaMm9B8xbhjpuQVpUxtqN"
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
