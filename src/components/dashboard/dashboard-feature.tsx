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
    "5BEMBLMWcvdqtwiBCh7oQHjzJgzSNkbA5eRMiV9o51p8GD7msCkFTrKxDJZiF3LwZtUWqeQLqF9P9WCoPZg3FV8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AW8hkjiLzHNXndF548FpbQpNsnXyYpCerf73XiH3of1CwG8r5W3vXUQh5fLLFiBnuwrrdWo5TnXuEBitijae1hG",
  "key1": "5vqXHztengbWh6kBob1tis3e7q5nLMkeambTXgQ3WgNwE6FWyZ6WcSB55PqrfQa36GDKs9q6eU2QresdbnNS7v3Y",
  "key2": "2YnSUXznZbkS7YPGBk1jrTgfWfJEhjEksdkuHQDtNE6wft4VPUdzkBWk7Nn8qv42wWmxF9DwLPb97nA9MqviNnvQ",
  "key3": "3E1FSs9PQGG4c2KMU7wFLMAnftv69jkpb28BvUGhES9pWCe1aGgWyN51oPviUqtYGQ6RsXVBwR2uMTEFrUDVooCe",
  "key4": "4joJFNkeN4HxjtjbMtTviesoDgBBFeCsNkQtRz7Nm1CYQfPfuNGPUHdL1mXeuohAC2BWT211rDr8aVazq693CL1j",
  "key5": "5w2GeUbHc3LvkQdu49s9KZwkQT8x6aK5KNBtjS5o6MTmVPzzuzVdhsSEbsTHd68oki3oagNfVsAsYTnMG13RBD7G",
  "key6": "4UvHA2ft2NLqFge5fU6v2X9G9mbo5d8HUioxVuaoFhGPxYq2Acj6i9ZpraAbFoHXzrxinakfZSybdgSYTCsdqJcZ",
  "key7": "5jsX9SDJM5WrvyD92sGVzQRMT35H9EsKqbJMMc4mPh9E6unkzsDNwV8rF1ie8mBZYqyEEDcX3SDaF8T6AJivByDB",
  "key8": "5yGxwTCsqk7o9g3E6CD1DcPtkYnAvophTtths7RXGY4zm7ZCuUqa9birMyvYsbDVN7XR5Ne4jy9JrLoQhDM8mfPc",
  "key9": "4nnhoZ5DdizEBY1NXAWnPzm72gu4jx6HyRFd3gnxSBbZ7CL2RuohEBXJTtQfuCa52uqVxjrP9nfqBZNUPSQ4qQyk",
  "key10": "4Y4RAJdUcLetkgS1JHvNsQtsF4vM4m2qohbNXzNovYGAk78RCriqmHDd777sPoUj7CaqmoW8tv17Wxvz5d6yuXk8",
  "key11": "3siwooDht2zWhMbwH7hjkGMbxY1XENKeHTTXKYKScUjH58nA1hGguxQ42yQPDnmCho8DS32ryoAnP9vzBpyC8Mt4",
  "key12": "59Zga3KiuzFVo7MWHxFE5ynWYkHnDeTwxdCHoWADAxsvhC4TYUkZXFagqZ1Guhz6UAKdAnGo5h8q3mmQdB9LyL2r",
  "key13": "3cm15ZrjSgRw4CqJhxpCYper9TPwx23T6XbS93cYp1YZ3PusD6W3Y7MY3hrgWMZjKMu5PoxYDfKUVhYqfjAx3Wmb",
  "key14": "3WQH6NoeG7StfWu5FFBCA9EFvCjNdbneED4kPANWEJ5Pa4hadEvvgHSEqcrYSodqWMYM86gd3NA8ZWqniu4BVB56",
  "key15": "3DAsBTeNheWkmueEfmCTGojpuxqj9hzvvqTMEfE8et7tCSVw6kvgj8PWcv2psHL5qdmmiAaSpmULvYGtgRmE8zaV",
  "key16": "65mJE9FpHHpedBPQbzWw97wwTFpVhFKqPU4x3GUG96sxNGEPs8KoBx9egmxMNZMD49rX3eWeTKuLgPXkGy5rJZCj",
  "key17": "giG1KkF6TL7JJVkSQAicCTTquFcWqRiKgxzdYfF8rgivJ248M3cd5B1VzYYC139CStMoXVpDUNNWtHfYLPCteRW",
  "key18": "3FW6ynWwa5DQFbzFfZZwy6jax6KtNrS6dUE9A7ZCPgdeSMWmshN7epdCdjQvKzGt3LureCCGBxVKjv4CgEWSfrvV",
  "key19": "4DmUBjB8J53j3tdQU9orgJCLoyM81npCAN5Er3qTXQ8gQ4skxXRxavkDVSC7macNxQNTDvPsBAiE8e3uoGLrcih6",
  "key20": "b8RkthzJj3WsKMYri6mLKz7bsyjT5CbxWs9BmA18FyjKNVwNs92weNWbNEzzUWYf1o35xJKQBWcBCYDEzbYVFyE",
  "key21": "2Ck7f1qy7ZcfweYMxAWGxed2kaiEojBMdcEb4qxafoRCPPk6jUbAR2oLwGrmJXjz3KpruuAka9mwwCc3yaRFTHEK",
  "key22": "4Qys5izJHSMDC5gZLYckp6fTSX8zaZqbv4LFZc9Wz1ucqxrx31dq8hfQEucw9PamD1ARXv2Lne2Zg2KMTxhHbkWJ",
  "key23": "3o5iBxz2DqxQeYevTi3UjSTE8n3VnyxJNHokULhRTjS2xBtwXtSCtodxYBtYkJQp5fXA48eHXLyTgquCG48ZrJdk",
  "key24": "5t9h2TvHsuSJsbF7Man7D2VwmrspZbc1ywVAGcJXoKJWq18WESa6HEvsRgZfNbcQNrr5AzyFYYXKcDyjq2sbMe9j",
  "key25": "4wCWsYjf936WADPaAhJoacnjq2RTdxbk3W3rvz42iKQG4urfjZRijXe9nJmnPmKq3ZCug1sBQLDkzzUd6A4vMFTh",
  "key26": "3ag15vyvRk778TqQqXKy6AT3YGXk5r7thC8MxZJiSG8u9SJr5U84iTHsSGFPWbFXhB1NuKbVWnV9H2Q8qzPsqfw9",
  "key27": "3gZsMNRfjPW2xJcCzJwpYwqtNp1jteKwbjgNEwXFHup2tQnTPYbsUC5DetD2kC9PQb88VGquk14xvM5YeYgQx5CF",
  "key28": "4eo4mz4yr4fiiHapFht7rRYgybT83WBGdMDM14ZVTbdMr4CvqN7TBSK8C2e5HiWTm3CB4YwDa5MdLHGi4rQGwSjh",
  "key29": "5HZbs4egCgdL12WUKJ4XVuNToCNfioazGjit8c7rxbgPxKmWjmsMUT9n8uuoVcQ29nievPnGBnsVStk2Z3YwzZ52",
  "key30": "4T9xBaqxY1wDL8xd8BERZ4YxbbWc5UrYLisBC41zGvrQjYiHKqz2BsaRoskAMs4AwZ6iRAJGn6FjoQCAojm2MtQS",
  "key31": "5aE12oAgyhzfr7bZs4sF5MnAMjfLJKioViGhhAdVFXgDUASHRtaP1ivivrfPz4wUs6nmf7fRM6VtpG9uL9hJqK8Y",
  "key32": "3SZiXYS59aaRUCXVozW9zPeMUrsknLzvNQngxHtJ3Vxk2U1YEYWKpvRVqqy8Ho6sw97YQVr1SbLAv7skydyiNbX1",
  "key33": "2s7wDFisMm9CDKxX6SrLsFHJ4PVEDCMCHdCsCpGKkJAfMeU77NB9GRuAFWcMPceMoQ714an23EEv7jZ3kpd4LBqj",
  "key34": "2D9YtkfrrsVPxopcdKfU1KQiaf5ZGRzJ6LJUJBSYtJmk3A5uAb3hLANXUh9NT7wTgv1XKCSHTyfuevyQAyWY7JuG"
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
