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
    "aZoPww6F8VrBMKVTnDPnsHLEvLq3CeGsS635Qz5FvgkBvvJBwKaTBkEvuY8sBeQ2Z8Ls3iQcceFLRodoPLGMXDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FT39nSdPBG5sfee88NgeWhpx8aJh65rwYrQLdALr1JXpuFzeNMNGrUboZNbp9eZkA8nPm158YUX9qWUu7UaYs2j",
  "key1": "561r3gPYXQegmDZHGPzAUKLgZewgcuCaaNzc5wedsNDRmkuDVwNtCXtrRJtMMwVKUhRXSouBkd5aJhy9pt4k1sNL",
  "key2": "2d9SEY7TbPf5T7A2QDzFcfs6u4i6kQHL48imoZet4sLNFpMCmWjcg1hPeXJ7PxYYJbW1KgiLeQEtJq8W7mmffK5N",
  "key3": "3UXVhFR6CFMbvHVsF8rNDEfnVkEuFeRZLgnwDRN7FtJWSJG3GJTRXL6bAtUE63Xbc4Mm2a74SmzP9TZFNi61hvmF",
  "key4": "471FUu9xy9SoNgTKzAZ8jvRVif2SHWxBfrfBwKoynETNFsPrUKXte2j3YJbNcFCdoEg4ugyH3NrTgkzok4aoT6pS",
  "key5": "3fx9LQNsyxKNhJdErKEUXtWoE1vGhiM3PgzZmwW2NSQNeiPAV23JUq95eRMYUDn7wCRdBzeokXKPWTMjMiarV4Uv",
  "key6": "42VPE9p157MjJs8np8AtWjoCnaCT6YEpfsH7BV7nk74AWNCjCeaF8MqAXnweCRC8gsHD5LEJ2erkaCgivxAVU5jK",
  "key7": "3HXfbyMiUnvJjxTU76jjUqpHudo5f1mJpHxb6V9mRJjdVVyZBJtsVfKiyPdWivjiJZA3zATzU9RrDMfHdoduyGBQ",
  "key8": "52Qqfw9hkcu7qtvteSwE6S5L7KWKXHoJebAoQ41Pw4DMqN1effYRSz3xeXRUoGiSVtazoz6FMerQBoSbsTf1rviQ",
  "key9": "4zbS9zD265mAURbwap8erc3uSc9fqfvz4i2bW52tJqGCSMgPPc5w8ARh8waKA5h1rWknRbb5PiRed4QQkMfkHJwx",
  "key10": "2b1Vt5HT8Rd7A5sicMvUoDT7um9hbbrJdp629qXQNP2VeYvLxh3XQGaVY1LQDuMn7wAfSGbG4KArpkLidwXDhi9D",
  "key11": "5HaHy2WwZBVprwMDoJMj5CFrxhBHFJZs69XuuvsGj6sHw2Eac9K454wrS9TG7yixnHWFNxswsYcSvg4TPosDpY54",
  "key12": "3waVRphb6kPRpPMiCaLPjbMk76dH4v7rLmSBG1vhKNN3dQhiJncYpkcxXmNkLzRGHEArPbuQ1tJx2Ybax4jjsr7K",
  "key13": "3LX6jHqjGaPRKtwrFx6Z6rPEbBWhA9NCnpSWpfaL2cmUDhxBtNnJTuNkHLrFtVayroPHzPAscUr1wNXujiqiXMzD",
  "key14": "4VfDuJxwaXrfrPBxFLgKPSBLfdsphw7RWzkkDmJ7U26tJALCFcaaACc933MhRQ9KxDQtTfeDmsyrWK23gvLSCmt8",
  "key15": "49e3UJr9EccJZhfDiWtvqC2QEcAkaWdJSYUvVpaG9M9fcEaiPiLN9GRBq2k5FGeFgPxQgvtkTM4ZJ3J2RbqHbVKM",
  "key16": "2aECZf1CEqjLZ1WvLBDmoCtn6PCxBwTz7LPoY1BK4spRKJvufmUyuL8Y13W4UrD8XthoanH8E7HpaYGCCtx2Jim7",
  "key17": "42uZRU3qv5yVDJjXnD5y2MyMwnKTBFzhnopNRi6xpDx1G4wGsy5i9QHkouVgE3BV5TFYACda7hVkFc4Ust7Kxr7H",
  "key18": "48zHk5oZU9hvJGXzWbofeRdu2JuyAnEoH2FmVRQ3ps1T9Vry9cML63YBvw6SrjpXLiBKzuuJWiNbSyY9DWqGRw79",
  "key19": "3gv37fktM1wkzJG2mmEjUBHNQxKsyPhL4ZcqHS26f5QCCHVDkbBdV3JwnHQKpxR7X2B8dfv3zAEJi6GW7rgecxxH",
  "key20": "2WYhHhsx47T1ugFNNRyb1Q3GW7YfrqKRSx69BveJrbCYRdUTSqpiEUtg93Xp1QW6sMWL2hcydrGQ2xrFzBHBkxiC",
  "key21": "2KMRmtQL9kQWQEFCC659BviqxyqVZneg8HQFA4a3UhWBTieL6AipLWqawm8DfPPdHvNfbYnT4otVV4cYuQ6H6BLs",
  "key22": "3kV8wPz2xBJTSofVuWSuXQN7Vin4MowvBnSBUZk2kLME85kWzgpMUgSWWY5ntZRjfmzJqLMTFQTX5qvAzniVBwq4",
  "key23": "4vuAbMFDqQDLGkLt61nN1YoYYFedgNkJ7C8TuDGBFVJLkTZotACio74PFxH7o3mJvMUSgGAc5N3WjWsfMGKkcdY8",
  "key24": "2R9NCVZJkmosRGhWj8sCY7jTPjgdvoWuq74gkh9ooT6N9CEzqkPNiNDhJStrjimqgBbAcLn4zCVc5FzbciMaYjuY",
  "key25": "53SYistHkBLz1dccF9YYUmDALoJSQ74f86FQa8gmRKH5967nacZTmPEuEwfdBGQc7U1E56v3XMgfg7iDPNKtjh1j",
  "key26": "2YUJS74NXWdXUQS9GCQK8GPhNSCb6s92ofycLFyPHqtkqRUuXzRTqwky74uymQmb9nruuSF8FBX73cMzAeKAWNTL",
  "key27": "3DADUrG87iC6rfjKB2pPaypxXV8vQyU5vPhWTCnRfVCxniCbydELEsogTyDJjDLCuXDepgJwP3gyCjH9Jpkv6eBA",
  "key28": "2FfRbFqsP34VQ2C8CExzAfrBCGPETBkkV6jxG1QJXKyZxVCtEz7jDHBwjAjQr3oPNoZCdvPqtrHSRFgtBirSBCAK",
  "key29": "5JzAghVU9RCUsbPKwNv8BsMKvMptbTF5aoAMH9DasvtkZkdjxoRK7ysLwpk7HahPuYyXuNh9gT3UuJMJJdouSnsz",
  "key30": "4w4dp2ooaxCFx8113uByiHzwAYRjv8ZBuAaHHKQ39RvHJU7XhPNADCwSCawVMPJ7iV9yH45jTKK6MHdWAqqu5z2C",
  "key31": "3eMa5JYWR15nNjnTVyHeQsEB22DFEi69XgvN9L8brQinwaciHhkrFauwHgD67ie3ifjpaGj4pFW6F69d4myeNSDm",
  "key32": "4VHQrTizSXa48PM74Gv1nrnL8t2RXv65V3CsVH9XkHNDDxCxhSQ13VVF9JN96qSjtVSEifbPbVdgSFdYPUfgoMNf",
  "key33": "5cbjyQZpkPvgdprMgUq4cwVANR3Uta19u5nRFP9hzWMWKBiPHBaiDfrWAbjCeR1aFSMB9dQ5vhRFrdAdkj313StC",
  "key34": "4TUqqRHTuXy1y2Xx48wXZU9Tz1fDkHAFzhrWvFoWPLVqjS7XcBGC9g2xzAZPd1P9qorC1S8hkox9RakzyUrdoBYR",
  "key35": "3qTf7DnGCR4iid2ePxnsi8BnYTv7esrHce84ABSsJBQB72oL9eviArv4Sfecyb9X284q6dNA1LtrezKN4vMW9SLc",
  "key36": "4FH9c6tDsjqZmhcb7ZxevgvQdhJVHtUmHFp5XiHy1R1dz4p9VCA8ZBnciNj6NxyT4ozFb284K4AZFzPACknfVvCu",
  "key37": "4eMQxhDL4cLReeWY4Jw4KLZudNerXjrHFwLePronXXbUoNmASoPx1VKeJHVDBAT2DfwSxsrA7YuyRnqSCj2wqWg9",
  "key38": "29umdFqowJ16DdUUWMeysMfbQsYktrjTborRSeJqD8s4uyd9i4AFEwavBbZSw5cxgkz8TmqkLL7YaHRNbRqwjo6W",
  "key39": "4icisJLEoCRxkwvoXB4ze3MmqvTMA9PCPGRDVP1jv1RFjENR943jEbroo1GiWSWiYoaXSaEDHExbiu6BaLhDsdD",
  "key40": "33AGwvnNioDVNxyrv7L9R6xeGeqkW9F9YFv7fjq7Z8VL4FXhhXNbqMxJdbfzte25vkTtcCVbfGKgprgYtTR4Lgci",
  "key41": "yTpDh1q9rUzGuqgZekhwNM2Cp4VRq9RLJbxk6ZhcHc9PGt24SRj3qhrjvyRhU7exeYjqfyMJDj8Z1B2FxRwkw46",
  "key42": "5NvXaXgKiFpZR8HnYvwQyP8MbX9JiUQaNtmxxWEzZzDSf8Pb3eW2G8mwrjTSDuWP8pZydAaA8WLSJRWPz44xe3UZ",
  "key43": "2Ab6A7dVJQ8mMRgH7XGyoXdw2NLe1rGKz3q2N98j6bNu3r1GjSWSPKC4iyc9rGxdWNTDbCUkX2eG5vTTm9kCCfoi",
  "key44": "JjnC4RKRKgG6YM94eFxPdobskNukgEhC3Qasw5q3TzsbJdBhozgozABnaNCmdwaghXQzMQYsXHdZ2uiH2Q234Vz"
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
