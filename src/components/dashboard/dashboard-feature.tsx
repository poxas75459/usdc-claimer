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
    "3odZC1oAx8pP4p45ifbTsXVt7TFVdH9VR6ZLxYuDoFCTgvoLZKPvfY3LeHEHo2wqZ7sAAGcWPvuvnHFd8TvrHcBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CNKzjzVxA8EPBsUHLJWVxYbqJ28jZZMvBwYgHSEj2iKqxcNXAvLSSWf6fYzwNYw6Mg9mQdf3h8P8RYrQcYDxDS5",
  "key1": "5AFtYzoMCRRicEkQGvUqcWtBECzH8Jck1NyuffLt5C6KxKq2LebvjEn4HgNjSVwnFnCeT5E3EcTtHj8YzD7c9p6h",
  "key2": "2htg5fdAtqQ7s9yq6bLWLjdG5xm2mAJ12aPwFwrqPwb4aYP7m81gz7TDzh1y2SXJ42CaqPEZVCHNtFrMnnRkZUkS",
  "key3": "oScacmvZJmosH6KPKgagNbXhWwzT5jgUdMvAXgj9PMSaXXAEPj8HdDB2PGj6zT4jdyzYiWgj9AdZToMQPoV5kKV",
  "key4": "55wJTp93szR6sQnCqDpNmHwYor39tgL85dEPyJFPwSD2Qjuq6hswoxm6725cd41ryJ2o1qoJsg428VdNgnM359kH",
  "key5": "ACY4k69FfrF16sfnTzJAGc3aCmQk8SCArTc8QZVYp8gdc6kRCqCN6fyowkYyWGTYRQ8nY8bfGXNgTaYii5V1xbb",
  "key6": "3zEvSyHtnNEkG5HXvGAJ461CBhQ9PNMhowT5nTubBKcpAenT5GW31XQ3LuQW5ZcmPB2b9FywVKoZScr5fizDfP7b",
  "key7": "5P69xfFydTuBcPXccyZSwFu1xUT1CNQjWdvKyAK44tf2TqP2PMvXMe7zUaspDFxmVTD9KPCbP9g3VWrT4RW8Qsix",
  "key8": "2SSGPiHgCPPKX6jgkmJ3U3gxMwSBEZMaaDwKC7rB71SeW5fNaieZbRmcHZXJiUs2DrP48ajKTJRaGWxFewD7rKJT",
  "key9": "3iwAMb7DPJdCZuTjvewT29ShpfYXVUxoQJf6sUZBCiRGRsyrko2bJaYSABaU4fS3E3HrVCmeXY2fzLZzEHT5SwUy",
  "key10": "3QqZP43YoiS4tYk21oEgQd9enxYQ9chCzYzWtoEL7Pgbz8M3keWEgm4KHhVjb4YkKQ3iF8vAUqW8xqt4RKkurmtG",
  "key11": "3ErhSCHXhnqEyRFNYmnsyERULYP5uykz24GoQ7HTsQmoSWaJdCDSxnMxDssAkdMsexdUKNcjgvydoMKWCJnHbEeM",
  "key12": "5gPzBM6VtyE9pgnjHLx6U9fPPsW9WdbL1onEtkwCTPQ3scww3pjKBKEmbsJ1fA2jTYg3AZwceD9eVsyEgByXRPye",
  "key13": "BWvFkrNYMnrMydjrkXJLxndnMBfC1Dj7vTwPTBH82Xvtgt4VqFxFsCeii7e2u61JZKtW8WE8p7gfWT5ZCP9n8pi",
  "key14": "3zn5Bp4tgXhu9fbpJdbg3uBZqP5tUdXr8rafB1JLuZtRGbzdhWLifNfzo3iwe9vJLfpZYwQSDxMjiRzjPe41E7Qw",
  "key15": "36dvDyi1NkGymLvmNzb4C9rqNoJiJWJkFL9agzy5qNzxcPxtbVdn7YM4XBfezNjK7b6nDBkCDFJR3PCAj1LzP4UL",
  "key16": "4a8yNVkkPv1k5TMHL6N8oLmMSZmCzHqfaz9BoZGXTxdcH9eq7tRoKky6gMS7AAkoBovNQpotq6ecoQxgNDXgue4X",
  "key17": "59iL2oAG7FajGQm81YGZWeBxzC5LAcnmNbbEjXe32tsqpJcUuii4cyfEWh2p4CcuYdwy5KnKvoMk65NgnHDDYo4R",
  "key18": "2f4NdrkeFaKt2B6qVJbYBAZpguXniHrZ3qJcMmH8PLSatuLkG1KYRcMVChRwoYL7LvoktTSnaoCcTLvmWmv77AVS",
  "key19": "3XVhrzVPBWFsCpMejmQWfhCy7udskpT2bj6dgX8TNorSVsHjpTD1VVrgmQBXd5CEAqiDRYjQ7pm96ecovYBmkfJA",
  "key20": "2HkGB5UuhCcmBwzsQVC9iWLHBsVJj8qJ4pXC7dR9QxBzK5Z9wvhbh42A7RrqJdbCwFyZ6XkdTSZHwXQSAJ6fNK2E",
  "key21": "21m4h1H2zNx1ZDir4j2uwWvX3mT9tsau7Zn3AFXu8YYyL59F5VW1aRTcAyJBAxfPngiAtLFC1xVWjWa714gGCUpe",
  "key22": "48XCeZC2jkPHd1ZWn2Agh8E6ycyowsqUzSChgMtrWVdPso9nVCsLe5UrWHW8tRYX6eeyVYNXYPJTxvKhtLbiSEUb",
  "key23": "2tz48JUyvwGQRLnDGd5eK7i7ZJ4wUQfmwLh4AkxGw6PsnPMw3h3p57fJZLhN4BxZequW6ZDSwCAp8Rpo5aJmreqL",
  "key24": "4XyQAevjCVMAEyWGNe89uVQ72PmWBjCgdrHvt1ANtQmBNjfzvtYXxY7qcEA4SUtCsuXx2EEjysJ5gqrNVyWiDHM4",
  "key25": "4r311ZLbrdaaqE2ih4JeE5NocBj1hhsyMChKUdUtif95ZuBmv3ya5cxmhiuXfrsDMETAr6PvnkwdcRAFyxEVHEbK",
  "key26": "2ggWzbf36G3iMALihxtfrw5nbdb1Ue1Bs3EVpVBQYocTAmDdiKB6pFthxmVcYqfAC43gT4qkMgbSXebuzgMEaokk",
  "key27": "4BBcHsVMXvuvkcYRsDsz5gijZvh8TKBJnh75dt39HQVXPWAqmvLJpWNQKcr3K3KRP1vbhYw9yqg4Hu8KsigAzdr9",
  "key28": "54ndzXmByupHYscBD4BxwcsCDb7fsFgwHAGgmmjsLyTAbo6MAz58JKeGoG54oCCi7zivSiBnrqrg8QxYBPQyUHgM",
  "key29": "482gftwEtufNufK1nqX4zj9fD3YgVafq3bo1D2zBfUJooyxBvLkKWry9pXG3zbqioPoLahTDL3HeLcqvbXxHg1DS",
  "key30": "2F5xJEnx6t1weN1zD17tp6WCGR1KR4t5GTu5Ti8SgiN1aqTYkEkiyRjcSrwC4hwML4BiEEF6QtB1KKLFiegYZ1LF"
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
