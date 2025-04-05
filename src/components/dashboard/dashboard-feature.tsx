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
    "4ai7xKMSzTsxxir4XWhs3zWyDJvy4ZSswhREGErNZn1JghREAadhiwRogtWP8vmhsqxUVUk1xL2o4zzYrmAvXitA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p5AHHPegpggodQjkds6fdYaSz8cLxrHf9dgZKjkxmLgQ79Doy6EJ1hgcsiHPMMJ6Mfs3NMuki5xfGgKr9nb82Sz",
  "key1": "38DQhT6wvRdUN8cNPQ8GAWbmb9ABjJN7rCgNoaro1C7aqGnPKh63QEtS7rJ5tXPdaqG6veXYGznfbq4wFWgWyQ1o",
  "key2": "3kE1ToqYFXaGF2aQV7oXCBsf8Lp9mmZUcgvHVnVbkTha9SuWwFX2MgX9n5WbvDc5wbc4AAHWge2xGngRrB2L1gYy",
  "key3": "5ruynA5Fzxum29796FkhB5bKXUjW78z2LpRSqQwJwqgPXxFPkkoG6hbzTtGzDR6bsEny4jgt84kGtXT1BZTnMudE",
  "key4": "2qQ4vsWXTPk81iWJkRiduYRSzUqimqWCc4cQBypDcAuEpY6CgWFde2KeqaS1hLSYwn194mj1CBHP4iGYKt4ws7P8",
  "key5": "31W2i8WUH3x7s6sbmUXJD1EZJFf4muYXSB4tQJ834VkhUyaBDAu1TumKnvB2s7tp1UWdggaf5j5sU5q5CFdEdAs",
  "key6": "24xmJAWqfCpoQfpkkyySmUkodFZ1JKFSMCN6s6AtMs3mLYwtYcP5Qb5Budr5wNrYmgApmba5wMi6wBuH7dN86oce",
  "key7": "5uKtZyjTxBo1L3Hpqd8zmbH8JbPubtnEyAsNXwc2MU7eio3Jr4t3dN4t9pK2miPM2VeaevJoKBgkL2vNzPjYx7b4",
  "key8": "374xu8jcS3mzeR2VxN5KP8jCFFJ3tzabZs8phj6Dotj8koQcG1Kyq549cdZqqwRGXE9y41f5jPxLL5aJBNvKsv22",
  "key9": "626SwkM9p4NX1cCybajbg394GPyeoEcgam8zqQXNkCqb7vE2S4oTDdnoExQVPeP6GcEyYVNhLDeZLUsWsHy6Hzym",
  "key10": "3EuUCzeDZu1nMRJMyQjPp7Per4ojJRCieWhsPAg4U6A2iDPKdg3DyQLzA9p5vhNbEWi6pcS5RdLawUSsAVArFfau",
  "key11": "WdxxJ6EUCMvy2LX489etQSaCox3rHDtGTWQmCsR4cqxRwvzjGgzARGYfaCN3E3JdkJGhttG5gZ5a6eVSF6SeGJb",
  "key12": "wDMFVcmtCbXVUF9GvGDhKNag9XDx9uWEpD5Lyd8cwZ2oMHErg4MBxd6x9fEKy2zzpeDBXE5Tg4n9ZymRbioxA5p",
  "key13": "62w1KK5rDJwXfmrfWoFZCYTxfs2NRc2wFp64gVt9fiLAbjbdcjqCVLUnWyQJEb3g6YL43AEHvzNcXPmYWXk4o4G1",
  "key14": "39phiJktrgpedNKD9HqML8ogD26gfdWFjiNFvAhhHyxo1Aiz4xL7dsYig57LMkT8pmUUQDe3tfeadejdVKSRHnQQ",
  "key15": "4shFrU1YuSrNNJH1eBbCfwnESdVVBPbLLvwJFrPEMUdTHNXYSdMKXGaVQfY9wFyNX5L7id9c8TUQpoex4Y5piXNZ",
  "key16": "3ArJRjq7a7phTSEjFUo2AnYeYfsd5cui4HKDY6GhM3nzrtT6xw4s38ppk1pcnWcEvTJetyiLBT6XFviUaMWzxYjC",
  "key17": "2aEjXBpkt5QNXRose26wMjCBBeoF6pNqgXbXCKWfn32bNQrH1NuHyhc9x3m2wZrwuqqwQwyJUi1wXyU2m6YuYb8k",
  "key18": "28hTBkUohiTs89c996zBjxiXvuZFyZiDdm2JKyz6VGsJnHpDKa9SHrhN8ueCcSmEAzyQ8j2Die8hef1Kw83agHRn",
  "key19": "2xvYbRHC9XWhDaqTWr2n6LSGLsZaowcWy28SjFnQP8FNPUGiNqv9jfuB8hDFfjUZRDfAxQmA4YGeigU1HuYYL2Jt",
  "key20": "XzkcACcEA1PqEmBjRFdK6ZpigsABBobRfxbRwyVMmtxMun4p9BkLaqT1aaz1de7wvshLC8W57zEFoo2vxY4UFFx",
  "key21": "2webqnAdvqeefF5ciWz8cuUJGwbttz8egqAZf23jyv1vqvKpNewbhMmSk2GDd41UNavVQGFZ7AZMuS6QQiMd7fpJ",
  "key22": "34jRVAxZ7PHrEQbH53ZbMvCS2WZ2vbaCx6VTyJwW4NADomPRSuhDtWJgWtk5fDUmVjuqij7FFFWiF1rxGcTroQYJ",
  "key23": "5QnRgER4r4Px4BYq61pgRZZKsfett6F42siueGR9aaGdAY9ok81Uq1o3zrYuzor2Qv9C19UQj74KoQtUK3eQ4x9Z",
  "key24": "3Y9Ttxx4Z8z2TrbfEYtoWoRCDafpsSbK1wCHYNdDBt4oNCStW2fRaB7a3vXjMifoh8jZQkGWs7c5eUzzxUD5xo4P",
  "key25": "2sMgoWEBBPv6ud6vZnVW2uSavAptctjc2xXZWKn5WyFXsQMxfuiSDPWFYnpzCJyHNCnWgfYufXcRz94FtnVMXFXZ",
  "key26": "4aGJKrBrhd7G8qKCNzoAtczjmrpsoH8VgTkuyexAsC4LnF4FymLv94HPVmf3CjDTCzxGqmzbcUNDRqYjvgvFRQFX",
  "key27": "CH74ZTW7tjmwjw8bouaK2PVTVTeeduPS5gTQJx1DLMf63wfumPSC4UPQaqkHnW3uTe4E2BPG1qKXAqKcfmGNfFE",
  "key28": "4G8x26JfgJ9yr9j3BXk11UPzEiSP5vPbKK2FSsXumFc4XzHrfnYQKoxmW1dww4yGVs4pnY5MRCLaUDN2vgX4j7Hs",
  "key29": "av7JQNituDiKqKMAXTUooukQCpSpyMrvv3xp6oQg9xjr5P42fB6CUmA1qb5ciMDtpE5idMGY5nZMvhjU1sER9fP",
  "key30": "7ibtexFPW8pC9Rrgqxb8xbxaUVkhKYHZ9V8XbE5Uxt5sRSMv7T8fxysJQ9VLAnswRmtYYD8exdHFhBuhtxHhAVq"
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
