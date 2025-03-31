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
    "2oQaRZU9qtskeS81rsMDfrJRaZ4WbR5fYEjhDfmxiGZ4uVn2QGHfCV9WSUA6uGhdDZQAvoaibNf33Bf74bQp3DT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jjRGWn1nTuoHPRziS2koN6qmRzhWu9cdtKk7yui4iAdST27dYG3nvwtSrA9uJkWVCyimT9tEAJyYs8X1TZ6v2Wy",
  "key1": "2BXc113HiZ4WNZxpN3skPMbt4CFFtsWwBBHkgSv7tetmSjsSfC4xqUBrDSyx2sjJMiEzzFHHom9zoTWrrD5FvcoG",
  "key2": "5qFFbmWTVuvVhrSnpV78bhxik19sbRLNHSGKgNywFJaLD6N5RoLigAf5wdvCERfbbf3pN9bvfc5LDvigKnBayZfh",
  "key3": "2icFTUHcyAfwcb3TEfZ38myx3CkcLhmNmUYz2gu2v5KXU4qHq4qo1caKBu9tyD31UnevqLduJ8MdCWCxc865LSn6",
  "key4": "zhN3XmUY5GdbetLiepARNg9C72JcqxeBMB4HAgKc68BRNfVVYFRb4EJte4kz3e7FTJPAwaYuYGHqsZhQv4rhSdZ",
  "key5": "59uqiLv5DDHhJGZ2YFVPKtqmy3xrNgZsywt3FG6frv9iw2L9ADr6UonXxs81Pr1D4bHikbBDVg7DKcQ7gaQtXhP5",
  "key6": "5HZhmAVaCQyYXBYB4Df8aKGnDUdvtN3dstcBXzVtwPNz2XajPvxhYg2fv9KrGR4fHh2VbQy7k9jhyiY6Wj2B1KiE",
  "key7": "3bX4rgfKnS7WpWuNt9qpzN3LGNFvgxgnYeVs5eRsT3UeMPF2Xrys7mybca8iqBX1eg8bJtSNM7HCGSTJX4dkW3vw",
  "key8": "3uCNizqYiak37WNQq1QNQruSbafa4r7fYmVGx5U6fVST76q1m8UgMMDH4rGAFRx6DizrwhXDZYYgCGkGMjTbe5bw",
  "key9": "3z3QdP11SMYsPT5mhHFnMrB7wEVqzs43JUtWhQCHi5GtRdKaeiemJbwQsfiGdtRNQCQ5ggqqPXAmQLXEjrNhcEA9",
  "key10": "2ateLq3kP8cDcgt1pJUQ2b4kAd8E5TXm7H3oQNJ9jP4yhAnR6aW2YQ9aw2MBpb5jVMez1ms3je5u6HAnDcYgqW9m",
  "key11": "2p2tc9BX9j5AWdjd3duKLYmh5ATn5R4AGqV5X8BX2hhoqocetbQEdCekPqTd2S15FQNe24ScTewVWT8tq8oXTRTn",
  "key12": "4P2zDCsKGkjJzYmBXipBrsi6oCcVK7YoFpH9eowkH6bRh58YMveTRepjoZci6kZMq4LobTNqygYWQC7DKs8h3khp",
  "key13": "5kinFEofuwzuN9dyFoHUM1jusBigrF5rmxp2PG16iy81pzTvRVwvwVdX5CHyBMEcUuPQETWSKpxiBVb3gW7SuWUX",
  "key14": "63JjncpmKVd4jXtXvaP5yUvDhdDJzPZJY7d7JRFLamj6QDT1t5AbkqGp22rxguugJa1xzpQs36eV1sRGpNe1Fum7",
  "key15": "5RTvZSoMCY9uSRzR6ra38tG1enUCnxjANbPHB5LuhEZzLnC2885FjCZV1FquCmrAucWKrWapYjCzHnMts3S1kSii",
  "key16": "2t6zW3xgbniC8HNXZxHPuxFBkZo2RDoZCmt7K3mf7SpWnGYdTeMMqHLT85aew1hLULBgXn4hcRVaqcfDmmNYWukP",
  "key17": "5srusGkggpp6HDQqU6f65oJ2QrkAA67wbzxwMSC14JDZHYaz81h1L14HBojJb9ugX9kFeJ9CjiL9KzqzidYYw7Pp",
  "key18": "66FLQauqhShgcAFqKFts9Qt3K77rne8PM5h5e6it9bCNH9btxKyZPHbNo1dgd2bKMjpHQ2c52mJX5t6wubffhcVe",
  "key19": "3mGEq34wthUsXkfH45WGdXeN2ZtHgY53dhZQAuC51ZW6ARqvGSTkUpJE6UgCBRLQYFNwNJA5DZrbKw5dnA3Y644u",
  "key20": "4LwnAuLarNyQcpqj7fwEkiKou3yzoQTUSMH2dRTac8XeAYKXLAVakeMQG1PpRxCtKnxXkBnqi6kNHGiyjBHN9XS1",
  "key21": "3cxZPA1cgPj6boTkDzUAN6euR7EJF8S3uaezGsDmnVGNJPLS6GLi3n8KkWKHgxd7pVSLT1E2H4Ds4ru78a1WRpm",
  "key22": "5qrzHLksbszo2RLTjnbF1jh5N1YcTiaWZtVs7JUA9XcEkA4wbVtyBPXEa5BLWmaww9s3pXNh4EFejpWbyL1dAJBH",
  "key23": "35p6WtMnxWj6A3zngEHHQ87AKaXbxdmk93oqhudekGTf8u8SmaAjhQV2Uj2Df2NYDnKC8cwBw9ydAWa7wrAeZuWA",
  "key24": "wZ2fgXvudzPsQQp3ZCvkFGj3A7W2jyrTGeq3QMdS7v85FDxv7BWxGhSkMKs836zNZZZZaYuyveEPUKXnDHMuq47",
  "key25": "5uQEJbzD7yHJsb5qQoW8qxgBW6oNbCJHtoPP6zVU3VvYn32ifXxFFcKUt4r2UcKc48GtMRWnqtbcWGqDsUFqwu3p",
  "key26": "2nuMbMYqWG4vdanXSVzfBQkyUgZijJyTFnUi3rudFsMyHCgj7awSSDcRxytKhPn7XG8dsbshQEaoTq5RrsmtyUGY",
  "key27": "R9cBSv44fAYfE72dPLpw6ai9YfycLbF9uwGwffe3JoazZTrAYckWNCM7dM4TXprZ7JezCSBgVrJnH1wEYzYQRiL",
  "key28": "qGoHAv5v1iKRiCCX1TbMo2SAabXnz91VjqzPr8QmDFAWgeRqKbQ7jbKosDgoZEGrDexbkbKK3jmbmGW1wUov8EX",
  "key29": "4GPX1yXgFZnQ8aWfmapEjrmA4WmRj4A81ZMHLvCsHK9BRZiAJ1XTm5zzxwsZiQefPXRP4cW7G1G2xDzCU9DV2hx7",
  "key30": "5LzkK27tKjtk1DyCiCY27jbq2PfWs1o28t25G22LoAPfp8F7i1d3Dgcc7tZhUTtYqnzgg57uZaAFp6bL8mpg8LJb",
  "key31": "5DxJGfDSU3vH4ZomuMobVasNEShq6bvpdL1q7hnnJ7HTPxc3oCQFSk5FuCQJH1dauxXCorR2BSfJB7RTRiv1c4dt"
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
