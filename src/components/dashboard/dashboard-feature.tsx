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
    "2xU7rR7kH6M1WhvaWSAbUKJBQLara494v23CPUw7h6pQsqk9Vn1tF98JWUFBozVhq87vGYNwLJkwZyFDrYz9VPCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZn74KwXHp98Jj6gaSF3kNtqjvaDdowLiQ55s2Qp6oqXdyAmY9rwUPeGErhjU6yryvXSjuMEUA7854NFzw2GNvj",
  "key1": "CtkNzHAMLpvPmGUux7aygp7quND1myQBmKN41c9CdbntYuXNUvjpFKk3LoF9zpoYAyKUig7Agkjvta8BjU6jg4G",
  "key2": "4MCQWp36JC3ZRwD61Hc1uKvVyDscRN2GUE3n56eiHYnjvJL6DRPkpD71kiXKavzV7vRUHbaDfPGZ8AdN8ZuGNoP2",
  "key3": "ezcKUyQ9XF7KQDUUGbVqo9Z1qRhpE2tY9DSMs9zZeDRBSMxNd9phZL489B8bvnvn5KGbun2BJSPr1tcXpLnvEsc",
  "key4": "4tMic1S1imAVZmyXRyVZm3rjKtPKwJEeSEiPmPPEcNUKAtcHcm1zfTbsLVjTJU6U1dDLPTUXSbRvvmSYPu9E4pVA",
  "key5": "5gxgbDAakEX7ZsG9KxyGTBxE2CfkbNHodBhf5VqLNwds2dCZatcbQDMLUrvCaoHh1o3Xaq5cqSSrjpmjP619BnaA",
  "key6": "PC2G1QDJMcuNKjho7pqAN5DyYHmeduHSpWFPTDMD2HgANtxrAsbLedRKvzpsg9wTUuA71isefr1Z15bAzaGiD5t",
  "key7": "31qoTxJTZ6eBgBNWzMwEcLGWgzxwcjqAp5XDHyEwcQHnaDCcLeeVYoq8YgTGQ3Tr9VWxFhTparhzdz378zcheRYb",
  "key8": "59J3JRHrHYq68Q9Wa865a1jgBMrxMC4yRWbZc6Qf5QSNA9pLUzMibQAeSqH5X1pDPjaMaiJkdFQrRpaYZGbyXk3n",
  "key9": "592EQqsPZvrPHAfQjmsrkgCjh1yVV5DvRzScwRwwYPw59pSZjpDL75ooVyL8ZygCR9FgniCUw11iadT4kzP9sue9",
  "key10": "4ccnqaPj1jZocNCvZ8FKrVoitk2DNKFKF6K7LSuxdMHiSAeNfJJw1DogycGuSg2PdFeVQ2mohNfjHQiCzPCXecnZ",
  "key11": "5dzFjeTSTr2XQuPtVyrAZuScF5ze1xXjWDjZhPPQeV2qtqpeDaeAExvCc2PzkW1E1fKqG2GwsuLMghz97sdxRrzq",
  "key12": "XSCxtLVpytnws6hTU4uKDNpADU9dBrAXZLVGLWE2NS3i2gPJrdcMxgj42EfnhiHtXvJsfj8WCBe4NAdyivFF1mB",
  "key13": "3nbvKy9oyfhJXcPRojSBPxyu2bAU85SYgzKUd2ZyjfCC2gtEpLag5XTFHWxQyicsbVaAsiKKZ9Y8X1chDakjpAYW",
  "key14": "4LnYAzpcrQvLcDcFGJfFZYkfezr9q5y1vbhaYQz6opX44gihEkcSYgnRJDXbPK41AoYMmbruCCEj9ms5hMDCQtFW",
  "key15": "51KrFHe4WoJUQdzereQEqZX1kkZSpoQ8iiCVjFcebKPeF8QurvTV2iGfnWsUSUGUy1dJua1N7FFwsFXyWJoyayDk",
  "key16": "5fLpn5WGm1VDFbABs3PBnWaEmdL46V5RJjdfvFkGhhr9Qif4cyEEGxAak87pHR8Tnd4u9GUjPe5tQtjZbjvSyH8T",
  "key17": "55ZcFgQ75MX4DY5GjnPKZBv6GmnuZNndmEUn5rfPxbJv8Ew2seXYid6fMEJwzZQJ2Eq27nY68Mgj2wVpVFoVCWjR",
  "key18": "25iJkSHYo9o7Vqh5E6do1E3WBYVQKM5XZCdyrQsdAA522fy8DrJaXiuh89MBf9vfwhaYs6oNhB4MghnSGMmme26L",
  "key19": "4rVBnPE76p1cRWGQ3bWa5c4doBhSmQQtk3xPHrKxT6W2X95pxer4fgV4MnRVpLeyP9avCgP1q583xHcSn3Zd2jCx",
  "key20": "34cdLw5BGY9eehbQYbQnxrhiei7DxLNfyvjojr11UDrcnHKReerUVMhGVvZfKnqycrG4rufZMo9j4BLxQLHhoPeG",
  "key21": "26tY78DPjJk2dMNwWqVftEK8s7JRQwSvnzbCHS4MLesUazmdodiEKcWbPZ5XNDSnREsen7ekQ4AwodBeD3fbDLDB",
  "key22": "3bbwpgGkyuSfwe9yXj8fu3NbsjdGMSz9hnK7h1QDtci4PRNncBWQYMe6moWPQN9HLTJZvpWeT1nn9nAs4aZRVVpy",
  "key23": "3ZQB92HfC63tQukWZWbfjs1Cd49GkrhUTPeroxwd31nVVgWipG5fDsFSbn24YCYJ96yNMAVeNoWuRr2Cb56UiBNb",
  "key24": "5mLoSRZCBVSK8wTByqSUqjV4XGBfafShUAAE7wPncKk78xVtpaTCkmqfcoSCgoNQEQhwaQxttnahzMYFrdEDAT48",
  "key25": "4XmRY5EqnbfnMf5Dq5DJbug4Y6rb9Ai7S5h1DjhMrxUE5cTzUz6BnwjUzAgCV5Di9wbLkBowzYMeq9Egt11X17v4",
  "key26": "4cjWL9o3zZ97UWZcqjML5t2iKcsuPqTjsowhh3H9noRBPv4qaVwc8ESZJS5A8hcJcVD3wwbvjNTpuzDcmcQ11a9w",
  "key27": "5SV7v3tUkmmktasY3Yr7PSS87co7P4NeHs8ZbW2ydJD5uKUX4mtiu5QT5sZTAwK8vLpY8cwUpV2C3s6pPFHX4PnQ",
  "key28": "5Y6tLW3DK3YkxbDhNTAtQx8e91nYbSAVH4MuotekrGLfiUDBCWpmj3knEmChrqyRbkTHPxio6KPwudD1XgnXuHpM",
  "key29": "2pLVaaFEw4h9gnZKmyUinzaT1fWZNEAuYEBJMR5BmGPrFt5VELUNBVu2B8odp16tut4wP9GuxJhN1R2DceN81w7M",
  "key30": "49zFi45btYHKN163uZdDQ7G7oCDpPpNnkpwx3C8sdjGzeLN1MowSqbwYBJHJ2Y6JCeVE8PhAq783HL4pTXpA4zWq",
  "key31": "5QXkibqydWBcQYmSAzS5JJZGbif8nidRYJ1Lfc9YxcyjvaAHQXfv6Q7UgtRAkAMGaxQ3N6ssoegPZB8g2mS2iPvj",
  "key32": "4dSry9RtAhDnK2QJ1tD5C8wbUrw1LxMbQpiV7VwNoymU5eGRyEZsXqbFGw5awgqrZKgRrvPuTsM9Gwktxr2svp8g"
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
