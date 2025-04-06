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
    "5fvhoaN8XwCWVyhFvAPF7exwDYCs9pD7UzYF8aYTDcPtviPE1gKQiwEfbojfTxmVYGeJvfQxPxtDRLhLUN56cNyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YS2C5TdbJYCT1mbwLAgsAmgQ9cQfTYvKvc25tLv94sP3yjVzDn9ggx9D9yDBLuY9r1Ho4xq2NhCnkLYGZfS5fJ8",
  "key1": "3zQtVceuLiCxVQGgX9xQ69kNwov6hEzKdXH6agwkN268XS9bFfncPKkoy1ZLtNUWBAovFJKut4xbrKCepW9nzsVg",
  "key2": "2WXa297wxfc84sZu9t2b36QYbpLhudXYuZnfo7qnvG3p4tF5xaBa6gmzeCCGx1Qt69CwpL3vd5jtexpg6Cs2oZMB",
  "key3": "2mpQyRPPdvo1ZKFEmrFDhNfug5sxLoBQDqUGRUr5v3Cv1rEvrUNmfEyer6E4ikx1BJQnMzThn24tK7tCjvL7cahm",
  "key4": "43gMp4PUx3nnmNGCHPGk8pJJ9hKTmYLjFGBDZnLHUJMqdptmSjvDr4mutaGxeReQhsaZeN4u8XgyeMzck4ETk13W",
  "key5": "3KZh3CPUAWcgok8UAWxdfgoDXQmDAbeRM5S8z4wNJxLC5ngDfNE7EwDmbYjAdF3aQDqLw7kPJNzEE3uAbLL9c91o",
  "key6": "ot7T5FmUWHGGPe4tRoWAmwJrTYhJyNhBHz83z1X8stGoKV7fhhotc7EawLZCJ6KN5n6wN1hy3ih9bdf6z9tUT4G",
  "key7": "kMAgevTZGZbUaQFBpUNz2Mk6s25t3LfQq2pLLGcoSV5NhBkgweNicn2GDHreKnj48K8pbiNEVBZtxmnt8diLsny",
  "key8": "4AkbMS1KCivG1gukxhwiV1uraXWpDKhzaxgop5PFiN5vsAZ6NHqV7KfakemT8uxQaeeJShHqBiJvqtTduujtWmRE",
  "key9": "64LSKgEe1eT6ZGLZ276j1e2vdWCjGLjQQVbk5dBpKNMXzST4GpoLg6b2d4oVviDc1RKy5fN64d9b8PovSvKQQ1GY",
  "key10": "3KqRA3r94mYFpzFwrXY3WCZVNP8wRPme9XXZf6zE9wRXNLHrPCjiNEBMWpzfJvpoqZTeTgQS2gX7Ljzm4n37PB8j",
  "key11": "4U7BjpHJLsHt6RBp2s2MkwMrHLw1PcifhxAYvrmJPVKmrSAEecyZhTUKHaEKS5UkJhnMhBUiRCVoEVX4tzi6s8Tp",
  "key12": "2wDbgfagiKPi8B6sGAsTWGctgwHM3A74r9pYotQexJkwz29UqRasoGE6sZUNSfVCCpxr7FD63jFw6e2XdHJA9mpm",
  "key13": "3BnPpHkvZtd1g7fqtno2uzfuVFRTTuPRZjoVKksbu8qhH8DVG6gdpxCQxT8MGD4ftTv9Jqd3ALvEioNUsnPVr52v",
  "key14": "2xip65EpoNaKHkPAYxJpYMKEQKxtpNLGE2e78b7atyHA55ZhzW9ku57gQyBaHD5NqanusBRNfYPkfJ29BN6BvU9K",
  "key15": "4zS4kPkyRnjox74v7Ky3PMc3GaepJ7ELfCitJ6Hx5GtEzyoAGgXpDDAhFPXd2kgXovQfcVQogoZzCp1wPg8HZTEa",
  "key16": "TJFCVubAkpgTDU7qfRdrPF5dW7x66CDd2BEHYihMds1UPDAvWhKH156aN336rZmD639S8injKzur7MvpA2sAHS3",
  "key17": "4esJ28gKqYDW1AbZUEbqFs2FmqFM2TQAPtoMCDcFgEFyTBwYadmhK38Mk7eUqFQfrkK6G6GR5dNp6pSFnZWmU34U",
  "key18": "2rtAAAFuTypNSHqUtMuRD9tQ75VXQY3oQ3AXrsszEEQMzEGQcyfBSc8HfwXnxwSxzxRQcwbPeQizX3nbYD5EvFMb",
  "key19": "2R1vNp4vB7EfJ7a4RDs4hazb7HGgjaMmv2GKJ7FSv9W9SCjYXgSwbCvgto2YQprL7HbdDojf3yHHN9WdaPKP3LSY",
  "key20": "44VMVHbwtCFPA53cu3ZpiBTrCh9CK5HiN8Np4fq8jZWPnDYywQUiCNpnmKM1DfSTZfiLVpcqtAtyxuAPpiF6QrnH",
  "key21": "UnSt6rbBiMxV4QykaHQ8QxTxjyB8rE1E8vEf65LgGUzZH8wmAQNnujJd9HWJLMerQ24BADi4jSiLkwUsqpdZAnn",
  "key22": "28Ci3HWnCgxk8pEoupjG4NgYnuri838ah54GsS31hgCqs4QLjeBDK174d35cGj8eNd7Xqq5xBtp8y4Ko2ydA266s",
  "key23": "2KchC5gHMvmiDzTB9TpSkgqhwcAF6vQAMVquQpVDdLv5wqPTW35icgi1C7TZF18NmGfNDK4ArQrPzfaaU4xoJAtt",
  "key24": "5q4tSeWYGc9XsbgF6yKjpxBoNJTGBzYhgfMd6qSvYRXdEER7zgbDNdAGcDf4TX2wWA8x6E1bZy13PXJxdhAWDGbw",
  "key25": "4ue3qojAaPJ3fGofVBvJvajW7EeQPxVW1TPsgXJjQBQAswNDSDMtYcr39SLgASfaP8vpv4Tvh6G4xiKszh1wwmRe",
  "key26": "2bimjXn5QLN435g8AkAnEaF9mjm43iVhCB1zaBTnGLsDxPBrwjBY8caDU6YdTvc2T38NM8ykphCRcChpQo3NRjU",
  "key27": "3ot7bzLTPH767ogzpQyotFeZWV15rRJRjf6PSYKCNT3unscPqyPzevZGTixUVhUQyL2HjhREiy7hBHsRjCf2qSbs",
  "key28": "uP2A4XgUMV5yD6KF1fueWcWm7KVoA3WqZVir3A2DLWqh8uzzobJC7dPvV9oyWqmuNkpXfb4u15jLg6oGU7po764",
  "key29": "3ZRWiJGG2c26cxkciFAizkPeVggDqV2eNKuYXJrE9aZVchRZbvUcEXLTufeHP2U1M6JF4ijmAL1UThC597q7FYE2",
  "key30": "4MPc2BZzxZVAcu4TN2naim35HmVJi1286V4rcEwiYKk2u2Bz9fPfn8Z79TkY3XQagMnbpgZy7D7LADNpUsuSRm8i",
  "key31": "5p4186hQpkymsRmGgV9kfvAZgqcWVrb3Gw9W5GwCFiES2gMg6dmPLKVnFN7wCmHBFASsMC3aRwkkLstcyWW3B1un",
  "key32": "3BXfpkHS66rxERavkSC5YJvEXweFd6RouTmWJR5DUkkrjJXqd5ByB4kFQTVRQ5iFzWxXRAaWimAdG4G63d9qSfZr",
  "key33": "3R6dEKCm8bKBPCziH1Xbfu9shwwExkY6gxyNDgpkeTopL8VutuVz2xxiZQXafEPexG4MkUM2t1pU6MdBaGMrunsi",
  "key34": "5pnZ9opyeFsaRFDmS68wfX8KxtdMs7wc7UPWPVu1GRzeXcrj7Z29xcwqLWQV5ok2h4L9MxF1rpokNFePu5oUmb86",
  "key35": "4fUTJ5jzzpcmvwS4U9j1XVRGFTHE1MBCJT1LickFugYd5YCuetJF29WSLpTHXVDsKerz2QLx9yZZYw9KhkHxLdM7",
  "key36": "XFMHGhqe9YcHNgNgepYNXDa1iPunkBz8XYKJYRpogUAzu6piwss5fSdk9EgjSoQFr5B5RTcZXoi4XzkCFof3qGu",
  "key37": "4GTkE477zEgyb7ivWWVy1hhGuqSg5wqVANEG95PwtaRXD42AJjDs5XE6yvQ6PVgT37m2rJHz5VVGdPXhc1BBwiLd",
  "key38": "2FgmYcRghzLWVfhKYJseKAhFdruWurVKxyWwsHkBrhCARHoNoXYe9GSXmtuvX8AJfpQnt2awRXjFeqdjrjVXPmdJ"
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
