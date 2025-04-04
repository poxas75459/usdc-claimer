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
    "2XmyiTuFdKsncdPzbKoZFDQtuVBtiFTg1HiM5qo4YzFv6feX1n3nJwGeL29qLipj32kbAvKUqQZxS9hAtYs1hHCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MfckaUBxMrHaSzd8HjUw9srMJg4eRKscViHuwHkNKtMgiipzmYWF4Kv2qtWdkSWT1b41pLBcLP4Njctr7uS76Bd",
  "key1": "4NSqdVp4kozRC5Zqgr6igXdAhz2PFLKkbhK5WkMxJHoVuFuUeyRfpFZYjnWMVVgZqh4Sd6kmexDKPP1D6M12kir6",
  "key2": "2wPc64jVvHvg1nuQTmKKJfvoBBHqzKTLw8bXJNtR8psKizcZSjvnfvAPxmSkBBXQhc3ibvqTpUtA9yqzn3td6avW",
  "key3": "3ScDv3yGuSqKyQTfW8tpszcaMnJsfeeSCF6sfS8DPXTYZR8BZ282CdqAULntyL8vFn7fF2E2KkooMZ5WvnE8GmD7",
  "key4": "3xTJDhQURTQz8QSzno9KdJQ1Hb3xu9YXzBjkph76wPYzHTWMBvxMeVybgimcTTwt8i9YBLoJ83FmJMZPkvxC73zh",
  "key5": "5mQy5TfGVxgLy8ni1oyMpY7FvPds19NE6L8jPYiRiRLHbpbA5cYYkdh3RWQv1oPwdKQaAAHkQkjD2VwEazEQtCj8",
  "key6": "4tXgVuNBwA2cKUCD3mKwcUp3URmYiWrFq88WpV1hpytnB411wx5ENgUCBfnEXfVzx8CBdzwwe6HvVoDnNtALwWkB",
  "key7": "5NU2sn2wedNZmYyPDXTvjEnjjHtzuue1xgFNZfSWBHDWvS2AW1Vvyfdhtt7pd3viVX2kFF9oSZ5mmNZywyYDaX26",
  "key8": "95BzvmNFxL7Hv8eQx7J8d3pjZfiPwavkyduQztYP97p7jYVu6DSP8KrHf4zcrwcePePaA5GBgx8ZK4hzCzNoDpn",
  "key9": "41SLXajQYBX23N6PSSFhNrBU7xHqSpLGqqZkVUXoG9D7H7ay9LK7MUaAeRvPtW9ZJTut28KaoZKh33Xv8qb9pGND",
  "key10": "2AUTSTWvfekXoMQpVULQvUeN2dBFfJwjeCLBoMvX3UwwBYA9mm6crUBAxG7xAD3eA24gwJyiDpLmkeirnKKf9pVe",
  "key11": "3kEBFcRBURPTwgHeEMCsyCrjpFbC4ivqjswcgVzU5FPeFPpUVKFPQXw7vSRybaH4FmRnKvctXnM9HqQ2yg67wpMa",
  "key12": "2ZgrPM3DRNAZwJpZbC61rR786Bvu7JHnQBy3czFpn2z3KghNGGxxZ1zAnuG7AFiCKJwDC1hwWmyotRwaiNzvd8vi",
  "key13": "4eKYQLXghyPFhjeM4YbuiK4oepRVtCVPCbMhqqbKv9TCXFqgpGyEh7HZumACXTK2qDviNgMPXYGUFo2PEBf6F95z",
  "key14": "4cfxQ2XKoV5Mw9Aq6TE8skSzRXosdQkRNMB9mWUAjsnA7JsAk2ZHwdXx8iYf9CCKoDkqwpeHbxVGZcPo2GDvfTGV",
  "key15": "5UfBzRNExFmM2KPEKzH7ioaF9g3pwuqxGLgeXEojNaXyCMoZauKA9z1NpoPJBnmLEruKYwxPmBhYBA6EqbFyqTvE",
  "key16": "3q8JiLvnRyzdfCdy6G2fVSajzStufQ4fqLenh22XDcUuny5j7ag9iqCZyr6q3h8z6LpzJhPtC4dJb7YMHZHHYuGD",
  "key17": "zL3P4aq3urpqg2Bv39YNBRcjHk9RzU56tnNa87xp3DSY8ACt1RHZifEUgW7xnLcyfEQCGR9tdhzzeoMxG94X7kN",
  "key18": "2QkcbRYG5JWp81Zi9fBgjgUDcKb94TYnKdqGwc7EU8znr6Ujwu8r7db5dKhr75s8XKWa6BfR1unMnsGLt9CvBqyu",
  "key19": "3cJ2n7shXVWoZcrHpkmGLWeeLmWWhJo6vB8mgQHEfoXWVHHFAHa6VwWRFhZdM5uffzCsQxA1QXEcpkcmZSr21Xv3",
  "key20": "UyLVFqbvtB3GNMuzUygWwKggi1cTcxUkeck3n7w2Hx6HuGPb8mRK3mbRHcc45eVe5SaTyAXrmzW2q9oZ8yDABSB",
  "key21": "tuYnXAr2kfJWJJfsXVviEst6MtcmxL4aCGT1TvqysZQ7RsdPfb8Bpppd9nU4Px7cvib5GcRqKrNBz1aQK16zQHx",
  "key22": "3B5yEemTC4vKpbj3u1EKBPxcU3hnb3tz98MVKyt7mMFe83vm1zC6euaFfirfUUen4jou1VkHCQMmLW3XzhqbjEqa",
  "key23": "3Tk3edjUEMpaZY49WYiiPgVARGzVM5FRPhKSyDbt3ZTaDqo7BuppsUmMQEoF2qr79LmaR9KkpEYEvbRbGrZSM5Dm",
  "key24": "K6L7G4Ckf1kM3GNCZxX1KWSc7WsC3UvVA7gbM9NrsT1YxgUPYFhmT7mPoTdrz4noXYB8fGkh2uZxuTCdSfA3WJP",
  "key25": "NKG9VjsXcBTwcrQLHSHWit1hKMy622TJhRqjN5M8TMhpSdoUhfbzVM63Q3qahcjnpPDsMBDosSYBDPBXWEbrrBU",
  "key26": "5dSovvoC2DVSRuujbFUDD3pxLV7LiKcwwm9xX8e3fuS3A5P5CKeQyLJKwh1dJ6QdGHNRrVXx81UaUwdPWLN4xVU5",
  "key27": "kkHUDGYo5W6Cs7DvjHGFbSmAnFKfy1RP1NUMkmigYGYhSz8aES13J8F6D3NVBx6EY18f8xpLiSU3428h8yZc5Zu",
  "key28": "5JsGx76K4qBzt2oQPwb5kN9Z1RnnwXNBU87f1TVM3bKjvXaPbu3VQuPGGTAB2u6SrvAL4TKPxHk5J2htNBxGFXEx",
  "key29": "2kp7TyXiBJCffzgWmiYb9TgMHVLzUC84rUzPFS2nwS5TucFEtyyKCUgLmju6hJwPB9ohMNg32CqJbLNoG5sKSswV"
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
