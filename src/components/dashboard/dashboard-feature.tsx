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
    "3qhFJYHrAsNLmiF5x8xiRFXvjAgHkargsH9tXiTiQM6QaiDP2s7j6qe9972XjJWVfiTJe7nokcHjMxxiyyNZdSEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFRusGcV7JfmB1YsDR8jKsw7biopyJTaYHr2gfDMobE2xb9Ua3QGg1EgDQAkA5NpNfoAyhtCjxrLGepEFkHxYYx",
  "key1": "46bMvL7NvXMQXiATqG7egNcJY4rEtYxDVXnu2otWv1Sq77J4JznPTHxGtvRCU8KzYHhmWCZFScuLaaCBQeGnsLSV",
  "key2": "4hZSjoyZHhnoWbjcsCK3SWvux2jTnQW7TwnWL4kCxC8PedKmS7voqeC4gmDdffha3cASwuAtmYk3etbsgQ1qgNso",
  "key3": "5386PuFw7XNT6kVvLN5WeGqKMZ3KCvQsu9DSZcn3XE8Ekf78RP3QXxJMj4Myqhc6VDnYzUKJVocz6QEFnZM8wsXQ",
  "key4": "4N7nz3GciziVHFi41LNRWstQR6P7cW3Bpv1MyX4AKvQNq55kJ5btg17H4njFpzwabQAxW1TL3oiZLkGJp7LFXBtg",
  "key5": "5roupHhM11d4ZiN3uaZNg4aAoi3XbqCzcXcx3xpK3ZpgmFtzWPmGyT5TzntpLCe9Wx2gfHvXjFdaH8dkLCgMscvZ",
  "key6": "reS6jdZGDU6j4HRzdyDPWVZZ6PY7Wu93ubhzAJi5gDwGYJLuVPQHxg93TT4s9NWbUJ6R6LKn4MBS6xqipCokgWt",
  "key7": "3yjQ2BbqEAYnZiUZxnU9vzMtxNVpdh1VP3p49DeW85FSxAnsHbmgc1pmojspYxGHkswALiDG5pvhKAe2qyYhGeNa",
  "key8": "3814LEZD3B4mjpEXNMgycyqgcQSD343v6fmxWcvxFAAoDaZn3z76nwcBfWy3Ru4Hp3F6ABBApsWXeXSQwfAmjfqt",
  "key9": "2xd6h2LTsaXqfpLDe9nrdzcqE7FKDBTJFM4qxREbydW6eK9SypMX47W7azLivMaTfZhvbDuv4QZqnYKv68AYzHWf",
  "key10": "57jqxvNHTx5BTE3LsBG4Fz2UPPc499NMi5yZxbQ8ck1yzHmnUmKdJ53zbuw1EC2d3tkPv6FunbxNK9tw7gZF2Ah3",
  "key11": "4qV8fCpSnNk7W2Mw2vBZ2LcbTdW4nDCQ97oV4A7aHzao2pabjKymYFoCVDu2ZKnhp6e7FFPHGK4bDU7Bh1gEoVn1",
  "key12": "3mqsUythak6U5YHiQnSba72J5U8heJ7zcn2A1Lv7FroisGBE762W5KnStpeMkKjaWR6AXRaPVhu2s8qFXjzFYgMh",
  "key13": "5AHUbYyx2oovLN5dQaHJWe4FPrk5W5DTmWjCw7BBf6mX2zbxU1iRMkvLAyGoC1wsW2jMoKXreRQqKj4ecJB7o63i",
  "key14": "2gXU3gUKpyY95dFthTMhfuUeADaXdacATzpg5pnz7nZvqmbavDrFyYw7UxoE1XUSxi9hDfXj4jr8pWoAd3yzp7YY",
  "key15": "53q6yXgQYUA5xWyAvm7RdgrH32uBNLXJB6kLEhos7vwgASh6hU3yJNLgmi5M43tFg92kYBb5esHRBhjnxavJtFNk",
  "key16": "25YmybHy2jRVVTXWbPfTtV5FU2wFzVvdA6Pwda5TUCgBGapLL7RmN5eLSsT9iSzrbeydPfsX693t1cRq7Fg63Yf7",
  "key17": "366aDrQgXBpkNweBKs72UHhW47zkso8ow1J1EBi4kU8iHs2H9UVk8hVJVic5SB9Rx6yVt4Wpv6oCwz213qfdgVtx",
  "key18": "3yEVcMUWtbNYg4P5st7HtcqUVFnz5G7GSqNSEGLPtrcSrNZ9WNaLkD97B6HiFEpweyLkCoh8xqdmEhermgc4Q6qZ",
  "key19": "4c8FGJnMSPXfVVZBNpprH23Hcx4zHSDfoQJaKJnxz6tDi5ps8VVYSRpH8DPUeBY8jzAmPZVswnLXyzohghkQ7dHx",
  "key20": "3cjHzEoHTmk2kFzN9U4xavqD3d84nNs1xkkS2Gc9Uaeympms9hpzaPBuuiFw5TwqWCvkZDoHtTAX67BpTgcqGgcW",
  "key21": "3B9pGj2kDn6aoxYhVXoMGHM8eGY3YAWs4Ws3ULNYMegBsw7ypoUc6K77LRtn9udYRdEnNWWUdbZPXfPEp56vxXHz",
  "key22": "YdALV4VXYvoJppNBYgiTAw8pJzJhbT1wLev6f4SPKfDwrpt77c1kaKYVCvdyrdpAimgmK3t47m85r3pQQ6eRL2Y",
  "key23": "5bk3j2ZeSGpR3buK8Mw3ijVEuA6SUEUmWsCT7JkBLYsUpt8koDrij1CjLy6wE3ZDwWTuJgj2rRjsxZ7zCLBiQoUn",
  "key24": "2QASbyHEdWABukv8ZhTnd8z8VEhX41hpQKPN82xfqBa7WMStwp42fxCZ2K5q5zE6MjmTsnrEMgdjNymmNFUrd6UA",
  "key25": "32NBtzz6jiLUL8PptDrstPbo1hurAQX13B9UvhbsDe8MgB91H6nVdY6PR8cNvr91jqqeDbCuvxPCNFbnB3wSfx8R",
  "key26": "2VQgWHNEV6G2rqiRF3UcM5AWWA9deRCo1Y82pqsT2eFUK7VkAf4nnij52pCpyBRFnnZz785W9BnuqdEi5drt4N3f",
  "key27": "4xxTux6Bgua6jEKw3vHbpGcgpxNEMWj7RKF6NfhAaho3WpEpvDSKnnL39n4QyDbMbZBoqyigvKF3eE9rmMN25nHz",
  "key28": "4DHpK2z73Aq3xsBKcciefhrmts5BiYeHvsLghX7wc5V73E53HicirDduqNQjY61x576tQpUAoEe2ecKxAYWzoc3i",
  "key29": "5RyCJcjXXbNtSChDQCvkc7sxQdjkmekHKinmKbt5fwWzq6eB2F7Yy127g4aD5w3HXjRPrsLqph6Xqwm3JjGgKkQM",
  "key30": "5MyC4SRQWGaMnxi4sWLkum96zHxVnM2CV4u9GcFVACc8pEbjBK2vpC9KiJSjg97Bq3XjzD2PstkF52K8RDgeSLC",
  "key31": "8tnRWxVzkevptVLhSZtG7yPX943X2nqwNhVJo77ahWYbqrcaXaALCcQVSh9dGBz9nDZ8h8P2fjA1RVRjjMuU2LK",
  "key32": "2D5qg6oLiEGBpxmcRocjHg6PpuJ2KJKR1NnJxiV14odGScyCyZrYh9x6uxoD2hkUBGLNhR9L4uJysdMApsvNrz3V",
  "key33": "3kd7dqNjKeP3qk4Dfbpq8aSYiEFwrqX3xQogCRondfJ4yokHQemvsDmHuj79CpHoK4VT1V6BqgN249CaubMevRnm",
  "key34": "XVzuUhtkpporue6TMYL324YDWYErsN6sKb8z2qzw7yq7MS5kL9NzYsiPnsz5H1t2QzhJRcdBecjWsZcQsyiJZtf",
  "key35": "3WDmnqbBUCTtiNTxgyjAehoBM96aYNmf9TiV3BrTs1FosnhqE3yJWLZV2Ywtb7Qjt25L9qvJJfx5HYYFUvyoobrR",
  "key36": "6vGLZZwWgiH8i2zfBppiscWARqxDiJF6AFKFezAdkBubwzGtJ5YJwFa4WwmHeR1LKKGCFuoYz6hk6QrpRHGQNPm",
  "key37": "4gs7nTbQiCLTkMwpWvS2BwNV22cSuRcCUrDPJYwSGJAJKsMNPwMATTUTeXpcogjvP3e3P6171x2yJfVQ6DMrkTU9",
  "key38": "5uYTuk4fsaGGdNvi5W89KFFGXTfcnQbngtXvdXguADnxfnnDeNXk7bjR4qmzZHJwAQ4scLrynaafzVf6XNjdqKtE",
  "key39": "3QrJriGXYUuA7NqCbbe7sLkRhBGBvUpTfZFYpRRDZdZtk5paKKZ6xfFUYfqEuppzqcs1Fzp4EuGKCdPW5Fx89pbv",
  "key40": "x5cL8pCrfgB7krvqcpoW3mdRLx9wZyBAuhwL3vBb4PKk2dwNmzqLYNMhNxMa2jpWChVmQ66jy9kGgbhU6vEV8MR",
  "key41": "2XtoVwganq2NPCo7KD2fU5oRfeDsuh4B2wL48x5rLY6FTQnaT1sZFgsGkyNmi4nPrqLn4XR3AEe4TzHFvK1tEX4B",
  "key42": "4eykeKENjjVDCfMtq8iS468td2G3ywEX7LgUmiRtMgTbisT2fuGYt4qdf5uK1tkNFNueTKiSaY79YLrnL11FMjxf",
  "key43": "41bLUiZ5aT9mG7qtb3qcHgugk9pMmUzmbXV8XMz8E2PowkSfqCBEiBWHQB7EKTB2zyZgtT3XA2ju77ZBCtHF6gH9",
  "key44": "4TdS4vZdkFxwXhhDua3WPooaurmkJbo8JvG4LqCpHV1zmft412np4x2pWPDQxDRmFpP6U4iSA4UTSjk9UgbzoQpo",
  "key45": "2F5vyboTCB5BuNtMFph9dythv1q2VeYZX8MMFnoSzcFxMPEjMuMiUufyPkx94c1EgEoGwDU9DPSeSekBb6mSQbhq",
  "key46": "2fSk4mnpYLEuE7eH9mbrX2fB9WtCEoUUuyuh39JGTn9Uddwzci2pJpEvGfpZ5gs463kJJiwa3BL2Wymrj8ymYkkh",
  "key47": "3RvSxL7gZo4TPkPyfpnGwET8RgtZ7z8LdqALNJjq3sgKrzXkmGwitKZzR64pK6ZZwax1svnF6u9CNvML8B8mC6zX",
  "key48": "5LcdbN5LR5xKYg5Ma2XJsvL55BB2sTcaQ9R6VCiUeDb5d67aVbVKyxjfDx4y42WZqh7Vm4pMU5rvaoC52gKuM84B"
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
