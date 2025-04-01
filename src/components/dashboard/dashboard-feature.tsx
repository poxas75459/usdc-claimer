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
    "2jqgDz8LbWcPxXxsrWP4HWnvFnKbKQ2sF71eHy86jYuu1aD2Rb7HaAQGbgcBPcrSZBDi7oha9LZgNA36rNqpBf5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pNA4SitPKBP8XEHowf8KU6mFmoFm7vfKWd15Bwma8bR3TbNmufCGCYAcMihoNntK8L83Xp9s2nqyTonjt9f944",
  "key1": "W79XdHfYyvZCWygW1JeSwH27wnL2tbkRE49rJGpLu1T2uAb9BNHFEa9L66VcacFrQ5nyksn2uF7LsGCq9FLGYU5",
  "key2": "5grzPRZF93Uq9FDaNMHGhcB7sm6ekTbojTrfd1vy3trTwBRwUmTt8hNACe49HzfgkismcAsFRQ6nEjAxdSURn75k",
  "key3": "3vsVmqM7N9k839WQnxxR5ZG4LnjtgEqWGRcLDQ2NAoaSM2CVXeauVSw1Vr4deRy5hCaJtbQqDmjz6feszRbWmqfD",
  "key4": "UWLXjUsuywMwMHnFqBRL8wZydS6yAAunL16ZXDEZpfSPhmsagpxFb1RZhvcw4Ftqin9AtTJPNLba1CKVN3S5p7t",
  "key5": "3okCRegc8T54gWE2bzDskhrkn2m2khwRQMbXSrSE9SD9WRiFXxK2udqd1FLiskfMmvk7Kqmj6riX5WL8qrbPGjB9",
  "key6": "5N3YteCSBoLti84kNUK2bvrQJ7JwdN37uRUXCnAcamLcnBfc5Eq3tHA7aq98V4QcXrQuYToPDt5mco5XK7KFPn5F",
  "key7": "3iFRgwkoEqYmzf64Swt5husipzg4Xr1bq9XmSBuNsicjYXUTCgrHHihXBawVYHx2TCqLpS6XspTTNCwpotq9bvcj",
  "key8": "2Sfis79XxoFHCP66GMyjkCrZQ67wwdK3V6Aw9jMSLJmxi8T6KsJyEvRkEzz3KBRqb4zXwAbgeQ5ny3DmwnMbeFfp",
  "key9": "57CKQgQ5neqiSvrRtbAE4BRKhEQep7iJQQd9n1gBLL5HseYKvRZaYttHNh7nBtBXnYoRJDApex4vBGB4i1qQujGD",
  "key10": "3gS7bwWDdMJjx3xKQQXqnrkEw2trYNSF14VgnLJ7qZ2xd3iNmgKBQgomZXZ5expU3jRhtkQmeuPVzSFDLFNYg5gA",
  "key11": "34FiXuwEakafSUEdzJ6PgvV92JBkt26sw9APNthSFBQMEHRK4iLDynuQCcz67sD6mqVasPoUWBdUJuhRprRh1MYL",
  "key12": "TjfNXtLxTkwaaZucfYRRJZ4imgCGyNUEwBEysSfVdMARHAsJ6scSw4yVJuDdvgwvz8BFaSxe6AAR77YKvEdb82A",
  "key13": "4QTuwRiLk4wYpMG667CGVwRUGCnZEWeLzseMDAuUF3MQjoEMWHNj2fRE78nmMjMgW1jQsq3HNzG9LjSJSCiWU3HJ",
  "key14": "5GHQTshoyL7LcBvq3qgovgbTZfmzYCNhkdzAwL4ammkNJrgLsoLHwdHhMHoP8yDWB1rT8tWiyNgbHNwWkJAXNYo7",
  "key15": "Kgd4TzrN9TzkaqxnPJyr2vLGBdYcZJx2q5by6zjYTZVc1CoxkuCiq6QnFXcZP545z71GpTaMXSMQhPcsYmCmfcn",
  "key16": "5Z2SKYk3QNsG34iF2R6TvLW9JupoadMdftXJFAYwDNPrVw2fkfHqe8TBTjGY1nCTDLRRYQHW6jDMTpaLnwW9uSBK",
  "key17": "5cZHPVKenez1tfjeoymr4e9VgLezR1127PBV7vgTYTkuEyR7JdkiPnRfWt32B2GE3A4pVNaNwutR77kYCqyUcyAP",
  "key18": "5qMAYThjcG2oktY6kEaToqNCSze5wcUSuGjDSkUBk3EY3fhFewA8pRad8fJ1x8x3BWDB3m6FmBnwQShKt6czptEA",
  "key19": "32wgq2F4Bbsm5aqXgxgiEhhseqhrvBqZy3spxeJFW1rof3K4FbNNriB1xwuENEVcjV3cCt6CU3XV58k9czrviDQH",
  "key20": "63ecjjozpwih1B6JdYyEqXrNFcSWM4mcpQGtA7LqAhok6UpxsGzp8Mk3xZUd9AKr3EmhZfMuEH4ZPKNPfA286kbu",
  "key21": "1SHCXRm4aspRFh1PQyv37Q8SnqUs9aa4xgvfBDt3wfmFpX82bMYiFiUQ9kTQpiooSME3owETD5U33Ps6kyN4rdE",
  "key22": "4DncPWeyDPmw7pm6AyykeGtZ2DCTxwsphgjYpKTmge3X3x9yYo4zueG1J3cTXXaq41iNfbDBwfuTTPeWzimA5Kct",
  "key23": "ZeGQUpc76LYM5YgfJbvgJJbVio75kSMD31ZF3pUuswMKMc2nssr2jXy1tEu9c2agw63Q4HqRNGjRXMtWRQ9GWUm",
  "key24": "4JZEYCSQ4bPbXXhCmLuQSAjv9QMKWVPQC8M9omQRn2jym1oqfYzmEs7v6NDrsRyaMWFtDdkZF4F5yqqDJBw7mkvL",
  "key25": "4ABsMH4dkz4JNC7JJLEPBhk2sfcyDVg9EZUL17KYt5ZWG1kRvNX9VsanxjZzpHmhwPvBKUTNFNBjgu5XBQANpnrs",
  "key26": "4krsHxPtPAy8EbEeLa6fdwh1R9N94uHGhJ3qZVjLDcvGXTS61G8woL7oaUY7UWrz6G1PTbgJnmsyvXKEoCSg3Bjv",
  "key27": "5NgCHMTxrZTCf9RP9yANi4hCGFexirAPcCj46Bsr47cwEoa8szJ7kEpqizFePDPcNCLYPVTNDFaPD8YQAKZhBhY7",
  "key28": "2jFqq3TefaXVorVdBj945KvwmisQiXe1eFfaEgKjKMgJnzSeNEMT9o3Xb9txt7dX7UyGypdgT9r8WcY6MA6PQD5k",
  "key29": "4qGxiq7jsibz5d5FWd71omZRDKbbc7BSmoBcUaFj9RsGkMJJcx8twVVyLbcd7Nze7BvGwcm7jeRkcZDM8rtd8hDe"
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
