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
    "5NF8RsR9LDk7Kzm6sR6yaE1uGZssi9zPPHsP32WPvixPkbAjy6sAn5zvm8oSkL6iLWsoEpHpn7iCJ26g9sxLZBcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HXZdaXSGBtDTXuosdrZQERKFHYmUQVh4MYhzByJH4xw8mzB5GhwQe21j1qfFVu9vCTkyutY4YBbtbStGMX1kNHK",
  "key1": "4ScxTnfKTDnud7HCeF5P4XmojnsAvxiKUjYSCvmXYuCc1Tn2wqsAQXmhbZMeq9SagPXMrDC2uxj7X4gYKgLns2WS",
  "key2": "2mFSco4cBXT37iWqD6PchjRn87HXAMr2xFemJ5qv4vxLgHHoZh23gUvqiL3vYt8JBaNyAemuxhhtrgyQxnNbHUt3",
  "key3": "4SkL7twGYZv2QRHKxDsccPhw5E4GZXzLzNUNcCZRKRXpdsYaNneJwHyyfQaob71eCkby5McQHih3vg7JpkivSypv",
  "key4": "PKw7dC5Ra7zkEe7b9Nx85kCoXpyegCnJWEpydGxpLWh1hRes4RJ3urHJChTac5REPoQeWpNTQV4z9MHNde32wx3",
  "key5": "5BWwEkxPKPw2ajVkcuLhn8mFmbc6n5oYtv3QwDJEX67GhF7YxvuMSyPW4hrt5dMH64jhEkBeuXmTXP9xFzNmHvmy",
  "key6": "3twZYWdtcHA52ueSpStw42rx36LjqHBsfeL1cQ6pL5ioD6pK2he8HKAAEXNuXumRVknVdekEGqxARsZMK2De1kJR",
  "key7": "4w8SBM2dNc4PmWJbyf5cC3xqobH6erVbRhpPNQ7AbqCzJ17aK4n9CL2dA8jpMkWxBM5MvScn58GCpJYFawdQiDu2",
  "key8": "3okWLAjX1Xrq51mCpDaEKLD8h4C9A4ZCETWEKKVuJFGG77KX8geQLoaBteFi5yFbxTJAG6heHg5CSHTbsXrvauLW",
  "key9": "5d9cxLgcS8B6YgrxsNu1icK2PE71MYznra6twFsWUXQPuHQi9C1BFNLRQhFyrwu4rDjhmDmBU2smbK8e7rqZ9mwn",
  "key10": "4u3C4yHQQuUzUjvtKQVoQznKzTuD8Xz29YHex3pwBCPeketw9wuH5xv7U6WHySRUb5svcbZTYMYwq8ufXYvjXdUh",
  "key11": "4LpYkLGdEaW1iUAsBe4NRA1ihEQMUuZy298U8cQF4FPM95ELUYF7Nx8Ch6jSBExdZuhsHHKrgVshu1JMXMqM7Dd6",
  "key12": "5UBi2jKgmPaXbwPYrymqgwz4mCCPz9rfdPewxiuputpjBaggwZHkCogCzTh5CP2SMzoVHAqyXZmDQS1zBAou1Pes",
  "key13": "5GZ485XH6fbMYqH4jyW5xn32NrHJzcPsi1uDXyVbQrquxhmBEWzLVdihHv7VgnvzpKJdTCa57uVP78KMcTNf8WkT",
  "key14": "5nTd3T67YVdxXhc1vibSaSHG9xNUmmQKbaaPL9SLZQBshj5yHLCftiF8yMwEmw5gatk74BLAkxSJ5Xf3PxJgQvZb",
  "key15": "3m3KV3q57RqEhbeprkSUeMgVHyrwEjNe56TTai4wBb8AjpqrYGiUyFJrDTUahngGbX9ihnpy2gfbd5YQhk6bfP1n",
  "key16": "5hR3ffRVWz5gKd51qiiSxwDWCQgQRYrZYTUwEfnwLA7veNUVPDHxDSVz7BSjscavFZzEwNVcNCWGiBMHZTnVzWvE",
  "key17": "3sFGmt4fexUyQaogLnHYiyj2C2NDHKiyqGoTRu48QqhBQP4a7KKYfr3s9Lg6b87wKSMahVxa4H8dmbPdgjebWHWk",
  "key18": "26q6934JRDSV5J1SdFhTU3Vo79oFxqeGAtkmiFTeHvR9nXGiNPjzCkpu9oJxFmHMCirsJZrvWKt5qqXXDdb2NRdX",
  "key19": "4qgBgUns5xexX11q4T8ZnECYRsWGFFkbY5KMiwT3nnPEHcJqM9iGvSBeKpsZiPH3cPe4Dtvcf8GiRMBUs9qoxy4p",
  "key20": "cc7kbfefaARdpGAkpDywCji4HLEbHuJ1y9EQU4MWn2SyH47uYq1o5hq1zrE2jknJRkPoWCjFTk98D4gVjWm4EGz",
  "key21": "2GjjLwGnDPqDLS6JDWcXuk6D8CChd9gbUpQuLCyt3tGFCjJaXmGUmgW2gH2WLFG2A1pDRREg5PWafg2zWP9VLXAC",
  "key22": "2AGuB68UBoKrLFZQy4j3y5i5Kva7mneYyPLjouXDiDf3r35UXgdv1CpsvDT4uuhhm2RbWpAZPUgkh1APrEZTzqZd",
  "key23": "7rX1RiJkTA86m32NzXzCzF5JqCEn7Sgpdo3CMXLEZnfHDn8iWGgZy14iPY3K97mDCfs2zdNXwx6HGzx93Tgr21i",
  "key24": "4QsNjPLvJbQZhuVVTL8vDoNJhuvZntjWLHTEATaeUCde81Kkxv2poLV6PxCeTtCedvWGpBe75GyV4c8crWCEoNWq",
  "key25": "2wG26JXPc3TgLRDYHSDHNChxz31Lpsi2feXrcCgc31yrBiKmHrV7oBcEEEvNAqQeEncDTfWjv79ovkdxokD53qL2",
  "key26": "4RyVq57yNdnXLszigTPqAgGFzVxQMcUN1gV9NogGqQsXrd9bUJYqqQ8YPpjMdwLAEt599G4VZQ4gWpy9gAUkshC7",
  "key27": "4EBUw75Zy2DVZuayZPExiy98CwBju25hkkaDNcDSReFSxkSjX7wpnUYr22DKpSCzTKLGCeoM6ZiwK92cy6VSvqGT"
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
