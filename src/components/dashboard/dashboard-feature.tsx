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
    "5a2DvqfE4uX2NuvUxyAqNcPyBZdB6EJ7fnH62Gr3Lh1wY5wbQJQ9tP71KRnYZeF9UnMv9Rdp7GSnJGvBstfu2oxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTTMm8JdsdU5ySr5q7cK16Vn4gLfguUdqoJXQ7E1E9MJEb9hSLFAoJJmVfj8hKmK4qnxwNYc2ttdSAK7KNTCMvo",
  "key1": "61qYnioGVvBWN5M3FEryUtqaStbV3ixU8r5mjd5GwX176XEkfpJNJhJhJhDu6kDHU8E1dsikbhDZqkwKyoJNFTsQ",
  "key2": "2MCAKS193e1raxhXNZRXqsePHvDqVRWMdJsRSFribDjd2QRDiiAT5UpWMCen9d5DdDWjkosRG8MuC5wPmt4t81Dc",
  "key3": "63ajwtqKqrToEuLZ6fP2rhX1Qi6HXFVPNpQxn16uVVZ7SrsfBJrF6vpvCLQoqyvXsuRCLNKaS4PkkaG75PXQnYD6",
  "key4": "2rAJKZYKKbEQvYVqNxFMH5bzY4s3hxwjkyy72dQvUjnU78uci7pvBF4WNBNwDxvjbx4aoDNTPKgrs4Td3bWGKEJq",
  "key5": "4dJZ3FLhzopPVe7NrQxsHFLophxkXaxagHUCLv7BVTpfvWsXFK9aGoD19UQ7om4PAgckf7LnoZ8CCgeYz37QPrYt",
  "key6": "5JF4XZZN3hMiQANZ7UywtsicpqYkQ4TzDydrNq5GKpVULVyp9xAbM3NP6jLrKBGUSSeZFkFmDaGzU9EdiGnA22zj",
  "key7": "3ekcXVugBWqxM7nxTRgtxfhvRZcgynUrYKsyp9FzuWTFBZEmRgh5CdinnpdhjpNGxpc8J5VG6KeY6gMWwW356owh",
  "key8": "2FgJ1KsCTfvivQsYy9jRuV28HymrNWg6UqGTsaCPjWrghFsg5eKWZ6FHgMTy3hgXxR9iEcfVAY9XDncJVcJTLJFW",
  "key9": "2ZgTr89S6THad7wmnupevBqr7UH1HisstMV41hp221efsXL3vv5VrmXxQGtYMZbMuYAT9fbWGZCBZtb8buhLLVPV",
  "key10": "mzQ8N9aXrQbeEjHmsnXMRt2rxrNbESgd2RYimMrE9CYzPoBeSWRrDcqNmxquX1BYoghZyqe3ffCkPJdLUypDbiG",
  "key11": "2GHJMsXc6yjSmqkY6fQJKv9a55ELTnCy1Pcgf2NRyL387zaYhf1XQyAusdRacZVYQ4eZSdKajtEb4g1RtMBiHEDK",
  "key12": "496BpfPnk98q8HaXKt5dJ9rbp6Q9hchnv2n3NzLCbwJogKr1xP56pfrSxsKKheyo6AqDtU6LXx8hoU6TzMXmTq65",
  "key13": "59rSWRWTM92aVbZ7HKNwLLLEpUwqi9jZ2wBBsgx8fkKkV4cx5R9GkkNM2F4Qgfuo73VJuPTVKqbaNimKCSWscEXq",
  "key14": "21FaTj7Cm2PqyYt7qHRMSz4SLGsHofUXDVfUbbDobkHgyd3a8LdQDyKeZJ9tnjHCZo5RJoQx8FcStFuByoNnNrDZ",
  "key15": "252UkM5nH9QXaECE4HHspb9hv5UEQgAmgTMxxDyPsth8Y3Kj6rdTicLVAuiSSjHpPD4o6zUV8c4je3j5DW7amoX4",
  "key16": "LJxWcq173ZoewF8eWsGzFVVGuqDY6Cj9Eq7kpvLcfQ24WbcMasaRQRA8wBJGVAtysuQeXfvhXQ5FRN8GVJty2wt",
  "key17": "3H9sJgAico8M9g2LH3JWnfvpFaMhnZv6dDc8raUxVjdsPuCTJt571JMKiugHevmXw8ATwLK1R1UNfRvD3VAgxD3C",
  "key18": "64JHCgnessnrykGwRbpMR57fWhHswXcEd5QHA4cUunBX2sr2GeYTnjrCFSc6MJnfAMYUKaVsLNZf6R5p3QJuHPqF",
  "key19": "2nuiYVBaAMRGy5DqYikkZU6SLRfck1KXsDrsshfCVAUnAwe4GL4NtLqaUUsxopV6YVcxxjHyGE1WXfwYLNNeZirv",
  "key20": "k4Pm4DNpPe71rWeqqGeN3bU7bjow8JBrjUDYBx3e8gtoE26VnXmkuydowvht3zq7nB8h9xde8ZFpnBiC6BoCqxv",
  "key21": "5w646XhGQQaVcRT5GA6rEqM2SEZmjfSPSy69H4SKHpTR3wPjRecJmmGGvju67VnvDWGe4SQnJTXnRoF8LsvDMrUv",
  "key22": "5MyxwCVCeB9sY9UvXnHarThcjjsLG6YTnTrP4asycRvfXkJkiG5ZkQsPhWw1Pvg92PBytzKnppY6sSR4aLJEtgJc",
  "key23": "35S9kECaB8uvs8K1wzwLZk4co9azjkhYvCfrtWKyGeD9a6yDKPEPG4qw945UAGUscBmmwtzxSc91DUUvjv5yKkfE",
  "key24": "5AXtX9Lv2xEpoyKyLt46Yv8nCPNtSwsWSGKNeSXhTkEhzu7aTHwqM52Bh1ex8xTzm6JSgxpPdNT5pd2k6ccGTFXM",
  "key25": "4cshL6kYmnLkfYjzoA1X3xitSFwEfTXhqs3sNBVkkbULBhUboM31z1CY3nHjFnfbsXPSy1KWdtvWsaBMSFSbUF1y",
  "key26": "4rmmRaeqgyQiWP5Pfn9CKuw3tPCGvsDQ3YijAeZKrrXAeAE3foVmC8yvEDtN8QgAibHE3DYFoEKjBvchLExkbeSg",
  "key27": "EAucQpiwTpBsSjmgBMSMhL5WxzKPGctPykdiUUkBv3gh93V8KDdAK5XeDXurjeymxRRWVcKr58a7hLoPEMQwPYc",
  "key28": "5ph6zJyWJDgGge3m776BnHHua296SLGvrqqbm5EuhgacM3PpvRh33iFYPFu2PTFzmPbVzCZQVdMS1TrLh2bCgUd9",
  "key29": "sWuMFLeZkcQmmckbrpnbHpKKGMMSoU5d6bw29UriB1kemuBYTXaRvzQdKnAxs87TJUawUw1E8ohpmvVWYz5wCZ4",
  "key30": "26YB2sasJk69ekYZ4HZybRyhHyxKrBMzpcG1Pk277imSGzYLBLPkP3PsBuawYWQYEsz344iQXxoM2WNKTA8s2xKp",
  "key31": "kv5GQciZZsQGzFGg2EJQrh3jfH8k8fxzF5BLrNymNCdyaqa3fdfhZsUguH5B6RWAnpKypjj733Nexav9ci2J3pk",
  "key32": "3aQzwQinwNzY8PakGDXVpF9DoqTqgr9KAj46AsUoQR6Kw3gdboW1VGkh1HT1Rt8dUWEJtbiFVvqHMrRHKNwsEGT3",
  "key33": "cFdFSeAkE2yCg7oJ6qSv9EnsY8arE9Fjixi3JbMU3VQRBvy56TfEFxrDSvXCvtvD7kEV97NPtzgeLWFsqSnJ9V8",
  "key34": "5quaCCGmcQZnXBxnp3pj9jHSQ2Tk8odFJkBkHiDpcCoRR76C7VzUThueKsCeqXBiDQZaGffoav2e1QXk9Hun2k8i",
  "key35": "5XHWQjM6LQwUBNpzJEFhTKNXtpxLJtFUuxjeLmLDvNF5HBGQKy5xm8UvCKkvffqujsQXwuMbb35jmVaSyC8fYoEt",
  "key36": "5R625qa8EGCSAbpoSqpxxKhGyU96c4UuFpab3NViiiiSB6QvcwbvBE9LiT1mAPmRAqkuQXUS1w8hJEL5WMXJnLua",
  "key37": "62jKG8LpYJqn7DXm711rE4KY3JJbpeH9QGj86BUbY1vPgRt4nfRtafRbFQfGAVnKB3or4ksxQEXbAgnrhN8Qqdyg"
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
