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
    "2d7Hc4xewKsdJ7Vo1Jhaff6b4w1aNnKGma3CL4oRfHjgn82Kd7uXrWKP4RBK9jCuTmbNovhBU2eWZob2Tg8XheLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sVAiCxbWpNGLJAbDdDq9JaygtDUTQnv7KRenLhtAwNVSX2rG8eYvFxu5nqe55NHNpXLWKr4A4GMt7HHFdYUABkp",
  "key1": "3394zCHLVXxNu6cqUEqgHysUYReUtPQYg5boFa2BKhxhsAAJvoXVUU12bmTZuqb8nQFpyPMqWhf6cQ8VMd6c3mks",
  "key2": "2zZFfBr4LqaX8vixu8gaPNsfSW47rTM3NGYivH1yAwUma43AgvfYrQdH3uvSnMi6ngJbdpmgb1VA9KC76HLFU8f2",
  "key3": "2KP77UdNKMsfMNCQWuUbYqCGgQd5wt8bBAvTgdEmpF5RNJMogmM9rgpFbfnfEfbmGCkZGgYxcYw2U1hRRJt9Lzp9",
  "key4": "2PGt5j3R8ox2jvLUDXJDjnZ3WYuStEN35YS4zJaKJNzcMaJoBpDKvXWMkS7HuwAdNwcEmNP6WscYnX7FMpu1wAYn",
  "key5": "35XX63CgrECnTef6WMTeQ7mEbyAtovJKmbrqVmQCHzjZ27pb8azCNLvqcR4iErqkE9tHvXP7eHgdohenSWmdUzaX",
  "key6": "5Z269nPTyqAYMEnjVGsLsVUsomGAb66NjZ35BANV9wx5Xxap2mQ9a92CRFpHU3tPK4kZB3xevWowJV62jE9DhcH6",
  "key7": "2S2c3JDx8eG6ZTC3zNkwXsx1CoenypfTgsNqVsxnKuhrx9GUUvX7XP4Wn2L8qK2xuN8FZA1w9cDxn9VP2z7rU7tG",
  "key8": "2pTu55hnLx7LSoKp8N1ZSNmXRJfqe2TpN5dx6bHiwn7V4SBs1b5r6N2BXXUjqKjqrkDQybSASP5SgPQweTXgkUTK",
  "key9": "2ksN7EB66DmRnTywNHHQ9jRCR7V6Np7Bb52GtTEkp8G7aHCzQLX3v21Rgj9nMYKeev7TEcemKAcd1GwQiuFjp6hm",
  "key10": "2TeQqxf8BaCNsmU1UtsPztPYQu26EhhQpApiJi9t2Huc2HYCpFGiGp9sKaXVAkTroKXsKwwu1fTXDZZDKyArTxft",
  "key11": "4zreXT4HmtKZ887wMFd1aDHP68bDrHmkbAsVeK6BYKA9FnrBXf5iPMUX8bSVe7stcLha7ouYAKxHKjPhMa9P654S",
  "key12": "2Hnus3i4VaJxgAxazTpUdpqxUKShZRguNrLvvgdfHyWWAF8vRnhxxBTn3xuBZrttQvbbRSZAr21m3CJESR54Qkqs",
  "key13": "4Zw3Qm4vJPRKfJxXuA9rxF59GpCsHB5DR4DMRa9z4e2qPzcMff8qk2XnmKEJndARqppphLCvcboj7EXLU7MHQAjM",
  "key14": "5zqMZfpEdXJNXeqx8AGVAMBMpmXENuzhLdQRJcVXKjaPVCDvxrWnFNuh6V7SCxdUjP1Xe3njCMafqUFXRhJQAVTp",
  "key15": "4v4Xmx2ABYx6wtDXeh1A3trN9RXz3xZFfpbmur1Kaw288VTRzj8SX56rZ2gX9Py5v8hicC7t2h9zX2QwAeHk6sRb",
  "key16": "3kSNFzXiiyfCRFYtZbpHXQ73vNVKeYVVuCLC5spMwbwVdZ7XXpfYYZBGCHXGybFog5WMn6nAaB6parpvZGdgVmpK",
  "key17": "767AuF7gdXmXwnzf4iaxkEMThJHxMhZoNf9SPSw2opHBig8YFr9fezq1vgbwKcqyvkjMPDTDn5fDvReHNdMHxxt",
  "key18": "4D5AQ3NqeKM68gnbwrm7f37Mx5F6M9vvUcDLdYdyDAEzoyRQTpTbzHiphoBtM6e7dPhJ6Tz8XbLeD6piAbsxXMx3",
  "key19": "5Abbu6xMMWvmzeMoWxSRjGWoy3GTSMvX7gxvUngCtSGgxvwxYLUCT1FEGkfr6U3nYsfsArpxtgMdiMvsSvTFmgQw",
  "key20": "4vyH4VnEzGXdMQ6G5TB1rAsDxBygzgPaun2KhyZd7U5nzdGV2QQjVxVgtH16XwVwUcRXDwL7hsp4tyfMaJANZ94b",
  "key21": "2TkSJG6zURdcXqvLZgD2vGdAeBAT4AsRFcYCvjfzs2ED7rGhRG2Tr2qHioxPpSCKK3wPmsbkSa3CzGGp9m7Etpx4",
  "key22": "3cn7oCv8f8tg22g7ufjSWk8HSwaYnDqh55DafUA2EyCLceb5dk1ybwCcayDf43wfNDpeY2j32oLv3a9JZPhV9ZU3",
  "key23": "3RJ7hpytpRJ3PsYwRhTGExo33X9y7ZznKAGEwi8MHwDu7JGH9o6PunAoB2XK52atrFtDkQNTHkhVvZ1SPYuUdt1x",
  "key24": "3WXwD4G6G7YdBCMB17tdQrPr7VtQJddm6Huei8kh2HxQ1gmySQvKqdNYN1iutuV1eLmAMEN99b7CGqTNssFjMcYu",
  "key25": "39gBCP9VWbL8mKCJzr7K7pRmM2xXYHgFoSdsCeBrqig4Tmn2uwXaksUvigoiLPxNtGyaFRHty78z6NiN5YiTDdRc",
  "key26": "5CW5s3HjAw82hLTWyfuWyKqu33feJTtSk58iR4v9s3mzCtkScsn51pmo8GB9WupEdJ96pBx5UmAdbfKvp69pDWSj",
  "key27": "5k5zZjbXEwJ5AR8DwYTLNNmJx1YESu6byp7hewz1gPQyv4v1weCbMi6si8Rjxk6rWnoQxh3VxhRF8ixtg4PZVSkR",
  "key28": "5ikzLCozfhwa1afJTf583CrQQVjyJimY2TWtHtcfCAHQRNpPrB2WjxQLSmzBHAkFxk16XEPMFidoJUEGNJq1iADd",
  "key29": "Vh6eV3A4yD4QUrmUm6ZBTrJuGt1fEEMD66YemKBdX5D1i9m36QAP6HQMxGaVFud6EeMxynQ5LUC6q2h2vmwcmu7",
  "key30": "49wHmL5w3sVw6ZzJJTiehBNx1FZrCbY7g9MgtYu2Bc9w1tg2RyWgx8RoSZDeCTbA52DZ5rjbcVTzYeCSMhZd3PoE",
  "key31": "vG3GM3znHDJ8fLyo2M3nTuSXBKR4aCF4pBL5n7Qptd63Uo6FdYiZrxpLjVZr25qcr2CXvQh3PkCvSGoXRUuevHR",
  "key32": "9zeK3FYSbaffRQMpP7UPynXK3Ycu6YnRUcsbR2gkFW2NfJ4gJ9rVYEXqCkhGCZoEzcpe4KGqxZ3jHuR3SrmvSmy"
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
