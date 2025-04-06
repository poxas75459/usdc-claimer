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
    "5UD1rM8mGhVwu72CaZriQt4tGDZXpv356iYfs74ia45f5jGstCdXLqL1NQhCrqQJ3fk8gxhXaELiEp8eB2utj8gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jcYCvLxauDveAr7i4J1fMAsCbHX3HZ9kJmxiULwpbXJHww6KmPZaYERaZAGFZPNpUMHeewKsfwYivps1rLqPUde",
  "key1": "3Kzm1CQLB5wdP1jHhLLUsuEq2r6wwEDy4gjp5KGtVEXVRgAM2Q2WVBYxyJuWoPKyZGz8xFuDJioTGUKeE2uMFaKr",
  "key2": "cD29ao9dbUa21A9XyVMaHozpZihJLEhJkwo3YKU7FymidtmgkeK3hZmyHfD1qcJCJqbnMUYMDdFZTTnsN5U4Tp1",
  "key3": "5vjd4GZRjfZqKsP3x7Rjp6gBUj2QkmyowxEfGFcuX4adhnhm8x2pDzqxsknkHy48TEyavK5wUeFgNwmnbbkAdkj6",
  "key4": "uEWCgAkE4eyCZSjffz7xTfJQRzhspS8uK4KyT9vxZpEpZoR5JFA8MYhbM8DAomoiErnMcKLdV4V5PGLBFYyigUF",
  "key5": "4HQSU2U3KbQ7QzNU7XnkP9tnZYZ9ZrWEt4nqV8pNikbsFKHh3NpnuKMiXcYokqSkoBHGWgb5PeE7WHsiK2CLtWNF",
  "key6": "59zWCsJuHvg2yjiCcmdWcr49KK7VhS7iDr2FZBDKjL3V8rA6J4vkMbpCxaVwgQM1dLjpYQy7w16BZR1XB2DB6i6w",
  "key7": "3jKgGcM1PgpgG5dgkZ3xb4SawDAL2BwhPa3PxoxW3RUpjLop3HYQNTpS7FgWG1RrMG1MX5GWFpX7jMqkfMwmY9zt",
  "key8": "CCy5N2LSi5L3gYM7rJS6KnkupRmh5qongc4TLtCreVm3SnVFXWJKrcyDKGRHDofApn7LsUmootfWCBtv9xM3qvj",
  "key9": "5bQm61SbBvGmWT3LiBj2USEwEDoVpDAhzSqTqUmcnF4eTwrtB8mR17XqbsDsFug3XC2a4aYmsAqY4wzbHUznDrRw",
  "key10": "44MFbV152y6be34cVr4LkFBhmWGAtbR17d1jU37cEw3opB5deCBchtAwUNHWizNr5aeQkciqGQfVuM8BdWf75A1t",
  "key11": "5rtp4FFsRSTM7xMkAG1DV2gkB4LozeBWxebXNzwxxD4r8M1x3NoBA5rsnR54hm492bztiMzmjn7KmW8KH1MUgZ5q",
  "key12": "5f3m7veVWiRh2K2Zr65NXPjxxo3eow3d4fkZnoqrK2mQEZgwmE7HxK2YpDxLkY924PhxB6xJr116rhM5X62LmCBd",
  "key13": "53rowEyyRYP1qha4owpBatDyJLkZLNoSAnMQrsb5uKgatFC6vVFQ68Cv7sxgGnTW8ZnUSApYauqpLnrxfApHjTMe",
  "key14": "HXvEidqKJk9kXACtHPgzijxLeWD8qT7JJswELVWBUBkTpRu62Naa9huqK3UX2yzh48tT8MQHoZbgoNM8gkJa914",
  "key15": "2dGb3dfMiGKn2Z939W7QYdQXR4MurLBgwvj5CRiD19aPTvEcJHUi75YrabHiedn7Zjezpk1YYDbmoC6tPxgU24RJ",
  "key16": "4EvHUBe1T9W3jaSCGkQGCGXvKiBQ4a28ZQESpLD2y2LoSvyEPXPW36TH81976NDJh2hXsjrYTdTKGb5MyJbuK2nv",
  "key17": "73xLy9gqcVVYfX4RvBythHJHUY1XqdeBVi7NoTA6M58rLgsNkB93LRsYcfJHvufbYnjPXAYZ39UUJT9XPzuNPNK",
  "key18": "5MyJkMsAQpzu3aMt63NP3AwKve6hM24wLCSy4E7nyPHkhw2X4pyf4qu7BzDcvSpsPqRiEfnRcVdYsJZJf9hi1Eoi",
  "key19": "5j3yzAcd84JQJgC5V6jdsuTviNMkEiKtHiJ3EBTbsHYN9defwPTWBT63n5o4FWpYDAN2JJb7dQ8RAtU3VaiKZsFV",
  "key20": "2LPRzUtmSnzpy4ybWkvBqDVMQtYvrVgxHbVKEAAUhDKPZkd9yAs5Mf2HVmnsZXoaUDdwqpmwsyr67U8PJxRgLQNp",
  "key21": "5NDGtN2qQGeUq4x3YczGbu7KVnQKCGkGBh7HTB3HRcBH4DauSqcK1fcq5f6dif8kkdpzm7seDd1tnNod8esNjhw6",
  "key22": "DY3XTQ6pcLmmsonas7yroc286ofXRJSXsfwNBHQvMQgf2HUVqHopi9e3F1Ef6bU6rnPATP2RSWE2vVNd3a6D3Qw",
  "key23": "2epEH1m5UVaa6bgE4W2xik3LhHoHHhgXCZ2TdZG74L1CQjpmSzNsUdkwckjZx2mhnGKMzKVy2ApxiUDS9Cs88NRo",
  "key24": "8Fc46yn3oMzydFVBEtDPWke9rz5X68a5c1jumegAS7fUnnkJjHDHVXRbL14tfR1b7Xm9YwifCMP6wckkGmiTRAk",
  "key25": "5jzJ2n4hvcejPRG3T4B44yELtMrQeZ1NUbZyRbPLnLndNYEBveCtEVaG8sRNTTCpBMkk5DmeZwoZqqcH6FuUSfCX",
  "key26": "5LiZiQPXAB6pnXLeA5ZNCzTzmVh9WS9QLeVgY9GJpKoNKU5Z7vDuFZE1CkdbjGWrDPpPo9PePs7X8FrnxTrauyGc",
  "key27": "24C27yBUe9cQnbuootKsRvq4h9odCZ6x2gZckdJrgfRwDqFK53LXYhVfzHLsoUCWq5UqvmdMbSJJ2vm6FzXmiksQ"
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
