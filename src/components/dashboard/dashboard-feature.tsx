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
    "5bifTysTdAkVXiP54tHgCzcfJn4n9ScQ8bTauXmaD2Gu4ayxFESLwsuKSwaMqxPs2s783EwW79aGr5mfam1Rdj4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21bxNQQrKgitybsz9JitdacnaVNXA5tgjp6B7STaDqpoBEXqePoojA6f786AukNVo29jMxvc8zE8tcHTnVSoe9Gx",
  "key1": "65uzRx4ucqfQYszBkSqsgAKBijkHvaLWGzfNFbtNmyT2J8AsAqq5enuK1brrztSowWnhomeP7dzGxPZCGULzMhwj",
  "key2": "2H564EqQUEbnTJJ12kL1mWwYxAMJWqvWnX4fZqWiZA7Ce27q4z1JxqbxXtjW1ycc1ApWJRfkDbzfwHWZ7HFCvFoc",
  "key3": "NwM9oZXVfXXFvDKuxk7dFVwvWrX6za2nEwKCJTyakAnjecqYLtoTDiRzEancdJMamtuHkcyTjaKDaN6FvFw5qfg",
  "key4": "3XcWwuTDgTB1gmbJu35Yf3VregfK9orPVfK1ht5egrFeJzpSYspXUjSiEx65cchXn13xEKbLr56kBvpN2vJiiSKy",
  "key5": "5Kbaho8zocoHMmHF4JgrqSaadtLeKs4J1ka7xwpGNjUqSMBrBXA4xtSwCAzuAJXitKHACcqDox5ScpBeg1xhuh5H",
  "key6": "3diZ4EAdeUhRoVUU5Nhtr14nGVr6ukDz8nHH7YLDtMFPNMZGDayNbkVHt3PQXHSVuZwWmotCztNZBdZn9dGzDkEg",
  "key7": "5fx1rzkngpECmiWJyXMNM5eUQq7Bik8EtnW1TEKgFg9LC3FVShqjJvsQQMG9WUt5MsZADK6zVU1BPDkpY7yveiyz",
  "key8": "CtPCg53W1suWRuYeh1gNn7Yjwm8JerV83zb93UtrTUJpjDtjdjfbfHoQGxvGmUoMvRLqwSzFKmCaZNPqWr4NM9L",
  "key9": "2TVjDfEh4Hrgh5Hbyi1bXD2F1sq89ajUtVDpHWwVE7G8Y9yuK2Lrf2f7fuA5UTpj7Wx3GhhsQwgVQsSryKCmSDG4",
  "key10": "4T6bH4nUNERooKNKxCEzcgasRW5Lsmi4vce4agUhzxuMKzU5DtA1KaM433CNP3RUd7t1XBZegxWc6rWrRhy4ctHT",
  "key11": "5SgiyVY4pvCeiDD9EyGEuiv5jwCpCEb1TnADVxaPghocy8sMs5bsJL6S8ypfGQiFFgma4AjTPXUW1GdocFLu93mY",
  "key12": "5hDZKWzSXtGjDZxtYrrUqD689cd9ZXpdaMknRUh75bm2WEGtZMjLTh9yee5ao57sbT7SQPhQ8UrnTBWBxCT2FpmN",
  "key13": "iBv2jqu3xstVnxi7x4XPwANypxzw1uy9cnkuNY34cotZndku2Xb6ThhbXgvBoY1GWdRLugmNKJ3F1SyfsmPGLS5",
  "key14": "5DVqVuS9rSeKYviVCz2KWTLBhHDuZKWLd9z2MZHux2Yni8MmPqXYu87G885u2LykWVAGvCwTeovBHYM6URry8Q77",
  "key15": "4xJGnBeHgZNMcb3ng6bf8XX3znGsHUrpyZeU3gGTBjakraTbNDNWrcQ2Y4QRZfH53vTmody1XLp2u34cWc6TW1zz",
  "key16": "37Jx78TdQtaUKGygXj7ku4MqA3AtcJdpAm8LTgVoM8y5eb2HnNGPhmxMX5YgedyhsGwBv971McB398AEgWDryCja",
  "key17": "4a5AuzGg9xPerQ6dUzJu4W6ztsrNkk6QgRUrvX2Qvh4Wc3mxiVA6mdZdwtp726hzNUh8KU1DCrcNjQ1AXh4h7B95",
  "key18": "gRebDXp2AcYXB56v9eVMkQnoGiyXJ2NirWp1vurjPHy7D7zdGs8A2ULgzvgR48tTozDsPMuwdckdMTuD2xAhQwF",
  "key19": "2fYSSpM5FR3sy8vQjzikMGynmcDJZUsVgbhYwoH3tR4KncVw9rcyxzc7hn6nJZ2wTeUxJHsZYq2wF9ppxbQN5T2X",
  "key20": "mx9N6C43CkPxTLY6B8dmbAg5w9rvUG3cLB3n8YpQFFzEwpqe8kZsNQGSscHaCiq86nhcJdg2fQRTNjgHmMNcGE1",
  "key21": "SnZ8rAQVS6LqKAZ7WdYN8UCZYdese97U9V3V8qMiCzH9SNf7Lw1xCLyp5BXwrhYGLW4n5vYYBck7nFkxjDKKVgb",
  "key22": "5E94nGyERgSsxwaQDupqqE3McNfy54F7DZumDZCDdjbQ7n4C8mxTyj4JLhsyf3BaWYhQqPf8Z7NAEYYMG1jr5izV",
  "key23": "e2CLXTQk363X14EwyDbQTBVC5frVEtY1qDfNYhRzku4dZBxcLz4gya4NCnH4PV3rM88h66L8ozBMATYzRHTsXFe",
  "key24": "5b1ogRbJw3YLn1emB6rSxumpBDz93i7E2777jb9FP711xVfz8mmTvdg7uvYU4LoknAxQdvsgbkygFrC397HucVR9",
  "key25": "3tEFus8YEVjmkWRxdMZjJkLBdm8m1e6NYMwdfiDY1zeMaTgKfd3sh3v9bzN16eCZhB8fHYrfEUeeK8X7Jxd8k8zK",
  "key26": "TASXq5Xg8bUhpTH75GVyqF74PbSR9XgVA8cbZF3cSGutMxjGQ9LvQCcg7JuqBWKYCkHyk75as79BEvJY1Hx1HgQ",
  "key27": "2nZCiVu6WazF1mm5QzVkHQo2PYaNJEL9uQLHk7WF7TjuVxurNCRQRUAuN1Q9H64GdoWricsAJ8rB48eN3jF6vuUF",
  "key28": "XDzzGyX7dyVcSYTkmKQtkjRKQYhBDLJK2DrHWFHdR85CiNxL7dvXxNGp2P3vTLmc85QkRhkQEJ4p8xNeefa9FDN",
  "key29": "5MTpwbEdWvG4oo9qAEM6NfYQ5WK8SuWGHhdFCVgouTsXpqcZjeCRiCPcTSMDv9NAZYpg9EjQ57PXqPuZ48MHPrSs",
  "key30": "5QBivjKc8hZAL8UAL4yx4P3kPD5VpWFqKZjJ6Uq2vcoUkuyFcrxH6jPdCH3rLueMMuB9HZ6R3ZC7HV2CiNMGXPsS",
  "key31": "5VsERsUTi1PAPXH3i4HAKUuyN7DbnxzPnvuRULv3N1Cbhzt9JvXJ9F2PmjEZk89VnAKSrSHrfoHhfWj3RDUTtQrP",
  "key32": "GChDYv39VdfmWaWXttMDeuqUhtP5uDzBvv2zQGRMLp8m1fRbq2AsxFxqUeQPwFiviymAtf9zKT3zKFeQx2aWxor",
  "key33": "5irhqgHSmSXbwbVR9vTVoznaTU2dPg3HhmnYJFe6rAjcf6GwAwarZXQLtppzDRj7qNh1oZ3rwpXmz4y3CNCpG4gW",
  "key34": "5uSPiRiGBEJmp3sCCRAwHwroWYXMe4DbnAwVFCLSyhgS8yjQnCuAwFgyuGpW8F8cZpiyx4qFyE3tBVjXQ4ZeCCDq",
  "key35": "RhQ3Dfh2h86ac4yH7QRMCVUZuiUGQWRu24uHdqALc4fss3QBysC2k3zFE6UvTiyAsYwppbSbEs4Mx2uUSdzLZLP"
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
