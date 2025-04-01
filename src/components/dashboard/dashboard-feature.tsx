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
    "3Kf7cC5sYdyMor18gEK6PQ3C2xHKA9PzUsFLEbDx424mQ1f85RP7Z5uCD2QybcVcxz2GNyLiuUM7GWMtHWndjwGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BPLL5C2uYBGQEYLfhpMWgNxm4is1qxRdza2Np1eSsfuKwPW87W6HRUsTGAbdk3DkRixszbaJMPuV7JNnejr8QZy",
  "key1": "2fhNZNyeTszR7bCWQxBdFLkD1knar3rJPB6Qj2p49FLZSqhaoeMnahFW1qLnsyM7s8AnTLoe6afAD66CBRkZhHKb",
  "key2": "4UKCaK6iqRpDS2hfwhY2yX19JW9iu6nidLk4RGZReRX7od6moA4xTm5VzvNUW9ZW8LPTXLREQyGoVZAmLWhbSfuz",
  "key3": "2uQombSAoD8MvZA5FdgQ5AESb6EmDsa8UWh93yyp84LLWXczkCWGDgwXC83rgd3eGiMRPczgmBrGsvRusqFTJo74",
  "key4": "4JPQLwhjGmoteP1kj9A7t5vGNyBVdRdhwyvrPi5haz6BBYzY3Pi49qSfEQDBMA5wGaQg1qw5CBxz9c3giEk7ZmHq",
  "key5": "66SUCUBH4gkujqE6iTc7UvnygMYiB4BAjHCAn2ufgVYT46HSr3knmKz3RJ1ahoFua9gvouDNPPVAEiXg8tPzkoZE",
  "key6": "46sAgmVN2i67fxDnTELYrwx5v9QG72pD1QgyaErfJLfa3BjGAHQaAvZkWF6y5wMSSjsTU99AER6nmjezosYSf6o4",
  "key7": "mDNfikSPb4tVmFUxxi3iTcrVB3TM9dwoRhNe4bsLVLrAZi3q6cdZpYh76LBZppaS5KFfJaQ7vWYR4Jqs59kWdbY",
  "key8": "3na6Zsyk5zggiQhF2HrbkEMa6a32JDxszj6uBt3r8mmiY64dTrKRCY8m8xVmwjjHiSEYSCXWPjqq1t6E7nJaHKDf",
  "key9": "ac1X2C39PJ38njzUq3wxsY5TvDUS8bHi84itdLSUzxzQcgdbzDyL7ExAHrKyC7egxNazq7T96xwfeyxTCSCR7mT",
  "key10": "2w2YwzAgzKZcrYou8e9frnzgdT7j7eE9B2RAqakdPQjSwkCS6Grpi3GaNDH3j4o7EfAgEUby7vcdExbbva8x1r3A",
  "key11": "3WV3RwtwRZbzTtmypMCaqkpH9iaj1A5RW9SKP2gbAoCNaGaoi8mitmTAPD6qD19KQWqyRa47X751u8jRxhPKb5SL",
  "key12": "4AVmKv9SsYPc2x5qky3sBAhsVLg2veThE3FiFQcBX8R98y2dmQ7we1YtUJDepAdBCmcG5XJB13cwrDN6DbHcMHrX",
  "key13": "35LGgiKDSFb26vsHn3GcsGyb7ct8mBC4SE4n347ebPyt7mucbzQMc4Ft2p4YFmC5hF7hbBGV87Bmf2rTH8ch6DWQ",
  "key14": "2AYuPBEeJmtasfNatv5evYdE2BBKRWTj8H2fqsAtvY7J9f3p9VLesSg5HPaybRfMwXfSfxZCPS9UTZmpyqzuiwXg",
  "key15": "515CUR1HqGLVSaeEBcE52fE3saype2TwKeh267NhMneGaJuf273KvD37wDNajjKRt3jbAY8bgfUNU1acPvpLyeL4",
  "key16": "59zWZVjMdAUHuYHoDewF9jD1A2oHb9dChxa5mVobVk1sFFHUDpuXiUfW8HiKrfYgyc7mF1Q7rLdWXuhb385hd1WE",
  "key17": "5gnDM785XW8e6t98WJeCRXSKsLmPCT6m7zzTyhGTVYLY6eLeAxZoyK9SSPCDUbt16QoJbTmwycPBGbfbpoDD3HVu",
  "key18": "39CozqXUqKEszeDHjqhrcbJWXjetm9P8CWz3ovFHtttvVpo7chudJCAZyysSmMZjWs6A33sTE3Ht1kC7y4m5cQFe",
  "key19": "5QdWf8St9vV74cQ7NREwY2goJHE6j9yJFVwik4DbMtefw8tg6Jp1EuEfA2dWzpQf23JF6iwVWNuGRjBoa46t8T1q",
  "key20": "45CuWseNEox9PQu4EEFt76e46XPbJxkGdXFEAken9rE8W2Hp6yL96G7deyoztQrs3bwyJyKTY6aNw7EDqtbmRLww",
  "key21": "4RJM5mhownUDkbqJus4xd6hp6L9eGA5YMbjrpCQsmkt218hHZ4RtiXFLvtS9Gn5svR6i247LFy6jz4Btn3RGyMdB",
  "key22": "5Bjb9a7YFgiyqF241raZtt5khxvXcgxY3yAidvsnvXbwDogLicRFx1mR8kJDJh3vtHnGahRiYwp1F962EC8fFoQr",
  "key23": "4Fv88avsZMEE68YmBCVGmuNjH93SgEEggVJzuYEkmrJmQpaYy1VVc9wXpHHURfzCPvSPfaJ3kw8niXR6oEfzVF8g",
  "key24": "2As4ajACNq3h7Rh6ySK3V2Ke8sMtJv3wdkSwaxZPafN4pfGrefPtc1o97o55WizSoGH1fe2nqecmxhMc4nJqWh8M",
  "key25": "284ZRn67Hk8jeNUuFizxnsJzHW1PMHWjGgYUDgMQgutFkfP9J22ZeH5vJYPJCq98b2LzS6Rs58LPr2ggHpkmeDMh"
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
