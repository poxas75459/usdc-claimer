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
    "TaSuTub5nySJ2Mnv9k6th1SUg92H1PBBEi5DcTwqYZAETfN26LjjALVtKe8reDC38hvVzt6N3riT1vd6d9g4vTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mANNAfFUfGSQQQy24k4mH1rYqMgHeGwyzJSV41ot9Tfvem4QAXqLNrAmYRZ7Yk7Bjy733WrDpvbUgfDDEngjyyG",
  "key1": "2w1t6AuMkGdhQvD96DURGGeFgXdSPMqbbs48EFEDhxxUMKc4sEzB6Sy49sGuzZcoJRZiZh1p5WxU5HA116RLMrFu",
  "key2": "4tryVcm8oPHoRByQ495nyW7cqCi46Q3CUPbMHSQ55mcCnyZXwNCsf4UgodUXJo4WrdyXZo4VgPuC6FwGTrZsVBwS",
  "key3": "kfb36cpPekrb11YcuZZocfXx37FRcfQDz9AYHNtPQmE4qyGQxLjagVDjSqN2oqJeNaPeKBTgGnuyL1RByeJzFBw",
  "key4": "3JxDXEscrjb4rDS9Gor3X4j7dGtd3dCWfvqmoUmc5LC1yEKoDWDamDBkTxonRLh1bwygNHVFvAkMYjim8JtKLWTL",
  "key5": "4QpRxyci5kskaVRmUy5hcvMrQAeEWNx1FFXqY4ozFG2yiht7DbVnP1Y1Z8NZAJ1ifAoQrcHpUwmxGiSJetKheEHo",
  "key6": "58teCTixFdbzoaKwZbBWpNc9Ms2cJWAwrRXtDdVWDHWmyB989V6mxgF1GvqyWKDNx6kzm3jnJFcSrfLxCBq3RDrq",
  "key7": "54wme3hK2175wMo5toKoMJd7oTKEJxE258EBpoCG94bDV2GasZyPwzj4rzgNsKmKKESq6wGX7cndxnTKSjCgZ5Nw",
  "key8": "2sdrnEjEHh4JoFwhjRfVHrb17XxRkANhmTcBugxRV9VgFZeMkNa1CJRX9jr78nPo66sLY2wHepqFv6amt1RKp5Yw",
  "key9": "4PdUgvaBNQeQcPJ2u6Y145RN5jxZNNujWSsX6uXHrqDo4t5q8vvVJ3BVqxRbDTvjVabUmpPhDye7uK9vVgpCRAcg",
  "key10": "56xNZQwiU2xWymULmMYw3wB8VAoWEMKgLfXXC6MYxRAsazNWv1ZjVc7e1K17x5zrNKzHWPFMLZBDyXn2aF7PwHaA",
  "key11": "5E5ULmBAGemLmqJ73dgAyS1wFGXiKhya1oUFrNSbucatwzyGFnGmKWzvoPU7KFxizMFuAPMVEUjAGTbAkRinQpTo",
  "key12": "yqr8TNjrsK4h6zH3LWgMY1LawNPkn3TG1KduPzJn2XnMSsaQZ4mfVKP97XjRM7Y3TGgPuXaw7zzmKXmwys3K7ML",
  "key13": "3KhLTUGcCXbsr84DNwamHfP9PURpUFqgVBbeB4Cy1zWiRLvFRaYVg2TwWYXT2EeKeQKZLAzGpGtAmiSVTMGo6c1g",
  "key14": "RL5ujhsAHrwi2mA7QFwr2ea2exr7W1gLoNmaidfnXBhua4jtYVuLNKoxFwBSGCZqVqbwpX9VoUtgKT1iYDYausM",
  "key15": "4GybeANyC1vDwdu2yudTLc1D1JK3ZGW7dpofVbZbrSYMZGngVAHmGSueF2sX7weKUED7NmvSFdm9w3goFXZNYgbp",
  "key16": "evRDyRWZ8qLV3sKZoTrpnPSszhFvCjA4f9xU78EtTuT43SkdBxyqsSWK1UwG2Mvy5hjMsZ8Px5h2UauZmbURi5r",
  "key17": "5fwySRPDdnT2g4LbBeCPdVbbZ9Xh34ACJqPDQruGvkBKN8phJ5e62EBpBS9wt9m8SSCMhz14mvjL6M5yTeyus5NN",
  "key18": "3GvgbfpWEXKLMVAGteLbtnMgkak4GiZ82Pmobep8qbX5qTfiFnVhbwnpWaLpSZfSSMYubbEExW5E9VGKcwxQVa6X",
  "key19": "2m8w5wAnQeQsTCPoUPSzqJQamhv1C7D8sGCBbWybM3NDmPsAoydjCAG8VUYijpGgJGvT6YnctTNsmD635DJNa3kA",
  "key20": "3FUaZAeo6ppFWpkhjVktL2rnrQKCZnLvy9ecPS69bPHDy5XkPt6mMF8jzW79ZzsXs4BeM8EmrPY6WygABkURCYGb",
  "key21": "5rV3a44Rcfxmq1VSLic7RdyPrD6x4yTMwMkpDaQfBkpKNPbXZeDUwYLv4gnvFMzLaMfMmSjTp4ov9crFynLXAkTF",
  "key22": "3FGs84z6WP6FJFFUa2EUQS8HD79y4zvSgkps7WiMeiAGmwdNfrtsrbGaqxqKpTsFp9b6X5p1QNUgG8NM8cbdpBnv",
  "key23": "4BByu37Dc366yHV3RXLC1qADnKFT89T3NupXGEoeASAS5hhZQ82J3XZm6SipNXb86ehPFct2aFrqbUxiVbGefpSS",
  "key24": "5aChrchbnqGnTt7Truz9BjHPCX7EeH9ouAnK2CfmpyzTBsnsBnVWNXyvdeTUxG2QREmwJxTj5bDPgir6vup57Xor",
  "key25": "3MqhrjvceuEiW86XRChgE2k57Q19xiWDqcgJfdav4Z52n4wWSVDUJ83TbuT5QGYZvzC7o64L5dYLhY8u1bFRkQy3",
  "key26": "39tR9udqU65d9Jh9XhBCfze3NNDDHJVHmeJdF2oys8wQqsuFxhZu5rQb2QM4GTeNWcfbPQwJeDPq2igpxQCdbzo1",
  "key27": "5UhdCzcPsMVUsihCyNozr4wxTTFZE55AJvm86qUmwiFRKqMwdXCyH21qxmMDjrEH4oGsWCiCwCCBXrr6QEb16y2g",
  "key28": "2YdoE7YyyJAAYtEu61bcyDCjZCLQaupsgFUJeZNN3btPe12WEybFnEPbBsETvfznirwpsG7RBMxLt2p6NXcZ4ckR",
  "key29": "cuZCSMMZ4kFyPUVwWKpwz8BtHjTSdZK6bTTDRDBTczLiS9B9dtwoGra1horCH5hHawPpjdCE5euVsyU6St3XVd1",
  "key30": "Wy4kgz7855Pkoc8MFLBLFD2AkC9fTFzUZK9ztKFZaEzhRdoe9EEcaKB3f73WpDh1VwiZfACU8qm7VZK9X2c9B2z",
  "key31": "4jDhZecf4aKJJkTfHjqTu5Q6e914f3fLtXSyyMuerXd1xY7s6EJxWtF1h2vuXFirMaeEDqCKJKU5Mj5xSDVznh32",
  "key32": "32ufnPBDmbhPRmhToJsXbYUmXwcs1QYyqNG5rdJ3W91kvTVpiLL2jX8b797pJNGqBumu1RCfyLx6nVeh8pSeisP4",
  "key33": "3TJE95WBH6jSGVT5bueQWxWVALAEz38Ld1JrVEtWVc24Fauq12ttfXd5rNH7L5oCB6wyH5xA94LmbfjLmBSZksV9",
  "key34": "3mocLkJTE3F2dKS2AZRv7vs7REN9eGJQiacbEnq3ddtvqZ3evSnEF95wqp1KaTBQN8Zkg13D34xfdZSRQKHTVoiE",
  "key35": "5X1vxBryKHaB72WFL1qNTfySFJbpyxi82eLmCUAFrg6R3L6TwrgzwGAWQoAz6LuAAbEvUFkC1YTZB35yGYJ2sYaQ",
  "key36": "58JrB8DCo1y6rtTpziSvusMqzPy6frtusN2QGtK9b7JSjhBt4G8YoLMyt93rN4P8WkaU5gALZYqjhXr3bH8ACc4F",
  "key37": "Zy9qj3YdixrCwejhReEuPZAAn8dHFCCyWK4ECDHb9phEd3mkBCghRaDKgJj79wsiVsare8EuzPSXh9LqFhsFPDt",
  "key38": "2NFCMkErKWRTfAMmeHqfVndWZBg8hfoQSjeQ17Y1q1XKRqnS92C2BtsW5Dh2dAvJJdeHDXdbUzbMX5DuxovQRUtL",
  "key39": "67ffH9b2rVcQmvwH2n7rXdywcZDaGTKMpT51ZfK9BvDdVYTR465GSBWfffoQ4ofzgadEn9rfAhvzF9Lkafu8anVt",
  "key40": "2PsJT5GRBvnb2St1cF9hDXggLeAyRFfhUAX2ro7R4p9CUyNSx9cqdhKVq1x8cy9ZgyrWxBvAC9u6XduyU2htEwKc",
  "key41": "3JfnRHxrsCHsccFnfdacG1ZNhauosYUu5JoiYZMtgHfVL49bwcfu7v2heQh3BK2AmV18wUBTQyfs1iLA6fddhkpD",
  "key42": "33yhaFUfGqbwqDhettLA22zEmme4rypZsTW2qxKr5UxSgS6zL8ZZj1jSfHZPiK8tLrAPMaAAnDTGQJLZL1P1zdVG",
  "key43": "5FZ2T8QTLZsMU8vTtzufGRyGYbcTAsMY8zFHVX6C6yRFt5uFv8Yov9wF9xp3HSSG9BvWXoUzWoFGqWPqw51SqMHY"
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
