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
    "38HaHqyPqZaD7ire3FCvHCXTdE5NEynhJ85AvtW31iapv6i2H3zme8x8J1kpJFSnkg7t2uGT5iXRTyGiQnVRhqdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63xvM6DBvPQQXnogvZn3q5AmiHNHHb3t7fdLSuPc8MNCy5mtt7d7P8bXHhua9dpcBpzMSuGHXybEmkujvQn5idZH",
  "key1": "wqTJ8bY6VVmH6oePZtEH9CXgbnv4hhSiK9f5nFK7kHcsDF4CGzaGgL7Lx7JH53v3MvRnoAhvXsjc98V5dDKAa7T",
  "key2": "3vKPL55nugwCGXWAYekmS33eV2J3wM1go9VmyEKBg8gTDDKZ3sih7DpDyGv5UUddwtm1cprPGPEY3wFeFqbRkAbg",
  "key3": "3vD66LrUFh18vU1QHfXo1sXJh9pzNb1KX67LVqoPTsZSowTHKFLJSrVroiK7JUyWacXMNB51ENtT34XjdxCpNxxT",
  "key4": "xWQWrAhKSQhinD1jFjpdeqv2KimDPcyKV4RkqtMXj5vVEH135NraW2jQUX5zHoCEY3ByBKsdRKj2PRM6Go4nfUY",
  "key5": "5eXSFP69kRTfpyon5FumTi6xx5cZ5W35bWiieSPZHN9FkrEMtryGHWV9kNnmXed6TS7vBDrMtNAGwcEXR81EH6wW",
  "key6": "2MpueAw8YZPTw3xhXH1vheKKPtTNq3SvfVuWcHgs4WvdiQX78Z1FauEqWewUq6x7YqAHZCXYYarzx5poDu2Gu3ec",
  "key7": "mYNxZgo91cTZp4rkMg4YDj78f4t9W7qsG2yGUvPJtAHE485BVz7KgJPmRvgSmqCkc6XPhtWxH826yUoJonH9TaQ",
  "key8": "25A1maWkS3Vg4iSCzcERe3ieryhjDBth45XB8rFcc1UdAwHs6j7wR5Mq4SrWbffVG4f7cLtrhpuFTUR8bC1YqttM",
  "key9": "5KeibhePdUqWV5QVgc5YkGVkq1Z4GBVsvEXe1SaWrzMRBSukgqj6Fg6sVDionx6ynfnebAu69YMKByqJ3ZQqqXvD",
  "key10": "B3Yo8ECuAKsC5DvXku6hC1TrREWxov3Ys53nvpBS9TE3erzSigCt6DseQb3JkUmaXdY8ar8sW7EiNm7LXoY6GTY",
  "key11": "3whdWkYVg6gspXAW9aRqbus2cp4SjrMKirtKqK5g9EdZQWJ7govLJELPdb1BqBVrqK1NtoLgCRH47dcHHnKGZg6R",
  "key12": "jzaicn3kzGmyirR3e3Nnp6YFrCFmJjFsdV4GqHWonmoVZeBnmQgLytVgvVNdAsRctmgGqrQCwTiVCkxwkGVQmSi",
  "key13": "54cccm1LDttP9HxAdDutPLEspGZiaRPng7hW3GbqzDhkvXJfTa5xUGxm2thRUT8HQRe2mE6oMdiyv1KCwrfKMRKQ",
  "key14": "5HKxGEpVLigkEekQsJHpK5jNveStUBwxFqyAzf3X6ctrm2bfuggD9vg8LYq5u4qxiMURj2D48wcYwFMBUZDedJJU",
  "key15": "5hpBed54tbDxWLF9oUF7QPMuZdzM6P9Wg29SpqNbqmdWAdnqFFazNC2hXU9u8GU9Lzhi4PYHY3cYm9WhUPM6Ckp9",
  "key16": "5NuQBsxqB1dLdVquAWVNGkL9jknDr6HoCg4NoDi3hLcVwRQthZQfFK86HQVUWxxB8ipD5smgk4cv7FVEVZoBwk6E",
  "key17": "5SjdLEF48AGrTJohEKTnWR3kJVyGfJd422Kezwh92jakiHpFGMkQFEfrVg6Tusbhbe8gfmkKeHWBEqezqTEnJX4v",
  "key18": "5vPnSU7gpxSwy5WK3Ph5AcQty8LdQo75EMNXvXxQAXzRxzfHJ2hH6fU9p294karkjppNq4q9YoPFmvDpQESR3kL4",
  "key19": "2GSew6NKm7N7oUTk7V8gsY2RY7kac8KhC8Fb44zssaRU4fDk13R9ipYRfSAXRnnkNLVU23Zr55dTMwRAn4pbWFrV",
  "key20": "3nxR53e2Ao8bcDndo7EXmXDsScQVQe332SEwZ5ZS3tX3qoS2585wELf8P6RAfhnExa13WCuh9fTayD38sjrL7oj3",
  "key21": "5sKy4J78PQGNSqfceyrZyravzG89GQfq4o7ydhjNVxxYx94TAVBUjhNjqS7UaHsprB7N2KacwAqY4nYyLzeNUHSd",
  "key22": "61pyheq17P847Dox3MScUAWmA6gB3ofUsdt3zKF76qPJqUyYhgqNuKYUvXp4kDpnj4rDui9ezQ2WAGt4CFTJ5EzY",
  "key23": "3fEwCGW8LcckgdnHKHTfRKzfNcSxEvdzLNjNneRoYtY9jCbbZ9fk113xKtpYo1QvaSPTwqY1ewMz7YXz1Rtzo8HY",
  "key24": "654DjLQFpUtPSYoFQ4zjmCof6ZmeMnNsUNZEcLH2f1TnqPsSTytThyHTVNev6bjta3HCBqZCmZUeNBJ157LwQ7as",
  "key25": "VZQAtMocLw5mPf54UgX5tN4RSdMWcpcr6Q1v7FxvGCwedSrM4nH4P26sHjEEnyHbKi4oBbVHMBhsJ9y8hMr56zv",
  "key26": "516npYpKBhkxcx45hz8PaLtTb9MSAtqRXjtUCae9tqv1SU6wUj4wswTu5bJRQzPt8yE6d9f5YYwtDqeRy4GJDpne",
  "key27": "23FPFpxMfSFBdrj3qZkWKZHwiYpdVUM8HYb6ZDqa9Bz9xvHaBGLSGAHkaDobd3AngWpGSHGE7eaagvgJmNfoUH5z",
  "key28": "2qXB2dL8WGQNygyMqLAs1dvaHDTbJg8Kz9g7Etk5E3zjS22cmYv8rhFqWSuBhjU7pjfdJa6E3Qs7TMKJcDtM9wmq",
  "key29": "Q8iwZZfRmvT1CbnjniZTHMhWfwFRbSkw4hDYVXUy6C5xERAJ59zPYSEoxrKzVdhXjdtKFxd6vs9nPTAgK3KygkR",
  "key30": "2z5xUBvjPdS1uYSbvyRsvmnmkwc5BZng4aUUffARMe1cqqBPp5odvFGanyKq8kXseKaQv511P3iZf48w1KfnXh13",
  "key31": "33q1aJAWb7eQFX95ngLUpdNE9aqXNhYcwqksgFboZyVpXa91UfmGJ77SmEevd8LBf7pvsKtEzBMtuxHzpdASZP8r",
  "key32": "452CZTSJvJFkBPDJWq7DRSWRxP5B6vY8sAoAFpVKpX5YGDEaiGbanVPDZFFhrgnkDuLsfuRuy8bkWAbZ7rkpMm5B",
  "key33": "3SqWeffwPb6tKZGj3nTUBmkpfVcy3ZnU873vG14qgCSprRqb3Z7gE3M1vsGHVrjBrPFmYb4Ti2ZyGLmdRR19QexJ",
  "key34": "3ssJXehD5Z2LzinCSetkM9omx3ZzNu6sSnhTSeR81NTvL3q6k7Q6pNDu87RVpSHowZtwvzJHSJHusAUMk5XtPLpR",
  "key35": "yHGaj49x8PkGvpc7736gcoqtxpgx9dMX54dPohx9tE9MpNGMid5E1MTVkXVkoPpnp1QHuyjwZwQUr4nh1itSL8S",
  "key36": "5bahzagjoRu1QrkDyVSmBVYF8AQb8Yt3cJKdQzDtjUSS9n9tj4okS3XpmgrKTF4Z28CmSdo7rPWjweZcuYoiYPwa",
  "key37": "481bNSm6HdeLVGuWGF3zQznfx2xifDX1XrWZvgtJU9ouU1PBugZ9rJenHU6Cu9TfsSPx5Y2KXHoMosATS3H1Q3UN",
  "key38": "fenXfZG1NT3pdrBcm9pP9Y7mnNPY9UPxsLHkom5cqxp9kHMG6rJykMQFa1yZ4GMimcRQCxU8Rud6PB5K1nqHtq7",
  "key39": "63heUhVu5BGQZGEJyfSfwFwmHdtmhD5cQmtQ6BLSjMyYhtjW9SnVTnk1TDwEzLWyT5pnQBSrGs5SA29jtLCS4Gme",
  "key40": "3TiFKodcCu2mjVRfk7eh7HdCyPuqWiLUVL6AzFRJ5Wj2pBHaGGkS54hCKfBru3oVbgcBpy7FtLQm3jmACfRv2fet",
  "key41": "CNVan5wSZd9MFwPXJzhJApaqCwf1TxLvzrqyMk95NpSmKGqf83gkSyJBW4aA8afrmUPsT2ZLVXqGHDCZ6pAnQFg",
  "key42": "ozErFYyoERZYYW8e35GReMCAEALjW3jogtYfnmybHxPmShWUJGLDG4Q6RpeHMZLnUvN2qDPKoydPiicRQrERvZb",
  "key43": "5tGy7noHZemMUD6tvHeNQJtdcKqFbpz9aMaGwP1LqEXoFiQrfvLVQzFkXD1DnbeKYqGG4LJjsp3nPoDDLxepw6xr",
  "key44": "4mt9FbYNC11pXfePMhcoUFNaBMizjPE6MPQ9Gwh1KKdE3kPM5zymbYXADzdtCdoFB1PVGPAZ7sBJKBimrSSpHfG4",
  "key45": "bVVAunngQFd4h6eB8DQz2scaHR56zidYwrLCfsUi48ZY1voiz6LG73z6NMsPMRFBQJ1Ko5qgzamFzmf9Ls1kyPi",
  "key46": "354br5F6r7iszGuwUMLSAmpzzXAjwSH4fz2bbj4YqUsLBrewXAvF5fLZKKXLmWXRjYERsVTeRYCkp86XBdK9Br2",
  "key47": "4Pvrh9d2mVkiTbVxGBNv68CzrSWJG4mnkDfpHQuiqngPUARgzyeEbsrUcBm5QFXRUXadLK4UpuAYP3Uik9DT4Q4k",
  "key48": "g1Ly3Gifu1bNnY2ffc89ofE9i16s33xQbDSSWfVuQi1Gzq8i1njCj1C7xvMh5zWxuaZz9Y8T2ogJ1vWJY2iaGxb",
  "key49": "2nSN46W2SKqv3tXFknc65ijE2QQgT56FdfoKEwu6HYpWWvS14RTkHn5PpgdASkmm5XLcTzSfA5C4EEaBcZQNnfz8"
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
