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
    "5basVeY6q8N82CWXr3u4akNDmkcD6RGzSuLERzbGWxhb4FCVqiJAgcFXoq63nJy1FqDUTYcLRhsbPxGGTpxc5HZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JpNECNwfyoh3MxUwYxF4sza82D9ckMSkbXz9yJX9kKx1KvsCHxWc261VS7z3L6FtL7D9gYwMPkZJje3NWGEN1SX",
  "key1": "3chGsSPMijwseVknTENryoe9Ri9EidF7FXny2YpwzhMwKiJ4qQbwstgb3XrkQ5v6eEXTqPtBvuCY2Eoytx2q5oDy",
  "key2": "4PJ3CzpGugs2rbZHCXwdXq6Rn7wezWeDHcHb5phbMozM86ERfhDN7nYDJsM3mZoMAtPTo5vds7ori2iUtcExtfDo",
  "key3": "2q2h8p8oaqj6hvUFY43TzRCj6Wd9ApcmkbjKXJPQuTPSGDNWcDoq71wHUahakDBcD61L9sAUxrrERkPStCGHHDsa",
  "key4": "2epjnxiasrLY7gsZGtihTqse8vN9TPK4ysZWyQNANZPQCSGmB42cAf9PHbLDLosfECZQ2CpVcon2nAsjTNJnsfK2",
  "key5": "3kXVm8ydQEKAyvfi1jF4qZJMuDdXZg4b9ag7SeEfJiHLzdDQYuqQgTeeMHvSFb3BDkquLbfjseNfFt3jcxaPp4sH",
  "key6": "5nqzLyTEL1z6SkSJ3BuFiZrhAyTSNeMKsyoxjeThxrqoeexhCY5MhPAYUR8wUVvj6NwGKVMTAifvjLt6imaRPBcC",
  "key7": "4ayQw6WwAqznsojd2HrXHTtHo4o7CrhB7arNXpezo6ATV78zx3pNnhvRXJUUQDzuVp6LE1cXgJDRm2KrXv8U8bBR",
  "key8": "51PdqmR6e8epvSkGWeTtnTJVkpAr86oWQ7v1gB3Rh3PpsUeRBxV61TYTCoHA45UNZFH8qcc8hkUEjWKYsopwznA9",
  "key9": "tnj4U2XrGQ9oBPL5327SRyHQiEcjZarswoCXh6zuwdG2MraQZuHhq1jbfwuzZuDzi9MuKcToK5TZ615hCrYvs9N",
  "key10": "gQb7MoYLJJM2Hkdz8qryVFp49w6j51Qy5ukKHewdVakBX88ft7QVbkqpLQqVgMVtMroyDREaK6zVqUTBmWRZRLN",
  "key11": "5rwxVKHo36xwVdbnfkM9cdUBMSBZ5pf6HGQ4u3D3YrMWst4FjTW4ffSVNzZCKTY9Lx4DMtnhb3zQGkEhsacrKwgK",
  "key12": "3Au5MNeWzsH564PnSLb4kHHapLUjJTnaoTNS3AWSpjeF89hXKE5MBqJVbqzRYufvTQuKiWegAgMMKiobqQCwcmdM",
  "key13": "xmfeuPjdH1ixXkeJBBLDmzftcXUu77WiPaFV28ijnPLXxfnRC3KaAnmsswiNKd7XtjwnZ9Ky5KruTL1hX5C4i13",
  "key14": "3znwM5weoK7hLgYos6JEjGrr7qKVySaY1bWTcj85pRjj5WBe6JmE769J91h4djvGbwT3hSwG4EdTVZzv8bVVyNEU",
  "key15": "h4Lj2xikL2FCB4nEX5VQAn6owm7LuAU7fs5F26ZrfrKFtmCuqKpAHC779vArVzgCCSVLEwQ9JY2VEjetrsP9DAH",
  "key16": "2s8Smmt1woC9HGwen4h5cVxUPYDENgcRkTHRNeb1eu4iVDnSVSXkd1YTMA8yYYTeeMcSXd48B7CyjXzo1qbMGDj1",
  "key17": "2PeuETkY83NKQu5iwajazoHLBy8SYHR4JM5Kdm4BRhyiCHjJqi784wCivZsnmkKwBgqpuJsdhNA9yLDYavGtETHZ",
  "key18": "SBD52ymJC1ytPSqnrZUnaGwx2CTX4RjCMmmRcwPmuNdvhmMLFUjK3sJ8RtDuXSSicxjgssM9NxLtN7bjEdcQY43",
  "key19": "3ce1dUKSSWfPRQWgVPhYCtjXrVbjZU5YGaPPsebuBm5B4QawJyqXSHUqtwMehHkLsZw9krSaxXbWfSqNEfAgxvRD",
  "key20": "5yhjsPmigh8UDbKEmpAzU9pMtDkUUkAafNX78RQ8svMDc8RT5Dp6FBUehq9w15rYVVMzcuVFNyBanKi1p63odiie",
  "key21": "2BiZe6yDz7gjLzzWDvokHgYXdqziwofdwiejCPLbBgW2JdsZm5huk7aDGdMdUkrgFTH1do7oYr7MNVHpdi9o9Xf3",
  "key22": "2Z3Q8VVA5gnKLarHtC2rtFYuo5r1QNYEshibW9wDp82KEndPQLn2Sx7EJAR4pqvt6jeZwK5m4tr66Q8Gzgsi2EVo",
  "key23": "jULAmQFtjoiRqqKbviUUSRr5EPh2QecW1AHbUkZ6HsHKkZSjy1TQbMBcgeHPGd5qic4FQiEPArWVQczQY2yV46j",
  "key24": "3W45JDN85Lx48YTeuWUzyKE69Hecr9AJwC7wWNLVSTeT8ZV48xta3yHHALw3bLhvniwwZgrRfmr2kcHunJLkQcrR",
  "key25": "23iHnU3uGpnPBYiuuHM26GwasJkjgQ1igbpL8JXGkWaVVjt7YDtRe9zNWVX6GGBt37jzaa9xaSYGfFi9dDcpsie4",
  "key26": "5cFti8uD5REvkyELDm99G28nTEeXoB51SSxtghMdVET4HcMeKBYM1RYcFi1QRhVJYkBsmpoPZiXqABWrRtQ7feeL",
  "key27": "5iEVivVgiCQZeVJ8SVMUmSzpviANDjBs7GP322M6XjfcPumeomUwPedojtnjVnoKNCEQT9L7bEPyJA6V1aAYdrfx",
  "key28": "668qe3QAFwQQgMfVf3CGkeyyTN6rpQgrzujMCjZzg6YzkVuJJk1ecFVzmK8oagYV1Vderrhxdq3HiRj8hW5qkWDS",
  "key29": "2XBtvQRQtQtJdxqchvfRKU9GuxfiPkjmQFYnmmxac3D2FaoUFURDae7hnq8bx6kxKXUYjBBgae36z6vJtfMgy8Lh",
  "key30": "5m7EaHLLk9zzS1w5arKsSKLtUAbPbAVEz59b8iftMp2vgZvd8P8BtcfSHP6aWskRKsGjGqnKZMa6qBK3VSoEbdbe",
  "key31": "52NMYHajgbV1wJJMJqeGceTqNDbfJcTBTsb4fRiEcP8EWFeiyiddaMP7U1MmY34gjCTtGhWuZYrUk9rbj8m69Bth",
  "key32": "5DxapMpjE2NLRs73n9r1pmdVQzqq4FrqoCh58TiCHWXTY6tbHWrtLwmT3Z4zFPYxtsv6gikZzzngqiZAXBRYWxuK",
  "key33": "38F8DV7cLwr51ceNM7iXPVcKsf1dAmDstc7cC9uvg6vKh4GzUAH8Ex5XAjuUrvwLx5oBWJCEckEihW3CPmCJTiJ8",
  "key34": "5JWrjkqqp8LEbediD9KpbXuJVHWpvAC2bARWnTAKhVmA85hXF1db6qZXa4LsFwqDqYngEUwBRJwvipV8kDu3dC4b",
  "key35": "hHyGbhQgAeC936JC96RsfxCo6ob9iwzieJmZGn1r4e3dQ5KGYXQY4Vq1uaaib6tvxWJjGvny3m9mcmkhfndgUrd",
  "key36": "2u81mrXFe7mVn9BTrsrwQNitAFpBMAn9eyoSZpUE3Bea8oUaLkT9kh7rYpsuscuqXzmcHcM3YdwFDKbS2Dmw5XXD",
  "key37": "4yRouG9qjiWPG9EoD2ZXVvR2jdhZgMfbvucPZ4JxxoH1oeXPRuSSxp297gBiyokL71hmPMWNFc13GZ7jtR9kQZWw",
  "key38": "3wM2T4ePswhzcc1CPXqW17S7ZZKJje36zUrQvnTuh6FCDcwjEDfKkEiFpiPQCtyuMXRBhouSX7eJJR8JDKB29qNV",
  "key39": "2S4zgHgPYNXoPDSyVdSMKXVzyaQ1CKHKGfMm64k4Soe1xpToJazz6LHXNmY69xWHCW54qefziCAk9uxvo1VmsEdL",
  "key40": "335gAxEEcd8XCy1mZyBbuavn34NJB3HpXTLKtQWTFsH5Xk83qXV9HPtxSqbUdwGqiPwrPcicFMDBbgEGybBscwPH",
  "key41": "iqzdzmEuWhhP8zrXCbh1bk1bJHbSJzBrNw8rthV46qcinjkhuUhHBiPrKD3QRMBzQ5ZjUsvs9YoPTvZ4uMvUuaP",
  "key42": "4Y3kKbbAD4zCo9fMfBfgSrGPsnNhF38xkbweCpBM4sTtUvpyF1JPxptop6TkHhw3D2Bq1hAr2vMpXTMtTWeUW9QY",
  "key43": "51AXvHeMjsiJvZkYZuKHXrbmPxkB9KPEHiGEUgVTQ5NFY36yTaXveWXN3gDnG8MoWdwPA4sJko5LZHThuydKWMKh",
  "key44": "5hLV7SzXEGjmDHvkMvSXscgz1DvkPQ12HwCSLpxws1ywULNz31Htthv5ri6Tn8W1jiGK741BGeGcdV4d1pdJ5Ds5",
  "key45": "3z3FjV8uHRFej8Q7WjdYF7d1zE1WULTCRZWKHkYC5re4U1DMe7vDsKrJigiQRQhRVySS4e9qHxX2C2dJBuBX61DU",
  "key46": "jC5ntnTZLxUF3VSf8YoMt285GZj8sRgL1F3dKcjueNe3H8H8mPjLiBzSik81sVhHTsBN85QWMeW1S7sd95PeW9z",
  "key47": "5UKzKDLbfsB2fVcjz9YxE5GBLCWjjFnFEvbm5uMqFmEt5uENRcqpyxV7RWfCtNXCmsL6wgjWffkS7oKzmW3h1yws"
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
