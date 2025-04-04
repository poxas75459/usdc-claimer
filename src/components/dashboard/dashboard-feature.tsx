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
    "3hMVMVwUkYKuobPDrz1NLEje694gHnKvpdewN4zbMmaiqytSDLdKTE6sNDBtish37QB6EGjgJMenym8wkzy41Voe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9GB7u3mLRgskiVeqkPGRfKbwV7SycQ78nUjKkzp6hKwG1jg9Wd6wGxxnDQxiwHFEiBfVByCCwoePyZekTUVK6e",
  "key1": "3gaABeK2XjPUiqBWfExF8zmfFNL5XJeC3Qozac6pAmYnLH8SU9P6WVDNzGRzQHronxc2ipwwwje9TJsjihdxjEEY",
  "key2": "5CZaUaSgvciu8ETR6QJuPoZJA7CUaWXCXCLh3bd2zd2MiWxKfkm5jR5gK7EL54EVwven5oMAywcLyx5FgR4NdTWd",
  "key3": "KeVNJFoMJPVVsSvAdj7J7MBBJYtScx2CCzidCsUobEGp94f7F3DEfe2A1xfdRWw21VcK4sj3KQ9niNLNX4na4q5",
  "key4": "x5DU78wn5PfBWmoyntNg3uwHECmBqBBtzHHZPaUyY5FJzfqvmAVZC7veMcuZhU55UurB5JNvrzqLoLKYjTuUdCm",
  "key5": "547zNuDkBzMdUxTiNgaJmMqpELtaPh2DaPEQpAgZVDZ4EJfWpzGYzP63FVGcCZShCr4tuNbd9GW8oVs6BooL7UEK",
  "key6": "2fa7koVZjg1JivhphTjVHBhbfh2DGiP4vKEGxneFcpF7VKKvp7e1VFegBTpcBeyJgHzqo5vVYLpfcGhGKvkUdhfy",
  "key7": "4zjKM4Eb1uMq6SaNGKoVMfPmPqDp9FHgZGvLZv7YFQGWh4XyySQ223DEjLKRbi5VAWF5SJ7P1LA1vNkQYjYLMG2d",
  "key8": "2JK7onxAdAZGiELhUgXsBXAQFJzjDyNxDCQPPJkvtXhY8ozn6Ljs2jq9bJ55uX2EVSYrNXgBRgxocR6HDAXRUPGn",
  "key9": "5yMFzSox7gHo3g83NdmQ5bxxZFMjhtp6Lsv6WoWGuR8G8rcrmxMZzJGv4MseLre7y6fe1UwYeVewiaHxvTHXFBS3",
  "key10": "3Kepacxib4PFKEaa9WbZQF9raHgpmeEsRAWd7N1QYq5yqZVVFHgrPwPNRLdMr1dgQjJ7byDB15gD8LtPD2CcrTn4",
  "key11": "4sAWxZiJUqFvLa9K2E6swYmCTFttFWregckzf7EQ13AXA461TxW1LAJCpsJi3mz6yQnRrgebfjcmz3iLRxeRvmci",
  "key12": "KPQnSjUN9QsQQyUqJSJg74pyCUxSw4RSgQF6P3xmF3uEmHBT2o7avgVHeSVUCFncxZGhc3pnWxTJ7aUk8Q78YKG",
  "key13": "2f9YyjZrwby9QQbdjNBoVgZRm2e1avDi8em71iQXTC1Fcx28nczPiswGKJHseL5hRNtGb91tvgdfkJ6aar2pbDgR",
  "key14": "3Z3M3UegTg2JycpQEcSK8k3mzXUhzA6iof1sPCC1UKS3ZZp1q5VTJUUJwbjUxbEtQLrGN8BAjcMePKH4uW8RYnps",
  "key15": "HbdAU6bknmGtSDZ2kGfFacXYa3s5N8vjUAQ7MFZJQYjPAmAbSr8rx2eg6nbKDmWgYPb1AMECML3D76TwhcZ7DK9",
  "key16": "4ZbyAoeaachyKwdZnAX1DUuFJQhank6UXhSdwF6U8uXrFjuqdTTEXzt4RJwR2au5JQGQGNbYgd6D9mobsFQk5P2x",
  "key17": "5123NwbSeEZJQQym4w3dJ2FjxN4wWU8WUrN3tJ5wwbmqZ9xHmQ8XGxKdw75u45JXdXox47RE7fVuQSq16VwwbuFH",
  "key18": "5MRtd6h67GjbdsLv9TpEvZWPys9U9QLWJjGomoWK8NBV7e973TmP9QEqbYnfdxWBhQPoovmfiwvVtAGSJVr5ruoZ",
  "key19": "2TgV5xDbXusv6zz9tVzXi3cn1UW4Ae9Yo1YA9U7QtwanyYmtvL8sFf96ioWycE5xkHYafZjw77oGKTmEAKsH1Ee5",
  "key20": "41DJq15nEdNAm8mrkGwwwHBLabmCooK4F3217fwWfMJrg4f8ju3igQvEppXktXNdBvkTP8WAXrKPKVwG4n9pH4Ck",
  "key21": "3NB2rvXSBLtawRFGGD8fDH79d89rmU8Px1TY8TW6tqe5GaT2mTt4AVX5SRFwm2vz2iuQ62fLfjn28YmyQooAgeZN",
  "key22": "7qpYaij4WAuTWPJQ9JZ9X4Qxjgj7Ndpe8RrjiWBSy8RknKh5nE5uetDN5mztTa19RKLRZMDAhuA2kWQPXyKViEs",
  "key23": "2APpMx3iqChakAESDg3No3KMTwYYLm4BahKF3vA9QEufosgWC8P8HoXNJxjwjBogeVkQehfy4ikbymiecppVpoBD",
  "key24": "2YbEMhCgboDvqJb2kcfReAohd8SJ1fNwnEHtBSv8GxmqKZbD15m9katzP4ty86UjY5x3q6scw5Vcb78ChkwGT53H",
  "key25": "2LkjY7hjL6cR1K83aTzxwBrY7nc96H5hENwcNmx1bnbzrRVAXHL6HSMpvmnTcZem1PHELJ7bA8qWYkFyEW46KT3N",
  "key26": "kVu4SAJTWoz5H4wp97pUD1jXYZ8mqMA9urm4YxHtb5x5iVhPfZxbrDheVdWb7cAzMmnftRufSTxUSL7FUHEWj2L",
  "key27": "4J6VzZALH5ZVj4g6b5AA2KUG7b7nKabNYNyNP75cXwkFcFZUNhvuAfBcuAXeBG2cwXGwiQ2vvMe2eoZ6eURRM9ih",
  "key28": "Mjay7xy7RGrUDm4J72PBEgeMbpKhrDfe79FPGPYb8DFByuiok7yPwYAkfNhaLmoU7v1myMKWF122Nxb2Z7p3Mst",
  "key29": "37ChYmCb16NERmV8JAnLwnWbhtBVSrS9YELyZAyGuzBTmrGsDEj3tCWxxjmzdBNGsYCPBRpcEUA8XxJA56MqfsRR",
  "key30": "rpSano4t7osQCT7yjeRhTDPi36cxUPPE9vuRWYmrf8qpvMowNLE7FgddAuGPapC1d92Cjpcwwkx5WCBhLHyV2vm"
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
