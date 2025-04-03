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
    "61ApciyyTo9pPrX3wz1cbyDT6zuozKvSj138D3G6qLma18ntTKUHTTVA38t36qyWfXD971X9dYhuz28eiCwNFhaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CqTVxZmcy8MPK5PbRbcSJBPqZkRH2xqjvD3g4n3aoC6FqFXdWCRWUn83xiZcvUwbhqvL1P7pWHHZxd8mSifV9iS",
  "key1": "44RKq5RogKLpCqWGUAKrbvNmvbq1SuuMHHFDpre8iDheBu3QWAcQbBFwwAbjwD3R5Jk7joUcAbMcmch5TUKZwTxv",
  "key2": "GZfDLMyNp8McbTSfvaNJkGyj9J9v7sMwprr1aUqRgphbS84cKbzuLSeSuSiHquqKTpsuKKGKYbo3gqbS8CDW7dD",
  "key3": "CaTWoDp4yMsXoqdYtpyDW2nPzm8gLXNPkXgDNVW911CRnbbmjL3PEDyn8sxN9uzJcK32i6CPKhsPtB1Loj59kKy",
  "key4": "31zRD5ivBP4AHrTPiKP8Un6ikEW6EgE3FoZiywn5TxmXm4Tmt3DaRbd4KfGqHfSF648oMQMkAaUH57X1PEWKSX1d",
  "key5": "2ojQLDzCogq7WVyQ5aD2KGYG5PGWyWzB7cHS7BcggtsTL6ME4ZKonKn7vcjm4tC63BXfa3p7ziWeYh2Tq4zvW8VM",
  "key6": "2JQkVZjspyGjhkgpxzc5mbNQLn3txt9o4E196uabiFQtFyPwaTneExjMpUGVBcLXPrgNWwWkxqzRUo6eYAt8fsu7",
  "key7": "4zTdkck3Kx2Ucior4w6Vv5YqtapEQrXhJ8npoyrCjaSp9mcW9BLXGtaQo5fiXSPPrd5RBqukQPRxC2jBZXUb7WhA",
  "key8": "2WYMsKF5U8PXkbrqfEazuGsZhU34ER4GPLNqrYfFmn7Vp9jzsNNGUVeRoY8uwgQgyWhXZsmM1iGvNP1JGewMq3ih",
  "key9": "vxGADpYWPX79AGC8e6DxH36sb2Dz3CtiZVpEZnauf3ntGavgwTiXtJknQkjjhjiMAVjhzHMbAjPj4hMi5D9fNK2",
  "key10": "4dJKUWbyUVa9gPnnpPZLM1cxuZJ4hev2VZiRrvLG7TybXacNTfVqekeGykjz2kowdqrPxYSH9Vk2QiMhqi2FY1Cn",
  "key11": "666fchsm3h1idmcca79BgWkMi7SsvQDmJUtDw3aUpV8WdSBnrfzpL1KGjoUbQXnJew5zmZrPZpLci6iuPxCDdKFZ",
  "key12": "2oXzVNe2vAubZa8Kf4kpBPMi3rqCxghEQkQpDFTQ5f1kcL5sEVDE8eTVDjKtGBm9DfmN23cA7QucWG5dWMEthTVu",
  "key13": "62z3g5t6Hzv95n5Hp7qux2zdYzrumNt5j6mh3kkx22AukYcnRftsAnL2KDRmAzEyoM7oXjD3xd3mD1Ag8Ax5LTiZ",
  "key14": "jftt5gXErrSf5sc8jKcWNFKqsukFQRmuPo33L5EbMp7rqCKUfYriE5dV32f71Yc6aHKF14vpX5Tu8M1icPqc5aT",
  "key15": "6rFX4D5WnnRuuEY81Z5qWDq6nYqZzSrpQbfN66qoSKZCGR3ov32Kae7orJpm5bpUvBFBg29KNXP9iWqq46LUv4n",
  "key16": "4Mwvd53vifCHqft46v81Acqrm24A5sfYoFd1XMEFmzNTMPWejmKFEY9VWvx4Qzw6NUUJsK8f1vSZBBegZg97mguG",
  "key17": "2BMFCXn87ABbbW3P5b2YFpNF62nwqm1WkLiGswzmhbYkL579HipbN7BNaSkAMoTEt3kbVwcYPHaboKdiwP3FErzb",
  "key18": "2fyzeNxZkYaaN3URByyqZxsFv5gyLYND3XoJwUpJwkfwtDg4zRiu4mo7Q43uvmxgbb9bgjZskF9EtNFLW8UWZoh9",
  "key19": "wkNJD2UqYfwiE5QM9HyGbaCSMMMpkDKRa93KYwMQbDgu1q452uCc8Vr4Ark8AL3BBmbH61Axh5xqjT8yjg8Ui37",
  "key20": "4aQrNXi8AAiLA9kDfGPvKBqtZomP6fdoCaTGf8dTNwZ9dusGshwxN43wuE8oLURqAuyJgFp4bFEzTN6ED7c7e62f",
  "key21": "3pNrjakhG4RSAdrz9uW35cyK9MBQ7Rn5iLbqeV1H2jBb2rN2QnScA9u8Kf9JeAiNeb3bP1YStJD9pHYeSpdFxyL4",
  "key22": "44qKHgjoTp2zGj6wGocUd1ywaGxLctdhVWiBf3gZrQREBVikQtWaWk1fP48948Fk7K5NL9KvypvVzcTMABUjfxqM",
  "key23": "5PmwwvFqQemBWPZBJQt8B45JeQVqEUBVAHyxyAdwdTYJaotAmDrqExwZpdGr8z4vrKTPCRbBHoofXbzRBHPPZX28",
  "key24": "4i9E7L4y2PQxiMu4mnvu75nUa7nWPWuEfGgVbfqqE6YDfTA2qBGmnP4Wso4GfBRZ4TKcmaEwNefADrwFetAZhM6W",
  "key25": "cj6RfDXYb49B2caSnuvwdLwvBXQ635t6pSBRma4g4jo9eGC1YyzS6nssBfZkn5BfcuZAfUrbmvatxQcyJq2T8Um",
  "key26": "QYZe2pXpJ4Uy3vPayb6HziCoa97WKttfevecuPDR9aVCMeosKtys34EPf85A4RmkQVZjVtCTorEkAaXuWVFXt5k",
  "key27": "4ny9DvEayhyA3Bqymq95CqgDbtShMyRG9mnsKM5ZfziP2s6e5wdGM3xngyZSVdsAPaKESY5vHngjZSEiqsuJX6kc",
  "key28": "5pnEDtHUg8CVMHXe3T2DmpQn4MEBJnu4Mo9DuBjFsYhkutRwjxhfzdegwejM2Dxyxtk3vyJMrrJR8XQLSaoejrzh",
  "key29": "3iZNM5UT5rEyucQG6X2NLEwK9TvccjtxdkB3ABfw1ZAQN7LHx15CgF5Fft6u3WqKVuB4EDCWqCHNppCx3EjUEWsr",
  "key30": "3Gn9nAoe5XQgXV5PXxpstBhhM6jrSHpHdN88DJrKyTjDkcM3rHRVAPJnZcWVrsu8dJpNAeaxBUgUmjpdHQ6yMdZo",
  "key31": "3t2pNw5zR7B5nFDy2MNzrcQxVXU9E7xoiURxZka46GrefVeBCnXZXuH86rknH8UXnCFsnuignSG8mQuxefgDCNLb",
  "key32": "3srQNhywek1jomRUumHNSZJ35BpEhWe8iDf8r93UPG3VtLNv8UF3SY6fh5GUQUksohXRNxPGYXbCTdSSHgode5Ed",
  "key33": "3w24PeVRhdeaFZh3HJQu7Z53UXpUwDXVM6WhCFsuccmw5aMEEcfGt3VVvHFuCUmF937rhWSiRFZZqvzNN2hLt41r",
  "key34": "dWjCXsW1PPEkv3MG1Zk55No44vQrAR2tfETYeYCHzWArmshToHQj9q96s2qEjhN4NJQzXr7yzxddubaqMxi37e5",
  "key35": "5S7s1i9PS2Mbz3LBeuTxoYbjzGhkgporpuLztyrhqidzWbVvwXpPmyDMS9psf39oTThisNjKBD5GUBTrRAsV7N9c",
  "key36": "63saNRnrm5Hq8oDLPP3skFDoHoPChiRT3zff3bmuGt2RZ2ef5YSWz2nrHohTcte87KGCK69QmQ9buB5LeaTu32cL",
  "key37": "fc4vdsMWxw5H11ZUogn8jYXd6LFcU6WCxvKdL1HT5ycyv7r6kJzFsj24aNttWGvtv3PsLhNkSuts6ECZRfWeCrk",
  "key38": "578cWpzgyyL7EgjKReSziid9XAzGtvyrcANi4TWhMDkaRNbXHFnZqjSEL4EEskL1fSsReK38HLcnLxBL3X9jDDR7",
  "key39": "2HwT2Yj7peTuBLWbyPd5f1GqSieXXrVe7swm1SzTDpvFgJdFtBw9QMdezL4UJ6auo87NixuYQyphjbsciPD7Nkwa",
  "key40": "bhP7WBnbKsgdsgikxsVU9Wq2VJdv3WYSndEWwiE7r69yakeBYj5SxZn55M6FqPuHuCMmEUwwk6xoTAXb84ys3Gg",
  "key41": "2zdbe7AJyaWedoQDoigd2aZUsu9dNsNxDKJm569rKviosvDfaezg6Zb8YQ7ovtApzGKFUmQ4rCiTQ6ZJqEudhtth",
  "key42": "4KmBvnY3pDKUKq65CjJHBGCzXi86yWP9V8BUzE7Wg65brUmGnCS4G2ufEmDRCu2AgrQb2dAdeuK5NThAwY4Dp17h",
  "key43": "2QQsER8iZbZYEoTRQcJCnfTfyfZf43iR2DzR69YwXM6vHF7rJnAZRd3hB7k8tuSj13pZBysgZDG4tX36LfYhvhzk",
  "key44": "2bwuS7VLZsV7qnhDw6YHGLbwEPzwG4TnHGrmnMFwF54EzMrN1Re9Bb5muUzWv1WP1R5G3h3Dyq3agtxEt1K4oSMr"
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
