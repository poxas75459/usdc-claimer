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
    "54GH2u8YuqSyrnaUuPjffgbmyLWwr8eT3q8p2R7fAshdAECm7t8Xq1P6nA1FoGTKaFXY5wM7sSeSY1YNZ7A2YPqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H1REjCVBuifQ5Qswvk2QVCD1kRXbbFhrTu2pyiymbuaKmKQo7Zs9Ln1zUDEdNtQ2fQFVD514znmZhvgFqqdwqZm",
  "key1": "5mLUnnjVgXqfvkEbCtfrGvhSCmd6cA1DUjWVCpxGXugjuwkWpzFFumDxqg8PNKvJy5Sqovh8r3o7HWqH3rEtxFah",
  "key2": "3Upc6x6T2pNmEULGXzHDMY5YWWzyp8XPWTXk8nLE8WZHk3vkpRdVbpgm1ikQwpexkEdoDRHyCgNRt3jfcwCjMC5",
  "key3": "4E5z8KXnpB62FobpQcWt156pXFK9MvbN3JLbG6TRUp8xxMZHbQk14pfd95Qo5U7Qm4tk1eCgGdY2a9daZRX4RjJ7",
  "key4": "34GkQJdbAFfLF1e7g2k8ZBWhUNy6EnHGXrQ5FNAFu8pSUJ4CXyoVz971u8iGaBQ2Y2qXK9tBd7PeeNubJrcr1d5q",
  "key5": "3HarQcEbmZtgdRNP8yPXk8jJ8KJbtc3SYyRqB1EEgNBaXzcFCGrbmecWMiFAqC3sX9vnpVitTH8Pz2tyszYqCRjv",
  "key6": "DU35uc8nDWa8iiVDHTV1CM9548z3JjEdRAuCMBYPBSo388HYXtUb8Ey86fKgK3Q39ByqCn4uQ4fD3gpqGvTYMYN",
  "key7": "5tdHqZ8Q4JqxqvpEAELF2gjDessiHhmo29gyzmq8xtQ5CSVXxHEdmhYiUSb22BXHPKqyRKwipxXv7UyGGZE5egDT",
  "key8": "4myz89TYPBQCApJTXsCBQ1ETReith9H8Y5LqnmnRMDhFPXZzXQNUPRknWS7ufGw4E3ej38JE1d5XxRGY1G8w7jvq",
  "key9": "33yxJWPmnT3cAXDvG9iJSYgVHChqKxqNxkvXdVz6ejvRLU5M3ttNdQsfLEftfDS8EDkpTXdGxa1buirHgA9wAhXN",
  "key10": "3zNx6eeapoy6RZtMzvA7YKCiMwBDZXPvgekbL8Kn7XTQWRA7sKj43vyaB7z36hRgYu1jDAT3R6WQmUBXsiF5mDHk",
  "key11": "25VCiwBRAPeRktfwogbV3bsVc2k3hT2E39ZfcQFF3P5s4k6S3nyBrXmWiftB8L89P3UgN3RH5HwBavp6doGoJ9gJ",
  "key12": "kd5HaDBCYbzyU5kMoUibVSdoR5uAWAPKZPDXdR6zkyFdY8VnsFcEiibucdDC57Ry9GjvrqTT94worzcyaCjaNT3",
  "key13": "2CPAa9WmSCBmqYT7x4a7XqDX6A8ob6btyFxEb2UsuZTWi2ymSiPtcbHYmSccZjhFzmhNM6aeBubbj8JAycw2g67s",
  "key14": "3mrEXFDH64R5ykEDhRnP7HyJiVApeJNACSVdVsx3Fd1wLH1Vv1YdEnAAq2uaQnL5NMwUfCLNa3CKjFjwJ4zJHmNU",
  "key15": "26SX91UjfHj2a8Ndpr91sMNGWeSzU9o67u4uZBaxey8kiDoadvF9xFic4ziBqnYgC8x1DX5TCLxTQLoQywQ1XBdG",
  "key16": "3WiXQF4eU1jmTLdc1yabQHFUL1QNE7Hu1uwHu7ePNanMRnNHen6BDn51XZbzZ1FYe7jwg93axNWmkDwMpWVeGiZc",
  "key17": "2ESmrGQNrXPdUKK2oqtBx3J9WBkAkFTCsr4exGwrF74Dk1AjYGU3yZhLc1dejXoJwHMdzqRsa1qMFdhaonBRekoV",
  "key18": "31giw5b5wusvtQf5wNRuq8KvUdHw6pG5FVEQv48W4noX81nwPJMhPS4nmjMGkT2PcG8Z6h5gLAcG3ri5b4krnUVW",
  "key19": "3USDxrAifsffx7MT73DeiDfoi84SyRLYjsQq5jNTeDmkUE1TC4ptM3s9Z7RQVGz8MimzjJXANJJsUFJJ5KjPdncj",
  "key20": "2M1KiNkswKTxxSYF6XqzZkLsbdUcBAJmkRm69pBHBYYy1ThjeGqRpW5d3rdUwjkGsVHR53S2ntPny62pSPYKyKb",
  "key21": "2X4r1qRNphmqYezw6aVtj8RrWMEL9jG3DoTmdez1JttdJddrht8CwRtEmwDWaq1vsR15KmY7kd8MP7PGEqq6T1cd",
  "key22": "4xXw39fZxWbaFTgbGLgyXYBUCYyhgM3bhmeMHeDp9UnWt8yX11EGS3wz4RGPUeKgTsT6v4bAP25uaA313bDcMsHX",
  "key23": "54Gdh4rU71ZbVg5XoD15J26A39Y6LknKaSw6wo6crCDpgpeCJPyW5or1mrSrdyTf2QwhGJQRFZKtMPibzMa6xj1q",
  "key24": "5HP5FJZDVVGLRpYohGd1gCf7AmkoW6fbADPn4CSzpaUjSq4oMJXDX3dL8fE2sfctvLVQot7bWRs9rSrpuRYjqKyC",
  "key25": "k5yX4v7cXKzCyK1YAA5QVJYsRA3K12tSXqqBLxgNfhkwCuJN4xAJf4Y74kFCbyGppjnKVgFXEzP1YynGAspND1H",
  "key26": "464FYgGkLdzA4PQSumVCSD4EcZjqq7FkCEoktBCSaCzL4HacKGoCtkg78y6ZDiKTrgsyZpnsbDZ1JyPQDRTyoo5N",
  "key27": "3TqPSocwohTbocpD5GxVBrquhq11NYpgfhRXJbz4gCmfmory49vPTZVCT7iLDK3gCNeCQZYec25EUp2wwydnCJG2",
  "key28": "6357sDip7iFoGmL6eb2xuVbfv4YYxjRnZzmYJvtPerbzVQLdVBQxYyPd1Upk8wLMzjuVHuBk5mt3JEdNqGmkNYAo",
  "key29": "2CuTAerHMj8Bj82QKUbyD88bcpZpHG4E9kGDeBJQghTLi47PgmkGfaXRmooNp2mRYHZam6fRCg2wXJfR65FhecBu",
  "key30": "3mWbb5R3ahgGhuN9ZBiVsPxi7oM8MHpXtpySuvaMpXAP72g4ZG8XHH27MHq4sKU1mVNFkC4JVjqtxc4q88j45xhN",
  "key31": "BZtSKJGonVdzhYCf8AmyLm2KxXsjDx6irXXBBRHLVD8eTSV5VeSKXHCqxdYvL3cCoce7TESgoj8R8BtJzwxB9pj",
  "key32": "57vByU1Bn15eyjhC2Hkn9egqxKF68aeu8LMHFHi52oE5QfNdheFouENnBYdK38ZbWgNDwK7TtEpsuGrrMaRjaFQr",
  "key33": "3Lb5oZobUot5qmewbkMqxX8LKhFsJumiiLe9tGj2FmCwsfz2ZXga43UXTY6Qvx6AyJMk6ykZSKTXs8WD8KWQPBRM",
  "key34": "32M5dz3afgnTfbMMANeyTp2Qag3BHz7GTqRni13pErXMSouiN16DD8AbVm3ifvTo2kPR92viGgbvTzcwazHZyx8H",
  "key35": "5hDmaHdik6XG1RLwB3CYsP6EhW9hfsghXEE2FzCMo4g8eodaA6HqjXu8b4ASHS3tJ8pycswgEBZbxQWn5fJeWm7F",
  "key36": "4TqcZ3DV182mEiN3HQTSPW1Zt3j5ekwAKiUx1r2PjtJpr8cDtaW2MgHbkYEAEgikSs8dqMvKpLUY3BvysTLHXcaG",
  "key37": "3aqdn8RRQpDSnW9kbm1qUwsPG7vCoR8Zqk1S27oavJeuFSxT1UkQZHDSxFQrzJvFw34MsZ2xtExRpEAQotLK243T",
  "key38": "3FBrbzBsMusqXbip8wevXutivg8zGAz7U41K7g6dPzMSvPqGcUSEZZ1vKLh48BNe1z69Q9V6F9KpPMTfn2JpmXfS",
  "key39": "3dUMoBvA5qhzYdvRXhJhNmo68ep6FR1RXs4UqrsfVixhu9NkDkTW4NKE4r4xbD27xnqsHbsHuvb8RDpu5G1me153",
  "key40": "Lu6UrQkvGw26FWc9WpXXw3BkhFBNiL1RrmjdgVVNYCzodcCwmdRHMoSfMEqvCDK3Yhh1RDZmAHLVpVhcueCVHz9",
  "key41": "T91s7sq1hhPpWCoNGpc9vvby3eDAeREvXYtSABLrCvcMeQKwL5JCuRQS6nwRYVwB9ycyBZbiNMuE9yR3Xsq7hfv",
  "key42": "gP99SZzLyAikHuQVu5hX4vXwTsUoHEdmgkuU9akLTBRVrwNxHSFg2NaAxg21XL4SZuNeCUKHibKX1wMnbyt3RLQ",
  "key43": "5cNZeDx1RzgXEeREmcby2cEhfg3Wst7kDBb7xqsxzuRnz5q6eeMJUP3GtNTgvch2QQ7FUjvfyu2q3PemYyPBfBLA",
  "key44": "2rDQaSf1ieVMscabYAoosAoUB7RgQVz4CBHvVwwnLxUEciXPmdXS136sfX5GW1v5YydKarWj4XPq63Rcp1cg4kCH"
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
