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
    "3QDpoQs3Z9UrCYQvy8DCk8kxJcy9mDTs75PxnCjoroEFvSCHz9KDssS97uESz3voQiY6shw2GJjSunCXoekprRmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D7TrMuw9YJh7YksC5vVCCCWKg7Xrv6tCEkr3PctwJt9vRhgB9XZuR7UCc3SsDYtEHEBFcwmpFamfoT1noxPQicb",
  "key1": "5pdrUERBXeeBSPrQswPter2Hh2MxKsriBpm7CxzThqCNRVkmVAxB2K3tbRuGm8Q4jniBBspe8AhPX24AHDZwtZhf",
  "key2": "4LdU17fP4HUizqiUkNp4gcT9yecbghiJg8A9rQyRqKhGShEp65wQJm9mXvQWHQQip2cTJqH86FnjPARqTn9wFvqK",
  "key3": "42ezhCYnCXzEH7VWUX1ng5gzCrfG2ZV2kF8w7nnu7CWGHqMHzJSandESHj5eGhpwTRGSBj2vVyZZ4tsVfQiK3U6v",
  "key4": "3NPL5u8NZXxSfZyCFPFBg3Tji4jf8TG2TJFZnyZfD3hY9UAvp8PkVPWPE67sz73A94zrr35WgFg7kecwRmjpZ9EU",
  "key5": "655anTAaxzfGSjMPKKEvp7M2CTBFhJmDoegKq97zFoN9W1rrtaj4EQ9PLagBXhsRaokm3ijMuUmaYa1HgHnTmxR3",
  "key6": "4prky114Q4FNdyR6CFovHv3ZKZmRPnUeWH7a6n3Xbx4pQTXnWpFxCo8bvoafwYanhqGfXCBNFVBgFDC956oEC62",
  "key7": "5kTEWzDivTG9PKNRmGkzLVzq1sSdWydpGXqRe4ZFhuNHpz92BJp9wHwFkTP9rCHvbjytm7z8cHW8B4Z1CdVsJhqP",
  "key8": "3sJsUGwrpGLNgHjqCs8YGBC8e9n64E5vmwDCmCWGpzKMmCNWEEd8u75FKnDixMpnd146RsM2w6aMrJSpSTXFkkvm",
  "key9": "2jMCoAVTWLy9JWhW3SRNd12LRTemudMzFBF1ZKkaMiFT2prf3PEsjXfpXArnEuUoavRd4oBGkiJp3Tex62zLEmZ4",
  "key10": "563zwo553de9DNCHFizT8TU5sNjc8Zj6taUVVokSCpMGBmWgqBGV9TDLYvyacnXs5TSARB4dfeMTz3L5kC9g5UZT",
  "key11": "i3Pf8zx1WMLvJPHo6NmcC8ZKqawrbHepHwCoUbJE4F5oS2Z2Ga3vnsLrVc187VZwqkDzR748yVa2dK3C4MHTLYj",
  "key12": "2ktmuwqVUXZUjZEcjz1xsAm1grRjN4UE1uZ1xsXQzrqpJ1QE1M9rDyNeGCppftLFymeJenBoGM1GqscjTQ83z1v9",
  "key13": "4ugumetogGizfuguWw4MEbh6mLcXuqjC5RT73fGAkAg6gA7Pxq5Gexvkebx2stms3ZYFWrDHP2xafKMp6DVckuaF",
  "key14": "2o5JGpiGZVA4xmP1UaVvixeNAdotz4gmW76KJ5kNFWcomxfqaFZBYD94YoMyGaFVrnf3nd66mrDm8h9DXnGwLPeq",
  "key15": "hzN7P2KR8A2jwntkR3jDbx3bRG559i7rtu6xb8MCTGzJysbbThvztaomp4VKhcG55vRVD4wPTn9fiE9eykSoqKg",
  "key16": "41kJswGKYBvmciNK5LRSD7YouT3UYgfqPGyjqdH1fDhvD3YR8yZ7qengso9csBqD7Be4jF5Ns5kAKc6p4MWed47a",
  "key17": "2G5wyC24qSARTvggkjFLeUrJEQXcTePcuyz7WD2wgSjysKVs8TgVe42B92CdVmzP5K4ZtyWq4yQtwdKxiEgAq1gx",
  "key18": "5JHL1dZfTxTmUZu723mehBLBa1Xt1qiM3ayxvvaLatddKQYqEcVFuKwubzj9Zf8W1j2WnoYnLJA1hV4bwJkS39Bd",
  "key19": "byCWyh3x9kV2JmCeE9zUTEDfTbWMQ5fGjKcWi9H6pEKXaP3Ldn4YHFTwrboXG4V9459Bf7xbSDve3B28RSizKzZ",
  "key20": "5sJ76uU6ifCb7zYdnMcnLhJoWA1WidcghY8XjVKey3AGZc8N3GJNK8PTFpfYjdLGzkXJtxCHkLd83yAK5V7iJTJA",
  "key21": "5E6zkxw3dNj9zGb52c4UKvk889TQ798ZrvjvA4r3kDJVJpLBGCvsWGSNR4UJc7gSqjMG4g1MD7rJHP7MVZmCAiFc",
  "key22": "2NLp59sL3fZ8bBJ5jRwnTaN3AU6Wdcq851PgbFPjLmEE6nhARKsh8jqtbDDTpn13swGUiS9AiP9LcGb4vTFdWRjC",
  "key23": "xWdZGRzJJe6o3c64ueDzPZHSAKz3VbArvT5Fcs2fBT49yRzSBzjSrWcFgKuqsP7mTduFqWyBuXm56BiaFxcTSra",
  "key24": "5SpCMuFTec9KXYKP2VjVFca1DRVpWRKXwdrQFTkuPZmn9FWow3s5aNATY95EzoPxSP4T1uHCBzmQSt5dgLjiyTxr",
  "key25": "2YvFh5CJoavBvBQLbuwm4LsFxyRhBwmP17xuJE4R2iCuGmzXpJr7oE11b5nyS6R1pyMkgNZw2sehpSE8KB9Z1Utt"
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
