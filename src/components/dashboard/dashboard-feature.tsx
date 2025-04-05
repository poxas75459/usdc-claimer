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
    "3qoduLLxUtg4uUkA1nRaA2VNUzcjEWPEpjFZAJ99AXnzk8xRJmPL9Ywdb32FVx9FRfiSGHriVk6HajJ7Lpjfmukz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35DZw7mBmRBtZthMCLqniGSvhxA4hZAAxN2sySq2XQy6thpgiL8RJtNgGHNNqKxRRJTNfdd36AHuetHtWNSSCETP",
  "key1": "2hRLHt3Gb5dVPfVK25M6yjH86qTEasKqyUvoZxfEDgZRWk515oKeLAoqKouXUhEFPnehkGYjkkheXKVcXCNdW8Gh",
  "key2": "3yeERkErLBTLfCeBVWqgBZWv1NN3ybJ67W1Ar8dcfpBu4RBBd8PKou7etfbb7EHgXeuRDWE2Daq3xxZJVhVZQ9hB",
  "key3": "5Ko8y9cTz4GsS3YgNE4gJdnyhTWRcdHDdurH9gH4pMAhL9oLM3URyDHt9WRYpSRUUaCWjuvJramE9U6woCChCNrB",
  "key4": "2U2ZkSqZY4Jfy1A7ZsSQAuwzrSHYfKhYbQMaByRcRT5vHuyS77ZV2Kz7quwixY2bfqYow7bd5hc2LaYS511BXB34",
  "key5": "5T4SWrsLHSPW2kRSD2fcdd799bhM8TRrxiVhBn2uafoWZft6M9Xmt7hVr52DSk8AYZGSXdoriyABLqoFkTvS5FwZ",
  "key6": "4yoAxJS1QgrX2vuqEqsRDNXXPZV9stvDXx35RB1zvk4G4nXaXtzZSthdYTmEmSkHAGKrHwYWcsC1SFEszHfBLPnb",
  "key7": "2VHgkf78y5dy1tPmbamuVutW4uLFNUr5nrX9Wka816rQ7tnvt7m4W2DHDauenHjU33921T9UNugxaeTMrHD8ECQr",
  "key8": "5FAxU8DE4nScbgsnGUgDbTEA9xmc5RcwMRE68FRr1ijWBTbFDmgiuqzQjxEefZappfYoRghEaYFRozBwngFGjF9u",
  "key9": "3xktFoJjBbFsnUxxALr51KyiDcvkgzCbgyEjXddHrx7zpMdnGihLZp4zYMaKwUe6VPa6MZFM5wNAg1NH5fEew3L8",
  "key10": "3XuRXtroSLizuvp7zJBdu5CP5kCKYJPCyB4GGN64pnN9KLX9FYJjeDrPrzUUQ4pvibk6JJRDKYvkSDhHeqfoxtz1",
  "key11": "6ry32x5uPT4aFcbKVowQkPUjEFAQ7HAWnB3VK5Hu99rzKUaa48ZxcjrNwQVJ4yfjYMyVacQG6bREm1gG5wxL7o4",
  "key12": "4TQi8jKnM4vHdEyEchYX4cVnij9SDPWbUyao363DuLwZoW1mDUjGr6TLz8QCZ2716NSfZpoobnNnA4qh4EjHBPL3",
  "key13": "4HmXynPcAuNq6dBkKiwmxP62cmWCF93YXQ74sWNgaZLkHu7NU1eP3B7E4CPZULWBR1Ux12DdUBXEYWNqhxvoLHwP",
  "key14": "4CYS2xQ2jVqxpygffYZbQGqM5aaf5D6APXyJgn7BuMTKfHma1TafKk2US6b67yNPYLaTVJhZrt8XJ1RVTPAzCPc",
  "key15": "5P7SX9a7bn1LG7qXh4oSHzyMv8u5AMJhM7QHKT1NtGu7R18wtw5LF6h2uerfsLrXhxbQeT5vpoV6GBbxU6ZWRWvb",
  "key16": "2fUMGaNqiDywtNHQz7xYBfatQngNsowJarmckdtNDrVLdWUfTbwEHKrPoQE961runYH99VsxETPYw9RV8vZX9yrb",
  "key17": "5QMF7wQFTa1Bdy7o7bcgecUf1eTse2pvVEtjsoYebvrYKavc1sVTJhtRJuGCewsAE9rCDvxQzicaiaRXbn7YSY7Y",
  "key18": "u6wwqiXYhh9nxfu2mAFmd5kUcY8S8FC3B5rcUyDkaq5vxcbiunhu57cp8YGnaM6tqDMm1zsV1LC8nVGt1X76nvq",
  "key19": "3gKc314sSzZU4TjgZZsEqM6rbtpdEcfRAJzGjGfDh3VGjdWJCEH5ZK1nqC8PF8v9eDJiRJ9nBScSXaSJfY9rMqh1",
  "key20": "CbjbH5A3w8HyDeC535r7xVbaJLjoZHtZjAmY1X3zapR6E27uULFUiKjuvwy2E6GKWAwucafWmDiz8juhFBTzUGK",
  "key21": "4Vim8Ni45fb9sueh1xR8C2p53HQMkhB7N5YFb2JZ3ppCkDswu99csD3EG9TXCaJBW2iKSftHmqxE2i2b8rsk3QB1",
  "key22": "2AgB6TRRh3LGvCjZ9A8evUSkhUC2meYmFtSssd29bGpGKtwZY94TZWnsbLmEF73MJH2tfaht554yhBrQnLGmBw49",
  "key23": "5oc8BPgF4B4PUHYGpxyrjJfgj7UihXnTATNZahW7J9jVRRFyNx9rA8V47rqQe8w9jWZ2hTFNc2yCUbjVtybqPZAP",
  "key24": "2MuB9qkEWCUGqZJWo1nfoLwsHJPuRGVtgwKHqTxjzRnuC7JcyTGGUshNyxSzcAJhL2vXm53EQsSVRjECxj1oEVav",
  "key25": "2C79pnwzQgbUxEzwqGFHSR8v4BFWRzenTVXeLrL9QdFnJ2STLj8vzdZhCnKmQZZuwMjnVmzsBWiPS7gn234xLcyv",
  "key26": "LjXQmSpYEgo1cLdz4uicKYUUEJGnoWj2fycGQHQpUQBymxfkQN8781XfFRRrVWBDopnLjSLFjk6ASmRQQdpkjzQ",
  "key27": "2br7EA9VDXHVqNrkQueLK8SsfB5zz7jpo7wLUGQSRdzW8NeExEgLbYUoxHK5F6ZfumdYnHrFNja2MSSDY59FnxiJ",
  "key28": "3H8MLmFb6BFSemAkpQRxJtWTuMXZt9hP6r6QGowU6M6H69qkXW3aKxfUpUv8dN8ccLYS3XmfTt6QokY9PUx8onwf",
  "key29": "2rtCsM6biSBykME5iF1JfKDjyHrosgGxDY7PhPGBrb4eG9fgQ8YXBSnKGcBPNAdiGqg6GJfRfRrSypncApaFpf1R",
  "key30": "4R8YDmPF8FCvEuFFVUAosvCixFDYMFjA2QA9QsfXi7rsHCSCA4LjyrWDpdKaazi8CdnMzAmqgHqMHt1E6J3cXaxx"
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
