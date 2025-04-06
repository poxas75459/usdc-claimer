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
    "3ihyUVB9cXwo1bRgcJth9AvWNkyEX9xu1i89mU4dE7DAaTGTggfQ5J1CcePNXTo9kDgPsL8S44DoqnAJPPFuvU2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VrLiTnk2mpMXA8Bafcks83DaqsasU54MWMgdP4Xg27itpjM5UwAZwPGGJ9MkvBNNvwrDpSBCvS8TZMx8UjLxNF3",
  "key1": "45KddnWKgyQM3t7zzLaC9BaSF8iCTsrXgwtSGwdWFCyykRDZKUsFg6H1bTVhP6bd68YYS6iU7gpFwfEoc67VKT2Q",
  "key2": "38UFaWbVLSTyqCDWHcGVKEJHmXYeabqt6ewF1itnT6n2Yax6UrtnAdpzqykGZJtqdPkTewG2jZvMCGNgWYTWK1a2",
  "key3": "4Uonu1JyhFzdcdJaUYA2kLLx8cwJorCVUUEXKbEYid9ePK7eQ7REVvbZ14q7JCtPXeojMCiAVHMXwbdgmHQ6GmeX",
  "key4": "URaqtmc5o5Ein2MaiWE7cLQLCvSdm6ZqwmHBYTjPUKhCwYKdYxV85pjdUnFWe3HSAzCsxcDqKhiB5tP37V1MM7o",
  "key5": "ktuLZEYW5rh1DC7BjbrAzhmH2dTTNC4XhjBsamyeUzsXZUoMTeAoGuWfuuMqK2bbf8BPiaFFjga9EboTqgwdA22",
  "key6": "SB65HTadsXWFLhT1yCdAwAfFbR2kNN1X7AmSnj8L7Fpu4NRjaJkhsJNuZ1QR3uQhsDnRXvqtiFtqkfn9ojWuhzK",
  "key7": "EmPYtRGUNqLuqdEknhLoyy9RP5EuF9hH1i2zAJw3n351SSpydCLpKvRHWuK4jD4cos74fKrZhjJAJTqSiHypJ5C",
  "key8": "4LAU2Enjdg5GtyUPzxPAdWuJ4qGCgBqWqm9ao6Gv16DpSutFNNgFPpEv3RM6vwS4rk6jqd6SMrgTKBagDDtgvXom",
  "key9": "EGCPLss6owrvkEMPYzke1KjEAqzE839djkLXiTnQw1e4Bg5FL84zs5pskMTnUSh2PDCeiva3SKcZZbkyr3CmKSi",
  "key10": "59hqG9xxyDR4jkqLURJzwUpiCpB1Jqf8tj3nFMGsWUPf1KRJm4K7xzeNkpY1KTGHETXwvvPubAh3gHWhabMbeZqX",
  "key11": "2GaFvhxAkKVpCbyT3iUu8q7ctySFg2cwxW3koUnt7mrukYkPNXt66og1CoMEi1nBrPa3HqE5pJjyhxf1mNxR75Ko",
  "key12": "25qwYgi4aoc64wUKksMmWiTbdW3StUJ7c3EWVkzG9FwNhWDQuDs3f5prt9gUs6BbPUbkvhFHbUaDWFdAan4Yh4hY",
  "key13": "5zJ1vvPw1qDxAYc2aViRt4HBwnRJQnjtVCVp16youuqxQaxZ6w9XpPrg3fPR9neBRsTEiNtSaR2cszwX57m3d7vn",
  "key14": "5NnaR5FNbvyRcRCRupaGPNq8rA9txbjqVPZ8fQm3Vbv5Tcrpv9fxxVeXBPGV5SfSAfNALpUUMg3x1yVVWb116Q72",
  "key15": "2TmwsGVXyV59ExkCC6zMokA4e8XfoZsyRhK3SFkX5fymKDFcCmKcMc3ChGmKFMjm7rXsxUmg87YgA47AZtj7fEnR",
  "key16": "4TvDGR4hGr5gXH8CjZfDjLSuEEW6NrNJwrW4DdwrdjqdzfMVRc3QdLTmri537iFekAVyV7SFcLQKUk9rC3k7RPvC",
  "key17": "3KScfYVfsFMgzUDBnY91mpaNZJpCz63qPL5Uj11viZKFYc6U29AHAnRCSiPFan63L7AuPVGwksgc9S4h7u793pAj",
  "key18": "FP85QK3fPGR5TM5Q9R5cAmDYDo8ZBCVquCPrS8naMpqd492MV8UcQkMjE8gw2DHvjzsn5ypv1Vt2t8fdLjKvajA",
  "key19": "3hECwteVPB6swJkCwXmD3C6rtAPpGq3mu1vCWV37iUoDiKb1vCnTHTH8H47HTQsLQ6MYh4DLizyLnnNDtfjYVARV",
  "key20": "34RBvERvJj5zUEJvh52wAFi44gXKVJanKuB9HP4PGk8pjCXFqsxRutd56y4dhmLgHNesRPKK9fW11nbiZYpEmRUH",
  "key21": "3Ka8N2X38ZEDkZouHsa5Ymfu18ezNDiQobavpGFkj91e5rmGdvgkxBb8MjJiZ1judNQ2McEqWPYgy2Kek3bGVoXo",
  "key22": "42wkKqqhjxuVxpEmGoYuo6CiSL62x1KdDCM3sC3sWTUHwfArVhVyWJ1grA94f4Le236aEv9WVchFaUXQL2y8JAZq",
  "key23": "3LpiBt8JgJwiDE4DdQoedKJauD86NfhbHQzRQ9Lsn4ZHzgrcuUJJ2qGPcD2hZgMmgcNXZow9zYsMZBYgwLux7Rig",
  "key24": "2y1oQks9RtsseYCLzbpuuF1rN3ki4uMj4pwMsRPU2rKMxVHR8Yftb66ocB2QswcsQ8NFFQgwtYdsP8xAczxNxDEd",
  "key25": "5H5y5QJkxr5cu8mf6KkAuCDormPVvwLPibZ38abVq3htSvUAZS4tnq1Jtp8NT4a6EvHWYivFXMx8w6BvhasdFoWk",
  "key26": "3GARHf4ZN2XZoTLnxZt9u28vKjYHVpRKGTcBTVmfFAqTBpiJ31KeKEVtVpyaKuBxDRK3DaVtAgjsh6RvL6QCgpA",
  "key27": "rL8Kpmu9gjMKNkdDFiPhr8qzLCuY7XVSeDJYgscUShW8UsP73daVp45fWVi5M4W6KmrrMxTAxuatiQxWoGyvqYu",
  "key28": "35zom6RtZKyNF4AG4say2bS5Ly4iJ139Ra1VK3hQp9gYPexLYVV9C9apnt3HT2GTAkfZ1SqEybw3i2uPN23wv6tV",
  "key29": "3VSQ3JFxKvbxrZdC8kBdSDW6ddsy7ZgSauu5B2ftt9rgSC6pJHjaBgxwc9CwGtcp3Rc4GPGjvn4upe9RaPPA4sqL",
  "key30": "3j6dzjAHDcBCGVkDYHhMKXFEnf6xFw6UyRC7rPcQAuvSJmNnTZeC6Db76WKWyWzaU7Bn4Hi1GcjFGNHD5LmdWynS",
  "key31": "Hig3VLJjXnd3AmPffJJaQAftecod87tDJCLf22x6ZLGbXtwMRgtouVZb9pwEt4hkQpY5duhiQTAjzc2adADNMmL",
  "key32": "3QjtcqMXWg9GCX13twvmrkEStDtxbHbEyC3UuC75ebjCpKwTFuwLQtzR7S439ux2RBJ3Xrtj3wxdbUhqCvTs9nyz"
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
