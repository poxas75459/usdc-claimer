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
    "4J82ZeS7za4YkecouFPENtyemfknS81ukBDfhupLaQbVC37BtDz3eEeWqFo785FuWHqNDapfepsktBpfau4A3sA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AYcVpT3XMmahqNjAoaQcAVfzcuqPeUJr1Ub3Jmgzik1p5hMZfUjoRcmEdyMkw4wQS15xTFMMMQQXsozu9TRukxD",
  "key1": "FyfS2JAFPLudxzP2trXQb6j62CsCx3fDYDDq3D6Cz7eBi1utLYJJkDzeqHHpjt2jcu1jMezfCNm7XCeKVuADTeT",
  "key2": "45vniDXQKf5c57WphA9K5u8uAwyRFiK2HafT1ZBmNrzT1ydAtkJy6Jnz7izYzqucCgf4xv6W8P2TjbUbG9fZqUiC",
  "key3": "3NYbkx2MpGJMGHUgT3xbQGSeRdrsKsciKAKr1Vo4VCbw53wKpWep7X2MnZuKFbaw38HNrhTABw5eHG4Q4kQHdQhR",
  "key4": "43PgZhaxGapCETbotHyvMJq4zWvrkSzUy8SBEiKEQeWukXZH8Wjgm8MTKV3chmoyqzYiwLG6j2A8eCjYC8ZHEri6",
  "key5": "35CpjrYNiRQhfyyS92tnNL8ved1cEJWaSH5URX1yWqLCgjfYydyGjqJus3KbWVHNtHrsCpmKRBhJLcff1hJe3K6A",
  "key6": "j9eF3KqyGxJ49spaHuTawiLALLkxoKab2EvNnAr9D4BzysBogAem4EEmtt68MDcZVBVscEJQeRWHXV1bUFPfsHg",
  "key7": "5agBV1Bgn88MTysfaPPHH5mVSAS29on8feq1zWp4WJARujjA8tcV4oUn2bbw81s8BcFzFjVTCVjPXDDfRZzLXozZ",
  "key8": "41i94UrDWQ3gLYuoG7jviMsJdAtqPd2qU1F9SzowR2JoQrayfVWmh8T2WKT4M3N8SpjVYHMG2TWNctxBZng37nwu",
  "key9": "5C3CyLcNjKNbPDD4sWQsz5wA12H8eWei1VZmMMSJFAtwxMkxkdfyYnf4ptSJQhoWg14fzzqQ5ELQf6mGe5xr33Kt",
  "key10": "3WggMMsNy4xMnpJJ9jAFiVG4GQyTffbDR4V5e5EhvemM4Z6LmreokhkJ4UoyJriW1kxa94yE2yvG9Vt264GFc4YH",
  "key11": "4A8upjTeVuRQjAJk7oZWsFH2pYqhdYTV25djgXuev89e3MoceE8Qkqu4qJBwMwyJse6ByBtbg46oNA6ZzuoJwSN",
  "key12": "4fgHdR8zAdA8vqvPJkZY9y8WZmKTk5th1TFmGgaCU4N3Ab1TFCnKT4Uzx1GLuAd95ia8H4oA4v7J1trDeXC2Zmbg",
  "key13": "36eueKo67Sdfa4afWZUyQt1hSUzxw9rQtnSobu9iLdpsKgNfxgnqAMUMAqT2LvGsxwR2dChMbmMzVZQd7jVc5qEx",
  "key14": "34kYUDXQUzvzWtmaji4Q1wSc8hBK5v2UVYdjpjvW6GooZwQomWgQJHRq8o5Fhe6r1BBaFMUPE7Nz3zCUeGRSuCHQ",
  "key15": "5uQWKyG5LnyCpCNS48aNJmdTuwAPa5g5K76Sv4wh3iVe718n24nNbEVj2Ab528fj9TrpVRjWRcD5HxM4Btmog3HC",
  "key16": "54Dpnkxvy526vir6iBSbiPDcrHiNkxfKsMJYC5tr2iHg1mJhoSo1KziJ4kQTjTLvYJv5WRS2dG3RJJcEsdepYMrk",
  "key17": "5N46ZaCwThkvPK8Nvq6wMcTh9xVPHDUNQhqZuiF5Yhe4fQwt9ZhDDbpWHVQsSyYpxL55Js9E9pZtSxWkzMbByKnn",
  "key18": "dg4RrmVhuSoewwVTDTggHcemmFTebWeLjGhSbKu6K7kZotFW2dVpmTwmLCFsyhPm2AkYom5Pj2rauGxKjRskkEr",
  "key19": "3nTmctvKV16DFaHeRxMC8ppZVjcLSfLGcxBejjsUdgChtYEWP3KygWyccyzPa3Wy48uorxWswW1M4YAzHjLX7zWr",
  "key20": "CwdGxdFx8MJ8D9XSSZ2y9mqxfDNdmFLP6vXT99rYP5ZpgUakySLGvxRCx89aKMGDumWJs9kRUVcyuvjd6xjdYcZ",
  "key21": "4HAg9M7izZELgmmLuyUswSnCAxGzFR5xHUfboE8BwVHx3eczvLfZ6Rw3dLb652Ksr1rfzMZdKK7Lyv7FomGtWtYt",
  "key22": "3ULPQkzeuQ83qzk4hcigaXkhA4vmZ3iq5SXMFXeQjHeUgsjUXNqPqazE9Cux6T2J2b8BT6fnbN7RohtBjk8MoD1e",
  "key23": "3FnBcd1Ci4KXJgmFoveaWoLTnNLgm4spvPQeg7EHKC7xMja3gT4kjSfRcffcaxrxGoAUFbEf2qGQtesWbnVbtBBx",
  "key24": "4MXQnyU9NrG29uAzqbqasMGVyuzDLsXr831kQsw21kz5U3T4oPRc3KJUF4BjEAUVt6RDwdRTbx46utPx5GBdPSg1",
  "key25": "5JVKghR3k4PBX5AHJ6bLM86b3MEkX9F1nPsmgSg4Ei7yjVAWJ6XwFTBhYae1Yi5BWUGdmd7bcKNoBWRfE3SuAgPH",
  "key26": "4hkgAjvWhv3rD2nAUAeQ5xUiTEgfe8dKk9gcBhn9tyLoTosWjtcssNXxBAUp6VAh4jKEYsT9BgxBEjvGT1pdeRT5",
  "key27": "4FEEN6gxQjGddXjTkXvZK8t99D5PcaM8S4S5fpiUSiYgCtPTGtSZaYAHWifCyt3cdsbXTTGPKiZ3UqT86DxDH3bB",
  "key28": "413GGtCcBov2mmnMpA6t4pYEhUinzue6X52ABzZh7o2psW1qEgNhSmN8xaPHRuWkcwX1MitwDYXCjMgrTZzxAvsq",
  "key29": "5wu6eejTb1nzi3THjqQGys9NfiZSCTUQZSzS42KcAu76S3FfSr36ji196hjHHpPRvjKLKaJbLsNeenRGrEReioir",
  "key30": "2MvSyXSXvdvxz1k4ZEmnXEVLQRjTMGohDwfBQDeS41wfQ4W9sEKWRzVpj9mTqxhNvCkJ2qWt8vQdmFAF5mSQKdhq",
  "key31": "2K5hQgZCpVq2jQ5SQH6mSyyKEz8t2VQoRdCyw1bpetoMsBYKVV58E2nLEBHpkfjLamSUV1SYfG6WpKVoev8U2dyw",
  "key32": "3KfdJUg65Z3bvtUyvzhA9eazB3xXJADetrz7rddGFxKKDxEWQwCpPP3BA16ftgbYUHrov4yR178phAQD9MirhwK1",
  "key33": "58hn62SVkC4Mg8W1GtoGg9cYd3fPdPV7QAcubmWmAGzyVbd28rRyKETcn1edntUjCr5Zm1twVwPEgscMKNBZgxZn",
  "key34": "3oc4acTcpQTmMBgBkAh43CjKc9zKmgEFXDXLAivFxRzU7yBs3FPpvZvB8WUnXt6Xjtz9Sq5eNHNGKfMUizUdpqeV",
  "key35": "5EvmfL3gkNsHcFPfrb8S9BPRzGf5iZEeJ35ki682wHkf4sv78YWXGn9cEzrtAEvCNnYB8RUmdAn97yQEzf6NwMtR",
  "key36": "4mUG6dwXgX2ydohRZ3zf8cpBoJP9aR67AEsu1FZSYnnkmfrvuimeHKA1z7LZ4DYbuXHnXFcLGE6uYnSmy8e4QjQG",
  "key37": "2A7v5NJPHv7CTrtyTjuBJgqV2ubs9ruHmxNoRCPATK2Ufs4PLdkHwCP8faUsm9ojaDmPYCHxHRd8Lp4rDsvM4oTN"
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
