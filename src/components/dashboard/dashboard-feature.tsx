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
    "5bfa4bWMaYyDpkvf59a4GEEWAhu4Tut1xhCpvErTZuxfXPtHE6cJtGoNgAtzVb2yevPnWHdxSvmj7pyesWFcMPs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ZWYTpTJ4CpqdnEYibgL6d8e9moSzp5deptEsjcgYsyGkCRCdwLJpKKKqiGBV8nuCP1oyLMMQaHXjgiex28VBVh",
  "key1": "5NB3VLRuyyRkX4hH77QaA5UtoPo598pQM18vhVcLbs7dscEEb65BhhxkYqUCyuLpUfn2bHt2sXGVtjcf1vwZkbKd",
  "key2": "E8ZwUsjo4KoGimc7hWc5tyDS7HvoNnr6DQnVsuGBjRqZxwzswJE2DVRUpHaLm5MkAuBTYi9knRAXB2YmHGVEaBp",
  "key3": "5Ni9AGg8HrnyWmnyE8tU1ewstA5FWi1P7kSaevTUXtDX9juBDKqEy6pyBV9mwNYCsAkFaFFcuvAMSp9SU3TvJ2Sy",
  "key4": "3QXvs6mraSf4ShkUtGz6u7xJLNuYXTwh8bHJix95MfmoLocqA9QHYtA5Rhb1vFJuhWJwB6tidn2DGXBGvJPPDeit",
  "key5": "5pCLotTu1SA3mTag8YmxRcShBDsb9KWkid3zhiJM9ikgGxbUJT3WvmTm9ooRZmwW5RUpJHgYkKUc6Rxvqnp4DZoj",
  "key6": "4SpyRaWRC8CGHGAujf74LacqK9P1AMtRjwG9jZtz8agcCzbj4xe384NED3cEcZA2JPAbwxanYEycsD7fCcuAfwUG",
  "key7": "5jWfwtcC7i11mAuftzvR9u8TR69XoE1Emm481MeKEedoxy4qWq8AyJWMZDT7NXycgsRdGpJhGgHwo3zbAz6C6TSi",
  "key8": "4t9VuvJmzFeGo99bLQNdC7Vx5s1hAmFoW4yygoFNxJ5gCipCFFchk8GnBSU7GxK3omAMTbaAhd3agQqcRRk4DQE6",
  "key9": "2SG8v3GMnqzqKcsyxp2uMeJdNmtzp3hPqNsj4gUjE7KpmhWsjZ3RCCkmfnmeoRdb36fmcgicxXYbCrAWnyYquH9A",
  "key10": "5CKj1smmb9pALSJSqvLsqbEMU85P6TYo6QXTSBfDW81vAkySuKwEcAEQwFrxX4htBoKRc34acNa9E55croh5FNU6",
  "key11": "35war5Xomd2zwr1cq7hpRekkEY6bdiDtait2D29EnMAyo5Pf2nVHJYshHjNVa2WKCVMqqzmgDv4fKpWCCQ73K1Yg",
  "key12": "48gik5eUaCYv18ZGhinuJ4uUG9QyB1QR4a2bzDBfrkw4mt6fkwWNPJGqtDJaLhEMAMLPLG46hmKS3vGCExLcN7c9",
  "key13": "1qyqrMXuvpBESEWyG4SmkDjBVEbfczX5MqJyy82vkjyfgVV76ys1j3M9bGfcCc4FQvbj8Si39QB16fE2GFTBLWQ",
  "key14": "N5LUpSUSif3PmvXqWh5PMBfJFAxvtpnP7U5CsBwcd6YGWCJLXT1kAdfxn4YZVtLQ3Bi8xWzGZszJjGCK8aficyt",
  "key15": "3sqc6LFmryMBYCjp9Gv7VqEttZduERvTpeoGiKimP1pwmnYUNaA4umTzRRRD5mL29DkDMEoan67rHo7s4E3RrHcX",
  "key16": "5T1SbmWKsBiiBAjnitXgvat7rJfU9B7mi7H3V26jeJZELuCFkVQF4btaCP8Tw69ePbwscNFPkJFgfYp7MQZP416S",
  "key17": "2txYm2S2gePrRh7gPngaqU85rqU6fV2fBEWHpZHqhKZP7y4jzg4EKsuToeniRYawHRZFLdn4eWEEnM69n7VgNH6h",
  "key18": "N17LWZaSbJEXusv6mNhJ3hEFo1iQGqVE2FPYS6Fn37B2vArqM4PHjH7hGsndeTDJGnr9JpcY1NQKo8BkoGy41Nz",
  "key19": "4fRZC2SWBBryeviknYoSo1gCtWeKXSV96FVoFmuL7hQFJfRh3JchE73ZuUo8w3kYUpUFWkTQ8GPv9eWix8gC5rn5",
  "key20": "RufvJMKgaQWWjJYdGKpURK3ENwUzCVwVNK4ULEac1sHhR5vHm8dwSxjwj6wn5XtWF6QkziMwdshQS4sqLiTrhef",
  "key21": "36TzPC8hWvY9MDRvPc7saLwJVXW8kihugs7qb6sNceDh3cMnpFRfjVXyXF7s9tWeYRgWT5rBFyZXA1LXBd3dAUZp",
  "key22": "5T1M9r1U8FtEhvYyfqPxWJD4hzBCVgPUhiv2T24998eh4n1CErg524Cgx9umCfST3UnoqraK49n6RjAQxP9Fp16a",
  "key23": "3czoDb1dSKqbHWygWGGqeWztXzKE2HdjDTm23FB2xeDPqGhGQ1KuEGzB4MCVwt1WDLNf6srenzEsAi2ttvYNTRdd",
  "key24": "52EJBR4YuEkUrYvFwprHiZAz6PHjWeB9LTvyxq6aYLUJ2qWUc8WTL4XqWgkcWuYMiCE7k3ZBWuCvDg9VLmot7oXt",
  "key25": "3iYrvYms7eDXzFBzvUhw9kXuF7FFgCnNbJvJrq76pG6iFs3yjSP5JfrVKvLNz88LKec4TmMj37Mxuv3KeoEe1qb3",
  "key26": "5tm7Hteecv1Jf5Mv2zerDgfu7vYwBJmzxMF2M9pugPrVq1YZRiNmSrro22J7MgUXuX2w5jN9xQ2wMsE1vj5HnxVV",
  "key27": "4JjFvXWuuFEKxGTnvsh3j2ivRzZy1xcSUJksVQHKrze5VTFFkec3e8z8dBkK32c1JKQ8AoNj24KqTyQUb7mvbdtN",
  "key28": "2dXz1BtMqbFZWLJY9UpzSGiRzAg1f1Ep6nEawVs6jc2QV5KDdir9LuLEjteeneJaegiQ2NoNroht4QaruTyGPX7E",
  "key29": "3WXEh1Afn4iCz53DHTTUiLSgrxrxYE7x5aou38BKfRf6TJDLzXKUAScpttVpzZcg3raii6LwnBR5r6219M4Yar5X",
  "key30": "3V71yeat47i1gi9j5HB4hNLZAqYxrat6vEYjyQ4exv4b5kND9TJkUAzDKYfoEkPfGL49ctnheu5S4r6rD8Bu1367",
  "key31": "38gdRnQRKezCkewWK4wLaPxdsdCnSeGCEcyfiU2QVSWaTBZ7uZs8tfdMrwzjFytuHmKdaaxqQzmpm3QKwCvT357W",
  "key32": "4LFnwksNaqxsZdw1uKnWaxE954DV1WEKF6Gyfd1Z2AR339hQsJeWUt6cd6prRi5AD2nPjXAKXE5AJx8gySfQopzh",
  "key33": "3g4N1VBGtME5jZabedNkyNKCBMG4bewD1Jg2MhDCuoyropHq5KHTnX8BaLFxeXgeRj2dP1wELkq6vHqvsvYJtWHf",
  "key34": "3T96DLx3s8ugCedAjCmDZZUfKHBWxJYseWEDhtxSCvxbBqmx8kAPNNRNRK1D9G4ktz45JkuiSxvPmGftVVmaC4eb",
  "key35": "5m9fUP6CB2oobDPfPJres6NESnC265RddKMiqRfNY5pQjSm235fLtcoRDrxAiXsNY1d3g1TJgFZfiebx35tYQ7Fv",
  "key36": "64bUPRjJK7sggQB1YpVEcPy4B8iPoMgFPhffnQqHG5q2QRAD3mpJQsSaCjFXRBnuz6EiXjiEZk58hBohYf5YAu5K",
  "key37": "uotFd8R4tV26jsTdnBnzyZRUpuqiLg5u42WcPiDwwg2fh3EnbGP87dZH7EENCrzH7Mqd6JAB91qg5adw5Q2N4tU",
  "key38": "21eefpYBzafc4hjsbobDJhXckqFEwWc1HPmCdWQd4RqJ4U9vsZuBuJxiDEsmMgMiNEi1tMXKeFnvwKk9NtWDkviM",
  "key39": "8JSouU6ct4qVDwCJDB9digGTWfMSDVAtPxYrd4m1axcCNGMoTR3sJrfqhV8T3RbstRLCHBgiYq5FHpUUh3wVzaX",
  "key40": "4zb2qHKUXoSZS7yfaqThBnxsfNyBuRbnNVqezfMtnzxjMxYeWj9gFu4F38SDbvtka9s8wsWptgDRtPBwFzie3hR7",
  "key41": "4dat4n7amsuvCxzhCAcSXQtqB1U9jRFMLqen7aCEaJxK9h2HKDLwgkkdFSm6Bkaxp7AddCLRkH3nFwtWRg9gASTK",
  "key42": "5BYrgnUzXtYm9wPhuxBKLPNDcWp7gPtd5AynQGdFktTpxPjX1amVUHL2eeTxKtmXivnruVpbfi7qKUG7FNSVa6ZS",
  "key43": "Ge8TFEfwUDE2SiCcgA1CQPVNDWjnR1CE9ymJk4Nx8d9H6MjbE2ia6XM18ktjnPH62XEgQjJw4Ddj4JtSyyLscmy",
  "key44": "3gvLcjwtsuXs4L7kEKXx3mEPFx2WZUNPWPoGxqy725jc2NnZisYyeeuaUqr9pNeHWtcfVcfiZVotUkS6sXWKND8L",
  "key45": "WR9Fgge6kmcoRdatDzpWW9MfBRfxERosSAAsUq7N6s8AtKuuYoR4zHwVymSTzCgnVoSaRx9QxwnreKZrV3CUuXs"
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
