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
    "4fKCzjfnB3yUmNjXBixRjSTnXwhwwvCvftU7y2wcJCnuXuGYL1gXNcAcgJX4Nw5u9VYMCXYTffzGbkNJQAWJHGgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tkM52RfRa3nrFxB5DvuZDpkphzjp8W7B5VPn3AR54HoMYntRYhcGVHzBJ1rxH5MRWy3x8DXu9iVzZfc7eSDT3Cf",
  "key1": "2KGWmfPnv8WhPAWZCuwdBC9BCgjYQHDbEqZmHYzUGDayZ6HmUopNZ9P16jKn7hs2AAjS9nxo55cL272xN3E3owc4",
  "key2": "4HtTqx8vufHhSLqm5hCEovFBSjHviFEgj3BowCXUqePZujPwtKVxj11LjnXsU3zFz1VK8hiuokgwb4JXYSfv3CLH",
  "key3": "3yKJe3CCTKRcnuzSnybwxHzQrruzBNfQeZtBZ5UtGHNcFhjCJLwMTT15VnKtkeQtmWi2nhzEmrouVZuvQU7Muawf",
  "key4": "527WUFnZc1BypuMdTZqgFQ6HVTyLkxKngkq3kiKnzn7ueAobBAddTEPwWKMCWEPRuMaFb7CC9Cep2cGv5Cu4X8P2",
  "key5": "2ZiBYsrKcEMXaNKe5Ca1jmYeqRK2YDR4AJK645j6KozZ7VeAr8wMEoreE9YdVpRDNbGsRhc52MSgkJFJLcyXNbHW",
  "key6": "5YiTqk62jogJSKzQ8eQ15LkV8YNkT6qyhxaN3y5PcdXvFyxv8GXLqrBr17spydxCedAjrPpBKSvMYMxpRx2xa6gn",
  "key7": "33J58aY5i9XQvRSsbZjeVAcBCwUM3uDjFqAiixFoxJSxQZMjXvgjH6941RuGRTYAWRwz4PMDd1Z4BfinB2ZS3R3K",
  "key8": "2wugXqJsSkM7bwvq4bAjFrAGK3SEuao2xzuZ8E91CHXRv4FaYdRwwheYjocZPX9opHzamksApgkrfWe4bK5KsaXb",
  "key9": "y42oxNGhSj9U4hPNtNSBgKcGDsggQ6pqtKq8mNmEWiL2k5UFwjD884YtYVb5jwMLiM6QKcuiuLiZLdqc2YErezp",
  "key10": "3fQWVZQqL9GxCBMNhvWgZwyiKhqBLHNYjYjcB7fQwfdVwCGQFEgGjmwL6tNAsE14sE8X8gHM3XZNwwpDvtMpb5So",
  "key11": "49BbTfdjnq9tySDJqp6WLWrTLY4zzHEk8LktcWuPs7W3E73FURWzH6cnM3M6Mo4hQPsCu5SZmtCMonTjc6WNupSh",
  "key12": "5xoakkcmmcARzV8u2ETny5N7hVyLQ5PbJisKRGUjecRqBn1QkxG1126h8BFyJ4gb4rnD9hVDX7TBMYufeZnxCQ9o",
  "key13": "34TeEsbZYubmNVNUcXAU4XThMoZYjCYKkNdebegw38b6yYjw5QEoG98cdp9AcHD4d2usQkxwMdEPRbqpiFpLpqxr",
  "key14": "4NjkvaoMtJmj7CTYSfN9RMrNMYnuXZtB9PuCGaS5iJQ2x7q7GZ8wBSuHeUvuwMBZ8a4jt33g8WYLknfNcJTFazLM",
  "key15": "3ohdBxpHGuKoUVPEu1x2xiquDCkeCj94PMF2WCtYxBBahQZZ1x783f1DB5cLNVLrwoPxynPjDo9EoPe8xy2Yf7RP",
  "key16": "3VGAs9tqyakcrP3B5e1P6A4VeUK5MFz5cZMdjz2ix7iNAku6UQmv9BJdpYDbZQSXRNZBX9j71akvcQ1QJYhApppw",
  "key17": "2WZLMNRCvoPf6BLFUzyZMXzgAXGQkyW9qGeiEGYsE3p5JQJYpBgFVJ9c2esRz7ZNdfXTxYhGLcNygtQN8nXknyC",
  "key18": "v3mF1Sc9nz97429P7BHeSQzGy2JLL3tPMQ1GVHbpkvnFgaGed3BdixwQTNS4qCW61Mr68FU84v665tPgmhp6MKx",
  "key19": "2w7gMhZKyGepEzsvKUB41CRqxS2Xze3GQjs8S4GG4gsFRP81B74LGb68XJNKyGP4UdDG7XhasWg3cMarK1u35Ztt",
  "key20": "2SmeyaS5uakrA1oA5Ws1YQ9h3kbmXtYq2UV9pjzGyEfzwNFpQrhz1wggJbLBbnmmkA5jDh6tCWe71yWgKUKqjLj1",
  "key21": "2rNmEHBeerxYkfkELcua5TbYVCqoeeHKyp2A1HryGFVfgpTsSVAxMKEU664mR5fBCDSVmVVT2pv4b2Ytic3bWbzS",
  "key22": "4bz1gcWEg5USrnS1HodiF62q8LmAicEmz18Xxy51q863j2DyngtPNEpzNbDHTM42K2hZ2CuUw6LcTdUuiRvUECih",
  "key23": "5Mw7LeCWaqPgPhGjLcmMNWeWoRdno9UQRWF3mCdzhG5yMLNkXhNj65rDDs7qymudVJEwJkFybAV5832NGzDQfk3G",
  "key24": "3CtXnERemYq9DWLUnz8C5aWu7LFpS2gddvV9oEvkJW1fTeFgKzwXUSNpW1gfCSkNU419oAqy9qgMSas8xWgXNUtk",
  "key25": "5r4WagjNdAwEM4qat3mjQDr45fvBAofcqA1d2wTeghRECVc87U9DhhviD4gvpUr1MeuqrDMsizZDsyj8pwsXNHuf",
  "key26": "5Xo8i8yzqdMFGXc3Dj21AbNPBz7E9YNgCUZLePSNKaRC3kbSgyxZjDgLgFCVpwQ3sJ8imjwBp8nkZgsHgdPeekMx"
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
