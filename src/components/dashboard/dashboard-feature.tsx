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
    "md8oNxHKRsKFW5uwLE7W2cda91v34TmCgGtuukAKUNzmX7TvQQ5vutdXPYDcU7qBpnJDGMKbkdjzLKAsphHLC23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3akYYLfKLU1YL2zearrqC6RpJ5B6vz8zD44aYsoCbqG8kA8QHFAFKaEzxEjFWpww1w6gYadJrdViZH4gc2JQBjwk",
  "key1": "4Ujzmtr7bs4gG71TMsiiUfvJxoA1DFZLhZZ6G6Wb9AU8BpAhrAWXGvGY6Ea64x66M5BDMpewHqWgXH4v2dXwXQNt",
  "key2": "3JwJBwG6Sixvvi3xUdD6ZxQENfQyxtwW4gHJ3bM9CREFhFFd7BEH9n7HQu8A6hMN1SV1L5A8tdAY14yw3tCyLyD1",
  "key3": "eZ7yi2XxVsnEkYjehNDHMPJyM3uTdLWbe55eSXDnQTvbGPH8M8TvesK8cnhN2hPaXsNUNn7JDzukW6PQb74CkDq",
  "key4": "3bYVNxJDUkGbCHB6sJLDgybWVDoPAS5fvvbWnhxivQSfEp8hHMb4L7TMpxPbH6NqFEFvvDCcFKiaYUd5N6fiEWLR",
  "key5": "58DQ3LUs5buLkkTGH7UsuWh8HNVwVvSSfMZzvyaHnJNFTdaJ7kK7tB7w2KSVQBTTThkXquea4qncS2TLFNQqoS5",
  "key6": "2hRAnA81nZqaXd2cAsxAFMLqGV9yGdzYL7gK1i2a2FAwB3XL8bbHr2yUM8bZFscQ6cqTd8KHwFJF6rCsjB13AUr2",
  "key7": "41yYhhnigsZ9SfTmhsCRmFPK9HxhDeFhtuJCxRtZjwx2EQG7qwSwVBvbX31d4zT7p1nqtizXRSRkfFLuYTXzv9bX",
  "key8": "4Mcaxs2DwExgRCB5eRwdqUb93QeCzV8vZY3ecSYD7wCvQ6KqjBHQ3BcoCRSZKLx6AwobN7B6WJ9Jajo9U4Fsf1GH",
  "key9": "iE1UMGxFdKDsNB87X32N5VWyjYuG85LJ8hRQUj4jt8XZvpHBwNvgH5Z2DcgNymjFduSLiyp33zm3SKdKB2jMB5q",
  "key10": "5PU4vjCCG1MZ4GABDNhhgsL7EN4f6DexMGaoJUmv94xfN7VSZTRKFfozAPSuF9Qk1nRwUqGgU5zTdh2g6wih5Niu",
  "key11": "5YrZQWUf1T1828vVvxk2dNcCi6u2UsQ6YJueXmwmELoAphmhqL9VQ8sPx6ePDnJce5rtBXZbV8XHWxeTEcFYN9uN",
  "key12": "2RaH8cFPJYHF22vVRb7MP3GQppUjtbEuzGbwVPfLgFhVVx2F9nkvJSgTXKjTbJUsnjgAikPqKq8KMXzwV9d3NEy7",
  "key13": "5KLPYj9PYCgCPWvJ8xdqiur9f2V9xezZPR5W7HF67uVqb77xp7zhgrnEqTUCodPnb4WW8L8aj9W3hUAqEQi6GzBn",
  "key14": "323GYw1HEAyHAZ5s9fxZ3cRs1N5rqYW8eSPDYdLXDeUHVm8pjtWTHDo5wE8mhD6znPz6wPHKgLsKdwfCVxWsgEWv",
  "key15": "3g2J2S9TQB16e25J7eYMoZDJNi5pwLbXUsL8n1KuypJ7gV5QzYB1Q9JBHuM49b37mnXupEjw4x8UHoGEjVWLLGAp",
  "key16": "3pGrC5njZx7dm7yyaSWRX4ektjEuau2RKJSH6jSoacP81x43hTJcRiqCs57SHFvEekgFHE8JfHhAVj33xk5xTU6v",
  "key17": "hoo1A6DrbTPcyxmPbr9JQyVuZ7cddqMrk2czPnwkLVLVhqvMAFK1gQ9QwnKghowhF3pUXKpVbfdqVoGEY27ZFyX",
  "key18": "3t7eNf3MTUjAmxivZc3DirYnoynWp8z1k3FZXc5eH6sqkMAmNcQB83sak7ArxytF5UK6B6vPweiMnKmyiTo9VjCo",
  "key19": "56LntvaQbQ8F2pZ3U3QgDMbduJ3iR7mJJDKwUpa8Pi6wLNr53D8nRd4w3Xp2r2zJeogs7C1yT3sjd1cu8HprRqhq",
  "key20": "4Lsje4LzygEwkniicjYp3d48vyVegoBhfKKZM9CaQqLRfY2V2K6RzgpTasZTwVtiEVgBqywokqXY9nExymUqXYH3",
  "key21": "2WdevsR43a9yxeqxcw2SPWKEhpzMAZxUYqrDvsFJTnimh7MtT9bwcQFtHRnnPD67cheCs5eWjUXsxvi6SYswFsUG",
  "key22": "MpqPGzciDcCaC9wGGVPr2pQnFazMU279ckeS2uU9pfVBjA5GJtK3YystieWqx4WKfTdqsnmSid4W9csNrXPzZc9",
  "key23": "32FPrm6ure7urwRx6J2uvFJEE2rGzc6GdPFxrigC5XHMn8315qAWHuFE6GJuCcDLJtJxiFztaBL3cdLiUWUXXsQM",
  "key24": "2LCpsiLoraJJ9hAatPMkBVCQ8etWuJtVw47DxUtTtt3iabT9sULGgZmQGv5bZnL8EjterbEEBUPszE1oa5vsznuc",
  "key25": "3hUbmjqHY84d7wiNHzUnqP6H3qDd2rcLZD1vHheCVNxmpZRHMPRUWEToXcgPikxNQRmKuvN3S6VarRJARGe2CgbJ",
  "key26": "pLjT7uiaCykN1vq1w4LpB6R95JxaW4djPxWpkVq9ADvjaFNcAe1SR8JnwAo9CCewFs3W7jYg9UZSKE48XKtVST1",
  "key27": "3ixt6VRtds1owaZtDUs9inSkiPpPviu48MKrNk6MK2HvqZKgkSk8Zgkg8avspViVctCEnHXsbgyuzjcRjWGA63wm",
  "key28": "29Hzc9JHHRtsBuedUq4PboVXWVjAauKUEMb5Jiqo6p4ZRku2MfhyAq1sdd97inm4cNUSoj5KDbd1HewsxJNWS8AW",
  "key29": "2t5Qc87ZNdhym4vxx2nPTvgidP1G2Pn8oW2GWXB9VdMhxf4wvUXPjce5CgZ1NHqSKYDnxKpQ7zPaADkiZG6bf7Sa",
  "key30": "3HNoEYMzXoFieX6SEc6WQQ6y8J3zjrquGYnpSXsSkpCSh9AN7AfF8FTPHGHD2M5FRYSRGwdQddWJ2TFyw6TgHeQ3",
  "key31": "5jRKF5R1G5xmEjFmhZjk13t9vpJTy6nr1p7csuxphz854V129bdteKkp7BQBfbrnW5frRQo9ARMTLcvdwSkxFFqD",
  "key32": "4HmYn7UmQNCYs5dMig6k73ACkavnSY7WqXNfFT8qNN2LTCpxW8teqfnDdGNrZm7FcJ5j7QrKSQsc65PgnrtLH9VE",
  "key33": "2EvfWKXo6r2BhjEC8JuKTwgqDoLACPwgRWKfzJDUK3es9Puy5cQP2bujxF1itFBei2m18PfoNHzb7WGkkM8LPaYt",
  "key34": "3kBBAx3yyDSAEQbxrY3UD17LU3DwLvCHYZ5UjubiEjxqHbyfrY5TVxmUFyb1zcn6sS9u2CZz92qBiue9KFKNpJd1",
  "key35": "51LVoQUzkj1RWVYa9UyghmVG7GcgfZ58Xmx68d3TVDBPc8KHoY6q3NnHRpqammiYdVhj2N3Y2sosbmegpUTppVEg",
  "key36": "4J3RR2HnwbXqgN8bjjF8N1QhxxbUS2LHNnwETSwU8wjw3ZybvWbSLec5ipKbwFxWx3Bcq7JRHX6oHM6oYhwhXFsF",
  "key37": "2TcrrSxUBiNMdzbuXC654DMnwf6qK2gSPiJYaqGpAwTprRvygF3ZLoRtkHKXqwiU48PaLuhMDKAHXoGT7LGmikJR",
  "key38": "3Aq9J1vtwHE1cBrv58QWbHfM2b9UBQYT16YpH4w2DUFw4KVqEprwaoYfQwR6zSMhXy9NhQhZuP79wNbJVZuKUNVT",
  "key39": "3cQgr2mji9yNtyRPXKHsnNGeZ6iRw62ripD1dGMvKkFtQnpzWMFSX9QR45x3aJ1crtmPFheMFLfXRUobbENxx8jm",
  "key40": "3jQFPcmgswdnoaK9Sn9JzfwzwCYN8iaFC3L3jQhEXm5S9xRUqGFRyFqwTUUWJw2fpvuMjhL9JeNG3CgzyePAjthv",
  "key41": "2Min1Ee5t8kx43pMGhYfipAGZsCmzVhGniVFLDTJpMAxA475QT8pSZNvTMQRTEPExywKkLeD4TQx3o9EtX2UVJqR",
  "key42": "4jkKC6ByLdyD5htNyqNNV7S2TRw8T4qJVVmY7ZfqvsiGHqroHy9LzxELZeFJorvb7P3DQeWXAD8g1onJqXEAr22t",
  "key43": "65jmX645hmoyTKozZWb3ud54XJDsbZuDLjvmFJ8sKft49nae1gL6ijdSDKVseTitivKgrmtkUuGhjiF9cotfvEL1",
  "key44": "3hjZLYHnbahRW2dkNQThNWm1oXGGA7Wj1PCYwMqvJU1dJundmGTXDPdnEhbt1kidBZaWrWRaSZ62CvCX6UxFYTfG",
  "key45": "Seh5HYgkoSnmjnYUnPQFc6pZD1FQQokqpcTU558FXgLKacehpgdX5EyKbpxZoRqdVKwM8VrW4TYg3fJFe4jqQP1",
  "key46": "5mGRpoBhhVoU6zsw4hGd9EXJ1TXeTo6sybjzXHDFoWH8hgyw2D9kTWrJGoBgFzTMnmg8NJDmMncwsmFdNkJvFxaA",
  "key47": "3nMRGzsdTyHvxdwxACht3Ve7aDjTcbD11Dbnjjm1tTSNPUNvpyH7Lbr555V7bPMsLPaaGMiam7JP7NLW4FXsWAMG"
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
