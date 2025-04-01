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
    "5wdj8vSSpQ6vUWRj8Ct1qgXwiK9uNtMdWYQFKT6CYpBNRUVbyry1SCLH3aWTdKGu6i1bN5RsUaDnho2xdygfZMgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2usqcWmNRXfkYgPZAQ2GroTkvixmWgvZs4azVYnVD2bSf6J9GP4iwiEXVbNT1N4QaadFm3Hd32AKWtFHs1Kejged",
  "key1": "XG3XLGxLwxZs4sA1j85wKSZVh9Dr4RkecZswjREFVuQ7UCHQWHhBjyrXxkAb6sTaQWgDZWa1vQ1oqntgmm3BzS1",
  "key2": "64Wi2Q3h8ZbhbA1msY3Dp3RVv4jeBvLmkcyJYXtDQU24WgggtZkBJ9vWDQitefKwkyB1uS2ufpXk7oZPCEew7T6w",
  "key3": "2dB7n2eZc48dKsYunCBJZoqqa3iQNgmqwM5JbPsSGbt8wk1EkqadbnQkxLt9eX8gpC5tS34Xa3vBEfQJSbL13pAL",
  "key4": "4rNBgFcpt8Eg7VJUaHvBNZwrP2iMHS6T2vPqyuuba2BNDKPAcrEbVaU3BnY7VvJTgEUxugeQXaagmjEG4fMMvaKa",
  "key5": "UTLh5vy7g15HKbDNesQKvFMD6kEnkU9GYSJx9kCmgP2KrgnzcXuzWJ4hNUm79fwQ7sjujACg2mDWmoczYaRmr4Q",
  "key6": "kLQ7gMHrR3d2e3iG9geaVcS2QN7ykBZGeYog8nRD9oqwPjGFybzXiNb9rjGGVRCEcGvpUcRze5Zd5AfsfSEjP89",
  "key7": "4z1Sw2H7J1njDCrxdav5fGnTnyJK9QeJGUzJSEw3Ld2BdN1Yp7NAomHf3pzs87mcYd3VZ1gzcCqdZpDayjpoSKXt",
  "key8": "3RRrfreDGDNdJfzcxLT1GZcpjE1XpycWfBmsLFeFABaKkS8Tr19c5XhVGbW4oxbk5njLw58eJYGAWZpVMR8CiE2v",
  "key9": "4coXJwBoCZr8xCT9nyvewyTz5QcBhRDE9Qfx4CfZYxssQtf1aLbMrpvDLR3iG5mwMNhFM5PVSwmEoVPoBkmJW8xY",
  "key10": "5D33MEDXU7onVjz9G3VtxkN6qT3gSsr9Qh4JWqAXhFKioiTN8UixMExQJeMVBX523FzaPxCzJPTxa3pae8Vxdby9",
  "key11": "a99g1141DUm1b8TavHuvuExz5NX9ZRpxTz7rAQHLorx8BVVUv7Nm58teGFnpAuzJ2kaHaF9QK9otPU4AjoeQekw",
  "key12": "5Hgo9bQu184zy7g5dfY5naeXjboAhHyp5KT7D9sTw4AfX2gUDsgrxRi3Z1t5nwreXxHneMb3PrDwNk7h4QnDmUAK",
  "key13": "4wXqZ8aMTr5mXX6cxVnDyqFEkZ1Cgs8RvBu8fJsLxNbSfb6L6CcoR8iaSEWDLV9XvbRWVktUwwFydxM62otgAsPV",
  "key14": "5ry1UZza3gsYRqFBZAudqUSe51aoULCe9hQQe5wVVXoXNJXLv3YwfKA92TUFB77LjS2SyK5aJ337XNMFh8vRQzXi",
  "key15": "4HHvtdyqVKovUCroYb1BUrmwooUrFGaYG96f6UUoPJwbg9EDgyigAQdhrUBgPjAEZ6fwgmMKESmYMxvhc1S3g1VY",
  "key16": "22ywhX73JyZZeRE4KYWem94C74LfzxxdGdx5uNwgs7gHTKhvtPGyHcHjFfBTUwfubFWs78ndhp99zY8KMKLZVXU1",
  "key17": "3cEYFc9ojPhKoiZ7rXrEjGje5yq6AQSiND4eM132QHicZGZgcBAXDp7RXWup7ZGyZ7eFm3NsiSpvR4KSH97MredS",
  "key18": "3pv4zSHpsk5Ccska64ZzY883s2XqtDw8fzRCg2H32YWyTwyRP78ryFwJExQuqwMWDdXb47n5aw7jtjEVf4y5R7rs",
  "key19": "2Cy6yEst7F18s7Mt4pvMtkFHzUoMZ6RjPUkApEB86DWqLWytJH26hTSmMyGKUTnoZgPmUMeKdwp2Krrhnjvw7kup",
  "key20": "PhcYYHdUau4DQtuW7QbMFVhxDKcXGHPeFEhspRro49wryAcqcUMx6q86Hn9Xd8Kjyp7EK7bcXX1VhZM21GLdPta",
  "key21": "4zk43U9WHV4KmkYAwn3mvzncraHHDawHbN5qJBsd498H3uXrHb8mriyQNvHwGh5JbcPvR3n1D7HtCUsGdcbJ1YWX",
  "key22": "kPGmFEtJycj7raRarjbi5Cw8pbXfy72c4tYe5Tt34NLZxKw22XTN1gu9jkXBEn8VR9xExfx6XFurMGXD33WkTxd",
  "key23": "2VfrRuutUZrfxCpYj73JR94uiisP45v9Cubn8xBt7QHje8jDf3vNXRH5gaiM14GuxEncTwmXUpKraGupYiCER5QJ",
  "key24": "34U8qbyfrye3n7qZStkPs7KUDh7fmUiAsjq34R95T3EhYEsNudLtRqVBEyn1aaZHPwFtG64W6iYVoPYQNGwJbX6H",
  "key25": "5JqQqG47qR6a2znsyyDDkf3eLZg3fNPgFiEkFbMnFTXxScf3JBBhrTKM7JFzAd2QoBR5Jo3KG6Fnpy9aGvwmcefk",
  "key26": "27athviqDYpRw3eW3pBLLz5JSEsVZDuxfLUavL2C7cT2KhUqwfx61cLA5DF1jNVG54P3aJvLHLTPkaCBSMxtNvCg"
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
