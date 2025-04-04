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
    "P9tLDWoeggydf6p7uAMGLCtg3YVgcHBXKH7aVBFgtt2i9x1ZvBPWecpGHPfApbKt3P953aTRNxxMZ6Y6fgmGuhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VvzntsJeTXA7LmtZppwdCVu5LHk2JwMUjQQrithzZ4ihuQCkZpfgEXUmehy7GS42KgqatXceSrSLGgkkyKMLsTZ",
  "key1": "5YZkcxRGkvdVy44HuWUnnph5g58MLZ27r9Sai8eWt3krwRV7JBHAjhwg8rFenuP11rfax7SAz3RGF5JNAdXRuFzT",
  "key2": "3JHNWQhoZwEqTpn4dXf8PTr5HrN4cVRYJA826d5LPrF7Q5bBTcLgMz5oQAr6kmV3xn3waHiikVEH1JczNhbyb6vv",
  "key3": "3Qjucrty5nJsrnu8MUyjPsEBiRAHorZULtcdjce7JQnU91NmCqJHiJWEMveAkXLiHniwtoXvwqGkueeCC9ndkaqQ",
  "key4": "4Dmfdrgp4DKL9JhhiygxzVukghZ578WS8mASS2sqgod2nHt3iFHh1ngjRMNqYGMN4ECsniJrFZR6aYcgAFmrcCZt",
  "key5": "5To9Mzu35cfhAW27nAgBtxnMTbgWk1iynxfbKFdZo5uAa3vH4VnFNJkt54qU1ZapMYfEYtFjux98xxGtDGAfpbeb",
  "key6": "4kms2r1Wk1KouhYZgnGURHHxcRfkEngCAN2BSLcTUQT5BBY9Ni7whLujCfjKYzGTNpRC84fB2Axe31t5hUh9aAy7",
  "key7": "NP7XiUubEmFdw5FhfMEE7SwJAS7W94fR7KZ5utkqkGaU1gGsmNqZQgHgbzsFcug1WZKVDhNS8UjyVzSPbGVvAun",
  "key8": "54fzrFknvjChbBoynXoVzupX9bKwLEVRbj2SzMqiT3NsW82jte3Q6otppoJrT1NqKjBhjbjBXp5Hg1MReT5NNQHs",
  "key9": "2uuzjCy9CLcQjrM8bHzBAjzNJGUB6JZPWNBxwP8fqXzxuQvpibyUeig4VDMAYYHhtHZrdBB2KhyhsHn2DfWSiqYY",
  "key10": "RPQSG7Kar38EEUNiNXerwo9AUA9WjxYbiEPiHtbvHsmwtCUhw7xS813YEZUvDQ5MMvt2HdJFwH2ZrGVdApwMJKw",
  "key11": "4igTmCaRByRoqasz56ioevgxkeyZbea6U4Jvqt9parJ69SBesH4MPQJhZpFeiERNs69LaWNttJMumuZjyeDqUmpU",
  "key12": "2qUPC41Nh3i9X7CgesNzr7xZk7VkSsgKJzVeWL2h1vprFh98gEYidoL48VgfW9DNa14bz1kZ59rZ1zdbmwCe22jK",
  "key13": "2JREfuseK7SsaVPJa8rGMJf19N7nfw4ggQCZVPvJa9cun9CkoTUpMgwCnMHrJDDnFtNzU3u4G55bEAFRcUrbDE9A",
  "key14": "mJCg43pinm2KVEiPxYLodqCo8PizkzXxJVA9Hj2CPnbtKAxjnuTQoWDkNYySzG6poUB8435XqHFqyc8ZhXYfxUm",
  "key15": "24b6nEaYGEK6jjD66q3Qmt452c8btgJWSmCZSsWXYYATMJXePQNghBLUZapAHBRMfxDjoJfk1NimpQKziwuJUkaL",
  "key16": "2WJnFdo3MCNdgjbm92cXWmsqZrYWyqxY3j7DX2nXBY6S6kHcx7YHygS8JrtG7jXryMdz5NREEUH5o7bcp3EWFwGF",
  "key17": "2Le5LKT4BgoLC44Ko74XpejfewGhSsfm9BShKiw2fRR83tFfrDko2iysMCZnuqakVqUPdLjRbsZ3YsyRoPgw6HsU",
  "key18": "QE44mPVvUzciShBrq78ZGL7WqWQwMsDoRebZYMfgdJeVSr1vaHzt8bXFgJhnSScAUuovZAs3eAuS36k13NqQWmQ",
  "key19": "LKkpK2Nnx6YgyX9tuXfrh3FTn6f7GG6pkPG3sqVE2aVXfe3Ya5wV8CZJ5tUAGcp1NdHwE2bAN7ZSVbvCN6VBqvo",
  "key20": "296geEVuiKTwsXW7ZSovGqQRznB1ibHXjH5W7qsgDVFMNZAmmkSCr8ADBXToasSpedqEGGgXVbFpD78mcZwh5hZ3",
  "key21": "5En3gDLBd3j6rQuz8fwkewDLbMDghYvJZGkYx4AJwrNG8zBU9KmM2XT6yBCskJ3JF1MNdbmFPMjVEzMM2XG4qxBc",
  "key22": "4w9haJr9G6rLED7MKAx9wWfkyHRvVtxuFvgZnDPWg13VZMzi9WL3xCbSs21BV5X4bds71rzncNtdrRwQBbJCN9hw",
  "key23": "9NT9Tq9JkRZXc9WKNLswByozdXKq4mNChhrWxDpJahvKThdgwNowWatTSJvQ4n6FzqNGnofZC2Dfk7VF7rwg2vF",
  "key24": "4SrFNRQNwn4bn3d6YQgtCa947w2XKansoRyg7pLCdhb4sxZe3V2rjq2AfiUEphMp9Q5BgixyYqe4EvUjFXrAbYKm",
  "key25": "5g8gJpcdQzmaMBxp7SC4JX6SHjk3fhtgToqTj8zBxwMeJmGUqdTWqfur4AWXzHWs8EuDnS2EA5uCwM7WniHFGuF3",
  "key26": "4i1AQrPX383Btb5UfK32Zm9RFa59UWyTXMdNPsWU3uYsqMdCWAm9qmumpxzNoUe5rjFaGJedqdgcUgtdgJtpYUzx",
  "key27": "3SUPMyNAmspMr64vhqSKjQG1DiUJorkNDBPSbk3XCAfwBVFVP4PHVHC8hVmyqNreKFgZp9RYWd3z3fFMj1wVoYch",
  "key28": "3ZLXYB6PgUqQBLHu1EUUgJgrDi4J1sALTqt9Y8W2n5bLAuodPD6mbRwAvAHHkJLfWSpYGdurQ8HDaYAEQedPnA39",
  "key29": "L14eaiVpLhV6SEAajdujCJgCRSaSKx1RYWT4cj6NTjDfTgbPjbisArni7diWgruxpRwDppDKou1qsyaiBrpoX4S",
  "key30": "3CWdYMxzR51ukvBq41jpsd2sEUpJiXm6jGc9dQev7EoeKdhpYdUU5mcH9oWpaSNpp3PgXMy5EPgfCVx6njnUk5gL",
  "key31": "3u5SyFPJLLdb83M5DW5mfLMcAghuGQ7Y721HD4dP1BsfHEkMSYXUjyhs6Kdk9tSRAq1oAV53hHfRGg8cXnX5BTf3"
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
