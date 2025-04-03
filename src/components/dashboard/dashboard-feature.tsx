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
    "3V2ifhrqj3a8cmap4z6xhoWWB19KbAF8sd2EUi1xfpzp1tssGxXR9jCQW1W7cd7xyfUVRp7i9x3bhZdSsh6JWHQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPKd1FFyBKvqqz3yacGPyvikExXX5JKV6uxorpBcmezWR5kxbUoXJrwdpShgMopHFjf3aM3acXHdC3cjxAqHbPX",
  "key1": "4af1F1uXVz6GmCSR9AqVX8eNoMLcZuiXuDwGbUaXzHAPThRmCr8MkZpM4QpJc7735oGGPv8kEhTGGxSjYv7KBUBT",
  "key2": "3boGDvAFEFKq7cdp8bNXYEoM3s9FNwZ3mvsKhAfD9dM5DrYDBJNZGaV1wJYyKdkrKD9oUbP1FmKpoE3trDSebnUG",
  "key3": "4ARFqvijeAkrnyJCs2SRxt9EDhNakSRRTAtMhzycrwEyHha5Fn39dDHsar7CELHwCvCxRBVeHfae2kH27XRHXVr2",
  "key4": "2CrygtZ31Evnj46bjYTyWDYmE9Lrv4VX7nRqLXQHebWLsG2dqxm4iCFKPn94ZUcVNiBaa7HwXRapVGbcGjZWGyEH",
  "key5": "4VGMTamRqRuWoFi7nQZz9Pxt99UoFH9g5j1xbckgi4Arpy5U2zxUyiDavSSACWkavumMjNtPDZ2yNzxmyE6pBDEU",
  "key6": "649Bjvz8oEXyAK565BU43M3tgzPzV7D59JDcYPodrA4xEbXqHjSSp6JM9Rzhsz2tAJ6g6h66tTsoPTh2N9edX5ii",
  "key7": "32MMeVKzBwtTKr8dwH7xoPSCmf3NebBKNzE7h893g5x41Bmhy9WpSB5oWu2n7Nsi9WpABBNd6CKEQirc63vyoS85",
  "key8": "4dXbjM7FQpUYRFQocU13hGDUu6GC4bNudDv8K7dWabqKwiVxNRp5TFdYE8ctYWVQocB2S4xJbr2tzvB8xWdWsCB7",
  "key9": "Eq3tzgqDchfeR5ZV732roq8ioFc66PHSt4u81SSzANW7GLpvkBMfmxtwCrpYBwi43Siv8nRDHozeBZY7bUH4sAa",
  "key10": "3KLeAHqc6VwLmQeMK1KTse8R5uJUkEifRVXVmLxuhZS4uxvunq7uYEQ13BwgYJpCq5BAqKBKXs3WxVvSNfCWR696",
  "key11": "4cC1f7S4fuPawh1QPANB1ak5PSghJvBATvS3nQWYXwoVXuU9yD5uD7SkuqTPYDrN2XtnBZoJ3eaAxVfDY9XHWCr8",
  "key12": "3GrvhDGGBHdgAi1vR1QVHzLMq92coGMgvPNwzxAFJjjTkLz5FPfWfXpPz38N1prXeJ1nNtCK6kDPDBtuAbiT8sit",
  "key13": "thfS6V32peXWQRjjM2H35RXm2BR2auG1Qf3zBfYspR6MVrhJbRmqCjFcyADaDGg62yh2TU6rcexB44XAxD7RepF",
  "key14": "3NhKhK2QuBM6W7n6LpzgGRN6Pky23GfDuim2q1FEoUD7ZETQuWcDRsubMr6Vd4KcKUVDaSKxfbF1ScVsKZFM3ZV",
  "key15": "3DpEHgmaZwV5V2SV1hD3qs2kgVkdWAWMsDp36KcvP5Wbs2QJJ17JtwoLwqrX6s3i4Pr7YC8advo4jrWbUR1AbmYt",
  "key16": "3jFd6Y2AfNgGJPo5P9c7c4X6eXa87Ka4WdVguUKPsKoS4kid4ejdnevnnMfPgDZnat782kB4EuRFbFNW7db1TZPo",
  "key17": "2VbrJtzbm77pvGb7BEt8CYvjSgdv2ATWuzWgZVeJnr1v2zHScUfsGrZ7ug1kZaesdNNAmNamC3LTRgu52nvsqzCV",
  "key18": "5tpdbWAgSzs2288hocYxcxpvubU9Ey5ZqxoogtfY4EY6sTiJ8xhQm5wsEpmVA4ot47c6phaESDAPtkaHdN9jPCxC",
  "key19": "4ziHRuJxisD8YXYZatpBgF7gtM1YJCNUermYSpe1dJ93YtaBKMPZ8PSMuHnH8cFa8kwFn8eZFcVXZajLw3hNTFGR",
  "key20": "32fR61kwzCQuCQrHmaJx1ybz5M42xtDunP2hUAXzsZk1PENAVeTJssErqRtdDnsmPL7R77w4YKTmPbEjercF9pPm",
  "key21": "4ZqFPA1LFmvvZaaoW89aqXEuE4RPfwixEvfzvykeuy1QpAgKgpJWcWzx2kcweXGoqDR36bALo5SKqcZR1TueSppx",
  "key22": "2VDUMVck59C8HK8G5zgNJq19AtBqJhajZHTFGR8ZRiv2ecHbiRnyd4vv3KbnuefxM9NWTpyqYUs1QxpDAhCe6TMA",
  "key23": "2c7M7ioW58minEgwrzwXgKNwui2Zr4SRbyER4MZ6x7QtatQeXBP4KTVE4bPMqCEmqbLRTRgh3Guipu7L5zuURs1i",
  "key24": "65maf7NmyfNGy35PVSeVmAcPBkFSp2rQT5NEgsApQ6mE39UfYk4qcF981ZKy8s2uJKDfVZKwppg4X7VvpDmZQy7W",
  "key25": "3C2pd7CC6MPRdWbJz132JZnwxv4r93ZPMfRhT4pFqG1eWG2PRTwySMK1zFGLXdPngNDkmE5GJVZBNm3Ce9Ahro5T",
  "key26": "4xpxem5KCJfteSBqAX14odgfdrk4KnwKPzp6zfJTEPLtUz81u4CG6qWFBkbAzTmLK3UJYsNXgnntayu2atymt2yA",
  "key27": "4NBwFFDtzxkTCMd4NG7sqjH9WrDfwRX8GsjAiboKDeW8rxGJFJSikH2AHUnmvkanCYChoqcWy1Ffm5wu13y4JtCT",
  "key28": "5ewXVbkeqbrwvHWgz6sBGi21NxvQGntdDKpfrrBy3heciHZnBTcm39joktmgTuUY8fqGFCmn6yYmteCEJQZgnKXS",
  "key29": "49Dshh2gYU2X7vpbfG9p2A8iLA4A1aswJhfGNrWpAq5SCaRrfLcTavfTpADe5WLaVHseT6jCTMKLa76RPJf5nrWg",
  "key30": "5xqKLWw25JeW5qQ1nUBiKEXZwNzKuRunEXdTmQTyYsaxVvo4HgRJNpEa57tUjWN9rU6G5TMST55fqJDywxQxTnRK",
  "key31": "25qUzBkvsKzAWiAwSnZaN6eyauvPUnZKBj9MTMdRGrFPByZttSb2uYvLokBDAcg1uUGD3CZZMBdR2bwfdJC5SQig",
  "key32": "2MWDe3ZQLCyR9soBorr7daj1rco1twUHA73qgj56Yshy4b4Ru234LWNVoUjrydWD8TCXEi1erSN8quSkUG9V1Ah9",
  "key33": "5Axd2jPvMDqqxe2TFcLc53rYd3qA2bpmcxHyNgRFquFV784m5t5JAs2tt6EVqkz1xjSBtvM4MbEhsWshS2P5TMZV",
  "key34": "2RgE1JsrSGnVzzxPBsF4GpDnVa9GFi6CEN2ZyDR2mWbNZiZ42JDGBe4gBcPkyZMSAgCXKpD7Phq8drCfL2kbTDEG",
  "key35": "48Nj27csN6VdDx9qcH88N2HDw7nLTBL9ZJzgiQ3UDWaZvxU8XfbtfZ8k6WfVNY49MVZoxek2GDP5mvNjE1VEQmjj",
  "key36": "483cxjTezoEuk8Vd3wE6QA2wZ63JDGmAK6qC7VEcik4fhVRkzavj3wCHfxkRgaiD9DCH4mk1o29vAD2djYzNfQfF",
  "key37": "4dyv68PyPMmVpgLJqtwk1nPgaU9ANkL3fnQPn7AJooXSdhmMEmqYAC3RRiY9mzsCsGT7sWFvzvi2k5nxE6LtVG9f",
  "key38": "3a23AX6qm5ZQLjwipre5pAxMmuFEkFq8uMsWqiZD6iPbx2iegbkhbRFqMjWetDqtjmoAo1sTBLwrFLxztoPY6iAx",
  "key39": "5vqsCd7BMJxHMnQRcv3gSQ2piXtmMpnadqKKx1FzWVSDwuZ7GEgw51c53mr4tDkGyWwGVvvFMgFMyvyTNnVyAcCo",
  "key40": "2Wjecj9JVVsCeDG2H3L5jxjCnrPPhg44vc3kYF9o8yCeHC9dB9MZoYCZnRwxyNKoEVAY6qsE11JkKyAbviPauMrj",
  "key41": "5Z3xsSWuAW7uGRuCD4po1riQ1weesFk3y2KnFS3qJBr59a9uu5jHhhg6mPV3BYoHCP2BSaZy7jNZVdgv1Fz3MuBD"
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
