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
    "VBetxPc9FoC7hHUGs7WDtGyrbwdrbfwnoVQ1oZTxKQjEsE5y45HkUuirY17zsdCfFtxRmh5xuPrmYJ7wyGmQeUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hPinQcnzfzhBMuRFDdMt8Xz7WodLjjzLoTzifSNixsfRoYLkdeZ6kk2ipxbZJriJuhF7TGVMbpPfJHZ5c4oaHWC",
  "key1": "4BrJaKgh31RJcyaJ1i2kAtaXiFtxo1KhxK6zL3q9F1xAQqtMgNCwYk8BHdnnayE1fUr14928r9XFTSsBw5snERaB",
  "key2": "Bn4cxryiXrGcNeupdXuhrtuNb5Mxp73DXUdc9Z2pFQMzoafqSDt2P1aVMgYQo7A9VfBVPAmy8EVeZa7LPshfvUo",
  "key3": "4MTmfttoT2Zw46ubeoiNU8Vc6SBTRcmhxAWqjPXYBoxvtBdTdFr7MvFYBWhEes4o2Jna5VWgBqtMyNovPRjP1ak6",
  "key4": "ByZ8akDQd8cHPUbL3BfQQwy2wqwU2Ui1zLpawe4CZF6RmGU5yVz14Etoh6kbWs2JBh3YZLX6UPXgse8UoG5S5vh",
  "key5": "5ipJ1H56uZ99WjF7NDDdnTyH88dcZuMzhX1xWDVvCJpnim7wWtW8sVUB8BMhmDFkFRy2GSrwZLtwQVz9m3HsB1FJ",
  "key6": "3RjJFGBWgnhYXo589JoiHEJer8agVrMCwJqXEGn2fawJxbXs3HAjx1MDhXQfv2191hxWuazFhXAcCkKJhAkmZoxV",
  "key7": "KikUTMMNday8FKtaigmj4HCF2zNs2NgqHhF4kuaPBaNgRoPeBYhGnabm6MTuEdmexhrVuwcpsZ9opUzY4jWZDR6",
  "key8": "4WH9avHR31QfW9kqvk5W9RrXdqK5EY7UNod78aeKj6qMfQGfCE1oMErXyiDJ8Gn9hWpLsWMpwFcVUdcMuhP37qs3",
  "key9": "4wabFMnBRkGnurQFtnL4Dq2ExKu7UfKvWz6KRzgSi4Q7FbJVnTXsydr2AFdDdYmL229YjKHA1N1QXx2EEnoFXjTx",
  "key10": "5TND3gBteffKjms47J5yroET1jgPVTME45D7FztiBgMns793uWgucBGbc665wnTkbQ6CPbLPJuagw6sz42uU9vE1",
  "key11": "iGyxFRGtS2n15KUR8nA5XLZVrBHyDKJk3wJVMmCvWcUyGpGzZCE1gn1gK2PjKvQQabfbRpEBbhvxjVZRVXf1Mjg",
  "key12": "3QMEtH6mPjusu8ZRx1xSykZYDV2LZkGvFe1WjaMhJCEQMiNnBd1fkXeTC56XAGd1PugiwZxDbXS5aE3boigdvYtb",
  "key13": "5f3NCheGVDzZTJ3RCG35Gj3o7LCGrNiFF7dv99hHbWZZndvdqm3ijBNfKvAkdJk5TvCjTSGjbAkyqQPQgPSBSKeS",
  "key14": "gXUL1SkP1ZbiiMcY7gAcKphwcH2n2AdHzz96yUAb7VYyY5uVov71ApMoDfZizB9MSzKoEuYySH6bhSuf8po56c3",
  "key15": "Mk76hrjcaDUb15oonHNUri7s1phXKSjMcNq56JQ7SwxpiiFnJhZttV4TiLuAwHTgFx5Z5cZRehDTmgziAU5hVtz",
  "key16": "4Hp2py3arGiPT96S9rtGsF8fe73gxT4xPs1ywsaR4VsvizcpA3nZT6z3Q524Hwdz45y5VZpgrW5UPcvK525mSqD9",
  "key17": "4ZWeLHvuWhfGaS6rHGZ6mvM8fMDYvWkNWKGwFkNdUF1vwvyjDauXN2LRdFFosZYTwWQeafSvY5dXcvztEwNKbMFs",
  "key18": "54tDPudYsRKrURAwyDV1soNSf92N9EgzVDqv1PRcuk7RfrQ548zGfH2R9xokZhGgnBt2Jjb1iWdTTZdQVHGvrcwq",
  "key19": "4HS8tXfYUj3sEQ9sdKZ9s599emuX7VF4hUqbRyXBkcf3d8pEUzSEcG7b8kcwdWUbpPSmQYHKHhc9kWFsAUtcqRNp",
  "key20": "5D2i5scYBykMjZeKxnCydCokRWkRzk3rD7XnSACBnt2E3Vr6v29DThPqAJ1AzDKGZsowGjpL5CBWQ3qty6KiE3JM",
  "key21": "yLSXab2NwkH761QfUzrcrtihTBNCToUU7FvcJkUSK3btysB3V4VVFPyctJEttR44Adyw3yd8qaEksP4UANxQy3S",
  "key22": "5kuxJrV4ZbvpejGD61ykmYCnfjh5e2oHxvXt44pvUiv12C1KtfNpXvF74EULFtoNEj9sEV7ZWbBvKze1Vg49EmoB",
  "key23": "2FRa4TzdwABGNRqkGTFR9z1Ket59nqBaExihVTPYehBgZud6YzBMqgQhmdtBtzesfMnTcKVqMMpn35ztpCQBMinb",
  "key24": "62Fu2cehFYSG9h7bAZHcwnwJwH9AT67ZVdkZ2jzq4pwNevPXjCo17fZC3JEQRKRuGuLLZsRJTDYak7PZUDaTxtGA",
  "key25": "5mZSaLk82dHUMBMybnQnYAtrAKfDKSZTeANoqNVN82NtGYLjWrZQL6ocRk88fkJzXNjq5QbVT5n7nqGNjB2dC875",
  "key26": "4iQTQ3BQFTjzJdZwtM7UYGLoVXgqz3qjJEfQiehDbuP5Y1sgaz7C3c43pGzatq9fHR5umZzGyfe1ZAwrph6kba3t",
  "key27": "ST9cvxqGZpsCPWhUzbgms3rWXXBJEyCYqZULHDUAPF17m55pTJuWW7msjfQwcYUbGT1EUDe25NubSrbFeHof8cz",
  "key28": "r5zAa6Q4ecPnBMUzWmzVpWkRndccUD3xZ1382dEooxAvGKio4mjrAbwoWpKVdt4oi3eQ8wVC1TtyYkXq8FzxFaq",
  "key29": "2iH3utFKaEsbL6Jaw4Ctyk6xJBta7i9xhUzn5kZG1bBa8b4Aj3dGGZDWym58KtBcWem7XciC7JkeCsY87HqXs9Tm",
  "key30": "52MYtyBfNrkMxWEG9f7xGk6v9BwGs3beFydgjVZnUqPgQJ1KPFSNvmTutxtfcVrT49m4ou5QcqThF6P1SoztLExJ",
  "key31": "4vzWhYSMpGtY5juJQJEaxMYjJevKjrjRuXgAwfju5tX1vVBQXr4CAwP2uoARaL4EHEX51p3wnQytTTDF2PXpEw1m",
  "key32": "S1RNZwKuvDbX86dWnXRANMjk3wJPgD5YEZhtZ3Rrw9zUwK93WbUsooNNGuk3GuMMyXeqrB6ryQj6S61ahGwTmFY",
  "key33": "eaJsL2T6MZpriTcVBspdUjB7Hukvcm3H6rWy58jUi4fNiyUQQS1ANkVSooE96arvg8L5VJiAUBd35mtp6pjZ7dA",
  "key34": "5DWZgrdmoFcue7ZLn8eahF8kHEo2d4zG9TYbkN4tcBEt77oFfJ6YPkUHsNV5qDkrB2Rp5nwCEyosWvY2tTn7TXyA"
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
