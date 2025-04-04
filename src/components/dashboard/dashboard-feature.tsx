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
    "4wbHS1iFUiWpx52ewgVEF3WJcFFYsLenB7yaQP7UUuWFhLtwSzUvvdTwJ1ewhxzieBzqZdrWsjxKiGYC5R4Jfcht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hRWcU2tSjpGwpmSj8HvoF4Ysi9RnZicBZtu7vGrhP3Tri7MAv9yc2pDyaCp8YhqVP6wRpDiZiW5mpmkTkj8hL1a",
  "key1": "59wUeBvwcNq3i6ikKY3qnRrYETLkWTicZz9ZQsVoECu7wAHJVrfdakx1KmCyKdKYEbdLLTFickNF6TX3WpDjvQ1E",
  "key2": "2miEDj4tsYQsgEho8AS5FUuHheSJrsrUvsAVQN5XmTmUtTmipyCX5fxakq8v7podc5hvcu2mPGKNxcF7MgxZDs9D",
  "key3": "4rssbTYQGDzbHpo8HWVb8hf4SyKmWkJLYYxBaQguLchcPGQsey7uTzUxMfZLfYYDvEhVHx9NTjgwUxa2LhMttq5i",
  "key4": "vgsZKJ8zohaJVX1W1yypGAmsA3YhP87nw47bubYWrgB7jrn3sY2h5XRzAexD6DJfCCtMULVmMKVnQUJ9qtHv8Py",
  "key5": "8MgaK1ud8ay9hAkycLQ5cRFoWeR4MF3afW2xk7BQQBBpZ4mnusesbaReycZHP3J2iZodTco1jZcF4h1jioMrbLK",
  "key6": "tPvPAsFVHaKoQgvJyyb8BVPP5VcRd8xSR5uG2YAU3cBUUrsViyFUJUZymEr7HPpkYan8vMUgFPdMUsGUWHKMEEQ",
  "key7": "2ToMA2kCoSh6cBbzX8TxVmX6sqVkhqjV93J4jkwGrUKZjSKXkxSSedE6LNmDe7z5N47XZ3z1Qyu2kbwrZju6oCjb",
  "key8": "5kELWQKrBnkoDmhMQD7oarrhwCrRVCBdMUvi6ms8fiUrWHtEipydGY9GxSEhaT4EhMgDsLmQhcgGxLrDDwMRsDNR",
  "key9": "PsQfSxgHFoTzNkUAQ95ZyjAtV19JZxEhtLcMH9bd8ro9zNrGJCoRXbvjqzYaMDT8BtE9g47JaLBBTpLzdVTVLES",
  "key10": "8Ewg59z8rk98e4pXAnJ7QUfC6rajShR5qq2tLHqCC4aeq5kAK2FsAskXWef33gysVj3pUtSG46LKwvg3Lh9Mo6W",
  "key11": "27WCzjSarPEyVhgpfLuTrgwqnUq3Sojdjd9esqbWtUy1Ms3aN3qD69APU8bZewy1qJPKKvigZAXRCiw2Ga6RFwpy",
  "key12": "Ner1UPGxwCtz1oewRsbcJ4uT9eQ4DzKAS1QcR8tYHE8Bg1etNAN8aVAiDB3JXgCh3ENyUDmVnDvc8BsR5S3yHjr",
  "key13": "3rgj3LqWy94qbUNDZD1AnhoFGNKDGkjRDxf9mSAhns2AK9V7eXnrfMSmbzveKwkExrqNsga2H66qzRTjz4jr9VvJ",
  "key14": "C3GWgKcpQu9hNpSCAKFh17wwAzagyhkC5Pnh9D6eeaRiL9bfDRbWPR2hXiGiNmMsKmLYQFVmW5uTXKhwTGQkbBc",
  "key15": "ya7Mqeb27gCUa5xCgTWk3ncGk49CrNZ4Z385aTAKGKqU6p4iRAnZMAPZz15zD5dpE4jvpNp2DVvAAeq8r6aYbq6",
  "key16": "4iSYLJQ5TZ6ixs3PXWELMLkXSEVrVafXMJd7aaQiZG6ikBFsv1hGnpvYWXsDbgu15aUrwqS3GDoY8XKNRxpBy55e",
  "key17": "5ruc4y5ANRMPKJptyKeeL3BcLQX8faUac71mqyrW7YuiJDVKkxi3kvu4PP58CzULegNRhT5o1tvBBPst4cc7beav",
  "key18": "5abmBLqmXMyFpp2rV8HvLWE3auRWJoPQPv8JgMgGQSjwvXR9LwvWEDMVFtM7fWkEpohWQAzC2Uq38LMy78LBjrZS",
  "key19": "2GvPR7MwvyBFVswdQ2CLbxJGyr117q66Jn2HP7Wyn32yFGLvPS28FAAQ9odJ21sepBKQv2tHtiHoGx5QovH3MVgR",
  "key20": "391mRi5FpGuue3YLtLYhzpntFpmcwHex294eeU72di3PTFCqBYBUz3qtnKKKR34eXGAR7e62qDZtsibvJ9Z34gx1",
  "key21": "3D4TTG7WWS7VdGtk84VY1zk8jjHNGyf6hDBMebVsBjC7WiRGu4Vc7issBhcHSD7MqEnEMJhs5i1BZPcdDSGEVUs6",
  "key22": "tMVSQwdqRwVnc6s6zuh6jNW5si4Gomikm8poLnHGmk7M5KcinHzxoZXkoZC12gBuLuH9jo97gpTd5bkjQZW9ehp",
  "key23": "rBcDnwVtjCz9GKaZ4FuNT8NHTtburVPCmrLHXsSnib7mYukocvvwsv4qU8DvD1scEGVXWgSY97A6P3uZkc368WL",
  "key24": "49ekoh8njn1E1eVtQxANuBWuPSj2FW4zWqkimDuFcwDtCoH7nm78ah97Z9TNu9MHQByxmXJtagLwfYfqEXjh8wcY",
  "key25": "32W1WXictUrJPDNNysMYTyL1jWJRCJBg5w33985fhRgVKsdhm32jjksSgt1SBeM4tGqKda7xYwaJnBqHDQpfXaF7",
  "key26": "ua5nApYeHaeyZevhv7wWip2B1sko4QuzS45KaMyXJVyfhcu2iqHgEPjJVzD7rS2P6fy1ZwuR1JRX2vnKvrZ7sTW",
  "key27": "5fRafSNC36cH51vMxuy9PY97LnMPEpqqmqW3tPBwSDXQvaDNW8pMmzW6gJ8HWMEhKciTMKRkx1R5xRdbFrjEXxma"
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
