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
    "5GfxAHkuhKWbbhH3dbLX16Xsj7DfvhZps8g9MZRptvVCE488iJ1Fzw1baMc6oLeJCRx6QEZ6tVN74sKiTzVRRpcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KKZPTWJEeJF3n2UC2FF9jnGSRjk9eVpgiHjTwmQHhSA5UUmYB1sv39AtsjXB9M766KWUdMmzBQyGmhSiKBaQSTw",
  "key1": "KcqE7Ayr8QFYqyfTSFzpLY9XYrxeyGbsUJRpPubrfbbsf9xHm15sMWkPvY8P2RNa3dLmuYbTZNMuFpZTvi9icUh",
  "key2": "4aEVNFDB2aYEL18xK3L2uUjmDDMZecHdy7gotcD8fqVAcJYRVKMD9Ndve7TwzV94ktDf5V3tBXoqyExGxxnYT7ku",
  "key3": "35P6FQyXRP493gKk991KCdgb2Y2pEXnzCfwGjSGiunxVLURevkFfFepxY4hgZPJkUcdWeyfPyLk1ViN8PrweuNka",
  "key4": "5PC3xyEu8uUyPRoLs98zf6ZwLK9SC1r8SAKFxu1WDSrbM4Yc6HyF3KkAqkxyrLB8W4spEdJy6KrJ62Qdug9jniX8",
  "key5": "122cvDgmV165VKeX7FJS6xYHaauBDLcLCmRYu6Z92XC2qVGYzfbndsEneu754MCzZXhJbksqPhrCSfWRGzQoX4X1",
  "key6": "2eb1zzdRf5un9vyBvxiJrN5TGcNKA56G835tH25ZWZqqvtC9Poree9csy6psLs9G2LdPxNo1M5Zf3Pej1u95Hq9Z",
  "key7": "23wzsdVeii95N5vLykb8Uq3EGXZURNezCDxzD2hP3BiW7SNHERESqTz5E1p6DNujwCMcJCeYXzy9L2JMxrN9mpg1",
  "key8": "24bCvBpikcHNAxZ8HKenPyaD8PGYWZ4iXN37ZQe4xcbtaHXeBthpbNAa9RtJF4iwhZh6rj4Bj1ZtfdbHhrJerP5J",
  "key9": "48YVmgdvNKRCaqQBieGtEx6jdESAkdJqXioLZV1GM99D9Sqi8WY5wRqDMSfy4LpGnSihRp6Bar3Nf4z8afHUjPdR",
  "key10": "4kYSepfarBeWzGaWyEFgw9gt1RMAR1aNWGdA5NVxRBumrS2oSG6nAG8jbTd4cqZN7tBS9fgx9NLuuR74iwhjNc9",
  "key11": "4y999VNnU2SCYtTaDKW9pfgtnhZxX4mVcyZmSwvAGBFwBb8VNWNhPEKX3dgY2zDAmpEjYCfTa98cuA7SsB8nV35Y",
  "key12": "3SdXCDQUv3gc2eDV1iZy4zTAe6J7TgGEwRCSBxBbhHS2ddpFVAfgE9q3k3CtgXAfkFKbCZaiQc94tFCm1ZwYSUzi",
  "key13": "21s2mmQT69koQeYznJ7BHHBGquQsVDZxGj8BedWYHfjPjkL5DnxViKnWZXoksHKVHnwfyVCv28YDpPB17CXLyciX",
  "key14": "2SWBBKbzJnLxhxCJV5NhFxoGyqcwhzMPNQm1D674XE1wvWE7wxybBFyo6Cs6pNWxctkwBcNAipTZYpXhF8ySao5P",
  "key15": "mTAe3gYqNJXPo9KyhpaoFKct3qFB8RyFDj5wfmnqgwFQ3RAMC1Qfb1jvU6A4hBj1sTXTSHYLoSLrjiLcUrc5R3V",
  "key16": "43d2dJyH8AQMQc467g9DfyjgLrwAYezzUVGf7ybsWhG4MhZHH1i4qrupKXrQzycdNkTnQRCFjenJTue5pQSsSwVV",
  "key17": "ju6pgVzHAsgx2DvWccsgAVwSPgnWMoeoVR4c9M4Y76qCh9t6uRQYnZj7fq3iSfpzPoP7fvd19vZbcZuvj81wBqh",
  "key18": "XCD3jUmThifTQT1WWGYCHzfVT124ZCcKyuivCZ4Kozzd4GJGxkRjQeWcRzC2EpaFsTzPXTtvabsvmfqB7HZ9Moc",
  "key19": "41H3wHhjakdVYoJX86iQ7aXJC5VsLRXRm43eyJpbnoYhiobHeGJGpAW67mgCd74TQEr5W69KhZBtttrAqTmSpifh",
  "key20": "3wJBg8y5to2n5PL62WYt3FLQhcCbfbNaVwagvzCQETU4QvF2eaRYGngqwwMZiRTQ5GLrgNGMQtnH4h1XXg82mioS",
  "key21": "4xBBCYb43szHQke7XU5C6EVtWLcgyJ1RKBBMdZWs3UcDHXH13nNrcZTPbxrCYZuH1oWakpiWWKr9SD1tymD61zA2",
  "key22": "4t3XFMLdvXtFHVbC3rHwQt3AJDGTfBk53kBd4TAySQ8MGWfhJN5gkKXq9FmKpff6shmhHCm36ZYFnKp6HXq96PxK",
  "key23": "2HUCUHDPTgYE4XBYM51NvvUzuJY1wq4ixT75vw22VXiQdxQK1xKSgxn9UKfqF6DEdx64mKm9DVKHA7DNfwrT8AUT",
  "key24": "43i1i8vYodFceCE2vhY8yACNsqT2UtDigFLRZdCbNnbi99HtxpLhNGbvAQqpXhi4DgtjWAHCKKCNvKYnE5QgArVi",
  "key25": "3ZQwnEaBz53pfXaKZ5GTPFmF6afmw5gcivHL2WnYDRujZTyRNQ5gK4EzkLRy1y57KySUQpodU4tXC4PtcFUa8YvR",
  "key26": "3JDD9CnRWPx2HeyHASqyKN8oFnWVR8Q1SXjTKdzc42U7FSzwLkZ8H1vBqCEbMQcDMFDwMofmkrxJ9zrNvjPsyL1M",
  "key27": "4EYkjSWSsChRwiyvUMM5zxCHp5aAUdQaxiGLuDSuDe6sWVtDcsDvoBxRjaj7W7t2PtgzvmishLfPygwFYwkYyEJn",
  "key28": "gaNTCCBU2UzaABNTs9N9zdVDG5ZawYJhaq6baRWZtfm3aq3eieEG8yLsRjBcxH5FmeMLqZGTByxNe5Q2o3tr6oh",
  "key29": "2Ds9LwgPRrjfsbmfXH5NmsoES2hu4fyEg79LF7ygpuN6rYBVvB82T6bcqWXJqqchGE2otxtMYwJEpowct9sUp7KW",
  "key30": "2KfWVKkWdx7JXZ5JaxwCdT57SMp4RTzZD1c3e6gY2UiCszmYkv98w2bMDeuVDGLnPSpFkHpjqJA91qf8FvCBcjKx",
  "key31": "4Fi2pCuft1omf4GmJCzoFGU8d4Mb8zTgPQnThP7H3ofqXbTU6pf4NXCH68YJzfPwCBTP2eserLBbQqih2aBK9dxd"
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
