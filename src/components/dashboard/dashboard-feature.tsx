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
    "HPxDGcEHGdu1vt88UG3kiGAPCPAik731y6zt47zCA2opaVgShecJxV5utzTGeBAJuNLF9Z6WscqhotaQTTqvbRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJrjYu7iUTkYwoSecjsL3FXPnCQ8u6SUUdjpUDfR82T2nERFCd1SxF3WtfjZzTBqGvrWBFkPFeUGYRBqMR3sWuz",
  "key1": "5fZGtBM4b28F3UxnjDs7KbrY4VtmtjjEiUxbdLyoBb1wFkRGRL4A4QfyDGXPtQnnKKWsoBLVyMKbVgJ7385EqDS2",
  "key2": "2rJXnRpmd6NkquV6KvQ9ze2qYkejSPQ3jqo97qnyht3rHEhSBtULJpTAN6pLVyYi5ZXMBANZEnFwDqEr9CQvAz3k",
  "key3": "5Lzir2JVVCebSL39JRuJg1gH4M2JTxPPwPbsFjzCpmpeiLGUvbfuRbmxzi4BZwxQBHNo8iEnF3RjjUpdTE1gqY4X",
  "key4": "2jzLfYTCr9qb9UWUqVpZYnTYitTuRGf4iQT8vEk97fEvGG4ETm8MQRGK1PTNR7Npgz1PKTCbMjMHpPggeqoWL3T7",
  "key5": "61XTkufeY8Jaf9n388ZbhdrsQXjeH3XibKdi1UaBnQJsyKXNX4WRiucvCDTNRFpNhjx6phJD38gXh6NztNDbbE8j",
  "key6": "5rsjQVHR8UwpXRBT7U4W4zwDu9F5opwsfxLhFyNiRbowaWbZDr24tRggG9S75LLvUEjFsg9HxjTdb4GBPRSnGLNN",
  "key7": "2c1gcbn4UWc6RPZ177QrvMPhUzBy6q96Gx48ZJS8zLHD2LmSEQK1EKG346xgteebWKxdpdU4SRr5cLQXYEF57QSY",
  "key8": "4Vc9wirQK1mXpfqNUrsbUGMwrGUCREzTGmkdCu6YVgkkYgXcrtg6YZrW6SAqwXDUYTJ36dKX6UiiUJJXzBV1BidQ",
  "key9": "2JM41hsUD2B9ZXhpiZUR8ZDRof7YH6Z4s5j7Q3oN34zbKZprxEaaCgNkB2UCHQQEXvdysTpdSybCKRGywBwaUd4u",
  "key10": "iex4RjzpuwhYAaiX68VUcgjoyu3EdaFrnKnuxLVNMydyHS9r3dRNedTXKXJGgv36Bi2tmSPTUuXiBDUzxBxfq62",
  "key11": "FJowrZQgqQS19CiGjfXQq3UV3F11ANMZeH857DN7mqPt863WF4Z2BqtSmuSdCu6F8GgSGoJVfrFnrkqL7Sar39a",
  "key12": "yvtR29aY9NaikYLcg6e1xUgNj9ZjL3eTLqNtP8QkESuifSr2Vx2tezBV9m4PAmgfuUGzFyNPZ24rBsMr6Vbrvt9",
  "key13": "4fsiYeojq9R1qUv9n5GXsCvQTPTpKdUJKF8JgtJrZmdaYg8aL17RUJeVGPrc5p4iy8uvxtHKeGe6QJicQPbnLhPf",
  "key14": "2tngxdwqLP1kQs3Vfj7hZkRehwc6HUYdFCfoRGSaVjA3UPrHbg6i3hrXGd2jAbMMt6Pg6C1DSLCRcbUpzWEjtPLi",
  "key15": "4tTz3YXTCc8SXGmj2eFdQkvAiHxNJqyAyPYxew6B6Hj52uAhTb7FMaRAjqUyaSTNR9UGJWs5fEZU4EFsJkAkmCUw",
  "key16": "48kGd6KDLHF4vgdYMKiqGuaj48RLNJWRKbeuVdZEx8vREKuozKT7jS6kvhRogkgKAwPTpDMfmh31pGf3bArS67L",
  "key17": "49LviCVXYCzTuTAQFNNCnDujM3aABmxYG8UjQDmaccPzJSYDBMqJosyUDNvhwb8VWfCHJ9xsT57FMvvRjJS3C7Hz",
  "key18": "2K7YLtw1tmkZ38DwuUSDLNvtVSSTyjxEw8zUspau6yHi94j5TzQY7oNSr5eCx28Rzw2tCGhxg2XQMcUsyv4QmbV7",
  "key19": "5wizfRioxdNpXkZqkL3jNqJt5tdqfxvi5iwGgPePE82FHAxtGnSib2rPb73YvpndH6dfMA6La5tkbmAqNFP6xF1d",
  "key20": "5su2NMrAQdaR1Zk8cJpAjc2C94eK3WPrB8GHB3Apt4TG1SrD355AxWJBzXG9gqfGDzEWjzzy85dujtjgrjKxqLoL",
  "key21": "3AyBpj5XLK4ca9H2NfxrY7PrXV1p3Cqa1bNAVYCpjgZMdQFEKNVL42XtfEXAocJA1UcvRUE2VX4r1F9gXnpYdJZ6",
  "key22": "RXRhZUn7zGH1xJ6xJD4q72ZogsXttg1L1yfrEEXPCSfP7aDKSFCEiKj1hUeJNChPtBceLsSBxxmACwHQF5FYFyT",
  "key23": "3XNWKZHVtUM3thsPFjTqHiUs7CqAbVdeKZZm4485wm9oWLzm8aFmeVpYJPU7puggS64BzRZhgWtBPa7XPrGxhEXD",
  "key24": "2kV4Jywq5jRmN2EU6ARQzzR4UqAqgBjgRCxuTnUi3Hc497sirth76GkMJRi8L6HQPhyVFC6WQjMVv4fMVCaseMFQ",
  "key25": "24KrhX9SXbfrSwHKUQE8rvbaLuFU7k3nSy2EDmYDksdwM8HeQuUeUTxVdV6dwKacwWXkUWESzFNaK14exqoesaBY",
  "key26": "3BbYe16VGvv6btiuxx8R3CCA5JqL8E5cmkCuUkRHgbgGe2AgTbeZBDFnhcw2j4CxtHj9fpuFwQqh5nsRywumyWan",
  "key27": "4J5Cqi5ywXPYhyApa3SWWkVR2Uj9dVcBFQXDYEeVc5q1FDz2ATvENJBRHgFnESmTr926XNJMGFQQb22AZzpeMq54",
  "key28": "4rVFRrtE9stUAD147riF1uc98o5RgzYUSSaRsVRqhaBa99M3vsRXxU1sh6gcVwuKZqro6r9Xtuj6nwESgdkVc5Xy",
  "key29": "22MHgHz6h7Q9ZuBXsWg1ozKMXqrb1ZGDoejMbN8CNTXJWUWjj2DrjCBe54rvFKzzgxCPndr4xo9mp4vkYVzELrUi",
  "key30": "5Dq3UsKbnXpht9bp9CL82L8mVxXZp8RA4NsQAbYTKZpdLzv8vqdnFKaCKmePNxwRoothpFzAT1cXo5YQLHZr7Upw",
  "key31": "3cTHYzVNjQWcoDXaUgYtgYCUnzBnw7EuqezcJ6JwfQdu8r4J6k8MRtYqo7aif5X322ThP2VREaFnqvFcikqNhuai",
  "key32": "3TUUKf3NjMfh8uq2DTbt39LRqh4BnaaKeNPsD3qRcMaiPzTCAhYZHx1ps5BgohL5tJc7QahhzJ3xgXufxPeHqYD1",
  "key33": "34YtReLebEcf51U4YWHXffhDHvMThCQyRpP3pm7TEfzTEA7PXXpoDTWrW8AUWGVmNUvPRFcRasH9gZaapASMNDPG"
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
