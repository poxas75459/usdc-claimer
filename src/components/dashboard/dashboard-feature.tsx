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
    "2yGvkdwyGo8FXGM4KZSdvx4ozn9Kq4YJXUfnEBXZLtPpKCiwk5eQPerau63zz5WAbd8zVzX4Lavsc38W3BTcFr3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mr7xnTekZ8z7qAVMjoKieWfqEscVdEjC8mzhq9K6DvJhm7y1kKrxLDU2g5j4yqA8sG5Hc2oW6qwM6uw74HBZVje",
  "key1": "5BGKhxVes8uRu3mbjjKXCUd45jjWjyFRTPTzfaG38UoNhA69FYX4YdG1aLPo95dLz523xXJ6vstS2cK8tBoCa28y",
  "key2": "FUtQa89XyhsiZ5scWLq86stk8JopTHMmtXNMJ493LW9QvzQqMnYaX9TnPBjnQxUgEbJujthszSCRWqUzaaTUqXK",
  "key3": "4tVGxkRbcHUhu6AackkypUGuCjWitQFfQxDZC81fR5RGVSLZBFVzofZJ21UKSK6adJLh5xaiRFJZahFUNwYzzj1q",
  "key4": "54McYLVuwqNT3Knt6kYWMohPXhDHMgYRGxTmU3hEJnXZyxfyiZ1s24hni7F3PcUXBr1Kyp3G63wMxhmMngT6ZDCW",
  "key5": "41wt8YwKiz1izHDonfLkBW7aBGiSfT5uhoJoDyaDfzRSLa5g4xYyvHTaeQBaugHEcKJLRaLudA1EKNKqzTUM4k9f",
  "key6": "4Jxw83wBx5Wmod4cmhTr9BDFEwSjGCggnXLqQYsj1FATkski9uHtRYfFsRLGJyz49ge2muPPTEKRiBY824xEDNxj",
  "key7": "4LgSet8Eiuq2v1Bu3WfSXHRE8nDe7qVueb3A9cq1w35BN6dQmHky9ivkZShUTCWywvR6yNre5gaK8eLGw9VHZxwM",
  "key8": "2vn2f6kfrmd5hTyrmAULn9f3H7AGcqgFh3ssxFvk4Zj86hu1PVMPaKF4kxm6PUDKq9yvnDP6RCZbaYKbiqZsjPkX",
  "key9": "EqgNkCXaDMBaJoEG9hfxaQhkEccS2rSfbTW9Z1Wz7fWYNNLLT289RFZLjqz4qrUzvpQoKHVq6DqeWwBYddHxvDw",
  "key10": "2maGATWNqoYgXgbFrEBL5XSk64FivQjNSXXqPgErWaSVobNj5fheCVBs9YTRSvUmccDkYz21PW5sGPRhF1wr6YZV",
  "key11": "2PFEiMvWauEzHy1LmDWd3RVzsDQnu5tapUPztuCgxa6zSP3AjiqB9jwo7ULwT4fnPqGoZNf75pjRTbisKa2p9X2E",
  "key12": "2PFsci3dAGhBMpS6icBhuiJW1tJHTD9HE4bgtgxSYfWSixd3MKfjTvovuix6xrTU4GQJHDk82k77ceFQufrudwyf",
  "key13": "2ku7pergkZgxC22PKQfrPKDUASMMurhbU4u77z1qpqt4LuJqto1Cii2RBRPyMQDpHsY8nqtJebv2jt4QCV2g32xh",
  "key14": "2qv4LsfmYtp7FoBco8YNs2Vg8RrqaZL9tbubbLoXD7sQNiRKtCa4dWFCb5WDeRac3UpiHqVUdoE9n6dizMxazYQc",
  "key15": "cS2fx7KgTb33pVQq8Vw3czrrpSKqy9oGc1cj5ZLwByjxFMjB4haYERGaFKVGQMXfpNkn1xSLLZdBJ6bYvjf4gn3",
  "key16": "4XWwgoWSPwuNPRqVT46nMx7okt95eqCqVMma7NJqY8FrZonH16oJHp3SxWUQDLACDiKxo9xeB8K1mZ7Giao4zpf6",
  "key17": "67gsoPmfGHVfwMx3GQgM8X1P2snW3mzyzWoxfEQZ3c9XXwTmQCfZxznNE6tScfNNShtJoYKXATXnqpLZ9L5xiQSk",
  "key18": "3MnbmhAzUhwZfKEvWndJYHawDNSdWYMbW3iFU5oNCmpqsQtfzqNf7as3aWCh21uPpwVuwPs6RyiGtZZeYfXwH9K",
  "key19": "6NpB18SpTgVicjsT92rWhuYLrVnXZ2L9XDyvVtChGoXgnmr1Pb3Qukf7DjVTu7KtdBBdzpRa2aj6hvpn13TXcma",
  "key20": "5eDkHCR3hHUmFU3dHvRMPQthw3on5R1S5yvca6PQ1iTDFWstwuHfYTtSMZJ5GLhSUWYTPcJ9Z4jMK55hL53fZzBY",
  "key21": "VTHeZCaLnBs3TZqBFXKuGcumo3XYsiGpKsQRKsFxKsnFLyR3yxt9urnSzyaYLkbuWTAyxrf2xzAVzqP7TdVFcKZ",
  "key22": "4UTa7hyPwGHepisRA8QyTG8L8Zkk85JodZ2LzA3qKeoUYhHUHAfzPUpeW45uSNwa9uYCDgms5dmuHVUJ3RXMq7sN",
  "key23": "2HqPoc3F6jj2LGrnfbD3H2BpuCDiA6EetfdzUtvaYQnD28QcimqfzcBbe3mqgxQX6xkJmN9PF1ViqjYp7Fzxq5DN",
  "key24": "bSCaGhG9sV7fis4cdToBv4XXLYS4tqUMEL7BRa2Sa3zkHq8AKGtXTjYkwBLg7KbQL2ehB23D6LwvqzZuVjbFM4x",
  "key25": "4ddSc6W1ipysKF6osUPgEbPwJFPw7TCaQnuHnrPw5hGxfTWsrCPsseXMNmaUJBz9ZjSgMmb1Lkm6LiQfhDsVyPzK",
  "key26": "5NPvSTjkLXsJKAFd19gShqZ9XwJ5ErBxUNNb2cc7bcERh5hth7CgRYfeCC7whRSqoriYTDHRQoLqS78VRt4rHD4L",
  "key27": "4ZEWhhCMBc6VDHVeK7nU6xdGvWZwZ4vKUcemsgkXcXDGirw2R4zpBXQUnZtnhWGcUXnNHm4CzmkfCQuZEmWG77uC"
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
