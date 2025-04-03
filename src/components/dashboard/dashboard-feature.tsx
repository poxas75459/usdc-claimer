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
    "2jSBEmPcoCk3tj72UBUa1NaoUh3bxhcFNEN1Ga6vqXzT4aUARyu7ioRPNMBkzXQfm5cACw1hFtNu9m32H27GoAts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVWRDU3hj6hQu8baAoQ9fuRcRvSSQ13eXPQKeYcQzgzaTHbVAGTnF9BMVg5D2ESSbHxu2cEg7Dj12S9BzxXjN7Q",
  "key1": "u1RTaoUvFY7pZUeEPnHBBq2gDnEnusw9mWEtMQG4vuzG3Vx8ibkFVRTA1b9bCMqPvbxWTxKvFLqoiVjYz2VXH1q",
  "key2": "3arojb3fR2XmJ72zziTRrpLLM7MVXXwYCG34DfJ8pTri7ysYq1YkwKNbUx3gCtCeF1tFtoaAsJqhViSm5Rxem4tE",
  "key3": "4ew4h83TT7LzBwDwRJjRAWES6pFt67iUdZ19Nn6k1iZzVh6oLncbByjhfkgk3X81qZFixdJvYVJshmJmrmYk4ma2",
  "key4": "3U76VBmMo9tacyJdU255Df3JLLe1DWnG889aXtERo5DECqSR668ha6xgQk94gWqpmXLv9FJbvHccTbG14sTwNqGs",
  "key5": "4LcwjAkjoNqmmW7ewzMsxUG1M7kdQ7nStuxHGsh36UmCKWnd3zRpz3BgBYv3AeEo7DCQS34LWQ1ZFmZR1CcDhzHq",
  "key6": "31uxyma3ReDBHpABAaomRUcdWgRLxDiKkZarMSh3JLhL5qBnjRBmqjTte5HUVqVgHM8s4ENiU3B12jfrn6d8cVLE",
  "key7": "2Q5yYoFM2NPzSZ7KtqsRVskGmcmVYmr9Jek14ySGVQ1sa97hNDvqiQRutpSuJfZgXDzHYhsCTCpZtJLRpHXm1Gz8",
  "key8": "dsVzbRXA6yL6B6rwfpM6s9jNThKKLymL1vvVuSjucnSJ6uKVmG2K5MkLMAuUbspZRkDPQiKgD3oux7Wp8WA455H",
  "key9": "tm7cwZ96diaoZe7HS8bPd1MwXZHHWe1SvQxfbg9eGafaad9aNB2k8j8JvDmsa1vcRxfBZM1VPxtpoLkf3aMxT7X",
  "key10": "353ZrKbwNb95e4VCkgwUgyc8CPv3121gDfXKKZ66wSjpLy25AmY2g9XWiqFJ8g2teWP5c8mQLjHav5rbisoiJv6y",
  "key11": "2hRRry1XFbaaVBhFev8J2DA1DkbTXfeBDpCuqqP2ez5WLD7HSd6Ud38piSBXJXZXEiJJKJiZEaxNJbh3hobF94Ax",
  "key12": "uz2sGvogM7CzDergCi9cjUKSzS9AR9a1zJKfHbLZkAsuM9ot7PdbsA38nT5hE1ZYj3synJNSX9rxaD2PnZZeDyi",
  "key13": "36fs1h6X8GQEBmUDb3Bra8kBQ89DoYTTgfrCy2ds4HqfaTje8sGpq9m3bDNtkb3bJ2Kb5v5TgBqJbrJ12e3wX5GH",
  "key14": "3icb4mKvcfE2szryJ1z6cf9SUVEYBfVq3Z8KBhZstbKrmREtQshxboLzZsxTDw2HHCm6zwizjMFEEMcwitprsnXB",
  "key15": "2BnVNfiz9Ha1wu6SGajs1uqWyMQqGn37ysqkiFNJXUBSmCk7hMzoZpTGzKEP69nQpMauFh3dEdehs97rEyE9EQfB",
  "key16": "56kdJfZM9PwPdxbHUBwCNRLnsRRyhZWp3WQDtaRsKpdZb3MnSrkUi79KttSn1iBx9xuaC8HPqW47PSgea1yFoWMv",
  "key17": "2e8sjCWnZe215Lc2j97Bo7ox95agRttNnpJYigidFdpbHKa8S8riSwuzoSC594SfBzE7Kt3gjW3G6igPdVpuXVqX",
  "key18": "4CMGQWE27Hc2RhPtCTeCUKtKbNKafQpv2FrWipPxCwZck7du6bSnr8rMK3mct5btgjTZTDYSeNCTDSZDMLeA8gbG",
  "key19": "4eudsANkcGVG2Fy547da4aDeY6dxVegxyDfdCCzEwcDh4VFgNzqLjQnL2L2uYpJi3L7NEhNF2B7jAb4eZy7bq1aF",
  "key20": "5WZBsFMEWymto7prqLTUUjoLfbC2sWFcCaMUCRMJotp1GtDpDjFFLQLWGH45WfUuSPxffhk2SuYmiCabUpkrdFA9",
  "key21": "5HJriu55YDag24uBp6ne5wAdHvYm7gH13NQEip4Ye3PzXNYyMoaztW4EP2F4J99HyLP8Pe1URQ1pxtKcrJGka3Qs",
  "key22": "T8XhNjVDoroVFS3y9yuio26VmAoSKJMXciH92vvE9x9W8GWWaqiHeBgKHpUbAr8FNsY2WHiHtXW8byoX8b4J4Mm",
  "key23": "5vdHZV4FWT6mkJE6DMu5Hf7ZE59Lzsq1q3c9gEtFpAoRJ3sZBrqiBty3L3ZBW7JiBz38ztbXyHijnGt42i6cP9r5",
  "key24": "Vp6n7Z2Wh61K1BTUt1SSYrp2D2FWL4HH2naCw7bFScJUvjyo4TC7K73fGhsN1VZJgAYixp2bB4hHEee6oUZSLPj",
  "key25": "4sXhwxtz6S2W1yxVK2n2JJNRoTCJHGty7w2YAYo7zods4X42zojwWzJQDD3boxoWGwGPbVDmtoAq35xMiuVmqJnF",
  "key26": "5gCzQKCqz6UV8RE8twuf8Vfca3cQPy3wTU7wG8JDzYMSYL9TTtxQ9Uh93J2outc78tJUNQN77XUskn2o4woKQG1r",
  "key27": "FnMr7T8awRe7ZVRib2dzNtchpRWKSGNs2Du8Jephe1g94xCEDpj4v9MLxZAwc6dozxzLsBE2T23ULpVcWEh6r21"
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
