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
    "395tetDxLLiT6ytqwWaZhnXXLRkToe8fUyP2YBAe9VVqaHpaGLBvwdE2EU7jrT3waXHjquQTsVgtQgKxHYtFAQp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DPnBnLBjwBz7Nut71JWns5TrC5Cv2Wffjjqmv6fpsr8VoYfGgmH14KSmsxMmf4rLNEp1Eb6UC6hYgRXUBt3gTw",
  "key1": "6zX4RL9YLg3vuBPpi58MRvJbk4ijUNyFhqF5H6mioHA75gEwmH8SrtJy7X9Nc7S8662dmpZCr6z9ZApBqHx5sXd",
  "key2": "3avjBMPf9nqpBPPH1eDBcVBecC2UwJxDFPQbaR9eCGsBTHY3NLkuRMy8GtVP6djHpf3SYGKbBcnnPAaVEjZUM25J",
  "key3": "4EpEBhCqFjsbAVE16eGfKrRtnmJC4uB9jbWbz12d2SjvRJ4dL6rqCwovRr59RuqLZKKYQsE9EdH7HKR5WpATjLX7",
  "key4": "4SJbyc4QnFXntahDdj455eTTeimfcNT6XDxuGoVU72c2uxSPVgXhg4VvjXrSjQaiSGWQtJogcziCsY4SBcQ7yWzG",
  "key5": "3gpa3rFrKXY3eMrnT2Cu7TW7j3kVuG7uE4oruBitGURkU97KQX9uu5bC1FxsC3mAgTX3B2tun52ZVfQGfmvxgNNy",
  "key6": "62crgvVDcoCgWnVtfcYABCM8Kfntt6v9dMuCphX1oreTeq3jtc8Qhgga3s4WCJWqswChbKCvXEHTZNYTFVRUuubV",
  "key7": "f4nv3gknGp84bhaBtJLwC2BdW75ezGUq1PLNu9biJrxsKxFRN7Ts7cBPu1nnf49RVEZRfyM7qaCigb6VSyoqJsq",
  "key8": "2av3pVQ3EL7aki3FZFkzCCEuoNVeq2CjXuWMQnbNiAPRaTbcS5tFUGwj4oZFRzy4QfQPeWB2bBUSy1H8LqEC8eSK",
  "key9": "5nbCT68ddThaMwQhj1Ja1tnWGCsRvTpczvDL1DLZDasLkdr5VHrTunbNJemMMWjenXBueNpQqCh2x3UtLPxrT9gU",
  "key10": "2gCb9ZLTADfpDwKUWetGsnqjfAStR1STvHEnnQPibzGKKnAufG7PVFXd86xyY6dEqAjuuhz2Xuf3wtiuJjmPwBMu",
  "key11": "5d95xTFdAW8kPNsBQeZhkbP5Y8HjfTHZ4GbLH8wujx6c2Hi85KpC91CnxUWurWAr3fxjvssmQyKEuhMHTSQ9fMtn",
  "key12": "5JcDxwdycVjHpcivKThWKVHQZLVByuNBMcxjGNTbtf9MeAUuqZXWPBaBrk61VfXCmtJQsDcHcB689wU3FsbXLtZZ",
  "key13": "3k8RYEC1MngCCngUsnLHcntLZgc2FoKtbxXJreRDm9irt8MqWRt37j4fYykyXrQuAoR1Dsg4cmQ9ym1KMu6FokMD",
  "key14": "JGBtcFZrvYqPNxns8WKnc4kWHxrLq6Lb1Miyxs1JUnTH62MVkk7SpiTcVxvSHxt93QQYXftex3WrFU49W9EmjyA",
  "key15": "ZL553Z3imV641KXY7NehUES9rtHiESMbEbpBZXNPXMaSFVfGZeuYSK4cpHvtukkmErBuMF6H1xHra7uuWFHa4in",
  "key16": "674ZrzxoMwUivWUyhbbE5B1Wt7gzP9JxtHwjoXHvpeZNg9CxDWVk5vexgn2s2GYP4jr8G4VSze94Kc4EdXQ2c8N6",
  "key17": "5zgifLL4ma622cpaeJaxohpPw3c4574j8YCfv61k2F75VB9TJP8gkvj2V8eeiBraXZu241XoF22rUf11LAtq9Usa",
  "key18": "4hKkMNHYgZw9Rg9GyAQnaJNJcCixAX8e5tW5FvRA47QA1Aq9jemhkdYs3hcotZsfp6neSCdumEBvSTkMrsWxTMWk",
  "key19": "PYLCceK6AhanVrH4GBspAkXqZVS9oDSgmHqjGXs5YDoYN92rFfwSPB2dMXT3mDdPeFPQX8xTBndCrbuguSQgsbP",
  "key20": "27ZMaBRxLvs2xQMYScMdcuYEairz11x5dmXphu86FCPATdAoJJamVpVzij1Z4vJzDJnATnnaXx1kdpRvJnjKUiCa",
  "key21": "49GtNRWZybNU5DpuBanT6ndxo6sDaWQwkZMb7MJ9o1sKAiZR7WYGq4kjZghoq6Jn2uWAQutbEATifVpXbwaXDLNF",
  "key22": "653SsFS6ZrpHxmPiHXKuNvzFPor83kfuM72LZQPgvjma7mcXZ2WVJtSbKBb4F2h8cHVNoknB11Fa9hy16uNsX4Z",
  "key23": "3dvRne6SkJ9YdjmwfHKeTbYTWp9oJLMn8uyFM5Zy4moWS8XGLkNzfJG45A4iSAx7XYK85jbkJp2G2tmYvhrtXvQm",
  "key24": "4LuV8RP4QDGNTBKRzENYDNQhRMb34TiHLAbvjsPf1j61pSxdYkVdDXZ28BAQig8BnJSjzBnDo5qUwn5z9jCyoCQC",
  "key25": "MpPsVVYVGzEoBJzzghSqMzLdJAYcpeSrfbVAKmLkn9C7KF9966NEUHovfeKqa8kpbw6Gj24iU724i9gLUzxN79D",
  "key26": "4WrGgFRq12kJj1GHeUNDZAUHmyR1zU4RsHyjkRkXWWizjEh7ZyYfEBqkKAvrPuQvKXu8BAEe74Gua5hQXG4zmmkp",
  "key27": "53CV4ch3B9eUKSg3FRr7or5S8RBShdELosjAoCkHLKV1V19DvZkLcpb26VWLkYJmDiRMmgLHhsGD6dryhZ7H8EGv",
  "key28": "MkSYtj8X56rY5B5CaJZ1YwLD9yA9QsrJrB52vy99rcRGPHFVW51S2od3JvZhyFWpjr3rHnQhjFNhWHoiCBwfzAi",
  "key29": "3s1odTyBXQ2Vir1pUPTUVwqEtw1pyWkTt9QwRU8u3aAS525eqWaAuYHAzW481ydyj7Uz9xhc5CYtooCYXr3iVsJn",
  "key30": "54vzVUQCjh4DVxaM2JfEKRfg8xJR7mDE9JRoMihCLnfBtPdwpEYHCEFPy8bE4xrZ1rSwMoBTMn6Ap5JPgpbqBbek",
  "key31": "4YTTKyjSweifWjatLtPeSocH5umdL6rTh8w12G71cFAw3NmMqvWmaes3tR4TiKt3PtQFdxeMSjXxVWUi9wyisHFN",
  "key32": "65q5SuLsBigLDPHcgAy5TkCsSRYk26HUe3kK9Z3vWpFSkdH6x4SSX2gwCK4UmHrf2h19z7uszvN5Aq2imSZm3Gkq",
  "key33": "2tv73pMgBoLSS1V4Q8sUVh7YDDGBUoEiShSV4MjHXreekcaefHgbVUkffeoASKmjtCdk2Dwzy298bRoe9iWPPpTd",
  "key34": "2TYVPL8SXobxmFPq7LL7AFNzBJ2zDqdRgVCV6YwrDZ6S4LkJJTzq3ptXNrpun6VVszngKjQp936gKPVrxVK6UYCd",
  "key35": "4KQ267MnJLMAv3UjYewVAsx7dKFPife22k4FS1D6wNcn2yEnagJNmP1yE5wpx9tHpPR7zJjuaBGfzxU6PgPRrWFA",
  "key36": "3WPHcr3rkF8VoWK4AG9ve2qHbE7S99UtxdCuRAFj3ytBqEdQyHNbiY6vRcrpiFC75PDZZnoEY722xUpSVJ5ChjVo",
  "key37": "33i5NVmaNZQg3m84HXfZjr3wPVK3Kpd4YXMrfUDX8dUwsY9BuDVKMbaQuHjou2iJbdG9DQjEKHSBCk1XaegjvXeZ",
  "key38": "HTwYfqyyE6ABGFtUHbycxCjuFRHzygekzQeDC3p43iEUGWyyy58iZvjk7EL5qdoRkV52UYj3fDGR762Qo9Pp4eW",
  "key39": "62bBbsqNjPTzSjxKEf6oVZwYK3xYwmd3pqQvP7bCJjA4r3xam5bmcjZ6oDSdGDFmM3BBr5JMmHZkaXUJXfpPQTTH",
  "key40": "42YL9gcCZ6RL8MxSjkmEfesxop3YvMQnkK32bFUz8Uv6wLXZh4aNd7VEcGk1pRmVUMFSUirqRJ9RzLKBA9Vhqkn7",
  "key41": "2ohszQZAjxckcpAUrfnEyC4RSAh9TRKrTHa9Ea9bzTRrcome3HSd42X8t4QkAQ1rRe2E2QqiPwYMGhz2349XEcNA",
  "key42": "5KArQ7zMmU6un2T3hP7zzN88nWHrhAEpXGznms63hFbBmPwHzaajG76hECxNCrwLbtUQkFvmgBp879nKTnmBkP5",
  "key43": "UAQMTpxMj7nAcMokiDYE3QrbQPGT4MMeonNvzZPHvGT3ghfxcHUwV6u3NMFbbfA8VyZGTsuhfaiaHrw9C1WmhbT",
  "key44": "3AR3UWiiYhSQ4DfaQerGDFi7p2CZ68raY2vvpGsUQUin44nuAMgJQzgfW2BoBUbCUwomw1A9zeh75mhiBVybgUSb",
  "key45": "4x2JAmVnKiQy3CGaA9QGfPjuVgB1MiKYhqcokFJnaJDj9goQJfGxa9xMfQGHxmnFNHs13qq7FEz797YzGm11KkrH",
  "key46": "4ZbS9dojrjDJMkvbKBrxYnKLEp1VSpGvzAqwy8g37w841EVGmMcNG6PKX7nPH62nmuwHUp3GVpCfDJrzKPo4HHiH"
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
