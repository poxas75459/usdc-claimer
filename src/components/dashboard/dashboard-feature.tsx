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
    "62uy7AYBLvgjHqz1aFcco1QL6cj7n9uGgazGeiEMC1phcUsU88CFpC5RcyagyoU5C2esYbvdz4diu1wHs8hz7pUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qwV3gAvzBEkzcMJb1jzHJ8KW45qNkFXmwCFfEiXaRyTCEq4ujVd1kpxBuUH9g5nvmpRWQcRSpq966zQfFJUdrpB",
  "key1": "2nDBQtLqUdFwGx54dSs3HbG7fHKziXDr2TuZvSbx1eGwhrr6yE4H14frwXVQUNix8DgbAr3LGhmnAZPt919tYdit",
  "key2": "2FZtJ5DaMzLSiP4qifPUCgWnaRcXwxCexvx9p5fvQ4sWRGSgs7os4KXo9Rh37yikZ76LCCQ9FoWzuMYaaxXi16ku",
  "key3": "3k16srEcDZu1PUuS4aa6Awcbuh3s8NdqZGeL5c42yCZWsUqsUeqhjvaR53guDnGTUNSroFSW3DRPVEDoPwUU5NJg",
  "key4": "2A9XzFdjPjmD21FcajQaqCV3iMZb34R5krVbjVGguENE4Kb8HyUYZoCL57pdh9std75KqkAxsytjkfBtZyh893aV",
  "key5": "4H1W5xpnLey1S6GhS95gj1UaXB5wJu77ygkQ7PRi1Srs21dhifJhtGUz4jUU3hhmkgXH1zYLZcMGnnf6RiyD5ZRH",
  "key6": "4LYYkmm4DCk7KEsVsZBgw6hiVzcFisLGvngKgNL3E6wX53xFYMrPhFSd2VRYwfQdKnQjcgx5WPV6yvbvr2NboekB",
  "key7": "2pD1oStv8mWfK8mGEZeT9vXEBgsDPqpVLSGAtniCJaD1dgAvYNCfRLg94ZFFJtqo5XYGg3VmBs9ziBzk9X53iFki",
  "key8": "23KNTa3Ht7A5SjEiKTm3yCrcJVn3b8J7mSwrceKAP2SHhyYSoJopjZeynWqxnATV14xrfcCD2vJ3Ch5Grtry26ZY",
  "key9": "4HXqTr3E6TEKa7umewtw3pD4spxgv6MktKTVWpXeuDf36WHnR2rG8kVbRgUYpcSzuMP8oSTvXZBUghvztoU2BMhc",
  "key10": "wQUuYSM8Hbt4RyPojxKcZgPtkKNxhZetHCy6t9568kyGdH7DZbR3Y12L7vuaopyHmhDhFR8bPf3EZf5U3s5ZPZR",
  "key11": "5Sq4stakpo3zdCdcqRTd3qfa3raZJhcSRJUAR5n2LzuFgVmLHhmhTZDekwoga5pC2BwaJmSELRZMRYcDbBNHaSaC",
  "key12": "5JidRyqRa3PZeqdxKqaN7rUhjSEq4zqPLQNM5aFhCn6uApbhLhDv2CsGAMeYZvtKKrmLxVU7JP8B1GJzCt9efuV7",
  "key13": "5DSBxHZrrzvf5dH7gtufVUGi6s4qUHTiLExLPuybDZCdphXYrN2LMTT9TeZTnQfhpGHUadYwazCB8skmZG2t3wRv",
  "key14": "5y3RSqZzwyNCxAMbKpByBbZYgvhzt2LYo7Lrda8uK6SThwBPaj1GRPV2wS41weew2XHaUKVLRpSfv5wj8cUT3N4Q",
  "key15": "5AwH6nU2DxCV9uTAYFdJo2AoxaaU4cg1tQHF8MeKnijACRYwKwUcMWvcehxfq8bfPpppfCiVhBft5HNTBKCk58dy",
  "key16": "4busGBStiNdJDCymGoPL7XdmCHqavrXmjt7Nh1QviBwUwpCR5gf1RLhKESVugueoU1LapoCMVPdYruBeBmfUNtNy",
  "key17": "54SyQxVLHWVRL9EgtPPaRdtggniWxKn3NeQZJSruhyuQNAbAwFHgQH2SiEMHwWCUSRNC3SikvLXkSjeZfQ5W3Ltg",
  "key18": "2XwNkAHqM5yWzw3DdQzp8QDeL3UTijKEkanEvG8Lfm1298EsnSL3kihTNwexAriWkCcguzE5XXLkMUhAih1ZV1Lt",
  "key19": "zxZ2FUZ3pW7r5gcUyowKfL8o3pKT6pN1jxLPQZv73i1LftYntTVYikUxapwSozxJVpQgkHP5ufuXspgzxMZuhBL",
  "key20": "5Aum7gbmKG2nLE5du4xG1vU1riC6haD2GukRbbWzQX1feGD2oEuJYUWia2fTZK4NTChayExDqvELMacNENAMqrtG",
  "key21": "3bqizRp8odr9P9N9ZgMRoh7PBSomoeTHL2EhBQC9a7PVWfw6eg9Lo4p4ewQ3dCH8RPkm8JbLLdtqK2NSJTHEmHJ4",
  "key22": "a7WAEcygPzQ6Q5BnzENLDAcLT1X5td3GUFwWUyVLvzvfRPsy8Xd5qXV1vxXsVM1HNwgwUWCmt5hfNU5wHHjSauE",
  "key23": "24MPP3Ut7YHBPsskTE9sqXKGSamqN7HRKi85r22uV3vS4u6CqLbn18K56UZcFLY5zWrBCWyf5gV1jhTPSeA26Jip",
  "key24": "3jaqWz3swQKnFE5sGd9QgGWouFhzQCv26bEzoiDmUeDbEX2L3TDfM9ieVaJUnEcmWc1MVqNVDYaHVJw9RcGYzLiV",
  "key25": "5ECrUc4sZEqZdiNw8E51i2i6thdQXLWF6dXRfjXA2s2C7qmgbc1wMhY5bhmszUk9mCBcVKQzUSaVgbh9p1oE2fZj",
  "key26": "nWJu1QywjFy8kVg2bXA8cVEd4syFvXSR4fBbjPm4P4BpmTg9dzHh7pPQU73cV4KNcysfXCS31L7YqmB5RL9jda6",
  "key27": "2q1ZKWP59EkjW1gbhMj2FBXLz5taHo6kzv8ZkPkW9C1rKuKpm1FrnKXMqugAkx71SVgscVScBLNdF3ZePLzkEYkH",
  "key28": "3odPKt9tZVqzLuLmLTEi5i4KEQR6gsikqgyVZsLjUSWMVxgzAkVDSrRmqkkJynkrYVqNTkPiGtbbZxn4cxCCeNCZ",
  "key29": "3RzTW6Q34DkgEV4Rz1dL8H3f1e2BhW2tifP2DrhzVQ3Narz9Aft5hY7CXhzS3Y9m9RRdGwNzcbrumvnfpLXShXmA",
  "key30": "4P9ZJvdEMFrta7YLhjVksvXfpRrAJyqJFZ8deZBpEkSN4uSePCFG4MjaiWtESE5XWFL9jk2ZEjduwCm1HNaW66KL",
  "key31": "3hkXoDquizngk7xB2dHRWZ2SidYJSEGCagaEZYL9mf5LKH3keKdqGEoJ2ExfVtD3Sw2o86jmntJMTZQCBnU6YvDy",
  "key32": "HwD5gi42eJzC1rmfQ9qpcnivJcHNbeWa6RZqUvpmwFWdWpQmBnh1zjbevDEXuQWgQeQfPJFMS7H4SKUm6d2Bzbv",
  "key33": "dKMSL2haHBeBvVa7m8KdYicfFFxHhDdQqw48FJHPTsQ26NVaG6FP5GouKj8hnkDo1v6jFJi5yRgzz1jcZEApB27",
  "key34": "337A1gGx9GAZFEjYtB8zBjbaMhc9317ioWQv2NJzCVoLMJWakQukY641BfGqYhxckMpqhe1kpfv8Vc7uy9wBeEjL",
  "key35": "3YhcMXsuFSUgiwoxUTiREkzvA7jWKbBZj99rnyNDBU26s1Amk12fbFjNfPcASsTaUNz1pFMjmEbFN7sEAR96Ae9H"
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
