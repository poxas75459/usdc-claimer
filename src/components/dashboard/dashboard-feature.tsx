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
    "2XREcGRP7TtjANjJnbqxK5S7tBCnLf9ysxawW9sfgi3CvxLAmVGRKggStGxVGUr4k6FwtyQU33L3etEcF7q1fwm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kM3o2FCs7QkDfgQAV3SG3peg3C3MRcj1HsGhJW3Yrchr3WyjbXChmFiifvgxd4ga3KXD7yquLGqEJKzFuKTtr9K",
  "key1": "65jfmgYwUWDNbkj5XYcduBnBmpbbH96DLuTN7Dm1u21h4fn86QM2VDeySRX9WGQrxeSG4t92jrcnUMeLFV9tg22E",
  "key2": "3NozwsdArY6yrSVMH9p4DihoZ74e9BaSVznkvvsJLLoUhFFrsCpQnVofHoSMmtrzBirhoKwr3B9sjxdsC7umaUSw",
  "key3": "2FqPak7nw1Kvq3yy7gCvXkpNgDZauM4g36akhNhB6Pfik687bLnUadfYSye15t5Mx6DbvtQJsvme4HLjyfW5wFuT",
  "key4": "33S6n4oNxPf9vvy6eobBVJNDwXG2L77XXgpvQbhxeUU5hTNv1cc4txFknecWwGy7kiX1Hrox7jVj3rVRSjEjH4v2",
  "key5": "jyShN1ei2Dx1kMyHLWtbYeAefRVDfggKWMyxrX91KhZjkHCY4wJL1rUho3MyM54PUtiTBDRDaNPT4MvexWaXpuh",
  "key6": "2mQMZneZ1crMNgxjfiy9S86k9nPvBybGG8xDQ6SxLr4ELrfC5gr45VwSZyemRFR2udEV3C7b6jzdJZgP74TZyeGU",
  "key7": "3jnmwcUhboma5VJ7gdpYX8x9qGrV1eh6kYn2Jg37Pn7rNmR7F6mevEkphctDUQocwAs7Bsw1YcrkTdHMVgE3Qknr",
  "key8": "3Fjzn3f66kFUXS3J16XG37tiZdiUKVgVnQws9VvM5aTJJVN17Muq7jnVAzVKcLxWZ7EpUemumim5bEVGVTqye91x",
  "key9": "3Z4YMyTRQaG37VrWwEvwZf4PQ8n1Bj2jfr7ube68ATqhVFCRFKoQWVP2LGCMdVeaeWQEoxmNkLHHn8SGrL4wpRpF",
  "key10": "3PF6gdTwYrVHGUddCEzDHitkXmffHsDVYpaf9ZxqJ3dzeupUZkRwYx72gNwVKQhAcBoJXwwGP7BznLKQqmn9fsMc",
  "key11": "5NhW3zx8DijgQ4Q6wfFBxe6afjhuhRPt9fnMWe7Pdb7i489zTVMY3efrwF4BRFddV18fznRquyqJUfam4Yf17Tds",
  "key12": "5UsFQMQJpR4geauJjiKPgDq7NgekaHvBZdumtpa1RvZG1Pm1iUXkfL5DwVXuFzWmR7Z82GfmUELeojLw9ZDbkM7A",
  "key13": "sEJxNt7fCZdfHvEtVujscDpPJ5X7rg8JaBMaZRccrYghUyqrh9pCCjBuX3sFJSoHyG9SaGXzSjGuJ3xwG6LVyrD",
  "key14": "3iv9JNztRi9UJpa1ak2epfcyY22fF7Q7KNgLp6BT1ADLe7oEpQrSMYnchB3R6fqaQ8sjcvNT5Ppt16gZkmpWdPAa",
  "key15": "3Fgk1pk1kNFgZsX3NMiA6TxksNWwrAZQ4QnkASA71uz2UUxNfvhDF5HC8TtzFFwMALM44NaaZAbyb6gzPhSCDQg1",
  "key16": "5pkyidL4EcimhAvkc5jbbvGTMe3C8fhfVp3Y2nz1TZgBwFdosYsUZowKKR2GWwWvbLJSSHgLjRynpjhMU8zNqyZa",
  "key17": "oiueVBAxa9iTSJTDVfN3GVf9cZac54SuYGhYWcr7U2LwKTJ9NXL3rRan6B5DfejwSPhLcMEhDHjML1PAQcs5FRw",
  "key18": "2buJEmN3o6nA2pmgpvTYYQh9LDWDSdKRy8HUMTpnGN4PWjw7VT8ZxF27XmCfkt3KpGtC25oXdmvXrpyP3cW7Yy1V",
  "key19": "3f2YpYuZARc5a9FaNDGd7oWeViBap5UZpfnrt8ncdFPspgLt2Fq6JAtiFB9uHZqQEFXiujfyPsR6K8r7VeVuGrBY",
  "key20": "2Hop6WDejws2iZ1vkZEaBynSehHW84iqCo1485JV7LXBDMZJGyhxzKVCGc1RPEBts5TAg79AgLeQvvSJvTjmAVdK",
  "key21": "5uYnfG9R9f1v9wfPKMcAJegckfeX9wgFDGx6qY5YcVTeCbovJQzL2shbx8G45gChc5NvQ87mwCxWo7gvr2VQ3UtY",
  "key22": "2q88Kajxvyk2PHY8QYhzMpB3rq4MW8Ebd4QVVbd9EWi3gxLsej93H5CsTpJQNcJhHgQ3ockPTwyXTjHdAEvjKjon",
  "key23": "2bL7gr6mtWWgk2MawWa7tvwYtG4uWKWdVJptDF8iKvEbztXbNmxFjHnSdSUFszrZM4qhJdJFe5GhrxEYUi91A7DC",
  "key24": "4ai9Kch3xjdwouqYFyoMDPAN9vtdENV41kXAkNk4CYCCPBVHh1u64ydaNFezxNyLBokKiAavqvJc7cHZrqq6czxY",
  "key25": "3xBHjZiqaq15thdfcbeNm5G1g8tjvUfDYa4QoJ8kQzkEWRRM2JWyumVtRW4a8DVaCk1uLfdWEkm4NncQqexpBp7c",
  "key26": "51oxRyKFmbkKTZ2o1wM9MtFpcSbhQK1rsuKnCFsFk68HWKH6LKCmRzF7qdvzB7Ax1piF8xJk5jbEoQKqHBvR7a61",
  "key27": "WCk57H8THUA9Ze4hVjqAC86co4thfGHwPyvabFeBRr7FGef9Lwd1yA2aZK3X6WcQj7pv582v85HxNfUpssYNNMV",
  "key28": "5E3AiuocCGUsNUa4YYUh2NaqZRaGAYdn5snAJosY7fRcZs3scCAmwMLMtqiG23ZisgPDjFNGXsuvEtSWgmHH6g3W",
  "key29": "3QPcPm33ppP622LhKNqu4NRrAW56XxGCV3rVEKTYRZ1v1Ke6i7dJMnaGAqLxbQE9ViS9DnrUm6kfBWDer5hQQuhD",
  "key30": "4DWvBM3UH9mU5gc5Jxk9VyEC9eqF2KSXRCf5khLG4hKWrKBsqb4GPNN7N1SaiZJmwe6PDbXQVdPn6FyAeG39f3Fp",
  "key31": "3YwUoXqvbw5QkSLzqgN1qbJXVtQSUvF5hW3doRayG3wbwURCsuK1UAfQa9TxqdRHPWoFHGxRD9tgeth2dCyaGomh",
  "key32": "2i36BUBS14m8UdoKZKjEdfB19tvTbrg6hU49c56ijP4GkydDDpQrCXF44fpuCYazaE6xpVuUTc8upfTsggK1G5hS"
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
