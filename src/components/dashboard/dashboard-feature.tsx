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
    "RQ1Y6fds2U47o2LBdDi1WbCo25Z5iiJm69qT4gu6dA6fR7hmeN4SchoybC2YGdjicP2V4HNyfP5ER1fVVEoXcs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tuUayzcen8uG9y8wbUDPfcwqFKkifEjquJ1rrwPpCQxqZSJV6W1iv1q4XrFkJzVxce9zctrZybtL23yLuqZzYA4",
  "key1": "dTvjGX6BzkYbg27MgL7PWhFzEUbfFAJeuxwKnkcjTs4ucQgQ8Tw8zEjbzDFuh3hsE2RktBhNrwVos5nXpmA67L2",
  "key2": "65wuccycH9wHG31jokQAGwv61ZdCS1eYhbB9A4YzdSPc2Jzz7dmt3PvcmwuJjb8pWMABHzkbmQGCKrqEbRn5ythh",
  "key3": "2szcUNyJquS8KxzbmZfhwRV3XBUzLrP32PsPwFNoDBdFdraEH4vPCfqnVtKpQ4n78FpeG9Z8Soh2S6dCsHanV6k7",
  "key4": "3Jw9hHFHXT92zxE1Y5ziiHW54msyF67xQPo56dFyKGtjE3btFgSCm9xWT3BEApjHiCEDef9taoRTRRHxHQ5n6yUr",
  "key5": "31WJFRbZqPdVFohpfugQFETh488REtScyaCdcmYrVayHttG1WfwYSWacsMssBuaDEeMotHFQw8n6W1RWcNqPe23H",
  "key6": "4Zy6H9rtjB2NDyKjukFPUMENeqcAXDXMrLetJ79QuyDjsc1SQGPMk9c1pL9M34dmiRJtrq1koQNsHCVT6Tfzmg4q",
  "key7": "4XBLfECC7LFMskPozz6Z6c2UD1uVr3FaqJgjWa2oRtbe7caTPCsQRGK4S2L9k6D3bDSWBU71NafdtZgXcXMfgDdL",
  "key8": "3Sk3FiEgpiuz3BpxRzM1DFa9X6NSPHJbLH1if4sVteXXa5MiL86iQgy1tU8W7P8c18m8QycVemKDSBNQj4CCrSgQ",
  "key9": "3MM6HUCo48EX1N2eomAMJebKcvXypH31C2qiGCZZf5RTt2n6guuCswB7k3GnTUdmtLWn6ZauyMdrRznNJVp1NTNu",
  "key10": "2PX7bfkUVKrFEm5boXNCHtTGkmL4CCQJx9EykkuHovbNT1gmJyEeE9wGehooRQCQaZWHJFuX3aLg1E8bs6o1HAB4",
  "key11": "39HoWEkv9MBcEhggSM1vASs25tCh2Qc9Tdu4H7BVFhKQuiCyE3yhQfx4sifYUReszQPzQFuFzFdCAoCtccVCXfj8",
  "key12": "3i4G8ufm6DQesdXMypFLUMChC28gUwC85heYD71TPDhAYNTnvr3yhLxhoenpm971TZiyb72dXoiP4DnFp6mWr1qF",
  "key13": "3tND3qJKRFnZkHV4qLkBh9GmmivW7qZVr6rSwTvKZ47txbTGWjS9QaiEvM6meVbZoFe6KP8tS1dSpMaXTpJS1bD2",
  "key14": "66v1b4nuWfvuCoErizLWRh3vkvGbvcCux7WGRQEdca3mC5Bdcek43kNJR3JLFfugsk94mr1Nm8ykr6yu7UZAP6jJ",
  "key15": "5NFDQXh4T9mDYz2vrEfcBiAs6YShbF1KkPjd4s3qc7QZ9Kayp96VtiQ38XvppXoJ4VVpQMedA1CfFU6av3HeABow",
  "key16": "512icpDUYHyz5KEQNr452n4xHueui6p7mRHSHoPSVbKzuQybKZ52khinywSzEZtRYMc7WsENtHXw1A24kyUVHVeW",
  "key17": "5dicZe2J4LxzvfVfDdaRhvBSrzko1HrKHCFKLgiFhwz5dCE5dkNTNFZXzw8TSRbkjhpE7TY5a5LNQR3L4FdDYgXZ",
  "key18": "5kJG4CBQdVESGttV3msE3dT9SoKCYLxtnmF5hN6Q2XXDoxNW7kxNaRwNGjCVRrVoMrkdgts13sXBFLriTuX3SFpE",
  "key19": "5UdF2GLs6tgZyuKiwhiF2upagMSFYvPFDVEsXr4B44fNoypdagM3vNUULhPAB1uLg2vVoGJpJZmieDsj8FMfgQKp",
  "key20": "4yapEu8giHuadHdAcqE1qK2PU2kR4dbJmBpkDrcGLfcB7YVT5VV9xN4t2S99RxtSQunFJu8aTvDQZac8HSE1wTyS",
  "key21": "5S9s18H1NP9VUy7dQjrej3frGz2buaMCrEVzAhxjYxZ363JMZqyUnQtZ7omAkSNgACVFCj8x6jnmamiE787YtFLy",
  "key22": "2Nnzw15aXgFQFwe83BfU7AYkUb68mi8k4n7egr2RJiMXYvfryRE5HPAxnct3jLWTXWbRHzr2XzXJEofoiyt1Wmvi",
  "key23": "3T7HBRbnF39acSRNQoYaNaUog8ADNWgHYJeYpdEQHU27FbccsX94VhQs5rmdAF3KQZLmiFZqWs9AijJ9EEXqQLZ4",
  "key24": "3PePZiZGYKMMpk1iudi2Bs73RLXviz41KLvsEz8keAVAksAic8XauWRdY6hLsToM6z9syd6WPT9iQN2UpcSR12kr",
  "key25": "3CHrq78yKjy1Vnr6aZKWiHAM3ZoCujRExvjd4K8hwLkxhZnBapPBWDuFVtyt9nnnjAckaaVz6CfoUXPyuKGLeJio",
  "key26": "3iRN8q5dfaWotWFPi7mCLHCTMd4H7KWEcvHLJxBuBp52KbVBkPHufzRZgscf2CXD1ABwZ2rBMN4nNoHHtJnK6AAZ",
  "key27": "5gcaNaGBMLoWyZ3TbYjCq9g4dTP6EQFf2zwaQyW1FkTxQGbfX7oMRpLsSSGkthyUn1X71jgmUiXLyxeUmhXJqd9v",
  "key28": "439a7q2e2qMvs7dJEAML8t33AAtvTw6DSRvN8LCmbJqtrhSn9UQbGzqdh4t8n11FRnj5v2P717SgdABKYhwc9Z9S",
  "key29": "CXbNjmmB3tHMsHBCd9dUtjYfnY6DMTzD3wpbFj47tnNVsMEWdPDiy1kZgLnc9c8Qe81NRth6trNHACmDs9ekJ5N",
  "key30": "jsrmN4cKdeAgQFwsW8iZAyAMvBEmLJ5qK84g5cdhgj9dLbxb88WehiE9d5PHughdXvKcSGP9RaTfGqmXKGv9wBD",
  "key31": "5msmzZeXb3pkoBqnzMWt6s3vL7CocvTn2LzjN3gAvW8BH3tLZBrEmZfqTx1PCmtk3VHeDN5gFQpxqXsid9oeZvrh",
  "key32": "3der9fxM3Eb4cWsyPn43L9JPWehYVZbL4djP6wbpUn7bcFiCVV7n2YbtFjkRAscLfoAZARddD2EnKvHsg8dAHUqu",
  "key33": "eChVGuzo6MxjTcKmG6BmqABvBkWEVPdbQjQHKoA3GWTDrQnXaaM4ArjZGUVSwKB8JoP1EMTtEqs8boxrVXrGqag",
  "key34": "5ntdgDpX2Nc6c36vBPJwawYyCrvvkpaNd5CAmCJYSMSvc6RZ2SPTtypmNd5XhRnCperXZ51Qsua6wuycboaze6bg",
  "key35": "2N97FMk82oX2SFMZpEtQvgLu6JGf6Y66ZUuYEgXVhqjWyWd8QHSjwVJgiQ9hNWFtidPtGNLpjNsjJb18aJqqnLzj",
  "key36": "jBDj559EZ1rAabDvLVFJmrAJL22xCigR3t4upbguB325dvHgKZUgwETjbFcAMYWuqSaQ7e3Xdgy3nPdMyRjZeQQ",
  "key37": "4GmVpQQK5XBC7Y5bGx3dksUZojqBpo1qRLcUhg8ws1ZVixYyWExa7csGWKec4nxtLXpYMCZRY6Yp4VWgibVSGwQ6",
  "key38": "5YrAq2BFG23UyG2EsGAw43XCjvQmMVvc9puHhxBdnYDbstuMfNeupWJvCezvEN5fBpEovPiRgovsLZLEmtCzvdyL",
  "key39": "2CTKbyRF3CwTANZG3fkNHHbYbhP8b5SDfC1xbyJQrk31fuHSZUoyLZd8z2Dh7QgFTdohVn7BN5pGVPp5UQZX4d7E",
  "key40": "C9HL5ZGuAm3oKTM6EGUnnH2ya2fTRwyxrCbENKzZr2um929SBeoeS4SVjQLK86KJMnnMF6W5G1pC7RsYmVPHk2J",
  "key41": "4UWvcSPGDutf3gSTZepqGbNGVWieWJsqkeL1CNGJBNxgcwzWs78RWNewqRR6ypgtxvyrgh5cnUEHhZMM8KNtUZdJ",
  "key42": "64vBxP4ZvZ4cQV98rmbFTYryAiKMy3QGVnGTrmFKkYmqNLvekhfSxYqFWfPAqPKHfRTPrrCaD6LwdejmjWpPGKiY",
  "key43": "gYZ2rvbpzP5oUjHty7DpEZTffbBTCctBrxzCR2VPnKhvHumwSAQaLPbUva5c7MUnEEFGhB9Ts9xxjgppvpnkbZW"
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
