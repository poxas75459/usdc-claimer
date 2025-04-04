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
    "66V4Akt1PMnqHtsEShk9F3bU758sAYFYUoG5cxHfd1DB61cZVYc5Gk8DBE1isfcEBmY9Myp6H3hrzq2bvEzXgebR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gGE7oha3fGeRNcoyjWjEpBuJdgLmNsEHL17XDTUFbjb3X5HryYznAanUvy7WKKvAd272LYATFRgQwu7xekPwi3d",
  "key1": "5eK8Ls8BwcyLvMyZiMG3aG6sDicYteT2kBPPkXzay9gfpTcx2g9uWPNRi1Ff8rx2cNqbJHnV63vLGHGUHxyGRMXs",
  "key2": "SmaxPTQ9xobzmMQSEwJSF9RAkraMJ69PTSYUZpJhUBh4QSvxUL7LyUjWq5w5GFuRHv3FxhSEqa35ebXMYHXR1Yt",
  "key3": "3STtMm869tZ3tNodnah4cYpUfQxyeRvUAxgjcL5zic5WK6TYXJb2UajyqUQ7EmV9dNr7tB2rgn66tEYs28Gt4fwD",
  "key4": "2w1cenFMdLwdnt51U6b81m61yYbmiEyKBUUMcQHaKBcNqTGgXdyhTu2cv5kTfJ3N3JuGkBCgvfoHKv9Y7dJpGxDz",
  "key5": "22Fese2LkD4n93sQzGMDusA9dnmFaDmeYWURu5HC5tdjynvGLJkCW8n2G1KACAEy98tWTdsAVW2A3pMLJZxGxBJ4",
  "key6": "dRwJzFHSU2DKhhMEGUMXMx9GWFAvGnhZjtv757EHidCEq1wkaSJXjNr7EXgH4ubA97zJTZVroQPQu4yp2LPcjNT",
  "key7": "3p4eZJrS4qmvk6aLgyonsCHurkbesiu7sm72GTMjTuew8WXf9Abayq5D98wM3R3TwRP3mCPkiSywiBFGVVFpJmNN",
  "key8": "A724CS4zFtALLy3T1jHCJTdqjq53kf18ebpm6zU86zZuNKBVzEEPmwSxgS5Qoc6msG9Ngab9staxMv79ExkyziC",
  "key9": "tUjWc2phVdy1mEMKHyzJ45BzdVdJ47piFLUy2isALc3Eck2UCZemBjmBdJDUNbVVXYuVQSZxGTeQg2m7uK9t1im",
  "key10": "5YZv4sWSMG262Q5V2mLQmJMS7zZBdFCKaDZfVDu8i4iqy4eWETM5Fm73e5xKzjPCTz8d7mmy4atifHn4NYvzUjM4",
  "key11": "4ZHcExNwz2KqPWecVBXBk25K33JyFiV8CR6NKeJERmDHNoo4fKSzineg9Dtg4yxPBqiY25skFKqzXJoEUuYFSEpz",
  "key12": "66AAzcxcuUm5zAAtfWQoHWt5T3HzUnrL9vj7ea3NSa7EwHAa1rZErgwR7Bvbxr4YiaLiyFiUTSVVo3e63Hd6Bhn7",
  "key13": "2aTzB4cT5KVfyzTDfxyzrLEqRn4wZFqPFDzVD6c5D61vbzk2tyg9iPSHdgUDiGHY6X2wd3f5p6RhuygtCjALutJj",
  "key14": "2f31q1LD9a5XDRxsV8Q5PcgJQEZTm6PyB1RigqhjmS2SodENVknookfG3KcnkSuwngMQd3jzWab9Awa2Fx2mr7qf",
  "key15": "3rcvd29Ft414Ecpr99Hw2tK5demK2GQhjGbyjSnUm9FtrTspp7NPs2kSqpWy4GDsKFnQbxG2GzDFWTT8YWVxFetC",
  "key16": "hByp35PuDwEH6uPXM6pQ23Mz4Tf9bAZrhqpJvpJbRNBw1y5m49Logr4p35BeZSZufbdGPV6LKdfuji366VvSZeV",
  "key17": "5nMKFvxPd6NZeYoaxyadrpFen6LCKae363EGasXe6m3byQTkPB2smBEeGe1N2nCsWh4SPgraGqMNZSRU4YiZYjCq",
  "key18": "59Z93ossU7NSbR9N4jzcquucXumeyTuPsA4bAe1ToW89F9scjFEpHGCk2LvQRkmNnMQVWcHJcsr2pJ79zeXHa9oP",
  "key19": "4NMx5YjxFrorf5qMdegXHDzjg6m3zwHtofLJr1aug4TcQf6e49GF5JM3zWeXqFBmhMYrUutdjHfuEkL8aepW93t5",
  "key20": "2USiakAHEoy15rKykANtK4LdcxCq4TJfEjDrDn1d4ovR2JR17omQng1H631xdmC1ob5knzrxekxof5xV6BjWuGK6",
  "key21": "3CABBJWtgVr1yEgkkoHfKKZ3oHUFzBcxLUHoB5FBmGWG1sYk45aRQqWFkyd4Y1C7YmRu3oJQUaNnb7cjk6u6fVfu",
  "key22": "4QmduMDHynb6ANcABE4iNEdkaqFzUmjQAsqJPNav6LVSmTH5k3ZVbyKgat4himjWb7A1QPDch5RMGLF8N6QXmhk2",
  "key23": "wAYvjU1WveDJFogt6Vj52UGqxb22ZWyL7ofUmTktSC6QtzpuEEhU69ff7rkmhZsb3CuVwivb7qMrrrbQkGdhsA7",
  "key24": "645VCu3ujL5cRy2C3reeCb1BUJa86Ptn45BkXvW5rCBgiZbxrUi3ofrXKcFKWR8F1GpfHxoiY3PFDFGh7Hm1vcyV",
  "key25": "4NJAM3sjwA5hz7xJDHd8myahjXGHB3e36XfMhjESPdGKoCpXNEwNcULzNrFb21LgwnM6n8JF58FahqvQ61DPXZYw",
  "key26": "5FvF7uuyjegQ6ZK2jy6tQHdJrvYLQWCsQgBYACPirmgR9MN4y7sfhCxo5D8x4UatCZRNbkbYbZV6CNGjaCoEv6Db",
  "key27": "P9SbkkdgTDBmirYCFYeib5BwpgtnYreYuiVTVE5fFUe46uCnVpAkdoyC7dVAgnWJHcQ2JTAcYp2AmuGFj1oSnG7",
  "key28": "Hrcdf1ctuBfbjRrFxdhW2zmuh2Q4ib62d94xic2ZZzZmPNYWAqshcZPBkP6oUnP8JmuecwDAtnan9GVJmp6LumN",
  "key29": "3R9Kve5i72ADLAHBace7qqzA8hF2Uo5kvMUJ2dqtqpGfSTu5RypVu9RSyr43zrYizc6LE8yAdmxNf9m33k4LjxVu",
  "key30": "5Y9LwrsBH9etLRDE3RfXHH7sCxgvbNG8UNiSfP2TZF1dh8YEJQDBUbYCoZ2524b4s8NMyGqNdBjzdzppgD2gmcu8",
  "key31": "3JqNHhyzbq2qZeUzzP2vZNyuiieuK3BqHU6fWoJMzYgRY4ivLJ7HzKDDFUwm21LotkCMpx9mqsZKamoKRvBNHsg",
  "key32": "2KVfaBZwSkMgZRDJA9E31TfW6qL8uLvBHz4r8rMbe5bPvyTk3D4igGZhQbb1cXGSKbRrtMSSxwjbu7mBLJnbSU7A",
  "key33": "2d6npM4GamGvmRofrreR3j5jYcBq6hKPgzGSHzovYuEvraAdM2wfPdgp38K5c9qhkecropBirWcsoXVQtMuF4USD",
  "key34": "2tFqyBJRfNktKvNPDmqUR1sZkBkmqEkEEVN4Z7Y8CLWnu3KePnT4UKtNUmv8CEFC4HW97UQdmrTcGVd9iPHjQuwa",
  "key35": "4FxUKswVbwS8wzy4p9jTcKd9oumkKiU4EM54qn8Htx8zPEPqFawfTXJGMt51bBk4Ct6HQaiSKTpDWTGSXTZ21H4e",
  "key36": "4nBAv6Y6JXTv8F2pfNdxsoHMXwRXEcTeNVVVTorxyH8GUV4hpwUJFyni3kXR1u4QLtVNgsB9jHKsx4YJc3Z9gk2G",
  "key37": "4rbi9kfstK7b1NuxkiKXSbj5UGTzxY9x7wytNK34CEHHJMfa7maP8NpX278bHMo1amyntyws8UNytCwjiaKUC9sf",
  "key38": "2BXEZUg5CfpGxyKHf4NfVDpM2uLMiJMYByihR29BQ1uScEGYmRS2hFyVy8LZ6y6CmpQmE6Svwu6fbrN3eS24LNEo"
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
