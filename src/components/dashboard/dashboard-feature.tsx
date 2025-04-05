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
    "4mNhb2dVshDLXg5m8hy2BkKvB6Y8s6K3WnHM16JzTSCMWxCoGJJYCsLKnuCSBTD3CMTCM2ViAb5UaGjXyK5vMjgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JM1gNTJo9vVpBCkiPztEiAv4ZSsP3tRa2Dq9kN8xQMjwnmmNpNwETzxaGkcspGQtb5HoNDNcy6yhqG2vZxZJeLe",
  "key1": "2C1B7nmvRTFmm2E5ESkkj1JP28UJ9BUiftpHVK8qKpY51GkWDwupnjJ9Eqg8hXxWaVtLYEQVNKbEbFFxuQmm95uJ",
  "key2": "5jC8p2CERYEtu627L147y8dVRcRFB4aZHgYTJBsCN7DcpQPfuUQiYDwtW4mfwgVEdgZQG25YmvDxPUfAvk1mWj1D",
  "key3": "4yRJmbK4yBj3u4DyTbx444NaBvBqWYaUNPh1ASwmXB49McWQ4dr6izx6RKyehP9ifEzTYnDMCuaS6VXEkqNueFXK",
  "key4": "3tHaKV7M4kEoFCyazHwoCuLyNpGreHi8NeEQBYQLMHwV7hUhhGGU3mbtbskHMQUbhr8yqRreXKWG2KVUj2u7p95B",
  "key5": "4xstdYMbsQypHFwmXwYozyFVMjAsoHYRjxKZP55d4GBbozPsyUJn7byApaZzCxSUV3zvSHL2rASEaNYNX5S23fed",
  "key6": "4QoxK8Qh1RiKn56UjRKr9g3UXR6AkrzHLBfFXpSEXmNTLVupd7JfkAahbyWJLXnduDZq2nEqFJ58byGjcR4i4xKE",
  "key7": "4sxJfWoYnMsAtQtPerwmcjbkJYgjcvEiJ82h1Qkwzb9AvEenCRMWp18X2s6YNWpJrxHcK1Cvz2qLNmdsZuA5UiZi",
  "key8": "3vJxmix1ym51roBPFyrC8YGSdakQRrtSvwAwHbX9RU12MU1K7otzgTCUoQ9XRVSeJQw8Ynh7xw7TmzLRtfNga6ua",
  "key9": "2N7JGghnvvVKms4EMdRrEtji3DsHUPMyetnZkWoGAJC98sRzXFQi8yz5o3iQZkyzfdVcdGg5dFiJ64bp8tVJdWQJ",
  "key10": "5pSJBLnCC4NVQntggFZxh9etmU25VFLMMFSvKvSojcEjKvC597UDJY6AYC3k8WEFUjVpL3Lj963JKuzqzi8t2sFM",
  "key11": "9YAN1TXCFvZKfkqdH9eCNywouQVJVgozh5WtzuUuFhKRrELDGyn4YoR9MtYYhPpcKtRrTyih5Zfqs3quq4zzu1N",
  "key12": "3fYQN1fuX3t7ysPouTBFHnq939kySGWknLezgB6JsjjmZdLHJHubsZTSQRvSYio5UtiLaxze5BbVX27X5rp5F4U5",
  "key13": "3eFsvL5rLaCDsbKEuVC9pJfpohp7dhZtce9XJecWmR4J5bec7eUV64ZTzHggv6QnaAfqo3cACTd3it8XWyY8kPDx",
  "key14": "KyTXqXpF9vR67MeKFNF2eNBAMbJ7dxFBf1GnVAJAkfWyds79MuqPzY47DsUxSG6T3DTwAf9YsZYsnSZxgWSzZx7",
  "key15": "UktkWBbXd4pfYev6eJXjZM5NyqLLcY85iYvX48Kr6nf2c8z8jFBT95RJFAjvphEiw6gwDsyDrZuK9FUFdsvzPPQ",
  "key16": "m9R8ZSRaUjKr4Y7WQg6FYn1UdgM2jSxd9jZLYVtJsJqmFi9HCrabuHFu3raTtPRjPMfTCzHtHA62T8ztLSDscf3",
  "key17": "4kPUyebDiUW9NQUYdArZiExDauCP9zogiVWAQvCdJt7US4efDNJRjmkadUR39BtMfe7y9PQRFnTc17f7frDkEont",
  "key18": "5ZNSUnHWXocozU5DxRFG2Gt3ADKHuqr4BxSAVGRXggziGc8sTBjaJTopFL8Q8YdD95hPYrvfwtc43bYXpnGe49h8",
  "key19": "4D5npAxiS6KGnAaX7DJKcYeFMmPskXs9NBFs2HYrPBLw2hiNEcC3g2VzDwRmKSMnxDu7NpRUZJ9TSt7jnXsPmYWU",
  "key20": "5BmBDaj9DsPcbrsvETGWnDi6gAYAWnuiT9dfCQFg8KrjhqZFbLkN938GwSbzEc6yDdNUecmThvJ3xAmmMQco7hDM",
  "key21": "4dLmWcbTKVAUpuUmBCXKWzgkeC4CvmcU3W4qubbbhCFFiNAYapiyenJd8C8KRBsUAnqnifVnoR7NfdjFdxXfZbg2",
  "key22": "5TiykDUjey3b5vtjZ8K7YJxRrEUfX3b7bkR8QTJsGdX9vcKeydRz9iTGkuKfVDm9vsSzr8L4acVCEZDnmUQ1j88y",
  "key23": "37NtWPKic5x7PVBx7mur3wxVhQXdiJuArn5o6819nCLa4A8xLaPYgjN1VABR4RgUoWqSZ8aNYSYyk1Sdh961azDC",
  "key24": "3EqPU16ydELRzficfFUkGzsXvKPdyQvMua4r9pmVZyHjynj3NSi7Lyif5U5SPPXbuD8wqMDn9PzjQSEpfHgCsD8g",
  "key25": "2nJVdUw1ZyFRptCkNWxBfqBVsiGYuvpdP275AAeaDFUwveQqDJUGeMr9B3DMWfqFMpHXmwPMxnGqRYJjUw6yrzZK",
  "key26": "S5LnEWB5j4hBr6g1ugNzX7US5qxaApquUCQJXt8FiicMPVsj9k5GeGEprvraXryYF4dPZLKm9sPjJ5QT8drxFZB",
  "key27": "NbFV875XWft6DK61n9NLFjaoFgXrsKhucVXgeSgS3o987zP36uej54vL22rdsfPQXSQT4MgV6mo6YCL9gJhSUw9",
  "key28": "RZdhv9TR1S4cN19SUUHtQALfhAzi8kids13ZpLNnqWeyDzFJJTZurVGF3MyEdYmC7WRrYJH62NVbM6yodVHQigq",
  "key29": "51itbcUsmx3i1YQcQJmMo4wVSjqVfvVA8LPvMjK9bRzFwvYMRkFrg1hQFPrLUaGsXKPvkRVKftFG6RiwCZQS38sN",
  "key30": "397YxuU7uoYJt63KY1vSSMvg9b5NRtCj8kdkErHFgM6qC9oDzRGeDi5P5B6Br9ZdwdXAaEoK5gYqQ6czNhf2saK9",
  "key31": "7tVDjJEikkJ4pedvq86tKLFocQUoC2kDQbEPX1dZ3mVeVq87Hz6dM14DHVxbKvuw9aaisL4sEUC7JHDNAJGD7pU",
  "key32": "5VxbnJCFqUwpaxT3kicb5cnaGev14Ct8JGdxsuYxmGH4swvQbMti3Mc3NvUYLQbHLJpaaq6bP31Yk8AjbmoohTvj",
  "key33": "Rae4jvv6cq2Viq2RwTVZ2J1Jo31kFJuUMdhFudd9FsvN24pdJuc3zrL6aq2uCJZPHoG68zFJqefG8eCWSYXkwjq",
  "key34": "4eMumohUnzzgdeQLkMuPkyQzLTA9oNMPP2JYRaCoUXAeWYrpgTxvqKvdzkXpAAutBvADQvDcVH7uV4z9GBRECh7B",
  "key35": "5HW5h3ADZxRY77QdFZrVrrm2XgM4pAcAzDaZRtbQKtccGrS3QjNQtYN8U4zm7VQW61zwjxx6pJZCcMe8kpe9HUFo",
  "key36": "3Niuk6p3xCQ4q3saQEuH4MuawWpy31fKBhv7UNZMtV9MTrxLzRZZAYzrJMwZY1xZyZUmNDW5e3162NvpCkuwUkn",
  "key37": "38vfwRgQaaHguMhfDAZuf5Cv4fyfgRfjKa3GNsV7RzxHULjPcdd2nxsHPs6ydAZjwe2zkgfinTNo7S78CiiSUeGT",
  "key38": "4UfhTsW8FwpXcr3dNeQcygd3Mn3hFFCo8JtGzQvErS4esvguxsr1PkMUh146vKLPJtRQP95g4DE1xziGNcLtKNc5"
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
