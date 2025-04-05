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
    "3Lw9CwmUbWWoqkZEm8f92TMSLVJyeURFxShRLLMrRPiQ2yHkFjxcCW1Y5JL74XNzrVUBU7RchfwcfsT9iokPLcmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37NnqZ5brw9iJqcUYDsWB9wW6ydUA55tuQSAyAWThtGPbAoJVE2gkgFaYVbSDq3F94CpHgzFsP5bN2J1cwg6HHdo",
  "key1": "iu1kaY2c9LU8BajMepRKPiZm8LpMRwd66MLj9mdubaM7UVJGa3uThuAh3Exy6BXfcuXzuybMeSbJGh4pLYJEYhS",
  "key2": "4RAPjx1QafBQAo99WT5MN2oDFaUNjNLqS7fBqXhiGkZ1DFA7oGUV1RZmEH8MbJ8ZrKZs8WgbHTZdwFcpkn7TtRv",
  "key3": "25unZVqFAF5SNBM1ycMjhiWZT5K8Vkk5mzDmMTNeSCKKhTnSLmQj1Ah1Kev3Soyq7BMhi9PEZ1LBybeyiHYrcPsc",
  "key4": "fyPL4Fdttzs54SBoYGRg4AGDXPjCWRbYbBWHqbK9yksvEVPign85xQQFwK6hkoc9AB82SV5hbSryhSSyRRfizHB",
  "key5": "4HAXzTEpDAUFDX3uC3yvRXG2REbQJun8YUxhzyvwyQH9yAXRJX1jWppTr5UqCuXBnbDgqFMGZ6vBJxD3LA8qMn8y",
  "key6": "4DUzZANbYQrgYR2XMF16xuxMCCboj3FEHZUHf7UuH8jAZg7ASXCAb8MydwD1oFApXzF5hjFeDw5AUm5jYAxXTdfn",
  "key7": "2s9U7EfiqujWPGjAyLMXJ3fVsAfW8fb1WigKecgXhLxA7DxFUE1CKERYSB1YjRfmzswzuNDCh65N4fzFWto5ZRTj",
  "key8": "sF22ufDz4TcTp8tTNzrkgsM42NWMWSaFENCkxCegAFxwQ9UDQnpGhkYQep3ucT21H9xY4g247LqiewPhY9qyWSy",
  "key9": "2tBU4fSKKe2SLCRQBKt1Tz9hnz2G2gpCU5bufKzy2FxZx4mRhcifdxUxZL9AQiTKLjz4gvYCRrjA3HV87uTgg47E",
  "key10": "H33AB2kT5mqFGC4LBNbTYbkp96tjL4GmFnB2ZYcfrnDRmc7PHfRbAZTtcWSYSrmBAjA17Sdc1JxQfkgD1vzc3E7",
  "key11": "2dMFJCitAJrL4BNSwrJXozULQNzkeNqnXcmFD13kfDvkaBqbAFJUNw7Vk8wnQjssCw74SjAwpA7C5YAq7dZ68dGd",
  "key12": "2FkeoVeHtSkx7DCg84QgZjvTq1ukaMY95dimp5x6kpfYtb4Rk5ecR7Zd9W1kp6PmrT8mbkgwpoZLpPNQUbUqEwJp",
  "key13": "4WUk17KiZHUbcSNQTpb8DmgXvrPMEneqg44hCBdJxAJ1f7z4rzfWBpKMWx847ycBFt4vRNfchYbwQq1H5Bgqra4Y",
  "key14": "pYzQSh9DodgLmMmNyb96as7ApVwcGj6XUTnSQTSztM7gtavZBx5FLdexiPE3avhJHXSV8pP3c5Ki3EBSGNdMxdP",
  "key15": "3kVpt8ZTysRUNJMBgNTRVggKmdrPBVdGcgzfoMTpibUUBxZTCUeV6FAFsyTstFr6ipwj5TquWD9MjeLYCg1RQNbS",
  "key16": "551XJZy8Qf3yPRYqzCwAyD57AjgcuzsMvQQWFk7MoGhyfMBd6GJ17gDR2kKDSZaSFwYPnJsrCFd7FaUKFt5ZYHoP",
  "key17": "4x5taycwnha8Gmrj2DESjvSWN8wnap2Unyr5yyS1R1qcWKWitGYsk4nHRXDNsSPHaMnF5wAJv7dcePoqGQQhuN9t",
  "key18": "3BHjnKBX9ipJBFa6hF66cj92Z8baA28EwcoeLA5vM6bRpJkhXEr8csh32L4CMmm6nvJpLikXSeHmSwY49wLq1AD4",
  "key19": "2AUam8XhwZrbRC6QUuPkEZTuaMsAhUAkV9h5fvwXPjSZy13HmcQTnwSjwCpYu9HxZVToD7LyD8rr5EfRXrS7oWGL",
  "key20": "2uMhsr9gDTyuR3NkFnSeB7mudoMQLjhbjbkTG2tMgogAkTVZkkVpJLBxHVL4AU6sw7eHaet8VDZA7qKSX8k9RdEq",
  "key21": "3cYBPtDs6DscSTKN7rp18sUcwg8jXx3DizCTwiYe9X7w6RV2xj84dYSTS4P97gNgnTw2zWA1znXciVqtZ42NeqSR",
  "key22": "4pNFKvWMx4Bw5UbWXQUjCCDRoxvpTtRthKJc946kne8mcqZSNZZzHxk1n87inbDtYZDvbx4dKNrGQfqbEn6SBN6L",
  "key23": "3XbiNiTJZYe3ZixbtVJk9v4ZCCi4J94JKvqt3zrmSWg3aSrNrr1YmWsDVsfDscGUW4ztrAHy6quCwu6UjPHF2oPb",
  "key24": "2TxLDVW9orcnSx154KAvmP9DTF1YBmhSDyHbPDmMCmegRDES185zhgz4Zn769UeBhY78yonjRsoyhjaBu3Z4ay1K",
  "key25": "2Cx4Ad8RKTwpbvRgyD3yBDABZ7pgrikwQj2UmoimPsY3d4yLFZ8fyGUfR4Vvr8UN7wmHwtDJ43tvmXAv6EBteR81",
  "key26": "38isweuuuRKoJQbLS9tarmWG9yYLedugWiNGgZ9cW8J2TjMThtuCC2Azc7DBMbRFYQdTmt2TizuD7JryyLCw2rEb",
  "key27": "MyhE3i1fQKPfTFhPMQAcxyMv2uV4oyioC5riwBtYPCAvRRo3hhBd2nQkf1ULZNhSy8H5QgxDDsUsuSo9PTUyxQV",
  "key28": "3yu8nQUzaiMWoWkW6vd81MDnht4JnewNh4t5UiGN7PJCCLnFxmyGqhN6FG4j68jBCpD1GRDuUpjGu8V3wF21Ua11",
  "key29": "vPybUqw2rPecMZn4DtDkauJWvdq7mkC4TN1iJnpfHHp7Qo5PkZnWY1RMTUsBh9uStcecwe8WGAnr2c5Tu2F4hGn",
  "key30": "3aponNUZKKUT3AaUyMMATzp4t1UoERoCF1x7taDrH7zNUkpWFp977zQtC267okiduUMNmm7MAoRwohMj7Zj1ZJW2",
  "key31": "261iuVuPmiHaEGGPFGrywW3DaRuz3yTzbheVyZ7u5GUmqQBoEaA4zmdXHcUEHmVLajdhpZzfqFcQayVDw736KoUX",
  "key32": "3LrK3uBALJs28nTE5zUWgCZ546ryM2Hsb2uhckewSPRkZtqrPqe87459uaLYBNwWB64huV2R1TeKqBUQ9rKKwA3F",
  "key33": "2dzNGCX3UmPK4QkzF6b7VGJtSrGtBK2EvDsaUdqJWMWjyQkdH3zsrUMKwYUUbKu3Q7LV1aMfefZrEn5V1p4nqEXG",
  "key34": "5RRhByA125PvCuUqBw57WW1VL2RUgK7ZAkfsZ9p99BUiSmHydmK7GBgZqGNhpnbNQAjMshEBfKBMX5CLu35Wz2D4",
  "key35": "VuKW4eND7zwxgjgLXRGR3JMX9w7rfS5gPhVJ5e6mTmuSr7PTx2wNaEnC3F7QLkxmbDqbgjsUFx1UKoLzjeiq8QL",
  "key36": "M2GHfNfLoYFRSpNbjooMdPRrKDgmDkapfZ25s1qHhWrPdWeDJxEWdXGGPA4XZqKmAnJdktrXjKWNVDkNejCCEow",
  "key37": "5kNxmwxXvW7rDcPpGGJMqWjxrXFVYb1c4bgm5dGPYoLWQupCQvE14AJHMzN2KoqktfqYHZ2Zfyq6BsaUzLejtAJ8",
  "key38": "5dTKiJgBaq8kinbEwxpT1zbU2PctELf1jTk4g8aUHuz1n1cMXh6t4URpmau75GGdABAFkzuRnGh1TGgN42ne9Evb"
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
