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
    "5yRJ73emJnFQzDXE8XocaEg6C4nerarLKmdUxoSa1ZoH8YWfaa5heZDCnjhYguXXwDPjwUY8JStKdmX5JzEQRSJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bSNkp5L7tqbWzisS8zuBYiBsCMr5KoFkoQnDvFcSs6oWKPHit4faMjxiWpYdQoMKxkynTqyhVtcf1HaSRWDLAf8",
  "key1": "Yfi3qQikq56waKvcjgEicgHjCPPU3b4TED17dSJZDgSGDBHcQnem6EFZoJ7Tt3EmYYywWZqbGrTMKu5bv5qUKvT",
  "key2": "3aBukRsdrKukdmGMXiqB37drvck5vXJATuqVjpNkJm2RGkHr7WUseGmKv6aGCGjBKtDrVKEEjZ2Xma2PPSbxMEYi",
  "key3": "4wBWqz3oZ5uEXSzVRtv85xhKo1RhDvj8rQUZpfquhE5HJgf5APs5u5arHvLdwRxt9Kxrsmixi2kHopWijZAU949F",
  "key4": "4W9dtSoKGKwNuDUSr9eNj5ZNExFojcsuc8V7YAuNP9hJSc3xycabDSs443ZFtguzkvBEXVnCWJQYooPZ25mnEA2p",
  "key5": "3tGst8iLjeezHPBdkuJoEsCu5cVbxEgrsQi8roaa4cmZpJVVkD2EbTHJnnts9BEg1SuUQRuxaL7bFHZPhkBbYb5M",
  "key6": "5NSwRJULRMVNWWBo8DhYUjbVBCcksWNdd3UMrcSwzdhEkczDoGVmbecHqvorhbeUFBwFzBYRBy9MVcF5NjHnJyt3",
  "key7": "394qXKJ4pMHkxNxVQrbmme7Rn88AKTo8wWTbrCwqKU96UYSSTMEBoLKuSktopmhzmubrqqZowNRw3QG1sgDMrydH",
  "key8": "L8NsJ8M2r16vWTV6sjdxxiu7erjPb8qTbteZuicTXNX7iMdH9UvED7uiGqVU97cWHHMcXivySSZox755zRKuZQM",
  "key9": "2tmQRhh4rx6vYAPSoTaZRR8ZKyA1oAgwFaKpojzmktQYev7ERsYNQuZsFgBCcQ9rxfoHdwqMeMJWJ6hinQ6En2As",
  "key10": "2ksDHsrKnVoSM1hugT7u6q16PXuYE8QYQAX4GQhCm1d7vaRbjE36qArrGo18yrK6uZZC1AM5YYvgwhms11kekZR1",
  "key11": "4QBzxB7RPcyEJL8V1X9u2kzzKzACqv5R7ExWH1eckbwZpnEunkEhLW2vFpzXgYh9HMgzKpsVbwieWVjgcUSYK9hP",
  "key12": "3eSf7keidXcrSFWjxV6pWzb9HBbJF5MYPCczPAwnghFFW8AcnJtsSKxVQ74ADRgst4iekqqvDPUDKb9Hj5xfzCD4",
  "key13": "5aEC2Vrh5UTdSg3vTXWLA9ya6gTeVW9sjeFWV9ZvLDR3t53yfyWvDxv7v7ihmR4BQXbLuTVHyzTyHo5TsMkTRaEu",
  "key14": "65kK5ENxmVxAB6MjZ81PcZgJNQHagcuwKta8QhFj1L54xPxbByG1vbJwGoeii8aMiKPfnvfXmYWwmbGrfvA14q4D",
  "key15": "9fxFtPrhqjUpwR41fj5qTaiZiheY4FLLCQh6GLa1pNYAowJbmdaiD8zbn6n6vpaFbsHaR9PtpUf7wsFPe8HP6Xi",
  "key16": "4PakVWMpTLTmcxZuVKrnfssMqUwJfhgna23En7CQgwicyBMe6sse5G5qqo1PqMh6juNtNXfoo2vyk3PBaKDvcB7p",
  "key17": "57Wb4eDCzwbzh5i7GiFshhdVG69KCc6ztK3FWizV4FUfkuzTHTZ5pM838VpsNzWdbUzDdiKaqMdPU2YkBUxuJM3T",
  "key18": "CkddqMfFkrtvA7duvs1JSrwMS1qwg9yjZdjuhaDwxSpRYVkHbbw6eKkMCJsXnnzsxeXcCbuXJPqSmpx3SQPyRkZ",
  "key19": "2mQS1rS3Dsh9eGtf9JMbeDwHYyin7DujPBo2UNx2b6nuatVbyRsnhxesryB8WK6RVBmmrk5qr57X4hiNi3WNeRGt",
  "key20": "2spbzFdujf3hZooyipKKSkWBHdpsdAHQijirz5ZMzmwyWZHKFSsumoXL3wgVnwXbx1kc3AkkrLVZzj9BX1BzuAB",
  "key21": "21VwPmGGJEpqBYFX77gHZihLQ5wocAQMQf1Djy2SaA8Nu8VpVrSkRCdSqykhvoVHv44q6S1sK78j6Ls1WKAv8yWJ",
  "key22": "MLZpfKQFpFa8iUZ4YcGH1tVNi1PqabNzr8m2cTQvTiFvfAmkQaiLNhWdiHbxrKMEU6PndKBffM4zLeyjg8hpFQc",
  "key23": "dzLQQHg4TzQKrg9LehJb7bzZNqogCEQMXJhJEAonperD86XNhHWH6fEMza7VuErw9Xju3onvREJs5KXJtVPJCEf",
  "key24": "thXYMddSpeN32QfioasQ8L3iLFtLyGouJWcsNJxUtWRT4MBBeoK2g8MK5GpRcn3Y1eHAodafjQgdXpfMPnwGVJm",
  "key25": "4PaH3TZBZMeupuKLLwUTKUXRkwz8ynLwBJQne7AxwnYo9Mn5MwYMhLmyUJbpS6y45oBDJiif5n2uczoSo5P7G4tJ",
  "key26": "2HPiAeqq4HmngA3hMkxe91cif97pfxSBSVVQ1LnDqd1hHqYU9j9a4aW6aHyJBx1iZnC3ayVgrYohynHSZsKaEggM"
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
