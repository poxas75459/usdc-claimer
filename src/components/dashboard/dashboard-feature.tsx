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
    "4bzhm9cBbTt6Xed8rhixSndTMfmNGYAHWd1NG1PHajicrpQGfpfwUnn2UJsdBkw6ReBJRhMkYR998srSibukHyRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HYf5eHxMtwLdHfnWawVYz2ay5efELurbzzw4AnmcFxR6ouW7AvNnyM4n8nHVF9fKJg3qEnooy3uaqrCdSnWxTzt",
  "key1": "5bhQ8wVPpHXFjiLvKvnfNZqKZByYkqt89S3C7ShcUjA2KJELHiMaHcPuqwSHf2oxnxE7ycZaYk5UUKPeDeQ7QZz",
  "key2": "Uzd9WpDHkBS4BpNEaKQdmt9pj2wfDpfS4BA4VkYf9xqDg6sneNGZfjvJNFo9jPFQ8o7WHfm6GvpnAYjXqhraniJ",
  "key3": "kdBT2eKU32gAPLp8NXXaAcwsntjvXxFA99hvqrRiAGGwVDzcDbYspgKtgb6PJW95W7Bwoc4wLP2JHaKxWsJYSVR",
  "key4": "addWmNRefN5BMV7ZM3iKTAAQ9hkHt5GgV5YVirBF2xXy5PxQEhwZYTX7jcVkSmRwcR8WU9XH9WtX2NzmSMxusB4",
  "key5": "5zSRe3BkNt4gKjvP31TfmbDio95gWtxAHcsNKAmPr1prqthrvxtYReESNjtKgpMbYmhcktcdDYeXhfT5i7mDbtni",
  "key6": "3C8oiPZ5CYtdYEzNSb8DtFrxuFcvRtC94fCGeXemZJTyN5cd7w4Qy49oaPb2Dk6wddYhkU6u2BYTPSBC8eCKbvKU",
  "key7": "2TtQUcQdqJedsXFiuDWNC1PUtdvABoYBJDH1BV6eoZiGDjLybsdjLQinzyrpL3Div2QDWvgadas5GYsxmkDrza8r",
  "key8": "3vvSLkRGYfdzm4hEJYx1rFn5EGXSYbrjswpqB3oJQxMpRkFt4F4aD8edvztvTqwE9x4dKJGEDc3ECi61eQZtzEd9",
  "key9": "5B4fVGLgqKCTUmM2sUXPYJKKRa6j3omWjPTNiUmKQTHS5WeuQtK4tpKF5519f15apBH1vNRZ7JaqqJXt9hvWQ95b",
  "key10": "22ZDNQFNMCMVJqEx6pZprW9KYHRb9BgSpGTAjujUNRJsk3vhTBLNNkfiwZHZcJfnDrMkR8TV3U7c8BJZBGKkMWQk",
  "key11": "5wtoZPmxKs2B5o3DJ2hw6E3ktmW9KtytPbLAgbBJYUwYVRHbajkbM9usDDwDJKoJKd9zmGk8MAZ6K3ut74CkEAHa",
  "key12": "5y9k8tBT7RnKEUkJWJzfstATSaDut9uWx1bDEtFpvs9hYx7hEG4xigYPtLGUVy9AZSw4faZS7x2vfQa2qaDmZhcv",
  "key13": "23NGVdN5TusfVm3vxo2SuCVNUoC3nVXi6NEX8fneJJrrQynKTFY9f51zhp5dRkpV9vMd7ddtYBgqRgdNNKQ6yS38",
  "key14": "3MDeSazxgJn33kmfjwrsoFDjfrvdog57ee2cj48X4tTUNwyGNYr6SHqYcuY2jYAwhApxxkmdSrfVz5kJKQeKEY1u",
  "key15": "kgM9RpBS8NpRnzDVNF8VJCq5khiczBvqeq6rM9fdvrf4dnB8uSWtwGPtfWs9JvkiNh3taJggCi7h2ST37CuQ1oD",
  "key16": "63W2wWmiLKd2Gb6kb4DWPfVaAP8VMVeYB9TgUGasKZMRTpxopCQUmWyVwAhSgk9vE7Du9MCDAYE7e5NktKiT9Zrt",
  "key17": "4X96z3BTroXoDhVKFkwga8djfXiYzg6D4D5xsFoQX4dyeWG3JNk6ZK4cDUu4mZjiGAS59YfxNK55TXXum7UisLRw",
  "key18": "4bD1iWLduibMsWAjigucozKZWDMnaCyUe4ZGwxbWXCFvT2kXX81WENS6q4kVL8UEnLtiLF2Xg7QYNDaoUSqbXBhF",
  "key19": "4jJbCCmLGN7PraR9fxX7LgMYVaFLY5rbSr4Gt1nGdFQdUHPm6rLU6rRBvFye7H6D9QqDPtkZBiEye2XH5mv9RukC",
  "key20": "7MGHPu4ZmP1c8k2WWhde9tqj5bniZFTLctAQb1DLuniUDBNAiJd2fN5686UABybxdLswk5XgGDQ5LiwyiRojS3o",
  "key21": "64iYGVSHbAGDq99wbakFWAWTHfF2MoifpRSUDo5zyQZjMyxajAdaPyQR1S5diuXLoTte1sJPg3bfhEu6dSkgivL5",
  "key22": "2A1qAhrnxSo41v9w9fNrRpRvXVGkAathL3TGxNsheYoGNJqMMsQstk5rp8m3QpTncxwQ61DtQiy5fSGozczM4LfW",
  "key23": "ZkLKyz9HhFivCU46Dnfcqjgfeij35Mfk8ATTkQZzVLXeimC3F6hciivFLJpqh3nxjPMMwxxWYB4CBJzaVZYUDXL",
  "key24": "4xJfBVfwEeSoycVbWXmHT5NfyXFuz5H1xaZWY5jm9BHgPR1zJ7FA6RKj2reaBgZZWLjk9tR49QJc8xaZXmWWGrZ2",
  "key25": "4hF1fi9rTy2vXUL3GJ5rzUndKYfTupV29agQL3DJ4kK7ovtiNGxQMDY6MDXqNENRF2bQEUAX9kN4euUfL814H2Yu"
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
