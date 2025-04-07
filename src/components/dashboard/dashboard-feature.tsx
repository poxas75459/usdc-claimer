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
    "PRguZpSY976Ari77SuoVsnxsB8pKB5DYVQ8QCY7N2bFyiPz8p4DbtoPqXXMSrE1EkGVqDDKQueJFAqQiDDpfB1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eAKaqzqgYtkzM2e43KJZ9Qkgq75QGi2KaP9wsQ3fyckfcB5UeCXAogtQ1sRLUiMXwVvBC8XdZUMo6Ex1ktdabB8",
  "key1": "3WZE9pC4U4CnTX3WPPMBBRCC1NV2vmvGs28RNh9zLBtESSVgksMtG7wmj1TnPRKuKWQF1jaHbckmBtH4CjtfGV9F",
  "key2": "3kWaEiHy36fNYRcnEeQ1k4QZ9jrAL6b18MQbqthSCtzQqYSs5PAYMpR5fYFBSXiV4dHrLnpnVVgh1i88yMZ8usbE",
  "key3": "p3Te8Fosa75MPhKZCAv4ZNcbEGPqfkWAEAhcpPBBJ5pGF2Udf8dbx8mtiwHyEehUu2xAhFPKN3iZN12ik7MdSJG",
  "key4": "MtP2mFsVgqhzKi716oq9P5yF1F39J5LYVxJKX3t6t6wuCpY8LwjabCnnEvNRp7qVmJq8JVHwKx4FqGELitoonFv",
  "key5": "5CwjT8BqTVmW5RVVFdcWsT3PUtq6Bu4QXmd5sTmJHhcEw6gBvRMBWrKj8dFJeEuwEuZmdC1Exk1Qr26H7efaVuW9",
  "key6": "5j45GJhxyxQBibdh3FguatgnWoLBdzrVywSbYEG9jZw3MHrwihWYvgcSaG6nb9wEPXg7jKyuMyfK8AAwDQ71yLEq",
  "key7": "4nKDLCKVUwSuCMqjrZ66z9GZZ5kTB59Up7t9qeajwJrUXEc7eZS8zFmnp7hjsyPUb4QpZ2ADVvTdd3hbedpncqb1",
  "key8": "2GCUkKBxm83ofT6WrQXocfjjidVocNooT5W4HTeBtQniwwL26TwZnhmKspLBubBmYSjPdjCjRYHdq5kHhq9dZdaZ",
  "key9": "5zXG1kHKCGyKPw2sJBUDc5sU7DM7SQEUrqhzQ4aA2dJiJMVrJQicgyy73yK9FrC8q4JonSmBdGbpSZ9urR5sBYYS",
  "key10": "2g3FnpiT3YKC25GJh3n9NuuAcmWNdkHG3i3ETvDU8ib3dR9FkTsCNfjbc4zzBFgcYjfNp1k8gb5ZtyWmsNm4c7a1",
  "key11": "637mBNBT2R7wCgPKY1eRdBg8DFxt4nYBt9WEzji3iqY7WtFyy9gBH7uBRsDxJ3XZ6crdjMacsV56FgwNfFfPx9gN",
  "key12": "3MNtR6vEVEKRyXieSeCp6nM84rXNpD2Nafr6TugYrRJJ2JDykuYnFphWzGZ5Z97zJJA3UdZ3VZqvHijAdHgPdAYY",
  "key13": "54XcccTvNrabvmb3yQLWUBqGMdikFKv3oPenkhBgXSyU1fcCjZseXeZKNkkn2CHmA3PGDKydSvVe9Yn4EjSjA7z2",
  "key14": "MoJMbbCgEjrjtdaSDFJMnEtnLVgj6NnzpZjz3NZ6hpFPA9eYygJv58pE6CmJMiUjfFCQasQBoWs5G2YBTJQpthw",
  "key15": "WkXy1jDfVtpdfrGuN6yDpqSv5j89fgvWG63tq6CmeUGgybQFURNLK3GtKKs7VL1akbrHrZpwcmpWVyv6gptzgkL",
  "key16": "2czUiLNy7TwR3yioNGbuRjp9MAi7wq4k5EgZbpvvAhTmaL637v2nGg9DidhWrvaj8ZzfSEiV3cXqATHznYF87Pb9",
  "key17": "5nrkTJgePRyCM999doGn1a74vRRNpJnQAw5iX9WJmW329iPHN5ixikNsSMrWEjM72jXk1udXEjcPaxDFyhL9fd2G",
  "key18": "3ppZn1XBt24BNemzqi1T9kX7p7bemV1wjfgG6nN8UrYjGuUia7nSnmZqPpgBPmq5ZikbwiqkZHLPxTPpPk6BwU4R",
  "key19": "SZ5QW59rrGj6MriazFuLsodELvGjQe7MKv6MbJoWMaVgiuNy92bzQYjbfyeBfpg7EvSiPcVEPM4Zu4j7sCG9rU8",
  "key20": "2MJC9yTygeJwh4NwR4bkHdk6SAALYsyc9eNTxhRK8oZ4wdd933jjazLtLvUVDYfH2F7c5JPBNcnV3s2cPTkMuLQC",
  "key21": "5uCshU3mYc68Bm9xiZwvbAQYJzebK5ZaknqFjaV1h3FsbASbMRfWMwh7sz2AR3V34W1x2jPJoCJizE4JMVsthXyF",
  "key22": "GqP5o6fz9iN4gxjT9KsgFLG6u8tq6uqsgwb16QBsCQTWekbm4y9963Ln9EVee5NzAXnMYbPrViHUZY6Gbf7VRdi",
  "key23": "34iLvSjXTxRswe8crhSm7WUpFmbputtEAMA8z4GqenxVK9BGuqGAn6ZzzSeeDPBKWsPJrcZB2y9pWm8Dz1DmNcJ2",
  "key24": "DriaqCYL4r1gKT7Qxmddrisr2Ka2mgxL2ATAE9J6AA7da7Hn7LCHiZayUu4CptatW4EuzjvuSQKdoBzCUahycVE",
  "key25": "484QjY6F1svMXVecSTzkM6MiDj3PJMwptcQXBTS7pGZGK4c87nM6yFJ8UNAeA8UbLyhGdNtFMBeyQ3Pww4NMRffC",
  "key26": "51kCKTUx9NqVyrA23QwjzNHjCtemJvBpkofiaiCLjmyC9PczxYMKfvHidzJAgNW1FaJHtTDiMUuMPt9MfWXH5kvT",
  "key27": "2zbT4ZoPMgcRtgZTgdskFHNqjQoE2HPXab9UDBXkXzSXB2A3rt9dfuQNhEfpnvq8jAfEFqUurFLfFLC2nbWcNKcL",
  "key28": "46qc9pjTAeHpLfRPESfK5qRsnSyKAfQyTotzQCcdLVQJZLpJiAm7aEWKk6iWPFxacwJxfbpyAw59oed6AmrX4mcE",
  "key29": "3ongUfCAZnA4Ycbbroz4CMPVDfBMP5U9whKdmzR2iBaW8MvDPamHKisadDrzki3B9PzptmC1BLZrxD4ZTHUqSVRG",
  "key30": "3vY9cL6m1xsZek3TudNrytLDkuNFTYMjFLqtfWmSrebkn5pkYFYmX2W7vti2ViKR6g5CTRcQAxXs6pUiCkY9yGfW",
  "key31": "dEC8i2hsrBm1xh6zEM3RZDpvNdyE3sS2eMt3t4aaQKDa1BLt9sRAYKmaL5WyJLA9D1jrCqi1EScvfk6xw7Tnet9",
  "key32": "3ckYeVZQWozKWrZCqD2uXWer2BdWUoQ5H2g5wkMzeAj1QZEAt7XqsBsZ57WGp7QyQ7LoF2RsX1r7EESu1DCUXCVQ",
  "key33": "4UP6Wj7KJEmefXrxLSjoGALKN1Jthi78fjgyrwLuXXXWgXgFLAEkHovZXVcAosUF1MdUeAJMcZxkVSPAfx3uoZoo",
  "key34": "2WvHRTbGCSRyfLiiJ9Khmx8jYa1KwVVpoNoNjx4xw9D71bDeszfmaaxQiHZQPKx8xFYUfgcddwLD8GhWbzezZZ4z",
  "key35": "4EXBeuADWLPJwhZ8dqLVaujdtFjSR6DpmbrZJY7RyoTkBcUwPyU4k5eUzp2cVEKVtbF1Q1N77WVcFaqvdNye7o8V",
  "key36": "25rC4vXjt5PZ7wwU5zqPSdr6Ms6qRndw8T1iETrmtEDCMn3Nk5RHrGgtsGZZoA7SVP2siNTRhzQqW9YJ9eR48HZP",
  "key37": "sh57yjQeGWZLeRhuNbFMKABdCcADGKaGRKv4xfonZGfZcrdUBQbonZ87JHPiS8M8hUXN2XNwmuvBPAnNch2JKeW",
  "key38": "2VrhL8XVQcAvbCtbbTRw8o6ozQ3McPvND969Lj8A2NfEfV13TugXkDJaddKDPbmMazGkBLXbBTWawgghnhuwsf4C",
  "key39": "EzYmsvTdiNT6BmifyN3aZCrqGrtpQU3WomoZ8aUj3Jj1TdzdzvDhCx1pq8TTc4UKzneYrLbXRR66xQF55Q5kZLG",
  "key40": "NxGuv4Scn2PeMk7RsFpUnNRJw3rJJszK3dJtNjFGNCne1dkMpQhmnQmjdHfmZBBJRzp9KEgTXnhbjbziQp1CGyU",
  "key41": "2SBkxbQ3y5RS4vZWAzFE8oBzdbJ6H11qLyXusksVPeQqwE2jqPi2u1QBzkaCkZY69K2EzANohsKXGP17hY8C7uq3",
  "key42": "3H5RSqzRjtK2yrbPKpHS3peNMYmju82XW3LyEaSMEcvvhc2G38AA7ueWyiV1hqPizncinBufXz7xxekW2N8qBVMY",
  "key43": "3cZyXsaQT1gXNNbQk2nsnLdPMPdb8zziYrfpepwY16PYqLSr8uQcEtedMGc132Po7rMbfmga3Nf2eTDbhN8o4EzW",
  "key44": "PBA7sZAFm6YoeF8btDrxeEmDUTBU2z7C9FeR9m7r73gTk3ShW4dYFHx51TkquWPUagnuCaaiVNrHTPsqB91LCdF",
  "key45": "5x94X5yQPcyxZmj2ounVgNUJPeRUDjb7EionEoM8vpjkFxcWVcV9JX3VTC5ynAHXyHtfXj9Eze4XCC4mLKA3gXbM",
  "key46": "4SUQvXHCBQcN1QkxLapNWiSrKTzUE2oZ1r1vCdPMiCEofFFzPxjfUguAEmhVJ9KCGfWob6SycFB2u3ypYXP3yKzG"
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
