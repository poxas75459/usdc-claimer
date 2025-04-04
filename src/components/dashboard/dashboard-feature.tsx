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
    "63uRHEKtLAAFUfGSVquzYww58awjEfkM3PJZgsasWbcm9oWZdkwtX783JaUN5i2YiaSSKkox39sZ6Sz5re9nyAqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YpT4Cm1CXPhZaLikKMcM9a1dXWw3aBkKgmMSqE5SoFRJSJ1WCz1AsQwfBqRwAK139G6jN6xkBGmV7joqQJK398G",
  "key1": "47nWExrGSM8mVAH7p3cxP7rvST3zdBdDR6ieV5KWZtqEJfzCsfk2gJ9gov6qkBYYmUbBgAxHE7iNP1aW63EW7WbD",
  "key2": "4Kw8DR2bPfDiYGtApjhZutBf5Bp7BBpABQe7267oBjchdpmgsh69eCDKkuAGjsfyzfRzYTBHPTq59FCuxR9u2z5C",
  "key3": "3opVvZKBckQoJ9KxTSUZ751USUD6yqjNyHqmmWetQcNb39MmiCJAfXwUPNZTnncCg5uLAiFRhiDK5YEarqXcfAra",
  "key4": "25i4TR2Sr2Hs3p4a2xkPRxxDruCR3Vn57baczhMDehoANvEBtob4ZzADGokJ3co4P6afrbZZ5W8ue45GfUTLGcF6",
  "key5": "3RTocpEotmbmyjFtVnQTktYB5aK95Wb6bA3rD2MfzRwKRHBqXQEfdeuL2vZgMZ3NScAMU1FMGf7TejogxMe8ZskX",
  "key6": "5rzNioZ92ii1ju88PVB6QXknMrjpi8f5MmJ2cBLpoNz6GKhx8RXnNUM2JTavap8CzRw91DJT2DCBe18FWhKewZsf",
  "key7": "5RSJ79Rv5rt2t1NX4cSwm4uTA7RDswPAL2s4gc4i45TrF3XqVtU9Vhi8H2KYDLuhZeGM5RBB3ZSBY9PpwHPH3k4w",
  "key8": "5bKwkDtEgq6kyCPQVLSCVPq6ZGn8QSNCBvvPspXh2paxUjfudPZF1r3fg9KP7QwQ6y4rWFCPzBkfgVy9DGdrreNJ",
  "key9": "FUsMraFveguS5RicyqJpANE6ZZkSYcyrvxTeup6ujbgmwJY3zvy4QXKr1nJPHPpdkJXLfvjb9Vng5XgVf6FUZJY",
  "key10": "5GnUL88DRxadjja5hP9gJnWTgrRZRnfcQzaqLr7SVRuwjs9Sqqzd8UZ7xjwgoyBr7V9pz7NChEM2bhYAk9QmiqXB",
  "key11": "5Rgx9XYTZymGvtEEoWynWc7gRpJG8SBrDo1oeqo6kVBoRdmytDUBYSz6ZrQGjHbcYUUgiaFPsghykvASYGNT8EPa",
  "key12": "5Zkb5FyUyKzMr8tLE6AoBrdB6CnP965ASaQWXgnLq73jjrNoGpE28Vi6W3mHzps3dUy6Vke9HRfTVwugVSmfidYG",
  "key13": "4syos4iVgw689pXJdAX6wQUvGXE16QYa9Krt6BFxDsZ5SEVtqBX59JKiDnkL5XewVxRQLquN8zHMHCcSLonxTJWJ",
  "key14": "yHVp3SzqiEW7pXWUruwvqSLd66LHBicbmuG5k7faCMbNNjadLDank6HgHug3Q3stPHyCGYLsWvCwrfPx9LGC1Qm",
  "key15": "5LLjrQa3jZswHk2YFz8rEWHahiMNoMHjnBLYJCSktcXnRFDBtJGW5t6aoH3YRk4btDSnubVRf2oyWt5mPwotZTRJ",
  "key16": "3je3BAf39L2fyNheSrJHWu8mt5qyPU9MDKBehZExFMDn4NJuSWgk5GV9SGHHXotqFYFXrC49nqF3ZvqM5xGRYKRq",
  "key17": "5gpJU5xPUgy5Eu2Lfoi9JgruYJpXpA3ZYRh6W22ZpugjytUfVJZtk3DheYjGz3q9ECTt3jECCa7GCb2cNaTqN7wg",
  "key18": "3mDiEEpiYQ6gMgRd3fM5M6xr5hqfpEHVB1XbJwzbTu9Y8yrcGmp1ev6tRqb8m96FsLxci7f32LFuGytB1RgDtsV",
  "key19": "2Vp3dbkwmrbSDPzFiFMZWs3MgqLjCGpGK4z6HMFGoSvbstqKcma3LzjntW8taJKJySRDMJRJAHxEw5u8E2nN6idE",
  "key20": "AHJH5HLMMNqm83HbcxUJXQxhKPjhSHo8muqEebWNGNsNmv68wPLetTr1JqfGgwHqtQ7dE5U3oU3esyAM7RttiXC",
  "key21": "4L1uXbskzcmACnZ2M3Rqx2TU1ujEDWxQaaa6hMCkvdup74jsrauXvGyW59ZhGJK4zUTKkxSWE9q3vPVGydhihVW8",
  "key22": "2gqf7DRNTdQbQXCRqM8ZeJLeCFF9jdHLyqnJVJsHv7nuWzXw1wbYAgzmCn6PzaEujkoD9D22Hj85Yx3CGLQUwxBA",
  "key23": "4zgnxVETToTynkXHZB6rBq2SSkNWtqDJNPxsjgXrA8ymTW1qquFBfME6aqUBiRuie2zGtkNwVHEqdcDqcsNNZoCH",
  "key24": "5Rd1djnCUfzXXhiCQq6459AMKcUHD6FVRy1MWjJ3skyPf7wLGL48U9v8ruvSsa6RJ757yRrtAVRtHpn4EUJ1bNFS",
  "key25": "5U3xmHHFqaM5hR8qdaJ6akHCgqyHaaaFJqL3zyExpqY4FBv3Squ5GC4X7E9jKU4mf5U9R5yo5MhLsShuFwyCAJ6e",
  "key26": "5kLkuHFU1N3vsX5kzR7su8pxGREc3jNvWoWaMqR5P8MH7YNER1KkESSqLKyHp3FFPotBj46zCSrv36XoMUfDwGRX",
  "key27": "EdzMDNA4qk4iY2yZP1PYqRzYda13mCq28979gnnXjKBHcx7HhRD61cVmAiHbrGVuSAM9HfnqRruWiuVN5F3UWjh",
  "key28": "5Xpajm8tUt7pHQHXgAAQcefrtRPPRpAjqvUcugr2Krs75axnfkT3UD8GsGp82QoccJvdJV96yF1rLf9LN3MYGs9w",
  "key29": "4EPXx8zuZePxawjaWb2y7JguvyAkbb8CjKnURkshqMNSQoBqejqpYEqiS1bqFdAK9mr9iUvThtYEMe2wqghi4XTX",
  "key30": "2GRFKn5QUe3uX624Dga8MUVR3FxeHcMX6PES9snAa3uvNGWybkRdifmCCHdusa5L3vNk9YTCBE9h5RdktW14HfaT",
  "key31": "pLEt6NgzzEaQMECaz9N6RZ2wdak2GhUoqFxHpKfQK7C7ze2zmWTSDVtt72hGxneZLCW6hTsq37JDrLCgRuQeUTN",
  "key32": "3MDRP24UZAjdbRF9NgUV4s8cMzZauJ6QCPGQy1cusYeDMdcMtBdU38zgyA6LqNbnbJkYZddtKqUEdnfqrptkzPpY",
  "key33": "2GS361ap3uaJQGuNBasqoWmKig7Mfsdpw2s3M3z3R4tvecpYPUT932XMyse25Q88VMGKZuDYx5XYce6tpvdfHToz",
  "key34": "21Zs8yXQ11CzAEhMUfu4iD3W26Gkn44oLfKejqRXkgNr7Hdex13iSqhdjSm2wcgAMcibT9EKrp2J6TNE86PFxAp9",
  "key35": "57yBBA8tCof7dLd7tjkEeavXYRTCCnW3aNxWF4BnnAGHzz5eXfWuZnTWJ9K9DRGNzvNZbezrLZx1jwTJ51Dmj847",
  "key36": "5Boquspe1SjgS6W7dLwgmNKYKm66N327wFtvajLKUHgEZ4CFG3cACKmVnTHPaZPeDQjGrJLyoiGFx9cCNjQWSDVQ",
  "key37": "5VDVdcXkUPDQTfptDRa3fEyHsN36pSFe7ss9kyBZqU2Z4NnU9k4EVZZ8HYjMockcxwmwr6cEVEacXb2s3qksSNZG",
  "key38": "4bZFo9TLVozatbCoL7vhassM6xLXwA9h2SA654HFikaNXfciPLWRU1RE7onzEeGeBm9WaiHTAF1JPvfPAv6KMycS",
  "key39": "2uCPV2kqbUqoSqh3axmVxEemUk5bQo6GW9U6bhMiaRs12BfDbXMLZWmG6WsauLDoGuECHsmcDGcQ8gvuve2Kb3LX",
  "key40": "2g1xmtaUj6B6YNjYWto3H88i3JRQJqPjGnAFAQhkHzQgMTN6nnicHX1FR4nmQWfKUL3UtH2yMMskDZoKuBGZJFp8",
  "key41": "31zVYM1vXkKFtFxovpXqvP291VYLmf7RmWcTBrDGxjeHq9aTBH3eCeYR569hAvuHY6RerwpQupCyQVQHEExTtetJ",
  "key42": "GgnxubyB1ukabzWuSRWjj5xkDPXMpzVppFkrXLdEPYSn8N7rHkHNfL8WyETEyKrBrCKedQGAy6sZLzJY2cfMjXX",
  "key43": "2yucF5bxbUyuEeDVfMwPXE14skvuGpoqUBp3uHzsEiD3QGxoFrKPa39i8KwydU3m1cyWrbzG98Es1QQL2YR7Qzoz",
  "key44": "hxvW4xbYXZMwKmaUSL2AQP4DMpVKmXWeD1viGMEEHBi1byNDgTCsGqeojtAP2LMoEEbZxkkxU1nP9ePmpWQbrPG",
  "key45": "22Rv1eb1Y7DvyxisoPhG1kp4LDC5WQg1KqnNsJct7p5L74iqVmmjwLuUBT2iCMXor8o4VVn42RZCSG2QQG2KQQrW",
  "key46": "24pNsNFqUw7BYim9XEcsuWn49zsXKsS2uKjFfGerxyJxTpi8qPkbfp3yeB9rSDzYb5usTzMhGbrtdz7EJuPC2Zng",
  "key47": "DtFVnc2FFL3c1hSqwbR2ZWPwueqWdPLHEwsUpTP7ni5dNWfa8AecPtHHQbALu343LHDf9UVxg6hE2JzG4SAvSVT"
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
