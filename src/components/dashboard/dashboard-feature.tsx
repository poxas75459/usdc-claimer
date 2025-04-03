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
    "3BvAz2zer15s2rgPbRxMLfNm3wdSbaE8W8x7RMZAS7EAKjfdAB8NppyJ2HnM9UALfHWmRWayV8eUNFmfbUyARP5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yFMoJTq4Cq53vg14D6henm1121urUyoMEuSjUeaW8NXj5zZa55Uy35DqEfHigcjiu2fPqAtS423NtqkgrTvTFAK",
  "key1": "2RA7SpmTXhe1NCjtJQJrnCcDog1RQDn3KxPcZNFgEyuGWQ9sjf4A58wqJbt6nccyD4947Ju9enmGNVhMFHZwLjwA",
  "key2": "3tCQtHUX28Z3G7uD5YtNKkszokhS8JjkE54bd7UypFJWyBmiqNdFxUttKjDVbzKhp9ZD4pZBKzmRbjSJrJyuAE5u",
  "key3": "2hdCKZwB9xuui8KVrsENGHJ2JpK256An9P2vSvMnivi77EHxMnugxhgWP9iiVjB2SHybefcLqXXzv6AV7hW2RuZd",
  "key4": "2PiJqc6E6gf1T9vCRsh4TkhmpR9H1Zcqdk8XP5P2TmRFiX6FLPebSp55RKFBe7vdLba1L3frStFFUeoyzz47DtVh",
  "key5": "3f9jq6rdFY1ZUzYr8WefFpGH3mvKN69TofwFJuVRx1xkezXyCFJ7JoHhUieasTmnb1MecpxTNjJXz8i7bpUpfJFV",
  "key6": "uUpGkPwDc3RoAs5wfTUbwC6R2ey8Hir1JiiLEhgiesPYyyee9Wr4CFAw3yt8Ut65j27nfaSUbkz4vxJK6X4LBAF",
  "key7": "37E3kQAvAdCA46hJko8SnMcNd1ovPVhwGengozUCLRSoqcAzQ8fkU8wL9vCcRmTjGu4xNVNBgQVbt1ez2aVY9ZMs",
  "key8": "64og3TAP1gE464WuWuhMuRxL5zWRf4jeyVrejyWSaCEeUvUG8uU5dKNurH93RyPGfCGX3vrVJoJzsRV9GNuf4LzN",
  "key9": "2HZkFMBSHee43y435yf7YAfmJU5tvveEecFpdWAra3ybRQuUrdanX9h3P2Z4kmJuVVzG3DHcjoehSxWxgipUJ5Ju",
  "key10": "232K8imY113Z4SzKDc4ZFfdq8sdSmMkd1QPYFw4mZqNTwffr1Z8ndVgPtC8FjMUuy4GXDVukwYHi6mR5tJSFR55C",
  "key11": "2HiqYeMkq7eWVv5C7D5KAcpccWxxk5TLrF1qhB5QMwJjdV1vz1DK7GJPectLWYv9FSXZHBhceu5VChxHXm41UShG",
  "key12": "39xmNKcCyxDMS6Wbd8kyi8KRQt1nPwPyHvCdsywQNJYzs7nvDTMkx3v4nS9cgmwQv8MSKV4TpZxaSzkvD67eosdK",
  "key13": "4QgvqLY4RxKPPLmG5tGFJWPvxsnQjfNhm8xHTdRMvebuyADt3yFfvQSmy59aPPjBXZTAAoG1qMApDXnnf93ndeuJ",
  "key14": "4b6CZ9hxvvbLu5Fvdm8TcVoJ1NudjJEGwJgJ73xaD2pRCYM3jWRRu3uNdi2rR6BtmGaY46NLE3kVGXYSJ2owhFUQ",
  "key15": "NmH25ZqdYssVzfqrRgRcdD42Ui3B8BjkmQD4wntTRmLYowQAivmHUhHPdHSvs7htCd1rWHvdzneyEZfdd8z2mLi",
  "key16": "5YmLf2cGREiSQ1uv8JgXry1XVC37hrr7AaXvVkYUbpsTh3NGQHSENV1eJ5dcb5pDSUpsHSXsq7u2TUYrS6TWmwV8",
  "key17": "2WLzf6iZZQhdA2gU89HVYuR5AjpnAhy7W3pnCCfgkzHmU73AZ8JhzN3qq61x2Diwk66yWtPqG5rwmLwceXPmNCjM",
  "key18": "4MvgNzjpAkVYs6gSeEht2xyaJGbvNTo8QVbRZg9WNamif97MrbM3ugd1b1zxPro6mhjGKPpaWApYRCJF1twtMXTe",
  "key19": "3q6HAQMRwEzsHGRvWaT6kavtTf2uyvnFHq5r2iNFsKxGJbRGdKV5Aa33JFfqYGegbBpjBCCBA5b5qbeR7rxeFTHd",
  "key20": "2y1hxKdCFk9vEdZLzFegeChehPsZKyBmYfAbju24WKSxWsph36vNtofozQXHpdLJwGCDFQVNdvhhkuKjaXdQFbi4",
  "key21": "3XQbMH9uhpJKcH62bDvsEjnJgmEZcyawkDWqYmz6JW7BJso5rq4GV35S49gMR9cbCQ8iz5oMk8TYAY2Vkesa9adx",
  "key22": "36bqm3ocyaqZGZYNpM5CykAuG7k2A97iq5xAA36BTaS1HNUGf4TFCWciPjMRKocmzhjEcnAYwqbgQAD2XNzSCgmE",
  "key23": "T9LyGwcN81X3YotUtP2sjXMFwNsAmLqA69B52rL6MWRrUADPLgi8dRJ1XJCpDBdzq5xdA2c3uuYqSBr19PDiQoi",
  "key24": "25yTPH2qjYQkKXQzCmacVkKuyrMkjckveKkiix24te8YgcdHtcWt7yqicZJ3YWX6fWHQDzDyKGB4VtuutvbxTeZH",
  "key25": "4w5PKfD5EVfG4TKTaqMWH1A41nA7BB3k4JsHxr391CAunbhXQvLSGgE39Qkz5mhgPi67LjiU1fMiMPBoUqjZcPTL",
  "key26": "Biffjhm6rYjneXTppXyd3W62Cw47gJNz6jPLSGKtmAdKncvffnUSMabThpnSntPgHTGAACMqMpKNBMYiMSqDrY3",
  "key27": "RZVuu1UKpydAgTjpsPLLwv5tkg558tjnmGaN26UYGyxJ1BxAdCXo5U3SmyARt6K2dqUqRsWnyNYW4JxxHBMeetQ",
  "key28": "4TRjJhqLrJYuyG2zq1JY5jSn2s8CPY55guzLkVmDeUkKbaZrNiHFkZ6ByYYsbqS9ADqv628vyQJzWMTjNyuqC773"
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
