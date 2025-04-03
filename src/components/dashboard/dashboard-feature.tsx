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
    "3SVP7BWLi21eeFwZaKuXuWBxLKjcaWa5GCCF4xVwKuGhN3pZWTH7wBJvoZMp5tAVrin5VzzYMLxB7oq2GoStbTbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jAG5PDBxNYgLSuFj4NYn7Y6tYeiuQLiyEX1vg3qS9QmcENKKpBbJweFTKaKKuLE3SH6TruJp3xR8xdq5ps25zPc",
  "key1": "ZhtoiXLYW4JTfQTn7b7aKq8m1e3EbcQ7k9XmKUqd8dgPawRvgx9pk7DEDCfbHPRnmPvdc6Qngm1mYRewLg6B49c",
  "key2": "2khRFrNtTefGB7ZB5N8Ky2CxH8k7G7hbSkvMZbAJZcwfarfsVUTjoy4XGn9LgrBvYrZHkqncscccFra7igisvhHt",
  "key3": "5s4AjdkoqDb4ywy6fkTBv1H3jXJnGGDgj55eLGHMVb2f5FZ79LsH9EJrWK9fXQ4tBCrDvGSdNRaTiYTmvMSdweK2",
  "key4": "5Etby6iV4ZykkyPhFuZcNhg3Fd1u58eoTYpAbrXof67UbGhLGsQg8h2ZbKaaD5z7oVYV8s8r9DxjienDqNAa5qK5",
  "key5": "4t7ShsRPKnD85NXD71V25euoiTJkLayHsH48yigQDtmWQP4ESTBddcHF6cS35rhHRAC31Em3dutKduMAJBcWNfcg",
  "key6": "3F2TsBgQ2Hj1Y5vSQZqvG1p91WRbQSNuaZkz8nvBHWu4BzbFBjnVHqzrbq8GmXN5dLZEawUbH8KUjtunPETfyZ29",
  "key7": "32TFk38ZZHnpACi8ZYmQuRfH8XqzBPygDtHEcCSpBdUnCShceDDXNu3EVP61GNPZsP3RyMdvr7d4hVq8Qk1cCAp2",
  "key8": "2MKjXZd8GuA6WvRc5A1igWa9NQKrLw1qfhsDQu21Edwn6rQPKaPiuuiJaBB1ygv2o7CJqpfpxSScBSbQdD73GJGJ",
  "key9": "25mSngTPoWS4H4vLZ24cPhUyvTVhsLMpmnrbjCadzii8wEw7nYvbsHFKatEcVjnpVmLHAoG9jGtqSh3BBU51HivU",
  "key10": "4QDKqMk67HyzQg9iD35RGk4GjHuuVBJUjbPteRsCiDmoVEWycfDYsKo5RV2PghWgDv1VBJXm5fviHQuxrrR2YLv2",
  "key11": "5bSq3M1zZG4hjw9qurKpWtgBHB2jfN4faHMS2V2Jr4jRUz9V4rxeDE2AfoZc3EP2YeGKw2RSjbqAE8f7f4L7phV8",
  "key12": "62TaeRM5noFXZru9Xh97GLxjFwFnAszemQv15FhbRb2DmfGeafXgTQJbRkEKtvpra61JPfbNcRRPMVQsTM3qudF4",
  "key13": "22cLCwpbX1XCeFiWuACAWR4mR3Epk9MGJ9Qy2FqtCHbCvG6UX1Jhj17hESUVNeqtEGgHBgYi4yuG87EmXqzaUp9M",
  "key14": "43xPpd1CEe7cSkzgUUB9YV8CJzR9Mm9ryHZpQRNcXmqoaDcCBwk69pdS4DUiBiXdFem3SgA4jS7GG5W3iyn3Y16W",
  "key15": "Jtd1vhzH4eEgb6gxCHJgmvaH8xXL2ceRenZeEibqYACbtydV11N83FJHdpdhLmJt14d27wAb4E3257rfbHWRmdF",
  "key16": "bfdEbh2tZsYi5DDsWs6yypNSNgcML1oj2oufjFAMEsrA3guGkcN6hUc1jzndPVdc5TyUjcdGJsi3G7m2Nd1BDtB",
  "key17": "4Esx2gEoyYu2XNUEixiB6jyqsKV2QEwtrRixsXNmRufswtswPrj16z6cErdLWCnJRkMtR1MAAAdv8tvXhySZY4kU",
  "key18": "4ds1HYNwSANiDQH1t9VoJEdbLFQwKbb9hHbm3qWaVqJ4Q5FcoEULLex9KBC87ptuDjJ1WLSQjU4xbgatV6PTxu5D",
  "key19": "3ABnFnyUDVRn5rgHN1QqTFhrBoZt2yJLZiGebeeggqHsuZTJDLKFCpc9q3ZLrt2n9DMNesVRuq7GidnT2TvyLvbK",
  "key20": "WT6rDgxsD5Cm2QBVJ6hFJkdyKUMkyPDNT5ibzys95YYoJ7TTPyi46NP4KsGNjgKTu5q1Kn9dGLhFDCsSV4DzTw4",
  "key21": "3Ct7gYoVAvUAPVqSZH5P6pp79WEZXpry9Arv5JVKhnEeFyBtv7it3wA2MzHkPpWAT5tTdsviSTG3hydN2NXQb4wb",
  "key22": "5GChNpdjkb8ridkUgVVF4PJSChn4vx8FG3EDyjjZPvTd7nRaMbfFMFucWJgsiozLT99AhRX15ehvkbntmRH68ge8",
  "key23": "5qQgxjsLWuBW2cjZKL5gMMC8LyYoYxh8CjXR9v6DvrrzyxKoxdNE1DW86j412NC7mR6hKaBs3tNAVez1pVkoqic5",
  "key24": "5aLdyF6zmaB7bKhmkTpA5oZFiCFzYsAxeAwKVctsBt926LWjTvRypQES8SJGMd29f8C9xvfMrWNE86yBXc62tuv8"
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
