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
    "3Xr8SVDxfsJknVL99gwdHEa8YTfLFoF8BGfoPFKYQFVqaCMC4GebPfYWUpbZ2DfPEd9cYFfRxzgh2fdiwq6hqZP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdZuBPwRRPSKs7opiNSDkSZEjgGYtQzndGjWUCnyxPbzT2nkhta3rN57GrYY3Jj12iguBX2DXUFPZtBepKYK3QN",
  "key1": "2HbMBYpoxFVq1Kgvm9J2YGcbBtssySgZPJMqBNHyffKpuTK7PHsritdmzyZSdy65PsayAed4pM4SXB7ndVu6WWhU",
  "key2": "3k6jTFPC7Yv8T3NZA72KAxLMXGGZqR5FvQGchk2eEQqJqZ8jahRePrrLkp6Q5XG6AUod9gxesuBuEz6e9nPXqy27",
  "key3": "2bawCNtajhKxdnjVdpHEuU8DURYiejWoN4ds2GTXGHZL1AmNDRA3oq29GzRJqzEwn1BTpqzHeYM7MMgqyU7BUxZ9",
  "key4": "UHRtcRyi6xmDQa3YjENLvzmoDAaz6RCDuvR4u5qm8DyV9oEiAsi119FSQiHqLQgF5mPoyWZWUwkBVBgfZiXZvN1",
  "key5": "5BVUXGK9ssVjMZsZ6pisEgGNyQ4Z7auyEvpEc1G9cXnvEAu7nBPLPkdwagqx5HQ12VVfpzhWguYAM9CUX1BrbpUc",
  "key6": "5Mf2UU1TsNqBgY6AP9XXnqg1FRr9toRkV43A3gx2g79WqKoai3H9omUJ4ZKLY9Tq8weCtzXF1NBL29wwGDRhStNj",
  "key7": "8xE3GN3NTyD34tcj4UYkS84BAXMTxqVv1mJrdjTCtdh6un5R1xgStSfuJuhT62RJt1aFea46mzZvMoUaYpoFmsY",
  "key8": "5J8QvwxYxwhsQZ3QhYvXT1Ct2muvDgZf7dzv1jvGXP3A9GScZe79MjYEvmqEtq5ziscg83sqDo9ZuuDkP2cntmpr",
  "key9": "275YUzUwF6JMDFiGt6ABzcsJWepxnNaRCh21ywZw6tU4bdqGcZV2Pd5hsvbatgdaWDZLGAGrnRshiiBiBAAfKfaX",
  "key10": "4mvJpt2wsv2YBzK5TfVm3SMMMCAgdPsVPeH8Kqv1dEJ7uFos91BNMAVK6Q7knJXyKWx4WsJDj4Gkk1RukWTkbXL8",
  "key11": "ACUyRD14MtqU7fhHULdS52nBMcHgXpmqPJ3S6iQ9Bng81KBKuFBM1EMqhyUxUynmKqmYFK64mbCoJMNd4h478UU",
  "key12": "2ppjzx642zXG2f88ZJ6dd1hAgftwaK3C6f21XyD8PQjbnTxcG1RyVprqQ6ML6ma15cfJ6uKzSQF5iEyZmSw6XTm7",
  "key13": "5qtzDtvGZTVarg85pMGqNY9o9BJDehgdDNmVnWYk7ET2LY1XRH3po7n64NX73za9NhdewpA43btVfaqga6PcRrPV",
  "key14": "5DeUUPXPd6KqW7dndbUXkECwck4cmJhzPW6Dz98RpjGZQusnVCc11qPbXp2JsuZze3hQJ3ZaXo4Xsg7U27fCnpBk",
  "key15": "5qNbsxTFH5YFFitCZ97EH9HAcPDwitXz2spFsh2wtUuqoiUNixGKjNLaqgnVH1YJN5hJWwrX8V84n8cuof7HwHg4",
  "key16": "5q8k5cYAJTnQpM65FDPzxupHpFfG1xz1cbrLnnh9fjPnuFpgDpMt85P8EPP1KEZLxShSdSc14u3KGM6vfdYwCQPL",
  "key17": "2w2UtRZ5Rmg32w1bxgYZi5f8h7McGHupXMgs711ruFCMZkvixe1V6HuRyigwvgVK6Gg7EDwri9bno7ahyAUdzRAa",
  "key18": "NwQ1xqgtGva7vrMqm5iNA9HzXUthKDUTxEMB1dnxHTUDADuYX1bfM1FjdMrmVNK85mDtdvwmWDj2eigXiBS6k52",
  "key19": "qBCjnTk6j9HoRdkdEe1JCaEBFLS1MeJVTR7GPSpp17o24RYJ39UkkBSBLThaMHJBQqNdWW7i6qxGZMDH3cYKceY",
  "key20": "3xEfVFRDnBsKixhzmBC86n8uTXvZCozzDqLc1FTHdd5XmZkAZTEj7gPnydwC5mY11US9Z3Q8P81LHmi8yyDFd2DA",
  "key21": "3QrNbeX1aE3tfvbv6xAsH6LW3j2PFupxdWMohURcpqksJH6DP8w2dg3q4j3ioeADePFtozo7eepqbw4TosUqXHkF",
  "key22": "5aRDwtpkC5kDWhTpjh9jmm6q2KQFWaBtaQyrQ5L3PpBdN6XwHz694jFi2CDc2DCPJjTTnsKUEpTp1SZdnV5HnNHj",
  "key23": "65GG2Qa6vi9vgRPYsWrHVW9Z7j9Uox4QeaZUCqBETaweiWbdAjaCz2zXcuJix1NnKWd5BArmArp4PKzxSgkdM5Ze",
  "key24": "rRsZZvCWYfmV7vNbkc54pa1Z3ddwN7aTLiUM6TXQESYDSvhtroCvBA3mJNqr9BAH5Sv4m1sNdi6uWtGnZrnB4hN",
  "key25": "55YsMiJCUmeffAPxMgxq7UuzYbYrJx1YpYqhBZyRU9g5aFN91Ld7xXyfGVoLMnBZJj2AHqWEL8AVPTPrzMU3sM2L",
  "key26": "2rQGGtqenJYrgzRSsDdy37du6EBq6MAAkdeVqv82WYWE9FjS6vVffS4LUfeVTkz3mguyYqizWvE5Prgig2WgJTnA",
  "key27": "2vcCVe6t2D9PGvdpJxX9cj6ysNjqy8fxjfFqFyGdssKuMGkJnnvATvpcxxgz36TezEP6wKrmoDjnGLyMr45CS5uz",
  "key28": "NS3CzULegWfMosKZJF9qXeEYctaWb3NzNBNk4uv3ZiBRMLLd76VewAfx1AFqx97iSpsLbH1knDu622uoGcAEvfQ",
  "key29": "5fzAdpNeETUfh2c4uMNEBPEtEZoT2hRDsPyAxcnwyyNnmTiWP3jsKcE1AAvXoBXtRShCzu8KZsQrqG5qtXDFk5YB",
  "key30": "PtBXHuvVQMK87CyS5i4dTVuwRLNkeQXYkCbxjyCPN8N6zxXLdrcJhP2Gok9YFNENcLNnbincVMsuYDFcrNCNC4Q",
  "key31": "2p49Pv4XrM4G4ZMV6gZ8FKmJhps4C3adHeqrtYqupw9Ef2vDkRXPi1wjw9ze4FpWm9NWpACtomNHQZPoVYdGNHj5"
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
