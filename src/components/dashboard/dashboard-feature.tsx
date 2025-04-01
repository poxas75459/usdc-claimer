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
    "4Pvs1uJ1WpoCF6xpPX9EF1MVRScSmQQmLzXVwia63YmNmeEkFFZXZzMRd1Tr9nTSV8yZodRMH1b3jNpcPgSz2qNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xdA4jxQ67oUTsuBG7Bcr7Aff5qYSUu75NuLESRXwpHAftSLr8fkxLX6gEUj3eNKsuaa8ZdeQesJPBpG7duMQvaG",
  "key1": "5jCBf5uSZPXgMnQ7UUXWSYwhDP3EHSr6avwz57nehjLYhkxxu1Napeo1d7syCG84ZbRx4yVigPkeRKKMYGo6gpkc",
  "key2": "5TZo3vKppcs52CXuPKzCjig2nscUcXBfuiL6WQ6cyx4YESnFwvgiKuontM1ELELMAhHGwzkB13ihAyQGrt44psai",
  "key3": "2ZNKyueiRg5WUoAD1ZncWmA6XMZH6yDpr6AavwBkAjoSgKbgyKMBa6z6r3g1RP7Qe9V6ReXjEhJmwi2Gry8KFvgK",
  "key4": "csHXwvpYJUCkvbxQed2WUYEhVaUSu9htCtBjGKJf6XcADxwYzKdDsz94m6Dot2nryQ9zqrVR5wziPaXdMifn2io",
  "key5": "3JTkdqwKqm7EAVShvx2RafA8FDGF6TBuFYrJdyApRekC8F1FAZrXfwjFcGvBDp1Q2TKBJZKrMYArRbr7Q79iLkbB",
  "key6": "2NnBHVLzntjSWGAEU5Vs2xpXUtJF23Y5cDfXamU6jDqGjVteiMEYyK9zKokKrfALkHfkFJPd1ghYsjwNv7QUk5KF",
  "key7": "4Hvz1NGGWiVQ7J95DEwQuTx5tZ86wRyZppCbM6y8QcKqrTqvEwQaHGpwjkdgKGynPazFkHXGtCNAeQ98HaSJg4x6",
  "key8": "2DS1w6QoCM8VdnTDBnxJDYxXRSGCxwdpvhziWaPYQZmJyehCnnUtv99XR4QjM2XcypEcD3Jj8YziVioBwSsTE2AG",
  "key9": "59EvUtP9zDgq7tem7BjrfQJbhZvFVae48R4zEwezuHYQWqmxXkHRskxgC3iNqhBj1TcqdtqpcNyodPUrCABuBXgR",
  "key10": "PDg5TTGrU5P5Dv5FBtHABok3SXsVvjTcGF1qPnUDWhDkVFhtAVAk6SApc2eanDU8ch2bksFm57aAoQLSKHrd4Xo",
  "key11": "3BL6LRyF1ZMWQbYPLHHF2FoD5b5VEUpHvcme8RtmxhKeLMWZvxv5c9QyubDXMBnwqW6JzFAgP5LA6kShvQagWv41",
  "key12": "5KV4RsJDtEVJmomKNgpjbiLvvV5U54MYjVytzhy1eFFf3XWbp86rf7Ha27Hk1h2qteyYTKaVuG5KMbb84tnmA5wU",
  "key13": "313bJDwRn1xCsmCVVysgQNsQSXYtND8CSWEEfAvViGFrHEgen9rJKh7Mo4Re7DQ8kjVyHbPxAx4nwZFnCpUFQJef",
  "key14": "2z9RiuNyt9Qbv2s8JDNc9UsCyMnEsymFWKDv3a9XazB1NbRFmZwCfx3kV3THhf8UWGwu2eqpcZwzJXCWkV8fQD8m",
  "key15": "545nR36prcBwU7Aa1MQD6mLSdjJat5SdPtCfvaDnuKNur6K6HcysPcngMbpu4NZHvq9dsuX2vaVEqu78tydFREjJ",
  "key16": "31pJMBauQbgsSf4tXDhnkdbP7Me6w3Xua8fDkpTSeceoAojaHNYAVFoG1E2cdQviSMuoYnCNo9akDga1nC2ft8Kt",
  "key17": "2nRBCtZJiviNsdSrMB9yHHdzkvP3Rq1RYK1EGei3bYqvkaPotx3cxLSiWjunbsMRUeArSZd9R9ULG2oXXMVUEKSt",
  "key18": "2GZA9LR8qYavyG4brziGyd31inDSt5Yhzxa1qjRMvWqVS4KrGSsXcW16N26FaNgZL5UN8p3GFbowkKmpGyZ1Qgda",
  "key19": "5GweiXqyYBWNdDbtFtSZvgJjzZnuKbhpxwxPPhC7tdkpefHfAKP9bkfvwEyy6Zt3eVKGPkJ4LiwAqxCzE8ZSeWVY",
  "key20": "4yqpFtamXX8627j8WpH9eVT4VLY583X2thGSAq2uy5osLPR2dLRz3gmQN4bmbP43U2BbM2jBoccRWLeXtDUT6yk3",
  "key21": "3GxfFp8Vr38wkiztyohRirSi96rZpxQBD3upiAXjKtPf4KpDiK5VANo7ZJxP77pF5RgVE4vR8rEoxuwJRWo5Q3rn",
  "key22": "2tv57kej3DwsghsWgKzoYB9bUAFEmJZvaiPR4DHo7gfhY2ABojbbuJLrgCc8AAJydbzNjYma44pYqWoLLBNZMaZJ",
  "key23": "2pi9sMxfu1Knefnccfmv7LRhL6YJffBsJ1C8KipjdpHaBN4whqyMuPBRgCMQusFsL5EedJcY5CYFiz9Haamd2gy9",
  "key24": "5MAwhgNbyLiucMfkKSZQqX1U7dxyu7bAvsc5UWg5HmaG8dovq7hgDeBuPCLGEQdMiAd3V7gZCkVpzM3hvkXaNgJk",
  "key25": "5MYnYM25vQo8b1FFVn3PGzgn2LZiXCbprbHnte2V4sykxrBCRTZmbhWotGYNfL6ztQFsSHayE8PZrPYYKkcw5MdW",
  "key26": "3KNfVWUVEDKhyKJNyEs9GJxPsMFzaPdEDf1oyRd6W82AZADMAkWNFCQ7ah1bC8VaNpbceCF25r6oebaN9dpnVV2X",
  "key27": "4wFVUArdyvmg7D8ZH1G5Lxh5cQTKcEZpog2g56jFWj4hAzvdFLxk3QeQ3DozuURJjYfU3qyGgLw1cVEvp3Yp1TaR",
  "key28": "22X8ym8GAasgr9UtZk2FnmvV17z5mdcnJGusxwvZAtfXoV8Qq3ke9q39Gt7uHpGUh28J8jNjjvyAVsyx31vVRooX",
  "key29": "575bvBFJNsunPrpruRw92JKzWtY9jPgHo5QZWTLRJJiNKWcsSSKgCT5uXuhEvgYo6AJUZNGha8PbgTrWv8Pn73Nr",
  "key30": "5TkYKSuYZbFw4dt9TbCfh8fkWpCVKTFXHhn7UpHewybKUauCZ2QUiAF6xxa8XDMNHyzS4zhZ91sytFT7z9Pnw61W",
  "key31": "2muLacWnuKcF4m4xa64q8NW7yhcJ6bXVixdcakxnvBM3S1jpVLUGTXD4nfjeTm1XTMS8XuNWAmAutsaBz8Ca9Vuk",
  "key32": "5yewMhCFa57wEQpTsSjYNaAGkbLKeWC5NzrE7XPPvy9Zb4sqDJb5JrDiCZVo31ZkUsQoTLe9Sw9LtC44AHairazL",
  "key33": "3zjYL67rQR67GN8d2D4tGoak1ScKU1eHZDW7kHzNEC8VPgRGYQVZ7fpw7wSAcEVwnQbAL7J3kMfMxLbiTKfubJRo",
  "key34": "4o6Xt7RymzsTjKV4WSt7f2ukpUCfqgWHWBz3Ke13e3QH57unmVgQ8ywZ5auaJ8onHHXNHF8kurtZLPo4ac9b9D5j",
  "key35": "5pVZyRhnCdo5SFnH8qXXDJ6bJyimYUQskx9THE3wDRHHY73pF77KfptRTwCzoFAXEFU7NWg4Z2w1wFKNqhPsaeW7",
  "key36": "6zyDrV7fsEekoytEFaaqgk2asFQzN29PTvo9M2gVk7BZEewguWq81HexNXpnSP9C2ZGcZTQ5rdWCnSXw6HEzhqm",
  "key37": "3XY7X7NSDuzHs7HgsqbEARA73d1gCepRiCWdg7waXKEjQBSZBKpB93vwn2fe5n3FdVxWoVARnAZLKLCjzc9zmw2e"
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
