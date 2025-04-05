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
    "4ZWqEH3bX3zkCoZKQD4VmKk7rxGrTQkUMHicYGdTdFq8RFnWreJCrtAbhRvwKAdA2ShbQTXZDUBuRTukLjkspURy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46FDeeZd2TZZbrc9qA8Brbm2zSQ7MKk4bYpRzcMTfSofZmJ3RX5mCjVMDKQM9RweC5AgTAZoAH3q8A227ZNG63cL",
  "key1": "4wogSdhZfPcykZ1usG4myQS4du5zCUbyWGX5fdEBfSvvw9yjR1PTWXxveqarrcXJHokKx7NkJzVC4TtkzMDhZdrV",
  "key2": "4auc7QsvCfFNWXDXPVe2C2rPNf7bDLdFiQqVrnTJQST2e8r7F9eWzBYyLw5tRTsMKLAj7C3BS6rYEaTfNTjFvE6a",
  "key3": "21Pw4th8ahPyyjy3EyJYNJF2PMbwQf528vqVw7dq7RXCvNCiW1mrrCrDJDpJT4Yefi624ruX2ZNLBYEAuAcBC7kT",
  "key4": "3ETGiRCENbUGwxLPAezjc41WL5W9gPt3A4LhTTS8AT1765HjZ92KKFxYLEtmEAnVp81ZeLc73t55yjBZzZqcqxcr",
  "key5": "39g1XmAJ7zVhuVN3RAcRtoZtxVBEmcHBjNL9dUYDdQToXzWygw2vQr7R9TKpc81QDRUKSNjTjk774yPvWubh2SK",
  "key6": "3tHQoJnmBJW9wVUhpr8yBVXQLeVmU7w8P9UAPF1u7ZG9EHcDsAcQGUjezQfbGD6DkzQ13UKPdYCm2KKxw26yHQQq",
  "key7": "5UoQjSMSPQ5T8bAYMUxt6EPtuyMv2Bg7ETT3ia495vbwy7h7fXKCQkAJak8T3Y3uefRXhK3tkPJhZycP8tWwxK15",
  "key8": "3n5obKWbmjBxfv8GTf1HFF4sPQM9KFJwM8W5cM92daGg2E4En69D35LwE3YEuTvF7SiBeZMKQvAznLtELY2bdy2w",
  "key9": "2dT8EDQqbJyyGarvacjAgHMSPz8N2yT7qR5SDKdyNyt4k1nDivkbZUrjcGQXviWyuSphpTubvmuVZHUPGLdhSszS",
  "key10": "3pmBxfRZSYabaBuSHiZXBnnYReB8RmA7jh2vdPVxq8sAMRH8yEQ4WDYcQYnkhkgUDC7m8u3PbvxgKvFGJPk5nYg",
  "key11": "fqaxgriYPDFA67miJVvfyPNCtA8vsUjRBvtzkzkk9cGNa5irX4uABPBaAjwbc8i6rLYSDJpYriB5gMzcTBgcGKx",
  "key12": "2xdHrPwodzYuzqPoqTQyCQD1c6q1uiu9RxfSwdunoQ6xiKT72bJ5ab2jt1EAy1Uf6jHzeWp6X9FXY2LthFr8CLUX",
  "key13": "4ujxjc6NXmS19CGfc8rWNMeCapmvSkVRpZZ3T8FLBjLWGxe6TAM9LeUXxwTnQ8ZcMp2vpw91SmERq3ccPNwqHeDw",
  "key14": "2xp8YFxgUtTwTyqKebS21qJKaNWMi7j69otovosGzx1N5APTxyd2U8egH2WjSXtXCMHJZUvfFiD7bnzwjTJe5dHk",
  "key15": "Bv5SeuEdNN6TrqavitcaGiHsRAnLFo2PnQWrvKyMa1EGmaEoqUsoo4d8T1qFK6Rq9QjRXaW1RmFHjP29TVQNuS7",
  "key16": "44L9BNzGSRw13r6A5urte4Moky2iSKJiDCRNf3wyh1kkwwbrpGvYwpjEhY5J5dfnZvHWcmeNh3FhKscPYxYkqB4U",
  "key17": "2mRgMpJ1GY1Gmre7eNPMTzfmvdzmvWQLBKK1dWMzXEo4zobJk6uAV4ZXvLmkL3WRPWPigFynQFKXk2GMpeZMJWiu",
  "key18": "2W6dXoBqwNSoE9NoNatBkcQ4DYGpQdMMNeF8iwcGCHkJwyYep3oyQPCxY1s1riXBj2QGcYkuWrpdizkjPQwBfTzc",
  "key19": "MTfoQgvuT5A7PBPbxsJ5brnv655C4oUsHArvzmEqGAGZUB1aPyPqsmRXQnsmbPcmFV6cQCBjnqBwd3cCwdfq1dZ",
  "key20": "eKkAiLDFyg3GrWjiZ3or9DkyfbhCQADDRCoGPhBbYEjkwy5n1nrMGtnjpgSE3dJ2EpbuFbRkZn542NYjXmZZiWW",
  "key21": "2aD6pUskHjPHpiAQ7XY5roy1xqthCXzpSYmLsgJmraYAaSHpna3L5qL75u4BEjjR2EthPxqV7nLzmKN8We7r6sSm",
  "key22": "2vz1dqS2QEdsi8Dz8G28mAvhYHWPk7NDcGEb4vyEC239RxyuPjCAJ3upYBzXjwiMnNBTk8W6mDjCuAzw6SPW2PkB",
  "key23": "3WfXNG5kBuBGiw7tZNZMAm7TrKtzjMQc5j92svYSmWeGCGmxfABCiQmsZbLnLkn95PpsTEqpXeU5PKs7UZaxqVW6",
  "key24": "n1JuSvMDeDBgErsuc6KpebxEpREbQgMTBH2sTa9zxxeRAZdncndbTYU2kMG9yQG3fQS5BFbVqEvM2ATJxqRr9Bv",
  "key25": "3ec8PB6TPp2eWaqFujuQfENEushq8iEaTEFhB5ECZKzkPcV2Pa3xbbdAtgtuA2Co9dkqSCPLH1bjWQfmhRK9w1Mj",
  "key26": "3GtdtjKUeF8UYREBCvaarncBYNrMi64F8xTkEADYw6s46wVo4AGsq664ABvSad9bsGHigfR8Jb6FgMkwbfUrBLJH",
  "key27": "4YLU2A1t6UHq6GaAebAQGb1Xjoack4qHa3MAEqwAi98R3Hn4XVrnTw8TEdngWgZSgwjuWpXz6sps5VobbcsqYhNt",
  "key28": "4eo9kv926gqCgR62Nwc6ioxn3wtWW8Y8tnggEBNLfYpfsW4YoYLnjf3tYmsnpt7uecyqmVADfjdytDKD6pzntvFh",
  "key29": "QQEzTJiasoPR42VU6SRPJx9U4NfVs3AiZRQqkhZxyfmtteTp1cGsE1Dts28XmzJTfRD4MhfJsvkuwDgKkLDeNo8",
  "key30": "4Q2GvZRkDmacqiXtTc6KHDCAQUMhcQixbc5mrFdWq8yYsMk9qAU15YqV7vydW3mZwDzvpQMrBaWC7m6aFcpiHARR",
  "key31": "3M5THL4LFab5TqZ3t5PNA9TKUpNbZD8HnNCyQPAiHYAxVJyhDQ6dmsT8M4jSopiR5MXN3HDUdKBmCSXoM4pFguhs",
  "key32": "3un4YL6SdP6KayVDEKKCFd3Fvykno7GfRbQQvJuHzdV3mXxapS9fMzJLgyCbwg7xKBbBz6Vo9cSeUvtoKYS5vqtt",
  "key33": "tWyyUVEDN2hCZ2kjVZuXvNaKxSD3KX1BZNvak5cTSHvsxuxzowzWXkGPHVobyAtEjEfJW2rptCWcgUxyntmF7zZ",
  "key34": "39wwK9p7kvYz65eQB3RzekKipYvKFmL7JXPmBLPjjh5azqxN1DN4eXLyY8ZjWDqbcXdiUSjj2Zq4S11RpL53fV5J",
  "key35": "5n4oRMZPpg2Ua8hW9bSrjesM9MteZXhjjKD8wuGqWgwSHsnpzSLcTQWwwkXvnq6oCBxjmkQCb4RqXwpdzHiWZ5S2",
  "key36": "3VpKHY3a2XzXKkFY7khxsTVU8dtsmzJQEbFj7rA4QHMR9jcqMNF53ZYZX23cvFaGNYMWF38Zk98UP8mfGKNKurn9",
  "key37": "S6a2KbsfFh9nK5HenE1gAz6yk2zpdeAE76n9PNPi2QrCXnqktdKrmuK39KNwqVDREfYy3e5h8PQSAQXkmk7MwXj",
  "key38": "33kxNMehnLigU4fUjhgicSMrciLYJbPHJVGU9erEC1sxgYK8G2zNN9jUTughGncHtx7YvwjxTanqRMume4zmrwy6",
  "key39": "5V8s9WycuGZWwgceZVLp7iDfmw4extsH6VFL3DeHYpL1Y9fEeVpuGfakKD7XfecJBohCZiij5vrZpz5UxXEcx2PA",
  "key40": "HbXdJEGxNbVXADJYREhkNkhgP4vYYaJbZ4A3dWmWGEirwgZ3FvBCgNkGphsWC8rG8jFaZu16kSvKATzRPNg7XWc",
  "key41": "36Uz4JtwcWTuTM85cqavaAVAphcTcaVJ9fePqvEQpQ6ydCURpcbMWLtUwjvun24KUyjApvrUJvHN8CBzR4SL8xGE",
  "key42": "5E169T8Mik17jg78gaywjGHazn795V27AjC1sFdtgmvgPU7fJdQKTg3ZWRUb1huSS4EHjp55X6pEokrX99MBoosR",
  "key43": "2q3KvwvM6322mFhY9dURW3Ta2JHosKwbWiwMU8nwviLZZXjU1upSxL3SoagjjjXzZ9ujy7g2gyamjzv8yDkk9p1p",
  "key44": "PMgnZh9WmbHo6BqZLKxuKRebK6dLBKHVPUXgvDPhUd8wXhGXtcTNpBYtUiDu77kv1G15zh3ZUi5CWXYzjWoXwjX",
  "key45": "7SjxiopTRp9UXY7jyQ49mJENZfidKuaSSQWXanFRRokRAzdYLjQuTHsRFyMW3CVhH2M8Xt3QWQuV2Drj2Ddp4Wd"
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
