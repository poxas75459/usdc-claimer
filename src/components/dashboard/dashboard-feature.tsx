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
    "2cc7rCgSTCwp83BzpqEPfwoXGiQh9YJ4Rzjs3KFA631tZgdv98o9wTkowicoW2QFBiKuX4RjL6i2qZKXQ7bpeMxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cAEtLeqD6YVbuLVfPU2PXwJWmHBnuRWZsAvHQ1bLTUzSZvzJqTmVH9s7arYGsgkLSPimQxa3MEuoSq8ff2uZHzd",
  "key1": "5ASCsPmdgKZoDQGbsZ6Sbw5k6c45MKAsMBZ6tUJpygABKLSL78UB1Dz18ojfQyoJPVNJG9cTJ9M65L6xXQPU6eyZ",
  "key2": "2SsnqvEdJ3bKeqUi4tPz5Lniop8naLUK8zF3pnPNpz79WU1avAKf6Wk9HQnwMtQjnYuFHF9DTXHUN75gzKdEt2SB",
  "key3": "49ZK9UyZVF5t4MbCJ29cq9KT8icfp1mZRHfFBu2fW95Hjq7cY3yMMzuzif9F6B8pLFvmCCaEqVZ6bp26Xkt45KBa",
  "key4": "4J3FCmz932mpxnuWcm27C7zUcm6pkFhGFxCc17WSrb2uzt5dX3Xeg67H9PXid4fxAkyhqzddRWCGfC1ZDKgRUkLi",
  "key5": "R6zrsksvNoU88b1Hdnqjd7LztPNiq6Zgfbv5hZZHzbTRHLFCFo24NLkQusRhfcZSZouTupTKRhphLCFYAf79xYy",
  "key6": "3cQSncLmYcayFqhGNVuHJ9kU5vshzKVJBiGXJKTFuyyfMaTMFSLfmM6FjWRCUgHZbrsk8aYcnVeDXdqz83YsZto5",
  "key7": "3FRNPKk7HRrHpRhLgZJkkLc1a3s5qTkxVyYjfiTZgsp7JJmduHsyEfgj3M3CdHALEH2onxsx5sx8WootMXNkH9y7",
  "key8": "4KbdYiaggDNR9WpcnLHCqKkU8nE4ztgSZZCSCLhdx5sKfo5DnxZ7n9RSL3zcegQVF1LSJ9gPhxAtR5iebxPzArEu",
  "key9": "3aaMVh1ghWJE78HA3MzzQg8hxSKXLg2iPGNAnT9xmDqw3K5EV9MiCpupHBcotBn5z6Df5wT5hRWdM2Ltjco2QDw",
  "key10": "5auB5QNeQE2iGtRwVVgAQ3G7jAbuzdzzUTLCqK529HaVxCARAifAUNpnkimaFZqQgAcsDaaSfqDXufibAGGo7crG",
  "key11": "5MpbWj7MALDvqR1GkpopHSvTTGkvvNrZDpAm9cXwtHzFs7qqaiYH9CkQaSNaA6dayUCsFoMu2dgNJ439sukRjhDC",
  "key12": "WAS8qMXDLKuYktBQTLcc3wjF7Vou8AVAmdDrm3SuxfZgxC2pC8ZmRYvHVUAE7WLthyRiddQ6dJPUG1R9Y2YVwP9",
  "key13": "2twBo9HqJSGcXG67XWw4My5a5pKjKSZrbSdr3n3uBodx8JgEniM3Qe8HZEAefsgCiwVvyMZ1T9LvwCyxrZ5dNVyo",
  "key14": "BjE5Rt46cB5Rknmqm439m5x38MhUWKurw2EDxPAFaGXhRjie4BkLXm7jeAFzSo8APXiaHfgztSUB2zbgbjxgLcm",
  "key15": "49NikAMtNZMXDsbNe1NpHR88AXaUP6ftrJsgADfFwHL4ft4fBwiJfFDPBpTzwX1qVNfTrHCVBFrM53L9bjimeRsc",
  "key16": "2K4nLAhzAAieLev19GxvV8N8kd7rro2DuEf4wgbxpe49AgnbdoZUi4FwYnMRafiYRiyGDjNBiFfDGd9aaqcM94Gf",
  "key17": "3AFwMpkX6tqjMcGfuVHxtDei5tJtSYZQy2dSDHVBKurTbAiBHH5YTxBUkRe6FgRkF5BGgj87gmd3K3iBcubYj3ef",
  "key18": "iGicNpJ8sFrxqyKWDLewE5pp4bYdWKM5Mmr7Pq5YCvU2w1fYWwfUcWamP8bkoKQXxtnH5TRYJujdLpf7CTN5wWc",
  "key19": "3BMN1GH4cGWDG4GAG4RSoWM4j47ndqkjUPfn4tfKYjMVdC8zCxnNkxuPvXm1ZBwjtMe3sFRPmLa2D2LVekoA6CQ6",
  "key20": "5EJ4s8AeRHtoY3QuYXAuajj2wxFw1s6txWm8ELqWv2on4mavxC52NQRnvAoL6THD5KAXPfcuiW1dVbg3xqSnE53v",
  "key21": "jZHxmFCKzRVdakeuhZedmSkXg3xFqxzdsSUHrCpAaoKnzsdZLoDXAZ9yWRgMfis9wKWVH6Ai7zYiYWqbD6N8Abc",
  "key22": "U8KP3p7ga6CMdgDvCJpY7gXHeLj6QoWd9MT654PVifvWT8AfMgEMff2kNxjvpb83VoWBjk8rzY2AkWjDMBbiu5d",
  "key23": "5VwBEwZnfmtQrNV7fcvfnSA4ZfzTPNDaKnZ55CZ6uDB5Z6ofhFQKNwQdENXne3FvZm8xuANNyURJX7Nykgp18bW6",
  "key24": "PnpqrXRw8NShGTR16EauiCVNHZbH4298PPmpzopANpcrxYiiERE97XYqydLrhWfcto3UGNiNSjjrdQuXmYWMrQH",
  "key25": "5apnRgnaeRgduDxruTyvEHaeycwfuGBgbYpBkYF6pkgAmD4aDWVmtrRgd2TmQ5XuPREnhjCJAQvr275TFuwBncMe",
  "key26": "2N8yNxFQSnqgtNzjJxaiw5g47QkZxZhy2X28WwdBHrtCgttfvEECZvu95b5a7jD6bEgLUts5ZjcXEZYm2wWsbhYB",
  "key27": "2a92i6TZd7eGURs73vcRNdXVLJGAzgYCJPRqtZ82vG3ya458XV98qjNYBvPgqJp1vpemYNihVJuNTDDf3MqepXwr",
  "key28": "4oLjyhS6z11rN9AEn9Z3ioY9bxJi5vauyxd6xGVzzmegPNP6c8DnAdgt7WAp4U1WcqtdQd1kdvrcdHNp3ZHifaYa",
  "key29": "52aCuMxJRb9z7aWuY65rf9ck7dqgkqPyPqsZLrVcAsPT49srjShzQnVq5J12LPRBoUGwdHYVYwzYyCmxgsWuJs44",
  "key30": "YNccaovcKZdkLJUyDzEFNaS7wjsskYoc4VsuCeAwLKudhFop8nq7DUWYHNEC3CHQCdBxYfZbWChx3f419XBDDK6",
  "key31": "5gvCbFzsyZ8c6ZcBZtnQaEGY6zboyTXRMZ6o6fkpjfaZubQEhCP6i7VQ22EvKbV7QfohpU4WD5bLSv7mWhamHUHd",
  "key32": "3KsVrSJu73rUYuK2ADtqME3GGZxpXUmda6c4ZyhCQ7JgJr88qcDhEmmoQxNVi21dfieyzFouyayYDshtpqEmfN9A",
  "key33": "32y2HEr52DExF9HiB7J4wEGUG3sgGoMm8998gPRTx6rig4HXgsTakdKHzH7HrCcnYRaKyPqe6rerHXKuFDjroG8y",
  "key34": "otQfcuHswgNvVjbdtwRvRSBpUhaKax65K8JD8W1whKbZ1rsBDBLL2oNd8nwwwNXkwraZxe2q3C1BGL8B8csamcW",
  "key35": "2UZKXaJcyXTTUsyz8RtUgzWQNAw7DbFzridqYhA8DC3Vmp5LvpgY7S3ZdBh1ZgoLvNVyL2sAf9HuTFquJCdCaHit",
  "key36": "4oVhhpKyXxFFrNNQXbcqBJdA6i29WiTWMYS4Au99aEqFDC6gg3CNqT3JxiSqV6ZUTFmS8giPZgpTgaRG67em5xyr",
  "key37": "LfEbdZ4qg3B5XGZkZ3VvidN3PNvZhkcnEaZnxLsT9RXqnkTeGkajBfNYwQv9xU1UWBfbvmT7EDvrpinRHnAaPse",
  "key38": "3L8nQ4onGtFCuBCtmkZ9W79c9SkAaamVCBFJw9cjHLuK5dsH9TVRGRw94w4HK8TNbcNspfAcAzhij5wpfyrw2oUz",
  "key39": "Tete7LsKC78STbCZprzDyAeFBNtZFx5X1mvLosA2VVBYDXqeeC2cpv846C4Joi94G8UzSGgrwwi6BrorWmZgX5h"
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
