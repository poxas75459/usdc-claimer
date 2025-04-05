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
    "avCHyWU6YuMbt36XJ2SeNUeJ4RgvkyhabbeUMreo8dhUD8dcgwreHa63mtVJoNTLgEPyMJiFmEjaaqHvvshpXTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jCFhnxLGRqCy7dkAHJhcCHBLwvbYpcDeqCFi6NAT8rCMYzk46ne4sUWNHo7mFWq9DKoiijXZKmTDThJn7xyQS3d",
  "key1": "4eXQgxhUGXrH3SfhuWPETxZg248WXe4n2mfoJXQPty4fdXdWVbp17sr68KqgZ38ufCdiBeLd5ZmDycVeq5m8RM7G",
  "key2": "4NKhxCSST6KVDcxa2368YN55bJKtAjxTVBvv3JcMhwGs1U8MznahGu8vwPs8HutL5kTHnXUDAaq7GCBw7PnytPCG",
  "key3": "EZAkNtvKxkb1oifoSBroSTP3bgGYegFfng1HzfvQ7pwGeZjxA6CJWApnHpTFvhJuqfe6btaA2UxVit4aUnZrJHR",
  "key4": "xw9NTx5FaokiB5QJtVqrMKdbNsi699LPRocnQUcyNELYYpcDSeSJyRbMWbfsA92Zsyf1Tngch6otEPkRJX1i1jJ",
  "key5": "5qDwurTgayZ2RLWpq9GUrJV83z78zUs7sDnfk5RjmeRB5Zc7Qt9xY5NvJ7bm3xWWsGkgKQMTkQE8pgrMaPRYZy52",
  "key6": "2f1eqHv7inE8qrkZm21NRywFwat1BvKiTDpZDBnYGF4gEJ2pUHE3N4qGcVVTrtBzSyY8t3s7NbCmtPkEqRJ43qMr",
  "key7": "5iSVG3gCwwtoQzf5HVRe21QUrhCrcs1zmV6pkWrEePtzDHbUFTW9y3bnQUhook2cu5E3CkT3m7JWxPw79qp2MTM8",
  "key8": "55Bf96u1iVFbKLYbHXpbrXhrsVoGrEPPvPSWRsKnP9Vi3DUHyFB7o3MnyDHtXxUFNWzQeFQR4EnY3dTCJQDe3LyS",
  "key9": "3bZur1SMSvv6zKQurX5kpadHz6trLcnoUMUPsx9aSuguY4B9xA3aAQ8vCeRZbzN8XHUd7WVWCL1ufBg7XPSNHLNn",
  "key10": "5g3yk8qusvY1vFwPiBSffkdfyFdnaJeuBgnpJLoQygiSZLMVXcjvFU634vgJmBomzCot2FKcEc4RLy4YZ9ERN5fE",
  "key11": "5UsvKGw7xhqV4oy6FCeHU5AitdaeqzY5c8exASKeauZzE12GQiT9g8aXgLq2wop2Byuh2d5zff9TwJU4hvpgd9QU",
  "key12": "YyPrBcDzEte6hVWig4wZcftW2ZRA5YUd5VBnrhuLjXtp1Hq8fDJCRs7PnHCkRUjhRjqdQ5omxFa5kzpFV47XMr1",
  "key13": "JN5vKVt1YEURYSUEUhBVB9PdWw4qPAMNFBmkxscyP8UjessRw3uXc5jAvWdD7kiHesbqh6ZbTH1xziFFwYnSVXe",
  "key14": "2fRJyjb5pmsjib4vCgBUGQBESFDR537wQYpZ4fUeze3ghQkbU1sJTi5ceLoTEd7LnM663o4ywxgcbhNMeD8TY6Z6",
  "key15": "whymU9yucTKkTeovEzLcwjbWFB3UtrGeNhTUvcfTxHmMar7PGdsVbYeM398MxCJnjwzQs42zXWJ2tC6QTLSDd1h",
  "key16": "4oN8DWnqVT5qGDWKjWCm9ohG4AGGWn9bjEMNq5bB7xG2wACLzkYWxEkAeeQBBMEMmsm3PQTrqpKt4Hknb5wMcQuY",
  "key17": "43tc3nHg27bETC57WTqGX71XApacwphtD56BUmy4213XLgsYkh4j6bHyFTtpjq6vJFDbWJ8kQBkrkb1eTa6Jsv1R",
  "key18": "3fwdxoy3yNkLGtPQj48yMg6FuWHoMw96WupzcdDqQ19WWqNBkLwh6GusjX3sgLBh6uiKY12WgPTq4nbjnnZ4nMYo",
  "key19": "NDTG4QC3BwgGm7N2UkyesDNJkuErTWMF6BEokhYCBTTMvduBkEw3CCE97J9Q4wLpBkNyQC8VZVeruhWLfpZQzLA",
  "key20": "5LKQvRRAzXzG8pc1A121ELyJp6UJWmoDqCAqkqCGKJELL8HtFND4KpGtnzMz9DLmiDCLNpSfDEefnkvzrSPauLKN",
  "key21": "5J61bMJFMzN86w9DSkGDtUxxMFFjA1jxPwnr3Y4gFPLbR1e6rGkg4PoHDx9ZXmumhLEsTp4mo1x3LfxyvhSJVtDv",
  "key22": "XusmhtquGgiFHgqpqmVMJ9HKPPxBAWsLh68sFATQrp3628SZ18Fi1EXTmBQTFGp3XgbJ98FQGGaR9LYqPi6GERV",
  "key23": "5cBNJCTF9nxaH1KhJBD4B57fgt4rFixp7rEJcLSKWrFm4vnM2yAjfNymgGZVzRrwJJMVbE5g2FXdUL5fGAdeiCfq",
  "key24": "4nThc6W9FM6yfMZhNQLW9ztP5JV7bBAuToV6gqcgeDhLkmf2HfnL26vNbjnLS4dTBbnbDae1C14cn8dMVGbY89Tb",
  "key25": "zXevWWEfWsMJ6YnzLnCTeJqjfAvvnitYC1kADZMXHZFSkT6JPUyTVTt3gUUB5N9ZV5L6dZKP2JjmVoM8SCSdUct",
  "key26": "3TbApiaCsTa8otiRzgdaGMmP9f18QwfBmQNX12CKfHqrERbB9TUcF8ymwcvPX5QigSrQnrGNK5xMXqwCCsFaVX9a",
  "key27": "5nq1JSTowfA6yVjGVuKAFbtds4XLDGEBZW65GpQsJtgfhw1FNV2fVgVmiuX5T9JX2bqqJcpBDGZdiirFFeSVHnaQ",
  "key28": "3Xaaeg8fXZt3QT9tsHzXMfrBEYsjrTNUxDeQx6JDBj7cyMiCh4bSEHHCt5mLo3Hirs5z5ipNbNXZCEEkG9QNsZUQ",
  "key29": "496scwaqvnWewR45A18g7kPcV1hecfRsduXNMd3X3vwCxyMG1tGSbczYfGeRQbNE98zYMmtoaTH6C6CkQdXDr9ym",
  "key30": "2u1WLHbAj69nTALXGEARCdjnpRisJXebEn5UAK7KyjnQE4MhpEo3mKTFYJdHR8HoajV2sZ1v2ELjMwmNzgVmT8gx",
  "key31": "uQzCdBN5QpGx5gbaDTKeDv1kt9UbDpNzAbVQu982TMvYb73dLiBRvBLaaYyW2VYJVggpXgjBfPeY6S9nVX41XKP",
  "key32": "2Xktozo54Lxj9y2d4XYqn8jDaABxibwkMrzZNCxqBZXKfnnn555zMUfYhbYhfuZHYDFStVBuguTKrCBMshpHAdLD",
  "key33": "4a3yx1MCGNJ6iJdE1vvH2N3CSg5R86JdVUZDor7fvRoTWN71o1dNhLZtikA2yUFrFBkiNyqRonYo3HzRx7zPdU6b",
  "key34": "5fSBhiq2viFi7LA5WHRzitf8TEMvbMzp9sMqQNWsV4QTdyLfJt7pNhfhW7UPpBtndavte8VbaBuLyPcppuSzYmwN",
  "key35": "4s6kKUDNrZkj1s4HsqQtcWUh6ExvPEdXt4GnTvr55qg6jLY92YZe5zVGFRodHY6FDKjPcXeR1bYA6ipybhFQGxa",
  "key36": "4xhUikcDtkUMkANCdvuR9HqyE3FHRfi3v4KT8PV6MU4im726bgNStcKurcN65J3ZvnKjXbE5mx5ofnjSRUdUEWiP",
  "key37": "2R5KT7rXsm8RwEk3YpaGm1hTEK1DAoC4Qe1Cf9ABQQywA1oEZUAGfNNiyVSmbfGjCqwpUZyRg1vFap33Svs5WanQ",
  "key38": "4AnsdKgiM7izECWyvtLWTyanLZZSCR7DYu6zw2tEHyVLDkLZEauZsGsvtRcPyJ6rERbhigqYwV7W62xW7zZ5KSc3",
  "key39": "5bZksQkRFWmGUrRkQcYANQykWziyViGwU93pRsFgS6Bo8H3grjACwurqurCQCS8JPU5ALZcNQdf1T7iJuduFeB9T"
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
