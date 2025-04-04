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
    "5x2J3MYrqvLfhix1k5m7YSL7xK9oQAYSDRDxo64gbtmngQMKqHbEiYh8pW14wNWDra1hJsnsawM324Bg1Un3q9rJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XbMqiFPyQEbZmGnKZX2kscjKazmqJLgJ6b52xbgXrMAgHzHoUPo352BQG7Xxnrif3hkr4VjBXWWSjhvMc7nyfcK",
  "key1": "vLAVopBwy6EVBn61hb6zb3Tr2EBKNTATghXPegGmCtNZW5TRw2tRDXA9WxB9mdKp9fA9DcFgKoz2xySWrmj6Soi",
  "key2": "3sugvAEpkxZxFT5ku578YBgfmxstoBZkdR8bK3jfnUb9DreoeNkF1MnwtySKiLcYRbZAv1wSX3Cq2xHE3o1AvAep",
  "key3": "8bR4zoQutVa53b8k3CSZEkrBGRVgtXwMcb34bLy6RpTo7zhdGUYM3fdtSS9ki3MfmZX36qtjRLkngTCbhv34Y5m",
  "key4": "5qUK42Z4g62w7oRyXFeom7qfn9gxJpScLdgvKx9S8a3uo7Z23i6N6FV7RDtCb7wUnnUHrD4LkHQRDQve7MAWLK37",
  "key5": "2uSshRy1h6mA2AFJg9asWrWqXsVeTFCzqMWMjPXMYrknxf48RJE8TBHYYDAzENd3ZqV4LG1mzqfngXYeprHtfhgh",
  "key6": "5ifPX4VEm3eSG6X71CiezB9KRJHbnhurvD7yT1Qjgfw2YsdFXJjo6t7Yn1vqm1XLbxqxwgZzUxk1s6y8hvWfsPtd",
  "key7": "2dHGjsSHVeYuqmsDpeRQw3fqJkGcYhJ3cKTKpbqKKP257mciwxqGymugSSaexbNMK9p7u58SCRgN2ypmZ572fQdg",
  "key8": "3EEAYxo4Eb4NV365Ujk2DBoDJWBoXsvNTHGX9W7uhLxqvpYznEvKVCegYfg5BG3NYL3DwdsredHbEz73KCZucVrY",
  "key9": "2s74akoXhcz5BEBadQMCv3YRWWfGjtYRqp3pwNFrYFWfuu13ieZoiHCLLqRcLaK9TpQjsqMQ8pMF4dy2nxsrsfbN",
  "key10": "5UGdyQ6nU46ZbFujyALfsXFzKt1FCUZFZWS5QWAKVqqdFgWfhPV13Pm4ATgUNpUa4DnbmJ47N2B1kJ6L51MFSuDi",
  "key11": "4UsAF8mdpUubjXqLj5HsT16xCcGGDAA2QTyeW59WnMhn4TtxDKoEhvSdzmceYz32pvhBqZWxTHRCqTZqVTGarGrT",
  "key12": "R8fph88CFEmLngmhtg6rUB1zikxp2H4vNv6aSg7cfusMNyuYQ6GCVj3e18d1mbKsWbh8sp4udwJ5DJB5d6yYcWY",
  "key13": "JnQTYs7tpRsubdz2S6K1pCQJrUBNPx3gCHBpnhpjyLE1mH5HmrykdcZupBxKe7Lj7SQAJAcLv7hPfwAHwuGntqf",
  "key14": "2CXMCws6imzCC9iGidCSn4B13dyUmCNDo3QtWydnbryDMKgDQqeKjgHLRRKi1hwsFheks1sqxAta66NJ2xrTRs82",
  "key15": "YDs8Ktur2Crhk9HzuE5TmSVKGNvsgfw9PCi8ZvoM3LjFH6UXqJTwdWYAYsGA3z24gcSWMLU2qU7jrg4DaL2j8aw",
  "key16": "3TVfe2SD6ecy3BGzKoQjCmJQMYFCtWwp7VHnu3FDjRekEJTTLJAgyKPknpb1MiRW9pjeAuxm9N4MadocnYiHLCsC",
  "key17": "pFsMaQaiPyWTA8eLZHh3u6odjNh51B1niiN9DpMgKcWg21aV6mBMqvuLcruGXRkgF6Jxceg3j6kE7UNTd6E65pZ",
  "key18": "2YQ5pWh3qE41SptYjKR93fxADkkY5VsAdXFmxPMpdPeP4oR7f6xgvcBS4nv1NzTEd6hPHujifo1pn8aWd7J77gCU",
  "key19": "xJ9N9uqkUHoSXXTAVfCoZA1PGZVhjLszw5gPkRZByC3W3EdwCEkwfgfMz85xrG5o7aVp3iH5g8jMWwZDSFFJgak",
  "key20": "3KESxyWbE5Ff58u9FGvpSPUzA4mXy1BtWBEi4XghjzEVuzHM4biNpaadoEm6ZNGyeTy7h1tg3qkdBXaw6CFj96Gp",
  "key21": "2xT76Jimer7SPyKBBPw8z3QZ9DkGBz4DgfdeVrTZHC7JhrEXn7aKLiQsWmSaCsYCNw3hpPhfhs8DixmVYhdt3vte",
  "key22": "Q69ogpzYvvq4U8t2UPqQRzMc2DxYu4GzV6xzyfLxNAb5N4tFb8jMsu4RSmXwu3XUFxAoU9kSAtBagnWt5tPswNw",
  "key23": "3MaKJ9NikRQ7q6KUUdHFfvrjbjBzAr4GXbx5AtGeja96NEAvXPAfEop1dtmKGXpDWTSFfMR1QqYSfT9WDETonfdm",
  "key24": "3Qbk6ZBwjLCnRboKMEJpQYGwBzBZnhb4vfgrgZFmUVUDEoffpr2hwhvMJTh1FmAVWghr9a3ja9cUioYidv84KE9o",
  "key25": "3eSHN93PRBJUKhSVgcvtm3oY3t9rVHJGexPu42eSYbtkKNhdidx3Dpb8CH2aX2mZ5dir8KrsXWi4Y2THahkWcw18",
  "key26": "3YxEHgHxmcDWH8CJBKNmXkoYMN4wnoa7RmJySVbHKtuem4bKsjDP8NnnEvG6nj3vRQQWjnutxz5pgDMbUsZ8qX9E",
  "key27": "4aGfdho1t5jdKwHvau8giXjgmr4WymKeSQgMs7rdc71KmZUCcH5n7PYAKtZ5oTgWrwaXg9J2A99b8YbxdBbUFyWf",
  "key28": "41mSdVcrcQjytK8cCFmdrEgjRAqAnkdiw87L6oDSBPzejHcsEUgvUWAX2EviXQehFGPaa75mTZoGYsons9b7dLzp",
  "key29": "5D1Eg9UzDsNpMwMJp8dwuKPGq9pB1Hp7pfJVD4WhHEFHKzztQBeYjTuoCWeQKtfbYeFks3HeFh2V4N2s7Qx4QZXU",
  "key30": "4DwwU3rvgSQyTu4HvxqskQkPAfy3wdUqaCMYJGUz75uTHJ876ZrzEGiNfYNJWqjHxtLLonHyRV1S3dSJYYWMpdRV",
  "key31": "2rwV1YgwhKwkv51XfxU6w1o1jQANB6oc8ZN7ML8hHHbtXg6NkXRbewGWnhGrqXHcNHQNtkQRvLJdLKTUGv2vY4vZ"
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
