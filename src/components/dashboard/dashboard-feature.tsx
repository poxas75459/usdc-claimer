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
    "4MSUkEhfy1QMqABJTpJyAi4KsoeGtK7fTvfEq2ukMMdsbmk2WJm6FtwotXvvzMNiSn2uHBY37n7kBw2HGrBPxX15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ev84oZP5EfTD5d5w6u6EozppYavNC9wbUjicpWPPjzw1dLzBnpD7J1C3J4hrfwgrdsdXvuNAoRQRBDw7sm19MdA",
  "key1": "GDAYAddjbj7J3KYBzCLyJRbt21UZNi8Z1AtdPr27FLkZDw5qZBLAq3mP1VG3vbp459ZiHpx7pGdZYtp7ie1qtjw",
  "key2": "2yGEJQbYo6jAWAcapp6z1wjvtDJS1XwuDsV89ntAQKA9woAkE6JsEiHEZzB2wJqucj9k35sdHeJogeKPieWtgXq5",
  "key3": "4QP19dEBWbWLNi2VHoSiPYodLGMAczYo8fV2qwL2XhxQfKHBJdzmpACfdgSrWvNfzCKcThgTf1St7sL3zTcQJJzs",
  "key4": "3o3TmfvHwxMuPt2gpeLoy82JRRLHNDcAReaeDzFm367svjaeuCvKzkJGbsDfVctSDWDXiGEUBAPUnDxRaJQUmzMW",
  "key5": "4LTCEjTiQFjh8C6w3JfG2FjN2j26YTfSSPiFncE4oF16bhMfFxZjTKAaQznv39PjRWmCY61NnBAHbXQ1KxvA7ch",
  "key6": "3Yxsygjf1bbs6xqbz5FutC16dLSDEq9iWXYMEdKj6QMzhJbQSjuEREtwQSNKShuGokd5Eez721FBvzhy3ceKxcXr",
  "key7": "5p3a8fhhBVa3czr24ecMiuDTDwYFugXkDFc2raNtbzp228i7aLd6T4yjr8rNTR3V8Aq6R6eqSYjSVeU6dhqTEDPf",
  "key8": "4QELwtTNUL4KsqLKsyF8k3ak9BESoA71LBSkXpNPekdvmgViUFkviiSKy6nzi5Fi8dDE4KVqox3AMYdNUCA5bR1N",
  "key9": "cJfc3XeRyQzAbtixYRWZPrvQkDBFQJB2fGN9jYLVaCPAK5eDYEiHtEPvEUN5cwzBhp46t3qbye22PhyY66dD51L",
  "key10": "4HfcfDAWDwmVkyvX8kKUfdkopGgBwMa6iT76Y9Ymwr41piHtoAfmfmqV4fX9unAiFyJgrWRcQa4zycqxhiytPTeT",
  "key11": "3Au48XkYhogVNkX8UjATQgPLtzFsW7EyAX1esUkSCEoGa7gKtsB2QKsDCy75UvDAPWLMxBRxAT9VWdrmshpMZkR2",
  "key12": "3vQU9jbY7zKf8hYDY6VJQjvTmvEVFYpvzRbvzkJJ9Qt14sTAV2fPrzdcmUWcgwC4oibGDWTkhxzCxa77VhninCdA",
  "key13": "53VoibK8qoKroUWhU1UT5eawqC5M71rbyPDjvscfKAxrD2A1y3Ex4bQunDdLMKEx3fmBLrDWHzLWnH62BeYeMcYc",
  "key14": "yUxcVk3TpEUKQygETUaESNEMTRjFb7vhPcTqAZ8TifcutgaTqYf8evpDz7eRXxjJ8JHYw1fbhKTAjbcSHSeKPcq",
  "key15": "57HVGV1P6sJFi8HR2YPQnhqnqDjeWnAfwS1HbqCSR7V6nAnm3QWHVCAMCWiLTyiqX3kjGwu1PCQVsxjappDEduDd",
  "key16": "5Xu2HKJqiComkojsPDPswa4v1wYEFfuqCEs4kxT29Gwa7dgLKqZQL9YnGHsbfU2e3YUhEYz3gjPYdwLEUdQB23o5",
  "key17": "5rhXFMJeaisznukZkVckHkHcDAaWn2DdodPjJhTRjZv3dgg5KEGzxgAX59PfcxfJnDwBajqNGWaHX6eq2WGN8LVm",
  "key18": "2YuT9tpVqzk2tLnfBGQktiG4y1B5E4xiwq9qPnYCx1Koei34qcZoGQKkwXCsixLfQXyWwf1gfA8yZE666m1LEutB",
  "key19": "3keW8ei6QjceyJ48KcbSwJpfbgdqVTV3SxM9bjgJfQinNivThbbEmzyxMNmQ8hwGBZK34pYfVnixS3SRPn54gL2Z",
  "key20": "5AekTwjM5Rbc4Zsqxe55LjUxtQAu5YWKndq7qWAAMgUaUChPzxqjDz6RdovT1egdWXxkL5rCwYq49eGR45FMSQYY",
  "key21": "LTVFoNLToVWXzFa1ZgahNj3vQ5jehn74rsjuY7TLQXGoMcZjJmDzZnitFxAS1HV1ouApLRTV8gAiNa4jQj6KmKe",
  "key22": "2EddmwMbQZpHtsw9aeX33X1T8A9i41y1PSfa93JP6fLN82KNqqdbMaQxnZ3Rhh6i3eXtjngTe96N4sSgSCL4iiDe",
  "key23": "3Lrz7ePrSGAurqqThk6tpnZaLudGuJxgr3t4zCjN516Ga5UTe66AxeTtHAwuF5czm5Yew96DRKj1VLyVVcLuMPc6",
  "key24": "5UGCTwxqheKAtVfhWnnYRhVUfwDtxzQejz4dGBXPPb6GkmRqGqWSAETLkdqNLjVHdWmC1QnvNLUuwBrzAKisPKxX",
  "key25": "3AZ6N9RaHkyzK7fQb7LGmG9BpVXRih7QXdhfL7et5tsx634ixQkbn9a741AMtcj1w5cpLALyvGajrRcfxmgnbmEE",
  "key26": "3rHGmTN8Psy8RiQJS1hsfbBNRXyJ1uUi72PuU3zwYLTb8pMKy2cKeaFJgSR8K1k4sGo8ic5f5suEaWq3kL6jMCp1",
  "key27": "2DZH8o3cbM9ieETa4URTfNCsZtp1NnndLTyaxcJkRRNCjdRR6u3MJUj5fANXNco5vaQFKuPDzZTJEGPon6o4B7Ye",
  "key28": "5vtcfAzdDtUzf8Jv55Ci34oSz2nZbkjBiz9Ck8h6HPJ4KCG7vveGoZRRGg5MGTdprDn5CuD2tzxLze5nvxEBsUm1"
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
