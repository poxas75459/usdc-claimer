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
    "4udRdZWBZq3YonYAA7vnNPn6aCRRZxNB9RDQ91suMbnkQC511TP6pWa3wcd3ddw9djWpV9XDrV136WNzTSFFFnqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jw2PLLrjLMChcb9E1FFfqY9rRpM18QtbddkngtigAfvnQTymdqnWtdpGmH53j7jVX5qcGJSpd3oFfQ6mZbCv4QL",
  "key1": "4hSA36tDb2VNaaaXEYxYJ8BRmKVhTnqC2PRNenRPZcbSNdwocRNyZpELkVepEHMHXR5EqHGy7inC8446xkSYboQu",
  "key2": "4PwAMGr4NPs5kTau4j5TJwY72UugKac9MrjApRYRzZdvgczHvms7bwah53vAGzv1wLZg1ySHY8SnyXgfG8rQzJQB",
  "key3": "3B7gyNUsbVTeTBzY4kaFrwWXgDzkgw6Q4GaUPuuwrhrpjA1KDqCKeTUpK2r6Wx3iHuyzkHyqoRNx7D62G7duMjoY",
  "key4": "4XiHYRWH3iipYrhHX1pZ9YGhkvuK17Rkdo9QLLV92tHy7Pkz77Lu4ooAxhyeJ8esNa8nLyN8NB9idtwD5cmbKDb8",
  "key5": "TY9DVqLTb3BdVYjfaE2hYg3ZDe767JeiXcrx4h8nfR13WXMmAjcYU86V64t5ftG1H79s8PQCPrCR4Kduufd1RsN",
  "key6": "488feg58xKQCU6to7nD2D3WUjwqfNKvUUHvzrXk8V479PkNaNfb6d5EZK5aSHrHzk7BvH8Z44PFrC1wNY3hpPZRo",
  "key7": "61bsXsrueGNvqShy57Udy6kmJDE4LpdQ9okbd9j32aPj93qeuR8fcEgTMyQJCWqdxYzZkx2Cze3YvPE3AEWiwYoY",
  "key8": "24bV5uCwcLxKevMC6eofTQ3MBvXrJkyYtNUf5NiCg8chFi2NfynzN85x34wq2B1FS4JEiGGEvworsbXeKmXsyyEw",
  "key9": "mjzcwx7HEu677WQFFCDv89X7KkeMit1BMh743fz2twHD3Ts7qLiZLx6JP3jv5RkLPSTTkuebYCz4q5czemtq5kJ",
  "key10": "4cQjYbps43peutKoisy3ggttdA1QZH8mmTCxNNBPD9Crva3UAr1Gpwk3ELfsi1xRqqQhjSo5A8nUye9xQEuBeacR",
  "key11": "5X48N7BmEsRcEFRuKWq9JWdg4yKVqProgdpKvDabV85NBN6jW8fxPJqDpwBfgwr22Wzm6wrWoqGW6okqLYj1xwjA",
  "key12": "5jbPC7ixELUR4M5ERJmwc1jznF3UYyTMNjQ3P9DSopqvG16DuyZQDjrA9VX85NrtfWdT8e2CWyUtMm3ASZPEKthp",
  "key13": "J5ogG7Z3rbpEGa4Nj5XMGZNtoSZN9bMoQ1tgSnADpzFPaqiA8XzU9nqkyYxz7rXEn8aVQ6ivuo4LZBrDG98h1Ma",
  "key14": "27VzmHCyrWfLE7s5xvGtyk1QUcEmonM6YyXUfPX21nDXiAWarXhSQsjeGLe6mPi5h5jjuqJarogKAcJr5C126zaF",
  "key15": "631iNs3AosfcC2F9Emc3SzpcwkoVAUk2fsgqGkkThmPPVtuVEEP6eyZt4hVnTJ3Nka6xDNHfWCH782dFLz2oLBdr",
  "key16": "w1QdDEED6j4fUA6q2eMTq5PghudgPji9wLUQmDesZS9KHRjwDsUCzyrhbTPBTcQLemxoka4CvKKd94ZBnhm6QLC",
  "key17": "9VTrdyttPz2R1tt5Y6BzxHyPQ56TxaxukJcqsAwP3hK7skNzxbqfGTWPCaWvGUwgCBHPxmEbPhvCXrEonbjT4fF",
  "key18": "4R6xXxEu9e56AqUrCHGH2NoHBqsxCe9jxoEo8A9erad7YDQmymGWWRuyzbjHrxqp8EMi9N5UbyPu8EGdE5Pj2Qcp",
  "key19": "5DrevQpt5m5aEBFzzJyPpD5PhpbmZLTLJFj47RG1zeTA1pa3f5YJQtfafxMVgyrRRoBwreBzu7STRSZciFFuGBhA",
  "key20": "4Ccbi9kbuxCxs3cg1hUrkzL7WAn69WopXfda8HFUeD44ra76vW57sd6SVRN1WmexBvvtJtZ8o57mwnWwPturvSSP",
  "key21": "5vbKJsFN7vtkuTrrP95cnbxQGxjJfPkgo4fBncKsNXkdGrkfNgYLhr4j4KHQcwwzZo8eKbWBxoj2ynEZK97j9kd9",
  "key22": "2opNPM7FRMaAhwxsHRtJzdSHt2GGNrqWBR9htjfChAPFASgH4iH5GuiwKj6otz6ZCWwF78kUGJDs55uwHmnXopVF",
  "key23": "4ykVvNXPMJhVDL2qxJTMSsgL631hnk9JPopyrnTKcEgLG8LZznG5bTf9dRd5AfWVfo1aLoGhNcoXfQc68PQm6PMj",
  "key24": "3ZXZJ7Ui7CLAq2axew67exCBm9F2BxDpmNeDPKr471DjNXoSZn9roQqfQHYLo4NukikAWjFJixM2EBiQRRqwVbfG",
  "key25": "2X1RkrZ3q2C5poBu9pMhrTQumcyT5ousc5am1RqKELcCH8jwgobrCufjd3giyua6Y8KFpEbhsCRSeWpZ8VHEuvAY",
  "key26": "4MA339N6NARjQE7zjCbNPasqsiuPSCVQvk6dfDBZdAgeXT773noTP91veGJoE7YVtN34buahTyCBtccJd3wi9WMs",
  "key27": "3Gg4cWqbk9RF1W2WapswvYpJtvozTkuzx2TMQa1NNSa5ghVxpC9VSUeWimuCjikSh9cChQpRXfFQbQ7xmEcSxeiQ",
  "key28": "2gaib25uPnSR8dzBH6S9b7PTjj4zLa1LbTcvS9RY4q61WEwAp7pgcAn7W1dHXp13S2jFEz84ryXdGSiobk6RE6km",
  "key29": "4NS7WqQUY9wcZwybuTrGL3zyP2ffF3sGofLcp8CnCTpdEoXHPhmUJG7DMyr8h58aJrfENGwSTjWEi4WvyXovGFXT",
  "key30": "htY25vjLMjSDK6byKjfPz7J2QscRt636yEK4Ft81EWmkoXzpgVY22Ccx1hVhVJT9Z3Q1CNCmP9vyTrVbu7e7LR1",
  "key31": "4qMo9pH2XKTxSRXtEFFrhamj1ZzZd3h4ZQU9WBQvYqw66wmoEjbSUNEaCB6C3BFh9YnAVPnq8N7RNDG7gecC8Avo"
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
