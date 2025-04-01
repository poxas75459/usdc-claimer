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
    "23j1LUSPR9VuqRUAR3evgZgZPYFG2BVtcJq8Fc4zC8sN5rXLEUUZ1AyasfVTrfB8hzKs2JyUxKkiaXF6sp83873W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YJqH5kaYtPv2BLyMTha5vQdfSHBeKXPgKmw1xGESLnrfP54Rejd9GdNyRmbwCAbySmzMeFQeWJHTYruWhkR6bgJ",
  "key1": "4xNpptsrKDj532qMH6YyaqtC1R7MHdoFLBvtKCk548CMD4Dm3kiz8CR5YfQBDjVYc5pekQoh1UYQJir6izpbVyWK",
  "key2": "gzcGjuVEzyWFd5LexvGCNQNCqQfhn6q5xQJo5ZEZ7Tw3jvuQLQriXvAcrZdgYBtYYTp1ngU2SntBxJdLfzP9s2Q",
  "key3": "3cVgnyc8j1LcK5uNV7j4qTY2bJdMJB7ApJ8L5gEEHzCmB645RjifWySTY4d1YPC9WMWxVcnXirSDf2RuuS77L4VX",
  "key4": "47zBpkNJ1XuNeBrYa9nbQXhQr4PnvuWeFrGJJBuSCfpH6MJAFrfvTp4JoG249BZ4LmR8YmCghHA5Pyg26oW1Rip8",
  "key5": "61gSrwtJ8kmy1TtsnC3fw95DXNtD2aXLwVqjB5mBv4VSVBTr4uur3kSGCmd6KtBtp8tWhTD7gXg84j2JH4Zs3Q4t",
  "key6": "4PcbnBFRtQqtjrqPv4yjg5NrHAyLMXPtvqwauhQtQJtbZVVB8ViYqdddgpRrCd11AC51ouyH9Jcpg4KxkZquBndu",
  "key7": "4ZHWvyQEK4NEuUNCYboXQgr4k5Ri5kokQHYnmxayRCeWFr1XF7RnGTLEenzgySgTcj1Lj8jZg8RhJSBkNEhN1YP8",
  "key8": "MFNfC5s4ixeGG7EFyd2RzrdJu5E7Yz2qXuDbEafVjwGBcUK2pqzGHHWc7QX7kLJNmAK4ndEv3E4pfTmy1ofAZEW",
  "key9": "iZ9v8XkXpe74qP6Q6SCQpVt9mQn44SAfY3Tu49YFVC8NtpCBbkkNZfFyLs5fqvTdFA9UozgZSU257VHrSYML2YW",
  "key10": "5UGQs6Sgvw3jnmt8hxVUQ59cKBK6PsSK77orbm61mcYHy8h9RheiW9r7PMGFiTzwpPzj7cZaUyjeUvQitLi24v7w",
  "key11": "5sHtqjr46yHfepg5Wyjft7nxyKjWU2mJ18tAVrQJAYuHjSREgvXbnQNWzabP21SVFzazXsdXuG2ofFPi1GbdS4yB",
  "key12": "5jvL3vtRUQ5hg4FZH1BLmb5MrHeh2DsPoAgMRFDP5SDmcm8bahJBiWrUp2yAjz6kS7hLaTED3pKp3Evw8o6WNapB",
  "key13": "51bKjk28zxxdY9Y3waMNKAYAhKdgUsRgtnoYzuW5FtZvsowPv7BfwMQHBFsaoHMeSYe8z711ZhW5wD5tDMHinufG",
  "key14": "baw2BGXWEbGGB6jf2qHx6r1vgUvUuUYs72oq9EUZCNLYNyUFnsT3rvQ45WsdA5jDzZeDxB71UTRBv1opMBfVV9f",
  "key15": "4KsD7pEKD6T95bByCxb59AALy7XdLWVQgkH859NUdLwmAvrKgFzEKF1zTQKqMFszV1De6bqGGuYLkLJVVxuD4yzv",
  "key16": "5eYzvYnZbKype5A7F1TRVpXLZqxY9Cc348VBwzDxQExLYuTADrZy3VWHGZu5vA8N7Pwvz4jeoiJayjR2SASLsWKW",
  "key17": "7UvJ1EnZXrVAxQZfMXnVwRS5pbnam7DCFVghgogjk2YBQSvPb4nUGsuiFeGdrCa55NkWz19UU4rVd5tbGDeLbTn",
  "key18": "29aZQAmBwsKAGAnziMD9UvWWhgH5uNf19MzHppniNuMYNKFc5cu3Vpt4HtPtpL69eTvCMosS5bMzHzjyPVz42Ctc",
  "key19": "28eX5BtLu4jcPVLDCRt9EF1tRQXbuyhSJ3jXCEyRqUrfD8E6kcHsZQ8mL5x3wYbmhLeJbKjy2mWkeb85uQBDnTDs",
  "key20": "rsiaBpHj9Qag3Bdg4Fg2bcyEmZJSBnT6Cb7xQArCDL9GyHyPyUnYeP5XgEBMMtToWdmk6YsWw9cW5hLRMymf8BK",
  "key21": "4TrLJmqzodM5Kbn2Be2ZzfdJF8JHTGwpH6EoKhY5kNSqxBewkHUniFXxYFUUkToG2z1aEFQKfyNYvgce3EZFZFiu",
  "key22": "4VxNARnHA87JdpgnZcBdRx9SFicduMU81upSCGYcdZwVucTi1qRveMe8cqfPbkPtEL5Gr1JHHnryhbMpgshhdred",
  "key23": "C5qqE2uyQoZrBfzHhGX7GuKYaBkycQcZSxJJtuSd7CUZHgbrUbcdPeXLxwNmxmo53nwDrFDi1fFa6r23r7N6Thj",
  "key24": "5DxbBUr9hsYC1DUEWFcpiW5gjx5uxWp3yRtx2wwYH77MjrmGPq1hfR4kERoJZncGuDkE4sgnSuSnffLbQnkT8Kkp",
  "key25": "vKLfvJi5vveqvn9tRzffwkGVsqdHg27Rw6MHd8tHvf1wUNshjSuRjoD94dw4N38vqrU9ceWanmFu6d75HGz8ioG",
  "key26": "4B5cmbFXz4qzeLFmcBWj42uo1bPq4uvqs85JExsezJVTFMuRZJQMxTUuFYW6JqwELqCPXPQpXHZKCYY21Z54g5cC",
  "key27": "4FiNZncjhWNpjNC2Ne6mAP2Qn51h5Zdpg53BKvzeyZmoqReC7bnubAe6cXtpBqtL82DzZXoXoSdKeZactr2keTKX",
  "key28": "2pikdaN12wtERwXyCMeQT3DFA9JCUcFyJm7gkfkuGjJgNXG4ZnH9ouBotVHDRtjih63vxxeWMx8G8tQTtkasnFLq",
  "key29": "5jDctqZyvPsHqhyFvKBqjDWkgFKrPxogV61GHbXPNrPV5Xu1TSGMEhMVgmcVZSQhUoy77HjYk1Pns5wa57c249j8",
  "key30": "3bZvCNWQzkrqRP9eidthttNr92VV2MX4hpohmcDEs4T2xCkKKtomiUrAU3QW9MA8EMhrbBo6iSz7wm17Rd5akNQW",
  "key31": "3HTH3LwB6EfFhgbrTb9zcmdc44VmD9zGQq77ch8bzZggFD1scsmooRZL6he2JH1CiTgNyn1VUqMkogRvx7xiKaCp",
  "key32": "3yCrQeZqwgRptndDcUsx4jk59dgymtc2hzJcEp8hkGn3SNTYSm22CfWgBoah9pw1T4XpTiqorJ6hQsY85GgsTSRc",
  "key33": "33Bb4KvGWz8j8SZRdejeh6mcN92eAi5GJCNk5xQaRwCjr46VjEEFavuyBovrUXFUjKynma8tTaXLN2tUQBLZ2GM4",
  "key34": "TVj2N6fxkv6PGSf4LTiyKMWyUgZ8APcY61QP5vbmbTJfcLgaBWHiQYeW6XuFtdX6eGh1XvTMShPMaLKjrcaKtJP",
  "key35": "z7nCgMX58bDUCSwJQwZfPkpRJ8t2NkJbcqqLxzvq9BjzATpYwP7dCfttfgPpAgxGAQUsqcTqALJbJuLa9u9dQhR",
  "key36": "RUU2yNCSBeuX4YUNSyXWVL2v9JB6pfD1jSQFqXSL3axMiJDjPoYrXbneHJpRsEeqEShBs9goR3kHPZmGm2oXJyW",
  "key37": "3R35FGe3Fp2kyfGEPdTpKwJ7gnd37LfZvAWsgs2gwpv1PAzV1ijYLMa7By3qvKnCvRxV6QetZcmEGUP1t3QKKyLq",
  "key38": "4SC82nrBXpQuDsKmFPE2XuWifBnnPGyjPWuqc3VAxo3ExBxBkWG3Rca4e3LzNKaSncfqG4HY8CoAr9coy3QU7cDf",
  "key39": "3vy3cHfmmYsYhkqxHWjwJqSQ1c6J9uVcwBN5nhmFEjuz9ggiTTQwdwzceNScnv1s7QLvRC4NZgrGtfCLvxwpmbLH",
  "key40": "634rhgN9pbgBGBHwNmHCNt9iTRiyaFtpce3Qrqz9r6GLsQpCctCMsmmbdVo9Cizcf3MTtWMjjyeJSRw4zdDE1Ugt",
  "key41": "3LP4Stc5UnsZbzYparv6y4cbg9cUtWoHJgiWX4A455JbmcM3qFsGPBAdt7D1Ch5tSKHYzz5TfTGC4Da6yr18h7RA",
  "key42": "4UNUBAuo7T65s9psfWMA4tnqeshdbRBVdk4MvspRH1y4HtpH1feh3W7EzThNtBpAgjrfPK4Ttn3BtCjtLvDx2NUb",
  "key43": "5azJA2xxJxqj2Jr8n3Zt2jKegvcdPS15NgGpyJ8ZM8ffkECe4syNEL4sDtjf3gpDQtUnwhmZSoBQRZyPUBCrutHP",
  "key44": "3wuDhQosEWv14PEgiQ69S3kHZwuA2xZKAojoB5A3R9WeRCKorLD4gc6qrpTGMiVxbJLqSRe524k5DFKuxPHtV3cs",
  "key45": "4XZACt1gpuCXyqE4vgVYdMmo9epyo4dBw7bzMcgMtNnAdnURvQgpPH6LXPdNNmfCa2KUxKmoKTnfQJRai1kPoa9E",
  "key46": "4EadXLtzdxpMznMFMt8twrcf64uYCYax2J6RL7DvyjoB6cnCT5dM7DnMreAa2V7ib14uJgD5iELaxqmaaj6PnkDg",
  "key47": "2WUdkiHJjZVfXGym7e7wqkmGvtZhqu9C4MhEUg74SnKoCYbFGBjA2E3jkoWKybgFk3qMnCjiTfg9tRYMG6xQoJRW",
  "key48": "Cc9GUQhTcZz5jTgPitibWg3QYUSoGkr277y467MtSgEbpRagLZKxxmSbAdWbQQo5bPxKjnDXefpWCLWskPDJNJX",
  "key49": "2ZvXjKb6EFCxto1F6voYVANvsaRWYnPcAKXPDGo1QZtv4Yxo3hUmcbKJrnquy3PdCoaFVs7Auix7wvnDiLBGDRUo"
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
