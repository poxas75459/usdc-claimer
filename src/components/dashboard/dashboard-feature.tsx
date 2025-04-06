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
    "5s6e9ZaiLp48WinCLHb9eBuAvuT8xENFQvJmyW4UrCXscK9JGciS9j4Jw6r7AJE8i5YaYL2nSh9JWLQEBaEtHA4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ktq6hdJ1WrWagjEB7qRXgqQ2ZDADJUo5gnNyxhTdctuePMswBiHhkBLupLDLzdhF3HF7ZoCqoMEt876NYJ8zCZ9",
  "key1": "3wLDEAj1YUoiMKrs2eZp5An55ja3UQsN1JomjMiR3Whof3c1Mcy3qqciMGqzHwQGUeJjPj5yiW65DsVzoVNrizvQ",
  "key2": "4EPxn7icMA5cBCGDcQadVR99QLj9BMzmGFf9QomS1GSSzaRTUMkmRZ6198sxNjCS1n1qkgwHwhyHXaUKrawDjp86",
  "key3": "2JNxsGjc3ZJND5mxtNL64X4HgzAZ32EUvF3k6A3CWceW74iD2FwjSW6kYMcPdtkDbBp7kyLkwspxiKofQt6oMfEm",
  "key4": "379hBvazQR5mJuXJghnjHsnibpD3Eip4Pe4PapzrAAUqjqRARyGyFy1W6xiMi4VmArHEGWvVwYbZXRfQ1zRwySR5",
  "key5": "5kvPE1GwpMp6jjjEkhzihXEJcTC5rCdATeBL5fyL65LBrUCgTAzRCWRqHjcn22X7oQZRSFBBwJKRaBtMMQQ3j8TK",
  "key6": "PJ5YH2q2N2LFWoLDkrFpfsrjTZiRHjDBmWYXqek7rxKEeD9vaqJXvLWkVuw8jUG4mv27L45VfG2gTcFmekHpZ9X",
  "key7": "kW4bbTUGRt7J4Bpr5dhj6CeiaCfukVNwbmwsQmZeBVoJxPbDF5sVtZk918hvJ98FZLJESicRu3D38uDpsuB6qoD",
  "key8": "43CSrXem92GUFCpHYwzUuXCwC3ePJNKx4PThVXSLrv2p6bGjtu2Hx9NDapCCuWAhjuMbRKp5MpaUABXcYc3AE9Jf",
  "key9": "4enhh7RfNcbJgo3kTZLtYJKqdXyH8DDTdus777nLGcgrwpFwnYtb7LUs37eYpovvkA2Zp5YTkkbtQvHvtzHf1qDU",
  "key10": "4iQF5G7evQXJjB65xBgVU7N16irQaSxXpLpmNbYuQueFmk1rU6VbStZjBebXQcQD7Ei5vtT5ADvLhUyziHq5SwNy",
  "key11": "xXVkS6GDK6S3HVGAptCYFR4nKVYLHdiZpNA4VoRuC6F3cDR6tFxgiBtGiufnrRBsazBwm83F2ibdQMVwGwecG1a",
  "key12": "ndpALZiR4v5uLkfx95z5CjRxiEVtEtLmpi78D82jGn5RpA8utGztdcvTnWBJUisLfiR4VWMyiDq6zBCuBghXpbM",
  "key13": "4bhjwUmQysg1U15DGqAyi4hE9bLqgLYWKsygvjqRDBNNJ8wjjjzbyqZzyBmk34WvVA1xFKXBwhgYry8toV8nkf18",
  "key14": "3WEs47R4f94GUFLbqCkoQmY7svZEw5ePnRkCjahauDB4KT2QLgj8L7bb4offZ23gPcXTbe9CxVyuSrD1TcXFJiNV",
  "key15": "48YkE9agMq83bNFQa33BPDbuMxFw5QnVddRL1oD5e9QQLi1RL57PJoMTZP2nvtnPmEhMiQb6ywtnSYkm7dYM3Ton",
  "key16": "5osErXnD35XUynJf6427Hp4Puy4grdgTzrXgCexnP3jieKbz3rQ4QzpJvRqWU8FamRUej21R7YwHeTNjCYAjuJ5z",
  "key17": "2CPK3CHdgK4bhgJswxFF8j7GyDv3yt5quRKve9G6qiHD6hMBh9G8NVqUfFpynUp63VacZ6Y94B9W1HjRpksGP6cg",
  "key18": "FywGapfTPMScnaE9xoFFvEmYk8rTTEX81fHQ4m75m5BJ1Pyu6rfPAZ4nwQQL9mo2S4h2SupZTRBraKAJD9myZvD",
  "key19": "37xBawg2hfeVqnHuJzCxpnUeeCasQEUDMFQomsHDWWGHjpsxQbPEHFVpkLtUQcNTaParHYZbmnubxsF1X1X8d6Z3",
  "key20": "2kUMryrvPPPA6juEJVxmmZzdDQN7KgNx5pqFmumJq4R3N2wpwMvWm2JnYdhmPCgk5Lxbj9Ui4abwnNh18ENFyLdY",
  "key21": "4ctWo573msCYQCPkiXb9pzwYjQWw8HV7JxGGbDNmKzjroGPtsuv5jRBWVJ7F2cGVXP8JzvbFSzBQtfL5E1Jy2zo1",
  "key22": "4zDNsGAemQxzcWCT2Ej1ZVhoxAt7wzjRPovej4HRJsXcjRQY9agcNFKuu9nYd3mGwWSSF3AbE8TsX9k7GQFPhqZu",
  "key23": "2aSGb2gUo4AgcAWV2FmEtws8FKYv6i122kwazFvo4iEkS9u3caXBSpphfTXbGZSrK65wgZB9fD2TnEEpNL2WkfbL",
  "key24": "5fY8areC1Uy5x7h2T76NsvTFSR3hn2PwJeZef6LaSgtjFJ4vEtdEB6AMcbJ1bhBnNvEbLnZjLYYT4Gt9Rmrf8dBS",
  "key25": "2reMj81B7ug5eZVnABMLkvZYmFWPEiqQPXFmEX3XZtJ1FSQkkiJ18jh8jvvU22ZdV81MXXSfEvB5ykDLkifxdSGH",
  "key26": "3hK5YPeotQPUwFgu6bLD2rrzpy73r2ugxDfUwLb7rUnkxigVLrcw88NwsBaMS7vE5Zvzky6E6P4kJfHx16KDS3yT",
  "key27": "36KqKR7qzvY4Cpu9XjEsBTjJpUgBLUWMcLJFb3Ah1cmsNtqEoavREDyuQ1hVE8coGffcNjwRtnvmYNR6gXYKNP7d",
  "key28": "3o3UbQ1B3QgC69AZSVTb645QGWUDT1r3BkswejWiVdEZRJbK9Vu1qvmQA2Rq2vnyDSyZV5o4fx3pzmqP9HZQMtFb",
  "key29": "4B1Pkn7sRTM5nYUEEasPAaA1tt9eAGJfosXexzCKAScnd8rLcLg9CGnFmWyPuygUp9VveARuYWbL41aWEF8qk37v",
  "key30": "56Tt32QoSxDqctZEvf3bwDVicue2VcdjSypb4CTDR57hJSbQoumzRgz2qAXJ6dVcMntagx9AHegVm3iLU4SFJt7z",
  "key31": "3pKFZGnJ3pov2gjmhDrDEu5F1y5WaJJw9dNpkFMwfp7DxmQsY2UNLvahErq85sadi7AtEWXWeh8bGCzyETdGKKkW",
  "key32": "5qQcp63nZ3dZGCjz3RnzgiGUdNhggTtJUwopZPedTHV8Gefc76XWoWPzZ9u8QwKCjTLk8UkiDane5Tn9HZozVqsz",
  "key33": "573csiDgFth5Wu5Tt85D7wFkeGR1AEBXRRXhdEhumTpWPGcsNGZ7r7BAMTQDrwzVXowgSYXsU5nNxED8QPbosDiU",
  "key34": "4mEec42kRkok1sANu5LPyPkNZLCmfBJ1ncezXyAPRCTibukArfwbHSgLDepNfpdh2NkPpzhRRKEhBadhsAZD7DuH",
  "key35": "4mz6MdraC3etD1MwBev2JN1VR1BDatpW47ftVdepnqWqs5gus1VMmUjpDvMwZSEcWLwVnZFBsyk113oGGqxdPLKF",
  "key36": "5NA9dayAb9ht781BKPgzoZaJp3XzNpRJFQJnTbzHKsZhhT4GEvBA941xvP3B9uWmQDMLheNAnyLqn2rxU174nEe1",
  "key37": "2jJgQj4qKox3ZhF1ZXnYD1ub1p8K7aH2cXm7e4ZL2u73YfM5M9YXpKBMEh7gszpoBm5xsH5eX2mx2sLBXNYC3w9K",
  "key38": "5nQPrxotZdrQ9su74i1aBo19zfRNRyLX84ARp8cn9qezQR5WBrqF5auQVzXBWkAQ66xzq9Kc64QMpnidAXbqvkRT",
  "key39": "KGfggiarFGj5SFcTK6TALPqorQSbY8mELYTx1CZNwyM6AGmBUXhxj7p64xhaoH5ZicBjbYZGSG6reSuZMYNKjjx",
  "key40": "2pwvMJ3V3b9c1CfHnpU3KYuGMiAToUM3PmuNFvSWwP131P8APqovyNrwWdKamU9d9hdW1mEkpVtjYHUN1MedVDmD",
  "key41": "5pxPe2gz428WgA8AM5uUtTWdnAR5mgkFdToWrhxvMrxjXtrKe4b6qYFJqhpNfXzC8og3r77jzBDeFC2gzEwrtT5C"
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
