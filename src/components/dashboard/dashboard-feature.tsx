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
    "2AvzRRGtFwph5bhmYPFAfUfqh868oL8DY44dXYFgnW7VryG5BGrt5YtBtykP9kBmxrcNgHbwTyPtZe6roTbgMUDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TEwvwtNzCDCJTTQsZEKkaWgJonz2vSixkYMtcLpgdueRUPipG1JKnF6tWqQ4myCtjZYCnD1SK5PBEbdGqJPvqA4",
  "key1": "5gfyvSh8wqoMTby9aUSi5xapHKfHBNx2HHUaJh26B8oDZ95nHdvsR9FLCqbGr5tHusbvEYPtkFqphXQ8cFs9yMPy",
  "key2": "5tf6dCL2mjBPvqS5DCq5cWktbJsXwda5tg5cqTW58rq8XkQzqHd1goRfEzhDAaKFNXneJvz7wV9U3J2yofaXpK8t",
  "key3": "pb5N4CmQq8de7n5FAfTmE7LTy1RiZyXAMtoTpCB7mXwzyQGWHL5NRxhoNiGHN6EvSJdFxtkFWZhGkTZ9SN3GMQj",
  "key4": "4yHiJMfZRgoWrjrjco7Cd96c3iVjim2WR3Juk5gTothdSnmQd7Vh1fV8tepxXiittKLkukeTbV3WgFAwWjGtvHrK",
  "key5": "8d9iZDSKRo7Jz9DY5szTbvvzqHS2kLT2LBQxuRdsm14FkTwSSGjApMABpByLfeYfoSUDiENBsZvbUh4zaJrpBMc",
  "key6": "3chH7PGfqeJ9gbASZoDuJLWTJJTxUTs62UmsCG5PiSdxrBoxCvSbqYyDdmT4uSFdDYona2brVUhzHrBhpLU4Wd49",
  "key7": "3Prfh2suaj8zCSrUT632QEq696Szz9aU4rrbMoLPBXW5fuW8CuskjPrb1u5SYMDrxjSCAB62hz5Rk4edb6BcGhqL",
  "key8": "4SPmFQy7tELtL5sBi5ZZpDypC3Dxrqm7uxFeK9vxkKN48hSsHasrSWoWeMeunQKGsXQt8VZmaJXdNVj5BVKxC2R",
  "key9": "2KLx347iQ748vL5nPqnej1HSTzrtRxckYqFET2U8ZysjyM1aD7LhDN7ZPWCSKhgvyLBbdce6L8mraGFXZa5qTdZE",
  "key10": "69J6dCzP4LJeYwU3GoyuZidQ7k9YJWVtd8kveDpAPsbX4iQamohiJ1DqiBVBLWKLTwxWHo8CKzwDhQM5c9saZ7g",
  "key11": "2XYPCNDTPiwU5E4wMAgSqPGB4qzBNzSmCJTWMWiDdRs4LcD6rj7YKkzJTN2V5GnUWwfXcSmYHNVDGcAuaEJ1KyXK",
  "key12": "5VvMTvYYbU8yun59NGXMiY6PdMH6abAPYVdVNm4nrvMgNZWBaokq3dJmo62DevZFkXiGwkJoiGgUuKEtT7ZcEykB",
  "key13": "2hVVb5EBv8BSbRkbiX95urKA3j2voAakf814XeudzgeQaTYktgzNYv4XQwpZYhnpLYUjAimY83KXvQvgLocLf9cg",
  "key14": "2mk3D3X9R7VjRnzJJME3u1g6yNEHTB3mvcwMSRDswXj8LsWFGbkHCWd6P5jG2eB3py77UUJRjnU5fWitbPKLM8vK",
  "key15": "4XZSkVcgPNmmHBvMyYZYeNJH4ZErbHn9cQz9M8sMtmVi9WjyzGZN1FxwGELci4NSm43NufHF2z79vyvP5YhgsesA",
  "key16": "2fSvAjNz83oyvRBmkJKcoUdpL1RhHqFTmgZoeV5NRz8osKcBgNPVi2uPhGS4B3ZzMFv2PpYWSuZbHbKXDytY3eA2",
  "key17": "4XyZdPKcZ4qoKADbwebLbF81weBdhgs3LBsGCCocU9MSz1R9cDRKdkhoDZEPKZndmpyQ979xCnhmuFQeTeZ7qZts",
  "key18": "5UZ2jjtugGx6z9qKZQ6RFvcmbZCShX1gDJjJjuDpV53HPvCYQyxB9JBL66uqPHWe8h3r3gbjtPZpAsomJjdktEs",
  "key19": "4MMTefnDy2uzRULAcYRo4gEiwfQd2jme12ppggbPpjTBrmr1GYw87E1TZdGf6jZi3VFesn5G6hyz9hUwJEWdUGjZ",
  "key20": "61aC5e2D3ApVpK7Ji6L54m7h2RAsgubmBTHSHpdtnLrqMKV8vDjnLb2pBS9ViMksAKTgUuvpSqbWmc8gM6JLNZMG",
  "key21": "2Jork9BEiWUVCwGdGuraU3ZhSrdEmNpwDoYZCN5n9wfcckLbMky4NL3ivHSS8CufDVZFDqqtMzGJUx1jVfdv6p5v",
  "key22": "3j7Ugx6RkTwtXr8igXXTahHaxPjdz7ucM9fwwd6chb19g5HpJjhVvubpnDU5JytJxSuxdnBcaq5vZkkdcgo6kH1i",
  "key23": "4KmPJxhhziwaD68EAABXxF6vx73MvP2iADyM1WnNmup8tHNEincZiQpG954hjeQG1CdeKKA5pcieELzHAnNVQQxN",
  "key24": "4Cinyp5cBkkQpt4pzEQFsgCJ52A2ajaV3Z7NoErN6bpb88YuhEofFeDtjaNEafQmtDHJvdUdpTwCPzaJPwgBKQ4r"
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
