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
    "3WnnkCYri2jY6FzL4aBwq8WTbWTx7bGogXWbsgMnGz4981z2CjyvBcM49dUuC2TYnRqYM3xspJ8gF2FchFxzpTFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBArSwypC3YhRf8zydsaHkd4sRsan7icqb2nFQa1qQ4MCzMhv3uZnmYeVjrXB2EP1DxF2mrJTj4iGLgFkRzKBwu",
  "key1": "51EeiymcgeKKwUSzi8mZngRZQh2EHfMVQ34QYeK1RifiJ7TwPCRRTdxB9zYnRqKBwmm3bguyp614tcspmv6TtbqW",
  "key2": "4UyJT4DPXTe6m1cxCyz4R4UN51cThrY4cKp4V3UidQvnXD5xrGYca2aFzQJcnU9T1qP9ssGwipBgsSygaiQCvbtk",
  "key3": "3f9JdFMjEAYhQcGomm2nRxWAkQ6fNqDEY2yYwoktfYUAJVdoJQx7Epao5JQVaUzfTnU1dQ5Skbe2jz5qaFsJNvLS",
  "key4": "MdnNSyrAa1vDGe2jSgzArbqjb39M4TMm1v5Cx3LxrJApt9YpVAnNP4hA9c2i5c4cgrQEH3tUoCfqZh8YYsxjPVd",
  "key5": "2KZxTuLyoZ84nySNegJeV4abaey4q6EhupubUJSsBy64DM244HECRrSw8jSrtxLJAkXTrX4k9RHVUwXvGzmxrGhR",
  "key6": "2VJnbM3naEfCWoBdMXTp1HztHqQfChBLRuj47o6H8FDY8Ys1sX2ndbej5qSoos27zJ2bTJpExVozmegjaFEJbAqj",
  "key7": "2UruSZhc1BfTKpN5GEdR7gPRYMvnLYwx9EdiYK7wwo3NGXZBMBm3CSYfv9CsjxNVkP5xAp2b3cd5ZuUKqz4gRZRf",
  "key8": "42XaM5uSHxwxJZaCzTueVpfRoRYNsB81zvGkzQSR8n8v7Y2pMwwy1E6nP5npnpZuLL11AF5xsGxMGzvPrUe5EAgt",
  "key9": "4u3E3GtZ1gN4WJKWuWjkp8wpnhDnTgvDLuJWcsqgyboNNJbSAaBPucr6gyw6f9thXwfhcGAeNKLy3u9c4TXEYKeW",
  "key10": "3HTfSf3dtnHCiq423CMdpRe8hAAH7RxmpCXAeoNLGwkNXDzUHD2WHnw5Jfc8GVcNVNvfSuYuAnNd3AuSQ8kpEkez",
  "key11": "4LRsStK33YZp8ULrVa9mNYpxYwf6q2yz71sxqQU95KiJr9ua3LgnMUsc24NCbnt4q9uX18tnnvHTwEfVtqdv1Z9W",
  "key12": "4UPFUvzFLHqSJDHS36uySHwARgekpK369DQVrKE9fCvNiE6GD6XPkDaHWbB51xQVdsgg4rAFkdJ9Ts1hL3GNMzJq",
  "key13": "5YPqtiV8S6PyKV1FDYBPc5E7nPg56Z31FwrYnbWk8hfd4Nm9U5fTXzbMUn2JfADq4MHErUV7o7tdot8b4grS5As6",
  "key14": "4JGdVH2Uo4voPYsDYjkrXR31cbJznSzfmaWxTjPNFDHbp5wKeQMSzfqPiR5wDxpseDFBcLpfs5GUXdvfWPH6HHGH",
  "key15": "4366nrpknJB4KU23BPtzv3ESBbhcG8AjFcBwnt2A9mi6TVqJvDStLUnDxg5deTSZCJgBaC6ryYQxsaPpyXYZArPs",
  "key16": "5mEDU9rXfaaDBEhEz73WQxtn8z8ugn5Eb5MrjBmK2Tz5iRCy28Ge8NYW7SAYrSLzvE2Ag3zZLVH5zWUq7vNST1CR",
  "key17": "2vVN9ECqRUmuChMe2vq3k2Aejmn6QQxiiVZkW5SB3RdK4BsqkrJf9e6iyf5cnPxjMXuyzWD9FGdwoGwrmDqaryMh",
  "key18": "23cM4WwAnaBDtrftCL5G4nopvbGqLH43YUMxiQZBxwJNE9fpPKctgm1ZsCsRq6SdwUtfsNs66c9LNi3Pbm7Zu1sr",
  "key19": "3vvywUyK3H8PBJquQwoFNWvNu7KfhjfuZ7cZcYy4U5DQCqWyiwSFzkRm9aRd9q4ApY4iA6sStcGeh8P9MBwFu77t",
  "key20": "3s5B9qMLgfo5DkK8TLYqmuM5SnrkHwYnEULXD3Q7UBmfxuokD6LGgHDJJ4X5DWQHfxEbgNNv6w15W28Njfc4kpNM",
  "key21": "2e4nFzoe1JDNGKpR4R829pM5BiLrHX9DQCrjQr7LX4RnjYVGGUrmwiL9RbxBRogMzAa7XcN5BMwfxkmGsjGECYtH",
  "key22": "5CJm6YomtPRVArFr9z32ZtLWH4LfmZFqGuCzkZxWFdUkoehcZnfUh7Qow9wNRAK5W9y41LcriLKvzmxTDm4iKKmB",
  "key23": "zf4ou5w5iATsTdDiPzNxpFPpAiSs8dJtR8KyYc2iEpjadFc3jqQSiA3Vnz3D4oxToFmqqE1SedSexBKPQPZfzzy",
  "key24": "dak32dXV3ags8qnVXTRxVbm8ZsVi1JJJmsLf4Y8jbL89d6aDNk7m4spnV8HR4ZBFHrTM6DPtXNEKkT82La7y5YE",
  "key25": "4iqFv1a3vhTf4moW9kXjdkYYstF1thG9JgMfx627MHRSkTk5YAHKaF7LqtSSyXFk1iLYwmAENe7wKLBUn4dtkhNr",
  "key26": "43wgxMWi1AVxGiDW52FHCnCWTjNqxUYzrw4AQVYBuCVFazc3k9V5ZFQsWrDD1F6nrVepJsx6AzFvggdA4ecqjRvB",
  "key27": "45U6E91m9As4qb8khMiVnFuWSg2cYmQDj2a7detVPEwzrfM7kiLsNuyec9bmsUDvQiw96QHbbQVyStEcbwQmjU7C",
  "key28": "L2QzrMyExE5yiVqHJiF6hrBg7ZS1rWuz5oBSkhS4XyDBtsjJfry4N1jQw9GvYmAXuM7d8tH3y6wSXHSGesPGFbm",
  "key29": "rAqxrX1LgvkPWzMtWBAoVryDSx4tcbXUqeeFPNrhENxsr1dqhz8PKr1uZTYDK2DFagrhz4wq8BZJz48tD1Nn2kT",
  "key30": "4dtPeczsS2TVERPAQoZKiXrQZ1M5TeaUaAQR5iydmFUfvWkkAXroUjiPfffpDhPNqJoBbdTD3dPNxwJopDKH1YcP",
  "key31": "4C8P5WWVjSbvea6i2YndwesUF3M5JLCauJ17c3RsHkkAWzQau9NxzkfvHHXJuUkqv8YNANMGDi7SP5A82k2dowfv"
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
