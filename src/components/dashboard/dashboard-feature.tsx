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
    "3BgrXFzoG7Vk9Ggi2yconr4U4AnVKNgz2MXd76mKhUbtjt24xZZ1spbgCyT7JA6KX4HHfCxLPxyvscn59oR5EQjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dEoTtf5jBLvquvw1HwgJKkSFmrssFNofPun6fhsgm43H2Th1tQSa9qtsnzrkEKYhA1JG3MLknpJfRsmktPrDASW",
  "key1": "At57xSvyprJxcuBywh4C6HwcnoUVcz6ryx4z3pnph2G3HBUUhEDAC77WHPSBeQmAy8pu2LTzkbPZts71c7gv7Pg",
  "key2": "5H4feKwS1c3WYp7owfg6PVY2ZpvoEbbMsWWeNoJM5eYH5ejk4hnc7i3GgNbzrrJ8o6QF8XwLcfU6zZZHZ4n21Tzo",
  "key3": "3VXEso1g7cTR1AczbadY3HjHdwgcbSpBWzSjkzvyye4Dp3bzqf2nGSz2XV36oD2xMWiiqrBBn43VYXbqDo3DSbf4",
  "key4": "ws27RnUK3rLMNpXp3yPdJY1fEowPyuumBHHDEjKUVJYkZbyeNYmVinVAySCjgYTN5MSTexJ32Eh2unYQh6RGKho",
  "key5": "5PhyiXfTui2SwRDv4B9kJxJvKymkyVrg7ntoBpXbVNJ5RwnoFkdp4PvmiPcdFAnoHLTFRfGpWCWaS2ufWo84aa3G",
  "key6": "4tkhT9p9NSDRnXo4Q8u6KwbTKjk6LHh9aQRP4N3DcdXLm5sEAiBeLfUjff2yUjQSy24yZyqUCBskBJWp13eXP1Ey",
  "key7": "656fzFhpmpwUp6zqiSMywL31v8ctun5yqbrb6YMMJvRjFgm7jBNtZarPR1K32BZYJMZBvGgzMtdbb1HzBLQ1a8zp",
  "key8": "3HS6y8KArqBnEfzCCjTdwjDnq8zCjFUwXFsmzihdcgtPnu2peKqRvbfYRYRBHFZKoo2n5Am9xymos1WB7ebKAbiw",
  "key9": "4QYqXzBN1WLfLDBr1ZWgFGfVe3sZE6VZfoTGQaQT9SCt3MoNiewADdjaVKg79VMoFYix8orutufWohorNMkEGoyx",
  "key10": "2TuEtEXZzKx8twkYzbSmUUdeZdC9Q5Q7EUFSng1wdZV6JAW8GTPM6rkeLJWwbqRju6pufqpPcAK4EAbYJM2kohbd",
  "key11": "2KDE9q5gXwHWHxVQuBC1gbtf4bk4JPDfxMFEgwJCKF4dDp1AYM1ftF1oNqeM8TdQA5hW2PmYhP67RiJevZXyYaaM",
  "key12": "FSdyKrg9vUocDtuC6nn4KTr9LPpKyz8CF2nhHnKsLJvfC4jQWgbbr8L48MgggBwue8eSxAYmDgKjmuLDv62JVu1",
  "key13": "Baa1ahBpa4To7BLs7WmMjcRzJ7aG8D1E2m9Sd8GxxxEwQ47Vd2ru4j7JyPBuCjEwrwqvs1RRQnVziEXPTTMShYK",
  "key14": "3ps2UhDYpwXLUyLb89HHAZY1BFgsp7bzpC6FCY7ecwXK3kwwSyJJwcBUgYnme66yBgeDhhdiU8yCRVxCFJL2hEj",
  "key15": "gAyUY36UYf4XhEAxCAPsG48dcV2j8M2NTeVEjEmNTfqXQZpgD4sRJFwC53MPRLK5SmnWu6d7pipZW7QBjuUyHbq",
  "key16": "zrEs89iGSiozjEA2UUYhdeNUpWLbzVeQ91uYtjGPY7LnkNFT2XahovcjGFCGCLCYpPUJcyRTEQmzqAgN9jsUv4N",
  "key17": "5qs5oDnYdzc8sfPQNN9oL9GocyQesJUF5Y2aKQLAxxsFqbRVKktLDDTpdVtguYHV3Vv6h2XB7nbni2JJzGMpxrmp",
  "key18": "4jJptV2vXTdWkGueUTEcEuqNFG8FyXgGVymF6TZwdraepRh7zFgSyLLbiRUYHhCc7TWzxzZzCsMByeE5wc3zFKyL",
  "key19": "5SccfTQF5VXZ7Cwkk1cHsm1wNFGvMCMPTzP1aCHNZFhYTyatZBFwnGPtJpGLj2Mg3qZgptZmGsCnouDXqhyyCtBH",
  "key20": "4kdPgXPsjKxQS59y1763xpYKPLsDqfNV8cJw4LykrmJkR6KFxMfVLBgPG7R7UKQbMM2k7fJ3urCZTjKD94Batsi5",
  "key21": "4nGjj3SCbHa24ofrGHRRWcgTAfbHzi4X25Un49Y1Gtjzx6PKqsTFWyKxpLGMXoUKov9wocWqbPAJR2sP5tkvfCj2",
  "key22": "3jN9XZXDZk4ihhXQDno6dYAvLxWFkRjaohHtUq58cH9E9ixjihpEyGsd6hLesJk9uotQwUfVJe5xddzDw6gZJnMN",
  "key23": "5ujXK4jqmvDXktZdfjUAYBcuT4dMMoHpWa1cC7qVitQwG85o4EckKHY4rYkoZH9jouXe4nX2E4JAKnzMU2d9bJt1",
  "key24": "4PJo7vJy7P7iqEFUhdAP3zXhYRgaQfGZMN6sD94iLaHVSpz3bpwdNesxXRx9EswV9WXNFvonbxpYHhuwNpKTakRU",
  "key25": "24LtFviS6s7HXajtwsEGfEq1qy2TKE1j5aBzUd7gVtqMxRAt3NLPSrPT7qGwS7GDCMLcZeHUquckPWdbzgWAGJM7",
  "key26": "tquK6QKcT8wW9Kh1XrUwtagt8EtGgRZigGfhTL6DT7TDaaWU7noYfUri5L6TzqRP3p9KXYsfehGBXdiefUmsKzz",
  "key27": "5REFkcTxhxConuFjif5cn4R6ZYUbnKLaQfEJVzWGJ6z8HgjaofjG9TFrQEjsD5RjdTEDRGEHX9KbzgjQDDLiXrrK",
  "key28": "5LUrFNN3eWEy8cq4hEmtd6oHLmisvcjYxSDi5eFCJMnuE751kHsamsqx9ACSHJ2pmjGXNLgib9EdRt4GgV2mjkHd",
  "key29": "bcd9qQNcfKgpPkxTcR4kTccnqF5S7cvEjPBXAkRaWmYu1wHikktKyue1UPzsuvJpcp1qtKQ9vN7ugGimjHpxuKq",
  "key30": "pc4eowwR91TaVU9qBgUtfxNw3WK89UjjRNyQwmuHeRgdNjAs3gk54uKimKGydHquUFKk7CDWRGgnm9xHc5ubHvg",
  "key31": "311Cuxmm8FQSU68E5r5rsnBffhHKHLUsLvPmejdqsK5tSryr9FUDvYzXv75qQKufzxmSHP9vt5u1EnSAhPeXVjMi",
  "key32": "SQiNywWT1dNuKEjK2cbmkavG17uZmSJrsVdkVREGaPcoptLh8zv1GNYAErtJzfVccB9Y5PG2jqyd5HHS39U5mXh",
  "key33": "25ZhDV7EzaH9UmqTznB8FWsdRH6s9eFPyRB7fBkS9cB7YzG67kp1VfBW2gDCy3QcrTe2CNnEBU1mTHqWfs97q9Y7",
  "key34": "2XKTih3msLdLnQQPTR54KNqXHxFF7VjhnCkwURowX9wZXKtY4MwTkF7xMFU2jnVGdcDJfRWPZzn1hVnU8R7nMTGR",
  "key35": "zkjNzxeP61mE47pDgyHPkzAK4aMyuEA6fw23E77mvuqwde1hQ9hEzdsNJHDnapFxrfhXS3QwXh6DzJYiy3DuD8g",
  "key36": "GcZdnVeaMJKhApFJgErmRLP7apvpggD6WW1JCfCH1KmZeMvY4fN3VzV8fhUrtdgF6aHeiVmFcVDBgdiYCzeMYei",
  "key37": "5fF8dQUgcmTmeUjg51EnRZBLcCJxkgKJBY5jHUCTpampXXi5fms7rbgVVVXuyqmPNHjno1youSJdvZxUHsgxkQtf",
  "key38": "4e8gCiCFoPJFhaRYkQRkYT9pP281M3CD8UBSo3W1bYSpY3b5vyLMZ4brwAiwgULeHSvmXV5cwPxiYfjm6X4b6pQe",
  "key39": "1T27cFrY4oVMfbAJJYwheVQmfimaxkVTXdVfaJBFR7C3rkPaQgjuH4k2Cybcyti7Pidi9Qu7aTFJueUNWC8NGAG",
  "key40": "2K9W8ueptSXRzDoN7ZwzBkgHP7FbxymABzzQJ8U2jbzmxRSBWiyf4LfF6ZpSoCjyf2gi5n1TGhmKFDS7fPQGKHJB",
  "key41": "jbjw12DuJNmi1DrVvisYZuNMLQEQAxaXzpPpDNVoJzDrpe2sGKkrneQwiqV8GT9sFezVrvXNGFw4SnubgzxW3he",
  "key42": "2SG9PUBbU6SSc5a7YSXUhouGy9n48qbCkeRWv3LDsoo1qpf9xG77MgpQJHTf9xfQ3FHHBwVotaet89iKquotmSYw",
  "key43": "3rxW8ApNmEVVkvRRmhVp5QEgB7Hvdajk2b857bqScsdCZP7EwoWgzNSQD27vsfSWLjkwrPtAeAnpAsCMShCHHMVq",
  "key44": "2Ppp9ygSaqarS4taYNGmenKKU4LDmXaBoZ1VNZmzc6gmrcs5yxU4MRZUVPnT4apDnVaWQCrKE5o6LADKAaikYsZN",
  "key45": "3Ej1QHm6CKrorwgJQfBDoxoJtyYD8MtwhsBeVBAo6kqzqibLiTHpTHf9MvizzMJLu9a47fbZLXKAibZP793A3xE2",
  "key46": "5u2pWxoExTRpXcLFC5FiApqndMjdzHDzbCvpVEVsfyhAeBH6oQ9sdHz8TqyjQtQtYPXdiozMUcv9V3cKxSBee4gw",
  "key47": "22chRgBWQVLpRcg22QwZ3Guns6vEToe6nphxHTwGYJVmPh6NGaHxTEenWVXwVdGHBxN6LMXikWR1pspAZaKEHMeA",
  "key48": "36ajhpQ7tqhV5VTTF4CUytjEFy8BpX1xM87FTs9q4KHoeUVGaGPTCzFNzgxTKgXWQhS9NZtn62SsjhcyKL54zwnT",
  "key49": "44skpxskn5NFuSnyCZ27D7cS8aop6cdJLzZxpLYwY3X6mGZPrLM9o5ecjbmbGhc98CWps5V2dWPLWGKEMksGq89n"
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
