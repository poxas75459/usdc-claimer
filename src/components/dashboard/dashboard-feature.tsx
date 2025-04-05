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
    "5DXP4zqVP1JSrNRzBtT3SU67Jk1hBPQihD28wDkPhN9m5ccRZWz7dFqfyErapUCM5BZRm66kivC2BHo2wVCT8qkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QhBCa7JRzLS9VawhNY6u2XE9ptsaGU2uiZdQK4kkh2p3xidk5xQRuxZyT1HXj1bAA9pCxTHLupnye8mXf2pz6Dx",
  "key1": "ymGbGpnZG34ivtYZrGh5CzZdyfzxqMiFkZFRg4oZG1P9qMnKyptpxX11JRLGT4ANT97oGFXz4nmHgutDtXRyCEz",
  "key2": "3tRoYZ4CePkK6ukhwtcnbJ2FoReFNoAkq6H6iNU9M4wyrpNrrahwJy3Bd2jYrutzhQPRtDubuyKg5mooq52vqfaW",
  "key3": "KQ3nkuCdY2s95EpXSkkRNNZ8V9dknywcKEft8aR9jn1QS38oyWcfX9BRSdYoJt3himpwowdTq7Qe4Z8gtKAKfcP",
  "key4": "3hQ29pCPpyrWa6spejM9UrCpkND2YASEgGo4wTfe66qqyKNxuNUo3gHh7tUC7sNwwLZubFUnrtTBq7iB24nHbrSs",
  "key5": "2zfV8ahsKC6wXh28zEZVuZgX4Jhju91TyjZ9AhRJSmjgBix2RW2Wz62cTQYtg6LfBi7i1gKyhLERzBmwkKrpsQVt",
  "key6": "25up2kmj3A3DZWfhGXqosQARAx35jJ26UjZNUSBtftik5tmCJaqKFnff3rvPoHSAU34RPXBGCSZfBduQFv5MM2D2",
  "key7": "5iQNTTW8G1uoPZjvvYgJuj4FAzZrePWi1CrXUW9i84om8L4DGySCAtCFGB6deU4i7xCNJsFbbTfEAWyANogPgErq",
  "key8": "41dsGvYAu2TDSGHHE4XMVgdkiwEA5dTHF8hioGBLiivzM9U2qRmCWrQ1go3cwZmUjtij7ByciTbDAdjgNArkQS8N",
  "key9": "5LsrX7HSzQYGxjmmhCbGvDfdMjKyNUSFvMZQN5pFgNaBUQ28pRL5BRGJHCCoELtKHxUKacigBeWuZKsJ8ef9b2tZ",
  "key10": "2WfM1aigsdHfcf9RQ9oQ25kisiYURXKK2oAN5HiDGnHn8VTX9encUhuho3U3tZFn6hNPFkheLYQoanCBkdKZM5tx",
  "key11": "4hs8C5XJUF4myn9b5ADtwL1BH2MiiwMf3hdkPoxQXAyrdM2bCginnmJFJuLc8KvQksJYWQpZMTW8DHhYF1QQQgRq",
  "key12": "3F3xLoKFMR5443PrKdR6FVaEp4MT7f23aXLtTHsvNymMPiZHdPwuZQrLTYrdf6j3JHNdSCHH99dc9CE1fKD3WF9k",
  "key13": "gKq4gNiGNc9brD3jecgRShnBayxfBwPmsyMwSDiLHn1WJLM2Py152rw3NZgL4pwgroWgSUVTgXtGtQzaKQqHKkq",
  "key14": "4d4YSHCDjphZXENsEGQqP9bmLmLtgcrB6SCevL2em3xBL1ggZpjLHFUFydbiy8QLQ5ZJ7HUa8n3GBa2q7tvLyXQg",
  "key15": "Zn5RU98kyj3AB5dtXb1JKvUBrmKz6rB22PACnSkhBJthxszGbSgVsJEYNqRSAKb4ABbDNTcv3njY1g85626FVN8",
  "key16": "QAe3PqfuZ84EfkiDsdTwYYNScbk9eqtoBCgEV1wNpfagT3BdUBjc7TmCCbdD3FBTiM5bZVKqB9dYqPoSpAXG7cg",
  "key17": "RMFAvkmmufcEh7Ck47zVknBwYXUpJ7Mtx3wEEKqjxdMwx5ALs8fsx9D38VH4mxb8fSxCqtjFQo6LHGWddRAjXBf",
  "key18": "377cpxWReFNN868X4GFJjABDvhXNEqvgxZ2LdCNopKDegS3B6b8Hv3BdXuNLk7NgT6xtmJwJLMun8hncS7TfuDgc",
  "key19": "5JcdbwWfidADW5dRc19eAXLTgXRwQAYwnnupvV5rem1ckFmo8Uw5BLPoJK41uxA2QKkK7z8j3FyeqYVFFprEUek5",
  "key20": "3yZQ9wPNVaBHmEZ6bB6K9EseYpvxMXApZLuD5UndWkFyERFNm59kJoWFEcqroSZwKLoMb9RCV2TD6mktGwYuo562",
  "key21": "2GgBCcGd5Rxzv75mSs6SBSxd8UQxpVEokE89C6bGCNo5NfwyHeqNeM4NLbwQmWQQHZXJUEcuvD1iaQKB7UhxXcGL",
  "key22": "26auofDT5rNBQYP3uV1M3fRXfEQLNQ62LtxpgPSubcJSDTMqU1axUQC6iuRQJtAADcTJakkBaBfBdV1gqMqDEdPs",
  "key23": "JgquLbjSTFunhCjZRCMbDYcxPfYJDCYKUJGWF62UYHGmoo1XWrZoh19Y2AKnKk1kvZd3u4ZXDWUyTYrBDJVvrmf",
  "key24": "5hvTNnViV3Gd9DgxZGGn4KLsHtiKRLfDiqzaL5sg7EEk5RSjMUFuH7PcWzKHTPeqL2oGijyxWFWo5BSs4DhSe79c",
  "key25": "3GVwyMVUaMazsUoWfXkEzU3u2cudjRjEgSWJfx9Qth21QgQHaq87R32vEAyhXWEvcsaJSTPMTEn4MaWFcnH9Rmdg",
  "key26": "4kvBwifPzvYA7kwA7dCBS6VAcK3GnepSfsizZKEPgavP2yq3poBZvQKCHRj6EfL5r6UdEbCgWvJywL3ZqkTgJPkE",
  "key27": "31aKDQmHvQbNipjQuBqs6LgwyiPzP9e5EUWdyJu3YkyRe4ABMZ9wxYxchXTNgU7YajmYehvq44QWaS2xrMAPnNvh",
  "key28": "5iBhamXSRij8VPJeh1fT3p7CWdx1QEHBBSYoCGDa5RnUtN2K4B3u8xMvTjdvfVqX74gG1zhLW3V5DuG6uHzQGdaD",
  "key29": "AmwSjyjasrHFKoyTNKacvVnRdXZf3BDRgq9ZktwTs8e4onydZQuFERuR38S8yEkyp3XjjazXNvMVnP85VuHRqaC",
  "key30": "12664SpJpwrxey4wbQoBNfV78QYzBMs2dQ4RKxnTFSBpB6SuCfr2uupLiizHTVLjTwUoJusKfC5Za4qmpzxyyao7",
  "key31": "2vbqMcRLQaHNwrYDy94S4uh7yeypm3QcjjZxue6gY5WqYtkZ2McLn6u78nLH3bL1JPUfUfpVhZCWxJ3TMGe1vRYh",
  "key32": "2gXcbfukqrmrejzZv6154MRXQiTPsCmteTbyHXii4nvFbpiMtJdvEfXpMHVBvuUPo3P8BsvpsX4aZLvBUWa6uUAB",
  "key33": "5GCKoBcNVqN8aSqMRcjRM7a3B6F6j4BAwJf2KDifEGc4iZQg65AiVp6MbmztYL6yLmiGZ5SJBRYuMEUyRARDbAPP",
  "key34": "4wUgLCZDM8yacP5VE2fRQfJ128MoNdkiGNpWRSDgjLmcBfW5qXBuCQLdxKFxU497nzFF5ceMTmHx6CUUcW9YK49J",
  "key35": "3MGPEEciuKLanLP83KPwMoi9bxokxmFZiBvvnCA3AtUuuruzuFR8p9UQuDdeW3H4kDttXBUX7gcK64gFVqUuAxoc"
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
