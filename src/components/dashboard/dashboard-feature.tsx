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
    "3x3Ai53RwQeUiYZJBaTecYSHYbQadRtFJpHyxtzqaf2cKvMmpM8ezq8TaqHUG59EcRN9kFquVcmojkEAhfbwBmHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KoNSECYzVaLmPTQqFTztBWp4XfSudh9kP2PxbWb5cbiY2UY8C4pupAtbHUGbGUPFVAEjPoRuMK1oWGctDrJFUdF",
  "key1": "2GcZ3hiLxkG6HhGTFFFz2wsivWzeCEZGbyvQPJXM5axDUJwGVimEcbnyX8G1qhW4js8HLWmrC2v7tXqtmaixgkHc",
  "key2": "1RvXki53s9whnCb6rMsNKLTYwmYBmRTXxzSvHbHHgdyQcxWtfJbk9PZAsPb4azdtWDWb4LRfS6vWMTEt5WFJiiH",
  "key3": "4PVNWZMrBxE3NcMUUehbrw7EjMdHa7brN6ntjobT8GYdsp6v7oTkgVPCxbuf324jAXcfoehkWB3YSVFsHpqo31Yu",
  "key4": "HycFXVVePqFhgn9AjoUZXWdR76UJjnTvRQox7HQrMThHgviq7tpJ55xx8iyQTfZy92YgRHnpKfCszPd57T3DdS3",
  "key5": "37nvbv2oAQJkgWkSyWDt3By7HTJeP9PgdQv5Nd2woFvMuoxr3mncrwetA7BT8nA6pDym4igiKUctLtUJ75wc3Poo",
  "key6": "3xjBRhsoVMhrSq92oHbhK5E3pawLZp6dbBFqM9NTEfaD3mA118WzqM8NqnsX4DKrQh4FLP7eRN9uT7q1mrshhFyh",
  "key7": "5vSpiGksBjy2Ke3LANReciZ39mYFshU3wwJhm8dEfUP2Qq46pwWivu3PAKAmMUy8qXFF6XZykPMrG4sosvWJG4SZ",
  "key8": "2LJLcVxKvuY9XBkf7VH5d5UbpQhDGYvwSTm9FvZCnd6KK2WLZdn8tZQj56k8EzZTHELdxGR5oBk8SNrXkGKo4rJR",
  "key9": "GdqLfsgP9YF83VHbyY5kpNVFNAHg3FZELyfGnrL8Vj8zGbncnW6eKVzGVzmt5vCeuVp7FuM5rHXKQVhZnDsXRCJ",
  "key10": "21mPwtYHseMq45NxiT68tub8E5jtqtrjzexwtMKz23ixLyqwbyKtQERxUwMu1ch87HRUQNNo3QtkavWGZjMU5XJB",
  "key11": "5SUoHT2ieEYcPsaBopymovXxC7RX6tePKnSdJMhN52dYvUVvexQ4DRukosTverYx9e9Hr4RtXT1bZbbAUUKwAbVx",
  "key12": "32PBqEGPFBVDi8uofckpfRjGKQ2xCHdXNBRvWFRRG3HyRWCU4wcmbxSKJXGVn1gq373sAXQRDBpiVHs5ZiBdZDFX",
  "key13": "54kk4b7Qs4fNLwWBWGthhfnHoizysm668grqFNvnCbo9bc4a54b1aEtB4quLT5nBRqoSZYAhMAbtvLf6CaxSQrex",
  "key14": "4s8n1M6471R4b3eFDGeYRic5AUYeKduPdJejHG6ijEThcRoSyiWErjSod9PZNwCV4G2rx6LKG27HjcZK1T5tPrHS",
  "key15": "5qjeYRfWAmjcvsdEWUvCDkq68gs5qC3PjjtXYqE34dWxKGA8UaAeqc3tsYwckhZh6YmjKTJnUXBKeybZkDXtC7Bt",
  "key16": "5ZoYVx4qp89L3kSUBWSrUXxehHYmEUGiqGTSZ1gFc3aLiNDLKJKFFWjMjtfen7VsaYKYpDtV5P6tZeBUBodm94P4",
  "key17": "txCdDPT85F3u33uM21kRVrY9scG8WQBwoFsSeaqbdUwEN4vqvJHuHUCvEy5degELLUe2CU9tcdiyi47bac8F51i",
  "key18": "4tXYTiG6R3LN3CUiBqCSBzeBYpAxFAFHruztNQZwVw35LBVQvg83eGB6dq7SPBKV6kXLaWb3fJaUrRZmgnvfgzbf",
  "key19": "4pxfZ8GjQeYvkS9LqUV5cfNW7C3NQgyBDQotJ7z3L4ruBzxfjmNKtQWdwi3gNGAvUbx2dUpLrpvpiMghNSsh7Kzi",
  "key20": "4b91HCykpfavU5ivvqukwrvAjauktQGLKpETwDuBkeN3Ge3tfCPKbCxJo8wiBCt8Z3zgwrmvEWjA6g5qnAetUm2J",
  "key21": "4mtVCGqgmckhBLYLhHL5fFzzaekKEzrcv1cL68snMkgTChYJzyibwrPAimW4pKSxifmN69Z5vXJwxZJ8Bjo9DYQa",
  "key22": "3LZwL9smsMMNty2o4qPtM4wwzi671HNtwQVEBKedBVAtwwznkuk94u8YEQzA7iBPCMp3w5Mb5cbz1wge4uxd2dgE",
  "key23": "25PY5ivEqs1aN7amiRn2mGiP4kZbi2W1fjSowht5Wp6kiqM29DAeszY8toH9ggAinX7JPkH2TDbBo3ZBVhhsj1jx",
  "key24": "4QagdRgsNuBmsepz86Cy3Cf6tpfJb8zGbWcHVjmWfFv5y8nHKqbNkro9dqG7FpKrqr3UEeuoTsEzEnqJUHoAxWbS",
  "key25": "43sKo986duEYJrUGbdJHqdr9R5LiZwej2TytqWdGeJunuvKfEgMeRQLdfzdsTUHChDUgj53xR4bgX1hUo13E2neu",
  "key26": "5TiUBNaf7PqpnM5KTgBD4Lk3nHMT5mMcKkSK94HgFyct2DChA4DVC5SEAAx86Wog6UM2VsCD6BQXhydsGnoZ4C4K",
  "key27": "3xYpJzeTg1gFhvfrzC5k5HDuQ8YgLmXDWCvfUZiByrXTs54HxSiNaQibbYtdzJ2Fgcfb7cNqvodtSfr2ZgP7gePR",
  "key28": "2vir8UdbqiVEzrCqAMzW9hh9wUVoT9NoRLESn2HwbRwNWRhwVKa86fEebjnQscuZZj5i5f2y9jZDBFgetQuNzNJN",
  "key29": "5FDBhpMAoscrNF3yXCD3MJtWsWHT7jAuVG6S1f3Sgo7dbiBcqbSSubbwTvFanWwffBVWoqSjNE1Ep7rafetgfxgj",
  "key30": "Y2EVodZ9GXi3B8wvhhXmpEYghmJRwJr6GJJKnyJsVYDHC6ycxrsLqA7w9GFELqKQcjSo6K9xe9jM7UCddo7qBuk",
  "key31": "53EqBjQcEVxHHW91HZB1TBJBuU8mBLfX8s8LuNeyt98n9BDRupw553xj4MAPxiJFdC5iK48n4VbE5XEsThYkSEW9",
  "key32": "4MY9iapsoXWENHtvbryhYH7fEmd67ypjHdEtba3CFNGK1gzp8h1pbgKCHbnJnAPhNzf2axMqPh8t3iHx5ecnKJUj",
  "key33": "46yLaWqVEeBvz9bFc9nEYAQCaXCuW6Uttxr3WawCpV3qUaiSXU5oKkJFpikQba8zN8FraT2vqbMTc4EoHBFQgwiz",
  "key34": "4i3YRhUQfeBzECp9TkSWLSLVbasV2iGScGwETBx9ndxn7tViDFGEofVFuvYZif9QZaNxYQF7BPeJi6gXGXmmG9iV",
  "key35": "wQYPgqFFbM1THNiFxyXAYsd92UAWnHzbY76aLPux5P3kWTnHJ2xdVkF3sTqXCRrCSFZAkAtuTVbazYXJdn8JrN5",
  "key36": "3BRKU3vJZzFbmKArZ131HXDBkCS5towYmnZQqVkDC8quLtHvgRpSneQN2o4trjHaHhYeh4AsF3asXwGmwzC8WCed",
  "key37": "5eNYqTcTymPVuKAGrYdUBt6NX1Cf9EvYV8Rbk2WchvftfzbgqAvGhnKTMVtDHqJ2YHBFMNPudM84DmKxsRwoy4wU",
  "key38": "2snNryHTpUB11U56B2MF7oH4c6hf5coHgahioGpEBNS6Hckmy1AZQ4tR1BReVSTu68mfGeDKzvm9MZJDFA1wEePS",
  "key39": "2jGRdfpMrWD87SZM8uGbxgydRvW2Smt2HcMN2iMniutW4DYy9Ue4AERaGw4J5vxYnQd3ZEibjFE4Lx38ZTxR86tG",
  "key40": "4BymvbM51yggz9GCqDPMLM6yyCxHccUa1USBVSEf5HYjzcNX2LmrJmiJ6sBzKhmCTApHmPa6KdMqPrgVDGUPQemV",
  "key41": "3rxoX4RxaYSKWMdWiZ4Nenfqxvq5kTC8xhaD4EgUCcf5Bek7fhPaRH5MzrBubiD9xoh4yH6RQVtw4FhZ3ejbzyRj",
  "key42": "5RHB93sQecpEVd7nq9WypHiqRWVE1qWWgnooZ15ZLVHirQGPiJ1HXzKaJfKyfgyqND4n3tux6vTaARZbHJeyv6gx",
  "key43": "4HmyiWi981M9gKSZczN5EePKHL7w6kBDue6kZPPfGcvFtt26UcyL3hH7maMKurfGRkgJdHwNzWcd1giRjSjgNKEq",
  "key44": "LqmUnkX2QX9EN2vMfTF387X2qWmsSuxjYMAqP25JBS5uVFtRwx971FmEUuJNr2XU5c9yDN6hCZbhvAaygH9U1pA",
  "key45": "aYhJqrVch9bnFSUdNrUTSWHjykvVmozbhBwvdoLDfWD6MFLwszWm9nUEbPXC6n5FpZLk5otRyLnNFYuJzKQG2FN",
  "key46": "4zJCK4uqDx4uKu5APj3nd77nkj71ewrzCYnfLB4xwUX73NH7HdBM5P419ZdMGYKEizdhcPkf95mdGokd4hd32kTH",
  "key47": "4GGKy4NYn5qBrgDNTX3krRCsKspVtS5ydgEUnLUSFWPRE1dgr82Vao2Lxhj2d8oBUtu1wYjAUxzhzh7FuPC19wRz",
  "key48": "4gowZa3GzBjJD4DwmvjRduvJQdbSK5JbK5mSscfnnu1RqNTgN9bhKFcrztPhyrNtb3X4rMurafKxbUj9DJaYwM6C",
  "key49": "G7Fjy1G8ipiCQ2fL3vgjAn9JQz7noyBtJrGUJjeMXdNrQEhGiR9KSeS5V1ZHYUEzX2YgqTVMPPMT9t4aZ3eDLj7"
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
