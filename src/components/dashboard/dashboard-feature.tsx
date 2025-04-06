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
    "5ibZ8PiDYgD8vKY2J9tzHeMRqg8ksxsLi2MaBkuQi26grbRuHCLf4XSLYroM5EtRq6EcfT2XBYGXmCL77QZ5qG51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MYASR9ZbtruSAigYZ4nM7Gcbouhw8E9J9M7gp3fXLFnVjxRbsLPxM4zD2taNakjawoKk9Ewp6NoogBVLMxTaRSu",
  "key1": "2MQzHwuxV4tyyPSbddafZ17Zkf136MPBX64cE1kxZsteWhv2BXJni73BzaAJeQ3DG2Sf43EvVqwEoMnkwdWqRQoT",
  "key2": "3orL4Jt2aKPNXiLiZ9WsUKG9yuLT9uZoJiZcK2sndiYpzmKXo5b3HAh15SjCXeJunRXHFEf4T3qsi8mQM5GpS84H",
  "key3": "5q4Ux4j5Ez9HCKf8pfaidqtSN8CrjcXHADAKdkYgqAEd4HsqC2D9bsx1UxWj4sBzc1gdP19pQphDBn7HRepcoQCz",
  "key4": "21e7YRSfBdkEqV6iTSLVtRPqceE15LfYedpM2oNzazvDuTQJdsWtiY9Pg3sZhLJ9KzSYSumRrhhjCAzWxThEQVBm",
  "key5": "35iymoCESNFbgKiZLuHomHNRDeQMU9rWjpvukeE9a7pZQ7NHY7H9ejybyv4Yc7FY2zRMQZYbZLWBNWyKq4yzX3X8",
  "key6": "3wH7bsGDGrsfpHPpnbBtcNWheEjS1W6CjCdsRvuvW4wA8LJgxABLfkfXxcmw1r4QDKZLweKsDpThvgJzDMWyoeqa",
  "key7": "3We2S7xdkXo7KRLpiwfYAVcvsLRenRmtXjj7DVwtmzR2tTQkrKWmcQ7C44zmu9J3MhVZBTKmimTLvPu3u8KkHLF9",
  "key8": "4ow1iNCPT7eaEz8wDt1hvyZZAZE9tats5szjNpTJaDSfz1vSf2dHsuuPszezwQCSTMequBKAyfrC78xk3GVayrek",
  "key9": "4UKMWyxeSPfKUh3du6X8dfPQpdS4i4uzyktHBMRdNGta7LTWg88BBqChWjP2aWvGXsSorSqyoYS4ur396bCvsPFT",
  "key10": "5SaKZDKAGX1cNPXD3p63QkhLbT4vXyuMCxquFbP8jQmkWD1MjoxLqNP5bdV2aktMqyH4BcJPyq4DAGwqS5cyn3k8",
  "key11": "MVcQW35NDaCZ9S2BmzCffUpGoosqDpQGrZUSfQkhKZ71z347Lb3LnC6HWak5nGDyBNfeD1JAKCp6SxyQj3X4xCr",
  "key12": "3T2K69Pbn6yynkJvyuCY1fnjHKjVbvLPU3H4Z9sVz333bUq2jKLzEtGVQRigKVzvqndRRw5mbkB6TQ3nkCXobgQa",
  "key13": "2fcBYoiuD1nYXZR65aLo79VjUfAuYqWihngFoLYjWX5rZP1EFKqQ3okaZwRB4jP7fFENnMYCo677Y1YsuWoEiTeV",
  "key14": "3HA6w83NQfLhtkQMHMmDhC4f1F1JoZt15DoxgXtv4nygzeoxnErCH2Z8MKtnpqidVGKQ6nkzsdSE9TicezpCcrSu",
  "key15": "5c2R2zYZCfTDjGi6hAcjSrhMVstCAP1TG4TmG7Nt5NM9UoeqLBvoCvS87L1Uag2eunztGd3TaFQc8mB2TmtgZui8",
  "key16": "55PN7GbkriVamiwr9CxSF7nzv6FXuhG3579tYpdhjTRn1HMNv88oan5aAfbdwwCKPDTYjkb7ovP1xfLN7DRJgEjV",
  "key17": "gew9Hg9NSoZTBLNYBxmk9Wc5s5TxGD2zrWTgmGARzbyvCVfxKgQ7UPacAz14DnynZRqMiYbXUeAtP5eqY5ZkMjz",
  "key18": "iJB29VFEM5MNSm6NmFe5gtuxuAA3yVwTKtaDZwLii6S3ZfnFrVq5WDR6uw78wguo9CuUcYHz4KBfMHuv91PCgkZ",
  "key19": "5b6pVathAJU4KVoyEuBjz7o1aeCThD8xVNEf7uRHiyFSAfpkYCiVWvPrN2SjYyVgmRntNqLf3T6q4XK5U3U3EF4c",
  "key20": "5JAkqzKMZ9H8aTetvMMqzncsFte2n6MBuGj1XxXg2Vi1ib97S55WncGgfRc8fpySoECRFwnLW6h1StMawv5E61f6",
  "key21": "2gN9RvrvpTgEk4HtK136rL6ZKQDWKsMU6R8d6CRKSMwutE2xZ7jx88VaMWSFpJuDhS5ThCmyyUmkGqVJuZMahWkX",
  "key22": "5cXGkBVxtHfuhBPphcTLymxUteHNbmrEJWiXNeVND7nt8gKFF8sj7FPgip8sQD4Xfda8gEQ4NFZxxUZoRQKHwUQB",
  "key23": "4L19BNcsyZhT9zuBzFAnQkQBifdPUSdsWDybaYJfm2v9GiRhvehqtDe5kEpZtWXFsfaLEye27ueE3RanVCqcZARJ",
  "key24": "5MkeGEVTu2bqt59dxTvNoVMvqNUT7S6Vu1XUdEM1viN1X5HnwCp9CMQKu8ds6SL6UWGtQDwc6NF2FXrcHZYoDorf",
  "key25": "4quNBSifmeS17z4fWfgjTJdirQnyfrNaHdBZvemcEnXJiQ3AfyV7xjbETtZTQiYyYkb2UcFyCfkQ5psmT5drHK92",
  "key26": "2f5i3xy946LfRbYRVJV4dg3YsqH1jQCHjHg2D6y8CR1chiTw3yTZyp1y4GACE2go6d9dxy8WY7Q7VdwkrXGMe33T",
  "key27": "4id8gphN19Y8dYF7tFBH1ndrsEZCkYTQKM8bh9E3RaKLHoh2bNJxVV6v44hmbZ9uBPc3dfTg3Wh9rQqmecFLdJWz",
  "key28": "2jbWLHJRuuvwDPbGmdzGqZg1ZBCBLA1MXn8rjjk2SB1ccHoJGoDUNDMRdpQCkbwdpaFPX1DZSrSTjXaNDBd2JahZ",
  "key29": "4ZFmtyTHavPwEHxdNzvBgzTPS3nH21DXwq1K8Qkqhzy3T6u7Kmxhr81kEvECVdit3s1aXyrmCyMR7Y3D5HSsYf5n",
  "key30": "5JuAMkEt8FzxbAwq2jaKqxUVwYXWfinxGUuAiH9qGDDBYiP114w4g9ZYYzVBjFuzhTGaRW3aUPSuKYBcHMBLsS1p",
  "key31": "4YmTvQmUEeMTjEqeepa3FXk6KwmyVpQs2pQtTGz7ZNowsJigJys95C1837fbJ8KkYoFAqt3JvcDzCagm577AVNJw",
  "key32": "628ER2bMk86hitgmc797cWsC3Xh6ZwqtMsHRFujvt6aCuigneJfhGrzFHxakA4Y7GjhUkQe1o9d3mvXhNMp8b4K6",
  "key33": "3FaUXhM6kE2nT3XUqEUDLzFZp4xwzeSuNopSL8UjdXvZQKkargHjy4EjLSypnpT3zP9tw3s7CqVVcU7h6K92dkf6"
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
