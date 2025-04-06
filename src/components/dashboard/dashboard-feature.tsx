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
    "2X7yhAv3H8cbfKSsQrjYurAsKCBdMhcr9vzDc71SM3A9uVzDaBC8NcdetAkdj21YsaU14XxpgpnZwq6RF1D6iqhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zeQSZRN3nzJvhweT6cGyZFQPNmtocoTiUG4mNCTfaUREVsg8P2tUe8QLESezDatwbZF3ps7vHpDMRe4LMLeK2XP",
  "key1": "2pUZUSW9d53w26SAnp3iocyY4g5br6u7vsqtcBenZwMry7VVuifh9bgWYDVFrDzoprR734w9GVE1gPZVhL86okyd",
  "key2": "3jYg9SuB6d47fxGC18nQQsaBMSKdVaJh4M9mGfLq7jEsPbyHEJG6ucio7nKEjN3tDSZZUTAXgz6QX1SNDohnzkgg",
  "key3": "3fHaEJ7YGoCJZRwFWxvXq5GTFUzUgy92xPjXfDxaVGR5df6pvgbzEG3iV5CZFnZFRJjXCsxpqjELydgrChJwRgGj",
  "key4": "sgbyDxYDxtW4zC42jhivhrwQoG4wbJeXwNf6yMHfoY8RF7jeMwUEtFmDBxynqoTHdRtDXyAqWYeuPQG7bbjvYXF",
  "key5": "5J9nFnCFZiogUyDZRLyWs2qM75A8wwZ8uXH8diNi8m3Vzc6fNyPgHbzUCm3zbfS5D251JQEMzcuY3sCX9EimeEAU",
  "key6": "4wAf4CaxfDSj8jmuD3v2Wxxk2awsfgcTspD95Y2ouQDqsV2DabtgrzQCdfzDpSCFPVUh2zxMnFavdgUbM8rb2Coy",
  "key7": "5duXhrsd447CLeAqGhtrwK8jr8yAEoiyZnSXPDcDqjRGfDAFVmYAZRMpxxy422LugPWqmcYQPW5avgYUuqQw1P1Y",
  "key8": "2wY5RikxriUcmaWeVi1SSaExmBhNSribGs1Z8V3Atfb5gCLZwVn96T8anKrqQaRSuA539oLjjQNV1AgbFyMwe175",
  "key9": "41iVJYZXnWjskaMxoDBX1nTN3XywV28zbQ7BdgSBxmsNvr5HoxVkoeVqaDi61osP1fL3LWoiCtSGkEvo9QjCii53",
  "key10": "5noLQ2rJ6XshA99D1UMJcUBn8w9q4sDtm1qwRan4zqx4qvAcQEd4pQ3QpBmXq1hFLqG6RQ1f6LKQWTrHd8UArBjS",
  "key11": "5TCkDwEJW3xiQQgNSWPpUmyroejVMw3uWFKqnSvu5ASsK9kVd8zUgukoH2oMTchFaUq8jncYmE7PD6yjg8phV3ta",
  "key12": "614ptLWUfqpa5QKTC8tzeDn4s5HakBBXe6R2tUFpjGLeZnvsbr9i4iiYqE7KBiTwg9CgPqMUtHh4awzQpXC2kw67",
  "key13": "52DSDTVNjv2MbWNann6EajMmfo1NLYR9d1jhR68s6t4Z1fLTQkddwoeXySjM34f62ezk9M6BRMMBDJtTpT3jnzC",
  "key14": "2BTSKa8AArW6o6JM3kZ6gNKMenQ2jB1BEZGomgAtcrcneTMVSa1nKwobBHDog95TtBDtPEdKhU7oZDv7rXtMb1tU",
  "key15": "4iGPsmN7VpUCLDGACyocDnHkpLatMKPRhMtdtURuhCZSQ2aUebzVALXQ2apsmDcvhsDMHDSQif2suKYrfHCXjS5N",
  "key16": "2UNs1EioaoqeGTcVoPmLFGgqAJLYAFzfV8RPJzxfRrMHwWBLBHjEpqgAzJH2yccN2fk25UBnrWV8mT31twWmMqkQ",
  "key17": "2ycj1vwJsr1weQBy3sdfVVgHP8oRCxGGwEXgFDXx8dvrQWsAj3jTVV3vP3WMv26ktZQNBUiWgWa3jUQhtkRCeZd",
  "key18": "3J1EHMJNkFjZZzY8wzreJkjDQGAqybfKsEhtvEx4Esv2NQHFULE6NDyeGi5Vn7W2r9HXKSBkd8PHWUSSU4LvsYjr",
  "key19": "4sycW6UR7U4ihUBWoQPPvDQ2GSnzpf5cXJw2V6f1rTp5zQJ6nhPnKmWQrCco8FyQkFVG6E8wZyKS1VrcCXJwZxa9",
  "key20": "5fPz3Xew6N4Z2hwVsoecKevPriHDDYVCFTM4m2ZjG8xH7xPVu3LbTjU4fz6syDSFXbeSrqp8TMwBkdX4j115zxnc",
  "key21": "3soR7MqbApjecfz6h2Xp6T83qcTVj4PyAGTVJMiFaoqsBDSL7dB6VtrKigKRBEZjwdrBZiJ1ch5JFwzLet7hTmSJ",
  "key22": "3bjdnWsdq3jdgvEQCPo5mGg87LSx9NVn8VWMjFiNG49ChEt8D11fVzwbawcYXNcCbBkci1emF9TayBomZxJo3TZJ",
  "key23": "4fcJAzduBkv33V1AstUex1Vp8ZdSfnb4dofNGXw1irzvPLPZuLuie5xDETbxbvz8feeEjKYpBtvsGATF4BenqtqX",
  "key24": "2YgfaZjeaM67P9ufJF4aszFfr6vChzG8AaSXJqLJAJFs7dDBbKjVjsvQ6z3y3GyZMUEMCLAMwDgJN5TSPW6AKkRP",
  "key25": "3FuDWW9YATeCntUhwa3khANJcroyfjBn18XA1wp3TzJywYJhLxgbevHZfskFJjnjhn2E3TTVxVKSBe3zVeY2jaJm",
  "key26": "4BCSWyumAn5iK1N9HPvVfpoSguMKMATcQVj7UaKpc3hekufZj9aWZ7kVQudEDL4pKLHsFeHLTZ36ufV6ZVbaYZXZ",
  "key27": "3UC5Wrbz8pjaxNN3Fz17czF4XBQqqg3j5JPq1TDvZLwLEQrUvQ7FLCz9TxJ18dbxBBBbrPMRFpdZER31m2Ntkgo9",
  "key28": "3m63PcTku6Vp7EZLyRn7D5FQJwjVe8ivPmPcmbk89rwLR9wCz8JU8euCXB73NAgLPyPxth2uCvKH8UnPdLcFQHmm",
  "key29": "494kWXgkmjYuiYh8QaTeTwxkmedurLjsWmeHVz1N2zj4qhSQjJG71FbuaAcTj373hCHAYkkbdHdPnT3jL6t6tki8",
  "key30": "4RnheiULDrhfUmCi1As8pLDZTHPD2pFP1jMuHANJZ2kpq2XV5dvhNqS4TjEVuudfQeNJC5LtQ14yH6ajFuJLgVYZ",
  "key31": "4uPTMrK1zXV6kbaAW1eFZXagoUNXvHfgnyr7Y7rucGwZ8BktvTQTP9QcTAFK8GzSxN8jCvoFUR4Lsws9AsKySoj8",
  "key32": "3KESfWT2wKPE5irpqfyUfucQUUCcMeUHsTu8msUqU93tV2uvdhw6y2cTh8Hf6HRskEv39XoY3nP9QVjDAc8QXcFA",
  "key33": "W7BcHaSqH9DA2snq244euPyhthgCpYekhQ8wo49qHqZ7mTx2xaptgP1ZuqSbBE7CzJbhRipE7LF1fEfJPHWfyvp",
  "key34": "XigrHWNgHRZZsqvdtjYR1rrAa44r2xMN32GXyRLxod82wpH2hLkmU24MjepwVLqrf3zJnA9a1uHn9uzHFVXpa6n",
  "key35": "2Ef2DnSbyRf8wQN3XtnrKN23cwWdffPYWwBbiZpbQJmKyBMFwMSoXvEiiMJ2jNcDjB1zJjTSBx1PQsN9AbjA2EDY",
  "key36": "2JDr9oSq28dJuT13af25ywyc7nWhA7QyEZi8eUEv5Dsr2pMYMT1Lis1hfM5ZeDQCbvPQYbkwTvV4yFybB9NJ9atR",
  "key37": "XFYhyp9WQ27vScnHvvePWedQfCbCWEUbks58RMspi9UtMmBYyZRuxWSnwJfWE38So3KBKnDf3EqThHcjFXt6b8a",
  "key38": "5HovvSX835kmTGzWAn6Z7upfv4HdQMrorfwdftAfCkvWFPpmjapg9VBHqiqBz9HQ4btUuf8rx4uro2Cp5ZgKEpHH",
  "key39": "9LjvWd8g8K6Y3NJNnZzaEEbXsbjtCkgxQBsg7Bx8Mm1UVAaRTiKxFr4fgyWyBPniSMxGGPo2NvRc5LyXY6tY768",
  "key40": "zRMNLhYf7mUFgFuUd8YEaWoKkHcBmcjNsc57eYRcMsi1ZpG1Un8g7VyU6ZjF2r9VCnmHRS2HUxJ6pXccAvwRSMc",
  "key41": "3Wb1ERX2e4uEBpASaivQM7E2GZcuQT8Qiap1cNwQahHc7qUmGk8ELYcvfh7iTotVyNMEMoPgrhdKxdSK2VYmXas2",
  "key42": "4ru4H5BBZQ7fZvCPyCZZBsju1tFj9rAMbaZTaqQs5x5K14ZoLXjqxk5vVjhnJho4cqiyEiAE9Ywbc3jNfEpQ7eRZ",
  "key43": "4QHjSwxV3nSmcWLNKbmp8v78PCodtM9o5izJDgZPQNKKDbnyPePT4SvhSb8enNb2Ju93tHshJHte7qn3wDax1cBn"
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
