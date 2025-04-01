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
    "2oZ68m56vbqAAQKSpUsh5D5aEA6CmYAE8BsZ9SH2xkfsVHdtEvod9oXuufaGSFaLVkimK2EzDy4fVfoWtc6QvXhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66EyY1PZ8qUtsp6B6xUM5ihoFwbtm5uC79TYt5VT53r7ggXwEAdHuohwSpPrbzDd9zicZa4PRdA7Uiu4UGtaeZya",
  "key1": "4tVF3ZSdiXYDSTo6e4Up9bDRCjfBD3mcVm9nnvR4ikys4KCAy4k3kqdrdfaQr4QkU672CXz1VZJhSzsVztJEzCfz",
  "key2": "HuNB6SRnAJoYg1RN8VSDpwgdAEveNj7pHatuP5BqWH4Sd1sgngYKhHsSTZMWTcYExpp62VVUq9Kk3qgBivvmzCp",
  "key3": "inZL9maHLi9HcT9ok9zcW6zqCDB9UA5qgT5W8SXLzwZci24scBr8D41By7yV8KobMXUm7wdv3PYHterS5RpDorb",
  "key4": "5g5BVDKRxAwRqArrApgLRJdrcvnheXeuWeXaz5gKNbw1oRrVMh72GtERU7zmCgTG1wJxT6qXu8v6QM5gihhSzFym",
  "key5": "2JBkFzUZRe6FZk5AS5rwhZ7zP7GX4d4UZn9VCzWC31myQtCdZWVsU6zG26nJEwJFEjRu46MzYYyTdHTqEp2b1X7W",
  "key6": "4cnHswCTytztWqmKxvtSmqaAsUxj7vhoArfeqa6gxT1oKt2rmEYTfmNnNDZBwa3Fg7cQvkXQxWGiBb471AwQiroV",
  "key7": "5m97iq3tFVDfpaKQKfk3q9SDFG2nK6K44N8K4VV4FBiyn4Ny5G841i7uypVWriAEjitQ3vYPZ6BMSW3GDxwQXG3L",
  "key8": "5d5gzdXd9TThQcFewiwSLzQpAhgwfS88nsi5vwrFXCK7Kj8nEbeoYAV6JJ51ajQxmwPjEAi7aXXdH4SU7jDkm85u",
  "key9": "2p1A5xhGvjpyz1ZUWZMZ5D6tMkNm7qyvPSmzUwpVsxyKdP3ogjFoczEKYKujYkeMrFQThpzkit5DgR69xH4h8PWF",
  "key10": "2LGEcxD5W6hwsfMsK2riVSXUewYiTSqNK9Don6pCgm1856ia5a6cJw6ySJ8gfHcFMd3rGjQSQ5ZXEHs71LRefwVB",
  "key11": "eZZZnwHTduK1HnLcLcxCNH9y57DooVVwoKncVvbLDoeydqDnMDC9hjvTQ34fx6eaPoSTyyu7qWEgNBgaAuTcXp9",
  "key12": "2vGqoz4yXWf1m49XuNFYVQ78h57cuQ2yWL9F9C4rRCYPeSUfiJXb8fiVpEvVGvjGRuvPXFB5ejqPh8fc3jdqWWvz",
  "key13": "pqNRS3XxfhH8pYwLiCcuC14mgpkBt8bMWhSN3qYqTCY7H8dbTGXZLZSbQXNrH4Wn4doWdSBBwT7dTGy6MZf6XDN",
  "key14": "2jBgvv9anwj4svDpEBu13JiGczuXq1tZESoaRdEkrARnvvifWUoybqx7CMc2PanaDfARKxsn4SKq6bfUzgh9zS9v",
  "key15": "3PHQA4MacnUpyRuwzHVqocKpSoinEDqX2zqsE9GZPjg6J2urohaUKCKHiYtci1C2TvrUxmtBhmaL8srBVjEYSLER",
  "key16": "3wKEkMskMPJqYgZiGbtNFQ33mpUNAi746Cd62Whan9gmh97UjjLVnvxiKwT3gAhvcuqh9gJDsnWzZbnUrD8B4o6Z",
  "key17": "2ako4DWuQAKYgpKcmd5Xcv6uv1d2mX8quXD4k6anHUY1Q9t8ZPbh7WBD8LBQbskKcgdsW1zzHtegzXRVtUzbiWUM",
  "key18": "uNpFybQYf24YUnyGo7TSEZoswZGc6S7DdvAKp65Ms4ZLaJ74jrWUU2q79o1RrzHDV6uzEadbsbwg37gDTU6oi2N",
  "key19": "DofZjPJhRUiPc3nKDguShSRLEHFXMTJYQLr1KozYDBEf5s3ceLGwYHq2wYoDYMSNmv3dqeZXBk2muZTFvJ8kFyN",
  "key20": "5mskRh5MkE9ZW3UwinKKyf2S9Vp15TF5UVuAWw8roMJY6jRrpnj4TDkspZ4RUb2usNf71dySuDMqCR37ERJShW9x",
  "key21": "5QwYG3mRVgMHgxYVBWZLTexNcSR7X1oqrKgLfLAnBwa5QtdRQZziGY8fQZJr1KPDn74VJaveNwZdo9D1TunwgPh4",
  "key22": "2eNUA4QUWRTy6zrVHcEoWLEMXaYooxLCFyHyRdWj2u6KTM2Ne5oNwZYVJr9psXKhcoKQihx18ZRt9w76PcKzv3p3",
  "key23": "5ECDd3TNYts2EN6HQutyo9b7Ju2ABr3Cue67u7i9bX7dECADxj5YcFroDxUjUQnKCEV7GZSxBcQJuwPq8zcfjJPp",
  "key24": "4i3JNuogSKvqhRnzMyvykHdjDHdYDaF9BLEw23yVaNTmmNGXzpa6XsNYVfuZ2u1ynsha2ByjbYh2H7sXNhRUqUNf"
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
