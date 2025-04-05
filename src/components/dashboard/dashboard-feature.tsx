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
    "5fcTmieScksbWCYoYhVdtfZYnVbVxVKuZgEMRJM2C1CgMGuzjVdKbh87Qv4mv59XYZ3YMFg6tj7JqQCGTyPAgLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45v2Sb3QN3Jv7CZ19coNpAz4PpBdzGX85cotZHFMFs7K17oi9MhScNXQh7Bkfo3hkaWbujMXjw4UeyNEdPMw4dZz",
  "key1": "61rneChHXa5JKwLoPiphM4EYq5R81Av2t6wiDQtkRTwMk9J4aJUxte2R3sixXz4pHAouw9ZDSNiXn2wAYJfDvcv1",
  "key2": "3mBNQJNbhK5gTC8ohDVpYbZTHvtAtsXDbzoe46cUiTkxD56Cx1hwpD6S1GKoXs8pB4TUEiKgYkzQQqEHm97en72A",
  "key3": "dF9MNX6vKoK7t5Qoqv1fdF4w9vLK3gCi7qd6chPSJCXhTz1JpvxFtFkPic7HuUxBr3Hcd3PeCqXMCWmgU1DJC5i",
  "key4": "4ecUq193PLoK3sFD7R5Dinx7gPZWsFXkxaWCr2NZp8V29BSYhywp74TCZwjanW3Zqgv3iibvjRRLkaNkryenS2tR",
  "key5": "2D8P6P6qUkMEZoG12Cg4xfZTr8FsPV56zFGKCEiD7TbyxbFQmwfmK4ZbhaDHvbpAxvHbpMVotmWwZQJ9q16XQ3dp",
  "key6": "irAFqSf34mgYinr1azfwRudxaK9m8ELJ7TmJfZfvi56AwBR1sacf2c7kfdExeHvxG8d3i3sAdSZZTCPMQ1tTe68",
  "key7": "PiWy8fwY85n7pMxWg1Qxposg3FpPsoX5GcqbRCEPfRg1sfdiFrgYabxCviCWy6ifFTSfy9GFXVDgpKBeSCy1yxZ",
  "key8": "493ZaQ2CoQCsCSFqrQxW3JiCcLdTS3Jjh11yLpNP9KPMJJ1GAkzRnYz4cXeccdotvqe35eG8wtixcJycbjo5pBD2",
  "key9": "3WsPJaz9wU1pPvEFr58HkMqVMjTzdAgSurPaULvC3X5Tv454ZkLDXfFoVm528QxWPcPTrAXy1nArSEunoYFAAA4p",
  "key10": "4uD6XBNHm7Bz9ypbY5puJVrS3k59ZPB4wNkBZvVpLG623Ffv9VhyTViRDdE643dTTt7QehtCkCvfXLRoqVDADUuN",
  "key11": "3YoedCE1TC2ZUbEPgPtcMPQKYfjw2LJYfqwU3uiur2rD9rTmsJhk1C6em2tycfRNHBDMwFmScYwUghtDqMogNwwg",
  "key12": "2NbcZS8NHLK733WyuiejNetMnnzEhnfkwNt57uKiDkDiG26a6n4foRYCWKscvVegiDFvUegnkCyguMQC3n2UbQxz",
  "key13": "42YySzk8fqqgB6kL3VezLrwLvJetaTeLjPiY7xupy7PWYSycNZCjw5X1tMU2CBXdPPZasut2wmory5gFYyBRpn7a",
  "key14": "4jsv1ASjx9NSrSdFfUoCKb5zN8USQB4UBofe3VmkK3cjxzu6FpNYdLBRTaDxKPUXgMB6DeiwncFmFnfo5q8kaFRV",
  "key15": "wU2zJ86AyjDqq61pwxf1f5QhUaEQX3XXxy1QHwdHAKbrwUQkYz7owegwcHT787Tk5gJfnvoc7nBekirBGgCDEgt",
  "key16": "547v1eQ5mVN9uJsBA1mZu1RJwHUKqYuREmXH8cR3WwK6vNGXAbwoS6qHKtGh6dW6dozdnCMpzPWLwCVa1dyBUHNj",
  "key17": "5zx8UbcsGLu95QopaidAiWQEZ8QdYFjJNgwhMvvTDZ79znp5wLXVyLhq6Ma1tZURko1fGwkp8dLK4N5uLtkrS8PS",
  "key18": "2iuQnwnWAPRbkuD3fk33cs6njZ7G8Xi1KDBnBvgdTyWsERhC3xZU23m61XwR6ZN7HzxNBUmyePDMDQjrKrT4S3i2",
  "key19": "5M4BNgs8bukmwogbkqkoUn4Ym7YjzNk1dreZ1hvCpQQcY5mZrmwMfKKbEi9bMkxpqJiWPe9Jj3AXfpaNGkwae2AS",
  "key20": "644AHK5fECGbbr8bKCkh5mzGg2oLwjXsHTdWWoSikv1CTXz7HwiKc8xUSNEzzuDLmDc6VRGYtBenyxU8FVnKfG6x",
  "key21": "4w4x1xBJh2VDwvN4Vup7oTpGNMHmJKYPabSZksuqb33jKkdKYEFh38f7SBgtdES9htHXXKJwHSatadFV9hZApuvZ",
  "key22": "24xy5TnrVtEPa1Q69QT3eGWtCXiC39hVTzc22qEmEoxS5xTtZQ5J1QGDuimmUPDojJJGQd7VrzA1VkZXhuUEhKUU",
  "key23": "5TnBFp5pX8s9bYztkzWR9QrF1yFtygQnNSTWqSCzr68iUivTDCkCANWhTApyeTpCuFLYbsy5Yn4PNU1LPqW5jJew",
  "key24": "U7MwNezbxwPHinfYBSAGBAdc4xRPyAShskvH9yA4JTXC9EtDkoxsYTpmnjXpLQwMWrTFYtbM6SD7CB89v5DAk1U",
  "key25": "63KEdwGdMTbL9dgYZjnwNQ1fHGDbAgwkGDptzzoz6BosnWuypwM5k5umhPNiYqdY1dG2bWcr6QyCCVffMWJVPXty",
  "key26": "n2hQ93kM2XsXG1Y1bhrycQt8Y4dhNmHJ6QVW1wYojfyKCe42e1uL2p72nyZD2zSHM2EaBpxXWDWr4QS6SH5HsyY",
  "key27": "25caXpBjd9F8fjnWDAovWAKY5tU2FQ98ydYvDnPMbsVz76PY6LfsibygHW3oAuU8bDY61SmR9jkiZBo8Ah9G5m3j",
  "key28": "4KGQdsDMf5Y8VScfFbPgbZvzi5Vkt9dRG6zhEY2VXUAiW5CYAWLtdrXw8jJP9e83mX2MA9T4NKSeXiTzkikeHnjh",
  "key29": "3J7bXs4xRZsanxFpy1FppaSPEEcrPJwuh7ZBdQMaJExZNmVVNoYYaSLNPN615MWt35MTtYge1HMy1n1nW5ukhRsN",
  "key30": "21F6nN24j4fZJCqkNStguq4mxD4NLDFMsVLNFBu89L5te31wbVmyhkK5YhNJuFEj7imNLkyJxruYRTWmmGtZ4g1R",
  "key31": "2GZ6X16ZE6PZRRcwFEgmDjTKRjNCWe5y5XXesbcTWpTnTy2Rr3eiPvLwcrzZF7uhgmF2ngcMBsr9aNc1YH7NExUi",
  "key32": "51igtxtG2fYVD4TXgmvjfC9HsoguiwGFzaWowgwhRCzCKmXAaEjwR4rrgKLLNjqhTLmhRU67UBY6cuwPDvZFKxkZ",
  "key33": "5VTXDiMQU8CUGWwCpwXcBdosizHkrswVY4cCTVcKoJSaBie6qGDBT2J9EbxQnitvAMRLm4gKPvVF5TUayXVz6X5n",
  "key34": "4tp9jZUmnxaSG7M7FsZ3AaSZVcSq2nhmEzXbq43hRqoQ23ujssQYSwY95GvqXcWm3NDTfat5jVvU5KrqXu4YtzW7",
  "key35": "2VrZ4JgtEUA5CccP1c46DWeTthUSVMCSbX59XxBWrz47mPiZJREekqAxhD3jKhP2DQAsuPzCDcErRbJjafEtZwqu",
  "key36": "DgBMS3kR74G1n1MfE72tPRBTHzT1qDFbKDRM4dzpfkXtA1xk1mnBKkfVPCXpuGsdrLwC8353ptsmcKEs7dRBs9T",
  "key37": "27op7h4DMoaSci92kJBxQ2fPJ7nrEWGJvmNcXYSkSRpBYGfbQiVBZx1SYFMMrgpEufdP4fcniRkX1DQQntHcZGht",
  "key38": "3ggSt977i7goHpmzHBujrhhPPxakcsSVYPd8FTj9tD4UfaP52QZhYywRWFJmMrd9BpMzkpx7yw6eM5zz23ktYwwx",
  "key39": "3kSyU3ZWKzh6b7TgvRRXFBXM1R7kvG6MGhTS4RqZjwbVa14wZUoVLaf8SquzqbH18r98GyYncQS83DcKDkuvSqUw",
  "key40": "3ve4XGGF3iijWMZJFmcgHtmstu6XcUaBvD5xsv13ZY5y9NLgEzbLBL91TmMiViCHES7HRZHns2RMisqnC2cBM4RH",
  "key41": "jQdiXE7saLKKZwYU3UBWB1PdqRPDjWSTqFNcZtys1NUehBoihXhcsNntLLbVTbpavPL9LbZ5uUadY9LUMxGu3Fi",
  "key42": "4kvKHT13wFRbieRkwirW16Gv7D4HYPRHGLmM1dszWzVYJc3n4f3MXmcvrw1y2k1gAdHbogvsSx5ZWXdKh14DL53V",
  "key43": "4HnU3v63sa64q5bSmGnHmi692vRvS4GwC5w1sUYMhgQoBziZqW3MnaQWqByXmpuzoSTdrAzA9Pym28i7sMRUYAbw",
  "key44": "2bABg8Mi2kCd3DYUBAfMoKbLUootVTo8nCgRg19LuLD4pUrV3w4uUjT71T6CGZmqTUghYuRHbPJidM7CZKWkaFV6",
  "key45": "2rfA9247yJqynRjfFFEwhPe1FLWnDvkTtzepLTUeDrDoyp1nqEmkC9ZN3NhoDFNgeXmLkED6E5cZxsaLbQ4gpu2c"
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
