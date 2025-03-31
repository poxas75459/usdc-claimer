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
    "4aWSLZ2USu93Zv5hZZthUVDsWtmDNsXfRVWAAbTJzSopHcMS7YVLtL88MKcVkgvjvp4aEnPUZxZ4pWxB8Gtuszpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HdCobyJCwdZCP5HAVD15oek4HXrNbCnDc5Tkk2DnqXdWtTK2kGKGA1d1UJeo3D8KRurY4H5psjVSSs6km45EiK6",
  "key1": "UNjrtx4a7WGkNr9nuURJLdTX3upaxqVtwFLQ9sC1ZSeZY2KFo558nJqPF25wBCUnYmo5TQ4didBH1wJ9dEUoWrY",
  "key2": "4zxutGvMaevQzVjmGFqRgxaJ6fZLqeNpzEGdNqRerXxvUR2ivCbJtnQ4u3ZdFAEpXBG13vasEBzoiqB7DgLspi5D",
  "key3": "4PepYJ6zyh6jNtsYmXtjSBnLv9d2qBw3L4n8vyQeadmgsYJz9VbwhG6Dq4bVahYnEqcPgVSG89PT4fnJrLGTkArn",
  "key4": "2F76EfHhpV4npM4QJzyMwpnjiyRrbt6uWwLMNwTMCK6xAhxwA7Jz2hetbh97LxNPkGZVS1Er5wzwSAAQT8ttAP49",
  "key5": "2N3sHP8eDu3zkRRT5tzZymPk8rQ3YB6mVHXoTrG9BpUkEPzMgWVvbPTs5QRCGNcSZN8k8Xoob6ybkWogoCnUAmUY",
  "key6": "32pHjYFyYiDPavadArxfDn7ME8BS7HyHvf5jm6azCcAf44rwB1uoaQ3iHHEDAEMF789atu6CcAkgCwjEELX8wfbY",
  "key7": "36ku38ivDTrDqggWLQNQcymmCrfhUZ6cLuzbhudDqJKnYjteNRf6z6WHjbugH8EoFSLWBu5qhDQbRrccv3uyAAtm",
  "key8": "3tAr457haNNPLuuoNTZ8zJfR4adGVM755hJXMspaqeGNGJCib21u7swdR5r4zUihcxh7FejgHU3BX42pijKjXDYz",
  "key9": "y4vrr9p9opf5LUwHEoBUM1QnMc5hd1X73KVqwfqGSf5McGBamqf9rTHuEZhGcRvooHpeFHNE1pXzZhmBeQNyKp5",
  "key10": "5Cxq8hdUioBc6Jzb6Mf2SCqLt82hMaGs5WQSUg5sJUGz9GhceCVoGRs7FLEDhDZ2HzWaMjbjbxJAagJHGYb5JGMg",
  "key11": "bQxnEEXKbYG4EeUtcMwBBccDRhGZdQaZkbp7Tf1DFGkdcp97yVjeq47TBBKfgD3FbX6GMXPxHA3cKXrTLEVU3Kh",
  "key12": "gq9CQZjwcWSuaH9JhjY2ty1FtxfyGDpBA1C5ACzzY73Zx4PgDD9e2XHcbCpNqPUaGExwbnHnYiEVc7vg69qEP76",
  "key13": "FxRaC31xYfW6FSAhD1VNdpUX4YnB252jPutVcXgwoCPhCHCZixZhNfJYSuvEBxhcmh2nGCAQ5pr9otq5SNenDfk",
  "key14": "638ddE31CEFwzcekLnRuiBZDWybPh6QbNSDH8dzKv8JSH8wDDRQLuzp3Mac8crstyYJbqoZ1n26sGdsFfQfeMSPH",
  "key15": "5E73bidPceYJjzaNPrTucNuRaFXqUgSf4Kove4Y7RR3Jy47ciZJGVY6MyKXT3nJPKi4mmY7Zg6EuKimC7JBvjcYa",
  "key16": "4qQ41xyDSYGXxKFohHo8fha8CD55DsAMA8ZXAsBvvUHkoYesZ33uoGr92526hnLTz9uqEghy5KyGABeeHB7iL1no",
  "key17": "2nSvWLtyWR4RuCqVb6Pzbrhh7GaNUp8TgG5rcfswiYoeTnLeP7bFKqSEZHg2uys54SvBi5a6FF6BJdosHxJLRSpB",
  "key18": "5zMLx4YsSHT1cK9XZfnJVzeFWHZza9ZaoawbLwWSdHeJC5GmmXcAyHS8Rzfxdhoji7DQV9mN7MZvX3VGka5ufg8Z",
  "key19": "24LP3MeCAocQVRjauV1KcSSYHRYNbzHXEo4imvQJJAdkS14gDAeCCvmCb1SJPCrwFo6PAFMDGnh1H9GUZV3T5svo",
  "key20": "2zw2hDrifMKCzizSZmQ6GGEoo4UzkkRjWn7qve5McF8wcsMNWbw5CjR4LtfL1wxRirchYaXiWnAziQEZBYAWexie",
  "key21": "5QhbZ6SXSXLnZcKpNxTWCBfhNDUgDYGWtPmGmwG2kVHpJiJUFU7SMyeCEXC6dL4MLTZtGwHAKRQzkVCrhm53DWs6",
  "key22": "2Dg192vyiGnmyeQj5NTqutoRQJ3NDHHNvj49nfAkdmUdm2xAz2NSKGur79CCziiKqCMvFqG18Emu6U7Gc2PcszAm",
  "key23": "2TXtWbJqTjdSkv5Je5CG6g4om2XqM7pbwDcz7pTmv9eatrWiiLKn2pvEu5eHNHAHBbGGw5PeLCSto8ruyXQ9WdmF",
  "key24": "2R3LCJih39wCWiYhdAhRdLUZJwaUiaCNiHfKHCbWc619adtRzz1KpuYQW3kbvqHRGE9LKgNsfu6ijNvDfXPEJdxB",
  "key25": "vFW4Yxqg6JazU4rAVfLYQnYsLjyuHm25P27tmte64fWQ8ZLPL2owZTkLjE72hREnKZ7caedXrotQPFZ9Fhha2zE",
  "key26": "5AWLcbZ679DkYbxDXPqFPA9K9kSujAjdqjrLrHnuD14Hj68WbWF6JbpSCyvWuuCWrg713fZFs5trreutEhqyTdZf",
  "key27": "2GAQiFCgJQ5Lp1YzFWVPSvvMXWA1NDf5FEdxVdr8k6EjmwkkXWwnFWVHo8L5QkUq7aJAAbb7K2SXXgdGLhyJcG28",
  "key28": "4jyRVhuRdgDGutNfAFEx5skZys5zfyccuWiTPb3jQ9k1JP7MgEXDMVrtYRLyU8MdohUrEjVkY1uT5tGULh2564zU",
  "key29": "47ZCNR7QWtK2ETxpPa5GXKwwfY25jdHDaG9pef4yzDLRRqNSFMWky1QUuN5a531aHKMjMRhSovvXH56ndACsyYRv",
  "key30": "2iS2WbdjiRUWedBoq2dUXtBheHNixXoLxstXT1jXxuFmxsRJb42HhuirxiRHJJsA38e19nTL2XVfX1aFfNzhAejf",
  "key31": "3WZoA28ypPkvqzrvFozrV24YaPxb8c2dw8NyHq1sUzfKp2aA3g1KuL3PFJSTtEm42fVQRZR3pnvUn9MzcWciAws7",
  "key32": "2sT6GcErzfoBd6oymLXnhF88aZgpZybSyn2ppjujVCcfbxFeyoffSgEJygXQQMDHi6BBrZ21LP7z8b41iCwL89y3",
  "key33": "5Frfcvue54DnhRByGcY5KVxYBHjagAiw2udFbV3S7ewMQf7Bi3xBd7Z3TJLxUHT1WMM4hf7EissfAQx12F3ASTX7",
  "key34": "5Fo1nF35V6Z2cua8wiKjtqpgrfC3qUcq8VQ9Zdm6zuffyiXn7iwPT25fXhAL2j7yPNWzzUnXvjhHoqVHpjV9tnCW",
  "key35": "3QygWtEe5yjZMoK6qGi3SAHbmZsmCuQyxiyxLKcwKnXcpeqNqsUAuU67tJGjE4Lo4binGTr6A3NueBSbqb4SkY96",
  "key36": "22j1bWzNXPa5uJU7xUUwmak2iWT4VtByYjNZ44Za5nVQHs53Jow4GDGk72EEFzouKbJJkEU79MWPGJ4pVDKvqMUb",
  "key37": "2BbMCx5JVf3B9YEBY83xt9kLvvSAJEgGsj6pB4yu5zpyMFE6cc8MEkXoCs7W3RfP7ExaqeoxM8RwC9VNLqMNcibB",
  "key38": "4BCCGCw5LqPFtX1wRbdk3G4mt7LLi5AnCeNurWDpAqZ5SYoC9qv4o8A2wDsUuh7ojyzjZHdPuAA7Ytn4g6XfGVXK",
  "key39": "4RNJp5V4GW7To9ACwgBHhHtaohgVvzWTbNQobUzP62ACkaXfb15c4mWEHuzFLxPGsoB4Q4E6aq3T4gPNkMuuqnso",
  "key40": "32WDhsTyb5QMizERCusrjqq6xGsPQp9tc6QTAReWrs5KKSW7CzpxikAkJZKUMN1EERr2HrCvyVpJgGsC9TMRCojZ",
  "key41": "42zcN8Q6HX6cx7YTDL849ZZijAMny4iDq7aGLanHxbxgqyez7Fhedro2mq39t9tnqu4dS2tRT92TmSokC1G4N7hx",
  "key42": "23siKngVSW4Y8qhhF6ZcMsXbwfLZbM53iiGLqwnFpzi3nqrBJtxokFihxnWbEK2ywGS7wzh8ixcxHutyga79WdoR",
  "key43": "nQbxmHzCULD2dbQ8Fyzi2q76xaZqsy9FH3eYtScdbVDEDsq1FYCKvWYQSYe6JdbW5Y9Rs9SajHMXQ7Y2uzx2w9v",
  "key44": "3zScadxDNXwxMNngJ4VsdtwGPEK4egxfk3QQV73AEKC8o8ZEL9JhoUCEeMSAAv6fbyC6M28zmNKbWj69ZrSZu4h5"
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
