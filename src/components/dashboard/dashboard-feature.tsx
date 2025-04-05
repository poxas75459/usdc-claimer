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
    "XunAjp7XizJP6vJaD5fVTf6DUqLjfN95PYuwFSuDqY2YKqoRChb7L2nDpthVW6eucoh1fraRm4Zp6Pm2wkXAJbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u7k1tSYNJw4d4Dimw4mHyQY5kT7WcLBEaAfHiLLf2ukY8WWSgMYjekSLoRenn92dyX8KciZ1WsRdX7KFZdjxTbn",
  "key1": "335Ab1rqbnE3V3MmMwyxvPkj59FsQksjRRjXRkXqyLQwAaBQpgE4LYbFwcjrqVEs5ZFXEWU7mrnCiBEP9ZRQtFwW",
  "key2": "2vAXf7YpjxaAja7vqWTn2x5tdR1VwyakpaaQWzaKqDMqsraMAmXNGAqnQUvGz3ximQ7Zn3hwwYjDc9JMX671MoFQ",
  "key3": "4TW3m9Lwt4WxirsLoLV3fAbXmMNVEEjjJxd4sxEhMhRsJojZLtFkNx1ETT9B1ma4qQin3G6px5T1HT5n8qsue9vx",
  "key4": "67rU45Jm1FHkQXehEsmzmHodHNGzu7iAn5ucsqGiW447UvxxLukV2cdRBbXVtgbwoAoiPvKzrEPmgBGdM5zr6arx",
  "key5": "VrHnqBnEnSgHTBez9Tw6UgTeWqe6GbvZbc13j9idac4WZKEZMSCRwusudai14S4ckKSYd7Nsyu7r7v98Mh1tws5",
  "key6": "psZQsrZaUGVuHXXUqQwRpT5zP1sU7rnPdU7TdXDybRhTr2khGA8cNDqvYmnqqJN7qjywkSAgEM6Af7J3qux8bU2",
  "key7": "3PtW4zacYVoGGXBfaqpvEgRy6ZiLb9ZWr4vgYdRKJYM8atGhYYnLQ1dj3WLrEEgdHCXwPyZMYaLBPmc46T1kuvnW",
  "key8": "5b16UoB42QgpgEyyFmoc8CkGef2QyUVexAhS8jsveF5EBfqUNAetHRY6p1UobfgW1EskTyKEFV1LXojSzrGBTwoY",
  "key9": "2rYu77vmHiy3o3NoNfh9Wcf5by9ifg26iA56YMfSazSz5chgVYHufmnEB8HXL9J2jYDbmgnKYhbpZhqmduGSMzYQ",
  "key10": "KcoxeX9mjjcWhHBep5LmsoJsKJ6zGCcjPxr3xhKc53v4geVYFTjJVWa3QjwZ9eov6ok4o8993ZbaUzdhyMmcqpD",
  "key11": "4CPvRE3rgebyp5p2RcKAhkGUUuhZ7z6bTvebaDFR8BXqHiQw1QguZ56NDLpX3Xb7xBLc17YEc9wziLgt6FiS9thd",
  "key12": "41jiHDYobRr7c7L9Syk9BiVNRpwBZnQ9ecHoR5w1DNir963Pm6dEZFsPPFBN1hAvBQrkU3tvCWQpn4v1jZhwAq4s",
  "key13": "3epdCCuFbwnqGZkm5es5JWwpaU8AH3KpKqePZ9p4tAmvYEP7WJTPmCMJ7c971rm54bnGc5q9oz6GLMJGfzPjBn8z",
  "key14": "4jQDyZubasEnWhGCyQ9No9aERrFxdBsP7VZPj2D1sh4o6PLeeuDa986ovZngVfBUNcuo831szEJ5WACqpJphKq7w",
  "key15": "47KapgWTyjEbUVKu6dBxWUnEsFWr2iGuCF5sEAp3wjdpN9yGqngKPu9KtPnFV6FthmmbHssv1NmqY52eFiggeFa1",
  "key16": "gpUBg9syinqTPqSX58D7PkpA4pqsiimBrRLvZ1zVPmtycisK4WvUSZTREZYfqH1PLNwqaDZhPZJTGX78dJAwGKe",
  "key17": "5iEf8Azhh1tw2B12g3LGDLKLv28yBhmoZ1nfYugLVjvVT5F8ucefAMXumHWkVsKj7okjBtf2fi8vsvB8ayx28Unh",
  "key18": "3HUkmHGAfBHzM9D7MnfVjYD2TKPmNZD8mg59PyvjbX38bxGsPmKMS4ZfKKVpF6Ho95cEwbJ2aeG4Y2XzaunXuJej",
  "key19": "2eXecRpCHB7JwUKZyME35YVFKgcFLxoWCTBzsy2wLKeGBTnXEu9QbR8Ltec4b6LThE1w6vWbeM6XBc9kqoAXDFC5",
  "key20": "2Zevot3kjY1m5mH1M4XBEdEE6wXxsBTWeL3pqKpkwx5PKbbKnbuE9DngddLEMvVbGB5rML2WNksB6gfwcuPvcBaQ",
  "key21": "4RdRPcR2SNtda2oQEB2JVARe5ZdnG2V7jWm4rTfevNG6sBh6oXc46mmaGVvD9CeHV6HLpWpc9f5TCkf1DFffb9Fh",
  "key22": "4E95z5DtpP5sCHeqexBSgnitbJMZVGi3UAaGmtbxuxmWifxqPjNdEupLM7rwq7fZScve1TaZSnxw5A34EtQwdUPC",
  "key23": "33DvjNWza2fbamSaM5or1pBNDkLAjX6bSg24g3RPKAGDxFWUZSmBY1Fg9Nzj86RApEmJcqYpd3FdAqwdgaXkbuHZ",
  "key24": "5GHScadPCHGfxy8yPasXRddj7CE7k6gCcgRg1AnPwsXEvu7D7KjXthT6sNcXbsCy28TH6aQePDo33t6fKrm56y7S",
  "key25": "524LhicZ37z6exGZ5Ccc9y9tv7a4Fc5pc1iNd4nsStvwuKPraF2nzNtz8A4owSx3y14AYRaPP4RuVvU4H437wWtj",
  "key26": "3mwzJxwjjrGYHUJCJANi4q1T6JRt1vWiUDvzWsycXZX1SxQDb51PcScFk5sXfd46AYeDLYkhV8rPEGeNVGomXEvG",
  "key27": "5RLUxtbc9wicwWZkX6AbVM4Vygwbv9FyxHmdfbhkjfBZ2qVHjaWJsChKht9DnAccSnozNgCi2YgXq3AHShjzxy42",
  "key28": "4hQPgkvJM9nskASajYj1V7UsuzSaNAfCVvXTGqCpiAzh3sePNhrY9PYmySEsjVRrKapbpJzCC8N7PiBf3ptkdZg8",
  "key29": "3dAqj1pXsiWzKkiRxYz8xenhYpJnGEntwxVZVPiwBM44Niofy8bdnV1kjoUQFhZJfsEFvUDAAPjuTbZCZ2thydN9",
  "key30": "4BLK76oyGGnKfWUmGVZ3vz293D32DooVChH2f4tYRQJmwNSxWcFwU9TJR4Fetkxt6YxgUDtcpg25yXh3YdVhZA6b",
  "key31": "4cdZYam99zZwsG3DLgeYdcatbfZisuYRTJ8txG1myESxzhQQHh558VT5pZRsdVqdNd3g61wkAxRNXKr6wFXA2WKp",
  "key32": "4nwaKNnEoz2USmFEd6bbC7ymZE2xmzdN5bkyE52fRs12Gb6UqeHMkj9rifx7R2L2bxVY6rCAnEDutVatibb3FSiB",
  "key33": "4nYxW88x31b7jbGWWErhhZhmqJcfXHy2uL9SAyCtwTZ4tc6hefvcapvcLoQnaxhB7wi8h437XB5X2hCrGrUhEp7m",
  "key34": "589HM7Jhw19kgaDPmL8oW5fzwA6NoCGMW1edTkGACYcVAppzTPExLfefoFoGFricRFskjMKKhyAB5REnGTzUfVeK",
  "key35": "5VAbs9RiPBLrEJEKzHDPYQdBMjJNKBBUCAtoQ5vGbE3Gv2GqutzV9AzowZW5vGaUUoCfBAmdFnoKJFpyXfCTHV6V",
  "key36": "4xcYJofTua7cr3weisDyniNeuBg4b7JPx7Ct7kakm5UrYF12kNv7rYrJAvLk961Di7H2u7YdMmsFpuPGpX2zrGXF",
  "key37": "55V6WPNPbpTG2DvGwC5F2dwcA8RXGtAErUHLvhPQsuevXMzoDAuzckBTwiJjDcsqjQSQuBPDpQ7xgYXwYbaZPivu",
  "key38": "jZG4w2vCS3RMnt8qRGy2CuEma7E2osDk498HSLYoUVHwALnuYmaGPgj5w9tHDv3kY2LwSg1bkumQrnjRZHtFCyS",
  "key39": "4dS24Aa7sxTnNGEQxgYQN6eCcFoaGXkQAuHtfrm3ptrYu9vkY7snrSuGpahN6J57VQW1dqRUycyp7xRxbpz8WGJV",
  "key40": "JrVjHUrA5BkG6HMiCNNdNq3bzwds3Sn1uDWPxiwXyME5nrXSG8sDUbX1fQXBBBE3xJhd1PSDDsPte49349FbS6n",
  "key41": "hWVuEWphNpdYk7img5CHg17MqebQThoid5QDQbM9Egx3bbdwGPwkCLeGMKvdgoCGdzuA8JMUW7kfSrArCjGHgbs",
  "key42": "5Yy1gXN7pD8E3psGiQZhxV7jkEmuKEp7bhSGEJt3ccwrLLAucyh9WXGKMiAkLuXjSaUJcu22xreQrZvjcvxSgpms",
  "key43": "5y3XneKuAeMSJaRk4xBjSqBzPEr8RgmxWiKEFD5NS3WZtsDcvnz9P6ZvxHcvXZAXQmWJowDRUYj74c2HZS7tC4V5",
  "key44": "aEwepk1g7S7goT6BVPrLAnpXsTSBxFE6HZRC1dGPAvubo37ZNpov3caE7K51KcTmtoFPWrEddHbCU8UL41N8rQH"
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
