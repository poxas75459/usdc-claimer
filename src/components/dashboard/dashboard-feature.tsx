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
    "3TFS2ueiZouXUU7mRSR5ALkEjfyBnKz7MbSbTswjwxbbYKhUgp3ffzQbESjHMkR39bDjRJvA1VdqSb95wDfaYVac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gVFwvGTu2t4yxWzfxYMmTpoNPp6u1Usrc9oJkNzSK4ZF72UFNiVuZgDtQedLo6Y3MigFYicpLgLLBLqFBSij9TX",
  "key1": "5x3VPMi5CHbLwTHrB1G8sC6QRWjepagRUraQ99NWn4YWB2K2XwvnLv5WUfD2yvGWs1KRKtQgkfnCH7nhbqRsYzj9",
  "key2": "5k3cU8gnrxvLjQUWyD8nPmJKVtgK6LUJFGvH3xt2zF6cSeQY9xTxmEz4L3By1kWg4AeGy7JDMhYKGdz5dj7gPdd5",
  "key3": "2bxQwWa9jvQW9M6BKVGM6bxwZ3eG1gA8PyQq2Skhw6RbqauaVB2RmCWcwo1SA9oKAaQHCcoeU9MhH7YmaUAgC9Aj",
  "key4": "9dQHMmNUAYyW4vMVDgvNEybcof5bY1nhpPndrCszbFGRksiS8TYt821rwDEDX67j7SV5NGQXuXo89ctX4FcP6vw",
  "key5": "2wY4cmtngXL67tWaTN6Uam5oxDiPuCuJfh1bRu59sTrwV4keiqtnk85qLzHUKivVgKWrJZMdKuaRC8fg9Dhu6VnT",
  "key6": "5u5vCAEkFiw3C4kfjJLKRxTdoKYrVH7jwXEyeuyuKs6hKTnG4nu12fUyqscbAXf8khdt6JBP3LaSsoxn1UKTQ47i",
  "key7": "3Sk47BtL7zHRLQyMAxqiz97Q9C1TSDi7fUsrXHVeSuDxdSaEjyjMG3QGqnLZfyECQbFq1scCpoyZQrsdiHr7jxz",
  "key8": "2eE53c9iq35HZiXNbyduWQRbEMMkhiS9Gwf5Uk2C3EajN4dMTTjHAqGsBWZLTzDhPTBWD4JhzwBTn6oJmL91CwBd",
  "key9": "5rEzukkEKVgZGDYWKJ16VQC2rcmRV1EmVpqvrU8L63SgrxKTLXvhRmzv2uDkLrUqeri2AwxL8dsqru7UEoPQEArQ",
  "key10": "5gnvkpRUXexAcXJ4rPUNUkaZM4pJxwfWz1m6g73LB7eDoaFDKyPYVvp3y5sYJDJFhDmoeEnCzh3uFtSCy8orGAyS",
  "key11": "4nMPc4PVKwbfQN6FcJjz69zC9K2tDKMun1z49vtDmpnQq9bVhA8GYBTjJQkWD1BmzAFQ39v3q8ti9SRr7MK3nZPS",
  "key12": "aGxuoXUJAj3NLBt5wkViWuUhc5rygbVn1Vr6b2jFvVSUoCZwVEWbN3CiFA79kCtVTuDHLPp3qbGCR6iVUFuzQ2k",
  "key13": "2Ta2arUwa3fWSqCpiiKscCmTb26Zy1hdspqSrvsvefMACFSLAhY7KPLxEZLFQyn1vCiwKwqDsvKN1Jm522nXKNpK",
  "key14": "8E615czUkL2DHudz2EMStHSCuut1xwobXmhvhJ1MVnMrv3DjXYMMhgJpKssVT43U1eKUHhw7Cbuv3QQpwigtACH",
  "key15": "4P5YHCgSAZKuMyY1qY5ShJoVBCUQTgXz6ez254tVagt2EePyS3ajzWEPeUm9yoqJ8F2kuvVYqe3xN8tCzWGmxcqw",
  "key16": "4b8Wu4zjbFgVCXMrzccmNgNApTvjWcEJZzokcMtWzsGjsSqRByBb3nBXrAQPSeA31zUaKgXTb8hR4iuHaANnC9zd",
  "key17": "5nqmQfn7FPRRnzgWSshLr4YkrqrbQrGF4BWQnKcB9gdT339D7MPYf6cjojnLmYDCSahrsgVtWpy7D7Mp6fW3thkY",
  "key18": "UAg6wvSZ5XZfyGdGar8yxESwKnBdK9MJ8nicRJVGxvL2Xoe2obc6yUAL5tG3v8Hoi6uoyMYBNbuUk9BwmrgNmW4",
  "key19": "2PkJ34xE6SmHBUKJQoEnRV8yA35kVk8GFZMFBLVNEXyE2y462tiThP5fstKudNMtkAe6jqRTaYHQZt63ggVwvPfA",
  "key20": "2f6Hi8dXsc4cCWduBtnMms3rkJK4F5kvPfpSvd15Xz3cLEEAHuA2ZHNukkdrnVXF3E4jbgaaoq9vDbUWpd4LfVWd",
  "key21": "4VMPd936VhYjoWiyNLgt6rcRYYbKbRJUpFMiRiZm3rKCFMZeBR2FTJ5Fv1EcWpStYi6sSWVJQpggwgTMiMAY2KSQ",
  "key22": "2otRUg87Z72su1xyYvzWegKFGE2Dh6Zxy2hUEJMQdnywA8TEa1hm2wtqYsUyUHbonCm6o6xDSiAVYgDr7TKxiUne",
  "key23": "45a6NG7nP2vJG7AHiFLja7sREkbMZyMygDNpTXaFpVzXHBhz2adgYhe3dhj7DpTL1KsRDf6sfqoHKVpNcD5y63y9",
  "key24": "5rDDXUPS2fGWVRv2Je49Zv4Yu9kvQXDpU9UeUSXm3KSyHyfU5mhdnv6EsrUB6WrobKYx96J5pLyvNTT32JEoSvVz",
  "key25": "5nD5SS4xFV8ybeGMHE6kSqRHjmVj9NC3BfRt1i8SSh3CFoYyguUpmHri5SWSbYpCM6r6aVgaVq1sat5oAT3jGjAe",
  "key26": "4JA8kX4oKhyqczXn3b3BY39Qq4jhiRkMeRTgT3rGNXWFqGqddimDZG8xrxrE3xfnXPc2CPKXHszju4SagzozAHak",
  "key27": "2LEWhiUvynN9nDYrDNUd4wEJuhH31AnH71xXecXPayQz4BiKHf3zwx8yjZmEtFwv23aHJZqYocMXpG2Gm7o2pQ8G",
  "key28": "3KvCvEMd8zQi1iiv6YDCtyNDmCWajsBgYLC7UJBnTvkf9MmrZQem53rd1XcgyguDGtmZmHhoQ1eBthfo5wnLj1g8",
  "key29": "5phNdCqxiQooaVrGQuedH7ed9RHPT6AfJX4KuUjhBhMCb5oE2k2kWkyNxht1FLqj3scsVnF7jgaUTwWyraBZuPbK",
  "key30": "5u4xYEJHLy7TQFWeNGqALwMF7htXn7sVqn9RB4a7UQHEbzHFfeG2roqhn2YEAYEvsjWDyqifXEqoM4pVkcS5yLjN",
  "key31": "2sjSQSZzQYdVgiQ8t1VztdhhgiSbue798DJcG3tNchpmDXr5nKGuz2tSUhhQGBiHg3WsiQx1HFwLFoE1iKdrGwbf"
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
