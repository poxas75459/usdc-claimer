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
    "x4CsL5K49HNeJL2UBxihLv8DkN4EEYNXcnjtLWidMdsY9KQmyLVyA6U6bkgMSZmDdMR6tL9853BXMvs8E27Jfee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iXEhfoWxte3egquZGyWqjGUjSvMSRyraYxm3xpfWB2Kdrqk8jZCW7iDLwqSWk4wiKt6AiPPioZnXAGzLT27PAyB",
  "key1": "5x7XKWcxLHTqmEnrcvadSHrwqjQQU83e9ZiETHYrngnevZjTYuD7pqtrX8GTvii4uoooFLaWVUf6YVfvveeYCNLs",
  "key2": "3kdAShW5HCUctrfoRQCgGZvVKZXE67pKdqkyHovLYfvTX6PCBDeHbaFi1SoG2k51LeVBsk56CL2MN3CpMDYTAPa8",
  "key3": "52GSp8Af7smsZnYE2yo2HNrgeZt4wJMU94gXed1xq4mxNpHZN8qfhbWjyfvSrHYPDVhriVRSKVHtS7fm7aLNqs9y",
  "key4": "5oUmj8JjTGX7jB6B33gfFi9wDRvfQig5aD29Q17KPPZqkpmZZ3zNF4smUGNFVYKQi3ehKN953tMigegNLjCp4y4u",
  "key5": "2KcgrQvT58YiTuGBo1AV7WhmfdV9K3CmfDCEFZ2CYVUzhRwpB7pN6B1M8h5TbtSdJ2EXHtPxa6JpCpj7VHhxcSTC",
  "key6": "5wrxP2M55ssM6EpFu5pYdciQ8rWjYmRRxzqHYqzRgeMRzuBXRM9YtuJzKYduRvPTEpo5XNEx9uXj3yEg7B9Ruqnz",
  "key7": "2FJXp15iLMg7GQSQFLny5J3vKmShMvXsqqNqQErGZRJ3UqJQ1GUGS6bgPzXMPfrkADuEa1iCVy7X2RwhqgKB7DuJ",
  "key8": "2wzFk2a2pTzRX9FWpLDpadWdUqUye5abSTQ2so7nDeXHzERzQB61wMuXJbwnHs2LtTeeENvvoX1rQbYPDd3Zuapy",
  "key9": "5QQSrt8KajbaW7yiKGwzvNZbZq69cSqAYL5wiqBuu4dsuozTnN8KKRgXzSY5Mh3RRGYt1FM37jqUig8es7rNrmZL",
  "key10": "vip7WLUYUmW6AstpJmU7yWJHuSDefcKgaeeMbwxrkdFjTFUERF8MH7UB8jBDLqr1CzWA7GzeM8yF226LJN2r3HX",
  "key11": "cPhjfumjSMaau9pjHQwNYa38CD8FxAo2XNuAY2LNuuEeQTyTzgSAPZiAKgsA7F1YRLxcSAPdQRizvWgEJE6Jx3B",
  "key12": "2ad3RR2k45HHqjsJyhPNPWMX6bLsfmGXNT6BAEFEvekfq1cWyY48iWKHNuLtd37CeRBdAet4Vi7q7p3pV4ogKrms",
  "key13": "4QgegLy5m2zUc9VhPMXcwUnooJuzaTuvHQkjoMvN34bruAKm3D96mzSDRnTLVgJrPZAnDhuZhNSNMhF1zzhgkhVR",
  "key14": "25UhVLVJrq9ZcvAp1Cs3Kmz5juyhUXzpQuUKafocmKYUQTo9BTGaNR7PoQxHrgmovUc6ZwAdKqDLg8U6sZCy9F2e",
  "key15": "2ZgSeBosK8FDgSvLg82AkyybX1kVj79fvYMhu3QAnwxbPAqQmXx51AC1iyNRPnaqD8dP9iWXDE8jWn1Sc3bQaN2L",
  "key16": "CMBFsQ6kYTGvgWoEFDSuXiCVCbvMQNTQGn87tjB7ZtTrixFNpZyudYxyxF8ezDxpoLvBGiprzcdg1VyLwMHWRTR",
  "key17": "4851Lk65rAjMeLQ249JMpnYYbWfdgrUNPShuXkYc7hPNRAtgceRxMxabzMfmGshvjPFyQnNpWzeeF57zxjQH411W",
  "key18": "59wCoH1Ao61TQ4ZKmNEG24nqDJasqX2JYfAxik1w9f8oGXYYKUqPAexJxwKRL1S6vo7vMs1SKNNEVhnuSVh9kQcZ",
  "key19": "2Qe2UsQEcxUfo7XRNcmnrUYvZk52VhdRQAq2voK6RT7noq9Tstha2fqCevexpCkaCHFftk5JU7jEuRLAtEgpdjxs",
  "key20": "2Rxfnaq4DSwfHE4JgsyEosuZ4DCb5KqcSWqyEUeH7nnVkYbLRMzKoip6RJeqfoxTFgPZXha36c8cAH2QscLmAHjg",
  "key21": "5fHKcRZhVvQxKFH3A6RNyDdq4eYkqr5ULZFLHjP3sdt5WBhLLNog2PYvRQQoUCBWjbVFoxDZCSjLfLXB8KUTfsPM",
  "key22": "4xRraAFqx8tfCYJdPmYqLHwfnsYgzZDMr6rWqPL4oeSgL728tcc1ykShHMUzzW62fv62hjMaej4ya3Pb7CMis2pa",
  "key23": "gmycVG9qGuSPKbsPaDZfGfAV7TavMMVqefWfX2SoAVLHijHyYbPcFw4hmc4eUD3JUAPtpELpLhA1RrkqLiFzZa7",
  "key24": "2vacVgpq6QrMF8vWabnUiHoe8Kt5ycSZ3y9sTY71KvHQXd1A8FqRBeoYcCKSkmowqdyKoSqdPSHH3tJsSVja5vU4",
  "key25": "2thhYwKNAS19nK7f9ZrbwZpySwe1hetPiCkn2824senu9uyD5NKTWj5FqdUrXgdQzF1rbB5YPrKgD6JxbPdLrxyt",
  "key26": "5XjXBUgxy2brng3wzx2iZZ7PZrwtwuU2HNfkJ4WskuVZUzpeo69aP9UUEUMorh5j56PLoZzQnKUFfjNDVbYP4XNs",
  "key27": "33DXoPwPPBV5573op5WhroGpbPRCFAXoXQL3qPLCuvYLBoGqtZ3wniCfxtaEpboG9z1Evvu2U2sh1LDdf9MZudPG",
  "key28": "4UHrkVSszBC5Somh2iryYtfW94YoXtBeutrxqDByBTUq5GRakVeSVCnWWZtMuKQ62dSDv9UKmDXGeUdci3CKXZJb",
  "key29": "5rN1ziKR5Fnp281kD3AWr1cnzuypYsSKVasGs3dypN1hd3UP3Uak61W6vRs3SWgP2ebFGrfySBzCUTGJCBsLvzwY",
  "key30": "4jZybAyBJL6s3FdfuacGwmnz7FyDmt9ncTVwMpwRnWU4eaRCwtqEUsp1S9maj27pSZH8Vp5iFzVSLztFK7nTSred",
  "key31": "32GDRm5rCrWou7Ky2MWVUdzZjpsY4ob42Cp7SpPatuSuS5ixBgFWhJCYeqAuRUWKYKwZBP4zavm9tcvtbEmtutNi",
  "key32": "2RaR18VBWSj6zzbrJWprUChqiG4PTkdwN1fbV1A5bbf63ESCmXutQL3uid3ahhXZS8PWbLFJ8NmTQS8kztFs9NT8",
  "key33": "2ujrKHjndrF22UiZmRMtaSYqvstzctJziPpYuKynFFWFqC4LHgGpS3FRFMgUV9AxSn1Bzf5EaAyXHYoKKYjnJEYa",
  "key34": "veFc1YPabw3jXCBk1cecAQ8E6WHhLiFLF3tWDFTnLjZrP3wSoWH1xEdANfFuA4C4o9R7NVQ65EogSA3p7bUqqeX",
  "key35": "57eisMCKhvgDzix6tQ2PZV2J67GSdQZEKC6wocd7N8diAgtRoq8TQ9vCy41W39mkA7SEXA4U82LGU44gKLgh1NGB",
  "key36": "65p22VYtuyBSr1zctrRU9jLPviBVwdG7ivxVVbWp9FVxqaRQyqt9XntsiaszVVTpTessWrjiLPgvZYbwBXE77KAE",
  "key37": "2pAQE6miAN1sWzLDc7nFe9K8QUpLLDcU1W97nsGbi59K51V3w5nDkLzvvoBE2d3XfLRPSHJtxjCSvHGGj8ezokj5",
  "key38": "4D3n8BvQkE2J4CDPAav5vKngNkbyhQDMG2m1o1g5CAa2vKEvEC1FbdrkRaGkXFry3A1dxPebhRWeihhnkdmQqPiJ",
  "key39": "4iCXWhsJbPqHi5e2gQSvM5wmgFcUNRm2rxDSXCLXz5r8bMSNL6nSv8TNXnGxSKMSnLueLwts5fHpJEthHzGXRnvd",
  "key40": "5RBCLKNPqYGwPAqAHvorQFuRD7uENoR5TM1G5agP82bQdvGHtnG3KkQt39qaDrzTQj585Zf962djXNwPfmYQxNo1",
  "key41": "5HxvMVPPi1NKr5178YQXzUNvLYNrYXQHKesMu7n3T9RrnrNU8qTonoZ15qEkUGfDopcYBPhwEsZ6hKd5rZXYqQb8",
  "key42": "2FfgPZDWwnMqjAYhfyB5D7mLu51HnQ8DC9zAMxExMYi16Bn6p3b5oQYDJWU5uxL2qG63Aij8yArbRseqTp3oHz2t",
  "key43": "eZB6XqMuxBHRjsadG9ZKdYPqdfGSCsuod6TqtzQPvC7Z5MxQo2C1u4j3d7XixypTArcULrUmevHppvpi4SuDpe3",
  "key44": "25hknk9fT1uZUkeDTzkvSkQ5CdsFHAJHL5f6idzAGNj5AVVZ2wXikxrtA9AYySNm51qh2L5hVQHUodmE6n6Mf9X4"
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
