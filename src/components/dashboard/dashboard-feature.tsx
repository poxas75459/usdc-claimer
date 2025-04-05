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
    "42R26UMVkAyPtru9MJLCJwJQc5WdL5N9S9RD7HawBZJf4nBqecT5qBaFs58QzpWudzhkh4CU2MCoUK8wmMzXTqvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNRp7vk2pZhYBS3HJi6pmGU45EnM5iGM3wypW9m269X1Qc5W6YUUGia4VCLSEqLu3Q1BpwryTSyWAYPTdGjSGjA",
  "key1": "5JLMKfZAXwCqf4xa7gVHVgENApxD4vnjicYifvMjmx2zVcgD4GFBrv8BJGTxoGP1dGE4FpS4TXA2gskMqX2ePwwm",
  "key2": "4wfBh56bjjahjZ8Uw4zS44wzAm17RDp2dPvafefy6Kii7Q8DZ1XwaCWAt3ayT8RyP9n42MyqRJfrSStZUgFnAbss",
  "key3": "3JSNsC2seeK6nRqcKopZJs1cfr5DtJGG2Psrnjgg4utLaSDH2jaPyq62UB2BioW96efkggsgirvz4XFbzvHAW4iA",
  "key4": "2gLsFAB6T2uAnoSRQfwZPU3jxnzD8HkBr6Hm8VznQtSzTyPEJg7HHVd65bKQxEs5ySb8SzM3qBpQq6D4mG4NLcL3",
  "key5": "3XhAfmnmUPx2E957JFfWisU1wfUPetwwVD7fZRnBMk783dXqFeLr1xQSThdVeztaQiuwVqSGFexb5t5h2eerbEih",
  "key6": "36Z4do9dgcZmF4bYHHCEuwvH6CEkiQUzWK2tpt8etuJKu1ZAJsRdj7hRvrKoRCngvd8RXgHSpihcZgFEFhwSH9p6",
  "key7": "nPSwAYkeWBN64naxorxcwsYewwmaoWyHH69v9oDpUVxeRnHxoLuUxTs2SNfjLJLND5V7cpBSdHqS4Wm8TY86m4N",
  "key8": "umnccb7m1ofAnGHUMn91MZSJ6eDCB3zRLVYpHh2nG9c8cR45aXdTENtDWb6jA2FDrYcSR36Tyvcf8g7AcQizndk",
  "key9": "2hWVsvUymCtLyr3KKCuydzYrdqXjSVDs23HGv5UQ3tGARZR8K5BVNmWyabjCekvBoosSFokH83mAoaqMvpZ1CeUZ",
  "key10": "5J7nJrGSXwRwdXZR4U1WBDGhRa8VJb2fdrbgEjpv3PBpWmxoMYvwKkXhtjVVAYKxAm9LqiuTToFiwmGQWKVweXZP",
  "key11": "45QM2gZ2LeC5xr3hAjXKCkTGECY3V3RKBNcReqTnNzVF1t8Rg4DszsjXwCyRSpcZgx4dhqr5TKis7zxL9gdUBPn3",
  "key12": "47MGoD3mvQnK6xBG94J7mgQfzY9tyjys9rrHrZ66p5Ya3ykvdJ5sKGNNC8NeYfQGNU4918hNz37LK65q5YVwWUxL",
  "key13": "4fKNs87bRsYcKmte5V3Cq56tdTBrQ7kJjuT8TowTxmAo1qe9MVbsfn7rwpeCMf4fvykr6j5cheAkrDAZSXzpacbd",
  "key14": "4px5wgTJwQPuwdDGo6be9GCqVQaemdjqNdqSuo6qn4cWMekSR143Fwa4KTpUbn6w7fT9rUesTiDtUEcAgyrsahar",
  "key15": "ZGXhF3P6ZsahbMprZpvaxz5JduXwuC7kJBfevi4cD19uSGzwR6eWjwDYF7wVkMBbsyiXmFaDhXwQDYZ6V774DhX",
  "key16": "3KwtSexJfDz9dPLYLBUAxtyQYSVLQxEpvhtc5EKiFi1LvCVEad1syXsj1nRSBnp31hS8zRqwnquJq59Jmzex6Yfa",
  "key17": "3zdkP8Pmkur2mKJ5BSZ54VyhM9sbPnPkSvzHehN4aKSjdxsaimDrkPRj9yttgQx6T2D7th9eUP4ChyNLUfnHdHUq",
  "key18": "2a75KNyC1gUUMWJSmWRSRnsmkzFuPDN4n5dGBAvr7iwxHhs1ynQ1vHAcWWX7A22d1rzTcSy8uf3wRAhGLuzjsBWS",
  "key19": "4B1s43MgZ3Cq9Yv9m819AqKgUYQnhv2xXaGdHRibPAUSd3zu2ufBFD1DuPPPCkU6qdw4cSW7Hj29Y15Lo1Ke9mMJ",
  "key20": "vREbsbAfttq574hdsTjRJC3mTdz8jmzbbEPQp1sNCvzu9FAwG5MohTRpiEm6u6xq7PsGh71x9o29TdiRSBgsusu",
  "key21": "4wuAgnPWBHAGNBJtmZSFgvCb48otQ9HS1yZoZJ6BGPFFp1KgQ7fL6syr8s4LCjZYsEkzX3a5K7gbqxULmn938GAk",
  "key22": "4yJQVKsUfc88P2dn6hgXLjBW3bxdqygpZJLZZk1Ska1YMBbg5wzNWo39G5w9gKFx7AtTf4YVzRdRfR87qwwMDDHk",
  "key23": "4WGSM87HNcTSiugwuPdS1BaHSmZAatDxjhwZtBZMngJobcLiFhukYaUNbiKWnRQAtSJDHfZHMRib8HjK9TVy6DrK",
  "key24": "5WwLB6SKmSR6h2Akh7Vf1Kn8qg8bsZgSrTmPaVjC2Tu6WcGNKtgK4uGB4PgTFRs83zpri12rx99QRx6UMWXGJRHg",
  "key25": "4dNfXzoNzWwFZuwo6nPiuTMcc94tQozjCoSoMnagDyCnQxLsiTSf2yA9qzr6iuVmqBRZfUpEXL8m93dd2pY7bzcS",
  "key26": "3pQWHjUAnQAd1dtGAZ243E2vXWWFz7thiovrPJE8R23BqwhvKkMRVoGmpZ3Nd1AHXxs3rZrkzansnoeY4zja7bG3",
  "key27": "gU1wkAhhTqVBg7GzVZUndjKedGGWAMpMK9w2UyQHGq77zYL2byTYX9CdRgd3LQkvgsLfULxKFksrKX7mFivh56E",
  "key28": "4bqwEupR9iZu4SsuSFxhLaNqpjhUUCZZhizywasDnWPpPxXoJDuLGRpTukEEFExicmvKbdaQWvdpPfyi6FnppLSq",
  "key29": "2XuPNhGXmznFHcoUfZrSXqF3iNX8GsQ9QZpoLRPxMBN2KVGEXY6vxyAgRQ7DyuoYZ6eo1v2Si3qa3sEi64HvxdTA",
  "key30": "2pJxTxXvRHLhjbzS2RpSL8DHNNhjZUwnG4Fmwmxcu7JiaxtsCUHJSXgZJFjDJUkRc8rzhM6H9cx7ESuNknFFVQv7",
  "key31": "2uZC3JyhjYHjk1Jeeg9tXemDKyVAJRwHPCC5jvMZe3wXkAFa1qZKXJ4aqaP2Fe43irDutYNZkkGRf9btRi8pqvFo",
  "key32": "5qmbRNd84HhhCwafFGB4gZXwQk5m9UTGMjQAzUC6rWMPgc6yPfxyQu8ThewnA3sUVku44KjzpkzDz1WckbWEZ9RR",
  "key33": "5Ub85EPPjxutATL4PfPWL3Dywg2PCAc4ZQHnzVRnzXPga3WHAMGVRmF9qnzvZAqLcQqVt6wx5c8byshvGQUbjGyG",
  "key34": "44a89hYpCpwBdFGKWGEyUzDqPz8Y9kbXmnFJieZcSCUQC4N145BXu2v8353YLShXtrcx1QFwwfi776fA9UK1cq1Z",
  "key35": "3f9GfWb74ae1BEzDUe95xADDHTnL63DRGGpz1J6vKotkAqUypXmizHHpGsHo6AGVQxSRzgjYgQaLPPsSwj5CBE5i",
  "key36": "9WrKy9AWAXwEwfiBVH61TWrDZgjRzc7vWGoa6VscvXatrKjJe1CJnSgFYgB612tKH6Nji8DRSN1e7BdwSoGJddx",
  "key37": "3tRtBipWMMofCDYrAoHtsseoWJ5f8DwSyPpcptXVKxYBWtHr4CAWEK8nS2favKCfB2GmvGmaU4qHR4GgxLYL38Gc",
  "key38": "3ZTqDT5fVDDe9ZWLHmoAtQT2EqMpvzwMzjsB6wSgk4mgDHTyhm44sg71UXStmnvQWyCjzjvn84RuPwBCyYF9G5p1",
  "key39": "36tXGTraG1XfRfrZ83EbsPETJY67P47g4WbhuQ9Y7QbvuYdniPgZ3SXm9e6n4RhHk51efJEWNphHrGXZWsE5n4di",
  "key40": "3rmp3YVEkxcNSwoYFu2hsQKYEATdQH9QHiNnKV3qvcXL35x6voA4BHkTtD4bVEYz6YhtvErvQqyRTvyHemsp2iV8",
  "key41": "43fyPP7RoUTHsDm4FEFZvXc98RMBNvBioJY8s8n8ddXWSFwq19eHgofgJUsU46PzAW54YWj62tVs9M4ikZHX3CSd",
  "key42": "oHtzeBgh9aXxaAt88bHvREKeyH4ueFpUp15oZ9y1GZX1xGgfXWRrd8WH7f9N2x9iXJ5JCmNEvjr2XH7yMGGhTjo",
  "key43": "4rvJSE2qpxQFUXDTxTzSSjq2YksyjLpdET1qVSsLqEYAKqp9z1ydwb2iyoVxd8iLHDcFEGagwCaUfvGWQjYNaHzb",
  "key44": "2urLLEW19HuHiL5hiyAwSWvweZkhgXzhLxJFVoumrq9jmCfSqSt6pVX9FKyHN8Ja1EB1yjPeX6nAXcFy3itJmHeQ"
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
