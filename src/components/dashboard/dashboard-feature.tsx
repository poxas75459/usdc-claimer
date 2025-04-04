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
    "3MhnzZ2AFdxGemQkkgNAyEqgqYdiFfvzHd6h3MphNcq6hrBmQgsFy6FiTDiuNbSVsX6kMbeJiJMzKWiM64EftJm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AimNqGnZ9u3HhZ6a7CQZxCmZc8VXPfUqxnSUG7T2YzL4NNGtKzGFu9yTHWygSfC5UcjWEKUCergttZRbb6hUAsc",
  "key1": "Cen4ipCYVnPDF4mJMhVKBif46bJkq44AwmVVjK7DCDsF92pWAdbVTguK5PLLqv8nqxLfVPJ36aki6Jhie4dGn3d",
  "key2": "2R9GZxVQYC2qUHHXaEDPir8q3fqegaXjagVLR75zRrfe2v5uKCDAuN4tjq2yt4nUJ4w64f2ebGP1AHKpXa4tmMiX",
  "key3": "54morEjUbAMTTpuGWf8AgSbtjuRPsdosAVV4AXn8Dvxtom7WjznJi4zMrLfRnxVRfPJBFyvDmnZwCZRZYko8jxie",
  "key4": "3nNZxXpqh86u8wH7ykz1w7tYQfG56LuUfMZfjbjj2uaG7MyfaN6dARUPA6Sz8e3knAhp6MuBfGHVSW4QJoNC25uR",
  "key5": "5UgqUWEe8H5pU6FdQR3mX4cUTmQnW5DT8Kn3bu4VaE8t9926G3WvzsnRmveLTXqeQKQxU1dhoTLZ3o4cHztdaabG",
  "key6": "4bH6gKJfH7ywvCVL7SVh1frt8pd4FWzkSPPZgWSU8HwS2HaTMNu1tvtdYiQmot5GvAQJB7HLXunskCCLZc4JGtcH",
  "key7": "2nDVSjrqX5oV46YF6R3YiypmSiuvAWn1ghrPxEkgacWeDWgXKRseAosDH6kqFq456ZptMgCK9KjzbHspnc78szbW",
  "key8": "3gj5qGnmixSPyLhnirQ8JZNCQQ7y998H4Siq5ZLsyPDn8coNjiVrY18fpKiNUM1QQjTVbYcVwiXW5saAqqKCoqpt",
  "key9": "662UtukHK8JSq68RaSGg5FubAXuJje7njUeCjVWGCDZ8itZq2GFXLZPw2CC1cUeQnE1j84bpdts1Diq81wA6wfsL",
  "key10": "2dgYJHA11EMK8J4yNKPZEktxgTRGfLg8FL8HJyfkuSgzSQG5882RRepAwF6XmAgA8eBe9RqedNZdCBWJUgHaaqv2",
  "key11": "2GtL6zf9DaUhBYkHQ9hZQCZ39jgzSDh7H1GzBg7vavgYGtzRbvV3Gnds7GqhzFC7XiyzLWwSAFqM6VXAEwYjKvrT",
  "key12": "eJG9gL7mNgiWAcVtRukpaZD1fTzLHBoGRK2c9BTREt86ffACRpa5Rj8eJqJSAVFmG2bX6upfpZnJksS2h112sKB",
  "key13": "4s6d8WLJnv756k5V5N64WCP3VAE2WKr4Vuvpq4x6VjxNe1nxA3YbEuNQ8xfqjP7sr9YPgbQMUSKWX89yrv11ffnM",
  "key14": "3A7nevpoC3zQaZ7ZNmACjb2pddhWfFdEwgEPeSAiBSRemi8rYJp3QXaaXXwiTLDTYue9yUj93MQGX8UgVLpPv3dq",
  "key15": "5yA4jDCPbVXs3N1ewHmNcgty26ev9xqHbKRsscE3vh2hcYiuiJ34u9WPBnaN2Wt2Y6CZnUYvAAFiw4HJANaxGPvU",
  "key16": "5yFYixJnnzdpEEStp5Xjkb8jtp83moVnbeBLpCKLPdn6rXT5tC3dFQ3fUe3BuxKpCdH2A2Z3Tb2fayvYfkQZdYw1",
  "key17": "2RxFazo9tU9pwazHu9MavP4XyjxJW1YbJAn4HxPomLk6onKPk59cY9s7C7eyW9Cfeu32SwXuGaJ8mDrmV4kEYajH",
  "key18": "5Vi8QNusNrryEM1fbgkgtUc5Fvd7p8u9BcNJKHa2nRFXNxDVupqoH3T6JqHfuv7M2g1J6YaR35EQHsdUsZifh5qQ",
  "key19": "cDYFnZ41sFcpMkbvYtuUk46CmWXLTut5go71eai2r32CWFkXU1F18mwjB5L5KZAAtw64T9arF3h3BNtnaRsyZxh",
  "key20": "4P3uD8hx92YQ8DUhJhjux5yedrggVELHiEjPUMnHoCE5WzcCPX17oB54zxgktnQV2PzwLoTVgenh33QHFxr5s5xQ",
  "key21": "5Z7VE8wLdyV79pUAVZBXNStKbRJQsoez767taDaGWFPt5KNYTVdFP1rDMZ4CvrP4Epe2J1u35MGvdQtbLXWDLQ6U",
  "key22": "4jEC1gwY2Ug2uLAPMbBC7zWT1KkiW1L7i3usLMEqkjvcM43yUnTZcSjxMFgqzLuxNGd3EwMVkayLF16j2af3hXyy",
  "key23": "3JAjNhxCbgeJ326WgHXZHKqEDnNWNaReNcYtBxqBULDXg35LyHbCLQyXJ3xzQiR5oRKBsfBhi1izf8ADsPTHBW1K",
  "key24": "ooCgDoB8TfzXXHsxq9kZvMEMXnFnFfLfKBdJJm6WFJbj3ETCJsn9WrFFvBymyuagiwcX7PNFdrLfzkHjJz5b4fF",
  "key25": "41hT8nA7Mi6Ga9LSQPaqZMN5vAFgLbAA8jiP8m4nXijpZSTfGqH2Uejemzzs4rJSvndouJedja4tLefqxBVQqjsu",
  "key26": "ji1UQnwZa7goQxHFyEdduCbdKKb9iodBshSn1KdL4d2csLNJztkQaiWieytuXgVhDFZZAD97gyo9tUYujaPnoHT"
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
