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
    "5u6JSGnk6nkHoepdpjBNytmwaptXeMD6vD5HPx574oCC44FBMDPzxPtJ93j75ugVxUE1kMLtoeqH1E3amYjWZhUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41LZQ4jtkjYiTaENC8CFRdQNmS2oRzBzNSH1zMrAs88CFPdAZQtNgwzgeJTZQxiYVV6bTvuMpArFnoB5vXzHLWT6",
  "key1": "4XpKc2ZnBBWy2XcTDfbxgqkSHeZBSYBTEqwNrCbvfNUsQ777VBr2ay3GoQV7PHYwGMrJEWPCYkPAYwHkh7ZqeSpR",
  "key2": "2QHvWe42SG27x8hJzBAizhzSbPZruvBwkqJpC9rasmJXYTTMMsULEkSHkqVjpHn89ht3xDTHv3HMTLfECTEyaDz4",
  "key3": "4Pwkmbs9yRcZNSRJLohFFY4FcqCpMZEVT3Rd4kBG7NB7xuiXGk3tWcyxDrFVjT2ZhcBAcMhyMPvzoc4TVQkexZuH",
  "key4": "4iyoW7E7NhD8LGefLkCBFn74vn79XpQQiEp2pAfMeomDRNPTa172gc2Mmvf1aR9Rug5nxe4xbubQruKP69juN846",
  "key5": "3yufqWb7ezNj5N7SEjXxVbfRHzoaK2Z7aY6Fpz9YFRLQ5CucodyYKZ9RyRurKjKFwTw1Y58gwnm94ZeMHcNRUmL4",
  "key6": "4FraWzzXJa2KiaNH1LNk5qNAQyRQ1rR5fwQbtvjJEVFVheVeHrBA2yGgvpY8brBfVHsuds384xhHcVBFgSZgk1ei",
  "key7": "4sRgfgLLmW4ZiDSaJezzjmbgn1x1dycaS87dLRhbXHT2GnbMUtnwznSTjC6G2cpPhbKPwnY4LVJW9cCqepd8qeBj",
  "key8": "3kDncQDY5WQjPSdQoEJK4dbo2cvYqkeiSApRV7qUvnSSQuvrhyrVZnyGDC5FtZCKqQ9Jh6EtpHk7rauHEiPjt7Ve",
  "key9": "3Q33DdjjgSkn4CvAi3CC2K11GHe2qbMfbCs6hYX8z4QgoffKxWpUwxnSzfpS2e7wP1xTz1DdUzPgGLT2hsyqccGJ",
  "key10": "45UbMWcJzYqDAwnPWPBuHnpqTSQvbYwVVDXptzXdwoAQxYh23CdET7u6h7mq9vBvJsa3EsuHRSTHErQfLk3yq82r",
  "key11": "2ybhViiNFsAzPUZeMmJEACKxgQCSALJYUioWLaZ1XKu2t6BAjikTwXiXv1CWvByPwFZCTNbVLaSxbBAcb9xyvP2r",
  "key12": "3kxU1ELc1LCS3c5MBLKjQ9LthgqX4weKhp54BbEqYZxSCEEKDAprR7MXa8oXupijnmmLcYaLj2VoeYKu7n1phLtZ",
  "key13": "55NxhiT3b7vtbU6YGm6v6jFapQ2REBAijLVs1549Gdz128cWfqDoVn14pSo95bWakxxNq4La1iUrCex2sRaXo9qY",
  "key14": "BY2VwnJEzy969N967fyAxFoLzu2BheSjRKAPBWWw8n1zjpxSrUadoMWmf2HCSCNyps2Xg9LjMZdx27T9B5ntbag",
  "key15": "3JoDp8L5QxGknsfpqPQwCnbyqxdJXjAaMRqW7XtMFGeMYuLiqnCoXZDtFMDbsjvWB58njUCMh5FvSRhjUtXGMdp7",
  "key16": "2mktgV9qauPjRT49fw7JCuP3T7JgsFJLoULvhnq9Ckqo4tM2MQkFKKF8GmXarsbvguMkQLzHWZrpADVLJGaU5JtS",
  "key17": "2LWE2scGo5ZAe7TkUcRi3YiX92axiS3zhmUjndq5x6K4acJN8DK1waue6jRo1aVSN2DAjFedrJLmW4PpLws9nHPb",
  "key18": "3kLPmEJsZnJrvrfvsaE5SDA9396Ydf6brnnFtD2rvn2cCd7WyY23qzc6ZnBwwmCdw2YuEVToamLt7PJV99zfsuW4",
  "key19": "bq3GfEbSgEMbXTbxeNZ462L24CYrLYKQYN6NvKZNd4LAytZV5QimM6TBsjeKxDgt4omApNSgBfaUUeRhupwjTeF",
  "key20": "5m3FHGdk2AFyo5QqVn98SJpQvSxh3r89sFjN9TatZjE3JHXpNYGmpvVyfdaEuTmyg5CV55mqbbTR3t6PpKQKcYh3",
  "key21": "C9Sg8gvWjKHbKVGwUUeonyaTSdUW6Xi66w6DNnycfqP3dC1SzQkFTyJ1tHtK9o3vJEfzpxDMndsKRP5VHKfcUqx",
  "key22": "2nRQTP3yxS8g5EcRGfHELdKWK39SSQ5NuMpcmSfCGxZTyPdmUWjStU4xKw6ZeDcyZUteWcdRGP1BK8qm2mxWkPtc",
  "key23": "5Qm6pczLKVKkKgMF83J999neyBT26ngQmgcgbko8NsSqaaom4gS12reoX1STXxF6aHfpoBQV8xo9J23YXTTGNc4q",
  "key24": "3xxfZYRw7kmVoYpLzV3NcDD6CRNdcjmhfDsjDxXRPTXzJveZHWzfKd5NVZrciWjeW3CoNPmdjoEr7qWa63sTtinJ",
  "key25": "2DTTDAUt7r4AQkh8J2wspzhf5GHZNyHstZg8AdZN13WHtyFHZ2nQMquu9AD9VEC2fL9HtBHm9hGeqDgc8DmYNYxF"
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
