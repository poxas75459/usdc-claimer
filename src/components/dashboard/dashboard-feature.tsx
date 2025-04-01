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
    "476axjbT3nRUV5ouxdkBM6iA3ZgHUovZNRMxbtWExVpqQWGcxKfvgDdHnSa4a2bYqS7o2AaTx9ve5Zhxad5HNZGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgWfxMTqgzJ9PbNNUGrf2HumoRA2ZsnxEUQz6sr2Fxur2JhMe47gbCyJkwW5bsDKus8Hvj17GjMq9rEPXniSCWA",
  "key1": "2FdQUE4HuuqdTiRAjSHFbucXqn42NuHP3Qd1fBru7diT7rgPtFy2PSwxGT1EcURjzigCCEwFuM3zRWxr4BqH1npK",
  "key2": "48FBPL3dTdMBs7DiEBX5buHsbqiN7Z9yFrCmRFdDvbnuyPp29kfofnwq7XgiZNgjs5viWJPP1mLEte8dfwaX6ru4",
  "key3": "5U1WjAsXu3BQxMX5TWTkFkwBkv32UfQr4HeVxi1ELz1Au6xkPvdYvz4TsUqPxtA5kmvYoQ3FVVcamKrR9A4ZjpMq",
  "key4": "4HRNsMNcVBKnA9zwgZH92ucZJs8WiDcwwJ4MCfJxyqLVgx84riHihi35FXNdnbMbDPK3xYtSGeMy8nz59oGb2W17",
  "key5": "2fA7cjjCa4RBbKhyqRJKRbNiKv4Rv2JHtE71WYM2mmV4phFRLT49TcrUNq6uHetRv5miH8ymdipbF8rgX15EtzU9",
  "key6": "2gB1ozMmBP7PBh5MDSP39rkyieGouX4LJrCauygdYqRUNztbKpKzdbKntC4eCUEyFog9Dtf1jaGxkUMpJPyuLXZq",
  "key7": "5ugTzAUBAC3mKoDbBRTLXjtDFmKttpxS5V3rBCjefGyjiQU34EBdMaooUPRK8w1HiLrQYyMtNacaG4MPjBvUXmYA",
  "key8": "3dLscQdcVQYB3DmGqBYKaWR989nVfHrCuoRtwGQrK1dth4DzKa75Xm7HKBSTXDbY8Ziy2GpTtmEwkgXbf77H9MwD",
  "key9": "5tAjaiowX18PbvV4UWEvVw6prqBiAWdqRvmVkv9bKx3pQCGx94EJXjNGoa3sYbNiPYvMCEshNhxBG4LP9716fSBT",
  "key10": "GGxD2w53YstW7V3MoRkCjGJD5m31ckTT3PLDDrkGcsFdYcxYdEhyeAXWDMZfPfEndVi71RAB67UGdY5Ek1bPG7X",
  "key11": "4EGnU69nyMnSE7SkCNNp7etLLaBYjgPRo24GuLdDKmeGerSGmXHMmDu5ikrk6KmXNxvY57xsfzEf68dg1Wu9eh49",
  "key12": "2hkDiVtb8v4j6M5ndTz1cCXbMM8HPDqKSKCLLSpbN8dVa5DRmFekfDotv5wtyiBd251hvgTqqP9CJ5GgtF4rkzFp",
  "key13": "63WsYCjfzzAF5tosmWtn8fZA7Wca7CF9Z37M8tvdEfY9YY1rPQPG77XeHDj86Ww13bESJoGsSKhqocs1uo2UKpe5",
  "key14": "5NBQWRCJmPJDd3kbWQtbUirZPJzZHTef2jATQmqYMo5ipwFoPR84mtQM146gKrhPeAN5SftPGem9yVxp7wfMPLmP",
  "key15": "3Tji1wTfFYA3rvoYRry6DxLrtMtdjhL4cYaWanTESmLPmx2snyar5H68rqVvuuX37PdQPH5QGUsdYdWfY62nCC3S",
  "key16": "8Xw6To3Lsc9RHFEYM785AWA9PK7dYFXdKk7BzmmXBwbS41m57PVHCtbY5ifGiJauFnxFMowgu7wn5NmyStYKvaL",
  "key17": "2JwND6t2PH4fRBuDkvHfHXGoFnqGHsvnkf17VCZmLb6QPyf5jUpUNdGpa42oiLiEZpWgTmdPraMXi3Jg3qy5auPP",
  "key18": "frLgzxG3Y7VNqmpQqFsR5odw9inZAnKQjWvxWUi1uFn1oGXup3N1btajXwxGBpRVXDqjvtSnqdkBHFjuc62LvBB",
  "key19": "3fp8qUjAQBj7GRzU7LdcgfehTYWcbXg71BVi4NyguMKejF5piPCCEcDkHToNc5HffsaEeUYMC8Kjj6aiV5BSTzD7",
  "key20": "5ixZCiEAj1EH623j1WXaEF9MtzMo24USpvpjbGAk2gNZDz5P4A4Kv6LbQwZab5L14PdRvevjz9iatta2rhcY2Bqz",
  "key21": "4uzLfsjfzzASxLdxSmdscsqJdypLxeZRtMraBBS2VsUfDLNnLG2C7kiMn4dHsxiNS1tji2S2DnXFxZeUmUJRr6Dc",
  "key22": "3Xwpmgf8whber5JVLfNJwYRTPVWvY2CurFgWwzCo7W9NMqvteQA45guMLWyizDZWvYgJg2pjGP4WcjRDmbt4dRDk",
  "key23": "ZMVUPyigv9S68qrmHPNjZyTgJ7jjE52oQwZ88YsM1vbGMHc9vyaMkMe85iFcZ1D8AfqCjqZuomvXFXv1BBdgb8w",
  "key24": "21pHDmyLVsJqbgRdQR4WuDvStBPa7eTzX8PBEthRaVz1zP7mtZhpmdFQsvhAji3bkETsNPWtUXbwbWuaLoQugyvX",
  "key25": "4RzcxssznB5X5KRDmDQ4sdKqJ5s5qS1u9f4easgsWYNLWVPGWKvjudEnu5T6giPqJ6hVuD3Env9V6X9P32Rmv32K",
  "key26": "5FNNTLqvrzwsGCwRabY2htrsUEFPjhUU9gnYp9tBbJQqXbm6SoGihAr1QrBVKHb51fbywhnagGuJnZysuufCXMJm",
  "key27": "4rwkbDzmVQ5QKGmnonfqMMcrMLS4W5qtuBmkduqo6WzjeQHSDxZHpBYx7kwvro9CAEosRv8zTYXJqYGLDmb4cWPZ",
  "key28": "Uagzyt4TVvDebPMnRWepawQnsGSvMCYenAjM8rqJZHrn1LY1eM3k4nDU4hyQkqe2WFTKfEKib2rTT8WVs3SevYy",
  "key29": "3DEgfUG1CLfg6U2zYmWuJJMaXQGKsfC13sN3S9xcT2NWXkcp2CV5K2kL9CPQrjoW7fPEAacny3vs6U5eQzxyw7tp",
  "key30": "2EqT564jjCAc9He5X2JHacPR7ezw4PyTtXhPCijo9PNycpiHprSkfgSHo3kUjvZUQZMP9bbuyA16u9FtrjLR9kH",
  "key31": "5m8wmYTQqvVQ1FU6wrvkMF1qAvWJaUfjn96JENpJJhAssxfcTC3oghce8aDwLF5Mbx4erwER3uBjnjJHrPjqdYRv",
  "key32": "5kye8JnkR6Fc5gioVHcHZzu1AUw5CE46D676qrY8va1DScWPShMX2T8uDzSNV8agXxQbE6vKu2iqkjWqzppq2KLH",
  "key33": "5YA31b6vUTJBBZimcnHTGHayiDGE9maVDsy7EeVyyy1pZNn4x4BroziofNERigQK2BxqmnJbPS1MZxnmzubNwJwr",
  "key34": "5ZZShUSGC535gVRvAwm7RqBUjNC2fFeS6BvJvVvSNM3PEbdqRU39KzHh41ppMwDiKE3cpDZdNUsZz6xox3Qd63jb",
  "key35": "4J37KPTktJVDTzymHxF9kncxWxghfP2wLoYdduJbvNfsnxmua1iVK7yAv73kMKsN96Voub8wNotHamgvp94PGL6R",
  "key36": "4bMgYjdBy2zu3J3fm9AgYmhGuqQaEd7AiVFD1eZRR1CZ2yAc2maDtBRy21VKyQdG6H5rfN4djqZf7cjhxnpWNHyn",
  "key37": "49Xh9p9A63dNeWy5XEhDACsBox4tDhD26VRbZNehuzadSJPAPcvb9EgpfgBjER2YosaBexPFsgF8YwqakJXFvU52",
  "key38": "4wx9tDUduZyGJdS45uXB4RcMkDcDaQduTL4puUNBSjX9bD3rz3UvXvRscHG2BtnWXXSYLeFrdz4V2mYrbFv6pMbt",
  "key39": "wSb4hgqUqceWwQWgt2YES6ayt39nDUHhDfefmYYuNJNXapDb1VvbtEjVkghDfSdeJWKSVdXBdLrdgUKSP839hgQ",
  "key40": "614voAfwS2XaZaxcemFKHbTjip356zScwFSgifR6jHb6CyMVM4rQ1uUASbQN3Q3fLHWVJM8aUNXRRJYpgc9zcXGk",
  "key41": "4p7mq16UtGVYf7fZ7UQc5SuNbR39GKmeS67JVoLgqfsPfZSHmCmYSLv8vBDoyvFSuKkuq8eHNd21yjAZ8kJcbv41",
  "key42": "5y2CDuPmS3FfHcPDr6nPqoGTrKsiRiakBRYu1xCtb8ZVZpZsqjzH6Udm9fhegGJyXxarTCQYUin1jRARgmzRDnZV",
  "key43": "4S3bzxXLt3uJLCZa4oBHdzUpWUgcUoHtihrwGpJGCsdoSr7LfiRgYa7uorxS44j4XGSCtfCRYH65p6Ps6aYTdbN",
  "key44": "3FFsiaHAQ49VcQzAF3dP1t5oSuJ4bPtjXy46f7y7WZ6pxuYdBaXgCK5qNJ3azoZTPiT2YpiB6RUvXkxgy7bYKjVg",
  "key45": "9hUNxddAhuJ64akaC1eKiZGyCLoGswiyFrywfCsErKYmodE6qdYeyBJUqdY3NceGTgXJoM432brk7CkZVszbeGk",
  "key46": "5RuZGiPnyjBrDfF1vKMkgysVDW6GqrjbV7ZjLzXwNJSXXwFmticCUrVkk7fyKJdHdbYMCmyKkcDAneDaoHSpRh7q",
  "key47": "5G3Nf1jyZjXnZSXFnvZkMnhj4z668RKa7EUKzyREwtPUtMt4KdRAW9vemELSLPvvVYoVwXvMKRDN58hTMp5m2oeE",
  "key48": "5738CeAGDP3vJc1ARKS2b61ubj6TxUmpHpca8GGbiJr8hgQeqva6B5ftvmPLUa72aVBDHaASFAfWKbTxe14SAXvq",
  "key49": "3yv6FTgwAQZL8ytFp4biLQWjuEEatwneJjHreurf7hJxRLdjmGeB2EWMbV3TrBnyLKuyDjhNsmATbs9UG3PawZRv"
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
