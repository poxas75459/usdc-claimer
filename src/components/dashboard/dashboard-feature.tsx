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
    "5Mywy6Xw8aQDQGaBzervdmfss3b7uSP5hzS3qM53YTdaSEL5T8YHHc8kLsAr3yh2Uidm8HvizYCxQQA3zSWxmWt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4je1AQwaGhFauQTvQBLyrG7kw3S5bFVY8rfGJXV69mKcfxBZjnsiPtQUL4gVuwFc53LJTfaCRM9ULoF93jk2wa3",
  "key1": "5QAGyF52t6SmUM2vekgpdsFLsho9YjDtpMujEQoFipFfRqqacm6opUWojoMEVHBzep9LPw21r1mEkT631LF4Eipt",
  "key2": "5YweXrgG4qFB6xZRv3UKJLSr42SgvsKMht9AfTPwxu3dAHevbby53YPdLznZPXcswpcBikv5Mnm1iNGP5MUvQu9n",
  "key3": "33HXa1Xa5KRSM8xnyyFoshGfUKjZDB8u1kq1SCLyShnNCexfPt4LQNqjNV3ZACh47wyCKdEMLbPB2svqQ5nDjLdv",
  "key4": "QWbYFmYr6ywzoMu6wCwzCE83TYKrnSR5AMUVj5HwNLLf9QRwtAxwYetxTDF2XKoJdBu2rbDcptCs1LHYPys8ben",
  "key5": "44jzeERuZT8TAWcNse15fmJuHUi9mAPUabmeTBZozoWCuogUTP3X4n9gxNw1bHphWEe7y8hfSjTcX364Q1NDtia1",
  "key6": "pshWNt7QvgcZyyy58TWkh7DeqwoR4oZqSU2aXkkMWQngiHjpSuRVe9R7TcpBofqMJsnAaoSmJPy79A7o3GgNMnp",
  "key7": "663NEaB7Zsm47yN8nVnF6txBAiV7C3uUydsvwg8VHXVrgEQAKRTEchghzt6CBZF6ESrunxcMxxCbNkuz896uAWRb",
  "key8": "5mDP3ru2fJFjXXqXkXEVENJbtszp3Z6EWRi1f2BT4Fch6wqdqSKRFy2cYoXarietN9f9gLEKxDp9gjezMc6ACSRA",
  "key9": "42sqWnig1WuWUnmsQX3oV6y8L91NtJcsbmptaAMyMs3iZVm9TEhP4Y21pR7EcVqLbfUT2sXX6bUXTE7aGrDSxDqt",
  "key10": "k8RFivxuqwNv88NQwhDkckhDXLTUSxNSfz3FK7Y4tgpaARwDk9a8BpQR2uvAehWStN22yoqfZNjFkLWrXnmkrsA",
  "key11": "2nopBBAEKYzNyLZraeG9QtFYeVHMgvKg9uPq3EJSeYwGNaSSdSdDANcS65CosH6UAYymXVaUKA94wAkXwhaacrQR",
  "key12": "556baYuyvR9L8g7QvvUTzPSLwUr7xbHrid7svGciUMN6zgakZ9YomMi4ioJJTD4tYsmF9XrvuivFnZGyu3Txxhqe",
  "key13": "5PoXvNyHSTwUGZATArKKU8LbwKvSueYHfGQ8imdi8uMuqVrhTojpz9JUpEFuxeXqbjvyAdoS5gs2Z1nmkJtEF9Tu",
  "key14": "4eSUHW6fVnzLXq7ERJwtXY5DSNXMVZ1ndZNYCSv46QTYKgxc8AnjnkwpnKv7LYPtbCAKifPgDxFD57mVDszkP2XG",
  "key15": "YsY6TtSdwFac5tapKi9dNaMJGCRojfiLnmYSaZ6oUkWbgCZH89HFyxu161xGCqihKdnF3vDrrcyxbeRkGDbRTmX",
  "key16": "65Mkxc52Pz7dXGcofeCFASmWQ31U1WoV6koXPpDQyKsHNV1TVJDve9h2s6e4K21Uuxxya6kEzyuq2d64QxgMU7Hf",
  "key17": "5if1hRnR2C6eewEfunqgrcUZp2BSXo1kon6qFHwD1hWpaLqCPkpV9JZFf3SwiMGKZAqwCy5EPoCwJ2bMNWCTy1W9",
  "key18": "3KzPS5NsTfgmRsPq5CubcDjxMF9PXFQtXEV7avSx6kFtge1wJA4uxPGfzXGXRUnrJwAcrHMiqYCe2Y5JpqJ2cJRP",
  "key19": "3yxZxtwNUb5gFPD9pycgyvCCRYa7SUXbo9AyEDst714uj2umRae3pJW5nv5Jag2eCV4gVAr3VUBEUpmj2ooLgANn",
  "key20": "5tueWrajKTuzuRw2o9sEA4vAG9eH9MEXLqV7HoDpGu9nTNFymDgEMEowkpHtLP8PwBZWWg8svNgW31ekouEd3ykd",
  "key21": "4PAKgPcWLmgi3hEckuK17xMa99p82q1DeDr9W8REMfhz72qXQQzC4FZRQfU5jFViUQbfPk5PNF8mUHjXTg8QozfA",
  "key22": "5YiykXXUhkzEpeb4qPiMCNaMzenAMYM3dX6GRHaXvJbhv8X27MedR4caJ9kRNY2jDPg6Cwm4bnCKJZ9sYdBSCgXC",
  "key23": "37TDum2fWfPVi1FgHaic7Jt4JoSYtsFs4V9nqmzbFp9VWMMqE2rpYPufPE1F3w9syfzv61HZW5Jfs8WKTjZ7nArn",
  "key24": "2b1vu69J6bhL7Z2eAC6BDRgaMjxYeY9sM5QQGn3WkpCb4mhehib6HPS4Rgbgwso2cJGx9RyM8uDZFMTKsPhebAnt",
  "key25": "3gWds3SeLiJB55wS3X6H67cfQ2XQneKG4XCQNqc5UKXEibkX14LgF7WPujRBWgLDkJVnmBtna1UynXFj4jR92Ujn",
  "key26": "2WC9nEm3x7hQZ927jFhUVaHE5HGEyntNJ8tqf5t3wZQWd4qwCSVGfv2JKULt7HeEbr8GSiDRxxNKgkhSErunjE9R",
  "key27": "3cq4KebGS5N8w9UNoywi5LhFgrfJ3r58W8GaQNeU74oeJ2cWBNChKoYvUWssTAgNnSF9xfjFu1EouHtYdEHN8GL3",
  "key28": "9YeZRkgTSeeSYVAnnhTqR42ihthsFUaGNjm7yKVTAc9Njw5JwwNWc5LBWT5cEovF1yXzDmLxBzdxey1NFSkaLYp",
  "key29": "3iiWjDD1WMvC8mjvyurjiwnSFWcWN2zmNn3eeopKdiUsUMinou2wR1gGh52j6U58HKuUG8mjBHSkLHv4pZPnsp8R",
  "key30": "5JFtQrjarwq9cEvhQocPXwyJ2eZMQptnuEU9qvwb8QP3JMN7iAMJXrvotPX1hsMAunMgidUarkMWrY3sZTtTgim5",
  "key31": "5Qq3WxUtJfmkxGjBoSDa3RFXaKhDqd9kiK9FUxbawrYBytRPkCG3DBqCRobf1d9zc7bw1uCFrEQrtE3zno2nMPUE",
  "key32": "ynkwDPEF6KvqmXs7f9LjpjnxwA1gVDaPNE3JpLtTfR2HshWcnJwxrCUNeCdsMQ36AayFbxw4pdNS6vKATjY1gif",
  "key33": "4HXZoSnE7Ex4wJi2ttkojMGD1XTfnMi4KThF6fr8F9B8PvvNNRgWP6rs87StAA7ZFRmEmCfEhVkCBLhrL3ErDXfo",
  "key34": "4MXj1mzkDnK8F72Ve7ddQfFWSG8XztkZMni7DEoGWLX8wGxLgzbuHzPxoo163BR7SeCzHkXGuksyLKMxkDhPtvc1",
  "key35": "2jUKLqfUXTguZoce9eZRtvmH9WGdAyL6U27PuBBJ77a49REVHuhPHnPFcqwGRs8YdCsq4e6tqPTgnEb92Y6QLosJ",
  "key36": "2YXVJHVLcAuaWdBAPaScFkD7S8kPeKqrQeq3qBqiQ3VStdMBpCsTDciWeUBQEWce1Mqf4TrT9QwvRYtEMqTeMgZm",
  "key37": "5SA1A3Tw4z4YU9Tx2vThJRTzyT8MoFJgxtWhFPRa3kALY8p9fYE4J7A86qu3xzYCTLGPybVRuCdvSYLorP7d6u3Y",
  "key38": "3hDMXvES74s8XuULwB5SnTKkJ12EgvQX15mgFNZNurKg5LUP8R4836drPtUNAEYesXpAd3H9fq8T7n8AbQ2uzs1T",
  "key39": "4PT2yGhiaXuCYsUkeeWTYa64AVEYwPxK3M9aERMvgJjSBp9KZ1tvx37KB7FDcSfxYpJv1hCDfinV5yk8sb8yVmhc",
  "key40": "3ACCuyhEE7EpVxjbkUvxjTv32BASDYLzieWW3q8PTCD8DSW4Log5RrnNi4K59DU4RdmFY6z6JocqWpcSdsxXKaig"
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
