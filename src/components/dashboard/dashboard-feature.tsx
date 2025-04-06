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
    "4Kbiz8qiKrNXnD71KsupgyXxMjiqjUaAzvDUzzpxGGRFBmb1oKFMTUWq36QkZE3Z2yfCRjySGiw1tPuvWiKaGrMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vtq9ygm2zke9UGbbP3AhQ3e2JbF997cD619WCKRF3fUxstjY1g7cvc48aTsyeUsnz1XFSwDXmjW2L7wZVSP8Uiw",
  "key1": "59MahgTkdhaYw7s4yueLRFNSqRD2tAjuabC9jTJABRYLySZFkpfMf3WCW57HK4Qb5d6dfuEXWuHoPe5W4nxjkJt1",
  "key2": "4iz1jqV1ah5trrc8789yxsVhevz7K3RvcepzGXayja3fUfUTkRT7KKdz1dwBjQw2P8s8KFKkFHd7Mh1P4seDR3oR",
  "key3": "4MPVSW7BtUgubQqsG1ADfug1HMcbydx71xrwFh1J67ZjwH44fox2pJU4kipsCCcchxGe5PcKXAu5W8jj8spK2eEQ",
  "key4": "5CskEprAA3s85ApHyLzEkJMVHjhE4E4nySJnQ9XfWKGbzD7q1WfC8QKz9yUeKjNXEv3GmQtRsRtLUPXzdUfA7kun",
  "key5": "Z1GK21DR2yaMMq19JQipbTehx7Ctumnqt1dLk9AiQAErJCardK1qtouMLSSZnaDyJzg1zjjuMKdrFaqyWvoDMqS",
  "key6": "36TajkwCTKum6Lf317yj7ebWfUBk4y5t6jsCKnrRWcBE6TjqZ1T6bEysn6jieJnNfC2au5bNj1o6e6762Eip6RCN",
  "key7": "4McWzRyTqj821hbycvHaiNozxeeUnSz9fk5hjSHRqNdUmV13t3tz5Gp51DLACPxc1yP37k1TQzYnXce6GZy52wmF",
  "key8": "2krP52TRPWmbDd7QZysz7wLF4Ft99P3vuQtx1UBJRXdPDAVucqTpjQfcu5nGc8PsAjWVdGd7Yu4dGR9gTAWYXLVg",
  "key9": "36AUjsiT9JwQm4ryed1SK9JoUsrn6w8G7bp6Taf19jcv1VajECYxBrsSoc67PCfVvuFKhYyhAnRtmMmWYnTVRczu",
  "key10": "gBxDBtvDEfbMCsFePfbbm5YuBJGZ3xg2utBLovdztX5wbdWchr7DHKsxrJV7fCybdqzyoeRRMN9JvAwgcp4BXjS",
  "key11": "2gJm93PZ81DuJTcu9QwVxRFFwPKNuQJDWMiz3LdCTsG4emZ74cJkP1RHQA5D83BL5EHxqDwuiq6mUonctcwEwmWz",
  "key12": "66SF9aA9nAzfTv6oKfiTAWaBzTdZiWS4jcYsdBr36o9ajCNnbQGFSKcuQfAnHtr3wjnSbLuSrrd7KsmWGuXmoyef",
  "key13": "3bedigw7yoxhpAxrBjVortMESxSyXHSpWbXDmHqsKGASU2e1au3Bq9tSoJj4xoPTW8h5XVNeVhdWmYzeUdoAVEgJ",
  "key14": "ALAgVGr1k9V9AF2sPZf5Zvks9BwZoJR2C7yDY3KoXeW5CJeXqSXeaXBUxRkitB9Az4QZgVVHGAQSgVpadhf2vFN",
  "key15": "5iG36FfKAMqTyJHQaArAa15DvqwFvuS8mTTcpruWvc5fnumJG56FDo8TJBUbhCn3PM96LeKVfCKpwcVCNCEifjq2",
  "key16": "48pJbkpGvSjoJTGZQXjo1gunyFagaiCaZdsJfJAR4kD9q1zpR3Aps8JFJXMqeasCk3UrRPxBZKqFm4jyZSeYbKqg",
  "key17": "5AWKXWHJjkYCTZ5MqHpuuvsm5tQ3u4hU6xyHYeiaMMvHoYPPKa1WAhPFQDqFNnZ2HALmkSMP4qUArma7C8gNVhHT",
  "key18": "3AS1F8YrDt97hy6f4YB6VpuksxXJBX131gjFf4ZDPfHj2zj9ZV5KU4E945ChpuL5yXwWVk6svwYd6Kxf1vpPQrrc",
  "key19": "24UUxgxFAze9mLX8CYhbLAj7rw82UgWuu95C4SgENJwHXwYLdSQFctZRJyuiSgkEwKssSUNSm95wU6kvzQQH2jYX",
  "key20": "ipLkW3922jULLtPxMwFdcx6cE3FEZ7c1zxUoA9Estb1CdVTVMxrj4xJDLNPqPpNap4CYcMSDKrkK9iWLsxRXKbj",
  "key21": "3uDRb1TJP4Cmk32LRE1E1xDg2KxRXZXLMS1EdugvBgxz9BS4WxWYprHAeHMs8EZQUYBMTQg8PBWPXtXMYoW5Fai7",
  "key22": "2J64wb3QkDL57veyejxUscT64oeagLbjkRWFMm99ytDDiWgPzW3zTp7bhTmobJ9WqzAbMQELECfHAJREKo9qvW9q",
  "key23": "573fBdbGPncwGYKHfzh9QCoPGyTspnzJkedK8DBf9vBozq1Z7Do5dBQSRHWLGXH2ATsJtzq7YEbG7uFi15aUdWzf",
  "key24": "3rnqeZ34dFMhYk89tcA3tup3vzPS6c2ePPMfPAVtJRa61VAzx5w4NbAKaS2JFHg4DuHkPFDo8KNj2p5ttQiTJEL4",
  "key25": "4ZyETYrDwHBjB2s4vQz4G8aNe1KMoPp38K2taCg522Q6NEbfECi1eyDtkDHCr3nXc27b7qxAXqsxZTnR1oevDXfM",
  "key26": "6rGoHDJekxediJ8j4C6KRp3ozSe5m94me3TUxLHhkBPWMvDMMn9dm8htC4MWHWDK5kwp7SEbekzNUptmEDQ4ZU2",
  "key27": "4W73Qvajjos8Bje9rVPQF1mFMCh9N5XU5HxBbdu6GnfbdstVpHeJ1dP1FmUhtqH9XW6CUGEzZuKKKd41LkcW4q5B",
  "key28": "TuPHmkga2bKGvoMimQ6eFo29gJ8dQZxc1kUaNG6GkBEbXBt8eq8HpozkG3L8Drwzv46hWonXy7uLrrncVSjaqXE",
  "key29": "5TuUm3EPQXHsf55qzitFsGp5qbJqYYvy4ZUpQMVG367kDdmwXeiFd1jvbU8MCRMUYAQPxKwzyEaAszhCxVhJWbZB",
  "key30": "2Ahm6c8wVTz2uGcWBYcMkf2SHLmp7Cp8toQ2M33D2PAq2QW1rYSPcp9e7iNRG9WWCLwTPmU9kuYsom2nSJfSzkjJ",
  "key31": "4ZuLXnQ2xSW9fB79TNU52MQ8jeHVT9ebY116GcywCABTXom9cXFarbyCBBtv7NuWRsny6iUBcDFEEL53QdDYCxZa",
  "key32": "4A12zRBfjbuvX2Rw3dDkED1sfoxUm1VpSfUQWDu8a3qJ9Z4eVeEfjTuvLEr8bhnHvqHa2mLKMoQ28N326XinV683",
  "key33": "4sdrPJoH2MaQVCrQ5LvHm8XC8Ey7NjkAfMT2bq1skaLcVhbzMBJWmcfRMHB3UvL9sVUg3qbBW7YpfRPySxYgHHdR",
  "key34": "5YXRpNrwSu5vLPAbQ35P9uVXcATZhrqp4HYfKoHuxQn9xMox1ztSwqWsU7CQv8EvRnxb9mKUYfG3rTQA7xVLAyqS",
  "key35": "YxWFN6WzSFQWnuYMv6Lhz2rk7H2xjYjXHw4hZmfPtfd5TuCoZYaadYi2kKPZiL7rkmJooFVEaWJFCwxSyjNBgUk",
  "key36": "3FiZmedaZ9JE5C1PtBmCUVNnXycQ3X5bZodqS94dxFvvrg5hFJrSdV9yXLxy7iPGda55X1iGgBnDKNE3sAn6SMMH",
  "key37": "5rC4u2uHWG2Q2azh63yVuHMzjuHAPqMpRSN7VnFD2xJmJeNXGM72cP1FYQpogSTPkB5QHP6YCeNoaoUAgBmPsFkp",
  "key38": "NjTHdvGRBDxyf4ps6ocuak1uu7kTd9aQjkiJEeKi1uhBTnPsFCYhomftuuGP1BaXpZrMwUrqY8FvgKWNKEtuvw3",
  "key39": "3FKQXDsnngrHqWRKXDTbWMZwZTnD5PA5nbaQTwQPhZEKeaBhVJtRFieQ3fN3zcXnmC7mk7hjhKg1fCkxGXAHZLwn",
  "key40": "2yEXwKbUoH7jthEPY7AKUTsr7eiLx4N2NAw91J7W6VsvaJe6GiVw6PaZfp7MPvCpUxV6TgCX4p8FNHepjZhwZJvz",
  "key41": "2igzp1px2Y1nH3ubANoJT6FGzDTYC15pxoUzZf28G79akAarinWYucdeMTKinmvpdN8sh7qKShsFDjVsPWGE8VYA",
  "key42": "4VG87uzCrCG8ouC6rZve1EvafZnriFB4wgHBgihGuKzfMzSB6TPg2ci6hMQgHjcPihtFL9dpdfWYudfzhHuQrqtY",
  "key43": "4ZrsMg92gmTbp58wLXY66ZUr3ko5gX8si2WqpR3bpsdbJYB9dTXfv6Fv8sjFQgANGdLp59Wuw3ryzedSPR1SSii9",
  "key44": "4JMSN4KkikbpWoC2w83aBAnobTCdDtcQFARpjGb1dpJumdG2QieeMqFEjyJei4cWXEEAz8Mi8DZRoec5mJ5CaCFu",
  "key45": "48HtVqqbE6t59fZtuTK8bbJWpY8tMjVaYZC9JiwVT4gXqkNW3jecjQtAKrACxXpw5RvH8PiNn7GgVhcYskq6zGB2",
  "key46": "2okxJRPQnVbpmypLUJZDNuY9Qpw3gTR3jXKxCX1VFNvQdk5hG3yCjiriKJhBVL62unGQrSGJp8gzChEGRSMUNSs4"
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
