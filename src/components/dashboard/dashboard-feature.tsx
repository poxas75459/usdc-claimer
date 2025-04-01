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
    "4mt3vViXeh2RQ17LS1s26iRDzVApJeMo26vM2e6DyadtqTkNUENdbeqkdA8VWwV76jnPFk4zJJ8BuxUbQ2GhJy77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38f4ckycQ5GzpNZsrWQmvZ75rcWv3aHtwfhVgZc4dBbXkMQ43MDUZ71qJMnWAC2zi3ZLPty5SE24knpeRpqgtJa1",
  "key1": "2YNypwKp8Mfs3vXo4CWpUyAdRfebduCpRBZsufsVRntNuBEkGEKFvgfkjurcpE7eVfYrm8d4YA2PPCX568MLgsu9",
  "key2": "2fcVjXiDoZHk2DKS26nRN3bvEnfQBW9NfCXaYwPVgVugUf62XandWbaXeWS8bwLr1nH5bYwtgBssy1sQ2wfmPSeh",
  "key3": "4kU32QcLgaEbGtNrcj6yRs7DdvucCSCs5zuhC4EeCYaApoe9CofpU7LSm9ZvB7Lc6i5x8jmCxW63pVjNpvwDH2D1",
  "key4": "2g99jZV47aiVaAZSuzrr8jM7WaEieYo16qQS8WtPzRtMuNZVkxjqkZX7vtGLCHZperPEKL6CUp6ebgtxFrZR8YRy",
  "key5": "4DLEatHwmybHzxTx1agefMFykyUg8dgG1SAMFo2JVugWVaHAvMmrTjDdfLydz9c25deBnPtpX6rDj4RpT32GjKMf",
  "key6": "2xaBDEM665Y1bd61oURg9oGuLuRpbkhs4pC13PbhSwyJagRSrAjZ7aYxdvZ5ZRatGdT7WdTiNQWSBgccmN6mGdeK",
  "key7": "7dm4uU1cB3k6LSJPZgPeCqvEG5UavjY9YzwFqxVacDCtx7QL4RegktChPa5VTupEVshBXfNGJgXwR2bRwvh2wti",
  "key8": "3zBcXWm84pXnc2iDL657J4UpWvr1VFv5acrLKTNVZL1jub5WwqMPXicNYe8dQ8Jhu2wRwcjunGYHfazY1GwDTu5M",
  "key9": "5EcKnEx1Eqjzxh2ytrcCSwHhCDuiZBpsiAnkdnHsqfHU1sXDGHSNtfnop3BFdhAPv3MaU13G3c25mUTmLsTDHWAQ",
  "key10": "2Mh7HsTcX1wQzUgFsQYd5jt5Ecnv7j3JJLaGBiwecRsJY5YP8ccYGaHm8tuntFp6cMcWakGFrAjuq8pUYrAsYuNn",
  "key11": "5iLuiZS4GBnu22Kg6RjYUQKdu8DoXpoB1EZmiQV1KjUiCjviErwve6NbU946ct5nQUdWctX9aHB9MqSfjT8M6pjP",
  "key12": "4AqACzMnwpLdFzFxfEFDf8LCAEboQVjS47zf8UfrPCYCKDJAfAqSXZTQRJ15m5BZ5Refo2v5vQcK2V996j2sn9xJ",
  "key13": "4LD4MbDT4JMuWkEK9RLigA6fv2V6Dsbv3TLCa9Z2SCQvM1az6X7jezfz1SDGTsaTnQynaGo7XD5D8QfXfjdpnA1F",
  "key14": "VKscFzEka9EqtbWa9EY4kpEhJrk728daSs93uEqQ4yPSLWevhdK6sSMECANBj3SLHr6TXkreRvnGWuVkSfFvfTY",
  "key15": "4dcBPvYWZYscJrGCqBGnj3UzVck1883v3LxZRxYvPTPvVHNjJKmDJ4YMsNotRVVELdQX5Pu2XuGgnbr1BUCQLpHB",
  "key16": "3ESJL22Wx5f7CaHra6xCZTZgF8j8frmsWgbuNxtSvYPNekNvY3eKbXG87w9YBRdK77LS55cYo3VKpjYCGu9tYjEQ",
  "key17": "jW3mQX13yJgk5hgomnWcpnEaG9wsfz3dJDpTAayznzRdtEJ6g8Mqw4vLKf4ZoT4JoCxqiH1guaGLzBGQdugfJUp",
  "key18": "2SZaS6AjbB4TcB4Zsu7mSftfZkiQWXvqxgmiVH9x5UjsfzCZt8pFZfx35MQQTFB35ge12dSpArSDgJepCKzgyypw",
  "key19": "4i95zTRRda5pG2Jcu969XwaMss2RgCsjb8NzYckqw13YRcY3HpEvAWTkwz4F5qEvD4LyVSBTgi36vbXPCoTjR6jR",
  "key20": "2zyvpgK3y9tVkPUTbuqgBTTJkp5iSUtaTMy8EvheFzTag1L3BMk7X6GfhSBCgwKfwFuAXv6o6PpPJbHSRa73ZArm",
  "key21": "2PRBLB7rTsf5RxdrY4fKLstinBHNqC3u1Eh63t4D2fd1XW2bVK9a6K5GJeLbRorn5Mw4z8McXSzzxt5Y93hgNBcw",
  "key22": "21VV27hmLPx1jsy1AU8Pvk1ykcPJDiEBJeq2MsYnqGh2hstkZYBsfZ8fzJ9RiQ8vFjskULpUBt2FeJX5oJa9Diba",
  "key23": "5HZ9WMaMso4UVPqg8w2H9ZUgHePV7yCy2KXC8HPGUXMSc1bvaV77npVwAgE9q1CsEZDwR4WpP2kQ1a4Nvyoh4UyJ",
  "key24": "2BigYYYH3ec9vKpnJfDzfCLrk2E6HsgPB86PkjArnSonTVjWxMYkoSqW6dE7APboNXvC66JTCHSUjhigiZtECFsB",
  "key25": "C87yX7vMxD1m3c253AjdB28Pqap2BwvvFcfwL8ZMNzyXHzDzNFpPpuLGvPzJ5TJB1Vkc5CJ6j65Qt4NZhsoe9mj",
  "key26": "2rtAWmwCujjuaPf5Y2zTqKhosxohy624G99iZkzs27U1eAPCqSz3WbNgT9ihLG55YH42oKg4ycebnQqCKxE7wtjQ",
  "key27": "5CFtsP1aCbpKKybVoGhA8A3LuLZaud2ZrY6vGHmgU9w8XbezwssivMNkU92y6N39AgVkuBdv5CNeW278ZZNi5kKB",
  "key28": "2DzFs9znGQ5KyREesWAcncof7yHDhWspLN9BiSmLYkF7JUHbQrfknJ7jspcUK2Vb5DJCLoBvSvjP3oWcCeMPYjk3"
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
