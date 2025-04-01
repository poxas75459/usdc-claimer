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
    "kK3YKHhC1QRmqamkazjKPH94KcXbMMqwzSNx1HnqY3weeTa8fqEf8PbTtbC4eZGNWAGTctQkBpZ7Z4WoURo9bbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GSZaYpR6VJUn65eUfQ8hdnGniTo85raR4yA1sTDYRckVynUMAfHQpPKWhdQCm8f25Bt6mLJtidCbctzcRK2FEno",
  "key1": "4sscKnDCPGwVEz5XhSXfbH8g7bu3t8TmZZAWJrt86Sf5PKVZRyj2ucNuZrLqLtY7wX2jY1AYdB8g1DuyKrRW5u77",
  "key2": "3vNJZvnjpCDQ6pq19Q4RT17d3o9jEQ4EtHD4HWVfq1SEWifDEbDXz2kHwP5kHK17XfPezc2TxhkVQ2VzpZ5cZvLM",
  "key3": "5vgoxgzB9qNRwPtPNMVwKqgeCnwFhj9yZjoQrD5gqVq9WT94KPrm5nV2D5UzXHGfMNSbSm8x3sVWQbvSkhjraNLe",
  "key4": "4kTrc8aJz5TiuSF51qLtXywoQJsYTYXWG3W4M7ggiqWUkNwXofLFnizxX62jYCz8WXGuTx2k2ESXZzbHrL9Z5LDd",
  "key5": "HzdwzVyAb8DmGhzyj4ybhBpoBcDvWTFnLDc2qujC94wVnKtyAWoNz2vkX4ahaUEBPo9cRm3uDexYF8qxRV99k2w",
  "key6": "64d37eEZGqiyRXbL4e55KWhQL1veThQfqynmAkkrr6wEYZJeQrdixTE3vFkK9r8g3aTRW8b1MsEpFT4sL3oSHcMc",
  "key7": "2tkfv7NSSXxXbCwcjHs7F9ZGdiXdjz8wE1bBfgwx2YMc797PSDAaKGT4QpLAjE9YUfAasL8mNW6Crbdz75Sg2csD",
  "key8": "363Pn3gDjUCgzVwzpDjGpWzFMhf2TqsHy9wxJsKprBVfmtpSN5Ha8TxcrVZm915Z4v71YsEAuH987J4UXzUDb2CB",
  "key9": "5MmCkwKaxUpNe3K4RX9wSPCx8UMbNeJgAtNyZYYgwGWx12PKY6P4CmE96YTRF4rzhJTrCAgZ23AGEzSqK6CNGRpf",
  "key10": "5ypRepiNveuUEmpNzgfUUst9mNQqAKWUwUjRDRUq1pguxum92msR8GaLr5QHr8oYRtmpyQsLti9RiS9ta1JNEqJS",
  "key11": "qW7ZysxJGowxDFu9LZRrv9G6yG1sVA1k8wyta5bciybuEMaBKigy4TibiDtks1JTayEERkUqDieCf1xaFGJAviv",
  "key12": "AGzP5VRNnvNcboxnGVw5eoJnaBB16CZuEVvVsW1FiVqALoEbmGLqEfDb2yCS7otfDdkYsjsXd2APF1vif1KTHBa",
  "key13": "4mLk5cRBnqmmFBPnKw2KK24BBxwws933LPJi7o478i9jqf6o2NDgoefLX3DGqL9LPG2VjB65SXPDXFgxNM3E5rdk",
  "key14": "5XBUAVkhfmzcjWkZrA4qUGJhQT9z457EMynMRN8BxHpuQkaWj4CQ9tHFTNvW2ycDfftTHy1BvgAdtappJiNPVjak",
  "key15": "4SmBVWErQV3edQh2yokZed25D4R6o4MMYP9UPMrYv2MJ9rXf6C2yNKWNvkdpr7yuQHrCSVqRCDgdJEnSfhL1uQZv",
  "key16": "5aQo2FXfnLBC8Q3S39cfFsQ6MWseWGbbepR4fCSkb3LbEWURdW2mXs6bxYTHrZWUtZhNmS5nwU1bpiSfD2QMCVfF",
  "key17": "3NTE26i9mjdKfcLz2FXwqvh6R4PZd5krjBzTfHe1Dj6ZZyBbWHvjqcsFKnXr5MfQayHjKEp7NHvqC22ZtFSs8ba2",
  "key18": "3Qtaz1mfk9BRskb1eH39oz6uwz3ijfxzT3wjvmftLTbQB9G7PqQLbqTJiLHjM3hzDBb7KCmFS9jfREq8A6xVazS1",
  "key19": "3Viwwpy8NQCxWEJVXC9N4xBq4j3QgSRN6m7HV7K31GfcepGzfr2jnhrMZKNs3hjK8B88LpBn3UgFbG1S8y1ZARep",
  "key20": "3JAmfHgcyX5JmxjQwfswwsQ2X5WG2ExkMCwdDR8yEvFHZ7oA7jJtVkmPfMhjxDWnA7zCq4Z96VTDUSEaZB4Wf5Sa",
  "key21": "3VgKj6ciNtTJaKz1xaoFAF96E4KvsfTtNT3EMyqwccSLwZ8uosmmZKV7rHGE4VJdfFvSXPTTuDdQVhVjhiA8RVb5",
  "key22": "W5jFf6pFULymFDvxx8brwCHwQWTKvH2eNPqvgVDWaSdMovidzJZRwAJooV6WpeQ6tZ4fDkau2KNtj1AQMCEvYKz",
  "key23": "2jnDZxjmfJAXkzGQh2aXhNUk2fS6WyM7MS2NrM8pCAYVWCwckvm1FgLjfkQMkhmPjfWBhcUYu3GD18d7ybjwofSU",
  "key24": "2jh7u2uKJpPq3BC6YpEotMXD4Ehf2P6qtqXgiPi2nzgg1NKZcRjh43kacRDdqxAiQFuJzGQsrJfovGskXJ6M4Juk",
  "key25": "3a2bKyaW5u8H5DcV3fw38H41SgqgYqoJVsTaoVpv3RHamVYxQNGFZKtzWC4Zt3wBZRBB7h2LBZTTVAPkspKDvaHY",
  "key26": "4u3UBieKxx9Hf1hJEtzE3xL7g7B7JPN5mM2W2LNtNqkCXQWobyLDhV4Scp7t4ip4MVZqyCv2yp3iiHN6LcW3Cg6n",
  "key27": "38xhrHUCDfAj53B73hC6XeApomo3N1hdxsMfoXDqqXRGAZAHDyRXJ8pHNMkKECu2EfKFKrjL6EmzMyj7ytnAXyUY",
  "key28": "57Gnsh7tpGpYVHkCoMwNwsN7ADFFGbtMWBLg8jypMHtkT934kdd2RfdbWSGqyFXH6GreJ17Rbdv4RNqsP6LXmKSh",
  "key29": "5136897Ek6DN5axC4qGjHPWpMwCK8g3fcEazwLbe9RDYmCF2csSYe6W3fFYqCzPRooL591WtZfkXi41PDv3KEv2Z",
  "key30": "2wNS4zCCn4fUfbojK2k4N5VAjzmqW68ntrbNPiXPz8XcAnab12EHx9d8srwVcnSf26KtfZMj1pXYMaikrPZYdBfQ",
  "key31": "58PHNe68vMQUZmSSYiscDVo2VrPcgFWXbhDbgUzgxJ8dN2MuTutV2YXxPtpLf7xVWRmezjT4SDD1sXcaf7TcLo4K",
  "key32": "5vqn6ekVeMW8w8bBVPtdaRvbCa8pTjqGb8mRZELEi7bTTdrJvUCUjjzXCtBUH4ADCYBrf5JyJxNafGG9vEKKbmqL",
  "key33": "5MpVQUmE9Gyi5jNovnJtvUzqT5de6b6rKBb9SpBmmgj2r1pH8BQCeiPce6z6V4xLY6XxjmnHVyxJ9j8zmq48NSMj",
  "key34": "3c2JGQdreKPZivPPiSxQhWrApDXM18MBv85zuoxs3TMQteyS3eMsEQRaNc6BNBqKTTqEpMzmRs1c4GxLA5sGY9ra",
  "key35": "2HEZz1XW24MFpT26V1jxkDzpNCunYUdZhuxaqpMcUcPFkLTUycYRd3SNnQjEa9J2HBjwxmVpFKNo9rDcydCskAbC",
  "key36": "2fHyXF4vgXX5Jg5sE7LdV862n1hS1vKGdVt4YLm48Mfkv3ahc1MUWrJPbfajxEDg32B5TL98i6pEUPCeXj6G6uSJ",
  "key37": "4b7RwkGtibksT6iTwjySgvHLTx7jPPV4wdcCcVX4YX3rVujGDTUUS16ovYHce2fwRdGC4B5XJLWXoTcesMg9hHmn",
  "key38": "64stZM4JuVRZ1KLWBieXcdpdF8fRu2FtYFbyDFJ33Shi55cjJcDb6RjBuUbSgJy91ZWEqmioYiDBAehr6cCxjjKP",
  "key39": "4dHzYzNSwhhDpbnqEcSbhbdBX7aNcEGWq76YPSzwdX8cvwtqLXSkKmZdpqTtPSLCspJHHp4JutkqEa49WfCK1Rvj",
  "key40": "4jDr6fmvy4DHwLheWz8nVr4hsqiJkhgmz8tuxqEEUwUzy17dbUkRXA4r1w4Zw2PD1MYu5YDTBGcGVzxey3EfARJ6",
  "key41": "2JjHzjcroRmJQw9oUwR4njKLkm4Grv3fZh7v7EaU6MCtK5BCp5wQ8eDY8FntomENzm9tE4KNGtEXgcRkgFh3kif7",
  "key42": "58Mbdnd7RzRZqCYYjw7oaNvrD1fkmAp7DnkPBFx5ttWj3nqK2Ayy4sPP5MdUzRc6Rai8pwEvFghySRbthvE7sNYB",
  "key43": "3hPJQLds9wshdK98zow1xRETv8v9ZVDZcecXkdgaJZgW9drxftuj1x5Z5xyvTZEuDiTqwRUApVga3jkmXr8DCGig",
  "key44": "37zAbK2ffV7MAhgNAfPhFQ55rJED8gnNQt5pt8yT4gh97fsRdH3gA6GDAWhBHHJ6DdMH5i2LwjvtLqnfD3CXdoKz",
  "key45": "44CwVsYnS2qdHLD2GfP3kimqw9eEgnCgTvhRfuTkLQu4mGMCtoiRbVAsvKaN9Souf47j29EyUMcAvHwbKYptvAnn",
  "key46": "49dbgqJ7tiXDYx1DAhQ2idqUT4jPJ6Dm1jVjz6rKoFsCq7tdyYQmX9yCHAHDqcZk6Aac1Q3tQiXzK4JG7umU9bT8",
  "key47": "3JNziSkZZ594wEBWqVABPxTRV3mWx34hQwu1gpmsx8PNom5SoMRiEY36QSEyDgKYZ82nTLXRZbZ48Gdc8zBn9mex"
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
