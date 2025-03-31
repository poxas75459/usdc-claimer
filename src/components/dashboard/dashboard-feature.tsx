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
    "2wAVsiVu6vbhndyPuFRUbrQd4soAaK9NNUC6JTwUk3aWyF1ns8DkArMifcsoFeXVHVmkTh1WayfMqnb8pWos7x78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PaJSEwB8yKdbUsJEZjw8tpzqz9jUELYaLkZRCN8U8WvfRZmvFGDyN8WXjB1GjsHZF6YsbrZHDRKeRyJfQCzdHJU",
  "key1": "4UGTxLA6Mrtsc1zi1FH13uKsqABah9eznGYhJsoxApFGFjmXkMWdU1azdTp56PK7V2V1Fnhe1TBLKEm9Q6pdZrmx",
  "key2": "oj98VWTb2R3PkFQfCuwgXNpezDnnUYwRTNKjLwH7KWL3Dv9RezpL2TRu1Fbu11mM7WfHy1uDjXchUDJoNcYWVn3",
  "key3": "52Kzr6McN6tK1BZMCBN7seQ31HgebQBRrjg9tiC3SLA66TR2MJy898goyXvfXRsxk3Gcp3A4JcdkH69pAmsa7gq9",
  "key4": "28Hc5d6oynvRiY3ywVcgbWvKSQTnhmbBibgPz1GHYGsUCDxk5GZoGm5HuhZKD2XkGtXcjS6iVJXP8MjMCERCoDS9",
  "key5": "2RdjaaPmy4s4iXFsZvvJXJiBRTyEfHA2LyNQjaTaQ397mkGSV1xbSisa55rNksiCeQsYkuhxCKSF1dTFnaTU1QBa",
  "key6": "2awAidx9Hs5s77i8XCrnAjCPyC3qVDQZPrzLnpZH2gR5HAmxUQ3kWXEaP5CAbA7nsQvZY1b1f9SDiDpXrbVLhPGk",
  "key7": "4ZiLuN6ZQtzKpt2f5Jh2QAi9FpeVqrDVH42dwuFUHHPm8UbvGrYGGsgG956LTvwNLbsWxAvHcmQfHKAPd7Pdwttt",
  "key8": "4nFqwaRiJdVZat1TnQTTTpQFtStXcJZNwrDyE5aKYe4A9pFdtAdqyHJ3UkdMzV4mqzVqfDiJQQmmehMk9osgdfWW",
  "key9": "38HYYNkTuXFsJ8vCc7WhRvEZZrNULUUn7p8s4sun4CFGBFJf79WWsFakVdQaZfbsDoA74FWTAMktRiaEJiLgRogp",
  "key10": "5GKUdyhNC7H2SuyyTkLKoh9eAUXuDpCeB5aTt94WKi4abaPZoGCQZrpQG5Uiqxh3wmoDA2LRnVRCUd5edYLrittx",
  "key11": "4ZwXVsdNS1zqjHE4hu6AH7gYrvLq9BeP9UfWEdQZ5xCy8YoK2iMBfnx15b5VBezF2RhiFPRQNrPDiLmBkynvLS1q",
  "key12": "oGtKyAVu8K2hSPpPMDGkrFUKxtC7oBCsfc72m4ZUQ97WFDPEWknYSKDh5R4KtA6Jhdjmz7m5G5suTd1EBN7AQwP",
  "key13": "2vKHURBc6dAwz7cpxEA6j3gUR1fGCu22ZLUXW8fFCpxJao5QvByWLUZbyYoWQC7ejKqvGxB2VFVh1QPZXAC2cVid",
  "key14": "2UeQDzaQYdr4KccuNzfDgohVyuG83EnLtnVjMwpkJYWk8TLbbiXv7qHUc9pTmWrKWQRZazX9yfe8tNrUSbRb7wdM",
  "key15": "5iS23B9ShvWUP3wqiiG1tF9GbdpiqkbM2VrFW3TKNuDpaAteiCH2f7eW41k2KRyUtpBeWG9EgrLywcRX2NXCUaSU",
  "key16": "2EMsEVAMZxvWm3QwH4fG9bZDmb11aFJhhTxXDAirdZTSfkKpdbkvC6vzywNPPDqqSfXabZF1SsHKdhn1Gywc8AYy",
  "key17": "4VLBoFx8qbchWxHScMyPCZvwV4MF3pABF6QSL5ATRRfX3dmcVppedAxRi61yXsmnYHrvkGyX4JkmkVhFs4ExHJa5",
  "key18": "zFpipyMES22bjvAUwMF6Fb3RSu1KftLJcDQZCWBXTx6ouqLrjQQTgvqqxVw1Y8W1xARCLAUMDjLs3sLEzeZwYeg",
  "key19": "ZuuZMjGJqg7EWzpgekdFRC2fd6GVvKEbP5uViuEJRSHzc9QEAruCPmXyGhFFMko548mMGeuxb65F4VTv6T8LH56",
  "key20": "4seDN9sgSJC2U36DZpJZsF49pmZDaMFBMDBgT12GgY4DnzHJee4k1bzTPf4cYjnebNR8fPdYoGU5BZ9Uko975GHh",
  "key21": "2xRDPoSiecdsN4jpJeB2DEAzJes53kXnbQ7oeA8Gor6je94LS9n6LPtbzVZB2HGkqFsw3JWRLN3m8VCK9kDaFe8r",
  "key22": "2ok31fTq6vh5Zzun3BMnnaHgcW6mhmHWYzagwcsWxDXmaPfzp649nihCffAZxSPGgpEqwCfjdPi21ehUQiC8G5Bk",
  "key23": "3ZHSuCeRF6iuGcewqNarK9FRXA55VxwfwkQ3TBuRJmtiywrhug85iSDg5jdW3QbUhUrdRRmnsWSeKNJaAjUnK7ny",
  "key24": "4v4ww748YuuGpHZ5cY36XjrUo3X8CPSn7CxfHYkoo1SjTb73JwifpHcLVSGR4TESzW8oDXcuqwyyMuGLk2ex8hyE",
  "key25": "4syU9d675kwtAEV5LimTm3hRs4HiDitC9juQD4w2VKBzL9eWPPLA3MCePYUjWXsUsQpQoyBZyHvF51XUgESgkwsD",
  "key26": "668uBd4iKmGT6ieZieqPrbXKxGr5NdKtek14vvejmLKEuYF1ZFKEc8cYS5gnrqLwsCVZhy19Ra9nCNnmncgMrETt",
  "key27": "5XS5zGwYYGNoHCxG56SUR83gxmUKdeeAWLk2VKCPsp8zzkpCk2srKhF6ZqpJW9go5kWaWVPhvig6bi6FVptyeGRZ",
  "key28": "5T2otyWy7pEfi6KntJasTHJJxabbQE7o7z7XwvSg7tNzSPvPrkLxYiqdW8ZcHQNDbpsTRztVSmbGvBHGrbuScweN",
  "key29": "3gu6pf2Xm7EJMhDtaQB2pUyCJzHJj7T2RawaDhMPoRWgQtCFGbMfL2idjgv3mnyaWLGKQUb8BydG9ajjoRFNCHrJ",
  "key30": "3Yw8PRf8kuvwoybU1ZXXfFktjmqaVdigHFg2kCtxindN8RLkb4j3VH7WJ7TdjxthF6Z2rWP42d6AXGQ46qxUxog2",
  "key31": "Nim9AhmRVycPsB8dkdgPcUB4xEunuoJcD6Mf66r5x3X6woeZdsX4Ba79xWFmoc6Kyrt7hsAvBsNYh4dfqb26dQA",
  "key32": "3BSDdqNfom42veBcWpisaT7tA7xWvZcSkDmBNhyU2a47CX5a4br9sPhYGybGoX64i6hVSfX8C9tbLNj91stT9XD6",
  "key33": "2mRu9HZDhtCNMMTZZhKvudRFcNKkbNDDtYZsgmM9KhwBfFmSmc8KEQRoYaZ3kE2aAf8K5fTA22oXj2wZ3EqqXrH8",
  "key34": "4euq764jrfKeaM79Ly7xLcHhabmhi5fPWjQFpYW8qNQYoNKE6XyFyeA7DCZ2cUd385nimhq53aERREmviEypijuj",
  "key35": "aGHHsz2kzSFoPZ3Q9bLkoSMA2NsBeonWNgS5rjLeZW4onj3vbbHvMZAoDeVT46XDu6fN1umvwmeK4zRu6EbwpmH",
  "key36": "c8VwJVi3gWGAzTTvhimU7h75dt2xHkWu1x8Zg7rLdYkfHijaNbwmNwBvk2XrN4muAz2Ln1WqTEHKhMqfdMRBqya",
  "key37": "45KTLFKzQvyDWZnedQF46v3zHFZoaTKxL5vx49su9ksaturJoKTHhHkEQHqcsBKZK9HQtyn4kWSTcVggkGjs3Vod",
  "key38": "PVsUo2iYk96qwvcmd38zZ9JMPaa8rccD7jzu8cTYvup75g5EMEPQzuiCUh5si2wDnpapxzeQ2k1jVTKLocxPSLE",
  "key39": "5dgdq24oRrkQkCSUkyX3XMhiN684Lkw8JVLTv5cRZfsQpYEnwCFNFNgYQAc28LK1NXvzKRx5rAnuqCNafhPY8BEM"
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
