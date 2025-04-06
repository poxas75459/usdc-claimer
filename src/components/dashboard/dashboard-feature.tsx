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
    "268KdS7mAmguvUXoj1QHxF32UD45bqs22u6oR5MaxbH7S7iPhcRzUnQSwzBSj2GK8BdLDMyuytNAGKLgeqFirPiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JG8bEs4Deqp5Y8ch7dcbBwb1rUPFK1jaBzLn7WushyWXD4N97iAWxQ2Voyivv1KMCiTtDgpPSKa75VcMnrDayDz",
  "key1": "5sUucozE2jK2oe3YEKmwnSsubEpTp1WXwWXxp5DBnhB163pSf8n5AKT9Mvy2ggYtwGeWAUURGhwk62VNsn5oAR3P",
  "key2": "52LiFud9qSiUzossdjE61eDqZCeMKbVZYUTuhfRCEHLWwYve4XrtE7NAKHQiGvSd45Hekfr5s2SUFegrHfXN56ne",
  "key3": "38uyd8J1ci5fjxviTzeGe73ZYvccSYcb2MEHGAEdCnaeLezuE3d6kCf3Ngt7t59VcL1tV2aoFq9kqiFSXnGs4dih",
  "key4": "rox6DtBmjmRR3UYrzrXbq4QZF113DavuFwQr1ivRTx4VtdkqkXybFcAg68c5y53A6V2Lmo3BMD2udQnY7tuVUNR",
  "key5": "2F974SCRvG54vJFTbu2DfaR39vGJopbQBSQXVXzrtHBaMwAgMSm7vz6E9mDLFkyTZG3VLCS7zsbN3stTVdwiJVyX",
  "key6": "e3mnYCdGeahHJHQ8oVuyAcsrHmnjgCvXwNSPFMrMgTzq4dx75VTQ9nveKRjGrzmFHkCnyvbpLY86YKht2kg6AxV",
  "key7": "5BQU6Hp4QPkPhqFCHFe4eg3HWP25ZHqhnrQXGimAtWsXfp3amtbCpuF6AizxzVCkqbCm7DfKxdeaRemPKy7tCppA",
  "key8": "43Qjgs52Y7vZH6tcurxnmL7hmGPszxW9QYewwNeoqfAe3wxB6RpXW6g2AAGCrqMqFfZhrxU7BRpCKxLdsuJXuLJ2",
  "key9": "2pVpis81FDpkgGTMTwkbFRG96gPQLYw5DW7PdgH87x8zYcT1TC9sEpKVZogmSfXFicuRnHPCo6zNGGQfgWMqDoTb",
  "key10": "55AZ8Hz6xHy8QgmaYihG5hLcwsrSKzyq3vTGn25ocvDAteF2bTYwfpgat12Vh4GMC98kEAp5tqpKUUjRJia3o4XE",
  "key11": "5K7UyZ46PyXQ2mwyLhyz49JkPgFMFR7noRY3zGt8wS2XCfNeVNB9Vqapzbah4XfaydDbSegrvSPaHsGSEY2mv3hY",
  "key12": "nqTSQ2XsgX5wEBmkGkDHqb56WPnNwZCmgJZzS9GwAimYLfHVQA7t7mkzDoiHotHS5nXKnBupHmodea7pPTYs6p3",
  "key13": "hWMUmChpmdmZB3rmGyTDjKBnvoyMMiKWrTZaNC5GDFSKACPYk5C9YM9minbMsJhAzgEfumkgxqWtzyNy796xLov",
  "key14": "4Edr3s3XEPCsbnzLZNWDqeUusR14ZB5JQEJRE6mjb34jY1SUZAZru7xHsBSecf22skJuRp9BEjHGvHN9Pg3kuTxv",
  "key15": "zZEk6nV3HK9Vj7boYCuKKxeutSDdda4U3tV3J1bqj3wS6GTzhmKrmA9cQFuXKbh9YAb5woVymWgf7zTYnXPWBTG",
  "key16": "5JuRE43Wacd39VRHHfxuA2ihGWz4F7DzZguj5S7vfLR8Xogx1g9uE1MPoNTHQebJE3dkiaXJnXqZ9JMxhXB2zQ2m",
  "key17": "5cdhYY3UrMiS9mBquEYMd13BJxndXsbWozKjazEq8rjyC7PoWrTa4hdRRs79jqu6DNvwLhedx6p7yECtRX2qd1rn",
  "key18": "29AUZYECvf53vp7gQB2KLwyx386bgfsRA4Nr5uMPYUG4XwQmatsDih4h46nnM9jXYSiyEyzYaHWHDYq6qpB14UXm",
  "key19": "3ZPtArQueAC29EMBhyGEJ2PLmsFsuxuY4fDm14WiR4NEKr7xEwcsUHQkeedtcCRFwSshRvoVzBZa1guD8Dv2J82d",
  "key20": "9rwmcnJ5stgvfuUUWZCDM72mnzJ2dK6LhtV8mx1S2D4Us74MkX5xJt8fwaCfScF6riE5FtEcFjxJsKgpv1VhVpR",
  "key21": "4mVtiJBf89TQrGuYC95uD6wttwLkwaL5i1cX6VBiPgnRazQfWaZ9YQzaFuv1U7CHmULDTzzxd31XetdasUVotqtg",
  "key22": "2BHkXcFf8q2Xe4X6KC9SKU8ecKcWV7AWXg5zH9TLtNHKbaRKJB3Q2XTpbg8FhApv78oLu5QUD7B6QjwQhx5KtFRN",
  "key23": "3526G1SiWRGors5kVm9d76iDCcGNQdnyxogiDjWmZoSKCQ49pwSpgMxpw5JDqzNLbPEix9SY7r1jvSxxrREz6CWF",
  "key24": "5QV8p4rMB65AdjDQ4kemTQShTkirxHdNeHAA3ZxjFSzToe8HVWWFirwRDc7gVkZyqMfr6yoHg5cWXgsBajvNVVLX",
  "key25": "22PmFgggs9nKiEHvkrNvtE3NmwknxMii6bbXsFgyZqETwFLZAW43ArX81GeVyb64FUxLm5tcmYu6sqe5FhDU9i6M"
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
