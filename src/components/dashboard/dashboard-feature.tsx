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
    "4a37eTXRckw5vEQrSts6ABZt15SSWUYE47gahVfU5jfMbH1cVZ9UKJYL3w1boyxxTjDXqbS2XBWhk1DfqvE85Ywx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z4zTtoiaFWXV3dW3dwVWrjRW7TFLAM5HDVy9NpFFGnfxUSaBbkP3aj8P5jVJWnKFzfL2dDRmTCCLi1rSbLWMMCH",
  "key1": "2Jdmj9qauzTJcSgDFcf7vCSekJwegTfR68ATFB6AHy5HamHVmGKDZNMq3tnJHV1wnZMVU7159H1SHC2N3grZ9niA",
  "key2": "2e8DnB2szS8Yb69Rr36P9REDNLvK6Qsew5woySih4DcqBPUg3St6BGxNG1uHWGCqDKYXPWy9jq6F58pow2Y6B4vd",
  "key3": "3zojYGai6QwTZU5nJfNYdsMA9379xtZSh8NEEgtNgELBpBnHaq9EjJh63HM2FrNmhWi8JNqhkdemWdLHQmGD236H",
  "key4": "5wsRYDpkW9vgXFLDgkDhyNeHbcpt4A1TVSobYHYmLh9URnawx1SKFmuyCCzA2s5C6HFgLi74PR89dJLuCfgnzXnL",
  "key5": "3aVSqu57TELDmNksZzVui9X58Wrvk631RsdMDYjshT8Vw77qgWN7Rp83LwT1TAHGEYHhAT4dhKhUksVAAhdjCufC",
  "key6": "35hWVe588RqdaZV52nBpwxSvYu4uC41V5ruUaeHLSwPeqZxdBJtYZxY6tJoTno4k2zrwgb5cGEj72rVhFn6wN1oa",
  "key7": "RmnFaTU3T8ra29mutQThVp7tNRHTXCx7D9kRxkENwQYmSD7mVrZwbZiw6fyc88k6Hxcfb8X2tw1Wiav87xMBfdA",
  "key8": "ey8FAnUCMQz9k3gnUf2PCSR1CprQu9ehUfnU3XuPxkiJSyL5DB94pYUYq9MQf5bCansxzgE8QKYSzccU4JBYgjZ",
  "key9": "LTApKyPK3Vi4y5zzXJMH9KGdQiuPMioMM5uXxKLMy1tpLjmkvE3Kuo6jXDvTvedXad2fWfGQRRnyJHKE3vPcpeY",
  "key10": "4VNwe7L4Dsnj66GEYxB27VYXmSLarKbmUegVqqaLGJXJ6shqpr7wtXuefmLRmGbGVcWch36KHSPGHajVS6kwchwS",
  "key11": "3ogtFcUWJ7Yoap2XGQspzemA3mFk4s2xAHAXkxjsVbeoEd1ca19Wb3LDMpqEpuWrEe1ExD1et89Fda12o5mFRkHE",
  "key12": "38JcF1dgvpCLjsEwUma782TNeb6Ud4wxeifcz4WWymftrQtvx45w2TCNELiPC8KVxDAn2wkh5HCQpoNqfTNTBhxm",
  "key13": "a65kbTjDX1fjZHy4snPzn85pyQcS2D2B5FVed5WXkmFNJhRFg45kn4GzbdXxATFdU1cBS6D5UVMnjXf1LFuyFZm",
  "key14": "4woRwwQdsKx31jLSJTkyppt4vZwauyKiYXACGA9Q6hc57m1ZqWZqHSbEV58j3es25tWaHjmdcmMwfc6VnGNJqvct",
  "key15": "2vysY6dCteubpPFRS8vyexmH7ak7sVWzkh3J2pCbjP3JnxujUBUf5m1zM13pSQ2Cbgno7D2478goJz8gVfrzr4gq",
  "key16": "2P5T3HTUgE5bc1fLE8YtwDVLsHUnmuSx5Rq3cbShzBijZGKwW9NCrSY65dTeinrAeaQ5V6AWCRhifcKX1knniziG",
  "key17": "4suPf7hXv58eDy3jywHi6PENFxJqGnfQCDTboL6y7rALr13CxFEn4oKkDzNk57ojNZFWxuVkrk5yCnj6ZJaoS8zq",
  "key18": "TmNHShyzELVHBDquZcQYtCSsetVRTV4VnATGieVFoMmaefm4VK3R7Nmim5FaGBYyGLywbQGctYDmWSLrMx6T1Sg",
  "key19": "3M71WcibBnJyEQMQuA8wM1gHZXreRU825HnuuEPrjaZ7P2pt4dAZFeDbTGM8F2ivpPUkcD8ovbqemn4TRQtDu6Ms",
  "key20": "4bKaVawsFtZWeUdDvsfhNYmkQxYiY8F8iXM9i49ibkzBLinhALWcnSwLsss1o9HaX2ua9LkzA9hhVfhW4gHHFJdo",
  "key21": "3xDCmErETvX8tauAX2yzjYiZvVHGFFpZaoB9awdMak2TL6vnvEbdkrXdFQHTytT1WmkYJkP6BfWQxXVH4UUkn4aC",
  "key22": "4Z2P5txp5LmioTrrFwg7qi4pADWZ9QQaddS2d24XWXNWvpWn2aaq8SdNjKAaZQmkU4vRZn3CNfJwKyFD2ASjqcK6",
  "key23": "37R8PxGPSNfnSfctczhmSDSHBJYnQMZAooV1TzuGy23vNQGVYf2mACv89GfFZaGVsGeWHoothfN8pGMDSub5xheL",
  "key24": "ZuP2bFaj31u1A4KmrxNQbFZYpZaZLT1rwQVbT9eSxjrZsvMU7bd6B2kk5cDeKNXt3WHbog8emMb6FpiXAydW44U",
  "key25": "2UWxX7mkcRjJ8YgEP3JYDuG3qXhFBCP9qT3cGrKG5PABdgpYV3FjjjRGamd7GJyvQRx7hmxE81jhAMLaxpnvon4c",
  "key26": "3rdZJeHPYAVNKgfdNtg9K5dQ1Dppij8bSK4kN48eg5XPu1aaFKiBoFUPkTPqmTyG6DR9hTRZrCWSXCXXnqJiNKpC",
  "key27": "5YiQ1MMcnaWE1y7T8PyuLS47hJnNTPfU97DxqWkoki5CVvC9ZLexSd83UsgHmD7hwT6Rw5Lh92mXoRJL35bYoQ1Q",
  "key28": "5SyBAueCtMrbZSg7pESomtF3hPW3d7VqGyqcyGYL1wXQnSCkXAW1LTyq2pLRU3STCZKUxAL1R2xgBAwmP7KAd3j5",
  "key29": "4M41dqxripWrEm2azT9HYoXPdH7zwCSPoXKnJaVuA52nnUYZEpB8ThvnWyg4tVVZT8QrRDGGgVKZFuk8VkCGWP5h",
  "key30": "36VjEXM351yxqq4oWRGjM6QzkuNRY1Z1mTdqdNj8poAiR5No8fZCFaaNTBYxGGthGsNM5T9ot9QrxkKRjkyEDgHi",
  "key31": "3bPupndeRQcjeQWgr1YCPjytNqQpNyCKFP93HMpynwrjkR9mpNcfa7JcVUDVmcDE5R3d8T7EGYceUVaaRdyg6tma",
  "key32": "26ckoMNYhwoQp6esiLJJfTJvHLCuirHd1ziLN18WpkhpN1yBBMeJFR71o4MzKcxqjjDNfDHrctFYaJD44f3UQLNS",
  "key33": "4kvrQWYGigXec52MgFSbGHMkaYF97Q5MnxGaAUYSqazoQ2KVd4Rev8eNGpf4p4TAWgALgYM5QEdx1gd1jEGtMoM1",
  "key34": "3HS8hdLLG3h9xWNPFjE4jtCzswMd1vwQWU7uMyYYhuZNRS2E8UbrzR8zUmoFFr7DwSunDKcu4L1iZte9ZdQpcpuy",
  "key35": "4QxncXYwk381Xnk1cCZw7undwtRkeSEuJVAqsRZs4XHjjuk1x1ng4tM89KT5sxnpMYKc9bSzsvARfgsR62BxSpfL",
  "key36": "4uWfUdx4wpTGSgQTD2v27Zkv3SGbAmA96JeDK8WY3kY5jS2F3hPytWSptqxMRkLQSZepZE8QE8SiAwnaKhKroJ3q",
  "key37": "EW8Vb6Sw6TZ8JTgvCBMMNsuXzMFEXwoi7ifd8szBymBixkWF9ZfHLWBH1VMV3NKDvvdRt652gUswyT8XsypJTtz",
  "key38": "4dHhiBNTitmMcV7M8g3MqY6gCRVTQPDucyvEgYkKaAat76tgAdPnnFjr4drrgmVtxyQGARw4pRPr1NHwNGJBZ12P",
  "key39": "54SCqGCAjEmisKBvdJke69kzEHLmHtmK9reNr5SmyFMDVVP6ngoNBQ5TfYhF3eGJMnNsfJukJKx4HDARXLLHCeNq",
  "key40": "4qze5Y6Z6EhGfCExuqSLHRZvR24QQ236xeWNUXE8DChRHHR9ZTjrMaMEy6jrLnMXB6FNyCqvPoaJP13DMSLCYHYQ",
  "key41": "zDG1mHzQMsiZaQc1JwCxu2DSoAuuV6nVodfSFpiKhpinmZ5hDfR4uCsx2Pb7hkeYiDX35xsGPdde98qPYiLHx8L",
  "key42": "5YFFz6JnVzeC7Sk1rVjrNMZxWXsstUhgYddbDi8RiGcaZuDCk5UVYQNgRkF4h7f2JD4T29MzUX1e5rcHxHjvGFg4",
  "key43": "3b1xr9iuPnz4DMfZ4N4CShipheiigdXi2GY2UVnxuav4ACLnHdb6xrdEWqrQE6o6jeufHM98zWTNEQYewZWB2BTc",
  "key44": "4rgDZqehBzvc3vuZb335YPZ7EfYeiKdDw8MVsVyBFf95Bd7uTwvg9yerwecC5SzLijcEuGjDe4maX95t4FyBH9MF",
  "key45": "2A7t1awjVdND7eNVMxRK2DBuBdZjz21AgD4yVnaEjhUo11cZwk51pE3e18CVEbYGtgqrfETwE2shTsceXNf9yjUL",
  "key46": "5RYUEPFuyJr7n5Kj47ZPcbeVyhNmt6DQDGpofPU3bABMmEqMzFqWsVcxrhyKRBoWQjZJubuAdXMCuZHvqAi4BU2s",
  "key47": "2ZNqohCn5qDyaZBRj1aGcj6STmC5SnUjEfZEGKKhEuAz3YzKbz2Ns6fysTntSuogcz5sjSsCcH9KFNYVSxHhiBKA",
  "key48": "9WYqyxFMPYUgnKbXE3tEqRrTVuwpkvMttMBYMeVEWT2bcZYAW8VJr8AQpyyxRAU1Xyo4wtdpLLXsdPeaiKfKkuo"
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
