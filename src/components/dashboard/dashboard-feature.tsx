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
    "2gLhucQ5KLo6pNkJEgVs5Yp8FCcbH7Dh57k4jNN6PJ8YGCTkzyCfFmH5KQKpkr6fgh1Ck43N9eFvYmX3RchSWBgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d9nq734SvzwEA7uZbtT2Lswp29g8s4YprYQVK6q9W1kNav5i11PRzRcuchH6pWZg6Hjxmh9HZ3bNHg5FX2zjNXy",
  "key1": "5f7cMWg3nU87SX2fdmscuyMKfNPZ9bkvU6HissUR3zTEdZXvGjnaJGF9eVNUBL5eKbpKmMRGHMuzhvXR19wNEX7S",
  "key2": "2KGNfdCBmTfPjuhhh1ZUrKhseXMnEiSK8tVhYVaoFDCRw8Vi2tAUpznJsgwWL8FspLsbSaBkBa1GCUTAESN2VwNg",
  "key3": "3QJzMyz83axsAuHDGugNzRrHXJqUgwMnbzSf4Qb8QFy7su4LLqXmfATUgjM8herxXStWgp9UseRZp6xLRSHQVbQB",
  "key4": "3Em88J3rZ651jG7SpUfbM9ipBjfVNuo5CLcTxNWTF5wjV7itANSZQ2yrcLsFR9LiUPdVAr22HSnueT3PZmHoB5oW",
  "key5": "5k2rqseKE3JxoK96FUqTkU8ZPRsLc4JzsHkrqPXQuxUwmtorNJmBM7Ygjn8VpDw7ZuKhQTveW6SX7mWpT4ebUQHM",
  "key6": "4wJs172qGrX69U24WVMVJLjxyTuS2orfTKcKRLwvg6fYnE84Bb1XqapgtJBp5nsEPFRnYgF7efdNfdSGSWN7pYb4",
  "key7": "3ukEMRHH2NBctfsn377CHQsYq1ZeRmgcSX8Ay2Pv42DcQgBYKdSvgVBw418BLU1ANd5JJMxF66Zyu8joXYw4UspY",
  "key8": "5PSsysYW8AtdAygorXdQxoMUEU6oB6i1FCWBBApq1LSfiEjKrixhm6oVb2Tj4VxueZxd3spUCE5MadtRKNEtf1KP",
  "key9": "3f2zD4U2ybahmzMXWXmTBgoUU6mNZtg1YeoZStCpnWMCrpkxo5HLnBLr3gWYu3b6ZN38bHioqtKpZskW3hpZ7Xqm",
  "key10": "FJVLUxdYGRYNTZCVLu6m3vJWVGAgGAbG1siLhsyHjGPm6fKvVg4VR4tU414A5zAfJdVdzUTXZYXNdm15GcCFJnE",
  "key11": "DmnbKUhwGZJZarbvQfAwf6Xr3EJuFZDuMRVh4XhQDonU4zroT97UiHPgxszja3J4N3apmEtEJetPYVVx5i6CVQW",
  "key12": "4wkmoLkkpoz4Dz59oBHXvChKHGmugsPXh8goiB4p1FaV6ngjdv1iBkJBHBnrh9VwjsAAsPQZbSwbQPe1KL7VZLSC",
  "key13": "3QW2N673p36yNns8hyLY8Q1yDKFJT7JeFXrChYSqhb9psjjaG4jnVfX4TQ91m7U8aF2FwUGHoTxJcLSJZSovpHnT",
  "key14": "2bHp4pCTHUGatFvACXoqv4UMEqopqhk824QeHEzEkhwaxY6hfg5dfDZKcc5xQvxjn86teRhdoAE5jWAtvMJWGH3u",
  "key15": "4Vc1AaMd8RmVVsB7cJ5XPjJKrHzzBvdePuNfKeCh25Mky73GzEQEUm6BMngU4dBAd5ioUK7AY7oDTExWHQFbb2RD",
  "key16": "eNYbi1F2HkE4U2i1zNxpYq54PVvzfuhLyfmiiqQE2BPnpy1f6y3Gf8UK9Tf6HAyRLUzutM6Qy12ktrvMC3DY1HA",
  "key17": "3YauH49nvVoSVfe4rGJMppj1dbvSkTg291XGpUcna76dRp8rS2fYKcMgKnCV72f3KqK2m8BVwvorHTDC9mEdaYYW",
  "key18": "2Fu2AWJkbP9jL75teZgqi8KRjP7dcgkm7R9Ny62dcF2pdNiVNwGrNfQVU3mA9mJAQVzDLGjZbbHBBmFxpDX2k1hP",
  "key19": "4nedxGTKhqnTYr5vRHuJmRudK7857ngJmGS8iv1Kj68angvycQh4gTn2DPNaXujCFQA1dFMdWUkJDUvWp3US5eZk",
  "key20": "4EF8XANpT6xNhxi31RBUfWgU3FgBFY1Wsa8JEEu71TPFzwY7PmDwDzhvcVUWPBNz2vjosUS3zkdfmMbkj8UuVoLe",
  "key21": "2wgLxfRMnD99bztr1FgpnqNDNpMaazYNqcguyXwT1bSbnwd9vF36khQYNpd3kUiU62kB29p5jxptkSPBSEv9K9ih",
  "key22": "326Y6TpKWxuqTWzFRSqTdgvc4ZsVtWQXmY8czskUiTWXBaKjjLW87N8eBzDMsQKDKJGAaovaSvZNTXAkMbf2BjYb",
  "key23": "4xBuspcFJTU7QgaT9L92K2a5nyE3jGQaLHh5mxyHJr7NHaCm52xKNAxMsgjwVXA4sH5zt27AZJ378EV8qDJ5L7U",
  "key24": "2cR3hcBpG2ZUgNKji91p4DfUh5Uygf8YVBahh1P2m76BUBPLtjxMo2dph4Kk7uSfsSPHqf7juvpBxdDeLCcbLkwZ",
  "key25": "bzvDSFgsgDPBiknK9dw3aBkannBJcj8PZKQHCvEbDjEKAVjTxrwSgAwx6ckXBfwSYxfaoDxyCjrsnKceEVb2fez",
  "key26": "258DzttWptA5FhddekbCj92akmSyqn3DpakixMY5huZX3q9kjqbREZuM1VzYdzBmW9aF6KEGQzrsi5ZbCzdRP1UE",
  "key27": "22qJe3rNxutNj3ZdvS3EPoCprGwrX3TahkHM7EpHBE3xoW784TSQ1uyvfHd6RkwUvVmPyRRgzmPBg7XQZJwVEPr9",
  "key28": "4NmS9ZZbs5AwfRkGxtBkqtvcfY3hYe69VUpVAh9fAAMgWY7TdGsD6j3aGoa96pAYwqaY82p3wkrgjbv4Zr14RTpR",
  "key29": "3HRan4GF7aSvmgMBb9WYkJt3SqGAPbm5AdBWaoA1z7YYbcoBsXumXWxEGLTvGxHq7SJwDYLQFKgQTMVihbcU4MBM",
  "key30": "JbBH2S8bZZWyE7irzypFVDw1GGtKY3bmpuNUtH2mPs2egDGk263z1V1Hd3y59Wos5jXQiGi1w6oo1h8K8CtPgk2",
  "key31": "sAjGv716a19XAF5Unf2mWWe4qXivBKBUP4j5mQWPxFxBdJQeo62pUbXp9hLssAUUuACNBdk8iJmBfwtHDTKdKu4",
  "key32": "4gRa7H7djxzQsKsxY2ogK9EgJevXLqHqAwPFXK1H1r2vn61SDdstiqefNpdC4JFF56Cav59WhF7p9wvL7z6RL1eh",
  "key33": "2xtNgtQoBtrGnLdi77cKBpU1zHtYU58NS8SussqrPTRBP4MhJEfQVQgiZdnx9QFrXwQUNqyUjsoqJEgpa4vKp69N",
  "key34": "2wTJ4LZbc62VMZwsyoRK7eYcBCn8mbGdWVSxQjq56QuWJ6FA7ePmdwafbVAFLUp85HCWytUk1Hw8CxMhUMWSK3PZ",
  "key35": "2d8YzGG2dDZFFnAYGL2seNZkPCqJobP3prkYotyNV4xyytotreQHmXkaGLdFqbZGq5nXPkTpLkkCDFMP2y4qEQ7s",
  "key36": "32u4uZ57dxNtW2BHxpuSeQTdVw1sJqRFH2Kkgdw2yDFpRXhFPF6mfzEVtW8EuwJVvvZmw5rgVAuXDpoqzJ6mFAj1",
  "key37": "2jABiCsmMv5apZBTs7nRnbS6mbq2onhLMhdDuf5TYC9Qy2CtTAWdZBV3tjxkNT3zheknhzJrn2pmHnUm8EhVC5Ru",
  "key38": "fL66DwPFahiCwNE91g9BpojKwDQc7G3QTwmcwPox5YnW6x1fUDgqYY8fY2K9dgq1GpW2U1VS8gZVFQVVw1QgASw",
  "key39": "5gA7TrwfUahq38WCMu1swJA7Kz8nMuWahjyd3N9mC6GaDvSxzMXUxsH54dzjUqQ1yoznA7TfuhtfbjJg6gEjUB8e",
  "key40": "5a1cb9AFWshSL7GJmSa64bSyKFpDkBVkDiJvTQL2SjDDZwA4yB9D2VVC4774FNSRQa1BZqtgS6gxpKcmc8QBHk9F"
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
