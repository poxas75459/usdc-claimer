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
    "4JxTspb9RxYnERtX6is1WnQu6Df5ibAXomGMscXV6MMUApAa88EQ8niMDBD6WTkASYP5NZQvpwyvCzn23F5L6G3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JnUs6WrmP7G7u6yyBYpLkThPYhTF2ELF9EoWnSfRvwrrztyximJSgcRJjoJS6Q1U7PqUbUNBCrBECiZcWHVDATx",
  "key1": "5xgQMCBKKdos1wsnC1kvKELJwTL5x7S5fUaE6n9PNLArkui7sinERaejRaNujxXo9di6dtEToc2x84rmpuLt6p4g",
  "key2": "3Juixug9d46Q6CLFwNyZeJ2u82wsosqtQYNEkhLTR54B58YQEvAzewUUZpCaD5TAd7miFsMcohKN42v8NUR8XtGh",
  "key3": "2Yucw1K4woLUF3yTLN52YMns3SAU2D81Lk1RsXzYgQBCrEYDYWUnjFtbSv1v4oAxprGfWAjp5ne9DPDS5dk1W6vn",
  "key4": "5zm1hfxZ9zCHLJHjMZL2AEegrFnzSk8mb9aoiCKkPFT1r4Ud2QV3xo1dUKuP9NsS1a4khkNNSkgn9cxJBX3b5YsJ",
  "key5": "ZVntpmW1T2XBYN955mU1JFko8okgLgzWyK8FvBJ56gUFGE5mte28M6zb6biYV8VJHfiqjNAhugxGN45EmV2vxTT",
  "key6": "nkoD94f69RW8E29Wsx4WNBtramWk3M43AJdyGHyS1MNZ1KwUAy5gGKxJBpQfdQg8pEyhrdaVXwCaPB6DU1KhFuS",
  "key7": "jx564WZwFG7ekJeHT1jyYaoPvjBvmFm7knUNQPQ8zpLVkiJTdKywfRRJQV8dxnxtVxPTvj7nSmm4iqqGsgwHYYp",
  "key8": "2jNH9jzgf1KS5EkLvikUR2fQEVA6P5Mm6FbBAPPCU3eP6a69Bg4K5a2RBzUoMGxVJqC55KUxCskPuYEddPUnkV5F",
  "key9": "62BuUZBB2L77ECKGZCMWZYaEpKtQRJfjEWbjM6Y1gAQdVtRNatNNF8YFGt8duqoHrWtWMXWDtLSD7oGVj95cs8gF",
  "key10": "5G3ZE2eBLU7AN5GaAMAs7hh1dopb6rHj3CVmKX5W5Wp22n4kFEtdTmvnUfRYUGgDqYnmYBiFjsdWKkUwvVsErxix",
  "key11": "de1vh7SgTiC7fjmay7j7F4KkmtKezyFisqZcidXzRCiJV7kZLv6rrwMJnJASPPgLhXoBycE9ZXxSqYUo3jznjid",
  "key12": "3opmpgV3TkQRP7ii5G2rYaDN1CAxjWE2L5TPcYhsfyQXND1q94HgqxkLd9TmVCyDi8B5NcScKWmZ1QYrXJT3ceTf",
  "key13": "5YxE5hMA78BwSALeg2LwZcmGXfWRU1QSwqMZwLGmh9KrdzX1A1r1hSwCoaVe9TMC5ad36ryCJ6jJjWh6CQko1at9",
  "key14": "nC5XQTeKiTiEkC2AKi5mBNS5TZ2uiEJ7afarqSo7Eyr8YdcrnCji29U7E5xsZBDFzgbnAdpuZYe8yLVrRtgr2GS",
  "key15": "NKHmFfjxuTwtKtAAsKu8a5YC2qVECN8TTNhtFeNr6WmRAKGcL6kYHNt17Twj3Li6rKZeEAnsvEuLaFLULceE7hv",
  "key16": "4KsZhECEohUVRAMz8zDSCKgKsUAXbpSpoB4xW9jhbWFFb1dts3g8koJtB1f92jgzLc5HmYbS7ti2XKtF1Hzg5soH",
  "key17": "3q4DzWRbWfKPjcLDFEJY3X15sLwZsgQyPbB3FTKHu3ar2vT5GFijKRrsAkABjPjNMvbH6txxLy684kT84k2zFk9o",
  "key18": "5hzwHAyd5zBNSGLpUmuugDeamGkVncdrrc9CDmbSsPnqzfsazpusPXnShDj1paAwmAJtLgHCVEkqof2eeMrwdZCu",
  "key19": "NF5Vnkr5kGkmjUcrogKRYVZFYFyLG9V1qSd244AbUyJbAJg44C45yTdFMergdM7R1akvSw4L42JYDc57PNoRkHj",
  "key20": "2Bu5xt6VwKaGHjbdrCZbqNgnKe89r2R3X1SktBekMDEADyVHkP7ThcBeA5TAuEu33NV4NTyuHRSUvexcxYNHSBCA",
  "key21": "5nZ2DGDbfaPtPe1wG19A1foxB5baWTUxuxUpAVfF3XNo8Yn3t68J8V8UALHaHWadaCs5YJj6PG714qcpEQkoEFLW",
  "key22": "5vYuzBAdnjsj5cmP8xPCQGyeDcmorX2ZdV8aNVuNnJZHoy6VyJLwq7oAKZSURHBuVMSYxtKhQkwAAmKA1quPsdV7",
  "key23": "2oBKskfpwvk7Ge6f2JT4aJCeynVuAgkWnunPtw61aYjMWKyNm32RoLPxpduvvHp8xV2C4o8KerR1eZrNBK4tNVWH",
  "key24": "5rNYAEBydRRrmre4KiAMbAMqN7aWqk8AgnX7k68qPW4nGWbLbRRsrh2eenQZVmLVR8moxocYNnKaiWgyLsbbCkMx",
  "key25": "3T8i7iKDvdwRnwThuj93rYG1kw4ff68KAjRLPE5fEaFiLafZr81SWvtV27Zj1222eGD1tCo8ozE8JQQ8GDYkPpLy",
  "key26": "a6Ybq7ey9cZerR39KwGgVRBdkNTMFpSKzMsKtGsPa2FbvUi3dyz959fmDwEVmspQ5KXSjY4gxB2jnRDvCkQeNti",
  "key27": "2pTAevQzx2CmGKeoTvWVX5zS4DiyqiUcvWkRg256mhLqYNy9AUUQxijYPZh9nUA8DHZKumXiGszjpqzdWZaU3qf5",
  "key28": "4fHojnW9tEDKTzVZegBkciobt89qzXjuwjuNBSU8JpQK4Y1QGqLe65K2uZkqP563WTu3ho7UbXRpvX1NE6GtnSS7",
  "key29": "5t2ysD34krkS7PbagbscSXSiV7DnBdMpQ1hTks1X1g9APAYd2kB7axrbtaULs3w1ufz5CYid61HkVjkurUAtwjr7",
  "key30": "4PcfeuD4QTYxk8EJ4HW385gjKMCzuECHmCXjxCvGcDGKhkp9sgQdWb7544CgPUTtis7UhRbcDGyvYrRxkp3CJVhS",
  "key31": "kc4LHsyZ16eXL8Fy8pYv7ihaTvqe7CYyn5heD72WeLiRvKHMwjLqM3QYXYEcQuysZCsr36sTGyHuYXSJFfJ5c6v",
  "key32": "2z2idwJGqwuRdTyBsXTLL2SwyNNRi4DtRNeivtuxtNscD4MC3pbioyJJQ14fqLsSfiTPaxTenznBPeqKxbU5SVuN",
  "key33": "47vDj3S8Y8VT1EUJEUqPqiM6TBw8dE5McKYdBex1bBZfVSN6NkWQgoz53MjwrYpAFWEyJYi7JdXXJK4c3b89mQBt",
  "key34": "5ZRfVKuFYy4xeAPtfuv34yt2eZFGKFJabPw49EpNWrbSoD9VLhi6uPCVhYvFxuUq3VAyUKTmjV38rop3zD3xdQav",
  "key35": "32SfpYcE56sXhHyse7JXALpKgvTbBWX4zJF5idLVyuby9YBEfRafuxzWQfBz5FA8XB7UsntWKmriNtgpjn7xGqWb",
  "key36": "39gR2Fb11yA6pF3nGr8pPrSkpZ2PvTrtWrt5YM8K7qr1uN91V1WxhmVpmbUxXJt4e4eV5oHPy399vRUqH5sWKjUK",
  "key37": "2c9GrdxDEtj7HsQVbHgeqfrnCUX2jmq4o4xMQkQKhu3urLFjt2Nx3NTuM9RADw1mfXrqw7XQYC5f2i1v4nNMRpGw",
  "key38": "DzR9Uurz4d4t3x3vrDL7dk7qRywK4zMsSJGnX3kahcnBcSxuverAz491XXKmYTa3sgwFYuKhok8F7RXZt2JuaJD",
  "key39": "48ijQx8JbYr4ijySDy6sh4FWKdBjCZ5KjtrR23vmwvyGBzHJac9NeSMrdf8nB9M4w8mULfRAmBFKRNcpXS4mtmGX",
  "key40": "5FtmXVhVFTPsPufXyEyNe7ethFeRMrsszTCDjiK43hZAppiBDtWfZHK74eU3kt6fCBmnvVQEnVsMLD95V5YRjbXs",
  "key41": "5VDvPMg2TR75S7zhQCqieBuRrDSAFGhmCKTCifqkUmKivtoNyPGAwLeTZXaDnEe4Uvf2WggJBuUvKfyR8QCF2dmv",
  "key42": "47KcU7PUJ6ovCPXXzubDkxX21a64yJxzqV2RfVhYr6Rzr1guG5VZYzaYJ2kjUkquVXoRbrjvXJTQSoCTGZfsN4jL",
  "key43": "2DxMoEwiqmZNoqfUgPUerJrkMKpxWaLY4Jud7oXTZetuEDuvBPx91Pzi5SPaFWrvbas5pLRfPGHoZYcPgwEXYHut",
  "key44": "2JaTdPk34VzDja86FNJYYhx71C1btePJUxYCWGSL52mFFbnJq1VSoaLiSB3jUErZGzh2uTJt7UnLNJhSFDqxYNsK",
  "key45": "4DwwYH9JVbHKRfm7TM2HqfDaj9WAm4MY9LK5vsxFooXtWgD774a4Qx242SkyQQBHEy3BuCn54u6yW8vfwYfRzMxg",
  "key46": "2HL3Dn3qp9gxkYqfgJbXrA6XmRAkWdDdJChVdid7fJY8KiEcJttdY7jTTS4AmCisSotVsQRNybp1M4xC42oG2H3v",
  "key47": "3Lh3eyQBCY1gcr8ctAe9h7pQ6EPbEFhLVEDXd8JTK15nTEFdAynwB7MYxhoCsmD8yhV5KSbMaseJBJ4cB4Akomui"
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
