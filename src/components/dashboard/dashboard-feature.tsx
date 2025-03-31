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
    "3Yv2Sza1cRJV6PcwnVEepVKAqZw3hYEPsNgvdrUy1PwJ3zYJtJFVrPtr9KV4JEbGMUBCt6KWWfFcHbYnCEtyLFu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oJNnvnv1cueXHPSitLUEqRnfXk87hFdi2HssxmxJSgJ4XtHMy3NBsbaPJjfEgunbxHGLUNzeVVizRDApyuvJaqN",
  "key1": "w1ryFehmdMGTASXNtyhBLxKDs4yboftN842RjYc8nSNXQEGodr6TbWRM24THVE3UtWgrrJdf6LDMSGYQtyFGx4g",
  "key2": "syrf4mrEibbLivmCAfRCAcMJcyMzqRZnnYzuzzsSMfiwycaxTdmW2CSePrUE4iySkiLaYFPM1PWhg2zm1bchcka",
  "key3": "g9ZcG9zeSdMHCDAPc9cMtRVMyZm4tbvhD4GSjxvrpmKu1EorBW42sT1dUidSSHhmDKJxMJcbKiabVRN96iUWLxq",
  "key4": "4pAJAFAib8PoVoJ9xHuLQEDMnBHVoRf1kK97sSYpU4stKcHzYJDQFH3LpDhYT9ojVE3Fnx7gF1PuhgUUrs55VTDo",
  "key5": "48HAMCG7D2X4UcTMxCL9FD4kF5fYLyndfKqB4B7wgQx2txnqpL1eWafPCjmgvaertbJMr1kzQZzVHBSuv7rGZ9kn",
  "key6": "67UwUrSrhZYaGtCEMfJHmZmReHTYBkVmhDZ9gJypTchX3g6ZhZSWZHvtHLtzdbPLnXvcCnkMGJt3bL17RdNg6nhD",
  "key7": "3JVWkuJBZLHFoq9geAQpHKJTMLabWPPZS5sG9dZvhXnGDnM6aA5GQiBwvFs5oYBMVxPjrQoYYztxAR3cu3Vwk4kc",
  "key8": "5GUTyjcHTST9w1FFVuVaCoTRZmBTNYkoqZESW3kRjAHh6HtiHywN3Esu92jCwKqWLaEm9sfeT8j8Mov4bHhvWaLi",
  "key9": "23ign5FAj4Npz622CdP1LCz4SUypVEhP24XC761w8mNMYQJnngjSF8HEBJanbxTg3UJDb55UuztcBrLi3hJtz1JA",
  "key10": "5SHQsDST3vbeWhhnNZzxT1tRUAmKWHgJrbMY4huyur8T3cRd6VkWaFA29zoMrVo6XTuCfdkoWjp7TL9ZLnuwkpdg",
  "key11": "4hkWDstS9NJvRX5mg8htCPKqXLyokLBG4nYzo6pGgKE25BPeYavWa44sr4LvLF8xemBXDWiSAsbrq3buBimRUZxH",
  "key12": "cU2z9sLzJmyTCL6EprcmLwspvKSY2wxPSGpsfjAzMEafrTtavMQ1SUzbUXiBv5rePzRHqRxCVmkdnhnZpasa3P4",
  "key13": "4pdMC4xbzooAuWhuJBRwosBVBQctxKgcyJPZ2ZMqLXBZNqAiqYynR6A6Pddf5mSDZpmeR14oiLHokCn7yfZWqpFE",
  "key14": "2FVUN6ESnQDNeGwxvhFmK5wYAyHSqGsTQjaGCJDTSsTx8PkNB3a7s4p457Ehk9vgBNBZMCBwxM9XPFuzUrPS5LFz",
  "key15": "4tzkJZypokWdmkj9TQiKqfzawtrVZfVe9zDSRUW7r35FRJ6DV8Apsi5zU2VysQDPiEwJF6R8r9WkfemWh1dbjjVj",
  "key16": "49bdWF9R9kbKyEebj5v6QAaRd1DbrmYnwJspGAPWnS3aMdfdS1yCvuzU6fDkFZrS6iFgio88bq3s7maPD7af4CNi",
  "key17": "5NayV6zkaVJf1Q6wwGzHQ5VdHVC8F7R3cR369QBExAE6jT7SwXj7sEJF71pKMgNFE39V3Cei56eGcJ9RoYNyfsuc",
  "key18": "WnTMpskHkkwrzZ5AHMVz9yWChmc7HmKCFn76jqbNag9QRQsokiYVycue1UtbiSgpQGApgRjvDd6yDybbBwCN1vW",
  "key19": "49wobFKmjfQgBqbxxYjGtNKvA4FLUQciyswK77T1hKHcVsih3qfsKa4nrYZWmHvY38LtDEApDRZjAFodmhaFktWa",
  "key20": "4LGpNnGWWzSUdDjJhtx1djmWzdP7GLPkfz1QTkqRaLuv2fzgkokfJ2Zmw3AA9cgzPB5DzQEytwFSE7zmuKSNqaka",
  "key21": "noT4zfMHe7grgsyp2ntC8cugUWZ59TKZJe2GMq3p2pY2jqcXgejvPK98uVwqguizGFw6pquncjR6J8SgHaN471p",
  "key22": "4vK7trC5TJVbCxTEhNM26wG33Dgk9pKNv2sxmZTh4ca3oD8uT59ieEViP4fDKZApYbEfrWrCQsDLWnXNcRrCZjzX",
  "key23": "2L5xZNtz6CviMgdAMXuwDF7wHYkLPD124iKL6tFAPm4jDEpfTixfLSWXBSvU22ZJbpWhdFBTNihZqHHzGk7kE19G",
  "key24": "3X8ZmdWJUf3uuzBog3iXYL5Cd2neGPwwFiHyhJdyW9L7Vfeyjz5k7Ae5CPwbCLHGbyTxst4DPMd6TcA83zhYS3M3",
  "key25": "3oQDkRfS38MtRrwqbZDmFmAwRGeYTgPCLtNtLUHVmMXUVWukjiu8tVewWvhBQZ73UK49JvW3NfJ99yHZYDxbaKjH"
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
