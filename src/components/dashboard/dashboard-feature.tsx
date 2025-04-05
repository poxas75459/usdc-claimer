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
    "4jHTjw3mhGpRQstogRXwHqYV8GnwfYwHCdJGwVHCt4Cqn195F4z94F9x4yU6vYdDQRwJRA7w9xMoxQP3tvU41cYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x49gdkbbn1aRjoD4QZchJMWnWuFn8ZPZHLxccAeqxgkZ97tXxLYF3F3p6WrYUMM3SpFtBco7gk58rvDLRmj4KMJ",
  "key1": "2BisWp1jToRnj64nDCh21R5FLANZG8ZQor84SJNh4zwqwtSNZUDp2YWdRuisK3kbLGczK2UQGDTkZf4o9NPaCr6D",
  "key2": "3FwrD9bTzf9ZQ8h186fMyZG8XD7iGn8n7ZFGpn6GPvpQJm3YHDoc5y3nqtpXvfnzt2GEsaLXgaekdq1CCKzEbwHL",
  "key3": "5fNLESbzF6yQsSUnXwh7JAVoZv7sVWXokLjveb9Lk1b6Ci8ZG9gdHaUyvE531zkRhmw9FJptcoYcT8P9nN4Jkf2f",
  "key4": "3Kd6zEVi7u4MwTHQYZr4H57FBgLLAgN2oQftCicccZmpN2KsDNUperrSMC95Rh4PbzZf6mPRn8URrYv9NT7EkNHX",
  "key5": "5PDDUbst2JaoRvEGxGnBqB8TFipacbEXt2T7QqJzMLkmiXL8dTbtHgr2MKvprryWBEfNrL1VXyzhgANyagzDGviG",
  "key6": "2P4HPySnrxcnX4asX5Cv1bECLbr3euCDX81rs1JkYX5B2dkqdwtaFHrDQ422j23n68j4WRALEAqHSz2YerGLM8cm",
  "key7": "4ZmkUM7bB9se1utUHHah9BoPoX6jyoy27z9KX57Goxk3Na1svTvsiFPjcWqAEnw9sMeKYr1Tjw1opaqPGJwy8JPJ",
  "key8": "4cF64vT9cE4iCuzJiYQDWynuQbeJN7RzPNZHS3cRrUTm6o4qp78wRzjd7LaLnnmAUFsSbhMZh3ixdmQHdvtTW1sn",
  "key9": "AYhfxuP2urPtPBUNfpX7TdC9iyBMy94kf2Q4CGuXgJMNsbPAQi8ftAvyhRyNYYmJUhr7fwWG1gbj4PSKzNmyonY",
  "key10": "5KUtmzhjWgxLsxfnnBbEwCqDEE6PaoGXPmPM3RsGBhNMDct3t5RuSjR42nW4WPfwqq7Mom6v5yam9arww56egR6H",
  "key11": "339QCCbf7sPKtqL9wE2dkF5ruR1jMXL8A2oiDQqLPyjwtN86moepmPNrpi9egeKF8LRpDx2QcVS9UtcNC65txWJm",
  "key12": "292hg69LBtqFNWzrpgYwaKEeQsAS1pHirZAgyEyYpTBMVLmfDmGKR8RXv2eUj2dekrsFFrMxMGiqEr3qAEAUCvgx",
  "key13": "9oYnhgyUQwbP2HvoaddcM54uFjfFpMTJCes5mkXbKkpRnmj69NtWaLUqCqxgtfS2MtVsV6rojK6dP9smmCxvDHj",
  "key14": "xuRFZupdy16Ea3yrA1yLAQEphFu1tSrfep7ugmJvWiq96KHyKnmNhapxwsE84tTvHoLZAjw3mkUN5zqgGVmJ2r1",
  "key15": "5BKkeZvsj6tXJayRMwrBQQYA2mSwKhSNyNMiytQ8NDq4WAKAd7hUXEf2zVont2V6azyeJ6cHrnTbJrC3JoAocZah",
  "key16": "9k3J7XYRg9AG6ZbydqSTH21YjTYVj7jF3QNWdgd19fvqTsUJRoncMAz9nLGzei7boDZYGD7bb1hgZ3C979YQjhf",
  "key17": "2LqywcMRtcBx7FQfHiXwZ9BNGt9JP4b7jtwwmMSvMgVLrwDvX37DiTpvJ7PR3phL7e8Ac1EFWBe5dqWwncKc4JPq",
  "key18": "2vTxNBqTDjXgaryHdZA2h4jAjSn9PWkJgepVVC4dJANMZ87RhRC9DGahweAxtkNB6cQr4jBJmL9wQowGk7qMj1n3",
  "key19": "uZy5Udnmg9WcBMkoxwfAgbVniyzvPvkBh9Vvn1dwtwNFkjuXui2v6esM7Re7TRwwHp5aSPmaiJW52tRyVvmpuyi",
  "key20": "jjZaACoar4iKSusihiKPxzjAGRTQxb3MdGeKHKiKjevxV77xpT2LmY72uoSa9WPc8btGPdeFyqfSuEWX9mgzFLp",
  "key21": "4zR3TAsxXvJebnMMHPGd61paf9Cye6a6SD51Hts49V6Stpr93iHz25hJaHgcyvEonRKKLYffVu8QY1QXx6HAEwKe",
  "key22": "4eVV9dx1U8kQjmmgePMP8e3iFCvm4EwfVHpaKFSAZeYzYDv3VkcXxEztrDsKRUvh2GQg9AgiobJpLYB1e56mvMEB",
  "key23": "4R1XZ57XkrqhjEHYV6dDPjzu76bo63hjevQ7vzQdzFhdgPAv7GFcocpEMzS7dRXGWfeKDyW5Up3amRJkmpx3c3U3",
  "key24": "2LxZeQz2ytfD5XMSgfGJg4iCUwCwF3DytWue3EKgkDqSq5sBF9szUTWMcErMqLRtRrGGBuvPtErtGT6no7yU8keT",
  "key25": "1qchLeywf8toyge7Hm9tmrAuqK7x4o6ZW1xxFgnf87m71zbMyXmKR1YfvVZW1DhKEaqbKgs1uUVHYsReh4NxCgN",
  "key26": "3qqWWFdDzXWLANXCsWaEeQnHqpdVpAf7QxsLMxSMbHCVpxnEAZp4nrrowPTSD1JniwMtsmMMMvBeizCkvzEfFNkf",
  "key27": "2UvqeVixi4URXNyezxiTNkKV3cp9T8BBouhkhBBuUfQPWyLr9xu5zghaEBfbt1VjuXxYTywkvcNKiL61u7uoFtkr",
  "key28": "4EanYvqjZQpk8Bn9qe2wGrnLB5wA4J4qpwjyXbhHLVrNN4kt9kaHmJ7fjLF6HSx4U9W62cp4WURGfDt8sQqNdXRM",
  "key29": "5G8RoodGqKy9QEmgSrqU6EHS1bPhDPLfYa2kdsGBDFKH1YQBjXfXdAA3R8aNhikjWmuyFcEPJkief827NRCDBf9U",
  "key30": "24qg64aneAhjgtm7BkZ3kd5AGcuC1LnigCCPYcno1fB8XBGB5ixyCFyRWMQ9WC6qmMyG53ck24JoGvsSDg4EPbt6",
  "key31": "452U99xis5WYMfCLsuciGuVofgxYNY4CtprvhBrrHim9QuJfPum4GNEy1i3p7MApeTLNK9sGHHrdsHMkYypNQJeY",
  "key32": "za2drBjXnbU4r3iA1T165seYRa2UaSW4jhtTdc7Fzj28H1YBMTwVAiG8WE69m7Eu4Hdj3m2K1GPndE3aKUQFeRE",
  "key33": "4oZ4KEWc4tD5nicb77SGXmUMYPd7PP4tMFk4ukLF4VLG38pcBN5EhDUvF7fKNn1jdsthwpnzHdcnS4UBgp4jJMLH",
  "key34": "NKiXyLWewjazq56kvE4N4UvSJPpf6KHP7p58pGGyDNZmP1MjGVqEjT35uBRJoGVTiWvRvDRgCeTHaTUzdqfeLtQ",
  "key35": "2m8aTUZ7p56FnK7mH3iiasKXs1dR7abD2pzuEiDWVjvESUty1zgBC8vScx56vHdxRkcNGzrjZwCaHh2iMa7s4Zrv",
  "key36": "4XKqK3n3jG8eYxvYcHRb6c6217q6GhCqwexY8TtN98F4Y1aiYAV1GvqQs34zvj1KK6QV3s228Y4YpCdRZCQHz4yM",
  "key37": "4uVAsoN6Bzto4RcDghQ99wB6BzL9dmH7F5H5rdmM2QxFxoHJaJ5G8rmwEuQkyUWLrjiHHhFdSWMAw48iCQqyX1uF",
  "key38": "mzs1T93Y8ZQqHTBf1wT7EG9FZnQ2Cf2Pjuu5RULFqSj7YbP5SKQieKAJ8r18xD3P7fS4GLoJrLFSM11PRa2HJEt",
  "key39": "4TAHPcQwcdjxZPfqbXbMxNbxYascgyVAhAw2gefGf4vbBAWGDt3ebVyrNsNe6DPPLdxA4NM8pkLz6yVu4MQpmbR3",
  "key40": "48doxAZtUdGbEfvkyL5Rp7Qofra5onC7PPqjCLKzHVRbX4SdYf7d8vNWY4SGvFRLDgUcjsGBGGeixS7rRg755eQo",
  "key41": "5BBEvnHG3QgCetXsihWZqDtZL9kXqqcNiSbdekZTgZQZBfJQVJe7bd7Lfe6aN3KahdozyEhYwXvmL88Jqqnzhzzz",
  "key42": "3LwQkEDpuocW9si9XgpkCGD3fW3t2ZGMyWrUEE8SHQWFVT28SiCL1tCD2tXTpPemPeB9hxAuTPp3beVwgaPZU6wk",
  "key43": "4MszX9uvRzvudPTuQYry2veJifxUVELtaCC61uuLkBZ9WjRgooZJ3qvvEet1vJo5GdVuy6ePHDpwAFyHRVt6gK1T",
  "key44": "3PrVGqsBTghCUdJCARBRS9K7amQ1tyoQshMMP9Uxnu7jduv8T1eJpHj19uXcaAfAtGYdTHjR7kChzGVDRnARzS6A",
  "key45": "4SHPC6m63qGKdmcnanLx2sXodQxn77RcUBoX64MXatZ695WJ451HDBEEytkq1LtTyzS1iXp7RaXWX6nMD5wRawSU"
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
