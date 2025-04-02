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
    "5zXxn2g34oUgadbRybQpv8gwf2tX6pFV2Mf3kWuR8iXKE6E8VjMcAJGMrrJ5T7b9ycEDGKz1Y5JoRn6quh1oSAGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dxzRtiBc46uNJexMrL7wCAAVpihgX2ajEUnZm3jpA5anJogEgsF8mrJiSWRNirbf1CVcCAo7e3vnMTzuxFKtfcZ",
  "key1": "3PdakRASCZUic3L97br6jvVQn78R6cJpDKQUJZj6NiFgS7v6qntYandajWWhTDo5sj57bRjWD5h6GJMzyx6WcArw",
  "key2": "62oFvvD6ntUfZc2e1Du5nGZXYgtUZGguJWWCTRw5QSon1Y3WKDqCo4ULNKyuXg625ziVH3ibYFDhrUJxExfo3Zb9",
  "key3": "5ybTU4RfbbvxyenwaqGjHhM8SH97AmEoLJjKstrwdNW34NsKrjmQzv5MZhwLLUg7Jpx42oeRzzen3PM7anpNo5u8",
  "key4": "4MSuveoJXGPDqxLPXxMPtkMnEGth8NorygJ5zMqCrn8ZXLa4yfiLDp4QbNCJw8cCuHHctFXdkHx1jN1pPduNQ5xN",
  "key5": "3M7HCMW5c5gpMXreBw9h4tmZqUqwgmfZRhV9dhD6Bnwd3KwZy1Jwgq9prkXJmQPspnXGfHQBEv3T1BNwKsDRKFra",
  "key6": "VHBHsaGJAYU4qcedP7pad7rzZsWrCgMv4aBRe4ranjasqDtebBrsLkfGV1PqqMYHsDLjrrQZaRtFNkzR51cduhu",
  "key7": "z4g8LiS4yeTsUAfct7o91ciwxWr1dUnoDsKypW7Dg3uBZFwzinwvYVFy3u9HQZ55TXdZHgSierUsKPqCRGnucvn",
  "key8": "3bejzYbkZsFbEVYzSeBbG4dkHqEenMeAyJPawEFJv55cvyLryqHqqqBGMhNs6Xv1sQKej2GMnVFP9AVqxvPg3j9Z",
  "key9": "UWiVAo1dDCDSS99xJo3acqMWzRLo65JTWkRC1YFMVMWdpEstqdxn1n5a1uRjFKsm9D5TFPHVKFFFbFAG6P4wtKf",
  "key10": "2UhutcVHqcggZhjmbNzh8S3eRNbgByCoGwTTcGrvaY4g746YeiyuHEBgqe9eNeDDsXs7pewia67Ny6zGwFFofYYH",
  "key11": "31rrKJzfL8QAdEkwo8QvWG8g74yGWmqcPDwDpXU6oM6zyFc31YeJfVovRYkhhuUu46CBU3Jg6TMjoCVNyMzVhApH",
  "key12": "49UV2g6Bh1QgHW51cm2FKPZT3u4MkmX1tMxPaCKVjyK3tbwAQgH74rYTDNZxqCrrJb8SBif79zwYpAUhAUJRY6iG",
  "key13": "4tArLvhK6GgUjwpYgmXco7mbM2KFkAzjYxdERebaozsB2tH8mPrckgQAmHqYyjyovZUVzKyhXDjCyn4yproNwUmP",
  "key14": "365pmkYUcBWDnaU8PbnarbZMVkD72UBkiYegd7cGWjXhEMWe2kqHfmDtz5SsjLRj1Z28nSmj5apqM8r9xZ6tkPLr",
  "key15": "2UBKs9NxVvX5EpH3BP6WcGo6RSrkDvv3u5RYw32dBULDaF2CVa6BdrtwmD1SAMU5DUcshZTCJ3yzqUp1Gibb4pii",
  "key16": "2iJ4SoZ4tPwrZerX8nE4SpVWsBaEE7fockHpuEMxUiBXKRfXr8zb1HQ49oyArvFQxxkUPeKG49iAAp4vsTri8YqB",
  "key17": "Fkva9E9VMDa59Cvj88EEbAKZQPyYV5DwhqRxcZ3h5tpN5qGqToykfmFfEnBEXybCVudDZFyM73cRxU8QjyQxj27",
  "key18": "oWmFtqTLNvBEXYxqvVxhwSeXD2tbEirwpWCsMPPfErD6dHSDWoGa3uAu9wfpkVRnj5USk1cgc46vv8GodKtV6xX",
  "key19": "2TFjMNQYXqeDV2AEr4HrKu4YpxENBsxjie6fgJHUrJqvTD3QFasMyDqYX6WacEoBrvSABWBwcKKSV1Awa1gP6h6B",
  "key20": "46wrgyAJCVQWhBExxvv3GPFKtHdMDFUooUE5K4dLDaThbR6ZaFm615AXR94yFYvQtW3Xvo4e7sCNDEB71ZBYpRvP",
  "key21": "4tT85dy3ULYX4QRPgY4qx3Kmba3msx7oMbU1SKvuZ9u8E23p91XtiE73h78QQPfTdavU33mMa7UQf5BHav7r9Edo",
  "key22": "5uAJCSmJvypJQU4LKjtPVv92UdjQNuN9KHDdfGYb8w98ZJHUeEhSXZp2A5PbHPEj7QMtorYCq5u3iF4Tv8jsmT4X",
  "key23": "MKThL5cVSGaDCVVGvNuHchGvNuCaJZ9RBoxgyTe2PAMVm1V38Z7KBo4Jsde7GUKYfUdajHfg37FDojoto1CqmE7",
  "key24": "tjkPK9x9doubhhBmFdJk37Lw7irNrYtZ1BUKD2yaEcYN3U7MR9c3N4vnKnFwDHj5nuu7b55dXteAPC75dHbuAv5",
  "key25": "3vwoo2wEDWS12ArXFSAxWuhvzEnN4HWu3PonYuoiqEhEPWaytaxcSFvg7nmHGKa43atDLiW3rnYk9Z2jdWkR4gAp",
  "key26": "3bvgWvQ8kJRY5aAjkyTXo7tTv6RmtbECkszJm85hdyk3nGjGVVufmkhiJi9zLQyzb6fB8Q39APVkWra2skm4wQU1",
  "key27": "8sWY67BA7yuxaLGh8F6oBnrCPZ2p9A5FdETWFqWYVzutCNfoRRz8ok86u7oF5coF7zA7oStkKhEVeLJLtz1U3pn",
  "key28": "5gwPRSqPuGqcr9stEPLqTUZXCgn9YixhPVGkoKptrs51hWMKxsyi2Ybgy2VH6r7qTYEwE7FeTJgmRXdie8Bm9QtS",
  "key29": "4RVLV3ydGctekMDsFyELAruHuuddGPaJcaCAZigKTPy27kd8QG8nAxaqEakBpm73j75xALtxC3AUDvQfaqBt3mZ7",
  "key30": "4CcGYAzffccibss2HZoL5xMWUCoFeZLsAhwebdwiFammJZg8uwGwzzuvmkBVc5gtAj4buNs9BzF9cu2bHjrXXhP8",
  "key31": "4LGdcmnsvtRi6dcEtZ6uAFjphMcu8yhqZYWHXBSiEDkbsSbU3uoW1o9ACivNoSP1fcv4PbdFrcMaK7TD3LF6cWei",
  "key32": "3tz2qhefPtZtgFDtgmjC7nPetWHZ9iyLd1GmfVtxoK23pYbcLRk8qQEFt15t712dp6EvmVcYFALLQmDW9MNWCywT",
  "key33": "4j9sy9CTk9cJHRBu5CHYqgga9G3SVTZQ2XsoLo43LBonV7rhAt1zfyVWVgoZV7CN5PK69f7hCWYWdoRCRwhsyw36",
  "key34": "4MnWqHjR52KyyqWR4bSHRaymtrvCnDjNQE9Z3KA1Ac3vFs9JiNiibZepwsiskyxN1MxnqgBB7LqqsktHwkmCEmLB",
  "key35": "5piqXz4hfyP9GJ1ADvGFyYiqVyRATpQyTCFwSnWeBY3v448yJpRxLj54eQxjGGkBpVWZtXAoaYNFSLTkTyDxJ4By",
  "key36": "T4hJL4fkDwn7TtZENQhk3uSCn2Uio3yAvDqZErESwD9KRYFzqXiJfGz8T7fXt8eoVtgVUjsXg21LhfmzZ1WW6zW",
  "key37": "5tArfR3Lw2U7Mrc8LFLC7q9KbyRfwFG93vxrzfJAU7Q3uz828qhERgchzqLhEwtCRrfsahfRNBbqT1kMcUbJMenj",
  "key38": "3a5G4t7y8GEmTQKmTj7uzHeUHmU1GJDLATMeqXAG9qF6CXVxEMmm2QaAdXMQrte64pWSsXUp9rsGRLiaHi1cXtQN",
  "key39": "4zzuLiCfv6J5SwUk5eDegZp2snZSFHrAjwKXABu9YC6sKHHrXQ3ZQDG5W8pMxtETrcnthGHEi7J7U47Bhr5bxBPB",
  "key40": "5kKCjpAnay4vQWKjKQSqVfLGtADNmzQjGRfQUSb4HdtzSbTgeiEWx8j1Cr5wWzCfpHpot1gUNeMDXjmpeFW3kKzz",
  "key41": "48W1CUZjSF38n2PL2FMvnGZKYSJTiHZWARNCy6jx6JrF6HyVHmCfsM3zU6nBqjQ1Vste3zawCEdtHYk2yxtRFQve",
  "key42": "vLEoq8geZrTvf81LaET5nWqE3Y1xsqCjqarwy5mQdicvWbhFj8T6yqG2nd658zppoDadeASE5JgnHJi6HPddGGj",
  "key43": "5LCsqqPgPHHD8XN1z3LebuNzhrcBRgS6SnTMkD6tE9nwcRkGSwNEju7S8xpUZxevyBfVKA69MGXFqX2EyXgYG6rg",
  "key44": "66ojneihfkWfcqnRfe4JnCeuUsq9eSVsiw9VEmGcp4oJuqzVKRXfx5WQkANyXgJx1fdpacdd69zJB8vpcyPbcFso"
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
