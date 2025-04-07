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
    "2XgfmDnz5WLDpYG96CdaUGEm95mzjwhoeReshBgRnPME2LHsew3JLFeBV9JXURGqYtXRtZiTTA71cnGi9PBBNknA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43FJQVviELoDg8fJ2VdZYfGsLrTDjHaGiNME474x1EvQPRuNUxUdg96UynbYcPv1GczZDm7pBAXHGsndELtfNS7g",
  "key1": "3zauvZEdLZdBTPAQAQ8hnq2iqBmqvq6MT8CgZNY6UowMGsQJqPiodUhFGMxFcAEtfE52qepa3b3nbXWCsmkDb9gg",
  "key2": "25vRhd8GHs3VjrQ2AY9LgcfduEwmbP8b2S1eVhXs88x1HCdNhet42jafzwnuRfu35uJr8R8Afxa3jErRDTVByHvz",
  "key3": "2BCaWBi4g7xbHqr7RqpFnsuUBde1jS61GLN6zD7oTTcM3adGrvnvpqjxHhRUxEmFARWj3y1JYYsDKD4KHHqwtsZ6",
  "key4": "2CG9HH28nM1rg8P4SKWBEtF67XqwwmcDqcbYxhCqnC7Puj4oekX1L7bfUNFztSVUPJG1MmsaPRDqwv3np4mpgjxt",
  "key5": "3NDAWM1rEvd1Kpqbm2Qe7ZNrEVkzUcfgqx7wC5mFWTgcZbQXS3yBPoTsG9mdNG6iietGJUeaTKkUrB1Ss4R7BCuH",
  "key6": "5hcc47hArU2X6JcdgETCfjsVS4KZwn5wXoRypru7DHd5iQb3gFc8yoQmdQNt1Yt8GWaV5tBxWfskmFkrnU2YGV9P",
  "key7": "PRsxFF9hnQzTsx9AmD5kRhTaiyZRFdSEdwoFEgT4MNJbQys9sNWabkf1T47D8pJs4nzTQwWUqZ4JKuZ8YRZdQ4Q",
  "key8": "4YsoosBdgWgjuJbu9ejM6d1N56LNm6bRsArCtuHMb2ybXLpN2LwUS73T44yCf5C23nvb5xNJTjaM2qVUCR22ETps",
  "key9": "2SYNji64ixNsnnn1qpQaJue4C2RpAWv41VRUQkHUPrnmDTu9K8ZGeWPbym5hqXbEhbMtKoNhYvyrqSRr8vHt9BXr",
  "key10": "3g5Zcoc72DCgWbY5mvaJecRBdyjMiV7FVY8AN1sQ88HUFEnLZsc52Yy9edLRr2jMWCijcmZ65NpYuJ88xiizRk6J",
  "key11": "3hWhPzVgogj1LGjV4ZQ8Kw4xPmMhNnqvYPC15dL4BBoPt5VMfER1aQDDGzNp52pgZCEHoL5VuY1MZVBFfBxfZFdM",
  "key12": "645NfGdEJvcch8Zpw59uSRELLB7ZiXS9PQbvHYxTEt3uamRDHpeJG85fr3KqnTXrGN4EvmjXXiC7qwzLEYQmuEig",
  "key13": "5a8PR9uSYJcPS5KFGPzDrcTpoUcffAMtQm3DkVcKdeXma9r8yrMWXAfTaxnxnNX65mdij8g11djKFYb7cyz6c5jG",
  "key14": "4mKWxA4v1xsVDNnygyEPneJkA7tXkMiPu3aVo2LpZvJapsqwbHrgJ8HbRFNRbFicVnoG4WArCzf1PjpadoRnGUH7",
  "key15": "5eWABrzViMhcNnhHXd9QXJW9PZtKoKCgTPGB647KCmsXFgeC28MGgD4XqwgEQnDir1iNPnEbVCgnBHUk6apNxxFV",
  "key16": "35RdGvjadBQgG2KzB7YZ7bTMPyXfV9uMXFDTqty3KdnjBGy2UMsNXmnBvUE6bd9gLNBXpZpRQaQn7FGejWwXLbv9",
  "key17": "4dauKpddDZYy8BqmH91FzkhTSjYuBFk9JqqByTeY1Qj6MfApaGGJqT6dBc9fadDSB3jsCbyvP2amDwXfa6TiPc8B",
  "key18": "2vHuTQ2G5ecbVdQ3VePtFs46pCmsFV9ac1Ew5hDcpZQ2p3a7t6Cdx52TLtDHGBkjy4s16X3k4Qe2fusnTZ1mkbqT",
  "key19": "3hqR9GhxEMXoXidLjwey5RQvnnAeFh6TkDUmsNJtbo5abkiDNTMZrthpqazzBhNutW6n2qNXSbCKvBWa4AQzopJm",
  "key20": "5Ye3btaU5dsA5EzfZ2y2YRWwCcdLoUarx11Jy6b38MfzSGLnLdR4UCC3Q3idCugGS1YXgfrakM7z12mPBzUhb9Yb",
  "key21": "3oN8sacGMM6rm799vdC28LJ2GtSKx8hzw5kswaVcf3FvEoyBjPnCLPtquu2PiyQt4E2gLqSo7CfKHYMnwXkK2pPL",
  "key22": "UZeqCLGs7tMvoggiNnZgtasuoovvxetCNcBD98tsebgtLXucuNUbkHMWiHgYAYTWyRiHwq9XYnYEkYY5NJY8pMA",
  "key23": "5uSFN7pbUnmKQQuTjcPyNpRT3b9R5VMZNruzemwzn8NeJAy42c5TWXbis3xBBkRdHr28kNvkJAw6r7znXtujAdJU",
  "key24": "126odBs8u83Caz9RDtB2umyt7rdzJwqA8UnH3Cu8udAaUcETiKzGeUcbx25efhGLszAq3NSWXqwNooL7Sp5j3HyK",
  "key25": "2DseFR3SmvKU3M4oTeeqx9KjTfecijcpm55qHYhg77XG9bpkmywimFJXSWv1391i9VWGmG9bszkHXi5kaX81gdJ2",
  "key26": "2kxaLxaN2gL7jfyZWAZFQdqoXfcvMNjuxDEeE2CPYffFRGiEUf7X14FZgAeVf1qgmEfsb5v5GYLRkEnvkvYgaJz2",
  "key27": "4W6xnj2WG6ioX5V1Vrq9DMdoRNoFm9WAVstLwiLNXymQJCxN5j2PfLYgPxFascPvf1zuRbiFhr8qe7hzbY5aYxhn",
  "key28": "2aB8dze8VUpaZ11kVhRuuBnep2gHEA8kv15Y412BdrBKjNmfpNFtsWrrkoWxz9hNWGJ62VPSomvBSRKPPxeYM8fV",
  "key29": "5rdDziKi3HsS8Re6ksXBgNAPqRahS19vMMWqUqg4quzmwjm4bs3uusqAG1TDAq4eibbEFsfLUoN3UG14jveW9HTN",
  "key30": "3LqgnSWyjrBW5g5r4Eff2r4tPdHqbCjHhjAz2frsVBcLsn1YTVCDX3o3LWhf45FDwG85o6hWnfkLTKgVxjqY3Coe",
  "key31": "67HvNposRvdPkRhEESiL5smrMAg82vhT2vp2GHDgj2k69U8y64nYoLsXm83a1x556hU5tJEKe6abBf59XKstF1y3",
  "key32": "5n3C3zDJ8CXikEZCPgygjja3bFmwPjYcpooz9rxDyt5dXGWgAPsRBb8nJnqZEXjyZhRrPb7q5ssLvU2NZGJat5St",
  "key33": "3N8noNAzM9AZVWbSHwrHKhXt2dHk2U9j2dpfe2yesCjADNXdRnyqXxkcVmD2CmNVGdz3UvYtbs67KdDcwoAxPNPL",
  "key34": "obbUHgvHiYHY8MZUNiCdvUQ3WSsskNFgmcyTs7BwyPMp4iohxDAgW8MSQ6DeT7Ef7pPbVypzJSN1wm8XbGjoS45",
  "key35": "5sHZqeijJMofUB94ZBqBBJo81r3VverqhtmWtEioH9S97ar5zRfJKYkVJeiMx4JqrhBvg8ys3fDVE6Gv5Jmvq2hC",
  "key36": "3ezNTYDDCgAmi4F2xgDGUcejRYKRrtHfJSAn7AVqVAwPwNJm4zTTDD64kNo9f216iiq9QgAUVY1fL1GR32ut6ivE",
  "key37": "DedHFGySgqbgnRmnkdQMWZzwDXpKAxXTPk3V1jos7wiKNNDsn9oDZE8zMqR4aEm4GaKYFimbYgyGjk6VrjHETLd",
  "key38": "2TkAkTypmiCCCQKhtR2sNaFnnLVtJwY8SrV7Yq7P9JKWqM42kVV12gERnSdrPj7qT5RMW3j3ga2yu9qmp26kSBHF",
  "key39": "3bYbkLg9FsD9e8DWNjFa4YJHvw1mwewDho7Ma4e5y7iM55g9fHr87VaPPkVcZUx4X9zaZLMygs3H1fJXFf9AN8KG"
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
