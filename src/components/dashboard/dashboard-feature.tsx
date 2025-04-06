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
    "2NZ3Lf88w1L1bvk8UEd1YJju36hd1zuswev5XMsA6zu4tMMPzZPBgHQoxm5zCzkS59Tx51riuCzkxevfrspiRJPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dJvqNxGzo8QAxZnxZbgF97ttTYboFFYJpxdGBqr5rp2MESqcwi4MrxWLhpgBr1cVNXgC8Xj4mdMyBhrVe45TAML",
  "key1": "3itQygYvctk1Q6rvf6ynUScwJNfGF3UEEn5YYaJRKLMJMHYt1LmLuT3f6AcwNpG1WktHoDkfDBzAnRdTSP9nmqW2",
  "key2": "5UsDxqJTpGM6eipfcN73CMVqpR1PNuepJpBvYN91DGoiVSHUf6ctR6C1VtzUeqjqPGjBDQoA53m5o6p6Aj4yx2o3",
  "key3": "2gjMjLGRrWCXfVxX8kfm6bfbrzmDa42jFSXHG4UWk7piEywmNHLhEEg6Vqny3tVd1t2Fhi4rALWX7cfyPXKH4aSx",
  "key4": "3VbJzaqr4tbNUwvD1KwaYqQQxb7KkF5Ta15BnwhqDQbR3QuKovWKGrLTaURiEKV1XXCvEhXTRicpEBC42Bdyqers",
  "key5": "4A9CXcPhGb8AGup74pqRJWP2h8JpwbcLBbTZuFvp2Nw8JuRhkz9Fwpf2SSvuBT5PvjbCwHUTgW8QggJGL1K2UsM2",
  "key6": "MLrL4qKf6VAM7X4uCsXTPG6qwj7uTafRN2QxArExaGhL6S8f46fK1cN84MhAjQ9aZnEXZHAAQWbyHkV5ULNCJxN",
  "key7": "3U4EhwztXUgxxZUJdQzyLeehwy7dLysYur72iRrrDFXQZDJS8fiukWQcf2shFYt7AjSC1KuQQYwugXimEQscCaP2",
  "key8": "3t6VNFcLLqtSqjWTCCvStUjvzG7NEZsNe4uap4TBrtRAGXHv2a39rUS8ZUURc9ZFnH2nf9osQRo7ntq4Xuwhiwf1",
  "key9": "31cjmpZudTkuVepvi79YYakbwKQD26jJYTUasFwt9yfnQhV6Tdrkhp1CZFbz8JyBVLs8xsXnL9UdEfxGiDSmiCcu",
  "key10": "2Mx8Crwiwoq4SKQKDcVRGqUcHKnGR9UsutrVa7D9WeX32V96cEza5UXkcBXrwQNQLYrSER8719bqWwHBnWSLMxx5",
  "key11": "4rUzwVJBvog7NTpqXp9GtbUrAGpnsiKuxhoJxGvRw69FwSyhjNmGgdWSkDzCLS96NtgBYhaWGFRyVLhKP8TmFRNu",
  "key12": "3Rw1XdcCTTW6pDSQY2jF5oSbF8TSVvXN6wt8KiS7iH5GDPweHGt9d9M5zKa8HybJvEu6yvAZkRXh4m9Ypaxa4qCw",
  "key13": "66PwCtExYXCYTp5DUufQ556kqEeP1PFHurgg2BeQWfuQ6JKUkqsY4iqqLNFGPdoPa9SaLH1Ji17T6u2TFPQcDizc",
  "key14": "5uuLvGGBk7C3DTJm5uLftmNPiiQ71RtgBpbER3eagzSEx5zwbfJLPssRPXbq7L6fM3ANBfNwYHZpfLQ3ALRyfADK",
  "key15": "4TfFkfea6Vtum4oGT2zRQ5yiJR9htvsR9ishPkVKcmqX9t7Dm482p9C6voD1YZexL3jKK21eCJ1qd1aFB6yicLGS",
  "key16": "huD9vvrhDuQrjVRoi1G5sm9et1oHdCYBxR5Dz4LLU8NdbxoJKvnCMpLirDEfwj5EPbY5EqCP5KJTGWMt1YiXoTA",
  "key17": "4sffRJhpybw7vcxcKBmxBDgtspG8Qt1Xn9YhYCVkDpD4SR63zY8E2Yqspz9m9opRqzHmcXmV8SvYLgLXD43mJ7gQ",
  "key18": "KS6v8mmXgZKs97stp8YoCbcayxQgcdvuVd5DZnHEDaJwC1FsjN4fzk9wnefYym5dPxg4wsRJJJoVBMg51iW8wLN",
  "key19": "54YNrAzZSmv1v91ErBLpJ8PQCQbQ5ZUxj3M1vbYhkXEV7CDjosysVZxoko2Uo6Q9UKigexfUKqrLBXoKor9V3ui4",
  "key20": "SE5SHdLt5M3YhtSKJtkS7NPDbELG1SKKSkDA6fQ3SPH5ETPYGnQxcoGMQSHxGUsNd8MLkXnCxgoKJjvQEFn73KN",
  "key21": "39uyrh41cPNpS7ryzumNeHvZVZd6yTLw31sXspGAeRhfWQ5bLwvqP6mkY4cU7LjjbnycpcBoZC9KUSwrRnYTHHi7",
  "key22": "gb6DVnYnnrUj5Ur34Zn39RMJdU6hoXjvsM1aFuwahk243ze8FUsHASs98Pgb2R2R9pVVrzCPmRqEPUPUcFQxfNW",
  "key23": "43geNmkvjNie8vZhk2SrtKywa31SASyc1JoiUD1BYFFBA5d15A9qttUByCbBQVkru8gj77SxJxPCUV6S9o5iKMo9",
  "key24": "4kydExmWXN5qM79HctFbHH5pr613bxMhaWJG6MS6togEU9nUGP2oCxNt8ZrBntDZhwVeqrr62xqW3ZNc8cZmNGVq",
  "key25": "56bZo26RXi77dnDSuJ3kYhAH5MTZ2Jf2rBSPoF5pHi3iV9kZzzoa3M8xSCTx9uHQjs2WoweksRFyN9SsdqhfL1jn",
  "key26": "31ajNT4NsAnXy2o1FbkTUG9fgpUM2J1Ga5H58FDXgrbgjdXTUjvPMDrP1b5XLYs6SD5LDpSNcynjLguWu8NeZRhZ",
  "key27": "2zgXmNyGL6WHhHzpmG5nUARzwneWtymKK6xbNrMcKS4zziHptEiV6ZqxaEres5m8XeLc76PP36du91hzZn3gHfPY",
  "key28": "FLfrRy9HtfyX6EjnBESa5vSKarh7e4MWZ2Z6oTKH9HtkF9h1si1Uew5vuZY2MxSSULYmnDoo1WzwYBwfhYEG1M3",
  "key29": "2XoQGSqZvC91MFbGg2WL5ZHRa3H1jPAhGEmzrAmrynLod4sVAGitT9M9AFemoxRXJSfjU7huvSnpmRHdmWujDJkN",
  "key30": "5k6ajQdB8mMbjXZZsmwMN9QgGY4tbXuC5GFVL6qkKD9dRnWQ37wVuX5fiufaDjdYiGvRnKt3WBQqv4j95jDTkjSJ",
  "key31": "2PDGQGPJDk9XG7Z4peXtsHd8JymnPh5zT568136PrpejiVvYQxKpGMWPqcbTYL97mPtPshocL4uNuQrxfg3dnaPB",
  "key32": "5vRBpQCdaVMyZVBMN7J9nXqcbFUGoN34nmgova9AmQUXiveKRn1stBMrvYZ5sVBeGVG3SfKZqo7jUUzNBYRrgrTE",
  "key33": "2pEjV49hSuKGBTKdTQ7t64BYfh9GpvwCF6bnBu3WNhtHHLzNRQ68TvfzTa2NnoALEnKGBJCGFxv7gmi67VzUMPs1",
  "key34": "3SoyAoFJe8PRYL7es7nuy3ZLJEbQBS8S3vMFAnaooSdqNZY2QRxZCdY8Xj2U4GhRytwWnKwWYoSkxGS3KvG9LZxG",
  "key35": "5tTivUPPfo2RRc7DiqNKc8bZEZz4pVN4LkKPePoHNGjxg5NY6G9iFE85g59jjizFMAr62HC4B3123R7fFDvmnGv5",
  "key36": "2pFE88Wji5DsxQUt7VJcaeqBx8EApqJx9JfiRQfUMFJ1jKkgmttZAgQJGeQgNrXYk8YjV6TDuotxDizYiQd7jsNH",
  "key37": "mzJnE2Xe9BLEhDp6z6kBVcaFYyox87PVgziUH4xJhCNaUqYBHrG5PYerbU9LknU7xujW3B67iv6KL7x9JJvWdMY",
  "key38": "3iUs9ZxAaRsFPZnrm6pDSzvweTESuQQDQrBYyF71UtYJxpPQEahCzvzwyb2KTzvT8RzVRRpQG8kjDf3D1nMG279y",
  "key39": "5uWT8Dwm5GGNVjnY41YzsZvqKjqQnKJRb9ZbRYg5GPkMiLmKhkmCKnU2obDKrh1i72i4r6dfpSp6iqdKAsmzeSgn",
  "key40": "4yFBmX6ZBFoa6EwPKUTxyZKUQMpQkvBuuN6xomqJExcxJTCAKCQUoUA5V68gAZGthy8VeefC2PgcZiUWXMt6pJbQ",
  "key41": "37U3a6VnLqgbSZmHQHXTCvZcCJM6ST9mZw4gGkefXcwfKyjwawg4G3WrLpqFHLB3A33Z3Wu4Jy2CRCATEBm8E1nt",
  "key42": "5W1WhgYbXhaAohKUG5JhHCDCJJ9FFpYxTh8eXRV6iHUUHvJk1SH44CRnaKBYYE1SZFBbhpiTCXRLdXhVxLp5RNuF",
  "key43": "3YBkcHaJEzTX5gYyFN3ydkpyYAEfeyrg3njhzWXr5nZH9vDN5wtDpa3Qq5qRNDZi6adbJB2XVGd1GYpku1axoJq4",
  "key44": "2sKifdW3hYdPhF1nwWeLDSHzkMMFZDxETSRgwjG2DfsH7weBViSPVVejkePS1JZav1qswvw4PyyGk2bYjqhMnaP2",
  "key45": "5gNrKQzFHDJnQ7NxJpyq1y5wVWx2aj73NoFQee3M2W28rVudR8eHuAEBJZBdXap1NAqwxMBXkzyqzRcP8N6fx1NR",
  "key46": "2LPKBjukRoveBtQRhjGQi4H8TT6jMc5XZMhhQ4cnpjGTp2gQ5198Tk3qUTFWPg3MJ6UJQFZyhKuCJNTgNBnHYYWz",
  "key47": "4omi9zkuy2xXode6CixZeWPnantm3QS8dgdCxhr3aYaMYaZTmdLAfS84LGqpKwJAUDnf1mbEAv3VKzLhPsrKCEFY",
  "key48": "5vsZCGkaRiaJc9HCJEKbeKMUFz4DATSoeSVD5RdS4PZxfKNtBvW46nVp7As7CufFuSifwMGmTJHXb6H9hnLhiSRL"
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
