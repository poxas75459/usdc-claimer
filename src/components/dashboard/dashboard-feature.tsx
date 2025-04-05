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
    "MRgER6FfXXpZ7h3Bw1SDfDhnmKQDXusDCKvkYpA9kmw2RiXNATwjcv6CqkzzERsKa3q3hEiv4PsPg9sGE8sLYqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AyTSLJk7dFeC98pKCQXdVDfU7P4hw5FHUqZHK3DAaX8oW9QLtjS7QE6h2DmLzeYosyEWNG6iZRH12xp9Ftxe1jg",
  "key1": "2F65tjRD2VrKMNTGX4hUGoxyBEbTUWMiK8ScarVUHpDwVpugmC8qRcTSiwnrC2FtPM1RQkY4BfJVEhLLs2n6ohuM",
  "key2": "4Ct9kqJcnxKAP7xpjqEh5P37ntx26BYrMhXMSfYvHmQojNJ13Jm5df5JNaKYELWh6o7fcqMGaLLHcmSu99aVNQ7u",
  "key3": "5j1CubVpTaG9mZgdaV8mLpu6eBr44sx8aDheEtKbihcYPtD72gqY7AtJtN3A9PQUDWtbZ3uJPzZo7YmbjgRtivMW",
  "key4": "2cPCs1yiXmzcMbofQk67xzpxSZcEN9ibN28VnRU85brnszwjTdvnKCab7DJGXLM64kECoafJGwj2iqBvzdtYHaxg",
  "key5": "8wyai21YHaj774xQtaNWbRjTgzcbKeUT7Z2PE7FRDtJmwgCynAHzR47miNXLFzZzyQQYmNNqiQqxhffrPQar5ux",
  "key6": "36w87PMcZXhg7w17VawdDh1H8NKwvp1ASGKwAQVynF6VfjJ8u5fbKy1kRGwv5ip58JXWpjXp12q2mXAA8WuWwg7t",
  "key7": "5DzYEGiTVVf4RHDs565y4ptweznPRYou4GTzaUvj1io8JgavAkbXTSSUCiXoK9xsX8DpwPMGhhxTGYWkHfJPZo1r",
  "key8": "4GewsjAsXjvzeFTNeEDMaEiTFnDiKmeN9KtPzev8MrKfSTu6zRncHrDLnsJXrzDKGGHqBDy6cttNct2npX1VeFis",
  "key9": "57TswLPgNQKPT7eSaenPA8Rfdw1RnUfq95kN2VZ142gtU9rwYN1SNZh713pZwjeU8Ej7FM3KoxFnYAyzSUJHeB3N",
  "key10": "N3uDjcikvank1We9dSzzRRJQRQtn6MsQommZ17FtCUjwpabnCaee7wagC4tty3RzyDNuHybJyH7ovr5CvEdg87s",
  "key11": "2fPttRP9KcNBLoZd3ZKoe5aM6neKn64kv1pqJ3Ag5vyaLY11S9rsL1VDpmwHXDAhbDHiVgJkEXQfNZWs3WrcVxZW",
  "key12": "K42jqNbdYo7EewHzTJBQ1cT18zksWBbEnrsTUMHBw8HQk3kdv5zawoyNVSVEz45UPtGQmnCR6C7pPaAS4EhfRYc",
  "key13": "3C7PjCpHXTcqJ7ynEVtdKD3GTPz7MtP5UsUsVdTbYjmrUWEePD5215eBMZT1GVmZvtU2sNHk3V742sNvBtBpigJZ",
  "key14": "5MzEqEgiRAZnx3g2MpJ6NL5Z6ojfdczRFg2DypyUTp4KxnKARMpyrJmTQHoRgVrLNtyWGKrEcqA62MiMQkLndvhq",
  "key15": "YZogqXY9rtxJSmyGSHfufABvbRV5trhhuEZV6EAR2oJ7J3P4crD1Xe4UXPCoywCmdqVZW1AwoLZArZ7XJvcpVwu",
  "key16": "3hJjKa9FH726BRGaRzuKbMQrYghcBhMUYcgXtVkoANwAtELh7QVW3YE1C82UJCH5s3Dvh98cADa15fikyjBWEjo6",
  "key17": "51e25BR2BmKj8BASDTR8WhfFdwgsNUSfYF97D2wyorXoGmaGUh5wbFaPYrUt2hmeXXurSJVQWNH6ELvnKhHturz6",
  "key18": "3fDZwBAXtZjg2Y1xqwpHchZ6A4SfKhequmwi7fozH1bpX8rDWTB5q7SmYtXMGH2aFntMZrkMULmE4LPicGTVwqj8",
  "key19": "5S5sNgUVQCB3Wf5qeDR7k81Kc65rRznj2o7KK7DQeUaYDmzYwekJoMWi4ZNkz2ZLB3oSPXRgVSBh2RiZkyEtZA4c",
  "key20": "4aaf1cSDeB2EovNHpAJBQuZ4HvyV3u6JPBZ1xBVQUYju1aatoUn7BvGCRBUD2KrEJnmoBBiVRDasj8BTFrLT2mjA",
  "key21": "5QSeBjVCn9crzkjsAWVZvvCX6u8Cj91QKMY1Fp68Eiy4zsEoM5zMf8yCNEqDccRaabW5qKrNGWhjcsDKgzwmWYq1",
  "key22": "3xGmUshbP1byLseZwDXDUWBQTU8qGnRnz35WsTKxqWmHiA3vJoThLtcgHV7j3GJC8RVSpByznLNUuvRQH4iDotPT",
  "key23": "4GfroMizUxVfMGLmJrBD7j2pZz4KbKxm399kN8KUHrKQNdYyN9r8iphVfoDaHR764Q3meHiAtDarVSjn1XmwPVzk",
  "key24": "hsheQWHGbGBFJxDgpMT8zhwLDT81MrxaKqjQxJDfo6CQnu74i9XLqEq28tifavvTMqmmi6XErtxxUU4rB5hxEkm",
  "key25": "5BBZHAax9QaqxDngJoVt317eEK9cjT5xRL9EYBDCB5mMmzhjn3gPd18gyjMZJPC5gg3WNgofwzqiHTPFo2UDBLwb",
  "key26": "5jjFiXz2cvrhe7SFhpWruNxLCXWXa3jsEsVYntn8Q7R6tKVFwBJyEB9NpY2PzBwVrH16RZYhVMy22dc6ygF6HQ4R",
  "key27": "2USmgNNrJjZcb9imQEwnf9sn5nUph56V4E5DQMctat8kwpo6FtUnPWbJMSp9A1va4ERMvgjcjPD12SUmCFykfUsk",
  "key28": "ziC1MfRa2PiaQEzSspkdfCCyrNWW4wg8usRPVpYNePUDvc9N6JJEN5b4DZdZeQ2NqtCkWg5gD4sa8ZKA1EgBXvB",
  "key29": "2KBR3YzBE8ypyybZ9iSXBZMCNhPiYwdJJJngiYUVyud1yGdJ3abiPA14jFZJXWQFq1ufwVeuD6kEAnRPAFnSCgjD",
  "key30": "3PWPSmoog1WJqvHm97w81NFWZALctJq96HpgGUZxCXdMFVRhAgyxDVjgv4cPWJeD5pjWCGXDXFhmdrjXciLuNwvJ",
  "key31": "3xHvQMNwnmhXJExyCxUYxzaqVU9qU3i3A2AAkETdUsruLugq8Yarebow9Z6W9ts1KYY44gAs7bNVikZ69SgHCFYM",
  "key32": "5jgRq5gcVNKp8BYmkmAb3EfWzbWu2hDAD7FDFADX1dmhsDe9PNoB8otE3mrvWvbSrKRZ5qm3NmQyh5YUgpBX4djQ",
  "key33": "4dqLsvEnFbRpCKhqGaUDX7HMmvNq8XqrvKFCJdypoc6SvZdPJMBgMqe2jhWXWGhMrwmY7k19NrNi67W5WZiFYRPy",
  "key34": "4jLtgoDQc9euDpoRPzjjF5AyW6Mz4fYKXvmQXhGTYKMhRaHZ1gbpNCcij3WY1p77T2164fuNRj8vHAfTzVWpJv78",
  "key35": "qavbDWSEyhHX34R2Zm873wKuYj5nQdYzvXsd3KxN9YBQWNQhRwjzwrhbd8RjXa4BHqAv9UBKqMMxapcJAAHDDFf",
  "key36": "5Wu6e4BLPtVUyMeoLLJLoDFPEjZKTCSsc8bwYJgdUHcr4hyBT9NtT7F4MyYcgcxgcCGXPNmbv2jQGab8R7wgrSAd",
  "key37": "2rnvmZw554tB5QkviguEav6VnEgWyM3Apos7FZ7j6461rhUk6vvB3TvBdm9JT3akfVjppHhsXPkngVtK424xRuE",
  "key38": "JBXaL3rpNupYYJBw81QQE66PPHX19omQiqrF1b3rkdJQhHjzpEiHzRjU2oUmZS9xbyxLJVNtD6TtQpcrQR8ZaE9",
  "key39": "2Au7qobjr7F8eBE9s64WY3nWb929BoKbMMbW6AwVKe5AJtprHU7XNZiruYEnYpX8TSzox75pPsp8moV44c829G5i",
  "key40": "5P5cznGoRD6d6MPy7pEx6PeyKFmEcmomxmXdjsYExKGCos1BScmepuZ9apK6sTjhBaCa7KfRhPmV9b96VDz4nMWw",
  "key41": "517CCMhpMiqwyyztSaH2BYNGrYVmtYe4jq1bUSiwx8mFydm6vVpWets1UzfRCv4oiakC83DcAWya5BnVhRZZ7U3Z",
  "key42": "kd4ufDkhansdM9jxAP3nw23ybcL2SWtCKXRqUmhuKRQvG9qui3bZvdbm6sQzySw6VWhd6YxuZPaN9T4JyVQKVpr",
  "key43": "5TseTWprbHnztZHdJzaVDJ8EwQqnPmVsARcvamCZchsh83YiULS5ptVGPQ5WTyEpnSmvgoaKqYv1SHjPrs65Q3zD",
  "key44": "rF4TxoiGZFP9fAqmSwxyJJYn31SY2BC49ubbpQFGoEwh2Pp3kDYfgomRbNLXfAbRMMmsPBviqVoe93ZcPLukttJ",
  "key45": "5yhd3YL89ybBRFjmo7Jx64tsKgCvCsmX4vtua3fJhnFnsNkVSejgBdMNGDirZbxbcJXBqVcNHmtirqbnEBcEHExC",
  "key46": "21RW5CSp27SnDmALd1iW9bsWVjZKbfUvHgU9weyjq5W8Y11ADbDG8ZSGRWxKpVzw7sEhjjLXZbv1pXZRYtWMVDs9"
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
