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
    "vXeCYtWUvRodfVEYLwwVFaNwZ5ETBESBPs1M6VYVTehrriJV3Nsi63rbuX4HWZiSmW4viP4Qmb61McR1L9KaeJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZsjqBVbjvhTDVzhVp6cxAyRXwjDGmFJbMJjB1E5LAdeab6eou3KoQzsQWHn9Ldwuzkv9DjRZqJockc47JKJVozV",
  "key1": "2MsmSioSp4oweAhgnruamhpdjDg5pYoyNjna4Azdx73wdAjtGbMUopBL5btReRUf3hZyBs2v97Yp7hMBGY3NSEdD",
  "key2": "4CYuce63gNdHmtkE8zRrtdi56MsX3MSWxmbLepEynx7ZcU7C7YVFhSY4otEdNBEBrzyG3p9tNpH2PxioswjpPLbK",
  "key3": "5PsQKhtQEG2QQGWDchcrG16M93tXFkFmnNqmVjnUzT6CneWuYAbGT5uRGZbNA7NXHXuVsb7AzGVnJmxyATVFCMDN",
  "key4": "58VW2uXxk8GPkKSeuCRNYS4EjmeWoPmPU6aXxaQTjwauXY8EZGxEVzb5X2xCGVfePWnfP3uXfZEsQMYRXq9TH9UV",
  "key5": "5NRzqcxAGw6QPD54frcYrrb941Ht2q9253Rxoxu4ZEjdGbmh3kKxZTFdLcbGHgVgGd9FT2q1pFdtc8oN9fHUS1S2",
  "key6": "rMH1XM99AUrnbx7CiiUCZJ1Z3aXfRMGX5aV6ZYxnQp4nvwQ3wRJY1TXET5tiiR8A9TELgAcA5QcCbRADiTgfPJz",
  "key7": "5CSSe7bHQFTzGZiEtXE62CbjycntfzpgnudJ9d64Wyb6Vrv7tEAU9MPaFgxYsS1CgwhUoGm2ntEWZ6LnpBympzL6",
  "key8": "2MuAACz9mfKWYCq9u2jnz7ponLiV89BgBdyY3wNEirjbECaHyb8AMced1khtMd2jxT1rqM2uDmFcHHvdYnFxfwPN",
  "key9": "4GqAUpY9MBLMpVUn2vkkPRNK9tXRLx1Uo7CiYxULxvWFN1iqD9HAsLS1BXrfLAGHez5U3G5cjLBdRmzbLoEUBbgY",
  "key10": "3ekyGp81MJAA7fyp9pyyXgxqWJSfd5wueJJ2bMBHhLyGYz3pDDdTCvriCj4cyWb2FbgyberWHEZegvWqTwzmw7s9",
  "key11": "25y8du18EEfL3NavxZiJz3JjqM3ef4GGJAqZEJiosSTiLtCKzJoGiu5cMrDRgksddF4BWhQ6sZdntw1LWQSc7x9u",
  "key12": "4Ctr4gKomjvptUP1mPdQkJWBKgATSsMKA76haYjcaY8XjpFdg39YJ511PYg6Z888mryqb1hk3iBpU5eCVTyQKaNn",
  "key13": "8dFs42WV1iWiojd4nhcWsMs3S95cErPRoC3qSo5vuReZ3NWzKCXW31SnMBaYPKLhpMN3BZ2Qq1y82zoEvjrH4K8",
  "key14": "2PGRjFWvA4wYyRph7573z5UJykSgKdtb285uysXoN22GQWF1rEtPWnaMCKHa68e2x28i6KNHSKTRZRyh9gHPWYAp",
  "key15": "5gDsbJB8FHdX1LLpzoH2LQFL2FAvQowpaEro11bk4kcof1xAV4wsuuk38eVeBTfDAW22gTfc7LShxrboBVVHeZqS",
  "key16": "4h4EbfkBu8UzZc3Mqh85B9j9CeVDpFWsi4jQBnswt6Pbfnpu2LYSTwpwu97ayrwMRPiPoydvKKFyed9oGioXuXaz",
  "key17": "53icjEh2664ZPRUZfRqFy5zfSsdDV5VU1Bw3QKUhztgQc7ByuTkCun1dFzXdXDzpvTR5kowoTUcAxkdibQnzaVCY",
  "key18": "y1tJNbz2fPeGGE5bayHv9EV321K16EZcgo6KdvsvMjPFAPTeYWeWsNxCqm6vV4tfCyEwLzeuxQYC8KR7mWmttuE",
  "key19": "4o8tFdZoiKDgHrQ8ndYZaPGpxh7d5SX8bB6T9jgjDvGyzEKc6fLUECdPkWvkRjrHNt8Ji4DKBEMPJ8kGzsfZZiu",
  "key20": "Vx2CMe4paotb6TWdMfSWCR2Lg6LYF28jPwKwcmGVVJFFJwoEguPPgJEKzYUY8eF9YTWno1eBBQzQa41DvrTZwUE",
  "key21": "2CsZUztRg4KHaR4ZnVNdFGQZPeomnPDQivJVkopsbRmDRopNFhCxkahP4hvvRmWfE4KBaq1knLHUZNFHMRF1esrA",
  "key22": "9Q4RRfM2F6ZjcqAr7bobeYvadCGTxH5F1MjAoMd2skDXCmghbMWgW8a6jSjcHUggiHMRPuWNM1NyrbNSCh8n9fy",
  "key23": "2wM5FhxEw1bJcqRsi8EyRpja9pCWSXXFirSLVmiQCZmYnhgmcwwaNizTbBrCTpMoY3nYCp9ZrA59yjgDZyg77MNR",
  "key24": "5mQAvtxQLhaY7RDmLbYUhYxieDJ95zoAAqLxsdAJhWNVtgTjfcSYRSkEdJAnKk2ynid6A1C6fCSGXXeN9TU7BsSG",
  "key25": "4PrbtbitAsPMdjuc9jHP1LqhxS93T1tnuLphvDXsAEz8iLqkPWEV5zJFfunh4LPiCgoy64zA7wbHnkqhQkFVY7EE",
  "key26": "HK6uRzFoxWk5fLxxdRY5aSwCJDpAJXjx7dzXV3sAAJr6Zhk77EacRKTPjBRX7NeV8hNgCf9QJ81q6557ur5kPpR"
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
