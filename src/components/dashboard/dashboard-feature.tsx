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
    "Vf3DWHz2mU92Rht486xqKeYptx658ZcCCdP8K16NoKqxiTCmkb1yrAzCwjYTeLE1rWrfDf6pwAXdeBQnPc3jbqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DFrfyyik5o82vA4MeBcg5ayecy35nQatenNc3qwa7RMrkF24idjbNphCzn3JULcEjSqxQzsreBboB7bQq3hh1NP",
  "key1": "3kxx3zYSxVVTvd6bdt7SaDdpYCkpmEsFHWfrDKqFvytaAGxBdPP5E6xUYu3AVGjVyiLZkeuDqJJ7wwEbE6yFE5zm",
  "key2": "q3eBJ2Fz2uCgiTbgBurvuLqP8jYdiyciyXwGfzwNakAoWeq9Zx3jQbG11Ec37DvKsf8PZXzDu2qgsgkn8bknHBe",
  "key3": "3TPXthavJY9DhiE9iQchyrZsDLCxzNCCMHfved2zee4G81sZLMR4yYuGMoTBTaNBUMpd1fd9Lc91uqGY2Gt1yopo",
  "key4": "23U6DZ27n3y23rDesEJ5dzF77Emp2foxv1VWMsht1mGbKGkWCPQ11toJw5N1NZg7AbXtzMHSzbNguTc6wSpz8e5S",
  "key5": "eW7rk8gCDDoFJDBqoSioCGcxxfubQDicC8wAqTAMgLq3MQppdv4xnw6VcVpCzCyqX3zaU7NqCwSSNr5XqNbMtSu",
  "key6": "2rBvHZrGvKGmxFtvSGrGszs8uZsMMxsaA6Rynw7ZvJ63YLcaTG88RyhBQ3ZQvs49tte1jBvAMeuqGUAJNoYHDzHs",
  "key7": "4VKJWQ7H8LNYgV8qLeu1EjBhD832wdEczk5eBsJPvNxGk2QeLHTnmjnJUc6utskyXWTicoNk13KY9YvH6jvtszjb",
  "key8": "htEvod6wk4RwXNA3aF71VXfM8gaZDwwDJmRqci7Evv15UhKgazLnHwkEHSt9rwWQNdQUeFtTRaEuNKYVhL8nNCm",
  "key9": "2zZ4KC5YQKMbwFKY9osVXi53uKc2w3pzCFNcFnRFc56vhedVYexPicxJwi7DFWrWkwcbRT36V87BL7ELyFt6ptVk",
  "key10": "5c3CJ62d7UmDvXBx6UZHpF6j5akhncsstRbjA8KzVsGRMQzWb2GgKVWP8b88euQArPVPLUcDeur2B9yh17aoS97b",
  "key11": "5Sf6Q63WTbd12dMEVZjSm9dctXMUzWsQTGgg72fw8c67pnV7hMULGo9T7PW85jKYRMVejF4CfAdBRTrbK9YbsDQu",
  "key12": "CvCHbHkiZjkYHer8uHYr9tkqSNb8vbKaf8R6dTPx6iwfyosD7FqGi87B3TcFyz28GVghMbVZY75UiFDFqnGRNGi",
  "key13": "4SJ5pJMDS7WA89ewuMgVUoFACibTKVAVgNZox4WfJENoS4uHZavysCT31Fb9mNUmavWWAp62G535jNaDwtrtibWZ",
  "key14": "3MwPqbKE22ADQLaKzKWftiztB3gi3BGpKWWfCZhe8cq9hbXKBWxX1rYkvkj2FCEHjeVHGmsS9AMBe1tBLHBnBpGf",
  "key15": "5WfAXVD5i5WpaanaaV3CSkQdp8hYPBqcn5d1Gy3j7XTr7jiq5CWT1nWGh3hjWeC5GMHSDhcVkv2KKHYpKuNxqg7j",
  "key16": "w4jwNpQSx23gxrRmEKpvQmfzs5NepGM79MnwrpQiFauFhVVUZPikKEwm2C9PJFLZzzyHt9UJcxyUX6ndscdwBUs",
  "key17": "3ZvxeWJaivfAHHnCWDwVXsEXBuzwenBnPs2RPPhBz9jvxAaCoPWfk4c2rsDpzk4shzaXGmmtWQB8MC2koyW7PSmr",
  "key18": "5ebqcVgQsG8HTDB6fwiCqkeuRpvLkdqUc9E2oBiWxC3SALSEK1iciRSseDG4k2QToVMyfNQqcW9GZnWwc68Jp1HX",
  "key19": "4gvmgNkcTywdQSEAoMA3MvZohBcGuSzHypmRgQd2T7KqXoivwdu4gsrfaB5syuhWFkzgWVA6itjaw2xo3uyQztHi",
  "key20": "4rxBH6o8vqDxHmBGSCa2jRvi8636RDbiK2MuigHQQMdt9qqVuuuNbZLXGaPXMkCq4kzQ3NwB3kzkm89yvWbtWLUZ",
  "key21": "5sBWcSYbVdGFS6seNaH5WNf9UrhFTHnxT3UdbJeN2TTv1pp5LKxAVcg6fykKgnkCZkhwrE57hC5EyAJkPGkqsDaC",
  "key22": "2oMVQ26YNqUZrzddumePZ3FTEdv2VjvLVWwvNdF19ec9Vry5UkDrhCag8X5tCyek7ubXjLFKDVdZbEPTNpSzZGMq",
  "key23": "5eCF8mE1fLhnyhphu6uD4cpMhr88MjPZXErBMstUhFQnSrZFbEYmZTX5zPZYH6zhZGPGNbKTCDD8tWmcVt7euH1W",
  "key24": "2EYqKrWyHUSaU7gVcUNm1H5XjmdjDUZdaYxKUxoLkfFFpVLxeoXVHmPMy4gtmijnJwxtGRgBzm4vmFF4m8GHwFSV"
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
