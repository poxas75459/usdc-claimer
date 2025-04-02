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
    "3kB5VNkbs1dRdmaJk5LmVU7tygSQkMp9R4sLHT33X9Z1dptr2boWDRjsbm687jLrMBhWsvhuDhYhqYMGYy55fdiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fkYPNbcak3wYqWw4yjKb8C1hmJwqGin1hh9VUcaPRMSt89eFVZPv4CKe1yUvTxWidZybgeDWH8sisxDE6FKgLPk",
  "key1": "4DF2DxnKwpFnqHL44yuChSybk6T5jEYQU7R8TCmnjQxyV49tdrQU7GbZck66Q3FzzJrh7aMpAG9nDvSk7Zs2VDCh",
  "key2": "2YN7URpxx7qPeCCQ3NWAEe7sV7bVjYWy66tb6kgd82i22vnx1hzLepGYW8ERAfwNZvFvbik4s7opVM3KoZ4VYsCP",
  "key3": "3ommpnuhJkcU7HnHdbV8pezQw5bqi9kHtAv8oeK4PDjPZ25GuxbnpFy9jM3n8hoiyV36adF3zvFdvcd6wndvVZUJ",
  "key4": "3WZ4H1px9HrQertkdg9ptWgsUntUr7rKaVRSe6hD1YCEBadGFn3SDASWaP7sPKxHDKg5DnsbcAbh7CNQukuP2ukW",
  "key5": "k38SeSLQEsNQoLVnzr5dhHp8ryRkvvDeezvCFpghbgWHCeQZyBrfDnaksbiVrHDV1P8YNji8UCq6ixmTenEbaTe",
  "key6": "2F9Y5pNuPBvaTDSNDrqBugC9Y4wzxSBmdWADZptg8AdoAbReqdhg1gJU7STHW7xvCeyaTmUrtCMmexR1XqaDHgUf",
  "key7": "2dqkGaXssorqMFEbiRCGRS4Y9Qg2HWMtD1SV6ja3jQThtCExSkcFGYQQC14thKFDBtaNB2sTM1RWVFbeEbDqMn25",
  "key8": "5Ea48nj3j2w8BygsAYbCsohkJYxddc5hMT89jdGB1P7g2hHHw5bF3w6jxUcqdM9jaxQ6NUFA8Vj23WnDZ2u3eyXn",
  "key9": "1ADRu4STsXYNaog6jVMzdsXVttsEsKonztizKvmsYqEB3hbVKTjNRGkoX4w4g3QXTHh9yBkJUysDLekEAWo9eP8",
  "key10": "5wFvzb9qVbKe1CT9iGGsj5AQnfKHRna14NVja5qCEyZvyFPQZSEREmybRcjYYFcnm23mF2r332PT9fGa45XP3rVj",
  "key11": "5bn8pw1q1P4t4AfjQ599T61RZh4M9hCr449tqoeJhAzSB1X3bW83ZWDnwo8ftQaWe6XWpy7fZeN8rSnTgUcwRVQ8",
  "key12": "3iAoprLk3aQjz9PcgJMpCHMcbSKTp98Humd45qBPfhafNwj4sAGcYTEttfQ5NbkkDu4YVHWwcJKKGM7oLTrRN5A4",
  "key13": "2F4giAQ1QUmrKHVTHDjGahKyKu2JNYBo6LoiKHz1WGgA4fNaekbgyrPmQXwuunYkuzG7QbMAqTjCGfUWLRXah7Ti",
  "key14": "4TmyuE6qLfmT8U73qpKLBtSKXr8BrdcpfK6t7Yw67okn9aSTqa9b4rf1mCribXVgyGE6rZJZi5vFVL795i6zSbBf",
  "key15": "5XMgRCUG5EtfxQM4Gw84CJFMbQUt7KFbN6jm7js6oH7uqWBqHNxd33CJomAXedFMNHKNDCquvYu16dyummNrcssm",
  "key16": "2J7eZf7YXeSNTRGxZioT3sNnEJkGyQUH13467SyTkW6uJx7Lg6ZMasg1v1anYUDYysrniF1pxE3Q9tPUnGS9ah3f",
  "key17": "4EQWyrDGUz5SMFM5icpyhFaimqp1fSMktfMieLVzXh2jt3yPwmUXV6jD6u96NgV4TExV6cf24iPad81gw1PQHSFn",
  "key18": "5asCVWkqpV4oX3r87USYWCvt3vkP8edyqwj1vyQU1xrjHKLX1nrnc7Uto3pR2Yvp7FjUgRTc3Arj218g9RVWhYFB",
  "key19": "99Bu6bEU7N5RXGbLjetRwCWgj5qsnS72Jf9xZTfCWq4m6LE4pcWF55V2CTMU8CqsZSjB1vtPKMpMik9XAKcnQHv",
  "key20": "41EuLqMuwXkb9Y5Y3QBxiGUTeezUeC7Ro3oX7x6H4zwc4ihBb5sXYkKdc5hbVDCatRMMjXUyJrrFwuq7GknWDqJr",
  "key21": "cuCUZGeQZob68rpPXZUW9LhfvnUtEkm5PA6qeKhJahy2SJYp2NyhVrj8ugmUqtnx6jQhNa5jcGu4anYKNqYCYZr",
  "key22": "5WUmEp6YCGFbN2bNTfbc54rWzBsCPZy3q54DfG21JFoG3wP4VtRLTj57EaPNo6N5eZXnVRxFSsncrTfBcxAv4Wk2",
  "key23": "4td3tBXPVmFTGoeP7rV751wT9QnxpfqPL9k3vquRquMZDRjGhGzpv7nJwJHjiyVN769aByqFcYpmaMDhLuURKsMa",
  "key24": "63mQKJdVYmizxhNt4AVyvY7vH7HJfUqSGVvZaqLuUgEied3H9vuWCmaooqUaXdUNRQJFxbappi4Ahq4wi8ZohVyp",
  "key25": "ytuyvvf6HqJTAoXCsWux7Ux3aFZFvK1waC4Ja7MZj3gTbnGnu9i4LK1gMN6Q5d5N4GbbWNaw3o7dQCVndXmopGB",
  "key26": "29vayupnQou8KiBCWG4veULpAd1jCDwSDbhgBDZ8ZwpMyRKVuwTCQBkw3vXAYZH6QwjMRYCBtq1TfMd3EbN8SeKJ"
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
