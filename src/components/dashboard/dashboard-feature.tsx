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
    "44JY1EoUqgKVW1Bt217jRxQARMc59z5QDocRCYE79yKnyMYnH8qctJS4jtifUJKK28o2f2eWxvf8Wcc67ndYAjRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uJ7YEvXJNWUspRQPYtt21Qvpt6Zf52sCjgfkmH2PQJz9M7QSVcgd8MzhqWxe5ba2iUY63PGEhfsU7E3yvDx5YCB",
  "key1": "2t46CWU3ZeoXHnqNFzdNvsEZHhoYswXTjfF7mB4FiAfJi3dwv9e1bREx2SupgnKHc7Jszrkp7F8G2o1w2CdtPXpm",
  "key2": "2xLqryxvv4CxdNBpXK6j14Tn4CyqgQRpP51iaNBVdvqcUrfd1mTjTLYhXn9nwZr6jo9VWUJoqeg2osMmZzQrC3an",
  "key3": "2nABsbraihVL92gMgThRWykYJzhE3KpmvURdKn557xhExwhqrPr1x8X3Kt8cG5K9njnk8AJQCeAiATJbFnBPEG79",
  "key4": "5AZZdA3xVBttTQ5GCT2wzQgtiEAMNUSv4VQD16mE7kpcPsTRmtBtyRHyWTWW1YSGqAS9twH9mUcwstW9JXk273py",
  "key5": "2fzkfDRYVWUM9dQiazXMThPtszdtuDSXYYs48CBPZDTjZdYeVwJ5zAhetJKb9M5vVro8xputLmAV9eKPdXs8iQFi",
  "key6": "5Tj5k9dedXLEo5uYRti2i12e4Ym8Z4LBF6ChrCDLThkGdxJQQyCv22pxZLtPZczTr3KAPdrgna4iZRmqZ8pwUoSy",
  "key7": "3T4us2KGmRPdEbm5ZiA7ucYa4z7B4LDereQf7pTAR9hjYGcBAAE1nB24c3gFx7qLdkusR6ZgpYNXgTYUCBcypNJc",
  "key8": "5tnyEjMGJdUviEAUE45EJ1QuAzGcppoYwLMBz8xg3vPUenoJgkGrjDxmz6yPu17tTVZUwL2xuKAku9PiCY6aohyZ",
  "key9": "2Z3WXjwSS1Qa6z1WuGh9BNxnJaoY21t69NWkPeB3MrUc3215qFRiXAp98YTK7H2qKEmxpjq3rA4LBvSzQAvjfjvF",
  "key10": "259Z9MHRvvaTA9s92nkdVnktjzPd9Ga7XfUsnvfM5LtmPW54DNh9z92Rxw9fiNPofjfWKYh3pgp1A1MG1iiuQ4kR",
  "key11": "568fRk7Dm8jUZnykuNkUfNvRP8DrnA7Lei7Y5LqeEYLggUijQcMQ3xVY1F1Bj7fHk3AWA1Jm8a9MJAyBHKW8SSiZ",
  "key12": "2os83VhLfFVWVuwVMQsusDnJEzV7XoH5qnTqCZ5x3CJ2JRBuRxJ6TjvYBFW5NxZcMV76vKBZzhCReNgJ1jXAbZVA",
  "key13": "32LeqSNwT7KtGyftWm9Cpjk6EaMoEMpAs2hqhZhGQuyN6iBK47XrDjXAX7bX84Rk3WYokQ2jfqxS3bTPmKTUVfLz",
  "key14": "66EcVD4C95Zrmb3vHdg5koNWGcHcAQ6LRXwhuqG6jKDnXzqepHHaK3LZqtpaDTfUkwpY5QsZkuWkF3eJyANU68JA",
  "key15": "2fJmW7MoPpDXJtwfEPqLy1oBiUFFBvUH7GMzUJuKWq4igkRZNySZDiUoGAqdvuNN7mhG5P7yJ91jJXvbrXW2iNeB",
  "key16": "3MpL15V55aCQg2y7h56ENfYJ93jz5XuNnc8YpsoLJsKQaZzXNegKgYfZSBqAp5h4XtSuKZ2epgDNmR6sJyC426Rv",
  "key17": "PiQ6GRG1V2kgJBJrzXobA3qkUP4B31fPsDCix3hjByrVexTfwS8JqWbvhwW8XL1XWHig1obNPKvFmFkGKPm8qGx",
  "key18": "EYjPgo9Xzv7r8cRfUewqm2mWTE8BVqeatoQQeu93XNTv7PaMJAGJagY25FYRWTgxDCbJh8QkvZAJG3KHamjubEV",
  "key19": "235xUEzwU1KnFfvwecSt3CK7mdcxyRoFjW9qVuRZCeeYaq3JssSKEvsm3LDRSM35XhvyC7rL9g9e8oNc6pAea2wr",
  "key20": "34CmEDa8PMdB4hmHvZNAJppx5BwYRfn3FUsjCuPdLRm45XPJELoZJ7jo2JmyRwPmrCUJoToof6Nsf2QKKks5PJKY",
  "key21": "4ttTMTFioRg9uwqaVeCtH9mWdadxDMMAxSjwsBV2aqx6RmXeigxT1KrAG5kqBftvGhNotbsiGVEyC6fZKxdTXNw3",
  "key22": "5oKmyyz3SsVN4dsT3XJbsMm2Gyu5fzQFZxm4KhGbxEYEohN5eX6H52Q9vFVv83TEpPwDHYZyWSK8zr2NTjoyLh5D",
  "key23": "4EiUZFmPEq8mY9DyKTcyDc3Q42TSv334Sem6KLVerBurr9Aw9KzXtGU4gutMCHZ9bUm7WbiieZ5MacWJSnQPSPWC",
  "key24": "3MqcjevDJm8WEbZU7XEem4rmSEVn3Gs8EqWKpLw9UxBdfjZ23NtuMuGsBLV1nukArz8tKRDzTsqZsqdWdckSxnrX",
  "key25": "2sPGFBkwdR8Xp8DhLj8mSTdb2MhsV5mnoRsnpzA6B94qpLTJY2QbjseW1c8wMQ7973VkdkUVazzeXjiPbR7yyJJN",
  "key26": "2dUUdZDJokmxr5Mhsfj7wvY2bwc2stbWCaQQGxpoUK27mYP4W53MgFytWSd8emdjGrpVBdyr5ouHcscUhHbhTzbw",
  "key27": "3FQWEQaA24RKgGtssTeo8PbTVonqBGRqwRfooJwD25ug5Kz6AjhrJLCEw5Jb4nC6Ls4MxjNqcVHnSmGi8iHuaLZg"
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
