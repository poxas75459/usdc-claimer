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
    "2MXTHgVRmDnqpnnd6iKi1iENSfMe8eP5cmUqo6r4sJs3AiebeS7qxeJ88W7Ckq5ToW6aNhXM5iRyahRj2aAvvRxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mzmA2sg5Ew1qp5K1DcVhWv555yLLkPCx78P94b5eUYcTACUJZpNZJgBXhBiAdTwVQWpj1CFKjaqBNe9Z2aXFxg4",
  "key1": "33RYv9tGav3wG1gY8SBV1gjQMgfAR4LQM3YpPf9a3sJo2THh8rxaL6nnLcC8gwPhFkPEJdFBkQG65Khicax5zjDr",
  "key2": "66dWZ4Mjhd8QzuZUcGW79GXPJqnFbgiubV9mJLQ7jrrtB5jzhgofuFWK9PufP2uqotNJWDJ2WF75kPtUFLhaAdvg",
  "key3": "4hcw7mQHb88DhubsK4Mj938NSXBRRVx2Eqee7EsnLeuNjX7HEJDyqJwH3hrxAncDNEzTmwtbsm8Q5oE5EoCoBSRZ",
  "key4": "4r8d1rCVCFNpVNYGFsTwGoaUxjHgxeuwf6xSMMR8A3qqcYWeWQ9QSUKqj6vD12k33p8NigkdPWLztGgZySdE9j9f",
  "key5": "2XzREYLCvW4NzLrWFqgwkv2VpVhmTuNbs6iiMsfhEMmkx53ZJJxs8EVXA3zKvmQn1yy7MNpk7mZjyBgZ53AqBRkZ",
  "key6": "sHkMNjcPCsagcx8uBCMw9Ta6tf7TkECe3oCF32SJk7v5LmCMpE6X3kiMYnN9Q4aJaEshQGkvE7HzEbBvs1NP7xH",
  "key7": "2xSqnQfv9cGwbJBqHfi6qPrepbsoSpmWaV7opaNZDPyXK9Y8FXMeaGHFPcaJPmkB6J5nEdCVdxpZkxVh1XiRJTFY",
  "key8": "2w2rPeSqvrP2ZxTUab4XGAuAPA2y8hBDW46QTRGA9Ux7PbJvQPx8b1jxjFw5zDqDofqTTn6oGJTt6DtvjH6hXbRQ",
  "key9": "y3ebCkWdnVF8Sot1LQKxc4hkqEvE14V8tTg2diZJyCcJ8GuiRm1SDZdL38wqRHPFNdqow7ZuZdeZW9mi2RHdx7e",
  "key10": "5KXzTZd5fxG3vo3KL5NWrutDaAi2d9Tj39djizLwURmxtnLENNFkVEYRFHWn1Q6Sx45Jqg8nsEqLsfPgcBg15po5",
  "key11": "42q7Y8GmGcGhyVaWwmLZUuHnjmym49Up6wPM7cQPG2XvekbJ2EH9mMgCQc7S1CJ5ubMgoZkacqn3otsSHARbaXh7",
  "key12": "5pjU2NMsfNhHr1TDTpEm9e93FpVgSmKwKmK8q4GwqHuz8RFfi2Rxvo64Fboe5fqLBnewv89wahawe4BSngDsK6Pa",
  "key13": "VoBjb9DVpnNWADjV9ETDpT2M4ehcVN88zvBHYms2T3s4W74qvBs6hu3MDsUgf4fJBx2psUu1sj366UYoNayA2CU",
  "key14": "qCqYYRLwyybu5HaCNT2RQgRAbXF7s1zhq5MM38UiJUE9h9wh5ZAC6XjaKM8x4MDyzDJV1BhvTbN1jD8rVLxjjuT",
  "key15": "Hnbq5g7CyhqwyFEEsiqxj6PWsjuLun7JNN9ddtZKjBffZyoYEMmdSFwR2jtzCChTjP5zFrt5AFbQCtYFWDTRnfV",
  "key16": "5XDBN18F81f36p8zqw7madc989zrEK2QKnvx9KSdHgDMB5iDZwT5Bq2fdc1mQCQH6pW2iA5evzoEsFibz53ArFcB",
  "key17": "26chdcLScyMRTHNvkaWbrssMwKcLPoqQSpT1QoXQgxcqcf9r4GQvjB1jzmTS712fy26AcG2gvhjzQ99qgBRMUoxi",
  "key18": "4bvKvKAP3nS79KRbsfzf6jdavtdhfirygmDz6MB8S1izxEYMeHnYYUPBU3SiLedcKUDn3TJNzDts8eN6j6R4BBds",
  "key19": "42Li3VjxjuGbFGh3kDz54s5XnbJy6CVqU1AnCS71vTHogkLUyzQejfGzfNx21NeL1su6LaxFyHp1nAenUyjxxivS",
  "key20": "4LQXhdSC44VJioXGcytekZNAbNV2DANvW1Mkg7yM1aGdM5hcw75WAoM5WM78rWE2oA86TtD7WcAcqz4ZjhTXMbdK",
  "key21": "5Xa1AD1DjNeWNERMih1SYeLhQw1EoJtp3XVGQT6ivY8p8JaitMpd43VeV29mNPZsHiizjLxCqvPpZQ9sipjCZaiT",
  "key22": "2SUuBpw46QAWtr82TRr9HL48s2VVeoLjKPbGFfcJ38qYb92ASGxZHQ7XZgNkmJdhqs7qWaPNJrDKxRxmiJ7iMrva",
  "key23": "3N2yZw9jTDUdC2ryvTKpWst2noVsvN7RuuE4Z4DvojTGQb21YVXdK4Dt5uSCM4fFNpm5pxK88eCz6JwqDsvar7uh",
  "key24": "2jwLoQsvLo3fsUEuov45G2PpHJGDJTnuSjyCc9ijh6BRjNMgFBd1SHuT55jxcioxdJ9rdVkZUPAnHoe4XgyGowdd",
  "key25": "2tGtsrX32yKHLYj8upgrn1xXE4uanWtSto8Fkv8ehhvP4RSm1oKe2wga1TLY2QVApT44ZndEVbqo6hmLKmwmqh4R",
  "key26": "4kw8UrgtyPkAH4tS9NPqmbYyoYraVdCi4j51sJXjnxrMZv475C5dAd8DWzjmKBf7tZPLmjvNhiAiMDJdcu4TS4mY",
  "key27": "iLv9rj1b78iUeQjawJXXv2ArL1vU3cL6d6K5DbVowUQVNhAvgDRxV7ssxh5UUmYSk3vyC1E1uzLCzM68eUjTdef",
  "key28": "2mPyDi6wJ28V9gjY46q9iSQXrK6u1HBwdmqBiq1tM1HWiLV8SE76woHNFCJVcpEAkuFRCB7EVqx7tD1CySMvWZsC",
  "key29": "2Jef21BoLbagxkLHFC4uBKWy2w52VcW8MaUdvH9yfyHFCQ2EgPYthhaMmUrqATg6erGWe5UZD87wHbiKuYB3sJqG",
  "key30": "5FiGKviyc4YUSfifKwzxUQCUegyk88ZTYxKM5msi6qSPBw54fvEuh23DW64WRuJybQ8Wg1JExhYarm8FoFdkQiCJ",
  "key31": "33yziDqDA2PRyvbMo6zabpQhdbidVQMRxnPBMJGfvJLe7VmR5xrnNXqHvxM2WQYh5xD3qdCvVbiiFByTvYk7ZVCd",
  "key32": "62KFc223yZBnmv9PqAGK2JkNvrQkmXYC4bLsinyM5EMdqTrcM2Bogm65JPMxqqSte9VTBp4oYjPyv8Jht7Hqtyui",
  "key33": "3WrwWpPkyft9pFxiRVq4T2x9ZqNckAFpJd8b7zwN7xj1RLohJwEYeUcUQg3Vb7UAtjwBTYGh9S2fMEvNzh3ow73T",
  "key34": "4Bcm4ojZLQwPDvVxg9DxWdb5cieokbNQePdFy71oT6D1oqUk4kxfLgsAQUZJwfcA3NRL6iL3g4Pf6g89xgmtDWMy",
  "key35": "5HLpNGUguNY5RTbuGiVE29wZhX2fSLnEjRmdWyZ29eHXDiiuNLwmkqX4Mu5b7BjXSB1gGRv3zNAcf8FzRM1QBszE",
  "key36": "4EQ34uM1L6CGLttBWMXBLV5DNHB8swZQuPzUfgS6v4BKN83rowyhz8yEAhpoLkX294VaFdRwpKQKJ5CS2aqeVGr3",
  "key37": "3oYN9Nr9x7VbqpghRj1kL7AQZ4fsdBhtRCTRCn1V34NJigcJWNRQU2yAvu5Bnpuhj2JSj1Sq1y7rahRWzhpwCLd",
  "key38": "5xpvfo3LgeGoD3bQVjAh8XH5BXYqb88Jo5wAc9FqD4JXLRcL1F5LUuXqD3iMW9NPztr87z1t6XRRXQhDc97KC7xY",
  "key39": "5fT6UVgh9dKH323ceQPtsUtqSJJ1Em3tKeVvazVgci3VscZ2cvgiTJA2MYEiJKu7SSnEJqT976v6DTWrkYLXmHSi"
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
