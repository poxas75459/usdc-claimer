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
    "41BEH45ZG6Yt8v3kpgcJXxvpwjBVowuZYoP3h5Y78gsGQYtCGW73hEX9mkEs8Hn9Ne9MLrMU4cMKeLTKavAGLXER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QB4vHvjt2JmW55p9MmRgkQybKCCY6MaAYvJp4SZH7kEsoTG6K3Qbse7qdGctS9GUyb61KPsVfUxzVuXMMwbuJtA",
  "key1": "3hK3jq37FFtRV8J1CVgFgZM6JF3C6mBGdPocAkUepo57LBBYds8PbgxFNGYiHWRmxPG7nDiVz5UG9UDgxHomLPEp",
  "key2": "hWqBftAMyLGAAhV6dG6fjY5pPHwcJHMRnZ8XJXgzxuDXrox9vyLKLzMfq7vAuR7tofHYiURvvZSERTRw37eWVhg",
  "key3": "m492M3iTjwumtyiFwt8NeMWQnQ3ek36ncX1ygrj6yHn3kkdSnzJzLeJFyVuSvaheaRjSgpJbMeZsEa1mAsktNG5",
  "key4": "5duuefPNAFDYzcaH91UcDa4b1gopjHW1hK3g59GNEPNXYFZq5JqgmQerpCJ3449qibs9kcoKkpUzZ6a1uz6zieLf",
  "key5": "5rboKnabqknLpjr2axmCqizC91aK6HMczu8d5x7AP8uSXeQyWd4tN7QmURLVypKM2yi4qBUjAvAU3WbUSeZGYrkB",
  "key6": "4NwmgD2uoJRW4TaeYzgjXdvD4ftMEyzTYroqqkXnQpEM35TnMukyGLRN1quSM6ujEcuWAmxfA2swbv3AwQgY1VjL",
  "key7": "2PwxKpZPU3GVoraHBbSq9o9TShRrPevzDoYogMgCSTtR26MEMSqeNyfgWECY3kwvDoepZ1v8Gt6eFHw4q6KCgu2L",
  "key8": "2YrEwet4xyPbTP6EcsaRNr7gtmdvg8sGBj8wF8ABELvZn9UWCtT3eAMQMuoRNSHArN4w9wKA2FaTWoth8KY8vErV",
  "key9": "4ptdamHmAfuEFvoKMLFHaxNW3EEbGPMBm8BUujpQPUHf7sHfGJhsD61jVQovTFBdzCnFmhtPYnXLcvWjBZPEWErt",
  "key10": "3wrLp5bhAQpauiqQbbP9j6DUWHgwWYR9zFqYBwPrKJPTKDoiUHdLqX2GeJmVbSs9fBqVx6w6GoFzkByGRF4iYzCR",
  "key11": "56QWKeM2SYTq3rbecx2Hfs8n1mECxBJa52hL8SsgQxXKoJBnMaeLx2LzFvACuBwfdjFDFugjAUU8KJomYRMxJ1vS",
  "key12": "2Ag52MTKVzaiwrg9b8cLsLZBKGJSXjPT8R6uSd31Fbn5J8tGCSz8ZA7YBHcHeMYAYWzWHg83KzzHMoLBFboXzVEF",
  "key13": "tP5i2ZSCxgvLciG81MYPMgCAje9ACRgrRBVVfhvbCTCdSY4d4ygmSv5but64M4aoCjDA34wxhPhEy1iHBuBEAZU",
  "key14": "4zUbdC9ye9VVPfz2isKNdHo5CWEdSE2KwHFDwAYHYSPKaDXZuWa9haUHzqPVShETJCbHGY17qZEeEkLHb1v9S5ET",
  "key15": "28jxijSuYd8RDFB5FEbLdbhLtyqMX8tok81ziaK3RrJiYZbuRsi9BW31pnUKPKUe6gR8upYCSzZAjGVTqBn8PJyC",
  "key16": "5eZgmTYYKLsMdXQCojRz974g5UkFDDw8yZSrYR1ZtmFF5tZzbYHrW362w9Kys8sxSfwHBAN8vBS9aB8zStoT9kQG",
  "key17": "2c41NtanTVgUouY4wqKKUz2N3U11ouMVixw4vHBPcrrULgseHk1uqumEE3foXTaSP2McfbgZGLAodV218WHbUDv4",
  "key18": "Qj5wdedzpQWYuQj4obDboWVt1u7HvjZHtAEzx1w78dEaafFP4hhWTgZka2rD3qXmgM6xcRmzA5SoDzLweyKvQ5w",
  "key19": "3QfpDBbv2eMHe57RxvMPkX7NueGK7UfYn8tRekmEKnCiSZVvgbcQheSdcaJzF7PAFbuPqNstg7Xgbi4bhgZ1YD1m",
  "key20": "YZ4xLYpKHrzPpew9DQeNWwQ51ovgEWLqvzEZ9QbUm2ztoz4F2zjzi7Cx9CyGUJHWj9ymkMgDSg8h8pLrR8bKnvC",
  "key21": "2ivjDFqxKNnB5Aa9xUPVCoRmkwqJvpdQGjAJ9fuSrdMpbpXof2UmW7Gwpnm841b3HpWVGSbx1rJGt3WESkPGorFZ",
  "key22": "64D8Lq6qDqsNeZqeeNJaDaoNycGxF9Uczs6sUD5RE65bTWyQJcktS1jFvTpYFrEdutkW41qb3i5ok65vjTnhBTuD",
  "key23": "2SdJgmQb8sFjARESwvRBN2YdPuYGXeMjvpfneNCLMQgDDgdSj7g3cL2PGYkmJPq3GiWZpoHiF1k5UxVMHdGPjb5A",
  "key24": "5fGB26f5goVM21y6gdrhSfHNdmcjbr7KNrKd9CGpMyJinwbSUCUavEtxCs6Nbuu2R5vaxEZh52rBG3mCJcxkRb7A",
  "key25": "4TB8chsuz9L2QytjGtzoH2BU5rWLbwaxAfjwmBg8udJonmXuTWA1sWDSY8hf72pFR5wGsHwP1sSs2PynGmCJP9Nn",
  "key26": "3m2L2DmatRpQkWEaiakLXuGQguS9A3g3KdJ7nBwfCkZVoY4pMCqBDAwgude5hEkEwKK7wDxGtNCxxqpcaemGorTS",
  "key27": "64jBb4SdCzZR4y94WZzy9rvjePL6fyJVTMVyUPMdtPXnTWqLhuEbyPM4RwyJW2XcNLqGHbehA4e9PmjbqPkZUrmq",
  "key28": "3wdBPp6uFjNPwHYc8fmUeQk6ibWWa8pHzzq5sM3F7qm4rDXFaRpbQBcGB7i96sfWKG8K9nvUiBgt73WdjntaUiFs",
  "key29": "2RjR1bhrGGNhqSx4N866kU97i8tjNwQdR3ZQacvjADiGSVMknCwkXXrrqEbrAfYJmcfYh9c6ZncRQwWJEBCT9AgB",
  "key30": "26ma4M858pEwnpMf1pkDRfS3idUQkkK1aswwaPat2t83KVzP1ZdtEjU41NV674Uy2woj8QGLt5DXp61UWpeQ1PFM",
  "key31": "3XY2YRL7cfS6kTxy8o2KRmHCQX1xbASEcWt5oBb8uShRHHqWiE6L1BseKqoHFgpfFLKHih8KzWoa1M3NdnPXU9Lq",
  "key32": "8EJS7G7bLLdvbearbenZZXtFB3N1FLXoEMCrBGTKSqk1Fxx5nojs2UXdxFkckt2DWZDe4DGJypRW4JUjp3S9DbD",
  "key33": "31so4mA3VjyjauoDXXZTPZfhEJfMdAgzXKwjApUTCbze9BAALnvyaAjs4Ke5rfVds3yMoWcbNw7vnStEKZXfheij",
  "key34": "4mUkfcCT5P1KiacAy4jLhNizhag3rFqSf1ZBv8sBrZyX9s7msUiBzkV3KQRZmwyip5eqrb7ckCMs2fKBCiyQghXL",
  "key35": "2SJBXdxJkkRyPkSw94gUJGPQtYstzB6nj5bAfWhMafBK51RZhmovuuMWBWf9ezaQqfkbTZ3Q8qjiR8U2EqwpTTPa"
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
