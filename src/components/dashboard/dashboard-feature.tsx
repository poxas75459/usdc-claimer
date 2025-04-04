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
    "64Bxge6R8jFZDCcFi63F9eig4SMY1gz23MeHz5ZEUHS9MZTje72p1EhU49jMYEaW46BEgi5Wgunzh5NQZ49VKTrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sEGrSBSyuRRFTNRkQDFvMjCFmg45Ja8v3iZdf9owCosutyeosLjUtJSPDgy6xShW5LvmbP96rPXbRVvkfcT2mr8",
  "key1": "46xuVV2EUWarhED2jyVijqSizYQFALbuSQjdMLVVmZGJTZzjD7Yb7K24Nz4hpyEyndaCYQjM6AXZHdWRf81tFmFC",
  "key2": "5e19r8E39EWVF8bUryd7PmZC2FwK6BvDy3CJ6rnKqJqhUinGMz2jKxpgGWsscLt1koFmvrmGMF9ZPykktKGvPYWX",
  "key3": "5Zo4vDUormf1AhirSMRiRmJz5pXkWLkWXremkR8pnNKxoBdK86Sx7dQ2zD5UtSAHtU8SdtjU8geYpNxCN7pJMJYH",
  "key4": "5zhJSR1tj7ASKVsaRT1BsRhXY9QwosAjxUEUeCjLrZZgYvJiTouGW566Ri7evpStP3WAWF7T3nonoWTvuCwgQCgm",
  "key5": "3LJwmEQLcn5qfpc5eYDLW35HqJVp4CrP6U3Kz6vZWYHLvouZigSCrcdSHzWzHh29cprZFLnVra1wvRz1Hjoou4av",
  "key6": "37cVS5ftDugbLNPvTP6A3g7M5n2HTGja9dyWXX1rbJySjtHtQrczAZ6ih6uTKDeTD9QupsH4TYPkZereerWhCHHr",
  "key7": "2FGBoX5ayKa5wEKg7ZsBE3vfRtTF31jSHXNoZw7zcBUQXb2JLTv9byNN3A29Zrb2r2XrHHU97CdqUfWeXH17THB4",
  "key8": "4czGaAq7xs53U3vk9yNG1hTuFVNeLyUoEpKREcmRvGScq5wy3DcnJLAXsYsZS3Vd1Yd3oe2U5Won3MqpBf9ZVLPz",
  "key9": "4DucQRCnFAF67KqNkydiuRaxC8CwkYxsNzBukwvHHqtVaZbj3zacfmCADDfdbwphWwLCji9N6zzDfB3kNhHsxrQg",
  "key10": "3GbHZwbCAsGptKP35DZeawfpugU3yZVAd6gFkkY2wFdmWjRrmgZ1Pd3snND9Zk7Fd9C7J9GyFexMgRwr5eUtTsaH",
  "key11": "6qAx7RzYFcWY5omNGkoVYHNktt1HyGR9PGMbDfzcFqaaasNnZsJmUYrLjTfi3Q4AVgWgGJ1hSTgtoQmWHyq7nKC",
  "key12": "4MADq21RsMVe5DMQfjhLhX61RBcywve1xDKqsNQFbZsfkw4svN22re5LhcvNXYBQ9Y5HrW87bhs1PK9GqikMR4F7",
  "key13": "4wVEUE8x4EzQGrnV3DejXNkowpWmibKNUhBA2MDyA9BHgQPoDYxcffLQhErG2c7UrvbYLi3S7TcyyeQPECKv6m5t",
  "key14": "5CJ2YCZayfm9vRA3dne18BxD7PjKXKX29U4YjCL9CsS7PgV22jDpNo95AFY9nXjp2kApU2suJ7vqAQKzB3tkyocm",
  "key15": "3dacK5bkhGJWtbqeMVFQgTKxCTmwvw3kBYgN9VvrQZi78frKAWRLEu5UWx5AThPKQCL2Evbr6vJFxXHqyDFt82Dc",
  "key16": "2iGT8SVSCFev1ECkT1RA3irRo9uyPRekAo62BTAo9qNGyMz4EfeCmLQxZXzoBQeR5FJCqLLKriFLDuCXBbDdtqKB",
  "key17": "4Gjh36XkTiGob1StS9czy7bjaHgzAgrnQpKW2gAzi9mCbn1wKEikKyEWpGEWsUQedSiF9bEqsixuA51XJoKE58aY",
  "key18": "3vXuNYQbog4f9QGxejY8EMyP1vNpYw3nhTxB7dkaxJyvfGSSedyWeExuDBCZopqfLreqKmyrwnt8qsKanvCfXdek",
  "key19": "64Jc9ouWKDZBix6dCFbk5ie9ahxCp6WbhWh9LJYuXQ3qxg2N9hvZvx61w1QN1DM3g5PoShM5zEdpCB3DBqz8tGQh",
  "key20": "2nd6gZGThmwkJNK9E6QsLKoq9UuXrt5g9hmdPzvMpp7c4xqaCZri2bgUib9oAeMXXH3vQvY8iUm2yyVNTWUFBRjR",
  "key21": "5xpYhR77ombxZjJpzkkPwHB6oiy8zZgYfhQoN6H4WUzqksqRF5MxMSqNNhkjy83JDUMtG1iv6uLQiQUgyxzXk6i6",
  "key22": "4U9TbWgmyGEr18XURySWcfwVdMhzH9sD5LuRsqCv4L6xuskRpKcVpznGRArLixpWG4JCYjyYB9j6hD3tdqbub94o",
  "key23": "3VUMYgRGt9BfTT38akvr7dW1za954dLQP6toNpPaeakRndKtW11j52kV8LraHocDHVn41xBnx9h1WAmsKCgNWhQB",
  "key24": "2TwjbmAi9ZK2Gi4pshuDJTRAskSKF4yVoY339oYu6qDvgtq294pRrAXNbTFQ4kQtghy9KRsUSkPca71pko4wVEKg",
  "key25": "3Strys55NoK99ap9eum4mBkxWv13ERaeyVj3rfChBK5ma6kFfLWomj83bFE3A3z7VTb8z2J3LeDm4VUVRRnioMvA"
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
