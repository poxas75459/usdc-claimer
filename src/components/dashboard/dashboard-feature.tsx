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
    "TLQyKY2a1hoS1yZf8PDhW5vzzSjxJRp2862C6d5UHxfLKogZGQr5z6iZBQpSe9tpahiFxZfNvDoyA3bRQn7wsi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pSCNSA5QyJipkvDKKw8spNLsQdADPovnViQyr5AH1gGcqcGmtdfjC7QqG9eoSZ3Cc9zBFgFhm7cCTBK16z8yj3H",
  "key1": "yhU8RS2jspz1TzE7PL8bcpuW62SNwepyhC7qdEKLZxaMfDcYtar3z3PGbWD13LTrueVxqzQYDfQJSxFFwiY3cbG",
  "key2": "5cXi5kkXtx9ookHFQivnSz5AHZjgjrf8h7VjGZwNqsZAPbXAe8fYgeixamrBwD1vu7XXaXujY5RZMNLpmweLorS5",
  "key3": "2NhCa6aUwFzdDK28A11e835txF8BuvoNeKZkzyqXvzmpJUMZRiznBijTrKtzqBAu9BHXT3Z47G5z1qKeAV846nYx",
  "key4": "z7DG5jprzUaKMVnzGwwbXwnY5md6oSFdv4N2oXS2Hv8rjztR2ky4eAmkVqGm5tZz9UcQYgCQ5HmSx9ze4Djj3d1",
  "key5": "64cpWFuJnRudjZ7nePPG9pxhwGe6EHqum5fgynEhYQgVMdhwEt8iYELsXYLJBdhUwH7dmUhcuBft1qntg7iMGysy",
  "key6": "5asuQYSQd3DP6z398DJxhkNz5YKd8ZCqTeABpdM3ByKCRQttcH2zsTA1YumoCDQ4ZSTJUmkD8U7KuisqxSrxRuNX",
  "key7": "26E7PCdvCBM42yF6kiCbYiQ1QQqsqGyKzGP1LiXNfdU59Md1JjVqRB7DJj8GhnDuFQek3gXA1N29K324jKWDuYEe",
  "key8": "4uLPwkUgHLP1LDM6mjCi2iMgzGmTc94h9DdCd3eoBkDM6bk3qgp13PY66qfePbFZ82ssUyFutncjNz9NWMfjkEKX",
  "key9": "5kq4fhsEtvueAhvHvijNgwjpem2wetYECDCDxQ5jQmfaDApgYTPbfHDMvkHPBDwQxwCbEzf2iCoCBgY5BiXynxNR",
  "key10": "5vqGN5fSga9GRvxohjxnEwHakn8gRWcsfJmkpUNm6MH39jdjiibFaFxWp1AySCgtKWJjLGcMHrjvQcGZ6skXiFxD",
  "key11": "4SjK4T8DXQcoXJdQCreRqTeEyzAnas9Yea9CnzkRUpXQh1snCeA7YaZQWte9NmwQ1NV6vJdrUtRoaD7uq8sA425F",
  "key12": "4u283pFbKu7rWj8vCuv5LhqDoJdnNGmDiZuA73NtXHTU4uwiA5hAnkDjUdZkQVTxmsLrA1VknD6SDUg7keVE9ari",
  "key13": "3wBnVpC8h3oXFviBGyaA1uJ34JghAyEySiqWx17nyprDLNWLeKLy1JX8nMbrBH95qk4ZdPNNVwx24YRkgV76eP57",
  "key14": "4C2HYGDzomP5DLc8bE7GxVJmjFSYEx4aP5t1Fk7G8hTxBRBGetJqTjn4rKdEAVwaJ64dRdy3BQw1m5sLnDLpjZvh",
  "key15": "5SGn3BdyJ5jzFSMNmVqRMiXEc2BxGMXptdDjZYp7cGDPWQs8eLzp7VnKi1pyUqMTH8ejLac7hcY8jZye1gwuWatk",
  "key16": "5VaNpoF41QyzDwSKxpAkbjpfb2xDugJnqfjyPaxXuaT3aEDM8TsSzYeRdVKqy1XtuwMnLHJQht4onhCnHkzjAEZk",
  "key17": "3v9PjFewDXqP5GSDrvhQDQL5rV8inYnDG9Xztj7B5UJU39jVLz7Fi2vEkje9Wbxke1wBcbNJwzn6A3gR8umNyuq",
  "key18": "5NHbHgXFY8aUG7Dg2jXrk9JQ7ueMxj5W5E5MFETcMpsFqZdJSdV5tNMu6T1kQ2W9YJp3YHDWGsa6hitLzi1p1tBu",
  "key19": "2HGC96Ds8dT7vu48ijLx1NRpRANz7nkT729TnXwg1wpHJTceazAdj7JYKabjeoHkh2XCsiZPkvcrxZedRYXNgDMz",
  "key20": "2CM2k2TFzFkaWokAKMtspj9vUhgkLag8tEHrW3jz15z1ou1LWzuFwbrAokys7scbQDPDgzy5fUnyf7NSJrRdU2Nn",
  "key21": "4hJeNVa7mNnf6s6WXkf4Ejahzaf6EaRZKJuMVvgNPjAaQnGcmADV2sfntgAneuVyRXW6UXmzpNqNCtTRVkh5kihT",
  "key22": "5oZxDJu47cEoNksBp4RAb7d34q87Z28djwcJ8Q7N7Ln4EgesTe6zbF3yshoCQzkVG8nM2As3TumR9cktUpYVrL6q",
  "key23": "xUhqnMi8Pc7ak9LqNUDPxAZr126KowDj5h9j7BR1BX3bio4UXZyT8Tr6mnCnusWCGLRFb3Bgy1oL9m1kF6FSXCM",
  "key24": "59VYW9MBHRpjXRtwsEtaARp1fisaX79cHQ3pTxc41XPVHqcCqSvT4Gv6yomtgJwg8nn5CpagSSFJNcww7XnNHipL",
  "key25": "4e4yVyE7jMHSpwsJTspeS9JSCwyySUTSS5FE8skebJKNcAbqbiq834cDJ9D8sjcSFXTcPQpxYFwY6QLn2A4bPRsu",
  "key26": "4MK4c8xJ2GngXNbKXn12QVguiwEeZ4PgaCVuNkoMY2Ah45W77GABkHhFrhhuvQRXkmRzSyDbGxZmYmKrwkBkU2E2"
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
