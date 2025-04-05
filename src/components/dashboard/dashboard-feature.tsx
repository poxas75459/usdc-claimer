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
    "Dt7B9WPPgAbeYFb54whXniweg3ByN1D5dKmzrRmNFGn1RcWeWieDFGFkEK5PRp2V4BY8ZZworRVv3C9yMvhYkAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JRShMLT63eckhwJ4q9R3JGm1Ub5o99riYyusnHqpc1356Ys1EQtHefNxYa2XvhTdZDpB3JoXWpFBqxEV6zNgXiD",
  "key1": "o5EpnUMxgx4JDpaahPBhX87CcYeUvg2sF8jGioh7K8qfgA2o3H5VvBQdRHgc9989CgH4VsbjG113Zej1jSKJFtB",
  "key2": "5UMvpReo9YEERQbqveFkw6amyJ89TtvKMUo9tLUxD6yXx7JNHhaqEJM4zMgNq7m1o5RAHg8qoixRM96i8W9GQygX",
  "key3": "391ipt6ZmQckd5QCUDZpn4GLC9M9yWoRUsfe2YXvPQRPrPP2CQvz3sFDYavbrEso81bjW4NzUQxqS85rbWbLQiR9",
  "key4": "2kBjYtzkZ7PNkq294umsRNUvYQ8BWtuSEdndDM7xRCzseLwjB4tQz4aD6aAhXhjSZ764SRTZYkEE6U7RxVaL9ijZ",
  "key5": "2nRQmX9VPXMjcs86wK45uVCMfzLtCqEH4q8FvKQwkMzPHPkwnLAuthjiyoTM8NrZwCaTkdMTsSRrZ7DhBFEMPMGy",
  "key6": "2qS4awY84uRF4z4GewDh2QYBubSEHrd8AXd4fY4Ctb2jtGx1n8nRUjH7aaGyfetWHPJZs2TRcQkBvMrDj226VJe2",
  "key7": "2Cyzag74EUWPd3tMDRLZtHi13WVhRtjdH6jxu6H6iTc5eZvhkHtjTaQLwee6yePwA7v95HFsPsP4gQXwwHVwfoEP",
  "key8": "Fa5g2b2R6Xsrk5EpExAX4QSUAXg8rf1etmtmqYorLAU4tRyw3zHgNeQ4mMPwX6fDKbcymRtwGB6uTLUmcsQd8cC",
  "key9": "5gBd7tYmhDsj8gKcwsTfzYvdSTHdYqG6mCvkKCoDmaNZ27Gzr4caUxhy6BvK4wEugzZnyedfRrPwnAMPp3e4YmtX",
  "key10": "56WSjKqP2UGuAqjcTZL7LT1DXhypKjXZjdPWBzLK4Q9NSvU66MoxDjyQCJg9jcS5g3Zkn1pnSZ2HmcYtqVyvuCu3",
  "key11": "3ByxVzeEoPQYM2VwE7Y2jpdGUAReLRMqaA6mTpk8KKJpnLkCYeDnQskC3BofGepyJP7WL94MxMFtGSMDmTiD7kML",
  "key12": "4JHCCRYjkgVcJkUpYbZmUfTsQ1bNqcNodLHhB7iNnxAuCiMtSU8EZWjXvqSZpuN7DLm1Np2XPkQP7JBWkSmsUC6B",
  "key13": "3Qnz8LH26D57kFTZNJNpW1VfbgRRY1dCSuCpHLUiBQmMHzJ2zeqPLVqzxXDxZywEoD48yu22UWdShCHDzh5Sz6To",
  "key14": "4A5XcaQyc6gRqSuFvk5XBTLZpK64J6M3RFJtQcSaRUWbTWq29hTkRv7NGXJfAHrd1D7i1gN7Pr5982RyN8e94GXm",
  "key15": "5kjs1VVNEBkPwkDdqzaA5id9GTfhFF5B73DCQb8XmdxNvY4nsGkYsRFkBR4F4fT9KyVWXbz9G6c1vfZF95i2JSsP",
  "key16": "xuAv8DSMiiHTWvLaVDTzmbJnGReJYyj9UBSTDJjJa4j3vfYETScrEaXiZ7H82DSLKDVfto5oLbMzKGQ8jKTY337",
  "key17": "3tdnfDco616HqJK9M4i4Xo3iQjwJzEfWADBJMZdY6DSRagu8VwixdyEw2ptJSfuvV5YZ8nBPHJwCPHoZ524vU6Ex",
  "key18": "oCScvyfmDpxWZH3sKDdtfWvebAKQrH4dGqXyqbsKWbWzotd1C5ipDkXv4BDE4mVNaEFWG33g7eugXcKmGR7Uks1",
  "key19": "3SFBx5UCefLJQj8eozm1Qmg14UFLoMTn556rqjfsXNESBa924e9CCs5H7tCGBEwHq17CBjGPQPqxHAVcDSnhWPET",
  "key20": "53xRDsHP6btbYgc6vDtGAmZA8MGHAi41S5NXkNdQwY7jMsTGNwYdmoHJfNVGPXQW1UXGEsSDk9S3VVj6owMj1eKD",
  "key21": "5nJm4eWZBKuFB6HAwA14N932kNjNNKgLvuaK8H58B2LDy7Uby8wp9vW9gaafY1e1Z5C93kmYUPpBeiC46fAKbskx",
  "key22": "QSGKS49yzARsWVBYL1j129nGD6DPwuy376QypiHSh2Q36WiYCjmbfeJi2NiNHF59VgjRcH5siH8eRB23MfDpH6D",
  "key23": "4TvWJr8wv2yN74DFEynZurNnFRtJbDXLkYwjs1T7G4e1N3ePXeBV3Wn3QpZq4AcjAWXzGwEPb5wA1rpCu8y8MB8m",
  "key24": "5gVso1PaJUGu3EtoH13arU1YVDSYmoZXegSzcF5hZ5hJVTbsku5nwKyekdGyjLJGXejR9Txxrhb3jVRqX2U3wZqL",
  "key25": "37TopbTG2qJTCLVifoyobiZ6RHS1kFfqAciPtRmQxJLmKKs9SiTsWTiTStGmvFEMU1FhsB5zjt5hyFzaHAg5N5vx",
  "key26": "3ibVdUGqumPLr7VAwjdQC5PRtkTFbAaejnpdetHMeNwN9r9tEVcm9rKPrNTZgVjv25eiQX61Aot6c8AqXUdnFDvU",
  "key27": "5rNrmSCg1Cq7QAz5ubuwb6HFuYFe534bpHabfD6TFt4nfUQcXJ7gxoPqDYp3vYcASk41eMzu7xDF9RKcKSmipmod",
  "key28": "efV1pwpZFY9izf8pB4z2CgXN6NEWE9UD3DDs34QPHkWERd2UshPX8QtJkfXGLwZD9y5dCzuPJ7cQkMRSgBVgfBW"
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
