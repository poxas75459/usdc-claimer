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
    "G4MmtcL2PGrTahL9htc5uGAQ8jyvoLiF6HQL19ALj8FRQdJuTHsZFdtZDBPHTcfCpkCrvgDy7RdpzTEqnXgWAwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53GQiTFV7jTwjLj52fQErSLzmvcf8vqQvuowUWhLDWWTgXhLS76ex6GgTqhxsdtsX6svehHktkzEqXKTU6KzHccq",
  "key1": "431ZaqePaEV6op9Jrrh8piZrcgzhwqqFPrBVb6bqxNw4PivuCFa3YB54CDEF8UazoMgavXJacYQLrAzkLpE3agYQ",
  "key2": "4CdGwHtYE2eRbUcbUuHjQs3NNJN3QJFtzq9ereRJiiQ5zPEf7HC24B4BkS544dDaVVn1nY7FiULfF89VTJ5DaukN",
  "key3": "5AuBA1expS3m2fBnLDBno3tarb6szUfiZrDVvPHT4XiTvho9FUKV8RJuMEGbeVqxvebmbE33hMwBSo3GXmybExhc",
  "key4": "5HFPnWg9ehkwUqrpCmQ91XReUGm1ycXwHxgU4vykiZEyy55bCo4ZmTam3MQDiD49c6D7GYiNXtx1awi6zJgScXb4",
  "key5": "caSakUf2zXiF2JYM3dRpQGsRoEjxZkpqAMhMLTquWKXCVpJ54bdCiTv6onFc6okAGDjPfmQgLaSJdSaiATTsCKR",
  "key6": "WneKLXFrCF6HoiUQkSe5xSWqndBVGWNCnRfDoJKnxDKWEoJJDcEGfCHEiUwYcDmLJEUpCwoQtZ5XgQcGNN1LAK6",
  "key7": "1csyW4FDm6Hex5RnRnkknSYUhKkPaPzFnb4GboPRyesn7EbYm2QXgAJ2J9oeVvhfMTz4QPNS77CMKqswxM7tPoz",
  "key8": "3g2auxGFeEEH7Jw12UmhTYqhv1uXHbkt9zGGjgZTrZq2VDpMpvV186z456HPaXEJhvA33NHunyRdVsakm2JjNDn6",
  "key9": "2TFEyqHeeJXS5bQhPNjsG4LXxT1UmaKmicoDUYSnZB3k9msv3eDdTQMbxKQip8PTewHMHTWSDiDap6gJTa2hKNz3",
  "key10": "5LnBgcYjjUNdNoU3Te4V43GSt4eQhAQXvuPYGxqoQtdgBuxt9Q7SHSto2ZrcuaT8NN3rPEREoTSGLZuU4ihHHcdX",
  "key11": "2WMwMSqssaGDN9NwgXpbipcDUQtATtJUGEsUJBqycdtMSPYad3eyor3szrCqshrEs2Mu14KHqGG5x8HgxgFckwEs",
  "key12": "3iMsKK4EQQGnwTKS2CYyKHmVeGGBKNeauBypy7fmy9ofHFcWdDuGiiN3Yc4iK46pr45QgjvvhpYorAZYV2FDoUbd",
  "key13": "3Z2BuDo4PUcjFeECaDZv43U929Mwr6GN9cQiuZw6vWG6E9x2Vy7DqfJkkzoWpfnJTK3D3fYNp1LQwCDj1Tjj2ivD",
  "key14": "3SAzy1vQCvuWuibbsPd2Yqs1zrR6aRGtcaY2E675fDp4R4uwgTVswXB3vVPjTFrndf1Me7vZXS2rKwPsfV1NGsac",
  "key15": "aQqLM7HV9ZXbMdVgqUFbmESi4hbdvnZM7ZnURXWMTrcRy1PQZ7gLeWeamjFtir7kg5zuYuGSWQ5aziZjZkpeC39",
  "key16": "5QQjNvDNMdZdPnWKAprUc8BM215WHYGeqvyk3r3p2M3oLbuo1rdxjDaMwqRbaQPLAAjiocwvTWqkXFAQsFq74WJ2",
  "key17": "2Yk7gmCsyWUAgkGHLhQBr3VtuqDsES6hggTThfU5GSeJrqe6ZpTqRS99gvV2k8Te2oBfobAjKfNSNB9AoqgYyKtf",
  "key18": "4hBZG181jrQjb4FyhG2p3CYzCZpReg5ZcWngAYgqsHPWhurekNTcQTGbUbK43DWcqFCoso9e6B9W3LBCuSp2bU1U",
  "key19": "3jBdkNgoh46LhrW4k1huE7CUrRjR79DvRnKfipgH91NTmiazxqUxBZ32PxmmkmCnmTbrvnnJmfZfCi5dWC44vmWs",
  "key20": "2drzNUYZHsA4WCsfPU7etnc4VH2HmE3fH2q4DhrByQqmT3KMLmrDKnQEFMNurdQuyyAAXH6jBw1zJTRUsBpS3ZBe",
  "key21": "2jDJbQad5u8o9rY8cgFmCDCDALNaWcjvJq914aDYZo4phBhSJnz5ejDVanx4UarNDKiaKpqsyun7Ai37gsDDE8mx",
  "key22": "5cgDKoNZJZGHHQbMn7Q3785B9n7BZxXbbHLZu7CK43RPNwpv1RkW6KUet47X7q8hKiEYrhYdiNunAM9g7qVcC5ik",
  "key23": "piZLG8HZjwBYe4JMoYphS31e8cGbF7RNACkSPBRDhMwnjhw9RnWcCqU2TpTxJqwhEj8deXR3BYDiXPFAgLTE1Xn",
  "key24": "5BnsraSJFtcax9KiZ29G6LenWtj5j2enX3qWjUAUY7BBW6nnPJmeo1KwUR3xuGT8xJjKkVGxZYeLzzVwR7eV4B7G",
  "key25": "3gW5yjicSxur8yXZ6MCLdjooKDLYzKXbL8kCes9qUbrD8f7sqRHa5MgtpyX3DLUhsYVqmQF2dKmPR56GPQTRqNqo",
  "key26": "5bWcVZd9haSd6EqC6b2GpCSQV7JeiGyJbd9oGkVFkUCQhnbYMNtZbNS8cLSYrz5CqcaDG1b4Q74p5f5dmoJx957g",
  "key27": "3ygGd5ptw6GMjkx7LTuZuMgTtxUMckuXhokpbAjotb6pymFmLJHtPcw9xtpgCPDgKCczgRhKdKJWbobiDd1HksU8",
  "key28": "2PmBNzFgKEje4R7xcs3GZcE5SkmcfCr5PASB67mv1fcwjbeLMV621bo3hF3W42kxN1RC3Ycfs8WtZTuttnmmxCpR",
  "key29": "TAEUatHysGr7EWQ1FmCvqxRQZ8gVAd6mWfGndRkuKK6tcaWmqKPVmRhfFdXrFgxMXPiVGPtvCwWHxQGiWSyrA8n",
  "key30": "4gRRRHGPfF63vUPbeE49GChaBDSCGFV6VwWsgvyeqD9AMLsz56PMoVCqMEeMn9M8GWp2FB9jfLHdDPuXVZAcyL1g",
  "key31": "3r7NEUZsFbRC6ufRVZxnSEUynmVtkwNiqstfuv3ugai6EdFZa5UH33BFgV8rkuDYbzdHbYDrqvAMa7ehmyTLd7eL",
  "key32": "3oSdbcfXwCXvN9w2sGzMK9KGFC9vJqTpyzsa11i48cLEE9AT7nEGSnZjKomK5ycb3w3gBakzCc4U2wEZKkNLhtjr",
  "key33": "3Fvmf2r9LsAKBWaQWLmoRriG6oPGzxyKTpSLiAFytBJGBGmcQnCgzpYTCQwGTZR3cEPujeDN5Wvr7yNthBBVwAxJ",
  "key34": "2cXfsp2AXhnCWWkcrE9Cac8zwF8ztHJCfrYsoQ2KYWanNTdsbpu81LpRU9enJoq6dgNAi7b5jprJxbw6Nw3BHNZN",
  "key35": "5BTPQsHqnW93QTdnzZEAiy3dyVqXnb3kD25HBKqFrTZX8FKiQFUWVYnQ9EyFuy3FEaWLsrVNuSGF5ereseWnbMgf",
  "key36": "3ACFTF1MeAxu49jcDkrpGJkoQxthaZDtWjuUK5oWbbb9vekzZAAgDmE5RFcqUuUNMu9VsYA3CPPWRPMoaEVfAX36",
  "key37": "3m25q1JrboTbYFTygSnhvd8pVviDXsh6TtbmUsS7x1HVtn1foAiZiVHWNpcKr6wWH5hK75MAVnEXzFLBCQZopcqb",
  "key38": "2qmbCLrUG1o9URFicw2vX82ihov1Ktse1qBLeunttiDfXSwKQeu34y3xg8agemmACEg8evgoiHBHdMLMbQkNRWNB",
  "key39": "YGwVDM7JnoPEECTT4iacrraWjpivBgXfeuY5jKxK5jrUwCHT4CW1UZGZ9Sf5fkFqQC7AjXiaeMYXg3Vv5ZbCZiw",
  "key40": "56LMiHCCBwWSWYrv1kMgb2sdyeB5pt2jCdg2YX1HqB91JDo6uHZEYyN5TbixmuUQP72waofRPE7GfrC4xsq9kiem",
  "key41": "5hqesNvpcwb8nvtjF2JPBfnCgWmzC2zzspPPdHkYygfzqefMXw9kvWNUfxo43ghV5m4p5veDNdnwBvRD5jcQDTJV",
  "key42": "44Ep8aQzvbYsaAoeEntonGtXph9uYYJCpvXkKiu39bfCh5xVBFkaPZ4r2MpvTb4Y632NJdDbthsGwbnu6hr1ZZZ5",
  "key43": "2H7pLyhAGxEBZSBgxE1BeFjS2MwhjaeF7YUBQUKHvfMQz41BByhrTTz3153BkG8xdhVSnMfuC1krjBEWWdx76XcF",
  "key44": "2jJafMQ3LGUdo7FkWBLcK1vRhznCvUhPgGEiAF2RLq1m1PstUTesYmvMjjBUYDBd6u2NwdxZaMwiXMQXawoLTCXL",
  "key45": "2KNmgqEvpkdDxzrTAxqVQfaTbphTPQ2Bsq3FU3kaPZ43VqEC2kPvhnkkXhf9s6x8DuRt9eh7ExuggT92pnUNhPzh",
  "key46": "PEqeahdZeVQMd6J7FWWg4dTzi4A87gNCGb7e8V7ZnbgBDY88az2hMVJfhZTnFDQf9wz2MrY22a9Trs7d73KpErg",
  "key47": "41cnttmqwjcDv2FZ1AEA2nGu7zjHQog2ds8BbFGtvyi7JALnukabjhMVgPhikxd5mG6obm2mF9yGrVvbfn8Yz8hd",
  "key48": "zNR7ymXoxcCiShCKCtu6CayhFwCVyKLLdNuA4t5w4PGGGoG54Noy8g7b1TzazWaTUKMZuk6SzZ72jV2hvz3gZjt",
  "key49": "5ER4uuJ7hyfPJNghGrsqW92opZKRdgamxHugm6rLKwXZNAuHNem8jN7ebrLKNGHyeHAdU5uAU1awg2esUkFWPJvu"
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
