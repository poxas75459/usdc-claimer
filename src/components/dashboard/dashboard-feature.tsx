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
    "5gY5az3hkuemGpfAVcNLDBs8johostqdRb4yx1W2Fc93PsXR5CmafMtVqRcyEqfLH9LAUwVifEK1VhoeAdjFw6Dv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LTTHUgi2cGomzncdGAY7ahvSBVr9ysEd3fzye4HMkPYYapWYpiZFxvVBdkKgSw8LvJTrgodJS4rRvHBssmt1x99",
  "key1": "4LKfVUBRR25be68uBLTSYiuwXCSZ8ak33WPxPt1WZC5HRz13tSen1keFzT3CDn5fLdgfyKgQb7MFV9Dd5nnypt1f",
  "key2": "3uWNXNYx2EZRFRfQTyY8qWf8iD5JfHAzocEh2ygVCtyRJtfyGA8VKEkiYxSyBw4ZucqrNB8x4D5edagYYqNSH5pg",
  "key3": "38yp4LxmRqCW4b9iD73XUGWM5DDhVouK1CH2QqhaMZ7EyFczLjVzKBkt8vABRmrA4WbPW2xhdfcPxtqUyCHtcF4r",
  "key4": "5WHgdFWVorRVp1MguCGRru5NUi71ziB5Tnk34Jhf7hamwJ7WuKYncofTBxYvh2HFhis6UHkBNLUFe2K9pmeAszZ",
  "key5": "E45u1vF9gnRm7qYmkTqvKxbyETxLyUUjiAgJfG8i9cJZpsVHWZ9sgMP5Kh8E7xJJUrnhbubyc6Lf827MdWEiAPM",
  "key6": "5F2xDAmZgN5KFBpao4U6cEiNAV8Giu7kW9w5rVBSsMUC96CBLLtKMjwcZvrdyhcLPFhdynJuynPZ7HuNbPkjb3id",
  "key7": "5HW9uAAm1wKBBMcMB527ByzKDMmEYvT2De9T6YgbC9puau28zTzqMThq2zz1r42BagX9fYWTP7rXBVRSmWiP6jXU",
  "key8": "2f1u8nGQLGbTUZg7BdSxwsaUx9fDyeD2jr6yX4f4jJhvDZgSonDw2HWruS2Aavw9dDGVbyyTDLMRABVQBbhQwkfv",
  "key9": "3LxVBQi8JypjgJX8uqe2MeCnTpkJxDwHXjuYU5FeXRXKHuRTi4N5cvRSgu62UNYgU98Y5D9JGBYzn9DRwxTAXR7a",
  "key10": "67pF2wxEsDM4yZpCCzfn2L2y5ZAogPzdMakWGDTAP2RVoMMdTd3LGTHtJqCAU8VkvmyPwP8bSXBq7W6vRdNWsPqm",
  "key11": "5BYFQw11caxr4uC6yCu9QVV37arQyxeZXNNZpnkroVfMYfoWWZY1WRrFwaxqkiqKT92ZTQkZPBUbD6XC96Yqk8tY",
  "key12": "2Hjkn5n6PH1Bk1TPizKpeBnBu95RhJgYH6nHZ1GCTKgxTDRDvcJorY6G4N19CaQKUnNF9SMHLDzwMW7uaHiLhEk7",
  "key13": "BXqLsC3CR3UpfAJnLsdGXqMdJNgbmfZtnLTbqScU8v9AePf6qP2UG8A6xyr34cQSsqRETvDSU9PSYSVQCP57cQZ",
  "key14": "4zCU46RQGhSbK1PPmVwwCR1zvs6HKWGdsxm7UL4cAfsLUZy2w99ktLLty4U9j1CLmqcNSKNDNEp7C3bcgPoGLekh",
  "key15": "34mzqkCs8KVEQu8ZWBbdbRDqs5v5JUcyFPxrtLUKSYJP62UStU9XUxFzZVmA7ShyfRwn81KPWPCjsxvggz3htWE2",
  "key16": "34d6X2GMJ3VKfWmgHERRqU9M958pr7why5CV4cZyCZjufTpbce5KLbsVysRrd4Y7BcuctbVicBjRHVrqMSdtyKRX",
  "key17": "egFwRunW3nYi8p3z4aJQM9iXPuPTDhZFTTVSG5QaFqnvgJHStVgt71zZENEHr2tMMbzgV6RBRiAYRRAuoRCbVH9",
  "key18": "E48LgxfVk9bPetVA4oQo4aGYkCBWBkFWz5giLjPb9kvufGQ8m2biYURxYV6sJbAocEEiSsnX5gxC1savxY2p2By",
  "key19": "2u56HD4uGinhkMScX8E3hWmfRs7rqn3Xp5Azo8mDXoGKYiQQiWbfisRHnooJ8EMJSPrPJpDN7unqVuUUvHurizk9",
  "key20": "64jK4JGGBz8kvuBwerHMKA1rvUqfj3exnuheHtqugAhHdBg8apwTZWSnUAdVfeshzNi46bErsPhzbbG9BAwUBHmZ",
  "key21": "2foq1LbFcDQ8vnPfe4WZStuK2GdAY7bFAESKRDh4LfV7hkghuc7f9rCKDu7ghCWLYvGEDchjBBngGDqkBhyJqHsW",
  "key22": "2d64CE8EuTLyqvHmZ1yVVg1XfW37W9UqPCLnrTRuVN4LJhxRqJwhjGzXJ2khF4VjRFcFd5JqaAQdr43D4EGZ34Zz",
  "key23": "5g3yogzsZ6dWRvyVnew1brZnAdF5wR9j75fceUonc5zxuTRinxVHfeictj7jVnzveo4woRVnq8YbZQCjFJNGWqnh",
  "key24": "2KCEKsfXzG9TyZGxu6LqxgsvcT92wwJC5x7sA8d9VuQVn19TT63EL19oUCqeFLUL7zWtVdjWiRp6Ge82U39c5jH9",
  "key25": "5FYbyQjVm6gC7kGui8cQfocaCUqEzBKQPHo1CZ5K2SUhY4T7wzrfkAzht1L4VCk8tyN4kSCvf7eFTuoRZokruDMW",
  "key26": "4mEEJUci3hm6FD74F4tTE8Q8EYJdG3yL3VGLHaA9XitJ16skT9pAYpp8L45zkpxPF6Gq7SywHEryU54XKPnWynXu",
  "key27": "454SQe8UJx5ZzfwgVj512xSUJCtB1HSN1hRxgw9T1yBRuKKyJTh5TYjkJBQi5hUfFtURMji4HyoSRBvBy7oE61AZ",
  "key28": "3462jodz4weB94SXcoMh4GnzzTa9ZMWSvFgpbxzs7avd7B19Urw72jyxkNdp4LfJv5ATU6szS9qJDuwvPkznFyZg",
  "key29": "2FJB78Y3vJxtvUNXnopzUVRT3bfZ5gHmNguGp1JV7z9tZskWatcFCJUoRZxvS1mGtvy2WeTgi5LBvkXSuqrBJh5Z"
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
