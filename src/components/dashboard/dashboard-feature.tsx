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
    "RXuykuq77Z8jh13dhS3cWBdv3GDFy4S2SCJi9QHLEC2i8A8bDJMwqRJdT6daj9bTrrnCV6BrrbEhRjdD6bN7XKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t5RFGYQBQqn8JtxREp4fxpXeGjZ1c79vWQHvuB814hd5ZmUDfGYW4dMVZEHF9NYrUnhFxHs8Q1Ei9k4KeWBtosN",
  "key1": "4AkbwwdiqCGVqDLgVd3ygkL2n5VXfReWxQguaKZaeEPeCin8baFFzwgUYCn1og3UomZEbnMoX8drKGmM2redbVDh",
  "key2": "2S7Xzb9WqcdRJ4D2nHPB8YW7v9YbvnDGyjjFbCUHCcKbVncT3EBcf6vo2dYa5dAakWH1szr8PPo6BaufTgQvPqkS",
  "key3": "4ZqBAWu1Mn5EemxmjDuR9zgZZw7CJB7vJW7mhZgXXw6MMukzVNNGxziHXChjwgWLAsSCnM83HY3M5ZYnz8U6bCX7",
  "key4": "45MYpk7t8p2k1j8sCUNST15zc6XszZfpY3BtFi7zRtY2JDEtBNf6GYEpv1ucAix95Fr9GredG8mnHLR6MCbMkBbo",
  "key5": "4wYJxy82KgTiyqQii7gC12YmvCiYFWL2aniJZEyBPUdgqLpn49zLkamXSgN9WGgNq7eJJLhC22rGEa64eHhoQbBg",
  "key6": "q8UKyip231bZKuHsxUfpXFcLBXHnTzP2LSVBCzRPhRmTyEExC7uNJPsMycmY55Fkn9Ut8ouBBrTPnB3nru6wwX5",
  "key7": "2xJTex9pmRpCoA4W2JJ3WCnXakCP65aQqMoZho31Hye6CxnGMGB5uePM19Z5tmoPHDoyCYdG41GhXZgk5kzJzb66",
  "key8": "2AaYpU3nN67tZEsE924rw15ZYB4fj8b6T1gvWQzcZwbKRgmgzktUV8GtdJp7xSfMj5kR7opXCK12Ec4ZXx7bAMjy",
  "key9": "MhkiQ4qaBWRnY5eWCpNa4jtdoFuitA5k9HSvDSSvb4SjkMNTwknWCzEhANgomtM2LXj7jSb3fqHqRod9c24jJWL",
  "key10": "3S3tisb2fcUDmsy6LsKrdrhP3SKsALXqEqCqq4A3jN3uuV1TSn3ooSo3xm5GybZUMx6kednC8aJYkCC3jmC6b9ow",
  "key11": "5XsSo5dWr3RznZxeKe8C1oGbQVmJ5SnfFdqL9jLDi8aLo17YQFxRuSMrUiymRgaK1vrR2uHX2zFNLk6R321Kyr6o",
  "key12": "5pgFnbkSnSkgKjmA9ta19F67sEByT9SLTTEJobPaCmpG5kApp2hQcMhcfqgxZG67TaJdoLDS1x8K6N8E3xD6YGWh",
  "key13": "ywuD7j1nPd2ohkfauckw2woLEFgM69ZZaF9W6RJNXzTPbQWhq1Lw9ndtY4PsK1FomD7C5tDVAXKHV6iCDSNjbMS",
  "key14": "5EeZTxoPgKD9whh7Hmoc5mH6MU76h23MYpb6RqBfr7DdECydrLJuaTNHptoHEupWqdoLB3y2v7gGdQs6r512MmTQ",
  "key15": "4Mzvigg2CL2WSZJwFUfyFZCCa1kZL2S6Ex24ytCUvHTAXHhqYG5boswijxgiti4xB5V1Jbzh8mp2HffYWL4UYEo7",
  "key16": "9rKdUSxed15tQRrMQac3Fd7dFR4NdMZveNZBd4FkLdMKpVw7n7mneSdouvsKLALvWKB9P529VsJAGW3GYA4gZcN",
  "key17": "2x7GqmAy8qNtPG1u8C8itWgk4Ykx2hswPmGD6HWukZn4jbCYQm4xxd3LJDu79CKxKZZVCjdgfWX1hXZ6uQdJ1BB1",
  "key18": "39B32nL6ZWQK4LWE47rDJoPBtT7PiQYg38udAXpeYN68rpKfPJ4vBcmHyZoa9WLpzddq4PsooBnEr9NRPNvrRfV1",
  "key19": "4pYfHGgYYME5D6vt8tL4QShixznxo9qThSJtRHdjUhp7Xvc3Tuzdd6LkbpT52ZE9bf4NUzSK7C1KVBT27TbNVcd",
  "key20": "TcHMtKNnQ5uJDMU1hLGS9yyf1ZSZu9pPeArZF7y2WCzsmC56aKRucFVkdt4MRkBdos89r2pFr58TFpmt66xhWXA",
  "key21": "4Drz3WHBjkip6ftJmYxa8oYHda9t2mJJNet82kZge4nzRuM3F5F7FmfQmQSbXGwPnwspQVbUrSwp4iPGcnCPobLq",
  "key22": "2c1sWjMGjsKXdGaDwUK1ap1QTaq24C7JkoJ56aSzmCj6MmJe9N6FzWvvKtPwnP2srmUkQ7w6x8j7qC23XmFvSge1",
  "key23": "2KW6Wn3CJkVyp3mS5K93fSy1zX6dMVSqZhXvn6NdHj5YhSk8goYh8KVsfQPTDMQHZzZzPJ2UEQULBCossaVhPTt1",
  "key24": "45t9MBcTH4efcFw2eezxNMM3wPbjvAxHKvV1VTxx8p4vaGaifQnJdQWFyjvRvZh4rGGQ4a7V33tkZgHzsUWYdZUj",
  "key25": "aPEM2dHXk5VMan2CceFe2MHeFi4syAmnUYAggEJmRkHqYU1rTTUkeU7TJ5mxWt3Trt7M7fDqkK54mgd5sLbxWRj",
  "key26": "42Dthr9DqxvchjaWivLKgjCiR3pWj4eKNKMwicvqTdLx266Noo8jy3K2ta1gn79HU4uGghUn6kLgot8wcEM6MHQM",
  "key27": "3qEj9bLHapRa45AHzzhkmWzkyErcUFBnRHMkmZd1xwFu5nkjQRRNLP5GvDSKekqT9PrXQks6kPWHKYc4TCNhPTCS",
  "key28": "4UZEF8ggMzaPAg2X6KByJHaRBrBeQR4qNzhoRxYVDecVagmoaq7Mj6oxAehPKSTCZ84ny7W5Y8XUUApzx5nHakpC",
  "key29": "47mbmG7xaKpwCWuZW4KtQm3F9voPZdpoC6xUKQcCF99eN8zXU8f6LTnwetgH1TXR9JhEbPrVrozU4QfFbRMSBSqW",
  "key30": "56gPkG84KjpC5R2j24ac8HjMv1Hhuo54TyyKghqA7YPaaJchmB2C73LuVDXc3vkAGrMsPpxqSLq6Zbg24uesPLeG",
  "key31": "5DyhseM9kis6cZFjfykdunGcpeR6GYs826pEbZjE9s7Qzc9L4UxmijV7xwFFLqLaNZHGn7j1RaEQJ59FjLXri7hn",
  "key32": "BwepTwPub2yKnymdy6WGjWrtsNpXpLKV63NAaFmbiWTXxxMniiLvgcSs9Que8mMaynP641T6t3EoHYMaUk9X2ak",
  "key33": "7oiBpZ9MxDphGDmJAhaEHW1FcGZLixWATxixCmu28RgX9JRAGnTD22qn4irBREUyYiGyX7fD6Dtvhk4HFKr8F23",
  "key34": "2XfgsfyipSUm2gtFrD3wQ5zbdoEuRZpDJhuSAwfoSDRqaCeq6t5FhHiYJHkzpio6L2VRKh9mQTndVcnxzrkBVpEz",
  "key35": "5ML2NTNEqXo9DzSghUGtw9oCebAyWnmCmKeaEWFGWo4CPeQEMeMTnoEt3KHfet6dgfJD7AaSeW6f3znp9kyLbWZL"
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
