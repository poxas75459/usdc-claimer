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
    "467qc6rUJirpJxtcMN7RA9zb7DN3tnv5h81SWGRVDkpEyy3m1EepoRPJD7os8SLhX8NQHPTdtZR6ociLpDCvmYna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2swM49BBw1KbJ5JtXj6UkCJ3EcoDnGS1vsXpiKc2rMSfMakNR38AzMEVqMV6mci8T8F2n7BWk7bDj8NfRecSNfgu",
  "key1": "4mGcaXFcEhkz21NGGZ7rwmKjqEUdt8tB8AwcB6L36uRGjqUjRiczvWnacJ1SB18Qzicki1TDFrpqisu56efX3P1N",
  "key2": "5NLGk2PnAca3EoE8CW1myW5Lt77QJHxk4vpvWRwqrJzLzqFSJafpoEQzCjFCbzavqmAGWjQrfiKGfzjRQ8BJ6j7h",
  "key3": "YkarkNGVHa3AaZPN1CvHbruFMSB2J8PSG9GJeunkdM9o2TbmzSou1W2qdQJy978K5BYeZpx84Q2oj8syKvqdACR",
  "key4": "3iVpoytVXbxdxWv6YinJxrQ7s2y6bXLWHBabmt8mQ6cXEwe2A7tDhqaqKafGK7NA9uku3RYVe21eMMrb6ixKsGe4",
  "key5": "586iAh8xfxN4hwW1fMW9F9eWHhAwvjzRrGWchWWdygnZtBpfaoMzFs5NWAS5WXn8aEs9H1v9h21VBwf5L53VqvtQ",
  "key6": "5ocFpY7p1Hx8jFC2KyyTmVbPnwdMTJ2HCsDhHd9ivtkv83dGwYTYiGnajVFSmwHSm7cBL9xVwgQPZVSt6donWgv8",
  "key7": "4bcmkHYgbe4vtSny3RMkXTN95orRTnaYvCFK7rPNtLNPNBNsM7kbdXi6pzUv8CS8vyhw8d7ywCajbLAcCAUAi7Eo",
  "key8": "7kzsWkqarozwz9n2JyUBiwwphR3xx1QZYhFcT2aeCzP6qGGZKvxFHS2MoMJo44KZrbM1sCGSaPHM9h5tWHXohpQ",
  "key9": "qDNoxqaHTB35nv3ouqaQUB3cKtQMJXSxmYZkNgnLaj19HS92DgEjDbFztq3uhCKw85jegDgsZQudPs6g7YANtWz",
  "key10": "Lg9By5uH3uJ2sz7UkFAyoAd6YoDa7hp74iA7C15nYRuSuKqSJz9WxtLuVZFnCXt3BFam7BjKuzB8yQq9eNrnKQE",
  "key11": "4YyuE2P6CSkNgfENq3v8vWkiYv92VVm8ATrc8zrV6yqC3PD2yhfY4bXxKaXbNcVLiWMDZgA9BJFmFgCn41xpApSV",
  "key12": "2Dk2bnMsCta88X1wZZsaVuUq3zEEsLGyiJi8D1TJzKtoRE5kdvzaVu6S3SfuazmBBRGmL3Cf1h6BMF3zD5G52ykv",
  "key13": "5MKAbhm6G1A2AV295TYefvCieZZiQnFQCsd37ir9S43rpBaUAwYymS7zV46EzEnGiHCDC9z7YoDooKXARxMR54y9",
  "key14": "4Vj3LXV958hMzJN2rTKCfaD1epne7zCYgWwBUD98DTJY8eme5NWYsDmvG4zddAv68Sj3zyaCSsUY1auiZqNAX3f1",
  "key15": "2N5bCWXabArAR54rMwytzttLiXpD3AMr22jumsS7q5YRhbaHX5L1agJnqCnoFJBmmub6rXBAnT93bSY3pseXDdiU",
  "key16": "2RkKf25xBNQMVLH8qwH4VhT6gxgjsb3pfsXsXmXRoy7diQ6GQJxqBLKHxRwEvhPKb2Ph9j9WDQK4SqSSpRbaEKyH",
  "key17": "5GmnM9KAGVQVfrYyFv49ggja4VnzZYA5nFu879Uy6xtzFHwqpHzaJ2kCWeyLwwfdqPoKWjTRK7vjryGKF8px5qvh",
  "key18": "4h2C4AVv55LTQ7wYeCamhiWjmkdtJ5v3un93LyuLVBw2vmYhFUMkbjti2mA3guhon4mZPPaQik6xnokhaoRZdGGu",
  "key19": "38EoXXPA3XwoKL4S3t1LqNnuC7zEtcbQqjxHmCyeeGGgv3f7mmwbUZ8KEhoHaW49KjsW8izf3QxhKRndJCQSLRz9",
  "key20": "RycoQQ1SQQ5yfkFXorUMZqcQkdF95N8s6YUNUi5rEphd5cCeKvHN8qawTJB2pBPWqL3LSFCwxKcV5j8N7ydibhY",
  "key21": "45HqrnFhNELaV6UyFPMfJYsLmzjsV442ewY4CBnWLmttj4k6sYkjNvDDhP3Q7as38LKC6aiWew5LqivpXv9f1VB8",
  "key22": "4XqSH9i9EsURgKZzvRJdeupgyvYu2DxA9JGRHLndANQ3her4vLxwQgENDsswK8ELNRmYgQH2Swu73dTPetbZH47H",
  "key23": "4RM5wg18DH569ZoeMfToN3wgVWiooy21bKQ2ndapvxJb99SNUPiU3m5VG6FAeTn8GjpEu2UnWDbwAXVq1UevS22q",
  "key24": "4WxAXkugoHdYu9MG1FWADr7isyn9gLceJGXa5VD72UD6GYHMtwGJg15jRJKX5pbPu5GqQ4ciJ68H8oydxnz3ARRL",
  "key25": "4WEP3e6ZzSbwZmeg5a54XKePDKm2fBMH6NCsffBw5B3c1okPMja6oxMC83CB48FdoPCrxPpRu4Z5CSVHFiyZatkj",
  "key26": "4Eb1zQUFzigxus5crqnu2E3jkMy1cQCWeuUN3Re7MU88mwYUouhcZkestsmiCZREjf7DFCVBn8VYKm22ZTk7hnN9",
  "key27": "4yUpgbqiq9T1KUHBvHuAYieWqh5Ye5z4DNMRmAzqwrjLfQSYtc3jqnZ7nv7Dv417sn93dG5zFiDqkPVLhiyWQyqv",
  "key28": "4EPGFzudXFQXYjdQTkxkJ4ia3nmZfitV2ga7rWJr67yxyHBjEVtYsTTgWjs8j3dKwC1gnctMKRVykm1PmtVFsB5W",
  "key29": "5dZuu9B4B6gPccchrp43tADK15kxr1q94zJwepqeLZiGMtdvG7S5ovfJ9npGugaA3soBp9VbyrYGwWMitfMoaSTu",
  "key30": "4DAkCKy4Hv3xX3uXQtpZxYjhArCNLAfvTfLKJxxo4WD7gBxUgtBksmc7TZKQkxp6eaznzAXk5b7yNBU4VNHL2cZS",
  "key31": "4WRSrzqF13SgvzpqRYejwRiGXdZA1KABXqUYMUUqovYpqgei5JnbhcJjynt24yPfoB5yHrVPL5rUxvGkXEt3sKi8",
  "key32": "55tXm2ECtakUAXqP1THGGqwx3qgchGBMNAXDWQhHgvr6pq2BySqoCSYUUDh9cDn55pfy4CGqmJdMVdfEYAHax8hA",
  "key33": "2NiTzd5UBP6o9arm4XZpbUBMTq839KBrRLm6ovBxggW43hvvC1DGmWLpoT4rXv2UeEGd5JuUhbw4z7RW24tUyn7A",
  "key34": "5e53qeAKLQCJ1fbjimeAd3ggLMzrDSR4DT521Lz9Y7m1iUtuq23QiQLrLvUeiWy2wxLnCR3QhuQs7cW91sFSoHzR",
  "key35": "2gkSj4Q6zGvDxiJH5Bqh24QXt2cn4F5Jd53XNAtZ6HZPD8uyYPNqZF1NeoB57s8aXMCBrKQ3TVXEGB7U7xfFBd31",
  "key36": "2oeqQtCJFxApAKJAmJigjzYfLygTwb5rfHG7it4NULCqScw6riNg9zr7gj3XjQpNoisL6Me1SrRa4STW1QXjSzBS",
  "key37": "3kjgAvHy4JvrdWuiWwSsqze2Eos7upLTNvcfj22mVwa8m2HUTyAiWuSCEkyzkQM6w4hVg5ch8fuQWrrk3V2gE5MM",
  "key38": "65M877wD7zrJaoUm6DY6vZZQdRyC148H692gvGg6BNpPKP3kuoXoUcNJLDj4e5hCZ15QqYDHXABJKqDHiED73fpZ",
  "key39": "42RNxmzdkL4qBRh2o58TDzdqR7c9XjSNpMiAxGrWbiUpet47eMzjnLWDFFf9W5Xyc2KG4GhihukJU3UFBfyjTmDw",
  "key40": "31Z8vmDsgUVYtt4uMitcqHqgUMJgrHTU7AJNcGa7Fp7t4vbxw5fczZKq34APWb7VCSXB7gh3PbSTGTyXhu6Bf8rh",
  "key41": "4tgMJTemM9MRQjUfU667QQ1NiGwc8fT91HvbuytzFGtcC3VhjmCoDEYWTQonmvBhEsTgkc21DAH6QTLsHnKSbkbU",
  "key42": "5ttiE7aGU2xPD9kz5zrXECvTkDxQmaK4gJAafH3GHEfqppbLDfcg2Ljfa6fAzsvzbinnCDvuRc7XTaD6rJtn6fdh",
  "key43": "sgqoBn8A6NRQmfGBexcwTVJiZFAxDWYnpuJYenLLpknqNcYzLf28jrcT5GLWkvSvoxPXgBhUmcsnsxB2TpmcYzL",
  "key44": "1q8AePHPaJzcE8k69rKNJLmfj8mM33tkt9GoNajc1gS1oKFYGhR3bQXrSiZT3XPEX9Bqbb8UdSwdshPfKYNAvwz",
  "key45": "4XpFnc3sv86Qz74bUYUF48Sq5sQr3jLkLc5VxoSHPTmKRXRFabGnvk2HLJJntXj77b8RmQWLZPckMnczwuN42nZZ",
  "key46": "43dNazoN1YqLEeRvrY3ZaKeJceo9cXA7GzNtNk8A7x89P93HiAYCG9xpwX9YBNaJJ9ckMAoBcy3CTZ2CRNTsjPT4",
  "key47": "4wsPJNjQsxjHQcxQ4TyoKbdM97akgNMQwdYkj1KcqYe1LxjXe84Hh5hNozLx5KUxx67JLRZU1MHEeBX9Ka7dy8pC",
  "key48": "3yNrwW9uyVp2mSQRvpuzNA52w4SvAjGxFeLoRhTPu1Pg1vFi8zCGruR1nu5xK76x4WgMKRAxgnagY56rpridMy6j"
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
