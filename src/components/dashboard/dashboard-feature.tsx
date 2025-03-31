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
    "4w6ZfAWzwjnQfphGCeV6wxuZrupsaoaYHSs9dFvTxMhNt5EhnPyEafxdvK4nccfo7kHo7PKMNPPJzFKDF18sEQTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KTd8eVMybmsQvAZwqS3bHLjgk7noWvTVkCzCzchWaCNg9U9BHJBy7En2J8rkgaR8BDZ8kDVB7XZxMqtuwm39M2k",
  "key1": "33XfFBunKKHTqV9haUDaah4X6SLJDXFNrrZjp2xeHDydu9rSGBZ7yHjYRKrfMFsLo1MLHknyL9pEZMJLHcsuwczR",
  "key2": "49hxc8rBSqiF8qTrYuaEL9kNZVm1VcbQgZm7zJhvF9TzM8Dtnrs2kM9vxRYtpAjcnhzZqJDp3ufgbBekB7mB15nc",
  "key3": "V8iA7memCmM51YxHqYavXrPZ4esFE7RUHEmemCpCy8vBK6ua6ifWb2CdrHNWRhDbwtHk8yKj8ibJ49YfLjqKG1D",
  "key4": "2S2nJpEvsjsPreCX5L4thiwrw8HirkEkn6fuefmrqQsFSF9SqETS3RGx7SjoqCUt61fEeycjKnF8f5yCuCVespY2",
  "key5": "5okYdmKmWtkFRJY84PvBCXRRecmFnncEob5f6AeYfT5Jur2B91CrqnTXjCVXSfutYzAd3vDkebe5rHKhv4a5VSbn",
  "key6": "3rBs6uAH2AFVXHRbjqq65DPXiak74J6majVANdQnRhnb7rRnXydhejVYX11TLyBQnPXjdYc4QMpPxcLtQxozZQhb",
  "key7": "5B3Qbjfb7nD9Z98NzWpefiQiUpuNo9ZXJSojJkLSuxZzQduScncHdssr6azv9na8aUrHWbNeLuddCfjGBCh7z3k2",
  "key8": "4vojvLYDHB1Ga3x4783wwnhuTQY3LouJ2YsDDvbL4Nc9HDUASSwTVL9qiqUn3PVbNo9DshmT9yw74zN7ynbEa9QR",
  "key9": "3xMXfjWP8Fpp2XrNWh9CFmYA7JxPEQCK4osbGtEWpMPUiS1FQfbRC1hrXHukqPTC6QzQnBBjzvKPj9YWpwFKzLrV",
  "key10": "5gUjH1WbEiGxtHT7rop2Vd8iizvJsPji5dhdQYSRikegDzRWxrwDVWL6hyKtoPw9SY8hSah7wNgLx4y9dwuXdss6",
  "key11": "55GyCLms3AWd3FYBpmvgZGrc9mjorvKYp8FMbez6csYUqtXoVn75Da3cp7HaDtndPMnLJoNyd1h1wxVCQaog7Wf6",
  "key12": "2wtCqfYaQbhpAK1ecVngGrPB5Ykm1X6dWUTYgJUrpYpMXQYvUA68EypXC7RUiB1VDhnRNFGsniUsRfhiqJQBRn4Q",
  "key13": "4TggbZYvqtdyWBcuJKymGeeXTkdowrWHuY1Uv9M3iH4P444aaKFjHPKoWjc3szjwiRg2AbR2YzFc8PFj9SASCzRS",
  "key14": "2KTK9xsfF4ZGFwU4hFeLnhLCZ7PhdAkJraGUqgCfCXsVbexViftigKXZWoHXZ9QHX36KrfhGG2kh7pMoA5J81CU1",
  "key15": "25hqA9P9bkU3zJt7KAZcgRKRvVPzDp8XyNWPQ514cjAZ5R8AxEJqdr2co1kDYG1Hw8CcCwNvMbzSmnfPVJiWCCdn",
  "key16": "2PgZhBWVWTYsB1dBSs8DKKFUp2tL6q9hHegrUwQSdgU61dFxdF6VAhYnAkM95Qce8zo7KM5TKpJgHdpX2VMiaRMu",
  "key17": "5mJm6XuaawHyhjLmH99fYnQdny2FfdFzsSxQgJVmWsjPSy1jESyHxZ5TZqfTorTrH7L89opt1tkYEAULH2Hyfsd2",
  "key18": "3t7udwA6yeCHAYZtvnCiwYYduEcupyfjaTzoi8teVSsCrX9fW7bQDD9tijSFAhK5tbi7UnkXWwdpSohx7LEYWj3A",
  "key19": "24uX2ZXebhBvQQ1fWzdG3wk8Meg8sH9M7eABSn53gHvVK88Dr1TiBzEJtkpSz6sE6fcFUJzCcdmgFogSU3WNtAhh",
  "key20": "5BJ4bubGWfCbT9BeK4XrM59sy7aiftM3TQ8D1bzPgWGexUCPuzo8R5pJ1DU6wcUgj8qA4JzaEGomxyztPjvcpBrY",
  "key21": "5C57DB9rUC4ifwaPqnnTAPaGM4EcXnEoVbBJEEp6EyfkqCvWapnc1FwbRRvUF5qn1RR39obewxjCLZED9u5Rc63G",
  "key22": "5pMLbi3bRGr8dsGb38DJqn6Re4TTjkKkUabHiBBed13pdEtoHsLNrxRNpQFAdM1htzVL3xYdoWQaWo873141Ge8e",
  "key23": "2y5nviCHgfegd3W7uUJNTZxbR3gfsUZxProDWCCqSMBehNapLwALWzsTRXNHshv827SHt8AtenfrsnxvYZkeYZM2",
  "key24": "5DQKjxkMgsaSKCWy2tux8aVgzVRQxr9SqBgwxRHrYtzWq7CskRxVVxoqSwhJVFaFeDueLKY2waZ9Mqezq22uQhVR",
  "key25": "2RK3c699UhbdeqE9beo3xqQCDNDpqw6frsrWk6hfTF4WhvaCxNAjwRrU1hXASf5vgfMeoG4NZA7z6HvU44hmbAMq",
  "key26": "2BoXqUgtx1ra4196TG5kJAbFERuyGma5KwwKan4GiJdkkasfT15eFAo4RvPHBvg4WmwXrhB8UwC21au9emP1P9vt",
  "key27": "51wpksahJeubrTLmvoUJcJ4ofHEZZByNvgPUV8UjzUTpNQU3NdEs94CJPc8pVy7pmQ4h3ov9uemgxBnPGNgGx91m",
  "key28": "5QTaVEcyi8dxzNyEDFebJU8B4tQkkriZbM874yER4X2f9q9eH8sFc1p4KHTLwqwsZYLgx9xKq1cwCmYMqD98fsVZ",
  "key29": "qjLQ2qkorap7VWBGpFNHGxYf8CLktcQe8oQxmaaDbSFC2aRFcLqdySitH8pvQAw1WLS4Lu8Wcy3YnCP6L8M6VTi",
  "key30": "2CkQSN3EFUt7w4vrKPASrUcYdmec22Eteri7AeG6dwhWmPWMYn56aQJh9Wiuar9DdE8Ht68Mn2TpnEZ7Gcq8iZc3",
  "key31": "2WbPwBU9fSP8z5JSZ6xFzKvLu4stv94EHTKM2341Fnw2ksRosdrwnSN8NbsQZsYfkfZmDP3HPyndsAwf98SbgxYN",
  "key32": "2kxAbX8khQYb6uHXS5GDocaskZzKzxdQUngr7ynrXKCY65janwADyhBDDdPFivk8CdBoX4SbFcoN9fj1uh8XqVdW",
  "key33": "5AF9jSERQKKHoJwkdTA6Docxc4RWCp8AaLxpY5U6iLKdTTs2VwTF2JLCrn2rYcxHeFQ4eD4ZSMBE5PcFW3fhmvBB",
  "key34": "3qk7E9gN4qqZXCaxh1KqosMZPoYanxc7VfFWmLQKaGj8yvCwiKfHh2LTPaXfDq5hSAVXp93MiWBjv9qicTLTRHnc",
  "key35": "4eHdCtPXk41Lu3ZVtWsGhdkpukMkw1zPTJ35rk8JAJxTxCUREQ8gyjWkaeFLuBM7cqhR3gXH7xwD7441GStn8LXK",
  "key36": "3znCZ3b8ioBCqjMZj3qVhMq6ktr5Yg4i17MmGHemMchxHV1P2CFgygz75tYnvpbMEBhvby2P8FdSUxiAqrtPFHaN",
  "key37": "5zQUCPmQ5wxEGP8QZbLGXLAH5W2FAyYpnGKm9jRiRKC27NkJcDfoX6WyHUjTvRcUdLWxjnVRWccs3DhuJHZ7sJpU",
  "key38": "5K5sGcPBq3rx8R1tMBKWhpfGJA99BgH7TksBU5ruysHX5Zt6AVzuCbLsT7CUayJAKto1mdn2vfTWH43PZyQgibbY",
  "key39": "4jgWABXjoo58CdY5U4abaLYA8Ag8umn7AcSFqjbb5gjTq17Nd5Zos4mUb6dAmzMFNZshEdYJXNC369U8aKaGEL8L",
  "key40": "2i5Zf9REFStzx48pvse9hEgEyX6WqhTeyxxzB19gL6EHEtqgJisjEChJ5MgLeEMztTqDzxDZnVLiL5JEHGfuAUw9",
  "key41": "67NbDij6youfJSfnRzSga76brc6B9cNzr8amnJrWgjTn7TP38P1MowgaXxJa7M1NqV85to3X3fc2UDwigr8j7bVD",
  "key42": "4vVXJgHJA2CVncMc9KoHEL79wfP3fxMwBdVkrdBSw7oR8BN5qjK2Trt95ZGmUU9iwqEpbohHeArSEuzAfFnCFwZt",
  "key43": "2bFcoPPCgKsN3QTnMZkPECqBwKJqujG46htxUQqSwJLegcoSnkNxcQqDxyUZ3zwpumwVazY7yzdWauzwSu5MX2at",
  "key44": "4viffypn1XCUFNDj5D6Sx5sqMjzB8HasjKbmrVacVpvvxwDSdDo4bpmXQGCZdR1hdpBJ9sdZmHitFmjtAGfmtgHn",
  "key45": "2VdAX9d53FkQYNPMr44wDGe1jDoCykXMqXQGdaE12At5nDNNtvehcZQAM4avjbfYGUy4TSn2Rkrot2E8RhhJ2Btd",
  "key46": "29y49TYfqGFR7dd1Xq9YZwUzc3Mxp99gAMbMtzADDqHA3QQxQAzk38izM8sn4YpyQedndravtmP7WiJiLDdhmWZA",
  "key47": "64hiHZ8yivDTTNd5THzCYJJAgW9g2fkHH4gqejew9VZ7n91Asq2ZrpTbEuTKdbdrA7Mid7e7gsfS1dSE1YZufL3w"
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
