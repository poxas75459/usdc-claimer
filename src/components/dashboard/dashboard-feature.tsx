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
    "3RbsJ8YmRGqoPEmfLYuZE67abvZEuKmtxUtqP3yTGfhWKwJ8HWrTmsDdVoNvZE9wYKjQVWCZzzNDX8d4YmV64TGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENJPX4PFDQw5b1ce3SBxG8BbUZ8hMZukTt6Di7qqiaz5UKLB7M2XJ3qDFSFMcKHtUwt8zB5QdCFHnsus96iCb3F",
  "key1": "5qt2bzYis5YEZkXr6uo28RqaPnxiHQos9BGg12NhoK3bvBgHVgUJQd38e3hYmWP9toVU5oiGYNQqEFUE3pDxBwAy",
  "key2": "DqsPmq5YseX8ycSmoZx3wDyAPydgPUE81yqi1c8EwtKN1SjobHz4F5zj5ejgAUVrjoE7rC8vin6C64wCkpYMhKv",
  "key3": "3hhLe7bdaFu7JpdxUzqxJFAfAdMDCcBNyThGcjyBcgzL5pNDCjNTudkunGBWWf79b7rTZoLW73fWqU93ti8aYmcp",
  "key4": "3Cf48vQXeo71SLhmWtdtzuiFaeSXxwBMFSEHQhLWyn7dAmEB1hFMY4YGJRuHnXpfTc2qZFEAGmSwDbrv3gFW7WBz",
  "key5": "26GCB3in6JQyxsSuPkGZVMPYwnLkcsBrv5mQJSsi7eCHknRHeiUGVGyFz7MBRvtzo3mKDCuRccTzv3DnKMCPBUB4",
  "key6": "5cQWMeWv6mtNQHMT6VCuorPL1SbBKU7DPWY7C7gLchFXiAxCji4piUg1woqNsaF9khzn7CyXnV7BvVetS2GWNRmC",
  "key7": "2Lojyw9VYCsjifAVoq42XfaV9dVdAqD9yLEVFVtN6YUmZ1wa1uPHNT33zb76L1v3otgnk3fJCVfJRoaAn9ioZL91",
  "key8": "4AqmPmsLvjAJi3v41tNG8z5EyZesGCctr9d7cePfQm8oFm9VkpBWBo8xYvvqUNJDJzLSm9BX2nUCaSLK4hTcVinA",
  "key9": "Jtwv8xDgzzz1MwhneFGPTwrkorL5Y4A5bnY3c3NZufZgfK2vEoSbgSpDcG4DL6A9z3M3r74fjp2nV3WLkHyDz6f",
  "key10": "62VXvrj5Xea5c5E7KXxQHh8TWLnwgVJTkSbgUjBKpJVoHVcrkSnXq4qWH6bz3ZAgsj6b1Wmb9cGwiFXYhEdXVdN3",
  "key11": "3xNGeTMpkoohMCJrHswVAgUp4hyE7S7nfsjjzJ9XxiF6fefxuhc4UYPkmKqdboCYBDBMPhmop2QCtmVCF49BkLRj",
  "key12": "3oY1JtDUbCXhMRk2Cm1SCdqqgwV6RtaMzVYDgSyPyUATgGtM7XRDpPcT8TSX1hDHWhcLRhyNf2cSkFkwushqrnwz",
  "key13": "2ik6DB8jpobvoigy3ehU253C1SR4MFywz9MtCJotJArebo1hhknSJ4cyyUvtpCW2UnWzfTThEtGgqc2yCWuQxj1P",
  "key14": "5bnr5jzzD1wzB8w9nGNSNv7QQAS1XUAs8uiwZeQhfWnVeLYbc1HfxkcXQFJbq7oDVndC1yHLd51MuCrL14TjKgs5",
  "key15": "FdfQj8LTN1zJrHd6UEMWwxNzsFaRoK8JJvee72NeRN1ySy9GJmupM1xwTMzTodF2bP3mCYJnWkapAKg1h4VLKaf",
  "key16": "5KgxhXB8pgKUq1oaZEFXKnurR18kvDGfa6cv539es3XdGYF5ki62VDCqWkMuw9EYvYuaskNJfDz81gABJcPQk2tz",
  "key17": "45PX5KcCAhDjoazinRytaHVBePPQAHPDKcxnhkkVZyZuegiuHXJqhF4qCNYpzYdpjsJqGbNJkBk1rMiRK8ad5Vs5",
  "key18": "5DKmm3TJa42Kat3ZPrLQd2vUhrZY1WhLxbB6RUs1iNUPB7QZ9masPBjv7594hdVjFjW9R3EpyNnrnG8yAib8XG4K",
  "key19": "4htsEx96nBheNCLVhr3JJZWXK2DVtM6n9xZWfw3QRr2AMtxVFuPaWN8f7EvniDEQCwmusLpcBCt41FeforuUUrg1",
  "key20": "41fhCnq4fKjB5gyeVjKhSm8y9pnQoJ2QHunDm9b6JSpm7kmhAN3bAxcDYTuKp8ZiW4zBqU9sS3zcphw7d6TmceW4",
  "key21": "3EmKQMuQxygxqTTk491jQwaHSpicRrozBw8rjEGAestoSv4LQX7Y5GfDBN6Dweqro2otJLHd3SYu7DaxLWc9srkU",
  "key22": "61nbYKPxpE6LhXRbXQeq5SzwsBPBt99iEk3FKtrhWytziguE1JUH2GksWkgZjjpsjwvMGWmS8uoJiTqoUDuG7zFa",
  "key23": "3hp1NefXRUPjY27p7oukwfTAvsf9pgposG2j5HpGhgd3QZLDYPGpzKzki6LWmFDQxbNFfCVwj87e9yFbGEGQZePk",
  "key24": "zvCaRo7N2iJ3ddbFt5czj6RDbVdTXQ3pfyz1MvTjG6RmFSXBUuWrfYctsFQErqFCWKX4h9iJLLRXF89s9iRVabk",
  "key25": "4C2PTR23XwdCwH3hs8unXviUZ1i2ATWxW41ornABqLydNY7rpLXJPPNy5srkiAAGXazUrDyKkbyydTnCBLxQ9rD1",
  "key26": "2468yNKwM3P6QeuBzLzh3CUcgGzA9R5pHA1vHYdVUnWm4k9oEWcroLey2YUKUJbLigu9uqDnzToNt6ooTPcvJzoi",
  "key27": "UqRuGMvuk7QeykSA8cMAGeq4LcgoGa81oAs2e6Dd1YM95tzNG4BUnDxsk66XGEnNdYwtCaA3EZ93Btmm6Ee39Zz",
  "key28": "2fA7keg8WKmC8VTdqhyK7SEVpPjDURY2F9fm7uoVPecpUAja9LRznNhSPmQnBfhQqckQf65vNABePh2VQzWYtF4T",
  "key29": "3yZ5bvy6CAKavuFNnnsLhdbJ4ByG8hF6tjRpcpRYXZvshZYckLm8AZ5nMrBGEkg7wof3W2nL36mw8UfzegfEdi6U",
  "key30": "feZoABivzZZpG97PoN3y24q3cAcsiPVHp1Kia46x3VtDF76ci5ps2uFmeULZouoApsYBdoAnCpP23RdhVNtLbFo"
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
