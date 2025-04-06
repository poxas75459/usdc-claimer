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
    "2ftLrcCRaxHiwuo6tLL2nNrNfirjw6hUigSvXszd3S6eYU7oyYAxUMTcaWriRQKUmqBfdhsmupUmfRTn4q156SHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xtPExFnB5mZcFDeutC6zxqgXPNFpHwhHdqXLer2LAZyhifsBtuqsyAzsi1gRbMB8J1vyfFB2nDKaSLq3DGW8ELA",
  "key1": "3jZLfxVoL4wmjpn3gXFsgvi66WMKPXWnGfNTxhgE2DCzSnGrBEqAFPaFnQCcJjXBCAfUxK2VXSbmcEmvFr1xcWNA",
  "key2": "3w5x4gxMBjkiegVXUQgE59AXEpWn57oSkciKw4FxaHSTrBGY8WXZA9uVNLTUx84TusBLzwmaf92JmTXLMEi21whd",
  "key3": "3EfoqVjcr1woD5APGKVmYZQ4pqowF2iY2aPrsKLd1XMaeUakBgakkrED6VTZAwrTxkJikQtDZRUPhoi5dSkKN9iu",
  "key4": "TdB9rDUW7DCmGvCKUsVG46gwFmnfTnfjCWDfVubHAzhYBsBTcR6npnHkZhgHggr7SzSTEt3srz36D4dPH4Ap6Ew",
  "key5": "3mkxLxdXiwAk5iJQBEDehyGgUVL2CLCqqyPSR29GFCuhdakX6BYTjhdecY3kQbkeEn61MweqAGK2ZKBYzYrzXXeQ",
  "key6": "Fahf7QS2ac1KivDumqPTGsn87hp8FfCcPsh9qtdKe47gtTT4taVuEf7Y4yYF8ThNP9sgxxtuZLq4kEYQBs8dCvM",
  "key7": "53aYcJ1CgiGPAdYbLDAVZCJL32XhURKpcNdossyCWp6191X5c9v1CB5XGdnFgQ11q9gwqSCAcmShUmQMzZLQSzAg",
  "key8": "2Jgw2aHmzAgt7qvsytLorTxsAbatCRRTXwnaCKUFZjEPJKFSkRYLUQgqDYgT3ectxGfTfrpCdqRdQkGX6np7Zfs",
  "key9": "5VrDBvUM7TmJg3SBFqizBr8iVj66CEnfxMjYsow2FyDqEf4gnj8UfVCzh33XCeDCzTa3cAobzhYakFPtJD7eGQSD",
  "key10": "5cWddsdFS1G3RvZeKcZNDuSJyQsHZiDtKjpUeNins6wjjq24t5ZoGUNFD6ZGzrehC9Wx7nt4KPvrNPV8axEV3tu",
  "key11": "4WqbkH6cBiTa2w2mQrSfSUWTihthEmjhK1pXr6czJscc2X6GfgxPcapsVU3bwkkCESxZN3YYo9AL5YGboQm9uXVi",
  "key12": "52iPaBzPnG24vZGY6NHoyLqEK2kEw6gYoQRtftv3abu3CK2AN8pwX1BX6BcwGP7kPwTymWyrtSuSA2GuYdnstcQ",
  "key13": "3y18gpYanK7D4muByw3QJ2cVBbwCDPV8CSREtnirfr6yBTVHTfgyxHjjSkcVnqFJN8u9cZ6i7yTHyDRbjXWfA6UN",
  "key14": "5xfW8Wagow9RhsUh4pLX1gUXdW5UmW4JqosZNaFiU8ArntA1oqgcvBf5g19NwVmJGTXgoepnUzanSzwbfWD1Z84S",
  "key15": "5aa4nHjRa4ccN9cE4DwoLCPYvQCsKhT8SoxEFQ92RcBSUNTaBFMtsAQNhQXWs1s9pMCAAoHnb3AgSRs82GfujAhP",
  "key16": "2avmBB4BGMCqgCxP7LSmXnvyLBXRpthmC8idfj3xxB15mFRFxDeZCYVUT5F485bMds8tDhVs8AFQLoQMe4WFBYSh",
  "key17": "KMu3CKwSNLrdP4Kt83rWb3m77SVttseE6UkXbuagmjTftDL8VqFvZn3bzMFM3LhAiQqgjShqnRNX236bgC4wWEc",
  "key18": "2KH6UeBh8WPDAtb7MZTZjsqzPzDH6B2B6GAET6vR9H85NJhGVT1ezGi8iTruHEiBavxu1NPwXBuNQRjxLqkEy2Yu",
  "key19": "5YYaL1NaaKxBwUkegyhuzxXoBzyHYmeMJHQ1Aba92N2eZuShdeT8pxX1knEdcunrhVTWc2Kz3LDLQuphS7WBj6x3",
  "key20": "55LBBy3vypDr3n7NyetWaWWVAcEfuaUCWjRbTMQrKtTMx3NXMaqTqjcUMyN1KyywTCFDtnXQD3Gm5K5nAoUwYJxy",
  "key21": "4wpDx3opaSWXgLX1CjhfwKBUspPFJybTjZ9QxLm9RKeL7Em7oCxpEaxAXXyWMTZte2XUV8SDbnYjFuQvhr1ELfHg",
  "key22": "3eDC9bYKJjgW46YRBqap9njLix8ZP7MPsQdSdMNgzn3Xi6MyZhpgnzbK2Mn9vsSNH6eiuejgX6SttbtxwdXricjV",
  "key23": "47Nn68MjUQTGtKaPcEEr2sm1QqKYKEBmKxhWvAaj61bi3a2qMMHDBbVdN83Vi93XakMXMZh1dCANZY1qmx713vuv",
  "key24": "2ocg8fNP47RRQp6yHyEgTTePq4hYEUCdKCahwXfuJi25kurEvNFD5iuGhYjJmdNqbEKjVncSwy2fFn5ydTT7GYfj",
  "key25": "3exMadGxow5ZcQyCi991FfjCD2weBWMPwANHW2E8KFeQmMztrzGyBpoVSE1QH5Scn3vydovXSbp44aYWeYMwaNRq",
  "key26": "2nNYywVd5Toe9UnprTp2g8ZitcZpJ9Sg9194qHsKhNHZdjaQZdZcoPNUAjUtGtvbqSt48KMpqmqGm52WzGPTi98Y",
  "key27": "5dK1bM7wBdcouB7VaAQruryNHCdZcoJsvFo8s6X969tBucAxoFrtdZA1PCwxyzdvdqfZnseHReqnq7TNmoidTNvK",
  "key28": "3mJky4QG418okcFTTHuRKeuyPrDL7A4hou6nCJrkjQTaJKnMycHB9U7QFkdioUnPhtbm4HzcJTZ42pxHjt2VHtHU",
  "key29": "3t83nbYV2dAN9q55K98pWsczeP921XrVUuEzP6DP4erBaLeeKT4AchZK2AokgK3khzPrDQPhWEH77HqCA6iUVCqk",
  "key30": "b1yi9ipw3C4SbRXQcLNtP2NWSxmMDDeGC1nKQHFrvdj153vwFyMd2L9rC932mVKG2EngzQTvXpfKozMbg4S6Wua",
  "key31": "3xRS1WrP9kv7UcwPbZTUCMzV5Mq1RqviHyQFdXurXYjiEeQTd4sLa3Cgar1sAj8zDcchTgnxrBHoUTn44iSCStS7",
  "key32": "33opMsnBQTDjHrdSR8E21PYqcUPkeKu9GuMU1nDbq4tpu3h3wT3yoxcQXm57quPjtjAfxtTbzMB9EzGX7jBAtcSH",
  "key33": "4276egrA6Rz4YNvAjZ1Mu5xwne3WvjrxQZwJLc3Lwo184dcsXhvfYTvCTSNwEBndnLRHJK3mbABLpLRA1wABBYYY",
  "key34": "281N19Grw5eRBSpnrNZy1hpdGjMGrdA35zedPR2Sk6saad2BS6VVfRV9J3hPQ5atRDXyMKDJBJzKftUkQypqsZHb",
  "key35": "3M5QJUectcdjT6p8hsnFo5xRz19BWdRz14y5vwEg9Ke8zmTo26oXtKVu4pAA3ioqvS3sD1tfFntRcVF7gHqpUAzu",
  "key36": "5JmxQ9E2pbXhXkUHchjHYmCpsTyKTutLoD4L7JXgxbPPsKz1nUvQxoM2ziuvfhQXiUyKMz3jNmHdXz96Sc4UUrY1"
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
