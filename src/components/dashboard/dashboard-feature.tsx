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
    "2Kow3YDKyCzwKUDkPJ6QYBCtzMCte3ksAVwwKBPPzgU9pgTEf7SZRhx8uqn5hipYJJDD5mfNQJPe6R3qZJg9cZev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Ku6HRcaPZpzciERHa1dJcptb1UAxqWgdRArMdTy2E6cUZ3wdVuZq9d6ztQjQtACLn9UQaXYu3Ld8NNAFHSpppb",
  "key1": "55gMKQYgj5eKF63XrLbpd2r4jugZjxBgDRhvu6iZUpmkXfv581ZchNbejjQMNzZ8c8ptZRXqcgkbWknH6q4DqcHi",
  "key2": "5T9Hc4yzMhrQrgtwgEGphc9bL9MEmg4LqMxBwss7S4NvQkdjiNcVZeisSr4EoZr17jTFKUY8Pa7638X65tem4BBG",
  "key3": "4S4MACb7ugobDqymjwMD7cMu88aoBFQtMf8Kze5rsRrjuDwiY3ATFSMTB55hQ6MMGEDG5d7ifFxmfJrPnZv6HcMv",
  "key4": "4D6jpFvk6FaK4h45yRstShrbmNCwaad1Q6ymAijXgp9oinvwEbxok7QhNG6gzaqMy4oEkhTono7Uk5tjR79mdB3E",
  "key5": "273FnZQ4rURsWzReVs6PMMLb8YNUoqnCTmRF6kXDZtGK9WHF4ouCMeNihwdYYX2L2re69Qh4MRbBjvNbbDq6qWhv",
  "key6": "26bzQ7pnxMaQt9dV8n8PQcKTRAswW1oeGNUf7c4Zauv3DMNXU4NJvZe7pGEivEGcxCP8mtDv5mpvf7vEXoCxh8k8",
  "key7": "2Lfdc2tZBWXv46UFKuZJrJKGgR76b1SAacoVudGXFJWbfvkmTL2Gr6kvidBzhEtrmMc8dRNYrsgC845uuERDbQUD",
  "key8": "3We2zdhrSFkUVrWuWtpXbfW57qjv917bExxJSwBYuBaYwv6W5nbThMLQnn4fSTkH9WndMffEc4uE7UsCkBXDMikv",
  "key9": "2up1ZReZ4LWkhdE3mpb3zzJxx5SMZQajf4cgBPdAqVMAYwM3KYZAUFFNNB6Aiw7UAcD9XWX741aTJZYsuFkeXNFQ",
  "key10": "5KGjpszkixzJpX9B5xYRWGAyhTDtfUr4TeJe8rzDKFFokfwX9bH7eeBiBzag5GhWMB44BCfE8Uj9WQJprgzNaiPB",
  "key11": "2nd6EAXGmA45ThQu9y8nfqJdDbv259dXiYjXHGyxsY8Z5mpJcF4ypL9VGRBtDsTg9ZrT6sfftqbnWRo8EnNnmfJR",
  "key12": "eRcyz3QuKSEDuLpWt864ovst8BtjE9q6scoFgTrphXMvq3vEMPUoqsifU9VeKEaVWpq54HaVQzv4EruVotKXvmF",
  "key13": "3ik3oRdvSryqrsKNKXTTx5kvZ9hpbYiGkyAfGbRimLA2bSwF8ga2Zit5rCcRN8XyX2LKs3eSqDFE76sAVkoTQ5EM",
  "key14": "4WzPH8P62t9kvfQpLDQwsZm7knFrfaGDnZNtPETJ4zkXhp1ri3nJyAKMEvRTKixEVcodpBZVrFkW7EnTuvNcxbam",
  "key15": "9dxoEutwhF6GT6xPKBiWeN1YGCJgTjsCurtKJYGEHj5AHsyigj9EJHDBZ3VcMH9JkXJYjp8ivQHuz5qdimXwfcu",
  "key16": "ztbBYZ8kswe5s8hfzrWcxsCRnDjyr19ChGn8nA7TA2gtmBc81hHurftPv1y5GDP9q1NCuKmi9Jmn6dbyBhihEkW",
  "key17": "32nGCiaiFcrx9rvZRpHTSe1XYLbZUcRbW9VQDDoLed9Z5qEfTaKRhyYkX8ZfHe7PEu5xw3LDzgtetdRn1c4ztVJe",
  "key18": "MYi6WiVKuQBjVcQvdeMX4wtEb4jR57caQhoN4dPY2yghKUYKoBV5mocosAAuYHuoheHBfGfXzqTKDPLgizBMfYQ",
  "key19": "E2MPmKkg8rxQkHnewDwJveBzePNgEEo8rw6t4dWRgYwQffkeKnZzQnQtHjELbT69DwgK9Egx39F6PCfLy8bjdWm",
  "key20": "4K5KqbSbzTocxc5XmenWiLib1a7dfJLhNqNVATHgApHgKfoU33MY2oUGqVx5KgbEXuPfSQTa3wMZPTbBnRvXDhqX",
  "key21": "35Fes3MxR8q5iUVmL6b5uTXyDhP123wqm4RM1VLbNPj4BP8XzB5mLWG6a9ooPTnthTbJi5QFcQB2wjkobthaAP4J",
  "key22": "3bfzp7ffUtX9tv8Fc3ZdGhmhdKy7nAfo33yGf7pAk7Fjj7L1CdNktUcWCY4cQrMCfDa71HBA3yXHqRikMetaR5eN",
  "key23": "3XHtWtfYg3dUjUSpHRRxsH2NhbAY7NzZMU9Q68oxpxfZrvuGU63JBPmJW63FMaAKVSYfckweNjmaVaK1mP1VNf9v",
  "key24": "3Q2QdVKGBBYivdEW7Y6v5x48mZgKk9dfUGGpZN45UGcJ722147ENE9Bib6UDJu5RW1oWAVDBWFapSPWduSNwBdYB",
  "key25": "5TY53ZLVLk5D2fwSdhJ67HSfxSX4VZgLwKAr1CsX1dmP4so5ZFNZhro1nQ85oCgT1UPZMwnULsf1aKSJw7ydbcDy",
  "key26": "5TavwiZHLSdxge5cyjjev8HgrfTYyLmfL61YNC9nFrWn53ZHNHUbYPDHuRjgYZwWtEtjhFwYq7VuioStPH5Vkw1v"
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
