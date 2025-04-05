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
    "63Jgrqg75wF4qRtdfhD8mnqt5LRUo3oYF6dVSQH9KcfE2cuxyHgjM4FxcJES2x2yLrcYsnuUz5pTeWjoQ2KGfZ2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4gzNAniZWHd7ZvTstRnPpfnr1FknByxYbuhWa97p4bXVGXCQqCZnwmvqVo1hHutwAd3CrQ4T4Em8uRAHk3NZvb",
  "key1": "39U8PmwG9o73oyC4tTpXnhVpZ9oCoXaD7EVTzSdXA7uQga8JYYZVTSotg51aK3c2PDhi7w1UekeURdUYP3k7oE38",
  "key2": "2E2ECGLqBuGjZzz74TKr8p6r3WaPb4arGGPNciUuYuoYo4Hvx1eGYSK14M2gVAV6LjVtu2BP4WAPRe3YWPNUJmhe",
  "key3": "2qZS4SvzSyrBgTr9hdzU9P8jjKUAQLQwXML279r4DAY25rmFyesmZBtvxtBKCTE82go42BCCr3SqqXdQBqWzE5B1",
  "key4": "2TRUWT55M8if5Kx8wsyZZXKt8cUkkVqJC6dwEWZp4rij8uf1uVFguBzJQFQNpVCfgPA6c7c2YroMoDRgPtejjQUz",
  "key5": "4AMVBxikw253tL6SVSvkEVRAJyxbHciALJtGKUdf316rUojEXQ3kubLhrfFyWtMWjR8NhC2Y2P7Lst7MHsRg7vAZ",
  "key6": "PP1NQZTLemMsTSRFzGgUmVMTyjtfRBzbWzmGXmHsd5ny7FaSP98kbfRy7E8mSK7b2SQ9ZH9sWtMEkVtBAVz2Zyj",
  "key7": "4pBMwh5Hay3c7USfmFSiSKorF4Jc5HG5g4DEkEzT2MKReVAzrnQCJFH6VsFTqJTFTTGxfCf3eV3WvQ1h5Ey8w5NN",
  "key8": "35kFWKuTqfYb8DMeEbVG7846kqSiuj1xD2ecZcW9N9Z5CE9Gpox72WGGMWaMQpX1CasmVxFrSxtUi1cc6Phzn1pF",
  "key9": "eAX8GjWzq996igqSn3aJW2XGrHT7PhCYH9imLFTTSdF18bGndRAJtoJrZYQASnHDux7Xvkq4TTYzywgbUC3P8iJ",
  "key10": "4xWXmNWPQgxJfbJBiC8BxXqezCabqEjK3vcfDnkSqT4a9mTho4Sv7MnirZjQADgMBXb8CnBb4FnF9XVa35XpvbAF",
  "key11": "2paRfwN1mDkucpZTSbQcejtZmuinm4szQXvRK9AAurWM2moDCjXKax1Sqjeb4DzYWvS2xtQq8WEu3FBSe7tX6d83",
  "key12": "2RtZac6f5hDFmSUBMV2wfKMUdR4xq945WDxwXm5LySNj5XkQD567SvsEcN61SLLS9X4Dj4Qvdqx4tz35XRN1yweD",
  "key13": "4nciWLPjqUYHwAGs8SYAcwPbMLQYFw2TtxrEmTEvm1pEjJKtrDkc91JpjDzuJ7VsV1jUK3j7je1wDKDck848QxEZ",
  "key14": "2WckWCpZYXw69grqQTUiQoTwzTKQ69z3DWg3FrbCt5qF9DbeEPUwZgFKSFUoZFvTQp1mLZEGg6Qr9TecFwqoNxNM",
  "key15": "dufPMwRxSHQxE4qMh5zwW49pYcks6bzVp371KihrmvNRSoegDovmXynkiWr9geHEwscbQQu6NNyE9RUfvoYEXkz",
  "key16": "3gSyVsWwqmdUk13nrSXG52xbsiaoZbf5tscQTkty9CqTC8EGcaUxBtxQMcxLrsG9ViKSd5UJmHk9otjqpCpkA38J",
  "key17": "37r1nU3AduFPUv867RTL8TktxfjVDMt5Rvo6xEyjfMtXnzJcvPPzSNtkGXxncbrVxRv6Zb9PDB4sTfGkQZcbUeHN",
  "key18": "4As8n3QyGmfYWfgXAcC2NCTVqA3tXC8Wy8tsRuX35zGLJ2FMCt5DiLT2pEtYYNfc8oQ6FSHP7bGMRRVJwwfgQMGr",
  "key19": "2ufNjPNgh3P1ztoMw8kFTrupkjS7tEaDiEqSPeUGPfYLE2sj2r28yHw6FrsRPmeaqspqhNHUs6xNducCjHeiJLyh",
  "key20": "veFfS6AWLvFDazkXBff3RCrTnV8sQJPUPgyEsmrQXWFJQGRE9J3Tgc97UpT5xHhLF4pJow6ax7B1FY7M1f9htSB",
  "key21": "4WFCDyS6p3hWjgyDqYDi8XNzvwEJEtUXhG3sHfWNUeaTyUsq1JDxVCT7EPZSycTwK9SSY7RrhLoPrBGVggzWfYrb",
  "key22": "58SE1aMyrJA8C2w5MMdQeeMKnNTs1PZC7oHa5voTDSqsv7ADsXqy2UzwQR24krg4YetaQhwcoKsB9WN7FE6aMg8R",
  "key23": "5j7wxGpL1cyufkBKyr8c4fJiepHLMhsvTRNZUFAPs5Wnssmq9P8655RdsNugTX1YbZV8bAyT9i3mZ5Guoz2ewJW9",
  "key24": "5wLq3bQG9pcdCf13dnGJGeGaRxwSjf546xYbgoMsE2vV1twGQGRPAGFKNPvEoERfu62DR1usirmK9DWZFFMJPvG3",
  "key25": "3RsVxbiHhhiwiAR4B2WLWQBHgA4i5VvbyrRDPokz3FpVNjp8PM5Un5hRNrK4ya17tW9tQ787ZXWHPmp69Ucc555k",
  "key26": "VXtC7kBhKfyB3nLHte1Mc7gPsHrvxSKZxyseXERm9K3zGoLDNhK79kNEC5psBqB3AoAh1KsJge41FMfjbo7GdEK",
  "key27": "551fPVuULPBiDfBxMd496iqWxjMsL2xEmdNS5qkGZTjwcwkP5GfJW3c8RTAyf3KuvxefCdqYsbycbvtc8wgNz9Fc",
  "key28": "33bHUPRqysmJKGBR8JmDaECDSuE5m7chUUU1Z4igjGJjWEcDURJKfogKGinv5Rfw1L6eDgBBPRQLpw5XeLFNumt5",
  "key29": "3V1hHzSLXzrMdKvm36oFjnbTGcYz4pr5Yg9czWXofcFhrmUT89SBstmQZqsMY1NNSmkmpM1cx2uCoFudHok1zAWS",
  "key30": "mhRBDovt8wsw2rDo8jSSJuXBXedzsnz4NsV5XZ3HhNw5oJL3kTLkhgpEFBqNV9aVauc32MXVhYua49f3oDFYH47",
  "key31": "4BUGyxYBJYN7QkoQdh3KvnVb7GEeTS4AxutbaVJp2KdbvfThubQ78WnDxhspzP2Hb38Qy2h7jiZoiVbZ7GqzAewS",
  "key32": "cs7tbgMRAyySrEEHjGgZg28JZDw45mG6GJ67HQ6HgN4J7dArEhCr25JzjiSxtmef7U4Xh2VvdGpS15p1W3Kj5jd"
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
