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
    "2UXenQpUmcmmVkDQA898str8HyRfyhyqwTtHdJ4MFikgmjLyDU24Mpr95one3nSuybuLjm5HJUDz94chfqyrYkvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WRfi3SfZ9RreWoFfLeSSduXFhUiJpCt6oCMVxWvob7cqMaXYneNBTMsW9UpZYe6MgVo6hWCnjYQUd4jPepHzmCy",
  "key1": "66XSdM1J7JPFEBzuez9nQ2R6d5Q27ADU7PMozShjhA9A3sZg9W8iov6YsVTNY41Kv3vWfuGa9boDvNcb1nDjL4XH",
  "key2": "KsJXStHahis8AC4Ekn6iBT27wyMGi7TxvwEKfUXccTaNeu19oTtoTfpztbNoy9kCkr5GwWyJjvRP1XbA6mwNgKH",
  "key3": "UYVZjS88GYUJX4Afd3eApSfomm8AP15EymCjSMcffgHtD3gfDf6DshzLkXuEnCjqCLcB65MFCiexWcM1qYFcUqs",
  "key4": "47uWe82Lp5UgBkpi13FUjTmgjbhTh121jrp6wsSW6JfhVFuQxAasQxG7RMH9z5qQHwg2Tnx6ggWuAHiRW6K65QS3",
  "key5": "2QRykmYD2TZAECYeeVUP3x3KUeFYmxGyrHovCWZQGvnr51ArTJCELphpwmmLZgD2FeLAyxN4ZdTHVcWDjwmfjRcQ",
  "key6": "2v2H15ZiDXW4ZeGy5QFJuXNpk5RfWe7KKVKMYecRGUsoZYz3ryByZMuuiRLat35tseP4wyM46qXMWFA8Fvn9bE2Z",
  "key7": "39DeGF8gK6RmANey2g4utsfgiTH81p6W5DvQ6Lui5BRaENgvT8Fep4NaV7rLNJJigPdDcFzxsbGHhip5XPEaoEWk",
  "key8": "5qXVNdeGm3XE5SvLRPcqPMnzsYyv8nB3EMVPqDPn5BYzSxvjR4dSp7o4mqfYUthAhQp7bMp77y19ZHYvDUxVwWoe",
  "key9": "3wWrhuaBosyWhaoDd9TjNKd8ziXsSEKA6XLrwr87UuWKev2WWXePBwKFNw5yHm5YRQyfPspnCA7xDgBJgdJeESpe",
  "key10": "22HME7qZxQAPYFQ3RBTixVTazvXPwHWo7mHwonugYmwzqpui8fZ6wkTEz2GhPcPx1GPsVCHAZd3XrjatFQJmLBcV",
  "key11": "z1EgdKDgqpCgXHqCgXCK7a7HZdT2EB77TUAt9FsgqQtmVN2mKvwroSHS6niNNokAAwiXc6cD8819YM28DBTTTM3",
  "key12": "5XQMMmJZ4AG2ri83aNxFpHc73aNShiTXtFWmaMUhVmEAc6E4irdyNDCFTbihYspCp5WWRyd3SshdNbmTtCaQPGLb",
  "key13": "5v1H8LV6u2PHu2fBsWTceVtmsFuR91P9sGkazx1aTCn7215N6ai9vziiNcoy7BEXenUwhgw5wYThUTnsZKgCEuTp",
  "key14": "32vDzMt1tPtA5xmVqz9WWHRiFkb1UMbcqmda8h77gHxbvt1roaN4BjfWvUbGbWJjMosFGMfXr6mbqA3NsE4HMsKg",
  "key15": "4HJcN492ofDoYGoUqSnBuNZTViEvBLP15wxQkPeLtcPMMGypQ4v9th8oV8KExosM1nYqCX3XNqriGZ2dcTNSZZpD",
  "key16": "2NRPD5TGw2Sr1wHnWgGnDicQfwNTRNn45PgHgJvjsHLTXDtip6vSSmuo5QuGWdouWHrejgTTra1ZEqm1sujt8Yf2",
  "key17": "v3FaAejmg9VDkGTFLpiV5mRkTYNgiDQWz9RLfK84NXJrdZBy1NkUHMD1xcAXhC7gCBC98g61JFTQcpFLzVmmrqF",
  "key18": "T9Y4hiPEkg1EwmF1972CfwHSZpkY6jR1WeE6sLj7Y4atBykDsuWkigxFrPnaEaErCUtpURhxvvGLor5aM9UN8yR",
  "key19": "217sPWJmGkWvpGkWw6QcGWz54x6foCWJuTAz8LAB5g5K15DoTbytZfe5aKbtJ7Qt1wA3eRdXukzYFk4TqErYYvjo",
  "key20": "36mkTjDteKd5s2Ln3dik4hS8zQ4NqNcDTcTfYVdBYgC5Pshg4rfkw3miLxECPAxv4isbW9aj3rtMRSqkYNuPW1vN",
  "key21": "31xgTVx2j1GpGQZro4oTZM2tM9ST63KKyJvphN1zPDsw9V239upucBSCuWCkYfi99qU9UTH8o8GpH4evM1BNPtwA",
  "key22": "3dLubrus7PCvmd3s7m9Ba6dVrA3kors3dytcidQwB3qWxGvnYNjd6vFHpBYwYxf23UbU9sPhpryRpnokYsR4gzGy",
  "key23": "4ojZNBmbbpBZVQvmp5kKARgccWaWJCSmb93SmEMe97dz7UpG4dhSKakEbzhiR1fEN2RLH4fUSBpxnKQKZBNY2zrj",
  "key24": "648NULh5KoRjcvzDoVcVJS1zUQi1MPcnCSqXBwuvHWkoFyauNyf4Z2KeCPu7tszwRWTRf1DESzpW6truVJ2Yiyir",
  "key25": "2AHUmnfbmR8aquCM2LZ1dGeNNkbVNprmuk6T8ihjyoNJzxkxfGmx8naYXqX9XB8h2Zf8WANmzwDsB3AvUNuhaBu",
  "key26": "4jbRgJXFiWAhBj9FTg4Kd3nwKFJwDHbq6E8Huws6RfizrYPLrQuVqZs2dkZbjMzscSFFaLgcF2YjeMg5pPKLHVUa",
  "key27": "4hEVToA2oYch5HhjrAxNjhUzefe4xa1RHiRHS8YyTAsy47bAigzFn7xeBJLJ5yNRtuSAB1GVkQV6gKR316Aydeo3",
  "key28": "4epJjqDZf8RNNbwgtNWbW25Z5cmdHP7MvautgXaszoj3MWcY5ar8xknd5WPnFyjnQUt56UBSohaN4aCotY9mgQ7A",
  "key29": "4snPZHJCB69xDhqtSojjAptYEcMUNKrkEKHpDDJepdmQp75ed86mZP4jirgHn64VtfFXVsM4ZCKtSrkBuqyrXFkJ",
  "key30": "23jaxjbFXjup42epN8WsaAkk4SEbx5YzansV3GYFeAQhMt1qSfGZ6oA6Ny1n7w4QpvKBqUmCF8B4PkKkkmhazPgN",
  "key31": "2uoxLkh4RL2cYAqdRowZwQH6MMv9Xj4rDdnwn3dpXYS5qmKENyo3znRxabiJ7ZvfjZ6UPGxco93oe6qLoy8WE8rG",
  "key32": "45dWtUCR8jdjVaYPVbtg71yYQ2tPreWhcBGhqo9DuP8hpSzLAwygXFv4MpknfRLyJ4dGVVEbPJ92PwGoiEKmKe5a",
  "key33": "33eEsRxFk6CpxT387mZQTUo6nZFE5uLFbYm1CbgGE1EcHkGyYyNC1MTKQWYYPQRe3PBUidXty4e2H3hE5MLu2nWp",
  "key34": "3jTuMDUaktJyzikpJwgd5418sT8pdtMBfPjJ4VYHcCsGHzxJ2eGhoXAiEgPF84gapwDmjDcDjNt26mPAqk4fAqmT",
  "key35": "2u1B1SKgoiGPzL3eSL9TngEcRMxbUt8VL8sFSSb89rv8jQJxdxQfdVjgbSTshKA59AoTXnyfZ7D9bWyNuKyQsDk7",
  "key36": "2W6QSNaTLv9RChiPmkr1GXQ7VhgPCQ7d3QvJT8d3J9WLBnZYkt9k9bQKa9uvjNfLdd5Es5pNDjuur52zrvxUfF9h",
  "key37": "3J3AaprhHH6mKMTiS7zjahNK9wcTAbVqNdLc7mAfkqLiU3oJ2MTj13VZnYof3yYTVQXYbfHz6SrU2JfdxrN1HW3o",
  "key38": "D3rCDucXtVQBX7fCYMnXcVnnCtRTqjpS4x8gayPyWprzoib67epCwRVeeisHBACcCJn3kNDy6oyiBRkeygQJPsK",
  "key39": "2YVpjmwXfjuyKYnoNzc9P6xWXCGSYjEDKfuLoPyg2SGB1txRqcfE62dsGsXKpzS6VRY57BqurBs7KnGsL6tYhLVy",
  "key40": "3wpZcVtkpKSNNhC2chx8HVReRQhneg7NaiTFdQzFf1EMVNYPAFG64ewGqcchW4c4pikWfiMHVJTcFGj36bmMWA9s",
  "key41": "5WN5pSfT4x3nNbTMjJum94BoaUs6AVkhhrFWpaVsn69CDg9ZCq64NUcPgHazMC3d1BA4FPkfiHfSaxmiuU59xaa",
  "key42": "2ZJBLM2bHJUN7LiUSDi1mLcYS1qWu3RL9X3eRcyw67S2cMRCym1quQ3ZPZhA7utLvwidvycBzyqi8o8x3XUjY2mz",
  "key43": "yz9wUypvoTAHHqu2L1K9hK2rKgJoX8Us1BZA11ywFn9j39EBxScT7PsunXmFDjyq4BanJXeEqSLz3Ho5bEBnWUH"
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
