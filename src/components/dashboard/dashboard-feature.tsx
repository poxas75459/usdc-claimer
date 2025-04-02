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
    "3BiTcyuEC5pDcy17npdBcNERnh94PosVhxQ9ggJF8KyrVGrsCUe5h7uMpw81emncfCRivCmWzWsQYL3kezgNjCRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8AViGFBTQwqfT5R72WXEenSYHuiRvWZeeDqkdsfwobhXHzWn2zVB93srjsb1EWcQyfmaKiUgMtfQTae25eUDy2",
  "key1": "4zkQsqN1UHQDqB6RxYigZtwanGvAKNKMtC2JxMwYmnVcBvortQXUyjvESD77FR4fBce4cDJaJi9Y8PM16enN9yhp",
  "key2": "Ab5yNTqoHzzDh3ywNhRnGihJRvePz4JRQCPaGYfTTB68kCn6bnQ3pzSqUdZnDoC6B2S4jS56Q77hKmRyzWWLaXx",
  "key3": "4nYh6UqbN263sZ3D9FozDHNa12q6uKnSifPPVaFXG4B8DPLZdT6HNw1wsR6yiey679jaEGJ3s6uEp5VwREoyFpyq",
  "key4": "2m9tkMAAyULwPGnYF8aCRfFyduo8W2DV96Q6dam1dz6uo6AT2kJcVhgbMPFsBiQgg6zT512vTsaLJGuE6wPhtuu6",
  "key5": "5st9TKM7fHLFLvSWkGn2VpL7D8KxvhFABqx5ycFTMPm2RpnidLHgwKU28W1JxpkjQR9yWhxsuiWtFv7Mav4wcR9E",
  "key6": "5VKXUEJQfaGXH6CR2QuqjrtwoqnUhR8UUurhmHGHCtpkaeod14vai7BYgCDogDXX614PcJnQNdiNMcKvq5U77KZm",
  "key7": "yEDxYohnMBzttqiVrPNHJz2DYCJ6FkVRQc25KQmRQJ9v4VKfVd3UWnY1XKXGucrHmfe8sxK26DBQhhbbhacuzkG",
  "key8": "4uk9CtWRdStCv5cTM34uqMZ2oybTE2Q33j6f54hnEK5APTh6Tr1H7koHwYjw9v7AkX2DPUQmUWoHgYc7KxyNDN8G",
  "key9": "2Cydpo6c96SeZNxRMVP1D6KxSeaeFqCCBz3pieAXsr5GDuiEbSRofTvGQWefCVQu5KBx8ZBBwB5hm9BFsenPoQgZ",
  "key10": "nimqepSsbYS1wxtvMXYX1ipwPj97agUKmnH7mLfdcGR41QyjrfFYw6AQBdUkTpvLTAoq6tjmXcWif6A4rxELy9U",
  "key11": "5UzGAG7aDkThAXQgsjNjSCVJft54FP8GAXivn12TyJWKfDJYqNpVoTvwCMm4SmsxrVwckHCXtExLYbwmh38wVH2w",
  "key12": "3MQTkg7r3A8KSAfespkocze5X8HN263sntag84xEuRBfN1tkkKjGHN5pSYC8i74cfRpLw4Sm8oSTfGL5R5MsBxoC",
  "key13": "3bHakbsn3enQsxCVTnBuaPqZEcBSNdCLRjvVD9oZMsT2a2FtV6WenCYqr4trvP7TDDzhB7bKwdVya8mgSrv3APCY",
  "key14": "2BSR3tyJYGzyTLHypieZDfYkdB1MujLD9BkSBxzYCgWLfFM1CwwHWPCPQFSVqzJU5yVRumLshrryhaGfLaddYuzT",
  "key15": "58ekM2FP2AUUS3pgHCXMvftxVkdwpxeP6hic7jTRn83QvDz6jb5jgZqfz4fyUAQj7pB5jEPvmV11YCbs7g13bxUU",
  "key16": "3oaBt9QRfyxCFjFbL2eTf9LobxzMPSy2cYcpzVR3NGrdYvgFPxhQsDynJEHYkXUrtAnfVmKMEk1ziFYtBPnE5b6Y",
  "key17": "4zFzUjAVzJ6SPJw8ttEbN6Vx1h1iWhpoovu6NKckF6xrV4xyCN8sbErw54GMF54Hz3ZHCZowisYAPxBQmNunLhZB",
  "key18": "Hhhk2MwaahDgjfDkavCMSk559hk4mFVxmZfazRp8s9xxd56cFWm8j9ngtQmbAc486JTjusXtTzqmy1GTb4rkENf",
  "key19": "JAQjceD71c43VCTGk7G1j6dvEBE2qmHKHDywR59NffN6XeWHBARKP3W49cVpwJCKWz5xmpRB9FVc4HLFZpUiiqE",
  "key20": "4ujBS3955J55aMCaypVfpP1guX5pGCCii3DdGewGxVjeSwQNEAMT5XZ6FmZcwC96kJzv9vjhARweLXC9egTwKVE4",
  "key21": "2QJcZtfFeED7F4Qw9hJ3Ktuym95N48jeUMA3wEZNgn4L2SASMUCHXFFJgrovQLbKAziCgu3UevVV4qaLk5KAKhzR",
  "key22": "YXxj6kpYHmXekaEWQjycQBQR35YSqyJE9upQH7CMUv3NBbmsJbE7b82ukzCif1L5ymMYcJkNmYmHwuSTs4e9Rvn",
  "key23": "jATgXZFhHPxUiyDhxPMJivnsrrrZpqSAu7VwaoZctBeqYFcaE7r8oE29z5SzwpQEoDnVzKyETP947sECCaZRuPn",
  "key24": "SFZiWbUcpVTzNvMA7TXY4EuPepFDA8e54Eydkn3P3aKiYGqjesW6y7Ak3hffVJfQMamJ2sJ1B5wwzPj3hisxfZ9",
  "key25": "5FbwMh9tXtKf7CiZvUTAbsieWvaaBHyqUs88vPh7ix1r1z587f1bgwNLJLvLui5qC99bbH2sC8LRnGWSvUmzCBUB",
  "key26": "PK5z1RSeDFEcvar5HBCgf5mir9D44SkWYVdHZiBc3rm8cjJ5niLKxiRdbSfjbQ1QBFz9frjiWNVkwUAXLmSYLYF",
  "key27": "4FoouikihqNQXtoyXRMCKSRcoczyj7uJkLj9ZcxJDBGo9wFQQydMEF7L3rbiofdQb3zfwCSmCjAm4gYpJn17aCgq",
  "key28": "343N71NzPo2Z7eiRT2z2EhN26Vk9XWPEPMMhjyYs7ra8tTEmYcrTCXGmyxx3YhnSre2znnBCqLNmzKuXHdrRVzLE",
  "key29": "xmLnw6hXJ2VDKpmFkpQ58ngotvJNZa9an6f5J6VYctBGroGEY7p69MenCK2eL4fmH3hqRjLN5DcViNVB8pcfjW3",
  "key30": "5AJBMGHca7azXKAfPCTnxDQg6JokRFoZLHzqenQGqiBaize254w758P1kSeUXGYydSGHN5qXZRbiTgjYiXcLqzZy",
  "key31": "43VCEfqfUZJhsC1w4JZTdwyraSN23EEijpmDcAesVA56S37VEToT66m9eZMVPmMuAYLJHTbXUF4dSXg777NCLAYs",
  "key32": "2dpJaavThZs8Cxfix4qvB4cHqCADKQfmRzCk8r8pEnFzsRtegafGpM4f971qX8GK4oxFXPqTp5vEQhjJwAGENePN",
  "key33": "uJhkgqNitnG4a7e9XHwLAZkq3X2mzcwB9pmyzLc5LgApkaPbLrN5avvgcWykDLwvFAS8wD1yVCuUCWLP4LcW2sR",
  "key34": "3MktQb9ax3nMY7B95uYCi3o9st7hWur8WmQ7kWoYrTv8yPohYyPMELUK2fERzcDp5g5jzvufwgsHkNhhbWCkQGxE",
  "key35": "27M5wQgwbi47b52k8oVbkkP4zRTC2ikVM9DWoG6aMRYcuiKC7HcJUDEbKdzHVYXK5x1nL7JobZsU4MUQjzHvbjST",
  "key36": "3sj8U22kM5iWatzQorMRLShYbvXwaaKX69wDgCTm5cWwwzzPVVFQNYcUob5BDeDfMsXLzPv6XUwwjP7pLWbTMQJP",
  "key37": "5HDjnVs7KrqcMBUSdvVtcEQeCEiGS3VDABoLyH9CENuvbfFMFw4MfbVFr7vC4p2NK6NcU89SsEeGdFD2H4NJ5NJu",
  "key38": "LUjq3hvH5HPDn8FYQnybK9reobabtP5QesnZXnMnLuiavYwxZadtddDM6W6ZqjsH13C3ZQ2PSCmg2qxsH8YvvWX",
  "key39": "4LckgHVMGWU5uWPsFqR44DR2QAdc9sF57kwoGaGuGMryGL647hZtrxv5qtxjgMZRv91GCgDoWtCg2uiNCT6VchaB",
  "key40": "MtgSMJuUANhicE1M7afJFejZUNuGTeJRkLNi3dsUoemvko2KYEK7B7c86kJFJqotVVXPUNY6ro5aNQFfqKFyZro",
  "key41": "5gi3mgWM3XmsPEg1UQANvJQexALayScUhibpzwxfrKDaxjzfqNM1vhc5h5NpsrBzhoAGpZTexwB2ReygTPHHUaem"
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
