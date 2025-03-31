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
    "2R2SYPmJ72E79xhX4Doemp2wXxwQeSnennsci6usskNLGW2J21C847TPXYeMLUu5vvF4p5dV1BwRpBavSnC9MNhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4611K416KncKRH1HCVhdnftvp5JBBrWuebhrCWbk1C3TD6i67rEf2RYxgKemfMBXB8fcU9abFyQgD9KZoVPrNraX",
  "key1": "4cUbZxfWhUpbgmdiJX1tfjERzckbgFBrRZJAquMkYiyhQd3u2uDsemsBXv4TmPVMaD8mGC5fsadUGKCJZGf42n4m",
  "key2": "4bV4PwuojA5M3iBSTprynQC3fSaRHRjHgYEVWJY7frkLe8dA1vssJxxNX8hSSJKurbGZRiNw6EuqJz5xZnJ929kx",
  "key3": "hJ2NufJ2CWAyU2NoxYj57G3V5kaD9MWdAxU4fKk4BtEVdRX8TU6HJ1ofrFW7273NsfDjwFxKkYuLnXVWYMSkjrJ",
  "key4": "4cbTfSpJ8VwdZH2PNHoTLDQ4eUC5sNsxEtS5fa3Kj4QHqgzaNq1wt1ptzYDzED4oGBy4oCmLn4B4VTqdArYzUL9s",
  "key5": "3YArwsy3mY4ShYEtZEY1qq1QCUEhkqYeebp74ZxXkMiKu9M9ZeemCvoCMxZsmHW9j81bANKUBNp3VBft4QMhfS6t",
  "key6": "4DUDZP9tdW4xMGHzi6Fzg6Cgdunnziy4LqKLJRUDenNEavFo9hF7bVESN8zvnHt4joTKJxphR8dppiWk77PCJ19w",
  "key7": "5RaMnRqsjyuwpaFDngtfUw65NXgrZUBGU9egzyiC7TcengyPBbtDqwS6Me1gkaUeJdTR6DwxDw6JexKHAEBmyUn3",
  "key8": "22qvK966EAggNe3JahBsUbkj7bS2H5RmMd4TErGJaLYU5MKvbPV5J8baEKdxmkVpsXSk5yLPTBjNqiPEYcLZ7iMp",
  "key9": "29HUZZsCsCLiKSqog6dPnGe8kvJWUVCr3VkfVgpBitQkAu3QMme6zEacPfozYSGPnSFuwtTom3DXGfmqTSpR9vty",
  "key10": "3MD5ygoe2oXU8rgKAwCx8fuQAGS8XkMZdxLnyeB7WcZ5MCHPj66taHkvSndqddFL3SFKGFgCY1ACq55kfwEqz7qC",
  "key11": "5R2FhiD2jtyhXHFu9FCsYMJRcaFscfMTsbS86R7uA7R4hVWTRb9Y74Wh537f1Lftsgf6DYJDYzsZQuNWB8v4EvZC",
  "key12": "Mse2X8b5mFnZhCs1huCRheyFPiZzEGfCzmMhTs9istDRd69evtQp1wrfJZ6cXDtrVZNPuds4CesVHTpDQXbXcLy",
  "key13": "4Mc73hpi7QHcBjQHcasDJRfHBdKEuWwd8vztgHLRKr8pxpZSW2dKc3e6rwcdksSXqegQVJ2XP9gYrQGjXDwJCBfF",
  "key14": "26yWVX6ddFniboJdtaEyX9DVMdZVTgGhAHJRaxSUcEjw2Ht52JnaojcfBe4emg5zyaupLBmn5qykdn4NPEpZx9Wj",
  "key15": "5zpA4jANtwRjY2yeULjZvfRSnLs4zwAEz6yLmY5NVpmo8WRybvCboMAw2TMHAKUDzwsWkJ4C2zcxPLecRdwkw4Hu",
  "key16": "4J1TK2MUMcBWAzhL7uHskeLLgRoS2UnDFvLVUG2AKSApWrDuk7SHAAdb4QqJ6UP4fRJpJkBBXR8d9LB3dMPDf49L",
  "key17": "5DXiwWTQwWjQigFM61VTeYCFajHLyZo8hv1tdUpeui3SGUmdzsD6YuqRBL91x5Sih9nigu66HAtsnRi1Vtw33vz1",
  "key18": "5ETnNLC3GBP2b3XJx42ag2fKxvPBiWENaNgrW6viiWn8FUapS2gmR5mrdj8Zk2CiugriDRRXYhmg1dUKXmi9omUh",
  "key19": "SnaqEZeDouhH6SX73uRMZADfxGjM8XeLm7SjFF29w8ynCrcvrSkdwTd77vCJENKB8Q1bbwacS7sBXU5aESiMR43",
  "key20": "4VnmYVxiJtn4CWYMYkpLdmi6hFdiXM2hUG5hko3n6o8YJRun6X63gAVdQc4DKKm7eVyraA34bhpn3nKAmjPp1Y8x",
  "key21": "2AQSJi1P46JQJ9uUuE7Dx74a4XrCCM5Pvs3ub3DNiZvnzi7gWkL8qJkztvn6tDGcAurgJR9A5qAXVkTRuPbchBhd",
  "key22": "4RfkMRCSwFpE2hL5Gk8gZaXLKoyi7ixHBwr9L2fuEmWDZgUb4EiM6t9QMB9ow8M9s9WjPFDyYnKmSdAkW2kd1HB8",
  "key23": "2vd44JP3Zsm7mcq5AT9urUW9oXV19BB1AqVqRBRK7BQr7gCKsLyardEsL9Eg52B1xpD8jJ3xy9fAfb1ePK4drQhz",
  "key24": "5wZL9AGmbLR97GqVUX1mkMkHLzD2SLHiKogUgvHk5hGEi8XhZLx2VTQU9JkMaw5Gberu8TXkam5yGgWK8SNCPzh1",
  "key25": "2xcfnQg3mGtsiKjcgUyJ7525mDPvFPNpLXm7ebeJJEKHB5Gcggd59T3eydmKkrXEzDt6aXHMfCDVdZWdQg2dRoPP",
  "key26": "4ErUK8EnLbwEbMpqKEt8nLt1FR3SwXxGzkAnZNvgo7HsD18LCxvKTZbBt9CxukYAiyn3tWEPqHvbMqtrqUqP7NEK",
  "key27": "6ob7REAev5739gYmzga2XAsNtK8GHRfWnuMhXoY9twLNYP5d8ANbAwCMiR41b5twuvqr6TEtZM94xuu2ADdxe8C",
  "key28": "34C2PqbbXT5Kk9ukyUTFvVrdLEnMr3ySCQ9SUBTv8ggUoa5VBJaokS7T3G72ccJE2T39NhLPd1PtYLzqWw1gWqSD",
  "key29": "2sctqGT7HxeCmkatHu2mYat6dtDgMcp8mqNdUPDGmHRuptW7RwWJvofZPQCkyXprfar2L1CE7wP6zLXHgrsevFgr",
  "key30": "3KtyhEcrrkp9MZTgCMZBgH9LhxrNfcPK7PASnakPwx63Nzs39QoQWwgPW8tA3mbtDNA18kuzJWC6fNPDfUqZi59W",
  "key31": "5ijZQN9u48kp1uSF4DWPRD1nN8q6UBr1NotSF19ZKUyVaH674M6BdRpM4JyyuDuGtncS7eggGVx8PnbMiPH74nEE",
  "key32": "31p8Lw2gRaDXVV6QT8o4oswJcUimeBsLNY2Hz2ftzZdi2Dp1P9vPxY1K8CdPw87pCijjkNwPCp9HFp15a2BWFVC4",
  "key33": "26ApeoozaaTrbdyCVcLn1BhaFskphQLemcRKbYVuE4P8ghgv6pcqt6Uszz1fQdaWrEUc4gdsF1HTR3YfMgYH8enx",
  "key34": "4YeTebkmpYjzdFfQe2PdjpPErBvZaG8sNqPVSJfonhbSraUqJckPHk9bX6KXtDcmt7FdbPiLqNokXAfa9wDrfV6m",
  "key35": "VkjqUw8A8x6ffLPdtr82CC5p9PnBdph6savKWJgvc8Dc8Xdao2C8WRR8LkwCZSWAAkuSwoy9qmvv2bBNUTkUtY9",
  "key36": "2a9Qaca1p8syprGApsd9pH47yDvegfddEirB6L6XNHzz32RgRyuY3nBfJV8F2gDEzsosVhiDjxbepTmGXoBHpoEL",
  "key37": "2SXjVZHUoktb6msy3VPZ4ERxwJ1KeB1feEzcFdifTQysvp3rGhZTU88aEdimWDFa8xT6ErFF3unNtmqJAgqtXXS2",
  "key38": "3HVL9GQFxKcRrsJNeB7EV54a7x3uKaCqsKD9CyQS1NE6P6WPMxAVfdMUHvxyopvVgR2dN5RoZbCRnsHqp5DTdi7T",
  "key39": "5PdVh242aDNAZvJ54aiM1sFdErheSSTTY9aR1oMb59FibBJzkUENbTG31Qj9CvkiTc9wp8LPf9D2LuueENFVLGeq",
  "key40": "3AQr3bz3KLEeghsDDrcDkrCmrpy4vuGL3hUpuqSiytFrT5xGQ2Z6JARMBoii6m9MDWrH8sx3ccWJ34Z9WskwE3rN",
  "key41": "4FGyP8spX8xQtGRFZ7FoZnSm1i6yPPTgNcKE17gztwDNM4A39naeNc7NcdHb83FQHFpEHHyA6YbkvZYcLpmAbJo1",
  "key42": "3T2HaFGkJoYwQpPZ1zQjPvnZTSuAfZRCfroZiCW3FR7wU2v5HYPW54am2JzfFjn6ZDS3kPYfBJoHSD9rm8sgvCyn",
  "key43": "4nN4RJTkogSnMxTvwmtMzD9WFBwj2vUiSt8YgyvYm8EuSrBJVxxsZQopu6diMXkBtDtLDA6MjSoux2EqtY8pUASc",
  "key44": "Y6tobxJwetSMue6vd7MwG4im8yZvj39jYV9MGJ2CTMhmnndikTJur3LjdybQkb5cnnV8ZyqY5z1ZJLHiq4SVmYo"
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
