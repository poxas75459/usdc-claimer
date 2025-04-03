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
    "Jz3j2Arm5XbrVM5Sz432Vb62Y83kxpHMFAeWVd8pJckWbsv3PsLNufDzyMG5oCZppSUCHPkvW8aBvyiqvLB52Gf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mg6g3fBf7Bq8GYpfhfqeZuwb1bt7d3YXWzik5sKwb7CsXzfpUXUmdLCnvE9ciyCp4Kd17cbLL6Ad9u5GdFbFAJf",
  "key1": "3tZC1R42UiQ1S4C5QzGxPaKCfQ5X9MRsaxiYnG9SwXq8s3VS4Mz8xvmcQCGDwUEA6E6B9fKp8XNj8Q4QG5WBL771",
  "key2": "4qhQXmXqD2RDwrpUBWogTw9qBiK83B7GpsJ9KDkbnLZ6tL8BNrc2hFvf73A1ypzNuFTcmWq2KLG5v5EipokmcAiu",
  "key3": "2BsEPqhUZYyEoqHrXLfLcXUBtGQpSb1s6Gq8NoEtH8xcnc9pQBTgQWpBKXkFq5sfHaCed5xHUSh3qnyNkyvAc31W",
  "key4": "2qr8tx2TFGXQbYjojXZmjw2QZqzog4Te4awcDUskeBScL3pz8fkjiAnRpcSK3z3GVnUGLh7hctqqZL31F1JA8KbN",
  "key5": "dwV5yjij2zobjppQpZZN9tWfhBfCBo8KPGmx7SoZ67hHGNXjpcYgDXrH2Qt1DsYhHmbUcGNt26REv6RnuP5MLSZ",
  "key6": "4dMcP9NDS1pawb7n7Jqhc7JdUzaMDfaLx8pFFJQTVhARio5JESq1Rqtzgh94dLe8uSYkFJvXF4gVPKWaRsaFcQa4",
  "key7": "PMEAgJ1Kd5V13wvw1tkmnpGh4EUMnhAE4LeSWdzgJpqA4g1rFbsf6cQFGygx9bLRmjJB6MrhRES1kHNhFANkddw",
  "key8": "jTv5Dzib3WDWoP8QQ8zzTVG5Qpa3fJj4qyRuAn6MEALTXCbUacgKAZ1ZBfGmmebUSNnALehzFbsCkCfGpxkDR4g",
  "key9": "4SLfo9JsNekSvkZdZL4ZuQaXetoSqKvkLS26zsxCf3UbVF4TsCyhMCGLUxjyARJiEFdEnycErHheUdfvQnwUhjm5",
  "key10": "54MVdDi8JLCCWGGySNdzJrs2bqkJ8zDhF6Q2Lme8Q4GgsKQcDV3Emz8trUoKk84FST6DwhvHsgzFxSLq8mMChxqY",
  "key11": "3cbTHSXfzL2Scy9P1po72vMmVB8Bvhcry8Xw99CQPEUVx9JSt1y3sYbTCpEkQavKTL25UqigH53Qx7haK3vYHcLT",
  "key12": "2taPA9C2ip5QNG6t1JsmWWhHGkPy8pL84kRhUwtSdDX9XGtuyZLVaTC1soQcEbpcZB3nHQepRcoMobttzqGGyi9n",
  "key13": "5rUGAid7dJ1aXaK69TFgAQVAEWtfCCfn9PutFSiWmoztEd5nQLb6RiW4bbdui1Qb1t9Pzpmox75FQjA9xS9Y8a7",
  "key14": "2ec6EZqh3BxWjsmQCsdZjKhPQBHLtrGxeQCT3t2ptHfFPzpa4GznVsWdbDebMtCvmQSTxDA45fPEvVJFHSHZp4Yv",
  "key15": "57X2CKdZDdGmN4sA2AmLY8JpTSfWWZhDd36jspU2j9fFgNrLc15MLRyHw1D3zxwyejfJPc2bRLYjwHqKJKVjxmB1",
  "key16": "2kHhXh8S4KPzC8p8nvSWSKPF24X8sVMBKzqKcgpRpFX85zdwJ8XaJfUiGyMxgV1Q71PixurD29LDqZTyzwHAG35R",
  "key17": "3oVoeLwaC19BBWt7kiswNCeh3vGLX3KKQoCshNv73svz8kimnsza6y6byeu8xDUypBodgdiz7Afbg1UhXbko3LPs",
  "key18": "3xK6Xn4RifMp5uDzHecRcGej9V8W7WYDh6Kj5S2WjZpzwTpYUq3koBFTehuSqu3eTkuPX6rpb2sx1H46KwsxgYb8",
  "key19": "3ASnBzPZhpHrKkDpL3BorVES6BpJBvTWnu2GQkq9yTZ6SD5CdiFdZb8cBZnpcFeWYenFLHWpy6gLYCakKhq6SfK8",
  "key20": "2NXyphchJgmzH78Af5bY7JDJmyTBPzCg5vrHHKqFFRPk3sTPQMJR7s9oVtMbPgLEXyKeVYEQApeHoZoBgxyD6LoT",
  "key21": "2rDT6UE7QqUEtqKweWT7GNEZvthbCXLhxJHMCe64NtSR2PJEcGjwihsRh4EmpEGz2ZRn5qCVQ72NCtsBfKs9Pw5j",
  "key22": "3JDDFh7uMPqFDu1rNN7qRPgTAnEuYSYf1ZTDz4yKZdjhkpYRCNbbTwiFd5WDgVt4CUyMhPUq5KLby7rwphhYF8ZH",
  "key23": "KSj5KQ58sQDBkLzi5Y458qqcnPDqXFEPsXLu928XoZdoCwgEr2HuZsUy7cDPAuSShFUJAKAU5NrkRiHszWnmN5d",
  "key24": "pqDRiceASL9vfWhg2saEMFZbRgLWPsHox1DbevdbA9x6NxwNmwJs8PkTRABVaTsSKH1TESza1f51SVWKWDnvikr",
  "key25": "5g9PvLkrYMLQM6DwjuDj7DBUGRYNRgFCL1bpegAuG9DTGNejAZyJrTNfSjZhppQCJfHpAFPUw7ycEmR4RunoDDZP",
  "key26": "3vW8LmqQ71xmwEubwciibPqkhJygeqSKXQtmQvrsCoDxx4teQM915CA7wJJFuXewVcP2iMWT1p8uEvnft4fF1ftj",
  "key27": "5yi6C4YuvdtnxmHx1myj6PbDxtpirbkczwmpwEW3zc6WBzTrcrXq1DRr2JHnke8vhD2hgCQJeMEr2gGXHKcnMu68",
  "key28": "27t4nVpeJCzMhpyWXn6C1RCPMTVwdb955whryKZRuD9mspbSKULLVEP8bkA63TCByXrDuTSEECKPRQ6qaRrBnYki",
  "key29": "T9WjAd8GTF11uGkUMEsQLq4eGAjFFAQznDDjb9jPGztaiwtHCvYkQvjiLaL7bJXMJYNDkH65WG1SZ47EbHMCjJa",
  "key30": "3sFFNdhAvtSw2HXBVPgKmH3cDD72DpCw37mRNYkFVPD7QW7Rw2dM9TXsWUVZTWc5pFcazVgn5cAgS6yBiyPkJBsY",
  "key31": "mHJqi7Dq5Eh25XNGFjwQcLGWsvBumt4KFrsQ5v3pA5Ase6Yj8P5BR7GFcAgnnFwjFUtMoGYUskZdWA7Pa3Crzzu",
  "key32": "4qtkZHLTQnExRYeeW2F8ziHyUUAapQ1fbD9NpybZCNAdLDGDZR2T8TouBYZX4B9byr3P6psZoZdQM1wS4HkSWXF6",
  "key33": "3iN7Y7XGhsPNFk82nJkSd2Yy2qpMvXkdbtqkb1d87cef9CEUGkBzuhn7QD6NYKzEqMpHC9mPFQZ7PJAJffhNmpEa",
  "key34": "5U4sQ5RAvrG5dhRwFZGy3Q3hwtuXnnT7uZ9Q8FF4Xv23eyrXfaDnRx6TPoUwGiGgYkA4wHpGjW47h2njKTzLRo2F",
  "key35": "24zFJ9cGPK34vwe2himQjyByxMLExaEdfwWv5tYaYeFrgXHLTcpcZK7HdmvMuwqjtiJ67pfA8BEwh6YqMue1coX5",
  "key36": "4ZjbzJGcRx99fEiesbELR26YB2NU8nLEH4gCWRVJg94XaauHWGwyNUNtEsycM5sGLHeRWTWQekfpjUSs9TxKHMPh",
  "key37": "3EuvLQPGxNzsHb8gBCStoCLGh1R79ynYtgCJ4BjMKasV7iupvtvCgDG3vQypoK6HbRJLsznii4a2M4Yt4Xt7TK3M",
  "key38": "5JKVMbLbEfi7f59HfkttmGQhqZJ42mvY5PuN3u99Q3vEG3AxSmvwoYVsqhknVPHaNUAqPbKBgeqNvKfFUerpnC2q",
  "key39": "35ficMv4QgnYYwceefJV6fi2YGDoJKXeK61HY7C5SRr4JXMpFj11qkYdrESip1rPp3B5waHY5jjo9jsxZK3sYCrR",
  "key40": "5wTw2fgL3aEeLkweJ8niGMSiZbbqU5hy7f96eLSYqVDdkmzviaJNfgmTMGptNZ9TgyW4YThMMV3dC6CGDN92Q1r4",
  "key41": "56zoDDu5AhwJ9f3kmmgDY7D46aqbjvxX1U9L3DwJhb9dYrZwYpYd6rDzR8GotkjQ14MzHN3FsxSLivJthWNV6Bb2",
  "key42": "29C7zp7zx71gfb2dpMBerTRiuZSyoofYeRdmYN6EtBiS6do45KdoGGMdynTvHYy4ufcwBvhBtTkQ8nz5wevWi6hV"
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
