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
    "3crybPY5RM5DxbBXQpzqJHfNokh475tjNHixxYNhTRr1yQhf47Sr9HvhVyjtNg5gvJXmtUGeNQ28ZTwoUKHQ3u2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573RqFr2xz5P2Ld7rQi93VyXRNo3ShfAXwT8GdP4exnkFJQPZJ2mktLrU69a16Wn7zZUmdd2GB1W4rW3LwTkw9qP",
  "key1": "4CxbUN5HZMTF1P3vgdS7QHW8xuuKVhA9vM4UPREJGNy1LaNRGwAGcMLBMFPdbm2EkTwB7LkKbiucpiVyuJQSKB3C",
  "key2": "2GfthW4XgLuqHNFfpnrSxb1iSi4wemoXbWk4LvmSEScrLmxh6KafUAWL7fmE1CUeaGtAi1sN77CspK2pj7DjpySw",
  "key3": "4RyEfznfrxzCs7Kp8s21ZGtuFaGm8ybqrrDTf3qxmCLa4sSP2iiNnh9Bnxnbpa9M64GUxDGuuW4Q6CAuWCPxpAn9",
  "key4": "3HGY1UfcPMHQBhg11RurHgJXaLijLexYio4XxnvQZLemdDLXxVtNfzSzKBTt7Sm1sHFjwvQwK7J1mCkHW8hv4VrS",
  "key5": "5eomaBx8sd9ntd5Dvv5U1VUPosN1bNsx5mCZZR6BuYAeWvqcBhBkBMdCPDjzYSJy23RHvKXbZmqWTM2gJaSdfzgi",
  "key6": "3H1kmHpWp9jtfV6HT1R7FtxJcR4ijF74Dk2tKJUYXXeapgLaUK1JBuTcxfc6nTeWNmSerkVrdLKKTmnycDmZ8bxe",
  "key7": "3x93ZWSPVRXr6BhSeV8Un97ByudadJv7yMg3WXWyAc4z9Vh5jephf2cNVPPvfDZRrEQT1EN83VQvkENZdN6udqrq",
  "key8": "h2TEPY1q7859h6Ls4Q6gGyNEWTcBNnL9jeUgM1tTkNdLQwuwwL5XTUjyXN7UqurWJnERUe6rXhgcaJVqAtx8Jn3",
  "key9": "61BFaYx1qTKhx9mShTnQ2MEoJsXLM7rtYcSfCMYpCf9zRVFrkPrxP6Xh3MTCXuZcGemmtteq9qcgtdEBrcBBXGNq",
  "key10": "2KNvHfGkHnuXuwmvJvtSero1SMr5cY5GZJrPbsJRXPxrUKdjB2vMjNF2Bno6zwk4TxrpJpCZ52z1rzp7oMW1PA21",
  "key11": "2wfkSakLeVG3CfvjcwtzbJYnSF6bZsCj6aFqvwBCP8HrqPf4RsfvbHTfYTCjmkEcwqUxvpPDfhYQRQiy5rKujHzb",
  "key12": "3JLStMV1PtWS48pitWTyagVe2PnJC3uXjKGiQrYjprrHDA1L2Qt5TPGZLLdj27Nd3MkLXaiRe83PAhZoQwxwDM2o",
  "key13": "2W5aKS8UkQM1pYpNegP96iMdZG66qk5foF99TtmvwSoYBDgLRB2BFuNXfXeu3ceEKaZxuzZWe2eZTx5XCj9kmtwp",
  "key14": "3UnrS3hFoMhXcxSzG7g6VP4V9tRLeGVr8QSisCnXkWWb6HkVuL9wvMZAF3fitRjRnP7r2p7jWepMPezCXAYYeBXY",
  "key15": "zrQs6Z3G2QQJ77JUpDrjEgAuuMKtbtFT17LNfvdYD7jGkVRDywjbiA4bGoiSoPHZtHSqD9i3wg2yQMuLe5ReLcM",
  "key16": "3wDk8F9Vm9Rvu4uCG6kTjJzZT6utwyMe8FKCvUDtt7feTesm8hCiTNHta1tCQNj7JpBPuAM9STvRQ6XJ4fESGMY1",
  "key17": "4dFWd9JJMGLpfa9KLi3VwfVrekh5hntTyGL7Mn7ss9P7MucNHZL3wfvd6VEMS6KXCCd3ykMMvPEe1o6b7QFx3RUt",
  "key18": "NytBDb7TMgsUp2v1LrLoLt9KyVfTHvLPe2t1kmvNr9PEB3SfgX4J7iYL7N1aVPExenvR4tPQTcNEnUDpL6vGU8a",
  "key19": "3ufDYY6o5bpJr5DzrpQqxQcweCA4nFfiQ2skZLznampffSFmwxaSPMC39NPWbwwXgKFjPVYm3nr9hNfucbkvXiBe",
  "key20": "2EPHSaVXaPKngR3u5kyX5xfFrPw4zwWMptpcoBi4PEk8RAXQXSwBt8Sp8t6fwP6unAqqGfrSjqbzWr6G4Y9qNJe3",
  "key21": "3DyFoz2sDWMJ5oG99PPMav8QxDNivJNHf5CnQe7Wp6ZAt9Wg8uiSkfMwfgYR4sNCax5GcETrrejpkPyTUfBu5V7v",
  "key22": "3cbSxPUpuTiy2RzDgu8bYzZZSbETzmV4ZuARa1UU7ipGHXc6tTLvNRBuf25vAUfasVLJjTZzGDqQdurgGkNfVVNp",
  "key23": "2Q3XvrvDxsZvKmwokinf46eRGxwC1wjC8Em4J2SQxx2LJnZ19dQwXzPadY4NrMGTSE5be27eBkXQA59YPkRxa3om",
  "key24": "4dve7yTkjkj7wQTcJZs3SqotLf14W24ADr8T33QtAf1bncaQLDswy3coKxp6gHn2Ye6QkkPpji411f4SLWwjF4pk",
  "key25": "RHQfRp7Vbb96gxZ26ZC76bjVhtjREfPtzW2pw6kpvSQQ1P84EmThq1NpZ6JHzM9QTmZNQDdzc3xu4CiPdQZfom8",
  "key26": "3NNfazyVN4BJS2zpC9MrhghYUeqWfPbBSYQjYF6maFHWZyswkQAxD9PNSdnL8QDmeiFwVNacNwqsBb28RqE66Eqw",
  "key27": "6359XARL4qbGsVdrjMTignakGGaMgYNEaupVX6eoUGfr2P534oaZfRpmhyF9b2DzaxvPmVYWQWm1dCssUq8WBFnk"
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
