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
    "WVz7HYMKK9M7oFtT8uZ1BKc6422DpsTrmdAqrd8xw3ec425Um6PscZ8nipPsiWwR5ywYiHuehyPctx3qA6gAMU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTj4dSapjpPCZND5DDRvoAimWFRamgwFSMYMqAKh9FUFrDvGEF2qbBer1LcWuCDw6SscYtd7S5vYSZW7P44vy2q",
  "key1": "2nXpBw15vLdkrLW34c7ZQkGvonDGrzmC7Jzw9pY5x5PdhCDhybi7zbD4D2uPmXpCQDohn9DFFZVFnSRuBnnaL65d",
  "key2": "26e1oC8CRB2BLysFiSV8ahwsaLNvm56tBZaJMJm6fjjUX3o63o71okHHRh3TTEDB3bJ9ogKk2qxMdcQXU33rnsdF",
  "key3": "5Xqs1NSESagLDfy4WXr3Qes4eWAKRjmJWPBdRkufr1Cp8ZLwFyQg3KTBmKF786Qj4c6Fom1ECNHfxoLPkNjHWgK8",
  "key4": "2ruWyHzWbrncDAHLMV5eJ8kkB9oFWu6vrqH1Emb9tXihPuVyy7HMX6bL8KXd8MXfQQrTNF4wieiP5Mzrapxo6FF6",
  "key5": "2b8AEEJA2NvQuMxWZLm2zeanahTyxUvAbnhpGtqNPSmabn2oahocUbDG8ZPTAnLEu5YHMQPLi3gChurpAZroZjaP",
  "key6": "2uafKkeZLo65JMA1fptsE9ci2p6GH7kVtoejAaS4zN8cSb1HZjhALCJSR8eJvm9BcydsodY3emw2snujrJwNV51L",
  "key7": "LZK6HyuprgB3EuubtaMN1LEs318n4nn4JHzyLhFa96Vh23m7ocBLYrLtgD6AqZUmqjBunecx41vyGdGxFsr4QHh",
  "key8": "2jANLmLEQfjxJVp3JM17xu9inuA16e9g7hU1E2Ffq8F1kdWEwhGk4LCbbgGx9nncduEQjk4iDrKUdBF2SJj3xeHY",
  "key9": "kDqx9J3ASGU78RXkWMeiME4FfDXAbqBkm5sEMbCoEtRHGmBDX8Zk3mLtYEiAgJ1rpmVRDXwMhiumgeZxHgtJoNC",
  "key10": "57BXmtVm1YC26wr2kWvJUpRrdqFds5pBmUE93hta1Nz94kUsYgxvoMVMtQNmX2V8gQj7bdpKmF2dwGJXG9k9Pec5",
  "key11": "3FPqJqsRcgNvEv3au8enwGkezzAkx4ujAvoA9qia9T2RFyduTp2xkVEJa85wVrktpTHjs7EAwnpbwUn81K1kPHki",
  "key12": "3Cw2NKQY5viet9m9hEagrRqof5X1P5CkfChgUJe1G16t9ZRSHoRfUteaMXCGc6KwSAzhPDD5R7MLuRJn2wFiYr2y",
  "key13": "37mbc9Doid2LAx7suT4QoVeeS729QyFkFECnYxPvmk3buUbRnsqbFfVbbKppMwxyziG4mb9FtRFSApSvNBKWSaS7",
  "key14": "3rNAh8DWMzEBy7UyxEurmpsVGGaUXfr4VoQzUv42VsqP4GscynY2eB6pkrFm4QasPSSSPPZ1TimeZiLTZWCvrB2x",
  "key15": "4RPRV8fmN4V6PccSuFmftfr4DfXZB9RmETxDMxNRPcRG2qzpzbsmigGZ6DXUhR6SQkZ8ggnHd54mUEaRccdnVGLE",
  "key16": "3GvpmSKaqpN33i4GZ48uhe2Fj9bhRwdt57hzbJwvocbdJKG1WqFU3BcrUVqk1EDQxwKo1hgjCEdPWekf9uvSGfxs",
  "key17": "5eQb8AfKPP1wR8iuVY6Uy8HK25zpxKa8Drs7STBbTPy7yMCYpnu57xBBeu3dcdDh4tpvkBicM5iZP9D9UQKs2kNn",
  "key18": "5x6nGjYAWZYFKV5a4dGBUT8wDSMDtnBDRuNuCAt9CgxYz99zydah5eEy275AHPpwsDasoErZ9GQZe9pSPR4ooo2N",
  "key19": "3D9hJCwaAAHQc43VDvoEW6DT8SfqZFQYJ37QL81DdLyGgAfmMxRAYicQqZFLd3Wah3ioBuSKQRmF3Fw4Wuf9Kr7e",
  "key20": "gfFgCKJNkPuhLq1LTqFSoQt8GF3zcpHBovpsyq3L49oLmJGMj2Ua7HuVjyJBidYr6LbG99JZ5qCBzyeMqnkSqZG",
  "key21": "2HB9pfZ3m8f9havXZRetMetaKsYxFHSvortZfK5tBxuvXoGNiCsE3zLfRGxqvvqVW8KpSrfNnKzV4UTadJ5qj3Rp",
  "key22": "3TnCw8vVx288SutnBWJXKoPpaKx94m5SJBkqmrEAw36Epuo6USbS66QqvEFW64rqiPWCjojav4wpbPepEoH7tg2z",
  "key23": "GymJehjpfQphuUGc1F5USGsxRzMCaCVdEFhv8DETpMsHZeEqH5sv26prWnm8tQDhnq9hmPConGnzabtusV9zj7u",
  "key24": "3ZcZJpnbUYdogC3rygbbn6QdcsAd9EmH5artXgGGs6ZHuYXJYQ7CE9ZgWffvwDZYbwFjc6MTkAJgaQaZYf5MuNzL"
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
