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
    "4zmndchEehfj8nqxuevCEyuyCpmuND7N66n5DScczBGotCwdekif7gpj3jRBejWNSpwbBDAwNSHdPvddEXrhYbeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WPWgHjV9iqaXxbPG8UdL9uUyJSRw125s5kpjXUaPPoCFSrLWSZPS1RfAz9nVXVH1e3XMftYi7SeDxpPfngdTsjW",
  "key1": "47kEWeTmNBZvQPU52oWq4HcRK485QJSPrhwXPGfuEmTwMS7hKQVAvuYEnTZJgVAV1dhfArKznB19DyhazpyQrZY2",
  "key2": "4d6TGFybpR5WPtiryYTD9G8RPFePNp3PLnhS74KPYs2d4YUn2rjN7b9bZ9ZTK24rmphqVvPj1v7V1pQgrqiu3F9q",
  "key3": "PLcEN9Hc4Wgy2jUxzJ2H2a5maVj3UFc9MVtwWvGmSzciazdzH4yGsbXxy1s7SKGyMfjoH4LQAcYnhx1GyyLmvsR",
  "key4": "5xjyV7tL9y2c4UWkZkYxiwuDEQN9sdsWzBsMcQfC4cgtRSkPBpPLk1NzzkuyV1o6umKRXBDxhMu8M83r3qYCCjuk",
  "key5": "4zfUrp3Q6QMgdy6a1gzqhSAb5Dg6dtdRmoHqST3XEa6gSCLHkFfdbihLHj89E5GSGAzt1u4LPsT1u9pP8wJ9gK7n",
  "key6": "4dXxpptUV14Qyo1GhpuD8J3eqUJ9BCQnYXKwDqGrWpFhYDjX9PRZE2a51wrSDpDXmqH4yTmATPpY6Fy7TNbSg41s",
  "key7": "2pwMTaWc6vPdqyjpEyhCuvpZmseSTdqJB4qhL4JqCE8vfPwmYEVz3bLsSfKes6Em4GVdWZdLVm4ztB9a5TH1RNpT",
  "key8": "4MpN2iy8ycd3WYLVRVvAd6BuW8zV2h9PFRSLyKvzLv7mvT2p9ZuPXGx7Mda3Rr1CQnHCM499hAP4spXJKgifx1Ga",
  "key9": "2ANkz1avP1GPk4jiV8sDUMKSbBUYGG7PcwfvDuHuvVaMJ92Aw3QQ2rfwxLzok8hkap9DxMU6Jo16NGE3f3rCHnmc",
  "key10": "4qen5T5qUcBG83HBDQBU5R5PXCaZCQgLyytwVJ9QWJtH1kLQPRTAa1MvwvnZUEnD8HbaeZiXaS4u1ovDtfrQ6BXY",
  "key11": "2megpvNFqMbwLUi54byryqy2JJva4vMukXg7sBsMbdYyV4jJuvkgthXzxGcbRJQnnRJv8YScvyE9nmvtRSL8VnKL",
  "key12": "5LhfEUddwxV2Ghjpko6TSvEYfAHNvbH6ztFgSgZGrU1BRgNdKBALWUrXcdUCn9pkbbSdkRjc6Sz2z9F3rJdvizbt",
  "key13": "uN5CoMhfKV3c1iWLMDA9t7RQUo5V7vpGWh6H71jBpFW76AvtNPdMMByyw4NerhxBBa8S9Ek7HXadZnVsTXNJSrD",
  "key14": "YJFTmzKDjbjczAAstU3BU6kt4iwUU3HfQQrq431HdmmMeuBJZAj8FhqBRzzpLf8rK94kY37ZBhgStiVH7SfiamC",
  "key15": "GnGHjLvKwZXCdtD9CodjrVGeWZ9Kz5eadDFB5YKaz2RXbYGhcqN9dGgqiaCfLX5R4xXChYkdV4M7PPk2H93GYyA",
  "key16": "2MsGcYRJUC6yjV1sPKVBD275XvFxNcp3KRh6b5TwNEy5U6cdu58QmbMw8Q1Yuft2pamJ1YZcELsUtPMiacg6XcxZ",
  "key17": "k28WsYmgBeJhuYbF4XVPmMUXzN3TTSrnKrcEp4dmGm3Q95JG9Aoy1Ean2vLrqreJT9XTg6HkX584AZR7eNGYvwz",
  "key18": "5hmnksL1x6z7XD1fdjejU7a2JSq6XnU9q534L3fugvJCQMCAngVdCnPFDC4nAAruo7JYoCE33bpmXcZVVacPz8b3",
  "key19": "47UFzqzSpGAjqruWMUkwNR8B4XHo8XZnL4782juSKaKgWYCi6NGnPySKpVPzQYXqK8PUZZdPh35Hp5ZjiL3HbKbz",
  "key20": "5CDyhT1yejHncABDSkE6AaUhPeSpNmY7GxKcoA73MfjSpEJaFfA3Mb18B8izekXERZxMBNdTQ4qKPdDEX6DJFRaK",
  "key21": "2nZUuhBkVLBgd3mApq5WQ7oWHRQjdPjZ559wb6ctTBN7EYn2xJhWNT7ptSjKJTrEdWtNyUVd5jX8rJq7MJeLDhJX",
  "key22": "RiPp3VQYt2UTU2C8UZnSbAXkvTAMQwx16ovazSoxU2pmGqep6W7ZTUvZQsc4KsuSB661PoQAjAW4Xr2dWdzrgCY",
  "key23": "2VRUgnxZDqZYcuuPCWfN8JAZG5rPGVPnT29r1F4wxqTBNTixHsM9iBHJvuj3FMgMWM9QwuB8DKVLLh5Uue8q4JW1",
  "key24": "51SZbozUqt5225Wid186fMsorTYdX241zKKi3XaqE22Swf1CVyxB7Tk4f8EEwmAMnP7yTMXVQsD4S57bdYByo8x9",
  "key25": "7LaxmBZvWbFpqdQVLjLsmVChXs7vMzfJvLiTS7nsGp24tvuEC91aGnXsJTg54u7Eu2WxUjtJ4iWNFpHvti6wPor",
  "key26": "5w3sjAGqptpiJtze8h2FqkeRkrexwU8MgSfYwMhknXxWALKu52k2gHjn7pNaAPrhvctZKknrkKVr6kpPMsDvhZD1",
  "key27": "46vqtZDXGiBPuNEDZmrPKaE7mfa7q29jYzG9vBw8MDbQCASB7sZSdhMdX6k7ZHLPXNK1vJSzXzVjemjxhZVWoMoU",
  "key28": "3Nx8Ym8GFdMG8Lo9Js3oSGBXE8snAm4Y24dueKi88N2jrTVS5DrKFXJ7hqfjHzCdmfd5TvtrUtoYfUXSqfLAw7Ci",
  "key29": "5SkBEhxfjQcpWDx8XWaLL3hcRJreV4H2TA6YS6kHbRDE1KdHvxmUJCEUg2zwJABTuJTTjgSaVNKvVi7zgS7HFvXk",
  "key30": "3WdEDdmeBKXC6EvqAuuUyKwdJJ4GjqGbgH45hVZJ5VP2AttLzvBX4bQt6fLJo2TSVqZ5TWSDmo2shG7wvg3BTLFE",
  "key31": "4336YrEoJ5UhzF93XDoXpRUiabVFnWDLY2En6pFLRqwEM9XrM5vZLnDhHMEzjs7p8k9nw2aJ7Y9UCDrndJ3Zu7Z",
  "key32": "Kn2kjtfQCmx9ahHQcmWGZYrwwc4iRQc5m7dobd5FEueDxKV43zcn6hUnTebXKCRcok9GZyqafLWPdSURBbbx3s9",
  "key33": "4MJFiL7jZRNodestjWaFMBPGmUYxfBLjVaCUsdNxRCqN3Ej2n1rCgTGKJKrffjyvu6Nv5wV3JfKQtaYY89RP3kZd",
  "key34": "6GdReUWjGrDBYYtCrgzZoP2bKkSo8J8s8jBheA2EK6Ha5bb4XQynUhqCTzYyshTmN6A5kmgaxyCanvpKdMAobgW",
  "key35": "2dvfSdSxdWC5paTY62E11pDvzz8fUuzxarPRPSyZk4bpcpFYMJ47LdWABDy4qPakqTU9BtgiDNptL1sXjYrf9B1o"
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
