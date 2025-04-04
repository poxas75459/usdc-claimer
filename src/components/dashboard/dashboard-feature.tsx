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
    "3g7rk42N9iZtUjtG92v4MRND7w9FoUFXYM7rnsr7i5ZNiHtETRnmppskQqJRdtiq5BFMjmGq4oam1Pk3Q3jZ7tzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vsLjGbofHwvg45XaG95Tw9WoDPxKHB8XGGHSTGfwqxD4kVkgdE6HqRYj7bXnqKQVZSb4EYG91QDqgHjqb9rZLhp",
  "key1": "49Wp8b1jQsuyTK31pS6f7V7DFgni6hJQQmhc4i8mKbeu8iWys19BdFmaY7KUG3H41ueuV56PNDRpMgcNJoDQaZJz",
  "key2": "eDUzPEVZwNa5tAzkKyWVYqezdJodDfi9aUJYy5XgAf61xj2firsprnFJGGvoZWancJXZmUpsZay86vRd842QfPE",
  "key3": "yduDUPoE7kgRMZxRhkyLhUyi4eZqRKpWYa5YkX6dG19CAYQ99G9mHGZ8kkeuBW9rCqJRXyqr6qGurU2XWB5AwxQ",
  "key4": "4RT43YDG2cwvvbz99GnwHxVGXsPDKFFbHP1L7c17xDpeYXL4ZFvNkbgLJtX7WzomC44PdVHwp1jWtczTVyNGnP1Y",
  "key5": "32uzekoMkQJBGQkkyZW5NK4qhtbGEkNeTFKCu2s7oP2knZzmZLEYp8u6DY447kk7vrWWer1FRt98Vg9QPdDBT7s7",
  "key6": "4FYY9p9WmYvvqeVm3WDKcpuaN844DQbQTGUptqhTKti5fj6pNnYVmN8XTuoDXJKmadvJcrLrMf4juNsD1Pbrib9R",
  "key7": "5MGQFoFVCSPrCqmvkz76KuzpPiDgRk31edBFif5viv8nu61z5FX4Uhtdb2itCQJJVE992BWn8JPbboMS3ddbNkBX",
  "key8": "3CfMKVyoWqoL2QG3TwUTkDocRCu3e4EnbDhQFh2rpsXjbSWG7FDYz8WXcKsotWHoDG2uQj95bMd5YoXYzHNjL6L5",
  "key9": "Dn36pWFkRSRVvWLdytzErXdhuVaBt8TQfhe3cADEWvnxAtYne8JhksB89RRWz8SvrKMZbS7ZLhPzCeqh15AxQ1f",
  "key10": "3cYmdzytMNtC8DLVqnxuYkPbRm6v8xT4utJuyNPgMy6iP5ArZGxHqWzDMFDtfVuqeaS8KVKgbKEeUMe4M8tAEkbK",
  "key11": "5eAsbBXCPFMzVCMb6DavxDqyG26gTF8LtB4UVjumWjKjb93xxevYVwbtXiGKs5iaW6KksV36PgRYbXA7sXRLJYTu",
  "key12": "3gA9iAkzx4uZj8MUNYNxWKCePTiRXAU1uDjMFksTpzRJwWbL3r9UrvB7QCyvHXBX3e4WY5HAEddwwswJ9U7pFkGF",
  "key13": "32t3t5EWmFmrrNFo6Szkb244usZYrCjDQw1mena5qc2TXCwpkf5RS77mvxmWrpxt4YqrfJbr8vbDvUWMs6MRZhfj",
  "key14": "3inXX8hESSwLJb5x5dNTWz9m8edd7RLfAMQT6FQXx8KYyFLNcfTA2Y3MKzgLbpyH1j2a4SeTHuyF3EUR6wj6ud6N",
  "key15": "2zZVm7EyvWtU6fijRP2u85fFfhxhCsJoFSBYpiayWcAs3tft5ZZWTHTQ6pQnfNMtmPitPg4JBzeLgHncKN8BaFB5",
  "key16": "5zyq9CJV2LrEqYXymigKDLaeop1rpvxyYm85fZ9kE9neVfQp5P1bnoKfa1GegAjmCyaMFEVrYzvFKFE2A1QfJ9Lx",
  "key17": "48soxfHso4oGEqaS9Z1uSGknGL2zynXfvK9fQjSsxoL2tKSoCzyBEg3hJZcJY3gWZKWSJjoECCZCUZXx2bTZHngh",
  "key18": "y6XsmQXok9tKjbZAmRr1EuGAgjPwnDQQ16xvoXmaEtmiaqF4W6SUQzVSqAttpax4JjeQ8xQcfHderLQHNKhY8Qq",
  "key19": "EGTzTtgQfDprjF5htCAXpaydxnF2ZP5p54fPVz3Bwrny2mzvV28fRoVA59RXDg598FEwM7C7mWZfqp4R67DpZ9x",
  "key20": "3hXHp34BWcrkzGGrZEm3dBeZURztH9isq594WPARiNmeiM4grk5H9da3oNaKxucWquw3fgRE2wQavkFhRTHp6pU",
  "key21": "2Sb9csUXGLR8xWuCFsgr8yACrWQnPfdbht5C2bfJKRe5nQjxdKSn6DUqZcm3arxvmHU2FeJYxDPmzucsPWfepEs4",
  "key22": "2bHSHYgUMRA1o4WdP5v6UUdWzbfAkKpbH9DHxtTahzKtTqCAqkuYocYxLDTEVopkfMKsLomL53GViG6QAhT8ByYn",
  "key23": "66dQaH7qvBdGrbs7LDmD8FdtKmUWsrDddip4kQ9RfVpeyHTWmcqC1mnASWXvuaFiZxoqfNFFapARCzLUcquu3R9t",
  "key24": "o8tNtwBnBC492cgGgB8sT9x8cXsTrKNcwCU7XLzLp74GkLfa828W6QbHoMX1VzG2kykpvSWh7rznJrxvJEkBFJW",
  "key25": "5xo33YoY6JmJg7deZXyHcFiNL8EFfusTMLK4KVXhrZgZm188chRe1HUuTksQ37dn5qKrx5HuUJrn6dfiKm1E1CFr",
  "key26": "5iywBMjYgVfkfpWmua7kP7463Bzy67kZjZi9heSX5e5ZFmUYuNiKZ14EQUk6y7ngaSBXZ4bWYHF1NTT5eYvyJjRZ",
  "key27": "Rz4rVAuReULNhDbhxfmpXpqDUkRikiNmCyB4gq8iRd8uDrzHmEBuLTcoKAogSkF9H1Wg7UbBqvMtR45AD5kCivy",
  "key28": "4hEifUNuiLJxxCPKLsx1iNqnET5PtkHVmKpMN4Qd9hBKaswcpZipvwyvHJ5aTLBTMtC3gbtsWUV3kMDFFEKXfcNG",
  "key29": "2qqNyfhLrFbKfuWqUUzQKa95inuYivQs2FaPyPBTeUBAWGfobVcuz5FBpADB6CP2ZSdcnKokJavLf6qckmzQrNLn",
  "key30": "2156XA2dAK5JfLvNXsBKz64h3mtxu9YpEhq6fEmEzx5iaFWZhzjLqwKNzDqYSzReNkoxG3aSmhNyWsDaQTmu8yBP",
  "key31": "qfnEwNZgSfq6Z5gXeNNV7kFy5kdyunFUKvzVALRWyxUzXnjb8o5nyVT3kqBswwogpACrqkN23wqLewZ1wjikPXU",
  "key32": "5T5rdjmWts9Tc5kvpb3B6Squ5PgkfAAhkh4hq4wMjQexfFrkUuRVxqhMRbZsbyhDaVDy5FXGWBmjcpKY7tWt2Ux8",
  "key33": "3GVzH9kRxS6NMmrd3N5iJB8bZa3Q7rdP7TNS6XR8utrjVg7iyYqbMMavGNVm9ekz2zSqjoqBhcsFDRSDxXozVCFn"
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
