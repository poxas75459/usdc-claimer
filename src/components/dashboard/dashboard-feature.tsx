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
    "3bkfCyU6V3yj1wYmxjXpaMVbinXLMtDHSPnLK4t83kda65AzKWv27UMwWaF1DWQmEQ9qGstTKXXiRdkWkEbhWKLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23WdLhDvwgwWFTs6ZQRDgwqQsnPmhxjXSsm1LrLKpAqtrmxNgjY3arndTJ1iZ2Wz519a6jNpozwE36iyBPMa34ic",
  "key1": "2DfVNDtFdNMuf4tr66eCZovJ1kHG5h74yXJznpvZ5aEZQb4uGYtLgKHikEmNA69q6dmt5d7zg99ALzTBecT2yBpd",
  "key2": "4UGnj9mK2v7TH7JnB7YtLA3LmNTgmKsqRScMtzzQ1f1j8chYQzudsUwsjZJ8YftwP9SEQoRHrLRDbfFek8Xtbtkk",
  "key3": "3FSvTfrTbgWaGEbgwFVtibmwk44DChCmE7cCfM9mfJoesN44PNEtWUkQ4gVKMQpqjaHTkznZieLDg5Jx1Ny1JT1r",
  "key4": "5ZbFc7or1yEhQP5VFMwz6tXaQLcWEeeRFEJAMT8nZFoP5KovyQqUqU83A1JydzUzkCFrMPGRC9GSNUTKrkxhdFVd",
  "key5": "2hZgVokniJfNREgeXfBW9nsMQRkULo1pD8QNG21LmAsSFeqFH7oNLDHTCiMp1vXrJcpz2xtZFGYd2m9hNgLkVr45",
  "key6": "2tRRPvej2CDMQnpSrvUTULpzTjAUsqPkpi2xr6QuHyguYLWPsvXnW3dsrAK3wxbF2PTvKjDLHif6iBysFZrGfZHe",
  "key7": "2Frmzufgeq9dRosg4iiQ9MbJcNDqH2FMNqp5e2m873tMic9N4bB8ZK8tgF5corAYtTjv6Pev7b3s6VDZtQgoVtb9",
  "key8": "2jy7B6AzwdZZFeZ22SoRtS8TtV47qKsKN74oj7NxhTFC3bk4KA61P5xuMssjBQFQSeyFY1mvw5K61sx2NFG5kzKb",
  "key9": "6748a7x7kLh7C4D5ZUyhnaALxPR8Ray8rsPGpWyV6vuG6KgMWmLyHymXdDG4eBDcbohaUPJuHLb6Q53jkFqT1g3A",
  "key10": "672PRSuecVDTM1MA3EZmwLtAM1ySiBuHCn1Etz9Ao9GXTSG24BUPJ5LYdDpWpYCe2nGfbtz3nxxF6NgdBiM5Vi7T",
  "key11": "3VJg8zvMo4dgd7mTydqZe7M28McruuqCHKcmtJeM78iH6S17yj9DWbweiGU99BBZiH5ivPQZHDHvDi1djJvtF1Xq",
  "key12": "WR5ycR3de7Mqfhbfe2R61A1CmHQhgpT5sCqgV8fySo2GdgRoDQrjPswiWWmYZpGZHAkEH4dbMLLjzMwcKUYxypc",
  "key13": "4Ai8rAs72tg5vM39N3f3hvZBA2xV5P4caKmZifJDN79vtbxdWdXkpUk2tK1APTHBxa5QiqhhbG6TRGwHjZDx25m8",
  "key14": "2J4iYceJS7eoBLiGxHSVk1oi8cCynZRGhxSoxfWMtwkT6LrESizvg6MC5JhpRBXGsJFUFGNeUkdE2kgnmbyWmv8J",
  "key15": "33DtAd8abwEbPXsUESgz1fqF7dGSLfpH3kQeyUT1CpExGH68GKyEuea9UcnNE37xqYH9rTP57T3DE5H88C9DLMrp",
  "key16": "28hSVGbDMGLpT88eZhPUw2ua565a6G17YTpZr5tu1ha5QUqvF8wDBTbnov321J5g1y7ArErZoXQeEDb34UgQqq9H",
  "key17": "5Q9CTGAX7jtJ7zsxskrTLsoU3M7jeQpsBuxN2SwM51YJ4hGRuCcx5yQkpRJhdavXFpRvJw2mafzSMBbNoSnxuZN3",
  "key18": "37zTRU5t9TqgeGkrAdu7FSPfp21Hy6y2vxFcfGx4ACaLaYibfafbpfNmEpVEooeiFb9pastBSpgrr8qfBeMpZ8bq",
  "key19": "22LTa3fhgRQViFrFsgvfxa5Wu3t35f2o2Jub4hy4yySRcEHdPUsxJfjMMvp6GHqdzLDVYjnNNeyq2LzTVxHoLTPU",
  "key20": "4btvdPUQzBTV9TKAcxNSeTJ5jaxDB2X38TWBDPRizVsFqGt2wzD4bEa4zJT7AykZvVKGuPcEoVn4gsUC147ZcF5D",
  "key21": "2sKonFbJskGe6wjDeuM7TJ2FF3hCGLqbyVbtL568LxL9zFT6Hb6CZF8nQsfXgccTD7NJepWLKxFFUB5JAMdZK7JY",
  "key22": "22V2HenAyTLiPSZ8c5SfH3Xpuq7QdBniCYZxrzWzhkqNdCtdGkZdSpeme1M6RxzEWT3jTCQV5TjMa2UgKJ9TNqJg",
  "key23": "2m8wQe5ckkCBSHua7PeZfpRZRkHZ1PBEwyViZFh2deRfdDwnA55vK3eehy35LmufFcS3nn9Ht1hFDMJtJGpFuYWL",
  "key24": "2TxDwZoeQG3FUcU12pVzdCsvAcpBPjJMfj4KLYFT3e27H1iS2TUNshN94VhwtnRf2xvvpqij3yBB33UhXJUY6LCF",
  "key25": "4DMPKWqguyrhVCN7mt6XPDtKudwxeJ7jcfiGi5kEz9RCdJQ9uyb4qqRPhAKr7n3LjHqtoVEAQQ1ckdyTCV9cTjnR",
  "key26": "3AQyVDJ6H7k4XokZr6jwv6uni9n21MwpiTzXcfob77CLZkWmV29Mnxeu11aW6P4Mdv6DNi6422QrZk6qh5DiXCjq",
  "key27": "2XXn5nJt3hMrzhyXraNNfkKst2Qk2actC3Duc1GmUNAWCf5DjahH2g63Ua6vXGPSESX4sB7bxG47DAUwDZ6TPWa8",
  "key28": "2aPp2Rvu67ALxUFmGu4DFkuboaYVbug3yLS8iWcdpkyAH652kkEZ13WpGcF9cKbKGG5DZqn4HcJUsdPoDBC8WdSq",
  "key29": "64qZ4MMrNtNSKBKAExwH4CHmwnD9MoRjhDzdaQMm32qLTeWcgydhFaEirva5RSNuEZf7vRowemznBKvQHP7Q6ysk",
  "key30": "3TSpmyYTrypJfkSYkN9giKNGYgjurU6pNhxfiWKDJUmFVr2w6vcRoWCQBJpxyMTfnmnNMcW939WwywnFyDFRn6rv",
  "key31": "5bQdwXVyXjGbR66xCyfzXPZsZnX9zoFVjEdJkJiojN6rzUf4c5XCKmBFhcrYoFzv9M3PM1S3Zv1psgd7UA6CMACC",
  "key32": "5Kb6pQ8VLvXxrXGCw2STXBQinLPPRuZFTYLJnVULvpW5rTTx3WtmneXmMaNsLYqZeuwXoBab5EmkrpEo83eFpm7X",
  "key33": "5d1JRtmztQJtoVanbunByLjdzQ5gaYYT9So7GxfJX4H7RSMAdCqwbceGVSKR2mp2TwwTufiSwF3RMDCkgX6rYN7a",
  "key34": "2G3SkHi5SUCEXnpdgkN8ngqm5TJ27h5Edy96956YVQHwPTmuDSYn2G22YajYvRXMgEzfyCzHeJwew9Nr9ygQhfh4",
  "key35": "2aVVmZ7c27gvRk3F9ZEuq84huavomeUgEtjaaCcajc4ySu2Nt4zo9YigXDUoWAop8zyf6yyFCcpMUztPwG6sXePR",
  "key36": "2TLpyfW3JuVaTN6Sng34d8PzU274ozRtP8jhCeyHPwjBcJWsvBfxXfNTxUhhoujLC1uWn6EXbbieUD9rJKxW3PMr",
  "key37": "5RhcDjE4DYD58ABxtAh3EX16VQHZaeUcJUXEHePnoUiakZ4dXLD3sJ1Yi5End5uacnKdcJ8KtzP4RbzdVE111dD4",
  "key38": "5E9UL75tWRPKhWCAHGY8pL9ipabZZL5cnfong7XeoMdZ8f7mpcAFTeQy8YP4ukuVfqTYQ5CUUYPKhhumFjS6xhwN",
  "key39": "4fdJxX4mjL5Gqa4D9c9voeR4J6JoAjQ76qd2hFUMKgwGMjZDPLaaJoCrVJZkbhCymcJ21h8ApATHnTdzDLF9UztD",
  "key40": "26qM7sCVVV3WYZZjLgKJHytMEeeyNkswPAv9xyGBEsyAiC6QiakKRjsFeYbRACohr1Y71ry8hgBhd5EMk4WcEtCS"
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
