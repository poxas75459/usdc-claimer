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
    "2MVsT2W2tpMK4RfKR4vmTFhP9NaE3bmwf9iZWVsvTgBii9bceZrLq4PJQKjfDfSuMSvw96X4wiZeNguWPUvY4CAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21x7Jjsv9peXc4trD77y9DxA7Sr1BG945bzGHGNMZdSZNrvCyF9KY9oaRJQK2QSJqNicBXcCywkjDV1Xa7kqsdCu",
  "key1": "BDqh1GVqGYgbwLdrsYtdizpRXp5SjByeDxbJ2dfnGDBZgKsQtn6Y44vHu4GDt26U2VycqZAiCAcBCdcgkt8dsWa",
  "key2": "2FTGatkRukMoWoUEqTdpdYoQUdcymSLLthcjUeZPmzqxEsrdrrauiixdiW1ZeBF3AFomZfnsoMoyNn9Nm7314cpw",
  "key3": "4mu6MQEcKgwaSHHX6TKXfiW42tPpgvNXt8SPtme7HjkEdWGdR8TcLq66b33Uuv5ciVHHo2LCArajMHQjqiMvfvBS",
  "key4": "5RusEyrxFxqh2NgbtpBC3h3s8JyTp2FcJXbW3fDJ4CnzS638UCyxEr1aXqYagKy2xDWEpVhffKFR1AsPUdvXGGsy",
  "key5": "2wxtbnhkBtgSVgC3F9xNrKtdoAFhbFBxY9jYvyxr9ri2xUbebhHnYwcxsWCb7o4rVgYrPJyjLR2n7Ho9kpvZuGon",
  "key6": "mw9rurzEBRRDyf7RhQ8MzRtC2ovHcdo1sR9yB4zgxnzo3Kj5pDuauLxdgkCRcat2T5LonkH4M8YKQvfinXPsELx",
  "key7": "3XA4HrzBTJoTShw18Y17s3Pj6umunASYDwve9aKQM1tYPLPTbkmvZifZEWKENMbJqxb53RgEHjMYmdBPi19YTMnD",
  "key8": "52vXMy5f5gYEVXCw1n3vP15y4vig4hPagfZjCUbjyMs5BcU54ZA3YfzDSaBKtLDGXEZQRpUivLiMBrnxb55WoTHb",
  "key9": "3NMprndJincDKXriuqt6LBG6sa6x7VnkDMFa4UbK9B7RAuyBQKZR4p81xGoFQYpyBRNice26WtUUF7dtFjzsNusa",
  "key10": "2HYHx9hbBifB4gv9GD8N5TdPUjdo6PxDWo32Rj7aJGzcDZ59NHW3dgBS4gzba2FJSyX8bQnBn1KWHFu3xDMZ9Mj8",
  "key11": "ZP2TN7m4FSZbi1grTegv85LakeXGeXiNP8kk7MdWgw3JxKATqNxwuX3wyuNUiJhdYevYKSZFtzgX5Br7xkRAAoK",
  "key12": "3sukPpeSryfLf9k6jF6aK8k8spMqqac3GcPxA5xPJHKdCPTm2pGWFD6kZWqWGwYgHJAWbAMnJJFC3UgfUBHha4R5",
  "key13": "27yC6qxZsqibz8rbk19ZUqwbL9YNetmvzWeZHkPRMkZvwmg3MBXJmQZzuXfqzHmnvP3n7ZdYQYEDroN7SPar9Meg",
  "key14": "571NzabeVNANnhfacviiEWz5W1QCqtT7vuiLUtfix2tNa8KUYJ2ciqMuxn2AUjeiF6jxtFGGbyxXxCc7bQAmxRZs",
  "key15": "5ii8cCsBguUbsRz2vNdcfBxWMxzbfu4B7f5zJSuGHiP7tZ1j44A1583WRBYVpgebfudoSYegbCWL5xdRyVhk12e6",
  "key16": "jQnuWSZbU7Rge9qzRNx1TDUYdpg7insntNdtajGx2DeHaDscmbp1dKBPUjxcbEv2YYgpnyfAJX2gjkWhefj9PPr",
  "key17": "5joyR5H7pjFacBVjpUyrgC7DkqPpko3nAABNb1FMJcpiifKb6CL4howHhQ7ANyJNtefXEGZ9hXCtFexmsyLpeCY",
  "key18": "371YbnFLkL2x17QuzYgLKGu2kvr4jAM7JSEhNjSsquoRHB6prBFvzf8fM7qQLjjNMYeXrL92VhnmDVcF7yphWTvT",
  "key19": "3mF6U3TbowBnoV9u7v4NoXMKsDfQ1okQs1jMToXFrtyHCskkzRQzAyUEjX4ACanVPiYMRk8FS5vr4pS1rCdUeCXR",
  "key20": "5o33wkd6HgjdrKorGKnQorRzGXDoizTpnshK26YMEJYu6sdn49iWAuvNrFGD3XYCs1ezvs5imjQHhkFyeWvG7HWm",
  "key21": "377sn2JB3vTLAPhtcRiToXodSKCS31ixLdoFaEsSnQC4mKiAeyfpfzcB6yjM2DtiLtiqFDDTxjVx1rfP5AdfQ27v",
  "key22": "3vtwdxZT4q2aHkKyjYGd1c2RtA4GaD11ESPFaDQLfkcDm8P8SvVp34ZVN7zCk4FwmQjw34JAj5RNdjpyHNUZ3yJw",
  "key23": "2qEFcUDQbzrnNxr12NCuxgGzvidPWiLw58zCdEHZ147WrX8xAAXLXXs63rNPkZrnst66Wu3ha6M9Jb9xgGwRKq5z",
  "key24": "5cErEpkdWtEFerKTu47fgoaDx9CGPwKF5c2mwgVpFXQraw81e2XLVTcwtbMd4uZbdPdywNaPWTyF72oEh4nePKiH",
  "key25": "3NuqizdjK6u4CZzVTMZMeT6wf7CwgFxxVU2g8w8FbGDuWJju7wPJh2sauVGwqw9niMvuvAXDKrgdWQJhEso8YTPa",
  "key26": "4eyc281vHALk4VaDxZ7Lwc7dcttcD7ECRWSrDTxYqsVBHPS1MG8shrYNULeaHybnKxkKGfpj9uYya9BGv56JUZ9B",
  "key27": "3hSF8FZHw1ofuc9ip9rHd7sQE6BhksL4DgAhxBA9bM9y7uVUfCEZ5Knd3GoKMpkX5Vv3RMUCpMGFzY5gYrb6WfrA",
  "key28": "2U6C58L6N93zShftLm9ci3Kp56SajkhQz19vnp8p3y1gWWjcuZKGkN1JjWZGbtJPjcH3xWQMcfyjbEcGzpb2PDHJ",
  "key29": "21LWZ2tMYU9RB47nx7GNNvkgHqHeWdZRM2VNY198eAHTVxqKyDrLDMkqkFx3GthkofE4RC36DMSabuifCKbBmbEu",
  "key30": "3RfDjMArYk23uPcNALJArrN4CUbfNgoKbcydoFztbu5d81GoKStPD4vR5ZL7EBEzTDcvXvU95nhknEUWZ8EbqbQd",
  "key31": "5dMy9yqMZCEi4HfVVMuU1veAkqLytGFQAhvhA8Sn83m4nU3MViAonjzhaKF4RvpapYzTxactVkNVcJuE5o4GcQao",
  "key32": "7rVzYdZfKnCt4KooqsrtAzaieyYA9LQxuMnunqUMZdhJRpojhSS62rgvZgd9jWGr92EQiVsja4FDVaPu74KGDHg",
  "key33": "5PrgZDRHMkSNSfQFnr6BdLQtaMKK4GNQZ1AHLFtLR2f25pgSBGwL215jtjzq3jqH1ixPXugvdoqcbSHDssezUKZc",
  "key34": "tbZoYkeZJiwCok22k8KTHMp2XqQUUvF767qyQsUZMo57PMtm5Gcaihe1TLFu43KFhiYY7V87FHf4EM3VNBtuvt1",
  "key35": "Vw8verstghY57cTCkZAJASAsf4unDjPT1bVc8GVEPvvFxV24Zp51LbLa6QtG63nCB5YCpTfdtQAi9ZsMifkQqgW",
  "key36": "2Lx21HjsHZhQD5pgg3qprE1uvzRQk71kNqX2uWLHH3FiHiSCi59V8r2nHn8mrfm25AjNnYr4tqLU26bXREEFwmwX",
  "key37": "4MYbX7VWi8kapAxkwB3eC5SJMDiw5obx65sioyEcEt5a91k1Bj7aGCQAFbEZs15ntJDq4jMzx5j6tDnVfCQu5BTn",
  "key38": "6pBeb5zifJfuMzJ13yNSdSVgYaS2qf4mcrSsQtquEh7otwAYvPDg8Kv2YhUBRLWRZDC1EnHGFYz3qPBjuAzzXVJ",
  "key39": "hQyHnYHBMQfSoBfaEugNBBAEQdYEPg8dYKNyBymt7fGEUjpPCi81FbpFRVPYfheFpZMPPhDFxEoy9k6Wco2eTnq",
  "key40": "5VNUL89pXMwH2ixZjVhtLXd81YtxxRf36r1iKmprCJHyEWkzn8Hx1PjK3jhCGronEqmH6z4RFo9HEpqvUYTrqguv",
  "key41": "2gcxywo6PTdmhqt9TXjJastGtjvCqqNa8zUxVLtpNdJmbvLFVJVHHkDXGbKUeW6VtgfKFhiws2yQ1EUfyJdYNRqc"
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
