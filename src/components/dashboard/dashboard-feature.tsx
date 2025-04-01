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
    "2FJqAErAAbAD82DkzUuqtcoPUiSFE5TJnhUfzPKR4RBaMLkhrSRX2G7cKA7iFkeWFK62Zf3S3PeFerU7pLzXSbZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZCWjmDgPHBpMeS294mRdDhdqmNmfbJdRpbuYv3DuGdQhV53A1UwxaF6qmBJCXTuhTpYt4ghKSGEZgfEWQ6SCTrs",
  "key1": "51UsoS4DwWecA3kgUv2zvAZUD7Vd5Nc21kK5mKbfEeUb3V4rvDBB6M7mvvwPBNm1HQNFAhx9GsjUd5hRyGRehAas",
  "key2": "63YtFsw1injsPrbrwNKLDdvG2UhoJFFcpRApvWfQQFrLMGq2h3NVAXJvfTBwHk9CygMfb6FiuV7FDfAwVsTsfoV9",
  "key3": "5JVqRqJrVWB8zvVY5zehi6Z17S7fqzWPQGAX9LnmUsFQK3oZacuhkxw6Rt5pxoYSFut6LH4eBVEFv4UxPVPjhLXC",
  "key4": "dfseqA2ub1yU9j1MzzPtUFnrZhcnqxPp1NDBTpvz2RECpTSoFEMiRtvSE1BmeiBuGjqX4rpeHQgALq5GH2af64f",
  "key5": "4qamtwriZvMw9sUgiTHJqKKfoDasMVr9iyBhBUyUTrMBJTK83wkf452KMNu9ohKAeyLQf8yKyMhQe8csWRC7hdP",
  "key6": "5tTRRwTbKhfiq2Pi1CEPeSLzVukb8KtP3RsAVkVPPQ5tStVQH72Me7iBSKMZ58JdkWW1UBq3buiM4XgzeQND4sK1",
  "key7": "2cKRmwjg54hio4Tm7HPtXMReYMJxRpLvFnvsqfemoYvDTwxapxXjypP2cxWge1bgsNGKR2he9fhCnndNh34LWY76",
  "key8": "3byv4A3QqHFZaZTeXTZ9sRqqGyi9BThGra8r3aN9qNgBXhWeWo6zRizKkywidmQHUYv1Pjqx3NGeAJikN1QoJ2H8",
  "key9": "2VVchMSb8DUNrK68cBaLH2EtQu6KVETRJrHWXAd9NC9arURyZ3TKawtjkY7pn1WAg692iDF3xLoTf3J1nQnvriED",
  "key10": "WnivFzzEAFpUGPwmXpie3TTghVgMt9hzcyZeHgRb2V44rKcZ5FzHtjkT83GcyXESSuwGqp7GiHa2zXoEZgQvZk6",
  "key11": "21tGR8yBuwmErCZQGvX5nZVoDGb6pzKCYn3zL1n1dZs2mT9vW1MmEfvb7vZ59HrvvxhjAEESZoUJE4QHjfQbLZhd",
  "key12": "NNt38WBxciv8daLqt7t1AK2iXqBxAcowTdFnfx7CoEDdPUvbHMtmpA8syfZ1qDtGoWEvmXYdMpeavhgjCEniyMj",
  "key13": "r7Uf3sa8rGHXmcBdAgUBUQ2kdGFQgoqbdL25ci1LBrXoD7FwLmyNq1udTbakojBGLDuENAK5UVACLbwfc3VGYDt",
  "key14": "4HiCoVQKFCU4MrU98ZDiYT42KhnF4YpcarmDE5nLMQCACoSUs38wZaos5B4oUpMn1KmyQLWurXfBCMc2VgBHcNbB",
  "key15": "22NGoEdogeak7uEG6KdfVhAp7joLYMK75zmHALBtoFHzpjQexE2ZXodyPB7iuLkamEKNmAmPKsXUNMcmvxKPQUQN",
  "key16": "PTR1N1VKkpHp4HZCP2NPKUa82biL3FaakWA2wbQ7rZqShE7FyLUSFDJ55sL34TszjEmBxWUB9syvWbg2ahbjBA8",
  "key17": "5VSZQ1hvovXjgdtAHSRhLC2tY38kkecbh3yPWiUyKWV5rz3in13BDcj5HPUAu7HFCUUXRY8H6e8vT3Xh6A9veZHx",
  "key18": "3KNhBdpGVExH3GeMWR2Qg5teB58gisHU4sDX5Pr7GTzaWpwmcPEAG2KV5pDKvYX3TnfnnrvwALqDQMDBKeyUhkr5",
  "key19": "2zLhgAuxxj1zJ9vCL3oz5U2AhniQuVuvXnNLD7bBr4kxZwy98rJCYqCR72sXrt8ggCuKRzfqZtK4Qgy3ZUy6znmz",
  "key20": "3Cvs1QjjSS37uWAeitcTX4NX4QaUw53V9A5HNuGNRvwtitxhvackZ2Dqve7PX3HgRVEbzRFxZA4L56bMkGAwFDe3",
  "key21": "YKcacizsqQYmbKuJYmRJU6Srf7BdnLdhMuR2ZM5dfYekLRrV1S3EouZrT6nJaeg8i2PP3GNPxZB3fDwygcdYvQr",
  "key22": "3VuKs4QeLSEvkSKUTCTUnpFW4LrwT4CdDJ6fRrqQpWqcAJfExV7ovYEoao4YKbuy48uM6HsQeyy36BvxPBCoGx8t",
  "key23": "4hpMvYVYhfuAcxwe9jNVn8oG6PffMThGcUP9UD7wAnFdrGS6oBtnJQmKYvkWBT51CYoHnbkKZ3hyGNfDnkiYK6yf",
  "key24": "39LLbGociHfN8iYwEHTcRuMC9uNMZbud9jT1WYzuVhS7vPwtabLZa1Zhtzo6xsiXWNpdda2obNohNN1M6RhgA3ZP",
  "key25": "4zVc2ngRoSHfXtG6RdNmu3x4Q8LrDP5QNqpci4Qtz7uJkmCoWFre8uR61G1mfkBjKFjUg389iAS3Kgxof9enFAEW",
  "key26": "2h5y8DrYLyu8vvUS4tBXRVmuAfCdBAJFBjnYE1kcHYnv2dWxXkPHV1NcPNZ1CHeGA3Um8cUcRv2JVcbiVWLHurHc",
  "key27": "BYjTFAJLhSm9VHRDoVcdET8WfDroxVMi14VGLAazqgCpTsY9meQcdF777LiWaZuERDTg84DyaSHRSE5FnRawyDz",
  "key28": "3nNUMBi1d82xNSPgLPFAqoeQaouqUNuN9KhurUWCHX7XFMRb8VFbmooobjRoNsSe9p7FjdxUCZqgrMAPB6YCWDMc",
  "key29": "fkf52fWXvFBSNwk2rGPQnJFrKECaQBuWGSoKSbRcq3yEd5ts2HGvEwWGD5C2rCFoivAwYxX2xFX1LBUp1FJULZV",
  "key30": "5nGr8WEtwz7rcV9bJHdjgrZQj3LKcnPPQMNpj1TZzowZ8pYaNsebpprtqRBmYMF1AZ33Y3FVVMPauQ94onnriZDz",
  "key31": "2GgtZwHq2nGvk1J1GF6Wx4cXCF6YTQ42gaLw9SCrNdZHjw3U3xnE4yrUKETmU5h6qcpF5Dey8ggwywyDvYrFYkXK",
  "key32": "5vRdcF7wYsub5efDJLsPu9vqcFEWQSedDmFDBLqgLPQhoLNRM7a1rkT7KeQdsQG8SpsAhRoJZ6A5nqt4ihJ2T4Qz",
  "key33": "38Yf3fe9f7LkPaHv7PXWvMecxmKeRY8PjEZHicta7fpT7RUCQMrK6VLSwqBJ3WHQUqcDn3hrUeBTfMcqTUWoWAz8",
  "key34": "22qEaokhgdxTs3v2QDnQAyceCPoX1byaAyRjPBqur8543b1DWUWCEXBibNwLJFCdussEed8KAaDnEo3nXWnezG7J",
  "key35": "3UopCakoivsHQSRuv2PMt7to5WHU9VzxAoVjb4NDQX9sbbuHrMDm88tyNrNKKWfq3D7je4fY3CYyh8mSwNbTVxuN",
  "key36": "3o39SonxBs2vJhULHPkKhYSU3UWRLX3AwhK5CcvpyDiVaF11WkW3d4355LmqXUnhS5NzQ4jJzWp3vaCXr5YS5uxg",
  "key37": "5audDDa6EUEMYLBjm3Ry14VzTJ1xv2QSCDvjTJGpmuYQn49x8xez3GNZ2WSb8rcPZG3e2Siu1mB4NWpZc7HMAxZb",
  "key38": "2TNTE2igLv8soDdaeZj7Y7dKkpkJSxkG3Bnf6jgAfEA69yso5fMbuiTBogVoXJL76MSxemVZqbsWDoaBgyAxpvgk",
  "key39": "wAkAgkK3dP8zazcwaBsifshYdFuQYzPw9R2HisDkzt1anE4XbfUed6HTNtF6KrKokKkpCnpZmoSrv5xV3BBRdQH",
  "key40": "B5f4SJUnkhe5623hG8nmGm6pCMsW6jJyo8X3L2vVrYQsQBfs6jVkepmV2tZTTM8cXtEtzTNuk5zTwFa4Twk8JaP",
  "key41": "2f5TD9gaNNCyAhWbgATobd8hgaPJ6LjoZ1u4PJhkURqWRZ9RDWhZW1hU8xvJo6kXKmp5Xtq61uy62tHWjbeArGdF",
  "key42": "uzCHeijVz7AiZU7koDgGC7K497Yc2TBSN8MYkWGJDwQtdUisp5ZsjpwuRZPPFZV2RyEimrobKjMFG3ZJ8vzkvpv",
  "key43": "aYNxwZFtkzoBRiWZDckYnvbZt2Q8hvohZt6vCaPVjFdgRKS744STB8B9aYNikbKp2Z5Fa5s5LEwiNPE4PaRWcXz",
  "key44": "4LynZYZzuZuTb9TiNn8UAKCReYuGKBPZMNxuxTa1DyhpQyupNLszH8tGTEKdfF4EctJkNMJoR4oUM4VAARdLsV2o",
  "key45": "zZei89fUrJZjTNPp6tgZWgQMRY4KayHxYu2e1KEHLHiq4Vh2ZVPnpFy4QH5W16CxjHyhxmGSwn5EZYB3NE4jZ1j",
  "key46": "3kBTupRiAyXJyusbMSh5cu8YUySJ3G5x7GuVVvMJDpcufU2s5ELLTEPSso5Z3ggYqQhGno81m5nRhRY6Pvxw1QhD"
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
