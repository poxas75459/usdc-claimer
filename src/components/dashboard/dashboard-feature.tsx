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
    "3RcNYUaW8yfosi3yYEiPYabXMF3Vhi37UE8HK5BFzw2sC6VHbwe6hf3vEr78EroCN2V5Z4iJFw5u66FmDTqC96DA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mxekD1vKVrayMVG2Kyz3jGW6BWZCpJDGDAyBCNW4RwKtV2QqpKjDAhjDchya43Vtju4r7zzmcwJDhAZDZrQ6r1d",
  "key1": "SUURgAkciC4ofxUwAD8pYtW11SdB2prG1aVcHGCcVpnEGQB1MLbyB5sNd4EMLEU4CP6rRfPuXFDdtgwHYPqrUmf",
  "key2": "2GNZ9HsoHwz8uRQeNxczF7hKyA1HQswpw6LiXVRvyyxxgUVDEmGB5qwn4ayzRHZ4mvLJoQRcbaM7sP8TwZZ31PnV",
  "key3": "2gPB1UtU26nuTsNuJUEcmynrkkbjZXwQeUitCi5bSp8JSq3ev3CdgNFJiYFnTu3BtQt23KGT6FuA4ZHUHtUC3Hbv",
  "key4": "5z5ajPEeDfZsdoFgXpzsrxQ2vqTefWYLBUNjwNXGVot9VxqUiQLkcR7UAHMkyG5Whx6EMomzWD699H1nAQYiDfxG",
  "key5": "5mpMEC2LVDmCm8VENNAGASvdGAvhvmM9peBfaPEUDNz1ra7jZJKh14yPxcogcU7P4RrvZnDaBfyABZa5FC9rWcUp",
  "key6": "5yMsd5oCJ3YJrfBi57yAiXM4vnvz1dPjQSLweRZ1pPqKagLatCf6hhJxFKMXgc2SmcdMp5E9tGUP356iDyRv65ok",
  "key7": "4MhHy8Es58jYLRSPQXyDw7tSBdAevRxt4NJmQP2UbHnjLQYWaU4Bi5s1L5nKFqzdYF6shXDPrJT6JaGCSAp7LgW3",
  "key8": "3hTeEHehboHTvdcbFVDFuWr7hpUNsNX77z2PBpZ54wRY62gevohpzncNCyTnUoTGQkNUhMkRDyQDSrCR2D9xvUHD",
  "key9": "2kopipthYxGZin4xHNy2d4PVuu4sMRZutw47ucf4PAPcaPaZSwKXbdqgKF9NkBAdrHE5UcsciSgy5syusyUaNNMQ",
  "key10": "2P61Qd1pvAx6z2SRij6F3rDyRLRbna8ApwrWRqm4TedwvMs2Z7FHoaErHiGJCtkxoox1asxXYrjAUx5PH5PzX1Es",
  "key11": "233MZcdWwV5PbsDgLJetRD8pwijv1qXqRHzJ7rGjRyZd9a3KNZSaLC4AmR1A758yeUA9FZyY7mpWonDk8wQQ5HVr",
  "key12": "mp6DvRqXZtNP96mGrkmJ6Mf4T5dDmVE53TqjV98TcoCkoxenKyfek3jDZuaKieMKQV2tgpqqL32eqfc1dgvXjP8",
  "key13": "5MibtXywtuJZUsJz8ay31AVsZEcjHG2Yug25L5TnM2zUa3B4mNuFdiM6djZuwKjrH4RWHg3WDKQmFNHs1rKbCvcV",
  "key14": "KEYRRdeRUdoizxpX4M57F8awwGrmMaPMZBY2QeaLzNYp8U61JGQ7WVzPy1pp64TR8VrBBuJPkUv72WanE43efnL",
  "key15": "4Tp8kwBZq82r3fgKBpArRaUt9VT5saEXaAC4a578FftqKq7JyXhSNTRsTZ6bjx2Ra5ZZWcEcf47LrmoCYG9ukq23",
  "key16": "2ph62Bk9FB6wH1twWxZGJcMo9aiz8E9Nw6mpT3u4mkekXrv39bRiJHU8VXeXfuXj6Rz4hxzRodq9THgFuyXeWKEF",
  "key17": "2enwCegGF79AVp1bPFqupbr1YaVenhwZ5176zx8HmHGy51SwocPoUrLez35oMFKwwMbvgZRJ6mLWrXaMaxvaJabq",
  "key18": "4snbMaHFV1hR9aWgHcELwJXxE4mu2ejuwttrKPkoTu3XwVKjPeb1CHzNjjmi39fRFddgddpPpC3UVrVrP9iFMgsh",
  "key19": "66rXuW1aMoJ8gPjbe6KQgobQABBrjgz61dzcm1HZgpaHMRcnPPGkfwZvssGp6QxqbbnsoiVZt1s3wMN8fKzs6iER",
  "key20": "2hNPDBsd3ZrnmR5Dh55sDUdmSY61yxAE6fFLaoYGesz6b8qTsziyT8j4yuSjUAd59TXneb1RjxQrroKDoE5LVF4d",
  "key21": "3FZ2vDFFWBNXJ8co9kgeNXsEUGjvLxmv5xY1LHju5Pg1QQocSoJXkb7GxTEjD8G8SGpYUjmnpUHwrHHza8CUQfaw",
  "key22": "2ZJ88icMVxQigH6kQ7fh8agLC24SSUBjeoEPojzdUTPKLeJSfJ3EAiSWXaHpAxMpfhU8hcKLK4tWST7bLR42kis3",
  "key23": "3XhL5iqBpgNG8868no9v2H2v1czBLZLmJjecPqwZSo123wwx4Ey7xVsWuc7GZt5AL7kX1SkJVWJwnjc9cW6tpt7j",
  "key24": "5K2d1CLB6KzFXUCPgMi9BXgoEHzAV6nRWvUGssNwqdsR5HSCjEPAuLZBMPSdujLb6pemeibPbNi976Y7nDEp9fQt",
  "key25": "26CJprRqZPp83emUfJMPpz974z61PVvEwkSn3PAsM2ZyVY6FA6hg1KUwTYMFTD2RZwtQquQBkUp7ybUhsqiZkfZf",
  "key26": "28eufeTMpKUa6gb3H1yFj7v3h5aNxcP7nQ8VwqjhDmV8vVckzupaVNHbqdN3rAhf9exYcagR9t2VdpxVaZiKa8ky",
  "key27": "415VEWuj28efmaf49eEajLuR9dPQEsU34q3ixWRTxvh4A27BukMS8fWYd5XcgGVXusoRsH4HK778igjDLELgp1CU",
  "key28": "2gCpUCBfch3fJus8KzYjc4MbEKxTYv6ky5LvxDyHHd6TdFogmCmohqByVhrxtSiw8H2ejBXs8bDxNuAXxZ2bkfrs",
  "key29": "3gKWp7tZ1d3Tr9orLYV1Gh5ovNkdaygFN2nrosqhYaUezff7rUTkwkWUZYrHdDLKMwjM8EWNgAhhUKnZY6VBeSti",
  "key30": "47X7oRUUDHxiqsEnWkvaPeigwmCFmPsoA46xiryBpdJB9qV43tXPUhYX6MYQznjn1Em2KoK6W7t866PyqHWYw3zw",
  "key31": "27YwJCfSd65RDWWKc14pVdRE9rcHamivRTKYgCjEEue1E5kCH2JcEJqSDVkKwPKAiz9tSwM6x4xfDd7ESD7td8Mr",
  "key32": "GNMCQ4xLxcZe6N3b2CHVpL7pdH7K74M1YPUgZ2Nd15yz1ZmkHfTHHpLmL3RoaGGkKXQTsadWoYrFhKYMsKJxBQj",
  "key33": "3gvC4gPoxqY3HatfCU5pb5DSM7nyKiBtBt3DodAZ4PEALotzxQQzQ4PBj1uPce9X7RdJVMgLFbZoEvhENJ9d9yrJ",
  "key34": "34Syry1QJESeAtoDyQJy8f4romPGgPGUSMzHrY3FjGMBfF3aApSvowTz5ztqncksG9GDQ7CcWsMZzp3t7evPdMKU",
  "key35": "4kQqw8e3A2iuGJ1crpK4d32VvTX89JDtsvi5kdmTsLAEcbqzxVB3NTg5pQkpkNzbSeQDvvsPEwjgZywxM4ekBrcQ",
  "key36": "5ZjubP223v4nqGn5Qh7JX1tjMxvEDJE6ixpDe286FPpDhKYZZwVuLqHsbcVDk5Xv6HCjuf7xy97BNwhw57sv5Csb"
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
