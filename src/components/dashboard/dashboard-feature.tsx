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
    "2hEGS4vRAru2xcyJL75uDj4FfiVdkS1HagxPUgkW5iaUn62L8BxysCiAiHHg82papRJwQTz8MtAwHgFzu4b2197n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ukeFucCAdtExCD2XgpoNTQRYrdETbgy6aeZo59vq2UspAfcRaRDQwy5ii1NhbsJjxF4ANDfyRA6W8UkuCig4EEj",
  "key1": "s78buq9dDuEibzDWCXDnfjVGhtFoF23md9AgDPyN41dmmVjdQjVMwbzqZV1R638AAajFto5QCYFT2cnZy1HAPHX",
  "key2": "5tiYqDW7BYeC2eh4XXCys1JgeaxvUsjYxPAbTnUGFUxcWikUATAAvhAmeBTANLfA7mp1JaTzZHqsYnAHcvUSFg1b",
  "key3": "3PNyyTwrZmQeWwoGGpd7GboWdnvhczrpp2Xd7cz2XDvuQ9wU9jyq8NFGcmEGWLzAatj5Fk6zBjBRNyWtMEPkPQwW",
  "key4": "4dPm8sp1Ezw3KZRwYgGyqGG1otHroSrnHMmAqVZDLpNxhD63o2noKoo2HpKkLqusYsn1otigiLp6VjM7EAJxibiC",
  "key5": "5y2bVeU4V3nsrv5q5n44QjJGMFUUL1cGyrrKdrQczm6dyiom1442psfqPDNMPqWX73wDtHT4CUw1ccePbTFtAA6q",
  "key6": "2gFyjgTn8yVQ4pHGBj5Vdi6wHAmaVEcDkGcKRjJEYPzApSMNP3F7WAfq4TyT5rRh1TkBaeVTDRfjbE3mbMcGUxYV",
  "key7": "2eWaSuupXde89qLnMzMRf2NfNGw1bbhDfpf19R7RhmRRj9E67V5o9yABY5kSjv3UJjm7pXtvaUUEmvS5k4ZJNbrw",
  "key8": "2jK3Pz58wv1TJviCVFdXvwncMjvqtzUYZoTRBN67tTSH3sAsxJD4mTXPZX7asoNsqXxGckaHUSxSUcDa8EPMj7te",
  "key9": "4HSabac45YwS8bckJHQzanVBVSKbmS3NE9yHTvtkaB4RofFj3CDdLVQ4ntGRZZm2GRNwEzSMZYSzbt3CLtz1B45u",
  "key10": "8NYffJqffAA3RYo5cmmapGqeRF9ypoN4pvyYwxCuL9jeiFyKnYV9cxtzfMB9N8nCdDBnhJUc2HwjQaUNqkzws5A",
  "key11": "5M3TDCTsfQPZTNbratS7cjboHJK6pXHiU1tMAQWzPUqBf33rS4feJSvtuAAAii4RuPENwnLb3YSHBWB7rJAJqFrZ",
  "key12": "2tiz2wfLMRNVNx5jXGcKMSgLFPHSCLpR5YQkkSSJxL8njwJHTKg3KxCSyACJCk7KuBR5tzncSLLksaDeHbKyfshE",
  "key13": "3sQg6KxfVFnNwT2nwJUpvTy2HEnQKEq7QqSpGMpuJ7xt7qSWqEpwoQYSjaSxQjhDkBUFSs2wPpwu4g8aCokA6RtC",
  "key14": "6yqJ6zGRve7M8Mnb8qfvoTZwsHPXGrSnU74oNZULtTyKeVNxm1vdjCbkaGULJvrgm79uNXNhkRjjpEZGhvXpsmk",
  "key15": "2cgrnf1dTwMKTwqkanfCf3g7gWZSr7zr6gZ1LrG144GeAR1eifFrXP4ARWpXDNtGUhQEv1GxxEqCERkoLPZjEZQW",
  "key16": "4aqqk9dKxy3pRTawyumTxfogeQMT1g5rw2V3XJMDnk4S5diAq8qkYEco5y9vQn3g2NmDo7K1oZYN8LnXwkaTWG5x",
  "key17": "5fFAfVZkCeCLZKtx8zexTesYSCEuW7M9oxmyMv3YtzAAcEYVDAF16MKbRe3DzAuoBu2yzcV7RE3RjUavQEjzND5Y",
  "key18": "4Kq6tLpDcxXrRwXKs6QJCxhoLegZAxm9zdfPubZVAXhaex4mATcVrd2HpSvrkvVZZ7yS9yTMBv3gkgznui8vcfkm",
  "key19": "2A8scbJCtkZXiUTVjPL4Sgd9TPEJcPdZZXhTgLV6SkJ1KSWF19KCWXcwjkCHGLoNSUsQutJCnSK9fe5FxMhZvrSP",
  "key20": "2PgxAGXAKnDJmwknL6WwMX4Wpdr7wnHfeLirEX6ufCKKdU933CzeCitTx7w45x91f7R7fTwkCbxmsy2xdKkDiJGX",
  "key21": "5D7tFNwjuUYJsk22bPHfyjo87UQb65DQgf6yfJ9KqT9DmFCX9jm7ZqwfpUGw73jx4PM8maD5AH4Wj1RzJz6F5GTy",
  "key22": "4qWgiRQn3Ma64CrRj6VZxSbjLXCQY2sUsuyVBGsu9TUsWi5uRnDsTPqZqdcjdcfsDXQ4tZ79Ur3Ybo5BEfU8KhxN",
  "key23": "tkx3YSmGjPjSuHVG7EAtjNEqkdji7f8aFu5GPh1LtF1dP6cSBTeBc1UhanURfrELts1qLB2NeWdrA4UPwd57iiv",
  "key24": "4BCXPJD19USjXNjZcmcXEG1SDauzqJFLR5AvZMtRLHc1z2kFGXJPyxXXDsfHLz7m2xK39w2bDpjLAQdAxvzpofnY",
  "key25": "3ePRwKwQkjw14PNDic9v6H3QeMET62zzbZJ2JcgSoQbA7DpnRxV9nGt8eJRCJkMYkkZproGiV4aHQMLsp5Lpi9oW",
  "key26": "46mzktCToEXUZKkj8wmhfkppfN9DBs1Jfzz4VV3Sff36FTi9a9BRK7oimSFggadeczJQgvtGgY82meS2Ua594ysv",
  "key27": "5BG8CLGbphFT6gdMZjfnRC6RpcjPNy5gSiMMnoNFTkHABRaZahju48wAmvmhEnPyHU9kkz8X2nT1JwxJGCeRd9Wj",
  "key28": "5QArhSdxXG4uPWoHMRQz1tUenPBDYk1Q7hojWkFPWamMhtPWHBT9VXvmcgnYG6pRiMKEXGwWXiTMfzEACgDRJZgW",
  "key29": "5o8h8Dgi28r7qntviSDrXQUrEbdCNk4gUBFHCqvfmBDkbjMKwFQbumXXYYqYtvQbws1k76docjiE3MjQ8hDzbRys",
  "key30": "41mMfzbEWcaDwjWSbgXqGj9u69QR7CPxYtddgM33bTaQSYQbiCLiNCUNnUDyRjPXqaPVouQ7vc85GFDsbwrPvyEV",
  "key31": "TRLj43g3oJ44kk1DnyKtsjtQejA732JQqHaViiGNtNUupq5AzEXqgxXw1LMzczv5Wq1XpzY5NT8mrihNohnWBt8",
  "key32": "3WdjBwkQqdbboUft4BnrEH74QjXjqmPNhzEr9F5ekgr95nVQtBqSvEPGGKyfU7erfFRf3oSKSaybL81hdKtFzg1U",
  "key33": "4ogcauEUrNSkJTwDEMXJY3HWzPBhKWzmF3ncLi7AwWhg8k2N9vGKDULHFLHLKguxePHzL7Ho5vmUQEvVrW1RQqLa",
  "key34": "pyzFBNHcYg5mThuu6NGeuLpFBeAJMghhErtbethoAVCDfQHeFn6U4DaNsisbAVPZjdVeewTXQAf1WHZfnpV3EwN",
  "key35": "4VazaXEUmLYrZijBrZ7YiJazekJedsFRQun1e9K65UDZsRLShcc7DqxioxDGgGqEeCQ6wq4qXBqGppeGmRjQeWKi",
  "key36": "546aedn4tVhCPp6HKQYLuiMgtHy6cmhNeGXKFr8FKK1fmStxkJh5GRggKgriZgeAT4XRHPNKXpw53uNKmdzJAjWp",
  "key37": "4pnHeU3bwhY7NQxB6KMaUDdWHfNccJ8w35SnUsWGmiCFFwnqSj8B2PFyvCVydNFSN2RGjuvGjLy69WE8obhudvwM",
  "key38": "6QGWEvmjbjAFhSYiDK7MAnaWtkmkmMWy3gD1D57ZrvBetDqjyiZnsv9KBrQ8vhLfJBrBo9kyz4NruSXcgg4kkpE",
  "key39": "3yF5cDUbpcQ6eM7tL2DChn8aHP3Kb7gqfib5HURqDDXbgWRJLk58xArDEpJY3ZC9eDaRXUjpydf3cuybUMd3uFDo",
  "key40": "38BpmevdebkffyHoALQWu5o4uBwunb13GREjscxuvtZYL3dd6bJ8u3cCpptUk2mf9MkME9yVvQc36iDR11QeHTyk",
  "key41": "PThonzdcCp7JBSGCfpfvPHZcjn9isFtrpox6h5WNCUy5pLfcbccuhnNRF4NhDUxa7mhmzKp82nagjijhk7S5FH1",
  "key42": "4Zg8fThohQDPHU15qaqnke98jyC6A6jMKZEpjX6kaGkS3oT6Qvvgf3qsppi8P53MUgLE13UaWiGviNtdP3VHTXUV",
  "key43": "3LhvH8YMC7UByKm8D9yQdd3B7ahx11EAyJpAcwVzGugpa5kHwQwhTHjtQSiEbCSSboBJj3j9zh6o6M1nZcz5mAu5",
  "key44": "4TgDjMMMnzwGoMDK2QJW4Sxk36KfsAD14GixwvDjJVS1gbjVf9jZFDtd9edewdExrH82Pr3KqwCSfebtWqLpMz91",
  "key45": "4XoJSmVAKc5iggAgPhxW1M5fLp47zFxx18Ms3EN3nAJNJkD3uGbyi42YoeZa9YrR2aQbvXDospieS7q8bfN8hezT"
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
