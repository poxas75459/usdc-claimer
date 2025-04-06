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
    "4Gb6BDc3dU1cpWDqSoUQzocuH25h3mGiA2AP6TGe9wpq5SZLjQCmogBug3kCCC1XsyRHGjD934m32Y1Fvwe6wHUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a8fCrh9HCD6HXp4hnp88fEW2UvUqRUoXbtREbL9nc6CDavsiWa171mbC6hgLk6kdvQLAzuvbnxB54v95FekasR5",
  "key1": "5UYQaHVo7t4dV5KpTAoucJgH2p71Bm4scHujaepZECaEN4R5S5aSDQXu5unwbRzGF953YJzoDnotE9fgLvaHc4bX",
  "key2": "SyJBk6grBViBZDWdafje8jTBfRdVKL6twp3r466UoCXXMhnA1tTj3ofnwbpphGhPN1ddd2xs3HUkhst9nf85Pva",
  "key3": "2ab8EZhErkJf8dST7vZW1bNLToJhP6d2aa3FXoJHoVyDGTpD52o5knm1oLDwaGWiTVRGiGNJfZUDiReKnLmRHAb2",
  "key4": "5qxta87rcMV7ffnYEUJ2ncY4nPQ3apq6J7hrZVgYiGexya8FiorCuWyynZiszNHexeo8xbnGRLyxbaKQ1JFsh9G",
  "key5": "4QHUpxVgC1CgwXnn18qsE458xM6rmYZ5CW29JJxdXxFDcwHWNRebUUTRTeow4RCwTwyFokKpnsC4zGV2DE92Xix1",
  "key6": "5AP3iTe2mbZk6GRdpjF9nSZ796cYPNYNSiB56vL95KN5gTFFYrACegvSwCXjWqcsLHVwBaqeVL36pTMzyXAH43tC",
  "key7": "4RWy9JbF1DS94VZsA8MXUGZ1wqjSaGbK8mZ8shn6WHxEEQZLksd3ABiexXznf33XtZUzDMAamhJc1et7Y661aQEY",
  "key8": "TS8k5qNX4YzL41J6iMhEJtwHovgfhiGmeR8MnkPduiaoVqWEBUwnT6UrftMUWmxAjmo8Jxtugqij2VuWxKk9TSh",
  "key9": "34VDid4yH287KwFDpZ8p2A4iFnE31fbnEu3TqzWrTSfwm8GaWuiPzW5jMfKAeS58JnX6vaS3oBJHX9brwrwY75uv",
  "key10": "65JdG19UMp3yogtUAYJfu8s3wijQ5VCEBJJiAkrHYKRGbfkydctUvY1S7ZVCPVeu6d2SVixWGpeR5dJiMeUGAfJ6",
  "key11": "46evvtkSRC7tv8vP56UeNwyuaUyT59Byn6W8S5UZ1H5VWvZACMQeUzPQhYrX1Ao8u59jBBH2BQKQkVr5f6QUbWTu",
  "key12": "2tz84L4gUVes64cPsscGuphVAwdfwaEgvhkbpCDEXykYoAAk4wRrWPGzaZ5cJizGyAPSkQRA5nUVvtNYA29TysWp",
  "key13": "5kgM6esADJCmp7MBr9fhAcbpbdDF5NGbMj5NPPbfaEoaedF8oM9N1XMmWhCSTHZW5o4XSfZVL9iwtUXqhqNrH5dx",
  "key14": "478UXxUEJVmMmjysRArftAyAuNLSxdcFWJpuZvzrdGQJ6ve4mDCrZoMiXGdieDEQVwM3KoY1i1kz6SDeo6PnkPv3",
  "key15": "2Zp9AyFhNvX6p5LCVxGmT3hCMRH4jGRwNL4Xtajh2o6VDtAsMsrPjVjZZP7U9dxoijKmrfPyQgFBCdMPAor34XG6",
  "key16": "4jYLiWPvjB7EW3Bu3MSdKdhwBMK9WswjQV5w2UjFi8S1NCuBWAGrbVhYysx1u6zBpaAkYpguh6dxWwQHf3S1gwxv",
  "key17": "528CPNL4rmSnnvm4YLuUiC54Msfqr9nvCghxjnFjYmpDWm9ToZ27iHqjrKoEmnxdDntpG7881YmkauymSJinnJCV",
  "key18": "3z5j7XJVCj3vR3sLqvdRpjP6qV6P6iVJCyYkLDh6wt9RNEhHtyn3vF8WxZWCriF1FKbgkNCqrNgHywMXmobc7g9s",
  "key19": "eKfEHC1yvnthJTnqM5NbFNwJkMjwaikb6Pd5H18jbWfC9cUEZwJrRAfMq3ByirDdEzwVaTgbp6qKTnwTJ8fnDQK",
  "key20": "257oDZ374zwN2jswNj4d9GeT4MkjcKJd8at42zTY38dmospmoaAdjn2DwgX7cwmNzgmYTd8YAyv8tncMBnfLSbFN",
  "key21": "5db9PagLpkkGb9ahQFbSatbBzMJKQ3pyN4Xibh4QJqKttfPwzzd8ExLbaqe6qTYnQwV5gQZg7JRRY9eWpBPwWztf",
  "key22": "3CMr2y6pH64bPvLbH9cEw4yADyi3MZeCTKWRASaAkJY5bak5KVbG4cHcGGErHWP4U46c9Mod5RQyfvnwUmHFAL8x",
  "key23": "4Tpji3mQuXmVcqQTU9xPnFsW3AATb6zfD8Y854yf21PTZxzMC818Y5rYJ7VziCNK4K5sqZbbjFvqcDd2uYFgJdBT",
  "key24": "3iK8vd9J1Ue5U9Ke5wJBExSZmyKPfoZagW7Vbatv3DYqXUdkPyPp9mAmHUauRxLNGqttUqHEVbeDVm81Bz2yRY9R"
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
