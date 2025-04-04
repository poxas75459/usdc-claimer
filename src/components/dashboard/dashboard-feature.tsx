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
    "yk7ngfoi7twLm3KPiU9Vkjj5nYgWKpbC7WumSCqtAhCZB4FL5eptC7TaUizPhVg22LcXFnZTgkFAeF4ucopCA1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GGWRG5sqTpErSR95MuJ6sRSxtDgHv1uqSrAV9f4a1qQQmgSW123uXuCPYe1N6nRTgWxH5KgncYcmz9gT6NAt62h",
  "key1": "4FscobPgTPjYYkDvtSF12FPpY7td9vuqckSYkyQmk3F5VxtK2hgzdi1oYtsHGHT44fJt2NVz3KEu85qUZM7JbSMC",
  "key2": "3Ly1ehuZCvyEe16mqdN8kcL2GnJmoVw3UHAzT9Zfw6eBppHto1p1xbGAo9vKzRQEWJH6VSQiNVwgWk17x2EqTyRK",
  "key3": "3tdJYb4JodFooiQ8N9U5KX6sNuQinGGy6zdpxL7SyucDxX1MAvJmr4ngLM9aUF1YTDwo8Wy8J1fqFbcDMNZ3b9DE",
  "key4": "5mra1MagmSAFvjDM3EgFkBsZnm3Rh2ah5r2VJ3G5XnP5FBWAc6SdbsxJuQietCZ3n2LsMuLMjpw9XyK7qyZSRbgw",
  "key5": "2PmP8mCKcada4xGdVEjtZwfpSneEr3DTtrAhDmDkzbZyC4oZfuYWcSxom4FApNsvZXtSiW9BbJwEArQj1NCVReSc",
  "key6": "3ZsCqsgSvjgqT6KS75CHNpvjj3yvr2erqLREAitny7VCnvQcZnGBZWhDYT2o2dPfr1oS8F1hwuSRF8mweBBnPiy2",
  "key7": "2VbzMCbLJvZsCJoyqX8B6hYy2EF63i7Rnu9sivodvYmQqguXyCNXgY713cs7iXSbkoJC8wkJG5xopriodsKGte1S",
  "key8": "3HspUsUKQzH1MrChDGsxUQi6MmsphA9P7cza4F7uqRBeu3ehi7TbW9G2wkaQqTB64w4t5eWs9fmfYT2AdPeqFVKg",
  "key9": "2q3vJBRw3oAcCvGHTLt8v5qNWs6yUbhxVuDySbP2egPZWuHo77LQqke7QgWgDazeLgPSYXN1b9bjEdcKYmL3VtGr",
  "key10": "uVfydu4aYZYC1VpBmPpM7vKRJs9wTeT41vZDjk2KzLnmmuFUBBSACRutpF4jLzBGeVfGFtFsnPXuJXDgipQ7h2M",
  "key11": "4tS7KU2PyjY9MTJ4w5kVd9GeJDcJN2AsgNiBtfErz3t2P6KeDnhrQACkBLVP7cmkkANkAN4iXtD5kbhG15iMy7Xf",
  "key12": "3aGbfEBqsD6YXSmkguWh4h2cAfX7f43iKqA2aVhWjUCXEnBZAYJETStB3Rqn86hrPzCKy2f7VFWNiQ7md5YMbZ1U",
  "key13": "JGgpgBXJUoCPetHYguue4UUExTKSJJJapDP3ye9GhfmXaqkQKtGGYyjGb3Uvru2jhiNarSap3URwDTJj2pcQkog",
  "key14": "5J2KoH2SXzqPEK2HMmt1np68cYo86WYXAWwpukxBfoviiKppAJoU53NgRbksQRisfxbsR6mo4GojgmznB2Acd7oM",
  "key15": "66gD2BfmPkbYy4D4uwCB5Zisxf44yrMADm1j4NDVSCGC6hSHxYaRZywHRmg32U2hpvheNfW8yvTzssTqCbmQ97sN",
  "key16": "5TdYdgg4A7ENzPk8REuzHrVLwKLRPtgvb7SJLZmTc1phtsStXVbQLWScsHsy7fX3pbR7wr7hvZ34LuvvWMgyNCRU",
  "key17": "5KZFL253R8n2ABq9Us3N1bQPRw2Aw4dXuSgg5koUxVoBn7byD8JH1KDgfc8BpHDEcfGHaP5HXmqWAjB1t7Q5e7Se",
  "key18": "3wSWX7H1fdaccwJbrWQP7h2J5W757x8stBYvWpvnYpXjHFkKXxocfsyWUcV2DqS8BXHLxfiox3VGYQuKZwZxo1Rr",
  "key19": "5c8rGdYyxew7jvV8GLCPXsoJqPs76NtDcNRouHAFAVjTzx38MV5NvRXPhogMp1vWvKzTNg2zQqfRmqjHmFHGRAmD",
  "key20": "4e5Jisu4oHWmMCDAtpHfp7zCq5equXmVy8hfbV6ngJieUsk3iApHfdzPp7AuSRMcgjTyd1fpCghrTSmAJhpj4bTZ",
  "key21": "5A1W6PYTHeaNJfneM4Vq6MYMgm3FTizXHD3WhEeBrM1XzrXKe1gu5g4869H26iFonJQuceHTGfMtFbgcruaa1DuT",
  "key22": "4meghRahMJ9oeSnRqQmMnc3T76cecgUYXjv9d7mSCir9xtKj6LFAUcZdLKApKHN1cKz1H9Sme7s25E8GY3JnrNG2",
  "key23": "WycbjcBqB5DA1M5QjZBSVydZwvZyvEVFfN9Q7y4owbzEWr4Ko7SCytNEXKdDT7iTk8PkLvi7mFz82iK6fqsxasQ",
  "key24": "3n4Jdr1wXkwKr9pPHejXNcty8jDfKwFdqpQtrNGmWKnuoH4YfytuGFki7tDogPhyHF85j3jCPeUKzKDnXR2QvkUZ",
  "key25": "5QkfQdZMuNZ5ft1M9sY6x739snb83rP71nsRwpqUCU9DCTCijMsRJCeQ1mLvubza9SxEgYkLczZm9dEH8xYzaMLb",
  "key26": "2aQwD32CuzeWnSpjT7He8MM9s3p7nV6MJADhhhEaRbmABdQoQgkiifhBm67yPnEeEbNZgScPWKG3oKLKj4tCTwTk",
  "key27": "4SLZHfNK6427mLgkekEoTupM31da1jm5iMxoHQXutXWTs4uQfr3QShZsqSsE5TusL9b1KBpKzesp9XAygSZjyK74",
  "key28": "3JuSVsSBFrTo4GeohQQsEnGZBSNs9dgVkmMWpnZaBrmLFvb594XkwKACr3noBJ8FsjV7JdySaZtmwL2NNpabUAim",
  "key29": "KkFM7iaQCp81CsDHYQFbVfbwzs4e16iiF6JDMJhSvBVxjiazHzTRMEsQtgRiTgDNa2SYXuGbqqTVnf3t5hKm5GD"
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
