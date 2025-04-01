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
    "5w2uBM5qS1MMKxFAEEF2hdjd6C31b6QX3eohSaH9q79JXhpoGNy8PTR7yJdPmWQGCVMeEa5W6DXrbWzyAjTmZYA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YXawwZd6SjUoWd6X7yscfRidJbKYVQmZeCZ2QhGyjq2FZnWXs7GoD3P4mZmts7ooBpbgAL2xo7cMjR9spcphNzw",
  "key1": "3uxh4my5inbXA4crqQQBJLPQZcWSWVbYxnM3qihdiXqT8Mm2sEUEghMYdQ2mcHY1kzKcApp6uNWFzo5J8pHtG7Kr",
  "key2": "3QBDoX6ZuDnr5LyWeCJnn6CMDfeMKcH4G2ihjE95y4C8ECBi1VLgAL2eUKFphU3v6D3NZh45CcLrEY2Tc8y2bYYp",
  "key3": "3hntny12bonooVtJN5js4nQJcBsQbQrwTjaM3xom3Tr5frZANxqXfgidHh5zRnbrzgNxoYPkYNy2kkJa1HYbNQoX",
  "key4": "v8ba4fq6XL1frF9ckFEtFnMtTk4NQMLkTyMf8LVdrUKw5JxdNFANteCN42HnnYCeNaYgSdCiT3DSQm8FVTshgVj",
  "key5": "2brvBbdQp7JpRHH5aRE9Ltsmvb13eELXX2B9xxVqx2qi1ztmrRojxT95NkScZr2qwrFr6KjfDf8CEBMuztYbKJv4",
  "key6": "439AqEf6qqgtc23xC78a5sf5JCPo94ZQzBjDhBGXTBKU5NhzFvqqo2GsadygzRSLUdtK61iJMzgQiiuzFZTXWjBc",
  "key7": "3etCTyjpRLCJhWNAPQMxj4RnfLhBDtFrrQ7CBURuHahjLBxBzY9qy35rrWHAB8vX6jVNd6BLVMmUYmuZqSi8ChkC",
  "key8": "3oB5iRD5E6BGGXdQe7A79aMHt2jecs2yTQeG6YrP8JvwzRe81xwvE2wKtdGskACvG7dQ6i4GhVV5zPKk33JMSUrF",
  "key9": "5dkHqZFJgU2y44uXoxotESBQfRkhc1VdfYYuoLCmZUnyzri4qgZxHzW1m7F5oqFHeSa1Zi5jk1z7Q3VBcLTLYYf6",
  "key10": "2nMHCkX9d3ewkNK8WsNg9cBHGRKrVzPxfBit4ncmgVKGD1rYbPBcXtb17Yz8Z97JpEmEUccUVLFdQkurnFguCE7L",
  "key11": "21tEvnisWjKBxzGSvEiBc7G9iXGHe4jGKf54ZciMBjwMqwHn1X39ty2muB8oRHBbh1zPYDm1XsFAnSPrDDBVnW7L",
  "key12": "44iqgEM3f1zQsLQpvDp9QGJXLzRXpPYFQAgbZqm3smmcjQ9ZJbFFLnLhXvauMazF8LF7Utz7EvZZooJjE6wZJWgf",
  "key13": "3EDVjgnRUTaPHfNW5aaKhSbexeQ66AEfLzpWbBUduKTeDPVK9QUwMcrjyVNvDy7JaUGtvKjorrJ6ShWTismjTGKP",
  "key14": "qEPvQxrHLo6cefS25agm5pQ2wfdixXuf4Sd85CnF3fCwMzwq9nQswotsWccWB2YRVm7aB8dFUeMPNuYcGD2SGQn",
  "key15": "2nUoUpXSNmHp4xU9JqHdN5cntzk9rKb8zWx1hfg5pCzDzGEekZU7hR2Aoksh4Y8KXMngawFaLJZabJ9AgnKUhBYY",
  "key16": "3sVEdJdHErmAFgLHCCuSgYfV9oXpka71JPjazpGBQQUS3AYXJ7UQwxCJ3ykERP9k6M8wArxjE9G3tP5HZdwy7K8f",
  "key17": "2E287DxFGEurk6kmyEbY6jq8q1nQWiPPFbHPSdLoEszUyScMRGV4w1g6AcyoQzSYSTmwC7VWChMVyyS32HNY6yoF",
  "key18": "2hXZmcmWyvDCrL6kCMq3R3MayBaP4wtZFNG7nKWLgN7fKPchXYPzqVTPu2eMBTt1d2C8DS51pYP3RpFiVycPzydx",
  "key19": "3R2S5tuLxFw8tcLgXJP6J7Mf8cQrTo2zJvwhTypchNUjYGvbgEdBeP4ik7QjWj3ZPx3Yccbz9bkXUuUALpcAUVuo",
  "key20": "zYwARCjutkzoDwqYcwYyiSAo6UEmMmFsRRKwaUVuaS99s68kFAuGVErSvi2PwcGvdLpdCYTpv83YAowT1VHXLAp",
  "key21": "3T85ijGkfrcbkKDe4kT79cUqUxjPX47ounJntTNDwaCEGfnuTvemCZyLNhRGSHfMnKN6KJLyj6j7k6dBoZ6FzYm6",
  "key22": "655PEMEZrj1jzcNstDoGqFeNZYtbSiwJ83EcLWmj4DRaRBTqFcRsnyaRjSrrPru1xR6nYF3T8xnMkVQrFwyf3Cyq",
  "key23": "55N6ThApMjzVZUkJireLvH1wYdnpBzL87tJko3An4Nu5b8pFtr1492fRyYNot7twMxFMHmGUinLkHWrkT4ESqVQE",
  "key24": "22TWgmrNjy9DzzbJN4fFKujthAx7vfKNuFSa9GPg5BPtnwb437RsrWZmTDENjiDcX1foU4MAqzVi4L6LBqbKo14n",
  "key25": "bQEfyL8DnUjbPxd5r3iqScwzJE3GJ1vKeAp7RwvvhynF6UgtgfRtsSfjPgcAnX2Mdj7e2sHYqB5XEq7qwVWR9Hd",
  "key26": "559nhc3UhxFyV54iFUqioD4zyxLKJpfPEk6mPJg2s46twqauh9XGg6NpKhNNT41F564znphnH3NE3LAvYmH2aV2U",
  "key27": "4BBwwmyDaxSPDnWnNCJ7rf3kufDbEFPDnV8t5qsaQy9fr2fEiQcRPNsRAR4TwSijQ3hg1XoqYodzhA5NvCXG13g",
  "key28": "54857vhXVyraLpTdjccqL8WGVqEPFHJHVVwYqBUud2LYKu3bNRjkXJRrd2tPTa3tJ5GnNSMUxzXFX5Aw9tHCwzVt",
  "key29": "5645H6EhNVRRXkaxg3rQNY8ry5maL8QhxRTymP3uEVWYp4BuDgSZtQz9MpFJGgjuSFcc3otrAa24MWcGbR5qfA1Z",
  "key30": "46djpunNQSTQ3v7pu3Jo3ENLpFhhE2phckVkiBQp8LT5gYbABmXJHa6WsJtPr31XdWsx6dNism7LtMZBLnbw5goq",
  "key31": "3dgd4radGMyDDZs8Kbzo7ck8spaxxxi6A62qQNaw9Lt5SPkUdoWcuHLpFumg54Nbye3jG2zKRCCy4g4AjHW4ZGAz",
  "key32": "3hABfTh6BDegR7cjgsbDAfnjiWR2r9KgAzMHN3VZiMfARmKGXesRmxRgxhHi8X2mdPBm6wt4Ra7svpN5cAvRDhAW",
  "key33": "4QLE6r53p4SfeWM3q3qSmxVCYiMqicrraRrxF6EHyJTzQwaBEXMo2C4JFrttGrFCRATW2SqUAbMmfKimBsjqenSu",
  "key34": "457tzYRATsByQxuXPhBjqTtdiWHk1oLE8f85RBNbcMshDSghDwY3LyVcZRcoKShoC248hktU9vVREtF9UeTnd3Df",
  "key35": "3SUUMshfEBtcb2VHQMuhY8PniNgfdH3tgJMpSoGHR3yAeuPinSgjbYyRZrn1MAYDKwoiAtzB9WsbkzVnie2b7cqz",
  "key36": "657XZ36ehQ1ZKNfmCajisZ4GtvCM9uWX8R8jv3PPJTUzqSKY55a5brkzcKVZZXGwWQnVyWJqvXmmjaXrRjTkFPrZ",
  "key37": "447gopqj8s9yQRr7dQZgJ8t22UcsRzk9jQebvah9E52JchUuSNEtkGkycMXBE4JMPkrTgSemKpDX3xWxtEStFxHv",
  "key38": "56kUdiaUf7JBhRDxdtonWyEjeg77psK8ff2t5SkDx5eXJrZSWEoRACPu3Kwme4U7e7r3AhMYX1vNfLnHBHvPvxL1",
  "key39": "5TjyWdrdvtMB59YA9HkMnnAJydAdCxMB716crk2j4fRMkiVRc22VJBfTkUfJ3iU2QjPU3JuUo5QkdzS1riWDsjsU",
  "key40": "5mFm3m7gATBsgreHtNhQrJwAanEuMa7KFhRkwDQakMRhzKEeA8MSkqq28kZaE8FvxuQhTdBAs7TWttu9BbNEvwMd",
  "key41": "4zkq6J7zzGBSdnasPP2Y2wh9n1jy7X2RvK6Q3iBeAur2WQusksbjV3N2ry9fFaktRxvfv2f6J9qqDXPXMQ1U3oan",
  "key42": "55pkYRQm9RAY4Jqdzb49vBa4mzaX1afhoan13BHsFA3BkySTSJrUSfDQUyqt4c2U7PQdNEwMbHpiAhsQkiWXw3Eq",
  "key43": "YMiXKun8QE1Y1Adf4kBMJTZAJGt796BMDu8NWTjE4AkPXnmf11SQAhbEsSAnP34HKYAgEFo8MF9oTPgVPd8BTvN",
  "key44": "31wzijegYMKCCuzM1wWm2t5M22yLeCfg9YggPwYoa48uc2UBkTgePAsCKaER7q8ttYU1nNYR6w6cqRtdusGqqdCv",
  "key45": "3z827jMFzciYYJtyarxd8J6pdVEuGGpNCfpewkhGYQee2xxtSDy6X5dZcTjc5RNjNXaZF68QrDtwTxzZ5WByBWRp",
  "key46": "4rNExtp4bRRPevb5gfQFEP4bsa2LRXHDqc8KPgC2aYVAFbGEoZ1D82Z4MD4Zq8C5R24wf6JYvR8oo4KSkQvXTfEd"
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
