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
    "3GoWtVvpvwxQtS8Ak1vR6VxxLvqhA1eeo9jAeBNvacYe3Epc8LKjiivZ8WU6EsfMR5DYB9ybFxfvu8Bkz64K3Ehq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MoBKpcoQ3f9WZ32VNVnMfQFic74Q2qZzrCRVWhrSFgBYZrDSMvBcsoxmcJ16YFERP1Qx2Gsm9oF5zVKnwWAsWZ9",
  "key1": "5VZrmBrEKJZCdJkX2n3i5Aonqw2MNec1Y5wCebDUkemof6AESWwBmDSgH7UaA7FH8CyBSuECRG4YnGMBs8BKQSR1",
  "key2": "4t4wAuHGWdg8LZNDExrsfL9BiakjP44xqTv6YcbbJU6JGcjd6rZeCaU3XEXy6hYGp8DvwaF4mAGiw9ZMXhiJ6HXe",
  "key3": "4sJoMchb6EYNbFJ9AZctAz96rc4FAR4JaDNDT6Hid67VXBirZ7dktBpTyEDLW7YjderW3MVaYrjb4fgSZvL3FNb7",
  "key4": "65Je1rzU46FAsHobzbXcSwA5vUfoZSCpMgdGGHSVVkuZNYwq1eZjjy1zK74ZiMvSf4aUcVA67GoBY9eZuWaj1qri",
  "key5": "3eNCQkFRfosZ9T1mDUsLxxEzqzB7wTXHkhyUJ5kENKUgatyRvDShWKb9tWQjbyRWu2U8CY84tZp6ncVefM6D1MFe",
  "key6": "23CAbGR1z2EWffeMLf864hSz2NuqWmHvU8FAxngNHF2XzsMduVAcmj8EALjEe3tnmBf5YRt8dLf9LAAq1gpM8htw",
  "key7": "Bnhobaz5pzCcJw8z8z2PuFnQzuP5iW8xkq2CGWHXyHE49J4akFDiDXixxsmkrL8pzAh8t8s7rpZicjKfXeNxBtP",
  "key8": "5pjowd3pQsu4EzmPWeEinMMAoAjKZnP2W2iHQWoWS1P1Ay7ExVxfDfRC3EgRR9EycS75NkvSdBJRc8t5n5qiPpgK",
  "key9": "53bqv5Uz9xsKaGx1X1gW7CgmF83BjCBsrFPx4mbueCpmRWkBEnnFz86Cj6yBB2FGfx64zLQxBJ5HkQKPYQLL7mED",
  "key10": "2KfRztTyexFpqeTpBAkb9aHzwz3BL3xBBGUbjKyCksMhNcHdMER4d1SW9oTL6c8AzEhLBnt8RuMcJb516W7RWFWu",
  "key11": "2xFpMWeu1dnf17EQhBxzMs1AKbVQBoqSHgftu84BhhJe6TdNPqhKe3MYHTigKP3Jx8Uj3WUcQuBEt9SiLh8nkxqo",
  "key12": "5XonMFxWKPBjujeKMrRGid99DcJGyxi7AurKDrcBs4txxaBF5hqatkjJXj331CYZThyfBfPAWBYmbBHkdwcC3QXZ",
  "key13": "4EH3dx26NhKLUCHrZKj9z7DPLisfTNFa1K2aJh5nY4qkAMFzqcSPux853yC3Dzv3XquNCYNzFgv9hqAypBVVTsxy",
  "key14": "4T85T1vb8pPnVThvh7hw9p1Gd1rX1HFj2WZ63itrrquWPmP5VXMirP68spbBJD6dekxeYpzhU7uRmirhewT7PMS6",
  "key15": "cDnaewnWSmFmkQxHcvBGCV2gdJfVvXxwyKYpUkkdhofnsJq546DdwbmGc5cvwPePqnWSPgZxyaK8SYtLNw8KDMB",
  "key16": "3eT6iLf3zis9Mk2pQjok98Um5jmb2qVFXDRdXM5CsPZouYKuP1gaBjXcUMgzMb3BonvVi5pjdmb76mv8yR5AJQ4o",
  "key17": "5v3wJos1a56jgxPvUK7dhFzrDGm3uZJZ8pzHdTZ8Dv1P64o3p2ZdRpAETPnTqCw7qUxBVSWTroJbEwZgV31CBQUb",
  "key18": "352V7WE9HcVMbbJX3JGTsexo1nZPS1yivHssTwqmpxzgwTrjZw9qrSruzdS4eGLzb9BDYsgeNGQsnTPs3eWesjrS",
  "key19": "4LdTC2CKUhauk3k4TpXbavkMmBSKZHsbnZBX9oS5BfJswAX3qQRNMoSyKKT8GJmHgMdZjhdsNud8BEa6F7SF3GJn",
  "key20": "4uVpScfUcVZfcxcVY4ajqY2Ywt4usqqpC87ZLU42sBgtoXCygWzhhVvtCpcCbF39twTqw71Xb1vKfTG6kqf7rEWd",
  "key21": "4ptyeS6BpN1BWMYuYZgB9GYZeNYkm9uxR9DcpJMuwoGgLDUuGDrZdnBrose329jrknNTNr7mnPkuzS2F9DGTLgri",
  "key22": "5jQsqGo5ajP3Lzei1Zb99CVaguSZjWaFvrFQW9HhTREq7CxRsZGziDzydCXoPE3fTfdDBbVDe4YZ7otQ1CKuAud2",
  "key23": "udYMVRFzccjRDySCPCvApCDBj3tAysAp5px7QccXGvZJKTv2cs74uBynMrbv3nqA3dd17oMytdV4atKJPQzPhRW",
  "key24": "4yH43fotYW8JyGaQcjn55pRZfJSAfCRxfYsSPzEEpQQ5u6pUMoDCZ5q4nvbCZrQ59EgQ6N1iKaBe9rTkopCtjaJ2",
  "key25": "5K4wskmGNeYtyWG2GpE8U7CZgVY14pWSRXxSsJbdtwR9ySjNDeDqK9Kbj9Q2F3v7aeVvH8SYuh3R6633GPyDnFGD",
  "key26": "47gLGhHQ74tgyCUa3QaCUZiiCBja7JXjNUfboqcAF1DFKUwSyHMvgMYMkZvDa53LvjMXJdLxwBpQb2oU3fFc2Y9w",
  "key27": "LPmi85RRoNNjc6pyzeQHhVbzLtJimNwgZLhwtxupR2n8bpifcFziiL3qfW9RSxDv8G1XByQaHoapH2AAbJTHHgx"
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
