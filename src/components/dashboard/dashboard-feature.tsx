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
    "4SpkSqXS2LiZTwdVSvtUcn7z2kshrsvZQjiJ8KBbpMD9iLKsmAqSvEXAaTyfMMircdN9uxKajrjv3Ak6AXp6jtMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4egKxvDPtopbk9nQBfhsesKscvAfuchNcGYmruPb9NibWWyWvJhhPhEJK9xSGTUimCMh7QDBfLmFUmjqJeSVWuuU",
  "key1": "2vR7Dpj2pg8Eckoe9oZcTCbqCzsD5eUhMRR4hDs4vEstB9Ta739yqaVPgwzbj3ihCxZSdatfJiGEtue1r5XenN2F",
  "key2": "6pX8ZkAmdTEHg7ynzzYhz6UrcYRsPkJ82PZs5o2kTaaEwMQy4NBKxq84Fb6wM5SUwhxKE3mPzwXtEPAsv7vZU9o",
  "key3": "2B8fcjadwZW6rgKeowjA52xCeLbifLgYtpLeUVrCu6QLzXTKYntQHDiXwr8JAku3wpjRL92ykpWqZ4HtEAhndPft",
  "key4": "2VBV5uu2AppUqaH4E9CaN7RPKWjLVDyDrsK65vkg2usj6ADvFJfvopnY1qwPixT8Rya3QPT37ShZK5jqkgnhpn5p",
  "key5": "4oE8DeiEXx9TBE7RbbNGJXYxW8Rbd9BWoT6Uv7bwFLQv3JWfc8CV3hTUtEtvbHyHEma59HSSciqgMRm2bDyzAQLH",
  "key6": "2injWjmx6BGRzuxtffyMUFooskFwZGxd94DARK2XHf98w3rbyDaCnkjxxhu6G7rF54D66SorLeyZ2rRucLEdpm7X",
  "key7": "4pDSWAyLNqVGbwiLB9Lb73yPTkFXSiGhkrPCKPrhULbix23fkEcxZLmiWqsdtnZUZfie9c63vDpesBpkyVMzt9b2",
  "key8": "4VjmCv5CcDz8DUJ4C4KenVtqAvmo7F9Df87VFinBkHxobqwXrkjLJGee87Xb3P5L8f6DBf7wCajCd9RtFvdWY3pA",
  "key9": "M1UE7Vpw9xxLs3pYkzmDMBsoidiwGjpXnhMdSxCm9Z9V58rCN3JXphv6eEo1LiTrGaHuS7ppe6Sa9E9JVCjszKC",
  "key10": "4tws8xGYHBuLSvK6iLfUA3bK2pxPWvBpALHeN5GUxRygJJiPKtLRYewvoAmSuSkzAUbscQxfBraGmW8josNG1SiS",
  "key11": "4TGeQeFYG3odTXw1jASdtCj1DBU6XTpgRSobGPxwLVHcwjSF7PP5kxq4Ym4rCnoZn637uYohCTQZdUrPt15bL4mz",
  "key12": "3Z6st8pmwhkaVYfq6HCvW8W1MAyKPB7DuYLY6dgNznPcQg9Atp1tDbnW3goRe5ZzuHjPnJkY6BhRmjrbowM8smzz",
  "key13": "2j4RBoBrbcH3tMPyA3212yxrM34YiZSS6E9wA9STznKX2fiZR7NmzrNDizDkqqZFJFir53HMubKqenTSn3uRoDuy",
  "key14": "2fAiAfLcSBNTnfzN2jagPfGXie1iuXUfvMjTuv2snLjmPWpibnyaej42omj7Rjj3PBZg6QdvMsLyZsavfouEXcGX",
  "key15": "3PGgsr5pG5MZ1EEWHxhZtictqGn5NTiaXgoHEVSB8vCfGqevLsN8taQEwcL6RvttuG1Gm3mgd8NumaYubLvCw7HW",
  "key16": "5uNELKwYYVcBaCjZfHcahnPxxfPCyZwRH5C3QEGqqRRAFaQrWxropgYsTFSmHEpDnUEiUkVE3jG2STXBMisieqFW",
  "key17": "SV6CwtkgLCA13g5RjAdfjLgud7A8EAGbfdCufnejJtzugVFwaMXRaDStSBDfR2WupzGunchanzxdiocMhJ4C92f",
  "key18": "5ssr57E3EqE1ZRXjG5JTDA2hN3MhzJHkdGMxh7eAuCXrwWYYzsvhaBJzMNaP2Q5ZYhquL4ubGT5JQHeJ78jSiGEz",
  "key19": "RLbseFo1A6FgWyjg14FH3Y8esp9mjK6ivtUVEQwSsGVv9JGeN4aJutmQ9fyex3FFXeTnjqkpybTywiFtZyGitem",
  "key20": "YJQCqmcykiwm9V1fiqEj3Ty93k3FJAYosYCMFqtxRBJYYPc4pjVVWmVYBUpZ99MFKGn2cLG56etFWaMgjg6r82N",
  "key21": "uRWUvL1WLxibu7i6mZV5VDsj9AQ8XqjoxfRoUtTnX7uWCPRW4GVYoVXUNv6QJmHqw3ZM55R58Du4uNbzXZjQyAH",
  "key22": "2en8EfjydrMJBEhKK9ahF6hccogngb2bJoUoKanQWHdE4gsi7bviKRbj7F6ytL1eg3zgVzRZv3PXwauWZypAyd5N",
  "key23": "pKXdK9r59iDQ6h6nSgJiz4FMqez6M9tCyqb4DEYqDxFvkKkM3VLifAJZYeDYhrgG5tPfk7vC5jzhTvxMwDog1QD",
  "key24": "4hi1caE5t9S8W7T9FzEg5GtoghL2Ly8qRfqrB8r9gAkkvcgg3mauxxuo8SUTduz2LaZ1wt5JrDf4iYRhXzampTUn",
  "key25": "2aSQkRFbtawFvGrGFrrsmZsMyRqdq6HDP6eAnv3VSz6rEpuqP3upUM992JopuP5KFaRVScrsxRF8E9YLHQkETMV6",
  "key26": "2pNQWBTqPyPFJoiGZXAiQ5tM55TS9fzZhZFftqo2o7iAyJha63at8HENi9CBGmq4ogZSTgcrAeC5ZZBRRFEYJVMK",
  "key27": "7ZokoZ3YeCXZM6inCytMi4FUpYFJYrribDzxsvXUXVrK8JjQq2jvHHBpnx9fCMn9TTN5wjATNv8rnRRezq7riyB",
  "key28": "54A3KGDdZ1Ar4C6pzxazutJWMvsMjTz8xqXaBRNnCSzsHbiCTxgT8r4oAg5SJj86yx5thX5manyrMJxYSKt17piA",
  "key29": "5eJBcG7hM7AKtd8iKhZpQxtvqFNKFJVernCZJnqxtraZWiimiNNdWE7QoVy36Y5skCUSz2WfWGmjRdng6kagfP8w",
  "key30": "495Ak3N1F2PhndaUbCDovYS47pVm6mbycZoz6AR9GhAxYMVhNVFRC9B957wJNuyjYUiXg4siVY7J7pfcpHLx76C1",
  "key31": "5VUgNTstrQYrGbLCcgSXLmjaNF4v9UjYJTLJJ9tkqHf7cuQz5h3hCLa4ZbPs4Ru6yztaLZF8pQHsS257yGnqWgeW",
  "key32": "5psdSJNza49tW74eFuFRhQ51sNNVrT4UzPE2hpJp6Nvg1WgWFHnqAVv7t7jYw7nAHQ5VW2nke76bRYGgNodq8pTE",
  "key33": "5q3vsxd4pws2C2r66ArBR8jrxcw6NZp1CTLBV1B9xnNdjyJtNJKHYtbAniajU5V3uf6bJZA9a8ukS6XfzXnEcbL",
  "key34": "3iFxNLNEwhNcPm5oFGoy2TGR8pkLGSFkx5CUnHMKSw467VCnedGvYzmahYmT99sE2t5tGZEyyJk3uYuVWaPtX9uB",
  "key35": "2Gsuy16FpBH9dEsTF4KbzpdsjvyGd3h1ZTZ7TVWVGs8bqDvWDyHXCxSGf5ywRboVZ8xbdMmGz8mz9i36ZessivD5",
  "key36": "5Q6NTHRhm6mqxWvp4TdG9gEprCpQ8W9rFVmFAbtHBBp4qCdzfmJv1jBnaD7QptoMQccbg899ZRp3hvbD4zgAmoVz",
  "key37": "4Za7RFapXyy6ghAUWbZtEgBcFxqSbVigVrE6qsbJzRKQaNPEEx3ab6EwQpud3Q4pS2orjPkrUtJoeQHGxd4coqi5",
  "key38": "4YVnmCw1iTceV57RdaWSRtwvpscqh4k7RJ73137XMVMAFeRE8dXjAAqHa9fCogN68gHsoxvX1fX4HMkguzcSnw8d",
  "key39": "67fCkmr2gFiU4sEaBUVgS5mDuRHc8jixDXT1oo9nY4vnu6JrnApW7jh9yNzZFLQhictjzNySsNzMVPhamrAa1gEf",
  "key40": "4gMPDrtjeHxX7Y3uNgTUE74gg6yzd64RV22gsyqA8WiAvxBitL9tr9YyXhNfEevHDe5io9v4SxmifHeoUS5r7FAU",
  "key41": "iDrS6d3NuMy25vAhjdLP3RaioaKTuPpkA4ynLzPZVoDVwfE4oJfxUHha818KK3B8nVEnUMnGPJdn4YL8FWPgoer",
  "key42": "2C8mze4nMrR3RMFCJL6JEXFQGjxMj6kM1DrBwRhQs4duJG1gposBg7R18L9obN81VWQCWBU1b7BSUGD9TLuWZd9",
  "key43": "2DVTzqk8i99KUyzgMmEaDNmXQ8n3kJmTWV7BE5JT8eTqQctg8AAU9GdqMdZw94p9W8M4ocvHEu8o1ko6J1C6zeHp",
  "key44": "pGJsXoUfjHLLTrbBEqDxpGdyi12RbJKnGdUop5J5VpD6VwT7Bk63H6kohZdUWbmgwsZnCXwhgnfaXzoiDRcxMq9",
  "key45": "5RJJkwgi8i7uBy56aPWFLw34kfzJYPqNvw4a9v57EVWticv5zWESGEiyBv8tCHx3q63VKJmBMxmqBtVWDxk1rjrs"
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
