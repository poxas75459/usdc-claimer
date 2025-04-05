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
    "QPeRkxzoNoDB85Y3biESTzZ1VJNbEQbXtJD88qZ5wWzfcg88WWUxx7MvT5rxR2efAfjb3XmeKWWKivCLZxagcKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55eH82vLoBxxGekNTcn5MW2ULvDtUpMGq58fUihv3kht5nfggpf89FJhRqA3sMwrhmSVbv8QdkNiNW4NGtz19R9J",
  "key1": "5QfzFFvm9WZnyKDWPVkr6XE3KexsxkD2vQybu2hQvXG7VPmeC74vPBgSnNNJDHRLAN2rk68CRmd8Yb399Thwxjsv",
  "key2": "346VxwkYCUSMF3yZxFgeJvLWDp6hXdaKTvNyd2RozUrsJWNmaWw2SWmQF6oPuKjVizR8TB5szQ34gWTrgZXiYjFj",
  "key3": "2FouQshQN4ha7kejD6SueVozfMyBzkWLV9ySLuQkZb4pJ5HtS29GtQWvfbYF97VSKwEsJ35hRpZZLGhsrXpqA7LN",
  "key4": "5eqXocXLCbBxhCZLNGL8QRBZ5RhpvWTx1A57bU1K1wLEPqo5yjN16RWU3oPbxcM88SieLWJe3J6qiUKQgkWpaNPi",
  "key5": "sxVk7CMZRx4atDrhuoxT8jCyRfchNqm3RFoPzShNq6nRQAyX9rDwcyWMTG8aDFazPFv2oYsmGuKgmHspB9s1M5t",
  "key6": "2M3d81ArsyWgy5qdzudgdNFrQCdX5NKyK4c4uhq3eFNBCP5yjxyDVmXPAvFh84cWDKUCZvp1JJbFsjhjBG39hPv5",
  "key7": "5JyFzFeiqoVH6i8fpfFNgh1kfjnJYfVZC9dL25SYHjFDe7zG9drNpsqLBKmekRVUMJzxY1MJfLpnDZQ3NYGyDaZP",
  "key8": "PY2ggLmnxjsp4vNFXkgVCEMLYtMt1HoYYqVeABvcD6Etv8GMGpvhWjh9GQTpusuSd3dRmaaAiPYA5mfhnXjARBB",
  "key9": "21CWxJ8coB6pQYeJamfX3tBcqWGeguFik51E1Z37pX8DuF6ycFVzbLrq2bMSRzKdS3RBGjS9fJQgmMqUnvFn9evt",
  "key10": "zDBJ9NuLUiKYN7S5Q3s4r1iZduPVigGv6S5ZiraQjbukGvqGZGPLhHLouor4ymjedfQZjWVvfoY1vocHfWTH2dt",
  "key11": "3SeqW41E8W7RNiHKHjRceAFCyCy9fB1Uj3TKx47ByFZqw9v4CER93rkFh56rCFkdxQ6tJbXin2gjcwBUUaSJi49o",
  "key12": "5rgwqi6a4Dn2nTYb4y12BRQ65pgBoqd2hHgowwYGmv8TYp6wj8ZXM2N4SshCeTi3Vegta52JtVDvQWymLiRGxEA7",
  "key13": "4QedtNMWtpvx3yn8J3K95wemF7iEZda5FUaZDyutBYs9m9fojA7WftjRbgULtiWGpxZJAiBWPeZWszYjC7eC3jLw",
  "key14": "5MwQk71AUD67NMpGQ5SrM1WCecxQ5LUrBGe3ri43kbwECw8gp3WAT6Lii27cKeaJjmBShwCd9VgR6bL2NidLMqGf",
  "key15": "3DeGfwZEM2RrbjApHRGbNtPKBNondipqT5AcGyQ2j61upRnqXWRQ5soD7KvPA5FAfWkUAQ2yWue23e5WkFbrB6Tt",
  "key16": "5TvSvd8x6jkCeHCBEfoW6sMgecPq3WfBsBKAnQ4PYB3qaNCRffS6RN1fY6Fk9ESPPrtuprKp6ub1PvSDQDBrCPxT",
  "key17": "2Q8D1g7hNXsY4D73iUcKsZaXJ4mFPwxrBUtf8QfKKNFJWC2wZvEX9bfGMh6R1dDf7xYvKjQ6NJ8MKncA9c8kaY76",
  "key18": "5aHwirTihrjoen9sS7Ly8y1qoEYmkdVxYDT6hFx2rp8sjG3PAu4fGU6JjpcfbrwyJfjQVFVsF1d1mMMipnQEubL2",
  "key19": "3Bx6cbfAYdTNxUuFK1megUR3nFW4JsH5TvocnRAkstdbYEtSH8cCj2GBbVsyYokKdd8W9t4xStgBTw9UMn1ocHiJ",
  "key20": "3bJqmVwii5GfKaFZfqT47vh1ragArPEmkY6VVPD1mHutKCVvaNw1RpJsYhwMb8KxcokSG83rseWoaS8tLEm8KnBN",
  "key21": "4y9Cc3gV6hC6PfZoSHi2GTrjneiB4b7rU9s6EW75siHoyaC1M1LachKwmpYq4XEs6K9g4b5jdWQp6YLFMgKuveZ",
  "key22": "2q3cu71f4BvRmVYA2Ay4pJfaC7VAsNV1Jg1MxtGJob2v2EqPWMWRSSADZUEM5CpqZTQQYu1obXWCdS1e1GnbkKH9",
  "key23": "2q31xtEgmufMCKVqKVn6vK9uUnQjH9jToyNS4WS3zExUssLswfMibS8z8RGKoFm1jSgsNnFm9ax4Q4MPrda6UxsQ",
  "key24": "2rS6FhRKGvdiKfTnp5CoX46ftCKZHpJmGb32FRUsy4yYLZbDGEv6zjdFbpUoBMMh5SYrRvst7T5n2TuziSpmzUih",
  "key25": "673RMJWgZttDjRimPAtyCH8cDsu42an8wPZMFXXrvMJ2znKRdBczyJ9UT8ufysxLyCLdbxY1BTxZNtwwLxNKCoqy",
  "key26": "5fkXyZp4pBA5AKuvZPT3mgyt2hfqK3fEZQ1MNvpoTKuR9RYeSHYAVWXwCZ8QZ8AMC9cqkcdUhwGp5Y3gkFaQbgUT",
  "key27": "5Gz6D22T3s9fTRvNkrbDSHucBhM19dpNHcYBYK7owPwthVojPShsQynUHRAugfkazb2C9Quf6hicvaPxBHsGYwBe",
  "key28": "49UnhuMZe7od2ntWkGwitxjDHj5GdSXTdUtKBvMkP5cwA9MAkbpptKrpYvYqggP5zsAyUymki6Cu4DTYWddJiUa5",
  "key29": "52oqA7iDB9necsSeJjrELUBmTkxBuZJww1EJWC7kGfTjeXbbpmxJX9UD2pexJRgLwtC9vTpAnZUCramMLmxuJw5r",
  "key30": "2vCmbyzuvEcJ9wYDNbFPWPxg9zyZyyX6iDJqa9Uw4hKmtvPm6i9bSX8ZRNwGhcMRgBgFfZpnttgxLT8jC7ij87o1"
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
