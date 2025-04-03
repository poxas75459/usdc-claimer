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
    "3wPREgaeB6wzdriQVLPCh5X5qreSwBJ7df2RyRc2qpUvrCB1ebe5H2fz1QDNtoBP5pDV8PxdVghk4WxQ1gyhu1Ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CHr1esm1a5LZTPdwXuXA2eYrC8mT7qEbjJzKDEjmEYJmrTaxHiMGGuGZK9eTXtUQFtkMj9u3a57jJTRAp3TKie8",
  "key1": "3XLoYvGw5WD6xPrUrxoTR1qipAkFUDHC7X1hRHQTjUaZVcBCdwrQf2vPZWWStnkezHH88mmGvQXAbVffpTgVP9i9",
  "key2": "48qJLkswRoqpahU4BgoFnVU5ah7hvJvFCfdwE6XcVT6XKUi6zNNwavKayU5nirfKZgSWGztq4FHvnC8iXPUhmN8K",
  "key3": "3XaUQXQgfSnqwB8ivC7SneJnB5akJ3U1nw7CW8hA2rY6kT84q7dtSXBhHH9BmsPCxFKh8HGAHvhEHwNhxFy8BSat",
  "key4": "5sJUaemmhf9pZWnjxu1RhxY1AU3SGHZ9cB4a6BhgAX5MsJNiuK6nWqvebqsich6NSnfTFdHVJyYN6XGyxjLYEbGf",
  "key5": "4Tz78J5WLkAyHt16e8YTY64HtLRpBRBnobXqsbbr3iUW73MnyR4FK5mjQzrgXmTDN1AAVK5K8d2hJG9fzHCPg2vk",
  "key6": "AvyLPAKukWEEnjMBQXrgS8s7E6Fy1iT5rwujMWjLT3HknAfgaKNbAHpFChiPJEuxa4Ks8N2Brax9WaZczqjdzkV",
  "key7": "2AHTh6oxDb4deGurGZ3BgcB2cTRRemJBUd25xDRvDJkFG6GduXaBeB9MBsL6A65gwQkCjEexY9ShfX7Vw5pimFCS",
  "key8": "3k6r2AqKvwkux9NjcD8S1y8gbTKM4zMbAbPLJwE7pGCsYCArFHRiSGNj9e7KMzhr9TxhXhWiqnBPpKjsNSqSYgKj",
  "key9": "3z4BjT3UkiGPx7KZNT6VZbWSMHnQGdRD6hUTtLHi4aDjV4etLcJ1Tqja8C9TWRsR4X8GxN12hqsMoVFLJQerR3tK",
  "key10": "23vzgLfyBgZCEis17omCwv8aFcmAUg4MeadAdySEs7faww5Tqz56PR3pF5yotMMDjmiKwHWxuYkFwr3BqYmwVSVt",
  "key11": "2kpyGrKcYD2ew4oobSKBhvnP4VNCsvKbBH97cBtuaXvEj6324vkUFtZ93WTGnwibeGftE1XKb6JWkj2NGaZceMXi",
  "key12": "2qbYYNPrhiBxGf3qdY9JDZQ3aZvNC4MxhTZEShpzqQJ9HeCMGhnzZrBdWibSxKqSz4Rvmao83SLrkGU7kjH16HTb",
  "key13": "3v4C1ZWemEogz6LneERPE1xBDbTnYytDjThyoc25ShKen89Mgv3kiiXJi95btdDZdBVwpp5WynVfouJXbPb9dFse",
  "key14": "ZAJkdc5VK5J1kBjiJrtYEwUXqzkUVorsCYGqfnfAyteBFcmgTMAzgV1ruJGVrtm8jQpySqnfn78nqDKj276jpo6",
  "key15": "5w1xWBueHA8C8AGq7ZX2x2SR5Kx8v3SY1d8DFUQYKnYQgg11UHqZWeC4rCXvEpjGiDn2Bia6APZRBDNXuzyGTPD8",
  "key16": "5qW9Uqw3N3C4xyxQj1XBN7Ht6KEH8ju92CsNUcB4W4YDYHMBaAJVCcncc1972dAY8MnK13v4Wsq979kaXYtU9Ukn",
  "key17": "4weejXGsYqLf7J67AXvmv3EfUMRNdUfuEj2KJssa1WN2JyEK2axL3efAfX5fS7KNG1UGHn2AXA44brfyq9uhHxrP",
  "key18": "2nk7qb25E917GuKtxwSitT2Nmp3h8aGDUXSDzjGnkWftYrxHvBRqy2rdSTWp4YFj9Xdz2V8xu1NimDvWfkMAfDrg",
  "key19": "ciYxQd85QikDcf6u6wMDVRp6okn189cdMqZWdm2J6aLTDsvVAwrGbo4QN3F7G8N3P1uaxh174t2dU27RLR8eRdG",
  "key20": "4o2sjDqj7C2TKGT7Cgc9N26zRjzEFrGTpPJWsgGEpBo9GDPyTkzjxaNaz2BwANBiWyt7uWZvBWjb9BVam4NpJ6Hw",
  "key21": "4PVh41BHzomhFjLxhX64DT4waybDiw2Got8piWKTab5NANvfNioC5V2j292tRVdrcZwNyc6Q2jB9usffA5WbUpco",
  "key22": "4nNj1N99jLQM6523GNQJMvYkPVrSUqQZM5izD6z9iA6HEbguNeRjL7vAcFCooNiajr994bGvbH5KzjZ3qPsQ6Rg",
  "key23": "349RFWe8X3NcUCyUi9dn6zKiqxryjQqJKmwz3Kh8DXgmCMnccww8YYxbkWYTonV5Y3hbNZyKWm1eKvQ1LVd9UGZ1",
  "key24": "2gjGpGP9BtcTNcunEpzmygoodcaY517prxcpgSgVNYZgD2p4yyLSxxuenxA5FkgxjjjKjSS57RfADXf8Ymn472z9"
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
