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
    "3rTbpj89sgczd63cuEA2VXKWqMZfSUZFpHb2ZYFZgeyWqPys3T5PKq1xTNKFfiEHFFodMAMRJcsjcnTh1h3p7ZCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53UmLLL9KZSMTzk7E3CxfaM3v4LjczDypPzCzCprrh5uQoDdnz6jrFU5hDF6F17Dz6NrtnNy6ayJkw6n9V3Sg3Vm",
  "key1": "5HzA5BZkVNLaiTK4f84khg4gi82JiKwzqN9M67wPwEBo5k7LnviG1dGn2h5kUXwfSmm3fWmGnLrcbCyB8dhZCYfn",
  "key2": "4GGcLFzwBqnXUADmxisxMzYb85FcLBZCPgdTTn6Ho7td1e2nAh4gSxcpAfyzjmuXSv4is1mkjBoTHsP1ou4mzvqH",
  "key3": "4RKMUUEEQkPdM2YPGQ7LJEymzxdLTDzafMwXT1L4nF549Ka2992rCJCmWyuNG9En1dVAzf9zySVheiKLankEfJjj",
  "key4": "66BmVXwxeHZDSU3psFiyKt5zKekUHfrcNcJRDN2jAixorpWCHnSr4SgJGi3epnWihrs9jXzVsYyGrPwjiVm8WQgJ",
  "key5": "5pLGvmW8vYTy8gS3b6oJTDsUiE4zizYN4yng5DtrpkrWXvaftquCw8rEBZszJkHPVo4p5HcDPYZrH8RvHg6ioegs",
  "key6": "9U1YdgQBTYXzcwQZhT4p6eQfa8cjnCsv34nrpCwFKCiwd3i95uB2b3LYX7V7pQsjfwp5QozB31YjBEvKd83Lu5p",
  "key7": "46UcVpVdR42kxVoJ3xSeD2YyJcMAYoQ4dWaPkBw7CnNeSPr2qVjJVRENuj6NLd4GLGnmp7GefMSoQhKRFFF7K3TZ",
  "key8": "4v4isMTZ7pYpV8ku5hyV4CAKjxrC1uN1TqRTQHeZQH8xAigCY8ZPfqPPVstd8bNnkMKjHXkZF2ib3sk16zRRAhCm",
  "key9": "3xGyo6eP6qGwdWUUuioEgSrMvwsQpSJvSjFZoFzYxQUTZhBVPexcta67CLBTN6ui9k8UHfLFQoS2QB8fR4cPcjLS",
  "key10": "4waJLGaaSYFSiBqaJHoa16okpXCJPjbTgbVW1H3jqHZdB5f3YxyrVKGiQajcbnDM5odREuQmZxitgw8AQJBn7xx7",
  "key11": "5THS4J16ChsQxHzSDhcLoFkJBp1vk5qqy4h8J7uahK32KdJWbihiVZF1xJazXHnn5sjggkAq8cGpVKSXQgs7Fqeo",
  "key12": "2k7M9ZHy3FVJVgKTys6iQDp3HgD6SYLVbXyuuW1xZWtecRdQkpyLnBEwS2mG8L8H6sSW2NL9VqnjFy8CCE2KAoho",
  "key13": "5eLsMHGMWZh68kLsWTffxZs66LCEVw9ptq9aeM3SmmdoWkFNAjWzfq99EnQVP5cLnMoQg4vUynMLMLMBt81ZVVDX",
  "key14": "4vKEKKataVzCqv4VVDRfdZy5ENs3MGXwb7zNQ14CXojXPy3eNJikbBtQ6nvcbPrwFZVwwD9s6mzLobEX986FNu7u",
  "key15": "5mQ9qe55qrMvFkcMeDAuQaUWY4BoUPBgHZTN6TxrK4m3V9GdxwK5rYRwZn8UfXPXZasSUf1kqsiTL6Ec5MDhoD3g",
  "key16": "2oe1cGYLfvfuwHeKYLMBR2QMFuo1Pwwfj6FbKjXG8GU8B6XjzGvhUXt8Ym4sFfnZWa9jbSbHWoXDR7MBysmnkcme",
  "key17": "3htvKpprEo3hF9vAvVURJXnfDmnjhBoojWtnnmbouzovysn8cksDiwbbnuAaCezdVTZmtDDouXGEiGsvuo2yockN",
  "key18": "P9pdeLM3KGnAyR6yFdYBzJicapcDewTnDZ63DKMaqZ4LpmETTdccab2JYkpwqUEiCiPsqFZPrsNonLMByrKHods",
  "key19": "5YGqPShU1CtuR4RD9Lm7MCbPRH4ighJuTZPV8NF6zkqqD1hVTgsPdhtDQhH9Rs5E3xkKiz918eDM61qcmW6gqqqK",
  "key20": "2wQDtHXp4t4ntenQhTmJACTbM83RX6TJCVujW5GmPGuH8ac1uwNHUMrJasCaasjBhfTMLEe35CggUGWNDtsHDhDu",
  "key21": "2KsLiG6wauYuwUKaEFUpNECk7pTuiwF9CmDsasm4biHAzs9zYsw5cYfnyfDMtpUP5TiParHmv99RRhdiZUtJvR98",
  "key22": "4w6YcqvjsQx6NpNm7SnDU9yJ9enckhXmsXdNL8UQHfj5SmmVTXtmA98qppDnv7v58jRHHHvLuaYQdAse4ERwtaiC",
  "key23": "28a5n9d3FW93TQRnpv8tr6R1Q5NdBmfSETopmxBskjbJkfdvAUzF7kAYgWRZuCZaN1va1VmeE95SUQXk3Lsb4FqT",
  "key24": "5arDnqFQFaATy99zQHoR9sm2Y83D7AG7TpaGegJHrdQLqWr29LwrQ1mgS9mEX3fPMoGKBs1ZkeoQLQvAnQbe1tXS",
  "key25": "UU7cJQqZvYS29ZuBHNrJ9uykXWqQrVs2y4VsmPHSmExk6gyKZUE2JQGvL1W4HweDtnGtajEqNY4TXyTUEsAnpqy",
  "key26": "5oc8aF4EbgEbdy6pRKae887W2AZiuf6RgrdGsui3sZxfEE6kdCm3LHkqGyH9pqzwNDVCjaKPh8HkynLTRvXfWaW9",
  "key27": "54wJzruBPaAb5gYPcCaLRpXv6CFrZkBqZ68aDZNCwUzKZZDmjLRkWWMmkwdx874s7YN8d2mGUYdmq21QvTfHzg9r",
  "key28": "K27NJ2DWAj6AmcZKY9rDK397m3jQhd8yFvSBfskafHPBfcNkzYrmFnGuGgi2Dne1kzeHbnZQq9cNVCFFZhbUuzd",
  "key29": "41EpiJ6tD6MzMAKiDgNMVMpMnNHdhaAGjs5TsLBp1XePqVk1pbEEHXfiMfkifEpMQYZhJWcVQu1wUnz5o2iDoCXR",
  "key30": "XVATJcXPrP4EWaA48ZczxuSJujDZ7T9rJKhDpwMJABAWyRL9Qfk8H6p2ifw25L3dh667AMqguHrkQ7K4Nx2dfJr",
  "key31": "5NahVCvodohkTX5zeJKNxmF8RYVff5pzBBs9icjsj4HvXuVQvGC6uGU9Ya2nd1MKSY4vL48LEfrWToxeHGZzqVf4",
  "key32": "LaNNEuEHLiLrGhtSckK75XtMqt3H524CfkAWychfPbRzXxRvdZYWm6nWCrGqkgdJw9uDNDi8Xseq9pEbgNguxz8",
  "key33": "3Zi8EattANEGNcGrcNvX3ZVeidJVmj25FnqzvYu2toupp5Z3xeEmUuS6AyF7UYfHgnYyjkX3srgDpia4LJRtpXcw",
  "key34": "3v3DnX9tymTxDXRsNf2kjcdmhVXD8AwkoT8KyGbkC7YTtdnzRtwrtrvQLpPKNLUhfSnB4gLGXwX1Z6CYqQmxgQ4E",
  "key35": "4sBBudG6HtBD8iJn4JJ34MJUNXEKBKPhkDF9jDEZcAaGNcSEFJKPi8eJ8BfkKKuo85y8pPwc2fUxuZphaLuipyC8",
  "key36": "26ZYSa1e4JfZGnzgV4rC1YAdubYBmusSQvifuoFJ6aQWjEQ3H6cEWcVPSgySzoVvCNn1hLyc955Hk8bU3NuKDoL9",
  "key37": "2YMCWk38F2dAxnHu8uyNzFG2NrdawHTqEtWmwECPVcQ6JyTgGFkNj4Vtpo5cP9a1DSdY9ty6mAheLN6ft9jtYx3E"
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
