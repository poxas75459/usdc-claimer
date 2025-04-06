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
    "5fCfV266CZ7y4mbAhS1E6g6Eh1uVFrCeyqV4Ro8zog1EJQRNSQs7YgoctvpBncNZNkisTLyU38JKQLWyc9mddKVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rZyPVRzp4cWMQ9Q23JDRWRpmL9PhD3LinrYf63hWfyPJ9vSfzP8kNEmhhqfMtxy5iYDGdGEiu6fU4WdXkWhyrxT",
  "key1": "3rFEw1YgBVs5oUqMEoAXPwYSGFWNf81satAr7b1Bzm9XyVL6VfDfYP3KjBBaAB6NCaxc8BtFfcww74NnGbvHtfhB",
  "key2": "2219pRvdTjLt3AV9rjUjrLF9jbAj3rANspmMYEzhyNpgrrtcJDQV1nadP65gaZfxFho6cs14bxiUPBQ2dU2dtHsA",
  "key3": "2WG9893m2uhFR43ZXn2wsjouTdHiG7Zb7zmqCybBJZP6qKHnwFMTqc5wE8DHPXzvkJJd7FSW6h65kmfPkZAwMdKe",
  "key4": "LFr3s6DEsPAD3NfdhjW2p97SkXLPuWYdAZhbRS464vyCc39AuWrucvSKydmzVojbuL6y2kKwFBVQEXzChEa8MEp",
  "key5": "chVGfhpJzw5VSU7DLNHGUQD9hVgC9jERFUstkxsoLDCRncxV7RHoguMoJQfiDuTgyXDS39vXccjee7Wk7adBuSb",
  "key6": "3Xo4p51FwkbfbCmEdXKAz2fFUYwA1qyH5j9Hd96NiSAd1D51Ya4Y7DCtHt4QGcQxHGTjHeMeXY9Xi8t3bxLhZk7R",
  "key7": "z1YjBJkMu2x4XWZSMBnW9L7ypsAUEvmEKWab8iZt7LiqTXTqKzpg1dsAaWS9U31rExjkkGbjpadKQwQDVN2DcS1",
  "key8": "2gqjB2ZGBcnDbk8r4Uu74t5hjFEdpfoDqigAJapMSFqv2QnWLaKY9ximNrPubWrxbtxdrVAavWHcX1UNemCPSkrj",
  "key9": "3j3Zta9Yv8FSwBmF7VV6uYhGW6ew1eptUgEioQj9NHdGMkeTqYav4dqtw3a5HmRyXf3o23qtzc1q8wF2vg8UK8NX",
  "key10": "5PwnpeZJ1RA49sdBSfXLWLWAq18NkDBTa5wzEcLDmuZQK3cUjzVCCN2dEGxKB9dSAFRMyU3EN6Aepk9pPQB6smax",
  "key11": "3sLxofz3bnYupNVyAJA4BY7XATHtrucEcXnDJf67eUamffihJWr7AzMU7ThpoSwC9RXTw8vzfL36fT2kfbN65KKZ",
  "key12": "2oBkshvk4gZEiuXvkgUHnCiuzrN9G1g5BfxUnCydp7nrVF1rbARycmUUdBCGyP4LaSChwFuhUANE43gVavd1EEJ5",
  "key13": "4pE9hmSNaYMxxKfJ448ADrdj8wwL1yoQ8uJutBYhRKVLLmU733i1PNeqMwkNEQjWno9G6AsUokutxctB3vpQGLiU",
  "key14": "29n3QzxnGwzAtki4PtrptNcsWw5oUubF8V5GzDBEysn6TNWX2fBVjUiA32wgWgaUbzyZ7cDHzYHsJsDcQ5eiCG9Z",
  "key15": "29CxbEdCraX6FEFt9nqndY7MZbvRg8k999DmRTFK65HWJA9f7XTHTUeB9vpKccWmHPAD1WCus2Hnc2esd4AjgM2p",
  "key16": "8DEptHkfxPCZEGkMjaj2WtNnzypG6qpaFbN5EncCncVmtzsbj6jaBSarB41NfjCCKL8S9sx5ZTGXUQZtpttaQaJ",
  "key17": "3euhqhXbPJkZdubBNfiGrY2a1GxooawBC5bztHJdzmmtk79M4N6gF9YpRdVMSZiRi8wXLdDNQ2wXtKZuzqtquCH",
  "key18": "5h65xQA6g2LRWyUghWFjX4drmiKEmiBouwnvBpjhrBjh1v5DESzVXqm4qKHHo2osCwhEEBWjQy6mqS5mXte1WAKf",
  "key19": "yiv6s24ipsfHtJXc6JpDAUZ7GUPqwAWhQHps5UgDZ48YQCdzurNMdgjqWbWQkAcb3fLJegAdYGWivoFJM8H5G7q",
  "key20": "5neDACtDi6ycx2uFeC3VktX7d13362jNgKMfhLPfWC7oL54SNKzvhwEPXm85rUP3wVq77ba2b6Z2QNkV7MUcno7B",
  "key21": "YQXLs9e77cqmqQzXSTbdCpqWcodnr1WtrDSyF3APitUcTyT8UjHNqCPaNi4kFVSnxHw6mzJnYiBDEoXiHfFT642",
  "key22": "2X5GspkkrSy8UkpeoYxbKNbmXLZrtGACVd4ngvvbV6fGvVfji3d4H5V6C2qZjthGv7RPtiRa1x94dcn98vVbCiQc",
  "key23": "48uW3yyUBEXebm5EBV4pfqZFVFkW7YGTc8bqgd8rKnMZCcZGMSCft3MmdD3VfTCWrMTnvPgmnEd9P5V9WimibrjU",
  "key24": "5VN73YSRXZx8KMcnKxUNyi4ZL6porNnPLKwwUETza74R4hmoAJRrQUH2nAyEMkvoG4KsadxSM7RR4KHSzwnRj8KP",
  "key25": "4yQZ8Gvv5NLmok2bog87GwrBXpm73Wf1tVvzau6mYs21wn45gdewXbCw2SLcwydqgcS1f1rptue7n5HvUjZp6YgM",
  "key26": "44H4vY9aLGeezEzPhshQU4zyL5KJSWZwecNVTCaLZnpDfSmMJW1YLjNTpZHH9uAAXzpw8pKMMoNfw8VTE2vVHqHE",
  "key27": "4KaTSKCQGjVJJYXvB3ayRUfRxNNNHWU1vaiYwsXChhMGXwmYHSLz3AmwGvnBVa42dQXYDQEvGG1ifqiUWHw4h5Sw",
  "key28": "3e3tvrEiJRFTB6WaidMwatPMWw2FFmEgViminaWPcYVBGVDoRqZRvgJfB4DTHr38QRdeSP97LEbtvA61DEZL9BMS",
  "key29": "5RC5CWmgqYfXZxNQCqYWkujGPbL5HJBwVPikm8L5JJzWnmtvXD85KYmPmnUcMWeMeg6ghaScHn8jGBrSDAQfx948",
  "key30": "1hskBN7iVSMjMy5QtGJoWeSArYeEAnUq31z1NCZX1c9C7fCcTQvQju9gTkUboHvVzHGL51NPkVo9cnjokdZ6qLV",
  "key31": "5dv4HiVovZ1gPUWMXNiQZUCJdXAchaAd7WSYEe1kmfkfHYToHQk4PqXXLx2jxqjP9WG6a9apoF6YAuua3eRDaqTk",
  "key32": "3sn7dw7CuUw1MFjGpLc82eFwL96LthhoxHnHMBA6h55REPy48p3FR8YeHTxaqnTCngJQP5rWA7coP26RmVztEaz9",
  "key33": "5mmmKhoU23EGC1qg7pQXXyo7wYCazZ3pXF1TLQs7TYkoKKMrJYyhtL8pSdPN16gbSxHe5ALsU98JFSHSYuDqUfKf",
  "key34": "2Vm2eGPTFGXfw5Pv86ab7Yheo12gPZTzcCdFAs6hCjB2mXY92YbYoTHqUs2tHaMN7PrAZ18sWaNZ5J3VtDTdv1m2",
  "key35": "3bgV3CTx5k7h4inNJdWUoSWfMDAUCSWFsX74LoijoJi6is5CmCJmvzapoMxrfAwf91YvU592vMBPsKcGVWRxYq34",
  "key36": "3quaGnbwVUgpUuRYrRsqb3haYa3E2Vk8Y5EkBvF9Bb8jJw2MjEYWt2wXTN3WNhrBAEtbBuVRcP43dUTuj5cZbEXy",
  "key37": "3EQRwMjdfY4MzVrLewrFcDphnuPWYPJtWfNfZ6AUrPWUTaafNCTtxTQRrftZWE1RmQqBJitCkeCXXeyTDzd7jbrc",
  "key38": "4XQcFWK6UH2SnNxrai9WMqeg8qBDz2q5ow8oaHW8eJeHYHoSSjVdwWBSa7pwiTK9znKEV7CrDcQdZX3B5FzrL1Hu"
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
