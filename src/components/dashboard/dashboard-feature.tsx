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
    "2PDSFGMczVdsmeYyybWAXojZ4z8jLXZUJuWHHLfpPWvrqN6XABsYm6tvbKsnhvYw9c7Sc9nLY5fw22R1zKMx29so"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KtegELCLuSECHAEq5rYqYCTMCiXqoM9rjVKLsQ3ZUXNReGZ7J9R3ExNHiXTAo5zWrgAgAUsK4f6qL6iUvyaAops",
  "key1": "3m3qwKG3iLMG9nXp2eGogLESmWukvTpvTZvbt3aoHL3Shb8Jf3ZWWYzPa8AeBLrwURbmUgP1MvdGJTLHwfSXvQD7",
  "key2": "3CiB6GqdfMFMEDnVUGyfxukKr8NrJZWKDHJA8jHAxuvRMaV2Yq6YotxHBCzYj3Emv8RKKxVGAm8YCFoEtY5tN84W",
  "key3": "4G6mF6UiWyxxjsrtThGkXxLVninKSqmQt6fRL9GBiZBGFo7sLWpgKGa2WptYRyz8KBzjwMeYizp58BWhZyBYXJrE",
  "key4": "64cU8ErsXQKAPQcTHjHNiiakNeSqrJP3stb94jF6tGDEseFvE7GenjnUbyBzRGPDrYrZQi8PuZFUixpTAxe8RPM2",
  "key5": "E4XzhGqnrEqLXmU2okMjhxXuUT3BYBoPL4DurqZZWSq8M6yCCPjpfv5YiZbrz2VQ1itPJwVvGfzZTsrQMXNqmvM",
  "key6": "2ZaBNDAsUUX151m5cUxGiEDTSUisJYyZDu494WewNFik2UX3RctLDUkkDXDp3d1xRsRwCsXAe49AEUkPXaAPKMFm",
  "key7": "3sdZxnFdZEEcznLX9xhaxYMP4NSbvRDzjKEMnRsfnU9CrpLPMAzNwmXZiWVTvVjU3gu6x46B48xz2MNhqtXetgmP",
  "key8": "4twRrfVYVjgBa6q94QCCxYcxBJPQ5eGpPCZMpGoiMspphfePJkurLniCUMDkpRfcEH5B5TQDzJk8rRmShyganJso",
  "key9": "2YZ8uQEKLCiD4JaDP4VnsEWEKVwbb23FzEwPACg7V67iifHtkEba7zN3jcUd8TaTb9LvxwTXcWCu4iXnQqGP1b7k",
  "key10": "GAt4z4rbr8cSuzditjqfYnmtgqG2mpX6jCoHKqMjcAd3y8vhVzF2rxEJqgY9WC5ARG6o7t73iXjAZyqBqdVmrF5",
  "key11": "6sPCwFTKE4Tqz8wzp3V4KDbndKY3aqgjKXmSgo911KvKQk4FtWNGRtuDjoMUu2LMWve6S278cC6vTgMEchW1Jhi",
  "key12": "3UEuLrCQAie4j9UyFEvnnDtec83u2XDdvMxWXHr8gSE8bGDy7CMRAdNmj7DukKxz6SoUSZP2vbqMkQA8ysabieYk",
  "key13": "3Z9b3DLjhDzPTBPby9NMKckz4oKq75dfresubxsnTyZhwEpnhpq2yKuyQS35B8ry6nbL8f9aWHNUognPHMB2fAW4",
  "key14": "3Zr43hPfJH7HDH7mBp2yknuQ3P8uMwxFgaBhgusnv8Q5qUbqYm3fVZ9X9FvB4SMJfR7jAGtcMS4bnpxWF8GXqgQ3",
  "key15": "2hbHHN3yMxevkRv9Ms1fhhGKpQGkinh37qKmsAb6EYRLVMzLSsSwYCFVxcahPdQgS4Bb2r4jF3xtRLVcWY7C2qX6",
  "key16": "4GhJhinE2bZSbuBHY71pHRKqUA1kfbTCpei11zw8EFWx9owaMdqy2etK5ePirLHUptvdADmdAYZzfRzygdpFojNe",
  "key17": "3UuSK6UYes464tzR8AJmQQKZ9wSjfEGEK5J7JQ3MTwr1ZBfV9xeZnh6tohsAhmYrbDmdJJKiRhpDUiWerwBeVKWN",
  "key18": "su8vzdtE2hbzksfzY4RdFvbCUNnuxjtiU8afQaNfPPhKKzki4BrWQDPMq6aQDfTUGK24FSSjiRg7BtMBitVymQf",
  "key19": "5GhaGZcFLGTzTUjHGxtJC6aZf5PkHm641GCMW6Uv7sktamADkCEyWUr2aKweSYEQRM9J5vWS7zdw2AV2SFcxKz6R",
  "key20": "5NR27cQPCKXjrtUJq5JCGhyK1sq88ibER2a8iZT66sFLpBgaPkbZYUawoCtfsVfJHRuatkDB92CUjbYvwPwSjyE",
  "key21": "21tPM9DvGsszbWfWiy2e17yfECVSucLwCEkjVNdYxSiTpwDWTaazBmDKcWRgzxmxrzRNSHmF2sSnvgjJN3QYttaL",
  "key22": "PyRw5G87ux1zfg4hKKvjDdqQ5K72oA933MGWgS9FEoMDEQZ5zE6cEN684EGrzUgWEwVzJGQVPVogWvR66dVxe82",
  "key23": "3KXQZnb9VxpE7TH3CAW4DMre7Rr5YQBwT3F5cuuVLoZzDNPJu5iPuF6N5TeKgGhzhFtLLFL89EPNVXaYc7PrrxyJ",
  "key24": "3HEUkvk4xLpRo2pbg92jgA21sy3yj1a1fiG4vdAZptkKnvwgADiMK5NDFXcvHNt5Zr3G7BnH3uM1pf9Hg7KQCoeN",
  "key25": "2NLVDqEFGgrZKnHDYef39BWaJQuzJLUAfwwnrXQRHUC3bd8uLZJYtReu48cXcwqa7MZkGo31EzwVrpYx32UoGxas",
  "key26": "49E83tjTX18huCAzViRSa4Hd2G2YGkXXjEx1AZnkTqNnzL15FMtadZdYmfVDoLmSuM8M7ffTDxnckScYz3iUT3bY",
  "key27": "4Tv5ZgNvejDsBo9pKd8qKABcVeiHq1Gp3QtMxzxvF7Xjz1UMJYfkoMV38ADHXSyPPS3egSo2QhPRnVXEeCjG7R14",
  "key28": "22pLp7KkG6siz6YHtyYUqvu5Fw23BvnR36EEWWbrM5mUhKxPi6UQXYVLJC4F2224FFjru2Dcg8LP28tFCS5EDdiT",
  "key29": "2MvGG4KMbNDVEcWKjZ34PJRnjkaz7EQDhpTUzCAU52Bza83y4uW9jekNvHcCJQphugbmzfofhFENzXQkcdC2zUZp",
  "key30": "4yMn7p3WUvWBV2c2iK9bZieWzAtmFnicDeZSccQM2rroD7BG9MUbsGsQzkUZACXaBy64gEqciKh3F16YVJ5foUYo",
  "key31": "4on5WombWmiqHB1ij1oFEnurgqJbXkuKzZpnQxEbmNbiGfiLiDmAic9Gw65Kk2B9JybybwWafQGU9wzk5G8WRguF",
  "key32": "4j9a1qMavo2XGkBhfYrD61Vf1nGFb7d16W9nKwMqUxGVhNLuabABjdrLRF7qGcAuTFK24UckrTWLEF72s2QrWSmo",
  "key33": "3Lmx8WEQaxwjLDhAMZyHLZejcQziQU8skkNLCKnctWQL1jKyuytiwQxSambug129qDazpa6umeTjqCtjKNwR8ydT",
  "key34": "3rX7VsujZML8NQNuXKDGhWwVqKZdxAWTx7VT84T2J7c8eEW6PmokZhnnUKApF5ueJmcjvNW1dPH3JTNKkp4EzoGe",
  "key35": "4Mm5akXsKF4wgDoHfnmatbLKjAJWZafJCo6HHHJudnnwxKLyov5pT2m6VmSMrL9anoM1wExmoMPCnWnfbfktEBAt",
  "key36": "TLkBT7hfPhn5FedaiZctkywkWBcBPtQJoYtPzftaQfPLc6NUUB8WLLnGS5BCkEpPd9sac859rZWUhNNG3Rw7gzP",
  "key37": "FDv7d9PXXFKvTkcUjTpdfZNMhHigxpAuPVwqvFV8PJnbnQaTyxm38YfzZpUxdfVvobgRJYWunbrzyQ79oHCRaZf",
  "key38": "4RpwTsN4novUmn4rzt8K6BCJidS3rxk3Q1Fau8MkveMQEpzUrthDx7dbjL9N3PhUejNVU5YG7YtjVq6YsCiPV86Z",
  "key39": "2fKGjUQzcicFc87yb4CFFMa5aE5sPfsi2R7SKuMPoZH7cY9NJkdbjyH9GY3Yg2VCwawgT6tYgS4Pq88PvhVRph2L",
  "key40": "x2QFeryjoJA4XY9hCHk8HBqtraE2agBFdAiiCGjiSADnL8L5SZChv4XHP79KT2qu92EeesUZGgeB8H3TiXnDN6F",
  "key41": "49kTYKE8ybXBtVAKyef1fderoYfxRUBkLH6cHVKhPPbG7upy9xzmd92hR1EANVokLwRFxzi8s5djCTXLVxte7d6s"
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
