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
    "5rdgS3wm9rrxLsL8BL6WXhTnRrGdZotpjduK81mJdNiWm2BLQSoHwWrC9NJ8ybTRPwk72W8Eg2keJMAVUkmXuTzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41HnQ811HnhrL8kreqvvSJnPYJNkPDnQ4S8etq3wSLTTXgC31rUAzdXkXniVGpLvb8DJAg2s7CRnLrAUU5V5zCPG",
  "key1": "5mRzoj7ogNjYRUVFJYgm2n8KRrv5bRDFYwseoPgzLFoY8ESzWkvM8YRnL1nYHNMNwuq2JggRH9zfsLucvcUyuktq",
  "key2": "22xvs8ZqQgT8cARZpDcZ91Nv2B4zD8jvTWtoos1Bu7bBg7kULBcRh5GAFGac3VggfN3WCBg3odh3xhbKqeQkfKFW",
  "key3": "4weQieoLiQFuUSngT1UEFmbY7cccKMdFSkMnGkVnwo2kREhrjsYPPSb4Qp37hQjWLfT5FW39ZhkbtYvCscQAJ3ci",
  "key4": "4Su2axrtZiPKjEd5TjYp1uz7tX1bvEvyCkNxHuRVucxztrZKfi8PdqnQ3BMJWTGUJBk1oKfnNJQdrmkujhDRP6tu",
  "key5": "5So76vFV4RKfbDtxdJy9x5PuX4zsgtK4pZZmYBfmVqKFHUGRFHiNs5qELGpkTYXBD67wHpjWPgRJziwU7LKhesKj",
  "key6": "4T7JxAd88hnjR7TjbP8okXha6JQ4TWXD9fmZdamzjWiUXU2jv3zcKMXdVsoB9sbT9Qxtehu5mjoyhKHEA2jnjcmD",
  "key7": "4CNLGy9ojT1Lmjo7gasvAAw5a4XuHnWt8drrVrx19TWKSPw9FS1PHjVsmFATaESWoLV8PzKsRyr9CfkFyan1ooo3",
  "key8": "56jdG84QzFu3vKUDBkxHdw8dezRpE2yUYmHqS46CjZJSKTLGWVCjTfu3fyViZjhiTCUjnpw4rLn9R9zbSjNiepA4",
  "key9": "4t3TESxeUkFFnCCjBMDkKV7WUcFFmrWZQhU8BCURu1PpqvhYC2MxhLhZebZFFntc2UUso8Eu6mK5sB4MfjgA519t",
  "key10": "ZtWdJ2KZMRAtrKGq4MNg2tz5ptx33hJFxhSW4bAdWV9EYjukUpHuRzP1uCDUhDaBKYAC3ZXpgjTu717AoyGhw5a",
  "key11": "5N23dA4H9B3DNsanuXTyw848TDDnuoYqmq5d3hCyZs8diGN3KBcWd9rCDQvz6ev6eBWCXVCT8PzSacZhrtgt7PYb",
  "key12": "hr55tnERxvoG56WBqMzTdKSfcTeoKKzjGkK7E2muPtUdcSzMjQbEbJt2Tu2ABWzR5fw6DvDzDwqacZsb8zL9uvH",
  "key13": "4EwX3sLRxM2sFGspJhX4KiHGuSsZEvhqcFnoEYVrwdpNss7dHtZGgMw947xQAf123pTy7bH5DWsz2gZAL3Ct5ETD",
  "key14": "5aiCH9dgqA53ipyrMbkWggKoRoAUgAF43kACq2H4Vnyf5D91o9JbPa1t2pghTGjsZkPt8FC8AKfEWjcWqgKyPTwd",
  "key15": "3x6PYfCxF5P5RJ71Qr5GJ8cFqyBETVY1NBoC9T4oB3exbBXUD9C4zcX7u7HRTZRZa8j7Ad7iFoMFsJNV3YkM3VaE",
  "key16": "34NYnadkDfi3xbg34BkHTv6SSErYyzp3yKbjhDvSAQhxDxMQfntcfS4YjPuZwYpcb32Jafd9jcfpRLGPWcevkWpK",
  "key17": "44PVieDRVq5UzUcZ3V68ytVGdGdAMbkBecbwUQHMYTdbWifdKLhqvXNJsiKS5z8RZZbKNmwzgH8n5yy8GCpy8zNK",
  "key18": "2evo2HUrfgzCy2AyY9myR37jbqMTxwNkQjm2LGAvxBn4e1jD6kQHsmPbP7Ss58VHvgxwtqNEox2riEKsfSswrCuW",
  "key19": "65sGp5S7D6zJdvp7wDJBa9YK2uU9ikKdwDWjyJBHXFM97vJ7CSxtuaXgzJk4wpCf1cUre289J16kXZetVPWmM9ku",
  "key20": "ka4RTrSMrU3TEisjFZokPctkB9ykt2UEJJD3889DYB24HKpNtWPREvQH81VUs8tVQGYVTRhuHM5nb8mKE9ZPzum",
  "key21": "5eGMsN6ougp4xXfwcxfiX9epE6KA23gy6DE6NgbQnAhxQdTgfSDtFfYvYncayT7BHc7vqwFxH5qHzvdPhzPLoJPK",
  "key22": "5kFmAq1eDuP6rj9KT6j7vEVcJWV9EbXQeP5eShtN4JWTV2faoHrqUzDX78fSxioX2F4cLtqxHwgwX8zCyfnrrUco",
  "key23": "3R4h5izegUGJKCtRxQdAhtB3JTxCDaeiKBg2EwuDnD3EWRbXSu2LLQqk8nEv7mDc3jAhGx7AySAbFLLvRZHEC91J",
  "key24": "2daEwvjxFgcex3CURUhZR1QxvKjKQHxYHFZM4ThWeSY75K41Q4CDWzuzpwT4WNmKxHH5wjvLatwPHSnnwP7yuh7Z",
  "key25": "5VDna4c8Z4HCQqBbWJpDg1A4LSeDCeGyus6vYv7ciDRKeMCbmWSdiNTbyEP3qgsgQvNB2DTQBRx4ajVfgYrdYphC",
  "key26": "4VnXNvqNDprHnxJk9H7Fhh2fbrcmao586EVF7s21QQucUPxdij7fmkqBR6VpVcNniE1ZScRQdqYN2gwgQBEdXamp",
  "key27": "5Cs38ETuoUmh66FQtSqKDi8rTjELxHbnU1Tn5NCAKDyS89LEZUKUP9m5vC6o9rCe3xvjxapiMn33H6fqTWqoQAyo",
  "key28": "5CMTygjweyEgGwmURVyXQksSMEzRNiUanvBrdoAtkaCYUXPWgULwGxZd1LQoP85vpn9PUtnycS5vK8k86LkCaeV6",
  "key29": "xDSXza12c2qK5Lg886Q2s4T6Kcd6or3Dq44QjQJmLXeHK4EY22VLJadEnjF3CettuYKdQ6pAEyhRNxjwXvMADUa",
  "key30": "4UV9QSoNfcao5y7u4dp2kLSBh1xrv7tu3gyYDjZoBT7efBNMDghJY22qMGxUyt2zwwG8cAVUZTTxD3CTQjpFYieE",
  "key31": "FET8UkmbrtmZ8NfP2DdTardEqjK2WPDnAt5n7BGiPL5hkXhwGxzLz4Rco8hxpdpdAHUHR8yH3rA9XcA27yyFcTn"
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
