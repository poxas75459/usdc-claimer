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
    "4YZbd576L6ToXg9wqSVzHWpqhhkcNG3oKjLVoeomiTRED3z1Ai7SfVYANQysvgggajppUiLPYvB5NyMV2ekqaSKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mk1FAuL6Mx74xcEV1frPRboWa5wpMMzQciJz76Mo71N48rvLveevbzehmSZX5999aJ2h8U7WHDR185F7Lms4bNu",
  "key1": "4BnKbVPcqEs36rMAuwoWnySKfpLHt94murWrEFXMXyysLo7Yys8YVXiZ1GteJmFfxNHq1pUks49vEDPDVznFdRkn",
  "key2": "262HbhJRpHCgv25RFRaT8nQMRnCoTBtK2Hstj9ib2VRcZSpmpbooceSfNo4vsVvgyRy6u5JMwpg28ZMnpxAzyXhD",
  "key3": "48Tdy4ak5Q2jjG8Uuvh5w8FkAxkBk4BYAueu6KVpAArMrRxvFT6fF3WqHsB6yoj9PPU3tTMjunXMubnpG5dFkQmj",
  "key4": "4S1jrawhEK9GWsYWQ5bpGMpMYUhBtNurZYGx4Pyyts6kpShp38igw1D1KE26YRxvKrtwjgvQTRHTatKkURo2dEB6",
  "key5": "33N712QF1biHwf8S477J1nEFUGmMuFFHNTaAdSRAV3J5g1h8GHxNBKdHRRsfMUe8E7ujgQYXtrJ232VuRwH9kFiq",
  "key6": "35PcwtLCmftj92WdWrbGrkrFzhJ7NbpqMFA4ST9y8saMp4xFE2HxrkjksUB5yfNtXhrzyLoQsr9UyLcf8QCrijDP",
  "key7": "jqnjaiZTgzema7r9UzCVhXCrEtdXVzynxa1APvRK1Eozf67m4iy1rVAhgYwm9gCEs2wtMUM1xhdvAZwPqArocsY",
  "key8": "5GrGWFUF7MuRMLuMAW7WDyjA82QuAeGQFX5ngXJyTSjz2NGK7cW6CrfEcyeBJgZg8WMF9mQcjUU3WCQZ1nrSB3yS",
  "key9": "2wKHS3Nv38CKXRp3ao8Dc4dGAGkLorbFBTuJzTQXezUqyKVTwq8hCLkPLi7N6Ywd6nP686ZWaL4Pvf7pDF9rrorN",
  "key10": "7gzU5pkzN373XATzyhpdfnxtDgfSH1x1okEz1U44a4FPNT2FJk39Tqr72cQWcuQQJDKL7YvBRee6t7q9CJLt1yj",
  "key11": "5kjSjgntHVttWbJUD65VA5PGAqaWcnyaUhLTp2aCU9u7LvEoqX8cpZLXmU7Q2bsKrQUQbPgFYTexcPHcUraueyQU",
  "key12": "2yCPCtkwmvSdNYXkrPPc3kz3nAK8o1yZXSWXUAR5ePa2ff6aoLZ36xZ3DTCyDKJGWSE5Y7yhK1X6xrCDvYQjZN4H",
  "key13": "3xzyJ48xvBMhewPvx6dcUPjqEHwutYFvDQ1opZHeLVfCLLLACbgAXkgYDLtnQKCNiLNhb8oUwMLaGcDyRpZdbz4L",
  "key14": "5oDvXjug7a9xCvHwZe49ZtsiuiBaJACEa3BmbU8ED16eg81wmCEL13bbYMnzPU2jtcDv9krE49ykopEQrmnnPPSG",
  "key15": "3U3MJRwfccZTTv6mEBU21MjSU6d1pj22TKBXTkSWyYNtKaVbFy41x2oHzEJ8zCB7DqnF51kp3eZAxvzN5LmcyS45",
  "key16": "3DMG2KLC3JDC6maSNZy7CRWeVVPBHzazYLwN1GHU2ZcFqPhvENR6nic4bNSA3JtPKwADCC3FmFJ4jgLpVwEQ4o9Z",
  "key17": "5KAQ3vfGjyZAfBijGve2hm6pS61kBGiq2Vynrafcy7PEpe7ivpCFdVBon6DxWb5orm37M8XE8APXShHp4WaKffSt",
  "key18": "5QGEyHv9YREM2LuMXAqBgZRmj5zVGSUUjaBj9REmvcayBPbkZUxMNcW9XUqg1rkX835ZZ47dqQivPJDxkMEdXgY7",
  "key19": "EFT8K6X6Cw6CyF3fJ57yQWHhqp3LPio5ovkeFyykgikh1A2gvCqjr6DZoeJ6YKFCeykmJjcaFybMov4XpwF3fjJ",
  "key20": "5YdkDGt2CwfwEZDXgWKxRQ6AR7KGh2GwvausFQqtkGrNGhh17wXsh3vDL28bpufH4rE29oky2kFyssQ5Wx9t3Thw",
  "key21": "451jN8DvH8jnvC3FF3gVrWwSYXk1igaqQFHCxDPdh7uZFoswxGqWCT6MFEj5ysrDQ9icpsPVy1zN6pfrBDwKk1pL",
  "key22": "2aRodtEtKr4y729EiJZkagpKaWTP3y2ns2hvTghVBjPYw8stC3efHkFksFTKhivotGggGMTpWpoBft7ertrhKt1T",
  "key23": "3ovxysvKdAUtkHAJfpGxmBuZ7zNmp5Mi7NmcQPHCv2oKCLxHZFjovM1JyBtznPdDoexa8fnnPgDqo9cuqqjWhn9R",
  "key24": "3y2yTxSe3RX1GNvrVma8cHpeqYvDZnfU5bzApY1Uu5nYBovbNCCdK3wEL9DTC73eiB76CXbuDueKXA6arhdHnrKk",
  "key25": "42VZGp8rZtBRehRtESXfwBWvCMPmDQtheTmkFUDT75UPeo66zc7iWdNFbLd2FBqJs1p1QK8rWub7dHAjEvfkcmSn",
  "key26": "4eyMvvky52QkgCaSuTMM4sVwWDKEHqcJuXegNUV4fkrNVoVjdNGYuWLxW3HSLsU9PyZ1ATaTeKFYEJF7n6JmMJSc",
  "key27": "2npPzmLNAvNvM7bJKNzMQjRaY9hxwUozPL7KRr5whNDNRyXe4rBUGh5hK5kFDb7mq94ujz47AX2G1RtSvJs8Cacp",
  "key28": "5uxiKBBg5YhHoZ2od8zGoXCQKSZXwTjQyykdMNtKYdwgJ3Lpm1kBE7PJpJLK8ApjrzBtgQTNK733zqEqq1k5Ehk",
  "key29": "512YtTDLqeUb39uWjzxXPj9MJevvP91WVYK1WpsdxBUAt2XCMCJJbm59q36sE7YQxRhZrDYCrEBxuEYq4n4BfmVB",
  "key30": "3vu82h4k4UropB5hkqJGTrLFxV3Rs1sz69o1r9zGzUngqCqMfJWtiTQaT5XWDn4ugRWTrrswyZBt5nhJ9ZCCbdpR",
  "key31": "yHZFpnDG6DV6p7Pu8rEpMVnd54tfnRZHRiqvNPgfR2ZU79JHcKoAaa9ch2s5euCD2k3NwdcxUfj6yv2PMYg73xB",
  "key32": "32Ai5PgTUpbt4Q7RWmJwWV4C7y4fTqA34ec9iH6rCgfa7rtMx16r96HxHrNVVdJh2VcCYGaCuwvLWs5pNTCVvbsa",
  "key33": "4KdhonRKpewzP6HoagsbACDLw9W8bWLQNfayLZBVakmCzDuusXewmArydimbcmGLMnMasZrFZB8uvVHPJ5ErmPPL",
  "key34": "4GoaYde36YufJP9KwuSka96PviicKasx65GkvtxRbp4U5tkEUGMU9p9fd26KMNkyMQfktN3ixWU6c7diXuCsNLR9",
  "key35": "4NY5afkPL3AhJPFxbP7vvzbSrPJZBq4FH6uSNuEJMYi4HpxQmxq1N2HCBYTtqcLBcV1oAU3ApocGM2QY82rFVTSi",
  "key36": "48G4QChwx6L3AgUUwLRGryu6snfyXGhw8bTZVdc7vWKPbFH9t4vJtBFARrH91urcYT24LcK5dKzYMsY2QYEdY3fF",
  "key37": "5FF5UDA4W9bYbR4VSNAkaNqF4x7KjUQTLtSz35x69LgYM9bd1rGSDQS7gZpykN7tZnzDAtRoQX2dtsDam9Uhbuff",
  "key38": "28cgM649yfyT6XCVu7fnGNjdEzqVy5epyGz26gUXiTGCnN1nr3mqdgmKt5vcSZtD9e6nvBQzSV1UqrP2zGWwiE65",
  "key39": "43uzv2sYSbWAUSdJicQDK9rVrsS1wmWqR9y92hp9XUGLovLGZuHpiSFdDvpSoUngBm1gedTC2noXBV9zCSvY4sdm",
  "key40": "5iibMBYkfHyLcnThHZ5yxKYhEqRGs1DS2b3a7osTTygKqsKLrnMK4DvfpAx9E4HDqzMxevK48F6YoEvZYYWe7ozM",
  "key41": "SUcyyQHjK2NWNmwzydgkspA2Jtfk7PvgGbqXUAKU66xpKDLEWevw3ViJnW51E8o2m2fCrVUBMyLJPzCs3HnqLPW",
  "key42": "5BMYsLAAN8MPWDYA1UjW4uZxLR8CrriHLVD2zjBnpjeKAW4jj59MEAFZipv17Th2cnoV9jWyiHdDU77N3YaCYiKQ",
  "key43": "5yZzk6HqwiU1DAn4AMi4kUsrjDmrNg8fN7Q2GU1mtPQ72i2ToQAMacpfEenhiwtvrtoLTzmRztHNvwzPJWyfPX58",
  "key44": "2geFtZVAoqZqWkuPoo5j3mh6euYgozdFrYyQzANvUSvoHEnHXFBNvXrGHqYJ6FFjRsowg5iQRazgwpn3jfFdaMso",
  "key45": "aTCps3Zv6eLTmorwNrdczj1d1GU5Jrsiv7u1rycdLiQMuicSecejvga5SZinX52iGPH8wYM7GdGH9eUG4TMpP37",
  "key46": "2mrDsjScBDr8uAE5C8nCKnL31SyfHkUf36U8PE4VKY96SvV9E14AXEPLiUoFk7ToxmsQYQaCZ5GE462bWCWWuW7g",
  "key47": "612hLXAzdFU8t1nx7BzXNQmER1dE84x3g6APkSEcEz8SmodikznZR5pkuykfjtZLgxEgyfezNed8F1UoR1cQnLFr",
  "key48": "3u6pBTrY1SFkMTYR47Fo6zZ9RMXvqapoTKckFtdiqWEHe272AMKB47N6onnzNUsaDWrRyXrx6e3xzQ7ymMXn2Trm"
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
