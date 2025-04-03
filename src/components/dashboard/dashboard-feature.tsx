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
    "ZNMHErA2S53HVfN4itr3zvPkyQqEqxXcvNRRaCaHB8pLDFTZUSvwSciVjQ2zFVXfLxq84ApAgEK5C9uoeuYGnDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xeDw2uiSw5fKjusg1tXkzLx7Upr34vRB2aVPuGrGG6JzqCRSycp4jwuDkZeZxn5VebtKRguMuzQFzsRHcpUmfzr",
  "key1": "4QhgEeTvcGsk6gFBMQ9Je3S1RoayYt1kV3t8Dkg6o1NEH2AJRr6A54iiJckS2dvFyx6ZQh1EY6J8dzoWsuKsABG4",
  "key2": "5X5Eyge1UCH626F8UicBBJuGg5KZRTr6LdUMmc8vv2eJMmzX37wiZDUFwp19Uxw2VQjwhyDGBMbeQkQFLMChRhPs",
  "key3": "3wQ5VwbfDMsBGSUMtbYPH9oEvCwo3HiWRi6QbCQFJ1cRp8iUP4LJY7i7B9eDkA6GKjij8MjA8jqpVaHFH3FkSkZk",
  "key4": "48soLfUwo9pFe3RrCp46sCQVzEdRJ21JkUy4Vva7Kd1nrUzi4A76q7ypEUXJ9Jba4Uou5fFVZYQ2DY6pu3iMWSj2",
  "key5": "43QBDgSUDRcK2tTgA5pHjNQnxQwAbasZ4QkFKTKRakV2ALqHF89XDK9x3moe6aASL1BhCWWas8g55jiU8pWhFZ9d",
  "key6": "4y44NSfNdow9kyE5ANdGSeBzUMmV9CfSavNPZMbzkngTGy44ypkcMFHAA25NAFC1q5XPwp4DY2SLds5kcvj1Dncn",
  "key7": "M8SPogzMMKea4okKNYfx3kcFCVcaLwYcKf94hgXf6vmiCPZXQzaK5bAhnJ9Fc3VZH4KwVFrVMwGwV5H829f9fJH",
  "key8": "fyP2T7EnSXM51JZJQFhADaPMqP67DpDtB5gJFddFrUKFDrgSVvyAzDfrnum1R1TAMNDUS6MWD2vekNdaFPJEn6E",
  "key9": "3A7BLyCgJ73fBe9SC5eMB1WQsYEnFUDJDaryd8SD2A5WTbjK3yfpuvAKVGUKJjmJUyDYX1bwR3g2DkHgXxWcUHJA",
  "key10": "5LJqQEpfHTx95Ut8Hgi9iTgUUDhVamGHdqMCf7AWrAB4FGmamSvWhBeLen1bxVvWAp3hHmRn3Y6dG5LxavUowXjr",
  "key11": "5zi3PRA1jghasGgFEXCySENzKuS5p5MgJibHvC9wU1ecXSnNXZpGNJoTNr2vUdyF73epNVnGGg63Sz69eEXzBUD7",
  "key12": "2U8YGk5S9m6fVjjCRqbeMZGMaRGfTcW45BH9dzEMCNkkjV5RuPrK8mtMahK8Sm1M1C5Z7mYjhnB6LoUGC3s4RTzo",
  "key13": "3zqymqJBYZiPtUNzyrXvbo5HE556pzXVxcCrMMAZyXePVFy3veqK8Y4UUqgRfNFEKqqzqaZLHTySy7GMZuMsF8vA",
  "key14": "23Phf9EjzLpV4NpB5Jzw8a2R4cNDF1khwxMhpUJWRhFfD4dza49vEa3WE1GStktoGg5Pen9vY8DrkvziJ3nLYcAY",
  "key15": "QVcvKd2gaStS3vD1jpb5NM5K4mYmD2qgZb8C1RqqGzbdULbvwuS93PXDT5pwQZQToonVgRNLphLTkCehUToJjMs",
  "key16": "4xSVinJrJcb6iQaq5WvHNZkavWr2tzNGMhFA4Qrtn56DFz4TRwQeCiwJRYhD14ooXeGSNmHHPNpJuBgkGGKiHiN1",
  "key17": "4UC3syWPjQdTDekJuxMRA8kZLGhhg2cGfdnmifUKaZ6626JBfZyCXe2KLbRYZoxmyCCfFJUYVESWvQDkDGwyF33L",
  "key18": "62XbHTYhG5RS28N152ywhdEcwvpR8pAhtBQ4qz5NkBYYSpLuw6Q77FMLHLoFN1JPUr24N1GjUPqzLiQ6AC6XgUu2",
  "key19": "5b2bSz8K6a2pyU4QvnAa623o6jZNiHjwv2f8QaPMbZvHdzvkuvRJ5KnEj19dCkavhLvVbqAV4cP2nxUYxKtuAxU5",
  "key20": "49WvcpC74U6DfLQQosjDdXm6i5bh6zkDhPXRrfVsCNMhQ7CMpuaLnF4X6ARGXzkvGMkRVbFZM1PLnEkfccoNrpva",
  "key21": "G3S2RUrW6ENUrjkT9cMR8VAEDusNrP6ynvPNd7fZFwGQk2XM1pjbEcHe7ReqsvvGPbEHkKattxCb52VZPh1ZPym",
  "key22": "3iqLXAPXMRfuj7raXBpoF2es2or7AEcNJti2iVyyyBbXcGCmZx5V8KebP3DdnJAAwpus5yU4Dpu3yQxikSsjZu9P",
  "key23": "4r3xHDJ7LMjWhjxG7aLP3rTSCvaSyomigJomBh3fdSCci84wEoyvE8X1nvnP7oL4KcaRv2kxhG8sw56wK2wKA1zp",
  "key24": "2TV2axGsrBqasvNAy5z6TSrqFqKS9xqtvkt6tGdtrWeEP6zzWCibjHVHTXDv5GGCzcVTc4keL7H2oS4BBxCqDe5o",
  "key25": "3641c9JQjPLa5wF3qcY26uRAJg3qEXk7jNWKxqx8LvYg1cnXzACvM4cBu2ew897gAvwxrhN49gvnAYzRTqRCsj16",
  "key26": "2cYGwoAu1pcUijwBwxDySso7S34LZHeJUsQLYALYD787tcCAxd3gMF8kJuZcC1ihp5vyXTW2QY4C3WMLyZzws5Lr",
  "key27": "45TGbgP2VHjckcsGMwoZ5EzCReW9sopTXi3Hcd7ZrRMBH8FMm4qaKpvMLRjBcYJeMjDxCKXfxN62jZJNa3RTpobH",
  "key28": "DQoEt6d7nHYWi9ah34tVH7FJPUy6X5niSiLg7qpLDfg1yvAZiUDYDAbVCyHtN4t2ajYdbZfTWNxLQp1Aanp6EK3",
  "key29": "SSLvaxjEapL3QAtxhNPR53yo7Qa6jqDT6xV7URr57pUqVSzEp4DJQgiUPJgvZuh7tPmVTXbFatsY5wYEqax9s43"
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
