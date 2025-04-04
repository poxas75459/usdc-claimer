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
    "4QsEYmP2KozCkWCz7JG88xS2AVku2rPK3B9zdXM7NvQB6fSFrUzv4vU6ZvL8LN2qep7Kfmoiv2ahSoNLiKXSNjbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QExiXHWzu9mCKE5Xxqcx2WW4KchUH5ubjBjAokFPBnrhydaS2Z3VDfEcuhpSCfVphBLxB9SzyWaaq43Lqbxc4L6",
  "key1": "3wPJyCL9RCa2K7BJBZR4nckx9nkiVqz8LBu5J8pggviwkrgR5ih7qqfFmhDc6oj6ABS2uNXdaRSFQd5FkKjiVeeh",
  "key2": "gKjABbfSQF3AepArNtLwnNZU3XLJbGiYz3vgsEF9TFBsgVfLaxc6jkYRJa7tqrvMbnyVDkMHe3RMj5E6PVsVzaK",
  "key3": "2Lwq4qAJdKz234yWTVdibcRzMw526xKhSR6kpNsSfQLXmnn37Usje8BYybU8XLSV83Uu46vTR7KeQdeexEVNxssU",
  "key4": "33scfbGvG9w8pAJs5mZJZHTKT7fngXpJ5ZP9RUvoUvujdNyVBS8mg77oUkpeez52o1kg2h7E5TzsXnkSYKunSrKd",
  "key5": "5hWQFHez1cFpvjkmNfwyqJAQBvFBYXsnNkm7TptKxXdzYe6mFBZJaSRVxrxU42L8R7jyniti4VeRu5xFwz6p2e6f",
  "key6": "hvVZdDexJa1NosnfdDD3gcrnc1rBKTm1KPmeBiejgnU3gHpB4aUgbzacGtxD2e5G3tv3wYQRbWfr8X7NwwhJui9",
  "key7": "2F7v4Q4F1fwYxErdeit8dYLUXzmpcY4ADju5hCUgSc6bZsrBYk9morjgzbz83sNefCHtLAUYjL7fs1RACTP9gcuN",
  "key8": "44g2iUP9n2nWyou3SLnf2sxojfhoqsDmAf8KqwEKNzJbb5Rw78uyQo25QNijCn2mnSHc2JFtexa17vwNhwMcYpAw",
  "key9": "3TBHuj5m6h2sECnX8NKRNC8QAVjMp6cWSswXSuhMkYQ5jbMontrPxSdcLiXewfDa9xX31dy5JTzzMLF4RZRhSKnC",
  "key10": "4CVaRWVaRYqRC1kN9pJnYC2WMyrWSC3h6xVXYqhGTabYMK24naAdoNho5vLmKWhCg5uaUquc3jcXwzNSK61kLhKc",
  "key11": "4VNkrvfcsnMcez1GvRquddyJ79CUHVCaUESENEMiBW9mRrELoLVzdPtmKpLVuABACe1XP2tQXChQSjH2efxvyzEZ",
  "key12": "42WYPS7z2eU7oLj2QqJv2UZjcTbvceGFPwjpFJ1c1QJb8qe4Vdzd1SscPHassGGbLpQ68vbsazAamuC4ucG9NvNf",
  "key13": "56NXAKWKbuUtQHxYbgif24RJDEFRFsXX1haNzkUHeDhahzswRpRFK1BZ6T4HruCFb5AtAT1RhLnxDjPfFEH6aptV",
  "key14": "59W3VeLA1eknhFHeyjgDkJ38AVbWGGA4T1S3oLMgdiSLBtMGjZjHo7XsQh8RcU1h89nhEomPNUGDwZBFA44DPGXQ",
  "key15": "5r7kev7htojm8u4iTDReHUq85AqcVVhPpJTWT6DAVwzkAFCMicJ9rWRPMQS8qQ4E2AHUFW7a7qtpNYQxN9inEcJs",
  "key16": "5kGPPjxPWzmG9vakvjCiC4uUmhZrv8rwibReETYnXuQ2q8eRD1EK1gQZZupkjp3xzZARY5PFfFNPWwH1kK9wdmoa",
  "key17": "8MwdZh6d4gNX4TN5TQx5YqVM6rx2zzLe9KBX3g4vZUVfU5L9j7GQPczeopu7PRtBZ6Pot84Cs9rDKBj6UxLe71Q",
  "key18": "4anERE3QZmojGgq3uCWUMUEa1gtbYXFXwMfMPzkfNeK7YbSYwJdYs7EftVZyxdynPAyQqFjKd3SbcqiVPZsRBsL9",
  "key19": "dim5hdyHJWTnRDpMB1T2vorfh4rtq85hWS8m2W1oJjB2jgAPbXA4Q8PhjByhukuhdzzRu18HYc6BMssJWaq19dm",
  "key20": "C956gbEuBZgehhkSmyPj2BAepuxMACsrmaFXZ2itXBcNWS6DTpjRhGADAig92mbWsi66rikYLfgbohqHWkvisF3",
  "key21": "2BfJn5MEEo8Yqj4GnM2n2fFHnUDKj56P43Dg6w2xr5f7f8CYSBRXVeFCyhz8XhXkVuBa6JNxGC1abvstjk3XK9Ho",
  "key22": "bXjr3M4pi2zwrZkieNTshYhSXuto9wdgXxuvEjK4Zv3NGWY1FcUzqXMKADBAUKe8FTPXTmgSTZFshiLZGWfjr3i",
  "key23": "3nRu31488sNYq6rfzvyhxhsPJZYkiWc3t6iLb3kC9UfqsHviWMh226VrDDzA3S2AucjVzxorgoXraX7xG2uwGmo7",
  "key24": "5ytsVR79oojWtsuNUMg4QPp9eRjrgPbv7jJKGJmHtkgTphM7NseFVxCDsnc1dKwxpjvjGbftLzyJTphWBvLip31v",
  "key25": "2DEVRsgsbh8RfyeuFmnqzA58dhvyVU8W1k5ge5RUNZRm7DdivTA7WDDaR8G71koogrXdmGtdwgjGX5ouVfMdzvgc",
  "key26": "4A8UGV6yikLoYjvzZ2DYDFzG2UZLSQCyVwPmunfGY9tDLP6KCgrriHe5bgrSJD5BaBJE74dM4TBg7JQyPb9GzC7h",
  "key27": "3sfHSx7kveRSq1HvCAQiFhLViENDP4qgXcedbL1zzrT2fNrVji6Urv88dBGd82nEft272xTR51M9DWLB5foXTSJU",
  "key28": "DHbhyK6W6WWQauBDrTHx1rQ8kYURDWhpoW7iE2RSSajEv84z2t8RTco9Qei8krRj2YhmV7bK6nGDd2tPzxNsuqb",
  "key29": "2897T4jR7nEjH8vLW3Pmb8g81BoPvmCnHawELnjZSwwbx88BcvXAb6eRCJLh4C6HTb7NFqJjJBCBdZ3UaHTwsRwg",
  "key30": "32Sn6vRAZd1TyGeacsaLfnyAScjBjpQgxmzpA1hZrLqRRPq8C7xXKQmRH4B75nFeHieECLwm1hLjHbPYSP1ERmxE",
  "key31": "2pGH4d6hexoaRG4Dmia1FxWCMTdsY2H7GHwNeN7DHBXCwhQRnHYuQ2PHZB7RGH6QgppEYR2BEv2R39gnDwGhKxkJ",
  "key32": "25bWMPHqmNTSHHqRrSjxLUY599KEMMqzKe885Eapj426mwf9UfvBGqhUEA7Jt2i4GzwxajmZmDBhiNzLrvZp4zU6",
  "key33": "dt75M8Qw16iDYrDJ2fpqbcDbygLwXaQwxDesBPtLHjdGpLUpkCW9JRcCTvCnkBx9RxWGSo1YRCsQb95itWbZjRf",
  "key34": "5YVXTZNHjdmv46PPLANGArfs5ziMjGspvwtzzo7w2RdMQThXUF2vZCwZYAFrvmSRQhostsnLXwTomPBuyKbGh8Gx",
  "key35": "346nyyaVeemoUn9iw1uAR1BHvjA9Qmwx2QLAZRSFmZa8e7uL4wz7k7cGN4ZjaRdcUMhxjWBHfgDAZFqN2QwmBA8K",
  "key36": "5tNQevCYpYtoYEpjnnmfqX3nMFcYpASLn5zbR6pguRTQtXoycKZEUKR91GgbVaygX97sUE6g18mWDopCyFWTHugr",
  "key37": "54vwsN6uqauyEKZ4XXFQxDspk1Tg52GsKuY6g9XMKFLyKcuHSntkTHHVdJCT7U4tqwFxwmoVzqerYEhqxaYYdVEB",
  "key38": "ATGuw8QW5FfXSkPgPcgLVrp3hwo611vTS1TYVbhEP73tdNMESJ44kkE4oPMa8xf68BoCLn3Q2c8rogYUd9pqRnX",
  "key39": "3UsjFyEqNMGr5dmXXeUgQdNfAEksgzLp9pemSojjWEzdZi78QBWUT8jBBSFrFeKPkQzamuNhcKgEkHqbBA9BcKVQ",
  "key40": "4iFQJbednTREMi1h5FqETwFT1N8pPw7Bv8CcFcRLTisXnW5ocNmBggf37CxDPE23ckDaNwEAeiNhg2Bd8A6Bwab5"
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
