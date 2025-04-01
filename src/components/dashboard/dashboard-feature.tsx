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
    "tzZ1wSEF6pawkwqhLctHQ1iBxpmzcqPK5QZejBGfp16tnx8ougFqFwX5eAh1qkXo4bnEgVf4HZyGaF62Fc6Pq5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hP4YqheVCmc81DZ7jdBJunU2XuxREKWPC5WaiyGyhgad97QMu6y5fwTovG8HUXLPWXpdouyAVhuGAS4UDanpqd5",
  "key1": "RXB1AW1KfoSKJg1Z7pAGu5F6YzTp9TKokiTVUpdMti26jrNzLdbANWFB7rt39BHgLCjyJF26Nxa1XAdGiGYcwY4",
  "key2": "2azNKjaF2Xne5oRZ1ue2zhQpWKj5iwrE81c5nAu4NtGULfNxBiiyvx2EW7EFjYQu96ewjKxVu43CRmnjWiNk51cz",
  "key3": "JMB4YMhPCRdbYiRdLiQYZeYWDn95qEMu6tY7f8J3PPF75VTfvN6eCzQp4NpM41pBGGnThEzE5Ud7NvNhe6qJ2Aj",
  "key4": "4xgJbguDTrJaCAhSTvSWdvPKzDYERo6eN44xHLp1Rzf4EPR2dPb6xfk5yHvEPgRWkzjYxa6q4Zpioie5omkoMo7J",
  "key5": "29XPu4tvxxqFywXXL44Dzu42zs9AZBK3XmNFzaEfvH5egR6jT9mLeLXxSFNy5hHDsiD1SuNPvJyGNKYv57Jw93K2",
  "key6": "MsUvNhFBofGNn3phQsTXgrAJmhsXddMfqz5YP2cHJRkZKMYnQ3JvTdm6UjwVYPc9wNy3Y2W623egFHi4XcSkaLA",
  "key7": "3wrD77vibcWciRYeNi6CZ2PEuQgg2LP1gPr6sexWCBGEL2nCaz6PBhcRGW9enf9LFUd5Rni8ux83WtjyM6DFXGfi",
  "key8": "EAJNSvc5j42NvQ1U3G6S4NvfBqYNXN7LKPTW4UWnH3VAPjXTgPNrHPkGqeLkNbF6UvAzu4C1HkZD3QidvYmE2CQ",
  "key9": "Dzy3MqEMDU1vsFjZHLhZrLppTLvdPMdpitYWyceUPezSAUwNE6vBqEDNMQPDoe7xkfF3PyAJLnRTJ2KnpGwaC1M",
  "key10": "FhTbdsGcyr5jWksuNhs8oLttPNchJAcRzZmY16irpxKw5sjedcwZ1rRForw1fWE9x5m5kX7tBVUXFHGH7wRUfGc",
  "key11": "4WVY8Ddr6nrwjvC4Tbw896uXuYTY2dRafhQnsm8zYzRy2c1UVr3BYBdaSDGrCvDcmomMfcFsYpXaHPSbqUwuVRX6",
  "key12": "679euWE3uaK9YUHCUyKGqzqUMfEviSGAnU8VDwsbLmLRoMEoYAxiZAYrVEaNNfsFiKEo9iwyciG1KJxuPMH43wvH",
  "key13": "2ebjRC4oZqgNBW1GS6S7prfVVN3ehFoiz7UVQieyBgVgTyxRwEMZFAN2aopjLc54LRkM8XT35axp2ZPT4Az2P9VT",
  "key14": "2p6rgS8cTgbCLp1xUoNeyiS5anv6CGWWYTSMCGhrnx7H8VcTACL25Y9HwnQ8wJyA38cnSC4WsbrWWU9zWcouT4tv",
  "key15": "bfB2YVVAPXie3GwWNeyU4u5gviiQPtfnusquAcGRY2oemCYKfYFEvopdirSYC6ZD2hdaSVw7JnmEX1h6CpwkvTQ",
  "key16": "9YHzyUBVGyQgwy7h31MHjhBcWKniQDRCv6CHZQncfF4fXLK73K3kPrea6sWjgYCD2jDp5geWcb8PPdfetKq88B9",
  "key17": "45CEZixPrvvvqR3qehvE9Y2z9MHhBfdQYSaDzAckWQfaQbzKBFgeddGJ4RFbWdjhKBUv2BmML56H876Zvh4t1qV1",
  "key18": "ZdJujPCBrVj5mUaJB45Yz5wUSpnRGnLzYmmNfr8ZHiapQdSDetBghUtLjqYHw9e35u6E67xkXyy35iT3QU9NoWi",
  "key19": "X8PBXDNJqVz9CpKxs5gfVCxdPEF2G1EGftSxj7TQ25F5sK7gcB6PoooRSJYpbhX1Qs4GRwD7VjWCZZJ35XJvzSr",
  "key20": "2A1evB3akmqmxrQk8WwesLUHu7NmQo9G8FTD7B6GVWS7GrU2uJvaecLte6LqStPERTL3mFqRUe5hAX1PztSR1ztQ",
  "key21": "3MJkyTJzdeGKGBi6LeQjABADE8EqveTirWkJoYS7nqckz3zYrik8pTCZaCnpRzAJXqWoZV8xPyJpyUcgnF4WB3gC",
  "key22": "3x1VjgwoVJDGXZb3yGxAa7Y7kXS6wxxVXZp9pEyxHMJxBZbV9ufHMrLUbFGSpiwnzZJdBPWqz5mNs8W6SVH28wFF",
  "key23": "4pktWZPfuCNrY8KXSbXp5PXWFKVR2tgJLW8EMBD51RZHBTKaaHSkFfU6fBJycBjd8W4RFGWJ3Pq2S6oSWznVad8n",
  "key24": "2HNT56M7g9cMwB4Ay19weZBgo6iPSEe5wDmc59LxLYM2QeEab9ow9STg6ZvbdX95t4gwGYdCtR4nWDgTirRVwvMJ",
  "key25": "5s4dhez7rw4vafsm8RWnGBcCL1mizqtTso3byD5zF8AKwwHByHLZLwoEhncpmoJAnD8TXbFcsEJ6m6ciRdeLAN2C",
  "key26": "3xCMhPnZ6nghqiV8mxKKxnsutatt5xD8a2Um9MjENLUpNP3AApocPeeoUiTQuBVW4AqmibQjoiw7N4hQ4QGBzJHx",
  "key27": "3Mdx2ySFta6gZSXxwaWNgAFKyAoc9iRgoCcAKaG759LD7GLbikWAuDg9Js6q8KqF7yZk1EmGyaH6nX9HvM6gmSpQ"
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
