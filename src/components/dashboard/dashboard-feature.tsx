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
    "3UT4sQRCDa5XER8d1NfGHsKxZ6R1Vuekh1z69xjHcnxfULjEWFFFUvffeGQr5hetB43ryHbnyj7QcNXmtocKNpLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZW3XLGGNiavYTCj7jc9oBdmcnY6WKJno4JzPJvY5fHCKpidAhczG2kV83LHedXhgauxSjGGxbQndZYNPgk1KCZA",
  "key1": "5eoAHDxBPzxMnPF93g7EbpJ9xP4giAPqsM8fSEApV5T1qiG5gnK4VtdG2Ki7HnhFXxyw2u5fFxmvJmxTdcjVJMnc",
  "key2": "2bukM8LAwmPFXyfv9WtPxXjviDDefeeA9cnha7xtDqtwFHfMFcbp6C8wA6Fege6W495s8BJtPVvEVk3VdjpxLhR9",
  "key3": "241umY3XVEJoJXTiKB2wXyw9dWZ6gZnypTnfK49ZHVs14GfNvrBzuox5jbcF3J1B16MfTJnzwnpHhFRif8ppX4k9",
  "key4": "32NvzCVCPhEem8kR14pZCHvhWoDifkQtLERcL5dboZBSmdPHMwWivTc8EyQhVpb7sHfyN9A95rieKM59BiKtX5Yt",
  "key5": "4bBc46Kj2VfBvoorTeZQp69zWPZpZmPACfsddYLgqy9v1wewRNBkV2bfV1yy8g4YVuWcSRny7eshryGjbUow9qpe",
  "key6": "8hxp6KNJdfBL9ogzGRJA2YkkwEpjEmdt5uq2fM2nmMt8FERpcGLtFf9YnD2VNMysdUF8FewYiSFA5FjTwyTEgrL",
  "key7": "3iRBWre1KxNBsM8Qxv8uiRf9oCss5mrwbujTWBzcv5MrB5ViRYCXdfKBeijR5QiGrjU9D3kD5eyKS3XFoypXSHCr",
  "key8": "3n6XetQh9a1gmB1NeTUcSNS7ur3jdmMYVNkw6BZZE2LyWRHgtoMhs9K6LYBTfzgaYBvtSLvLp56HJkXwnaJC7Kqo",
  "key9": "CZXqYn4MeRZAq2ZavoXgW7C4zd29gwnRAQbbGhhChB8LsSDKpi1E6H8DfadNBTJFT3jp5WZVoERU2xBF6Qkm71r",
  "key10": "653rgn9mLJFaJSzcsCZBJbUHPDSHm2cuLrGzUbouTqp7TjYnTn1MBpk6JP1A6R3grxdUYbJesdYZbKfkRAb26CDK",
  "key11": "3mrsB1DcBp41rqAHCdJmHXtCjL5h7RE5kBDifFKXZyMwbrBjW4gw6BnSzivaNcQzTuGXUuRs4JF8GV7tNT3DT5jv",
  "key12": "47JUJQbT7yu12q5BH7CYFxtmNJYHa7EhuDULuod22v2p1KGnKExTbGiiDBSredFRVW4Hokp43hzWsYL8LguK1a27",
  "key13": "55pC3J9NANhwfPjA7NJcpg1aq5DZyiT75QpyH5XSUaHXxMD24LHf8337qhwyCQ3nEp1FL5hzM1z7ny8hTLAtnnYT",
  "key14": "3kosJtYCYWBdq2tzcKVDEVSzxeqQeqsavHtVu73dJjMh8SEZ7so1Jj5CTHaLAKonkABsvMQ7eeGmSrmURGu4Ki6C",
  "key15": "4PFgzZQ1rR6ut6pH4gTLioBNY7H3MD5Fb75qwWPfv15n5JakjjJCnNiAq32Y36sFY9BaWsQK52E82L2EdmYvjd8E",
  "key16": "5nuD3QnD6wkEA5GcasKCWdyWKgUMqVwgPLxoj7KSWDxHwMjMF6yzzsNA5GqX9g9n2k87zgXU9ruucXutAsrGnBcH",
  "key17": "2wYR4uLXgaBVnCsfgWfsDiCHP2xwu461ceASE6ShYANAnEi58TkunshFquP6zqAkXzPU5z41hgnSbP8weyqSfZsY",
  "key18": "591CRiK7dmBb5dj5bZzMadis3dUNiP4SQWt5mjESJDmtWpy52DyroF2uHu7cPLb6gifdLiBYxWAxWZ34Z1dQNq5u",
  "key19": "3cQdfion36xFHr8b9pPXQvfZ2qtvTyFpNANaZeDMdfSHL1oPDfUpbMCbAavL7UqSCJCCNdixM6sufFxaWp4Ls7DZ",
  "key20": "fZGWz3njcN8xRjQhtSz6RNkeNbijmc1r5JA2v2obFT2i2r8yUDizEAgJRxZivmBDcRwQCW23K7NzTB9UCbLrxYJ",
  "key21": "GnnrauJZPmDZHAofHkXDjFWkxCCEmYg1pYRLEyYG1CRpCtWufyByfDDz5YAwuxQJt4b4pZnUjhzzWcX8aeCJFAX",
  "key22": "cpgKaWQiU4BaUEyKpGYQF7ukHt96zCsoHxLxnyp9ahSfDjeX2ih7qA7V7uXwyv9jSXnfxX9nDtyghbTfCFRKSjo",
  "key23": "3TAdKyf8T9riZdG7EwMyxL6gAurYHeBLbgN6bLFuFtP27PXUgRmx65PQvyBDKjWqGmkQFhMkUdS35oSkxe2z3gpW",
  "key24": "4x9rya9UaFW4jvLdVe3zv9qjLUd9UhSrafxXScRVWyprLMW7ij9qbrwrA6owqKCskF97DU967zMNCddhb7iJzCiW",
  "key25": "3FxDbjK6aCf66aHgEMsjvzYpb6krKtLM4vmUmSj1pEeQQsmxXEDBzzM59LpZVDVqAUFYuR8RnwZdx5AH9RioCWv2",
  "key26": "GtZVQZGZFwxC6SqnJVMfhCs6546bfpt3CXCfH4KGyWtCXQdNgKdL5VodixjEzaCwRTzrErWMzeoM3ESqt4T5in4",
  "key27": "3iTpX2env6KTdgFeJEJE7K6FbsR4EvVN7mjH2nSvvJNquRb1hUSBYGJEjYgN7b6bo5mqy4tqLsbFgQHQGeYjvdDA",
  "key28": "4UejsnBawrZLgE2s9QJSaMPWHsByzWi8CGikNtEazv2qrXbZfP8KqKuNxBebRYcRtYyy4ggneptJmg9ExYNEzVpA",
  "key29": "36zUq8xq5zpqeTB2B8Ex81k9CEzU8puNJt6fPxkFD9pwkrvCUd2sfZ6e49J5VA3own5BYHgUWpU9FdL9C5jKP6Px",
  "key30": "3dX7rDcUWYsDC7sXcNpUVhUxsuwJ5AoXoP8XaiUgr3sW8Nsuuniqa6LvJR7Si1sXqX6WQituSh6rpGYZrKczsoU7",
  "key31": "3aMrq6zmnS398wXQrdR4QpzByrsqjoPvDGeG1T5qp93sGxELmvzCwdDWGD54cDzr6qymEv1YGFK95EwzBJT9w1jY",
  "key32": "59NkNnYjuMd3LM1kuzXsNFzKtEAoxFVJ6uvgwzk7eJfw6LPFr1j9VbrmmYh6apSgQz4aKNwrwS3VeJTErvakAff2",
  "key33": "67XYZFhTM3q8PAGD8s28Dy9Qd2Ju89Jsiuiqu1KFqT12t5SAMcr1hz4YRzrwvh9zhYVYAGgZU9SnVfTc1JM9zRSi",
  "key34": "c7MYDbugy68CYXCnkEa4wociSKGgMECJp81jtuDBUM7EddNjDzhdNwBXacUA36Rc1taTp9bTr5UtFCGejbbjZFc",
  "key35": "4NbFpyYs83v3JYva3mZGCXWvr2J84nVaxTzTGzo6y2gZpw9cyeEsPoa9SENyegYP3BtU8X2mXVCpjcWiTMZhu9Tm",
  "key36": "3PoJ2j9sdDaiv2b8zH9MAiRdUHMYFxCzXzbacdfYshmv12y4U1wv4r7bZPWRxHrVaHm6JNAd5TRnYt2swo49C5nG",
  "key37": "3hoJKX4f5kgWe7QdqAUFU2AcCTnwp6JakD5f46rNZG7mj6BYuukiPgRaZWT1gGnSs3f6iJDQ3R9vbC8zejkH6WgK",
  "key38": "rTcp15MPzVCaSTg2BHPmhKMrj5NN1xV94uVmBebmaRMfib4uB9xfQ34tPCrMLgpDsfDbtrdNv5iT7hgq1aY1CDz",
  "key39": "35TQg91fkZt9PwjYbV19WegRsvbzTo8YPvyhAKDD4xFq9eo2jR87X1r4EWD4XTeiYdCNSdJ55C4wTQ86irN2odw8",
  "key40": "uYdUgdhaP9tdJ2rdmhc3aWuUmLY1y8ePuadwqrJMicgr7w8CxJju7KibY2gK4a2qFcBrapTcmh2QH4BbJB4VbZ2",
  "key41": "3nAFbQZhLBd5waRm6NW4RFdHLoeKen9XU9TTGxRqbj8XgebA79nRayfLJcybwTu6hCN8XoMcdrNVhUmQ2VSxihhy",
  "key42": "ADzW39jW6jNxWdoyy4iJpD7toT5pbpnzvAgJnpzyuEyBnfgtsMJHpmoTUCZm1gYWVjyhHK9PbgF6Ux3NdwahNLw",
  "key43": "5hLn1YouqSa7kfpbP4kGnrdT4WdLCUAY8QuKdMZij2wTk2mhhqidNkyqMrDhuJ9UMPA1iLzd5MW4iDzqgX7JCg12",
  "key44": "4QXbT7hSqnQ5C8fwJzoues1BM48Hhn8QLrhdvJZ3MZPAY37hU9BWAWypCgw2JfkdqmMsA7gxZZq2T3HKzWc1udPX",
  "key45": "5jRsRvsaARnyNjTnLoHBX1qFCugx3EYZHc5N5Z4RdGa6h5JeAFHQnVN4zaV8uwGWJ2xKXeGBcbsygCkR9XEov99z"
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
