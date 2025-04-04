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
    "2zV9GfeJPDMLDFXTuJxh7Ss46YPHRybJpzkfirUBG3QwYTYTvtn9RdtnP6w9AGUUj7YzV4u8eMjx4CdPfW7rpeEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NwWxvrfgnPY2Y1H3WgkrdLCkRsaicZ2ZGSJzEDQu7eCYEhAwSYdiubSDPcqkCMpTS3aSKWLNaBnb8uPdP5XgvjD",
  "key1": "Difvbr9aGHGK3YuBn5KPQiqLRYnUnxw1zb5oXX42vqEyUSNCgDH7XKHWcyFqtoxsQta25DFwTH8cqkSREoicdmv",
  "key2": "3F4oFaNSu2C3CfxbjxHFkeMzj9QXAc5bzqL4opa1rzzFqz2JWEAHioFwmitHD26xfvkhrpu2xetVaQgzvuG7oVLD",
  "key3": "2M6YspXVMJPz7A21pi4y9zbT1imJmSNed6DxkkjT6gSzCiewn8sWzXSnVakcYZhsne1YcCY5cDJrochhDzTUueXn",
  "key4": "44DqXnGAfUHF1N6TAMG4p3eB6Kc9CDabTgpuAURzmTYXQko9Sfkv882e43EBv9K66K9WKXBoFWkSZ47RdD4aM1Jv",
  "key5": "38bGPw7reTRqxgAmXAphHJuFA75Kon1rL2G4T5qVUC9gLiAk7Ab3zezB543o2AV8LbavMwaPpHaSaCTiP1tS5DPB",
  "key6": "61HtZ5YUvJVR6a69s5yUbvsoBvg2NmAD5nPT4v3DNE5Qzh7MFTJqTcU3rjrvhWwTYbHydckqLkiFRGrL2E7QkfvY",
  "key7": "3fhQrgSzNoQMgAHsSd8dSVTG6G1JcTRA2onBA3WYM7hnY6oYnYKsBRN9yWeDSLFQh4dKaYwVuCggSdfKCFrp8Lhj",
  "key8": "4uCMLsuCcTaiM3wQ2vSMmvFcT4xHuxRCA5NpANMH4MG6kUXz5aJCtw9VwzjYh22kdeRmsGcoQz768S5ttJFWbDuH",
  "key9": "2HEVGr71kCDVzwjUDxNoFFQ16V3FCqA44oF2Vxef1DjX8ZcpqsUXhLc6nr79R9xoRXc1mT56aT7kYceLiFMeMGWT",
  "key10": "3uKH5UfPGuw1MoLE37GyuGP4hbDqNMTYFzkmZpmmMUs7LZVXGACW6DySTZAZX9FP2yPz5MUyzq4wVi8Z9pdFuvo5",
  "key11": "5tbHEutCEz6ahYZzW6x8rhYJo9aAMdwognm5JBnwipGdkzAX1WvNQu4RL9p5sGiDMvSZDJiBz9mgHRUuTkAW3sRQ",
  "key12": "45tEuZZjmzHjiNutzgRNqWVRZkurAebXdxZ2zeC3JyJyL7owkzdsYgbFy9oKeJJJpMEd4NKNiXAbd6zbjrpbRUin",
  "key13": "3rT4BpRyAmrtdm2hyBHCcDj3RkHo17BpQkHhScZ2ns9vaKuLZ73nHapTx5QEQc2SBzxoQZmsk1VRSzhY4i2n4M6U",
  "key14": "3mQNWyGdA7RijsCM4kNxUuBLoXJdkE3DFCydew4ZdUqgvJFkcgYSdvy5AuUAjEW2mmJPpLjZm4NGkgLiaGf4CkwF",
  "key15": "3qf3sqaG6smxSLfucGMbJHog7CLuKQR9vzsfdWWq1GmBJvfj7WsQngr31oEGiSU4kMwdz3R4c6eYt1Y78C48jq5m",
  "key16": "eySfx6tAEXnHxJiEtdEXzxhQtzKawaZCwaDwKeZdofFcvmEB3t5bLxxVBYoxyFHRmjsqo6p62KHVnVDXyQ6zY4A",
  "key17": "YgGey3Dhr13tRgR3vFFWsPeW6MF5oa9s3VMPA8EUMbV13NbHjeSJfzPmkpyCFXgW9yaPbjDt6Ax7r6XgvBBk9EX",
  "key18": "26ApSXSdXxkrkQHU4ehomLM4Qcq54FhJmcHLRrJx1YihwTrvxfarmRV1PqN31eSZ1kFRCbhQL1ed97YSH2y2KiYh",
  "key19": "m4pmwUqjGFKezYJ8DZPzq2n1X7c3v9DsH3FRqGD7RAEJdE5w1DPktTsXPwabahuTxc1h6f9fXUR9JbH9UD794H1",
  "key20": "cwhkBhReqHr4sR7Rk31vqsen8nBDa5Qw4P5fSMMK9szs65h8XN6NYPgeGPz8sSRWeWa9gBHK2Vq3Ex3ADjny3Xc",
  "key21": "3caWeHad37mQ8oKGEzVDLA1njhk3XANiwEqxAhnfze41vULxss4ZmWPezqeApZscZd22z2QmpJ4eUTYLhZdLRWPk",
  "key22": "4BV2ZR84nhvkUibVHXtDzo8sNfrdTUiijkVZLCYtrBeWXsiwS9UrbDvdMPorpjNMteuXBd1AJpiHSGt4re1N3ubi",
  "key23": "2N3rAKi1tDksJBqjDrE7BKx9XjagXVxgvAyChuv7H28DiVb1Y1UU86H1QhmCx7EG22UucMMKGZeH7gp4jRGh71g8",
  "key24": "3aJstvB1kyorqeph51eGDBtJKHtL9YeAMAuqeoxEdn7Shis8JGDSxZ1VaLd11T8LVTdrby1RSaYVd6y7HkjQmmYS",
  "key25": "5HWEniF43Ejm8Je8ienyZY4PF8pF6LgvNDVaPVuxeqizC6pYk3EmjVwFLmxwVZTg1JkkEogayp4KUcCPP1yjuX9d",
  "key26": "4aGfovmA8XYt5r1DR4r4EXgcftBJEj6CdfyUCTfJ4WzijohKjnbHB8cJuWhrSMvZxrSwwm3hnUD4x3KjdkT3ph7k",
  "key27": "5Tjk2bCUr8heA4qTaDWnvTiWGP3GQKV5wgHKEmd6tLVYSkufQMpd5WXpKGfWT3RPPfVLya7ZDvpBXQV15nGcQD1j",
  "key28": "3TDrnQhyx5wPGRkNXgrLwHzaB5cJDZawy59hbSramgGxrW8BndzbjGUhYpH7Kqpeo3HAaq1BurTfGB4HrtNKrv3S",
  "key29": "56xKWdsqcbtdpZLYGSm2Jqx73jhqUt94YrZQKCrv72dteZke5vXsgz8LETg7RVWLPmG7eG6ZyAyxGZbz3xYT4b9o",
  "key30": "yNikZeJVFAj6SY48je6ubxNRT94cEcRDGaynT2DuKSn8y8nr8ZzjYMPecHncgrNidfurJU2LuN432F3NgJ2SKNp",
  "key31": "3ZLkS5ng5BbPZvZNBgrkyRRFdqyPxHPtsg6m7H1J4grEd1oGGGXC7quaNr4ZVWjn7fMUfQtM9fw7gA4HAR9hMFxo",
  "key32": "3Sgynih93YBWXR8AuFMcEhpa5XmzaDAGz7t4q4REe1vgFbZWcgju99GNPUqfqQX3PafFZH12Vf87RwtTgvZBAZJq",
  "key33": "5kXbVJJLCm1bnXs3vvdwgYWCwVGCCMUqn9L44mJ6NHFE7MKSpRhaBu55U1DexupGxqoqbgvmoeTQDkzXySgpUvdK",
  "key34": "1D5wafJ8s9bM4ndub3eCdgVrzdYsqNmh9JqSFRvygKDuGFB7k2rtmSnXoaZoUXrnkPaXKJnx9hB2msHZPHKE6xP",
  "key35": "4yB9MQW5ZgnKbwoYWbVTkZEWFr6ok4qVDmnGxhcb4C47pY5ERadPzahqS86RcmSVqUeF7mysxozYoQ4Dk4QaLj8g",
  "key36": "5xduJ45WHPHJgAz9yJUqQt47AMscY6K8JPe37edB36UvS2ouTR6gL8L8kw8dbtU5MoyRE7MUnpSkkV9S6Nq8ASj8",
  "key37": "HRJET611CuNeayfCMQtvGHtu8qgU4u23cb1oqQUe3BcYKPurBrUojf1AKaKgZLEJrPQEbAyRunphrqu1HxFUpnf",
  "key38": "2ZAhFeJmixairx4b3C857HquFVVpGHnUcRsbG4kFnz1RjoqmRkTejwXYhYKLS5HTnLdnFasZp7RoAnHYG4JuBVUL",
  "key39": "4t7kU69mxxY8Sww9P5xagUeCgUMDFGR3eNRfjHRCRnu5coxCDPqQQWi6agD99ttKptna1EAHXwq7wtiNngjFMsce",
  "key40": "4p3NRm2BhjzPD85wKewLT3WqdVaToyCCERhwUkHYgtAdubGLqa7bmVMMWPx49v13TVc74trbK8YbgFjR6AzAqDDG",
  "key41": "fCehLxNhis49L9ibh654pH7SXkAQ35fkgKFW82EXnp1ia27a5z9ZRW9kGwmABCKvSCFxrMtz2hmANhLWkEyLuDC",
  "key42": "PzYAf7sYTPj6bkMALwBEoRq14m9NaVfHidbj9vKrgigpJ6m5TtEjxFm12vuhYnP3RxXD2Szps1uUQKGAeVokgJL",
  "key43": "35MVPJHinzX4r1SfvJJQzv74MEL5cNoZF3gRgi9vxDmic8ZcR8LGvptgCpALLHcomGffSh2N9KG4bmWBczKMAmP",
  "key44": "QH6J7EkrTaPN3Z7L5eMJD6w2ZGftKkS9g1YsxWVZTmZXx1FF3d2VJWYKZywNQWeL4nSHTmaFFsYQCbQ1BgcyYCe",
  "key45": "4rR45C4kPYhJY3Aa352LtqrSKHjUwnxvjh9dtTqFwzb2qdjeJmPEkffhY6rDVuXrCfjKEjpx3bvpLji7Z7RYu3ga",
  "key46": "5UmMN65qzc6KJiFgQ3grg1J1KuZCgmJEHBGbfZgAEkEKVGSmWUcq4r7CpGvDDdLMmZ3WDgm5Nvsr4KjyvEAVJyvK"
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
