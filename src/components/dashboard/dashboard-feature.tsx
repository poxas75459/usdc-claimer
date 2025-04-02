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
    "2eedQaDitNfU9rZ7cAbE1gmVq4mAGZPmJhx2TCpcNd9d7vkwgxGJfvS3Qg91mCMm248RW211NeNbVcnWUhFwdS2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w1gF6VhxhWvyZzPkHKLntpK9P773wmQUyiNnFMCFEYmpHegvhXmzxcds3dLCb81KwjxFDvAJe2G29tBf5E3LUGG",
  "key1": "332E2sbgKWNgu3R8349tLsuDdfoN7kUSjuKn6xqXKHS9NXAUrsYXycmsrYBbnG5oAi8r381FGJEXF5bWWwpZupno",
  "key2": "4qEXShSHd6TH3YTuXi7oTjtMHgAwWGtuEMjkZhh5RKkoKD5bHKG9ovfeTT2DYtMkzgR5y2yYND6E3CSfT7g14sLy",
  "key3": "4nEb873WidovohxiR1JK4Z8XvAyXw7HJtKFyjZQgSZWmEY8ofWUWs9V4dFsuRN9mbZ3TkqHYGJDUfDMDpcvBFj6s",
  "key4": "36b6W3XS47zPkVgrKLVUdSDNjianbYHA6C2qdD3mGXmRZibvVRQnFtJ7zdZjbkZNotj7gV1ReseLR6yLMVRYs5HX",
  "key5": "4GxasnkcC2ZnPQk81QMT1bYtd2BZGqkw5ypkg1pWc1iauLNgvtiuaeskexKyS5Lm3ZcbHwZtvUQ7V9dvqdiJGB2Y",
  "key6": "RM9cUxriCDs5tYpBMJ4tx7KT5WpuFiBX8hSVQqHbdWdFeawd32LSZehJCWuP9Evh3cNxw7AEBjSNxkaGTdyeAzv",
  "key7": "4iWEKDQaTWca9CrgdvbtX94BcYCbwgPcKaHzacX6CPM7Ug48iY69UdVGfSCrEpLvt7tUocJkyLtpKv27dYvVTDeX",
  "key8": "5Df8vKqCdgesiNtPSobULJHZDy2HRrBVTE5ygjy1zgbf33e24bSFVvbqJKS4iv3pgpWzzz43t8h1VPLKsr7chVr1",
  "key9": "sRBetbCedkf3YT97zNdkXQ1vAg95ArY9tf6G2VKwWJuKRhCSdAsgry3jXdKhaP5Wu84mdeW9Gcezay5n8rDyn27",
  "key10": "2w2CLJuEs2hjiAsze5zYJon3hpgLrGQ5mE52X1KR8WfsvUcy2BnFLHvXMkS2xD9uPuAxH9iHm3LbmodHafocKyXx",
  "key11": "5zet6wQCg1cpzMTWZjhiZHysyeAMEHB4g6huWyDFksgmKCdJiaA2Hkpq8VB7Wvi5yGyc4keLwEGjBqHqZDKQchay",
  "key12": "54hLABwq47Lx7HJNpUnr4Q31XFRWNAtNM26K7wBfJ2Uizt1ipytJS7tZJjS2WaSefxguwQkqRtKxMVt1QTorNdmj",
  "key13": "zqXmE3W7R2UZYUKwb792rTfck65AzehdmrNMgnmzVEnD4c8zPyNkuGWhyN11KA3yjZHkEiKpAZsi1vsxHp8mh18",
  "key14": "3SyqeLkZX7pLfPozqh589FoYTSJXpSo51s85PUVmJC9RiDhD9Y47WcETCWtKF9pr2nBRtraP47RAgaq274uqjp15",
  "key15": "5JuEAVu9a1qR4idoXaR556gJL7GUQTmoU9vqM3WRq9GSxpfDkStYo1GZQDke8t41qGjNJ5cyy95Frr9ahvvhUyXU",
  "key16": "5ggCkqxxR45u67ogcjaxiseqvnUnvJAgF88og7Ta6GvoKKM2JMhP4ke9rfcitrhoLbSq2zXqGicpRUBV5WMxS5sM",
  "key17": "5rwmYm7AsnWH3NnZMV4wsi7BiJtJgJYVZhZ2jC7qCBjDMmbaRrqtb7yQMC4Sv4Ecfxucid3Rwz2jLtm8x28PKKo2",
  "key18": "4zDVBQawr2atCLUAxKYih4w83jYi1Fhx1KAzzbTGen5Di8W4TcPj9KLMuhUEVzFcNzf34XMyGUXTYbbwUs1nRxHx",
  "key19": "2Y8deNwmiPWoPAbcqBjHUmwRxSAZnBoVLqAa1ESJJNMLyqZZ5pymBtCdGgDHQUL2QVDppoNzAVk8c4QkNCvZos9C",
  "key20": "5gae45QAoayhVBWRpXezJH79tw8zNEvckmpZDLe39z4Ecnp1r4BXc4vXf7nZHo8FyDu8Rwdg6FpNJyJymhkLJMeG",
  "key21": "5Z43qjze59pU3iVBcpAFszDeymP3CkqJqqBDaJbBDMyN5VnP4vGQHsY9tzcWfxiaczn7nyRtytKni8KhJWnx2jb",
  "key22": "25sYoGq3EkNgWVcsFEds84H4HCZFWMq7GVPpkwMz6KwjByijUEPvGt1XfbVJDkRvJn8tXWsTUid3D1eAxWJFcMgF",
  "key23": "5xqK1k6LL1kqCVuNCqKQg1BhsASydGZ7ncLChNrTiM5S9bhWxtgFwCF2BVZdVcBYUKcqP1PnbBxBJ1nEmoZ2Jeeq",
  "key24": "5Yp4hKLGnBJsKQHi5zBSTeBstU63mF7U31LjqmiVmCdy7xERu3dtzBfb4qk2KidCpte6WVxdkHLb1pc2uFoVjtAj",
  "key25": "4yLnyX7gKHmwtmbp6ybammDsE3mGFenEFnfyfbdP7C5zbwXDkK9EfosavZxGJAEoEG263vNe8ypqeQQNWdHbaSYC",
  "key26": "45Qe9rmLWjwuzkD7BHnXxb5Kwhng8LiynuxYkgo3tnERhRZQi89XuHVZRHJ5udMftJv1hFr7BvJca7jcF63PCEU9",
  "key27": "5LeryQyjMFZ2a8ZHeQVqrcZCvCB1GXAExNANFh3hY6ZtT29tLju48gRcJG7ejeRWG5K1daNxRcP4fGAXkqv7W9Ts",
  "key28": "4LRoyL2NEDBw1JWSu73bM8wyWpxG17UaKZetdGgKyRLDRX4E5e8PvheJSUSx7Bn58PoQpXhr2SCK9637cs74hGM4",
  "key29": "5MEQmdCJaMRhhDi3e6JJ7KewnzsT9sYDCUYS22PEsFZUNZjcBmUDFzGbPLWZa4NSFcQiMjqcKQpP2y1XiREeZDxQ",
  "key30": "4wRvZhxy1zSF2Y8iauKK3z19Hrgp573JM7vtuCQu7bAypXtgGBFGzAaKCKmzNdXfmUHaFqU9LyRNG6YYKC72MFfD",
  "key31": "2h8HZebDLakdQk3ou18USyfPb8VEcaL6cqY3t53J4EGNLdMxN2JdkJDNmyUyY5b4TyWj5M1aB1EThUpLoAK834Wf",
  "key32": "5EQHmHZ9biw5KpzitofTPYKMWjtX63VzP41cnf2KccXZvJniJgPAudrs13FQp7mwaf2fZsLvW84o4N71avWaz72K",
  "key33": "3uLW5aPUS8y2VfDpYJTUPT8vyXw6PGeKsM37p16kf1cEBW6wEwL6de8wFZNhSRcRq4FeuTKGkidS8k8ZYJ1dZ4je",
  "key34": "4DSRHTYGWkWVgeVPtSt8yrmBegtzRiFR8zrFw7qq3hFB9PLmzd7uSsZJ4d43LrAWs9NYMWt4PHDHK6p6QMtJnDJB",
  "key35": "2uWsTQ1rRMkiSC4NVneEzLY2ZmpAEnhrPZAzPwu2Fqym9GS8c1MsZdqDUjj5XSbM6TspmEseYP3AsdFJab7o3YZy",
  "key36": "2JWp1LAwnBedxr2NcjMP53eeYhfDySw7w8mDXaqdBp8NrS92f8BMEWGsTXs49fW5rBgmrwCcKp8RnCNhgU8rJnWR",
  "key37": "3niWyS5UhEHuKserV7xoaP823MxV571TU9aQZywTaxezMH3WepMV7xFutULQr36PPm3acBHVuZsjBL1nZneLB3bR",
  "key38": "2SmDonneDyPFQ1XuN9d7cNnJFNpuzN7EXBmcAAT3Lk3s5WT3ty8HmeyYhCavKhs5T29LgENiUsAtBytVgLoyyoNg",
  "key39": "5xr9dP5dCqQCD8UGYB6orZZh24u6a2wQMU2rn1cX2sgErRARXGfQhFwqkHEYhN3xoRRsr3kHu4AeVusgQQ6oLfUt",
  "key40": "5aFettPApw9jNkRm7D6mYX3NtJ7NW2aRkSpppgcKgxXKzwarXAV2L3692dBhVYTbLXHf1TzpL9aVZm2cRMSzEv3c",
  "key41": "4di8jJiLjSaKnc7Niuoe3hmpX5eSypAHD8vT4TXpzwbGWdJwmtk8hGesYpfdSbR19knEPRMsNPStkw3KTwgkmeGS",
  "key42": "5jGs8ajrDGyqYJZ8pRaJy47v9c3HrAf9tdSWKYvb9nNkbjXymm3NMtf3gH4JATYcbAnZfJgNrH2fpZaVVUm3ayP7",
  "key43": "4JrVZz7gopB1E4Pi3xF3ko3kYL4qMDAnTLwmLSWmbVV8Q9Eg8t5956bUC5LYUXN4puSEKFeYhFB2daKBnqQDthNU"
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
