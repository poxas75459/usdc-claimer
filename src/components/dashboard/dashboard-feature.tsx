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
    "21KHHxNCB4nqtutHaXTggsajCrhKWQsENvrBzHeYb6UQyYhGR78wYYaQvau2YcZTWG3ntLHRByPP9QwxrzsJB3Hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VQenv3Nz1tLzi1n2GGZRdhs8HsagmXTXF2vhHqPr8W8SfNfsjVPPrSZxV12qs8KpKHLCuoURF2YB5FQ1xixtEDr",
  "key1": "6yB6E3Ko82xXUPuHSpK8ypzH5ud1Z4e3NF1r9jXL9xUHjbrdfMjNF7mVfqZtqWPJaL5zjzYJbMd7awXMN25cFKx",
  "key2": "55LmPrem1KNXDb1cHa9xAKaEWFE72B2eFcMwbcorRgaRMXBh42q2qokiEyAEbABxUhxDNitmHnMP9e3hwtuyu2SM",
  "key3": "yXwuLXAofmqykCEdGWU4vWi9XvvooCvfGXCASx2JxkCfunauJKJX9oeWbdsMQahp8pMv5qCQPE82rdPCk2fosaN",
  "key4": "ULAThnS97fQXivPSVhB33aKp7CoTNpdBKseP65AkVvBoisdcA3PncJiEPrkf2v2CkfHDoLx9vf6Tpgy6CXKrSpy",
  "key5": "5HkyS1gWm2ZdLNM6WQq72xvzX4FS5EDw1KL5SPmp7Q42Dz4hBzj65QiVZoPK53ZAFAZtgc4FtaSdBT5eErTLuVXq",
  "key6": "2DEHJGXY816zPjUcJTdzzBmS4E9yctfHKdWdu6ucBZGmHaPBzBCw83SahMikwDRxCUqowe9gQekEDbbDJwZVSaUG",
  "key7": "3pL41Y1PZF7UNpiwPnQS7RVp2GWvAh8wgpdHANwCyZjCwZ3UJT4q88a9KqhJVi7hw2KBwd73FkxduQg7VcNp3NbE",
  "key8": "2JX6GAKh2vBRTAzcTC3UHNy5JoPj8ZjfK8PdXrMeHddhxkF4GBB46hin7rpoyoBHU6xLq5xHWFN8iJ1vhz9UYgcu",
  "key9": "5uc6eSmc5kmketTFF83JQY5unarvSFfkvQZ9YAJL4a5UAgxF9bcLTh9QEcYmiFLsopu7e6NexJwsfp6LVDoHReqx",
  "key10": "2NJc4GBgkg1nR3VSpEWxFUjUb1QgkUmhvuwReM4ZbbJDaHcCFUm5dGf8HFtXJWP3vzp8qZDZKyJFSsj7uNE48Q1t",
  "key11": "55PrBeGeXPkUFjuWDgxejgydBwgugv5HzRFmspz86RVvo4hgp6BYaHqTmAujvacnpYf4TKhixeSsJrKBTCrfyxff",
  "key12": "24yXgCEn4hEoJM5ByWzkjs9o8Me8skW3DEnBFvc211h4wayxSzGWncHHndQEEzCSUSrE3xeHiwgmHBq5jLkMPNqf",
  "key13": "a5mZT6x7TuMLMjKnLhzRtCxk8HqZ3uEmivAsVVefzJdwod567bZb4GfrmnmtQSzjuvgr5TNSgvnvMNNrE8gBnyL",
  "key14": "5A1G1R3K3qjJBF1xhrRWWAzDx2ivKTaXpgVntVYJcMef7GKPnb1cYjJM3pcy55ratgxfs3qCQzFgsCvRxu8pB8Uc",
  "key15": "qNf8KnnHz3qZFUQBBQR2ymh7HNyE37dJJ5xHzfPWV7uYhF64YQT9idgvreJ4jfFTGV7BzWTpMVABCgXG1s7Afrv",
  "key16": "5okTRoDZEAw1bnCkSjxjxQYvv4jhEFQwS6ZL4wbHCP9nHw9P4gGUn9NKLY2bq5GBTCDxLVcw5P4Y4kdU41GDBkzN",
  "key17": "AfvxgezRzs51wFr6yRjZAsrg8dhrNqmxysRJ2oGVVzysA9JBTvkE7QQUCV5DLQHWY3bFE26dUd54976DXZ76zXs",
  "key18": "3f83MMiLBsq3LsEsdPCyYx9Qn9u4cNpzzyVwqei6LPLm9UiQHytBpkZoE656phqbyXuSw5GMZhh4HHLVwj61H24a",
  "key19": "445JeeWUrjF6XiNA2hfEN1WyK1jHV4rAGiNuT9RV6CRhVZHRpA4c87GBQS4vKiPyUPnZJx8bGVzyHGWuLBMLZUBD",
  "key20": "4FWwAKWSUnjHwn2xfStH3RMcmwnBuuHeqy1oMaKE2uPBHhQtHemr8HwP59MEx15nknFfHcM6LxBKDC2dWPUVRqdW",
  "key21": "3Ru1GNt15oj2hPVBM59NRwfqAaZrFWgrMDLxyDfazS5RW4hCoyvN1SBhCyE42n4xce6CWxe3GnoY1XMd9K1rV3e1",
  "key22": "2MSekpDikXCtCnLY2ntH5matEdGwAMU4VT2W97hXiaArZsSAxFxDGCNspNqsAhJSQEY5GsuygpaJqjhi2xupbjTR",
  "key23": "5CQsJvFjc3tWejCYoLEyy9FQcSkyT9H1XaCSzBPJ12BVh82HeF7zXWFTAEXjPigjLMq84rLTAeaYxB47oYjDhMUq",
  "key24": "5RQQAF4t8jgAxzWtVDLhmgrd1AZA7LBoZ6GPNxUyDQPnYMyM2AZrqarZHV8B9nmwv9oJPgE1ivJQxMDHQ2XYYoeC",
  "key25": "4DbkxkiSJcAVmThbtU2FzWGcczxmwmSwb28AkgVfoQZWCTsTFmLnKrJb5ZB2j1X1bepKcwtqf36WGJuu9Lg22tPt",
  "key26": "4sbhRPuvqa7MzV5P8Pp3Mvb3nSvHjt331e5PoCjW567DEDxDvqr23jxo8TX9ymUntnAyTYPsyJnAn4t3BJoNUVB6",
  "key27": "5zhjg3dmnJ7cB4qgrrAeJZp2dwgpDKNrZ4cPVt1uctoSa1CZqfjcq5s2Xg3xnwTJqLAs9fjw1j9mN87jizRTLQEG"
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
