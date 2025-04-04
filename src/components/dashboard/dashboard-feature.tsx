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
    "5wAVQavFYEDMe73HpY4g1y3dZkitjEvhaYA9PLp3594o4A5sfgMdHhG6psNmCCqADHPXdzQyEcafEWydChALksH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PmSD3PHzZWNphPu3b3bqVuoEkFD9uadEGxoygKA5iCEC8actgivmVWJQM7S5VQgZPJY1z2K89GF5kE2z1LAje3u",
  "key1": "5QfSGaEdwBB7gAMiE8wrGjNgxZgERsWBqQkZuPzD5oj5CYo7V3xWLWtrz9jyLbG1hdFSmco9LYcUtSDmhDxPsPTv",
  "key2": "5zr4DniKWJ7fyBLRi5jDEnY3o2DXBKDLZufYy3fLp23c3cSu19Fapu1KPZ7arXtTXbvxMpjTf3awdq5fDwxKSVa6",
  "key3": "3RwTXbkehnfSxewUX9cHi5YuuAhQix348Zfn152ki1n8Pv9uQw86T6V2KrNN2gRH7d7TFE4ZLfJyJ3P3jmUyNd5p",
  "key4": "4PF3mjnp99yuh3yGc5azuhdvzBhNVP6pqDgm3naKBwLuVKUgo4JsPhXU7Q2jysPA5yoZSZprBUa55mPvjw7wuGYU",
  "key5": "46ACRQb1ahsHKDouU6oXxf8fjVLhHVCQNsa4ebnCM7U8rSgGZ8D8ze6MPqxo45pZDQb1hhyECzCAtqRecGo2WsZC",
  "key6": "44MLqDvr7P7zhUGbk2rRabMjV28DAc47PbXQiJCMMYaDvZNAFTWUJyLLoDjS3yUWK6AKQP2vbigeZVgse82PMwqn",
  "key7": "5nUnMuVBiPXxXJyPq4vQbHjTHYrh1625HD1QyWEejdbGg7vcp6KgBNffKbQJUZNQkEpVkCnXDVcExqjL4moTYK5H",
  "key8": "2zbiwE97TJvsdTgA4XMYwryebiLzg132Ea8MZbCFm9Z752ukD6BpD4WQ3ZLkem5KpncA81Kb8JQNLSncBoq9cphQ",
  "key9": "59qWzERoBzQrAqmwLGGttrymRWJdb9pz9ky9eJ5bWVfrwTXuDXX9v9gQKPK5TDRwGnRpBieyK6TShDkpELj6XaWw",
  "key10": "2eaAqUHuA1qLSyPbySrpSHB41d3PCi4NEEXgLCLv37mUqqTkuCnK52HqVspr7EzNn7CyLNQsyd6fzaPdfZYLZYH3",
  "key11": "3b6MkyjuqU8nRMMskNbQD9Wz4wfxXypAwj9Wwv6XFVN8yxZarfQ347HMEnU24fATbENpVqcB1k3PUmNrMhhWVF1A",
  "key12": "463VXRPyKyyZsT8QjpoZGoBrv1ZFjAoWvY4W2nj7oWFG262FLgZBdYaLexKwiG8uYmLzssNgRDcNvVzc6ppGsCZs",
  "key13": "4jdLj9kTEJCp233PiTv2Ni2dz9QL3dw9fmg2EAHJfXRUTqQJARVbYpinMB3VemmNtdqFLEHwtHmBWYZC8vYoYacr",
  "key14": "3q9duZftvn1kM3VepDEcQxxXaZ2fmEPeP2WB6dXWr4pT2NPVPYxBZ7gETAtYnMmweqVvGqbimQ8JScxGuSnoj93E",
  "key15": "4XrtjspmoZXV81LMJYy5wuMP8gDoQ91AByUiLTtFycRnFBPJWd15x3jtqS8pvaXC4tbD6FSABXSVTwKHWUkoWgR5",
  "key16": "tiachVe5ET8ms4AsfYpjFkqD9y9Lsn4DGxBDZ63YQ2p8BKnkMDVvkBs8QECCgJLgign7XiX5noVovffyzNVut2E",
  "key17": "42Xnj9mkTtjBoqthTmmEQUyPNyZgdBUenQQV7wn5yLC4wkWLximDRFyTtbodhhajAZbrfzHoCMDTxmb2X86kV3sY",
  "key18": "5WDDqiSdqvqzYkWskKwgqGVzieDGaY52rbSPySm7mTr6t8ugjMMufwCDAmAEQF2hw38cDz4DgZe4Mg9iaVJpFZmZ",
  "key19": "3QAFjMdW3GprJKzEAZevxrhXqKVRfVwptZjyD6ityQxdBBCmVhAt1Zoh1fVdrad9Kpajrb5KeQzp1x8NbsK6M4Ck",
  "key20": "v3AtkopcFCYyzPQBnuhdufPvvzG14RPbjtmPHr61r3LL45J9Yn5i69WFs4mspPxqHNzkYKo9wvUyMrisfzYL1W9",
  "key21": "4Y66DyXiitscH71tkKuDar6kyQPhkY7gShJmDq9E78nL4XvFf2KuW1fRewyDoD5UvZRQZEV6VHvkLfwPbyvRcewY",
  "key22": "3mpntyStaBY8RJ8vP2RbHzWZhmVwCn4csQeHzdZqcwbM1cUmUN2SWmVSJ9udqXo8SD1RjwHeWUTbJBVsF5cEGnQs",
  "key23": "29zQjzrEedB3zhsfdQqqygcR5WMSKqh7nY23ZGXFsURoXmuxxL7sXUfssHwChZvwAEGUbv5WYt7c1WTncv6ZrJro",
  "key24": "2e5ut3Wykey8Lx6oUHRwjrkik4Kcs6vBAYL5ZW6jVWxC7edW3XD1TwXm7dQ9y4EuoifHqJTyc3RkTr3EaeYxZruA",
  "key25": "2nQ1UwaRR8hi8639WLJEZMauAKFfAo3MEs67YrmG16oB8kf3btn1y6a6pyxWAUwEJF4dKNt11sf79nqCL8Zk6RNb",
  "key26": "2XwbQDy9E9Ueb1hicPqJX6NMq4fbkYnn9niGc4GQSb5AuemNDtAtW6ezCJwV6zYWugA6xXPSgJeiHKjM16dTD6DE",
  "key27": "4zntHGDmiF8TpCq7jUMbnmT94KPekYHygpwsoJkXDyDDP6U3CjrBHqTWdr2nm49LuhrXHKZURCxsDPAGDL3ugFXD",
  "key28": "5Xr92GdQG94HHpk8LyuxYMhc62yv9Rccudj2cZMQ3cuY3HQvbef15WQmgRxPrf3gKuq2jkpRytgfHadon4BuA1ny",
  "key29": "5viabyorLY8stwZsfTFCaGE7JpiAeErH5rsgvgbUtejMP2CWarrinUNhbah8oPWGATPAD99D3YS9cWTumTZg6YQn",
  "key30": "3CwS7piDzmBfKWJ4vA7MwTqdJoQPdWL39eidTMWkUJSX4nyrvcb2UJ4ifFmxv7cM3c4ch2d6iYW6512kAJ4eioFf",
  "key31": "2e21gcfm95y1em845pKUFZ8VcnUKeyp7ijgWannLnkaBcbWpBNXTSvKAmWTwxiYFcwEcEBkU6yEFnjQEvmiaqVuu",
  "key32": "2aBQ3MQjWNpZiTQshXjPeVWFc3neyyQzwp3ay9GsURty2qsxq6NWnY1nn7w4EmMERPpukaX4hrnYSNxEnKWAGMgT",
  "key33": "4rCMoCEX4gQWMCp7q5RyQDKUw3TDzvYYf89SQbNoPcz842EUp4ewD3aPpkfQW3UK6EFAaoCPHPzbGC4yG6toUtCW",
  "key34": "WX3BoybhReKpGE2vF4KjaLR6PgFHLfpip8kEBFM9KXq7w6Zp1ZiLkcQmeLuoaBP828HCTysoCoQHM6wGH77kSBb",
  "key35": "5zZ24D2Svrx99Pe9M7cmwzK93XU111RxSS1KE6hfdPCRb7jo78UE8RSe6h1QUyupNjum5BpY3w9dWmfoEnYh9n1R",
  "key36": "2ifZ6GAcE2VqbpAvVFJHP4WMxtYqeVCCedknYPothdgpB4x2JkMShSK4Q5fegs3FfULGfLvHdJaPRdbuLCHkA2HV",
  "key37": "2dGfWSdPe35fbLm932tNDQfd2L4Eg6vWzJoZkoFCeHidHRssXpTLm2RGt7PvLANJZhcSxGcUcD67tzosFjcKMqFu",
  "key38": "4UPVyD9NPnZaRpAExUYBcbHM718Yqsz5oZoEAbAdzBx3emYciQK3GGMMSBhbSqEsasskbr7X7javR9EkaPjekZHh",
  "key39": "3sogadHdUgs4ieaDZLo6N94DpKBjpsNksHzhsyieiJNwe1AyjTzcmucT74PGKqZQ5ENNh3123YUFpp8RPB2csAJy",
  "key40": "2qcXdNAv7KygMpTJf5gy7PDiRdbsw6kiGJpbgysjwN9arMuNBadk34Ls7Nfgdc1EKNPofrFMRKy3fbM2u1D4Ri8K",
  "key41": "LRTQEupR13HXooPBZeNVayV8JJ5QBUdpKd54XHobUfEP9U31feUWp1j4MV8c3jesQMhQmXeNYMW8bcRuy7zgLBC",
  "key42": "3Y1UQeDoHdzCr6hGyb6FwQnzEW4dwY9eBcxQtcK1ZPDb7LFqYrcUVKViW1wnZRv1cbogirVVdyBPuMt355rMQcGQ",
  "key43": "4UkP3nPgHD7QXRceqMPYNx7qv2pzoxBncVfNqJqAhqwnXA3XRtKXchRA9Tdhpi1NM4riwSzANn1BqUWcQtTT8uuf",
  "key44": "3r1GLXuyibcSPQSgag1FFuRiqK7UChzngFkX9BAw8YhLGaQDVxLjCp8woa8HQcnDZrw4F5qvRgLHBBfe95fGi6kx",
  "key45": "4BadiWwRWmawVL4qfdrM2SezjDBmszjH8PwoWjX3bjzWcPyf84XF9FqNiH6vScAYL2eMtKv3PUEfPCfukHjyy7fx",
  "key46": "uwNK3snUWmeJJdBr5jt2MWcuQjqA3sUy9NCNsruLLy7gCKJ9kPHyuNWNPzPACiaTrWtPr4fb2mDdpgo1DUjpYv3",
  "key47": "2cAYPBthGmVzg3tQGeD35oNKVe3tJzFkyp7BDEexeD4NFDq5YMEsGBrh9vK2TG2pAU7DiVyrRiniNQu2xQpQ4WSp"
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
