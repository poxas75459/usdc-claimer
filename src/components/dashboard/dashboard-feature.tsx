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
    "5SkSAoEgQMtd3R2H2DdyWvczFtDz2Z4y29Jgxo2urmiku4Z65CsBzWy1YYjmWD7gqYt4YEPiBhLxknHEsnXakENn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tynDgeJdULDHv2RUwKhAUxKaxZC6dyBhHMpPaR6YcoWDjsaPe9Nhh14wCj2vTuDzNiucKVpn3BALfdw7cUyH432",
  "key1": "5XXFwmLjoSCLcFb8JYB5y9YAKW5EYmrNXCpepsPhAMAimqzQ28Hesw6zCC9vnqWZGpCRhV9NeXoe6Z6Bajusceag",
  "key2": "KJ2utMarPF5kyxAznpuhjYL6h2sWtqMxgAqn8Kuc7ZigvwbpSTk8bM8ZSARFMPdjEebqTTLR1xPc1se4vvfJQzm",
  "key3": "5Xg5WqVwB5Yserzw5HwTkAQNTePA7T8KzuTmcBEqUkDaytk6Bg61JyCm3T94J67SFMWmf7TqvWda3rt1kNab4wxt",
  "key4": "2ft6J4oKJjjPRSwTeowAPQWnazz2HCm77jC3D2qRVgpgXcV7FsfvTEVX2K4kS25LZYhsw1d95zSUVjazgNcpPjkL",
  "key5": "4zgnFcC9q2pwaufTFmWJurs9xat7ckHmyaEpDp7qYMFvF6oZYe52w6TL1BNoW14Mq5KFEP23QhAz4AoPRbusCnTD",
  "key6": "56hNqZf5QBMth3KyhnCcAdG8RZctjNuMKuvTmnTqjJcBqcriorideUkD7KV8gspx4vY3aWR5H63RUpwwVKfzaURu",
  "key7": "4Ct7pURBWtEC1WVnmXgeyGogMSxzufetLuvTmEWamGWdz79bFPTn1goUND7B3EtpGjbxSyzRHaem7A42xorC7Fzm",
  "key8": "3haMdqvkEyJX8ba7oNiZw3xEBqdKoijaRXQyeNvkApT9mWZVZ4oWvnERffb95KmYRWnN8xKyRN6zhHwL7C9a3aKw",
  "key9": "yAJBMdrtW4CYs2eqbrCLvB9wt2LYEYLFAUVRrP2DdxAsGi1JWdjQ2YMUMUx4oDuN5F3bCKufNCMTS92ZEwXm1xZ",
  "key10": "TVRCfYdZYJcEY5QAUFdPZ7NCqko3f8S6U7PoMzaEEQN51QtFHQxMpySg71Z8eK2rR2vLQYL6F79R9HLBhbMptFP",
  "key11": "ruHM2k7gguTxSoHNbwCARcffg3Mx32RKJRTZ2fqtUxc4yzg4WwuWVAkL9HTb3CLUNQLxX4fmXM8SBNj1Gjhneux",
  "key12": "2tNB9qagcVUxCdzBhGh9MDRLfC9Yf7GQoGbwbh1tHN9NGXZK8RYphZibC4BEeNgKi1jwo7jG9QBpavJ2Lq3MUiRH",
  "key13": "5tgEteuBZygozCBduumYBSynVtSr2g87j42z4Ui7EejLHpDMf5cW6ghKxvjEVLBz4ptu98XuVLEQY6pTnojrAp8R",
  "key14": "3muJiVK3eCFQ1kxawjiKAWgLYAGhu4P8G4wZQ2ktnQn1jDrw3RsbTaeV5ux3CfpMKeidJYKirLX5ZYhyhM6tmzEv",
  "key15": "4G9oVGYMCXiKcazXYpCZjgbFTLq8eNRgaDdNd7sEpvdxdNyDQXWj5AUMoyw8Tm9rBGg4eGQH4cuosrx2uVHTcuWe",
  "key16": "ku5AGTXUUJtjxhaGrcjypeCYv93vzg2hnr1agMBt5JjheqpV3Lq4KkP2NGxkWuY6sHGLVUdnkGCDTJgkLuDXiGA",
  "key17": "4Kx2jZL5oxWCFg13mKjBcqABEoJ7tq8HmJEBKToBo6Lw8AygAbf15PhkeCjY936GgN2pT2CnHf6Y2rAP4uNFdFZY",
  "key18": "63GrXwwKgiUE2bXcXfj5bSEaRizhdHa9g5xEvprd8TeBQY1LuiXk6PUCDxa2eewAqQ68LgX4v3u39ni55qdJZFaW",
  "key19": "3JUo4dUzdahFZcjH3rheChZsQdqCdfyuGGpn5VLYu8vEGjEqNrgsXqABUZmdvHKpCxWgVZ1GaHR2Aku1Wtzg3Qaf",
  "key20": "4dsEgr3RRCyiH9omLiJ2D3AM9tvYWQPEcy9eRc33cTuij5bhAJeBd5R2VRXmkBi62pJ86kE2dTBC8Xga5A7sEpff",
  "key21": "2HSwUrWNDcLhvnymRkwHx31hbEZEnR8zjBpMjEfyEXLPtwHxouSSZgSSw5FCVfvNqhq9DJkjQdsJSfMEKneaKjfa",
  "key22": "s5PjWS7U8oHbuyqT57CGvdEQxv5YrJp6Mv53qr3ZoyM8BTM9ZwqZ7ttYHTjW5WWo8h979qcsCApo4NQR8GRMeqY",
  "key23": "5kGthDNUXU38us9Hfqnf31ZG7PHpNTK9f6Xzt7FoCuxPxGGxUaFeqSCTUbq8hQTTBHPgHu4BMiwL4VZTjkPtMytu",
  "key24": "4roVGAYHzWKLFTVVGUPax4BfyR2ngADoySckqS2qxGYmvCgYbkNEQspBinkDCDSbX5K8cPGADk5WyXY7dAFjc6MX",
  "key25": "nU1sHqVQdUiwsjMKQJjv3G8LQi8ue26CAhU2iEF6XqXVLHm5fuMq4owyJYUpqbU3mqP2nv8Ykyvc59fGPYu7LaT",
  "key26": "3CMCxd1RZpvEmtUaf9VBgwEda8kYLyktcksmNMJ9HunsbZyWi2qVrzbri4SiCPrAZBm7tm9c3R6aNLtN468E8CtD",
  "key27": "5p6KfdkaMprGqMfPBdFEnPUpBwKm4oHToVF9f67utCRi7S8pGUrnXGMhF76cUdVGurCsS22ZNV8FeCc4acf1P7Kj",
  "key28": "3hczDKpZHabvWfveCdXH951qfjG3TQJsHfP1SJk5kFfutPjiTQVhn44Weee4vsgFWRJkJH71U3W42iAn7zKimHgh",
  "key29": "3HQX2wcV1NCUTJTpuwivNCWJeyrM8Nzrnx17F4ixaiyGTUARv1VYZmuiL6ToUwvMFfeFqZegJCmo1Wfjbce7J84h",
  "key30": "4x5u8nsYVcBo4B4bHzQ7SWAdVsNjgvsCSDDYdAuUoE95HePK2dVVUCwxQQ8uQ9g5AaUNjW9k9YQsGYP6TcbdZuqK",
  "key31": "4hH6vVTwtf6nYsRf4sM8ASGHzZkfVt9yEcxS1nHGwPC7sAqjQzSRP1BeeUm4RTY2K9JcXaKXUZghGXqvoZM6zyQs",
  "key32": "59gDfSETgR5YEdD1EM6kDPzo6qiTF5WaDEVWCVUPCW3zoFesztUPFuedqGJ2kHEToTFBh2gmmy4d1pDJDnXNzTvb",
  "key33": "3WFeXfXfVWhEtwue4SGbNxscstssANy5b9NszxWE5XhfWGWYJLtxHY5kuLzoehzh7993szvT24z6ZNfrtZfSDUEM",
  "key34": "cSgHw1zAJPX9XjbRScXtCyvuEFKPaFofbQteraVC59NAi4Qs26cTAxQNwUWAFk4Kk3sEbt9HXDja7Bfz8NcchLi",
  "key35": "4C73bQR1jN1boyqwXGFDgQY2L5UWXRKLwXo3AixLfEFZgS574hgZD7PYpVMbWQ4ZTfpHXPzZ5E9EGCo12kon24s9",
  "key36": "4M5d4mMRpS1HpRMT396ZcC7JSNYrXU6cgCLpzqC3SA1K7h23cwkpwuMKD4oSaQXJYtit3XjJgqU7JWEAG11vLNqi",
  "key37": "5fDVw8jKczHWzQirng9RuJYLrxbT9vWb3QU5VydzYjtBbzocez4Sc4fzzwNPkr23iASFuNwuBus1HNtfKHutAujy",
  "key38": "2GuEBfFhFPxYe8N364e8318QQbxacPjRSg6AS4NZgiARwdMF4c9NqLuhMkGsdca7mhkAQ7rHYXBkeBhkyqoi4jj",
  "key39": "3UwtFJ6vRiBWMT8g8QEFHTouA3KmtyCJgNQv596LnXAw66g2bFiuKk7H54wyQxafenksqQshJqDJqeYsRuxN5BZ3",
  "key40": "4tg81yhmvEM2Rrrm4G8iqav52GxPBAk7xNoWUu9do2vdMrmQSqxmrTFr8peheeGZ25xrQ6awP2TL4J5oqkfQRKHD",
  "key41": "gWkBPmzGwTEmq8fsiwz1kxJ43K9aVftPdZdHDnbLGdNfcjoertt5Q889ycQEHURxk1Q86x3sirZDHz4rXcaWYv8",
  "key42": "4sWdrn49angcgoKF3spZ6npQTSTDvSPCpEcNJQaLgEqauNHVZCF3DRJRN4a2GBsVRVaCkTNEKffNMSRnuPpnCab5",
  "key43": "4mpxm77TSYcmawZoprEUoWoE7NsN8VC9yPaAj68NoDrCtbJs7viU1L29dne6FeGsEWaHSQVQo9SDodeC2WxEwcZ",
  "key44": "eTCgUVMKgBrBE1Aby5oeq1YpuxGK3TZRkkW7uDqvungYrPgfZQknbmMzfRzM3cGwtLiQuRjfjZhey87R5YcJAzm",
  "key45": "56Boc9jw7BfBNJVvLendnp4x1cpZTEgBy7mRLGqhW1dTbAruCtqzEZyWupEJvFhJMnt6LbCFaNjTrnuyuRwWKoLx",
  "key46": "jJnKaZmmw8yRXrFU2TtkuMjEVjcmLsxCKajv4YDR9BQctkkMWbY8AQX5DHR5W9NurB1onwYUfbN8k3SfcrxLXQq",
  "key47": "2pJTeALZmgZYzjbQ85EBZ5txTNYPigxJELYocFVJYXavULxYaetFEDeye5AytmnFW1TT9XgzJFuHdA4S6asYupMz",
  "key48": "22V6PAm4BAsgxe4g2DctEiuNP5ce1dnpWhN9mRwTLxo2gbcvGzjcvD3nRmTBUheJsgL49fb4eDExTmi5jRB3KPyJ",
  "key49": "5U86gjUtXrCUbpi5MnPcM43rL4TFEReXP5QJV7s5eYtUmFpifQZETGXZyNAUq3GGMtsRjWkAy3fc53bZoFdtuzna"
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
