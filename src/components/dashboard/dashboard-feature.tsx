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
    "21vHQEEoMwR6NEgjzfCuTSKciPHUyvoJTuvWiTy4GcYGxDu7GdFnEKN5A9QdMiESW4nZFcZzhftTjK8TmTRJrNmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4NBgTmt4JQJGrXZfYfxezgCg2aFQtupuvFCUcnzEdrUpSW26oBZzitVcYhH8dvM6uc8FYQ8hpVzuqhghX59tKj",
  "key1": "5LTnR1wiPDKZyAibyF2vtp9tASaeKcjvAwue3e1JdHbtD4hrC4ovRMb1UaT2Txm9tERFvKKPGscCoG2MWLV8k1QA",
  "key2": "2A2qoquDFCmgKXwJEgzcyuTuGMpaHhEjZ5K64J6VS2sKQLny3BSYuSSm86MHJ4BnLbLwzTaKXA3Qiu13sK1YVuqp",
  "key3": "gesV5sizz8G8mnkrCJmQbmFNyp4694q847RMPhweWzCuCMbwY5YSeDsVK9xq5yeDpjoLwkhb1RegjHMtVQ9FdPK",
  "key4": "3Kq9EcDn2B2t5pTinv7Y1z6xDahhyy3f4pBaGzF8ftz5n7TBjipQY6FjU4vMuHPqc47wsb7GAzNZ3cCDqoT4ciGc",
  "key5": "a6AyRRRRZ1uQtqySg8rXvjj8Zq8xdvMtuFjuhncLzzXQxV8i8JK9XGwt6S9U8jADs1mjEnLvxby8JbsNYxtA76d",
  "key6": "4xCjMDmve4qHHh67GniiVGpYAqrJN1fJrDfCNWfEX1CfhKWn5wnZG1P4UDGRr2gXDhx9mraFDbhfys2WbV3DVYuF",
  "key7": "5dxKVN3aKCtPTpBqbRByWgEPc7CBuj1UebHWXwMFNGZafoB7CPppkzuD1HrQtQCigmDd1X3MXmVRTmjwPDXMD8Ld",
  "key8": "3VocQfMukDkavjKkZtpJnnXGqp86fCni81TcUfEBQsqcDrpyJzJU7KuEuCKEsA2aL3Wn5wktLeLv9zFCbE7QUyCG",
  "key9": "3G4EgakgwvoFedwg46Nw1AJfUwHiNKuUNPqv6E1625LzrEDVtnC8B82Tmrebew1DC7cxxdp3wX2patcq659rVDBZ",
  "key10": "2b2uc21XUZHhqDzjpsWdmJQeRXZYjHFpCR2A6YtpkdqA7P5RqbyjBtK4MMjhHfhqkZUjQkcSRx3su3FdtsqKW4jx",
  "key11": "4sMP41hgjqTx8ssJaDgJTQSq3MyRoqsnD7ELRSP7usATwLFoNpGTW3rjHZuCxtByobkyuvHNbvVHC7yxebBydk8a",
  "key12": "4TDvJx2LhLQpd7x5x3mMSJj3fu39YYJD6ngVLAoNNPZg8cCCDj9k25E51oESdCEmnC4C4QUBQLLeLPCWRg1JTFyi",
  "key13": "99X26vLLVyn2EhmDuiwLQudFjDYiNySj5ZRtQdw52hpqqUH4UgWviowB5c4e65MJmuz6YZnzL86EXxbMh2oPhof",
  "key14": "5NxAWux1uUY3qsz1Lcz6QLLsgZMSCpWEFvNvWXYgQ6uNvhpgVchbcxssQGAMR8y79uk7Ud7WHrR115H8NF3YCCZQ",
  "key15": "cGHJ79GcLxzx2NH5im3oTCuN79axvXFwEWw7XGBATzcYk2uBqtz5NwzMg3S2RsePMN8MbSKLjkm5Lo4q8fdXU7o",
  "key16": "2cVVZdJtjf5hgDPNp8mQmpszfj3Btk6EE47MzdPAXLkrjjeJ2KCbm8TkVCkT1aJ7nz94xNyexCeuMJ8xYHiWWtjy",
  "key17": "963kMXkZgdEc33osvN8nsYutQUu54UiSgHCCBkLQSyx1Zzkc5s1iEdkm5weJpfw6HXQ5n13yjDVtkSBvC7bSpCN",
  "key18": "5NmrcuWoeHW2yHdVGtKuawx5CB4znHMcqKmzYqbaCxhYvXRa86szLRfuzXjsjGA6iFDmX4W2XYv1g5XchWQvEq38",
  "key19": "4HkY7okhKcCmzu5YV9bE3APyduo7PzxH36vbw3thU7bTxm4ZpTQFUoCMUfRuHhvZYy8T9adPAecKNaQfZBUhct62",
  "key20": "3Fm1deoLnF3VEn8wDz2EaLzSrodeb8gzbLpKon6oTSiBWfDQqspsrAS8PRVkfimTo2c3pSiApMWoQ7bGwDAahXhS",
  "key21": "2PMmSPTXovFbp2du6TMuZvpjRTGGsgH5FRY2nncXcWqRfPK2tnRGpS7aJrCY2GYEFZU5xxdyaTcwsrXVrgVzuvR2",
  "key22": "3QAzV5LK7oAvDyLbMLcBcf9zVZhgoW2BynjeLV4dt7VrFRLWRCAv4Bbv5ngPtdF5pHwMcKF256HpHWJDz9MDjc4K",
  "key23": "2cq2cFeJXPVpYbmhYdjhM6YQqftvGWaBhP7XEuMpKbNdASGiy9aFVWH45kB4sXs6dxUvcxvkkW2VgEKuXQaJzAD1",
  "key24": "27jrqWHAcC6L1MFErmLZg8EtWdZPGUgjZZrTpkwT7ioYGB5f343gAs5z12sE1WPe7VCHiaGftFebhTNppMPXShTe",
  "key25": "3fw74hTvmeRrPfMsuGGuTSPZ7WUMU53jBKnT7yY5ndqzYESy9i98hTYZKbsVPgVYQPo5bxbf6Y8btt3BkjRBdNoW",
  "key26": "t4Z3NBYDisbXMAvwUK7JvfFrWA6tnTvQbpxjEWHBGGZYyVdNM2tRE7exDXHgosBNsHrqwjWu5PjoE2x15faTpd7",
  "key27": "5yPqczLqi6R4nCXub8fdT84MvcWoqBB2rSJ59KPgBRCnYpwFoAXLfbzqH3mBitN6arAyVjXRZ7xRnwrLLCjr4ddj",
  "key28": "2x8onFuSgiAqAfru3z8br85h7CtBsVNy9mPbg3x6Y1smP69X58FwKyt4fXv4CtfGFPvD8zbdWjj3TousjwxTHesp",
  "key29": "3xupfwM6fcYJUsgJc918VNG6dyAr7HQsg922iDR38esMA6aWJKp2qph6M3BVBUnsKfzBaMwkS2c8k7UJCzQPfcF",
  "key30": "5LVqRGSZp1vpVzVFmVZASX2yioFd6bXjm6TXVwAj1DvQvCJf28NnKfUuBqS9e9Fc2skyWLkinb3JkXpxeokXjBwm",
  "key31": "5rDmzXS6SQZSgBYciEcFH3ayz5oyrh8pEVK1JZgwb1goHb9j3oPAefrdmuWPH6ksirRoRxjVEBng8DCQHWJMdwDd",
  "key32": "5rNS5f3uDSCj6jm5qa4fpxiUcN2yHXusckA1DnCAGx6vK1t7p8Df7SJi97Zv8GETQAAmb8TbbDyEDDXUTDsrWM7h",
  "key33": "5sFAzKCZukxQR6kFw6A5Bz2F3KRD1TG5AdC9Laswtk5BgqD1ZHDi6oLU8cpswyiS864iSfzQoodE4w2jvBavkMMX",
  "key34": "3LXgXdYEVz5dQYCA7WaQBwJGLAyiHq2LoUZDoESoXJmWTKmBxr9hCRFrFryWeZW2nKXFASaqFraTjCmur3qB4NhP",
  "key35": "5dAgYY76iviSJpFfsbt19EdUkCz86Yvwq5BdMr2yWhAUEQafd7XAy6UdSSiPxiy9zVgMAXkc7s9zaszXG4nDiLar",
  "key36": "5VzBajHHtvs4wPr4a6A4H9hKk72p7CYQsjJMGLAE5XfwMiBWwZN4UhXzo4NwmLxtvh5zskeh8j1CYeRFf6NEoawk"
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
