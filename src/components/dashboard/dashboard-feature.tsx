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
    "5thuMPdVy2WKtuFaK3ZwJ3cnKTR4YET5By3JqjYza19p1qeZUjYx2mHh35HV7CRdN8Gb3RQc1wrCzdw8SpsHqcnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T3tuRWCmv99NYKDFuLHjF1gZhmCyyLYVQ7mED1L3BUmHvGVx4Fo6au3YWr6TXX4TxoyNpGFDNCaefGbxc4jgCyX",
  "key1": "629gF7SiBK7nm2J91nUX15ZMyF7MWbr7z6qeerMB1CSUZApLwPc5QG6NheJ3JN8ev2Bf3iR51ketcMYdRrm45MwL",
  "key2": "R7US9R77NTRLvivu5AE3mfTRqe3FwJa74RR5WSLFkvwk6aS6pPGm4YsuRngvFzZewFtKxZ6CbCxDAtKDsDsifHz",
  "key3": "f6PBUVc47miwbzGZSj8u5NEmurtHAu2GkBLXvgSCGse3BiNCDRnQisRwegF4GTq4MZtHXQ7J6aN4gwX53988Yv6",
  "key4": "5EkPMVLAyptbqzFPKjswxJ5sUSQEYAANZaJNPP6FKR7LWYHyJRfCQ6R5EL2jrA8aEitrN2ao7ywqhTdtzJMixdW6",
  "key5": "bdQW3sg8Wmfa6dwEUVTRGBb2yhjWjdxnkphJC23kECv2E6nKbmEMWo9rStVtPMeg6LwWf4djcnLHybSCCPbzPY5",
  "key6": "KiYVMpXjttvLBkBimUhPSZsSw1Lj3QUgFhzfDtWMujP6XzquGC89MG64oGQ9i2LBfd1bLb4PoY72kK453AHqYJJ",
  "key7": "dbXqx54Un1pAgGKibFqmPgDqrbMRJbciDMxP4uJZeMQhjdbgUNqbth8LupdYEzgpJD5at7bqwRDAwmKpQLnQpHr",
  "key8": "h4bhxGhir5bwSi3qGLNt2BAjeLV4sf3xbwo88hi82EYSenHNr3HW1hPMhC3spY68kzHpnn7qFi6faNWfQjF7Mne",
  "key9": "41NRMnKwVs5nxQujt9WnpejBHifQSY5LmP8ycZ1BE6E7n68GwDZVnSnsod2PU5uKyjuJcT82d9LVs7YaCsQCT8kv",
  "key10": "3w2n68um2Qyfzr5N3qfoVXf4azQGsqQZrvHUDPciFuhormVgYQi3mxP7bwTTsjt7bvqZBYJ4SGNtSjbNo3GGXku3",
  "key11": "2TFSsKpx4WFG84V9MxEmTEQzCTsNUKzfXqrfZqWmacGiHtvkBNq94TfR5QYa2cNMZaCGkNQbR2gvQaUfzCqo6uyH",
  "key12": "5bPzVFhjwLJq3J1Cwo6K1p1rgT7e9BXgkhBnhwa4bUpbgwgExJxzGetoZAeUSqxg7DbEPA37Rs2xM88vfnemBwR3",
  "key13": "2wZaHTxj8KtFpVZHS16gHaeg6211kZ59ZDogLZX9vwY2ewDUFLHFK3QbKwuN5YSDrVoTdmmB7SWtCqeEveP3ejD6",
  "key14": "49A8K1qJh8cuJB1f38qojpp3MD4CFdrJZunUDRRdKaam2vZ1S6wyNnhNd6oBQT32Y6p5mWj7Nj7GDznE9XNF5vJB",
  "key15": "38YxDjxtZG2aPQq5Ncb7ET2VLcaqRVtsAVxibGWTDFStyeobjYyuwQcGYM7ECb9ebNZ1r3hXkF6Ss3QJvsBMhkNu",
  "key16": "24tDhZwCnY2MVRQdvLJ7ff8ZC938nVXFaizSXv7ShQ8FMVf9PpUQk4FWbyPX87tvQvKHzLQnfMyEA3KXdnBfk5t6",
  "key17": "2CZVZsmUP3P6yZokDmtUCRXWoDbV5fF9JBBhH37cVQ8YYKj7i7S54ubWebn6LBWfnEq8ZyDFS1fQzvC4dg2HaeGm",
  "key18": "4b19WCHpHbR6uFJ1tG1Fdb56KnQDkCyqsX4sDqesUfsjJjZXxXuNcvYnAAN71nbBbCdKrGLAJkyNedENmtsWzSuw",
  "key19": "2BBGUyboaE4UuHtZyE9pz9rmQkjdyiZ7PmCNfgh8hD89d4BBqajjFzCV2161mN5RwAQ53Ds5jYJGxyvy6uHWih4M",
  "key20": "2Crp8ySi7Jkn1VKaiTgF63uSbA3nuLRqSkEDq9i3vvzdda1dWqzqaSzE2YyFQkeMT3Yf5jbXovc1Ki2wqQxhrkt7",
  "key21": "5ubgM8HhhHg8yBqBNb7tYvFFYTvnQygjUER2CHw1CapPZh5xdhcrJLYdztARursAGtArRz7JezF2hDhK5WX2L76S",
  "key22": "4emiSqvZoyxXehhG2awyxhduqQ5pJUcYduRMUoNxW12kzUZ9egwLE2mw4s4hjaicb1u4KZDZB7Hv8r719Tgx9M4C",
  "key23": "3PZvxssbHtP7i1eMvtc53H86SBjsNyhSWbcYhbX8oxhhY9xfXfNRqS83EsmkQxPkUQGppUr7XBjkd7gtyZ1kjiXA",
  "key24": "4ReNfVv2vfuYhUn8r8DAvGLavr5abpmVUgQRvpKRkLofezom2a2xuEM6HEiHy1i3xDTeJ2k3T42pPMN6a5xVJewz",
  "key25": "4j2raqpGTJ2yRxC4b1o4xr8vVE5zfZymC97sKUjgnr5AKiAk1DMDXPSjh4qVcpbxy5HpR7sQFg3Gi5uuBqV1aW95",
  "key26": "5X6Uc7uE2V7KceqCbqXZctbMtagpvqnKY4kLA77A7LtLsHc5PgUz4RaFjykgHqeiechp8HHZqAwmUKdWrGirCDd4",
  "key27": "5xnmC8aRcioWCGcGWstCxRJ31muCK6XzqjNHaAaXTDgW5eP4exfYY5upRGVikGTgbDEMYyFzGw8RRoU3AWmF44sd",
  "key28": "4SdHiq5VBVb9CG2bsr4Wwnr8qDTsUyM1jx7GDnRLHwP2xmcvF6zdH9MmSMgcvMdFUVk2Xf3Js6ibwNmcuWt4zBz8",
  "key29": "49wPrhm9Zypaz6AxbrxP7WffdQd4GVrsPQPohiTnKDnzki2Cvg6yDPWrFP4H67gKfme7XiuZjrD1oxGhJeeJQS3K",
  "key30": "3uQ7zhgC7gDpGCBxmQePjQ4LBwcxpDv2QdfjhwSsEMhhUxqG2AWmPk3oTGX2sQ1tk8RNNgkeZa6c7BDM7nbBAEba",
  "key31": "38pP1uy5wq3dZUQ1e7LxY9N7WWXG1YWdppEWUG6DfxmudNSQQAve5BK6xsBKsJfyVx4Dn5X2NpNodbreE9X98WXJ",
  "key32": "38t75jvyvuQxaLYAA8yg2u8xiLYAmQhhkPAjY9fVXrHDXz5gzMDvZFsDuToo7Rut6jXsu9PUdA91mRkDBkKwe9ND",
  "key33": "3QBK89CGiQpSvozo7juawXtAD5asbxYUjZeeLT39JygSgfusCtwUMtFG3g92avMHynvJwjbHRU5kMbP1gnqCjfUy",
  "key34": "2wnnJ5wkwZ8Vg8kevn4TV1Qdy5c7GkBNfqHY4yZcE5YC7RuVPtp6Xg3zJdoxqF29JRKGGYWvzo5rYtWdAcephLzv",
  "key35": "3kE7mopSB5Yqf3Zp6QRLbntio9LhGkzc61Ni6EUDSSAFkDXNPtj48GhZzdGSH1gqBgamiUAbCp6SZFXbBT1sLtYC"
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
