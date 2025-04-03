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
    "v3ENn5M5ZapkWb41gZnYseoLfDTJrSyct5o81tHHdke6SJMqSXH9AESXhBkP7dFPfFnLU21jhqRuucrfNgTQ2zf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tB2b9p9X8sAEhVygkhEEafuVS3ryD2sSSrXSJB56wsSEMNBQNyZTpWTkjrf5jYMgBzng5uTeF4NJ3iGwzRWKMrM",
  "key1": "2G1nHhkkX51XgRsRypS84w9ZfJb1H1NyfycBU5hmL9EjS6hRShBTmfUqdaVtVcX1pL2cK7iykQFm2FesKQe5iKbK",
  "key2": "cvU7mBGdUZJ6jYRuezf3rf1cSpNr6F98fjqjz2j2HiEBVYTf6X1Xey32cQZ3xmxYJWgCzLjr9fVVP6uxHm3JC1A",
  "key3": "5ThvnAp8dWXa2fBrdJRTEt7CehvRhW5EL1zhEezsz8HkttJREgWcx4UGJ4Vy7JfDMxtcuMYStbyHBTswtN66dJky",
  "key4": "44VvEeE8BR7VnKX8b1a1wPfKuEF8gVVSrHu5w5NPghza7aMKmdjfzvTpyjob5qL74C7hPG5P58Y6Eyx4PWTB5mn1",
  "key5": "3mefBGMZTofvWyGN5ssiFuScbhQhigjhA3ixdq75FGr8duVS2YSE7g3DQqLgP7TYhTxsC1kVaGtFzdL5M143NiiE",
  "key6": "2gYGyhCVh8J54aFetL478bakdCFhcdJPc7mFMVgqpvoVXJz7bACHFRtDZw5ryYvivMaQk5fP4gYiicutQckf5kv",
  "key7": "35YCVwYQkxDSpkTdHESum6crdouqDbBMFUC6JCJEmZb3uWjvC2yq6ESnA3nNwVHCCGQpqR9ti8E1SSpykKGH7hEk",
  "key8": "3Xmgcw1uzc9ys9UqADbVMGqNQMiWjTb5kbkMD95dq6UL1Ejt17d6XMjCoChCMy8frALGRjigkNXFqUuKyG3evhmG",
  "key9": "4iqsC4neXs6JKtKX2kPtsZWfNGstcTDLDfKPbrTNR7ioPqE6sdRyS74zX6mroQ8U4KiuS54bGY19je9CdH6TkUM5",
  "key10": "4xV57ULzB5x1eeZaYURUQ3phgSUbLnAjKtnK7QP4ZMy7ksXgw1adoKpRwzq4NVaHCGCxvs5yjo1r7J9eAXpBxMEV",
  "key11": "31431Ronrm6wtj2Q9ZRAoY5RhYGA4tLRHBW4avCrngzt2rbVygGmwxR9cm6HBwZJ6cdHG36bmfbrspfyENBnzm66",
  "key12": "359pNEvkAoZ3nxc999uaKnM7zsro5zv74thGCb2WVFiiZzUUjm3Fmraoke48hiAWfFzWgdzf6Ryzuag65ePEojTN",
  "key13": "5J6pmUVY2LK9qrvNDcuJM3cFojdAJfDNSRQgjsjvADFEDYTtzi9duXNThTveWZZpBKrGyFFd7c14n1cu2WUF218w",
  "key14": "4RqKhYd4jR17psDNWS5qxmG7XTf66CD7HMDLyZSB52gWftL3vRcic48u8n88LdbB1ub3XuYzmU7ATMneyfKD9f1H",
  "key15": "3NqWJYmV2sRVweycxRKigSFXTtqJA1xU3pcMdng6KxFdzFodHVgpcY35xi626xAQci434ZjYdKwPUY5kJzJJQWwK",
  "key16": "2DcPuPctvxwywaqXQqv5gkg1ZpKdqtXh41egsSUCvUvhmdLDuNbEgwpZ48bjTnpdDbHQYoCfGp87z39kjFYZu1hr",
  "key17": "2WskA63yX9BhMAeuWwnLatG5SfxvVXzeF9LtmEF4VyAmmyqYSR8syybT4vGYBrNbmjqMdc3fmxiCmZ3FUi6rFJwk",
  "key18": "3n3aGA6nYCVhVDvTStr4F5rdD1V5jDwQD94r7Hp2gd4HhDpofn6Rh7zzo2m2UJ9mbYZQL5tobLqdvw9wrQNeHsPL",
  "key19": "UDVh8Mg6Nz2QAwkCE7UMPofiAWUMJsTPCNZC3JTQ1JPAsLJMCbrwyxJnci9f6BSFeR9iWy5HLdaYqKGV467Jc8k",
  "key20": "4p6HuSZErsdPQaFCChx8QigXHL4bDMzCGqzc6b1Nv94bKC7femC4UGKn9fYgSxThw6UMYtiWkmpGRs3QRVHZNdtt",
  "key21": "5hQXHB8CWSHyM8RmReAq8bAFnbQaBiZ8zfdHtRNfP9miJf6z43EdtVC6BqVtFen4iPq6At9mkA8euSDzkKno5Mkm",
  "key22": "34rhE8BGaDFNJsxdjav3Gk1bqewyrFG72h6DwYSN8X3Q3r8RkfKtRnL2ZaYsrCkyXR96ZGBisjkyo7JDrNaL8L92",
  "key23": "skphrfsNbvcsxRcJPndqxachoTKxSyn6qtBGxJdLRF1GcVMffH7xMEgnKaDCS8nfirWGLieLLw8tGuda3NrV9yi",
  "key24": "26ozXBi4TwFi4amS2R56ZQ9cKpYUByN2tvQPUqPckDR5PVR2D4UNBU1EDqR4XxJjroSTVMzrZVyXJDZYEy56E4wf"
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
