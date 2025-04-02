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
    "5H2TH4EUBgVXXMPgZ9js1vGCuG3qoS3xApUXyf3sA3Be7wqPC6ApemFQePfEacsozwfVrxzmRJgU6TdPzzWECcEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tW7dAUVxDUkz8XkQB46KSqva83sHbjKcFvNNyGzqEYBFDcSd22HFKsjjYSnV19fga5L16fn1CqiC3jB3Fb523pM",
  "key1": "3J9cvPKxEu4yh7LZYj71CpiHTABuL8GJDM34qWoLfWoQ6AUJHtZYP5ULotzZ5npABmHhgj2JgWodAxN23pbiskZ6",
  "key2": "3HWJDBC8yLdqN4DP6aHoqxMr954M8wiQwLjPmVyEZP2w3NeuDopTW8mdZkKMJTRfZL6Sa8S2wDHa5JV9YdqNo2Vx",
  "key3": "5KScRFsVpKZHrsXGMAfcsdBi6Xe16yMEwYP8BnV5f4FyQZATH1vWJaE865KWrC9YLUJPRnmEqidd8F8XFDMaL8xH",
  "key4": "49miEGMVqT1eNrA1RtExfQ42DWnMAASyi9AB7NLonwqTWvGqnedbnhXoc5cbXmXp5vhdTajuPcSpcuBKQdk8TUuA",
  "key5": "2TsJJ4A3mxX7uinghHX5EydfGetm5qgqpBJsryPTn7vVorfBRuX1xeLY5mDRgiXUQLp6q7dSTkDB93DyWRTLZPUa",
  "key6": "4DLpseMNMFMEincXwryhC95xEJYd1wjVbRa7i9QuVieRnK5rNjvAxzMja2cqv2gtoYhA5tV9bPhnCws8PfChKdCh",
  "key7": "3myxjG1Q8j3ZEMLBF5zVc6ADLU9nfG8yk3Sy61BktbNFUYBY55RudMjEn9HNmUVPgnZGBBfyVuq6wj2uT6hfVxat",
  "key8": "21LTVAczJCdcKrwBQ4jurYgJP84V5rk5xHzz1Ju3qTXDvDiGMdNZNUmPx5hqUQUQVcc3QjAqwdhs28HGYfPGe9iP",
  "key9": "46tUhmAxRWfcnAaiUpDmM3Nk7pNKcGMfQXbxutCUnBvZHhYtDjZ1we1B2KbibNe8GD9wasUBm3DzcaQztiP4SBQi",
  "key10": "dAEeHPf112tL8x4rYaQVwzbXKbZCjrvRCwTPcboaenM9qdSYHHQkGYuSx9jW3NdWJApzJnkddf59mLoV2jnBTNP",
  "key11": "5SX5CNyo1TjT6VEdJRHmW7v13Qk1yyXJ8aU852MPbXx4Bk9JPZ2Y1wC63qQ3N7EPNbCh41WamW9TvmxxTujYRCcX",
  "key12": "35oXv2cgFYs2gFv7Wmetnz6rp6cqaQ2YqgVB7ifWCZZfx8Bmt7Ca53huuXsnmJ39KY6UevKnFQy8dtxCoK62eRr1",
  "key13": "3fQcCbuKgaWic85RYmcSFz8p7MtV2YbehqGSVBxtii22PyymfaJZhNYu6tLvjfC6SQTfaSDvgXraBDLHUoUBLijx",
  "key14": "4rrNAjPb7GoCavdL4t9imWp1PXVZwG1C9ovDHEbydZKuxArsEKEvgoMeMASYvupmLb7HBNpSEikaUPT3twKVny3X",
  "key15": "5ZPAxZc1ACmTHhMj3ZpqeHCRYw8m8hJRneBxJDQ3NM6TfgqWFKXKjWUc6xg1WYK6z4Gu3pD3YXGd7vhKXXXZhcV4",
  "key16": "5gNGcXT2tq435s8LkpADefU3bwrmYY9cc8QYa3up7SEPDkK4nPH8o7iu18hbTjAQnGwwshLYJoJ5Yhr13agvgFA1",
  "key17": "7btkZkeqqWSJRb6yrV5Et3bNy2mwgPAenk64Z6ZKGEa5nHPAvV3FLh5hTjGbsYgZSGCLQ7Xj6jMWT99TdfM78Ex",
  "key18": "5dwxynvFUyiJavaraoKixPrjivYHUHjXRdsMRYDyXEQTyhjMmBTiaGWJAkCcxmrsbV2nhhVGKxDP1a7n9kV1ynHm",
  "key19": "7VTMTZhx6U8uehhJ2dj7kuYXvFatg7dVgDgCsVCyPy1aNGjg56VhaS6pJgKtWiRJPq8Ngx6PHpSBYkRrXFQ69ny",
  "key20": "2wPLe8eSYB8uqkg9TEFhxEE8jQVGdMzCF1K1pD3DcHJHAK72zuo66wM6LJP32foLZSiTho6exnRKEHZRQ9paS6Mf",
  "key21": "22ZGSDQANYwJZrrFEwSJ6csNPAjGihn3PQqZ9iZrsVNNyigkEH1rrGkTsvixtMX2Fq2dawxHc9kA8ZGbHAz47i73",
  "key22": "4SB6pkZNAhtvPBHSsEUPnWyJMLyUqNUwSuABJLVS8vWXe2X3RpzXSmLs7oCPypzjD5TLb9B9Z1Yhnxv21jy1ivQ9",
  "key23": "2Z2pLgbDEZ3wVWWW5qrd9ZWcagp7SjCeaaGGNWEahBXs8uowVBaJCGfjbXiBRp3ZnguArMfs3H8PycobRELhWQWD",
  "key24": "5a3pUt1LqeRj7tbpQn4TBxtxUda9fn3FE8mFEvgBP54euZYZW45fkk3W4bLD1MfDiB9LjhHn6Zpjtu9DATve1zRd"
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
