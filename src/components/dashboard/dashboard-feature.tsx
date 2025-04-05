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
    "3XhheHAhs1hLSX9voQi5F1yfMPbfrBfLwpXcVo8pKfPx6Hk1ymTPK2MXuuLhPKgCbcui7rZymarGqd7WyW7fGpFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJHMTU92tbbKuhgFVXC8FiuinBYVgumtGaFXjwj2M5EozmWvmysAMcNTLKcrq3wZpuPsnxMQ1Z8GyGpFADDUgMv",
  "key1": "2hqjENQfDKoeiCjsbiSmMh2gtdh62RspoTfhbdkJkbBRX66mFNRLk5oKWZRboTya3HrAraxay8qCSCBStD643Niy",
  "key2": "5k2TEnkh3JbDQeCFUuts8wD5D3yjUY14HzQWT7EHERvftPRH9QK7BcMcCMXNjPSdJUVm7jL9vSoS4zXm5oyU6q13",
  "key3": "4WgGXG2447S37nxpNkF5LuZjzsc6yJL71mpQZxtb8SPtBUnk4jRNCQBWidMBb3XYWRwXSELgPhwCnkdKqfSDyFpp",
  "key4": "78WcQGedgXmmU8hcRrAqLqQQaftRqw6BhFDffp4XYVYbMw31Hwtj89deXF7Qvr4wh11MX2577SLzrh9Ez7bmpSC",
  "key5": "3TKqFGijLLWdPLvaKGbrh3DfZhUVa9oE8yMeRP6Pq2PMpk5Z9vrDDkvEuB32xuViSe8xy6c9CnL9cQ93qMvhhHED",
  "key6": "5Xkfwt8qBqHxXaoiGFf6HfRwVitY9Db6BUbnGug8rbcC7cPSGqrjWgms9tiefRUmuPNosYRZhoACrXWFXab41Pvx",
  "key7": "2ppyrg8T4mjzYK8YvDJWJc2ijjGbSTpYuGqLzP4Qr2aN3SGYP3E58gAqWcKdz6VoR1QECeVxmUs8Z9wKUPBoumAH",
  "key8": "xWGsNQ626yZj9js2YmST3obgBDg8LCvv8KCdwm1mCXCV8pjN9Rt6dcbzY8LvjUGxMPCti9k89yZDLZVzq34WbAM",
  "key9": "4ev1qS18wq6fqeXU72zqR1hGS8Kf2X5nRmnkv6TYUkPxrN9vj96WyZKDn1k6m1FAJWmE51TvM5LLzfje5rEovHTH",
  "key10": "36rvU8YWQqqLEeBM6hf13WQ5oufSwHFHEFDMij2h39XyNVC5fttv5FgX7y62SKhPsJvEiMuA8GELv9xKVFPKZTdX",
  "key11": "32RdXi5u4nW8cJnB52AB7pLMwyVm7CrQZMLYF9Y4Qzf7NY7G91wmzz29DGHCYAxG7jEMjpSFVKcHuM5gWktiuBQ7",
  "key12": "3QEJBJzscnqu9sFJEBcjwBhniAi2ANYBh6iPgs7v7BQ44msQsdNnL4tN1f7cJrX7sSG4tGhbBTW7sfeRFE9CnfGC",
  "key13": "4yKSXggDDiTnwdL97JtR3fpK1Mttk78QQ53UfU4TikZ6oUe7AkexQaXKroeG8DLEmWE4B2vKypV5KTj6eCBfJxBd",
  "key14": "2LcPWwGTpM1kosCT64jJ9XS3MPXtrBkcdrxLUz12PXTKirLxZ2AYvPGx4VHp2KVHnBaAdb9Z9c3UapXucAQu1brF",
  "key15": "FX89mxKYUc5WUPdoiGzSxFpH6P1PBtbQ3s3oLH2yNfEU19PfEENJw9kWZQj6kxcW2nFLp1YLhvd6qM6b4DeK2q1",
  "key16": "5pxBJe8b37ZJPghwWN7zjqBGr7npEmSZmyWckXhGoTxwkZiXxnApqDQBc9pGgigEpitaC39HTwdeQBkcFWjGV9hi",
  "key17": "4PUngYAVJigw2WjDPXMn216Zgktcm9FC21TfrYDH48vdgQC81TaGMfWy2Rrdn3zWXzvsTxDvXCbsrudbAezwz5Gn",
  "key18": "2Gb6AZas1hrdKgvqaioYouGJCzPMqRX2cgsQw652gwUaaSiiRdy8QF1LBVVmShdg3emkbz1AWCKxkmPAgGafGF1V",
  "key19": "5MhJ3a4RoAYmQMEpNcUxSfUyygjnLnbFFzXaKaB6SBxS76YhZqQLh7FNrs5ytcZLXeiKYzovcCGe5cxEWTo3b8on",
  "key20": "Lg7r4gCzzv3PtXTa5hjGbhLWrKwHFgp5LMEpHiXJYwR8oDeDkHonNny1tYUmwm62F8zfFJLwWQDAKLbNiGHjyQd",
  "key21": "49Kj25KAvFkkZWnLRP6gSpkyA39vfmv1s2Yi3hoDhkFWmnNnjbEzvd7iL2a2M5Q9mrXaeM9jaWNfEtTD4w9sVjAY",
  "key22": "27sr4bYKPSgiAcmRsdkVo4shr5wwcTk4hFLidgZriGSfWnLuwEaDu6w8psv3LnDh3W58VTPsNcbFdqyxFq3xSKhi",
  "key23": "2StEWYLeWSUbLDxJVuUJuKW4wpUumYxPdbpvvzqEegMZbeQKJ15zg1rswP5cREN6vUjCqhFUcxjVvfuE65g7bXga",
  "key24": "3U9VwfarjBbb9Zvm4fQzF72C2bRGVrPDG4Etdty9t5WSXSnimkMvQbbFNQWrp44UCCYpMCXz9QqzNfCF9QsbMMph",
  "key25": "3UnWCHEao9ShJrsqEGeeWGUFTRv1GVzCEowpKz2LwFHmBQz9rqLFvoRQaonHeYfrMrwyFFMUmcFrEb3WUn5vTghq",
  "key26": "4TqqwojzDsCTrrLDfDaCBvtdUHquXLcFkn2amhn3DwstFHihsqh9Mtp9S6BXwhG9ubq4je19WGbPCT8nuPA3U2cD",
  "key27": "39kGSXkbLkUANjcdNnqjCiZA13zXd9oNtofaqqafgG6KpJuSbCVx59sjkZdsJgMpFFioQ849Y7BziWV9DUjAX2w1",
  "key28": "5LHTZZsGp2HWuWe91zt7FzXwxZBFafwa4dWKV3uK7aWsiKYpH1GMpzBeGWPrCPRbV6MK6LM1E9jfEkTt1wp2aD5d",
  "key29": "5HrPj39EmAoLWM9Hbr54BLmgCSd8F2rMuqCdo5WX89nHajAxhb4yVDJwAS35hd8PrRZTjnx1VpGtkULdJ8waDmSg",
  "key30": "XksVF2uWJNLTNFKQtbPPt2M7ehwzPpW9miZz5HMhzvWJwGKubL4Ed77i4xc6aHLbyQdrNF1t9o9esMrA3oJV9NX",
  "key31": "g1ZLHjxEndvP4n5PfQjhVGW8giGsvv8Mpntgx82tUtpW6JXMVtuZQRPEfyqquDr7H42Y5HtBA1t6UWkfR7buCT1",
  "key32": "4jTEGuP6nSwiRdJTmdfWaihv5y8BeJYMG6sHs41y2aDpkTfBDxuJcjvUsM9dyHxYvsP8gHjP1w7TXrQHNKksmiSB",
  "key33": "3xi1T3vgcwWJzuSMXS3cg7eBx9X7tgUFbUUH2j6RBNqY3f7xyj4sprBdZMpPg96kfGLj36Q3t6bfTqD7fdW17SzQ"
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
