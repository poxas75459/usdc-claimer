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
    "5qVGsVemCvXfhZ9Afv5bVZLQd5f7AnLFedGd1typcu5HafuDckAi71n8YLARHCPRYLVwutFHcJqCWvgKMYcN7Zpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qFqqLnSbPPM1fjJgdhRe3pBaHdW1UCUhYPWkHxBeGQuyAjVVCKYZpfVohwQT7z1YriZC5cpAmUGA9jWhLXLGSVK",
  "key1": "3MzRKhip7J3u2fGwabM4JD1cZL5qFLcgqMNi6CCW1TvrhEdMWGkhxt1wFTWx1i2jkgNF5arxVEoWTwZRRkZwpMZA",
  "key2": "2L1g1kLmdKgTrCdEZZXrkq1yaXNjEAKyrMUxxBBBaHQfS9JZBPvHBzkiBSQGF4CTTpCxPaVARGDztEuCKmJvVfAu",
  "key3": "ybEmLsRUxno6F89Uw9bzyEo3fgDopW2kV8xAatLtPudqgpn2NfK7exNpwi7nAyF9FqPy2Uxrt5RSpXcTqB87Vwf",
  "key4": "V98tygCspVgML2KwhF5WaUt3a5M5VnmgJMHfVJ7Nny9yFzPcEf5VgDGgxyBjWdx9BRw1eEDGrNKW8VPwuRfJu4p",
  "key5": "2WWif7kmE581qKnp6oSeJU9czi1GJQixvtBjepPs56st1Eh6DaHEBxtC379ReabfdBPEYFseE8vBi7uJMU8YX7Lm",
  "key6": "3AvyDbsxjkpuqkbgjC8qHahnZQeLff7SmQSS3yvy8h5vuVXiJB98AtgWqkQLuspzW7hKe5a4GgUgzBfRoDbqXscx",
  "key7": "2vgDfUGEH7kHm6H23hqFES5dKt8HBA9CipNCPdFDEU3HyJmZQekvHUqFYeTDiqU1GuHq58ZVUSiSBvs3Wk4PJM8z",
  "key8": "48i58VKKy719anGgvzzx96a9FmSzG8myf1Nq3z9ctxMGBY93r8PY7sXrXwmDJiYpeiM6KSe1a53Zih47dF2wRFcx",
  "key9": "5rLcidhNxxBjh5am3zq3Gt9HeJpr7JffuAf8scdc3Tu6cRkXJtejAuGSB3fSuykvb2357oYUa9CesBNYZdneAnSh",
  "key10": "2MCs3GYctKGrsehedAhXiW6A2nVqD64cfQxvHDp8jwGHhqoJXfx7nJLfR41JtEvikC8bvpRU5W44H5WycMQ4RpAi",
  "key11": "5jY3hACsDNcgXQs4YjEQCXyi9uboGyBjF6jhKKnSNSj5A9HiFJyfjJ3fdWvPUFg5YsmbLsmSdDceV3Paki4hTT3D",
  "key12": "4poF2GHASungDje2Hyh973ACrSbxKm3XRezqJpH7WPgHhqA61Y6Pbi3PfrmCohPEkPz3t5FtWS38stMk1MahDdiS",
  "key13": "pjppa3sqcEeKFcY9UvXoTx1xgQc6KoC9vLyobRsDqa7EYgDENgUJfaNn9V8fCRTzwXnFugjBU1tQqfBEL7jwtXK",
  "key14": "5QGQ6VHJU5ENRWGAq5n6QSJbLPZ3EQzwm6DEVPqvAbVd1wYHLYbhjAKRtY2ScxiauSK4yWvJaV9tkkn32ZFF749S",
  "key15": "8ueH99kPHmDHudFatYNR2gxDfuEgaRW5SKCMdoiRX76cKqimwwtjMfowd5qYpALcJYT7qy6A9KSqxLqgc24sSYn",
  "key16": "okJoaa4YBpCj6mqaMcMyA5s17qP7d3hVeMZHUAZERrt9JiuDXwjjFYjxUHvBr47HjFjAGuWtNDkn3SCHBhFg6NU",
  "key17": "3aPwEQKWazeTnEUA9Rz47fdKrBhyKRcHEci3XRXoTXqToFCSPz4drXiiKfx4xDSEo4TRmG2sBRXKvpgwzkHv3JYQ",
  "key18": "36SXcx28U5X12TKUzLTYzwmEYJbFWP5ayM1cUMWA2GprXKWacEyHMt2f5QqhARgNEEUamPhDasR4wqWaUKjYH2Br",
  "key19": "87m3EDfK223aZkK2BpZsThKGsVmKdxmHiAUCe2dFGry2FhX2ziArMyvtTrytEoDcHbvNrSGdJtMGLqhPYbLSmNF",
  "key20": "5iFUjpHAkobg7aVpJyGYL9CHDnYgwFfQFuDPhdr1JAxjBp2kN8eBgC7nDzD6gxts5ibjkTa7mUEz3f9aK8hbQBQM",
  "key21": "wmQVDsssSayyG5PyRPhiDKBQ94h51ie8R5kXFcxuJj9TSxH3ZTzZZA4yGhXKVEowkHfsiY2RpDk91QqWps4NYSM",
  "key22": "2tqCKbiQSiAkQhbzPAsTkNyW8HGPUhYcw3gMZHvgtpvWSvNfASrHZrwBxMV34Wj4fRyESwtMGf8j3XMdd5xmWko4",
  "key23": "3vt1vRQNcbSZyhbNrMhrKkL7GaKKunLTc9q4ZWNXm6rbxzHRteMJ9sASSGA7RDDVPtvhVzMNHnnjMcopzCMAeJGj",
  "key24": "4QEKmzjjoaWegms3XuAGjHxdEkVsKufAAe6SU97dXGLQJ2jqvd3EN5cRCqKsYxxMofHJtmozs9V8pncSCM296nmM",
  "key25": "2tHYsGuoQGK3RHkk8TByhAnNEbUjRTr5hhCnrcPPwtBQ2S81NLyirNcCFgTZ3wmrwbX35hNRaCA48Xma8ib7XFfj",
  "key26": "qjyM1moTbCMcDTb9RgyiqpJeAjF4bgSvdsiu9wzsfQBuKmAtP45kToSFidfUnTkHjqjDTbiWadLmabaTrre4Abn",
  "key27": "TYNRaGGd75bN2bw4SiYJuL7pyBiKP3oSSrfN9MMKEexFAnuUTunaaeizp73mSChy76E9teqGJ3DjksyXJ44AytC",
  "key28": "4vupfTb7qAKZRw6z95BYChJkJCXMcHMWd5KceJYkt7CStCKYwF4wBHBBk8uoyCxSQTT41xx5S7H98zRVHV3DcJw3",
  "key29": "4uwRfx9eapH3c7tgnnPEsV4JqyW92KVpPFRpsGdyVY9Ds7VazYqBiTFf8d1gko4yvCmfAesygtMYoMSuFnP1Q15v",
  "key30": "2ebSNhupTbYB99VpdA8YHXDfuG8mEtPznxVT4tSzB76iicGQdnXCCgLzqiTsh5jA5TTmA66Us8ie42YZaDnnU1J2",
  "key31": "4ZGZSqfze26a2qZ28WHZVA2TaLnkpKvDVX4MUw3UxuPtYE8AfyiwVskwHuTNQm2RrgVxj3sciwdYoQb24S1No9Lt",
  "key32": "4UqW2MjQF2sFV3HPjU6fMzrhCwkhQ3bYsVWgTUn1XfHkJsg3Ltt1EiLX48DdEhFPETjrdisM1niHaVu22BgsTzHh",
  "key33": "5cUJGi1mbMPr9RqgEJC7WDaq31qawSkHLA7Y7MTuzS53CiNyAerA18HBMWQFidaxjwmGFQy7eLmeDmjd1NTo8E2F",
  "key34": "wtnVU4mnu4jaZ6JhaebzGSdMraBBe5GoKQdqeiomazVhFyooEz5vpEbm34e6tgRBLSR4BFbzs87RSo443sr34D7",
  "key35": "x2dZML5yHSipzkAzYLRapbqQ7HDCuansABhC5EaiB1WujjJtEeyVTrb85TAYJ2qPXPfH4XLACSVCVpavDGMrqWu",
  "key36": "32SCBPUXH4LkCt5veKbzESnWttGP9dcbBonm24RtzGwnKSfJWavZNndUEK9ssqdteoGF6EZdUqXYY6Cj6QuCBEny",
  "key37": "3tT3pDebBGyfbPXdKPy1eAHX8KRJccK18RD2V3v8SajyLatEhrS1AZZrX9aM4ba7HnSW2UdKYhTbZtwHbG1y7DAK",
  "key38": "5vXBzdf4HiYJ1WJYsiiHpNmPY8kgW6Mz5yQksdTWvHXqejWKviq3fDoVDy22enLfSUmjKUyawDbUbPz4DoJJXWUp",
  "key39": "uGSgzPo6CMpwtjrJJQE7yirs8Duakx2dyVMffnqbxQG8SaxxVsHKuWMMNbwDvVik6s4jjDMKBopDZc1VMSXrxP2",
  "key40": "5bKZfy4REDKDk9fQJCrTqVwLJAiLkPRb6eEGba36fZD1tS6bBsNWENXchA47ENoQXKJWq66Pvh1APrKkJoqXRKpB",
  "key41": "8j6zjMFex79mTAu3VV4JbLXVieG6cLi5xNtccA1cPYWgvH8zPrHGn8oJXqVeW6C4MP7m4kX7iWu4yDyrs4TmYEf",
  "key42": "3z6otKi6xq6WpN3rpT6VrLa2jgTrRCzS7hHReCgWUCi4LvG1b9GBASTsSfxWFMSoknXVcfTCo1vVsepFMqa4LQiv"
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
