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
    "NmF5wEvkmc5nHW324ELig3KigygWEyeht2Xq3fatFihWAPYqRauJcC7LJsmGkwddQbwZ5rzh9ShoKNheCNURS9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47By31oeRaSBcVEa4NtaMSRJC4riTqvA4WSTLSx8vUdG4nhFLkR7zvqW1Ko3SbnJG6Cy41swJkKGD3BdUTLctbbE",
  "key1": "xet3jbLZvRp6nZCKmcD9bM6Cz8fEkpPzDaUfJYMsftiWS5GNJ68uJVPtpahQszyNh94AXEvdHGEcuoSEbXiHLdW",
  "key2": "41E9Jb2UtXoG2EvADicMX2qje8Yv79PGsZ9wnmqNgqgsaUsAygEgtayPDhZe1BVK7vaURb1rYjtBh9C4pyJdrfn2",
  "key3": "3jbJz8K9h1B619EV2CCoAPzHwPVj1ckm1SBU9z39ME6dGT2GjdFP39thdZCs3rRrFLedJPqHAWN2a6dXzc3AKcni",
  "key4": "5Vz5uypJUSnEHdjRR94Zavu4F14sz2h4gRKkHtiFfBggmLyYKbiThQqX5MmbubMCTr2yAi3FTKHjxGi7Gq77xKWJ",
  "key5": "rjHRt1n2AWhXkomXQegbppbUvmio9fEUSsKBN6wuC13y2LwZUKmeZbnPtqYg23LenfoQkjcXMiC2Y2ud8nTXrrn",
  "key6": "23gs98Gjm7wDyNqzhEK41tR8uPNgtZqddfHSTQA2SRshjrzv33TiPQ8BJXsKHZeVXiGghEdBG8BGYcq5Wd7MeApj",
  "key7": "584CebDfJHgm29pPV8iLXYyQBnt8LKPnqXRbu6D76fPwqn51V5mQDSS5oHPgaG4YGcjSFKdsWaPyJqbuYszgR7AL",
  "key8": "43bucTaevNWXjMAMh3NiPdUrAPvzWz2hHfp1LoAhDPwLEyRvnwxHi7Do7fcZ9mP2xqrR7ZGARsNxn7Z7DmfaihPj",
  "key9": "4zAUmoidUXY9H1DBCynJFAXTvYw68z2ETYXiWFGrMb9QZmawcDADMg4oNJFWbXgJCZmWDmDSS4abmQsQD2wUbeuN",
  "key10": "Morqgd5VfD3ujYLusHQF1nGoumZ9aLNMG2FZATz6HqKtL8TR3JKDDjbK9f9FqUSwQcDxesUn4pDueEos6iysNcr",
  "key11": "ADpq9NaoBBMBr8r54F22YV7fJaH4Hv8sHpjtcQr9utrvxr8uCQBkfwN9nRBrQJZV22dsCDEf5o1ueze9ZJteUQP",
  "key12": "3KLJsaFXCH8hvQmL9Z3JhthzRgS3m4smHpgJBDm3pUXN5MbT4VekxKVTLgioX8M69mwzAbEueGdRdYJCyNdQ51AA",
  "key13": "5oEHLdJrStrMiocz5rLPr5wN8Yd9XByp7NYuHDZXoKyW7JtWdK4uJS5g1QghxMzaEhmHNKrGNFcGXkYWAzNkSdM6",
  "key14": "5rT8tqFRAU2uBAR8Qyj2ZCRmA36wVHd2PAsPrMowKb7AJxWLQmEGeVQceXJJF17156ZBJVYD6WSBEBxSoztmsija",
  "key15": "YwMARZxhwc9po8ykkL4pV5oQW78cD5BkmEhwDUF2SFY6o7DEBaSqcW1CdUT4WtjQbb1ox4TCV13KU7pgurk5kS3",
  "key16": "2r7mESrHjXDc8epjNAB52eToX9gyTa2hirUtDAwe2uftUqgEXup3PMLJAJLgegCbtg1oHJuppevDTARBigw34hQF",
  "key17": "56Qii4YAQrDcdTb7uziUEtqvt8E3BBQG5JsEWirDnCiY7LVQaCX8tZE97yRpnykEGLsf6JCrLoehwdbshBPSSnpq",
  "key18": "bWTPK85LRwYDJVGpJMdcd5fUgdJgJZaAYfQKLdm7E2mDYTx8MgXX7XKTLbUZ131aeoySgVDWXHLu5hTd1enE9pL",
  "key19": "RYHNzVtACjZSZeDqLENfe86a1X3J39iFgM2h6wM74tFhdNU4ENFAao6kQDc2BmH1G1s8A8MJNSpQiodRFYSpAQt",
  "key20": "4ZqNGBNR2zadhezo6Swf7yHTyPAkRNy5XcZoRXW21o21BXTu3bnxkMJx2uNGw9iyjiRfP6T1WMi9hNeycVGUegne",
  "key21": "66CZKaPg29yctpytXueCwq8wq7XAuvBSQ4pCr1Xu3cxNXfHFq6wH51GGSrCgVPfAHd3rX6Wpxz7FvfMDXCb1Z1P",
  "key22": "66bfZYJjDZuz6SzinSjTkhEgxxKDgnTcdAJNXaekGTZZUiJsBGGnrdquFgtP4PaMMFvavHpGfjYwU3iXRTUSVWh2",
  "key23": "ZoZcgkZPeQEz4wLDwQHwG7RCCaeQnF8cpKFc2WYpjJjKTKzGrK8i1j8PQkTyRuE5FSwrcwsQCGQLY3JHUuFVaGU",
  "key24": "5E8dGT8qqH6rcXypW4rmnMaDTv2JuaJj18jB5KeXEsEVwWYaVfB4NNKpY4Hn19CPojmyPMR6xq8qofTHqgu4Z2qS",
  "key25": "2npmSh7LRAmTinZzLWuBaj3hpq1veYrTSXMETYttMmU5vo47fMiCwXKapdiGTwZKwYVVQZvh45X54Ak5biVZxoEh",
  "key26": "54fFp3RWJG3c6aGBUx6R3wXobZdJGeD7iP6diwrHhGk86tYdFY2w2fkCqGAMBtzeTfkqgFRHZ3i32Hqj5KUcyiMk"
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
