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
    "3JHYGNxyD54i1GaRFseHGcmWTai1sqL1zrCib1vYg2W7mX5D8RyrsjLYPiE5gqVkicPm2t256eJLqpJp9F6KRg2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LDDFYatoUDPs9p118rYRvU9j5z4H2gtMUcrvMmm7bUb88EscDcEXivK8MyvqfYYMK6Zo1rxpZQHWAx1QeC4mXtP",
  "key1": "5zxayFLikvhZ7QXKhtfpBo68V1EX39Y6CSxc2cFgq2cs8WKKRymw6DejiyJVKrQnSKBR6cQMdAkMkC5MFeAViNGf",
  "key2": "5hzn7WTtq2uudB9aY1zXRPZE5rGoMBZdWyeioERFwaiPdwFXZpHf18CA2uyF9rZ3ALosxgvuPyAdUa4JeGAAYk4a",
  "key3": "4hPC2JptVSkZCimwXzAAAgc72BS9Wk5Voma7xSyUVCMTFFiPVk4vXoTW8EJCM1R66X6SFiTwW4msEqHPjdSwdDM2",
  "key4": "4xwCgJXvosWnWDJacDrjjFFkyaFuSqFExDUMaPoPifdPBnai3iAs7Z1EkFFWqVGDQm2Ng7hiUmrnaZvFNeHsDW3V",
  "key5": "5m4ypTcRi4oRigvS9j9ejjBKFt93YpXAaLCKdx975C1zD1R6MuEFwA9TwVL7uNma4XwBtQphEhgMgwiM36zAftGu",
  "key6": "3mPdtxPwhtEzXL4axENJYKrUpEePrXMPzSUhhH1LMihAQ8S4ANZ8YWrFqc9H44KZmqcp53aS3TZtwF6681yeTXd8",
  "key7": "4btUYRQDpsSYeqoq8zWXskCyThsZNqHCFpsxFiNbyqscKkvTsHwKPZJ4ZSxbj6gXsWkN3UtFDzRGAGisey5pnyE4",
  "key8": "2RjKPFszBd2NHme8Ui96Vq34VEHmckFSiFaXNggivep4WpThz2TxPUZqHFPMYS829vkczLF3vc4qocWwWHUyGd1y",
  "key9": "56WK943KeFiDoukEXuspQRcM9sTf3w2DQ4eexuFxTtRh4NyrPgFXo3ayHprqjgS7sm33p3GZP4mPjjToTCTs5JUX",
  "key10": "4ZDnSbpqz7GwWC1Jwy38YYCwX6tEz5tXhbRYj3isMCVwSZwD8b4gedeK38R5UTd7Hx6MZVspgj3UcUShkTAQeygx",
  "key11": "4Jdar47JufNQP28mAZumyNDsZU7f2qDhUhfLzMPV1HsJSGZkJoxghqsgza43wR9eBoC4i1WvzjsUaVDR24kiecdo",
  "key12": "2RVNDZPQvTrUVX8giAGCrTk7seNbHxZXsUaZQ68gkNFTUZFzpEig33VVUhFqj7pzG2wei6bBehtzezMqoeVPGebJ",
  "key13": "67MGSGdjWdq3QEwuAhV2nfquiML2MeTH12WUvRJFoPfPb56Aw3fqx3ay2UymaEV9YHXMybpcWYC2nAZivrSrWaDd",
  "key14": "65wAAbSMoFXu35gBPe5cpwvQPpRdo1y3ttJBiABd4abbMANruZQxJC3M9MvuQ7wFK38UPTpL9maLxU5XtcZWfTR7",
  "key15": "2JPbfSf5iBgkPrdDghuSm29axcb6MqCJBgmZCs3BL3FJHAF7P3pfctF7w8smfv3Jzsve1ZMo8bTLerj7An21FMhX",
  "key16": "4CnD372uRANznbsbHWtP3xkSRbfatFa7cVT3WLj1tnYoLw872zGf4gQFU64P8VB4v9dCxeE3Gvp2nXCZVx64iZuN",
  "key17": "3MCcDXZTEQcvyTDyrxFjkbaJTTWsbQV6bJT1dHHBdLA5KAutTFZg5TNREdTvK3rhHznUyyP9iUmZVTZy4zfeG1eT",
  "key18": "3BJzyXwGQefQHo2EonPoEALuf4aPAXKPqFFs2Ld236pBGMQ9XzC6mLDTfUd6it11M8cj3c2WDLjJS2asPwvAq1Xn",
  "key19": "21JwyrPtneMApDni7SU16H9hQLiW9jAV6Cr8Uh6oetgPTi78W9nErJeMwg5QkJGFk3FZi6q7d5QxUwK8vbCTwWmG",
  "key20": "TM8QpxLQjqC2X3S9Zv9BXSZNyr5GCAGAUr7f43DTyHGkj7ztEphRKdAfBx6dcE6SwmYQJX5E4fh47W8RmkVyPAZ",
  "key21": "4Hrx4D5LEG3kjTUqBHjyXWEdkiDfJ4d98CyAzS5irD98GT9uHX4ZBB4gxp7ygAnMNEfXmiefsCn3GYgL64xMEgMi",
  "key22": "3T6Hvb3gHKG2Nvbhb9JZFrPEm4NgiF7F6L9BqsCu9wek13EeKUHEJKo2jFADoBRnrPj9RKNoigfJKV2Psj2RuwQc",
  "key23": "5gQfGrF8VEzDCkT2GL65nBBCFgvsiTCWnnQp75AtGmz2vuSRCEuRTMLiK7VPGx19Zvk7hjN1o34U5D139wLLaWwH",
  "key24": "4D8gKhurMuzWPK1ovhnHxxMqkvVT5JY9pQVkZR3tS29vjgMwyDbr4ojDYKmi12CEngGD1wYqtBZzGQYSg23qmj76",
  "key25": "kFjyeiREagisLtt8rkQ1UtfXPyJEsf4hbZNqbkFy8JFTQ5zXSbUfbWNrmkrJps9nCPiagdfBuVSyTwNms3TACh1",
  "key26": "2ZSuBxbxPkSusFZ32KddYkzXfVLM9UmEgBs21qjNxX9h1gY19GAVh9gPfkpqaAfk7kB4kYbTkQoqAQjfpgSgvAJK",
  "key27": "4pJz5p5fDYwuz1113Mdf1oVqkA1NTCVyRrZL4F23FY8CbrGefEJ7Vu4kUbE8coJ2UhYwek5ZcayRTJipSV9BJbGm",
  "key28": "6Kkhtk8Lf3DEXu6U3kQaFMdKykZv1RX94pMd2ULoGnVMEoBd2MJWcgc6jGQxtZTMM8KuBKdcREfHkvFTwxQ7heM",
  "key29": "53DyBsVeZBa1Sr9ZzWQa37a2ZhR41fVVHkKgeXvRWUuky4WRGfUUGsw7Gqg4D7Ak7EFNmWAzo6no2jq7NTgZ7ehf",
  "key30": "5x4q7t5JZGccrLbJs14TgkQn5DRgccQtEoYwGrhvFNKBmFaG7KurNGyqM4ZsFVkDjMf1VVBKxf7c1ynjtixbQ5s2",
  "key31": "3B4LqrTH2cqxkrkJvzw99ZsVEd2dbnY1UCbqiy7oYGFw8hCWEGpSzpk6ChDWLGTfN7EbDscmUz7zUJU9MASHkn8w",
  "key32": "457iY3VagkD5a5AyrenEbjeE5L7wCf3dkwWeAzPkYm7QvCeUMtpBX1uTLpkqVPjiXiYHZ85XSF6P4vbRsGuZEZsm",
  "key33": "2DvNj9dA6cu884mbYh9DPf9yNHjF3ugVfHUh1R57npxvLvNbWkCPb7F69CpJDx3P5gHLK1sj2Ke3QSgVrHAfdQJG",
  "key34": "3pR2iMBdP5HzUb7rgnMw7JHA8uvWb3KpDARqUwJjdp7HruBLHLYuW32Vudh5z4iim1AMx9HaAGc4MzJZR4zDYe2",
  "key35": "4rPWBYXP7rppyDgioqjDWZqMTpGBjLnbA55Hp2rqsMXqKGByYEKrgtN647Gbxz6VdBC5gsfkjgC1Hgs5a39PJ3hZ",
  "key36": "1woQEeKsxtFMRgsSeQAoSPV55nd8SZtx5dsPfhC2tqhTU8T1H2rjNfruHbxETWTUjJFqzU8LBEb5jJxytbDwH6T"
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
