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
    "PqNo8dbs3CYdUBnQBxSLNqsXHaLg36YEqTGBoVhoGKitfCPXCyMaUTanP9VT5H2ostsMGr4bbMCzTTcQQgu5L9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pzcgm1FcE4e8wR1VZYEbBksxfi7vUsbkKBvDtPFaTaVragQ48s9vmE3UN5PXxrEnCX2vBMu5HyGpkHnVANRHm2z",
  "key1": "3KwwtG6bQomWkyKCWg9mZqZKR7NAKTrBBmvD5w1YLZZqgrqU8kUJ94QuMNv7qMcLJHR1J9D2YuhnjfGEfbneBdts",
  "key2": "3U8YFJRzoSfuEMWsECs4PUiSZGXKBzHcVr1zz6EHFj5uTfr5brNgp54FPbUhcabbEeR7sniaM3QNK2qjyP6yuge2",
  "key3": "4mHnLJxZuZSgTBJb2uebq7UjgCAi9ogzVF6LpYkLk2Hv37kewiyY2csVnZTieoWHUWrrcwCZKQ6pct54gRCW42WP",
  "key4": "BgnvH1odWAfmErPvjPgVwWaQ73ezznjVJjWgM7TfvjURT2MFMTwRoHwDYyFbjLwdn8aNftHq7uJFC8Y6dNFfBU6",
  "key5": "3EgFuQBgPS5VkjZBhpm3LEtwJGeAcarFZ3N1otojFWSpMTNoamMHaA1vKSWrdejAVhD6mNDiyuJS5qro2r8G9ZXN",
  "key6": "3WVXTFduNfuyJ5Fx9GzDt9brcrkcfZk8BtJfTmQqD57VY6WtwvzokJz75iMHyWKbmgK6oZToYYzFsAWjMuuujJwU",
  "key7": "4NhSpU92X1YC6LpqRmi3QvX6EykZFZh5R6tCeUY71VSAQMeGjjQY7qYbkfbkd2CXkRD7SL5BpmoMfxfgjhrHCFW",
  "key8": "4WQWKgnNJfJHoNNiNjczLbJHHtQTNYUwb562WCRFP6KaLdbYmWroQxVNMSmAsLrkmm41c9Vz5Dgj7qw63eFBZkDF",
  "key9": "3gEHRTXMrTPLQYVb1DWFa1QWwYkMUfuDwNdRchzS7oAu96g4qQ8Z6RxXqiRTav4Uxa1YbJoJkstLiP6PK69s7DTH",
  "key10": "4B14WTP5BgpvtW5d64F2tj3H2Lzmof2AG1xKw9esax4UmQo1rknM3vsUhtrUkbPaA4yEKvbvftq5PWEQaEZSdjrd",
  "key11": "64ACBe4xcztqKqQyGonuGVWY3se4xgeN4BiFy3FrBAdhQRkirE43B1iF8jwkQpxdkySTxoPzr6Hfgknp4kjHA5oE",
  "key12": "4hWCySeroUzv9sKmPLEXtJ7iHJgpHVyADGr6M763gtMw5k8HpV6R5kb31tH5Nm6JCoz49X2t7H7XD6H2Xtrvw8uN",
  "key13": "4yDdGcQ73sNV28ktVyk4kLJWqcr3D4kNbp1zsqLm9EovK3UTWjiStq9H5eSPwt6oV9PkBL2vagW8fr3QMQAwKCEg",
  "key14": "4yqRTvwGxE8xqd93wwKknssvwkG5R8GS3EbYaCCcbBvuDAgpXon9Wq9EaG6cD9PdpFAkAhQ3Lxq9zQMuWXeUT7E1",
  "key15": "24YPwh4VLxQ8yhd9YUMzTjYcHtFBty29EUFbpkNyfTk4dN2UKTyqGHVr1DhL13RzwF7BhQZVaYaA8dQ6YB5hZL16",
  "key16": "5NRArY2Kp7RjEUZveMFkg6cUwX7F95ZzzZ1iCPmKyqxWu5HG5y7TD5dpKqbbBomp5UbNUhmdt9eqgJfGRCBwjRCt",
  "key17": "59LYmKAV28d4BhpRgb1NZtSyXLdjkPn8tHNwdFWWuRCAxWQwJnAsjtDv2rcoNB6kVgJaNmFhC5z6kY7o42DgT5CZ",
  "key18": "5fmQB8phckpzQB5suwTvyHihWMh3GAuWTY7cvLVo5WmwyWEVj4chYLBgUjE4HXoVcFbui3y2jqtmDJscs4abKLF2",
  "key19": "5esgUPYUtRY8PqzUpPVyvC7VoBrMpVUmLANAp5Cko81C8XFspY42qrPBrRHj4wzYFvwJbZFM1kt3G9W2K6ftivgq",
  "key20": "4hWGWmfX7MMeXpBQQFEYTTZz7J9UfbJjJ6WFJxixbcFYqi9GWRrrRtKiY5Fq4brgCbqzAzZQgBA2Tc4g4hQqJFE",
  "key21": "3jhmDACN163J6oc2seQPapdcvECiCDak4LM34AiekTR7GsHCGrcnabbb9mx9QCV954tgbGVc7P6qwyDhUPXyJmPK",
  "key22": "2ePB1DGHaAEHnjSdMBGRD1oakHbpBaQgt7SrBt6r9XYGftQH7KS5xyPBMX6GqZr6zyPZMgCQGA6Zs7rizmZj16nN",
  "key23": "4djyevMC9HQhqfriQUyvmhMJLE5eQSGh13YL9ktACy6BsrCwnvCobgJUm6JEPszXif6VcMkTEPMWoNs37sfaQdrr",
  "key24": "55d4vmhWwjnDAT1a9EuDamy2MoNCVS2qd7JpNag4zDYZAEUuiBmg9Qf7TLUcKxpyWmqaT5qyGu8cyxmUhZWKJaVc",
  "key25": "65322uydA7kERwYueZMdurjGjbHEoWeNvugPbJ9aqvgXXbrSMijAZv5HTBGASbX7CPnQ6iKoSEMjnC5dKggtwvb2",
  "key26": "5XPVarerXTJ89UCF4ZAenE65LrYtsfEvVpGvCx3XT1DNnkcnMmWpZnR8SWXQ7XythGmrxiYwXzPpFTYuopJbk3JF",
  "key27": "56QtUvuye9c1X1BEqPHxXd1TF1QdcXVjwQceQ9Q7iLfQ9oMyrbgwk7CRxc2Dy4DhEnFx7jtFpYTkXjs7zR8PfXi6",
  "key28": "2jHQ7eQoy53QzyHQJPto66msEirpXBuz7C9GX29mXEyx6AzuY1UbnKLZQGwbP5iQ3HQtf75mmSE9seNq1bg8e2BR",
  "key29": "3BgV1rKtJDBatPM9pBk4KmSvnfn9QbuuCuj1efNpCFNSg2xJUwqmGnVrpPnWF1afi2nzbERPT9UMrDhactd4skm",
  "key30": "4KEC7eSMdEK5vf9AZdpRYoM13SFZo6xrWJzVoBF7nBs1crAwvGDd9CR2f6DZcTsW5th65A5z1hCFTrPpewKW9X7k",
  "key31": "3cDopYuG2oNxxYBVcYdn5NJKws3Z1MzYuFtaUK3XPGG9LS9YFZrqN6T7zv8wMXLSpTP8nWDnW2nmzGvuveASGpGE",
  "key32": "43kTYHxo8PuRp4k1ZsjbVxG6KMC3Mt2tpoQDmJGFUUoNEQouTqKPipgu6Tpf3zfFnyq97kpctryR5sYSxtzrLkDU",
  "key33": "nEavqdq6pKYqAk98XAaMd4pdVHFgvNUCKniKg2aAznNpdvhXxGutXmg5TX3cPcfVWMq9pxcdFLxkFw4wJbhvR7Z",
  "key34": "64qNpLfAPuUQw5CXJyvMsmiKqdvkJkHHx3i3JVzEody3Fv7bFJJRHgJk4KdjsphKp9BYkEKmPw1WaF2o7XmbD9AQ",
  "key35": "4Ad6z5ZcB1DmSYPBoZ2k4HmmJ7SiEpAE3xGiHs3mMVb8P1vhAMzTk1A9SWydsaPuZHdXjhyQ366vi192AoeGGKrd",
  "key36": "4hv9AM2JiHqQY4j6VoxCRqPxJjeEb4TmVEf5PYp33rQuNRFecHuBZVYf2kquC9kuZEZvJGd4ZHsR63PbZWHw47X2",
  "key37": "2vCQib9exLqx9YP4EBqhyXLBFNM9eTmzJqXc5FWbuTUtwJJpQNjpYJwJoimhwGwAUE947YVd7idv5ewZKa5yU3Rf",
  "key38": "66E7zw6qYmjpN4ban6QvSUipUeLoXMt8dYSD8uKTrPvWQPenkKaxDXMpQp7w9pmxubZBKnjRWZR2xo53LyrE1aFx",
  "key39": "qVcPPFUiDUQtqbsBKFdak2jT2FRxbHakkveZUL9dLbRpFMBNKY7Foq2Z4X1ThKfV5MH5sydyz6bL4fjtgnz4DBf",
  "key40": "7C9U2McrcnuR87DDw7g8XUsZkbXeJNMXjoke7a2WnaBXSreoKjA7yg2c9mxD5egiR3vkuFz8Sf8fbEeBaiVt5Y7",
  "key41": "5JhzTL9dG7vTRYax7SEP6RnnKyepCF7pvaGr18w8BzqAZZRwsnhxrQvjbzWPtYDbea6ZcUo3WcjXS2tVxGEz3VLg"
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
