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
    "5qq4CiC3uMFVFsryar1FhjEQ1duUJgnzqJJqEB1Ryse7Nz1qLa8sCjjHfF7QgsBNSqVVNmuQtDWdB9yamSF4grbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igWHygcUzXkWhnkzLe7ffRD3be5GPMjWxSC4XC6LNiHmzGVAp85mS5S2pWj2AF4ekF4BDk8cNVWiWdywfsgSWac",
  "key1": "4Cpz4wPBbJphD12rdqezVsZNhmD5jZBmxWVtACPNfpoLZtx9ZYCTrxEJQwscYhX2zWpMXJHnaS1wp2Xz3rJr4bnZ",
  "key2": "2AdzxsfeH8CGnZU7dRRctW3k6PLZwaHRGEPvDXJd5oEX6CpyntdVMPcHtiB4WXqHrE5kPPE6eeCd1575GoA3ReKK",
  "key3": "4mzumeDHoEjuHRkdZwKHvJiJEicS1FT8MsD4v6gbzkezjV9JmhM6VEDXP37bvnUBWwm9xPvWCH9S7Xa3EstpnHwC",
  "key4": "451BZRqeyWFSTnf177UNopAMEshpqLrpnJRnz7fqzQH5t4jPHcR5GvHpGLXRaKoCwoUfuQdvRAQUqz7TXPZbaeNW",
  "key5": "A1Vh1rwRZpQPFGEZea8t9evNqY67yJpESts8AKnuPKozCqFkJBmUrSNiCSUsFkuZ14z8MLHQGE7CZuLu5QhfEzr",
  "key6": "5pFzDy65NRdVQx6k32CA9t3JRdWmJpGDKez7T57xgR1GdAHT5C89GcVBhuQ9VgrFPynZ7bYa74caNsmEZDexvF3c",
  "key7": "5gprfeTrNu5LZKdnF7ph2Bu13uJ48sFJnA582dzPnhw9wtooLoT5g2B558HMk7Eu9dnyKZRJHqeRrnfneTXX79aS",
  "key8": "38AkdZ8QSqXcFQFiaiRuu6irzrkTci4GLgH8jxtAbcvVRKxWtatR8PmA21svxmCrMcfM8gfWFPvk4UCqyorcUhzS",
  "key9": "4jKsdG5wCiNrW9tuk3FJEKdDW5nw1LJZ1eLcRQijt2RVuyE8o2MfaMKL4goc53magq7XFMyRW19kvFw4W8QzqGwi",
  "key10": "5VW1311xXckeXieXhmtxYgDiezGTDmKTmJ2S2dqyf6rpj9yUiSh4SXgg6kDtJM9UaBAqCPWXbbaRA1ZXV6Z2UtD9",
  "key11": "3Q8pUFABVtQsvCHMWiKzw8aQfWWAfP8oG3G44PvuYBKGdYSru8cfnVHqz3dUtdeeHND3qURBpxmWvJW2FZv62uGK",
  "key12": "NnqAWgdvXcVW8LXBMB4FxVuHdZAiDvKvSwoUumKRo6P2exFA5WzVy4bDa7TXzGPWEbW165GzwKQH9nmooMPH5gv",
  "key13": "339arQQkDfRGG5LSiSdjAGdqbumJj3SBtkJD9ent1NgvvckSryU6SevtJTssmzwX4TRVL6E9aodmWbUxUTwdFHii",
  "key14": "2JraWyw5RmbJtPY8HmWVSv7gdqMCWoSXkM5azVPDrZqYq3wrVG8rYn6uvXobfn5bcqnzNqeDYUBB6xpx2TjWGf33",
  "key15": "3Heo1x6uS4v8STTpvBeVqdVjzSpVy6NEkddsduAHeBuXqDBowyoZYoLgMPytNesxZjnKgcjhjkBD9M714AeD3WBN",
  "key16": "3osgquUpNfGYgC9pAkpmnLYFvjoaXKNkE3KmKRC1JHi66sf3n3aFbh84mbRj6QT5hnjCYQjzyg7atBsup8kG9Zqd",
  "key17": "4DvcGZboUgfD4aSD2Syxz64VVb2GoJ4eoa2vEXvPZkJsnHGzvhmcqToRduCLkyRK6cGXRmZfKaRFu9NHikiStNDQ",
  "key18": "4ymHywNA2BX5x4UgegXtwsU3wBSQdbSBv4dAacjQK2tWCuLjXi6JVKJu78XnCp1HNe9C8gP8dNmYLeBaK3brvetR",
  "key19": "36qC7BEXphLADBSGRPwdUfgYCJk1B7ggqfezad8VPoBVQswLBLAWT3MXDdEGhFvz9tZ5nprtpfY1xqSAkQ1qPYg4",
  "key20": "4Awrsaq4YXUgu3uNZaG8h2jwmk7D7A2xqs1ouGv5HNKzbKa9DNnN7Z6UPDM7nCCnnEkCZQDYnDGwMNAb8BwCiu6t",
  "key21": "2mQr9Gd8Kdo6qVeSoQakZxBuTRwnLMZvAwKeTBYnbyWkvvNknrJE9vSBswXFsfYDaZWgTX9k3fQWA1whoZYCbGXk",
  "key22": "4dbFWrFJxbr3hdnSngJ3iiVwXCgkgHKHrmNBDHAFvvLAcokq3sa3NN598YX5bEFn2xG1whQ6QufZ3pP9fEyNkUDi",
  "key23": "38mPeoCtjczcoHfLUZa3gdCxWjFTyY8527RkjCYSkguKgeShq3eg4CM7ueC1Jo4YACP2GyXdtx4mmRtbSqUbUJpA",
  "key24": "3LJtzBt9KFQikpgYTo7sZ6ygQh7bADwZQuiKay1ozEMu3SBiJkJWByd3Pu8MKRFYYxxYs4kM9wFMN4LN118XNEq2",
  "key25": "2uuUpdgpMqThU9F9jkcFdwoU77MU4tDAGKk6eTgEvbMD7Xnb3rqA5UPxMxuATBz1AEfWNqUZSH1a8nMGqGvsaa87",
  "key26": "XfMsaRZw5kiN625Lc2nW3RQVAcf1eKWLEefKByTtXocZrb3HQxRU6xD7KgoduzSQYMwXmVJ1AuP4RVTwSyBjtWd",
  "key27": "4vZBXFYTRPAbThdhBu4nk6xKDXj51nWR9XF8fio4j7Bf2Eg6HDzpxjtmoxG2Yfdpoa1CqhybW64TozR4W8JBXB3f",
  "key28": "4ZNiGjiLPFN11RqwfWqfb4c564grBEZtREESBitUixQpQ1ypN68aQD8zNqZuAmNMccKZd6jUdkNLWopsu5Ed7V8k"
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
