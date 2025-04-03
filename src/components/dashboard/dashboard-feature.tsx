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
    "kDwsarNV3YYd45HEjX56qUujNNF67UtAoJ8pJB5yU4QLEBPW7MQk9nWcTYJQkavWKoa162s4NzDZsSZkq9bnWUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "238EnQ2poe52okSdkcuQV9DNxdxJ6x7BeFdL7jigKYJwpMQH7Uev4QKC3S6WJAUVso5qt19XiS7oejiQCHFSGVZT",
  "key1": "4GP7e7pfKJz1ichgJ4SsU3XaM15Q2dN9s6VDAH2ydo9Hr2i2e4xuvhFo12Zp1e8jTTNpQ9cZzAakZ3RvqZhHvhVE",
  "key2": "3M5rtW2HPodMzifKGhFcMVYaisWwMQ3T1pyHZeCDV7M96VaUkLLPZobuWQ56Dg978s8wHSDtXSqEn8gYqgnkrBsA",
  "key3": "4PmS5M6ugqddtSyQWJFiBWbWfT3ChcQaJ9PHdXKM7FvFoHqXcCYXe93XwS4ynNLHhdaefruVtD99CWK4HKoRTsUo",
  "key4": "Er9rY2EsVp4LsQRRh9sH1bE39gY8ywE9sA1VW1QFDeJo16391hX6SUY6rz5yjVAj2uVUAVxh9xg97TxTjbZcZw7",
  "key5": "5ej7FiBr1aqwQudDzEQnUaaEjyckbeA43NfUm5Pfcdgka85bBJa6YLFp7iAsBbq9ApvjRhPSp2dqhsE9jjwQtGSw",
  "key6": "22Ff1UmikK7rBjQ8eYcMmcAPJd5uD3RPSC7FhWNeusY46Z3M47ZDo42Eng7MZqfYfAUagCK8EWgr85JqmnABwu2P",
  "key7": "3RqNWgY9Vv23k8V3umVaqBfS3LnacBwG5Yiz4C9LLgATJStDapBceLi8xTuApRtWXZPzeyuQqnCUCNc5QsYb8W4R",
  "key8": "4aC7jJFbeHAxxvrtQC4r3kywDY5Zkk2kJf4AvwYyAoBXzBoirVL4URxnVLLtRMadRWaqsiVigcjGzhyGi15eqVaZ",
  "key9": "vahdYhmpLrEknpSVuDZkPvZxcJEdBEkGUQHsXHx7Gj2SaqVuzrB5oYeAo1Fvf9eTCQ4b2sfFHrmD9DtMaQR221Y",
  "key10": "2gp7kZ5kZMy1SUNMgCfcLS8wh5sh3ucHVDgHGPnFUeLk3X8vxVVjQJo5jKWiXvsGwfGfeqj81xGi8WfDQeTGrQY2",
  "key11": "22mauThDpJtc2E8iu9JTmEPXjioDXWoLukVgwSWFbeQWhDYH7qKUbacBB32Z8ZSfZMGeDcMevutW5NaQvXCRatZ5",
  "key12": "2NzC6m7CbEcVAHGingWt2YomZ7ntaHWFdUQXvZ9P3bWCYaZDw7oD81UCsBYK8LEnmXUu3ERsWzfoD9UiiSpCXFs9",
  "key13": "46rhkXZfgfpnV1bYMSpkgquUUcAeG3sL98yCgjUTokbRdsUTDBrmHwzkoZ2avkEg8CrkFK8Pe8fdnqtSyj9bBwkW",
  "key14": "5cKN3yn2kTc8R9dEn1yhnDowsZeshQKR6wkGQYPzjqz4LcRHP955Jc1B9CFDAk1QQHZ3rtZRJbi9N3i62AgUCBZj",
  "key15": "5UQhGb2jNZPTEmb1Qsn3mLMnXkgdBm3F9H574H9P8A16BcwMeE6LdmVF4KixPwJrSaxTore7KuchULuxpB4981FP",
  "key16": "3JwWxX58Yp5t4ymBSARarhu8w7Bx1S7iEVXn47DCGGq9EySXNycq2odxzHMgZZnpfjDa9ZPjVYegeB2JzvStDQMT",
  "key17": "2s3gfrDPfUJDSL8UDYEYBk8GgaTrPKdk2TcXGmSFWyn9sYHYxhCAYEu88DyZnALefet5hhu3G9DzShxRnpVUZscB",
  "key18": "4FRWEXy7h1qr2QdGTf6QtuWjxNbGvVJABGCHoXUKTdQWNAgsLeDBM3b4CEqH3HiTewga1RfnU8s6t5QQrz7nM3Qg",
  "key19": "5KFrBSyy5FUHpvJHGCqmfxXF5Dn5wdWwygNXesinsDgydUfCjLY36PwNtBxuBeim7F1tT6DJ5MDdmKUCdzP5ZBnL",
  "key20": "2jc7De3XMorScuV6eVZ1BykrD1VmpVcDBJeGJviA4SUsNp3riX5rBPrcBv9cgfcWZ1VDgT4MhAUjAW8TRTTV1rCd",
  "key21": "2VN5P9Fwhy91Bg2LjUTW1KYRgMEpCLc1Ao4jg94SpbstZpfFbcRaBzgQTKcAgweqoLseEXRM16g3ESvVzZQjrX4e",
  "key22": "5YKzM19wZowFvXrM1HEuqfAHpbVe8PzxuYupUpUNT3HbdQk5ZSXHzhgpwS8m4XnbWVnQKRGjLD2wraes192RSiZc",
  "key23": "4iJjf4qGouZshPEx584n6B27XkctwJsuaS4UwEhTYYzjY3TDFRBDPFFMaEgAk6mCBZNToQ7bm9z4EyKmgDgLjLCZ",
  "key24": "383ejp4LAZFyNekkWMeSLZ7LEymziF3VPMtCijhvQxTFcGBYCMtFb548qbNNv5eUbNJuHL3w1XEjs7TXDiqmZACr",
  "key25": "3BApNXyp8YZvyMPiTsMPPYYuKW62SHjqEaFpixLz3txC2iwKzx8cxwnbxfg2mC98H6BYUdPf5zi2qEfc3G53Mx5G",
  "key26": "5dhqZ8LshuWoGXLfk9kgntABbmUHZhnEsjf15BYpD4VLhaZyC2ZLomwcv8AUuL5fSLBDBj164qpqur1JQdMhQjHW",
  "key27": "26fRu1VBXajpVQbM5JQEyKQ4aPzwYyBbuz1rXJPptxxT28HxwShKqjrvTXeHh1YKwaBdVPEfjiNz1pokZmVSwVQD",
  "key28": "23EoG4tttkUKBGwHd4TFSftxebFPUXDQuVofJrg313sofbzdwBcWsWT1B28FDwV3MN643hVK9kGxYDQrovuAAHNi",
  "key29": "Ei6g3bc3t7f77AugoLSDRWSNnMBJFqxMwmb8YWV4Zw8iPa4RFS24U13EP2GoWJVJt2pezvPUC113vJsMxiERh4a",
  "key30": "5WrYi52M5MRr237XV9qdUTsPHdtXQ39yPrRmEUQnFXYL1XLx7JJnBvUtFLi8U4Vbbi9yJLTm2xmG8zuUFzHybeNf",
  "key31": "3T3fyHbnhQxsZd66cFQ1MVYGcMHwtB8RFyG6D8PKuxZ4bQQeo5Nt6HJ812AURXVe4U7grD5ZCMxqtHQNJNM1r6yX",
  "key32": "2whAxrkMyF4tPUWS1PKZrFghNcTmLWkuspCT8FBBZbGXgYgKrtbxDWi6LVzNq5d3PPVbh7bp5w3aRQM6URURc7gm",
  "key33": "3ruvDWF5XGTttgtjySNs5LfB1u8e4EGVfnPrh4B15rGmqTjKk6m7gig8djVgWNgdqyPHqX4yUPYKpw7Hjjfxqf5e",
  "key34": "2yKvYHkSRKMqzh5ytdAjFz5QGwKteYfBSKTEQVJKD7XSPUM4CU7dWaE4D3dVqhwJaKBPxYVzwAabdiLmz4juyYqR",
  "key35": "5my17CD1TbrXmyLwpFACv3VxZdCxLgQZ8UzDtSvpSEDaYUWaqnJcuX5S5CbhayvA8npAGxWi69WxC67912ctPohV",
  "key36": "2ho8gzvYXMYhU6vRr6qzipGitB2C1gnbjocsoodP1Yp7yyGW8XC4AFaehNRkfssfTBGdrJHCWzf4ZNhFUKUM4aHC",
  "key37": "5n2yfTC1GAAMdQ2Bggx3vqJyoJTHU5jG3ezNPE7GsS3g9Dvr16ZHhgwn5csPgWr61Jy4EoRpkEfdDBDzGhZuLtWa",
  "key38": "1EHGACvw2gMnn3yXHqbzZkZCPUg9ur5EVEPjQpr5jhN8cYB6pmkdm3R7QTyqaGnNh4HehAfFdh84aEqSWan4kei",
  "key39": "2UUiDkrxXZXEbHFB9cGFaebwMvDbzBX5RPkg2raLu9rxddT4ejbyZQ9QQcG4zYe7ceKTvrGGYrkZTUUG3thXZVmh",
  "key40": "25jMbtvaWLumzy4CSRdrarThfEypGEzic953fpkvs6KFmpKy1EDVCK6nNgLSnkADsbDFsG3RSiNwARLBDb9NLgZx",
  "key41": "27MNatZtU3XnvDqkGCQxjRxoBHJnUf7gcDVtNrUSoAd5RrXAqvLpRZC9KH9AvN8ZXyGSkV3YDHc24Ge1rCiH72Mg",
  "key42": "seem7gVF8NwbXWvD7EndywyyhdQvv6D2cdLEu4DfirBNG5c7jk5t97jeJbGepo3uYx25tEcyTNuwsKjKtFyWE8w",
  "key43": "4ddMXBNx6kuDDj6rDYtf5rF9H5qDh6aekWQrYyNSFZfkHQmPXS2cJYX8PAo8JeFZTsnPnJfHqEWrceVSePmJbPij",
  "key44": "5KYGfsnw1Cq39pHbr6KWQTc2TmqkjxcMPmkdtDm7dw2tz8uobm4Q9Va8CFgiq2QdMLgY91PEB5Rny5gANh6J7kQx",
  "key45": "4vzPXSDTg4nmuNYhy7pVd1MZa6XFQcjtXq2FG6GKb4RuAFLAj9CaM8G3t8jS7v1k1Snj1sGcPv8Q5q8QgqpFKWhj",
  "key46": "NFfdkBmK11H6gchGcFfTQ1TmCqvAuFraLtfb4MgAK1MPvitCrFVbWH44H86bHXeYmU8ZkThZNcF51BW45J4n1Df"
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
