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
    "3yxGviLXrhgMfo2E69qfQgKyHxXzfa86ZE1yP9a7ucwuD2thNjFttty56g4h4adNDbxwd7XPUw5azFhAxZgJuk65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SzkvhNjJYgXMHJxHzSKg3AehXWfw5QZoNs5frSEcY9exaMLMa7NrfQFb1eF6zPZ3f6Eq57Yefdp4ojwGQcmXCeu",
  "key1": "4KgXZrLub6EZKTSbHqJEM6gR74z63poUexdtNKDc3wTeH6mexXumwkrmvbe3rJnp7QEDdKF6EXseeQJcjZgHh4Qi",
  "key2": "61bv862m5GQvFqirCgXPNLf5SFHsR6cAgRD6rKzKNPxtr7AX5XBcYcXwqxWFRCbo25Wu4xBVb3DmgNgNJPuGxAy1",
  "key3": "4EDbBJ9vV9Q4Dcqx6RH3sZZB3UaxbCZCFFgk9VYsW46TQU4sv7juejN5tC2ZDxcSBBsdery4EYmQbvwFJSFwy7mi",
  "key4": "5pXTSTkb5aC2ajL4uYEpDYNzP7EP2Sg3oAsPkyJR7Y3LfSECSnabmPKU4RXjac9wpntnyKuoiFQg57U5zKCkWEWh",
  "key5": "5zN4zdD5F6LLeQp5TfjcAugaJFk2xC8y2NMUAFg9b6Xut7devBWgAjWNjsB2W4aVsJU1zyaxeCCb1PqFXNKUDp8Y",
  "key6": "4MZ2LXjDpzWTyH6TitUu5dMnKeGUNCxKofPfJEZuB3AzNATx6FGGnmPDLJQPuMQioNgrt6jWtrc12hEiC6TgLasR",
  "key7": "EcSXQsFoxEKusFHT8JawLZVaeti8oQ4TDKEEuauD6XC6WkMLK1pPbC1njRUzzLdbBaGt68vUCYw21C1Uy6rM1BR",
  "key8": "59Pt7rhfk5mEV7YUmYeuXb1mZuDnWx1zd7ELooFac5aob2s1qMjT1nzEPufusSYmBp52Wa5FVH4PxaKRLbNbrRHk",
  "key9": "cMBgc25ExYE54VzmASJKzqFAgHaMjJVD3gF3jetwsa12x3YwtnUXdushrm6cUa322kAFA1vpMLSDUaz9StKyb1J",
  "key10": "ZsdfEVc9ZwK24EKH7ETiJwVeqPssBBwAvh2mEG7UbrJ62yinsu2qjeBn52CmZgijPe8Em5qQkp6DDcRVvaMBjCG",
  "key11": "2w7G43YoPRntAF6P2ZMGQLARgg54oF52FBRsiS6hWFQXHoZQbxcCNThe6nQ86Cnb9ZfgqDdAAfxAUYWrLS4AVQDQ",
  "key12": "5MAC7Dw4nnaNU87rbQrhh3YaPz487ChJRSS4doigztesveNUDWv4PTokNDtJYx7gsyGPACTdYWX9my9g3ce8iSq9",
  "key13": "8qoHyQHjFvPiU4yUq6foMTYgwRQp7eBhepHPHpFBC5Nj6utBsdr8JcAr6LT5AZ8knkDz8cymo9Lz2exbpCTwaML",
  "key14": "2Z5Louf6LEPnozKSFF95hcSCZFXjshtjBT2SWrcCGaCoFJHTMQgFBWzmLeWSPzbe3npH6tSQuUezk2irj1xUNgPB",
  "key15": "DkQxhxeJ9jRjM7HBKDucLKbnwp97JznMYsSxNtfY5urBAcJ9o4oPesyDJecNAJES4x1pnb4yb6YpZqRi5Lw3pCL",
  "key16": "5z2Q5aEfjh2xWUcXRriMqY2UWXdNDJweziLqkvauX2x1PzzqhDpM1vnLhsMfKr4iwxzyyQMUuCK1gNEYrC8uRGGB",
  "key17": "4oYnyCZSvET7aqB9FYfDcayfDdtiZ9UKHpBKazt679DWUhmEeDbHb2Kv29afFXX4STdLLXuwp2fssQDYJSuUnT5D",
  "key18": "4CXtvZZxu5a4wH36bVejoEzxvbkZ7zgZ7wTvRNxHXFZSK9AH8Msg4DMqXf2G2u49kGCudthN5pp2CtSk3dpnVYbL",
  "key19": "3XtP58CTSr1UkcBbVAWNVcaocGuPhbePHwNsweV1YuJiNhrxwJdTAj6KeuZ3btRvSuDTAov5YQpr2hxD44xU8rjG",
  "key20": "4bFDuztbpmSx7YGE8XNN7EDdtzfbNgMgfC4SQyqzd3VzjjcKQLYpEa81qH7JHz99Bo76Pbk9ALE4WMx3XMHZUCm5",
  "key21": "st24Njs6uUrUoeVXS8eqksB6cTkr3hSktpYM9Hy27ZRtAobXhgNgenpaD2DB5Y6L3boVt8vLWsRMX461Ds9RxFg",
  "key22": "hP6aK4X6ND7swTGuDaDL7t76MU7UZ9vz93RJHvpAg1u6msTeQZrgQ7gh2rmj7gXtz6CnNB2JybT6EFLwJLCVV6Q",
  "key23": "2sZT7Da7qzv1zmkKy89pMr8N4jnkV3X55hWF6imYViP1g8446QrNDWhEYsmDG3rD1R4dZRhi8MwRJiC4iHMpJCYF",
  "key24": "4W6SaWfGofzjN7RDUgHE1iShtF1BhMkrgqWz8hVUj9WvdJ4sNzEzUiFnFKu1fde4QUrDEhbDX8kBToAgeyCKNo4V",
  "key25": "3sKpBEs6CUR3w6NgAk1zCybkYEGU3kcYUwaY4nFXh2TE4Hkb3h3B7bsrE7qtsJJXYzz3wkKn6gMYpdA2sWEqLj8U",
  "key26": "2quuyRJtDyKXGocMA9ivqtv7R7hsKyZvwTLnCPbGeL8a5vKnkVHWU213TEtGEATzVzy4U9mrqi7oVnG3JdEFWwcq",
  "key27": "fU3RcdCCoZwJqkY2jJdYer93eXTn3TktguesE9VecTcFe6grCUudND2NVaiFpJyBsuuYr2HaDvnzSw19sm1VStm",
  "key28": "3i9AbARkD27t5Fn7Xtf1jaSw2zXUVJE99JM5y65GFhAKN19nf3mQfqz4jfjWjL5GcGjWVLBAcnydXdfjoJx4egDx",
  "key29": "4ikmuxj9TXZjzcG2ufPzCywRJDkU6XHEZyCb6UnQWobyybMPiFtQTVhWT4JZPfDZFzbhAFXtu4C5eJuZBP3yij4K",
  "key30": "3odnNe7x7bGhDgZ5SzBeCDK5xSyxwgDAKff6knadHpALADnhu92we92ZimY6uEdYBgaz9ebb5GbDC7AfmVWFCeEe",
  "key31": "5Gwh47uXADgfq2mnWU3CtQczTCegzbCe44MUYMWQddkQkT91CECmYAJqRPZCwHSTh4pu7WrMSv1g9BcrKNko8Dr",
  "key32": "2B2nXvQVXbWNYCBrtPkwUuxToeAKVw4gkTy7Y5nTwh2QwBHYaooquCfZKMMuBjeCdFQ7NUZPdq6ZPtWggs971r4q",
  "key33": "4AZfLaH2e2TDNQyVbSKQJ2SBWJhfPKe39U2P5wyrMwAS5J1WUHPkE9avxSBmSfit9D14F1scgGgx3G9GiBDagBap",
  "key34": "4b2isNqaAguLVKmuUJshvCZYsVms4oW3RuXwyWoP21HXWxRV98ETQTq82BurSRZsEteRjeWhNibFyXHwnhe2Bver",
  "key35": "4e4vJbFqdGMKRVchHzQkVwEZNhxVBXLqMFVLMWpRBYCXvNDyan1vEvPEH5Sxhkus9SFFLSgzp7M6fXNgaEpdoMvy",
  "key36": "3qkMNSBb2yN9PRsa2mNtvbYxpf2C8Dtrsnk8gS341p6DWu56Cb7ZUK44xk77QcWwExJ1Sty3tdgMynE2i8acs5H2",
  "key37": "2q8TJHuS32AKiVCLLbK73EyFjWx4wNxG68bkuoUd9HrieM3paDEqN47cd2fu4wVuWYwWc7rsejwPfgnY7RE7tFet",
  "key38": "3vGuiJqmBcnL2tx7TNRVLQyDg46rch4XGjq1NZejRnNQsvXnSzhxJ2aKMuntvSH5j9MJmaLDPwSN1A3Atv4S74FE",
  "key39": "uWSqw1yu3HoUv8MLCTVpr38mkeXfyW4c9aYhnQ6JB4TuV6TLz8j2V6xP9qihE3yYE9qVcMfpmASurBEUrrfcGid",
  "key40": "2YFrZG8CQAb24HxJSfq431jQRjpUREBBAzb8QvF5AGdVRfN749bika42k9DHVt8rSV97E2FmMfJZ2E5wkdJeAZEb",
  "key41": "2WdcRQHAyzXgjBG1aStPA72y7wY67tediwxJqu3URJekZzj1ovZp8DWfGz1Rkxp3k39yESQ68a6uh2AUmGoyRBKL",
  "key42": "4XnECm2L114mmvJpwdqm1wwiKHinV77jR6gjNWESsNVJkEnWgtKdrEFexhccABabmuu6szDR36Q4qsWjsdDzbDmi",
  "key43": "3cQDumW8VZigA6TaNUsVk6ipQcAt5kJMYUqFCX5W5xcSuecybF9qiqmatHbCRujtH46oUBPyoDnGrfeEXxHqeLLQ"
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
