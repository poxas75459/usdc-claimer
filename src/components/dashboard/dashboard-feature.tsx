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
    "5ZpYQpCgGTVngiaBebrmFvXaj6Bynm6fDWtLmYudhK2abPfGcFYmtTPb2SawhUpiLsunSDxGZwJM3TUP6o1c2yyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a7iVK8t6hgk8L4skfQ7rmTNGJ6q4xUdQfBiaXBw4G4XkEzxizFjR4n3F9Cie2RufmVCF7Cg69AS8JQbMoYXKnci",
  "key1": "23gPi9sAShGmXtBoX6SHxpFGonwzhBx9MM8h2zyLViajbWPBi9cqjCSWjwtp6BGxKDf5VKFf1mW8EL1SRk8jXZ3A",
  "key2": "5j5ZLEGtLCjJoyJAPCuwroYcNemzsMmCVYBhKKSzXBw5ZDUg7VGcXJWQT1BDWqVxeqf8QBEzkiA1HVU27TqUEQpX",
  "key3": "3cawfDtesah4u4TftTpoq9dHowaa114yRJQt6X27RLfmCrrQksCSZu1zuaDbpjqgszGjVzDR4gFZaBAp6HRB4UFG",
  "key4": "5fCxVyRukfnvW695PNyJKy3mNjaUR7ciNARqb2cGGnWG6nUQEwwrv1qrBD4oky5nKqwTD5ATWtNvi28pdGCgSxon",
  "key5": "5AYEjHeQaBRxLBEToXpdEafVbNHACqXTF2oWU1LtBBKR2WgUPrAzBA5Bxvy8kRDu7UdknBFyGW4KfsZen5c9nsua",
  "key6": "5wCfn2PfN4MwJpqFHJQEshTD2KJEKq14LSCsudrv1Af5bPu5oCqpd3Ldo2vAA7gt4Uqow5jSqgPrcCjBtUYXmFTE",
  "key7": "4umzsFnqbzKbVN9erznL7ZktqWAHg4jm1EtoFJyrQQvpZQDXMhgvXF1JLjeEQK1JzxbUAKS2o5KC1spWgXfSB2f7",
  "key8": "2BGg3x4cYWpDcbNy12wbYqRtRjDXsNkFzSfXacJ5nQXTXh4vrdHT8J2cbiD7RNsYphAvdMsuZYEqwqc2KiTxqQgu",
  "key9": "55GN43bk9Hfqx6xjPV8Y59yLySDZs4J6uY496L1v2X9LmJZ5qjN5umWrE8G8r1PFpvQ5rLV69eRXKgsEw4AHuRSf",
  "key10": "3YCiSr1rPKbme9TD3D9PMUzYEPFsGtNT7AnuZtJctFy2paL2BZbKF7bUesLLwQbT4ATukTeG6XV9Gs1E7gQsdsm9",
  "key11": "4jy4wyU449s5ovRzTRhY78FAsVtoqjyPuG67dvkD8PtPxBogchvAfNMQXDmgqiEy4uNDLqZn7ZvyfK8aeV6siz9Y",
  "key12": "4nk4HSP2vTobvUNpCh3mha8tR6QG3TSYNbmjzdKkpRQPWqb4uA9JrPdMb1fUq5N8wpgZYjxyhXVGGK2S13Sy6Zeh",
  "key13": "5V4KdTJNoMYDRmkuSMuaY4Q9AVA1YpeQxqxxtd8rAih6G7GQPBj6yi2QnQmG5BeLwBVi3qHGK9CDEQfkfdBhBAAn",
  "key14": "5NFCxjhw86qb2Fp1hU6oya41k5brVBVXCRSSMesLxE7aU5Gh8Zbcg3FE6zDEHmnhdF3YSEExCkMfhgUJPHKVKZXn",
  "key15": "o3zikFyFQrPAmiNhFpCwEG3dKCTgXomNREUrzHRan6mjpVZNj6iNHA8UDB3B7JopnsjDvD8So8nKcaCL3HVmXY9",
  "key16": "3D6EBL3KywJCkbMcijFfFc373fVDs9z716bthoZHUNWHZ1hUNZMDQ2ArNHX77NmQcqDvFnLSA5DaFSojXju5K6Cu",
  "key17": "4C6o63P8kGyepWNPhJ584kZidjtasYmT2nah4dsPYn18qWw71Uy8XxU6QNVSoTypAqrb1Xiz2xMombq6AB8JrksN",
  "key18": "3Pm9DVXHGugXNRDV18PnN2VnCMimCCVwHdQPbhpS7NDHsvp4XUmxV5wauVdAFRDvenv6CBxjmmmstTr3tJz6Efoo",
  "key19": "5ubTtsC9thm1coacDsC6oiJQAJajQTPdemibdoLazRY79ioYGmKwsuWfUXcBTtrSFiQJFN9Fv59Zu93ZA3FLng7p",
  "key20": "5qnyEjzBmawNv1uMSqhyTgwmEBUz646zESQag7AmHKjqABCLqE5cg2DYfSkBgLzSpPDgJkDN4GT3HdeCoUdmENf9",
  "key21": "2hGEiWV8yEYNAD1CSgLVHNnDxjRWL7JMFJbHEqZvfJX8i16A2h8rGrFbjsGH4EHXbkrHi4qCFaAoTZZRRzNVeVXR",
  "key22": "iceTsAgQJajpGhkZiENyByke6g7SwFMHiam5UM1AMqkwBrVu2X6w5qpwuU5okHZ6sEynaTyYVcAfpQtFsPjVpM9",
  "key23": "2HE6ALsABrboSg1yioXnxmpVoK4b8BNHZQXdcx4GNK4iKrgPnvGLe1MPi4b41YVxa9ydPXmGJVaPWJiK8encos4s",
  "key24": "5EEdxk7a1ieN3hXqBpurYMMHKYVtqJQdE26YRLMEkvKcVybCeUq6JZZChjpi1ysFpgMQ7bH19PEJsTnLqxHvkaLh",
  "key25": "3ejrmEX6CjbmBASnJXxmJAiyjGix9mvsJ6eBmMu2dCn83DmeNFN2kouWuK9M53V3pvJnxQiLzazeCrTfsmMPimMX",
  "key26": "4BxPEDm5wru7P9CjHmgY2oHdJoucmFiSNSQCCCU1P4aMM77SDR9UiXGThhXhXzWtsZK4t3zRq3LkutUbFjHTDqox",
  "key27": "X5dJSc2D3Fk7EvxEWgPiCtRnBgoyuvdZwJUutv92bR1bUkG1V83oCdjbrqLkAJbqVsy7DggGUz9BCDQpAMkg1MB",
  "key28": "5cPY5U4nLiiWW3QCb9846f3chNSoYaewYQSxkiMm11gK1ZKzG8XfF3hb8S2kZnaM6KdkakNw2UiDM9ESqSgi2hmj",
  "key29": "BPGSUUtkhaujRdJSZxPi8ZNE5FJJJxXiGMfP31AFb6FRotxpG3p2paJsRzNT7rcvr3WL7rG1ce6fxFNGxNJqMMz",
  "key30": "eGufK6TtPB6GndW7AimQdqPZ2kp6rjr5KumuQcKXxGx1reHjtEoWoMvnU6NGZxki7yR1RQDN6Eb9bshxgxTWiZK",
  "key31": "5XwEn26YzR6YDivSUPDJUCn74UMWrEBycTp5S8NtqvsPg9r8s6kmenrFLXdnwGrp69MGBwChkgGYhwuUmtp39U7H",
  "key32": "3xsTxiweWJNwrb5TS7uBTn35iz8gus48QXK92i2zc2SP1A7pBc9eby2PJXVDGjeBsf7ZUi2zmu2w2iwJe4V5k94A",
  "key33": "xMymGWs8FSLShQhaL9cbTmsVSystkrg9EFVSPzogyPbaD5LkAme3vfiBopTB1Aaz9sAHxVEsk6esQ17hZTtvezk",
  "key34": "22uppmipiYbc1KnXG49GDJxofXNCicqyJn21Uf73UjGWhxSPDYHiEqF8gckvcfDfM7oGbBDgvfipfUwDBEvreRTG",
  "key35": "5Hg8jmiYAZe5EzH2hv492VQYgCYcB8gc1NdmXFinVEfrRDH4GD8baEghrvpgf5P9y13VKN7ZQRmngZKpavZjD8Yd",
  "key36": "5mQnKF7ZTmWKo68kqBveYFDDMGGpK2JBhFuLm3T1bNn1Kqpx2inyphoahbZRPLramnViYNCfx2ogFPnQkFcAjQGY",
  "key37": "KdSh86jPzeFtH7Gfybi8NJoogXEAW3tZWA8N5JBk9k8onZ82TPa5RubZvG8sfiRN6oSaoH3kvvFAP1HtFpL7R62",
  "key38": "3wPBnygSqnQpjenRD8ozSKanKCC8pUZKiSewP5GxCFRHmac2AFdbxL6ibt5KGsu3KJtLenMwPRyzK8e5n2NNmJbc",
  "key39": "5DzUitHkq1otq5xHPi5Fz7mpFsikCtHrCjkYmnAvAL3XLW5rYvmUMSHvDpPzxxFac3jJSRiHNy5K4GNgBomSbkt9",
  "key40": "grhvycK8991MoF3vKxyTFjUMMwZnZbpGzSwnNPeE7NCzvwCtpuCThHZqipALJBVYvF99AN4vC889wKvkLQUbSxq",
  "key41": "2Mi38b8wv53GjkRCB9KY8Qkj3VK1TW8jdCpuTibLHvCGhGEX6RGJinKrc5hKGtuJZ863qhsGHyZJMSq95EJu8LMh",
  "key42": "41vNg8MzGtHuhmzstzaCe5PDsrgTD4iqDHrgWDhig1TsqQ2dy8vLF9Vi9KEEgMnDwNH6ALX4VfFnxYEho4YRyW3i",
  "key43": "RAhxSZCvK16cr8mc8sAkznQeEYwJfK5UJ9hhxk377z51oxiqRLD7bt4gM3b8Ek4TqDRHZRnfSNtFmwVZmimqQ1K",
  "key44": "51PsMd93KdcFnmkWTADDiJJstvZCBdUTKGKjVVdKDmTFPZqRj4LCq8yZmrYtQbVtfXmTbS953pWWTQbowerB2EP4"
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
