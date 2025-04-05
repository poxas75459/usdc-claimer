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
    "3bqo8Wtuu73NpiS3t8fpbso21sDiAXS3adEHjkSD7V92jh8ctsrvsJK9tbfMaW4VKm2yMmEaNMHGpb8AdpdszATS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655hK66AWma9uv1kMukq2gWEyy56ZbMazr7m4xcd7ekrBJdmHsCVkUHmJYArrZ9LAA6GzZynzxfrcVbpBwtfkKJE",
  "key1": "3eHZ2DsnQv5gi7AtJocghLWng4s4kzido1skZdAiVAuBvZYMD3WnAzuFtSvwYXPLZMBPHxgtyUH7nKSjUVnQgHg",
  "key2": "2Tb2TP9N4XE1fTdRFRRgpiXLQchQ8X5T7rRcAwYVaTpcYjG7gdqMKQGUJbbAGMvHVLgWeVPPyHLXrPWQPtuQrRt2",
  "key3": "32BoXeYgLKHpCQVQGPZKnrHRDgh6kF4irCKs4GjXzZb1XBkfyukTaJ16pYgmhTmbq66xq4snTXDh2CrcYx4vNmnU",
  "key4": "571zosZLA3RSQonKepT2FYrNSExta9pva336NSPjJKXQkBvU8TUybEs6HGSEDcWg4XD8Mn6eYQpsSptN6rjS6JpM",
  "key5": "584pdUoHuAGU3Tu9uo5G8Ko9XQUyVxn1YcKGzpKhWFTjVHvn5sRZ2BCE7SqquD9n8aLRPpMH8LiAyZneBXbeK2fR",
  "key6": "4Rasr62f9C7erCHnn7qRcS7HkSjn68wAjnKNdMJsgMPxtgCQbbDyqCvk1vj5pvUPkD6syoC3rcnmYhGG9snfSRhe",
  "key7": "5VyLabQzpmdy64xCwW7Yv2rjTDWqki16wfmRjyqQ17GaAB64BtV3EEacDT6HqKMRbPe9fk6hCAuDjbXTd2Kb4AMW",
  "key8": "3zDiEbtUmfBfGR1F9qmR6eZFbcEjqfgAJxuEbagRzRxiUC8hhmymViYyzME6BoKUa59MDdpgoU5mvUfEuKukX6K8",
  "key9": "2yExb1dAz5kizgpJXb5JALBnznmPFTnHEyYEJmdHcVP7Uit7pvvdwobb5shLYp3ByJ44BaugLytVkrbenNYukhLW",
  "key10": "UdZjsig6GDjD7v4T8G2aUHkVtZFnMCq28hf9i7AMNkZ6SGdhrxZgRn6KDCeFkUmoZU3oPcZd8irehp8fmEYLC1G",
  "key11": "U7gFJxTf8Q3sdiWqcHpzWE9mryc3e5X95PuYbfeWKQe6nx1Py8SKNCs3RBhwvrKPAaGhtR4njPGbirHYVpXERJt",
  "key12": "2LiRwxwKPWoB8UeQGCUar2bKVpZ6CGmwfH7KFkoKa8WxsguF7bVVjCpqmrQkfa1TVyYUBWUNQ8pBuFirGHTXkdbC",
  "key13": "4v3EyGtRf1kqS2QEv6QRFZqhdGC4Jty5mT962kU4fY1unrDDoZf9Ht8GpCyvMkoRzscTJaFVC5fnfDqivHS2hvaL",
  "key14": "3Q1jHRFQVSj3eP6seMbWpk7wwTF99w21TUJRYih6rXqg8xyUg6J8UvLsAw9XUJWNRyLjoH9WSSPuPgx9R5F2jW3Z",
  "key15": "29YN6kFoBzgWqKXA9M6S4xb94CkZQvpdzYnzFXbrMxWf21JhFhSpvd1xBdyQfTQQW8Myjga2GL5PnwPm2oykAmLv",
  "key16": "5MJ4BmvLweamgGcagia67C95BPZNEbzrpSMu8UdRtzFZPRHZ8z9mtvz3GGcj2H3FRZQHu26fiYQsjBAnd21PrHeF",
  "key17": "2BfYWAZj27cKSfBHvLnw9sd6W2pF3UgqYX5KkR2oZPJFPL73VHjQMeKu2wfCr5vm5gCVERLQLUcT2uXz8j785Nyx",
  "key18": "4JUZBjuLX29pYQL9QRXNe2GqkjUXTBRCV8h52jpYxk7SPY9GtZfUrLLpziBqW6hKBrpTzeHvioWVvpxEXtFCBtKZ",
  "key19": "2KQu8ZaruMWgnbLkzmWU53S1x45ZhKkZrFRXtTwCcmHWd9JRK5W1123nuZNP9kRqGuPXdGAyMHGFaS8Rp4yvFvN7",
  "key20": "51kWMayJycJwa9W4hYUiuwp2m2odP86nQE1jQ678Vj99JY6TnKnRvUAE8cdHUzdqwH9zSzNjLcuKism8JzZZKZpn",
  "key21": "5GtYwT928BTE9Yy1d7Byu8LtnT7YpfPzsS852jYaJtzd1spudZq8gf1hS24EbgC84NrvkqAx1uX3xBzsk56nM4ng",
  "key22": "3F3QFAcd53z8yo56azKMQ87c9A2MbCZUb2msMWwNCxZvdPU7MGJMNgEMXzEoXiA8jAbsKjnvuQaGyUDRDfp21Y5n",
  "key23": "4kAYdn2AtG4oxt9k89n5ErX7CDrv2MaBc2su4anPAzockyRj4JYrcbdPzEjzYPcUYUnWqsj1bxDN5v8J9DtUDpsn",
  "key24": "2Z7rTv8cZocpUmVAXb7Vhw8667ohvMGyQfF5xByXvBkkf5yHPgt2ux3MEXtd7Xj4qUc5NjFz1QMbEHfnX5J7Y6FL",
  "key25": "2vjxmqdxRu2wrL7pcXg47Xm6pyy2BqNj8ZeFLwWQpk3W2N2WQZ1Rgk1LUrZfawrauYNqLbX92t9BGsgU58qZWM4S",
  "key26": "3v5KBBBXVzVxW6CgQ4sQHzWNRjSq3nk68LS8VVWYHQzSA6ArijcG5gkn4RccxSBeqek5n2xs5HgteMFapyvpVsof",
  "key27": "25hjMx2UwPKUAipFScYQHNzK9qv8REzDdxEmk4WwFF5mYudrGP1sjuAcRAEGzsQzWQh7Vi5KR1h1zHo9va4g5q5u",
  "key28": "4gwYtYgi2B2jF2mBRwKUptSUz4LcsshvsEcNsjVLxhC7981nTzpkdpec8mbUmmJ8BXTwwvfjEUGYh398LcSUWNe5",
  "key29": "5SGWrgxC767fup6KXXRjFdPooicBzs5ztiJemsvJdpXWXSokxtGMo58kNDFjt1WWraiP5rXNrE1ijknqjfGN1iAh",
  "key30": "8CR7nd7E4p8vQP1cvTCzAhjkk4UdNaBoNSkLioSy6Tozjg9zugVnjvaDyvQe6xzVxyAYoBHLBmbzgZYBaRDLbxk",
  "key31": "2oaHG1faAE3nrF61s8EbpxzQKTRLNREabr6LFQcirYZttnyP1qTjZhqSrs8dxJBsMJxNGDjrcZdC3j9MXCk58aSW",
  "key32": "2WAkwTpJYjZGy1YxsvN73J8sNrveSURF8dg6sRsS4bJZpPVFJgLWUaYFR7sh1u7vnAXSs9dsGotL9PEWQArVxXcB",
  "key33": "23uyATTC2mKtfJPgBEo62gHTVffEehmstexzVY7PJ3yCsqdZMq92HCWkXa71eiHXu48kEGsJRE1CTfARF8rXWVoa",
  "key34": "5698Tbq32mQA2B3shnrNuEFUXoRp8vJb9cJqwqzPFHBSVVpHdY6LgtVxiVMZGP6eCaGP66ifC6zf6pMnEztvfn1N"
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
