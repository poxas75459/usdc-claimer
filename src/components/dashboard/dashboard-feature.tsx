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
    "5ijenwpyp8bioH6vVPfoD8dnyAjH5z2DX1CzeS1tQA3MnZCFz5Hzdt85VEvseerfGfybzqf1rFgYtuhZ48DchtNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ornneFFXoEcTARxYPJJDEVhjLguMeWVMaQGSjaN7ztq1aHdaNj2QbxKCELMZADbkU6thfhbAV7yFHo5v243zBG",
  "key1": "mDaeLDcS5S3XsHU5Y1Zuh1Xvh4iKW6qAkHBwjWtCRfb5GSKPoxkCrKiJhiJyHCTLt6cNdngX3noE9Hvrey7CMp7",
  "key2": "2zzcUxWkBkCAkKjxjM9W8ArV8yFqF7VZZ6ybrWSrFA7ZowUzqfkdcYz1QTVySEosn4tfVbZ4tiAkL46Y1ntXpmtc",
  "key3": "5BbMe6pQFBveTGHLytjJ8HE1q1UqoApYQfLrwxx7cUYMTfayqYykeChisLrsRcPPPFRqGy4qbjTusYVVFgYgXdPf",
  "key4": "5EyL1vfUT8J2DBr9RurwFxHccp8ofeFR71sFyXArxajwvV5YkExsaGC5Xhg88zKq8YE4BpTppjsfUKX8pxNW4PAK",
  "key5": "7brAqGen62vYa9STZBwq2YoGNZeu6HY5ef52ciCxfesB1gVR68fCuSohF75j1aRF7xKyJTjFJW5GDE5PrtSXQH3",
  "key6": "3MjA6cmnTtU8wuU2nv4JQeRR3SpXaZKgGKJMP7kJZy2hKRqsjU6DWkFjKEAZmcmPU47jdRtMsTtvyKz1DRgeFb4k",
  "key7": "2wxTsPB2E22KG293prMJaUehjsfNNCAQZ4bkJqpnPmArYVsAiK2a6ubrDCpJTkAt6KiajJe6zTAAFsuf3BD6YZ1b",
  "key8": "3JbtApZ8E1X8UEo2B2F2MPa5r7fBzSPMn1de8DGAskNcgo2shJXvf1VwJRKqBrirr4vUwBj86iSD3j4tJajhpZMn",
  "key9": "55RagYecxcLESqQhhPtUbEYwKayjRGxKcDtfq8owx8uqT3ycgAamv4YwDvg3JdfqzuSavs6CPQVwV5uSVdTbwCz2",
  "key10": "5Y5LtYGo4sasaNKP3F1dGosx3P2qQEykRmZvBgBC4vcaYuSTTJNvCv5deqLrKtbVTfHuWcbHh2nK2iU8LgznLSUY",
  "key11": "5WBiifMQ85aYWqtv3hNXKFMYB8ZUmKmFfvgChyV3qnG4DCxCHgiPB17haXKwLehjxvrafqCToHxbT5WKpYcWYqTe",
  "key12": "2Y8gM6rKhznZDT38YExLhWw8YT1sUkqk4d3sKLkLBg7aEfB7skf8cjk7vZdysnRFHy5ffszmySEsD5GcBgAfFg5f",
  "key13": "3q2uB5HeC35NXEkxDQrmzvTKvBNMbu6wMhx4YCHutwigdgzqMiWn7HeEAk9LuZfwN92qDb9mqoQUKZRXJLqTrtke",
  "key14": "2MrhXKEHWnDpZxLFSnGqBBxMq3cZq1mArrJdeR12LieMYqwmQi4HPQTkphL1PJwvcV6fnDj4NGpPNaivFm5zWCtd",
  "key15": "64NCEgWXFY8GTCJkDzBewNfYkDyMXFeyQ9WnoyjoaM4Yg2q219XLEAoPK4cXMMe2KgYyjdH94WyiZznGsvTcXsWb",
  "key16": "5Ty5Tv4JzguEYqXB3jnhGqqQS2rKxAqpbo7wUnGZB6NdzRQbGy4SUzx8vAHy5dnZztZtqdbdz4kDwSy6xAw83DTY",
  "key17": "43gz18tN2JkTNKDYd546FRHJCTwFjvFm8to25T2FLhXzgtAkkwQe5zh2k8y8vZ9xRnkmogWUFuw7viA75Xsonosf",
  "key18": "4qCRX2v24j5XC9GAHiQm8oMPpSJnhe8opKN6Z4LXi9UaxtMKuV9i6VLB6tBxHhD7PiMKchC4M5ewbYkuxqy8hk1W",
  "key19": "TeKT8spfbBddma5pKiVzaV2Tvve6y3iecRjmiAdmC8zZn4vLz9TEUfznMLbHK5fXdGTvfUkfboRWn9XEbwwb5x2",
  "key20": "5ctjPvPf4Y1k9za6YnjRwWaCJvqbMJ7CfUVxAUv6rTPG5WeLD9c46wEZy2LVin18W5WKJW299Yn1snrCd3HmdANi",
  "key21": "3V2Eu3eNhYatvaKo5yTyfhNN3RTiqqYP8P8TBchgf5xDHL64H5A5wQCeJpw3CYwutKEGBSdbFAUPR9oiP7v7xWiB",
  "key22": "3fJeEbfz3V5DGtLQqVyHnR7NwpAAV8p3VoyZGvN1YQ5JtkbTDdoHKHHkY8ZgvtqzYz7po9MpexV1H2YED3iVte5x",
  "key23": "J2DnFZELAc3tCK7QntXcdvx3eU2bYAtaZfm2byoxXMXvE7vsTQdoEXKoorfuB7fPnHNfGhd81dxkWQ16gWifUi2",
  "key24": "3fDT45djJV7tkwd4zgKMs3sqN1Y1E8i7tbRimgtdVzQL5VuTrxj1UdcX2Q9sPzXD77wn1wJyV9qTxQeZcuG4jUew",
  "key25": "24iEvH2Ud5xnZ1KZvC7rha9Fzo3EwsnKNj5tiaQTbXtGoCHsMKiHtuHwdoZgbatsVo6bb5w4WLcRrQwEygDab4pt",
  "key26": "3UcKzNPmtfpvjDckM8Uf93oKSoctucRSj4yPmFmU2pDPAdboumvvVVNuiGxUiH1CivPGUk728NXe4ha59Qpdikct",
  "key27": "4ucPeiktA3wBfcpiL2AsXLqYmiEht4piTTiXy4n7HoSmrrqHzFGaQWdq2zDAaCwz9MDgxuKnAedwFzH2b5Mig9ex",
  "key28": "3PVBzCEPDKvi1xAC2oQKfz39xJiGTbUTaErW9o9KVWadUzNoRNDzYD4P5FWCKqsUoZxtd9Jhgeze2fr6irp8sgGR",
  "key29": "5wVoaPyPNMz4MNQ8fcuHpKviMU48zSt1fmeicQecdGFaAmUYkjmYa249vSEwHEuPYVjEJeyz3P6bbkTAZhe1rU4D",
  "key30": "671vMy8Mirarbq4hHL3Uok4xTW48n3fiAB6yoXPDegXWCebazLiDQAxD1c4Bkpk7mk2uzC7GCtQu84DcwU7XPM3Q",
  "key31": "5UPnyWeuXdApXchD5gGPzsirBM9VqaiE83gqXf2gfHwpS7Kx5LGQGyUqheWAnhz5LK6t9vTB7RZ8UA7hbxjvRkcx",
  "key32": "493eS863XnHSyd5w2QMZZXKtKMMUHwkZC6QVJ4yqb1vApfGnKc5w1URXG664ykT1EJ9HNhQA3dFtvyxG7H2AC5rz",
  "key33": "3U3yD7Brzk5DfseMUZwU3LU1SpZHuEniRvZ4RjPYCb4AZEfJZP34V9ZDZrvePbw8RARosniJijj2ggCxUPScQ4sx",
  "key34": "5QzT7BHKDaxQovfhMnwELkoSqjnCRzgNVSna9FYRy1uvZZTjzrxbbzMzyEdVfRqN1PHaDA4vJ4uvRYVgCcHgLFFc",
  "key35": "2WF4nVddyh2LHC7MGeQ27688KWK1DD5HGihPA8h4GTDL9uVa6tWv7eFVHPREiers1f5BZqoLv72P1rvTdpwvk4J7",
  "key36": "5c7ATUcfinadPPBknzuPBy9b4Ac9jLrdtowLrfrBnLBoX2UPgJ6qLXxosHZnLqLPexHzK9FLAqGABUzvGSAjGfJS",
  "key37": "5jyPpeUdJAMNkxijxLRMZSFn35sfLGZgRYopUVRaQRA4LvDRvEtRCTvf4PWURNC2oDB9EdM45bHwcU3KGZq1EcZR",
  "key38": "4wvJPD66453wreDQX9Chxr9Ab1qLpjtvnkZn1mrzxgtYLxMymbWXiJuDCobs3kTjkHuQK9RpeoGgGHGMZoAkDv2n",
  "key39": "3Y47qQuk9VvXF9mzibeanSiUbVoTmUHKHeymQywM6FHht512jio9mXrdDFRoZseuE6NGbzK7w7Pt4MzPmshzygKC",
  "key40": "2s4Lj67aKCcd94tfiETUdiHkP6cFe9iEN8LkSztM7Hvf5UAqfxr5WAaUDj39B6gjdo4K3TJAFTEBteJWyk5tyBYg",
  "key41": "43z8i1y1sM7qcL591QYgSEFhuwxxjFtqkfSirZQyky6R5VG7YKwbmnNevSrEgaQ87eCXpLKrLKPvrQ1uDTgbukJj",
  "key42": "e2hFVmuBCNGLw5GX3vPqBxKjG9LiZMCvbvGUB4gMko7D8rCsV3TmeqFuQZaowBEJF5KMaNWqf3BuWNHHXHGN321"
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
