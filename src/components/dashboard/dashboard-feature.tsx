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
    "34hGqaVjtYWtHD1qY6HokezQhAWNgXJywZyGTMyvpxwUhhLTKTPakDNpcEd3EeSmMQM51vA9HGyDs9oz65qqfhtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yyfw5xioBD6qANbtQn9sS2dMXGeUqCU3kLqqFwsKJcwZCpThon7h4erMictCFVaRPZ1692iRJmc8Ke1ccJur2ms",
  "key1": "sNkuhgzMEfdbRtrbUrDhZ8ELemX9N7Aqdvfdg6aC2MMJ2rJktzEKePaTz7hdrDynE6P7bKGZA72wZ8HA57PmdFC",
  "key2": "2sPcPBDaM9cAHDf86cxPzcJGrjKcEgAk8vyeex2k8Y3QtMXtRtmnHcrgAWwhH7b3pBPHKH1XchwuDSt4XBVGBWGD",
  "key3": "5aNjLPf8NxUcxA9ZxXnHUBHPaJ2seR6PeA44YWmmqE7xggoDGi1zr1SjKC5jyDsMsAsBizdwHqUS3V6MTENyHkbE",
  "key4": "5j2adkGoz1cKUcKTWptiFqLK497Y5wXnCKFWnxknbKqo9AxH5ucTXgHjgapbjkb2ipY2B99AuMfdZsBr4djTPsve",
  "key5": "4TXrq6W5gJB2Br9FdK9sQ3AdUdr3SHdotgyodLgztZdXmjkuC91hYq6BaxjuC5JbCLzyDJQuobJzLBeVXhHjirhz",
  "key6": "rrBQ5xsvupXonfkb6Nwt7vnwG9FtZVY67Wtk7CM23MPMfiYsxgrZd7Cir3z65EaCMvaLZ8zovtguT619vigKeur",
  "key7": "FYkBN1Axvrv3M5EuxC4ZYCa3qHnRyqKabYSDYN3SKhMe2uPTizuguWCFgApKEs6L6roYtnY5cC7oPZaJxYCxNaU",
  "key8": "48F7mCAni5UDUyXYBNFLZauZrQcJBNCKE6T9XqEtKGDgGDGmJKQCMXmZnyHsEsoq1j2EtrfJ5eqaERLkGzfP3YCp",
  "key9": "cWv81JJGjZ2Aj6hxs8xcLZRpeagQiQV36vrCyKzUzgTPhWCZypTPQe9SeZoYgo4FDE8RZfLW5A9mTn5LzKiwKMV",
  "key10": "3HgJ9TCQsNaBJ5cet1MktW6CGRFkLkLjagaWmdVM3ooVxzNDocgzStb2xCUn4LtYGRzF3xLjpgbcxDCnJMnFxhEp",
  "key11": "5ZtgBdNTFV2AHkdqPzCnZwWy9UsuahKM7JhEajcANR8Y7YTK3x7ZChjxzq1ptQ5nPcUD4BM6d7EK9QfzcyQZqc66",
  "key12": "3WVxz619ZkhZaTLhQWXiyKthB3vVhBd286mww2cCGiqRzzKWhLVhQUSLSqdZFyhtqpc3hvQdsYR86stHArdQtBDM",
  "key13": "5B2Ltr2GNPBAq6MdbRjc36ZU8rNuV5o4Zzxgqvrkry3FYsYtYdhLF3oyH6W8XAmLWCP5mS6UvbUYHbcfFdDVz1ZJ",
  "key14": "3m5HSqURhvzu42XRKiA6brky1iPqJwZDtECzBjHahXRuBma9D58evJ9tzYP9QaKymbeodWGZapezSoQkUPZSKTA8",
  "key15": "4iWrYwLneBjAkKeAPvgX6bg8FGFqHaQ5oy7TAN2fkL2mRM7E1vnPGkjuaNBnmQDsknzyHCeZqhsFjNbs5GemmUE3",
  "key16": "5TVgZv76XQHrM6yxqcTb8qiDkW6fVf3m8dAQw36xofz6R2SWPPGtwKwMwjWiWZcRAU9UqAGkrYc8z2pM6nkT9cbC",
  "key17": "3JrjYvFrGHs4mR7oPtFkVzGWJPoYdAi9UDoX8KS6mFcUFuqyjSL1a2LoSYEqxPvP5B2fxbDQp9UNCwM3dQnoxQrz",
  "key18": "5GJbbJtVFg8kLm5zVneWvUX58PkkAmRJwKqXnn1fRixd5EiPNSqCTQAE6jBUk2Ncny3GCUAHSqsJXrk5o1cfC7tU",
  "key19": "tD48wxs5TXAQLwWYw8ijAAbrVHQ6QUQnfKNm3EkhrZmYww6eWoTHaQnZWHT2gR3Tw9DDR2ePTPco8F1QEJEehKP",
  "key20": "3uWhHkfNFQ9LT3KXyo4XxP7vCkLWgHoixTEfxH61rQ5r5SosPaqp1RazpXyNNruwNTYMA9FwaF7PiW5JYjdfnzSA",
  "key21": "2BQXhLguX4dum3R1kqS9LRttqmyrkki8KY2YGBW27TDBW5trFXoqzVg7FqSrT4e6N5SsfdzUrbsPkUuhhu3T6RP2",
  "key22": "2pL3wxmKUfjdBWgFVosFbnfjktQAJuDh6CUaZoyPytjYE5tpMiypyNEUiMZTSNadxBEXBvGG9QS3JbKd6AwNkw79",
  "key23": "3vmjH9VkN9pSX4omUC6YVk2dXg8GwDQZtRPtg3fLWMWa1eWPmN7jHWA12yTeFo528uc5YTWVjwkQpBL69BmCg6mm",
  "key24": "5X2KWQtuUEKVyt5hFnJXmBU7x8nLwd7hcmeLyVNVcbX2r8nNPJJfp7na1ohwQhZ448wiTwjkbAiQrhAfd33xPAZe",
  "key25": "66Ze8uohumAdbcQTfuX4gEo3Ty4f9h89y4mXPBwEXHLT7xHNX8Am62HGtqZ2N5T82xCtXKiu8DLRXwoP68cynJvo",
  "key26": "5aq3KKrCAeeCSsxe6Vr8VFU6tW2MyYeEGLsH5HTatA9aFc6FtPrsyzxn3c72yuyBS9EQX68fhfLtkBJCo3xoLVkz",
  "key27": "ZNijzzyAAwxt8Y14mNxJszGkvsbdkQdFAQgL3hHTYQWfzaSKLge3pWxGqE93ychB2og8aa7sR7PwNfmBkcTfvbe",
  "key28": "3gYxPRmXZhsb5sUy7nYhz5wKkb1XW4MMYAqwxeXqcuxV3aYEkZjv33E6eigyLmbDD3UTTrqL4oj7BHnhHFBobfS8",
  "key29": "3QhxqHmBw5RbyKqXjuBhguUVBpvPYbWFS9PGb3YGMKko8fK389ZQxpmgVcEFrkV2MeVSDcKtyjyGmmBKgTZCZtBz",
  "key30": "5MPJQX8zT5YuJNCV8svXN2ajPM22KiZmGLrZbiQkbviUQWDxYyHTgCnCrCxU2KKNvbo4mhJe2b1CFguX3qPbeBV8",
  "key31": "3RwA8CXRmTXbXtngoezbjTF3RzocyMaVyYWzbn8ddLDr4JpY7Bd4S56inuxPLzd64PVqYBKKo5JzNACz74KF8gwx",
  "key32": "51mcoY7ARxWdFrdwTE4QH32yMFNpb2SGxpsKfphtKQHaWy9gXcjVvdRQ7hw1AXR3sh2xtMs9MxoYHCJqeH6CryAC",
  "key33": "mjCYFp46bAH56sDhEHAip4KUBmUr4jLXLyiZanFzonTDgY8bDGoFN2uqqLGCpVzQNXTZvtx4QQKAKjYsQ9zY5qb"
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
