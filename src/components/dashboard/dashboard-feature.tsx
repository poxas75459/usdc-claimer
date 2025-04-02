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
    "2Nxh1Vy3jGcT7KccfWY4mmWVchjqY8pqoC9nVqqmfLqfEHYXNeiHfyZGoCW4jL6YDrJMbwm9fn1nSE3nfqy9rfTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DF7CZ4mZLKbxoEizPCb6ahVKmAfY8N1U4N6x7m6wPE1YjCSKZjGnnpzHC37Ri9yj2gwCp6fSzt6xiNXG3w1VNyt",
  "key1": "25L6zpSBUkqvcNHJEnwHwAgRBGgFHzAu2xbDUmCurmD3UZdbu8RM6XHYeSnxRzNvMfEsXnuNU7ciunGXRUTqMdWu",
  "key2": "4cVFYer7xjUHLxe1Qjzv5kq8Cndbaa3k7KGbEh1KnX3WMXi2jx8m8D8koTVvVhh9Nm4tWMtFJnqGba9LYoCBKpqT",
  "key3": "2XoFbf2SyrBVd3SA76GmmAge4xCA4QJcK1AjfjWSyKp6k4nAoU4eRFTcuvxLPaC5i25U5te1GnBfx99yPkx9HSKm",
  "key4": "5hpUyA1FZjnZcbfpErroNVPGEE4gCgXdCZfZXExmBWyaVaza29zpnkBPuxTegDVyRXCSmfQwiGrZi5yHNSsK7Cj4",
  "key5": "aDR1qVrgkdaKMrvR8DG4aqmCjGJWbyaBZSYhptBfr5yDWViZNas2gbq3nfcS13sCu87G2LHj8RKrUYj8doDPLRJ",
  "key6": "d15bGVd9k2m4NdGGB6q1hjKrLZKzS2oN3ke9zUXSqfKWm3TRERsoYkQ3eFn5vGdBtPDA8Tbr9H8Eqs8YbCM6Lm1",
  "key7": "2yge766VmmVZ4NAzoHe6GLHBpeCPH8tzbkafPRQvJKtQSuAcPt3e9DXYUodWmGNtFAkkR1QWTQvW9vKJCHm2mjns",
  "key8": "65xzd8Ue1enMDFfazfNbPKqrYB6gokvWgNomm8KWzZpoh8H2Yc9RdfjwYqSCF79vQdH9zyBqhZJzDuteKfeWGWK5",
  "key9": "41kqnnG2J1kDYmG1fejACi29Yr2GwwF3TZPTh13GgLuh27zceLLcCiUMCxTQwaLdRTcfrTH9N6az3tdy6pUpTGNg",
  "key10": "618F9rLRhTKnt2tZjrSRgveWHo7zJMnfTDVKb1KbVAHavVHnMs4mSfSNqu6RBoNkQA2SFhqa3vTHnByupMHDMEUK",
  "key11": "icpewWugRL9amAHtwhsRMqdJ2ejQdEj3uwLVwrnfp8ymyiME7361NwrBuLudonN9eqvKLVzKyesa4pwvtAN1Qcq",
  "key12": "5tg1mvuiLSm1iT7SE64rDjBWd49fLC6BZzuUpZdR2r4SjP9eJX1Xderwv9csKUa6KVZk67qe7FVEX2bm9upo4jZc",
  "key13": "3gHXDirRxoBjQpFcFzKBMoTbt6k4HAbGibWtJmByMkujG9jeYH9rqoMDn1VcdiSEDzbMFPofnoZMesG8tbm82XZA",
  "key14": "3rDqfdN8Y8KAX5ys2X6yg4XSQSvPwfEaFaAdWNqpxAxDbWejXPtoGuv4XnwGoQ3EubHuuKiBN9hcaK4KVMdg1a9R",
  "key15": "4uokbcokKxbSByvQvu8V2JkFSm6ornScbsUAWAUimb2g4WL2j2p84AvdnwKoFo1N38UXrAJuXYE61d8f35eTcNEd",
  "key16": "4uFYLQ331cFoDgeDwPTuT3LW5pbpzKJR3ad9XdGC1WA6inZxfnG4eCzj6vNcPaop3JyaqUrio9XbRZA7ASbyxyN6",
  "key17": "tyf2RcjhSMCktBSG4UbWnfCMmesfhLLimx5K7nEK8UjS5bjUiyv75i9nEZzzdXDdNJja2jCMEq164Jc936MGtVY",
  "key18": "4MCeJCFtVQKGxxf58n7uZt39PsSWWjCPpr1SVFNBJrbGMhMhBd4bGASXXo3wwxYq4Rrs7muc1HCY2uQquzYrB1j7",
  "key19": "1xtapTvGmVKS9u1mj3C7iPU2Hpv11nM2dk274oJTqV8Nzz2MpZPWvGnzFEuqnJSEZFmtr3GfcNTpNpz7Z4ZQEq4",
  "key20": "46nvPTVr2WAz75HFG5ehhWjmSKSseb7myquKPTSFq8WsHTZPrN5tpeSb74xrYLtCjLMwsDhLa2RBMLbR73H6WV4a",
  "key21": "31X8xznfWdTCzUNQmg6jtrmcLEZa7xT8WLxm4coCiegxCowrYYqr1KW9xuaNFZrdycHF239PZx5Rci8Egu6hnKZ9",
  "key22": "4ZaBYfkP5Us9VrABCYSXZ2MFET4tpmHyMQywhFsEb2YEmjvz4Cgvioykt4kpuXfVF9i1AVL1Tbm9W67ctHyQpfKY",
  "key23": "373gZNpZwr3xQNvjSk6XRPwv69G9s3MctaHBsM2v1J2x9Cwgfwd4Vs8gbVG5TYwHKX7fZPRrfRR35v71uffMGUvU",
  "key24": "F41y1SJw3nLwSJDMJh3nazL3SS3AWePkjwqbVhswaLSLsjYEPzmvaWHSwg2P29D8oq5K3LY6tFtd4gQHPXwxrZM",
  "key25": "66PnYUgqSBLkSzS3fGoCygnvx66aHKbU18LgJTaZ5yDxBrKbMzRhWdKQZw3bBGWMHP3aBYphqfT3oNAhmnViCxv4",
  "key26": "fvLx5GmFo6jBP4aYxsnUb4ruE7Q9RugzEkTsSzBDCjH8z8coipJ4YyK6gqefu7uwAN7rFU1DfNBMoMqMw26Pq3o",
  "key27": "3s33YEt9BuyrDh1vxKrUZNDhayFPyhZW8cyZCe1uAjshgPzNNQDEjDkCWNJbCSuafYVTAbFSriPR3F4zABxbmo1v",
  "key28": "28cUbmN6nhpgcxLiyfMnmXMEFyd9XNieBMt4kEmAGn9QD5F96Ua7AzvrarEF9Q9CJhGrHJZJnyXnQht41U4tAnMm",
  "key29": "4LKV37utNo8hMm7RyhAbFhHajWvYAiedaydRYqMHBSvibzoTQGdEPNvuKtiMQJq9fcbz8erYVxgpTdMRbf2kBc1A",
  "key30": "EQde1brQnK5KXdZhA893UTqevrXFjy82zufL752EURhb5nAQw5DfwC1pwRmk8e8rUyqSU4YVEgBaJG8cfzRLAQY",
  "key31": "2J6YwKXW3TtRBuWzLujpXZEFnFV3cQh8jBnijuN4Ft8y3dP5CXUPPDPNDXgTekmCpxUL78kTAa4U7n6soP6X5hxa",
  "key32": "25ZVdpp6qYpwHWyGyoa68qL33TuRhw6HuTsRXxw12BMk2PbK7cdziFUQbAt3FLVUpJ5D5zStCHxjZD1RhyKL9iCR",
  "key33": "5oLaGAJ2oextKtXiMskPNLXsKd58qvNS3GA8noiTJ8eGD5Jqx3ckCm1jmEtpdbuq6c3qx2hZoRiujS8iqB6ThbKZ",
  "key34": "3UQVviAbQuxQ53TVCjfmSSbWZZu73XXTHEzNrKZzZBoojvemxttRyasLLDqM4JMX59VXr8eBjAMQ1cQQMgA3KV2k"
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
