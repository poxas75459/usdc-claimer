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
    "TJwQ4nkmykLD8DyxnF5QFWn3URSTDH41JJGSU5c1FGwHVDrehUC1gapx7nZnYEeGtiUYGsUGU4QRQDrtH21ZJJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EW1tAc7f7xe19jbne8kYihaDabbjBSDC87h2646L4enbCWb1yPJmpDQkWG9gZ8N25k9Uqu3nZr3ynbMR3M4x6KK",
  "key1": "52SDUHYqMQHKdFWZr6ZWZkb7b3hLVfgS3QWouvcwLq4x4WSSubjrhgkJjJ8ZWi46NqKhWi1J2g6DUabtKCDcsis9",
  "key2": "4G4iAbSVeqKMaCmVvv25MuUgMPaHZQbjvHcpYEZFrsyQnZT2AdE1R3Tkv9r3ZtA6XNz4WTgwbuUaqGVNVMwXDVDU",
  "key3": "3Ba1dD7rjgQ3x2UrfhfkHdT7hyDcUG3BdHUuhuF4fE9H17JqXTK2kzW7Y9vce6QLDqzQrUoWhpMWUDKmSFiNzyn4",
  "key4": "31KmLeX7iz8kkySMmc9i8eD9tjAMkKhyWGbUHsd38MmwKdHSzXKvnzj3EEpo3YhC2tTuUkwt13oKCybgRLNP2EJ6",
  "key5": "kPTR5NjJzZYjkWn931Vf4Sv1qdsCVEgSqhWmNZQnJZtTtkqDL4uAFsAfraXM3NHpEJBksF7S1yUkZ6ay9WMwKJV",
  "key6": "4aCWWjJNFLehyRWsxdaAuGAjMMUHv8uhPrfGbUFZLjabwj7rQCgiHUeR92hMBsqawCPCVJKzowZmr4WoosYGCAuS",
  "key7": "2MLLQXD168ujF9SyvXJgTmuxXer5cPFnnqVYKsH2do3ze5tESvRKZwdCqLQJeg1CWYXT5tvJfnTkyLCp1hM4GdnV",
  "key8": "43BKk2hh64CkVY2rqp1poQwwi4idSPa55mRPXTjVPKaroSdwJZNSZm1qSRbWKy727q29SQEdayeQ3UGknXepfYGF",
  "key9": "3E9QjCMtYRi865r13R2oj3FVHPMQYoRobjQUgk8RkLcLrGv5ZRLGbzXqeizoQSpbi7eg63oJt2aBGhG8JgSWWxCv",
  "key10": "2vHPYptwpeoGo9roYgdmU9DxU2BVq6Fn45CAy7unwvdEBsxw3Kr2PHyx9BFHGDGdT5ZbMyHMh2ucFUZN21bQEdNM",
  "key11": "3s6Ed3TMhfybSzg9Rc8MxiZfZ7png9Z98KkYfcGU7x5BGozUw27gshyZPXv3YoBNJnLoz4LrV58qnQBk1K44D5mC",
  "key12": "3Yz5NehjctS2PC6nHK5s59wReC4ezr5qNR2YjVhdA4sB24nF7cC1HU5zkXh2LP3pUAPjYJ8MHWZxdYhhuSUbBbNr",
  "key13": "jVYkojDYnyJd7NS5eUUGGUgCrk2MMKgJ986DfEibTzVroLLpL3ASMk6E4FcJjbjBjszMk2eGq2Su4j2jxaeomFU",
  "key14": "3S1D6g2LcZVgfSZjxgzBbgvZByJ3yhEpS5kiD9fpLR1C3JqrKFqCFiSgLXt5LAUu73R9k2VDPdRwitEHvGdnk6ku",
  "key15": "2RnGwd4n3J7TMd4YzTsrjGGJbM5HcjNqmY9waVpGDuCDByvqrY46FCigyRL9aH3f5XidHZ9hBRwZizTG1ieGuNyf",
  "key16": "4AQcN5tYoDTaKCM9QXeL6ZcA5G93zYYzuAacq16ZrU4gHD2QUbbFy2ccJTBs7RXRsrY8fv4WgpcN2nAVVvyCxvVE",
  "key17": "b8aXiKXgHxFLUb5n3jEAPnQA6CuC3EuvZH8Qbkof9gJWCzJfHPbaSXVra4kmipCCq3R6BmmtLhTz6NHaqn1HmBR",
  "key18": "M1cKT3PfMZu1jJJQKLYVjHgDdagmEwYfxHDYBgkL8vMu4C7HGjSfADatwaFsudtZrDynYRs77qXVpu6qzMQSHcH",
  "key19": "5c5fvkSHGgv81rP86pjQedwPr3CwqmXEwvNi1GiW4zZnUZnZJUCpn474hKfRKDLy966FNDPkrXxY1fkbfW6YH3JQ",
  "key20": "5S4ve2nKBtpXpXCAZYVA1pbefY6VpXbVXaFdREqk3WxEkGUGPnoN5EbhjE65ACwZzf5pugQuHyMLAs3pyHkFnufh",
  "key21": "3ym1uSfnRq9Ae91C4t5Z9xmhCJr9HqxnmqbNK32rS7hR91ncSpuSduPd81vu1sjcA5CXdDGCTi7dYCQrRuGNwGLw",
  "key22": "2kbayrQEJQJX55X2MrqFYNzb6uoAMWm5quiLt3rDqvC7WUmiZ3y7tj3qHZEEhG7ER4oqG5HTkx97SkXpsHqqkNPe",
  "key23": "2e2sPgU6pye4mbm5gr6MyZeRYfahRmTxQmGndUXMP3XbXCacVzjbCh5mrA9p8Czer5eLqTF8owGvrjzwMuaZMH15",
  "key24": "2MSn1GgSUC8YFsfeyHcBLZ4FeCxZUxutpT8Vj1HDB9ig3H8sDg2LMTeVuKDV9W8tcSDhgbCWsE7BSC8afVm7wF6s",
  "key25": "3LPJ4BW2Fr9vkpq2h4YFMaB3x5gxS46KRc3iCtsUKpcJ4sP43qa5LbSX7Er1W7GadQMpFDGituKjZMQAK86VUUSc",
  "key26": "45jNvikQmqnhyrbSUez77BibgGhty8aNN9XBQN2Z4TrPLuHVGDAbDBr2fAvkG4WowngoYpd1udUmyukV4T4nMvJd",
  "key27": "5NRb6VYpLkDKDntrE7Xxxxvba4iU7YXWAsdEwFRRTLNNqhJ9Z4kfDfeUNA9kEAnbVTuLEgb6nhoFz75rsXRJdPHz",
  "key28": "YBw86EfQLCHxpW9iWoYgHfrk1nDhgS56r3Y3BkZqgUFDrbRfNi8ws3KeCjKLcR9yhNRQZfFLS8gyqLhCAxQJvL6",
  "key29": "54zTy6efMqsc1256M5KxwJxQbK7vmjotBC5NdbcM8fjhKUssvYqLNoyB57hYLfeNRhpP6DNmDKTwwfKN1QfKVjV7",
  "key30": "MHKBeYCXANVL2in7xudTZBh4De22oBwxHWUGQXXuBaPg83YcNrNGUor6jp3DiD7PubyQV97JWS5NDm5gXjiZ7eh",
  "key31": "5EWgCSvyKmTTERYg1P52Pk1R3TuhWZJaWrcikW5vwXiNKTLV1ptkTivWeutrA4euCq7eZyLzf1foTkMaUSgVQDiV",
  "key32": "PughEMX4TKjUhvqE5wTbybNRyhBMAG53BUJQYbzkYaCsgzqPQEoKvon6DvSWLavqs3sySSnaTzApPmJWoFs4Kks",
  "key33": "4DGsmzN1kvULUsQYc48rt8xgEfFQQYMcCo9HHou1XD3JCrJBJydHENkxPA9kyhotcPbz3ASRFwwmJEmfqUTo3hzg",
  "key34": "2DgPLHuQ8Roqq67sNvewzb4MjYHdsoSGP8eciTeTzZ9jnTLWUGgwwsUodpQy5xrenJSyjdwtWrrmtKV9SG6Aicdo",
  "key35": "3Qj8quq4MRHCfpqTd4Bdn2fjSEnRwpwEeJenuwRBzTDGsF3P7C6XUChrTrWPb1414xeUsGRFSSCHk9PQR9mJSPFa",
  "key36": "3xd3mb93MAyQ7EAj3rvsKub5XesmN8w5Nvuid7DPVPAPLToxx4gvXEAj1K5t1LZvQHBhjdevoU5C1Xv5uAFpAvxY",
  "key37": "5GWo6KZhmFY8NhzmuEbY3fxwZQovXLZFdhPCdAppoBivSKA2R5u2Ds3S31kSTRe95yQwwosCfVLfuTr6Mgr2NsbM",
  "key38": "dPwLQexn9xG3co4R9jYgooeoWKS9ye4APaYoZUT2uZU2Ny5Ekyf8aGynYmGb6w1vLRagFQyKUjJ13s7sPwbEmuR",
  "key39": "3mz6fofC1b4JpoU8VcaMnJ6vr5SKS4FQV9GntoCJ6LMXPFjrpHd8qz9abvnv2sVwy36RyAYcMeAFbSeR4MmtG6AJ"
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
