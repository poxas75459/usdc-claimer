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
    "xt44zknbHSjF1vayfopXRr7F1Q5VD2W896JdfJjGXeHZYoWsF8qdH7Shn8GsyUJnNpRK2Ja6P7ZRQseoHd3AqS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PcF6ztNybBt6LHVQiu6kfvUPnUbnQuos43Qw6kijcJqEGvE8PY2SyiMkDWZYxMkQvkEpPGUMMc8PpiN6XbrJoha",
  "key1": "3MnYpAx7jNzL3NAnuJYYkfBBqVYdqyRdHKHDFKujYrs125XkDh2mayRJ3HxooAd5rFcp8N4ByJFnQ7q3Rm3orphY",
  "key2": "5sVbuxTRAuoXw3tS1LozfLJzeKLpKMG2R7X4sKtFj6r8aAu6aLzCv1XDqLtuJn61hTsQ2UwatMrg7So1kYtdG123",
  "key3": "2Y8LnWFYKyTm6x2HDs78n4kNqYv1LstLy2ySsrtbo1wcnDbX6RxbvFDfjADMbTXWA7PxEQTfLjP5a4JiSicsHRge",
  "key4": "3V5Ud5nw1ZfoZnLNGnCPEaQsFF9pjx6emvn4tt62X6VmmcmhiUhtiscAWf91BGDaiLMQKWj8kdNGBCbKFBvDrQm5",
  "key5": "5G25BRks63owPMo6oTc1nBWmz2Ga65JowjEUJJvu7mx3nzqaZMyz6cQ9umui7XBMyn4jtsy2cgULedpZv8NYYqgV",
  "key6": "4kDQCQmFHVkHaJohGSxbWDwbRHpEa5SotgtPRoevyBumNJphvQen3Y9tfgRMpy6TApnHAzkmjqExSsfYrTz99LyY",
  "key7": "29D1HQyMqUrqYyViCYNDarKsjjpEwKB1mXr8TzpWShUQ9h3Ccc8nUuhQgrueoyGc5eYzWhBHty5UnoJtBYg5WbBS",
  "key8": "5RdH9vFYQmkF6Kg4sKi1GfNW3Hwmu86VBnaGhzCTRRhHxaGPDX7qHUUyVmnYL3G81aX9rhFXm8zH7hriihtnmqr9",
  "key9": "5Tervnc7FTTzQqKNXA7usEWu36fB8x41u84J8LfW3X4zu71dqjxxbjUWXrjwGTuaWPRBTJ92xcwv1jvzoBpyJKrW",
  "key10": "57UvvxeD6u9eCRpvkbAWR6SYvzvKR3TktCqagGUSKbmu48Fpf5EtAPZp6Q41xxvEvy9XfHAAndBpw2DCJ2ZTgoqB",
  "key11": "3aZAyAZb6PNPf3k37TfxDoNnchwJzDEP2qfJVEJY8mUQoiX5FC33TJhfssxELdpBahZVLkpiwtZQg4GCEFbReaH",
  "key12": "3ZPzQZZ428W7xgjPchexnACfgo9C9Ce9SozRBr4nt6zDnGNgAEiXgirqbyJuZM71VVpvVevjSYfrozEYeAm6Qcg3",
  "key13": "659PN9pJ6fYodqLS3KpJiKHu14CaQAzTnjZ8SNbrBoECZ7TXNNcF3H8avmcoXs4brueMuHBjqk1sBe6mek8qtB7V",
  "key14": "ydf2MtNfsATXRjKjUUN2iQZ4mxQas7uQDcvdmVkGgwf8vgaDgnscejKKc8DBNL7mJLPmrp61c7FKqzRvasUkndR",
  "key15": "2gRa9EHPM4S96mGMCgL81Z5TMZFe3tvDLsBLCYXZ9s3mdsHwrDy9BFccexVqR8r44U5aXzj8eNER8Qh393bmbrcN",
  "key16": "4Vich7F9GivGxwYGnGNTbTsPh3kndsJhKFaVPp78JfyWANJVzgRuDPFKDAL2omQxBJvSYamEyd3C5mDEaVZE4rZp",
  "key17": "3rbxvidvm8fwHsLKNYirmYsdHFDDC9jB25dTi7FeEP6b5yxdyYLjNc5im5coKH39o9QcHGpnvjmiUdSaJ8QuPiq4",
  "key18": "48TnpGtVHkGgTvDpj12Jj2Dhi3aJdftYmKML7Zsk8AvkcKLn2oDmthc6cwq3THhYhwg16AgZXtUfkfYBfZszmU2v",
  "key19": "4bhQfSiueueBmF95wjcUK3Jj2SeNbLnP2RkxpgYMTCjzS1MBqJqPZEnbCEVkxMv1SpaD6j7c2V4jZ5U4Vtc5dNyV",
  "key20": "mmR6fHCLqU2HzfPCQBwtkx9RntdHPKjZ7YEvTXnrvxe98mWXgrNUS7XgCrcGXY8JF3gwB3hbdKEyegwb5Wyh6Do",
  "key21": "5HSqfTuf54dZEZs21WMAkyFE9ZGGbpoXGT41ZP1BLurabggjnq3Rym3xFCzHr3qdPLz2BjSDToJUCqes8Yr2Xjg2",
  "key22": "5EeeutvRvqZQ3dGrkvaAoZpgwSF23dgh9c41mapdqAbL2Xi8gBJYDmLz9H7dhC941REznU14xnrDHMfk2rCd8cuV",
  "key23": "5RmUxjwxpRVta2hycLR4agV4TGrSFHW6iTwoBx1VRQEPQYJ21UZP9GVfbkWHumw56qiZUarEXK9nA97hcBeTWejS",
  "key24": "3dbXJT7yFj7uhbnua3F6ARN3WjbMQFiHSqe5GanWxYvc1urkvNfZM5i2syXSMjDqdoq4EfZv6cuyQNykJ6D9CahD",
  "key25": "3akQQonvKQSM5jyC6y1itduFFT4jvZzf1AExyWSQDubguY3zzsYRq3RqeuDeUzPx9JJXFnL2YRjziAFXmjSL3Umr",
  "key26": "3bhaRuaw7j8PWSQZK7FQc1c6DXvKMzM1JTdcSxizwQ4LdrKhTP52E14LojLVWe9pDFjd786NCFBDeZLiYxk3H11X",
  "key27": "5eXdj3oDoTXFmQdZTpWXW9How3x76bqtdDLKCdnryc4mu8gkFSh8WgsTUzNqcyfsayEv94fm2vfr2qBDgS2QPx9P",
  "key28": "DEyGcJKybCZdNQnV7idvrcJods9uC32jAhSp9QgvTJDoe6Xb2ENzLGcEKT6Nu5LQMotCWBah5z91rNqgRVwRy59",
  "key29": "Yy46HMuN2ySaQq33u8VBrLxAKDHXKEWBGD9MtSjP5oV8BHSw6UxNn24PeWyGypiZUGvrboUzBSVNkHURtoAHSVg",
  "key30": "5DL4mH8Z6AZR2cT8Dc87ZzZgNEznw6sNDpnUcWRUvjLNJDQrCHBKFTUfyu5PfALrHRMU5424EccufL7Epkfah2w3",
  "key31": "66DnrsQoNGs4RPccEdAfhtESVpSmGsvmegDgF1XfyUihARMqCUqjvQhAw6NWLsUyRXHcyTjiVf1otqqjbSJkyNNM",
  "key32": "4ybNKRRdecHrXap9qRBS9YCcfXHE2ZEzeyiKhq8S7nWVefa4cb9zqR1P4VhtWyo17vNY8PFoTmt7aFq1Scqhu8AJ",
  "key33": "YGfa8ZUsbg97FCDgv5uxqjLtGQZvm1Nh5JVbEtu3zavJn41ANZg4pxPEW4kg33kYJrjpcLkb8HVcNApjLNq3NNG",
  "key34": "5YZEChD9WL718z3byTVmyiFACe27LM3Br9wo2cGzWXtrmXX9cyZ8AkKfgDRqmWUKCD9NiBwhLdK3NjsKYaMEj8Gd",
  "key35": "2SU8RqdjtZPPNispweWpoiUcr2RairAk27rkzoSC2KKDBN4DrniH8tj7phyKTgGfT59Ji4TKWiEyF9teHbqhNzzV",
  "key36": "4Tmwm5V5XcsHiaqdbJeXKPY8zwg9iXGaAS3NVjoaa5L6GMSNuXPo7zrNAPe3qafV8eix22MFGEmLiveXhiB8pzFV",
  "key37": "4QRWP452EooKgSxMdzJDh1FgeL1fBHtBq5NhUzrhDe1sd18WsmAKMMTp2mar3eqEVCfB9XBuZNLmt7jESPqMLfiN",
  "key38": "4QkGERUnm5i6CZJ3bS1GaEnWA2UkdBci8jads7n3i7ugyDqhLg4yw3yahMuweEjYvFUA48Ksisa5m1NDgBpDoUYy",
  "key39": "RuCcUs5dhYfNNfjxB5R4QY9kuMmUziuTeyach1mQZU3hHy5jMHJULAdm4KFoCMWFzdhXFoxW9dRcnjrfoPoNyKA"
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
