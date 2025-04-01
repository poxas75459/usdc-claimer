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
    "2sqp3oWrQQ1S6qwmQkL56GVJk79aCwn9n8GAVcnNKGWsYTnRtLgu5jgJbjRBHJy37XP77HoTi5Afcq9PaNmqXdiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59VyoFfxhfXaDGtasGBkF4hVKH8iwxBLNqc7PD61DiHQS9cXmPJ4Kwqoi5t8QF56Sg2ZLZ2XFtAxURiYBwu4qxLP",
  "key1": "TuXVLMM9msU28kkAfCs85KHGKbpkWHXn1cj7CSeGoBKfn3d6YkrQ1RqFjDwZD4STCXAPVMhgK8kpjjVwsLcdMTJ",
  "key2": "5e4Jg8gos1iftzqFj9BAbNV8kzeftXzmqpwNTZ6hc48CzJ1t5sutcsxRAF7TdZJQDLzMvtpRRe3MSNQBZ3VHBagw",
  "key3": "5da6CEt8cTAMYQRuQ4nWNnEpujriaqX9jh7Ntcng7ZLA7ytW9hnH2qxJjp9vdDsb1eYTkMP6SffTEi6rK26iKGFw",
  "key4": "5QwhNnsFwWyrsDora5wwmj5n2QjA4M5uXeWPQ4sM6NAg8zeJ8HMY7Nf3asbF5Jddt6frKbfedC7whRwX5hN9J6Z6",
  "key5": "48Mf5kBdnfQ1yahknJ7arABGgYEezrKyLY4xjHxgGfNZtgcTsUW7VD6JqDFS8gzTp4xyKhs8XVKQMjuVAN261nRA",
  "key6": "2oQyej3y4N9bdxzGjUjZDpYXDsRSi559Gpwdzj6xvqzJtvauJc6BYWPZNgfutBDFsWysHnHQsK5n6W9RWJx1AKtR",
  "key7": "fxLrFSxqVJtfqNLnTgjaFxQfe8kosHusRcq4ziVDVMosXXgLvtFujhvBNjAnUmTsB9Z7QLQrqGxr13YbMtZVUHy",
  "key8": "ZcZ1Evu9eyyhu7uLezsMrPXoZnjezfjHnq65YgteeeYW3tQfvUgjLWR4NwNCnhJzV5XYYf4dLPA2kPM7wn8tzyU",
  "key9": "2uqyDAcDBaWwYFppQKD99zWax7tci3RzthsH5kuQ6JXEv9vHuPy5wuniEC4V7LpaKmWgDqayBxwGjbKb1zoQDVGx",
  "key10": "ZyxuRhjkbrCDGBAwzWWoXgGqtAK55fQZVY9d1M15igRZjD7RbhhCvNVhZYGSKMNBrvW37T6s5xHDhYz7hzZzhAB",
  "key11": "5krBEts5hSMZioXv54hgeaunWWBHjQCD7EGeYUNro575TsJFzn1Nymq4Un1KXTzArVPdJDEvahqSoQGvc3XXD6Zo",
  "key12": "5HPZWuU1DBu1fVS9SdeWeCzpXo4JGr5j2b13rc8he6Ewm5tBYXEyYyMpuF3U8KRk5XbCn7ii25PJuvfmS3LgPRDR",
  "key13": "4gUc4trS1M6LQPHuTyMG1zUM22ETuJm1zZBjwZFH1kMGdXCNpH2FYp2zpG3NyFWtCYNUj1hwHH2qC4h4gTtb14Rv",
  "key14": "3D12dkgASVM9p9CEXqSQxwts9kMiUNXPkqKj4YUwFF3wZ8TrVYNMSbd78sDGJTfhV1J7LpdXkCnWpBAyLjVYqxmm",
  "key15": "4Wsr3GLTzBbwbs213y54YkY5TPttHwSgqTd3RYPDJESWtEYs7D4zxjU5ALJvsQ2u4EQr2USMR8WyZ2piXLhk4qvW",
  "key16": "3kjDijuc55wvduhhBunjoQGHFLipAotCW8WqoqnLc848LW179E3RSpWEgJFF6pRjGEqqZGiPAqBp27HvPtV48o2B",
  "key17": "5Q8MWY6oa9bUHsvVkMjd6cxUZPSwtg9ZSLX5dz2sFzXEVoo8im5jycq1HBKPgCfQzYUMwAkYGqJ9eeB55U9d9QjV",
  "key18": "3UuoamuftGdEw1AbBoHv9bdRsnLTXmfSsxx5pFGxW6uuR7xWwFK264ETUYTcEt5MgmbvTxP7r9kKVRic7mmWciN1",
  "key19": "2ncRqgfGxdpsijKq8uEoduGWdNF3QQQJ65pDWNLxxsdj2fnu7FH5LPbbqhgAXDEMsUwbACr1TchuzoNhK1SSCSv8",
  "key20": "3PEe8ATYiWktyeF8Cbqt3hXiJzedfG5aRDmMJcezzZERWC4twvKMkeeAi4k1KuKkg8HmXBbTLUWGVwrp5dnogxkv",
  "key21": "4z9AVJuYQWe6SxA5joVR2VjCQQcVhZjf991uykKNmS9NgorKQHqxW58dcTqUecF7FCzy54dPdHEWz2Lm7UsMRyxV",
  "key22": "2GRukK613QWdeaXYvYTCUy1QDkaNnauYqknPfERVxUf2ms6U66opatqdaQGh3MzR8345fRZE9DEUahdoiNzswaFx",
  "key23": "ACXc4zx9GfVXcFcbYs9DYAxDnJJuFwuFmEp4MrcEULfFvnsuMVCf65QHGsuG3EFujvk5T6Nb8qxn6axXmsNZgqK",
  "key24": "N8MP5smUnGWR8zURrM47r8rVUYhwHwKASx4WCkoXPfYmHpW2kiYtCBz85kwkPWHUNRBwSAygMKy3zKLiPMycQkF",
  "key25": "3Zxrq6RhUBCCHbtzKWs8zJBZ1bEG8ryiTotQEkarbAyXx33VxwEnQWHCEpy7aG7p7arh1gW45xB176qS4u6DT1wo",
  "key26": "2VH3YXnNUn8j55QughDCria1PufENdoQyTinvS1eEH7MLB5ntPDaK7G6Wii6XSR64UKB4pNFoC8cZwvDzeaiKRZU"
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
