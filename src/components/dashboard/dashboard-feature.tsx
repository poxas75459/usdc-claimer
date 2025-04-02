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
    "2Q8FYagedbcBdhnBYxducZKbAyxqVWmQgdfq8FpZYhyMW4pHrafBt9KtxVmiXg8dEyALHuU5jCQNkDTYUoRWGpAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmmhBhBBHW9RuHUgoJvDSwmvFYhSYgJ6HceK1J6fi8pLfUXwfGn76Dq1bkxoGtTjYyj2RbM3KXNipETS4fQQVnS",
  "key1": "5KtAmr5KP43sk6NkDXhh5n5dKEmLERAvSggQiqy9xSw8TS3hPu6oqKAkViemarufwQNjDFzLpvnFhPduksXVjkMC",
  "key2": "3HMQRbP9nhGyyDJpLeRjWajj4sYezv4Dp6eDJysnkSbS7kuiVDwmkZSup4cLQDZYjDbf7D1WYKcRvfjwPdoUfFjP",
  "key3": "4jqJWD6jwhXMp9t7aiSx8irPpNBPep1fyXULFQmgMtmmxzjhfi8tyBkXGAHABppdWoJBfR5pzUDfebrvkSfkP2PD",
  "key4": "5RqYqhP5R52wQ2MnvEHSBryvMR2ph2oHTQbPHfMYN7NfTHgF6o12GL17uiuaxF4YDUYPqjzfsjSzaao4qp57qzAE",
  "key5": "86nkweEq4EHajhoSGbgw7ia5Xhs1R7rZF1khvNu4i2cCw2bi3n19aRtuNqNPsv2W4QDK15ag6zXFzxUCP1wXmAB",
  "key6": "4XHk7QKZHFsYTFFasuJyY8AT2WYVbYJfMHBCmK4TiFk3cjd3jd6KhRXuYHHoDdLVPWe9ZUnk4HYd8Vq4n6WSfhmB",
  "key7": "2WVN9Ak7Pcud7pzheT1wktMyojsh1BHfzLEsK1RG145ntRrSFAxd8KvaYdfe3b8C1j2dmZCPUpQztiTCT1R8nVyh",
  "key8": "3WDbqHMxRABVy9KQ4iehiAPB2AN3MRGjPhkh47n2oyBknoHc2NVdRo7NV6MsYc28qq6Mck4446WYMq39Bpj8k6tK",
  "key9": "3SKL8YzszfTJV3j9KxzyyUdJm4zyqRwkEFyjMvAYgC3WivijQRiK5VA9ojz4LjaZPvKkoQNtVfqhBWrJFdZgYq48",
  "key10": "4Xcd6RU3WGxG7tmeQ5DaUAspwcH7L1vHKQzX7x8T9Rr2XGgGUkRy2LLiH3pxvfC3HDg2VALhwLjQYMpBQacvZz5H",
  "key11": "3xv4WriHpTZtCYeuufsEKkJDNyZKJ7GefVezmNTHafY7npBpHeYb3Mds4f2PK48G5uWGE3TkMZDiMC56gyWR2dC9",
  "key12": "2np8sU7t1sJcohGW4s2Q41h4izmtJPqd4eaeHZ63TknC3fNN6274nuS7iyY2qRTz5iYS8fjeAXZ3gQvRFPrkGN7V",
  "key13": "3bnUJjwEBB28q1xugGSU6p3evSGbAJuAd1yb2RuqAZCHXQpkmqWNJe7ECRXSpczjSiFfCn3DnoaUKMRrNzSQxuHu",
  "key14": "4CEEdBMoXqCH3VhFPhZBmjpEz6xMyNJGXBn8vMx2LDcTYj4QNceCeyH8Ruq7RTiSAVG2dfF6qK9TncaCcDj8rett",
  "key15": "3qiJH3JxaJrwoanhpKExvgVqMUWEP6pXw3eFmJjdvawKKySMFYgbuwDQbW3VmusMzzvSnHnDw93hwAX96CU3jkE5",
  "key16": "1vMjEfT8X2g6DpFKdL8ux4rqmSjbEVjbWeYgKYrTBz6TymAXfrBVAMXioe1tPL9UKddQN5HvmUbZmhNsMFq8wVF",
  "key17": "2r4iT9Vp86JUDA52NKjANr8SADCcYXJf2zeyxoSVKtBAyisH4pS1hZ4Bnpj5mZmNWtrKxDSvVhyxho15SejfcXc5",
  "key18": "3MrbLPSYMXgkXa3DccA5q4Wi1NRhwGcbqC3Lfp1E47eZdmrmEEfg5WEQB2xQPf6uTJt42Gz3bFF1nAWyQnpS25gD",
  "key19": "48SZYihy2XqFzYopNR9kWCLN8AsFcXzmQSQ19BtUEKzu85bGGBrE64e8rHjrTmhAY1FwxUCbttviJnwHfSJPkMN",
  "key20": "3Ahm7GCYzEZttoHkRab9MWaB6oscsg9GyGCkAahyv9a1bJFFHSqQivZKUGtPVcs4KzLf6aZyeDdwQZxNCaU4dhVp",
  "key21": "5QXqW8RCgnRWQEX7JJQbmp3pK7wKKuLiDaVEvQyH7d8JA3fziGwYGnF9X3hsguL4RwwLCjGJxn2oe47e3xHcDEed",
  "key22": "5d1DWwdJ2iB8PNCjD3HpdriimckBFV7456zUoMqMBccXctpPyuKkURg3bmyZwAkx3RiDoWF2XPAES4amU59smJGP",
  "key23": "5QDDwdLBc1J5k3xLBHmYnRKNWgR36WV2hYEwSjrJ9QHjExzbKiT6ohEs5wpkPzEFHSVwgEaxot8RuBYVQeFSspr4",
  "key24": "3wvvqWpwjS932vKScRt7CEYMA3utX4VUg2Pun92Ygecux6fNAqvLCGRvir5fHmgccccAEQ16R3wESEvZfinQBcRY",
  "key25": "5RYTc66NhbvmQg2veHsC2a5pANqja8e7R8HSR9AE8rSoP4zkXnb51KPRPbjggVq3BVuhVe122N96aLjt2FMTU5vA",
  "key26": "2YFGCvmdAnbGNB5bxoAhSSyMCu3k7KJA43e6TdZnTCu4vZEbdgxiEt2SwvJsZLd93TVmfmr8PQE6akmLcChYtCGt",
  "key27": "5y2RMZgFPgp6ZoeWThMGP9rPQRyKD7ihdaQDHmRSCYt5ikxcTQTB9DjVk2eUn2NcSy6xvuTGpvEtKatMSUm3kdkp",
  "key28": "nnjDBkWtnSPRYzJyik2TYWi2R1oUPB6b1ZEqRxUDXvBNj8LPcHWVfbbSPCipnuctbu3LYYiktneLDXU4Ux2jahH"
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
