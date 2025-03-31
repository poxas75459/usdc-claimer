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
    "2vQ15JXpBeLUPHxGwuPZ86TgwCSTMwmXPDcSmGGdJUaEoNnjy4tgyKqEWLiTQuf6TRxjoWnB2KewEpKGS4fHxw7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b5R4r5PpcswpqCMBZM9hUyrJsM9156eDV5yG1z83QW9Thbgk9o2J8QNtDUXJV1UyUhvThXXwo2KXNqwx2PQ33KJ",
  "key1": "32VrYyRZFZeCuPTTWdfxthHLgUyNfeYcyMbw77yhaSwFcyStW3TgM7rjDXqchDegHkanbkWNVwd5nQKtG9GuD7qb",
  "key2": "2n3XFqoQ9Es4Mb8XSKf4TbFdUStmAMNuCfJhtVfinRE5R3WGNTaeF4F7j2nMAtPQV9jC2ghZz1ojgX47xQTPzkTg",
  "key3": "5YBEjKyapSymkBQDqHdSybK2hdtsL6LX7wDVbjrdJxH7MdBHtQDQ1YP7EJGq4FnBUsfL5bKsrzsqK1wyBXc4qNTg",
  "key4": "66gtwuJAfhRgmdvYiwoGjYiGCEo8RHFE5HhA7ksvpEhY8Es3MLbTAbGMykmzDMGfqGLPUzQnVNuesYjoT665zFSo",
  "key5": "4Eu6qp8rgBy8brSMmyPnhYMdXy9nEKtry4FbxKkGeGcs9RcuuzUy7CiZnREdw6rBWZWhoqABA9eQcPfocMnWkuVr",
  "key6": "5auuuVZspUpW51AfyNKMoNYmpbFTjLK7YDLDvZcsoDJUmiGQzGhaLEfWE8Tqef6vAMvUwU47tjfPQTG81oM9ZsbT",
  "key7": "1p1444dt5oWHjLJJL7xmuirvjonbiJzr9VPdvyDLBLmX2bzwXgSKvM9SNm1zEkXUSjx9X2EvWJ92pGhbGExaquZ",
  "key8": "3gJHsdMonD785jb5UR64jS4e1dqh4uwrpQYoP6RUM7dsyGLC2ymud3ZYnjuQSXZDdSSrkJ3SUuATLd7KgPmLeeAd",
  "key9": "2KeRUqB9YSsiZHVukdtqyuWaEPnusjs49KpyRQRAGJzvJHXgyNZhosdsAEiDQVsfeSyZpety6Z9Gpr6G4kzq5CZz",
  "key10": "2FoA14cerxi6EiXP37kpb29cJWuiuhqbsfdkdvumm4p3tZv84WAcaEfEDWD9idVbjD2AKK7PBs8mmzVPkj572QQQ",
  "key11": "wuXvxR4pX5SUtDBhHdKPjtb3JdXHxHGsutwMdbFTgbmbYShLX8KbgAJDLBp5ZHn4xEds4FevAPAWQgg6bUtRp5i",
  "key12": "3SEay3cn3jH4JLSbGQxegYifFiRVX4CMWSHQFf3WrLCvbUFz3HfCY8pDaX2GC1a3QhUydCwpFMv53h584F1Vryfv",
  "key13": "4LpSnxsKzhSyruVgjtKcexNvC5mZfWdxHuJDY3j8NhfFvhWejDaojh9sCnQTbJYeAj24T9Vhha1zzV5xLHHWjZ9Z",
  "key14": "2uwLYcH6DDQhNBSoQLS5qvLP7tDhLsHLtXE7P7i7xtC6LuEDE72n3XP2Gx36WuiDvR38nAm6E4Dw9BY3HAXgo5HQ",
  "key15": "5BYPRRvi9uYgAbQjk1eEB8kPoUHSWNTaokibivPWrJAfNucGmGVDg5vVcvx9PTDwZmtv2ey3FwYy1c7FXssMKi3q",
  "key16": "GJJrwF6mX79kCxBqUXKTerYueS96uoXdRfBFJQYhECXNimCgpCaPazqLd9Rh5Xch7Ro7Xo6L8VGzBzoU1eoUbwd",
  "key17": "5ru81e8Qgo75SCAKjLhrPVo5a3wth6uJowtj5uMFeWF3xV9Xfh9GQxpDWLF71rXHwJPyvyTZ5FdZqZ95J42jXvH2",
  "key18": "3wC4CQ6ESVDdo5pRCFgBKdtwh3AM18ahCBsMPbDizbMJyPrcwbWmNQugA48vRHPUGEp3tAbuyXzWqC1ecfmGMtgp",
  "key19": "5xpXez6RzQ4Y6bLg2s1v4MvG9Nc6BSeWYx55x5JavEHbRJbrEGeN42r8rKhGKM6wmiQRSLfA9JLoSBTAhzaYRNf6",
  "key20": "2C63H2stdUNSHW4DcV7GhRsk3VwxohEbveoKydwiSoQKwrffifCDpRED1CRT6vTL1Wex7JsSs6R28cjjf1qnH5aZ",
  "key21": "4mmZQ5NfZeiNysPQt5KkQkpt2QQifeXKggL2vXdc9omwYYGDrXtR3atAdbWzrhamVE4erAYGgBsgA5Ssc7UQUqin",
  "key22": "5LQf73BhtPCxMU5LLa7AWjtohqvEAyGyB1h9Qu32A4MUxd9yzPtg22jFKR8mnseuFyRHSdM7US9VVD3M2BEkk2JV",
  "key23": "65NojD5f3VrjVzWBBZ6nVesPsgRFZLyGaeaK9S76fc3NDbmffyKPLLLyxAWJdnpWuViNwp7y2Assh8ZMWqmf4cBo",
  "key24": "5cnWP9qQQhz35hyyPgxEvBLPAtQBEkgZcsSREkP96A8ys8eARNbRXSxsi5PwXnhURDpxpx3ayqnJccQw5Z26DafR",
  "key25": "5Y4aXUbeyfdLvEG56sdv39BDEcfCMhz5KpvD6wksfocsUz2kKsEgyF16XkuzReeSxygsBRmadXrYuQyNpy8xHU6P",
  "key26": "5gTEdixWs5MfgoCLmNdAwwbX88YjMU75NiEcQdAVLoV5FfMneaJEz3a42JXdNc3HwYLizd89sG3zPFs5cRF61hYe",
  "key27": "xZQfiwna2irrX56JkxgL6xQXEBMeZzGkZ2TGQPpXYrxB5cFvStMQJLS6gLEPwiTnbikTTvwh6Ddfi9h3EaXESQX",
  "key28": "276HMP27Yy6mZXxvDUZSaB4DFcWQR8vXjfeTnh4G3g3dh4DBqh5WACkZ5jtAKGR9yE3z3jArpzPYmei8GbKsXNnK",
  "key29": "2qQuL7X2zUahUYYYz2Z9YnSaozgXkMREY6URaKVuC17F6MDNQLaurRULryYGoL8cGNXgj143a8mWUD8whXuBgE5B",
  "key30": "39YmvaJ1D7sftGZAa6zpexmtGyGiELR6KVP3kJcBDKe5dqw1uwEQ9oSU36SzFzhtSYU7K1kRTSyWwvJgYTQYX5ao",
  "key31": "58PbpwVEq4ccjjKE2Q3Jvdvt5D6PmuFvddUDnooJfZDaxNadK7a7ajVPsxJHXAZWjAwbsJajsVmGRH2FdcTAq8f7",
  "key32": "59dzHvWxVVJvtD7orZmFPCHYYHurfzjBqZXEtqH3SEx3rr64zVgX2W8pijRCgFJnpmUJ1KrHkoss9dyxkK9kubBU",
  "key33": "Zh4hRCDeMFhkwb2vjww23z1MkFbcdB2DtAmiarUA1XjxRuyaN4FCb9BiLG1yJdf3MMzEFFYxpsNDQXsEEGRKm85",
  "key34": "2eM68FBPLxnBKBUfbYzLqBB5GLfJUHx92dMTGt3qWxb83boVnMp4b88hWQwvbmVBHdRYr5RAAwwhJNwgYhTHw6Y3",
  "key35": "4kDwiiabkAvZ8xUDB6xp8zRuJxv4hEqKFH4Qq6DqdgmaPWxZCr52UYw9hDUSboDNtrBxR61DfuVMX6brjzJUN3HU",
  "key36": "4t2rugj191C2R1vxy4caAv2tCaeWJSqDtMNG6vDLvccEJvE2aXgvPa1P3x1B41KEMcasmzGEHzZ8sfYXnfCvvht",
  "key37": "3zDjTKKbze1L3RSEFUgEmh7apV1ShrYvyPcKFkF7JCuWaVVVcSmQUea8YrWHnMfVZsXEwcKUYzdKZsSZmXDJpgHs",
  "key38": "3tewC9eNfwZs9TM6fDbuqX1bhCZa8XPFNanLXWHg1JSEyhVEst7kWSAT7KbBG9ZCDmxXsRZ8PyhGGp3MFPicZjkY",
  "key39": "88mgyPjmAtyumABHpokjS6gCDdqt2WhWYKohS5CyLHYcA47crD3vKWmC428NPjzqpsbbgqEkMvQ2WgSu6DRcCZE",
  "key40": "3o16jLgYFYfqQz7sMYSFgbevwdoWUrW26LqmEgCKoRV6uZqwFVV1WEickeHCSCYGFVzmGN7zBoJk98jMxrYgkqV3",
  "key41": "3JzqnTcKBr1cY4fgD5egTedqUoFbvS6JqqKF91ZE9JDdSSMePgjQcJYJoCZkAFWVypqvpZYscecNgUjKrq882hnw",
  "key42": "4zeCdcApEQvo9C89AenA4gMdVNUz5PfR9Mu4sB5fXzPgBxKQiwEeNL1WrvcJdPuehWDdodtmvn9TvvAtd6pktZQ2",
  "key43": "5EUrF6ji1LiF1oidiJdjfeEARkEbS4MgizM3Y5iiCeCdSeVaNKfWz8B1wP9S811n3iFateu6zrfWecXiYgwb23GH",
  "key44": "5X6Cn6MRJ7VATWrTxSEMMTQA1tDdZB3bzYRfwq5AffGrfmHuLXn21fLudspJEpjHbuFE6x52ra1VCZEQCRrR3dS7",
  "key45": "XwByiRhv9i1DzwcdZGjmrbNSbfEVRRz4LAXGf19G12sk2XPFvwXxGydx8GhAJs6t7xcLYiDjaHCEmcjw7Pbmy1L",
  "key46": "4Fh4V6Y6dVZpW4ju6CxSkTbndXBFXhWTt2qxTyduwi4hFvyrxXTopGtKa4GhjPhXZHVkQjwNaJHprUbhyQxwoLF6",
  "key47": "4EYr6BPpENBANqhp33Mt73vNDDu4umMhtL19CspLqTNRh53EvUq5Sn2uyrzfBkCW5oooJPut3Wxve8zRpF38Ncoo",
  "key48": "4SfebCoGwyWs6CRnYuq5CT2bKKsLZYJJpofeJbWDq2WoKzaFCtbPaBj2yRHXMwzeHbX2B9ohCdTELfJtmJTY6A7x",
  "key49": "5oZGUZ85vNEksP5L7BpNqPeDA8mVU4bsGGrm8m1G2dgzTh8uHf6nGPvfeUucmfViw9DXpjR9qzPKmTu4gdWHkVuK"
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
