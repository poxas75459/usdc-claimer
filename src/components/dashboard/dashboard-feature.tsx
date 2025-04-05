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
    "wXEXfvK3heJApnbiPaM2CitrEEG5c1E7DFoSymVKfXsw4WnmsPtKrEQJ6Zrk9MV8WdXt5o76uE4EgRAZkFAHLiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qbHSQMiW56rPqGsga4gqj1QfFQm2QgQ1L6JQ4b8pbEWN5HmS5JJAvgG9RepayEovUzYDSMsVa2xeqkXEriG2qVB",
  "key1": "2SYpctSUmN5bJEby5Ne4b9m2b8uirk4rgdcp231qo5LKNU1cfUsi8Q3BmuizDhTkYtojjRvqBHu6bb8RzHrVad8L",
  "key2": "35inFWDuXHUUCXGkfSTcJfz4aMXcJM1YKDSQr3zwCfAjzQQHRRZXfpw4Uat3bCXYfPiuue6pUum8uMRuEn873aqu",
  "key3": "4aPwyDJRuQVTPgztCkbRXues5CagirKp3WU1ocxSgFH64UArcXZv6CdwSCXPYkrQpkmQ5gzzDbTbyd4wBsdt4aLb",
  "key4": "3QQfWx5ePRiiwGALPsq4yj3NMUBkFaQqzqaJYhLAXxra9TYKQKkPFJdbVARCsTw1oQhQXnbW2XyeegkaCwsWYGcx",
  "key5": "5UEYz4GvYTpRsAmKoSY3yWvhnkw5yBeWHCvkRocFhckams1bbp62LZp6QQVkW23uAkQxhSW546TNhvKMAjAS6RSB",
  "key6": "1KXS9XabNJGx6ackYH23vp9w23Hk6L4yMwo7pDcGoqaLQtWJS5Ywv4RZ7x9WN4La4LEWCrPehyD9dxwrzNDuTTS",
  "key7": "2UUcHyAFGWrhiF8mFxevxZMC5PYmHG8Qab2VkeQ3nKvP6ZydkpHamvkGu1VNBqK4RsTQWpKn5dMfDxwF4NPL966V",
  "key8": "2SLf2ua4PVGWu8phwrw18M3MbPHmofcwr5eTvZ6g4Wbsz2zU6eoUvdiWc4yZXaDjj4sS1HfyJTczSwKJjSTmGSQw",
  "key9": "2PbMCrdZbrfSbuTepfXrdr1woF8DNMoby2viUkSxRYpuWBUitUNhCsorrMVjcdBqd3ub7RNU7jRVtDNMEYmQYKnV",
  "key10": "2JR9rpgJfYWh6UN9w9A1twKtPptZao4GNhkb369bZnYRGg15TDDa1PPfKRqfV7HudRjMK3RcEqTUcZPRQCaRi4BD",
  "key11": "538Pjs6UTyBJ52obQdLtSi5Sxjnp9hCNViuh7x9XLkTKVs97GHDEwAWiKNB5mwJtHX8TjXRc7m4FimuixeKmrAji",
  "key12": "5VRxZTpcxgUSH8pz8npNppVJ2rvUq6bj4ypxorGvsUpEtrmnhiFp7wjgB8XMjmNEL2Dq1PQDMkKH2yotZKqmYq46",
  "key13": "63mJYW3dfr9WP8ND83CRLHkvy59jt44ySbE25jTf4GEFNXPgS256q2EaSjXa3ZBTX7nfd5j3Ay1yeQBjYBgV7HBX",
  "key14": "44F2yS5Tpf4spVs4k8qsd2PcaszXdqRpExKG2BnGxJCaK9ApUBdBKt7zT7tUHhBoN7nQy6opJCqBFAR4UVNHZNNg",
  "key15": "3fe8peXaqDc7zZ5HWAA6NomQy1CWeRLMeDHMRDqT3xX3zW56kn1KCAnsLMVdC5zjkaTPN8V8DvNebHhkqT8gYXhf",
  "key16": "2XdwpBkgskcLwWCiP9PRoxNAEQXAeEXMcc2vSQM8QPqrbhMAgqHFJSZQqoMh1Fh9n1s1ADHGaFixAaeVs5orYqeW",
  "key17": "PKsdbuwv82cvLb4ivDQFC2SKTEAYPR31TAU1xo2zZXGUuMQMktsDFwdCqrLifULN87FvJFPQ4RSLPG9yJ15bsp1",
  "key18": "3XF6JDGdAEm7wrGKTA3dQiEgDdE7uGKwadep8TuhkKTLrmYo4WwSFbqhRNgdDDBsG3xxXUuoaS25bWsLjY5prF7M",
  "key19": "2tAdDQhzvjSybeJdJuuNQdMiAwsp3YXHhW7qAxUMUQEY9bsyegvm6eQaxtvVFD9N4KTE9b3eTdSVWhC7fgUrGPzk",
  "key20": "2phKM2cRBPJY2dtAcm9of2Y7FGXW2CW6qNctxEZAcvQZnpyAirLDiPD93JB5ExP6EvKhFGWAUKMUHoGcB1rz4dAH",
  "key21": "9zA8oG2TYSJK4GFn8SBLSoctoN73HuEwEUAXVNK5EvGAjuJtoB2jfGdf8saTJ5hpEJ4LzfU2vXEqoY2he3ezycC",
  "key22": "15ap2om8Zwhg1mUAiewhHqCRrqA2YYAd6ERetaTci5sfhDG1jedRfGBrikQYkuwkzSctbeMgbcBgsKkd39cPLXq",
  "key23": "62eN6iUq7NvSoEFfZv6oBKJ3i2nodBXB5puZEVXkKQBuEtQoRjZiJoaK63zZczAi1CmknmGsELCWJCeGEM4x3L1o",
  "key24": "5UJNLawrQZiHxBU59Zqg1rVKjSjWkqhcLAk9SVkU1M1XU3P2H3GEKUgXcBGnLxpKywhqREDKiEWk9yRJVtpVttGo",
  "key25": "4aEhs7VRomxArF8yF8xcC1XbnEawadffYUP1VUDpNi7gBXJNScVaBCw4AFRfLaE69JmsnHxdGNdYCKtksnBAL8zt",
  "key26": "2m65Cn6EZq2rFLKbpE1Vc8GdYvnYQ6bwZGaHvNWoFwDotjpnN8NtiEKyaP3KPh7b9BybjHwNTQuTqfyUxwsCCeCH",
  "key27": "wxBrbqoSCQcgY8iU5ueWyHc4MAYBhKxkx7SfqsdRdVwS9e7Mgo5nS2t1C8byfPSDCH6yrGXvM3J8LbhL5kfSgtX",
  "key28": "61w3gHxKCzUpAAMPSLhJx6pwHeSS7HwYNwJQAgY5PjfUnSVZaStoGmrT6NdjkHgWYg5EpzNQMS67uUPQ2RZxgqfH",
  "key29": "63u4k7nryi4HeYMordPYA6FLkG7mya6eczMZQYugUzZjpHkPpEvXe3bfGfXMzssfHszmtYngE2WYahpttqBLVGs4",
  "key30": "9FHvZXdRwDKufwLfMRDXVb9pLC5DeYEvgsmUjZ1UTBUuJMzp5eHJofDt6HXeZdA7fDQMEbteQqQabHD1LdVhGQa",
  "key31": "2feSLKaUCzEuhXWpLozyW5jKPsR6rYk3RwTh8vywS6isXJw7TpzUsi7cFL57VKEyqkPuptQ8DaEWHUPa8ckSmPus",
  "key32": "2opzttcJSiqBMBFqKZwQPyUkNsqu86cujh33ZLdutjgiMzbaKzBvhsDff5BUou8qsPq6HJAnMjPQ9HKC9tEdi1ST",
  "key33": "5wjpvagrTnXUmbxKDs7S1BCWossdhQaFc2oJGxkQGEANHiqX2ePKTEK1QDccX9EoUww1kuRzaMeoFy3VzBkErQMG",
  "key34": "4XtBRcmn4oKMXs1cau9F6scQoPCiEKCswsajTn2QZYNa3bLy2Xk4SqY5iisquWkxXJ2Pm73PftSE84JNXSzCLotp",
  "key35": "3Nr59GGajq8VsRw4w5ct3WYkcocV7L41sUCjhd8wwV3vETUKpDPGi9ezNvmzvQ1BDP3hGzafgbbcRqq6iKB3kuBx",
  "key36": "F2f5o1zVo38QT435o1UtKqcew7WaKzmVD381ePjJTNA3TPo1tnmeq3s9rUnjJx2owue6aeeZ8Af8bhFQQLYVSRg",
  "key37": "3dJPDMF5KYxts5ptrJdGkbzwZfTH15ba5Mka65AZPHyzSAhFykL1azSRZ1n3ZosukLPcmzpTBQVas8t8y3DcydU3",
  "key38": "5ZacxacWKcJLZtqgkoCPxoxhTWcMJU8qGjAThp9jTfgqzJohKwXb2ZfqWQAaxNLnBezb3anWYVo2BnhzqbHYNKaV",
  "key39": "3wsjyaoy8F6Uuu6Cz5eYCCDKisYiLFSWuC48cgiMfWoPAqUvNje3QygNucDmhjPG818tz56BmnwSNCxS5hZL7sUH",
  "key40": "yHWKvZWwJX8XmbXhbE56FDABWsLU45vkEjGSgUufX4YTgQa5XsS35LikpjWk9Qbixd2yvcACK4oYvpL9B5Dw6jV",
  "key41": "27oeEBj3GGWHmskF1UYvcoHFdRbDjdS45f8t4Ge15ef9iuHs6KB7uB6Qa7DgFabwmCMGD61KexEKkoMERHfduj5p",
  "key42": "2KneM3HdkyV9RH3dWsf1yQkYMFJ2D8htrHZQJwYi2E4nMbCt62ETtWHdYBtfpg3evrmv17gr6xzd1PPUQAgJhpJB",
  "key43": "5UftGFf84ASwj2Pjz4b145vwoCHtWRzt8dxzJanF6jcdNXD4r8mpBCbxZr8yVc99ZKC5DZY8XRMidD4GsABGHSo3",
  "key44": "2WzfHnY5zcd2c6M8Qz1qhUrwkJUXUTSevfTYZTmv5iuKcMc9avohZFxvXf8gTRy7zMuFXqTKqkQm5KpmnSVkCqRQ",
  "key45": "4pcbGVad7cHM5qJcxKFkMvc1RuuZhFykWEr828PzZ2sdHBZmENEYEkfXdc4pdRXS7StRhNXXvbVxHceQ7VW6mXzF",
  "key46": "22JVM5QDduQdcXQRtx1SV6MbN7TJcsBVDxjukcfn4ogWswL8Ydpcxht2negA4sHKVmogdgivseoaLbWGNTvEHyuG",
  "key47": "4oLb2qo9zctjGrJrDZyHPEvzG2z23HXD4C5ZFhxUHPcexReoqVALxd5XRGGAAhNzhA4enTGq7VErzt59Vre3rsuP",
  "key48": "49XmBxoUeBkqT3fzudjZYRDfXurjYEwjrx1nmWftoDYXKfh89Wz6NWfD8DRpTWxXBUowcTmuVn4H3m4gH3wgi1sr",
  "key49": "pVrNamdoRWMxh16CV6VrLVXGWAcnRXpEtU3GYmZ6svR67d14wSLD2qj2A3dyYNN3wuc1NkRygetRHKC39RaNW9G"
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
