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
    "4P7RCRCkZ55YGassbWKFWpGsfVvwwkkxDAHHjf5eijci5ng98GDimBKZzuLskcGo1tVQrLbr3hxPw4UKJD5GYPtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ephW36VPkYt346Y3TdtKpD19hzaJK5KnsCQ7td5qt2oxQwE8hMxMtFyzno5PbmNpUvE1mKtG5zfabhw4wamsCzb",
  "key1": "3KKbFNE4MeyCm2mz4HKZZoEvmE5oG5pk2P6XCUrt8e93opJG91tP8R2asXccUoSLQqTD2zswB7YqNDSpm9YB8WsK",
  "key2": "3rUyQG6mTiQowaDkkGbZAeteucLKxk7y5dgMQzGS2Ahu1JJsRdLFYHxhRs7KNzTz4mHdPq1JeKiCPRVYGkPiRgDm",
  "key3": "5UrSoKAsKn4bPwtSLjjeRrUxu588DTRqvqx3xb1RjfZ5pMZefq3tgsUdRWre8Pk8LukoCLVfR6ZwPQiqXCHSXBi6",
  "key4": "oU8ndiP1uSmEKQtHi9r56KA4ZjCWb3P2oBvhQTDrStNLuabsr4rd2dEmsMegLdLWsdBT1TdNBiqXHnXN3qM8Yow",
  "key5": "2TEC9iA9obCpha2qf4ruBb4Eq2KF8RPNWmH2FB59TfDVWXurqacEsHDBdPnXc3WjnJzGcZxVaegW5fJrfQZroVdx",
  "key6": "5S1fSKntWFj96MdHkwaBGTLkTzMtow7qr8WmYwJ7Amms3kUw7P3sfyjaxZMkwmMsFfRv66F8YrRiDYFMDUpcMXAK",
  "key7": "G9mEaRX9PkvAi38typT7bAsjXPqmBdWBdenhd4D3Nkf6qBf7ccqQuSpcCX4PMUmAvFqgK2bkRjkgzMz5S2nNfyU",
  "key8": "67PMD7My8sUSEPjL1HbBzt9Dz6wDp3cc7PSArcLkyX91uZ7PgzKo2ob8EoeNhCranT6Kzk9Fbhvgn53XuMeHm7qW",
  "key9": "4hG7MutFLNcze8X7J9h7dyJ6TQV2wP4rfWNrmz3C9ScK24bP51HtM5sR12XBTg7txEJ74myAQ1ATFzC7VRzJMfk5",
  "key10": "22Uxmk4vYb3HKkXLsRtYFumGQZHr5nLTEMXp1b1F6MRecyktxPovidqPeKqtExU5hmdH6oaWmkYZSDkkBikfmH2m",
  "key11": "2hvd6Rtwc1DxCa5qW2h72DDjojAFchQLRNU7qSdXcsRk6uLpmvKDbqs76wGcUPxAhzUq2QmQ4d5TZZF1RMsNiFW5",
  "key12": "2MQMd2iarTWevVrHnUHcvWHeECyGXY4jERDMk7Rch9qTRzrJEg1EinnbtSUsURshsnyMohqDd9fUpQMCdACTujEu",
  "key13": "4QFg9zJwEdkkVTSDEThApoKFon3NzinmUzcHaU12sAN9EdsXYvnurw2SiToGG1X3TMthEaJCi6jDcNr8ZPxW22Gn",
  "key14": "4hmfnWcrXkXYnP2iTgBM1Z89gTrXww7ZRq3KcCEAcpeuza6MSLU4JEqPZ1VuLhNaJ1jLFNt8QSGPfsHLoW1Rzou9",
  "key15": "4dBSuhn7zMtNTijCtwxEdpFqToBCuUGN4yCYqV687f98PnnrsvDq9Ku74qVd19ppDPiEK8s1XPWq5bit6GqnGyns",
  "key16": "aR2cd3ABA2xrqnWCDMZaDrnGUABtbk4N9cQtcmjWM98dd88HXNDgH8tLh3M5maFPkR8NLM6pFLce7QBb3crxREz",
  "key17": "4ae1VzQ5pDcHoQzKee3QwmCb7vpJt67Gx2oY6U4c7V2TusBM3gjaDSKwJmGYHWTyP6wsZ6tHNguvSjebJSuxnGJE",
  "key18": "WUnvM9nGkNYQXRDB8UNZySrdQoPyirFUzi7dtUXznDeoCHEueo5ZsfFq7KRDasvZGQHPTJGcoHgVTiFehmAfQ17",
  "key19": "h3gcFCY3KsRuGSabvfZuxYCHKBrdS4DJSApYLfpfM6agBvVKZHpqpXLLbro92FvKhw8AjyMLPdDwBdMotmxBF8a",
  "key20": "2RSr9yo5EwjwucgzQqgCT8y2TTopQ7E6vVkYG8pSBoWW8XRr8uXg2EKJtywBqA4vdEbp1gMw1vtuPCYxY26Nk34U",
  "key21": "4iicx9ihDxRVedGr72a6BN9ksAizrZVYofHFLFKi1wvcm7CrCRYmecQYEEg6Ephosbz6TJNY1SSE6ER13d5TEPT6",
  "key22": "48LdQtqQ4Gz9E46cUSMqt4rFX92uZtd8HfNzcpHncgQHHv8e1hTMS5bwBpE1bvk33BjDJDJGWgtUro3uNDc1kBmD",
  "key23": "5TpZUScqXUCgCVoYuVfkGe5CbiyNtNeRMg51rxrYZMzo8DjWMAahXsPCV1jNH3VmszVU9DDs6fvXEzzeMPX7URfD",
  "key24": "4tquVFt7SN6qsAK3nTeuUuCVqhky4yTMz6y74eLazTkBerR9EJTWZH59jBAs4J61WX52hZUPNU8A89otdQrJ2a3s",
  "key25": "2unwAgAY6NeJ7kca83HYneFJqhTgJz5p6VAMNKGGR9n7bMW1zDuoAL7uF4vmGYD7AwKACEeyGTHc6JzqnvW8FLKR",
  "key26": "3TmKq1VtrGcXrpL8qmU3DtRyYC5zbrCgVTRtHy4vJbvEFQNwJEjZAbytSepxepCGrz8jMVuTUAYhoK1qzepmjLhW",
  "key27": "2bEqSB64iUtj2wQkiF2D5SWvf7ZVukVfSxgrWw8EHKHDMx85nsYD8gG3vU9QHiq5HMbQDCFamXMr4HAGFQ7N6C5Q",
  "key28": "oRjMWLusYDzg2RuiXfPiYobEyMHox24Ub4PhHejERHceUV8t6Ft24xRCVqfo83TJP3ZSwkiGSUGNWeSrHosTrgJ",
  "key29": "5GjFsYc9KrA9ndCpmzr1CayoDnAdm2X5LJzttUJuHXVRLwLBbW8aNMALS9WuJBy1dSQX6XjF9hLJgEEdJ3d5ZEKp",
  "key30": "5gDhg8CWcfP2HMXj2NdMPB8KRjhpn8Ap4pp6YUYhBbZUHxjGMCmeTZHJHs89rqndjXgQHdjWjV4VxQsMvHvmRPnx",
  "key31": "3UXdaJAeH6oHRNe4LdLuShZT1G7WWPJCQfsKafLQSeshh5izePS2SdkQRZjZuoYNHsjm3VdfsMnJEB6MWDRG1dnY",
  "key32": "5PtSFMbKMuLR1VEcBJc7qeD9i9aPFqgLJadKM14SKy1j78crLJ2gShE3UKR1wRHJ7f2XuVga6nCUuT8G1wFPU21G",
  "key33": "4Mn7WXw5JKezqYtAcZALc2qeMbWjLKPGV2JpFn6uu5AnFpHw6jvXrUfT9MgQ9wS3VeTcAFXxjhXgwAg6XT3PkAUp",
  "key34": "3yhAHsnCQvkKEPZn4GNbh7tRdKUF3QcQv27ePSGcAH8BWZWcBo5thsH4iCa2zYcbTqUsLZjEGUoW3YY6PwoFo3V",
  "key35": "3otHcgqkPuvYHSu1H4mWahTXK1uhQYVZzZT5CryQCbFk4XBd3c2jhyxhoSSHoKfa9kGCfNGHK8kS3qF5Th2JsJWe",
  "key36": "3pvTLZKgb6nLBn64pqtMC1LZXs6TaWMQNXZxoTyRJhyWMvr8KUnJnHMA51Qq51fPm93DJaug56x7J2YYyVHVYJhv",
  "key37": "47np4MSiZqHZYDtBVBFyuvNaD6TiaXKhW3qaEKuGm4gqWKL56cHvcGv4ByDDqNhZm9L2bfmwaVQPMmMJk43ETeYR",
  "key38": "9RcWQZJomtbnpedJpbDjXbiUhVtQE2HBfcfryPSWD8UJDoy1rvE22xquucjUwH8FW65kAwjH77FrQJB65QfmW6V",
  "key39": "49h37hP4TADd4KoDzT5jXxkzZXBZkQzu8aaHBmwYMLsN6uhaRczTSVforP9ZqiALTFpRu8BYF9NHVdd4FTtqVD3D",
  "key40": "3BMtFLTgmdwwZFVvw7VRHgjcj9UYzyhnA6ayCyqK193zcNNUaZMzyfSngM5inFpf1pjMmvNSdbH6o9NyJNT9FVgG",
  "key41": "4nkPXuRK5CTJHXbv6rmpftAkmxmBwYBZpduErFgQ3xCNbV7amrg6DbNJvkbrbAY9zavuTXHwKnvK3JBs1hoNGd37",
  "key42": "2CiyXKJMBA7KFL8WoGUUbcwj544rxe6kKK79YvAiNoxTMuiy9jDXg3Fi3GGJtuddn93sSWUyUWn7pDpDiTDGbjAw",
  "key43": "5Rtoipo563e9wxYFkZ6HiAVp5JRrDBH1eueGgFU3S9tYxMmUqVKvjvDEPQxu7FkLGLvMjWVzXiKQaemeD9jRmmNq",
  "key44": "Sfm37JWXVPZJ8PQQhRhkPqhorSRz8dnqzAptsjfEUwhNWSR7X4h8fzoMMnZMyHrLwd6DQrCrmCZTeWkJBZYiTfm",
  "key45": "5UxtrMVf4boEt3sTQNePjA2DgHegsS8tevMnyk7Pu34uCkzuMbMSivzfsBG6Ap8tkMSVuCJ5CxEwp19p9FQUFHuT",
  "key46": "2RwCW5Pcd48u4HpzgU16fZfAmoLmQPzHTGzMj6Qk1rZP9ARnfLLfVNzvNKAxMHzBsyV7NpRCQ1Q6YrNRagrsrxdi",
  "key47": "ozzrwpj188dBEUz6CseCpamm7s2NrUzg8yUxaJCoUssAfjg74rkCNmbfLGN5eybkt7LRDrJE2kpYxnjaPkwqmmj",
  "key48": "4Ej675WtRewJN5ieAMmAUMaryRE3xK7Wqzq97EiMZ8F428CJcPCAXA6AKQ87WNAtbq6bYoKDtyxC2keQzAfrKknu"
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
