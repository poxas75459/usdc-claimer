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
    "2merT8S7XEYkynB6KMk66stiS2jX6pwe7MzV2LKtbscdcWa9dgQ6E4xG5mTm9ckhz7X28cAfaQMiEjfuXBVG2bae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uX6Bey6QohkB8QZE6GWTJSmbBEfLnK8Lb7c3Yf3Fbk8USigqAteg5WAdtkc5dub1Jrv8iaaY6VX1J7e4e2Bprya",
  "key1": "56KcXpc52M4oUEhZGjTxptsj27GEm5981Sbyb5zZisn4NwJvVj9EEErmdXQLHrLm45YJGM8V6u8qYov5ikp59yiw",
  "key2": "5p8DHHpPePtenjY8AoirLTvebWkGhWKmtQFAvt4M6qNUH8dGo87HkHXA5FxSXCynjFD2BDd23pejfCPVLAkajbmJ",
  "key3": "N81ct5fhVJFZYkYETWjGCd9duTh56MwNp9vKBJgCxqQmpuKtA9ykefg6tFs8vPfp72FC7JCcaA1cr9eXhwVZCxe",
  "key4": "2zBmTgkSk7xxhBYtVb9zAv3eyeH6uSzUiEL8yZL3tRfrpWyBgoimmQPQ1DvScpDNajmRU3K8FkKbH4jhTwJpVSgX",
  "key5": "E6Qr4rYtZg1jkvGXGmub5qpkciRqWtbxb1E5EhJP63f1wLbT6kbTZy7gZoYYmvc8hC7yUQ38tX4yih6DnXp1jvU",
  "key6": "25H6oyS748knEzSFhczZiUTBmT5AtuqniHom54swYorsPrDRhzGAqw6wkE8YbmPecfWfWLeimGcQPS3dgJmZXurF",
  "key7": "MbeWXvKBF4gCb1LqyiqYYXMzvp15FJxAmMrusVcRjz7ECRYMQA3PSb71E6S2SDrzEnTuEXkTVX16pZbyMbJB6tP",
  "key8": "4d5FRTTYJZMH3KhR5edqjFDbKHmjDLCtTeh915vwqJpGoRiGKrrxrLHfDrrhvaU9tpvuCGxKSVHzS8cM4CZRYzVf",
  "key9": "4kZLrueQA5Wi8ifRtNy47Lfstc7fUQg7g4WbzwfABETUB4dcCanRC4dqXgChsthCZzmeHfa5JzVaZ3rDCN6giuiE",
  "key10": "4rQHfm5x2kxVKidoEbqSvZCpUXvXFqBTq5LE1o2brUtzvBGgEZmqQGLNFWxR4eSwUGBBp1B519y38XtfsoomfGTU",
  "key11": "2Fep9hyNH7kBE2kh93REwooC4aCgjvicYzrthHKSHC2tEuFsSrj2JVkzSQfeRNhwRTZ8q3n65aiqgpDuZu4yYguk",
  "key12": "n1kcbkk8X37N8wYbcCxzQkyFui3bbg5Ph5rYiRmBvWa1gc6SKCqn2n3jaN8TciSVFFFF9jED7qPH1VpSFDKCPqa",
  "key13": "2QoUWo2VG511AmGfhhymbhMJD9MpaHsg8pUMYT41UFqbuGa8DMGWohZZsXw8Rj1iT5xkVBkjF5LrRj6dsqt4C4XR",
  "key14": "5Y4w29jhENPzAkkmrG67wMd3d16KgbQoMpjRdeRQXwMkdTffTN8cozpkn4SujB4sqX2CJJjccZa22EFe2aCZFSZ4",
  "key15": "4dVoLstqaQT9rBfWMNtdcMEER9rZGhhrBi6mzqSkRwF6Edt358GsmqXFs1GskaLEmGNrZGaC6EjfQsofpjfaWVD5",
  "key16": "65vsta4CkyMyBjucnTzNKJrMTqzLDp365pLEt9cnXkt1UiShkHcDPHukRcgb5gfJmAByth2XQbvYSUaonhx2uKwS",
  "key17": "4HEUDYdREVZQCEH74w41PGppw5WFZyBLiNh92cjcuSqZQ9htFr1Tz4DoDs3rfttHU25jXzFV4u2bJ4PySpXGUczg",
  "key18": "5XKzCAhZTB3Akcp8YtaQwmCkFVmiWe4KntY9hJnJqjFxwpmYQK4rbdBUcXc5ZB8hrLPeHCEz93ZpNiFSb8N8irfB",
  "key19": "3xE6vnAqKe2jwn7tpzQnMjPYdVtd1qB8jjs5Q8tkdq5NTyjCYeRssgDaTBvoULEJ2WewhtgPkM91mJuunKgCzT6m",
  "key20": "3uQgtH2Sj8CAaLpKxwuTJTXL4LzvbV2suwjienemgsZdXvZm5TFqw4m13vJe1NMSettt2N8fbpToyBpcb3Ytjy8G",
  "key21": "3YWeqi2E1UDbDZ1uW1dREePWgCUBfx7Nt9Mg1i9SdDqpS3JVRMoEJvmm1E1ApSryTMwtMabdK2zL2sSZadvSbtVi",
  "key22": "s3GzgruQA3TkUhtB3uAVU9kkoPR8RRqYDME9TnjPG2VNGtBhUx4zBzx6ePREFsWRAaLGbwEfjHXh8FCDfhHa6qG",
  "key23": "5ywgYBGD1BmofFLUikBFZkLA8wwSsQgNRd8Ebq5688sv3sLpYQkF2SwuFhF1rZxH6yvXX7qjTmjaf2n8PYvePBsF",
  "key24": "reN96JS7jQQXh22hZnpbHy5Sds6UMY5X2bhnNxX1D2MBQXfc5syn8zXLQHmb2Hiyi861MmneMmZnuusSgMV3t1f",
  "key25": "4E1YKoe5jevfoUz1WN4U2pYvbomMKC6oCkqUGhM2wMiDeYaQH8a8J6tKiV65z15U2Ygkvf1ZoD5LGfV3W6qBehPo",
  "key26": "3oNPNjagLcMVxFd8ohEhBVkRcQpeDrDVMSXocFVyjQURtt5vY4mRAxLMBFmGQt1PYRqrK3gzFxV1ZKUBsozNSW1U",
  "key27": "63oP7w8LcTesVBGGa6Mb79H83EXwTdCLPpwtvmuCzY7ZMAgBFiMJP4NJe7JL37fNeQC4fJDtBQNSb9VwpU69xDjX",
  "key28": "3QstqXiJAAETvodJmKPaaZJuF7xFa5VMwhcGNNQdfqLQZmV2PzBToNhbTpnbfPqsqPmHzrcQH39oY3fuRBNeydb9",
  "key29": "4jUwCKjZ4urq3QdC18gJtyKUa3Lf1FkNy571rZ2k6xnh1yUT4mDh5TnmZ7wvUWQH4T3QYos8T39JoLG5bF2jcz9k",
  "key30": "5sVdafUBFZub7tXrtdUnVok7CuoMKVQU7mDDLUGE9mrM1XLXHdmgodq78rntTEdXG99ft6BSER6V2rtP9LMjZWXh",
  "key31": "3FuzkR8HLBYy4FiPj9UzUCJDGuaiWu13Ds5KHPFv6jkP4rECsgW3uaU9ypeMYaLuWpkuY6p4G9ww6hUWxjCe4zF2",
  "key32": "3vqDmc14NnZf5zTfDPbJ9nHEbLdnWLg5dquAWXxTQJhpMFNsGjL3xcoXab76Ymeb6R7czq8iCVTeSAwbAJ8v3RTc",
  "key33": "53vsUGC6T56Z4z9kHSvU2GvYVyXJCPSTRCP2Bk4MyHmp88WuJneLKMJmryPBPHtgE5wGcRGjcHQUDS3sfxh3RLUH",
  "key34": "2KubW3LUYzd39vWNqMJ1qShmgYKrEefkF7Gmb553ATxcWi43DM4uU6ryZEYNH5kfPMvZCjwwHDMy4uqHb11PZQji",
  "key35": "pHKcnzv884Z64DrbCJn3xXPPuk4837rPrmJuNhTNqj2jCvhnQdxtxYx3tEWmyNFvrjJfEmQMDYQm5YX3mdzSAt6",
  "key36": "3QgJgCek9awdwpjPaiySk4peNDAdPyaMP86RmzGgU8PMk2WWcULVdZQqh92rWmPaKYMAVYp7i4G5VFgEkXiirk3u",
  "key37": "2FwxxTuLEGqd1qFrcJgx6FbYJ7PizceyKu3zuNCYCqtYC3KfX6h3zfNfbDWAJqX72Lsom6A4S2JnMevdH4qEgTyN",
  "key38": "3ZbUqGwYeoLuKXgmq1fKX6PjsGxyMsNm5eq9uyU6MTEeJsAirQdMjGwGXrmopEexmfA2iS1URZpfsmcvXDUnEsYF",
  "key39": "5FAv5qHkksw3d6VU95wVa1qCrVSyJAe24YsibZRadbNBNTQmfeq3Vxdx1ofHwphvuPgLv1iGiiCBCzRoZWHfeTKH",
  "key40": "5NNRKLHgpLAwQNzgVhS1E29mNiEV7VGUhKBRTKCnZToD3zAY21J5d3crYXAwkrvkA8etHb37D23mSkCcZ3P1bGsg",
  "key41": "2GfgF6iPKhxLWXUKKkiXTtqqmwqWkgShQAcGw5uTzAiwREzDLyZKFaSbxiS2Gafoke4BWUsRWVFNTxR7i46SeM9T"
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
