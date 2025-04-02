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
    "2rEqLw7SchXwZ3Vpu1Dg3w3yi8ynwbwo5juSh9oPTEoVRupDSBos7XjL1gWX5H3pxfnjLyyjsM5DudqAvnZQNxCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dLKM6NxE6G6uGnB5xK5jTUftJtptfetNXtpBQpaHiq41cko2kek1Jj6t4EW2VG15Uh6xYwCVotZw9or6Va4gH1V",
  "key1": "4v2y6C5AqtJjFTDZqMoAfKqbUDuSLUfkGM3Fd4fTSV2CHUChZnLnaFAtvxjwnMicZy5cEUXiUFRUFRyk3xAUvAMc",
  "key2": "XeKSV9chsJLTsXjW744tswWAAFfRZ3xkK55b7oRJmUj9jRCSfsgCP5tfGFEpTCPzKJn39mEQjRK9BfFTPdfDWoV",
  "key3": "3UHFzcjUKAC6Avbq5mWFLViWxuk2LNhAHfs5vg7ktEYWqiAeg1VSNdRCsWNXmSazytrGPQNoBEKiLgVw3MTByRTU",
  "key4": "5sG361cuNrSeVSY7n1vrJy3aGnyeR5epH3dDKWmE3NauaDJBtHd48uDGPppEGqgzFWnV7kuh13kmtRfWFnjpf5vW",
  "key5": "4VCuhfAdMv2pUpST5dnzSeCmqFLrpW9uCDdvvYvBLZ7PyzvcJYhqk8ua8DMjf9GcQWmgqnB2jzAB83yXd4ivrKGF",
  "key6": "2Htvani7vhrGLB67Zh2rAxbeVKzAgUBtcyLntXpqkJP6Wsr8CK56pbcwVNbeZM23UYYhbZraLWumqKrsF6PzAUy5",
  "key7": "4P2M27FPQJzjEayVerxspuwaG8U5sJM5e6rDNofTTSbjGYQE84yjkFPAQEixx9XmRhZW8inmcYFS5EhuEsF3Jt7y",
  "key8": "588ihcy68QcdtB1Y5uNViFQjXnBx2o9Dm6e58wX4XKoC6og4tCbm8bSPzu7tfoeUreGZcTez7JkJkgFPngihyWh9",
  "key9": "fov3D9Zq79Qrm2WHiA9Y4p7WLczMyU6QZSYTSjDZePHoVbpLqBC27yGr8FwzAjSTavJzvREX4jCgyRate5u2tkA",
  "key10": "3kA2Snqjt5EHjg97HqrAnvpbvyv84fE8MDVsh6MPNqYmZw7rs8ohsTGpuKSz79oKyF5aUAB7mGgxp9CTeL1crBbi",
  "key11": "CzFWexQ3cr1duaWjGKFB1TDGoc4dGx9f6Wjb4sXeCwcSNs3Gn3SgSWE8XbUEtHFXUoATg8FC99A3LYyto8osjw6",
  "key12": "4ZbrjooNp8JwrUN7zmP1nYQceSfjSrieBZCK3PxeuqYBY6cfBwc31WHEiYjebdhTNaBiEnLznHZGtFEJyKBjchxy",
  "key13": "63GZmqvU7xcNMy2kuks2hKKacit8fqFq72HH7NYWFAKquojtkvCYVXgm6FDMaNnHYq6oXUNPXXYExuJGQRMRBXyX",
  "key14": "6UPqdWMENNiTcHoYwsqvCon5pL1bPxd28F7sWdhf8nfTWARgGxvUDHSuVdsoymSYDHeAdAHqApSE2ytAVLYCmso",
  "key15": "3fjV4P56Kfzwsgi9TM8LbxzLPrPkpGcoii21Snzm5M5XMtuUDSafi18nquWFVnFYr3AbwDfpVU9nwwiq8timNMkK",
  "key16": "5zp1YLzH7qT2CPiSvyU4oHq8PkVoGB4mf8FzmiPtK3KcWaBr15SoGsKE8ZY7L7TAPKcDzQhNQFWbuw8E7oYjvPM7",
  "key17": "yXG9h74hEr7beuoDUfbAxxwnJLcCkMPLLjBDyZmh3nhuU17A4iYJhTwGwH47yRaix2DgGFgN3LNxFSw8uUED3do",
  "key18": "3oiFNtfj6GDabWCB4v5SGfxNnSWkN4QJjTG1UD9gxCK2dHfs9ptXJtYAMPMabL5m7i8RnPhdSnbWJKWVeAk4WkAk",
  "key19": "PyzMhEW2SpKNFaK6HsSus42t4EfSigPMt9obRkRrNihMDdRkPZZ26XGsoxv4h8o1mvnKgKWnJ41nHK3Wpam9WXq",
  "key20": "5skjqi1Yx72epoKHrAiFFake8Yh8Eis4crazSFJvTHoZHH1Epv49udLDXjnN49ckPsTkbuoKic6nroeDg4c3gVD9",
  "key21": "5K9in68Ekzwn1c58WcexSzYegQon2dPs9ZmkjPzAcgYw8ZAqQjej2iomxdoyF9MMazaeCx9zrRxWNqFdyogDAegj",
  "key22": "3bqGwq14a4CX6WXENkoKjYkrFjn65jN8d5e6VK1T4ccb4bDgqTibjMrC3P9k6Ky3RJdMJHTYojHGPWdNtH8LmkBx",
  "key23": "5uHeqqAyDiXGa1NNVEickn6VuHFqA6vxFa2m71vS8dWDSDrUcWUQCjs7dC4EusGUFqK6ikb5pi4t4mu6Vg4hx7Si",
  "key24": "3VKJKCftafDvfif5ZHUscx4na9igy8UBLg1eoUeDscULnX8bUGyoqDk3U9NJM4Rc3UwcbVjR3EwM52Qc1vuFVspe",
  "key25": "xHAT8W15xSTVUjT7Ug8tQ8tym8WdDMbYbqwSTcig7yGWNXB2qwixBC2nJmFmaXiNgEeoTaBLEknugPctnyanAsh",
  "key26": "5QxBU7JCRahhgw51tWPrPoddJpsCoLEWrGWvk8JsV8MSnnzBUVMsnbGFZ6CEfCgTBiYy61vP2tbZRKY5yU5CU697",
  "key27": "56JLSvfj6EMRB3djVkEovNVna84hbqwvtBLzxuqa6uGsAgrcCPpsbnoZfxcyt1oKuKqcgWdXfNtysbHz2wVBh4HP"
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
