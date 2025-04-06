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
    "4MuoLLvB8yagzGE4Chbrqae1SipPbjX4Q82gnYGF76ornMLyQhGw1NgsFoH4BCuYMzAUv9bMuqoMNuM561coEtGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u7gwu5EjF7TdJWtyghBeqo5poRb8PsxYcAjkmhEShkhu49taX1Zgxi9S67CzxtjFhejjdpSsqYYXYsJT435nNJf",
  "key1": "RtkUDt8d4gpLtN9iMYZrFD1XyKm7Vp4qzorCL26YAwXfJiqy9VYUkLqbBE8MpWcfg9hg2ECJ8HRPhMwLU3Gpkki",
  "key2": "5c6SVZfc952pFchtAAxoXr1FkxQBag3DYrodciLyk4UhFcGA6bUtx4HSLerMS3VWpLvvCSKNW4o525gKqjuePs1d",
  "key3": "9B39dyV4kiSpdAQ17KoXSVXu3MiswAcQAbSBtBkgMpXozf64HZVnrzivQLotxcW2c8mMaR4FPRHomKV1Z9on9Fn",
  "key4": "5cS1ZBFyoj3WyBiw2y89SF9qM271FEoQrWEhvDsaUsFXiuGsCf21LCUwGXeuHTrBib6oeUbjpRY91xaA7ij6nCva",
  "key5": "2bx6kpbteknyZqdkjtEayytFVwatySkE9DprV4TFrNTeMYbNZm5M5e1CNcMG4Q5rAdyoLxaFGydjMCQpvhMipCHp",
  "key6": "33RG6i1Kw5q9v5M3bELQgcjSA5QKKUMvumAr6LvzQdfCDpC4mXc2LvxzUAg9gnqLjgCVp4Dv3DRzVQxS1VvVpDJq",
  "key7": "4tfW5hDwnxvfSwyVE7EVc4mk2ZVh6MStxdSozumH8Qny16Q5WUiJdTSccx5sgV9SK3az5eZ33pyYi8JWdxkw73mF",
  "key8": "4ssdmwZM6d7CL3WjS3jEUauqap2NcgiK38iuHxbnhkoSCW8ufKZJcftTT7UnLNUssmKYQ1XRpCPhPcDYop7J8SD4",
  "key9": "nNszWk5vEGyNwp1BhiJ3NgHP644CsamWE3a1iQUitGWnvVWLaKBtLQGXXz6TNG2KQN6BNCKSiayGuVY7xKfUo8H",
  "key10": "3jJTvUYrRoxyraVeiLjHL2YFFLZwcfdWQvtMP2sYfNxbcX3HkQMW6iaRDzK8APhFHUkdwkmouLh9xUozt7LhBnrV",
  "key11": "5XMaP9PxGQ3ZN3QJ6Zug9Bic1G9YV7RZfG739SmpjAhgvs32MjdewSMQzJRtfyorVw8L7Qw8d9sWCEyurhDDgim1",
  "key12": "56qWiqN5KKyQkxHV3pbQPK2uU85zwdu97JENpc2YWWxY988hQaL1qPfakBZmjuXuNKJ1haGFbFZUcVRFXLHENA2X",
  "key13": "4K7XjDarWnHtbCh3HmUZpH23syM6pq4o4T1jGY7XZPF2aUsjsui4ZDUciTGYhqfUt26uX3a8M41d5iP83AX4MfoH",
  "key14": "3HEj3iSv6d8Nc1HHgPi5hQBq6teqRxrnnq14j21uark1EpC4ZqjqSt7gN95mHRSyH9BveXLQkK4kXFdUgdT2AwqW",
  "key15": "fuW32n4doaU8J1P6wuKn2ymyqMa9iTwdX9tkDYWFcJWrFVseSybnGKFd555bsAz4Fbh2oVXWmz6zzbTF5T62f3j",
  "key16": "5vWkzyKaiD15NCr5TQyXF8LByP3hCHN8eTtxvhK199icWUpGh4NLvNztXCMDir5uicR4JoWS8LL1fiRYrRkETQzo",
  "key17": "271D2SczyWNGjxWY1K5cpSwRn8tFGAWDUC2KiTXnLYUSMCgLhw58RtDb8rEHjmEct2dqJp9kqbnUZNGvtzaZVx8M",
  "key18": "223AVgzL72FRkKPcAU7FKjByDNNEQaS4j6ncfNXUNWJM2YHnzaQAE5gatSneAdz4oGz9tXSusUhGHWiTsDVykYGA",
  "key19": "3sBnNq6tXSj4oQyXjT6vTBuVhQ5szzVBB7pHvzuQRxhoCP6RWmN2HRRzGkWhCCUHfTBB8qZCeEHGmL9ycEsc2QRs",
  "key20": "61HLSRyxV6UVK7sJ3yPKe6gMbyba1Uj2Jxpw5Q3hWZAj49nTmvBh9JLa9zEctrajfsxDB6ByfmAMvWs9Ydmobn8e",
  "key21": "YioLdsCcUU8SZ2vuoc256sGetQQN9MV2u5kBZ87Nhd6xwEfYdbV8wcs34Phk4q6N3NzfAYxM2CyDrvB4VgCbt69",
  "key22": "5x4m3ssa9c1bte8qVaRYAXCYb6NjPKGyZezLA8kKHPkYfW7ug65zd7w3zr6oPQt5Z2J6QCybyx2RYeKnv5MDUtHD",
  "key23": "3Hu63Q3HsqaNrdFJZbJupQARjZj9TXbPSUyiJHm3yCpAKPqstycgFJN8KJu5kjzprP64VSW5BeVGfW6naFXM2yS1",
  "key24": "4TDxt92uwZftFdtA4Fgy4D7E19vspCAiaTw68G4E8VdkVwy8xNsTDFqmGfSFgWuD6Y7ABjgzeioLUkf3MNWsr2aG",
  "key25": "5cFc6f1yZWXJEn1BoptU8NpVn44wA83eXWS3hdLVUWrTbEmBcyD5raYTaRUAXSWgP28jroZ1Tua3aj1cPJxRNKCM",
  "key26": "45ARU4LeuYG6SHYfp2npsRGW2FJznJA6KcvgKFf7nsCjz9pysesha9cngeFhYHjG6uxGu8CcYEe9Uchea5eys71Z",
  "key27": "5r5UTfMdg9njBw6VT2DvufhDDXVLsutR2XaxG4E4qmfHQDHNLegpcHasxx19U8qPWfx31WTHzUnBRhzewAJaKRLi",
  "key28": "3f4c3VySjQHCXKry4HjMAmBUvExaPLa7Rxid4mogmuTPBsUykN836HwsxGuEnUe9pEfNWCiP6x8dPwc7Fm1SsHsr",
  "key29": "5BEAaX6aACfb7Vy75XBkuzKs7o59jJvFaVyFUfbkduEaECSrFQaAPHbfZ5rBPcxGS9t3Xc2hSmdoGpy1Xe6Zn9yB",
  "key30": "g2Dcxca9kZf4UNkyuZCnkT6eb3JCwLMBwfLnZEGQD2hCnZA95AM6X6K9DcLpZYJjnQa3XdN2fCYrfyq7GHRifos"
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
