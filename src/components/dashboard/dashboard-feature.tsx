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
    "3pGUmGQucaT4k12DaUymsiGvu4ucp5FiDfq6ZLeGUr26PYjEos3RhteA9dbsUxxVC36GJrisMMmpUPrwQWkVFcsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQ6mPttgo86iPPNCvm2qjpbEFHQmPY1F54NNgvWw9KD7UrZZB7oHcB9cmBxpqH9yksnvc1q6BbxFCYPnNj9zEJV",
  "key1": "2dLhzUYuTJzB1QeJPWBhPA4QZ9oEWsjkqEVWwMthjjEBgbHJck4sJNR8DFQNPXRD7pQkagVKRfoneSA5KsQyNunC",
  "key2": "2zUxUt7B2a7V6rrdEMYMKfQEBXMU9VeUGpT3d36oQkBN5SUcX8CMbarUSfCwJJJzmuYhguKfjeWHyFuVH34VxUQ1",
  "key3": "3QKiiSaiMCFgi5sfc6iBNmuPrgUw84kDhA7PJeNdkE6XBWeSZWhjwAPVKjDkrKMTmULxRccXpPexq95DyLD1wFwB",
  "key4": "Z61HVS2rM49DDVJ3MYhxmPCiHykaf9oGLPrAcL2sVuzbGoRnwb3apmo24QNpB9LWXqvkbeYNQNNtbMfGu4PB3gd",
  "key5": "c6Cjn56ViJdXjge1QugyjWD5qxeoaXuBWhnGH1BTSYeS3TRHibX3DbQwN7cq9SYXjy4F6z15uADtjgbkLLnv3fQ",
  "key6": "2kr6CCVissW8pT8rUZk82rryeP6F5gKGj6uS4qZ59bzNfMc7Wme3hGZKvj2p6tGGpaoz1EDZimvB63qRGZrRU8wV",
  "key7": "5n4ZzCHBrfjgHJouU5gwrZYV7a3Bdoruj2HPEFNGmoLoqGj8eAg4VXrKnV9bnayBGL4NPAU2Z3tVNRhzf6A7H7EZ",
  "key8": "2wDEpyC3QHuXA7WDaq2EJM5dH6vFvpXUWkNSo8m5RzW6K5i4Gek29pns8wtyu4Z5TDYQqZ7Qh6T6JFLRe3CawrM",
  "key9": "41qABo4h96qexMVo1PkBSq3FEQ6ENT1mG7j73BnSWnt5o48zETPiMoRFCmGk4tGqCzJk64fLR1xkQiPj5ZMKTUD5",
  "key10": "2bAaTRkht7fJVqdMhBDf85yXCcJrVhZowB12BAofPfkd5MAxf6KH99opxmwa6EdFPdm8yv2A3DWv2sG9sGsQxYR9",
  "key11": "28YQphPMwy3cp5k3RVTG1UqE1yyaFsHXxzSdRLZsDtrTDr8qATCfCnXc6rjuK9t8j3HETsvgD8VgJmP5eEoGoZ3R",
  "key12": "3PgzBrk6Bmbg7N4Xa3g9TS1ddVvKWxy7FEtYXQjASyytFiBFFMQE9LiDCYGWRA34Rbe3MVLTuNh9c11Mnrpjd9pw",
  "key13": "4kKb2zYSwoADxeJ4gQtj9ikLr7udVyQYtUH66c641jzBgZCymJGxmXXSMRprcKu6LXQteNag35Zn8jmVG3z1u4WG",
  "key14": "DtPwSFfdJqtGDUdjTqKEwyaxDzBzwqsfzHNX28CDZdTbrpqADmmhnvRm9ZZv9dtmW9CJU6TEALLcXzXkxWGAhyo",
  "key15": "LFT2v2CAxv869p8sh75csTuPHTvGUHbEZ8Uok2XkDswdXH9FR2yftoX8hEb3PerdYjhzQrMPTJv3GmFe7iUZ9S9",
  "key16": "5zKUv3jxW8BKbAhwT5tyZX9AYJBh59p9k3BSPZzrUE1BerUBpHw5ZgVbT2udJAMvnE66WWU9jD8GxdZQiAgokk9C",
  "key17": "FhcYbSrNeoQES5uMBn58kqEgMdRdGQNeek2PDEAxDx4sTr5gRehngGmEHdXPU77gfSMyNmfp13K7xqZFmqCWHus",
  "key18": "Ybb7h7KQCrkS1nUcr1kkhqmDj9LbMPqb9E7ph6RMhRqAFjMgbeFMpLVTviReXeaY9SaU83s6W7TomxsemVpTS5n",
  "key19": "3mD8KnsRjg5NJmjAdxkRWAjbN9tLgXQmLhgm4MJHeFTp9AbE14P6XnWWdHPXYULwginABoH1EgEGSutaWtNHQSj3",
  "key20": "4iw4cvuVMd9qnj95zzK82581RjWecFzfd1XHqsZuiwHKMdfyK4n4naM8dvFbimFvy6G24rYWTjzSGQ8VfRhCsg3V",
  "key21": "vKoDWFQVbYQUh8gKjoKwAdFitACYYJg9vUwwsUW6PnfRrNvHbo6moeod8u4jZipKCNnMGznRJeHM8tVBTGhxEuP",
  "key22": "3zMTpRvhhbe7Nw6TWfDcSgiJRasHj73eFZbUXLhWvHrQtzpVwaJp27H3rvYqoGoqy3fsRAqhMDg1xGqFReH5f99Y",
  "key23": "otEdzJmwoXgs5nxwReWLx1zPGZU8DwdbkfEj9ecRQzuQ4c4568UTPC8KRUM9iRfpTab6RTHwAp5ifwaeHQfntcN",
  "key24": "5sfksFCNenyJrUj3jaGxoKuzMTXBPY4qYCQDbL4vnModYqcp36MV5kvi6LEVrshbQtyUCVgejAmoBu8Yp6hMucc6",
  "key25": "3nnRs3ex1QYGMw6zwYJHibqSNnPpRsbRs3w3unmv6dPogokoxRuuhT3tzgAhhzJ4xX1jVVuhiGvcqzzdMf6vzvPu",
  "key26": "KH8J8dtfYNFz7hewjF6MD5D1SCEndLtRFQYd6ipMmNhqWbMn3ermBwZfpqrQupjfYEhrr1LurYhsN5V5JamnQsB",
  "key27": "4jnggczWTucpKt1MYe4JVRmMLjvYj1bvAZQV3J8f6XarqQpqJTWDXL3qd7tQUY8EPURKfZqvdCsXLt2k54FDLyz9",
  "key28": "3MYX1vFBLMhPqVqRir1mnydaUBVWJ996x89XSjjoNESe73a7iHV5QekKrytNvoPEXYBpZuJgp8Yp3eCokHGRiT3Y",
  "key29": "6myokohsw9LK2fSbF16UZVx3CPBtTPWRWirBnx63Xkr7r1j1efU6YCzNwFizKagLHN8T1zBMKreKmGYk8HbkZNR",
  "key30": "2CLJM8Zq3Adi7bS3yvp8noJkeuhsxuqopQR3jLXY4zp9psQSje9qTHJsHgiRj8jAH3Q6te9phKCErEDJPE8Tz4Ai",
  "key31": "oq2qxXQVRpdH5VhoEhtwEm3b5WxJQHTeKU3meJwLFxA62rj3RZhdiVRio1f6ZXUMCRRQ3cHve79Ch5PNr9fjPEb",
  "key32": "48dC5jgHNfakKBhYWfZeCmy6fAZiuR6GoJQ5NQGzpB4RRBdzTXrZa6RG9y6tH2Q318SoiZhBScHPzdV1J7uCB4E4"
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
