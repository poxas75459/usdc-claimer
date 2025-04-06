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
    "2Jk99S1aQ3r44QN4c77dTC5Hspq6N7qfVmiSHqpNrY6W87D1gnDv8ES5pdnV4qpddNYD8PGLGK5fMDFVXCKNwmws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gpqTuycZALBx2vvxkGuYf57JNyT7pRHnitRrPNBcEDqofn8s2jLLXitpKevG8XknnQRUFFMLDSDrwUZX6zUurq6",
  "key1": "3bRmqqpAjZSyCbTD9F8Vsf6GLKFnQgdNWRAExNkXz1pXbMvCsfjLGrVWyBYiqstfUNkyXAauyMgwXVYHqF99J57Q",
  "key2": "5sn7hmrGTcGxELcNVkPtr1AJjxNFvnV9aW1YzWdzidoM21ACpEGxdcCC3ETUc53M3ZWNBdY8R9oFko1LGmSDzJFo",
  "key3": "5nSPQ97Jnr15GrXcn5RdMPezZX58zJoDAKe4fsf6i2Zk729WvePqoVqiiYNp27D1scyVYb2Ym5X7sUMk4jUCYqVt",
  "key4": "pj2aEY4jm4trxAJq51C55J2tTuK1vmbWLgxtZyeuhy1aoD1s3tdwGhT2fqF89682Ja1cKu41rCTsG4DBcuet9SX",
  "key5": "4ukEtctM7xeQjXRqUCgciZGq1zXdsGzVbTAZAmHajh2ypsCBr8C3zvpWSvdDCqxp56UVPS5HrSXNtdJ9EXBkHsn8",
  "key6": "3yDJoFTZJRT9iY6V7u8tmA1Dw2HjCjkKwfsfRtzSE6PdCSLm9SkoByTTFrFBUuBUY52Xef7GpATmcGkGvSmt8MZK",
  "key7": "NhGKV7rP3cYufxYmu3wFYAXVTLwGorPEcjq2pEZ9PpUHhaQWZev7RgQ7WquT8Z326TRAoRBKDNikxDNQt38cP3X",
  "key8": "2ubUxgKMRRJFPUABy8hi1KEe5JQ29z3xRp2VGSrzpYdMHgz5hnXHzQvEASLzNwHXL5G5wvcGVpgxXZjn8CFPWocC",
  "key9": "4pXpGJvwk7im9bKg92243v9kDKTARKVquMTaEes4S9TeJttZA4MWn2NWCVcq2KgutkeEHiSe5oD6Vj9LDVjqX57W",
  "key10": "ikFhQ5WJFbcATDz4s62nxZo5dJRndjuaAERQEFq5XgvedgzXRR19Lyf76id4GabFUAvkaoVnQZAnFg2DWuz8vMP",
  "key11": "2M7tbdeKN5mrGysmXHqdp2XFJMT1szXAV24JU1vQijWH53kVkP3ajfRubM2fc5xw3EVWMetkcbb47Bzq6UPBsMZb",
  "key12": "pWYBfEDF7mLYBqxJcf3K6WES252dPYUZ49zQdDUEoEFbpjdkFakRqLiMvujGzPRQfnW8oKk5XMn4eaHfTkfWJCY",
  "key13": "5sNb4jpq7PApZGpZF59Ni6aPSdFzYpmcQAwvQviAHwRqi4MD7ZuytX4ecoENhUK3v1d7HfNZaPxGkapJ55yWpLKB",
  "key14": "Z4trJ7f9NfJKFrvnhyDySW7wJYTScggv656KtpeAjUsh4aytoTSFXqCbdbAHZ8ZrgaMaTKsYPJNdWjkAhGuUX7U",
  "key15": "2uQd242e4snwNuHkr9D7SDMbZ7iX1s5xzxaiRVb2jPfQWsS6TZpoZCpj1zYMuXpR7spqmjL2xNxUWDYt3wdi1Paq",
  "key16": "3mgxtdeTrUWzerJndaVc3i76xn2wS6Tfn7BGiB8YSwxaxBJX3NEcUnDvtraHhP7U2MU26Bi58dhuFxp6DWKX4Qrc",
  "key17": "PsP68Jgjyupp7N38F24zb41TCWoW582CkYFjMD9ybnPDPsByMNq9NfqayJy9pGYWiVzJigHdZYe6MYVjC9ZxtLK",
  "key18": "3DCfCvTkz5zkFectMUw4xgS9pNU2vnTzVSzrhUAbA4ynmGnKgCeAXUGP9xtYAjDvtu7REfws2F8Q8cgWSn8xYvZE",
  "key19": "2tWhFhr8cgQjPJhYfNQmc1D2UTjjcX53jPVCiLCjQLotj181ofaQbm1KkwAQMcFmTWZRFfK3EBYQpzmcL7zFahcY",
  "key20": "3KWsaaUQeMBD85FL5xZtc5UijaMGK6XGqmkVJL9m27GvCmirmthcLcCRycPDTGk4qGkfK7kzjtWtrDagtdmfeVQm",
  "key21": "62vLstFHezoYJP6uYbjAHuGpG2g9a5dgVDvq88RSj4AxQmxNWpfv2WzWjwZoaQyTB7XtT42MHw6qTMrRTp3VHbdf",
  "key22": "2HbCVCP1JexhftR5SKTcHViHs9By95NgEh28mUM1qqgc2JUZnCgPz1cz1ZifQBeV5sY2PrYPeS4TqCRxkwhQs9iP",
  "key23": "649DDX2xHns44vgp9dqYKczt1fxH9t5X27ijYphFUe84gLQybMTg3iYdBRXdcvF8JyKkYD3Kb6J8e351sxLfTbyi",
  "key24": "vib3GGhPXT24gjLWvxJqkZoPHaubN1Dwpty5Tp6XAdmqLN7pjFiNK5f71irwT4pkEaAziuhEdio3CpfmnJt2t6N",
  "key25": "2K9jdb4wCbHosySRz9VoGXBj5G6TTi9V35hnrSHW8Wy5PP1McL8Lri3JzmC92McKCVvng6Tq7k19ko6VtMQxiW5a",
  "key26": "2QdT7xXZtVQLks519TRHdDzZXMXQGWA3rxVwHLJEbihv8w3nCyf95eCakqMwSPYBc1e2NT9qKzUqh9Tx1LKBncUb",
  "key27": "5kczPgLHpGqP8DyVqWacnraoo4GP3vvSgPtw5deVibaGBNBWH7Dkzz3EAo8UfsArx3aLSu4DkXQTECna9eofWraA",
  "key28": "84Q5mskWbVJegAMigmpnngxvGacSjtyzpMZpq6snSfbFieh1rhwaDtQUCtWTvenQ64DaLqqHgx2ebxjbeTYFQUb",
  "key29": "2uCDadUFNNtvmcAMqERaghWPZhAa5psVmdVnThEnwieeydzVpkraFJRV5kgG8UxC1JNamXVA7rU5551t75dDP4kb",
  "key30": "32bqaWgP98Fy3eDKGqGtHd3HX2LGymAZfJ66pHigL3KvqG6pf9o74RZoSsZBUE5QEAVVz8ehGC8FBVNZJhzMekSg",
  "key31": "4FSPw6mmCWvCvELRKAZL5DYWC8dgLzBXjpqnxB7aPwtezBeYYJNibUbz9QAmaFhgy64KyoqoEzo5eHP6vetrWVGL",
  "key32": "2DypMnLvaKUFm5KoJJAhnADjv2vtWAnpop58oqAGzKdtnkR5msaxS5eVP97UW5H6CLKwazc8V51acuF93z7xbY9M",
  "key33": "5QFognLPar4YSs8sz8yG4NLd1Ywjp7qAxe4xw2tTisfKQ9bW2vLCmiJjgM1RwS36WKtrPK8rXj9qXFWMXP8uhcn7",
  "key34": "3JMHKc7TXsCSGHmu3UR7ptjNkHv7LyaPYQUfzQVXUS32NXrvdPbr4U14q6HhfjVZUFMXUd1KiHTdsXKVAuRPKNPK",
  "key35": "xkfxEBQsNM1f16A5vFb2y1yBecYHzZLuTfZ6Q3BLh626UBihE66A7dmwvDMwAV82Ep8suVSd31YrxbptT282zFG",
  "key36": "ez2FfVLN9vYPa8rCsRjun7iYWDm2Z7nhac3sj9k57PQZxCJPy6mCBQH9m7R8QaZDrRJ46j25P9K2JYsg7tAqHAP",
  "key37": "3KwBnpUWxg1rzQz5UM6Avk2yjV8bc3w8Aew7ZJfyyFupDjU3KRLZxGciAkjQqpNPcZVxnK69SaUZdRyhLCK7CcrF",
  "key38": "3Qbi6M4h5WeeuUrNXaj5WFxMa4dtaErKesiZ4UesXxseQfMMoNmDLak8qaevg3XQAqD3ZJ8MtEtJ8ZSwW4FtcE9g"
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
