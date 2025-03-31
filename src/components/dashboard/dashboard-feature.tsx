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
    "3TEzG32JsFmS3f9U2CEX3zX4RxCo3k7QFDk6RNr3ZdeumtrYv9Neqi3bSVgqhYwzx4pgnXb8nnbJt94uGibTm4Es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VEYpSV8XNtT3h3LhpGvr7u5rXSWNMsQethv6tVN7eZq1Coz4JQev5gP2H32rj24LWFrJBPvxQR2pzzsc3hgetYy",
  "key1": "4kqPKjw7L7iv2Uqeaadiyxi9LztXREkgDNbMurdrd5ib7Akn13xjivqTpng3qMXcBGdF26RiRdzJfqqMq6AnYYGa",
  "key2": "TaoQXhXa4vS2KpiREn4QQ6P4b2ro3uQmCTRGBQkqu6qZHvJxiLdrpRWtd7rpw3rj9ssWvidRT43EAK1ByWTx1bU",
  "key3": "37rhV7DJQ7dR7AwrSJfcvRbeAzybe5Ez3Emd9x7AzLo9zaY4u3MsKWqVtTaFvKxDKMVdGkctD7eCbGqr552mbg25",
  "key4": "5MSHfDZy2dTTVgXekTEjtMgGc9JV8rySWre1de6doeVRJch1UAnnPZENuKjFHMh4EQAVK5doLCyZzZBQP8vUvdAn",
  "key5": "2D6QfGwZ8NE8TE9o9zbv2EDowWCy5zsgobUiVbRLs6MM79Cp6AJxdA4FFnMc3p7v7Rb5CcCJx325mz7UrbbWcwyg",
  "key6": "5crvEa1NEHFLSxDnzX2oT5DhF7DrRrHLgCaJGB4TVbCRqqmhv7YNetX2kVnzEtJqf8iqQfRjTkMFYc5kruN3o7m7",
  "key7": "33mZV6uQSKGNeEHahRBUaMBP2UNtjmEmraaQzD7KuxA8Zvrqb3frhnaV6RcdLrNrDQMTRCokeRp7eXHkAjBKmGxG",
  "key8": "WCD7EaMfDsXdNNuqhZ4t4ewCedvV7C3Mh7N1xwHEb3VgoBZ38njRgEnaMTeLCpvZqY4UMLoRRafmBDnJYuN6xn2",
  "key9": "21ysNmcJPZVB7d8hGthUdUpmozQsQ4bVfwmssgQGQcLRmipajfAS1A1jFv2yaXXggbiC8WWRkcUx8zr27w48EB42",
  "key10": "4TsAyrFTcV5xPnwpMC2wbB1vn5PiusubgHRQHxftngxVpoPgLdVAAKiptBfkXY9ynjo6WCodEQis8dvSm1o9U7r1",
  "key11": "3HS8FNgBinK8LdNcRD9WH2Pth9hGe7XWeSAou84KcP3MPMFzmou5GnUBuKy8f53oDVm9ZP2stV9VZZppEA8aVzAA",
  "key12": "53BBeWR9ouoQ8mKaLoruXXrvGxM92irB533VEx3R3c72dYEqNUL3CK9VdLzSq5TB9e9WLNwfDjUtDK5U22fAJmvP",
  "key13": "3BA3pgb1Rab71vonrMAoLgmdRvGNw1t3JLzRXYcWeiUti7eToudjz9BeG8iodg8Ux8GH87HjSwpSUEUKU1wxkzxp",
  "key14": "56ZjhYfgoHn9oVcmcxy2fn4LTz9WNQXXYWcYHPrif2x87pydRMaLPsZKGCNMbXS2SU66Edee4qpzX6Wk5wR4t9KM",
  "key15": "5h1qoJ6WcqL1yyRxSEdeW83UTHkcyhiBEJ4KiQca2JzKYuzeJM97z9sx8B1RMa7ic5469cr5NdmqGuenPXwKZZ3Y",
  "key16": "3vPfpLeM8ddjoiMZuLHQnB6rAtimdhW9BLHkS7xdNAfsEwLQwEKHvUFDxqDJMQJ9fuDKCyxn1aBjG1mtwDpcDc9v",
  "key17": "Fip83nXC5tDVJ4j9naFSHT6VDLm1Mk5sf99i7pdForSDbbYEDR3akbCWfiZ6fuCPrw9xhQFGLK4atw6RJqVkGN5",
  "key18": "2cHxoJTpiJ2myHrMVHSTx8MoXb558e89gSdZ3wZoA1XBWTUwJVdzdYjFFP7R4wQ7Tvt25B712mppQg8JJZ7Ab2Si",
  "key19": "5A43awywcUMbKQyrbLzHXmeE6aLXPGHJZ96e4FiARtsP1rv2ogMCHh5cBeAUMupxscVq2SAST2YJVN9wfmoncNAH",
  "key20": "5uAf67mDCDBcq11aakjsR53dxRSWpYnYsDR9yXdFsE2TQ8bic5P7fSdbs4jZ24jX9CTRNcWProvjK82mEnB8Hegc",
  "key21": "3x1SxwZ8xzF8tZdxga7vB3psz7Zra5a5Fc76cZSEp4Lvnux5AjJ1nAcuk89NWYWr6wQ7B7kLrA4JYL7PGRjngmZh",
  "key22": "3YzxKJjwSeaXLi8cWEd7sPEGE5aTVYgi5fNy5a7k9fEmgHRiVFFiUZMxjQeQQS5L1UihNnU23xLa8o2fvWwZWhZF",
  "key23": "3UayZnatftXWc5Je4Fqag6GyfAmca95FpsH6WqhJMc6aytnH7cPEkvo5jfxHotVjF5899FoxJmdViWpyWBSuA6Ta",
  "key24": "5mnKLbcKG768oix8m1XX41Lw4abfpRcfwCfFT64twQwCABitUE1gshvd5Bwf46y5VHP47miSRdxCzyZWF1V2YafP",
  "key25": "5QirDdTVyvkiyYFPkeqNPWCCw7Qs1KTz9MsHhWPC77GFheDXnaandrDxKBUSsN7tkpCuzNJvDKpX3QFtJL2UZXHn",
  "key26": "umZvwRgrs2GMtufQNJxLmYAnGM3o1dLSyjrwwW8owy2Jcx8ysYtNMtXtCZniUUDk5h8WhSRFmb6zNhWVtUc9CPN",
  "key27": "3QxhtHQFk9dzJFpayWknpPZ9BqSDqVCK1fqbKWCmn3HrCWxtXNqaWNvHfvrTefKFqmh4vsMwc9tgkjz2o33CR7gL",
  "key28": "5ms4yA1b4k6oMdLkV3vZQquRphCyaUeUetwCqvFLsQ3aGoE3gwADXbgf9ouCCeDGk2kqM2MJ9AAKZL7QUH18wQob",
  "key29": "Y4pTuZzcWsBKSjWv3KnQAua7kv5WJMazYi22f8kmxX6cqh6j6Yb5oAxhbTFCMAic3qthXi2aS73ysJWuZxZvh1A",
  "key30": "4iiL2EXijvCJN7TSK9nsYXEbJQrwVJ1jWpAMUS92VUmLb51SprcDCh8oCL8amfCYjFBJZkT89ZEmNtDKkW9DTWFp",
  "key31": "2HYtncjgoB3aGbjkZy5jaRn8rqf9srkU5REmq4ezheF1dwC6G8sz5cprcnVKYiSpD7tPbEmuAJvQpiAgY7vb866K",
  "key32": "4WZkuKkjXnzDEbFmiyHduJcqS8WoWq5fMZJLYpGBBqeLQp2YAtJvBWMqM9GBkyF44mgHfxaQ7QVA7BuhCp34cvVc",
  "key33": "ToDZkgrcDNGvy91o25GnVNBvnMuyeCu6wtDWCZn7ZDNxwSYcLY7CDZ5t3kUUHFzVargHi8cw8zTdSJFGtY2uDK6",
  "key34": "32ADgV3CQ93Z3spU3AsaH3AWnzerKqgD9DVpKRb7WaCZU9Hkrk5ZsmNG4ByGZhVb4AYxRZdju2eVuXL2EygFp1bJ",
  "key35": "3JeHevWhg1nVsD5VkZHigwwGfqCTkEHrj2bd1v9c2WofU9Mfj8DxhrQt4X3yxrNfCdEchA6no7hdDyrJk92SmgcV",
  "key36": "NbAuH84sRAXZHxzunfbYLNdTRSnzZ9kCEYQpmkiEHgrrtkwPkTzusAcbZC9iKEXsCxG164c7A3umaBhZbPzQHZQ",
  "key37": "3MP3YMsfmpFw8Q9vQGeqcHN4R3g8U1HVHuR4UrzBTWKwuxV6s8KJN18qMcrUyhDy2myGtfqnbc5uRHySC5VAt6ni",
  "key38": "65DBPS9fCYoY44kkRckAsYFNtayV72pQ2GswhF3xQSrjrCojNRkpJ97Dv6NtuEhbAkSQPKA9yHmnHfyWfFV6JaWS",
  "key39": "JFUpbQ4KQi1QP4M7fdfsh1GWfP1aqM9Kv7fGm2ohENRLd9agtGd2Zn2hje1SMscecyAAmVpGUyVQPWs4RgwFi3v",
  "key40": "4V42iY2rkHbfStQkPbnBUyVNfFLA8MxujeaQZ83Y5egjDUDSjAHypuJ62VNXMgCL2uuXPWrhPiHok5UceG8F9Knq",
  "key41": "GvQxu8mipsyopXQCUPXYFMMeq8znoDkkD4St3NAQM35Aow4XmRrZXAwuBRnXXKnxPFTQdSJ3QJcL8THyDVfuPG2",
  "key42": "3a19ozh92J6SVRqWV5QHLSHkzJVJAUgHJvLntkkr7W2XegQGrgBYKuRvKtEqusWRcAkAyw4WrKUc1wTefHd5f4JH"
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
