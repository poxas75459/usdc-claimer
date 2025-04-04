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
    "vTnLCar2Xt7mizPH4LsZVKL7tk4w6HMxRH94T9JNzVFKWUHSHo877ipGwhv9h9PrUfsitsdH52m3VCqkJBN4e1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WjPiWr5pm847uA9qm5LG1vRDSX8HnyjNhZiX7MCgH4ccSuDKwmsnhwYxGngaPVkdQLLBjen4Avyvhc391uBT5sy",
  "key1": "4KFkzRaBusCBkMbbg9C2dQbYR4Ns5wjJaqfcKWU5aa6ypBekrhehruBGmJbTBtiJFLnuHnsNodLRgjpkBou7JxCK",
  "key2": "3KcZFQ1iZ8vMeKgMN9YJNEy2yPF4h8bPDUyLHQNu9s7vPNvU2hyQq53ipWwBtTEWdCVfYThKNGBPDsMJLmqj77NS",
  "key3": "3mDybRwQ8iEktVJhsX4AYY9KBQKnDgztkBMjcSp4b4HbkG3ZezjKw1tTqWbD47k88j25JgGwhX7AyUmFZWV3tSJE",
  "key4": "3LSdrD6tLPJYVDT66F9H9ZPfK2XidsZc3yukNnd5BKbJPGSaJkxTU3Ynm58tmXpBJRCNAZ8fLWkbwR6PPQDX8wpA",
  "key5": "47ZSQarnp9YZmBPhCaq1SsGE3ymhyA5WJJDjT3DAF2zHGUpCdpvN3GkiL3fQKUn5sruBmEUkeAVrhouAm7FvHYKy",
  "key6": "2z2AHvvy3XLzDbyGCPoijTbUFo8yDuDY3DVoo6iBAsRnc7n2xo6cxWaZrCtUi77dkpKH7ccbtkjbJhYKnk2D7PbP",
  "key7": "G2q4uzromjRej3djzEtjXJj7xYLoboc9ZKYUStyNMkqSERQ8SEkjsQ7F6vHS6BnuMuV1PyEHBMrLU2LTog8XPn1",
  "key8": "3XKoQn8NpGHa3qfwzRPCx8RBv6ZqxZPpXE8TXihBUz97QaUQjycX1avK72LbMYUuYjGoP98EoZYTjb4KvAqWxXRp",
  "key9": "5muFkzpr8fZFNHfL6o6WLd7WjVUt3o4AcQ2CRGZt6QYm61AztmGT5TqiNnqsQw9uAsBwb1k8ch8HUxPCHmiqsE9v",
  "key10": "5jcE7uKN1cntMYTcqjEC2P1NnNr8DNBi2o1QcsMN3DPigAMxUfanQSSPqUWaCE1rFrhTpg8SMX1BCkktyJSA6yyY",
  "key11": "3T2nksDxF5HWErW2FvqdWKhoes6S4oLMduBJEgb17xHW8nBmTGf2VWi2q7RVSbkUNgiJ3J9zJQEMRnctDLCZMnpN",
  "key12": "2NsGpHCabFEYpzbf9jhHhHP5dkq1g3vmgAYeuP9MpuRp5JP4KEqTWdkMfmZ6D4Xbo2SFeJnXba7EY1zGPasvMgYS",
  "key13": "3EzwEbfuwVrqt5JxdELH7sr2aKFiRmoxodhWADuvbqi2U6A9no5bkuTNqyh54fr1EGrx8v8w2efqiTixcwfp1xZk",
  "key14": "3w2qLLwmRGvRh6efr5N2oZ2FtX2J514k87Mn4unXjK6ngiABkH8gpjLfZqB9M7DgWMnJWqy5uazSZx5viDWbdkTa",
  "key15": "4fUKbrqHkbK3GAa499n4z25dwpsDcRS1XShLcq3KNXbXVVdgoayEAd7bhqBfx5GbK6ixecfSh8epzAAMLLRWZyQF",
  "key16": "2kLSgRoqvzXwH9cke2QksBjuWJD4zYY1bJMrFti3Rxb32mgpmiiGqPuruFEtjG3iKSH261eZKmGDaSCMQKyRnxeS",
  "key17": "KDuZLUCFrXVBGqU3ve4vRqxGAQz9VFK6vsFJpCaFH2XUvsDRACB5aL7HBayuqa4RH6G6kAnKbN3BBMifqk7VDBz",
  "key18": "4weHePDc2dhxGdU4QV38KzxeQEZnyYp7srWQLA14mUn95L8Umn716Kt24KNj9T1aU1KtrSLYGaSKyzbpTFtSMUkX",
  "key19": "5Sp6oqmZrNDcfzgdYjphmA8NdvXhcbEaYw5uYtTSek4MdXPSVy7Y3XYXM9vDaw9z1z1BGREzXx9CfwrF4cYEGKCx",
  "key20": "5WyxCVMjij4t3kBMWLcwHnMN2MDgVBVdr8ZdRML9AvF1gGkN4w2i8qskBaxUB1kLGUQ4Hf1ra8ZNhX2FPjaGH1sn",
  "key21": "3TZmxcNXgjMjoyEpH7TmEjEawBwJgMiisczFx32Vrjn7vpcQFyCUQ3k4fGqYGZbsDyNHtzZtGbkptfsEeBUERtKc",
  "key22": "3nuWeBZvCtEzygafAik96qNCftdPEstUNCNDeUqfez7TDJsCc4gZDA22Th5oyEeNhyDym7tXrJbJnc9ftS8UqREv",
  "key23": "3nqbQyHczxYPBwgpJaU6eiC9ZB9x3P8MYKcgTnZAXn8t6Vs1aLHGFaYpaM7J4Jed1wwYrRLzNVvSzMJm6e6MLAgP",
  "key24": "3E3FWcukerPGzAjBofnSPnSQFBbnV5UF3RC1pcpwbwgUvBQ3Fry5B4KnQRsajLR8TNy3QnNbFab1hURVzX6JUYGh",
  "key25": "4nbaBsMWkhERF6yp7be1WLhEoj6X5LzkiT2tFc9k8vRYvqcQMmaUcaW5NAwcLK4dDuYP8Jec3nRwfC8pDaAH7SVo",
  "key26": "5bR46FgcpQHzbozLmioNeeH18dz5B9dDuTiptCR5iBe1TtH8E5EMYmVAedyZvYSwfbXf427Rw1FskPxE5LbJTnNe",
  "key27": "4TSPGuAMH1DNisP3n3cPwsMyGn4cMUjRYG4hLGf5Req7eSSk2RpCbXHgxcnfpJW8oRijV34tSbyUEghAE2ZUgjN",
  "key28": "4hWop5XdYiXpBRKeey2EmpeHEdd8psirY22auq68AouQc7q9PXCzWX2fVQfN3QWKGZA8S2Db2WCJqGN2jZ6s1EWS",
  "key29": "576E7FCNzCgtTB89ThHBngA63MV9M7bJD9MiuzeHtF2LxcBxVSPGfjPC43Prf3Xq7wcfv2H5qUcpHGLexrP6LG6K"
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
