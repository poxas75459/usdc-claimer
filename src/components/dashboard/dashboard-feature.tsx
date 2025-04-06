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
    "2jzsrwdwYU7L1Qvrfqc645LVAJfF1i479thgELp4qhcWgXf72LCWx9ELCDLpjEc4BqLNAbpVj8EUuarPnW9sZ38S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4USbpFMfiWmBReoyGzejMmwqSYebuAjw3pVX2qnwDEgF5UnTKA3t8U5KNbF6xPu4Y1ZR5hp4XgZkYjrjFfVkBm1i",
  "key1": "3zuEgVEyWoK3W4era7FDUUtbXmCDRo2YzvvWKKAmsBAa6Gt4Cn4ohXZMCic2GJq9PNimnQqZiMWjTijpvmEvVyAn",
  "key2": "32UFgt1nkP9BmrpxH5VeG5SL1VPok79PZu1ZJc6MZSYRW1ydC7GDxdmfUutY3XWd5HzCuH253Ci1gxJkpoXSNzuX",
  "key3": "ZUCvRAtAn1BRuHLhvTdaSKKAqzANZCJJHxHwaRLAr9os5aHZidx1gav7eeZY5Qq6QEZGgihVbYav1tcLZ4YbmNH",
  "key4": "2qjuQ49Tx5ekZkVxYTy3QDSR8ZEpj4Z4J5H9LQuaM1wQyjxh4XTTkCsBoXRRYVsQPjBkbQ7dTf8X1oQ52vUzMpVB",
  "key5": "nurC253izch3htHiW9ySC5rEkUjE4GDCzdogMBcJ8AmBcyHzSzHVTPcK93XGWHfkvn1FmW7tTgjw91ypJCTmHgJ",
  "key6": "5yRkG5YMASmvj57szFCYFQJEedyC7i7E8Wkv2isK6Yoe3tXAkxJWPdMwRLtqa9pPCCbhRt3LGMtPFDAcrFUpbKFn",
  "key7": "26gGzSN6kZ151QCi6WohrpWi9Mi2Mxo29FAdFVawYTgi2qsThpRg4r6SVEYtWnoLNJyiBi29QewuopTrcorAAUhr",
  "key8": "5HPx91E7kTaJxRnDcQg42wGHe9WQd7dewru6uXdjy2GBCY6nhd81d9Kn8X7TA5rZCrVFaTSxzJb1voeQtP1eQchr",
  "key9": "5B7G7QSRqMco8Ysj3Sp3ptP8qfTyZ3HJZVkTUYuSoNUapQJWjzCD1xDY77tTqXGVSgSCCLGRhubdthBpUgciq6eF",
  "key10": "5tCFfepqcXNvaPPUt1e1YkLcN2QppRNro3KENkcd25JGwj4JfrxgEEyeXt5AzpHkE2awz2w89TjxRXQwEkVRm4EA",
  "key11": "5BnA944tk1Cq7FN85vnzdCd8AyM9Ev3auVS5qd8bMb1edQ97FQeDW1sCanMZeVttB7QVJ1hswhnLmPCBqc8Qaewm",
  "key12": "52eBUKUDA8TVNbopEngWPY3yDmPjWAqqX5fsW7sJx94iXfWgMVtrQsViKqbop9AzR47L5Y9GPHg3kG4UxTb5WdQi",
  "key13": "3kWvRXaNDTwpKrdyniCi8b4Xv8tUxaEcDm2BTbhbwxK7oquCiWETJEVsWPEBfh2SE9536dacLxk4BUBvHqZGgvmM",
  "key14": "4514vEMMk8UiWQY4amhrRWY1gXPvx8kXH8ESGFT3SJheQEauYZZExg6dvJoo7zNzArNo621MhAzik6az2jQBEC9n",
  "key15": "2FfRqvzYhY4NXg4inJ4qfGQ5XU6bE5GJNCNzpjobxMSLVjsMLfJ9JXrHSk2xou4skesj8GCEfQ3ThTDDWUJ6zgjG",
  "key16": "3SM6c9ADQkgMuXt6prFsLEw2bgymMLqJnkWfKhrtMER2ADczCFrjV6fpfUHMEk5prLNSpKdxUAn9FipHhVQCQZ7x",
  "key17": "5z2x1YYAJ4KYmnwN2mj65AvT7BW4BV7o5M4Cu6AQ6rAHmKZuYbkBHaqFRn6eMdT6MwSusa5m9tvKb4hEoPi5dsjy",
  "key18": "owL7fVYgP6exLJquobtMC5wSjhHghwj3YQ3aY4g7aKU7iwozFnpri2S1G3wuN6wo1gj7aNpgLCDGgCf75Syge9b",
  "key19": "SPAhf8uoKjjVPvZFM3eBoHcWK6WskHDs9dRBkCZyaP5eEoJmcRz9QNT3f69QNXf5ebuzwFsv2eNjBWMsFpEpWC9",
  "key20": "4iyBXeAVWddKi3dg2mCMVCuX2bv1QW4kSLR691SdVLH2pFjKbURWEKRJjgFRsSNPZPoozv8DEnUgtnvL925Toktn",
  "key21": "5VmAhrz82WoEPDJ3Qp1MC5ndEUuWj9kdQ5pKMDm1NaJBu5abUzJmxB5gMeCVaZoSY88eBV3GirXZUchb91pnTffK",
  "key22": "5YrgFCDWZRKiGAea4tVod7Q3EzJb92i1PrEwvspoJsm475Cpf4FmZ45HitsHa9H3PQXdnJW1G5T1jx2QXEiMmsJS",
  "key23": "4k6aWy3jhfcqcW7W7oVUAfMWyz2nYRHTEZWk2PonuywYMcG4TytNkrVUWgmjA8kYig9k4EJoLk1HsUe6tDDt3QDT",
  "key24": "66Bh14qstELnzMAD12U2RwwaQ1uZQcD2qK3QYWjBn775bL8nEwrrrM68WB5d56QCz1sztM8amJMg6AYki1Ehg27Y",
  "key25": "5hxoTpd3D7SQzfCkkoGXZ9TRkJ8TAr2GWfJfsvXfJBVbqtWUENraiRqKaShMCUR8uoshvTGUc5GcbkR9hqkChpGd",
  "key26": "3LbndkViVqtDZa298gkafyrLNiCffK84s8r1SoHwE8xm3kzk5X1VG74ASVYKino85VH2JFsCViV6exkdvy3A45Lz",
  "key27": "4eGZwLDyVgdJVhrxJN9Ab82Ypi81MR4XPALTSDyRYQ3iinseGJkzADhEmiEGPhNKZZXKCrv3gB3jCQ6k6od1P5nR",
  "key28": "4SDXzsWtnwrdqppeWQHoT1nT4TjneDbuAMbS1iNySSqakwuvo8qGzzNLs12d7MFRsJ9uR76SdeF5uZFdyQ9gXQ5H",
  "key29": "2UK1ycqE2V4ZcW4oTyPrGqDJ3QmioNQ3tNtkqN45wtZoKcBLq34uGjgp19TBuq5s95FSuYtduUqMFZ84SGgXjWKj",
  "key30": "4uYqxXjmGc3CxLiU18XwrnWBBTtjdrSDJHW9AV4xqRVVwPXseeiP2qh2wpLDoEwUQvKedVs8VaSFkEBdscfip8fk",
  "key31": "2hKU44HzEDKG8WhfG2C1oDCcKZmkaoPWWnrnxgXtyDa6ieHzGafDEBjFz3ScVCfC6qdfNUtL3W8Wex69zCVsNXkA",
  "key32": "3kuPf3g3ncCdswDDbcewSAdCs3o4PYZn9vYJxjR9NDxwsL6HHM2o4wtPzZjLgxLtU387i5LU1nQz8frRyyMufRBz",
  "key33": "55hjsWhjEyR4PzyTi4ugJbEUdZf3344FbEBEg6RYA1tJLFGhjr6nLwWe28jLBC8MrgkiKNMdtwmf41uvT62HKMuL",
  "key34": "5RUMvYVJdvLYbizqnHW6uBaBGVkWY77L8LQ5TvdDMtfvxYnXLKzXPEVAssCYo8GXh1udsW5TbzQjJt1CAEFxiWzD",
  "key35": "5hW4ykSduzZ3tjjU5gyiD8gPaDej9vJdwvhdqdmnSroBs7fJfyaL3Ru3KAQQ49jV6aUd3ZbahfqgDhPzGh8PgvQb",
  "key36": "5RQEW1X4LQqZxiAKQD3dypi1qZpwQL6vMqY6Cz4wr8uqwYd8WthmhXxjWgkr3mVo3kifkmbijN3TKkrCCYzPVhxw",
  "key37": "3PD4reHM93nzhijzCX1kT1CxCaDuR1JkX724sozC1pi2G9kkyD7k9nx63xBYyYZYKrystyvgbFXtMKcZq4S2LNbR",
  "key38": "4phNdoddb1W75VbDerUbU4RzRQ7KLaxp4FQQaCuFNA2BVJHvCU1Qx4PRojsYjuy8HTBi5Sv7UncCFGzPKA4oqDmp",
  "key39": "48PPuRE2pcB3yRaE21Q6oAbGAi11YegbhvYzT1aPrtkqbr4hLPYDvmnuLoyckrS7Pgv7S6fw5ja9PbsTTgJdEZyc"
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
