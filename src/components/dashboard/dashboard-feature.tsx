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
    "KNrnypdyjef2qqwtyqz6jtt3vEwk6zbenWTeLdhoR2mfj7d4NwpsPHHg6GMNo1xFJLGYs6chtKqQqDSB4psMinp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uPb7GW2xEoncEjpDVQiriK4zUdMiYHEoJ4wvqcq5H8sNdYzSJmC5ig2BebvQmRFGNLkfP6Bts5qNtBHQdRr3hGc",
  "key1": "BUjLkikWAHzmdWFCFwXDJutxPMWZzGJYE3vCzNna4S6AvYER9nDL5RX52ovLqAvWtUArzVJN7gDhPGYdPrBcBQq",
  "key2": "3tr5ybgbDkmL4c15pFAF7tM27qeEadW52Qc5ACjqm9n3hD8tcn2gaF2t4RGzoDgzakV2eCLHXxFzYCh3axqeMnJC",
  "key3": "2Yw5qQGAPwK9LWrhsn23K92KpqMt4yVpcozR7aToBPrKeRUin4PWz9nRTb8F4HwNmc83tQM81QBcUwcUTc7eHjSK",
  "key4": "DW2F522oa9wihgJZFz8F1JMg7riTExkLuTLrgfX5nkdRj1nrvNVNXxJHhgd6GWCegi3dbfsUXibfMMx3kKoJYfM",
  "key5": "5Ca5md3hLaY1rmM1QUss81zFhG5Rx2mSiboV88NuBa3QsWAYT9T3wPmbzkiTaaRSsHFM3k5BLYSPcZthuXpLjimt",
  "key6": "3SUFfTy7y8bUDbF39tc9MSUqeWukZhj3kQ2Y3DUhXicLoSX8e6tZ87tgth4NjAsgSryoJLgF8nhNPa3R5p47Ec3H",
  "key7": "54khcFz5kWWYgJCaiQXo7eCxhBRq6rNVifoWyiMgsyqdtTimFNTe2xjh5tnXaFxaprA9UvRw5MxChMY7korus4nU",
  "key8": "2MG5C73tsiDG6FPbW5PhsZwCoXAugDvRymPZUdDXPkKLE6CqHERkPCHw9fUB2ZPLJyyWZFMBMeNMv433Afpz5hZx",
  "key9": "2AMNkBChPHbhzCLGSeNUg9JasqVY5hASFX6c86wN22R8MTUrkmonLJ3s2V5upUqnT5VgQAHhA8N7qQTxLN1tu91e",
  "key10": "4Du9Kt2v1Nn5umTMZp8xqEHyJNsbVgwGJ3EqjoXqwfXxFiM5byPtxnt4nLhZj3n7CqMnv3FL6fHkew4jWL9WWwoC",
  "key11": "572CT8muLaauzeXwvRRzPRNCpa5v8sziGDyQ6FuSBt63zpNiH5sEZyFZQ7ejvYWCPi9aDecrdMZwSzzZz7hxNsuG",
  "key12": "RHvrKnyW7McABrZpSg9FQPyWM5mAb2VZLP9ebyfZMiC1oyu6ZiJkh1jwZ7miEp6go1msegYVSqk61Xp54EPGkBr",
  "key13": "YwxqXgx8cSQ8e9xZcLdRXkbfz4LopDzPcqtA8obNmTouGwYTQgeRLAdtj9bC8S4iEbP33sEXp6X5CzadBZU7sBf",
  "key14": "48D7b4BPbjHhx23gxx4sJwnv5Fw5zpLxkYmyUPK6ip6dfsJTet1mrTBC6KpEycRreyoXvYb3BtwExE6cPa5kDy8R",
  "key15": "APG7U5WYPbKR5hN5DT51uLW3pAqfDBvJUKivEwtuWuS2XKyf2QGFTKTDUGFZqYbRmsXZFdAyMqCexf64gKpAcmq",
  "key16": "4Tm1M1BR3Nett9JDhJkdmCpa4ECs17WYnfF3E63gXM6rc9jdrgjAZPfPM7hJuYG6hVRZiqFW1M8Ar5euV3xJx9nT",
  "key17": "5risE7VDvD4HDZP3sLDkH4qpVPAYRBVC8yiA5bheuJ7NvHR2TLupk15bi8hbqyERCPUk9BxGYvFTLbkP8cye4emY",
  "key18": "5qBWPsBP3HeYaAerodAUyNPufSxCpCu4TqawCYMAeXLr1cf38kTihySvPU1fDjquygu2AMewzSJjbUMaa35vgUtJ",
  "key19": "2Ye6DG8fznqXWRCeCjUtAQFnAXLQ5LsG2GVgtQuz4mHMKrtXtAh6hJrpzDhMX8c3tobA9EpUHpSSuGUD8yNo1Urb",
  "key20": "4WBrQC2ip3Z8LrpJKydP65mDb7dHdSxuHgbh6irgh18aAW9qKhnQJDCGcrvGAWsEiDntpdohoEi9bHKSEaQ7G6Hu",
  "key21": "5Gj97aEGDjPquoKpoz1E4fWKowtHygj2Q3QCGQp72FJe8CZJrphVRjBNLevVZrDfpA9X9iS1oi9yRLTgyGEez8k1",
  "key22": "4dEwc5MuyNMCmaofkXy9K2c5FT9vKPKAuXdtbhSSj6BH2Ua4pnCtmTeDbZYpY8ashUN415NAp234UhyB9W5b6Log",
  "key23": "5NPpTwsn7tGkxLeb5h52TfgRdcnPFh58936nWLQBaNjhrLXJACL7GrueJqu6JHZukYTvtRcck1EBhVKUWebhcegC",
  "key24": "48zK9XW7duu8adBuxvHR43YmSTWBJ338PaaqjKgnCSCoRXtH6Qb2AAdZiEnwsxX9Sjd5GfKTtkNhsmgq7j9ykY2b",
  "key25": "2g8gGoojZSyaDncxJLfmyQcwgPwHboMTSyqqMSC9Rgje4xkDvpiKiW182SZ52rStTKU125McTM7uyx8ZMcB7V2yu",
  "key26": "2afh3QYhUor8t3uvphTMrj6iPKLkiScdctiZttXJQ37rczWgVjc2EKW2E3DyPjV7r2LNAvoox88AavFDjnoBYRFr",
  "key27": "3PT3S7v1yAuoeRxBUozfYrMNvADWeGs1EjyTRePki3ZtogV2u1ZkxwFUXohLcLFt7Z7zkiDQgucc9AGGHQEuL3Rp",
  "key28": "5Fy64Hu2e9zGeMNC1PyAsd4BEStAP9BDzhjH37qSFNcMa4Fr3yY34hJXszFgTm6Cb818as5RkbZuLqXp1UDbUVvx",
  "key29": "PWxAAGYCxMq1Tvs1M2PYW3Nbhwxb3xLqtR1Bj8EXo9XtTgHJWqgMunc1RcdVwMLeZxD7ZDEcWroCqHug2NsxF9c",
  "key30": "Qyi5HnrCMMFBsFgVStLutdwrnmhsWwzYEYfNtAo32r8bQ7QJ7JZiKn4QzmFGnwCkR2hwLuAwAJMchdMg7Sb4Moo",
  "key31": "WEHpKAuYZ3dEtX4s9ryJFbqRkooEHTyKNrVt2znwDiQCgUsH2KoAejZ1FgYuwsnRFcVp1jpEvNMsYzNdaRHXQ1z",
  "key32": "5kM2noq6Xkw7BFKbdeBvr1q3xKqZNFXqX1kJhfisCANPwbeYvXeWaQrEmsB6dwFYUGYvihrQszP1tRAwS3sWAvYk",
  "key33": "3uwLJP1TbENacgCk7WcjbtURDKJd7bSpnVUFzKWXW1czHoH6HQrXr3mGpygTNU7HKXkEc9UYipyRFBr58r2jAMx1",
  "key34": "cd3xWzYsyBFDe9sTPueZ1UjQB4GXDf4W4w4CrRD2fw8LEV94DaiBc6JEQCnNvBoSGBHNe4vGHgV1gmBprTU9NoK",
  "key35": "5Mfk1D7btgqbPgqHqmq9CesHa9jE3kWVY3jTDavS24vQEfnxzsmmUg3Hiwej25biWrMtswxXYiuCPeytB9rAJ27H",
  "key36": "3WXnS1AicW3UAs1nUAWVru8coMdHyGcoHGBanXUdKYGAUEDiCfkQD5RELpmM29BQwBgE5685uDY7ohshuqdHy3Tj"
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
