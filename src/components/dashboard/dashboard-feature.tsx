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
    "2QcdBXL8zConLof3NWnFfjap4ugjqAbLzGHjPQ1V2HyCWCpTeFM8LphByMM6VXe8XkGUTU9LzKvX6SKxGbNzmpiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JTF72k4KZvuMjqp4zi6ex42EZVQAAj2ZUxBznaDaefdmhBFfyNYMZeZRxLwPsy8HUkGZTwor9bmNrqYD2k3n6LL",
  "key1": "5bEd6jsHc3KZ1u23P43v1L4Bcnk9KfsFGnEa7uz82JGzmqziRexJYKU9UGnk1xox25djztFZcCLoN4eLQbivVBGb",
  "key2": "5xf8TvZoDEHosuWXcKN8JFHx9tCfrDNTXXRvpwVp62YRgxWLXuXbyPmCdycp8kafCBPH6rcLfyLZuyJuguDkccqj",
  "key3": "2ajXtg32Zrx5fmWTtBRivetRDagJCcnXmcMDCxiQMxPRdV5Gk3buMSMwLKTX6pi2CGawdbztGYomFAWZmnUzJ8HJ",
  "key4": "2TvZ3mmw9CvHN9DBGSJNPXkLsw7uzgcXjLSED529Sgd3bWiHaTyBp577Db8mUhjmocxeWAyc5ou5dP6dQbYUHyfS",
  "key5": "3yJa7nmfkMBXYCu53ZcgVyiRX3JZ9wenZkdEkBdic8fTCB5rf6meFXriaybyUMvAvSCT8Sphnjt52SGYFPLwFioG",
  "key6": "479mWNug4yQBEV2vmSGkqxrGfmhRPDroq1afYJ2AGTySFgJ9gk72ju6gA9kSDn3rRWEHwxKWnxN692Axz46yWW1Q",
  "key7": "4THCtfgUZhK9KE7ep12tXqafVzsDPaexgt7PQMdMPdQo2zjkVVpdyryV2qEEBSQP7SrBNpnZWodiH6ecdsnqMsPY",
  "key8": "TdkL7ZBCFqNPgpMu2PBAnmjdYo54gnL5jUePJnZvxYaXtBa71zqtRnHrUSxiMSyRbYS8fAhwZE33SGYhE2g6b8h",
  "key9": "2ft6iWZueHc79kowWc9iTihyxArudWKEYeL2ts9V3ZbJZe1P4cZvvmK34hGgweFM773mHBeb34EkKmeE5dBb6HB1",
  "key10": "4bcEd4e3pZq4KmMccseeBntscncpeWtjjdRbaSpFK3FLUX6gDuAqRh2aoAeMjaBQLrkw9poAtEEE6kq4HzA4SFiH",
  "key11": "26kwzTbv1pwe7duZP4cmfk5ZfsbC5MxwDST9qepgoh46JAoSAvaCpPUBxQPY6NsPxSEEtL8c9xUAMQ3iiPCQNaXw",
  "key12": "2J6hgtZ8W447NSUtvdVd6sVbXopTRTstV8wZX3TfcqHUNBnx1ZetzkXvNwBiL6ieM58GZ6DisthCSFiqXu6fxMFV",
  "key13": "2jm8R6C4F5eA6gvrAdcfiS1ruzbHRT6ExL3GiQmEvCJDSYenhTSy5kKPDGHoj3Fu3Z5NCQ8X25jjr62k5fiorJGP",
  "key14": "4P8w1FZVNic1s2GzwGjLCtg4iqFktRKNTYSM9Z3EZcRqB5KvymvyUj69bskuvA7nPosuHk6ymTyr48y6Eg2g9DXN",
  "key15": "8tneEEMZMyTZ6qwcF2odnUvqXPMFVPCHz39B2qRkWzPPvS4dbZJYMfzC6R9GQwEUJJAJVBYQdcTyMCRiawnkrXU",
  "key16": "4QBYXfqd8mqqbnfcjG7Hwr1hSTB7WFtn5T4J4G8fWFHCJFaFT3K4NLkjWH8YJw8gyTUyA6uFChDJ4x9sKTnDzWHX",
  "key17": "5uhothbTuEcmVUtzopNhxxTf3qxNRfjN1SY8Xen4uCYuWAtLXcVVpjvH7K9VENhgzQUfsstMca3X2Lm66QHArjdJ",
  "key18": "EXLGYsYxxoL1yuYJ62CnyNDKF4mffTDhEES5cyMtCt1aFBTXNkJdmx3VB93a4qA9dekBcmzHopTJAACNoaSV4LS",
  "key19": "34hovYKrFU4V7e8mCiVbvUxzazTs6E5gjCjk1hsHJ3n6r4HdqdJStM9VhnbcnRdrPGxzJQ2Ywso5oXToEsxKExpo",
  "key20": "KvqTpumSpkiZ7TxgfEu7RRGsGsMcwUU7Qexut1zpqc9vPSAGtp5idxTTw2jY2Uz8BMPcvLnvcVGTrZFdDpSpf6B",
  "key21": "29MNdTzpz4S64QoxMRWxpA4GmaUmfYBXpho2VcvxE26MqAAHvp6YV2MgJJf9Tt5TjX8A8NhD8kRuQN4ys5MvAHYY",
  "key22": "3rCfxdQAv4dwMhpAPSv4KXu2HxCHHq6qz7yCjjdGJdN5Aj4TU2MiZF6R4Koouv9x2RLfKtnDqr2vknqX49mkBg5x",
  "key23": "5gNgyESU7ZZ8oNKApJGwFZMpVDHfuUMtXkPNjTJXqgXMtX4eSKY9YyLEsvf1j83d5E4UXMQWDHQyarZTUfZcMSnA",
  "key24": "3LerxnuVB66oBbWagGakAJ7kfaRLwMJr5KwfNJPb9TZp7XPpdMzjJz6LVk9kjWCQQj7g8XwLQc396pFJNc9f7EbZ",
  "key25": "2N9KRD3bxNWQZMMSYj9uooikodNvGvPYnqshHc1qFXo8FGSULnDyehmsshpjtPFVMFGUgSn9ubHhLY41DCxxVTVV",
  "key26": "3QbTQ8vkp8Cem8wAQws4BQzy4BdSWFJf1EH6cgj4YSpTriVf7haN1dzbYDX1DszBQLjv2pbtW8mCgBRM27b1KWHo",
  "key27": "TS1CcA7hp7afWfRZwJcYnanP6Ht49cBd73p1nJodPTCSUPpE52keaYFuPsZCEK96TnyGCxazSZx2gtsi2yP97GF",
  "key28": "65s5mdD9FN3mSZK5MwyEx2eaMv2w7ptgyaR2FPjTNK5jQauxzzhCmHCcgdKoVkBM7Af1Gx46PmpqV3vRu7ZQdmmT",
  "key29": "4mHCQN7jTsx12Ht8n8D7pDZMW6nmWk5FvMSs4RWK3vrf6muAHrLNFpRgje9ApWLUYFUw9C96fjGsmApczWHPpAT",
  "key30": "5W64FEk1UNenCbwRMkXr8VizDXqp57FiF2qXF33NAd5yrSr1pgGk8GkXtAUQRrSJm3uAqDueKGV5EPH4zL5csjgC",
  "key31": "5ZzgZ8wkAqjj5nEf9YyEcN4Bk3jFaTkiFp4xV9qjMvEjncTq6svWyvx6sUx42ehqqhGda3g2HcUWZ29ppP1NaZwP",
  "key32": "35taGGktQNvtW6pHrFo24LmCGYjmTr7jZ1TMaQa3seh7B9tquWUaBQpM4j2Cx6sHpQCkpxPkpPN5EkcY2sbkraBM",
  "key33": "5Awu7rgGnsyoARPdp6WPkV6rTgHfGg7x3tfs3uGwo78ZJuNwRhRomGkH5Vh27NXu9NaJiCBfJbGctyVL9LaH3tHq",
  "key34": "3fTJy8rnTb5oBx3nyNXofMSuYRDx3pBTx2VSvmugPxNBJ1rNooWVCk1XzPX1dnM4EH3rDkS2NfVhJPJX3bzDA5e5",
  "key35": "2exbApySCpiP7JtoGtULFt1ekUDnREqLxtRD2tDhac1Zg8GZAcBRPE6ozZQXdGiHvhQrTvZAVxDAJw6ZBqUgHmyh",
  "key36": "3CqZg2aUtVtpSp1g9V6ULSUwxLqC49onujjQXUhoDU3pqKxq5PqPsuYd3tR4uWz4xtTorcCBpBQHdgXqyJdcRK6v",
  "key37": "56DNGfbXxMjAAmq1YyXiSdtc13K1byKRXGCidK6nunr93huuuJwokTAFFb9jxaiPdXpJd6JszYK9pcLnDfoByioW",
  "key38": "28a7PQmhoxj1TrLg3tpfz8YfnFpPijRdUWnu69i7e5vAJHMBU9vNWMZ94yixNxgLcEwJSHbWxKQBobG4Bf9j9Wpc",
  "key39": "2stRna4asacWsmG7xXhD66bHgH7nzCofQQ65NjkVZtgRNyq9B5UGt7e72dngxEfEviZJuN3mTocg1v6yApauC3W3",
  "key40": "67QXC2jgY49oYyPGurQPghAgfBwfmXyhzeo6eVXv9xJ6uSZT2g5M1RTecNu5xyzYzpKcdRh6uwbkPQzQrFAD4F7J",
  "key41": "2RKt89NMk3xY87ydXs9TMWRfi7G6DCdMXtk81jqY12jg9Kru41BdB9JftFEkiXqYmyeo2uHqzWh99tgjuqBD8Auy",
  "key42": "4czHxdViCCTN7JoCm1geBBWR1kv3vxr7V1Pxzxa6jmhVTHXF72Ry5cgWdABnK7L3D8KwzedTFMwEaTfdZHDrmDpt",
  "key43": "nrJbzAdPmQFN9xtugoZubKSVgccQfe1bnhbgqTTh4c9jB1drdX93sipnYKdu6JSLqrt8o9YyZcfWLn1QFLVf86F",
  "key44": "2jjf77u3CqPFYo7maR7V57ugW5ZtE1bZSCWVCRivWGsfN3ZbAc7MkqfUM4xVmZVGKndxixCHHVWRnRbb4MGMJcqx",
  "key45": "2rkQHfDB6g8wbyY8hT4fSMuNm14SgUWMfKk3u9VyyUPiFEc3urD9faKMp4ZaSZP7m1Ssk13MpYM5saQi16xXYy22",
  "key46": "4sMw4XqyQabtX78gX6kKu7xCHV2H2gPmRSVCWxtNyMcTitHE79tUWKAmHaFYXYr9exY4DWeg3JCvi4Ae6dk6krts"
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
