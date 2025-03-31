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
    "5egkG2ntgcV22hL4cGsiQqWgWihRicp3hfkDZLf3imXfefxXeU9JJ2Ftf4VsA447LEb78EWDxi1MjFjtJAyCR2Hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u8SKybBLdfDnkNs3AgYvKnwcp8nogLRLNvLfJR7HDVZvs4CMhebUjwswdmkemAGf1BzPrWxmzAvnP2UkDdy2wyn",
  "key1": "hHi9NWBmZLMfXRsRtBLQmAPGQsACR1MmwpuKEhRE6QS2ZaQFMj1N45NG5NbrdnvJtasxtCQieUAh21ezTyYY1eG",
  "key2": "3LDwuW1VFnvCUZUiRwiDKjAsEPmeQiFrLqtVXpizcW23BWAXHwmxeQeCj2ozZMdMgV431w81oGd5BPwB8zzLF8DT",
  "key3": "48pFedQKkj1ojNeE53V4RgW1R2XdtUZAcdQLs8h1n3gZM7BgQwRctz4DpGYiWLPziiwpXoYHLgzxLFn9a9wTtkgs",
  "key4": "4UMPD5tGEkyvPPfammezV9XSxAFGK5H17ntTRYZws6kaMwoiR9qxvMkxoKvNbyBkw8gqzz8sstvhGoTnmthqrWzm",
  "key5": "2K6TvwJGF4FptCxUWzuzL9ncXcvdNe3JwhXH38pmKb9U8tNoB8GXijwPSop5LUkHjRm2rLhMs2bjGrc3HbCgwpni",
  "key6": "5ojnFDfRb8bRW98dStUgmvNG5g5gdUhALGV6P4ZCEtA6MdBKeh8MX1dEaGxsVyFJG5AUroG9SHMAP8giHdKzQH19",
  "key7": "3qRjtXQGsRps3iH6XupENYmnafUpoGRTT3QDMnwp9VyFnNHnfXDWJyuDvKD5AS31PhkKAnRUechfAgkcgbvyS1G9",
  "key8": "YoSZZYdabNWnZhQWTQN1nudDcZTG7srs7C5JrqhjmehqkzEExzzcdeopufCEwj19rRmGpX9CejfjSsAMPkRttKk",
  "key9": "5LaVFmgyqfA5bu9Yk2Snh71172SigepXna1moieLwvj6zPXGK3hgDQ3jZLqSjC6VE4ygGjyhVUqdFQrzXLs18moU",
  "key10": "2DKvLrudtHxKYLDNqdZAsA1C5a71fxNbBqXas2SsMxhuSp8Fx8tAcKPxiMvxSockgFBDueS5TxTsxnimuCux4nhd",
  "key11": "5H7SKSevgYBqCUWM2p4UCs516TYD6b1atBdJFczmK8qFP6tiDN3WbUBxHVQBaBNXJggjoTsYMAZm7PBmX2BGnn4B",
  "key12": "2fiwztSp6QNmTyognrK3J1p8HPZMSFVapuypLmUEzAEM7ufacH7riCBUW6HKq2LZoPSu6s12nFngQFf7jP3d27mT",
  "key13": "55wK3zzwyp4QJsXQ2tn2EPPaBPB4cEgkrrQNSAgX41h9bLRhNCDJzLJis1XqixDX4qwxSW2yPbHqX9m6mA3TTYEd",
  "key14": "2xiNLnpWWNWMFuQ2XUxtRWQB7wyZBTnUpq2BNbn9ZyYSFtyp15MoGq2TBZuuUaZakeeZySdDEteHwvtFwTPNa6zL",
  "key15": "5DgNan6yVQMFebYdPStHQfzWcgsxwajwsYYEPofG7VpAovhazGQ1PACbUsJh6zUf1N3HxV73mecoorXqgFth2xrD",
  "key16": "zfovhthJabb68fTdSyub53RyT2uBbg1KoUAYNU9FP7prkRFVDJDQuZAt2uuMjeR9VFjPcPReJHp1PWjXAeSM4Lh",
  "key17": "5UKwCutdRRjjDu8urgnFytmnsNtNRTmUqZDrtCDN5H88XGVVadHkGkGj67z7WWNTJQ1FmW3racDWGLwiLsSJhbCm",
  "key18": "25xQamLwtjwmdiXdHF5u86pmX6N71WkbunqSPkt7RKmoY4K38VZP7LTzeXKEXxipoPr3vCWBdT59M234YNFQQcEu",
  "key19": "4p52Gg8nji2zGLf4DoT3KEN3TgfM1twJs5yF3y6Emk6SYjBUbd1cM23LJvSGvUJJKwqJUsAGk81UqqsxQvmLJo4B",
  "key20": "3DTZXNg6axZh3ASFeA3Lwy24XbYHURMh2MdXDeALDrjWDDpkczmyzKgZBop8d3VzVV2ypUuGcBC3SDWddbbTeo4H",
  "key21": "2PWHaF9r7aogzjKUdiJFnkSL7exrz63dciVsTupV65W3JCrSSCEFdoTnnNjb851VMwrHWTsYnnnRiATA4b1oeQqB",
  "key22": "5bqUizox98mum18ZpgSe6X6GPBK8s4XxcZKUPYmw1m4SMEcDed1yLNcyKni87av5q9Fbq2XdUJiDZjiG512ANbDn",
  "key23": "5dZHbNQSXMzkVfFs4hkLkA6kJoW5AQwPs8VFmzR9CePgexDqqLqs1U5DXX2S4nXAG1gVznFZZPW7K5JNDMty6xoy",
  "key24": "4EAf7Q7eq17TW6UHVQCS4qiPwSaTc7gEQnbt1XqFrkYbTJ979ytpFN5iatm77HUt2Nq32ZD7vHt4h6vMN77VVZtv",
  "key25": "3HxrSaEaVyQekZ5AmFDECMfCzfrzJc953pdZPnM5EzbqAVmCzyWryBjBe6SWKCxyR1kziLjsoecDfQuz8zFBgPFL",
  "key26": "znCjzddsGZAfeoSHYMvAsiktrLBhg9H6E6Toz48QhfyCaJi3rkmwqfanAnpkTKgu94zfgGPjFA6c82fmPZ7t9Tu",
  "key27": "2YxKZDpV6jUPUMof4FjFq4HvfvamkAPYBiruqKfczFm5A6SRi1WdafqsMVvC7JJzrCUYxTsbpL7Xtz8WNoW4Shr3",
  "key28": "fSPbPcVbY5DYpSsnk5ZfKJ9f16DkHyhB2EwMb8sBy7oxEPS4rCUs1G5C6eKF3gTojFVhwFFJRYxaW3b3xcNGtq9",
  "key29": "4ReA21tZ24Rbs8kRVduGYuQhSiw4q8h9ht1jMiv7nfCTPWZmDTkS9bwrfyWx5qwRRuTFDdkmyK6NVKJ11oTwKwar",
  "key30": "EQr47rXLrgAQBb1CoMvQdmwTKwTe5qrSYGDPKnAZsdceHbcJMXwMmjapi7QPPrZaZ4wYpqHMDwrDsjk4o55DzK8",
  "key31": "5YBMRWiBefPydK16PBVHMUhwnFLDPtUzoHJUcbSqkKcTz54hhAcPoVaYXvehG957rVUSeiKvqN2RE3EtRwHs5SKj",
  "key32": "jM76ZXqtRsBCUoHKenrzCq2hyNYTFyGWVC4yJ1YmZgX2UtHn4BGDzYExN3tHwoCZadmuoVjCSjhxCDRkv2yve84",
  "key33": "66m4oXSmmdNxdzDirRk13eC6w4Nkb2UiCgHtJqVBgtn1ymJ54yGzJgEGJKDu5fUhjVKWVvDmnmyvrNYHJkx8Qh9m",
  "key34": "xUsPhirUJsCvUvPNurktUyDQ2S3U2DamqFX21oRZTWoFYHMgzszQngwhzFt8gtV2DEQN1PZsv3wcj1dfe28JFHS",
  "key35": "SMCzZ6AW5DbsgpRve3Znrg2Qo1gszAxAK9fVRz8fWD4mamnV8HwGmnttMhnpBn66Q5QakjrnKdxwDZyAoxpEDzf",
  "key36": "4iX2wVeZgZxLQEqDvsbZZiVX4k4L8NDMYtmHLG2A6RnWZg9SoN1VLpiErjT1YwhV2N2G5qaYpirutTsMHmjJXvpV",
  "key37": "2TPJsfTzKXBoz7hqp5hNNpoFBsuvFuU8w75i6TMuRkRvs2hc6Av68EL41m53dioqy7xG1GghBYTdZuA7sF83cjGe",
  "key38": "2YB24ZyucAupJyXFgPoe5gdKaT9Z5Shx9A8DZKHL7qcdgV36KKmR78LQRSwDseiCDeoFHWBkT95kQc6kcCnBf4Sf",
  "key39": "xvTaWMDHPrrgo6NVggQEaFfPEPJtLe2QfyzjVeoBoZL7sTKoK8q4cr6zHc4MpxTot9XozcTfQ3eKfrt4XJFZmYh",
  "key40": "48rRUcKRhoixquPjjfAmpQP4UbKbHpWQHLd5dDMpDYoTSVDqX2B6MYYafSVT5makkwYcjWMHdbwAJDopwBGEPkJi",
  "key41": "48uLSak4X4HdpzP4JqsN2xjaoqb72BDEox872bQkDo7ntTh8rnp7HixCJHPtSpQKN7J1K9mrT9t26TcQWC8u2ERz",
  "key42": "kNk7z2CTfN6VDHk12NJtqmUGNVJsVgSkpaaZ2qzwdNhFW3dfZP5zEXM4W6pgWjbjju2DuGDeVh1uRxC97tFD88h",
  "key43": "63uPfvjuFUeZcM2sGfxpZCkaKeoyoFzcpSPKtGUHz9u1ytvgfx4WBH1HLDXtchPbGvg3DzRkmWpmR9QoEjJ2f2cu"
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
