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
    "2z2mYrzruf4kETUhZm5oaZG3AdJLcH1cWw4Y31U7m5ypQhAnezmrmgANWDWZ7DYtjMVRkmTwAjCbMJNJJ8KSNQDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9wP6PXF9XR4umGm9A8jgzVThhWRSorhsSnsBELhLYcG3oCLZ4NFFYhTraxNDFAJ2k4cgXY4YxDFVuRPjGCVHzTU",
  "key1": "91ZT6Xbk2avmNiqYJasaFvaUitsNormXv4Tg49bTH9b6bfiLsdztQmUuZJkBze8ngN3NiuohyLEv4fNyPgfAUya",
  "key2": "5VX1xwy3g4sxGzFqMEuCjEJcqqJjLncqeRhPWv1taVv5TZhvDyJCi2BS45rQDgazLx9NGv4NyX17MayuT2fpP485",
  "key3": "3v91dhdPajQBtSqCeGVpz4WaxQVhiHruftW6ReqjQ4zuQz2UyjDUNVqvK91jHprwAydvr5HPENthsgN7Wx1ppttp",
  "key4": "47pPgwJQNenBLsvLJ8LA44wvFRzYQRxfxb2qRjSQWxLn2bYC1CkZBoAjmUkiQCUbMyAtLssiiQm4ciKYZHW8dcg6",
  "key5": "58gBuQGf6TvzzxxLkqbksC1DdmpusPQJnoZHb3KuEZPHFNUitd9FJEBrktf3KiWYs1u3whRupcJMHpd5jg5sNcpj",
  "key6": "6HwkSps43zNQX1fhKNs2x6mhp8JhQ6z63GhZ4MW7s6GXMkRtwmJGg7WkNmAo2z4MFaETE9t5gqxXpPMpUNYBtCE",
  "key7": "5H6mnkGpjk7pVYaRQDZXLyWu3vXd56bwXT9jBgdcjMQe9wyptVE71QfUoC68C4YopzWNosfHBGb3Y3ykc4vLN7tp",
  "key8": "3hF1XGG7QZvuzsLwvkiuo6bAjALYfHZDUSdAoxfUKAtNK9kz2BHgrWosXgrgQvQRC4YZ6n1qstqFgNVH5QAddhTV",
  "key9": "w9x94LHw8m3QRSam3S6BqukphUooFCC8shnvoEmZvSeQby8emrynM74LkWCCrmpoZMhTVx3CTDFmDFkHo9Zr7ed",
  "key10": "3pc718c7uyxkKByZ8Kc1rq4pUVqninnQVZHDvNbLxRSFz3YS3bNmwZsXJFuHs7euKf8bi9fcq4jAuQkgKC5RBjdW",
  "key11": "5LsmH5GDvs8JM1v9uRn61jfi6xQ7ntpNNs8zK4WDSJ4KJbj9TzqBULVT1FhdzHGiLxnLWjfqeaS9q9jPGpTvvK3M",
  "key12": "H92z7z2PsrKbNC1SDVyqKX83QNYXkGm7puhaDEVGrPNLEgZRmMdDojU4ReqYZdEYgUQkh3eD1AYtc7gj4ihDrTM",
  "key13": "2Fe8GdQ2hDE67m8MQxYr4SdWJdTAccBvBbAkQ9dPsmMeKKr3iUYQ68L8oW9A7ofJHiSK7J21rB62mL48gD94XgpC",
  "key14": "5QgsZ7E22p6w2zxpwz4wf6sQPL1antT4cf7imLvvaR1WBbLGLwVZPim4qWtwRjrEX1SdgckwG5VJc91Rh4gywsbv",
  "key15": "5FyXtptYvDQDMxRJ6SQ5LEz9GtoXvHbPftmv4ByT3v7UqFBkJ6V88Lb3aWJ9vXWJvtWhWdz2oaUMiQXoXmT8D6es",
  "key16": "5NWtVVcDzhCSSgc3hmo9NwBi8G4naNcUWmCLEZvbSDmt1uU24CiTcRkibvPLfG2f5HNwvWZgzNtBbDopEK6nsv8a",
  "key17": "2XYnQvLFdJVvPqgXy7GvPpU1B7r425PTBWP2waUBJD8iqx5cX2cn37w4dFZsvXzdbrhxAyWsTo935hVsQZL6tvZN",
  "key18": "32ML9ZkvSPiZcFQwvUher6xy4Zsb3U98jmD3L8GnNh5QGRLxhKoLurhDSM7EcWaJdxb7hstFBKb4KtorydhZcfDJ",
  "key19": "4R2jHRbHxaNS9XZs82ZdwSeA7ireBronmNfDW4vde6ZB6DKeBSPLo8JWLcbZhivu6zNXxqyD2xbmapAita6aUTWS",
  "key20": "4kHeb949gKtu4uQqHcrAkNhCpdjpZkZ8Xek4JfC7eoGbjmah5bGXNqGJbhf7dX4BSxzb1zkL3qLB3gQcYhjeVj3t",
  "key21": "2GVLBitPAwtKHMeezvqffUrpKRhLvxv9GGqcDA1VDDVagGfAAdjfUDKsS4WpBbSY6NqoVnNuujDZEza3MBYJLyLU",
  "key22": "3PQ8y5C97EdeUUbiTX1z2F4ZNWADP6Kky6mM983PHPVJMZcnrXi6YipJTbbeyFiZstHPyRZtLj6X1AywwQ8uo1Ct",
  "key23": "2LfZQG5XfuU6zCiqBjaU5Ec3kD3TNCsw1dJ1iUatJmJkVj5cmJJXh35eG7bq2xsNcsrQh292h39ZJnbBEHDxB5VS",
  "key24": "3uNF3NFsTtJBBH2APGJCSHb5b1dDgqN3wsaGG5A2cNvqAFs8jnWwb8v3osQH4hc9QpyCnvTLCBNzcRVu6D5QJyJQ",
  "key25": "G9GZ1Sj8WJVMfqmeJ987f4Avs5jrE19tf65LkNcEu5T7TzZUdpEzXsXjqsZ2eE7u3wGDbxVfD2srCMHRhEeRuyB",
  "key26": "3sYugkRcUifgkW77cfANGei7geTC4WLAhkyagWXYwE9PMUyAtNneQToZBJy6sHKw8HULPZJd8bbth35k2jXYMu8B",
  "key27": "4oT2VYpq7BT3ZFsQWxgBsEcPsmnnQXDqexALr8QPfdoPswnTdjniZjV19FkBgLWAXF8o9gjanaujHbHVBqnWz88i",
  "key28": "2uiSU9sDb4vMVvoyBLRos1EewkareS1Sbq4Vwp7geqE8NxzxaiMv9n1ozCvLdaKaTYCScjzWAddt8smfSdSpokNK",
  "key29": "v7M3zvEX77cFFVMpsFLwK6hU9MqeAVUyCqQQuEQBk53rgKbTAMipq2Z4is4HJLPY8CKZGcse5pTQxVAPaKEr4N4",
  "key30": "437gALHSfZXn1848yvepbkhN92cf31QYzmt6L54qEzefYsBM85f7gYRsBcn4FDjSBSRJZmk8YuXetfpf2Qmz59nn",
  "key31": "4bknLUCVq8xZfKAhSonTfaePRjxrpeGPbrRfc5Uzo4MCJPKA4G7TW3R7BaP2Dzr4U9Lw7p2tzSY61RpdytuDuuYE",
  "key32": "4XDj2KEHpKE48Z9CChbirwYmM3HbYzgfwQyPJsta4VqpWSg5t2FSc4iVdpHAipPQ4PoKrKa9zksDSvT58JrUax69",
  "key33": "5efcg9WUeMQhy1W2BMbGLQ7AfZYNWPZLpw5xACQac2dZWpB8m5EjxDAR9gZWsgpf5ktTHesXNHHSYSazHBUVvs8",
  "key34": "2p7jnPM8n9zowTzAEgDQUWrRaSV4vwRF4eu5WRGgGbDFFBoEgjMbCGSrMskEo6XgCoLJeAuf9Ukc55TSRYDsuwpf",
  "key35": "3rytKHgEFQaM5HvKcPsSsuvbtjTjFSUrfvzDKyxPFrTrAuUMmomqA8dGqaSnUDVHhECrWyb9P1K2gx41SoyHS9N4",
  "key36": "2C8HFKVgwczcW777JxbSSahhhZpCyfj2W25FK6zS4f2LYDoHegYjx47Z6GVD6QzP8ntWbkLD6B7nboRsapQ7gPkv",
  "key37": "4ShdxLyjAfpmaH38fZxTBCyaPqViZn65nKtsSn4r9cjbTBunAueKMgHthg7swb2mfTuo4gVaQTVDtLpNUbNRo531",
  "key38": "4gpunujXazr1dWrfULq7tRww8botqVAdxNYn1oSXT1qBm3aeiqTL7aVPQt6AU7Ag1KaSuf4az7xq14nkZCGNfTGG",
  "key39": "3Yy5jdz9CbkqxRS6EWhm8XzgPEfygrLeUYANkzSQaWqUbEEUkgL6agaQ3tMmog9n6QjtyMwgmgS1tgPvXG2TQ7mn"
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
