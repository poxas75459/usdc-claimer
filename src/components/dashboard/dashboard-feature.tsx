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
    "2KrGRBBKx5Pqf6wigVoDuWLJtwuwCx78sEdbLtAxcDdCq54CJL3dfxpk3LbXUSQjfsqYXC4Eejp6aSgGyES1f5us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5apawA8PNqpWC24RKer3ncDt7UHcVo8DUWoihtdpbqZnf1YNKdQosZpi8S76ZkePnS3V7BCN21w8b2jUupsGFzzV",
  "key1": "22q2doAsESDDHbK4z3F9LnLWifk5Zd4oAeYzGcKRd6D7Deeff1iDiWsuQ5ocg1Xjyjrm5BDPLtdXLV33D6onPM9B",
  "key2": "25644ABeEBxj7sCzqj778xLna6RdwjSmBmfY2TgoVREQdDU7oE1LxVZ65bJ7omfTxeVC5LJSeQb35ugjiJpzY61x",
  "key3": "npyZJtC4cScJFmfPi59A6qtgWPqFYaauE7ZBz8CACLjc5QbpCwu6bNAtfDqcQtWfDV47iVwHLqUcTy5F2zFCeaP",
  "key4": "w8rAwDGC8yfKnpvaWDAma6atg8hHDK1VRxSWYPSeMR4SBpy6WnHKzzKCqZNbsMJP5BymzbDGYYTonVYfvH9A3Uv",
  "key5": "6qk5KgEue7LvbnEausSAafAvYWz8T4aw9HtC2wzuwEyYM516bhyHYeWefG2Poz4TzB1uRdNuxAgrCNZHDiJURJv",
  "key6": "5vkf1voFh8xdRdDGzqJZUuXpCMGVDK3LZfK2ctZsVGG2NvXggKv3K2ab91Utc7H1Tqt9gk1piKuMDDBSTtsS6NfR",
  "key7": "49U9UB6SEqScVXYqi2ssXC9Unhes6PbS38Hcf4oiQNCfzrP4TqeR1P9gd72567pEspAqK8UdvH2g87c4i4ecNKNu",
  "key8": "66g7uf6ThfA6iFa9n4WBocPogVrxJDhoAuSXDX4h6KvVhTmLaQYuRSrhYsx4WSSLtTe13iJeVCnwDEZDBEDDYiLh",
  "key9": "32vbUhpgK7Mp74eBi7fNY8hjA6UD4decX1HWz5uUx3SBa6G62e54qmrSfWCpRC8ZDC4fan7Fd7iQmwzgi3akyDpD",
  "key10": "4izYwhSt332c1aNV1rwQsDdu8JgJdMV7HN2tB87gnh5qxThzzLYSEJCLtvPezLw9RLSVifmrZiYEvwN6vPZmJFfG",
  "key11": "ckgGa7YwELM6FvPN158QU5cqQVNQbNFNJvUN11sRSbFvBEM4hhk4Ake69NdFPqTAhquqvrGmW39sXQyEXPEPhxE",
  "key12": "56dKFP9mr4aT48tPwKs5rmEjBmvb9WAzH3RPA7hjsFrY1Ha7uWGvk5WPVAMLNP9ue43LpRJaJaMfY9pi5X5ipTew",
  "key13": "4t8sfBsVznfPZUPKpaX77aaBTkYdCjD4zzLC1fEnv2m5LK2b7sJYX81SKhuJN2Aj8TTHGcmZGM1Bw9YRn3UfaEfN",
  "key14": "2hBqYvgYQGfYWJGsXzF6zDeACxwXkRm99SEyD2MjbQH97FETm3kquVayZLR3LJ3yabJnHntM6mxPoZ5RkVs7XzFY",
  "key15": "2Qq54eN1o66gye8y7kD48MpdMDfZqLy64Qn4ZYMqZ4Wp5YCo66qce5PiWjqThSRrfKRNXWbphaV7nn15JxfqH8ph",
  "key16": "5SWeF5NhYCn28LLZkdRFm8e8NcEMDcsLXePLXgnnGdn2be9H2gxDWFLEAonRozLGkctyGAstR8pyG7tQKwGvhoYW",
  "key17": "2uqdYvfuNzqzaS42N3cPTLjLRPfMagUiNAtWEHdSumvxHydPEvFq3PH92sbyQTAcyKT42usPCkgdrBHuZLpmBqmt",
  "key18": "5GbX7NPs1F5dVhLyA18Raier9zBbMin7LUaxzok3WBzXSY1Yyvrz2vd3ZjRFeYpZPWR2iojfUPqD9y9RjhmANmYi",
  "key19": "26a9FD9jShDdW5tuNX9KmsohkxRMHtyDnHgivyopiQkGmTCiHRppA14Wjg9mniCXWTM6QpNymj9mn8uSeN2MxV6E",
  "key20": "64tRJ1biXmGvB3YAgrACWC5GsoBhVAEmyJtkUKzrzr86KYbjZxFdDcJgTaHxLDmvZtUEjchC54MbBWU7mH55YZ8x",
  "key21": "62g1mjjMWoVreNdTaXowiaMAZfQg6EbqjwuqsKvXfa9KLKTXxoxEPxK1giVn2NQWhbP9fwdyxpGWxeqH3NkH6f1R",
  "key22": "2GLKjhevYjvzvTUJFqMXuRNGGWko1kxPVANk1nPDLwYHaudBgb5brraw8kA1tTdxgRMT6HTKjKm1feSuiRfwDUUy",
  "key23": "4GQL1MNRJvN9ysi5CdDh1QAagP1zcRUAnJL6ZysQZSTaVuN7vuB7dduh49yxSaesn2TEjiA5uxwnYGpeAi5hJoxc",
  "key24": "K6eHhygvYAbBT7pMiVf5vrcwXnFSycQ9azds3Nsnwweg2KLVFa131JUosSqEPqS1hMZM1sdUBVDqLuGCdCAEgTv",
  "key25": "NundgDzTikVBXEa6rR6We6sXKybunQAnc4JN4SjYmtHjyz9XHWiNEowCjCtgf813GNjrjDQfTc8ZaEnn6pRRBvQ",
  "key26": "3PLUwu4odiMd7wMf3L2A9am8FramGLs7XF1A78738LHNWzm5jJfSNYcpkbTgiP1qeWsdXkKxNwUVspZ2aZdavtoU",
  "key27": "3uMNHeH6wtommW9ueCSiDkfVgJCZxUqGAyLwtwXxDJf9EjcrZ8K4BCDzaoJUD4o4oSEHCsgkEEGei9xgP3Mp4qGG",
  "key28": "3ik1YKjZFvumRAER9RxkMsUU2QgvmVPbN1wCU2AvwXCAj3GDksd4itsGERZMiKJ9CF8xhdJLjdyrjB7stJC5ZAc4",
  "key29": "67VmAnQTkUaLtpZc9twHzjEH6sCmcXVz9roPBY89bPm35dBj382mp7zv8MHaWpR4QUS9NMQzMYJcS5YYjPCYrQtD",
  "key30": "nFeLQ8oJmVjt2Zf3hPV7burXSmcnJJ7r4U41grzePR32JxWZXLEgKsnN2EYbGeu9jp4zLpvaryLpAyKKXAt3b4D",
  "key31": "4EX3v5HCF1YxSmQiK3QiotrKYFs2mfX2gkKqoJUtRwmJdmMQJZDSYYRo6cnruuYRfdyDi9LzwfWiFnuZkefpqpjX",
  "key32": "3Vn2YoPCd2LdmtFEgziw8wVyxsgv9xvE3FZxdGtn8kSsQpE6xjFnF6E8i3u2F3EAq71aKhps2M16isjQa2rVYEho",
  "key33": "2NLmzWr5GewQk9yYRwVPY7GfxhDC4rNY8yV88oqkdA5bqyfVz7rxN7cqLvXqPf8CBcM6tA29P5NrkYSNQqgoMja",
  "key34": "65yEzFyGVNuZzMsXWxvk85DUt3zFJWvsPjDoWLMEE6SUDyfysyDbS8zzUcGEK3AUVmzjn683fSEBgvmpaeWwRnMC",
  "key35": "bHRRcmvwQ6PVfbNVnwa27K7w7T1JWpdrgyeLgitbck9rNR16K8hbM5XTSjZF8ADvTn7tqqCN714prg28FKgmie3",
  "key36": "6378Dc2316txXqaraCyv2cvSGRqkM7ZZC1YWhpfFRFzFExgEETyLyVSK13fpKnLz5p756wrEW7bch5s9b4v1hYcY",
  "key37": "TYAr8vQekreZFUBu6R1d4woog9NwNLCUnKm5m9Pk6xXWRu8JmwQcZHFj5wpbesGMuxGPaQ6pWAxj51BBX5D7fwt",
  "key38": "3pGud8YXcQAUyrA8kBFSGBDrKLfo4iHMC4TD5zM1wC9V8TLCpuZ2DKdMEBJndUKoU1MZS3oDwD6y935UmbRvZzH7",
  "key39": "wwx6Jo2MZguq9FfxrDzzKDUVwUngLUGgEBHWzdPnidg28jEcw1cQMi3pKXkxZbgm7AgDkG2fY7qGvn5pvcs8TGv",
  "key40": "3CLDirU7PzAnn2ZRB3WMNDJVKDC8qPS4rPQ6bmUvuxamomn4CxKDPnGSAYzrEGmX21wgqhh9coAgmGscuuTUN8YP",
  "key41": "4u1HWSysSP3cLbFhaAHqTpyNNEAsPoeKS1WzTtSE7qZzu8BJdWvzuTJuyZrCSY24oVmpLtvXM9Yedf1tnv46JqT7",
  "key42": "4F7UW6E5MSk87nRyMT7udPzX2TTDPjy9RCcvKtAEGE3u89ihc3ncJ3EMnijyasiCkjk1DRht8LYgdDVL2BoCQTfM",
  "key43": "5TRACsY9hwp6vxuRBLF5U7Uj5hAuC2ptZwCqRNGbHxqgSnts3U1LDL89qsTruUUNLxjunwVEzi558WoAYYYZdSmr",
  "key44": "3FmrgGuk59qWJooEee1vHwrY7REc4q61KEtSn35zNE9pgGunGz3gRGqy9wBior1eYkcTcPAzg5ZTsFAMfPqfhBx3"
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
