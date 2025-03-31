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
    "3J2WdAifsxT3EkWExTPN7mrhrGZzq4qwr5oYfvRTNU18M7ChWDDDinvZrxb66Y4DbuoaL8pdEok8D8Fjn6Q4TVaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L2pqQg6ngW1AmWxRvnrQsgnBBbwtGfuBAtbzv2kxjZdRN2UHV5ePbP2tUoVgivj9w3EbvZCym6DiBxG75R5PsXS",
  "key1": "27DEQNJyAoha446yuu5p9gAyHR6Eoo9UpgsBZi37PebhejfwkcNCiWf1tTdPjHA3dZU4yPSviExoqZY9QjejBwdn",
  "key2": "3EwPxVwmYWsn6sKyWwp623J2Y2iZazsubAWwVRRdCD513NWLsKDnAox4AgxUs9zfStQEyRSP9uyeGvJNioTcbkky",
  "key3": "2hJLMCRBqiJqVDEYhWmuPF63M38NDN42cj2CmxcRD9Gg3wGP4R957EW4Ra5MgiqbJs6kpwjxsZbFUqgvbveogmmY",
  "key4": "QNkzgPRKNkKhYV6CEB4vcxiEgXZp5JjVPeoDtyi6NQ2h71ZYeVDKbsKuGt9LMf4jV3vzdMp9Lt3j7rG3VoiA4tf",
  "key5": "34UG26AXVqjbwA7reUEBeDyD2jZh7xqDrv1PwY1PFxsytmUf7W6SwVCpPc9HBhtMhiHb8xv9WrQanRLVRoehpmkX",
  "key6": "4Dq3Qobo5Ty8iQCeAx2wd3qFvhGtiz8AyioKD8zWjXY8ba4mjPsxmvsgTbYbcFFEDJBeAE5vF2j58wdDZ9yJQjBG",
  "key7": "2tUzaQ5s6tKuH5BibiUs8dmZkFB5MbQFRD11WGTtbuzotBkrTJ1Fvo13J7WskxaUsEY2QT8aiiveLW9dFZajjogu",
  "key8": "3BiZJFnJzayZd2gpBZMPECP5DsR1RivEixQY3CRM7Xk5YWsco1aLQVSzs74Gg4MwoWPzaaLPrU6C4QMfiwZUFySC",
  "key9": "3DNLkkXizqVKncJ4BRntmkaGJZstF3kQXtHjiVMk9RqaMbjQ8fScGLVquXPpEZgXTbNYxkfSHhJW6inZJVwNwCAB",
  "key10": "4Ud3iet11VbSMZ7zpabdfZZQcEUxQUNqA2t6wUd5LnfxEaPCVmcyC4e1SZa36i4r2nD8SSxH1kMNYq1duKbqguz3",
  "key11": "33axHNiE4hXR9ovwmQSzCn9BqVyqYqx6yA8B8vFSvohXXspdeAAbBGq8sQVeffhKMrnjEX6rjAYWioVBmUmbXL1K",
  "key12": "2w2LkXkPPReZF7K6CgmL7jkeKcpb3M5fgy3q9D6Kv9eNEEicXNDX9QozPVTfuwdrjf9FHNKC34h7zdj8SNhTcgfN",
  "key13": "2QA1EtNmfaa4KhUP7MPkB3mjaWYoo9KVHqaGBRTcUBPU3DXyNxhSjCAfmpMGQX2V6CSgtNF1J7xsXHynZnomPhJu",
  "key14": "29SbHaQvxtavfadYq2tZVuX91QaWp9KJe1AvnCAsDGRi7xD6GeLS9Ji6njZT1hWiKEZNBBvoNDd2zrpHZSepAndS",
  "key15": "3BFbdTzk61E4wmKq5KKTqtKdZVQmUA6Giz2b8bVy1BEUY3H6iDngkUQijsrJJomtmp6vsZ67zhTMgpsTUuwxgdXc",
  "key16": "2T2CkXDcT6gAtV5YNcAQpdHT9BXYvYfep6ZKj2xc6sgGrFMqxd78RMjxxs5aXPhH9Sr1WYQe4qF41VsZDH5KFPhr",
  "key17": "2Lkcft5WAxfiL2xRkicsqS1WdAciiWNigfPmVeKo5dL6ehsphJMm87VdxwTgukpksnXg1wYerhmRbiTzmW2pysDr",
  "key18": "vxw1C5zoPRhRHb3sddobY9V6nTb78beBUTMrSad9uXfZLBBCvYPRnQ4Upfv1YQFZ3YyRqPbEtXoXxvLXzUw9CNK",
  "key19": "4NfzJomb3LwmxJvDqBAxRzYsDsgjjdL7JKAM3Jm3PdJg771keFoyDBfnf1CDF6MN2Ws3HqXUQwc1qE1G54ZgR32W",
  "key20": "C9ov5QxRcE59KceBqk1DA3UdqbT8eeTDqePMLuVZc9S5SohHxbPAAoEAsTbAe2J6oiKAwZ6juEh9EGqnaShnhu2",
  "key21": "bV26sg9ewHrCpH1fRQ66gRJD3RqVHJaw4SaNxVkGa7eRRAGtoA1sVbNHt114vUWCYWt9iWGBdP9dnxiSgXuSsPM",
  "key22": "2dMicW7L2j7F8TqmhLUPaWuCP5YMkVZ7snWzXRxoNQHdz4BrH4UWHooPgeUQimuWecRgf7e8kDqJUvT8J644NDGh",
  "key23": "2ahQFWhR44ayFQCxHQy4Y9PyPY3FEyQB9Y5Gk23mpMyh2u9ZPXMuKvxqf9G42n2hY6Q3958R7teVYMASqXqBLppU",
  "key24": "29NDpytX67Snm4tiTsE7orZzQTbbyph9VzmsNutx6yMtXuswQtqGppYcutGgeant2gWmwZhGUa5ivEYRd976rQXn",
  "key25": "2zXicY8sKoJsvHkLK3uncZeN7nTrjARLkMzbBZ2ZWeRKrUi1KEoRURh4trYHB9VHd5783hwvxUNimYuvjsHdA1HB",
  "key26": "3QyLPYPDUnxc7pEaPjucH8FTGxnFhosCoWQsCa9ugvtfqBszDUpwquxmBa4xPMbHwrK6HVmcqF1ukPB5XvmuYBsM",
  "key27": "7tQeUw5TdF36Txa2KQbGovUzf2ZwdAJKJE3MiMzXeJqkg7NRS8WS53K28dHbrxnpGXMxdL6Dtw9XYR4zoCGdfGS",
  "key28": "3fz7ETZgsU16q4rCx5ASEYwa6GEJqpVWRTApNWQ6qKUkt5hYDrr5vpVHi1ee6Up6G5HDtrxbuUMmdidBXa6Zgfty",
  "key29": "5uNkHXvEr44rNWkioKT4hBiHrUbCLR9h2J3LjvDecjAzaGqsyncS79sDGFtdfPBZFZhkenx31y32SdySvfXHGFDi",
  "key30": "2qL8zeFzzVma5tvSGSPKU3hzRh5cMmGy3uY9nQkSWxGZ8ppEvLLdUo14R71MbivTwR2UjArSfnfTTMXxXEiWcYDB",
  "key31": "pwxcnRgE69pXWeESQqzZLoLvaePRuQqJTNRUH6dFhVLHCKQde7zv3AtWRjqFSbE29k9DbwtWkSAHgDv9yBDTxE3",
  "key32": "NLuU77d8YLGRRX22tVw4AsG1194NX1qU5Aamh21ksNQtR5Lw2KF76AxrG7PpqVQSCEqfkbPre63bAdokRb8bCfD",
  "key33": "5DoA7yMnnwuCT7G46gajrtZTWJnHKzMZf778mJu5crjhcBTqgp9vay1ndc2w4KuvoMyHMVcr23ks63U7xsAgzYxd",
  "key34": "2nQNBFWAKVJuCRhrBb9dZwKo2YTEgx3Erojt6KxcPzZMrMJw6CnpUm1LSB2dk6epsHt8e8gYJTU7sNL4nBgAWDUu",
  "key35": "5zaLUxFUrUrTfhx88xryMmnjx4cohqwaFBVEk8kVYq4FUmV5sNX2zKFKdfnNpgoNGSWtTmUXv8boUEK9pwiTzPpF",
  "key36": "3RRivYRMTvJ9tMkCsAWwL1gidGEESgYQ9rg3Ybf6wKYo3qYKtNTTvMBFzzo5uj1wLZRjwLJbRG3WGYYvF8VqJWX4",
  "key37": "4XDtwLwq1C8b5YjXC8ux33rwmLQnoLansLDVxpivbAD53HbTWBa8AGMjtGwg1imqf2PdhucDshX3SnKha3QCsX1H",
  "key38": "39iZA6QCYkUw8SL5mm99CwkvZGtHQyU8SQT3YsYjicpMviQC1CRWuygNR4As77MC1y8vvi2XAFZNk9xcVAWCx68u",
  "key39": "5AZFDSQkwj9bRyKDL713mvhvLvJY9PzPZu4FuMmMnaovPtAZSntaUbZmLjym1aG8p5BCcqhyakVnqyvjrGJ52wBX"
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
