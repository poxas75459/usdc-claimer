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
    "3kvoyNivLX6G2GCtSySiUckZCinQaq27EfmVPoNSf57S3qGRxT1V8zQfncsXWYuyZTiL61kQWk5b7fsu6TB2H92P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aJDS5g14FV54kcYz5xwwPEN7teeAx9YRHTS23uxhbyiTYZrruceendJmirUbS8SYzMmbQXfTVcUuHPxrohYb1SX",
  "key1": "42V2Dz49gpg87AYMx9NtjJcrnDoK6FnAegwJLHSxDN7jqHnXXhmbRmrhqWeQVzv9mcQegz4AxDX7zpeCsjUDLo2s",
  "key2": "3gXfyBNYF1hHhspjdXbiKL15pwfbjDrr4fEDvkZMDppUWXiQShwbvpBRNhfUQHRp9uQi5uzEZfsEF5jY1PmE4bZQ",
  "key3": "539k9xySmDxLDxTuEaZPrGtdxTCjZaoDeqpkRFbbeDu9d9ecDbwMaou5ABfFvAdCLKC7aJ3aXRuCdHTBWLZ3dUX5",
  "key4": "srnFKMopUbrtAEKkvT11E69KXE5mgodorVmbCWKmwkjdrJHUqEkX6Z8DUYpufcuinbhL2rH1QbY8tF8RqetWqD1",
  "key5": "aVbDoyvM345jmKPjzk6AxPKxRL2SAUTWrFqpEEs6rb1kHyMWZJS15L45yKSJ56ggjBzb2KocCSo3uU4f36C93d3",
  "key6": "2AbptBdQjsH9PJ1DRmLMMneobW9HuvUE1kvRDKHktW9BGp8gu8Nfj24qJYfpMf7C4xDERaBWt34yKLNbZYNetACw",
  "key7": "5U3qBLu7wrNcxg585YpxeMhmVTrN3BmcdJid2Wmx4wLBZxG9zzzaQkpMvGQBjKkCENpg9XbcSzyu338a5bqHdKev",
  "key8": "5sQuS1K6bVGMeGwt836AZrs11m4uB7ZtWFbUNLSw4Eo81cjTHsv8GsdLJ8aF7LNHXthXx7ajJs4JvWMnpr4xatc4",
  "key9": "3Ja6RLpmy3piLXJmepJZV8HxFKNiDUGgykJafWk1ZiYf16oYiVphoxbeaWLQqg1hymwdRdqxarYeGLRn2tSBG8SY",
  "key10": "2LzTCYbLFxMW2mcNYzCvqu2p2pWgYQnJ1McuiS9XxTTbbngjnneB31TJnKZsXZZmkiZQ5Sd56hjRsgrRjTkhq4WZ",
  "key11": "5BjBWwxfvBbWgqTiW2pesBjM94jzTbS9wqeafBXXYBVV9h4tbK9QDu8GyXSfApKM6dfyE1he1XEBZe31Ede2akCT",
  "key12": "4zAm9j2uJ38DN1GpGhSnRdLrgAhsUbeuqC2uHFv2n8kP15VDks5FcowjTuTHHWjZZVcm2EMdra9UvCM44ewi8NiE",
  "key13": "4Frrx6Uj4V7kFLLoXX8gay5gU7pyKvU1mHrWpdpN9SAXST9jzxWQM1oTxYBd41X632KHtggaxSo2aa3DARLu7iSn",
  "key14": "XXPh33dFDR75mmz6y5YYWYWJS7PfipwTvyCnaaxgumYPJiGHxVEuEoLRwGHu1DbmU5jDRhohjjUPwwzLwYsJBNu",
  "key15": "22ghaa9GUpK3VtBuPewRRov35YeLfaiBXvJxESDi473hiSQ3EsgCk68rfPz1Cu5bhe38RmPadp83a1bugYLw9Zbt",
  "key16": "2WCya1tY92uVYVZHoybCTpRqXWr3gHXqEjiMbD63ETda9hM9dtxrU9FtmkssVYGxpkW64D5PPaYj91C2HdXTBkS6",
  "key17": "4U23uEheuTRg7ME9nj51reRm69PyFiLuAsfBTaxyPXwxYXfFMUcUnLomuJrW1YmyEoQUxukUdbk7qr1mDjxqvKHM",
  "key18": "jWKi27LvJ2gibTg8jTz9RBb2TxiYdwSLE7u2wd32HSAXrr1AYvB2tcNiCsKTZPoR7uSzoxoFKGx4cR7L23jkAE3",
  "key19": "5rvX1PVVxGkCXoELxxLQxe3qQTxDW6RhMsCNbUY7dLpzxKzFHgLGDZJuTkbFSBtztAqVCj8JdwRgwyCfXGsDPXfd",
  "key20": "2wUKbzy6qd38Zx11v7z6wen9R14Damn8tVJbQ4h3D8nhxUz1YAqr59kzed9KT3knrwjhUr36mv8NbScQjZgatzGJ",
  "key21": "bqaX1PkboRjo2Z9FCGDXb7EaJoqdovqKSiPfHbGRRQk6MYKPaTxLckBpPVnCjg2KqcCVXBjuXEUhMRgCqsM7rxw",
  "key22": "4A23ntVY3h9aHyKKexQdjsUDiyrgJV7FPJ8tgwHmZvJekCFhYocHmqDvBs2n8PPKVstyTDYgLmAWNcHFYGhJF8HH",
  "key23": "4iHov3RsFsWPZ82sYBdxn8M18SfXzdQzJkmLrxzEJknQ38EcnqbXVNeVvUejAtCrFEboyXchyusmofbPkkpKnwYM",
  "key24": "3vbbfsFmomzFpk2vXtmigRRRHNGAho2UKYgy9XHcx93PtRzGPYAmGZRF44fdjPfuBwZTkLCXYjFe38Wqv6GeHFKh",
  "key25": "2JReKdiTGTGcEWFromAWcN3sDW4v1DkDPouZ2U3DB2xA6372w4mdzchVf8oeomeN2bq1zvVZeMVTzuysZfFXv4tX",
  "key26": "2iEqbeUZ82gXF19dH1urPXaPhGFLrjYungUczB35RyJiCk6LSjuMpqcjzunUwMbaPkwTnZdjHTTbXro4Ar4UocKs",
  "key27": "5rxzvrNBLFBxkCaV1bfvZ1MGudUxatPLack72GNJ7uu1Mn5Eg5PosbP69YRhv9DVLVNXGWixqesmPXHvLx79GXWN",
  "key28": "4VY4t7S9f6AXvK1ePYUJa6K278JqMgm9seQthYUD56wffnAGHZvekGWiz1pdjRiv8aUMQgR2JpqbiWTVCS2dWz3",
  "key29": "5gHV9DuWf7hfv2qGeknVkc2MroXs94zEG6GJkpfVLFtf3aoFkfykfZ7tfPJqvwgjfHh2Cs9nSHZfDYuunnFSwoyj",
  "key30": "b6cGDPnky7Ns1jWnrxe1y9HdgWDK6DGWjr4jpCth8RsHu4BZ2r78iVouNpzzgfaMxqAcWCqZ2nV75HZt1eBKeAw",
  "key31": "4AkdRpKNcCuWSdsRgmiFJSjLjoAi3sFJkwPsCjpMS1iipX1WbcwhHVjfxUFWGyHxkYfJKZmHXFcjeZ3kE9BnNcnk",
  "key32": "475tGTGtuKYCcnFfaYuEgjvNmLBRUbxdgLCRoUJSArDnheXtNqgE2oF34KHKeU6bioBkWXrXZZLHBqaWjZjvARs",
  "key33": "4Js6H1LZcVGqJHzuCuR785J5XfM3h9m9sGh69StSDxXJhZnTdmw7jYXpXV6uB4oQ2HtirsreCNCE4mQVtPZGChcN",
  "key34": "5a4b1vRYmViYqW3WqPQ5eTdFJvtGewPpFpzSADVZc5a9dV5nPZd3PiD2dDY8pLezho3BTt1ct8NUtE7ztoGURovE",
  "key35": "5b4S1dhR3YF9FDs5GJYsjDTu4iPmZyX9wkdDugqXoQZhVu2oSiDtTNy12SaKb4ShEoVHj9f6jFYK2hF9K7ZQx87f",
  "key36": "3GgZjuR5vzDaizMJvP8AQuvzyXjb5bQsneWNB7t15SPc1aCpxsfHSiKtZCpxvNbisRfg9ri281EwzLzJfsXMHr7q"
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
