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
    "616qLzjGENgf8DMYByhfaKFcbertxqrLXNZ1zVXQ2cHPeYKyJ5j7mZP2R8a3ZDzG3SLos7DHnhCGh5EvZDpUuwdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B2gASiayiPWTd7gQu3Em2azdnpZffmwFxaEGNDqjYCU8v9hNXnhds2unMmRagyeKUgGt42skxCMtP33E4SGxevu",
  "key1": "4x9QCHi9xudKFADVkQ7qPjqJELtPsi7TjuY3MYpYxnAzaJGPRou5jYf1WuPdyWLpfi1LfndpwJwtaQy54s3dR2bC",
  "key2": "5ji2JpVDSHcvrBZExZqdy531Bntt645PGWeu8wtZotKpxJ1y8UrcXCKHbFcE3rdHPABkhuvz9S7vNT2dd7qxqU6J",
  "key3": "5sLxp1qFDX8B6W8t1T7ZFbdPWY9fkt5Q4jiuLGytkMfGZzckA62wxmdNBu97t6Z6iNeCtTZjLwb5T8q13zRgGaJ6",
  "key4": "4z7VuCCyGxUUn3XxgV2KWhCpryuwtZqtmwMG7ZJ1FVt8yW8sAp994ooeiTtegUy3WtGYrN7FamPzFM9k3p4khwKN",
  "key5": "5JqEFZ9g6aSPGqoYimKf4hKH6NAu6TfsHYYBEiUyHHxT8H1nmi3d7L8d7FpspLPUDCfRPSZYNkqHBEoBLYubQ1h",
  "key6": "3ND92Dop2Wo2y4tSkWMAcpukeXreRDpfaXq17jpUM3CCt6z1kurT1rVHtGhNFiNSKjDUnUEaeHUgBghuJRjkxgrv",
  "key7": "5XQojipDo9CEDwFGHQMtMrE5syKcgjKoEcy6biSW6o2eaajxHgonk2hb8KQ3cuthj6AxUaBnDiUMkvgzoEj5aceR",
  "key8": "4yzimL4SeGFfiRvb8yZRADTEvLQhwXa7d382g3tbL8aS9ehzHyB4FdkVUjLbsQBsGJfbAaspGjxgv3KmgLnxWDft",
  "key9": "5MUJMtntT9eVE3a8nywPhVdc6KCJ8mDiWGxfSfmZsr2GXcDsYwakMYmkseU3jnwYsJD1MBtbAWF5ejcCuM2mk2vP",
  "key10": "3zKynT8nKk3jswDneZPyiFGRYvUToZ9oh72UnrT4WCp9DDtUV2JjgjQMY82yDXRiwDW8AP7yhfzDfMZFwJMHsXmc",
  "key11": "2NNquVjSft5SCZsJ55uYZjioSu7wNSzma5yMfhYMQE2bWtB8KTZg63KNXvkYjX43NQo246AUxSHayc1QDxiDhfK5",
  "key12": "5kTjQdoS9WWJF6e5TfKgcpy2swVP8jPfV6otKAFSuLhPJp8UTVbmUjTJS6Lp9bPSMTb2YoHzpVo13SgeremRco8J",
  "key13": "3xGuDu9oZy3bZT5vxmfEuxy6P9Zj7Tu6EjNGhNjYRojnpR6FtDS6QzrHJDPCXo1khgYBpsViEBPXPf3cDn23A9tN",
  "key14": "2KuDy3QuvGQ6K1m5Nh8tj6u4mgGHyZeZTcrtz2J2cjymTGUpyreAUqcrEJx2NeEVr4n6AdfMaXLbmEixoxEwswWA",
  "key15": "4RQq6y6USvYFQFheV2aGbFh63fAZzbW5CUbzhWQ95DpqEwNxHGSzhHkNYFY8oGe3weQMwmna56q9d6Kj1bi9LtXi",
  "key16": "G5D22q1oGwvhtHZd4QQEJ2u1YijuGczBouoDC6DBVjG1JG84n8bvsrEB4UnEExHRsTQsyP2roL7aUJZkUGdaZg2",
  "key17": "3NhN7vbPEBLw4Nga6qGuocsn2D3fGyAajuToXPAcUZfPBqKDyFDPVAGsK2fA7KP91NWYTDVeTeNeLhKTzS89Aa7y",
  "key18": "2RddLR7jo52yTKGXW8pfdCn9KMcdUnQF88XWwMXqFUZduVfNmdJA7HsKFsiryrw8HVhC4vsQHPMZkbGhzDem9fxh",
  "key19": "b9QV3SMgVHeh2usqTB8yDqpxVALT7QzK8qWvcBNbcF5z1tKwKtKERh3jqFtQuzCx16e8fDSdmK83DuzaqGjWesJ",
  "key20": "2h25j8BFNsLz6zsTyNw2PGwYi75XfnJpty9UQWk1Udp2zumEDr91CZsBkCfmKZfQS7aePNx8xoKgnUz36rheeZ59",
  "key21": "qmJLdapb7s3jb6xAjAkeDLek6oUvpZrtDysDNHDYpd9qETGkTkBWuVMdoZwhQB4RYyB3pEB4szgUwgtButEHxFa",
  "key22": "2QC8qKk8TgE8NLSQJeH6T4RLmJj8n5aNqVP1gWHT5WEBaZCHs62yxGewMfj1zZmQNQCSHGaxjoX5V2v9RdpFYpRK",
  "key23": "GrNYrasdthDREZJbWhLbYtJKsbKBM9gq6WCXD1scX29vhwyPQ6yu6L6yUWEcRTFGVLBQsng9g4U1MWfh8F9LpWA",
  "key24": "3nvRw1S7EyqueQo3Z5UKdzTJkPSbiYtBh3tbZp4L7tQt4iGuShSqNCtJrnFxyF6n1SjvWxftTX5x4GXkUeANdbto",
  "key25": "5Re8bnNnv6KLCnUWWkUz4W5SVMiiaiyu3Uj324bVzpX7jpHXFYiutsNWU8gVhNRoCPfmHgcttWEvpbdPU3rHJdHx",
  "key26": "2ap9BJFmLMh1iNtYTQQx6Gbf8b2XbLa7dzL2NtH4RsCtwWxfkvZMsMtTRdaVMoeBwqWN4YGxXYsYqx9KLAhhinFJ",
  "key27": "2aeVBzebBaG6c4VHDPcXgvdPXBiQeNCqL38JhNvbrFPX1eyqnAGqqDGjj1csmXRMwmbWPJmR1vKDrrzyrpMvkZLc",
  "key28": "3snpy9kEU9EN8Dbu3mUfQVMMZcsdpWEhSEStLUKyMix7NovCtauX53NpLJyfK837LgmDoHVB3KLHXVaaJyAAuKQt",
  "key29": "4sGf1xNqaU9SGUuFLHypM3iebfKYjgjvzQFc2EdaPo4t8SGsBtpHWEq7bAC3JKJHJ44Tu9u5LxhFHThxCjo8Cr2x",
  "key30": "5tPTxpeK7dxdwjCxKrdFitwEi9UZfongQpEmTEB2REVvFDpVAPsVPjpk827txsGPtrQY6PBXz4SHb27LxsvbqMNy",
  "key31": "3tGTRr548FfaY3ojnJk9rwdZ4PvB3qdhfteCAD7qahgEebN2RfQodVSYuYDpHVFBXFyAv6PDriR2sCK2E12xvQL6",
  "key32": "duviZVGimUEv4Jmx6XvScswqHuuMGyWrAdCNbJPQ2Yi4bhUefXJzC2fhzUyx6w5krZtMrxZT2wfF5sTrZXWiQG8",
  "key33": "2DZ2jUSt3kNYXCcssgdzZkuGuC5fGAQYxpiXxKrrLK2Z8T6dyfnBvNKxwyzm8Szz9wkWmM3HcqKaHbVd5AosXcyr",
  "key34": "4yyDoHN1M9NisAr7TpukcMEGDAhpdgvBJyHgJAjRgVcB4CrtE5dinC2q2JGBB7fg8C1HZx41VpB6eBHuDKPgFbpH",
  "key35": "57Mmtcoypo18KpwUtuoohN5c7rQXbhrz5qWCXqnzCim4A5yX8UJu7vL7skoDr9c9LMUC6cTTXu16KnsNzn3UZHok",
  "key36": "4zkMbDC2ahsC64GGXj9atQ5U2LhDNHSzqvwZcEn5CxBbozPTfmNc1DMQrqCE1LVqoWZsbiKMzJkr6gQYfvF8xzif"
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
