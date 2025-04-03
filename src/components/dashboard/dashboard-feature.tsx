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
    "4niB7hZkHFsK2aTENQYSKyZ41zysha3y6mqEnn79rdHrJZcDNqwdFZmiPRo5BGcYdNu4q4v4xhQC4XBWBnjuL3Yd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FzKo5JBhga6MEn6oeEp85ZnVXcJkZMYRcXhbH5iBXCphkx838MwSah1Hr5TDARsbzvg14YY15XEZADhLkRcAjM6",
  "key1": "4QQL2ktwzDQGbwttkZJTFrjRS1aL4yQw6HhPDouQm646fxcD8FW2UvSBJLUiEDPdAGvcPNk2R7cuYwEFXJFijkP5",
  "key2": "28NSCA8p57L3P5JfEK46Bk6E6nRwbpX9tvw8GSLZtr6gdkyBuaA2P6Q9P3WwNsumBNZVbBHp2KdJcrAcsuJjKXdQ",
  "key3": "4awFCby7Y1JHQeFtba6Y3kw3FdmQBJR4uggreaJwRRNB53fDQKcbAoC24srqRyGd1T3RZHLR8gLsQxPwpBZzyESw",
  "key4": "7fqcunoBfYxsUoNTfWSpFqTeYJVr5axFQ1AQZDrvfEMR6ZD8hgBANVYm5TQHvku9xBuqrfSKUQaNDo5ScoTGbQ7",
  "key5": "2fmtoRadijzdgcoeR7446NBcC6uvGC2xX584zQrVBmzh1Dr3T1dTqLz2et8ZWK8wbdMpJPZbmDuLe34kkASBW4cB",
  "key6": "2vKVa3ibuFJ83hUQ71Y9xDzgYmpDxM8CU812gVboHjtmhJ8MEXXZYDswgnRrBTgbTNwkQtrDdGbvv5EBPaWgsBP6",
  "key7": "5HjxuPh4mouc4rej2ebcRkxWDRxetV9weknuNpAjoEHuWCKVe2b3Yni1oGqQLS2TuZJynfUaTeKu9gZMPMk93U7H",
  "key8": "2BRoyhyjt7Eo1VYVmZk63HbVcACzUfVGYZLuFZGjSjh9VZSPwJ7czSCc83fLrdZi3Pof2YybKUPi2dD7avDVW4vs",
  "key9": "5u6qvDzBiCiaP9mgX4N44VRBRAfxu7KBZY12WrDWid7CPrWbNurgfBujUzAcyUnj5bjEYhH7hTVz3skLStFK9NBZ",
  "key10": "4ux3GtXjFnpQNhpKpce7t194FXPTueEHpH1KvjPg743UZJNCLKQakE5KUNcm2zhSNWF5BA3M74t82XSha7fRX3W8",
  "key11": "XRmM7bgKHpGiL5NfZJz6ZpBmdyiUrwYxzxkxzwka7MwebYuFww4RoAUK69bVbfbiUkiEDTYmTVDtpScwgEaWcJp",
  "key12": "5nFpZ8UFgdZRN7HYZzF4owNYP3p9PyNT3rj2K9FSj3ziKWGoKkRBYCGj1MZXSnP4yeuPZS9xv6dRS2orMqb3HGg3",
  "key13": "4dbTHGhwQ6b3HZDsTFzpoN4tWdLrkAKWAgdTb4SJjJ1NozF8akXHC9umYpWot9bRiuX1zP8gFDBhidJJVzCVkcqv",
  "key14": "63G4xwYVSBnKEzmQxcHg2urvN9f9T6Ph2DzjkyyzCAjP4gzbQ2iiXzg9Goup5dRcpbNbkmSiii7RUTZPdanFVm1x",
  "key15": "VibvDLmgJrjLhxtZ7uFQLthxcgQVd4Vg1YvjQeSnMt3GRYJPLscy8bT1z5KXe1cRGmTkLWamkyGo6wc7DNVJrXF",
  "key16": "2Ftep8drZ7CT5LcSYK2135twu8CEGawGXk3Wy8bLj86zXzMLNJTLfZJGVkSuEwY2Y8MxaHb4qb5kbAFWiwemzcxz",
  "key17": "87F4STsikSjzMzobUH2Gzn8NRsgzvRXaHozq5NmYXmgX2TxxJPwNG3GUPCkevLN7V1vZFbzdVEckK5PBr6Shwqz",
  "key18": "24YhSa5nBNQznDQpkUmpqMvzc7a2cSdSUqrnXhxVstC5qXn15RcBn24dhf6AFTX946Au3jBYfkAFWd6HsrGQ2eSg",
  "key19": "4zU3S7FbJ44uuDuzYL3wLLC2NYiVqHEKB5HmLWLJFUWYkpnyqQ4d2fwFqwfotsN3q3Cfe1HyErrrofc1drmbBCAB",
  "key20": "RJWPqgXXF1QtDrs8earLwkiqjvLQjdp7TiupaA7sqajiK6WYMCsuYKRwoujMQ4FEYcZCf4dPfu7LKtyxCp1cySZ",
  "key21": "5XPBQRkoFscn85RnbXnWkPpX3cFkdxpFodb3rgrcbpiN7YZFERkKbPRXNqUSZwmmKshE9D5k2WSo1VjmpeCvXzRB",
  "key22": "kAKVcrVBp9bAXSccqL8iqfA2qQHURDvuBFJFSwTDiDZ8uomDpdiJEWKKLYmRLhixLYxMUc3XfmzSaZwV2fx9Dv7",
  "key23": "bWcYZfAdHbnJRLLGJ3463gU3xb4fU3tsLo6CbLRXDSNdZq9dfMyiXSdh1wJaaXmsRyppNRNmzWWphEASEqmspe2",
  "key24": "5fmx29kjNZfQiePuktAKrLYURmN2ktNUbygZwtY7DB5113UzWct25hw44iRhyjN2L8k53D8SAD9n1yEBZrHd1nzo",
  "key25": "3wznm1yqaTrQgjnKQAbGhkVFeFytp423TQ6uU9aRJhyVNSTBUm8UL7EYdNrkhhUpDFGvCoF1SbxLDndsubgv1VL2",
  "key26": "2DCYS8eLoVLdGpAGN3zPJbdCWD6bjZeecsrPvEGZPdpM8dnVF7qn8u1DLc1YWUtDReqqGKuha1aZ99ByrtxJq7MH",
  "key27": "3NUbQK5WkNoZSZyX32sCXRrZm1WUv56aQEe5NMgP749KW8gxSkk4Sc6eJSNZi5VRziVx9UzNV3oF65WdGBxqyorc",
  "key28": "4hTW9uvafKSS9bFNmb7zf1KtmtTAmdFrCEY8GrKihsv3D43VTf8fA8JS7qcTDmkqkUtynwspnoknfY7qHTAJob15",
  "key29": "CoaBY4tDts3GsdsoE55idaCLrhCKkW9WgXQqqAN7hfT5dZe6KSqmVAWxRxd9x7z18tV1o7YcmeNSVbFQdAuiQm5",
  "key30": "w28GmSqBZjo4ckK3VGahiLXsPrsN2Gsi3ahaT4JWaqPcdNPKrg9eFypxyGt7CuqPpSerMUe5ccrC5b8ULCvUMFt",
  "key31": "26kdrppFPqpJU9duPZe4Chf9XmKwWv1GjtKXByfhCFWam9ktHVoz94MMBvMzLw3NaqbNbPrUEWivctMZSney8sjy",
  "key32": "2shz79XMUDwpEzgdf4YoSeLUPifs37u3UtFk6jtRUQdPe1uGddwsZ4eQnXN84wDmkSkZ2swHrhJ1r3FGKVW9LpM4",
  "key33": "37DYYaWrf9YeFm1A7EnrWaJLkLN4Grda51a7Abmr9YPboo9vzrgs1iVw5PjXtKFDpAcs7Z2DWRGgB1AAMv7FUv7V",
  "key34": "4sr9PD9svGEUoLLBPr4rxTF7SAGnbpKVwcrqi7puZmsBMgU89jSc7criRU73GXjaP1o5DTMYg9w6or3eBZW7hTK2",
  "key35": "4Mv41YtUSA4PSs26upct6HGDbXmUSQyzchbyPVamWc2DFaxRCLiGLu2kwhWzhHMgtBiWwYzQWRzUG5coXXYFXB31",
  "key36": "4TCiv1i7wnXnVr9XJXbTVFtz5yW2qdybTUyS97ieM44hwUxUsgTnnjfn932Q723JmMrkwMa8ECycaCBp2pSJg7gg",
  "key37": "aMVnfwngbKzfAkMKnQKqocmkZpVbeGdTqys5oRquUNnFkzN5pEBhuEqDJdiJryUycjTUddTT61qrsxY4w4gDs3C",
  "key38": "4wLoDmmFjEwRH42VVSfFHAYEB7G16ErpjMeqYjbe8WCLZ9DuQyhk116UWks36arBpa23aYkjhqbvEhEuzR3Nn4dx",
  "key39": "4DpJ35zmBrGQrGx4tTnoqGPaEL6qCqkurbPjKcYc4cMVSibp4K7pYLd6Q69ViQsgmyzY31ojmg1XYB6qxwqxcakq",
  "key40": "36LTnjnAteHZftPXAuCwYhXoDBJBpDdZSDFFcdMoyLNHcP9ffob66uUx1efVEthbTtNHKt27iQ7TkpySbSSePyrX",
  "key41": "276Xh4umejVwbg1A7sfS4gAHvRNoqZY3LDFPsfsirt7ZG288uDAZBpAoUMcLfYrwwdcYeR4BecL4Rw3V91UThQSP",
  "key42": "3MisMoMJihgTcu5MzWKpkYEEtzq9NJPMC1QSE9LCfu5JQCJRc6daK3cLWaraxZUha1o9PHSqJFoq5aD7rPogweHC",
  "key43": "59tsBqVsdgwm3mddM9sEa2W624KiXweMpHdUT6eTe61BFGovxE2BBcDWnrJTQ8qSQL8VDjAASEKedW7jN17XBDRs",
  "key44": "2d3SeqrD4Xrk13kMsnyziyqA3jvNCgGuG3ssg3JV88DSRLGvPQbdidzsfSj91darnVbZdRV3iwBAvmuaHEjVywkg",
  "key45": "hAwYe58FiHUoQ9Py2NPMMKnjz4KhS8akRLcnpeexGWbvsZZS8inf4ZNGuHySu33WsTRZ6JTjyKzxgb56xstHp4F"
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
