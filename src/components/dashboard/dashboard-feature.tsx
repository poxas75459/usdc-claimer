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
    "N7cwn4zpAc3jk92x1oiyHF7CsAAaHEnYrJMZutNx4smcJQTGdxvdZqhSiPdidWXM3ozrJUNWXizQbh3UJYqj2eZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kyWxQ6TVSQtetucQwnKo57XGvDpcA2kYEqn9g8yX9DZ7Av8Fu7iLFkqiN7QxRoshVrWUNjSro8XCwwgK47mZ9Qj",
  "key1": "1rnHGGbmjYR393cLdLy3W588saxWEtbeVzT7eiFjLudZS2eGw1HyTTcUXx1tqPvY14Gy1gHQRqaSSsGqFTmTuXF",
  "key2": "2c6LY87DWY37MHYBesMhMYDCVL7ePjzCT17VhBPYNoxWpaT5QGKYPpZZcrS64dXNTKydwUmgC3z7L4QB6VwrwBBR",
  "key3": "4A7GNdWdtWijUNbMs4Uz4qW6DYita6u92P2bmS4itJtSgqFhfHz5AsD4zLiwnkrHSHhBDgpT7kCDEPCH6NPBhq2H",
  "key4": "4MW3TcfEpNkUmQ4ErgXaigRuz5pwJQ7NzYJJV6MP1iHgJraGyFrs8GvQtNpLjS3xBAceQid2WbFmXW8hcnoQqxvC",
  "key5": "HN8qEg6QSGP3bzkVXZhbq4fSc4mgnkFb6UaGesvUads6NTMdcViLombymbCHTYXMstLc7f4jYXrvMkLB6gRupru",
  "key6": "PB49HPpiMxmfqBMAxBmg4nz61Y5vym4RghoJawmtoafppEUrx55xUT1z6hEMfxQS6tv1tLCCtr1J1BTryaxunA9",
  "key7": "4WWPctBDgPG34bHuhVwpQGuWG4dDgNLWzg3o2PQTbcXDqSDTHrMPmw3dKz93bAk3sG3gzgZXznypMBmLo6dnBytB",
  "key8": "442eYj5y6wRDVAXazJDjevgCPU8CvatkLNv95BCP4bZdLKh4gacKDKsUnYaJrhG7ZD5DnZxPnKKkjZU7oEKp2qrF",
  "key9": "2rs8PBi7MxyHbw5BpBYPu3m7MC5CXQFNcvHzr8KXiE9zUU8xeVUx9fLySX2Pc3s5osnbysnfHgLwmmW3kwSaJoBY",
  "key10": "3R52uf7YtM3g12nKBSuXdzKW1oncsw7127G2idkKsWzKCCpBVNDP6pmEo7BLGDLsyZpPqqRBhAGuyinDvUkKthqT",
  "key11": "3KxAEt1NxjMvPpNTN5q24GPCzorLGWEDU2cMmLozQbUyTqhaTzn6Jiv7nafmZgpEb8VWRyh7tRqi2JT8nJcpCNEx",
  "key12": "5aSsPgJniaux5PJvtRafRSifBZ3JRwSo3hYyLQ3Hb6NoDryZ4XiCFbN553fVYDf53DeXMB1pNwv7vKqpgLv7dRXt",
  "key13": "52QTj9wqgPj1QxQGefMMNvH1etxZ4n6ReKXfNqZtA3SHVot4XeJjgqjEKoP6Zz9oWJHgBJBnfqdHciG27u2Wzuyd",
  "key14": "PJNz6Q7PwcHCHUpbWaFa6LKjz3jmMBosvdHX3pC6Foh5yyaoawojoZvVuxarxqJn8E4zCL3GvPRyWWWheyjMDa6",
  "key15": "4YjoAT46gAWT6CxGvSK91dSEeYLVG3v1LCpFwF1xqgCJnK8yYUXCusxU9dQhkZSaDU75fo5be9E4fMP1r2uiRW9S",
  "key16": "2BEngWGbkFreiHuUNKPgu5owCgp4ibNpFoR9zErDCX69RpgszKwUPnZDpX6fj1RSxVtR82dpHXZxNq6nJp6ht2vf",
  "key17": "27BCN9GfadKDdShxn7aTxHAf5TGg9Z54V5YZBYhk81bGQeho6T6bXiFHkgFyYrknDGJUufjWdxVNiyLsR1bFTypJ",
  "key18": "t6RF9Pb2F4dTMbTMBV4PzN6UtXS45M4SXFqeboDarHhqVHHLQDd7FufyuSLomsS8mqjKYtzMfED13QwRz45g8PM",
  "key19": "4Co4PYXZLc7kz8x93Jzs9YrFbEVPv4xPE7eKFZegzCb2grefQjGp87ZkTCQBrdkw5EWkr2Jcq9rtr7aN2ozZ32Wj",
  "key20": "cpgpKe6h3K2VAxQQQspdqmoogFyN9M4HHzsQSCpw3CNUzZrn21Ly1U5zcTK3BPukhgmQnNKgjqqHjFfV7eiUTLK",
  "key21": "3CjxZUcYcPwy2o1kW7Xk43DAwFoxgzSBkXUfMWYgY4qmMsRy6TrU8mrzhNRpc7PJ45K1KG9DfdBZjJFqEHSJ3LPs",
  "key22": "24nVzqWtuLrSi5D5tZvJo2Abys1WoUgFfTYQ8ZMnKnKG41U4VnLFto2nCZSp3at4Yq3QJfNSuDUGwgdEGRqjdvz5",
  "key23": "5nzass4gFKPBfsVwPhBRTFfL9qpMBMmyCeRfQtw6Se5T53HCgUkNrfr4KRbyWJMV33Q9pyPv65MvNpDGrozAsQpL",
  "key24": "3mCs6Asupjfcuu2VemUyAEq6tP3yC85knt53cLS6eZqA7hNNM3tguiXswxBHmxXsBfZY6XcpRFMAPP4LoNmq3CrT",
  "key25": "e4hMfYaQ8xnVmQc4uZFF7jmzM8Tzgx6AjK8pRHkUmePQYgG2mNmBJypQpGLVmMaGipMZKsxfu9ghrtp6XaS3fqY",
  "key26": "21xeSQHVvMFxvupSXTmdogHJXPzzmJvMbyyUpmyyQEpzD7yCfEkLSLD2WS3yytPAacLHVVR9J56CtuU9zZZMJbgE",
  "key27": "3GUNvMQ1Hftce7Rp66AkpqWSz8imcQXux322W8zREihgWqYiyo7Wnv3SSoL432NFJYe7sWsiKrL3yQzMK5HhXuFo",
  "key28": "4twfmqWPpJueuvyyT8YvVZucgAPyoDg8hLSuMzha9SFYwrkpiZvZdoGe5Mo79m8KnzYiwUjQtgMAs9tVhJbLydYz",
  "key29": "24g9W4GMTUQHMa72QetbUM3hATSagQC3e3925PxDeTRztDMh5yVCqkPWJe9HWZfkkA7kUf19zZVuvHZvYtLTciwb",
  "key30": "2yYrRGbYwQDUW9p3dDgNicrGnpn5HuUwEM23UXfAEcX43hzS1uNHiL7C2hSC9peUXcpFgVA7pUwvuQPtb8hdWVM2",
  "key31": "4uFHiNABwwDdXDmboxT5ZEkwFQxtqcCp3Yh1zzefjXioaxquBUwpV9pH8g1hqoLpgLNzQ1LQZgLq7Ptya7qFgQBj",
  "key32": "5P7PAjsaqStNqAVQpn5kpQCyVrAcz3kBz7uBB6NTG1neR1MdZXovfGgYievxBZYqVeKNiHA8vdRnuGjxaYNbFn7V",
  "key33": "4Jei9incdXqs2EKC8MqE3fLkuWxx9k2n4cmagBPvm3EvBgjeu6tMWckJ4DFwv3Frfd2hEgzPa1tKTuLKwPmL3ofX",
  "key34": "2ySpgKDbT9anvQeaoS1sk3Fw7U3LwVCc61AySeF5CXdQjbpbZd5jkuyzXKYK8m5wbc8tz3tfidGiCT3fqE3NdFVs",
  "key35": "4DpkHyw23LnFMtNA92rNEpyRxP1u1k9kq8xtvBGBt2AG9P2ffiFTgBwer1G5QqwyK3KGQEjAa1hor4H8euS5vrak",
  "key36": "4bamQmmLNUYufT4SBScbQuKqsh7bV31jYtjw4XZbAV9qSwuTstvEGhxPSmQNDBRHzZe25UJcofCxM1Wn9i7xcyTu",
  "key37": "qor32N16NiNGHo4vbJAHsFEZCBcGdpGDjXmp6CepchLsuwXwFC9bzk5Mttuu88FGz71ctBXjKaiAEaS5iL5fSda",
  "key38": "5s3UzGLYxVMvo8tPznrfwZuCkG6MTBuXzFhfRnhVMXTRFC7vcByHSdJ5G6T9mAJ4cKoXLcfDUmp5yXFYWiJA9BsD",
  "key39": "38vooHq7nAxFmwu9atKyFAP9LyNp3hsmpj5A7EaSpy5qi2dwwMfzKnpNskJ9ocZa7Dxee97MHpfk9oZDqmgVvEdX",
  "key40": "5ri86vZRLgVToEU7KBxMRZtXSmxiPjyoA9RfUgUASTZFXb7nB2p3WmL3fH7C1uHzfhTRLQbGPCmcMU3QJDut7zhK",
  "key41": "3wBUAcA2V8hcG9AAD4fTjLjh2JpTDx1uozR928wwP9NUejNFjHFsYbUoVXXUc8HGQfnLTSX6X1HZDuQcW11KA3x3",
  "key42": "4k2AoczUarn4wkET3xBTEqwpzxGw744DJrP3iJuhZTuhBi9uRAEUPgz73T3YefZAfyScj9jSjxAUh3QjvF9nq5ou",
  "key43": "4QHKuemX3cXGjyjYt6pYS3eNyhewQMvYumWjMagmLzyq1N7qwgDnT1bM1J28J3PzpVXW1pKz16zdJ3iijzB26TAM",
  "key44": "GciZdWrVdLo7UGmhfrpsgkEeJvEV6NfgpHboXCZVv8X3hAyEu1yJRWhBbXEj8nYvPz4NNtZoz4gdV9bYXPjYbmo",
  "key45": "2TSsGMsUXAZyqkpoth996ZLP9dE4V9xWibhGApQg9eLfwDz9K5FQDmaVr2WMh75vFrDQzuvgSRjxSnL1L48z6moj"
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
