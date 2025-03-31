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
    "5H1Qat8gjdLe1LmKvk2kV9LFcA85JY2n9hMZHX9ZCyWBKvBk979bgqWRWZVXVtZ9mKRWtfsKFuBYj2Zkh9ikxqBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHzAnYrWFVnCEBue7MSrfcdGb3FrrJZbQ2gfiGq7UJ2JnmCMk4ABkEsCKDwvuzowRQYuL5a7Msu6kZwwoowhRzv",
  "key1": "3tQ7XvsgNXCFG5mpw5nt6G82uE6K4xX1XXy6jnEZ55xpSGUfwHggj39o6VWpmZNLALQKoiWMbYVp7RikvPZ3Twtq",
  "key2": "2dZo7cV1DUd1PM5tnJzgukNbUV1z4tK4MA87f7mnVk75pV5rCDvPUK4gko98kxE1EadR5hv8gFqn5T4tqCKrqnk4",
  "key3": "cn6UytaxJWebN2wxBqLXKkz7mjC4BMMze1UWTXJieEXDhU7TXe8CyNmAVMaYhkMkLgQQdr9GvKBGtFbNkNf35Fb",
  "key4": "2qSRE6aeTJpkgoiMTE45xNSwMhgkwN9QsPLYEVqv9eCGuWhRGUnxTpNXg5aUk57B677USf5etxewkbUKULHT6ukw",
  "key5": "4fZSG6EKRWwDwi7bNipqv87eMRHhSeVR8vrpUaCa7D4eQv8aUXfz2Nm7HRqmq37TKNF75M4KaRRRaF8fzPjY8Dok",
  "key6": "3UHEcyKfM75Ch7TXcKDM8JgbWbS26dCWTaHsG5QzjF4iCH9GGUEQDjmYsyf2qaSP4U3uWjKiYQYtDZ9ZwPvPzMP1",
  "key7": "33KXJBaLospFiotSqG93F9SVNY3CtE9fL9Vdc35WNX86manyxdxdsRTHk8Zytsx3g5hJ1Mz3CTec2cB6t62gFeys",
  "key8": "4zDhhHgrK6z1XUMFCEEkLfjMQRFyh56C9cmB8R6pNUoFrowBxEc8wKvM1ygNx2dkhb7CKaHxK7p43MUDsdjSC4aA",
  "key9": "231HNYJSADr9gFrUo41H8LkwRCUUXrCJV44bUEU2NUjwk3SYRhCMjDMgDucydyy2F72YhUqWXmcnNXhWGJVDWUaU",
  "key10": "5q2FSG6gX5UDTQdWRNJFzu4CdpqnwWpzQPWuTdhUrcvbMApKDEmWAameq1hZiVsuZVhZeNJajdd9rPun7UNayC4P",
  "key11": "4LweQpeEE6UBqs8T7MzKEBGphh9ttYHi1YU5vRsQDp4te8vvHanXthjoqQCqQKq7RCqEkDWLhGiZBGWrdmnK2Lzm",
  "key12": "3zZQHcootc18TtccMByPFZJaqMkeZXTvoGuJtnn66n2yVQyLGC76rWhrVvxSrDdF5eMF6DunjufgVjkUHRNvULrL",
  "key13": "4DAV41RrqUUMzporCqMmgQazcJRjVWooSnp21aSonyhhRxZESwu7HtM548bAi8y9E32CNKwMT6CfznBJ6x1vM9xo",
  "key14": "44tN1SZFd45s1bXeweBpmQEnFdQmwpWYR4fHthiU5fC5stZa2cB9vrLDtCLGAwuhYDnq3rgDeajc9ptcoiCV7uik",
  "key15": "37Fgei1R2SWhzKWrahLfUAVyJxXb8YXUAsaoe59MHVQWoLQZ3uWzopfCQo6rDPDWvRiX5YxfzWRJvJPfZwTJfik3",
  "key16": "224FWXMzSPmqznFZbpqx2uoWoYWM452cL9tUA9pHn2CFkjUQTvBKKw5qZDt1UWvFNaoV7KnoVsspPdFDkjRUVuUJ",
  "key17": "2usPLZJCmgnn2KyaM4MQFichjEN7QBejUwdbJycpPohDa9D44Msm43U1qYTK78D29yqKQmDbyBGgs9sm9PySkmCe",
  "key18": "3FS8zixok87wFktyxjhcPybFrnkMSpMMvviWdhUmv7TT9QbsrHHjXkSF41rc5aYZTstifZVDYiL8bxBrXXDuap25",
  "key19": "ML82fWeVMbfNW5NtRXePz1BGoNxHUTMJo3Dc3XbnGr7mQdCT21gXvQaysu7CWjXiutarkKop2ZGE1a6KX6QFCEm",
  "key20": "VT8i8QsR154Kj95p3Cnjn4YDZmqQzQu3g7wJ7Sqs8M5BHxcGnnWaEZvLpDyswsQQCWt4mSLGkgo6MrzuYFvi3MT",
  "key21": "5tHxPb9tb2BuP8WYKg9kaY1ufAzKQyNfJ7fiafn8eEFyucuYYW45LYzdNEp7yywd9HfNzM2dP62rUtKDVa9wGBvf",
  "key22": "4Bozueo1n41kbEu2FXxHSwdfrdis6kusLW1C2qMBJaE1oYeawNwH2N15xYKQRUSM6ZC2KW6drmcWiVpDTGEkpo7z",
  "key23": "4rXQ3eoB2u5JzAYHdnkFyFfNxcQwSgPfHzRz7zPUswAjnmDQwhfN6Vp1WxmrHDZNLnfZiyxwG9r6zLznW7mGH9WV",
  "key24": "LYUiXuwzZPwJ5DzQTDxvz71wwMWUj3ZmKeQDcAJbPJ8YWrvF7y2Pz6yMPRfDd14qoZ74oFxW1qkMSXNsaFwj7xD",
  "key25": "2qQ2fPhvFhzLcMNCc2tRTzgDTofEFTwqpBxLu6jRxW3rtFd6oXzi3fDu19Kduosp4aBjCNmuJdBhqRhQ22g8cLvh",
  "key26": "4VQXWeL8ttJPbRrgNvkfFF4JwYo7nLvuXbwM5ZiD7NLmRHG76zR3ufH3uHMuPqmcXSCwT8wAwAn1XWkuSWbTSJy1",
  "key27": "63BsJW1jfmLtQsFscnpFuVD2SXePGfFTPkSHD6QA16c1CWofHv6PfGpmtCckbYW5jr2FihUFuBsP29YaTS7MBC9H",
  "key28": "51YUmNgy6TZn5eQQoZG11GZNGKipNJyCBSxWYcdC8aJKJKic1WwGdhDRthhEnXXt8qXmoPnerJQxDgjXFmSKn2Pd",
  "key29": "2nUPvJawWDjqZzWGowz1qjxkZcstBxDn3DgHC8EXxdErAmEWDxwVF1MonHEsKpMj3HEhQvHkEw3jQhC1aPbPbWSf",
  "key30": "3vnPVoQq8aCHAQDS6Naq2EWcBTPpBZB8MtZv5McXebXXfLztd3beM2BwyUoCVvunmLFbvgsqppn7WzZiy7FmYJm9",
  "key31": "51kLYKLS28NnrExPPHPehTDDbVVurbzDyknQXQBGTtRC1s8kiSpLkFKG7xKVr89TiMLYsLCHPnBzeHHigiv32Yni",
  "key32": "35tNZrhgKo8FhwZ1swbCsiHETTQc4r18NeE59e17cK1qTEVsomNWTE3WnzFFeCxjvDpX2bETkHJZEAzHEa2AMoxY",
  "key33": "aSDaJsa1wRHeEAEsQus9p7yxoPe33uxrHhhuYQ6X5eaQTyNxWxUkaJU9mChT8Knor1NXWNqWRyB9fFxW1gL8tga",
  "key34": "3zCHwohD6c7YxPexQokrVgNABNtV3yjRmghcTFyYkwdZbXFsvmXWvBmk6KgwsPVgbLg9ndWpNoBi2UoPHoRVRm1S"
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
