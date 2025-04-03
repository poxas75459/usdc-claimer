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
    "36AHZ7DACmZk7u88wik8mX8W9PrpgU5qukRpwayhNKBQDcoV6tq8CVF34T4BSnTaBviYaNWGpffHpBiC8D8Eko42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4taEG67VJhuTsdrMgBYMn5pwP3LCMRwYPKtsD6o7LmeDg7fnc2iCTuUapN89muTG6SDa8qnjiKkJZQtR5FsEa1WG",
  "key1": "5CKAn2w8MxHFMxpKJac6dYCAfd6HocazzdYJmyq6gnpuNnDeMMJZjkfKSDCj41KZoMkjcRTTVnoVYPy58rjejoVk",
  "key2": "49edspojwXMFNeKchjf57tvteD2um7kdeYB39mVgKNQNcQDk7eQn4Uz66M9YhuYMLS7vz3Q6aauZ2aFZwBqZtzxC",
  "key3": "5mGXz82xNxqT93QSQYauc6DPs7ZPD6CtDmrCGxHSUPhSVzPDDkvVXA5ZJb5kdXrQB9eAzQb3uACUHLZzsL8v4cuH",
  "key4": "4iQKz3pi2EprwJLce8EXXBV65FVKD9RsVvFYkFeMwdYWuFEco6o5RSoCdFCdXhxNyPQoMgfb12HEEQKumPc8C6Mi",
  "key5": "3JarTs8fBXQo8bzrSmWFzuxHYhEiavGPTBcGouFijgqMyJxRB5JM6cm9wtGKppitZJXMr34FsTKFQQ7R52mfChe9",
  "key6": "2HX39DMz1kAmXUCYBbY5fy12WhmL4MUS7wnNnVhdxvTVDb47qDXXTYfENgyPFsNeqg5U4HHanSmWyJ7c4ixiYUb5",
  "key7": "5t7XXoHZeko5n1Mi6MoT1dYLB6V3Cuzh3SHVMQjkX11EkK1hZtaHAtsbUWve5rCGcYZGvmKwL7HwqZwzKJN9URAz",
  "key8": "51htAS25JDKufCW7xyEeCG5b2bvzgwmsJ6t2aSSJJA3m7aK2JT9Tqoa6FvodiSyFRkWFa5gewW5aBoKsyUikLtR5",
  "key9": "vvueGgKNF1XqQU8f2xsoH5Vwj4K7H669BtbHMRBgdLBoNBHF9nCvimgpqenZnjTDJihmryRzhyx6V5yKSDRAdmK",
  "key10": "2NNNc9pzPHwhqa13okZ32aBTJk34Ap2PgMekqRBHdoqGSuFTSWfYWJrG2ynum2PzNMAgrxkVK38fwgSswt32raAE",
  "key11": "4wRsy9usvzTw4GjNdCnpuxMdHnvTDv5MH6uwrbnLL99ZEc1AgMgfkFb7NwUtTZfy5r5si22yPfHrrSHP38DQADwc",
  "key12": "5nTpKJ1BFMjo3ginenQnFSPTwWVnSsAa7PSfZCVBvfWqJG6DMNMzvieCVf82JixFsX2PcJtVaHoUh339Q6XncQ4G",
  "key13": "xvojjsj56kNdfUeNXPki7Y5SXNYD8wTDu1ReAXK8nCa5U76oC5Ni9jM2i5G7pfhxSXimj1poZQHNSdV6zKWH6pr",
  "key14": "63ChT2iP6VQYzWfhrob6VYiSug8KmuUXLWb1yVUNy4TSEoRJVvJkmUyBqq3fCLCM4v6KZGJnhvGebaw9K9B7yZgh",
  "key15": "4j2Yi3xRGfY722621F3Zf3TG3XBMNm8fNy3GH1JGunMe913Y7cS8SXe8fostdFQqMy6sLB6vMzraDw29JL4J5iTK",
  "key16": "7vNrRbJLiSCGS2CH94UWmzgLNKeCoMoKRYYybRiGaJjaeWBV4NK6q9NxzWqfpNEL1BzSdfBoEftCBzkuKYwfJCK",
  "key17": "4K2xneHq4PwMaUoMRnk9f5vgdNGJd9gHVhSmaywXtPgU95zZtV2XfqTy64A18pTaXVTnbRDfQPvn7yQibr5Xah7a",
  "key18": "5BiXjYH4h7fbdYkQbPnERaitB5d2eyjBdUnraQBbL4agNbrNgqKx1tdnfD1FmgCFRm5ycwS1JDNQofWo8FPocS3t",
  "key19": "4gCm3pX4M784fi2MvpRwUXT2S1Eu8o47ii7T7BkSTpokQZevSAx9nUy2ioa7J2xchgT9yN5JnpqCnjSGBy9EtRZN",
  "key20": "3tNdrqapX2MJ55k51ipgZTWDyxCFSxzWrfbsLYdWn3x326Y4zj8JT6Fz1q9o6ALu6KaGncRfkBLMFyQ3MDcQtEp8",
  "key21": "SmUTUxCGPwNs3gqyTnMTgKjwd9osEAMtMJRDA9RFNWEJAxsPdfCv4VaRh8pb1YcRfZS14bjbCVa3KESMoP4ajV5",
  "key22": "2E9nQAtQsrHZ6qcLWdyDtdzeeCjhampxinfVeNLjaMNfGG1cAAjTZNFMg8bkx3UGDdRupgGKryKD5y5Uzm7jVzzv",
  "key23": "3wxPxF174PzoV1jLB737krkPSkX3AbT9BhEE4gqs8h3PChSu8xafQvFfjb4dZtPSUJgKuDE52HW8aEcZN4kzyLQ6",
  "key24": "5X2pqXrBKiBirPtDmdYHkJREynynqyjgcJiS94xNQpz5cs59jiVEa1PRnCifX4nUdpEFWUApFD6oFp8NSLmq4kA7",
  "key25": "2ug8oEUvPrPDx6ZMAmKHV9mKv6WuzY2fsKtU7NJtVkw3gvPwt4y5U43AZhH4ZFY68DCj1dKwvTxt1rDnj2gPQ5pF",
  "key26": "3rzu9qghq2eo1eaFXq8AvNwhEzCsVSMc19zaSgLN3Mz22LecuCigTYYQKPfgC1ugknddSKDA5FWruTkDUs5PdxZt",
  "key27": "4LVNuTxEDcrRiUwJVaKxSKJWFB7eFbeHZfkHmEfSwcxJGLeGGhhLU6EEmkHVup4afNG6iGFUn27Uj7262VHWyVH7",
  "key28": "3RV4PKe6yPVNwYJDsavcySiaSJ4htbocT2KffRvmLdnMdStyYiqXWe412wBbdp6P22ncrQp22FFMJNp48RjD1HyV",
  "key29": "519YBmTjpJe4mfSekBDYqL41ahRy1gKqHDge11F7nuJncGqM9AXvzP2xETcvAUJQ6q6g6ixnxNB7mXKmVfMbHLw3",
  "key30": "3sdn9g3DR1G3KCbKi9eg5owSr3ceZUB2tw9nhPfoGYRqxeTqWATDtrkjBVY41q5hCUSSbfGkhj9uR37fxBnrQFjW",
  "key31": "39VMrEsc4tW66uLy7S2zd3Y95zMrijRp4h35p5kgEecWoRaZ1MsZrFKBPs6hEz4dZ4HreUH2QKrbBJ9QSQj7mQdz",
  "key32": "jF4jVzUgQQLt8XnAZMhwbEuzzqEX6uchR4pNfWVmGQAPncd3BM3XUkBekHCfXZ53SKzMi25jawtsHrEFpB5M5tp",
  "key33": "2Tg47kfBNY49P95TdDWx2SBMkfBL59pKiXFyt2XARWQAKrFn58j4FY7cMpm1vZQ53TkUvo3VTgiQfUvHKJz1gtp1",
  "key34": "2NQks7ZC3Kt3p9VNhNV7Xwb9YcN5x2csm1QXwwmZUT17nJHK9A8Zxh11e8y8bEh9jt8Rb5axdyDakcofSi2xBbtW",
  "key35": "umeTUgRAqTavcDzLEmmivFQCN9xhN5QC4FHM4z3bq7i5ErqdZmEFrZbig7iJhvQK736WFtXDQrhFXBAy3BT363x"
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
