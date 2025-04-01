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
    "46SnkNcaRuveD7Vg4qZRxTDD7a6JsXRYu2EzwoK2NP57J4Y4Qqqhe8fG5TkuC3xvmWf215embUaYS4KWm1a7YmC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZUGaWEyaS6dGdJDMT1XoJddrY5yyvGAYu8g3HHHPo8pPFevrj8AdXPCbcpou1iXbuPdoz9AzHoQDikwyFXGDW5e",
  "key1": "2qv1nRd38VcEVNcveLPSu5UUKo2JdxKgxU1CAausGU7gFBYafVWRaXeWh5hey5uMTCvB4B8pbibzTb3JTjcXgjk7",
  "key2": "4L9LNAJEDR97Sv92TH46zPau5xSm1qJr3K7EdBLNBhMuKDXzqwXhtqHpzn9U2ztV1N5nUpCKwtEqthatV7G8oCKS",
  "key3": "3FJefdjc6ey5zXqM4MKQu9pmyCoUDkMyFLDD4CMn76P5Q7EraZf3tdymVAfPQBcaKtDuscZJLUWXdTpuYkMx1YxY",
  "key4": "3FjHfRcyC1C25Sqof7ShmiH9hJKiV8Kf55FEAttCYnnx6DYMA8AWDVgHCqE6ERB1o9cFwh2Sg3tCzHPeCUwNfJ9B",
  "key5": "3XdEtznmnzT5jsd1TPMvuqquXXJr6twDTZTvqFzXmYcQfJra1dhmBTD2vys4GsVpStmbPkvUUq5b6okNkXsnyKnq",
  "key6": "4JHscKCwZpiTrzoNTpPq8ohBpwbXTxzdXQtH2wA6izpoY2bXa9tHM5NJjcKhAgu35xvk5j3oDJ6c6xXaZVki5FZv",
  "key7": "51u7SMr8ztiyKeHBuQMPntiiPKdrYf4YPmN3rakCDV9nDJ722NcoZibfLKfR6bhSvkiUnjMN7cofRuN2aeCSBWdi",
  "key8": "5nUoiqGUU9WAydcd48VGk3GF1YNhPcvhtRWz5F9ZJX4H2xRAVWeLBqH1u9x7ktfPXNX8VYnrNj1K4oV1z21VfUTS",
  "key9": "8VBvbiNmJQNWqukdSEodRisBtyiT2YtG1x8jykZhfyNm1oBdre3GJbDTCXtvdPqBvVef3uAaVCZWo9HbAx9u5nn",
  "key10": "54bNZgsqPmvRnac4BhZ31DNCbXfMNZuxCNt8T1ME71WzENNVErQ1beAi7aVynbxVZxpPS3zQ6SywaPZQKw4FoGC1",
  "key11": "3EP97iSHmj199abUqV6TypmbgSw5iMBt2wkqCic97812DA17pxRJsEXbBdfs848EqnVhhFEcadkc1iGfz6UURBjk",
  "key12": "3RxVw1dxd178avgG57gnu2aJoC3QMh2oM6QtBYU7ajwBLq3dJo5bmPkxHx1qmF9DmuPo5AcdPR2xRZS4vfoQ5MfL",
  "key13": "4cuRHbMcgc9J8Rs4cNXAnfMAPNRpFS331oATUXBoz4zGVgHM9571eAxJnaDnYnwNWCCzDV37YfhMV27YMxB7hzDP",
  "key14": "36yHSAWHg8yXsKKUhsbpeMZRU8B87gwPAnfCu3a7Q6gKXaS1sjy9obqt1M1xc6KHSpaPj4PSv7wA9KUdZHAdqdnF",
  "key15": "5nFYnaVjepppetd5CZbgagm2p6EAh5eZj9TYTLUaNVArp3egxar9V1yN7rv9UUe1ssBH4kvGVhc7KfMPwbWtTbHY",
  "key16": "MZxPYLMKhF5oKgnf3MgefCMvbECHFhQe7m8TEtiAoYmES65eHRZAgJ3uFahnEJAzTWArkzmQAgxhcLNKD99TdCA",
  "key17": "2pk4Sx3xFawoygqbA2xXd8yb1DjRsxRT2dsPD7qm673uGJGBCsZRv7R1zm2caVPyVkLdfPrhRr2mRYDWkmpEGdJL",
  "key18": "3erX48wQPiRqGZou3AHVMEyszLb67UU78bimUqJJSe6qQqh828h4Ry19so3W7ZLotvHpFpfEUVUNWbLcsupPdEbN",
  "key19": "2x6zAF7baQZBABhjrTGPDqCa9F8KTLpma7xcuonjQCqFVkUXD5UBYw9xcC8ehkoBtpng1RcSNQgcT8p9sySFHryL",
  "key20": "22uRQBS8gHa1FfVDMW7QKuXiWVuqh3kPW8Hxi3kLkMo1RB7ZaM8YZgrTqPj5NXStbWYRrApuNsNxkp4SgD96GUKE",
  "key21": "V9m5M1oKVXth7Pb8wZc6mSnzUKZcju1i91QZD81ecjaoKkaxTSdr7o6RFdfvjxkB5Cx7whynwJngyKAL9End2Q8",
  "key22": "4Mh6n9yNreA7haJAKKrnhFC5TCVQGazyPA6DksuSSipAhsoFuMXeQ8wnbm6ZSqTFUryb2YJpEe1xtdpFf76cFY3Y",
  "key23": "5U2G53NiqSgNcjyJF66hGYeviEHenYpoghqCdgXttXUN9vBXbKdPXhyhg1HgSP48L5zjSUqugjkeqFFqLFYMZyfn",
  "key24": "3bvHxkvPdkuPTp9iBfUYgwa1G6Eo5HMbXaCwzVmkzVjzEpfVZBASf989tohKVwx41TMUSp4C62socNNw4Mg31koo",
  "key25": "5GknwwGr4oDGgMRBuXUWHB3BUosjxyW4GrMTEnErtQ6JtZEAe5fpAJ4NXkePvxG9vscQ6g3w5ZnrwtGgM7GQsxQr",
  "key26": "23dSQ1G41EYjTFYaW8Wc7p2jksE9nt2pFG9RCbB8wAGSHCEfk2VTLCY8rxi1anWi4b33ygM12q72m7Stc5BotmJg",
  "key27": "21dbSgLoFyAZSTsTT9pbkVTGK1XUxNaby8776o2MP6RozdosiS1VBtfjZHW6mKqnGRmp9sTJJHVC9Kq5xDw64feQ",
  "key28": "5c8bmGsUC7aMw5XW3r31m1VM7WSbn97UH3GXoRu1F1kVAkp5MnutjahbUG6Bh2iEHaP89AGSmjUMquFo7ViBch8t",
  "key29": "3ccb7wGpcZ3Tf6HYxVEhvBiBUgCiGhnYvsMt3yt1kq8XdGbHq8ZHzxk61NHGweYq63opRP2cXP6j2rtCV2zQTvLR",
  "key30": "5YJ1n4v9UsWkBGGy21PNWvqA1sHfy57qQWpaXQsGy1JoBG3sfB4Zw9pMTie43JcEayZywX7M8RWTkBVnmcHAAshk",
  "key31": "5EVgZSK2QqSg7hYBbJJYz3KfYCPeNvX17snY9vbNBSiHyT4Zsijzbj3x6MrKsukmZ67agdoKRaBjjD5oBT3HbChJ",
  "key32": "412aBSX2PyedReN4J8gSzcFdsLVr8WJwxHLNGWn4t6gUPQVQ26gqFM6S99QnAhj8juw2XNN3qjEUx1P4cgMWvdXY",
  "key33": "3oxxzRaMXxmT6FFDEztXwYE1rRwW4iuFAuA5S8w8pbtz3wT5REcz7XeirUEMorkwm81Svd7zbLbURzJM8ZoGuy8R",
  "key34": "34qPRLEos97MJe9mJeZeX37Rj7Zp8s4VXwzDSjk3XLiktkkWaDySnC7qURzkoEjHuW9vJo7z1BttydKxZ7E1aPuK",
  "key35": "5ChFHgamN1yqfVTCPzdHEu914pT8zr1GXVVoiqV4DZ1CYkzjDj8WMQiFumNMLo1FAkNHzsT6DtSUqTwUxEupRiVL",
  "key36": "4UUtwyAP94uGcTfjP4ihiZi5CbUaeLm8op95xd9ECUhRCMXVncGVRHAL8s2Qg22SUpts9tQMSjWBK2t4zBUjdJRm",
  "key37": "3eRv1dCL3RXZ76LYZ9FwwRU8kds3PGRm9BdGc93iKkYruEtebGurEUpKNifDvXE7fNxdJE6qLjFNjWvxCQyfSpQK",
  "key38": "5gCxG5keta9B1gUAh9dg2LLUzirewVLFCCNvp129NSvQfPoQM3oKwJj9adxf6smbsUmKnxbikcZyrHmQcivsTY64"
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
