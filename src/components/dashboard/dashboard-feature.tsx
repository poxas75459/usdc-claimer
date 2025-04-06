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
    "5dagk4KRQ37mNxitaXZMYGhSzepz3QC3TbUWy1fMJWccB6TS78Ku73tQKZwiRc26Z6abUNHnWDatTPSan9rqndav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqHWGv1xJ1tXjDd9DyjKiF5EoMCqr9k5v1HoJksEYZAt6F9qnYDKfZrJUWJCF6qMNLjbPNpSuaVY7Ccnfkmq6sS",
  "key1": "4DpqRn58GEfQP3pZEi6JAtLYGeQ4U1s2f5hRKUd4KiPQe1wEuTvxpfY2MKwExfSSAiDSgP8bXMvADqopueC1ePHA",
  "key2": "23bJCeUgKfsEA26ZTZLUgkvYsvbhTWmVjca3DdGNcqtmdpWwYdbC19S5gtHE5rg6otHhwLEbfoU93bPU4BematNs",
  "key3": "SprnHnZKcB9RGeGcBAPQkA2rT3kxGWb5DvzXun6dQHbP1Q7oJsGmkCXEFp5rz1MqzBDs4rp54ayHj3ubH9ujziW",
  "key4": "59z8RhHVaymdAgzvgoeLnFpToFaka1R6pdpxvf9S4ESFdTd46xhkyxU6ovsRRfQ97Da43iJFmx5tncMmcL4RjDgk",
  "key5": "2cphR7PGBWxAd8XkDajo4u2VTiM41ERoo2UsKGFwmjfKGAVox5A9PEPPMiKXzohp6k3CLNSqFhgouBAYqP65dGyh",
  "key6": "566yMctAMUUFduDhvoHHv4ebeNiyXnzB8Dd3EHexc6Sddxh8JSxWHm2LEbbqoUaytUm7rvJd2CUYomKzT9j7y3JB",
  "key7": "5MCxma6DqTDNJXPBXKi5d4Tim7ik7t2kJT4bUeoJyM39H6YWr3nhY5qTSvf78jXJyHcTY6DsXngYF9ikcv3WhvfA",
  "key8": "jXJjq1ZZZVUG5kDSp4HJ22wePXBMUTtA4w8xjWXSbpipP5FBe8PqUMSCnxrs1vPryzZhwj7mhr2YHa3F9bCK2jm",
  "key9": "2r4TgYbXwm86De9278JQVpkBJB3FPmHNaHn28P5qbn5CVvovAnPDqYTaMrrzwNU6McAzHGdvUp8WSGB6EUsk96Qb",
  "key10": "pfSk5VwQCaXmZ2X6m29mAENTk43XrtVnfoGHDFc9UJM1SurvCu5cMnSEyfbaicjTZWHeeMP4PVWEByB1zrgEBNc",
  "key11": "LD9SXSwD5ond5xQy2azSwx7KcqQwQXz6kPgKrkEF5BMicYtKBLoM6QySMx5vbTwpeJVyWgQNmEzccxHM6FB7nWP",
  "key12": "61gxj9713puo73bF5ydxkMY4u7GCTa9UaevXyjdoqnwWDvDJg1cpoHoSjyxmn7fvv1bLKZm1GKKroRc6t1bdSuDD",
  "key13": "4ax8eaz27wV9q2M4mVuVf2Ho362ifZxyrR2n3RDZCHzcbFqrXyT5VBeFA2cRUNXN9jWbhXBS7KpQsEC7EDHhc9Nm",
  "key14": "3Qy1VJyWicoqj3iZmbMfmvSxitfjqCszjNwuapNy29o3KPhwTUAFTjMJmf5rGvskcHrY4FopDbcBmKCM4xQY5WXg",
  "key15": "8fWxtEFd1U6vycSBdGd9ceHDRbS2yBKaZTkYNUeBfCtJb4UNZ1mkiWo8JncyZ6xHozbYRSf7xz15Sntr7AzTEHy",
  "key16": "3eb2u4ebMVJTTfjtJDKctcLp1CLmQfk9YXPt2Ai3fciU5n4GxEajGwR7WL5R1mh9WciTt4wRbd9zN3y8oBwT2sTq",
  "key17": "YK6Rzv3XRDqo3vp5h8YWAVgpVRsy8mfnbDsrdDLWRLZywSSYDU8iWXiB86FdhfD9JDhBRhorey9Cpxmx5n92NPA",
  "key18": "2ZzMtNBmzmy2D46E3dYf68JiXK99z9UhbCswgXUgsexp1RrxyAqsAoxJmZKXTCMCrEbwnvFUkoPRKwXTiockr4hp",
  "key19": "NLGkubMajPAz7a1CmhPf7jvC6ThF2se34TbYzyXTkj7SQgrYpA8YA89QeAVSWux9xhsm4zAuUh47UymG3W4hnye",
  "key20": "33EpaUhNKUNUvCYKBLj24FmNyvHU2q3pka73AAWU5B4RQeUUZ6VaXZcihw1LeJVu2H3epqmxiBzueTjhPSKGW8eK",
  "key21": "4RTGbLQAtpHPJZFZde9M29H2wyeoBER7wFmwYVD1ve4MPVHEhdBXEQZR8zS3tnMKwK1U1eC6ZaVjEFX2E5uw98mx",
  "key22": "5AtHWrUcvbcy8LSM4H2HFXDxweUnVUVZTmfM9evcGQqD3E5FZvmaTqJFCV6hSjaKbSXCDbiqsSNEqUkYgLX3aEZA",
  "key23": "2NK6YwobXiaAEo8cuDJZeiJCeCMrwEcib6eBFLCyVMkXFemfEMyBoWKPAgF5j9zUP6hoTLMUvdkbsoP9rVLMFW75",
  "key24": "Ls1HCavRBE1XkAMQbGwrnDgeqvLjV5dxtBgJvGYz8srKMpdc8GDDoN3rjPFBtueu2bYKLCkGtfS1p9aHebF1u7P",
  "key25": "3XcpptC1CiPAJdh5jmu5rKFeYMopJYyWYGjy3L5Qzn9C56kuA3rE6RiS2dLufTe5kvERFbEiUYrjow71onkfCTNJ",
  "key26": "5NvHLs49qaVRPpWPoaArcfzhqBHkou9AMRQdxL7J1fLB4HuBuSmU6AKCK96CH66KHy61XzMzT6Ykq7Lv2iRSet1B",
  "key27": "4AEYG726bUdwscLitUof3ncWbYncQupajmTS29M3xGDLDpNxkfURMhhLEiXRdy55nFdaPbtQcnb82JZkncxWQtQ",
  "key28": "2E7rarP2z6Mnv336sFmpWdcbaf4FXSxB8SocRvZjUgX6aADCvXbrdJH4VthVnzbFa6jWAqYgFZLbGo2LyHEYs4Ck",
  "key29": "4c1VKRHn7FWYfEBMoh8svD3tGRBUKNe6eGw1fUPZx1LvoBcRaeonztZpxoEcqxhKbTAwh3eJQLU4L3wmXjiJeh3o",
  "key30": "2M1qvBK5kSpddBKJXrRkcRQnX1TQTYYHBiRc5NEFKYt3mbiVn8GMsLwyBLAzhNFDBBUtvWN53w8B5pJsxgoYam7j",
  "key31": "65hnbTkR4NZGYPSYGGHzxzz75u5fpHQRcXVNddfxFd3XQCusfg8CXfF8nss6bayjLSyK3eHfVEDxooNJ8fJhrutW",
  "key32": "5H1GLjs6tG2y5Ze7rGo2nEBnzvVxA3qvwABCcoi7dxbBNVsEeKhqBNA13BoJ24acw9HYcscRFGwdP17AcYyNW9js",
  "key33": "4z2N4cFfd9ipzYTvSSVWN7KTuVGBa5DmWPAVUM2WtNK3FqEKMpQcPe9yoznyy3gx4jTcN1G7jmPqaGaQkzLkAdsZ",
  "key34": "EKhB7aU47dkfzA4iEXpZBJxKPYvWc7B24LmT6M7HtqH648ukeB1VxyF9KJU5dBthXQzdMwmoJJqi4fTdyoT3ZWh",
  "key35": "5FgSY548piGD9ca9TrY7MtDbxYiSuTMbEmxkt84KJqQE5gR2ayJdS3X1xDffmYqUTEVhpwxdXvhx3rj74RBsamQa",
  "key36": "4TNJ7DE7122TDQhAqCkb8NVmiBsnFT1PAo4MiVNbHt5GHCP8iNmWYqeKQWWae4rs9xRb4n4TFsJwkBnFaXGk1mW9",
  "key37": "4xtAAQLFXwGhsSKmG5X3FyXPgmJeaoLvcJXbsQMxJrCrM6PdZWs9Qv3yKiJYnaPX45BiLAB7MwzAwct1RFGTzqaV",
  "key38": "56K4VnuRMF5RDNrQSFoZk71k4CyZFja9nS5bdWwGRVBJVHSkRjUN9S63tmXVYQ9APaFQqoKkN6kAomgyxrx3oUHW",
  "key39": "4PrDeC9dE9bYEkVJEKKSAZm7erkN5pv8XggHriraMuY1nZhPG7LRu1aaocS59mc95GdAbbdd3P3oRfXjEGcvXTS8",
  "key40": "3pzQ5oVa8xsoPiWhmN2CUyvPxdy7RomX7UqaLSKta1nhgUesFo2i7sBqy5L5SHJWMsiqNyxiBZi6JENBLedXfWjH",
  "key41": "2EdmTmvw5GCymxkNDkWLgtHJrUjGKygyvG3r6z8Tvob2T3UPiPSdbPLbRRFRbD3AD2gRQEo9ZW1QrGeU9XjLP1ak"
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
