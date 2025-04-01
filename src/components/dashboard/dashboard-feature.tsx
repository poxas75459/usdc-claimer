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
    "2tWnP6x62rCPXP1U9SLieK5MWV329s2RYykLfPuUT3nAHeaciwv9tLvrAsZiidun7LZ6TNow3vQwAJriW1ye29cF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z4MJ9vTmxj7BH4Br9m2XPxHgjU1fyTZyaEVf4CkSdTGbhyDLTXZGYPiATwxQBBKrStgqGD2w54GmoVH2CZCAWz7",
  "key1": "4HzLnFX3MdB3ifgi8KaH2xS3eJifiSAba6UsVYK1hn2BG3hRLVKsvhRdcaQyCsnMLJQhMQ1QuAjtHriYDQRtoUfZ",
  "key2": "4NnYJKdizgXGhWpyb3QYmGbKVtSdR5JBqg2SReuABczoTW1hiEuN7JtDgXKdmGLcGBs389QaHWmCfBhzsXXye9x8",
  "key3": "5ZdpRhDinRraRj97ydDTrgU16Xc3ei9m1RLgv2n7zq4HTds6tzamVEKCJ5ZovLVoBYKZyuy2LRrZn7QQmgeN2GPL",
  "key4": "5bdpDcY1kDh9RsFfTS9AAGBeBDNyxqxYy12mokwEDBZeTraFG4uUvAkzeBR5WvWnjJYCzf2zJpkpDnJwGTAcPwJF",
  "key5": "ie5tLqSDSco9TdjdnkmKYuJ24aT4xVBJ2imeSPHD6Vy64YL5r6kwWh5UYGnAFcmUvbZvGTCKeLkw5upeSuDhi4d",
  "key6": "5SUtoicMbUVM5FHiE4vGtCZ85A3WFY5janeTwrhFj2UDiHrxhJNFRHUUHu4s9qKarYPCCshZGwaUVZLipCtBhiks",
  "key7": "2QJuBSxgi7DseVj6S4TPcmgcUNhdc3UMEmKMzWfbs4P19tVCz6wSf3c8FUVZvgf45v9JVVqDFj7boWUFS7o5F7rP",
  "key8": "2p7DhjZoe1wBFVsR7Ubix3CcsMmNwe6yXTptNF2XYpkzYNd46WqpX37VcGFbVCYX4GHREvozueTuTTgTuV3nS8Q",
  "key9": "2zRqJQAdnvHEpceg1MwotWiJf1kxBRGymKAkBjHZQFYHUmoc1v8szpLQVuFLx7wBh6iffqTWCci6AwQxFt5B6QLe",
  "key10": "2mnJgfyh3QPxbH1wF3xVbmzPwsfo9hVrVTUhEQ4GVWssDviHFebvQhH7vcjgT2eWpkeKBvNhMNV2HjrT2dnPhFai",
  "key11": "4KCVhUWCAvSuVgKmapqcD3Xee72KSjuu2heaQ685NwVj7XeJMQw7RR3AjHUTzLF9gLYB2LSdsScw1fTr6fVnTX3H",
  "key12": "5c3VQAGSMB3VabfDqAuqwuSaape9KZV86FijWS3q6G4ehqGRkBky2Xpd16xiSp2afLBLUJhaezhWKevfSYBpCxSr",
  "key13": "53MuswQynnVns9uXc3DP2SGXiywndkP68M52AY3xeeRbt1azBDBZzhRThuTY2uXXciFwQutYRH1eZzHEYSkERw9h",
  "key14": "4ZPAeTpjQT4twjM4J7jM2eDW3ShvTJKw4qzehhpkfgPH6xQQEhiEURjDL7EvVmTV77ymctyGs7iqTDiHMS7CKS33",
  "key15": "4cpDWxJxD5k3SSfhVQWdJ3fe2MDjfTxRnwmYtJUL3NQ4piSMpjk5NRLKirKSYtFLC2E6ELW9HNxnseQakjojQkpo",
  "key16": "E97agnzUHrJte5Vi62qW5vqiHpAp3BZtZCGW3X687UHGCFQ6eD4jQYXhUEtzYyb3ybX5dnGt15CimQtCTnHzyjv",
  "key17": "3dxEsisZ7FGrGpAt8Gcp52E7eGvAZS53xQTXP1CA81DD7DQXY1gbbW93W6EqPPw1xgmCPjZvagWVdTJz8m7xcJni",
  "key18": "46XNCzKeqpxBtYSHNekJm8JKcb3hmgSVECoFaYyopfhLdnJQo3GwH7gUDdhdR2jvt8f4xKJPvfygbG3sxKyBJdhK",
  "key19": "5wBPaCCa6qc6uRJVt4bwSeicB38e7qvoDgB6YWpszbibCKC6xDmHuUCYnquyrWzGBje1QLDN1V4TqWzALxYVvA57",
  "key20": "2Gc6abDX8oMCQQJMsXAmNWoHB3CGdvGwP1tV5NUcz8z5vPXNZGe1Zc6dHrAq45UhtuU5XjFzVSmFZjHvx2S8pLme",
  "key21": "2WJt96GkRjxrSJUiwM48CUtEB3iAyHqPv9qzUGm9EAmvoAs895CWLmTgCbESd8WdrdtHJYSszLj2vnKqTaApCF1V",
  "key22": "4BsVQTpdLLSeBSuRXEj5kUGPUiN6Rw3KJHrdJC6iAmRqr3f7NpSVSfUiN1VspkYQUjwhd4PeAeo5RytXdwznTvB8",
  "key23": "4UCZzYshsfQhBciPRmJfMmMsjBuScY75mmSueMN6ngCdkgU5nwnEyG9BJGehqo64mHWhLPSbBajBoKM3qyGKvv2L",
  "key24": "2BtzrAttk2zk15kZq5hqmweo72H1pHjehweipy5iKujNUaNCvvcZsVvZy1pjjRk5ZbJerjhk3JJoZYv5yDGvPNZ7",
  "key25": "v8T1wkD2iZF6W66VXR1uCmPYWUdd92Z95vRPZfDdww6V2LqMdBpRhVvvmnyYXk7qTXKtssxTVray7WsGvGw367Q",
  "key26": "2GtV1Lio8Hbt9xNbGA3yopoCG4dLLiprDyv3X6rRZotZaxQZPdgpGxhV4vaU5pirsgeDVBCpnCL6JEoo4eSp2j5L",
  "key27": "4QbGLWin1Szi6QBY4kEyKEZGDK1dBgJtKex4oqj2gmP6mnJmN5ajBdBPz68QmvGqk1nQPJfox4C3BMTQUc1TwGwB",
  "key28": "5iuAeFbrK7wZmu53xyAdW1WDaxjYEPm2Dof5cK5SiMtm4GLZYoKtwLpKXxkH5vQbS8ZYqL3hdg7GX5Q6TwUfF9HN",
  "key29": "4vquVXEc1W7McEEJZ9niz5AXdbKTGXSkGdLXWzoDbCaKGtWdDVbcW5mb84PdYynif6ZwBWCzoFZ5rGtV9Ahc5gif",
  "key30": "4W3BBLoSwdU81EzkrYzfxmQ2JHRimN9CDofnJAteQEsLvtUirg9nW8HiEpNQtbH5uQJzdjHogbRhBQq4ywLzz2gL",
  "key31": "51sQ8sUjju5Z96pxjZScjzfstSvytgTzdzf6zQFgL5J2AMneAw2CptfVmER7dQxnMAy6e8TkQrzjAn3twg9rcNQ4",
  "key32": "2c3gZMEgYtq1mi9WBRAkjwiq9Ysj3z9eimVjDBCqow8GpyLTKQF6dd9ocfQqpvxhXnm4hHowoomBMumDm8SvPVJX",
  "key33": "4crtuLENoY9m3DMgPgMX8jhZVbAiCxihL6jZGNYhYuMpFo1gt7ksG1Nt54m5qUuQfTyHxMwdvDGK5coF2f8gVUex",
  "key34": "4SKMMxs87DYhA1LqumTs8GPx1fqyV8XEVyTvZu9uSqkfCVgwHVW1c3zxLdhRfQVektRdZtsQ45hwsV6g66JA5nQ9",
  "key35": "5oRjh4vJgwmNyMP56zjNS8xmePHka1TR7xHKZfCXUmAaMr4Tue7G33F8xiQAkapMkgnaDYv4qLTaQXYM3GNXm7CT",
  "key36": "4j4RMP5Qs9QRjf68XVmeTaiEfBBnxgpg3FBCoyGugvPYLqvXaoVujyAdSB4yw94AieYT35GAKwo4gfXBDUadkGGy"
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
