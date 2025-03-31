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
    "BfL3iDKiaEkQgqhNNmZTMf6VLFjLT4Aqp7KKYaR6VsqyBNXApBFKa9uNPYx1NRBGu6fnqWYXp6ZFYiv2n86fsVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VJmHUV9axVpPrd7T6eAFicNrLaBPtFAJb3fMFiZqTfdUPRzuUWZhsbHXUU8px1zGMxLMNV8yvwgfiCv9yCVnu8z",
  "key1": "3YGmWg2B6zzp3rks7UqhNabSRRfwVcniyU3xKdD2VNcXZPT82Mb16Dw4Lz5bWW1c2JSJb6LLvSXgrHfY8Zb5cCR8",
  "key2": "2bibxUJEAqLxSWFVDRQMJmfx62EapHoAMVQaU16okFfp66jgJ7LtmEjeNSuNrDW3ZwMP5AW9eQjeLcYk1rGVG8Pq",
  "key3": "4uNUdheCyFHL9vdhmKMXQfCRbaunAyr561JvaKfmEdUgxoLgYwCHbXQy4Z4vvUmFbsup9tuFDDi5EXR2ZUFfDi5p",
  "key4": "63oXXTXsi4DFeAzGnwiHjztPTRkbXVmB2xekYekDoFvDXySugGJ5mrCcsk8zk5rBDkoBeDquv859iLCY51NR4CZA",
  "key5": "4HWH79c3YrZdA5EtqNQ79UZpjaV7u17YzE8N3xFtHgAJLZRMxRvLGFxFoCmBBxddNJQ1WugzFdvbeGdR7v2Nvtaa",
  "key6": "3rtCuk9C7h8oAM4C4vfBvfxFmbjvg4qRF9tVaDjoEvS1VMHMr5onuXR6hfjGKg98zD7nvKKx8ZQfonFH3oXdXh8E",
  "key7": "ghkLz3WBWvgpDB9hbqHVX2pFP15Fh6Mfc71Kkd7VLcctA6NUUrv9BFnVKF2rsxRudT5VVcon19638dtat5KsVnH",
  "key8": "2kx4hyUv7svGaveXHJxtteTsaYbHmpddeCPv3NmBMg9BARcpeQKG4DY21wEW93N1yf7QNt5GNc1k24Xn8XG2q69j",
  "key9": "3o2oimGshDgKGyMhgyq2azwoJQk3Hq6fPbWCAoLpkgG8LZqZ8SySZ9mHUdXjWjQpXvJJ9EQQoVfjd9V776dAZ5J7",
  "key10": "sy6SySTNzuesU8AaXZ3sTM4QpSJmuQ9Kkycz5nQqQgNTfjBHeFofKgLCG5mSDnxc1TgKyibdzoGxawZJs14rrNW",
  "key11": "486mGA8A4bXVikd3mDHB3hF1bCezmUG4FFM3jb8SxnsTKaNGMFQbfix12uvG6E6S2pjH6gtFeUZkLL6dhnihTaKS",
  "key12": "3awM1hPCPVeUPvbe6XeEz199XSjgDwVrXL5oncS7oDLs8gDSXPZU3dBzawufdt1vbjvjMoz4obC4WuoFbEceDxLT",
  "key13": "2FLWpKAMd7PLqdtwtq7kx3wRLBzZj8jY4nVSsMeKYywTGZnZQRpjKRCLzPPn7aeASJdwQ2qYBcjTpuwECVk9ACf8",
  "key14": "52dGTkPxRH1KuWhivpV2ZVa5DkFZYj8ueYrzWwrGooPjTaTZMRjhDrzAngPwk3ew9R7cYcMmKyQhjdJcYq3aDtQt",
  "key15": "sRTnX9gTESkC2cvL2dvP1pWWHvrYiC27PFeDubSvCePTg6BjJFuw2j9wfCWuuKdS6hwXnoYp7eLvBxqQ8kfyhRw",
  "key16": "3U8SqwMuDvQX39vy7SvBcTeWGxw3LDpKd61nwfBc1HNbp9a1gVhTFA3qHVMeWGvDcbmj7J2g1CeFHyvE3aMUoQNo",
  "key17": "Q1xsAbc8V4jGGfKicdxsspxJ5aAPTTiN3wTu3eNm8JmHRBVib7h2HPtBmcJ8Z5ypZptQMc2ocTVDVKzCV1wgt2G",
  "key18": "2DwEaJ72L28ZTZUrTQKfLHVWaVmmznQPaxaobjppLC9PjaArXT6gc6uDnEamK3qCYFkxc38ymT2RiAJ9Zvx3n7Nz",
  "key19": "4WsTWxYi57U2HyA2ptz7jXXJd79WHyd6BBCFYk9CVCFUuG3cmegJrFsCWSnYQH8xXDqZMpNXseTFpHYyLwrsf7wi",
  "key20": "sikKZPHKmUHxAkjDbTLWzdZXfkWmSZnjzCWRqALUhBXZ59YbgEvEqJxfjy5WGx7dehQ7NvRPNDSo7nDzQrBRp6k",
  "key21": "2gsPfasan4PuJtirRDYEfkYQo4NAQSKRkFk6gVoyqp4KLZwQg4HZXM5M9fzrRSxGCd6txERe4gQS8YsLdskW56QB",
  "key22": "5nTwtnzYbThfDnRhSt973pZbeHby4n8Q7ukvFFkZVVL7jte6qs6xuhMtiYrizYxsCKe8y2TKW3ybNgfpwx8VLPKY",
  "key23": "5XmCTxPKXHS6zwsfjNmB6jZtMmR9oBQvCsEKbzaRY5sfFW37YvXpCmTHkJAd7WSds22VSGAk8xr9c2bazd5fFdM2",
  "key24": "EobACNcMfCpHrM4PN7D4P8sma5QaAqGt2HGrjNAFYAe7YTp4KPu9CuzBDkWE5Lh9aQKqjUnkxYVyiyJbReegUPj",
  "key25": "4p1HnUEoMViMgZT6LqYYzcfAnnVPHHm4zPeQhqqQTYXQTYkBCEtNHUUVNgfMUuVqSeA1vHJ4ye75cmzzshGfX3MG",
  "key26": "uHeZBaYXBySCDSxpKUE2W8ME1fzUZWg4FeGTLR6PcufAdv8Bgv7iNHeTyFe56R5FE7e7D5X8nm6iP2AQcBs6PSk",
  "key27": "5NRmn5r8BXzzQKRrr1ZKPzaxiXqVoyccSpsnzFKVkSjJaKA6rkFXbebBFxWWde7gHDn2P6rZQ71WZtPfuQfWavdS",
  "key28": "59msT2emTcCKsniUyxjyyzLnKZjhagdY3oRi2ahG28msrKBGtLeTx1UTdb758JNoASQB7NDuynDaBhMQL4Jcjoj3",
  "key29": "cqTtM54xnikVqjVM19vrt3yjMqLhSt4hKraSYk7MUYJQzLrMy8na7hY94Rxp43VG7uNbZArfXBdALo3GPkar6jB",
  "key30": "568EimDMm98Fzc8WnASpheXg9gjets9D3mQCEHvsJkxP4FmhM1VibJSraHyPEHSp18Fdr94a2YkyHYaaSDf9nrto",
  "key31": "4LKgsk4GfndDscfa7FcLwDFZtUrTC65J4tFF817JVZrXTxwEmmx9dZcKWuqskaFYUKv4zYNc8AX63evGmyb7f3Be",
  "key32": "5VWeJsrTbXfAMxSDtRfhnFU8cfnp1zuehVVWUezGfYPWfCbobhdy2SgwnXj1k8h5BkijNTTD5n4Sz6r26DYnhzcn",
  "key33": "3yDfHC7jtfb6nL8WoCKzsv795bVEBktB9WnHsF2JH8htnm9ci3o2iQ8YckDvYQgRXiHcbhDCzC9y88jajG6XAvRv",
  "key34": "J4Jx1mitHCSpH2kfNzG87mriuw53s3Db8BUbovAjpLE87hqpDHQ2eg7zkpRoNUthbm5HUEBawjBUQX9mcefh2Lm",
  "key35": "3FoAbZrMM1tM7UeLjnXdr7Awhxpw5T7aeKVCmJE7fS4yKY4mc9ZXFtvimiC5WBMXBHHALs4c7qRmhcxTaWxGpfBb",
  "key36": "5pWfk7WdmrEvmrMPFXpAdTgXM2mkNmMpycAzKwKhjzTTnDGYCyNou45DddwVNPpgoC1KcqPFpbS82apqPdyc54YF",
  "key37": "3T9sHuXvVBwGMv1i7H1UHbmXTHf9Dkpdam7uQ8tCeuj3Sikb92HEzMA9VrhHmEjr3C9NhwccHspNmTDL8kCHpxNa",
  "key38": "5pdLA6rgVJJ6D51JPV2u2kEfYdv51YMupM6ttrgBKTnvzmwrfeZmMG3AEshgMt2XF5VHT9xTGANQzfvfKPCAfbdZ",
  "key39": "5kPhZiGKsFkJztkKy3wtrwZkmocrxm3KW6dcbiXx1UXXdWqnDWsfhxJ6SvUSxMZ37JmRYqhpq6nPU1BFbTF1NRhS",
  "key40": "2nhk41ZXm5xVgADctJhqumR7c3RNypk8q4ycWj2ndJudybBgneCzmoenyDHpCFyk7aLuSkW4GMmZbuk9JBumKYsn",
  "key41": "4r2ExaoYt5hVvt3e8XikAifgqQ67BYzhg4qFN1icwvT9PDku42pwGz1cEd1sX3ySwHLtrskCrSTuqTJ24nJeDHWN"
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
