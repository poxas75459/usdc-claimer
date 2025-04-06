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
    "5kCt42jyHRfT3QnYBfS3TCKR4uCLS9bCHKvH4RpCSsrwegELWz4c9QUvUamjFDHqnXAvxGPGeJLpHYdRFLwytUNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pQGbyothRo3qPRRRwUkR8hanHdXBYx61U4mQ99jeDfCAqmKkS3UNycGTNdewzoCXrpHsjMxRPnhTgU9szAj2ZBb",
  "key1": "4iwSez6ctF9a41JLZ36vJ6GLjA2Zym9edVUhbLYrtao7iyLy4S87VuW2S6VAHMBvoA9hznqgLmp2anE5HCsmsf19",
  "key2": "35JhnVHAYsYaSDMdMVFgTfyQCjUMXqghxsrpLGcb5HSkyQvLXcd6sqyQwxEHsdJnc9UcWUvXtqxkjGQWbsYJrx4U",
  "key3": "45crP7yBq43JZqd5T6VB9CtpHLHNXtt368CavpCMWxb29ECiD2Zb4fw9DQpJLuGwzvtaguaLdrkipkFdy8dmognM",
  "key4": "3szisKPnAkczfaWqEhfSAhKDFWfhAzbqKWNHXfcVURx6vdeYVEwaEncWMKXDSsbpyVKSduUFiwEms2mL6AdRgifm",
  "key5": "2Jxd3a3fx7ZfmX4VHXSjEs1efnYYmXVnochKxeXNxTyNhgNMy9FJ8W7ET7CUefE4nYXwro3m8Pc3bJNZrWRDYsda",
  "key6": "2B8HwBcgW6bc4fWFgd1najpaxszEB9QJqioHK861MW8JFPxrWtVh4siT2KefimbiMQJCQ1cQz3iU5qVgTisxtSm6",
  "key7": "23zH5AJWXyG2xBY94PnqBPfWAc2RoE9rsBSSPFaAynJQupfZpN8QkRKQhcUcw9pcdQ41pfb2Y78a8r3tC34SW7yf",
  "key8": "3my6NaYjsTbvzVeXaJzqCJ1L7FHF4pvk6v6FSdjPtavKmiJbw4u8mCYVyY2uFgQZCU4bjXdXQvzpZuMjjAeq9zDK",
  "key9": "2s4JsArYz43UhM3iKmdWLPvZ3unNofYQmpSPvSF8HfwAPrTvEkEyfogJAtSVcWULbAAtdJYj58eCUiB2M556JY6t",
  "key10": "4DYqt69U9M3NafnMZxCFtXzfkw4NGQW9myk655FzWq56eYPSta2kddWoE9mZB3RU2oTtSJvh7CuqoW5hmTYrSEbL",
  "key11": "2biCQ6HuQRLKTgj1nY7Fq161jQKtFhuPp1yg3C6P3XmJp1EoN1aH4Af6hFESwKStzcz9SrVTcVcQBLoj1KW9CJjD",
  "key12": "24HEG6GYDUN1RgroxB6tRTJTsMVgedffJa43E9KkkyFge3hNC8WTdAZXphFLLBvDp7mag9z4PQwnKpgNuTPk9PpW",
  "key13": "22U4eVniJXq3bedvQrs2cjhbEJGDNvasaT27QSepy8SunxkpmTqjfyGTTfBn4gQpFTYnggNVMqU4Rp3kJzFR8BjW",
  "key14": "26T2mFCZPUbEdRti2qVb89fQsRQANe4fmbbkYtSwU6beEMd6Zk2pkS7LshEA4USseuzuP4XRB4PhLEfgfExHRN1y",
  "key15": "3rDWu6zDszTgcHySzBiu5iw7YSjTtFvs4KEVWk7fg42YYyujLoGVgtyAafz6u9jCpv7mDWyWA3i2yk1ERKFCNYah",
  "key16": "5rDQ8bzJG52aEABvTd7TPsPCci5ffGf1RWA5FsAHEh6YWagDCkkJkECAojb3BLEBTwZU33eDKH62RZUQUS2Hq2p",
  "key17": "5SJsH73L9dkjGzCb9YmqFPXpRsaPLeJwK6oAb11ncZzntyJEAqfptZyDyxLVq8Ucr9594Y4aY11xpFeteC3MSpaM",
  "key18": "5sg6BYLhybcE7pqU2KckW6hUKVuquKEetj8eYd1RWhUr2fmL58oPu8Ku2yCktvnZ2beFyjg81YbdHUnFUTrDgtQ6",
  "key19": "58Wb5sm3q229cEP5p5yKhH5o98sUjE4JFkFyzrr5Rzrf6jAC8m42YCX31fYbUXFK3c5aiWRbMs3nMMiH1S8nRoXX",
  "key20": "2pAiJqxBUvdJjDPV7Ry7sqCVR2Cpdq3rzYqt2G6zDrsuedfo6Q44QoMtyx5mHq3YpAPRHhi43RmqnubMAF3XMcZm",
  "key21": "5VrUrQmxypKcYpicer1hQc9xXWnhbSWgy5ZrXxQntthpYkxAVYWvY58CooLtQAqpyxcmeQpB6gkoqSmLcFSUKLbj",
  "key22": "41ko8MkXtQA1949z5tDBXnuHGnYi4EEPvMy4x4KGs345aGbhd6FTqp58n8yrx7yaoUQm84dzGrwQrPqp9PzrdHMF",
  "key23": "4Rjs3k9C32xpVjC4Hib1cKeGVvZSUDYVXgetawGFX3EmmpeJmds3oa5awthPX86ETGWhdqfDCmSsB7nnN2JHP2e9",
  "key24": "3ShYj2yoehe58p3jP37PAyoVjsRnEMxKY3tJqqN3ZNiNASD39CBJMyYbFRJQonP2PMEim8Rer4q2AGWd9gy7mdz8",
  "key25": "2TrrJRRFE6kkJ79QQDSvsXJqvCeUruGQUKs7YntBZma2inUqbRbDcs1re2P1kxvPWuFfvhXhzPnXRhdadEzCGJr4",
  "key26": "5y6W9YnE3S9t2M4zEgkbPiCvFz8vSy6xhpRang1MvMYtJ5VozmdDciY1uDZDSbhJdMqRKJSJdm2ydFcUC8jDQ27C",
  "key27": "z6B8jV1TWQW5c97mSLyPBZeonr6QGqzBMxMx2R5MhFhahLEHdoF63PRuCciVSb97rdU34b35mdiLtyDRkBMFAsN",
  "key28": "5URte25viYqQ7yWCJtNecjW2ATfAbQPFuV718YoEq2Yvp2XkJ65wJauWXt9RVqceCajSJXdocRRQYkTV3cwvBUYx",
  "key29": "2ux5sFVP1YA58zY9vEnFHhnA3Ew2PX2kjzj8Kx4D4YjCompVnx2nhoQ5FvciYQGw76QPjRzaJu7SygLggxsfE8ug",
  "key30": "2dkeJqVUAD1HniYkS1zdr29GPrkXPt3rbQVPKiPXp6k1R5vwHwYSwoe6r1CrnvdvfZVnAWwh5bNxjZMjj8SphSyj",
  "key31": "5E4kHzBNETJeMwSrUqVYxMGdDtLgffpSeMSqoYfQNopjTm4aTqEt4CWqCj82Jk7DYuPZgkwQvpasd7gf9c9dfK7J",
  "key32": "4Yg9rgBan2BJEtpLdCoVsc2uz7qW67MhzhMjfo3sUJ5VdukChhHe2tR3pTQyaxaUSVUKj2BBJSTenG81GCBGbApQ",
  "key33": "4TGsZ8qZQ3vnZ1k7MYCvRjELbkg5ucG1AaScoyECJB8sCKwhtqKE2poguJ3fHqvjme1wxdFUK6piyQ6WffTQVEE5"
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
