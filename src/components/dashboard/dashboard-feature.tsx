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
    "564GQSjKozmmMtEbfWqDCesDMiuVhtwTpHuXJqUPRFyuhcQnFXN2jiCKkEd1PTZxTmmx7kLRTiyEBe4Fve6hUDnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cN6UiH8vP4HyiYxn5EqK2HT6kkfWu7Y6RbJecvRi1NK8322GnGS5ZAUbgXopBcx3TxKx66a3Tsr4UQu5zSFj781",
  "key1": "28FydAxGmMEEGSEoTeBAbqUSYt3hmShhafmw7kbb6s4qeFPfFu9eZXcyEjuuS6w4FBko84xYLdLfEtspNAdrWupB",
  "key2": "2CeFiZgJA24v6L2KmP7SThv6zowxW2XLUCTAzM6JWfNUWphuyHt7kmhaZ5x1d82Jsxw9Q5R7f2u2FN4LUmMmVinR",
  "key3": "5kgWknhutVd56V11k7icFQ4Wbfxi6BicgyY6mACrzJCg7AorUN3WeYUsVNf8sBvBesXL2ebP9m3jNLVHHW7ZygCN",
  "key4": "ytFZopNGdr4WScYDiyP4QTbJTLwFWPoyj5kePbExNybKUUfpd8zd8YVoq1MxfLa4GbM2yCsJSd5NnPY9ZxAcaq7",
  "key5": "5rurHwdQL9qRMGec5uZxuNUsKhd76WFdJn5XLn4jFZevNa246xt6KG8iKsufbKx3LZUZ1siK16RC2b2ynK8FaA5E",
  "key6": "2sbNubMV4wBU84xvrL4zFhAnnqbM49TZyr22nCB6fyQQWPFpfM6V2Z541G2RUpS5Yu9kzM1JSkgsM3qAr1uUnwkN",
  "key7": "4ZvzGWtvyQ6oTsof5mF2Q5aUrkkKbiCnonTzjWJjvSx1y4dNjiPQiWxEnsHgn6Z45ErYZfFYsgP6Ba6tGjJGv1Qy",
  "key8": "4LsDMgPCkbsNq8m4PTNPRX7bfmNoTX3HrGUAxf3vSK87eDuRCHiNisvW75XerPrZ5pRR6oKd7YHnvakuucmELXy5",
  "key9": "3BFxhWYmvccsZkrrDWEL2i4dPWPkVx48BqdZrtXVumMDNURAg4MGWxwU1SQJKBUkihNX7sPrAWTNbaeSvPdnJdcU",
  "key10": "2PAEC2mPc4JNg62tKjNe1wgWFkPSb9rs3NmZCAAGKvFr64merUq8LXBGb8xscbjaA1zwH31aLdUGTuvzMc3bRSTS",
  "key11": "3V5k8CqGd6KVouQJJzNotca9qF9PTKGVjfznH6GCQGnS2ogRWM3yHjGLGEkBv2cnhk1SwXhoxzsfdNy818HVXB6q",
  "key12": "654u2oSKGvoSfDHWWCMRt1zY5iSsa9ZhpLqR6iUBEdiqcR7m8g5Wr89GtrsYjqc5AnUKh7ethd9uk1Y6a3NeMqFr",
  "key13": "4rBbGY6M4UmeeBrrVYgpCcaWfe1mewAtxY8MBdYWeCRFRA5KCKU4myCtTQnGG54TjYQrQmLRkuU5aPuuXncHptjc",
  "key14": "2K88vLCqpCNVvmKFpABcPrzokGgexYMmtyDqejQdV1VUje21qijSFyurYhZLEdkjLvgT8Q7UuHEHhnE8VcbmJy9S",
  "key15": "4aL8jhUkeLyPVa1WBXSMTJxSYaZJvCz5su9ddk7WVDr6X9ThZQFkL5yZUQ1VCZsg4rioLoVEp6yY4jGgxPmUhorj",
  "key16": "5zaPx8RqjANrKxchm3x53NBKT67sFBcmdsx8bFXEuQjtdwMg4zhAjYusXA5W5WZqt8QLUzUAmz1iPM7MdAD6MfQH",
  "key17": "4UpfJX5GSnSHxJQGzUNF9iCuXdvAmLde3hKwNbQPRaCMuFUqQz9x2d58kNBewDxoAtxjG8TaR8KAFoYqcCoeuhm4",
  "key18": "HZ8CYVpywAUKT54g7ApSuB2T1TobJeatu4eEcaCpDkRPdYtW1a9SczST3pa6sR2KyXvYsTb68z9SX6VYAqrUwys",
  "key19": "2Bpo7LLZah11ttp2sQiyVuiszYUkKPGhmy11jAk1JQUgSxjZWb5Qmg2J6EnFNtrhJT87T82NWBXmHh9tZ2PrNfgi",
  "key20": "5UvHdkXpmFxzVW5X8SdnQmFqYh7KsXHHcqLs6XyozrThNvrt878xwBFcCMkxH96nevCXGWLLPtmUx5DTKtu8pw8e",
  "key21": "W6a36c2DzgeuNuXS3Cq3iSDryPRkk5dvhvDaNUhZ1EoG2GT4vn51XsJWdLbQpxpBpwvVRdQakeNhFhHUscH3Dc3",
  "key22": "3RS2cPL1fgAA9bJujikFoeKw7mXTP6Xz4CDD5jynx2eawWvEgkPZxH4BGjQ5AXLQWnhm89MNTwZ29oppv8JHbgBj",
  "key23": "3tJ8NFSQ3KSo2GPUWp1ZUf21QHDELvSUJay7Gdhimp9VuCHUSwcxajjvqrhrCku3RrnHt3K7NqtHZFehbbrhCHKR",
  "key24": "3uLjeQiJhxfC2W7a8SJRd6EUsW76s4M5HYGNwrNcRr3mm4y3J4R1thZT3yy5BgnAKx82KC9o7gjpNa9GbEYsUCcu",
  "key25": "458UoHWRpRFgn82ni5aSiXDJdjGD9kX35YGVEHFL1NNsE2eTpPtQWPTVQCNtn8MJus3WQRMxHnVZHgx22jHWzjEm",
  "key26": "5LSQjWLYQgk4bg6L1fP1WyixW2mU9LrCsJkxb1kTXG2MMXcVj19GNsZAYDs6mMEZsmxRE8Y4Sfb63iezzq4nNoaf",
  "key27": "49rVdcdMF86nFxTj6nuzBpjRmQ8L8gqFWYuC9T1ueb3CXRTQb42tMeUpiNEznGFyznEsN3tsY8ZkRsinVJkThpCg",
  "key28": "3WfUEMUDNeDWb7CwsMENz2e24Lyf5rK8M84nFgfNxFqvQLBAsvQF4TkECWWGZz9jxgyPj8JKQfg1uwSAFyTNajZt",
  "key29": "5C8yCJ4AtqrHSqSBRtoVAkpf4AvUhVCTQ5rK9e8CjGFXUBbbF21DmiCxHS3yVves4MiK1XpfM65tky94qsdfQ1Yo",
  "key30": "2tYBpesZkh93RgMXGMuowsY19eNBrQWrKUKWdtxxhPmowB3QEE6HbhCuhfqWQLKSubZECU9cDVVyEXPC1vFYkTfr",
  "key31": "5yYNryJvFPTR9ctfV5xdZkjpoCSQezvPrXj6VyyvGWRa9XbnGyziqFbAszaErguYbdpW9QS4jHkXtm433MYs7hi6",
  "key32": "34jdraThVLK2Fuzv6Zu71aLQVxC9fMZvYaHYVmthHffJCFQ2XUJRSv1B6W9CR69ZxLF3AYtbcwfibekhEc1aYQPF"
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
