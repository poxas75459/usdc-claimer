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
    "67QdWzYVo4n51apEPBXp8yPU5Qnf8A1FMtkkJm2F6bYLJBhDBHZ65LL5jDWhPMmU8cmjKGwR5T5tbVq52xY4VRgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z4GTdhVLtdHrAUs6YTbcx9FcWCakcndQwnU6iR7gxdeKJHKAanHkDRVw3ostC4b9K37Yfc8iwaFxnqEgQjCts6",
  "key1": "vanU8XyN83oh4xwxg2AyQ2BjoqbL1LpoWZkzx84UeWpESLiAY2owVEoQysirdEHZ5WzBpPR6eS3hBdcrbWp1jHe",
  "key2": "4gz8LdiFf52xHDyuwEEE617QTix7SzgMHQvdQqTfczuVE2aNNqAHirTCyiBDVnM4iCT7dZPneAmNhEK3SeN7HJ3y",
  "key3": "3vFhq92Vn5otcsjpgPDawU6wtvi4awU2M1GrbAHoSafpYeJdaxkXFDevLqvJuiDxMDD4PvEyrn3bhdJtD453V3tE",
  "key4": "3ue39qF8RaJe4PrCEaqVjrA4FTMkZuokrRRaaT3Uvd8XeawXFWk7EmzVZMrgHxy291yJv3532f2PbBjitwZPX491",
  "key5": "2tbp7B2XgiWsodKw4wAwGjtscoVgr33rjKfpGbrPRD9XcY2N7HV5VuUAHfJahTvd1QVgrmnts326pnsnfh7DEDxc",
  "key6": "FzJbHrFoGxpcYfNX7uUfwfsqFmwXyDg4ZX6joUTZTRDDRo2phh46WJSQ6878a8tTmU8uu7NYLRLAusmfMTyyhmx",
  "key7": "36t6gouPwBPnBx8YGysi66n7roVNAZSysuJD6GMCTgU8UamfpQAJQAy2YAjfwFTLGeEFgiPBn1kmEKpsgdKrUgDD",
  "key8": "dJMjrXFNzQ7T5ktEStfiZhM2spN4KiJdo7YXFg4gcGHj6tYmVZYbp7qnzEniGarfXzyuySQgeHYRoQuXXCWjZbB",
  "key9": "cdbzbhnFpwoogai4dAgFiUUTmfe6bBSq1SVsPyMMnoHs3VZniKoePUAZ6R9C8TF2Y4Gx2xYwSqHgr4NQPFnqsUY",
  "key10": "4K2eMbeSnZj8yg9w47fpyeP9VBsxXZR8efxwkVTrU2UMUxyLUzeqnnaoTAkPaUhK5aYPrkx4rNnJRBsffVurhS1s",
  "key11": "5TrDLsyvgmsnToRETuEAWf5FeDSRUHfhXusw478YuTtRyUrdRxneNbvUkt8uM5e43ZQ4aJ5F3zpqJumkS4wzUZ44",
  "key12": "5pChqXKrx6ERcKnV4fi4u7XXg6L8q6wpqAytkUNgBxpJRB8A2ZPQbbWn7pikYa9PjccoUqzXsG1zTrZqty4bQqv8",
  "key13": "2riuLUrqFj59MhWhzfTLfwQYHkJg9499WBpwj3wGc4HLLCfpP2o936BDMKwVoKMcWXe2EZRcywpNtDtJStpKC1S3",
  "key14": "3eNgVmkcXRCQseK7RWXNbFo6ANsg6fiXwmaBgZeCVes7MaYoUSjWX8GyPrYLQP3uVqZKrHAc8t6LBfDebDamRkjh",
  "key15": "3BfdjsReZ99G1BdfH5vwamWtAdqUmR6xaygsBZ2uB9Bw83b9dZQKLwt8PQV8usGWa89iXDqHNZ9roQezmqXhU5UZ",
  "key16": "pqW9oACGiuiCp7DCDJ63mz7iNGg9HkxJBMR2cgw3hVu84vJ2S8hDQPmQA5YFs4HLSsmMPGKTTaV6tu4WM6B4fWW",
  "key17": "6PT3UG4fNFky9vL4wXQqAwUAExnEJzpBDcUkJMeDrzhXLZ8pNixwEUKkyHH1YERiX1BLSZoxCL6KnA5rSNfQdrF",
  "key18": "65Kje2X9hXdu4tWTpcWFr7KKc3mcQf8HgciE2dcHnhzC7qvMQeGZyw9To6rE8HV5GayTEcSEsZsdBwbTtu1KGftF",
  "key19": "3a1AXSLGuwwcjv4Z3rp8hK5Ct9A2QmTzDCAxTvLGeWRt9gGwUh96pQD7ZFmABxGJirjkX5fTRbYfM9jnq4sb7ZpJ",
  "key20": "4g4mJ5a7Y3p8je3Xs6xM6yBziHsWEwjxhwxh2pLpqK9mfJLbTqgPrvL2gSMrMQBNXch9AL8p1T5v9ee9WZSbK4wB",
  "key21": "5qHhdqjsaidNMfLPiQFySEc47FXkGkXCHLrRVoLvhdKx67pyeszQGXSiBUViacNNa5mqhQQiMtob47U6dqPeD5KR",
  "key22": "2AXUKUQ9SU6GaqHmr6PzbasPCXMTMaMFGYyuJ62YsXsEb94XpWB27zwjpP7Wvh5hBJmhUGeaivqowXB7vj8zAxkR",
  "key23": "vnxH2zyac37oo3rncapuXhpQdRfw7gaLSju6942AhwZa5e8iPe7gHw1SZukKtNxvNWdfZsXSh5WGm4Jg1nvVSBQ",
  "key24": "4j98qzuN6AHtsy91k1LDjNFJVRBfYWsVGZGbt5ANFUpzhPVeENQ2v8AzWjSawGrhLoHt8QK17S51dmSwMkmN58JV",
  "key25": "2h94RGBtyjF7eFws74os9hVcYcMFjbSVn6bLbXq5BieqtsEgUmMmoZew1ifrEtqQ5QmhX1YpvnDKx1sPnZyKQNwN",
  "key26": "F4ov45UqTdvoZXg42nkjbxN51DhVRRUEXEHj13VHBX45ckwzwDYAfg1YykxXUHTsjfyUySUtL2NxGevXtWueeHc",
  "key27": "2ZGnkieEM9nhoDXoktdPGP7QFrN5wthz9jx4Uz86KXezMEJzmZwiWFDbg7Lv1RMLLzi16pwhFRjjiMmfEpgsXrBN",
  "key28": "sYNMVM6ArBx6HEGV8Qp2HLJMgMRRE9Ua4qiDfExANLTf9Nrmz7ENykpUqNYcE8gSLsGkF9enKLbUjq3qxVqrewd",
  "key29": "5X9wmQqCKiaymPCeYe5htRpc1bVMnc724Hrhjv21nrU7VNv2KUjCEBN4zqt1Y4ERo8g8djzVLdYzGLWyN11w1QXx",
  "key30": "5t7TbYysgvQu4Avpa1uHCe6VbJew6iEvSdjFSGpxeEAU4py3n2JqyJY9xvgkPJeVsNbwx8VuTKbZqfKVheycxjPm"
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
