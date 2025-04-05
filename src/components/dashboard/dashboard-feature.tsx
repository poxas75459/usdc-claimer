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
    "2rbD6BXY7AdU6RkqwfPgArZRvbFBDSdSpVDeLw2GGarrWmSU648S9Nt5UB1V8aZ19qLFZm1dxwupadwJ5rwvgJ1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T716xfDH9JafK3uinzPjmdGcun5iZVeKtR28u6bNkaosukQ34FrfHD1Uob6r63qKmJEJn7UbieQTMi1qo5Jg7Pq",
  "key1": "2cZpuyjcEZuxLDwsDK2sVs1b1zG1mWmsFwChTtNZauQphSNWAd63up18aK1jKw46wn66oc2VoStXiCX6vjZU3GGV",
  "key2": "c7QZ5BYvgnjUx6d4E6xfit65epCZ5F2iZCtPhd7ZbekarDfP9UQarWAeLFfCNFQAsghrQshRy1tGkpZEaCWDBL1",
  "key3": "3RVMgYTogT1epvTHf2zR3XjikT27fePKXfwPcDHN7npT29tN4CKXkFQxYuYHRmvVWBhSRVMUb9wyQcYRmHVoLvfz",
  "key4": "V5HKLop1BTHaqK5C2JhGrEDVG4QkpSHgMkawtze3GYfz7pAvAdqeg8NA9eDgHxnR7CkhCvaRf2mHsNCZeLd6TGd",
  "key5": "MYypXaxABooxsSpub1LxdG8xxVSmi3NeVMqQjxraMfsixkv4jNVFkNbwbVHS2tZtFayfHdYkAr2WQ7DkjAw5vTM",
  "key6": "55UAoPTFHZUyUoa2jYn5d8nkEB7FA8U9nuu9dMZ1o2GN9V4B3vZvS3hdtN6j4EaE9TDxNHR2dZY55xon1gySqPdL",
  "key7": "42cM1xWAxsegW7HhahXgpoYVX1oPXfvCW78oFzP3dHJD9139vpx1xE7pFRYL4N5RgFQ8gztqYgtUSo9yR59Q5buv",
  "key8": "48pMDKZpzx6PiiQSMZh4uGfD595dZFz9WeqRkiH4AMrcYMHkGZnk7c1rnEkn1htJFXw6y6q1yXRVZbursF4nZegS",
  "key9": "3vaEVyTPTt23W3aFacXuVTKAK19kn7emqWX7oLCCWNkf1sS4gZLJj5393SNPCZPHGEWJ1povxhWSEwJo4q8yTP5Y",
  "key10": "3zjGLMaW9LDberYBTg3L148i4nfBBm1jD6wLESq52UcFAdRFmAHWSEPkXacs9tqNkbxMwngUPMvjD6yftKhHFw31",
  "key11": "2vBSQrGpftNuhcQKsDoxCDN2zCdPkx8wrbqeQekFdNMach5DJnJ3jjRZn4tfEvDyT2tKsUqZhGJxsSo6hhtpwKQV",
  "key12": "57d4UpH5mFt8tLwhqQ356DJL7tZNDReyqKCNVGWnhVNufamJiVYyE4nT6mqPgkmw5md4swHnLbVsZkRCc3Qhcqs2",
  "key13": "5QSwHwhfcCGS7h9oQ4o9xwxPNp7TU23pk7UTamWZHUU6gyZANc5yrY1qWs6tXxo1z2TmszjNbkiZkMcac43xHFSF",
  "key14": "2ze6C18AHrhyLgFdaLJrgNxZowDf9KqwJnFecYwJSsJXzhVQ1WVyaeWz16bUNgMg5ZmJzzGuaaw6xUzijeyxTcy4",
  "key15": "3Zhx6wYsQt3a4PbKBaX63NUxPJVERZbHFYbKqecJDNvaZXgBeSLVhN5Bnht8h89FpECHAiZvgHZGi81kVrdmNEAm",
  "key16": "3SSByw853n5rinEUM7kC49ooaehymD3aMGRcgxRE1soPZnzgoEnxnfzYDcEhgyTUq76Xu9gJ9Q7eRFPpEgcZuTLk",
  "key17": "5Ci1QdwUbdYAA99V6srEZXUzCQDLxCwMDXpZdYBxrqiSgrktKm3LqQ4pASqc5CjfdDGBr9AyMcnPBxeKLaR2CFUG",
  "key18": "5Z9weFVjiLBfBfaCcT8avC23iXCoMExLuiJV48wBeysk6KrYgeRBmtwduBbYoRD4EpYCzVv5KpJQP6ionzX99BJ8",
  "key19": "4n4ASfAEH7jMGJdhgvKmxKzrT7iV6xdCCSESw2Kfph4gPFSmieM8qBHDFDui5knvmdAHDtLiPi3JPvQ87WPRWKy2",
  "key20": "pFd53uEEtjFkQ6dLuWBU9T9ggp4USxw6iq1TEtUuwK4U7H88WNfxXD1JqiwZFTt1mGz6qqx3nBNNtTSxrzuTUoT",
  "key21": "Le4qZGPCh7d2JXjMFY4nRgSSwtHoKF3nLmMGiqi7aA2WHNbfSEE1ZnLiSNPuA77fJ3YB1KUhVTXu51fwYJjLKFx",
  "key22": "662ZrDsKUsnVX61RcViUpXvxfgVNnTrhkqzDezxsokYwtuUbsQpJ3YozFVkifTQceves3ZPwZEBq1ZwMeYe5Ekxw",
  "key23": "3Y4gU6GNrbnDgyh1rjiUYkYpPVYHXzT5RMvXhEDmRrad2GVgB1LuNW1kdBxENFmCcbqmMjDdqRwGEWNLxrYiKD2B",
  "key24": "3vULPAbZ61MiWd6ci1vEx1gpWJ3cKWnZ1se4Nrgq15JVQx9u6YkVYLv57J8yEc55n2q5jT3q96mKvBkaFN1bc9Sv",
  "key25": "2aBd52bek8XgLprA4DBGm8vEY9C4uNnPiF2Ybzs8tLTPgwBPDoATPi6g24kLwXcYCvDfHHKHGFGe1pQzGAeTMqre",
  "key26": "684BfyP1sAq3pjpRKaV1v5xsVSm5z5578F2W7hjv6USFFwqvakXKVifdrM4tQYTjqqRNadkderoBL7SoTz8CbHn",
  "key27": "5E54Lq9u2PV8pFZ7fwgmUJHtW36G7VuytUCwfZonzvYEZVLNF5hTcZ3QAwkaPFYAzW5VZnygci57u8onWpeumYnc"
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
