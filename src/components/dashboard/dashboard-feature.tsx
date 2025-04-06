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
    "3AFARr1gVuNxxra9ofyzWEUMjfkVhbofC5qMM7R6juNjBqnkpsqvRxFM6qTUyXZXsmLVvgERex7GjJotDqyhbmjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJ2fmA1JZrDDqUEWmzQ2tLaY5bmtVj2aAKVYzjuhSXiu3oZ9HttZc4xfWbj9qSH8syLDRwwRou6TUVGMdzLikzp",
  "key1": "3uKGZw33sQd7g9KoqeBQvbYQbKzkELTtktnhJTyQ4dEyqcxdjLsckuhhLBBpdoSQcJjsWF7RpEJkYoxKFS6ihfmi",
  "key2": "4QUH2hoU94DUjh9bNTaPSSC5pebyYrHH4w4tHW5odCcwTJhTDAVVdW5tMKvgjmm1yRenQr7tuC6t23u26QwiB2LT",
  "key3": "39Mn6ayeuF9SwSYzY4QCKc2MdgUPXPF744nuUFjURMNvTuYKMzqWW43k4yVKLHmxTKaJMKQUj3rYwuRSG6pVLFMT",
  "key4": "15nZAtySUaQND7k8LJHfzVDkjDfH1ixEVHojvKjwj4bywJF6t18ZXMvYp3dRBEuGrtE2vKWLvrfwpuxNcMrUakN",
  "key5": "48Yk6a5EmdRdRDvgMJEQbUnaSQuu3LQP7F1Rre5qbioYsQx9DrGHDKvXopxN97oeXnagtrh9S5wQqy4UYfpac3es",
  "key6": "4jVugCDZFT7sFYaNkmh1kzKFYaBj6ieYU1d2rs3upaQ93KEv7WcFwUxLHSA2Fxtj2rb6R3H7PmJwWULpc9juwHDN",
  "key7": "515ChM4vgU9vfYvXgjGbkKHcWoWmuKQHKQxZewPgpG5zrTsF4qQtbux4NNRWLsU2dZfqwryDnKYBYcEY9DrwY9YU",
  "key8": "2ZBaVHx28nSqTzVkB9YrwiXNwiKiQj41b3tq9gTJRMvUKBxsTfvTeuJuthds7XVY4yc4VgaZu1rHsV2JXUdSedxL",
  "key9": "3bSLvRRhskb4E1vHGdFfb9GGxcHpGyooXhutGhWzKHjarQD654MAhGpWafrLhmuB1s1RRtxtXkgFquQvw5r67rWb",
  "key10": "2eLa1ZYSmYtBggCFV3PKuZw2B79m2Lx7AiMUcZtJGkxEwwSKX4dE7gw377TEqAc3obXcTWrH1kj3srymUhM47HQm",
  "key11": "2FzyE31AfnH1jvf91MHwA7xRPWzn8jtu1WpDQ44dYNpKf8swj36BLGhQLqFZ7M1p8pZ5gPA9EbcKM2Q1waYoL717",
  "key12": "42zQbsHRGTfpyyefqoCk4Be86efkShTPVJABbu1fy92ufmMVnb3rcG3giEawGZvMnT5BZsMEKU4GtWdCvSac6Q88",
  "key13": "UZp6qXuPW8YpiLVvbAqy1QZQ2i64gt5eTavu3t7UeN472wERuvrrY3meuTjsW78Az7YBkdvjPv8DxqpLWVh67Fs",
  "key14": "2bWw1yhHD9U4q5MV2HcNm3rQ25iQPoYHhQGcZqewcf3MbMXVMnBCRQH6J7mHmnimCkZcRHczqNifepBNTzEmoDFW",
  "key15": "2Unk4MLgFDNfqrd8u5ucsGdVbfE7GNJTwRVDVfrFNS4v3MSDNfT1Apk2bP91GDpQbNRBfKbGwp3uxQm3iqoaYgm6",
  "key16": "35Q1WYFGeeok8qpLLY6LNZ5CVEYkmp1RjSFgVtwv8cTgqw3UPtvDwSTf5RTQqqv9Vkt1jLcAipCgBQ43Xh45cSeA",
  "key17": "4sBepiAM3S28mK2DY6U44ZxaPSTqxP9ButSziygezjtsVSTyscQQcT3D3fGfqE4mxkTkgcUsPHPkeGe8U8v2eFKw",
  "key18": "5ASaSyMD3Bd793nSXnagGpkR7kaek5r8cTNCuncWnnNKRrzdWcrdNZGQuhcUeumNdbPJX1C3S2uFvomk3jfdz2pp",
  "key19": "3eX781Hhjq95huMKUqubnZ6CuHh9MYjdLMqfGeXSs8PMSCKjgX6GMton6RPG86gGSUAfpruAanChTsecWvPQM1H3",
  "key20": "4iyqzbA3mEWdrMXvjU7bcsV1LN848owd9nThr9sCA7cq7irmjzJtbDVwYuszRYJ7RTxG9M2UehdLZCiK6EodBxHy",
  "key21": "3GnxrD8ig6iLByGusCGpVp6WxY8yUeAQyCDZFS1pL1XDKLCK24QKoWAbShrTqtQG3jY2x3puMLJNb9s9sa8Gw9sJ",
  "key22": "3LSsx2V3icxFRMNQKfB6EhC4dY18vxEDSZ7QfF1Apz6KY2b3KdHa2LgRcdNcxMhK9NNZ213zzpqMCzVpaZEGXVN1",
  "key23": "2gAqHLxkLerabVuyv4wv12w83mVqfDXp5aSbRw8F2wESvpZsZpnvZwsH1RpQdMPE5aqR2rfsT6oNQNZYSL95eaoe",
  "key24": "YBxzcqu3ydMJdrBQDJy74MEXNf6SxLehR86EbkS8pXZ1Vg54ANqbcpLFweizVfg9MrAzJfqAiBvwTQbJottrgFv",
  "key25": "2uih8bExJ5Ym61kPn5N6sXB5baheR7vtdyrBiPVkQQmpW3CCmRvPoMRYCdbLzAX4cqsWPUKjwFLDdAESrjCDaLsT",
  "key26": "57eJRfW4KnTWm6JEbG8eVAw3vkw71o791VCrQYEJPAeSpyGPe8BBG6zU34NyYcP9uXM2zXSSRvhTYdHpGQEjNjvf",
  "key27": "4JF8D7ujyU6vVu8BuQ5CysL1W6azZQKsnotzxwHbweBRbA3vWC4JfMJsaSNrmvX3Hj7EQAqwujoxb6rG5CZJdTku",
  "key28": "2hhBSqkAv3VDxrgPBsubbHzFNDC5mzStRfgZCmgCgy8AAheEvhCPFUpajy8NBzRCT6MGizXFGWCQmTqNDfouxDM1",
  "key29": "4tviB13HRtJp5WEM25yBa9F7e1pZhajtJmZXhKTz8txipaXvVfTx3DoB8yjobmJkxN5xAD1n7ogMf93bZzadPNfr",
  "key30": "4t2Q7Lowi63PBdrhztScP3bQD2cAVDZ4GW1uBNqBSEff9gerZvYx9tvay1pB7KeycofBD5DhCznAoVdzsoj5GkYH",
  "key31": "61dqEXjt42ddcggUN4RYKGNNZpmotpZEkvcZbAqBq9p7oV8rf6TC7dud7BeLy6UibWYKbDpsGohoshx6QDrX9Gtw",
  "key32": "TYryrnDmCEjVcB2vqthyYtbRrxVjQwT7HdHoZA8oFr781xTqSPwSnfcp3BvL358RfmY9rnk4uG3kcz2r9U7rXvp",
  "key33": "64DZcxapVL4Gpx68wdhjKPD54LYPgfMdqW8cPX5fCojYzS8JvQeP3GPB8FTGdVuba5Y7G6so7neLeAZJej9tUvXE",
  "key34": "4BhC18X9T2v9FeDVb2PprEBZTkg3cunynvf77Yc2Safci8WgY9RugDk3Ak6NZHr34daHyHcRT2NyNNSNsq2vv32z",
  "key35": "4mhqvoPXHRJvqt5K7NV3sWT3MR6kXTwfswJz1XpnuvLEXTXyyHEQfShmxwnwrGrQxDrZQE4R5UTLjNdNirzasnEm",
  "key36": "2sDE8216YjJhmbqoVmkvRWmKGaxFfSzp8tj4Gu3VhTbuZMWcdoHC9ZzLfbr3WfLAH2TC3EH8qaaeaMwYfzQNA2xp",
  "key37": "4cFiY2spUxgYhSZu21uvVeBgy3MvPtoN9gEo8TFTZjHv9TAWLk5sqjCNUAhQxrbKQ4jVTBW2Rt4CRbxq1FoQT9Kq",
  "key38": "5pbG8aCqD3Ef92hJBQgEfpDm69Rk5wT4an3vkgSMSnvP7azM1M1LLtyW3FLGZqBxWQ4zwdjUhjd7GERwrspZZEsw",
  "key39": "2CkiiLe45GCbxqbh5Kxo3CxPaRp8Zr8fipJYr2y1kdmckVCrgyTEXiD7g8d1A9oL2V35zf9RjTcXUdmpc8z7XsUw",
  "key40": "4KcHG3wrbS3DuqCeXXzhE5PscZx7HFS5cRjJncS1DMCaW1PLkjd1mhPenbsuF2Hpgfpf3tHehmsM6xwDvDes4iva",
  "key41": "5XFD4doGdpcAdq5qQQKzBvGANkXnGd2gvXr82NpY6VjWSzpmTiWLNXw65fcwB29Qtfbget5kMEEFhJGsACjks87s"
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
