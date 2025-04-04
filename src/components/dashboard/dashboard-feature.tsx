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
    "5QbApJT3HNLQCgP2F58E39w21WQVNjurMSXmJ2VzcCsuN9LUn1nF9BnAn7LVpv3fTrT6XMdCuJUSFuGpFExpsU26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d4KEEVX1sreqnsGmKyzpcq31Njftz5qwhiWvjbU7CoJaeCgbUuS8rW2zJpDLVK4ns2Da9wXfSX6FseATcps9jPX",
  "key1": "54ixG8KrZ1FWd9ZqR2LZ57MvLaE43CKNmuadtofsXGhJ4oPixWNUgToiZ4AWUFZDdENsHru1zCC1dhK4mgQXBZGh",
  "key2": "3YvVw7f3f9YVVwB8nJRnCZU8EZhsanW3mkh2rVPEyi7K3cYj4nRHPWByA7KvqoEonkmD2qgSePVGiwMrrrW3zRZE",
  "key3": "Pe8pv8Z8QgrCt2ZfRPZhmPucQBxtWtfzQdUiznub7dbCaUy4b3ykd1vfLP7VMsfxvBafn4EU9B1c8A19J49YeiY",
  "key4": "2ifDb2npAhpwpf5BA3kh6SM6G9b2JBzSkhjatsfEtXFdkQw6yZTo2qBtKtD4pp9gnnxCvmxc715BEwn12i7BdGvv",
  "key5": "62E96ofdxrj2Au9YPC66aWpyv8Dwj8Ukwj7UbgaZiatiSYpZqMXSZyZVYmM2FXrU3zkhDg4NkdqEL4uGU9Awu6EP",
  "key6": "2FQAT31mYASco3rPAvUMyFGqQqfJ4HTevdhzaPvugVqZDXoBEMSHV9NfwtJrjuHCtjVzYmVf1txaiKnM9zC8u36A",
  "key7": "4z68NcdcZjiwfFoDU7J67geh39KBCGPefiqoP1Nev7cqVRagsbUcP2ysmQbA66w4sVUNADPksByDGsp1kHKATJag",
  "key8": "4PXFDLMwLaXfU3EwtiWSnLoUQVeyssc37CpqgLudTXfkDX9RLabXwqium2jESuP2KXq1wbLnaSNSJTt8wyEEKzEr",
  "key9": "oTv5dPXaHYGJqjnHYymsV72MiWKhzUXhNpdnZN4rj9pZWEVZHwiSwpeFA3UW6GZoQDMkbtgUiTFW6TBSfz1n9Cg",
  "key10": "2AjeHscKHpsvFkKE6g6vv2kzeTUWrEB8Be3bwuFFwvq3zrH8Rsqo1DbDDdGYMQgCNtXs3oBmEgSpuUqYeY3LhCLc",
  "key11": "3WZLaTRPcy9qeoKRTYoymfq5hKwTnWGhTYzzUZvgtgF2epSZ8T7WEUJ3fZfTiUv258qSkdaiXLDWGgXxuSWsXKFF",
  "key12": "2aLVw9b2X92bhRRo77MNp86b5xpuJpLSPuPYojWHyMy8zNztGNosxGMd6yJxHBGqEA4LU3sUCyHBQmQ8c3ut5eE9",
  "key13": "2xNLa7TUGF4VXryqjFjzifeQWiKqa8HUuPDCXDGfuwJPWMmrQUrZxQT2WVkKVDzrP54t4j2iV4dCAnEgypY5Zv5z",
  "key14": "pEk5A8V2DUFPeLVmpWESsdU2QtzoRjWvXaMwYCEC3N5ydDtweJWLcTuUwUuRRsz3PRmebYj911VkayFK9iWZ128",
  "key15": "5BtfuxT5cdL4QFmHS7tm6WeHwdXU2DTbeoyuWuTR466Mxcay2Z7zwDQ8rBd8kCpB1HHrsQkJ99quBxjbTEHr9DKb",
  "key16": "4TcAXhpikXHneVsg4aitFgaDQg2gB1TATzCczPRyuzKGRuuwtGMjbaE7JGieepERZVdyp6ugdRXx1tchAp6WKX78",
  "key17": "T4UmLtBvZQRXxEWpChXsTNmn3PXCTxvDWxGiNCE5E6sXuNFMCYs3kHnrCLkmDShWoGXNXLjbFPLWqXVbAM3GAzh",
  "key18": "BCTKK4SKsgt2AhZysDzbdetVuMrStCDS3aJSe2iNhichiKYKDRw4ddXQJ2fCp7f1k9bz3dvjpBkpTAYiBPUnjZd",
  "key19": "45xYUbRCzKuz8CCqVFPyHyrERvYCbfoHCvk9dDr6V6gGRxEc5ZQXokrDf6FtBa95xWh27x72bkhkPuXShpbVTKJ4",
  "key20": "3S3K1fiwpFYzWZVMrWXrznc4W94ALmoz5uszsPamMEYW8ekAuo1oz6DGT4E6aT8ZF4f6jQ1qxfxSSZNdCHRD6ThR",
  "key21": "4ky7ptYpU71ZvMCWUgeLeD1CQThCur34zJthkhz62VFVMmMpCLPKXtgosNuMC4R9Tkxts97aessxg3EFM8hv2L8N",
  "key22": "2g9Kq3fm547quTgCxFYPDJ6Jep6xXf8rUWqfAAMPGw2VfBpHCo4g4HYQBrE9v6Yi2FyeHG6LNiimg3binqMFaHZw",
  "key23": "4Qn5pG2BpWpYW4aBZo5HhAgZRL4Ap1naYudVJr2mBDXNCzNxbFiAQVUppznjsWnvKP6XsXgSA3LNRhzpB3dJArte",
  "key24": "qHQDzZsxaczvwDYVb859uJcFwEFym7hQDrPhAxVtQFam5Jmh6preRT6dn2crBzS3mgBtnnKTFpMUH7hfK5GqbD3",
  "key25": "5TnEg56iwyHeFJkuN448LnXWFqq6aBe4zqMpAhHcpuYzzu7xhof5nDLmmm3oTaYssfcDTKZ4PRpJpBFa66AnnnHz",
  "key26": "4GwsMBe77CoBg5o2UQuBJUZbWDAJiiiKKxGuyP7NMY5TdVz6CyVqCmmkaCXwUkqsXyGUbNYRm2i3n1GLAAHy2A5w",
  "key27": "4Kp4a3ETi9iLERxu7NeETF7uEMnjg91XBRoAdEhoUStJn98mGEDudaTAu5hdSfNMxv8sNYHY9gh8xptUhy8fxqSw"
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
