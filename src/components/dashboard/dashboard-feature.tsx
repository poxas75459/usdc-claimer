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
    "63p9xZFJG7Uhrj6eugbJAoGTU9xuuMnTvTXe8onv3qXqcb8rG9HRaJXGqZSyXdxqAC2jqRwsGUVpHt83PAhWjCVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xMqsnGZLtXBwP3LKztuRCrPD6mySdt2E6ZnwiqEwBV6WzbXgEetUSQWDipDcBoJYKUHF3LBDwF6UQXoLjhi3agH",
  "key1": "cmYuvw8JogsmgMkUjm4mDwW4eAsUAevoFLUyQF16f1jqqjHTW9X79vKipzVfP4zZZm89LVNvYcA87uyHuSd1QpX",
  "key2": "3MChJ2PbQyxmfe7jf9m7kNpmEEG7WT4fKvnMCNYtVy9sgpkzQc8dRDTKYe2HAuPEVQWUja4hJ7SGUMyoz7cJ8NNL",
  "key3": "4sPVRtPD7Lx7vihAEUMNMQVLAeGCmd4yNX5MXHrjmyJ8gPehgh2omaruvfaXwjSUpwnQKN7T9QQFdUF5L5k3mcUk",
  "key4": "3jPoiKHRJRTtvAPZyXN9gxnBEn8YgrfxPcF23XoNJw5AygVfNAS2ATjNbcfSE5q6D8uU22Dt5rEq6GFxpZSw8dKu",
  "key5": "4sVSTJTNu1kV1BqXP7iV4GZ2h2QYfjxN7Yszb75tvPbvBhLdwYHU91pws4Y8w1yuKLNSAqQMURf4wv31S6MXfFLs",
  "key6": "4txejWk1dZ2LfNUGjGHtNE9KG4mt6ANkmDWyatPqzc6ir9rg4i51QgsQPdBApN9XfV2xxCiVxXXBGgEgATAGANDk",
  "key7": "4JCYJ7PR9hbxGZZWtt2RKhEe8WnAM5tLSMDcq82FCsbYYxsrrXsbkHjVtx2Rn5pLXyMLGutyfWaLQggwNwpNmLiH",
  "key8": "UsuzZazhzhq5Mwa4fHed8YRBFW1aLzP7N8TQkEKxy4FMg9wcTUoLi21YzGJYUjv79Ytg2EKb9AYQrsLabwSz2eY",
  "key9": "5S1QLLihAJ6JNbZftZHudyMgkfu48jg5fMuVY6FjUjSq4fCZdBUvSmZjuWbfQKKsDFVT1dQbsnKJwqQwx5CWenkd",
  "key10": "2qBtL4svVy5g6eZDeUksRmF2kJ3ZmaAZT7qoGbEH4bU8Cg2VQdVNADRtAf6tUokA9ns24qTSNmS8wtbbRkR1iXdq",
  "key11": "fcFY7EbVZwSdZ7MEaMCYcmXgRwgofPQTuiCsHcfKuUGUeBVgbSV8ZAtgmSfMq1HyeZt1tL39gAFQVgWUYy18JiJ",
  "key12": "3bUcGQAVQjK9PkY8hi4YEZ4AVpWeNeYZ29Az6K25QvwDtGUMTjfAQZGtGwUDF77Jcgs9D48Je8CFTNMzqaJESpJ8",
  "key13": "34mxdVuBsWrfLsPkwxGVy7tuaD4Viu8YFfmGyNbtL6zVzZWYBZ8xH3LocRP2PoSudewzbvTFzvr9qwSx21p9kVK7",
  "key14": "2gjpuE2QeEoenFmaJfUaJ9w6yfK9Q5odJfyhXgHevsFRLEPrm8k3KktASzRtNUtpTtzR9enRTubAqRkqkBmVXKK1",
  "key15": "52qotKspsJsb89A1gcdvqkuiiD7cTw74HDoHKocMEcHbRd98monEdaqJPRfkhcAweGb8pzf1MVqMitE1mZRtkvfF",
  "key16": "2mnrpLPBdhW8aMkquJFBmKKNTATXfFTpokgBqPYe8X26TPnNiJ7zdNkiyActVQ1Dz9BguJM5hD15HLvdFzGSwn26",
  "key17": "3tsvaW4Y5wXf8FUSFnPhmTHTsPe6vUFPoYYaoc2L7E4vvDutpinnsaW93YCmUtsKatDVdrow7Q3AGcNAz6Knb2Vq",
  "key18": "3rzj1KGm3fLUoo22aJ4HSzMJgtyN9Gs1srWF7mP7LMZXBDfHprsWMSp1eYnkm431gvoPSSmSEomHgyfaqqdbhqHP",
  "key19": "SEih1WvZgLuoM5jAsfhstqUfiEekejyn7tLE31U4hHgXqWZrn9hTCspmpQAXuiZt3ZPkrEqM9CWqrGZNhv8NBS5",
  "key20": "aGM7KogW4A5ktY7g711i7McPgn4YCWdo1GRTBGdTDW1EBWGDrQ1zC9Q6Ba5D54Z29tJwFkK1HUjdntB8Yovxit3",
  "key21": "VUidnvAZBkhd7SNDGhWa9NA6A71r4WkdS79QbCBE2ghXNYcFZj5kBFobb2xoqwo9us2nwQuAyVsQY7gGsyoYzk4",
  "key22": "2jemFL3Bn7o7UA5RvxjJ2L9uLYrcFxAt8CqXg6uceNwAPmGUpZe9vkNR5ybvGuavPBDUiT9Ud5wZRqYTYM64c7dm",
  "key23": "429kZjHeGrbHgHjLo7WswTDkkuLZeZzQFjJajFpDw592wGBpkTScMdZ3qmLpatf8ZUiYqvWDgtR3jadAycHvVfso",
  "key24": "3EfNKJ9AvxbV5Yr3npqfjvkiS1FbqH9n6TSTtdyRz7Ukart9NtEAcmag31TWZHUEDZTst3Dktx96ZPmbPo9Kc6Rs",
  "key25": "59J8ZoS8WvfSxzV5EfUYx7dvCydUNrGxZTC1Ze42JNnU8WYG3rZ8jsQdcVzRds1oGtG2Pmvh2UoFrhCg2CV7eDNa"
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
