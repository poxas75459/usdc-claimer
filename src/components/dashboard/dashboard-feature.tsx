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
    "61dtBV3PwpsEZsUe7qvf67Qg49WSUDgr7Ce3tJuszFNq5M7mMUXG2NjPzzLf4VUGYFJq9HViQe81maqfRANL7KKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q64RDgRfiCx3j26DW6tEbN2CS8N9SWMiVrxtQXT4G7kigWYgPfxqRykzuPwe5fkfGVNarKQ13AUAZ1mVifjZUS1",
  "key1": "gwn5eQeXLvQ56sKWFdopA4VRuRfoRgzCjYJ9iaWDDZFXwmgFymuULPz9vC2s2pHRr9pcEYj31ddQHWVgkUzzZD5",
  "key2": "4qy1ZyYBJtP6V9GNViTs1JnPurDvwVNDqRhKjYRUqpMJyB3tj2q6CTdUvwuN3KJwgfZTd4D3AAg3saz33i8hP9qr",
  "key3": "2KxTG8Y2aQ9Dn9rgHQQjDg1DpkqJJWKjBpAwRMSmwSse1yphqqAixbMaUDE8XsJ17qxRtNUhcZwgZ73G84Kkmhi4",
  "key4": "2shQaevM9fee5zvAU763ZZYqRPr1gpfe6nJswvuiQjPgVpzKXPpS4yjTmf9CgT46HUaAFbjYMMMUR9MEixpC8nc9",
  "key5": "5zBxc3RXWX5kKhSb4VDTH7PAHZmqtWsjfG9mVVgiDxeqmyEh84GfVtanvzsYmgFFFRg9Ct4CLkFm6eCDTgjRVbpe",
  "key6": "A5TUDdA4hctWJqpdQkLnfi4ezsR6yVLFFcA2enr1V8r3TBDDxjg1ZWbGCh96VMz226hPyxBbN3RuzQVGadyeCB9",
  "key7": "nVDHmAB66e9WtHLQpcT1QtBKguKHPBkPLbBuE7rGTMcUx7hdjfgonzEYCnui4BCDHGRoTXSZDZhR6mD5ZP1Z9sv",
  "key8": "4zhD3Jgr6h273jGV2HfofbRmP4b1Xv3vm7nKe3RaFeh8b5mu4wReKXV88yVfqAgUodcAYCwrxo11M6i1svPfhFe5",
  "key9": "63XT4CD16khMH4EeKASMs7KgsEn67eDNVDu5g4mZ3337o7tzRPZg6DrzaQRkzL7qPk1YugzJ5oEc7CZanZn12dpK",
  "key10": "4BD5FGQmaQogfLqFgqup18txTPE37G8wzgj7jj8iqVLSysNgfuqpPYmfMsPnmnp5DzCQynfh21t8as8XeqqZTLfp",
  "key11": "3JgpgGbZcrXXqXfppRcjQFE4nxw4Uqes9wkkpFcmEWfgyBE6hKU9rUsMbrNFucDxbibv7yJn5Bjm8Px5VpqJd389",
  "key12": "4R3vpzf9rGfiWLvbnHWHz8iqXNy2SNZkPrxzPtmLCWw9bqpoV1GizGZUd8qhJutsSkWagM9TiQNxRXGcRbDYxu4V",
  "key13": "4aKGxzPTLDeZryfobxordJcrYqKakXLmUuG8BuL8Ub6xZbCehkBL3cexqBVARE6MXzmfg4LqaA4Dt7Li6id4bdeK",
  "key14": "trpr8Ka3aiT6MJLE6zcTERigo556odH4ZTHnTni9rqdC6RHV3WcqLzxYfQbpodWu5W5r6JyMB3JQdXYjwzKbyRW",
  "key15": "3zGiAvfbTsWnDXCB1unc98YwSvnj2MzWPwNe6qyyGt5prbw9k6RsgTiSXg1EvJjEQFovcaUBTpom28NA49BpU87c",
  "key16": "5piZuvEjTNYxwBiNWT8wvh3qpRvmqp1K8K4gqggg5zFQTmCHyf1k5WDB3pSL3gR5wq71zK572k1RiogtPaMjjkB7",
  "key17": "EMnoV1c18yNU8SmjbAXyBSzPV9H67DRU419ZAeVhk75nCigFqNMa2xZ6RaLbaTWtXpY3oLC1ULWrf1SXM9WascJ",
  "key18": "3c7ZR3wg3Q4jsQAx5WLRtc2HQyh9UMQP9LCgE5uZ1Kd87XBWaMhfKQjgHxd1SokPqg7mwrCNuqkdmqGfELa9Cope",
  "key19": "Rr3mLSTJsJCzG8ikiWmbm9r63VNYpdrfxKSuN3EwLtF9HFuSQ3C9cdFTBzn3na3EdgDi5zbfJ2Zvb9Asm1E8c9Y",
  "key20": "4RdtXBLRE3eTQxKybrgvg7niB8TEWNC9KgxBMkAstWzAT4q5oYM3kKVDzXf99Q36HXTXCroY49nDU7CeFZENj7iF",
  "key21": "36T7HxyCpkbGfH2A3dYBwqJ53u6SQ7vXiXjfzZZbWvF2g5CJtUUc6RG8kXHbTEXC1otX8SVThLGMKsNGu4KGe5yD",
  "key22": "5VNSrb5huhfvT4dFdptaFtz2hY8PGkD5sA5c5QH8xSiWHDF18a5rgRLo9Rv41MAaPEfdMvXx123SZbNQEf2JNCp8",
  "key23": "4XzmecbVRQ77gEwsGDkQtBM1H3asmnggfzz1pbmbsdCatALjjecS1r2n7ZMV8mCH8uzf1R72rgHVmLCtumUSGndh",
  "key24": "512bUgNtFeh7VjJzk2tveWmMem7P4o7voq52HXqjone2Ux2BQ6Cd5QBLtc6NVreJPvXPi7daJVr5TyxuJ8mn2AiC",
  "key25": "38q2ENA3KxsGVxxnrRz4zRBGrxdPmgLEnPvYMkwjuwLK6bnA6KMWoUMnvZVDi8ZgoDyUP3gZSKLYqF97GpGuR5FC",
  "key26": "DnCQiqjUA2Baw2BY8GwJLD8QUEvWKJdUkYVEJn6GfTartNKUn4GjoxkqzkmrcWWohuzu9ZQwxzYsuzcauum4aB8",
  "key27": "35AK2UJ9idMeMn1qYRKVW14VytRMAWkUeJ6Ezt6NP4xQHrrkBM1QB3aEXf1UqUyH1zX5BYCN9vEn25pNxKxZxGBS",
  "key28": "3hFQrZR2BWuVcTuSUn5j2m9ykn54PtZudPCTWvD5v9o13Vz6M7LqHZ7DgAtRtiQ51MjwYyAbDLvmzLER1hzX82he",
  "key29": "3wLUBejyZdDGfYdvNj42jk7uExxiywHQWeitJiuhdxEa9B7PsX24QzJWnAx9Ru9EHR1imDf4xwHEzahvfcVKJTpK",
  "key30": "54nq7DhkDSnUiKb1Z9fXoxn9aSDT2GuDkv3NtEnyNWtFbzPxJERYS2bVw19fhXiCqgAXcwqkWWdwYQhKoqDC5juc",
  "key31": "nprG92Qdyq2DBfUe9fwkV5XRsmn9wQXTEGttVsN5yvXifp8ha1HKE1NcRrb9DSRNnHnPBumh6xEa3NWK7Uae9XK",
  "key32": "2TLcrFjy9CcbYmoxVJ2Zg5URiVJfMpBFx42cpbFuvigpb6dM2fig5r6gPnH53sPFkAPhWrNzWTKZaLMJ7o5oRqUW",
  "key33": "623cWvJ1jAq4i2NrL9k4GdxAbuNmHmQ7xMUp17vyKHvdgRRNCUACE8NYs3b2dvkBNYVUu4mNwFMkQXW3QCsH9LgD",
  "key34": "539nq7x6ajvpJxHazY2DVHqALaSXJJ9CiyQVhXbjjXe2fF98sVLzssQHgyQpiFwUkoUmusxQKjoJDnfRNwWD4bqu",
  "key35": "2qZVcn5tTEQXPvjJujQnzUQUsGsXoAW6VDG4M7k1SiJoPND4ydQw9bJiQXyLPh27BVXDH7e3BQyEhj3T1TcYe7y1",
  "key36": "4PGBWovAxLgafoZtgkG2AYTgwMeJ5aPyer4d76CGU57QqNaE1UzcbyRgkB1vfkQnHL4rW21m4HmGi1bPTqVGr3k2",
  "key37": "4DTDyDEsgwjWWkt4tRNhTXYin6yqvdpc5x7ffEZo3qnW5z85H5C3wgHgjivChWSdEB7phFq93aRvgqyuD2dKdXRc",
  "key38": "3TXwHY7hY2SAmQxvYMmKxKEiG1WWkHvH1NWmDh8qi47iTcqrYRixSNKgthhE2oqNEhXegzPjSfS6c6mkgX65N3X8"
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
