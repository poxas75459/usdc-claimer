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
    "5eaoaE54vkDVEwFyYp8M2ZAPpi5VtLsksYRHPNqPxnrf9F8BZB1tpbbZJuo9izNHM9H5rFUZKVGbHAi19RJS6oYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xD1mToGgEyGtGzF2P7mLAZc4YVybkwcekd9UrDnwNyCqVCwG7mMUjwnKuvSs6631mxtrCdwBxjRkMHNsukJkhxb",
  "key1": "5xC4EfP7EEi6LLdfTfxZNQMZBdbu8yWr9CcWdz5w9vYLP2fQFfsokWQV1NXaGR2fjk7w33hSUKiMtgFeGSbcNUUL",
  "key2": "3gmEFQQUMDxoebHFEF8HSB1y9DaofWhDwEe5SyxkKkTcQXUS8XV4xYhcGZy61iw9SY1HfN5zHYxLfQrGa8w3iXtg",
  "key3": "3GtLY9h8p8siwbgGyTc7tVGGmUw6oxpJCeZBtQC3SSU2ZwVuZQjeqpLJVuAhCeeiFH7YYNosy4oMXgvGiVqA7dvG",
  "key4": "2nyB7qqfvpvht5LVpGxrFkZ4RuCcLbGvL8vsdnMBJDVFghKy5hEh2nbHdFbanmiYWSZDDdXMjYSDitfre1sMqve3",
  "key5": "47RYKMRAn3ESLGFDn3uupC25x4eXkGHE1VpAj3a8U1uQH9jhxFSYKm9nc5QZrK9k5tgix2x5Z6i5PiFa1byiFaG",
  "key6": "5GpkTFuhxFrnUBT6cHHPzGm1sQYiYLYeoaPTQZKn6MTGd6PDrHDxhywrS7cN5wGQbncEkYwmCJYanrrTiz4HRNPu",
  "key7": "56RGt9BYVkZynM2cDPi8nVhKacuEsuoCvQavMiX3DzMMbCqgKAEZYQMhubTeMreuXm4N2tGuZZzyWsqUUumvrem4",
  "key8": "2yL8nEE4RPJk9ft8kDw5rRGdayEffhdNkScq5dRygz6zGz511r7nEgWtU5tCbnzqsHXzr2zCqvgbwyenyNTgPg5p",
  "key9": "nkBsAgv7y2kGQX7G8n3dBxANVxSmtj5fUvcj7gBuZUWeMCy12ymmzJsQY9nvrMh99KMk57bjPAQJk6tFXPMVX9d",
  "key10": "3aj5c3aQvx92FLXLiQr61PD92P69XoVLGqUbG8gbRw6VqjpQ5KmRUbWRMdP8eLxvp8ufP38nQfAidQjnEi91X37J",
  "key11": "XYyPBecXzqPNLFUsLpvG1TMNzFCfLBf1P49vVSSao3nKja2aG3aVPNgCE9m6hKK9KFfXXFAcP8fpypHuHWwKx1b",
  "key12": "2gUfhFLjfZGz5QSZCQ7qgc7hyu4DGN2C3vyS8j65dLd8UNM4k5jWi4ZzYhgBUhLPxrLxEQpAU454gewkWYwxo4dt",
  "key13": "5c3vidPW38TJa3RkA6cRd1wpcmzUtW37b2hjKRe9gZVaRWAPmv2NMWJmxbiFBpjPPHiJUbx7Sx8eVWZLgnNZpkRN",
  "key14": "59QtAcdhpGZ9Tt8wz96j3V9EbXmZAqudMUGEE3B56t9unWbnbCEgETk86Zj5yfoZorNqTWnEWov1aMb3BDvZXh5b",
  "key15": "2WAkuW5XcLAwaQudkthvoNcsYVHU4nx5o82QyUFCPi3KF9w5wvMYsMRS9NCQKtV7WrjT5dZSqHdeJ3VK4tGh7h2L",
  "key16": "2ZFFENmrhmjmAvr4frx3YrhGtxMcGiPMe2UMmK8S8GEmfxxeCBQZSC4kbPFgR3BgpxfSoJwPeH8mLrybGXs2SAe",
  "key17": "4D7L4YLtji4zRjEXy34BX5B2XjmeMCgwECfTPFEMJ9KNFHixKa9HLqKyEWk9gBtn8yLBX44iyqL1UmfoyoNB4nJ5",
  "key18": "AxyC5zr5N9ipxvRF3g2WsV8HP1vbm2D3DHXvHst7ny5my56266qD3vaSX57QJpFeedZbrC4WC3Zers1N7KBnMQY",
  "key19": "2kUAT7oAvoU8ufkvo8yJ6NWGHmDUibs5nR1Rr59DrCxvsSfr5qjKHBhYFSGfx8hGuWRiC7SsJW77aC87w18gu79G",
  "key20": "3jWJbf2pytbQJT5QncUDueUmApUWpF4tdRswNvrbmn41XhitBWcphQgGo79PPbNVK3Mo46dMGizs6bEgJ4UqsC3Y",
  "key21": "2r4QeBjsSK8uXfcp75cfKQstuB1DKYYuaLkKAD6G9B6h7cZL9JVH4PqVgssvcarX2LbEkgnDx74wcDYZWqM4MRkE",
  "key22": "2G152MuzoJY2Ax9h93gmsFgjWkvZT4eyFFyij3W1NyUUW35G6Yq1okNfdR3NDQGS4N2SYmjutLWXnnV1FC277Smy",
  "key23": "2tSutXU1zd7VvjG8Mx6jHU4CehRU8XcwXsbZLGzRmhqUJXHmDYWr7B91N7v2zq9r6CUQtNzgBu52ZEJxsddZUa9M",
  "key24": "5dQaQajmpYwytyABcZzT1WRUbw4e8UcSmn9TZzJDZEG9B7scjLC7e3EsTuBT51crk6fQnWahdcajv8wrQ2TkZVzg",
  "key25": "3kriSHVo6PoK9fvyQqQZs8s1pKayQAfFSrgCJZTadGjdgERa8cpvjSWsn1Mp2QZQzfKJNrhKRz9SpExVZb9yBEvG",
  "key26": "3wZUGJ3unAVAWwd9zA63Xbk2krFteZ8cZyaqCrk1zzEB3cZPEHeUHxA9qC8KHXTnAMqALfBoNCmrjmycgMjUnVEr",
  "key27": "125u56bXAx7xRGrhtocDKtRvZvPkMj1Be8B23ib387gWSN3RTGDCo4n9UqfgEH4cB7ZWfKsBhWXWUYi8fYNZNnHC",
  "key28": "3nB5a66SwB8dZTmkvX2HByZ3NEyJoanbBh7QgdZUEtWyUrd37GEzDMtoa7YGJXKkHbvCsP2ESEcG9ys2pKe35vtq",
  "key29": "3ce6qdmB7Dc3kGkkkc8MeFhpXR5rMjxFftsHLSxpBBo3rsZZsPRLZ1PZ9n34ofVHC48WRGjWTzis1vu5EP14wyhH",
  "key30": "21Hk88SNVqfLYU77mtt3B3NDBaZaLzHgBnaSQ4a7U4p7ZQKk5i1m27hgZMk6FFSAgJxGQVbFWYPrKnEitLweXCMq",
  "key31": "4M2FmEpxk1oepPa8U6kmTXWyKXgqsATuWDHBH9QfxwdDs2Td8wFXhrMc5fACtv4UGZzQizwHNejhNsoK4zhN4q5J",
  "key32": "4sKbTWjsSbv3rQ9wpJFN6i8Rocm2ZEeYHp3E22J5DYKtraizvPn6KBr1b243YUXF7xpNCBNXUPVFGVvAKUZNjsNc",
  "key33": "3LoGgsdT6DJAhrzwS3QbWc1CoxMTwBcUNtu98Syjjt6PKgQYXwz7qL45NN2k87i3mxiSMKKyyro57HJpsqxCU6qP",
  "key34": "5QbeWheKgDzLy1uM5n2qck5ddDWH12jDMg2QdUyTX41wB1PQWpBgK2RaawzcG9kjbiFcWPrFEbbcx4o2gDJrSHRv",
  "key35": "55pwuD76WtK4DZAWAX9rdxdVBBGKJH3bF1kbLcF6XKsU7Z2fjFHxUDxUMzzG6dwbeDjxVQ86YGnbWgdxwMR3Yvto",
  "key36": "2q2wrPxGixHhXDnrP8yBDsirjkSaHb4WjA7ufbrtE26NBT8jdtBFjTsER5PLR26bZq3WR2ZxpgCSEsFLuJg5WeAF",
  "key37": "4mCz82jhaPuoQYR4YZxRfZVNP35tyBLuEPpV3NRLRKGdq4JdDKxNrPNCsoFcm2npmW6ZUJUFXSrd8cyMNfS4wDsU",
  "key38": "55f3RrdkinHo8BShGq1q4W8UZ99xMfE7ytrGcAUccScidSRDnqBT8E3utYbz6Bsz5ede1EfiAUEsMKHCG9ZUm6eB",
  "key39": "65AsdtDyJskUXqe7eEKEYpZumfnY2xt7PUU1a7n6dERgYoy8x6g8vAJ53JwxkXYgbouctigN8HGBkvsuKuHSZ64U",
  "key40": "2JbF75FCAVG1wQjK3c6dUFwKzp6s7BiTyDormcmj4wkmN61k6FwYxcR5pZdRm2NVjLtneYGvzbfUm4feFJ2poyd4",
  "key41": "3TyFTgaX4WMDfzS3tx1q2Vjuy76aTwy5Qnbit2g4bPu6K5qKWD31kzQq79nkJfsmuvorTYTByv5m48rtbjmKpH5t",
  "key42": "62GPpE3gXbhKTcSnJUsWiW1jyGqRqhANcdzyzvnizjVKRbyLgq13w7nzRW2UbGW6EoVaL1SJenAd4EHzwruYgPMr",
  "key43": "5UyrQjdDnBUEuLExVgc7dCMpLXWynxuSR4sipjnC1mYnzVGm5ptvWaTLaM5Hi613U31Fa6GFMeQjNibCqcdryYwo",
  "key44": "5CQHHibnLBXriwoiYoPPiMocDkg86msg1bxwpypnmwwTabwEp7zi3kEyifWCE7h7aoXfbeQiP1nsRdHTa2XFxP1H",
  "key45": "XjqRrdzCKecm68FSHvwoDdd9MWFDsVGFGQzorXRHQRnt2svjvNMDmywpTzZtCDCWcm776cnFaLTR23ZmEUTFNSc",
  "key46": "obJZoQmt5Fd8aMTWbJ4Qh1Lci4PXK3ZF7LATB9xrqMBezj9X8EBJyKcbzesYNPRoCfXw8bvTGqcPH5V1r5kQfz7",
  "key47": "3ms7zJiFs6y71fhbQfsbTK1zefzBywyNy9G9Yw7ifJDaLSkqVpbSeEPvSQvqz7yb254YPud4JPbdJVM6yEwys4vc",
  "key48": "4LXxFeYFiFcJUmAPeSJdYwavybuQMeUKUQZygoTbQHi9CPEBdNzJiBbRyYEmoRKwJh99YGk2RmDfMphLoGEypaCU"
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
