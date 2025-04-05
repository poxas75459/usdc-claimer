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
    "4pTUg9poRm7ritmKNFr5VVwSqWncvZwsCUyUM8rKR9z6bXNmTo31CtWo9dNLccrLpkyAbzYxerN9rSWDwgptVjEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X39Crt34kcVfvjHjUWv2SCmYs7hYthN9oy2Fv5dsHd3MFwrUamPS1uVCLJE49qUwt9S4JCsCGXpJa3YAbDwbfX1",
  "key1": "62W1inSA7zTPtjPaJnttJrDFq7gEpD928iD6kA2TF2BVAbb1qhuaT69xwUY6gF7W6uMRtcqzNszQXVYxnoYVDUnK",
  "key2": "2dPNXUHpUBUfafAsD9bjNim94PPvvs6PwDRAHLMriqhbyq4JmeiDG37ZyeA5KWmqy5Dqfru6ZpUMW6GmiXe3TXt8",
  "key3": "22dXjBo4pBMRme75XRCCDkNv7qqoW2buGysmZ1KJdxZSNJXjXCHmDRyRRxoK266GBwfS5Zn12mpWMdWjDsdJ9vjv",
  "key4": "2xFNn8aaMus51UKg7g3urEtcr7wxkMb5xWrkvckWUjsQo8V7GMe2EA4o95SY1aq3btJ4u8iA9QM5vn4DejLFhmm9",
  "key5": "31Ee6NNx5JJx2ZPieMgPYGhg1csBQZnHFYZR8mCGtuNUx7SuQoVPZCQHXTMfUrGiexMeQjjhbDHE2uwf4Yf2qt4B",
  "key6": "3hH8Yr85DKSSrta72cax6qkS4aFeD5sCZRLGEsebbWhe6dtbP6dcBm7D5pwZQAXPjkok8N3QXjvif815ubrnSRiU",
  "key7": "5EebE9avxGEZdfvN1UxpQiQ2FqSoPMiJpeMV76Wo88jttSQhKFHBcXemXtzbQ17SYLk71HdLhjR9zMGnZbnJeYWt",
  "key8": "JHNhbtxYbFuZayn8QZEPbYDcCrHSoEGpryMtcn7RJKABdf4RAURWXKZAdRG5YzzLTrLw4JkDPvGSi6Ta2coCzJg",
  "key9": "4Vo7EDXTripPGG3v6uz1FY4NFTH1NaDzjQkasYNBzMdoQVaKYvrC3XFhqTCaRP1zrTSUZ7XKT8aF14MDDvPqeez9",
  "key10": "5J45AyWUzzwSnDE62SPzZduMf9UDBkfVGVtbCvnPnEiHqeNQGcfMvXmvvFwqDHZ1PEF9Y1tfnr1vwSjZ6XeojVJp",
  "key11": "2xFNMP4UmfVxoPjQrkWkzgA7utczvzU2raP5raiP3oku6f7LzawJC3VGtVVxEtKnEz7WjehaBnv9xKS9RZoKnsCd",
  "key12": "28dN3A8NUrFuDfzFgtpP18J3EoPVaEYUcyRmZB1sbAE1c29umyxjwpkFPfkia7VqoFtyQpXKmTyMg7WEpssiuCup",
  "key13": "WCGqLCy39FvTmaZJcT976an2yrc1QNq8ouS7cXrpy68JdGReNQ5xa4dFXWJee1NKQrvge9xBB8zVH7xfG6sYqgx",
  "key14": "4VRkd8F9BcKjRVtBshwQcGpi3PviZb3wTHDbPZvn5dQFRVukr5Dv8gkAgmiN51MjJ5Y5VJptabZZjz3YQyyv9dcN",
  "key15": "21M1cUNt3qMDgE8iPTc1yaq8b1cskhUZBe84TuA3VF53sj6nBvMxf6s6nkFZfaWqzpiabsfkFa2KfAD7Q8nMgj3e",
  "key16": "66Do9uRjLAYNXii3qLth2XhjcLqQZAYLQf3XyMDUU3N9dZuJeDHy9dxAcs6uMJ4ydhN46awkfjLkDyVEKf6fLjWp",
  "key17": "55mUDdPds6WDYSXaujnuWUzmfHfQJHYX4Lfi7i4T16f48MUw1vE2hDusHh7K9kdgBzKsMouXi5YYCVmaUtcGe2iV",
  "key18": "3fMcrbzWYHFf4g1QrYJ7fT3UUAZdVeovUtMqsey2GvnkreUMP5d574fz14eMQmyQbwAG8xQztH1vZmw3m8KRG3NC",
  "key19": "8YZYdM23BCF1eULXzFQvXYert9WQ1rBGv19AKZBqg2HpCtRTVFVt6u98LT35TAK1oW5DfxDtVGi547eD5c1ArfG",
  "key20": "Ez2TnhW6gJ78qotaCeSRfgELdHtQQpynhLSftpQ1CVQMsAVPtXycH2kSwgoNYhXrh8HeGK9457vMnHDqTzaLKU8",
  "key21": "61m3re4y6y33Eg5HrY5RSeRZ3N1pE4bfJiaw7XCHoMZ6U4RP1oc2M3TgrjRYQvDqmHcW1VzAE7zQ8cEL4tFXarX5",
  "key22": "51mGnbZhME395DyxC4HjP1FiHVjiuP8iGfybkKgr7CFJGyH5mrN661bYjse7ggNtQG1RNresdwZP4yUbfnwKv2Wf",
  "key23": "4rBCQiE7ZY2qMzi3YoZdu5frR7L2Mu4sHVbypTxcZy2xXMpS2dMYPzJRYxEzkZ4zbYoQhFjvxMNAKX97zpaRRZYd",
  "key24": "27wKPJn1uctnVFQMg6d7RN5DAhMAhaUVzdeaZFLF1iGuxTtL2pTXdsqGeXyMrGBhBkFGq4sHDtCcmY838ynFUXEk",
  "key25": "242c1sg9UhKeJaHbHYkqPM9b2PcchSyzaYMNh2SP1ckHjs6ULHJ5imFPujmwq6YxxsuXMt8RWXkQapUvUn9gUxB3",
  "key26": "4EKkak1ThWfJ53Lika8W4uQaMUxjHAcuUzdJv7TZFEWfeBcsZjWzMWJFvUJCpuAaSeaXg8SiTDJGi8ZdWHBLpBpB",
  "key27": "3RBPgGPbkouAactviyVwxt9vxNK1C4vEFdC9JiHrf8D2pZrTD51YVFw6cmvNvFy47TyD5nAuvAk3vBK2cCiwtnKL",
  "key28": "pSBESuaFtUx1x6MdoBfPoVPiWXxLHnx8KkUvKiZ3Zz9TkhhD6LsxbF7oMMwRCjHUBZHRwFZ9JXe7Qaws1NmDkR2",
  "key29": "3SrosdKuMcmYnEhynG2s7Tp7PsmNgjbsQwD38SJ7biQeWEeupeC28EwAAB4kZ8MqmpSJn9TquL37AxwMZzqLP6Bf",
  "key30": "5YJRVCdMwH2qLayPaxUmBbAELyfwYcUmCt4uKDyrs66Fez1BoV1oTcPExH3oiRiSKnshhJMKw1HupJeW599FvYku",
  "key31": "xMgAE5HtDnmgEVeCz2sEPCrjuQfKEBtEA1Ujh11sJpfi7LDA5HWuUuMHZ6paCWJ1f9dP5j8WGYYfHYmW4M23QuE",
  "key32": "2Kwiuahmr4A14DY4o6MaY83drcDcY34VAPrVnUpWCJHm1g4SYTWMoedNJ6sftjEvUyddUBLk7wrfjj922SPFoNkw",
  "key33": "2PN4K1rC9U5yKHkvp4Bmeot1x9bGrMQi5igieQLD5aFM3m9CdExWJztzY7SuMKWreAVdQf4566fJENLHn3DJs8XJ",
  "key34": "ukBKxx4iCW4eHWLNPeVLG3R91boMev23UkjVSq3s6J6YhY5RotahByYgtn6zyznW34b2LT9C9dYvon2iMUzzXY6",
  "key35": "4c7KD2WJudCLa7tuzcomAVdxkt9E9gJmYskrtrMnLRH2fitPFdCXkBe2f2PhPoRqzLiC1kGMD3zM6MkWwg2UvGUA",
  "key36": "583j7J4Xg1HyWrG4YTYx3ydEVTZ4Rc6YoDRqbrUaubK1Cn8E14Tsnb7ME7TKvZ2uRDcbc8gRoqYGzVyQrXZHgqZj",
  "key37": "45rov5VuFXWFxjt5fhUoR4goFbrw5jArN7abkMn9J9vEkED5x26zJgWq8AuUaMtAwkffQqZnqpvqTMy4WCzwatnV",
  "key38": "RzYSYpBZn5Y5cfUS2cG7a6mAupeAEis6CGRqYJhTpzWDEWwbYYECmpwtPNfcfk8rxSxqTWhyKP1j7YF459BDgTz",
  "key39": "3LgoCjnDDZx7YDTDGHB6NupXoK6d6RctGyBX23tX5tSAF4sHVjt9hxBTi84f9h7xYkJhgnDotgPQzmGRNdSwUeZh",
  "key40": "2YRtuzrfg8E2rq7dF7PKqMe3vjTwZYkqHo4yykZzW6XExYHDbE9WBqEswYrsif653xXkERtFM9SeYFBfuvPh9jvn"
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
