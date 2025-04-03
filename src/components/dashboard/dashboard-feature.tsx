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
    "2iS1QSXEJuSpQSngr4m3PidztP5KoMKsGJV5xSF9Cb3k4b4yCxJ4w2EC3ALmWmtaWksKHSKRS8RRF1swKWS2BTBm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZn7pdqcd8xeuJd2kNtbhKUwZa42df1RLBxkjbHbpQSSThUxhqSyxtf7KnEwxKvL8aowaLgxbMnpLePBrY2Xnr1",
  "key1": "3rQuAkydEr3Dv3ndWXwyMFDsHJxzk8EsRyTdJ17WMaE9Pxuuyh9tUAKzZFVLqSeDUMFppa1iRGRxj2DreHAWN5fc",
  "key2": "2BC9tBi2xdfe7g2DkpGHwP14dZgJH636yyPkNSLocQvx2ptd849bo5hcssaJ3nMFayk32Ls9XMRtCXgLjhZin3kh",
  "key3": "44mYskL5YcDufieZEMtoKdpfAHxDpmDfmAeEX3Ftz2QXb7FmwQcxyeTpJd7HNB3MoSSAbNKwiXtKoiksm44N8DNx",
  "key4": "pHZDrVHxHxqTF19w5LSPEzSGUsv2UZUmEnfihdzmEFM2VP8vep6nSD3h8cctR7qFQUN4Lvq5kNbaJAyqz4Dd6zj",
  "key5": "4ar3hyDG8VZSJYtZF7rVQHeqUcufZgiZWdHSsfK8W9QBDSHJqxxuWVtQn9jR9E7Fvqr3BiGdYygBk8MxQAoLfETa",
  "key6": "pp9cfzPZawLpsU9Vx7WhjJdobHqjnc3c3LH6dyGSvuXEkv2xmmuFTiyTbNM6RZ9YWXYENHDQq4NVWnQJjctHtbD",
  "key7": "28mreNeZPzQBRU254MFi28xKk7Xawm26DZoSTagSWcZDT31vR2yiVgGy3Mv6KSvYU5L2fjk8c4Mgv7BDZNs56FYW",
  "key8": "2vbjMyjC9rZkDkHjocupVyPvyJj7KhVgfyNgZKHGvtidsor9NsAmLme59FFFTQxcA2tWgkS79vuV7EW6zvF2a7tu",
  "key9": "2cHmymY63HmR2SMhzZ2kPreauqVWxC36mTgdYmhDtdN8HNFKUaW6HGw8J29zwQhidzurf47djDugi4yLvgCQiFDj",
  "key10": "bgG98hnU31i2QvKdJXvmmouYyX4dSLTvByeq9AzJGassvYeRZ5dJYGQWy69CF7ctoLZSgTtNW51YVcSfXYnVe3k",
  "key11": "5iRJhe511whYnFx1bfCXaqWuqBgGSgae17XiM9y1gnPM6Wg2m6RKdMs68tNXbfKPQ2L2wzqiaFRouKEpid6jBQsg",
  "key12": "5Rchd49Kk3jN7zHUHS9rsnVti8ujtqz36FHa5dcQkwMvxN8J8WedLtaWURZywuvDgZ4ANdiTMU8nCx9s9gCokGZR",
  "key13": "3QCEZL12tC7fXNsTbuy5hcQsogs1LzGv8Z2MhNZtNBaDGf5b677W1be2kNYFsdpMFYWatLWxekrDbXU5oD3m7RSB",
  "key14": "2TJAHJoBXYD8K4MN3r7QWSt8Ex9XXcv6kHtVvyNxVioksxXk3jbuXqHY6gW5iDMb5eoYumD4r2hFU9JzH3fRsX9D",
  "key15": "52vtRFPqCy9mEpgMDZ8KiGQbRLj4ebk1Wur78w51K3RX9KPBBFrrpUAGBUBdygMWnGRSaGA2FAmTTu8GPrdsrjMW",
  "key16": "5DmyXjBqm9yBra291KaQu8xnYbNGi7K1YAWzPrxXaQN1DY3uS1zXTzzHk4jTvNUp3bmuSnvsxMmwNMjkM5GVzvVP",
  "key17": "3WbkcREkoqmSk1LngfB9uWQqPukAvZpZKaGk3zGKaXqEQ9fvnrpk1bLv1KHfKpf5WqTsBoZv4PvxnG1LxpFYhXce",
  "key18": "2u2HJe5mZM8TwAxjDmn8xSqf4bG3PExxM8GSf17MohM1NYi3c25a5FbPSA2e2fUQMWxhzJU5bEn1DjBBARBpgtoM",
  "key19": "5cJaukXKob2wVLNejjaXNJvjAFaqyuB9hQ9Q5Agucz6yhF2XHUkwjoPdBTkwYkv3MUeF3hj4AuYtzN6Y5sHsW3NW",
  "key20": "2UvRf5zHqPsjtoYj6QddYsW6FDTNVNWzYYx2BFcjz363V2Dxz2CC6CivsXkBuRLBvh249AXpfvew9jykDkwqK4s9",
  "key21": "X2Yy8KXFesf2gJQSjmYyexX26Ep7SGNfDLTBx5YPkNc181mdzHg4ackKfW7c1LKzHKwdCfwoLRijiCWt65WZsoP",
  "key22": "5HTZY6nfxeavvnfHUKezj8Ai9YHvUayABP3vDLo8cAMurJZ54pVtmLhMPVNk5DhQ3WwSFaWDqLvTtMBLfkWTaYmE",
  "key23": "5jKGx6kCnhj7eV3Jpoj9s6eRM5v3g5BFFUcUJ1dXXw2HUdHfNBXuBbQHjW54hJ6oN7PBruBfrefvwCKEjgN2A2t5",
  "key24": "2TTdnu8YSqvC5HD425VvzaMxuLDxvzVqmK8cMbap4coMet4xqU2JT3q8wFyN8Njys8xtxLC7SCXwhKnwSToK6SFT",
  "key25": "4T5ZgkLaBPZU1pnTYUmCTHpT54vtxdc7BnCFrL7Km1x5rU1fdRnuGDgu9784a4bUnyNB3P3kSFe8ejnQjvSd3MGD",
  "key26": "4RVcHG8sv8r3v1rmfm1uBeJawJLsRaNb1Pj1J2GjE7QpNT4EgH5PA8LbSbKrDfz3i5Q8efscbKgaE8Ev9thJnU1w",
  "key27": "34e8dS8imsLAvo53ygWkaHUpvK52C8VEs8b3V2x6maGvt8esP94uakh9TzLiYx7Cknvgw4T9AWzghxyLwd8RqTY9",
  "key28": "5pnLm2XfPZimwFVgDa1UxPGcMTBobyYC1SWeoCgJpHotCzvQtkNpkEfbgfnsvQGDXTndBajfaMRaE2Fjrx27QBAv",
  "key29": "JrbT8UeFuLTyifnoadgErUaFHJZKgGaLZRZJGcuFMWz11h1jkJ1g8DjFN7Zwz3GQqbWQa4LvtAqUtrQ1FtoiMwF",
  "key30": "3QngHHCRXsq8mwsEbKKhBNmkWxFZBC8YTN3TiQ6Cf9fVCUgLH4Pxh8ePP1PNarSwtdM9iNztL1KHbDLdG8cAq22z",
  "key31": "3ibwoKfMvkbr5x3xeZ6YLvhnAcgixq13x8dz8uZZqWbu3D9NhziSogKjmCiSm2nBEAPNmDpzNUca5pao9nZ8tkMH",
  "key32": "3yQrQFcouTXvuZ4X7HfkGkbVZQQbBnsc9jvcwCp97LkugjndNAChU15e2TmFhtGauqGGzgAcHxb54D3UtBdw7D1V",
  "key33": "HuaTfKKdhmU6kk67w5wR4YR5DGyxwzx7Upg9EbAeuvQEZzaR11QnL5ncf8VLLp6AXJZTbhu4sYkU7mqVARiHZJE"
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
