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
    "2zFjFMjmru3wiq2ojt6gr5ZvhCvLhcZAp9uDBDRWMtTDDz9qTPEYrvSy5biU5uc2L9n447CY7xYXw4Kvr6t1wWhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZoSNVo6LXhJdkPhH3BoUdhpHaZZVt6RdKGpJpg16iHLynSgQWhhwr2vR5C2fgGrgf5WThvUJui1RS9zCYxum63",
  "key1": "3F5A8VwAKZTCSLsFmUQaoRo9Q18ALNQj4VoiJ8kJEdnogjiriE1Ckswg3D9HZyNZzMsSpsfJgfEPVjeX6vBNkPG",
  "key2": "2vWfZvhxjw3oF9C2qDCu7VisFi2nMyaMNy4KmWtfyPx81sSMwBkrn3UMgexNmTnRLT9BnPVDMp1JtARvqbXkJKUh",
  "key3": "4V7Pdzp8977B7o3zWwKADFqJhFAfKb4rsrc4L69k4nUe8k1Ku21AtQSWzLMx6ZyYSQCnDFqv2SHtMRYuzieZfyXs",
  "key4": "38F1JBHrtLJzPSWDrup6RkUcyR1MSC4CEYLc9GHVEFKug87CytuE612uWZcNDEggYSVcX596Z3H3K5NeGe7em9fo",
  "key5": "3JEdVysW9xXowUDzo63bPXhbgLdy9SWYx1gAfsaMmJhCLzTni6hJau9392xdEbWi6ybHt3ZjKXqZigFW9CjJvcCU",
  "key6": "55iHykRLCmUuqGUDkFyFsDtEgtX8d7nvgqPycB8dSWNHeqDUVmhsmbfovF94t6MzLgtinnm5GU5qga7iJztddNPG",
  "key7": "XbsFYsJVt2eRWdbQnPozB1vrAkn9fekvJfyrQeX58vEQZqdXg8wdppbhSHnmNdo7DL3sRSoh1a22cgCT2ezYpzV",
  "key8": "2MecB57r9qqnNCcercfehqZPpweHFwc92KRiL4Q6rWBkoWnbFWMUjZQE8Hv9JqiycESvqHa5T2AeQtkmnPnnjGwa",
  "key9": "66yQb2rty4ZY4kSPN2RumL6i1ZPuxCRQaZMLWJQwSh6Qz5s5jGAe6Z8xYwfvPzvAcBNpmzUdtDYA8nFpsyrHFPnH",
  "key10": "3zap6rH8NDhEA3xpx3i5NG4C1FmKdzuMhLas84ZJ1EAFA1wpdhWg5WYBjRWncFRgCcwKYwmyGYbwCveyRAoikc3N",
  "key11": "38v7NczzsjHXj9EWnNcGhYbe33MR8zsgW9vcEUWZYgEUHVCuBCcjDGctun7MtUvT1FHg9uGAFkjaCYDEgLekbodN",
  "key12": "477PYMf42R2ea4TM5E59yEsGasdpUtwGLY1roZ18qRALNMwaPi5HgHuvV56LRrja9ib9zNYPAHVSMgZ6aBAssDFY",
  "key13": "2t8fLgbVqJn8KisCiNXbLMr7qmNLeuoSzsgnCF8f2znUnEN6a5DFuTp9s659LSfpuhsXM5bgo3CAULXMyneGoCRo",
  "key14": "55ZDPu5njaRA5eYqfyK2JBDzLdC6SrSnEhXCmYRCmwPSGKGRM5b8AWXwmbX3pcKrYNXVQEDsVrW6mCSbzBNHm44M",
  "key15": "4VV6MMukwZap7BScXk5DwqQpQu1D7ATTqd6ykJUHD71hTVJRp3MVSkXPJhhKMo8UMHkr3NuWedvawrmKw8S5Lk1z",
  "key16": "26hPDn7j6zcBFe4XhMnzJZELRbtpCr1JqSJ5mV7J3fkgLj82a2EBd4jqscTgBsCxF6pjQniE3C3gDUBPoyVUT6hp",
  "key17": "5W5i3bT7vFXy8gwuzquyFTPSKVreTDFDPftRWpzZLiigg2vpMCVYJJCqsCx5PXCtVAM91xduhUSbxP1J75udzzaR",
  "key18": "4d1wK8FsgjxAJ5jHFH8yMESixWbigNbidJ5G8bfdgx7zq8SoCyhw7TwJyxErkYi1a5G2QeYhFb18XzrHGdyE1pZB",
  "key19": "3Pi7mas3aXSDhU6Kp7aeaJSvNWzpohEuC7Z85Pzao7K9YRrX2DKxoVA1bLBaZFQvJSbBryqAtwiZbmkF6YLddoLt",
  "key20": "4uri3i3AGpmYcADLhLPb69yFXxL8DuYV87S348mCzepDSgztbq6nEqAEn2edaj5yyDGq9q1sLiuA4q8QvMxzgsJM",
  "key21": "4jfAdbUfGQJX5EK542mFqjGF5PaAydvmicHbZHkKPH8wEeCa3Xs1nhhsKyZbPYEGe1FZDkmzNGYWS1uZMiu8fB9n",
  "key22": "5tJdAzUNQLDPCj9WtzEfh45kW3Do1GgYiTw9NrwHq4ndTG7oTh85uX5QGxciyqL2L9Du9oEdT5yoDjpGGmEiHDSv",
  "key23": "62ZcxeRCbPKpe5SeCy4NuxUX1CieZ9EmupC7qaRkhf1dySnr237t3Ze3PPqmevtcVKcKtEzBEBkyGW4y3mn39WnE",
  "key24": "3iyoU24AUke4QWpbcnYf86cmx4eCqfTCBZHAp8SKCZ9nDp7RiYbd8kWjrc1yv1L21RXzs2gkXhKdCyoKoYjBwVBX",
  "key25": "2t3ZgpLkgJz7bhebMHvBzQcS1tCqpKEhjVmozagbbGexw4S1h5yztmMSXkYebcLzX8LrF5ey14QL55TqW6NNFer5",
  "key26": "2PeB2xaxtcHR2Tnxpk8TuRRC1hx85qr3vfmPn8JZZD4gZbZXBwbfpWqhXCaMXQa3vdeN1XXerbPoFYEw5Ct7Wy11",
  "key27": "ocQctaZwX9h8KLwvEPT6DbxWwWtpRc7eQD1eF9oR1ENvxVyxJJ51Grv36jMccKY865DwY2f6DqmjVv1aH8BeC7u",
  "key28": "3Tvum8zy2q9TcYHAQU9MBZZenuH8maesqFcygQzqjajYj4f2UJzCQdzYohHGJryaiCrdCy1DL71RQr58MoRuvnVz",
  "key29": "4yw4A7mgdUGtSGYT2NMgCudkYbqK4KVZj67bh3Kj9Fs14zsWHQU7eDFTRr5jSgytTzasx1NopXyPDgyoytgsz7Ek",
  "key30": "1bHLaS3H6simu8ygwpKFNkLNjf5aCGMc6wtFY628kWvuM9coyCwamN1BNMs3C5Cqz8LgBsXvmfizcnabzwbiEor",
  "key31": "5W3C3PkpF4HEhKAktib4ES4TJyFvjENwKoR1XUatTXTBmJGLvDK4vGwGUXaR9ScDHPjZJiCLqBuScjnquAMvkpGD",
  "key32": "4VnGE618qjKfdr8jdm4e2ZxXWj6H1uFupsNFZXxYqh1YNAdfMh5W2xkXnVeTxCmKyY5mT1b3sGG7HkWojFZUU76w",
  "key33": "2ZLWeLTcnP32ZCnRjg7sJrp87237NaQ9TF5kmdcPYmhn6EVqoSwXwn5RcQVtMhJMGwD7iSHUU1p1AzxVdqaiL6BL",
  "key34": "64E5YVBtPGfg47rRhmVkTe8DhVzXtwhvnFSz7TJ7rMqiki49vH2R51ABd9iivcvDoLM9osYmHedXCq6Myb7rtcPu",
  "key35": "5NtTBywsN9tSTm4bV32WvQaYSLViwMzncyUCAuKwNEirWg9m5STDSzHrLTq5cFYpPQLM1Zpmr7UjZijiG6sxQ8P8",
  "key36": "2eoJ63NYZGR4n7ZkR5gvbHLmtpqD22BGqmKkG5h9PLcqnAtDziwcwnnADA4CshksyKKCoxdhrFGJBuPy7KTc27D2",
  "key37": "3asFouqvdx8VTxxENystzw2EBFcqUvjBs4LWqdyqGWnSP2sSSvDefKGWpqAcq4WeGaihbG7CL1nQfbeZ3zitk9ne",
  "key38": "3wL3o6Sp4dU9nLywxC2RCmLofBXfKuxp4Jg9HyJ1Z7AL8CmU5nFEjHXy9McDdB7ZDDx9mqdMePjMZFntG751PPsm",
  "key39": "4QFBV38WwmYNhSDZSrvGBtc4qBFF9taBLbijzMeNG4GVt9te8UHnWm6HTJZhs4fPkqBRMNg6EpVn5XpETpWw1YSH",
  "key40": "2MSTFHFHKs4twCFp3cEXKVbpDgwmfeFHf8KgCA3QrjXdMpWR7nBDsBrfoPnNYynAnC7t1y8V1BdMyBe3xfTmvDNi",
  "key41": "4BY7DA8TAVgwrm54P7F8odU62amEUeARtALEVAwr1yFd4WKSQYqh6zKYtCbejXRPaWT3ACwhaHVTqFrn3Fk1TYv6",
  "key42": "qR5fggCqmodyCKgYyBJ9WeUVHZHxuMRTmmmLJqUtj8dUUV6giqMBPb6vtTqrXE6rddwJAFVgcbaNFDB2c8EiznH",
  "key43": "3d5PzsRVuZNwqZWpu8276D5QYGFJMAhofk17RS6iCwE6bQ1TPE4DwhpoyRqzMVDhkjcLWv451dV8CE55BdyK9A3a",
  "key44": "5GamhiXqwQsLqachWVyWFEQKwLaK1cURMKuG45f5zujqkUYZEi9ScVsPDGRjoLuENuKpfK79tmYVSHHsDkSMfecB",
  "key45": "4CZu73oCzHw1MXyS9ZY5858hrc16g8x5xnH2mD95BzoodUcsGubvnZ2qiUcr3hjYhsRjRxhhDAewzjsGMy7JrWDt",
  "key46": "3LhMqaSVjCsv6tgUgucBQCx9kzC2pawcFpKDGkqAoGVdV3ndozisc7NB7j1cgEBEC1h9FMwFfCjkYbtVcRFqE2RR",
  "key47": "5bDqBzBGdPPgp1tSWJNiiS73nZzySwBA1VtAAtyDNwkY4UvwKu6TLcJUaE6vzaptBN3RhAUio7RKdMY5G8uLYr5d",
  "key48": "4EoFwcwdhJxctiGfLCc8kAjX3n8aGiXC6mK3Ns7SovN5zawkP1pYKBHMqP7JWZmUBhvajA6TezawvFJDCqYQZk51",
  "key49": "3XUDRoRfhy32mH3pkXhV4L3mMRoeaXPWZ7ah8cN55sJcoV1EXVnA4p7Qmso6XXe6squzwje1PwKvxLKZMSiNeKs2"
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
