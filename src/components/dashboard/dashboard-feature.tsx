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
    "FfikxQXV6a7Hb7KCKaeDoZHfSvtiVzu9m1omHpFfCgBjCiVGAicJZFVTwciM23rpfac4nmTbVJAS73guffppE9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzPC36zKgFZ7RTcBX6ETHGu6ijBSq95uPZ4cS8niSXJiLWjdCiw2J7BUmAn7fD6L7Xs7b9edkkr2wqCTUvksGQn",
  "key1": "2ySc3yhF97qHiiUHoKSoEnWeWTciju5t1en7KoddKF8cW5DMX7S2MeaKv5tGuMmjwazmWaQonr9TK87VTJNaQYHL",
  "key2": "jWgHTqG52yVA2Y4qG9fHJJReqx43T5pz679DYyP7rYkA7ru19bJcF6JWVWRKzQ2PGTNuq8orQmAWeVixCehQnS7",
  "key3": "6cgymPJ8XAW6U3hNLHsKatMJiiUwnxgZFuLmUudTAU3bmoQs1sBzriPfSKhGWXjr4nXXn2VX7TsVHpqznQ6xq5E",
  "key4": "5UzLW5TJK6dxKZC5wdBbMBtTikUTauF1atbbXL59bzLGCpvbZ4Q5E2oz17rekhtoewsFMo9vfkHvFzbFrbNEpCBF",
  "key5": "on8X1RLUcHpdpiwjK4pwDhtXAf7ohb5Bqtk4ntke5fT3XoFd4uCGaxjHEPN43kzqXwZEAwwWDrqaeNJFf9N6ADD",
  "key6": "3SsPemDQnE5Mn6R9cmUeHXepwcD45C2VE7PEXisHw7iKguqya89QJ1aFX1JNbgYYrPkHf1rD1xHZpz3Za4QYkNYA",
  "key7": "5D4dWfCaC3NbjSVJe6T4kUNr2dYzkxBxBpRMQEiG7KGPGC5dbCi3M2EhzmaNj4WJ1WdfY7412ZYN5obHtvGGr1o9",
  "key8": "k7GYh3yXpYtKkW4pgBHYpQ2C4yAzikLB2sfQbnU5WAdcRrgMzF4g3nwXs2fcYrT1RXjCgtsAvaQRRHeLg2ocyYb",
  "key9": "39e4hTCtEK14pRRjv7zmXkanBqFaoNZKX6aXqrSyJuu1R9VFHNmMTVRzDy2gCbu6WRqAcip9u31EgpQCayShswrd",
  "key10": "MdHafjKHe7E3xTeRuMH6jCWu6EMLwn4isa1dcb2jZFzbwrcwYummaRggHHSpzWc4ybRfUmn8VJ4kmBQ7NggicfT",
  "key11": "6A6tFNNbcrgTMcPMr91TseBCE8CP8VqhZbdRhcuJ39cig1YGY5GbUQo8oRQKsont18AsKFnNCDVgE4XRpNvrJ8R",
  "key12": "3Zd47sie8djZadgNRvLBQ5mD6vkgnQeXZfd78gcvFft7FABVqRUTuYok9vr6Ro2i8G5ZCQ3W9Dv14UhCPrjR7LEs",
  "key13": "Pv1xB6JUKFtfLiRT3LPdsMWNh9viL29dabK9TKs4YvMngFYPuchgZ2NXK5fdChFfMydR3FhpdQiLV86xspuaue2",
  "key14": "QtA3rHQ75opSaCd6UjkR13WLkJbWycwzNap6fH5hi9aNAQhHRVXL7EGZwMLGpbjgCZ9farQGxy7njGTEyTo9wi3",
  "key15": "2wspuJrdkzqrnPt4XiwaEXVuv8PdyLRX2QfsZpeTchTxa4z1D73WWyzaxSL1nVVcLPnJ16aqxNj7JxbJFFREmjk2",
  "key16": "dxLvTUUkHe3upMMjtFq7JvdMyRzYqz2LJoCf7XMjGeGeizekSwNAYs3gxFjt6QhgoCv81CAKbR3ZY5D2YNGHZur",
  "key17": "GuwFettmx5yAiuEJR1S2iEfDr2uyX6J5XkDevcZJ4Cw7Au9uKoJHMNP13GrooxdEJhvPdENqQWVgTvbcUwDVn9M",
  "key18": "2QUcdmZtsCWvaY4rTgcy5YY3HFksS8iKj81cbvWrZUz5eyz5NgGhfoLWt4DpG5K64RVkkQJjqVw27Av7HdYuH2p8",
  "key19": "3ije5rConLfL2iBEZbSnTQ4nNgdD2w8PwuB5qnRS8fXBnwaJ4DC9ujeXkqg4LafnfL5DZJKymSdHs5yGvn39RtAy",
  "key20": "5bespQdkcsTwAxGKLY5tJ5XWvTZc9ApYtNwoG8ikJz5Wwy633u551zqeFHzJAKLApUhVe8inNTCw5Tau611zd8qc",
  "key21": "2ug96HmfsnWDNhjmaM3CvnVGnKCK4muvsabaPM9kDZDNyDgc3FtzBrmjz8cZFP3yJEQgsbgfSEF8JEu6wC2hoLz8",
  "key22": "48gQ4Nvi2TyLmscWFt31DBQJvtMh8n6k4b7QWfgeGsuyWCVThSDC5WmYdbHo1EXzDJh8k2UgmbiR4NcsTiNVKRb4",
  "key23": "2EZPdA2c7scbCbBJbRJDiew2WxXrW7xfBqM9Hg2LqRL8yJdgatCK43ELcUnTYhLX3XSPFUNZQJ5tR9nS2guqKYf3",
  "key24": "eXVeBFBjCbM6558G5PNDqKEG8Saf9NFZegH6ZnzCGfmUTPo9KWKp1YL3gpFCAfKiB5njwjQzf2JmAgrMJyBLYGL",
  "key25": "aTYgtGjjWiND2xvLPeQNwTpPrCXH82yFE787pGktpHta1LKc9gQJQRbQ3LgmsySNm7UBkgRRYbCs2wTETeDBuqL",
  "key26": "43deQtHbsR4dyWfSVgvMAqyA34LoL9pG9CoD9NQAtjSde4JQA7GeDUhySKk6fLKA7FF6r67eVNMb2Sj7kuVzHMyM",
  "key27": "4krxQphWWRvFXoPtrmt8LTS26NrbncGEqTyv4JrA1sSv6L9s4G9tXofkHawKB7Nvo1wdAoVHLvXGRANmY7hounHV",
  "key28": "3okqZ1LWsgC1QWsB1SuLe8AzoApzL2pJSVExLdmDvwcbdpRxz6vdP9xUaQbCgaU71FGQ41fyrV4bvMa8L5uQ8aXp",
  "key29": "3a6KpgRnJo7DKkgoDcwKTs874CFuaCVATpzebYk3F2egdBjgnHVXUPjcNg3arUDctJHSdQucJs1g95gC4zGxuxps",
  "key30": "3zgVK7LdjXbSV6oXcjDRLgDDUF4qX3hueaB1UJbKwPTtmhh9Vsw9jtNyZtCuuWV5fHhHWGxfNaL7etmg7Vp7bH16",
  "key31": "2u9n9bbAS2Sn8Cesp2ophSJ5qhDjfAdY6jQSJ1qdz5cED6KWdAxF8AzZamaDBqTAsv6xG7jQJd8Skd4uPy9DiEC1",
  "key32": "xwEKUpLiabqy5ofYjURF2VN2bCxYKSNABRvh7UAkseYFrYfTnnDTYuC8Ld8A8nzmnkGFvh4VRhYNrLNdXQKFXsS",
  "key33": "3dApWikg2YM2hywgncSi9roRvtya1u1v8CqdzDUd2gPyzjfibbYhEiG4DKHDfC43d6M1nW1xWHLDAe1UGsWshrDH",
  "key34": "2ktr6p4qNnAHBmAQcMTzern1Jco791ugtFAHysZ27JNxtBSL1BzwNigE4eap7YYdGu9ezwpW1ogo4PehmdtU9Kou",
  "key35": "4fNdzkaYxfAJvVWeXjSHgC7RLMRZ53qZMpH2MbeFAkvaHKjoqRTz869J3ZBotLWyeiWmfTjfLPxnrkNvSvvXCjMS",
  "key36": "2c1oNCaaKeRy75xj9XA9V4yPtEECVbzxgTWwc4ah4kCpUHnDzUDBjcdAMdXec6efnESdbofHfsM6Pao2fk1UkVXu",
  "key37": "2FzzqhhwnnntG8Z33zy2kcJhLmHDKFfbXQzQ6kU84pMg9yGVETMiWekvqqwPKLsWTvWpWocMPBBKzep8Lz8rr5Wk",
  "key38": "23J1Cv6HR5jkPJPvAE18tcDnEMQr1Y3xrCMbCxHCFQJtoNRVxcrHtyy3SAxQtfsjoKzEDyP78Aj2zZVZuupeBQiG",
  "key39": "3Y4j42bK6jaMsBqwTkdGZTS32kK411ReFvdMXPLfiaBE7WLiK4d1ryUsXkbn1FJmTMoceDnfZwcQUhcUgzZLv4kD",
  "key40": "2KG6VuHDhqvgWVkgrA2gB4wdnq5yRQq7dYx2rYCJwcdShRBdbrLgpPyeVYDoSaVnpvfyTaRoYQbF6fDUyENgzZ7u",
  "key41": "3z2xqLqmiihRKfTGehuLTXpTnrMg3prHYE2SNxv4VAgZqUvArmUHNUK3GAMuBUrhmH3B7n47H7EDASrj5gAD3RXs",
  "key42": "awnXQX8dN6USz7Q5Tr94imynh7DUnmCAKWCnEuLaux3u37qVR9sCA9Zm9cCg5nzC3MkT5tZrr9nox34XdTdqRjG",
  "key43": "3W8F1dU38NEHXXXNBtT2qWFdRis75VjsmL6mt5ma9kN1ETzsXs3Giptcgivs9ZotUa5ZCPD4udx2cKGAApSKyYoq",
  "key44": "3cPMszo3Ub6c9RKV7saMNtawFZ86ibVJovABzeYWQwdjWdtmdYBhvL6mLneiFnapN9dDycdMgjz5LySKBZcjCVnJ"
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
