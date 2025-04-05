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
    "5Ffh6xmkkSfQLfPhq2hfwxwcqqUk4VQ3fVKLpQyXM2Cx3UpBy1vUDQLTmY1KU1AdUsJmUpvrn7LDiRW7Vpo57nRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cbwf4Rxc5NyNTAaKCuVHb6VWQqxwAdNU75ZCA3yHwAA5C8huFdGqPD9AKrVXeFAedLbqAYQ2r3RgfMK1pLk8eKH",
  "key1": "sNWXbeRJ6NnJywntQ8ajS6y8w2Z7t5YLAUJf6REpYPabskuaYDg5mANSS2tzbVDE9V6CknymoZvm6R4fzA5tzVn",
  "key2": "3MNSp116rTqwLGTtr5GuawLDwjTe71K8euucs5TstCCds1rDWk85CRz7ZAjyaPkhm7ZBgt5BQoS8RgvZuJ7B2FZv",
  "key3": "5qNSPjS9xGK1jqHxtgUL46XTnbgYnbJwfxKJyfandXw4bWHz8AUET1dQR3kSPZ3RUMGgftzwY8UrRjJgeDjND6rn",
  "key4": "4hXgCFG5rYfCRZg3sQqBSY73oryUAG9XBdE4RsDcGjnFvwDB75b9VZ2uQvKKwEfeAnLB3wVmHekDsrEk3iEjvNVe",
  "key5": "66EUEFA344KwB5A8SRy7ppiHD7kCG46ZTbs1cGreJKN8fnzghLU6YPXXsgKQFHFEttM2qmqVJhPdM5MsYtr6nW1e",
  "key6": "5db6Dsh6isettLmsghgdAaXJLXNCarXoK6F3VWdt1RyYwhSsUAWRUiuT5bGWz8U6orNuKss4NDZidTAeFPq75cQ7",
  "key7": "5P9McNyVoqoaMnTKrjgKZ7ayN3W9Knw8wiZv8V79BrS397LUcQxt9HuQSe7AzuCjxe41jrDLcmEAWMJFVvQ3wsGR",
  "key8": "D6iTLeVDFWMGPX2geVfAoQkwgJswbGVpGQc6NMKSAksB7BFUfDqQ5vt9kmwHi6jBi3dYMQDKH5L1QjJ7ZoepkhT",
  "key9": "5HupcUSRxTWRKk1pYgTJ9VFwX1Q55VtZmzJrQFZkPQMzyb6BWPG7HbKyFFDacD1eEx4FfXJqYRwkCFsdtcACXAmg",
  "key10": "dj23FJ3fEjDFf2nNjrYuSqZoQ9QDXbeiCAqbyuRYhDDd2iZMJCyHguAeGm8sfsmKWaTUDcVCpHQ1JRVwaNUGE4N",
  "key11": "3tVzsaHBDfrutGo3pf1vn6NXK1QkvBrj9UxUmgLWn7JWMJkEf72WxYTfZccgxjB3iDGkiNPGYHAvRfLZqA7f8Q7N",
  "key12": "4Ns7C5k65Xa69y2NLJaEaWyZ4yArpm9snMWCdSJDGE38fRk5syHcT41HovZ2NuaJV6wd2hg5Eyid97GAMq7oRbYZ",
  "key13": "5ssgt2nc3wTNNvuHVKNtHJkozciYzePhXzCQACk3bUKkYgiBDjK7PFqTHVhjKHyrHdK46FhidjKb8D6DWfNTwUGt",
  "key14": "3uer4xCQfSNkpVSez3VxWPPHiM6TceZEfh3emtCsQuSqFz9d3zsSsafWVnMLewtc6tZ4qLS5SSGDavH8t5NfSFpE",
  "key15": "5hFuosFPhK4nfGQhoEBJQu7GMQt3h1KeUUb4BmWGrxnDsCQPSCBX91sQKw5rsovAPWyQSra4K6RvLLraFeeqUoqy",
  "key16": "5yW8pvwjKhHTa8izC996Ym65GY9wo77b5hjLgpHAiCysWEmTT5T23KWsSdMAzqgVgfqthpEzZtkcjGs4gJm9SNPh",
  "key17": "2EGLMAWUUS8qF4CFy8A1PqQfhqhqApo7iQxC9nCiEQyZK7GSUXQpbUPwxKkNNbDrBSHsjQPoQKbdJ2VzZNY44fLm",
  "key18": "35GgbiufDPfXpFdJesZ4snABcFaF84pyWSABytvoEgZVqjAmaLTJst9jU84ots1x5c8W3xnz8Srtysw774kJrkfH",
  "key19": "Um6K7SzMYiv61bjU4sWqmwcapi6YsLgnziNHfSYnD39L4755h4uHui7J1pbwNjFNnuQ8rfKUBQ64wzQHKGAvwaU",
  "key20": "3iDgXAqdUzRXueCrpdmjtJxuXYkKLqwpczg7vnwtV1s9ZNGqY8Eyg6iDurCY9yabrphu8giAeDev89R2mWyRMfoC",
  "key21": "5NHeJtBCsmaSKEHrDCh1knsTiCj8QkxwPjfosnkTmgcF5uvxoqRDkg7gtsiuh3TVHzj9tPWWzWnaHvk2Wz69Sw3k",
  "key22": "3guKYn4putvkGeP9RHusgtaGABpqyY6D7FGCGhCyfhDWRUGsrozqotrEF5G2qP9zq5PBaugR5ZoW1BmMfZL4DYdZ",
  "key23": "4B1L96kiFCQkk8GZtdC9ebkFWGwASqdHY2EBZ9aySymQ9rTMnvrvBziw7cPNyYckcmUS4PV7mjKkeojbktJgxzLK",
  "key24": "558K2AdjbmhGeiioiFJn44ojAXBMZSrDmnSjpU9Pxu5u3iSTs8ff95qQf4g2eCceeeEj46fsA21LsZGbmopyCjxJ",
  "key25": "87C74Yp7VUNt7tiZPREu4dmfX5e8cSnBdKcvBvf4SRqJa6YDbsna4AmYCEHUsW6CAhi56VTmhqbSTaQJsjrR2pF",
  "key26": "5kohqbvs35p5XHB4igURTnB8F9dBv76MJrXodQxc4damJnkz1faXTePCxHZ9ZjFpNaZFAqCe8kDvbVv1UPjyQtmZ",
  "key27": "4oVNFAJtoc2ALT7DrD1EQE5ye7zoK46NrdEqzechBgFkfi3w82URuQDZ4sphehKN91MioQPGLu8NhdDW6mzeCjnK",
  "key28": "4TZY4uM6YCyMPaTns5gPUm8gGQCGuf7zWPymoMHQD1QX2RxKQoeTyYK1JokuacKTdhCRTALxfu4ZnvZydnA2L2H4",
  "key29": "52J9Nj4jRndD2tUoVRfz9XiHWQiGMk9WNM1r7bYte2zLWhAeDzRjTvCgn1PydzpDwjjh3oBEQtrWyxzJT4BfcgVt",
  "key30": "4GS6JKqAmNFNJ9r58DuPEEqATMg4mKQVUTkpQwKVz46EwKMRVJiwvzcq2q1fYoD1BakB3j2s8en2f5mRr9mXe8dA",
  "key31": "3jMcr1TXevmbn214K9bbDpop97NhvbpuXMzLpX8MRcKaGywMmjSLW2P4HsY1TuAK4Hc7sYTjr8fTzqnieVwVBHEM",
  "key32": "5AhzTsj3BD8Ts97CseQQTReSLUFpsT75VMQWa5Y4XszhReTJs3UNUsWW4U3vwaT9GxXgR1BZFwkN1KTSWxXZvXfN",
  "key33": "5YNPgYSszTGNEPRDGCQYu2jLdrNnGKFot6naPv9NA4psSHFryMFZ3x3nPDrC34hTg7uhBuRPHkJ64yBU53wrMApf",
  "key34": "2bX8RoDyMSWcbvEqmjLpRPNyiLgz6AP9Fah7MkZ8swTZXFwtMqhXsbcym9w6AZYZ4JYfsu4tcwV2x9jgGi7tNfSR",
  "key35": "4WBFhYs3uj3jkqJWb1uAfKtoSPjwhKUfVmd3Cy2LpDXBze2uEk8bze5eJcSB6cmDTUq5ySjG3TPjNkEBzeCZ1DeK",
  "key36": "4Z3frgNHEetFuqsVnaT3oX9KgAvohmNuWgMbqv2t6ZArFJck8Lb93vvHZ467C4j1jh63pj2ZVcrqfApLStcMKwkP",
  "key37": "36GtuBRSZBLZaXazyVhtQDtgtLMMRXzBx17YNQf7HrgnMVWp9yenxAuEke4wA12RsuSHa9cp9APLBRyGbT7pT1BB",
  "key38": "54wL3rrJeNJdwKZKRjrd9cbb31bGNnt1PsuHrSCtT6HRY2NUie9HV3GejMp2JRunbvRR1uRAkspe5RhXjCgvsxGg",
  "key39": "4n91Mm1qrNQk49Xz9x5tMRFbdkybFiuDNjp519w8iL9AFRTotHNprYZiJJFVCKsFFqxnyeBfENznaEBV82aPooLd",
  "key40": "4KTWFi1M9XFAFX8uKXvwvdAV9TYFkaYh9GYsJjWb9rCP5P4a6TuxYdMixTosq2CyLV1pGtvzVHoXhP34oYm68UN9",
  "key41": "56ThLoWxQveiwhP1vJyvQYF8H1vt1SjrXwAitojW19nkpkZH5Zd78xuTJDcK53FdcQimDtdRRx4EmFGxxXCewRM6",
  "key42": "2NW1pwyvU5AE5D6ighfyYZDBfsmtrHP1bjaqEt2kJFAEXzFWeeyJjLgdhMCeLJCD8AfKdhmZTSgPofzaFDQgvQ8N",
  "key43": "VRzEe3mZujMqRcwsqp9dDs5YzWL9wtiZaMAFAwgx5cMD5efWsFiMy5YdiyfkbqXfVfdgTASakeHefuQRv72pfWV"
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
