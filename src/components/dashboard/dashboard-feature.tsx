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
    "4fg3sH3Zkz9uJVrPVcC2cdyKPCZvKgej7kFxzMxhsD5wvPd2rV59tikCTBXncASP2yXhM5uimUmFDJGWzrDdNS8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oP8A3JctoHSPo5Lr3NJHF4edp7iYMBxBykQCMFqMEi5m6SKwZNxdWCDJfGigJsNGvJRBPNM6VU4wbjipyp28FSA",
  "key1": "5MSVWpJ1VBQ6krPmGDQQN1xamNdwtBYdpDGKVjZSg9WDKjLcPj7onwUYkCCyQHSLr26Z4qDkY2BqYWpLKtnqffwT",
  "key2": "4KfkKLgfMUn3W3STm5yvHYBFmj1oSY9xWoGmuAf5Vtw7Xaff9pZ4HvVzR8y5rB7Cdsxx6Sdnm1MrRHY4Gvo6bAWE",
  "key3": "64ZQ7jqH2WXz7fokYK2JzaEVCAn1nxaDLQ1C19NspToGmdMrsHkGRQB3m6QNSCZXTuXLhakTrqF569GaHEk53dyX",
  "key4": "4XxokmQvYNu1FBanJWYVWoa7t2a6roW23gtCt8jsFXc7PjBwTYW1zDkm7DzU67Mfss7BAs57xKuJG1v3GS9VVa6t",
  "key5": "2k5j9jphSTxCLLwo4Bk9tmy6iZ8q75aNEVrhoarpHekjmrSchJC58gGWkFxcnJEQU7dGVEhdZkF9HkFuKLoEDSxB",
  "key6": "3e4DfKerrpPJGYwBMdLT5LZUPYcUD2FwLcSN7JYyRe8DarVkB4zQ7pHo4HGcbpoA2QM7uJ5ReggVUoZAubQoSfwm",
  "key7": "53t92SX8Np7UYe7pZ9PExtgnNG2WwU1rb8q6BpkTsxy7Cv4EmYVVhb6TXWyYX5dbFZBXz6RtXnPZXkuYRLJFLSqP",
  "key8": "6346binJDpnE5Th9wYa1LzgDZRUWu9Ga4YUoeCqEwJjirQgJFpP4CmR8Lt6uTmkSBgGWxJ5Ze1bpVsdJ3DoeGUhW",
  "key9": "4M3iv64sAMfRoL4dDbjtJKrjumGEpWXLHrWjbzGyEveKRWgtcJYpCEsrALYaABtFZncAna6z5Y3BYnimG1xjGPN2",
  "key10": "5EnJgbzCMAJLqcQfo3UXqNystYk1s2zvs9TnxxsXUL7DfbZmQQkXmR5htM1v7JaeVv7ZUGtKAqgWQFGD3KZYV6qK",
  "key11": "4n4BRRvRpX1BKaeVGE6ijxM5NsKa9WjAeCUWzXRuE6N6QGb1Lwe2kFZMHdC6eqY5oLo8BqVy2JjGiKLyzwW25N8r",
  "key12": "EgYhB62kpdtxY9CYoeTjprqRTmK5pyJeFMRQxF8vZwZmf5CDje17sz6KzLHxoi6pkWtvWJ5EBitASEwK3EjMa7C",
  "key13": "56A2rF1E1F72KZd7rEYFMF3mysqmaDHSGeQSC176PzBbsy2iwyD2sinsjTs9zTvAf9MRPr3b7eiSNuss1TyLgWYp",
  "key14": "4Nd2LQ2axQPXePXWkD5YNkDX61wV19simKZAajdyepxFvV82NAMDRiBKmbHfnFBLseqnfzBVh7uykqUepM9juT2A",
  "key15": "VrUR5R2ovexgUX8wwyP7sP16uxcuUhc6zVHpcoKLgffy7ufXAcgXAmM4FhYMDpqVuNUP1UPB1ih5Lci4ccjNxQc",
  "key16": "3oRa6Qt8e5vbhcZPdzMDSbRmbY5aqCCaDnYvz1NmW5UbgHSdje89SX9zkgNYv128EEmZtmizhdP315nYPvwez9h6",
  "key17": "2QsWmuLv5mpUDb8F5yjajwfhgjeEKpiM8t9rDKzEdzyhEGuUqmdxAf8z1t1VZFqVbwKP5cpZUKHpFNjeqUmrd9ns",
  "key18": "4WM1m49RBmG8HQdJqpuwShYMjk3ZaKA4DafdA45SBcVnsRHYHcYRGacfdbFik4fPMPbHvTGs1Fh2YkHoghJAqUVv",
  "key19": "3qKe2FQjcy3eJny5gcM88pgVA3tx2kRn6HiQ7o8vy6oyfrUxaGtCAwihkXefA2TDdJorPJRNDsF65HK4NTTgzvHM",
  "key20": "3mR36oi797qdZXiqK7F44SWidA8EoML2vQobUbAGNcgoEQvjtyoM3bK4mv3A7itEoLDRcuxWznLSZSWbPWFfPmGc",
  "key21": "2TbQg76GkU2y81QjmMrssdyJs331EWJNWi7f6NshRdYy5o9pMBkjAYw3XMLAjFRNTUEn6B49iBdTQq1hwYydVxCV",
  "key22": "1GF69Fdg5VrqcenpBeAMXeLmSCLJ7WWJMYZXGtv3hqdSiG2EJfCofyXStv6YUwbyrHTxofGcDs2C9w46571U6TT",
  "key23": "4viyLKSS4ZBpkVPqWRke3pCDaoSdYkXnz6RtzH6YYGtjrTKhHV4LtrrCpshhU9oLkFChZpJtzpNEg2kSY29Uhw1n",
  "key24": "4i8aDYHqG332PSQsqwvmkT7eCA3z7JnuvZSePVR2EYmTpPSXaXCcBHjQ2KA6nSf2poh947kiYgYViFJgParXqDtx",
  "key25": "3xfFsYgt3M24NcqHSSuQBQLzMfFyarL9MQNUnYVaN3rsRsjR22zAuLTd44ymNeWGDgh3GY4XqZxHEjkctiKKkcZf",
  "key26": "5BSYyuXef3Yp4RkkSvwWEEPt4ZNUT9EVurbGyu8fkmJEMXrvnQmcsvDgwr8a82S4GtR5trah6sMCLjDN5PfypAbX",
  "key27": "3ZtesaPKhbN5eHNZwEPQ3ZAc44AnM4CxakkWKW9oaYVCjgPSZvWDAm1wmnrMusX1NAe56kVqKLLJWYJDwZFKBPu1",
  "key28": "4CS8MATDQgTb6h4M5hJTf64QV9aZQugP2LVh9z8mQtAqW1VePDQRSRB1ghfHfN2eq2ifmS2DeCeoopDbpNgs3nQz",
  "key29": "5my6ohKMMec8A5CJKLrJFJJNfbnGfwHkvK9RR2nhiFDRXtRN8tZSooGUf39WhiYNR8EtJHR8LjL8xxn9xG7XbvPz"
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
