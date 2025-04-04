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
    "5JiYAh1kXcZWaTGnrcHyArqW1JLuYPoANYFqMrpWhFdnFcF8n6iVRPE1mJbuKqpWWZ7irofyACupAaSZBLyH5qZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HBtgFyW1wzz6TochTPDvA5P1doRoh2VY1ZQ9ecA1CuBQLp2oAiowBeRTqNk6Yx7TVjh5yUCUjBxQLBnqzJQva2J",
  "key1": "2bxcCRpvQjRsffuzfhTGMsD7YdEMJNCxEmPL1j6fKmy6j4uyrPVD2cr4TUFXsxkEWGA7dghRzSTeQ2CzhdEKJvZD",
  "key2": "5ntvGG4yK5E6j6YkUV2uVPWbMxJ4ma4vPcHHoMN3AWDWDUzqPkBy53HDAggWRisJpTX6YRjsaaw2ov8UUP1pF8xJ",
  "key3": "2yDoc3k5pfiqsctQKeEfCgFz5AsBESUBy96mY19sX25PN61N7aMZuRYuz4LZzvN7awfTAaJAiAAbDSx445dNbCfd",
  "key4": "4DiaL4Zfd41r1jHoHkEux88SLjH1sQXnHRWn5NkpCnL757r28Ky9qEaTVSECcLsxJJyWdNPNC5fpWneEeyQ2ejoT",
  "key5": "5h9c2ziEWuDL9QM1qWr7PFkGaiN8Ygu5aMCcDbsF3K1ChCvy7qzYmgHAux8vDa2C2bnivuhqPcX5EFot4hrJ2iS9",
  "key6": "4SxPCZwxEwBZzrvmzfMriY9emK2Tkzc8m4iR4imKQz9aCvekp4ThJiGVeScWCNcYNYaSbVcQQ7k5maY3Dq7ha5F1",
  "key7": "KoDNEWL4YX6ndadji1RJNLLkoxC9eyMsvNQNe1T7z1MYMF212BVmYEGG4eFNRtVJWdq56eTctd13iv3FoYCQZY7",
  "key8": "Bqrg6rNfMQvLAN7C9NnEdUrAc4WUgGXS23h7UQmFdSLTJcfwRamF4gxsjL9zTMj5mT87WcJhAa9pPTH131pXtja",
  "key9": "3g38hukg1hAQJjkHe45xmshWghSmvvjrGG42oenQr3wHDmGUWuWS1GBBYTHKTZ4R489oifpW55HvjndwpzE2LhMi",
  "key10": "3kuhVQEVEyNREC7tKJU8fq71rEjXQnzzSYKNWehK7tpk1RTtKhXDVbsBvnR3m8bQpygMhRZhKK23Yyv1wdxj25aN",
  "key11": "4gA8nKbCBrAcfdnBALMAmiKPSHDNEGNh9hgj795MUZXK2i8Jd4sopS9ZXyfNPj8e4GNpeQX4wYNcgQDu5WfVM2aT",
  "key12": "21KA9x9iCFnPazLSHKiyhFLJS4jcEuvkz1VPSMRaKxfh2uuUThjZtCL5WUH8nDLTtQ7iUh5zhE1czJXpcAYfL5PX",
  "key13": "62CztBAHUuEJGC7wL2uz6eawY7fiSU2fqrErbT9Fqr4gCRRepHDFEDx9dfg5QCn9va5bMxgJQzLvma9sHyEz1mCY",
  "key14": "54VrLoSmxUYbKURdXhBPFd33nFKhpaEmUZzx3fFyX8v4pG2qgvEkGiQVy1tvAvtixY3ydWoGEKhWbwvtGmkUcqzZ",
  "key15": "JxyzBsK7FUztButbsfQTPPdZ33U5zqXrTygbFJKpF4cnMcAePcUrg6qszJmcPShkfmWD4JnKNWxQWb9veGNUWgy",
  "key16": "3Nq1suwyb53nyZZpLTKURu4oG1QbQ4YMa48ogdG6fGHNLc91PrFiVo1uSYhYYe4W5SdNBQB4xEq9bJk52zDMz6nM",
  "key17": "2iZxjHYjQ5ZfVETaJCxv73w1cfUFYBMDHo6v2gLUQ72GAchpPFYKPkSRZVG72eRm6s61WiuMcEeXhk4T7Xztp8Bq",
  "key18": "4w5djgrrpWbfcNRspLezJXSo2EJnPoaCqRSJLvN7Hy44T8pHfiVn8bWrY3LT7pa7sbCcSKLtsAZwfeEvCjvzt9VF",
  "key19": "5iWb9fjT5FXDQiP3mUUj1CL6ZfEobcmrSZ58BJaHZSV2bT7s57d3Lt7fvBTxUZK8rzEFMmWVNuBzZCokdQfww8PQ",
  "key20": "27cehzSRBi9GHCe8kY59875m7hSyJaqRUapYk3RRr6H2vvE6YY2xPNusyKQRtVGJGBCYTXPcNE5kMXGWVG28TfUt",
  "key21": "4cx2oyTVAbNBuVBRFqdBLWXy5XARiNk9WAW3zMWuSqKVND6YFfohPUsMiJGY9tMnVLupEyW5AJqy6Qbn6rTCf2cP",
  "key22": "4CxF4CgAy3uq7ojXjev18LQxnGTaE6PyQJVyzr8a6ffXth4kttKPRgthSiSaVeqL6GbqPRXztKqAtR9xhqcSMijs",
  "key23": "3RoG6Nnm7Qhpi3xJYLFMCey5ctnYNbtG6ksJMPDPzw29HMnY5xbqPVhV7XC2zr4kS3vziYd81sZEf9LkMbLrgtXx",
  "key24": "3ZqZvwekg8Qp8iRHGTxcJdU2boFZP85R2xRa6QwhNuxcTHGPuUWu48PFFZD3cHT5ePMm3giEwRKZQVVqKLzjRGEJ",
  "key25": "4kxqvvX3n386zjRzsFMDyyfKCh1YJrSBUhmo6urqawbZ6F9sX3eYzP4NY4kQbTY1SPRs4znGXcFnb5JmWvxmisdy",
  "key26": "3SFecDvj5Ew2iFEhvzHnLgGRAXxyrxwMqiqbTqqkqY6B7S3aztLsHPucBh6ZA4XKPvDeqesmELkuZFpJGbWFtcEL",
  "key27": "XxoEoL8VGe9pA1XCo937GguyozxJrcYjDyYxrjyWfPWLfZnKabCyxUPfgwxgz5bk1PSx8PWjD87jfn2z4sVpKNA",
  "key28": "5qotEz1RXzgPA4TsUXAfBbC5Gwmma7fXrC6VpRVAfskv7D15BvPTiRw1Kf5nFSkd12vZgmgtrd7dWGVWWaNsbWf2",
  "key29": "3dS727GY39P7zB9YE5gutbZiiCWpvt3jLmgEzVLABzEq8JKbTCjYz7Hjimvv2egHfVvNoXyt5HzZ7rTgrFrgvDsB",
  "key30": "2Pbb16WL3H8hrrY6rTjn6Gtbuzqu6xRJ1sSjPm71d4ZvgcRE8hkGUE1ppKLPsgnHpXJrkegBH5BMeeZNAAFRz4XX",
  "key31": "5zVKVSyQvGhbfZCn7Afuj3geCQnzqJ28n8DsqTadwuW8hXAGuyj4oFdSxhFDLZGDgEdAoMRywKLbXQtffzJdsbXa",
  "key32": "1263XtTwVnDFyQbBnruV57otR78qh2rC8AnSogFTpe2cjod55LcQcqVT24KtH33gHQUKUj26vYdPMZmQrgwgjWhY",
  "key33": "2KoUMN5YJwnCxbxTsHbKjGg5myYgPxpSFY66JUmU2Ltr439cpuaNU4FRWR12vaq4s2oaTKdHDSZ7bXiaYtSb9M9i",
  "key34": "5ts1DMGWzYuVEAEZ6ta2hp1gPbxqvvxKqazjM12GAGMcPWuaXB1T1uHQSEwnxAJnvaMi6MrCi4ziRfc1MtQyY3xa",
  "key35": "335LWK8jZFPFPsg15ZukwrqZNNPUachdBZX1xCKrbQSMt3cXFoVyMM4T59HKjCRukKCy4pa713hHr8DEpBa4Dubm",
  "key36": "2MX18mCPtHSnGBH7mDeQBc1Fzuuuwhpu4TnSbf4mqZyfEgcEqBYKU3Lmhxejr3gm2QQCXPbSxSn54eSgDNtR3DnB",
  "key37": "3hSV7QRVYz6GFZvAC1eD92UZDFbvowbhFfu5RDKZv3WikH292kDUBe27EwD8rCQQo9R2zRHJ25BGnTPPzFz4zvwm",
  "key38": "66LuC8TwuRwN7MdEK5aw7wzmhU76HFras9SYkpZX8uuhUiyeqpvMjeLcg6wRuG3bm6hcb2txETYDB4KM8uAoP9z5",
  "key39": "2TXgX2NuVqF2GDeLd55fizwxPzGwTdBteZu9Lgs5P4V1g6uJKAnJwbeQjehZ9HCffg4xVfbKtH4FtqMcS5zPQt18",
  "key40": "4JtW1mo63L4i4ekEhtcSc7GyyFZeCqhGxKiSgyDmLj26BLqxqjGTnnRs6b71RoNafxdjwikTxqxL11Fi9acW717w",
  "key41": "34tHjYqtfbY8RRtUp3gmef19VVbTBkMTY5xgqfbgggvA3xatdVJcwAz9BsReSAXoDjz27Pj68XnHkyVuWrxSGeZ9",
  "key42": "2hYD13Biequu6TYCuZ3AzrTs6KdVpBqXDdC2AQGcbe4vP8HE6frCNAefPWm2ugS11M2ieGv98fiwerAnZbRPnZM3",
  "key43": "27w7jr7nzh8hRHEnrVfqdCmE2UL3By3cFnpPhgb3MMnFp7PVEqBdn9V2Hrdvm4XNkZQfYVMTjLEA8gh3eyqRZznV",
  "key44": "3rsPpSemUtzb88KSZtDSrUygcZpNzh3drkCrrfLrREuPvBPxdJkfFEH2XWWEsjv3jfDdTzXbfBoCPhzww6UjF84a",
  "key45": "Ut5mpN6CcgB3XntqeKX21pYYWfUnB42JBW7LT3MQhDQFKdAWFRYRPLsvRgjysP6WZmkc2MZUjrTEDpEpN1HNBvQ"
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
