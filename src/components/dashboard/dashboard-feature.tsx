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
    "5jndDGrukjyw2tm3iHtzrr39GaycFUKRXjCcdL9wqAo5b4q12cUxg3EnANkz5byfY5bGpC8GRXHa6i1Nyd4PxDBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hsDkoVWEW7WPqCAp2sit2WyFWXUQxY6VKjM1dhCSRddoPR7yFirgyo46DKtkPomqgnh87kFtaK7BZCqkbWTazEu",
  "key1": "5eDfUBfs8E2mRV5BPWFQbyKRTivWdUsNfQtyp838xDKUKsCPeUg6J49n8P2TF6QgFHMzg1TVHn8564j4xPAVZx3m",
  "key2": "5qNzUbk2hJ5vvu83jubG4L9uSDTtPK9jA5ytMY88CfrNr5EwFhEjWuj1de4ksKwmBT7yN78EhNB5JKNCMDb15EYm",
  "key3": "5fYqhsht1nf4D5r2AUJK6FhhmJpreA7PXPQ7YyHY7XqKDCQZwrF1JLq4daLw3Kzq87VX8kDvmRHChLrWzBB3uYRi",
  "key4": "DWq4JGpokyHbkH8H7AsLxDabxocmnUYi7Sv1iX2zpDmTANaHfGRQNPbWX3ZUn9XHdKc6D6P5sdtxvWzbXgW2eKu",
  "key5": "KGiDPd6WE5iWEaaEuow35iVvoDneCBWbrgfJg8Cn7rnFVJHiZwWrNzkXxN2Har9ivxvPSHVPaKADhfpDJCbSTZc",
  "key6": "rim17FdrCtKHa6HKX7iiiXrktz7q9H34EGEmqKTVR82sTCHezpHAX8io1hnhSshAopVc7W3YACKHGzrwhhgUw9A",
  "key7": "3pTG1eq9zGtY2dJADepWKjvwsfW4pGrBd2dyZu6tj3gkiGfE9CXuoGhSJg2gzDs9eein7kVAf63UQ8dpk2QPp5ZK",
  "key8": "LYXRY9sZbnSCP9cn4q487hcEzHDbhaGeYLwiN7MhJxSfC2FEF4LNyx7fhbyNeovrP3PtPacHpquyShYFGMgfggm",
  "key9": "DUpSr71HLXnv7pUbmEef2rs1aMXMzwJeyLgyd9UQu4srheDrAb8vDLs8JvhJfgqRun6BiQXbQnkuwrSS1P8z8Kc",
  "key10": "5XC54nexMLcMQcYXV61vafFQJfNYw3qwhGLYr5ZbjqXznv4ZSewkA5TZ5LXcM19g1bN6qH5ybE1tT6sF2PSyoJQx",
  "key11": "h3WTHPR2VYWj8h2Cu2MQSK2aajvUNDePdPFdY9zVaw8whUER6NV4wvXquETpq91Au1X9EeS94CmsLTa2dNQ6A8g",
  "key12": "o1HvhsWFKY5TxQFoKzVDEVLxjegtUVXLkBB9Kt27kAAiNYVJauejPBUX7KMni1idYrojSMU1EtNYnSYEjZqspTz",
  "key13": "4wSqti291a96ftPeT3EwEKwzPHR2Vk6biZpZw9qmWVEJpJM12K9HzfqLcUxmcfpf8XDdEbeKbqycuDKk3AerDHCz",
  "key14": "3G6wqLcTKxoeDroBNm8sCPsQNSqFrw1UbYsG9rE7PdbxLg7mBgqyM2B8vsFK81fb5umsqiRQbQg1LfebAMHhgnTe",
  "key15": "3mQPs4MK7AxkAXVJqANq7zN2PugnqEbAi4utCrDMBdNsE5E2AwHfjx7TEFGEmKNgBErVBNjNnAmZPt2XjiTf4au2",
  "key16": "gkSLHnAhQVXpoadDQefPv76uTUxcsHUuRUV5o3hdqqt7sP6D5W6KBQkjAaCXzfZPWMVcmHxPBDAGQPCQhkx8QBL",
  "key17": "3qcJwxJEVkaq4XYSbyjKwQjkKWAchn8jFhPNeuPXeMhUidncNcwzLAYzGxzNFBDktJLCr2jQXF4c1o5xU3R7Fpea",
  "key18": "5PjF2PRt4tchDxwszQ2h5NswxyXyxN2Pz9W1nqnFF9KBmtT7JRBEm7kEkamJW6TKq7XiEAyCNkUdYXwnt3dLXkJ",
  "key19": "4PysmysLJH8KqxxxfyyDpPJgapTkp3gzZrpcxd99GFrTVzUkjxXnRwkmMzDjcYmKXRiquNrJgMQzAQtv9yRRD5HD",
  "key20": "5wyQFmJpSMAWVXzDuqFTRUiqUuuBGKGLDS6kcUkUnKab4U6gsQKkpaCcyWgrC7P1YoU7ocT1eDimS5VUF2VTDkiT",
  "key21": "2NxYkrfmKxKNNZucAf63BpuXpRfN8QACNSwbPBZFXzKhqPp8po7ir3MACFTa4m3zq6My1E3K8AG9ANqUN3XvorcV",
  "key22": "4QcQdkNaTnGspAuuBHo2Za7xcgazRhnC6YQ5oszJrU61U9sXLdF94me2ptcJQyiZCLxXyna1aBRXuwRZ8KeMZuq",
  "key23": "AMXwanm7KZPpDCQZifBwz5YzbLbZaxEm2SrMPumxG1nEzJmxDpR1d6zwHynrKmKEGbq8LcokooPYMnPn7BQu6mb",
  "key24": "rRrmjKRQJovK8S2TtzgDiTBmwye5oqZKZSzMPYfDa6N7xGDMsYus7bAhWBGTi97WoBSUePZSPwsxWAH4hcbFhsm",
  "key25": "2swuszQ7cuX1BrB2yioxxT1RYa4HxQa7CgQKk4TGTf9vDcrzACCEU63nF7fbR56XhSodPa7ntWDNm9MQABQuyfw8",
  "key26": "3u7g1wpW6V7cbQkMHZWjqxXxpJNesjABTDSDWyBx1sx7WCEsTor3i67Yu975VKwbEgSTNV8E62fnvjqf5yEMGW7r",
  "key27": "4Q4hFtgrMGzdhoFe1MzPJAXjM2WeYiT9wzDYVvenQBcfqYqXYDxLtdR8F7Y3RnHppMZRmBVyg3HTLFtZNBt3hNkH",
  "key28": "E15SEzceesZMDDzs4LFXCpeMBSgSZKf24qxNLQAUN2UiqRS74zjgqg7n1AmLwLkZ8VQFzmf8JKEYGYvDLoXvPq9",
  "key29": "jGKNZLnnoi4YpdtSkcNWR6JaL8CHsW739RjC58pmqANYdZ8QHZBAtSrnLSaUBY4r9RBysVJvuDm5BEVePQojoo4",
  "key30": "2pebazaNWwYCkeRmBZUTk2KdjsqSqHnbA1pRrqvCPe68o8RwpNfvchAcuvNUc14dNc9nQXHDroKKLYzLyzkoNveB",
  "key31": "4iZwUowV2mqBErfS9BrQiaSUaLTxrxc7uaRtET9ipi3ZwtrcWwWZK66uwsY9YcN7xVG1PkSA6ej2tDJKsokAAcRq",
  "key32": "5wWRJ7BLTdvVEotWikMzsE6tv6u5aCFXc6ceMxkEtpMCdwy3vVjgw35vyM3tpQmN41Lw3aY8eNr486ZG9gGS3SpV",
  "key33": "48uvffEcy74CWU9gjGg5d7fVG6Mn592cQz72bffZ4wQCdo5EK459rThneKBDi29cbPg61JaEGV2sACZxS9YhytCB",
  "key34": "4sAdL3gtgWt3PC3dX6Sg1LhiQ6mFwvafuSydTJncGeX5NeCTvAVPanbPdTETNwsswW3gZxo42bqjbt1ceMjEAvHH",
  "key35": "2G7QYSai76pq84jsPB4uBZGsRGxdn5JJ67PwcP34Zsps3oUgDsYFjTfNLZY3nCeDHxdTc5FwJhUe1ro8t5aKT44o",
  "key36": "5nCXUhUcWLr2cMjQHfq5mhBgKSW7KJAuz5at3AH6WDetYRnqarY6qGTMSDCcvx6GSuBdczLZdTnyUfZAYY6z4dyn",
  "key37": "615mmQZ8tYVSiQggbTFp2ERA3EngVo664gKp4psfjLTg87rFJD8iFdgvmRjtHjs6R65HTZRcJkguzpAxCYdmCLNR",
  "key38": "2mchkneSnEjKQooW6XsroRfDVKAdaCDXcHbYX7gzAQKDuhBrfnjBDqUduFTEdh3sm1TEZbvkDKqa4Q49ckEe4ghZ",
  "key39": "2JmNWfDCj4TT7hTLHgtw9eRu8T9EcmMHJMQ6sxMpD4put2Kzfrwxwp9BAQnRjKXYi7CMMnDys29apiWCA9doHKRK",
  "key40": "57NLKEbLx3qijxymtR6BYR7WBsNy8FYak2kACZk5jhLuggXm87uiiTZW8iZ2w6Ejf1Fjj3PvSdRFpzhBv2fm1nop"
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
