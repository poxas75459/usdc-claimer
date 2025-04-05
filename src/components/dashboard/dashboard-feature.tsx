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
    "yaVUXZTz33TfegB1HS3yBrymuhfar5aGkyAQnkQgeRnZqYbQowkdquB8cTisK4vdKk9792vGh6SbBqTMydGoNqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38jY5AWVe3Pm7jLdmrKo6x4yoSA27bjPy7PBF7ZSxz1aQBW45nSgpCk7DAfwwqWEfDGVdKwDJMQRkqF9HFhVZuPo",
  "key1": "3hNYFbXV1XFYJsMmAk5LtXAciH5SckSKPnp9mybA7tx5yGHUNhfyrL4twSMtHGNiVUcmzXsi9ySmymQoWqmnoRky",
  "key2": "28TWmFGJNskkW8iwNdkBncX1Xc2dKjpSHovyiqtUQW4AD9Ae2QyRQEM7LtsDp9d9jTBCxHhsfW2CEHcqbv7vLRAy",
  "key3": "xgr5PmdTc1Q2nfiSGWu25sA4hVw8KMcuWgUAw74qvbsoXiFgyxWc7XiaFaWn4w9xXJWHWhDPDyYWReTWsvTX9Ho",
  "key4": "5vm53tqWtrskWwuZjcSemVsX4Ym9CDC1KESiPrN2QhQav9YzHKD5h4WkpY5rqUjafNo3kfuoHG3nwwuorqzNw1JN",
  "key5": "5vKrmzGUU4pbZEJQjf2TNqp1FofXHEiGfRJiuRwY4u9prSCcycF7ztrBwrJHYJ2XozufL74xneUzhmLvFtaqFjZ6",
  "key6": "3GMSHEgrPFx5EZp4vJm99sBc6o32h3hV86kJQZVZQMqX7434kQwLKpUs3mnKvCYJgVT17FvJrwrk7PumgzWnNmpr",
  "key7": "5f1r3REXVyneW7YAEA1hAPXvDtDy4MkLsHTJd5DPt5QCRCLpEbdfXykYve2W3jbqqqhwMPu4EMCXqKdwiJJm4BJV",
  "key8": "xUASoQF13Gk7F7ncRvbTEbPAoe2K2NHiGKpKEVHHox2bveTgasBypfFZnJarBYg3S7jLhxRMBLjY9y7sbouYHPf",
  "key9": "4r9GkWfFwdmqxxbkb9EMwmaSKhNJE13eDbXooomvYxyju81s9zUCCzYyVUBZnCfwN7qxD97o64EcMqhN2ekKTp7T",
  "key10": "4R6oM9yfKfwLWZCVNrLzbJwbz37RqxqDw6GeaGK2MGMhjFvqasZ9rHb8iQ4Lv1osQiq4N8FDjv7dpjX3aZRsFtWC",
  "key11": "3hFw4ViaUbghN9cJaRgNBLBFpLK24Ea1ePgW73ahHRG37qaM7vSqPQY9gK2Z4s7W8CkkSpsVtiVhpyN5gnnm33tq",
  "key12": "51enFp7ZzdoxPdwFZC9BhxT2puK2bZNMka2aA21TUAnGz3sUCz6mmyaRTeEBMTQSaSAWk82HDkVAK8n8qK97XaFe",
  "key13": "4EsemY69d1pVV2CuAxfaadEgZT4EZGaRRP5r6t4gosiRd33KL3xj4GvSnH3qaeKf9MvUy82kCNRWo9XNfgBaCPia",
  "key14": "54piW3mtQPQKq3sUbJtb8hSLZVFwZ2ksHMewsT9gMRmJ5Rs4d9Y6u3tFn7DLZZChZ8Hmc3uAxnd8dNfBKUZzcwP",
  "key15": "4mccY9WNjsXCmtX8RGEa8R9sXw6ZYyXdDYvcgugA35ewcpBfU9LQCqj7tsjF5BGDawVkemzAD96aC4otHJ9Y8mJu",
  "key16": "3uepUuvaGuKM4euAJbLfBiTQU2EWb5Fh4CfLqNcVEm4XNxezZrWfJHGEXA1jvXYP4DwKTU3ot32tQhhoWG3GCgbY",
  "key17": "3inffGFGXF7LWH5GuKfsSUaib2xWzxza2qFCTVERoJoR8nyUiiXYHbzg7eSg5vtKrqbtFz9VsiWhEHvuUB3LvoHh",
  "key18": "3rscHnmyXc4QtqY4PjSJjsTstDnTWna1GjyrUfUfg9ZtLsugMCXMoAcqZxAgRYHH7siMXdjN9HQHupQGqPUZejJw",
  "key19": "4arSQujkHPFTELNb9xEgwpGq4amSCYdi9toBjfW2mBZW8GAx9mFwD8CJjpK38NTVeJ3W8xkDp1nLwZxDNFzkrsWU",
  "key20": "Uc3cxLrtGUVmJJiy8SBZiSEQes3Psv8RiycPZGdVWWt7d3gYND2rQXvf2cT3jYK6DKw7A1mamzejVdtNuhx3sbL",
  "key21": "nXE2Po59pRTTFJHmgKedhVyLCR1s6XDTiSxdXXRDiMaz2T2DgDSLrKkWAcF5fAFYbZNYsbWjsTM5yX9varFkozY",
  "key22": "4whWJ4zq51bbknfVZv6mmmMU6ko1D1bPwgx6jX3rME8X9GKohnLQJyNfL3yp3GGpoqRRqKi9vJNA57SMkfvayDbk",
  "key23": "Y4VhFDvJ8VHe2JMomWp9VCrtmhZW5k1eGixr3pQYVxWinM8jEHWqJpqMgmKohkamfe82rsFVNKQ1tSKiGd8HtaU",
  "key24": "T5o9jxGC9YFem4U7wRosqJ38kvvytChD4c2p9Z8fDhqabXPzDnK9pXGRvPY24FiY3XFUU3vU76auUyMjjys11ik",
  "key25": "3QsZ8hai87p89WRfSPwZGz28kLkXer6QMpgatW72sQiVr4Bbs883fwJ8gGXZVwmTUJVQx2EXZASrw8donVfkxPAi",
  "key26": "WFagjiuGTrJVYqVJ1J3FicxdkMWCjNN1BoUgqwMZhwibfn11cxiL9PasriXqGDWXU9ZZMfTaPhyhgMUuCzMmzoY",
  "key27": "3JSSEYrTuxfn3eaHcwno2ymr1KBZzVVjcdyxbjCXfZ67TQvcN1GdegahkUsfkoZngNgbBrzbiNHz8C1KThGEcoUC"
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
