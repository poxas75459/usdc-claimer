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
    "55jjC4N9mi4983MX9V3a2cLx7h4UqsSi19p9G3XKwETL6VnDUCvqVHbB4oPCgptdW12vNEYaCQD6jR5YhBMhCyef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5JSfVuUvymL64zqxU366KDvHQSSs3wLuBib8ByJaGiLnzA9WkacqyTH2WNM4bGSVJ7aRGEW2iBKZsMiDoA21kU",
  "key1": "5oahactnJybq6Pio5HvwUYJ9S4SRWZJYSZGnrQRFjzsei7xvqLm2RCmb52hizYcSnYL7BvWh6VLuN2RWVp8XR2pm",
  "key2": "3MDi48NgqQC6v7NYT6JoyanTmSM72cyWcHn7naQGB8MLXrqsLfdWp7zWJ9jyQUbhReVYPYyhd3ZvMmvzVkDA8hyK",
  "key3": "2w7FYgtgYo6ACyTYdG6E1J72RgH79rNMmoTQtPt7c3u6PmkyeeDK8XYLYPxMHo2ts1cYziupjYmX2WHz1688KMEU",
  "key4": "5rDhJjUiDRcdXF11PoyNiG1pt26uDx8CoDoJBMhuNQmm7k9sgWgkmzdSuBjv1A2zVACj7oZNL8tuZq227gzPj4zd",
  "key5": "3eHTRrhJRCx1dURwTwPquCoWrkdD6FDstJ8GVpGPXcUqRi3CYVbDbK1rFLWpro7dPzyD2H9diAh5FJb9C7XEsWQo",
  "key6": "3LGq3vMcqvfpHLAu37hPkG1W4hTsky9ewXnVuaCgfdjvoCDjkApKy28cWTpQb81DX7kCfcnL27DtW4DPxFknGmvD",
  "key7": "32NqDGSmekAVDpAZw6ysQG3HcjToNpNfAQwSyVnTPg2qKLP7p9rJTdUra8NBJDWn13tXLdCEWjnescPegD81Qfxr",
  "key8": "4VnnTRacfvMQWiHQnFindp5qnaetsQPbZSuzbYgh6YqztKLDwZBJiQDZfVuBaznokp3uiyQAqiM5oTC3AHgp7AUn",
  "key9": "2JFgaTFnLMhTc99jNwS9LUoU34F6Fo7p4FaT6c4tQLYwpsJgjaFmhDeqpcM1Gg539wWrU6NG2gH79U9Kad4KeVzp",
  "key10": "49ywGsH5S5YsvJ5CmeGdzV2NxUCn73ixQt3qeTfA975oGEpUnKNadcLqtTDzR3yz17VFJv82pU7t9Xo5DuqVUYYm",
  "key11": "2HfSbv8ZKhBzoG6WhuL9MCvj2PKT8DZLZMWi9zzQHJeRAgAwgMkpoPJhskouUqhbDUjmiH5LUCdAJX2trbUc8m7w",
  "key12": "2DFQnic41NowbERYa9Lrqw9RsWkFZBHw94KmTZ7r47ZhG4xZdRPSCTnYtJUjXRSeFxrEco1cPBKUu5t6C3w2H9qA",
  "key13": "28vinVWpLghGBD75Fdn2izsMNdxLRrbH43DdLa14GPtMVucdySECfzd9XmxGjLZMpS3u2GPZ375YzSpbcoJ6JAHn",
  "key14": "4ai73xobjoWNpS21ozrNkYFNG8PzWBe9cxVdK4vdwmCkwdmyFXYaPL648Y9TeCD6YR1wokWW1mxSCqoHuhNq21qE",
  "key15": "4PogbBTcvFNoychGr1scWkJmUFqbDcNoJ7ZMQfdPLQwphhFs7zigxobUV8g6FasjCPLSjtj4LKd7Bd2qcAgEKG1t",
  "key16": "3P4zXonCJNwf8nSUmFHeERP98YLbYuqFZCd9hWCRmiMCRb8a2Dj6Jd9kF8sEVBucK1i2WxTqKTFRc59CeBmkLk8D",
  "key17": "4N6dX1QYwwBHAWGLvJ2NRjHp3jKqz43v6ixCu3bUo8jGkW8UvgJjHBFzEyFWk6nzkqftR1tvc9ddQc2J82xEmMkX",
  "key18": "4AL3c4NUxy81nmgnEwTsrPmamvd7rUm2GUJEQBSEXMvtKhRJX8f55DgxcHgr5m7MiVXXW97PDYTJYgz3TVvAAp2Q",
  "key19": "52V7NY3ZfeGJZih6CNfBqhdqCENxELCmbvABUS7uFtfEmwSwPpWSHQdANx2V9vzw77jvsvghc81ewGBmyZGWudUS",
  "key20": "ujnzFV2gjZU7YodztVYHtyYRQxSmUBUvNsJyGkB9yqssvhvnZyJCEUUDMx3ngEgnkR3XfxQ3sQPi5atNTcYvdUf",
  "key21": "52DD3Ad25CsyLJiHbxV5eiezpCMDctECHsGXNHinMVLXhQrNNUwgYT3fVsoER3GjYwq4SFbEK23eD8KSZ85yRHDJ",
  "key22": "MjkzsvX7o1131zEErUZ3e2ZVmj8tAKHx4iMSsgBBF6cBnhURF87gMLaJfsLzdRgPZkv48pFHQmk21wRR9N4PwtB",
  "key23": "4JbtUJEL4cVkE5hLKDm77sJjqQqx25BNLSecRwzVvi447Tyi3sf85CE6fxFA2mGfR8nbpTtaPgXeGVe9zmRpjwXW",
  "key24": "5Z2PpozBeEB1ytqqSV5762CcFjXxeZF2J4VZ9yU2rgUWvJCqUpn7sMjsnWkCtwYEC7UWBCcBmsKmmdChApjuvFNt",
  "key25": "4gf69BLzM5UUZfoCHGTKfKxp2iDi1QuaG2TvMAoCEtJ7XTGGUi8JeLYp7Xb9ezRc4GMowELMYCWVvaw4GSbipDyH",
  "key26": "2ThW5xh7WCSPHVirhDSW3JTm9ZqmYmisbqNsecUzdqJU3wJ7UKAeGsj3PZHPDpJZcokMdEcNXv5bDWXVwB8PAKBe",
  "key27": "5Xbf9fz72i7xLLowfA1yrBQpEsiJ9YVmJjXad4MA761ab9hhGzRbpuvEEeDdSQUDLtreZShDsQ13aYcawTMxqgHX",
  "key28": "4MnqGprCe2NggE4hbj7HuwPsxztHHTS5VsEKznZSkEejRE1exXEHJwcD2QyL2Y2aJpDxqzHsPY7LL1pm87XudBsC",
  "key29": "4URra85xLqc1jpnyWKSjgi5YfVV3gakYxyExTDT4eqhBk9aZhNfkgSvPBBeVq9kcxsZt82pUWr1qEQnPWm8ex9wJ",
  "key30": "3Pkaz7a5Q7XrMbpXMG8hYB4zrnF6jw8TYMEHdca3cNtmi5KBbESJFiaD9ypBb44cmNU9zUTzGYQe3xRhFCJEVgkB",
  "key31": "2YGz6kHinzviJvpyHNUjd282Pb19np35LnCiA44dQERmnBRZweJ1C18HsfuM2xhfpAPRpaJPoM218f1dE1Ef1rJY",
  "key32": "2y45gKxqRrDtCo69MemBBoS4HiSQFoc4VBZtC9Mo5WMVLfHrMxh28XSFCsAohqFkPxR1SS8bMoktu6MrvAqupsY1"
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
