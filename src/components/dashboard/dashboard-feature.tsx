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
    "Nv2R51rEFZWSBX56YKMzpdtfaZwdkWeNuTwjw23hkV2aqbDWkpNi7XSRLf9fSBLJ31kP63LY4rgGSbh85G84ntg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oskc1EBfP72GE2hjdcU4eB6uQ8hkRUZTaXmQb1tf3ThJM4GvcFRxbBqLJenhkhVny9Xb19nQeD9KjLbxsSc7792",
  "key1": "5XjTYJ37Xj53y5e96fXpKpL3g3MXBk3p2KULKjmHNTGrpYAAB46ArRcFnrmkSZbux2SFkk7z3ucDSQJJz4VJac8T",
  "key2": "gw9F1fWMDqhLPvBzZrW3CS3XnRcoQMA3kZKQWSMpSmiUqMrawPXrBRt1GzN7J4i94eVtuoFmoVym8Uk4EkyVL85",
  "key3": "3metjc2VfD8YDehaSL6npBP1nTum1SuF3YpjrbfMfbxNxYc8ZQwGosPJDnbSNWhu9icNCaghQ7fSYDqxPK4zJwkC",
  "key4": "4N3xdeRLcs2rEhAu4vDWu2eiuthoPfhMS44T7GdESoXviKfBbXFEyUZQ9Pt8ajVscVnjqNyFG45QZDSykE5s95MB",
  "key5": "4j7xBLxExG12gyqd81RAxYW9BPeggrzmkp7J3biaFMfbV4xyHd5M5d55GPSS2kdxsib7zzwr67B8GtFZ3i3SJ2aD",
  "key6": "5nWK5bvCtUtTP2aToBKHQySuMt2Tnh525bTTZ9uEiRY9ZzhTihr7Vt8S1zuyV8NfANxG74nouhtgKfTYUtd8hTzT",
  "key7": "45ts5tuSJacyYJ8xnAjV8stmMnAstdWaPZYjigZsTH4Ngj5zZ5hL4rNyqvW28ARiNZBHBibx56bckwqhqWSnMk3G",
  "key8": "5AV1GGSnAKMEYYY7jJgqYVcb9Fz1XTGUMmRf7NJ9rpVQxbW6oY1fP33kzkxpRWLYtiNt4WZpv7EUYYmUEqrL76dd",
  "key9": "395xmcwK67Ua4huERU8kHK8HXsncg3iYZMQVZpo3fKw3XP88joJGe6dcAueaoorS7DAQnoMKX2ZjTxtP9VxC42Xc",
  "key10": "4jjbiBxi7m2DRVbbdprvgJb8uNWUkqAR7tXq9FzJTrJPiPUgmjcxsbJbSXNStYmPBSZhzdvuDPRnYQKchTLTLREn",
  "key11": "2LaVVjgUeLP7kKFSabo3YLfce5Q2bLmEwE5E8qziADSMMScEibJzw3xbhDVDp8VTe8SyDn6jTAsce46bX92DRmV6",
  "key12": "2yiUNQ2H98oTD3hpKBqxGNi8v1Sze1U84zS39C997Aq5vP4k4ST5oqzDjtywYCa1yvjuSwEYBsoZK1GzpDsxaP99",
  "key13": "3LB2BLqn2Jgmaw6AsCEFsv78Dom4FgKbg8eVYBvYogekJLtTmKF6UHrqvZtqssJENHuvoN5AyqrRazgqdcc62cfV",
  "key14": "5ePsQ29A8QtXYMUgWYaFKW37xd8rFmJVxwmFW1T7Hj6PgTpazx7MkjNXTj2jckwSZWeNNLtMp6Rjfsi1HLiqNe83",
  "key15": "2UkCiwUaAtXCf82bkdpVh1TpTbrsVv64TuhA1KQtb4JhxUzczmD9R6HSWvsYAmVDAV5d9xqLsAMtTuM2FYd2uXFW",
  "key16": "5D3s3NWhAqhLbkYmpd4CHCTRfy4r6JsQPEk6aSoUnfeZ5E8RXRjEjiAYEBX8eiitHWCPGf6f6oKdE1jhhGWhe8T",
  "key17": "66F6rrTDgYYvsLKVNJYa2YLK26TBW6fSSEnecVUHMxcUYcxByWLUWpRxkhS6vBR5p2pvMLGAHT48z35iFMxg4cV",
  "key18": "Nc2Chx5r5fkyT6h3n6c98SyDYVLshxSCdDb43SSZXU5wQc47wbQWKwQUZRC39QGVdBmjsJjV6g3VU5hiDCFGrxq",
  "key19": "5WnHUAd58FwdqattYunksP63dHNXh4h3ayj1kM6Yv9UhXPdPbB6hCsBnN2CJmpoi3pJDoBQDNkiAsVKw94eb4ujD",
  "key20": "2tVEJL1QCdyD6xa2vdgZiEhCxYs1iSkuj75vJ9qCgvm79fdoXsYbBPZpARnRoK5KseaGTKddD8W7Ff61exvy5bBv",
  "key21": "a4iCGFMpFu96bdMQupKMbuj7W2UQ7vzYg66fDpvrmFRH4zrXk6b9mTiBfyzZpAwd8jBPwozhvH6Cukdw9t88snc",
  "key22": "SPNDU4K5rixC7GaXpeQz6RJCbq4sCRfFzG8rgjUquCmPBAdny68xWTgtSSAP5z2BCpcEGyPTE59pBQi4ENVb4Zr",
  "key23": "2ixwtiLf2NB96Nd17ek9Q1FDyxo1azRkgEq2XmLK6vtjyNrTyZopQrChiD5pePP43jfUvDreQvQjH4kfGpm2Eviw",
  "key24": "v3ACHoWLWbKJmB1J4v3heWo6NMto6FdNupuGcL2bvCJpE2ypiMP4to9Supd7J9q5BFeCLRv8aw6DKwB5eAe5Gyd",
  "key25": "CGMWRCnx5vNxaDoa9E1Spc5ewFmjAddthYxxamhTdkmrtGZwwmqaJKc6fbEnyicypSDDgcNxvrSbJb3PsbpYzVe",
  "key26": "3QYtsvfbi2SQSPkq39PpBs4boywCEFNKUkozKMckhFpfZ1QcBjJqJTzS2oc2BowkqT5qNx9rKDgfqhJnrQ3xpfRB",
  "key27": "5HQEB1fz6Nf9djVFYMeT3GEuBFE64hg8Zg3MSgVrtpU6dLFeZmcFmdxTNpJsQZwZrXCTT4Bi9FePHsWAU3rVLgrV",
  "key28": "46dAp5cUvq3qtPQp8N36AfLNDvomrjoWJz2Spev7dHKEUNxLbmgpx4vhFzZCoxs5aactNSRgUCEmWfJuibfqfbNr",
  "key29": "jcuKCpbRvaiPiBbScCK2x1kWdXvX2e7JEe1sab6MeQPWBsopprTRZYJ9Vgdt3MVV8XVAdfFng2J9DVD1RMm28Tf",
  "key30": "37VGPsXXWYNTDKvbKcEUrY81Qeu9p5qePjPkvZiwz55EDSvJF3HBWr4nTFcumdrT9Gr1YHkq1mnw8sEFQp59qxux",
  "key31": "2jHiGrQvgYYutJkyY1afMbRgRGhBaBCieQ6Y5pwi4UndGGSMw1MWp1m1LiHKpMrwWyjV6CR5cfaMnZUSkcCJftce",
  "key32": "2X76J18dtPcNEGpiFp1UAzkWVZk9YLnHwjPenSaCPuBdA4ZzafrNUMkG29S2Wgcp85X1RNKFEDTqcTbNV8DkKnFV",
  "key33": "3BFcszMMzYaZopYbmCs6oPNWWK8xRqzrHdDgnHigjQbeahtgsSgfNQoAXR2hHyCqUrt5ekTTUaLC3d8vqmUvEn52",
  "key34": "FgUqFhiCmspS8QAVNcsHm6rZ9rjpQdYGFzL8xyq3C9pbXBbSHcHzy4fdrwuiUcrcTLbidxHrXwdgpfmYv5w4mM9",
  "key35": "ciont8ajySRevRfkXYiXU7X9v3dFVN7XbPDhTUGudvFGhhcasWD5Zntiv6dk3WeqT9RAPgUFKtSf6HRapaWqQtj",
  "key36": "Ngr2a4WiG3jVQBymQkJxP4P89fReqzXYMyAHrUJjkSdTTe19RPFKet7cY1gjFpy7BpRh1bs3VKQZLmpmUYgVMgU"
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
