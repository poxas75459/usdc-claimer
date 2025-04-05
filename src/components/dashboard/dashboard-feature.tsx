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
    "5ta2P1XwMq4oGwnnaCLNoYUQr52KmwXMnSEqZHC2QMaWpXqvEMoogukfFCjtpo5VauMhwrG9cJzQLXJs5RZ1fZ6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hCVcqft9H2j76t4sE2E3YhEjRkCZzSNpYie5GZzqBytMB6bg5nLwCkJXzMkqrddtLuuzfYRTBADKJWZkyZKCiUy",
  "key1": "3P8fUSPJfJ6VkcMV8XsjRoYdzrwSeXJy3bTKFvrTAqw2He1DKWiTdozcpx5ij1mvJrVvKHAUkc8Th6xd3UnNuxff",
  "key2": "2VJ9fUjVtEm1T3xrwsJGffaUW27cxpp3KHJLB4oeu9jZGrwSMjbqPpBze5Kc58kbDutmAU5Q9SRm43bp2emVhseH",
  "key3": "56mzEQWvqz8EczpEvxxHMMw55NoiC9TuPApHfgnGzosS6KpGQQSU92Q1w55dLJ3NsWkqp7PcucdrMYrr9askWEa4",
  "key4": "ktmuLigYFmnvbA5sRF2vEWgq1ExsMMzWAB7uwZV557LmthmiKMsBRrpiRvi2Q1ZZigvo6qJt36bxVrBcaSZtWzy",
  "key5": "FXpwdSs51CDHSrzxj5jApnjbKSrwNs5ZHFREvYR5SdAA5fVY3GrwME58s6XEwEMrhUFhbdXnUBVz6wViNaZftCo",
  "key6": "2GyP2G7zUi27q4Jev3uHi1A9gQTUEWnNQVaWFLG7DC5T1Z17z2SscxqstWbib99L91KGKdMFExHMULM9PGGMXrqQ",
  "key7": "4cqW7W3dGqbdngLsRNg3k8YMueb1apwaJNGX7n4W7SqnHRnHu8ewhrcsjjW3nNGgu5Q3jSj8wxz5y6vPLksQ81wT",
  "key8": "iiC2MQ5AzoG6DL2eMtSQKuTZ3hFkapZujChkNmybHpRF1aSwXFrf2KoWL8RwBbjMEpF9uoERdVd4fJg5ffLYubN",
  "key9": "5L7u51cVXUQMk2HeDhkbqqMwMCXgvrdwFiPBSEG9qXahMMBy7ndPu6vL3XNuHH3Z96PrgKdD7Mpfm8pKbSvfXu8C",
  "key10": "4GzSDCsyDvcTGYNNunZ7M2x18g6TyNa3gvY475drWxAdHsX4pk3RUUVpywwV1pWLMJDaiT9CMrZJfiQAVnSNqur",
  "key11": "4ZoAzDvQUdk8xPkBCAJXoTDcLhUVXu3aFG2w1ps3TyzrnisYemHCuyLopfYWHZNSdXW9QAEHMgnFm4VNTepWVbMw",
  "key12": "3rg5twTQsgXsprbGubB3K6hFzJfUmLVHU8yJTErJgUHFke93FpfA5rDgoQf9omhbddfXdsHKMo42mHFv7nQVW8VW",
  "key13": "5epz4fStH2pvYBViZCwDCrsjikEyeWxXzTiDCXrgDaVULT8ZVpP5KgMpmCnJSrfeLBY6m41WdZQY2LP5xmQ5ivxA",
  "key14": "TUGFoqcCc6vhBwU3YsJ5qDewqJQaCd9pskUQFF71UmsVtGXxcX516QWtWmwiXMZfYHU28qyhDUM2kcrZahw2PHw",
  "key15": "22VSwHvJQ4c85DhqiPsEat8PBJ1yRpRSu124foKPaU1DKnri1ss283AiEwzW93MFPFLonh26rSD3Fx3bQD7bzWFk",
  "key16": "44feAi63qaJv55YtoQxYzR8Y826oswbbvLduJWWgrbkdeCUxa4UXZW67B1TfdLPeVHgHTfNsH6u6jE9e7onPBP23",
  "key17": "2kRc7q2VC1MqBegJ8cdJCDNgCAbC3TfUgm3SZ65KH1i9oQ1K9mHQpfvLH7EtJHDFviamv2D4X1UZmpHGu9zJuGBt",
  "key18": "2jRHRJaMorfgyLPDGFwG7f2QV5UxGoNfTgJiTQjx4RumhVLRA5y5KYP3rq7KCZ9DEphajANF5oEHYaeY9VGiQDhQ",
  "key19": "2topA5B6pr12YsSbqqGYrsLuuQBDYbKfMBAdD7TPrcrEMtHcaFpBBgo7adEupF5oQKjnHLg7pgQ1sBkKpwksUN71",
  "key20": "2X8gXCwUYZajM3KV5qHAzSqyRvUGx3LSEQCsvmPygu14VmTu6jq9ZpN1p3ZDJUNPcZ3ezuRrnS8PiQxk1JAfXNmv",
  "key21": "Mc33GtDnzYvPksZjF2r13BGKpBMmn67PteoDhpSGherMQh5SSmYwF6DKw9yUjshJcjoasJrER2AU2zsgXfECPoZ",
  "key22": "3ZdGwRaRSDvfAFK1vExFfzptjqA25Uo6mtdjfPX1XG7nkKCqM439273G8qPGaXeUg2EgPPmhe8Vq649z3z7jbtrn",
  "key23": "391rJNLcaTD3BGsqNxQSB1JXwa4YaFvRes3SKELVuhzVWYaPBnskT4DfJ28pAKLychBvDRw35KMWc4Y82L7GTJVw",
  "key24": "2tuWkm3KMjQszpUSTfL2HaLsMZjG1pL1cMhcfWZqQQciXavabajUUmUqBYA66XgoGMpnYtcTb4BXQTeAf7SkyGBt",
  "key25": "35AiMQYx8e76ofiXkzGkF9o3eLEXgMPW2nWziCxEkPZCUZzT4ikkbRemCKx3rSPAH9swEG6kvooF3GAD56mXpwCk",
  "key26": "4Du8aR5Ck3eKhCu7P8KeB2te3CYwjYV6kuWSHy8JXtTyr6kJvkTg9zropwLKusGcNDGJBoqdVVb4HA343XkkkKo6",
  "key27": "4AWa5UXtJKBShsC1msx7yP5BUb7aB9BWFBU11h2PQFDWDBkg63B2rcJnoGDP3fnM76R9oucGHbxoPEktqtntReKa"
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
