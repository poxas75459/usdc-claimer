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
    "5t33KT2gZjob76ZxiH7HaCyu6iUcGTDTKYcorv6Vuhxg9Z4q3BFnswhTtBHRS73z6tofV5Tzair5UC9SCy6HtDtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45bTNMiTFE68DReWeCWEPBJiUExaDj7dvqPnP9DEUEuaHbqewtLXvX8b54Ab3T62HLZLhjTFv1daP4KkjRPWanLU",
  "key1": "2XCz1ToiMK7wSryk6BzHfY1dHhfzcQi3YR32Um8jpYQs6PqMEXjt6wd2KDUrNWJ7XgiAbDmYfM3Vji9XkEqwN8EJ",
  "key2": "3RMafaQh6pp9391XHKB4hG7JeNcXe3fWCmBDZAhxwmAgsZYABZLdDvF5e1xQxZECxBrkot485qPYoQJ9VpzSFaF5",
  "key3": "4yd68BjdbGjMTpkUmeo2NAJcaWWfsFUQU98yqZUfdaiUs6d1ne1yfze5TUz5cTXKfM94WtgUcogxs6S2enngqNM5",
  "key4": "5MXPL2yVtg2nyBChccoMEj71MW7rbp4aD8ny6Xp6tcddtModp6CVZfoCLoLiTVMZ98qd3nWXbCj6gLaG3BM1fjAG",
  "key5": "3rzjuFy4CtbT8Y1rZ71qXFggMp4CgsEZtkPES8EaGBRztLnKXXDpoYZkYpCFTGSegwfXVaEV1D1NARF2nobpPHSe",
  "key6": "5D7sD32YzMVqkJPgfjxfGyauTieMVHsnEt3RCY3M7dm23sYpz7jko5TuZuSpWpXcQbw6R9RB8hfiBf4FqqGiWvw1",
  "key7": "5Hpjd7VYjZsGx8B1VKvd4EYuR5QZBXSnP16FbYZTmiUx1nM88wduYTgWUMMKSCHH34brK4Jbgm6AmRnpfJu8m6DQ",
  "key8": "22Zs6SfHPHSJxJkneWKQJK7WdwLBkexREBFM8ANjeF1TVp63QzXXxfZknATFX8o3duZGn5nhBpPr72bN3W2rpKAB",
  "key9": "BwEMbqRt82VDhDNGxTjd5bzLjaRaZjfNsGHiNYaefWgzpxag4nvh25UaAvrCdsV8tMAAToGJN88BYDoU8YnZbiW",
  "key10": "3MhdxVQ64KGLSbBexdosaWkHuUqDCWU2vvUW8Zq4qBEY96DJgphGV2KmBxbBKEtZkVz5sztm6VK9gFNVJu5Ay1ct",
  "key11": "5dGN3y1vk1HfFeHvxAnVdykHniwiCeunnjo494wR6cM3n7Hm8JbaXbWZwY7ENr54ce6wsViybSTgsqqXtkNLioRE",
  "key12": "4pZATtzY63yXBNi34TpqG5CvJRwEBVsff5AKZTPCykKir5eEkio99g61ohyVsrNkyA28uhQaLAnQ6BYWfkmHY3xk",
  "key13": "oWMidkbnvEqePEfH28HmPVge91Z31gxuxnxKu7gygjMt8oXD3VLfuVgbaFi7x1GD5oTQZkG3oYysg5vZe4ghju6",
  "key14": "39BtFivuszRPagRiCJGj3UQTi4G45cQU1fyRe1CZvTNrNQfPgL581K4K7qrB3gbDjbXMYM4CgSsstvzdnmFfuxRW",
  "key15": "5uS2uYuDQrRj6vQcrBheGrwYahPWJi99Hr37t3K8d6prstC41gPoyYYBacQotdB6Wz1PsXeKNShnnVZkpgiYGQgq",
  "key16": "3e9iRvK7UX9W7HMgDbT3pEpPwhE639xyWgWB6qKHCcHivfFgusktmY1ku26T11Mp9SKJce2Dx7ozYmY8Xddrehgr",
  "key17": "N6EUPUbznqjYjW7PXKRFNiRsJaKcms4YFbEiBQMAihrSAbBgWcqaUpBHinCgHqCKgXFrzXyT261wzanJwd6ctMz",
  "key18": "2Yhq1bJrYgaKMK5ZhAKRqt8CnjLwLVuugCYznMqvGDtFXkc6sgpTAH2BvftbuoJBPr9qLpjJDL6qR4jSkG6L7Vcw",
  "key19": "4P9vrFD9fEq6CZC5CzU5mPErGD13Km7VLNfzU2ECFrR6pzNVXudW18q1LeUR8TENErAS1wTBtzBKiWSXBFQE7aW5",
  "key20": "5DPkjZaocgLf73hEmypxnmATiisn7zyLnhV1JXcWQtFP9Tb8726VWhLDHZdJiLUpFD14JjH9he4G3a9FwKe5tGwK",
  "key21": "3pb13Uhnmn6fdNFyC3V51rS6eEvnhgf73FxaM7EJ5tVdv1bA4ecWuzTEqxafVjcJNrGC8tTbqwhiBzubCbtnj5Xm",
  "key22": "5ULq7RXHHX1p6jKYz4tYiH4N1AKohVRLM64v2qQR3mAtHP7sZnYxBVSqJ4iT17QwkpNTvQSbZ1mAkwwDXs6kLtvz",
  "key23": "4jcti1KgnEq7hCnpBGmYdt6j47TUgNDAS3e1Ay8swbU2D4Zap55whatzD63bcZrvF6xwak4WytAJpnCHw1bXyJWY",
  "key24": "3QotDEzrVkUrPyYdGUUn3SrLLrAwijnMrSwksJqWs8CnbpCGJ1xUe7wKCwga4mVoebtb1PzxjKwxT6zFy6qLNM2x",
  "key25": "5SRirbDZKNVRMSNnYtQ77gGahvczh8rYGhPnZUXqLxMNnEUtytz3UbcFiixRVA2vi5jkuzD6aJLSLoc9MhsWfvw8",
  "key26": "2mRiEQbSMB6k8S3HMDBZfnomLyeEkJYTSds2Z8eUYqF9BHUJ113pXNNqSbuXy4tb4aktHiKeJCnvFjMqZi4bb2hm",
  "key27": "8YfT1QkaqUgqZsahv626iPWnW1BnUedPWq92ESmXEUMpufwuMir2L3vuG1TPL7hzJB49xZa1KYvtGo4kV9hqMyM",
  "key28": "5WEdVUDRgxjFrTvfVyLhHhypJ5z6zu9ZXP7ZvfNcCPZjkkcLyBfVQ7aCeSEQJvsEAvMS8SSGzbugfGJj8TPsaBkb",
  "key29": "5jDGG9k2DPR7HVj871UY5U3XEU9yK6rvcCTKC1w4dav2w45SCgFD9ab6mNumjazb6VD2jg7EwSH1kxHMRp8YZEwD",
  "key30": "3DVLqcktPgCY9EUMF6css2aZRSW9kmBUu9wvFKtaMHRyi32wUzYEipVSEds7sXykzXP4BDS3wuxs8XbreZHiHGD",
  "key31": "2ELkFqpZ3VV8cDNkhTNApjYuw6XG8KWj8QXDSgShNe5VQiB29qA9uiZAZnNEqUyUtY9XhVaR7BK8Gx8n6B5fyTvD",
  "key32": "iGKAXWygqThijqaCU2jZv7n78Qs1PH314GbZ1JqbiZXNejd29jietHgzRWV9M3S3mSfCBmxMcx3YLyLrz5Vao7f",
  "key33": "5MmoWH4hTiSJbdQzL6fh3K6eijn5ZhNXPNMBgSvGWa5kcAaU4UoRYX5CaNW8WGdoiqeM9n6tQRbZkHsXJJvaTBdp",
  "key34": "59bApicDQrTTEn6ctVkMH7CzBZ29tggF9M4dJ6onP5M8jg1wcpPeMaQwgm7oMHAXX5wtxkdSjpeWJGbNg71gabtH",
  "key35": "2pc3fm37wsjMvc8vvUhDizmdLuxshkCuYNpfNff27JSKPBecoQxJV8QjEJ8hw8pnZWazat6ZQ9V2MpVXMyjtGGGM"
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
