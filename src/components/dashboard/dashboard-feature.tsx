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
    "4UbGZVP8xCFyAeY8mXG2jaf9WZ86VSGEQbJFvnAT3L451RThtTk2kW8LN6ek2JL63vMQGDXTv2Rt9okb1bYncdCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mkab54zJEkKMjMJvH2qkYz456Twj1bBCWqejpzZFQMDn5WuV7r2DkNb1pebphZb7XDNZi8LGW4JVBtHVrZXGGdZ",
  "key1": "C61pFoTr3dWiLnSPtfFykuwwPet8cJKXvxr6JfHdvKkLpkpDHhCRioEwXR4vocF21VV2jo52xDUzWyA311P2agL",
  "key2": "5Q4hwZiKoUdGwx829LM8Uptb38Lk4wAfAvFj8KykBLR99k8rwE5uoDBNqjfsDVV96fu14zqoZxQFqxVC1WXxmsYo",
  "key3": "4QZsUtKyYmw2eKepeGHgswanLJMQgwLaR118j17bgbSvUSUgpgkTgohvvTTGrreebQtC5TKbLCqHEsKpUGa3v2b5",
  "key4": "2JZE2gfrdfwhNQw8mPYPB7pp8r9yKfYiL74stWoH5dDffAe4soQuHQrwRCmpD5omViThZR2byU2QKkg6wQ8LBUQ9",
  "key5": "55p7B6tCW7k3qtiRT3ocR5zXFKEfdLvGxMKVDTD8ZbzhWHHR7o8u693WXUXk7eAJGdxBnBvdRvAoVkdeJ91qh6oy",
  "key6": "5RBBgk1m31u8B64KUR6CmaeZKUtF7C8QWf6RMLZH98aVa2TRVw7nr7LdqUeFB1S1KccuazmfJvs3XP6B1Ay8yb8d",
  "key7": "65hpcaoet8VgF1xhJ6vbN1ev9qcfhiumBDgpi7EK6F6ezUH3w3srcFduqK6tbvTmMKJSpZnytnL89EAAbHL9jJZ9",
  "key8": "2Md3Tm7DBC6orGiAeMEZYkrtzy17tgWrpP2zmBJcCDob16E67EwBg84YfGxE5oPdC2hMzT9hreWwEyiDfzaFaRwh",
  "key9": "2r6WfekVZHZT7DjTj959MSGQfyfmGduPtuJYGzsBERYeW388DKWXGrBnYJfAPVE1hfFB9pwPeu3YPZZWi4fKzMbq",
  "key10": "5J7bGtvjy4ieXpUpmvayEiVckksmipZRGGJStaFXm4RrKjtP3LQ3zzfAkjWz3UA3RZboN2cB9ugJ3EPjrcTic7ik",
  "key11": "67prE8tQb6qvShGBuJ6JqK2uvwyoM75JzRXs4gswS9hNs94PiEgei3L6JYDzXekBmEYjSdhaHumz2EioVfNomYrY",
  "key12": "2CMkNAXnnkGAWeM3GSzFmJbvjWTXETjzQMYDGgXUbayfkgfdVHebGFDZjH4jCNYSKMuvA9yBixZJyVfx9DcPVt4e",
  "key13": "3zSxgkCoDFBrLJWyoaCpNCK88nk3hTJy5qPsosJgKRk9vCMKVr15BZhz1fkP7MvGASHZnJeq2ZezoBZo4z84MB9z",
  "key14": "Yx3qYWJcXNaXtFj2NmNTnA8SDqPaQ6jfSyhjeepqxpwnyCRKyfPnjMnUJXMXvGRBh5i78KAb3LCaKgcXdH84nqo",
  "key15": "FXRrETwZH3WEhNxYixQgitqjBLLJdZKq9x8K7dyUL7uhmHZLwvXEutyQ1vKR3QvkPPVTQMjyVMqwHfRf14zxxuo",
  "key16": "5wfiPds9ja3xsKjfZGRfaBh5T2DGDJsksN5DgGXUJ5tbgKmFvaievRet72Sj8HfwgzQcwPg7j7QoJVCr7cs1PqDZ",
  "key17": "5hJWMDrzwWA3pR3z7j5GM451CfvF6ECdqydAP5oByogdVpxWQi3ybvVv9p21xY2x4fcffo3u1EDBGVSy6RSSLG9k",
  "key18": "3Az4rXV769rdJxkmwsaPhhofqfyzSkAim4EEVegQj9ZXtVXso2QQaV9uwao2CChzJSNY8HusEC3Gt55xAq9sAh7G",
  "key19": "3Na6CM27e2mi8b1VyebP897pXXfJuQiUiaUj6vJEwmrtvX2etWB4xXQSYEznXaaQ8Z1gaNLzV9EA9HesTVikNX9R",
  "key20": "31F9N7W8qLLujEUB6FR1a8XhjC2RTYAiFzQW8o2g7qPirWE9t6z62t3JMAJLMTcmiNMqWN94dxssgdbHoY8mfVUX",
  "key21": "5e6Vc2R2QgNwmwAuby6f16JaTbrSAt8XgTm4vkBqiN9eNEo3jg3Qts1BEQ76AgvmRKQXuYgfAbtCE1SyknxF7hcx",
  "key22": "4hUSBgBxBAh2uEcCbUumgqQDR8wngVmV8nnDwm5CgZTxKXX8GnHGUycsvsviFBmeKih7nfTmMCoLi85wY5Sm4AtL",
  "key23": "4anu9KoTYXMHRtmEHBqrEx9XhmA5AARAAvqGSB4q3gMZfAgKotqzW1bfogLhSwCwriAzbTJzcC86DbJcYxZfji3Y",
  "key24": "LjgfhHqxtqQpKAXiMrZYcw7VwGvswojbQDwBRoZ78ZNx4wnxNtBPdurQBMfSohon9qvpd4WgsyfkXMzZqzfSaQo",
  "key25": "2hKjEpYZYFUPRHSvkeWop3VVF6LUbxLbFPisCCoiNbAsFEj6sghBibRCdy14McQfapfPHZJmYjXowumeVyKdxyrc",
  "key26": "2oYFAGi5m3eoNAvuHtwYKfvfFJhrbQg3TP1nnx5EjYtxaSiEKEa5PWTqsQM59ATxjA2qLpaMTqWoxRkdTX43Xxx1",
  "key27": "3hLZNFpaCtn3YEPf4pVsdKVCL6p1mSEA7eAwpx4LdhdUjBAtCTcw6474kZ3zp69T7376MJBozanw2W8upmTsUScQ",
  "key28": "4phT5kHnZUgKyfXzePijuQvVzBmoU6oy9P9wsdJDyjh3zE8BsrCHhfqfzCUfKykxNDLejgWHH16qbBs6MnQ4owoZ",
  "key29": "CE626ng2389b5unQRBZ4ZBKUenihbjKGM8oeC3ZtLx2eDB3oAnFXXCLz1AQUJSBWi5a2VkQsaGjA4hdAZMo4Ssn",
  "key30": "37faQ69iXFAqmo4we3SVkzhdJtrvvPJCfykmYDoiWsv2vd6NsMfrXVRPDgFM9FS1u71rePTnhZ4FECSHy4pqm2Hi",
  "key31": "4US2GRLCtVTRDtY4FSvmViT2KbnshLeGD4aN5BhkeME4a19x1g3By3EZ7E1CK4yP85CZqhw4Q4D47dZ99YhWicwc",
  "key32": "1su7Ysumx2dDgPaWs662TPfJyPncRVqaW1peE8XbGu476C1HB428g2raDAkAsPVUVvF9t4WYjQiUMBsLJZi1ViU",
  "key33": "4FCu62nzbWLV8BP3DgmMGkopRArKunFEHtNQyi3YNagXZ3EAGe7hbMjNET1zNiyH3kQTVdxwgxP9Xadd3GXmwQZ1",
  "key34": "4okrcJmZWiteyDHe9pafGNFMsWhib7qzkuP2DvGBFXPfj5xejkTjJYaMFzcGSvxdwMUSarUsBcGqLVQJbJDuxGyy",
  "key35": "3NwMmXBres4jr4pMBE32y3jQJUnqDiDy9qetGfDVY7cNUaRheL5bkmQwXHucfjpwruR2oQWrkNqPZuaQvSZcRwYo"
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
