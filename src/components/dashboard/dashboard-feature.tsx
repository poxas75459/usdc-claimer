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
    "Ugu79cVX3RHa8ktisP7BFt97X5ZRXpUTYVpr7mGqSchqjFTvwkVGtdH9zR4e1JqRhobS1cvJgcH73aZvG98UMoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q31QmuW2C3gajCUR9L4QdakwsG7eCYoicsP2ZuUuS5CfyWiMJzKxwnRV5M2uYpMkgEwgZ1aZXif6aFHAd4bKBXM",
  "key1": "qW9Tc3kGkYF6Qti379rgnyGKNZ3tATxJrtgDeo3q5UfZm24AjT3BqHmJmJRTk7Tm9cCt9SxQhM6NFKdwCVniFFW",
  "key2": "3hf15CGVM5hcT7d68rBgVsUXmgjBdExpykGLDcGkvje7zYCT1uviG8P96FBhTqskJuCWE8NysK4rEnmu11ZgBs1o",
  "key3": "65fZnXaWAicofvv617rq34XGwA7uySAjgy3PzaQtyeDPbHj65c6iypbjGkqr51621kkQjFoD5hykSppW152MnCWM",
  "key4": "2XmXXyAMeADf7igjFq5BhLdesYnNbGvBug3cK98UMwyJPHef2GGWGycQBfxbXr6FRrfziYG6tPehajcGBVEFQsz5",
  "key5": "5eiL8okmcKSyQPMYjjr7wb1ZP1FvUho6eYbZ4PEoTFDFfNWA6znp141fCj3R3EqEMyKzukiRapdodomxsUeNxV5B",
  "key6": "35QJK9whaoUEQyoXCnv7ABPEUzjkQU5Q7HH5DQGWkj9up3dtpQFLQ1a8yX6JKLT5ErLMJTUudk1VpAD9ohtHCCJB",
  "key7": "3vMmeshyjDbeygaF63G1FwyepDjJeTboSv1tmKJepoq2iCzJJq4yEFY13baoVZLFc9nytdPxhXXusyPoCgZpLuA7",
  "key8": "3BZYtAEgbTvr7wapxtLVVwYxz7LaZN6KPMcqF5nFhJWrnp16HBXwzdXQQuDvQe5gRYMKYBeRyPWm3kzRKiZLDnKG",
  "key9": "GHYtVr2dTWKRy9faA3F3qpogkVgL1VtJeWM5skyVJkHKJRpnqkyzswziMTdTpZNxVv5EEmfRzDJAuHeSUhfwpdH",
  "key10": "2rD1kArPS9SaTKvxwNUo5JJbuaTfPSzPdyDptbjevLzvTrR7twcUZXFP3YR7UHr7HqUihEpgF9NPf1sQGMQupGmX",
  "key11": "45fEshEnXUhL6wLeDSREKrMh9zZjc7j2LP6GfdWiNnrvsWXVw65xLgndhUkrPhZykcdL3iQH2M84EHzb6curCieB",
  "key12": "g4hXVtBZYdtv98TpdixCrf4H8BxUBMykouxKDR9NG5CmcpHsmHWQW4bMo77qCC6Rwe673un7kSL2zY6QhjQ2DV3",
  "key13": "3T9YJS3TznbQxPkjrHDLrFN2P4SiguF5GxdyqgBXYQpT9dBQRDqg1NwdY8FxP89Ggp5xM5gk1dVQ6t2Tsq8Vm7hT",
  "key14": "5bHH84qkjmLjfrKDJZi64nKnpdYwaPDKQPQLPvaMWqTUj4LxMaXrJRHpfHMMXujnmCZC5k7zp1jvzXKmUNiC2qAm",
  "key15": "2vZ2fcc49LLrtbaQnvsDEDwGYDwmR8GcwL7zhuhzzBN1i6FB4szQcANe5jWxzxUcBiE2CqRqkPHY1Gwy8CtgQ3hH",
  "key16": "4RDEuzT6tfbmGxZLb9TaD9Qk9AXBNAGPr7e3DGdcAM5xdqnEY4CRZWTqGJQ2DT7u8HQWcs5DYb7vyrLRYDKjvvh4",
  "key17": "3XU9CH6XzAK8WJJHBHcUsjyzAM1SfE9m5oSgTyRwaGawqsYGHoxCbGeKh7unB34r3XPQ3ar8oLSCfbyGMyYLJqta",
  "key18": "5L9MrFAjxp92JiGmREBPipZ54MmvuEMubdCki2j2bqWgu2BN3ohmGManSLs1Gkd7JuGMbPJTrYF53qWz8zG6rTUM",
  "key19": "291hxzjWDHrcaaA88iMa6mnv7PEJ37FDUWnisGseHmTrjE9MZZquoEwz1DCrb65D3B3LHyC1c55kguZcW2sspD1k",
  "key20": "34EFURKEjejdaYgmvHqbgBoeQUthd18RnMUeoNN6xDB4J3FC4VMmvmfNxCnuiDYKWpt9XGnXcQCYMXWgf1cUapGc",
  "key21": "4DnjveBzin5KVfWPcXELpQLCK7Ag4uKisReRmRDQYUeMZKLGzPguhtWskH3H4Uh7fAa34ERNCKqNH462JTJJj3Z8",
  "key22": "2kS3gVV22uAdcuH4dj3Eg6qJEicRg1riJXeTXaVLhBYZVE25KvoKrBEgf6qSx9ZsB5JntEUg4Zh6xzYi8GJbAyRM",
  "key23": "LhLhCGsPc4hQzB9KCDphc7xPH3Gv9KgAiKP3y77pSbi6gpRvzpUK5KBBb8FMYfzri3bJC5aWHmwJn4vAFx2EtaA",
  "key24": "4LqceuVtvoW5M6s6VYtCTnXTQ8YJCdc4nFiQYJ6cMXckN47uP7YE94caLbbJwTeMzGYKi3MWjeyn58s1z3Atpv4q",
  "key25": "57UjkvNZFkAgh9gfanFSaNHtX9xCYo4ipNsKgb3Cp5wUZJXK87FBUbyfBuaz87CTSbSx9LGoKGgycDGnQUERWjhZ",
  "key26": "m5oSEHCht3ezekGo8hEKYtJwZzTzREBhE4Ny2rZytzux3B8Jfybt7EZmRjsDPYD5oiFDqvzn1v4irxqKz1PcEEF",
  "key27": "2ixS9B38YyvHo49sJAHAE19htT5Bw5oPjnpP5QrwVNFPVJF67vcumadPvVsmB9HjdcL3KG6SiwBgA4Girswwra34",
  "key28": "4kduFRtd3TfrtSrhRDcH9qrqjiMifG8bGdcQXSmMEXTnUrnr52q1KixsJ52vAbyyGY3LPKRStCdgAJfcqt4RqAyp",
  "key29": "23jS5dcVeA3mNjkXriDSgw6UpbEhCoUWKJSPMVR4139U5m1fzDripgU2CShEbpDQJCHGm4ZCSSgm9xoohMXMfaX3",
  "key30": "yFkf8xnQf4CZJNapejxqhWDrqyANWEDXs2vrqfJfGsd3xdZZBiTJhKZ2HXZmuSFkNKpZaU7DmipQt1JXdmJsGwh",
  "key31": "iYxb2JZYMToUyNRs1Pz3aNu9bHvMKnRWwh6NiVqJuCFs18jjpPJEgiMYPgQfjkJdzoGJXNY4fiTTGTbvuxcg7cQ",
  "key32": "dHqjC5Kgqiuf7mz6Rw9qJLtkSYjnWRivBewQhqTUpr2ZeWVi81KXhZSJFfJhxG7nj5H2iF5HSCPcbzhJL8JoSLg",
  "key33": "4RB479grrejq2mNSdiTegDD4ojrvzYCZDdYdtCTJTzySDod2MLtqrmSS2F2AUFx5FR7oqy3hPAYtqxBrHfq7M5JW",
  "key34": "5SDyj8ExwzWD7upkyuDwKaPDFECjMpDv2ZTPtCskkbwF9QtuuhCnVJQwisEu2LJtevzPbQJ3rM895nFRqn26oA2Y",
  "key35": "2hLoSDicbkkkBrC2zucC2czmxNCMDYs6sK4vTyYH38kYCC7woC7tu23VyuxKWyEyVdhhusfMQYfhXbrMxTgDTp5q",
  "key36": "2EL7N2R68ZeBYgQzzRwxhFXMS9D9GELqi6newuPUC7H7gnUeSFeCmsj1wQYWSfr5UTCoz5qAj7LMaYGoXry2Zz3v",
  "key37": "4g94KJK7WqUQdZKXEL2QVbrncJoMNwM3rf9kGDECSec5fSsCy41FQUuWjqb64WNtvCqd9aiMT7UzCMWW91KHW7rs",
  "key38": "3D55wntEQUGPUQHJvzmiRCXdcyHrQXPX8HccixiZZfGEjCoJNtnAEcmrc1r3ViRM5gnShpTiZzQqTmRGVEcw1TkF",
  "key39": "3RqoDBEQV7E76KnVjzJjGA1Wh8v5Gv7Q9qkvYNMeogDVSUmRuNsgVZkRbFiFFPk33nPBXY9tc6ULTupdxGXomprn"
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
