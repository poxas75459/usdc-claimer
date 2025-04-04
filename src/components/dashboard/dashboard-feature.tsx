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
    "5FJCKNktSbY3fXP7NjGaDmJiwdKjBhEBkapg1oPLN9g8HoXGocRXdNUUkaXrWmaJghZd139iwzxs9Czq6x7f1s7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SiaqoVV3irYgwjq9PGN9uKEUy1hrju5d2QGL7g3mKJeNwXTQVvhG8RNsrbG75pRTcqodMZHpzqDTfR7HW6RdyHD",
  "key1": "b1UsW4ieFp4rUoGk5wStVUVCFYam3qPnoUKNb7Cdr83s184V8HstSv3zNiD73wq7B4q9jPJxdZuoAvVSBNPeK7A",
  "key2": "3M3ZWLt9shFjMpzsS51VBHS6ufSijwapB78N8mTbRywwPHuawUECEeNdZBSCg58FoGPbCPQV4y42Ccae9xj2pM8u",
  "key3": "3mjzpuW7pbt4ErfTN9JAk6oZ5LhHDJobAq6jjHju8MnoJ6JKq2YuEQUfv9zLrvzh5VKxjLyJq964zthjppnvCfi3",
  "key4": "3z9JZMieKNMw2oUi3DyMQEeAYbsqpCE4PVwnMMezGvWCx91rtQ1pG2codwRbZLXA99ztsUQf9hAkKvAqhRsbip9k",
  "key5": "3AVynH93Zez9kcgixJ2kUaavB87gxSkdnGTA8fMQ7YpnEZnTfUt7jpw9CYQ1tPnDTWuFLZX32HWpruLN2D2hZkNo",
  "key6": "LwEXwmnVSZpBGvYogUALH7Jxqz5C12PuufZbSfXw5bAqmenxqRrdafXU5ey6g1EwhA6jajNPsxm3t6H8GGqC2rQ",
  "key7": "3HcezwUgUdbQfhsE7LUihkr4yMc4PgVbSzE5YEA4Ew7LfGNjSB2SVYv8vZjLBH2i2Et1ETNnUsj64FQkb2vGZRLG",
  "key8": "3wtTSuzWtUoNVdbMnAqw4dnYzzt8j6Z77TduwWMV8fMoGvGgUU2XDx2L8on7UqZTDmWQDWgcWKgHqiPG3FSWp1Ri",
  "key9": "43KobrxzGifPy63Mvaavcx8beo7LPEamC5wRBFcKrT5cGALxEgPpQTZGv7LcykH6djLHbyMcUX14nn1c6kAXoct8",
  "key10": "5wU5GozUjgt3xMudqyRLJJrvbAiTtBoHKLeu8CCZ3jD8ygMGCJoX5H2e6DaxfrXUn88kZj1iRGeuvdEwnxKsW3RS",
  "key11": "Y8XkWyFZvhZUoh5JNeW2UTDDzCfYXigHD4zbkogVEnuWSrKoXgzzzxggvxfbL1TAqLu2kd7uBPf8JCpVsz8ByKT",
  "key12": "34FDwcd8Y71o4derE5EzE1g2pEE4i5zuPx7sAMhFU62JvWgaHcFADWNctU5Mg8R6t6zd1w1QUL3UmgudFrcqkWrU",
  "key13": "9vJ7AhHwr6azN1hrk5JEgCcHqzqiZt3Yw8PJf8eYRkCTwnEZfVSwAfpVvu9mQwnvmTRzCGdL8ravQvYGSQAjjV8",
  "key14": "5AQx7fwtfJ57P94X1e87E6BUGk6Y8Q47GVGc9H7qMpcHKg1U5AY6NFJPfqa6qHamSHFxzqRTg325wj7HRzmrb2nM",
  "key15": "2k2gmJfSKriewjweafgDhf7ZXwoMs9eFmyiZDDHH34w3TWKiTq9zS9kSZAkQBJkQ7CADB6Bkvqzd2vKHd4m19HUx",
  "key16": "4KzLK1auwayJXfqbqUjkg46brmuWupoXmjSEiMJBNpSjzuiv2QN5uG8AfEsmLJj4WaaRR1SA3KwsD6mFRA21sCJj",
  "key17": "u9wG18Vmbz7sLFQNNX7yFoNrK3qoPLHRnzFcuCK6hUWz66cmTkUeyqmDYoDWfgmkacfH8pborDaw3xPN9A9zsot",
  "key18": "4NVP8X4ZWmpt3tmy3Phz8x9PaCg7iWMEKHsqRhohP7PsMvuyNgJvugJjreuS6Y6yLGcXiustvcMQr5CYsmos1TDs",
  "key19": "2bvhyanbY1jHnMVX5pfSckLci9qt1i4iX4qVwj4g1fagYCv9NfpYUjKBsrAFdpC5E75adhSzuh8t7s8vNvqFpWgU",
  "key20": "5ifHt65s62FR7kVX8JqA2Ri5t5aKQ2FCeLfub7Sdp4653TH3wTos5pDJpjeJk7jaVZbe6kWktF9TYbkBANFwWZUa",
  "key21": "3G2Gxva6WrxALm9ihj4DKm3xkkUYyMSGk3RYBJcVqaYXtW7jQVdYf4vu7BT6pwQLZprxaXkqr512JB3PqQS9hdSF",
  "key22": "45u4A5SjNBs4P1kZnpLKJZAckfNDAdyK27zYuGoN229QVdgWNYTWEbTStTBPYy9SWbGhMdUbYUQXENF7rhgpeUcX",
  "key23": "5apGTVmkMEw7SUmkSKSep1TBuQbenvmMWTA52yWHoUzs5agKRzs8R2xcYcfq8NWkXfqCKtwfgYDc4C8MQvgQAv55",
  "key24": "4EWgLrMxx5xNk9C4ZqTWVKrdWoPgiTtNbbHqQuT6yJtmzirULBmLi4z1bcJw93fhcxZdof8FpiJUacGb1kMKBgWU"
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
