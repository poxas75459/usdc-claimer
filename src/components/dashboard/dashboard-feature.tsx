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
    "2fdPje11wp14A4tqzomKPBepp265Kzos4uJgu3C3Zw1Qfpq1NHosii8bMxyNdEVVfrLzBA5dBnzwWfyMeaAzLCtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MLJegaDwEPYAmRQfB1F5jT3oAj5zx2PtK3H4uLfarZpgPdw8MXvQKzRw7H37ScCXGNgxjA5eBzZh9ZwgHCSDZiw",
  "key1": "3zHcNFmQmYWdvntGgfo3Vo3ebtzHYEq3BzVTqZgfQ1ePvNiQF3Uv4W6CCrXntQAFn4uWvvg6jhuJKFC5xEj5h4da",
  "key2": "5UcnToGHFnYHXh4z1RdqXnwUaFE3YfL379fnvNyb4zqxHF8YfvR2saiuL8UY4z2Zr3yTgdrrHjbPcUXXcw4YPTPi",
  "key3": "3oFkekwEyJnndng7GPk55a3LvjHkov9wcraQhE9H7fnbR6q7768MbCshnsakQEXUJBcQEY8VfDAwSX8jJUFWyLsZ",
  "key4": "51hUSSG33n9Zi1TEtBj1RBBc9TyDihn8HXQqTN65YiNUXz3RSHcviBTk1gyUDgb6a6xVUe46mLRt3t7Zo4ADj1kG",
  "key5": "crwxncugLDhYmiYiKoVf2eFW28UeEec7qu69e5ryfqC6KY8Ez3gCxCL84rAewiAb8EgWmWHrU6iFXzUwhZW9BSL",
  "key6": "3BKMEcnvrVV7Md7WMZ2geEPRH9SyQfP5YWhUiH9xavWtecUmtb3SqYpTuianrtQMFYHEQmufzhbnGCCNBnQHsZXy",
  "key7": "4H1H1SFm9tdVnqH2NzbX6idohc1UMio2crA9omXxKmMHXBT4VThLF9w38PHc7cZkpom3tfpWp316uzRZKDLtDcLi",
  "key8": "2uGwPKdhMAZCniQTWNZY2G5mE3okUz9nHZnkjodXNz5ccvnvfP73cEWgtjmPpMxTMWQJkMCUK5XE44p6r2DGzAh2",
  "key9": "5F1vCNhAfbSNPvdjDeQ6cZ35GyQL4w1BTfKgzbVBfhXFj6Yg2rBYQyk2jjxC12WgRWTMxdenypwf8DxjQqh72kg9",
  "key10": "tgKM93fT325zzswkWMFJVcgjywG8QGTphKg1hDDgQqGXUoSxToB3BwZFg72jmmaGoEqgTMLH2M6CWLxcj5oNgbg",
  "key11": "3k3mkyNL9wKVe5rKNsETUAiwFyvLvzAjdNBsrD19d26CReLtWWDava9bKAQWcVmWHQsH7iTCTUcCJmze8DoicLDS",
  "key12": "3LtQEdbX1aa1dat3ChVJdPHMZiV7V2nDufKPhtTPfX9R5g2YqRQq2RUvXSwuCQR3BDodKRRYBvhJhJHGwuyj5sqP",
  "key13": "2myvKu7q5fzT83sZzQMiKbeT3hYzxSs1RD8L5inBeW5Y92Rnnyi4W4MjNvTKSZSAjqDxwUGNXq2pKQuRw71GzaUA",
  "key14": "2hC5LtciQXPfkXE4qBBHwjHKKSns4wayf9VHbLdRe16MAJMQPRzxU3f6Eee3EunxFCoAYGSBmXcKLQR8os9ARB5n",
  "key15": "4XXMAMXZ3YxVEXC8eYj6VQcv82UXcoiXUz9SooeRtPzt4Bmv8vsbPDYUDXMFEXjzRsH6jwC7nURUxyiRJEo2geAC",
  "key16": "3WJ8zvRpZYwQURmZszWEXBQAkfyAAgmaLmQxUc326MsnVJAWJjTP6bFMBbjxQwGRQCBae3Ha8UusVhpLMBykANWu",
  "key17": "2A2zMsMEzvgXhmQxER16f2jSqwft2LKGZK6GcX91pS3Ea2ydggDuDMTGzJY9cSixEinHbY9cv4mRmtKMWV2jb4iU",
  "key18": "3QAya1Q4NCmfE6Wk5kyea3b96t1qUZiEhiAaEousa1kGiv3UAVA7UYD4ua4Q45ohhXXUFpdHsmxboVVq5prMtkah",
  "key19": "RhsEfCuwSY3mei3aGLGDne5oxhsU78Y2ovCBkMZxkNd4wJBBs5RdBMUQZ1uzQ3mcHqfXaweKMtZHW7orAScAYRM",
  "key20": "58AgkPW4FSV9yYZ4YXDsVLrt1GjTRBc8j5begM5qoRAwbSvXw1GheoHffGfUt3fHS42pUv99G7ruCVqHft8VGups",
  "key21": "5r6eCFE5yvugKzt2KT6Qbqx4u9XQL6cuPX1hg6wwXCe4eAfnaudpLnmgJAUPxJhNxKYAC8GtrhMpgxnCvFSDELUS",
  "key22": "mr7847RFt9ZqJCQN3GZtcm8DSWvNxDXTjASWH8jnKNbrb2cRaamXoQDnZfa72HBqJyeRyJaP8U2j3TCZJCcNe4Y",
  "key23": "5Aygno9ua9zuYSaum4TeDnUFr99fDNqvG6id8qEYNTD4nbLXvTk6qhdtfNSCJyLQab4SfKGG2uSdyJqY8rSpGD89",
  "key24": "eFHGEXC62chszdP98awjK1tTAYABQ4ZigJHst7rNoHYnBnniBGhWzyNsktD2Xsfr3LTq284GdhR8vmAqTYe3ggp",
  "key25": "2kauuNPAPxZv4zH48tJ2RdT4rLd8oS6MQdehSgWcxnp41wyaXPs82oyquRzGxvDyjpyktqgwbZmKC7sMTNcmMyKS",
  "key26": "4T6PtmMMTykutX6YkNkYfQ72nv9NKXoA7rmwxfunie5kkzWvM3McgkqtoVgCtuuFq1jJq5Cm4PiPjtCgQ6iTFvZv",
  "key27": "542UoU2XeRLdT5YSMforCdmoV9mrHpmkY6Gsky8UbMBpsoKxUW9RzBE2Xoad6YPJUB29qqDpEJcfLDN1CmbD9BEn",
  "key28": "4VenV93EnQ99y47JygLtChDsvas3j2wEr7fj3hKLwcttKx218Wumic3D7B7seGrVd2VXEaP3fkL81m3zhnmC1uNJ",
  "key29": "4AL3afj9tCc3UH8UrzG7TcmKYWmytY5U6ZgtfQ4F7cNHYGGtPJMLVcCdZBAieidFVJwn5YysBkJoq84kCVhb5gVd"
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
