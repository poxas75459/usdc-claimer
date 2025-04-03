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
    "3Y4PaHQ3JYxyuNfxDevDJiahkVUmN6TmD5v9PZC4eeXXwa5HZoLpYfeiJMgAUU1CAVQ3Xv2aBaYgAqYEtew999cp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "628FJsjxGc48noAK4iFDU5beW5danLKxmQGunNi7c8NarfcS4c2pB1SP9nuorQ7qNHKTXbopQbXbd2rGdpnkL93u",
  "key1": "4HgrqRPS4k72YcqDew4bBFi2kGk3xLoDXVZjKTL6gBPNhv11MDBHsSQYsKShdWTJPNuGXaRvkFiHqzGRFjQEQ8uB",
  "key2": "2nt1Zocux6KDTHyHtyiJHTxKH26osLmYnrKnYFmBNyurDKiD9D6vwRBuURrYDqZ5Yc76DkGu8AyPakxGa8b4HAif",
  "key3": "3DMsDGaKHVtdS4GA4nFLEi4c7xkBnSZi3TWsbfF1AKfBYFxhVUWXisHRS37nMBTEAGRqeD4ZroE8WyuL4eouvvDC",
  "key4": "3454c2Xpxz8DHAwQCWX4juBmbaSrV77riZVVJTrZLSzTyTDQJuedTPD3fRp5Liuses2wrQB1Fg56dBQ1TD7Cmxis",
  "key5": "269nSxeLnPySyeEhg4FaaSQQZN43CEswX5GX279dmsaS5snbXz4huq74kHxHX3RnKj4cQ489pgCgBcor99YqGwhV",
  "key6": "4dxD88yi1tLyLW2eV6n9VrUhVh37uRGvyAzMPLRhQQwB9Bk1oLvrknsxDhrdheAxBjx3BkCJNkCDq3TBvn4fJ1Ny",
  "key7": "3KMHvwS5vAqPi6Ys3Voo6UULDbjPPwE4QwHEmKoQwTr6qWNvLnQYdxbHbdpZACCQihB6Msfry6yv1sUqae2EzkbQ",
  "key8": "5G1hYqxQpT2jXdNkGTstVJLYitAUCDKjvSX6ZtMR9SDz5634v6jm18bhCrdL82ePcBjz5z8xzYiEyRZsLayUo9iV",
  "key9": "5Eyq1NN7Uwm8fQDhepSAgLoEX8hMDCAAFvpGmxV83pnThJvq3NQwSWcnstK2rq6y4fHedLJGZvsJtYVUCktjgX7N",
  "key10": "64CkUffPqddfo5EfTKHx3Tsok4UXDJ3mFY1wH9dShE74rurbVeDeGrjRxGNztevGGTmUPose2CN8XvTmhd56RX9B",
  "key11": "is2CwqFVgez3pPwxzhFDeoV2aF6Jygt8Hb3tWNbWm14d1eyzrSPXXbQXAAcrcyi18Pty6QtikM7Wwq7xLkJgmw7",
  "key12": "4MhXusXcYGtPkErGeDBs2esgeXheSbuRd9HiEWRkS5L7d4PV5U67V5QnUrmhqij7S1gXdgEQYUZjVDct71gayygw",
  "key13": "3RUPqASvFuRGiVM1VhUkbvY7oFmwRYXhWpLHUqFYcM95cqVLDUjrcEhofasi6ZeF8nnvQ5JkTmMrnnh6QDdtBvzC",
  "key14": "3788BX6SkbQYutZ6qcHea8jGtaHTprM74jJsfE7Te8bNECshDUdgAX7EpAqk1YcpxbCzn4rLpJqxmfRZwZAPHEn2",
  "key15": "2W8T3chkspV7nzqf7xQ9eThHF98XBtPz71bXg9zyRJqGugnRiMgXBx2XJhctQMRd6xYgUNrQ4rA5Z2Mk6q7eN8LX",
  "key16": "3GNQTWGMTyWFbU7wnh8ibTJirNz5f335jba3F5tLfXWKN47EAgVqRxbKRw49a57CtHLhtZn6BvjmkQJQM3sZuMYa",
  "key17": "2vAbkP5wQyN9aphqhBjYK6od44BJEaBC2y7i7Wb6juJd2NcULsPgDktj82pRDvchp1iuGUXUHK6mVk5ABs1uXGx",
  "key18": "3Md4oFHBsABxkPhdUphYKcdXwczSAwDBzgQvVydiS2NZsFeYjaKkuLCPZMERrzuHbsq8MpT1KeChqbbbwPBnx62h",
  "key19": "386f3kraYwLo2UnCQr9ebWvDZefAyRuA6SBLqdQHQdiRYnV2keQVbqmh2VXBfgvUSTo3bmCbs7NDP3ncgfh2gVMc",
  "key20": "4jksc9fJwtKwfDCB67VeGJm56D7Ho3WQBjdNWu2WDqYZFSNENqamLHHfBpAcuXaY5kSaWXctqvSzu5qXs7wA76Zs",
  "key21": "3dmXXWXaVemMX5i9RDeAoSL4xX3LX2KqEr3Z7NnSyVk4ja4tujN8wE45XKAYt6VEkWdf9zQKUdeEUQBUZedXbmkj",
  "key22": "2H46qpRgtG1TXqmubnw39UuBoeZ9yqV2LUid59Yg9xH8aqcyaorDyGUZazpikPTwPuWp98zkKz51QEFaeuDdkYGq",
  "key23": "5gZ27bMG3aqE3oVB25HGSAWSKBAH4LfecnPYYqof8f4jHbcSTFG3Ape3Pd98UShTKakV4ueF3cKfmrofcNM3isDq",
  "key24": "pz1u4f1cWo1Z49carTDehV8i14yH8HDdbQHqbwftwqbyCEjhkJCqtsBAK9WuFdZfxfKLCY4ShMz4D9mLJVKQbLt",
  "key25": "4e6XrEc41dem2CGbHeVAGRXSSbSNu1zrLfkA7dEbqucqG57K8d6ypPTZvMi4X8wREDxGhbC8VWM9wHApMT7EfD2D",
  "key26": "N9abBrvaBK4s1NqeX1uADWrSKmCQpSPi7YuW3kGqwhYq4Kbsoic98H9Ag2LE4y5WxM462jCbhyQUp8FRTfSaD1a",
  "key27": "3wedXxkpe28gUJZvNe1zHXiyJG4QHfKSfA1NHjcwYPjFWsHR8dMELiwYcYyqVxrQ8ZK71XQHMJDjy3PVjtAWsFEp",
  "key28": "3BbDDYfZBkDcNY16x5c7mKmKaPZWG6LQNdFoPWBciYhgfzwqRTrF6FhccmTPE7TUR7YYMjBPUYVJRxjQpm5P6rNK",
  "key29": "5JLcj3TuiQMQ1M6a1BHDX81USjqagGdrJopyN4qSQf7DLxH9kYLBmbjuFZEKMDKmkNQe9PVjSBVZuWVf3vKG7egt",
  "key30": "3v3u9hcaN4wHPcqMKNLbXiGgD4LQkAsWmnYFNsHtgNWWzDgcrQTWqNZLoZHy8ZADtZkeeeVa2Ku9aM67YS3VK8Xv",
  "key31": "4wJUyFLqYTxLfxcAbT24ETzhawBXPkgQ5PwxQA1L3NkFS1Uttd7QrXr7ZnB1G7RfCmAxana5LveCbwQB56jriTAR",
  "key32": "2Tzw8uYv8ph9xw1zkq2Sktu6hKsNBorYPkvbrupqzqVgaRgXsSohzwxWkutFvb4EwW56MnQaoTSVyPi4pdAB5pFE",
  "key33": "4dJx3Dhc6e9kD65LmynkthmHQ1L8QPYefGRfFvQnfVo6vcFph4f6tghLtQMjuj2rnSX8ENPctKyBkMfsM8VKSkK9",
  "key34": "2N3miebgKHUosnzk38UW57DVudoZqRzSW5vVsek1DFoLF96x8KJUDsXWTa3M1oMryfHozNpFBE22WPF9EnnqKVJK",
  "key35": "4K9H6Wc1E3a2E4minTu3saXXTtCCLLRV7wyFtHDPzYhfKLN7KkwaDrUCjrsvtPMbPY9Qsr6x6oxBXDwqceqb92Hn",
  "key36": "xH8WyHXU39RzMj1kaYiC2aCNpw5eTyzh2q8wzD1a9RoMUyDW2tisfdf9NeRaSN6sUQeKxhkqW6M4wHudGd5NUrk",
  "key37": "2vEubt1sa9KahPQEHLMrzz4hx29nJhme8kBd2WEvRuc2JWTn7WczKSwmPMFsM5iVa4JSeMmxidLuruoNTeQKd5Aw",
  "key38": "UXTEuJZDbm1iqay3V1emfdug6GYHMKguMgbJh7uz8uyMitjeX1JEB8FRAsVB4QBDdVsgKEnaqEGaWU2oSW55JtT",
  "key39": "sfK8BEwpwQ1nwwo6LMrBwY8X17ceSCUYAMXhJMC5Am31cJyTp51AAXeK2wS69TKH9kyWyuDvJsRnzyN6JJu4Nrf",
  "key40": "51pmYsyqmAPAPtHAL926CvEUFSqNiFtgaQqZQsPhep5Y2a31SGt1j7W5VgvCdyNw2pgku1BAULGZFh84qrNW42jG",
  "key41": "3cimzoZSTQj4QqQnHbq5zt8gjndhJ1c6hWz92r28eXfg8dQ5rWBLAK9Gf6z2V7t3FeKLFG2521W4YajwKCgg7bEM",
  "key42": "62U7zzNZ2CR175xTHfrsapBHtxqwJqvBR8G853CuBudLctFY6B3XB7TzSihJUFGjgg42wujm31H58vsgYiQ5tah6",
  "key43": "3qNaCrDBCcs6YJ1d2gLFhimWzYBmECk88bFwqtmRe8RhnroPzrP22NNE5RNhGetbZWNhRHws7UHK7Fx4dkM8QRZD",
  "key44": "58DmjtrKdXpvqJaw2HBqTk69FCXWUQvaYYz6n9UhqYBwGhV2YhrMHy8bFMWYQ4GfsmDYbR4F3Uc5WMuHBmTCpmHe"
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
