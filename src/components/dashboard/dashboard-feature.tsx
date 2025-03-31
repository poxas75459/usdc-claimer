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
    "n4kzRJvMTcsjHtCsfQMhhiPtcrjGipeXe9P4r3zXdkAWC7Mtj7D5QPEQx9ipf4XcNynNN6V75wZjdyRAKy4xgwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RLMy6T8GoRSauq3BKEeqs5tfjFrCFVwa4RZUwPujmAJS1t3SV4FRF836KEKJff5whqprjEQhMBQACgnExgX3mhA",
  "key1": "LC2BgH5vgwRj6aDoU6faprrNqKWJccyV4QmoU3pJoKxKHLveFg6P6uVHBkZd7z8WEHmuAmbK8Kx3sPEFrWtQesN",
  "key2": "HnVBLtyXd1oKcKrXHckR1Cbt1UeNPczvb6RWovV5SPVVWFwRPb1jTRvHi4dJGJJaRyqzwsbCyAs73vGSaLLGc4F",
  "key3": "3vzwwaD4Wu3KSa8uF8MnRKKWJcaPmY3drX7F5mvteEeZke8PkWS4GgSX1iNQnnSqSFQqw8dgzBfkEgJHxj88C1tL",
  "key4": "36SDePESGbsAQnq4GK3vjCaUc87aXPhhy2aocCuE5MP8Ak2sjn2KPWj7SPFcT5jALhupSQMoTvf2Jj4SgbvRJzAA",
  "key5": "5ggFjuJzRXAUzhtG8qkQTZqSRfyz68r56nKt4RESMn2KS6BTEobDmEb1TMwLakMmnGJgZzu2KxkPGrHgLQXKardK",
  "key6": "4S81njDyqB7Xy34GhzLfsB6as5h8PT7GtGJwDaRTheDeLnypMQMpn7o6uaDaU6ChrZ48bFyYmjMS5A6Ks8DgHrqY",
  "key7": "3mPm7wNkMEX51kCor8A8pAMAZo5szqwRudEajvL4UmRaJAVPUEXCUES6AAthtEc3UVxKb95pxjv8oc65eg4GkjTZ",
  "key8": "5DFEyerNSdHbEbhsT1JJtPqhfwzJa5xdYKFu3EjfY2L8DwFAJLxHugzwHn152Qh7iPgLsZPNhqLWsE5n5F24GV7A",
  "key9": "5qZgcck9376YEaSdQ23r5vCw5WYoPX7syLNnVc55naEJsaimsvhqBRCFAYrmKNQAFW1TDXt5FfjX5dNygujbGtsK",
  "key10": "2HcENDKKoEuJgPquRRrZ4KhL2LyH3od8dLnoAGXoUf6oE1qWfYmSuA4KasXW8bmXGFS4te1BH2siPqet6D8ay69a",
  "key11": "5LjbhCATJRaD8WXBwE2uoLgLBCvfRFqvbnMU9e3F9jXuxchFhujojWAKzYEjorb2gXqdy1sCigMptwq2XvCqGLdS",
  "key12": "4ezNtpGgqu6HtehwcZKoKQwJmyZN4FrGo9sEA7zBNCE2kjbTLCkYNDz6XE2cVLZzc8njsKzrNiMZR1kgg6AwX2mD",
  "key13": "2CtGzopEvVrBN8DXvTwtyAU1U5YGG5Jb7VbJzWvYBEXBYvwCeY5aL1Rj1dt9QFGbW19rC6i63CghAnUmtSZn2UAp",
  "key14": "5hpjjwKnGhDEbFG9nfyMYUGJY1BXioNfmpRXFbaYZYN1guW5LX4ix2nPXyy6cwFDmve5RvQNUtM4azJk874FHgfK",
  "key15": "uUpvX7Xkd9rH4iFQoPYoYrCnTLSFCa1Q497eiwsVYc5mYP5Us1ETp4RmJgzkEELxDnowa8gMZ5yKRpXGCSqw313",
  "key16": "2Eg3auphxwYVdey87w3A4LfJ6eofRaHFb8DMtX96Qnkv8ECcB2wnCjVRLzEwwaLwtRScDN22GdhXS3WvNf3g59Gw",
  "key17": "4ZHiCRZ5nXZDQWQjmKDpshx5MgRLvhayFjN5pEiD2J83jyogsLSt3oiYiZmFNF2JP6Wi4GBs9UNZfSq72eaPdBgC",
  "key18": "5uD8iheRKZs6nEDrAepscnA9f4XStoUwidQUkTP7goLqLRzha21ii4ws6bqfr8JdiiZwNitCxsZetR386K1ixzrh",
  "key19": "rVnfRANehhxSKL7F4Ex8e8DwvojHcDfvKTme8uvQ7FDLvkgVgHJZxZhs6eKd7khQ8fJN13VhjiUnrUujg8UEhfa",
  "key20": "4JT3CPkbrSzE6NKcq6iAosEFZKqD1FAeyK1PNUta2x7Y86h8iPQ1SBM1yCy2TruUYprFaZvzW7ViWfbkTXvSpNuL",
  "key21": "4vCy2ZvUGNdV3ATntkA9489vrkED1T1deoFRpxggZiTU98xBNM8Cw1Z1PJvznM6f65kD6oBAvTgd7aqtFuLeuiP3",
  "key22": "5waveHGzaSMC6cgkKof2Pe9QauptcCL9u8Agn41hqwzafT1ZVweg3g352d8rS63FnEDVVLfKRecJgARCumTbCGNw",
  "key23": "4sh8Gh7Zc3sEBG4fyQjYv87SetwT5zJE5Mgdyrh7QUsfERDR9jwRnohWNAKMZY7BwPG4CNQc2By4o2uCxEHye5cz",
  "key24": "qsikqYGuCne8kcj1qbnRbr5FnNPWscYL9ZY9raRmeU6f2x2FcmTtTDUf2SnMu43puMe6cZTUemvTBScVriHZua4",
  "key25": "5KpNHiErFnriLH1hV21MqzdQ1ULdEzQ5QJTcQ6MLRjvUHwvEGNJYbBFCEXFz2BDWxh2sGKk73RHRs4paYwG9ZdMu",
  "key26": "3K7vriYXAxaY1W3fPw77fD9rRhtCeG7n1LPZQ2Ya5y4sVMXECTkgCgAPHK9ADRkw1AEBaAeAxTHSn5xVCzZuVWxb",
  "key27": "3kLShxgGtdbkfv3oZLLWMoUZ7TUJQNWuME7Euo8hfrvmkqdEB5criY6wptTQSiBYDqt5oWJDf8epeiDdwkn6Rrws",
  "key28": "NVukqmGgbAUinKL5VwbvyAze5UBKxL2MofARp3EpHGdT7FVqrFktfMhft7wEccupNHuoU6Y6NVTwHtU3kY3mvFu",
  "key29": "99NDJmG8wdvKDQjMiYTRtQPGPnLNmtbKhXuZf5C6ZevDFjMUzccBQx2YeSQU5oP1i6y9wrmNSQxmmfpwb5TgXm8",
  "key30": "qsmMGaRNLc8dyxox2eh6rFiWLwPFRMEEzPCn8AinYzxYypE1ibLH78TQnXneW8oSzBMs85oUMU4pwEHgQtpgdYS",
  "key31": "3k1Vzw298vi2vCgsje2N8AgCrD6YAH3ZyynKTFFQPKbMX2ESR9GD7XbP3kdwAFnJq8roJG9SR243y96ff9obPtgp",
  "key32": "Kye1CFcDA2ZoBxcARPWkMrfb8gFdVkTfnjHb5fRCE2NyszaDr4JiVwKZbuoE77GbSVdhyyt8tL4matYXwKKDpVS",
  "key33": "3ciHpX7MdzEi5ubE9EXBjzwoWVcqDPdf8yngv9X9Z8gXpvLu4w2hddJtTZCCQZKNi1V1mRdorVNzh27aoM5vb7pH",
  "key34": "3gGruFiYxHgZFNUz5rW2EaSf4oR53Gkd3EdTcbWxuWi989gfFiSnaKj2SnrUq3AtnaavkUrvyNw5o75PKdLJAizV",
  "key35": "kiy7w2HG3bV3Ff8rc7CJNzTZ9L1ouyuYnh935nXy9hKEi6BPUy8fB5XfCmUfa5T4hjQWNxaMeztenSrNg1KA97N",
  "key36": "5AHhF9w8aD8p5ghY61vRkqXmvWk7pT2XFad4jf1KWU2chnK1FjKsKBa1U31crCvDnXqUvxF4BxcSfbnXCbdZoz6p",
  "key37": "28U1NNpE7Cwgy7QjjwUSk3bbjeH4qmcUpMvg2JNapJWGMNhMH58mgpj11heEDS3efnpgA4GDwktb4jMCRyEvUd3E",
  "key38": "3ER18jHN1sqDXJv6Xja4TqSBUjDiHTnK2LHi8JE1GREJeKSxWwRXa4WywA1ZwwPzHqtvNvUd9UM5tbLh86VGM71",
  "key39": "5CmEVQeHwo8DBrynnb7cFMe6UANw9YyKK1gzJHRkTNKJHE9LeuGyifQ8fTETi4PuKxDjPVoHQVvhzDc6twRbsvD9",
  "key40": "BqMw7924TG3Pw68JxfBsnJ7Zeeq2u83q5SBz9NyAZktrUKZzVjrLCU2p1ecjv1TxDQUz9emVkCDpSP5thp3GJ8H",
  "key41": "Rm2PGj2RtVrAVdNiFEEVk8QodNHLouWkA86kkWxLosSSUH3poNceCzNYmG5e3FYj5dXjZCdkejtV79YCfMQAhPg",
  "key42": "CTtLwEuJnbu9DXxu3bx1hq3aVKH1qPESorykwHEvWczR66hUE61ksd76C5xzd8Te4GKWFY9cM4nHKH7ZQN5zX8B",
  "key43": "3ZX1CoHt6iGYfCGL9hzW2oSjuy9we73gaUADRpE6aSUiiaDav87Xocg2aNiE85fSKEgBGywVQWkYpfju6MQbFUgo"
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
