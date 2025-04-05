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
    "5xpwnPxgrdAzcdMVDPPS3CiFhZS7KnAhayzg4hpEsA2n3p9iRrGz7bA6vSHsZNHSmHnFXd6zeb9jUVtvov77N5Nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmtoCFo2bU973s9FZga3iVk7zf71F3ctha3zPZPpm2ejswxcRvAuWVeKu92qwVjBb98Ls5j5ZmScZauAVh1rUgL",
  "key1": "4vDB5HvutPKnnDFs1fyD5fCfb6h8bAqReqfhgGnVk4jxs3VZ6u1hqBdDnT6Jvk4YeUowCF8nSXdkx3bvm4Xji14d",
  "key2": "5Sm72FhdsEBJRxPgWjkQB2cwvuy26wwHtPxwsfq59opvNiRhHr8Z1ZvahH5DKb9BPD5b7XcVbLSChuRQmGbqCg7M",
  "key3": "5JsX8EhCLLqXtf8FbCzjDg8F3X6sJtc5o9Mdgix3Q6Ubx5DJ6Ce8Ah7zseTJxcn7Qbp6QzQwbnw7eExexQAANoQm",
  "key4": "55JNDCYMZ2WuvF4fzj47Kd6JdQaFimCMoECGoe2fcQ6SRGNCaUZAcPKEPSUbg1bVAqJZJpopZDeHR7sZaRAhR2GU",
  "key5": "3BDTJUzz7mP88q7HX81ZssQDN63aK1jC8qNpT183FzGSiEU9ynhh7p3jQuUBHmYNvBBb11TwRQZAWFUZqbaUAftM",
  "key6": "58N67gkwj9FBRNKFnNPZa6tb4pZBGnQx47vmZxb25g33z67TgT8CojtrxM6yE2dmZtuCY1n9N7iLxNwJV86Wmhrx",
  "key7": "2DZKz6gWXJVjLZtNUeoHkNPJFU1Wrd6NoNART3QrZXBkize5MQ31gAdjzQGravFDydyy4UznvXDFqWdWasGWYq6t",
  "key8": "ZJhiAguCRbZ6nPfFDACwYiUKNME9Xw4RaLmEKX8db7KoUNjLriKfE31uw2W7sFzPMaWqZxgz6Dsdb28NAoZYtSx",
  "key9": "4fpkmJ6rpm1vWFqaF7eEQA78256drQ84umqmyyfEyhLPTZvDfkLgz8EuS2rEEoQph5w25DadBsmFx7xcnxh6tABp",
  "key10": "3DnPVzH3Sw7gyoWTG1d9Du61F7Z3AhUaMMLUZ3rUhvZHvNB9YgRbCndSDjet42UmE97B7PGLZJ977VXg7bFkSPoV",
  "key11": "4CF5pcaUVkX7Vmk6JMji2GwGKQnRkGj7WNh1Aw3Ec95mHDHU9h9HTNk6CMwJ9yb3PmG2ZgD8WPwwjkp2d9j27TK5",
  "key12": "2XCrRE2maxxC116TPxJ1cjfCGpZxgFmCMsGde8RXqvq1eNh3TQCvi7AqmyogZZU6hWJphE88gKmrJZM2v1X76bAT",
  "key13": "2XPdZwkZNGsUNGZwZrkRcjZqAjBbw6JpStfnostPwjqTVfkxJYMq6FTG3WVKFEF11J61McpEKXpcTTCKsBUMkcrX",
  "key14": "3NTbR1CQ26cuPeXYTMxHLxevtHuwjrZwnZPiHcudvr2LeRVQNcUSbzZtbeXVYpHaxFG4WidEhSehgg82ah49kg2M",
  "key15": "KcGVFXsUJsbFRXjJbYetpizH1AKA8eU32T9JcLMMzJzdvCAm9Bs99eLbTiAYiF8nyYiLmfwqNg91yqXLPwZeihZ",
  "key16": "4YXutq9XNAsBpMMWQ2LnjpvHf1wzKUGPkGKuf35NFqRcd8KR11SPoj2vwe5DooqHfLRHRWGBzk5yPGeZTAZF3NgF",
  "key17": "61utgQCDyvaGWpcbATPCyF5Qq3xXa6QArhcwaKePbeYZCxjpRYeYqvokF6CzvpU3xax8t5XCH5yc3W5NfRhjqLvn",
  "key18": "4zGK3bBaa7XQw9PFSxhTfnwcfDJWSCVM7vfAb3eXdsLnCvMCQrDhQ6AjjzBNDwLyZSV91n9NuPLzcoqDAYRV3xM1",
  "key19": "2QvkaRm8r1heaDTQnjyYpZbaiAXe8Jp3dxiWZpFg3LazpzehJURmCPansvhsAUmzjwuRk18eUPZPMWCfWb1WrirT",
  "key20": "4sAyhbzLVqm7tyjG3ABQyHo76JaXXxCLmciVafnrTEgQ1vLDPFyAm2KMupcQrscPyq5i3JoG3ioStQNcViM3Qa3V",
  "key21": "5CaHgsQVdfQbmWzKCdJez2tEk5dsUfyJYjcP3Tq5B7dTvcxLS2FiLETEXvpiBXVevKdtzmsiSEVXU1AacXLzfiCH",
  "key22": "MzvNHp6ukd6Xp5Dc2VArBY5tYjbAtiq4YL3oisJDzRDEcm1cUQS5rWkDZqPdVp6yF3rXKnoLLgwUqN4cHECengR",
  "key23": "5U9ARKFubh1E8tWovA7iUv2hejXouMZXd2uZEnH2RsL3NbmYaqBYmXqevwERSyCeVYFqaPwx3gG6uNKeNwk7LsAG",
  "key24": "aea8R2M8LsvdesgDniny1Ht8kYWToyND7L2vbaroVFrobG5HRAn37HP8UQcg7c5WZ34h7cVx5Uxe1A5mpbbahpa",
  "key25": "HoeFVjFnEzHVQkiVpyd6RAF5dZiFD345aXZMKqQPBGpFZUtz32DkV9NjYnvtU5xYpFxto9GNUbmE3cKA2JUzfMe",
  "key26": "5ykSpoukiThKVJX62iiYMiQYNiWaKEYJUnnznHqQ74J77RHf6G1eRygnkknvRJmNzEgquoGXyhWoiZhJTPcHSxLx",
  "key27": "2hWhyALdvbAL46QoQZQVXMmr9ou9CRNjjd7MRYuLxvgMSh163SixKLnWmKGTA1KXDzNdCsgLoDzssGymTzPqGqQ2",
  "key28": "49hykYNUBh1ZSdP5J16LTuYzdaxngqviH9c1FmhNJTwcmPm2tS9SD9xrPKLgJx5XGC4Pwv7AzbghUAKkH3priBDq",
  "key29": "29iLiTU3n24JoXdBY8N2YrUiuphv4RUt9YNjpBpBd79iJBpKBgtj43N8cX83y2bcyLwPJaPinnmtLRHKiMqDvMpE",
  "key30": "2aVjLKdTmu8abpj4q5jqkrUpUrECxGbAgmW2efExNmxET1DPEZWQTiLWyzVXKZ8XMLxDhuGdQtVwEXWB77FbtZE6",
  "key31": "5kRcohvHZHRbEJPLSt45fUnP9PEqESx8E5C4NkiTF5hUFaF2terhkrrssnpjDyEp1LVhzB2CCZCsXeUc1TUce8QJ",
  "key32": "V6AfS6voDjK8Nd1mZwYWmVCgCjXfUVXEFEnYcB9cPCu8STQxfL915dvMpfKUyce8fpKxr5rtgvtfRaNj39hJUaC",
  "key33": "5WTunz9zuVLzETqXrbXhMt9XQf4aL2r9bhHcTWAiEevsXbiTQCYzVsYiK8MS47MrAJTCdNYEfvz7mbHCGGGHe99f",
  "key34": "9BKrYfVdKh3jQ9rwxkyRXYed3pd4ria3Wm2QEEme6NXtETiprs1yrtAXEADXBeezEHZvnip2C8GHEpKMkKtUWzU",
  "key35": "5XBeLPbWptBfPEwi7p5voFtYKLGteJH88a8X47bwQbrn3qSMLbZ72BQ2xKQHK4Q6MtWSFB85pCzVwAxcSS2kPAmi",
  "key36": "28wf2aKsCVjdKWPhj9en867sssEYdUc5oeEPeSsU8jg8tiXJ6kniwkW5fMZC5TLhSzYNJ92zqRSGTxxwRfijg9M3",
  "key37": "4XjWJ7UDt5Ct4wbKNHm4sthGB6NubBgb6zZoNybBzSarVgmxecNqgVMJyjNHpDAvZr2M5n4zds56vJE9i1BGZawz",
  "key38": "5aUVMSg4qrpcEP2w2NTAZXJZdFPKJCnsFwcQucKEswF3mL7B7mqTEhY2jDSXbJApQRvrxrGaKkMk7wfSYRr6QpNw",
  "key39": "4GMn1ody9izvwdBr5QsAJTKvjTZEv9hDgqvLcPkDUic19k1P3o53LLFQcLe4UyaM6R9JZrX4i8XesdYftZotEmrJ",
  "key40": "5qv8wJikHhMAcJTJfPR3VZZVyvyRQT5Dja6cjorLayBKsrtz1M4u2YjEB74C6kd3SvEy3n7HYR9M4Nov6D7fWq4k",
  "key41": "c9PntPNQR5o1FNNrowj1MshVC5C7Qix4QWrx86daHGMpboBPYW1YYksic9duYN6dCGY3kfiL9cfn2bgMdKEfdRg",
  "key42": "2sL3Fg35jTvcvj98MU3YCVZqisSprbCDSaEwVV2Cy5nxSbGJdWemWsp2zTa6gnE8LG6veYQtsQnnBs7otQ3QrQzq",
  "key43": "3SkAoeRgxjVeWUWRFRYiJyKeGWb5VUWdM4BuUVa67zkejdjJcEQpAqgg7P3ykZeJNxWbNUaXRxAUcCnNQgyVYWDg",
  "key44": "4QXH8WLHCkfaQNR7SqLNU9WRfEbp1MRnuXwfAdfeRYUj69v6W4xDbh5VsZ5Znazdw3Gg2VoHzAKaeZ8Yp6xBmdWc",
  "key45": "2ZQSmguCF8yv4BprUBmDB1z4kefi7fMnZJJxsH3PELx8GNXcrf7y49nYv3fg6n1c7uDJgjRF9dJGBujDPpm1xr4d"
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
