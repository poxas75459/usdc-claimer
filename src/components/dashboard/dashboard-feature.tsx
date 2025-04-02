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
    "23otskBh1xvr7aW44VEuAEphYdpRCEG871sQ9Y82LaQTEu5YsXYJwS43oqiFvm3B1CPE2s769Q6dhnBU6XgCatVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BvGForDSjNnkPukND2iPAEzMjcS2T9ZdMtCV9KduoA8ebyiKe1etQ2TU152rTgj7KLPKfaSRNTMm4xDeZg7vsN8",
  "key1": "2PGmvtGbnB3HUem8yjPcoxvz8ipcHPSnd9bs3axShhFrB4fFD76m62YTz4GShuMnubgjcFdz2GzqXHn2VreX3mGR",
  "key2": "5HrKyAANfp4tMn7X3Vcov4F7385cyGzDsFQ7uN7USLaAUywd2LeZmNB56sc5K5ht21D6ESzv3yrcVuSBMCoqVqpD",
  "key3": "5Fo7RRwj9aks6i74pUNXgzDaK4CFNmoBrhexReQmwQbGMPmkAd3qrDzX64F4uLpcNhuUrFK29nFeuNigyr4k5fCm",
  "key4": "2iycPAuHtDsbdHPr5MJedTPHF8wtnbCgErneqdC9RSEqMMFPmQxyLuTpQFjXrrJQSnB78v6WCAwdXL8setDfwXLU",
  "key5": "2tgBmbGxv2apxyC4Xxj53EnRbUwc8ruW7SfSMKrwTBaVoxoc5s98RVEWJWdea6YJd11YD4FAzcjezAzHaxf8m7Y7",
  "key6": "drxgg73oV4rcBWECmBUwBcpeJQTGXEQZgEzn2vq9efwcFoWqiCXcuPMGmyM5fuwszuV7p4dZ948Bogv6etxYv98",
  "key7": "4qatLmi9e8fUGeiNDnzikvJEmPFerYGpKZTEpWS4wtPkJCEkfLXExT53RFJwDXF8DKueryGaqACPAJyP1bG7LVVB",
  "key8": "5JmQs1SNo51bigCku2bozYV66R79xuamWQhcQwPjToZpcDFDfh5HCL7iWkSsmPv2e2eWutp3VtCw5HqkHSViLFU1",
  "key9": "5UabpATLXrsxgFHspfwdTR6vDGnD6ajygmJbkSGZKyAysm1jh8oiT79eAiH88skw59dV2fbbU1qstFovDV6FH7Y7",
  "key10": "4fL78vLa2C6bvLAcE9wfs2ugjjtbrNET653WzZs6xnkexfHQSSpVUvEHroFcjjk1dDgZrY4zNyHvMbkE6tKaQNcG",
  "key11": "4oqpaS6JxSUxjEgv6uZTPRWvkoC31RHW1iH6ug3B4JZhEdocRbvBksPnGfSW7ko9yri9QmvBiKkrAdekattHNW7x",
  "key12": "A1nt3t5XhznuDqyNKfJKRwBw7HU5UnPCo2BjRe5xtgBVjWeyiMQFZKpMPxFcKgQAS3fPuTd6PPAgkTa8q27SUAi",
  "key13": "4BdNZQsTd6esR4A54gKsGmz8sSSrzYTwaBVSMaeYJaRKuMFzDvfihmyTkRWeUgpMEUAGbTzQhpUUsMSS2MvKZ9TG",
  "key14": "38PhzZ6YfEKfjVgmQxzgnpGkzXggDKaWvvW55oqbRUP5Y84cqG3KDe2qnMMAUJHKYJiKecc6R6ABTuJuBsfApgSr",
  "key15": "5zXx1F3gmwY7b2xrCr4g3d8UAfBQdKMXzY3vn9hwFx6LthEHWxsDF9v11UatVmXuMUWepjSScWeX1H7qSbFry2qg",
  "key16": "3CFSSzVhJMaZtpnDxB7Gi1sVm1h73KfJhyYAYi6orhWXv9zVwpyykzPGra5H3WganXMtTtL7gKwEm8KYiyb62cz7",
  "key17": "38pmAnkMVEPoLozRnzLRWjKErHFDo3XAwNBN8Zu59DnKFqagAC4f88xZusEGkU64ffBYjoVAmY7bzPZzKcN2Xd3v",
  "key18": "2YtpE1LCM9tXq2zUpdePF45vcqXG8oLqd6bbEXZ1e7K7H35w8zUAFt4Ymb9VQvdncruFpa4azpYVvMKkntA4VDyQ",
  "key19": "2DiYCwkawgFMh4sNXudu7h79LnHooAnsdrjBoijLVGUYhZ7WzR8qyMVNhgPrAtNYgfLnTiKhLqX1cpqQPbcvB5W1",
  "key20": "M2zgyejdLvMExcWjKGsoBi7pj17n8UzfVxK9wGqAfqJ3NdoYTTQXmPC4dy56swBiaNFDkUWGbqTSkdfvUAyjRqH",
  "key21": "2yCUf6jxVmpy5ba3vTf73zuJjHmsABBBvbMSquGNM3Zuk3yjWnmoxtNbHqFTBEmMRdfNvvfHgcdDq3Tjn1jykQmy",
  "key22": "GX5j7YFoRZV3aQGGztxTaTotqY3iMx66EHgFeTRpq9MsrYoAJAc9tpkHA2A7zPUn1upgHAdybCfGULaj9AseSxQ",
  "key23": "4UUMcp1DWvbMDrJLzExXTN8XS64aUDY6z6AMffowUVUz87FgmSaxQkoSFZ25Hv3E8XYLuA494o8zZ9SssUF9ufSs",
  "key24": "468yMKBQ4cGHspdr75BKjz21J7c9zdgY7pneeyggae6rS1Pz8tDX9aT5KSj9kSfaQfbcBXjDeMYihRCoQyvH6StG",
  "key25": "scrs6oWZDZdLqMAJSZEBW1mdP4XteUjm91ESbacBmY2ic2VzLC3ZkbhYyGbMktGSc4eaVKFTauZHTbQ85Sjywcq",
  "key26": "YeEqbLkDTr2LMftM8kSiQXBUAvcRpN3375MAfF2EnNQEPnmcJgQfHYNm8abTBB6mRcBTCGjg6W9WWLAzBxniUU1",
  "key27": "Y4xHaS5rjynavBUwXiwptnZmPcdJ5VpuDqz53nNNNNMpLHRE12cQbD5kfSn5tv1tTgnimS3RwQdH83Fxs284YsK",
  "key28": "6WHYsZkys92SoUvJ2wyLT7Z15etTGmcuB84XPcSMQv12hibPMHUDibkmCxVLRdDFkpYAqzL1242Q2eT7DFAeR7Q",
  "key29": "2vcm2vofGXWpNk96nkDPHeUZnxB9zDKJfc2eMLkLXXvMNfDFdUNAW6xV69Fma21GVmwhZs1r9EgbdXWYXuHNqvEh",
  "key30": "2jWSQvqvffyEvf5xGCcuBH1bRhXWFxG7KsgUebGzokqMVxJqEB4eSdQB3FxL64G3eg8VhvqoxA3eQBdCas2ZMqr2",
  "key31": "aSpQLDW3KsgqbyP9yYpp23wKnAmV3mcPTfEUjVQsauPPWVtbaXE2MZSWEaJhpunSajmiVrLJkJMc7m6mc9rWLFQ",
  "key32": "3t8LtXmxei3jGTfsEhzPdHQLauTWDqzq4zzbqqy1uY8fuzwWbw3L1LKXrTsC7hxKCHBc69LUGnJzzP2ZoAwu99aj",
  "key33": "ZGRvaQ1AhF6LiJY6ywHNdQ5a5R3dJyNZkeRf6BGPFwzAeM2Uet8smF6i15tLZ83hmCCRzmgkCPFqSCPj4k3aPaR",
  "key34": "3PMmZ5jbqpu2MbEHsmosymZMBFZLKGXxPPaXwknkPTKwEa5baCfMw5yQzxcsv4D8nF3iqtDnNTJwEVGNnshBPfrW",
  "key35": "4SSnCQTCqXbku1cUsqzTtZ37zbGWrHoWZ8QtENZop28aesaASd5agEHgy1AMkFE3AqfD2kPAypyu9wiU1PKe8Tiz",
  "key36": "4SQ9JWTR8JiBcH5jMmh8NTJLys6xgDxGMruqrMnT31jmfXfBrNuutbgr1VX59x8ZojWPGivbwUKmCzdwhYkwWBVJ",
  "key37": "ZjhiEjB69HE9gGmjQoyF2XsQ7dCtVsPvohsYEcUFfhNhJsWdBU69bGDcfD2US4BTueQEPakBPcLCpGq8igruTgu",
  "key38": "5pxBpSf23sByDqN3AJsUff9RvkUArdAbAsbMCD62D1RxsgseUwDn9sZy8kuoCGZcnPoxzPF8QU6o4ZpWt344BYUf",
  "key39": "2okwmMjM71T1UK6QwVgioxvFpJKnuiwptFrAqD8SffmyHR3TSRTakvHLeo9PAGvNoCUaFqycnXNF4pnwubA1JWvB"
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
