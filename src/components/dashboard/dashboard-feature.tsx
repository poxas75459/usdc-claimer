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
    "2WxExLNZX1KGFAKgzj6byHxoSEpEUp1bHeQuymDEKYMDjnczdnAwfMvtkZbXB8Gxii7oNNNCDmx6vTEF9v2NUUKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gPjCo2wGpGrUsQzhKx34tFEzWfzeh4KoAgStvRyWzf6RwHr2TKxtHZEUtLWLGgCjEWrX8RLZvocqxxz2WunGWvp",
  "key1": "3u6hTN9AugpztgvaE2E2L8oNnV9yDVXoh42mFT4SVd7EjpNWf7MmXfRytivvgRcDS8Nciv3hDHTpjNy3VCozjgSa",
  "key2": "2CDHoTGMX8XFw3bS2bsSoBsZVW5HSmTAXzNZHaFDVWLyAwMFSUPexkXgc82UHoi9NRoNoXStFbYwmxBekmWoGXXe",
  "key3": "4NyyK7bFJsDFAyMrHWLW1cN8RH2vgniWpRjZaE5nCHMVFvdkZZHXt2x3wXXH6qaAKy17FEQP3TVg6a16VRPrWBkt",
  "key4": "4ZcwFyvYG1Smd1rWLBoMw5kmYBLX76GBSELSngLxbvjzQ6QdMxUSsvujw1kw1FUMoCMHwn1KaHxtagRvKiafZKGy",
  "key5": "3CkKCrbXnP4xX8h3EzhHm6o7qVcHe8wRnXKTzx3vK4tSdkxUPmZLB9iWwc46RrPz8dEj1qVMs5N98PrbsHupXHC3",
  "key6": "4MTQtnN26AdU8i3zzvkEAsTA1ssSfp39zFhJYCYEZCAnqCeVDd345NpLHwtmL1PdVKcx3VLjaU9VpYkM28crZmb9",
  "key7": "5mdhzRbprtBMtmrsFGXGRsNBv5xHQhW5JYsd6BRkFiCtvXu5EJGE4MbromqmFVemCmts6D5gL1j96CdCr7VQWXqX",
  "key8": "5VZm1tWiuWNnRVxWfMzRE44EouiR8r9gZyZThGm3EQgnEc2EPrG4Y6TtxkjgW4rG9YsGZoYTGK2NnWz2m12z2UHi",
  "key9": "5p8ggTTaD2VzZ7qAggZ9v3iVQVhJ2KzYNDMwzKfPLWNswtzP5U8dg6YbBfvY3ZrQMrT9FV4D31FvNK5s9jR1LwnS",
  "key10": "cPYx5LBCgGTMdDTdEG8JYLYoDnpPDDvtkU3HqbiwkCahMjcpyCDs3CnwFNY7oEj2rM4jozNgXQpUFuDVoBMk2eN",
  "key11": "3hAKp6HZfRfz4J8PQqvNg11L2a8DZ7CFeQYstL6e8zKMtaEivsauuDaphZndm6D3BaVTpMPUKtHv72Ck2NaGKkya",
  "key12": "4XknHPndVXuSRGccEM71nEjzYbdW1h3RfYEHNa2EkN3oXhGV8WVT7FN3QHWedTWZgJmjxtMAC23B9gd3jE2edim2",
  "key13": "3TGFmz8hLh15cKcGUQbLbG4B1VCrUkZop3hKFakfVrJcn2a4tUr1gt1Ug51XCuMkksPtfpXnRcWgXrSK4aNPGBB6",
  "key14": "2Cug8SSHBPiHvcnQwadgzFX8P4HiSCCo2MAmfWkBBZuTo6G58u4YEdnMMGYG7jjLdoMRrAxJkvwUCHovob8RQac8",
  "key15": "2dqGpziKfkpDtQeb3zC3XzEMNxV15L7t42FAGVjpxapFvb5z2rFCwWj55UXoi8PpFKidfc8cSFVEhd7vyxfK51Ug",
  "key16": "3MsCD7qJLgVDztaA8eBLnwcAr8NvG2ssG3ypf5SixHJQ5KDd4gqm4defhMthVyNG4HfWfajwPiqsDFLfg2Y25iGp",
  "key17": "4P5mY7Vu2VoBef8iVqzEHrdN1Esuqz4fHBHrNzMxWvvDmTZ5JHCFM139sQyRUkTAaThkRreN1KU1PQvJ2nvE4RjP",
  "key18": "3xndKJqiS3LSa6JRDk6pYJfJUEkeB1Rn4ubDVxJHLfsfq3g98fFuQtGZsbvbrhDeY4mk69Kr1a7wYXWjYZtkztqd",
  "key19": "4GLjX5hPTPJbdiYG1p34CNVtderwU3sNowNAM4ngrU1kndBNgYtnEHtaLB8yhg51JPKi56ZtP8zeCjQJUkYLB36P",
  "key20": "XcaDRk14Xs2EeeRRWPJmvWRWPX8juaVXBC5n9GuKwFFgVa6ou57UV4kfWBu48suHrkZyzi6iNXfNQeJqu6GqzwP",
  "key21": "3CNkgGrnExNvoPxDsjieaHN1mTHaG1VmuJX1r3h44bJPmsKZY34UjG9pCrEmXfGp2ztaoB89b9BvpRSFLQZFNnr1",
  "key22": "46kgt1mJzzYBUUp1Zc4LsjEiRtUzQUrqvCwdy1v22VSq4YCYAWsAPia5Two6ykN85B1YCw4ZpA5HQmvXLAhWWKjA",
  "key23": "5SqpUdbjNhaiECVeTfzBgW3ufhqEBe6q6YDyx7xv24pEPdkJzSfbvCaHVL848mJNQEk5gfdVnCMRFnmtgXt62aEU",
  "key24": "3v1SjeroigvcbS4R5fhvqxXgGA428npG1RBxNbUm1cVJzNAbY5DHzGFCNBCuDUipkYCH4qB96bZTpSg5i2qBGvvS",
  "key25": "3NFcUVK3vivN49vaVraboagsQudf45te9RY6LRoRpRe7VY62N64s8YeF66T7AUpEEkypi8nafMNdxQZn4rihvFyt",
  "key26": "64v2FPXdRnh3LKACXZKseoo4Jvd8UqBQQ554kquGgEJ5rm3i4GM1xBCUc3nXnt1U9YHZP27Gx8EngcjBjXiBBbfi",
  "key27": "odKQWD3GMwEcbZBzKQFCbi74prdF6VAGoxuihbRKL3VjRuuyqSLwT5LqU3yYik8yb4KJCPJtEzsdpfzdXXA7U4w",
  "key28": "2vc3Xp4XjSQRpCeZfndBjSATZ6btVFe4yCRqYPz2zt7SNQVQwprYu6JL8PqujPEEcoEkHSt38phtrPejpf1qZApi",
  "key29": "agDuRqrhak5BhL6TCFVLUSRBa5N1rUEu1mnpbFKHaqtenwFDAdDL9uZRS5uRpdhtnKji4txhDdameDZdEWi6vYg",
  "key30": "2P1tpF3QgtXqXLHWNhFsvqLBbMrqqonJ45ECWDJoC8M1SsyTUCAVsyZftryuCmVpTeAWk7ChJLhvRvRiRyKZrptL",
  "key31": "2tv7J2rAJZv9vZRywMRXExXVHTyquxcWtyvjKrPKDrPVDCjFrTKHeHdCBY4fynTeeTJ71tnREhPLMtxMMFkbhwQk",
  "key32": "3x3Fy3kkL3p9NvD9tnDbwEdjrwUvLWgRoFD3wTkTz368rcjhDFNbVrx5JTgcw5HQCafaskeohe4mq2B2Ae3Kq38f",
  "key33": "4i6ecZ8o9XmDfunUWrYqCFYuoFxhJ5v6sq7ep3ZJS8JQ1AMnjxJk9Y4CAXk1a6RL4rGk3pHU3HcPoZbE43kFXnz5",
  "key34": "1uEDuip8QfkxL8Ebja4jbLzPW67UA4xZcPVK87BVPsxsWrQgLgxQBFY6q3r6AuRMmXSk9vyVfxEJj5n6vtWSk6q",
  "key35": "2St3Vgc8UmaTmF4LohALBWJLzpBhnrJddojfpzGnPxnQT2uwXZikwg4kMm1ETcv8LqDG9g7YBhAb165QiQpzE6kT",
  "key36": "437YgSgumPoh89Xrio987VB9gVb6YkTTTU8fytbputf1jXaPTp6bUAfMu7Ty1bxXXaE4o3idaWvzErvQEXo7im8R",
  "key37": "5q7bbf6Jzskg3gNcT7o9TR4yvgr61Bj4DeQDJhLcSdf6H1reegUuTeETzxxtSAZgUYkmQV32fRo5hyGoG5xw88Ns",
  "key38": "3RnJD1SzFdQyyEL9VvEm6JH4D7acHzBg5ucrgiG6MBsRJomuf1A7JtB1ymLHnYhPQoCFAq4szRwddzYM8QvD6pGf",
  "key39": "3LPUoon2ZJTob2ADsT9SCJtDgzhVv5iLmJBpvmsMCUA5RkdYAasQmxSdyrm6WvBfC9ZFVYTbnCt7H3ufGrqfDLbf",
  "key40": "5QsBd6VRggmsMn9A8kFTN87ggmayJ9ckmdHAAvFneYWQkoKp4zHd169fZZZFfssxtwkB4qWGtUJ89jT8ucyNKd2r",
  "key41": "2n6VCgrAuPgY73DX1ToyTrv8PA2iXgtsUDwQuucZKnUrFErGpB7nPS6ZMp4VgQ8NDHGjpjeaBqScwVgFC9D6Y25t",
  "key42": "3ELdbWEAjcAUxnCKqd3RiSsNLQiSfhL7ehStb59WpKBHouX7S9kY7xy3Jx1WbmJoJZMZviynACLZFkw9YjRQ49Z1"
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
