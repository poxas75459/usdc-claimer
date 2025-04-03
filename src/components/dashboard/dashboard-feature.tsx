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
    "2sMhPyqtyKuQwHXM2fwRNaNgyRERUmaRSdajKVHZjxTpXTqFpAFqaXHFzfPWn1GqXkQBBq4XsaJEwFwyMzTQg9t5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pd2HWG1JJDyfs77rVXXJ4UgrbyQrU8qC4AfEo58eiXrQobG2pCx1bRd5bTt8MUM3eCKAo9yjt71BasazNr7tpxJ",
  "key1": "QKSW3mLu3o4C5zG27fbJTJ7XECFWaeHB6YiQT2PaZAB4a2s175Y4WATjjcm3BFc94pCkng9DYNYLETJ9dmDrdV4",
  "key2": "49Uvj2e5rLM8EYKi41LBHE4QmLZ8TYBroEzucmMssGRqd1ngHwojzUYaBNP2SmRvewN7oU8nETEGN1k8G9J6kdxA",
  "key3": "21LtMK9njSybXyjq4yGq7RyU6gb6oCGjcyFyRGTn9KTLsASjdqF2oS9xKnL6MtZAEJ6kBHTrCHkiKwKYrCwScErU",
  "key4": "2FbTmvHmfgdkMEjzGdtLZV1r61eiaek1N8heiEgzMf4xCoN3b5hMPc4MgNKEYYkE8kpf9CTdZ9N5We9HyCVvjHpa",
  "key5": "2zd2VecBbVFczpEJbXDyq6jZfZrGvCb9pzyh6gv6d7VRxiRskcCrsrJzBXAK7q3XEV5PB1ZzUfGbey983xGnrBBS",
  "key6": "KYccw2KiHGZ6JKWMxxsUfteYBq4SsL9S2GQfcyGZMF5AwF5eQaurBcHTerhQUdKx1K8mAoemmt3sqa8NG8iUPoD",
  "key7": "jLGqPi83k4e53zimvbqnFLGMFJoQe2ZEBZyNR1sEgt6MXi2FZVK18Qxx5w9S69MuU1NeVfGFeTTwAvkQdv9AiLW",
  "key8": "2woRexZhJuy5qHPGJpavNx6nLGNQg2bKnBH4xUBPV9CjCQqzU4g2e4vK3dTGrg2de9JE9g6vtFscmRKpEZyPNC13",
  "key9": "z1dN5EwawxNPhe1BqjTR4j1HK4A7RGD36RqoPX5nKeH6MjydPjkxQt8hmgTguNCRonKS6tMwMAL8DtykqSgMXLd",
  "key10": "27QJbR3NaAebgKxZgTwbe7WnzNLyLjWUHwou2nTAk2tMpQCwG2iQ2cnq5oaS9mDxx6Mx9zvNkqhj3kxjN7AtM9LX",
  "key11": "3X7mAeZhttDSB7ijcjncUk2i3dJb15opAEsP9ghiWFtZRGNxHmTZttHFPX5NCkYtPi85JrB4mg4CMMUg1zugE6BT",
  "key12": "4a8Rm8xnskUdT81Hz6VoCVkgvDZKm59byU4VrdGKtpNEsWb95enqUyGVXJ47G34rniNEq2mJQ6Nngh5bYC3bsL6a",
  "key13": "5QS7GmaSgWnFuheaehmrKh2nThLMtKopbXqmdW6XpPrDJWw3Muby9yReMfVDegH5FjFpvWrXYBMjH9d6ZoQqQBiC",
  "key14": "2u3r4L8qg34dUTgQzGdDNShZRDLWDr4cRtrkv1ZEw8dk3iP89e51Ando9AoKJK77XqsYaYh5DHWBoWjgFX5zP3Tq",
  "key15": "3ZfdA1ApW8vdQMeZuqpFUa9CUYzUaKGUCxNdtAJfGTsGbQRgMJhsQGN18rjtQ1817M8rrpTGk8cxgvWmg9oYCxnK",
  "key16": "3oWQvBP1LXw564i1Z9VXpcF1D4C8cbhq5MwZy8SGBFKKWhcAbQ6UBboV5FFYLo4kd7wVzvT5zUNSjyLQYLTf73Qr",
  "key17": "2pFvjK2zgmQ8MVSV9nW4EwtR7kDSnGhDzJ6V8dXqKukPhojnugGNMc3XaPY3dXot5xjA9bpP1ZQ49Yngck6Tvdbu",
  "key18": "2rWVXYtpPCMBbASBa1fqtMem5L6iXJGZjWRbg2Ncbm27NsrfpTmGLCiq3iBH4PEbZb2VV64PbcPPqJvTU6C4NQDx",
  "key19": "3vhbcsJEACWWL9EwtJtXhJmG58jbzgyqra97bQE1ERYL5YpZhVyNndu4CBkwdLWgN8AwbQYFhiUF9L8tcgn2PFt7",
  "key20": "5WEagb1nYCradPngh6pQadVcjahF1GdsokVihcnkL7yP1fxvCdumgTPEprvAsUGZzeYoTyBSjrHrXkAzwrKM5uYw",
  "key21": "pGadnjbiy57DAtHWShDbRJE6aERUtDbGMjcj1nnbZrYNJgivQeRUbapZZV8waKkjDzyTsAbnByM3aEuhtr3gjjy",
  "key22": "4XpfiG6WeMc1bTTCoSXMi3rnD5VzShDfnC3N45A4aC37gA8mCqfkmJodVEM3DBbH4Gp2DaG15xcKER4sfpJW8nPi",
  "key23": "45nKdzNeyu8oZSnrX5UUWE11Vp1rn6u6axSYZVUxhN3fDscvDjh6bAxs6MULKP6SkZoqAZDycAqyHbqQh95L6nUy",
  "key24": "26B9UwQX6vLigqW5caVpm8EgGrvQ5wmRz7QkTN2yvMKpiV46QQDRXDZKQWD1fhTRu45D2pfkHv4T7wxkqoJHnMti",
  "key25": "oh9T45imN9CN2MS8KGA4k2RumSLn7qpYwwc9mK4jivDB6hNmXRUiKvJVTdkKGWBiNM7TDE9mXbMWfbJqhEGiaBq",
  "key26": "4xVNVLXP2Ygzmj2ANkGYeDqBafDc2ckmrmZKZqQ8ZYV8n7FTS5ZDKdjXGEfFpuWQQfJ9WdufXckttNFiqACPgWze",
  "key27": "49hKAfDN9rcvm7VRSt3pnwiLD4xyrspJoKCioq3yC6TdasgRkzJSC31RqnAhhr1SukdQ3UA9J2nwaJpbfzYqpTRE",
  "key28": "2V1ZLrKqUiZvzKajrV54r2zz9rDBy2vF6qD8i96DsEM3XeURD96m84nC93c6PTjYc4D1xky4AiVrjL6SkqD1FZyx",
  "key29": "2K7PQbjLdss6vQuieADut9BMG55V76BLhdfGrHrYSp8uTofbXJ5DUUkkXEtzBq1xNDmK85RJeB9qb6jk6AMrhWLY",
  "key30": "4u2G3uQtEN6KHmmmkQH1bZ6PBvpfbqCrqUCsxG1SeMJffAB5XHY6N8zN2i4AWv6cp4miYH7w9w6n7tYcG1VpEDkr",
  "key31": "4nDB9yXoXTZXfae3hUe1WhSoVTzyuhoWbGCabySx9cx37WWnj27e6EM3ZPVzbvdqU7vNSDVm8TbrHD8ZPs76DQEt",
  "key32": "3xTVRLHiZNYWTq7SNSA9o9kz63n2TsBcoYX69yVz6QA7KaQTLuL3eXxxW4cwrtpH6mMrsXCbXRiKLZ3oLM6o9kWR",
  "key33": "3osHVDqBS7ZtsCbBYu6VVpZ62orJG7JGvqemv7dwnFdqA2oxS3sxLvSZSaVbsj7LgVQAKGUaN7X1Qaw9FL4tD7bH",
  "key34": "eTph8K67kxWfugugLaXqnr5ewBNrNmrfgmcr2meQANBzJMgv7jb9LwBX88LvtjnDunyNqQXqKrFT97Ai2Xb3tWG",
  "key35": "4MqxutTS8uNk2ixUX39YUGDD6RLeaeqdXwsDFfd3AnboJ4Daz1pD1nNC5AktJsFSG6zyLcVQKmzRtpm3iv32Ug8P",
  "key36": "2y1xSqKnHEFi16pt4Ym7jx3484hzobVF5fS37LwipzNFPStSM6cHygJVx87tyFqgiakRr6bc5hHBPQkXcShz8MS7",
  "key37": "5vaQc97jxbmf5G8awe1gUhFBNA1ixUp34xQxCNPLSiFTT43Toqzay7YzGYzhnyLY3BPjBjvMxudwLNQuvcoxpEDJ",
  "key38": "3Muo2gRuPY3uQAZiZwwKHeq2H9YL56xL7V7BbNzEuXWYoCGmqcZbYfc9JEgQKA6QpsogBrNLTmTgdiJtFQLKq7Eq"
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
