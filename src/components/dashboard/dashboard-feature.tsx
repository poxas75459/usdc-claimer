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
    "4uJkeQpEFPYuGQjzdej3juf8rgNu6TYmxk2YXNC7Rd45qrF8GSmoUXzjRFGrdcL2Gm2fVZCzExE8dvK1egtCrVAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p7f86pCYTtdgTPmNHu2Evz1vZQStNfECVeVuPqVMC14e5FXDkXpxutCYHdDbuRdPqcc6oe5MakdJigAoSPxj9qU",
  "key1": "auMqTAnG9BBtxH3NLTZUd5p4evXzhATjiHK3JLxebZ6SVj7YLdq21epTqCtX4HkLH8SZu12bpPqFWSxePWcVHrR",
  "key2": "5hR2y5TXPULNy6nCjtM7N2oKqcmy7XN97HLgPHAhWDL6KAaYCydw8vqtJ9J51gSRp4fKJ3XdcJ5bD5YdkqYRQ2WR",
  "key3": "2rEcew3YyBzAHNJsS5tNMBWhWSZfDc1kCoR6kkA2ViPyn9MH2YzugRYhS5ijuRcYYq8QM6abAST4kdft2xMsRUtV",
  "key4": "yMZDbLesWH8Hz2CbmD1X8GU84bNnFovTE7bGneMLMhcAZdJRT9B6VZZ7nx6JMusqg4RKbrhEczRc7hZkSr2wh8D",
  "key5": "48KrmH7aVBxL727TYCsemuFmDFJ3zoooAf3Xg6ffkt9kg1iuAKBSFdeRRgYJSxWmqWBmL5RwKk6vtzbjMsteduX8",
  "key6": "uVRPagiJPgPkpDWD8xMEMRkyopqgRGXX2XAfzXFjiRa7duCsJj4A133mse17uKeAguowQ3nhNMVWJ7AFpbFrEDv",
  "key7": "5nJKUw17SnWfrKfzsrhmvPRf622yiR8do3LGSKNos6pcoNCs4kbbMunEz1qARF5PAhmo1cnNfJfshdkxGBWbxHyp",
  "key8": "8LggXTFERv4Dv6jkBE6sUXPoWFBYBjB4bmH4LzSMXQV1CkVBTNK8xouvJkk7JBhzvNBDjgYbWvhugnFkQF7yTkN",
  "key9": "3F9VsPKjPWp3x9rsaQAtT4FGFrF3zrVccV9rBHmYeGWzvypAHBM89ayL2qLmyKab8LQf3rNeSrtszfYjkHxYBb2X",
  "key10": "3rwzogpmLiuGjhZ7231i9nGJukjizAUzXPz6nNNp5KsFJ4JAck5PtEv3W9GUoGmTPSg3hoYcbkM5d9GCQFzNcSZe",
  "key11": "PpHeE7UArdNkiShUxT4fZwf5snpiHyUkiwsgDFqAVkowwaxSXCAqF7unWLzmjuawjUXpUid6jGUm8KqsdmqVyb5",
  "key12": "5R2Ftpy6wSkRxwiuS5J9JoFu9GSgk1U4yMU7PTUjCmaq2iwYCs71h3iXJdnbsERwNPmTfEocH6fSzWFGmCoySGib",
  "key13": "iFMjykxFYfaZKJAtuqU7a2fhY59TodM82pwS6UFXfPMuZUDHbA2gpsbCPMHh7SYNbJguQe4z3koEHbNzDdwymMD",
  "key14": "3tBzsByNiL4tZvrvGRfKCsZ9BMuPHNGQKDu3okRnwheSGBbTTaTNGFqwhy1Rn6XDhpYfQSCMCmi6XhHcHNC8bqb8",
  "key15": "36zZR5jLWEbaMsDJSQWSAYMk2L7BSAkXpZaACxMkeyL56UGX5siLzM4usTjyvfAGvMhu6bfMRkMDJKQxwUjQAMbK",
  "key16": "sR77u3CrDFY8bpySrFcMzAAo5N22Gfmz7Am3NcmHK4pQBvzZ2v4CzJCRisS4ssAzc7WXFhEvw81cDzEuLKMmW7q",
  "key17": "mZcWjvTH3NCdrTrT24psNJLzHvueSnQ1HQ1w77rUPUdy2bEWLbF5Ufzab3ciAoNGPdG7juqzFsxLd5pp6XAr7T6",
  "key18": "4rueKDxFAoxQgsMZsWuMTJm9wZMCwPSERC1QaMazZSxLe8MwsiiXGGhKjqFjNSgmrUaxRQuRVx9wQYLKFMvcZXH9",
  "key19": "3XGGkGQkmTD3PvUb45GA9ohVJ7f2Hz5rHJU9hKHV6ZAq6VxXGfDYVLS7DXYMSft5u46gd7NjKWhy5XKJshrms4pm",
  "key20": "5wg7cy2SsHtmPNtMkvwWiDzeBQjBu46zWNaBKT4paJNiBQGyLo5zTutiijqZ3W1gyQHCFp7XKTGQhR244CrejMT5",
  "key21": "2pTYCFCS32d2VKPiCMAYoPB4ucaAvcQk7f6CzmsH5PtPReTRWwApoYh9Zd6pt4G7o6En5syUvULexAVYRqPSVBWM",
  "key22": "2yi2katu3XLrGoWhxRNh5ZrzAPzqxTyuYXzVPBffBz2k5nfA7mz9QmiPcHwk38qMVdvDebt83e58nUNULDaTHU8E",
  "key23": "4meWQuMP7FtybRV2RP35oy3N3XyEk2bwcu4fTomfFuKYYo6UtJm2kxkcT1RLncqP41kfYAWvHwaSU3j5xZkzVmb5",
  "key24": "4aFHE52XJgAkkianNh4JWXRMtDwnVBjX1wvcYUu7adKtjF3EYdjsawHJmPptfzZMfy6jFf6r5yTmnqh35VQ8to1t",
  "key25": "5wYpB2apD1H5qEoPqFZk713d4XCyABenFUrjdHXjFDJoKBpgEvHWeyEVfrXi6Mhx6aVeMwJaQcd9u8HpGeo5JLsQ"
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
