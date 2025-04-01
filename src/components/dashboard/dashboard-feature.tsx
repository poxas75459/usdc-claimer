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
    "kccy6QPbALgwCBg3AHFetriHit83rBk3BzQkVtPAgQhWDm1P9H3gauXjmbNK11sHPSsfbS7Qmf6yq9B8RpJTWrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6Wcqme1hM8c8AU12eJ3HEfsADSgn3AX1mv3g3jeSQMUwUrCEXAqkvCQGrUkBN7aZ5X1YxHBTZAwwq66kWQwRvf",
  "key1": "3iTCfD89nrMyTWGarLY7YRFPxRiQoTkR7oVVZxD4RnowUS3axVf1uExq8ukzJrVKRGvcB3GmCT2oyP4JpUibEazL",
  "key2": "3GCb42pAghXYeu183TrYe7zm72YbXUK7Aju7mqLd7RxrPMhhWCeP9xpXcfm4EFPpZKj6NWsNufq5QWWoiZa2QWZZ",
  "key3": "mMRkGbqcju64Sk6S1RSxTwPq36g4MeaRjP3PSo6u4jrSXSKZn8pbNqczgGQZEAKVJjKyVHzg6fmuztMyNsVS8KQ",
  "key4": "2bdkstGAmUgWfgu5dbfCtK7nqWojYB9geovXyToh5tbzAA5HSmEwZDJK9SDcQPbJ2u5j1p5LG3iynnXGtfeL1KT5",
  "key5": "rve34HQKGc1BheWHjKJ4Lf14n3ytYmAQxihuwGxEJhdVb9r1hB2C3WGeHRamuQCjAtVk9C6fWx7pwNtCpT76iZ4",
  "key6": "2YGMcNwU5iWG6AcDRPMYusEZpNdBMyn4E7odgh9mSR7ZnV55FAotYswFCfziE8wpQRtaYTJ6Q3SX5BxT6irxSrEJ",
  "key7": "2go1VF11akb5KZdLUqfbfg2qLDnKacMVBpPGbgeLyhSUbStAZXvCwSZmpzAoguy6wi2aDLbMN8syj5YywgzdaXPv",
  "key8": "5xbSkyiNqHGKSfLrhU3wQ6uDf6DUv2MNxRARBKikDYT77h7gRUrJ2YP4WRfbuYcjH2kdnGBXq8FR3xvanP6vxoJZ",
  "key9": "JDdb1wAdNqy2mLTfFgLUqozqx1PpWfV4Yc9TEkk7P6LDnhPZVrSvVYKbfM5ChxTJpJcLgpxb1hdRygCjer8hf4M",
  "key10": "5cj18kDvs5Lq53SVqDujd1dQanU7qVt9KnMxhJAwMDoVae3An1pZ3paWbqcRMx1tjnKeFtjEXQwKuz3LgRsrWeWi",
  "key11": "UhBcKKwyiMUKRxApyAzc6XdmXqr63iyxqhQ1mmGKvrnnFk88Zg19d8Py6QQbRQciw1nvieb2JtZyBztoHGgF8fT",
  "key12": "4ghiKFWHUnT3gudJnKivPeYwzMBTxRn3HCvdMr5diM3Ju31CgC6NHoaT7H2oScRx61mrmr45poXXE77U571XFdQt",
  "key13": "LeDuPt76nmQbdLi2W7MwTM9M9EGkkfiSe26zRqrEyZHbBdkcpCos2CxLCKP8Vubinjv7i51Cd9TmP9NHpKoLMU8",
  "key14": "p5SUYDbt3YCYw7fX4d1SmWSqgbuphhaxTLoWxkmkKenTE7hBvVTfUcZvHxN6yMNqgWeiA9kKup57dVZ4xmmrdL7",
  "key15": "5neL7S8Y2kVjCX1PtVvCDxWJQNV9Lzq2eDu3Uv6xHt62UasHr1wapUK6UnMgwfaD3Kmvqn9aHzCGjgbmaQ3W8uRp",
  "key16": "E1FrwoBNsJQshXz4oEMvhS6ajuaehWwk7TZCHfQ9CKJ9nFehp8NfVfETA8R8Ww1ioMwZDP7gG6LqBo4zJYKaiqf",
  "key17": "3zPsmfsZUYJ38RhgqkyfoQvWF3N49CuuzMM4eicing1G7Wok18dECa67jV1XyzUDd8pLhHdmuoZu6in6DEGVMMqX",
  "key18": "3N6d8zC3caiVqgMHhhhouWE9tkTNYMo78HptoePUtPU6igbVhDhL5fRTqLpkv8PYpa1EUECVNSMF5YSpBuUkd2Cn",
  "key19": "iTcFXEzKh6sFweD9c9nnW9ocvXfZVu6qYrx1DrBayG9u2fHuZVqo5aRP8jkrEyN4AiUxNoWmYwj2q5QeCem5r2D",
  "key20": "5wsaNb8GYz5dMgaNA1HG7HXSxZ8PYspBPZL46YXBddzvZVou3oUS17Nm4x88UtjRc5iLm1RDY6X86URTBKsMiXLP",
  "key21": "RoVSbsyX7um8MPiHuhwJ5Vnr6cEdqbEi2wmKAF2G1uGNGxkSB32DjVxe8eYQN41tGm5YYtgp1iS1npfxzhBKXkH",
  "key22": "3JfUZt4CRa67pQCWZeQwatR45t1UDruDEJbvEdBC11U4tBdSy1iJCAdgpM5UXoehmLhhD1bkZeyUSWcsEZvHXx1R",
  "key23": "5cuGnmtWyLJx5hnZuRXcZ1vFUTD6P7xzZzky6rKMXUanb4W7xXPSn1sWbAUoqgkKtRH9PriL9329qKHffwtZmm7m",
  "key24": "5xEGUWEPYyKG85i774U8S9VyB1PtABKHX3bKEuADJEbuZLhZ7UefKgTgWTzmJJjRjWeiGLe55wwi2FensScZfvHn"
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
