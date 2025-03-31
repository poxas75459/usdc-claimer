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
    "4thR6hkUiatjLyGdWYhGNJ4Q4GfNbgTd6nHQSG1ExDhwCmLsXrGiCLVp8mvyBySCF5Vyy2PnP3BMP5itY3VceqXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZ9bpvfDqgAFTamKA7NmAZnVh4nPZbsSSbP5KGPCYC71JraEsM981s9mFVjZPgi5CTV7Tk2S8oWXtqAWKzxyYLs",
  "key1": "5X1rgJf5x5BJnU2kHMoKxNoskWuST2mRiru8oh56Z5akUEphcukziYJ361caVjRcshy1f9B9NfDaEPo5YxUHYZYE",
  "key2": "61mGeu3SdrMgLPHJuyjzyyRNqxUcN1crFHZ4cvVVBc6wexJiZ2u5MmVGXyQL3oKLzSXzRsaPRb5vNMWCJybxqgZq",
  "key3": "259UW6ujaxUMB4edb6SwnzzpBGqCqiNihnenKXZfVD7s1cJ8Ge43fw665tCzr4Mk1czDQCFMmQMuzxTmNQ3zxweV",
  "key4": "NfN7byYf6v9Qi8HFWX3YEdsqgf4uzZnwyCN7F1EA1ZQ32tLAkeLEMXPYprsMLr4Y5HrPePDUATbPTezNUv8bK5Y",
  "key5": "2wqe4rXfJbCR7XRBZ4jCbtyUecBHmWGaiWehCRr2qo83JySxiQvaeV6EE9wG46xBHP1R2Ybz7orGV8SEMxuXpE7i",
  "key6": "2eCx58ZakqduCNXkWp1api3EnVEDRdwmSZNmAieoupfnBS8uo7DCqCZcLUFUyFAMHSEHuSjHtA1c9pSdLzpdCJ9C",
  "key7": "39kWwVs4UjP6WtN4vPCmi2GjFhh6gB8ry6CNegD94PxYMaL4SgnbAPCKYD8T5B1jEB3r9RsJVzNJ8i1aPeymWJpk",
  "key8": "1T4JU3YDCCSQHXes4F9CV61AsuCr5LSVwoYdFtQ3fvpn8uANUiGhwBPmFrdynctxtsE1rzPVxbx3Q8De2rHHpaK",
  "key9": "5rfCgXtEsMSquuwF7XP6FtP9Fv9kEcCJYZqe4VNsE5L2hzTxGWuap4MebBYzVA5jVgn86DJixNqwC8cCLa8suYtE",
  "key10": "3G5w2sQJaZjyBdfCisSysazKdTL539NpEgeDhw2BhRKD1MrDtF2yk9Qq9KFbYbJx1dVsh1U2ALxFHLL5ckh4bD93",
  "key11": "294yiWMVUdz3YZ3SvCMdNpMw39bnUKWLdE3KTLRwCJ3YL1im4W1qSyWeCbf117kU3kzN4yAWYy35aZCvZitNnt6B",
  "key12": "5AKizY7FuL6vGugT358eyYJeMmExuNZKKkeKyTMBcC77qPUXA1yd2cWSc5AFeV9cGcD6gRybCzNCyNvvaPYMWPhP",
  "key13": "5YHLnRMkQR2fKrwcLnBjQR2bGoiq3bjDx7426mzJp5Dqi567dLbxVACXyRojwcwEhd5AY1ZcT1943WfDknfkADw3",
  "key14": "62iUY2kE9FX1L5Y5isPWNcM7CYpTZXBNSAYE5gmSVoTyicW5ZSMY5A2f8oz5Bzn4BEYRLCLaSUGbepmLm1shnZQp",
  "key15": "2gFsU8HV3yDxFjTv5y2ATsJxbJexPVquQ6JToFGhr3m6p5VqKEzYq7NHeUB31KgkvjXrn7nhzkJrdxBkSuE8DNnM",
  "key16": "4fVWGNuD1twtv1gNGBvDMtz9K4dWfeyup8dJfkcHFkrdHdSfJTRBFuL6N4tWpBWvVhQBRjP7W7CJdGb3j5pUjrii",
  "key17": "41smuPMtNW21LCK8V7mPRucN29WnfSwP26KwxK4brfjQrA6epV3eLgzwVBXYSRyny1LxAnYXEyMA2YUXbGZaBVqf",
  "key18": "3dGYHx9mZyPatUfnvw2bGSAWpeBMdtqrjZyxoq47SWfJwxANbJvvYzuKVswbKUdegN8mhwR1NSSgYWioikHEq2PU",
  "key19": "2TpxgyMJzQNg5MLzyKZcCwsiUff525DQZAptSahAqsQyAwje27jdMaoA3HmVtqaQoginZnWUBxoy8kBfpngacn2e",
  "key20": "4yt5cQsupoSyQzuq46U7paiuR33412W2uSq2SLZi2nWgcdJvyrcU7R49jtUrYiap22172XGHe9bBmKda5oE14V5C",
  "key21": "F1MyJuy3VaK4SkWFdJkEwsMJ6E7RXFBR9Awu5UxqsQcUHUB1DgFudKKmhzs14guNEpULGXq1zTskGkYxgSJse4S",
  "key22": "4fMxXHXjPUmTQ73QtUkk32iqx8Nnr2Ne2vMDm8ByRKNy5sa9QvzQYYpyKU3zbk5mvQKH2YJFtsZWCbzwZefsMD5T",
  "key23": "4CyZ1Q77weRnqMF6sP1Q2hPXpWhibhCMEELvjfiGGpo947yi2nVgC1TueiMs1CgfxFJy771ZhFK5dxV4szvGxXQR",
  "key24": "2LdbXETKtWmDP3FSKAQbVkJzuwKrxa5CH5TJGmWEBNXSo7FnAkcWo7DCo5YZuVDffDaaonZVJUNpY7j61LwPCBRU",
  "key25": "667Ubi5najiZABnSoZv112AeqTQnGGx4wML5Mrm6wUUqf2D98axLypseVCo65fpffWEjBPkmj3YSJodS563sFxaR",
  "key26": "5s6upEXeiLTY1pFfvcuVLLPG3ocFZxaTo7tip7fXeUtHSwyTEy4EYya7f8HjCzwjChuWTSZ7nBerTSDU1fJtccmm",
  "key27": "3Dd9JC8Lrbk7Cty87m5vs3yKeAju6gSDZPVGypxAL2jEu82Cmr29fhpgqBRqWugAGtv5moUeSPsap5fVUmwEVgJY",
  "key28": "3HpTzpXuPUQPRj8sbsFWRynEqXkv8FT9cJSKEscXZSHnjYTPo4NAQawDZ2TvC8Vhkj1jNQL2T62a87tHushEzAcD",
  "key29": "4Vj7aMQFFjH6UNxTSiWgT2fNE7hbfKaSasxk6w835eYFna8KrgZyZivs5M3rhAPEq5xZr4BqRnMrCksXha5Q6VPk",
  "key30": "2dPyn4kpgi6rYx31JbFX2t4sibDxfwqascJZjYeofnxc2cjvDnfFG5a61Niw8MyKphMgs5ZWiqiF6FpG3eD1kCfM",
  "key31": "4GHKRsoebZ6ycihJzzLoGy9XnZQnyk6XWqjSbknnEqDZMmeag2j2scMAVNPpXZCKjY7ukJunz59eebh98LLA6UUz",
  "key32": "5ZEAvuVd1HWdjhbA4rey2zQ6xaLWRUe4v7PiTgbeMz11Fm8jtxRVfMrNdezLijU8bmyL7K6Zc5GH4BRQLV1uqmwx",
  "key33": "3owTa3c2n2v2LDG4tLAykar6PKXqPXyCSm8CGY4D7KdHRwtHbJp2ziQV7qYN56wKu97gCob1zAogGN7cbNWSPA2j",
  "key34": "42TLCbg9jwho5jGaKNaw7kaKotBoqQJ9ckhr5mS9XNjcmFSQnFrsMxiX95xUXQD7XQDyG3ACHUebqptMXSzEvfUT",
  "key35": "471XRkaDG1PqD6JtVwtW8sSoQXYzjuJGzYYCGyG7K2rQvs4W7jh5CqvCcS1uVvqQHR1WsZYM3eu3jtDqXt65WsAB",
  "key36": "5AtenQysJStLxjydAqTJTGtPQMpHniEPAt6cn44rGmpNNZ9qxzuQJNKq7HFGYaptXWGi5DD4HmjmU6Hp6kiN3MNu",
  "key37": "5JLBidgMAWw4xmAm7PprWk94ez6mK1GLjtzT25Ro6tfzb8jj38Ady8pL4RdNHEviRwh7KuAk5ZCtyzDiRm3P5hGY",
  "key38": "5PBSFt8DwpaTu7rvFiwpNmXMeYLoVDQn68tBmn8gwc7HT7nAULdhZGRFGw8dzFa3VNw3Qcps7pqiySqQTPcAAgxe",
  "key39": "3xdBks9KazswyASE8iH5Jat91oxeM1k7mQLpT5bjMHg6m2iKHRkfR5MnMeCb9B2Wt85GtLqYM7zs6LhhqXLmvyoB",
  "key40": "5HkvBUoYPcDKLVRw49hTBjfViqhEzp1NpyMXR8B2A5CNML6vDbxr4nUkbbm7QLV5MfzX4n2tyi419vrcryB6yQRT",
  "key41": "4DyUzWHJQnARF6d3ARZa3ZJUW6gfQxdqGVSTwQBkyitNvDaP5sNAefYmWKNwqVmLG24oCRrZtcUyMJuVjLTtx8UE",
  "key42": "5bA9MsHtpNYUVrdjFWbdbFfpsZ2qpfduRd6aw2PMJQqcktJpRZsRP61bfBgja5nELs75QJi1jzwa6gJGouvpJSk9",
  "key43": "4ffxvZBLxWcmHaG4CyjB7joJ1o1UxRT28WXWo5LMP1R6XoiiQza6B9kv2erQFUtR6dvFdTGDZ8snvAMxzuKCSiEN",
  "key44": "ythmoaedD5tS8h3b6UME4eCJXoz7gtF77jasRKsS4rbMmjvwqPhD3pWL9ScpUrYAvQSt6WZXxb3P5GLNbiev9LF",
  "key45": "JLX6uYioLrPHZ3oTW22NaitqDjQNe9QfuCzAqbMwCG4QdaxZ9a52uCN4Z6mr6Zmz3fjwjijCiopV4Q3KXrkQvg8"
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
