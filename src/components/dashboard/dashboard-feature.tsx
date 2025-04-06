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
    "4FSkF7Rhpg9242j21qxX4XezJpADG6vW3dp7YCbJnEBqN5iL7dyVBFSfZmL1nQcd8joHiiuPvRZ2wHcH9pU7MdsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PGsvLVdrpp1EzTZsVFQtvPmDBrhV9pfigS3EwR4iFoQcPRhUfRHwaMcpGf8o2yZjYMjWXN6k7EvwnPXPs5n8kxQ",
  "key1": "4qYGq63F4fD7rUAgh5TFkb6usch5RXmwBUa5tAcWaroW8DLhquZXbEvz9x3JrzJdPvNNg4h7B3b2uECETk78DSoM",
  "key2": "3NvZck2KnSUFPbmkbUjVU7Mhh9ZMiLPBHZTpCiSXicVtX7Ywp2xewhswjfDE3qhbkroJe2iJpmVASEbcZhvNvdVW",
  "key3": "5Zv5b8jetVcNKcJLs5MyPRqn1Li6WDqQfXik5gaYcRpKzKCEpv5RGLVNAJmqZiCmTCTweLjekzt2UUhUL4xpWUTS",
  "key4": "2AD1zXUgC5NuBTqC5R3VXzVV9SHpf6XD5rmwwZXtK3JpNjh5D9WGNCjz75z66EKdzbqGeATRoWcG3MM8wQC2VKSg",
  "key5": "hD12zBtaMPuRFgdX9WrFqg3Gy8SXbKKNuzVWPyKqRPNY4opCfU9sDP6cDv4TSQhGyRVumpN1AApZswLU5fKxp66",
  "key6": "4CMQrdTCdHh86rprBy7VMiMaYhYf8BdRZ2mYBfbqzCPhe5CJ3RiX83bMV6XSR4seF2LNCZhP8LKPVdPEFf2Cgfmn",
  "key7": "2CJMga2hyBNyjfEtiFFu2Kk6Ao49p93ZCoqAAZJWjstEeVkF28o7Jp3DxB4zgygciXk1b5B38At6MWYMvZtYvL7b",
  "key8": "5SJ59nf6YaGELkgVZWtNZEtRyavSHeLNjUStvrspXAnJqZTRCb1DEJBQdcbovcBQ9fSwqBQY7BREvgzEUbwe7Fgz",
  "key9": "4M1JU5B1Dcuf33oSbZxe51rv3K91Tui9FHWrbQ1uBx2cPRF3kpTQSxPnsxt2nutGTvHvnjP1LssLHc4DXJToBua3",
  "key10": "4z4aBDeaUnFD7Cmh9Swu4UFNst52ufbL6dfMsYWf4iBahBg6AeJ4CperYSdZmUiNmfngBRZRLHDnsPzeuE3KNt19",
  "key11": "5xE57atKM37QRDA4obEmjTiLz2xjBxoRpTewUuH5YQgsGmwNpsV2Scst8tdvNJ8ubCHyKZjaUoVfHn3P7KgYZEpW",
  "key12": "4mJCZWCzRdHsY6Rn5ZRuLCvccKjNT8TDgfXPA6ehP11myfByzMjVUKND1K58QqT5PShU6QCrgdEZvi31vsdFqZ7L",
  "key13": "65DbK4ZdmuH8WeAu4yhWUnL7Pt3NCfbdEaoQ6CVTMMJ73dTTM8cLxQvPpBwEJjaCYQVxXDH65khkVExLJ83UcokF",
  "key14": "ssqFWcAT3Mkgy4RecCF9cuaR83zhdqgWyT9Eq6rvkyCX7fazqDDXQb4xqTQLMrW674hNT8kifhtwsr9HyeWo1aQ",
  "key15": "4WDUgfGkga3ByRMx2JwXhgv18PFcuwQP9AfuMwqg1ht1gqJSAQCJePLc5HeRvgJeJAAn9PDmeuyNYFuuLyfUEfEH",
  "key16": "4W9ANeoVUnnj16DQTPmUAViZ4chtGFwRmBNsV3atSixJ5i7ontKWTF1KX2SbvMWfo6jXg47dcqEtKzpPwXtwyeg8",
  "key17": "2UJ9Drum7cDGDjWbfb95f7BM9pDMZ7PCTbcSLPvZaxy3BeZBPpdBjkdxu4D4iGzohgMPH1Gk2t2VNPQKpz399oay",
  "key18": "UyLJaEivcttqX61797BkHqtwYYJgwv9FZmReWxtRX1YhVm5soFRRmYYwjCZrkU5WGnk8T1Ys8Hcb3NP3WceGNRP",
  "key19": "kgYdfyoW7roHPAjQG1fkvijs8neRaDPW1TMVakAuMsnwWRMuDoWuKHYgfGbFbw8P1wqGSZxpWBU4qCCa7owgmwv",
  "key20": "5fn91FcY8gowGJDQmFXmC966GKNCFsm7o9xRPguAg2hTxGwTQ7yBS3bXKarkoC1rwhMQ2nPaWNoQmSFSbNGayxEE",
  "key21": "4K2ZtkK55N2zPq56tSofP6u5QXbG8ihj4kb5EaKVELFrL9UzGKNaehiuRxy8dWDCGxn7KszLyWN4DeX7wTFgALGZ",
  "key22": "5RxwTVvPHTbU1nKZFngGFQR5P1wzfFFRvwNwhvEWNNJPwA2VodWzJYdCVExKMmrpFWZRFGfzAWTR1tVbXjVJCpy9",
  "key23": "5kJwsJQPqA9SGS99rySjAU62BecLLChbJdBfs7LGvmrhjFmQLqc1bmbBMdMxW3fo5wsmbKDUPk9n4dENAvDZCoKf",
  "key24": "3PqmNp7tf5thjS5NavJhQh6fpyv64PG5BYhNaK48mXMvSrUCFnhbtDaaRnc3J6p2fRYtRMUJ2MPwHzywUSr446Ub",
  "key25": "3QDSnnGSsx6Cbx8dxiFxQfapfsPEAzYJBPmhDjCsHDGMWa3Gu7y48tRG9aFjfqgGGMPkRpPdmeTN18pc7HVrogUQ",
  "key26": "2n1DiVa3GZts89YYkFTThz5gsfQGvTLgsXFwtDHTKFbJxisMMPT5Aty4obRv6RVFKRJFY5U3MN9EvQgMDPpu624v",
  "key27": "2fGvdWTBX896WJieHFupNXDrkCrfsYeyjFfqHpsgii3fZq4uFeZ7Q4ynnp8gYSL9FRg4P37QbEB3Pgq4RoafC2p3",
  "key28": "2v6sKMVTQSDHudLXciEt7KbJNPCku2YDCHj73NvoPqxoXUfXzAz4qJyHCmquavdJtDAbNJNqgMd1ogDRqhn29U37",
  "key29": "5KJ2eDJE1no9vBu6DFYL6dvVuEmi7XffZxpSQMSNWHDXp1KCbBkVBjjEHZt6baAHuLcsSuPdSEdBEtj1zXVFvigM",
  "key30": "azuBLwE4jXURPZQBmzCc21rkSsP2NEEfuXgXabQZhpkhD7yLVWbMLtjPfabmiBCwQXijZm3KpVqzPQsGVj8cE18",
  "key31": "4XkhAeuRLgADZym746f38ks9fwwvY2CvPq5K7EmNLE2xm3PYVE1nFNxCJiCAvkBUrEMu3xyHgguLrnUwNhiQ7gvm",
  "key32": "3HZvRWwn9vFVBNiCpvWu8dfrAZQey8NkYFchoUzaVgDYG1xdteJhsjRgJ11zXBGQghzCMcCbtiKJXFiW7iCFgque",
  "key33": "42L1Kxk1qMuVwsAhhbcmi61vtnscKrpAfmPYGAC1pcqfckEaLo419iEGNZoFod1JCrrkCPQWiKBQr9MiDPiPLv8e",
  "key34": "5fRjTDmYnARRmy9qXPr3wBGUK8VvgyGLHNQEiqhDFWzP2Zf4pXzePo2BnRetNMumXCUff8b3DzvHpfArmufovcP4",
  "key35": "6DeDZJQtfZjFWBdXExVUWd3t48ZoybQPc6TXtk985Trcf8cv8ozq1Cgk1Vzj4DgtuYks3yzQH2myJuCGm8D8EZ4",
  "key36": "M2PsEjXVsMdCARY7EtunEPQeUvLsZ6MvpMiR7zczg1zsMqquYh9gkFhvZDTDmDmxrVkvkJQKKzxZjeG38wHpZrS",
  "key37": "5ZswxxxubRaEN7qXvgoRPcRPKM6WBDA1RwYjCQFCm2jMT8K9GoFENMuuioRSWuZ3WqoUYyV5uJAVk3AxQmgxokNL",
  "key38": "4L3bNSY6NzgmTd5EHbgiuyAXmw6KocCMnZ2mYoEhbVojsdheHEZSSEqz26wRdnJuHzugy2bRwy4B7y5GZLG1Wxzt",
  "key39": "2drDyRw6S9NESq5osgHbrfGd5YmM6g7AESqUKJMez2F5fuKUSLzqvaEg2D9pCmChDStYurjU4bWjhMDKfqtQPgBe",
  "key40": "BX8En1uwnf4HnWAHx2TpXrhsG5z7rFQCNMntW6VxLdRKHvt4H2YBRuEHiGGimZMxQs9vNMvZbbSxMRPtybNAzct",
  "key41": "5EqLrw1TFoj2t2x41b32kqagFounr5P8R12Cxyj6aEL5d8CK6pZ3Pnax9pLB4cPx6b567PSmVWX85BBvwVQuWs4S"
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
