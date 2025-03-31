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
    "2nd9ioiSZq4LAz68W1DmV11SDt38gXRvRpDVFgQZe7ZnLW7zxfyT4nJqpCZkXm7ATpRXP4cEcgvy4DJnYQ6epLBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kw3Rq7tEYHxdEMbn9AEwMBUTM7RGxa6cZinKJy2V8WSRzRpqvmiHfDkVxfaHYWy9d8jiC2vhyU6DYbdj86qskjD",
  "key1": "4rXiPA2W1TA4LLDyoitu3HDJSYkKxMRgizXx5k6ndNmZpTPiA3HE85tZgATdhxDGF2V2af4YGYaxaY9JEWujbRmp",
  "key2": "2nAMYHpLBeZLZsAJh1XvRtKrGwQy6jpAk8nHJ8QkcRhJDYo5H9JSaZaJzfCTHzRE4JbKXbXgeL6awm3iLei6EagK",
  "key3": "3oeiKWwQ1Q5VcEcR6PdHezvnyamouvAxpxZ3xmtbzCCd85Navxs5Q8vyqV794DWDdMG31c6zgDrHggB6mAxHiV9Z",
  "key4": "2ppgoEXMFjSyYaPwUSXVpACnhp8ippMJJ1jtZM8GTJmDKwNHuyFtA2z4NiuihVCPKbPtSBNKdmqbq8Adu1BePrEU",
  "key5": "3pD3LfiSd6NBJ3JWoqKTsygGcbiC7VmzH3h8NouhQ6FGS3VJjxkkcBp3pJcZaH5S3QYgsM4B7C7y5wLWYRjJkKbT",
  "key6": "5wrk4ACpTmA1miEsmpQJ7vmc5KbcXQMPp2KUuha5kCJjus3GsaEYhnFWghtM46aEwAGW7YnyKvCWzVUybwtK8Fpt",
  "key7": "29kwSDnGE4TkQuzdJV22LHrRkb71q3Gn9zmBj298XyFivD5HyaygSfDP3Mdd7iSneFfM8LY1bAT6AV2Gt1qasg5n",
  "key8": "2Cdzbru46MVuKwFg9H5hJzC9DT7cWKFXxv85Zs4U5KvNi8VznbDFS13fmU9xh5mvumQKbj4TZchcbxuKfqx52RLB",
  "key9": "7QxiRBsErPaRTrp7CQAuCLCX2aYHHRxK2tqJjnjDdKgrfhLrTNgJr3bA1j65mCTMczKWzw2nFvF9Uhbvaiiadff",
  "key10": "5uk21nqhD2K4Zh3WiapaNYFJa5JuyPx83kXFjg8LFcG1vvmBG9RG9BwXMtMuxp3GDZBZirY695C4wS69x9XJqKg9",
  "key11": "2CrmRCb2HuuD9gCStiXzQYynC8ZatP6mXHrHcA3fUuNCwXSv7ifgWDxbu6Ld7CWYWH5aJf8deQeo3TZ1rrVGoLLW",
  "key12": "4y874CmrHDPGKA9i15p69pV2W8jXMd49AnRDs4Gipy5TCheanRJLW5P5twkWDov8Gu5zU111cKVSzXfdtneJJsqu",
  "key13": "B3PWYVep6FCedfNZoQ9uFMT4DbN288LTEgTiq5aCCRQHowFaw578ZREkCB174Mb7VEQbvun56smBRJ53D841SWS",
  "key14": "4622NpwnpgxTeRBbNpdEK8dVKJxhraK5ax97m1QoGPfnSMWUENT7Kqj9gknrmELobNERi4aoZ9Sb1hkVyLki7QJi",
  "key15": "5hdZy3q6rCd5KuFZUtgs9uBtsLunLKYacYhai5oPUajnU44dQBqzRMdjYxA21hRbkaLDG437A8ckBgrJNmQTBJ3o",
  "key16": "RmBKXVU8F9fbLsEp8NAiZxx1BgSeo4FzTYGtCBLkQ335h1RjcswwBdaWVTxvdk6HqfHHY3FfZm6AQy4qwEovSsa",
  "key17": "3zLjioSYZCJPA8xRRgAmkC9GYZomzVMy4xDYXaNxNhdQBUkBwJ74sBnL22RugyhPhjYcbVt1QUKf3TfZJ4hRiMWF",
  "key18": "2SLgzcLTVLt1vYEHLr65jKArzem17XUhfsWBGh5M2nsnYWFthV32VsxwW73D5SAznpeFM62tpf3cMr3riD33FSZq",
  "key19": "4jwtBG7Wm5fTSqQPdaU4sSDzdhtKve8o3nGAFgv9j1qAHFprHVuBUmzpDvhLf1rDn4EUA9BQN1RA9ieuzEQGTMff",
  "key20": "5E1DMudPSh11Gm1pQh1nT4oizeZMt754RuLa9qBRbbnFKYNcrhU86oLXLiiwa5yFAWNW1YSGkHGUMtanwhgYQxK4",
  "key21": "5RWHUFYwLdWZXvcwhUBJhJJaoTuzwKFakhhyNhs52xxDq6PZU7F13kDGmMzGmY7GUfpoo2xZ4dLKtMrcizXJXF5h",
  "key22": "4GygWFYeKA4KLSoe9Z4Ni2yyFnqnAZZGA9tM4gat9GYGSdxAVUUhoDXcdCAMnVRmwYkorMrfWEaDotNUM6USi2LN",
  "key23": "43789pDXrAepmWB5vvztCPiBr5HhmqAA19GB2hguN5rhHLVfxjeeWouyqRhY9JXrViUCkKhL7Hm8YVa6BhkbtaFi",
  "key24": "5CiHrhCiswfZSJ3GmTbaAZaYUvwCG9iCXa9Rtg3z1kXtcWgCtu2c3N6gFqfmuJFWEGQHUipz6VecNTDWNHxK1Q52",
  "key25": "246sXa4FZjtAabJmViYvUKSCGy2ftUWYJ7pLZrTc94j7jEcDsbZc4qoWjnLe3JTZfCQ6znh2KhNTS4wFvSUZXdou",
  "key26": "LN7NEk7m2CbotL57s8DRNoYikQpatdHPqpNaVtgrSGAeRMPFXcZ91MYoCsMmCFcKwRKe7nqKWXYPzufYDuzZsbG",
  "key27": "5dpc5dwfEgETHLXJay1Y5VACyqrp2puxbH82WsCjx3Nu3WhBsXiL61d49qx1sBXdVfJHtF6LuAfBu1EzhGfN3TUL",
  "key28": "4KKrrPdJg69YyzBFsNijPRzeZmhrzuVR8sHuAjo75cguHBY1azCGHWyyJNWTnHPVtVDhGaShu5EirRuqX489c3eA",
  "key29": "8ZZ1XAMSmiCpqm4MaqJHkTTmjJtGvRzVRkePzYCgMZXVsUsTsksu5BVJ5DFyYU9NEJL3u2MnVzJffe2vbmCs4qB",
  "key30": "2kC7FCvmc5adQ2WSnJCczgdZf5RZ4gGV2s56TiEawNEkYYGRFhuQgZrZzeSoH5kKrKhsVccxGaJzoKLuJxWxaToa",
  "key31": "2ovyPEcfUFy2RbiRKRAHRJmSFpZruweTHjDnbSVrQUuHc7ZFX48eVZc2KX1GeNm72wWHNW9PsEW6k4eGC5mKDiyx",
  "key32": "2dGhgahaKxRwAUTRxW9oESUUafKgzYjYKXyRF89ogfKsBqZRoNQ8xFivt6pUAxJpxHP1hvhVhdXejJgZ6yRfYxqY",
  "key33": "8RF6X2T3XwvQ8jpZ6ifkQvciJWMg9KYz47YFHS8P6aydWKSKyo3CKmYC5rwSnEEY752aUCVbe7cwTkD1nXUukKx",
  "key34": "32BkoLz6SbyGdG949qDdmikT5smUyHcbakDo4xtputZGoK3vtnCiviPtJZ13mvQbUcsWCxHXbhKv2Qwu775azzW4",
  "key35": "65q4i2mauCRqkwVXA2NmhJTuShZLyNgMneziTWLL7FzduYLgNvcj4NxhNkd5ewpCQiZCWUMVUnFnq1sL65Xw5oA",
  "key36": "2zdQDKuBRrEaymcnyLwd7TUG34E23mgAHLruvacFprxMRp1hcuetrpjxHG3dtQAdM86zH1uqgTdptzwCw7NAvYPU",
  "key37": "3xxPhez8Bkk8smzDZ5BHazoXkNM7xqaeEe83UTHjLnNYrZ6NhCu19HowiUyvrPhwF39SiRVVRniG3n1D696LxtgA",
  "key38": "a7228xDM2c7EJq4dcmHVQtBktewPs9eKQsgQs3JCYRg4NXGwMFk5uH6o58XU63Vj3NgEWRxY1EKe55FVDotKjBm",
  "key39": "4tshTdRPvQA1tpYK7BkvKsDJWiyBUGywkj6eNESV3UEE2jiiMPcEYKhhu6y1XZqL9BvPNJWwW7n4kVQoq6YAciaT"
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
