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
    "2sjTPLBbkCxdhuq9E7b8ZHeCBpskvHDuCfqErVPAaSpaLr92J36qVkp7EYe62i8TT7UW2MrT7xBBKU3ybRz8Cm6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tCjt78rx2fyvCpEqCMrv8W8YViyeJk7ezMN4YdM3PsfB82Lz1Yc4TuCugWSeWRpWRbLsyT6YijnduQumw8B2YJ",
  "key1": "2rx1QL8QXy4zirVxmed11hC3vqNqr1bAPUxsmeCmSA31i226mBB1ERNz5xe5j6gVuvLfxZCnbYVPaxsFrZRR3eA6",
  "key2": "5zuo2KWnheum5Usv1sPSLQdekxTfxZXsMEgLk6eRn5DQb8HsaQwkJdeZQthUiNVXLUimDtTXc5VCEqSxeEMcKLvd",
  "key3": "5jQDuZaH7GhDXE4htwUvn9PpE88gN1LJfSLeF9zxiw9rQx6wTyEUHVz3mapsUhgpMNMKuEeekmJjB4UtHxBGCqNb",
  "key4": "5g3HdXuVw6drdWps1ZkUWRddhNPFGnZu1PoJwUdgmdsr7Vbs4hikvM9X7GnBEvxWmsAcidauCF6NzpbBY6K4t8BB",
  "key5": "2LG7ooZZvYNtGbH3VuFUB8Y7VZhpk1QTqLbLnfTZDegR6V4Dwxsh2pmXs982MSCcReXew2x8PJjRVDBJTQbzwNAU",
  "key6": "3A8K8t2YSmNBmwvXbgnWFY8qTRBt74RP4FCZcuKPCnBGJ37x9zE7r93LA5D2ACdzKFqCPXdoKomwCg918F6idcmP",
  "key7": "RUduR4h8JsZCLBRQCpK39b4ij6Bygo33KztcR2AeB3T6xB2quPWqfqNnq6ZbQpNXPjwr3e3BpV6WyLJndB1s36c",
  "key8": "3rjx7fHLkbnE4j52sxSEwJSRSqisVFrz2Fax1bb644phoZaqJ4P5n91j5ofn2xoKuSjcw8RHv1y1JwqkgTumwGAY",
  "key9": "2RN8ZCNvTmbcxMnr3m3uznpEc6HeJv33U1LG7YZw5VarDXwAtPFZb1qJe8VMjrKZL2s37zmCSm5qnCLVFL3bZ4FR",
  "key10": "5QmBNy3997piPjoL8TMJrdYCde3LqBRHkYCR4XH7g98waoeifvuybaRfop2tcqaa9YyT3TjVSWrhZsjMqjF9MC5",
  "key11": "5jTPQNgC3j5L3eGBPDquSwooysk2cLP3frMDNT61fcuQKHJ36eZZRocDVdfRd92EKdSyyS36oHQf5VpmGdUP7o2f",
  "key12": "PkKFT17h33UnUfdfp5sdgFHk1HjmdNJy4f8GHZmM88ZsGtZNyNUpzQb6HNohSBHERneQoCWjqeRnui3EcKMQa1X",
  "key13": "52jwqwW51NBC2b7Fk9m3D7yfFs23vzX8yc4G77RZDprmftdJaULnU7Qgqc2VPdsefoTT28BXnfaKi6BzarQaoe1N",
  "key14": "31EaXzrpDrkjuU9SWaKqo2WjJmeoEhkTkv2DSre8odJVRgZ6dhz45re8jFsBcq2kPp9ZYp2FS3AfLbyaU2cgpovU",
  "key15": "2kYAzPZePstYcUPWHRibPFUQTfjnL5UddfieLAtofFcHRjQinNkA9RqWjhbKNxyb5kTpXrW1pwGNoxMv2vRkTggz",
  "key16": "58edwsCg2KeEfT6p5NPouF2Has6ugtZxb5u5dnPTcu1RcnZGNoWDyQwD36UxAhmtwGsKKbRetuQcRyCkbEh6NyDQ",
  "key17": "4dXza2vQnjs2hQKdKAHQiKSnv2DMduZ4aHoG3rdAYDAHWwqfKVE4uQMJxBSFtDmGVakm81NCLdWP92EYXwF3Seh4",
  "key18": "5pA1j1FmKmH6EJUv7SwN7L4yJpoAK5Zbaa2uXXV4ovKABrV39zPr4zDXWypGUQq2R1YahzdrjYxUXs7MXDAhvUGc",
  "key19": "3gUYCb9kCuSfSprnPF1fRqhKPRZDaKZ5eu6f82kcMQwcvuimxQ6rDPiotjnRvfBkrtwPNuATFHX9ucfunt1qg418",
  "key20": "47b5ghnqNhvzxoWYhSdybVwRTaMXcEUbFfPs6E7egckqcESnEgDp1FpiFtF1KkFSaTqcRt6rEzkYZjg5n6b8AuK",
  "key21": "yskoNcYxqqu3qiLn4D2nR6hN7V1iw3b3agp1u9KXZyvS3YDBHiwB9xRXMzZNZoQQQKJchUSEjuchXU9CJ58gVY2",
  "key22": "4C7oCuy35LZ3HTqXshxFqcV7CdE1MEpv8oJUje9uvsDHdvnhDdtHPAXw1Ny2rKUTopqvV6fmRhF9HGGDx2FkrUqQ",
  "key23": "4jmvtfj1dfpTerNuxbdniGGQMrzvMUYiHL6ApmLvBBGfxkcqTQMNzRTC2SA4UyRds3phCn3rgsVBtrkPCqNLguf9",
  "key24": "2aASciT68ypCKecHE6j746dwLQheNy6ydtgEUk2PvjdWau23ozN3CShkzwnhtUSMS6QV5feojf82vjGy5SA5bKRj",
  "key25": "5guLN87ipE4rjzsJT221FwotyG6Ux9KpVW8YTBYDNGT2yd8HnwaV3QkNXBTFAwWd3jGf22xHEzzzghHT31ag43Mt",
  "key26": "5RWrgZ7hPaMzvkUR33H2kSnKUTKEdxNGjSS5fsGsNs38vtJS8ZbiRUkXRnrXpwo5b2DnroXkhV3UKs8SfyaXskDm",
  "key27": "4fdpXxgqWQ5krdpDopwL4f6FHYFxVvrJiJdG4vFMP7bdnngscmnDS6Du4AciRzqp17wfyNZPGsQQqqXhvVSKrurC",
  "key28": "YVm4U2Lb81A5kD84mE7n13FXoAzAozJ9ZzQSqKFnpUpgigAPmNSSNoDgmKUT9N7f5Ka4X852vumR7q2p4b1TnCb",
  "key29": "5WJUVLsX2H3zzDB9yuHZ2MKVXQmZjWAvLepG77HapEFhkmn7wPbwLKk2ZjSg6XgrU895mLiP2CCPQK27drWQAe9g",
  "key30": "5V7odie1TAeRyFM2L26qsQ3wTuPqdY6QWjFzMaWVLc37mbde29sEdBgGksKRUQ85BKRhPWt7jjPXAgBB8SBT6AGF",
  "key31": "4HACywjy4GfwXUBswLqsfPU99hAsLv3xiLGJMB1eAogsUUnotkDbhuKQXDbMW1btmHm7XknJc5GBZ3FGUiwWGbiD"
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
