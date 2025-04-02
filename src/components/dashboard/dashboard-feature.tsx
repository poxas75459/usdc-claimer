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
    "3JP1FxzS9nDRCV8pbpHxpAPVkayRyJxaKG1vA8MTJWbGt6BxuTDCApgiQXqH62mqRsSH9JYJw5N8kvb7UWB33m4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ua3Qw2erA5e3pCo8EQ3hbdDvMoMnc7Z44txYtHAJkaSAXSX7i6HUNrkDebJo3eqxK1YniQCUj17SbDJzBbCQ9m9",
  "key1": "2HCpSn4j91mKaa4xxM4uhHXwM2sDPCAXpRZLsSJ9HzVwbttQrEZzaGPRVyJxZMR3EKsPHXGk16SYE2cuUUWHbhiA",
  "key2": "2SUP4hjaMZX8G3f3yRH7oqs5h3u4pmjmMDW5RTgk2dVP6gUhoBcJbbphaR9wQJUwQBL6ZpqGJqEMcg8mas4yX2Ae",
  "key3": "5MD2ir5tCemCHLKviiBDz6SanH12Ymyji15xBa9bSN5mE92ygPy6b4XXVKcwR8Z9m8DR9MAkA9fCSSYnai3jfrVG",
  "key4": "2h7UALaKVBv3NkPbjkF12TpPd8xFWkdf1vQKLFM38jvXc51WPnwfkjj2iGbrC1iBFf1p7ym29ftTDLwznp5D99ZE",
  "key5": "2XxkiAju97oBAqVkCHWapYNE8hkhpeGpWjMawDZ47WZnywitGUm9fyssuknnQYTo7BfP7CEGWtp3LBDYyBsXgLkp",
  "key6": "62xFcyfHg9Tn6GZsXEsSoHxWZsAhNypMkfbUpmpgnfE4eyt291R8W4CQY45nFQm85c5cwsjk5e93Qp9QZu4pr6u1",
  "key7": "2wB7UXZ4X7mFuN7PJMFaFHwAu8tJBmBhtMAZL5D74FvYQeF3Y49zo3XjqrsZABSabhtbVcFig5fhrZMFWGUaFbFc",
  "key8": "4F6rx44qGQjEsKWqLYksCZBbnPPG4EWFWxYoiQ95nAS6K5E6v2JqKyzqBTRWBVM3VQVf1x1gm8aBJGo6pH85ojyR",
  "key9": "LfdEyw5ML4WThQBUFnQNbQJGm8DNNJtMMrYibaV5z96GMzq9UKxf6Aa9q1TbguwoC2Wiq1HGsc7LEFRkPXDQu9a",
  "key10": "2NEgUtbfpkc4G8beDtb3kjGMY3gDBNxt3iPemGwBGAn2cTpPiwGFD49AJPGHWfN7JowvS1Z4jfdycFi8ZjxvX85o",
  "key11": "3yseBMVf3Wz3p8bTUtCcNHA6P2FX8fvYZXCP7nEfpe9hCJFHgSep6RanEjKhQB3G5eGtQTo1eakBxnFXoQSLbGJ8",
  "key12": "3oBX99WWsozGPGVpQKojNUr4tpe3aDz1MuABCD6237xHyvxmCxn1vCftjUvwQDRkRgv6f5k7p8SstpZNmZiz45nR",
  "key13": "4JWQYki7jg93WrNufw6LVb2MVnMFfF2dyjbr9ewVWFMYqcj4v2aKVH1i1XVBdiC48DhSUtwyr3dWcPPgDA8GwMxz",
  "key14": "eE7JMU3jd97Ety7QLRASNXAvWhvSU9dfAR85i8yjHB3NFoc6HVSRgJ5D3piStQh8qUFQ6HvZsf9M2nmtGLuUsjz",
  "key15": "5D3hnfLYwKUaFDAFtNdBc2GpFUqBRG9vGD9WvL9hu1ob8xU8xzsamH1crxPhzrLYMhpkj4d7RHrGvFgsTYLwEydH",
  "key16": "4hc4W3wtgDUjNYFovaaJpwNCLPJj5SJ4P9r9rt4XMrdgwmhJZKtErH9gqYhSjggudgQRpcp2sfiQHWV87JLkwV5z",
  "key17": "4NwAPqQCAUSnjETvoigfjn5g4km6EfrdjbDQ1oMdvpFBVvVBXofywrDddz9NPrnpp1fHrAFcNMndzDdGc422WXGB",
  "key18": "2LBGvrbZxCD2moDKzWJrdwG91kBkZ2vZBjXtjuHWabMrQxY9Z2qFB4yTdJm4wQyhnHWZBPuf3jdq55tgRAH5YXpA",
  "key19": "2ncyz7B2fxiUaZkXbBnPcxN7sHFoCdZy84EGdoRTjYyxByHJLTAFJMPTsy6AAHVjsppTYiQjjfrNC2kR5RyDnGW9",
  "key20": "22AnjqxZe7fznpReWE81zcExT5TsYepuihxrvYnaUSoCS8ZywqQX1ssxHw7nf4AkyeM41R1ucx5mLfF4NzMKaTqT",
  "key21": "3naD6CaNTwJ4ZHfemoYUfNK2KiBnmdozvvAU6EuFr37FxsyYkccZmRjdF3CJAmGFCXyo3h6rSgYAqKdm21L4Dyq4",
  "key22": "rjTn3iCSxGZzyzZcPKzQDonMUMWjdDFbSHgsf4RACYLsDHDwKAj5y6Ldw5Sp9FsywenvEWKVD42cSnzyFYaQttn",
  "key23": "4vsQV5n17PB8XCMTMFpGPB6TdTYtLt7xa176CR2wxzufGPspZMSsgWCx1Vc9k7CEA1bzweApzt9tKe14d1mwhTx8",
  "key24": "3k2UbUX2bTA7dzmmKd4tsa7R2xVwnVEV4phLbUHdkcbcmCC1PuVwpWWorrhbyJS3MuogdyLpccVKoTMA3Lruy5TU",
  "key25": "4S89hd6a93dRx3e3WBtezAR3a98w8eXxJ8MCtoy6yXb4KQ45v3KwHssvZoNPbfVizGqc6n8q4M7DBXKARVDg7yXw",
  "key26": "gjC7c8BxGmLiQvTbrrnXBpMRoD6pUyxT1f7qJqPTnLUdvzPS1gyK11R3mPDJLj3gvSgi7kiu7u8rNYZNJKMAQWE",
  "key27": "61gZYiSrU3SX8orW1dPYSMGP2x8d7xrB8UbdFXzyjbikZNnVBfuo7BTKcYTE67BG65SB9XmDat1T3XGS8uRCMnQv",
  "key28": "5H7Lanshe5wB7HCUWLxheqVcMntVwdfKMZ57czeMAkRC1n9J49eJ4F4cbEoPpj9MkHLa71RPGn56cLnpiJw2SMa6",
  "key29": "5wB5NtJ1G6nQTAVerzAQf1hmGDrkUmW5yFRaa2XQS5xg1pyAkeuVMBT4JSpHtQW2GDLkpvUgHCnbJ4isgoznrXPP",
  "key30": "55Rc1BztLRuC3dMGpYNnZb4tSsTWz9PXrFFoeqAHpNpugumhsnfg56ND6bKp4yDnjAnQfPKkBbvEWTSVoDcRdk2D",
  "key31": "4CyTWDgsL2MBgrMqP5ZNEh21Nb2t59cb9wnVFUdZcuii1aGSgtV4m16TCLg5A1Zh9aXv4WvyPJpQyP64pxNqjuWp",
  "key32": "4hukEGhA44JLqtG97nSS9cs1wkxnEvL6bTdGtpMDGyqQERb3N7Y7H61hEBnoUWVwcTQrJ8o8aWRBwwN37cV5UAtJ",
  "key33": "5EKv9ckwrv56yNuBcMgjkME4itxpg4u1qrV1wZWyJHegCGSFpuvi5tZRFvJs2KgDoqvSXXGuCy3knUF3Ur9uWn8n",
  "key34": "2pgt3a3UsVY4kGW3NnJYbh3vMmxhZyW6EKRD4inxx85xXj4xAUbrJctsMFBRUgmEHBhXkHcsAtVo56D1zjCXH7oD",
  "key35": "3WHSQtsSa7xbDcSSkfTN6JTjw4UqLCC3XQyf3nLEVdXWXBPjuKr76iL9z9eX7HjPmCh7SxnLFjzEQz6KG5DFLDh4",
  "key36": "3wnAGGVkWUC7UR24ZBx5qMAkPT1pER5DbLWWsvGH9UAyiGtT4TBJGCEF5vVdznFvR3TaxsuGr6xLFK9q47iZGFH1",
  "key37": "5uPDh87G2qJ5KoP9rQvTrVJwGTLwEBJgHDRCHnMmX2w3pNiBHcG9xGwQeSjeUgjpZNG59mEdEGYTHqUeXMkLpbQu",
  "key38": "3yA2LCin8BNgvG3XJWhjFkthyaxo3zjuEgVyGkSLa1ta2jrkCcAbCFXrQktpzj4SjTztok132Zg9gVr5bgarYgDP",
  "key39": "5yLZjbkHZNTzwi9Eh9q2MGSEyRBP746ur4xh2Q9XRKjnUU6QmrGXB6eYcRD9wBo9Z8SW2BuP3P3778d1T9PmofBP"
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
