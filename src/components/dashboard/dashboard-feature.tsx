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
    "4gBsMmJMv4b1ebrUh3ZQW6uhbP1gGdfbSknY7d8oTyqyLBd7RTWyxqki3S6TiekNDNQRNcdZ7Up4yhXnBqith4DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2arXzNCLb9kSE7SyDGwZuwtLmrjkN8BFRXywHBNMLV8nH7k9XUNHyeg9gnXVtopK6Rs26CxHMsKXUP9o9jeM6nmV",
  "key1": "2sYExDTxnzKUmbBX7f95bdTAkJaaPF5uZ1C3FTYAF21iV5mbetWvVyTeMtfi9GomcA4jU54EPNXXxn5wknPAcPHm",
  "key2": "5NfjjTFpCkgduu9PDBtZWh5Lmhs7gX7tha1Vz2oinoUFSMi2A2h1eud8HjvUDzEyM8zDbjVjcQv4hWgXTsuJJw5T",
  "key3": "2hfLgBxUueHMwXo27LMAep7RgFP3gKtcxvrME9e3uqpVqzTDYZA14Z3goDStdLT25mUU8gmB7mkSxxRFLYpLQhRm",
  "key4": "kxSeBFHhVjNJ9AmYBq42gEzEipK96vBB8c8RqTnkMQyNFD7zAbtM1sCdcbfkxCBSwJpCzaT7qRjkaM2h6N26BeN",
  "key5": "4Q33jsenCCT6jhBgf5uukrQaNykY3zn7WSa6HXyi1hGGQWZRH1xDaLBVhFajG9qJz6Md9n52bpfNM8WGoKqVJG6L",
  "key6": "5KfPYbbrXgFbjKF8WQAdP6a5AhVzGDzvLaqQDZNGTBWNMCBTdHQqKRGQtesLwqKreubDujTkXf5W6TcL4HKqTUgV",
  "key7": "4iwLRex2VxzrKJbHz3gcSrbmt7tAETUkKDfduL4QsYoAxj1sKQGN7w8YMig9hxAT2hCxbfjkZzwAPQaA7XFp7QH5",
  "key8": "PnpYsa4WeKirbc2W8tu1FahpEsFHvLFjTxjQRZZ6KaZvqbtmq4hKJAxiNXaQJKPfJVoMTZd9wiAgfzGkY4YbvWv",
  "key9": "3UZzEU5ANFu1b5BX68hRJ3SXqsZjAEyGXDinwBPRhk1ZKj9fsZzCJuADmzUJitzqxxfn7QD1hLfMThjzcKQFUQdv",
  "key10": "2hZ49pqFA2Qdk3G1iR34sLwmoQeFhFnVNFcWbTvNhHkYkLa7xcYP2QG8pMoivvontjpQYG96iqTxHa27mnHhEmxB",
  "key11": "5YkvfkCW1KLPPui6SfGh7i6n2g1CfjJJqdGuW469Rw8SnSwe2gD3D6ZoJGzqpJYrkXSCtcK7Uy6NQY7grk9FJpFG",
  "key12": "52VTn7eM538ooeDAFHMoRE9jr8KPGwbeYyQB8WrU2SdNpthrLR7jsAeJCv2ri5FzSokxQqhifF7x24dBvZapdoAn",
  "key13": "3QpkGWaU8yMUF2Q6LQpf2KQjpRisHemcBa36xYRX9QtqRNLCSJjwHT9YFQXroFiZSzpWAnjPgKnDHy3i3gXqQjgX",
  "key14": "pD72V7pispHTL5CEwCdYSWa8fqyj2v8wkzv1TtbaTDchgf9RWW5biUZPHNb5YyiukNSKydRgAxQvoUwknGnYuZX",
  "key15": "22kb8WhKdHRTyt2TSxk99hJnVXKeEYZMMUwUo936ShLT2UDBkkWWjTpEr2ceXZxuDjnvF9XLkhRUEY6dJa9XKyZD",
  "key16": "2YzYvwQTXHXKDVWqvYBqwLiykHwRKUSDbNiJ9QdwPFTNY1j2r75zfmU8u7a65JwAdLo9SFBam36gzShtB2YbjUJW",
  "key17": "3VTNbAzwxgfNbPvSUkhwS8sRoixRfNg4AgJ2KCJwmECdG1RCDfzwvXCu1235u6B9owbyc5iJQ4boz2ygcWoHc4n",
  "key18": "3M45nBqLaTx81nRSfX4rz6i156iPmKN2PmTkAYKJzLpAwVprD64sajWD4ZBzQWWS67BEn5iM179goQavmwHMyyQp",
  "key19": "2VVtJWkt2WvSdVAeKMuo4BWLMXon6ewu3Mpki4ywVz5mFVQD1kx7qbmsPdy1FnCUrZfVt6n1zsuz8vm42xWrshZj",
  "key20": "4nfpPEocdVEBYUWSKG11dP9sTGeunJqouZgUyHy9Y6wtq65RrRMNP8mehpKUn8KsDSFLvsNHAyVzbs9wTE9mJWJe",
  "key21": "4GqgSWBGHduRD2MxzutxHq47qY1HH6ZTrfpp6X5aCYDQZ1eXrvuwRRsPxvyfBNEDFD6cq9qS477cdZgy9dXGXtA6",
  "key22": "3tVMTsw3NzPZW9Ho34qfiRK17iyVkH4Fu2XMN3fzb4UJq4xGCr4o6ydjwLY9SwKyDWKpK2nqwx1wUtjEXPgjAqYc",
  "key23": "2g8nY72oupaHNgPxqqussz45Rxum5Zm8ZHVWo6FmzvxSRsXHwmN1AXvCBTSGa8F5FRqceg6PcGq8eW23Agbv8XjT",
  "key24": "245VpsWjsG85wu5GPLY488W2FFsHtz1Qkvvztw1D7AuAYBMtLD8jd6K9eRqAkTs9kxkWUR1mnb6JzBMZW42u2ZkA",
  "key25": "64B9WjgP83HyeKoEzBQNMkSmEZfyY72hyYz3pTTVwUJDCaSRFH59xPiZaqc6quy8eDqB4DrHihTsMnPWVcEiJd5B",
  "key26": "3mG9W1h6wGYGWsYupBuDmFk9PkrcxJmonS5kqFY7bryzthXcQ9kcS8Hsq5NcLmqqe5aotR9b2vgy1Tfm1EjAAgzp",
  "key27": "2Xiq8L7w56RMb8CE61mVTFwFnJSv6c47eyuEfZn8Ee6W1zF3vct41Y1et8JVRTUkdsf4XWSMzBozjt5Jyz7Xw6LE",
  "key28": "3fB39GFFA5zjVsEBhhUQU8qLPyCgapKQjCkzWPr8m3UJVwLTuQstrXN1oQCgKjZFin6H8SyHTWD5U2Vp633xuWAJ",
  "key29": "5pYC934p9NtwoHD1HM6bStjTm6XPk2GMjmZHYCfUKU1po3SXhkGNLDhsmLpTzePdKeGafB7NUzLFvJDvDyYtjsTE",
  "key30": "5TfJ7RhmQa2RdYwSb56qjDqzxXUYATAE9syrKEKNqDwQRzK6cR1UN5GdLwykGitxMYNd478V484py3oJ2HAq1m9p",
  "key31": "Z2681cVEdy5YDpyufrrUVch7c4fU7Y31qQA6GvDBigRKGowkuszFM3zi6DkreNixRLgXixRzN5pRCng162E6Rr9",
  "key32": "3c6GSVaxTqUQEYbRymmwwkeg8cETAnJLUPV1oh72GDYoZ7PWady3MXYG5EWLXzHd9ze9ZbVFdo6kEs3Z92DrBZpU",
  "key33": "3GFLXCm6piVCcVrKV3sJJhx63w1F4FokSc5w1ovhF9AMeb7Bewx1HgK9MwXaAyaL5j4ihcBXcq1u496f7CiomYdi",
  "key34": "2fVdtcvTPD2fd8bQZH48W5ZctL98jNF8ze7TDi4uwpjsUraGuARDH2y1aJyXLHju9UxacWzxnsxDm6VTKTXHLxJL",
  "key35": "7rcDrxXprknx8SnqkSbuNyjMR2R5epgnPRnw2BDkNWAV8RkFgCe5ZKJYgN3RD5t6pQtCxj9pqxeYdmXfXjtMJeG",
  "key36": "5wFbbm8eUsajec5K1PgJpx5WybYmhKMjkV3pCg821dveX8t1Py8PRe8DxkBDDhKtPzzbVZ1tuwRNjPWMMAJk4cxR",
  "key37": "3zXMkgUSY6p7ZfpgmNwo8EyKGS6QtC9KDon26Vpw5xb9dRN6bijYs3y9Ak6RhaKSXrbz3yWeGR691gCNKxWhXbHu",
  "key38": "fRvYFgH7NEyECbrWczyxttRzTuh3VVbMLYcH4hoe2iX1npj3vT7v5Y7Uq1Pf9nf77uENegf3WeTkztSS2JVwsF4"
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
