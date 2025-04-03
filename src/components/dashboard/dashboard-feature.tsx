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
    "4Pb1qFCtDvWrAvJudGRz9rjDKiZbhbnKJQzD4rGBqWyBCa4V1qaafXotz16yW4ezquxbMzk49YDUtLVeBVg7JJCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eiVZRbqchb9KfFfna9ZgvvVY9cUFJo11yS1g4BoyJE2mBY4dFhkLnN2pCLRFMmsiCCuBEVG5bQEcoGZFE7fAcvF",
  "key1": "ydGchqN2qhpwkRMwYh5KQ8hR89q7iBHRRbXbGGHtzgLmzNu9jr7gV6etcXZjjZiyFXTeJwXUiQ5YwQJ3JscWHbY",
  "key2": "wdXsTh2cYaQis2bMnhSG72BiqfZgBgVxrikwbR5XgziA4icRrAevVDCDST5TDmTV3bfHY76BNQ5Rj7UNtkotYDP",
  "key3": "wCD1c4cA1RCDbYRL6WqySRbqxCFbmFcxxEsN1uEpk5euohuxmUZ3F7J7HFoMDjrmy4RXKY8o3n2yqtx2NTXwu2e",
  "key4": "61Agk3pc8WSw2ya3i6zWMFnNXANTzxVWqdrL7RuXCFw2PdYVaF7WVQRbAj7LB6SWKgaodPSBNMgXnZL9kvowMCnc",
  "key5": "49MJtZiacCLNkmUX2u1oe3KyZ2cm5YKaRaw59zXrM6XC9aY1jfgEEVNDGFfhLmWKQEaNTbRuTghe7Y9ztrJLxGDJ",
  "key6": "3zHivxPTPaRqVV33e2CJEywbzAyqZcyFBQsBY8TmwfwaJQ4haUstPxmgUjVKnyjzmXWW5eghgdB1tngCyQsXRtq6",
  "key7": "3nEZ6teKi2H4nAtdHyrpGE1F4u8DvkgeKnq64iRPK6F5NNXw8odW314wHPjRaJtGA2GD5CKZNQJnkxw7GtELwaUM",
  "key8": "Wec6RXk6prmNpNHvP6jojTTNHWGGvXtUajnBF6VqqMXsNAFb76XjRYVyzf6vwLDXnVx8FwZzjm15f21EfgNp6LW",
  "key9": "21jvfovMa7WfMe82kueJD7wvu77KffTNEwmkjVERuzghoHdpHHfKfJS1S6pHvJNB3D7sqECzZTVeFHVEnYBpD5fW",
  "key10": "3dddpFChE3Qkmje3rixCRp4fSWH7P2cppoAhn8WGcaJeMXCUUT1Yy7UYFq1tWLS4SD6e3esezFiFyX81jjoK5PKW",
  "key11": "2MrnoLF34ztC1HdvdyTVWqbJMHwafDo8FhwtQAAZ5r5xkuRK5W37CZsnxNHSrU6TZNvTtPchLbzYoHCz9NPJT7Gs",
  "key12": "4Fvm56HptBvGScmGpKfC4wRddDrPW9pjBLjXUVpfvMxuMbV7E7ccP49A5Tx2xbK8DSKscU5t5bjtjHZ9sKD1hqGR",
  "key13": "3BSWAqjCsxJuPxpbwHQ1tbVRFode3NFzxXcHp5ptX4Pn9sMs1MEegcJ5ER6UUSP15mkdpy9RjhBkyMLkZ9Qg83YF",
  "key14": "524bhmJajTyz7h7xcFokhjp5JHiUhR8yhaHY2UYV1Xp1aGyqxU27vB3LWSuDagEEye3NEBytpNU3n43RM72YjCTo",
  "key15": "WDFHfLhSSqCHXmM53WaoxC177Kw7RGVbs6PNfVfpfoRfwYXAS19vbZPFziyfbxmbqvCfW1Z4EEKcM2KJoNmwuqS",
  "key16": "bT9HrAXYhiLi1FkdbTEuKtSqT5dXiaBhExKZDNZZhzUy3ZJhYZYt3jMRYgKpUoaPXNbbBDdHyRb7nRGXjf8iyVL",
  "key17": "5eb5dBYtiByCq1bPB3VoQTTssfBSGdCvUQ1BGym7iudw9nQeVGe3Ee4U8vgJC5nrijbYARw42cQxLQCrDf58k86C",
  "key18": "4EF5GZc27LXVRj7zM1nXbsAE9QeRJwVPqF963Cy16n8PYzScRqus62xw3ZadW9NXWBzCWJhaZydTEpJ7oLGx5FB5",
  "key19": "gceiBiFtScjBAwy5vpzsbEZa8LuLeJpQfw9swHrZWrx9UqmuGpuG2MtdekvWufEtpCM2jAwCmpN4ADyJVoshsCx",
  "key20": "4Fb42zn1qndetb3CUqnkebP6KCc416uztiFcDnU4hqp5Za1c8NJ2rnfKERrv49agR5g6QrUpTsRFcaLbe8VeYQTp",
  "key21": "5qxxCwbLMh7eJ8cVk8MhMaguuvD8gJfVRXSxaDQxX65rjYmLajL8dPHtGBBUCyCJqehaYxauPDMX6hSVD8BMWpk6",
  "key22": "2GnSJ966EpgtttjA5Zb1y486BCkKAXRMQQjA7LzyyzHKUe1jPYiGmu2ztzw4fVSi1Ten6YhzutnA3eTxQy6bmWc5",
  "key23": "5TYoJMM8YMBpNjVxfQLJD6bGHf8DhibQyGYeLyCoVGrSqYuS3C4atoKuNaqf9cgA13c1FANq17ANxA6c3Kd29QhQ",
  "key24": "44ivyfSskk8SXSFbkPVaUFTca7WswF1qYo5224o2BHbBFzh6mkqDeUsDEdYk22K4Gstve4GV7tvQKjL3RfwBueyU",
  "key25": "5XEtmD7JeeHgx4RQKuCdYFBPnYQAi4VfXicydUFoccAgPTcSYTAZB9ac2m9MjxuwgGBJnX8bAPUyVdXQPoHfZq9N",
  "key26": "3J17aMvGARZ8pc8DfBys8MMZ8YjUCJRi4uca4QtJouM1A5BYD8E3fJSd2DEBUkEdbVkhq4XFjzD6rNic9pdYB4hh",
  "key27": "22LRCvaKHTSa6kq4fMNgrF2EHLiYtebHJRnCKrzwQXEBkjcpSWhqmCFsnizUtBt4VDfLQWHhsABupVYA3rV2jYhG",
  "key28": "3hjzunodwCxGfiwvbbcLHuHZCqQVGCvHGay4VBTgy3PNdwTun7ZpNazxFMf8b7roqpEE87ZSZitnXZDGgiDQXxeE",
  "key29": "5eDUBPJYPfbAh39bUGJCRb2jKvLwJb4rWrFC95mFckYk2BjJSme6hGNftHMb1GYEddvktuxjPQqt7DCnbTBLyLir",
  "key30": "2oVjvGx2r78uHbg7G7KwJ5xjeEY8M81svzmZ9pMoyakoAPdy5YZQJW5nAaUR1jda6yu7x8QMkyVu5ZHvM5qmEJb7",
  "key31": "4wJkjfRmtKNkbCBbitGBftjz3mjALuQucwn8L1itbnqHxJCrJ9fPK2yusiz9H4srYKt8JbFS144rDRhHNt2W4z6K",
  "key32": "2gaqJWFgwrQzmrftTvvgUWpyn517QYvQqbGHPXHmLdMKsQSEQrdyUucuySa78YQeKhgc5cDxFtN9Ex2YaXnpbrWY",
  "key33": "WdZHbWFJJ9s8YYTjs7a6FQbWZ2XQcjKn8d9VEqhikrNMmS8my8vXnxiXDLDKTrL5FfWyaAapisDt5czhZPuhGa9",
  "key34": "2sTCsNMGY7MPgcDkJyF3uKE76mFKNKa21KDTRu85yh5qZqcAW4CmU7VbQjNFDceVsix1N2XyeqJrmfKspFtY92gM",
  "key35": "2xVpNJkLPfaW8PVYKcKYyjVx39Nk9no281ED23r9wNH1ebBDTRCbK1obq7GshJ6hzq8KEMt9LvC2mxZjmz5zf7wX",
  "key36": "3mxEk3RQo35ogCb2nMvRTQX5MpQtr5e1LVzviNRJiTNAeYSvDNy8RrZdZV7kCrb2ieF1mmHAJHMvYrsAkzhJCV8w",
  "key37": "5pMLiY14nAL4oFaguLzB5wZVuDcG86C6q5UPkJXktF1DNBGp3a6k1aZD5nkwTD7gsMUe4g4beQFC2r1PefQacuX8",
  "key38": "D85uytB4QcAn2eJKWMfTV1UzvTZYK3287UEVipEs52FPk6fWag7D98g4m3dmogJupmer6AEWQRxHiVTP9gDthR7",
  "key39": "i2kVBUfxNE1XisLZzWyTHmaGLjyqi14nP3Pwi5vktMuoJqomnZJMw73fW4zVNEEfJwf4HSqWJrn6UEMiL7yrCrD",
  "key40": "5t8TvjuuLzrBD5L8uTAe4aEYnUyrcw9Rvu63JqTqhPQHNEVegV67E2M6SA8dsvaaZfo4bq1Rx4Gr2c43QBk1jKtV",
  "key41": "3zYpqPjYCzmDHarmn4N7KFL2miKfBLbjUwQ8rS7werLx4yBh76cQHBAJD3iJYk4oxnVa3YLWDTKyQnE9nQk6QGsx",
  "key42": "QM1PxDpw2MD8WiKsC9vMBm4QoJouFJUgyGNSEeLC2amPuKD2q68A4Hn8zsdCRgxGwmVb9j6QP1er7sEbCS9xboM",
  "key43": "227mRNDfoXZ5dnaHAsjLdFWqxTWgsok7SfJaeLnAtx73QEptoWrDX3KDTpBX7ocFqja3pESpP1fLM3kGvxTJXDj8",
  "key44": "52dBAmnN9i6JYDFuBNgki5sEkXCBFt1jqWF9Kg7nrRLLr1x3JX6snJD3Bmd97YZybHKJdopAUEz7W6PRdckCzVnA",
  "key45": "EV8thHYdzA32esPfBKiewwjvvvqLqvRY4hJNvZyJhG66anrZheoR4BnQAV3ho55HK8ZZi3sTN8F6WVNaUUAek5g",
  "key46": "31Wc3BJEaGhbcs3T2eEMJqsF6WaWPXwwpuFzthr4cwnD4fyGVDA14LL1kkKmkb7pE5TXzHhHYwEAzzzmEARZyC3t"
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
