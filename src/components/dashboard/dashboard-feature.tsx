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
    "2PHNHUdMPQ48hDXWNqvHEXYFCzBdeZPMLELUibcUk8X5Hfe3MEYHgL8DNqePVRYM1yAR7sbqiXEr9cHpbHCUpuvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RpvucfV9rAXMa9wM8UkQt8grkQyqayNNPjXiJQGPhtRuFm6vQjcz8oAG4ujxrGGSnovGREYFDX1eLSSoyPNpJmM",
  "key1": "F75iidFeQpPU76jcPS4dNtaLrmxHEvCMjWtZsbyWQgUwtUVie1pcbnmprdk5SXUi5zd8nhc5ewoGedhdTYW1bqk",
  "key2": "48PtpsQQdnc16wFiQ96NbDqmuKnuzjfP7WvfS8C1nSuwfj3kNxBQPSuk6tagPiBnu1DHP41MrNTU1ipswVzRmfDF",
  "key3": "61nRPG4KapM8FU52nrDt9SGbyCuq5J1M5FmXpdqMU2p9veaZz6wPJXxrNpZ7EwhdFY1iHqR8CvQ1tg3YdZLCDf2i",
  "key4": "4KxsXkTJ4bZHN5HZTdEFTrZT3muPYKvthbNTuKh5n79wgcJiUapUEgyy9c7Y8A2X2nRs7Qru3dstUdThw2RExx75",
  "key5": "5bHpnqBB9fEiBkqhbuvCP5cVTA1RLFS12QY1ZrU4DBKWfwChhSyyJJTr9fQK8VseucNtNPaPAjgn7tTi41LzJWgc",
  "key6": "BkWuLWNJGYP8B2fLwqzYa1dm7fWB8ZsNAtHmCmCjAAj579tUySNnNYBdqE8Wox6UPtAL8iszmTjmLzfGTkgxQGd",
  "key7": "2CvnFaxDLh94w4EwH9vnvusHFP4tGHSMi6Gt3WMqW3aU1JdbT9BnchNrK17UX7Sd3hEceFWJDKEZ9YJzHR3uqaLJ",
  "key8": "3yfxuFrSW3uh5Hr6eJUjENMHMKSzdySYKn4kr4ZiyKJmau2SLziwFh4jE5RD4TyxBiTr2XaZh1qFtvPAsAVDo9JR",
  "key9": "2HjTYKEtD2rtpgaK6gxAaZB4k7jcsqpZd6JVCgaihUAyeJGq6zyYKPD6Nw5mhKz6p1JCqFvKQPxnC6zeDsP7JP2e",
  "key10": "2rphVMpmZNUD58JUTWXxNapzrsNNZu8ZEV6BgFJJcQfUFvjsTdpfmXEtqqFjP3LXnooJwtz7vt9LTFjvWJbcui5Y",
  "key11": "5Nt2SbuJdNwJJ2WqaVfbzMofBkw6ncewWBLsH3ae6LUbKSf8d9msExdtZbaY1r9QMPw6HPLSAotpuBr5wzEYDQDX",
  "key12": "66CXxArpyMbbTQDsf5VDbRTZDGCZvLqBbg2cd8fQqmBoCGdKz994u26coUsvdL5Thk7XDuGvv1m6XamfEfxDbT1H",
  "key13": "G3XGZ7Y5i8sZn8xZB5Fr6byTDnSxfT8tWqtVCaaKEW8wTKmpc5pKDhMAC5dE1Eqnmb6FEP5fVzweQMq6cCpvPWF",
  "key14": "4qdg2fSkEEoLRmCAtA8ZQDQomNHthi7Bd6fkS7AaDEL1LZvRPVJ5a51DTf5bUh7NQsa2NaXBdFq9TpWRJBcL3vww",
  "key15": "38e28vZh4XKj6HS21LQ3M8eDE2tDjCtLzb1nKrqwU644wJnBCUAee6miPmAG62o75ikjdcjRw9AhuacDGS58AnSK",
  "key16": "Cqgy47QVStcVNZXoGNokqqz7dRckTAK4EziwutMbScUBWvVXnVbVhZBg1KDH4pSVMYobc3rHWgqXvzdMBCwtpFC",
  "key17": "21DWTQe5DsP65N2SywvCEBn3jpdTpdVKip4MGo8yhkQpUixotBytXMpeVutZW5mZjquroh8xwkjevfFDr8ZPcUqj",
  "key18": "5hNfCykqF1MS9pLzgu45zsKWuNP1cwpTUaitTHzAPx5Gt33SbPexMHeHu5hXKtvMHyKvsfKzkXETwgGgtgsR3Ax4",
  "key19": "2BfSKqNJ1KwXxdQGPx2xSVwk4N2nhJ2GNP8rg9nwWcJkkSC4LT322BNWztzfaJ795Dij46rPgdZVPi3KYntHuwVX",
  "key20": "2mZL8t1DbyANc28hEZpYqoPwzx1rnCJsG9JeknfQHczrWDekxtavstzqZXeu42VU8g4Zo9iDGs3FKLKE6oQrJRjN",
  "key21": "5sgMKNeyCRDhnGuW36q9eSjuB6RmVmDXUKXo4WMDZ4ZGxs4fUdxzaeF9xBtzvy42LVw6dfuPzPqTLgByauTrPEo4",
  "key22": "2igmDTQbf9PBi4VGsSgQi3ZjVy6P76io4hbBiEStc3EfzeP613ugVRMSF8fNTdFuhgEWiwKQSggBnA5ZMpQNMZ9s",
  "key23": "2N8AA5P4s3cEas6aeCTuvwstqCLsYBNJiNX612gpD91bCPnTYBk5pjc3y4Z1NuAxtjWXEPb4TD3LkfiRUanws5Z2",
  "key24": "2oHAXyGLFVS5iPfWTJyhNLWKXUZ78ntPv91forXCiSbpvGTCmpGKSi61nMztGuSzF53Ufe8v5mWa6xGAAXKF4aZy",
  "key25": "3VGP8XA5LiHTWPthHQQFfQ6yKevEnSJx9GGPWV5Cwscb1ABbMB9qvYdcKk8C6Ri4HYBHTc1mnJHNa5We6qKcs86k",
  "key26": "23CidqB2442bDt6oU2g8ArZrYuHpeWBGqqEWEgK7D41GNRo4UEv7hymvEQLM7HzafnFYhWuKJiqCG2xnA1U66xsB",
  "key27": "48ptXZT89uk3iyebUT8qq5PN72NUcZV3A56bxcq4SzqcJu7h9pYH62zrNhFUKeRAgJcu4TULKzPqm4zLjDMa8nLX",
  "key28": "5HEZG3zJWW5UgCtQXtGME243NevubuJCfzmFxJci5USKaMxKJuEJWZJ7Ck4jgtt855LKBuWd4PtoPUJmvwhAfEAo",
  "key29": "5szXGLxbfQyqk2mgohEvvgPP8BDUmsCBfoicVnqvTavuVBXgUTVsA8FHQFhvXyAtdzyFqb9YbePkYGJ8XmUmby8Q",
  "key30": "2wvCL2vEDMUH7zWLPi8GNors74KSYpbZEshCQRKAMhH3qMGBk6Rw7parnXspCnfMivBgooBYqMb4c4dqvmvnD1y1",
  "key31": "3PsoEWJ89a679w29cHTHGxnfXwgxVNGipar2L5o5zih8B4yTzmm87TmVDMqYVHkiwo5kNWsprA1WooxLwLV1TkzM",
  "key32": "2rnokVrzprXs3um4XSJYeG54127gBqxEUUQRd33anQizFLbfb2XYpkmXc7qfbYoyeENH5A1kDNU2EiX3p9A9xPoX",
  "key33": "2jNWFwfbHQJmUoyQXEG5LuruvRBB19Trb3aNaJmhHcXiYj2P5ELAMtpRi9HS9pNYfkNCuEJ1VnxE3wRVuxJxkmHM",
  "key34": "5UuSqaRUQ91ezY6x3NL6nbMyi2fyMdJctn3hWzoYLtV8CEcDaHQZgSW8swdEsphSHs6KvrTwLGz4EZLNi1Eqmv6D",
  "key35": "3M8i1sSvRMSQSgEkmamtJi4bM3ZWAmabdrFTtVbytpJqporedzKtYGx2rKhYkLBsEZezaGb4GGcniBFeiYygkdAX",
  "key36": "36umk4LxByvFN3mp8nGxeau1Mu5SpLPrbqkQ8Xok2NgUnDTYu32QznHpVMrBCFYcn9C9grc33wmV9VYs7YE7rZcG"
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
