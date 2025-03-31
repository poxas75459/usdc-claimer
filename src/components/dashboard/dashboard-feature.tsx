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
    "656Tx2phy2faVKp9mcquZWjitYJtqraf9spTjyNsju4vYSqkY5YwKGVjJmmoeWbTooKCpUSffxETU2MPoP1TKymu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kpHhm3ZnmWA8JooNAD3hqJELspruKQ1L6tBQ8KQ7MTJwLMgoUjPQttefgCnRFvrHxdKHUfEz6W7PdNFW5j3ob6P",
  "key1": "5oSxsHHz8KBU9bm2C48mRYYwnd6KmqLfrCcTzQbxrCK9eVD7fi5B3Cfa8fvosQv38iKq8DhR2Tw7NYrLWa8ikEXv",
  "key2": "5dPm5cura28GY1hvX1Rz4JCYMgfmvcHv2D2xR51jDrhYHpkQDy8Nj5ufDeUbqDPKaKx839bjbo2ENQaLUNmYrrBL",
  "key3": "85oBfMtKywUsgWfbXEV5QKZKsVTWUrJgNZ6wRzQxt4D1E9JSnRhymcRXXT2JGc6grH9ZSPcTX8hFQ43R6JPbXyc",
  "key4": "25XA7sgmpdDBHcortoMRGrghomqsG8SuJvFrCjkEk5bdiN5V3wCa4jonKYR2uAXQ22fupwY4cdGvM18s4NiYz1RH",
  "key5": "3wgDwc9iw8fYUG6rFAFLE2hkvRNBaXmpKqyTgZ1chVMaG2WHjQnCWZ1xM24MMJvni3GGZCqQYV9RDDQWK3wgr2bg",
  "key6": "dpCntjdwmJ3vrgvYikH1bGRtogxFN4AJqjJFhy7xKgwhJyFwSXd7oCDURvoiQq7ru3CkvSFn7rH8WB4ox3q4tA3",
  "key7": "5shDkeTdShYuCXLgTazjBME2tJsTkPstM5xX7hyGCMQ1euSmXZEfjw7gPQYvuPwdvEmJiWuYav4zCeNUmLYcPg4y",
  "key8": "4ZjPoBhB6iTWdh18cQVvKJwq6D6kCyB8SHyWg8nhm2pBCkv6puaiJSuK4HjKBoaMYoiDpV1YSvvqyxijDBXLqpgH",
  "key9": "5uEe6CQrb3gWwuAnDUHcqip3KW9ic1RazFnfJqESQ1p2B1XXdh6kzy9dMh6XqpngS2GegyHoQKxdpyNjRTGWWoVM",
  "key10": "3C5Zv3LKfT4HtqyGuzerNm5pCM77iJwEJTpiraDhYw2GgAxUe4ge2BHM4ZffeBqifyegQoPyv3zWd5MLEnjWprdw",
  "key11": "4sZu1aTE7yQkGBofxE2qUATD4XMKK8kcZyopTvLSymPiNRi9XTGFBrJ1Ncmf8TmruXMsmCo5yw2uKwm9paaP2exv",
  "key12": "3nFc2ZWF19mGAjyEFVBmeXRXHQEGF1YDTyzAxnkPmnBa4GF4Lx65hvNiuH52CCEcyV4DrzGx2zRePb5FbKPHuZjj",
  "key13": "59iLgy6ewakZeondtr4hGugg984REYW5BmeVyvRyUXsYmWrauubAJ3SiUungm12K4cj6pWf1XPMnE5Ex1tgiG3mW",
  "key14": "43VLpZ5V5atbUBXah2k8B4pP39ACvooxPrdmxGbdH9cn4byWTqsGLYakDXynywVxCiiAqBvw1fjPAnvc1n3sgzXs",
  "key15": "2RxdrXhZnn1hZwR6JPipu6rqY2X8wZCRreZ41pRQJriKi63Qw5fUfMYsarb5x71Xa8hfv1vBVni7hc4teajG1mo3",
  "key16": "4H5yx3HMKJ1J3HRmC8ata24JvvB7FAfMMFKrLEKi6N4Y4YBqyN9Aw8p9yWKhhuLRc2oN9tCNqB2z9VhsrpuigBb8",
  "key17": "3Gq6nuo5sPNpV1gCRB35DVpLQq9v9Xstr6hGZ2yMH3cpLhHYLKN1Fh3drN5Vwygoj13P16SRiJvFyf1KuUQQeuHy",
  "key18": "4YL2CpmsFAKxZbfmpnxiQNFjTWvAMmcv79oYWFPptL5BDbUTNMAxSESUiFsW6wG6knhinvZ1WmJZ5mokA1snyTua",
  "key19": "2FoL49K83wWUHMEjKVPTK7RErDWVYgkYDrvG5PQfHYKiK2LERSfqsPnuxmnMKGtmghxEZuiPc9gA2XPgwa95b8Ez",
  "key20": "4TGxjwGVNkcwpMfGBdbLuQopSad97nQT7xYtRmXRihGX6NsNfDn4LCQe2wUaWGxLnAQkstmwwkJ5wgRmhF55CnQE",
  "key21": "5N9q6na9sjX9KbjjDQfsSXvLPW5fy6tLGcfFUsQb4P6uBZBGqXEyjmd1ryb82GUtAhCMTXKi5xbmZ8eJBwbQWovL",
  "key22": "3F2PTmGejoF4YydSn8Tkiz4vMK2pDurAnAAw8ek5it88WHUBpff8iavjhxsnKmy675VsjbZDNK1kMZHFc34LPuKy",
  "key23": "5prfvgqDhiNHUvrTASUh3wTKbLz7W7itPxXZ7948NTW5ae1hwHSQS1yBMReLaxzo67zK3hgo1T7apamVrPB5CptY",
  "key24": "KpDmyRdLXzuJ9gr7B4ukB2q7n8ihn4xVZLuVo1wzLGCmyu2PQ8KfTMXXR3n7wD5DHYHZabcZFbnwwqFm6Xb8jxT",
  "key25": "4F2i3219bYXXtAeJATizMCjY2cZzVxoPqLBBY1D5Dd5Uje7QTGRgG8qLZvtDXPjjFiQV2vtSe7oZoGRjD8hjyzpQ",
  "key26": "2k7reHo3jzR5t1qTBpdSd2qChKyMci1bXMHspsBsiidcD88QpYSLqi69VdiYMEiP8HfYdeoDePB8VV2WwVWvsbcj",
  "key27": "rPtapDFbtZv4JKxenYbzFr9kJtVk4k3QSjwqdym7dBJ3CC99EB72NWxbdSbcY1bG2TKp9qPikjepucyAgVHsQJS",
  "key28": "5yFh92QK9cBAvrPZugj9PwKTrDR9MxNDcnoQey1Zz5XEuxArNfn8iQVDJ9h7yryt1bC72Y2wWLwLr1Wb6CNEWKaS",
  "key29": "3WjxBdqb2ifQbyC3CeTLQbvpTx48xj7hDBAsdspfxDib2BJzxRJAfup5PhH1LPu44xaZtHP7SJUBQPwRn2zDngek",
  "key30": "3WC8NnLZ3XgJqBNXf6ga8YcJSt6jHjiMDekFSQ948dMae2kHBum3EiNCHXhuU7AeNgRcLpX53RuVQC8GtrAeecMJ",
  "key31": "k3uo8HPwt1iFJMCSzjuG1Y84BLF3oA1K2P7mkW41VwK6uFKX2o98zS3SvTvbZ8ak4HfNMwX4e94ihz1vVYhs6JG",
  "key32": "2Vb9AnCvBK3mQA16o6dpjCjgLaDXJW4hfhN1djtqnqH3GSq9Hi61bLMKQBjeCfCwo5A92RSaaQgSmJ1q4vkTS8JB",
  "key33": "2W3dPaCcGjgUhyAdC2X4mMeDnq2nkb8jxM8zdJjrTc26FPp4ZNCoznMzsnE9ZBxZrRVPtfxjxd4EQuBspdbFM8gp",
  "key34": "3tV3KCaoqRMpV48QisqdL8DgQvpqQm77evmHqTMd9FmwGERgPX28mMWCb6nhGxuNh3qZw6WLL1CTb7d35jqJEcNJ",
  "key35": "3cr5CWVNBu4bbwvtLzo4HGkgNH9ZfCdKa3autVAR8t6GQjysqWsU4212sggMwbfsvLp5gjYHfjNejQgMtnjBYLgJ",
  "key36": "2qvK2yjvDSJK9fNVHYvGf1VY6wsG6VjoBoAmFWwG5Uktc6CcXnjtjpbAjABbivJoaCwioH2VvPyjo4TCUUTkGuYi",
  "key37": "2KEJYMGy1h7re7TV1kvGaW1iuYpiwk54n3wxR6apaeUJqoU6MqPJUGBcQUnBiFxDrMbFhJ3e2YAEVbFfKNTuvsyu",
  "key38": "U1A48yUoKw3738h32uk5UcY4CJPJYP1kXL5U12oZxJoaBcBq4u6RmQrR8acyLZ1Yf83CUJoRKDbDwrQ3GKCfgYS",
  "key39": "2hGpPFNnLNdgohdkm6gFvYg3R9jLTM4nwuHiijYYeHu424SZtgPfH53xQGUxxpwphEEoMeYMAqhH8TKXrwLQjpdx",
  "key40": "1265giDmVnqM5h6SX1FYJknCx2Wh6y5rpLLJh3zg5R1ieKybzZGG9xD94LGE3hRfeXdDnzTm7tWTnCWQt4tSoq3t",
  "key41": "dLL4wCqT8WznJRpaF8RsGUcaUmtpaFB9rJv9gsHycm4YAfbZqn7GyPxNgVySTkYHBwx1DcmJPW8EqyEpcrjLeVa",
  "key42": "5dXTYgp3JRr44M5UojpgaQ9WJGVff5JpGY41zAEvcsSvoBjThEDpL8N8vceig8SugaLDxczju5ZoWA9bWXkXoQ2X",
  "key43": "47pJpQtEPCFV2ca2mfXv3Xqcek6WLFPmTo1oVNj6stuHisB5PSRnUZwtfdB5HYkAuNgFpLnLLjaVNsodd2AN2S5W",
  "key44": "2ywts4VM3pBQg7fsKPQvuiW3CaxMmcoPo4WVRdm2qEX3Qss7t1DNu6fPCmrg73huXGVzcCwXVVfSmmPmZmvSWa5d"
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
