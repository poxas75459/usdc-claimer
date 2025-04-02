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
    "5M3g8HizbrMMTTFjnqgcf1XsXC14CfPAePmVJMEA9PgWA7bZKXhFZRsq8Z99DebjCKCCfPYzjSmkfBQC474YE3C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EYcfmoQ3rmVmgMVoXtV3dJPDt3cyvHY82BDexGgW4maKV6uEhzHDjTVj8zMJGj7qkDiRwtNpShrDgdTtvzjbRyv",
  "key1": "4muA8BzP7ch2Z93cQyfdcTaWTPAAyMj5wNyDz2r7sQ17J2dS62bncPTEEcXeLy16tgcEhjp99UzwbgAM9XiPzLPt",
  "key2": "2crf56vdEcu5jVCkyd9jdCdSFZX793GsfA67UUnM4ox1rRUPq6F373EGWj4PKK76tx8LbKJxDVgpXrLLkcRQ4e8y",
  "key3": "5sUhEv85PWUdnLg4SMsWypWR59pUNSGYNU9Jxccccru2PnbwTekAR4kpZcBHyV5scqR83VMXeCAEgtwsF9x2ZULD",
  "key4": "1zGibVJqSK92rDcs7e2B4332WoQN2wdWhMvjNp6qAa16yzXdHLGJpzNx2jmQHrWDBmZeKhSimA1PT1GCAfowGZ1",
  "key5": "2woxZRfKWCVLL6z7EaLGJRaBtqV5StUxngMuN5ULbtsAzkfU1SeoTarfUrwmxLoVSiQmspMgaaLGpS64Gc132Vgk",
  "key6": "sGecSpUBYsjSvuK35STVuA5E97d1PQN8GskcBtF9MgQ1CAV5gM2T1uGeuAPXKGocS5HmwZnyGF6MmdS2QJo8X4M",
  "key7": "3qSgPMn7FL58Zu2SERW1Fpwy3639Pv6tUrf1AJ4s5MGThonedugodJMYg76rhZ4zYXecToADSm9AWU28sXBd1aLX",
  "key8": "4NyB2he4rKpaCaWt4ZuyErpvHTXMUWu15RqnCog1Jp6FbQ7st8wayik9CGZj7ctEvdxjnikjaLh5LmD7APUUubrH",
  "key9": "PfkiiShsRxkc5U8CAL9uhmf83yDTUAKoqFQypKU5LgeFKSuBpyUbm8bfNxP8FDUikCTNn8byfuXM9rbVHvQ99As",
  "key10": "3P59cdooAGXBamL2TVv9CL9jQiUKBoiP5mme437wQrX8BBszpsKmnuiZDvGKGrRzPkQv1YhpFvYXfmATK5wgXfVx",
  "key11": "21CP4DuuueEE8653XGDLkJcoMhnNhdjCFXUVRcjCSRtmD8EfS5N5hduDSiwYe6yAxwKpkNqtdeH95VSuphZN6AkA",
  "key12": "4PnjCXStrp8U8ToA3hiivz2eu6vnyq8vZxbsJsBHMN217FfmLzEcoKKCKR26J3v3qzY8Ajd6o3QqhWhrrnC2dNmZ",
  "key13": "5gDEtT8VGBhymbqPM4WjqG2hRA72AEQjeDfahmD48qooHxZyTyrVWA3RLTzrdbreJyPhhYQYeF5io6pj11mDJSMS",
  "key14": "2DrsRXYZRU3b9t4SeryHJkcRacJ8N3BW1XwH2UQNQDWC8ZVWdV1jHdUKWgbRBkRggzvapanLMDjmNHKhHqwSVByt",
  "key15": "5REequ9bWE6fHoiuj46Tddg4kqjLkUNuXQmF3yqhunssfZXthEQ1YoCzgWMxA8BkLNgJG87B2htB2R7kcLKSLNGQ",
  "key16": "yuS85QjZHUq3jDkEPatf6VvRK7rxcEyVuuhMbt2RLpWM2918wPCfQD9tVgiBiaL2zukkvBfKvu7KJagSEDeMYRN",
  "key17": "3kNtiiHeLhqL3ucdM8y4NP1xVQV7ZcBvKWpWhLvDPSxn1wBUnLwxayVzr9z1g2EdKxTTmbX2vJekhyUmFk2yJs61",
  "key18": "5Ew31obfWdPX3jLFpkud8FbpyAAXCSGprhEAmD1cFrocVQVKZ3P7z3Z2Sq6zhuW1mpcJqsxG4uMyTh7AXpjLAkBn",
  "key19": "5j9EDHSKRvLFTaf7d97VfNj9jbNLVQ1dnP7T1LWsWZ7At3u3XhYmch3tUpgd3Dw1rYxvyngcgYmpsmxvvtS7dtKZ",
  "key20": "4Q4tN2YDtw2szyuLNSDVXypNY6t2XPEQVoxS59XCnPhpMNaSQF2hUYqdBAmCuqseFKVuDNQrc2oEuEuqkh1Vkftx",
  "key21": "5ey3GG1WahYyw7yN4sPxoSscwWRqAefdPkG4uKBGTNCv8jaBZk7evoTYj5iQemwB2jh4DSALn3neyj6gCvxgPDQW",
  "key22": "5fM1CXTqticGeNojVZTBJhoSCt3usKmv4GuDVkovMhYExfMUPDoxgSDLstzzXJKgw5V5YUEST5bCSsyke3GbpNiZ",
  "key23": "5Cx8sGVH8h4LZjkwh3nCVmkQJ6iNGd4KS1wrtNHVB6idupyzgPw5dfTmQZE5wwVbYDn1wkX9Sdj4bsUapytcx1P",
  "key24": "33u15A9ukhB4LqNZ73yCAEUDgkbMbc5rp8FkcJRFcs6nuWefYNcjnEETTc32gLh2redQ4LnuWr7MqDvckmgyDR7B",
  "key25": "7Uc1KbfRGk2i3oMJTXEwpoDxN5DTp2UMcEemx4N6GzzaCycLV4Y8sCcKHtAkLCyw7Kyog1MUT5iCtSfXo5H5wWQ",
  "key26": "2HgBpNRzDmGAzUsuLp4zzHTrWeJEUCBgLbzGb2YtcYG7HgdbDRoXHbi7U7DAX1xpHr4wQPdmez6M1rift7UStbpc",
  "key27": "2CZ6d4vW9zYh8zygzCn96MRxjaf4LdXorhk4rEdhszxwyw1dkizdJYHUGaTk9oJazMKo2Byoszv6tbVqen7B9YBJ",
  "key28": "2v3yyAi8K8A23UErq2sJKwjN2mjFEosDPN4cQTPDT49wxGVeuQATGmMaU8i7zX2oxR67hnQTpGBRCMRpEk76zNwf",
  "key29": "4oBRZdWDz1vAF2cYGWT6N8QHzMeAnALnRG6CfZqC6PpuJPqofYc5D2BiDwKx2wfNCkvAZWPD2YD1zyMANRHp7G4s",
  "key30": "5jJxYpMDEicANwdbeeJKLpjD6Rr851XynydVK63nwFDTfiJo2dnHy2ZcUxTK1Yd4pXCqWGPNSycCQDp2pPWST1fx",
  "key31": "4CFVJ9iudczcjW6SNwEakJMFo1bhGPwCXmCD1wQp7dgsPmnQxLbfGJifNinFvES3AngsdkZiah3BkBaZKvLLTCuW",
  "key32": "2dvT5eY688ZiEKZd3oFt2zoqKLUWTrMUVvPonkCmr2NJRsPbLg1LLKQizSPoQXAGcEVLTKrDfGoV3ccHXfFqavN",
  "key33": "2KJrKqBCffvF4vDHhMtkBvdc4NrgSb5tK7L3WGTFtxhCphcmbTscfn8ZwtyaW9sxu8uiQLG9Haf29hFfvZxgo6fh",
  "key34": "2DEWB7B7kiwquSuMNdUmQN7X3CC587RxqucjrtsykaDEQ8K5oBMezG5xBvuES5Yga6KfrVKfJHywvfedjbeHwJ7a",
  "key35": "jFiZXQTZSr8USJvG9aVemDKsTCVeRZcuyviTmhjWK3VELNrhxBHe3T8GpMbDNKDpvt5z4G1XVwZwyQWyxm7NmdD",
  "key36": "62aT6v8cArdLnxvTPeR36HmtYZDtDwzT71WtsruuoN93ns943Z6VUpW9TwSyP46T8Uq8GVrMhcbeksEaF35Y7Bci",
  "key37": "FxWkgqUq4y4gTsND2facP1Uh2xYoCEk856ZL3z13EyRKPiikfzE5PUtaSsvyy79ze42nKJzsJUq7ax6JeFUtqt2",
  "key38": "NhjdZjgaxWs2BL3RUBnCcH8XCRtHgshogiUWtaVmyaBrv7mBqjJqXu78jsZCqcv4uP8m5QYUPk2N64eRyqX6vTW",
  "key39": "2a1JMNqwGf6aiErtrEpjsVMUukc3wEULxJu44UHX1587eaGPt6PB1BK22fCEuogJMQBh1Lbb43PJGaz3QDAg46gj",
  "key40": "2rY1pxK6H62vWcDpkbjc53sAsE3bufUQ7KZ54GcWBPWv8BZTokcEpeFLjefRHsGHAF7gexApR23e4be2qxEz6LLG",
  "key41": "3iqrnxpUheyrtAbRUfzjVEtzXQXhbCjzZt2ziCSEybWC1NwsjL6P9fjzqsr4xXLwxseY3nrJj4ZzA2JiNusvn21v",
  "key42": "w1kWPpLzd8tPngHBPBEWusjxAV8DJbKSgTuGTFue3nW7FwMoJEeeKWxGyAUJ15Xr71EdqA3izar6pHQbJ4UTDe9",
  "key43": "SiufFRTW7RDfW7bxkgAzoJ7tL81MzAn2SSPpmbkRL6e8TakHH8YeQvg7maAE3fAuNf8z8mrDDBPA44xdfkLrzK1",
  "key44": "36LyqkcYRm2nTpFpFri1arcopQ5pGyzMwoazXJt1M6nuXY2wBML4cxz36LscvW7i9WHWFYcoyV4629jrncPuJLtS"
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
