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
    "2jiAZFix1VmkSaDEviD5oSVct4CEn2arpMbYnBN9CZkvmLMRzpUwf6LmTWv1a2UKx2JcfBYPQHNYHpwhGKgtYhCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h3upa25nMEQp1X191umpR22hhnm29DjWjzi8Ues8UELYvtNd1Z7YyxPuF9ViztYVGwgYLeLaeZV2dNmXBipi8Mz",
  "key1": "61KJyBZ6VWHmmX1Myj6v8TgM2HdGq61c8cWocM5ESUheH38RXGZM4caDftcmMR29x327CHiCxA9CsLpoC4XXH55u",
  "key2": "58r91xM42MaW71TsAPtd4Y8v7NCCE9U2Wsun6N5zff2qEXSbhr1c2gn5aaBRMVThAs1JGpkKH67ZydvmNhZbTpfW",
  "key3": "3qmCZDbX2HcHzEM94byLy6JPn3rSMXboTr3rj8WbsnVc9rFuv3BjXG5GiqWAfkuQuYP1BfK4TxrdFA7Qzy98ByEq",
  "key4": "gm6bN51U849kRY5ucAhkvenCcVM5ADcjFBv8RCDhjA1baGwi5FVjHTDMo5wHXBorLjqsAYnaCB8ShJFPhh62coa",
  "key5": "2Mwh8yDntDa38eTCSHFcpBoZppgmUC8AMSRrwbUs8uKsL3qZAHeMcXservj1q3Ufucv8DuvZ3i4aKg7mPVKoGxiD",
  "key6": "dVAdJL5oR46j5YzgQAW1w9gv49a732F4VYPjQmAe7SDyemwEEQDpUe6rMeSrKoGjiuobD9hBxsv3QgbVXLGagFk",
  "key7": "51GaPScNmX3VE3FCLP72VZ752kxXasUs1FrWYz636nuPtRE1hHyTFcXQ4no1LiUDCcQcaSxP2ewN7DQpmf5hnbzp",
  "key8": "2VpWF2KrPx77vSzzPi8Peqb2DFrisw3HYqco3Ppz3Hv6rCKBu9tLRCBTCrMfjq2CoL6FgnoZqSCBaDhr6tHtMu1A",
  "key9": "NR8PPiW3fyeaZy7x1mcYoWH6x2xk1xKbTaZ2JZKtzwkvdsUnLEXZUwRaCo66kjb51tNmkikNzxpNwqRrLJ18cqr",
  "key10": "312ZqjFQ822rrFTVGohq4JMyvddwuxT6sTyapwX92hW4Cg3w47psQABaZqzbAwyofzcmV2r5H5GUktBoxGc7aKsL",
  "key11": "4goB2zAYk5kDxoKU6ViKQAXxZFe2Bd2TWwgAYVTuqYcG1WuFU5c2NjvXFs1XBWgE6b53DqMcoXqfVfPwDKyC13uR",
  "key12": "g6YSbYvwn38NjwDmm6oAnScwZMiv9fCjiu21e8FknyXfQL97PcgXzN2RkyitpjYJdNVE8CBTnEBiaf12UR8Aw6C",
  "key13": "4Yuv3LjqpXs4QzQqyw69aT4CiN6FvBivJmxadTnD4ribvA8dxw56hw9xiFQEuZ8GEjQd8NgdxktqYEw2W8aHhz1t",
  "key14": "5ZxA6r6ioc234fedcR1AtZKtv8M6px9o25EtJ4XvE74ERH4VwgkiEnH5Ws2v4HSCWK8vdCTEKEwr8xJ7daV7hDW8",
  "key15": "537Ao29ArptMtRxQb38tTinvBUNNCNnUrL1bPbDJ62KZv3MKfoD6f5WVWqvSu2HZt1wL67Lb6QneW5j5JDBjF2jA",
  "key16": "3MF7TZsECnHjPyZzuDDmJCMxNT3RwHFyvd1Dh3H2UyyVVrpmuAdLGHc5qkEzL4wTXVVLD8XFsbDnQtpH284WtJzL",
  "key17": "xjXBC1Pax3tciC1AgvYMiV5G2KGS7gsAgEmGgH2MuYJFN99yKS6swNshkgaQnLWND9ZWam11RtSUAnEaRVVVVbi",
  "key18": "59V6YMGufjwD3LSK1Zrzg9nqLhMUfXPY67qiqsTUYUvsDJhuoeaBvikLo6WKpxVpVaQ5EHzao3dPp94UUHSXX27n",
  "key19": "3yzYUvk5h22qFVb23Y84akb1zCGwfWXNf2TocYgt9hmETFzsF7N68Ad4opaQSxdhazsYp2ccrQDVYLayWWZNNh8G",
  "key20": "uJpub6HefKr7rErjarekyetuRu75EK54JgQrbSiDzLVZszgK9EECCjgbUwpPB2GeSCJuUhq6hQiySctjktAoARc",
  "key21": "25cqtARr4z1ywrMPgBQoGtYXtri2LfcUxvwbnsow5mHzg3z5DqRHGQbL3kPby7bAF1wrKTaiFNCjRYqwoq7gk2bR",
  "key22": "4g9W7K6sZFbpi13SfUNZPe68PLGvevcqdvmgf4v156ZNvKxJRWaWuBw34YHBcWnNERmcUWNrBdmuVfgfCdJpfs7G",
  "key23": "5NeRg4gXA8Y5nmRmjAN7CvRSDp38xfidipRLKBRhh9aThwvYcFpzvRySsJmRYVVw71pBXhjqjGZDJkgj7gFmN5gf",
  "key24": "4haFHPR7R2LFH9vxFKUtL5EBExHjBkmsj8gGMB64mGBSWbDtz8tBbi2K7W5VZ9WTKLzmB4ZrQr2CE7QFiFsQgwQ6"
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
