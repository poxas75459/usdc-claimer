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
    "3AHah94qUsfFYrowGZm6ZRraKrbqgTHci5NXrzmyAUi2DM6zR6KWvnN5YG8Vv7aufj3d9wQXcUSV7iMRdDKhycNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tuv7PSjATz9GWvvNtBrhvAfzMJeTjD7HEtCzbZKNXoJEz7LRmgga3iH9HpJZgH7J17VyfSZEhc5owBnPaHKQVC5",
  "key1": "5cuTXRKeWkKtQHM42YeLep2wSMvNyageSz9f6b3iMX4WmwSrUEdVQiNU28CY7na3UoqSMedeqziDGLNqeaMevcv8",
  "key2": "4v7vUc1vXLGjEkJudXLDRVB8gyWdNfKnj3aNTxtvjeXg65fsN9rvpkz16zWr5yMDf4qLM1jiiT7ZK9SY5tKpDeSL",
  "key3": "45xkkDWrP6b6fSK2VBsj9sp6ibErVSLbtYzcq2ZriShjHa95YDHsVb3BMrjPds2Z6hGaYYppMhD5TB4RuEoRpr5z",
  "key4": "4yUdb5fBMsNsQG29j4xz4jBfoQPLMX52zixkbFjGkSVnYWLJsDLGTE9znWRoT8tqCNxgQRxsgk2X1LCX1XstsW2W",
  "key5": "5HKBziJenCB8BkaxMZuRqgAotxM9Nv6kLj6S7gWwgTjGU3u8xt6fCBYSdWtjMnFjyLRPPdAwvVbT61zD4LqYSfKy",
  "key6": "o3ww6M95aC2uK1nWUPjEtgZVhkLKiZE69DgFBcjNcbMxKXh5dQEsjL5Ac5k6fxx16RuHwDv9NiQnbmLAyRiSRcW",
  "key7": "26iDKyPNJZ7dhSw5Z2U3bKGphhBzMgVY5fSkzVsrFT7SwdtKYzF2BPvx7WYxFkzcsQXBzM9KUUeUFE7SCx8Zj8Bw",
  "key8": "2eCvLx84Ncc94zRdn85fL6MDqMt8DHuk99dxWwnHAdcwVNEYyq1NPWL83wcNV5ti2kteZeYeGjarnmRWCxSqaE2G",
  "key9": "5TiRtF68iWTJ1knufgEYUb36QCCPjiJPG5Jf6WGyH2dUb5K7wwscmEvPTE9UdCgNbtcD2GwBNVbJxmh2oVshjS3w",
  "key10": "5SnYipRGgUzvm3BwtpqfTBnQmpKY5zjCwxJ62SQUt2GDzgKH7Nkvtqg38exofwnYQfgXhi7TSmP4v9eYcEh9QotM",
  "key11": "49haVRzn82NtuxUBEq4aFar4cpYTmb3uQvC72SPQT9unWfxGDeGxqPCecLWoA1rtrVphgSW7RS99bZCaJzPwLDDU",
  "key12": "3n1BVvmwsvcFQsjFLrycBXYVo5UPSSUeXbpxFJahpxjaPukxpXKJRktQoDtdMUgHRXHYhbGmBqjwgp5RchRnsP7",
  "key13": "3xsVrbHJtMbXmEShhTpnvxTuZtuhErZZ6AYV2jy4ahrYHMXF9Z4wg9bjFXfKRWKuqorWaXZJkdCsoXgYkf9o38Vv",
  "key14": "2KVSnQhfTZE8hXBLW1fjubwQDy7CmRNaJngNbfA6ANnZ3rXPA3uJ3eR866mdS2JYERBVMJQJgofuzfAMv9yqqzxU",
  "key15": "2yKwRPVAGqRWc5tWCzUxpMxDdGhrfSkYVXDpytVi7FXDgpqLzesdD8WRaUSvQBustGb6Rpj69A1EWzpcveZoNgEk",
  "key16": "3oVcchYiFXMgziLC2rAGos7cBSKUuVFbQt7CLj912GiWMiRj8MQ3mqf9zumuYByDbkBiRUtPkThL9bvLRfAH8Pn",
  "key17": "2r4mak7swMxxcYzi12nsfBaR28UdKK5ty75dh23gx1i7gkKayjH4gPkpKxRMKKqZQmoWgfUANFA7AYAjhCXQ7MFk",
  "key18": "5L1LwB6VDtcDTrsqu3LejL1CdsGXmE8TRjWtfrRdGa66b4AMp9pb6VZvuaW61Avj5YC6iDtg3R5ZvmZERBkCLPzi",
  "key19": "2bbVW7JVuzSQ7cPy5UXBbFSbC7FxTbdNwZEEW1JuX5bJVYEnc8Y9JK9K3AWNC5g36TNamF3Qi2agapL6w3qofK2K",
  "key20": "TvMpbJ7SUNGp8ZHpfqEQdHJ57pgrm8o8NxFfJrSjtK9KfV8TavvgzMmR69qj7AuZVc5w5eGz1NX3LKZQHytcXdK",
  "key21": "mpmfKSFKjT64JipRaE28ojLrbxzByGGA6Qh5LzquCZWRun8TcUGcvZsjfM57PQ5i5BUxbpSJQdBNS6wdh6HdtBS",
  "key22": "dcBaM4ZTqfbcQTqvt4bp8dQpBajwRkLAHBrc9xZoDV3czsihmLFXkmjm1RvEr2KoTuNsbPVySW2ddoWWRNpDHbT",
  "key23": "55wqtYmgkcQEHTA8Bhpw8yk1rMeK6r1mZJsXgEBN5BozhSSoUTCZMRg1zRxtKnuGjQzCo2oSEPkmVBKsczYhTR4t",
  "key24": "5XoutbJ4yRJE88znjyE3ES6884KZyDsgi366eTHjzsYgBzKX89o6W3QPi8FUnqPmjwk8CG74hmSTkDHVi99Vrf2w",
  "key25": "2a49isJWPzduhjVfdAynhwXqsuvAK5Lvxy7ma8TZvPavx1CrRkpFS1EmyM2i1gD1fAo6soKnNPbzVcUVamJbP9A8",
  "key26": "28twQm7B6RakCDS6J4R8T9A3gVsnZ8QCE2HVbTWfN5HKFPxwaPSG4k5H9stbQvHrwhip8bHQCG7ZDhoX3zZ6wZ9v",
  "key27": "29zGRZjEbUGNPawWHHTYWHQHWAMJagd6c39yD6pbmCJjaVAkvaknXDX5GFSRRJj3oBCDvutbBCc5u2NH5y4qZcuf",
  "key28": "49LmQQMv6g1DUueT9UZhEgWu8fbtqUWop4Fa9s9waSJY9Srddz9BkZKJv2epvi8vasSpJRykpS8cNMSH1KVBriEa",
  "key29": "4uhj2WMz8yizxzabAg6UVefUcxGeVZPA3Q5EMpzHrHxQxMyobXaau3iXzLMhhhb1DPK3mNzAhgYctn55cdWri8kR",
  "key30": "4CsHU8gvVn6Fua4gS652f2rpcoN7NBXVRtx2MC4UTu3MQs5g3auefCikuf5Q3sNUvfYaqJ7wJjLHAg4d3ZxF2Zxc",
  "key31": "22CHyuyEQt2tnXQJjM2xuuHs31hbP55pSLU4GtAgWVRtVwCXxp8QxcjzQTmNVajKdzymhdrTVffZVmd1W1MUX9Dm",
  "key32": "5UnUiM8dDvyQzrFGwSWFi5EmLCi8UDBsLczA56dfDzzYkdSEkg7hsn3CTKCkmvnA51NoUWPnePP7DsJbfriznJo1",
  "key33": "29nm1VrLc8ZpWY76CKrzpTVUdKZSeRVkEzB42KdUZNqToKidugWhTA1aYdE8cTgRiVPD5Bf9s25qtsgEVrLvMLxg",
  "key34": "BFvXtMVJYQY6d1rfTLVxrc3ePdb4Js7FE3QX4DfaM4qpJpRP4PAXYB69xf9oBWRf31AzpfZMfWevpd1pg8rogTr"
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
