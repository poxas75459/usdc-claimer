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
    "5qDP7ttQX6Zc7i4o26MZ4zsjd6pyg1j6vJsiM2NNeCFJQZ18nhuvGC3HFbAP999k4mtqCzr9Go3C8ydFhWuZfh78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27kgdHyTqjF4i4GUoz6Sw4b9Fc1WPLfQLs7SmbytZqewvfi3UhRo8TZUYxkVUMf6xxHZLzSkLGmuTX6rTF8ETvYW",
  "key1": "3CNcMvzVWosRsPhGuwKwssESo85RLDQJqHaRZRAm1VzoDB2TPkHdVxAAe9TRQ33kz8FiRaoRtQGodBhAManWDTUn",
  "key2": "BvU2uC1frNkXhssReV3h8nGYmJstXeEr7UQzV8pqC2HP2BoChN3gE5YARtQ4rJ98BcNuuKDaqBvZ68wymyVV4Yq",
  "key3": "4Y95LWpsvDRoFftYMayxySgAbEkHkxQPwfC3RXMmyxKQ2BfGdNmFWrWpcvpc3AVT5iZzdfQtrJE2xywGkjNpYFUH",
  "key4": "4pLGtdZPu1R2EBJ6HvqCXfB1EJT5ZPwtzVhQ2v4AWdDxbyxf2Rf6KEuj2mNWaDiWJYF9AqmdpUxeG7KSpW3RDYX2",
  "key5": "C4FTKe2vW7JhH88kyd9AX2C7wF2m64rWpTdRKGP8PS9CmDYPgMnjCDvs8P7qpVJ63VbEg3uTdtEEKieUPV34sGt",
  "key6": "3x4QPuwYtmKXse3kZHdFeTFhDpwrRTSsUPwVGsNoLSWd4h7Xe5rUE7tVUTxgAPqGd7ks8QfRMJ8Kw1DUEoBGc8k7",
  "key7": "4C6TmKa8rkETzCK6xi66162XUZknA245TfLb3uqZwiyTWdBuXQb7XoW61vU9hzWgiJ1sVXAMvUwqdamVzhdieGpc",
  "key8": "5qXFaRPHg3VZKp2zJc46fGWzMgND4eT32AzqmXisYFHLfP4mDqsDUJEbRKZxTZmZSZm4L2XMSs7qRNsydc7Bpube",
  "key9": "2NaVNAF4dK42VKJi8hm8fv9abrx1s6PD7NNsgWjeRz1a7kJ97UforxsbRhvmhkTkNtGoEp9NV7194JNUpCmpYWpJ",
  "key10": "2vdWXMZzNio3CKjAydq5btNQxsVWZtEK4kWZdzupnunCScEd8iZ9oYg69rPuhZGR8Zc2hT2YLv9ZUvNuiByPYwEU",
  "key11": "3K6XtKRqCSj6AHZ8ZX6PBAJ9RxabwKkWx1GmrX3XFLXKSuRnYzkuhAqyQhs5WbXZC3Cb6KEdK5mKeMkU1vun8yCw",
  "key12": "xyFiYtd6LM3JSwaHraXa7z5AJcaKmDroyH3suC47wWGGr13B5yBt8ofr71HPtwupJWDhsibHhWhQ7fCgHp1a3cG",
  "key13": "FX7FuXTuMgCRfEs2rJNSDNpevr4cf3TPVDgWM1pqXXMevXttJYiBHnzhcSbUjXbiEpD4CvAyVENPTncDv1ePHYH",
  "key14": "4f4pK8WL9LLSFUWUZbhhDFFYH4iKT7ajpUud73C9LJzTxk8vacUn93gNDd4MuGtk6MvkbB8CsXXC3bnUNWgGWAgh",
  "key15": "HcNebABu5sGEuevf44wCPZSjLdzAN6ci8yFa9xYWMW3h8up1tYLokBP1SWKLBT2m5tyrrwxKj7MEsw3HJRRwzpG",
  "key16": "37hvpbv5boDkBWiuEJfqKLJp4nrfkWVfYN1oaSL9w52R6P95xCc13UUXM9CQJsdLYjkBr9s7FcpA9btVaYGV2KKd",
  "key17": "3i6RkrTQ5w6iwhJDvqaN4xBPEWEwLuFeAeDPzX1aMF1LKJWF2SnTvhDhxaVEur4ELWheow5pYivSsEmxmUqwgABf",
  "key18": "2TSjefGfKGNHuVz8CVS8ZhcKSTPx9ip8K4tRAbQTMozDchc7qFSr76ssn5dhhihcsfH9DfHbSkSm95kx7rnhHjdR",
  "key19": "8YUWyS49T3TS2akPtFF8PZF85ajpXr9spSK7eVXJbSqX7TdC5ZBYjtVxs21tPTjU37wHQERho1cEa9Tmj8hV7Uo",
  "key20": "5frzen22cFWcuHJKpSV2QX9Ho8sFPhz36MCSyWJmuDpKE9Fv8QySZ3LaW5hjM1L6s1zHyfrd4GLJjWnw5TS5TDkW",
  "key21": "2PJGztYSBRvgtahpCQ3irPUg3WRQc7zHSeqFFKUc6VsbLjSKTkD5JuGq2h5Yq8KGbLThmb9znSM7KndU9R5EKY7Y",
  "key22": "kiNygJqXoWhKLknc6Ydqfv2EqeYXGT8vAS4YHh4P8x8MjkY3QpWWpTPptY9qFSoU3bYtT8GYeqfHfrT3YDGW8FY",
  "key23": "4wtqrKx7ifUdxaR8AUfN4vYHmigJ934FPg21pT3UANvbcCANjhn67FFZTqwoPERvH4SBZEBqdTxH1UkZ9PjDkPPd",
  "key24": "a5VNHzVGiaiiS3zVuRPsxMsg4phX6QaMR1g1rxY6dQRHiQNM5645tsw5HQRiV7v2LJddZVvjKyHS5HNuM2bAnaW",
  "key25": "4Vsi1Fu3QiKmAkuNLrAZw74WmDP7k4wAsZQwX9LZ5k3p2fF1k7kpgwPzudkFH5ny9YvHtLU7YtWZqHcpfzNQ1z5Q",
  "key26": "3mSGce88JVpQnbBJ2DZR5LN3x4a33CtCqKUeBuLcYbxvYFeV1JJXdo8athZj9d5nS811Lx6J34xwgXzqr49UUG1a",
  "key27": "3jHjrubUv6Dqk8kmExCrWL2CukbHcEuGfopm67sqya8JMEkgkcEo4yumXmaSf89NngYoKuQfw5K5kuw5sVkZJR4u",
  "key28": "3SPGaBxwubFP9gHkHu4FQuYs57kjXBXnFfCfBqCqNbzFbxLraBk8pSjyqhp7BvWHmqsvyf4Mzv4YVy9RoRRq8Knk",
  "key29": "2kBYMkQWiXR7La9SuMhhhJbApnFUTiBzPcxakETBYAGREJoyZ2kHdkNTZZCzDzP3ahPZbiLgy52yzNANb3seYuEp",
  "key30": "5DegiakA3vjw8zSUBLv5DeEb1XtSsp3UXdwFXTBQzgEMJnQtbx2kUq3S7U6wGCQarSsBMtJZ8yJ3rQnfrGzAMh8f",
  "key31": "qsoH5Nj2pK8xmgwnyR5688EedCFa13DJa2XXWX6maLzq2tYQ7fQDLpUHH2AXiPrqwM4qDKMVrb6fai9YkoLKAeH",
  "key32": "2SgzpmGyQvvSye4JD8nkiWmWSS6Ky2aQsoP5jxUn6DSySfpnWiCFSMj8JNYrh2rYPt3mDzQHfpGteQKcTUauSRYa",
  "key33": "4X3ZX43gXYvoxDNsgSZAzUZDAcKnVu7FqX3qikt8t2TE61JoFHUDdeehv3sFmk5xtEhLLF5ycbkpiz6igutY8tU9",
  "key34": "wUkReCc5S5PhDwbDHEqidxCnWqGKJ4AHomo2Sw7AEX4QLDgHbyqkvW9udYvpEc4gh5DtB6xBbTCBc4r4TXNrQKM",
  "key35": "5LrkHfaNtz2e9pftrHKbxu1cyxe7j5SHD7Jnxf4qtqZEbNeEJHBRXviuyzbzv2gmvCeGk6dzkMhkPDbekAoB6eDQ",
  "key36": "Dcgzhg8wGK4akXr69d4KueTV8fT8PDgER8SVwjeM67bgwsPyuLs2ZuEstMX3yUNdmX1E1TjdGRdyMbbuWKo9kNk",
  "key37": "LQedSX6XjyjC6TW1CaaMKQsR8D2GTpd4vkqj7ZtvyPAUcmspubUwSCXDrQtVZsBBmFXWNxSaLJnsWekvtLspQHf",
  "key38": "565uRsnPQqXy7ZLfEycovqH98Wi6EVJ3512WyRXTkSbeKqA9GuixP2DybpUHAsoqfzbvd3cnBFipCg8gfDdBrijc",
  "key39": "3zFcyJYXurdhh4BR2xxtsT8RncuzUqBUL1UZfu4v6BXsYj8WuzRXX8kiiUM2Qd4oWBiFpMZ1AEiajMMuc3wZgfZm",
  "key40": "2NqzAkTSUQTCPDkWmqy4eh4FmdJZZasVVTvpnuh4WN6h4u7ox2Xx1m9JZBsG5DkTdkHFMUFiAunMhYDSKrxbjMPG",
  "key41": "H8RGBFMBxo2sUG3XEsJogFKWFNqfPKoRvmN7oqVRptYPPgyGEJ8T7UmPiMjg2Sr4tycrBn79Ws7YbCyPKXdHd3W",
  "key42": "kCsTveDvt7n6zrTPhPADonQ8toLRhrKzrMQdJ9KJfGF1gsxDfBWLzryf4H9Ets6QbRPKg36HuEec2y99yyrLuGy",
  "key43": "2Aq43MykXWY8Ns3a1SwMSiFXi6qQbimPPJeruZkhF4ZRk5Q7kfacQ4ELDWu1XjtoD4rjWpL5y6fpczGEv1MjyzsN",
  "key44": "u563DeakSRnuJqeooUh9M7UHMSHQL1o1B1jtEzXbo6gpE2ZJExeHKjADnC8JKsnCGhCY5sjs9P9ZqKC1B3vykFx",
  "key45": "2FdBTUcwxhwVtyn52vXthRvA6BNbueAQQFpUXYuKA7gdhiqYRhLee8bduJnhLPHi37Eiscpfy3q3iQ4JzXJuxUw8",
  "key46": "4adPUKMxVKWrdPCd7EPdDigejfVMSQbxHUDnRmNB1ygtGCUh4VUNaUJVcLH6vbqX3hTu4PZof1Dp1eoN1JbHNA6a",
  "key47": "qDa7hWyMAuFwMqJXS66XJKjF4QktpWp2hNoZR98qjrWfJBmpfv8aSNaax4dW2QgeqcMVS6J1Zvj3iwtVdXSPcsM"
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
