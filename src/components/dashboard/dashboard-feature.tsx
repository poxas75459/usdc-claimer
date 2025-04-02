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
    "2HE6ESwRMcnzEkcrJtCvifUKVcskRbws6Aic6x7FXERRGMRbMFMVzZtBbqakavxqVwQGKEANS9MuvgdGLaGm44A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jzyPJMnLfAsZ7KAGbKVk9ewdpuqQKCUAZYwCiM1XjAmdZuMX29Kp6yKrY5ayhp5YhSePfQb9rVGWGv9uLoY9ffD",
  "key1": "3b2AhvHaFieBK3nCUeYXFr1V6jKjoC6DNgZkpzMEDF9Rzbn9rTfAZRCF1DxeMQUR1uSXWxjbENqn1pM1XPjdzzJv",
  "key2": "4AbbjaVZX2XaJYVSzbcgbJyKSEQ8dXJ3hGfZLiKuaiqP4d8i8Rkjy2a3xew3FtHNvxGqMpfTqX21qYEUfRxxmsvB",
  "key3": "2NhECxPNsbMeYsnw82JbHREPQ3LXoS83veLAYmzjaCGDv58jXjvyT6iZvdYcwVZZ1tjEwAs1tuBFBtsA7MASmnCU",
  "key4": "4JumZVQtBX4KDDXV19KtUgLZdjToUPapxCS82BSH2uemkmigXNnhj7d3SovLNhYj5q3XzQkkHGiiJaimHCQsGVUe",
  "key5": "2nbdok7yYcud4XtDSEjz1RUuvSQJjmGBR9JKeUmXxdC6vQMLm6Gr8fzG5EWgBdS8HggbhNXHrbuwodL7C5FjmTxp",
  "key6": "5GV7o3ykDZB4bYQZViQMTyhEJNTcNoTpYQ979ipcxqYZuWLGGpgwF55Uf8TJrSgy2ovXDySExFKhioeSQE5HpHqw",
  "key7": "4CuBrFfrG9z1GsDBHHE2jb3Xx2jK4dvXtUSogTVmhAY5PZDy3SxKu4vJfUFUuhNe3JjsEDi497toAFvG39QvRgp3",
  "key8": "3aU1eQqjdDyg9iJVpjoj4SZLzTgr6pVfCZZwKfkHeCiFWSjRsLhbLj34iYvUErAgp7Dri1y2GUTF9tUFDVwpndkA",
  "key9": "5frKcqPwq4782inQeGcC58wNFWik9zZJz8KpNQzubtAS8AztsTtKJMs9Mj8CCJgffRrt784Q7ZutoLfwWVHescS",
  "key10": "LywrYFGDDWU3vyQCNKbpNrDe3XV7tJNA1e4Mgc7KtMELPd61grksdUp8h7VL5aprmJhk4j2eqjqeQ5baEXYd2qJ",
  "key11": "ykG8uPSQQKGQoz7wxMN2mYvfjL1LCrb9iRjhjQQSX3jETULBgALKqZo7QPBw1Gek5pLhv2aczWHAz2Q9bVX8wRG",
  "key12": "58pdo2bTJHG8Y47gDPZAWgibMDzcwCpyK95kRjCAqrFptBD5PscVbi4DftfrKx16oatswshxtVNy3ZAkYGGVpysm",
  "key13": "5MSLE2xCY63cFbTYVcXkrwgygQsfv2r9h8raXUgzMiHn7BYZ97oBbQNPi7iXXzMXaoeKSEz8D38A4QDigFcW3fXu",
  "key14": "5KzVzzjApTbcArBaiqccPowXNiVWGkudqguvTixNy4c6XBZBca6YeWHxCHiKZe8fciVW5ji2qRNmYFHB4NafMybU",
  "key15": "25Xsb2fWRqarJenymzbCiWwEWyLeSSmAviHkfsruaE6carLjfhAJkJF5SK8cuNCshVYSP1YWhTP9NxRboUgM9nkf",
  "key16": "4XT9qTJwr3EB7mNYn2oMseJeSuP9haJpy3pE4P6E2LMAHjCHNzcarak8UhE1TrJnRCiXQknXGwWrx3pomEUKUU9W",
  "key17": "4UdYBvScoyC4SugRsUqVj5qHXZpDSzKPadRH8nkaNMsy7nZY7EWaUjWfzq8X6LRXcbbcdTJogSEsitGhmVZD42uR",
  "key18": "3KhA1HRDkBAEdMQL4JH53tyk647aeDmuimrtqS124KxSoD1fC4y8A7DLyKbkW4kNw6CPtQejdmzZ2YVkKBUTSPUQ",
  "key19": "23gzuUfjVzr4Lcji3spzmdSQ4xXK4gVF6Jo2GeGjHPucdoHnEhjK36A9zbwNoyD67JPuN7fZW8BQqbdYE6cXHruK",
  "key20": "CvwdPsWRCpAwdvobCyqeicGS6UgACivFfoEhF3o52gJA5eEcjT6LZZpJ6KUspTZYEKNEHBdYdzrdcW4VbFwsyzj",
  "key21": "3pVrqNnqTxBWmcHVNWCwbuV1zm7dx24EkFr93fyoanee7jm8g5JfobWsd25UnvfhK2aptYwZBB7eiQ2msFzzk82j",
  "key22": "5R2HDx2R12EC9mLChUGvsKcRzF19JmpqbPvzDMzQDtNBdKvFhDfYEwneFFXM6rnPGkcJ1MB8Y5yUeAXDHVQAPVJP",
  "key23": "5AjpPYLikawefBPSVVzTHhaAx1tSoPQtQcpQBabY8QQadMyAM3NHhhjzhreMoWJ2Piq6MVupjg7BekBpgRTC5v4W",
  "key24": "Q5SpFkxpvWhxY8creJ1tfqvPDPqGEuFwf1uLAWebvQFoJs7ryhnfWvcVW6LPcFwGpXn5Gww8BK3VUd49cfLxVYC",
  "key25": "54f5kvSggLL8kzrhPVKyAxps2pNyGBnU22YdRA4Re8hXwbK9Q9bFNihpqZogPP4vrKdTRNwi3cGgbMa7NxWx1NeP",
  "key26": "2LxrJbZJa1pWDcY9Hd5PodWQErceND6Q4gmK3V4f6nVF4wcRVH4kqTFtksxUFHgJq5jJNfnjw15MQ63UoZKQd29T",
  "key27": "3ExLV2m91wShAArd99a8dWhcan9fveVpEbjmce86xHfUHGCdPXd3dM29X6x9U7sKwmsmLdurVxN5HiaR1Gk3heYf",
  "key28": "39NSJcgxFCUc4FUao1zNvbgCPb3G3bb2sJStdfsq9CcJqNSr2xKC7xCtvZkXaWgttGHsvd3VP4KbXafwa7umk1vp",
  "key29": "4PWh2Up2zLtrhnn27Ei9iXmj4KjcbfxvnNdxs75NeUxKUJYKLoNPX9XaCbnp5DZvn6ZWscoSPgmGH3WWgiqhhk7D",
  "key30": "2koTnZRFLAF642dRVVfcuQ18Vd8ozYkF3qZD98ZTfUSU2EBabdRt9o61Ax7PZ1pxotHiKWfRLDWFmtsa2Tz9XAEz",
  "key31": "GTnVZqpbrSs8q2jWSqz2bzA7CsS3ALrU3oBhKz1RDiX1TF9U9TM5GKAVsapZyvCPvR9DVkWhcKSewNw83Gjq5y5",
  "key32": "3KW99YWGcszYHfgQHaeisZTHo8SPEtiWPp95Fvm59w1YBxHqGmDE78fZ4J93SuL4rTmsWWtWdU2DsTdQVWo83Cux",
  "key33": "57sg6MSHm4mmMZCJ1dtau9zy6snH2NroFR9eGjb23h1JwwNC35aXDsf7UJZAzwn7vfeXDYWoj5NTpY8ii1cL6Pua",
  "key34": "4kDC31U23Bxoe7dHLcCvWdKtWXW2om5xLu6tuzmLWeQ1fFF55Zx4tehCYuN4FXN7fFpVEyURHXAsxki6Liiax6XE",
  "key35": "5aXgHKrSD1XQVjemWs3uLvGVnhgan513iwRS3EEt3eg3tAZVGgwBBqqwkPCjaMJSPGtU61nbJjv7iYgDyogzfSDM",
  "key36": "3EFS4g3hmdhMcTKdSW9BFUwUY6ZBTmAP6b6hVkUK8QHmp1pSZ75e9uU6k2i4cWcTKhNhSV3Wz9tTRB6wSExkAbCb",
  "key37": "2cAZo7WHLvyLuvvkjfoFdVq19v3bF94uVYLM3y2qK1H9pre2vHudgEiQwd48rfVPSqEmogTzqHnNK7qfdxEXh6Mn",
  "key38": "4FFFx5Z1E6bRTB2mqRNWjKU95SYKtyn2Km1j6iTUGFZTRaPSa1mDLfykCrwGyMio6jXTWcuKRQukASrMZzDCgXiL",
  "key39": "PKfru9QsNSr2Q9nPV9QUTp44MUKkHSCeGveWo3xp7P8DHf9KwsLFUKBWLoY5ahDVPcCUaGRbffAmZSvzQMiwN6U",
  "key40": "5RW2HWjynUr4ohZL9fXSUTMKQhZXCKTXFkhJMmHMkk8ezKzuGhwGVy5dtvA4kN6uxkaQqzmPTZrF8PAvrPYh5mNz",
  "key41": "5zFWAbKudm7QaQyBceGJhaZgrTxtWyDGHMVX5dRiiaYRqFLZkWt8DvEmZUJTZaJwBDmNVrUS4fjKcS1JwBxS8VdB",
  "key42": "5mJtGL2yhCEUgWws3HXwJEYLMfNUazuDwp8mXms2cc7FZLZbBLXNDTMtQdNHQiVVwLiFQtqT3JX8vQNHQUDHduR9",
  "key43": "3JaQaHEbBoGyiLAWdAWNDT2dfGiQ11JS3bwE2QsqEqL9FVrne5Z94crDTdKjB6mghbrJNWad6F6d9BRvVTfvW8mg",
  "key44": "3ULSp6wx15oPSqWCNqdpQWmtBowPCFgkC6CEGMYvrPApAZGE3WPR1nYh6apshxUFTL4Xda6vBjdX8Vx5c9TDPxPH",
  "key45": "51oxgyRKzLP2JZ19y38KSQFHrkJYQRXQo99WCGQPtESFZm1NFinrjKcA65H9cjkmMttzqzzHXU5cPU6xXxasSFKj",
  "key46": "GTrDnsJyUntjUKr8TGGPmGR8vyijLtk2nxFDPPFmydug4uzbJ8SL9LdgdeX32DAKaTkM6gxqguDCW2GcZ8ZPyeh"
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
