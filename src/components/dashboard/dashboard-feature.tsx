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
    "2N22zGqNQuxCcc1KBhMSGHndrgdiKnBZAAmMcH8EwNNhjsFCd8o5iZ83h7TCPa55aLATpSMNsKiLfbFDpdqkcjeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQcto4r6n8VJz99seP7iqokhsr4UwiVVM1B3QWh77WoeS8bnY3xCydRbXLbBcfAYorJmGA2R7WUQZXkZnKeyNfa",
  "key1": "4ZsDQB2azr2iMwCe8ruZttUK3QKJL7NtZPWt894c2kCtyY9d22UxqhdC46RpbsKjFYLq7D3jXrNMg7xixWD54H8G",
  "key2": "5rnByGwXPtoDvjJgVdiKi9UVoavxjmRqDpYDYP69uFHMEELrJV5dN8TXNoU9Wonp1UzPTMGY39NQFeSXmQCn2ptG",
  "key3": "UcqDwon9c4xYhdLbB4oneiQQyiBhjKLh8K5ejzW6rPTRueNnXqbb3TAbfjYKvc6qs2DrLPxi5TmnvvESjd5QjVn",
  "key4": "DeWbvxTjySTWvi6PimjUAV9hFzHipRCsgWK1jhioQq65dQEpvykQ8pUc7HixAkf6KN5tvLfM8VfvDdBgp6ZaBEV",
  "key5": "4YAKri1CBrd5QDJNgtiC9agVqWPJ2JuT24hB5rBrf7EZuD5p3YG1nD5QDmmdmxN6jp1YYidtzdhMTiWieGx15Cti",
  "key6": "4bHsvZTAyxZV3arDC1fb5Bwrk3J8V6LLLRibqZJJ2L2oth8zdMDzBPyYBodYg2ASMYhYMUNL3vHsFSvZW1cCpqTD",
  "key7": "3ECfv2x23zerMCamD73qrTMm5GaRkSHE3FBwQeUbEDvF9vQyAPW9MnDhjzSUWywjMCAne5Y24gsgetDAbro84Dj4",
  "key8": "ZA6KvKvTQEJFfexGf2FzVDY2rJqQSawMmMPusrSSXjN3377srHBH1acLSP1cpDcjk8J5gfMAiCo4W8HWVUaTmCV",
  "key9": "M2Z7fawSRPVjv96Ek3qg6pu9Vtufu2jRcpsRCaiWECv5YLDC4DC3CVV1tqSXE9WezMP4swtWbyJLJJqSj4NdvJk",
  "key10": "5a3DefcYb5FYvDARKwfNdarDKC1mmiJsecHVig4rfGiyeBf9TWLeLh4ne7HvD8TpxY8UQ8sMM8EaQeejZteTRYo5",
  "key11": "542TF1onSn9XNFMFUiLzrmKmWDLQj4b172iRuFKsLmgb5A5Jj6kMx2xfoe21FGx2vjYKi6WmABvpyJE9tNgaHSN3",
  "key12": "5qHAZdH2R81P44kmcYRmgDCxjVGNdgXqaV1LDvURSwCJue4XEFxb3H2pEZYwojugdZ3tcd1txeazyjvjM8Gvou7D",
  "key13": "4bwyQMFoRcmxFb4u8r9XuQcr9KGgPdwjewkUcBSoSTpxcPy69kPKV9K9GWrVknuDBRo22RVDJWsv9ny3d7Eiur8m",
  "key14": "5tGHgLgNXcQigPcraX3gcTvRbShTmuaQb8JtKxZjJdfpN4BkY9b8pGcJXEvtKwQtAK2jQa1ucpzyQP7qiXoMdKc",
  "key15": "sFzUMfAuPS3h1tdNFjFmFAUmrXPUPe7v5i1vPr73ZkdHNR1YiBhAfKjetpPTPVo6JP8A68kjDw5J2SnEkv246es",
  "key16": "9hfxELSKg8w6RRbNMx7A3mAjVBgyv3T4eT3egDX1VYUQRKw6ndMZ3WpqryW3mURMP6UVW1r8Z5x9ixT6m73YhCm",
  "key17": "63CVhiNni3p5kTUfcHhbPnzRgJPdYgzP1K9zA34bux8fKAhNVPtP5AcqqBGPtMtbwx6UfHVFx7T8LZ3b3gSKNn7G",
  "key18": "5hDVt87Yrjs2Go6twj7WdV6cvhkZgBytdeTzaU5S4jJxppEHpreXjocpmNXqfAXvep7JqdBDoYzRZLbLCtzdk4Vw",
  "key19": "56Duiyi5BhmCk8gquXU8inmZy8D9zzsPWpnBkWqWomGkQzzQmuaCMCPGZNKcyYbbbw4jTbYuQetWjB81NgiHnmHk",
  "key20": "2ceLjyFT3D61NSaFbrhhHz7tooEHYNycd11SKGHzZF5CgbrrrGqdTPTPo9VSR4TUNWRCmRzKaKtFv7mB3QyWzhXP",
  "key21": "3tcvi6s6eH9foFHAUBrVZho8w1EAPJqTXkdfsUH4sDztx9qZrTTAhiVvingrbsTyRphchtXDpf2Jij3nzD7AhKde",
  "key22": "5t9P5bRKbqj7Zr32AYzRz5mV8C6o3SMuzMvkAuwN5wucCE2QG4KbKnoVCtbNf2pRbb3smEfm1qZyR9SWY9WMmkd8",
  "key23": "4Esz3pN5Z6zejFhKr2p3N43cbk3Z9uGvjtWZNTiX6Age2FYVBUdoyNMBPtfpyhwtSisJNisAfDpe2KoV4x3p2D6Y",
  "key24": "4c6t52SHCgoQQA33FignVNDJ8Bh4XDWyqYNh7TPNK8ZKKsUB9TiWcsKHTqCmMwdMhtnvzshfdqkQCfrDZ7TEE2i9",
  "key25": "2JxRsQbzB8p2m8YCjwoYRJBbpufD4HJD8hSpgAoQbWtHTWMnZ49CmM4S1SvzKmyTJyXJvP9ZYjoGCgafHe8jka1F",
  "key26": "2x2mF8XZNERJZw9TeaGzobEbKGwRpSoZSGGDzfnwwYAbobfEB3WS472738iXEJ3q2UkLRbEcFvcDbdg1tWKZuMAW",
  "key27": "3fCMiJken2YAnpbDbboq6D8jpmu25Vf4jvFbTMX8sULdzMzsymYda6TVu9sWr2WP1pRwnLEebUHu9dorgpbSC4ze",
  "key28": "4ExDA3XTYJtKxR46NSV257hyfLKGuisrk2oEH2eaqQ19XUqXqnKvMuJTi4113kRJDouhQX5FqirywJmaL2QhxYTA",
  "key29": "3q9d5uUKMgRQ8UjP23mAsDed8BQ1DcCNAQ1b6Mn6HMPcz3pQZtQiPHNm1u69xUdjHwt7kuPwH5wxXTVgkbdxw1SK",
  "key30": "63CSwrrtWxovAobYcMcVAtcei6oGTTVuABbhURfCDQAyin5d65YHPua1AS75Fttu4oQKetBKoNqfDY8Gg3g74j55",
  "key31": "3vhAmvCVRN3CBrhNLh67ZvFghY4Rz1LphsLNZ4FMvECwTd4rRABjQxHDBRV69qWA2k2b1WUHBwxhhWCdowGMpHdE",
  "key32": "Ugxudud33RkGRbbb5bquJi2WWtpHCNUv6Ufij2Fro5LqrL4B2fZdZXSQXUtH2EevPFPtAZS3oGcLYBYCBCs6Qh5",
  "key33": "5kvZPzcRQdfjxeMK2nmvroTHui3g9n5ETKyCUipNMQw3qWKJAqSWU9cuoAy6THTZ3tyo99eYFkeggBZygEKvdcEt",
  "key34": "2qwCupVsMqyJp4bqnLJnGh96WiapiAc7YAxaVf8sgTQ43P9KykHp1bmXHZsQVgPuEWSt31NyYkMDWNRWwC8jNe78",
  "key35": "2UzER6XSmHWPS6kR1omoLdRvCYSHWv3gVrVJU8h6aYECWZpzt9nmv4qpTt34zwFXTLzUNoUok3narAapR76Su3QE",
  "key36": "PD7RhjEzDCXte2KuHRffMr7sYKHm4cYgzF7ejCNukSduG6vVY3FSfUVu4ofN9RdYeuknrAACERWYr7nk4kANetb",
  "key37": "HXU7hRzd2rbxtohjeCFbM4b5D3wpzQERRLtyWHVX6NFodkHmPktnoVrdMJoEfv7Z1JV55CY1baNXpNFLuWzeY4s",
  "key38": "3YpDHpwdfFMDZhEs9YpHK3VRDPNhWkANDxiEYUWCdrWS2dhKbAkwrggrbmjWtDFneXZz7uP5siE6mpiZp6GwuRyD",
  "key39": "3MZ9e2pfB8XkmNZjwRWqh2X67oG62igw55PEcdJq7ASDtKoUueC2TP83b6tvimEh5jA4rtw2T6qW5ezyQGyK2cLE",
  "key40": "3ErdADHFQLhJdmR9EpNJbELtSyJaCLqdUSZhopWXhncvG2e2XwayxWRyEhWcisoWZCEX3Yow3Ht4mJVxWhqibqU9",
  "key41": "35Vv4jQzSjxYnwjTk5W6e5BSZarA2oWmPJau23CG1h7dhZMJDpvdJsoqUZHkrpxtv3WD1aWP9EC5TvCR5gNzHczE",
  "key42": "5WccCuYU5o6mcKz4zE4eWZiFtdXpU5SQfdbtkGd25eWCEeJ43BQ3jDzFXNybJuLSZH7yHVmFNtfmrRWfVsJrUdCi",
  "key43": "3abF1vWNi2W1477FBh56BJyWHe2o4FJ3QaWeFrY7miKxUpjPFH1XgRjGxafLC3fuxrg9krcJ35JH5kLBf2Gt65ix"
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
