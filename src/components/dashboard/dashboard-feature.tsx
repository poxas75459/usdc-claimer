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
    "QqaXsHiGpc6XacbkPsCXsfRbpzN9vfjusQ3vBHXxYeiRbbsYz8UKbRTKj3rB8ZziD57W8dmgPktrfqPtenERSek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57pqWwHwBkepe4afnE1KJkC4YSSc1b1M1j8QcP33pMrGMMfQWQnS67PyvEuHXoSSZ9mcrph4ZvMnwgpa6YJz6et8",
  "key1": "o11GAuagXfxaTc5Q9KejNWNKuU3r3JufEuE4cAfw1rttBhvEtQqCVxCjx4khnbnacAueg52uzZ5tVmYRAiqGzWo",
  "key2": "4iDFagwpSVrKGcBoYVTYkuzjofmoJ8p1QwtaiHcrs2uvXGQ6U7qRrFpwWhxVydn5x2eLi9bf5dtnZmHVyoy5yHN1",
  "key3": "4QEY1qQ5oqeA76kmhWr2Nde6VpGjdo2aSX1cx4t3sgZeyUvVNToFPtbkMLxKTfRMyXcFL7Tbeeeij7SviSQc3qRa",
  "key4": "258tm8nXJcYZmLeR7bvA3infb4ZSc6upDJpWMoZpNRGSLpENkseLra8Acaf6AoscC5xpd7s6VN8GkaTLr5Z6TfEY",
  "key5": "4rN3RVaDmGVQXCKQuXYKD8TJcoJJZZE7bFnAKJVgFGKyCJtpGtcKsfCSn5WDZc9pEUnCZDAcxhFDq1eXRbKnKJgp",
  "key6": "4gqPmhK6goRRQHALXmDNivXCmmVDfpD2UnkCQGDMUqVv9XTCkBuFxkDAt6R8Q1HyqZXkQC2pMiDq6dPD4FGMfLq4",
  "key7": "62mhwBCAy7jHER5NCDXnfSzRY5C3YLiErXzzr5giMvrU4ZjH9WWU3PXYcNmtpRNa5MDnUFHLuGktsp7SQfJ7FCzn",
  "key8": "4KQF9ezfi6LtkgXXivi2phvGz5hBUg96RzKaSPLd4EwZeBF5zPSPPx72Y4dazgWrHp2n5APaSUPJW8YwfbzcYk6s",
  "key9": "5sWY9uK2xcffJ2s4gZPeaDeWReniLn3zCbFXQu5Q531KQKXVYZ3X8uiVo7oHEbyehDQFmiMJZnNC1BGuN8Cq9EMs",
  "key10": "32cptwqrXRE9VHoYCpPzHxBkX1UiBkdXCme4EaM9nfREePx5QnShGvz1uugUDwgC4C9XeYGyPyNzdfLJBmchnS1Y",
  "key11": "2iHsHiJ9zkyqbmjb3tjaRgQznEpTGREJPoq9phgqT7EV1WW5bf24R3TFTRT56LaUBpRqYS95jeZveMByRTsKSSBx",
  "key12": "27gvkAh78ZYD87XCnwrSksikG5WAbtxX2WeRQFceHudnZPo7PERtfC8HXxHEeJ11TTGZEVL36WHTYq84zStn44m5",
  "key13": "5jZPVGs5ZsJMNees5STH5as71sRpdkUKmpXJZALHUJWxnKJ8B7tYjH9Wg4mneqGKE8xLBXH1ALZbecK3L33txsc9",
  "key14": "2NnMSYoVrD6RPPDCkQ36gmoz3MYZ3Fnp5nLkQwfVuEqXnXeuMS7ctUUtxvVNco9qVLXeFzHE4VC1Xc4fb3jNnzd",
  "key15": "2Bw7ZAgkJSrtd9Ud6GNfYP7w95siPNt3TpekCR7YLh8aWNw3vmCLrVH5eK5oVMRgNwAY6YtmX4gBQsRNbbUm3hES",
  "key16": "2UzSUFN7eT88KxYeoZJQGbFPgJKQBpadUPSUjcHsmFwnZVCDdNRidobsNyKdsa8D6w8S8kVQaYPQwyAsSf43XKwi",
  "key17": "EaQFeJV3kssjmx86nNbbn8SvPiAjYjSBK1sWu5frvSpgjhV9mofDAbvvHhs1cKpGQXiytEbMKcwecyrTMLxTUp1",
  "key18": "2NqWGVfaQ3975eF1tvfeFLD6t4YNfXKa3xwRe8TcWp78kMK9fXc9b7hHZFz1uohdMyab6oHrHcLq5P16HU43Bw4C",
  "key19": "2Zp5gneLp4XvYRmZmHcumRXNgz1LaP9vbuJ8wzFqCrqr2uXo2fT8xdGsUeJuUhD3yMuuvWjAm5hUXfHxtNc3MJPS",
  "key20": "z2qEEy4VdgZk8FgZMEebgB5ieqtQDXUGVAJ6U498CE1rCRRxNXKeTm4cgwPGNNZadVctGDpkXFe8n7JJxCKWPFk",
  "key21": "iJbZ5BRj4feJd2cG2bTRev16nUCzvs4boVNzeqSbwckqn3iHdVM3XBEcxuDyTJzdB3u7q3nnQbwjThZc9DTvDXG",
  "key22": "2icdhKMZmbx6ihxovn5SUPkEVPxr1ahRQvdXYi1wnLx2Z717zyFUPp8zeH24PGfwMGLpPkizo12obpyYmZFXrq7R",
  "key23": "5dcB6dzfCzet2wSd9hVzz4oG95Z99MWv5F2wtS9twz4dsn9VcQq7o9viLzvuL8fPXWTJbmXcE6knjGVrs7iCh8py",
  "key24": "4PhLAq4yes4TiXxe6kNN8R6sCnceWgmVpboKABew8XfmXCtFX4JFMLE3M8J7AxtXxGUZ1oWxGob6ipoQ5ZXvWgYv",
  "key25": "5gCChYWxjM9b16hTpzwCntpZbE2qR93sv2c7ZkitnrKAcXiCifzP4X5jZxeFgzFPnzSui133jLjdLGhMn79Q3a5w",
  "key26": "5GP3cUfLEydLPZ7GFTErHrHzZ6n9zWCe3n9mHfMHDZFncq1DLnJ2J16jjpNR2zb8Bo2Nc3JmodowAG1BBeH3C8GJ",
  "key27": "54xemfNzgEa8cvC7RufwauSzNThZQHWXp6AgTF27H2sKnufmsQAZRWZSUd9ETxU59h8JWF5tUFVDpzx1cJwWdjmF",
  "key28": "4mif33L7fQVvCD7UV9fXsSm1666PSdDrLYPmeTJKmi6bxrn6fxY6Fr5iDfVmizGe1KdUB33eqBuiXBanDWWiXxKz",
  "key29": "5LcAJHLBWQhbbq5bTPNu3U8ejePvC1Poib8d7RmnGaLLFXuy4GMUqqQX5oTZHZYdRqb8GkLr7J5A8NNsDhQF4iGi"
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
