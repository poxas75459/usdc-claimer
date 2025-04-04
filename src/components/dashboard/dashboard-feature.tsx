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
    "4QVfibtekQP83eT5Bj9HzuQkq92gJy47NbGz4DQvex4BEs8QJQENbuoDG9p7Ax5Qn6bSZZz2krG1UvQSSS8SkYsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o2Jvd2Vf7hdUYXBza6idYoJbt7JBZLssNDREJxPtJcohcxnXh2q1Lmbw63joZFd8EEaKSS6NAAoZ4uPbJh3cKTL",
  "key1": "5YbcKuPmD8ursQo3Y2FcUFYxYybsfyxLgg8jt82gnaFkKfBPKZreJjwCEHMWgLkdbiHno53UVZweGWZjjWmfSoys",
  "key2": "4RjPjRZzpkEGnF6ajB4YWyosBbn2fe4a8GhsmM22ZscVjDxUoXAcRAP1xwPkuEAZq2XLYUAKeHzTanN7BKAq3Cnd",
  "key3": "34BjdU2oemHUDQ339Kc4atk9gL6GCcN7fe2YKdyvtctKNPr7KVjtkVULrZEPLZH1JCWE74239daqwXGzNQdnct3t",
  "key4": "4FKV2J735ZbNU8xUdZ2VkWKzCHDoqYJcazz9otm2v1M5EDhCJr5fo3kUUHrWM4tmeoVea8Cnaq8qQi6dgKffSFPR",
  "key5": "7BPAnPGMdDGircaWjfbfu19E5kdUJ56n6KdUd46eNdD7aeKu23GLyWVUhYXPbEeE7wV2bBPrdDCM8duw3Rj3eb9",
  "key6": "4gwLtf4s1D2r1ShvbCaGHaowwznYdZLRxC45MZFewWg6FD2u3LoL4CfZoicGTanRiY9dqgTzQMybf9AAsq1VyX17",
  "key7": "6464S652B3JvXGA18hNbNkRK6bKKwBZtg3Gt1Pyo79X4S4xQkiT43rmjEQSY6mqwReU4EwQ7JxR7YwpRN4thwEkV",
  "key8": "3dgTtEZzHD5wS86oY5BGkYrFKp3Qhi5npBtTDB1n1PJXBEFYj6h8Y34W4VtvsF9id3oQx1UfvvpHvujuiP56gXvs",
  "key9": "3uzaYw4yPax7bWfmU8uU1QGrtThHEwN49iEGYPyJFoQzJ3LWk7nLEBmLwwM5GmffZwbBHqRWjV7acrJoqGeTJggd",
  "key10": "2kTxVFV7T5d3zqzmKDDwH7braZjYd2jYULuauLcyPHFKEnkvFgzHxx9eCq7ovUmjb2XdAFPffM82nYuuqutLggMx",
  "key11": "4QCt9qv9Bknfzsmkha1tJxr3jM11TPwXMYNStAD2oW5vii3iCSHoFgLGy4M1E6AtnXzthNmeb11MSofVZgozqHgc",
  "key12": "4scCNCX3CNRjT6rbTgCgv7kJgJivtNZUNqjRXUYQx93RQB9if6fCn5HA45esp7LCFUrpSKJPchZRcJk5fHg5gKF2",
  "key13": "ECjMGsGqog9CVLL2ukL3prGRjXTJR6xSdxif1fBiQ7DerntzWiMBsL6395pJ5ptM8pqCdjW9pKoaWbVEq9m17oo",
  "key14": "5LhrQUPAx3UvVXmVHf3tuNEqevykiCq7uYM1pUDAYhMxne7ZvmgwRArLoLQfm2KCaUi2umzeNANeEfgmV29SNtVP",
  "key15": "31yy23EQyLfztzGi8ZVcRqMbApFaxnv1N1596UrfMYZaD1s7DBNqnGKHcdGMVYF3awkLdHvBTQ2NaJeN4FfcfU86",
  "key16": "5LHejEsqKS4ZJKXEnosL6iFLDc29J1hU5RNntrR3i8qnbim6qJJvTKAXWwza8DTw77mjAwJbY7vdwbXSVsYhxdKT",
  "key17": "53kVRpVajqas9S6BSCePFCRp7AscXwi3B5ZykYcn3LeafiPJ7iQF5M1bHtfMnvuckmi8D5BN4awcNNxiLkpZJw6r",
  "key18": "2QXsc1vGUh6W61p8k3Fqw7nZrvZDqtKf6q8wTEmA9AbsjCL5k4hQrPEnzXRhUiicnJsLTJ2FDmY9oD8nqyAynrdy",
  "key19": "4HhxwNPubbnDSbG5wJGA8gXenKqVC2RtKduuvVmbMm76BKx5t6n5pUbjk7arHMddzZ4Fm8ZKN6rKQvakEkKqFuLu",
  "key20": "4tJJRp42qjzqGUYkpXFKVfvuRZSAPQWt5XU8Qf1RVAFG5DUTNdwnP5LzKNkRtvNRueEaFcgFA2SSSJJfwVvkwc5U",
  "key21": "2opxpf9ReKK8Kd6MjCJ8NopDYcegn6ZJT1fppwG69fYo11Guk4gNn6m6TdrDK2zAmoEWdfZp8WMpp9wG2FaE2gUq",
  "key22": "4qqKFWQgSbVx3dUJ87nNpG9iZZKZGGobpVPWav36GyDJsxmgQ9Wzz7fz4FdhGTDK9tZXoBqpZEkE1ThbZep5CWaS",
  "key23": "3kjEYWaGVKqcK8AjRQJt4s7ViDBisvAJGvMQsQKwk7kbon4dQkuA4X8rsss8TogAoa4aFf1sUpyEph5Pr6yeuq6N",
  "key24": "35759gtoDXs7tYoXdxZGaLmn5w3qjhkt8mwVKqpMEvvqsL3wMhny6xUvwaJk7T6jSMTtwTUTru757eTmxTireFyi",
  "key25": "4P4ky34ziBj1dVGJtkSuioaajhGdbPXJqSVfcxFL8Fp4jwXavqze4tUR1sRWXRofLp3DTzwbgHnBZEkazKaufbCk",
  "key26": "2uYtxxUmdV6VwtXahHezteDTM9vnuHFAfvtBXHdpX6RXDjcDAcxy2E16qj8UeyjcqQ28zbS1WRVKEaZbHqL98kTr",
  "key27": "3Cr1TXz4jSFzJU4MkL48ib5Au3FGvmmVLrhXYUV2qd3UyDF4wUsoZCyF8qkSBHB23TNFPqY8WwKUpzyVmxzVzZqf",
  "key28": "54Ry7R3qpuTTwceCcYNmNXdnrMhZo6fNqKRvbBT5gtJ7Pg8p2M3pp76EnwY6oyafzWVhMXr5UJbqw22sYSXq3yi1",
  "key29": "3Wb8Acy6rfqtVJF6K8iPABpfdqBNFmFB55myMYYkMXoZBL8VQ9Evr6cyWDNCh5dr9FtZBQHCHfsSZXEquxk8auwS",
  "key30": "3a3K88yhEUcqCkQvoQ93ms1rrbCXhE3y26wTA24LFYwCCfHQJQPVUf5xa2wg4Vzd9p8chrtoB6CmULsswzHgGtdg",
  "key31": "2xBvwo5HeH1dufDZFAZz2D1nEyQyrgQBChbhRZ8979MYuuafQSi74uB4endZwte4a2rxRicjop5buG8myk6iW4FX",
  "key32": "3Kn5NFWBKV1tGHep3Z3cnbqLNY3T5A81TEhP1z2YTeXLwWcAfAw56R8sAPXkugN96gDGyqgMA7uyH1XHmBssi58K",
  "key33": "49BfFuaK58PF8r4SwY2zkdZxARwuRjF8UzNNo1wtj9gvJ9koZU7tTQRjCPojKjG3L6voxbbirP8f8HWaYvCTnNaC",
  "key34": "5UKBpcLbRoMbuhJxBF4gkK8pVtKteZ2BUsUXngEbAVDBbSuuEb3pf6PGTcx93xP8DanMfBh9E7KivNzfkuraRe6P",
  "key35": "3BfyRfQi2KaNj6JmHs7bxo9HT1k97BmGL3QyGLwM9yBPy7AeHdzDPTMhBdhAHv4rpgrmhKgeSpbvA2MrNWwT8fBJ",
  "key36": "5dfL5EoPVW6n3P4598ALY4fuJF3t4BMSnztP33k4td3ceQwcfWUJKnRiLk5SEYLcVTaiYdEv1CVVRwkYcWdojoAY",
  "key37": "233x1ginySsaRBNNBFk8cgeT5PCuFianqXSpuq5MrHU1GNMZsdMz7NbjgBdZ2XkrLyKXxkD8aNSjgBdi5bvYkNgv",
  "key38": "469YRk1vVXdrm59BeTie9xKqPD8DaPGkBTjm3hWj3EbzaudJ5B7RwpnYoLVY2LyfJ7mzUKVyVSkZoahx7eekhpuB",
  "key39": "3Z4GaH6hfFwBpbDmPfNNNLgMQVuzCmiczT41WgtcFK7SqaM13fEXYDGQKmVtHbXJUdGqvrNco6eqJjLcqj6PCjaz",
  "key40": "4eMa58WnTgiWhHKNafP7WaQnmGGcEg5FnXCC1xbhCHaHHrHpdEnoHAYixT9ptVUseivnt2meqgqh2dSu7uLCXaLY",
  "key41": "5vQ8viniSgRDiteUzVzNjBX4mPL7mS2N8YFMQVzouy5em1oJzBJVAbT9vTmmHPxYKE54yGFo8uxFxE7X9vGkWJgX",
  "key42": "41496Wx2jWdGArSd9v3suxtM3L7BZc3tVASbFAYuT6dqnnKJCaTkSNwkNx99rC8bbXnyCqiy3jmyfAKGw1nwzpa9",
  "key43": "2fbU63gqd7ti7umm3irzYd8sBHWQ2MLp1ikA5DB8eXcAG3xD5sM1MF9G1Dtm65tXD97WkoZSt4iaetf1cL7gUd8Y",
  "key44": "F4cpVEvpnTmPqSoSJ2obQfUZY7bXhTejmdNwXe2hkxdRzjgot6NTjAuJHMb8DjSRcDHPPSkvJXmQQAnfNMZu1Wv",
  "key45": "2zEyfd6uzGAEFXjUKnVDBVsJ2DnL7g51AMyhLUoGb241PK9Uc7abQcrxRcSWQU7rDZG4KvR9j4BGzLBa5sPL63zR",
  "key46": "HCTJ5HX5uwHyp7zvCvhP9DtbLaMHytkN6V6PLMZU53ag1LkMPsjtzQ4YLTHTUntm7WQ88ctaK9n1PDZF7wdpPpd",
  "key47": "3ohv2GxBaHX5Zxt2zwiF7NxVUNa3wzGRUGGvrC2nBxWgNrtsqhebYSDATZBNuxXmvUcYYnahb5hCt4RNGXfKo4t9",
  "key48": "2Kv1dKaKkBKCWF8npaoj5qpzsvfJwX4B4jiBmKa2AWdzi8GWqFvF7tiD4MyUEjXogrSnbiWbdiRd1TtMrxvkBfqZ"
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
