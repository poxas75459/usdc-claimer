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
    "5PECVVAFMQjf3FcEa3TWKH5biuwQATL5rybCjvQYNezBTL2dSFiBFpxyTADCoP7qeVMbzaNrCJQmzy8wmMRmVE82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UunkSFE8UTU6SqRbiw6Xo188h1EMQqRpHwtVmxTkbfrB9FQbiMmFs1XRyaNsW4mM8w42Kg1a7abryQjxawM4xGX",
  "key1": "NrbFdNZNV5Y2jLFg6edKVvyftf3GsNS1wwCJS8kWayWuXZ6wDHWvtMiP2fsURhU4xFv6Yr8xwsYuhdogoQomdQT",
  "key2": "2pdLHQFzeanjmaMWdEUzcj26Q51gTTSJd8BWNEUUTjyqrVfToJjzJLqnidXzgUKRAhyYNX7mx1J9k7DVLykvjVfg",
  "key3": "62rdoJ5tsK8kKC3aCHjNiYNWXui1NHXwMdsGVCi1GC1JHNp4kq3sLtDicawQWKUEYGSc4iZdgJGZSwJ6CPa9Np1D",
  "key4": "3YgUSuEvjE6YxbrpKtcSiPGS867jBzVfgxzuFDioxN9dBfd4CbNCUt3ZeDYF8xrjW3jQZm6VCkSsv1UqHRWkMKHc",
  "key5": "2j3JkHehNysMSyStu9TyZYCAMQEUB1T4AzNx8vsVatmTywdc7kqLfwuVLZ1ScR6HcJaApoFEMcRhemRBrTq8x1XQ",
  "key6": "5cKXrfw4hYzTGtHCf4pZyFUHHRc7hqgi8Tr79AtePqkbx4GqSvehPpZXMQdbhifJ785issMZhHc7Epx4uVSP2DRx",
  "key7": "4ci6LMSovrzbCqGNJYPy6GyLpvqrMUM8XeDaxagUZvSxDZQ3mVRNk9koeab3bptZKN3nc5FaMDZkVQEf1bvxDHAc",
  "key8": "2dWLpxa573oLmsWbL1reaov3vcCG1hYUJMY2Vx2rYfyx8RFNR2MnE4b4pkFR7JcZdfnvg5yQaE9H9FAQXmvfnNU3",
  "key9": "4CFeSnVdcYTKBpdFBhSdoUaLSZXUYXeUSbvCP6paTbZEaDtSTVxamfFoHUNfNaJwuaCuzsiRXXUtTUkatPu2MZju",
  "key10": "4diDZowfEZ9AjxYbH7zgUBC5Qdc8wFvXT1B5Z4qo4LsQdNK6qs8zZjgMhHERB2csPH4ms9tyCaVkbdFX9tg2kizH",
  "key11": "5iSkUNGVjeqc5oR6eeQL67kqZgah7eY8gVhKTJcbSASo6svSDaeoyfmD6oikMEtrKeghJwRD4UVSGNAdeH4xcWT2",
  "key12": "FrjKykuNHtz7SX5Z1kpPjYr28ataU3Gkp6xxBLvfhWcrZP9zbvqbAZEs3BXxe4FKgXR7kZ4jfEP72hn7JFcWxtN",
  "key13": "2e4hVF8iYfLVDQd5Mg43nMkHGu8rvtzZPSqMAd6rmL84U7UzcqZ7VcMMpCDtkW3bWmkbP9zsvU43jT2kP4bwNXxN",
  "key14": "3FDoPEexaaX84TPMCggy6ZKSMjR3fmUR99UKkwocKdYwMz1Qi87kbnRScTRUjvn6khaSYmoV8x9nN32UEohNZMQA",
  "key15": "3psSmuRstq33zU51HWLSceErjqg5QGAh5SHLuhLEgfNb7C77jxRweLFCUzsS3o6JL7bYgQfCAjTf4yzxjJ9C9ZC1",
  "key16": "2Eazh3QSg8epEeizukQb2ZXU1RHCDqdwwM38ZLWyR57Grg3BX62pNBk9hLGpZ2T4iEJFtnMn5LG8kK4zU9YEEz9",
  "key17": "3FY22gkGCbenp4Ar2geFCDWfnSk3HnTe6ST9RnzWdhsWGAqGAXyBKyTeDehycVCxKYsLUKFZSSSeKwzThQuexWn4",
  "key18": "f52UrHEnLCNa1QEqH9vG5WCj6fHNzbrDmML9xcPV4zZRQ6HKFymkhXnhW5oF2UPcW7JV4hRyz3qXmYnNMgLdHDv",
  "key19": "3RDifhB9TSUgLzeZxFwTzAQL7ZbsNjuzaiFMUvBGY4aBrpJkH4NnWTBEr39k6y9wNDVjw57NjTCyTFV9eTid6r1p",
  "key20": "4eU2zrM7HsgXQdPqXxVkxxYBNTZ8XYUx7u17m7RWg2CKS1rSokiJM9bXNtmUMwCmQesiEcWwZBnjZGrRC4WhU2ZH",
  "key21": "46q57K68h4ZY7YZtf5Qj62LHcx4EtVaTiwEe4dvS9GGujQvmAz1QwFqiv2RW2wGQYuFMUpgUfFTpgVjnqGgue3p",
  "key22": "4bidJBWyXTMxrVMnQyxahvQWZXdbsVpqT4SBEYHBXARbTNP1TZ6k31ad6UTgdKWKbDZcgjXW9zgWJpnHjf4FzEUd",
  "key23": "5QtTRkMvBj8qva3qSVw23gerLJK2CBr2cB4KnLmJy8DQf5ZiRWmeLpRQ42ub9aL6ABHt2AaUEPNQT6R2yVGoP1tP",
  "key24": "2m9aeMjQqaa4KNoNW573e63hL85Uny4LDBub5ovLoNnTNFiepERCjywuU1tSTMweT9mf13P6AZpX1RPEGWCsvHcr",
  "key25": "5imdd6bujRj16uYvAg1De6z4x6Y8YpnwdktqcdT4Bc1G1QaN5UhoNprkBDfWcM2TpJMEn5zu7VUCgXHGGoCoXP47",
  "key26": "3u6YdVgbGG8tN79RPjgSPTLCAQaH7XBwE8FJ7CeguFM4L8hvQckXZun4XDtDPzE2vYnchcsExZbdtNXbUzpin3ip",
  "key27": "3uYgF2aWeaWUorLfrwnLjC9vhzUb1ZfYVv6FNa7E6nY9wtR8HPhBrntEZpArSBpbkgTSeMTLzHraiwiYooGFHXLs",
  "key28": "3Yty5nW6Zu8syg3PFRWZbGMTL7Hk1GqvhgqVRsm8ZA9bWiirGwJzfPuU4UHThDZ9KeeFnM4HXjyaHRinqgQmzmfr",
  "key29": "4T7UiAotyiv8NiGYgM9wxz26tSQPDJjUjEjWHEKuGKU1hr4oLeEaZxqegz1CiEuFd7oTB1uQ8A7tTKCUY1afeUb9",
  "key30": "HJ46xfFmQaNEvd2aBsRQ4edMqCFK3JXF2t4vVtRxvDYjaR68AAo58QMFHV7bv77EUAfxuEPsVFKuNcut2iaa9cM",
  "key31": "4feSP7qQvSTtCjm61VoyHZtAnuyAUXLiv48RRtSaKCj8yPq5kHKehnHe45CdwjseqTDqiyj93p2R9NmFMt6J1Jjo",
  "key32": "2UFM5rpNoqP91CwkYbic6XWp3Cx8Cf7CsKhTmmMY2SQAxLNf2DquKScB6gvuTRHPaFMwBTi9nuMtKdJV7yu4oQCE",
  "key33": "F9TriAqCy9NE9MAKehxqmiQ8hkmCrwYakVH2g1hrNUt1CErcdYFLyrRTSFbXYib8c9ELFQxcaFLFFko3gAdMae5",
  "key34": "4wdmJRdrLBMtg61AmVNHMpxHZtD4Hbv8hXjpmDhRcMvQFj5TD2A63qAXpS77sVzZeWybPCLLLxm6mTbKb71DgWnd",
  "key35": "3NDAv7UyePoQzaqQGcXTEj2E65Dh49AyJKRtwnHQoyTnhXdZoHizm9Xv9AVwH4Wfm9WfMQ5h29EsitmqWhVBwehR",
  "key36": "XpHDNEBZZ8sf1WE5TzHFFUicCnDmRi6rhFkBTqFAKSKyQ2nbXfPtq8TZEG62GdWM9Y5twwaBTdYrXZEkfrbkoeY",
  "key37": "GfxifEUeeP2FEJDvf3M45EUspLjFdfnxLVftXEXannzqoKJapPiXY1hHBjLH2Va1b48EK6oPrXEmkSDaVjnmZct",
  "key38": "5o3DQkpLi3gG5d2yFWeceEKPXn3Ut5dr7R2kzKXtJqnt51QxLdopuAZ4xVFvPWaYQNxVUSpqCoSr6LFiboYqEQvM",
  "key39": "2Drvv5yoqv67djK86qTRPPvzBU1oo9o1judXKVDnDg19hXjSSSmEwza2PxksakkcSKb9kHLDXZxpnR1LcR7Zz2tZ",
  "key40": "2vedoXSwNFZukQAdyUuErgefH1oyUR1G6oUXe8vFMSAziQJ8vds8VFxuJpm1v7eyRGRwhehq23b5trBzj54sDEQJ",
  "key41": "2t2op1Dq787rdPgbew8vDsnv26N5MDdiAd2DUmcij9AwABjgXXkSZ2L4G4uBgxTQTFXePDd7K8emwKKYis1QeuFz",
  "key42": "MA312bcoYt9utrBAcwuzHqp2X2uoc9uVAwRfNkg7V7kJHMXsV85HcTeiziTqW6CnuXhmUrToTLPe5QB57ipMzWv",
  "key43": "5tEuVX98b4Fio6sRU7En8QTbMe4xkCGXXw462mzyGEzBrx5W4vET1pyD2sKeFrmYpKVbB9fTNhXeefMH5aYwknGR",
  "key44": "4bHmr15E4bWqgAm9gXXbPHejzQ8VxpMzw4h29V1re78NrpjBgCWvfaWTTA2WKH5G9TMfPXkGXoZ5kYZvqXZYUtLi",
  "key45": "5ExB5hiiKXcGBgiAgkn9SAqkW6VQV1kT9ksm6DuNGGm2tqHCFUckn14cSybcRJ5u3ru9kKHjqqGUvoooJssZXWVE",
  "key46": "3w5fXPBoK8NXFCZM3FQxRAY6TXc9PQE387ienNK3gjNyFXuoA8UG2PJaeu4HRRzjoRSKd6ZDay5dCDo8J5NEjTMp",
  "key47": "5f8FpvZmTmUfxaxWenG1MW4dGFhiBuWdcyYcXYpzzxM6BvfDzbq1AY88QpszithwgYio6UFd9uVZgdZVs3G1aTnP",
  "key48": "3dD1CfixY2uzkiCCjvdq2jstFzpmMnLpULekpGp8xcAejYHCKFjmNYCoCx8323Gzub8LBEmJ7fbSUZ4ribptPKda"
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
