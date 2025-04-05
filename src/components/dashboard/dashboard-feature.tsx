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
    "3areajSn9hBsMZVMjCgHK32rrSjdwAsNwv94KoTVakJkSKRmqjzBm7zCEkD82C7bBcKxLd3fKjQVr6eob5dAsavq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tGi9FwZUHDDwUQ3rgxB6Cc9NPSQuJECPfXFpF9j9n1TVFJ1cLA3Epe2HxGn5niV3LUWgAPpuJzi54cK5WDLExBE",
  "key1": "4FptNoSLPqLqv5HA6eZt6k7cfPioRtjNU7i4TEhMdFjoFJYhNhZNVygmdytbaHQTyEEAvXJv78G1wYZXm6o2MNYY",
  "key2": "5vuXk5Pmx27d7KZMvMNXDSyCfS9ZcdSrYZKExPR6Q96veuKUms5jss8N4zMH99tuLRwHoYWKKANHoE4jC112SmTH",
  "key3": "2NCtLFeBHPpXb5THa59piXVqeaSJkAbttv6A1jTUQs6RVHfbHZeVqfGSKKMAYjrqNauFYHU3bBWwa1uEZbXaiiNh",
  "key4": "2jbcDzM4vbuxfYu3XXVsiH2eyQjeFxcxxdXjghpwR256s7Y66gti9YQdFpz2YrEbE8hi47fXtjiQjmcXKTjSp1z4",
  "key5": "sNkFRjVP4qYLQYig1KB52VYpZ7gW9oH2qaQCRWePSAX9eRvmigSb5G7gLMTqGkqcEKkBvZxPmFu4SYqHVuZFNmP",
  "key6": "4Rq965qvzFSAn6c9eFms1iq513tVk1jKiFfZMZyu2HMwPqFtuLn5qHWAfnJBM5eszh1svY5tSGJdMe2FmyLb3if4",
  "key7": "32rvZW9oYDNCWsfmmcLFLLGG7wvWgJANDZmBibDjAxaeRPovbyaVHqCCrH7dyyC3nomwRMzpvN7U332UWbP7HmPz",
  "key8": "2YN1y9VasqaohcXpZA5g9ghCxp7eoxvFsg4jbrgpja2YqJSx7mfEiL4CMeJCJike3vYtirtBaPtoso38wP2QrNBi",
  "key9": "2bLYbjVV3NuzG9cN6f8B83hynpi8ejK7Zmpd1ZF51ABCBJo6RtjPkoFckUTKBJn7A1qBWA7GVDsyXaqBY3kR5jCy",
  "key10": "5ftqQK8vb6PXAX5q31G8UiiCNFV3gm7cur8pAWjQxVjv9T4FxtoGkjeEGTavPi9pFHz2sWEmrDuiPXA3PwKynvNr",
  "key11": "2NecuQvt79sVpaTpazV4TvAoXC5HURStJv5osmHTN8DAF4e13GtkzkpGGYhsBeTWyk41gEgHny8YMkVgnv5ykeFF",
  "key12": "2YEGeEAVmaQHfbQp2QNJmtdrnqHCS3G3MZk65xwMUmxBSymcFFpy9DpxPm8MPbKarCNULwgYmQywnj489MytQpNW",
  "key13": "zUzYTEbi13q7izBEAn2mri9qGC6cTP1hif6BWE3QruGdRiyMSQDZWsddMAUJKJme7ngSnCqP4nYdK8vExmMfe1N",
  "key14": "5Bx2i9WgKf8Xkvn9vrsxNtGWj1LM8vfuzc3VYtq325jricxzuc9dv4LsBUW3W948VyNhmTcvSnu6DPFT7WkZZHfK",
  "key15": "ehEbuVx7gudoxGLq4Ah6eUXiZozVN4Nru7NW2QVgwb781pZiZPbPcmy7EAj6795kgWwunwVouJYQpU8ySwGaJeY",
  "key16": "v9NSwrWKPVrPxdajKhwDJ6qESxc8uGZ6F6tiyEKfa1CB44bi53aeycmqE856eApbS9N9sRkWaiFquJ8Qc6qGGVw",
  "key17": "koMJ4mTnEU2onEiGeJdjQv3vJtcR5dMk6LqrFDHyVpdVpDCid1pfqpBTuZEcDW8SVeFfm2J55sa3JJF73q2mhMj",
  "key18": "uH1LrLjp97EUwKLmivDKTa8sB8de5MA7pVt8CqdthSnuczCKyc15QANT6FDJVSAviq8ategNZj6BNytHeeSHaJ5",
  "key19": "2tE3BXeQMMiLUqA2oLmbA32c55RbRqrUu7oEEH2xzjyG5S6aaJUvK83r1j6NBDga4QnVpnqX23WgFhkbUNDhS91N",
  "key20": "628x72xq7HskCFVfKLF9fBFyNbMSnqdVrUQiqEm5VHJcmvtkejYRzvcFtk7kzbQ9uzywGrtwUackokysH6LH17ZQ",
  "key21": "5YYLHpf29315BgXUubU3pQ1oZscnjQ2BKanwbxiLwJMDJ6PqPZ8sdGMsypAMmKdYtyPij5N9T4wJoYMcn71DkMCb",
  "key22": "3JndNDbhm1roatV7Eug3HF81hYmYyQx1bcbg2doBBXrhuj4fuU55ZnTfEVPwDHomYeWS5Pjfyj1e8cFsDUpadJJv",
  "key23": "5KGnTd38oAXWvdGuFcoTUfFds8XLTtTiTBfKKstUz1mssb4FcvWwNDgVzSe73ksxL6Gbe6826brj4sxXYnu9ZPdf",
  "key24": "fDcigBpazxrdmv7YrTTJUVvbBWndbwqmY9kRGDqUUABu193C45mVBUyejGQRQSKRHMKgSiPRU22e2Wp9VbKvXKN",
  "key25": "3RtVAwnNshCcyDvTZcVzAQKGLL6rLtP4YemgWrzgy8q6LXCx3cESEs3fvrEjTKbRqLbwof8zGk1NWrVfFxQJKtjq",
  "key26": "4a5a2YVznScQ3KhdsasyBNLBTguD477KQH7zdrmv7QuEHkGSUj7M6DRyvkNxezaX58gVaPJNJSa5J2HSuFYx1MVY",
  "key27": "5gGamuF91QgHhsPuCqumm8gEU1brERwHXaGX1RaUnH6QD8MdKpF9KJV3cRGMKFyknW3q76wMpwnjs5yfY3D4qpSc",
  "key28": "2NEmCSv4qENtzdsgVoHxYTJ93Jx1Kbv8vN8XiS3h7b8dfcaZikuDXzpaG72JUcNyr449V2YRwerT4h1GQoG73Thc",
  "key29": "3yBj29BjXHr1k3g7v7SZx7whmqpL62MHD1KRv6iUhs1FYzdxokc7U5C5cpo4y3CoxzxvLmX3gP1xQ3tvcAq2Wy1P",
  "key30": "4bpoF7zUjucY2Hg21YdxwN8GfAT6hP2G3tynz7sHKVjEDcLqQrHhYyuGnEsCyUFvLK6Q1WobzMWFmMTUbdq9otLj",
  "key31": "cnmEVg8M85wPKgXw4WCUmQCPMfX78EMmd4DmVHYUJRZHt2eJcm9dqG6wyRp64gzGcRp9pXLumJMii2D8RjovvZm",
  "key32": "5Y3mfM2nm6rKbbr6X7wDfdNSXCibAyj3XGboBNtMzgJtLk2Gug4oxCRccsAphagaMSCUvyvdRrCd4DHjpeEpbcND",
  "key33": "48Pg46rMkCZrWLG5bZZuGUH15jw1SLCRpFSeXzHXJ1XLZmpg68srvLSd98QZHFkixA6qa3c7KWDCq6Xj7ifrcxL5",
  "key34": "344JFfoZznvHvX8U2JKgoLYcREVbqB8St5mBdKihGMCeXHJLocKTgRYuKusNqkrf51jfdNyVTGdUxZjAEGapJmST",
  "key35": "YFCzHtqkxUp1zdh7xkrbE6755Ftfd55mYvHodUjZxfGTY93oBho3c41wNHVBqK7b4mCtjxosRLzEsxmmRk8pTQE",
  "key36": "3MHET6TJwnaSzM9vbz1V5WZjj2bSyqhaASQAgZwCjaeoJxAyKPV5nrEwn6BYGBHoNuQacoPdNQ42ohi1zmqAzDfv",
  "key37": "67VzuEBaYmAzATqWJCnr72sbMsvnRkVCboXrwweMpqaCmzx55t5wfRTsBqVA4fVq9cRiDsLfndqTt3Mbwaz9LwyJ",
  "key38": "gt7PUN8D9D67jaCB5HLDm4pAZH5FgPuRAuQ9rqjA5E6CTnPx8kT9qFE3kuDTxDCENi9h9jC9jy5mQJdhJEZj19o",
  "key39": "2anXeE5vnoTGk442BYue4dB3FKMJVpvr69s3LQTQwiPWXAWBhmjYFWJ1n41gjb3J4cRNTi9x4rTTmF5KoSBLmmAE",
  "key40": "4WBPc5TbL9WSnuSyumQddxtHH4JbpDM4juReYSgeLRvb9HccdJwtEntnrsWYDRpa3194CxPPTRLhr7WoDozDWbs9",
  "key41": "2bN7mMq93LVZSyhjtvJ35DEJe2o5FaFeSrbUzpCK7ZxM5LFdxckdWDYubrBEV4PdA9pMLWzWydQ2GhxGoBsUDZaC",
  "key42": "LVDB4rbzDGNm8JN2VBjYJFUxe9RUwKeMWLJz7vfcxVZLK7oD28AhVvGzBoxs7R1u5em17GuPvN3tpS4p8Ppa16s",
  "key43": "2jjJ64VVXftsta4fYBN7g19b8wD43p728i5uQUqKg72J9ocnUvnZp1bH5srLoBVd8uNNVaHJY6bnbkWS96Xq7JTK",
  "key44": "2J6PC87KixqpMUibc49dRPLvnJveGFEfqtrVCAvTmMZDhgJc5nuYhqCTnjRtUYRxFvc4mU3YJU9zYp73ksLXeuUN",
  "key45": "4BTf4UwFDEzMkSo4LizNYJD2AJHnMT1amxDz2n6cxybM8xw9BvmPCpNUdzNpakZEWfm9x5USpTYcDW9WndKine9Y",
  "key46": "4R4wVemUgJxgbM2S8qdq4HQN37Lh4tcD8N8D7o9UUoCh3i34wkmkCyNpZCD3xgxB2R5cFcrxksqCQWGgCLHGmYEL",
  "key47": "3PMR2KCQ8LG1wSRT968iWCkzETzPhTEnk742fKHHM9wrRNmSokg3xu1osuD91U1LBpc7wefVxpnbyLRzedQ6NA32",
  "key48": "4HiDFh9xRS5ojVNoPSNXG7jHwnWQvPsvwdwbMcG57ZZqzBZZYMgsdb347ZrsEdu1Gx4nkXVawd5SAkZfYtS3h9Tn"
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
