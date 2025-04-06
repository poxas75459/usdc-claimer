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
    "27N8pkXHaGaEaxdBMAZvfPbW8y5wnMbtjiwCEpyPsiCE9GSPPt1AzPR1KN9ZKDa8VNkuvuQrMAhwYx1HbCbcpDuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HvAneCoNdVMkZ3x7vR1wLZTTwhigQkVHuAoPucTwZm2PZZvwo5z4J3tC4ybnnx97Lh8Xs3EQn9XxECczA6vns8Q",
  "key1": "4BUFkFjTBXi2UHrgSMBF6udsRoqudKptU6BG3thWyjnjJ9qyGpuKffS119d2urbHMbJL9pbHcnxMJz2XNS3AeVxF",
  "key2": "5pxG8dyfEkAwgsdmYrC53cWgMb6ET4zdpX8b15d5FAr8kBCQNcqCN4nVcx9XX6Y9UraTWbkgd15SwTgSLvwzt1Dp",
  "key3": "3Jt6yT6m9xSQSjY7oTHJzvihUVqfTW4L7GRjEU8dKU6wnWMWQUmBffFK7cNfZvVxpwVV66GAWnNQ1qZCrZ23AWNX",
  "key4": "3yZYkkKgtMxdzjtd5Vs7BZeyarTHUi9LcjUykQ8hUmgzzDuFdRuQXt4rmAfqXxpmqJQxhDp7bU9bNwavTrRkGzDa",
  "key5": "3uWFHTeDV9KyoNrjrDzdt5hXwiBdHf5aSpwk6HNMjjDDkj5iwq76xSeMudhEExfNvur3HXDhGV8v6GVsCEX2uk1H",
  "key6": "5ACurPNEK6muTjAyNZXYr78Qd4GRhib9QyASJ5e4E6QUCjDjfbUypJ2gCeXSogG1y8b6FCQRuFYKWqBcCyyAnURU",
  "key7": "2RFpwpKjeLiQUHxdwL4GPk2hes6EbhdWnQ1mWNWR1T7FsAGt4qiJiygzF99RxcRqxfn5R12U1WKj95zW5ngy6yDz",
  "key8": "61wdgs5ZsKgzaabdnSr8e9q6ZNG138ozGDcFpRNQE9ZbArYUxb3jgSvZYYkXnSj3uxPNfN5hkuyNRPtjFyR7JCwS",
  "key9": "3EzHpxMhYtdwkNDzNARMKqMRUCisdpRLSXAcPVrphmxWCDbHjqs32zWqnD9cnd4pE98V9QQYqeK8yQTteEtdWf2j",
  "key10": "3P4ExCsTo3ijetvimDU54iBPTh3zHjJ3kBwmukRTzb8aEsDDjnJtkMvxpSfaudqYuH5EmrSswvQyvhakbgScy35c",
  "key11": "5ESZNC98svAuU2LpYfLToBshWbUj4ewC1UrPBvGFgCzQoc7RHuzBd3WK1L7RMeBfpesVY87BT3gM5wGRgbFkXAKS",
  "key12": "3rgtj5HiRpNbpcpDbi7Mty7eMPMBFHeQWMKXTP4Hv5VDuurpmwVdQ1V4DwdqyTX7Kn4K4hec1RYZJEKS8n36kc1v",
  "key13": "2tSb2GZLYQZqwafHfAyJ3UhxBsWVm52YU7V8FphGEc19QUyLJyWg3yRwxt3gjLGfBM9Xe8Mbe9kEu155KDY438AL",
  "key14": "vBVrwEq3Zb55aRHuNf3bxiD4V9vJLbKd7Hed7A2GZ3hwF2ofSqxx8Qtk6Job1sk1jJ9gZXjsP8FJ3MJf3tF19h7",
  "key15": "2U58AcY4CGGcu5JDtygE2jx1haTjoenmF7TBePLHAHESpfgNgbtWLGWwLfBaUVuJd4RR3ynfdqviNob26oFoyaaN",
  "key16": "2F18TjrRPCrwc87t6yaumFM5oUSkAjG1fi6Ft2JLts7cortwNMK5paT3aHvvk3b1jBd2i4ruFtgGPjYya2uQfLhN",
  "key17": "5GNCdKJfvYtcm8moL5f8M6r4uQarDBJ5cwNw6G9ST4YZMjUWoRW6MdGQeJkrAPpivAsUPy8y1164dCA8ma67jts4",
  "key18": "5WxnhGh6ddejMLLBTQnEfB9449V2UjMkkeB6DiosF58XrkR7Jq5FqzJX2p87B565C2SS5Ui6Te8yyjYT8uePVRTa",
  "key19": "e2VXQvsWaBikAnyWue9f2uywY89avYCSffQH3pxE4xQmg9u5fbdE9KT1MSNot82CZeY1baJ6ZmajJCZHFc8wmWn",
  "key20": "id5zCVtytRqEe6cDjhuyNwjWA5DaDoxe2ecY1P2XReCx5zsCA75mmNsLDWvhc3x4sYstLbW8aLQcgsjYGV4fX8F",
  "key21": "2vm5aKXf71Sm5fazmuzXcUZx67xHwpdAiccrNRev5415FoFSHuepzt4jTcjkGG7DxPckQ4g2cEJZSQhSXXum2YC5",
  "key22": "4b4zGTbwdBtEwVJUsisykhiNDgB99AVVAWAQ4CNoYz3fLCs2gW763wbCYNFristCr34y7LEoNbgoKkZPc1gTKVEr",
  "key23": "5D6YiUfYEDz9nj3Pqw5yAa3L4feBiSzeeyhggvnMLGjBrCCazEVtdd26auzgS58g7Kw5rpcPYPY7LGkC5AZX36cy",
  "key24": "udBLirA1c9xBCqnpBrvQQPBeS7xSebLrN8Ce9eT2oashpVQDTVpohcgXiunC2tgrHfUCiUCFBC1Ty6wG2uttpf6",
  "key25": "7zgpUvUm7EQKPzEPtVCtpqmwzwqHwpnbL3GZwVYDAyVkhyHsaTmAS7yUNDzZbLTueA6vGS4wNQkmwToNfCwxwuy",
  "key26": "5k2meXzVrtVsjT5sN1Q9o5aBSzu41kqwp8Q2AtwT6VDcAWQAPj8oZfk9WVSsg15n4Nw9EW9icZbAEan5gmYwYA3a",
  "key27": "3F8k8QWS7ii9wswRBRk4a2WVp6gfHf7UttTx5ZDWL7SuHAaD2JL2ChUVXi3syXFUu7WhUshTC7bxEy8pvLwS1dPT",
  "key28": "2of6RXe8N3HvJfAoj3nK6qjKQW3BRNTALFrmcdUq1YWQ4G9UFrvXyTFzxV5aDtnWEGPVZ6rDJc5zYGvDZBvTsycP",
  "key29": "62NJxRs5vaE4ww55EJ7uz9q98V7WDzbuWGJKrDnj7G2r7L2BBgPd6598ZMjVeGSTnp4pz9mQA7jWSgmuTEFvw5Co",
  "key30": "65K2Yjno83LE7oqiJ9NzkndEg5athHLfJYoCQq3TVpY7zuPu9TYAvUFWrBYA6TV5v6VXMqHP2s99iAescVWgNdV3",
  "key31": "63TSWYHSmYBF8G746o6iCQ9Y5MDtLpCg8vTKW7b5BQuRpiUFtHGJC3CiQcz3smvhanyLBpb7WbX8Jpy8HjbHLyEG",
  "key32": "3jW6CaUBb1HGp33pqPvaFBFZeoYqJkFSbAe5a2KnrqoUev4ssd1iwy7dWL9fTh77inCE37fQfR6euDRZGtynfc4m",
  "key33": "4H6wgHY2hAj1JMsc1XvhbZLeYBrBpJswtKfekGwxMseVL6QLrvUKHtwoKt7WsfeRn3NnHuyBud7yvhHcWzBwjF4X",
  "key34": "3RDqFBqvB4VnBNugqb6VTB4zXX3fp84nbXtid4NEL5UgeeJWwpo7ZJpuCY8XbQmgZR1PyF8KdhVNikvE8D4dTsxW"
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
