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
    "2uFD9mPCitrnhUfM9o5oEmMTfCcJi1ZxNtNv1GwhFLXp58WDFsSaUeo9Ua8ur7r993j1vcwCiLnYELXJd7KDYaZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qqu1dc2y4FTFqVF24rZyeabkp11CuRbB5BHYU8obwgEnttQnEMxR8H51dMhNPkuG37XZEukZ2NsLeeM1xcT7H4w",
  "key1": "2Xuoi9kwWnbjznJdHevtLNVtLavxtjMwNggY4WDT2TPoHnNgGghCsAgnBNPEsbp34VBJ14bLdUsHxAUtVwgkZESy",
  "key2": "3ZeGyy3WLELGWMTEANiWLnUE4idunHtkxr5kX5PT8jakjkHbx6hoEFNGGEisro3FXiM54mi5he8RyKUYiRyyNA3d",
  "key3": "4ReTcTfY7epmVLNecWP64hk4ivBkw47YyUBorYEEjzSQBeBJwVfgi3YuLZWHFcQBi3oEvAEsstkkh984Cj5Th7N1",
  "key4": "2jaDActigLFbgwkEXH8YDLCDomgoNv4iwTbT7wdV87bDTpB8eEgXkbYxupnZagsvAAFxoPSjhPkFyeq6NziSGizB",
  "key5": "3nNtagEiXRHsC6RFt41VahCKRMJYS7y2czw2P9EDzsjwWSHX7PKrMP7BdYjH2P4W4u73KfvKLtWxzyXCmLoBBEa8",
  "key6": "pZhxCfguBRvj7TPAu9Tnb95XHupxhxDnd26EzHnETbWXouEeeKvfHZUBvcpEy88kWZM3FY9RyfznXJGtjG6gGwb",
  "key7": "2unrnUhqcym4MxU2mJkuPouuR6ZjT4N2Sfihpe1VJ69JZYYTCBza2forgedhwCkCAMAh7XqTherpMEY48PsHxyFi",
  "key8": "4MGrUUC7rXRy9Xr4y4zRtkL4oMZ6UauxdU46PBsrzNf2UbVTN5irRt223F8kFEppaYPXiJ6vkY9vkQcx9jwNDKKC",
  "key9": "53oXuk7qHwNqXj71gbSEiPCafWwEK1K4S1WHzmy1BVjmF9h5YL2TWvvCJheooSEeXsrqaiFTRbyF8usCdcM7wp1R",
  "key10": "2kERLRgYNbBUK4NGtdzbNZNiniA2P4qGTxg72MwLmU82ejF8doQVGL98mgHz419Dgd98hghXJRWXBUtDEpQdbk5W",
  "key11": "1mVJkgtUPbLJFWdHGnpWJReJCvBRduiPmFpCMLkzuwiRqj7KcSDmLNp9F7TwTB2YSzaX6p4sHXq3UtcCUURjyuM",
  "key12": "Y4752K6aFwTH8RXQXYVMwMz1bZxZHeWoUeDP4uN6SJbUYWsW14nFaE4ERyiz8RSneZekcRt5Rrz2j6zEeB83nhf",
  "key13": "2HMCTuFqBxUu48UVHJ8qYj3zz2tZ2Trg55xD3jrdXGmgzyrYJSp7HXLGG1EZ2H42PPZvF8ruzunhNPLLaG8n1hrx",
  "key14": "2exgJcDaBHorhsBvthF5gGfdJUMyraTSFsQxX1BUbs4chUg3cjfVErKWRNDZX16ry6VQpir6mCvTbAyRTTfvc7ym",
  "key15": "2TzaH4F9jnLuB8rQyUoJP1cnCG89hWQSyxL1TecRSgrTg1CHV8bpMWrb6JFXkR8PBBs4K5CUCNTzT9ibVpr3Uhiz",
  "key16": "4fcpk3zHYgdWewysYDXgpwHNy28zjMbiC6bZDzvn7TfQxbBkUCeBPt2inQdSyZuATb7a68GYnsz47JCZQcmdKRP3",
  "key17": "5uiUDSwV7Z2cqL8UugM9MSPKsbUiADfGKwozVh6g54fSLEkrk3T6tbdT3bypx3isiXC6SUE9uhdMtSwPnukccNMJ",
  "key18": "ybKXtin2g6wTsrVAeNUUjHAH3xSQdzTKP7nnjuWQWsQq6uaVT4kh6mzT78mnU7uxp7gnm2iTzzCfwkJCDhsw9x6",
  "key19": "MtM7KfJPYNGiCkExwoo3di5Rh1Y2b3gkhF5NYiYXocUs9u2TEgCR8ZbUP9mkyQQJgTWZoHoXjHzo3kbYVq5itkS",
  "key20": "4uvFTSmoVwH2SGCxMUFfifVKeyixfqHLR1vBbvuc1krydK9DAABAmmT2pvtVhffVucLuF3MHu9Qbx6XTmFtZ4Mtm",
  "key21": "5AD9Zf7MYQg8eeKdmnvkGRqL4UfsZ5FBWuAJvKgHqvJH8EcubfWxTbdikjVSesMpKcNxHY4hApsB5dPBrkBvuZog",
  "key22": "53UTZQeSXsQYAzWSjohyVsjHjgF1viuyNpN83TSxDS438bf6jePBsngDLsSPJ8iZYh2CbJzfRaupStRQjy7ZAWFy",
  "key23": "4W6hro3RLGBzFvTHkgp6ZkAS2dzovn35QoyNeZ6FrqkQp9vy5HmcjJuDYMoNE1wjkUUXtAzQuqf1mczpU2UToPSD",
  "key24": "4RLXQNKtuCq7mWKEVyLqubFPhAhXngNR13FuPQ8ytsskWt8VcBP3GaqW6NJMRH7Pq3f8GwBRmEwNqBmjezQjseas",
  "key25": "53sAnmWwY2ZLkbfUd2J9yrp4u3bRQ88o4fyYLZ4LZgGErsYyZijmkFCxpjZEXpQMqGfZd9HBzYAh6h9JVXdJ5aSC",
  "key26": "4k97jN1eDzsbS85amaBp1AthiCeZNr4HEaLWddQXEFUN9Bd77T6j9GQvECwAKKbj6qGW942TNbR6stXGUU93XMru",
  "key27": "3GNhuTjB2FRuCkbPwrefS47EUdZgouc82bm662QEerYA1jmrA5MduQ3bu2ZHS3qfL7ABDNhkpQPqedu8n5tCH4VR",
  "key28": "2YM9L3eUbsp2xkiTBzxSEPFvHuvTvo1ywCzN2ymaDyitrybi3FpV8cqt2m1iKrnGfNv7XVpJdbZuTPRm9TVKAMxt",
  "key29": "D13CJe4F5CiFiwwiXTPAT65V7RWPnTdWPPDxkcmDBDVuYtZGZJ97qDzWHyN7fB15uiUPRiAogbHZJpMADXVstDa",
  "key30": "3EMmvATyRpMEabC6xqiG3HaSmL1uft61iiyVeAM9wv4hyhTCJNWENmf3w5yKwpX4XyjxEKTCFZzPZEmvUTTCZ1EV",
  "key31": "4PgqdA78rKhaHQERr3a8eyrmqs1Lu86gGwzACJ65L7Rx1Gs7DZ9SwnXD8R8reHEaRsiZokrUGbAC7zHRouftD8J7",
  "key32": "31qYLc6c6ecQerGdGXjCCcVStzD4UdEnrNgQ7F6d2yszuP5HXKAuQLdctreH4GBTVKgFWB1Ey4gDPb4GEBuPCmBR",
  "key33": "54pYZjJe7bCjz43R9vtBCSBvhkPSbwtbhseL5UvfiFD8z8q4TS1N8681SfaJjn5UjArcX544iFrqwsYbE9YbPAPJ",
  "key34": "2zQm9xSPjKkvRxZzFZoqTqxoq9MGA32MY75UpTZu5xn9oqVpFZgyainQXi11wZuZL3xSMr524wwE3WuusTHarDox",
  "key35": "AfbozTNKJsxL7V2rEnDPFQuubXme3KFY3TUEUcKtgLULRRYASSryWSWykNZNnC8Ay2jhVCxJdP4cow4peSXy218",
  "key36": "2whwmWjfTxkpVwYrEfG2BsToKspyAag7pJaY5B1CErPqpUiKhX1EQXGDmbSm1dMS4KbzC95XKDDAfEqvjfLyb43L",
  "key37": "5YCj2X7b4rQZYioLwaM1MwTyELssrG3ynCwqyc2WsyCW3UgbL2BhqEJerpN3XxRYc7ovrDCjFBbYCFmRoWwKvEBx",
  "key38": "2gKQLFcF9fRmiCm7oNGA98iq5YUgX57xx3AydWSaVCUFJFzkD7RdgA79rKJsYrPR1wKpmTwyU5ps61DT64aP7aHd"
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
