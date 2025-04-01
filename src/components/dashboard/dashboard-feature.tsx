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
    "2th4hLt7kGgnCzUpS4UiQfGdN5u94RutZs4PT63rQN9CyGS5QGvwupPseVUNvywxQawgxNXm9avRuH2wCmQ6QLaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4duBxzsLGBrfdBNfi6DokrhqnbrR73arLQBA1BpgvPBY3S6K4H4NSXQGF8FJcacfF6yhSbjn8RmjZeS6CCo92SLV",
  "key1": "4yToSow7gPoGf3MhFvvtcB6iQMe95ybDoXxDVNDBdFBEoGbce7sPSJSS6h35hrvj1XYAhF6aNr2DNw66LbbPHqLm",
  "key2": "5YwxhpaqvbMgmjQpCQxoZEX25YyfKHU7QVbY7Xx9jHvPYZxP5E5roCYjuqgYsv9rK2bGre2K5LUpRwLQWkz7ad7V",
  "key3": "h6KyGpbe1J8KXVZDXc2MmMhWmT5rycyATK8Hyq4zcYWNYSLNCr56ou44KWk61QVzcSm5VwtZX1oBW8W8LSuTGHq",
  "key4": "17TS4ugZ8uDGVRtRc3uYy2n1RErDU4JWHwjcSzRc6FN6d1b3HoeE3PhukzRuqgZVN5ZWRqGwUKW77pBCpd9ZmHi",
  "key5": "2zwSZWVetd4SVzRtJ9VURpP1gcfyMcLUcGi2b9Q3edppT33PHE87Q8WN1vDXdRjWvK2aUMfuViD2KXNxo2uGMFRt",
  "key6": "2rj8PyTdxuZMiT29B8zEWxPHcxyTQhEz3c8K4WBqFDYDqm4e49uaawsWTtDM3vkVLjvUXx9DDzTYE3ZqLLnG9CCF",
  "key7": "4pXNbWgxynvYiek3pqt9XXxa2QeMenRuDTV1g9cL3zqqpGGHoYSFkfrfo4MKC7AFzfi1cTpysUicEkqJsc2yUVZu",
  "key8": "5cAtKeAR1jfiWXLPBf9vvkTjKep8V8wcFYg2ncpveeme7uecEkGPkwnEHnbJmszNLpqHMfPpsqvMQf8tvVWoVcyh",
  "key9": "dn7g2JwaALNYsePn5tYNcMVf2Tsxs63NbaE8SX3mYXxDCt8zwgrqP9GhYajtFa3mHBCiDxstgT3ea3eyTJwfUvc",
  "key10": "6x95wmgQr1tc8W2MZwDj6xfGfcqLsWWBspR8tvH8hgHroPTW9nTARKoDRtQbEinAkPfRMqnUveLFbycdseYftYe",
  "key11": "2FnJsPhETLdF6u54GUAZPJwohWbE7vHZXBYnrq849osn69oakvYi9KqhN5aooxMJvHNz5yfFU7yukLT8hN7Tz9Eu",
  "key12": "4HJDKe2KqjmcrKZrv54zQ5aDNiS3ixUsAun2hMMnHSZHTh6mocUgC1VibGo1WzJJCn7MCh87BiFz9fMuuJuYE47N",
  "key13": "4xYBkQS2jNJ4rK1NwDnBnyrzkA2ZNGLrVDBWKZHuubtUrGJx73Nv4EoQ91qoa2iU8JrzjrDgLUkitEvq6AyPiBGG",
  "key14": "2DXBFsNdRF5N3fTj3to9jXe6jXJezwRXCKSPvv9kV4Eqo3rKKPyQJSbAAZSxPkBGQFAhCjqwuLd3XDMxY5BMTEwL",
  "key15": "3cfRAUFggJKPHsZyEYyxVKBGK81BpVSVf9rvmh6csF8CV8Ev52RmCxkXshZkoV42QzZ5AALWS2sN18sHmpRF4tEb",
  "key16": "3ki3hHmkR13CKqHL9tgpiNAxNNrRJrPM9AGRv47GQmbzkA6NxUgDoKxHwyYV7Azf5g5kkC2K7qkzEDcBoJGy5QJa",
  "key17": "5hewQXGKptnuz5TGhH2TUPxEob1rRLaQ2wxeUHL37n7mJRhe5wD9nKDc8vDQgkK4TnWic1qVBEWdYdStFkaSBZxJ",
  "key18": "2rsrDKq9gxPUxc2g6RhvwNxZDvfBvtdZNLVqHiVLppBz7teJvbg1mT1EDDa7nfAZzvuG3Xrrp5r1LEvvdZGayfdC",
  "key19": "4Rc95KgiayUouiefTKAZ5Nw2QNdDb86tu4K3DE4fZbHgpqVWPzDhyupV8fHPRexpdCHQ8bSuVKN87ZswNv37FC2Y",
  "key20": "2AJ2G78BA4saWXzPkqUHRuWvKVKPrj5Yx67FyHnRJ2LU4qcvQDF6vFemS2P33NEW73cz5pgVzp24wJaTqbMhCDx4",
  "key21": "2ycLPWu7tw2jTGB35yKLpWdk9hvPd6UXamSq1BBPTNR39c6yibZdkUqxjSsmjUv17tHwfZ4w1CqAn2gvtJpjMdCn",
  "key22": "3pLMPZyzPHZSYnskdKgGYMftDQhFQnxE6TGTtjcKo8R7hJgie4bXtwUkobWtHNAFPHxMWPWK643iK5qg7bHJm1iF",
  "key23": "55LiydUicizcasxdhStsAQsfAZg58Z5bqtToJisBGsujzdRgPpPYLduhbhTtD3hjmaxHWM9SWxpm3a1qWFqQJjXm",
  "key24": "Pc5QzmA5vLhEmbuYERVF3VRV3NoFp2Z9i7bu856hooRhE8D7Z9BdiiL5YNS2VGrZ132fhj86us8A3m16dFkwLTR",
  "key25": "4swAQayjj3An4BWg21p37nXNMiyjGyZbJP5ogBeekRULuV8etKujMvAF7hxzSnWrW67VkfXZRqUxCwMemcsz2VB9",
  "key26": "ks6DSK1uR9BvfdHusuRVMtjC9oGg68pqsAPQ3sZYYt7KGWFQDKtQD14uSrTLSxNFhVu6pt9eWPFx8R9MrGZS8ak"
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
