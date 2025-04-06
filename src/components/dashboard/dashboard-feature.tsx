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
    "HpK6cmxSHW2Cwaujse5333Fykdf1ybtyNKkrVKfkhkedkRXz22zRrZiYZTbR1wkikk8xJ6cLjtK9B68KdGUW3PT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RKEnu5AKFUJSgcYDseAbXSqHq7u2afyKxE5GZ9rBdTj71tHgqdTeDVe2D8TN5unYQDGVTHXt4V7Wc1g5BgYVLK",
  "key1": "4RXtxxEUCTBmi3m1ii2snj8h1dxCoweyo8gspqQFu9sDTfqpPcqGk2uxafr7kkBo4gmyDgweHC5KkVbZsQFeXmxH",
  "key2": "2HqLFsdoYigxX3qr66tcuedZmKeWcVk1EhVMP181XRknKAqVRoP48GFtTv18w54zevgqMhKW2yb18UT8Wm3pJkz8",
  "key3": "5gARPNFA7ao4dYiU86449LKdPR28Y4BmgNmRZXQt5wN7GF1hY7ZpLVSZ1g3dvzkDuZp27GXUbaQcUKs4SSnvy9qj",
  "key4": "3aCTeGpfBNNM8gaNFX1GUEv9ZxfzatEq38cHQbivNy3tnPpnAAbALZa9d9h45aUtpA9UjHmgCu3AhLs7PnV2ZYyn",
  "key5": "66nh6ffFmf2L8yHV9yrbm8FrWkMkSTKWoe72T6cQKSXetduDQNztV5e3y2A8R4urVXgWdhghkTmuBeq4FE8qFS6P",
  "key6": "4HwsXspFuQhEWyjDvaHC9U8Bb32fJmn5Dgxp37Wnyiq51sTkqbTcoQVUsSeLMkWahzXSRz2BmT8FgnGiJCnsjRp9",
  "key7": "3TN5kFsSbHaSzawrVXh62m8F3LjDCF7gWgg5nrn4psD1xNmZs9qBrFLnNNL9yc7QJtNy3tykL6FmqiTFVVNasQ92",
  "key8": "31iEzJxBEt8LZopjVxTcn7ayMEpwC8bMoRjRi8zp1pER3FZofBo54s2Bkg6DeDzFYM6dJXbDQHQv3jNfjg87M9F1",
  "key9": "4gkUbJL9dKPZGD6DVEbbT8a6nkKXUgN3xiGtp1DtZ8ueeeZTJ5FbJfQ5iDv5RFmPeJ4g2xss2fc988dgqwg3KD8Q",
  "key10": "3qK5buDK4rZBCpHpb9EN3ZArRWRDLv2fS7oub9Q3HmJyjb5YbhEGxXyXP2CCQVWv2eQ7CB8QTeWeexAHWkb9RtY8",
  "key11": "bygSuCYUkChKKBbyw2rHor7spayH7DXYKWXUadq2vHi4K8WhG96xH6CFoQSKsDoRGsRBxAMCfiPVgCo4P2h6uqL",
  "key12": "31qBJvNvvfjC7L7ZzWgTuBmPsuVKASYoXwPBXBmhzp1tXVX8eZv9Rf183bMT3MDMPfXBVeHDXM6Q8q1Aai6bpQ9x",
  "key13": "4zgv9t8xJHP8pYt7EL9KWJUshG6nzGKM41SXcse525hyY7XUVHJX4uqw3dxj3yqiFvnnB5mG7P18gxWtm2a28RnC",
  "key14": "62LNsJYuaVGdz6HGwrAyHmzypTBn327Q9C3WzPajn3ck7T6FvEEMFbaUcuuiEkCyygandCUH1Dhc5kw6YoUE8uds",
  "key15": "2eCe7WCWfDH4nEbdEVJ8h8raa1goiqnxfqfjWCiRZqW8uguiizmq4c3yFWhjRTakwHjCaRQG1d8hvRgqRifWaFJX",
  "key16": "5TvpP5a4K58o1xfkPnHgfPAeNSDQczSa4CS9vkQuuSEREav15sZe4tewJR7At8hdLA3vDEroYgwnWQeJEw6eA2x3",
  "key17": "onuTNDmDVKFF9K99DvGptJJgbREpJHgMKRiGuyguqkkHUKvdCfYokztRfVzTgeqowukJhSSM8gUmTDQMVm8jtd3",
  "key18": "4TaChCzFSwCaEQ9oDH8CXUfKJZCtVXB5Afq7U5fQmX6PurZqmcbpuhUNxLxodGRC1ydWstuv4nPd1affrt5tr7qB",
  "key19": "4Vu4Qy6pvDAhn81NssrkTuEAezMgmLipNqv8CZGajESZimmiYNRBReyi5954gbtyi9ga85GbZwjZjZRd6bTon8wA",
  "key20": "2SZouHcjQX374ef3tgQo96akYtd5Dq9ZXmWgu8izgQymMg4FTXgUTymdW4QdUdUnTUnFA2QGGGbbT7vQ5u32TaNi",
  "key21": "5aM7Ft9E5ZqB4gpvY7zbWP2Bobxq4rPbFCt1F4jvCSccfoB7jS4fwC22XQFaQ9ncYyQWfuU1nqrCLQNC6vx97wjb",
  "key22": "4g9Lxg1u2P71F4YMvSBx8Zb2qdxL5DxKbhdN6aVtj3wFwB3ZJ9Cxg35aqx2uXupAq7W7mprkSUvSmSmRE7YacCGk",
  "key23": "4QXY5WRVFTYpVZtEqvqHYFoNuKarLTp3jnhFny1bj9cQe36xAASsC81C9DRiUutdFQkXFk77as22U4rFVV2AJEs1",
  "key24": "49MMDZJmekGD515NxJYPaBGM5qAYdGdLCKbNx67r5nC8k5MiTuD9L66CWDM6JJUURZXAAj9XoCrMBTsFfLxrocjE",
  "key25": "3iofYKcFBrP98Qp95mCqNtFjoTjKbUA1ZniaFWYvqioGn96bbphXHne8Up3qGgqBaFfvKWHkZH8rW2hz4qtDzmue",
  "key26": "88vY6LdDAsycdwFtYRLGmRSKmQKovnrVdZXmonxthdjssoq44XLy4WKUb9Zu1MwoYoNA91Dgzx9Bt4ikBfXcRQW",
  "key27": "4TcaYZu5AjZL7rqWg6KtM3iqJLcVrgqRQRvchSNaiyG7E6N69cXLKcSriWRBPEH8HjVZoLqJwJJJSo4ovi23qyz5",
  "key28": "2457FxhgCzHs8RxsVW7mP4rw7DiPZLiGz14i4MKNQHwrG9V3Mizd7H3n4G9fYyG6Yt862DSoVC9onW7FHSFDhLFA",
  "key29": "2VZsDW4Spy6tBLS4Yq19cW32sksymBPF25tfRaaTT1CWWg6CNhSmH35YCWwjGjtB3iX1iJHcBaggMf87mZ1RdXf4",
  "key30": "52RerTeH7V4NVQYmib9BH57c2BhHazPMjkEA553MJGxBGHWbe5uott1ygonHUvka6XvfauGHK3zCndJLPUckki3F",
  "key31": "3HvwZsg8uH9RsYsun1Edb12yAhKzck3t62yScZq2zRrSSgq78RFpxrCXx21h6Z8GC7GpcA4qZot7888GHwfQCWnm",
  "key32": "5MbcPkuimfuZE34VJ7yJozCi4SrdQBWk8nj7rCFASWpD4yr5VWAZeg4YoWtbaBfsZyakxnqbU5Nu7Nh9uK4grvb8",
  "key33": "4AE8yjHkKhUzhARpz9oWMTrD954Bjmg5NMWYYmnvfHGgZ6jEwHYHirADwktcJq8MmYhqfxHWsBwK5qZfTYtg5YYg",
  "key34": "29bKbY3t8RNuL6goUMNRpgLMZpgfDUKsQucu5TwHjHnLhoXhG8yeBXGhNzEC4ZHFKqgCRzDh6fL1t6fKu7pjNwRp",
  "key35": "3mLfxHC8hRH297cEu1uSzFRNxjUpuqaDhxedU3xW2jN623wMzUyYfXpBiixeudSemT1bSc9A8otz1M7P4b1afCas",
  "key36": "4sEQvUmsSBid6SYPcwwyHgNQFT3DziN3ENEFQjx9cLh9on8FdgUcdGhWPXiiHBTKSq2M4gVPcSNmAfw6f6hLACfB",
  "key37": "2qHst268enHPQQtVZPwEDuZEimLWEoWPD87qoCQZUZcfd8aP5CS2JQTnPpXhvy75ZhGpH2CZm3fybqkWwtr1gaNx",
  "key38": "4yKAHS3q9DBrfaecFWvcxpXM6Kvmwdm3RHDvmTpYyHNaKVVJTvQe48ALHk5MfKbx4F5sLdxebDqDsrLdSEyC96RY"
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
