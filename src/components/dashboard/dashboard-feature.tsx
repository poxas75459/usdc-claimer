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
    "dMahsfucV1eprcCiLY1swuJ93oe6pTnA5EFgcJKPjxUJYzgmpcky53rVRry9ErYRm715gur31kULRi4pNTMvhij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RCHT1RHs7bPvhqZiK2BY7veKGBagqxumDEWhWasSgYvDdGV5GvyiZPVy5mwiLbJJQje3S4FZPnSVwdbYwS6MC2A",
  "key1": "nyswGHFfQTgi6APtpC3p3n2dAmmYA1RJhbzgaTho74cQGJiZ4QELHKEWxKBxmF7jUMUnY4cjTbDjHjCD57aCwNh",
  "key2": "5eBrs8UxzQQ4se1pbGuCkmL2Ry1rPQtgjGNQtyhCF1PDJu1eoVpgJsKcyGqU8GQZbJBc1ua3n9GxpCpkE6cuhR5",
  "key3": "3SbUEmmXyaypxk7H2FzTHGwLrbkR8yS3VXNAtPX82nTEWTLSH1ZGYZA8Mz9vdurR8xKcq6RN489RzVA8Qu2ThqSs",
  "key4": "4gDTZv7JKwonjvSanXMxCzR49mqe47pQNkVi3KsBN6GaL1GhoxMgJWUasjQYeMrTLXWRTEC1TimxNjX7Cwd9pp2R",
  "key5": "2yo7tRwwvUo9b6EkbjHuvcfhwqJFC83jZGHb5PGdCZk1PDQuRNeUm9yPzeFWhWWDFfSTDHEmhpELkb9xFkon1b4i",
  "key6": "2B615huoj6oXR1VaQHzVJZ5c5M8tVUAyMmP195WyASqLamDDiXjJnyV7cBhf97YVNTffb2jH8j6tq14r8cBFcM6e",
  "key7": "3JgTRyqP4R5sTNZ1DTytEJQgz8EHy4iMGVagwmftZT4mwsD6ER9k6phbzwpmtTCitRiFFBbXnJMRBPfsdwMH5eoG",
  "key8": "5sx6Vhc9pqGdd7L6exznndw8nz9t7EXkVh1FxfQTsReZK2RUXe3MBfaksFfJ7kFBwTVPSXXqsk1E8BMShgNftHra",
  "key9": "2CTFgja2PQEbvWXmXVGjrnBhQabLumJGVyfJHZjnFJ85hQec5XcnYaAJgaMMwucbaKXePFjrP2GQhiq8BJ9pWi4H",
  "key10": "CD8SXd9oWN4V6iXNCHNK3wmf6v7N6bQbcVLfkJzAxWUZUJJctNRdHLRv1MfUKAT8L3ztchCVWpMfSrMvknUZ6J6",
  "key11": "2EjqUEey9xp8L5x8MyXCCqddfjmES2PxmYCvXkyzTMoAEP5HVWa7YsL4swVHTGp32iW6uRdKguAFsLrRuQuXkL2P",
  "key12": "3TCnhsxNA2TrheZ6wYVu9MeJp5UsRxf2ZDUAGTqjrEtLxujyvEp4XRA5kDUDFpNrS2Fvz3MkGexSh8Y65krj1b3e",
  "key13": "5NLndwk4hchDEbDXfbHe8i84rdDtzFUtEvfxk62w5hs2C4XZt8KjQRBz53FAbX8716XSKojumQA3DAoz1xYZmTzv",
  "key14": "5bch3EYhfFn2CrY9DYB2xkatkcpC7331BJh31WjC5ZgEL7fj1pgYLDaTmnWdDzSPxroKFyaSZZvFRgCVrUxcnkbz",
  "key15": "5a57XRgMRH7cc3zjrsNBrzBWiVj1TByJiXgy1Qxu9b7eoCgkqVnjPvCF5XF1n8JN55f2EgnQiLBFs2JeaRmLNDsG",
  "key16": "NZS58YTc348MEnZbvLaxaSdVytYq5RFQ9foiM1cE4QY6Q9tAQMcicB39nakcFh4r1Tz7eKDezbThfXKrmyPkgGk",
  "key17": "kvnV4PgNemV5Q4ZkimVZ7GB79eeAiwkLx9zYXy8BjrT2cnQAxohV1A1jshq4k8Nq5U8C5nhzuLx58J3yq27XaVb",
  "key18": "4nyKmq8qwxJkAtXza7Va6Zs3gMXick889GbzGEzHvcJx1JEvhMuMVy7MBWdYhVhR17o4MxRTVyNtuRsZoQdTpLnL",
  "key19": "59ovFrA2stMkTEbNxmtqsae74qtrWNaqq82tRWtsR8HLwW3BvntaFQn1hDMd2g3pSyNTz7pYitCG9mfpWNRVJacR",
  "key20": "YgLbeTyjRdm8bxHa8ep957VqaqvDibfyh7R1BbZ9nkDDdCo3kNZfv81ay9E9RkW86isZdYFRDxyYcmsQGQ4TUeF",
  "key21": "45jsAjPXb6rgi4Jca5B6Y31JXFAJocqFfPVx1vUduCb2LbxPMgDsuz3WaUkFT9midB6HELqjk9GkfefKCc9RCPUf",
  "key22": "4fesGGDooYfvvBmnZXRCnU2dgTCuXGjscu6cbPQCZC9CHEK9YG1rdXrXgPmDTYrYcswn6rNiPTY9bDVDNtFGBT5G",
  "key23": "5qFMxDVEHLbM4isTvnXP11Rprgep5GHTvHVqWRjgKXG6E4FTyGRUXJvvhY9eq2wdGbat7r59mdbjGaSw3LKtMv3f",
  "key24": "4R3a3TQQqEf1Xri3J2qdsoRSA92YhSAzKs2KbxqKY2193F4z6AJM6T2yXj8vrWMo8uJZakAUvRi51JMZiLpe7rJK",
  "key25": "4HrS53hy2bbFzAA86HcbjwjHDaRwNQU3TdQPp4nopYRyX7DDUfNfYNX5ThbLoVAmvX9zKaVDPSu9HTD6LXy2Lr9X",
  "key26": "3xh4ozgVPrAX8i7iyhMdDxh7oA8pXpka6Hx41ahkjBRd9L74nxb3MsGUy4YWweo3Tqi56RuU5EosQq48mSbLxJNT",
  "key27": "3kWneL1KQtBey2PvXaqpaykKJih1oKRNRpEYapL2ae1vwQESosqTrW92LsRoMz8bMPsmLSDLwmRwUsFsyQpCJUc8",
  "key28": "49WpTJBRVP2u5NydZJPUvLSisUvcm9r1Niy59KQZ5QUeRZGsLLChSWmCYknuGPD6CYiXx1YHsY1bzFto55AAKwsb",
  "key29": "5UMhpdzHQg5izXMAGUfhMiUD6H6WzBgKf34pSteMkGzuPkXTT9spEVQna9SttQt94mDAS11J225myPBy4Zfn3tZC",
  "key30": "jKWTM4oUVgnVSZMVnjJNJwg6BLzoXfqYpTFGqbYW6XHzMEUPaGFN32MU66QZ4gYzvxiKv78HmNtqDVdhVdNiXoJ",
  "key31": "3TJMX3pgs5Ct5qZwCytbWskyXbToHLZBVobiupqjKX6bLTUKcMJffxk2GbX8di11mQ5hXDag7BmjWrbgbRqhcqt7",
  "key32": "3LPMNM92JLCthDhva6HWJsWsHfik5G9RqdaFCJzwUqw3EFmzsT41WPSdr2PAFaqguBszhgoe4ADLUpsbAkEHxJ1g"
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
