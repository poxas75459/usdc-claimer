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
    "2ZHpysDhc5k2m8Lqj3DmmC7M4ko54zeApYiDBo2uxpCUsBsfWBHhqoV2muMqXghJjvfvrKBZLYBUNp1rjhoPqySu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mu9uoAhuFoobcwj5nVQzhe9hTvVMEWKTCXbUDHND5hrdtNDDHrDZ9EpHm2bbqkv9ArhabNRp2UsEtNRFNecVZUT",
  "key1": "4nhEdsEKx2SCfZwbKuwrtK64fH52wN3rA9FL3imncqjD6TojjkDpeDZEdzEtWUQbXSG7TQZbrpMxCkqxWkd51qAB",
  "key2": "3kqXWQyqjC4SLWyqrVG3kG3KbxEH2HMVCSmrJcX1XQtwYGTRKNirR8VBTHdorsdXq4yWYFKDfPLyV48y5k3bpCN3",
  "key3": "5JVEjDQH11jyyNu7CKAjxLspx9eWGMJRFfNnJnL7REkHZNjfbt8Wxj8fCjreZwmHx78bngJzuf8i8qhyQaEFPAST",
  "key4": "Ak9EcEknr998b1Jz3TEKjcFoF6nRjnRVYbtFc54Y3kxCMcujGX3z4NKttEmT1NRpjEfSVe3PJSeXemvhZn3ctkg",
  "key5": "4WhpZdYCFW35beRbEqfKyX5uhNHVExkLxGE5i7FcwV8U2BGspehtFBz66iwZ4iqbFTjSXHvWNa3jcPiwwSq8MZZw",
  "key6": "BBK7ExmhQtTtf1vZQd1cqZXDT6v5buKe7tcW7LFmUU6FKR7ueCcjECERinPHeHPgyLJpDmHmCCK7hAi9bHLaNz9",
  "key7": "2J4Sj4FK9GLTBVwyoDaDDAD3MJKYAVJdDhYsdZfHJAmgmXiDnAKdBRNbXCgK7nibFrY3N78B44RgaUGADzwaV3DM",
  "key8": "4dH1mF75heMiehRyeEq3TCjdthbMhwsqDYnYRsp4dCSkSNdkkPbopLj89rPeEeTrva1xTAzcpepZcADTLSKCu1tb",
  "key9": "3wXA7uSdZMng3qVXJUGRa5Qam2m9pEMTE75MRwdneNy4PhAgMn4seSrNWr34Jc7vPKFA6pt1KhoqYYwqQ2beAFYb",
  "key10": "5AcfjnBiHzuEdUMsz2J3XpapBJxEp1y4cDx2YzXDc1ED1HH3vzRM98xZG1j8iVsdyjQKbGqiUB4Zt53eEu8MZj9v",
  "key11": "mnGzjQKQUmTj66NDDwtVSxzKC5AnzWeCh73rPLbu9TMsowGueSsyPcPSUiJigdjiihvn3QV9ai9sVHPZz829Kwr",
  "key12": "4KQYutrSJZ852ZcKDmT2VX978FA5zpd6V6mdiG2FR5ve3EoYPDTZuvHPLx4y2otcBZF5uRGDsWDD34ZMfR6KsYAh",
  "key13": "5AgFZbdEiGzRVYHjW8WK5mVzRG1x94XncKtts8birN6VGMkR4sPHFdq4C6DaAtZ7V4jHPryfszMM5Az36W9KPiHS",
  "key14": "2jkvXuT6kbUzGq4JG1nMSPpsBYEYyFfffcZsW42mmLy1BVrkoRF4ZH4R5qwwjU9VWVVTf9HeEEwZXv85nTRQqbnC",
  "key15": "dgtaciPbbZ2FT4yCgmvR9kdG5hZnZdruVpGQy8dLG1vbKbzYoyejpw2aCeKdNiofyK3zb6HUBecZHAgdfKYWoU8",
  "key16": "4f1nHv9cryJ8UXb8vgdZ4N9FaJwZfqez1UtZJCASB17gWeg2siDDQA2ATAtTForCyWeAakxJx6bQfoyEB7vvnkw1",
  "key17": "3vUGhBTmn9Ez2zdPJR2rtBLrSCknJvvNJB8xvPiTP3pKD2xWW6n6jWFeTCozXBVUKDpnZ8ofJD9i3vaEUQGN7khp",
  "key18": "2NtUhBBfCvg8nBuCevHtFKhFzCREaMkktF6MQFih9HxH4pwfmpRUQQS4bMszgvbPam5bBDSGtiiLgYicVfyZdsBa",
  "key19": "3pWSMiTV2nfTz8bMXTmeaN2gMSjwCVUVgHm7tD6hPQovK1TEozMatV2g1Wm2ay2geb36E2YaJJTm22xbWwVDi4Fw",
  "key20": "2wMW75ces2mjEdy39NgMBZX6qCT164TcjfEU4n3o7mVrnuHRbS6PJWtbPVL6CJJcJNdSodBR5No52VqmCS3C9G2H",
  "key21": "5LjtimocFuSL741t5okKyZK7hep9RtA9Zvn5TcWg7RETE9KCygyojRg26M24AFvxq9MNJEzLWnxtnwFE6x7XaXMx",
  "key22": "2Gvsvgt7t39A4uVBTDLoawvsXcysjmSfNW4GZE4zH9f6J59NKbksSNbpqeHEBi7oWKybqrvJDneuxeNfJQ5RsT8A",
  "key23": "2CjvRciJKsmRQn61CvmyetVPiexRVNpEYoZX31fYkHuKGkUamoeMUWoVZSWWNYrwo8Hr1fmJgc7aRsDLPx7RJrba",
  "key24": "2ENQLwKXbzVWgbTpZp7Jtp7we1DSTnfnWdX8wrksnyv7kj7Y3SEHgdRS39YvF5XxqVcejjqfK4k2iACwBWGCSC7j",
  "key25": "4gdMmhC6xA7zx78VB6fvpdbBSEQFKD2MaF2ydkdN1Vw3MyJjFheHxPhqDukdDoPYTNCGGUVgYMNMb3X5NabASg5x",
  "key26": "4KLXFAG6jXDyhxkkb9u1oBgbskCpSPz5pnuxnpLyNdcPhtgnJAQUDRKVYZVVrffPnzQPbidkgMDjpy14LkxXxWug",
  "key27": "5iSpMLX4EfNCqQoHyoio34dLAsXj59GXdNLegSJGnHLZLfdqhACYNXj8M3VqsNRBm6r5FFEh3p1fmZRkvT4Jas4M",
  "key28": "3Hy9xFd7PMp35jvgRQNcXH1KGycBVpA7ziaLkC7vft5mPGyYocY9jDT3szr6vyUuh588cJnAH4RqT1YnJztL9oan",
  "key29": "oezzUjt3sa426dDkPgqYEaR31ySHsYGAxnuK4Krw3N5AtQ6os4F91RwYNhHCap9SkCDRVmxZwP6p8mkVMdBVvGM",
  "key30": "4r6acXEPALCMaCP6YKBorDwj7ZpnCxxAgH7nzpnWvLvnffbYEvtYe19apY6vpM5u1ZHeUJDtpdoAz7i5CfYShoJu",
  "key31": "7iqa3S6zNykdMdkTJJxYnMzAfHUgnbWbTm6Cxk7A8nmxW2RY6mpbuofsNryuFezi6nLzmjmrAhYP2RNAicfvRw4",
  "key32": "5kJ6n7qN3No98A595CPz9xJo6gjmFtXw3K45QbXVRfbt82nQCXK3uy6Jw1LuFN2djRp8PqM3R3252NfSJ4t1KjuH",
  "key33": "5MB8Vg7tyHfhb6H4nQQqxbwscHMry77h3Ggom7nWfir518NBpurGZEkcEGH27iFhxd1V2BLJReQJAqTJFqwARH9U"
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
