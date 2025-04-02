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
    "4NNxJteyhB2ukzRG9GPnh3o3TmiusmKJjsqhTCgtM7gVtZxZwXYi5vVsigSsEy3xo9AeLBzCX53Zs5RNyG2YZYWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WrsW8tSziRMCTPMhWFXK7VJdxqMRVvhdxM4HaZw8pWqpbPUKyQdfvKY5x5uhdmkgveWiqn2bsdgNFUHaij4ZQzD",
  "key1": "5PocwgCyhK8wMQNpjpTfeZrvQY2C5Yj7c2qVRhcX7iJsWGA5h3DtjvwgVw5ezex56noPi4zzV7x7ugpyqhzPvg6q",
  "key2": "1zuHe79hAaQ5JwNDvCgjTuW7TakrLG965uy2Yw1ryEedtRtZUNMgdjWUCtvzA7PMdm9PaRAdnMUZR5QNtbP4jNS",
  "key3": "48YrPeHkEDgJC5f3dJ4v9pnD22T6TRhM2T8hpSPaJ5yN9K2c1ANb3JJUGAodkcFpy44p9eFPJGNdeXCda9fwYP1",
  "key4": "2NkNLJKM2yxJRZZpaxL5ZsYcTicxjmaS4VJ4XYKiSrEP7K4Ga4aiwMYXguX2Q93zRKde6veyEvbH4awuEs1qPxFn",
  "key5": "5VcGk7ZWGW3kU5DXG2dXa7pz9dYkhNo5Z2J4F9ypFw8pgfL5TJbg1zg4cex24YVpmac3FLDqbrajBKZjYTtYCDWD",
  "key6": "2RyjNNoirmzarLbrRdD4gwsKZNASHEfH2ifSHyUoxog87j7A9kudSURZxVxstQpd9gXxAFQ5jfkC3YKPYW1QUkgg",
  "key7": "4NBe99nk5ujPdEX5d4AGu5bbxgXoqvoK7avd47EZ81qxSTsPq4rFgjXc8vE2iW4D8FN8pmfedF8KWbkms8mEHHST",
  "key8": "5cDafxLD9RjqXrKRh8qMTcw5Dwg7b4kNKXjN6pMSWADFZRrp9D4eKFdv5sRKUHWc8vLB3NnXS3VHj2z6D1623TaZ",
  "key9": "48UCmF5ZfdKCC8TwCDC9q1mxQiRoqkcvmEmmRTW2ziZ9GiZrVN7N3XLgnJLDLeuVHSGyZQUcy5r8wKKvQd78nrg1",
  "key10": "2usVHuyM1Xk5Jf9tvaLALgW8jBgE8nrg7QppnqCbFcYAvqMLFNvsmjaersuxvwZ5yGr1CGWZTyYzVNnfc7Bo2uGR",
  "key11": "5Sf8wGitM7GMbzDQBabbuxmGw4ZP2JgecaoqbY7wrpYr5cBDMm2f4NzLJtwZ73fvK71Eba3btsnT12gPeWrx7WjK",
  "key12": "66pEjNUF5AhMCWST9jGvpiUpXAY1gKCMsUi5XnAoxqopjMNCwVsrk7vep8MEfVY29zji4q7NTNFQvqF9NN23aN6T",
  "key13": "2uu7n3hBCrEvQ4KhRa68NUW4dQ6E9uFT2Mrnzc26SQDKJ43i8KXnBy5RgcgySs5iKtXxEQkod8wdNQDwopZgWWke",
  "key14": "5tFxrHfBP4EyQvXBUpekQS9R6V5cJk1sp5VpWtKBW5rQJyGxd7qbPUDT5mNXGhuWhoMjAfeiwCf4G2xuG7iFQVHH",
  "key15": "33N4GmgFgkDH1k7ScLFNiavv7tcgCSGDJCV2CLj1fSh4ddmJqWtmjYJfRH8NYkTXPe9mpStv9YLhT5yuhy4sBSUU",
  "key16": "eFFKB1wKFdzfcFFMZAbUBTyzkpVWjY1jvm4dj169hrKtnSPPpZEg8hKqqiye4Nx9VpuWPiTU5dSckxt3aLLVjRg",
  "key17": "2bBpxrQ4AgKhE6rdszRjqSYGmEDDi4u1CR9XVhsGRq835wnKXB4g9eziYk4HAenMZdytAXh6Sh9pVcdv9LSYkN9c",
  "key18": "4831pWMJaytzzbY8B9kP27BhPH4Bu42xUKY9S37wbD3kygWu52RvF6oeRSueLs6PF4n4cmDae4oFT2ad4nUxW3Pa",
  "key19": "2qUyWFmyTSTvghqqM2Twhag2bdmRiHPkY8Qgx6La5hFUqqW59PZeQGuby93Fcqtq3vUUfZcC9vVKZntRCad2SmGN",
  "key20": "3zY85KHybdinNNs3dkVkgsRsEJhFcCtwqukLa6SH4xtooXQY88iq64Txf8UMwoyS6UmWSfGgkunFf5Am918h9C8z",
  "key21": "28zZWh6uW3bp2ykDHL29S9RTeexF7PKPrzX6RorC6ULrZfigNaa1vmvUXiiDmCLwpVi7YM1dboEHBfuNJsgjc61V",
  "key22": "38iACzXhhrC7UJBPJFtezJDUuThYuxQkZJfBmW4SdcbtZC5VMhLCguKFAKPoizwBTGkDJmsqz7cPkAbgPLMdxS1x",
  "key23": "43CjNJPxTXkJxhu6aafBb5yPxJQMCr4FJKDrfY53ZR4qhB6rQtXocAE6KQQncaog4Xn7bJZ3xstGAiyiZuWmfLjA",
  "key24": "2hEHGeyFAYZTRWUUhWtMpCTnX5JYrkRwLRBoGGRRBCLFqQ2R8WwQobyr4RoD56cURxPon6asctrzieCSg2Bb1MCK",
  "key25": "28WXwvhCyrdFh7wFZ8ayXfTyWtPEbnNwTqeENneRptQS4nLsriuDmAit3nGMNowDc9EAEqwqrwnzYHK6Y3ocoLyw",
  "key26": "3Qg1VicxgQDC8CjYwCvELpqr2o2c5KrCyHwrQKsGAm3EdG4PaGSg1WWPkuQVhmY4YoLy3ikphRG8pnDS4KMwpBiM",
  "key27": "xRBsEQzvh5btd8wPyFChCSSYwNmY4EaVeygYRUhrcs8Auxv96MCeoTRChSdida7rX7THFPjCeP9eApCrcsSqKuQ",
  "key28": "RZixXzredomF5pd14FGFNTpCeD8fYF6d7LafPbvmmDvUeUsjYaGvFZHGrMMkpbU7pACGqPots4CTAwRiPgCFh7p"
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
