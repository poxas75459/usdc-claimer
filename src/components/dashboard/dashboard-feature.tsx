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
    "5m5gxephUpQgEH6SUPZhExk9Bse8torE8wUra9H6DLCYgoxHEV9c66t1GoT5pEP2qGkPYcanMtPnu4yUsDtE2zqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HZm72NzptmLdN4mLrqMs3CEowJqUcYtLkhu3WXSbDSvBfn4JGiWix1ogajYGd12n6s54XrHpYkLaoxpygd4XkWf",
  "key1": "3RzjtUWySNstUiEeVK4K2btYEE5hKoCztcDrTmKr7TXm1cb37SpsoZGHLXTqYqo5Rp7qVsUThHdz7JGUMTtBsep6",
  "key2": "32wN31aUPg1VToLjmbqhky5zpLFtoG872dem554ZgkzRqDDtzGkK3DjcJdZ7tcSMVg9CgrAWJnKiYcfhiHAR8wDy",
  "key3": "4ZRD7zznhj3RDarW2LJrc3QxFTsTwbJBpt7EJvxGPfW1NZY84s8CpMFkhPxiaXDw1kZkWWQVCnN4nMTC2aLTL814",
  "key4": "2X6JYWzm7LJyUuTNrPhKG7BEeRws7L1BkuhodsP9ZaZ5DEGjHFwyxCo4MvTKvGvNw1JCgmPiuc7KeQZTuJm73rVB",
  "key5": "5Moom7Tp6HqNfaUvuRgFPzxBKjTyb2SwSwZnzvVLsSmKMbDz5tkmQNWA9XeyffPxFEqj1m64s1gw7Xw4BZV3kjrZ",
  "key6": "2gyfEgqY9hoCPwLa2JYQRDqjQh7gAnR7jKqwT7Cedc9vVFfM1wRLppqBVSfPyoWQqmNjJZ1jgf9T8XayH8moXvht",
  "key7": "3ND5Ho7hZU4moeawMZ7riEqaC7Jm95ebwLTmo9UV6H16ZvN1tns9jXZmpS7Q8JnFkSSEjkX5jd1B5h3pMTgRjqAn",
  "key8": "3odeEBkyopMDFrMQmUKtZaxyapNZZXNVXr8mLqQgt9icfC5mH5MMKiMPL98pheRwsAJiypQ3ecMoHkAGbTcfzCu7",
  "key9": "2H1tBDpK2qMzzmKtcXMVB1kcDhta989Vwki7bFgucwoHByPhNue37RUXgLi5aLAeVGoWXnKpqALbsZS3LWjQzWhA",
  "key10": "33F6Kju19HhhtbgrfF5LEjvBs2sLb4vxmVSCmx9a9TEdqU1gQYDP8dSZgPKT87xJ3GXH9x1yVXdLxQEFW49QaAou",
  "key11": "QDnTQPSreEKwNkf2mtu3t3vzGLVuLYgUiJtcWxjNYyEQAxVnS6nbGZruJb3bpArE2USJzWH9eNV2dZNe7vRggJm",
  "key12": "5fYBbsseBPaJdebsmxPpCcLk86yETE2oHPyZXaeyV9sDPMNa9FdkV8w8iYVCzb1paKKSAfffBkuET35Gp8ixFxwu",
  "key13": "3bsJoqzFDxFWb8yiJVyRB1pcguBTi4Jcrf8RAmyJSg1MRFQiSyAoE1zFuwARPYp7fJEjMoeV7K9zSHUzYn83tiTa",
  "key14": "2AAdEq2hoeACw86zK8dbhXEWksTsC1KXDJHSyVT8FoYGBdLCeazwQCu7PrRFGhffpw5oyiiXJqTEBLiPiYDJFhg3",
  "key15": "46R6AVz7AvXCdN7yA4W9kEPLdvdt96nqZ6wWfZZa2oySCKM7gZeJmgxQnUxjdoUXBYv3ZSc2hfAXbiWaDHtAzQA2",
  "key16": "2zVJpBDVhdXMuTd7XkaudNdtLzhevESHLjgPqcXxgGAT1cxuEYbKDMaft9j35hY49XbWC9fAj1bUG4n9hnP9yEmY",
  "key17": "96ErBhTyimsPZ4C8TeZeiNDeoJTu6qhEr95XqS2Ev28RDgt3QBSnHz5kZqKJC1P4xb1BQo5PKjfgAg4ZARjuQZq",
  "key18": "2CWYDV39HMS7v2AZCxp5isoj4fjRg6prXB7HNXCeemxR9R6pFN3L7a9PgxFGWiJKuEZqNCStbFqZkBArXP1i72gD",
  "key19": "3xLgY2HwpugoYNKHDeswvSRF1WV8adfnkWPve2taUthQe4SwMbSe9YVga8CXazFayZhBen5twQB6wZqXKaunwPCt",
  "key20": "6SMj3gTpz5exHCdXjQuzcQTxM5pcbaM4idHhcW5nMJ9cG1tovDqbgEGE4f8q34mNLt8AEWaduAQKqjHs1LSYPct",
  "key21": "5gtc2zHBjAqeZvxrEos8ifgJQgSrz17onwrWpWXkVdH7H8wyBnAa8qxxS8j5tUReM8iGoATHTEkjXTecQkpiqDU3",
  "key22": "5xJTQaUbgdNYej1qtTC4P5Y57cGdbCnPovfgbZYFjrBBUvzBhXg8wwmAKE1QV4PY8PK1Xoq99VpuXec5oV1QASgh",
  "key23": "3o69NnbB6aMnm9tPKKcU4RUJ7TJGXahmyinspM4zdkmkh3kDKtzp1YapJZ4mg3T1CDQo7K3hx1Ns7YqEbEhqoJZJ",
  "key24": "3f6k5mXEWq7Ce9N8F3qQnP83YT96gQr6zJxSNzcE2gZTUdBSFd9cxvtD1deBfsED8iosfFnE8MFMNFjDyotvHLLj",
  "key25": "3QpNdbUY5YXciwcSkSkbFE8g8W2mvj3nwgQQXyEmKsEUegrvkh2Eqj2VmiFsNbwKyCbZG4DfDpSnL52pY8pjTH5Y",
  "key26": "NmbwTCPuyRRUcf4dSrZpDwcA2wLRXJv9huWiw8epgQAckEapYodFtguhw5URmTnG2e9HeSWnwTTFmi2TU49yzXt",
  "key27": "49U5wqbXRZdNNa6hMaGiUJbRTECKPpLM6iMsm9swNijLcjbF8vX5Seocme35cwstjGQRk7beLD3DjqjjGmN8Sh8N",
  "key28": "5nHsjVpW76YNmSbfDKq6DE8G8pu3Vquc2oBHbG57gfS8F7WwSFAq7LcPGQDgjPhMiRCsG8pHGqAH1ZGjiiSLvvUT",
  "key29": "3NVaQ4xRXuxz1DL9FxQ23TYWdhPtzJfoLH5YcmzJek1uoXN7pUm3CVksoBsPYYL9WVb9nt5so3hzCjimYkFC8CLP",
  "key30": "33hGqZdGm8ftkhb2x3uq5XJNbJsWiRhZoCYznoKSYA9QSJY33QfKojdHJw76AbpCgPGy63uuyN17uEj39zrLPMm1",
  "key31": "2LsQfVg1gkNpLnUpetavyWx7KUjyy8DD24cHhtrxsuPu2yj65U56JLoReSmFUxfTPmaXPTQukmvaW8vNmptSVp4h",
  "key32": "2qxdzH5HXpXY6a7H7pDN4vEf5uEpDKWbKMWYd683JHL5YgiuSxjKfhQbEhJTAMH34dM5QZ8c7oh78rjFZ6uFJyb4",
  "key33": "3CWkjatgfZtgHT8X7jnTS9iKcx4LdG3NRq4Ry2fkT6qradrh5BWp3kaBW1fFwyou22FPXgRZodBpbe3vuQY8TkB4",
  "key34": "K7F1p2idGosnAByHv8RmrbRRiK1p66kaREnKXhAw6pGiK7PnG2i7eUVrYCwZ9rEcQsVdqVoYGi9fSqack3FoZj5",
  "key35": "3FTmh4msDukBNZbWdguj9bx2jiR7hK65chs6E1jtXMHYDxSw8xyHKn3B9Lp7DkgaTrS8YLvYzfWnSQYE1LMeS5ZN",
  "key36": "4cDhLmH2PRbWEfXD3a1f4SChNoAJ9FfsyRgEcGKaiorYbnuHdhwNamNiMPYx5Tp34heL4992B7GSCSwfyJYgdMYb",
  "key37": "5ZhYPJVUzyrhjfF7x2vzEctYnF29xDyLQeK5w6zj6y3qXxrMHMszNmTLPhS1rustrVMfh9WEiuSwd4yhsYWzSBtz",
  "key38": "4oRCrgPY5CV7pFXQYxY7uiua9dYHYV4oaoFmTUhxE8k8oHhcewTducyUmZkX2BxeLhEBSCanrtqo74USWrJ79YJj",
  "key39": "3HdmHNNpnCZSP1Bakee6kuz7wfQiVdS6kdEp6Gdo5oqTCs5iVkMCYHPd6mRX5wLTWBegKRQagR427U7SDWmLEPAJ",
  "key40": "4qA5LN4X41MMS1j9noK5WTkwdKRS5NkLx38HXXkYraXXRH2r3V2khMj3r9iwDBgetL11UrFUKKCGjSSpXtLNrUH1",
  "key41": "5btqS2CynFmxbPSf42TWTPK8Ndm2YPhPJBjgNp6f45GbLX71sRqDX222UkDdQSdzC89WTqzNx2wMcu5Y2cJWYu2n",
  "key42": "2EZamP9VwoQ5JnWs1DymgcxeC83m798ouDQ4wduyHrB8K1AdccT2ZX7fb8964djyPGAhTWdopGjZpCMXWvvLAkK5",
  "key43": "4FGqPY6ZWBgqsC4hGJvM5x6vHaxaAdwR2V1wvbZiA5mQ68GFZCLNYoCQGznEH6UMyN9jiPPEfiDVA7LuDzLK1QmS",
  "key44": "3yExnchHgLjrkDtb4eexxn1J8iJqufxNNid7jpm7YyEd3id5pagnRyATVMSHUDzrasj5ba29dq7hzm3FtqY1DvjH"
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
