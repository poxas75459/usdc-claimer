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
    "3RmZBNynV1jwTxeLyJVmT3oKXaF3jRJZBzfJBN8arJxVSmpVswtV5j16o1N2g7RGijU3KL5pEqVHSyJSwKeyn6qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dye65SfFSFv2TJqJSPNse2ZNw3kLFQsVpfxyN2eKHqNPJNbRnknJKV3tyGB5Vuv6731sXvp6Pe2TAck1RfB3Syj",
  "key1": "2dEHmc4m3ZZNy46sAy92URmLnHr2XzRGddTZLLU4RjC5HSoKfbHFuBobnSjJbPKbKYmDr5XFSKNq5tCCmRW5QJ7u",
  "key2": "2jHTZF9Z9zpw9Nhuv5o1G2iDZsfLbXmnnMoM4rf1AGxxSUWusAYJDH35qT5nrDYATNrumcocMBqA6TNPjdguHiA9",
  "key3": "4x9MUGJNGCaaK7MfvxDT16hGfsasig4jBUDc2aoKa2T7UWhJkpqYaB9YABhac926KpC6EgsTCnMwmJoGPgQY19mj",
  "key4": "2rR1egQ8U9GmL4nSvE6Ui1hKPyNadGrjfMBHgiFaa3rbAscN4JE4nXz1maeQTUanjmTZPWDwgWPwPFbyNoP5aU7Z",
  "key5": "3XxzL2HHr1eKRq71h4wMmcTZugdusXCmMrGUKbj49gVKLnnj7JSaZ4nJKo8648iAMQ5AozWRpZVgThu4n5rMjwwx",
  "key6": "3MxYnhyLRmwAuSF3t9y96jaye9A8A2AbJrLFrgQQo28PU6KynZ3JMZKbek1JF8wcXtCrhmLoLnLygpfNn6ZEqUKL",
  "key7": "7Dj2GT4C4UZUG9y2NFWPucQVRqYnBbUgP5pdKidHDsoVTEhAkyRNX79kgmVEGftTzwBJh9wEEG9mDU4H9LmeC31",
  "key8": "5FTQSBrbC28U7rvaxRKu6EKicjGHVHERL31dx1ijNvQxre3tb1ry9SqJKunRgE9pHCz2CQ9wSxyLpDKFaJEfKQrp",
  "key9": "DvfBYb4QaLRJVTA9DRsxRQrZaRt1Ni4XPo2V5kcQf8CGtAhaaAuD7yq8xYXg2nhNSX6V4QWALmEqASQaCsPqeNE",
  "key10": "4CmiASBWPFuqvSizxJfouxqSXWLAN1K2hmSnvzgTML79WzD8s76zsQAY6b6ovFdeMH2iZ3JGZP6tMorFMUnTgoFi",
  "key11": "CdUuvny1oFLknmkFBkYTVX5JTDQDuHzgpX85b5wPnkZkSgyPyZaPVhJtQK4ctyzXknz9xd2C15RtxbmGyCUd1oR",
  "key12": "LobxBJ5zF8Qumba2MGGtcc1M78PznGtCBw4osYbAJQJVA4WWZDaAjSAk3j3ihFtS1aWEbxGugknZZhX4a64G4GR",
  "key13": "Mjp61fhL3LxAx5YBGFEJuw4EAzUmhBMsQJkjKntmWwUfVeij2Gc3Co6B9QwQ7UhjHq4PHBfuoV1VDtTRAXX5t1J",
  "key14": "2o9Hbq8orEACtWATP215B38sQENjJJwGCupMo2zDnMWPhQkmh8sMCD2SziPWEC5MoSzFr4iUYXB1Kw3u4HK3yJM3",
  "key15": "3Uw164mhGFA6t4HbT2SV4KZeQktPWD9SwgzJFQLLAVZ559hwuTpLTh62CLaKhc4NgKSqDsRqDeswagmqPdrs3s68",
  "key16": "5uoSsFTmrpTeRYEGdnrHyGgNbzrTPMnJ657QU9kAx6MZKEuWNEBvTDVnQF6y95XmGiPG5YqhaNT8demFtCXm43Qa",
  "key17": "4PCENZQ3sNi2rW7v1ztX4TSJq7YQbScin1eJRV1sZYxy4PfFEKRcCo9ovN4TeuTrGXWZmCwMZ9qMZNZkcJqRWutW",
  "key18": "4eiQ1nGQ2x9Rze6iPC5ZSV2uUJfH6F1ohYRLMEyLigPvLKC6ZC832iZj9AC2HUsuX4DVM7jST9EaMDSsmFDVBdFX",
  "key19": "3cgNHZqNdeNMFKtqFivuBmfJnQAdt4Y9DMGNqCpv3sDpX8WRXKveiV2gYXFKyBFMZ8E4FyetijWtmXJcQQZ7Lrv5",
  "key20": "EUYSu7pA2QSBnjuZZtnEdbZvQhrDrFvgFJet6Lqn423ZrRVd4wwxEeXojLyHHx6fxkxm3mA5fjmFYjSNfdwA8Pz",
  "key21": "2jYBCmQKJ3Hvdq36SiBJppNoUmpNS4s2s4ZtHpCoL4P6ouQZ5EZAPNuye7Sg5pfWRb6UA6HvFaURB53iG8tW2Q5g",
  "key22": "3qNv2EWvvSmK2UsnLhh3MPAN7FcxjhBMJXnwYKJiEGqXw2Js574c1RMwTWpiC5UL11af6gVQhJMaFwzr4BcpCfrB",
  "key23": "2pPY3EzJDrnFDPk95tuXotpPZN3SLSzpBnTcN29oK2Atv8ciUQjz47gr8CP4VZ9kgwhuipmx1GJFFMdXREr6D6Jd",
  "key24": "3mwvhehPE7TeAmHN1saxUCeYHe5R8ra7wv7AALshCpZ8iWWjgALcAAXaj8M9QVPgc5CVhX9qGZCtid1exhfsU1Yr",
  "key25": "jJft7iTAu3JgLY8RZtMXrSr6URTMSb96VpEXzKBL7ypkKMSMREHMbECt5uLXDFi2ckJQzL7MBe26ZpgR1tytCmY",
  "key26": "2AqbmVvkNy3y7eC15A8CUkvKAhNfncntZK8xK1PkNv3rH1bQFctLgu7pBmcH4nyb19EC47QByy7X1MXDfwS6uXT9",
  "key27": "4wEUFZUxSh1ekEWyQq7RQ6jHFUxLWya4dm22AJUzWHMmSwbbAnRdhSc5c9aBUNFfHfLA9Tumt2aWes6AJVPVT2JX",
  "key28": "3twLjYniSBPcC5H6YeubkUD9fPwZbN25v66HCnvfcS68YJYDzTYVs4Jr5x8bkbV1E431LZFomnWmbFSHbrpnzc9A",
  "key29": "2C7n7ub9fVUntoqKTrBjhBKJsYZodiagr11x8p787GjEMq7TGQtuhq3YAQvDyZDVh5pNQuNwmjHPUud6jtb13ciZ",
  "key30": "2MkWWtbhjX6xL63H3G18tsofAizgZSzcjWE9ipDVnZMNVCfLPErersraeapohaSTUY3i1heoipk2Gvy4zo7ew4mB",
  "key31": "2Ucs7k2vcYN4UAVFqzAyXdF6okGGKsu8TxC3hveniqgimWY1HJCCnEJJtKzw4eR5YNtaiAAkdGUsw1dx5BsuHD97",
  "key32": "62SQpnJaHXmQVnV9USP7kQ9SFU6jaiLZMH41ZFfruH6PaMpjoi6XwYFurPVQUxC6ufUMYM681WnU9xPnfmTpTihW"
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
