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
    "JGFaMsotDQXgy3TM6s85VsAGnMiYVPmiPGc9Sy1J6o1rEbgD1eomjp1UVTAVBBUsGfxkpyqZ27WD3RqUfGtPvvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bHPTGGaN8zrhra194aToDDmF9xMHpQk5cQHgodUBRHt5U233bHmarFEYoaVYkBJKLYB3oTkQj27RPHYGuVijjaw",
  "key1": "Bk7qKErYJE7CxXtVyPG3tCuy6G4wQnjVPG9jFmiLcxW7aoGaWcPDfmMwZVikDVQE8o4P5FGRQr9EkXsi4b2fmkp",
  "key2": "43v7bzS9CsThCUiGZi9Rnoq911zgXFf7uAoLqXrxwEi64oMjzMqHPL2Cr1ermtSist1emKMfUyvpz71NgNd7jp96",
  "key3": "4zzGb6otc1XhGamKHhumrsgkEB5xNc2mr5F2ENSyqY5saqLHPqvw2Wse3xftanyocDvnKjBnGFo9Cs9Hmp7chGXh",
  "key4": "5VKKUmdaYfcdtdmhG7XP7icEvMFGP8UpDJbuJPzx7tdNyx5gK8EFRG6oWbnZfKBBkDwb1p5iSad9EfCYPQv3vZaz",
  "key5": "2BFepFvEBg4VpMhUzt3PENYkR3SEbJXExk7VsBHgJ1KyodSDNsPqfyy72zAK8zpRfoRk53QHQyVJsZU7GQDfzasZ",
  "key6": "4EGUDvoro4oV6W6vLgejYf1Wd9o4YtwnBTqbEATvwcYEcmtHU9CuMrm5oFQnZ4skykW3MtyFQu37zwBPS9Fz91PH",
  "key7": "2bVmNjNBaKvgtp7cwivtnDvZpRATWm8En3bH22h1CjPun3XLAtxfiDjNgefWMLFQyung18ZtsLpzUDikLzmWbeBH",
  "key8": "2h4XoBJVqtfUGgksirZs2ooBnm2iveR3ayYKgwRvzZgvowJZ217j9m9G2hdcgqePQQ8kk2iv8Kr7uYYUZPXd6wFn",
  "key9": "3en7vKYvhkZcmfHUA5HwtKEeXBf27E216osVXyhEHLMFU7uFey5Ez1SHbZyuJYditD2YpXzDgcXfX4G9bh7NHqCf",
  "key10": "2YX7EF81w6gAYpMxTnM6TqiL3Say4s5s3adkNNbg7UAwexfRWbBgQPMb2Swsy3X6pN7DxXraojtki5mNAhKHWTME",
  "key11": "5LEb1TA4Gzz4FFhKk4vBaY3yeJfUww5JeuQQevb74uXQESH6f8gkARDuRr3k43Bqt8BYREqXE36aiCiviPoByyfV",
  "key12": "gR9oTp7YwpaZJDboKVcUqP2rdP1mXTic8ed2VeuPt8M3KKCQjV4H6ChD9z44LovcfLiUzDMiBHkEsPUkr6N9VJp",
  "key13": "48TtkSbPjRpVq7QiJFUVh3iPaLvYu6gFKU56UM3EEHGaNFgkoeDpzNJJkJzsbw4GxU6p1ro6qM215DCrcBdZxvGY",
  "key14": "5eJ1U4vBm2QjL5zTXgbF81uWNvS3wu4BY4fDm7Fb7w7cB42xWp7kvuKLhg3jBWZMUjhrqTK9gbh1iSgTdJyd1cET",
  "key15": "5D6fT16wkxjT546gGukdeG4dkkVmJUy7eYFN7DiYQ7qTbrABrTH56Lb4hCZxZTQP972BZRKtCS2DG2KzQg3NAP81",
  "key16": "3kGvyZybsh7HBQhSSLScvCtruerAft7zB4ZNzNenkCknUZRkkuh9p5VK2Rt8LJ5Dx1EhSuhyQa6CyS7TLFAe46eb",
  "key17": "CsdRYjBz9Pu5YCStvvfhtc414CVcbzQtbxKkAyLMpDu7D8TCPaYqWRCRHY8RfF5et3SKRS61TJsf9WdMthNQyZx",
  "key18": "2Tm3yeGUmXWrc2manU2tzBAup3j4C6Lzjnpptoivo7nyHhgotJfFMf11r6fmPBSZNjMVSbbNQBbNDD9JJgk7GR8a",
  "key19": "4QJvypbzybMYPBDFJgRNG8xAU4zm65mnCsv7xHMJk1jUqh1vn7N6sKbBaSoUQUJKBgskWq5eBA2WmcEfJFx58sqH",
  "key20": "45sJDXvHppYEjSD7DQw6L1Dgroubc1Vqj5WXS5iNFzgwwK2HBGQH8rHdKqtnQNPfMbeyqYc1vvaV17FarUDAdS8R",
  "key21": "225Hv61rCiMhm568eLadfsPvPD23EXW2kjkwgxpYe2y4dPufVKdznbXLvZv1bFXmVEtQKKt5DT9ooVMmfLF8BLnf",
  "key22": "43ar6SUfxBFCrtsrnJDSfDW9Ap7drwy542XcYtWt6B82BbF3XprHzbmmjuC3BPiUDVEmQTpDpbxCp6vBFzcq5C7P",
  "key23": "3dv2n63ebuBdqdmR8QzaD89MC7CHxKHzeP1KwcnwogDLCaSQyGJx5d86rqWaqMZ5g9yA3jbKebNdkf3njsYc1vrt",
  "key24": "435o154426MqfkniZj75dLWjBxbh2NkV4BaGzakdWBhpRuwJCgNudjZjEbEUcD2VMvSjcc2Di85vH4rGjK5RUezN",
  "key25": "4tdwPCpiVojHgKuxVXKdFEXqVsHsy38TNEZdwsRYPsSeiNYhAZShYiJVDjqQv7P1yyiFFPxzqfuRhfqhC45EF1Gw",
  "key26": "fAQd4VanDgmWkZkVCPA19hVFTo1J4PXojbMFkmd5Qs5aCCkaaLQ4DbhNv2zV2jTNLXbmFV4BPFHPvmMTieudjHH",
  "key27": "21gkHogysWyLEBW8VyXP9sYRr48adWCNLrRugjvMpLbVK7UFqGQCyhV5vtNc9AMbHLCQpsE8XKt6BVRjDHQxAoN1",
  "key28": "5orxfFhpPAnGJuA8X158wP7akHJn7J9DrB4ckVaMZstB5AsGZS2XuDvtJHw7RZErBVQwtmtnSDBXezrzCKpzMGhy",
  "key29": "4YyCVwL1LqJKFcMJ9ekADzZYnTdnagVF63Khd63MCz9jrvijimhiG31pqhtQXW9cXmpyCh74QDcnabAjrxYy3Wrq",
  "key30": "34VUE6Pk4ZyByz6AbWdNCzDCgskHSR1xMHns4PVaKHj2ytJUu8B3XmeAKyJgx5FA69aiZ1QdibdQZATbf8oCkRyP",
  "key31": "Tg8jJKiaS54Dnwq9vzWUDSewKKc6jXBhAumuwDHXc4sKs54HoiKF4tj9aAadxbrTMMY3JLQ7aVsR3QXasHwQD6h",
  "key32": "4CB3YuCSEWVHCAfCDPdP1xn3eq3DoGsBvEqJF2pVRKn6jZV9SHmRCYyUChawNVmgvMqPYonwBbvE1Yzme2668vFc",
  "key33": "66ms3urCeP4t2gTMVKyAyWuCB5sxsGxeYFSmq9WstpdUTwRdUgomWLP8SfZ24LPNb6mJEB2tzjFrLoHvtTkggW6g",
  "key34": "4tftWT8Xm4bszTnanUhak6moxjHExY7edxFGqBhYaB5fSyXwhKSp1QgkmLKMB27UeCkX7YHnX2w41mR9drGDnPwY",
  "key35": "3K3hyQb4TqX7e3ZPQbCTkWWVJL2fJx9Mzgxhp4zhB3okRxnZGnDrTsuu4v9hUMsFw4HnUu5mmi3aPKQ4e6FANwse",
  "key36": "3Fsjs4LUojVm8nMbJnYMgbgVb9Eq2FBvuoifAD92HTsBYx64Fu1SybHC5m8pL3H6L1xpV4YCgFRNZ7RoPNRKFBis",
  "key37": "3EWAuiRCi63wAkxu9QZdCdnpVBs7riHy7QWtEadVnyAwmzrmykABk9RRN9urWoNsBpwn3pyZJMAVoFFqbRxcH488",
  "key38": "5Utb9N3bqa2CJwZknKEkj2uBQCBLEHYDYoDxzfZoDQpPQ8U85rb412CeuFT6ji4sPzzaFT3RfsaxD6mTrDj843Vg",
  "key39": "22e9yKtx9RsHm1ceSBpQTryCq9WkCRS817jUtEAuDss8hghPNiWaHAwQJBbjTTyTQb8UHmGedZeRK4H61snvD39N",
  "key40": "3bUAWmDriydBPfZLUC6grR6oXGHHLMgrE9B5bsvkEoZY66mVcquhSGD8A2kJiSDqxg8KaWmHP9Gjfk3Y4KaCcdfm",
  "key41": "49eLwrYCoHG8RYZ43v6tHEEPr1wPY3XSEPf1pKPnC2ddcLJiZ4MVEcq1SxDrMWW4aQRkFVYRjUh1am3MSxFhRKst",
  "key42": "bJjkbkMj85AaYSpX13YWD54oHjfFeRH99A3ebATS4b4BSntF4kRmKpEKXjCWC52XbdK2LkcoquNfuokwKGWm8sM",
  "key43": "jojPEX2at2NMD4JpUfiTn4M8VQ9Zw7wK6vZ9UMEfvNFWCijU63pEjhVvdRWzAMt3UWWNK5EjKLHrFXAojhEb3YY",
  "key44": "2aX9k2hC2pf5ZxWpJFwumRrsP6UkMv39aDWZfRocr4qeqpMhdvJH4xCWQqS6nsHABKX1t2YfhJ4TBNcpPRuVXiqT",
  "key45": "4A8Arpz9EPYfxQovdqiQ9hSjMJQWsxGP7Wa3VNMm9vtdyRiZRnmpHdu62K8LMa7KMyFBMNwfVRM2rmGG46Fza7Ej",
  "key46": "3dVTMdAW5d3xqYFSiNFMkYht79wNkt4egryrcssQKUPpBQHkU3eEdhxKxEqjGpHyfiAaTbqjfJckenMuCn6psThR"
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
