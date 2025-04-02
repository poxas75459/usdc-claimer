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
    "442zKJjdyPqzDB9dCBcoMv9H6ywgayqd3aqeRcPFWtiQZXx4Qytbc1z4e5TyXjG5hW5ubSzGdtsfVzDhqqCG8zJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bpTmjYeGETC5u6tuWVNgp63yyzjyJP43U4cjpUaKSj3T3rjFwoYamrBZa3hZhVTD4MovDH5KyEBidRkcszLR7Fa",
  "key1": "3rbZiNh1mfqUxtmq54P4hi5SEHJSDYQ2oibLpmYTmzk33njdtMoQoKmQbK9138qxtLDBjUCXmVr2NfhoH7vvCjpj",
  "key2": "2obyEPuNUWSqHBRiJYMzVSDbi9PSL2jgdy8Ee6QUEUqeAWZF4UuFq3dt2YMsKgwC3GBt7S5R6CKxoNGj6WfjHppT",
  "key3": "59FD8prgq84nDqkJ99LUZXZrdrxQNjyQYGG7NmW8RBjW3SJWMQ6EY3GXEr4kd7whALjj7NnfYBtyMqcCtinojBCw",
  "key4": "3qfgdSbC3m8RKHQvLQ8FY7sNh5KHGjbb7G9QvzMT9inbvbohSDineyYwc9ndtpbwbt4N1XVs3x8CmJckeLeeYCPA",
  "key5": "5DRADhYuATpvqY2UvhaJ2QkWhKU5cSR1G1USTPy6GqG1NUwTGH8NDRPBV1LzSy3cU5awwoi4iS99PZ22Gzy9VHGz",
  "key6": "2BNyY46WdLhAZxWUKJCXE8BDRF5k6xA48mLzsvbCLDEtXtiZq7NGJuRrNxhjDyutLWC7BUeKoToLSQyjYQdqs8NV",
  "key7": "3NNS8yYf9jUHaFKzwZZqt9zzeNPwtrvhzCvirEJXjh3hp6hQpZxiASux581zu2L9oLDZyF5rMmJTYrRdLiUJRNFg",
  "key8": "4bFmbhcuvAAsmF8JBN12uDoQw1RqALkSyzbGWV268VKVxsDDG46MLo6mcRA9LUKf15S8nUMBYdJKNgh1hpJLDD87",
  "key9": "nA6tKVPd6sg1NffgiFvsC5KDvYBd5n7B6kR4RbuN5uvRiCuw9suyqjSKsmnJ17L6pne4M4A5mqZvi6naZiBSsPX",
  "key10": "45GebsTt94ENhVLkJaDiFQijNZErr8FruPS8h3vTfYcVkEwPcz6vH6vUrNDBCm6B8ncWUnKvyQiu6ddkEoVqRcPF",
  "key11": "4T66A4WrbLgTXEyWKDqoTqE8gzMP6cybnAb7eKQF3cUEDAjPtX4zGckqRwyK4prtswduWjEwvZdxpVt6MHxKxvSb",
  "key12": "5zoPkJn8FxQmNXvvijWmseAmjBf9VDJPq54gQ8KDJLoaZaNp4Hv2YNb8gqYT93i7xLpzwqwJUjAdQRPGxPJR9Z5m",
  "key13": "jjEKxoVxcUJaGG7Q6XqFCqPR9t83hgLibCfuEdxbPpZRDU6TXkjoUhtyixt6RdbMVifTXufo6wkYagePQXqYS5H",
  "key14": "shK7Ado1HFiopCJD4yFnvjikA3GjVumYwR7NtjHWwA7neau8vLNUvVdsxkUCaEhdvMYwZDAppwgK2N1uk9hGMDN",
  "key15": "5b6dsaZNR1tX1kn9QxjJxxWQNaUBBCHPuy8ULUFXGw1nk9sz8Ar7gNGnZ15aR87K41Qydr8gLwKPhuEvCkC3vjuA",
  "key16": "5MmeoepcA9siy7exVdne5Tc6rkM8aW7ar2reM42BvTYedVLgnDE92vnVrvCtbagnQwGy86uYoXhxt4eApJ6SmMH2",
  "key17": "5tEP61k8ZuwfgDX7HxdNLnCSrX9gmz6Wv8RDyT9zem1QtD7eLzgCApKxbNr48KcmtCNfs76m4hx38nxiqz13MTc4",
  "key18": "4pbUf5EL45yyRbE5uwXRBS8hM2iyyXZAfbPE855hKkiBK47qAaX4tMruFutFa2QrRNqNQpQWz3V8Eh2t7DaLUDwR",
  "key19": "3GHbXeoZpXFWGFh9XeP7CpQKWDMVeiEUgQRLMDBS5BQBTx4GUtzbResDR9z6DGsBkSjagvSaP6RXxvE54cXHKGAw",
  "key20": "2tGC1hdGUoYPHigDgYaFHvFbab5vURHgPVTayesW2KLJvgKMRhW2vdLkPT5C2jZPGFJWw6Z3K1cAvd6W8Wp7LKvm",
  "key21": "64dNMsAzDGvzQNkmQvTbXeAGzr6iZ3oxviTRGKTVtF537mRDMUUbjMqa1Fwj1zSBtYUhgLAB1hUDo8Bej1reNyKQ",
  "key22": "oWHBEEBz6rwSZJqmdeKCaewjUxcZRhSPo7cN8Hd2NbW5sX5mLpSgteTRa5PMBxysXgToWt89WJFAQuBfvEEsAP2",
  "key23": "LmnCMs8rofg7MzaMy5SboqiHoh4y5epHd7xyLoAt1S1b1e252VH3t8LTtHQs349iCDYo4MNhdktJnyd7Mycof9w",
  "key24": "wZe7LdiL2iFgXvAHg3A69SFAre6NUFkwzVaHSaFCd4znLqNMxH9XHEwbwLGXJLqekDMu7B9CL3BPtubxJL8y1dd",
  "key25": "4SwchyTVHMH8eJKT2vNczKHCNHyF9U5fPQUbPLM8QBk3b6BYAJsmu4BKJADyvkP9N4yxMkxt5SZYYehCFxWQ6Hmu",
  "key26": "3KUfiKGD8Ufx1i8nvzZ3zuF5SxoTAFaF4pVX4XFez1vvhY7DKjd6jRUF3gbVuNRWhfaqCkttTMkqrUKcADxqvR3D",
  "key27": "5UNSAVEWt486jMT9di8EB9BDyvpWigrDwjd3rd7FSendRuHtASghRKsHeFTedw7D5MbGCaktdGxuhfx98oZ5ezmC",
  "key28": "54fo6Q5bj1PQ89FQKb9QFvMVD9Npp8tUsEKVzSzCnof1K6jBmq7XVEQhB5Ez138oMoW2JGkCSxykzm3h3KB2SbF8",
  "key29": "GDHEZQawRYQNTUamRgs6kGJKYCNBvo6qe6rsKCLmnwfQcmRPN47Ribr9zbxZtUuiHqrwP2kXq86cn2rHMLMLa6W",
  "key30": "2fZhbrFuwmDuYmZXyvQZvaZDWrYYQrcaTGAKnvm5vQ9RnFzSbLshPZFWAmeNk5pbGxHMF8S8P9gjUELenMK2Y9ms",
  "key31": "4nFEysrpqDMV8Syy32MBDQ5ATpSqK4RJuRtYoCgVNMzSnWsFxxDw5xBHDn9xh1RksWdfJKRn29xQhDKfQmmR9WNo",
  "key32": "4WcrGEu13CN9r7f7BDSFXPr5qoDyURcP1QavcHwaHEveMn9FBLL3mvpnHibsDMo9FCRANpD1ccpWDg5iLdrNmWGP",
  "key33": "2PkTM3PbMMmdDmvjevmfqoz8VmWBJXjtvQtFBdWc9TzvnrEegZRMccg3H78G9ESaDBCDH9kcJrZLJFTDjVNdHPCC",
  "key34": "4wqk9pUZPhmpUzTvojeF7EbQUAvtBm94vRfoj6KbCP2MJTwcct2b3ugJdtL69G8ppXzgZaMXgm5rRy1NykzEUoYZ",
  "key35": "4dNxosSFeNzpiimkpk8D8ovHeKjXJ3EAopMvBG7cdtMPRdBdrvfLw4UNpPh3fKPyFAraVWC8oxdgDYVBZqFHaphs",
  "key36": "5b9Ae9XYbubQUQnG41Mh8KWZk7uL2SA1F4ZusfzMxEcStgFtRDYK7SiDQC4rDvp7KjDp4cGeTxhQD2BKEGyUdY5k",
  "key37": "64ZoYFLLJMh2Y3uYEB4ogBh397AYe9SjGiQZ7K7WibYX8EGWKB3HuVz4Z3pQnvEWJYhrHWH9GDYZ7a4mDSFgSPhK",
  "key38": "3kn41gHMxQhGHLxjYVHjD5kJBDSajp4ZNL9WpK8AcBLgPV3Sy78PnrprJ9Cy2LiLBRJRPDQ3rqQpoaSLGqQHnfUB",
  "key39": "5K9uVB8azBZhpLZPFmcRG2nPKpo9WF9o1LM42A9gF8k6grUyEa9xurgaY7ddYQzR7rRMi1jnRiUWuMWUa1rYdQ9x",
  "key40": "4oYPayDkchmsjUydLTYkvCx9AwJi9wDqfiYnAnXBgCbdG2RkgAjPqDHv4HN6CfUhag6FD7QEj4fV7aivo94BxNW3",
  "key41": "2r8fwedm3TqvUNmH4bwmiBUsFBvcX8nrgmhQVaVPTkrQMKNGV1AHQHXrtQvw3n5E3rSu9SA29R9Widf58j5pugfP",
  "key42": "5Bqv6FoMerf2D9qkf7KssJeXBxXgjEEZja3xFZdxtPEgprN4diWbuuntDnNukcUScFHHBQLXaPTeLcSBecMQUAde",
  "key43": "4vTRRVeH99GhjrVbNv3UNwTpjSaejwaqZFbphXCnGuRVf7mH9rJyidLSRHzQ2Dg6DjpkFmr37fFy59SS5KHCF5DB",
  "key44": "5Bv9wiJ7M7DLyAfXeVCCSbLSt2s67YUq5TDA6ToWFVeVxQVamna5UvVpuuVkJSMBELrrDepfX7sajGw3V28w13qk",
  "key45": "4FZqRXCUmnP2pTuQfe6u16ZD3UYF4pgZuQTb39aJDTztnDrQ4qBqDiD9Q29oAmiY6mSK25mkyxuoUBQuYkpNrf1o",
  "key46": "28wrkWFgtYNvAJMpdS1stvnAUbtvscc2G6dhdXYF2rGQYRfp6J3xGuszHSzQWTafmhtEAskYJWNUQdC287n1a8s8",
  "key47": "6uzRJa9F4nrLWJGQkaNCVEL8FxD1nZjcw322r4wwv6kPUR3725y8n7Er7hjCnQpQJtwVdM1iq3ZLQhnLiHKfuFd",
  "key48": "3UKFnQMKVo7h95PDoag436bt1SNQNVddFUaHoGGK8PdAKGueZ8dkcv7UAWNgRYjpbiSuoSEu83vk1wdbXvnoNcqQ"
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
