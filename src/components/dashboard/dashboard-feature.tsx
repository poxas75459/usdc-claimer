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
    "jTcfAamFKJ9mFpG5URF633TzgECPCKMEJZapEvbTKpEHFQPCvEY2J3BENg3BrqidniNGzBYtJDovf3GctpYdn1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x8DqjRxifUqXaTStBnRSEfYaqxr1NMU5n7tWgsmJPGCiJG1E3mVARjynsYv3HuMWNEEN31xSYDNCeYSFqnF66Mb",
  "key1": "4QjYrf9qbE4mKSRr6uAqTDYAwFzegWfrYPGTWYgZJmnh8Q4Yiqp7ApjAJL6jNqpoifncbYykwoRZNjxKgyiRA8ND",
  "key2": "5usmXkQ3rQLLLckXAxsy3baHzXwY7hdy65su6MM2QwbRD7AD7cakvgmEbN634y5vj46PpsPmwSiryt2znKv8ZjjY",
  "key3": "3RSutQSPd12ACgcDerHi1MKdtqUHQGNKbHCzAEtrq9F6mk7YMcSReswW5ob1cggNbpem4fY1zR3Lrwn3W9cuhpvn",
  "key4": "5heotM9TftttWHVzbmpp2NCcyxgmXm16PiXbV48uesz4q6AmX3UQ6ae1hg5xwxCLPEAd5zWk5ZuzbHsH9Z7pp5Mb",
  "key5": "4ysYUoa4WotmUQ1DAUvs1b71XZruzncXQvnmPtH9Tj1RkFhRR8bsQyd72vkzP6skZE3ZdW4X9jPBQ7ZYmS5gsV4c",
  "key6": "3yBbiLjp8FZAFfEGp7paRN3QSvFEoePZWsGJPAogqLcSqYEgVVbW38FuwvMixq6keJMctF9zdT6NVuDjPNbwftY7",
  "key7": "3MMEaPauJYFxwPdHfx824FYYWdBws9gAz4o73zJLKdVhck61SkHBn8pjJaErr5DUtttXcV1bfbjH7zMqAnYgb4Zh",
  "key8": "45dJoLs3b5RjM9Z86wfvSyafyf1USMtL4BtVmdEv77jb7g7bk99TruQDQredTF2q8nfnNHQ3z9RdixC6fRxP3fsE",
  "key9": "2xQ88JqximDhQop85Nz8MkgB7KomiFRDb2y4VBrNx976eayyZPXX1id6jNMWwFSRkXSPwKJAzpQ3b2BJAZCq2pkr",
  "key10": "9zBwmoJcUY9k9W8QeCG79b4HeQoovmkWVzcwkNcKdHsm5REpZFjrde3YffoNgwrVLGWaQXjkFFrXXR51o2FFtN3",
  "key11": "YkKYmnsbFhXowZ5Vo4G84RBxd8VpMe5KtAiZZTkabWSXzbJ2KY6wo3Uz7BanaurTgW518uCMjKV6WdBvcqDnHM2",
  "key12": "6651ZqfKaSNfQLJh6taHxTmDMVvjgXeYHg8VB9wH99WkU3eoMKxyV9WpaxC57z6BsAdbeDX4YgbTRzRHA7iZRjLH",
  "key13": "4ZHUFAxYSxqXcpArGBz6ZFJ4WeJMSW212NCWFp4r22PVxLrVTnmc3pFzB3TsvcrwA1g8vYT2qzU4kiM74RgAhuQi",
  "key14": "45LqbNeNTvUPYNc4315GZEUYCqzHLbv2rQdn2C7hzCraSzZc8EqcQEuSpvMbG7vQnhp6dgev9GYxLesKqLjrePXB",
  "key15": "4F5m5pAUaLktu5ADtmdYgU3trR49EusD5xJEFT5iXQ7pEGV68gbyGauMa6LuLctG8TkJ4odt6LFXowy43Zh8SNTK",
  "key16": "yHSriENP6Jzd8J9qRX81iDQWxiwDEs4cXgHtR2NeC8EF233dpF7RyLTTJjDqW5njmuDXW2fs3WwZZBuiFj3xRLU",
  "key17": "VbFGFaogCPu5VYSnXyRcjMn3g8nRNzdDswX3K8kBF19qKuB7BxUiQyeo5Kd3duF2HJobjcLUtFn8TawwosG46V3",
  "key18": "2jzUmXB836B6M7PygUrC91iLPKpq28inFGC7wWDyPQ5Y5oaMDPTCKUBwpzUa3vZyA54XVewkK1PV8XhWQ9wbptaq",
  "key19": "2kupu6fVg6Cm53QZCDRy1dqFkUwv96xHzbRoDcnti8dXkBmweFsk8LLq24dEf7RMDvUEpgTT3DP6x2rtgcPDiSX2",
  "key20": "5KrxZJCB1N5DS3j2QrCsk6JfSfdhwiHfVbayF9NB5ar9NkZzzrZEneZ5BRnotbjZak3Ui2a4yUuHwETauhHpEXAE",
  "key21": "2ZQmQUadEmjWJ6PmxtQpvPJ5jgwVQ3224VCyUbsdqbnGjAaoJrUkNBNrgyy3TRx8g8L9Uyv7KidziSeaU1LYcak6",
  "key22": "ZKHmdtpr5ijoS8GtgZJkfgaHutZNsuqtRyRnSkkcSmkPyD7PyFcoTQc1aoZFPwG4j8naZcWVwQJZg1hsqoNirTm",
  "key23": "9e2VT1nEpNkPgBRprjwMHgVRE8Tsp9GarzhtLgvCf7yKdEeGvbiMCzDRZ6czSMcE83fEoMDRv28hUY4e614QoQ5",
  "key24": "24UVJjo3FusuRGT9CqFQPJZSLScKUE5ruFHZoqJ3SUYAiXQAmNCWkj9c6ieqcWCyrH9MKDALFS9L6jbUEJ51Fd3T",
  "key25": "5koruYgk5iZ1xHBQj9KoZhbhjQaTNZW6hrKSvrzP97dxKuUDX2CRfjso3kGPbc1uenbkp1SGtNRotxXZUJedBMaa",
  "key26": "5sirkFMVBUbKBk7A3rgnqNtsyWSZqjhwDSrfMdtrSRuGzsosKk3gimkqPZvHb8QADAxpftuFTft631PZkkLcqvNo",
  "key27": "4r2MwMGDxcnhzi6d4qcZjTnHXxS5R4AxWfN2u92hzoqNRKKEhgtiBwFwcQNPQg4HdqgAh4EzmfpkxpXMFiwYz2Cs",
  "key28": "hRJJv2C5ohd7DXgyuZhxNvjMYbtzDYvdeHCKaV6Az54pHjMBmdN1gccVv5h8Xas2FuFhUf6ZcP7ZQmYjH7TgVs5",
  "key29": "58ykx6d3pNhaCFoAzNUZzvrJYrb2H4xyXxHem37q5styupLRNv6xJ3QDLhds3oxkonwEHcEjgXcCmUfgyVGrzExP",
  "key30": "HqcqHC5FKsD8BMr2N5gT4eCo4Ti4oeduYsysgd5JwRLmU4Ef8UMKbHW9WrER3kQ1wCqAoXeUURW7LPMzirhucZN",
  "key31": "2ZUBAKbAegxs2FNZHuUDougENrfDz8THULWVXQoFWXPnH1etQapCcWMMCrEkyJNMuHS2z3kD5oThokxDojB3Hzk2",
  "key32": "4AaksHjph8KvDdnQygb8wC7NwswEqjVsom8BS7wsqQZTALbH7LAnRYsTcjjT8kznyLxMPvGxF2d2YPzvj2QDwBmS",
  "key33": "2nixiqdgoHYbSD7x5bMScawv1oLqVk2V1cm8iX6CH9q9KZQ2WoSL8h3qjZVPYA4NVXTLPQA45sUzkGhdySK2HkeW",
  "key34": "2JCmsDeJjNnxRPffd5zyY9Amp2oik7BGD1UzJaAv7rGrrRUyk4FgGVJXZtdnM4keZYHDoNqX1nNqi8d8xxtRkUTX",
  "key35": "33m6hr7fcD69F72hWRDNnumyDTjZsxTco7bR2jYPP5FJJsMr7khcMuT6Ryd1kb8UpqC48BLvw5gSTC45YUbLMBVm",
  "key36": "2RHEuwQViesDA8e1JdGHoL83WeBVN6Py77NSdkPoaoitvsjYDEGFA4wwkSyFz11azUBCbYffvTPnRJkvUfDbE83J",
  "key37": "4gwodMgaZg8GtqG3xPhhmrLkYeKEMAZarJ9FKrZtY8VjUepRaRwygV9cU455b88ySY2Yy4S25nrHk2VAuCKFvvAR",
  "key38": "3cToMb7j8SeveH81JaXJgJu9MoBPqMeGSwktZLYkPTzBacJDESK4kYtxisCPCp5sPW16oVKaRCP5qvXCtxxuKLyi"
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
