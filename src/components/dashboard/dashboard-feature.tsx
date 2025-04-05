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
    "5n21bkKo1TY6AHwgAWNVMBMLq2wBGpxPsimNdAyj7fJRrS4guxR7zcra3CKzefucwVFxJetnxn5h5F5fwuvdZhnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kV19uwQHJRvxg1TNgeojBakzZSg4xTVsWQoy4q4iF8wNDJv7jnRtd88vvDDwQY1fGWE6ZDo7gJgzaNZdgGVPLzr",
  "key1": "4dU6F48gfnGApkjKyaziJjEG9nGLJcDJSr4jGoTFCzQEgYDxNKNzWR5VoWxQZXyk2qTRzkoMH8EmQnpGcbT734gD",
  "key2": "EGFjYidvKrNCgMkMve2C34FodGFANns1rfxrerZ3MDJ2v79cbneBGh26ZbcKgAsHHpwpmc5jKPAzZXzHQYToiLo",
  "key3": "54HM94chBVsWtdHmUDHqFyceM1izwtP5LHJNQcWwcG44mGq3sEtZR9xT7ZHs4hhLw94M6RDEXMN7kKzeQTjwbK72",
  "key4": "4wZokYjDGrZ6otxdzaAhnNetqskW3XVTEijVjrjXBKujuchrCL8YdKKi5ZrYVjhuj45aBrmJAzwsSz9YXfkCdzQF",
  "key5": "2idPSiwChEdkBbGwGuiVqdKKD7Xp9QyFtvoRE15sS2proBmetkARoPMLcn4EAw1i2AvLp6M6fP3DUGgBjP36heZw",
  "key6": "3mcZSzfN8ALtJFGsiu6f9KZpJWJary6B3c1sUaj88zg9Wwfnnrz7N6VyGoaMphpFazhHMQGqa83V1REAwwFjU4Bn",
  "key7": "4gB6bivGQZESnmd13fDR22LhCzYk89qQa2QCRLGiXZqdFZLAJftvbHpUNJD3NnK2Uxd7GXyGY6e8dd26Ld7F6Z64",
  "key8": "3Ht3tgcHtoRTpZvGqQx7vtotYkVm7hcosVhfdwRLicrGeCAsVjycbPxc2bdTafDjtxjAcbWRmsSzduDyuiGvpMj1",
  "key9": "jYY3EfXL5Z5kTJ1YRgNk28mzxntsQG4zVA4sJBWJYZhuRefXa3zCzF95eBdXQzuAFhpyCQvsdUKC3sYT2QY365H",
  "key10": "k1gLdsMpP5eUT3CZeZNf5uJdqwh6nqSrxuXyEuTTXSYuXbxQCHX4okMpu98VisAhMej7WpmTuAKi9KVd3NB4Dr9",
  "key11": "5hKvJyfqESdxWD9TiKu8AwbRnd3jzhmefZ8CfYsQ4aJAbkgjbpfEXL5dsvGmgp31ukWL93JMeTWU9qbspbhvPthQ",
  "key12": "qMH2HGeJA2HQvXjzfLZJjJSjikVJ94SPt8RJ4mYjqocgYNxPryy4KehYBfKeEhQLcQMpySvgYCtKhRvTcoRFbcs",
  "key13": "53M1rcA2pYdLV7p84pQq984hdR6MvQioWCGNi27hnm4FV4J5WiLjSbcF4k2LsEzJ4wXjk4SY3fWnGNN95saChs5B",
  "key14": "3DfUWmVnYpg7BL2zXTbFoda5iwCs211aTsSyFhdYnQjx69KzbHrnqXm1aE27CiZ7VdWMWJHjSjFhZQKMCyMC2ts8",
  "key15": "5vppJUxcNgh36PSqLqBZ4pkm34pmJVrtFipAuSDevZdNa86uKPKEx9VtCreuJP15SfLaKBTaQqphUAPQsZYb1NPR",
  "key16": "37vUFBHZH4XSEvMH2b87esdh3io67YKUtehq6Y1e9ink4TH2etKcqUZBwCY2DkDbczJAUy7y8URdCwbnVoQupXHt",
  "key17": "t23uy47tpwELiFDM26k5suYye5cKTXA6dhvdD6aeS96kmdxvcXA57iqZniw3vKABnkTaYwDGQbRw2vBF2V691rX",
  "key18": "2Q72AfhvKGvtmr8fvu4s7FXNEcPqnhd4wj94pc9JXzbQCvL8ZTPZxKD5rUp81xgQXJhKpuG3DExgGgedm24xaGR2",
  "key19": "4ix73D1CYpXaFyCDeR8CWgeUe6aqzLyWweJFbcti3Jmmj2Se5rkV9nVRQL3WHNWZSaJ6nc8H7t78LNGjGJKLQ5Vq",
  "key20": "4YNtJhkgKKM9puBSACFSogUzan1xTJadYyse5qq8ppMV4CsKX8ubLAE1CyxsR1xF2Powrr3Esb5Deia52EGjAifK",
  "key21": "5C6U38gDVVAJWQecnCeZaL1dJKVLZVtWmr6riAq7gwyUi1mqM8NapgodKgLvqzrvctGTxLeNxY6CHaqw9xp2bSpb",
  "key22": "P138nSjkw991KRcKbzVbATWorSbP8KXMvVe5AUj5bAsT57da6soDieDpNx3CoMror9LW5VE4SsazrKxJWn5D95a",
  "key23": "5g1nG1GCEts3nUSt3C4AS4d1oNosKitQpD9dTtL5wYqyKux9JkjQoQ5WfM2NSEQLc5c2ZqcpjvgKLx2fyAz8QMvo",
  "key24": "Wz5nMGGhwJkffAw9SpC69neogQaiRU4CYpB2t9qe1M8N47YYAVEDKQywE3N6g6UqCmrpkDTB6P6yW5zP7SkjEKY",
  "key25": "4ALiBP7yi2NtQ7XfsAKxnhkJ4Lwv8ggBRACnKmy8zwNW7nWMN8XRu3TxxPvFQcTwCERBQ3iCUdFofaTi3qHFJfjg",
  "key26": "2GnKNY7b1ZjKuHb8ESUjVGNRNEudnEUdAnswHhcAV3cwpppdCHwBWSSMoGEbZaBS9kzdzBGhrSBopeHN84yyZ46w",
  "key27": "kCWfNiN96ttYkFEGeP7YWjwEyLw722p1UbvJ35U3Y2dk5yG5TTSYJXgyavAqAXxiRuVUY8ff1gQtvvyLxuLy21d",
  "key28": "4n3XB53jaQXR4gXuZYAkGSkAoBBH9bDT9LN1r2n3zE7kAdtJwGrwPpsEe8WqfZFeSdf6Fr8RHwRxkCNPzSUJGsYG",
  "key29": "5sMAxRDnYDHYZENSGNb6FzVmbpZy7M2i7enDaH5eTEyyJw6QQrmFb89kH6TVX2v61E2n2p5bCLzPoEkW3SVDJmfi",
  "key30": "4PpXLC4w3tB2osxvyRHXYRFScHNaWrkr5TGGnpWALWRjpdskqxZ3zZQBJNKyK7NF4w7hCjnEtq44yJDDaoVJFwuf",
  "key31": "rUUz1H1d5tJ8GNRWcdSw6Yr8ymzkMXyhRQMBdwxcMrAqpMWFc2xZXXSj8vq7pDVGMYByZ8Cwo8hMR2j5Qsg9QY8",
  "key32": "4DkrmhFa8MhbgvFAwKBLwyNqZJxKiu1g4mbPnfDKL6gVQW7dHmhY3xXBkAVCsHMf9TWj8scytSUmJgvQVozjFVPa",
  "key33": "4YN4xCzDKYm3K3GmsPiofyGj5XvxdbRSvgxZri6A5hFBqJw9k3gzt3AGR4GzJMsYR4dPHnBuDZM4ywJV4y2dyV3o",
  "key34": "4coLZW3U2GKGvn5WVJE6YqQAigiqu2VsKXtW3ev2xNjNCJvYy3kSRZQ2VNHS8VTd1xy4dXmuYvmXTQMVtfUSTwpE",
  "key35": "5aQLSowwtojMgnMffzEMg1vPVA8tcgZTB6axr6xr4RQU2ATffaPBTvhCyNcfsaoKfn29VDLN7ZMvTKPnrJCtAGC",
  "key36": "2CXCLJS8YPZEgRwJfg5d5G555hPW6Uk31fk92xj4cy5ufQHEVZW79rKWc2Yz6dicANpy2d1RpHHi3v6h6odgevzQ"
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
