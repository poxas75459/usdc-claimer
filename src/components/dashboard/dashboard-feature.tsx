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
    "3YATXam5dnmd55RcSo2iokaVef19acZ3HSoY7GQ7oQbY1MJAZXhhxf9zsrxa2GqXz9JnCNHh9WuCZuLuXZxP5YKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NxRBypjiG3eKddjHm6YdediFATZpPWMArSwhmSWr85xEgy9iGySJ4iKGKbbLjxx6Yq2w7GUQog6jcV87PEma7hy",
  "key1": "31ZScGDNY99tzhUJzYGhfrK96gxCLX5ykeUm6QJ2cEg6sA5Yst6osAHrCPaaNTBf4bkaHiCfP498aYEeTbfNnDGg",
  "key2": "5h3WX5gmtT34u93F1KoNP82ELBjRbzxr2sHi6uoJtYqxktQRNcWsaZZbH47j1SAYaFZmKWEeNCmLZzZhZVdJjBCH",
  "key3": "5i7ocWENBh6Hy86BbAp64QfgdVbLRp7QBhih6C1VVx1w1eSgjFgbnb5qQ6Cm4CPrPLbhN48MKQu3ysmMGRTbV7tw",
  "key4": "4AePoetSnXKHW97ozaZq8yPtovsBcCssKLTepFvmPq4VTryxCXu5H2iScweUzGCGK7r26mKcn9QgpNU5b5Y2mR5w",
  "key5": "3kU4jLpytQBxwfzdbNE1hpK8z1cMbZSMowj8jM496itpA1FzyfchxfsGS91neV9ioHduj1PFqrwzD2YfaWs1Bq8u",
  "key6": "2oWh4RJNKp5fHAmnUCBfvnh6qoa952HQjNctPZcy3eewjuQCQzfvLcyDJweCEd7SZSPCihgKb8h8kY5w36NoHeXZ",
  "key7": "2z9XKGcsMwZ3nmLe7y5FWPbzUeozvjym7pRvixC5b6YY5RpyfsZ75r5ribjZj86U8UFtvKmJNBnAu99Q9frNx7Pu",
  "key8": "GZP4TmXoW67HuK69QgDonR8qQiDM9b3kb1bGVisj9x4fdEsKZbSRqGFCX2RsGLgWn2MM2hPiShv7ww5GwSxzVtN",
  "key9": "5sMDcMv6AUV68nJjaY3YFQgWyRSpYA1KofDZuU6SdZg11WFQSy5S31dJjDUCpWv33Mpd8GLiGgbbWDhgQfzJzWxf",
  "key10": "29H2vAn6EcJDeSMh815gaonvXKH9uRfnnNj8LANRX9nsaH33jsdQdTEkJYhr8WnvGbmNnY9Qghkzttd5s5mJYkB2",
  "key11": "4jrWwsmrRzotTS6ZaHWQVCuGmsJh9Bi4KdYVn3gbn9JVvaSygy8KF783WSsiFcX1WGVKu77hssc8dcCDYrDLQz1r",
  "key12": "3umdBjAsNNz3u5dug6qvLhhatmmHWf6VTvsTWDjGQtr8CxhaVtBUfhDTV1f4ZZJLTcazmvZxYFqhoDRaX91w7Riy",
  "key13": "58UmdTN6TMTqZi98bv4HRuWvhku7r788gcMYzT17dGnxFV8VtoiPiJ9Zb53ZvGGbeASJe8R9Ako1uHjcs8xUeDov",
  "key14": "2RDaoWXTVbr5UZJFMRGizTDLzCfweyx1Q8ouufN1SHxuYamC7S9G7PGA8KYM3ftbufUua3BeRSs82CUAP4hRgUZF",
  "key15": "iAUpESB5TxbtiEEAa1xjfvHRNmLXHXHCpaWxmPqSDCk8qEcHt2dpfhrTEhAw2HxUYk4orwffu2g3jMkjrMbwJZB",
  "key16": "P35udLLZqsUiMJVUodorQeLfWykfjWX7Lq2sWowrhxhVj3U2aRRb6HekcfqCrmiEgu5gFWM2yR7YWZk1Yvqu4yY",
  "key17": "5C25Ps8xjkNLpzGqbkB4DoAUUtZZPnDEsYa5irzLhWZ1CKAe9HgvL5UnK5AMd53AbVwg6uvPzQYL68kon6A3mZob",
  "key18": "4ZzCBu5SCAUeNuzySj8xGtDdZezS1z9khDzxUMcPRMwkN7A9r5okcDSXpDVLt9GuXNEFEfy3sMeC4o9mCBHFKQeb",
  "key19": "Quwiv7okt9nXvMwntVimg221PDFVw2EctCnUva58Xu8dpoEAtw9AeZxXcpWBmbBDjHiBjFu1b6fbTrM5V42hk2v",
  "key20": "5npHVsXYPTeAie5qdqBMkd2PuxJ1imqME97egB5ocZqJWsaWxC54NaCQaQU7EQjx336wZosDinAxPVo8wx8ubEhQ",
  "key21": "mwJzwwfmx6VGiUwCdcuNwqyNbVK4MRbjQhuBwjxWcdpQgAad49iJ6eVwicBXE7s5TAL7w4yyAG5yu9WiWBb9mAi",
  "key22": "3vwYe68TY86CbkL4V7oauogtVpYo36R8zfBuc1agYmSx3fUajSqdw497xpQQ7oXzKqFRHtYsgLBvtj1HtQZU8kL9",
  "key23": "BRjFkF81YdcT13CTHCBeh2F76podWW1cEfr62uxa2xfUgxKqBqNxeEbnJvczhqYbus3UbQEj58dGJs6ELPw7cix",
  "key24": "21sBUe7cnLtGNsb3p7rtqAqYLqiasa1F1EK69MSKoz1U7CdsbwN2okrZcaZc3HML9YRG7urdBWLZ9e7d8ywWF3QP",
  "key25": "UR7cpW5iHhRhbEHCyFKynvubYQdZK6dis8yyRqPeC9wDhuvLZDVTxrCNvitWcUyWEMXqai2LHVaH3NjgQLJuc7C",
  "key26": "2tSPYTcBm8YvZFeyDtTEBojQQVenAr5GinLv2D8A1cJhG4uc4VXpMH2XzAARkMiKPCUXiTkDjchsSEPX4FQxCt1S",
  "key27": "aggCRgGqQwTsj3trDogvnwCAi8ftRUjQbKqbzr2LwEZvDQZ3JyZ1q1vtWAaMoUKS4fc7Mpw7QrdxXjxgevjmros",
  "key28": "3c2ZmkuBrFFgnViApe67stWbXHx4p8J7dt6L5jZrds3KXLpEgyNJgct85VL2FN8G9rSjfYDNTkEA7xpDRUEEd8G2",
  "key29": "4xa4yKzwG61qKgra14RNxfnbrtyRoCE4ed2aLVx7u3NnunwMkbbVF4PiZN5Y2PMwxc1xF4Tinr5S5a1dhUZUhKE8",
  "key30": "594vWixfj5o1ZfdEagQrVeoMjFys3vHPxTWE5KHviauoyh1UFbN7dPbGyJuSkj5VZZRfbEtWyqA5XQeFuby2Kii8",
  "key31": "5DcKJci1Y8GdLGQmxrCJKJhTrKg3wEAsASduoXVyhKTPnQNMJt51wm6QCMRLcQwLHybGyJtPjNjuMBL7hgLUMJo2",
  "key32": "2vFd15YRxvhuj2XnX73UaJkErw92CoKtZ5gnsH9jf3AiwsnXDNjnmDbpPPrGDL98s4NScF9onXMz8kNo8NMWqS1J",
  "key33": "g64YWLopuVXqKsvUGYoVc6BaTUPcaim4FNnzrGG9umAmZjktTtsN89ApP8AKpaHrLZDVcok8BTQ3um2X3aWeD5d",
  "key34": "AJuFj76GWu19KqYM9txShzv11hB38AJuJv8yhs8hiXRAAVxpR1MtCaWZ1RbwmSoVDvLB372daAg8ee7VmTMwXJ8",
  "key35": "2uBS21NKQMfVoVPWpc8LEuvXKbaLA6mCGUQsKsseNH6LLfLQkQ4WX1Tr4V4s5ZEfAtRngE9LvSC9WHqkf9mt2r6B",
  "key36": "ArEgQgWNoxBQ97qHgMxv6GFHSdAV9iMDm9t3H96Twem1YjFWTCW6ikPAgMJjQoQ4zy72aHzeqsPd152Zrbfz8Me",
  "key37": "81J9ysGT2Xqbz7vwAW743cQ7zhDUjtqaHhjo3iWJzmwqAoNe6QjsEtKajaKLW7R4sbmsnBD84FJGAgjyQh5KPjq",
  "key38": "5EcHrzzyqUs6Go1uXrdxisT2ZthEZCyn4fcEH7axuWkpA9evPy9VYnKbZQnXCjAmUpouzeD2HAP3NfXUQ3DyW5qo",
  "key39": "4FkVFR9i3sy22wwiWW65h3cPoNEcSjdLFBakArB8pzYuTdnbEdWZ7rXk6UJNBBdVwC7phoiQj7UVRtciyFEEgbsc",
  "key40": "3nqu1kDuqciFgvJMd4rTCjA6PsQpaQ4C4wXYSe9nnfoudDT2UFbDNpHJoNpjC3yZTkXsvhXkB1bWqMjN4AaPUaP9",
  "key41": "57HL872a5QY6zqcyybRrBfpbE9PS7uocLi1HsWZGQXCSZrXFZWeYRXG9oQHZpqMXnYyEwRwgE5VU7PL5DbZgW1dM",
  "key42": "26Ncr7rK42AW2qMhfDouqTwzEwoGCdrZiGkRHFTVKfkdHsEGtddaUhzT4v8yvpg6KsVucfqyQLSMMzUEJbwqHBBo",
  "key43": "2jSsREyiwLEZ1dXCobseZjgV8qkLmCoZoJ6mKw8xH3fMWjqfPifoidtm9VRcChei4HeNNopn2KGnz6L8xec61Tjn",
  "key44": "2C5RyTHcMg6nfPyY8fXz2DjnhmRfSRUwV9xyUPAvobNVvw7GLjXbFHf2HLx1T1AZWPK64BVQ9QwXXiLDnTopv2Ds",
  "key45": "4BXU2tbDaFpzricCSiqQpYqKkEqxL1UQMdVGpEDyWBjK8vUaCxiVeT8tXkGiG4mRxY92Si6smMGxnwgtMoQBDjTY"
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
