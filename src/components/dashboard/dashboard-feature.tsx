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
    "2xMebowKtxs5BGWTLonMSwcvjCxBdjchd1autCGtCuNUzF5XrEaGHC5r7axSZzoyuHjCW6jkY8uy31kzF4E7tbzw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "642GiB82Mav9U5qzfGdQzc1xJPan9SpimBqobf9CKKMTDwqGVTXw9gcPqrWZFr5kUfYycHmtNX3DCXg4jNQgBuXU",
  "key1": "23eZNDLt1pv5Z3a7zWsEobUJsaB3LBgoA1ecW6nqmnK7xWWkGRZ8UpCBPqdVcWkv1cFVDfHj8fvrsFYCCY4GsYU6",
  "key2": "3s4dho8JdsWxowqD9ATVnMou8ayeFJhJtqWheMK5vktGbLZ1ZKzYiBESLqC66ve18FdrFqodV6pKYScuth6sEkUt",
  "key3": "3NjuhFJrxvRPv3eepAZw9aBWEyL4hSa1uP9NnBq5MdHHmZm8WC5MKhD9YjnBqxa7CZkVB7nSnQNeH8qQ3HvgK6M9",
  "key4": "25qsc7KDCt4QSwXmZ72Wp43uCJFEGSStiUASaLabtNR3gR1L4ybKukJxqSx39zta79b7MQ6ta5qtJYEpdnfEPdR5",
  "key5": "2LECkvxRFtqGv6Q8gdVgThUY3mBUetG3Jp7wTq6aJvSymYDb3y6VDVda1DwCgHRobEY1SzSYDxDmt3F9WpFLNoQ8",
  "key6": "2DfxtbhwcHbXkvZcWCazybgo6gQpUPoYMiVwPSmFFnjhMVyHjZBz5xAMs55rNX2r9ZPDPji13ThX8AXM5tBcZHAY",
  "key7": "35a8brc2mdJVTpEDBgatDVQU7dj7DySYXUkauD3NxAFZBMj62hjnAemUvE6UAXq5urDFPKqwbPdixPJ3TZf2hBo4",
  "key8": "2hrBoLqW1uTCcR5fXpzYi5Kar16FEXM6mwKcq9i8xASDRrAnGjP9UUQRdmpyYCYApHA6GSWecCiMzz7rQpdgJLFP",
  "key9": "NkVE2XtWQWWgmBB5CjAg1mKiKmbZgieoBEvP2QmfzoAEURfHfza91Ehp3twESw256C46nxDiMn6TMkAPd8No5Bh",
  "key10": "2czoZbyt5rdLTZjWjfi7onPKBC4XdKWwfYw6tEkMWpAPMfJ78xmBJqc6R35NKsUYnN9dW7VtBT9tmVG8av9qTGop",
  "key11": "5X1yXZAWxbP1EXZfs3XT9tTuh5k4oYGb9tVQakx1G8Reqv4bnueY8TDCHAbEyqMe7gEQF395yafxEEsvg1JXwMuQ",
  "key12": "4XaAhT9cymt6xuKmMedoro4vjkxGRPPEk2ntxAnKrmqMohVqVQmoQfbc2WGqzW7DvNaoniQqcSrGBmHPLCVBLvEr",
  "key13": "gLaJBL8mK1V7S7Q7hZVCwBST5j9vXtAfu2ETZrQK2FDDvpCEQ3u1UgKMjPvoShLA9wfjgnn7EM4hFdqBh5o2Zrj",
  "key14": "5wtsb1rKZ5KDSrWXc4bTuFLynv7oXi8ZqXqMBxhbrt1aYKY49PSmpTEAGsEXE5bbMxXSY1WudpLC9okTxWSnUS9A",
  "key15": "2jvjXg95J6danQEd2UFhmkKoyiRJZUgdiQyupoP31Ve17zmcxsFQHwqN9kHgqGveD9hjG7EsThqRCPPdBxjGKAnd",
  "key16": "hPEWyyXxNneXxxYRb4eBfSbGD4ED5puUaftixmZQcourQm2DYhfuamW2pyGqYYpncVLzrd3vTfmrD45kV3yQraa",
  "key17": "3DtRoJ4ippDeHWbp3ENN9aAG9DXCUHKCkFYrKrBTRETTu7QrjgAAyp62qSc18mLqs7zNYteUTetA8wq1PPgRo23E",
  "key18": "3sqiwcLAwwWU3U9pnAMfsGMCmffzgT7C4wx68jiohLydJJqdiTXzhAXHLcyftNJ4XA25ynjn5YHKJuwrpphwXwUr",
  "key19": "2foBuqv9W2ctMHfwgvcAwmAr19x7jmyTxTpDaiZuabz4NdxSmJSkmZ8K1EjAEnwUibZPKyCiCAAvppaNY6kyCHdk",
  "key20": "3eVKrnBAUoQhSHESheDg5xpEBKhpPHc1esbZVL2bmiMrjjVpkJgpqFQZmT7LL4RnzP4EyVnUaRWDoU3YmRGGcpKk",
  "key21": "8nDZrUzoFUPExyyv9X2K7Aa2RTy65i3ugtqzWABy9TNdCEWwc2EeXwFPzeVuLDKYUDQJkVyD4K2uCJMM3sFpMD9",
  "key22": "4EiwaD2cci6s3wJQZoDDz9YT397NHHkTMET6tQ19pyBiY6pmH7iXd7DiTU9PfXSnwM3HoYqckFwweX5RQ6qSXFoz",
  "key23": "eJQS7jexD1LiJu3cz1KVTjoNjiQb2QYsC6t9zeEuvN2bT2uoF4R1tdzdwZK88GMr3qJDnSu94f5WEga1H1yWxWP",
  "key24": "spXd4EhMtpQtsuFXuZwdELfLnbbqMVP8yNjzHUy5uB9eWnyjKooKjobnNDGdPA1uMRmRpfNEEyw96drtkAbSmqy",
  "key25": "31C61v6TYay48BoyhN5hhNGep6Rs3xGHfidU4mJje7Sd8VagHiBKwiPm49ZPz9Jdg4k9FfAPw1sLV87TkTuqfKcJ",
  "key26": "57VN91UiaFMzxbkoa1jNe55qo19RpHiJKvzBtG2QSSN6A8FEEq523JFigxcKusVWfxqeXyrWij5BSYRyiFer6EYW",
  "key27": "5n7UCwsyn1hY4LESPG4EDM9ihFKevWKMRJLfVR7kTa9YbLAQ9e7FuR9kfVosX1Rx24ahc457PMWs5tuRJeUTAT9j",
  "key28": "53YN7WCnARnczRWaW59VnYjJcp1HbRdypYZf8W1FKyLCNNTCDgfdem4ntDULaZ8zDeRB3oxj5nQZveH7ukeocCm1",
  "key29": "2HSHaLbaqwyQhFDm3EHk6czo5g8V2ek4rfb2VLZTrdWcEYZCA4QEvuyLB69xkFb6a9M5QEjdDaZfoEaVNxPdaNyS",
  "key30": "4H3X695YvBayc3PsjssU4TXoRATCnPtyxzf3ks8NZLBFj1QfAoQ17XBJyZ5EcFr5UmRowhwm7NzChCjNME8oLLnV"
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
