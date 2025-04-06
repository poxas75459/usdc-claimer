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
    "5r3RqsEVxUisLubRW3paHRniEyzB8j6eHaMY2J1ArnxukG1sY7J797SJjayu5HreAq6SU2wYqw22Ww4rJXr1pBxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFE4CAegU4k1G8Y3coHRVZCu9tyHTv6zEJEWkRGSKDU1SfsxSnzBDa7Jjo5LHtxrKJziGtj5Didn8fjx9Y9Zvox",
  "key1": "4pr8PayaqAwYd7v1dbNKPBG8t8hSkwHKqVu5M9c9LcvYggFnGfggXesjziMRCSGJwoimkxebpnDdkuFmGodRngJr",
  "key2": "32ZkGyW6vXr3n2nTXaz2AiiyY2SGLve83rAyZHoz7Q3kug4BT68sLJZd83uj1cnnxzX2ppyjXoFH6E3fVmKsSEnk",
  "key3": "2UA64smsxXziQ4EUfajV8GjAQqaCLVQ6dJEK69nViPmp7HycAMt5UYL1KEMWLLdJ81YHeJGy4qRxs2oEZpk4hyRQ",
  "key4": "5AhE9R8DRn5AMHAckRDTqq8hEGcYqbB2RswNX4pDSSrMB2SDdosekckQPCo5uNGMt56BSwSYEMMoTfKncAyamJhx",
  "key5": "2cz7Hoh81ZquDtYzxB5HcxjCVw2P3BRAGA6NVtg48bjeeMRmk9UqUjTfWUH5Pqv7zK5QN6rCvQeV4aJKngsT72kX",
  "key6": "PNoiuXbNptWK8wsXHgMhF9NseEScPNEREtVYBB2vEwiVbaRDYJ3UQLuJpVDYTaBDgyV2NF7F8LANyDsuu8787gz",
  "key7": "5v4rp5ggezFmzkqPGWSAthzxj1ivUAkVGWWJ5xxTEbreDsNAMLy8vftERFsLQSFtz58tXSwGSpEfEKCZVs2xurpR",
  "key8": "4su4uweQJbTczfoL1zkP8Detz77NLg4HoyHbm5frKxhKVvS1vnmNAXZFWYrZ31h33XhNy1oChYri4Cb2MGondGn4",
  "key9": "4DuxeLZVe753oNH6ok8n4W779C88ENZbB3Yp2fkiABPCRyftMpH9APEtSy22noDTa3VXH6nBfjL19k8dkGdFXizd",
  "key10": "PYG5tbnWLVHaDVTpXkMmVuUrEce2p3asxqZeQBLeVYjurZajNFKtcTe7BU5oQoeG2McFFdtud8hoQ2mwXBT66kZ",
  "key11": "5dSXhXZPaF6EaDDkPc5BFJYnKjbcad3xc6Yqag49AMjcRzDw24LP4gTrwFah6pYnVZvDd3ciEmC7q6S3e2gqDtwG",
  "key12": "6671tqv1GvNcRqV5DBqJnLTqiyypuherVA9ZvdiVZpkwniDYkQwCd9pXT5v85DoGaoduEiUHDdmibG6TYaBGXvM",
  "key13": "a3nAMxuxcXsRXbR9okAPpzoRN1Lyu2oJN6tjLdtn9Jzd2iP9JYyVBeR7T9oe1Fv6dDHP4Pw2N9134fyoPdZzAvF",
  "key14": "564zoYZcVkWXaP1yKmXvW2GgYLUrCBjNVHKspnZfAFEQtUadJqzpioKT3XGLuMt7k63NAnMaH37oQbMxfumsnLov",
  "key15": "2D5GkCHbz2MqAsjJQYgzfzZ13HHbmgrMG1bq3TE3eYcMtFwDCmfKi5DYvaC4bL7SZsRmqUGpQZckfSqfnTioDv1k",
  "key16": "UwocEMQxSSWRQwSQ7MqmpqwQSPK1YyHf7yavzQeGMfLDj6BNCXkK8i1QEZzMURdqPypugCx4aohVHBcZy3B1Ukh",
  "key17": "3jXfUMiX6UfAi8QhMuHxaX4HrhaKsmwtRV5MsnP6m979qBtWVwhQpjvgLWyZuZjtmKnFpzEgDgZenHg9WU2sbcr9",
  "key18": "2q8Ko9XSqzKFHFwtnAZyXwJfezcvQGSiegSVNc4fk8cH8bvLUJZMPA3c1WauNXHue4XixVJEjAb539Q8pbjNSTov",
  "key19": "3sPf1Rqi73QHe4nJ1DQmYDZ1FPEkd2Qwv9LcXUACFLjkrzamecFayXHvMpaeMq9R8Ef5am9ppx36q8TfHDKmGVFq",
  "key20": "2YW2n7eMikeMXsVmM3FYveKgYPJETbUuaSftMwQa85ooLeYgSfAAFcR7F2gdGQBhuHs72BM7Ztx4n7B6TtT242dB",
  "key21": "D15xA8r7xvQ8KezsBYVDv8BKzX6MqLRAuq4mPAjyWwgXU5DHFvrka2Jqz46PNDDZsQB6tNBvxYjGsXmsnRZskLv",
  "key22": "4b1NSYL4HbBspK43WwNXxwS6JjzqzUGsqAKeKLVUZ5YtbWfrmw6ghioS6zYorrSbDQU3WcLTWogo3qS2dpFCCHij",
  "key23": "331o7Ynn1rbPeccWLgRufnnfcybfvjk19WotXYWgqDXZHGB66NjWidyawhHDJoW7ipf46Qj9gf3aj7F8uRZLwBo4",
  "key24": "waJbaQTv7F6sNLRcXSU5Ajfm9vjeaowmU8FVN5mLbiFYrGBDTSwpZ42nAERVoBuXeeT8gtz9GQDVL3UjeAnzKFg",
  "key25": "hc8L7Vsoi5pxPyTR6dY66N9GSEUny83FzJ32xF5Vz3mxCzbTuS7vmjjPBuiz4qmVMSKwP9635fUVMxYTwB4az1D",
  "key26": "2UchdN3JLzxtc49Hz63HizyvhVrvsmkh1PFn896yRbJUBHGPUWRxxHLgDNLGHfe5Kjb52EFXrKFnJPjt29rCgNL6",
  "key27": "4nT7Gdi8pU21zZLSuGKw5XDh5Dyk3fNFLWnei4YGoBzkWpbq6DFY9K7LHJkywEPGqQJ6c57bvrYv61r6aKv7ayaL"
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
