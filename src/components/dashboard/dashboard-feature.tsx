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
    "2PWDmJaznBMPC7dXUJbxpzRpydqtyGh1uvpUSLmRVjR5ntpQi5phcZb4gXhbZMcXhT3UzRypHon5aFqim4LdqzPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34zvcqqueqtjRkABm6ypf8qm61kGPAyKi2Yq2TxxHkaa39LP65n7djsXnDeuX7NHCiegRhyhHvF5Hw6s7iFATKff",
  "key1": "49QodvcLAsSJmGCuuhmd3StZ15fduS38LpFuXo9HVq79RPdWRqa9MAyVao8ov5JYRjA3T1YW6etTukz88S3rMfgR",
  "key2": "4seEuS2dvwyitd6dtAktBykhgcUfwdAYFxasAqnC1Xax1mmTATi815txNHh9Ks99zqmn4XtQBRUSLbDrFBLEXBPK",
  "key3": "5jCSawX3LRF6fnh1hs71RaWQrn8DJLHGaQPx5rMv4h6eSCUK3GqYLrCxbs7ofRgba5RAdB2jtrchKS1RHSUvdM2R",
  "key4": "2CLuL9yNbVSjcNBzq8G8nUdqayU9uq7JTKCVqDEJsJDAcdBXX2LsqYzwgjVHDDtMwTkj2WUuGCKD7Le6g5EXNWyL",
  "key5": "5MFKY3QkXHd24brPCVm4Rs5eZnqRZU2rpX2BpC57ZuyojivBRjA1R3XiUmVdZS1XHxEEgh58psyUyhdr33pYjTir",
  "key6": "2GKqSCEc88gjkATrNtLSf5pNkzPngMA1Q3KKdy5HrvX87LXwSSCR3SjrYuBjmAdmG8Z43xdGMUwD2GtA5oAaQmF",
  "key7": "3LE4cmLfPEE4BwW3nzC6f6K3Wdk6X2HiZJdRh8dsSFqHNUdKmVch4Js44PWgRLLq2i4sqaZLtmGXhGmracUqkEiD",
  "key8": "YQEmAohq2bgJ1HSGpDPQeabXN7BKxpGHBCrvmh8rUWp1eFXHZM5MGYPQeMRS9t5X4CFjk3Akvti7HRCsknPivg6",
  "key9": "5aSS78fj9ADneSjb3MVZxq19RNkyH2572zdyjXQb9R1Ho2WFMNzBJMZF96N846HbRvhjo2ycn8MjhCpEnzbN67ce",
  "key10": "4k1hiUQSjoXMKjrvkMdVdCbJJ8ZgkfpwRJ54wDss6jboFTYMUftWrHmawxwSs7ZaboUYV548dp7xx51QDL1oHZVK",
  "key11": "2BXiU3fiJcVv6Y4Kt52pWLNGimMuicA5bV5q1XMGD5foJadFfnDEVQkPEN1eru3pnNo7uTpLHHoLsuixm3PhBESu",
  "key12": "5vEcZQw5oqojMmFyDYgAVptbY5rwH1bUwU8ts5kWygXknwW3xeD6EHXce7UX8CCNYnVuj3tLeY3ndg6iu1bieBWD",
  "key13": "3xDXHq7Ed1XcoMvmdKrKiBJFhtK3DP8HDsM2du3v82RYee9VyEW8DUCVPwPfQxFHbg3z3ppJKpdGCQ8afxmWdnD1",
  "key14": "3KLcGEyi8DTRPpwJiXEuuJtnwD5oJb2CHuSKgXH82zgiZCiMANDkRdEJ31fBBkEy3ZowGrE1k2c87WZprNcNaVkU",
  "key15": "VsGBDgWb33vVE7MkL1TTUxV4cax2W9ffHpuiHYuWnf6jmhotBEBAq5q64xkXTLEcmVGaB9Q4Kfu124goFSFSZ1Q",
  "key16": "4ExYhPYXLbrUHAdCD4kMZpW9bu2hKd7uRp8H3RbDjkqrhovTwFnPTyjx5Lpxjm3x6yxXaG9E7ebTS7HrqUncUb9R",
  "key17": "fxtfPZ1yAxCei1HJDptNFLS24DVt62EFYX7kYY8QcoFnLeAzarapL4y6VjJeq3gkXtxbaiaVzTm2p62Jb1QV63B",
  "key18": "Vj9JgMmvFLyUgBBzjQH6YYmKDZMtwV5PCxjJzpRZpX3uadamMnPyKjA8x1wHZLaeJCeEitWUsYrfvv1iyW9Ke8T",
  "key19": "5UBDPSWMGBhfW1PfDxT8vmoWMBLXUDK6RRVm6HLUe75vKRUj2T1NfFLXJWCCUM3swcNra3RqMonhcGEXwCXCbRQL",
  "key20": "3mHs9WJTiYioEYHPnpnBWQzqHgVHop64MBFLv2sxC1ibdP1uVqsfuAwM867rsoDhBUonHcKLzjfadXU5s7ewCdWc",
  "key21": "5A7cWUbYe6341ascCN768k9MPGENw99UfWdmuDZ78suc48wGmZezQb3tiYeB9PhajRjXfu9VcJUzeqnf3qcseXvV",
  "key22": "2iTYsTLgTvRwXzSY5oFxnAKC5oTb49zrm4d3i4FfFmrtX2AfvyVa7TazQiaRzpWsdhmvWZCB591pbpbwMPQt98CJ",
  "key23": "5YVNxkQukmzrnAeXBXfgiFoeE6JHqEq5NsNpXk5N47KK8Uz4Qc5oLLmXw9YCiGg15uR6Wu7dKnwCbsHkL7EZgQ2F",
  "key24": "4QqvaxF8fBNGwBYCUzQ6SjXv3fdEQJfFckayvxAk7eDjyUmqKKEvpCFGp9rhPqSH9S2pG6Beb4rCrcnENZhdrgAw",
  "key25": "9h8XU77extC6DQm1Xbt3RCNHnoL6jWMS1Mun64shGhxnHFaXNerhPcaRRDrUkKWCCrvKsr1KtYfMeobLTtxopNu",
  "key26": "4VzfiZtARYvdZjX8LDEVxwzoEE9c7oREuu2N9rDGuMdaLYn1VWUdQuPJxADNABr9L5JgpmFkxbLr4iiEaRFoDCZ7",
  "key27": "4KghnHKHGrqqjwCyDRduW2u2rTccJT1SvZcAjGh2MNkRm3C6yV5tEnyLeBrF79hz8Ai2x97ycnsBF2jvzbHiZcJy",
  "key28": "317Wmyzh1LCe6YgbGMRA9Vu7YH6aXVPyKTtkwTBhdnZEA6B7kJHf5rajc8MMCARCv7UdXod66RuM8wE1cVc4NRGT",
  "key29": "HfJTArZkSnnDGwiF3gZVMG7FeDoa6tdnJzarrKDhCJQGg1w2v4FYpJPisfBfx4pZHpYMmgi7mHpRtDjAqo7YQsP",
  "key30": "1y1dbuRVxqT7KezH5ZuYYc2MnS4PJmPzky2GadYjcaYL7wD8SdCfzDWWomt1DBET7WPH1XmpwJrqzUzgvXb41Fe",
  "key31": "4xrJB7SjAS2NYvewsTVwsKa499xAdj5xguxiDpCECZ1xqxjs1rQcLjkw1VgMod8ihYzbaKXsDGYbW85WNf3mYRPX",
  "key32": "56suR88UGWstBbRv9zHJg8wxi7M26Po5LEMSgstmkC4PqwnQNTsJ1EVPYXmnogZ1HBu63JUpvxGsdnPVLi14PQoq",
  "key33": "8efPxBrkjAdcemYVzbqH3bbUfZVLsDa272HpXkYgYp2kjb4iQckAR759irMBfC7bsdHURAmZD1hHHPpSH4aZ9mJ",
  "key34": "3FCevPGc9ucs2MJAkHf9NsAX8kSBFkWFFacAep5L1xRbELcBkRTWcoAUaNeGGk5NUgmQS4V7WLiV5TkeCWeMgqrH",
  "key35": "26kAZaedBz8fouWARQcP7t4Zq9ERnJjqs9SukASMEWGBfzzSbSbNwV4JcfhMdf13YSUk9PMcgCmsaLgvsU2RRCL2"
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
