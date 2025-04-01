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
    "9RsQiVbdQubAB8H8AwSpAwAriSwy1Ah9baqm6cainyngtWNQ3C48VhVURhhm82z5BCoeQhLgwgwdCdLjjDeg7mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LdDxH49kPhu6S1nm9JcuZVehdGcro8gKkdoDM9Wesoh6d4GCLVuRSQmgrKrEMXjzBWC7SnCryevKt4D1uJFcZJv",
  "key1": "4ZwHXqJ9DRiswfnXzY7jxT8nMhhq2BQ9MpWsGVfUkEcAMv82p44qWEdm6xoMxGdYAYPnerZNEVxtfQzdecwi1PUb",
  "key2": "4rcK6XT8J2qcqauUo6T7gteNUxrAMVuvoAP7Hm9c5SeX5fovTkinnFmqX3B8YqVpGkTh1TdaNhi2bJ8HBhftMBoB",
  "key3": "2dynyf6b4wsowxNvzEuDKQLxsfkL7WoekdR1y3TzosRVyFzfyQJ6s61TYRxrRPCgvViKXpYJsbk6Q1tfAsJnx2Dy",
  "key4": "5teLUA3hzyhk4AcykRQSQ6fh7jT8Y3m9g6cLHY2tUJVXxcRaQ3fCLYmME5bBiyAYXJfpZ4Hzed1io5oUwbXYrXos",
  "key5": "48EX27JnY59MDrHesxDCS8SM9tXZsYFWxJBteaxKoyHqtcinHkgSd2DyXmwu6bgzEB6XCDq1fDEuPtun4jEYuGgp",
  "key6": "3kaNSMgZkvSaEFfnaAZSmALRtUb4T57fkkmTUJePrZ4hP2ww7chskQvcqqdNsyGQHCiRsJgVP5B16QeDNS9xp3rF",
  "key7": "66mcD3mdscLnrnEosFDrNTc74chtdmPtQSNQWrYAn87vo6yxJwnfjg1hWqL7vRM2ZBCTKbydjHKyH4yis5R1FhJE",
  "key8": "3fZ8R9BwjynP9E6hZ7T46Vw1Zmr23z51oKsLkKqv1MagX5EvhnnnZHSGpYeSqr3LvkZWfxnJvZyTLP5KPJ3VVwkK",
  "key9": "3jZ7Xt9FpEw4MuK5W5xoUGcvuj2F84g1ZqwPVgoWrN1ETpcpP651G6PWtRaHrMg4ANe5J5ty1SP2QMMDYU26rhoH",
  "key10": "5sFd9B3amazpn6WqsZprMMwmQCsgpURu7jmiF8FqbCz48CiYMP5LKh1toCGv9AiR8TszRrdEgVREpdDys8BMANf9",
  "key11": "3h7iGbhhsvF6RMx3Vw7ERuMNy5fqt6vuBtpbnfm77bwkeyjhcxcYw8aeDcPh1M2qfvtY7hEV82EpPD4D9Ck6ZZ67",
  "key12": "2uNcMTHKGr5kE1dEXECmAgAA1pjYTxXPNLA8VXEb6cTBMuysGEz8ozLbhjAXUzeST2NJWkaicLXDTsUw683NFsSG",
  "key13": "2JvJ6P1z1kAtycdp1W1mKEAFNUbZEXeQ5UkUHPmUDieXY2yv9yXRxgNtivVUPoJvbxXQHje6EP9xr8D8De8bxaPL",
  "key14": "3C6YQ5SaW1yV6SUSUSSVZFM7dKKoAAyc2erSbTch838yG5bLRqy2EJRPKyJxcLNs2Y9sUn1xuJSyoSUnTpJ2ppuK",
  "key15": "46bK7teXo7tvZrgGUSGwvneT7vmecPDDnDnDd4QFbWQsk7CPJU3ct3Fj4roLeMzmrBE2KgyDmTt2GD8GSCefPUzh",
  "key16": "96TWkWKDRsPdDcTzj9SJuApySeqFCxRtxR8D5QTfbWeGgLkXsYsnuMhVGRUmo4ecY6vRuHzP4bUst6AQXApcoUE",
  "key17": "5tGnhBnzfZeZwcZ9qS5e3GLe3UkPqP6uw2kNyFUpJ6D5ZhzaewURA2pWJ9YjMYYWJMoVTRRTmgzMFtvfQruC85KN",
  "key18": "jYJoytv63WupAR4RzxeSZ5ewJcQYV1Aejn7A4LUNZMsG94XVvn5ay247y7zoEmBVZtLwaurKzk8RbQxe1RPWhLU",
  "key19": "2i5BjmGPHHAxUXxdB6qiXNKr4hg9tFRuUVGyJSXe9dAN1doy3HVpbdMKTrV67GJP8UefNQpnMkmiJptuaiRuRUKa",
  "key20": "2Y7XiwSdsuaS7gATxnrmZn5sqdnN4YAs8MoanVb74uyj8z43R1aSFVLrLRhYUG1FcwqKPMDp3BZkBr1fCCDA7FCw",
  "key21": "3RQSqnWUnpxFzkNPhX5a7RQnq6c5fS8GWRAWYv5yBzhAYir2YSmRkkQJ76WZ8zD1Hs2gtayg3uNjBdrMv61D95yB",
  "key22": "3qgNcu8bBdC8FNaf9ycNoAgSWYZifB2eWUgqsPMvgFnHWkBGo4g8fuokmzboEJQmCpVjEpxSvhut9AVEs92JECcL",
  "key23": "omxQ4C5LwTt2QAcdgfZdawfqbDnQU4udNNFJhQvxSMkWTXsvZ93GqkXuWqKmq2w9nngPbUrY4urJbCT3aiPGNch",
  "key24": "7VD1byzSToEsjTgYiVg5M13ZFbSwuMFYk9Mdts4BLPQJo9Cq92abiWzpxe1ibhaumDVzTajC4iCWpv2pWa2gM2q",
  "key25": "3UNEmSngZ1ny4JrEDTubv46f4siFUMbLyZX6durkZfUqqqSGuh82b5yTAchoEWDFze4Wz7RQhLJ8VXSss8YxSeg5",
  "key26": "5xqsKvDaeTeH8m2Xzy26YSziFqAH3ir5QfPnCxWAeyuHYWFXkYWVBd4Dptd6Gg9bPyXnQwPnkgpe2GGR5AoNSvMN",
  "key27": "1YrZCaB32Ea4pLXZrMc3g7SftiiwcBtbeRzi9VD8SQyqQcs3uwrco3ELwBtbV8s8JUArHugiCBrgnR94FgHL9FS",
  "key28": "2VJY8A1rjfRy9Grm4YFbxBizy3K36kFYyhSTwtug6YXfmstvJVQmvFyEMkeCfwPD7Vv7KAnoyjbjhiZ3swhU1BZS",
  "key29": "4gzb2TNTz6kJpFJpjrFLHRLMYfeic91wsWzLvHsWEUFr6eSSBebj5aApjsEhKn5c721MAjigMbYxWbZxzZ7vALNQ",
  "key30": "3eCwxSQMd8tRsowrpc4LeG7RubeZ8bHDxUySf7Y1zx4PJJmHiWLhaTPQdihaxnNrGM2okgc3bjpjtTxcZcDd4jL2",
  "key31": "33QFUKGPmV29EgyX8QvV9HnoaMNHkLd3t6E9gfRSDwjm3yWBAWemCLnHJ8TGnsk7UD8JMo75Fvak3txShktt2h6t",
  "key32": "2AfBsmvi23A5U722HAP6S3NCrBFj3j2UysahJ2GBnQi54W4CxWfmzKGzYr5E5VDSrHShJnEPM2TLttNjuz2n7gyv"
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
