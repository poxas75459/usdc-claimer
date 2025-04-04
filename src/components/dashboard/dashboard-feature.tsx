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
    "2BWmeRNfgpdxXLRJkJAodDAXanZDeyVwJXhHXa4z7G8SmgnvuVrCqMwd3Kf2vJJ3TgsURtSrU2WRgZEr3hkLMXQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61CxiunJS3VxR6dU3at3HaZ4p1fBqJnj9nnQunZDZVNKiuNDVykgY1RjXYsAymL1QLDQ1fVj9MwB2bfh261Gi9cH",
  "key1": "4HECNJrBU6vqXqDgVQpAevMAFtxWiaQpKQpnpSCacZ5rkDfPFUy2948qeMtDoDj3aLgPTSn6i7dZY9hV8KHw2rUi",
  "key2": "61ckCvUczPCqqVU8x1kiEss2ijd4UfFA14sNFKhiEJ44eZBgm92kbQMC3Cnbo5R8veJs8us2pXXuyjrGqnYgmH1F",
  "key3": "5ENXCGU8Pe653EqWpVHLn2fxRqiXbuaKtut48xjRQEHXyaqf1VhYDfNotRVaB94CMExHdURqvvJwMH43kfmoc3LF",
  "key4": "3fLB2n2k1Av63rX7s1EX3gtYkxR7zS1SmoUQBMrFF1TBuxEW1Mj7EZ8ZmyBp2vNu6RYi5ahKBL9ubUpGiTnmvDoF",
  "key5": "2DqZbuxKPyPBGDaKBm6QkeuVNHwgatPq6ZWLtiymDNpcDUScsaAjD4KoKprrDELLhmDjLZaHhgziM31qactXLhEn",
  "key6": "U7tH1b4sXdW9orZykUXHSvZKcffcHG8Lspnc6MQTwYnnTuh3DikG8AFiW8W9eprC71vqh3pw8MK5a2qbrwdDviA",
  "key7": "4jjxvMTdMRkhyG2vWSvDroxtSh4F62vLNHTDXiyUqCqAmcWrrGtCNBjrHHFYFi7X81q9U3wNoYEVFMz3EHaj98Yt",
  "key8": "4EUh2NvZt9GS23yZpkN1jSieyhZozN6vtgkrqtVEMp8xqMR1k8rsfsxXNbcXfxNp8B6595SdY8SQcAD6Xh7AGNGH",
  "key9": "4Dwb6Lb9f91NXR7MSdFMTjrS6NaspxikqWYyiAX9iK1A2Z2QcUDBiJJP6Yn8GgjKDx6rSFyBVkqVwBQQ9S2zT7x4",
  "key10": "39mWYQZBkGNK5hbDxd6acwTzu6rptPhWVJbhgXmwf1etAhJjTaCfLa9fkpbQWnCbYwm32a7SApuYbd6eNxnZhL5M",
  "key11": "4fg1hAEXGz5jnerGdSugxce45UETrmYbnTB5m4Wjej4uLjw7xogkx3CPjH5JzSUxrDsJXCgQgf4K8pvezFLUs6m2",
  "key12": "gXpn7dMcK3T5wEL5G4zDCZYi399yqFH3droKfN4qGt1uWhxjP5DfhszxaEEgqTcWKxpLvuUhxJRv5jDPddwLvgm",
  "key13": "2aQsjaPb275MATnnUEm8QVJXyPXTh929wxodY3w6jyRFNbwqb6m13zgpcY1ziczcSvCTQHy7JAjSfL2t7zoM8N8u",
  "key14": "hLTtG34swiMNVz6J5UMPpsQwdXnbAK5f6UwckmxP4AWwWn7aV1WjmheN89jRfRRS19foG1eS9wMe9W7ZSuNp3n2",
  "key15": "2JumiEzUuxP3J3azkeEdrVUrzQEi6A28cTv8h72NaYZS2arCe5mxdirMc9cnfKZuQcp2QUMQxj6sCj1Nu7vq3zsf",
  "key16": "2AN9oV11kx9HjCcA3P4zmvLtCYhnErMnuXwaTFNCPrhWFeoTYVZxiYkfGbxQYgBHBQqPCEP2Dw5Hcnu8xFb4ftLL",
  "key17": "2hdTnBP2cZ8AYsNej6Nrh91gnyawdHFPboGVCszW4oEKKpimqm9iBPfwLCMatvi1PvXy4q47jBbrq584Rk1r3NS",
  "key18": "44VTRgvGPNdg3f6a151w22MimLvkwBszPLaD4TbuV944Gfw9xzvdV6tMUTwkGSner8ueXoYhQUTQUGHcDeTYvbF1",
  "key19": "45pe4t9e6oDqwtQj8K6fh6Z2qcwqXrJ6kkXqLfziHqURjbwQ1mZ5bEogjNa5bn1Jg4PLg93CMbhFRqWExAeKmony",
  "key20": "55Qm3XwUqFoisbGbDvEYJ5yuoGRHYghvmj26CefuNzsDrcGw9LSckZhZw764fd2crWjVxEtdgCYMWYmVW4GcbPUo",
  "key21": "WsjpvKU3mt6tRcieKFfJxo5uqcDWRRbz44AkNYGtAnGPc1Q52pcnuf5DChKFC7z1b6EpFjhpTzeMctbgoyc53MN",
  "key22": "48dwpmvT4uE5vJvh1auCrkHg7SEeeQpxQyUQ98RGGNyxYP3ruCTswniRQtEJuygkLoyH8N4UCeQhZttHNTjZ4s8J",
  "key23": "3SvubzEBUkogVp2onwAyJk5MpxxPC5HAVz2FwdcLS1cqGUbKeRe8hD7oKvC7rHjemsjAL4LeoaMzWSS9ogeSWWxS",
  "key24": "3YSdQ63jG6rNQRJULtabRgyNj1E46DEaSC3C17wFdwgLEXhFjGc2kQ8bLAqNRFF6A2R8n4KSU9SVhQMhhXRj4c6Z",
  "key25": "4A4TR7w2wSWsizkLC37v8nB8w3zE5GkaeAzmhk92b9tPmaLNQrKvUf95as3wKc6WxPDjUM2wXJjpAqjfkx7j7TG8",
  "key26": "5UWK6Qmdi3GmwQFnNpzgEdvdv2NfLKTyCQkq7QxyaKuGYr25mNA3YPkyUVoyvz3gnNfYT1Ko2qGqZrtA6eJ7qEP1",
  "key27": "3HM3ekadTNvRTY7RB5nHg3f4sdXnheizUeTDpP6vyi5gCpHtLRQY1AXMXWP512ZGBaYzLyLZE1Qzzbn8RLtdLfux",
  "key28": "4aggaE6krdvufPYp29pakU4iFXoGvcsog2mJu7mvoeewebPUvv1PSNjtVQEdTLKE3DKMHk9uDy8Ppx7qqkv8hdUM",
  "key29": "Jar7ifzzJ9UpxMWjYpA5zh9C8DwFxguW5yq1y6pThwUtpeQWisAEjyQmAHn4wGX1rLPT5NHJfUWr5d1pkEUu5fW",
  "key30": "4WUPHr9kL4tTQ8KJ4EFTdShYYcaFMDCZDXJD1DZdLa87AaQgENaxjtcmVsnhqvmaMKxyacVDLUCYgJn6SeHDpyx3",
  "key31": "2jR7S1VNThHxjsvnpACsBGE8ozDufyqbo1TGDtMcvThDn43Fa88LKrEzVENnGVPCC2b7L7WFfPnqG2whRgmi7Wa",
  "key32": "4ai1sFfcwrDLuqoidz4bZxHEEwH7VMZRDfyKH8gTeGGeLaBFP35hM4atkGahWjM4vvgg9KfSCjj1GRHb1xo8dpZR",
  "key33": "4bYytg5CHqRjqfcffwKxz235mYwjRExVX3dLp9yXbiN6NAMm6QHmXRNi7yDzC8MHGyXSjcaF1qS4gvcaTVeBWW2q",
  "key34": "D1PdJokEryNXNmjKp8P6eiKoBSATJ1VFBD6NgmBPrKFL4J7mFk1ndzsvBW1PFEBE7aYYV2FEyHsA1cKwYbqz5B7",
  "key35": "2EZv7MfRaoj1a69YkcLnEbrzinSGYmyzgm3nt8c9LvFf4gJw8vTcqwRCtYWZg3ufgU8jqkHVceYiPHSBTNSBKNSe",
  "key36": "3K2b9KVH7vDRmDYLNcn8gFANqYQUA2Ady5tKvG3FRnq2qx91gWwUgBYQ4B6Rx4GdwRnVgq5cPkgCPqE2GB1st73y",
  "key37": "GfVq7EKn9TAaRmiiPgqPTAzzwWU328RzhS7p86zjZJpMooBFXL84TEs5Mjs3SNUgj2BfcVHNjF5MGba9Fjb767g",
  "key38": "48nmyagCQQGXrNb79wc3kQkBJZqSsiGxuKV1iw4TNpT2wt6bJpa7DrBtvqck6iZRiJtnzHHiDDESrWs8DzBvKi5f"
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
