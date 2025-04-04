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
    "vJDYozETy4koFoA5jEqYVoB8f3timvySRKv4nBpocv9ibSZSXxqn2osqT5eVu36d6gQTn7QN8RVXDi1kgpx7JzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QuyYTohUrbsCohQifD5RZDWcSHeCscv66RvP6F1N3ZURe52z7Lr8pYkRF76DVNtmyUeXeC8fDbFkd8MwDK637vf",
  "key1": "5y8iJmH4CnQBJFAJaitu7LJ5RsCt54PRwLzmnq5LgD2MPwkJyEDFJdx9Pjk22tGJauQEKkUhjZq1i1m9tXjyLscr",
  "key2": "dmaVFQFS5HQvYwWF9Qur5y2sYD1m9SoRGdHEnHacZPcMKncFF3s6NikA25xbSUWW4PfqhVENgH6GpTgFWmqfBTN",
  "key3": "2CarTJESdkirgeXAYn4aKcv2aRA196gUhwfzXDzRk8Bwa5YchhRUakPoQnoxBFDgfQocr8x7UbE3FXF5BU8dB9qe",
  "key4": "xMUfeKt8hNYanduDnvfrr6rC32o95gsZkQkApmDT8rPJHRMuQf5h1uqJYsVj9g62vt8QUg5p864GRhYsvsgwbqf",
  "key5": "3BPCoAAuN1FGN3Et2mEST2xb9JfbfTAqvt9EqZRQAVA2j7Ao8UzSQVWVGhEnwmnLswZfBj4w86SrjTZjym2qm83C",
  "key6": "3WQ3NzaX1JsFnf8KFFz85g21YB686bDgLo5w8XZqhdBy9wdnufdSmphetdS1SmfePSL4wXgL9TXNXo2MeBzZgS5r",
  "key7": "2XDE5bJmfHpQTbLouXHHTj2qck1URUw4nGQNG4RFTWLWhQvCaMVLWZdtMxSkNytzceaNf6NoiAQUSTA6Z2F2zHN9",
  "key8": "sW1B43uNYGg6Y1t9VMHvWLTnsEgRtvoMmErdA83D8nmFiJZJ2LMwnR8Ldo1VhvDzGMvax151Xt1fZxMmxM4ACYR",
  "key9": "szm4QFqZwg9LU6RhsLqRQ1QCDKUEPkvLyZWpje6aUd42oCKsKiN3jG4A8mJcj7E3UZaJutZdGSx9Ak5Ak8uxuHr",
  "key10": "4xebeQUfJAdgwS2aJEgQYQqCJ8aksvyJycv9JSwWAcyuQHDRVhw6LR6RBre2cdnbzKJynHdCkiDkAr8kjNHRaDmR",
  "key11": "5Mogg9neXdWRVm8wUPBfR9BbXjUbYZwDBRz95dGdydRUqsP3eg4w6ku5DNJhMKBjHe9kRa7TsF2G8Z7AzLSJSXwv",
  "key12": "5rHZRVuShg66yeCBr6ENnfsFSm7j1XHVA46mCYzCBFkdWi6NEaYSNSSxxzF3yZ9dw6qw4VHM3LfZTB1tXCKLQ8to",
  "key13": "WsW11rojQ7f4X1UnMvxA4NyDJfKseLyGA3d4ygsXDWgMyCVghQJDrUPpEa8oQHp9weAyFoaq7RhjGehkD9vNNCM",
  "key14": "4cp2Va37QCxhJsjzkvsyXEmsJoDkzgubH2nAJdAL2jkp2FkpBde5La31Q45zCqZwLbjqSojdhi9w7K1PGdX6zLDv",
  "key15": "iJGDJJUahtxtXkd9PETTMjCP2QtzzHJvX46xgCwx7mnEJ51kMMpaZAWwwkTRyhUzYWPHGMJzCg3yvr1aV2pgjQ2",
  "key16": "4BLjQmPwv6BMfP5QWxHidxiLvtfboojW44TTkXqM26im51FByDYJoh7ydaM7G4Eyv676TsEdnPZpQBELSJYdVWJF",
  "key17": "28YhqvFgeEdv7or48FwuiGEuYn48Qu1QKLLkin8hUc1rnwZ1tb2QevF1uRZ36zyFr6uykhjA54Wo9vfhLmqm4vdT",
  "key18": "47ekt9SQ4kjWDpfNto5pYoWQCryDZnBh5BY7ZLTpNpZfgStmRdU4AZhohueteMQSyfRSqqMp3XWdy4MLAysUTMB2",
  "key19": "5oxaCpZqHURMXvYX2nxm8WrZf9yzVfiUiPzQ3Q6gc1PCpRRsDq3QjKiyPkP7y15kae3ZS4x5ANoEVNdZgxgT1Syj",
  "key20": "4f9pbvHJVCHNhs6ioD3j8GXZsmN22yA8qtKZdZxsQr2GWDBWv5KgkaARGWtwDDvXfj4E1W6nm2v1tq3VkkQGFYwf",
  "key21": "2KJgmWLWknuh5xVgHQ3S4mBwJ8MNVLjHe2p5qM59sMXY2j8oSsmhgYZakigdEDdKTBnaov9DhHTuVugN1gXobxYE",
  "key22": "54oWWUGei8FLvf4tgSSi3sFWxcotwiQCZjYbLKiFRc8CkmyFJULGqbGitCoYee84TZCK6bWTgqPEqyhYKHznEMbF",
  "key23": "2G7wSpY5vG56jKEiCJDFSkocvxgq9gafWY2SdwRWKw325n85M7BpsQrgbBZ5MywBZLP8oN4EhJtHRRMtsouopnPu",
  "key24": "3YJRNzwji1s69KpjgzNrQEfTEbR1amgZU6NwsMpcacyMgTAfa87mjfqw9MReVoGgUPtxoyUWPByUbRMTks4qQqS6",
  "key25": "4Q29QCA2zhmtc3eXcEJYKmGbJfTNxyvekfmcTH6g9UqHNxveRDgQRfPbDiz5CufbFmJ46Y6tDM7SThpNPA2xNSaN",
  "key26": "35dandkixZSii32i9ddLX66BfsvzQas82AX3CtM5Z7XPqGH8Un8wVgVcKVD3kqDn3FKfRZongzuKkwCGW9NjQSgn",
  "key27": "3AhGuMeXUNdTtxCY6gv5X42tYQAiVtN9UPX9nTQCAaiZ8o66aNSxyw1upsjAQhwVqWEVnk16j83uQnTb8U6P32Jc",
  "key28": "3X6HAD47wJ3mJ2BeLdPCHLR25A3aXGi5QXbYDEW3iXbrb3y32w3RGrLjzfuUccCcnZ5eDwbXTLGBWjZ3sLkmLi7w",
  "key29": "2m1SQX4YnRcgaN3dLztkwVSyr7RjYgmvKaCncE7WS6zoEQqR3Dg8qsYCeBsMuqgzvBfsvRMsgVbnpgB8rNDNuD98",
  "key30": "yzXeZzK3CWFY3WAApTH1hQUWbdmKHvWhwaTtf5CK8Yo7Em4gEc3TyWbkvRBRAmYpWkRxF7siQDLD8EMjvVXP2fK",
  "key31": "3qq7uRKtdnYwyyVjJTMuHb1sbvhb9H713aztemy3B4zPZj6s6tS4xGVnVBWd2cKSmg1B7jZygyiT3v8t3YAg4mWj",
  "key32": "4weAUbUSwBMS672PEmurDTXrLcx7spmGdotAKBJN7Xi8b98YCSsk48xZorFGoXmx6d46LHoUgMdf4qoFUgeKFsWF",
  "key33": "28nuDiuaC3AcihZcnN5pNRK9vauVGbhDUs178uNG7RqNJLyn9KGj7Um79SDYa6w4t4gQVJbb5AtYjNnfyhrpGzhy",
  "key34": "4MUXBh6B89KALtyVWUHcU1PNBoYNLtNaVBrfv67wNFyYh2hrCzwuQbzcDWoAjEVtHVLzx9881EUyKfiH9wHrtbHz",
  "key35": "3hLRDytE7AT1fH64jtqJSQeFSD2PjMqyxK8KkPjYeHtoHJoFmvQvgwtBTkaaxQDQSGFhSJf6tAKbEwTpFEe5jL4"
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
