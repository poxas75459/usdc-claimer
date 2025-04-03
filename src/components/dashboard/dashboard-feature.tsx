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
    "2h21i2BgJmbytNyWnVWY7r1X7xJSkjSD2M1xxQZYfUV2kanZP7rn9uMmi4TvibJPuQxS7R2UU5xpMeZFBmLqcTrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sV1NPgXwiFRi5CLmGezu5bPJEKf3BibPhnfyRDQxBhfJutyL8Ss62iVmkGSuwBVBJe1h5VcJRoS9yamYjVDsJHC",
  "key1": "5YUNFguu7xD5Wd183wZfCX3REHSYv1foYS3VUkPZ2fq4BY4T2ZuG1nhXY8pDDSjpaUoNgUHW67RRzziGMsVNbtDD",
  "key2": "3pF8dE7VHC3xK1S2Uc98Uguv2SiCuNe5fE12cMmbb32zLRbaDnDnet88p7AfFto3Do9Yc9W2cacrSYHqFywucbS6",
  "key3": "2nYxxvv66mHZQ76Pj26QAmn28LufgHujxZx3xJheEJiKW85hvhe4ghVVSStkBGUon9rB4RT8ztz6KGF7MnxErMBC",
  "key4": "3DBk9VFonT8LWD58J1ULVTJ2YoS9Ani1Q6XnJGJQ8cquFKJcuhGJD6iSB5ieqDBjiiFzynZDuZdexonkQf7T4KJq",
  "key5": "2siD5hNcX2A5m7ANB6uUFXUjwcpMxQmqNrRvMBBhYeP31M7mRgL9VNyxBvHzCbnWwfPAopJG8x1ecPHdWBDSeRYM",
  "key6": "2V34iXJ4Pg3WJ18HPBKvmihbCKYS9wXRAGypMpbx9sTWTmNhWGrCorKXvxTnWNpfLsrhqSmD29M2UFnXUbDgrzKA",
  "key7": "4zzUjB4S7bPqTM8dXfPW8XGvtzg5jeyncvtiFkF3oihSCd7dPusGp788Cn7m21X63YFVwwwBb2KAPyCHtsB8jwRy",
  "key8": "246KDDWME9qwBgrKg4t78zVVR9AynPx6ohToSUF41FzxcKF7s5xJw3P4GJ5Bbz9YmFUGNSPcqoRgt1yGsSQGY8RD",
  "key9": "rQ2enXervF51UgG9vJDLnmLRKhrtum9ud14rLnq9yY5vyPK1LGA92P2ZMv3a2Mk5aHMnEzYFc3zsyGT1KdGWEgk",
  "key10": "2n6c8PEsQPEr5TcKpgLxc3Bh5oYTxXSM6fXDKVmm4pXCzKqUQraJ2HADWLXVZqLi9TaAvzWCCEuRdTQ8NjRVA5tg",
  "key11": "oVy8PVsT7eRwtyWvY3W4jnZoNiJmm2N3K7EZuyxwvTrVSZTiX2TN8Gond9gxDw7GzL7RV6vfRe8r55XC1U8Nzi7",
  "key12": "2eQ2ytAJMQnuP8Yg6AUc6kCxXKjAwiyivr3ZNhHb1UHgZaK4KiC1e822v8E5qt4qyVtzUYVfYDgoAHRuRzUxdzmf",
  "key13": "4j67u31FmW6HG5yB72aZBpeChqEeNPyBLWY7DSrm2CY739V12AvLxEsiKYmf2ZGjwNGor42iQSyHut4j5qkZekuK",
  "key14": "4woPk53sm5yfp1wZK6wX94cCT61bbrUcQHYE56yMEtsaV9NVfje5Hb4VaH1vZgvd8mRsUxTW4UdA3oYz3VjgiEnu",
  "key15": "3Utf4tHz5JcM655GoZhQx6sV5CQcJXGhM7cMs9BaoJ45Hkx8C3iTxS3d77VXgAFQJYUQrGWEGiUFgeWJoeSZ5F5i",
  "key16": "4mpMgiyiTP2TDEyj2zVAm9fk8mnBPsEk5BM7ZN5ty3cPKnBXraoP8kVPjpQjyJvaY8GSQx2hHSVgAoN9AaqphWSF",
  "key17": "5XdFKvwoXCxeGmSgqBFLcZs515WQnpYA3wWq4atCSqdtxcabnTzi1LMy1HQ1aSqAn8cZHfweurgPayg9hVj1tiqz",
  "key18": "38cgdxiWUuRQMjTNfUwtD2avcFd7riwZMzMfMtP2XBbHeP26js2VkTr7t15BNQyc9oLLDyV524CGBq8YLFJZJDt3",
  "key19": "2TgCEinQW1aNFyx6RG3MJvtg3eiYRJy2HVyxGrvCzMYqjGgkyCuxdZN8g98r7T1ceCpg8Lccx3HxwEFxcDEaMnee",
  "key20": "BetTrCUvcf4ViAdBxrJT5KBuHRxzmLSonbyCuh7Vt4PGW6jz6oMSx9fBB9YNiW89FpKjkDMKRRS6jybDYMaBmCU",
  "key21": "4utk81HCXNCe4MyzXD3fuo9GLN5SzrqWMKBNgZAs2kJfUmM5hGzrjAq2q3x669Yr2kXAt6Q513N7Pg42nZMsNFZZ",
  "key22": "3sTNgTYYcmKJStPYantr69uCV1m9GNuATcCJmWfZSEdRVgRDDSkadzB21JUF9DK35xcZ1LhQ5b3ZPypKFRyWd4Nf",
  "key23": "3MzopLAtTbsJF6LY4bWKvv1vLfr9kVLJAeRJi6zXtTDkWVPPQw6AaZgFhXgzKnUBrxY41xZxgjBeQu3wmqPXdkc8",
  "key24": "2fHLRKwbwaHTqh4H2qtPuW3hhoGF6nZkTtTbMMEXfB9tf4KfGY1XwjNnsUMw1TWJd9LJHtskn5DcbfgQSzKjTwmS",
  "key25": "5TNzqLzefbC6aHobACypzNGt2eQj3b8iAnGjDMcei52oth1i3UVzf46nFNM8FKcFLqg5L5YxeDjyS5tNyAD93fKJ",
  "key26": "62zRTPeyWLsFyHH9TEfqkGBjDd9NQNNxmEPgcELQDddusZfdh4nupZRwfUeZA6z2ukzqqvmEyE2SKcwN8vj6Ygui",
  "key27": "4aTeTzRK1MddwNQwCYm8JFL2K6BdvfXPpd9pvPx1RP9cQK1qis53VkHU2B2iacsdzbfgb2SaikXAmAn3F7kZxPbr",
  "key28": "2K2onxfWkSDJ1qBuzN6yiv7aMAz3L7Pqyz937JyjeEs6MhFd9XyakVWwRch6URxcUHFkKnz7afWTAnxuCav522Zq",
  "key29": "2VaycXypqFgsXuPUsqNJssZAJ6ACrvNLYjLJLvYoDXDDWMiXBMWvgae95zrtVTTd8pLoL79HmCAjevhWdkwVR7VV",
  "key30": "3Nibq4zDRRYsiSamujCqH3PronM8HAiJbNqXH95bF8qr3T4XcmmYeuBovsRbT5KZiYrjV2hHZjFFkTrmtbpDg7r2",
  "key31": "4skFFAGJJJNR9v7sAayBJigJuQvGdRAutzoZVgrFT4hQTEqbembJP8AyLNkJnshgQ3RyT5sVhNLUoGGyNrYo29H1",
  "key32": "2CixcB8hnbSd4TqMyftUCUq5jnD12GXBgN3BuJ6SAEsvtSPX89odNYttWS2Mro9YYMDG36uuMw3V7PbSe6KczRaG",
  "key33": "53Pv3JyyRq3AYpBp9J2Sb1TR2nmpR92Hswea1MSPYWTo5hfcCwZhLtK2g1GwmcPtfPNRiBMZGGM6uNQ9uegesd4U",
  "key34": "2HADeur5WzQ2Gnu43cCYf9LpepFuU6qTYN2ajS6rDAkAkRnhWHomSjC98vxQxyhypQYCKmC2Gt3TWLc5qCqHrDqo",
  "key35": "3KnKRBPLKKDXhRsY2RRcM4Y45REwZPGfhwA62B9bkJmugNH84xwneTDmnsihoebmWdUpS2ekDR7Kyi57sSxdnApE",
  "key36": "2YJymFzmSECsJJWZB5viWjrKPN9Rm9WEbhjK2BAdXsPxdY2vHbdHzPnWoALxzrb8ujEHBZqYRhRPe4Gt3jTLLtoC",
  "key37": "4yu13AwGEk1iWngowSx64UQTN3VUUCZsSNJLSkopGJe4MZQG5LwaQwN3BaZ3w4aDgUhqM175bnGANBU7iebn1omS",
  "key38": "66UJ2juSsjnDvGnMTL874njTKdn5VNgnBsiLyy1VYQ3mPSAjWqjtt1pxUwcaVQReMHpMHcmNee9hmZwAuV5NuWuT",
  "key39": "3PZtCGoxbTNAi7Q4aL3ietJi8FMZpzGw4x1KkXYoip9p5pgMz5TBFkK6nacdMwBQryvkWMic7LJGYDoNYcLcaHfh",
  "key40": "4eeA6ufDzJCHea8YePM4ZwUhgKaxLDiN9gvXTUpVzCe5K5NPzegyu4e67kP217o4xQr3Z751tVAbcvdxYp9HTSyV"
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
