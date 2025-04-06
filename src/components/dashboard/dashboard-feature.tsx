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
    "5D6h9LHRj4v72HyY6yRGVtaJFAK8pnrHvXdQcsw4at811nkCg4ahfHiDbWx5qqydRSAJgZaNA3ZyvzVPBT6H6h32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mQCjFuwTizz1pa1QC4KHJAUKdo37b2wASsLe8HSEXJP9B4ix8v4hV3qXNLRaJQ4nvSwMa1konvC7HdzGJtCfD69",
  "key1": "46Bxau5cqh5A2NSaphESAqTJQ5914KGCA3GNL5NBswEK4skBJrpDQ7a8afwMjrrkEpp6ZJx8hcQcwEV4MSeM2LZn",
  "key2": "3Ks3okcbncxwHP6xnyTMR3aRk8MJAjyDKibCTVnT5NSb77k7dRyTTZeUKQc8uH3mzyE5Jeo9npCrV265R6zhtN1K",
  "key3": "4pK8vobuec9rEeRqWS6HkNUojyHvayPsJ9BTRvkFKJW4wjt9Ci26XDi6bqp4Ft3MUKSFJFs3REFJokte4HqGNYzC",
  "key4": "21vbeQTFib51Su4gRpUXwEKweJFsnzyFPZwNXwU3rK7CSPvkvK6KNnbxjbbK1K2DNbr8tZhRBYmC3i5nheL3sCoV",
  "key5": "2oqhf79Az9AALET2WnEChQZJGEinma3QuWcNrXNErJ2wXu6jLeS7UVXqPnt8GauKiKxrMJPN9U9ihuqutpFmj3jj",
  "key6": "4FTQjAPNj2giafWiwGjRCnoGieVBv8DaBfWUtusuFiC5vxipsPaBpwG4tHhtCSjsxwFSxRnbuihpp78XCf3N3jyk",
  "key7": "3Af98uFKka3H6zT9AjX9kb8rXn932p3mjsJchKYvpWVQUCnvWmaCPBTnRrxPJboKxdHLUjg3UnuB7tMToKTYB2ty",
  "key8": "37j5QUHP7fk4R6aDSp9EnsJ63bSneUg7ViqX96E2qgM5zwGgKfqS3yo1nfb9nLtkYBoMQPs87LsXg3EtMN4qEp7D",
  "key9": "2ND8oeEuVB9NXHenFXim21jjtTASwwzJQwiXUdSWF54RgEdTUrr8uHpebL6iEBdXLSrxVaxVEvjAPhXu4nxazyXf",
  "key10": "5vpRFPun5TByTFUhUp4B93GoERk3SpPeE7jenbkUj6ocmrEJuT36wdjEiZdURrL6a7TZEgQUnQfiTg7EnJkYD43U",
  "key11": "3W3D41WxHGg6ntgUjGVJMY2qL6mNZZ8Jf77LrD58SqiqSj33HfpcuLua176NcqxF23bXnK7VHAmzkgQH7LzjXjbY",
  "key12": "35E6YQyujNPXT7QFgeZJkY9By7cWbAwGZ3MSugcG6uJ3kEzk7bg4GthHEiJVCbB6K7CD4ougzGQQscPb3LwoNTHH",
  "key13": "5cUw3XJx3kgzhDyE43GCZo7UNTmrcJcEKdLB8GWKX1oEuu7DupAtcjcgJdCm6TPcj4aqdhG7ugN1t83CL61SY3Hs",
  "key14": "XUweSCDtGgNZzRJ9TY6Uvvbz7CpFkKMxrrgUyVsBa7kLiQRAsqBAipmAokzEfthiVywdAKhWS7yDu6Lqmqfau3E",
  "key15": "3oqYsT3g5uCMh4my58Hxwqzbyk4NsrXCLktThJHrE1FMBwhZJ7DchxAg7Wk71J5uBhXjK7AscdU6ytoZEMAqeNL3",
  "key16": "3VYDWV8bgVKsEdmaBtfjAXXRLAKeBbKL8siNG34JotcirqWc1eWcwn6Ca1y9ibYedFHgjiqUNwVjHjt8cz1KZAj8",
  "key17": "3neeZw6Gt2uyCiJjsR6Mso83fzGrCJgZkci7hswRF75WWjyzFxhLPgKAWzSnPXy2KA8Vbze6fuvzUDJK86qWt5TL",
  "key18": "57aFhfY2fa7Z2YSgMv7uZ4rzHXpAvmaw15cUjjFTc5tTNL5oessGtmEEFNKiF8Apm7H71oaMkoeR9QyH3JhGi5nr",
  "key19": "4GvK7omGfTzWBRqoxtzJ84E7k4r3pbDQFieSUVeSXTLfvfvMZ34raqcw4SBRqweScTfLJpWZRxkVoMjY3a8PXUcc",
  "key20": "4dTnXgynanLY6Eis5KQ5AvHd2P4gZLxNErvqfFHYf6VDvEK1XwfyvF3roQVSoXvNHi9u3FWfi16MMrArsMrJ3YHh",
  "key21": "WLAhxAQkTjshroxqtSVTM9SHwGzkodfJHTdK2yf5f8nQMvvEbRppfxFuTiJDBhM4xX5qYYLD6L9BDC93ESUacSf",
  "key22": "3cRUtXZCdJUS5n7CjNZx5AdRQkeUTnPNaAnsuyLUtwGj5ULLgUZbKy2fQEJTSCWejwhTRwuZfK8uvoxHnPdGdMNB",
  "key23": "5oSKRLo24o4sFFb89Jr38YFKrs4Sn7D4GtvDKjLKYNfV5PWd9na8DWD9NJdSVmjYR3kHs3LbKGkA96ByFbsn6T6b",
  "key24": "56nfb1vrHrFDFhCqAP9CoiT4FpE6ad7ZADicMXEf5b3f1fBfnM972LACofRzuyUE7XUKCU9bKFb9H7RkAfZjtU5E",
  "key25": "4nQXHth4VAyo9Xohn3XW8vwQUiBjGuczgNoyhc2ySECEWSqsGurUB8rci4gXQAygDTQTayTzDyZ7VVSN7u7Fujfh",
  "key26": "4BtVWW3RWeytfdKBTENw87eHrhkuWFFehXiGTENACrFkbvSm5h3A3w9EoYpFNLfCQqhpH3eHWj3XWuBZJbu8e9up",
  "key27": "ujT5aePjcJTz2GMHnrbYfj1YVMPZWGqsEyg7eKfwwbh7UPgrdAenTyMvwH7e92jg3g2LA5H2GvdoSsphxLui4q9",
  "key28": "3HcGnhziszvRahxNegpRTfr2Po3kteayqZMTseWENE6yuYtfGq7k5fSSkdJadTQK18ouRXPorcUPwsELiYThi4yN",
  "key29": "NZoXX5DhDBdhH4S7UGdMs9gJNnx8TpZJtpgH3jo1VogWpAzgFq75dS1zP8w1u4TXrCNkSn5MXJ77efpB7btjVh4",
  "key30": "TReY9U97JUA5jFFD1MeyPph1fRpbfLQXCggEYamnGc7okfhCTaWGJkXU7cCYDA29RZ6LBXH8UQBsXhWxe7Y5jPh",
  "key31": "5MpnqZQgCHjpLbT71XUUhVwVPtmSb6YQLLAd3RjDx44DgF1CqAn66eqoVpL1Lcpq2o6EHQVFVAYZhHSUJVKnh7Jw",
  "key32": "3s8N3JXBTX5BjfAbEjWdd7CEMsBwjo2XamGMBRJsRyAcxPQXzutP777h6w6mdNbHfe8GtmCav5SBmcW7GSjqTpx2",
  "key33": "qT8L5PxSH8FvGTBE15RzeAQjW5sJoTEBiHLzQNpWwd2C4FZm1hCzUUtNbr3eaBZJLqA9uNNJQMp3to9c58S5AzV"
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
