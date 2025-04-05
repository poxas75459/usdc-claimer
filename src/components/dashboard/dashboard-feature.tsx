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
    "5phRTDSVYBjeT3LakqwwAFKEpMsjRZfKPpAii2erimrDcAHZrHzjat5Wh874XrUriY7VXakqSPxXbRYoXw3qD9nB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTYeSwwbPvR4XUqhaz5rFfvq8AEsY9amhhsGnGn5b2TfQ3GpN9RDBdZK2Ghro4eDCJxGfkVLBZsAmhdybdYNxQ5",
  "key1": "7nnaooTC1VD5an81RCigKf4hfqJnnZwFojdJezgzriqmTXAi5rcT2PuhgYY27hBNyP3wyJ3T1jsiLhPWxG3qPhB",
  "key2": "4tDoHDdnUAdmeTzk9Ya6Q2RzL9Cv8XJuM7L8iqdLnLSSdz22dizzfrjKgZtKpcurG9ZfSwCzJp87YHRYWRye8E4G",
  "key3": "dTVdzFYBNyJyd7kh37DcFqPH4yqXwee6Lw2f1CCxhmgAioHripD24jPkPswiJW2HgSfJRRc5nbvKMbViibYh4NZ",
  "key4": "4xF9KFJWyHJp799MdKLrLixPj21CNfSYNFioHbXzWaLYRpcaPRzj7cx4qbdD7VPhf82RkkVF4yFQC1yfeMTzywms",
  "key5": "3Xj2dpeqhdoroMgtBCxYYETGMUbNCdS2kNd2v5c6j8WqD5svpV73Rz2Mo6vpta1pPXhh3aApbCXuimoF43Ku9aoa",
  "key6": "5dLSQ7HN1TX6b1ctRihLXZgqMB95iGgDngCoZqpMPZLbMaS3o1ja5G5FsTK6DJX9r1UyBnduZfPpvZ9CiSi6h7h9",
  "key7": "2bTKzZmddLzfCr8WNreHUuSweLxsGk69tBCvsUoQjABbC1svHK7H8MDtNtqywKdsFvh9uvscDDyupfb13gZ8aUfD",
  "key8": "4VbULp6jEtTat7znh7xCrrnmQfZ8xPPXSaSrCqBNo4h4QR4N6xc2V9my34WwKL5btmGYrBL3uY9xnLvoMuDjTV7f",
  "key9": "2M2jjBwC8WuUVXJCyv3DWhs5jvq45GEsZ4CoubWEEBBgh83sAVdCrUW4156bPc9K8FQSVYuMMHGnxUH6ozjKDmeV",
  "key10": "4MrFo7CtkKcqh1hbmZ4Kixewufh98FJYqfsfDnMVFgoCLD35B4gU8bMPWyqWDnKtGkUJaJS9xWTF3KXvYVdWBJzk",
  "key11": "USEUePN2easy9hJY5E32WNWxjbB7F4rBS3TH7Mg8HRwG1Vy4LBqebZzQjASS23hUesV1hPU3Xj9kubYaPyHnVXt",
  "key12": "3qqBdDHag1MAg1iT4vkYSi8LSiD5aVFkTg4y1thZmUeyGTRwPiA7r5uvkFBJ3i8jb3gXhwegmzSJ5yqWVxiE2wab",
  "key13": "2TmbDmj4vggf8SmjFaz8coxQhK4wB26AqbCidMiS4rWhNQn2DFwADFW3hkMeCZCT5xNBmiwpA7NfJnQzpsXcX7RJ",
  "key14": "2aV1mzpjtqQyrMXxr2gwfgFxeb5WhnyQbFCxqHQWEDd4FqDNarUsAmBJwCMv4n4HCZcqxh9B9tzQ4o29va4hJAxZ",
  "key15": "33SeE2uH2QXpdpAZ9sZfuAxGBnNLe7Sc3DeZuLMGUZ3hkJUkCeDft5tSPZSArfJFRPDGzmXViU7ccbSNzBhPvjj4",
  "key16": "Un7nNDatxPtA3h9bfFoF4357ULBfAxW3ELeNudjy3tGFSQEZghPtwLUT7vqfwdUmYM67uz9Aa1cmG3ezAs6JGj5",
  "key17": "4EYiWBe33fCnA381h1yFH5sxwRz6X3F1yhbdFgZUqgEHczaoT2DaUS7Z7vNmpEVGXjDZ2pCG77dT5oh7T2EgX4AD",
  "key18": "QZCPXC6Vx81W6aNxVf7mFbV1niNszsLZ6sQ2GS5cSeAcyKSgU65NLEC61XQeanqU8n2hfCgLyhjAj7zVvJkU2WH",
  "key19": "fw4fvb3jTi8DCbLuqiG8KnRNWyp7tMdvbNKqFTmf4tKeiHkfP8NeiHQLQydhqZugKx1ANtasZSEU9REr6QWSWYy",
  "key20": "3xQamXDyZdGMKTpC4esaePjiCTj1qWdHDFmwrUFTq2gHzuEnG8T25dSk5Rtjg14DWSf8dLLFz5hwJ635sLN3n3Wk",
  "key21": "4N7yCA2DwsnBbqkNyhDMx4pFtp4XXZ36u9pzXy4kWKE4xdNVgDGsBqVw2NKkbDUtawGP27u6ZfqVCtJGHs4jTXwE",
  "key22": "h68i4sByszUjGsu8MkLp11fzRyY24iS4Sc89ZoyyrE6M3hHgYZ8a3nmaY9MY8QY4bPR9qKdoyQtzszSBavPPxk4",
  "key23": "3avYbP3RVdoHb1Wv6UcSgVMVCYidB9GFGHEu5mUEtrJ3nqFktc53fCii37JPSyLVgrDE5Vj4ZBNKPLJGJRsfqPo7",
  "key24": "33GestcVdBWGUaQohQAksacqvKMG4ee4x5cRo53XBU2pbdtZWRACda7UhCXjCFj2Mh14tWfsLbEir9jRFm13Bt5P",
  "key25": "TDQtkKXcTbUTdHJJdnJQpzfCrmeju3ta11Y49E8Ff94PpVgEsBVAuNpnJKRKt5Kirsj5XNJgj4CFfA3tXQj2e44",
  "key26": "raCiQqS5NBsjdMELsD1Z4pHYEoUVfaYDwDdyYCGEBPs2XutnSNQb3FgzcMzvNTuAmmrQ3SzJM4sbDWzCK9HiGmy",
  "key27": "5b3og7mjeK3G3HQHBqcUuN4qDysQogxTvXNoA9HFqUi684mCy4rQvnfiZpUAxSR7WRyXKSGxvzxXvrEzSEaaonw4",
  "key28": "4sFkmVJ5GULqe7P2oZQ2SB1BjWVfhEuqwXPqF5XTSYkj492pmhyvX28Fq33fPHoEit7tZFvR8JtUaLsjgNGHbY3m",
  "key29": "2j4jhbH4yBTh3PFZK4DTzDaySVKH5WS63YKdoAZTVwBQR2WGVwb6BwRXryHkmibgdp4jGD2XcjBBS6j4py1Bd1Yj",
  "key30": "66Z4H3r7xrLrkcW1mcYMwKTu8tbRgxBb2YBGYu6givdEC4DrH8SfwT5es1EgSZQc8mRcrG571hyPana7gLo7yK7q",
  "key31": "37uJZdXGCifqG56pLMCsR5h3fMH6mjnCJ4igy8ksgXb9zsh6QLfcimN2vHR3D2M4JDXY72kttdFTmQTMxCU2EG3r",
  "key32": "BYQhGcmoxfxL9a8HeVYwuMyDtzisNNxmNoKrZ4rFcaj2bKz5DF6zJMR6fLWVP7hgJoWLa4xC5Bf5XmWbzPEHDip",
  "key33": "Ey8SWqZsKtyxjHqhCAz6GvEPqq8kdUdz8t7nJLSY5mYGZ6kxYfTGHxMeLmWKoi9oMdrMsVqNnuXMUbVQEmkc3kq",
  "key34": "4XfxY6ea2Gd7wtfbzL9RuRYh9DU7P5c3xKVjPXstVLUoyTgSMDMaWE8CRzEnoCuppaBCt1FP3j19stULhDRBeKaT",
  "key35": "nVHfMnCkTde4hMWHX2occRQk9VknwSE5kAgb7uFN8fQTrHDVaDY2sKzHXSTHN4jbjaRXmKcqe8R3F2cThrk2p7S",
  "key36": "34uuaKx83boD6KjnfVgvJTuGFCc9f6y43iCJ3Npm6CFnn7qsHsARTG5xaMLL78ZaNqsEpiLVxhw61e41sadXPqEY",
  "key37": "BhkcDL2AEWxU4WKFgTEisgryMsapac4uyJBKbBRVJ3fAZ23L8BAMuZD1vACw4GPEJoXYbjj7yteaPyjMQe9SqAD"
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
