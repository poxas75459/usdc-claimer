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
    "4cg3xnUW4NTNo92q9x3LJVvRpejf9QWLeG8NezeV3gErXPatArQ6EYzQU1LLPiy4J8wQHvrHhgeQEfNi5qu1yxuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fAientMeoiYMGu1yH43SHwpk8oER4iNZZvGkjFiKPfka3z9t55Ey62cM18g5pSH5Ra35397chrhQUYDpWjPNckr",
  "key1": "87SMYgDBM2TuDVg5xuB9FMY24BsRiaLn7nRNJYbZkG5x9qnFGZjxQr9iKBBV1dSaJMynQCHao1LSaT5PwNXqeED",
  "key2": "48fpzxBNRCvY3F3jcxGDmU5n5zLfG3N24Uj9TKr3bsbaxJyy7xfJkdWMWPgqW6ntpkM6kkya7ejJGKNBWVSGC6FE",
  "key3": "A5kWfJt4tnyLRpF5hQyLWRndmUdwxFr8uRtyLxdnHP9DtpWeMysQtnJiyBbBDszgqRUpXEtoDsnkA37AJY7Csdy",
  "key4": "5YppvnPMnbm9Du4NUr3F1SxA1cVqfQ18GrZD3qWXmTXKx6gwi5m7isWQcYzB98fHSz6EhhZuqJZnPsZoLUjuLgnb",
  "key5": "JRANsSFhKiUmd8mJmUUYTtMStdiCkZ52WGjrwVucjz9ATk7cFRJuGHHuSrwovJPiYXjsshgETQXDWTXGEvzhwKF",
  "key6": "2GmgjMuEWHWR7gYis6d5jSRkM9dDAB5BjLXgp5QhKmtNcFvsZ28rsQfEdxaxHEYyvfBtVj3eJUYZdQkQFMYo9XMx",
  "key7": "3nooUP3o99jSp4S4FrxGLn66Fmvc5KFHxDC5yBHdHmj1xzhT9FAZHEDL3mC56zfnGZnhimogHnwiUuo1SdqJuePn",
  "key8": "3A8fMuULJV5cqvKTWdHUjkdRSFrgTHqCzA9fDfQiw93YuCFKrDt75hcW6MzLftdeGmGS9ESMCaXj2rAaCvGjTjxi",
  "key9": "5dvZYYo74gErxYkCNMv1FTHjiARPX4PbMKJHmZjcneFZyn7PpoECjkWAND5C5uabpU3AwVTp9dfEDtbyyuNApDoG",
  "key10": "f8negR9QDjKMXwgB4DPsYrrLab7Jgyb3WpbkQQi2zbeYXkGsyfMJrUvt9zfJ6GC8LmA4QGnij3WXebsqnPCjbHD",
  "key11": "2XQPqLsGGZoWZ58pB5sLt4zqwZhQzN9ZuTpHdzqgL4YBZK82V6R1XCFgunfLv6RvVrix1z3FAD22hW8MxoPARJnP",
  "key12": "3BaY8jzxupqWfnZ4uMLbDZ7Vb4a9TRNa8tLfKvSa8ksHazxskHC1zh5EHtS6MtEchP9VkZ8xhiZbVqDrdp1PHZaz",
  "key13": "2uimqLozt86eEXwzhaK4Buypfw7DgdvX7JLCDrrvnKJLWoixBHVK3H9U4U4DjBaZmDDroRCzacFMJfN8EgBMXk6x",
  "key14": "45opRJWwCcYgbkZW9fReyDYZiNCG7VzkpWQiSdnrAvwaPRJcPRq2Bo5QHmrUKn9h2NbVDU1q4ekL5siT1TDKLv7e",
  "key15": "2bSynad3qwzajvDnJ5KcyfZZD4UpsRWfE5S48agwB65dhyg3RhZxWVfXzMuDS6vtjiReWUoNyJYngA6WHHba5Enj",
  "key16": "3G8S1823KKMSyqHAnVY2ZZ5aNkVNnymLXssef8vR6EKASoxSQ42nZBhCj2828oCKrerL9AWwzqw4saEMHz4xK5py",
  "key17": "5mWgmyRUq5h8e6MMa1oDVhE8JqohzZ2Yo6K3mFDxqRsjo2bH4fhgKyMq4ZPsk7oSzA7UhgzbJQ9v7k1dhLyxjXkw",
  "key18": "5y92m5JkVRdzHqN7WMacxKJjm2Dep5T8hu2JeMVte3djQGQ5J6vKerCdevVP8AxZDuDCTdRFxGoVAL5rTiUZVfbS",
  "key19": "4q7hR3J51sV2Bk2VYyDV8HWWh3dwRPYwcfXubP44N8KVgTU9Kib2S1YZBi77AUvR1uPSvRfLhTLBXex3afcZeM4r",
  "key20": "4bfzqZFbYDSvTdNdoQe7QRwfrKaKR4J4bZFiaUzLUuA4tSjwcA9TMgRn94BEMkT2gmk6aV3APKj6B1zgkaUi2Rh",
  "key21": "5CKkYmGxeh1Xjioky3DuDobzMjkJqKtrJ912VhzwmKX8kZwotCQdteWGis5fgWC8UFGXj18qf6uUsyZdfNcTcgfi",
  "key22": "4SY64T7HeUqrcfA4sSty6JZbumBtbkDVR8CchZtbAqX6XsJynsP7STb1kZMB44dLnwnxGhcwUYQa3Et2DqQ5VwTy",
  "key23": "3vCAnu5kr22LWdJNn2D35EjG7mgEHqFzFKpxFCKC1UXtNYZDzZGBBiVZtbH5QbcAa4MX9ddejG7AVjEx5u5PYNCG",
  "key24": "GkeiSkkd1LstJ8dKoA6732zCvo6ZK7jn5CSvE2NW83J8RrMZBZJjbPkDrJdoYTBW3cKnDWYU4vptjEb1L1eYwd3",
  "key25": "3EzxVgEQh1J1emmCtmNyS4p31rNj8pFZjzuPwFftsorPi9fow2ggPxYxHQQrNrNwmvufei2yBeNLBoRALqdVsWQn",
  "key26": "3LE3Sdi5kgL4K9nFwx1X1AgbpNTGg2WWX46GeesFkwnnxGvmmqza9suKMYKwK4vvLUWkNK54fveX5kC5SiBdHAro"
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
