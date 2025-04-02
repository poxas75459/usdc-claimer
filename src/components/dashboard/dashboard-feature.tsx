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
    "2zncWDV6xmZZpMM2uhvwptx9HcvduQRNyK9eioGxoQqQgVhXe62w5GthXn3rnY1zd7zUUW7E4SwsfFYn94SDiSni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662FYbyfjJoszsSqBxsRfXUa8dVdf7suQ19bDJUFvXA3cSWPx3TnsUnNWrkxbXvPhHGoYxswuF3Kbjb38dTKYBe2",
  "key1": "5mcyvZdv7u2TN6ryiA11Jm28GF3cqekhg73oXGyuYddxMw6vqkcv3k6tgwhwcAMPCnJB88WYkQzjsZhtL4fwdc3L",
  "key2": "2s8yUr39XWirfCBqAVYiCyxC6ZN7zfGFCKuXG2JPL1U9cuQ95fG7hCGni7C1nGejYTGnyXu6QHhZ8oXjeg3YmAP6",
  "key3": "5GySYv63yaTg4NEn64FNbvQ3XRVq1NRKENRSg65s5tQ3MLvqQMSz2rcnNsMFGczRhhk2Kx46w62jKy7Axu6voYPS",
  "key4": "3MJzv6b8VzdFwKgj5TG2g7KgSAsp3q8TDjTnQjsrbZXdHRa94eQTRdvEWhGfSLk2JzRZQvfiVMnQLmtZBb1XhgQu",
  "key5": "3c2pZvgr9r5XYAMbG1KoamKdbuU6cVkLgRm9sMYDp6Q848BzPmaFAMWjhuYa5adLR3qyja3xUJGiH3V9b9emi2sK",
  "key6": "2xqVuXd9ax1q1nJt3nghv55aVAZQjWkvu6xda3GhzwCYVTeMMnf3rRKfMqdjfYrwQ5tfBWbEeWs9Jg5Jp34BJkgP",
  "key7": "2DMGARgPGZQLoFaKZ2QK4cyTc79C7vmiYs2CysBvip9b76BLTix8KKjBCxzkgwHDcQYUQCtYC4PVXKsYrk8GkJFj",
  "key8": "33c4em7fwyEDS7KzjjVkvuixEeL8swZcFLj1EsAdqryi8UcU8CikrfbMJWNjXfvJaaomeqPZsGhQnzvERA2NunMK",
  "key9": "3P8rvyW2qFak5kTWxsrJDUkdEmaNdF5m1g2dpn49aM8noKtrUsaRRzcxBEFVgvWrUeoRDr9VGqsJfLKJANHrDFTN",
  "key10": "5S3ww9WuN8KvqYFGJaHKEq97knVFBgPgXyK7KegTzXHrcWnaKkwd6jGp6Jw1x3J4S3VMP6BNBSVFe7uMgtMbXNJC",
  "key11": "59cNtss7nSZtK9KDyzhELqkwStQMpeEcA3QjTAHq37bAoJpENGPJugBhGFmF57Y24HsjPuUdY9fcyR15tH4iYVyn",
  "key12": "5Lnuo98BiA8XwgdoZqPvjSGFWVyMfczaHNXRPY6FhE1a1ZSMbwauFNvg1zSmeU5yrUCaifEHT5ak6A5SswDj8f6v",
  "key13": "2167q1XJCzenZtCBJshE7VMLu6CsiLHSUiYFWS48tQJ6JrZ1oCNkUmtF9VoAKqTncpHmoZxAMTH3GZFoaaupaNZJ",
  "key14": "128vsnFkNRJirf1QY8X6kjm8hNHQAmZquVs4Li4QauuccVYaMoVuzaJd4Y2apQbZyHzWWQokiV2rsGfpiqxEDKzk",
  "key15": "4PfdBneKx61z13PhmTaM885jpS4CF5o3ArsXi7cRGbwWVQy59V873PVJpEBjVeXftctb9XHL2GQHAMMmusVtvdiS",
  "key16": "3xkF1WJW54ZH8ZzRzW1kDKXxq7m7ML7a3Q327Cr2HDJHnVSd67dT9XHrKDtMNcBs4gR7KJcoPqqfpb4uAj4h3n3B",
  "key17": "4TkWV1LvRFFnnqFoascnNNAs4WWvBCUaRtomzscrR1Jn6UmYUaW8gxn2uReaa2ozCgBeuGwZW9yvL1cDQsABnmgn",
  "key18": "57KvsrVmyyH6FjD5xYE88wRs1ymqNscnmUTm3o5PmVk9FR5Xj8MFRUgfAjvKx2KjWY3gyLDXq4qJom9spSyrdeRW",
  "key19": "2PSTNGd5oR3SoYg1EpkL9YFqrVTRT68zME9GV3jU7emsQBq4zRdXCC6BFdpbsTx47Czzov9FcPbY9WoVX3h1Af3W",
  "key20": "mvQ9dWbmf86WyV6uimtbVwgyzzoPXbDtCaBFQ9mZ9dvfuELous44yJHZVKqHxAsvfF93kAXfaLudQNhtuFcXEmo",
  "key21": "3koKKD1m1am1rpyG1VVCEWiDokoKbrz7amQgbZVnFQ7MAWoHePR2dT9GXShDvyrWtQumyYiJvwgTwwSaGZiczt2j",
  "key22": "5Fj4baW2hcWGbsbgGZizTrcFNJM2SucG6UxheL9hSzXwazQ2PCNdCtXmTECKShTmd6UrUjkebrUwyUbEBFP1GUW",
  "key23": "3C58T7vV1Uckm2v91upt5bvAPV83ZBy7Q2k1WCWeb8KNfo4uotAs9n3GQbXkV77BX3rwcW9v47t5fkwQ2iHBCMim",
  "key24": "3ufhuu1TnCARvCcFHtWJMG5PM5yCvGJJNkfYkNpzZPA58TJkeLCuqrd2BfYvfjdAbmoaVbmS1nwcCnucLz1YVC71",
  "key25": "3uw2Ay1jYsqEYUJn9cnoZkv3n5vZNJtB3uFwWAnJiRAB5ZR6Vtj1pFk7cEe66vs4etkqY4xytqaRQDymrRAuxmtt",
  "key26": "31DGUk1eXHktsYBpXALgN4X3uYScUqGoZTCSWzCfYntA9wjHGouMhz81XL5vCEoCBJVEdxgMdTA86tFYJeRi8Liu",
  "key27": "4HVBezVit6x9qEf8KLggaCbTBi17d9aV7cV4MMaF4Axf7cnmUn8hhyNrYU4mSzUBA9wdSJM6e4qzKPajBCeRvkAz",
  "key28": "2uRhggCMtV4qd7xHL3hLJBaCJQ6RKrS4NpUr8CKvcxr17NKtqgoRN1tykJW8eDhLbCwEa8e5nVuMX2yJvMwxP4YN",
  "key29": "3BBwDKBE9zAkqbBrKF9FAoDf7ghLe2zjQHzCRwQL8AZh1kvMgUXD3ZEEYhq7MNndzvKYAo8aLtkH9ucmhZAkb8XA",
  "key30": "5PpEJEPEGVK96u1ztuggJn6Kjvm3iK3FBpmHFW8xJZyztn7BdPsYxVCoa6cuxBVwqJZYsDGM9BQEjAskWVd2kToi",
  "key31": "2XUkTXGwRLQgvQVBRMe5WyipZdqXkLTTeLk1nT7xee2hxze2Sg4JJmnQFvNyErrJdXuKNfdhsxDNJSYWwVMAsnas",
  "key32": "3HFVTJy7cfreWvkE1kGZmDvJuxMts9L7gkC5iG8UZELgCJ4pmYBk6XvbBM2PJQNUYGHS6MyKRzXn6gZKeTz433GA",
  "key33": "5Cg4iTS4B2E5YQZZPEEbBFGzkUb9UdL4qpStRUY3UUN9WUd4roDkSmfSwQBqeVbQR3jxnQtDdawLMygTnNnuC8ty",
  "key34": "2L3yuFKvKbv3mCSSJ1rySt7Ux1LGgB9kiwDBSBJbzGwa6A4GLbYfnvbi1uBuLyUD4Kp1ZB7CM9fhYT32b9gAwLDN"
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
