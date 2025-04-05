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
    "qqCGsGPTYgLDCaKZi2f795LprM1c9ajVoLkCH6b7D38kx3EGPT91Dp6jpFpFPUyMQymCJTuY9fi9pNW1sRbiJ4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dRP1k2gEneTjrMTPT5tSXH23u97f7MDtX1aDviAQ8LdUbATH4goG8kAAJzooAC5Z1px3b2HzzxMTQanKJrRWec6",
  "key1": "3kNucgzsr1oDWmZ4pEVzyo3NsfavtRbaZuCbLZPdzrxbLQxpXd5xhTsFavDZnhPGpEJoSBSgVi8vjaqR2jqAM1D7",
  "key2": "2vghLsw4SbCbFZUMh8xuiESjqwaUCeb3CDpLy4iV55oGMYc7nHMfJ5cWibB2YDTFirQFkHCmkKVn3ZS8T8e4eiUM",
  "key3": "5rG5LFNJbSiJo8fa8Sc7hzhsyV3Ej4ohPfuxQf64XcPhVJFPFEbumjU3ZfesYWa8wZcvPvWbFGNjdYqwEtH1Emg9",
  "key4": "5GaidHYi2NpZ4jcwbWQxQ9SA5aFWo3uTMvydMxjnURmmTTYv2Hdvo1UB3u99rCRMHUUi8PqtcRkPq2DSdRtf4t5t",
  "key5": "5WjUaiRGoqdEcgrcrb31mxGGR3T31GrJLEuo8AVbpxENNHjoMmrCQ1tkTz3XwVFMa3mrmhWJYTiVuodJ3Ypduvcu",
  "key6": "4JwHKr79QTSYdfovFJGgySDa1KwGin85Cydr4HqU8pmQJ9c8PuCJEe7W1tXmC4Fabq6cSe3aNXhc94qWEGbDbWNE",
  "key7": "5wVq3LMxvVefZDsfmNeAjNY5CgneQow9oADDAXd1MS4C9gTHkEcf4gKFoDpgSqtfZGCWHjQgdEfGgddjagQrhGS8",
  "key8": "62q88jFswJWwCttK3HNxAVUi1M9S8EB2MfBtzwDLMMsxeHAnJ2ytien6Q2GXLbBfKHuczHyVspeCYj4V46rPVCoH",
  "key9": "4V4jboPwviiUvZzw8CKXvLSPkmfLpsRrUJ5Q4tPrvY1o83eTYkmFPTB6TNG1j92zkN85ahDuRDiPFQJ9UKF4KzBR",
  "key10": "26jVMv8gLszPmyoXs4Nu3GQPd3M2dfejggAdEwwutxrsrkHfWJnSfoZ4yZe1tdXsj11JKz1NT197osB7gDf4nQLQ",
  "key11": "V72ocYniv8dxTq2TUy6pV1LGLvPnRhL5URknhcKTmtyM6ysqrurNjq6gYfBGWXb9aZm3fngGTona6yGF2t8npBK",
  "key12": "VXFcWn7LnAH2oUo9LFySGjZbNfCnbq5DvyrqYDyy8qpVrBFAwyBgKJb6BHaZoxbPxThyW1RjqGmwBt8xC7hub1W",
  "key13": "4GxVs43ZgPrJoqqHerVEuFD75RmsJqPNCPf7cyqie9LfSMkez4eWLrQBnihp4HFBmNWfUAtPXRr2JHCUsFyRM5ac",
  "key14": "4Ui7Kd3HWLCeUu1A2CxVitiMYAQPcjQ1dVmc9wJJsaQKgFbk8ZwJbWg51ESfBgPWL26KECT6iAvTtdC1KBuqex9w",
  "key15": "2xrNqbeVdhptcYXTrD69x1KS4efCLyEB3wuAYFwHa3H1tQyn3rPZiTSSvwFCC8GKmZyLCxEWAB9Z8HGpnr5jmVJX",
  "key16": "2qh2AhUqxkdRjuZcDDJmoARawGNKX1nwymvy2FJNwvxwmsPQiiFth9HhLadGNzMoQcgAd8JoR8sCNBJLb9GoX9pS",
  "key17": "LisAUyKSDYbdo3JPQPvBfh8gn5wj22ew7igEZrPCtA5BxBsRqgToc9CaTgTxgA67ZttvKGCsSXt1TGMh5u3eLZx",
  "key18": "4kaJjcpU5GS3NjB9WyT9GaVQCuTcu4BW983ntfezYxZYJhsZbhmQwGKv1KCa9ppZXPLgfF4VFCaLZuu3FUY1Mvvj",
  "key19": "5DXuaRfRBbj2y7h8jBoXwZktig4Bv1uTsK4e53YmW4TAXnzyjcgCTGBxn3EGw6G9FnyNES2UfB4vjGn7B4r6usB9",
  "key20": "4W7C3j6y54KgzY61zkpFeNcr7Cvpsfdg61h4fX33DD12ureBd6pmLdVhUBvmWE9xEXRur4Z6xA9At7odHYSpPRn3",
  "key21": "GJK9funGA89C68GHwTF2uYczr1eV11oXjgnC5zpbbpYKGBF5cHh6C2ozxuBRf8Sq5H6KB4NqG19qAEYkWuAVQHM",
  "key22": "5L6KC1ek7CeFNLZoPbDDmKq6tPaTLjhhBC158X8cJMn51agDqKevYkuLzvakHa2PEyQ1WxqLv9FFfobcJfqQWv1o",
  "key23": "4opb63HUF8BsvNFounPfBX2mrZ6z6vHvyWhM6JAjzKJgZj2VHzzWGhfJkaArPx42GfGXjGyrwjAm1vH54fNu9Pz9",
  "key24": "28R5P72ibNNqY1LJETh8xGYC4NDW9fUFBxLZmsDmgy5T9RCUp1kvmGtJfxoW7AyFrSWrsPtCGZaRKwGNLHv4Zq3x",
  "key25": "5U7vGtYktQDocp2JV68Wr6havtw1xqNUK4L9JMJq3DfsLHKmsXF7x1WBSGdJDTZYPxHGhBPZGqRZTDiV6BVBix29",
  "key26": "3Rs2JfJLTnXHgPfuFR6sBgZNzFYcM9Dmazcp9Q8xQGpgyEXKMhNa3N67TwBeAYYsGyTDBrZ2bTjxmmUJNoFZoXQ1",
  "key27": "2Rv7XWANE9NuxHigLxQuW5ieHzYLhYhmrNrYJE4uaECMe79qUQsB4yanLD2oyLJo4g7C8He2vE6wst9C31bMDJLC",
  "key28": "4B7FHqBcdYqVM4esu5VJFYuiE39xMGwHSjhUZGtFLogMHdgjycQvPFyXXbjaq5jcUGfRJG6HpXK4HQSLi7Prhegw",
  "key29": "4MGWepT7cnSCFHbjEmTe1UhBywpWVN1M877r9k8HkXfvXsB4XJT42oaLVU6mAKxZdBx7g6QWb5P4bCpPTvXvsdWm",
  "key30": "3ACqhUmNFVpZFynFYcKDkfRdQxXsi6dX2N393svKUS16qS52WZ9W8KQm8fQ13uPcm2s1DpdTf8QUmMM74qCPHi1x",
  "key31": "5Y84KjTdtdid2MDoPqZMUYK14U1VyJqhL18A8cwtC5KNaufCtnoQqYNiEytyrYZLGGmDwKdf99zWgEp6PFaPBWUn",
  "key32": "53nDK7N5Vwxg3dmEQuquYjkBWw2YPxzJaTys55CFx4iu2RnaGNNarsw32U5ZahqVYkAE3P4NsByXZWLxK3phLoT"
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
