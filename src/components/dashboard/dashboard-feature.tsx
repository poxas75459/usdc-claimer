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
    "3DvV4jBe2yi8oU7qr1UCw8EGRLwaXXw8Tf6ZETVLEeToWFskx9FS5hAu3KVqdgtypeT4t5BEgbVHYwsRHvHFrUX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCUX76CToHEKNGnNCjeQmXz99yq9X5HevgZBPz9oAcvNyREBwn6SoSox22LqwTw3PXYxzHm7XU4yfqcj5VygAv8",
  "key1": "25fie8J9MFHRRuqQkyvqERsRvKZWKj11HRJcxc4xNvG5eJwVcNiZ3NVPcMzPF7tUByVZ5NkFvEpER8Fdc5VAGjPx",
  "key2": "4QCZvhNReZbC58dBRdiKtBQcxjvLLak8xRyVN4DeMLHp48vS8bpM5z9Pimq8j1N1JdF59Q2HUEi7MLf1JWdPqoKN",
  "key3": "3Pex5YWnMcSYmKxkGngDccXdqPPop8WBXpNEwGgaYoZ7qVM7UzWs6292CLEPwjAm8kAKCkeaBCtrtW1oAkyA4v2S",
  "key4": "3vWtcph93iPtRyVfKDdeRpDSeVFr8WHYCWy3GpiDLFBM1BxfxGev5TkTBEzeNeaRJ5hPnu9hNzM7mArXdrEUc4r4",
  "key5": "4tXT3iBt9esRSMz1dfe9gM1TcwoisjjfebNb7FSWXwMcowRvodh2xNdceRwi8FQKvYuv4CwjKWCTZoaivAVGWg7Y",
  "key6": "3D3oEgPuYTDgM4PenH4h1WYmbXw8uHg8hkip8Jjci6ChfdHtNDzC1bwb1NpkhQW4btjrgwbdwuFp6YZkoMzyVdP4",
  "key7": "4U7jHaPotX9NwDSkd1LwDcGH4o3PSW7ZavmWKhYeNzBDYXLSidVPpFvNXhojNrycRyGiAtFLTsPxCoqr4WtFGBjQ",
  "key8": "2K76asZGxKGSXXBNxYinBWqbhnDvPgnt24ooJhhayTM9hP3pdBTpFY5yZCrmD4N8zkgD9DxcteuM2Ez5BwXFLNxk",
  "key9": "5sF268JLga655aq3pGkZYrJoQPVbQb2kxYaqaZVKKzSdAGBCAybtYSsw3dSXFqf76gBSCfp5KeQBudDxfmDMLQhc",
  "key10": "WKYLcLGBbQiaZ2DduFHcNSP2cihmWgSPARmtDSLVr2eHNBHa4q1MfKGFJxLs7vf2D2gxdHEdL9Y6UpkkBB5M6XJ",
  "key11": "482XWWftf8Fg4bvHwDSvbaG8u9wcCWUZ58sZHwguDDmnk8W4j8bYdRCtK4tuR6x6nEbbkxqptsSacKeoGbyuWhT6",
  "key12": "ejs8aKvVPcx47AEpu3A65SMZf4rJJeWt3Lgyfdk5GKVPj2jpAcBoFVQzWD91ZXDRRHittjwqsoxcmPJwp9sCCqk",
  "key13": "2sQxxdtaUj4N9itrCWREaqepyCjDZGWeH5mK1nJsFt8tbuaNHn3dbSghSp3dGsAymmK5E8qhApwhYgJBVxRnSgwx",
  "key14": "2jjxiYHzBFZ818xLivSEzNaHwQxGHNkomv19P7YNprQz26NWwJ58hXPKXKt87DbJa7ZWNQtxyZWbyHhVRyNGK5a6",
  "key15": "3FfXB5TwwSpLCMkzc747ZYqcqHsp4N2dXugjAvUn57Ly7pFiUJJsw3j27gvjjkL7549GGGjjv93w1x7eHpT1QSPD",
  "key16": "56qmeg6PRiRxDhfpnhSqZRS16b559cHVnV7ZFYHYyYqwTwsTpKfF41j8GXLDDQ11pbTCaAvuLjrkLgeHs2VP2hoA",
  "key17": "b1qmnLeSHHJzVAGQUSMXwb2kvkxNdEUoj3Ctzd47auegK95Jx5Yvtrao46qgKg9Y1tRCtV76mZH52XQAJeeksT7",
  "key18": "57fuKht8vsMUg1dgcFmwDEK3c6kFB4KdxqRX5N13LNuv15TsQd6rTVGg3uyZcrMSzNXvVWqeWhAj9QxgpMYBHttc",
  "key19": "2KdsBSr33XBtMsf9DebDiGjprcsZNuFA2ezPYH1qQmyzP74MvPJMWaQph7ZVbyNqJCrpCUwRB3ZqTHAmNM9dYkhu",
  "key20": "2B7anyCeoipFtGxC6SVpSs5HXSjwZq8jUk1JevA6o7EWhRK9vqmSpEtWABD4K9ciAr8qPu11iyDMicfuMD7EnuJM",
  "key21": "49KgczX5wrYruwLe8MCRCDWmQkmDzGWeuoMkyMHn4tcqdwvbcZUSJ42MbPHxmaMewF5mgoHKYqTghynjXLjvir8Z",
  "key22": "4hdPEoXAkFKPFHTKAzuzNX99iiPh1PUTiwPhWeQuavxA8rS2svcmDPyNCMVgELjTQtVCpRa66G1a6Q2rgu6Z1KpL",
  "key23": "42bqWEJPsoeM2nJ6yFy9CQTTvjTdxVMeZFyzebY7BiLYkBaafm3Ew3YVo16KMiDBMFuUsHb7R3AJPaxgMPU3M7qo",
  "key24": "5CqvYjtjD1UiPpku4b5iMBUjHE5hHeo3vZEx1k7U1jSwEybrc5nJmWDNFiGbmypaYzjjiVnCF5bE5Xxh9bvRN8d",
  "key25": "5VjSKrujctFTFSPAfqrFMojT4RQTLcxxjBLxhiwGM6QKdwNC1QfZdfaRiyFepT3ygbiMQ3kWvb5dVmnm9Tg7rf2y",
  "key26": "4R566ZreSUSwSDLBiceP5hdawhUHYD7obJ5GUKFYb1wvfTdMS1zQWSidREx4srS7N3yBeKiGAR273wFv4fHp1e6S",
  "key27": "4Y2WPHW6MHHCtWsTA5LUSrEYiUuXf5Cg1XL5jAgiCimsdcW2dKjhqm4qKHLi5trzvkMJgJHPhe6o3yXarXxh32kp",
  "key28": "5Zp8h2m5MBzBC7dYmBMHANvZHZb4VuN7Vv76cZt4SihDguARpVBRyGS4y88GG27xWJxpitvtrXogCKNSP3EYwDn6",
  "key29": "L5WEEZUXhXFayEUk4dzzAaid352966dzpoQhq2zVXwKYhCuU9P72UusNvDwfUxSqCFAQ4342mB9wAz5SgK1CH7w",
  "key30": "3RRoCUhjXhFt5Wc8c7BMXLntCTG43F4yoHR7CVguFNGBJjVTTNuHsgiXWMk855rRoT4kfJEagpsjrEeJ2cC458KF",
  "key31": "4FJR1SG6T8hhaWT77MW7tHAfC9EMtsa8FqYM5d5JLv7jQGzfsYtQjFtRZusPvG1HmyAWTWzFPDhbgMS11WR7JuwZ",
  "key32": "4B5GyEif643f3qGFe16UeA7so35gCz1MwbgZR5norHg3mmqctmthVqQc8DqC9oidhnjtYjZ5QNgjBBZnuHTVVvY6",
  "key33": "vNmVrtXGD9NRbYrsVSmaxnjYYfbSoVEvWGtwAFU2XevZuGPVikS6PrRrWF9wdECeEUTk3jtXXww7mnhiGGyJ8ym",
  "key34": "2HD4Eait8wchUtMQqFLJdXtEFocj5HrgjMyeScGT8D3kF4BTsPu9N3zknQWSfpQyarCXKCn5AcL1fBuWT4MHQj9K",
  "key35": "cdDJ5Fz1yUDESSc7jqPJQcv5L9kXT2EhuRgE8AQ3uDzLoDiydxpDcbMQJE3Umg2zaV9ARy3M6BxfiB4qBTcJSK9",
  "key36": "58pQmsW3bMaoMPh2Y7H2B2mPekDNvZwiSsgGvycmgWYjUWXPwgpKrJQ5rB5fbct9dZsKs6B8ixndYrtVQLf9ZgmS",
  "key37": "33um28cyz3JWoU2exXJefTVdj4ZgzMoRGNhm94ZMKgeNgC5Q2bjLVT77bSnXGnq31iGrhRbtLeajoXxJd6AHBQ6e",
  "key38": "4q7krpvP993t3esBKJqa6XGfvnc1bEVxfv9rdZ87a8z7HqBaLxNiC21NMB9oYa3XT7CknQeoofV5k1vAdG9QBczS",
  "key39": "3JoUuLSo2818yT7nqm79YW3wrVvWsNEZVDWYi1E8fYvP6HV5odQotGPMBgmiu9cUVQbiLN14fxHizC27CMPXkQ2q",
  "key40": "3Lk7SsJT17ebxkMHSCcqmLHxrFPcsBD9TpJg8EZ1ckiF2LZthSy9T9KUBvexFM6wtu7v8wcfTJLpavv3UrnwYaRJ",
  "key41": "LZYow23rgo46iVhTfw1Ch9SJUtA3nPCWevwfipVonXrW3cXSeDi47imRV48STKwQ4wUYshe2jHYCzKPTGQhxfUL"
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
