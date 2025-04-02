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
    "4FqHRg3ZCA5NxXcQ6vwqZF8ATFjQZ6c6ynrjj2Pw7Nss2akKUZQVb3f8Uk38EVTP5sfLQaTMkt71oXsKmZjygyZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hckow5GUjFHBW2YguEF3x2SwinwQX2Ptx2uaak4wcZNCamoUTjE7pCiG4owAiGa32b3Ej2nyDpGdNuQTF3XrYGF",
  "key1": "2PPmWjABkvzBVzDY8fwbuVW6zugFyWx5eVZhCroujRpByH6HSzzfPe946DT9JCggm1kVUUvwMFXF8bn8YxbETkwL",
  "key2": "5P5hp1qXWqWVdbTZQJMQkXiUMqLwxQ9BVYJt3PY6w3FApf1TUMcFmUXkZfDaXRFwQqoyHjHx4kYhjwUQ1WUUFfue",
  "key3": "257zfFYsc3pdRczu5AfBdhWCM2g7SQFNoR3EDyyCu1d75AwUTyb6Ygp8zyXSua3Egxbf2JGeK4xWFM9QHB1mmpzz",
  "key4": "56vB1jdqsxdLgEg3ebVU1df1gMexqVEPhHmmVcgvp5p7eFkMVQb4fCgruwR2SGRDXkHtuyA2znMvP7pHLfyqTzi1",
  "key5": "21cY7Y7iMHxXVHdzEZQ9QGHmbqx7zeQYfBoqxD18iwKzX4oJuCwcf5puo3VYgQF5bWe6eUpkEML7JXi2dZm5zRw8",
  "key6": "28DxEZoV9GudNtEktmuMpoaHvYyLvo94Cn4QU7WMokkgRfDPugnHzNjkjU9WujfVcsf4tWBh6JppWCXq18mX1NpW",
  "key7": "4NofdKWGTKnZHRyWoWDmzDLBUzkhTABCNbF36G2q42NPvxExWk4FctdJ45hUrJ9fsKkoxY46pzf4FV4pkHbzRqiv",
  "key8": "4wZXHsLMoTs48DDLUcxc8hcboXFmNDVn4wSUjNc12iDdoQgM53Vkt6a4tBzqY8gMFWBSZNp3bgbLSVuxWt6NVnrV",
  "key9": "2rV8WpaMuokMjAxvN7s8oFELWbiRPJLZCSnj6GmdGtgyRVFYpbvwSt5eifcg3kkC2gFRKPfevERww1tmcckp4dZs",
  "key10": "37XT8WzUJ1wd3PUdcYFxQpCdHpyWpkTb514mPuNjAVDKxsdhxw8tmxwFmkASvbMpGFeeuaapu2KFGfwAFaYe5cXG",
  "key11": "2Xmp6PEvjAJ8GtjhxGgEXhvaMzZrVjYTdSN3nuMXv5coF7GbSivBbakxuiz8cFPhhrWJNRNPtnuJ5YB2T2SyAo7k",
  "key12": "KewKtWVzH6R6dn1v1grBEvFPoFxbHsHcZQpPt7CJRj9mtujxpd1xMDv6vEvTJx1oqYj4UjnR9xru5bNnnPwpuNZ",
  "key13": "2UpkAqrH81yiiwiFtpARWmhws9MquChLamGnNzk5nkTiSqbYhyZkD6ND57Uk94tVn9n5QgGqXZmMJMw7R1ZdPf39",
  "key14": "2nn4QnQM7V7jLVK6ZD9Z6vSJyypTX6Ce4CZpUi5Zkba7rJwzoswJ5iYkpshCvFvhYoVnAeXiRLyXx3i8XUJhUTL7",
  "key15": "ESWpLRveC5mKwrzUgQKmR5cZHndezvEQwY7oF3CRhnfb4U8PC1e3EAaWD5YLTRDcpfnLryLQfPwcscvqNwxDLBi",
  "key16": "4a28EVoX7KZPDZVDmgsySUKzzpWgPSHShc7gTzZ1MmKnjdfFikfdHMqkCDn3Vj8NGVjkqtoUESdsZRhVi5VA5AZc",
  "key17": "4ELfXRcv6PJSp4koEnpWptuqPDK1p9PUMrFcx3XDCPPB2d3Fd2S6Z5LaHJQ6HzRvgLU4yiVX4ctfF2EAa46m11QN",
  "key18": "4KptJsH5qZd8MUDWp17y6sWmVYu1wrkEcAwCkgJqe7cVJtJ51J2NfaMUNLnQJxqqvr22KZ6gwLNyRiyVoiLvem1i",
  "key19": "4JC4ZSCxJ9nGP2Ezx37FEvX5Rvc2AC3FntZyycnUVBrkwDnDHNMii8T7J8LNdVeMaxayRX2BwLKBtEBX1gBqc3Le",
  "key20": "5mHErcbLEZqQriXokuXAuWNHnzGUPY9Atok1wLZBP4B1NYjwgAUthagWSXccAdsGLeXF2GgdyqKm7sfVRsKsMMwh",
  "key21": "25oePwttK3oTEPePgQ5kxJxuy7qcokJieJkGzhZWXdsAKhLSVX2yXzM3vDjYq9MLccs6Y6AdzWJk4TkMBrxJK4nz",
  "key22": "4msAVwUsnwzS7a8AS7FbdEePAoqFRjZ65ieyJkVVGka4F8PhgzxhKiBVxB6ZQMZibnvmiuHYX7Xzp1JoeWBM5Muz",
  "key23": "4rGTcTia9cE5yT4gQ2J25HJ2DDGBLLNZzoFA71ABgfk8THitGRJgLVrtPEkXXVfT3riF67CKcuPqjs8BG9ZWMBqF",
  "key24": "3RcPAJMdbj7NjVyLwHUtcWVKGhg1eoU2H3Re1rnd4Xvt9MoFSFgJxDpix8SFWEeaEWsgmF8Lj5FZcwX4gaSbe12w",
  "key25": "ApqVSYN7GBTW5hBdiFKB9kwEoccbUhX6Qf1SnTHCps7oU5QZpcC4Gg9D9iKnfLt3TGj35xGJJ456ZTJQLvEU24Q",
  "key26": "3TGaGG5PHC7dt1vCq5JAcwgbrQU78zY8goPNSJVu8BVZnYaxKPP9GukyrjAqoNAZBdVzaTkJS8QMKu7qssH6PuiK",
  "key27": "57EUVJoQWxUrGsr4trXfekvy25xVpCHsJsvVqDoLcLP3EdzJbT9oga1E25pc9ARJZVFSFs9J1VFgtkowGK88t8iq",
  "key28": "fD2R7QRLVBnDzuXhj9SZhUPDfKuWi4USAraGBj61Sd4j1Zyy7Y1M34RW7vRgMApPqk2muai33eqffPxMk5o9zZu",
  "key29": "4hfTwXq12LmgKrHT7bzgDSQtudUTdbSBcDwihtzC1xwwVhHKpSdKYRdRuf2h2q99k63g51EAmLYrY2wmAZtpSuvH",
  "key30": "2s9QK9CpDJJxvASs92M3KbFcrGwms6ftrjbvVvBuMu5EVThqw5ayr4VjXeuwrac6R5SxSoBSgEP23E5mWvT2s2r9",
  "key31": "5BUyzrnQ2nGtnjWBhv6RcB4TJRG6bqPcaNettqBUhcgNrbR9aEjkgn8UR8wJZ2Z2ocEJBhndKUqpzJmrz7Auo6oj",
  "key32": "48JQzC8iQ4tDW9Xw9qyKD2CFeeKKgqdUC682jmhgrShsu5fB53XSMXPq3L46Q3T8DSQDVMwEAhpRW1rtpU6rZ51f",
  "key33": "3YPstkVEkFxw8enn9NeRWLbQCRhJWzCp4tkvbtQ2g8yaY2wx94CKcFfMv579yryoBptjnCvUkGdtZyHFZPwK8kms",
  "key34": "2YiYzwtjnJehD9CvfKKQHbBq8smcJC8bz4fvd6zS9DU9RHCfjEhgtDqtaiaoEQM8QGNoGTZzJq3uELfHP2uT1Njq",
  "key35": "4LXH8TK8QS9Nqd8M19WDWqVbRBV3a7vvuAXe7rhrkdoD2b3HesUXayRPLKnABtkTWFtbwakVunwXBSiqCQwrWg85",
  "key36": "3B8sKNPnvuDSx7PjvVQ6kddoNT3r4Nne4857QoS9cDvumu935drM4q1S9W2f6urUtaNRCwTgKaRXru4jLMwxrArN",
  "key37": "5T1izjzTFkkhR2X5Kpzs4tc3BfaVyuniSqUjnWkr8H4ebtiyPcH1MfEJmFojYsbf64hxyxqk8DThSXmhqsAvtC7Y"
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
