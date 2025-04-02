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
    "4E8vPfTANwsYdco24qvs5HXiN79a8R48LLn6FhGgYP4TGD84roGs6A3C8zWiPZeEnUaPkJgRmNfoK3s4Yvs1mRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A8Gx6J9q2zrgC55qQHhodMXPTspEWfbzG9oPeGnnbFh1DCHAdyhz7L6PsF6YP6GWh53G5dqtJFPUmeE88kKXSNN",
  "key1": "61hskuoMrLqGmTMt7YPFsFPFcXqgFu1XTUQnkPPpByxifEfQtSsXUbXyvth5C129shLQoPECG9JkDMdwndSkLuVe",
  "key2": "rxSXbqLAE8AyJWGJVcLiXwB7QVe8BTVr9XvSZ3W7btyUm2CEh8X9vw4rYj6ePdGswXZivU9zcTf5WbP9CHW55pR",
  "key3": "3nrt2VZ1nJ22994Xo7e1dGy7tFpjJnMXJPBXF5hVBqwfnTU2tfNuegveUHK1gSKM4nw2qQcYufTtZk3S8riSebbT",
  "key4": "f6F6oKzu43FfCL6r5XUo3oiaYGPFu4iCssaUwAzPUy63xcu75aL7V5gm47a8dPXLW4kCCpzjJeTBfXWgmhyG9cb",
  "key5": "3z3MBZbRgNX3JMSEy64Woy6Y3cvLBFVqV3z9Mup1WNsYds3eTY9CX5qY6SXetMoAg45ESjJrkYULsiyrqv1LJEC3",
  "key6": "3rCcHfeiuv9hp2tZU729hMfAZiRNnQ9PKjB9Jd9C3YriQN4mnxxPfrbzT5RDao7H6JFrAryLnbF4QSngjqP6MBgb",
  "key7": "4RbTnJD61Bk5W1gYCJJy6FQwhxTqTxNWsYGa3XbCZSxJeCpLZrfrQrZXDmyVV3ii6HTuuXEz58FPdcYRKHRfdZUD",
  "key8": "21LkGTq1BiQUkK4hoosLGyVZTLQ4sHrRpRT4jaMUtYhUiogfNAqykxr2yiSaZA4RUFtEwEzPPpsqRKpJtbpUCix9",
  "key9": "41t8Z1hn42mWsaS9cGiRqDvzSDfC4EZK6TqjjEcEsg5zphQ94NBxv6UhTGGgUR6L74ZeWVLeKUqkXXmxFYp7U7AZ",
  "key10": "36aP5qHoVJSXYYEms9mNAzJ63L9XfVndnTUJf4xo4yhrfL3NM2AvWLrQanAEcnq2YvasgJbPQugFbiptjetukLeL",
  "key11": "2R1wkhisrYQ5rfvSfjDgGZ7CryW8c2rznRTUNwfVEPcJU1pBN6XdDA8TLKnXRQNjK53g4E3wE2hqF1HX7xVWWGot",
  "key12": "BhzV9Ukf7YoMivkYMkxgAdezgAw1Cc8Eggpw82Tkt5SXnJci9tL8iqecBaUnU3zD3e3hAA55Pn77td1EzEAG4Uk",
  "key13": "3S3L5qKf5h8hZLJYKfPFvKKtdQcZ8G3CDJko4kp1aXevWLYpxf3uFone56DQjfxVaM5aCJEufmUHKX8s7Ckju82x",
  "key14": "4XgmzS6VoJDEvn9ZjSPWEkjrf6JX4pwuBJihsjMRoKh8kcTZkAnpZQtMSRFGmUX6SEuekXm5gFQpy7UwnUgZKPzo",
  "key15": "3aEGMm4dKd821nDxvwtgYfHFntdL6kXzFugHn9Rwi97gBuFKpgBh7kvjLtSKuLDffvBzdhnJvsGCfpdpYVvk1knh",
  "key16": "45jX8nDvUinZbpEAfWhu27XjUNs9NwVLUyc3YJAwDgfKQar2nj1X6gf6HwPM2FfzyMFxFVgr3qe9VSwX2JifxTND",
  "key17": "4ENyxXRQdiHJixaLg97vWkLwQdkLDCH6tshRonidc9Qp7ynEFLY1eV3HQkh2XHU3dYagsjV5zrPeZzFsKsbShkFi",
  "key18": "4wTgHyWKktWNMtVYuzJY5uNm1yTCTgYMy6VPDk98Ux5JQrEX8wRvynefhYJJuWzCBdCtfHuZ7rD84UuVBAzrrSJc",
  "key19": "mKzg1Qp42QDfzfUJ9poWxf3oPvPBXJnaYbGZsiwijqV7uQtWLRuquqVrmgmzM51yP9zGdqAVc4yV5HcP2dZs8g3",
  "key20": "5BC5CeYCxRFvgN5BFfowVxsBA9QW43RQvDFPkLExYjPMRonZKMDqR7j2aVUud3psb41o5JRkAJPoRtbRA4sqbpXL",
  "key21": "5F4NPHBDUnTYDhyMhSRrpywwfeHuoWc3UdqSkjsPXrgXm3jKeKJ9FSsYFjQeBcXQAeVWDiPuNiH2fgHNQwMQ76ha",
  "key22": "2Hqm6fzsnZsWLiwbUv4MeF8amGNpkHmdwqgUQH14G7RxnxBEC6dsZ4rDcALpjNCQwfb5xZBuWqQV3ks63W1BbK1P",
  "key23": "5gD6B8QhxU4sSjqz9nRsHMDxTwkAynSAYHCteVvKTGAPkJQ3pKje6ZNfLwvAN7dBiVUzCsw1w3xCVTfUcvsiYyo9",
  "key24": "2BLcFbG6VFUmRqi1pqHLg35aM7dWNj4BXKn7G2eAJCDztBVYBkzp4H6AWZynCaa8p8g3kwkHiwBBMEBNWFrCVtgb",
  "key25": "5ACfUEYrdp1GskRfq6GvDibSUmgvNYRj7vPu8vY7nPSQvMrZh2LyNyF5n3UywmWDJa7TWGuvmACWwurgWFDUh5Rp",
  "key26": "551HJLkRDd9wipxTQL9jzqtcfj77qawaJE4iWdNtHjs2snXq8JCMEmceSqWZmTi4RgpDWxoDs95i8tgQr1rEmhbD",
  "key27": "5Z27ygAbncz1pdqt5CgUHBqFfRMycjFQvjDDQEcMxwwUhVNSo14pc8rZ7C1N3CukNnMA4JLJh5codEvnmoDUFVcG",
  "key28": "2sq18HWR9v6Sr4K4RZ2Rkeuf7tJRzJaDGPejowQNbxCwhYDZEkEro1Tdt1pvJt5ADtWtjPW84Lg2fFvnV4MrnQDk",
  "key29": "3KiZtZjZM4UwwXwkBtmHMvdh661djZMnJHxhC47hi3kgpbapFru6uNECXdqiPf4P5LhS4sQviF9cMUceCwVSpcow",
  "key30": "3LkTqGSD3ZrFDdSh9Ev4qbLYMGR5v7PHYQrKyacvRNhtT7eQ5Mp79iuiQDaa3ETRpHNXVYFvh7Hiev1u2Uze4XYU",
  "key31": "Pd6x7iAkjKgi1KuZUMj1GFWjkJkPMyNFS1gsvntmjeXfvPswNY5JM3v2PY3sakPWc4NdS4jAsmQA8jxW745HXj3"
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
